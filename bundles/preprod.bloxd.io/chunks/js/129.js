export const id = 129;
export const ids = [129];
export const modules = {
  6932: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => jQ
    });
    var wQ = XQ(1581),
      qQ = XQ(1620),
      TQ = XQ(3255),
      zQ = XQ(2366),
      sQ = XQ(1507),
      FQ = XQ(1567),
      PQ = XQ(1162),
      gQ = XQ(1085),
      JQ = XQ(1226),
      rQ = XQ(1094),
      IQ = XQ(1145);

    function jQ() {
      var QQ;
      const {
        t: WQ
      } = (0, JQ.C)(), {
        pack: XQ
      } = (0, wQ.E)(), {
        userContext: jQ
      } = (0, PQ.c)();
      if (XQ) {
        const QQ = qQ.d[XQ];
        if (null === QQ || void 0 === QQ || !QQ.purchasable) return (0, IQ.jsx)(FQ.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const BQ = XQ ? qQ.d[XQ] : null,
        yQ = XQ ? TQ.l[(0, zQ.i)(XQ)] : null,
        VQ = void 0 !== (null === BQ || void 0 === BQ ? void 0 : BQ.characterSet) || null !== BQ && void 0 !== BQ && BQ.singleItem ? BQ.displayName : `${null!==(QQ=null===BQ||void 0===BQ?void 0:BQ.displayName)&&void 0!==QQ?QQ:XQ} Pack`,
        DQ = BQ ? `Your ${VQ} is Ready!` : "Welcome To Super Rank!",
        pQ = BQ ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        GQ = BQ ? !jQ.getOwnedCosmeticPacks().includes(XQ) : !jQ.playerHasRank("super"),
        UQ = BQ ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, IQ.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [yQ && (0, IQ.jsx)(yQ, {}), !BQ && (0, IQ.jsx)(gQ.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, IQ.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: DQ
        }), (0, IQ.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: pQ
        }), GQ && (0, IQ.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, IQ.jsx)(rQ.d, {
            name: "circle-info"
          }), (0, IQ.jsx)("div", {
            children: UQ
          })]
        }), (0, IQ.jsx)(FQ.LinkPreserveSearch, {
          to: "/",
          children: (0, IQ.jsx)(sQ.s, {
            className: "PurchaseWelcomeContinue",
            children: WQ("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);