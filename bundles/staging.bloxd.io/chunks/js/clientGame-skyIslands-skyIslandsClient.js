export const id = 24;
export const ids = [24];
export const modules = {
  39497: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => pD
    });
    const pD = function() {
      let DD;
      return {
        onCreate: zD => {
          DD = zD
        },
        onPlayerAltAction: (zD, wD, pD, sD, KD, rD) => {
          if (!rD || "Mesh" !== DD.getEntityType(rD)) return;
          const LD = DD.getEntityName(rD);
          "Perks" === LD ? DD.openShop(zD, !1, "Perks") : "Returning Bonus" === LD && DD.openShop(zD, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);