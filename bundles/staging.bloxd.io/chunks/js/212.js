export const id = 212;
export const ids = [212];
export const modules = {
  38431: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD,
      h: () => fD
    });
    var ID = cD(20);
    let pD = !1;

    function iD() {
      return pD
    }

    function fD(DD) {
      pD !== DD && (pD = DD, ID.i.Uo("replayViewer|videoExportChanged"))
    }
  },
  35883: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => yD,
      f: () => SD,
      g: () => MD,
      i: () => BD
    });
    var ID = cD(326),
      pD = cD(656),
      iD = cD(668),
      fD = cD(36);
    const bD = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      QD = "playSessionGameNameWithVariation",
      wD = "wasMatchmakePlayer";

    function SD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j;
      (0, iD.j)(DD, bD)
    }

    function BD() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j).setItem(wD, !0)
    }

    function yD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j;
      return (0, iD.e)(DD, bD)
    }

    function MD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fD.j;
      const cD = (0, iD.e)(CD, bD),
        SD = function(DD) {
          const CD = DD.getItem(QD);
          return "string" !== typeof CD ? null : CD
        }(CD),
        BD = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j).getItem(wD)
        }(CD);
      let yD;
      return yD = null !== cD && null !== SD && (0, iD.f)(CD, bD) && function(DD, CD, cD) {
          const pD = (0, ID.Vb)(DD),
            iD = (0, ID.Vb)(CD),
            fD = (0, ID.Qb)(DD),
            bD = (0, ID.Qb)(CD);
          return !(pD !== iD || !cD) || pD === iD && fD === bD
        }(SD, DD, BD) ? cD : (0, pD.b)(), (0, iD.k)(CD, bD, yD), CD.setItem(QD, DD),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j).removeItem(wD)
        }(CD), yD
    }
  },
  39800: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD,
      g: () => iD,
      h: () => bD
    });
    let ID = null,
      pD = null;

    function iD(DD, CD) {
      return ID = DD, pD = null, bD(CD), () => {
        ID === DD && (ID = null, pD = null)
      }
    }

    function fD() {
      return null === pD ? null : {
        ...pD
      }
    }

    function bD(DD) {
      var CD;
      null !== (CD = ID) && void 0 !== CD && CD(DD) && (pD = {
        ...DD
      })
    }
  },
  39791: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      f: () => iD
    });
    let ID = null;

    function pD(DD, CD) {
      ID = {
        conn: DD,
        reason: CD
      }
    }

    function iD(DD) {
      var CD;
      const cD = (null === (CD = ID) || void 0 === CD ? void 0 : CD.conn) === DD ? ID.reason : null;
      return ID = null, cD
    }
  },
  39771: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD,
      h: () => pD
    });
    let ID = {
      fire: () => {},
      close: () => {}
    };

    function pD(DD) {
      ID = DD
    }

    function iD() {
      return ID
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);