export const id = 17;
export const ids = [17];
export const modules = {
  40649: (VV, eV, xV) => {
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
          yV && "Mesh" === JV.getEntityType(yV) && JV.openShop(VV, !0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);