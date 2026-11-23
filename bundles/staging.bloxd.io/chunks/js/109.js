export const id = 109;
export const ids = [109, 397];
export const modules = {
  4911: (CC, zC, ZC) => {
    var QC = ZC(4915);

    function wC() {}

    function bC() {}
    bC.resetWarningCache = wC, CC.exports = function() {
      function CC(CC, zC, ZC, wC, bC, nC) {
        if (nC !== QC) {
          var fC = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw fC.name = "Invariant Violation", fC
        }
      }

      function zC() {
        return CC
      }
      CC.isRequired = CC;
      var ZC = {
        array: CC,
        bigint: CC,
        bool: CC,
        func: CC,
        number: CC,
        object: CC,
        string: CC,
        symbol: CC,
        any: CC,
        arrayOf: zC,
        element: CC,
        elementType: CC,
        instanceOf: zC,
        node: CC,
        objectOf: zC,
        oneOf: zC,
        oneOfType: zC,
        shape: zC,
        exact: zC,
        checkPropTypes: bC,
        resetWarningCache: wC
      };
      return ZC.PropTypes = ZC, ZC
    }
  },
  4903: (CC, zC, ZC) => {
    CC.exports = ZC(4911)()
  },
  4915: CC => {
    CC.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6585: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => FC
    });
    var QC = ZC(1453),
      wC = ZC(1388),
      bC = ZC(1143),
      nC = ZC(6594),
      fC = ZC(6570),
      oC = ZC(6556),
      qC = ZC(1056);

    function FC() {
      const {
        t: CC
      } = (0, bC.y)(), zC = (0, QC.useNavigatePreserveSearch)();
      return (0, fC.b)(), (0, qC.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, qC.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, qC.jsx)(wC.c, {
            onClick: () => {
              zC(oC.W)
            },
            children: CC("shaderPackListing:backToPacks")
          })
        }), (0, qC.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: CC("shaderPackListing:publishTitle")
        }), (0, qC.jsx)(nC.ShaderPackPublishForm, {
          existing: null,
          onPublished: CC => {
            zC((0, oC.$)(CC.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6570: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => NC,
      e: () => MC,
      f: () => WC,
      j: () => gC
    });
    var QC = ZC(48),
      wC = ZC(6560),
      bC = ZC(1439),
      nC = ZC(6556),
      fC = ZC(6572),
      oC = ZC(1076);
    const qC = "shaderPackListingView",
      FC = "shaderPackListingFilterOpen";

    function WC() {
      var CC;
      const [zC, ZC] = (0, fC.d)(qC, wC.B[0]);
      return [null !== (CC = wC.B.find((CC => CC === zC))) && void 0 !== CC ? CC : wC.B[0], ZC]
    }

    function NC() {
      (0, QC.useEffect)((() => () => {
        window.location.pathname.startsWith(nC.W) || (0, nC.m)()
      }), [])
    }

    function MC() {
      return (0, fC.d)(FC, !1)
    }

    function gC() {
      const {
        userContext: CC,
        isUserContextUpdating: zC
      } = (0, oC.e)(), [ZC, wC] = (0, QC.useState)(null), nC = (0, QC.useRef)(new Set);

      function fC(CC, zC) {
        wC((ZC => {
          const QC = new Set(ZC);
          return zC ? QC.add(CC) : QC.delete(CC), QC
        }))
      }
      return (0, QC.useEffect)((() => {
        if (zC) return;
        let ZC = !1;
        return bC.d.getFavouriteShaderPacks(CC).then((CC => {
          ZC || wC(new Set(CC))
        })).catch((CC => {
          console.error("Failed to get favourite shader packs", CC), ZC || wC(new Set)
        })), () => {
          ZC = !0
        }
      }), [CC, zC]), {
        isFavourite: CC => null === ZC ? null : ZC.has(CC),
        toggle: function(zC) {
          if (null === ZC || nC.current.has(zC)) return;
          nC.current.add(zC);
          const QC = !ZC.has(zC);
          fC(zC, QC), (QC ? bC.d.favouriteShaderPack(CC, zC) : bC.d.unfavouriteShaderPack(CC, zC)).catch((CC => {
            console.error("Failed to change a favourite shader pack", CC), fC(zC, !QC)
          })).finally((() => {
            nC.current.delete(zC)
          }))
        }
      }
    }
  },
  6556: (CC, zC, ZC) => {
    ZC.d(zC, {
      $: () => oC,
      B: () => gC,
      E: () => PC,
      I: () => hC,
      J: () => FC,
      M: () => YC,
      Q: () => SC,
      S: () => uC,
      V: () => XC,
      W: () => nC,
      X: () => cC,
      ab: () => fC,
      db: () => EC,
      e: () => GC,
      f: () => vC,
      gb: () => lC,
      i: () => pC,
      ib: () => RC,
      jb: () => KC,
      m: () => NC,
      q: () => WC,
      r: () => dC,
      u: () => MC,
      w: () => mC,
      z: () => rC
    });
    var QC = ZC(6560),
      wC = ZC(134),
      bC = ZC(4496);
    const nC = "/shader-packs",
      fC = `${nC}/publish`;

    function oC(CC) {
      return `${nC}/${encodeURIComponent(CC)}`
    }
    let qC = null;

    function FC(CC) {
      qC = CC
    }

    function WC() {
      return qC
    }

    function NC() {
      qC = null
    }

    function MC(CC) {
      return CC.playerHasRank("developer") || CC.playerHasRank("admin")
    }
    const gC = ["terrain", "water", "models", "sunShadows", "strict"],
      SC = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function pC(CC, zC) {
      return CC.withFeatures.includes(zC) ? "with" : CC.withoutFeatures.includes(zC) ? "without" : null
    }

    function PC(CC) {
      return null === CC ? "with" : "with" === CC ? "without" : null
    }

    function GC(CC) {
      return "with" === CC ? "only" : null === CC ? "include" : void 0
    }

    function RC(CC, zC) {
      const ZC = pC(CC, zC),
        QC = CC => CC.filter((CC => CC !== zC));
      return {
        withFeatures: null === ZC ? [...CC.withFeatures, zC] : QC(CC.withFeatures),
        withoutFeatures: "with" === ZC ? [...CC.withoutFeatures, zC] : QC(CC.withoutFeatures)
      }
    }
    const AC = "section",
      xC = "sort",
      JC = "filters",
      IC = "q",
      iC = "banned",
      vC = "popular",
      eC = "strict";

    function hC(CC) {
      var zC, ZC, wC;
      const nC = CC.get(AC),
        fC = (null !== (zC = CC.get(JC)) && void 0 !== zC ? zC : eC).split(","),
        oC = CC.get(iC);
      return {
        section: "favourites" === nC || "mine" === nC ? nC : "explore",
        sort: null !== (ZC = QC.x.find((zC => zC === CC.get(xC)))) && void 0 !== ZC ? ZC : vC,
        withFeatures: gC.filter((CC => fC.includes(CC) && !fC.includes(`-${CC}`))),
        withoutFeatures: gC.filter((CC => fC.includes(`-${CC}`))),
        searchQuery: (null === (wC = CC.get(IC)) || void 0 === wC ? void 0 : wC.slice(0, QC.G)) || null,
        pageNumber: (0, bC.f)(CC.get(bC.b)),
        banned: "only" === oC ? "with" : "include" === oC ? null : "without"
      }
    }

    function KC(CC, zC) {
      var ZC;
      const QC = HC(zC);
      (0, bC.i)(CC, AC, "explore" === zC.section ? null : zC.section), (0, bC.i)(CC, xC, zC.sort === vC ? null : zC.sort), (0, bC.i)(CC, JC, QC === eC ? null : QC), (0, bC.i)(CC, IC, zC.searchQuery), (0, bC.i)(CC, iC, null !== (ZC = GC(zC.banned)) && void 0 !== ZC ? ZC : null), (0, bC.l)(CC, zC.pageNumber)
    }

    function YC(CC) {
      const zC = new URLSearchParams;
      return KC(zC, {
        section: "explore",
        sort: vC,
        withFeatures: "strict" === CC ? [CC] : [CC, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${nC}?${zC.toString()}`
    }

    function dC(CC) {
      return HC(CC) === eC
    }

    function mC(CC) {
      return null !== CC.searchQuery || "with" === CC.banned || HC(CC) !== eC
    }

    function HC(CC) {
      return gC.flatMap((zC => {
        const ZC = pC(CC, zC);
        return "with" === ZC ? [zC] : "without" === ZC ? [`-${zC}`] : []
      })).join(",")
    }
    const EC = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      lC = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function XC(CC) {
      return Math.round(100 * Math.max(0, 1 - 1 / CC))
    }

    function cC(CC, zC, ZC, wC) {
      const bC = [];
      CC.isBanned && bC.push({
        tone: "warning",
        text: wC("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: nC
      } = CC;
      if (null === CC.brokenError || nC && !nC.error || bC.push({
          tone: "warning",
          text: wC("shaderPackListing:ownerBroken"),
          detail: CC.brokenError
        }), null !== nC && void 0 !== nC && nC.error) bC.push({
        tone: "warning",
        text: wC(zC ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, QC.i)(nC.error) ? null : nC.error
      });
      else if (nC) {
        const CC = null === nC.renderNotBefore ? 0 : nC.renderNotBefore - ZC,
          QC = String(Math.ceil(CC / 6e4)),
          fC = wC(zC ? CC > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : CC > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: QC
          });
        bC.push({
          tone: "info",
          text: fC,
          detail: null
        })
      }
      return CC.listed || bC.push({
        tone: "info",
        text: wC("shaderPackListing:ownerUnlisted"),
        detail: null
      }), bC
    }

    function uC(CC) {
      return Math.max(1, Math.round(CC / 1024))
    }

    function rC(CC, zC, ZC) {
      return CC instanceof wC.d && CC.errorMessageForUser ? CC.errorMessageForUser : zC(ZC)
    }
  },
  6572: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(48),
      wC = ZC(38);

    function bC(CC, zC) {
      var ZC;
      const [bC, nC] = (0, QC.useState)(null !== (ZC = wC.i.getItem(CC)) && void 0 !== ZC ? ZC : zC);
      return [bC, zC => {
        wC.i.setItem(CC, zC), nC(zC)
      }]
    }
  },
  6660: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      e: () => bC
    });
    var QC = ZC(38);
    const wC = "shaderPack";
    async function bC() {
      var CC;
      let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
    }
  },
  6560: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => nC,
      B: () => QC,
      E: () => NC,
      G: () => FC,
      J: () => AC,
      L: () => WC,
      P: () => qC,
      b: () => gC,
      e: () => pC,
      f: () => SC,
      g: () => MC,
      i: () => RC,
      m: () => JC,
      o: () => oC,
      s: () => wC,
      w: () => xC,
      x: () => bC,
      y: () => fC
    });
    const QC = ["forest", "desert", "water", "night", "cave"];
    const wC = {
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
      bC = ["popular", "updated", "newest"],
      nC = 3,
      fC = 32,
      oC = 300;

    function qC(CC, zC) {
      return CC.slice(0, zC).replace(/[\uD800-\uDBFF]$/, "")
    }
    const FC = 64,
      WC = 512,
      NC = 18e5;

    function MC(CC) {
      const zC = CC,
        ZC = null === zC || void 0 === zC ? void 0 : zC.files;
      return "number" === typeof(null === zC || void 0 === zC ? void 0 : zC.apiVersion) && "string" === typeof zC.name && (null === zC.author || "string" === typeof zC.author) && (void 0 === zC.keepCircleShadows || "boolean" === typeof zC.keepCircleShadows) && "object" === typeof ZC && null !== ZC && Object.values(ZC).every((CC => "string" === typeof CC))
    }
    const gC = "Bloxdhub",
      SC = "https://bloxdhub.com/shaders";

    function pC(CC) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(CC)}`
    }
    const PC = "Screenshot generation failed.",
      GC = "Its screenshots couldn't be generated:";

    function RC(CC) {
      var zC;
      return CC === PC || null !== (zC = null === CC || void 0 === CC ? void 0 : CC.startsWith(GC)) && void 0 !== zC && zC
    }

    function AC(CC, zC) {
      return `shaderPacks/${CC}/${zC}.json`
    }

    function xC(CC, zC, ZC, QC) {
      return null === zC.renderId ? JC(CC, zC.baselineVersion, ZC, QC) : `${CC}/${function(CC,zC,ZC,QC){return`shaderPacks/${CC}/${zC}/${ZC}-${QC}.webp`}(zC.packId,zC.renderId,ZC,QC)}`
    }

    function JC(CC, zC, ZC, QC) {
      return `${CC}/${function(CC,zC,ZC){return`shaderPacks/baseline/${CC}/${zC}-${ZC}.webp`}(zC,ZC,QC)}`
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);