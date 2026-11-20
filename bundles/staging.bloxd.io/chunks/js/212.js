export const id = 212;
export const ids = [212];
export const modules = {
  38631: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      f: () => PU
    });
    var tU = gU(24);
    let pU = !1;

    function EU() {
      return pU
    }

    function PU(UU) {
      pU !== UU && (pU = UU, tU.p.yh("replayViewer|videoExportChanged"))
    }
  },
  36033: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => jU,
      d: () => cU,
      f: () => uU,
      i: () => GU
    });
    var tU = gU(311),
      pU = gU(616),
      EU = gU(631),
      PU = gU(34);
    const TU = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qU = "playSessionGameNameWithVariation",
      KU = "wasMatchmakePlayer";

    function cU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l;
      (0, EU.k)(UU, TU)
    }

    function GU() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l).setItem(KU, !0)
    }

    function jU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l;
      return (0, EU.d)(UU, TU)
    }

    function uU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PU.l;
      const gU = (0, EU.d)(RU, TU),
        cU = function(UU) {
          const RU = UU.getItem(qU);
          return "string" !== typeof RU ? null : RU
        }(RU),
        GU = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l).getItem(KU)
        }(RU);
      let jU;
      return jU = null !== gU && null !== cU && (0, EU.g)(RU, TU) && function(UU, RU, gU) {
          const pU = (0, tU.Wb)(UU),
            EU = (0, tU.Wb)(RU),
            PU = (0, tU.Sb)(UU),
            TU = (0, tU.Sb)(RU);
          return !(pU !== EU || !gU) || pU === EU && PU === TU
        }(cU, UU, GU) ? gU : (0, pU.e)(), (0, EU.l)(RU, TU, jU), RU.setItem(qU, UU),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.l).removeItem(KU)
        }(RU), jU
    }
  },
  40110: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      d: () => EU,
      g: () => TU
    });
    let tU = null,
      pU = null;

    function EU(UU, RU) {
      return tU = UU, pU = null, TU(RU), () => {
        tU === UU && (tU = null, pU = null)
      }
    }

    function PU() {
      return null === pU ? null : {
        ...pU
      }
    }

    function TU(UU) {
      var RU;
      null !== (RU = tU) && void 0 !== RU && RU(UU) && (pU = {
        ...UU
      })
    }
  },
  40098: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      e: () => EU
    });
    let tU = null;

    function pU(UU, RU) {
      tU = {
        conn: UU,
        reason: RU
      }
    }

    function EU(UU) {
      var RU;
      const gU = (null === (RU = tU) || void 0 === RU ? void 0 : RU.conn) === UU ? tU.reason : null;
      return tU = null, gU
    }
  },
  40071: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      h: () => pU
    });
    let tU = {
      fire: () => {},
      close: () => {}
    };

    function pU(UU) {
      tU = UU
    }

    function EU() {
      return tU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);