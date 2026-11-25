export const id = 127;
export const ids = [127];
export const modules = {
  6540: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => KG
    });
    var wG = ZG(1457),
      SG = ZG(1501),
      LG = ZG(2999),
      yG = ZG(2281),
      kG = ZG(1393),
      UG = ZG(1444),
      YG = ZG(1092),
      VG = ZG(1012),
      pG = ZG(1151),
      fG = ZG(1016),
      QG = ZG(1067);

    function KG() {
      var GG;
      const {
        t: bG
      } = (0, pG.w)(), {
        pack: ZG
      } = (0, wG.v)(), {
        userContext: KG
      } = (0, YG.e)();
      if (ZG) {
        const GG = SG.c[ZG];
        if (null === GG || void 0 === GG || !GG.purchasable) return (0, QG.jsx)(UG.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const hG = ZG ? SG.c[ZG] : null,
        dG = ZG ? LG.h[(0, yG.h)(ZG)] : null,
        JG = void 0 !== (null === hG || void 0 === hG ? void 0 : hG.characterSet) || null !== hG && void 0 !== hG && hG.singleItem ? hG.displayName : `${null!==(GG=null===hG||void 0===hG?void 0:hG.displayName)&&void 0!==GG?GG:ZG} Pack`,
        rG = hG ? `Your ${JG} is Ready!` : "Welcome To Super Rank!",
        zG = hG ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        EG = hG ? !KG.getOwnedCosmeticPacks().includes(ZG) : !KG.playerHasRank("super"),
        oG = hG ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, QG.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [dG && (0, QG.jsx)(dG, {}), !hG && (0, QG.jsx)(VG.d, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, QG.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: rG
        }), (0, QG.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: zG
        }), EG && (0, QG.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, QG.jsx)(fG.c, {
            name: "circle-info"
          }), (0, QG.jsx)("div", {
            children: oG
          })]
        }), (0, QG.jsx)(UG.LinkPreserveSearch, {
          to: "/",
          children: (0, QG.jsx)(kG.k, {
            className: "PurchaseWelcomeContinue",
            children: bG("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);