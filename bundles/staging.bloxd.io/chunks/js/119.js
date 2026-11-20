export const id = 119;
export const ids = [119];
export const modules = {
  6405: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => aq
    });
    var Yq = gq(1512),
      lq = gq(1540),
      Oq = gq(2904),
      mq = gq(2243),
      xq = gq(1422),
      Aq = gq(1498),
      cq = gq(1101),
      uq = gq(1023),
      Bq = gq(1183),
      Wq = gq(1025),
      Nq = gq(1070);

    function aq() {
      var qq;
      const {
        t: Eq
      } = (0, Bq.v)(), {
        pack: gq
      } = (0, Yq.v)(), {
        userContext: aq
      } = (0, cq.c)();
      if (gq) {
        const qq = lq.d[gq];
        if (null === qq || void 0 === qq || !qq.purchasable) return (0, Nq.jsx)(Aq.NavigatePreserveSearch, {
          to: "/"
        })
      }
      const Vq = gq ? lq.d[gq] : null,
        dq = gq ? Oq.l[(0, mq.l)(gq)] : null,
        jq = void 0 !== (null === Vq || void 0 === Vq ? void 0 : Vq.characterSet) || null !== Vq && void 0 !== Vq && Vq.singleItem ? Vq.displayName : `${null!==(qq=null===Vq||void 0===Vq?void 0:Vq.displayName)&&void 0!==qq?qq:gq} Pack`,
        Hq = Vq ? `Your ${jq} is Ready!` : "Welcome To Super Rank!",
        oq = Vq ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
        Pq = Vq ? !aq.getOwnedCosmeticPacks().includes(gq) : !aq.playerHasRank("super"),
        Qq = Vq ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after an hour, contact help@bloxd.io.";
      return (0, Nq.jsxs)("div", {
        className: "PurchaseWelcome AnimFadeInScaleUp",
        children: [dq && (0, Nq.jsx)(dq, {}), !Vq && (0, Nq.jsx)(uq.b, {
          iconName: "bolt",
          iconCountPerGroup: 10,
          animation: "Fall",
          midShowerStart: !0,
          customClass: "SuperRankWelcomeIconShower"
        }), (0, Nq.jsx)("div", {
          className: "PurchaseWelcomeTitle FullyFancyText",
          children: Hq
        }), (0, Nq.jsx)("div", {
          className: "PurchaseWelcomeText",
          children: oq
        }), Pq && (0, Nq.jsxs)("div", {
          className: "PurchaseWelcomeWarning",
          children: [(0, Nq.jsx)(Wq.d, {
            name: "circle-info"
          }), (0, Nq.jsx)("div", {
            children: Qq
          })]
        }), (0, Nq.jsx)(Aq.LinkPreserveSearch, {
          to: "/",
          children: (0, Nq.jsx)(xq.p, {
            className: "PurchaseWelcomeContinue",
            children: Eq("general:continue")
          })
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);