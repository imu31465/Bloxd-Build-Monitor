export const id = 24;
export const ids = [24];
export const modules = {
  40718: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => YV
    });
    var JV = xV(32);
    const YV = function(VV, eV, xV) {
      let YV;
      return {
        onCreate: VV => {
          YV = VV
        },
        onPlayerClick: (VV, eV, xV, UV, yV, pV) => {
          eV || "Workbench" !== YV.getMetaInfo(pV).rootName || JV.h.QZ("toggleMenu", "inventory|Workbench")
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);