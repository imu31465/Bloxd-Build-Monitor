export const id = 119;
export const ids = [119];
export const modules = {
  6356: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => xQ
    });
    var LQ = wQ(1515),
      qQ = wQ(1551),
      oQ = wQ(2903),
      DQ = wQ(2194),
      kQ = wQ(1451),
      vQ = wQ(1503),
      mQ = wQ(1140),
      uQ = wQ(1074),
      HQ = wQ(1207),
      bQ = wQ(1079),
      YQ = wQ(1107);

    function xQ() {
      var QQ;
      const {
        t: FQ
      } = (0, HQ.y)(), {
        pack: wQ
      } = (0, LQ.y)(), {
        userContext: xQ
      } = (0, mQ.e)();
      if (wQ) {
        const QQ = qQ.e[wQ];
        if (null === QQ || void 0 === QQ || !QQ.purchasable) return (0, YQ.jsx)(vQ.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const AQ = wQ ? qQ.e[wQ] : null,
        tQ = wQ ? oQ.l[(0, DQ.o)(wQ)] : null,
        eQ = void 0 !== (null === AQ || void 0 === AQ ? void 0 : AQ.characterSet) || null !== AQ && void 0 !== AQ && AQ.singleItem ? AQ.displayName : `${null!==(QQ=null===AQ||void 0===AQ?void 0:AQ.displayName)&&void 0!==QQ?QQ:wQ} Pack`,
        MQ = AQ ? `Your ${eQ} is Ready!` : "Welcome To Super Rank!",
        GQ = AQ ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        pQ = AQ ? !xQ.getOwnedCosmeticPacks().includes(wQ) : !xQ.playerHasRank("super"),
        cQ = AQ ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, YQ.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [tQ && (0, YQ.jsx)(tQ, {}), !AQ && (0, YQ.jsx)(uQ.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, YQ.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: MQ
        }), (0, YQ.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: GQ
        }), pQ && (0, YQ.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, YQ.jsx)(bQ.c, {
            name: "circle-info"
          }), (0, YQ.jsx)("div", {
            children: cQ
          })]
        }), (0, YQ.jsx)(vQ.LinkPreserveSearch, {
          to: "/",
          children: (0, YQ.jsx)(kQ.m, {
            className: "PurchaseWelcomeContinue",
            children: FQ("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);