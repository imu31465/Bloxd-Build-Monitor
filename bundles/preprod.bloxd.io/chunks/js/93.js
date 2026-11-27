export const id = 93;
export const ids = [93];
export const modules = {
  5453: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      reportCarriedGlLossWait: () => EW
    });
    var mW = OW(5104);

    function EW(WW) {
      try {
        (0, mW.d)(WW.message, WW.code, void 0, {}, {})
      } catch (iW) {
        console.warn("Couldn't report the last page's WebGL context wait", iW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);