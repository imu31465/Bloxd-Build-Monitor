export const id = 125;
export const ids = [125];
export const modules = {
  6571: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => ID
    });
    var pD = wD(1523),
      sD = wD(1562),
      KD = wD(2990),
      rD = wD(2252),
      LD = wD(1447),
      cD = wD(1511),
      gD = wD(1127),
      RD = wD(1051),
      AD = wD(1200),
      UD = wD(1057),
      fD = wD(1096);

    function ID() {
      var DD;
      const {
        t: zD
      } = (0, AD.E)(), {
        pack: wD
      } = (0, pD.C)(), {
        userContext: ID
      } = (0, gD.c)();
      if (wD) {
        const DD = sD.e[wD];
        if (null === DD || void 0 === DD || !DD.purchasable) return (0, fD.jsx)(cD.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const BD = wD ? sD.e[wD] : null,
        GD = wD ? KD.i[(0, rD.j)(wD)] : null,
        hD = void 0 !== (null === BD || void 0 === BD ? void 0 : BD.characterSet) || null !== BD && void 0 !== BD && BD.singleItem ? BD.displayName : `${null!==(DD=null===BD||void 0===BD?void 0:BD.displayName)&&void 0!==DD?DD:wD} Pack`,
        nD = BD ? `Your ${hD} is Ready!` : "Welcome To Super Rank!",
        MD = BD ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        OD = BD ? !ID.getOwnedCosmeticPacks().includes(wD) : !ID.playerHasRank("super"),
        JD = BD ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, fD.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [GD && (0, fD.jsx)(GD, {}), !BD && (0, fD.jsx)(RD.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, fD.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: nD
        }), (0, fD.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: MD
        }), OD && (0, fD.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, fD.jsx)(UD.e, {
            name: "circle-info"
          }), (0, fD.jsx)("div", {
            children: JD
          })]
        }), (0, fD.jsx)(cD.LinkPreserveSearch, {
          to: "/",
          children: (0, fD.jsx)(LD.o, {
            className: "PurchaseWelcomeContinue",
            children: zD("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);