export const id = 111;
export const ids = [111, 402];
export const modules = {
  5053: (BB, jB, zB) => {
    var QB = zB(5058);

    function nB() {}

    function dB() {}
    dB.resetWarningCache = nB, BB.exports = function() {
      function BB(BB, jB, zB, nB, dB, IB) {
        if (IB !== QB) {
          var NB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw NB.name = "Invariant Violation", NB
        }
      }

      function jB() {
        return BB
      }
      BB.isRequired = BB;
      var zB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: jB,
        element: BB,
        elementType: BB,
        instanceOf: jB,
        node: BB,
        objectOf: jB,
        oneOf: jB,
        oneOfType: jB,
        shape: jB,
        exact: jB,
        checkPropTypes: dB,
        resetWarningCache: nB
      };
      return zB.PropTypes = zB, zB
    }
  },
  5045: (BB, jB, zB) => {
    BB.exports = zB(5053)()
  },
  5058: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6555: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => aB
    });
    var QB = zB(1543),
      nB = zB(1478),
      dB = zB(1240),
      IB = zB(6562),
      NB = zB(6537),
      uB = zB(6515),
      UB = zB(1148);

    function aB() {
      const {
        t: BB
      } = (0, dB.D)(), jB = (0, QB.useNavigatePreserveSearch)();
      return (0, NB.d)(), (0, UB.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, UB.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, UB.jsx)(nB.c, {
            onClick: () => {
              jB(uB.R)
            },
            children: BB("shaderPackListing:backToPacks")
          })
        }), (0, UB.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: BB("shaderPackListing:publishTitle")
        }), (0, UB.jsx)(IB.ShaderPackPublishForm, {
          existing: null,
          onPublished: BB => {
            jB((0, uB.W)(BB.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6537: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => rB,
      g: () => sB,
      k: () => pB,
      m: () => JB
    });
    var QB = zB(62),
      nB = zB(6523),
      dB = zB(1532),
      IB = zB(6515),
      NB = zB(6539),
      uB = zB(1169);
    const UB = "shaderPackListingView",
      aB = "shaderPackListingFilterOpen";

    function pB() {
      var BB;
      const [jB, zB] = (0, NB.e)(UB, nB.H[0]);
      return [null !== (BB = nB.H.find((BB => BB === jB))) && void 0 !== BB ? BB : nB.H[0], zB]
    }

    function rB() {
      (0, QB.useEffect)((() => () => {
        window.location.pathname.startsWith(IB.R) || (0, IB.m)()
      }), [])
    }

    function sB() {
      return (0, NB.e)(aB, !1)
    }

    function JB() {
      const {
        userContext: BB,
        isUserContextUpdating: jB
      } = (0, uB.d)(), [zB, nB] = (0, QB.useState)(null), IB = (0, QB.useRef)(new Set);

      function NB(BB, jB) {
        nB((zB => {
          const QB = new Set(zB);
          return jB ? QB.add(BB) : QB.delete(BB), QB
        }))
      }
      return (0, QB.useEffect)((() => {
        if (jB) return;
        let zB = !1;
        return dB.b.getFavouriteShaderPacks(BB).then((BB => {
          zB || nB(new Set(BB))
        })).catch((BB => {
          console.error("Failed to get favourite shader packs", BB), zB || nB(new Set)
        })), () => {
          zB = !0
        }
      }), [BB, jB]), {
        isFavourite: BB => null === zB ? null : zB.has(BB),
        toggle: function(jB) {
          if (null === zB || IB.current.has(jB)) return;
          IB.current.add(jB);
          const QB = !zB.has(jB);
          NB(jB, QB), (QB ? dB.b.favouriteShaderPack(BB, jB) : dB.b.unfavouriteShaderPack(BB, jB)).catch((BB => {
            console.error("Failed to change a favourite shader pack", BB), NB(jB, !QB)
          })).finally((() => {
            IB.current.delete(jB)
          }))
        }
      }
    }
  },
  6515: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => JB,
      B: () => kB,
      D: () => fB,
      H: () => aB,
      J: () => HB,
      L: () => mB,
      N: () => AB,
      Q: () => XB,
      R: () => IB,
      S: () => ZB,
      W: () => uB,
      X: () => NB,
      Z: () => VB,
      ab: () => hB,
      e: () => GB,
      eb: () => LB,
      gb: () => oB,
      i: () => iB,
      j: () => yB,
      m: () => rB,
      p: () => pB,
      s: () => DB,
      u: () => sB,
      v: () => FB,
      z: () => TB
    });
    var QB = zB(6523),
      nB = zB(174),
      dB = zB(4673);
    const IB = "/shader-packs",
      NB = `${IB}/publish`;

    function uB(BB) {
      return `${IB}/${encodeURIComponent(BB)}`
    }
    let UB = null;

    function aB(BB) {
      UB = BB
    }

    function pB() {
      return UB
    }

    function rB() {
      UB = null
    }

    function sB(BB) {
      return BB.playerHasRank("developer") || BB.playerHasRank("admin")
    }
    const JB = ["terrain", "water", "models", "sunShadows", "strict"],
      mB = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function yB(BB, jB) {
      return BB.withFeatures.includes(jB) ? "with" : BB.withoutFeatures.includes(jB) ? "without" : null
    }

    function kB(BB) {
      return null === BB ? "with" : "with" === BB ? "without" : null
    }

    function GB(BB) {
      return "with" === BB ? "only" : null === BB ? "include" : void 0
    }

    function LB(BB, jB) {
      const zB = yB(BB, jB),
        QB = BB => BB.filter((BB => BB !== jB));
      return {
        withFeatures: null === zB ? [...BB.withFeatures, jB] : QB(BB.withFeatures),
        withoutFeatures: "with" === zB ? [...BB.withoutFeatures, jB] : QB(BB.withoutFeatures)
      }
    }
    const gB = "section",
      tB = "sort",
      SB = "filters",
      MB = "q",
      EB = "banned",
      iB = "popular",
      qB = "strict";

    function fB(BB) {
      var jB, zB, nB;
      const IB = BB.get(gB),
        NB = (null !== (jB = BB.get(SB)) && void 0 !== jB ? jB : qB).split(","),
        uB = BB.get(EB);
      return {
        section: "favourites" === IB || "mine" === IB ? IB : "explore",
        sort: null !== (zB = QB.y.find((jB => jB === BB.get(tB)))) && void 0 !== zB ? zB : iB,
        withFeatures: JB.filter((BB => NB.includes(BB) && !NB.includes(`-${BB}`))),
        withoutFeatures: JB.filter((BB => NB.includes(`-${BB}`))),
        searchQuery: (null === (nB = BB.get(MB)) || void 0 === nB ? void 0 : nB.slice(0, QB.O)) || null,
        pageNumber: (0, dB.d)(BB.get(dB.c)),
        banned: "only" === uB ? "with" : "include" === uB ? null : "without"
      }
    }

    function oB(BB, jB) {
      var zB;
      const QB = YB(jB);
      (0, dB.f)(BB, gB, "explore" === jB.section ? null : jB.section), (0, dB.f)(BB, tB, jB.sort === iB ? null : jB.sort), (0, dB.f)(BB, SB, QB === qB ? null : QB), (0, dB.f)(BB, MB, jB.searchQuery), (0, dB.f)(BB, EB, null !== (zB = GB(jB.banned)) && void 0 !== zB ? zB : null), (0, dB.i)(BB, jB.pageNumber)
    }

    function HB(BB) {
      const jB = new URLSearchParams;
      return oB(jB, {
        section: "explore",
        sort: iB,
        withFeatures: "strict" === BB ? [BB] : [BB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${IB}?${jB.toString()}`
    }

    function DB(BB) {
      return YB(BB) === qB
    }

    function FB(BB) {
      return null !== BB.searchQuery || "with" === BB.banned || YB(BB) !== qB
    }

    function YB(BB) {
      return JB.flatMap((jB => {
        const zB = yB(BB, jB);
        return "with" === zB ? [jB] : "without" === zB ? [`-${jB}`] : []
      })).join(",")
    }
    const VB = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      hB = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function XB(BB) {
      return Math.round(100 * Math.max(0, 1 - 1 / BB))
    }

    function ZB(BB, jB, zB, nB) {
      const dB = [];
      BB.isBanned && dB.push({
        tone: "warning",
        text: nB("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: IB
      } = BB;
      if (null === BB.brokenError || IB && !IB.error || dB.push({
          tone: "warning",
          text: nB("shaderPackListing:ownerBroken"),
          detail: BB.brokenError
        }), null !== IB && void 0 !== IB && IB.error) dB.push({
        tone: "warning",
        text: nB(jB ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, QB.m)(IB.error) ? null : IB.error
      });
      else if (IB) {
        const BB = null === IB.renderNotBefore ? 0 : IB.renderNotBefore - zB,
          QB = String(Math.ceil(BB / 6e4)),
          NB = nB(jB ? BB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : BB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: QB
          });
        dB.push({
          tone: "info",
          text: NB,
          detail: null
        })
      }
      return BB.listed || dB.push({
        tone: "info",
        text: nB("shaderPackListing:ownerUnlisted"),
        detail: null
      }), dB
    }

    function AB(BB) {
      return Math.max(1, Math.round(BB / 1024))
    }

    function TB(BB, jB, zB) {
      return BB instanceof nB.c && BB.errorMessageForUser ? BB.errorMessageForUser : jB(zB)
    }
  },
  6539: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(62),
      nB = zB(41);

    function dB(BB, jB) {
      var zB;
      const [dB, IB] = (0, QB.useState)(null !== (zB = nB.j.getItem(BB)) && void 0 !== zB ? zB : jB);
      return [dB, jB => {
        nB.j.setItem(BB, jB), IB(jB)
      }]
    }
  },
  6606: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      h: () => dB
    });
    var QB = zB(41);
    const nB = "shaderPack";
    async function dB() {
      var BB;
      let jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await QB.g.getItem(nB, jB)) && void 0 !== BB ? BB : null
    }
  },
  6523: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => NB,
      D: () => IB,
      H: () => QB,
      L: () => rB,
      O: () => aB,
      P: () => gB,
      T: () => pB,
      U: () => UB,
      d: () => JB,
      f: () => yB,
      h: () => mB,
      l: () => sB,
      m: () => LB,
      n: () => SB,
      o: () => uB,
      s: () => nB,
      u: () => tB,
      y: () => dB
    });
    const QB = ["forest", "desert", "water", "night", "cave"];
    const nB = {
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
      dB = ["popular", "updated", "newest"],
      IB = 3,
      NB = 32,
      uB = 300;

    function UB(BB, jB) {
      return BB.slice(0, jB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const aB = 64,
      pB = 512,
      rB = 18e5;

    function sB(BB) {
      const jB = BB,
        zB = null === jB || void 0 === jB ? void 0 : jB.files;
      return "number" === typeof(null === jB || void 0 === jB ? void 0 : jB.apiVersion) && "string" === typeof jB.name && (null === jB.author || "string" === typeof jB.author) && (void 0 === jB.keepCircleShadows || "boolean" === typeof jB.keepCircleShadows) && "object" === typeof zB && null !== zB && Object.values(zB).every((BB => "string" === typeof BB))
    }
    const JB = "Bloxdhub",
      mB = "https://bloxdhub.com/shaders";

    function yB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const kB = "Screenshot generation failed.",
      GB = "Its screenshots couldn't be generated:";

    function LB(BB) {
      var jB;
      return BB === kB || null !== (jB = null === BB || void 0 === BB ? void 0 : BB.startsWith(GB)) && void 0 !== jB && jB
    }

    function gB(BB, jB) {
      return `shaderPacks/${BB}/${jB}.json`
    }

    function tB(BB, jB, zB, QB) {
      return null === jB.renderId ? SB(BB, jB.baselineVersion, zB, QB) : `${BB}/${function(BB,jB,zB,QB){return`shaderPacks/${BB}/${jB}/${zB}-${QB}.webp`}(jB.packId,jB.renderId,zB,QB)}`
    }

    function SB(BB, jB, zB, QB) {
      return `${BB}/${function(BB,jB,zB){return`shaderPacks/baseline/${BB}/${jB}-${zB}.webp`}(jB,zB,QB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);