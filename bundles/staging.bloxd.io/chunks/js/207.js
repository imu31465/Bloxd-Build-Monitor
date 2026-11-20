export const id = 207;
export const ids = [207];
export const modules = {
  35937: (bb, cb, sb) => {
    sb.d(cb, {
      reportCappedWasmFailure: () => Tb,
      reportWasmFailure: () => ab
    });
    var kb = sb(2984);
    const Wb = kb.c - 4;

    function ab(bb, cb, sb) {
      (0, kb.d)(bb, cb, sb, !1)
    }

    function Tb(bb, cb, sb) {
      (0, kb.d)(bb, cb, sb, !1, Wb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);