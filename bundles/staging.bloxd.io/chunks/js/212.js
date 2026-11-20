export const id = 212;
export const ids = [212];
export const modules = {
  38648: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab,
      d: () => Tb
    });
    var kb = sb(26);
    let Wb = !1;

    function ab() {
      return Wb
    }

    function Tb(bb) {
      Wb !== bb && (Wb = bb, kb.j.QQ("replayViewer|videoExportChanged"))
    }
  },
  36120: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Xb,
      i: () => fb,
      m: () => nb,
      n: () => Mb
    });
    var kb = sb(344),
      Wb = sb(664),
      ab = sb(670),
      Tb = sb(37);
    const Ub = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Ib = "playSessionGameNameWithVariation",
      Hb = "wasMatchmakePlayer";

    function fb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i;
      (0, ab.j)(bb, Ub)
    }

    function Mb() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i).setItem(Hb, !0)
    }

    function Xb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i;
      return (0, ab.d)(bb, Ub)
    }

    function nb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tb.i;
      const sb = (0, ab.d)(cb, Ub),
        fb = function(bb) {
          const cb = bb.getItem(Ib);
          return "string" !== typeof cb ? null : cb
        }(cb),
        Mb = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i).getItem(Hb)
        }(cb);
      let Xb;
      return Xb = null !== sb && null !== fb && (0, ab.f)(cb, Ub) && function(bb, cb, sb) {
          const Wb = (0, kb.Wb)(bb),
            ab = (0, kb.Wb)(cb),
            Tb = (0, kb.Qb)(bb),
            Ub = (0, kb.Qb)(cb);
          return !(Wb !== ab || !sb) || Wb === ab && Tb === Ub
        }(fb, bb, Mb) ? sb : (0, Wb.d)(), (0, ab.n)(cb, Ub, Xb), cb.setItem(Ib, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i).removeItem(Hb)
        }(cb), Xb
    }
  },
  40160: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      f: () => ab,
      j: () => Ub
    });
    let kb = null,
      Wb = null;

    function ab(bb, cb) {
      return kb = bb, Wb = null, Ub(cb), () => {
        kb === bb && (kb = null, Wb = null)
      }
    }

    function Tb() {
      return null === Wb ? null : {
        ...Wb
      }
    }

    function Ub(bb) {
      var cb;
      null !== (cb = kb) && void 0 !== cb && cb(bb) && (Wb = {
        ...bb
      })
    }
  },
  40152: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      g: () => ab
    });
    let kb = null;

    function Wb(bb, cb) {
      kb = {
        conn: bb,
        reason: cb
      }
    }

    function ab(bb) {
      var cb;
      const sb = (null === (cb = kb) || void 0 === cb ? void 0 : cb.conn) === bb ? kb.reason : null;
      return kb = null, sb
    }
  },
  40129: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      d: () => Wb
    });
    let kb = {
      fire: () => {},
      close: () => {}
    };

    function Wb(bb) {
      kb = bb
    }

    function ab() {
      return kb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);