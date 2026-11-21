export const id = 122;
export const ids = [122];
export const modules = {
  6428: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(1211),
      Pd = kd(1103);

    function Zd(dd) {
      let {
        item: Jd,
        className: kd
      } = dd;
      const {
        t: pd
      } = (0, Wd.B)();
      return null === Jd.renderId || Jd.previewsOutdated ? (0, Pd.jsx)("div", {
        className: Nd()("ShaderPackPreviewsNotice", kd),
        children: (0, Pd.jsx)("span", {
          children: pd(null === Jd.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6441: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(6425),
      Pd = kd(1211),
      Zd = kd(6419),
      gd = kd(1103);

    function Cd(dd) {
      let {
        selected: Jd,
        onSelect: kd,
        imageUrl: pd
      } = dd;
      const {
        t: Cd
      } = (0, Pd.B)();
      return (0, gd.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: Wd.w.map((dd => {
          const Wd = pd(dd);
          return (0, gd.jsxs)("button", {
            type: "button",
            "aria-pressed": dd === Jd,
            className: Nd()("ShaderPackViewOption", {
              Selected: dd === Jd
            }),
            onClick: () => {
              kd(dd)
            },
            children: [null !== Wd && (0, gd.jsx)("img", {
              src: Wd,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, gd.jsx)("span", {
              className: "SmallTextBold",
              children: Cd(Zd.gb[dd])
            })]
          }, dd)
        }))
      })
    }
  },
  6430: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => ld,
      g: () => Qd,
      i: () => od,
      j: () => Ld
    });
    var pd = kd(56),
      Nd = kd(6425),
      Wd = kd(1520),
      Pd = kd(6419),
      Zd = kd(6435),
      gd = kd(1140);
    const Cd = "shaderPackListingView",
      Kd = "shaderPackListingFilterOpen";

    function od() {
      var dd;
      const [Jd, kd] = (0, Zd.d)(Cd, Nd.w[0]);
      return [null !== (dd = Nd.w.find((dd => dd === Jd))) && void 0 !== dd ? dd : Nd.w[0], kd]
    }

    function ld() {
      (0, pd.useEffect)((() => () => {
        window.location.pathname.startsWith(Pd.X) || (0, Pd.n)()
      }), [])
    }

    function Qd() {
      return (0, Zd.d)(Kd, !1)
    }

    function Ld() {
      const {
        userContext: dd,
        isUserContextUpdating: Jd
      } = (0, gd.c)(), [kd, Nd] = (0, pd.useState)(null), Pd = (0, pd.useRef)(new Set);

      function Zd(dd, Jd) {
        Nd((kd => {
          const pd = new Set(kd);
          return Jd ? pd.add(dd) : pd.delete(dd), pd
        }))
      }
      return (0, pd.useEffect)((() => {
        if (Jd) return;
        let kd = !1;
        return Wd.d.getFavouriteShaderPacks(dd).then((dd => {
          kd || Nd(new Set(dd))
        })).catch((dd => {
          console.error("Failed to get favourite shader packs", dd), kd || Nd(new Set)
        })), () => {
          kd = !0
        }
      }), [dd, Jd]), {
        isFavourite: dd => null === kd ? null : kd.has(dd),
        toggle: function(Jd) {
          if (null === kd || Pd.current.has(Jd)) return;
          Pd.current.add(Jd);
          const pd = !kd.has(Jd);
          Zd(Jd, pd), (pd ? Wd.d.favouriteShaderPack(dd, Jd) : Wd.d.unfavouriteShaderPack(dd, Jd)).catch((dd => {
            console.error("Failed to change a favourite shader pack", dd), Zd(Jd, !pd)
          })).finally((() => {
            Pd.current.delete(Jd)
          }))
        }
      }
    }
  },
  6419: (dd, Jd, kd) => {
    kd.d(Jd, {
      $: () => gd,
      B: () => Ld,
      C: () => Rd,
      E: () => Fd,
      H: () => Kd,
      L: () => md,
      P: () => Od,
      R: () => yd,
      U: () => nd,
      X: () => Pd,
      _: () => Ud,
      cb: () => Zd,
      e: () => Id,
      fb: () => Xd,
      g: () => ad,
      gb: () => fd,
      ib: () => Gd,
      j: () => ed,
      kb: () => Yd,
      n: () => ld,
      q: () => od,
      r: () => bd,
      t: () => Qd,
      v: () => Sd,
      x: () => Dd
    });
    var pd = kd(6425),
      Nd = kd(149),
      Wd = kd(4411);
    const Pd = "/shader-packs",
      Zd = `${Pd}/publish`;

    function gd(dd) {
      return `${Pd}/${encodeURIComponent(dd)}`
    }
    let Cd = null;

    function Kd(dd) {
      Cd = dd
    }

    function od() {
      return Cd
    }

    function ld() {
      Cd = null
    }

    function Qd(dd) {
      return dd.playerHasRank("developer") || dd.playerHasRank("admin")
    }
    const Ld = ["terrain", "water", "models", "sunShadows", "strict"],
      Od = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function ed(dd, Jd) {
      return dd.withFeatures.includes(Jd) ? "with" : dd.withoutFeatures.includes(Jd) ? "without" : null
    }

    function Rd(dd) {
      return null === dd ? "with" : "with" === dd ? "without" : null
    }

    function Id(dd) {
      return "with" === dd ? "only" : null === dd ? "include" : void 0
    }

    function Gd(dd, Jd) {
      const kd = ed(dd, Jd),
        pd = dd => dd.filter((dd => dd !== Jd));
      return {
        withFeatures: null === kd ? [...dd.withFeatures, Jd] : pd(dd.withFeatures),
        withoutFeatures: "with" === kd ? [...dd.withoutFeatures, Jd] : pd(dd.withoutFeatures)
      }
    }
    const vd = "section",
      xd = "sort",
      qd = "filters",
      Bd = "q",
      sd = "banned",
      ad = "popular",
      Md = "strict";

    function Fd(dd) {
      var Jd, kd, Nd;
      const Pd = dd.get(vd),
        Zd = (null !== (Jd = dd.get(qd)) && void 0 !== Jd ? Jd : Md).split(","),
        gd = dd.get(sd);
      return {
        section: "favourites" === Pd || "mine" === Pd ? Pd : "explore",
        sort: null !== (kd = pd.s.find((Jd => Jd === dd.get(xd)))) && void 0 !== kd ? kd : ad,
        withFeatures: Ld.filter((dd => Zd.includes(dd) && !Zd.includes(`-${dd}`))),
        withoutFeatures: Ld.filter((dd => Zd.includes(`-${dd}`))),
        searchQuery: (null === (Nd = dd.get(Bd)) || void 0 === Nd ? void 0 : Nd.slice(0, pd.B)) || null,
        pageNumber: (0, Wd.e)(dd.get(Wd.b)),
        banned: "only" === gd ? "with" : "include" === gd ? null : "without"
      }
    }

    function Yd(dd, Jd) {
      var kd;
      const pd = jd(Jd);
      (0, Wd.i)(dd, vd, "explore" === Jd.section ? null : Jd.section), (0, Wd.i)(dd, xd, Jd.sort === ad ? null : Jd.sort), (0, Wd.i)(dd, qd, pd === Md ? null : pd), (0, Wd.i)(dd, Bd, Jd.searchQuery), (0, Wd.i)(dd, sd, null !== (kd = Id(Jd.banned)) && void 0 !== kd ? kd : null), (0, Wd.k)(dd, Jd.pageNumber)
    }

    function md(dd) {
      const Jd = new URLSearchParams;
      return Yd(Jd, {
        section: "explore",
        sort: ad,
        withFeatures: "strict" === dd ? [dd] : [dd, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Pd}?${Jd.toString()}`
    }

    function bd(dd) {
      return jd(dd) === Md
    }

    function Sd(dd) {
      return null !== dd.searchQuery || "with" === dd.banned || jd(dd) !== Md
    }

    function jd(dd) {
      return Ld.flatMap((Jd => {
        const kd = ed(dd, Jd);
        return "with" === kd ? [Jd] : "without" === kd ? [`-${Jd}`] : []
      })).join(",")
    }
    const Xd = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      fd = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function nd(dd) {
      return Math.round(100 * Math.max(0, 1 - 1 / dd))
    }

    function Ud(dd, Jd, kd, Nd) {
      const Wd = [];
      dd.isBanned && Wd.push({
        tone: "warning",
        text: Nd("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Pd
      } = dd;
      if (null === dd.brokenError || Pd && !Pd.error || Wd.push({
          tone: "warning",
          text: Nd("shaderPackListing:ownerBroken"),
          detail: dd.brokenError
        }), null !== Pd && void 0 !== Pd && Pd.error) Wd.push({
        tone: "warning",
        text: Nd(Jd ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, pd.h)(Pd.error) ? null : Pd.error
      });
      else if (Pd) {
        const dd = null === Pd.renderNotBefore ? 0 : Pd.renderNotBefore - kd,
          pd = String(Math.ceil(dd / 6e4)),
          Zd = Nd(Jd ? dd > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : dd > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: pd
          });
        Wd.push({
          tone: "info",
          text: Zd,
          detail: null
        })
      }
      return dd.listed || Wd.push({
        tone: "info",
        text: Nd("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Wd
    }

    function yd(dd) {
      return Math.max(1, Math.round(dd / 1024))
    }

    function Dd(dd, Jd, kd) {
      return dd instanceof Nd.c && dd.errorMessageForUser ? dd.errorMessageForUser : Jd(kd)
    }
  },
  6435: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(56),
      Nd = kd(33);

    function Wd(dd, Jd) {
      var kd;
      const [Wd, Pd] = (0, pd.useState)(null !== (kd = Nd.i.getItem(dd)) && void 0 !== kd ? kd : Jd);
      return [Wd, Jd => {
        Nd.i.setItem(dd, Jd), Pd(Jd)
      }]
    }
  },
  6425: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Kd,
      D: () => Gd,
      G: () => od,
      I: () => Cd,
      c: () => Qd,
      f: () => Od,
      g: () => Ld,
      h: () => Id,
      k: () => xd,
      m: () => gd,
      p: () => Nd,
      q: () => vd,
      s: () => Wd,
      t: () => Zd,
      v: () => Pd,
      w: () => pd,
      z: () => ld
    });
    const pd = ["forest", "desert", "water", "night", "cave"];
    const Nd = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      Wd = ["popular", "updated", "newest"],
      Pd = 3,
      Zd = 32,
      gd = 300;

    function Cd(dd, Jd) {
      return dd.slice(0, Jd).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Kd = 64,
      od = 512,
      ld = 18e5;
    const Qd = "Bloxdhub",
      Ld = "https://bloxdhub.com/shaders";

    function Od(dd) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(dd)}`
    }
    const ed = "Screenshot generation failed.",
      Rd = "Its screenshots couldn't be generated:";

    function Id(dd) {
      var Jd;
      return dd === ed || null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.startsWith(Rd)) && void 0 !== Jd && Jd
    }

    function Gd(dd, Jd) {
      return `shaderPacks/${dd}/${Jd}.json`
    }

    function vd(dd, Jd, kd, pd) {
      return null === Jd.renderId ? xd(dd, Jd.baselineVersion, kd, pd) : `${dd}/${function(dd,Jd,kd,pd){return`shaderPacks/${dd}/${Jd}/${kd}-${pd}.webp`}(Jd.packId,Jd.renderId,kd,pd)}`
    }

    function xd(dd, Jd, kd, pd) {
      return `${dd}/${function(dd,Jd,kd){return`shaderPacks/baseline/${dd}/${Jd}-${kd}.webp`}(Jd,kd,pd)}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);