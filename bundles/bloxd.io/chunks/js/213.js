export const id = 213;
export const ids = [213];
export const modules = {
  38620: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      e: () => DQ
    });
    var LQ = wQ(22);
    let qQ = !1;

    function oQ() {
      return qQ
    }

    function DQ(QQ) {
      qQ !== QQ && (qQ = QQ, LQ.l.GA("replayViewer|videoExportChanged"))
    }
  },
  36110: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => bQ,
      g: () => uQ,
      h: () => YQ,
      j: () => HQ
    });
    var LQ = wQ(317),
      qQ = wQ(647),
      oQ = wQ(651),
      DQ = wQ(27);
    const kQ = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      vQ = "playSessionGameNameWithVariation",
      mQ = "wasMatchmakePlayer";

    function uQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m;
      (0, oQ.f)(QQ, kQ)
    }

    function HQ() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m).setItem(mQ, !0)
    }

    function bQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m;
      return (0, oQ.b)(QQ, kQ)
    }

    function YQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DQ.m;
      const wQ = (0, oQ.b)(FQ, kQ),
        uQ = function(QQ) {
          const FQ = QQ.getItem(vQ);
          return "string" !== typeof FQ ? null : FQ
        }(FQ),
        HQ = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m).getItem(mQ)
        }(FQ);
      let bQ;
      return bQ = null !== wQ && null !== uQ && (0, oQ.d)(FQ, kQ) && function(QQ, FQ, wQ) {
          const qQ = (0, LQ.Wb)(QQ),
            oQ = (0, LQ.Wb)(FQ),
            DQ = (0, LQ.Pb)(QQ),
            kQ = (0, LQ.Pb)(FQ);
          return !(qQ !== oQ || !wQ) || qQ === oQ && DQ === kQ
        }(uQ, QQ, HQ) ? wQ : (0, qQ.d)(), (0, oQ.g)(FQ, kQ, bQ), FQ.setItem(vQ, QQ),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m).removeItem(mQ)
        }(FQ), bQ
    }
  },
  40160: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      d: () => oQ,
      f: () => kQ
    });
    let LQ = null,
      qQ = null;

    function oQ(QQ, FQ) {
      return LQ = QQ, qQ = null, kQ(FQ), () => {
        LQ === QQ && (LQ = null, qQ = null)
      }
    }

    function DQ() {
      return null === qQ ? null : {
        ...qQ
      }
    }

    function kQ(QQ) {
      var FQ;
      null !== (FQ = LQ) && void 0 !== FQ && FQ(QQ) && (qQ = {
        ...QQ
      })
    }
  },
  40147: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      c: () => oQ
    });
    let LQ = null;

    function qQ(QQ, FQ) {
      LQ = {
        conn: QQ,
        reason: FQ
      }
    }

    function oQ(QQ) {
      var FQ;
      const wQ = (null === (FQ = LQ) || void 0 === FQ ? void 0 : FQ.conn) === QQ ? LQ.reason : null;
      return LQ = null, wQ
    }
  },
  40117: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      f: () => qQ
    });
    let LQ = {
      fire: () => {},
      close: () => {}
    };

    function qQ(QQ) {
      LQ = QQ
    }

    function oQ() {
      return LQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);