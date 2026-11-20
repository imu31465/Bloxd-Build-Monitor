export const id = 208;
export const ids = [208];
export const modules = {
  35906: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      reportCappedWasmFailure: () => Lb,
      reportUncappedWasmFailure: () => Ub,
      reportWasmFailure: () => Gb
    });
    var Bb = hb(2736);
    const Ob = Bb.e - 4;

    function Gb(bb, ub, hb) {
      (0, Bb.i)(bb, ub, hb, !1)
    }

    function Ub(bb, ub, hb) {
      (0, Bb.i)(bb, ub, hb, !1, 1 / 0)
    }

    function Lb(bb, ub, hb) {
      (0, Bb.i)(bb, ub, hb, !1, Ob)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);