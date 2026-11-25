export const id = 16;
export const ids = [16];
export const modules = {
  39641: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Ot
    });
    const Ot = function(tt, et, Vt) {
      let Ot;
      return {
        onCreate: tt => {
          Ot = tt
        },
        onPlayerAltAction: (tt, et, Vt, qt, Dt, mt) => {
          mt && "Mesh" === Ot.getEntityType(mt) && Ot.openShop(tt, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);