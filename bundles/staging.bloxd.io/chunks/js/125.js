export const id = 125;
export const ids = [125];
export const modules = {
  6372: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Uk
    });
    var Dk = ik(1496),
      fk = ik(1530),
      Sk = ik(2946),
      bk = ik(2246),
      rk = ik(1410),
      Pk = ik(1479),
      mk = ik(1095),
      Mk = ik(1030),
      Kk = ik(1172),
      xk = ik(1033),
      nk = ik(1066);

    function Uk() {
      var kk;
      const {
        t: ek
      } = (0, Kk.D)(), {
        pack: ik
      } = (0, Dk.y)(), {
        userContext: Uk
      } = (0, mk.d)();
      if (ik) {
        const kk = fk.e[ik];
        if (null === kk || void 0 === kk || !kk.purchasable) return (0, nk.jsx)(Pk.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Hk = ik ? fk.e[ik] : null,
        wk = ik ? Sk.j[(0, bk.m)(ik)] : null,
        lk = void 0 !== (null === Hk || void 0 === Hk ? void 0 : Hk.characterSet) || null !== Hk && void 0 !== Hk && Hk.singleItem ? Hk.displayName : `${null!==(kk=null===Hk||void 0===Hk?void 0:Hk.displayName)&&void 0!==kk?kk:ik} Pack`,
        pk = Hk ? `Your ${lk} is Ready!` : "Welcome To Super Rank!",
        yk = Hk ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Yk = Hk ? !Uk.getOwnedCosmeticPacks().includes(ik) : !Uk.playerHasRank("super"),
        Lk = Hk ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, nk.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [wk && (0, nk.jsx)(wk, {}), !Hk && (0, nk.jsx)(Mk.e, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, nk.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: pk
        }), (0, nk.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: yk
        }), Yk && (0, nk.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, nk.jsx)(xk.d, {
            name: "circle-info"
          }), (0, nk.jsx)("div", {
            children: Lk
          })]
        }), (0, nk.jsx)(Pk.LinkPreserveSearch, {
          to: "/",
          children: (0, nk.jsx)(rk.r, {
            className: "PurchaseWelcomeContinue",
            children: ek("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);