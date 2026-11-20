export const id = 207;
export const ids = [207];
export const modules = {
  35883: (UU, RU, gU) => {
    gU.d(RU, {
      reportCappedWasmFailure: () => PU,
      reportWasmFailure: () => EU
    });
    var tU = gU(2927);
    const pU = tU.c - 4;

    function EU(UU, RU, gU) {
      (0, tU.e)(UU, RU, gU, !1)
    }

    function PU(UU, RU, gU) {
      (0, tU.e)(UU, RU, gU, !1, pU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);