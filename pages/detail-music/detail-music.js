// pages/detail-music/detail-music.js
// api
import {
  getMusicDetail,
  getMusicUrl,
  getMusicLyric,
} from "../../service/api_music_player";
import { NavigationBarHeight } from "../../constants/device_const";
import { getLyric } from "../../utils/lyric";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    musicDetail: {},
    // 歌曲歌词颜色显示
    currentPage: 0,
    // swiper高度
    swiperHeight: 0,
    lyricMargin: 0,
    // music的相关
    music: {},
    isPlay: true,
    audioContext: 0,
    duration: 0,
    currentTime: 0,
    sliderValue: 0,
    // 所有歌词
    lyricInfo: [],
    // 正在播放的歌词
    lyricShowing: "",
    currentIndex: -1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // options中 是通过url中query参数传递的
    const musicId = options.musicId;

    // 页面数据
    this.getPageData(musicId);

    // swiper高度
    const info = wx.getSystemInfoSync();
    const swiperHeight =
      info.windowHeight - info.statusBarHeight - NavigationBarHeight;
    this.setData({ swiperHeight });
    this.setData({ lyricMargin: swiperHeight / 6 });

    // 播放器
    const audioContext = getApp().globalData.audioContext;
    this.setData({ audioContext });
    // 先停止，以免是跳转还在播放上一条音乐
    audioContext.stop();
    audioContext.src = `https://music.163.com/song/media/outer/url?id=${musicId}.mp3`;
    // 当音频准备好后的回调函数——播放音频
    audioContext.onCanplay(() => {
      audioContext.play();
    });

    // 音频实时更新进度——返回的秒数
    audioContext.onTimeUpdate(() => {
      // 1.获取currentTime，转化成毫秒
      const currentTime = audioContext.currentTime * 1000;
      this.setData({ currentTime });

      // 2.slider实时更新位置value
      const sliderValue = (currentTime / this.data.duration) * 100;
      this.setData({ sliderValue });

      // 3.匹配正在播放的歌词——需要的歌词是currentTime < time 的前一项的歌词
      const lyricShowingInfoNext = this.data.lyricInfo.find((item) => {
        return currentTime < parseInt(item.time);
      });
      // 歌曲结束，后续没有歌词，不再更新歌词
      if (!lyricShowingInfoNext) return;
      const index = this.data.lyricInfo.findIndex((item) => {
        return item === lyricShowingInfoNext;
      });
      let currentIndex = index - 1;
      // 当歌词不一样时，才设置新歌词
      if (this.data.currentIndex !== currentIndex) {
        const lyricShowing = this.data.lyricInfo[currentIndex];
        this.setData({ lyricShowing: lyricShowing.lyricText, currentIndex });
      }
    });
  },

  // 获取页面数据
  getPageData(ids) {
    getMusicDetail(ids).then((res) => {
      this.setData({ musicDetail: res.songs, duration: res.songs[0].dt });
    });
    getMusicUrl(ids).then((res) => {
      this.setData({ music: res.data });
    });
    getMusicLyric(ids).then((res) => {
      const lyricString = res.lrc.lyric;
      const lyricInfo = getLyric(lyricString);
      this.setData({ lyricInfo });
    });
  },

  // 事件处理
  // swiper切换
  handleSwiperChange(event) {
    const currentPage = event.detail.current;
    this.setData({ currentPage });
  },
  // 播放器相关
  // 暂停
  handlePauseClick() {
    // 控制播放及图标显示wx:if
    if (this.data.isPlay) {
      this.setData({ isPlay: !this.data.isPlay });
      this.data.audioContext.pause();
    } else {
      this.setData({ isPlay: !this.data.isPlay });
      this.data.audioContext.play();
    }
  },

  // slider：松手后音乐才立即跳转进度
  // 拖动滑块
  handleSliderChange(event) {
    // 1.计算进度——slider总共100步
    const value = event.detail.value;
    // 此位置得到的ms
    const currentTime = (this.data.duration * value) / 100;

    // 2.音乐立即跳转进度：pause暂停后onCanplay回调函数会自动播放
    this.data.audioContext.pause();
    // 秒数，可精确后三位小数
    this.data.audioContext.seek(currentTime / 1000);
    // 3.更新sliderValue
    this.setData({ sliderValue: value });
  },
});
