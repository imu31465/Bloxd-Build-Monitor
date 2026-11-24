export const id = 159;
export const ids = [159];
export const modules = {
  36804: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => yp,
      E: () => tp,
      b: () => Ip,
      d: () => Up,
      f: () => wp,
      j: () => xp,
      n: () => Pp,
      q: () => vp,
      u: () => Ap,
      w: () => Hp
    });
    var Op = cp(25),
      op = cp(34);
    const Ip = "clientGameInventoryButtonsChanged",
      Sp = new Map;

    function xp() {
      return [...Sp.values()].sort(((pp, ip) => {
        var cp, Op;
        return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
      }))
    }
    let Lp = null;

    function Yp(pp) {
      Lp = pp
    }
    let Dp = !1;

    function Ap(pp) {
      Dp = !0;
      try {
        pp.onClick()
      } finally {
        Dp = !1
      }
      pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
    }

    function Pp() {
      return Dp
    }

    function Wp() {
      return xp().filter((pp => pp.panel && !pp.disabled))
    }

    function yp(pp) {
      const ip = Wp(),
        cp = ip.findIndex((pp => pp.id === Lp));
      return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
    }

    function Up() {
      return null !== Lp && Wp().length > 1
    }

    function wp() {
      Yp(null)
    }

    function vp() {
      "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
    }

    function tp() {
      const pp = Lp;
      return Yp(null), pp
    }

    function Hp(pp) {
      return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
        Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
      }
    }
  },
  36799: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Dp,
      d: () => xp,
      h: () => wp,
      l: () => vp,
      o: () => Pp,
      s: () => Yp,
      t: () => Up,
      x: () => Wp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(36804);
    const xp = "clientGameUiChanged";
    let Lp = null;

    function Yp() {
      return Lp
    }

    function Dp(pp, ip) {
      const cp = {
        content: pp,
        menu: ip
      };
      return Lp = cp, op.m.GA(xp, Lp, !0), () => {
        Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
      }
    }
    let Ap = null;

    function Pp() {
      return Ap
    }

    function Wp(pp) {
      return Ap = pp, () => {
        Ap === pp && (Ap = null)
      }
    }
    let yp = !1;

    function Up() {
      const pp = Op.c.get("openInGameMenuName");
      "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wp() {
      tp(!1)
    }

    function vp() {
      tp(yp)
    }

    function tp(pp) {
      "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
        openInGameMenuName: pp ? "inventory" : null
      }), pp || (0, Sp.f)(), yp = !1
    }
  },
  8895: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(8897),
      op = cp(640),
      Ip = cp(131);

    function Sp(pp) {
      var ip, cp;
      if ((0, op.G)(pp)) return !0;
      const Sp = null !== (ip = null === (cp = Ip.siteUsedData[Ip.siteUsed]) || void 0 === cp ? void 0 : cp.adConfig.showRewardedAds) && void 0 !== ip && ip;
      for (const op in pp) {
        const ip = pp[op];
        if (null !== ip && void 0 !== ip && ip.items)
          for (const pp in ip.items)
            if ((0, Op.h)(ip.items[pp], Sp)) return !1
      }
      return !0
    }
  },
  60719: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      getClientGameMapKey: () => Op.o,
      shopIsEmpty: () => op.b
    });
    var Op = cp(36799),
      op = cp(8895)
  },
  8897: (pp, ip, cp) => {
    function Op(pp, ip) {
      return !pp.hidden && (ip || !pp.isRewardedAd)
    }

    function op(pp) {
      return "object" === typeof pp ? pp.option : pp
    }

    function Ip(pp, ip) {
      var cp;
      if ("dropdown" === (null === (cp = pp.userInput) || void 0 === cp ? void 0 : cp.type) && "object" === typeof pp.userInput.dropdownOptions[0]) {
        for (const cp of pp.userInput.dropdownOptions)
          if (op(cp) === ip) return "object" === typeof cp ? cp.cost : pp.cost;
        console.error("Didn't find matching option for dropdown item. Item:", pp, "input:", ip)
      }
      return pp.cost
    }

    function Sp(pp, ip, cp) {
      var Op;
      const op = null !== (Op = cp.excludedPlayers) && void 0 !== Op ? Op : [ip];
      return pp.filter((pp => !op.includes(pp)))
    }
    cp.d(ip, {
      b: () => Ip,
      c: () => op,
      g: () => Sp,
      h: () => Op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);