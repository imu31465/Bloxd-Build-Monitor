export const id = 15;
export const ids = [15];
export const modules = {
  39633: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => qt
    });
    const Ot = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      qt = function(tt, et, Vt) {
        let qt;
        return {
          onCreate: tt => {
            qt = tt
          },
          onPlayerAltAction: (tt, et, Vt, Dt, mt, dt) => {
            Ot.some((tt => tt[0] === et && tt[2] === Dt)) && qt.openShop(tt, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);