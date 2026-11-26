export const id = 123;
export const ids = [123, 706];
export const modules = {
  5461: (VV, eV, xV) => {
    var JV = xV(5469);

    function YV() {}

    function UV() {}
    UV.resetWarningCache = YV, VV.exports = function() {
      function VV(VV, eV, xV, YV, UV, yV) {
        if (yV !== JV) {
          var pV = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw pV.name = "Invariant Violation", pV
        }
      }

      function eV() {
        return VV
      }
      VV.isRequired = VV;
      var xV = {
        array: VV,
        bigint: VV,
        bool: VV,
        func: VV,
        number: VV,
        object: VV,
        string: VV,
        symbol: VV,
        any: VV,
        arrayOf: eV,
        element: VV,
        elementType: VV,
        instanceOf: eV,
        node: VV,
        objectOf: eV,
        oneOf: eV,
        oneOfType: eV,
        shape: eV,
        exact: eV,
        checkPropTypes: UV,
        resetWarningCache: YV
      };
      return xV.PropTypes = xV, xV
    }
  },
  5453: (VV, eV, xV) => {
    VV.exports = xV(5461)()
  },
  5469: VV => {
    VV.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7156: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => wV
    });
    var JV = xV(1612),
      YV = xV(1551),
      UV = xV(1220),
      yV = xV(7164),
      pV = xV(7141),
      QV = xV(7130),
      nV = xV(1321);

    function wV() {
      const {
        t: VV
      } = (0, UV.A)(), eV = (0, JV.useNavigatePreserveSearch)();
      return (0, pV.e)(), (0, nV.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, nV.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, nV.jsx)(YV.b, {
            onClick: () => {
              eV(QV.Y)
            },
            children: VV("shaderPackListing:backToPacks")
          })
        }), (0, nV.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: VV("shaderPackListing:publishTitle")
        }), (0, nV.jsx)(yV.ShaderPackPublishForm, {
          existing: null,
          onPublished: VV => {
            eV((0, QV.db)(VV.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  7141: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      g: () => rV,
      j: () => ZV,
      n: () => kV
    });
    var JV = xV(62),
      YV = xV(7132),
      UV = xV(1603),
      yV = xV(7130),
      pV = xV(7147),
      QV = xV(1168);
    const nV = "shaderPackListingView",
      wV = "shaderPackListingFilterOpen";

    function ZV() {
      var VV;
      const [eV, xV] = (0, pV.c)(nV, YV.L[0]);
      return [null !== (VV = YV.L.find((VV => VV === eV))) && void 0 !== VV ? VV : YV.L[0], xV]
    }

    function vV() {
      (0, JV.useEffect)((() => () => {
        window.location.pathname.startsWith(yV.Y) || (0, yV.g)()
      }), [])
    }

    function rV() {
      return (0, pV.c)(wV, !1)
    }

    function kV() {
      const {
        userContext: VV,
        isUserContextUpdating: eV
      } = (0, QV.d)(), [xV, YV] = (0, JV.useState)(null), yV = (0, JV.useRef)(new Set);

      function pV(VV, eV) {
        YV((xV => {
          const JV = new Set(xV);
          return eV ? JV.add(VV) : JV.delete(VV), JV
        }))
      }
      return (0, JV.useEffect)((() => {
        if (eV) return;
        let xV = !1;
        return UV.b.getFavouriteShaderPacks(VV).then((VV => {
          xV || YV(new Set(VV))
        })).catch((VV => {
          console.error("Failed to get favourite shader packs", VV), xV || YV(new Set)
        })), () => {
          xV = !0
        }
      }), [VV, eV]), {
        isFavourite: VV => null === xV ? null : xV.has(VV),
        toggle: function(eV) {
          if (null === xV || yV.current.has(eV)) return;
          yV.current.add(eV);
          const JV = !xV.has(eV);
          pV(eV, JV), (JV ? UV.b.favouriteShaderPack(VV, eV) : UV.b.unfavouriteShaderPack(VV, eV)).catch((VV => {
            console.error("Failed to change a favourite shader pack", VV), pV(eV, !JV)
          })).finally((() => {
            yV.current.delete(eV)
          }))
        }
      }
    }
  },
  7130: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => aV,
      A: () => kV,
      E: () => BV,
      I: () => MV,
      K: () => wV,
      O: () => GV,
      Q: () => bV,
      T: () => oV,
      V: () => CV,
      Y: () => yV,
      b: () => jV,
      d: () => NV,
      db: () => QV,
      e: () => EV,
      g: () => vV,
      hb: () => pV,
      jb: () => DV,
      k: () => ZV,
      mb: () => iV,
      nb: () => qV,
      o: () => WV,
      qb: () => zV,
      r: () => rV,
      t: () => RV,
      x: () => cV
    });
    var JV = xV(7132),
      YV = xV(165),
      UV = xV(5037);
    const yV = "/shader-packs",
      pV = `${yV}/publish`;

    function QV(VV) {
      return `${yV}/${encodeURIComponent(VV)}`
    }
    let nV = null;

    function wV(VV) {
      nV = VV
    }

    function ZV() {
      return nV
    }

    function vV() {
      nV = null
    }

    function rV(VV) {
      return VV.playerHasRank("developer") || VV.playerHasRank("admin")
    }
    const kV = ["terrain", "water", "models", "sunShadows", "strict"],
      bV = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function EV(VV, eV) {
      return VV.withFeatures.includes(eV) ? "with" : VV.withoutFeatures.includes(eV) ? "without" : null
    }

    function BV(VV) {
      return null === VV ? "with" : "with" === VV ? "without" : null
    }

    function jV(VV) {
      return "with" === VV ? "only" : null === VV ? "include" : void 0
    }

    function qV(VV, eV) {
      const xV = EV(VV, eV),
        JV = VV => VV.filter((VV => VV !== eV));
      return {
        withFeatures: null === xV ? [...VV.withFeatures, eV] : JV(VV.withFeatures),
        withoutFeatures: "with" === xV ? [...VV.withoutFeatures, eV] : JV(VV.withoutFeatures)
      }
    }
    const tV = "section",
      FV = "sort",
      TV = "filters",
      PV = "q",
      AV = "banned",
      NV = "popular",
      XV = "strict";

    function MV(VV) {
      var eV, xV, YV;
      const yV = VV.get(tV),
        pV = (null !== (eV = VV.get(TV)) && void 0 !== eV ? eV : XV).split(","),
        QV = VV.get(AV);
      return {
        section: "favourites" === yV || "mine" === yV ? yV : "explore",
        sort: null !== (xV = JV.B.find((eV => eV === VV.get(FV)))) && void 0 !== xV ? xV : NV,
        withFeatures: kV.filter((VV => pV.includes(VV) && !pV.includes(`-${VV}`))),
        withoutFeatures: kV.filter((VV => pV.includes(`-${VV}`))),
        searchQuery: (null === (YV = VV.get(PV)) || void 0 === YV ? void 0 : YV.slice(0, JV.P)) || null,
        pageNumber: (0, UV.g)(VV.get(UV.d)),
        banned: "only" === QV ? "with" : "include" === QV ? null : "without"
      }
    }

    function zV(VV, eV) {
      var xV;
      const JV = gV(eV);
      (0, UV.k)(VV, tV, "explore" === eV.section ? null : eV.section), (0, UV.k)(VV, FV, eV.sort === NV ? null : eV.sort), (0, UV.k)(VV, TV, JV === XV ? null : JV), (0, UV.k)(VV, PV, eV.searchQuery), (0, UV.k)(VV, AV, null !== (xV = jV(eV.banned)) && void 0 !== xV ? xV : null), (0, UV.l)(VV, eV.pageNumber)
    }

    function GV(VV) {
      const eV = new URLSearchParams;
      return zV(eV, {
        section: "explore",
        sort: NV,
        withFeatures: "strict" === VV ? [VV] : [VV, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${yV}?${eV.toString()}`
    }

    function WV(VV) {
      return gV(VV) === XV
    }

    function RV(VV) {
      return null !== VV.searchQuery || "with" === VV.banned || gV(VV) !== XV
    }

    function gV(VV) {
      return kV.flatMap((eV => {
        const xV = EV(VV, eV);
        return "with" === xV ? [eV] : "without" === xV ? [`-${eV}`] : []
      })).join(",")
    }
    const DV = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      iV = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function CV(VV) {
      return Math.round(100 * Math.max(0, 1 - 1 / VV))
    }

    function aV(VV, eV, xV, YV) {
      const UV = [];
      VV.isBanned && UV.push({
        tone: "warning",
        text: YV("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: yV
      } = VV;
      if (null === VV.brokenError || yV && !yV.error || UV.push({
          tone: "warning",
          text: YV("shaderPackListing:ownerBroken"),
          detail: VV.brokenError
        }), null !== yV && void 0 !== yV && yV.error) UV.push({
        tone: "warning",
        text: YV(eV ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, JV.n)(yV.error) ? null : yV.error
      });
      else if (yV) {
        const VV = null === yV.renderNotBefore ? 0 : yV.renderNotBefore - xV,
          JV = String(Math.ceil(VV / 6e4)),
          pV = YV(eV ? VV > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : VV > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: JV
          });
        UV.push({
          tone: "info",
          text: pV,
          detail: null
        })
      }
      return VV.listed || UV.push({
        tone: "info",
        text: YV("shaderPackListing:ownerUnlisted"),
        detail: null
      }), UV
    }

    function oV(VV) {
      return Math.max(1, Math.round(VV / 1024))
    }

    function cV(VV, eV, xV) {
      return VV instanceof YV.b && VV.errorMessageForUser ? VV.errorMessageForUser : eV(xV)
    }
  },
  7147: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(62),
      YV = xV(40);

    function UV(VV, eV) {
      var xV;
      const [UV, yV] = (0, JV.useState)(null !== (xV = YV.m.getItem(VV)) && void 0 !== xV ? xV : eV);
      return [UV, eV => {
        YV.m.setItem(VV, eV), yV(eV)
      }]
    }
  },
  7216: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    var JV = xV(40);
    const YV = "shaderPack";
    async function UV() {
      var VV;
      let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (VV = await JV.i.getItem(YV, eV)) && void 0 !== VV ? VV : null
    }
  },
  7132: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => UV,
      D: () => pV,
      H: () => yV,
      L: () => JV,
      O: () => vV,
      P: () => wV,
      S: () => tV,
      V: () => ZV,
      X: () => nV,
      d: () => kV,
      g: () => EV,
      h: () => bV,
      k: () => rV,
      n: () => qV,
      q: () => TV,
      s: () => QV,
      w: () => YV,
      x: () => FV
    });
    const JV = ["forest", "desert", "water", "night", "cave"];
    const YV = {
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
      UV = ["popular", "updated", "newest"],
      yV = 3,
      pV = 32,
      QV = 300;

    function nV(VV, eV) {
      return VV.slice(0, eV).replace(/[\uD800-\uDBFF]$/, "")
    }
    const wV = 64,
      ZV = 512,
      vV = 18e5;

    function rV(VV) {
      const eV = VV,
        xV = null === eV || void 0 === eV ? void 0 : eV.files;
      return "number" === typeof(null === eV || void 0 === eV ? void 0 : eV.apiVersion) && "string" === typeof eV.name && (null === eV.author || "string" === typeof eV.author) && (void 0 === eV.keepCircleShadows || "boolean" === typeof eV.keepCircleShadows) && "object" === typeof xV && null !== xV && Object.values(xV).every((VV => "string" === typeof VV))
    }
    const kV = "Bloxdhub",
      bV = "https://bloxdhub.com/shaders";

    function EV(VV) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(VV)}`
    }
    const BV = "Screenshot generation failed.",
      jV = "Its screenshots couldn't be generated:";

    function qV(VV) {
      var eV;
      return VV === BV || null !== (eV = null === VV || void 0 === VV ? void 0 : VV.startsWith(jV)) && void 0 !== eV && eV
    }

    function tV(VV, eV) {
      return `shaderPacks/${VV}/${eV}.json`
    }

    function FV(VV, eV, xV, JV) {
      return null === eV.renderId ? TV(VV, eV.baselineVersion, xV, JV) : `${VV}/${function(VV,eV,xV,JV){return`shaderPacks/${VV}/${eV}/${xV}-${JV}.webp`}(eV.packId,eV.renderId,xV,JV)}`
    }

    function TV(VV, eV, xV, JV) {
      return `${VV}/${function(VV,eV,xV){return`shaderPacks/baseline/${VV}/${eV}-${xV}.webp`}(eV,xV,JV)}`
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);