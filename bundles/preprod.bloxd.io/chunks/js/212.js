export const id = 212;
export const ids = [212];
export const modules = {
  34821: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CAPPED_COUNTS_VISIT_CAP: () => SH,
      reportCappedWasmFailure: () => zH,
      reportUncappedWasmFailure: () => tH,
      reportWasmCrash: () => rH,
      reportWasmFailure: () => hH
    });
    var AH = LH(1826);

    function rH(HH) {
      (0, AH.reportClientError)("wasm_load", HH.message, HH.code)
    }
    const SH = AH.MAX_ERRORS_PER_VISIT - 4;

    function hH(HH, BH, LH, rH) {
      (0, AH.reportClientError)(HH, BH, LH, !1, AH.MAX_ERRORS_PER_VISIT, {
        context: rH
      })
    }

    function tH(HH, BH, LH, rH) {
      (0, AH.reportClientError)(HH, BH, LH, !1, 1 / 0, {
        context: rH
      })
    }

    function zH(HH, BH, LH, rH) {
      (0, AH.reportClientError)(HH, BH, LH, !1, SH, {
        context: rH
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);