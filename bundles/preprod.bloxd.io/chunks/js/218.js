export const id = 218;
export const ids = [218];
export const modules = {
  38923: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC,
      g: () => nC
    });
    var QC = ZC(28);
    let wC = !1;

    function bC() {
      return wC
    }

    function nC(CC) {
      wC !== CC && (wC = CC, QC.o.bp("replayViewer|videoExportChanged"))
    }
  },
  36346: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => NC,
      h: () => FC,
      j: () => MC,
      k: () => WC
    });
    var QC = ZC(326),
      wC = ZC(622),
      bC = ZC(630),
      nC = ZC(38);
    const fC = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      oC = "playSessionGameNameWithVariation",
      qC = "wasMatchmakePlayer";

    function FC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
      (0, bC.g)(CC, fC)
    }

    function WC() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).setItem(qC, !0)
    }

    function NC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
      return (0, bC.d)(CC, fC)
    }

    function MC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC.k;
      const ZC = (0, bC.d)(zC, fC),
        FC = function(CC) {
          const zC = CC.getItem(oC);
          return "string" !== typeof zC ? null : zC
        }(zC),
        WC = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).getItem(qC)
        }(zC);
      let NC;
      return NC = null !== ZC && null !== FC && (0, bC.f)(zC, fC) && function(CC, zC, ZC) {
          const wC = (0, QC.Cb)(CC),
            bC = (0, QC.Cb)(zC),
            nC = (0, QC.zb)(CC),
            fC = (0, QC.zb)(zC);
          return !(wC !== bC || !ZC) || wC === bC && nC === fC
        }(FC, CC, WC) ? ZC : (0, wC.c)(), (0, bC.j)(zC, fC, NC), zC.setItem(oC, CC),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).removeItem(qC)
        }(zC), NC
    }
  },
  40748: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      f: () => bC,
      h: () => fC
    });
    let QC = null,
      wC = null;

    function bC(CC, zC) {
      return QC = CC, wC = null, fC(zC), () => {
        QC === CC && (QC = null, wC = null)
      }
    }

    function nC() {
      return null === wC ? null : {
        ...wC
      }
    }

    function fC(CC) {
      var zC;
      null !== (zC = QC) && void 0 !== zC && zC(CC) && (wC = {
        ...CC
      })
    }
  },
  40756: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      h: () => bC
    });
    let QC = null;

    function wC(CC, zC) {
      QC = {
        conn: CC,
        reason: zC
      }
    }

    function bC(CC) {
      var zC;
      const ZC = (null === (zC = QC) || void 0 === zC ? void 0 : zC.conn) === CC ? QC.reason : null;
      return QC = null, ZC
    }
  },
  40817: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      g: () => wC
    });
    let QC = {
      fire: () => {},
      close: () => {}
    };

    function wC(CC) {
      QC = CC
    }

    function bC() {
      return QC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);