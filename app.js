// ====== 地图尺寸======
const mapWidth = 8192;
const mapHeight = 8192;

// 创建地图（使用像素坐标）
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 2
});

// 定义边界
const bounds = [[0, 0], [mapHeight, mapWidth]];

// 加载你的地图图片
L.imageOverlay('map.jpg', bounds).addTo(map);

// 适配视图
map.fitBounds(bounds);

// ====== 点击获取坐标（关键工具）======
map.on('click', function(e) {
  const x = Math.round(e.latlng.lng);
  const y = Math.round(e.latlng.lat);

  console.log(`x: ${x}, y: ${y}`);

  L.popup()
    .setLatLng(e.latlng)
    .setContent(`坐标：<br>x: ${x}<br>y: ${y}`)
    .openOn(map);
});
