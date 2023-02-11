import request from "./index";

export function getPlaylist() {
  return request.get("/toplist");
}
