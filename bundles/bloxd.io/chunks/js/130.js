export const id = 130;
export const ids = [130, 716];
export const modules = {
  5870: (dd, Od, md) => {
    var Wd = md(5874);

    function Fd() {}

    function Rd() {}
    Rd.resetWarningCache = Fd, dd.exports = function() {
      function dd(dd, Od, md, Fd, Rd, Xd) {
        if (Xd !== Wd) {
          var Kd = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Kd.name = "Invariant Violation", Kd
        }
      }

      function Od() {
        return dd
      }
      dd.isRequired = dd;
      var md = {
        array: dd,
        bigint: dd,
        bool: dd,
        func: dd,
        number: dd,
        object: dd,
        string: dd,
        symbol: dd,
        any: dd,
        arrayOf: Od,
        element: dd,
        elementType: dd,
        instanceOf: Od,
        node: dd,
        objectOf: Od,
        oneOf: Od,
        oneOfType: Od,
        shape: Od,
        exact: Od,
        checkPropTypes: Rd,
        resetWarningCache: Fd
      };
      return md.PropTypes = md, md
    }
  },
  5864: (dd, Od, md) => {
    dd.exports = md(5870)()
  },
  5874: dd => {
    dd.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7545: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Qd
    });
    var Wd = md(1641),
      Fd = md(1572),
      Rd = md(1238),
      Xd = md(7550),
      Kd = md(7523),
      hd = md(7509),
      vd = md(1341);

    function Qd() {
      const {
        t: dd
      } = (0, Rd.G)(), Od = (0, Wd.useNavigatePreserveSearch)();
      return (0, Kd.e)(), (0, vd.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, vd.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, vd.jsx)(Fd.d, {
            onClick: () => {
              Od(hd.U)
            },
            children: dd("shaderPackListing:backToPacks")
          })
        }), (0, vd.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: dd("shaderPackListing:publishTitle")
        }), (0, vd.jsx)(Xd.ShaderPackPublishForm, {
          existing: null,
          onPublished: dd => {
            Od((0, hd.Y)(dd.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  7523: (dd, Od, md) => {
    md.d(Od, {
      e: () => od,
      i: () => Nd,
      j: () => td,
      k: () => qd
    });
    var Wd = md(66),
      Fd = md(7512),
      Rd = md(1627),
      Xd = md(7509),
      Kd = md(7530),
      hd = md(1186);
    const vd = "shaderPackListingView",
      Qd = "shaderPackListingFilterOpen";

    function td() {
      var dd;
      const [Od, md] = (0, Kd.c)(vd, Fd.A[0]);
      return [null !== (dd = Fd.A.find((dd => dd === Od))) && void 0 !== dd ? dd : Fd.A[0], md]
    }

    function od() {
      (0, Wd.useEffect)((() => () => {
        window.location.pathname.startsWith(Xd.U) || (0, Xd.k)()
      }), [])
    }

    function Nd() {
      return (0, Kd.c)(Qd, !1)
    }

    function qd() {
      const {
        userContext: dd,
        isUserContextUpdating: Od
      } = (0, hd.d)(), [md, Fd] = (0, Wd.useState)(null), Xd = (0, Wd.useRef)(new Set);

      function Kd(dd, Od) {
        Fd((md => {
          const Wd = new Set(md);
          return Od ? Wd.add(dd) : Wd.delete(dd), Wd
        }))
      }
      return (0, Wd.useEffect)((() => {
        if (Od) return;
        let md = !1;
        return Rd.e.getFavouriteShaderPacks(dd).then((dd => {
          md || Fd(new Set(dd))
        })).catch((dd => {
          console.error("Failed to get favourite shader packs", dd), md || Fd(new Set)
        })), () => {
          md = !0
        }
      }), [dd, Od]), {
        isFavourite: dd => null === md ? null : md.has(dd),
        toggle: function(Od) {
          if (null === md || Xd.current.has(Od)) return;
          Xd.current.add(Od);
          const Wd = !md.has(Od);
          Kd(Od, Wd), (Wd ? Rd.e.favouriteShaderPack(dd, Od) : Rd.e.unfavouriteShaderPack(dd, Od)).catch((dd => {
            console.error("Failed to change a favourite shader pack", dd), Kd(Od, !Wd)
          })).finally((() => {
            Xd.current.delete(Od)
          }))
        }
      }
    }
  },
  7509: (dd, Od, md) => {
    md.d(Od, {
      D: () => bd,
      H: () => Bd,
      L: () => Qd,
      N: () => sd,
      O: () => Hd,
      Q: () => Pd,
      R: () => nd,
      U: () => Xd,
      X: () => Ld,
      Y: () => hd,
      ab: () => Kd,
      d: () => Td,
      eb: () => rd,
      f: () => Ud,
      hb: () => Gd,
      i: () => yd,
      k: () => od,
      l: () => td,
      lb: () => pd,
      mb: () => Sd,
      p: () => ud,
      r: () => Nd,
      u: () => Vd,
      w: () => zd,
      z: () => qd
    });
    var Wd = md(7512),
      Fd = md(180),
      Rd = md(5223);
    const Xd = "/shader-packs",
      Kd = `${Xd}/publish`;

    function hd(dd) {
      return `${Xd}/${encodeURIComponent(dd)}`
    }
    let vd = null;

    function Qd(dd) {
      vd = dd
    }

    function td() {
      return vd
    }

    function od() {
      vd = null
    }

    function Nd(dd) {
      return dd.playerHasRank("developer") || dd.playerHasRank("admin")
    }
    const qd = ["terrain", "water", "models", "sunShadows", "strict"],
      Hd = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function yd(dd, Od) {
      return dd.withFeatures.includes(Od) ? "with" : dd.withoutFeatures.includes(Od) ? "without" : null
    }

    function bd(dd) {
      return null === dd ? "with" : "with" === dd ? "without" : null
    }

    function Td(dd) {
      return "with" === dd ? "only" : null === dd ? "include" : void 0
    }

    function pd(dd, Od) {
      const md = yd(dd, Od),
        Wd = dd => dd.filter((dd => dd !== Od));
      return {
        withFeatures: null === md ? [...dd.withFeatures, Od] : Wd(dd.withFeatures),
        withoutFeatures: "with" === md ? [...dd.withoutFeatures, Od] : Wd(dd.withoutFeatures)
      }
    }
    const Yd = "section",
      gd = "sort",
      wd = "filters",
      Ed = "q",
      Jd = "banned",
      Ud = "popular",
      xd = "strict";

    function Bd(dd) {
      var Od, md, Fd;
      const Xd = dd.get(Yd),
        Kd = (null !== (Od = dd.get(wd)) && void 0 !== Od ? Od : xd).split(","),
        hd = dd.get(Jd);
      return {
        section: "favourites" === Xd || "mine" === Xd ? Xd : "explore",
        sort: null !== (md = Wd.v.find((Od => Od === dd.get(gd)))) && void 0 !== md ? md : Ud,
        withFeatures: qd.filter((dd => Kd.includes(dd) && !Kd.includes(`-${dd}`))),
        withoutFeatures: qd.filter((dd => Kd.includes(`-${dd}`))),
        searchQuery: (null === (Fd = dd.get(Ed)) || void 0 === Fd ? void 0 : Fd.slice(0, Wd.F)) || null,
        pageNumber: (0, Rd.e)(dd.get(Rd.d)),
        banned: "only" === hd ? "with" : "include" === hd ? null : "without"
      }
    }

    function Sd(dd, Od) {
      var md;
      const Wd = Ad(Od);
      (0, Rd.g)(dd, Yd, "explore" === Od.section ? null : Od.section), (0, Rd.g)(dd, gd, Od.sort === Ud ? null : Od.sort), (0, Rd.g)(dd, wd, Wd === xd ? null : Wd), (0, Rd.g)(dd, Ed, Od.searchQuery), (0, Rd.g)(dd, Jd, null !== (md = Td(Od.banned)) && void 0 !== md ? md : null), (0, Rd.j)(dd, Od.pageNumber)
    }

    function sd(dd) {
      const Od = new URLSearchParams;
      return Sd(Od, {
        section: "explore",
        sort: Ud,
        withFeatures: "strict" === dd ? [dd] : [dd, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Xd}?${Od.toString()}`
    }

    function ud(dd) {
      return Ad(dd) === xd
    }

    function Vd(dd) {
      return null !== dd.searchQuery || "with" === dd.banned || Ad(dd) !== xd
    }

    function Ad(dd) {
      return qd.flatMap((Od => {
        const md = yd(dd, Od);
        return "with" === md ? [Od] : "without" === md ? [`-${Od}`] : []
      })).join(",")
    }
    const rd = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Gd = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function nd(dd) {
      return Math.round(100 * Math.max(0, 1 - 1 / dd))
    }

    function Ld(dd, Od, md, Fd) {
      const Rd = [];
      dd.isBanned && Rd.push({
        tone: "warning",
        text: Fd("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Xd
      } = dd;
      if (null === dd.brokenError || Xd && !Xd.error || Rd.push({
          tone: "warning",
          text: Fd("shaderPackListing:ownerBroken"),
          detail: dd.brokenError
        }), null !== Xd && void 0 !== Xd && Xd.error) Rd.push({
        tone: "warning",
        text: Fd(Od ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Wd.m)(Xd.error) ? null : Xd.error
      });
      else if (Xd) {
        const dd = null === Xd.renderNotBefore ? 0 : Xd.renderNotBefore - md,
          Wd = String(Math.ceil(dd / 6e4)),
          Kd = Fd(Od ? dd > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : dd > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Wd
          });
        Rd.push({
          tone: "info",
          text: Kd,
          detail: null
        })
      }
      return dd.listed || Rd.push({
        tone: "info",
        text: Fd("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Rd
    }

    function Pd(dd) {
      return Math.max(1, Math.round(dd / 1024))
    }

    function zd(dd, Od, md) {
      return dd instanceof Fd.e && dd.errorMessageForUser ? dd.errorMessageForUser : Od(md)
    }
  },
  7530: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(66),
      Fd = md(46);

    function Rd(dd, Od) {
      var md;
      const [Rd, Xd] = (0, Wd.useState)(null !== (md = Fd.k.getItem(dd)) && void 0 !== md ? md : Od);
      return [Rd, Od => {
        Fd.k.setItem(dd, Od), Xd(Od)
      }]
    }
  },
  7602: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      g: () => Rd
    });
    var Wd = md(46);
    const Fd = "shaderPack";
    async function Rd() {
      var dd;
      let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (dd = await Wd.h.getItem(Fd, Od)) && void 0 !== dd ? dd : null
    }
  },
  7512: (dd, Od, md) => {
    md.d(Od, {
      A: () => Wd,
      D: () => od,
      F: () => Qd,
      H: () => Yd,
      L: () => td,
      P: () => vd,
      d: () => qd,
      f: () => yd,
      j: () => Hd,
      l: () => Nd,
      m: () => pd,
      n: () => wd,
      p: () => hd,
      q: () => Fd,
      r: () => gd,
      v: () => Rd,
      w: () => Kd,
      y: () => Xd
    });
    const Wd = ["forest", "desert", "water", "night", "cave"];
    const Fd = {
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
      Rd = ["popular", "updated", "newest"],
      Xd = 3,
      Kd = 32,
      hd = 300;

    function vd(dd, Od) {
      return dd.slice(0, Od).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Qd = 64,
      td = 512,
      od = 18e5;

    function Nd(dd) {
      const Od = dd,
        md = null === Od || void 0 === Od ? void 0 : Od.files;
      return "number" === typeof(null === Od || void 0 === Od ? void 0 : Od.apiVersion) && "string" === typeof Od.name && (null === Od.author || "string" === typeof Od.author) && (void 0 === Od.keepCircleShadows || "boolean" === typeof Od.keepCircleShadows) && "object" === typeof md && null !== md && Object.values(md).every((dd => "string" === typeof dd))
    }
    const qd = "Bloxdhub",
      Hd = "https://bloxdhub.com/shaders";

    function yd(dd) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(dd)}`
    }
    const bd = "Screenshot generation failed.",
      Td = "Its screenshots couldn't be generated:";

    function pd(dd) {
      var Od;
      return dd === bd || null !== (Od = null === dd || void 0 === dd ? void 0 : dd.startsWith(Td)) && void 0 !== Od && Od
    }

    function Yd(dd, Od) {
      return `shaderPacks/${dd}/${Od}.json`
    }

    function gd(dd, Od, md, Wd) {
      return null === Od.renderId ? wd(dd, Od.baselineVersion, md, Wd) : `${dd}/${function(dd,Od,md,Wd){return`shaderPacks/${dd}/${Od}/${md}-${Wd}.webp`}(Od.packId,Od.renderId,md,Wd)}`
    }

    function wd(dd, Od, md, Wd) {
      return `${dd}/${function(dd,Od,md){return`shaderPacks/baseline/${dd}/${Od}-${md}.webp`}(Od,md,Wd)}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);