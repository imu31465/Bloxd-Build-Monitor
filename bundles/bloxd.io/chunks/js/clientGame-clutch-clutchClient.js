export const id = 13;
export const ids = [13];
export const modules = {
  39068: (TT, kT, cT) => {
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
          OT && "Mesh" === lT.getEntityType(OT) && "Quartermaster" === lT.getEntityName(OT) && lT.openShop(TT, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);