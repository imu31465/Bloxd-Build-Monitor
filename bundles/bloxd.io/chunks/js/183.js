export const id = 183;
export const ids = [183];
export const modules = {
  9907: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(9911),
      Fd = md(701),
      Rd = md(151);

    function Xd(dd) {
      var Od, md;
      if ((0, Fd.O)(dd)) return !0;
      const Xd = null !== (Od = null === (md = Rd.siteUsedData[Rd.siteUsed]) || void 0 === md ? void 0 : md.adConfig.showRewardedAds) && void 0 !== Od && Od;
      for (const Fd in dd) {
        const Od = dd[Fd];
        if (null !== Od && void 0 !== Od && Od.items)
          for (const dd in Od.items)
            if ((0, Wd.f)(Od.items[dd], Xd)) return !1
      }
      return !0
    }
  },
  64743: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      getClientGameLeaderboardKey: () => Wd.i,
      getClientGameMapKey: () => Wd.j,
      shopIsEmpty: () => Fd.b
    });
    var Wd = md(3428),
      Fd = md(9907)
  },
  9911: (dd, Od, md) => {
    function Wd(dd, Od) {
      return !dd.hidden && (Od || !dd.isRewardedAd)
    }

    function Fd(dd) {
      return "object" === typeof dd ? dd.option : dd
    }

    function Rd(dd, Od) {
      var md;
      if ("dropdown" === (null === (md = dd.userInput) || void 0 === md ? void 0 : md.type) && "object" === typeof dd.userInput.dropdownOptions[0]) {
        for (const md of dd.userInput.dropdownOptions)
          if (Fd(md) === Od) return "object" === typeof md ? md.cost : dd.cost;
        console.error("Didn't find matching option for dropdown item. Item:", dd, "input:", Od)
      }
      return dd.cost
    }

    function Xd(dd, Od, md) {
      var Wd;
      const Fd = null !== (Wd = md.excludedPlayers) && void 0 !== Wd ? Wd : [Od];
      return dd.filter((dd => !Fd.includes(dd)))
    }
    md.d(Od, {
      b: () => Rd,
      c: () => Fd,
      d: () => Xd,
      f: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);