export const id = 119;
export const ids = [119];
export const modules = {
  6264: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Xb
    });
    var Bb = hb(1431),
      Ob = hb(1455),
      Gb = hb(2780),
      Ub = hb(2151),
      Lb = hb(1357),
      Yb = hb(1415),
      Sb = hb(1029),
      ab = hb(964),
      Hb = hb(1095),
      wb = hb(966),
      Zb = hb(1007);

    function Xb() {
      var bb;
      const {
        t: ub
      } = (0, Hb.K)(), {
        pack: hb
      } = (0, Bb.F)(), {
        userContext: Xb
      } = (0, Sb.d)();
      if (hb) {
        const bb = Ob.d[hb];
        if (null === bb || void 0 === bb || !bb.purchasable) return (0, Zb.jsx)(Yb.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const pb = hb ? Ob.d[hb] : null,
        ob = hb ? Gb.n[(0, Ub.m)(hb)] : null,
        Ab = void 0 !== (null === pb || void 0 === pb ? void 0 : pb.characterSet) || null !== pb && void 0 !== pb && pb.singleItem ? pb.displayName : `${null!==(bb=null===pb||void 0===pb?void 0:pb.displayName)&&void 0!==bb?bb:hb} Pack`,
        lb = pb ? `Your ${Ab} is Ready!` : "Welcome To Super Rank!",
        Kb = pb ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Wb = pb ? !Xb.getOwnedCosmeticPacks().includes(hb) : !Xb.playerHasRank("super"),
        Cb = pb ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Zb.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [ob && (0, Zb.jsx)(ob, {}), !pb && (0, Zb.jsx)(ab.d, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Zb.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: lb
        }), (0, Zb.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Kb
        }), Wb && (0, Zb.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Zb.jsx)(wb.e, {
            name: "circle-info"
          }), (0, Zb.jsx)("div", {
            children: Cb
          })]
        }), (0, Zb.jsx)(Yb.LinkPreserveSearch, {
          to: "/",
          children: (0, Zb.jsx)(Lb.m, {
            className: "PurchaseWelcomeContinue",
            children: ub("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);