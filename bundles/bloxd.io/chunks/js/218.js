export const id = 218;
export const ids = [218];
export const modules = {
  39055: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => rD
    });
    var pD = wD(25);
    let sD = !1;

    function KD() {
      return sD
    }

    function rD(DD) {
      sD !== DD && (sD = DD, pD.l.KG("replayViewer|videoExportChanged"))
    }
  },
  36467: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => UD,
      f: () => RD,
      i: () => fD,
      m: () => AD
    });
    var pD = wD(351),
      sD = wD(648),
      KD = wD(663),
      rD = wD(35);
    const LD = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      cD = "playSessionGameNameWithVariation",
      gD = "wasMatchmakePlayer";

    function RD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k;
      (0, KD.j)(DD, LD)
    }

    function AD() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k).setItem(gD, !0)
    }

    function UD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k;
      return (0, KD.e)(DD, LD)
    }

    function fD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rD.k;
      const wD = (0, KD.e)(zD, LD),
        RD = function(DD) {
          const zD = DD.getItem(cD);
          return "string" !== typeof zD ? null : zD
        }(zD),
        AD = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k).getItem(gD)
        }(zD);
      let UD;
      return UD = null !== wD && null !== RD && (0, KD.h)(zD, LD) && function(DD, zD, wD) {
          const sD = (0, pD.Tb)(DD),
            KD = (0, pD.Tb)(zD),
            rD = (0, pD.Ob)(DD),
            LD = (0, pD.Ob)(zD);
          return !(sD !== KD || !wD) || sD === KD && rD === LD
        }(RD, DD, AD) ? wD : (0, sD.e)(), (0, KD.l)(zD, LD, UD), zD.setItem(cD, DD),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k).removeItem(gD)
        }(zD), UD
    }
  },
  40833: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      g: () => KD,
      j: () => LD
    });
    let pD = null,
      sD = null;

    function KD(DD, zD) {
      return pD = DD, sD = null, LD(zD), () => {
        pD === DD && (pD = null, sD = null)
      }
    }

    function rD() {
      return null === sD ? null : {
        ...sD
      }
    }

    function LD(DD) {
      var zD;
      null !== (zD = pD) && void 0 !== zD && zD(DD) && (sD = {
        ...DD
      })
    }
  },
  40843: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      h: () => KD
    });
    let pD = null;

    function sD(DD, zD) {
      pD = {
        conn: DD,
        reason: zD
      }
    }

    function KD(DD) {
      var zD;
      const wD = (null === (zD = pD) || void 0 === zD ? void 0 : zD.conn) === DD ? pD.reason : null;
      return pD = null, wD
    }
  },
  40898: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      i: () => sD
    });
    let pD = {
      fire: () => {},
      close: () => {}
    };

    function sD(DD) {
      pD = DD
    }

    function KD() {
      return pD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);