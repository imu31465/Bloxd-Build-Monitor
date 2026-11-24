export const id = 54;
export const ids = [54];
export const modules = {
  51012: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      startPageTexturePackFeed: () => xm
    });
    var hm = fm(1214),
      Am = fm(37),
      am = fm(51e3);

    function xm(mm, Tm) {
      const fm = new am.c({
        store: Am.e,
        warn: mm,
        oneShot: Tm,
        fetchLatest: async mm => {
          const Tm = await fetch(`${hm.clientSideServerUrls.texturePackUrl}/${mm}.json`, {
            cache: "reload"
          });
          if (!Tm.ok) throw new Error(`fetching texture pack ${mm} answered HTTP ${Tm.status}`);
          return await Tm.json()
        }
      });
      return (0, am.d)(fm), fm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);