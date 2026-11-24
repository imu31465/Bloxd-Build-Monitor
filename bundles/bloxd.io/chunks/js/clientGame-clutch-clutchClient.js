export const id = 13;
export const ids = [13];
export const modules = {
  39496: (tt, et, Vt) => {
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
          mt && "Mesh" === Ot.getEntityType(mt) && "Quartermaster" === Ot.getEntityName(mt) && Ot.openShop(tt, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);