export const id = 217;
export const ids = [217, 218];
export const modules = {
  34974: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      reportJsMainStall: () => qR,
      resetJsMainStallReport: () => iR
    });
    var yR = GR(34980),
      tR = GR(1972),
      uR = GR(34989);
    let ZR = !1;

    function qR(RR, JR, GR, qR) {
      ZR || (ZR = !0, (0, tR.reportClientError)("wasm_load", (0, uR.e)(RR, JR, GR, qR, (0, uR.i)()), "JS-mainStall", !0, yR.CAPPED_COUNTS_VISIT_CAP))
    }

    function iR() {
      ZR = !1
    }
  },
  34989: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      i: () => ZR
    });
    var yR = GR(279),
      tR = GR(132),
      uR = GR(34996);

    function ZR() {
      var RR, JR, GR;
      return null !== (RR = (0, yR.o)(null !== (JR = null === (GR = (0, tR.o)()) || void 0 === GR ? void 0 : GR.renderer) && void 0 !== JR ? JR : null, (0, tR.k)())) && void 0 !== RR ? RR : "unknown"
    }

    function qR(RR, JR, GR, yR, tR) {
      const ZR = null === JR ? "untimed" : `${Math.round(JR)} ms`;
      return `frames stalled, ${GR}, gpu ${(0,uR.e)(tR)}, blocking ${ZR}, drawn ${Math.round(RR)} ms apart, timers ${yR.timers}, timer gap ${Math.round(yR.longestGapMs)} ms`
    }
  },
  34980: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CAPPED_COUNTS_VISIT_CAP: () => uR,
      reportCappedWasmFailure: () => iR,
      reportUncappedWasmFailure: () => qR,
      reportWasmCrash: () => tR,
      reportWasmFailure: () => ZR
    });
    var yR = GR(1972);

    function tR(RR) {
      (0, yR.reportClientError)("wasm_load", RR.message, RR.code)
    }
    const uR = yR.MAX_ERRORS_PER_VISIT - 4;

    function ZR(RR, JR, GR, tR) {
      (0, yR.reportClientError)(RR, JR, GR, !1, yR.MAX_ERRORS_PER_VISIT, {
        context: tR
      })
    }

    function qR(RR, JR, GR, tR) {
      (0, yR.reportClientError)(RR, JR, GR, !1, 1 / 0, {
        context: tR
      })
    }

    function iR(RR, JR, GR, tR) {
      (0, yR.reportClientError)(RR, JR, GR, !1, uR, {
        context: tR
      })
    }
  },
  34996: (RR, JR, GR) => {
    function yR(RR) {
      return String(RR).replace(/\d/g, (RR => String.fromCharCode(97 + Number(RR))))
    }
    GR.d(JR, {
      e: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);