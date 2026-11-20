export const id = 208;
export const ids = [208];
export const modules = {
  36339: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      reportCappedWasmFailure: () => xq,
      reportUncappedWasmFailure: () => mq,
      reportWasmFailure: () => Oq
    });
    var Yq = gq(2853);
    const lq = Yq.b - 4;

    function Oq(qq, Eq, gq) {
      (0, Yq.d)(qq, Eq, gq, !1)
    }

    function mq(qq, Eq, gq) {
      (0, Yq.d)(qq, Eq, gq, !1, 1 / 0)
    }

    function xq(qq, Eq, gq) {
      (0, Yq.d)(qq, Eq, gq, !1, lq)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);