// components/detail-rank-header/detail-rank-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    playlist: {
      type: Object,
    },
  },
  // 生命周期
  lifetimes: {
    ready: function () {
      setTimeout(() => {
        this.setData({
          backgroundUrl: this.properties.playlist.creator.backgroundUrl,
        });
      }, 500);
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
