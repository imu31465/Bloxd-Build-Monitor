export const id = 208;
export const ids = [208];
export const modules = {
  35924: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      reportCappedWasmFailure: () => kQ,
      reportUncappedWasmFailure: () => DQ,
      reportWasmFailure: () => oQ
    });
    var LQ = wQ(2860);
    const qQ = LQ.b - 4;

    function oQ(QQ, FQ, wQ) {
      (0, LQ.f)(QQ, FQ, wQ, !1)
    }

    function DQ(QQ, FQ, wQ) {
      (0, LQ.f)(QQ, FQ, wQ, !1, 1 / 0)
    }

    function kQ(QQ, FQ, wQ) {
      (0, LQ.f)(QQ, FQ, wQ, !1, qQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);