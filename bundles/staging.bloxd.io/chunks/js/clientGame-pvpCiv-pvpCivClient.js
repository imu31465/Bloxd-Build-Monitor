export const id = 23;
export const ids = [23];
export const modules = {
  39755: (tt, et, Vt) => {
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
          null !== mt && "Mesh" === Ot.getEntityType(mt) && "Weaponmaster" === Ot.getEntityName(mt) && Ot.openShop(tt, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);