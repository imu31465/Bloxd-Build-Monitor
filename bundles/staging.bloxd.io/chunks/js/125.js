export const id = 125;
export const ids = [125];
export const modules = {
  6522: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => ek
    });
    var Xk = Ik(1485),
      Tk = Ik(1515),
      ik = Ik(2929),
      yk = Ik(2199),
      lk = Ik(1406),
      ak = Ik(1475),
      qk = Ik(1118),
      Lk = Ik(1063),
      tk = Ik(1179),
      Zk = Ik(1066),
      jk = Ik(1096);

    function ek() {
      var kk;
      const {
        t: Fk
      } = (0, tk.y)(), {
        pack: Ik
      } = (0, Xk.A)(), {
        userContext: ek
      } = (0, qk.d)();
      if (Ik) {
        const kk = Tk.d[Ik];
        if (null === kk || void 0 === kk || !kk.purchasable) return (0, jk.jsx)(ak.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const wk = Ik ? Tk.d[Ik] : null,
        Hk = Ik ? ik.l[(0, yk.l)(Ik)] : null,
        Jk = void 0 !== (null === wk || void 0 === wk ? void 0 : wk.characterSet) || null !== wk && void 0 !== wk && wk.singleItem ? wk.displayName : `${null!==(kk=null===wk||void 0===wk?void 0:wk.displayName)&&void 0!==kk?kk:Ik} Pack`,
        xk = wk ? `Your ${Jk} is Ready!` : "Welcome To Super Rank!",
        Pk = wk ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Kk = wk ? !ek.getOwnedCosmeticPacks().includes(Ik) : !ek.playerHasRank("super"),
        Qk = wk ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, jk.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [Hk && (0, jk.jsx)(Hk, {}), !wk && (0, jk.jsx)(Lk.c, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, jk.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: xk
        }), (0, jk.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Pk
        }), Kk && (0, jk.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, jk.jsx)(Zk.e, {
            name: "circle-info"
          }), (0, jk.jsx)("div", {
            children: Qk
          })]
        }), (0, jk.jsx)(ak.LinkPreserveSearch, {
          to: "/",
          children: (0, jk.jsx)(lk.m, {
            className: "PurchaseWelcomeContinue",
            children: Fk("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);