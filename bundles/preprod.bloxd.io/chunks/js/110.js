export const id = 110;
export const ids = [110];
export const modules = {
  5780: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => sy
    });
    var Uy = Wy(1370),
      hy = Wy(1397),
      fy = Wy(2326),
      Zy = Wy(1885),
      cb = Wy(1273),
      Py = Wy(1356),
      oy = Wy(980),
      By = Wy(904),
      Ky = Wy(1042),
      ey = Wy(910),
      qb = Wy(952);

    function sy() {
      var yb;
      const {
        t: bb
      } = (0, Ky.D)(), {
        pack: Wy
      } = (0, Uy.F)(), {
        userContext: sy
      } = (0, oy.c)();
      if (Wy) {
        const yb = hy.e[Wy];
        if (null === yb || void 0 === yb || !yb.purchasable) return (0, qb.jsx)(Py.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Sy = Wy ? hy.e[Wy] : null,
        Ey = Wy ? fy.n[(0, Zy.g)(Wy)] : null,
        ly = void 0 === (null === Sy || void 0 === Sy ? void 0 : Sy.characterSet) ? `${null!==(yb=null===Sy||void 0===Sy?void 0:Sy.displayName)&&void 0!==yb?yb:Wy} Pack` : Sy.displayName,
        mb = Sy ? `Your ${ly} is Ready!` : "Welcome To Super Rank!",
        Cy = Sy ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Ty = Sy ? !sy.getOwnedCosmeticPacks().includes(Wy) : !sy.playerHasRank("super"),
        Vy = Sy ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, qb.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [Ey && (0, qb.jsx)(Ey, {}), !Sy && (0, qb.jsx)(By.e, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, qb.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: mb
        }), (0, qb.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Cy
        }), Ty && (0, qb.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, qb.jsx)(ey.e, {
            name: "circle-info"
          }), (0, qb.jsx)("div", {
            children: Vy
          })]
        }), (0, qb.jsx)(Py.LinkPreserveSearch, {
          to: "/",
          children: (0, qb.jsx)(cb.i, {
            className: "PurchaseWelcomeContinue",
            children: bb("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);