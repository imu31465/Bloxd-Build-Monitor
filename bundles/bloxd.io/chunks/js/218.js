export const id = 218;
export const ids = [218];
export const modules = {
  39106: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      g: () => xS
    });
    var tS = gS(31);
    let bS = !1;

    function XS() {
      return bS
    }

    function xS(SS) {
      bS !== SS && (bS = SS, tS.k.cj("replayViewer|videoExportChanged"))
    }
  },
  36479: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => kS,
      f: () => IS,
      h: () => aS,
      i: () => fS
    });
    var tS = gS(387),
      bS = gS(710),
      XS = gS(717),
      xS = gS(45);
    const NS = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qS = "playSessionGameNameWithVariation",
      uS = "wasMatchmakePlayer";

    function IS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h;
      (0, XS.h)(SS, NS)
    }

    function fS() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h).setItem(uS, !0)
    }

    function kS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h;
      return (0, XS.e)(SS, NS)
    }

    function aS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xS.h;
      const gS = (0, XS.e)(HS, NS),
        IS = function(SS) {
          const HS = SS.getItem(qS);
          return "string" !== typeof HS ? null : HS
        }(HS),
        fS = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h).getItem(uS)
        }(HS);
      let kS;
      return kS = null !== gS && null !== IS && (0, XS.g)(HS, NS) && function(SS, HS, gS) {
          const bS = (0, tS.Kb)(SS),
            XS = (0, tS.Kb)(HS),
            xS = (0, tS.Fb)(SS),
            NS = (0, tS.Fb)(HS);
          return !(bS !== XS || !gS) || bS === XS && xS === NS
        }(IS, SS, fS) ? gS : (0, bS.e)(), (0, XS.l)(HS, NS, kS), HS.setItem(qS, SS),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h).removeItem(uS)
        }(HS), kS
    }
  },
  40934: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      e: () => XS,
      h: () => NS
    });
    let tS = null,
      bS = null;

    function XS(SS, HS) {
      return tS = SS, bS = null, NS(HS), () => {
        tS === SS && (tS = null, bS = null)
      }
    }

    function xS() {
      return null === bS ? null : {
        ...bS
      }
    }

    function NS(SS) {
      var HS;
      null !== (HS = tS) && void 0 !== HS && HS(SS) && (bS = {
        ...SS
      })
    }
  },
  40945: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      g: () => XS
    });
    let tS = null;

    function bS(SS, HS) {
      tS = {
        conn: SS,
        reason: HS
      }
    }

    function XS(SS) {
      var HS;
      const gS = (null === (HS = tS) || void 0 === HS ? void 0 : HS.conn) === SS ? tS.reason : null;
      return tS = null, gS
    }
  },
  41010: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      i: () => bS
    });
    let tS = {
      fire: () => {},
      close: () => {}
    };

    function bS(SS) {
      tS = SS
    }

    function XS() {
      return tS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);