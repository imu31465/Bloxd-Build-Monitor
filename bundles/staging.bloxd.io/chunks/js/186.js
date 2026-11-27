export const id = 186;
export const ids = [186];
export const modules = {
  10311: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      f: () => ZR
    });
    var yR = GR(188);
    class tR {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(RR) || this.marks.set(RR, JR)
      }
      marked() {
        return yR.T.flatMap((RR => {
          var JR;
          const GR = null !== (JR = this.marks.get(RR)) && void 0 !== JR ? JR : uR.marks.get(RR);
          return void 0 === GR ? [] : [
            [RR, GR]
          ]
        }))
      }
    }
    const uR = new tR;

    function ZR(RR) {
      uR.mark(RR)
    }
  },
  10303: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      importClientLoad: () => KR,
      loadWasmPlay: () => eR,
      loadWasmPlayAhead: () => aR,
      loadWasmPreviews: () => LR
    });
    var yR = GR(4422),
      tR = GR(3243),
      uR = GR(2363),
      ZR = GR(5452),
      qR = GR(4850),
      iR = GR(5467),
      fR = GR(10311);
    let VR = null;

    function KR() {
      return Promise.all([GR.e(91), GR.e(105), GR.e(240), GR.e(158), GR.e(244), GR.e(161), GR.e(255), GR.e(71)]).then((() => GR(42208)))
    }

    function wR() {
      return Promise.all([GR.e(88), GR.e(91), GR.e(105), GR.e(240), GR.e(158), GR.e(244), GR.e(222), GR.e(161), GR.e(250), GR.e(242), GR.e(103), GR.e(246), GR.e(255), GR.e(76)]).then((() => GR(42387)))
    }

    function rR() {
      Promise.all([GR.e(85), GR.e(89), GR.e(86), GR.e(87), GR.e(88), GR.e(105), GR.e(102), GR.e(306), GR.e(127), GR.e(280), GR.e(254), GR.e(246), GR.e(55)]).then((() => GR(42538))).catch((() => {}))
    }

    function eR() {
      return ZR.e.cancelDownloadForJoin(), (0, qR.e)(), (0, tR.d)(), (0, iR.h)(), (0, uR.i)(), rR(), KR().then((RR => {
        let {
          startJoinLoad: JR
        } = RR;
        JR()
      }), (() => {})), VR ??= wR().then((RR => ((0, fR.f)("phase_chunk"), RR.startWasmPlay(), (0, fR.f)("phase_start"), RR.followPageUiPack((RR => {
        yR.b.showGamePack(RR)
      })), RR)), (RR => {
        throw VR = null, RR
      })), VR
    }

    function aR() {
      return rR(), GR.e(132).then((() => GR(42579))).catch((() => {})), wR().then((() => {
        (0, fR.f)("phase_chunk")
      }))
    }

    function LR() {
      return wR().then((RR => {
        RR.startWasmPreviews(), RR.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);