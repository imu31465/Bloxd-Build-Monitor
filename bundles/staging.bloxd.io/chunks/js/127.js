export const id = 127;
export const ids = [127];
export const modules = {
  6706: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => NB
    });
    var TB = ZB(1591),
      JB = ZB(1627),
      oB = ZB(3166),
      GB = ZB(2384),
      vB = ZB(1516),
      kB = ZB(1579),
      cB = ZB(1179),
      nB = ZB(1098),
      hB = ZB(1248),
      zB = ZB(1102),
      FB = ZB(1153);

    function NB() {
      var BB;
      const {
        t: IB
      } = (0, hB.G)(), {
        pack: ZB
      } = (0, TB.B)(), {
        userContext: NB
      } = (0, cB.d)();
      if (ZB) {
        const BB = JB.d[ZB];
        if (null === BB || void 0 === BB || !BB.purchasable) return (0, FB.jsx)(kB.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const gB = ZB ? JB.d[ZB] : null,
        qB = ZB ? oB.n[(0, GB.k)(ZB)] : null,
        yB = void 0 !== (null === gB || void 0 === gB ? void 0 : gB.characterSet) || null !== gB && void 0 !== gB && gB.singleItem ? gB.displayName : `${null!==(BB=null===gB||void 0===gB?void 0:gB.displayName)&&void 0!==BB?BB:ZB} Pack`,
        UB = gB ? `Your ${yB} is Ready!` : "Welcome To Super Rank!",
        WB = gB ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        dB = gB ? !NB.getOwnedCosmeticPacks().includes(ZB) : !NB.playerHasRank("super"),
        CB = gB ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, FB.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [qB && (0, FB.jsx)(qB, {}), !gB && (0, FB.jsx)(nB.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, FB.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: UB
        }), (0, FB.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: WB
        }), dB && (0, FB.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, FB.jsx)(zB.d, {
            name: "circle-info"
          }), (0, FB.jsx)("div", {
            children: CB
          })]
        }), (0, FB.jsx)(kB.LinkPreserveSearch, {
          to: "/",
          children: (0, FB.jsx)(vB.p, {
            className: "PurchaseWelcomeContinue",
            children: IB("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);