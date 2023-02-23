import { HYEventStore } from "hy-event-store";
import { getListMusic } from "../service/api_music";

const musicStore = new HYEventStore({
  state: { recommendMusics: [] },
  actions: {
    getListMusicAction(ctx, payload) {
      getListMusic(24381616, 10).then((res) => {
        ctx.recommendMusics = res.songs;
      });
    },
  },
});

export default musicStore;
