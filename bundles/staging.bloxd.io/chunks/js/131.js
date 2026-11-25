export const id = 131;
export const ids = [131];
export const modules = {
  41462: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      ShaderPackCategory: () => aG
    });
    var wG = ZG(51),
      SG = ZG(1457),
      LG = ZG(1393),
      yG = ZG(1444),
      kG = ZG(1151),
      UG = ZG(80),
      YG = ZG(17),
      VG = ZG(1579),
      pG = ZG(6608),
      fG = ZG(318),
      QG = ZG(6653),
      KG = ZG(6645),
      hG = ZG(6661),
      dG = ZG(6559),
      JG = ZG(5019),
      rG = ZG(5046),
      zG = ZG(6602),
      EG = ZG(3444);

    function oG(GG, bG) {
      const ZG = (0, QG.storedPackOutcome)(GG, bG);
      return "none" !== ZG.kind || "noCompiler" === ZG.reason
    }
    var XG = ZG(1006),
      uG = ZG.n(XG),
      iG = ZG(5055),
      CG = ZG(1016),
      WG = ZG(6598),
      mG = ZG(1067);
    const IG = {
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

    function FG(GG, bG) {
      return "failedRecheck" === GG && bG.listing ? "shaderPack:statusFailedRecheckListed" : IG[GG]
    }

    function vG(GG) {
      let {
        stored: bG,
        checking: ZG,
        webGpuUsable: wG,
        changePending: SG,
        compiler: LG,
        t: yG
      } = GG;
      const kG = function(GG, bG, ZG, wG, SG) {
          const LG = (0, QG.storedPackOutcome)(GG, SG);
          return "none" === LG.kind ? "noCompiler" === LG.reason ? bG ? "checking" : "noCompiler" : "otherApiVersion" === LG.reason ? "wrongApiVersion" : "failed" : (0, EG.e)() ? "harnessBuild" : "blocked" === LG.kind ? (0, QG.shaderPackNeedsCheck)(GG, SG) ? bG ? "checking" : !1 === ZG ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === ZG ? "offNoWebGpu" : wG ? "readyAfterReload" : "ready"
        }(bG, ZG, wG, SG, LG),
        UG = "failed" === kG || "failedRecheck" === kG,
        YG = UG || "wrongApiVersion" === kG || "noCompiler" === kG,
        VG = "ready" === kG || "readyAfterReload" === kG ? bG.validation.offInStrict : [];
      return (0, mG.jsxs)(mG.Fragment, {
        children: [(0, mG.jsxs)("div", {
          className: uG()("ShaderPackStatus", {
            Ready: "ready" === kG,
            Failed: YG
          }),
          children: ["ready" === kG && (0, mG.jsx)(CG.c, {
            name: "circle-check"
          }), YG && (0, mG.jsx)(CG.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === kG ? (0, EG.c)() : yG(FG(kG, bG), {
            packVersion: String(bG.manifest.apiVersion),
            version: String(iG.e)
          })]
        }), UG && (0, mG.jsx)(WG.c, {
          diagnostics: bG.validation.errors,
          more: bG.validation.moreErrors,
          t: yG
        }), VG.length > 0 && (0, mG.jsxs)(mG.Fragment, {
          children: [(0, mG.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, mG.jsx)(CG.c, {
              name: "triangle-exclamation"
            }), yG("shaderPack:offInStrict")]
          }), (0, mG.jsx)(WG.c, {
            diagnostics: VG,
            t: yG
          })]
        })]
      })
    }

    function aG(GG) {
      let {
        setApplySettingsCallback: bG
      } = GG;
      const {
        t: ZG
      } = (0, kG.w)(), [SG, yG] = (0, wG.useState)(null), [YG, VG] = (0, wG.useState)(null), [EG, XG] = (0, wG.useState)(null), [uG] = (0, wG.useState)(fG.k), [iG, CG] = (0, wG.useState)(!0), [WG, IG] = (0, wG.useState)(!1), {
        loading: FG,
        error: aG,
        setError: lG,
        onFiles: jG
      } = (0, zG.g)((async GG => {
        const bG = await (0, pG.loadPageShaderPackCompiler)();
        if (!bG) return void lG(ZG("shaderPack:compilerUnavailable"));
        VG(bG);
        const wG = (0, QG.toStoredShaderPack)(GG, await (0, KG.g)(bG, GG.files));
        await (0, QG.saveShaderPack)(wG, bG) ? (yG(wG), PG(SG, wG, bG)) : lG(ZG("shaderPack:saveFailed"))
      }));

      function PG(GG, ZG, wG) {
        (function(GG, bG, ZG, wG) {
          return ZG || oG(GG, wG) || oG(bG, wG)
        })(GG, ZG, (0, QG.isShaderPackChangePending)(), wG) && ((0, QG.markShaderPackChangePending)(), bG((() => JG.g)))
      }
      return (0, wG.useEffect)((() => {
        let GG = !1;
        return async function() {
          const bG = (0, UG.hasUsableWebGpuAdapter)(),
            ZG = await (0, hG.e)();
          if (GG) return;
          yG(ZG), IG(!0), CG(!1);
          const wG = null !== ZG ? (0, pG.loadPageShaderPackCompiler)() : null,
            SG = await bG;
          if (GG) return;
          XG(SG);
          const LG = await wG;
          if (!GG && (VG(LG), null !== ZG && SG && null !== LG && (0, QG.shaderPackNeedsCheck)(ZG, LG))) {
            const bG = await (0, KG.e)(ZG, LG);
            GG || yG((GG => GG === ZG ? bG : GG))
          }
        }().catch((bG => {
          console.error("Failed to load the stored shader pack", bG), GG || lG(ZG("shaderPack:unexpectedError"))
        })).finally((() => {
          GG || (CG(!1), IG(!1))
        })), () => {
          GG = !0
        }
      }), []), (0, mG.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, mG.jsx)("div", {
          className: "ShaderPackIntro",
          children: ZG("shaderPack:intro")
        }), (0, mG.jsx)(cG, {
          to: dG.X,
          className: "ShaderPackBrowseLink",
          children: (0, mG.jsx)(LG.k, {
            className: "ShaderPackBrowseButton",
            children: ZG("shaderPackListing:browse")
          })
        }), !1 === EG && (0, mG.jsx)("div", {
          className: "SettingsBoxWarning",
          children: ZG(uG ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== aG && (0, mG.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [ZG("general:error"), ": ", aG]
        }), SG && (0, mG.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, mG.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, mG.jsxs)("div", {
              children: [(0, mG.jsx)("div", {
                className: "ShaderPackName",
                children: SG.manifest.name
              }), SG.manifest.author && (0, mG.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, rG.h)(ZG, "shaderPack:byAuthor", {
                  author: SG.manifest.author
                })
              }), SG.manifest.description && (0, mG.jsx)("div", {
                className: "ShaderPackDescription",
                children: SG.manifest.description
              }), SG.listing && (0, mG.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, mG.jsx)(cG, {
                  to: (0, dG.bb)(SG.listing.packId),
                  className: "ShaderPackListingLink",
                  children: ZG("shaderPackListing:openPackPage")
                })
              })]
            }), (0, mG.jsx)(LG.E, {
              disabled: iG || FG,
              onClick: async function() {
                CG(!0), lG(null), await (0, QG.removeShaderPack)(), yG(null), CG(!1), PG(SG, null, YG)
              },
              children: ZG("shaderPack:removePack")
            })]
          }), (0, mG.jsx)(vG, {
            stored: SG,
            checking: WG,
            webGpuUsable: EG,
            changePending: (0, QG.isShaderPackChangePending)(),
            compiler: YG,
            t: ZG
          })]
        }), (0, mG.jsx)(zG.c, {
          busy: iG || FG || WG,
          disabled: iG || FG || WG || !0 !== EG,
          onFiles: jG
        })]
      })
    }

    function cG(GG) {
      let {
        to: bG,
        className: ZG,
        children: wG
      } = GG;
      const {
        gameState: LG
      } = (0, YG.o)(["gameState"]), {
        pathname: kG,
        search: UG
      } = (0, SG.n)(), pG = "landingPage" !== LG && "studio" !== LG;
      return (0, mG.jsx)(yG.LinkPreserveSearch, {
        to: bG,
        className: ZG,
        target: pG ? "_blank" : void 0,
        onClick: () => {
          pG || ((0, dG.N)(`${kG}${UG}`), (0, VG.h)())
        },
        children: wG
      })
    }
  },
  6559: (GG, bG, ZG) => {
    ZG.d(bG, {
      D: () => KG,
      G: () => JG,
      K: () => mG,
      N: () => VG,
      R: () => FG,
      S: () => hG,
      V: () => AG,
      W: () => PG,
      X: () => yG,
      Z: () => MG,
      bb: () => UG,
      c: () => rG,
      eb: () => kG,
      f: () => CG,
      g: () => dG,
      hb: () => lG,
      jb: () => jG,
      k: () => fG,
      mb: () => zG,
      n: () => pG,
      q: () => vG,
      qb: () => IG,
      s: () => QG,
      v: () => aG,
      z: () => sG
    });
    var wG = ZG(6561),
      SG = ZG(140),
      LG = ZG(4575);
    const yG = "/shader-packs",
      kG = `${yG}/publish`;

    function UG(GG) {
      return `${yG}/${encodeURIComponent(GG)}`
    }
    let YG = null;

    function VG(GG) {
      YG = GG
    }

    function pG() {
      return YG
    }

    function fG() {
      YG = null
    }

    function QG(GG) {
      return GG.playerHasRank("developer") || GG.playerHasRank("admin")
    }
    const KG = ["terrain", "water", "models", "sunShadows", "strict"],
      hG = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function dG(GG, bG) {
      return GG.withFeatures.includes(bG) ? "with" : GG.withoutFeatures.includes(bG) ? "without" : null
    }

    function JG(GG) {
      return null === GG ? "with" : "with" === GG ? "without" : null
    }

    function rG(GG) {
      return "with" === GG ? "only" : null === GG ? "include" : void 0
    }

    function zG(GG, bG) {
      const ZG = dG(GG, bG),
        wG = GG => GG.filter((GG => GG !== bG));
      return {
        withFeatures: null === ZG ? [...GG.withFeatures, bG] : wG(GG.withFeatures),
        withoutFeatures: "with" === ZG ? [...GG.withoutFeatures, bG] : wG(GG.withoutFeatures)
      }
    }
    const EG = "section",
      oG = "sort",
      XG = "filters",
      uG = "q",
      iG = "banned",
      CG = "popular",
      WG = "strict";

    function mG(GG) {
      var bG, ZG, SG;
      const yG = GG.get(EG),
        kG = (null !== (bG = GG.get(XG)) && void 0 !== bG ? bG : WG).split(","),
        UG = GG.get(iG);
      return {
        section: "favourites" === yG || "mine" === yG ? yG : "explore",
        sort: null !== (ZG = wG.z.find((bG => bG === GG.get(oG)))) && void 0 !== ZG ? ZG : CG,
        withFeatures: KG.filter((GG => kG.includes(GG) && !kG.includes(`-${GG}`))),
        withoutFeatures: KG.filter((GG => kG.includes(`-${GG}`))),
        searchQuery: (null === (SG = GG.get(uG)) || void 0 === SG ? void 0 : SG.slice(0, wG.K)) || null,
        pageNumber: (0, LG.d)(GG.get(LG.c)),
        banned: "only" === UG ? "with" : "include" === UG ? null : "without"
      }
    }

    function IG(GG, bG) {
      var ZG;
      const wG = cG(bG);
      (0, LG.g)(GG, EG, "explore" === bG.section ? null : bG.section), (0, LG.g)(GG, oG, bG.sort === CG ? null : bG.sort), (0, LG.g)(GG, XG, wG === WG ? null : wG), (0, LG.g)(GG, uG, bG.searchQuery), (0, LG.g)(GG, iG, null !== (ZG = rG(bG.banned)) && void 0 !== ZG ? ZG : null), (0, LG.k)(GG, bG.pageNumber)
    }

    function FG(GG) {
      const bG = new URLSearchParams;
      return IG(bG, {
        section: "explore",
        sort: CG,
        withFeatures: "strict" === GG ? [GG] : [GG, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${yG}?${bG.toString()}`
    }

    function vG(GG) {
      return cG(GG) === WG
    }

    function aG(GG) {
      return null !== GG.searchQuery || "with" === GG.banned || cG(GG) !== WG
    }

    function cG(GG) {
      return KG.flatMap((bG => {
        const ZG = dG(GG, bG);
        return "with" === ZG ? [bG] : "without" === ZG ? [`-${bG}`] : []
      })).join(",")
    }
    const lG = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      jG = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function PG(GG) {
      return Math.round(100 * Math.max(0, 1 - 1 / GG))
    }

    function MG(GG, bG, ZG, SG) {
      const LG = [];
      GG.isBanned && LG.push({
        tone: "warning",
        text: SG("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: yG
      } = GG;
      if (null === GG.brokenError || yG && !yG.error || LG.push({
          tone: "warning",
          text: SG("shaderPackListing:ownerBroken"),
          detail: GG.brokenError
        }), null !== yG && void 0 !== yG && yG.error) LG.push({
        tone: "warning",
        text: SG(bG ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, wG.l)(yG.error) ? null : yG.error
      });
      else if (yG) {
        const GG = null === yG.renderNotBefore ? 0 : yG.renderNotBefore - ZG,
          wG = String(Math.ceil(GG / 6e4)),
          kG = SG(bG ? GG > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : GG > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: wG
          });
        LG.push({
          tone: "info",
          text: kG,
          detail: null
        })
      }
      return GG.listed || LG.push({
        tone: "info",
        text: SG("shaderPackListing:ownerUnlisted"),
        detail: null
      }), LG
    }

    function AG(GG) {
      return Math.max(1, Math.round(GG / 1024))
    }

    function sG(GG, bG, ZG) {
      return GG instanceof SG.b && GG.errorMessageForUser ? GG.errorMessageForUser : bG(ZG)
    }
  },
  6561: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => kG,
      C: () => yG,
      F: () => wG,
      G: () => fG,
      K: () => VG,
      O: () => EG,
      S: () => pG,
      T: () => YG,
      b: () => KG,
      c: () => dG,
      e: () => hG,
      h: () => QG,
      l: () => zG,
      n: () => XG,
      q: () => UG,
      u: () => SG,
      v: () => oG,
      z: () => LG
    });
    const wG = ["forest", "desert", "water", "night", "cave"];
    const SG = {
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
      LG = ["popular", "updated", "newest"],
      yG = 3,
      kG = 32,
      UG = 300;

    function YG(GG, bG) {
      return GG.slice(0, bG).replace(/[\uD800-\uDBFF]$/, "")
    }
    const VG = 64,
      pG = 512,
      fG = 18e5;

    function QG(GG) {
      const bG = GG,
        ZG = null === bG || void 0 === bG ? void 0 : bG.files;
      return "number" === typeof(null === bG || void 0 === bG ? void 0 : bG.apiVersion) && "string" === typeof bG.name && (null === bG.author || "string" === typeof bG.author) && (void 0 === bG.keepCircleShadows || "boolean" === typeof bG.keepCircleShadows) && "object" === typeof ZG && null !== ZG && Object.values(ZG).every((GG => "string" === typeof GG))
    }
    const KG = "Bloxdhub",
      hG = "https://bloxdhub.com/shaders";

    function dG(GG) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(GG)}`
    }
    const JG = "Screenshot generation failed.",
      rG = "Its screenshots couldn't be generated:";

    function zG(GG) {
      var bG;
      return GG === JG || null !== (bG = null === GG || void 0 === GG ? void 0 : GG.startsWith(rG)) && void 0 !== bG && bG
    }

    function EG(GG, bG) {
      return `shaderPacks/${GG}/${bG}.json`
    }

    function oG(GG, bG, ZG, wG) {
      return null === bG.renderId ? XG(GG, bG.baselineVersion, ZG, wG) : `${GG}/${function(GG,bG,ZG,wG){return`shaderPacks/${GG}/${bG}/${ZG}-${wG}.webp`}(bG.packId,bG.renderId,ZG,wG)}`
    }

    function XG(GG, bG, ZG, wG) {
      return `${GG}/${function(GG,bG,ZG){return`shaderPacks/baseline/${GG}/${bG}-${ZG}.webp`}(bG,ZG,wG)}`
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);