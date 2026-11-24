export const id = 130;
export const ids = [130];
export const modules = {
  6633: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1288),
      gT = mT(1188);

    function nT(TT) {
      let {
        item: UT,
        className: mT
      } = TT;
      const {
        t: WT
      } = (0, MT.z)();
      return null === UT.renderId || UT.previewsOutdated ? (0, gT.jsx)("div", {
        className: zT()("ShaderPackPreviewsNotice", mT),
        children: (0, gT.jsx)("span", {
          children: WT(null === UT.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6654: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => kT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(6630),
      gT = mT(1288),
      nT = mT(6623),
      HT = mT(1188);

    function kT(TT) {
      let {
        selected: UT,
        onSelect: mT,
        imageUrl: WT
      } = TT;
      const {
        t: kT
      } = (0, gT.z)();
      return (0, HT.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: MT.G.map((TT => {
          const MT = WT(TT);
          return (0, HT.jsxs)("button", {
            type: "button",
            "aria-pressed": TT === UT,
            className: zT()("ShaderPackViewOption", {
              Selected: TT === UT
            }),
            onClick: () => {
              mT(TT)
            },
            children: [null !== MT && (0, HT.jsx)("img", {
              src: MT,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, HT.jsx)("span", {
              className: "SmallTextBold",
              children: kT(nT.U[TT])
            })]
          }, TT)
        }))
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