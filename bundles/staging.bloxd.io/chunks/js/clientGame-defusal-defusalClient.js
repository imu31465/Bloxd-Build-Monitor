export const id = 16;
export const ids = [16];
export const modules = {
  39552: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => WT
    });
    const WT = function(TT, UT, mT) {
      let WT;
      return {
        onCreate: TT => {
          WT = TT
        },
        onPlayerAltAction: (TT, UT, mT, zT, MT, gT) => {
          gT && "Mesh" === WT.getEntityType(gT) && WT.openShop(TT, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);