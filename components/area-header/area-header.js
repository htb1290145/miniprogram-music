// components/area-header/area-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "标题",
    },
    rightText: {
      type: String,
      value: "更多",
    },
    showRight: {
      type: Boolean,
      value: true,
    },
  },
  onLoad(options) {},
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleMoreClick(e) {
      // console.log(e);
    },
  },
});
