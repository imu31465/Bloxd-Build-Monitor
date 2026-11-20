export const id = 51;
export const ids = [51];
export const modules = {
  42701: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      startPageTexturePackFeed: () => Tb
    });
    var kb = sb(1208),
      Wb = sb(37),
      ab = sb(42683);

    function Tb(bb, cb) {
      const sb = new ab.c({
        store: Wb.d,
        warn: bb,
        oneShot: cb,
        fetchLatest: async bb => {
          const cb = await fetch(`${kb.clientSideServerUrls.texturePackUrl}/${bb}.json`, {
            cache: "reload"
          });
          if (!cb.ok) throw new Error(`fetching texture pack ${bb} answered HTTP ${cb.status}`);
          return await cb.json()
        }
      });
      return (0, ab.d)(sb), sb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);