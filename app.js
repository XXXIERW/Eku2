App({
    onLaunch: function() {
        var t = this, e = wx.getStorageSync("logs") || [];
        e.unshift(Date.now()), wx.setStorageSync("logs", e), wx.login({
            success: function(t) {}
        }), console.log("wx.getSetting", wx.getSetting), wx.getSetting ? wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(e) {
                        t.globalData.userInfo = e.userInfo, t.userInfoReadyCallback && t.userInfoReadyCallback(e);
                    }
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    },
    globalData: {
        userInfo: null
    }
});