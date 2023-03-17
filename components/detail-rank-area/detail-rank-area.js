// components/detail-rank-area/detail-rank-area.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    playlist: {
      type: Object,
    },
    isShowRankName: {
      type: Boolean,
      value: true,
    },
    resultSongs: {
      type: Array,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleRankMusicItemClick(event) {
      wx.navigateTo({
        url: `/pages/detail-music/detail-music?musicId=${event.target.dataset.musicId}`,
      });
    },
    handleMusicItemClick(event) {
      wx.navigateTo({
        url: `/pages/detail-music/detail-music?musicId=${event.target.dataset.musicId}`,
      });
    },
  },
});
