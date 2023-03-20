import request from "./index";

// 歌曲详情
export function getMusicDetail(ids) {
  return request.get("/song/detail", { ids });
}

// 歌曲url
export function getMusicUrl(id, br = 999000) {
  return request.get("/song/url", {
    id,
    br,
  });
}

// 歌词
export function getMusicLyric(id) {
  return request.get("/lyric", { id });
}
