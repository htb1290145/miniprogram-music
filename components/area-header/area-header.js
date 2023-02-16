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
    needMore: {
      type: Boolean,
      value: false,
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
