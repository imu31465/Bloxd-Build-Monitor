export const id = 213;
export const ids = [213];
export const modules = {
  36668: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      CAPPED_COUNTS_VISIT_CAP: () => Zu,
      reportCappedWasmFailure: () => qu,
      reportUncappedWasmFailure: () => lu,
      reportWasmCrash: () => Uu,
      reportWasmFailure: () => Xu
    });
    var su = ju(3099);

    function Uu(uu) {
      (0, su.reportClientError)("wasm_load", uu.message, uu.code)
    }
    const Zu = su.MAX_ERRORS_PER_VISIT - 4;

    function Xu(uu, Eu, ju) {
      (0, su.reportClientError)(uu, Eu, ju, !1)
    }

    function lu(uu, Eu, ju) {
      (0, su.reportClientError)(uu, Eu, ju, !1, 1 / 0)
    }

    function qu(uu, Eu, ju) {
      (0, su.reportClientError)(uu, Eu, ju, !1, Zu)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);