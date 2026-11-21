export const id = 213;
export const ids = [213];
export const modules = {
  39228: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      f: () => Pd
    });
    var pd = kd(29);
    let Nd = !1;

    function Wd() {
      return Nd
    }

    function Pd(dd) {
      Nd !== dd && (Nd = dd, pd.j.nO("replayViewer|videoExportChanged"))
    }
  },
  36640: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld,
      g: () => Kd,
      k: () => Qd,
      n: () => od
    });
    var pd = kd(313),
      Nd = kd(638),
      Wd = kd(648),
      Pd = kd(33);
    const Zd = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      gd = "playSessionGameNameWithVariation",
      Cd = "wasMatchmakePlayer";

    function Kd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k;
      (0, Wd.i)(dd, Zd)
    }

    function od() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k).setItem(Cd, !0)
    }

    function ld() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k;
      return (0, Wd.d)(dd, Zd)
    }

    function Qd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pd.k;
      const kd = (0, Wd.d)(Jd, Zd),
        Kd = function(dd) {
          const Jd = dd.getItem(gd);
          return "string" !== typeof Jd ? null : Jd
        }(Jd),
        od = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k).getItem(Cd)
        }(Jd);
      let ld;
      return ld = null !== kd && null !== Kd && (0, Wd.g)(Jd, Zd) && function(dd, Jd, kd) {
          const Nd = (0, pd._b)(dd),
            Wd = (0, pd._b)(Jd),
            Pd = (0, pd.Vb)(dd),
            Zd = (0, pd.Vb)(Jd);
          return !(Nd !== Wd || !kd) || Nd === Wd && Pd === Zd
        }(Kd, dd, od) ? kd : (0, Nd.e)(), (0, Wd.j)(Jd, Zd, ld), Jd.setItem(gd, dd),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k).removeItem(Cd)
        }(Jd), ld
    }
  },
  40707: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      f: () => Wd,
      j: () => Zd
    });
    let pd = null,
      Nd = null;

    function Wd(dd, Jd) {
      return pd = dd, Nd = null, Zd(Jd), () => {
        pd === dd && (pd = null, Nd = null)
      }
    }

    function Pd() {
      return null === Nd ? null : {
        ...Nd
      }
    }

    function Zd(dd) {
      var Jd;
      null !== (Jd = pd) && void 0 !== Jd && Jd(dd) && (Nd = {
        ...dd
      })
    }
  },
  40698: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      f: () => Wd
    });
    let pd = null;

    function Nd(dd, Jd) {
      pd = {
        conn: dd,
        reason: Jd
      }
    }

    function Wd(dd) {
      var Jd;
      const kd = (null === (Jd = pd) || void 0 === Jd ? void 0 : Jd.conn) === dd ? pd.reason : null;
      return pd = null, kd
    }
  },
  40676: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      e: () => Nd
    });
    let pd = {
      fire: () => {},
      close: () => {}
    };

    function Nd(dd) {
      pd = dd
    }

    function Wd() {
      return pd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);