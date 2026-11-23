export const id = 54;
export const ids = [54];
export const modules = {
  50754: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      startPageTexturePackFeed: () => nC
    });
    var QC = ZC(1149),
      wC = ZC(38),
      bC = ZC(50746);

    function nC(CC, zC) {
      const ZC = new bC.b({
        store: wC.g,
        warn: CC,
        oneShot: zC,
        fetchLatest: async CC => {
          const zC = await fetch(`${QC.clientSideServerUrls.texturePackUrl}/${CC}.json`, {
            cache: "reload"
          });
          if (!zC.ok) throw new Error(`fetching texture pack ${CC} answered HTTP ${zC.status}`);
          return await zC.json()
        }
      });
      return (0, bC.f)(ZC), ZC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);