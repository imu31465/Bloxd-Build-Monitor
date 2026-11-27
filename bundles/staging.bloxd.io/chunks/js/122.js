export const id = 122;
export const ids = [122, 706];
export const modules = {
  5469: (ee, ie, He) => {
    var ye = He(5475);

    function be() {}

    function Me() {}
    Me.resetWarningCache = be, ee.exports = function() {
      function ee(ee, ie, He, be, Me, Ke) {
        if (Ke !== ye) {
          var Ue = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ue.name = "Invariant Violation", Ue
        }
      }

      function ie() {
        return ee
      }
      ee.isRequired = ee;
      var He = {
        array: ee,
        bigint: ee,
        bool: ee,
        func: ee,
        number: ee,
        object: ee,
        string: ee,
        symbol: ee,
        any: ee,
        arrayOf: ie,
        element: ee,
        elementType: ee,
        instanceOf: ie,
        node: ee,
        objectOf: ie,
        oneOf: ie,
        oneOfType: ie,
        shape: ie,
        exact: ie,
        checkPropTypes: Me,
        resetWarningCache: be
      };
      return He.PropTypes = He, He
    }
  },
  5461: (ee, ie, He) => {
    ee.exports = He(5469)()
  },
  5475: ee => {
    ee.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7235: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => oe
    });
    var ye = He(1502),
      be = He(1438),
      Me = He(1127),
      Ke = He(7238),
      Ue = He(7213),
      Fe = He(7201),
      Je = He(1228);

    function oe() {
      const {
        t: ee
      } = (0, Me.v)(), ie = (0, ye.useNavigatePreserveSearch)();
      return (0, Ue.b)(), (0, Je.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Je.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Je.jsx)(be.b, {
            onClick: () => {
              ie(Fe.Y)
            },
            children: ee("shaderPackListing:backToPacks")
          })
        }), (0, Je.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: ee("shaderPackListing:publishTitle")
        }), (0, Je.jsx)(Ke.ShaderPackPublishForm, {
          existing: null,
          onPublished: ee => {
            ie((0, Fe.eb)(ee.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  7213: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      e: () => qe,
      i: () => Re,
      l: () => fe
    });
    var ye = He(59),
      be = He(7206),
      Me = He(1490),
      Ke = He(7201),
      Ue = He(7220),
      Fe = He(1075);
    const Je = "shaderPackListingView",
      oe = "shaderPackListingFilterOpen";

    function Re() {
      var ee;
      const [ie, He] = (0, Ue.d)(Je, be.C[0]);
      return [null !== (ee = be.C.find((ee => ee === ie))) && void 0 !== ee ? ee : be.C[0], He]
    }

    function ke() {
      (0, ye.useEffect)((() => () => {
        window.location.pathname.startsWith(Ke.Y) || (0, Ke.l)()
      }), [])
    }

    function qe() {
      return (0, Ue.d)(oe, !1)
    }

    function fe() {
      const {
        userContext: ee,
        isUserContextUpdating: ie
      } = (0, Fe.b)(), [He, be] = (0, ye.useState)(null), Ke = (0, ye.useRef)(new Set);

      function Ue(ee, ie) {
        be((He => {
          const ye = new Set(He);
          return ie ? ye.add(ee) : ye.delete(ee), ye
        }))
      }
      return (0, ye.useEffect)((() => {
        if (ie) return;
        let He = !1;
        return Me.b.getFavouriteShaderPacks(ee).then((ee => {
          He || be(new Set(ee))
        })).catch((ee => {
          console.error("Failed to get favourite shader packs", ee), He || be(new Set)
        })), () => {
          He = !0
        }
      }), [ee, ie]), {
        isFavourite: ee => null === He ? null : He.has(ee),
        toggle: function(ie) {
          if (null === He || Ke.current.has(ie)) return;
          Ke.current.add(ie);
          const ye = !He.has(ie);
          Ue(ie, ye), (ye ? Me.b.favouriteShaderPack(ee, ie) : Me.b.unfavouriteShaderPack(ee, ie)).catch((ee => {
            console.error("Failed to change a favourite shader pack", ee), Ue(ie, !ye)
          })).finally((() => {
            Ke.current.delete(ie)
          }))
        }
      }
    }
  },
  7201: (ee, ie, He) => {
    He.d(ie, {
      C: () => fe,
      F: () => Xe,
      H: () => we,
      J: () => oe,
      N: () => Pe,
      P: () => Te,
      T: () => Ce,
      V: () => xe,
      Y: () => Ke,
      ab: () => Le,
      c: () => ze,
      eb: () => Fe,
      g: () => te,
      hb: () => Ue,
      i: () => pe,
      ib: () => ae,
      l: () => ke,
      lb: () => ce,
      p: () => Re,
      pb: () => Be,
      r: () => Ae,
      rb: () => De,
      t: () => qe,
      w: () => Ye,
      z: () => ve
    });
    var ye = He(7206),
      be = He(153),
      Me = He(4947);
    const Ke = "/shader-packs",
      Ue = `${Ke}/publish`;

    function Fe(ee) {
      return `${Ke}/${encodeURIComponent(ee)}`
    }
    let Je = null;

    function oe(ee) {
      Je = ee
    }

    function Re() {
      return Je
    }

    function ke() {
      Je = null
    }

    function qe(ee) {
      return ee.playerHasRank("developer") || ee.playerHasRank("admin")
    }
    const fe = ["terrain", "water", "models", "sunShadows", "strict"],
      Te = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function pe(ee, ie) {
      return ee.withFeatures.includes(ie) ? "with" : ee.withoutFeatures.includes(ie) ? "without" : null
    }

    function Xe(ee) {
      return null === ee ? "with" : "with" === ee ? "without" : null
    }

    function ze(ee) {
      return "with" === ee ? "only" : null === ee ? "include" : void 0
    }

    function Be(ee, ie) {
      const He = pe(ee, ie),
        ye = ee => ee.filter((ee => ee !== ie));
      return {
        withFeatures: null === He ? [...ee.withFeatures, ie] : ye(ee.withFeatures),
        withoutFeatures: "with" === He ? [...ee.withoutFeatures, ie] : ye(ee.withoutFeatures)
      }
    }
    const Ee = "section",
      ge = "sort",
      Oe = "filters",
      de = "q",
      We = "banned",
      te = "popular",
      Ze = "strict";

    function we(ee) {
      var ie, He, be;
      const Ke = ee.get(Ee),
        Ue = (null !== (ie = ee.get(Oe)) && void 0 !== ie ? ie : Ze).split(","),
        Fe = ee.get(We);
      return {
        section: "favourites" === Ke || "mine" === Ke ? Ke : "explore",
        sort: null !== (He = ye.w.find((ie => ie === ee.get(ge)))) && void 0 !== He ? He : te,
        withFeatures: fe.filter((ee => Ue.includes(ee) && !Ue.includes(`-${ee}`))),
        withoutFeatures: fe.filter((ee => Ue.includes(`-${ee}`))),
        searchQuery: (null === (be = ee.get(de)) || void 0 === be ? void 0 : be.slice(0, ye.G)) || null,
        pageNumber: (0, Me.g)(ee.get(Me.e)),
        banned: "only" === Fe ? "with" : "include" === Fe ? null : "without"
      }
    }

    function De(ee, ie) {
      var He;
      const ye = Ve(ie);
      (0, Me.i)(ee, Ee, "explore" === ie.section ? null : ie.section), (0, Me.i)(ee, ge, ie.sort === te ? null : ie.sort), (0, Me.i)(ee, Oe, ye === Ze ? null : ye), (0, Me.i)(ee, de, ie.searchQuery), (0, Me.i)(ee, We, null !== (He = ze(ie.banned)) && void 0 !== He ? He : null), (0, Me.k)(ee, ie.pageNumber)
    }

    function Pe(ee) {
      const ie = new URLSearchParams;
      return De(ie, {
        section: "explore",
        sort: te,
        withFeatures: "strict" === ee ? [ee] : [ee, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Ke}?${ie.toString()}`
    }

    function Ae(ee) {
      return Ve(ee) === Ze
    }

    function Ye(ee) {
      return null !== ee.searchQuery || "with" === ee.banned || Ve(ee) !== Ze
    }

    function Ve(ee) {
      return fe.flatMap((ie => {
        const He = pe(ee, ie);
        return "with" === He ? [ie] : "without" === He ? [`-${ie}`] : []
      })).join(",")
    }
    const ae = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      ce = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function xe(ee) {
      return Math.round(100 * Math.max(0, 1 - 1 / ee))
    }

    function Le(ee, ie, He, be) {
      const Me = [];
      ee.isBanned && Me.push({
        tone: "warning",
        text: be("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Ke
      } = ee;
      if (null === ee.brokenError || Ke && !Ke.error || Me.push({
          tone: "warning",
          text: be("shaderPackListing:ownerBroken"),
          detail: ee.brokenError
        }), null !== Ke && void 0 !== Ke && Ke.error) Me.push({
        tone: "warning",
        text: be(ie ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, ye.l)(Ke.error) ? null : Ke.error
      });
      else if (Ke) {
        const ee = null === Ke.renderNotBefore ? 0 : Ke.renderNotBefore - He,
          ye = String(Math.ceil(ee / 6e4)),
          Ue = be(ie ? ee > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : ee > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: ye
          });
        Me.push({
          tone: "info",
          text: Ue,
          detail: null
        })
      }
      return ee.listed || Me.push({
        tone: "info",
        text: be("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Me
    }

    function Ce(ee) {
      return Math.max(1, Math.round(ee / 1024))
    }

    function ve(ee, ie, He) {
      return ee instanceof be.b && ee.errorMessageForUser ? ee.errorMessageForUser : ie(He)
    }
  },
  7220: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me
    });
    var ye = He(59),
      be = He(35);

    function Me(ee, ie) {
      var He;
      const [Me, Ke] = (0, ye.useState)(null !== (He = be.i.getItem(ee)) && void 0 !== He ? He : ie);
      return [Me, ie => {
        be.i.setItem(ee, ie), Ke(ie)
      }]
    }
  },
  7296: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      h: () => Me
    });
    var ye = He(35);
    const be = "shaderPack";
    async function Me() {
      var ee;
      let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (ee = await ye.e.getItem(be, ie)) && void 0 !== ee ? ee : null
    }
  },
  7206: (ee, ie, He) => {
    He.d(ie, {
      A: () => Ke,
      C: () => ye,
      D: () => ke,
      G: () => oe,
      H: () => Ee,
      L: () => Re,
      M: () => Je,
      d: () => fe,
      h: () => pe,
      i: () => Te,
      j: () => qe,
      l: () => Be,
      m: () => Oe,
      o: () => Fe,
      s: () => be,
      t: () => ge,
      w: () => Me,
      y: () => Ue
    });
    const ye = ["forest", "desert", "water", "night", "cave"];
    const be = {
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
      Me = ["popular", "updated", "newest"],
      Ke = 3,
      Ue = 32,
      Fe = 300;

    function Je(ee, ie) {
      return ee.slice(0, ie).replace(/[\uD800-\uDBFF]$/, "")
    }
    const oe = 64,
      Re = 512,
      ke = 18e5;

    function qe(ee) {
      const ie = ee,
        He = null === ie || void 0 === ie ? void 0 : ie.files;
      return "number" === typeof(null === ie || void 0 === ie ? void 0 : ie.apiVersion) && "string" === typeof ie.name && (null === ie.author || "string" === typeof ie.author) && (void 0 === ie.keepCircleShadows || "boolean" === typeof ie.keepCircleShadows) && "object" === typeof He && null !== He && Object.values(He).every((ee => "string" === typeof ee))
    }
    const fe = "Bloxdhub",
      Te = "https://bloxdhub.com/shaders";

    function pe(ee) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(ee)}`
    }
    const Xe = "Screenshot generation failed.",
      ze = "Its screenshots couldn't be generated:";

    function Be(ee) {
      var ie;
      return ee === Xe || null !== (ie = null === ee || void 0 === ee ? void 0 : ee.startsWith(ze)) && void 0 !== ie && ie
    }

    function Ee(ee, ie) {
      return `shaderPacks/${ee}/${ie}.json`
    }

    function ge(ee, ie, He, ye) {
      return null === ie.renderId ? Oe(ee, ie.baselineVersion, He, ye) : `${ee}/${function(ee,ie,He,ye){return`shaderPacks/${ee}/${ie}/${He}-${ye}.webp`}(ie.packId,ie.renderId,He,ye)}`
    }

    function Oe(ee, ie, He, ye) {
      return `${ee}/${function(ee,ie,He){return`shaderPacks/baseline/${ee}/${ie}-${He}.webp`}(ie,He,ye)}`
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);