import request from "./index";

export function getTopMV(offset, limit = 10) {
  return request.get("/top/mv", {
    offset,
    limit,
  });
}

export function getMVById(id) {
  return request.get("/mv/detail", {
    id,
  });
}
