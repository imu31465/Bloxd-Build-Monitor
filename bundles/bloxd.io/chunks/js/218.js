export const id = 218;
export const ids = [218];
export const modules = {
  34980: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CAPPED_COUNTS_VISIT_CAP: () => uR,
      reportCappedWasmFailure: () => iR,
      reportUncappedWasmFailure: () => qR,
      reportWasmCrash: () => tR,
      reportWasmFailure: () => ZR
    });
    var yR = GR(1972);

    function tR(RR) {
      (0, yR.reportClientError)("wasm_load", RR.message, RR.code)
    }
    const uR = yR.MAX_ERRORS_PER_VISIT - 4;

    function ZR(RR, JR, GR, tR) {
      (0, yR.reportClientError)(RR, JR, GR, !1, yR.MAX_ERRORS_PER_VISIT, {
        context: tR
      })
    }

    function qR(RR, JR, GR, tR) {
      (0, yR.reportClientError)(RR, JR, GR, !1, 1 / 0, {
        context: tR
      })
    }

    function iR(RR, JR, GR, tR) {
      (0, yR.reportClientError)(RR, JR, GR, !1, uR, {
        context: tR
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);