export const id = 213;
export const ids = [213];
export const modules = {
  36283: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CAPPED_COUNTS_VISIT_CAP: () => oB,
      reportCappedWasmFailure: () => kB,
      reportUncappedWasmFailure: () => vB,
      reportWasmCrash: () => JB,
      reportWasmFailure: () => GB
    });
    var TB = ZB(3101);

    function JB(BB) {
      (0, TB.reportClientError)("wasm_load", BB.message, BB.code)
    }
    const oB = TB.MAX_ERRORS_PER_VISIT - 4;

    function GB(BB, IB, ZB) {
      (0, TB.reportClientError)(BB, IB, ZB, !1)
    }

    function vB(BB, IB, ZB) {
      (0, TB.reportClientError)(BB, IB, ZB, !1, 1 / 0)
    }

    function kB(BB, IB, ZB) {
      (0, TB.reportClientError)(BB, IB, ZB, !1, oB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);