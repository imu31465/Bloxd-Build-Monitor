export const id = 125;
export const ids = [125];
export const modules = {
  6488: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Om
    });
    var hm = fm(1537),
      Am = fm(1563),
      am = fm(2995),
      xm = fm(2246),
      wm = fm(1454),
      Dm = fm(1519),
      im = fm(1160),
      Rm = fm(1087),
      pm = fm(1208),
      Em = fm(1089),
      om = fm(1135);

    function Om() {
      var mm;
      const {
        t: Tm
      } = (0, pm.A)(), {
        pack: fm
      } = (0, hm.G)(), {
        userContext: Om
      } = (0, im.e)();
      if (fm) {
        const mm = Am.b[fm];
        if (null === mm || void 0 === mm || !mm.purchasable) return (0, om.jsx)(Dm.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Ym = fm ? Am.b[fm] : null,
        qm = fm ? am.k[(0, xm.l)(fm)] : null,
        jm = void 0 !== (null === Ym || void 0 === Ym ? void 0 : Ym.characterSet) || null !== Ym && void 0 !== Ym && Ym.singleItem ? Ym.displayName : `${null!==(mm=null===Ym||void 0===Ym?void 0:Ym.displayName)&&void 0!==mm?mm:fm} Pack`,
        Vm = Ym ? `Your ${jm} is Ready!` : "Welcome To Super Rank!",
        Im = Ym ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Km = Ym ? !Om.getOwnedCosmeticPacks().includes(fm) : !Om.playerHasRank("super"),
        Qm = Ym ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, om.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [qm && (0, om.jsx)(qm, {}), !Ym && (0, om.jsx)(Rm.e, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, om.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Vm
        }), (0, om.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Im
        }), Km && (0, om.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, om.jsx)(Em.c, {
            name: "circle-info"
          }), (0, om.jsx)("div", {
            children: Qm
          })]
        }), (0, om.jsx)(Dm.LinkPreserveSearch, {
          to: "/",
          children: (0, om.jsx)(wm.m, {
            className: "PurchaseWelcomeContinue",
            children: Tm("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);