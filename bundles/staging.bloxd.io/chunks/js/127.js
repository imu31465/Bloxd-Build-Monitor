export const id = 127;
export const ids = [127];
export const modules = {
  6603: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => BT
    });
    var WT = mT(1641),
      zT = mT(1685),
      MT = mT(3130),
      gT = mT(2400),
      nT = mT(1569),
      HT = mT(1633),
      kT = mT(1225),
      jT = mT(1132),
      lT = mT(1288),
      LT = mT(1135),
      pT = mT(1188);

    function BT() {
      var TT;
      const {
        t: UT
      } = (0, lT.z)(), {
        pack: mT
      } = (0, WT.y)(), {
        userContext: BT
      } = (0, kT.d)();
      if (mT) {
        const TT = zT.b[mT];
        if (null === TT || void 0 === TT || !TT.purchasable) return (0, pT.jsx)(HT.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const ZT = mT ? zT.b[mT] : null,
        cT = mT ? MT.l[(0, gT.j)(mT)] : null,
        vT = void 0 !== (null === ZT || void 0 === ZT ? void 0 : ZT.characterSet) || null !== ZT && void 0 !== ZT && ZT.singleItem ? ZT.displayName : `${null!==(TT=null===ZT||void 0===ZT?void 0:ZT.displayName)&&void 0!==TT?TT:mT} Pack`,
        fT = ZT ? `Your ${vT} is Ready!` : "Welcome To Super Rank!",
        qT = ZT ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        iT = ZT ? !BT.getOwnedCosmeticPacks().includes(mT) : !BT.playerHasRank("super"),
        bT = ZT ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, pT.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [cT && (0, pT.jsx)(cT, {}), !ZT && (0, pT.jsx)(jT.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, pT.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: fT
        }), (0, pT.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: qT
        }), iT && (0, pT.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, pT.jsx)(LT.c, {
            name: "circle-info"
          }), (0, pT.jsx)("div", {
            children: bT
          })]
        }), (0, pT.jsx)(HT.LinkPreserveSearch, {
          to: "/",
          children: (0, pT.jsx)(nT.l, {
            className: "PurchaseWelcomeContinue",
            children: UT("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);