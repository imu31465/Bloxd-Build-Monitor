export const id = 10;
export const ids = [10];
export const modules = {
  39398: (TT, UT, mT) => {
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
          gT && "Mesh" === WT.getEntityType(gT) && ("Permanent Upgrades" === WT.getEntityName(gT) ? WT.openShop(TT, !1, "Upgrades") : "Items" === WT.getEntityName(gT) ? WT.openShop(TT, !1, "Items") : "Prestige" === WT.getEntityName(gT) && WT.openShop(TT, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);