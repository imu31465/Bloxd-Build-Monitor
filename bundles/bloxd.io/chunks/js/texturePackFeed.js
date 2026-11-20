export const id = 51;
export const ids = [51];
export const modules = {
  42454: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      startPageTexturePackFeed: () => Eb
    });
    var Ab = Ub(1142),
      Mb = Ub(31),
      Tb = Ub(42438);

    function Eb(bb, ab) {
      const Ub = new Tb.b({
        store: Mb.c,
        warn: bb,
        oneShot: ab,
        fetchLatest: async bb => {
          const ab = await fetch(`${Ab.clientSideServerUrls.texturePackUrl}/${bb}.json`, {
            cache: "reload"
          });
          if (!ab.ok) throw new Error(`fetching texture pack ${bb} answered HTTP ${ab.status}`);
          return await ab.json()
        }
      });
      return (0, Tb.f)(Ub), Ub
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);