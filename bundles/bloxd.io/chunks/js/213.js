export const id = 213;
export const ids = [213];
export const modules = {
  38710: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => Ub
    });
    var Bb = hb(16);
    let Ob = !1;

    function Gb() {
      return Ob
    }

    function Ub(bb) {
      Ob !== bb && (Ob = bb, Bb.i.vp("replayViewer|videoExportChanged"))
    }
  },
  36083: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      d: () => ab,
      h: () => Zb,
      k: () => Hb
    });
    var Bb = hb(314),
      Ob = hb(609),
      Gb = hb(620),
      Ub = hb(29);
    const Lb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Yb = "playSessionGameNameWithVariation",
      Sb = "wasMatchmakePlayer";

    function ab() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m;
      (0, Gb.i)(bb, Lb)
    }

    function Hb() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m).setItem(Sb, !0)
    }

    function wb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m;
      return (0, Gb.e)(bb, Lb)
    }

    function Zb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ub.m;
      const hb = (0, Gb.e)(ub, Lb),
        ab = function(bb) {
          const ub = bb.getItem(Yb);
          return "string" !== typeof ub ? null : ub
        }(ub),
        Hb = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m).getItem(Sb)
        }(ub);
      let wb;
      return wb = null !== hb && null !== ab && (0, Gb.g)(ub, Lb) && function(bb, ub, hb) {
          const Ob = (0, Bb.Xb)(bb),
            Gb = (0, Bb.Xb)(ub),
            Ub = (0, Bb.Tb)(bb),
            Lb = (0, Bb.Tb)(ub);
          return !(Ob !== Gb || !hb) || Ob === Gb && Ub === Lb
        }(ab, bb, Hb) ? hb : (0, Ob.e)(), (0, Gb.k)(ub, Lb, wb), ub.setItem(Yb, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m).removeItem(Sb)
        }(ub), wb
    }
  },
  40167: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      i: () => Gb,
      j: () => Lb
    });
    let Bb = null,
      Ob = null;

    function Gb(bb, ub) {
      return Bb = bb, Ob = null, Lb(ub), () => {
        Bb === bb && (Bb = null, Ob = null)
      }
    }

    function Ub() {
      return null === Ob ? null : {
        ...Ob
      }
    }

    function Lb(bb) {
      var ub;
      null !== (ub = Bb) && void 0 !== ub && ub(bb) && (Ob = {
        ...bb
      })
    }
  },
  40157: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      d: () => Gb
    });
    let Bb = null;

    function Ob(bb, ub) {
      Bb = {
        conn: bb,
        reason: ub
      }
    }

    function Gb(bb) {
      var ub;
      const hb = (null === (ub = Bb) || void 0 === ub ? void 0 : ub.conn) === bb ? Bb.reason : null;
      return Bb = null, hb
    }
  },
  40136: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      f: () => Ob
    });
    let Bb = {
      fire: () => {},
      close: () => {}
    };

    function Ob(bb) {
      Bb = bb
    }

    function Gb() {
      return Bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);