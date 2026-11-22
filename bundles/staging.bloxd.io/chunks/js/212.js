export const id = 212;
export const ids = [212];
export const modules = {
  35829: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      CAPPED_COUNTS_VISIT_CAP: () => Sk,
      reportCappedWasmFailure: () => Pk,
      reportUncappedWasmFailure: () => rk,
      reportWasmCrash: () => fk,
      reportWasmFailure: () => bk
    });
    var Dk = ik(2866);

    function fk(kk) {
      (0, Dk.reportClientError)("wasm_load", kk.message, kk.code)
    }
    const Sk = Dk.b - 4;

    function bk(kk, ek, ik) {
      (0, Dk.reportClientError)(kk, ek, ik, !1)
    }

    function rk(kk, ek, ik) {
      (0, Dk.reportClientError)(kk, ek, ik, !1, 1 / 0)
    }

    function Pk(kk, ek, ik) {
      (0, Dk.reportClientError)(kk, ek, ik, !1, Sk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);