export const id = 107;
export const ids = [107];
export const modules = {
  5502: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => fc
    });
    var Vc = nc(1344),
      Ic = nc(1386),
      rB = nc(2254),
      uc = nc(1255),
      sc = nc(1330),
      Mc = nc(985),
      Pc = nc(918),
      qB = nc(1051),
      Oc = nc(926),
      Tc = nc(957);

    function fc() {
      var cB;
      const {
        t: Bc
      } = (0, qB.x)(), {
        pack: nc
      } = (0, Vc.z)(), {
        userContext: fc
      } = (0, Mc.c)();
      if (nc) {
        const cB = Ic.d[nc];
        if (null === cB || void 0 === cB || !cB.purchasable) return (0, Tc.jsx)(sc.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const mB = nc ? Ic.d[nc] : null,
        ec = nc ? rB.k[nc] : null,
        tB = mB ? `Your ${null!==(cB=mB.displayName)&&void 0!==cB?cB:nc} Pack is Ready!` : "Welcome To Super Rank!",
        Sc = mB ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        yB = mB ? !fc.getOwnedCosmeticPacks().includes(nc) : !fc.playerHasRank("super"),
        zB = mB ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Tc.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [ec && (0, Tc.jsx)(ec, {}), !mB && (0, Tc.jsx)(Pc.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Tc.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: tB
        }), (0, Tc.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Sc
        }), yB && (0, Tc.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Tc.jsx)(Oc.e, {
            name: "circle-info"
          }), (0, Tc.jsx)("div", {
            children: zB
          })]
        }), (0, Tc.jsx)(sc.LinkPreserveSearch, {
          to: "/",
          children: (0, Tc.jsx)(uc.n, {
            className: "PurchaseWelcomeContinue",
            children: Bc("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);