export const id = 127;
export const ids = [127];
export const modules = {
  6679: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => yp
    });
    var Op = cp(1543),
      op = cp(1577),
      Ip = cp(3098),
      Sp = cp(2334),
      xp = cp(1480),
      Lp = cp(1538),
      Yp = cp(1141),
      Dp = cp(1055),
      Ap = cp(1201),
      Pp = cp(1060),
      Wp = cp(1112);

    function yp() {
      var pp;
      const {
        t: ip
      } = (0, Ap.H)(), {
        pack: cp
      } = (0, Op.A)(), {
        userContext: yp
      } = (0, Yp.b)();
      if (cp) {
        const pp = op.e[cp];
        if (null === pp || void 0 === pp || !pp.purchasable) return (0, Wp.jsx)(Lp.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Up = cp ? op.e[cp] : null,
        wp = cp ? Ip.i[(0, Sp.g)(cp)] : null,
        vp = void 0 !== (null === Up || void 0 === Up ? void 0 : Up.characterSet) || null !== Up && void 0 !== Up && Up.singleItem ? Up.displayName : `${null!==(pp=null===Up||void 0===Up?void 0:Up.displayName)&&void 0!==pp?pp:cp} Pack`,
        tp = Up ? `Your ${vp} is Ready!` : "Welcome To Super Rank!",
        Hp = Up ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        dp = Up ? !yp.getOwnedCosmeticPacks().includes(cp) : !yp.playerHasRank("super"),
        ep = Up ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Wp.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [wp && (0, Wp.jsx)(wp, {}), !Up && (0, Wp.jsx)(Dp.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Wp.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: tp
        }), (0, Wp.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Hp
        }), dp && (0, Wp.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Wp.jsx)(Pp.d, {
            name: "circle-info"
          }), (0, Wp.jsx)("div", {
            children: ep
          })]
        }), (0, Wp.jsx)(Lp.LinkPreserveSearch, {
          to: "/",
          children: (0, Wp.jsx)(xp.o, {
            className: "PurchaseWelcomeContinue",
            children: ip("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);