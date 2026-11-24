export const id = 209;
export const ids = [209];
export const modules = {
  36275: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      CAPPED_COUNTS_VISIT_CAP: () => XS,
      reportCappedWasmFailure: () => qS,
      reportUncappedWasmFailure: () => NS,
      reportWasmCrash: () => bS,
      reportWasmFailure: () => xS
    });
    var tS = gS(3083);

    function bS(SS) {
      (0, tS.reportClientError)("wasm_load", SS.message, SS.code)
    }
    const XS = tS.b - 4;

    function xS(SS, HS, gS) {
      (0, tS.reportClientError)(SS, HS, gS, !1)
    }

    function NS(SS, HS, gS) {
      (0, tS.reportClientError)(SS, HS, gS, !1, 1 / 0)
    }

    function qS(SS, HS, gS) {
      (0, tS.reportClientError)(SS, HS, gS, !1, XS)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);