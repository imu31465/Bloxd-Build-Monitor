export const id = 140;
export const ids = [140];
export const modules = {
  7042: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => JM
    });
    var OM = iM(1608),
      SM = iM(1641),
      jM = iM(3358),
      aM = iM(2412),
      PM = iM(1520),
      nM = iM(1591),
      QM = iM(1142),
      zM = iM(44),
      LM = iM(1398),
      mM = iM(1303);

    function HM(MM) {
      let {
        iconName: rM,
        iconCountPerGroup: iM,
        animation: OM,
        midShowerStart: SM = !1,
        customClass: jM
      } = MM;
      const [aM, PM] = (0, zM.useState)({});
      return (0, zM.useEffect)((() => {
        const MM = {};
        for (const rM of Array.from(Array(3).keys())) {
          MM[rM] = [];
          for (let OM = 0; OM < iM; OM++) MM[rM].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (SM ? -1 : 1) + "s"
          })
        }
        PM(MM)
      }), [iM, SM]), (0, mM.jsx)("div", {
        className: `IconShower IconShowerAnimation${OM} ${null!==jM&&void 0!==jM?jM:""}`,
        children: Object.keys(aM).map((MM => aM[MM].map((iM => (0, mM.jsx)("div", {
          className: `Icon IconGroup${MM}`,
          style: {
            left: iM.left,
            animationDelay: iM.animationDelay
          },
          children: (0, mM.jsx)(LM.b, {
            name: rM
          })
        }, iM.left)))))
      })
    }
    var hM = iM(1188);

    function JM() {
      var MM;
      const {
        t: rM
      } = (0, hM.A)(), {
        pack: iM
      } = (0, OM.D)(), {
        userContext: zM
      } = (0, QM.b)();
      if (iM) {
        const MM = SM.d[iM];
        if (null === MM || void 0 === MM || !MM.purchasable) return (0, mM.jsx)(nM.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const JM = iM ? SM.d[iM] : null,
        dM = iM ? jM.k[(0, aM.j)(iM)] : null,
        yM = void 0 !== (null === JM || void 0 === JM ? void 0 : JM.characterSet) || null !== JM && void 0 !== JM && JM.singleItem ? JM.displayName : `${null!==(MM=null===JM||void 0===JM?void 0:JM.displayName)&&void 0!==MM?MM:iM} Pack`,
        lM = JM ? `Your ${yM} is Ready!` : "Welcome To Super Rank!",
        EM = JM ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        UM = JM ? !zM.getOwnedCosmeticPacks().includes(iM) : !zM.playerHasRank("super"),
        GM = JM ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, mM.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [dM && (0, mM.jsx)(dM, {}), !JM && (0, mM.jsx)(HM, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, mM.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: lM
        }), (0, mM.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: EM
        }), UM && (0, mM.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, mM.jsx)(LM.b, {
            name: "circle-info"
          }), (0, mM.jsx)("div", {
            children: GM
          })]
        }), (0, mM.jsx)(nM.LinkPreserveSearch, {
          to: "/",
          children: (0, mM.jsx)(PM.p, {
            className: "PurchaseWelcomeContinue",
            children: rM("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);