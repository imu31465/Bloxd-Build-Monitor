export const id = 47;
export const ids = [47];
export const modules = {
  41863: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      startPageTexturePackFeed: () => Zy
    });
    var Uy = Wy(1052),
      hy = Wy(33),
      fy = Wy(41849);

    function Zy(yb, bb) {
      const Wy = new fy.d({
        store: hy.d,
        warn: yb,
        oneShot: bb,
        fetchLatest: async yb => {
          const bb = await fetch(`${Uy.clientSideServerUrls.texturePackUrl}/${yb}.json`, {
            cache: "reload"
          });
          if (!bb.ok) throw new Error(`fetching texture pack ${yb} answered HTTP ${bb.status}`);
          return await bb.json()
        }
      });
      return (0, fy.f)(Wy), Wy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);