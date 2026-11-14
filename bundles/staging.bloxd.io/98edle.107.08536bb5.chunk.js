export const id = 107;
export const ids = [107];
export const modules = {
  5560: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(1027),
      AW = MW(940);

    function bR(WW) {
      let {
        item: RW,
        className: MW
      } = WW;
      const {
        t: wW
      } = (0, zR.C)();
      return null === RW.renderId || RW.previewsOutdated ? (0, AW.jsx)("div", {
        className: CW()("ShaderPackPreviewsNotice", MW),
        children: (0, AW.jsx)("span", {
          children: wW(null === RW.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  5571: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(5557),
      AW = MW(1027),
      bR = MW(5548),
      yR = MW(940);

    function NW(WW) {
      let {
        selected: RW,
        onSelect: MW,
        imageUrl: wW
      } = WW;
      const {
        t: NW
      } = (0, AW.C)();
      return (0, yR.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: zR.y.map((WW => {
          const zR = wW(WW);
          return (0, yR.jsxs)("button", {
            type: "button",
            "aria-pressed": WW === RW,
            className: CW()("ShaderPackViewOption", {
              Selected: WW === RW
            }),
            onClick: () => {
              MW(WW)
            },
            children: [null !== zR && (0, yR.jsx)("img", {
              src: zR,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, yR.jsx)("span", {
              className: "SmallTextBold",
              children: NW(bR.ib[WW])
            })]
          }, WW)
        }))
      })
    }
  },
  5565: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => tR,
      f: () => TW,
      i: () => BW,
      k: () => gR
    });
    var wW = MW(75),
      CW = MW(5557),
      zR = MW(1314),
      AW = MW(5548),
      bR = MW(5568),
      yR = MW(969);
    const NW = "shaderPackListingView",
      eW = "shaderPackListingFilterOpen";

    function BW() {
      var WW;
      const [RW, MW] = (0, bR.c)(NW, CW.y[0]);
      return [null !== (WW = CW.y.find((WW => WW === RW))) && void 0 !== WW ? WW : CW.y[0], MW]
    }

    function tR() {
      (0, wW.useEffect)((() => () => {
        window.location.pathname.startsWith(AW.$) || (0, AW.m)()
      }), [])
    }

    function TW() {
      return (0, bR.c)(eW, !1)
    }

    function gR() {
      const {
        userContext: WW,
        isUserContextUpdating: RW
      } = (0, yR.c)(), [MW, CW] = (0, wW.useState)(null), AW = (0, wW.useRef)(new Set);

      function bR(WW, RW) {
        CW((MW => {
          const wW = new Set(MW);
          return RW ? wW.add(WW) : wW.delete(WW), wW
        }))
      }
      return (0, wW.useEffect)((() => {
        if (RW) return;
        let MW = !1;
        return zR.c.getFavouriteShaderPacks(WW).then((WW => {
          MW || CW(new Set(WW))
        })).catch((WW => {
          console.error("Failed to get favourite shader packs", WW), MW || CW(new Set)
        })), () => {
          MW = !0
        }
      }), [WW, RW]), {
        isFavourite: WW => null === MW ? null : MW.has(WW),
        toggle: function(RW) {
          if (null === MW || AW.current.has(RW)) return;
          AW.current.add(RW);
          const wW = !MW.has(RW);
          bR(RW, wW), (wW ? zR.c.favouriteShaderPack(WW, RW) : zR.c.unfavouriteShaderPack(WW, RW)).catch((WW => {
            console.error("Failed to change a favourite shader pack", WW), bR(RW, !wW)
          })).finally((() => {
            AW.current.delete(RW)
          }))
        }
      }
    }
  },
  5548: (WW, RW, MW) => {
    MW.d(RW, {
      $: () => AW,
      C: () => gR,
      G: () => JW,
      K: () => XW,
      L: () => eW,
      M: () => kR,
      P: () => iR,
      T: () => VW,
      X: () => UW,
      bb: () => EW,
      cb: () => yR,
      db: () => bR,
      e: () => PW,
      h: () => rR,
      hb: () => pW,
      ib: () => hW,
      j: () => YW,
      lb: () => IW,
      m: () => tR,
      o: () => BW,
      ob: () => jR,
      r: () => aR,
      v: () => TW,
      w: () => sW,
      y: () => mR
    });
    var wW = MW(5557),
      CW = MW(156),
      zR = MW(3600);
    const AW = "/shader-packs",
      bR = `${AW}/publish`;

    function yR(WW) {
      return `${AW}/${encodeURIComponent(WW)}`
    }
    let NW = null;

    function eW(WW) {
      NW = WW
    }

    function BW() {
      return NW
    }

    function tR() {
      NW = null
    }

    function TW(WW) {
      return WW.playerHasRank("developer") || WW.playerHasRank("admin")
    }
    const gR = ["terrain", "water", "models", "sunShadows", "strict"],
      iR = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function YW(WW, RW) {
      return WW.withFeatures.includes(RW) ? "with" : WW.withoutFeatures.includes(RW) ? "without" : null
    }

    function JW(WW) {
      return null === WW ? "with" : "with" === WW ? "without" : null
    }

    function PW(WW) {
      return "with" === WW ? "only" : null === WW ? "include" : void 0
    }

    function IW(WW, RW) {
      const MW = YW(WW, RW),
        wW = WW => WW.filter((WW => WW !== RW));
      return {
        withFeatures: null === MW ? [...WW.withFeatures, RW] : wW(WW.withFeatures),
        withoutFeatures: "with" === MW ? [...WW.withoutFeatures, RW] : wW(WW.withoutFeatures)
      }
    }
    const oW = "section",
      lW = "sort",
      FW = "filters",
      fW = "q",
      QW = "banned",
      rR = "popular",
      cR = "strict";

    function XW(WW) {
      var RW, MW, CW;
      const AW = WW.get(oW),
        bR = (null !== (RW = WW.get(FW)) && void 0 !== RW ? RW : cR).split(","),
        yR = WW.get(QW);
      return {
        section: "favourites" === AW || "mine" === AW ? AW : "explore",
        sort: null !== (MW = wW.q.find((RW => RW === WW.get(lW)))) && void 0 !== MW ? MW : rR,
        withFeatures: gR.filter((WW => bR.includes(WW) && !bR.includes(`-${WW}`))),
        withoutFeatures: gR.filter((WW => bR.includes(`-${WW}`))),
        searchQuery: (null === (CW = WW.get(fW)) || void 0 === CW ? void 0 : CW.slice(0, wW.G)) || null,
        pageNumber: (0, zR.f)(WW.get(zR.b)),
        banned: "only" === yR ? "with" : "include" === yR ? null : "without"
      }
    }

    function jR(WW, RW) {
      var MW;
      const wW = dW(RW);
      (0, zR.i)(WW, oW, "explore" === RW.section ? null : RW.section), (0, zR.i)(WW, lW, RW.sort === rR ? null : RW.sort), (0, zR.i)(WW, FW, wW === cR ? null : wW), (0, zR.i)(WW, fW, RW.searchQuery), (0, zR.i)(WW, QW, null !== (MW = PW(RW.banned)) && void 0 !== MW ? MW : null), (0, zR.k)(WW, RW.pageNumber)
    }

    function kR(WW) {
      const RW = new URLSearchParams;
      return jR(RW, {
        section: "explore",
        sort: rR,
        withFeatures: "strict" === WW ? [WW] : [WW, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${AW}?${RW.toString()}`
    }

    function aR(WW) {
      return dW(WW) === cR
    }

    function sW(WW) {
      return null !== WW.searchQuery || "with" === WW.banned || dW(WW) !== cR
    }

    function dW(WW) {
      return gR.flatMap((RW => {
        const MW = YW(WW, RW);
        return "with" === MW ? [RW] : "without" === MW ? [`-${RW}`] : []
      })).join(",")
    }
    const pW = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      hW = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function UW(WW) {
      return Math.round(100 * Math.max(0, 1 - 1 / WW))
    }

    function EW(WW, RW, MW, CW) {
      const zR = [];
      WW.isBanned && zR.push({
        tone: "warning",
        text: CW("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: AW
      } = WW;
      if (null === WW.brokenError || AW && !AW.error || zR.push({
          tone: "warning",
          text: CW("shaderPackListing:ownerBroken"),
          detail: WW.brokenError
        }), null !== AW && void 0 !== AW && AW.error) zR.push({
        tone: "warning",
        text: CW(RW ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, wW.i)(AW.error) ? null : AW.error
      });
      else if (AW) {
        const WW = null === AW.renderNotBefore ? 0 : AW.renderNotBefore - MW,
          wW = String(Math.ceil(WW / 6e4)),
          bR = CW(RW ? WW > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : WW > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: wW
          });
        zR.push({
          tone: "info",
          text: bR,
          detail: null
        })
      }
      return WW.listed || zR.push({
        tone: "info",
        text: CW("shaderPackListing:ownerUnlisted"),
        detail: null
      }), zR
    }

    function VW(WW) {
      return Math.max(1, Math.round(WW / 1024))
    }

    function mR(WW, RW, MW) {
      return WW instanceof CW.d && WW.errorMessageForUser ? WW.errorMessageForUser : RW(MW)
    }
  },
  5568: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(75),
      CW = MW(50);

    function zR(WW, RW) {
      var MW;
      const [zR, AW] = (0, wW.useState)(null !== (MW = CW.g.getItem(WW)) && void 0 !== MW ? MW : RW);
      return [zR, RW => {
        CW.g.setItem(WW, RW), AW(RW)
      }]
    }
  },
  5557: (WW, RW, MW) => {
    MW.d(RW, {
      C: () => tR,
      G: () => eW,
      J: () => IW,
      K: () => BW,
      M: () => NW,
      c: () => TW,
      e: () => iR,
      f: () => gR,
      i: () => PW,
      j: () => lW,
      k: () => yR,
      m: () => CW,
      o: () => oW,
      q: () => zR,
      t: () => bR,
      u: () => AW,
      y: () => wW
    });
    const wW = ["forest", "desert", "water", "night", "cave"];
    const CW = {
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
      zR = ["popular", "updated", "newest"],
      AW = 3,
      bR = 32,
      yR = 300;

    function NW(WW, RW) {
      return WW.slice(0, RW).replace(/[\uD800-\uDBFF]$/, "")
    }
    const eW = 64,
      BW = 512,
      tR = 18e5;
    const TW = "Bloxdhub",
      gR = "https://bloxdhub.com/shaders";

    function iR(WW) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
    }
    const YW = "Screenshot generation failed.",
      JW = "Its screenshots couldn't be generated:";

    function PW(WW) {
      var RW;
      return WW === YW || null !== (RW = null === WW || void 0 === WW ? void 0 : WW.startsWith(JW)) && void 0 !== RW && RW
    }

    function IW(WW, RW) {
      return `shaderPacks/${WW}/${RW}.json`
    }

    function oW(WW, RW, MW, wW) {
      return null === RW.renderId ? lW(WW, RW.baselineVersion, MW, wW) : `${WW}/${function(WW,RW,MW,wW){return`shaderPacks/${WW}/${RW}/${MW}-${wW}.webp`}(RW.packId,RW.renderId,MW,wW)}`
    }

    function lW(WW, RW, MW, wW) {
      return `${WW}/${function(WW,RW,MW){return`shaderPacks/baseline/${WW}/${RW}-${MW}.webp`}(RW,MW,wW)}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);