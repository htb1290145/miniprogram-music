// components/playlist-item/playlist-item.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    areaHeaderTitle: {
      type: String,
      value: "aredHeaderTitle",
    },
    songMenus: {
      type: Array,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    screenWidth: app.globalData.srceenWidth,
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
