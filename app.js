const mapWidth = 8192;
const mapHeight = 8192;

const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 2,
  zoomSnap: 0.25
});

const bounds = [[0, 0], [mapHeight, mapWidth]];

L.imageOverlay('map.jpg', bounds).addTo(map);

// 不用 fitBounds，避免坐标漂移
map.setView([mapHeight / 2, mapWidth / 2], 0);

// 限制范围
map.setMaxBounds(bounds);

// 点击获取真实像素坐标
map.on('click', function (e) {
  const latlng = e.latlng;

  const x = Math.round(latlng.lng);
  const y = Math.round(latlng.lat);

  console.log(`x: ${x}, y: ${y}`);

  L.popup()
    .setLatLng(latlng)
    .setContent(`"x": ${x}, "y": ${y}`)
    .openOn(map);
});
