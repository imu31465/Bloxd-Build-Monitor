export const id = 186;
export const ids = [186];
export const modules = {
  10292: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      e: () => Vb
    });
    var eb = Mb(214);
    class Hb {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(bb) || this.marks.set(bb, wb)
      }
      marked() {
        return eb.R.flatMap((bb => {
          var wb;
          const Mb = null !== (wb = this.marks.get(bb)) && void 0 !== wb ? wb : pb.marks.get(bb);
          return void 0 === Mb ? [] : [
            [bb, Mb]
          ]
        }))
      }
    }
    const pb = new Hb;

    function Vb(bb) {
      pb.mark(bb)
    }
  },
  10286: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      importClientLoad: () => Ob,
      loadWasmPlay: () => Cb,
      loadWasmPlayAhead: () => Eb,
      loadWasmPreviews: () => Fb
    });
    var eb = Mb(4522),
      Hb = Mb(3287),
      pb = Mb(2364),
      Vb = Mb(5498),
      gb = Mb(4896),
      lb = Mb(5511),
      Lb = Mb(10292);
    let Ib = null;

    function Ob() {
      return Promise.all([Mb.e(91), Mb.e(105), Mb.e(241), Mb.e(158), Mb.e(245), Mb.e(161), Mb.e(256), Mb.e(71)]).then((() => Mb(42346)))
    }

    function Ub() {
      return Promise.all([Mb.e(88), Mb.e(91), Mb.e(105), Mb.e(241), Mb.e(158), Mb.e(245), Mb.e(223), Mb.e(161), Mb.e(251), Mb.e(243), Mb.e(103), Mb.e(247), Mb.e(256), Mb.e(76)]).then((() => Mb(42531)))
    }

    function tb() {
      Promise.all([Mb.e(85), Mb.e(89), Mb.e(86), Mb.e(87), Mb.e(88), Mb.e(105), Mb.e(102), Mb.e(307), Mb.e(127), Mb.e(281), Mb.e(255), Mb.e(247), Mb.e(55)]).then((() => Mb(42677))).catch((() => {}))
    }

    function Cb() {
      return Vb.b.cancelDownloadForJoin(), (0, gb.e)(), (0, Hb.f)(), (0, lb.f)(), (0, pb.j)(), tb(), Ob().then((bb => {
        let {
          startJoinLoad: wb
        } = bb;
        wb()
      }), (() => {})), Ib ??= Ub().then((bb => ((0, Lb.e)("phase_chunk"), bb.startWasmPlay(), (0, Lb.e)("phase_start"), bb.followPageUiPack((bb => {
        eb.d.showGamePack(bb)
      })), bb)), (bb => {
        throw Ib = null, bb
      })), Ib
    }

    function Eb() {
      return tb(), Mb.e(132).then((() => Mb(42721))).catch((() => {})), Ub().then((() => {
        (0, Lb.e)("phase_chunk")
      }))
    }

    function Fb() {
      return Ub().then((bb => {
        bb.startWasmPreviews(), bb.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);