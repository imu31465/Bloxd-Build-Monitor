export const id = 121;
export const ids = [121];
export const modules = {
  6303: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(1192),
      fD = cD(1093);

    function bD(DD) {
      let {
        item: CD,
        className: cD
      } = DD;
      const {
        t: ID
      } = (0, iD.F)();
      return null === CD.renderId || CD.previewsOutdated ? (0, fD.jsx)("div", {
        className: pD()("ShaderPackPreviewsNotice", cD),
        children: (0, fD.jsx)("span", {
          children: ID(null === CD.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6325: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(6298),
      fD = cD(1192),
      bD = cD(6291),
      QD = cD(1093);

    function wD(DD) {
      let {
        selected: CD,
        onSelect: cD,
        imageUrl: ID
      } = DD;
      const {
        t: wD
      } = (0, fD.F)();
      return (0, QD.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: iD.H.map((DD => {
          const iD = ID(DD);
          return (0, QD.jsxs)("button", {
            type: "button",
            "aria-pressed": DD === CD,
            className: pD()("ShaderPackViewOption", {
              Selected: DD === CD
            }),
            onClick: () => {
              cD(DD)
            },
            children: [null !== iD && (0, QD.jsx)("img", {
              src: iD,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, QD.jsx)("span", {
              className: "SmallTextBold",
              children: wD(bD.db[DD])
            })]
          }, DD)
        }))
      })
    }
  },
  6312: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => yD,
      f: () => MD,
      g: () => BD,
      i: () => tD
    });
    var ID = cD(53),
      pD = cD(6298),
      iD = cD(1497),
      fD = cD(6291),
      bD = cD(6320),
      QD = cD(1120);
    const wD = "shaderPackListingView",
      SD = "shaderPackListingFilterOpen";

    function BD() {
      var DD;
      const [CD, cD] = (0, bD.c)(wD, pD.H[0]);
      return [null !== (DD = pD.H.find((DD => DD === CD))) && void 0 !== DD ? DD : pD.H[0], cD]
    }

    function yD() {
      (0, ID.useEffect)((() => () => {
        window.location.pathname.startsWith(fD.W) || (0, fD.n)()
      }), [])
    }

    function MD() {
      return (0, bD.c)(SD, !1)
    }

    function tD() {
      const {
        userContext: DD,
        isUserContextUpdating: CD
      } = (0, QD.c)(), [cD, pD] = (0, ID.useState)(null), fD = (0, ID.useRef)(new Set);

      function bD(DD, CD) {
        pD((cD => {
          const ID = new Set(cD);
          return CD ? ID.add(DD) : ID.delete(DD), ID
        }))
      }
      return (0, ID.useEffect)((() => {
        if (CD) return;
        let cD = !1;
        return iD.c.getFavouriteShaderPacks(DD).then((DD => {
          cD || pD(new Set(DD))
        })).catch((DD => {
          console.error("Failed to get favourite shader packs", DD), cD || pD(new Set)
        })), () => {
          cD = !0
        }
      }), [DD, CD]), {
        isFavourite: DD => null === cD ? null : cD.has(DD),
        toggle: function(CD) {
          if (null === cD || fD.current.has(CD)) return;
          fD.current.add(CD);
          const ID = !cD.has(CD);
          bD(CD, ID), (ID ? iD.c.favouriteShaderPack(DD, CD) : iD.c.unfavouriteShaderPack(DD, CD)).catch((DD => {
            console.error("Failed to change a favourite shader pack", DD), bD(CD, !ID)
          })).finally((() => {
            fD.current.delete(CD)
          }))
        }
      }
    }
  },
  6291: (DD, CD, cD) => {
    cD.d(CD, {
      $: () => QD,
      A: () => vD,
      E: () => xD,
      G: () => SD,
      I: () => JD,
      M: () => ZD,
      P: () => TD,
      S: () => lD,
      W: () => fD,
      Y: () => LD,
      ab: () => bD,
      bb: () => zD,
      c: () => ND,
      db: () => jD,
      eb: () => gD,
      fb: () => qD,
      g: () => HD,
      k: () => oD,
      n: () => yD,
      p: () => BD,
      q: () => KD,
      r: () => MD,
      s: () => aD,
      w: () => GD,
      x: () => tD
    });
    var ID = cD(6298),
      pD = cD(162),
      iD = cD(4353);
    const fD = "/shader-packs",
      bD = `${fD}/publish`;

    function QD(DD) {
      return `${fD}/${encodeURIComponent(DD)}`
    }
    let wD = null;

    function SD(DD) {
      wD = DD
    }

    function BD() {
      return wD
    }

    function yD() {
      wD = null
    }

    function MD(DD) {
      return DD.playerHasRank("developer") || DD.playerHasRank("admin")
    }
    const tD = ["terrain", "water", "models", "sunShadows", "strict"],
      ZD = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function oD(DD, CD) {
      return DD.withFeatures.includes(CD) ? "with" : DD.withoutFeatures.includes(CD) ? "without" : null
    }

    function vD(DD) {
      return null === DD ? "with" : "with" === DD ? "without" : null
    }

    function ND(DD) {
      return "with" === DD ? "only" : null === DD ? "include" : void 0
    }

    function gD(DD, CD) {
      const cD = oD(DD, CD),
        ID = DD => DD.filter((DD => DD !== CD));
      return {
        withFeatures: null === cD ? [...DD.withFeatures, CD] : ID(DD.withFeatures),
        withoutFeatures: "with" === cD ? [...DD.withoutFeatures, CD] : ID(DD.withoutFeatures)
      }
    }
    const XD = "section",
      mD = "sort",
      nD = "filters",
      OD = "q",
      PD = "banned",
      HD = "popular",
      UD = "strict";

    function xD(DD) {
      var CD, cD, pD;
      const fD = DD.get(XD),
        bD = (null !== (CD = DD.get(nD)) && void 0 !== CD ? CD : UD).split(","),
        QD = DD.get(PD);
      return {
        section: "favourites" === fD || "mine" === fD ? fD : "explore",
        sort: null !== (cD = ID.z.find((CD => CD === DD.get(mD)))) && void 0 !== cD ? cD : HD,
        withFeatures: tD.filter((DD => bD.includes(DD) && !bD.includes(`-${DD}`))),
        withoutFeatures: tD.filter((DD => bD.includes(`-${DD}`))),
        searchQuery: (null === (pD = DD.get(OD)) || void 0 === pD ? void 0 : pD.slice(0, ID.N)) || null,
        pageNumber: (0, iD.e)(DD.get(iD.b)),
        banned: "only" === QD ? "with" : "include" === QD ? null : "without"
      }
    }

    function qD(DD, CD) {
      var cD;
      const ID = VD(CD);
      (0, iD.f)(DD, XD, "explore" === CD.section ? null : CD.section), (0, iD.f)(DD, mD, CD.sort === HD ? null : CD.sort), (0, iD.f)(DD, nD, ID === UD ? null : ID), (0, iD.f)(DD, OD, CD.searchQuery), (0, iD.f)(DD, PD, null !== (cD = ND(CD.banned)) && void 0 !== cD ? cD : null), (0, iD.h)(DD, CD.pageNumber)
    }

    function JD(DD) {
      const CD = new URLSearchParams;
      return qD(CD, {
        section: "explore",
        sort: HD,
        withFeatures: "strict" === DD ? [DD] : [DD, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${fD}?${CD.toString()}`
    }

    function KD(DD) {
      return VD(DD) === UD
    }

    function aD(DD) {
      return null !== DD.searchQuery || "with" === DD.banned || VD(DD) !== UD
    }

    function VD(DD) {
      return tD.flatMap((CD => {
        const cD = oD(DD, CD);
        return "with" === cD ? [CD] : "without" === cD ? [`-${CD}`] : []
      })).join(",")
    }
    const zD = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      jD = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function lD(DD) {
      return Math.round(100 * Math.max(0, 1 - 1 / DD))
    }

    function LD(DD, CD, cD, pD) {
      const iD = [];
      DD.isBanned && iD.push({
        tone: "warning",
        text: pD("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: fD
      } = DD;
      if (null === DD.brokenError || fD && !fD.error || iD.push({
          tone: "warning",
          text: pD("shaderPackListing:ownerBroken"),
          detail: DD.brokenError
        }), null !== fD && void 0 !== fD && fD.error) iD.push({
        tone: "warning",
        text: pD(CD ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, ID.n)(fD.error) ? null : fD.error
      });
      else if (fD) {
        const DD = null === fD.renderNotBefore ? 0 : fD.renderNotBefore - cD,
          ID = String(Math.ceil(DD / 6e4)),
          bD = pD(CD ? DD > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : DD > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: ID
          });
        iD.push({
          tone: "info",
          text: bD,
          detail: null
        })
      }
      return DD.listed || iD.push({
        tone: "info",
        text: pD("shaderPackListing:ownerUnlisted"),
        detail: null
      }), iD
    }

    function TD(DD) {
      return Math.max(1, Math.round(DD / 1024))
    }

    function GD(DD, CD, cD) {
      return DD instanceof pD.d && DD.errorMessageForUser ? DD.errorMessageForUser : CD(cD)
    }
  },
  6320: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(53),
      pD = cD(36);

    function iD(DD, CD) {
      var cD;
      const [iD, fD] = (0, ID.useState)(null !== (cD = pD.h.getItem(DD)) && void 0 !== cD ? cD : CD);
      return [iD, CD => {
        pD.h.setItem(DD, CD), fD(CD)
      }]
    }
  },
  6298: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => bD,
      E: () => fD,
      H: () => ID,
      L: () => yD,
      N: () => SD,
      Q: () => gD,
      T: () => BD,
      U: () => wD,
      e: () => MD,
      h: () => ZD,
      k: () => tD,
      n: () => ND,
      p: () => mD,
      t: () => QD,
      u: () => pD,
      w: () => XD,
      z: () => iD
    });
    const ID = ["forest", "desert", "water", "night", "cave"];
    const pD = {
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
      iD = ["popular", "updated", "newest"],
      fD = 3,
      bD = 32,
      QD = 300;

    function wD(DD, CD) {
      return DD.slice(0, CD).replace(/[\uD800-\uDBFF]$/, "")
    }
    const SD = 64,
      BD = 512,
      yD = 18e5;
    const MD = "Bloxdhub",
      tD = "https://bloxdhub.com/shaders";

    function ZD(DD) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
    }
    const oD = "Screenshot generation failed.",
      vD = "Its screenshots couldn't be generated:";

    function ND(DD) {
      var CD;
      return DD === oD || null !== (CD = null === DD || void 0 === DD ? void 0 : DD.startsWith(vD)) && void 0 !== CD && CD
    }

    function gD(DD, CD) {
      return `shaderPacks/${DD}/${CD}.json`
    }

    function XD(DD, CD, cD, ID) {
      return null === CD.renderId ? mD(DD, CD.baselineVersion, cD, ID) : `${DD}/${function(DD,CD,cD,ID){return`shaderPacks/${DD}/${CD}/${cD}-${ID}.webp`}(CD.packId,CD.renderId,cD,ID)}`
    }

    function mD(DD, CD, cD, ID) {
      return `${DD}/${function(DD,CD,cD){return`shaderPacks/baseline/${DD}/${CD}-${cD}.webp`}(CD,cD,ID)}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);