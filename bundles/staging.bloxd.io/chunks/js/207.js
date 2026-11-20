export const id = 207;
export const ids = [207];
export const modules = {
  35841: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      reportCappedWasmFailure: () => pv,
      reportUncappedWasmFailure: () => gv,
      reportWasmFailure: () => ev
    });
    var hv = Pv(2715);
    const Sv = hv.c - 4;

    function ev(vv, zv, Pv) {
      (0, hv.e)(vv, zv, Pv, !1)
    }

    function gv(vv, zv, Pv) {
      (0, hv.e)(vv, zv, Pv, !1, 1 / 0)
    }

    function pv(vv, zv, Pv) {
      (0, hv.e)(vv, zv, Pv, !1, Sv)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);