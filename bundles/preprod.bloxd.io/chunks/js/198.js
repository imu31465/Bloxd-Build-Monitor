export const id = 198;
export const ids = [198, 199];
export const modules = {
  34331: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      reportJsMainStall: () => sQ,
      resetJsMainStallReport: () => FQ
    });
    var wQ = XQ(34339),
      qQ = XQ(3176),
      TQ = XQ(34346);
    let zQ = !1;

    function sQ(QQ, WQ, XQ, sQ) {
      zQ || (zQ = !0, (0, qQ.reportClientError)("wasm_load", (0, TQ.d)(QQ, WQ, XQ, sQ, (0, TQ.e)()), "JS-mainStall", !0, wQ.CAPPED_COUNTS_VISIT_CAP))
    }

    function FQ() {
      zQ = !1
    }
  },
  34346: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      e: () => zQ
    });
    var wQ = XQ(307),
      qQ = XQ(150),
      TQ = XQ(34354);

    function zQ() {
      var QQ, WQ, XQ;
      return null !== (QQ = (0, wQ.h)(null !== (WQ = null === (XQ = (0, qQ.n)()) || void 0 === XQ ? void 0 : XQ.renderer) && void 0 !== WQ ? WQ : null, (0, qQ.j)())) && void 0 !== QQ ? QQ : "unknown"
    }

    function sQ(QQ, WQ, XQ, wQ, qQ) {
      const zQ = null === WQ ? "untimed" : `${Math.round(WQ)} ms`;
      return `frames stalled, ${XQ}, gpu ${(0,TQ.b)(qQ)}, blocking ${zQ}, drawn ${Math.round(QQ)} ms apart, timers ${wQ.timers}, timer gap ${Math.round(wQ.longestGapMs)} ms`
    }
  },
  34339: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CAPPED_COUNTS_VISIT_CAP: () => TQ,
      reportCappedWasmFailure: () => FQ,
      reportUncappedWasmFailure: () => sQ,
      reportWasmCrash: () => qQ,
      reportWasmFailure: () => zQ
    });
    var wQ = XQ(3176);

    function qQ(QQ) {
      (0, wQ.reportClientError)("wasm_load", QQ.message, QQ.code)
    }
    const TQ = wQ.MAX_ERRORS_PER_VISIT - 4;

    function zQ(QQ, WQ, XQ, qQ) {
      (0, wQ.reportClientError)(QQ, WQ, XQ, !1, wQ.MAX_ERRORS_PER_VISIT, {
        context: qQ
      })
    }

    function sQ(QQ, WQ, XQ, qQ) {
      (0, wQ.reportClientError)(QQ, WQ, XQ, !1, 1 / 0, {
        context: qQ
      })
    }

    function FQ(QQ, WQ, XQ, qQ) {
      (0, wQ.reportClientError)(QQ, WQ, XQ, !1, TQ, {
        context: qQ
      })
    }
  },
  34354: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return String(QQ).replace(/\d/g, (QQ => String.fromCharCode(97 + Number(QQ))))
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);