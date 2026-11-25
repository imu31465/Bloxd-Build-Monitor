export const id = 218;
export const ids = [218];
export const modules = {
  34877: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CAPPED_COUNTS_VISIT_CAP: () => jM,
      reportCappedWasmFailure: () => nM,
      reportUncappedWasmFailure: () => PM,
      reportWasmCrash: () => SM,
      reportWasmFailure: () => aM
    });
    var OM = iM(3258);

    function SM(MM) {
      (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
    }
    const jM = OM.MAX_ERRORS_PER_VISIT - 4;

    function aM(MM, rM, iM, SM) {
      (0, OM.reportClientError)(MM, rM, iM, !1, OM.MAX_ERRORS_PER_VISIT, {
        context: SM
      })
    }

    function PM(MM, rM, iM, SM) {
      (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
        context: SM
      })
    }

    function nM(MM, rM, iM, SM) {
      (0, OM.reportClientError)(MM, rM, iM, !1, jM, {
        context: SM
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);