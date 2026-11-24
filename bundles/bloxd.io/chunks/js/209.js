export const id = 209;
export const ids = [209];
export const modules = {
  36230: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      CAPPED_COUNTS_VISIT_CAP: () => ik,
      reportCappedWasmFailure: () => ak,
      reportUncappedWasmFailure: () => lk,
      reportWasmCrash: () => Tk,
      reportWasmFailure: () => yk
    });
    var Xk = Ik(2852);

    function Tk(kk) {
      (0, Xk.reportClientError)("wasm_load", kk.message, kk.code)
    }
    const ik = Xk.c - 4;

    function yk(kk, Fk, Ik) {
      (0, Xk.reportClientError)(kk, Fk, Ik, !1)
    }

    function lk(kk, Fk, Ik) {
      (0, Xk.reportClientError)(kk, Fk, Ik, !1, 1 / 0)
    }

    function ak(kk, Fk, Ik) {
      (0, Xk.reportClientError)(kk, Fk, Ik, !1, ik)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);