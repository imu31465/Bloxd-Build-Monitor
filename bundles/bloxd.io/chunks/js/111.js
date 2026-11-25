export const id = 111;
export const ids = [111, 402];
export const modules = {
  5134: (tt, et, Vt) => {
    var Ot = Vt(5136);

    function qt() {}

    function Dt() {}
    Dt.resetWarningCache = qt, tt.exports = function() {
      function tt(tt, et, Vt, qt, Dt, mt) {
        if (mt !== Ot) {
          var dt = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw dt.name = "Invariant Violation", dt
        }
      }

      function et() {
        return tt
      }
      tt.isRequired = tt;
      var Vt = {
        array: tt,
        bigint: tt,
        bool: tt,
        func: tt,
        number: tt,
        object: tt,
        string: tt,
        symbol: tt,
        any: tt,
        arrayOf: et,
        element: tt,
        elementType: tt,
        instanceOf: et,
        node: tt,
        objectOf: et,
        oneOf: et,
        oneOfType: et,
        shape: et,
        exact: et,
        checkPropTypes: Dt,
        resetWarningCache: qt
      };
      return Vt.PropTypes = Vt, Vt
    }
  },
  5127: (tt, et, Vt) => {
    tt.exports = Vt(5134)()
  },
  5136: tt => {
    tt.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6788: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Xt
    });
    var Ot = Vt(1613),
      qt = Vt(1556),
      Dt = Vt(1286),
      mt = Vt(6797),
      dt = Vt(6772),
      jt = Vt(6754),
      Ht = Vt(1188);

    function Xt() {
      const {
        t: tt
      } = (0, Dt.H)(), et = (0, Ot.useNavigatePreserveSearch)();
      return (0, dt.e)(), (0, Ht.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Ht.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Ht.jsx)(qt.d, {
            onClick: () => {
              et(jt.Z)
            },
            children: tt("shaderPackListing:backToPacks")
          })
        }), (0, Ht.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: tt("shaderPackListing:publishTitle")
        }), (0, Ht.jsx)(mt.ShaderPackPublishForm, {
          existing: null,
          onPublished: tt => {
            et((0, jt.cb)(tt.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6772: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => lt,
      f: () => Et,
      g: () => Qt,
      h: () => ft
    });
    var Ot = Vt(63),
      qt = Vt(6756),
      Dt = Vt(1600),
      mt = Vt(6754),
      dt = Vt(6776),
      jt = Vt(1218);
    const Ht = "shaderPackListingView",
      Xt = "shaderPackListingFilterOpen";

    function Qt() {
      var tt;
      const [et, Vt] = (0, dt.c)(Ht, qt.G[0]);
      return [null !== (tt = qt.G.find((tt => tt === et))) && void 0 !== tt ? tt : qt.G[0], Vt]
    }

    function lt() {
      (0, Ot.useEffect)((() => () => {
        window.location.pathname.startsWith(mt.Z) || (0, mt.k)()
      }), [])
    }

    function Et() {
      return (0, dt.c)(Xt, !1)
    }

    function ft() {
      const {
        userContext: tt,
        isUserContextUpdating: et
      } = (0, jt.d)(), [Vt, qt] = (0, Ot.useState)(null), mt = (0, Ot.useRef)(new Set);

      function dt(tt, et) {
        qt((Vt => {
          const Ot = new Set(Vt);
          return et ? Ot.add(tt) : Ot.delete(tt), Ot
        }))
      }
      return (0, Ot.useEffect)((() => {
        if (et) return;
        let Vt = !1;
        return Dt.e.getFavouriteShaderPacks(tt).then((tt => {
          Vt || qt(new Set(tt))
        })).catch((tt => {
          console.error("Failed to get favourite shader packs", tt), Vt || qt(new Set)
        })), () => {
          Vt = !0
        }
      }), [tt, et]), {
        isFavourite: tt => null === Vt ? null : Vt.has(tt),
        toggle: function(et) {
          if (null === Vt || mt.current.has(et)) return;
          mt.current.add(et);
          const Ot = !Vt.has(et);
          dt(et, Ot), (Ot ? Dt.e.favouriteShaderPack(tt, et) : Dt.e.unfavouriteShaderPack(tt, et)).catch((tt => {
            console.error("Failed to change a favourite shader pack", tt), dt(et, !Ot)
          })).finally((() => {
            mt.current.delete(et)
          }))
        }
      }
    }
  },
  6754: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => ft,
      E: () => Nt,
      I: () => St,
      L: () => Xt,
      O: () => Rt,
      Q: () => wt,
      U: () => zt,
      X: () => kt,
      Z: () => mt,
      _: () => Gt,
      c: () => Mt,
      cb: () => jt,
      f: () => vt,
      fb: () => dt,
      g: () => yt,
      ib: () => Lt,
      k: () => lt,
      lb: () => Ft,
      n: () => Qt,
      nb: () => bt,
      qb: () => ct,
      r: () => It,
      s: () => Et,
      v: () => Pt,
      z: () => ot
    });
    var Ot = Vt(6756),
      qt = Vt(184),
      Dt = Vt(4691);
    const mt = "/shader-packs",
      dt = `${mt}/publish`;

    function jt(tt) {
      return `${mt}/${encodeURIComponent(tt)}`
    }
    let Ht = null;

    function Xt(tt) {
      Ht = tt
    }

    function Qt() {
      return Ht
    }

    function lt() {
      Ht = null
    }

    function Et(tt) {
      return tt.playerHasRank("developer") || tt.playerHasRank("admin")
    }
    const ft = ["terrain", "water", "models", "sunShadows", "strict"],
      wt = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function yt(tt, et) {
      return tt.withFeatures.includes(et) ? "with" : tt.withoutFeatures.includes(et) ? "without" : null
    }

    function Nt(tt) {
      return null === tt ? "with" : "with" === tt ? "without" : null
    }

    function Mt(tt) {
      return "with" === tt ? "only" : null === tt ? "include" : void 0
    }

    function bt(tt, et) {
      const Vt = yt(tt, et),
        Ot = tt => tt.filter((tt => tt !== et));
      return {
        withFeatures: null === Vt ? [...tt.withFeatures, et] : Ot(tt.withFeatures),
        withoutFeatures: "with" === Vt ? [...tt.withoutFeatures, et] : Ot(tt.withoutFeatures)
      }
    }
    const Jt = "section",
      Ct = "sort",
      ut = "filters",
      Kt = "q",
      ht = "banned",
      vt = "popular",
      Wt = "strict";

    function St(tt) {
      var et, Vt, qt;
      const mt = tt.get(Jt),
        dt = (null !== (et = tt.get(ut)) && void 0 !== et ? et : Wt).split(","),
        jt = tt.get(ht);
      return {
        section: "favourites" === mt || "mine" === mt ? mt : "explore",
        sort: null !== (Vt = Ot.x.find((et => et === tt.get(Ct)))) && void 0 !== Vt ? Vt : vt,
        withFeatures: ft.filter((tt => dt.includes(tt) && !dt.includes(`-${tt}`))),
        withoutFeatures: ft.filter((tt => dt.includes(`-${tt}`))),
        searchQuery: (null === (qt = tt.get(Kt)) || void 0 === qt ? void 0 : qt.slice(0, Ot.I)) || null,
        pageNumber: (0, Dt.h)(tt.get(Dt.d)),
        banned: "only" === jt ? "with" : "include" === jt ? null : "without"
      }
    }

    function ct(tt, et) {
      var Vt;
      const Ot = Zt(et);
      (0, Dt.j)(tt, Jt, "explore" === et.section ? null : et.section), (0, Dt.j)(tt, Ct, et.sort === vt ? null : et.sort), (0, Dt.j)(tt, ut, Ot === Wt ? null : Ot), (0, Dt.j)(tt, Kt, et.searchQuery), (0, Dt.j)(tt, ht, null !== (Vt = Mt(et.banned)) && void 0 !== Vt ? Vt : null), (0, Dt.n)(tt, et.pageNumber)
    }

    function Rt(tt) {
      const et = new URLSearchParams;
      return ct(et, {
        section: "explore",
        sort: vt,
        withFeatures: "strict" === tt ? [tt] : [tt, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${mt}?${et.toString()}`
    }

    function It(tt) {
      return Zt(tt) === Wt
    }

    function Pt(tt) {
      return null !== tt.searchQuery || "with" === tt.banned || Zt(tt) !== Wt
    }

    function Zt(tt) {
      return ft.flatMap((et => {
        const Vt = yt(tt, et);
        return "with" === Vt ? [et] : "without" === Vt ? [`-${et}`] : []
      })).join(",")
    }
    const Lt = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Ft = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function kt(tt) {
      return Math.round(100 * Math.max(0, 1 - 1 / tt))
    }

    function Gt(tt, et, Vt, qt) {
      const Dt = [];
      tt.isBanned && Dt.push({
        tone: "warning",
        text: qt("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: mt
      } = tt;
      if (null === tt.brokenError || mt && !mt.error || Dt.push({
          tone: "warning",
          text: qt("shaderPackListing:ownerBroken"),
          detail: tt.brokenError
        }), null !== mt && void 0 !== mt && mt.error) Dt.push({
        tone: "warning",
        text: qt(et ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Ot.q)(mt.error) ? null : mt.error
      });
      else if (mt) {
        const tt = null === mt.renderNotBefore ? 0 : mt.renderNotBefore - Vt,
          Ot = String(Math.ceil(tt / 6e4)),
          dt = qt(et ? tt > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : tt > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Ot
          });
        Dt.push({
          tone: "info",
          text: dt,
          detail: null
        })
      }
      return tt.listed || Dt.push({
        tone: "info",
        text: qt("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Dt
    }

    function zt(tt) {
      return Math.max(1, Math.round(tt / 1024))
    }

    function ot(tt, et, Vt) {
      return tt instanceof qt.e && tt.errorMessageForUser ? tt.errorMessageForUser : et(Vt)
    }
  },
  6776: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(63),
      qt = Vt(39);

    function Dt(tt, et) {
      var Vt;
      const [Dt, mt] = (0, Ot.useState)(null !== (Vt = qt.e.getItem(tt)) && void 0 !== Vt ? Vt : et);
      return [Dt, et => {
        qt.e.setItem(tt, et), mt(et)
      }]
    }
  },
  6873: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt
    });
    var Ot = Vt(39);
    const qt = "shaderPack";
    async function Dt() {
      var tt;
      let et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (tt = await Ot.c.getItem(qt, et)) && void 0 !== tt ? tt : null
    }
  },
  6756: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => dt,
      E: () => mt,
      G: () => Ot,
      H: () => lt,
      I: () => Xt,
      K: () => Jt,
      L: () => Qt,
      P: () => Ht,
      e: () => ft,
      i: () => yt,
      k: () => wt,
      o: () => Et,
      q: () => bt,
      t: () => ut,
      u: () => jt,
      v: () => qt,
      w: () => Ct,
      x: () => Dt
    });
    const Ot = ["forest", "desert", "water", "night", "cave"];
    const qt = {
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
      Dt = ["popular", "updated", "newest"],
      mt = 3,
      dt = 32,
      jt = 300;

    function Ht(tt, et) {
      return tt.slice(0, et).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Xt = 64,
      Qt = 512,
      lt = 18e5;

    function Et(tt) {
      const et = tt,
        Vt = null === et || void 0 === et ? void 0 : et.files;
      return "number" === typeof(null === et || void 0 === et ? void 0 : et.apiVersion) && "string" === typeof et.name && (null === et.author || "string" === typeof et.author) && (void 0 === et.keepCircleShadows || "boolean" === typeof et.keepCircleShadows) && "object" === typeof Vt && null !== Vt && Object.values(Vt).every((tt => "string" === typeof tt))
    }
    const ft = "Bloxdhub",
      wt = "https://bloxdhub.com/shaders";

    function yt(tt) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(tt)}`
    }
    const Nt = "Screenshot generation failed.",
      Mt = "Its screenshots couldn't be generated:";

    function bt(tt) {
      var et;
      return tt === Nt || null !== (et = null === tt || void 0 === tt ? void 0 : tt.startsWith(Mt)) && void 0 !== et && et
    }

    function Jt(tt, et) {
      return `shaderPacks/${tt}/${et}.json`
    }

    function Ct(tt, et, Vt, Ot) {
      return null === et.renderId ? ut(tt, et.baselineVersion, Vt, Ot) : `${tt}/${function(tt,et,Vt,Ot){return`shaderPacks/${tt}/${et}/${Vt}-${Ot}.webp`}(et.packId,et.renderId,Vt,Ot)}`
    }

    function ut(tt, et, Vt, Ot) {
      return `${tt}/${function(tt,et,Vt){return`shaderPacks/baseline/${tt}/${et}-${Vt}.webp`}(et,Vt,Ot)}`
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);