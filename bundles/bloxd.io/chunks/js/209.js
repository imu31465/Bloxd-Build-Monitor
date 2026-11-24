export const id = 209;
export const ids = [209];
export const modules = {
  36240: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CAPPED_COUNTS_VISIT_CAP: () => KD,
      reportCappedWasmFailure: () => cD,
      reportUncappedWasmFailure: () => LD,
      reportWasmCrash: () => sD,
      reportWasmFailure: () => rD
    });
    var pD = wD(2925);

    function sD(DD) {
      (0, pD.reportClientError)("wasm_load", DD.message, DD.code)
    }
    const KD = pD.c - 4;

    function rD(DD, zD, wD) {
      (0, pD.reportClientError)(DD, zD, wD, !1)
    }

    function LD(DD, zD, wD) {
      (0, pD.reportClientError)(DD, zD, wD, !1, 1 / 0)
    }

    function cD(DD, zD, wD) {
      (0, pD.reportClientError)(DD, zD, wD, !1, KD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);