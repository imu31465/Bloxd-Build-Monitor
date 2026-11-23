export const id = 22;
export const ids = [22];
export const modules = {
  36483: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => MC,
      c: () => gC,
      d: () => NC,
      f: () => WC
    });
    var QC = ZC(34153),
      wC = ZC(36488),
      bC = ZC(36490),
      nC = ZC(8735),
      fC = ZC(1383),
      oC = ZC(48),
      qC = ZC(60),
      FC = ZC(1056);

    function WC() {
      var CC;
      return (0, fC.f)(wC.d, (0, wC.q)()), (0, FC.jsx)(FC.Fragment, {
        children: null === (CC = (0, wC.q)()) || void 0 === CC ? void 0 : CC.content
      })
    }

    function NC(CC) {
      var zC;
      let {
        show: ZC
      } = CC;
      (0, fC.f)(wC.d, (0, wC.q)());
      const qC = null === (zC = (0, wC.q)()) || void 0 === zC ? void 0 : zC.menu;
      return (0, oC.useEffect)((() => {
        var CC;
        ZC || (null === qC || void 0 === qC || null === (CC = qC.onClose) || void 0 === CC || CC.call(qC), (0, bC.p)())
      }), [ZC, qC]), (0, oC.useEffect)((() => ZC ? (0, nC.f)(bC.z, bC.g) : void 0), [ZC]), (0, FC.jsx)(QC.d, {
        showing: ZC,
        globallyUniqueKey: "clientGameMenu",
        children: null === qC || void 0 === qC ? void 0 : qC.content
      })
    }

    function MC(CC) {
      let {
        placement: zC = "bottom"
      } = CC;
      return (0, FC.jsx)("div", {
        id: `clientGameHud-${zC}`,
        style: {
          display: "contents"
        }
      })
    }

    function gC(CC) {
      let {
        children: zC,
        placement: ZC = "bottom"
      } = CC;
      const [QC, wC] = (0, oC.useState)(null);
      return (0, oC.useEffect)((() => {
        wC(document.getElementById(`clientGameHud-${ZC}`))
      }), [ZC]), QC ? (0, qC.createPortal)(zC, QC) : null
    }
  },
  34153: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(4473),
      wC = ZC(4479);

    function bC(CC) {
      let {
        children: zC,
        showing: ZC,
        globallyUniqueKey: bC,
        alwaysMountChildren: nC = !1,
        doGameplayStartStopOnShow: fC = !0,
        keepsMovement: oC = !1
      } = CC;
      return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
    }
  },
  36564: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      e: () => nC,
      h: () => fC,
      k: () => oC
    });
    var QC = ZC(48),
      wC = ZC(3099);
    const bC = 8,
      nC = "InGameHeaderContainer",
      fC = "TopRightElements";

    function oC(CC) {
      const [zC] = (0, wC.c)(), [ZC, oC] = (0, QC.useState)(!1);
      return (0, QC.useLayoutEffect)((() => {
        if (!CC) return;
        const zC = document.querySelector(`.${nC}`),
          ZC = document.querySelector(`.${fC}`),
          QC = () => {
            const QC = CC.getBoundingClientRect(),
              wC = zC ? zC.getBoundingClientRect().right : 0,
              nC = ZC ? ZC.getBoundingClientRect().left : window.innerWidth,
              fC = QC.left < wC + bC,
              qC = QC.right > nC - bC;
            oC(fC || qC)
          };
        QC();
        const wC = new ResizeObserver(QC);
        return wC.observe(CC), zC && wC.observe(zC), ZC && wC.observe(ZC), () => {
          wC.disconnect()
        }
      }), [CC, zC]), ZC
    }
  },
  8735: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      f: () => wC
    });
    let QC = null;
    const wC = function(CC) {
        const zC = {
          cycle: CC,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QC = zC, () => {
          QC === zC && (QC = null)
        }
      },
      bC = () => {
        var CC;
        return null !== (CC = QC) && void 0 !== CC && CC.canCycle() ? QC.cycle : null
      }
  },
  36490: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => GC,
      c: () => bC,
      g: () => SC,
      j: () => pC,
      m: () => fC,
      o: () => NC,
      p: () => PC,
      r: () => WC,
      v: () => RC,
      z: () => gC
    });
    var QC = ZC(20),
      wC = ZC(28);
    const bC = "clientGameInventoryButtonsChanged",
      nC = new Map;

    function fC() {
      return [...nC.values()].sort(((CC, zC) => {
        var ZC, QC;
        return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
      }))
    }
    let oC = null;

    function qC(CC) {
      oC = CC
    }
    let FC = !1;

    function WC(CC) {
      FC = !0;
      try {
        CC.onClick()
      } finally {
        FC = !1
      }
      CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
    }

    function NC() {
      return FC
    }

    function MC() {
      return fC().filter((CC => CC.panel && !CC.disabled))
    }

    function gC(CC) {
      const zC = MC(),
        ZC = zC.findIndex((CC => CC.id === oC));
      return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
    }

    function SC() {
      return null !== oC && MC().length > 1
    }

    function pC() {
      qC(null)
    }

    function PC() {
      "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
    }

    function GC() {
      const CC = oC;
      return qC(null), CC
    }

    function RC(CC) {
      return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
        nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
      }
    }
  },
  36488: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => FC,
      d: () => fC,
      h: () => pC,
      k: () => PC,
      o: () => NC,
      q: () => qC,
      u: () => SC,
      y: () => MC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(36490);
    const fC = "clientGameUiChanged";
    let oC = null;

    function qC() {
      return oC
    }

    function FC(CC, zC) {
      const ZC = {
        content: CC,
        menu: zC
      };
      return oC = ZC, wC.o.bp(fC, oC, !0), () => {
        oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
      }
    }
    let WC = null;

    function NC() {
      return WC
    }

    function MC(CC) {
      return WC = CC, () => {
        WC === CC && (WC = null)
      }
    }
    let gC = !1;

    function SC() {
      const CC = QC.b.get("openInGameMenuName");
      "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pC() {
      GC(!1)
    }

    function PC() {
      GC(gC)
    }

    function GC(CC) {
      "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
        openInGameMenuName: CC ? "inventory" : null
      }), CC || (0, nC.j)(), gC = !1
    }
  },
  38349: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      f: () => fC,
      j: () => oC
    });
    const QC = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      wC = [0, 1, 2, 0, 2, 3],
      bC = [4, 5];

    function nC(CC, zC, ZC, QC, wC) {
      for (let nC = 0; nC < 6; nC++) bC.includes(nC) === wC && qC(CC, zC, ZC, QC, nC)
    }

    function fC(CC, zC, ZC, QC) {
      for (let wC = 0; wC < 6; wC++) qC(CC, zC, ZC, QC, wC)
    }

    function oC(CC, zC, ZC, bC, nC) {
      for (let fC = 0; fC < 6; fC++)
        for (const oC of [0, 1]) {
          const [qC, FC, WC] = [oC + 2, oC + 1, (oC + 3) % 4], NC = CC.length / 3;
          for (const [zC, wC] of [
              [oC, FC],
              [qC, FC],
              [qC, WC],
              [oC, WC]
            ])
            for (let oC = 0; oC < 3; oC++) {
              const qC = QC[3 * (4 * fC + zC) + oC],
                FC = QC[3 * (4 * fC + wC) + oC];
              CC.push((qC + (FC - qC) * nC) * bC / 2 + ZC[oC])
            }
          for (const CC of wC) zC.push(NC + CC)
        }
    }

    function qC(CC, zC, ZC, bC, nC) {
      let [fC, oC, qC] = ZC, [FC, WC, NC] = bC;
      const MC = CC.length / 3;
      for (let wC = 4 * nC; wC < 4 * nC + 4; wC++) CC.push(QC[3 * wC] * FC / 2 + fC, QC[3 * wC + 1] * WC / 2 + oC, QC[3 * wC + 2] * NC / 2 + qC);
      for (const QC of wC) zC.push(MC + QC)
    }
  },
  36766: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return null === CC || null === zC ? CC === zC : CC[0] === zC[0] && CC[1] === zC[1] && CC[2] === zC[2]
    }

    function wC(CC) {
      return [CC[0] + .5, CC[1] + .5, CC[2] + .5]
    }
    ZC.d(zC, {
      e: () => wC,
      i: () => QC
    })
  },
  36796: (CC, zC, ZC) => {
    function QC(CC) {
      return CC.includes("Leaf Bed")
    }

    function wC(CC) {
      return / Bed(?: Head)?(?:\||$)/.test(CC) && !QC(CC)
    }

    function bC(CC) {
      return CC.includes(" Strongbed")
    }

    function nC(CC) {
      return QC(CC) || wC(CC) || bC(CC)
    }
    ZC.d(zC, {
      d: () => nC,
      g: () => QC,
      i: () => bC,
      l: () => wC
    })
  },
  36794: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC
    });
    var QC = ZC(36796),
      wC = ZC(9194);
    const bC = [],
      nC = [],
      fC = [],
      oC = [];
    for (const FC of Object.keys(wC.n))(0, QC.g)(FC) ? bC.push(FC) : (0, QC.l)(FC) && nC.push(FC), (0, QC.i)(FC) && fC.push(FC), (FC.includes(" Bed Head") || FC.includes(" Strongbed Head")) && oC.push(FC);
    const qC = {
      leafBeds: bC,
      woolBeds: nC,
      strongBeds: fC,
      beds: [...bC, ...nC, ...fC],
      bedHeads: oC,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);