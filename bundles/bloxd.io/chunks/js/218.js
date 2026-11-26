export const id = 218;
export const ids = [218];
export const modules = {
  35139: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CAPPED_COUNTS_VISIT_CAP: () => UV,
      reportCappedWasmFailure: () => QV,
      reportUncappedWasmFailure: () => pV,
      reportWasmCrash: () => YV,
      reportWasmFailure: () => yV
    });
    var JV = xV(3268);

    function YV(VV) {
      (0, JV.reportClientError)("wasm_load", VV.message, VV.code)
    }
    const UV = JV.MAX_ERRORS_PER_VISIT - 4;

    function yV(VV, eV, xV, YV) {
      (0, JV.reportClientError)(VV, eV, xV, !1, JV.MAX_ERRORS_PER_VISIT, {
        context: YV
      })
    }

    function pV(VV, eV, xV, YV) {
      (0, JV.reportClientError)(VV, eV, xV, !1, 1 / 0, {
        context: YV
      })
    }

    function QV(VV, eV, xV, YV) {
      (0, JV.reportClientError)(VV, eV, xV, !1, UV, {
        context: YV
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);