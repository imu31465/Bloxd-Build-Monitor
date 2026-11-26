export const id = 91;
export const ids = [91];
export const modules = {
  5217: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      reportCarriedGlLossWait: () => YV
    });
    var JV = xV(4861);

    function YV(VV) {
      try {
        (0, JV.d)(VV.message, VV.code, void 0, {}, {})
      } catch (eV) {
        console.warn("Couldn't report the last page's WebGL context wait", eV)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);