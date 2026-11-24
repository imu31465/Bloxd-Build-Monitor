export const id = 209;
export const ids = [209];
export const modules = {
  36340: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CAPPED_COUNTS_VISIT_CAP: () => am,
      reportCappedWasmFailure: () => Dm,
      reportUncappedWasmFailure: () => wm,
      reportWasmCrash: () => Am,
      reportWasmFailure: () => xm
    });
    var hm = fm(2932);

    function Am(mm) {
      (0, hm.reportClientError)("wasm_load", mm.message, mm.code)
    }
    const am = hm.d - 4;

    function xm(mm, Tm, fm) {
      (0, hm.reportClientError)(mm, Tm, fm, !1)
    }

    function wm(mm, Tm, fm) {
      (0, hm.reportClientError)(mm, Tm, fm, !1, 1 / 0)
    }

    function Dm(mm, Tm, fm) {
      (0, hm.reportClientError)(mm, Tm, fm, !1, am)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);