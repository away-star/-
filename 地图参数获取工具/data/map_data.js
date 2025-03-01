/* data/map_data.js */
// 地图相关
module.exports = {
  // 腾讯位置服务API
  mapKey: "ZQWBZ-NQBLV-W7CPF-U7QIR-5HBNQ-AOFUE", // 必填


  // 地图部分参数

  // 学校中心点坐标
  longitude: 102.850342,
  latitude: 24.827291,

  // 是否展示 POI 点
  enablepoi: true,
  // 是否显示带有方向的当前定位点
  showLocation: true,
  // 缩放级别
  scale: 14.58,
  // 最小缩放级别，比缩放级别小0.3-0.4为宜
  minscale: 13.28,
  maxscale: 17.58,

  // 地图边界
  boundary: {
    //西南角
    southwest_latitude: 24.811501,
    southwest_longitude: 102.836149,
    //东北角
    northeast_latitude: 24.846180,
    northeast_longitude: 102.867236,
  },

  // 学校边界
  school_boundary: {
    // 东（学校最东端点的 经度，地图最右端）
    east: 110.280699,
    // 西（学校最西端点的 经度，地图最左端）
    west: 110.2733,
    // 南（学校最南端点的 纬度，地图最下端）
    south: 25.089701,
    // 北（学校最北端点的 纬度，地图最上端）
    north: 25.09839,
  },

  // 自定义图层
  groundoverlay: {
    // 图层透明度 0-1，对应 0%-100%
    opacity: 0.9,
    // 西南角
    southwest_latitude: 25.086921,
    southwest_longitude: 110.279073,
    // 东北角
    northeast_latitude: 25.101649,
    northeast_longitude: 110.300436,
  },

  // 自定义地图
  map_bottom: "https://cdnjson.com/images/2024/03/13/GXNU9b2e3c77b9ff605a.jpg",

  // 闭合多边形
  points: [{"latitude":"24.829708","longitude":"102.838534"},{"latitude":"24.833208","longitude":"102.844613"},{"latitude":"24.833019","longitude":"102.849824"},{"latitude":"24.831760","longitude":"102.853619"},{"latitude":"24.831157","longitude":"102.857264"},{"latitude":"24.831535","longitude":"102.859035"},{"latitude":"24.828504","longitude":"102.862497"},{"latitude":"24.825237","longitude":"102.865910"},{"latitude":"24.824186","longitude":"102.862242"},{"latitude":"24.823995","longitude":"102.858099"},{"latitude":"24.822954","longitude":"102.855042"},{"latitude":"24.820526","longitude":"102.852332"},{"latitude":"24.818627","longitude":"102.849117"},{"latitude":"24.818123","longitude":"102.846963"}]}