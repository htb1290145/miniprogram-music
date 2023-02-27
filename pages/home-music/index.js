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
// 榜单名称映射
const MusicRankListMap = {
  飙升榜: "fastMusicRankList",
  新歌榜: "newMusicRankList",
  原创榜: "originMusicRankList",
};

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
    // 排行榜数据
    musicRankList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取页面数据
    this.getPageData(2);

    // 状态共享库, 发起共享数据请求——推荐歌曲处
    musicStore.dispatch("getListMusicAction");
    // 监听数据
    musicStore.onState("recommendMusics", (value) => {
      this.setData({ recommendMusics: value });
    });

    // 获取排行榜歌单
    setTimeout(() => {
      // 获取歌单详情
      for (let i = 0; i < 3; i++) {
        const id = this.data.allList[i].id;
        const rankName = MusicRankListMap[this.data.allList[i].name];
        const coverImgUrl =
          "https://p2.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg";
        // 请求歌曲排行榜
        getListMusic(id).then((res) => {
          if (Object.keys(res) === 0) return;
          // 组合成对象
          const songList = res.songs.slice(0, 3);
          const rankObj = { rankName, coverImgUrl, songList };
          // 将上一次的数据浅拷贝
          const originRankList = [...this.data.musicRankList];
          // 添加这一次请求的数据,组成最新的数据
          originRankList.push(rankObj);
          this.setData({
            musicRankList: originRankList,
          });
        });
      }
    }, 1000);
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

  // 跳转相关
  // 点击歌曲推荐-歌单详情（热歌榜）
  handleRecommendMusicItemClick(e) {
    wx.navigateTo({
      url: "/pages/detail-music/detail-music",
    });
  },
  // 点击搜索框——搜索页面
  handleSearchMusicClick(e) {
    wx.navigateTo({
      url: "/pages/detail-search/detail-search",
    });
  },
  // 点击排行榜——榜单详情
  handleRankClick(e) {
    wx.navigateTo({
      url: "/pages/detail-rank/detail-rank",
    });
  },
  // 点击歌曲推荐——歌单详情
  handleRecommendClick(e) {
    wx.navigateTo({
      url: "/pages/detail-rank/detail-rank",
    });
  },
});
