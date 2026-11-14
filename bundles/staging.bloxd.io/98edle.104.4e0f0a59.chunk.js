export const id = 104;
export const ids = [104];
export const modules = {
  5537: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => TW
    });
    var wW = MW(1345),
      CW = MW(1392),
      zR = MW(2218),
      AW = MW(1255),
      bR = MW(1330),
      yR = MW(969),
      NW = MW(899),
      eW = MW(1027),
      BW = MW(904),
      tR = MW(940);

    function TW() {
      var WW;
      const {
        t: RW
      } = (0, eW.C)(), {
        pack: MW
      } = (0, wW.A)(), {
        userContext: TW
      } = (0, yR.c)();
      if (MW) {
        const WW = CW.b[MW];
        if (null === WW || void 0 === WW || !WW.purchasable) return (0, tR.jsx)(bR.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const gR = MW ? CW.b[MW] : null,
        iR = MW ? zR.k[MW] : null,
        YW = gR ? `Your ${null!==(WW=gR.displayName)&&void 0!==WW?WW:MW} Pack is Ready!` : "Welcome To Super Rank!",
        JW = gR ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        PW = gR ? !TW.getOwnedCosmeticPacks().includes(MW) : !TW.playerHasRank("super"),
        IW = gR ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, tR.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [iR && (0, tR.jsx)(iR, {}), !gR && (0, tR.jsx)(NW.c, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, tR.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: YW
        }), (0, tR.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: JW
        }), PW && (0, tR.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, tR.jsx)(BW.e, {
            name: "circle-info"
          }), (0, tR.jsx)("div", {
            children: IW
          })]
        }), (0, tR.jsx)(bR.LinkPreserveSearch, {
          to: "/",
          children: (0, tR.jsx)(AW.m, {
            className: "PurchaseWelcomeContinue",
            children: RW("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);