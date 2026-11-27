export const id = 149;
export const ids = [149];
export const modules = {
  7677: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => LR
    });
    var yR = GR(1677),
      tR = GR(1716),
      uR = GR(4150),
      ZR = GR(3240),
      qR = GR(1590),
      iR = GR(1663),
      fR = GR(1196),
      VR = GR(66),
      KR = GR(1468),
      wR = GR(1378);

    function rR(RR) {
      let {
        iconName: JR,
        iconCountPerGroup: GR,
        animation: yR,
        midShowerStart: tR = !1,
        customClass: uR
      } = RR;
      const [ZR, qR] = (0, VR.useState)({});
      return (0, VR.useEffect)((() => {
        const RR = {};
        for (const JR of Array.from(Array(3).keys())) {
          RR[JR] = [];
          for (let yR = 0; yR < GR; yR++) RR[JR].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (tR ? -1 : 1) + "s"
          })
        }
        qR(RR)
      }), [GR, tR]), (0, wR.jsx)("div", {
        className: `IconShower IconShowerAnimation${yR} ${null!==uR&&void 0!==uR?uR:""}`,
        children: Object.keys(ZR).map((RR => ZR[RR].map((GR => (0, wR.jsx)("div", {
          className: `Icon IconGroup${RR}`,
          style: {
            left: GR.left,
            animationDelay: GR.animationDelay
          },
          children: (0, wR.jsx)(KR.d, {
            name: JR
          })
        }, GR.left)))))
      })
    }
    var eR = GR(1270),
      aR = GR(3314);

    function LR() {
      var RR;
      const {
        t: JR
      } = (0, eR.A)(), {
        pack: GR
      } = (0, yR.x)(), {
        userContext: VR
      } = (0, fR.d)();
      if (GR) {
        const RR = tR.b[GR];
        if (null === RR || void 0 === RR || !RR.purchasable) return (0, wR.jsx)(iR.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const LR = GR ? tR.b[GR] : null,
        nR = GR ? uR.j[(0, ZR.h)(GR)] : null,
        UR = void 0 !== (null === LR || void 0 === LR ? void 0 : LR.characterSet) || null !== LR && void 0 !== LR && LR.singleItem ? LR.displayName : `${null!==(RR=null===LR||void 0===LR?void 0:LR.displayName)&&void 0!==RR?RR:GR} Pack`,
        WR = Date.now(),
        AR = JR((0, aR.s)(WR).nameKey),
        CR = LR ? `Your ${UR} is Ready!` : `Welcome To ${AR}!`,
        XR = LR ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        MR = LR ? !VR.getOwnedCosmeticPacks().includes(GR) : !(0, aR.h)(VR.getPlayerRanks(), WR),
        BR = LR ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${AR} instantly, but it could take up to an hour to apply. If you don't have ${AR} after an hour, contact help@bloxd.io.`;
      return (0, wR.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [nR && (0, wR.jsx)(nR, {}), !LR && (0, wR.jsx)(rR, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, wR.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: CR
        }), (0, wR.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: XR
        }), MR && (0, wR.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, wR.jsx)(KR.d, {
            name: "circle-info"
          }), (0, wR.jsx)("div", {
            children: BR
          })]
        }), (0, wR.jsx)(iR.LinkPreserveSearch, {
          to: "/",
          children: (0, wR.jsx)(qR.n, {
            className: "PurchaseWelcomeContinue",
            children: JR("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);