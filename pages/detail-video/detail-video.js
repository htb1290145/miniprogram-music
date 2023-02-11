// pages/detail-video/detail-video.js
import {
  getMVURL,
  getMVInfo,
  getMVRelatedAllVideo,
} from "../../service/api_video";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    MVUrl: "",
    MVInfo: {},
    MVRelatedAllVideo: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.mvid;
    // 网络请求获取mv相关数据
    this.getMV(id);

    // 页面间通信接口
    const eventChannel = this.getOpenerEventChannel();
  },

  // 网络请求获取mv相关数据
  getMV(id) {
    // getMVById(id).then((res) => {
    //   console.log(res);
    // });
    getMVURL(id).then((res) => {
      this.setData({ MVUrl: res.data.url });
    });
    getMVInfo(id).then((res) => {
      this.setData({ MVInfo: res });
    });
    getMVRelatedAllVideo(id).then((res) => {
      this.setData({ MVRelatedAllVideo: res.data });
    });
  },
});
