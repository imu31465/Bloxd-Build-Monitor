export const id = 213;
export const ids = [213];
export const modules = {
  36487: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CAPPED_COUNTS_VISIT_CAP: () => Dt,
      reportCappedWasmFailure: () => jt,
      reportUncappedWasmFailure: () => dt,
      reportWasmCrash: () => qt,
      reportWasmFailure: () => mt
    });
    var Ot = Vt(3012);

    function qt(tt) {
      (0, Ot.reportClientError)("wasm_load", tt.message, tt.code)
    }
    const Dt = Ot.MAX_ERRORS_PER_VISIT - 4;

    function mt(tt, et, Vt) {
      (0, Ot.reportClientError)(tt, et, Vt, !1)
    }

    function dt(tt, et, Vt) {
      (0, Ot.reportClientError)(tt, et, Vt, !1, 1 / 0)
    }

    function jt(tt, et, Vt) {
      (0, Ot.reportClientError)(tt, et, Vt, !1, Dt)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);