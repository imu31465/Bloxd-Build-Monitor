export const id = 197;
export const ids = [197];
export const modules = {
  38033: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      f: () => XJ
    });
    var FJ = ZJ(17);
    let UJ = !1;

    function eJ() {
      return UJ
    }

    function XJ(JJ) {
      UJ !== JJ && (UJ = JJ, FJ.i.Uf("replayViewer|videoExportChanged"))
    }
  },
  35554: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ,
      f: () => YJ,
      h: () => sJ,
      i: () => hJ
    });
    var FJ = ZJ(235),
      UJ = ZJ(556),
      eJ = ZJ(976),
      XJ = ZJ(29);
    const AJ = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qJ = "playSessionGameNameWithVariation",
      jJ = "wasMatchmakePlayer";

    function YJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k;
      (0, eJ.f)(JJ, AJ)
    }

    function hJ() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k).setItem(jJ, !0)
    }

    function DJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k;
      return (0, eJ.b)(JJ, AJ)
    }

    function sJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XJ.k;
      const ZJ = (0, eJ.b)(cJ, AJ),
        YJ = function(JJ) {
          const cJ = JJ.getItem(qJ);
          return "string" !== typeof cJ ? null : cJ
        }(cJ),
        hJ = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k).getItem(jJ)
        }(cJ);
      let DJ;
      return DJ = null !== ZJ && null !== YJ && (0, eJ.c)(cJ, AJ) && function(JJ, cJ, ZJ) {
          const UJ = (0, FJ.Jb)(JJ),
            eJ = (0, FJ.Jb)(cJ),
            XJ = (0, FJ.Hb)(JJ),
            AJ = (0, FJ.Hb)(cJ);
          return !(UJ !== eJ || !ZJ) || UJ === eJ && XJ === AJ
        }(YJ, JJ, hJ) ? ZJ : (0, UJ.b)(), (0, eJ.i)(cJ, AJ, DJ), cJ.setItem(qJ, JJ),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k).removeItem(jJ)
        }(cJ), DJ
    }
  },
  39487: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ,
      d: () => eJ,
      g: () => AJ
    });
    let FJ = null,
      UJ = null;

    function eJ(JJ, cJ) {
      return FJ = JJ, UJ = null, AJ(cJ), () => {
        FJ === JJ && (FJ = null, UJ = null)
      }
    }

    function XJ() {
      return null === UJ ? null : {
        ...UJ
      }
    }

    function AJ(JJ) {
      var cJ;
      null !== (cJ = FJ) && void 0 !== cJ && cJ(JJ) && (UJ = {
        ...JJ
      })
    }
  },
  39482: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      d: () => eJ
    });
    let FJ = null;

    function UJ(JJ, cJ) {
      FJ = {
        conn: JJ,
        reason: cJ
      }
    }

    function eJ(JJ) {
      var cJ;
      const ZJ = (null === (cJ = FJ) || void 0 === cJ ? void 0 : cJ.conn) === JJ ? FJ.reason : null;
      return FJ = null, ZJ
    }
  },
  39459: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      g: () => UJ
    });
    let FJ = {
      fire: () => {},
      close: () => {}
    };

    function UJ(JJ) {
      FJ = JJ
    }

    function eJ() {
      return FJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);