export const id = 104;
export const ids = [104];
export const modules = {
  5499: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => EF
    });
    var CF = SF(1360),
      AF = SF(1404),
      uF = SF(2273),
      hF = SF(1266),
      bW = SF(1352),
      dF = SF(996),
      PF = SF(925),
      RF = SF(1046),
      iW = SF(929),
      eF = SF(971);

    function EF() {
      var FF;
      const {
        t: WF
      } = (0, RF.B)(), {
        pack: SF
      } = (0, CF.v)(), {
        userContext: EF
      } = (0, dF.b)();
      if (SF) {
        const FF = AF.d[SF];
        if (null === FF || void 0 === FF || !FF.purchasable) return (0, eF.jsx)(bW.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const QF = SF ? AF.d[SF] : null,
        rW = SF ? uF.m[SF] : null,
        gW = QF ? `Your ${null!==(FF=QF.displayName)&&void 0!==FF?FF:SF} Pack is Ready!` : "Welcome To Super Rank!",
        tW = QF ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        TF = QF ? !EF.getOwnedCosmeticPacks().includes(SF) : !EF.playerHasRank("super"),
        aW = QF ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, eF.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [rW && (0, eF.jsx)(rW, {}), !QF && (0, eF.jsx)(PF.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, eF.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: gW
        }), (0, eF.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: tW
        }), TF && (0, eF.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, eF.jsx)(iW.e, {
            name: "circle-info"
          }), (0, eF.jsx)("div", {
            children: aW
          })]
        }), (0, eF.jsx)(bW.LinkPreserveSearch, {
          to: "/",
          children: (0, eF.jsx)(hF.k, {
            className: "PurchaseWelcomeContinue",
            children: WF("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);