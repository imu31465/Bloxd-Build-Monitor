export const id = 10;
export const ids = [10];
export const modules = {
  35122: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => EF,
      e: () => QF,
      f: () => eF,
      h: () => iW
    });
    var CF = SF(8210),
      AF = SF(35131),
      uF = SF(35133),
      hF = SF(7700),
      bW = SF(1262),
      dF = SF(46),
      PF = SF(61),
      RF = SF(971);

    function iW() {
      var FF;
      return (0, bW.i)(AF.b, (0, AF.j)()), (0, RF.jsx)(RF.Fragment, {
        children: null === (FF = (0, AF.j)()) || void 0 === FF ? void 0 : FF.content
      })
    }

    function eF(FF) {
      var WF;
      let {
        show: SF
      } = FF;
      (0, bW.i)(AF.b, (0, AF.j)());
      const PF = null === (WF = (0, AF.j)()) || void 0 === WF ? void 0 : WF.menu;
      return (0, dF.useEffect)((() => {
        SF || (null === PF || void 0 === PF || PF.onClose(), (0, uF.r)())
      }), [SF, PF]), (0, dF.useEffect)((() => SF ? (0, hF.i)(uF.A, uF.h) : void 0), [SF]), (0, RF.jsx)(CF.d, {
        showing: SF,
        globallyUniqueKey: "clientGameMenu",
        children: null === PF || void 0 === PF ? void 0 : PF.content
      })
    }

    function EF(FF) {
      let {
        placement: WF = "bottom"
      } = FF;
      return (0, RF.jsx)("div", {
        id: `clientGameHud-${WF}`,
        style: {
          display: "contents"
        }
      })
    }

    function QF(FF) {
      let {
        children: WF,
        placement: SF = "bottom"
      } = FF;
      const [CF, AF] = (0, dF.useState)(null);
      return (0, dF.useEffect)((() => {
        AF(document.getElementById(`clientGameHud-${SF}`))
      }), [SF]), CF ? (0, PF.createPortal)(WF, CF) : null
    }
  },
  8210: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(3618),
      AF = SF(3621);

    function uF(FF) {
      let {
        children: WF,
        showing: SF,
        globallyUniqueKey: uF,
        alwaysMountChildren: hF = !1,
        doGameplayStartStopOnShow: bW = !0
      } = FF;
      return (0, AF.d)(!0, SF, uF), (0, CF.b)(bW, SF), SF || hF ? WF : null
    }
  },
  7700: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      i: () => AF
    });
    let CF = null;
    const AF = function(FF) {
        const WF = {
          cycle: FF,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return CF = WF, () => {
          CF === WF && (CF = null)
        }
      },
      uF = () => {
        var FF;
        return null !== (FF = CF) && void 0 !== FF && FF.canCycle() ? CF.cycle : null
      }
  },
  35310: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      f: () => uF
    });
    const CF = new Map;

    function AF(FF) {
      var WF;
      return null === FF ? null : null !== (WF = CF.get(FF)) && void 0 !== WF ? WF : null
    }

    function uF(FF, WF) {
      return CF.set(FF, WF), () => {
        CF.get(FF) === WF && CF.delete(FF)
      }
    }
  },
  35133: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => QF,
      D: () => TF,
      e: () => uF,
      h: () => rW,
      i: () => gW,
      l: () => bW,
      p: () => eF,
      r: () => tW,
      t: () => iW,
      w: () => aW
    });
    var CF = SF(11),
      AF = SF(20);
    const uF = "clientGameInventoryButtonsChanged",
      hF = new Map;

    function bW() {
      return [...hF.values()].sort(((FF, WF) => {
        var SF, CF;
        return (null !== (SF = FF.order) && void 0 !== SF ? SF : 0) - (null !== (CF = WF.order) && void 0 !== CF ? CF : 0)
      }))
    }
    let dF = null;

    function PF(FF) {
      dF = FF
    }
    let RF = !1;

    function iW(FF) {
      RF = !0;
      try {
        FF.onClick()
      } finally {
        RF = !1
      }
      FF.panel && "clientGame" === CF.b.get("openInGameMenuName") && PF(FF.id)
    }

    function eF() {
      return RF
    }

    function EF() {
      return bW().filter((FF => FF.panel && !FF.disabled))
    }

    function QF(FF) {
      const WF = EF(),
        SF = WF.findIndex((FF => FF.id === dF));
      return !(SF < 0 || WF.length < 2) && (iW(WF[(SF + FF + WF.length) % WF.length]), !0)
    }

    function rW() {
      return null !== dF && EF().length > 1
    }

    function gW() {
      PF(null)
    }

    function tW() {
      "inventory" !== CF.b.get("openInGameMenuName") && PF(null)
    }

    function TF() {
      const FF = dF;
      return PF(null), FF
    }

    function aW(FF) {
      return hF.set(FF.id, FF), AF.j.Uu(uF, bW(), !0), () => {
        hF.get(FF.id) === FF && (hF.delete(FF.id), AF.j.Uu(uF, bW()))
      }
    }
  },
  35131: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => gW,
      e: () => tW,
      h: () => eF,
      j: () => PF,
      n: () => rW,
      p: () => EF,
      r: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(1144),
      hF = SF(35133);
    const bW = "clientGameUiChanged";
    let dF = null;

    function PF() {
      return dF
    }

    function RF(FF, WF) {
      const SF = {
        content: FF,
        menu: WF
      };
      return dF = SF, AF.j.Uu(bW, dF, !0), () => {
        dF === SF && (dF = null, QF = !1, gW(), AF.j.Uu(bW, null))
      }
    }
    let iW = null;

    function eF() {
      return iW
    }

    function EF(FF) {
      return iW = FF, () => {
        iW === FF && (iW = null)
      }
    }
    let QF = !1;

    function rW() {
      const FF = CF.b.get("openInGameMenuName");
      "clientGame" !== FF && (QF = "inventory" === FF), (0, hF.p)() || (0, hF.i)(), (0, uF.h)("InGameMenu"), CF.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gW() {
      TF(!1)
    }

    function tW() {
      TF(QF)
    }

    function TF(FF) {
      "clientGame" === CF.b.get("openInGameMenuName") && CF.b.set({
        openInGameMenuName: FF ? "inventory" : null
      }), FF || (0, hF.i)(), QF = !1
    }
  },
  35213: FF => {
    FF.exports = function FF(WF, SF) {
      if (WF === SF) return !0;
      if (WF && SF && "object" == typeof WF && "object" == typeof SF) {
        if (WF.constructor !== SF.constructor) return !1;
        var CF, AF, uF;
        if (Array.isArray(WF)) {
          if ((CF = WF.length) != SF.length) return !1;
          for (AF = CF; 0 !== AF--;)
            if (!FF(WF[AF], SF[AF])) return !1;
          return !0
        }
        if (WF.constructor === RegExp) return WF.source === SF.source && WF.flags === SF.flags;
        if (WF.valueOf !== Object.prototype.valueOf) return WF.valueOf() === SF.valueOf();
        if (WF.toString !== Object.prototype.toString) return WF.toString() === SF.toString();
        if ((CF = (uF = Object.keys(WF)).length) !== Object.keys(SF).length) return !1;
        for (AF = CF; 0 !== AF--;)
          if (!Object.prototype.hasOwnProperty.call(SF, uF[AF])) return !1;
        for (AF = CF; 0 !== AF--;) {
          var hF = uF[AF];
          if (!FF(WF[hF], SF[hF])) return !1
        }
        return !0
      }
      return WF !== WF && SF !== SF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);