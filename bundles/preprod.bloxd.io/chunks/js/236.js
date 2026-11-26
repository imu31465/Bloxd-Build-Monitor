export const id = 236;
export const ids = [236];
export const modules = {
  39900: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      h: () => AU
    });
    var cU = zU(31);
    let yU = !1;

    function QU() {
      return yU
    }

    function AU(UU) {
      yU !== UU && (yU = UU, cU.k.UY("replayViewer|videoExportChanged"))
    }
  },
  37181: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU,
      h: () => EU,
      i: () => IU,
      l: () => YU
    });
    var cU = zU(344),
      yU = zU(698),
      QU = zU(708),
      AU = zU(42);
    const FU = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      oU = "playSessionGameNameWithVariation",
      DU = "wasMatchmakePlayer";

    function EU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n;
      (0, QU.k)(UU, FU)
    }

    function YU() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).setItem(DU, !0)
    }

    function NU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n;
      return (0, QU.e)(UU, FU)
    }

    function IU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.n;
      const zU = (0, QU.e)(XU, FU),
        EU = function(UU) {
          const XU = UU.getItem(oU);
          return "string" !== typeof XU ? null : XU
        }(XU),
        YU = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).getItem(DU)
        }(XU);
      let NU;
      return NU = null !== zU && null !== EU && (0, QU.i)(XU, FU) && function(UU, XU, zU) {
          const yU = (0, cU.Tb)(UU),
            QU = (0, cU.Tb)(XU),
            AU = (0, cU.Nb)(UU),
            FU = (0, cU.Nb)(XU);
          return !(yU !== QU || !zU) || yU === QU && AU === FU
        }(EU, UU, YU) ? zU : (0, yU.d)(), (0, QU.m)(XU, FU, NU), XU.setItem(oU, UU),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).removeItem(DU)
        }(XU), NU
    }
  },
  42010: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      f: () => AU,
      g: () => oU,
      k: () => QU,
      l: () => FU,
      o: () => DU
    });
    let cU = null,
      yU = null;

    function QU(UU, XU) {
      return cU = UU, yU = null, FU(XU), () => {
        cU === UU && (cU = null, yU = null)
      }
    }

    function AU() {
      return null === yU ? null : {
        ...yU
      }
    }

    function FU(UU) {
      var XU;
      null !== (XU = cU) && void 0 !== XU && XU(UU) && (yU = {
        ...UU
      })
    }

    function oU() {
      return "undefined" === typeof location ? null : function(UU) {
        const XU = new URLSearchParams(UU).get("renderDistanceMax");
        if (null === XU || !/^\d{1,2}$/.test(XU)) return null;
        const zU = Number(XU);
        return zU >= 1 && zU <= 64 ? zU : null
      }(location.search)
    }

    function DU(UU, XU) {
      return null === XU ? UU : {
        horizontal: Math.min(UU.horizontal, XU),
        vertical: UU.vertical
      }
    }

    function EU(UU, XU) {
      return null === XU ? UU : DU(null !== UU && void 0 !== UU ? UU : {
        horizontal: 1 / 0,
        vertical: 1 / 0
      }, XU)
    }
  },
  42020: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      f: () => QU
    });
    let cU = null;

    function yU(UU, XU) {
      cU = {
        conn: UU,
        reason: XU
      }
    }

    function QU(UU) {
      var XU;
      const zU = (null === (XU = cU) || void 0 === XU ? void 0 : XU.conn) === UU ? cU.reason : null;
      return cU = null, zU
    }
  },
  42091: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      d: () => yU
    });
    let cU = {
      fire: () => {},
      close: () => {}
    };

    function yU(UU) {
      cU = UU
    }

    function QU() {
      return cU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);