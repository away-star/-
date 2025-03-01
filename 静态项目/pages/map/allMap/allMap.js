// pages/map/instruction/instruction.js
var media = require('../../../data/media')
var map = require('../../../data/map')
Page({
    data: {
        url: ''
    },

    onLoad(options) {
        if (options.url) {
            this.setData({
                url: decodeURIComponent(options.url)
            });
        }
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

    // 跳转至地点汇总页
    tosite() {
        wx.switchTab({
            url: '../../site/site',
        })
    },

    // 跳转至地图页
    tomap() {
        wx.switchTab({
            url: '../../map/map',
        })
    }
})