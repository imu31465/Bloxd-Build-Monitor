export const id = 141;
export const ids = [141];
export const modules = {
  7167: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1193),
      AU = zU(1305);

    function FU(UU) {
      let {
        item: XU,
        className: zU
      } = UU;
      const {
        t: cU
      } = (0, QU.I)();
      return null === XU.renderId || XU.previewsOutdated ? (0, AU.jsx)("div", {
        className: yU()("ShaderPackPreviewsNotice", zU),
        children: (0, AU.jsx)("span", {
          children: cU(null === XU.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  7181: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(7158),
      AU = zU(1193),
      FU = zU(7150),
      oU = zU(1305);

    function DU(UU) {
      let {
        selected: XU,
        onSelect: zU,
        imageUrl: cU
      } = UU;
      const {
        t: DU
      } = (0, AU.I)();
      return (0, oU.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: QU.E.map((UU => {
          const QU = cU(UU);
          return (0, oU.jsxs)("button", {
            type: "button",
            "aria-pressed": UU === XU,
            className: yU()("ShaderPackViewOption", {
              Selected: UU === XU
            }),
            onClick: () => {
              zU(UU)
            },
            children: [null !== QU && (0, oU.jsx)("img", {
              src: QU,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, oU.jsx)("span", {
              className: "SmallTextBold",
              children: DU(FU.db[UU])
            })]
          }, UU)
        }))
      })
    }
  },
  7172: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU,
      e: () => IU,
      g: () => YU,
      h: () => pU
    });
    var cU = zU(61),
      yU = zU(7158),
      QU = zU(1545),
      AU = zU(7150),
      FU = zU(7176),
      oU = zU(1129);
    const DU = "shaderPackListingView",
      EU = "shaderPackListingFilterOpen";

    function YU() {
      var UU;
      const [XU, zU] = (0, FU.d)(DU, yU.E[0]);
      return [null !== (UU = yU.E.find((UU => UU === XU))) && void 0 !== UU ? UU : yU.E[0], zU]
    }

    function NU() {
      (0, cU.useEffect)((() => () => {
        window.location.pathname.startsWith(AU.T) || (0, AU.k)()
      }), [])
    }

    function IU() {
      return (0, FU.d)(EU, !1)
    }

    function pU() {
      const {
        userContext: UU,
        isUserContextUpdating: XU
      } = (0, oU.d)(), [zU, yU] = (0, cU.useState)(null), AU = (0, cU.useRef)(new Set);

      function FU(UU, XU) {
        yU((zU => {
          const cU = new Set(zU);
          return XU ? cU.add(UU) : cU.delete(UU), cU
        }))
      }
      return (0, cU.useEffect)((() => {
        if (XU) return;
        let zU = !1;
        return QU.c.getFavouriteShaderPacks(UU).then((UU => {
          zU || yU(new Set(UU))
        })).catch((UU => {
          console.error("Failed to get favourite shader packs", UU), zU || yU(new Set)
        })), () => {
          zU = !0
        }
      }), [UU, XU]), {
        isFavourite: UU => null === zU ? null : zU.has(UU),
        toggle: function(XU) {
          if (null === zU || AU.current.has(XU)) return;
          AU.current.add(XU);
          const cU = !zU.has(XU);
          FU(XU, cU), (cU ? QU.c.favouriteShaderPack(UU, XU) : QU.c.unfavouriteShaderPack(UU, XU)).catch((UU => {
            console.error("Failed to change a favourite shader pack", UU), FU(XU, !cU)
          })).finally((() => {
            AU.current.delete(XU)
          }))
        }
      }
    }
  },
  7150: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => FU,
      D: () => gU,
      F: () => eU,
      I: () => EU,
      K: () => wU,
      N: () => aU,
      Q: () => HU,
      S: () => fU,
      T: () => AU,
      V: () => iU,
      Z: () => oU,
      bb: () => rU,
      c: () => kU,
      db: () => uU,
      g: () => dU,
      gb: () => GU,
      h: () => tU,
      jb: () => CU,
      k: () => NU,
      m: () => YU,
      n: () => qU,
      p: () => IU,
      s: () => OU,
      w: () => MU,
      z: () => pU
    });
    var cU = zU(7158),
      yU = zU(173),
      QU = zU(4997);
    const AU = "/shader-packs",
      FU = `${AU}/publish`;

    function oU(UU) {
      return `${AU}/${encodeURIComponent(UU)}`
    }
    let DU = null;

    function EU(UU) {
      DU = UU
    }

    function YU() {
      return DU
    }

    function NU() {
      DU = null
    }

    function IU(UU) {
      return UU.playerHasRank("developer") || UU.playerHasRank("admin")
    }
    const pU = ["terrain", "water", "models", "sunShadows", "strict"],
      aU = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function tU(UU, XU) {
      return UU.withFeatures.includes(XU) ? "with" : UU.withoutFeatures.includes(XU) ? "without" : null
    }

    function gU(UU) {
      return null === UU ? "with" : "with" === UU ? "without" : null
    }

    function kU(UU) {
      return "with" === UU ? "only" : null === UU ? "include" : void 0
    }

    function GU(UU, XU) {
      const zU = tU(UU, XU),
        cU = UU => UU.filter((UU => UU !== XU));
      return {
        withFeatures: null === zU ? [...UU.withFeatures, XU] : cU(UU.withFeatures),
        withoutFeatures: "with" === zU ? [...UU.withoutFeatures, XU] : cU(UU.withoutFeatures)
      }
    }
    const BU = "section",
      ZU = "sort",
      RU = "filters",
      PU = "q",
      WU = "banned",
      dU = "popular",
      LU = "strict";

    function eU(UU) {
      var XU, zU, yU;
      const AU = UU.get(BU),
        FU = (null !== (XU = UU.get(RU)) && void 0 !== XU ? XU : LU).split(","),
        oU = UU.get(WU);
      return {
        section: "favourites" === AU || "mine" === AU ? AU : "explore",
        sort: null !== (zU = cU.z.find((XU => XU === UU.get(ZU)))) && void 0 !== zU ? zU : dU,
        withFeatures: pU.filter((UU => FU.includes(UU) && !FU.includes(`-${UU}`))),
        withoutFeatures: pU.filter((UU => FU.includes(`-${UU}`))),
        searchQuery: (null === (yU = UU.get(PU)) || void 0 === yU ? void 0 : yU.slice(0, cU.I)) || null,
        pageNumber: (0, QU.e)(UU.get(QU.c)),
        banned: "only" === oU ? "with" : "include" === oU ? null : "without"
      }
    }

    function CU(UU, XU) {
      var zU;
      const cU = SU(XU);
      (0, QU.i)(UU, BU, "explore" === XU.section ? null : XU.section), (0, QU.i)(UU, ZU, XU.sort === dU ? null : XU.sort), (0, QU.i)(UU, RU, cU === LU ? null : cU), (0, QU.i)(UU, PU, XU.searchQuery), (0, QU.i)(UU, WU, null !== (zU = kU(XU.banned)) && void 0 !== zU ? zU : null), (0, QU.m)(UU, XU.pageNumber)
    }

    function wU(UU) {
      const XU = new URLSearchParams;
      return CU(XU, {
        section: "explore",
        sort: dU,
        withFeatures: "strict" === UU ? [UU] : [UU, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${AU}?${XU.toString()}`
    }

    function qU(UU) {
      return SU(UU) === LU
    }

    function OU(UU) {
      return null !== UU.searchQuery || "with" === UU.banned || SU(UU) !== LU
    }

    function SU(UU) {
      return pU.flatMap((XU => {
        const zU = tU(UU, XU);
        return "with" === zU ? [XU] : "without" === zU ? [`-${XU}`] : []
      })).join(",")
    }
    const rU = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      uU = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function fU(UU) {
      return Math.round(100 * Math.max(0, 1 - 1 / UU))
    }

    function iU(UU, XU, zU, yU) {
      const QU = [];
      UU.isBanned && QU.push({
        tone: "warning",
        text: yU("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: AU
      } = UU;
      if (null === UU.brokenError || AU && !AU.error || QU.push({
          tone: "warning",
          text: yU("shaderPackListing:ownerBroken"),
          detail: UU.brokenError
        }), null !== AU && void 0 !== AU && AU.error) QU.push({
        tone: "warning",
        text: yU(XU ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, cU.l)(AU.error) ? null : AU.error
      });
      else if (AU) {
        const UU = null === AU.renderNotBefore ? 0 : AU.renderNotBefore - zU,
          cU = String(Math.ceil(UU / 6e4)),
          FU = yU(XU ? UU > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : UU > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: cU
          });
        QU.push({
          tone: "info",
          text: FU,
          detail: null
        })
      }
      return UU.listed || QU.push({
        tone: "info",
        text: yU("shaderPackListing:ownerUnlisted"),
        detail: null
      }), QU
    }

    function HU(UU) {
      return Math.max(1, Math.round(UU / 1024))
    }

    function MU(UU, XU, zU) {
      return UU instanceof yU.e && UU.errorMessageForUser ? UU.errorMessageForUser : XU(zU)
    }
  },
  7176: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    var cU = zU(61),
      yU = zU(42);

    function QU(UU, XU) {
      var zU;
      const [QU, AU] = (0, cU.useState)(null !== (zU = yU.k.getItem(UU)) && void 0 !== zU ? zU : XU);
      return [QU, XU => {
        yU.k.setItem(UU, XU), AU(XU)
      }]
    }
  },
  7158: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => FU,
      C: () => AU,
      E: () => cU,
      H: () => NU,
      I: () => EU,
      M: () => BU,
      N: () => YU,
      O: () => DU,
      c: () => pU,
      f: () => tU,
      h: () => aU,
      i: () => IU,
      l: () => GU,
      o: () => RU,
      r: () => oU,
      s: () => yU,
      v: () => ZU,
      z: () => QU
    });
    const cU = ["forest", "desert", "water", "night", "cave"];
    const yU = {
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
      QU = ["popular", "updated", "newest"],
      AU = 3,
      FU = 32,
      oU = 300;

    function DU(UU, XU) {
      return UU.slice(0, XU).replace(/[\uD800-\uDBFF]$/, "")
    }
    const EU = 64,
      YU = 512,
      NU = 18e5;

    function IU(UU) {
      const XU = UU,
        zU = null === XU || void 0 === XU ? void 0 : XU.files;
      return "number" === typeof(null === XU || void 0 === XU ? void 0 : XU.apiVersion) && "string" === typeof XU.name && (null === XU.author || "string" === typeof XU.author) && (void 0 === XU.keepCircleShadows || "boolean" === typeof XU.keepCircleShadows) && "object" === typeof zU && null !== zU && Object.values(zU).every((UU => "string" === typeof UU))
    }
    const pU = "Bloxdhub",
      aU = "https://bloxdhub.com/shaders";

    function tU(UU) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
    }
    const gU = "Screenshot generation failed.",
      kU = "Its screenshots couldn't be generated:";

    function GU(UU) {
      var XU;
      return UU === gU || null !== (XU = null === UU || void 0 === UU ? void 0 : UU.startsWith(kU)) && void 0 !== XU && XU
    }

    function BU(UU, XU) {
      return `shaderPacks/${UU}/${XU}.json`
    }

    function ZU(UU, XU, zU, cU) {
      return null === XU.renderId ? RU(UU, XU.baselineVersion, zU, cU) : `${UU}/${function(UU,XU,zU,cU){return`shaderPacks/${UU}/${XU}/${zU}-${cU}.webp`}(XU.packId,XU.renderId,zU,cU)}`
    }

    function RU(UU, XU, zU, cU) {
      return `${UU}/${function(UU,XU,zU){return`shaderPacks/baseline/${UU}/${XU}-${zU}.webp`}(XU,zU,cU)}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);