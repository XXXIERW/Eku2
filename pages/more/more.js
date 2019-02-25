require("../../forbidden.js");
Page({
  data: {
    imgalist: ['https://cdn.it120.cc/apifactory/2018/06/13/421aebfb1ca6e06141fa1d5e60f65ebb.png'], 
  },
  previewImage: function (e) {
    wx.previewImage({
      current: this.data.imgalist, // 当前显示图片的http链接     
      urls: this.data.imgalist // 需要预览的图片http链接列表     
    })
    var g = wx.getSystemInfoSync();
    Q.tdsdk.event({
      id: "点击打赏图片",
      label: "关于页",
      params: {
        platform: g.platform,
        model: g.model
      }
    });


  },
  back: function () {
    wx.navigateBack({
      delta: 1
    });
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})