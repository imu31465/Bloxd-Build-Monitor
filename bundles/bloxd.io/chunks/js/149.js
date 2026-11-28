export const id = 149;
export const ids = [149];
export const modules = {
  7734: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Fb
    });
    var eb = Mb(1696),
      Hb = Mb(1726),
      pb = Mb(4270),
      Vb = Mb(3285),
      gb = Mb(1616),
      lb = Mb(1686),
      Lb = Mb(1179),
      Ib = Mb(64),
      Ob = Mb(1475),
      Ub = Mb(1364);

    function tb(bb) {
      let {
        iconName: wb,
        iconCountPerGroup: Mb,
        animation: eb,
        midShowerStart: Hb = !1,
        customClass: pb
      } = bb;
      const [Vb, gb] = (0, Ib.useState)({});
      return (0, Ib.useEffect)((() => {
        const bb = {};
        for (const wb of Array.from(Array(3).keys())) {
          bb[wb] = [];
          for (let eb = 0; eb < Mb; eb++) bb[wb].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (Hb ? -1 : 1) + "s"
          })
        }
        gb(bb)
      }), [Mb, Hb]), (0, Ub.jsx)("div", {
        className: `IconShower IconShowerAnimation${eb} ${null!==pb&&void 0!==pb?pb:""}`,
        children: Object.keys(Vb).map((bb => Vb[bb].map((Mb => (0, Ub.jsx)("div", {
          className: `Icon IconGroup${bb}`,
          style: {
            left: Mb.left,
            animationDelay: Mb.animationDelay
          },
          children: (0, Ub.jsx)(Ob.b, {
            name: wb
          })
        }, Mb.left)))))
      })
    }
    var Cb = Mb(1259),
      Eb = Mb(3357);

    function Fb() {
      var bb;
      const {
        t: wb
      } = (0, Cb.C)(), {
        pack: Mb
      } = (0, eb.E)(), {
        userContext: Ib
      } = (0, Lb.e)();
      if (Mb) {
        const bb = Hb.c[Mb];
        if (null === bb || void 0 === bb || !bb.purchasable) return (0, Ub.jsx)(lb.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Fb = Mb ? Hb.c[Mb] : null,
        Bb = Mb ? pb.m[(0, Vb.l)(Mb)] : null,
        sb = void 0 !== (null === Fb || void 0 === Fb ? void 0 : Fb.characterSet) || null !== Fb && void 0 !== Fb && Fb.singleItem ? Fb.displayName : `${null!==(bb=null===Fb||void 0===Fb?void 0:Fb.displayName)&&void 0!==bb?bb:Mb} Pack`,
        mb = Date.now(),
        hb = wb((0, Eb.s)(mb).nameKey),
        zb = Fb ? `Your ${sb} is Ready!` : `Welcome To ${hb}!`,
        Xb = Fb ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        xb = Fb ? !Ib.getOwnedCosmeticPacks().includes(Mb) : !(0, Eb.n)(Ib.getPlayerRanks(), mb),
        jb = Fb ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${hb} instantly, but it could take up to an hour to apply. If you don't have ${hb} after an hour, contact help@bloxd.io.`;
      return (0, Ub.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [Bb && (0, Ub.jsx)(Bb, {}), !Fb && (0, Ub.jsx)(tb, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Ub.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: zb
        }), (0, Ub.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Xb
        }), xb && (0, Ub.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Ub.jsx)(Ob.b, {
            name: "circle-info"
          }), (0, Ub.jsx)("div", {
            children: jb
          })]
        }), (0, Ub.jsx)(lb.LinkPreserveSearch, {
          to: "/",
          children: (0, Ub.jsx)(gb.p, {
            className: "PurchaseWelcomeContinue",
            children: wb("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);