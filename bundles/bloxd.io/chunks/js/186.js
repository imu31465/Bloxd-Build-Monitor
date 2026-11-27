export const id = 186;
export const ids = [186];
export const modules = {
  10070: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      c: () => jr
    });
    var Zr = Qr(194);
    class Wr {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(rr) || this.marks.set(rr, Sr)
      }
      marked() {
        return Zr.Z.flatMap((rr => {
          var Sr;
          const Qr = null !== (Sr = this.marks.get(rr)) && void 0 !== Sr ? Sr : ar.marks.get(rr);
          return void 0 === Qr ? [] : [
            [rr, Qr]
          ]
        }))
      }
    }
    const ar = new Wr;

    function jr(rr) {
      ar.mark(rr)
    }
  },
  10068: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      importClientLoad: () => xr,
      loadWasmPlay: () => Ur,
      loadWasmPlayAhead: () => tr,
      loadWasmPreviews: () => hr
    });
    var Zr = Qr(4354),
      Wr = Qr(3216),
      ar = Qr(2304),
      jr = Qr(5411),
      Ir = Qr(4759),
      fr = Qr(5428),
      Er = Qr(10070);
    let pr = null;

    function xr() {
      return Promise.all([Qr.e(91), Qr.e(105), Qr.e(241), Qr.e(158), Qr.e(245), Qr.e(161), Qr.e(256), Qr.e(71)]).then((() => Qr(42541)))
    }

    function mr() {
      return Promise.all([Qr.e(88), Qr.e(91), Qr.e(105), Qr.e(241), Qr.e(158), Qr.e(245), Qr.e(223), Qr.e(161), Qr.e(251), Qr.e(243), Qr.e(103), Qr.e(247), Qr.e(256), Qr.e(76)]).then((() => Qr(42720)))
    }

    function Nr() {
      Promise.all([Qr.e(85), Qr.e(89), Qr.e(86), Qr.e(87), Qr.e(88), Qr.e(105), Qr.e(102), Qr.e(307), Qr.e(127), Qr.e(281), Qr.e(255), Qr.e(247), Qr.e(55)]).then((() => Qr(42871))).catch((() => {}))
    }

    function Ur() {
      return jr.e.cancelDownloadForJoin(), (0, Ir.d)(), (0, Wr.g)(), (0, fr.e)(), (0, ar.j)(), Nr(), xr().then((rr => {
        let {
          startJoinLoad: Sr
        } = rr;
        Sr()
      }), (() => {})), pr ??= mr().then((rr => ((0, Er.c)("phase_chunk"), rr.startWasmPlay(), (0, Er.c)("phase_start"), rr.followPageUiPack((rr => {
        Zr.d.showGamePack(rr)
      })), rr)), (rr => {
        throw pr = null, rr
      })), pr
    }

    function tr() {
      return Nr(), Qr.e(132).then((() => Qr(42906))).catch((() => {})), mr().then((() => {
        (0, Er.c)("phase_chunk")
      }))
    }

    function hr() {
      return mr().then((rr => {
        rr.startWasmPreviews(), rr.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);