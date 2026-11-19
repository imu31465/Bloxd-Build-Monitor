export const id = 122;
export const ids = [122];
export const modules = {
  6052: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(1171),
      WT = IT(1083);

    function XT(TT) {
      let {
        item: oT,
        className: IT
      } = TT;
      const {
        t: iT
      } = (0, kT.t)();
      return null === oT.renderId || oT.previewsOutdated ? (0, WT.jsx)("div", {
        className: zT()("ShaderPackPreviewsNotice", IT),
        children: (0, WT.jsx)("span", {
          children: iT(null === oT.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6069: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(6045),
      WT = IT(1171),
      XT = IT(6042),
      BT = IT(1083);

    function FT(TT) {
      let {
        selected: oT,
        onSelect: IT,
        imageUrl: iT
      } = TT;
      const {
        t: FT
      } = (0, WT.t)();
      return (0, BT.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: kT.J.map((TT => {
          const kT = iT(TT);
          return (0, BT.jsxs)("button", {
            type: "button",
            "aria-pressed": TT === oT,
            className: zT()("ShaderPackViewOption", {
              Selected: TT === oT
            }),
            onClick: () => {
              IT(TT)
            },
            children: [null !== kT && (0, BT.jsx)("img", {
              src: kT,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, BT.jsx)("span", {
              className: "SmallTextBold",
              children: FT(XT.jb[TT])
            })]
          }, TT)
        }))
      })
    }
  },
  6059: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => LT,
      e: () => xT,
      g: () => DT,
      i: () => cT
    });
    var iT = IT(46),
      zT = IT(6045),
      kT = IT(1451),
      WT = IT(6042),
      XT = IT(6062),
      BT = IT(1110);
    const FT = "shaderPackListingView",
      ST = "shaderPackListingFilterOpen";

    function DT() {
      var TT;
      const [oT, IT] = (0, XT.c)(FT, zT.J[0]);
      return [null !== (TT = zT.J.find((TT => TT === oT))) && void 0 !== TT ? TT : zT.J[0], IT]
    }

    function LT() {
      (0, iT.useEffect)((() => () => {
        window.location.pathname.startsWith(WT.V) || (0, WT.m)()
      }), [])
    }

    function xT() {
      return (0, XT.c)(ST, !1)
    }

    function cT() {
      const {
        userContext: TT,
        isUserContextUpdating: oT
      } = (0, BT.b)(), [IT, zT] = (0, iT.useState)(null), WT = (0, iT.useRef)(new Set);

      function XT(TT, oT) {
        zT((IT => {
          const iT = new Set(IT);
          return oT ? iT.add(TT) : iT.delete(TT), iT
        }))
      }
      return (0, iT.useEffect)((() => {
        if (oT) return;
        let IT = !1;
        return kT.e.getFavouriteShaderPacks(TT).then((TT => {
          IT || zT(new Set(TT))
        })).catch((TT => {
          console.error("Failed to get favourite shader packs", TT), IT || zT(new Set)
        })), () => {
          IT = !0
        }
      }), [TT, oT]), {
        isFavourite: TT => null === IT ? null : IT.has(TT),
        toggle: function(oT) {
          if (null === IT || WT.current.has(oT)) return;
          WT.current.add(oT);
          const iT = !IT.has(oT);
          XT(oT, iT), (iT ? kT.e.favouriteShaderPack(TT, oT) : kT.e.unfavouriteShaderPack(TT, oT)).catch((TT => {
            console.error("Failed to change a favourite shader pack", TT), XT(oT, !iT)
          })).finally((() => {
            WT.current.delete(oT)
          }))
        }
      }
    }
  },
  6042: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => nT,
      D: () => cT,
      G: () => rT,
      I: () => ET,
      K: () => ST,
      L: () => CT,
      N: () => KT,
      P: () => HT,
      S: () => QT,
      V: () => WT,
      Y: () => OT,
      ab: () => BT,
      d: () => AT,
      db: () => XT,
      f: () => uT,
      fb: () => aT,
      i: () => MT,
      jb: () => YT,
      kb: () => gT,
      m: () => LT,
      mb: () => fT,
      p: () => DT,
      t: () => jT,
      u: () => xT,
      x: () => JT
    });
    var iT = IT(6045),
      zT = IT(159),
      kT = IT(4074);
    const WT = "/shader-packs",
      XT = `${WT}/publish`;

    function BT(TT) {
      return `${WT}/${encodeURIComponent(TT)}`
    }
    let FT = null;

    function ST(TT) {
      FT = TT
    }

    function DT() {
      return FT
    }

    function LT() {
      FT = null
    }

    function xT(TT) {
      return TT.playerHasRank("developer") || TT.playerHasRank("admin")
    }
    const cT = ["terrain", "water", "models", "sunShadows", "strict"],
      KT = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function MT(TT, oT) {
      return TT.withFeatures.includes(oT) ? "with" : TT.withoutFeatures.includes(oT) ? "without" : null
    }

    function rT(TT) {
      return null === TT ? "with" : "with" === TT ? "without" : null
    }

    function AT(TT) {
      return "with" === TT ? "only" : null === TT ? "include" : void 0
    }

    function gT(TT, oT) {
      const IT = MT(TT, oT),
        iT = TT => TT.filter((TT => TT !== oT));
      return {
        withFeatures: null === IT ? [...TT.withFeatures, oT] : iT(TT.withFeatures),
        withoutFeatures: "with" === IT ? [...TT.withoutFeatures, oT] : iT(TT.withoutFeatures)
      }
    }
    const hT = "section",
      wT = "sort",
      mT = "filters",
      eT = "q",
      RT = "banned",
      uT = "popular",
      vT = "strict";

    function ET(TT) {
      var oT, IT, zT;
      const WT = TT.get(hT),
        XT = (null !== (oT = TT.get(mT)) && void 0 !== oT ? oT : vT).split(","),
        BT = TT.get(RT);
      return {
        section: "favourites" === WT || "mine" === WT ? WT : "explore",
        sort: null !== (IT = iT.A.find((oT => oT === TT.get(wT)))) && void 0 !== IT ? IT : uT,
        withFeatures: cT.filter((TT => XT.includes(TT) && !XT.includes(`-${TT}`))),
        withoutFeatures: cT.filter((TT => XT.includes(`-${TT}`))),
        searchQuery: (null === (zT = TT.get(eT)) || void 0 === zT ? void 0 : zT.slice(0, iT.Q)) || null,
        pageNumber: (0, kT.i)(TT.get(kT.e)),
        banned: "only" === BT ? "with" : "include" === BT ? null : "without"
      }
    }

    function fT(TT, oT) {
      var IT;
      const iT = UT(oT);
      (0, kT.l)(TT, hT, "explore" === oT.section ? null : oT.section), (0, kT.l)(TT, wT, oT.sort === uT ? null : oT.sort), (0, kT.l)(TT, mT, iT === vT ? null : iT), (0, kT.l)(TT, eT, oT.searchQuery), (0, kT.l)(TT, RT, null !== (IT = AT(oT.banned)) && void 0 !== IT ? IT : null), (0, kT.n)(TT, oT.pageNumber)
    }

    function CT(TT) {
      const oT = new URLSearchParams;
      return fT(oT, {
        section: "explore",
        sort: uT,
        withFeatures: "strict" === TT ? [TT] : [TT, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${WT}?${oT.toString()}`
    }

    function jT(TT) {
      return UT(TT) === vT
    }

    function JT(TT) {
      return null !== TT.searchQuery || "with" === TT.banned || UT(TT) !== vT
    }

    function UT(TT) {
      return cT.flatMap((oT => {
        const IT = MT(TT, oT);
        return "with" === IT ? [oT] : "without" === IT ? [`-${oT}`] : []
      })).join(",")
    }
    const aT = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      YT = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function QT(TT) {
      return Math.round(100 * Math.max(0, 1 - 1 / TT))
    }

    function OT(TT, oT, IT, zT) {
      const kT = [];
      TT.isBanned && kT.push({
        tone: "warning",
        text: zT("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: WT
      } = TT;
      if (null === TT.brokenError || WT && !WT.error || kT.push({
          tone: "warning",
          text: zT("shaderPackListing:ownerBroken"),
          detail: TT.brokenError
        }), null !== WT && void 0 !== WT && WT.error) kT.push({
        tone: "warning",
        text: zT(oT ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, iT.l)(WT.error) ? null : WT.error
      });
      else if (WT) {
        const TT = null === WT.renderNotBefore ? 0 : WT.renderNotBefore - IT,
          iT = String(Math.ceil(TT / 6e4)),
          XT = zT(oT ? TT > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : TT > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: iT
          });
        kT.push({
          tone: "info",
          text: XT,
          detail: null
        })
      }
      return TT.listed || kT.push({
        tone: "info",
        text: zT("shaderPackListing:ownerUnlisted"),
        detail: null
      }), kT
    }

    function HT(TT) {
      return Math.max(1, Math.round(TT / 1024))
    }

    function nT(TT, oT, IT) {
      return TT instanceof zT.d && TT.errorMessageForUser ? TT.errorMessageForUser : oT(IT)
    }
  },
  6062: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(46),
      zT = IT(26);

    function kT(TT, oT) {
      var IT;
      const [kT, WT] = (0, iT.useState)(null !== (IT = zT.e.getItem(TT)) && void 0 !== IT ? IT : oT);
      return [kT, oT => {
        zT.e.setItem(TT, oT), WT(oT)
      }]
    }
  },
  6045: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => kT,
      E: () => XT,
      I: () => WT,
      J: () => iT,
      N: () => LT,
      Q: () => ST,
      T: () => gT,
      U: () => DT,
      Y: () => FT,
      c: () => xT,
      g: () => KT,
      i: () => cT,
      l: () => AT,
      o: () => wT,
      s: () => BT,
      v: () => zT,
      y: () => hT
    });
    const iT = ["forest", "desert", "water", "night", "cave"];
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
      kT = ["popular", "updated", "newest"],
      WT = 3,
      XT = 32,
      BT = 300;

    function FT(TT, oT) {
      return TT.slice(0, oT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const ST = 64,
      DT = 512,
      LT = 18e5;
    const xT = "Bloxdhub",
      cT = "https://bloxdhub.com/shaders";

    function KT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const MT = "Screenshot generation failed.",
      rT = "Its screenshots couldn't be generated:";

    function AT(TT) {
      var oT;
      return TT === MT || null !== (oT = null === TT || void 0 === TT ? void 0 : TT.startsWith(rT)) && void 0 !== oT && oT
    }

    function gT(TT, oT) {
      return `shaderPacks/${TT}/${oT}.json`
    }

    function hT(TT, oT, IT, iT) {
      return null === oT.renderId ? wT(TT, oT.baselineVersion, IT, iT) : `${TT}/${function(TT,oT,IT,iT){return`shaderPacks/${TT}/${oT}/${IT}-${iT}.webp`}(oT.packId,oT.renderId,IT,iT)}`
    }

    function wT(TT, oT, IT, iT) {
      return `${TT}/${function(TT,oT,IT){return`shaderPacks/baseline/${TT}/${oT}-${IT}.webp`}(oT,IT,iT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);