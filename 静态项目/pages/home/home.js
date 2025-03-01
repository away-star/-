// pages/home/home.js
var media = require('../../data/media')
var map = require('../../data/map')
var school = require('../../data/school')
var data = require('../../data/data')
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        miniprogram_name: data.miniprogram_name,
        school_information: school.school_information,
        AppID: school.AppID,

        laba: media.laba,
        school_logo: media.school_logo,

        function_buttons: media.function_buttons,

        school_icon: media.school_icon,
        schoolIcon: media.schoolIcon,
        linkIcon: media.linkIcon,
        book: media.book,
        money: media.money,
        allInOneCard: media.allInOneCard,
        booking: media.booking,

        wave: media.wave,


        label: media.label,

        magazine: media.magazine,
        school: media.school,
        information: media.information,
        notes: media.notes,
        admin: media.admin,
        contact: media.contact,
        guanwei: media.guanwei,
        weather: media.weather,

        APIKEY: data.weatherKey,
        school_location: parseFloat(map.longitude).toFixed(2) + "," + parseFloat(map.latitude).toFixed(2),

        background: media.swiper_background,

        indicatorDots: true, //是否显示面板指示点
        indicatorColor: "white", //指示点颜色
        activeColor: "#2adce2", //当前选中的指示点颜色
        autoplay: true, //是否自动切换
        circular: true, //是否采用衔接滑动
        interval: 3500, //间隔时间
        duration: 1500, //滑动时间

        dialogShow: false,
        buttons: [{
            text: '关闭'
        }],

        //     // link图标
        guanwangIcon: media.guanwangIcon,
        xinwenIcon: media.xinwenIcon,
        banshiIcon: media.banshiIcon,
        yiyuanIcon: media.yiyuanIcon,
        ynuIcon: media.ynuIcon,
        pinganIcon: media.pinganIcon,
        zhaoshengIcon: media.zhaoshengIcon,


        // 公众号
        pinganGZH: media.pinganGZH,
        yiyuanGZH: media.yiyuanGZH,
        zhaoshengGZH: media.zhaoshengGZH,
        ynuGZH: media.ynuGZH,


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getWeather()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    /**
     * 用户点击右上角分享到朋友圈
     */
    onShareTimeline: function (res) {

    },

    //图片比例
    imgHeight: function (e) {
        var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
        var imgh = e.detail.height; //图片高度
        var imgw = e.detail.width; //图片宽度
        var swiperH = winWid * imgh / imgw + "px" //等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
        this.setData({
            Height: swiperH //设置高度
        })
    },

    // 学校官微
    toschool() {
        // wx.previewImage({
        //     current: this.data.guanwei[0],
        //     urls: this.data.guanwei
        // })

    },

    // 图书馆官微
    toZhaoshengImg() {
        wx.previewImage({
            current: this.data.guanwei[0],
            urls: this.data.guanwei
        })
    },
    toYNUImg() {
        wx.previewImage({
            current: this.data.guanwei[1],
            urls: this.data.guanwei
        })
    },

    // 财务处官微
    toPinganImg() {
        wx.previewImage({
            current: this.data.guanwei[2],
            urls: this.data.guanwei
        })
    },
    toXiaoyiyuanImg() {
        wx.previewImage({
            current: this.data.guanwei[3],
            urls: this.data.guanwei
        })
    },


    // 招生官微
    toMiniProgram() {
        wx.navigateToMiniProgram({
            shortLink: '#小程序://云大一卡通/3th8safp7HGYRkH',
            //develop开发版；trial体验版；release正式版
            envVersion: 'release',
            success(res) {
                // console.log("打开成功")
            },
            fail(res) {
                // console.log("打开失败")
            }
        })
    },
    // 获取天气
    getWeather() {
        var that = this
        wx.request({
            url: 'https://devapi.qweather.com/v7/weather/now?key=' + that.data.APIKEY + "&location=" + that.data.school_location,
            success(result) {
                var res = result.data
                that.setData({
                    now: res.now
                })
            }
        })
    },

    //点击图片可查看
    lookPhoto(e) {
        console.log("点击了图片", e.target.dataset.src)
        var url = e.target.dataset.src
        wx.previewImage({
            current: url, // 当前显示图片的http链接
            urls: this.data.background // 需要预览的图片http链接列表
        })
    },

    // 跳转到地图页
    map() {
        wx.navigateTo({
            url: '../map/map',
        })
    },

    // 跳转到建筑页
    construct() {
        wx.navigateTo({
            url: '../construct/construct?url=' + encodeURIComponent('https://ynu-construction.vercel.app/'),
        });
    },

    // 跳转到校园页
    school() {
        wx.switchTab({
            url: '../school/school',
        })
    },

    // 跳转到地点汇总页
    site() {
        wx.navigateTo({
            url: '../map/allMap/allMap?url=' + encodeURIComponent('https://view.vra.cn/#/travelview/471422440833024'),
        });
    },

    // 友情链接
    link() {
        this.setData({
            dialogShow: true,
        })
    },

    book() {
        wx.navigateTo({
            url: '../../pages/home/book/book?url=' + encodeURIComponent('http://af-cg-ydgac.ynu.edu.cn/iccm/h5/page/login/index?isVisit=1&redirectUrl=%2Ficcm%2Fh5%2Fpage%2Flogin%2Findex%3FisVisit%3D1&openId=oVGYi6VUljdsadtYjcI59WqOLW00&appId=wx3258799ccd67e0c5&oaId=1&timestamp=1738403583586'),
        });
    },

    // 关闭 mp-dialog 会话框
    mapmarker(e) {
        this.setData({
            dialogShow: false,
        })
    },

    // 学校简介
    tointroduction() {
        wx.navigateTo({
            url: "../../pages/home/introduction/introduction",
        })
    },

    // 跳转到新页面
    navigateToNewPage: function () {
        wx.navigateTo({
            url: '../../pages/chat/chat?url=' + encodeURIComponent('https://coze-ai.vercel.app/'),
        });
    },


    toGuanwang() {
        wx.navigateTo({
            url: '../home/guanwang/book?url=' + encodeURIComponent('http://www.ynu.edu.cn/'),
        });
    },    // 跳转到地点汇总页
    toXiwen() {
        wx.navigateTo({
            url: '../home/xinwenwang/book?url=' + encodeURIComponent('http://www.news.ynu.edu.cn/'),
        });
    },
    toBnahsi() {
        wx.navigateTo({
            url: '../home/banshi/book?url=' + encodeURIComponent('http://ehall.ynu.edu.cn/'),
        });
    },
    toZhaosheng() {
        wx.navigateTo({
            url: '../home/zhaosheng/book?url=' + encodeURIComponent('http://zsb.ynu.edu.cn/'),
        });
    },


})