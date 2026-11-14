export const id = 10;
export const ids = [10];
export const modules = {
  34827: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => TW,
      g: () => gR,
      k: () => tR,
      n: () => BW
    });
    var wW = MW(8135),
      CW = MW(34830),
      zR = MW(34838),
      AW = MW(7672),
      bR = MW(1253),
      yR = MW(75),
      NW = MW(93),
      eW = MW(940);

    function BW() {
      var WW;
      return (0, bR.i)(CW.c, (0, CW.h)()), (0, eW.jsx)(eW.Fragment, {
        children: null === (WW = (0, CW.h)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function tR(WW) {
      var RW;
      let {
        show: MW
      } = WW;
      (0, bR.i)(CW.c, (0, CW.h)());
      const NW = null === (RW = (0, CW.h)()) || void 0 === RW ? void 0 : RW.menu;
      return (0, yR.useEffect)((() => {
        MW || (null === NW || void 0 === NW || NW.onClose(), (0, zR.s)())
      }), [MW, NW]), (0, yR.useEffect)((() => MW ? (0, AW.g)(zR.D, zR.e) : void 0), [MW]), (0, eW.jsx)(wW.c, {
        showing: MW,
        globallyUniqueKey: "clientGameMenu",
        children: null === NW || void 0 === NW ? void 0 : NW.content
      })
    }

    function TW(WW) {
      let {
        placement: RW = "bottom"
      } = WW;
      return (0, eW.jsx)("div", {
        id: `clientGameHud-${RW}`,
        style: {
          display: "contents"
        }
      })
    }

    function gR(WW) {
      let {
        children: RW,
        placement: MW = "bottom"
      } = WW;
      const [wW, CW] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        CW(document.getElementById(`clientGameHud-${MW}`))
      }), [MW]), wW ? (0, NW.createPortal)(RW, wW) : null
    }
  },
  8135: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(3578),
      CW = MW(3587);

    function zR(WW) {
      let {
        children: RW,
        showing: MW,
        globallyUniqueKey: zR,
        alwaysMountChildren: AW = !1,
        doGameplayStartStopOnShow: bR = !0
      } = WW;
      return (0, CW.d)(!0, MW, zR), (0, wW.c)(bR, MW), MW || AW ? RW : null
    }
  },
  7672: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      g: () => CW
    });
    let wW = null;
    const CW = function(WW) {
        const RW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wW = RW, () => {
          wW === RW && (wW = null)
        }
      },
      zR = () => {
        var WW;
        return null !== (WW = wW) && void 0 !== WW && WW.canCycle() ? wW.cycle : null
      }
  },
  35012: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      h: () => zR
    });
    const wW = new Map;

    function CW(WW) {
      var RW;
      return null === WW ? null : null !== (RW = wW.get(WW)) && void 0 !== RW ? RW : null
    }

    function zR(WW, RW) {
      return wW.set(WW, RW), () => {
        wW.get(WW) === RW && wW.delete(WW)
      }
    }
  },
  34838: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => IW,
      D: () => gR,
      E: () => PW,
      c: () => zR,
      e: () => iR,
      i: () => YW,
      m: () => bR,
      q: () => tR,
      s: () => JW,
      w: () => BW
    });
    var wW = MW(27),
      CW = MW(33);
    const zR = "clientGameInventoryButtonsChanged",
      AW = new Map;

    function bR() {
      return [...AW.values()].sort(((WW, RW) => {
        var MW, wW;
        return (null !== (MW = WW.order) && void 0 !== MW ? MW : 0) - (null !== (wW = RW.order) && void 0 !== wW ? wW : 0)
      }))
    }
    let yR = null;

    function NW(WW) {
      yR = WW
    }
    let eW = !1;

    function BW(WW) {
      eW = !0;
      try {
        WW.onClick()
      } finally {
        eW = !1
      }
      WW.panel && "clientGame" === wW.b.get("openInGameMenuName") && NW(WW.id)
    }

    function tR() {
      return eW
    }

    function TW() {
      return bR().filter((WW => WW.panel && !WW.disabled))
    }

    function gR(WW) {
      const RW = TW(),
        MW = RW.findIndex((WW => WW.id === yR));
      return !(MW < 0 || RW.length < 2) && (BW(RW[(MW + WW + RW.length) % RW.length]), !0)
    }

    function iR() {
      return null !== yR && TW().length > 1
    }

    function YW() {
      NW(null)
    }

    function JW() {
      "inventory" !== wW.b.get("openInGameMenuName") && NW(null)
    }

    function PW() {
      const WW = yR;
      return NW(null), WW
    }

    function IW(WW) {
      return AW.set(WW.id, WW), CW.k.Sz(zR, bR(), !0), () => {
        AW.get(WW.id) === WW && (AW.delete(WW.id), CW.k.Sz(zR, bR()))
      }
    }
  },
  34830: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      e: () => YW,
      f: () => JW,
      g: () => tR,
      h: () => NW,
      j: () => iR,
      k: () => TW,
      l: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(1115),
      AW = MW(34838);
    const bR = "clientGameUiChanged";
    let yR = null;

    function NW() {
      return yR
    }

    function eW(WW, RW) {
      const MW = {
        content: WW,
        menu: RW
      };
      return yR = MW, CW.k.Sz(bR, yR, !0), () => {
        yR === MW && (yR = null, gR = !1, YW(), CW.k.Sz(bR, null))
      }
    }
    let BW = null;

    function tR() {
      return BW
    }

    function TW(WW) {
      return BW = WW, () => {
        BW === WW && (BW = null)
      }
    }
    let gR = !1;

    function iR() {
      const WW = wW.b.get("openInGameMenuName");
      "clientGame" !== WW && (gR = "inventory" === WW), (0, AW.q)() || (0, AW.i)(), (0, zR.n)("InGameMenu"), wW.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function YW() {
      PW(!1)
    }

    function JW() {
      PW(gR)
    }

    function PW(WW) {
      "clientGame" === wW.b.get("openInGameMenuName") && wW.b.set({
        openInGameMenuName: WW ? "inventory" : null
      }), WW || (0, AW.i)(), gR = !1
    }
  },
  34930: WW => {
    WW.exports = function WW(RW, MW) {
      if (RW === MW) return !0;
      if (RW && MW && "object" == typeof RW && "object" == typeof MW) {
        if (RW.constructor !== MW.constructor) return !1;
        var wW, CW, zR;
        if (Array.isArray(RW)) {
          if ((wW = RW.length) != MW.length) return !1;
          for (CW = wW; 0 !== CW--;)
            if (!WW(RW[CW], MW[CW])) return !1;
          return !0
        }
        if (RW.constructor === RegExp) return RW.source === MW.source && RW.flags === MW.flags;
        if (RW.valueOf !== Object.prototype.valueOf) return RW.valueOf() === MW.valueOf();
        if (RW.toString !== Object.prototype.toString) return RW.toString() === MW.toString();
        if ((wW = (zR = Object.keys(RW)).length) !== Object.keys(MW).length) return !1;
        for (CW = wW; 0 !== CW--;)
          if (!Object.prototype.hasOwnProperty.call(MW, zR[CW])) return !1;
        for (CW = wW; 0 !== CW--;) {
          var AW = zR[CW];
          if (!WW(RW[AW], MW[AW])) return !1
        }
        return !0
      }
      return RW !== RW && MW !== MW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);