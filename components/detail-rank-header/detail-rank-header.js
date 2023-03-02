// components/detail-rank-header/detail-rank-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    playlist: {
      type: Object,
    },
    isShowRankHeader: {
      type: Boolean,
      value: true,
    },
  },
  // 生命周期
  lifetimes: {
    ready: function () {
      setTimeout(() => {
        this.setData({
          backgroundUrl: this.properties.playlist.creator.backgroundUrl,
        });
      }, 1000);
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    backgroundUrl: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
