export const id = 122;
export const ids = [122, 706];
export const modules = {
  5460: (BB, OB, GB) => {
    var YB = GB(5467);

    function DB() {}

    function QB() {}
    QB.resetWarningCache = DB, BB.exports = function() {
      function BB(BB, OB, GB, DB, QB, oB) {
        if (oB !== YB) {
          var jB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw jB.name = "Invariant Violation", jB
        }
      }

      function OB() {
        return BB
      }
      BB.isRequired = BB;
      var GB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: OB,
        element: BB,
        elementType: BB,
        instanceOf: OB,
        node: BB,
        objectOf: OB,
        oneOf: OB,
        oneOfType: OB,
        shape: OB,
        exact: OB,
        checkPropTypes: QB,
        resetWarningCache: DB
      };
      return GB.PropTypes = GB, GB
    }
  },
  5456: (BB, OB, GB) => {
    BB.exports = GB(5460)()
  },
  5467: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7132: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => MB
    });
    var YB = GB(1560),
      DB = GB(1485),
      QB = GB(1175),
      oB = GB(7139),
      jB = GB(7116),
      yB = GB(7099),
      JB = GB(1282);

    function MB() {
      const {
        t: BB
      } = (0, QB.H)(), OB = (0, YB.useNavigatePreserveSearch)();
      return (0, jB.c)(), (0, JB.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, JB.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, JB.jsx)(DB.c, {
            onClick: () => {
              OB(yB.V)
            },
            children: BB("shaderPackListing:backToPacks")
          })
        }), (0, JB.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: BB("shaderPackListing:publishTitle")
        }), (0, JB.jsx)(oB.ShaderPackPublishForm, {
          existing: null,
          onPublished: BB => {
            OB((0, yB.$)(BB.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  7116: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => zB,
      e: () => lB,
      i: () => PB,
      k: () => pB
    });
    var YB = GB(56),
      DB = GB(7107),
      QB = GB(1540),
      oB = GB(7099),
      jB = GB(7122),
      yB = GB(1112);
    const JB = "shaderPackListingView",
      MB = "shaderPackListingFilterOpen";

    function PB() {
      var BB;
      const [OB, GB] = (0, jB.e)(JB, DB.F[0]);
      return [null !== (BB = DB.F.find((BB => BB === OB))) && void 0 !== BB ? BB : DB.F[0], GB]
    }

    function zB() {
      (0, YB.useEffect)((() => () => {
        window.location.pathname.startsWith(oB.V) || (0, oB.g)()
      }), [])
    }

    function lB() {
      return (0, jB.e)(MB, !1)
    }

    function pB() {
      const {
        userContext: BB,
        isUserContextUpdating: OB
      } = (0, yB.d)(), [GB, DB] = (0, YB.useState)(null), oB = (0, YB.useRef)(new Set);

      function jB(BB, OB) {
        DB((GB => {
          const YB = new Set(GB);
          return OB ? YB.add(BB) : YB.delete(BB), YB
        }))
      }
      return (0, YB.useEffect)((() => {
        if (OB) return;
        let GB = !1;
        return QB.b.getFavouriteShaderPacks(BB).then((BB => {
          GB || DB(new Set(BB))
        })).catch((BB => {
          console.error("Failed to get favourite shader packs", BB), GB || DB(new Set)
        })), () => {
          GB = !0
        }
      }), [BB, OB]), {
        isFavourite: BB => null === GB ? null : GB.has(BB),
        toggle: function(OB) {
          if (null === GB || oB.current.has(OB)) return;
          oB.current.add(OB);
          const YB = !GB.has(OB);
          jB(OB, YB), (YB ? QB.b.favouriteShaderPack(BB, OB) : QB.b.unfavouriteShaderPack(BB, OB)).catch((BB => {
            console.error("Failed to change a favourite shader pack", BB), jB(OB, !YB)
          })).finally((() => {
            oB.current.delete(OB)
          }))
        }
      }
    }
  },
  7099: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => yB,
      C: () => dB,
      E: () => MB,
      H: () => uB,
      L: () => qB,
      P: () => XB,
      R: () => gB,
      V: () => oB,
      X: () => rB,
      ab: () => jB,
      b: () => RB,
      c: () => fB,
      eb: () => iB,
      f: () => ZB,
      g: () => zB,
      hb: () => LB,
      ib: () => WB,
      j: () => PB,
      lb: () => KB,
      n: () => mB,
      p: () => lB,
      q: () => IB,
      u: () => wB,
      x: () => pB,
      y: () => NB
    });
    var YB = GB(7107),
      DB = GB(162),
      QB = GB(4975);
    const oB = "/shader-packs",
      jB = `${oB}/publish`;

    function yB(BB) {
      return `${oB}/${encodeURIComponent(BB)}`
    }
    let JB = null;

    function MB(BB) {
      JB = BB
    }

    function PB() {
      return JB
    }

    function zB() {
      JB = null
    }

    function lB(BB) {
      return BB.playerHasRank("developer") || BB.playerHasRank("admin")
    }
    const pB = ["terrain", "water", "models", "sunShadows", "strict"],
      qB = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function ZB(BB, OB) {
      return BB.withFeatures.includes(OB) ? "with" : BB.withoutFeatures.includes(OB) ? "without" : null
    }

    function NB(BB) {
      return null === BB ? "with" : "with" === BB ? "without" : null
    }

    function RB(BB) {
      return "with" === BB ? "only" : null === BB ? "include" : void 0
    }

    function WB(BB, OB) {
      const GB = ZB(BB, OB),
        YB = BB => BB.filter((BB => BB !== OB));
      return {
        withFeatures: null === GB ? [...BB.withFeatures, OB] : YB(BB.withFeatures),
        withoutFeatures: "with" === GB ? [...BB.withoutFeatures, OB] : YB(BB.withoutFeatures)
      }
    }
    const AB = "section",
      VB = "sort",
      SB = "filters",
      nB = "q",
      UB = "banned",
      fB = "popular",
      kB = "strict";

    function dB(BB) {
      var OB, GB, DB;
      const oB = BB.get(AB),
        jB = (null !== (OB = BB.get(SB)) && void 0 !== OB ? OB : kB).split(","),
        yB = BB.get(UB);
      return {
        section: "favourites" === oB || "mine" === oB ? oB : "explore",
        sort: null !== (GB = YB.z.find((OB => OB === BB.get(VB)))) && void 0 !== GB ? GB : fB,
        withFeatures: pB.filter((BB => jB.includes(BB) && !jB.includes(`-${BB}`))),
        withoutFeatures: pB.filter((BB => jB.includes(`-${BB}`))),
        searchQuery: (null === (DB = BB.get(nB)) || void 0 === DB ? void 0 : DB.slice(0, YB.M)) || null,
        pageNumber: (0, QB.h)(BB.get(QB.d)),
        banned: "only" === yB ? "with" : "include" === yB ? null : "without"
      }
    }

    function KB(BB, OB) {
      var GB;
      const YB = FB(OB);
      (0, QB.i)(BB, AB, "explore" === OB.section ? null : OB.section), (0, QB.i)(BB, VB, OB.sort === fB ? null : OB.sort), (0, QB.i)(BB, SB, YB === kB ? null : YB), (0, QB.i)(BB, nB, OB.searchQuery), (0, QB.i)(BB, UB, null !== (GB = RB(OB.banned)) && void 0 !== GB ? GB : null), (0, QB.k)(BB, OB.pageNumber)
    }

    function uB(BB) {
      const OB = new URLSearchParams;
      return KB(OB, {
        section: "explore",
        sort: fB,
        withFeatures: "strict" === BB ? [BB] : [BB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${oB}?${OB.toString()}`
    }

    function mB(BB) {
      return FB(BB) === kB
    }

    function IB(BB) {
      return null !== BB.searchQuery || "with" === BB.banned || FB(BB) !== kB
    }

    function FB(BB) {
      return pB.flatMap((OB => {
        const GB = ZB(BB, OB);
        return "with" === GB ? [OB] : "without" === GB ? [`-${OB}`] : []
      })).join(",")
    }
    const iB = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      LB = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function gB(BB) {
      return Math.round(100 * Math.max(0, 1 - 1 / BB))
    }

    function rB(BB, OB, GB, DB) {
      const QB = [];
      BB.isBanned && QB.push({
        tone: "warning",
        text: DB("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: oB
      } = BB;
      if (null === BB.brokenError || oB && !oB.error || QB.push({
          tone: "warning",
          text: DB("shaderPackListing:ownerBroken"),
          detail: BB.brokenError
        }), null !== oB && void 0 !== oB && oB.error) QB.push({
        tone: "warning",
        text: DB(OB ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, YB.n)(oB.error) ? null : oB.error
      });
      else if (oB) {
        const BB = null === oB.renderNotBefore ? 0 : oB.renderNotBefore - GB,
          YB = String(Math.ceil(BB / 6e4)),
          jB = DB(OB ? BB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : BB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: YB
          });
        QB.push({
          tone: "info",
          text: jB,
          detail: null
        })
      }
      return BB.listed || QB.push({
        tone: "info",
        text: DB("shaderPackListing:ownerUnlisted"),
        detail: null
      }), QB
    }

    function XB(BB) {
      return Math.max(1, Math.round(BB / 1024))
    }

    function wB(BB, OB, GB) {
      return BB instanceof DB.d && BB.errorMessageForUser ? BB.errorMessageForUser : OB(GB)
    }
  },
  7122: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    var YB = GB(56),
      DB = GB(31);

    function QB(BB, OB) {
      var GB;
      const [QB, oB] = (0, YB.useState)(null !== (GB = DB.g.getItem(BB)) && void 0 !== GB ? GB : OB);
      return [QB, OB => {
        DB.g.setItem(BB, OB), oB(OB)
      }]
    }
  },
  7198: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      e: () => QB
    });
    var YB = GB(31);
    const DB = "shaderPack";
    async function QB() {
      var BB;
      let OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await YB.d.getItem(DB, OB)) && void 0 !== BB ? BB : null
    }
  },
  7107: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => jB,
      E: () => oB,
      F: () => YB,
      I: () => zB,
      M: () => MB,
      Q: () => AB,
      U: () => PB,
      X: () => JB,
      e: () => pB,
      h: () => ZB,
      i: () => qB,
      l: () => lB,
      n: () => WB,
      q: () => SB,
      r: () => yB,
      t: () => DB,
      x: () => VB,
      z: () => QB
    });
    const YB = ["forest", "desert", "water", "night", "cave"];
    const DB = {
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
      QB = ["popular", "updated", "newest"],
      oB = 3,
      jB = 32,
      yB = 300;

    function JB(BB, OB) {
      return BB.slice(0, OB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const MB = 64,
      PB = 512,
      zB = 18e5;

    function lB(BB) {
      const OB = BB,
        GB = null === OB || void 0 === OB ? void 0 : OB.files;
      return "number" === typeof(null === OB || void 0 === OB ? void 0 : OB.apiVersion) && "string" === typeof OB.name && (null === OB.author || "string" === typeof OB.author) && (void 0 === OB.keepCircleShadows || "boolean" === typeof OB.keepCircleShadows) && "object" === typeof GB && null !== GB && Object.values(GB).every((BB => "string" === typeof BB))
    }
    const pB = "Bloxdhub",
      qB = "https://bloxdhub.com/shaders";

    function ZB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const NB = "Screenshot generation failed.",
      RB = "Its screenshots couldn't be generated:";

    function WB(BB) {
      var OB;
      return BB === NB || null !== (OB = null === BB || void 0 === BB ? void 0 : BB.startsWith(RB)) && void 0 !== OB && OB
    }

    function AB(BB, OB) {
      return `shaderPacks/${BB}/${OB}.json`
    }

    function VB(BB, OB, GB, YB) {
      return null === OB.renderId ? SB(BB, OB.baselineVersion, GB, YB) : `${BB}/${function(BB,OB,GB,YB){return`shaderPacks/${BB}/${OB}/${GB}-${YB}.webp`}(OB.packId,OB.renderId,GB,YB)}`
    }

    function SB(BB, OB, GB, YB) {
      return `${BB}/${function(BB,OB,GB){return`shaderPacks/baseline/${BB}/${OB}-${GB}.webp`}(OB,GB,YB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);