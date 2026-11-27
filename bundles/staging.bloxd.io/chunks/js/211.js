export const id = 211;
export const ids = [211, 212];
export const modules = {
  34699: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      reportJsMainStall: () => Ue,
      resetJsMainStallReport: () => Fe
    });
    var ye = He(34708),
      be = He(1814),
      Me = He(34712);
    let Ke = !1;

    function Ue(ee, ie, He, Ue) {
      Ke || (Ke = !0, (0, be.reportClientError)("wasm_load", (0, Me.c)(ee, ie, He, Ue, (0, Me.e)()), "JS-mainStall", !0, ye.CAPPED_COUNTS_VISIT_CAP))
    }

    function Fe() {
      Ke = !1
    }
  },
  34712: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      e: () => Ke
    });
    var ye = He(260),
      be = He(123),
      Me = He(34717);

    function Ke() {
      var ee, ie, He;
      return null !== (ee = (0, ye.j)(null !== (ie = null === (He = (0, be.p)()) || void 0 === He ? void 0 : He.renderer) && void 0 !== ie ? ie : null, (0, be.n)())) && void 0 !== ee ? ee : "unknown"
    }

    function Ue(ee, ie, He, ye, be) {
      const Ke = null === ie ? "untimed" : `${Math.round(ie)} ms`;
      return `frames stalled, ${He}, gpu ${(0,Me.d)(be)}, blocking ${Ke}, drawn ${Math.round(ee)} ms apart, timers ${ye.timers}, timer gap ${Math.round(ye.longestGapMs)} ms`
    }
  },
  34708: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CAPPED_COUNTS_VISIT_CAP: () => Me,
      reportCappedWasmFailure: () => Fe,
      reportUncappedWasmFailure: () => Ue,
      reportWasmCrash: () => be,
      reportWasmFailure: () => Ke
    });
    var ye = He(1814);

    function be(ee) {
      (0, ye.reportClientError)("wasm_load", ee.message, ee.code)
    }
    const Me = ye.MAX_ERRORS_PER_VISIT - 4;

    function Ke(ee, ie, He, be) {
      (0, ye.reportClientError)(ee, ie, He, !1, ye.MAX_ERRORS_PER_VISIT, {
        context: be
      })
    }

    function Ue(ee, ie, He, be) {
      (0, ye.reportClientError)(ee, ie, He, !1, 1 / 0, {
        context: be
      })
    }

    function Fe(ee, ie, He, be) {
      (0, ye.reportClientError)(ee, ie, He, !1, Me, {
        context: be
      })
    }
  },
  34717: (ee, ie, He) => {
    function ye(ee) {
      return String(ee).replace(/\d/g, (ee => String.fromCharCode(97 + Number(ee))))
    }
    He.d(ie, {
      d: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);