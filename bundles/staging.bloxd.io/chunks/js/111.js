export const id = 111;
export const ids = [111];
export const modules = {
  5871: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => DB
    });
    var VB = dB(1422),
      yB = dB(1457),
      pB = dB(2485),
      lB = dB(2023),
      JB = dB(1324),
      YB = dB(1407),
      gB = dB(1011),
      oB = dB(939),
      kB = dB(1078),
      LB = dB(946),
      OB = dB(980);

    function DB() {
      var BB;
      const {
        t: TB
      } = (0, kB.z)(), {
        pack: dB
      } = (0, VB.u)(), {
        userContext: DB
      } = (0, gB.b)();
      if (dB) {
        const BB = yB.c[dB];
        if (null === BB || void 0 === BB || !BB.purchasable) return (0, OB.jsx)(YB.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const uB = dB ? yB.c[dB] : null,
        HB = dB ? pB.n[(0, lB.i)(dB)] : null,
        EB = void 0 === (null === uB || void 0 === uB ? void 0 : uB.characterSet) ? `${null!==(BB=null===uB||void 0===uB?void 0:uB.displayName)&&void 0!==BB?BB:dB} Pack` : uB.displayName,
        vB = uB ? `Your ${EB} is Ready!` : "Welcome To Super Rank!",
        mB = uB ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        iB = uB ? !DB.getOwnedCosmeticPacks().includes(dB) : !DB.playerHasRank("super"),
        NB = uB ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, OB.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [HB && (0, OB.jsx)(HB, {}), !uB && (0, OB.jsx)(oB.c, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, OB.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: vB
        }), (0, OB.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: mB
        }), iB && (0, OB.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, OB.jsx)(LB.e, {
            name: "circle-info"
          }), (0, OB.jsx)("div", {
            children: NB
          })]
        }), (0, OB.jsx)(YB.LinkPreserveSearch, {
          to: "/",
          children: (0, OB.jsx)(JB.k, {
            className: "PurchaseWelcomeContinue",
            children: TB("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);