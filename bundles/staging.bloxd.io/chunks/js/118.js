export const id = 118;
export const ids = [118];
export const modules = {
  6203: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => CU
    });
    var tU = gU(1481),
      pU = gU(1514),
      EU = gU(2685),
      PU = gU(2103),
      TU = gU(1412),
      qU = gU(1475),
      KU = gU(1112),
      cU = gU(1041),
      GU = gU(1181),
      jU = gU(1049),
      uU = gU(1090);

    function CU() {
      var UU;
      const {
        t: RU
      } = (0, GU.B)(), {
        pack: gU
      } = (0, tU.y)(), {
        userContext: CU
      } = (0, KU.e)();
      if (gU) {
        const UU = pU.b[gU];
        if (null === UU || void 0 === UU || !UU.purchasable) return (0, uU.jsx)(qU.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const hU = gU ? pU.b[gU] : null,
        QU = gU ? EU.k[(0, PU.k)(gU)] : null,
        eU = void 0 !== (null === hU || void 0 === hU ? void 0 : hU.characterSet) || null !== hU && void 0 !== hU && hU.singleItem ? hU.displayName : `${null!==(UU=null===hU||void 0===hU?void 0:hU.displayName)&&void 0!==UU?UU:gU} Pack`,
        WU = hU ? `Your ${eU} is Ready!` : "Welcome To Super Rank!",
        fU = hU ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        xU = hU ? !CU.getOwnedCosmeticPacks().includes(gU) : !CU.playerHasRank("super"),
        mU = hU ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, uU.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [QU && (0, uU.jsx)(QU, {}), !hU && (0, uU.jsx)(cU.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, uU.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: WU
        }), (0, uU.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: fU
        }), xU && (0, uU.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, uU.jsx)(jU.c, {
            name: "circle-info"
          }), (0, uU.jsx)("div", {
            children: mU
          })]
        }), (0, uU.jsx)(qU.LinkPreserveSearch, {
          to: "/",
          children: (0, uU.jsx)(TU.j, {
            className: "PurchaseWelcomeContinue",
            children: RU("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);