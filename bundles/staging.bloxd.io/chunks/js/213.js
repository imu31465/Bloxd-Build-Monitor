export const id = 213;
export const ids = [213];
export const modules = {
  36586: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      CAPPED_COUNTS_VISIT_CAP: () => LG,
      reportCappedWasmFailure: () => UG,
      reportUncappedWasmFailure: () => kG,
      reportWasmCrash: () => SG,
      reportWasmFailure: () => yG
    });
    var wG = ZG(2920);

    function SG(GG) {
      (0, wG.reportClientError)("wasm_load", GG.message, GG.code)
    }
    const LG = wG.MAX_ERRORS_PER_VISIT - 4;

    function yG(GG, bG, ZG) {
      (0, wG.reportClientError)(GG, bG, ZG, !1)
    }

    function kG(GG, bG, ZG) {
      (0, wG.reportClientError)(GG, bG, ZG, !1, 1 / 0)
    }

    function UG(GG, bG, ZG) {
      (0, wG.reportClientError)(GG, bG, ZG, !1, LG)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);