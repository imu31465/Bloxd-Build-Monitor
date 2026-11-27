export const id = 217;
export const ids = [217, 218];
export const modules = {
  35278: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      reportJsMainStall: () => Ir,
      resetJsMainStallReport: () => fr
    });
    var Zr = Qr(35287),
      Wr = Qr(1912),
      ar = Qr(35293);
    let jr = !1;

    function Ir(rr, Sr, Qr, Ir) {
      jr || (jr = !0, (0, Wr.reportClientError)("wasm_load", (0, ar.b)(rr, Sr, Qr, Ir, (0, ar.f)()), "JS-mainStall", !0, Zr.CAPPED_COUNTS_VISIT_CAP))
    }

    function fr() {
      jr = !1
    }
  },
  35293: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      f: () => jr
    });
    var Zr = Qr(285),
      Wr = Qr(135),
      ar = Qr(35296);

    function jr() {
      var rr, Sr, Qr;
      return null !== (rr = (0, Zr.j)(null !== (Sr = null === (Qr = (0, Wr.q)()) || void 0 === Qr ? void 0 : Qr.renderer) && void 0 !== Sr ? Sr : null, (0, Wr.m)())) && void 0 !== rr ? rr : "unknown"
    }

    function Ir(rr, Sr, Qr, Zr, Wr) {
      const jr = null === Sr ? "untimed" : `${Math.round(Sr)} ms`;
      return `frames stalled, ${Qr}, gpu ${(0,ar.b)(Wr)}, blocking ${jr}, drawn ${Math.round(rr)} ms apart, timers ${Zr.timers}, timer gap ${Math.round(Zr.longestGapMs)} ms`
    }
  },
  35287: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CAPPED_COUNTS_VISIT_CAP: () => ar,
      reportCappedWasmFailure: () => fr,
      reportUncappedWasmFailure: () => Ir,
      reportWasmCrash: () => Wr,
      reportWasmFailure: () => jr
    });
    var Zr = Qr(1912);

    function Wr(rr) {
      (0, Zr.reportClientError)("wasm_load", rr.message, rr.code)
    }
    const ar = Zr.MAX_ERRORS_PER_VISIT - 4;

    function jr(rr, Sr, Qr, Wr) {
      (0, Zr.reportClientError)(rr, Sr, Qr, !1, Zr.MAX_ERRORS_PER_VISIT, {
        context: Wr
      })
    }

    function Ir(rr, Sr, Qr, Wr) {
      (0, Zr.reportClientError)(rr, Sr, Qr, !1, 1 / 0, {
        context: Wr
      })
    }

    function fr(rr, Sr, Qr, Wr) {
      (0, Zr.reportClientError)(rr, Sr, Qr, !1, ar, {
        context: Wr
      })
    }
  },
  35296: (rr, Sr, Qr) => {
    function Zr(rr) {
      return String(rr).replace(/\d/g, (rr => String.fromCharCode(97 + Number(rr))))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);