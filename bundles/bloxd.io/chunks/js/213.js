export const id = 213;
export const ids = [213];
export const modules = {
  36337: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CAPPED_COUNTS_VISIT_CAP: () => dB,
      reportCappedWasmFailure: () => uB,
      reportUncappedWasmFailure: () => NB,
      reportWasmCrash: () => nB,
      reportWasmFailure: () => IB
    });
    var QB = zB(3036);

    function nB(BB) {
      (0, QB.reportClientError)("wasm_load", BB.message, BB.code)
    }
    const dB = QB.c - 4;

    function IB(BB, jB, zB) {
      (0, QB.reportClientError)(BB, jB, zB, !1)
    }

    function NB(BB, jB, zB) {
      (0, QB.reportClientError)(BB, jB, zB, !1, 1 / 0)
    }

    function uB(BB, jB, zB) {
      (0, QB.reportClientError)(BB, jB, zB, !1, dB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);