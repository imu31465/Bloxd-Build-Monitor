export const id = 138;
export const ids = [138];
export const modules = {
  7135: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => aU
    });
    var cU = zU(1577),
      yU = zU(1605),
      QU = zU(3329),
      AU = zU(2401),
      FU = zU(1494),
      oU = zU(1568),
      DU = zU(1129),
      EU = zU(61),
      YU = zU(1390),
      NU = zU(1305);

    function IU(UU) {
      let {
        iconName: XU,
        iconCountPerGroup: zU,
        animation: cU,
        midShowerStart: yU = !1,
        customClass: QU
      } = UU;
      const [AU, FU] = (0, EU.useState)({});
      return (0, EU.useEffect)((() => {
        const UU = {};
        for (const XU of Array.from(Array(3).keys())) {
          UU[XU] = [];
          for (let cU = 0; cU < zU; cU++) UU[XU].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (yU ? -1 : 1) + "s"
          })
        }
        FU(UU)
      }), [zU, yU]), (0, NU.jsx)("div", {
        className: `IconShower IconShowerAnimation${cU} ${null!==QU&&void 0!==QU?QU:""}`,
        children: Object.keys(AU).map((UU => AU[UU].map((zU => (0, NU.jsx)("div", {
          className: `Icon IconGroup${UU}`,
          style: {
            left: zU.left,
            animationDelay: zU.animationDelay
          },
          children: (0, NU.jsx)(YU.d, {
            name: XU
          })
        }, zU.left)))))
      })
    }
    var pU = zU(1193);

    function aU() {
      var UU;
      const {
        t: XU
      } = (0, pU.I)(), {
        pack: zU
      } = (0, cU.C)(), {
        userContext: EU
      } = (0, DU.d)();
      if (zU) {
        const UU = yU.c[zU];
        if (null === UU || void 0 === UU || !UU.purchasable) return (0, NU.jsx)(oU.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const aU = zU ? yU.c[zU] : null,
        tU = zU ? QU.p[(0, AU.m)(zU)] : null,
        gU = void 0 !== (null === aU || void 0 === aU ? void 0 : aU.characterSet) || null !== aU && void 0 !== aU && aU.singleItem ? aU.displayName : `${null!==(UU=null===aU||void 0===aU?void 0:aU.displayName)&&void 0!==UU?UU:zU} Pack`,
        kU = aU ? `Your ${gU} is Ready!` : "Welcome To Super Rank!",
        GU = aU ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        BU = aU ? !EU.getOwnedCosmeticPacks().includes(zU) : !EU.playerHasRank("super"),
        ZU = aU ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, NU.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [tU && (0, NU.jsx)(tU, {}), !aU && (0, NU.jsx)(IU, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, NU.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: kU
        }), (0, NU.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: GU
        }), BU && (0, NU.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, NU.jsx)(YU.d, {
            name: "circle-info"
          }), (0, NU.jsx)("div", {
            children: ZU
          })]
        }), (0, NU.jsx)(oU.LinkPreserveSearch, {
          to: "/",
          children: (0, NU.jsx)(FU.l, {
            className: "PurchaseWelcomeContinue",
            children: XU("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);