// components/music-rank-area/music-rank-area.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    musicRankList: {
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
    rankClick() {
      this.triggerEvent("rankClick");
    },
    musicItemClick() {
      this.triggerEvent("musicItemClick");
    },
  },
});
