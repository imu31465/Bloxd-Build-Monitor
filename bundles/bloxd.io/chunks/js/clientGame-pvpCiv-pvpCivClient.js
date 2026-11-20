export const id = 23;
export const ids = [23];
export const modules = {
  39303: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => lT
    });
    const lT = function(TT, kT, cT) {
      let lT;
      return {
        onCreate: TT => {
          lT = TT
        },
        onPlayerAltAction: (TT, kT, cT, MT, KT, OT) => {
          null !== OT && "Mesh" === lT.getEntityType(OT) && "Weaponmaster" === lT.getEntityName(OT) && lT.openShop(TT, !1, "PvpCivWeapon")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);