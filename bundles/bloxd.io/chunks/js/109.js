export const id = 109;
export const ids = [109, 397];
export const modules = {
  4988: (DD, zD, wD) => {
    var pD = wD(4997);

    function sD() {}

    function KD() {}
    KD.resetWarningCache = sD, DD.exports = function() {
      function DD(DD, zD, wD, sD, KD, rD) {
        if (rD !== pD) {
          var LD = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw LD.name = "Invariant Violation", LD
        }
      }

      function zD() {
        return DD
      }
      DD.isRequired = DD;
      var wD = {
        array: DD,
        bigint: DD,
        bool: DD,
        func: DD,
        number: DD,
        object: DD,
        string: DD,
        symbol: DD,
        any: DD,
        arrayOf: zD,
        element: DD,
        elementType: DD,
        instanceOf: zD,
        node: DD,
        objectOf: zD,
        oneOf: zD,
        oneOfType: zD,
        shape: zD,
        exact: zD,
        checkPropTypes: KD,
        resetWarningCache: sD
      };
      return wD.PropTypes = wD, wD
    }
  },
  4981: (DD, zD, wD) => {
    DD.exports = wD(4988)()
  },
  4997: DD => {
    DD.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6616: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => RD
    });
    var pD = wD(1511),
      sD = wD(1447),
      KD = wD(1200),
      rD = wD(6624),
      LD = wD(6601),
      cD = wD(6590),
      gD = wD(1096);

    function RD() {
      const {
        t: DD
      } = (0, KD.E)(), zD = (0, pD.useNavigatePreserveSearch)();
      return (0, LD.b)(), (0, gD.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, gD.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, gD.jsx)(sD.d, {
            onClick: () => {
              zD(cD.S)
            },
            children: DD("shaderPackListing:backToPacks")
          })
        }), (0, gD.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: DD("shaderPackListing:publishTitle")
        }), (0, gD.jsx)(rD.ShaderPackPublishForm, {
          existing: null,
          onPublished: DD => {
            zD((0, cD.Y)(DD.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6601: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => UD,
      d: () => fD,
      g: () => AD,
      k: () => ID
    });
    var pD = wD(58),
      sD = wD(6594),
      KD = wD(1495),
      rD = wD(6590),
      LD = wD(6603),
      cD = wD(1127);
    const gD = "shaderPackListingView",
      RD = "shaderPackListingFilterOpen";

    function AD() {
      var DD;
      const [zD, wD] = (0, LD.d)(gD, sD.H[0]);
      return [null !== (DD = sD.H.find((DD => DD === zD))) && void 0 !== DD ? DD : sD.H[0], wD]
    }

    function UD() {
      (0, pD.useEffect)((() => () => {
        window.location.pathname.startsWith(rD.S) || (0, rD.k)()
      }), [])
    }

    function fD() {
      return (0, LD.d)(RD, !1)
    }

    function ID() {
      const {
        userContext: DD,
        isUserContextUpdating: zD
      } = (0, cD.c)(), [wD, sD] = (0, pD.useState)(null), rD = (0, pD.useRef)(new Set);

      function LD(DD, zD) {
        sD((wD => {
          const pD = new Set(wD);
          return zD ? pD.add(DD) : pD.delete(DD), pD
        }))
      }
      return (0, pD.useEffect)((() => {
        if (zD) return;
        let wD = !1;
        return KD.d.getFavouriteShaderPacks(DD).then((DD => {
          wD || sD(new Set(DD))
        })).catch((DD => {
          console.error("Failed to get favourite shader packs", DD), wD || sD(new Set)
        })), () => {
          wD = !0
        }
      }), [DD, zD]), {
        isFavourite: DD => null === wD ? null : wD.has(DD),
        toggle: function(zD) {
          if (null === wD || rD.current.has(zD)) return;
          rD.current.add(zD);
          const pD = !wD.has(zD);
          LD(zD, pD), (pD ? KD.d.favouriteShaderPack(DD, zD) : KD.d.unfavouriteShaderPack(DD, zD)).catch((DD => {
            console.error("Failed to change a favourite shader pack", DD), LD(zD, !pD)
          })).finally((() => {
            rD.current.delete(zD)
          }))
        }
      }
    }
  },
  6590: (DD, zD, wD) => {
    wD.d(zD, {
      $: () => LD,
      B: () => CD,
      E: () => RD,
      F: () => TD,
      I: () => BD,
      L: () => ND,
      P: () => lD,
      S: () => rD,
      V: () => WD,
      Y: () => cD,
      c: () => nD,
      cb: () => SD,
      g: () => VD,
      gb: () => iD,
      i: () => GD,
      k: () => UD,
      kb: () => MD,
      lb: () => xD,
      m: () => AD,
      o: () => bD,
      q: () => fD,
      t: () => jD,
      u: () => ZD,
      w: () => ID,
      x: () => hD
    });
    var pD = wD(6594),
      sD = wD(157),
      KD = wD(4576);
    const rD = "/shader-packs",
      LD = `${rD}/publish`;

    function cD(DD) {
      return `${rD}/${encodeURIComponent(DD)}`
    }
    let gD = null;

    function RD(DD) {
      gD = DD
    }

    function AD() {
      return gD
    }

    function UD() {
      gD = null
    }

    function fD(DD) {
      return DD.playerHasRank("developer") || DD.playerHasRank("admin")
    }
    const ID = ["terrain", "water", "models", "sunShadows", "strict"],
      BD = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function GD(DD, zD) {
      return DD.withFeatures.includes(zD) ? "with" : DD.withoutFeatures.includes(zD) ? "without" : null
    }

    function hD(DD) {
      return null === DD ? "with" : "with" === DD ? "without" : null
    }

    function nD(DD) {
      return "with" === DD ? "only" : null === DD ? "include" : void 0
    }

    function MD(DD, zD) {
      const wD = GD(DD, zD),
        pD = DD => DD.filter((DD => DD !== zD));
      return {
        withFeatures: null === wD ? [...DD.withFeatures, zD] : pD(DD.withFeatures),
        withoutFeatures: "with" === wD ? [...DD.withoutFeatures, zD] : pD(DD.withoutFeatures)
      }
    }
    const OD = "section",
      JD = "sort",
      ED = "filters",
      QD = "q",
      XD = "banned",
      VD = "popular",
      PD = "strict";

    function CD(DD) {
      var zD, wD, sD;
      const rD = DD.get(OD),
        LD = (null !== (zD = DD.get(ED)) && void 0 !== zD ? zD : PD).split(","),
        cD = DD.get(XD);
      return {
        section: "favourites" === rD || "mine" === rD ? rD : "explore",
        sort: null !== (wD = pD.A.find((zD => zD === DD.get(JD)))) && void 0 !== wD ? wD : VD,
        withFeatures: ID.filter((DD => LD.includes(DD) && !LD.includes(`-${DD}`))),
        withoutFeatures: ID.filter((DD => LD.includes(`-${DD}`))),
        searchQuery: (null === (sD = DD.get(QD)) || void 0 === sD ? void 0 : sD.slice(0, pD.K)) || null,
        pageNumber: (0, KD.g)(DD.get(KD.d)),
        banned: "only" === cD ? "with" : "include" === cD ? null : "without"
      }
    }

    function xD(DD, zD) {
      var wD;
      const pD = dD(zD);
      (0, KD.j)(DD, OD, "explore" === zD.section ? null : zD.section), (0, KD.j)(DD, JD, zD.sort === VD ? null : zD.sort), (0, KD.j)(DD, ED, pD === PD ? null : pD), (0, KD.j)(DD, QD, zD.searchQuery), (0, KD.j)(DD, XD, null !== (wD = nD(zD.banned)) && void 0 !== wD ? wD : null), (0, KD.n)(DD, zD.pageNumber)
    }

    function TD(DD) {
      const zD = new URLSearchParams;
      return xD(zD, {
        section: "explore",
        sort: VD,
        withFeatures: "strict" === DD ? [DD] : [DD, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${rD}?${zD.toString()}`
    }

    function bD(DD) {
      return dD(DD) === PD
    }

    function jD(DD) {
      return null !== DD.searchQuery || "with" === DD.banned || dD(DD) !== PD
    }

    function dD(DD) {
      return ID.flatMap((zD => {
        const wD = GD(DD, zD);
        return "with" === wD ? [zD] : "without" === wD ? [`-${zD}`] : []
      })).join(",")
    }
    const SD = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      iD = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function lD(DD) {
      return Math.round(100 * Math.max(0, 1 - 1 / DD))
    }

    function WD(DD, zD, wD, sD) {
      const KD = [];
      DD.isBanned && KD.push({
        tone: "warning",
        text: sD("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: rD
      } = DD;
      if (null === DD.brokenError || rD && !rD.error || KD.push({
          tone: "warning",
          text: sD("shaderPackListing:ownerBroken"),
          detail: DD.brokenError
        }), null !== rD && void 0 !== rD && rD.error) KD.push({
        tone: "warning",
        text: sD(zD ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, pD.k)(rD.error) ? null : rD.error
      });
      else if (rD) {
        const DD = null === rD.renderNotBefore ? 0 : rD.renderNotBefore - wD,
          pD = String(Math.ceil(DD / 6e4)),
          LD = sD(zD ? DD > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : DD > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: pD
          });
        KD.push({
          tone: "info",
          text: LD,
          detail: null
        })
      }
      return DD.listed || KD.push({
        tone: "info",
        text: sD("shaderPackListing:ownerUnlisted"),
        detail: null
      }), KD
    }

    function ND(DD) {
      return Math.max(1, Math.round(DD / 1024))
    }

    function ZD(DD, zD, wD) {
      return DD instanceof sD.c && DD.errorMessageForUser ? DD.errorMessageForUser : zD(wD)
    }
  },
  6603: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(58),
      sD = wD(35);

    function KD(DD, zD) {
      var wD;
      const [KD, rD] = (0, pD.useState)(null !== (wD = sD.h.getItem(DD)) && void 0 !== wD ? wD : zD);
      return [KD, zD => {
        sD.h.setItem(DD, zD), rD(zD)
      }]
    }
  },
  6693: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      c: () => KD
    });
    var pD = wD(35);
    const sD = "shaderPack";
    async function KD() {
      var DD;
      let zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (DD = await pD.g.getItem(sD, zD)) && void 0 !== DD ? DD : null
    }
  },
  6594: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => KD,
      C: () => LD,
      G: () => rD,
      H: () => pD,
      I: () => UD,
      K: () => RD,
      M: () => OD,
      N: () => AD,
      R: () => gD,
      d: () => ID,
      f: () => GD,
      g: () => BD,
      i: () => fD,
      k: () => MD,
      l: () => ED,
      p: () => cD,
      s: () => sD,
      w: () => JD
    });
    const pD = ["forest", "desert", "water", "night", "cave"];
    const sD = {
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
      KD = ["popular", "updated", "newest"],
      rD = 3,
      LD = 32,
      cD = 300;

    function gD(DD, zD) {
      return DD.slice(0, zD).replace(/[\uD800-\uDBFF]$/, "")
    }
    const RD = 64,
      AD = 512,
      UD = 18e5;

    function fD(DD) {
      const zD = DD,
        wD = null === zD || void 0 === zD ? void 0 : zD.files;
      return "number" === typeof(null === zD || void 0 === zD ? void 0 : zD.apiVersion) && "string" === typeof zD.name && (null === zD.author || "string" === typeof zD.author) && (void 0 === zD.keepCircleShadows || "boolean" === typeof zD.keepCircleShadows) && "object" === typeof wD && null !== wD && Object.values(wD).every((DD => "string" === typeof DD))
    }
    const ID = "Bloxdhub",
      BD = "https://bloxdhub.com/shaders";

    function GD(DD) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
    }
    const hD = "Screenshot generation failed.",
      nD = "Its screenshots couldn't be generated:";

    function MD(DD) {
      var zD;
      return DD === hD || null !== (zD = null === DD || void 0 === DD ? void 0 : DD.startsWith(nD)) && void 0 !== zD && zD
    }

    function OD(DD, zD) {
      return `shaderPacks/${DD}/${zD}.json`
    }

    function JD(DD, zD, wD, pD) {
      return null === zD.renderId ? ED(DD, zD.baselineVersion, wD, pD) : `${DD}/${function(DD,zD,wD,pD){return`shaderPacks/${DD}/${zD}/${wD}-${pD}.webp`}(zD.packId,zD.renderId,wD,pD)}`
    }

    function ED(DD, zD, wD, pD) {
      return `${DD}/${function(DD,zD,wD){return`shaderPacks/baseline/${DD}/${zD}-${wD}.webp`}(zD,wD,pD)}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);