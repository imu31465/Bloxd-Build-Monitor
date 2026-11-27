export const id = 130;
export const ids = [130, 715];
export const modules = {
  6015: (RR, JR, GR) => {
    var yR = GR(6021);

    function tR() {}

    function uR() {}
    uR.resetWarningCache = tR, RR.exports = function() {
      function RR(RR, JR, GR, tR, uR, ZR) {
        if (ZR !== yR) {
          var qR = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw qR.name = "Invariant Violation", qR
        }
      }

      function JR() {
        return RR
      }
      RR.isRequired = RR;
      var GR = {
        array: RR,
        bigint: RR,
        bool: RR,
        func: RR,
        number: RR,
        object: RR,
        string: RR,
        symbol: RR,
        any: RR,
        arrayOf: JR,
        element: RR,
        elementType: RR,
        instanceOf: JR,
        node: RR,
        objectOf: JR,
        oneOf: JR,
        oneOfType: JR,
        shape: JR,
        exact: JR,
        checkPropTypes: uR,
        resetWarningCache: tR
      };
      return GR.PropTypes = GR, GR
    }
  },
  6008: (RR, JR, GR) => {
    RR.exports = GR(6015)()
  },
  6021: RR => {
    RR.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7731: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => VR
    });
    var yR = GR(1663),
      tR = GR(1590),
      uR = GR(1270),
      ZR = GR(7736),
      qR = GR(7714),
      iR = GR(7697),
      fR = GR(1378);

    function VR() {
      const {
        t: RR
      } = (0, uR.A)(), JR = (0, yR.useNavigatePreserveSearch)();
      return (0, qR.d)(), (0, fR.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, fR.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, fR.jsx)(tR.d, {
            onClick: () => {
              JR(iR.Z)
            },
            children: RR("shaderPackListing:backToPacks")
          })
        }), (0, fR.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: RR("shaderPackListing:publishTitle")
        }), (0, fR.jsx)(ZR.ShaderPackPublishForm, {
          existing: null,
          onPublished: RR => {
            JR((0, iR.ab)(RR.packId), {
              replace: !0
            })
          }
        })]
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
  7802: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      d: () => uR
    });
    var yR = GR(46);
    const tR = "shaderPack";
    async function uR() {
      var RR;
      let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (RR = await yR.g.getItem(tR, JR)) && void 0 !== RR ? RR : null
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