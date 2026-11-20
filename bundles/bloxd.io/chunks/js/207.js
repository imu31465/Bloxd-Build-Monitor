export const id = 207;
export const ids = [207];
export const modules = {
  36069: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT,
      reportCappedWasmFailure: () => yT,
      reportUncappedWasmFailure: () => OT,
      reportWasmFailure: () => KT
    });
    var lT = cT(2891);
    const MT = lT.d - 4;

    function KT(TT, kT, cT) {
      (0, lT.e)(TT, kT, cT, !1)
    }

    function OT(TT, kT, cT) {
      (0, lT.e)(TT, kT, cT, !1, 1 / 0)
    }

    function yT(TT, kT, cT) {
      (0, lT.e)(TT, kT, cT, !1, MT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);