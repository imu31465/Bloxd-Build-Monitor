export const id = 143;
export const ids = [143];
export const modules = {
  7121: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1123),
      hH = LH(1225);

    function tH(HH) {
      let {
        item: BH,
        className: LH
      } = HH;
      const {
        t: AH
      } = (0, SH.B)();
      return null === BH.renderId || BH.previewsOutdated ? (0, hH.jsx)("div", {
        className: rH()("ShaderPackPreviewsNotice", LH),
        children: (0, hH.jsx)("span", {
          children: AH(null === BH.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  7141: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(7114),
      hH = LH(1123),
      tH = LH(7111),
      zH = LH(1225);

    function CH(HH) {
      let {
        selected: BH,
        onSelect: LH,
        imageUrl: AH
      } = HH;
      const {
        t: CH
      } = (0, hH.B)();
      return (0, zH.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: SH.L.map((HH => {
          const SH = AH(HH);
          return (0, zH.jsxs)("button", {
            type: "button",
            "aria-pressed": HH === BH,
            className: rH()("ShaderPackViewOption", {
              Selected: HH === BH
            }),
            onClick: () => {
              LH(HH)
            },
            children: [null !== SH && (0, zH.jsx)("img", {
              src: SH,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, zH.jsx)("span", {
              className: "SmallTextBold",
              children: CH(tH._[HH])
            })]
          }, HH)
        }))
      })
    }
  },
  7129: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => GH,
      g: () => YH,
      i: () => XH,
      k: () => uH
    });
    var AH = LH(45),
      rH = LH(7114),
      SH = LH(1502),
      hH = LH(7111),
      tH = LH(7138),
      zH = LH(1061);
    const CH = "shaderPackListingView",
      EH = "shaderPackListingFilterOpen";

    function XH() {
      var HH;
      const [BH, LH] = (0, tH.b)(CH, rH.L[0]);
      return [null !== (HH = rH.L.find((HH => HH === BH))) && void 0 !== HH ? HH : rH.L[0], LH]
    }

    function GH() {
      (0, AH.useEffect)((() => () => {
        window.location.pathname.startsWith(hH.P) || (0, hH.k)()
      }), [])
    }

    function YH() {
      return (0, tH.b)(EH, !1)
    }

    function uH() {
      const {
        userContext: HH,
        isUserContextUpdating: BH
      } = (0, zH.e)(), [LH, rH] = (0, AH.useState)(null), hH = (0, AH.useRef)(new Set);

      function tH(HH, BH) {
        rH((LH => {
          const AH = new Set(LH);
          return BH ? AH.add(HH) : AH.delete(HH), AH
        }))
      }
      return (0, AH.useEffect)((() => {
        if (BH) return;
        let LH = !1;
        return SH.d.getFavouriteShaderPacks(HH).then((HH => {
          LH || rH(new Set(HH))
        })).catch((HH => {
          console.error("Failed to get favourite shader packs", HH), LH || rH(new Set)
        })), () => {
          LH = !0
        }
      }), [HH, BH]), {
        isFavourite: HH => null === LH ? null : LH.has(HH),
        toggle: function(BH) {
          if (null === LH || hH.current.has(BH)) return;
          hH.current.add(BH);
          const AH = !LH.has(BH);
          tH(BH, AH), (AH ? SH.d.favouriteShaderPack(HH, BH) : SH.d.unfavouriteShaderPack(HH, BH)).catch((HH => {
            console.error("Failed to change a favourite shader pack", HH), tH(BH, !AH)
          })).finally((() => {
            hH.current.delete(BH)
          }))
        }
      }
    }
  },
  7111: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => mH,
      F: () => EH,
      I: () => IH,
      L: () => QH,
      M: () => NH,
      N: () => qH,
      P: () => hH,
      R: () => gH,
      S: () => zH,
      T: () => tH,
      X: () => cH,
      _: () => eH,
      ab: () => vH,
      bb: () => oH,
      e: () => xH,
      h: () => bH,
      j: () => WH,
      k: () => GH,
      m: () => XH,
      n: () => fH,
      p: () => YH,
      q: () => lH,
      s: () => RH,
      w: () => uH,
      z: () => MH
    });
    var AH = LH(7114),
      rH = LH(152),
      SH = LH(4969);
    const hH = "/shader-packs",
      tH = `${hH}/publish`;

    function zH(HH) {
      return `${hH}/${encodeURIComponent(HH)}`
    }
    let CH = null;

    function EH(HH) {
      CH = HH
    }

    function XH() {
      return CH
    }

    function GH() {
      CH = null
    }

    function YH(HH) {
      return HH.playerHasRank("developer") || HH.playerHasRank("admin")
    }
    const uH = ["terrain", "water", "models", "sunShadows", "strict"],
      QH = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function WH(HH, BH) {
      return HH.withFeatures.includes(BH) ? "with" : HH.withoutFeatures.includes(BH) ? "without" : null
    }

    function MH(HH) {
      return null === HH ? "with" : "with" === HH ? "without" : null
    }

    function xH(HH) {
      return "with" === HH ? "only" : null === HH ? "include" : void 0
    }

    function vH(HH, BH) {
      const LH = WH(HH, BH),
        AH = HH => HH.filter((HH => HH !== BH));
      return {
        withFeatures: null === LH ? [...HH.withFeatures, BH] : AH(HH.withFeatures),
        withoutFeatures: "with" === LH ? [...HH.withoutFeatures, BH] : AH(HH.withoutFeatures)
      }
    }
    const PH = "section",
      TH = "sort",
      UH = "filters",
      VH = "q",
      OH = "banned",
      bH = "popular",
      kH = "strict";

    function mH(HH) {
      var BH, LH, rH;
      const hH = HH.get(PH),
        tH = (null !== (BH = HH.get(UH)) && void 0 !== BH ? BH : kH).split(","),
        zH = HH.get(OH);
      return {
        section: "favourites" === hH || "mine" === hH ? hH : "explore",
        sort: null !== (LH = AH.B.find((BH => BH === HH.get(TH)))) && void 0 !== LH ? LH : bH,
        withFeatures: uH.filter((HH => tH.includes(HH) && !tH.includes(`-${HH}`))),
        withoutFeatures: uH.filter((HH => tH.includes(`-${HH}`))),
        searchQuery: (null === (rH = HH.get(VH)) || void 0 === rH ? void 0 : rH.slice(0, AH.P)) || null,
        pageNumber: (0, SH.g)(HH.get(SH.c)),
        banned: "only" === zH ? "with" : "include" === zH ? null : "without"
      }
    }

    function oH(HH, BH) {
      var LH;
      const AH = KH(BH);
      (0, SH.j)(HH, PH, "explore" === BH.section ? null : BH.section), (0, SH.j)(HH, TH, BH.sort === bH ? null : BH.sort), (0, SH.j)(HH, UH, AH === kH ? null : AH), (0, SH.j)(HH, VH, BH.searchQuery), (0, SH.j)(HH, OH, null !== (LH = xH(BH.banned)) && void 0 !== LH ? LH : null), (0, SH.m)(HH, BH.pageNumber)
    }

    function IH(HH) {
      const BH = new URLSearchParams;
      return oH(BH, {
        section: "explore",
        sort: bH,
        withFeatures: "strict" === HH ? [HH] : [HH, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${hH}?${BH.toString()}`
    }

    function fH(HH) {
      return KH(HH) === kH
    }

    function lH(HH) {
      return null !== HH.searchQuery || "with" === HH.banned || KH(HH) !== kH
    }

    function KH(HH) {
      return uH.flatMap((BH => {
        const LH = WH(HH, BH);
        return "with" === LH ? [BH] : "without" === LH ? [`-${BH}`] : []
      })).join(",")
    }
    const cH = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      eH = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function qH(HH) {
      return Math.round(100 * Math.max(0, 1 - 1 / HH))
    }

    function gH(HH, BH, LH, rH) {
      const SH = [];
      HH.isBanned && SH.push({
        tone: "warning",
        text: rH("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: hH
      } = HH;
      if (null === HH.brokenError || hH && !hH.error || SH.push({
          tone: "warning",
          text: rH("shaderPackListing:ownerBroken"),
          detail: HH.brokenError
        }), null !== hH && void 0 !== hH && hH.error) SH.push({
        tone: "warning",
        text: rH(BH ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, AH.o)(hH.error) ? null : hH.error
      });
      else if (hH) {
        const HH = null === hH.renderNotBefore ? 0 : hH.renderNotBefore - LH,
          AH = String(Math.ceil(HH / 6e4)),
          tH = rH(BH ? HH > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : HH > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: AH
          });
        SH.push({
          tone: "info",
          text: tH,
          detail: null
        })
      }
      return HH.listed || SH.push({
        tone: "info",
        text: rH("shaderPackListing:ownerUnlisted"),
        detail: null
      }), SH
    }

    function NH(HH) {
      return Math.max(1, Math.round(HH / 1024))
    }

    function RH(HH, BH, LH) {
      return HH instanceof rH.e && HH.errorMessageForUser ? HH.errorMessageForUser : BH(LH)
    }
  },
  7138: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH
    });
    var AH = LH(45),
      rH = LH(30);

    function SH(HH, BH) {
      var LH;
      const [SH, hH] = (0, AH.useState)(null !== (LH = rH.e.getItem(HH)) && void 0 !== LH ? LH : BH);
      return [SH, BH => {
        rH.e.setItem(HH, BH), hH(BH)
      }]
    }
  },
  7114: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => SH,
      F: () => tH,
      H: () => hH,
      L: () => AH,
      M: () => GH,
      P: () => EH,
      Q: () => PH,
      R: () => XH,
      V: () => CH,
      d: () => uH,
      g: () => WH,
      i: () => QH,
      m: () => YH,
      o: () => vH,
      s: () => UH,
      v: () => zH,
      w: () => rH,
      x: () => TH
    });
    const AH = ["forest", "desert", "water", "night", "cave"];
    const rH = {
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
      SH = ["popular", "updated", "newest"],
      hH = 3,
      tH = 32,
      zH = 300;

    function CH(HH, BH) {
      return HH.slice(0, BH).replace(/[\uD800-\uDBFF]$/, "")
    }
    const EH = 64,
      XH = 512,
      GH = 18e5;

    function YH(HH) {
      const BH = HH,
        LH = null === BH || void 0 === BH ? void 0 : BH.files;
      return "number" === typeof(null === BH || void 0 === BH ? void 0 : BH.apiVersion) && "string" === typeof BH.name && (null === BH.author || "string" === typeof BH.author) && (void 0 === BH.keepCircleShadows || "boolean" === typeof BH.keepCircleShadows) && "object" === typeof LH && null !== LH && Object.values(LH).every((HH => "string" === typeof HH))
    }
    const uH = "Bloxdhub",
      QH = "https://bloxdhub.com/shaders";

    function WH(HH) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(HH)}`
    }
    const MH = "Screenshot generation failed.",
      xH = "Its screenshots couldn't be generated:";

    function vH(HH) {
      var BH;
      return HH === MH || null !== (BH = null === HH || void 0 === HH ? void 0 : HH.startsWith(xH)) && void 0 !== BH && BH
    }

    function PH(HH, BH) {
      return `shaderPacks/${HH}/${BH}.json`
    }

    function TH(HH, BH, LH, AH) {
      return null === BH.renderId ? UH(HH, BH.baselineVersion, LH, AH) : `${HH}/${function(HH,BH,LH,AH){return`shaderPacks/${HH}/${BH}/${LH}-${AH}.webp`}(BH.packId,BH.renderId,LH,AH)}`
    }

    function UH(HH, BH, LH, AH) {
      return `${HH}/${function(HH,BH,LH){return`shaderPacks/baseline/${HH}/${BH}-${LH}.webp`}(BH,LH,AH)}`
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);