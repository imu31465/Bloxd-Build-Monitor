export const id = 217;
export const ids = [217, 218];
export const modules = {
  35371: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      reportJsMainStall: () => Kd,
      resetJsMainStallReport: () => hd
    });
    var Wd = md(35375),
      Fd = md(1916),
      Rd = md(35381);
    let Xd = !1;

    function Kd(dd, Od, md, Kd) {
      Xd || (Xd = !0, (0, Fd.reportClientError)("wasm_load", (0, Rd.e)(dd, Od, md, Kd, (0, Rd.f)()), "JS-mainStall", !0, Wd.CAPPED_COUNTS_VISIT_CAP))
    }

    function hd() {
      Xd = !1
    }
  },
  35381: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      f: () => Xd
    });
    var Wd = md(310),
      Fd = md(145),
      Rd = md(35387);

    function Xd() {
      var dd, Od, md;
      return null !== (dd = (0, Wd.n)(null !== (Od = null === (md = (0, Fd.p)()) || void 0 === md ? void 0 : md.renderer) && void 0 !== Od ? Od : null, (0, Fd.l)())) && void 0 !== dd ? dd : "unknown"
    }

    function Kd(dd, Od, md, Wd, Fd) {
      const Xd = null === Od ? "untimed" : `${Math.round(Od)} ms`;
      return `frames stalled, ${md}, gpu ${(0,Rd.d)(Fd)}, blocking ${Xd}, drawn ${Math.round(dd)} ms apart, timers ${Wd.timers}, timer gap ${Math.round(Wd.longestGapMs)} ms`
    }
  },
  35375: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      CAPPED_COUNTS_VISIT_CAP: () => Rd,
      reportCappedWasmFailure: () => hd,
      reportUncappedWasmFailure: () => Kd,
      reportWasmCrash: () => Fd,
      reportWasmFailure: () => Xd
    });
    var Wd = md(1916);

    function Fd(dd) {
      (0, Wd.reportClientError)("wasm_load", dd.message, dd.code)
    }
    const Rd = Wd.MAX_ERRORS_PER_VISIT - 4;

    function Xd(dd, Od, md, Fd) {
      (0, Wd.reportClientError)(dd, Od, md, !1, Wd.MAX_ERRORS_PER_VISIT, {
        context: Fd
      })
    }

    function Kd(dd, Od, md, Fd) {
      (0, Wd.reportClientError)(dd, Od, md, !1, 1 / 0, {
        context: Fd
      })
    }

    function hd(dd, Od, md, Fd) {
      (0, Wd.reportClientError)(dd, Od, md, !1, Rd, {
        context: Fd
      })
    }
  },
  35387: (dd, Od, md) => {
    function Wd(dd) {
      return String(dd).replace(/\d/g, (dd => String.fromCharCode(97 + Number(dd))))
    }
    md.d(Od, {
      d: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);