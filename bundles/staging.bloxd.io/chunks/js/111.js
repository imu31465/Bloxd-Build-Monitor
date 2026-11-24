export const id = 111;
export const ids = [111, 402];
export const modules = {
  5117: (BB, IB, ZB) => {
    var TB = ZB(5124);

    function JB() {}

    function oB() {}
    oB.resetWarningCache = JB, BB.exports = function() {
      function BB(BB, IB, ZB, JB, oB, GB) {
        if (GB !== TB) {
          var vB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw vB.name = "Invariant Violation", vB
        }
      }

      function IB() {
        return BB
      }
      BB.isRequired = BB;
      var ZB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: IB,
        element: BB,
        elementType: BB,
        instanceOf: IB,
        node: BB,
        objectOf: IB,
        oneOf: IB,
        oneOfType: IB,
        shape: IB,
        exact: IB,
        checkPropTypes: oB,
        resetWarningCache: JB
      };
      return ZB.PropTypes = ZB, ZB
    }
  },
  5115: (BB, IB, ZB) => {
    BB.exports = ZB(5117)()
  },
  5124: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6749: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => nB
    });
    var TB = ZB(1579),
      JB = ZB(1516),
      oB = ZB(1248),
      GB = ZB(6753),
      vB = ZB(6737),
      kB = ZB(6726),
      cB = ZB(1153);

    function nB() {
      const {
        t: BB
      } = (0, oB.G)(), IB = (0, TB.useNavigatePreserveSearch)();
      return (0, vB.d)(), (0, cB.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, cB.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, cB.jsx)(JB.c, {
            onClick: () => {
              IB(kB.S)
            },
            children: BB("shaderPackListing:backToPacks")
          })
        }), (0, cB.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: BB("shaderPackListing:publishTitle")
        }), (0, cB.jsx)(GB.ShaderPackPublishForm, {
          existing: null,
          onPublished: BB => {
            IB((0, kB.X)(BB.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6737: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB,
      g: () => FB,
      k: () => hB,
      l: () => NB
    });
    var TB = ZB(63),
      JB = ZB(6731),
      oB = ZB(1561),
      GB = ZB(6726),
      vB = ZB(6741),
      kB = ZB(1179);
    const cB = "shaderPackListingView",
      nB = "shaderPackListingFilterOpen";

    function hB() {
      var BB;
      const [IB, ZB] = (0, vB.d)(cB, JB.F[0]);
      return [null !== (BB = JB.F.find((BB => BB === IB))) && void 0 !== BB ? BB : JB.F[0], ZB]
    }

    function zB() {
      (0, TB.useEffect)((() => () => {
        window.location.pathname.startsWith(GB.S) || (0, GB.m)()
      }), [])
    }

    function FB() {
      return (0, vB.d)(nB, !1)
    }

    function NB() {
      const {
        userContext: BB,
        isUserContextUpdating: IB
      } = (0, kB.d)(), [ZB, JB] = (0, TB.useState)(null), GB = (0, TB.useRef)(new Set);

      function vB(BB, IB) {
        JB((ZB => {
          const TB = new Set(ZB);
          return IB ? TB.add(BB) : TB.delete(BB), TB
        }))
      }
      return (0, TB.useEffect)((() => {
        if (IB) return;
        let ZB = !1;
        return oB.c.getFavouriteShaderPacks(BB).then((BB => {
          ZB || JB(new Set(BB))
        })).catch((BB => {
          console.error("Failed to get favourite shader packs", BB), ZB || JB(new Set)
        })), () => {
          ZB = !0
        }
      }), [BB, IB]), {
        isFavourite: BB => null === ZB ? null : ZB.has(BB),
        toggle: function(IB) {
          if (null === ZB || GB.current.has(IB)) return;
          GB.current.add(IB);
          const TB = !ZB.has(IB);
          vB(IB, TB), (TB ? oB.c.favouriteShaderPack(BB, IB) : oB.c.unfavouriteShaderPack(BB, IB)).catch((BB => {
            console.error("Failed to change a favourite shader pack", BB), vB(IB, !TB)
          })).finally((() => {
            GB.current.delete(IB)
          }))
        }
      }
    }
  },
  6726: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => yB,
      F: () => iB,
      I: () => nB,
      J: () => aB,
      K: () => gB,
      O: () => XB,
      R: () => rB,
      S: () => GB,
      T: () => mB,
      X: () => kB,
      Y: () => vB,
      ab: () => PB,
      e: () => UB,
      eb: () => RB,
      hb: () => WB,
      i: () => OB,
      kb: () => pB,
      l: () => qB,
      m: () => zB,
      p: () => hB,
      q: () => HB,
      r: () => FB,
      u: () => MB,
      x: () => LB,
      y: () => NB
    });
    var TB = ZB(6731),
      JB = ZB(168),
      oB = ZB(4750);
    const GB = "/shader-packs",
      vB = `${GB}/publish`;

    function kB(BB) {
      return `${GB}/${encodeURIComponent(BB)}`
    }
    let cB = null;

    function nB(BB) {
      cB = BB
    }

    function hB() {
      return cB
    }

    function zB() {
      cB = null
    }

    function FB(BB) {
      return BB.playerHasRank("developer") || BB.playerHasRank("admin")
    }
    const NB = ["terrain", "water", "models", "sunShadows", "strict"],
      gB = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function qB(BB, IB) {
      return BB.withFeatures.includes(IB) ? "with" : BB.withoutFeatures.includes(IB) ? "without" : null
    }

    function yB(BB) {
      return null === BB ? "with" : "with" === BB ? "without" : null
    }

    function UB(BB) {
      return "with" === BB ? "only" : null === BB ? "include" : void 0
    }

    function WB(BB, IB) {
      const ZB = qB(BB, IB),
        TB = BB => BB.filter((BB => BB !== IB));
      return {
        withFeatures: null === ZB ? [...BB.withFeatures, IB] : TB(BB.withFeatures),
        withoutFeatures: "with" === ZB ? [...BB.withoutFeatures, IB] : TB(BB.withoutFeatures)
      }
    }
    const dB = "section",
      CB = "sort",
      QB = "filters",
      sB = "q",
      wB = "banned",
      OB = "popular",
      YB = "strict";

    function iB(BB) {
      var IB, ZB, JB;
      const GB = BB.get(dB),
        vB = (null !== (IB = BB.get(QB)) && void 0 !== IB ? IB : YB).split(","),
        kB = BB.get(wB);
      return {
        section: "favourites" === GB || "mine" === GB ? GB : "explore",
        sort: null !== (ZB = TB.y.find((IB => IB === BB.get(CB)))) && void 0 !== ZB ? ZB : OB,
        withFeatures: NB.filter((BB => vB.includes(BB) && !vB.includes(`-${BB}`))),
        withoutFeatures: NB.filter((BB => vB.includes(`-${BB}`))),
        searchQuery: (null === (JB = BB.get(sB)) || void 0 === JB ? void 0 : JB.slice(0, TB.K)) || null,
        pageNumber: (0, oB.e)(BB.get(oB.b)),
        banned: "only" === kB ? "with" : "include" === kB ? null : "without"
      }
    }

    function pB(BB, IB) {
      var ZB;
      const TB = jB(IB);
      (0, oB.i)(BB, dB, "explore" === IB.section ? null : IB.section), (0, oB.i)(BB, CB, IB.sort === OB ? null : IB.sort), (0, oB.i)(BB, QB, TB === YB ? null : TB), (0, oB.i)(BB, sB, IB.searchQuery), (0, oB.i)(BB, wB, null !== (ZB = UB(IB.banned)) && void 0 !== ZB ? ZB : null), (0, oB.m)(BB, IB.pageNumber)
    }

    function aB(BB) {
      const IB = new URLSearchParams;
      return pB(IB, {
        section: "explore",
        sort: OB,
        withFeatures: "strict" === BB ? [BB] : [BB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${GB}?${IB.toString()}`
    }

    function HB(BB) {
      return jB(BB) === YB
    }

    function MB(BB) {
      return null !== BB.searchQuery || "with" === BB.banned || jB(BB) !== YB
    }

    function jB(BB) {
      return NB.flatMap((IB => {
        const ZB = qB(BB, IB);
        return "with" === ZB ? [IB] : "without" === ZB ? [`-${IB}`] : []
      })).join(",")
    }
    const PB = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      RB = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function rB(BB) {
      return Math.round(100 * Math.max(0, 1 - 1 / BB))
    }

    function mB(BB, IB, ZB, JB) {
      const oB = [];
      BB.isBanned && oB.push({
        tone: "warning",
        text: JB("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: GB
      } = BB;
      if (null === BB.brokenError || GB && !GB.error || oB.push({
          tone: "warning",
          text: JB("shaderPackListing:ownerBroken"),
          detail: BB.brokenError
        }), null !== GB && void 0 !== GB && GB.error) oB.push({
        tone: "warning",
        text: JB(IB ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, TB.j)(GB.error) ? null : GB.error
      });
      else if (GB) {
        const BB = null === GB.renderNotBefore ? 0 : GB.renderNotBefore - ZB,
          TB = String(Math.ceil(BB / 6e4)),
          vB = JB(IB ? BB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : BB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: TB
          });
        oB.push({
          tone: "info",
          text: vB,
          detail: null
        })
      }
      return BB.listed || oB.push({
        tone: "info",
        text: JB("shaderPackListing:ownerUnlisted"),
        detail: null
      }), oB
    }

    function XB(BB) {
      return Math.max(1, Math.round(BB / 1024))
    }

    function LB(BB, IB, ZB) {
      return BB instanceof JB.d && BB.errorMessageForUser ? BB.errorMessageForUser : IB(ZB)
    }
  },
  6741: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(63),
      JB = ZB(36);

    function oB(BB, IB) {
      var ZB;
      const [oB, GB] = (0, TB.useState)(null !== (ZB = JB.m.getItem(BB)) && void 0 !== ZB ? ZB : IB);
      return [oB, IB => {
        JB.m.setItem(BB, IB), GB(IB)
      }]
    }
  },
  6808: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      i: () => oB
    });
    var TB = ZB(36);
    const JB = "shaderPack";
    async function oB() {
      var BB;
      let IB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await TB.i.getItem(JB, IB)) && void 0 !== BB ? BB : null
    }
  },
  6731: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => vB,
      B: () => GB,
      F: () => TB,
      G: () => zB,
      K: () => nB,
      O: () => dB,
      P: () => hB,
      R: () => cB,
      d: () => NB,
      f: () => qB,
      h: () => gB,
      i: () => FB,
      j: () => WB,
      n: () => QB,
      o: () => kB,
      r: () => JB,
      u: () => CB,
      y: () => oB
    });
    const TB = ["forest", "desert", "water", "night", "cave"];
    const JB = {
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
      oB = ["popular", "updated", "newest"],
      GB = 3,
      vB = 32,
      kB = 300;

    function cB(BB, IB) {
      return BB.slice(0, IB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const nB = 64,
      hB = 512,
      zB = 18e5;

    function FB(BB) {
      const IB = BB,
        ZB = null === IB || void 0 === IB ? void 0 : IB.files;
      return "number" === typeof(null === IB || void 0 === IB ? void 0 : IB.apiVersion) && "string" === typeof IB.name && (null === IB.author || "string" === typeof IB.author) && (void 0 === IB.keepCircleShadows || "boolean" === typeof IB.keepCircleShadows) && "object" === typeof ZB && null !== ZB && Object.values(ZB).every((BB => "string" === typeof BB))
    }
    const NB = "Bloxdhub",
      gB = "https://bloxdhub.com/shaders";

    function qB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const yB = "Screenshot generation failed.",
      UB = "Its screenshots couldn't be generated:";

    function WB(BB) {
      var IB;
      return BB === yB || null !== (IB = null === BB || void 0 === BB ? void 0 : BB.startsWith(UB)) && void 0 !== IB && IB
    }

    function dB(BB, IB) {
      return `shaderPacks/${BB}/${IB}.json`
    }

    function CB(BB, IB, ZB, TB) {
      return null === IB.renderId ? QB(BB, IB.baselineVersion, ZB, TB) : `${BB}/${function(BB,IB,ZB,TB){return`shaderPacks/${BB}/${IB}/${ZB}-${TB}.webp`}(IB.packId,IB.renderId,ZB,TB)}`
    }

    function QB(BB, IB, ZB, TB) {
      return `${BB}/${function(BB,IB,ZB){return`shaderPacks/baseline/${BB}/${IB}-${ZB}.webp`}(IB,ZB,TB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);