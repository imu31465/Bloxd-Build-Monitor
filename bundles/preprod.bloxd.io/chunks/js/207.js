export const id = 207;
export const ids = [207, 208];
export const modules = {
  34701: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      reportJsMainStall: () => FU,
      resetJsMainStallReport: () => oU
    });
    var cU = zU(34708),
      yU = zU(1835),
      QU = zU(34715);
    let AU = !1;

    function FU(UU, XU, zU, FU) {
      AU || (AU = !0, (0, yU.reportClientError)("wasm_load", (0, QU.e)(UU, XU, zU, FU, (0, QU.g)()), "JS-mainStall", !0, cU.CAPPED_COUNTS_VISIT_CAP))
    }

    function oU() {
      AU = !1
    }
  },
  34715: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      g: () => AU
    });
    var cU = zU(281),
      yU = zU(134),
      QU = zU(34719);

    function AU() {
      var UU, XU, zU;
      return null !== (UU = (0, cU.k)(null !== (XU = null === (zU = (0, yU.o)()) || void 0 === zU ? void 0 : zU.renderer) && void 0 !== XU ? XU : null, (0, yU.l)())) && void 0 !== UU ? UU : "unknown"
    }

    function FU(UU, XU, zU, cU, yU) {
      const AU = null === XU ? "untimed" : `${Math.round(XU)} ms`;
      return `frames stalled, ${zU}, gpu ${(0,QU.b)(yU)}, blocking ${AU}, drawn ${Math.round(UU)} ms apart, timers ${cU.timers}, timer gap ${Math.round(cU.longestGapMs)} ms`
    }
  },
  34708: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CAPPED_COUNTS_VISIT_CAP: () => QU,
      reportCappedWasmFailure: () => oU,
      reportUncappedWasmFailure: () => FU,
      reportWasmCrash: () => yU,
      reportWasmFailure: () => AU
    });
    var cU = zU(1835);

    function yU(UU) {
      (0, cU.reportClientError)("wasm_load", UU.message, UU.code)
    }
    const QU = cU.MAX_ERRORS_PER_VISIT - 4;

    function AU(UU, XU, zU, yU) {
      (0, cU.reportClientError)(UU, XU, zU, !1, cU.MAX_ERRORS_PER_VISIT, {
        context: yU
      })
    }

    function FU(UU, XU, zU, yU) {
      (0, cU.reportClientError)(UU, XU, zU, !1, 1 / 0, {
        context: yU
      })
    }

    function oU(UU, XU, zU, yU) {
      (0, cU.reportClientError)(UU, XU, zU, !1, QU, {
        context: yU
      })
    }
  },
  34719: (UU, XU, zU) => {
    function cU(UU) {
      return String(UU).replace(/\d/g, (UU => String.fromCharCode(97 + Number(UU))))
    }
    zU.d(XU, {
      b: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);