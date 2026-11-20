export const id = 212;
export const ids = [212];
export const modules = {
  38888: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      h: () => OT
    });
    var lT = cT(36);
    let MT = !1;

    function KT() {
      return MT
    }

    function OT(TT) {
      MT !== TT && (MT = TT, lT.k.nt("replayViewer|videoExportChanged"))
    }
  },
  36284: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => CT,
      e: () => IT,
      i: () => jT,
      l: () => AT
    });
    var lT = cT(339),
      MT = cT(649),
      KT = cT(654),
      OT = cT(47);
    const yT = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      fT = "playSessionGameNameWithVariation",
      xT = "wasMatchmakePlayer";

    function IT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g;
      (0, KT.h)(TT, yT)
    }

    function AT() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).setItem(xT, !0)
    }

    function CT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g;
      return (0, KT.c)(TT, yT)
    }

    function jT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OT.g;
      const cT = (0, KT.c)(kT, yT),
        IT = function(TT) {
          const kT = TT.getItem(fT);
          return "string" !== typeof kT ? null : kT
        }(kT),
        AT = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).getItem(xT)
        }(kT);
      let CT;
      return CT = null !== cT && null !== IT && (0, KT.e)(kT, yT) && function(TT, kT, cT) {
          const MT = (0, lT.Lb)(TT),
            KT = (0, lT.Lb)(kT),
            OT = (0, lT.Gb)(TT),
            yT = (0, lT.Gb)(kT);
          return !(MT !== KT || !cT) || MT === KT && OT === yT
        }(IT, TT, AT) ? cT : (0, MT.d)(), (0, KT.i)(kT, yT, CT), kT.setItem(fT, TT),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).removeItem(xT)
        }(kT), CT
    }
  },
  40365: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      c: () => KT,
      f: () => yT
    });
    let lT = null,
      MT = null;

    function KT(TT, kT) {
      return lT = TT, MT = null, yT(kT), () => {
        lT === TT && (lT = null, MT = null)
      }
    }

    function OT() {
      return null === MT ? null : {
        ...MT
      }
    }

    function yT(TT) {
      var kT;
      null !== (kT = lT) && void 0 !== kT && kT(TT) && (MT = {
        ...TT
      })
    }
  },
  40348: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      i: () => KT
    });
    let lT = null;

    function MT(TT, kT) {
      lT = {
        conn: TT,
        reason: kT
      }
    }

    function KT(TT) {
      var kT;
      const cT = (null === (kT = lT) || void 0 === kT ? void 0 : kT.conn) === TT ? lT.reason : null;
      return lT = null, cT
    }
  },
  40321: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      f: () => MT
    });
    let lT = {
      fire: () => {},
      close: () => {}
    };

    function MT(TT) {
      lT = TT
    }

    function KT() {
      return lT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);