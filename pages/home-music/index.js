// pages/home-music/index.js
import { getPlaylist, getBanner } from "../../service/api_music";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchMusicValue: "",
    banners: [],
    swiperHeight: 0,
    needMore: 1,
    playList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData(2);
  },

  // 网络请求
  getPageData(type) {
    // 获取轮播图
    getBanner(type).then((res) => {
      this.setData({ banners: res.banners });
    });
    // 获取播放列表
    getPlaylist().then((res) => {
      this.setData({ playList: res.list });
    });
  },

  // 轮播图加载完成
  handleSwiperImagesLoaded(e) {
    // 获取banner组件中image高度
    const imageItem = wx.createSelectorQuery();
    imageItem.select(".swiper-image").boundingClientRect();
    imageItem.exec((res) => {
      // 设置banner组件高度=图片高度
      this.setData({ swiperHeight: res[0].height });
    });
  },

  // 点击搜索框：跳转至搜索页面
  handleSearchMusicClick(e) {
    wx.navigateTo({
      url: "/pages/detail-search/detail-search",
    });
  },
});
