// pages/school/bus/bus.js
var utils = require('../../../utils/utils.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        miniprogram_name: utils.miniprogram_name,
        key: utils.mapKey,

        grey_bus: "../" + utils.grey_bus,
        bus: "../" + utils.bus,
        message_icon: "../" + utils.message_icon,
        guilinchuxingwang: "../" + utils.guilinchuxingwang,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

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

    //地铁线路图
    // metro() {
    //     let plugin = requirePlugin("subway");
    //     let key = this.data.key; //使用在腾讯位置服务申请的key
    //     let referer = this.data.miniprogram_name; //调用插件的app的名称
    //     wx.navigateTo({
    //         url: 'plugin://subway/index?key=' + key + '&referer=' + referer
    //     });
    // }
})