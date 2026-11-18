export const id = 114;
export const ids = [114];
export const modules = {
  5896: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(1086),
      XJ = ZJ(990);

    function AJ(JJ) {
      let {
        item: cJ,
        className: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, eJ.F)();
      return null === cJ.renderId || cJ.previewsOutdated ? (0, XJ.jsx)("div", {
        className: UJ()("ShaderPackPreviewsNotice", ZJ),
        children: (0, XJ.jsx)("span", {
          children: FJ(null === cJ.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  5913: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => jJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(5889),
      XJ = ZJ(1086),
      AJ = ZJ(5886),
      qJ = ZJ(990);

    function jJ(JJ) {
      let {
        selected: cJ,
        onSelect: ZJ,
        imageUrl: FJ
      } = JJ;
      const {
        t: jJ
      } = (0, XJ.F)();
      return (0, qJ.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: eJ.B.map((JJ => {
          const eJ = FJ(JJ);
          return (0, qJ.jsxs)("button", {
            type: "button",
            "aria-pressed": JJ === cJ,
            className: UJ()("ShaderPackViewOption", {
              Selected: JJ === cJ
            }),
            onClick: () => {
              ZJ(JJ)
            },
            children: [null !== eJ && (0, qJ.jsx)("img", {
              src: eJ,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, qJ.jsx)("span", {
              className: "SmallTextBold",
              children: jJ(AJ.eb[JJ])
            })]
          }, JJ)
        }))
      })
    }
  },
  5903: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ,
      c: () => sJ,
      g: () => hJ,
      h: () => nJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(5889),
      eJ = ZJ(1389),
      XJ = ZJ(5886),
      AJ = ZJ(5910),
      qJ = ZJ(1022);
    const jJ = "shaderPackListingView",
      YJ = "shaderPackListingFilterOpen";

    function hJ() {
      var JJ;
      const [cJ, ZJ] = (0, AJ.b)(jJ, UJ.B[0]);
      return [null !== (JJ = UJ.B.find((JJ => JJ === cJ))) && void 0 !== JJ ? JJ : UJ.B[0], ZJ]
    }

    function DJ() {
      (0, FJ.useEffect)((() => () => {
        window.location.pathname.startsWith(XJ.S) || (0, XJ.n)()
      }), [])
    }

    function sJ() {
      return (0, AJ.b)(YJ, !1)
    }

    function nJ() {
      const {
        userContext: JJ,
        isUserContextUpdating: cJ
      } = (0, qJ.d)(), [ZJ, UJ] = (0, FJ.useState)(null), XJ = (0, FJ.useRef)(new Set);

      function AJ(JJ, cJ) {
        UJ((ZJ => {
          const FJ = new Set(ZJ);
          return cJ ? FJ.add(JJ) : FJ.delete(JJ), FJ
        }))
      }
      return (0, FJ.useEffect)((() => {
        if (cJ) return;
        let ZJ = !1;
        return eJ.c.getFavouriteShaderPacks(JJ).then((JJ => {
          ZJ || UJ(new Set(JJ))
        })).catch((JJ => {
          console.error("Failed to get favourite shader packs", JJ), ZJ || UJ(new Set)
        })), () => {
          ZJ = !0
        }
      }), [JJ, cJ]), {
        isFavourite: JJ => null === ZJ ? null : ZJ.has(JJ),
        toggle: function(cJ) {
          if (null === ZJ || XJ.current.has(cJ)) return;
          XJ.current.add(cJ);
          const FJ = !ZJ.has(cJ);
          AJ(cJ, FJ), (FJ ? eJ.c.favouriteShaderPack(JJ, cJ) : eJ.c.unfavouriteShaderPack(JJ, cJ)).catch((JJ => {
            console.error("Failed to change a favourite shader pack", JJ), AJ(cJ, !FJ)
          })).finally((() => {
            XJ.current.delete(cJ)
          }))
        }
      }
    }
  },
  5886: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => WJ,
      C: () => zJ,
      G: () => nJ,
      H: () => xJ,
      K: () => IJ,
      L: () => YJ,
      M: () => bJ,
      N: () => GJ,
      Q: () => dJ,
      R: () => kJ,
      S: () => XJ,
      U: () => pJ,
      W: () => qJ,
      Y: () => AJ,
      ab: () => HJ,
      c: () => rJ,
      eb: () => PJ,
      g: () => yJ,
      ib: () => vJ,
      j: () => fJ,
      kb: () => MJ,
      n: () => DJ,
      r: () => hJ,
      s: () => wJ,
      w: () => sJ
    });
    var FJ = ZJ(5889),
      UJ = ZJ(143),
      eJ = ZJ(3982);
    const XJ = "/shader-packs",
      AJ = `${XJ}/publish`;

    function qJ(JJ) {
      return `${XJ}/${encodeURIComponent(JJ)}`
    }
    let jJ = null;

    function YJ(JJ) {
      jJ = JJ
    }

    function hJ() {
      return jJ
    }

    function DJ() {
      jJ = null
    }

    function sJ(JJ) {
      return JJ.playerHasRank("developer") || JJ.playerHasRank("admin")
    }
    const nJ = ["terrain", "water", "models", "sunShadows", "strict"],
      GJ = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function fJ(JJ, cJ) {
      return JJ.withFeatures.includes(cJ) ? "with" : JJ.withoutFeatures.includes(cJ) ? "without" : null
    }

    function xJ(JJ) {
      return null === JJ ? "with" : "with" === JJ ? "without" : null
    }

    function rJ(JJ) {
      return "with" === JJ ? "only" : null === JJ ? "include" : void 0
    }

    function vJ(JJ, cJ) {
      const ZJ = fJ(JJ, cJ),
        FJ = JJ => JJ.filter((JJ => JJ !== cJ));
      return {
        withFeatures: null === ZJ ? [...JJ.withFeatures, cJ] : FJ(JJ.withFeatures),
        withoutFeatures: "with" === ZJ ? [...JJ.withoutFeatures, cJ] : FJ(JJ.withoutFeatures)
      }
    }
    const mJ = "section",
      QJ = "sort",
      EJ = "filters",
      VJ = "q",
      KJ = "banned",
      yJ = "popular",
      SJ = "strict";

    function IJ(JJ) {
      var cJ, ZJ, UJ;
      const XJ = JJ.get(mJ),
        AJ = (null !== (cJ = JJ.get(EJ)) && void 0 !== cJ ? cJ : SJ).split(","),
        qJ = JJ.get(KJ);
      return {
        section: "favourites" === XJ || "mine" === XJ ? XJ : "explore",
        sort: null !== (ZJ = FJ.t.find((cJ => cJ === JJ.get(QJ)))) && void 0 !== ZJ ? ZJ : yJ,
        withFeatures: nJ.filter((JJ => AJ.includes(JJ) && !AJ.includes(`-${JJ}`))),
        withoutFeatures: nJ.filter((JJ => AJ.includes(`-${JJ}`))),
        searchQuery: (null === (UJ = JJ.get(VJ)) || void 0 === UJ ? void 0 : UJ.slice(0, FJ.E)) || null,
        pageNumber: (0, eJ.h)(JJ.get(eJ.e)),
        banned: "only" === qJ ? "with" : "include" === qJ ? null : "without"
      }
    }

    function MJ(JJ, cJ) {
      var ZJ;
      const FJ = gJ(cJ);
      (0, eJ.l)(JJ, mJ, "explore" === cJ.section ? null : cJ.section), (0, eJ.l)(JJ, QJ, cJ.sort === yJ ? null : cJ.sort), (0, eJ.l)(JJ, EJ, FJ === SJ ? null : FJ), (0, eJ.l)(JJ, VJ, cJ.searchQuery), (0, eJ.l)(JJ, KJ, null !== (ZJ = rJ(cJ.banned)) && void 0 !== ZJ ? ZJ : null), (0, eJ.m)(JJ, cJ.pageNumber)
    }

    function bJ(JJ) {
      const cJ = new URLSearchParams;
      return MJ(cJ, {
        section: "explore",
        sort: yJ,
        withFeatures: "strict" === JJ ? [JJ] : [JJ, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${XJ}?${cJ.toString()}`
    }

    function wJ(JJ) {
      return gJ(JJ) === SJ
    }

    function WJ(JJ) {
      return null !== JJ.searchQuery || "with" === JJ.banned || gJ(JJ) !== SJ
    }

    function gJ(JJ) {
      return nJ.flatMap((cJ => {
        const ZJ = fJ(JJ, cJ);
        return "with" === ZJ ? [cJ] : "without" === ZJ ? [`-${cJ}`] : []
      })).join(",")
    }
    const HJ = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      PJ = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function kJ(JJ) {
      return Math.round(100 * Math.max(0, 1 - 1 / JJ))
    }

    function pJ(JJ, cJ, ZJ, UJ) {
      const eJ = [];
      JJ.isBanned && eJ.push({
        tone: "warning",
        text: UJ("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: XJ
      } = JJ;
      if (null === JJ.brokenError || XJ && !XJ.error || eJ.push({
          tone: "warning",
          text: UJ("shaderPackListing:ownerBroken"),
          detail: JJ.brokenError
        }), null !== XJ && void 0 !== XJ && XJ.error) eJ.push({
        tone: "warning",
        text: UJ(cJ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, FJ.j)(XJ.error) ? null : XJ.error
      });
      else if (XJ) {
        const JJ = null === XJ.renderNotBefore ? 0 : XJ.renderNotBefore - ZJ,
          FJ = String(Math.ceil(JJ / 6e4)),
          AJ = UJ(cJ ? JJ > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : JJ > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: FJ
          });
        eJ.push({
          tone: "info",
          text: AJ,
          detail: null
        })
      }
      return JJ.listed || eJ.push({
        tone: "info",
        text: UJ("shaderPackListing:ownerUnlisted"),
        detail: null
      }), eJ
    }

    function dJ(JJ) {
      return Math.max(1, Math.round(JJ / 1024))
    }

    function zJ(JJ, cJ, ZJ) {
      return JJ instanceof UJ.b && JJ.errorMessageForUser ? JJ.errorMessageForUser : cJ(ZJ)
    }
  },
  5910: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(29);

    function eJ(JJ, cJ) {
      var ZJ;
      const [eJ, XJ] = (0, FJ.useState)(null !== (ZJ = UJ.j.getItem(JJ)) && void 0 !== ZJ ? ZJ : cJ);
      return [eJ, cJ => {
        UJ.j.setItem(JJ, cJ), XJ(cJ)
      }]
    }
  },
  5889: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => FJ,
      C: () => DJ,
      E: () => YJ,
      G: () => vJ,
      I: () => hJ,
      L: () => jJ,
      b: () => sJ,
      f: () => GJ,
      i: () => nJ,
      j: () => rJ,
      l: () => QJ,
      n: () => qJ,
      o: () => UJ,
      q: () => mJ,
      t: () => eJ,
      u: () => AJ,
      x: () => XJ
    });
    const FJ = ["forest", "desert", "water", "night", "cave"];
    const UJ = {
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
      eJ = ["popular", "updated", "newest"],
      XJ = 3,
      AJ = 32,
      qJ = 300;

    function jJ(JJ, cJ) {
      return JJ.slice(0, cJ).replace(/[\uD800-\uDBFF]$/, "")
    }
    const YJ = 64,
      hJ = 512,
      DJ = 18e5;
    const sJ = "Bloxdhub",
      nJ = "https://bloxdhub.com/shaders";

    function GJ(JJ) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(JJ)}`
    }
    const fJ = "Screenshot generation failed.",
      xJ = "Its screenshots couldn't be generated:";

    function rJ(JJ) {
      var cJ;
      return JJ === fJ || null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.startsWith(xJ)) && void 0 !== cJ && cJ
    }

    function vJ(JJ, cJ) {
      return `shaderPacks/${JJ}/${cJ}.json`
    }

    function mJ(JJ, cJ, ZJ, FJ) {
      return null === cJ.renderId ? QJ(JJ, cJ.baselineVersion, ZJ, FJ) : `${JJ}/${function(JJ,cJ,ZJ,FJ){return`shaderPacks/${JJ}/${cJ}/${ZJ}-${FJ}.webp`}(cJ.packId,cJ.renderId,ZJ,FJ)}`
    }

    function QJ(JJ, cJ, ZJ, FJ) {
      return `${JJ}/${function(JJ,cJ,ZJ){return`shaderPacks/baseline/${JJ}/${cJ}-${ZJ}.webp`}(cJ,ZJ,FJ)}`
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);