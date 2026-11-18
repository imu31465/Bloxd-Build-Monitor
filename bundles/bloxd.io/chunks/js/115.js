export const id = 115;
export const ids = [115];
export const modules = {
  39804: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      ShaderPackCategory: () => rB
    });
    var VB = dB(62),
      yB = dB(1422),
      pB = dB(1324),
      lB = dB(1407),
      JB = dB(1078),
      YB = dB(95),
      gB = dB(21),
      oB = dB(1507),
      kB = dB(5949),
      LB = dB(256),
      OB = dB(5987),
      DB = dB(5985),
      uB = dB(5994),
      HB = dB(5891),
      EB = dB(4411),
      vB = dB(5934),
      mB = dB(5943),
      iB = dB(2941);

    function NB(BB, TB) {
      const dB = (0, OB.storedPackOutcome)(BB, TB);
      return "none" !== dB.kind || "noCompiler" === dB.reason
    }
    var tB = dB(933),
      fB = dB.n(tB),
      sB = dB(5940),
      MB = dB(946),
      zB = dB(5932),
      wB = dB(980);
    const UB = {
      ready: "shaderPack:statusReady",
      readyAfterReload: "shaderPack:statusReadyAfterReload",
      noWebGpu: "shaderPack:statusNoWebGpu",
      offNoWebGpu: "shaderPack:statusOffNoWebGpu",
      failed: "shaderPack:statusFailed",
      failedRecheck: "shaderPack:statusFailedRecheck",
      wrongApiVersion: "shaderPack:statusWrongApiVersion",
      checking: "shaderPack:statusChecking",
      unchecked: "shaderPack:statusUnchecked",
      noCompiler: "shaderPack:statusNoCompiler"
    };

    function FB(BB, TB) {
      return "failedRecheck" === BB && TB.listing ? "shaderPack:statusFailedRecheckListed" : UB[BB]
    }

    function KB(BB) {
      let {
        stored: TB,
        checking: dB,
        webGpuUsable: VB,
        changePending: yB,
        compiler: pB,
        t: lB
      } = BB;
      const JB = function(BB, TB, dB, VB, yB) {
          const pB = (0, OB.storedPackOutcome)(BB, yB);
          return "none" === pB.kind ? "noCompiler" === pB.reason ? TB ? "checking" : "noCompiler" : "otherApiVersion" === pB.reason ? "wrongApiVersion" : "failed" : (0, iB.g)() ? "harnessBuild" : "blocked" === pB.kind ? (0, OB.shaderPackNeedsCheck)(BB, yB) ? TB ? "checking" : !1 === dB ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === dB ? "offNoWebGpu" : VB ? "readyAfterReload" : "ready"
        }(TB, dB, VB, yB, pB),
        YB = "failed" === JB || "failedRecheck" === JB,
        gB = YB || "wrongApiVersion" === JB || "noCompiler" === JB,
        oB = "ready" === JB || "readyAfterReload" === JB ? TB.validation.offInStrict : [];
      return (0, wB.jsxs)(wB.Fragment, {
        children: [(0, wB.jsxs)("div", {
          className: fB()("ShaderPackStatus", {
            Ready: "ready" === JB,
            Failed: gB
          }),
          children: ["ready" === JB && (0, wB.jsx)(MB.e, {
            name: "circle-check"
          }), gB && (0, wB.jsx)(MB.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === JB ? (0, iB.e)() : lB(FB(JB, TB), {
            packVersion: String(TB.manifest.apiVersion),
            version: String(sB.d)
          })]
        }), YB && (0, wB.jsx)(zB.c, {
          diagnostics: TB.validation.errors,
          more: TB.validation.moreErrors,
          t: lB
        }), oB.length > 0 && (0, wB.jsxs)(wB.Fragment, {
          children: [(0, wB.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, wB.jsx)(MB.e, {
              name: "triangle-exclamation"
            }), lB("shaderPack:offInStrict")]
          }), (0, wB.jsx)(zB.c, {
            diagnostics: oB,
            t: lB
          })]
        })]
      })
    }

    function rB(BB) {
      let {
        setApplySettingsCallback: TB
      } = BB;
      const {
        t: dB
      } = (0, JB.z)(), [yB, lB] = (0, VB.useState)(null), [gB, oB] = (0, VB.useState)(null), [iB, tB] = (0, VB.useState)(null), [fB] = (0, VB.useState)(LB.g), [sB, MB] = (0, VB.useState)(!0), [zB, UB] = (0, VB.useState)(!1), {
        loading: FB,
        error: rB,
        setError: cB,
        onFiles: SB
      } = (0, mB.g)((async BB => {
        const TB = await (0, kB.loadPageShaderPackCompiler)();
        if (!TB) return void cB(dB("shaderPack:compilerUnavailable"));
        oB(TB);
        const VB = (0, OB.toStoredShaderPack)(BB, await (0, DB.f)(TB, BB.files));
        await (0, OB.saveShaderPack)(VB, TB) ? (lB(VB), PB(yB, VB, TB)) : cB(dB("shaderPack:saveFailed"))
      }));

      function PB(BB, dB, VB) {
        (function(BB, TB, dB, VB) {
          return dB || NB(BB, VB) || NB(TB, VB)
        })(BB, dB, (0, OB.isShaderPackChangePending)(), VB) && ((0, OB.markShaderPackChangePending)(), TB((() => EB.n)))
      }
      return (0, VB.useEffect)((() => {
        let BB = !1;
        return async function() {
          const TB = (0, YB.hasUsableWebGpuAdapter)(),
            dB = await (0, uB.d)();
          if (BB) return;
          lB(dB), UB(!0), MB(!1);
          const VB = null !== dB ? (0, kB.loadPageShaderPackCompiler)() : null,
            yB = await TB;
          if (BB) return;
          tB(yB);
          const pB = await VB;
          if (!BB && (oB(pB), null !== dB && yB && null !== pB && (0, OB.shaderPackNeedsCheck)(dB, pB))) {
            const TB = await (0, DB.c)(dB, pB);
            BB || lB((BB => BB === dB ? TB : BB))
          }
        }().catch((TB => {
          console.error("Failed to load the stored shader pack", TB), BB || cB(dB("shaderPack:unexpectedError"))
        })).finally((() => {
          BB || (MB(!1), UB(!1))
        })), () => {
          BB = !0
        }
      }), []), (0, wB.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, wB.jsx)("div", {
          className: "ShaderPackIntro",
          children: dB("shaderPack:intro")
        }), (0, wB.jsx)(IB, {
          to: HB.T,
          className: "ShaderPackBrowseLink",
          children: (0, wB.jsx)(pB.k, {
            className: "ShaderPackBrowseButton",
            children: dB("shaderPackListing:browse")
          })
        }), !1 === iB && (0, wB.jsx)("div", {
          className: "SettingsBoxWarning",
          children: dB(fB ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== rB && (0, wB.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [dB("general:error"), ": ", rB]
        }), yB && (0, wB.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, wB.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, wB.jsxs)("div", {
              children: [(0, wB.jsx)("div", {
                className: "ShaderPackName",
                children: yB.manifest.name
              }), yB.manifest.author && (0, wB.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, vB.f)(dB, "shaderPack:byAuthor", {
                  author: yB.manifest.author
                })
              }), yB.manifest.description && (0, wB.jsx)("div", {
                className: "ShaderPackDescription",
                children: yB.manifest.description
              }), yB.listing && (0, wB.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, wB.jsx)(IB, {
                  to: (0, HB.X)(yB.listing.packId),
                  className: "ShaderPackListingLink",
                  children: dB("shaderPackListing:openPackPage")
                })
              })]
            }), (0, wB.jsx)(pB.N, {
              disabled: sB || FB,
              onClick: async function() {
                MB(!0), cB(null), await (0, OB.removeShaderPack)(), lB(null), MB(!1), PB(yB, null, gB)
              },
              children: dB("shaderPack:removePack")
            })]
          }), (0, wB.jsx)(KB, {
            stored: yB,
            checking: zB,
            webGpuUsable: iB,
            changePending: (0, OB.isShaderPackChangePending)(),
            compiler: gB,
            t: dB
          })]
        }), (0, wB.jsx)(mB.e, {
          busy: sB || FB || zB,
          disabled: sB || FB || zB || !0 !== iB,
          onFiles: SB
        })]
      })
    }

    function IB(BB) {
      let {
        to: TB,
        className: dB,
        children: VB
      } = BB;
      const {
        gameState: pB
      } = (0, gB.m)(["gameState"]), {
        pathname: JB,
        search: YB
      } = (0, yB.o)(), kB = "landingPage" !== pB && "studio" !== pB;
      return (0, wB.jsx)(lB.LinkPreserveSearch, {
        to: TB,
        className: dB,
        target: kB ? "_blank" : void 0,
        onClick: () => {
          kB || ((0, HB.K)(`${JB}${YB}`), (0, oB.f)())
        },
        children: VB
      })
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