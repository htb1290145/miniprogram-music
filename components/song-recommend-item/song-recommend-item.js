// components/song-recommend-item/song-recommend-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    musicItem: {
      type: Object,
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
    // 点击歌曲item
    handleItemClick(event) {
      const musicId = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/detail-music/detail-music?musicId=${musicId}`,
      });
    },
  },
});
