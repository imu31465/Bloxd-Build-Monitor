export const id = 121;
export const ids = [121];
export const modules = {
  6226: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1181),
      PU = gU(1090);

    function TU(UU) {
      let {
        item: RU,
        className: gU
      } = UU;
      const {
        t: tU
      } = (0, EU.B)();
      return null === RU.renderId || RU.previewsOutdated ? (0, PU.jsx)("div", {
        className: pU()("ShaderPackPreviewsNotice", gU),
        children: (0, PU.jsx)("span", {
          children: tU(null === RU.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6247: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(6222),
      PU = gU(1181),
      TU = gU(6220),
      qU = gU(1090);

    function KU(UU) {
      let {
        selected: RU,
        onSelect: gU,
        imageUrl: tU
      } = UU;
      const {
        t: KU
      } = (0, PU.B)();
      return (0, qU.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: EU.E.map((UU => {
          const EU = tU(UU);
          return (0, qU.jsxs)("button", {
            type: "button",
            "aria-pressed": UU === RU,
            className: pU()("ShaderPackViewOption", {
              Selected: UU === RU
            }),
            onClick: () => {
              gU(UU)
            },
            children: [null !== EU && (0, qU.jsx)("img", {
              src: EU,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, qU.jsx)("span", {
              className: "SmallTextBold",
              children: KU(TU.Y[UU])
            })]
          }, UU)
        }))
      })
    }
  },
  6235: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => jU,
      e: () => uU,
      i: () => GU,
      j: () => CU
    });
    var tU = gU(56),
      pU = gU(6222),
      EU = gU(1461),
      PU = gU(6220),
      TU = gU(6239),
      qU = gU(1112);
    const KU = "shaderPackListingView",
      cU = "shaderPackListingFilterOpen";

    function GU() {
      var UU;
      const [RU, gU] = (0, TU.b)(KU, pU.E[0]);
      return [null !== (UU = pU.E.find((UU => UU === RU))) && void 0 !== UU ? UU : pU.E[0], gU]
    }

    function jU() {
      (0, tU.useEffect)((() => () => {
        window.location.pathname.startsWith(PU.Q) || (0, PU.g)()
      }), [])
    }

    function uU() {
      return (0, TU.b)(cU, !1)
    }

    function CU() {
      const {
        userContext: UU,
        isUserContextUpdating: RU
      } = (0, qU.e)(), [gU, pU] = (0, tU.useState)(null), PU = (0, tU.useRef)(new Set);

      function TU(UU, RU) {
        pU((gU => {
          const tU = new Set(gU);
          return RU ? tU.add(UU) : tU.delete(UU), tU
        }))
      }
      return (0, tU.useEffect)((() => {
        if (RU) return;
        let gU = !1;
        return EU.c.getFavouriteShaderPacks(UU).then((UU => {
          gU || pU(new Set(UU))
        })).catch((UU => {
          console.error("Failed to get favourite shader packs", UU), gU || pU(new Set)
        })), () => {
          gU = !0
        }
      }), [UU, RU]), {
        isFavourite: UU => null === gU ? null : gU.has(UU),
        toggle: function(RU) {
          if (null === gU || PU.current.has(RU)) return;
          PU.current.add(RU);
          const tU = !gU.has(RU);
          TU(RU, tU), (tU ? EU.c.favouriteShaderPack(UU, RU) : EU.c.unfavouriteShaderPack(UU, RU)).catch((UU => {
            console.error("Failed to change a favourite shader pack", UU), TU(RU, !tU)
          })).finally((() => {
            PU.current.delete(RU)
          }))
        }
      }
    }
  },
  6220: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => fU,
      C: () => cU,
      E: () => aU,
      H: () => hU,
      L: () => HU,
      O: () => vU,
      Q: () => PU,
      S: () => dU,
      T: () => qU,
      U: () => TU,
      X: () => rU,
      Y: () => XU,
      c: () => WU,
      cb: () => ZU,
      d: () => nU,
      e: () => QU,
      g: () => jU,
      h: () => GU,
      k: () => YU,
      o: () => uU,
      p: () => BU,
      q: () => SU,
      t: () => CU,
      x: () => eU,
      y: () => oU
    });
    var tU = gU(6222),
      pU = gU(165),
      EU = gU(4222);
    const PU = "/shader-packs",
      TU = `${PU}/publish`;

    function qU(UU) {
      return `${PU}/${encodeURIComponent(UU)}`
    }
    let KU = null;

    function cU(UU) {
      KU = UU
    }

    function GU() {
      return KU
    }

    function jU() {
      KU = null
    }

    function uU(UU) {
      return UU.playerHasRank("developer") || UU.playerHasRank("admin")
    }
    const CU = ["terrain", "water", "models", "sunShadows", "strict"],
      hU = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function QU(UU, RU) {
      return UU.withFeatures.includes(RU) ? "with" : UU.withoutFeatures.includes(RU) ? "without" : null
    }

    function eU(UU) {
      return null === UU ? "with" : "with" === UU ? "without" : null
    }

    function WU(UU) {
      return "with" === UU ? "only" : null === UU ? "include" : void 0
    }

    function fU(UU, RU) {
      const gU = QU(UU, RU),
        tU = UU => UU.filter((UU => UU !== RU));
      return {
        withFeatures: null === gU ? [...UU.withFeatures, RU] : tU(UU.withFeatures),
        withoutFeatures: "with" === gU ? [...UU.withoutFeatures, RU] : tU(UU.withoutFeatures)
      }
    }
    const xU = "section",
      mU = "sort",
      IU = "filters",
      JU = "q",
      wU = "banned",
      nU = "popular",
      bU = "strict";

    function oU(UU) {
      var RU, gU, pU;
      const PU = UU.get(xU),
        TU = (null !== (RU = UU.get(IU)) && void 0 !== RU ? RU : bU).split(","),
        qU = UU.get(wU);
      return {
        section: "favourites" === PU || "mine" === PU ? PU : "explore",
        sort: null !== (gU = tU.x.find((RU => RU === UU.get(mU)))) && void 0 !== gU ? gU : nU,
        withFeatures: CU.filter((UU => TU.includes(UU) && !TU.includes(`-${UU}`))),
        withoutFeatures: CU.filter((UU => TU.includes(`-${UU}`))),
        searchQuery: (null === (pU = UU.get(JU)) || void 0 === pU ? void 0 : pU.slice(0, tU.L)) || null,
        pageNumber: (0, EU.h)(UU.get(EU.e)),
        banned: "only" === qU ? "with" : "include" === qU ? null : "without"
      }
    }

    function ZU(UU, RU) {
      var gU;
      const tU = VU(RU);
      (0, EU.i)(UU, xU, "explore" === RU.section ? null : RU.section), (0, EU.i)(UU, mU, RU.sort === nU ? null : RU.sort), (0, EU.i)(UU, IU, tU === bU ? null : tU), (0, EU.i)(UU, JU, RU.searchQuery), (0, EU.i)(UU, wU, null !== (gU = WU(RU.banned)) && void 0 !== gU ? gU : null), (0, EU.l)(UU, RU.pageNumber)
    }

    function aU(UU) {
      const RU = new URLSearchParams;
      return ZU(RU, {
        section: "explore",
        sort: nU,
        withFeatures: "strict" === UU ? [UU] : [UU, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${PU}?${RU.toString()}`
    }

    function YU(UU) {
      return VU(UU) === bU
    }

    function BU(UU) {
      return null !== UU.searchQuery || "with" === UU.banned || VU(UU) !== bU
    }

    function VU(UU) {
      return CU.flatMap((RU => {
        const gU = QU(UU, RU);
        return "with" === gU ? [RU] : "without" === gU ? [`-${RU}`] : []
      })).join(",")
    }
    const rU = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      XU = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function vU(UU) {
      return Math.round(100 * Math.max(0, 1 - 1 / UU))
    }

    function dU(UU, RU, gU, pU) {
      const EU = [];
      UU.isBanned && EU.push({
        tone: "warning",
        text: pU("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: PU
      } = UU;
      if (null === UU.brokenError || PU && !PU.error || EU.push({
          tone: "warning",
          text: pU("shaderPackListing:ownerBroken"),
          detail: UU.brokenError
        }), null !== PU && void 0 !== PU && PU.error) EU.push({
        tone: "warning",
        text: pU(RU ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, tU.m)(PU.error) ? null : PU.error
      });
      else if (PU) {
        const UU = null === PU.renderNotBefore ? 0 : PU.renderNotBefore - gU,
          tU = String(Math.ceil(UU / 6e4)),
          TU = pU(RU ? UU > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : UU > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: tU
          });
        EU.push({
          tone: "info",
          text: TU,
          detail: null
        })
      }
      return UU.listed || EU.push({
        tone: "info",
        text: pU("shaderPackListing:ownerUnlisted"),
        detail: null
      }), EU
    }

    function HU(UU) {
      return Math.max(1, Math.round(UU / 1024))
    }

    function SU(UU, RU, gU) {
      return UU instanceof pU.e && UU.errorMessageForUser ? UU.errorMessageForUser : RU(gU)
    }
  },
  6239: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(56),
      pU = gU(34);

    function EU(UU, RU) {
      var gU;
      const [EU, PU] = (0, tU.useState)(null !== (gU = pU.k.getItem(UU)) && void 0 !== gU ? gU : RU);
      return [EU, RU => {
        pU.k.setItem(UU, RU), PU(RU)
      }]
    }
  },
  6222: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => PU,
      E: () => tU,
      I: () => jU,
      L: () => cU,
      M: () => fU,
      O: () => GU,
      P: () => KU,
      e: () => uU,
      h: () => hU,
      k: () => CU,
      m: () => WU,
      q: () => mU,
      r: () => qU,
      s: () => pU,
      v: () => xU,
      x: () => EU,
      z: () => TU
    });
    const tU = ["forest", "desert", "water", "night", "cave"];
    const pU = {
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
      EU = ["popular", "updated", "newest"],
      PU = 3,
      TU = 32,
      qU = 300;

    function KU(UU, RU) {
      return UU.slice(0, RU).replace(/[\uD800-\uDBFF]$/, "")
    }
    const cU = 64,
      GU = 512,
      jU = 18e5;
    const uU = "Bloxdhub",
      CU = "https://bloxdhub.com/shaders";

    function hU(UU) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
    }
    const QU = "Screenshot generation failed.",
      eU = "Its screenshots couldn't be generated:";

    function WU(UU) {
      var RU;
      return UU === QU || null !== (RU = null === UU || void 0 === UU ? void 0 : UU.startsWith(eU)) && void 0 !== RU && RU
    }

    function fU(UU, RU) {
      return `shaderPacks/${UU}/${RU}.json`
    }

    function xU(UU, RU, gU, tU) {
      return null === RU.renderId ? mU(UU, RU.baselineVersion, gU, tU) : `${UU}/${function(UU,RU,gU,tU){return`shaderPacks/${UU}/${RU}/${gU}-${tU}.webp`}(RU.packId,RU.renderId,gU,tU)}`
    }

    function mU(UU, RU, gU, tU) {
      return `${UU}/${function(UU,RU,gU){return`shaderPacks/baseline/${UU}/${RU}-${gU}.webp`}(RU,gU,tU)}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);