export const id = 111;
export const ids = [111];
export const modules = {
  5865: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => nJ
    });
    var FJ = ZJ(1421),
      UJ = ZJ(1454),
      eJ = ZJ(2508),
      XJ = ZJ(2032),
      AJ = ZJ(1329),
      qJ = ZJ(1406),
      jJ = ZJ(1022),
      YJ = ZJ(934),
      hJ = ZJ(1086),
      DJ = ZJ(942),
      sJ = ZJ(990);

    function nJ() {
      var JJ;
      const {
        t: cJ
      } = (0, hJ.F)(), {
        pack: ZJ
      } = (0, FJ.x)(), {
        userContext: nJ
      } = (0, jJ.d)();
      if (ZJ) {
        const JJ = UJ.e[ZJ];
        if (null === JJ || void 0 === JJ || !JJ.purchasable) return (0, sJ.jsx)(qJ.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const GJ = ZJ ? UJ.e[ZJ] : null,
        fJ = ZJ ? eJ.h[(0, XJ.k)(ZJ)] : null,
        xJ = void 0 === (null === GJ || void 0 === GJ ? void 0 : GJ.characterSet) ? `${null!==(JJ=null===GJ||void 0===GJ?void 0:GJ.displayName)&&void 0!==JJ?JJ:ZJ} Pack` : GJ.displayName,
        rJ = GJ ? `Your ${xJ} is Ready!` : "Welcome To Super Rank!",
        vJ = GJ ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        mJ = GJ ? !nJ.getOwnedCosmeticPacks().includes(ZJ) : !nJ.playerHasRank("super"),
        QJ = GJ ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, sJ.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [fJ && (0, sJ.jsx)(fJ, {}), !GJ && (0, sJ.jsx)(YJ.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, sJ.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: rJ
        }), (0, sJ.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: vJ
        }), mJ && (0, sJ.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, sJ.jsx)(DJ.c, {
            name: "circle-info"
          }), (0, sJ.jsx)("div", {
            children: QJ
          })]
        }), (0, sJ.jsx)(qJ.LinkPreserveSearch, {
          to: "/",
          children: (0, sJ.jsx)(AJ.m, {
            className: "PurchaseWelcomeContinue",
            children: cJ("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);