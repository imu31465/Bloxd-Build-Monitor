export const id = 125;
export const ids = [125];
export const modules = {
  6539: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => gC
    });
    var QC = ZC(1463),
      wC = ZC(1493),
      bC = ZC(2991),
      nC = ZC(2213),
      fC = ZC(1388),
      oC = ZC(1453),
      qC = ZC(1076),
      FC = ZC(1004),
      WC = ZC(1143),
      NC = ZC(1013),
      MC = ZC(1056);

    function gC() {
      var CC;
      const {
        t: zC
      } = (0, WC.y)(), {
        pack: ZC
      } = (0, QC.C)(), {
        userContext: gC
      } = (0, qC.e)();
      if (ZC) {
        const CC = wC.d[ZC];
        if (null === CC || void 0 === CC || !CC.purchasable) return (0, MC.jsx)(oC.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const SC = ZC ? wC.d[ZC] : null,
        pC = ZC ? bC.g[(0, nC.i)(ZC)] : null,
        PC = void 0 !== (null === SC || void 0 === SC ? void 0 : SC.characterSet) || null !== SC && void 0 !== SC && SC.singleItem ? SC.displayName : `${null!==(CC=null===SC||void 0===SC?void 0:SC.displayName)&&void 0!==CC?CC:ZC} Pack`,
        GC = SC ? `Your ${PC} is Ready!` : "Welcome To Super Rank!",
        RC = SC ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        AC = SC ? !gC.getOwnedCosmeticPacks().includes(ZC) : !gC.playerHasRank("super"),
        xC = SC ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, MC.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [pC && (0, MC.jsx)(pC, {}), !SC && (0, MC.jsx)(FC.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, MC.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: GC
        }), (0, MC.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: RC
        }), AC && (0, MC.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, MC.jsx)(NC.c, {
            name: "circle-info"
          }), (0, MC.jsx)("div", {
            children: xC
          })]
        }), (0, MC.jsx)(oC.LinkPreserveSearch, {
          to: "/",
          children: (0, MC.jsx)(fC.o, {
            className: "PurchaseWelcomeContinue",
            children: zC("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);