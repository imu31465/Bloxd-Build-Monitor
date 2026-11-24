export const id = 125;
export const ids = [125];
export const modules = {
  6738: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => KS
    });
    var tS = gS(1622),
      bS = gS(1653),
      XS = gS(3154),
      xS = gS(2394),
      NS = gS(1528),
      qS = gS(1608),
      uS = gS(1211),
      IS = gS(1125),
      fS = gS(1281),
      kS = gS(1127),
      aS = gS(1181);

    function KS() {
      var SS;
      const {
        t: HS
      } = (0, fS.F)(), {
        pack: gS
      } = (0, tS.z)(), {
        userContext: KS
      } = (0, uS.b)();
      if (gS) {
        const SS = bS.c[gS];
        if (null === SS || void 0 === SS || !SS.purchasable) return (0, aS.jsx)(qS.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const jS = gS ? bS.c[gS] : null,
        GS = gS ? XS.i[(0, xS.k)(gS)] : null,
        CS = void 0 !== (null === jS || void 0 === jS ? void 0 : jS.characterSet) || null !== jS && void 0 !== jS && jS.singleItem ? jS.displayName : `${null!==(SS=null===jS||void 0===jS?void 0:jS.displayName)&&void 0!==SS?SS:gS} Pack`,
        nS = jS ? `Your ${CS} is Ready!` : "Welcome To Super Rank!",
        PS = jS ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        QS = jS ? !KS.getOwnedCosmeticPacks().includes(gS) : !KS.playerHasRank("super"),
        DS = jS ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, aS.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [GS && (0, aS.jsx)(GS, {}), !jS && (0, aS.jsx)(IS.c, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, aS.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: nS
        }), (0, aS.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: PS
        }), QS && (0, aS.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, aS.jsx)(kS.d, {
            name: "circle-info"
          }), (0, aS.jsx)("div", {
            children: DS
          })]
        }), (0, aS.jsx)(qS.LinkPreserveSearch, {
          to: "/",
          children: (0, aS.jsx)(NS.p, {
            className: "PurchaseWelcomeContinue",
            children: HS("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);