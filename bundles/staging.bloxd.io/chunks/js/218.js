export const id = 218;
export const ids = [218];
export const modules = {
  39087: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      f: () => yk
    });
    var Xk = Ik(34);
    let Tk = !1;

    function ik() {
      return Tk
    }

    function yk(kk) {
      Tk !== kk && (Tk = kk, Xk.g.GL("replayViewer|videoExportChanged"))
    }
  },
  36458: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Zk,
      g: () => Lk,
      j: () => jk,
      l: () => tk
    });
    var Xk = Ik(337),
      Tk = Ik(659),
      ik = Ik(672),
      yk = Ik(41);
    const lk = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      ak = "playSessionGameNameWithVariation",
      qk = "wasMatchmakePlayer";

    function Lk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m;
      (0, ik.g)(kk, lk)
    }

    function tk() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m).setItem(qk, !0)
    }

    function Zk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m;
      return (0, ik.e)(kk, lk)
    }

    function jk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk.m;
      const Ik = (0, ik.e)(Fk, lk),
        Lk = function(kk) {
          const Fk = kk.getItem(ak);
          return "string" !== typeof Fk ? null : Fk
        }(Fk),
        tk = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m).getItem(qk)
        }(Fk);
      let Zk;
      return Zk = null !== Ik && null !== Lk && (0, ik.f)(Fk, lk) && function(kk, Fk, Ik) {
          const Tk = (0, Xk.dc)(kk),
            ik = (0, Xk.dc)(Fk),
            yk = (0, Xk.Xb)(kk),
            lk = (0, Xk.Xb)(Fk);
          return !(Tk !== ik || !Ik) || Tk === ik && yk === lk
        }(Lk, kk, tk) ? Ik : (0, Tk.c)(), (0, ik.i)(Fk, lk, Zk), Fk.setItem(ak, kk),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m).removeItem(qk)
        }(Fk), Zk
    }
  },
  40923: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk,
      c: () => ik,
      d: () => lk
    });
    let Xk = null,
      Tk = null;

    function ik(kk, Fk) {
      return Xk = kk, Tk = null, lk(Fk), () => {
        Xk === kk && (Xk = null, Tk = null)
      }
    }

    function yk() {
      return null === Tk ? null : {
        ...Tk
      }
    }

    function lk(kk) {
      var Fk;
      null !== (Fk = Xk) && void 0 !== Fk && Fk(kk) && (Tk = {
        ...kk
      })
    }
  },
  40935: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      g: () => ik
    });
    let Xk = null;

    function Tk(kk, Fk) {
      Xk = {
        conn: kk,
        reason: Fk
      }
    }

    function ik(kk) {
      var Fk;
      const Ik = (null === (Fk = Xk) || void 0 === Fk ? void 0 : Fk.conn) === kk ? Xk.reason : null;
      return Xk = null, Ik
    }
  },
  40994: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      f: () => Tk
    });
    let Xk = {
      fire: () => {},
      close: () => {}
    };

    function Tk(kk) {
      Xk = kk
    }

    function ik() {
      return Xk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);