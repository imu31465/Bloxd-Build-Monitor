export const id = 211;
export const ids = [211, 212];
export const modules = {
  34819: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      reportJsMainStall: () => tH,
      resetJsMainStallReport: () => zH
    });
    var AH = LH(34821),
      rH = LH(1826),
      SH = LH(34825);
    let hH = !1;

    function tH(HH, BH, LH, tH) {
      hH || (hH = !0, (0, rH.reportClientError)("wasm_load", (0, SH.e)(HH, BH, LH, tH, (0, SH.h)()), "JS-mainStall", !0, AH.CAPPED_COUNTS_VISIT_CAP))
    }

    function zH() {
      hH = !1
    }
  },
  34825: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      h: () => hH
    });
    var AH = LH(241),
      rH = LH(114),
      SH = LH(34828);

    function hH() {
      var HH, BH, LH;
      return null !== (HH = (0, AH.o)(null !== (BH = null === (LH = (0, rH.l)()) || void 0 === LH ? void 0 : LH.renderer) && void 0 !== BH ? BH : null, (0, rH.i)())) && void 0 !== HH ? HH : "unknown"
    }

    function tH(HH, BH, LH, AH, rH) {
      const hH = null === BH ? "untimed" : `${Math.round(BH)} ms`;
      return `frames stalled, ${LH}, gpu ${(0,SH.c)(rH)}, blocking ${hH}, drawn ${Math.round(HH)} ms apart, timers ${AH.timers}, timer gap ${Math.round(AH.longestGapMs)} ms`
    }
  },
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
  },
  34828: (HH, BH, LH) => {
    function AH(HH) {
      return String(HH).replace(/\d/g, (HH => String.fromCharCode(97 + Number(HH))))
    }
    LH.d(BH, {
      c: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);