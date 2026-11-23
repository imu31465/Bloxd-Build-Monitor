export const id = 209;
export const ids = [209];
export const modules = {
  36167: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CAPPED_COUNTS_VISIT_CAP: () => bC,
      reportCappedWasmFailure: () => oC,
      reportUncappedWasmFailure: () => fC,
      reportWasmCrash: () => wC,
      reportWasmFailure: () => nC
    });
    var QC = ZC(2927);

    function wC(CC) {
      (0, QC.reportClientError)("wasm_load", CC.message, CC.code)
    }
    const bC = QC.d - 4;

    function nC(CC, zC, ZC) {
      (0, QC.reportClientError)(CC, zC, ZC, !1)
    }

    function fC(CC, zC, ZC) {
      (0, QC.reportClientError)(CC, zC, ZC, !1, 1 / 0)
    }

    function oC(CC, zC, ZC) {
      (0, QC.reportClientError)(CC, zC, ZC, !1, bC)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);