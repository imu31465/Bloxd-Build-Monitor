export const id = 52;
export const ids = [52];
export const modules = {
  42745: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      startPageTexturePackFeed: () => Ub
    });
    var Bb = hb(1103),
      Ob = hb(29),
      Gb = hb(42735);

    function Ub(bb, ub) {
      const hb = new Gb.c({
        store: Ob.f,
        warn: bb,
        oneShot: ub,
        fetchLatest: async bb => {
          const ub = await fetch(`${Bb.clientSideServerUrls.texturePackUrl}/${bb}.json`, {
            cache: "reload"
          });
          if (!ub.ok) throw new Error(`fetching texture pack ${bb} answered HTTP ${ub.status}`);
          return await ub.json()
        }
      });
      return (0, Gb.g)(hb), hb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);