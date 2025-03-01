/* data/map.js */
// 地图相关
module.exports = {
    // 地图部分参数

    // 腾讯位置服务API
    mapKey: "ZQWBZ-NQBLV-W7CPF-U7QIR-5HBNQ-AOFUE", // 必填


    // 地图部分参数

    // 学校中心点坐标
    longitude: 102.850342, latitude: 24.827291,

    // 是否展示 POI 点
    enablepoi: true, // 是否显示带有方向的当前定位点
    showLocation: true, // 缩放级别
    scale: 14.58, // 最小缩放级别，比缩放级别小0.3-0.4为宜
    minscale: 13.28, maxscale: 17.58,

    // 地图边界
    boundary: {
        //西南角
        southwest_latitude: 24.811501, southwest_longitude: 102.836149, //东北角
        northeast_latitude: 24.846180, northeast_longitude: 102.867236,
    },

    // 学校边界
    school_boundary: {
        // 东（学校最东端点的 经度，地图最右端）
        east: 110.280699, // 西（学校最西端点的 经度，地图最左端）
        west: 110.2733, // 南（学校最南端点的 纬度，地图最下端）
        south: 25.089701, // 北（学校最北端点的 纬度，地图最上端）
        north: 25.09839,
    },

    // 自定义图层
    groundoverlay: {
        // 图层透明度 0-1，对应 0%-100%
        opacity: 0.9, // 西南角
        southwest_latitude: 25.086921, southwest_longitude: 110.279073, // 东北角
        northeast_latitude: 25.101649, northeast_longitude: 110.300436,
    },

    // 自定义地图
    map_bottom: "https://cdnjson.com/images/2024/03/13/GXNU9b2e3c77b9ff605a.jpg",

    // 闭合多边形
    points: [{"latitude": "24.829708", "longitude": "102.838534"}, {
        "latitude": "24.833208", "longitude": "102.844613"
    }, {"latitude": "24.833019", "longitude": "102.849824"}, {
        "latitude": "24.831760", "longitude": "102.853619"
    }, {"latitude": "24.831157", "longitude": "102.857264"}, {
        "latitude": "24.831535", "longitude": "102.859035"
    }, {"latitude": "24.828504", "longitude": "102.862497"}, {
        "latitude": "24.825237", "longitude": "102.865910"
    }, {"latitude": "24.824186", "longitude": "102.862242"}, {
        "latitude": "24.823995", "longitude": "102.858099"
    }, {"latitude": "24.822954", "longitude": "102.855042"}, {
        "latitude": "24.820526", "longitude": "102.852332"
    }, {"latitude": "24.818627", "longitude": "102.849117"}, {
        "latitude": "24.818123", "longitude": "102.846963"
    }], // 默认地点
    default_point: {
        name: "北门",
        aliases: "学校正大门",
        img: "https://s1.imagehub.cc/images/2025/02/02/eaeba90f71a877b191ee93d2e88bf252.png",
        desc: "学校正大门\n可以通行行人和车辆",
        latitude: 24.833239,
        longitude: 102.847478
    },

    // 地点数据（使用嵌套列表存储）
    site_data: [{
        id: 1, name: "教学楼", list: [{
            id: 1,
            name: "文汇楼",
            aliases: "1、2、3区 公共教学楼",
            img: "https://cdnjson.com/images/2023/02/26/building_zhishan.jpg",
            desc: "全校最大的教学楼，含有多媒体教室、电脑机房等教室",
            latitude: 24.827223,
            longitude: 102.844775
        }, {
            id: 2,
            name: "力行楼",
            aliases: "6区 教音 | 设计 | 传媒",
            img: "https://cdnjson.com/images/2023/02/26/building_jiashan.jpg",
            desc: "听说有很多工作室、播音室、练琴房、陶艺室，不过这里的机房巨卡",
            latitude: 24.825787,
            longitude: 102.854856
        }, {
            id: 3,
            name: "格物楼",
            aliases: "4区 | 体育 活动中心",
            img: "https://cdnjson.com/images/2023/02/26/building_zhangshan.jpg",
            desc: "4区\n学生运动的好去处",
            latitude: 24.824582,
            longitude: 102.851949
        }, {
            id: 4, name: "中山邦翰楼", aliases: "", img: "", desc: "", latitude: 24.825105, longitude: 102.845551,
        },]
    }, {
        id: 2, name: "图书馆", list: [{
            id: 1,
            name: "图书馆",
            aliases: "一楼阅览室",
            img: "https://cdnjson.com/images/2023/02/26/library_A.jpg",
            desc: "距离宿舍最近的阅览室，不过电脑声音很吵就是了",
            latitude: 24.824306,
            longitude: 102.848723
        }]
    }, {
        id: 3, name: "二级学院", list: [{
            id: 1, name: "新闻学院", aliases: "", img: "", desc: "", latitude: 24.826069, longitude: 102.844219,
        }, {
            id: 2, name: "政府管理学院", aliases: "", img: "", desc: "", latitude: 24.825670, longitude: 102.843377,
        }, {
            id: 3,
            name: "工商管理与旅游管理学院",
            aliases: "",
            img: "",
            desc: "",
            latitude: 24.824819,
            longitude: 102.843662,
        }, {
            id: 4, name: "马克思主义学院", aliases: "", img: "", desc: "", latitude: 24.825101, longitude: 102.844615,
        }, {
            id: 5, name: "体育学院", aliases: "", img: "", desc: "", latitude: 24.823936, longitude: 102.843516,
        }, {
            id: 6, name: "法学院", aliases: "", img: "", desc: "", latitude: 24.825346, longitude: 102.846345,
        }, {
            id: 7, name: "经济学院", aliases: "", img: "", desc: "", latitude: 24.823750, longitude: 102.850448,
        }, {
            id: 8, name: "数学与统计学院", aliases: "", img: "", desc: "", latitude: 24.824384, longitude: 102.851288,
        }, {
            id: 9, name: "信息学院", aliases: "", img: "", desc: "", latitude: 24.824835, longitude: 102.850840,
        }, {
            id: 10, name: "建筑与规划学院", aliases: "", img: "", desc: "", latitude: 24.825247, longitude: 102.851456,
        }, {
            id: 11, name: "材料与能源学院", aliases: "", img: "", desc: "", latitude: 24.825354, longitude: 102.854512,
        }, {
            id: 12, name: "物理与天文学院", aliases: "", img: "", desc: "", latitude: 24.825793, longitude: 102.854228,
        }, {
            id: 13, name: "软件学院", aliases: "", img: "", desc: "", latitude: 24.826301, longitude: 102.854295,
        }, {
            id: 14, name: "地球科学学院", aliases: "", img: "", desc: "", latitude: 24.826933, longitude: 102.855494,
        }, {
            id: 15,
            name: "化学科学与工程学院",
            aliases: "",
            img: "",
            desc: "",
            latitude: 24.827596,
            longitude: 102.856580,
        }, {
            id: 16, name: "农学院", aliases: "", img: "", desc: "", latitude: 24.826967, longitude: 102.856632,
        }, {
            id: 17, name: "生命科学学院", aliases: "", img: "", desc: "", latitude: 24.826553, longitude: 102.856947,
        }, {
            id: 18, name: "化学与工程学院", aliases: "", img: "", desc: "", latitude: 24.831008, longitude: 102.853628,
        }, {
            id: 19, name: "医学院", aliases: "", img: "", desc: "", latitude: 24.830658, longitude: 102.854363,
        }, {
            id: 20, name: "现代工学院", aliases: "", img: "", desc: "", latitude: 24.830907, longitude: 102.852246,
        },]
    }, {
        id: 4, name: "校门", list: [{
            id: 1, name: "北门", aliases: "", img: "", desc: "", latitude: 24.832896, longitude: 102.847624,
        }, {
            id: 2, name: "东门", aliases: "", img: "", desc: "", latitude: 24.829324, longitude: 102.861699,
        }, {
            id: 3, name: "西门", aliases: "", img: "", desc: "", latitude: 24.824915, longitude: 102.842085,
        },]
    }, {
        id: 6, name: "体育场馆", list: [{
            id: 1, name: "楠苑体育场", aliases: "", img: "", desc: "", latitude: 24.820187, longitude: 102.848489,
        }, {
            id: undefined,
            name: "东门体育场",
            aliases: "",
            img: "",
            desc: "",
            latitude: 24.828624,
            longitude: 102.859198,
        }, {
            id: 2, name: "游泳馆", aliases: "", img: "", desc: "", latitude: 24.830664, longitude: 102.859445,
        },]
    }, {
        id: 7, name: "人文自然", list: [{
            id: 1, name: "云山植物园", aliases: "", img: "", desc: "", latitude: 24.826823, longitude: 102.849496,
        }, {
            id: 2, name: "钟楼", aliases: "", img: "", desc: "", latitude: 24.827314, longitude: 102.848127,
        }, {
            id: 3, name: "薰衣草草原", aliases: "", img: "", desc: "", latitude: 24.827522, longitude: 102.847563,
        }, {
            id: 4, name: "登云梯", aliases: "", img: "", desc: "", latitude: 24.830606, longitude: 102.848507,
        }, {
            id: 5, name: "泽湖靓影", aliases: "", img: "", desc: "", latitude: 24.831171, longitude: 102.843800,
        }, {
            id: 6, name: "孔雀园", aliases: "", img: "", desc: "", latitude: 24.830500, longitude: 102.842263,
        }, {
            id: 7, name: "玫瑰芬芳", aliases: "", img: "", desc: "", latitude: 24.829235, longitude: 102.841443,
        }, {
            id: 8, name: "图书馆", aliases: "", img: "", desc: "", latitude: 24.824400, longitude: 102.848764,
        }, {
            id: 9, name: "海棠映日", aliases: "", img: "", desc: "", latitude: 24.823555, longitude: 102.847287,
        }, {
            id: 10, name: "蔽日梧桐", aliases: "", img: "", desc: "", latitude: 24.822746, longitude: 102.849723,
        }, {
            id: 11, name: "体育运动公园", aliases: "", img: "", desc: "", latitude: 24.829194, longitude: 102.859368,
        },]
    }, {
        id: 9, name: "美食", list: [{
            id: 1, name: "余味堂（梓苑）", aliases: "", img: "", desc: "", latitude: 24.828661, longitude: 102.843596,
        }, {
            id: 2, name: "知味堂", aliases: "", img: "", desc: "", latitude: 24.822807, longitude: 102.852669,
        }, {
            id: 3, name: "楸苑食堂", aliases: "", img: "", desc: "", latitude: 24.826444, longitude: 102.857881,
        },]
    }, {
        id: 10, name: "宿舍", list: [{
            id: 1, name: "梓苑", aliases: "", img: "", desc: "", latitude: 24.827095, longitude: 102.842817,
        }, {
            id: 2, name: "桦苑", aliases: "", img: "", desc: "", latitude: 24.823090, longitude: 102.845596,
        }, {
            id: 3, name: "楠苑", aliases: "", img: "", desc: "", latitude: 24.822486, longitude: 102.851716,
        }, {
            id: 4, name: "秋苑", aliases: "", img: "", desc: "", latitude: 24.824193, longitude: 102.854340,
        },]
    },]
}