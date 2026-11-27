export const id = 152;
export const ids = [152];
export const modules = {
  7574: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(1172),
      PW = OW(1283);

    function LW(WW) {
      let {
        item: iW,
        className: OW
      } = WW;
      const {
        t: mW
      } = (0, NW.B)();
      return null === iW.renderId || iW.previewsOutdated ? (0, PW.jsx)("div", {
        className: EW()("ShaderPackPreviewsNotice", OW),
        children: (0, PW.jsx)("span", {
          children: mW(null === iW.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  7591: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(7570),
      PW = OW(1172),
      LW = OW(7567),
      cW = OW(1283);

    function wW(WW) {
      let {
        selected: iW,
        onSelect: OW,
        imageUrl: mW
      } = WW;
      const {
        t: wW
      } = (0, PW.B)();
      return (0, cW.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: NW.F.map((WW => {
          const NW = mW(WW);
          return (0, cW.jsxs)("button", {
            type: "button",
            "aria-pressed": WW === iW,
            className: EW()("ShaderPackViewOption", {
              Selected: WW === iW
            }),
            onClick: () => {
              OW(WW)
            },
            children: [null !== NW && (0, cW.jsx)("img", {
              src: NW,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, cW.jsx)("span", {
              className: "SmallTextBold",
              children: wW(LW.fb[WW])
            })]
          }, WW)
        }))
      })
    }
  },
  7577: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => xW,
      c: () => lW,
      f: () => ZW,
      j: () => AW
    });
    var mW = OW(62),
      EW = OW(7570),
      NW = OW(1584),
      PW = OW(7567),
      LW = OW(7583),
      cW = OW(1107);
    const wW = "shaderPackListingView",
      tW = "shaderPackListingFilterOpen";

    function ZW() {
      var WW;
      const [iW, OW] = (0, LW.d)(wW, EW.F[0]);
      return [null !== (WW = EW.F.find((WW => WW === iW))) && void 0 !== WW ? WW : EW.F[0], OW]
    }

    function xW() {
      (0, mW.useEffect)((() => () => {
        window.location.pathname.startsWith(PW.W) || (0, PW.j)()
      }), [])
    }

    function lW() {
      return (0, LW.d)(tW, !1)
    }

    function AW() {
      const {
        userContext: WW,
        isUserContextUpdating: iW
      } = (0, cW.e)(), [OW, EW] = (0, mW.useState)(null), PW = (0, mW.useRef)(new Set);

      function LW(WW, iW) {
        EW((OW => {
          const mW = new Set(OW);
          return iW ? mW.add(WW) : mW.delete(WW), mW
        }))
      }
      return (0, mW.useEffect)((() => {
        if (iW) return;
        let OW = !1;
        return NW.e.getFavouriteShaderPacks(WW).then((WW => {
          OW || EW(new Set(WW))
        })).catch((WW => {
          console.error("Failed to get favourite shader packs", WW), OW || EW(new Set)
        })), () => {
          OW = !0
        }
      }), [WW, iW]), {
        isFavourite: WW => null === OW ? null : OW.has(WW),
        toggle: function(iW) {
          if (null === OW || PW.current.has(iW)) return;
          PW.current.add(iW);
          const mW = !OW.has(iW);
          LW(iW, mW), (mW ? NW.e.favouriteShaderPack(WW, iW) : NW.e.unfavouriteShaderPack(WW, iW)).catch((WW => {
            console.error("Failed to change a favourite shader pack", WW), LW(iW, !mW)
          })).finally((() => {
            PW.current.delete(iW)
          }))
        }
      }
    }
  },
  7567: (WW, iW, OW) => {
    OW.d(iW, {
      $: () => cW,
      B: () => AW,
      E: () => UW,
      G: () => hW,
      K: () => tW,
      M: () => nW,
      N: () => bW,
      Q: () => VW,
      S: () => gW,
      W: () => PW,
      _: () => DW,
      bb: () => LW,
      cb: () => eW,
      d: () => kW,
      e: () => TW,
      f: () => jW,
      fb: () => vW,
      j: () => xW,
      jb: () => sW,
      kb: () => HW,
      l: () => ZW,
      p: () => uW,
      q: () => lW,
      u: () => oW,
      y: () => pW
    });
    var mW = OW(7570),
      EW = OW(154),
      NW = OW(5268);
    const PW = "/shader-packs",
      LW = `${PW}/publish`;

    function cW(WW) {
      return `${PW}/${encodeURIComponent(WW)}`
    }
    let wW = null;

    function tW(WW) {
      wW = WW
    }

    function ZW() {
      return wW
    }

    function xW() {
      wW = null
    }

    function lW(WW) {
      return WW.playerHasRank("developer") || WW.playerHasRank("admin")
    }
    const AW = ["terrain", "water", "models", "sunShadows", "strict"],
      bW = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function jW(WW, iW) {
      return WW.withFeatures.includes(iW) ? "with" : WW.withoutFeatures.includes(iW) ? "without" : null
    }

    function UW(WW) {
      return null === WW ? "with" : "with" === WW ? "without" : null
    }

    function kW(WW) {
      return "with" === WW ? "only" : null === WW ? "include" : void 0
    }

    function sW(WW, iW) {
      const OW = jW(WW, iW),
        mW = WW => WW.filter((WW => WW !== iW));
      return {
        withFeatures: null === OW ? [...WW.withFeatures, iW] : mW(WW.withFeatures),
        withoutFeatures: "with" === OW ? [...WW.withoutFeatures, iW] : mW(WW.withoutFeatures)
      }
    }
    const MW = "section",
      KW = "sort",
      SW = "filters",
      YW = "q",
      yW = "banned",
      TW = "popular",
      JW = "strict";

    function hW(WW) {
      var iW, OW, EW;
      const PW = WW.get(MW),
        LW = (null !== (iW = WW.get(SW)) && void 0 !== iW ? iW : JW).split(","),
        cW = WW.get(yW);
      return {
        section: "favourites" === PW || "mine" === PW ? PW : "explore",
        sort: null !== (OW = mW.u.find((iW => iW === WW.get(KW)))) && void 0 !== OW ? OW : TW,
        withFeatures: AW.filter((WW => LW.includes(WW) && !LW.includes(`-${WW}`))),
        withoutFeatures: AW.filter((WW => LW.includes(`-${WW}`))),
        searchQuery: (null === (EW = WW.get(YW)) || void 0 === EW ? void 0 : EW.slice(0, mW.K)) || null,
        pageNumber: (0, NW.f)(WW.get(NW.b)),
        banned: "only" === cW ? "with" : "include" === cW ? null : "without"
      }
    }

    function HW(WW, iW) {
      var OW;
      const mW = dW(iW);
      (0, NW.j)(WW, MW, "explore" === iW.section ? null : iW.section), (0, NW.j)(WW, KW, iW.sort === TW ? null : iW.sort), (0, NW.j)(WW, SW, mW === JW ? null : mW), (0, NW.j)(WW, YW, iW.searchQuery), (0, NW.j)(WW, yW, null !== (OW = kW(iW.banned)) && void 0 !== OW ? OW : null), (0, NW.m)(WW, iW.pageNumber)
    }

    function nW(WW) {
      const iW = new URLSearchParams;
      return HW(iW, {
        section: "explore",
        sort: TW,
        withFeatures: "strict" === WW ? [WW] : [WW, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${PW}?${iW.toString()}`
    }

    function uW(WW) {
      return dW(WW) === JW
    }

    function oW(WW) {
      return null !== WW.searchQuery || "with" === WW.banned || dW(WW) !== JW
    }

    function dW(WW) {
      return AW.flatMap((iW => {
        const OW = jW(WW, iW);
        return "with" === OW ? [iW] : "without" === OW ? [`-${iW}`] : []
      })).join(",")
    }
    const eW = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      vW = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function gW(WW) {
      return Math.round(100 * Math.max(0, 1 - 1 / WW))
    }

    function DW(WW, iW, OW, EW) {
      const NW = [];
      WW.isBanned && NW.push({
        tone: "warning",
        text: EW("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: PW
      } = WW;
      if (null === WW.brokenError || PW && !PW.error || NW.push({
          tone: "warning",
          text: EW("shaderPackListing:ownerBroken"),
          detail: WW.brokenError
        }), null !== PW && void 0 !== PW && PW.error) NW.push({
        tone: "warning",
        text: EW(iW ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, mW.g)(PW.error) ? null : PW.error
      });
      else if (PW) {
        const WW = null === PW.renderNotBefore ? 0 : PW.renderNotBefore - OW,
          mW = String(Math.ceil(WW / 6e4)),
          LW = EW(iW ? WW > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : WW > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: mW
          });
        NW.push({
          tone: "info",
          text: LW,
          detail: null
        })
      }
      return WW.listed || NW.push({
        tone: "info",
        text: EW("shaderPackListing:ownerUnlisted"),
        detail: null
      }), NW
    }

    function VW(WW) {
      return Math.max(1, Math.round(WW / 1024))
    }

    function pW(WW, iW, OW) {
      return WW instanceof EW.c && WW.errorMessageForUser ? WW.errorMessageForUser : iW(OW)
    }
  },
  7583: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(62),
      EW = OW(39);

    function NW(WW, iW) {
      var OW;
      const [NW, PW] = (0, mW.useState)(null !== (OW = EW.i.getItem(WW)) && void 0 !== OW ? OW : iW);
      return [NW, iW => {
        EW.i.setItem(WW, iW), PW(iW)
      }]
    }
  },
  7570: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => PW,
      F: () => mW,
      G: () => xW,
      K: () => tW,
      L: () => MW,
      M: () => ZW,
      N: () => wW,
      c: () => AW,
      d: () => jW,
      e: () => bW,
      f: () => lW,
      g: () => sW,
      i: () => SW,
      j: () => cW,
      n: () => EW,
      q: () => KW,
      u: () => NW,
      x: () => LW
    });
    const mW = ["forest", "desert", "water", "night", "cave"];
    const EW = {
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
      NW = ["popular", "updated", "newest"],
      PW = 3,
      LW = 32,
      cW = 300;

    function wW(WW, iW) {
      return WW.slice(0, iW).replace(/[\uD800-\uDBFF]$/, "")
    }
    const tW = 64,
      ZW = 512,
      xW = 18e5;

    function lW(WW) {
      const iW = WW,
        OW = null === iW || void 0 === iW ? void 0 : iW.files;
      return "number" === typeof(null === iW || void 0 === iW ? void 0 : iW.apiVersion) && "string" === typeof iW.name && (null === iW.author || "string" === typeof iW.author) && (void 0 === iW.keepCircleShadows || "boolean" === typeof iW.keepCircleShadows) && "object" === typeof OW && null !== OW && Object.values(OW).every((WW => "string" === typeof WW))
    }
    const AW = "Bloxdhub",
      bW = "https://bloxdhub.com/shaders";

    function jW(WW) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
    }
    const UW = "Screenshot generation failed.",
      kW = "Its screenshots couldn't be generated:";

    function sW(WW) {
      var iW;
      return WW === UW || null !== (iW = null === WW || void 0 === WW ? void 0 : WW.startsWith(kW)) && void 0 !== iW && iW
    }

    function MW(WW, iW) {
      return `shaderPacks/${WW}/${iW}.json`
    }

    function KW(WW, iW, OW, mW) {
      return null === iW.renderId ? SW(WW, iW.baselineVersion, OW, mW) : `${WW}/${function(WW,iW,OW,mW){return`shaderPacks/${WW}/${iW}/${OW}-${mW}.webp`}(iW.packId,iW.renderId,OW,mW)}`
    }

    function SW(WW, iW, OW, mW) {
      return `${WW}/${function(WW,iW,OW){return`shaderPacks/baseline/${WW}/${iW}-${OW}.webp`}(iW,OW,mW)}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);