export const id = 123;
export const ids = [123, 706];
export const modules = {
  5372: (MM, rM, iM) => {
    var OM = iM(5376);

    function SM() {}

    function jM() {}
    jM.resetWarningCache = SM, MM.exports = function() {
      function MM(MM, rM, iM, SM, jM, aM) {
        if (aM !== OM) {
          var PM = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw PM.name = "Invariant Violation", PM
        }
      }

      function rM() {
        return MM
      }
      MM.isRequired = MM;
      var iM = {
        array: MM,
        bigint: MM,
        bool: MM,
        func: MM,
        number: MM,
        object: MM,
        string: MM,
        symbol: MM,
        any: MM,
        arrayOf: rM,
        element: MM,
        elementType: MM,
        instanceOf: rM,
        node: MM,
        objectOf: rM,
        oneOf: rM,
        oneOfType: rM,
        shape: rM,
        exact: rM,
        checkPropTypes: jM,
        resetWarningCache: SM
      };
      return iM.PropTypes = iM, iM
    }
  },
  5368: (MM, rM, iM) => {
    MM.exports = iM(5372)()
  },
  5376: MM => {
    MM.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7088: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => zM
    });
    var OM = iM(1591),
      SM = iM(1520),
      jM = iM(1188),
      aM = iM(7093),
      PM = iM(7068),
      nM = iM(7051),
      QM = iM(1303);

    function zM() {
      const {
        t: MM
      } = (0, jM.A)(), rM = (0, OM.useNavigatePreserveSearch)();
      return (0, PM.c)(), (0, QM.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, QM.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, QM.jsx)(SM.c, {
            onClick: () => {
              rM(nM.P)
            },
            children: MM("shaderPackListing:backToPacks")
          })
        }), (0, QM.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: MM("shaderPackListing:publishTitle")
        }), (0, QM.jsx)(aM.ShaderPackPublishForm, {
          existing: null,
          onPublished: MM => {
            rM((0, nM.W)(MM.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  7068: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => mM,
      e: () => HM,
      h: () => LM,
      l: () => hM
    });
    var OM = iM(44),
      SM = iM(7054),
      jM = iM(1573),
      aM = iM(7051),
      PM = iM(7077),
      nM = iM(1142);
    const QM = "shaderPackListingView",
      zM = "shaderPackListingFilterOpen";

    function LM() {
      var MM;
      const [rM, iM] = (0, PM.e)(QM, SM.E[0]);
      return [null !== (MM = SM.E.find((MM => MM === rM))) && void 0 !== MM ? MM : SM.E[0], iM]
    }

    function mM() {
      (0, OM.useEffect)((() => () => {
        window.location.pathname.startsWith(aM.P) || (0, aM.h)()
      }), [])
    }

    function HM() {
      return (0, PM.e)(zM, !1)
    }

    function hM() {
      const {
        userContext: MM,
        isUserContextUpdating: rM
      } = (0, nM.b)(), [iM, SM] = (0, OM.useState)(null), aM = (0, OM.useRef)(new Set);

      function PM(MM, rM) {
        SM((iM => {
          const OM = new Set(iM);
          return rM ? OM.add(MM) : OM.delete(MM), OM
        }))
      }
      return (0, OM.useEffect)((() => {
        if (rM) return;
        let iM = !1;
        return jM.c.getFavouriteShaderPacks(MM).then((MM => {
          iM || SM(new Set(MM))
        })).catch((MM => {
          console.error("Failed to get favourite shader packs", MM), iM || SM(new Set)
        })), () => {
          iM = !0
        }
      }), [MM, rM]), {
        isFavourite: MM => null === iM ? null : iM.has(MM),
        toggle: function(rM) {
          if (null === iM || aM.current.has(rM)) return;
          aM.current.add(rM);
          const OM = !iM.has(rM);
          PM(rM, OM), (OM ? jM.c.favouriteShaderPack(MM, rM) : jM.c.unfavouriteShaderPack(MM, rM)).catch((MM => {
            console.error("Failed to change a favourite shader pack", MM), PM(rM, !OM)
          })).finally((() => {
            aM.current.delete(rM)
          }))
        }
      }
    }
  },
  7051: (MM, rM, iM) => {
    iM.d(rM, {
      $: () => DM,
      B: () => zM,
      F: () => RM,
      I: () => JM,
      K: () => fM,
      N: () => ZM,
      P: () => aM,
      S: () => oM,
      W: () => nM,
      Y: () => PM,
      c: () => lM,
      d: () => wM,
      db: () => kM,
      fb: () => EM,
      g: () => dM,
      h: () => mM,
      j: () => LM,
      jb: () => uM,
      n: () => pM,
      q: () => HM,
      r: () => WM,
      u: () => YM,
      w: () => hM,
      x: () => yM,
      z: () => gM
    });
    var OM = iM(7054),
      SM = iM(143),
      jM = iM(4937);
    const aM = "/shader-packs",
      PM = `${aM}/publish`;

    function nM(MM) {
      return `${aM}/${encodeURIComponent(MM)}`
    }
    let QM = null;

    function zM(MM) {
      QM = MM
    }

    function LM() {
      return QM
    }

    function mM() {
      QM = null
    }

    function HM(MM) {
      return MM.playerHasRank("developer") || MM.playerHasRank("admin")
    }
    const hM = ["terrain", "water", "models", "sunShadows", "strict"],
      JM = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function dM(MM, rM) {
      return MM.withFeatures.includes(rM) ? "with" : MM.withoutFeatures.includes(rM) ? "without" : null
    }

    function yM(MM) {
      return null === MM ? "with" : "with" === MM ? "without" : null
    }

    function lM(MM) {
      return "with" === MM ? "only" : null === MM ? "include" : void 0
    }

    function EM(MM, rM) {
      const iM = dM(MM, rM),
        OM = MM => MM.filter((MM => MM !== rM));
      return {
        withFeatures: null === iM ? [...MM.withFeatures, rM] : OM(MM.withFeatures),
        withoutFeatures: "with" === iM ? [...MM.withoutFeatures, rM] : OM(MM.withoutFeatures)
      }
    }
    const UM = "section",
      GM = "sort",
      CM = "filters",
      eM = "q",
      bM = "banned",
      wM = "popular",
      tM = "strict";

    function gM(MM) {
      var rM, iM, SM;
      const aM = MM.get(UM),
        PM = (null !== (rM = MM.get(CM)) && void 0 !== rM ? rM : tM).split(","),
        nM = MM.get(bM);
      return {
        section: "favourites" === aM || "mine" === aM ? aM : "explore",
        sort: null !== (iM = OM.y.find((rM => rM === MM.get(GM)))) && void 0 !== iM ? iM : wM,
        withFeatures: hM.filter((MM => PM.includes(MM) && !PM.includes(`-${MM}`))),
        withoutFeatures: hM.filter((MM => PM.includes(`-${MM}`))),
        searchQuery: (null === (SM = MM.get(eM)) || void 0 === SM ? void 0 : SM.slice(0, OM.M)) || null,
        pageNumber: (0, jM.d)(MM.get(jM.c)),
        banned: "only" === nM ? "with" : "include" === nM ? null : "without"
      }
    }

    function uM(MM, rM) {
      var iM;
      const OM = sM(rM);
      (0, jM.f)(MM, UM, "explore" === rM.section ? null : rM.section), (0, jM.f)(MM, GM, rM.sort === wM ? null : rM.sort), (0, jM.f)(MM, CM, OM === tM ? null : OM), (0, jM.f)(MM, eM, rM.searchQuery), (0, jM.f)(MM, bM, null !== (iM = lM(rM.banned)) && void 0 !== iM ? iM : null), (0, jM.h)(MM, rM.pageNumber)
    }

    function RM(MM) {
      const rM = new URLSearchParams;
      return uM(rM, {
        section: "explore",
        sort: wM,
        withFeatures: "strict" === MM ? [MM] : [MM, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${aM}?${rM.toString()}`
    }

    function pM(MM) {
      return sM(MM) === tM
    }

    function WM(MM) {
      return null !== MM.searchQuery || "with" === MM.banned || sM(MM) !== tM
    }

    function sM(MM) {
      return hM.flatMap((rM => {
        const iM = dM(MM, rM);
        return "with" === iM ? [rM] : "without" === iM ? [`-${rM}`] : []
      })).join(",")
    }
    const DM = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      kM = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function ZM(MM) {
      return Math.round(100 * Math.max(0, 1 - 1 / MM))
    }

    function oM(MM, rM, iM, SM) {
      const jM = [];
      MM.isBanned && jM.push({
        tone: "warning",
        text: SM("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: aM
      } = MM;
      if (null === MM.brokenError || aM && !aM.error || jM.push({
          tone: "warning",
          text: SM("shaderPackListing:ownerBroken"),
          detail: MM.brokenError
        }), null !== aM && void 0 !== aM && aM.error) jM.push({
        tone: "warning",
        text: SM(rM ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, OM.m)(aM.error) ? null : aM.error
      });
      else if (aM) {
        const MM = null === aM.renderNotBefore ? 0 : aM.renderNotBefore - iM,
          OM = String(Math.ceil(MM / 6e4)),
          PM = SM(rM ? MM > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : MM > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: OM
          });
        jM.push({
          tone: "info",
          text: PM,
          detail: null
        })
      }
      return MM.listed || jM.push({
        tone: "info",
        text: SM("shaderPackListing:ownerUnlisted"),
        detail: null
      }), jM
    }

    function fM(MM) {
      return Math.max(1, Math.round(MM / 1024))
    }

    function YM(MM, rM, iM) {
      return MM instanceof SM.e && MM.errorMessageForUser ? MM.errorMessageForUser : rM(iM)
    }
  },
  7077: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(44),
      SM = iM(30);

    function jM(MM, rM) {
      var iM;
      const [jM, aM] = (0, OM.useState)(null !== (iM = SM.g.getItem(MM)) && void 0 !== iM ? iM : rM);
      return [jM, rM => {
        SM.g.setItem(MM, rM), aM(rM)
      }]
    }
  },
  7148: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      d: () => jM
    });
    var OM = iM(30);
    const SM = "shaderPack";
    async function jM() {
      var MM;
      let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
    }
  },
  7054: (MM, rM, iM) => {
    iM.d(rM, {
      D: () => aM,
      E: () => OM,
      I: () => mM,
      M: () => zM,
      Q: () => UM,
      U: () => LM,
      V: () => QM,
      b: () => hM,
      e: () => dM,
      g: () => JM,
      k: () => HM,
      m: () => EM,
      q: () => CM,
      t: () => nM,
      v: () => SM,
      w: () => GM,
      y: () => jM,
      z: () => PM
    });
    const OM = ["forest", "desert", "water", "night", "cave"];
    const SM = {
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
      jM = ["popular", "updated", "newest"],
      aM = 3,
      PM = 32,
      nM = 300;

    function QM(MM, rM) {
      return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
    }
    const zM = 64,
      LM = 512,
      mM = 18e5;

    function HM(MM) {
      const rM = MM,
        iM = null === rM || void 0 === rM ? void 0 : rM.files;
      return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof iM && null !== iM && Object.values(iM).every((MM => "string" === typeof MM))
    }
    const hM = "Bloxdhub",
      JM = "https://bloxdhub.com/shaders";

    function dM(MM) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
    }
    const yM = "Screenshot generation failed.",
      lM = "Its screenshots couldn't be generated:";

    function EM(MM) {
      var rM;
      return MM === yM || null !== (rM = null === MM || void 0 === MM ? void 0 : MM.startsWith(lM)) && void 0 !== rM && rM
    }

    function UM(MM, rM) {
      return `shaderPacks/${MM}/${rM}.json`
    }

    function GM(MM, rM, iM, OM) {
      return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
    }

    function CM(MM, rM, iM, OM) {
      return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);