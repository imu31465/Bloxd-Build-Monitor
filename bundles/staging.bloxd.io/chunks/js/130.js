export const id = 130;
export const ids = [130];
export const modules = {
  6567: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(1151),
      yG = ZG(1067);

    function kG(GG) {
      let {
        item: bG,
        className: ZG
      } = GG;
      const {
        t: wG
      } = (0, LG.w)();
      return null === bG.renderId || bG.previewsOutdated ? (0, yG.jsx)("div", {
        className: SG()("ShaderPackPreviewsNotice", ZG),
        children: (0, yG.jsx)("span", {
          children: wG(null === bG.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6583: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(6561),
      yG = ZG(1151),
      kG = ZG(6559),
      UG = ZG(1067);

    function YG(GG) {
      let {
        selected: bG,
        onSelect: ZG,
        imageUrl: wG
      } = GG;
      const {
        t: YG
      } = (0, yG.w)();
      return (0, UG.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: LG.F.map((GG => {
          const LG = wG(GG);
          return (0, UG.jsxs)("button", {
            type: "button",
            "aria-pressed": GG === bG,
            className: SG()("ShaderPackViewOption", {
              Selected: GG === bG
            }),
            onClick: () => {
              ZG(GG)
            },
            children: [null !== LG && (0, UG.jsx)("img", {
              src: LG,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, UG.jsx)("span", {
              className: "SmallTextBold",
              children: YG(kG.jb[GG])
            })]
          }, GG)
        }))
      })
    }
  },
  6576: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      e: () => QG,
      i: () => pG,
      k: () => KG
    });
    var wG = ZG(51),
      SG = ZG(6561),
      LG = ZG(1431),
      yG = ZG(6559),
      kG = ZG(6580),
      UG = ZG(1092);
    const YG = "shaderPackListingView",
      VG = "shaderPackListingFilterOpen";

    function pG() {
      var GG;
      const [bG, ZG] = (0, kG.b)(YG, SG.F[0]);
      return [null !== (GG = SG.F.find((GG => GG === bG))) && void 0 !== GG ? GG : SG.F[0], ZG]
    }

    function fG() {
      (0, wG.useEffect)((() => () => {
        window.location.pathname.startsWith(yG.X) || (0, yG.k)()
      }), [])
    }

    function QG() {
      return (0, kG.b)(VG, !1)
    }

    function KG() {
      const {
        userContext: GG,
        isUserContextUpdating: bG
      } = (0, UG.e)(), [ZG, SG] = (0, wG.useState)(null), yG = (0, wG.useRef)(new Set);

      function kG(GG, bG) {
        SG((ZG => {
          const wG = new Set(ZG);
          return bG ? wG.add(GG) : wG.delete(GG), wG
        }))
      }
      return (0, wG.useEffect)((() => {
        if (bG) return;
        let ZG = !1;
        return LG.d.getFavouriteShaderPacks(GG).then((GG => {
          ZG || SG(new Set(GG))
        })).catch((GG => {
          console.error("Failed to get favourite shader packs", GG), ZG || SG(new Set)
        })), () => {
          ZG = !0
        }
      }), [GG, bG]), {
        isFavourite: GG => null === ZG ? null : ZG.has(GG),
        toggle: function(bG) {
          if (null === ZG || yG.current.has(bG)) return;
          yG.current.add(bG);
          const wG = !ZG.has(bG);
          kG(bG, wG), (wG ? LG.d.favouriteShaderPack(GG, bG) : LG.d.unfavouriteShaderPack(GG, bG)).catch((GG => {
            console.error("Failed to change a favourite shader pack", GG), kG(bG, !wG)
          })).finally((() => {
            yG.current.delete(bG)
          }))
        }
      }
    }
  },
  6559: (GG, bG, ZG) => {
    ZG.d(bG, {
      D: () => KG,
      G: () => JG,
      K: () => mG,
      N: () => VG,
      R: () => FG,
      S: () => hG,
      V: () => AG,
      W: () => PG,
      X: () => yG,
      Z: () => MG,
      bb: () => UG,
      c: () => rG,
      eb: () => kG,
      f: () => CG,
      g: () => dG,
      hb: () => lG,
      jb: () => jG,
      k: () => fG,
      mb: () => zG,
      n: () => pG,
      q: () => vG,
      qb: () => IG,
      s: () => QG,
      v: () => aG,
      z: () => sG
    });
    var wG = ZG(6561),
      SG = ZG(140),
      LG = ZG(4575);
    const yG = "/shader-packs",
      kG = `${yG}/publish`;

    function UG(GG) {
      return `${yG}/${encodeURIComponent(GG)}`
    }
    let YG = null;

    function VG(GG) {
      YG = GG
    }

    function pG() {
      return YG
    }

    function fG() {
      YG = null
    }

    function QG(GG) {
      return GG.playerHasRank("developer") || GG.playerHasRank("admin")
    }
    const KG = ["terrain", "water", "models", "sunShadows", "strict"],
      hG = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function dG(GG, bG) {
      return GG.withFeatures.includes(bG) ? "with" : GG.withoutFeatures.includes(bG) ? "without" : null
    }

    function JG(GG) {
      return null === GG ? "with" : "with" === GG ? "without" : null
    }

    function rG(GG) {
      return "with" === GG ? "only" : null === GG ? "include" : void 0
    }

    function zG(GG, bG) {
      const ZG = dG(GG, bG),
        wG = GG => GG.filter((GG => GG !== bG));
      return {
        withFeatures: null === ZG ? [...GG.withFeatures, bG] : wG(GG.withFeatures),
        withoutFeatures: "with" === ZG ? [...GG.withoutFeatures, bG] : wG(GG.withoutFeatures)
      }
    }
    const EG = "section",
      oG = "sort",
      XG = "filters",
      uG = "q",
      iG = "banned",
      CG = "popular",
      WG = "strict";

    function mG(GG) {
      var bG, ZG, SG;
      const yG = GG.get(EG),
        kG = (null !== (bG = GG.get(XG)) && void 0 !== bG ? bG : WG).split(","),
        UG = GG.get(iG);
      return {
        section: "favourites" === yG || "mine" === yG ? yG : "explore",
        sort: null !== (ZG = wG.z.find((bG => bG === GG.get(oG)))) && void 0 !== ZG ? ZG : CG,
        withFeatures: KG.filter((GG => kG.includes(GG) && !kG.includes(`-${GG}`))),
        withoutFeatures: KG.filter((GG => kG.includes(`-${GG}`))),
        searchQuery: (null === (SG = GG.get(uG)) || void 0 === SG ? void 0 : SG.slice(0, wG.K)) || null,
        pageNumber: (0, LG.d)(GG.get(LG.c)),
        banned: "only" === UG ? "with" : "include" === UG ? null : "without"
      }
    }

    function IG(GG, bG) {
      var ZG;
      const wG = cG(bG);
      (0, LG.g)(GG, EG, "explore" === bG.section ? null : bG.section), (0, LG.g)(GG, oG, bG.sort === CG ? null : bG.sort), (0, LG.g)(GG, XG, wG === WG ? null : wG), (0, LG.g)(GG, uG, bG.searchQuery), (0, LG.g)(GG, iG, null !== (ZG = rG(bG.banned)) && void 0 !== ZG ? ZG : null), (0, LG.k)(GG, bG.pageNumber)
    }

    function FG(GG) {
      const bG = new URLSearchParams;
      return IG(bG, {
        section: "explore",
        sort: CG,
        withFeatures: "strict" === GG ? [GG] : [GG, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${yG}?${bG.toString()}`
    }

    function vG(GG) {
      return cG(GG) === WG
    }

    function aG(GG) {
      return null !== GG.searchQuery || "with" === GG.banned || cG(GG) !== WG
    }

    function cG(GG) {
      return KG.flatMap((bG => {
        const ZG = dG(GG, bG);
        return "with" === ZG ? [bG] : "without" === ZG ? [`-${bG}`] : []
      })).join(",")
    }
    const lG = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      jG = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function PG(GG) {
      return Math.round(100 * Math.max(0, 1 - 1 / GG))
    }

    function MG(GG, bG, ZG, SG) {
      const LG = [];
      GG.isBanned && LG.push({
        tone: "warning",
        text: SG("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: yG
      } = GG;
      if (null === GG.brokenError || yG && !yG.error || LG.push({
          tone: "warning",
          text: SG("shaderPackListing:ownerBroken"),
          detail: GG.brokenError
        }), null !== yG && void 0 !== yG && yG.error) LG.push({
        tone: "warning",
        text: SG(bG ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, wG.l)(yG.error) ? null : yG.error
      });
      else if (yG) {
        const GG = null === yG.renderNotBefore ? 0 : yG.renderNotBefore - ZG,
          wG = String(Math.ceil(GG / 6e4)),
          kG = SG(bG ? GG > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : GG > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: wG
          });
        LG.push({
          tone: "info",
          text: kG,
          detail: null
        })
      }
      return GG.listed || LG.push({
        tone: "info",
        text: SG("shaderPackListing:ownerUnlisted"),
        detail: null
      }), LG
    }

    function AG(GG) {
      return Math.max(1, Math.round(GG / 1024))
    }

    function sG(GG, bG, ZG) {
      return GG instanceof SG.b && GG.errorMessageForUser ? GG.errorMessageForUser : bG(ZG)
    }
  },
  6580: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(51),
      SG = ZG(29);

    function LG(GG, bG) {
      var ZG;
      const [LG, yG] = (0, wG.useState)(null !== (ZG = SG.h.getItem(GG)) && void 0 !== ZG ? ZG : bG);
      return [LG, bG => {
        SG.h.setItem(GG, bG), yG(bG)
      }]
    }
  },
  6561: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => kG,
      C: () => yG,
      F: () => wG,
      G: () => fG,
      K: () => VG,
      O: () => EG,
      S: () => pG,
      T: () => YG,
      b: () => KG,
      c: () => dG,
      e: () => hG,
      h: () => QG,
      l: () => zG,
      n: () => XG,
      q: () => UG,
      u: () => SG,
      v: () => oG,
      z: () => LG
    });
    const wG = ["forest", "desert", "water", "night", "cave"];
    const SG = {
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
      LG = ["popular", "updated", "newest"],
      yG = 3,
      kG = 32,
      UG = 300;

    function YG(GG, bG) {
      return GG.slice(0, bG).replace(/[\uD800-\uDBFF]$/, "")
    }
    const VG = 64,
      pG = 512,
      fG = 18e5;

    function QG(GG) {
      const bG = GG,
        ZG = null === bG || void 0 === bG ? void 0 : bG.files;
      return "number" === typeof(null === bG || void 0 === bG ? void 0 : bG.apiVersion) && "string" === typeof bG.name && (null === bG.author || "string" === typeof bG.author) && (void 0 === bG.keepCircleShadows || "boolean" === typeof bG.keepCircleShadows) && "object" === typeof ZG && null !== ZG && Object.values(ZG).every((GG => "string" === typeof GG))
    }
    const KG = "Bloxdhub",
      hG = "https://bloxdhub.com/shaders";

    function dG(GG) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(GG)}`
    }
    const JG = "Screenshot generation failed.",
      rG = "Its screenshots couldn't be generated:";

    function zG(GG) {
      var bG;
      return GG === JG || null !== (bG = null === GG || void 0 === GG ? void 0 : GG.startsWith(rG)) && void 0 !== bG && bG
    }

    function EG(GG, bG) {
      return `shaderPacks/${GG}/${bG}.json`
    }

    function oG(GG, bG, ZG, wG) {
      return null === bG.renderId ? XG(GG, bG.baselineVersion, ZG, wG) : `${GG}/${function(GG,bG,ZG,wG){return`shaderPacks/${GG}/${bG}/${ZG}-${wG}.webp`}(bG.packId,bG.renderId,ZG,wG)}`
    }

    function XG(GG, bG, ZG, wG) {
      return `${GG}/${function(GG,bG,ZG){return`shaderPacks/baseline/${GG}/${bG}-${ZG}.webp`}(bG,ZG,wG)}`
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);