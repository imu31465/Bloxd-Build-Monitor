export const id = 218;
export const ids = [218];
export const modules = {
  35167: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      CAPPED_COUNTS_VISIT_CAP: () => pb,
      reportCappedWasmFailure: () => lb,
      reportUncappedWasmFailure: () => gb,
      reportWasmCrash: () => Hb,
      reportWasmFailure: () => Vb
    });
    var eb = Mb(1987);

    function Hb(bb) {
      (0, eb.reportClientError)("wasm_load", bb.message, bb.code)
    }
    const pb = eb.MAX_ERRORS_PER_VISIT - 4;

    function Vb(bb, wb, Mb, Hb) {
      (0, eb.reportClientError)(bb, wb, Mb, !1, eb.MAX_ERRORS_PER_VISIT, {
        context: Hb
      })
    }

    function gb(bb, wb, Mb, Hb) {
      (0, eb.reportClientError)(bb, wb, Mb, !1, 1 / 0, {
        context: Hb
      })
    }

    function lb(bb, wb, Mb, Hb) {
      (0, eb.reportClientError)(bb, wb, Mb, !1, pb, {
        context: Hb
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);