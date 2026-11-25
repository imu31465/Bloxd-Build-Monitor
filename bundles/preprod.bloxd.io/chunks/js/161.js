export const id = 161;
export const ids = [161];
export const modules = {
  36906: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      b: () => TQ,
      f: () => BQ,
      h: () => yQ,
      j: () => sQ,
      n: () => rQ,
      r: () => VQ,
      t: () => JQ,
      u: () => pQ,
      y: () => jQ
    });
    var wQ = XQ(26),
      qQ = XQ(31);
    const TQ = "clientGameInventoryButtonsChanged",
      zQ = new Map;

    function sQ() {
      return [...zQ.values()].sort(((QQ, WQ) => {
        var XQ, wQ;
        return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
      }))
    }
    let FQ = null;

    function PQ(QQ) {
      FQ = QQ
    }
    let gQ = !1;

    function JQ(QQ) {
      gQ = !0;
      try {
        QQ.onClick()
      } finally {
        gQ = !1
      }
      QQ.panel && "clientGame" === wQ.b.get("openInGameMenuName") && PQ(QQ.id)
    }

    function rQ() {
      return gQ
    }

    function IQ() {
      return sQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function jQ(QQ) {
      const WQ = IQ(),
        XQ = WQ.findIndex((QQ => QQ.id === FQ));
      return !(XQ < 0 || WQ.length < 2) && (JQ(WQ[(XQ + QQ + WQ.length) % WQ.length]), !0)
    }

    function BQ() {
      return null !== FQ && IQ().length > 1
    }

    function yQ() {
      PQ(null)
    }

    function VQ() {
      "inventory" !== wQ.b.get("openInGameMenuName") && PQ(null)
    }

    function DQ() {
      const QQ = FQ;
      return PQ(null), QQ
    }

    function pQ(QQ) {
      return zQ.set(QQ.id, QQ), qQ.k.mB(TQ, sQ(), !0), () => {
        zQ.get(QQ.id) === QQ && (zQ.delete(QQ.id), qQ.k.mB(TQ, sQ()))
      }
    }
  },
  36900: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => gQ,
      c: () => sQ,
      g: () => DQ,
      j: () => yQ,
      n: () => VQ,
      q: () => rQ,
      s: () => PQ,
      u: () => BQ,
      y: () => IQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(36906);
    const sQ = "clientGameUiChanged";
    let FQ = null;

    function PQ() {
      return FQ
    }

    function gQ(QQ, WQ) {
      const XQ = {
        content: QQ,
        menu: WQ
      };
      return FQ = XQ, qQ.k.mB(sQ, FQ, !0), () => {
        FQ === XQ && (FQ = null, jQ = !1, yQ(), qQ.k.mB(sQ, null))
      }
    }
    let JQ = null;

    function rQ() {
      return JQ
    }

    function IQ(QQ) {
      return JQ = QQ, () => {
        JQ === QQ && (JQ = null)
      }
    }
    let jQ = !1;

    function BQ() {
      const QQ = wQ.b.get("openInGameMenuName");
      "clientGame" !== QQ && (jQ = "inventory" === QQ), (0, zQ.n)() || (0, zQ.h)(), (0, TQ.z)(TQ.e), wQ.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yQ() {
      pQ(!1)
    }

    function VQ() {
      pQ(jQ)
    }

    function DQ() {
      jQ && pQ(!1)
    }

    function pQ(QQ) {
      "clientGame" === wQ.b.get("openInGameMenuName") && wQ.b.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, zQ.h)(), jQ = !1
    }
  },
  9145: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(9153),
      qQ = XQ(663),
      TQ = XQ(158);

    function zQ(QQ) {
      var WQ, XQ;
      if ((0, qQ.G)(QQ)) return !0;
      const zQ = null !== (WQ = null === (XQ = TQ.siteUsedData[TQ.siteUsed]) || void 0 === XQ ? void 0 : XQ.adConfig.showRewardedAds) && void 0 !== WQ && WQ;
      for (const qQ in QQ) {
        const WQ = QQ[qQ];
        if (null !== WQ && void 0 !== WQ && WQ.items)
          for (const QQ in WQ.items)
            if ((0, wQ.k)(WQ.items[QQ], zQ)) return !1
      }
      return !0
    }
  },
  60851: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      getClientGameMapKey: () => wQ.q,
      shopIsEmpty: () => qQ.b
    });
    var wQ = XQ(36900),
      qQ = XQ(9145)
  },
  9153: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return !QQ.hidden && (WQ || !QQ.isRewardedAd)
    }

    function qQ(QQ) {
      return "object" === typeof QQ ? QQ.option : QQ
    }

    function TQ(QQ, WQ) {
      var XQ;
      if ("dropdown" === (null === (XQ = QQ.userInput) || void 0 === XQ ? void 0 : XQ.type) && "object" === typeof QQ.userInput.dropdownOptions[0]) {
        for (const XQ of QQ.userInput.dropdownOptions)
          if (qQ(XQ) === WQ) return "object" === typeof XQ ? XQ.cost : QQ.cost;
        console.error("Didn't find matching option for dropdown item. Item:", QQ, "input:", WQ)
      }
      return QQ.cost
    }

    function zQ(QQ, WQ, XQ) {
      var wQ;
      const qQ = null !== (wQ = XQ.excludedPlayers) && void 0 !== wQ ? wQ : [WQ];
      return QQ.filter((QQ => !qQ.includes(QQ)))
    }
    XQ.d(WQ, {
      c: () => TQ,
      e: () => qQ,
      i: () => zQ,
      k: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);