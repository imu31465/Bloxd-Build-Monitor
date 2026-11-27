export const id = 218;
export const ids = [218];
export const modules = {
  35078: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CAPPED_COUNTS_VISIT_CAP: () => NW,
      reportCappedWasmFailure: () => cW,
      reportUncappedWasmFailure: () => LW,
      reportWasmCrash: () => EW,
      reportWasmFailure: () => PW
    });
    var mW = OW(1888);

    function EW(WW) {
      (0, mW.reportClientError)("wasm_load", WW.message, WW.code)
    }
    const NW = mW.MAX_ERRORS_PER_VISIT - 4;

    function PW(WW, iW, OW, EW) {
      (0, mW.reportClientError)(WW, iW, OW, !1, mW.MAX_ERRORS_PER_VISIT, {
        context: EW
      })
    }

    function LW(WW, iW, OW, EW) {
      (0, mW.reportClientError)(WW, iW, OW, !1, 1 / 0, {
        context: EW
      })
    }

    function cW(WW, iW, OW, EW) {
      (0, mW.reportClientError)(WW, iW, OW, !1, NW, {
        context: EW
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);