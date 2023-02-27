import { HYEventStore } from "hy-event-store";
import { getListMusic } from "../service/api_music";

const musicStore = new HYEventStore({
  state: { recommendMusics: [] },
  actions: {
    // 获取歌单的歌曲
    getListMusicAction(ctx, payload) {
      getListMusic(3778678, 10).then((res) => {
        ctx.recommendMusics = res.songs;
      });
    },
  },
});

export default musicStore;
