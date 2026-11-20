export const id = 52;
export const ids = [52];
export const modules = {
  42855: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      startPageTexturePackFeed: () => OT
    });
    var lT = cT(1202),
      MT = cT(47),
      KT = cT(42840);

    function OT(TT, kT) {
      const cT = new KT.d({
        store: MT.d,
        warn: TT,
        oneShot: kT,
        fetchLatest: async TT => {
          const kT = await fetch(`${lT.clientSideServerUrls.texturePackUrl}/${TT}.json`, {
            cache: "reload"
          });
          if (!kT.ok) throw new Error(`fetching texture pack ${TT} answered HTTP ${kT.status}`);
          return await kT.json()
        }
      });
      return (0, KT.e)(cT), cT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);