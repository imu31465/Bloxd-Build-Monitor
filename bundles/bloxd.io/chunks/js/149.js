export const id = 149;
export const ids = [149];
export const modules = {
  7496: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => yd
    });
    var Wd = md(1650),
      Fd = md(1679),
      Rd = md(4096),
      Xd = md(3198),
      Kd = md(1572),
      hd = md(1641),
      vd = md(1186),
      Qd = md(66),
      td = md(1443),
      od = md(1341);

    function Nd(dd) {
      let {
        iconName: Od,
        iconCountPerGroup: md,
        animation: Wd,
        midShowerStart: Fd = !1,
        customClass: Rd
      } = dd;
      const [Xd, Kd] = (0, Qd.useState)({});
      return (0, Qd.useEffect)((() => {
        const dd = {};
        for (const Od of Array.from(Array(3).keys())) {
          dd[Od] = [];
          for (let Wd = 0; Wd < md; Wd++) dd[Od].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (Fd ? -1 : 1) + "s"
          })
        }
        Kd(dd)
      }), [md, Fd]), (0, od.jsx)("div", {
        className: `IconShower IconShowerAnimation${Wd} ${null!==Rd&&void 0!==Rd?Rd:""}`,
        children: Object.keys(Xd).map((dd => Xd[dd].map((md => (0, od.jsx)("div", {
          className: `Icon IconGroup${dd}`,
          style: {
            left: md.left,
            animationDelay: md.animationDelay
          },
          children: (0, od.jsx)(td.c, {
            name: Od
          })
        }, md.left)))))
      })
    }
    var qd = md(1238),
      Hd = md(3277);

    function yd() {
      var dd;
      const {
        t: Od
      } = (0, qd.G)(), {
        pack: md
      } = (0, Wd.u)(), {
        userContext: Qd
      } = (0, vd.d)();
      if (md) {
        const dd = Fd.c[md];
        if (null === dd || void 0 === dd || !dd.purchasable) return (0, od.jsx)(hd.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const yd = md ? Fd.c[md] : null,
        bd = md ? Rd.n[(0, Xd.k)(md)] : null,
        Td = void 0 !== (null === yd || void 0 === yd ? void 0 : yd.characterSet) || null !== yd && void 0 !== yd && yd.singleItem ? yd.displayName : `${null!==(dd=null===yd||void 0===yd?void 0:yd.displayName)&&void 0!==dd?dd:md} Pack`,
        pd = Date.now(),
        Yd = Od((0, Hd.v)(pd).nameKey),
        gd = yd ? `Your ${Td} is Ready!` : `Welcome To ${Yd}!`,
        wd = yd ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Ed = yd ? !Qd.getOwnedCosmeticPacks().includes(md) : !(0, Hd.m)(Qd.getPlayerRanks(), pd),
        Jd = yd ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${Yd} instantly, but it could take up to an hour to apply. If you don't have ${Yd} after an hour, contact help@bloxd.io.`;
      return (0, od.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [bd && (0, od.jsx)(bd, {}), !yd && (0, od.jsx)(Nd, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, od.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: gd
        }), (0, od.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: wd
        }), Ed && (0, od.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, od.jsx)(td.c, {
            name: "circle-info"
          }), (0, od.jsx)("div", {
            children: Jd
          })]
        }), (0, od.jsx)(hd.LinkPreserveSearch, {
          to: "/",
          children: (0, od.jsx)(Kd.m, {
            className: "PurchaseWelcomeContinue",
            children: Od("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);