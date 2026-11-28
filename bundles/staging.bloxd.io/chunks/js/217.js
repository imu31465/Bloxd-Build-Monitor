export const id = 217;
export const ids = [217, 218];
export const modules = {
  35159: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      reportJsMainStall: () => gb,
      resetJsMainStallReport: () => lb
    });
    var eb = Mb(35167),
      Hb = Mb(1987),
      pb = Mb(35175);
    let Vb = !1;

    function gb(bb, wb, Mb, gb) {
      Vb || (Vb = !0, (0, Hb.reportClientError)("wasm_load", (0, pb.d)(bb, wb, Mb, gb, (0, pb.g)()), "JS-mainStall", !0, eb.CAPPED_COUNTS_VISIT_CAP))
    }

    function lb() {
      Vb = !1
    }
  },
  35175: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      g: () => Vb
    });
    var eb = Mb(309),
      Hb = Mb(153),
      pb = Mb(35179);

    function Vb() {
      var bb, wb, Mb;
      return null !== (bb = (0, eb.o)(null !== (wb = null === (Mb = (0, Hb.n)()) || void 0 === Mb ? void 0 : Mb.renderer) && void 0 !== wb ? wb : null, (0, Hb.k)())) && void 0 !== bb ? bb : "unknown"
    }

    function gb(bb, wb, Mb, eb, Hb) {
      const Vb = null === wb ? "untimed" : `${Math.round(wb)} ms`;
      return `frames stalled, ${Mb}, gpu ${(0,pb.b)(Hb)}, blocking ${Vb}, drawn ${Math.round(bb)} ms apart, timers ${eb.timers}, timer gap ${Math.round(eb.longestGapMs)} ms`
    }
  },
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
  },
  35179: (bb, wb, Mb) => {
    function eb(bb) {
      return String(bb).replace(/\d/g, (bb => String.fromCharCode(97 + Number(bb))))
    }
    Mb.d(wb, {
      b: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);