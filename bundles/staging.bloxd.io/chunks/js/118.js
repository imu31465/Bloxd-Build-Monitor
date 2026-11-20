export const id = 118;
export const ids = [118];
export const modules = {
  6111: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => wz
    });
    var Fz = sz(1493),
      Wz = sz(1518),
      Xz = sz(2728),
      Oz = sz(2181),
      oz = sz(1419),
      vz = sz(1483),
      Uz = sz(1116),
      Kz = sz(1028),
      uz = sz(1173),
      Nz = sz(1036),
      bz = sz(1087);

    function wz() {
      var zz;
      const {
        t: tz
      } = (0, uz.B)(), {
        pack: sz
      } = (0, Fz.C)(), {
        userContext: wz
      } = (0, Uz.b)();
      if (sz) {
        const zz = Wz.e[sz];
        if (null === zz || void 0 === zz || !zz.purchasable) return (0, bz.jsx)(vz.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Dz = sz ? Wz.e[sz] : null,
        gz = sz ? Xz.k[(0, Oz.j)(sz)] : null,
        Hz = void 0 !== (null === Dz || void 0 === Dz ? void 0 : Dz.characterSet) || null !== Dz && void 0 !== Dz && Dz.singleItem ? Dz.displayName : `${null!==(zz=null===Dz||void 0===Dz?void 0:Dz.displayName)&&void 0!==zz?zz:sz} Pack`,
        Bz = Dz ? `Your ${Hz} is Ready!` : "Welcome To Super Rank!",
        Pz = Dz ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        rz = Dz ? !wz.getOwnedCosmeticPacks().includes(sz) : !wz.playerHasRank("super"),
        Yz = Dz ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, bz.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [gz && (0, bz.jsx)(gz, {}), !Dz && (0, bz.jsx)(Kz.e, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, bz.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Bz
        }), (0, bz.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Pz
        }), rz && (0, bz.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, bz.jsx)(Nz.c, {
            name: "circle-info"
          }), (0, bz.jsx)("div", {
            children: Yz
          })]
        }), (0, bz.jsx)(vz.LinkPreserveSearch, {
          to: "/",
          children: (0, bz.jsx)(oz.p, {
            className: "PurchaseWelcomeContinue",
            children: tz("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);