export const id = 149;
export const ids = [149];
export const modules = {
  7505: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => hr
    });
    var Zr = Qr(1653),
      Wr = Qr(1684),
      ar = Qr(4100),
      jr = Qr(3208),
      Ir = Qr(1576),
      fr = Qr(1644),
      Er = Qr(1181),
      pr = Qr(72),
      xr = Qr(1448),
      mr = Qr(1338);

    function Nr(rr) {
      let {
        iconName: Sr,
        iconCountPerGroup: Qr,
        animation: Zr,
        midShowerStart: Wr = !1,
        customClass: ar
      } = rr;
      const [jr, Ir] = (0, pr.useState)({});
      return (0, pr.useEffect)((() => {
        const rr = {};
        for (const Sr of Array.from(Array(3).keys())) {
          rr[Sr] = [];
          for (let Zr = 0; Zr < Qr; Zr++) rr[Sr].push({
            left: 100 * Math.random() + "%",
            animationDelay: 20 * Math.random() * (Wr ? -1 : 1) + "s"
          })
        }
        Ir(rr)
      }), [Qr, Wr]), (0, mr.jsx)("div", {
        className: `IconShower IconShowerAnimation${Zr} ${null!==ar&&void 0!==ar?ar:""}`,
        children: Object.keys(jr).map((rr => jr[rr].map((Qr => (0, mr.jsx)("div", {
          className: `Icon IconGroup${rr}`,
          style: {
            left: Qr.left,
            animationDelay: Qr.animationDelay
          },
          children: (0, mr.jsx)(xr.c, {
            name: Sr
          })
        }, Qr.left)))))
      })
    }
    var Ur = Qr(1251),
      tr = Qr(3267);

    function hr() {
      var rr;
      const {
        t: Sr
      } = (0, Ur.E)(), {
        pack: Qr
      } = (0, Zr.w)(), {
        userContext: pr
      } = (0, Er.c)();
      if (Qr) {
        const rr = Wr.b[Qr];
        if (null === rr || void 0 === rr || !rr.purchasable) return (0, mr.jsx)(fr.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const hr = Qr ? Wr.b[Qr] : null,
        zr = Qr ? ar.i[(0, jr.k)(Qr)] : null,
        Yr = void 0 !== (null === hr || void 0 === hr ? void 0 : hr.characterSet) || null !== hr && void 0 !== hr && hr.singleItem ? hr.displayName : `${null!==(rr=null===hr||void 0===hr?void 0:hr.displayName)&&void 0!==rr?rr:Qr} Pack`,
        nr = Date.now(),
        er = Sr((0, tr.r)(nr).nameKey),
        Kr = hr ? `Your ${Yr} is Ready!` : `Welcome To ${er}!`,
        yr = hr ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Br = hr ? !pr.getOwnedCosmeticPacks().includes(Qr) : !(0, tr.j)(pr.getPlayerRanks(), nr),
        Tr = hr ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${er} instantly, but it could take up to an hour to apply. If you don't have ${er} after an hour, contact help@bloxd.io.`;
      return (0, mr.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [zr && (0, mr.jsx)(zr, {}), !hr && (0, mr.jsx)(Nr, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, mr.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Kr
        }), (0, mr.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: yr
        }), Br && (0, mr.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, mr.jsx)(xr.c, {
            name: "circle-info"
          }), (0, mr.jsx)("div", {
            children: Tr
          })]
        }), (0, mr.jsx)(fr.LinkPreserveSearch, {
          to: "/",
          children: (0, mr.jsx)(Ir.p, {
            className: "PurchaseWelcomeContinue",
            children: Sr("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);