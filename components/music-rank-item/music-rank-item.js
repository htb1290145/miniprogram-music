// components/music-rank-item/music-rank-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "标题",
    },
    rankList: {
      type: Object,
    },
    coverImgUrl: {
      type: String,
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
    handleRankClick(e) {
      console.log("handleRankClick");
    },
  },
});
