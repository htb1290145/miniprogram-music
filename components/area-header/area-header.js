// components/area-header/area-header.js
import { eventBus } from "../../store/index";

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
    handleMoreClick() {
      // 发射事件
      this.triggerEvent("moreClick");
    },
  },
});
