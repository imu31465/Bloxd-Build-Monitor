export const id = 55;
export const ids = [55];
export const modules = {
  51319: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      startPageTexturePackFeed: () => mt
    });
    var Ot = Vt(1293),
      qt = Vt(39),
      Dt = Vt(51307);

    function mt(tt, et) {
      const Vt = new Dt.e({
        store: qt.c,
        warn: tt,
        oneShot: et,
        fetchLatest: async tt => {
          const et = await fetch(`${Ot.clientSideServerUrls.texturePackUrl}/${tt}.json`, {
            cache: "reload"
          });
          if (!et.ok) throw new Error(`fetching texture pack ${tt} answered HTTP ${et.status}`);
          return await et.json()
        }
      });
      return (0, Dt.i)(Vt), Vt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);