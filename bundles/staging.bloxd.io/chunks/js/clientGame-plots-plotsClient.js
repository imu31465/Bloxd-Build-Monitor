export const id = 22;
export const ids = [22];
export const modules = {
  35994: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      e: () => tD,
      f: () => yD,
      h: () => BD
    });
    var ID = cD(9041),
      pD = cD(35996),
      iD = cD(36002),
      fD = cD(8394),
      bD = cD(1440),
      QD = cD(53),
      wD = cD(62),
      SD = cD(1093);

    function BD() {
      var DD;
      return (0, bD.g)(pD.b, (0, pD.o)()), (0, SD.jsx)(SD.Fragment, {
        children: null === (DD = (0, pD.o)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function yD(DD) {
      var CD;
      let {
        show: cD
      } = DD;
      (0, bD.g)(pD.b, (0, pD.o)());
      const wD = null === (CD = (0, pD.o)()) || void 0 === CD ? void 0 : CD.menu;
      return (0, QD.useEffect)((() => {
        var DD;
        cD || (null === wD || void 0 === wD || null === (DD = wD.onClose) || void 0 === DD || DD.call(wD), (0, iD.q)())
      }), [cD, wD]), (0, QD.useEffect)((() => cD ? (0, fD.i)(iD.B, iD.e) : void 0), [cD]), (0, SD.jsx)(ID.c, {
        showing: cD,
        globallyUniqueKey: "clientGameMenu",
        children: null === wD || void 0 === wD ? void 0 : wD.content
      })
    }

    function MD(DD) {
      let {
        placement: CD = "bottom"
      } = DD;
      return (0, SD.jsx)("div", {
        id: `clientGameHud-${CD}`,
        style: {
          display: "contents"
        }
      })
    }

    function tD(DD) {
      let {
        children: CD,
        placement: cD = "bottom"
      } = DD;
      const [ID, pD] = (0, QD.useState)(null);
      return (0, QD.useEffect)((() => {
        pD(document.getElementById(`clientGameHud-${cD}`))
      }), [cD]), ID ? (0, wD.createPortal)(CD, ID) : null
    }
  },
  9041: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(4329),
      pD = cD(4337);

    function iD(DD) {
      let {
        children: CD,
        showing: cD,
        globallyUniqueKey: iD,
        alwaysMountChildren: fD = !1,
        doGameplayStartStopOnShow: bD = !0,
        keepsMovement: QD = !1
      } = DD;
      return (0, pD.e)(!0, cD, iD, QD), (0, ID.b)(bD, cD), cD || fD ? CD : null
    }
  },
  36085: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      g: () => fD,
      h: () => bD,
      i: () => QD
    });
    var ID = cD(53),
      pD = cD(1113);
    const iD = 8,
      fD = "InGameHeaderContainer",
      bD = "TopRightElements";

    function QD(DD) {
      const [CD] = (0, pD.b)(), [cD, QD] = (0, ID.useState)(!1);
      return (0, ID.useLayoutEffect)((() => {
        if (!DD) return;
        const CD = document.querySelector(`.${fD}`),
          cD = document.querySelector(`.${bD}`),
          ID = () => {
            const ID = DD.getBoundingClientRect(),
              pD = CD ? CD.getBoundingClientRect().right : 0,
              fD = cD ? cD.getBoundingClientRect().left : window.innerWidth,
              bD = ID.left < pD + iD,
              wD = ID.right > fD - iD;
            QD(bD || wD)
          };
        ID();
        const pD = new ResizeObserver(ID);
        return pD.observe(DD), CD && pD.observe(CD), cD && pD.observe(cD), () => {
          pD.disconnect()
        }
      }), [DD, CD]), cD
    }
  },
  8394: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      i: () => pD
    });
    let ID = null;
    const pD = function(DD) {
        const CD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ID = CD, () => {
          ID === CD && (ID = null)
        }
      },
      iD = () => {
        var DD;
        return null !== (DD = ID) && void 0 !== DD && DD.canCycle() ? ID.cycle : null
      }
  },
  36002: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => tD,
      C: () => ND,
      b: () => iD,
      e: () => ZD,
      i: () => oD,
      l: () => bD,
      p: () => yD,
      q: () => vD,
      t: () => BD,
      x: () => gD
    });
    var ID = cD(16),
      pD = cD(20);
    const iD = "clientGameInventoryButtonsChanged",
      fD = new Map;

    function bD() {
      return [...fD.values()].sort(((DD, CD) => {
        var cD, ID;
        return (null !== (cD = DD.order) && void 0 !== cD ? cD : 0) - (null !== (ID = CD.order) && void 0 !== ID ? ID : 0)
      }))
    }
    let QD = null;

    function wD(DD) {
      QD = DD
    }
    let SD = !1;

    function BD(DD) {
      SD = !0;
      try {
        DD.onClick()
      } finally {
        SD = !1
      }
      DD.panel && "clientGame" === ID.d.get("openInGameMenuName") && wD(DD.id)
    }

    function yD() {
      return SD
    }

    function MD() {
      return bD().filter((DD => DD.panel && !DD.disabled))
    }

    function tD(DD) {
      const CD = MD(),
        cD = CD.findIndex((DD => DD.id === QD));
      return !(cD < 0 || CD.length < 2) && (BD(CD[(cD + DD + CD.length) % CD.length]), !0)
    }

    function ZD() {
      return null !== QD && MD().length > 1
    }

    function oD() {
      wD(null)
    }

    function vD() {
      "inventory" !== ID.d.get("openInGameMenuName") && wD(null)
    }

    function ND() {
      const DD = QD;
      return wD(null), DD
    }

    function gD(DD) {
      return fD.set(DD.id, DD), pD.i.Uo(iD, bD(), !0), () => {
        fD.get(DD.id) === DD && (fD.delete(DD.id), pD.i.Uo(iD, bD()))
      }
    }
  },
  35996: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      e: () => oD,
      i: () => vD,
      m: () => yD,
      o: () => wD,
      s: () => ZD,
      u: () => MD,
      v: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(36002);
    const bD = "clientGameUiChanged";
    let QD = null;

    function wD() {
      return QD
    }

    function SD(DD, CD) {
      const cD = {
        content: DD,
        menu: CD
      };
      return QD = cD, pD.i.Uo(bD, QD, !0), () => {
        QD === cD && (QD = null, tD = !1, oD(), pD.i.Uo(bD, null))
      }
    }
    let BD = null;

    function yD() {
      return BD
    }

    function MD(DD) {
      return BD = DD, () => {
        BD === DD && (BD = null)
      }
    }
    let tD = !1;

    function ZD() {
      const DD = ID.d.get("openInGameMenuName");
      "clientGame" !== DD && (tD = "inventory" === DD), (0, fD.p)() || (0, fD.i)(), (0, iD.p)(iD.e), ID.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oD() {
      ND(!1)
    }

    function vD() {
      ND(tD)
    }

    function ND(DD) {
      "clientGame" === ID.d.get("openInGameMenuName") && ID.d.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, fD.i)(), tD = !1
    }
  },
  37892: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD,
      g: () => bD,
      j: () => QD
    });
    const ID = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      pD = [0, 1, 2, 0, 2, 3],
      iD = [4, 5];

    function fD(DD, CD, cD, ID, pD) {
      for (let fD = 0; fD < 6; fD++) iD.includes(fD) === pD && wD(DD, CD, cD, ID, fD)
    }

    function bD(DD, CD, cD, ID) {
      for (let pD = 0; pD < 6; pD++) wD(DD, CD, cD, ID, pD)
    }

    function QD(DD, CD, cD, iD, fD) {
      for (let bD = 0; bD < 6; bD++)
        for (const QD of [0, 1]) {
          const [wD, SD, BD] = [QD + 2, QD + 1, (QD + 3) % 4], yD = DD.length / 3;
          for (const [CD, pD] of [
              [QD, SD],
              [wD, SD],
              [wD, BD],
              [QD, BD]
            ])
            for (let QD = 0; QD < 3; QD++) {
              const wD = ID[3 * (4 * bD + CD) + QD],
                SD = ID[3 * (4 * bD + pD) + QD];
              DD.push((wD + (SD - wD) * fD) * iD / 2 + cD[QD])
            }
          for (const DD of pD) CD.push(yD + DD)
        }
    }

    function wD(DD, CD, cD, iD, fD) {
      let [bD, QD, wD] = cD, [SD, BD, yD] = iD;
      const MD = DD.length / 3;
      for (let pD = 4 * fD; pD < 4 * fD + 4; pD++) DD.push(ID[3 * pD] * SD / 2 + bD, ID[3 * pD + 1] * BD / 2 + QD, ID[3 * pD + 2] * yD / 2 + wD);
      for (const ID of pD) CD.push(MD + ID)
    }
  },
  36252: (DD, CD, cD) => {
    function ID(DD, CD) {
      return null === DD || null === CD ? DD === CD : DD[0] === CD[0] && DD[1] === CD[1] && DD[2] === CD[2]
    }

    function pD(DD) {
      return [DD[0] + .5, DD[1] + .5, DD[2] + .5]
    }
    cD.d(CD, {
      b: () => pD,
      f: () => ID
    })
  },
  36300: (DD, CD, cD) => {
    function ID(DD) {
      return DD.includes("Leaf Bed")
    }

    function pD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !ID(DD)
    }

    function iD(DD) {
      return DD.includes(" Strongbed")
    }

    function fD(DD) {
      return ID(DD) || pD(DD) || iD(DD)
    }
    cD.d(CD, {
      b: () => fD,
      e: () => ID,
      h: () => iD,
      i: () => pD
    })
  },
  36292: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => wD
    });
    var ID = cD(36300),
      pD = cD(9141);
    const iD = [],
      fD = [],
      bD = [],
      QD = [];
    for (const SD of Object.keys(pD.n))(0, ID.e)(SD) ? iD.push(SD) : (0, ID.i)(SD) && fD.push(SD), (0, ID.h)(SD) && bD.push(SD), (SD.includes(" Bed Head") || SD.includes(" Strongbed Head")) && QD.push(SD);
    const wD = {
      leafBeds: iD,
      woolBeds: fD,
      strongBeds: bD,
      beds: [...iD, ...fD, ...bD],
      bedHeads: QD,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);