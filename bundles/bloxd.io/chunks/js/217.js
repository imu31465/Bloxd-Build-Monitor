export const id = 217;
export const ids = [217, 218];
export const modules = {
  35076: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      reportJsMainStall: () => LW,
      resetJsMainStallReport: () => cW
    });
    var mW = OW(35078),
      EW = OW(1888),
      NW = OW(35086);
    let PW = !1;

    function LW(WW, iW, OW, LW) {
      PW || (PW = !0, (0, EW.reportClientError)("wasm_load", (0, NW.b)(WW, iW, OW, LW, (0, NW.c)()), "JS-mainStall", !0, mW.CAPPED_COUNTS_VISIT_CAP))
    }

    function cW() {
      PW = !1
    }
  },
  35086: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      c: () => PW
    });
    var mW = OW(248),
      EW = OW(131),
      NW = OW(35089);

    function PW() {
      var WW, iW, OW;
      return null !== (WW = (0, mW.m)(null !== (iW = null === (OW = (0, EW.j)()) || void 0 === OW ? void 0 : OW.renderer) && void 0 !== iW ? iW : null, (0, EW.f)())) && void 0 !== WW ? WW : "unknown"
    }

    function LW(WW, iW, OW, mW, EW) {
      const PW = null === iW ? "untimed" : `${Math.round(iW)} ms`;
      return `frames stalled, ${OW}, gpu ${(0,NW.d)(EW)}, blocking ${PW}, drawn ${Math.round(WW)} ms apart, timers ${mW.timers}, timer gap ${Math.round(mW.longestGapMs)} ms`
    }
  },
  35078: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CAPPED_COUNTS_VISIT_CAP: () => NW,
      reportCappedWasmFailure: () => cW,
      reportUncappedWasmFailure: () => LW,
      reportWasmCrash: () => EW,
      reportWasmFailure: () => PW
    });
    var mW = OW(1888);

    function EW(WW) {
      (0, mW.reportClientError)("wasm_load", WW.message, WW.code)
    }
    const NW = mW.MAX_ERRORS_PER_VISIT - 4;

    function PW(WW, iW, OW, EW) {
      (0, mW.reportClientError)(WW, iW, OW, !1, mW.MAX_ERRORS_PER_VISIT, {
        context: EW
      })
    }

    function LW(WW, iW, OW, EW) {
      (0, mW.reportClientError)(WW, iW, OW, !1, 1 / 0, {
        context: EW
      })
    }

    function cW(WW, iW, OW, EW) {
      (0, mW.reportClientError)(WW, iW, OW, !1, NW, {
        context: EW
      })
    }
  },
  35089: (WW, iW, OW) => {
    function mW(WW) {
      return String(WW).replace(/\d/g, (WW => String.fromCharCode(97 + Number(WW))))
    }
    OW.d(iW, {
      d: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);