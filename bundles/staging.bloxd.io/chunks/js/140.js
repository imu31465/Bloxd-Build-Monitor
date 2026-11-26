export const id = 140;
export const ids = [140];
export const modules = {
  7081: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => ZB
    });
    var YB = GB(1571),
      DB = GB(1606),
      QB = GB(3370),
      oB = GB(2454),
      jB = GB(1485),
      yB = GB(1560),
      JB = GB(1112),
      MB = GB(56),
      PB = GB(1383),
      zB = GB(1282);

    function lB(BB) {
      let {
        iconName: OB,
        iconCountPerGroup: GB,
        animation: YB,
        midShowerStart: DB = !1,
        customClass: QB
      } = BB;
      const [oB, jB] = (0, MB.useState)({});
      return (0, MB.useEffect)((() => {
        const BB = {};
        for (const OB of Array.from(Array(3).keys())) {
          BB[OB] = [];
          for (let YB = 0; YB < GB; YB++) BB[OB].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (DB ? -1 : 1) + "s"
          })
        }
        jB(BB)
      }), [GB, DB]), (0, zB.jsx)("div", {
        className: `IconShower IconShowerAnimation${YB} ${null!==QB&&void 0!==QB?QB:""}`,
        children: Object.keys(oB).map((BB => oB[BB].map((GB => (0, zB.jsx)("div", {
          className: `Icon IconGroup${BB}`,
          style: {
            left: GB.left,
            animationDelay: GB.animationDelay
          },
          children: (0, zB.jsx)(PB.b, {
            name: OB
          })
        }, GB.left)))))
      })
    }
    var pB = GB(1175),
      qB = GB(2516);

    function ZB() {
      var BB;
      const {
        t: OB
      } = (0, pB.H)(), {
        pack: GB
      } = (0, YB.A)(), {
        userContext: MB
      } = (0, JB.d)();
      if (GB) {
        const BB = DB.d[GB];
        if (null === BB || void 0 === BB || !BB.purchasable) return (0, zB.jsx)(yB.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const ZB = GB ? DB.d[GB] : null,
        NB = GB ? QB.k[(0, oB.l)(GB)] : null,
        RB = void 0 !== (null === ZB || void 0 === ZB ? void 0 : ZB.characterSet) || null !== ZB && void 0 !== ZB && ZB.singleItem ? ZB.displayName : `${null!==(BB=null===ZB||void 0===ZB?void 0:ZB.displayName)&&void 0!==BB?BB:GB} Pack`,
        WB = Date.now(),
        AB = OB((0, qB.u)(WB).nameKey),
        VB = ZB ? `Your ${RB} is Ready!` : `Welcome To ${AB}!`,
        SB = ZB ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        nB = ZB ? !MB.getOwnedCosmeticPacks().includes(GB) : !(0, qB.k)(MB.getPlayerRanks(), WB),
        UB = ZB ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${AB} instantly, but it could take up to an hour to apply. If you don't have ${AB} after an hour, contact help@bloxd.io.`;
      return (0, zB.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [NB && (0, zB.jsx)(NB, {}), !ZB && (0, zB.jsx)(lB, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, zB.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: VB
        }), (0, zB.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: SB
        }), nB && (0, zB.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, zB.jsx)(PB.b, {
            name: "circle-info"
          }), (0, zB.jsx)("div", {
            children: UB
          })]
        }), (0, zB.jsx)(yB.LinkPreserveSearch, {
          to: "/",
          children: (0, zB.jsx)(jB.q, {
            className: "PurchaseWelcomeContinue",
            children: OB("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);