export const id = 207;
export const ids = [207];
export const modules = {
  38044: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      i: () => WT
    });
    var iT = IT(16);
    let zT = !1;

    function kT() {
      return zT
    }

    function WT(TT) {
      zT !== TT && (zT = TT, iT.h.XM("replayViewer|videoExportChanged"))
    }
  },
  35468: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT,
      i: () => ST,
      j: () => xT,
      l: () => DT
    });
    var iT = IT(314),
      zT = IT(643),
      kT = IT(651),
      WT = IT(26);
    const XT = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      BT = "playSessionGameNameWithVariation",
      FT = "wasMatchmakePlayer";

    function ST() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h;
      (0, kT.i)(TT, XT)
    }

    function DT() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h).setItem(FT, !0)
    }

    function LT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h;
      return (0, kT.c)(TT, XT)
    }

    function xT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.h;
      const IT = (0, kT.c)(oT, XT),
        ST = function(TT) {
          const oT = TT.getItem(BT);
          return "string" !== typeof oT ? null : oT
        }(oT),
        DT = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h).getItem(FT)
        }(oT);
      let LT;
      return LT = null !== IT && null !== ST && (0, kT.f)(oT, XT) && function(TT, oT, IT) {
          const zT = (0, iT.Ib)(TT),
            kT = (0, iT.Ib)(oT),
            WT = (0, iT.Fb)(TT),
            XT = (0, iT.Fb)(oT);
          return !(zT !== kT || !IT) || zT === kT && WT === XT
        }(ST, TT, DT) ? IT : (0, zT.b)(), (0, kT.k)(oT, XT, LT), oT.setItem(BT, TT),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.h).removeItem(FT)
        }(oT), LT
    }
  },
  39504: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      d: () => kT,
      f: () => XT
    });
    let iT = null,
      zT = null;

    function kT(TT, oT) {
      return iT = TT, zT = null, XT(oT), () => {
        iT === TT && (iT = null, zT = null)
      }
    }

    function WT() {
      return null === zT ? null : {
        ...zT
      }
    }

    function XT(TT) {
      var oT;
      null !== (oT = iT) && void 0 !== oT && oT(TT) && (zT = {
        ...TT
      })
    }
  },
  39496: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      h: () => kT
    });
    let iT = null;

    function zT(TT, oT) {
      iT = {
        conn: TT,
        reason: oT
      }
    }

    function kT(TT) {
      var oT;
      const IT = (null === (oT = iT) || void 0 === oT ? void 0 : oT.conn) === TT ? iT.reason : null;
      return iT = null, IT
    }
  },
  39471: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      h: () => zT
    });
    let iT = {
      fire: () => {},
      close: () => {}
    };

    function zT(TT) {
      iT = TT
    }

    function kT() {
      return iT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);