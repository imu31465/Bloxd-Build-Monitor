export const id = 10;
export const ids = [10];
export const modules = {
  40500: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => JV
    });
    const JV = function(VV, eV, xV) {
      let JV;
      return {
        onCreate: VV => {
          JV = VV
        },
        onPlayerAltAction: (VV, eV, xV, YV, UV, yV) => {
          yV && "Mesh" === JV.getEntityType(yV) && ("Permanent Upgrades" === JV.getEntityName(yV) ? JV.openShop(VV, !1, "Upgrades") : "Items" === JV.getEntityName(yV) ? JV.openShop(VV, !1, "Items") : "Prestige" === JV.getEntityName(yV) && JV.openShop(VV, !1, "Prestige"))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);