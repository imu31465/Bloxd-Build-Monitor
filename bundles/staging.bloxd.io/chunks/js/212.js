export const id = 212;
export const ids = [212];
export const modules = {
  38719: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      e: () => Xk
    });
    var Rk = Bk(29);
    let tk = !1;

    function ak() {
      return tk
    }

    function Xk(kk) {
      tk !== kk && (tk = kk, Rk.o.Hf("replayViewer|videoExportChanged"))
    }
  },
  36202: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Jk,
      i: () => sk,
      j: () => Ak,
      k: () => Vk
    });
    var Rk = Bk(291),
      tk = Bk(631),
      ak = Bk(637),
      Xk = Bk(42);
    const bk = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      wk = "playSessionGameNameWithVariation",
      dk = "wasMatchmakePlayer";

    function sk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j;
      (0, ak.g)(kk, bk)
    }

    function Vk() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j).setItem(dk, !0)
    }

    function Jk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j;
      return (0, ak.c)(kk, bk)
    }

    function Ak(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.j;
      const Bk = (0, ak.c)(Fk, bk),
        sk = function(kk) {
          const Fk = kk.getItem(wk);
          return "string" !== typeof Fk ? null : Fk
        }(Fk),
        Vk = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j).getItem(dk)
        }(Fk);
      let Jk;
      return Jk = null !== Bk && null !== sk && (0, ak.f)(Fk, bk) && function(kk, Fk, Bk) {
          const tk = (0, Rk.Vb)(kk),
            ak = (0, Rk.Vb)(Fk),
            Xk = (0, Rk.Rb)(kk),
            bk = (0, Rk.Rb)(Fk);
          return !(tk !== ak || !Bk) || tk === ak && Xk === bk
        }(sk, kk, Vk) ? Bk : (0, tk.d)(), (0, ak.j)(Fk, bk, Jk), Fk.setItem(wk, kk),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.j).removeItem(dk)
        }(Fk), Jk
    }
  },
  40141: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      d: () => ak,
      e: () => bk
    });
    let Rk = null,
      tk = null;

    function ak(kk, Fk) {
      return Rk = kk, tk = null, bk(Fk), () => {
        Rk === kk && (Rk = null, tk = null)
      }
    }

    function Xk() {
      return null === tk ? null : {
        ...tk
      }
    }

    function bk(kk) {
      var Fk;
      null !== (Fk = Rk) && void 0 !== Fk && Fk(kk) && (tk = {
        ...kk
      })
    }
  },
  40131: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      c: () => ak
    });
    let Rk = null;

    function tk(kk, Fk) {
      Rk = {
        conn: kk,
        reason: Fk
      }
    }

    function ak(kk) {
      var Fk;
      const Bk = (null === (Fk = Rk) || void 0 === Fk ? void 0 : Fk.conn) === kk ? Rk.reason : null;
      return Rk = null, Bk
    }
  },
  40100: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      e: () => tk
    });
    let Rk = {
      fire: () => {},
      close: () => {}
    };

    function tk(kk) {
      Rk = kk
    }

    function ak() {
      return Rk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);