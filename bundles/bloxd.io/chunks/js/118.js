export const id = 118;
export const ids = [118];
export const modules = {
  6302: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Su
    });
    var Eu = yu(1483),
      Ku = yu(1511),
      Qu = yu(2774),
      mu = yu(2171),
      Ju = yu(1408),
      Nu = yu(1467),
      Xu = yu(1107),
      Vu = yu(1037),
      ru = yu(1170),
      Bu = yu(1043),
      xu = yu(1079);

    function Su() {
      var uu;
      const {
        t: Ru
      } = (0, ru.E)(), {
        pack: yu
      } = (0, Eu.A)(), {
        userContext: Su
      } = (0, Xu.d)();
      if (yu) {
        const uu = Ku.d[yu];
        if (null === uu || void 0 === uu || !uu.purchasable) return (0, xu.jsx)(Nu.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const pu = yu ? Ku.d[yu] : null,
        Tu = yu ? Qu.l[(0, mu.p)(yu)] : null,
        Wu = void 0 !== (null === pu || void 0 === pu ? void 0 : pu.characterSet) || null !== pu && void 0 !== pu && pu.singleItem ? pu.displayName : `${null!==(uu=null===pu||void 0===pu?void 0:pu.displayName)&&void 0!==uu?uu:yu} Pack`,
        ju = pu ? `Your ${Wu} is Ready!` : "Welcome To Super Rank!",
        Hu = pu ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        du = pu ? !Su.getOwnedCosmeticPacks().includes(yu) : !Su.playerHasRank("super"),
        bu = pu ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, xu.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [Tu && (0, xu.jsx)(Tu, {}), !pu && (0, xu.jsx)(Vu.d, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, xu.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: ju
        }), (0, xu.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Hu
        }), du && (0, xu.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, xu.jsx)(Bu.c, {
            name: "circle-info"
          }), (0, xu.jsx)("div", {
            children: bu
          })]
        }), (0, xu.jsx)(Nu.LinkPreserveSearch, {
          to: "/",
          children: (0, xu.jsx)(Ju.l, {
            className: "PurchaseWelcomeContinue",
            children: Ru("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);