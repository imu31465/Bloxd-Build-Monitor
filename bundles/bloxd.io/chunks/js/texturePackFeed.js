export const id = 55;
export const ids = [55];
export const modules = {
  51453: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      startPageTexturePackFeed: () => yG
    });
    var wG = ZG(1163),
      SG = ZG(29),
      LG = ZG(51442);

    function yG(GG, bG) {
      const ZG = new LG.d({
        store: SG.e,
        warn: GG,
        oneShot: bG,
        fetchLatest: async GG => {
          const bG = await fetch(`${wG.clientSideServerUrls.texturePackUrl}/${GG}.json`, {
            cache: "reload"
          });
          if (!bG.ok) throw new Error(`fetching texture pack ${GG} answered HTTP ${bG.status}`);
          return await bG.json()
        }
      });
      return (0, LG.e)(ZG), ZG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);