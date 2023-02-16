import request from "./index";

export function getPlaylist() {
  return request.get("/toplist");
}

// 获取banner
export function getBanner(type) {
  return request.get("/banner", { type });
}
