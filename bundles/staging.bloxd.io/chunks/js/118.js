export const id = 118;
export const ids = [118];
export const modules = {
  6140: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => jb
    });
    var Ab = Ub(1446),
      Mb = Ub(1476),
      Tb = Ub(2706),
      Eb = Ub(2141),
      Yb = Ub(1352),
      Bb = Ub(1433),
      eb = Ub(1060),
      vb = Ub(988),
      Lb = Ub(1134),
      Pb = Ub(990),
      Xb = Ub(1023);

    function jb() {
      var bb;
      const {
        t: ab
      } = (0, Lb.A)(), {
        pack: Ub
      } = (0, Ab.F)(), {
        userContext: jb
      } = (0, eb.c)();
      if (Ub) {
        const bb = Mb.d[Ub];
        if (null === bb || void 0 === bb || !bb.purchasable) return (0, Xb.jsx)(Bb.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Rb = Ub ? Mb.d[Ub] : null,
        kb = Ub ? Tb.f[(0, Eb.i)(Ub)] : null,
        yb = void 0 !== (null === Rb || void 0 === Rb ? void 0 : Rb.characterSet) || null !== Rb && void 0 !== Rb && Rb.singleItem ? Rb.displayName : `${null!==(bb=null===Rb||void 0===Rb?void 0:Rb.displayName)&&void 0!==bb?bb:Ub} Pack`,
        Zb = Rb ? `Your ${yb} is Ready!` : "Welcome To Super Rank!",
        Db = Rb ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        zb = Rb ? !jb.getOwnedCosmeticPacks().includes(Ub) : !jb.playerHasRank("super"),
        xb = Rb ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Xb.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [kb && (0, Xb.jsx)(kb, {}), !Rb && (0, Xb.jsx)(vb.c, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Xb.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Zb
        }), (0, Xb.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Db
        }), zb && (0, Xb.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Xb.jsx)(Pb.e, {
            name: "circle-info"
          }), (0, Xb.jsx)("div", {
            children: xb
          })]
        }), (0, Xb.jsx)(Bb.LinkPreserveSearch, {
          to: "/",
          children: (0, Xb.jsx)(Yb.m, {
            className: "PurchaseWelcomeContinue",
            children: ab("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);