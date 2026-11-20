export const id = 212;
export const ids = [212];
export const modules = {
  38370: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      e: () => Eb
    });
    var Ab = Ub(22);
    let Mb = !1;

    function Tb() {
      return Mb
    }

    function Eb(bb) {
      Mb !== bb && (Mb = bb, Ab.m.IR("replayViewer|videoExportChanged"))
    }
  },
  35909: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb,
      i: () => vb,
      l: () => Xb,
      m: () => Lb
    });
    var Ab = Ub(325),
      Mb = Ub(619),
      Tb = Ub(631),
      Eb = Ub(31);
    const Yb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Bb = "playSessionGameNameWithVariation",
      eb = "wasMatchmakePlayer";

    function vb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j;
      (0, Tb.e)(bb, Yb)
    }

    function Lb() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j).setItem(eb, !0)
    }

    function Pb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j;
      return (0, Tb.b)(bb, Yb)
    }

    function Xb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb.j;
      const Ub = (0, Tb.b)(ab, Yb),
        vb = function(bb) {
          const ab = bb.getItem(Bb);
          return "string" !== typeof ab ? null : ab
        }(ab),
        Lb = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j).getItem(eb)
        }(ab);
      let Pb;
      return Pb = null !== Ub && null !== vb && (0, Tb.c)(ab, Yb) && function(bb, ab, Ub) {
          const Mb = (0, Ab.Gb)(bb),
            Tb = (0, Ab.Gb)(ab),
            Eb = (0, Ab.Bb)(bb),
            Yb = (0, Ab.Bb)(ab);
          return !(Mb !== Tb || !Ub) || Mb === Tb && Eb === Yb
        }(vb, bb, Lb) ? Ub : (0, Mb.c)(), (0, Tb.i)(ab, Yb, Pb), ab.setItem(Bb, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j).removeItem(eb)
        }(ab), Pb
    }
  },
  39848: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      h: () => Tb,
      j: () => Yb
    });
    let Ab = null,
      Mb = null;

    function Tb(bb, ab) {
      return Ab = bb, Mb = null, Yb(ab), () => {
        Ab === bb && (Ab = null, Mb = null)
      }
    }

    function Eb() {
      return null === Mb ? null : {
        ...Mb
      }
    }

    function Yb(bb) {
      var ab;
      null !== (ab = Ab) && void 0 !== ab && ab(bb) && (Mb = {
        ...bb
      })
    }
  },
  39839: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      h: () => Tb
    });
    let Ab = null;

    function Mb(bb, ab) {
      Ab = {
        conn: bb,
        reason: ab
      }
    }

    function Tb(bb) {
      var ab;
      const Ub = (null === (ab = Ab) || void 0 === ab ? void 0 : ab.conn) === bb ? Ab.reason : null;
      return Ab = null, Ub
    }
  },
  39812: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      e: () => Mb
    });
    let Ab = {
      fire: () => {},
      close: () => {}
    };

    function Mb(bb) {
      Ab = bb
    }

    function Tb() {
      return Ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);