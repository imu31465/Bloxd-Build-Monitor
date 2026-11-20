export const id = 118;
export const ids = [118];
export const modules = {
  6182: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => mb
    });
    var kb = sb(1511),
      Wb = sb(1542),
      ab = sb(2742),
      Tb = sb(2189),
      Ub = sb(1431),
      Ib = sb(1495),
      Hb = sb(1117),
      fb = sb(1036),
      Mb = sb(1197),
      Xb = sb(1039),
      nb = sb(1087);

    function mb() {
      var bb;
      const {
        t: cb
      } = (0, Mb.E)(), {
        pack: sb
      } = (0, kb.D)(), {
        userContext: mb
      } = (0, Hb.c)();
      if (sb) {
        const bb = Wb.e[sb];
        if (null === bb || void 0 === bb || !bb.purchasable) return (0, nb.jsx)(Ib.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const lb = sb ? Wb.e[sb] : null,
        Qb = sb ? ab.g[(0, Tb.k)(sb)] : null,
        eb = void 0 !== (null === lb || void 0 === lb ? void 0 : lb.characterSet) || null !== lb && void 0 !== lb && lb.singleItem ? lb.displayName : `${null!==(bb=null===lb||void 0===lb?void 0:lb.displayName)&&void 0!==bb?bb:sb} Pack`,
        Cb = lb ? `Your ${eb} is Ready!` : "Welcome To Super Rank!",
        Nb = lb ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Vb = lb ? !mb.getOwnedCosmeticPacks().includes(sb) : !mb.playerHasRank("super"),
        Lb = lb ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, nb.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [Qb && (0, nb.jsx)(Qb, {}), !lb && (0, nb.jsx)(fb.d, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, nb.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Cb
        }), (0, nb.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Nb
        }), Vb && (0, nb.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, nb.jsx)(Xb.b, {
            name: "circle-info"
          }), (0, nb.jsx)("div", {
            children: Lb
          })]
        }), (0, nb.jsx)(Ib.LinkPreserveSearch, {
          to: "/",
          children: (0, nb.jsx)(Ub.n, {
            className: "PurchaseWelcomeContinue",
            children: cb("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);