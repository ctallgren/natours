/* es-lint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2hyaXN0YWxsIiwiYSI6ImNsMzhhOHk0dTA1amYzY2pqcGNtenY1cGMifQ.T2PyKEVPVvWNkDhoYbF_vA";

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/christall/cl38b5ruz000z14pl2ov6kuyw",
    scrollZoom: false,
    // center: [-118.111779, 34.111677],
    // zoom: 10,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Add marker
    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.description}</p>`)
      .addTo(map);

    // Extends the map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
