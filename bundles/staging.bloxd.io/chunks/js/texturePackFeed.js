export const id = 67;
export const ids = [67];
export const modules = {
  54835: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      startPageTexturePackFeed: () => PW
    });
    var mW = OW(1185),
      EW = OW(39),
      NW = OW(54829);

    function PW(WW, iW) {
      const OW = new NW.c({
        store: EW.f,
        warn: WW,
        oneShot: iW,
        fetchLatest: async WW => {
          const iW = await fetch(`${mW.clientSideServerUrls.texturePackUrl}/${WW}.json`, {
            cache: "reload"
          });
          if (!iW.ok) throw new Error(`fetching texture pack ${WW} answered HTTP ${iW.status}`);
          return await iW.json()
        }
      });
      return (0, NW.g)(OW), OW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);