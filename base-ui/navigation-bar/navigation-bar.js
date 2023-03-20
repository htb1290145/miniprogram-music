// components/navigation-bar/navigation-bar.js
import { NavigationBarHeight } from "../../constants/device_const";

Component({
  options: {
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "默认标题",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: getApp().globalData.statusBarHeight,
    navigationBarHeight: NavigationBarHeight,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleReturnClick() {
      wx.navigateBack();
    },
  },
  lifetimes: {
    // ready: function () {
    //   console.log(this.data.statusBarHeight);
    // },
  },
});
