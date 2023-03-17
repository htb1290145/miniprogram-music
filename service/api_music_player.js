import request from "./index";

// 歌曲详情
export function getMusicDetail(ids) {
  return request.get("/song/detail", { ids });
}
