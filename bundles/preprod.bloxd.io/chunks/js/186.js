export const id = 186;
export const ids = [186];
export const modules = {
  10198: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      f: () => PW
    });
    var mW = OW(172);
    class EW {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(WW) || this.marks.set(WW, iW)
      }
      marked() {
        return mW.U.flatMap((WW => {
          var iW;
          const OW = null !== (iW = this.marks.get(WW)) && void 0 !== iW ? iW : NW.marks.get(WW);
          return void 0 === OW ? [] : [
            [WW, OW]
          ]
        }))
      }
    }
    const NW = new EW;

    function PW(WW) {
      NW.mark(WW)
    }
  },
  10189: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      importClientLoad: () => ZW,
      loadWasmPlay: () => AW,
      loadWasmPlayAhead: () => bW,
      loadWasmPreviews: () => jW
    });
    var mW = OW(4337),
      EW = OW(3153),
      NW = OW(2283),
      PW = OW(5348),
      LW = OW(4746),
      cW = OW(5368),
      wW = OW(10198);
    let tW = null;

    function ZW() {
      return Promise.all([OW.e(91), OW.e(105), OW.e(240), OW.e(158), OW.e(244), OW.e(161), OW.e(255), OW.e(71)]).then((() => OW(42198)))
    }

    function xW() {
      return Promise.all([OW.e(88), OW.e(91), OW.e(105), OW.e(240), OW.e(158), OW.e(244), OW.e(222), OW.e(161), OW.e(250), OW.e(242), OW.e(103), OW.e(246), OW.e(255), OW.e(76)]).then((() => OW(42371)))
    }

    function lW() {
      Promise.all([OW.e(85), OW.e(89), OW.e(86), OW.e(87), OW.e(88), OW.e(105), OW.e(102), OW.e(306), OW.e(127), OW.e(280), OW.e(254), OW.e(246), OW.e(55)]).then((() => OW(42495))).catch((() => {}))
    }

    function AW() {
      return PW.b.cancelDownloadForJoin(), (0, LW.c)(), (0, EW.c)(), (0, cW.g)(), (0, NW.h)(), lW(), ZW().then((WW => {
        let {
          startJoinLoad: iW
        } = WW;
        iW()
      }), (() => {})), tW ??= xW().then((WW => ((0, wW.f)("phase_chunk"), WW.startWasmPlay(), (0, wW.f)("phase_start"), WW.followPageUiPack((WW => {
        mW.d.showGamePack(WW)
      })), WW)), (WW => {
        throw tW = null, WW
      })), tW
    }

    function bW() {
      return lW(), OW.e(132).then((() => OW(42537))).catch((() => {})), xW().then((() => {
        (0, wW.f)("phase_chunk")
      }))
    }

    function jW() {
      return xW().then((WW => {
        WW.startWasmPreviews(), WW.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);