// pages/detail-music/detail-music.js
// api
import { getMusicDetail } from "../../service/api_music_player";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    musicDetail: {},
    isSongClicked: true,
    isWordClicked: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // options中 是通过url中query参数传递的
    const musicId = options.musicId;
    this.getPageData(musicId);
  },

  // 获取页面数据
  getPageData(ids) {
    getMusicDetail(ids).then((res) => {
      this.setData({ musicDetail: res.songs });
    });
  },

  // 歌词歌曲点击
  handleSongClick() {
    this.setData({ isSongClicked: true, isWordClicked: false });
    // 切换歌曲
  },
  handleWordClick() {
    this.setData({ isWordClicked: true, isSongClicked: false });
  },
  // 切换歌词
});
