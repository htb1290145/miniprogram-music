// components/video-list-item/video-list-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoItem: {
      type: Object,
      value: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  onLoad(options) {
    console.log(options);
    console.log(this.data.MVRelatedAllVideo);
  },
});
