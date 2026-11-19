export const id = 119;
export const ids = [119];
export const modules = {
  6085: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => yY
    });
    var FY = DY(1501),
      AY = DY(1543),
      IY = DY(2614),
      RY = DY(2123),
      OY = DY(1437),
      gY = DY(1488),
      aY = DY(1152),
      vY = DY(1095),
      uY = DY(1211),
      sY = DY(1098),
      iY = DY(1125);

    function yY() {
      var YY;
      const {
        t: rY
      } = (0, uY.C)(), {
        pack: DY
      } = (0, FY.D)(), {
        userContext: yY
      } = (0, aY.d)();
      if (DY) {
        const YY = AY.b[DY];
        if (null === YY || void 0 === YY || !YY.purchasable) return (0, iY.jsx)(gY.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const QY = DY ? AY.b[DY] : null,
        oY = DY ? IY.k[(0, RY.i)(DY)] : null,
        WY = void 0 === (null === QY || void 0 === QY ? void 0 : QY.characterSet) ? `${null!==(YY=null===QY||void 0===QY?void 0:QY.displayName)&&void 0!==YY?YY:DY} Pack` : QY.displayName,
        EY = QY ? `Your ${WY} is Ready!` : "Welcome To Super Rank!",
        mY = QY ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        VY = QY ? !yY.getOwnedCosmeticPacks().includes(DY) : !yY.playerHasRank("super"),
        SY = QY ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, iY.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [oY && (0, iY.jsx)(oY, {}), !QY && (0, iY.jsx)(vY.d, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, iY.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: EY
        }), (0, iY.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: mY
        }), VY && (0, iY.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, iY.jsx)(sY.e, {
            name: "circle-info"
          }), (0, iY.jsx)("div", {
            children: SY
          })]
        }), (0, iY.jsx)(gY.LinkPreserveSearch, {
          to: "/",
          children: (0, iY.jsx)(OY.n, {
            className: "PurchaseWelcomeContinue",
            children: rY("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);