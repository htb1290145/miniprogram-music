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
      console.log(("rank:", event.target.dataset.musicId));
      wx.navigateTo({
        url: `/pages/detail-music/detail-music?musicId=${event.target.dataset.musicId}`,
        // success: function (res) {
        //   // 通过 eventChannel 向被打开页面传送数据
        //   res.eventChannel.emit("getMusicId", {
        //     musicId: event.target.dataset.musicId,
        //   });
        // },
      });
    },
  },
});
