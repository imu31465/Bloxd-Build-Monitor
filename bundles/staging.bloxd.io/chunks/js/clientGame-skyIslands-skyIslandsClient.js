export const id = 29;
export const ids = [29];
export const modules = {
  40430: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => ye
    });
    const ye = function() {
      let ee;
      return {
        onCreate: ie => {
          ee = ie
        },
        onPlayerAltAction: (ie, He, ye, be, Me, Ke) => {
          if (!Ke || "Mesh" !== ee.getEntityType(Ke)) return;
          const Ue = ee.getEntityName(Ke);
          "Perks" === Ue ? ee.openShop(ie, !1, "Perks") : "Returning Bonus" === Ue && ee.openShop(ie, !1, "Returning Player Bonus")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);