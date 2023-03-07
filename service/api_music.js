import request from "./index";

export function getTopPlaylist(
  order = "hot",
  cat = "全部",
  limit = 6,
  offset = 0
) {
  return request.get("/top/playlist", { order, cat, limit, offset });
}

// 获取banner
export function getBanner(type) {
  return request.get("/banner", { type });
}

// 获取所有榜单
export function getAllList() {
  return request.get("/toplist");
}

// 获取歌单的歌曲
export function getListMusic(id, limit = 10, offset = 0) {
  return request.get("/playlist/track/all", {
    id,
    limit,
    offset,
  });
}
// 歌单详情
export function getPlayListDetail(id, s = 8) {
  return request.get("/playlist/detail", { id, s });
}



// 排行榜歌单
// export function getRankMusicList(id, s = 8) {
//   return request.get("/playlist/detail", { id, s });
// }
