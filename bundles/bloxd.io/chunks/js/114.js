export const id = 114;
export const ids = [114];
export const modules = {
  5902: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => JB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(1078),
      lB = dB(980);

    function JB(BB) {
      let {
        item: TB,
        className: dB
      } = BB;
      const {
        t: VB
      } = (0, pB.z)();
      return null === TB.renderId || TB.previewsOutdated ? (0, lB.jsx)("div", {
        className: yB()("ShaderPackPreviewsNotice", dB),
        children: (0, lB.jsx)("span", {
          children: VB(null === TB.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  5915: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(5898),
      lB = dB(1078),
      JB = dB(5891),
      YB = dB(980);

    function gB(BB) {
      let {
        selected: TB,
        onSelect: dB,
        imageUrl: VB
      } = BB;
      const {
        t: gB
      } = (0, lB.z)();
      return (0, YB.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: pB.D.map((BB => {
          const pB = VB(BB);
          return (0, YB.jsxs)("button", {
            type: "button",
            "aria-pressed": BB === TB,
            className: yB()("ShaderPackViewOption", {
              Selected: BB === TB
            }),
            onClick: () => {
              dB(BB)
            },
            children: [null !== pB && (0, YB.jsx)("img", {
              src: pB,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, YB.jsx)("span", {
              className: "SmallTextBold",
              children: gB(JB.cb[BB])
            })]
          }, BB)
        }))
      })
    }
  },
  5906: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => LB,
      g: () => OB,
      i: () => kB,
      k: () => DB
    });
    var VB = dB(62),
      yB = dB(5898),
      pB = dB(1393),
      lB = dB(5891),
      JB = dB(5913),
      YB = dB(1011);
    const gB = "shaderPackListingView",
      oB = "shaderPackListingFilterOpen";

    function kB() {
      var BB;
      const [TB, dB] = (0, JB.e)(gB, yB.D[0]);
      return [null !== (BB = yB.D.find((BB => BB === TB))) && void 0 !== BB ? BB : yB.D[0], dB]
    }

    function LB() {
      (0, VB.useEffect)((() => () => {
        window.location.pathname.startsWith(lB.T) || (0, lB.q)()
      }), [])
    }

    function OB() {
      return (0, JB.e)(oB, !1)
    }

    function DB() {
      const {
        userContext: BB,
        isUserContextUpdating: TB
      } = (0, YB.b)(), [dB, yB] = (0, VB.useState)(null), lB = (0, VB.useRef)(new Set);

      function JB(BB, TB) {
        yB((dB => {
          const VB = new Set(dB);
          return TB ? VB.add(BB) : VB.delete(BB), VB
        }))
      }
      return (0, VB.useEffect)((() => {
        if (TB) return;
        let dB = !1;
        return pB.c.getFavouriteShaderPacks(BB).then((BB => {
          dB || yB(new Set(BB))
        })).catch((BB => {
          console.error("Failed to get favourite shader packs", BB), dB || yB(new Set)
        })), () => {
          dB = !0
        }
      }), [BB, TB]), {
        isFavourite: BB => null === dB ? null : dB.has(BB),
        toggle: function(TB) {
          if (null === dB || lB.current.has(TB)) return;
          lB.current.add(TB);
          const VB = !dB.has(TB);
          JB(TB, VB), (VB ? pB.c.favouriteShaderPack(BB, TB) : pB.c.unfavouriteShaderPack(BB, TB)).catch((BB => {
            console.error("Failed to change a favourite shader pack", BB), JB(TB, !VB)
          })).finally((() => {
            lB.current.delete(TB)
          }))
        }
      }
    }
  },
  5891: (BB, TB, dB) => {
    dB.d(TB, {
      $: () => cB,
      D: () => aB,
      E: () => DB,
      H: () => EB,
      J: () => wB,
      K: () => oB,
      L: () => FB,
      M: () => uB,
      O: () => RB,
      Q: () => PB,
      T: () => lB,
      V: () => QB,
      X: () => YB,
      Y: () => JB,
      cb: () => SB,
      e: () => vB,
      eb: () => mB,
      gb: () => UB,
      i: () => MB,
      m: () => HB,
      q: () => LB,
      s: () => kB,
      v: () => KB,
      w: () => OB,
      z: () => rB
    });
    var VB = dB(5898),
      yB = dB(163),
      pB = dB(3971);
    const lB = "/shader-packs",
      JB = `${lB}/publish`;

    function YB(BB) {
      return `${lB}/${encodeURIComponent(BB)}`
    }
    let gB = null;

    function oB(BB) {
      gB = BB
    }

    function kB() {
      return gB
    }

    function LB() {
      gB = null
    }

    function OB(BB) {
      return BB.playerHasRank("developer") || BB.playerHasRank("admin")
    }
    const DB = ["terrain", "water", "models", "sunShadows", "strict"],
      uB = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function HB(BB, TB) {
      return BB.withFeatures.includes(TB) ? "with" : BB.withoutFeatures.includes(TB) ? "without" : null
    }

    function EB(BB) {
      return null === BB ? "with" : "with" === BB ? "without" : null
    }

    function vB(BB) {
      return "with" === BB ? "only" : null === BB ? "include" : void 0
    }

    function mB(BB, TB) {
      const dB = HB(BB, TB),
        VB = BB => BB.filter((BB => BB !== TB));
      return {
        withFeatures: null === dB ? [...BB.withFeatures, TB] : VB(BB.withFeatures),
        withoutFeatures: "with" === dB ? [...BB.withoutFeatures, TB] : VB(BB.withoutFeatures)
      }
    }
    const iB = "section",
      NB = "sort",
      tB = "filters",
      fB = "q",
      sB = "banned",
      MB = "popular",
      zB = "strict";

    function wB(BB) {
      var TB, dB, yB;
      const lB = BB.get(iB),
        JB = (null !== (TB = BB.get(tB)) && void 0 !== TB ? TB : zB).split(","),
        YB = BB.get(sB);
      return {
        section: "favourites" === lB || "mine" === lB ? lB : "explore",
        sort: null !== (dB = VB.u.find((TB => TB === BB.get(NB)))) && void 0 !== dB ? dB : MB,
        withFeatures: DB.filter((BB => JB.includes(BB) && !JB.includes(`-${BB}`))),
        withoutFeatures: DB.filter((BB => JB.includes(`-${BB}`))),
        searchQuery: (null === (yB = BB.get(fB)) || void 0 === yB ? void 0 : yB.slice(0, VB.J)) || null,
        pageNumber: (0, pB.f)(BB.get(pB.b)),
        banned: "only" === YB ? "with" : "include" === YB ? null : "without"
      }
    }

    function UB(BB, TB) {
      var dB;
      const VB = IB(TB);
      (0, pB.h)(BB, iB, "explore" === TB.section ? null : TB.section), (0, pB.h)(BB, NB, TB.sort === MB ? null : TB.sort), (0, pB.h)(BB, tB, VB === zB ? null : VB), (0, pB.h)(BB, fB, TB.searchQuery), (0, pB.h)(BB, sB, null !== (dB = vB(TB.banned)) && void 0 !== dB ? dB : null), (0, pB.i)(BB, TB.pageNumber)
    }

    function FB(BB) {
      const TB = new URLSearchParams;
      return UB(TB, {
        section: "explore",
        sort: MB,
        withFeatures: "strict" === BB ? [BB] : [BB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${lB}?${TB.toString()}`
    }

    function KB(BB) {
      return IB(BB) === zB
    }

    function rB(BB) {
      return null !== BB.searchQuery || "with" === BB.banned || IB(BB) !== zB
    }

    function IB(BB) {
      return DB.flatMap((TB => {
        const dB = HB(BB, TB);
        return "with" === dB ? [TB] : "without" === dB ? [`-${TB}`] : []
      })).join(",")
    }
    const cB = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      SB = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function PB(BB) {
      return Math.round(100 * Math.max(0, 1 - 1 / BB))
    }

    function QB(BB, TB, dB, yB) {
      const pB = [];
      BB.isBanned && pB.push({
        tone: "warning",
        text: yB("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: lB
      } = BB;
      if (null === BB.brokenError || lB && !lB.error || pB.push({
          tone: "warning",
          text: yB("shaderPackListing:ownerBroken"),
          detail: BB.brokenError
        }), null !== lB && void 0 !== lB && lB.error) pB.push({
        tone: "warning",
        text: yB(TB ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, VB.j)(lB.error) ? null : lB.error
      });
      else if (lB) {
        const BB = null === lB.renderNotBefore ? 0 : lB.renderNotBefore - dB,
          VB = String(Math.ceil(BB / 6e4)),
          JB = yB(TB ? BB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : BB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: VB
          });
        pB.push({
          tone: "info",
          text: JB,
          detail: null
        })
      }
      return BB.listed || pB.push({
        tone: "info",
        text: yB("shaderPackListing:ownerUnlisted"),
        detail: null
      }), pB
    }

    function RB(BB) {
      return Math.max(1, Math.round(BB / 1024))
    }

    function aB(BB, TB, dB) {
      return BB instanceof yB.b && BB.errorMessageForUser ? BB.errorMessageForUser : TB(dB)
    }
  },
  5913: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB
    });
    var VB = dB(62),
      yB = dB(33);

    function pB(BB, TB) {
      var dB;
      const [pB, lB] = (0, VB.useState)(null !== (dB = yB.j.getItem(BB)) && void 0 !== dB ? dB : TB);
      return [pB, TB => {
        yB.j.setItem(BB, TB), lB(TB)
      }]
    }
  },
  5898: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => lB,
      D: () => VB,
      H: () => LB,
      J: () => oB,
      N: () => mB,
      P: () => kB,
      S: () => gB,
      b: () => OB,
      c: () => uB,
      f: () => DB,
      j: () => vB,
      k: () => NB,
      n: () => YB,
      q: () => yB,
      r: () => iB,
      u: () => pB,
      w: () => JB
    });
    const VB = ["forest", "desert", "water", "night", "cave"];
    const yB = {
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
      pB = ["popular", "updated", "newest"],
      lB = 3,
      JB = 32,
      YB = 300;

    function gB(BB, TB) {
      return BB.slice(0, TB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const oB = 64,
      kB = 512,
      LB = 18e5;
    const OB = "Bloxdhub",
      DB = "https://bloxdhub.com/shaders";

    function uB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const HB = "Screenshot generation failed.",
      EB = "Its screenshots couldn't be generated:";

    function vB(BB) {
      var TB;
      return BB === HB || null !== (TB = null === BB || void 0 === BB ? void 0 : BB.startsWith(EB)) && void 0 !== TB && TB
    }

    function mB(BB, TB) {
      return `shaderPacks/${BB}/${TB}.json`
    }

    function iB(BB, TB, dB, VB) {
      return null === TB.renderId ? NB(BB, TB.baselineVersion, dB, VB) : `${BB}/${function(BB,TB,dB,VB){return`shaderPacks/${BB}/${TB}/${dB}-${VB}.webp`}(TB.packId,TB.renderId,dB,VB)}`
    }

    function NB(BB, TB, dB, VB) {
      return `${BB}/${function(BB,TB,dB){return`shaderPacks/baseline/${BB}/${TB}-${dB}.webp`}(TB,dB,VB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);