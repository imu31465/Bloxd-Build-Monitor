export const id = 244;
export const ids = [244];
export const modules = {
  40018: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      h: () => hH
    });
    var AH = LH(18);
    let rH = !1;

    function SH() {
      return rH
    }

    function hH(HH) {
      rH !== HH && (rH = HH, AH.k.AX("replayViewer|videoExportChanged"))
    }
  },
  37345: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      g: () => EH,
      i: () => YH,
      j: () => XH
    });
    var AH = LH(317),
      rH = LH(648),
      SH = LH(659),
      hH = LH(30);
    const tH = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      zH = "playSessionGameNameWithVariation",
      CH = "wasMatchmakePlayer";

    function EH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
      (0, SH.k)(HH, tH)
    }

    function XH() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).setItem(CH, !0)
    }

    function GH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
      return (0, SH.e)(HH, tH)
    }

    function YH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.f;
      const LH = (0, SH.e)(BH, tH),
        EH = function(HH) {
          const BH = HH.getItem(zH);
          return "string" !== typeof BH ? null : BH
        }(BH),
        XH = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).getItem(CH)
        }(BH);
      let GH;
      return GH = null !== LH && null !== EH && (0, SH.i)(BH, tH) && function(HH, BH, LH) {
          const rH = (0, AH.Wb)(HH),
            SH = (0, AH.Wb)(BH),
            hH = (0, AH.Ob)(HH),
            tH = (0, AH.Ob)(BH);
          return !(rH !== SH || !LH) || rH === SH && hH === tH
        }(EH, HH, XH) ? LH : (0, rH.b)(), (0, SH.o)(BH, tH, GH), BH.setItem(zH, HH),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).removeItem(CH)
        }(BH), GH
    }
  },
  42234: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => EH,
      g: () => hH,
      k: () => zH,
      o: () => SH,
      r: () => tH,
      u: () => CH
    });
    let AH = null,
      rH = null;

    function SH(HH, BH) {
      return AH = HH, rH = null, tH(BH), () => {
        AH === HH && (AH = null, rH = null)
      }
    }

    function hH() {
      return null === rH ? null : {
        ...rH
      }
    }

    function tH(HH) {
      var BH;
      null !== (BH = AH) && void 0 !== BH && BH(HH) && (rH = {
        ...HH
      })
    }

    function zH() {
      return "undefined" === typeof location ? null : function(HH) {
        const BH = new URLSearchParams(HH).get("renderDistanceMax");
        if (null === BH || !/^\d{1,2}$/.test(BH)) return null;
        const LH = Number(BH);
        return LH >= 1 && LH <= 64 ? LH : null
      }(location.search)
    }

    function CH(HH, BH) {
      return null === BH ? HH : {
        horizontal: Math.min(HH.horizontal, BH),
        vertical: HH.vertical
      }
    }

    function EH(HH, BH) {
      return null === BH ? HH : CH(null !== HH && void 0 !== HH ? HH : {
        horizontal: 1 / 0,
        vertical: 1 / 0
      }, BH)
    }
  },
  42248: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      g: () => SH
    });
    let AH = null;

    function rH(HH, BH) {
      AH = {
        conn: HH,
        reason: BH
      }
    }

    function SH(HH) {
      var BH;
      const LH = (null === (BH = AH) || void 0 === BH ? void 0 : BH.conn) === HH ? AH.reason : null;
      return AH = null, LH
    }
  },
  42304: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      e: () => rH
    });
    let AH = {
      fire: () => {},
      close: () => {}
    };

    function rH(HH) {
      AH = HH
    }

    function SH() {
      return AH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);