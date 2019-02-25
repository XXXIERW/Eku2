var t = {
    get: function(t, e, o) {
        e || (e = {}), e.session_id = wx.getStorageSync("session_id"), wx.request({
            url: t,
            data: e,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "GET",
            success: function(t) {
                console.log(t), 200 == t.statusCode ? o.success(t.data) : wx.showToast({
                    title: t.statusCode
                });
            },
            fail: function(t) {
                o.fail(t);
            },
            complete: function(t) {
                o.complete(t);
            }
        });
    },
    post: function(t, e, o) {
        e || (e = {}), e.session_id = wx.getStorageSync("session_id"), wx.request({
            url: t,
            data: e,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "GET",
            success: function(t) {
                console.log(t), 200 == t.statusCode ? o.success(t.data) : wx.showToast({
                    title: t.statusCode
                });
            },
            fail: function(t) {
                o.fail(t);
            },
            complete: function(t) {
                o.complete(t);
            }
        });
    }
};

module.exports = t;