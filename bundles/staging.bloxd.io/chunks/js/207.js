export const id = 207;
export const ids = [207];
export const modules = {
  35732: (bb, ab, Ub) => {
    Ub.d(ab, {
      reportCappedWasmFailure: () => Eb,
      reportWasmFailure: () => Tb
    });
    var Ab = Ub(2653);
    const Mb = Ab.c - 4;

    function Tb(bb, ab, Ub) {
      (0, Ab.e)(bb, ab, Ub, !1)
    }

    function Eb(bb, ab, Ub) {
      (0, Ab.e)(bb, ab, Ub, !1, Mb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);