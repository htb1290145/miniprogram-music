// pages/detail-video/detail-video.js
import { getMVById } from "../../service/api_video";

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const mvid = options.mvid;
    const res = await getMVById(mvid);
  },
});
