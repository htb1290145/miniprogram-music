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
  return request.get("/video/detail", {
    mvid,
  });
}

/**
 * MV地址
 * @param {number} id
 */
export function getMVURL(id) {
  return request.get("/mv/url", {
    id,
  });
}

/**
 * MV的点赞等
 * @param {number} id
 */
export function getMVInfo(mvid) {
  return request.get("/mv/detail/info", {
    mvid,
  });
}

export function getMVRelatedAllVideo(id) {
  return request.get("/related/allvideo", {
    id,
  });
}
