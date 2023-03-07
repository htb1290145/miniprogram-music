// pages/detail-search/detail-search.js
import {
  getHotSearchList,
  getSearchSuggest,
  getSearchResult,
} from "../../service/api_search";
// 防抖
import debounce from "../../utils/debounce";
const debounceSearchSuggest = debounce(getSearchSuggest, 300);
// 转化成节点
import { stringToNodes } from "../../utils/string-to-nodes";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    hots: [],
    searchValue: "",
    searchSuggestList: [],
    // rich-text
    searchSuggestListNodes: [],
    resultSongs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getHotSearchList().then((res) => {
      this.setData({ hots: res.result.hots });
    });
  },

  // 搜索框内容变化——提供输入建议(要加入防抖)
  handleSearchChange: function (event) {
    const searchValue = event.detail;
    this.setData({ searchValue });
    if (!searchValue.length) {
      this.setData({ searchSuggestList: [] });
      this.setData({ searchSuggestListNodes: [] });
      this.setData({ resultSongs: [] });
      return;
    }
    // 发送网络请求，关键字匹配
    debounceSearchSuggest(searchValue).then((res) => {
      // 1. 关键字相关歌曲
      const searchSuggestList = res.result.allMatch;
      this.setData({ searchSuggestList });

      // 2. 转成nodes节点
      const suggestKeywords = searchSuggestList.map((item) => item.keyword);
      const suggestNodes = [];
      for (const keyword of suggestKeywords) {
        const nodes = stringToNodes(keyword, searchValue);
        suggestNodes.push(nodes);
      }
      this.setData({ searchSuggestListNodes: suggestNodes });
    });
  },

  // 搜索框确认
  handleSearchEnter(event) {
    // detail是子组件trigger传递来的数据
    // const keywords = event.detail;
    const searchValue = this.data.searchValue;
    // 发送请求获取搜索结果
    this.getSearchResult(searchValue);
  },

  // 点击热门搜索列表
  handleHotItemClick(event) {
    // 1.发送网络请求
    const keyword = event.currentTarget.dataset.first;
    this.getSearchResult(keyword);
    this.setData({ searchValue: keyword });
  },

  // 点击搜索建议
  handleSearchSuggestClick(event) {
    // 1.获取搜索的歌名
    const index = event.currentTarget.dataset.index;
    const songName = this.data.searchSuggestList[index].keyword;
    // 2.关键字设置在搜索框中
    this.setData({ searchValue: songName });
    // 3.发送网络请求
    this.getSearchResult(songName);
  },

  // 搜索的网络请求
  async getSearchResult(keywords) {
    const {
      result: { songs },
    } = await getSearchResult(keywords);
    const resultSongs = songs;
    this.setData({ resultSongs });
  },
});
