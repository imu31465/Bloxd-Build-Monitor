export const id = 118;
export const ids = [118];
export const modules = {
  6246: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => av
    });
    var hv = Pv(1505),
      Sv = Pv(1542),
      ev = Pv(2769),
      gv = Pv(2205),
      pv = Pv(1442),
      dv = Pv(1492),
      Nv = Pv(1108),
      lv = Pv(1040),
      Tv = Pv(1175),
      Wv = Pv(1042),
      wv = Pv(1082);

    function av() {
      var vv;
      const {
        t: zv
      } = (0, Tv.x)(), {
        pack: Pv
      } = (0, hv.B)(), {
        userContext: av
      } = (0, Nv.d)();
      if (Pv) {
        const vv = Sv.b[Pv];
        if (null === vv || void 0 === vv || !vv.purchasable) return (0, wv.jsx)(dv.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const sv = Pv ? Sv.b[Pv] : null,
        Cv = Pv ? ev.k[(0, gv.m)(Pv)] : null,
        iv = void 0 !== (null === sv || void 0 === sv ? void 0 : sv.characterSet) || null !== sv && void 0 !== sv && sv.singleItem ? sv.displayName : `${null!==(vv=null===sv||void 0===sv?void 0:sv.displayName)&&void 0!==vv?vv:Pv} Pack`,
        cv = sv ? `Your ${iv} is Ready!` : "Welcome To Super Rank!",
        Gv = sv ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        mv = sv ? !av.getOwnedCosmeticPacks().includes(Pv) : !av.playerHasRank("super"),
        jv = sv ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, wv.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [Cv && (0, wv.jsx)(Cv, {}), !sv && (0, wv.jsx)(lv.c, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, wv.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: cv
        }), (0, wv.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Gv
        }), mv && (0, wv.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, wv.jsx)(Wv.b, {
            name: "circle-info"
          }), (0, wv.jsx)("div", {
            children: jv
          })]
        }), (0, wv.jsx)(dv.LinkPreserveSearch, {
          to: "/",
          children: (0, wv.jsx)(pv.j, {
            className: "PurchaseWelcomeContinue",
            children: zv("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);