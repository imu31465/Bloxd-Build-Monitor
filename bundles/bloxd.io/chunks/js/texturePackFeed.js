export const id = 55;
export const ids = [55];
export const modules = {
  51154: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      startPageTexturePackFeed: () => gT
    });
    var WT = mT(1302),
      zT = mT(44),
      MT = mT(51142);

    function gT(TT, UT) {
      const mT = new MT.d({
        store: zT.h,
        warn: TT,
        oneShot: UT,
        fetchLatest: async TT => {
          const UT = await fetch(`${WT.clientSideServerUrls.texturePackUrl}/${TT}.json`, {
            cache: "reload"
          });
          if (!UT.ok) throw new Error(`fetching texture pack ${TT} answered HTTP ${UT.status}`);
          return await UT.json()
        }
      });
      return (0, MT.e)(mT), mT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);