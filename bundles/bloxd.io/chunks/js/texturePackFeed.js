export const id = 51;
export const ids = [51];
export const modules = {
  42668: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      startPageTexturePackFeed: () => PU
    });
    var tU = gU(1196),
      pU = gU(34),
      EU = gU(42658);

    function PU(UU, RU) {
      const gU = new EU.d({
        store: pU.g,
        warn: UU,
        oneShot: RU,
        fetchLatest: async UU => {
          const RU = await fetch(`${tU.clientSideServerUrls.texturePackUrl}/${UU}.json`, {
            cache: "reload"
          });
          if (!RU.ok) throw new Error(`fetching texture pack ${UU} answered HTTP ${RU.status}`);
          return await RU.json()
        }
      });
      return (0, EU.f)(gU), gU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);