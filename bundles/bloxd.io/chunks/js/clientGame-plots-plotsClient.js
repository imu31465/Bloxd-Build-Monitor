export const id = 22;
export const ids = [22];
export const modules = {
  35658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => sJ,
      f: () => nJ,
      j: () => DJ,
      m: () => hJ
    });
    var FJ = ZJ(8557),
      UJ = ZJ(35661),
      eJ = ZJ(35665),
      XJ = ZJ(8068),
      AJ = ZJ(1326),
      qJ = ZJ(47),
      jJ = ZJ(60),
      YJ = ZJ(990);

    function hJ() {
      var JJ;
      return (0, AJ.m)(UJ.b, (0, UJ.m)()), (0, YJ.jsx)(YJ.Fragment, {
        children: null === (JJ = (0, UJ.m)()) || void 0 === JJ ? void 0 : JJ.content
      })
    }

    function DJ(JJ) {
      var cJ;
      let {
        show: ZJ
      } = JJ;
      (0, AJ.m)(UJ.b, (0, UJ.m)());
      const jJ = null === (cJ = (0, UJ.m)()) || void 0 === cJ ? void 0 : cJ.menu;
      return (0, qJ.useEffect)((() => {
        var JJ;
        ZJ || (null === jJ || void 0 === jJ || null === (JJ = jJ.onClose) || void 0 === JJ || JJ.call(jJ), (0, eJ.m)())
      }), [ZJ, jJ]), (0, qJ.useEffect)((() => ZJ ? (0, XJ.f)(eJ.v, eJ.c) : void 0), [ZJ]), (0, YJ.jsx)(FJ.c, {
        showing: ZJ,
        globallyUniqueKey: "clientGameMenu",
        children: null === jJ || void 0 === jJ ? void 0 : jJ.content
      })
    }

    function sJ(JJ) {
      let {
        placement: cJ = "bottom"
      } = JJ;
      return (0, YJ.jsx)("div", {
        id: `clientGameHud-${cJ}`,
        style: {
          display: "contents"
        }
      })
    }

    function nJ(JJ) {
      let {
        children: cJ,
        placement: ZJ = "bottom"
      } = JJ;
      const [FJ, UJ] = (0, qJ.useState)(null);
      return (0, qJ.useEffect)((() => {
        UJ(document.getElementById(`clientGameHud-${ZJ}`))
      }), [ZJ]), FJ ? (0, jJ.createPortal)(cJ, FJ) : null
    }
  },
  8557: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(3957),
      UJ = ZJ(3966);

    function eJ(JJ) {
      let {
        children: cJ,
        showing: ZJ,
        globallyUniqueKey: eJ,
        alwaysMountChildren: XJ = !1,
        doGameplayStartStopOnShow: AJ = !0,
        keepsMovement: qJ = !1
      } = JJ;
      return (0, UJ.c)(!0, ZJ, eJ, qJ), (0, FJ.c)(AJ, ZJ), ZJ || XJ ? cJ : null
    }
  },
  35765: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      e: () => XJ,
      f: () => AJ,
      h: () => qJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1017);
    const eJ = 8,
      XJ = "InGameHeaderContainer",
      AJ = "TopRightElements";

    function qJ(JJ) {
      const [cJ] = (0, UJ.d)(), [ZJ, qJ] = (0, FJ.useState)(!1);
      return (0, FJ.useLayoutEffect)((() => {
        if (!JJ) return;
        const cJ = document.querySelector(`.${XJ}`),
          ZJ = document.querySelector(`.${AJ}`),
          FJ = () => {
            const FJ = JJ.getBoundingClientRect(),
              UJ = cJ ? cJ.getBoundingClientRect().right : 0,
              XJ = ZJ ? ZJ.getBoundingClientRect().left : window.innerWidth,
              AJ = FJ.left < UJ + eJ,
              jJ = FJ.right > XJ - eJ;
            qJ(AJ || jJ)
          };
        FJ();
        const UJ = new ResizeObserver(FJ);
        return UJ.observe(JJ), cJ && UJ.observe(cJ), ZJ && UJ.observe(ZJ), () => {
          UJ.disconnect()
        }
      }), [JJ, cJ]), ZJ
    }
  },
  8068: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      f: () => UJ
    });
    let FJ = null;
    const UJ = function(JJ) {
        const cJ = {
          cycle: JJ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FJ = cJ, () => {
          FJ === cJ && (FJ = null)
        }
      },
      eJ = () => {
        var JJ;
        return null !== (JJ = FJ) && void 0 !== JJ && JJ.canCycle() ? FJ.cycle : null
      }
  },
  35665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => GJ,
      f: () => fJ,
      j: () => AJ,
      l: () => DJ,
      m: () => xJ,
      p: () => hJ,
      t: () => vJ,
      v: () => nJ,
      z: () => rJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17);
    const eJ = "clientGameInventoryButtonsChanged",
      XJ = new Map;

    function AJ() {
      return [...XJ.values()].sort(((JJ, cJ) => {
        var ZJ, FJ;
        return (null !== (ZJ = JJ.order) && void 0 !== ZJ ? ZJ : 0) - (null !== (FJ = cJ.order) && void 0 !== FJ ? FJ : 0)
      }))
    }
    let qJ = null;

    function jJ(JJ) {
      qJ = JJ
    }
    let YJ = !1;

    function hJ(JJ) {
      YJ = !0;
      try {
        JJ.onClick()
      } finally {
        YJ = !1
      }
      JJ.panel && "clientGame" === FJ.d.get("openInGameMenuName") && jJ(JJ.id)
    }

    function DJ() {
      return YJ
    }

    function sJ() {
      return AJ().filter((JJ => JJ.panel && !JJ.disabled))
    }

    function nJ(JJ) {
      const cJ = sJ(),
        ZJ = cJ.findIndex((JJ => JJ.id === qJ));
      return !(ZJ < 0 || cJ.length < 2) && (hJ(cJ[(ZJ + JJ + cJ.length) % cJ.length]), !0)
    }

    function GJ() {
      return null !== qJ && sJ().length > 1
    }

    function fJ() {
      jJ(null)
    }

    function xJ() {
      "inventory" !== FJ.d.get("openInGameMenuName") && jJ(null)
    }

    function rJ() {
      const JJ = qJ;
      return jJ(null), JJ
    }

    function vJ(JJ) {
      return XJ.set(JJ.id, JJ), UJ.i.Uf(eJ, AJ(), !0), () => {
        XJ.get(JJ.id) === JJ && (XJ.delete(JJ.id), UJ.i.Uf(eJ, AJ()))
      }
    }
  },
  35661: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      f: () => fJ,
      j: () => xJ,
      k: () => DJ,
      m: () => jJ,
      n: () => GJ,
      r: () => sJ,
      u: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(35665);
    const AJ = "clientGameUiChanged";
    let qJ = null;

    function jJ() {
      return qJ
    }

    function YJ(JJ, cJ) {
      const ZJ = {
        content: JJ,
        menu: cJ
      };
      return qJ = ZJ, UJ.i.Uf(AJ, qJ, !0), () => {
        qJ === ZJ && (qJ = null, nJ = !1, fJ(), UJ.i.Uf(AJ, null))
      }
    }
    let hJ = null;

    function DJ() {
      return hJ
    }

    function sJ(JJ) {
      return hJ = JJ, () => {
        hJ === JJ && (hJ = null)
      }
    }
    let nJ = !1;

    function GJ() {
      const JJ = FJ.d.get("openInGameMenuName");
      "clientGame" !== JJ && (nJ = "inventory" === JJ), (0, XJ.l)() || (0, XJ.f)(), (0, eJ.h)("InGameMenu"), FJ.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fJ() {
      rJ(!1)
    }

    function xJ() {
      rJ(nJ)
    }

    function rJ(JJ) {
      "clientGame" === FJ.d.get("openInGameMenuName") && FJ.d.set({
        openInGameMenuName: JJ ? "inventory" : null
      }), JJ || (0, XJ.f)(), nJ = !1
    }
  },
  37505: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ,
      i: () => AJ,
      k: () => qJ
    });
    const FJ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      UJ = [0, 1, 2, 0, 2, 3],
      eJ = [4, 5];

    function XJ(JJ, cJ, ZJ, FJ, UJ) {
      for (let XJ = 0; XJ < 6; XJ++) eJ.includes(XJ) === UJ && jJ(JJ, cJ, ZJ, FJ, XJ)
    }

    function AJ(JJ, cJ, ZJ, FJ) {
      for (let UJ = 0; UJ < 6; UJ++) jJ(JJ, cJ, ZJ, FJ, UJ)
    }

    function qJ(JJ, cJ, ZJ, eJ, XJ) {
      for (let AJ = 0; AJ < 6; AJ++)
        for (const qJ of [0, 1]) {
          const [jJ, YJ, hJ] = [qJ + 2, qJ + 1, (qJ + 3) % 4], DJ = JJ.length / 3;
          for (const [cJ, UJ] of [
              [qJ, YJ],
              [jJ, YJ],
              [jJ, hJ],
              [qJ, hJ]
            ])
            for (let qJ = 0; qJ < 3; qJ++) {
              const jJ = FJ[3 * (4 * AJ + cJ) + qJ],
                YJ = FJ[3 * (4 * AJ + UJ) + qJ];
              JJ.push((jJ + (YJ - jJ) * XJ) * eJ / 2 + ZJ[qJ])
            }
          for (const JJ of UJ) cJ.push(DJ + JJ)
        }
    }

    function jJ(JJ, cJ, ZJ, eJ, XJ) {
      let [AJ, qJ, jJ] = ZJ, [YJ, hJ, DJ] = eJ;
      const sJ = JJ.length / 3;
      for (let UJ = 4 * XJ; UJ < 4 * XJ + 4; UJ++) JJ.push(FJ[3 * UJ] * YJ / 2 + AJ, FJ[3 * UJ + 1] * hJ / 2 + qJ, FJ[3 * UJ + 2] * DJ / 2 + jJ);
      for (const FJ of UJ) cJ.push(sJ + FJ)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);