export const id = 118;
export const ids = [118];
export const modules = {
  6258: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Zz
    });
    var Ez = bz(1490),
      nz = bz(1527),
      iz = bz(2754),
      lz = bz(2175),
      Mz = bz(1419),
      tz = bz(1482),
      Hz = bz(1114),
      Oz = bz(1040),
      pz = bz(1181),
      dz = bz(1047),
      Fz = bz(1089);

    function Zz() {
      var zz;
      const {
        t: uz
      } = (0, pz.F)(), {
        pack: bz
      } = (0, Ez.D)(), {
        userContext: Zz
      } = (0, Hz.c)();
      if (bz) {
        const zz = nz.e[bz];
        if (null === zz || void 0 === zz || !zz.purchasable) return (0, Fz.jsx)(tz.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Rz = bz ? nz.e[bz] : null,
        Kz = bz ? iz.h[(0, lz.j)(bz)] : null,
        wz = void 0 !== (null === Rz || void 0 === Rz ? void 0 : Rz.characterSet) || null !== Rz && void 0 !== Rz && Rz.singleItem ? Rz.displayName : `${null!==(zz=null===Rz||void 0===Rz?void 0:Rz.displayName)&&void 0!==zz?zz:bz} Pack`,
        Xz = Rz ? `Your ${wz} is Ready!` : "Welcome To Super Rank!",
        fz = Rz ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        sz = Rz ? !Zz.getOwnedCosmeticPacks().includes(bz) : !Zz.playerHasRank("super"),
        rz = Rz ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Fz.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [Kz && (0, Fz.jsx)(Kz, {}), !Rz && (0, Fz.jsx)(Oz.d, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Fz.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Xz
        }), (0, Fz.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: fz
        }), sz && (0, Fz.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Fz.jsx)(dz.c, {
            name: "circle-info"
          }), (0, Fz.jsx)("div", {
            children: rz
          })]
        }), (0, Fz.jsx)(tz.LinkPreserveSearch, {
          to: "/",
          children: (0, Fz.jsx)(Mz.q, {
            className: "PurchaseWelcomeContinue",
            children: uz("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);