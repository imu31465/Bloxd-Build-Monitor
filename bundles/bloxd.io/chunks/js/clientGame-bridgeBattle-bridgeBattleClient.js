export const id = 10;
export const ids = [10];
export const modules = {
  39483: (tt, et, Vt) => {
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
          mt && "Mesh" === Ot.getEntityType(mt) && ("Permanent Upgrades" === Ot.getEntityName(mt) ? Ot.openShop(tt, !1, "Upgrades") : "Items" === Ot.getEntityName(mt) ? Ot.openShop(tt, !1, "Items") : "Prestige" === Ot.getEntityName(mt) && Ot.openShop(tt, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);