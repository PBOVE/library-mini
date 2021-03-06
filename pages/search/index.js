// pages/search/index.js
import configs from '../../configs/index'

import pageEnum from '../../enum/pageEnum'

import Service from '../../api/search'


Page({
  data: {
    configs,
    hotList: []
  },
  onLoad: async function () {
    const { data } = await Service.fecthHotList()
    this.setData({
      hotList: data.slice(0, 8)
    })
  },
  onShow: function () {
    console.log("页面出现在前台时执行")
  },
  onReady: function () {
    console.log("页面首次渲染完毕时执行")
  },
  onHide: function () {
    console.log("页面从前台变为后台时执行")
  },
  onUnload: function () {
    console.log("页面销毁时执行")
  },

  // 返回上一页
  onBack: () => wx.navigateBack(),

  // 返回主页
  onHome: () => wx.switchTab({
    url: pageEnum.INDEX_HOME,
  })


})