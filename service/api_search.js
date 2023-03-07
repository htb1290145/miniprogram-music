import request from "./index";

// 热门搜索
export function getHotSearchList() {
  return request.get("/search/hot");
}

// 搜索建议
export function getSearchSuggest(keywords, type = "mobile") {
  return request.get("/search/suggest", { keywords, type });
}

// 搜索
export function getSearchResult(keywords, limit = 30, type = 1) {
  return request.get("/cloudsearch", { keywords, limit, type });
}
