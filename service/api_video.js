import request from "./index";

// 首页视频列表
export function getTopMV(offset, limit = 10) {
  return request.get("/top/mv", {
    offset,
    limit,
  });
}

// 单个视频的详情页
export function getMVById(mvid) {
  return request.get("/mv/detail", {
    mvid,
  });
}
