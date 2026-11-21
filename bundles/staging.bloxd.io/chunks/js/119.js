export const id = 119;
export const ids = [119];
export const modules = {
  6402: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Ld
    });
    var pd = kd(1557),
      Nd = kd(1594),
      Wd = kd(2845),
      Pd = kd(2238),
      Zd = kd(1461),
      gd = kd(1543),
      Cd = kd(1140),
      Kd = kd(1053),
      od = kd(1211),
      ld = kd(1059),
      Qd = kd(1103);

    function Ld() {
      var dd;
      const {
        t: Jd
      } = (0, od.B)(), {
        pack: kd
      } = (0, pd.y)(), {
        userContext: Ld
      } = (0, Cd.c)();
      if (kd) {
        const dd = Nd.d[kd];
        if (null === dd || void 0 === dd || !dd.purchasable) return (0, Qd.jsx)(gd.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Od = kd ? Nd.d[kd] : null,
        ed = kd ? Wd.k[(0, Pd.o)(kd)] : null,
        Rd = void 0 !== (null === Od || void 0 === Od ? void 0 : Od.characterSet) || null !== Od && void 0 !== Od && Od.singleItem ? Od.displayName : `${null!==(dd=null===Od||void 0===Od?void 0:Od.displayName)&&void 0!==dd?dd:kd} Pack`,
        Id = Od ? `Your ${Rd} is Ready!` : "Welcome To Super Rank!",
        Gd = Od ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        vd = Od ? !Ld.getOwnedCosmeticPacks().includes(kd) : !Ld.playerHasRank("super"),
        xd = Od ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Qd.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [ed && (0, Qd.jsx)(ed, {}), !Od && (0, Qd.jsx)(Kd.e, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Qd.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Id
        }), (0, Qd.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Gd
        }), vd && (0, Qd.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Qd.jsx)(ld.e, {
            name: "circle-info"
          }), (0, Qd.jsx)("div", {
            children: xd
          })]
        }), (0, Qd.jsx)(gd.LinkPreserveSearch, {
          to: "/",
          children: (0, Qd.jsx)(Zd.j, {
            className: "PurchaseWelcomeContinue",
            children: Jd("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);