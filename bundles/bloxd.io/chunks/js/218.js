export const id = 218;
export const ids = [218];
export const modules = {
  35287: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CAPPED_COUNTS_VISIT_CAP: () => ar,
      reportCappedWasmFailure: () => fr,
      reportUncappedWasmFailure: () => Ir,
      reportWasmCrash: () => Wr,
      reportWasmFailure: () => jr
    });
    var Zr = Qr(1912);

    function Wr(rr) {
      (0, Zr.reportClientError)("wasm_load", rr.message, rr.code)
    }
    const ar = Zr.MAX_ERRORS_PER_VISIT - 4;

    function jr(rr, Sr, Qr, Wr) {
      (0, Zr.reportClientError)(rr, Sr, Qr, !1, Zr.MAX_ERRORS_PER_VISIT, {
        context: Wr
      })
    }

    function Ir(rr, Sr, Qr, Wr) {
      (0, Zr.reportClientError)(rr, Sr, Qr, !1, 1 / 0, {
        context: Wr
      })
    }

    function fr(rr, Sr, Qr, Wr) {
      (0, Zr.reportClientError)(rr, Sr, Qr, !1, ar, {
        context: Wr
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);