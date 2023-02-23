// pages/home-music/index.js
// api
import {
  getBanner,
  getAllList,
  getTopPlaylist,
  getListMusic,
} from "../../service/api_music";
// utils
import { queryHeight } from "../../utils/query-height";
// 状态共享
import { musicStore } from "../../store/index";
import throttle from "../../utils/throttle";
// 对查询高度的操作节流
const throttleQueryHeight = throttle(queryHeight);

Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchMusicValue: "",
    banners: [],
    swiperHeight: 0,
    playLists: [],
    allList: [],
    recommendMusics: [],

    newMusicRankList: [],
    originMusicRankList: [],
    fastMusicRankList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取页面数据
    this.getPageData(2);

    // 状态共享库, 发起共享数据请求
    musicStore.dispatch("getListMusicAction");
    // 监听数据
    musicStore.onState("recommendMusics", (value) => {
      this.setData({ recommendMusics: value });
    });

    // 获取排行榜歌单
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        let id = this.data.allList[i].id;
        if (this.data.allList[i].name === "飙升榜") {
          // 飙升榜
          getListMusic(id, 3).then((res) => {
            this.setData({
              fastMusicRankList: res.songs,
            });
          });
        } else if (this.data.allList[i].name === "新歌榜") {
          // 新歌榜
          getListMusic(id, 3).then((res) => {
            this.setData({
              newMusicRankList: res.songs,
            });
          });
        } else if (this.data.allList[i].name === "原创榜") {
          // 原创榜
          getListMusic(id, 3).then((res) => {
            this.setData({
              originMusicRankList: res.songs,
            });
          });
        }
      }
    }, 500);
  },

  // 网络请求
  getPageData(type, id, s = 8) {
    // 获取轮播图
    getBanner(type).then((res) => {
      this.setData({ banners: res.banners });
    });
    // 获取播放列表
    getTopPlaylist().then((res) => {
      this.setData({ playLists: res.playlists });
    });
    // 获取所有榜单
    getAllList().then((res) => {
      this.setData({ allList: res.list });
    });
  },

  // 轮播图加载完成
  handleSwiperImagesLoaded(e) {
    // 获取banner组件中image高度-设置banner组件高度=图片高度
    throttleQueryHeight(".swiper-image").then((res) => {
      this.setData({ swiperHeight: res[0].height });
    });
  },

  // 点击搜索框：跳转至搜索页面
  handleSearchMusicClick(e) {
    wx.navigateTo({
      url: "/pages/detail-search/detail-search",
    });
  },

  // 点击歌曲推荐的歌曲：跳转至歌曲详情页
  handleRecommendMusicItemClick(e) {
    wx.navigateTo({
      url: "/pages/detail-music/detail-music",
    });
  },
});
