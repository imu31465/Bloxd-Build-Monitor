export const id = 118;
export const ids = [118];
export const modules = {
  6273: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => tD
    });
    var ID = cD(1517),
      pD = cD(1556),
      iD = cD(2788),
      fD = cD(2235),
      bD = cD(1442),
      QD = cD(1508),
      wD = cD(1120),
      SD = cD(1055),
      BD = cD(1192),
      yD = cD(1064),
      MD = cD(1093);

    function tD() {
      var DD;
      const {
        t: CD
      } = (0, BD.F)(), {
        pack: cD
      } = (0, ID.F)(), {
        userContext: tD
      } = (0, wD.c)();
      if (cD) {
        const DD = pD.c[cD];
        if (null === DD || void 0 === DD || !DD.purchasable) return (0, MD.jsx)(QD.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const ZD = cD ? pD.c[cD] : null,
        oD = cD ? iD.i[(0, fD.n)(cD)] : null,
        vD = void 0 !== (null === ZD || void 0 === ZD ? void 0 : ZD.characterSet) || null !== ZD && void 0 !== ZD && ZD.singleItem ? ZD.displayName : `${null!==(DD=null===ZD||void 0===ZD?void 0:ZD.displayName)&&void 0!==DD?DD:cD} Pack`,
        ND = ZD ? `Your ${vD} is Ready!` : "Welcome To Super Rank!",
        gD = ZD ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        XD = ZD ? !tD.getOwnedCosmeticPacks().includes(cD) : !tD.playerHasRank("super"),
        mD = ZD ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, MD.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [oD && (0, MD.jsx)(oD, {}), !ZD && (0, MD.jsx)(SD.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, MD.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: ND
        }), (0, MD.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: gD
        }), XD && (0, MD.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, MD.jsx)(yD.c, {
            name: "circle-info"
          }), (0, MD.jsx)("div", {
            children: mD
          })]
        }), (0, MD.jsx)(QD.LinkPreserveSearch, {
          to: "/",
          children: (0, MD.jsx)(bD.o, {
            className: "PurchaseWelcomeContinue",
            children: CD("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);