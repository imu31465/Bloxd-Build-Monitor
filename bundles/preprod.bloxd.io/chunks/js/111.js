export const id = 111;
export const ids = [111, 402];
export const modules = {
  5085: (pp, ip, cp) => {
    var Op = cp(5088);

    function op() {}

    function Ip() {}
    Ip.resetWarningCache = op, pp.exports = function() {
      function pp(pp, ip, cp, op, Ip, Sp) {
        if (Sp !== Op) {
          var xp = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw xp.name = "Invariant Violation", xp
        }
      }

      function ip() {
        return pp
      }
      pp.isRequired = pp;
      var cp = {
        array: pp,
        bigint: pp,
        bool: pp,
        func: pp,
        number: pp,
        object: pp,
        string: pp,
        symbol: pp,
        any: pp,
        arrayOf: ip,
        element: pp,
        elementType: pp,
        instanceOf: ip,
        node: pp,
        objectOf: ip,
        oneOf: ip,
        oneOfType: ip,
        shape: ip,
        exact: ip,
        checkPropTypes: Ip,
        resetWarningCache: op
      };
      return cp.PropTypes = cp, cp
    }
  },
  5081: (pp, ip, cp) => {
    pp.exports = cp(5085)()
  },
  5088: pp => {
    pp.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6737: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Dp
    });
    var Op = cp(1538),
      op = cp(1480),
      Ip = cp(1201),
      Sp = cp(6743),
      xp = cp(6716),
      Lp = cp(6698),
      Yp = cp(1112);

    function Dp() {
      const {
        t: pp
      } = (0, Ip.H)(), ip = (0, Op.useNavigatePreserveSearch)();
      return (0, xp.b)(), (0, Yp.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Yp.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Yp.jsx)(op.d, {
            onClick: () => {
              ip(Lp.R)
            },
            children: pp("shaderPackListing:backToPacks")
          })
        }), (0, Yp.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: pp("shaderPackListing:publishTitle")
        }), (0, Yp.jsx)(Sp.ShaderPackPublishForm, {
          existing: null,
          onPublished: pp => {
            ip((0, Lp.V)(pp.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6716: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp,
      d: () => Wp,
      h: () => Ap,
      i: () => yp
    });
    var Op = cp(62),
      op = cp(6704),
      Ip = cp(1520),
      Sp = cp(6698),
      xp = cp(6724),
      Lp = cp(1141);
    const Yp = "shaderPackListingView",
      Dp = "shaderPackListingFilterOpen";

    function Ap() {
      var pp;
      const [ip, cp] = (0, xp.d)(Yp, op.J[0]);
      return [null !== (pp = op.J.find((pp => pp === ip))) && void 0 !== pp ? pp : op.J[0], cp]
    }

    function Pp() {
      (0, Op.useEffect)((() => () => {
        window.location.pathname.startsWith(Sp.R) || (0, Sp.g)()
      }), [])
    }

    function Wp() {
      return (0, xp.d)(Dp, !1)
    }

    function yp() {
      const {
        userContext: pp,
        isUserContextUpdating: ip
      } = (0, Lp.b)(), [cp, op] = (0, Op.useState)(null), Sp = (0, Op.useRef)(new Set);

      function xp(pp, ip) {
        op((cp => {
          const Op = new Set(cp);
          return ip ? Op.add(pp) : Op.delete(pp), Op
        }))
      }
      return (0, Op.useEffect)((() => {
        if (ip) return;
        let cp = !1;
        return Ip.b.getFavouriteShaderPacks(pp).then((pp => {
          cp || op(new Set(pp))
        })).catch((pp => {
          console.error("Failed to get favourite shader packs", pp), cp || op(new Set)
        })), () => {
          cp = !0
        }
      }), [pp, ip]), {
        isFavourite: pp => null === cp ? null : cp.has(pp),
        toggle: function(ip) {
          if (null === cp || Sp.current.has(ip)) return;
          Sp.current.add(ip);
          const Op = !cp.has(ip);
          xp(ip, Op), (Op ? Ip.b.favouriteShaderPack(pp, ip) : Ip.b.unfavouriteShaderPack(pp, ip)).catch((pp => {
            console.error("Failed to change a favourite shader pack", pp), xp(ip, !Op)
          })).finally((() => {
            Sp.current.delete(ip)
          }))
        }
      }
    }
  },
  6698: (pp, ip, cp) => {
    cp.d(ip, {
      C: () => Mp,
      E: () => Dp,
      H: () => Ep,
      L: () => Up,
      O: () => fp,
      P: () => Np,
      R: () => Sp,
      S: () => Tp,
      V: () => Lp,
      X: () => xp,
      Z: () => Jp,
      ab: () => Bp,
      b: () => tp,
      bb: () => Hp,
      d: () => Rp,
      e: () => wp,
      eb: () => Cp,
      g: () => Pp,
      k: () => Ap,
      l: () => Xp,
      n: () => Wp,
      r: () => lp,
      s: () => bp,
      w: () => yp,
      z: () => vp
    });
    var Op = cp(6704),
      op = cp(156),
      Ip = cp(4653);
    const Sp = "/shader-packs",
      xp = `${Sp}/publish`;

    function Lp(pp) {
      return `${Sp}/${encodeURIComponent(pp)}`
    }
    let Yp = null;

    function Dp(pp) {
      Yp = pp
    }

    function Ap() {
      return Yp
    }

    function Pp() {
      Yp = null
    }

    function Wp(pp) {
      return pp.playerHasRank("developer") || pp.playerHasRank("admin")
    }
    const yp = ["terrain", "water", "models", "sunShadows", "strict"],
      Up = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function wp(pp, ip) {
      return pp.withFeatures.includes(ip) ? "with" : pp.withoutFeatures.includes(ip) ? "without" : null
    }

    function vp(pp) {
      return null === pp ? "with" : "with" === pp ? "without" : null
    }

    function tp(pp) {
      return "with" === pp ? "only" : null === pp ? "include" : void 0
    }

    function Hp(pp, ip) {
      const cp = wp(pp, ip),
        Op = pp => pp.filter((pp => pp !== ip));
      return {
        withFeatures: null === cp ? [...pp.withFeatures, ip] : Op(pp.withFeatures),
        withoutFeatures: "with" === cp ? [...pp.withoutFeatures, ip] : Op(pp.withoutFeatures)
      }
    }
    const dp = "section",
      ep = "sort",
      jp = "filters",
      kp = "q",
      mp = "banned",
      Rp = "popular",
      qp = "strict";

    function Mp(pp) {
      var ip, cp, op;
      const Sp = pp.get(dp),
        xp = (null !== (ip = pp.get(jp)) && void 0 !== ip ? ip : qp).split(","),
        Lp = pp.get(mp);
      return {
        section: "favourites" === Sp || "mine" === Sp ? Sp : "explore",
        sort: null !== (cp = Op.A.find((ip => ip === pp.get(ep)))) && void 0 !== cp ? cp : Rp,
        withFeatures: yp.filter((pp => xp.includes(pp) && !xp.includes(`-${pp}`))),
        withoutFeatures: yp.filter((pp => xp.includes(`-${pp}`))),
        searchQuery: (null === (op = pp.get(kp)) || void 0 === op ? void 0 : op.slice(0, Op.P)) || null,
        pageNumber: (0, Ip.e)(pp.get(Ip.c)),
        banned: "only" === Lp ? "with" : "include" === Lp ? null : "without"
      }
    }

    function Cp(pp, ip) {
      var cp;
      const Op = Qp(ip);
      (0, Ip.g)(pp, dp, "explore" === ip.section ? null : ip.section), (0, Ip.g)(pp, ep, ip.sort === Rp ? null : ip.sort), (0, Ip.g)(pp, jp, Op === qp ? null : Op), (0, Ip.g)(pp, kp, ip.searchQuery), (0, Ip.g)(pp, mp, null !== (cp = tp(ip.banned)) && void 0 !== cp ? cp : null), (0, Ip.k)(pp, ip.pageNumber)
    }

    function Ep(pp) {
      const ip = new URLSearchParams;
      return Cp(ip, {
        section: "explore",
        sort: Rp,
        withFeatures: "strict" === pp ? [pp] : [pp, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Sp}?${ip.toString()}`
    }

    function Xp(pp) {
      return Qp(pp) === qp
    }

    function lp(pp) {
      return null !== pp.searchQuery || "with" === pp.banned || Qp(pp) !== qp
    }

    function Qp(pp) {
      return yp.flatMap((ip => {
        const cp = wp(pp, ip);
        return "with" === cp ? [ip] : "without" === cp ? [`-${ip}`] : []
      })).join(",")
    }
    const Jp = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Bp = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Np(pp) {
      return Math.round(100 * Math.max(0, 1 - 1 / pp))
    }

    function Tp(pp, ip, cp, op) {
      const Ip = [];
      pp.isBanned && Ip.push({
        tone: "warning",
        text: op("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Sp
      } = pp;
      if (null === pp.brokenError || Sp && !Sp.error || Ip.push({
          tone: "warning",
          text: op("shaderPackListing:ownerBroken"),
          detail: pp.brokenError
        }), null !== Sp && void 0 !== Sp && Sp.error) Ip.push({
        tone: "warning",
        text: op(ip ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Op.n)(Sp.error) ? null : Sp.error
      });
      else if (Sp) {
        const pp = null === Sp.renderNotBefore ? 0 : Sp.renderNotBefore - cp,
          Op = String(Math.ceil(pp / 6e4)),
          xp = op(ip ? pp > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : pp > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Op
          });
        Ip.push({
          tone: "info",
          text: xp,
          detail: null
        })
      }
      return pp.listed || Ip.push({
        tone: "info",
        text: op("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Ip
    }

    function fp(pp) {
      return Math.max(1, Math.round(pp / 1024))
    }

    function bp(pp, ip, cp) {
      return pp instanceof op.e && pp.errorMessageForUser ? pp.errorMessageForUser : ip(cp)
    }
  },
  6724: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(62),
      op = cp(44);

    function Ip(pp, ip) {
      var cp;
      const [Ip, Sp] = (0, Op.useState)(null !== (cp = op.h.getItem(pp)) && void 0 !== cp ? cp : ip);
      return [Ip, ip => {
        op.h.setItem(pp, ip), Sp(ip)
      }]
    }
  },
  6804: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      f: () => Ip
    });
    var Op = cp(44);
    const op = "shaderPack";
    async function Ip() {
      var pp;
      let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
    }
  },
  6704: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Ip,
      D: () => xp,
      G: () => Sp,
      J: () => Op,
      M: () => Pp,
      P: () => Dp,
      S: () => dp,
      V: () => Ap,
      W: () => Yp,
      d: () => yp,
      g: () => wp,
      j: () => Up,
      l: () => Wp,
      n: () => Hp,
      r: () => jp,
      t: () => Lp,
      u: () => op,
      x: () => ep
    });
    const Op = ["forest", "desert", "water", "night", "cave"];
    const op = {
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
      Ip = ["popular", "updated", "newest"],
      Sp = 3,
      xp = 32,
      Lp = 300;

    function Yp(pp, ip) {
      return pp.slice(0, ip).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Dp = 64,
      Ap = 512,
      Pp = 18e5;

    function Wp(pp) {
      const ip = pp,
        cp = null === ip || void 0 === ip ? void 0 : ip.files;
      return "number" === typeof(null === ip || void 0 === ip ? void 0 : ip.apiVersion) && "string" === typeof ip.name && (null === ip.author || "string" === typeof ip.author) && (void 0 === ip.keepCircleShadows || "boolean" === typeof ip.keepCircleShadows) && "object" === typeof cp && null !== cp && Object.values(cp).every((pp => "string" === typeof pp))
    }
    const yp = "Bloxdhub",
      Up = "https://bloxdhub.com/shaders";

    function wp(pp) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(pp)}`
    }
    const vp = "Screenshot generation failed.",
      tp = "Its screenshots couldn't be generated:";

    function Hp(pp) {
      var ip;
      return pp === vp || null !== (ip = null === pp || void 0 === pp ? void 0 : pp.startsWith(tp)) && void 0 !== ip && ip
    }

    function dp(pp, ip) {
      return `shaderPacks/${pp}/${ip}.json`
    }

    function ep(pp, ip, cp, Op) {
      return null === ip.renderId ? jp(pp, ip.baselineVersion, cp, Op) : `${pp}/${function(pp,ip,cp,Op){return`shaderPacks/${pp}/${ip}/${cp}-${Op}.webp`}(ip.packId,ip.renderId,cp,Op)}`
    }

    function jp(pp, ip, cp, Op) {
      return `${pp}/${function(pp,ip,cp){return`shaderPacks/baseline/${pp}/${ip}-${cp}.webp`}(ip,cp,Op)}`
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);