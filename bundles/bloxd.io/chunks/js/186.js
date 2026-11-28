export const id = 186;
export const ids = [186];
export const modules = {
  10106: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      f: () => Xd
    });
    var Wd = md(210);
    class Fd {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(dd) || this.marks.set(dd, Od)
      }
      marked() {
        return Wd.V.flatMap((dd => {
          var Od;
          const md = null !== (Od = this.marks.get(dd)) && void 0 !== Od ? Od : Rd.marks.get(dd);
          return void 0 === md ? [] : [
            [dd, md]
          ]
        }))
      }
    }
    const Rd = new Fd;

    function Xd(dd) {
      Rd.mark(dd)
    }
  },
  10097: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      importClientLoad: () => td,
      loadWasmPlay: () => qd,
      loadWasmPlayAhead: () => Hd,
      loadWasmPreviews: () => yd
    });
    var Wd = md(4365),
      Fd = md(3206),
      Rd = md(2319),
      Xd = md(5318),
      Kd = md(4734),
      hd = md(5336),
      vd = md(10106);
    let Qd = null;

    function td() {
      return Promise.all([md.e(91), md.e(105), md.e(241), md.e(158), md.e(245), md.e(161), md.e(256), md.e(71)]).then((() => md(42638)))
    }

    function od() {
      return Promise.all([md.e(88), md.e(91), md.e(105), md.e(241), md.e(158), md.e(245), md.e(223), md.e(161), md.e(251), md.e(243), md.e(103), md.e(247), md.e(256), md.e(76)]).then((() => md(42818)))
    }

    function Nd() {
      Promise.all([md.e(85), md.e(89), md.e(86), md.e(87), md.e(88), md.e(105), md.e(102), md.e(307), md.e(127), md.e(281), md.e(255), md.e(247), md.e(55)]).then((() => md(42968))).catch((() => {}))
    }

    function qd() {
      return Xd.b.cancelDownloadForJoin(), (0, Kd.c)(), (0, Fd.f)(), (0, hd.e)(), (0, Rd.g)(), Nd(), td().then((dd => {
        let {
          startJoinLoad: Od
        } = dd;
        Od()
      }), (() => {})), Qd ??= od().then((dd => ((0, vd.f)("phase_chunk"), dd.startWasmPlay(), (0, vd.f)("phase_start"), dd.followPageUiPack((dd => {
        Wd.c.showGamePack(dd)
      })), dd)), (dd => {
        throw Qd = null, dd
      })), Qd
    }

    function Hd() {
      return Nd(), md.e(132).then((() => md(42999))).catch((() => {})), od().then((() => {
        (0, vd.f)("phase_chunk")
      }))
    }

    function yd() {
      return od().then((dd => {
        dd.startWasmPreviews(), dd.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);