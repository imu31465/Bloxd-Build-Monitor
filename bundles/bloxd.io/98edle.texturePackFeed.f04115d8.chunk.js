export const id = 43;
export const ids = [43];
export const modules = {
  40783: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      startPageTexturePackFeed: () => AW
    });
    var wW = MW(1033),
      CW = MW(50),
      zR = MW(40769);

    function AW(WW, RW) {
      const MW = new zR.e({
        store: CW.e,
        warn: WW,
        oneShot: RW,
        fetchLatest: async WW => {
          const RW = await fetch(`${wW.clientSideServerUrls.texturePackUrl}/${WW}.json`, {
            cache: "reload"
          });
          if (!RW.ok) throw new Error(`fetching texture pack ${WW} answered HTTP ${RW.status}`);
          return await RW.json()
        }
      });
      return (0, zR.i)(MW), MW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);