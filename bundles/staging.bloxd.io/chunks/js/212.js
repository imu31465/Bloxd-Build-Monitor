export const id = 212;
export const ids = [212];
export const modules = {
  34708: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CAPPED_COUNTS_VISIT_CAP: () => Me,
      reportCappedWasmFailure: () => Fe,
      reportUncappedWasmFailure: () => Ue,
      reportWasmCrash: () => be,
      reportWasmFailure: () => Ke
    });
    var ye = He(1814);

    function be(ee) {
      (0, ye.reportClientError)("wasm_load", ee.message, ee.code)
    }
    const Me = ye.MAX_ERRORS_PER_VISIT - 4;

    function Ke(ee, ie, He, be) {
      (0, ye.reportClientError)(ee, ie, He, !1, ye.MAX_ERRORS_PER_VISIT, {
        context: be
      })
    }

    function Ue(ee, ie, He, be) {
      (0, ye.reportClientError)(ee, ie, He, !1, 1 / 0, {
        context: be
      })
    }

    function Fe(ee, ie, He, be) {
      (0, ye.reportClientError)(ee, ie, He, !1, Me, {
        context: be
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);