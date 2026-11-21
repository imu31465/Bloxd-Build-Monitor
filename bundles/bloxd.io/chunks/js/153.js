export const id = 153;
export const ids = [153];
export const modules = {
  36238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => AQ,
      i: () => tQ,
      m: () => kQ,
      n: () => bQ,
      o: () => eQ,
      q: () => HQ,
      u: () => GQ,
      v: () => xQ,
      w: () => MQ
    });
    var LQ = wQ(17),
      qQ = wQ(22);
    const oQ = "clientGameInventoryButtonsChanged",
      DQ = new Map;

    function kQ() {
      return [...DQ.values()].sort(((QQ, FQ) => {
        var wQ, LQ;
        return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
      }))
    }
    let vQ = null;

    function mQ(QQ) {
      vQ = QQ
    }
    let uQ = !1;

    function HQ(QQ) {
      uQ = !0;
      try {
        QQ.onClick()
      } finally {
        uQ = !1
      }
      QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
    }

    function bQ() {
      return uQ
    }

    function YQ() {
      return kQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function xQ(QQ) {
      const FQ = YQ(),
        wQ = FQ.findIndex((QQ => QQ.id === vQ));
      return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
    }

    function AQ() {
      return null !== vQ && YQ().length > 1
    }

    function tQ() {
      mQ(null)
    }

    function eQ() {
      "inventory" !== LQ.c.get("openInGameMenuName") && mQ(null)
    }

    function MQ() {
      const QQ = vQ;
      return mQ(null), QQ
    }

    function GQ(QQ) {
      return DQ.set(QQ.id, QQ), qQ.l.GA(oQ, kQ(), !0), () => {
        DQ.get(QQ.id) === QQ && (DQ.delete(QQ.id), qQ.l.GA(oQ, kQ()))
      }
    }
  },
  36235: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      i: () => eQ,
      j: () => bQ,
      k: () => mQ,
      o: () => AQ,
      q: () => YQ,
      u: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(36238);
    const kQ = "clientGameUiChanged";
    let vQ = null;

    function mQ() {
      return vQ
    }

    function uQ(QQ, FQ) {
      const wQ = {
        content: QQ,
        menu: FQ
      };
      return vQ = wQ, qQ.l.GA(kQ, vQ, !0), () => {
        vQ === wQ && (vQ = null, xQ = !1, tQ(), qQ.l.GA(kQ, null))
      }
    }
    let HQ = null;

    function bQ() {
      return HQ
    }

    function YQ(QQ) {
      return HQ = QQ, () => {
        HQ === QQ && (HQ = null)
      }
    }
    let xQ = !1;

    function AQ() {
      const QQ = LQ.c.get("openInGameMenuName");
      "clientGame" !== QQ && (xQ = "inventory" === QQ), (0, DQ.n)() || (0, DQ.i)(), (0, oQ.n)(oQ.d), LQ.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tQ() {
      MQ(!1)
    }

    function eQ() {
      MQ(xQ)
    }

    function MQ(QQ) {
      "clientGame" === LQ.c.get("openInGameMenuName") && LQ.c.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, DQ.i)(), xQ = !1
    }
  },
  8514: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ = wQ(8523),
      qQ = wQ(619),
      oQ = wQ(134);

    function DQ(QQ) {
      var FQ, wQ;
      if ((0, qQ.F)(QQ)) return !0;
      const DQ = null !== (FQ = null === (wQ = oQ.n[oQ.r]) || void 0 === wQ ? void 0 : wQ.adConfig.showRewardedAds) && void 0 !== FQ && FQ;
      for (const qQ in QQ) {
        const FQ = QQ[qQ];
        if (null !== FQ && void 0 !== FQ && FQ.items)
          for (const QQ in FQ.items)
            if ((0, LQ.l)(FQ.items[QQ], DQ)) return !1
      }
      return !0
    }
  },
  41984: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      getClientGameMapKey: () => LQ.j,
      shopIsEmpty: () => qQ.b
    });
    var LQ = wQ(36235),
      qQ = wQ(8514)
  },
  8523: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return !QQ.hidden && (FQ || !QQ.isRewardedAd)
    }

    function qQ(QQ) {
      return "object" === typeof QQ ? QQ.option : QQ
    }

    function oQ(QQ, FQ) {
      var wQ;
      if ("dropdown" === (null === (wQ = QQ.userInput) || void 0 === wQ ? void 0 : wQ.type) && "object" === typeof QQ.userInput.dropdownOptions[0]) {
        for (const wQ of QQ.userInput.dropdownOptions)
          if (qQ(wQ) === FQ) return "object" === typeof wQ ? wQ.cost : QQ.cost;
        console.error("Didn't find matching option for dropdown item. Item:", QQ, "input:", FQ)
      }
      return QQ.cost
    }

    function DQ(QQ, FQ, wQ) {
      var LQ;
      const qQ = null !== (LQ = wQ.excludedPlayers) && void 0 !== LQ ? LQ : [FQ];
      return QQ.filter((QQ => !qQ.includes(QQ)))
    }
    wQ.d(FQ, {
      c: () => oQ,
      f: () => qQ,
      j: () => DQ,
      l: () => LQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);