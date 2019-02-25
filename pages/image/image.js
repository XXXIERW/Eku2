require("../../forbidden.js");
function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a, i, n, o, s, c = 0, r = new Array(), u = new Array();

Page({
    data: {
        settingRight: -1e3,
        settingBottom: -1e3,
        rightSettingAnim: "",
        bottomSettingAnim: "",
        opacity1: 0,
        opacity2: 0,
        layoutTop1: 0,
        layoutTop2: 0,
        animation1: "",
        animation2: "",
        screenWidth: 320,
        screenHeight: 0,
        imageList: [ {
            src: "../../images/image1.png"
        }, {
            src: "../../images/image2.png"
        }, {
            src: "../../images/image3.png"
        }, {
            src: "../../images/image4.png"
        },{
            src: "../../images/image5.png"
        } ]
    },
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onLoad: function(t) {
        var i = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t);
                var e = t.screenHeight, a = t.screenWidth, e = t.screenHeight;
                i.setData({
                    screenWidth: a,
                    screenHeight: e
                });
            }
        }), e = wx.createAnimation({
            duration: 1e4,
            timingFunction: "linear"
        }), a = wx.createAnimation({
            duration: 1e4,
            timingFunction: "linear"
        });
        var n = wx.getStorageSync("images");
        n && this.setData({
            imageList: n
        });
    },
    saveStorage: function() {
        wx.setStorageSync("images", this.data.imageList);
    },
    addImage: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            success: function(e) {
                var a = e.tempFilePaths[0];
                if (a) {
                    var i = {};
                    i.src = a, t.data.imageList.push(i), t.setData({
                        imageList: t.data.imageList
                    }, function() {
                        t.saveStorage();
                    });
                }
            }
        });
    },
    changeImage: function(e) {
        var a = this;
        console.log(e), wx.chooseImage({
            count: 1,
            success: function(i) {
                var n = e.currentTarget.dataset.index;
                console.log(i, "index=", n);
                var o = i.tempFilePaths[0];
                if (o) {
                    var s = "imageList[" + n + "].src";
                    console.log("str=", s), a.setData(t({}, s, o), function() {
                        a.saveStorage();
                    });
                }
            }
        });
    },
    deleteImage: function(t) {
        var e = this, a = t.currentTarget.dataset.index;
        this.data.imageList.splice(a, 1), this.setData({
            imageList: this.data.imageList,
            opacity1: 0,
            opacity2: 0
        }, function() {
            e.saveStorage(), e.clearAll(), e.setRunning();
        });
    },
    setRunning: function() {
        var t = this;
        e.translateY(0).step({
            duration: 250
        }), a.translateY(0).step({
            duration: 250
        }), t.setData({
            animation1: e.export(),
            animation2: a.export()
        }, function() {
            var e = setTimeout(function() {
                var e = wx.createSelectorQuery();
                e.select("#layout-image").boundingClientRect(), e.exec(function(e) {
                    console.log(e);
                    var a = e[0].height + t.data.screenHeight, i = a / .3;
                    t.run(a, i);
                });
            }, 300);
            u.push(e);
        });
    },
    run: function(t, i) {
        var n = this;
        e.translateY(-t).step({
            duration: i
        }), n.setData({
            layoutTop1: n.data.screenHeight,
            layoutTop2: n.data.screenHeight
        }, function() {
            n.setData({
                animation1: e.export(),
                opacity1: 1
            }, function() {
                var o = setTimeout(function() {
                    e.translateY(0).step({
                        duration: 200
                    }), n.setData({
                        animation1: e.export(),
                        opacity1: 0
                    });
                }, i), s = setTimeout(function() {
                    a.translateY(-t).step({
                        duration: i
                    }), n.setData({
                        animation2: a.export(),
                        opacity2: 1
                    }, function() {
                        var t = setTimeout(function() {
                            a.translateY(0).step({
                                duration: 200
                            }), n.setData({
                                animation2: a.export(),
                                opacity2: 0
                            });
                        }, i);
                        u.push(t);
                    });
                }, i - 500);
                u.push(o), u.push(s);
            });
        });
        var o = setInterval(function() {
            console.log("run"), e.translateY(-t).step({
                duration: i
            }), n.setData({
                animation1: e.export(),
                opacity1: 1
            }, function() {
                var t = setTimeout(function() {
                    e.translateY(0).step({
                        duration: 200
                    }), n.setData({
                        animation1: e.export(),
                        opacity1: 0
                    });
                }, i);
                u.push(t);
            });
            var o = setTimeout(function() {
                a.translateY(-t).step({
                    duration: i
                }), n.setData({
                    animation2: a.export(),
                    opacity2: 1
                }, function() {
                    var t = setTimeout(function() {
                        a.translateY(0).step({
                            duration: 200
                        }), n.setData({
                            animation2: a.export(),
                            opacity2: 0
                        });
                    }, i);
                    u.push(t);
                });
                var e = setInterval(function() {
                    a.translateY(-t).step({
                        duration: i
                    }), n.setData({
                        animation2: a.export(),
                        opacity2: 1
                    }, function() {
                        var t = setTimeout(function() {
                            a.translateY(0).step({
                                duration: 200
                            }), n.setData({
                                animation2: a.export(),
                                opacity2: 0
                            });
                        }, i);
                        u.push(t);
                    });
                }, 2 * (i - 500));
                r.push(e);
            }, i - 500);
            u.push(o);
        }, 2 * (i - 500));
        r.push(o), console.log(r, u);
    },
    imageLoad: function(e) {
        var a;
        console.log(e);
        var i = e.detail.width, n = e.detail.height, o = e.target.dataset.index;
        this.data.imageList[o].width = i, this.data.imageList[o].height = n;
        var s = "imageList[" + o + "].width", c = "imageList[" + o + "].height";
        this.setData((a = {}, t(a, s, i), t(a, c, n), a));
    },
    test: function() {
        var t = this;
        wx.chooseImage({
            success: function(e) {
                console.log(e);
                var a = e.tempFilePaths[0];
                if (a) {
                    var i = {};
                    i.src = a, t.data.imageList.push(i), t.setData({
                        imageList: t.data.imageList
                    });
                }
            }
        });
    },
    onReady: function() {
        var t = this, e = wx.createSelectorQuery();
        e.select("#right-setting").boundingClientRect(), e.select("#bottom-setting").boundingClientRect(), 
        e.exec(function(e) {
            console.log("setting query"), console.log(e), o = e[0].width, t.setData({
                settingRight: -o
            }), s = e[1].height, t.setData({
                settingBottom: -s
            });
        }), i = wx.createAnimation({
            duration: 300,
            timingFunction: "ease-out"
        }), n = wx.createAnimation({
            duration: 300,
            timingFunction: "ease-out"
        });
    },
    clickPage: function() {
        console.log("clickpage"), 1 == c ? (n.bottom(-s).opacity(0).step(), i.right(-o).opacity(0).step(), 
        this.setData({
            bottomSettingAnim: n.export(),
            rightSettingAnim: i.export()
        }), c = 0) : (n.bottom(0).opacity(1).step(), i.right(0).opacity(1).step(), this.setData({
            bottomSettingAnim: n.export(),
            rightSettingAnim: i.export()
        }), c = 1);
    },
    clearAll: function() {
        console.log("clear all");
        for (t = 0; t < u.length; t++) clearTimeout(u[t]);
        u = [];
        for (var t = 0; t < r.length; t++) clearInterval(r[t]);
        r = [], console.log("clearAll = ", r, u);
    },
    onShow: function() {
        console.log("onshow"), this.clearAll(), console.log("time = ", r, u), this.setRunning();
    },
    onHide: function() {
        console.log("onhide");
        var t = this;
        this.setData({
            opacity1: 0,
            opacity2: 0,
            layoutTop1: t.data.screenHeight,
            layoutTop2: t.data.screenHeight
        }, function() {
            t.clearAll();
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});