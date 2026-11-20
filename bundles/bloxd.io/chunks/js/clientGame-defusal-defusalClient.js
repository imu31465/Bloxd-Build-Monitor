export const id = 16;
export const ids = [16];
export const modules = {
  39189: (TT, kT, cT) => {
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
          OT && "Mesh" === lT.getEntityType(OT) && lT.openShop(TT, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);