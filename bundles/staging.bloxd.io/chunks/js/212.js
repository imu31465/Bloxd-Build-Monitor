export const id = 212;
export const ids = [212];
export const modules = {
  34626: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CAPPED_COUNTS_VISIT_CAP: () => QB,
      reportCappedWasmFailure: () => yB,
      reportUncappedWasmFailure: () => jB,
      reportWasmCrash: () => DB,
      reportWasmFailure: () => oB
    });
    var YB = GB(1856);

    function DB(BB) {
      (0, YB.reportClientError)("wasm_load", BB.message, BB.code)
    }
    const QB = YB.MAX_ERRORS_PER_VISIT - 4;

    function oB(BB, OB, GB, DB) {
      (0, YB.reportClientError)(BB, OB, GB, !1, YB.MAX_ERRORS_PER_VISIT, {
        context: DB
      })
    }

    function jB(BB, OB, GB, DB) {
      (0, YB.reportClientError)(BB, OB, GB, !1, 1 / 0, {
        context: DB
      })
    }

    function yB(BB, OB, GB, DB) {
      (0, YB.reportClientError)(BB, OB, GB, !1, QB, {
        context: DB
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);