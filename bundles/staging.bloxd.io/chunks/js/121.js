export const id = 121;
export const ids = [121];
export const modules = {
  6555: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(1195),
      OT = cT(1099);

    function yT(TT) {
      let {
        item: kT,
        className: cT
      } = TT;
      const {
        t: lT
      } = (0, KT.B)();
      return null === kT.renderId || kT.previewsOutdated ? (0, OT.jsx)("div", {
        className: MT()("ShaderPackPreviewsNotice", cT),
        children: (0, OT.jsx)("span", {
          children: lT(null === kT.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6567: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(6550),
      OT = cT(1195),
      yT = cT(6547),
      fT = cT(1099);

    function xT(TT) {
      let {
        selected: kT,
        onSelect: cT,
        imageUrl: lT
      } = TT;
      const {
        t: xT
      } = (0, OT.B)();
      return (0, fT.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: KT.z.map((TT => {
          const KT = lT(TT);
          return (0, fT.jsxs)("button", {
            type: "button",
            "aria-pressed": TT === kT,
            className: MT()("ShaderPackViewOption", {
              Selected: TT === kT
            }),
            onClick: () => {
              cT(TT)
            },
            children: [null !== KT && (0, fT.jsx)("img", {
              src: KT,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, fT.jsx)("span", {
              className: "SmallTextBold",
              children: xT(yT.db[TT])
            })]
          }, TT)
        }))
      })
    }
  },
  6557: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT,
      f: () => jT,
      g: () => AT,
      j: () => vT
    });
    var lT = cT(71),
      MT = cT(6550),
      KT = cT(1518),
      OT = cT(6547),
      yT = cT(6563),
      fT = cT(1130);
    const xT = "shaderPackListingView",
      IT = "shaderPackListingFilterOpen";

    function AT() {
      var TT;
      const [kT, cT] = (0, yT.e)(xT, MT.z[0]);
      return [null !== (TT = MT.z.find((TT => TT === kT))) && void 0 !== TT ? TT : MT.z[0], cT]
    }

    function CT() {
      (0, lT.useEffect)((() => () => {
        window.location.pathname.startsWith(OT.Q) || (0, OT.k)()
      }), [])
    }

    function jT() {
      return (0, yT.e)(IT, !1)
    }

    function vT() {
      const {
        userContext: TT,
        isUserContextUpdating: kT
      } = (0, fT.b)(), [cT, MT] = (0, lT.useState)(null), OT = (0, lT.useRef)(new Set);

      function yT(TT, kT) {
        MT((cT => {
          const lT = new Set(cT);
          return kT ? lT.add(TT) : lT.delete(TT), lT
        }))
      }
      return (0, lT.useEffect)((() => {
        if (kT) return;
        let cT = !1;
        return KT.d.getFavouriteShaderPacks(TT).then((TT => {
          cT || MT(new Set(TT))
        })).catch((TT => {
          console.error("Failed to get favourite shader packs", TT), cT || MT(new Set)
        })), () => {
          cT = !0
        }
      }), [TT, kT]), {
        isFavourite: TT => null === cT ? null : cT.has(TT),
        toggle: function(kT) {
          if (null === cT || OT.current.has(kT)) return;
          OT.current.add(kT);
          const lT = !cT.has(kT);
          yT(kT, lT), (lT ? KT.d.favouriteShaderPack(TT, kT) : KT.d.unfavouriteShaderPack(TT, kT)).catch((TT => {
            console.error("Failed to change a favourite shader pack", TT), yT(kT, !lT)
          })).finally((() => {
            OT.current.delete(kT)
          }))
        }
      }
    }
  },
  6547: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => IT,
      D: () => JT,
      G: () => tT,
      K: () => uT,
      O: () => ET,
      Q: () => OT,
      R: () => ZT,
      V: () => fT,
      Y: () => yT,
      ab: () => GT,
      b: () => QT,
      db: () => VT,
      f: () => wT,
      hb: () => ST,
      j: () => hT,
      k: () => CT,
      kb: () => zT,
      l: () => AT,
      n: () => oT,
      r: () => jT,
      t: () => HT,
      v: () => XT,
      w: () => vT,
      y: () => NT,
      z: () => bT
    });
    var lT = cT(6550),
      MT = cT(184),
      KT = cT(4543);
    const OT = "/shader-packs",
      yT = `${OT}/publish`;

    function fT(TT) {
      return `${OT}/${encodeURIComponent(TT)}`
    }
    let xT = null;

    function IT(TT) {
      xT = TT
    }

    function AT() {
      return xT
    }

    function CT() {
      xT = null
    }

    function jT(TT) {
      return TT.playerHasRank("developer") || TT.playerHasRank("admin")
    }
    const vT = ["terrain", "water", "models", "sunShadows", "strict"],
      tT = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function hT(TT, kT) {
      return TT.withFeatures.includes(kT) ? "with" : TT.withoutFeatures.includes(kT) ? "without" : null
    }

    function NT(TT) {
      return null === TT ? "with" : "with" === TT ? "without" : null
    }

    function QT(TT) {
      return "with" === TT ? "only" : null === TT ? "include" : void 0
    }

    function ST(TT, kT) {
      const cT = hT(TT, kT),
        lT = TT => TT.filter((TT => TT !== kT));
      return {
        withFeatures: null === cT ? [...TT.withFeatures, kT] : lT(TT.withFeatures),
        withoutFeatures: "with" === cT ? [...TT.withoutFeatures, kT] : lT(TT.withoutFeatures)
      }
    }
    const DT = "section",
      aT = "sort",
      FT = "filters",
      rT = "q",
      PT = "banned",
      wT = "popular",
      mT = "strict";

    function bT(TT) {
      var kT, cT, MT;
      const OT = TT.get(DT),
        yT = (null !== (kT = TT.get(FT)) && void 0 !== kT ? kT : mT).split(","),
        fT = TT.get(PT);
      return {
        section: "favourites" === OT || "mine" === OT ? OT : "explore",
        sort: null !== (cT = lT.r.find((kT => kT === TT.get(aT)))) && void 0 !== cT ? cT : wT,
        withFeatures: vT.filter((TT => yT.includes(TT) && !yT.includes(`-${TT}`))),
        withoutFeatures: vT.filter((TT => yT.includes(`-${TT}`))),
        searchQuery: (null === (MT = TT.get(rT)) || void 0 === MT ? void 0 : MT.slice(0, lT.C)) || null,
        pageNumber: (0, KT.f)(TT.get(KT.d)),
        banned: "only" === fT ? "with" : "include" === fT ? null : "without"
      }
    }

    function zT(TT, kT) {
      var cT;
      const lT = eT(kT);
      (0, KT.g)(TT, DT, "explore" === kT.section ? null : kT.section), (0, KT.g)(TT, aT, kT.sort === wT ? null : kT.sort), (0, KT.g)(TT, FT, lT === mT ? null : lT), (0, KT.g)(TT, rT, kT.searchQuery), (0, KT.g)(TT, PT, null !== (cT = QT(kT.banned)) && void 0 !== cT ? cT : null), (0, KT.k)(TT, kT.pageNumber)
    }

    function JT(TT) {
      const kT = new URLSearchParams;
      return zT(kT, {
        section: "explore",
        sort: wT,
        withFeatures: "strict" === TT ? [TT] : [TT, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${OT}?${kT.toString()}`
    }

    function oT(TT) {
      return eT(TT) === mT
    }

    function HT(TT) {
      return null !== TT.searchQuery || "with" === TT.banned || eT(TT) !== mT
    }

    function eT(TT) {
      return vT.flatMap((kT => {
        const cT = hT(TT, kT);
        return "with" === cT ? [kT] : "without" === cT ? [`-${kT}`] : []
      })).join(",")
    }
    const GT = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      VT = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function ET(TT) {
      return Math.round(100 * Math.max(0, 1 - 1 / TT))
    }

    function ZT(TT, kT, cT, MT) {
      const KT = [];
      TT.isBanned && KT.push({
        tone: "warning",
        text: MT("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: OT
      } = TT;
      if (null === TT.brokenError || OT && !OT.error || KT.push({
          tone: "warning",
          text: MT("shaderPackListing:ownerBroken"),
          detail: TT.brokenError
        }), null !== OT && void 0 !== OT && OT.error) KT.push({
        tone: "warning",
        text: MT(kT ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, lT.f)(OT.error) ? null : OT.error
      });
      else if (OT) {
        const TT = null === OT.renderNotBefore ? 0 : OT.renderNotBefore - cT,
          lT = String(Math.ceil(TT / 6e4)),
          yT = MT(kT ? TT > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : TT > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: lT
          });
        KT.push({
          tone: "info",
          text: yT,
          detail: null
        })
      }
      return TT.listed || KT.push({
        tone: "info",
        text: MT("shaderPackListing:ownerUnlisted"),
        detail: null
      }), KT
    }

    function uT(TT) {
      return Math.max(1, Math.round(TT / 1024))
    }

    function XT(TT, kT, cT) {
      return TT instanceof MT.c && TT.errorMessageForUser ? TT.errorMessageForUser : kT(cT)
    }
  },
  6563: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT
    });
    var lT = cT(71),
      MT = cT(47);

    function KT(TT, kT) {
      var cT;
      const [KT, OT] = (0, lT.useState)(null !== (cT = MT.e.getItem(TT)) && void 0 !== cT ? cT : kT);
      return [KT, kT => {
        MT.e.setItem(TT, kT), OT(kT)
      }]
    }
  },
  6550: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => CT,
      C: () => IT,
      D: () => ST,
      H: () => AT,
      L: () => xT,
      b: () => jT,
      c: () => tT,
      e: () => vT,
      f: () => QT,
      i: () => aT,
      m: () => fT,
      o: () => MT,
      q: () => DT,
      r: () => KT,
      v: () => yT,
      w: () => OT,
      z: () => lT
    });
    const lT = ["forest", "desert", "water", "night", "cave"];
    const MT = {
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
      KT = ["popular", "updated", "newest"],
      OT = 3,
      yT = 32,
      fT = 300;

    function xT(TT, kT) {
      return TT.slice(0, kT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const IT = 64,
      AT = 512,
      CT = 18e5;
    const jT = "Bloxdhub",
      vT = "https://bloxdhub.com/shaders";

    function tT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const hT = "Screenshot generation failed.",
      NT = "Its screenshots couldn't be generated:";

    function QT(TT) {
      var kT;
      return TT === hT || null !== (kT = null === TT || void 0 === TT ? void 0 : TT.startsWith(NT)) && void 0 !== kT && kT
    }

    function ST(TT, kT) {
      return `shaderPacks/${TT}/${kT}.json`
    }

    function DT(TT, kT, cT, lT) {
      return null === kT.renderId ? aT(TT, kT.baselineVersion, cT, lT) : `${TT}/${function(TT,kT,cT,lT){return`shaderPacks/${TT}/${kT}/${cT}-${lT}.webp`}(kT.packId,kT.renderId,cT,lT)}`
    }

    function aT(TT, kT, cT, lT) {
      return `${TT}/${function(TT,kT,cT){return`shaderPacks/baseline/${TT}/${kT}-${cT}.webp`}(kT,cT,lT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);