require("../../forbidden.js");
var t, e, i = 1;

Page({
    data: {
        text: "手持弹幕11",
        screenWidth: 0,
        screenHeight: 0,
        textWidth: 0,
        textHeight: 0,
        textSize: 150,
        rightSettingAnim: "",
        settingRight: 0,
        sizes: [ {
            id: 1,
            value: "小",
            size: "240rpx",
            height: "350rpx"
        }, {
            id: 2,
            value: "中",
            size: "300rpx",
            height: "420rpx"
        }, {
            id: 3,
            value: "大",
            size: "360rpx",
            height: "530rpx"
        }, {
            id: 4,
            value: "特大",
            size: "450rpx",
            height: "680rpx"
        }, {
            id: 5,
            value: "超大",
            size: "550rpx",
            height: "820rpx"
        } ]
    },
    onLoad: function(i) {
        var n = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t);
                var e = t.screenWidth, i = t.screenHeight;
                n.setData({
                    screenWidth: e,
                    screenHeight: i
                });
            },
            complete: function() {
                n.initText();
            }
        }), e = wx.createAnimation({
            duration: 200,
            timingFunction: "linear"
        });
        var o = wx.createSelectorQuery();
        o.select("#right-setting").boundingClientRect(), o.exec(function(e) {
            console.log("setting", e), t = e[0].width;
        });
    },
    settingComplete: function() {
        1 == i ? (e.right(-t).opacity(0).step(), this.setData({
            rightSettingAnim: e.export()
        }), i = 0) : (e.right(0).opacity(1).step(), this.setData({
            rightSettingAnim: e.export()
        }), i = 1);
    },
    do: function() {
        this.initText();
    },
    initText: function() {
        var t = this, e = wx.createSelectorQuery();
        e.select("#text").boundingClientRect(), e.select("#right-setting").boundingClientRect(), 
        e.exec(function(e) {
            var i = e[0].width, n = e[0].height;
            console.log("query", e, i, n), t.setData({
                textWidth: i,
                textHeight: n
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});