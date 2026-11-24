export const id = 13;
export const ids = [13];
export const modules = {
  39411: (TT, UT, mT) => {
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
          gT && "Mesh" === WT.getEntityType(gT) && "Quartermaster" === WT.getEntityName(gT) && WT.openShop(TT, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);