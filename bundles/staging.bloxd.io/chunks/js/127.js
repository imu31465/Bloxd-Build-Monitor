export const id = 127;
export const ids = [127];
export const modules = {
  6495: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => JB
    });
    var QB = zB(1547),
      nB = zB(1583),
      dB = zB(3109),
      IB = zB(2352),
      NB = zB(1478),
      uB = zB(1543),
      UB = zB(1169),
      aB = zB(1100),
      pB = zB(1240),
      rB = zB(1108),
      sB = zB(1148);

    function JB() {
      var BB;
      const {
        t: jB
      } = (0, pB.D)(), {
        pack: zB
      } = (0, QB.w)(), {
        userContext: JB
      } = (0, UB.d)();
      if (zB) {
        const BB = nB.e[zB];
        if (null === BB || void 0 === BB || !BB.purchasable) return (0, sB.jsx)(uB.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const mB = zB ? nB.e[zB] : null,
        yB = zB ? dB.g[(0, IB.j)(zB)] : null,
        kB = void 0 !== (null === mB || void 0 === mB ? void 0 : mB.characterSet) || null !== mB && void 0 !== mB && mB.singleItem ? mB.displayName : `${null!==(BB=null===mB||void 0===mB?void 0:mB.displayName)&&void 0!==BB?BB:zB} Pack`,
        GB = mB ? `Your ${kB} is Ready!` : "Welcome To Super Rank!",
        LB = mB ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        gB = mB ? !JB.getOwnedCosmeticPacks().includes(zB) : !JB.playerHasRank("super"),
        tB = mB ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, sB.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [yB && (0, sB.jsx)(yB, {}), !mB && (0, sB.jsx)(aB.d, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, sB.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: GB
        }), (0, sB.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: LB
        }), gB && (0, sB.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, sB.jsx)(rB.c, {
            name: "circle-info"
          }), (0, sB.jsx)("div", {
            children: tB
          })]
        }), (0, sB.jsx)(uB.LinkPreserveSearch, {
          to: "/",
          children: (0, sB.jsx)(NB.m, {
            className: "PurchaseWelcomeContinue",
            children: jB("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);