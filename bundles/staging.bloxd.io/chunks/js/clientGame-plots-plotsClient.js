export const id = 22;
export const ids = [22];
export const modules = {
  36577: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => fD,
      g: () => ID,
      i: () => UD,
      l: () => AD
    });
    var pD = wD(34206),
      sD = wD(36580),
      KD = wD(36586),
      rD = wD(8726),
      LD = wD(1442),
      cD = wD(58),
      gD = wD(79),
      RD = wD(1096);

    function AD() {
      var DD;
      return (0, LD.k)(sD.c, (0, sD.p)()), (0, RD.jsx)(RD.Fragment, {
        children: null === (DD = (0, sD.p)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function UD(DD) {
      var zD;
      let {
        show: wD
      } = DD;
      (0, LD.k)(sD.c, (0, sD.p)());
      const gD = null === (zD = (0, sD.p)()) || void 0 === zD ? void 0 : zD.menu;
      return (0, cD.useEffect)((() => {
        var DD;
        wD || (null === gD || void 0 === gD || null === (DD = gD.onClose) || void 0 === DD || DD.call(gD), (0, KD.q)())
      }), [wD, gD]), (0, cD.useEffect)((() => wD ? (0, rD.g)(KD.y, KD.h) : void 0), [wD]), (0, RD.jsx)(pD.d, {
        showing: wD,
        globallyUniqueKey: "clientGameMenu",
        children: null === gD || void 0 === gD ? void 0 : gD.content
      })
    }

    function fD(DD) {
      let {
        placement: zD = "bottom"
      } = DD;
      return (0, RD.jsx)("div", {
        id: `clientGameHud-${zD}`,
        style: {
          display: "contents"
        }
      })
    }

    function ID(DD) {
      let {
        children: zD,
        placement: wD = "bottom"
      } = DD;
      const [pD, sD] = (0, cD.useState)(null);
      return (0, cD.useEffect)((() => {
        sD(document.getElementById(`clientGameHud-${wD}`))
      }), [wD]), pD ? (0, gD.createPortal)(zD, pD) : null
    }
  },
  34206: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(4555),
      sD = wD(4562);

    function KD(DD) {
      let {
        children: zD,
        showing: wD,
        globallyUniqueKey: KD,
        alwaysMountChildren: rD = !1,
        doGameplayStartStopOnShow: LD = !0,
        keepsMovement: cD = !1
      } = DD;
      return (0, sD.e)(!0, wD, KD, cD), (0, pD.b)(LD, wD), wD || rD ? zD : null
    }
  },
  36658: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      e: () => rD,
      f: () => LD,
      i: () => cD
    });
    var pD = wD(58),
      sD = wD(3089);
    const KD = 8,
      rD = "InGameHeaderContainer",
      LD = "TopRightElements";

    function cD(DD) {
      const [zD] = (0, sD.d)(), [wD, cD] = (0, pD.useState)(!1);
      return (0, pD.useLayoutEffect)((() => {
        if (!DD) return;
        const zD = document.querySelector(`.${rD}`),
          wD = document.querySelector(`.${LD}`),
          pD = () => {
            const pD = DD.getBoundingClientRect(),
              sD = zD ? zD.getBoundingClientRect().right : 0,
              rD = wD ? wD.getBoundingClientRect().left : window.innerWidth,
              LD = pD.left < sD + KD,
              gD = pD.right > rD - KD;
            cD(LD || gD)
          };
        pD();
        const sD = new ResizeObserver(pD);
        return sD.observe(DD), zD && sD.observe(zD), wD && sD.observe(wD), () => {
          sD.disconnect()
        }
      }), [DD, zD]), wD
    }
  },
  8726: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      g: () => sD
    });
    let pD = null;
    const sD = function(DD) {
        const zD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pD = zD, () => {
          pD === zD && (pD = null)
        }
      },
      KD = () => {
        var DD;
        return null !== (DD = pD) && void 0 !== DD && DD.canCycle() ? pD.cycle : null
      }
  },
  36586: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => BD,
      j: () => GD,
      k: () => LD,
      m: () => UD,
      q: () => hD,
      s: () => AD,
      v: () => MD,
      y: () => ID,
      z: () => nD
    });
    var pD = wD(20),
      sD = wD(25);
    const KD = "clientGameInventoryButtonsChanged",
      rD = new Map;

    function LD() {
      return [...rD.values()].sort(((DD, zD) => {
        var wD, pD;
        return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
      }))
    }
    let cD = null;

    function gD(DD) {
      cD = DD
    }
    let RD = !1;

    function AD(DD) {
      RD = !0;
      try {
        DD.onClick()
      } finally {
        RD = !1
      }
      DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
    }

    function UD() {
      return RD
    }

    function fD() {
      return LD().filter((DD => DD.panel && !DD.disabled))
    }

    function ID(DD) {
      const zD = fD(),
        wD = zD.findIndex((DD => DD.id === cD));
      return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
    }

    function BD() {
      return null !== cD && fD().length > 1
    }

    function GD() {
      gD(null)
    }

    function hD() {
      "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
    }

    function nD() {
      const DD = cD;
      return gD(null), DD
    }

    function MD(DD) {
      return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
        rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
      }
    }
  },
  36580: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => GD,
      i: () => hD,
      m: () => UD,
      p: () => gD,
      r: () => BD,
      t: () => fD,
      w: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(36586);
    const LD = "clientGameUiChanged";
    let cD = null;

    function gD() {
      return cD
    }

    function RD(DD, zD) {
      const wD = {
        content: DD,
        menu: zD
      };
      return cD = wD, sD.l.KG(LD, cD, !0), () => {
        cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
      }
    }
    let AD = null;

    function UD() {
      return AD
    }

    function fD(DD) {
      return AD = DD, () => {
        AD === DD && (AD = null)
      }
    }
    let ID = !1;

    function BD() {
      const DD = pD.e.get("openInGameMenuName");
      "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GD() {
      nD(!1)
    }

    function hD() {
      nD(ID)
    }

    function nD(DD) {
      "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, rD.j)(), ID = !1
    }
  },
  38502: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      g: () => LD,
      j: () => cD
    });
    const pD = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      sD = [0, 1, 2, 0, 2, 3],
      KD = [4, 5];

    function rD(DD, zD, wD, pD, sD) {
      for (let rD = 0; rD < 6; rD++) KD.includes(rD) === sD && gD(DD, zD, wD, pD, rD)
    }

    function LD(DD, zD, wD, pD) {
      for (let sD = 0; sD < 6; sD++) gD(DD, zD, wD, pD, sD)
    }

    function cD(DD, zD, wD, KD, rD) {
      for (let LD = 0; LD < 6; LD++)
        for (const cD of [0, 1]) {
          const [gD, RD, AD] = [cD + 2, cD + 1, (cD + 3) % 4], UD = DD.length / 3;
          for (const [zD, sD] of [
              [cD, RD],
              [gD, RD],
              [gD, AD],
              [cD, AD]
            ])
            for (let cD = 0; cD < 3; cD++) {
              const gD = pD[3 * (4 * LD + zD) + cD],
                RD = pD[3 * (4 * LD + sD) + cD];
              DD.push((gD + (RD - gD) * rD) * KD / 2 + wD[cD])
            }
          for (const DD of sD) zD.push(UD + DD)
        }
    }

    function gD(DD, zD, wD, KD, rD) {
      let [LD, cD, gD] = wD, [RD, AD, UD] = KD;
      const fD = DD.length / 3;
      for (let sD = 4 * rD; sD < 4 * rD + 4; sD++) DD.push(pD[3 * sD] * RD / 2 + LD, pD[3 * sD + 1] * AD / 2 + cD, pD[3 * sD + 2] * UD / 2 + gD);
      for (const pD of sD) zD.push(fD + pD)
    }
  },
  36855: (DD, zD, wD) => {
    function pD(DD, zD) {
      return null === DD || null === zD ? DD === zD : DD[0] === zD[0] && DD[1] === zD[1] && DD[2] === zD[2]
    }

    function sD(DD) {
      return [DD[0] + .5, DD[1] + .5, DD[2] + .5]
    }
    wD.d(zD, {
      d: () => sD,
      f: () => pD
    })
  },
  36897: (DD, zD, wD) => {
    function pD(DD) {
      return DD.includes("Leaf Bed")
    }

    function sD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !pD(DD)
    }

    function KD(DD) {
      return DD.includes(" Strongbed")
    }

    function rD(DD) {
      return pD(DD) || sD(DD) || KD(DD)
    }
    wD.d(zD, {
      b: () => rD,
      d: () => pD,
      e: () => KD,
      f: () => sD
    })
  },
  36891: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(36897),
      sD = wD(9198);
    const KD = [],
      rD = [],
      LD = [],
      cD = [];
    for (const RD of Object.keys(sD.q))(0, pD.d)(RD) ? KD.push(RD) : (0, pD.f)(RD) && rD.push(RD), (0, pD.e)(RD) && LD.push(RD), (RD.includes(" Bed Head") || RD.includes(" Strongbed Head")) && cD.push(RD);
    const gD = {
      leafBeds: KD,
      woolBeds: rD,
      strongBeds: LD,
      beds: [...KD, ...rD, ...LD],
      bedHeads: cD,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);