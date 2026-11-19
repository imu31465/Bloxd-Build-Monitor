export const id = 51;
export const ids = [51];
export const modules = {
  42147: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      startPageTexturePackFeed: () => WT
    });
    var iT = IT(1183),
      zT = IT(26),
      kT = IT(42141);

    function WT(TT, oT) {
      const IT = new kT.e({
        store: zT.c,
        warn: TT,
        oneShot: oT,
        fetchLatest: async TT => {
          const oT = await fetch(`${iT.clientSideServerUrls.texturePackUrl}/${TT}.json`, {
            cache: "reload"
          });
          if (!oT.ok) throw new Error(`fetching texture pack ${TT} answered HTTP ${oT.status}`);
          return await oT.json()
        }
      });
      return (0, kT.h)(IT), IT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);