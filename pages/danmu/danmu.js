require("../../server/wechat.js");
require("../../forbidden.js");

var t, e, n, a, i, o, s, r, c, l = 0, d = 0, p = 0, x = 1, u = new Array(), f = new Array(), h = 0;

Page({
    data: {
        sendHidden: !0,
        rightSettingAnim: "",
        settingRight: 0,
        imageHeader: "../../images/shagou.png",
        imageWidth: "400rpx",
        selectedBackgroundIndex: 0,
        flash: "",
        ad1Visibility: "hidden",
        inputValue: "",
        textOpacity: 0,
        animation: "",
        top: 0,
        textOpacity2: 0,
        animation2: "",
        top2: 0,
        popBoxTop: 0,
        textWidth: 0,
        settingAnim: "",
        formAnim: "",
        selectedSizeIndex: 2,
        selectedColorIndex: 0,
        selectedSpeedIndex: 1,
        selectedStyleIndex: 1,
        textSpeed: .3,
        textSize: "360rpx",
        textColor: "#fff",
        sizeHeight: "530rpx",
        neonIndex: 0,
        keywords: "Eku闪现手持弹幕，一款很皮的弹幕",
        winInfo: {
            width: 375,
            height: 668,
            screenSacle: .5
        },
        speeds: [ {
            id: 1,
            value: "自行车",
            speed: .2
        }, {
            id: 2,
            value: "开车",
            speed: .3
        }, {
            id: 3,
            value: "飞机",
            speed: .5
        },{
          id: 4,
          value:"火箭",
          speed: .7
        } ,{
          id: 5,
          value:"闪现",
          speed: .9
        }],
        sizes: [ {
            id: 1,
            value: "拇指",
            size: "240rpx",
            height: "350rpx"
        }, {
            id: 2,
            value: "中指",
            size: "300rpx",
            height: "420rpx"
        }, {
            id: 3,
            value: "食指",
            size: "360rpx",
            height: "530rpx"
        }, {
            id: 4,
            value: "大拇指",
            size: "450rpx",
            height: "680rpx"
        }, {
            id: 5,
            value: "巴掌",
            size: "550rpx",
            height: "820rpx"
        } ],
        colors: [ {
            id: 1,
            color: "#CCCCCC"
        }, {
            id: 2,
            color: "#ff9900"
        }, {
            id: 3,
            color: "#00ffff"
        }, {
            id: 4,
            color: "#ff0000"
        }, {
            id: 5,
            color: "#274e13"
        }, {
            id: 6,
            color: "#1c4587"
        } ],
        textStyle: [ {
            id: 1,
            value: "普通",
            color: "#CCCCCC"
        }, {
            id: 2,
            value: "荧光",
            color: "#CB0032"
        } ],
        backgroundStyle: [ {
            id: 1,
            color: "#000"
        }, {
            id: 2,
            color: "#CB0032"
        }, {
            id: 3,
            color: "#FF6735"
        }, {
            id: 4,
            color: "#FFFF00"
        }, {
            id: 5,
            color: "#23FFBD"
        }, {
            id: 6,
            color: "#DD5579"
        } ],
        neons: [ "0 0 5px #fff,0 0 10px #fff,0 0 10px #fff,0 0 20px #CCCCCC, 0 0 35px #CCCCCC,0 0 40px #CCCCCC,0 0 45px #CCCCCC,0 0 50px #CCCCCC;", "0 0 5px #fff,0 0 10px #fff,0 0 10px #fff,0 0 20px #CB0032, 0 0 35px #CB0032,0 0 40px #CB0032,0 0 45px #CB0032,0 0 50px #CB0032;", "0 0 5px #fff,0 0 10px #fff,0 0 10px #fff,0 0 20px #FF6735, 0 0 35px #FF6735,0 0 40px #FF6735,0 0 45px #FF6735,0 0 50px #FF6735;", "0 0 5px #fff,0 0 10px #fff,0 0 10px #fff,0 0 20px #FFFF00, 0 0 35px #FFFF00,0 0 40px #FFFF00,0 0 45px #FFFF00,0 0 50px #FFFF00;", "0 0 5px #fff,0 0 10px #fff,0 0 10px #fff,0 0 20px #23FFBD, 0 0 35px #23FFBD,0 0 40px #23FFBD,0 0 45px #23FFBD,0 0 50px #23FFBD;", "0 0 5px #fff,0 0 10px #fff,0 0 10px #fff,0 0 20px #DD5579, 0 0 35px #DD5579,0 0 40px #DD5579,0 0 45px #DD5579,0 0 50px #DD5579;" ],
        settingBottom: "-100%",
        formBottom: 0
    },
    miniProgram: function() {
        wx.navigateTo({
            url: "../../pages/relevant/relevant"
        });
    },
    hideImage: function() {
        "0" == this.data.imageWidth ? this.setData({
            imageWidth: "400rpx"
        }) : this.setData({
            imageWidth: "0"
        });
    },
    selectImage: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var n = e.tempFilePaths;
                console.log("selectImage res = ", e), n && t.setData({
                    imageHeader: n[0]
                });
            }
        });
    },
    flash: function() {
        this.data.flash ? this.setData({
            flash: ""
        }) : this.setData({
            flash: "flash 0.7s ease-in-out infinite"
        });
    },
    onLoad: function(t) {
        var e = this;
        setInterval(function() {
            console.log("setInterval"), h++, "visible" == e.data.ad1Visibility ? e.setData({
                ad1Visibility: "hidden"
            }) : h % 3 == 0 && e.setData({
                ad1Visibility: "visible"
            });
        }, 3e3), console.log("onLoad");
        var n = wx.getStorageSync("keyword"), o = t.share;
        if (console.log(t), o) {
            var s = t.text, r = t.speed, c = t.size, l = "#" + t.color, d = t.height, p = t.speedIndex, x = t.sizeIndex, u = t.colorIndex, f = t.styleIndex, g = t.neon, m = t.backgroundColorIndex, C = t.flash;
            console.log("backgroundColorIndex = ", m, "flash", C), this.setData({
                keywords: s,
                textSpeed: r,
                textSize: c,
                textColor: l,
                sizeHeight: d,
                selectedSizeIndex: x,
                selectedColorIndex: u,
                selectedSpeedIndex: p,
                selectedStyleIndex: f,
                neonIndex: g,
                selectedBackgroundIndex: m,
                flash: C
            });
        } else n && this.setData({
            keywords: n
        });
        a = wx.createAnimation({
            duration: 1e4,
            timingFunction: "linear"
        }), i = wx.createAnimation({
            duration: 1e4,
            timingFunction: "linear"
        }), this.getWinInfo();
    },
    getWinInfo: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                console.log("systomInfo", e), n = e.screenHeight, t.setData({
                    "winInfo.width": e.windowWidth,
                    "winInfo.height": e.windowHeight,
                    "winInfo.screenSacle": e.windowWidth / 750
                });
            }
        });
    },
    bindinput: function(t) {
        var e = this;
        console.log("input", t);
        var n = t.detail.value;
        n && this.setData({
            keywords: n,
            top: 0,
            textOpacity: 0,
            top2: 0,
            textOpacity2: 0
        }, function() {
            e.clearAll(), wx.setStorageSync("keyword", n), e.setRunning();
        });
    },
    bindfocus: function() {
        this.setData({
            sendHidden: !1
        });
    },
    bindblur: function() {
        this.setData({
            sendHidden: !0
        });
    },
    formSubmit: function(t) {
        console.log("formsubmit"), console.log(t);
        var e, n = this;
        "submit" == t.type ? e = t.detail.value.keywords : "confirm" == t.type && (e = t.detail.value), 
        e && (this.setData({
            keywords: e,
            top: 0,
            textOpacity: 0,
            top2: 0,
            textOpacity2: 0
        }, function() {
            n.clearAll(), wx.setStorageSync("keyword", e), "submit" != t.type && n.setRunning();
        }), n.setData({
            inputValue: ""
        }));
    },
    clearAll: function() {
        for (t = 0; t < f.length; t++) clearTimeout(f[t]);
        f = [];
        for (var t = 0; t < u.length; t++) clearInterval(u[t]);
        u = [], console.log("clearAll = ", u, f);
    },
    setRunning: function() {
        var o = this;
        a.translateY(0).step({
            duration: 250
        }), i.translateY(0).step({
            duration: 250
        }), o.setData({
            animation: a.export(),
            animation2: i.export()
        }, function() {
            var a = setTimeout(function() {
                var a = wx.createSelectorQuery();
                a.select("#text").boundingClientRect(), a.select("#text2").boundingClientRect(), 
                a.select("#popBox").boundingClientRect(), a.exec(function(a) {
                    console.log("query", a);
                    var i = a[0].height / 2 - o.data.winInfo.width / 2 + a[0].width / 2;
                    o.setData({
                        textWidth: -i
                    }), t = a[0].height + 100, e = a[0].top;
                    var s = n - parseInt(e), r = a[1].top, c = n - parseInt(r);
                    console.log("text2Top:", r), console.log("top:", s), o.setData({
                        top: s,
                        top2: c
                    });
                    var l = t + o.data.winInfo.height, d = l / o.data.textSpeed;
                    o.run(-l, d);
                });
            }, 300);
            f.push(a);
        });
    },
    setting: function() {
        1 != d && -1 != d && (1 == x && (s.bottom(-p).step(), this.setData({
            formAnim: s.export()
        }), x = 0), d = -1, o.bottom(0).step(), this.setData({
            settingAnim: o.export()
        }), setTimeout(function() {
            d = 1;
        }, 300), this.setData({
            formBottom: -p
        }));
    },
    settingComplete: function() {
        1 == x ? (s.bottom(-p).step(), c.right(-r).opacity(0).step(), this.setData({
            formAnim: s.export(),
            rightSettingAnim: c.export()
        }), x = 0) : (s.bottom(0).step(), c.right(0).opacity(1).step(), this.setData({
            formAnim: s.export(),
            rightSettingAnim: c.export()
        }), x = 1), 0 != d && -1 != d && (d = -1, o.bottom(-l).step(), this.setData({
            settingAnim: o.export()
        }), setTimeout(function() {
            d = 0;
        }, 300));
    },
    selectBackground: function(t) {
        var e = t.currentTarget.dataset.index;
        this.data.backgroundStyle[e].color;
        this.setData({
            selectedBackgroundIndex: e
        });
    },
    selectColor: function(t) {
        var e = t.currentTarget.dataset.index, n = this.data.colors[e].color;
        1 == this.data.selectedStyleIndex && (n = "fff"), this.setData({
            textColor: n,
            selectedColorIndex: e,
            neonIndex: e
        });
    },
    selectStyle: function(t) {
        var e = t.currentTarget.dataset.index;
        1 == e ? this.setData({
            textColor: "#fff",
            selectedStyleIndex: e
        }) : this.setData({
            selectedStyleIndex: e
        });
    },
    selectSize: function(t) {
        var e = this, n = t.currentTarget.dataset.index, a = this.data.sizes[n].size, i = this.data.sizes[n].height;
        this.setData({
            textSize: a,
            selectedSizeIndex: n,
            top: 0,
            sizeHeight: i,
            textOpacity: 0
        }, function() {
            e.clearAll(), e.setData({
                top: 0,
                top2: 0,
                textOpacity2: 0
            }, function() {
                e.setRunning();
            });
        });
    },
    selectSpeed: function(t) {
        var e = this, n = t.currentTarget.dataset.index, a = this.data.speeds[n].speed;
        this.setData({
            textSpeed: a,
            selectedSpeedIndex: n,
            textOpacity: 0
        }, function() {
            e.clearAll(), e.setData({
                top: 0,
                top2: 0,
                textOpacity2: 0
            }, function() {
                e.setRunning();
            });
        });
    },
    onReady: function() {
        var t = this;
        if (wx.canIUse) if (wx.canIUse("createSelectorQuery")) {
            var e = wx.createSelectorQuery();
            e.select("#setting").boundingClientRect(), e.select("#sendForm").boundingClientRect(), 
            e.select("#right-setting").boundingClientRect(), e.exec(function(e) {
                console.log("setting query"), console.log(e), l = e[0].height, t.setData({
                    settingBottom: -l + "px"
                }), p = e[1].height, r = e[2].width;
            }), o = wx.createAnimation({
                duration: 300,
                timingFunction: "linear"
            }), s = wx.createAnimation({
                duration: 300,
                timingFunction: "linear"
            }), c = wx.createAnimation({
                duration: 300,
                timingFunction: "linear"
            });
        } else wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        }); else wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    },
    onShow: function() {
        if (console.log("onshow"), this.clearAll(), this.setRunning(), wx.canIUse("getUpdateManager")) {
            var t = wx.getUpdateManager();
            t.onCheckForUpdate(function(t) {
                console.log(t.hasUpdate);
            }), t.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: function(e) {
                        e.confirm && t.applyUpdate();
                    }
                });
            }), t.onUpdateFailed(function() {});
        }
    },
    run: function(t, e) {
        var n = this;
        n.setData({
            textOpacity: 1
        }), a.translateY(t).step({
            duration: e
        }).translateY(0).step({
            duration: 200
        }), n.setData({
            animation: a.export()
        }, function() {
            var o = setTimeout(function() {
                n.setData({
                    textOpacity: 0
                });
            }, e - 200);
            f.push(o);
            var s = setTimeout(function() {
                n.setData({
                    textOpacity2: 1
                }), i.translateY(t).step({
                    duration: e
                }).translateY(0).step({
                    duration: 200
                }), n.setData({
                    animation2: i.export()
                }, function() {
                    var a = setTimeout(function() {
                        n.setData({
                            textOpacity2: 0
                        });
                    }, e - 200);
                    f.push(a);
                    var o = setInterval(function() {
                        n.setData({
                            textOpacity2: 1
                        }), i.translateY(t).step({
                            duration: e
                        }).translateY(0).step({
                            duration: 200
                        }), n.setData({
                            animation2: i.export()
                        }, function() {
                            var t = setTimeout(function() {
                                n.setData({
                                    textOpacity2: 0
                                });
                            }, e - 200);
                            f.push(t);
                        });
                    }, 2 * (e - 1e3));
                    u.push(o);
                });
            }, e - 1e3);
            f.push(s);
            var r = setInterval(function() {
                n.setData({
                    textOpacity: 1
                }), a.translateY(t).step({
                    duration: e
                }).translateY(0).step({
                    duration: 200
                }), n.setData({
                    animation: a.export()
                }, function() {
                    var t = setTimeout(function() {
                        n.setData({
                            textOpacity: 0
                        });
                    }, e - 200);
                    f.push(t);
                });
            }, 2 * (e - 1e3));
            u.push(r);
        });
    },
    onHide: function() {
        var t = this;
        this.setData({
            textOpacity: 0,
            top: 0,
            top2: 0,
            textOpacity2: 0
        }, function() {
            t.clearAll();
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        var e = this;
        console.log(t);
        var n = e.data.textSpeed, a = e.data.textSize, i = e.data.textColor;
        i = i.slice(1);
        var o = e.data.keywords, s = e.data.sizeHeight, r = e.data.selectedSpeedIndex, c = e.data.selectedSizeIndex, l = e.data.selectedColorIndex, d = e.data.selectedStyleIndex, p = e.data.neonIndex, x = e.data.selectedBackgroundIndex, u = "";
        e.data.flash && (u = e.data.flash);
        var f = "/pages/danmu/danmu?speed=" + n + "&size=" + a + "&share=1&text=" + o + "&color=" + i + "&height=" + s + "&speedIndex=" + r + "&sizeIndex=" + c + "&colorIndex=" + l + "&styleIndex=" + d + "&backgroundColorIndex=" + x + "&flash=" + u + "&neon=" + p;
        return console.log(f), {
            title: "发来了弹幕攻击",
            path: f
        };
    },
    abc: function() {
        wx.navigateTo({
            url: "../../pages/more/more"
        });
    },
    share: function() {
        wx.showToast({
            title: "发起弹幕攻击",
            icon: "none"
        });
    },
    imageDanmu: function() {
        wx.navigateTo({
            url: "../../pages/image/image"
        });
    }
});