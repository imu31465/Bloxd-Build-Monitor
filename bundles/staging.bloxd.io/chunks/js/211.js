export const id = 211;
export const ids = [211, 212];
export const modules = {
  34624: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      reportJsMainStall: () => jB,
      resetJsMainStallReport: () => yB
    });
    var YB = GB(34626),
      DB = GB(1856),
      QB = GB(34631);
    let oB = !1;

    function jB(BB, OB, GB, jB) {
      oB || (oB = !0, (0, DB.reportClientError)("wasm_load", (0, QB.b)(BB, OB, GB, jB, (0, QB.d)()), "JS-mainStall", !0, YB.CAPPED_COUNTS_VISIT_CAP))
    }

    function yB() {
      oB = !1
    }
  },
  34631: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      d: () => oB
    });
    var YB = GB(258),
      DB = GB(118),
      QB = GB(34637);

    function oB() {
      var BB, OB, GB;
      return null !== (BB = (0, YB.j)(null !== (OB = null === (GB = (0, DB.o)()) || void 0 === GB ? void 0 : GB.renderer) && void 0 !== OB ? OB : null, (0, DB.m)())) && void 0 !== BB ? BB : "unknown"
    }

    function jB(BB, OB, GB, YB, DB) {
      const oB = null === OB ? "untimed" : `${Math.round(OB)} ms`;
      return `frames stalled, ${GB}, gpu ${(0,QB.c)(DB)}, blocking ${oB}, drawn ${Math.round(BB)} ms apart, timers ${YB.timers}, timer gap ${Math.round(YB.longestGapMs)} ms`
    }
  },
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
  },
  34637: (BB, OB, GB) => {
    function YB(BB) {
      return String(BB).replace(/\d/g, (BB => String.fromCharCode(97 + Number(BB))))
    }
    GB.d(OB, {
      c: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);