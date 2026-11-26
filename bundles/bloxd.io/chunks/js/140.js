export const id = 140;
export const ids = [140];
export const modules = {
  7111: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => bV
    });
    var JV = xV(1625),
      YV = xV(1649),
      UV = xV(3364),
      yV = xV(2437),
      pV = xV(1551),
      QV = xV(1612),
      nV = xV(1168),
      wV = xV(62),
      ZV = xV(1414),
      vV = xV(1321);

    function rV(VV) {
      let {
        iconName: eV,
        iconCountPerGroup: xV,
        animation: JV,
        midShowerStart: YV = !1,
        customClass: UV
      } = VV;
      const [yV, pV] = (0, wV.useState)({});
      return (0, wV.useEffect)((() => {
        const VV = {};
        for (const eV of Array.from(Array(3).keys())) {
          VV[eV] = [];
          for (let JV = 0; JV < xV; JV++) VV[eV].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (YV ? -1 : 1) + "s"
          })
        }
        pV(VV)
      }), [xV, YV]), (0, vV.jsx)("div", {
        className: `IconShower IconShowerAnimation${JV} ${null!==UV&&void 0!==UV?UV:""}`,
        children: Object.keys(yV).map((VV => yV[VV].map((xV => (0, vV.jsx)("div", {
          className: `Icon IconGroup${VV}`,
          style: {
            left: xV.left,
            animationDelay: xV.animationDelay
          },
          children: (0, vV.jsx)(ZV.b, {
            name: eV
          })
        }, xV.left)))))
      })
    }
    var kV = xV(1220);

    function bV() {
      var VV;
      const {
        t: eV
      } = (0, kV.A)(), {
        pack: xV
      } = (0, JV.A)(), {
        userContext: wV
      } = (0, nV.d)();
      if (xV) {
        const VV = YV.d[xV];
        if (null === VV || void 0 === VV || !VV.purchasable) return (0, vV.jsx)(QV.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const bV = xV ? YV.d[xV] : null,
        EV = xV ? UV.k[(0, yV.m)(xV)] : null,
        BV = void 0 !== (null === bV || void 0 === bV ? void 0 : bV.characterSet) || null !== bV && void 0 !== bV && bV.singleItem ? bV.displayName : `${null!==(VV=null===bV||void 0===bV?void 0:bV.displayName)&&void 0!==VV?VV:xV} Pack`,
        jV = bV ? `Your ${BV} is Ready!` : "Welcome To Super Rank!",
        qV = bV ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        tV = bV ? !wV.getOwnedCosmeticPacks().includes(xV) : !wV.playerHasRank("super"),
        FV = bV ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, vV.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [EV && (0, vV.jsx)(EV, {}), !bV && (0, vV.jsx)(rV, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, vV.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: jV
        }), (0, vV.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: qV
        }), tV && (0, vV.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, vV.jsx)(ZV.b, {
            name: "circle-info"
          }), (0, vV.jsx)("div", {
            children: FV
          })]
        }), (0, vV.jsx)(QV.LinkPreserveSearch, {
          to: "/",
          children: (0, vV.jsx)(pV.m, {
            className: "PurchaseWelcomeContinue",
            children: eV("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);