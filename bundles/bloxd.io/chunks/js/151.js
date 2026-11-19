export const id = 151;
export const ids = [151];
export const modules = {
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
  8456: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(8463),
      pD = cD(624),
      iD = cD(120);

    function fD(DD) {
      var CD, cD;
      if ((0, pD.C)(DD)) return !0;
      const fD = null !== (CD = null === (cD = iD.j[iD.p]) || void 0 === cD ? void 0 : cD.adConfig.showRewardedAds) && void 0 !== CD && CD;
      for (const pD in DD) {
        const CD = DD[pD];
        if (null !== CD && void 0 !== CD && CD.items)
          for (const DD in CD.items)
            if ((0, ID.i)(CD.items[DD], fD)) return !1
      }
      return !0
    }
  },
  41749: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      getClientGameMapKey: () => ID.m,
      shopIsEmpty: () => pD.b
    });
    var ID = cD(35996),
      pD = cD(8456)
  },
  8463: (DD, CD, cD) => {
    function ID(DD, CD) {
      return !DD.hidden && (CD || !DD.isRewardedAd)
    }

    function pD(DD) {
      return "object" === typeof DD ? DD.option : DD
    }

    function iD(DD, CD) {
      var cD;
      if ("dropdown" === (null === (cD = DD.userInput) || void 0 === cD ? void 0 : cD.type) && "object" === typeof DD.userInput.dropdownOptions[0]) {
        for (const cD of DD.userInput.dropdownOptions)
          if (pD(cD) === CD) return "object" === typeof cD ? cD.cost : DD.cost;
        console.error("Didn't find matching option for dropdown item. Item:", DD, "input:", CD)
      }
      return DD.cost
    }

    function fD(DD, CD, cD) {
      var ID;
      const pD = null !== (ID = cD.excludedPlayers) && void 0 !== ID ? ID : [CD];
      return DD.filter((DD => !pD.includes(DD)))
    }
    cD.d(CD, {
      c: () => iD,
      d: () => pD,
      f: () => fD,
      i: () => ID
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);