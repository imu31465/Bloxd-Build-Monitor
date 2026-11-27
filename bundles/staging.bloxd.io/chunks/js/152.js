export const id = 152;
export const ids = [152];
export const modules = {
  7709: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1270),
      ZR = GR(1378);

    function qR(RR) {
      let {
        item: JR,
        className: GR
      } = RR;
      const {
        t: yR
      } = (0, uR.A)();
      return null === JR.renderId || JR.previewsOutdated ? (0, ZR.jsx)("div", {
        className: tR()("ShaderPackPreviewsNotice", GR),
        children: (0, ZR.jsx)("span", {
          children: yR(null === JR.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  7725: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(7702),
      ZR = GR(1270),
      qR = GR(7697),
      iR = GR(1378);

    function fR(RR) {
      let {
        selected: JR,
        onSelect: GR,
        imageUrl: yR
      } = RR;
      const {
        t: fR
      } = (0, ZR.A)();
      return (0, iR.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: uR.B.map((RR => {
          const uR = yR(RR);
          return (0, iR.jsxs)("button", {
            type: "button",
            "aria-pressed": RR === JR,
            className: tR()("ShaderPackViewOption", {
              Selected: RR === JR
            }),
            onClick: () => {
              GR(RR)
            },
            children: [null !== uR && (0, iR.jsx)("img", {
              src: uR,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, iR.jsx)("span", {
              className: "SmallTextBold",
              children: fR(qR.hb[RR])
            })]
          }, RR)
        }))
      })
    }
  },
  7714: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => wR,
      e: () => rR,
      h: () => KR,
      k: () => eR
    });
    var yR = GR(66),
      tR = GR(7702),
      uR = GR(1647),
      ZR = GR(7697),
      qR = GR(7717),
      iR = GR(1196);
    const fR = "shaderPackListingView",
      VR = "shaderPackListingFilterOpen";

    function KR() {
      var RR;
      const [JR, GR] = (0, qR.e)(fR, tR.B[0]);
      return [null !== (RR = tR.B.find((RR => RR === JR))) && void 0 !== RR ? RR : tR.B[0], GR]
    }

    function wR() {
      (0, yR.useEffect)((() => () => {
        window.location.pathname.startsWith(ZR.Z) || (0, ZR.p)()
      }), [])
    }

    function rR() {
      return (0, qR.e)(VR, !1)
    }

    function eR() {
      const {
        userContext: RR,
        isUserContextUpdating: JR
      } = (0, iR.d)(), [GR, tR] = (0, yR.useState)(null), ZR = (0, yR.useRef)(new Set);

      function qR(RR, JR) {
        tR((GR => {
          const yR = new Set(GR);
          return JR ? yR.add(RR) : yR.delete(RR), yR
        }))
      }
      return (0, yR.useEffect)((() => {
        if (JR) return;
        let GR = !1;
        return uR.c.getFavouriteShaderPacks(RR).then((RR => {
          GR || tR(new Set(RR))
        })).catch((RR => {
          console.error("Failed to get favourite shader packs", RR), GR || tR(new Set)
        })), () => {
          GR = !0
        }
      }), [RR, JR]), {
        isFavourite: RR => null === GR ? null : GR.has(RR),
        toggle: function(JR) {
          if (null === GR || ZR.current.has(JR)) return;
          ZR.current.add(JR);
          const yR = !GR.has(JR);
          qR(JR, yR), (yR ? uR.c.favouriteShaderPack(RR, JR) : uR.c.unfavouriteShaderPack(RR, JR)).catch((RR => {
            console.error("Failed to change a favourite shader pack", RR), qR(JR, !yR)
          })).finally((() => {
            ZR.current.delete(JR)
          }))
        }
      }
    }
  },
  7697: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => xR,
      F: () => IR,
      I: () => eR,
      K: () => nR,
      M: () => gR,
      Q: () => VR,
      R: () => vR,
      T: () => aR,
      V: () => PR,
      W: () => oR,
      Z: () => ZR,
      _: () => cR,
      ab: () => iR,
      bb: () => qR,
      db: () => DR,
      e: () => UR,
      h: () => lR,
      hb: () => HR,
      jb: () => WR,
      kb: () => bR,
      l: () => LR,
      p: () => wR,
      s: () => KR,
      u: () => OR,
      x: () => rR
    });
    var yR = GR(7702),
      tR = GR(163),
      uR = GR(5368);
    const ZR = "/shader-packs",
      qR = `${ZR}/publish`;

    function iR(RR) {
      return `${ZR}/${encodeURIComponent(RR)}`
    }
    let fR = null;

    function VR(RR) {
      fR = RR
    }

    function KR() {
      return fR
    }

    function wR() {
      fR = null
    }

    function rR(RR) {
      return RR.playerHasRank("developer") || RR.playerHasRank("admin")
    }
    const eR = ["terrain", "water", "models", "sunShadows", "strict"],
      aR = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function LR(RR, JR) {
      return RR.withFeatures.includes(JR) ? "with" : RR.withoutFeatures.includes(JR) ? "without" : null
    }

    function nR(RR) {
      return null === RR ? "with" : "with" === RR ? "without" : null
    }

    function UR(RR) {
      return "with" === RR ? "only" : null === RR ? "include" : void 0
    }

    function WR(RR, JR) {
      const GR = LR(RR, JR),
        yR = RR => RR.filter((RR => RR !== JR));
      return {
        withFeatures: null === GR ? [...RR.withFeatures, JR] : yR(RR.withFeatures),
        withoutFeatures: "with" === GR ? [...RR.withoutFeatures, JR] : yR(RR.withoutFeatures)
      }
    }
    const AR = "section",
      CR = "sort",
      XR = "filters",
      MR = "q",
      BR = "banned",
      lR = "popular",
      pR = "strict";

    function gR(RR) {
      var JR, GR, tR;
      const ZR = RR.get(AR),
        qR = (null !== (JR = RR.get(XR)) && void 0 !== JR ? JR : pR).split(","),
        iR = RR.get(BR);
      return {
        section: "favourites" === ZR || "mine" === ZR ? ZR : "explore",
        sort: null !== (GR = yR.v.find((JR => JR === RR.get(CR)))) && void 0 !== GR ? GR : lR,
        withFeatures: eR.filter((RR => qR.includes(RR) && !qR.includes(`-${RR}`))),
        withoutFeatures: eR.filter((RR => qR.includes(`-${RR}`))),
        searchQuery: (null === (tR = RR.get(MR)) || void 0 === tR ? void 0 : tR.slice(0, yR.E)) || null,
        pageNumber: (0, uR.g)(RR.get(uR.c)),
        banned: "only" === iR ? "with" : "include" === iR ? null : "without"
      }
    }

    function bR(RR, JR) {
      var GR;
      const yR = NR(JR);
      (0, uR.h)(RR, AR, "explore" === JR.section ? null : JR.section), (0, uR.h)(RR, CR, JR.sort === lR ? null : JR.sort), (0, uR.h)(RR, XR, yR === pR ? null : yR), (0, uR.h)(RR, MR, JR.searchQuery), (0, uR.h)(RR, BR, null !== (GR = UR(JR.banned)) && void 0 !== GR ? GR : null), (0, uR.l)(RR, JR.pageNumber)
    }

    function vR(RR) {
      const JR = new URLSearchParams;
      return bR(JR, {
        section: "explore",
        sort: lR,
        withFeatures: "strict" === RR ? [RR] : [RR, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${ZR}?${JR.toString()}`
    }

    function OR(RR) {
      return NR(RR) === pR
    }

    function xR(RR) {
      return null !== RR.searchQuery || "with" === RR.banned || NR(RR) !== pR
    }

    function NR(RR) {
      return eR.flatMap((JR => {
        const GR = LR(RR, JR);
        return "with" === GR ? [JR] : "without" === GR ? [`-${JR}`] : []
      })).join(",")
    }
    const DR = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      HR = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function oR(RR) {
      return Math.round(100 * Math.max(0, 1 - 1 / RR))
    }

    function cR(RR, JR, GR, tR) {
      const uR = [];
      RR.isBanned && uR.push({
        tone: "warning",
        text: tR("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: ZR
      } = RR;
      if (null === RR.brokenError || ZR && !ZR.error || uR.push({
          tone: "warning",
          text: tR("shaderPackListing:ownerBroken"),
          detail: RR.brokenError
        }), null !== ZR && void 0 !== ZR && ZR.error) uR.push({
        tone: "warning",
        text: tR(JR ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, yR.n)(ZR.error) ? null : ZR.error
      });
      else if (ZR) {
        const RR = null === ZR.renderNotBefore ? 0 : ZR.renderNotBefore - GR,
          yR = String(Math.ceil(RR / 6e4)),
          qR = tR(JR ? RR > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : RR > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: yR
          });
        uR.push({
          tone: "info",
          text: qR,
          detail: null
        })
      }
      return RR.listed || uR.push({
        tone: "info",
        text: tR("shaderPackListing:ownerUnlisted"),
        detail: null
      }), uR
    }

    function PR(RR) {
      return Math.max(1, Math.round(RR / 1024))
    }

    function IR(RR, JR, GR) {
      return RR instanceof tR.d && RR.errorMessageForUser ? RR.errorMessageForUser : JR(GR)
    }
  },
  7717: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(66),
      tR = GR(46);

    function uR(RR, JR) {
      var GR;
      const [uR, ZR] = (0, yR.useState)(null !== (GR = tR.i.getItem(RR)) && void 0 !== GR ? GR : JR);
      return [uR, JR => {
        tR.i.setItem(RR, JR), ZR(JR)
      }]
    }
  },
  7702: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => yR,
      C: () => wR,
      E: () => VR,
      I: () => AR,
      M: () => KR,
      N: () => fR,
      d: () => eR,
      e: () => LR,
      i: () => aR,
      j: () => rR,
      n: () => WR,
      p: () => XR,
      q: () => iR,
      s: () => tR,
      u: () => CR,
      v: () => uR,
      w: () => qR,
      z: () => ZR
    });
    const yR = ["forest", "desert", "water", "night", "cave"];
    const tR = {
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
      uR = ["popular", "updated", "newest"],
      ZR = 3,
      qR = 32,
      iR = 300;

    function fR(RR, JR) {
      return RR.slice(0, JR).replace(/[\uD800-\uDBFF]$/, "")
    }
    const VR = 64,
      KR = 512,
      wR = 18e5;

    function rR(RR) {
      const JR = RR,
        GR = null === JR || void 0 === JR ? void 0 : JR.files;
      return "number" === typeof(null === JR || void 0 === JR ? void 0 : JR.apiVersion) && "string" === typeof JR.name && (null === JR.author || "string" === typeof JR.author) && (void 0 === JR.keepCircleShadows || "boolean" === typeof JR.keepCircleShadows) && "object" === typeof GR && null !== GR && Object.values(GR).every((RR => "string" === typeof RR))
    }
    const eR = "Bloxdhub",
      aR = "https://bloxdhub.com/shaders";

    function LR(RR) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(RR)}`
    }
    const nR = "Screenshot generation failed.",
      UR = "Its screenshots couldn't be generated:";

    function WR(RR) {
      var JR;
      return RR === nR || null !== (JR = null === RR || void 0 === RR ? void 0 : RR.startsWith(UR)) && void 0 !== JR && JR
    }

    function AR(RR, JR) {
      return `shaderPacks/${RR}/${JR}.json`
    }

    function CR(RR, JR, GR, yR) {
      return null === JR.renderId ? XR(RR, JR.baselineVersion, GR, yR) : `${RR}/${function(RR,JR,GR,yR){return`shaderPacks/${RR}/${JR}/${GR}-${yR}.webp`}(JR.packId,JR.renderId,GR,yR)}`
    }

    function XR(RR, JR, GR, yR) {
      return `${RR}/${function(RR,JR,GR){return`shaderPacks/baseline/${RR}/${JR}-${GR}.webp`}(JR,GR,yR)}`
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);