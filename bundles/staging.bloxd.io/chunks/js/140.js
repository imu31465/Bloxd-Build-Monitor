export const id = 140;
export const ids = [140];
export const modules = {
  7184: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => pe
    });
    var ye = He(1515),
      be = He(1553),
      Me = He(3259),
      Ke = He(2337),
      Ue = He(1438),
      Fe = He(1502),
      Je = He(1075),
      oe = He(59),
      Re = He(1323),
      ke = He(1228);

    function qe(ee) {
      let {
        iconName: ie,
        iconCountPerGroup: He,
        animation: ye,
        midShowerStart: be = !1,
        customClass: Me
      } = ee;
      const [Ke, Ue] = (0, oe.useState)({});
      return (0, oe.useEffect)((() => {
        const ee = {};
        for (const ie of Array.from(Array(3).keys())) {
          ee[ie] = [];
          for (let ye = 0; ye < He; ye++) ee[ie].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (be ? -1 : 1) + "s"
          })
        }
        Ue(ee)
      }), [He, be]), (0, ke.jsx)("div", {
        className: `IconShower IconShowerAnimation${ye} ${null!==Me&&void 0!==Me?Me:""}`,
        children: Object.keys(Ke).map((ee => Ke[ee].map((He => (0, ke.jsx)("div", {
          className: `Icon IconGroup${ee}`,
          style: {
            left: He.left,
            animationDelay: He.animationDelay
          },
          children: (0, ke.jsx)(Re.e, {
            name: ie
          })
        }, He.left)))))
      })
    }
    var fe = He(1127),
      Te = He(2397);

    function pe() {
      var ee;
      const {
        t: ie
      } = (0, fe.v)(), {
        pack: He
      } = (0, ye.B)(), {
        userContext: oe
      } = (0, Je.b)();
      if (He) {
        const ee = be.b[He];
        if (null === ee || void 0 === ee || !ee.purchasable) return (0, ke.jsx)(Fe.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const pe = He ? be.b[He] : null,
        Xe = He ? Me.l[(0, Ke.k)(He)] : null,
        ze = void 0 !== (null === pe || void 0 === pe ? void 0 : pe.characterSet) || null !== pe && void 0 !== pe && pe.singleItem ? pe.displayName : `${null!==(ee=null===pe||void 0===pe?void 0:pe.displayName)&&void 0!==ee?ee:He} Pack`,
        Be = Date.now(),
        Ee = ie((0, Te.n)(Be).nameKey),
        ge = pe ? `Your ${ze} is Ready!` : `Welcome To ${Ee}!`,
        Oe = pe ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        de = pe ? !oe.getOwnedCosmeticPacks().includes(He) : !(0, Te.j)(oe.getPlayerRanks(), Be),
        We = pe ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${Ee} instantly, but it could take up to an hour to apply. If you don't have ${Ee} after an hour, contact help@bloxd.io.`;
      return (0, ke.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [Xe && (0, ke.jsx)(Xe, {}), !pe && (0, ke.jsx)(qe, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, ke.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: ge
        }), (0, ke.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: Oe
        }), de && (0, ke.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, ke.jsx)(Re.e, {
            name: "circle-info"
          }), (0, ke.jsx)("div", {
            children: We
          })]
        }), (0, ke.jsx)(Fe.LinkPreserveSearch, {
          to: "/",
          children: (0, ke.jsx)(Ue.m, {
            className: "PurchaseWelcomeContinue",
            children: ie("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);