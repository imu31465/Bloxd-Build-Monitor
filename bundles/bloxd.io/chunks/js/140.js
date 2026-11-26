export const id = 140;
export const ids = [140];
export const modules = {
  7095: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => WH
    });
    var AH = LH(1520),
      rH = LH(1556),
      SH = LH(3319),
      hH = LH(2406),
      tH = LH(1455),
      zH = LH(1509),
      CH = LH(1061),
      EH = LH(45),
      XH = LH(1315),
      GH = LH(1225);

    function YH(HH) {
      let {
        iconName: BH,
        iconCountPerGroup: LH,
        animation: AH,
        midShowerStart: rH = !1,
        customClass: SH
      } = HH;
      const [hH, tH] = (0, EH.useState)({});
      return (0, EH.useEffect)((() => {
        const HH = {};
        for (const BH of Array.from(Array(3).keys())) {
          HH[BH] = [];
          for (let AH = 0; AH < LH; AH++) HH[BH].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (rH ? -1 : 1) + "s"
          })
        }
        tH(HH)
      }), [LH, rH]), (0, GH.jsx)("div", {
        className: `IconShower IconShowerAnimation${AH} ${null!==SH&&void 0!==SH?SH:""}`,
        children: Object.keys(hH).map((HH => hH[HH].map((LH => (0, GH.jsx)("div", {
          className: `Icon IconGroup${HH}`,
          style: {
            left: LH.left,
            animationDelay: LH.animationDelay
          },
          children: (0, GH.jsx)(XH.c, {
            name: BH
          })
        }, LH.left)))))
      })
    }
    var uH = LH(1123),
      QH = LH(2486);

    function WH() {
      var HH;
      const {
        t: BH
      } = (0, uH.B)(), {
        pack: LH
      } = (0, AH.A)(), {
        userContext: EH
      } = (0, CH.e)();
      if (LH) {
        const HH = rH.b[LH];
        if (null === HH || void 0 === HH || !HH.purchasable) return (0, GH.jsx)(zH.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const WH = LH ? rH.b[LH] : null,
        MH = LH ? SH.j[(0, hH.j)(LH)] : null,
        xH = void 0 !== (null === WH || void 0 === WH ? void 0 : WH.characterSet) || null !== WH && void 0 !== WH && WH.singleItem ? WH.displayName : `${null!==(HH=null===WH||void 0===WH?void 0:WH.displayName)&&void 0!==HH?HH:LH} Pack`,
        vH = Date.now(),
        PH = BH((0, QH.u)(vH).nameKey),
        TH = WH ? `Your ${xH} is Ready!` : `Welcome To ${PH}!`,
        UH = WH ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        VH = WH ? !EH.getOwnedCosmeticPacks().includes(LH) : !(0, QH.k)(EH.getPlayerRanks(), vH),
        OH = WH ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${PH} instantly, but it could take up to an hour to apply. If you don't have ${PH} after an hour, contact help@bloxd.io.`;
      return (0, GH.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [MH && (0, GH.jsx)(MH, {}), !WH && (0, GH.jsx)(YH, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, GH.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: TH
        }), (0, GH.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: UH
        }), VH && (0, GH.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, GH.jsx)(XH.c, {
            name: "circle-info"
          }), (0, GH.jsx)("div", {
            children: OH
          })]
        }), (0, GH.jsx)(zH.LinkPreserveSearch, {
          to: "/",
          children: (0, GH.jsx)(tH.u, {
            className: "PurchaseWelcomeContinue",
            children: BH("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);