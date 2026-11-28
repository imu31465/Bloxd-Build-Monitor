export const id = 247;
export const ids = [247];
export const modules = {
  40397: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      f: () => Vb
    });
    var eb = Mb(29);
    let Hb = !1;

    function pb() {
      return Hb
    }

    function Vb(bb) {
      Hb !== bb && (Hb = bb, eb.k.iI("replayViewer|videoExportChanged"))
    }
  },
  37751: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ub,
      e: () => Ib,
      f: () => tb,
      g: () => Ob
    });
    var eb = Mb(382),
      Hb = Mb(707),
      pb = Mb(720),
      Vb = Mb(43);
    const gb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      lb = "playSessionGameNameWithVariation",
      Lb = "wasMatchmakePlayer";

    function Ib() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j;
      (0, pb.h)(bb, gb)
    }

    function Ob() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j).setItem(Lb, !0)
    }

    function Ub() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j;
      return (0, pb.e)(bb, gb)
    }

    function tb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vb.j;
      const Mb = (0, pb.e)(wb, gb),
        Ib = function(bb) {
          const wb = bb.getItem(lb);
          return "string" !== typeof wb ? null : wb
        }(wb),
        Ob = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j).getItem(Lb)
        }(wb);
      let Ub;
      return Ub = null !== Mb && null !== Ib && (0, pb.g)(wb, gb) && function(bb, wb, Mb) {
          const Hb = (0, eb.Zb)(bb),
            pb = (0, eb.Zb)(wb),
            Vb = (0, eb.Sb)(bb),
            gb = (0, eb.Sb)(wb);
          return !(Hb !== pb || !Mb) || Hb === pb && Vb === gb
        }(Ib, bb, Ob) ? Mb : (0, Hb.d)(), (0, pb.j)(wb, gb, Ub), wb.setItem(lb, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.j).removeItem(Lb)
        }(wb), Ub
    }
  },
  42606: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      e: () => Vb,
      g: () => lb,
      j: () => pb,
      n: () => gb,
      q: () => Lb
    });
    let eb = null,
      Hb = null;

    function pb(bb, wb) {
      return eb = bb, Hb = null, gb(wb), () => {
        eb === bb && (eb = null, Hb = null)
      }
    }

    function Vb() {
      return null === Hb ? null : {
        ...Hb
      }
    }

    function gb(bb) {
      var wb;
      null !== (wb = eb) && void 0 !== wb && wb(bb) && (Hb = {
        ...bb
      })
    }

    function lb() {
      return "undefined" === typeof location ? null : function(bb) {
        const wb = new URLSearchParams(bb).get("renderDistanceMax");
        if (null === wb || !/^\d{1,2}$/.test(wb)) return null;
        const Mb = Number(wb);
        return Mb >= 1 && Mb <= 64 ? Mb : null
      }(location.search)
    }

    function Lb(bb, wb) {
      return null === wb ? bb : {
        horizontal: Math.min(bb.horizontal, wb),
        vertical: bb.vertical
      }
    }

    function Ib(bb, wb) {
      return null === wb ? bb : Lb(null !== bb && void 0 !== bb ? bb : {
        horizontal: 1 / 0,
        vertical: 1 / 0
      }, wb)
    }
  },
  42616: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => pb
    });
    let eb = null;

    function Hb(bb, wb) {
      eb = {
        conn: bb,
        reason: wb
      }
    }

    function pb(bb) {
      var wb;
      const Mb = (null === (wb = eb) || void 0 === wb ? void 0 : wb.conn) === bb ? eb.reason : null;
      return eb = null, Mb
    }
  },
  37530: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ib,
      f: () => lb,
      h: () => gb,
      l: () => Lb
    });
    var eb = Mb(2150);
    let Hb = null,
      pb = 0;
    const Vb = new Set;

    function gb() {
      return Hb
    }

    function lb() {
      return pb
    }

    function Lb(bb) {
      Hb = bb, pb++, (0, eb.d)();
      for (const wb of Vb) wb()
    }

    function Ib(bb) {
      Vb.add(bb)
    }
  },
  42662: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      d: () => Hb
    });
    let eb = {
      fire: () => {},
      close: () => {}
    };

    function Hb(bb) {
      eb = bb
    }

    function pb() {
      return eb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);