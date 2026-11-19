export const id = 122;
export const ids = [122];
export const modules = {
  6118: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(1211),
      RY = DY(1125);

    function OY(YY) {
      let {
        item: rY,
        className: DY
      } = YY;
      const {
        t: FY
      } = (0, IY.C)();
      return null === rY.renderId || rY.previewsOutdated ? (0, RY.jsx)("div", {
        className: AY()("ShaderPackPreviewsNotice", DY),
        children: (0, RY.jsx)("span", {
          children: FY(null === rY.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6136: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(6112),
      RY = DY(1211),
      OY = DY(6108),
      gY = DY(1125);

    function aY(YY) {
      let {
        selected: rY,
        onSelect: DY,
        imageUrl: FY
      } = YY;
      const {
        t: aY
      } = (0, RY.C)();
      return (0, gY.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: IY.J.map((YY => {
          const IY = FY(YY);
          return (0, gY.jsxs)("button", {
            type: "button",
            "aria-pressed": YY === rY,
            className: AY()("ShaderPackViewOption", {
              Selected: YY === rY
            }),
            onClick: () => {
              DY(YY)
            },
            children: [null !== IY && (0, gY.jsx)("img", {
              src: IY,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, gY.jsx)("span", {
              className: "SmallTextBold",
              children: aY(OY.eb[YY])
            })]
          }, YY)
        }))
      })
    }
  },
  6123: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      e: () => iY,
      f: () => uY,
      h: () => yY
    });
    var FY = DY(61),
      AY = DY(6112),
      IY = DY(1471),
      RY = DY(6108),
      OY = DY(6128),
      gY = DY(1152);
    const aY = "shaderPackListingView",
      vY = "shaderPackListingFilterOpen";

    function uY() {
      var YY;
      const [rY, DY] = (0, OY.e)(aY, AY.J[0]);
      return [null !== (YY = AY.J.find((YY => YY === rY))) && void 0 !== YY ? YY : AY.J[0], DY]
    }

    function sY() {
      (0, FY.useEffect)((() => () => {
        window.location.pathname.startsWith(RY.R) || (0, RY.l)()
      }), [])
    }

    function iY() {
      return (0, OY.e)(vY, !1)
    }

    function yY() {
      const {
        userContext: YY,
        isUserContextUpdating: rY
      } = (0, gY.d)(), [DY, AY] = (0, FY.useState)(null), RY = (0, FY.useRef)(new Set);

      function OY(YY, rY) {
        AY((DY => {
          const FY = new Set(DY);
          return rY ? FY.add(YY) : FY.delete(YY), FY
        }))
      }
      return (0, FY.useEffect)((() => {
        if (rY) return;
        let DY = !1;
        return IY.e.getFavouriteShaderPacks(YY).then((YY => {
          DY || AY(new Set(YY))
        })).catch((YY => {
          console.error("Failed to get favourite shader packs", YY), DY || AY(new Set)
        })), () => {
          DY = !0
        }
      }), [YY, rY]), {
        isFavourite: YY => null === DY ? null : DY.has(YY),
        toggle: function(rY) {
          if (null === DY || RY.current.has(rY)) return;
          RY.current.add(rY);
          const FY = !DY.has(rY);
          OY(rY, FY), (FY ? IY.e.favouriteShaderPack(YY, rY) : IY.e.unfavouriteShaderPack(YY, rY)).catch((YY => {
            console.error("Failed to change a favourite shader pack", YY), OY(rY, !FY)
          })).finally((() => {
            RY.current.delete(rY)
          }))
        }
      }
    }
  },
  6108: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => WY,
      C: () => cY,
      E: () => vY,
      I: () => HY,
      J: () => QY,
      N: () => JY,
      Q: () => hY,
      R: () => RY,
      V: () => dY,
      Y: () => gY,
      ab: () => OY,
      bb: () => fY,
      e: () => EY,
      eb: () => jY,
      fb: () => mY,
      h: () => NY,
      j: () => oY,
      jb: () => KY,
      l: () => sY,
      o: () => uY,
      q: () => zY,
      s: () => iY,
      u: () => ZY,
      y: () => MY,
      z: () => yY
    });
    var FY = DY(6112),
      AY = DY(183),
      IY = DY(4122);
    const RY = "/shader-packs",
      OY = `${RY}/publish`;

    function gY(YY) {
      return `${RY}/${encodeURIComponent(YY)}`
    }
    let aY = null;

    function vY(YY) {
      aY = YY
    }

    function uY() {
      return aY
    }

    function sY() {
      aY = null
    }

    function iY(YY) {
      return YY.playerHasRank("developer") || YY.playerHasRank("admin")
    }
    const yY = ["terrain", "water", "models", "sunShadows", "strict"],
      QY = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function oY(YY, rY) {
      return YY.withFeatures.includes(rY) ? "with" : YY.withoutFeatures.includes(rY) ? "without" : null
    }

    function WY(YY) {
      return null === YY ? "with" : "with" === YY ? "without" : null
    }

    function EY(YY) {
      return "with" === YY ? "only" : null === YY ? "include" : void 0
    }

    function mY(YY, rY) {
      const DY = oY(YY, rY),
        FY = YY => YY.filter((YY => YY !== rY));
      return {
        withFeatures: null === DY ? [...YY.withFeatures, rY] : FY(YY.withFeatures),
        withoutFeatures: "with" === DY ? [...YY.withoutFeatures, rY] : FY(YY.withoutFeatures)
      }
    }
    const VY = "section",
      SY = "sort",
      lY = "filters",
      TY = "q",
      eY = "banned",
      NY = "popular",
      BY = "strict";

    function cY(YY) {
      var rY, DY, AY;
      const RY = YY.get(VY),
        OY = (null !== (rY = YY.get(lY)) && void 0 !== rY ? rY : BY).split(","),
        gY = YY.get(eY);
      return {
        section: "favourites" === RY || "mine" === RY ? RY : "explore",
        sort: null !== (DY = FY.A.find((rY => rY === YY.get(SY)))) && void 0 !== DY ? DY : NY,
        withFeatures: yY.filter((YY => OY.includes(YY) && !OY.includes(`-${YY}`))),
        withoutFeatures: yY.filter((YY => OY.includes(`-${YY}`))),
        searchQuery: (null === (AY = YY.get(TY)) || void 0 === AY ? void 0 : AY.slice(0, FY.L)) || null,
        pageNumber: (0, IY.i)(YY.get(IY.e)),
        banned: "only" === gY ? "with" : "include" === gY ? null : "without"
      }
    }

    function KY(YY, rY) {
      var DY;
      const FY = CY(rY);
      (0, IY.l)(YY, VY, "explore" === rY.section ? null : rY.section), (0, IY.l)(YY, SY, rY.sort === NY ? null : rY.sort), (0, IY.l)(YY, lY, FY === BY ? null : FY), (0, IY.l)(YY, TY, rY.searchQuery), (0, IY.l)(YY, eY, null !== (DY = EY(rY.banned)) && void 0 !== DY ? DY : null), (0, IY.n)(YY, rY.pageNumber)
    }

    function HY(YY) {
      const rY = new URLSearchParams;
      return KY(rY, {
        section: "explore",
        sort: NY,
        withFeatures: "strict" === YY ? [YY] : [YY, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${RY}?${rY.toString()}`
    }

    function zY(YY) {
      return CY(YY) === BY
    }

    function ZY(YY) {
      return null !== YY.searchQuery || "with" === YY.banned || CY(YY) !== BY
    }

    function CY(YY) {
      return yY.flatMap((rY => {
        const DY = oY(YY, rY);
        return "with" === DY ? [rY] : "without" === DY ? [`-${rY}`] : []
      })).join(",")
    }
    const fY = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      jY = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function hY(YY) {
      return Math.round(100 * Math.max(0, 1 - 1 / YY))
    }

    function dY(YY, rY, DY, AY) {
      const IY = [];
      YY.isBanned && IY.push({
        tone: "warning",
        text: AY("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: RY
      } = YY;
      if (null === YY.brokenError || RY && !RY.error || IY.push({
          tone: "warning",
          text: AY("shaderPackListing:ownerBroken"),
          detail: YY.brokenError
        }), null !== RY && void 0 !== RY && RY.error) IY.push({
        tone: "warning",
        text: AY(rY ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, FY.m)(RY.error) ? null : RY.error
      });
      else if (RY) {
        const YY = null === RY.renderNotBefore ? 0 : RY.renderNotBefore - DY,
          FY = String(Math.ceil(YY / 6e4)),
          OY = AY(rY ? YY > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : YY > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: FY
          });
        IY.push({
          tone: "info",
          text: OY,
          detail: null
        })
      }
      return YY.listed || IY.push({
        tone: "info",
        text: AY("shaderPackListing:ownerUnlisted"),
        detail: null
      }), IY
    }

    function JY(YY) {
      return Math.max(1, Math.round(YY / 1024))
    }

    function MY(YY, rY, DY) {
      return YY instanceof AY.e && YY.errorMessageForUser ? YY.errorMessageForUser : rY(DY)
    }
  },
  6128: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(61),
      AY = DY(40);

    function IY(YY, rY) {
      var DY;
      const [IY, RY] = (0, FY.useState)(null !== (DY = AY.m.getItem(YY)) && void 0 !== DY ? DY : rY);
      return [IY, rY => {
        AY.m.setItem(YY, rY), RY(rY)
      }]
    }
  },
  6112: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => IY,
      D: () => OY,
      G: () => RY,
      J: () => FY,
      K: () => sY,
      L: () => vY,
      P: () => mY,
      S: () => uY,
      V: () => aY,
      d: () => iY,
      e: () => QY,
      i: () => yY,
      m: () => EY,
      q: () => SY,
      t: () => gY,
      u: () => AY,
      x: () => VY
    });
    const FY = ["forest", "desert", "water", "night", "cave"];
    const AY = {
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
      IY = ["popular", "updated", "newest"],
      RY = 3,
      OY = 32,
      gY = 300;

    function aY(YY, rY) {
      return YY.slice(0, rY).replace(/[\uD800-\uDBFF]$/, "")
    }
    const vY = 64,
      uY = 512,
      sY = 18e5;
    const iY = "Bloxdhub",
      yY = "https://bloxdhub.com/shaders";

    function QY(YY) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(YY)}`
    }
    const oY = "Screenshot generation failed.",
      WY = "Its screenshots couldn't be generated:";

    function EY(YY) {
      var rY;
      return YY === oY || null !== (rY = null === YY || void 0 === YY ? void 0 : YY.startsWith(WY)) && void 0 !== rY && rY
    }

    function mY(YY, rY) {
      return `shaderPacks/${YY}/${rY}.json`
    }

    function VY(YY, rY, DY, FY) {
      return null === rY.renderId ? SY(YY, rY.baselineVersion, DY, FY) : `${YY}/${function(YY,rY,DY,FY){return`shaderPacks/${YY}/${rY}/${DY}-${FY}.webp`}(rY.packId,rY.renderId,DY,FY)}`
    }

    function SY(YY, rY, DY, FY) {
      return `${YY}/${function(YY,rY,DY){return`shaderPacks/baseline/${YY}/${rY}-${DY}.webp`}(rY,DY,FY)}`
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);