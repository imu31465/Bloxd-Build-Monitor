export const id = 276;
export const ids = [276];
export const modules = {
  41257: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      gamePackSource: () => Dt
    });
    var Ot = Vt(5145),
      qt = Vt(1600);

    function Dt(tt) {
      return {
        packKey: async et => (await qt.e.getGame(tt, et, !0)).customTexturePackKey,
        fetchPack: Ot.e
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);