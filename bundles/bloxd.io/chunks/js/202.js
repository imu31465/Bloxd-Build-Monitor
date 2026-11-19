export const id = 202;
export const ids = [202];
export const modules = {
  35316: (TT, oT, IT) => {
    IT.d(oT, {
      reportCappedWasmFailure: () => WT,
      reportWasmFailure: () => kT
    });
    var iT = IT(2788);
    const zT = iT.e - 4;

    function kT(TT, oT, IT) {
      (0, iT.i)(TT, oT, IT, !1)
    }

    function WT(TT, oT, IT) {
      (0, iT.i)(TT, oT, IT, !1, zT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);