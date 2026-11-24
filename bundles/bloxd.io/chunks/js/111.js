export const id = 111;
export const ids = [111, 402];
export const modules = {
  5068: (TT, UT, mT) => {
    var WT = mT(5072);

    function zT() {}

    function MT() {}
    MT.resetWarningCache = zT, TT.exports = function() {
      function TT(TT, UT, mT, zT, MT, gT) {
        if (gT !== WT) {
          var nT = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw nT.name = "Invariant Violation", nT
        }
      }

      function UT() {
        return TT
      }
      TT.isRequired = TT;
      var mT = {
        array: TT,
        bigint: TT,
        bool: TT,
        func: TT,
        number: TT,
        object: TT,
        string: TT,
        symbol: TT,
        any: TT,
        arrayOf: UT,
        element: TT,
        elementType: TT,
        instanceOf: UT,
        node: TT,
        objectOf: UT,
        oneOf: UT,
        oneOfType: UT,
        shape: UT,
        exact: UT,
        checkPropTypes: MT,
        resetWarningCache: zT
      };
      return mT.PropTypes = mT, mT
    }
  },
  5066: (TT, UT, mT) => {
    TT.exports = mT(5068)()
  },
  5072: TT => {
    TT.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6661: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => jT
    });
    var WT = mT(1633),
      zT = mT(1569),
      MT = mT(1288),
      gT = mT(6668),
      nT = mT(6641),
      HT = mT(6623),
      kT = mT(1188);

    function jT() {
      const {
        t: TT
      } = (0, MT.z)(), UT = (0, WT.useNavigatePreserveSearch)();
      return (0, nT.d)(), (0, kT.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, kT.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, kT.jsx)(zT.d, {
            onClick: () => {
              UT(HT.K)
            },
            children: TT("shaderPackListing:backToPacks")
          })
        }), (0, kT.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: TT("shaderPackListing:publishTitle")
        }), (0, kT.jsx)(gT.ShaderPackPublishForm, {
          existing: null,
          onPublished: TT => {
            UT((0, HT.N)(TT.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6641: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT,
      f: () => pT,
      j: () => lT,
      m: () => BT
    });
    var WT = mT(63),
      zT = mT(6630),
      MT = mT(1613),
      gT = mT(6623),
      nT = mT(6648),
      HT = mT(1225);
    const kT = "shaderPackListingView",
      jT = "shaderPackListingFilterOpen";

    function lT() {
      var TT;
      const [UT, mT] = (0, nT.b)(kT, zT.G[0]);
      return [null !== (TT = zT.G.find((TT => TT === UT))) && void 0 !== TT ? TT : zT.G[0], mT]
    }

    function LT() {
      (0, WT.useEffect)((() => () => {
        window.location.pathname.startsWith(gT.K) || (0, gT.h)()
      }), [])
    }

    function pT() {
      return (0, nT.b)(jT, !1)
    }

    function BT() {
      const {
        userContext: TT,
        isUserContextUpdating: UT
      } = (0, HT.d)(), [mT, zT] = (0, WT.useState)(null), gT = (0, WT.useRef)(new Set);

      function nT(TT, UT) {
        zT((mT => {
          const WT = new Set(mT);
          return UT ? WT.add(TT) : WT.delete(TT), WT
        }))
      }
      return (0, WT.useEffect)((() => {
        if (UT) return;
        let mT = !1;
        return MT.b.getFavouriteShaderPacks(TT).then((TT => {
          mT || zT(new Set(TT))
        })).catch((TT => {
          console.error("Failed to get favourite shader packs", TT), mT || zT(new Set)
        })), () => {
          mT = !0
        }
      }), [TT, UT]), {
        isFavourite: TT => null === mT ? null : mT.has(TT),
        toggle: function(UT) {
          if (null === mT || gT.current.has(UT)) return;
          gT.current.add(UT);
          const WT = !mT.has(UT);
          nT(UT, WT), (WT ? MT.b.favouriteShaderPack(TT, UT) : MT.b.unfavouriteShaderPack(TT, UT)).catch((TT => {
            console.error("Failed to change a favourite shader pack", TT), nT(UT, !WT)
          })).finally((() => {
            gT.current.delete(UT)
          }))
        }
      }
    }
  },
  6623: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => tT,
      C: () => ZT,
      G: () => PT,
      J: () => sT,
      K: () => gT,
      M: () => FT,
      N: () => HT,
      O: () => nT,
      R: () => IT,
      U: () => QT,
      W: () => qT,
      _: () => wT,
      b: () => fT,
      c: () => JT,
      e: () => cT,
      h: () => LT,
      k: () => lT,
      l: () => aT,
      o: () => pT,
      r: () => yT,
      s: () => VT,
      t: () => BT,
      u: () => vT,
      x: () => dT,
      z: () => jT
    });
    var WT = mT(6630),
      zT = mT(166),
      MT = mT(4660);
    const gT = "/shader-packs",
      nT = `${gT}/publish`;

    function HT(TT) {
      return `${gT}/${encodeURIComponent(TT)}`
    }
    let kT = null;

    function jT(TT) {
      kT = TT
    }

    function lT() {
      return kT
    }

    function LT() {
      kT = null
    }

    function pT(TT) {
      return TT.playerHasRank("developer") || TT.playerHasRank("admin")
    }
    const BT = ["terrain", "water", "models", "sunShadows", "strict"],
      ZT = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function cT(TT, UT) {
      return TT.withFeatures.includes(UT) ? "with" : TT.withoutFeatures.includes(UT) ? "without" : null
    }

    function vT(TT) {
      return null === TT ? "with" : "with" === TT ? "without" : null
    }

    function fT(TT) {
      return "with" === TT ? "only" : null === TT ? "include" : void 0
    }

    function qT(TT, UT) {
      const mT = cT(TT, UT),
        WT = TT => TT.filter((TT => TT !== UT));
      return {
        withFeatures: null === mT ? [...TT.withFeatures, UT] : WT(TT.withFeatures),
        withoutFeatures: "with" === mT ? [...TT.withoutFeatures, UT] : WT(TT.withoutFeatures)
      }
    }
    const iT = "section",
      bT = "sort",
      OT = "filters",
      eT = "q",
      YT = "banned",
      JT = "popular",
      xT = "strict";

    function dT(TT) {
      var UT, mT, zT;
      const gT = TT.get(iT),
        nT = (null !== (UT = TT.get(OT)) && void 0 !== UT ? UT : xT).split(","),
        HT = TT.get(YT);
      return {
        section: "favourites" === gT || "mine" === gT ? gT : "explore",
        sort: null !== (mT = WT.z.find((UT => UT === TT.get(bT)))) && void 0 !== mT ? mT : JT,
        withFeatures: BT.filter((TT => nT.includes(TT) && !nT.includes(`-${TT}`))),
        withoutFeatures: BT.filter((TT => nT.includes(`-${TT}`))),
        searchQuery: (null === (zT = TT.get(eT)) || void 0 === zT ? void 0 : zT.slice(0, WT.L)) || null,
        pageNumber: (0, MT.f)(TT.get(MT.d)),
        banned: "only" === HT ? "with" : "include" === HT ? null : "without"
      }
    }

    function wT(TT, UT) {
      var mT;
      const WT = XT(UT);
      (0, MT.j)(TT, iT, "explore" === UT.section ? null : UT.section), (0, MT.j)(TT, bT, UT.sort === JT ? null : UT.sort), (0, MT.j)(TT, OT, WT === xT ? null : WT), (0, MT.j)(TT, eT, UT.searchQuery), (0, MT.j)(TT, YT, null !== (mT = fT(UT.banned)) && void 0 !== mT ? mT : null), (0, MT.k)(TT, UT.pageNumber)
    }

    function tT(TT) {
      const UT = new URLSearchParams;
      return wT(UT, {
        section: "explore",
        sort: JT,
        withFeatures: "strict" === TT ? [TT] : [TT, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${gT}?${UT.toString()}`
    }

    function aT(TT) {
      return XT(TT) === xT
    }

    function yT(TT) {
      return null !== TT.searchQuery || "with" === TT.banned || XT(TT) !== xT
    }

    function XT(TT) {
      return BT.flatMap((UT => {
        const mT = cT(TT, UT);
        return "with" === mT ? [UT] : "without" === mT ? [`-${UT}`] : []
      })).join(",")
    }
    const IT = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      QT = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function sT(TT) {
      return Math.round(100 * Math.max(0, 1 - 1 / TT))
    }

    function FT(TT, UT, mT, zT) {
      const MT = [];
      TT.isBanned && MT.push({
        tone: "warning",
        text: zT("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: gT
      } = TT;
      if (null === TT.brokenError || gT && !gT.error || MT.push({
          tone: "warning",
          text: zT("shaderPackListing:ownerBroken"),
          detail: TT.brokenError
        }), null !== gT && void 0 !== gT && gT.error) MT.push({
        tone: "warning",
        text: zT(UT ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, WT.n)(gT.error) ? null : gT.error
      });
      else if (gT) {
        const TT = null === gT.renderNotBefore ? 0 : gT.renderNotBefore - mT,
          WT = String(Math.ceil(TT / 6e4)),
          nT = zT(UT ? TT > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : TT > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: WT
          });
        MT.push({
          tone: "info",
          text: nT,
          detail: null
        })
      }
      return TT.listed || MT.push({
        tone: "info",
        text: zT("shaderPackListing:ownerUnlisted"),
        detail: null
      }), MT
    }

    function PT(TT) {
      return Math.max(1, Math.round(TT / 1024))
    }

    function VT(TT, UT, mT) {
      return TT instanceof zT.d && TT.errorMessageForUser ? TT.errorMessageForUser : UT(mT)
    }
  },
  6648: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT
    });
    var WT = mT(63),
      zT = mT(44);

    function MT(TT, UT) {
      var mT;
      const [MT, gT] = (0, WT.useState)(null !== (mT = zT.l.getItem(TT)) && void 0 !== mT ? mT : UT);
      return [MT, UT => {
        zT.l.setItem(TT, UT), gT(UT)
      }]
    }
  },
  6723: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => MT
    });
    var WT = mT(44);
    const zT = "shaderPack";
    async function MT() {
      var TT;
      let UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await WT.h.getItem(zT, UT)) && void 0 !== TT ? TT : null
    }
  },
  6630: (TT, UT, mT) => {
    mT.d(UT, {
      C: () => nT,
      F: () => gT,
      G: () => WT,
      K: () => LT,
      L: () => jT,
      O: () => iT,
      S: () => lT,
      T: () => kT,
      e: () => BT,
      h: () => cT,
      i: () => ZT,
      j: () => pT,
      n: () => qT,
      q: () => OT,
      s: () => HT,
      t: () => zT,
      x: () => bT,
      z: () => MT
    });
    const WT = ["forest", "desert", "water", "night", "cave"];
    const zT = {
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
      MT = ["popular", "updated", "newest"],
      gT = 3,
      nT = 32,
      HT = 300;

    function kT(TT, UT) {
      return TT.slice(0, UT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const jT = 64,
      lT = 512,
      LT = 18e5;

    function pT(TT) {
      const UT = TT,
        mT = null === UT || void 0 === UT ? void 0 : UT.files;
      return "number" === typeof(null === UT || void 0 === UT ? void 0 : UT.apiVersion) && "string" === typeof UT.name && (null === UT.author || "string" === typeof UT.author) && (void 0 === UT.keepCircleShadows || "boolean" === typeof UT.keepCircleShadows) && "object" === typeof mT && null !== mT && Object.values(mT).every((TT => "string" === typeof TT))
    }
    const BT = "Bloxdhub",
      ZT = "https://bloxdhub.com/shaders";

    function cT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const vT = "Screenshot generation failed.",
      fT = "Its screenshots couldn't be generated:";

    function qT(TT) {
      var UT;
      return TT === vT || null !== (UT = null === TT || void 0 === TT ? void 0 : TT.startsWith(fT)) && void 0 !== UT && UT
    }

    function iT(TT, UT) {
      return `shaderPacks/${TT}/${UT}.json`
    }

    function bT(TT, UT, mT, WT) {
      return null === UT.renderId ? OT(TT, UT.baselineVersion, mT, WT) : `${TT}/${function(TT,UT,mT,WT){return`shaderPacks/${TT}/${UT}/${mT}-${WT}.webp`}(UT.packId,UT.renderId,mT,WT)}`
    }

    function OT(TT, UT, mT, WT) {
      return `${TT}/${function(TT,UT,mT){return`shaderPacks/baseline/${TT}/${UT}-${mT}.webp`}(UT,mT,WT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);