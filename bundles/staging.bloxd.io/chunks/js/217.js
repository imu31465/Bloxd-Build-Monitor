export const id = 217;
export const ids = [217, 218];
export const modules = {
  35136: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      reportJsMainStall: () => pV,
      resetJsMainStallReport: () => QV
    });
    var JV = xV(35139),
      YV = xV(3268),
      UV = xV(35146);
    let yV = !1;

    function pV(VV, eV, xV, pV) {
      yV || (yV = !0, (0, YV.reportClientError)("wasm_load", (0, UV.d)(VV, eV, xV, pV, (0, UV.f)()), "JS-mainStall", !0, JV.CAPPED_COUNTS_VISIT_CAP))
    }

    function QV() {
      yV = !1
    }
  },
  35146: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      f: () => yV
    });
    var JV = xV(296),
      YV = xV(134),
      UV = xV(35148);

    function yV() {
      var VV, eV, xV;
      return null !== (VV = (0, JV.k)(null !== (eV = null === (xV = (0, YV.o)()) || void 0 === xV ? void 0 : xV.renderer) && void 0 !== eV ? eV : null, (0, YV.k)())) && void 0 !== VV ? VV : "unknown"
    }

    function pV(VV, eV, xV, JV, YV) {
      const yV = null === eV ? "untimed" : `${Math.round(eV)} ms`;
      return `frames stalled, ${xV}, gpu ${(0,UV.b)(YV)}, blocking ${yV}, drawn ${Math.round(VV)} ms apart, timers ${JV.timers}, timer gap ${Math.round(JV.longestGapMs)} ms`
    }
  },
  35139: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CAPPED_COUNTS_VISIT_CAP: () => UV,
      reportCappedWasmFailure: () => QV,
      reportUncappedWasmFailure: () => pV,
      reportWasmCrash: () => YV,
      reportWasmFailure: () => yV
    });
    var JV = xV(3268);

    function YV(VV) {
      (0, JV.reportClientError)("wasm_load", VV.message, VV.code)
    }
    const UV = JV.MAX_ERRORS_PER_VISIT - 4;

    function yV(VV, eV, xV, YV) {
      (0, JV.reportClientError)(VV, eV, xV, !1, JV.MAX_ERRORS_PER_VISIT, {
        context: YV
      })
    }

    function pV(VV, eV, xV, YV) {
      (0, JV.reportClientError)(VV, eV, xV, !1, 1 / 0, {
        context: YV
      })
    }

    function QV(VV, eV, xV, YV) {
      (0, JV.reportClientError)(VV, eV, xV, !1, UV, {
        context: YV
      })
    }
  },
  35148: (VV, eV, xV) => {
    function JV(VV) {
      return String(VV).replace(/\d/g, (VV => String.fromCharCode(97 + Number(VV))))
    }
    xV.d(eV, {
      b: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);