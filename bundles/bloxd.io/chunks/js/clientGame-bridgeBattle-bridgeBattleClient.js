export const id = 10;
export const ids = [10];
export const modules = {
  39058: (TT, kT, cT) => {
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
          OT && "Mesh" === lT.getEntityType(OT) && ("Permanent Upgrades" === lT.getEntityName(OT) ? lT.openShop(TT, !1, "Upgrades") : "Items" === lT.getEntityName(OT) ? lT.openShop(TT, !1, "Items") : "Prestige" === lT.getEntityName(OT) && lT.openShop(TT, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);