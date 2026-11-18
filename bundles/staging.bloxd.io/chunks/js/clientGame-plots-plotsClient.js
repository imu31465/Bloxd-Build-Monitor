export const id = 22;
export const ids = [22];
export const modules = {
  35589: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      e: () => DB,
      h: () => LB,
      l: () => kB
    });
    var VB = dB(8570),
      yB = dB(35595),
      pB = dB(35601),
      lB = dB(8103),
      JB = dB(1317),
      YB = dB(62),
      gB = dB(72),
      oB = dB(980);

    function kB() {
      var BB;
      return (0, JB.f)(yB.c, (0, yB.k)()), (0, oB.jsx)(oB.Fragment, {
        children: null === (BB = (0, yB.k)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function LB(BB) {
      var TB;
      let {
        show: dB
      } = BB;
      (0, JB.f)(yB.c, (0, yB.k)());
      const gB = null === (TB = (0, yB.k)()) || void 0 === TB ? void 0 : TB.menu;
      return (0, YB.useEffect)((() => {
        var BB;
        dB || (null === gB || void 0 === gB || null === (BB = gB.onClose) || void 0 === BB || BB.call(gB), (0, pB.r)())
      }), [dB, gB]), (0, YB.useEffect)((() => dB ? (0, lB.c)(pB.x, pB.e) : void 0), [dB]), (0, oB.jsx)(VB.d, {
        showing: dB,
        globallyUniqueKey: "clientGameMenu",
        children: null === gB || void 0 === gB ? void 0 : gB.content
      })
    }

    function OB(BB) {
      let {
        placement: TB = "bottom"
      } = BB;
      return (0, oB.jsx)("div", {
        id: `clientGameHud-${TB}`,
        style: {
          display: "contents"
        }
      })
    }

    function DB(BB) {
      let {
        children: TB,
        placement: dB = "bottom"
      } = BB;
      const [VB, yB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        yB(document.getElementById(`clientGameHud-${dB}`))
      }), [dB]), VB ? (0, gB.createPortal)(TB, VB) : null
    }
  },
  8570: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(3948),
      yB = dB(3951);

    function pB(BB) {
      let {
        children: TB,
        showing: dB,
        globallyUniqueKey: pB,
        alwaysMountChildren: lB = !1,
        doGameplayStartStopOnShow: JB = !0,
        keepsMovement: YB = !1
      } = BB;
      return (0, yB.d)(!0, dB, pB, YB), (0, VB.e)(JB, dB), dB || lB ? TB : null
    }
  },
  35700: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      f: () => lB,
      g: () => JB,
      j: () => YB
    });
    var VB = dB(62),
      yB = dB(1002);
    const pB = 8,
      lB = "InGameHeaderContainer",
      JB = "TopRightElements";

    function YB(BB) {
      const [TB] = (0, yB.e)(), [dB, YB] = (0, VB.useState)(!1);
      return (0, VB.useLayoutEffect)((() => {
        if (!BB) return;
        const TB = document.querySelector(`.${lB}`),
          dB = document.querySelector(`.${JB}`),
          VB = () => {
            const VB = BB.getBoundingClientRect(),
              yB = TB ? TB.getBoundingClientRect().right : 0,
              lB = dB ? dB.getBoundingClientRect().left : window.innerWidth,
              JB = VB.left < yB + pB,
              gB = VB.right > lB - pB;
            YB(JB || gB)
          };
        VB();
        const yB = new ResizeObserver(VB);
        return yB.observe(BB), TB && yB.observe(TB), dB && yB.observe(dB), () => {
          yB.disconnect()
        }
      }), [BB, TB]), dB
    }
  },
  8103: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => yB
    });
    let VB = null;
    const yB = function(BB) {
        const TB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return VB = TB, () => {
          VB === TB && (VB = null)
        }
      },
      pB = () => {
        var BB;
        return null !== (BB = VB) && void 0 !== BB && BB.canCycle() ? VB.cycle : null
      }
  },
  35601: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => vB,
      c: () => pB,
      e: () => uB,
      i: () => HB,
      k: () => JB,
      n: () => LB,
      r: () => EB,
      s: () => kB,
      v: () => mB,
      x: () => DB
    });
    var VB = dB(21),
      yB = dB(24);
    const pB = "clientGameInventoryButtonsChanged",
      lB = new Map;

    function JB() {
      return [...lB.values()].sort(((BB, TB) => {
        var dB, VB;
        return (null !== (dB = BB.order) && void 0 !== dB ? dB : 0) - (null !== (VB = TB.order) && void 0 !== VB ? VB : 0)
      }))
    }
    let YB = null;

    function gB(BB) {
      YB = BB
    }
    let oB = !1;

    function kB(BB) {
      oB = !0;
      try {
        BB.onClick()
      } finally {
        oB = !1
      }
      BB.panel && "clientGame" === VB.d.get("openInGameMenuName") && gB(BB.id)
    }

    function LB() {
      return oB
    }

    function OB() {
      return JB().filter((BB => BB.panel && !BB.disabled))
    }

    function DB(BB) {
      const TB = OB(),
        dB = TB.findIndex((BB => BB.id === YB));
      return !(dB < 0 || TB.length < 2) && (kB(TB[(dB + BB + TB.length) % TB.length]), !0)
    }

    function uB() {
      return null !== YB && OB().length > 1
    }

    function HB() {
      gB(null)
    }

    function EB() {
      "inventory" !== VB.d.get("openInGameMenuName") && gB(null)
    }

    function vB() {
      const BB = YB;
      return gB(null), BB
    }

    function mB(BB) {
      return lB.set(BB.id, BB), yB.h.yH(pB, JB(), !0), () => {
        lB.get(BB.id) === BB && (lB.delete(BB.id), yB.h.yH(pB, JB()))
      }
    }
  },
  35595: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => HB,
      h: () => EB,
      j: () => LB,
      k: () => gB,
      o: () => uB,
      p: () => OB,
      r: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(35601);
    const JB = "clientGameUiChanged";
    let YB = null;

    function gB() {
      return YB
    }

    function oB(BB, TB) {
      const dB = {
        content: BB,
        menu: TB
      };
      return YB = dB, yB.h.yH(JB, YB, !0), () => {
        YB === dB && (YB = null, DB = !1, HB(), yB.h.yH(JB, null))
      }
    }
    let kB = null;

    function LB() {
      return kB
    }

    function OB(BB) {
      return kB = BB, () => {
        kB === BB && (kB = null)
      }
    }
    let DB = !1;

    function uB() {
      const BB = VB.d.get("openInGameMenuName");
      "clientGame" !== BB && (DB = "inventory" === BB), (0, lB.n)() || (0, lB.i)(), (0, pB.p)("InGameMenu"), VB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function HB() {
      vB(!1)
    }

    function EB() {
      vB(DB)
    }

    function vB(BB) {
      "clientGame" === VB.d.get("openInGameMenuName") && VB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, lB.i)(), DB = !1
    }
  },
  37470: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      f: () => JB,
      g: () => YB
    });
    const VB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      yB = [0, 1, 2, 0, 2, 3],
      pB = [4, 5];

    function lB(BB, TB, dB, VB, yB) {
      for (let lB = 0; lB < 6; lB++) pB.includes(lB) === yB && gB(BB, TB, dB, VB, lB)
    }

    function JB(BB, TB, dB, VB) {
      for (let yB = 0; yB < 6; yB++) gB(BB, TB, dB, VB, yB)
    }

    function YB(BB, TB, dB, pB, lB) {
      for (let JB = 0; JB < 6; JB++)
        for (const YB of [0, 1]) {
          const [gB, oB, kB] = [YB + 2, YB + 1, (YB + 3) % 4], LB = BB.length / 3;
          for (const [TB, yB] of [
              [YB, oB],
              [gB, oB],
              [gB, kB],
              [YB, kB]
            ])
            for (let YB = 0; YB < 3; YB++) {
              const gB = VB[3 * (4 * JB + TB) + YB],
                oB = VB[3 * (4 * JB + yB) + YB];
              BB.push((gB + (oB - gB) * lB) * pB / 2 + dB[YB])
            }
          for (const BB of yB) TB.push(LB + BB)
        }
    }

    function gB(BB, TB, dB, pB, lB) {
      let [JB, YB, gB] = dB, [oB, kB, LB] = pB;
      const OB = BB.length / 3;
      for (let yB = 4 * lB; yB < 4 * lB + 4; yB++) BB.push(VB[3 * yB] * oB / 2 + JB, VB[3 * yB + 1] * kB / 2 + YB, VB[3 * yB + 2] * LB / 2 + gB);
      for (const VB of yB) TB.push(OB + VB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);