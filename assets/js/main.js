const DATA_URL = 'data/resuscitation-network-people.json';
const cardsContainer = document.getElementById('cards');
const statusEl = document.getElementById('directory-status');
const searchInput = document.getElementById('search');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const state = {
  total: 0,
  directoryItems: [],
  meta: {},
  mapController: { filter: () => {} },
};

const normalise = (value) => (value ?? '').toString().toLowerCase();

const formatDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const buildKeywords = (person) =>
  [
    person.name,
    person.role,
    person.org,
    person.city,
    person.country,
    person.interests,
    person.confidence,
    Array.isArray(person.tags) ? person.tags.join(' ') : person.tags,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

const getInitials = (name) => {
  if (!name) return '??';
  const words = name.trim().split(/\s+/).slice(0, 2);
  return words.map((word) => word[0]?.toUpperCase() ?? '').join('') || '??';
};

const createTag = (label) => {
  const span = document.createElement('span');
  span.className = 'tag';
  span.textContent = `#${label}`;
  return span;
};

const createCard = (person) => {
  const card = document.createElement('article');
  card.className = 'card';

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.setAttribute('aria-hidden', 'true');
  avatar.textContent = getInitials(person.name);

  const body = document.createElement('div');

  const heading = document.createElement('strong');
  heading.textContent = person.name;
  body.appendChild(heading);

  const meta = document.createElement('div');
  meta.className = 'meta';
  const locationBits = [person.city, person.country].filter(Boolean).join(', ');
  const segments = [person.role, person.org, locationBits].filter(Boolean);
  meta.textContent = segments.join(' • ');
  body.appendChild(meta);

  if (person.interests) {
    const summary = document.createElement('p');
    summary.className = 'muted';
    summary.textContent = person.interests;
    body.appendChild(summary);
  }

  if (Array.isArray(person.tags) && person.tags.length) {
    const tags = document.createElement('div');
    tags.className = 'tags';
    person.tags.forEach((tag) => tags.appendChild(createTag(tag)));
    body.appendChild(tags);
  }

  const footnoteParts = [];
  if (person.confidence) {
    footnoteParts.push(`Confidence: ${person.confidence}`);
  }
  const formattedUpdatedAt = formatDate(person.updated_at);
  if (formattedUpdatedAt) {
    footnoteParts.push(`Updated ${formattedUpdatedAt}`);
  }
  if (footnoteParts.length) {
    const foot = document.createElement('div');
    foot.className = 'meta';
    foot.textContent = footnoteParts.join(' • ');
    body.appendChild(foot);
  }

  card.appendChild(avatar);
  card.appendChild(body);
  return card;
};

const createPopupContent = (person) => {
  const location = [person.city, person.country].filter(Boolean).join(', ');
  const tags = Array.isArray(person.tags) && person.tags.length
    ? `<div style="margin-top:6px;">${person.tags
        .map((tag) => `<span style=\"display:inline-block;margin-right:6px;padding:2px 6px;border-radius:999px;background:#eef2ff;color:#312e81;font-size:11px;\">#${tag}</span>`)
        .join('')}</div>`
    : '';
  const emailLine = person.email && person.email !== 'N/A'
    ? `<div style="margin-top:6px;font-size:12px;"><a href=\"mailto:${person.email}\">${person.email}</a></div>`
    : '';
  return `
    <div style="font-family:system-ui,sans-serif;font-size:13px;line-height:1.5;max-width:220px;">
      <strong style="font-size:14px;">${person.name}</strong>
      <div style="color:#4b5563;margin-top:4px;">${[person.role, person.org].filter(Boolean).join(' • ')}</div>
      ${location ? `<div style=\"color:#6b7280;margin-top:4px;\">${location}</div>` : ''}
      ${person.interests ? `<div style=\"margin-top:6px;\">${person.interests}</div>` : ''}
      ${tags}
      ${emailLine}
    </div>
  `;
};

const initDirectory = (people) => {
  cardsContainer.innerHTML = '';
  const directoryItems = people.map((person) => ({
    person,
    element: createCard(person),
    keywords: buildKeywords(person),
  }));

  directoryItems.forEach(({ element, keywords }) => {
    element.dataset.keywords = keywords;
    cardsContainer.appendChild(element);
  });

  return directoryItems;
};

const initMap = (people) => {
  const mapElement = document.getElementById('map-canvas');
  if (!mapElement || typeof L === 'undefined') {
    return {
      filter: () => {},
    };
  }

  const map = L.map(mapElement, {
    worldCopyJump: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18,
  }).addTo(map);

  const entriesWithCoords = people
    .filter((person) => Number.isFinite(person.lat) && Number.isFinite(person.lng))
    .map((person) => ({
      person,
      marker: L.marker([person.lat, person.lng], { title: person.name }).bindPopup(createPopupContent(person)),
      keywords: buildKeywords(person),
    }));

  const layerGroup = L.layerGroup().addTo(map);

  const renderMarkers = (markers) => {
    layerGroup.clearLayers();
    markers.forEach((item) => layerGroup.addLayer(item.marker));
  };

  renderMarkers(entriesWithCoords);

  if (entriesWithCoords.length) {
    const bounds = L.latLngBounds(entriesWithCoords.map((item) => item.marker.getLatLng()));
    map.fitBounds(bounds.pad(0.2), { maxZoom: 6 });
  } else {
    map.setView([30, 0], 2);
  }

  return {
    filter: (query) => {
      const q = normalise(query);
      const matches = q
        ? entriesWithCoords.filter((item) => item.keywords.includes(q))
        : entriesWithCoords;
      renderMarkers(matches);
      if (!matches.length) {
        map.setView([30, 0], 2);
      } else if (matches.length === entriesWithCoords.length && entriesWithCoords.length) {
        const bounds = L.latLngBounds(entriesWithCoords.map((item) => item.marker.getLatLng()));
        map.fitBounds(bounds.pad(0.2), { maxZoom: 6 });
      } else if (matches.length) {
        const bounds = L.latLngBounds(matches.map((item) => item.marker.getLatLng()));
        map.fitBounds(bounds.pad(0.3), { maxZoom: 8 });
      }
    },
  };
};

const updateStatus = (visible, total, query, meta) => {
  if (!statusEl) return;
  if (total === 0) {
    statusEl.textContent = 'No entries available yet.';
    return;
  }

  const prefix = visible === total
    ? `Showing all ${total} people`
    : `Showing ${visible} of ${total} people`;
  const suffix = meta?.updated_at
    ? ` (dataset updated ${formatDate(meta.updated_at) ?? meta.updated_at})`
    : '';
  const queryPart = query ? ` for “${query}”` : '';
  statusEl.textContent = `${prefix}${queryPart}${suffix}.`;
};

const applyFilter = (query) => {
  const rawQuery = (query ?? '').toString();
  const q = normalise(rawQuery);
  let visible = 0;
  state.directoryItems.forEach(({ element, keywords }) => {
    const match = !q || keywords.includes(q);
    element.style.display = match ? '' : 'none';
    if (match) visible += 1;
  });
  state.mapController?.filter(rawQuery);
  updateStatus(visible, state.total, rawQuery.trim(), state.meta);
};

const loadData = async () => {
  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error(`Failed to load directory data (${response.status})`);
  }
  return response.json();
};

const initialise = async () => {
  try {
    const data = await loadData();
    const people = Array.isArray(data.people) ? data.people : [];
    state.total = people.length;
    state.meta = data.meta ?? {};
    state.directoryItems = initDirectory(people);
    state.mapController = initMap(people);
    updateStatus(people.length, people.length, '', state.meta);
    applyFilter(searchInput?.value ?? '');
  } catch (error) {
    console.error(error);
    if (statusEl) {
      statusEl.textContent = 'We could not load the directory data. Please try again later.';
    }
  }
};

if (searchInput) {
  searchInput.addEventListener('input', (event) => applyFilter(event.target.value));
}

initialise();
