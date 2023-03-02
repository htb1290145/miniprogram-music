import { HYEventStore } from "hy-event-store";
import { getPlayListDetail } from "../service/api_music";

const rankStore = new HYEventStore({
  state: {
    playlist: [],
  },
  actions: {
    // 获取歌单详情——热歌榜
    getPlayListDetailAction(ctx, payload) {
      getPlayListDetail(payload).then((res) => {
        ctx.playlist = res.playlist;
      });
    },
  },
});

export default rankStore;
