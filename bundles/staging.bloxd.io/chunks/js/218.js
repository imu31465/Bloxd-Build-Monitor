export const id = 218;
export const ids = [218];
export const modules = {
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
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);