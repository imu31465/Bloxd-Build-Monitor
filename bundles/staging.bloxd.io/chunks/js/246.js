export const id = 246;
export const ids = [246];
export const modules = {
  40287: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      d: () => PW
    });
    var mW = OW(27);
    let EW = !1;

    function NW() {
      return EW
    }

    function PW(WW) {
      EW !== WW && (EW = WW, mW.l.iZ("replayViewer|videoExportChanged"))
    }
  },
  37709: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => xW,
      d: () => tW,
      g: () => lW,
      j: () => ZW
    });
    var mW = OW(344),
      EW = OW(678),
      NW = OW(687),
      PW = OW(39);
    const LW = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      cW = "playSessionGameNameWithVariation",
      wW = "wasMatchmakePlayer";

    function tW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
      (0, NW.h)(WW, LW)
    }

    function ZW() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).setItem(wW, !0)
    }

    function xW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
      return (0, NW.b)(WW, LW)
    }

    function lW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.j;
      const OW = (0, NW.b)(iW, LW),
        tW = function(WW) {
          const iW = WW.getItem(cW);
          return "string" !== typeof iW ? null : iW
        }(iW),
        ZW = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).getItem(wW)
        }(iW);
      let xW;
      return xW = null !== OW && null !== tW && (0, NW.e)(iW, LW) && function(WW, iW, OW) {
          const EW = (0, mW.Tb)(WW),
            NW = (0, mW.Tb)(iW),
            PW = (0, mW.Lb)(WW),
            LW = (0, mW.Lb)(iW);
          return !(EW !== NW || !OW) || EW === NW && PW === LW
        }(tW, WW, ZW) ? OW : (0, EW.d)(), (0, NW.i)(iW, LW, xW), iW.setItem(cW, WW),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).removeItem(wW)
        }(iW), xW
    }
  },
  42427: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => tW,
      f: () => PW,
      i: () => cW,
      k: () => NW,
      m: () => LW,
      o: () => wW
    });
    let mW = null,
      EW = null;

    function NW(WW, iW) {
      return mW = WW, EW = null, LW(iW), () => {
        mW === WW && (mW = null, EW = null)
      }
    }

    function PW() {
      return null === EW ? null : {
        ...EW
      }
    }

    function LW(WW) {
      var iW;
      null !== (iW = mW) && void 0 !== iW && iW(WW) && (EW = {
        ...WW
      })
    }

    function cW() {
      return "undefined" === typeof location ? null : function(WW) {
        const iW = new URLSearchParams(WW).get("renderDistanceMax");
        if (null === iW || !/^\d{1,2}$/.test(iW)) return null;
        const OW = Number(iW);
        return OW >= 1 && OW <= 64 ? OW : null
      }(location.search)
    }

    function wW(WW, iW) {
      return null === iW ? WW : {
        horizontal: Math.min(WW.horizontal, iW),
        vertical: WW.vertical
      }
    }

    function tW(WW, iW) {
      return null === iW ? WW : wW(null !== WW && void 0 !== WW ? WW : {
        horizontal: 1 / 0,
        vertical: 1 / 0
      }, iW)
    }
  },
  42432: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      c: () => NW
    });
    let mW = null;

    function EW(WW, iW) {
      mW = {
        conn: WW,
        reason: iW
      }
    }

    function NW(WW) {
      var iW;
      const OW = (null === (iW = mW) || void 0 === iW ? void 0 : iW.conn) === WW ? mW.reason : null;
      return mW = null, OW
    }
  },
  37436: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => tW,
      d: () => cW,
      f: () => LW,
      i: () => wW
    });
    var mW = OW(2047);
    let EW = null,
      NW = 0;
    const PW = new Set;

    function LW() {
      return EW
    }

    function cW() {
      return NW
    }

    function wW(WW) {
      EW = WW, NW++, (0, mW.b)();
      for (const iW of PW) iW()
    }

    function tW(WW) {
      PW.add(WW)
    }
  },
  42479: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => EW
    });
    let mW = {
      fire: () => {},
      close: () => {}
    };

    function EW(WW) {
      mW = WW
    }

    function NW() {
      return mW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);