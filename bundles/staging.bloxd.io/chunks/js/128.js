export const id = 128;
export const ids = [128];
export const modules = {
  6768: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(1281),
      xS = gS(1181);

    function NS(SS) {
      let {
        item: HS,
        className: gS
      } = SS;
      const {
        t: tS
      } = (0, XS.F)();
      return null === HS.renderId || HS.previewsOutdated ? (0, xS.jsx)("div", {
        className: bS()("ShaderPackPreviewsNotice", gS),
        children: (0, xS.jsx)("span", {
          children: tS(null === HS.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6783: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => uS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(6760),
      xS = gS(1281),
      NS = gS(6754),
      qS = gS(1181);

    function uS(SS) {
      let {
        selected: HS,
        onSelect: gS,
        imageUrl: tS
      } = SS;
      const {
        t: uS
      } = (0, xS.F)();
      return (0, qS.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: XS.K.map((SS => {
          const XS = tS(SS);
          return (0, qS.jsxs)("button", {
            type: "button",
            "aria-pressed": SS === HS,
            className: bS()("ShaderPackViewOption", {
              Selected: SS === HS
            }),
            onClick: () => {
              gS(SS)
            },
            children: [null !== XS && (0, qS.jsx)("img", {
              src: XS,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, qS.jsx)("span", {
              className: "SmallTextBold",
              children: uS(NS.db[SS])
            })]
          }, SS)
        }))
      })
    }
  },
  6775: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS,
      g: () => aS,
      h: () => fS,
      j: () => KS
    });
    var tS = gS(64),
      bS = gS(6760),
      XS = gS(1588),
      xS = gS(6754),
      NS = gS(6780),
      qS = gS(1211);
    const uS = "shaderPackListingView",
      IS = "shaderPackListingFilterOpen";

    function fS() {
      var SS;
      const [HS, gS] = (0, NS.b)(uS, bS.K[0]);
      return [null !== (SS = bS.K.find((SS => SS === HS))) && void 0 !== SS ? SS : bS.K[0], gS]
    }

    function kS() {
      (0, tS.useEffect)((() => () => {
        window.location.pathname.startsWith(xS.P) || (0, xS.k)()
      }), [])
    }

    function aS() {
      return (0, NS.b)(IS, !1)
    }

    function KS() {
      const {
        userContext: SS,
        isUserContextUpdating: HS
      } = (0, qS.b)(), [gS, bS] = (0, tS.useState)(null), xS = (0, tS.useRef)(new Set);

      function NS(SS, HS) {
        bS((gS => {
          const tS = new Set(gS);
          return HS ? tS.add(SS) : tS.delete(SS), tS
        }))
      }
      return (0, tS.useEffect)((() => {
        if (HS) return;
        let gS = !1;
        return XS.b.getFavouriteShaderPacks(SS).then((SS => {
          gS || bS(new Set(SS))
        })).catch((SS => {
          console.error("Failed to get favourite shader packs", SS), gS || bS(new Set)
        })), () => {
          gS = !0
        }
      }), [SS, HS]), {
        isFavourite: SS => null === gS ? null : gS.has(SS),
        toggle: function(HS) {
          if (null === gS || xS.current.has(HS)) return;
          xS.current.add(HS);
          const tS = !gS.has(HS);
          NS(HS, tS), (tS ? XS.b.favouriteShaderPack(SS, HS) : XS.b.unfavouriteShaderPack(SS, HS)).catch((SS => {
            console.error("Failed to change a favourite shader pack", SS), NS(HS, !tS)
          })).finally((() => {
            xS.current.delete(HS)
          }))
        }
      }
    }
  },
  6754: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => dS,
      D: () => IS,
      H: () => vS,
      J: () => jS,
      K: () => WS,
      O: () => VS,
      P: () => xS,
      S: () => iS,
      W: () => qS,
      _: () => NS,
      ab: () => AS,
      db: () => yS,
      e: () => nS,
      eb: () => PS,
      gb: () => cS,
      h: () => JS,
      j: () => GS,
      k: () => kS,
      l: () => fS,
      n: () => ES,
      o: () => aS,
      p: () => LS,
      s: () => zS,
      w: () => KS,
      y: () => CS
    });
    var tS = gS(6760),
      bS = gS(160),
      XS = gS(4693);
    const xS = "/shader-packs",
      NS = `${xS}/publish`;

    function qS(SS) {
      return `${xS}/${encodeURIComponent(SS)}`
    }
    let uS = null;

    function IS(SS) {
      uS = SS
    }

    function fS() {
      return uS
    }

    function kS() {
      uS = null
    }

    function aS(SS) {
      return SS.playerHasRank("developer") || SS.playerHasRank("admin")
    }
    const KS = ["terrain", "water", "models", "sunShadows", "strict"],
      jS = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function GS(SS, HS) {
      return SS.withFeatures.includes(HS) ? "with" : SS.withoutFeatures.includes(HS) ? "without" : null
    }

    function CS(SS) {
      return null === SS ? "with" : "with" === SS ? "without" : null
    }

    function nS(SS) {
      return "with" === SS ? "only" : null === SS ? "include" : void 0
    }

    function PS(SS, HS) {
      const gS = GS(SS, HS),
        tS = SS => SS.filter((SS => SS !== HS));
      return {
        withFeatures: null === gS ? [...SS.withFeatures, HS] : tS(SS.withFeatures),
        withoutFeatures: "with" === gS ? [...SS.withoutFeatures, HS] : tS(SS.withoutFeatures)
      }
    }
    const QS = "section",
      DS = "sort",
      wS = "filters",
      hS = "q",
      ZS = "banned",
      JS = "popular",
      OS = "strict";

    function dS(SS) {
      var HS, gS, bS;
      const xS = SS.get(QS),
        NS = (null !== (HS = SS.get(wS)) && void 0 !== HS ? HS : OS).split(","),
        qS = SS.get(ZS);
      return {
        section: "favourites" === xS || "mine" === xS ? xS : "explore",
        sort: null !== (gS = tS.C.find((HS => HS === SS.get(DS)))) && void 0 !== gS ? gS : JS,
        withFeatures: KS.filter((SS => NS.includes(SS) && !NS.includes(`-${SS}`))),
        withoutFeatures: KS.filter((SS => NS.includes(`-${SS}`))),
        searchQuery: (null === (bS = SS.get(hS)) || void 0 === bS ? void 0 : bS.slice(0, tS.Q)) || null,
        pageNumber: (0, XS.e)(SS.get(XS.c)),
        banned: "only" === qS ? "with" : "include" === qS ? null : "without"
      }
    }

    function cS(SS, HS) {
      var gS;
      const tS = YS(HS);
      (0, XS.f)(SS, QS, "explore" === HS.section ? null : HS.section), (0, XS.f)(SS, DS, HS.sort === JS ? null : HS.sort), (0, XS.f)(SS, wS, tS === OS ? null : tS), (0, XS.f)(SS, hS, HS.searchQuery), (0, XS.f)(SS, ZS, null !== (gS = nS(HS.banned)) && void 0 !== gS ? gS : null), (0, XS.i)(SS, HS.pageNumber)
    }

    function vS(SS) {
      const HS = new URLSearchParams;
      return cS(HS, {
        section: "explore",
        sort: JS,
        withFeatures: "strict" === SS ? [SS] : [SS, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${xS}?${HS.toString()}`
    }

    function ES(SS) {
      return YS(SS) === OS
    }

    function LS(SS) {
      return null !== SS.searchQuery || "with" === SS.banned || YS(SS) !== OS
    }

    function YS(SS) {
      return KS.flatMap((HS => {
        const gS = GS(SS, HS);
        return "with" === gS ? [HS] : "without" === gS ? [`-${HS}`] : []
      })).join(",")
    }
    const AS = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      yS = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function VS(SS) {
      return Math.round(100 * Math.max(0, 1 - 1 / SS))
    }

    function iS(SS, HS, gS, bS) {
      const XS = [];
      SS.isBanned && XS.push({
        tone: "warning",
        text: bS("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: xS
      } = SS;
      if (null === SS.brokenError || xS && !xS.error || XS.push({
          tone: "warning",
          text: bS("shaderPackListing:ownerBroken"),
          detail: SS.brokenError
        }), null !== xS && void 0 !== xS && xS.error) XS.push({
        tone: "warning",
        text: bS(HS ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, tS.q)(xS.error) ? null : xS.error
      });
      else if (xS) {
        const SS = null === xS.renderNotBefore ? 0 : xS.renderNotBefore - gS,
          tS = String(Math.ceil(SS / 6e4)),
          NS = bS(HS ? SS > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : SS > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: tS
          });
        XS.push({
          tone: "info",
          text: NS,
          detail: null
        })
      }
      return SS.listed || XS.push({
        tone: "info",
        text: bS("shaderPackListing:ownerUnlisted"),
        detail: null
      }), XS
    }

    function WS(SS) {
      return Math.max(1, Math.round(SS / 1024))
    }

    function zS(SS, HS, gS) {
      return SS instanceof bS.b && SS.errorMessageForUser ? SS.errorMessageForUser : HS(gS)
    }
  },
  6780: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(64),
      bS = gS(45);

    function XS(SS, HS) {
      var gS;
      const [XS, xS] = (0, tS.useState)(null !== (gS = bS.g.getItem(SS)) && void 0 !== gS ? gS : HS);
      return [XS, HS => {
        bS.g.setItem(SS, HS), xS(HS)
      }]
    }
  },
  6760: (SS, HS, gS) => {
    gS.d(HS, {
      C: () => XS,
      E: () => NS,
      I: () => xS,
      K: () => tS,
      M: () => kS,
      Q: () => IS,
      R: () => QS,
      T: () => fS,
      V: () => uS,
      e: () => KS,
      h: () => GS,
      i: () => jS,
      m: () => aS,
      q: () => PS,
      u: () => wS,
      v: () => qS,
      w: () => bS,
      z: () => DS
    });
    const tS = ["forest", "desert", "water", "night", "cave"];
    const bS = {
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
      XS = ["popular", "updated", "newest"],
      xS = 3,
      NS = 32,
      qS = 300;

    function uS(SS, HS) {
      return SS.slice(0, HS).replace(/[\uD800-\uDBFF]$/, "")
    }
    const IS = 64,
      fS = 512,
      kS = 18e5;

    function aS(SS) {
      const HS = SS,
        gS = null === HS || void 0 === HS ? void 0 : HS.files;
      return "number" === typeof(null === HS || void 0 === HS ? void 0 : HS.apiVersion) && "string" === typeof HS.name && (null === HS.author || "string" === typeof HS.author) && (void 0 === HS.keepCircleShadows || "boolean" === typeof HS.keepCircleShadows) && "object" === typeof gS && null !== gS && Object.values(gS).every((SS => "string" === typeof SS))
    }
    const KS = "Bloxdhub",
      jS = "https://bloxdhub.com/shaders";

    function GS(SS) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(SS)}`
    }
    const CS = "Screenshot generation failed.",
      nS = "Its screenshots couldn't be generated:";

    function PS(SS) {
      var HS;
      return SS === CS || null !== (HS = null === SS || void 0 === SS ? void 0 : SS.startsWith(nS)) && void 0 !== HS && HS
    }

    function QS(SS, HS) {
      return `shaderPacks/${SS}/${HS}.json`
    }

    function DS(SS, HS, gS, tS) {
      return null === HS.renderId ? wS(SS, HS.baselineVersion, gS, tS) : `${SS}/${function(SS,HS,gS,tS){return`shaderPacks/${SS}/${HS}/${gS}-${tS}.webp`}(HS.packId,HS.renderId,gS,tS)}`
    }

    function wS(SS, HS, gS, tS) {
      return `${SS}/${function(SS,HS,gS){return`shaderPacks/baseline/${SS}/${HS}-${gS}.webp`}(HS,gS,tS)}`
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);