export const id = 217;
export const ids = [217, 218];
export const modules = {
  34868: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      reportJsMainStall: () => PM,
      resetJsMainStallReport: () => nM
    });
    var OM = iM(34877),
      SM = iM(3258),
      jM = iM(34880);
    let aM = !1;

    function PM(MM, rM, iM, PM) {
      aM || (aM = !0, (0, SM.reportClientError)("wasm_load", (0, jM.d)(MM, rM, iM, PM, (0, jM.e)()), "JS-mainStall", !0, OM.CAPPED_COUNTS_VISIT_CAP))
    }

    function nM() {
      aM = !1
    }
  },
  34880: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      e: () => aM
    });
    var OM = iM(243),
      SM = iM(114),
      jM = iM(34885);

    function aM() {
      var MM, rM, iM;
      return null !== (MM = (0, OM.p)(null !== (rM = null === (iM = (0, SM.o)()) || void 0 === iM ? void 0 : iM.renderer) && void 0 !== rM ? rM : null, (0, SM.k)())) && void 0 !== MM ? MM : "unknown"
    }

    function PM(MM, rM, iM, OM, SM) {
      const aM = null === rM ? "untimed" : `${Math.round(rM)} ms`;
      return `frames stalled, ${iM}, gpu ${(0,jM.b)(SM)}, blocking ${aM}, drawn ${Math.round(MM)} ms apart, timers ${OM.timers}, timer gap ${Math.round(OM.longestGapMs)} ms`
    }
  },
  34877: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CAPPED_COUNTS_VISIT_CAP: () => jM,
      reportCappedWasmFailure: () => nM,
      reportUncappedWasmFailure: () => PM,
      reportWasmCrash: () => SM,
      reportWasmFailure: () => aM
    });
    var OM = iM(3258);

    function SM(MM) {
      (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
    }
    const jM = OM.MAX_ERRORS_PER_VISIT - 4;

    function aM(MM, rM, iM, SM) {
      (0, OM.reportClientError)(MM, rM, iM, !1, OM.MAX_ERRORS_PER_VISIT, {
        context: SM
      })
    }

    function PM(MM, rM, iM, SM) {
      (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
        context: SM
      })
    }

    function nM(MM, rM, iM, SM) {
      (0, OM.reportClientError)(MM, rM, iM, !1, jM, {
        context: SM
      })
    }
  },
  34885: (MM, rM, iM) => {
    function OM(MM) {
      return String(MM).replace(/\d/g, (MM => String.fromCharCode(97 + Number(MM))))
    }
    iM.d(rM, {
      b: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);