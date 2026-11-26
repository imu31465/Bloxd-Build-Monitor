export const id = 208;
export const ids = [208];
export const modules = {
  34708: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CAPPED_COUNTS_VISIT_CAP: () => QU,
      reportCappedWasmFailure: () => oU,
      reportUncappedWasmFailure: () => FU,
      reportWasmCrash: () => yU,
      reportWasmFailure: () => AU
    });
    var cU = zU(1835);

    function yU(UU) {
      (0, cU.reportClientError)("wasm_load", UU.message, UU.code)
    }
    const QU = cU.MAX_ERRORS_PER_VISIT - 4;

    function AU(UU, XU, zU, yU) {
      (0, cU.reportClientError)(UU, XU, zU, !1, cU.MAX_ERRORS_PER_VISIT, {
        context: yU
      })
    }

    function FU(UU, XU, zU, yU) {
      (0, cU.reportClientError)(UU, XU, zU, !1, 1 / 0, {
        context: yU
      })
    }

    function oU(UU, XU, zU, yU) {
      (0, cU.reportClientError)(UU, XU, zU, !1, QU, {
        context: yU
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);