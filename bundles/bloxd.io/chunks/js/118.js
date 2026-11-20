export const id = 118;
export const ids = [118];
export const modules = {
  6538: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => vT
    });
    var lT = cT(1535),
      MT = cT(1575),
      KT = cT(2931),
      OT = cT(2308),
      yT = cT(1470),
      fT = cT(1530),
      xT = cT(1130),
      IT = cT(1054),
      AT = cT(1195),
      CT = cT(1061),
      jT = cT(1099);

    function vT() {
      var TT;
      const {
        t: kT
      } = (0, AT.B)(), {
        pack: cT
      } = (0, lT.v)(), {
        userContext: vT
      } = (0, xT.b)();
      if (cT) {
        const TT = MT.c[cT];
        if (null === TT || void 0 === TT || !TT.purchasable) return (0, jT.jsx)(fT.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const tT = cT ? MT.c[cT] : null,
        hT = cT ? KT.p[(0, OT.n)(cT)] : null,
        NT = void 0 !== (null === tT || void 0 === tT ? void 0 : tT.characterSet) || null !== tT && void 0 !== tT && tT.singleItem ? tT.displayName : `${null!==(TT=null===tT||void 0===tT?void 0:tT.displayName)&&void 0!==TT?TT:cT} Pack`,
        QT = tT ? `Your ${NT} is Ready!` : "Welcome To Super Rank!",
        ST = tT ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        DT = tT ? !vT.getOwnedCosmeticPacks().includes(cT) : !vT.playerHasRank("super"),
        aT = tT ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, jT.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [hT && (0, jT.jsx)(hT, {}), !tT && (0, jT.jsx)(IT.d, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, jT.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: QT
        }), (0, jT.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: ST
        }), DT && (0, jT.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, jT.jsx)(CT.e, {
            name: "circle-info"
          }), (0, jT.jsx)("div", {
            children: aT
          })]
        }), (0, jT.jsx)(fT.LinkPreserveSearch, {
          to: "/",
          children: (0, jT.jsx)(yT.m, {
            className: "PurchaseWelcomeContinue",
            children: kT("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);