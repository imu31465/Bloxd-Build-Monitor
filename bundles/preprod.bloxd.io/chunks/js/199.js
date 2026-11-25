export const id = 199;
export const ids = [199];
export const modules = {
  34339: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CAPPED_COUNTS_VISIT_CAP: () => TQ,
      reportCappedWasmFailure: () => FQ,
      reportUncappedWasmFailure: () => sQ,
      reportWasmCrash: () => qQ,
      reportWasmFailure: () => zQ
    });
    var wQ = XQ(3176);

    function qQ(QQ) {
      (0, wQ.reportClientError)("wasm_load", QQ.message, QQ.code)
    }
    const TQ = wQ.MAX_ERRORS_PER_VISIT - 4;

    function zQ(QQ, WQ, XQ, qQ) {
      (0, wQ.reportClientError)(QQ, WQ, XQ, !1, wQ.MAX_ERRORS_PER_VISIT, {
        context: qQ
      })
    }

    function sQ(QQ, WQ, XQ, qQ) {
      (0, wQ.reportClientError)(QQ, WQ, XQ, !1, 1 / 0, {
        context: qQ
      })
    }

    function FQ(QQ, WQ, XQ, qQ) {
      (0, wQ.reportClientError)(QQ, WQ, XQ, !1, TQ, {
        context: qQ
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);