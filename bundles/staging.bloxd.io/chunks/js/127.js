export const id = 127;
export const ids = [127];
export const modules = {
  6743: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Ou
    });
    var su = ju(1580),
      Uu = ju(1611),
      Zu = ju(3175),
      Xu = ju(2393),
      lu = ju(1506),
      qu = ju(1570),
      fu = ju(1178),
      Cu = ju(1114),
      bu = ju(1244),
      cu = ju(1116),
      Nu = ju(1154);

    function Ou() {
      var uu;
      const {
        t: Eu
      } = (0, bu.A)(), {
        pack: ju
      } = (0, su.B)(), {
        userContext: Ou
      } = (0, fu.c)();
      if (ju) {
        const uu = Uu.e[ju];
        if (null === uu || void 0 === uu || !uu.purchasable) return (0, Nu.jsx)(qu.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Yu = ju ? Uu.e[ju] : null,
        hu = ju ? Zu.k[(0, Xu.j)(ju)] : null,
        Du = void 0 !== (null === Yu || void 0 === Yu ? void 0 : Yu.characterSet) || null !== Yu && void 0 !== Yu && Yu.singleItem ? Yu.displayName : `${null!==(uu=null===Yu||void 0===Yu?void 0:Yu.displayName)&&void 0!==uu?uu:ju} Pack`,
        gu = Yu ? `Your ${Du} is Ready!` : "Welcome To Super Rank!",
        Mu = Yu ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        eu = Yu ? !Ou.getOwnedCosmeticPacks().includes(ju) : !Ou.playerHasRank("super"),
        Gu = Yu ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Nu.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [hu && (0, Nu.jsx)(hu, {}), !Yu && (0, Nu.jsx)(Cu.c, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Nu.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: gu
        }), (0, Nu.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Mu
        }), eu && (0, Nu.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Nu.jsx)(cu.e, {
            name: "circle-info"
          }), (0, Nu.jsx)("div", {
            children: Gu
          })]
        }), (0, Nu.jsx)(qu.LinkPreserveSearch, {
          to: "/",
          children: (0, Nu.jsx)(lu.p, {
            className: "PurchaseWelcomeContinue",
            children: Eu("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);