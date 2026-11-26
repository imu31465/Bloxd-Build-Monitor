export const id = 66;
export const ids = [66];
export const modules = {
  54593: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      startPageTexturePackFeed: () => hH
    });
    var AH = LH(1131),
      rH = LH(30),
      SH = LH(54579);

    function hH(HH, BH) {
      const LH = new SH.d({
        store: rH.c,
        warn: HH,
        oneShot: BH,
        fetchLatest: async HH => {
          const BH = await fetch(`${AH.clientSideServerUrls.texturePackUrl}/${HH}.json`, {
            cache: "reload"
          });
          if (!BH.ok) throw new Error(`fetching texture pack ${HH} answered HTTP ${BH.status}`);
          return await BH.json()
        }
      });
      return (0, SH.h)(LH), LH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);