export const id = 127;
export const ids = [127];
export const modules = {
  6733: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => ft
    });
    var Ot = Vt(1623),
      qt = Vt(1652),
      Dt = Vt(3072),
      mt = Vt(2324),
      dt = Vt(1556),
      jt = Vt(1613),
      Ht = Vt(1218),
      Xt = Vt(1145),
      Qt = Vt(1286),
      lt = Vt(1152),
      Et = Vt(1188);

    function ft() {
      var tt;
      const {
        t: et
      } = (0, Qt.H)(), {
        pack: Vt
      } = (0, Ot.B)(), {
        userContext: ft
      } = (0, Ht.d)();
      if (Vt) {
        const tt = qt.d[Vt];
        if (null === tt || void 0 === tt || !tt.purchasable) return (0, Et.jsx)(jt.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const wt = Vt ? qt.d[Vt] : null,
        yt = Vt ? Dt.k[(0, mt.e)(Vt)] : null,
        Nt = void 0 !== (null === wt || void 0 === wt ? void 0 : wt.characterSet) || null !== wt && void 0 !== wt && wt.singleItem ? wt.displayName : `${null!==(tt=null===wt||void 0===wt?void 0:wt.displayName)&&void 0!==tt?tt:Vt} Pack`,
        Mt = wt ? `Your ${Nt} is Ready!` : "Welcome To Super Rank!",
        bt = wt ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Jt = wt ? !ft.getOwnedCosmeticPacks().includes(Vt) : !ft.playerHasRank("super"),
        Ct = wt ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Et.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [yt && (0, Et.jsx)(yt, {}), !wt && (0, Et.jsx)(Xt.c, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Et.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Mt
        }), (0, Et.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: bt
        }), Jt && (0, Et.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Et.jsx)(lt.b, {
            name: "circle-info"
          }), (0, Et.jsx)("div", {
            children: Ct
          })]
        }), (0, Et.jsx)(jt.LinkPreserveSearch, {
          to: "/",
          children: (0, Et.jsx)(dt.m, {
            className: "PurchaseWelcomeContinue",
            children: et("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);