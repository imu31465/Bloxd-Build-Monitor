export const id = 118;
export const ids = [118];
export const modules = {
  6231: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => ek
    });
    var Rk = Bk(1473),
      tk = Bk(1506),
      ak = Bk(2785),
      Xk = Bk(2179),
      bk = Bk(1389),
      wk = Bk(1459),
      dk = Bk(1096),
      sk = Bk(1024),
      Vk = Bk(1149),
      Jk = Bk(1028),
      Ak = Bk(1069);

    function ek() {
      var kk;
      const {
        t: Fk
      } = (0, Vk.x)(), {
        pack: Bk
      } = (0, Rk.x)(), {
        userContext: ek
      } = (0, dk.e)();
      if (Bk) {
        const kk = tk.d[Bk];
        if (null === kk || void 0 === kk || !kk.purchasable) return (0, Ak.jsx)(wk.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const yk = Bk ? tk.d[Bk] : null,
        fk = Bk ? ak.n[(0, Xk.k)(Bk)] : null,
        mk = void 0 !== (null === yk || void 0 === yk ? void 0 : yk.characterSet) || null !== yk && void 0 !== yk && yk.singleItem ? yk.displayName : `${null!==(kk=null===yk||void 0===yk?void 0:yk.displayName)&&void 0!==kk?kk:Bk} Pack`,
        Wk = yk ? `Your ${mk} is Ready!` : "Welcome To Super Rank!",
        vk = yk ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        ik = yk ? !ek.getOwnedCosmeticPacks().includes(Bk) : !ek.playerHasRank("super"),
        Yk = yk ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Ak.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [fk && (0, Ak.jsx)(fk, {}), !yk && (0, Ak.jsx)(sk.e, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Ak.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Wk
        }), (0, Ak.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: vk
        }), ik && (0, Ak.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Ak.jsx)(Jk.d, {
            name: "circle-info"
          }), (0, Ak.jsx)("div", {
            children: Yk
          })]
        }), (0, Ak.jsx)(wk.LinkPreserveSearch, {
          to: "/",
          children: (0, Ak.jsx)(bk.o, {
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