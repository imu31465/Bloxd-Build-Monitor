export const id = 14;
export const ids = [14];
export const modules = {
  40511: (VV, eV, xV) => {
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
          yV && "Mesh" === JV.getEntityType(yV) && "Quartermaster" === JV.getEntityName(yV) && JV.openShop(VV, !1, "Armoury")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);