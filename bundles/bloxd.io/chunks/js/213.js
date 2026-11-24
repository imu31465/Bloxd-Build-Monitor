export const id = 213;
export const ids = [213];
export const modules = {
  36341: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CAPPED_COUNTS_VISIT_CAP: () => MT,
      reportCappedWasmFailure: () => HT,
      reportUncappedWasmFailure: () => nT,
      reportWasmCrash: () => zT,
      reportWasmFailure: () => gT
    });
    var WT = mT(3068);

    function zT(TT) {
      (0, WT.reportClientError)("wasm_load", TT.message, TT.code)
    }
    const MT = WT.e - 4;

    function gT(TT, UT, mT) {
      (0, WT.reportClientError)(TT, UT, mT, !1)
    }

    function nT(TT, UT, mT) {
      (0, WT.reportClientError)(TT, UT, mT, !1, 1 / 0)
    }

    function HT(TT, UT, mT) {
      (0, WT.reportClientError)(TT, UT, mT, !1, MT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);