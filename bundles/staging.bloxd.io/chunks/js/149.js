export const id = 149;
export const ids = [149];
export const modules = {
  7545: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => jW
    });
    var mW = OW(1616),
      EW = OW(1653),
      NW = OW(4058),
      PW = OW(3147),
      LW = OW(1532),
      cW = OW(1605),
      wW = OW(1107),
      tW = OW(62),
      ZW = OW(1391),
      xW = OW(1283);

    function lW(WW) {
      let {
        iconName: iW,
        iconCountPerGroup: OW,
        animation: mW,
        midShowerStart: EW = !1,
        customClass: NW
      } = WW;
      const [PW, LW] = (0, tW.useState)({});
      return (0, tW.useEffect)((() => {
        const WW = {};
        for (const iW of Array.from(Array(3).keys())) {
          WW[iW] = [];
          for (let mW = 0; mW < OW; mW++) WW[iW].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (EW ? -1 : 1) + "s"
          })
        }
        LW(WW)
      }), [OW, EW]), (0, xW.jsx)("div", {
        className: `IconShower IconShowerAnimation${mW} ${null!==NW&&void 0!==NW?NW:""}`,
        children: Object.keys(PW).map((WW => PW[WW].map((OW => (0, xW.jsx)("div", {
          className: `Icon IconGroup${WW}`,
          style: {
            left: OW.left,
            animationDelay: OW.animationDelay
          },
          children: (0, xW.jsx)(ZW.c, {
            name: iW
          })
        }, OW.left)))))
      })
    }
    var AW = OW(1172),
      bW = OW(3210);

    function jW() {
      var WW;
      const {
        t: iW
      } = (0, AW.B)(), {
        pack: OW
      } = (0, mW.z)(), {
        userContext: tW
      } = (0, wW.e)();
      if (OW) {
        const WW = EW.e[OW];
        if (null === WW || void 0 === WW || !WW.purchasable) return (0, xW.jsx)(cW.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const jW = OW ? EW.e[OW] : null,
        UW = OW ? NW.m[(0, PW.j)(OW)] : null,
        kW = void 0 !== (null === jW || void 0 === jW ? void 0 : jW.characterSet) || null !== jW && void 0 !== jW && jW.singleItem ? jW.displayName : `${null!==(WW=null===jW||void 0===jW?void 0:jW.displayName)&&void 0!==WW?WW:OW} Pack`,
        sW = Date.now(),
        MW = iW((0, bW.o)(sW).nameKey),
        KW = jW ? `Your ${kW} is Ready!` : `Welcome To ${MW}!`,
        SW = jW ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        YW = jW ? !tW.getOwnedCosmeticPacks().includes(OW) : !(0, bW.h)(tW.getPlayerRanks(), sW),
        yW = jW ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${MW} instantly, but it could take up to an hour to apply. If you don't have ${MW} after an hour, contact help@bloxd.io.`;
      return (0, xW.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [UW && (0, xW.jsx)(UW, {}), !jW && (0, xW.jsx)(lW, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, xW.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: KW
        }), (0, xW.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: SW
        }), YW && (0, xW.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, xW.jsx)(ZW.c, {
            name: "circle-info"
          }), (0, xW.jsx)("div", {
            children: yW
          })]
        }), (0, xW.jsx)(cW.LinkPreserveSearch, {
          to: "/",
          children: (0, xW.jsx)(LW.n, {
            className: "PurchaseWelcomeContinue",
            children: iW("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);