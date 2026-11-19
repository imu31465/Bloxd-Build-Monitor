export const id = 119;
export const ids = [119];
export const modules = {
  6025: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => cT
    });
    var iT = IT(1484),
      zT = IT(1509),
      kT = IT(2603),
      WT = IT(2080),
      XT = IT(1408),
      BT = IT(1468),
      FT = IT(1110),
      ST = IT(1051),
      DT = IT(1171),
      LT = IT(1055),
      xT = IT(1083);

    function cT() {
      var TT;
      const {
        t: oT
      } = (0, DT.t)(), {
        pack: IT
      } = (0, iT.C)(), {
        userContext: cT
      } = (0, FT.b)();
      if (IT) {
        const TT = zT.b[IT];
        if (null === TT || void 0 === TT || !TT.purchasable) return (0, xT.jsx)(BT.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const KT = IT ? zT.b[IT] : null,
        MT = IT ? kT.i[(0, WT.i)(IT)] : null,
        rT = void 0 === (null === KT || void 0 === KT ? void 0 : KT.characterSet) ? `${null!==(TT=null===KT||void 0===KT?void 0:KT.displayName)&&void 0!==TT?TT:IT} Pack` : KT.displayName,
        AT = KT ? `Your ${rT} is Ready!` : "Welcome To Super Rank!",
        gT = KT ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        hT = KT ? !cT.getOwnedCosmeticPacks().includes(IT) : !cT.playerHasRank("super"),
        wT = KT ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, xT.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [MT && (0, xT.jsx)(MT, {}), !KT && (0, xT.jsx)(ST.d, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, xT.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: AT
        }), (0, xT.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: gT
        }), hT && (0, xT.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, xT.jsx)(LT.e, {
            name: "circle-info"
          }), (0, xT.jsx)("div", {
            children: wT
          })]
        }), (0, xT.jsx)(BT.LinkPreserveSearch, {
          to: "/",
          children: (0, xT.jsx)(XT.m, {
            className: "PurchaseWelcomeContinue",
            children: oT("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);