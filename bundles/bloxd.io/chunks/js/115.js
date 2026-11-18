export const id = 115;
export const ids = [115];
export const modules = {
  39853: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      ShaderPackCategory: () => WJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1421),
      eJ = ZJ(1329),
      XJ = ZJ(1406),
      AJ = ZJ(1086),
      qJ = ZJ(80),
      jJ = ZJ(13),
      YJ = ZJ(1528),
      hJ = ZJ(5960),
      DJ = ZJ(223),
      sJ = ZJ(5996),
      nJ = ZJ(5994),
      GJ = ZJ(6004),
      fJ = ZJ(5886),
      xJ = ZJ(4401),
      rJ = ZJ(5944),
      vJ = ZJ(5955),
      mJ = ZJ(2943);

    function QJ(JJ, cJ) {
      const ZJ = (0, sJ.storedPackOutcome)(JJ, cJ);
      return "none" !== ZJ.kind || "noCompiler" === ZJ.reason
    }
    var EJ = ZJ(926),
      VJ = ZJ.n(EJ),
      KJ = ZJ(5951),
      yJ = ZJ(942),
      SJ = ZJ(5939),
      IJ = ZJ(990);
    const MJ = {
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

    function bJ(JJ, cJ) {
      return "failedRecheck" === JJ && cJ.listing ? "shaderPack:statusFailedRecheckListed" : MJ[JJ]
    }

    function wJ(JJ) {
      let {
        stored: cJ,
        checking: ZJ,
        webGpuUsable: FJ,
        changePending: UJ,
        compiler: eJ,
        t: XJ
      } = JJ;
      const AJ = function(JJ, cJ, ZJ, FJ, UJ) {
          const eJ = (0, sJ.storedPackOutcome)(JJ, UJ);
          return "none" === eJ.kind ? "noCompiler" === eJ.reason ? cJ ? "checking" : "noCompiler" : "otherApiVersion" === eJ.reason ? "wrongApiVersion" : "failed" : (0, mJ.c)() ? "harnessBuild" : "blocked" === eJ.kind ? (0, sJ.shaderPackNeedsCheck)(JJ, UJ) ? cJ ? "checking" : !1 === ZJ ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === ZJ ? "offNoWebGpu" : FJ ? "readyAfterReload" : "ready"
        }(cJ, ZJ, FJ, UJ, eJ),
        qJ = "failed" === AJ || "failedRecheck" === AJ,
        jJ = qJ || "wrongApiVersion" === AJ || "noCompiler" === AJ,
        YJ = "ready" === AJ || "readyAfterReload" === AJ ? cJ.validation.offInStrict : [];
      return (0, IJ.jsxs)(IJ.Fragment, {
        children: [(0, IJ.jsxs)("div", {
          className: VJ()("ShaderPackStatus", {
            Ready: "ready" === AJ,
            Failed: jJ
          }),
          children: ["ready" === AJ && (0, IJ.jsx)(yJ.c, {
            name: "circle-check"
          }), jJ && (0, IJ.jsx)(yJ.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === AJ ? (0, mJ.b)() : XJ(bJ(AJ, cJ), {
            packVersion: String(cJ.manifest.apiVersion),
            version: String(KJ.b)
          })]
        }), qJ && (0, IJ.jsx)(SJ.e, {
          diagnostics: cJ.validation.errors,
          more: cJ.validation.moreErrors,
          t: XJ
        }), YJ.length > 0 && (0, IJ.jsxs)(IJ.Fragment, {
          children: [(0, IJ.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, IJ.jsx)(yJ.c, {
              name: "triangle-exclamation"
            }), XJ("shaderPack:offInStrict")]
          }), (0, IJ.jsx)(SJ.e, {
            diagnostics: YJ,
            t: XJ
          })]
        })]
      })
    }

    function WJ(JJ) {
      let {
        setApplySettingsCallback: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, AJ.F)(), [UJ, XJ] = (0, FJ.useState)(null), [jJ, YJ] = (0, FJ.useState)(null), [mJ, EJ] = (0, FJ.useState)(null), [VJ] = (0, FJ.useState)(DJ.e), [KJ, yJ] = (0, FJ.useState)(!0), [SJ, MJ] = (0, FJ.useState)(!1), {
        loading: bJ,
        error: WJ,
        setError: HJ,
        onFiles: PJ
      } = (0, vJ.g)((async JJ => {
        const cJ = await (0, hJ.loadPageShaderPackCompiler)();
        if (!cJ) return void HJ(ZJ("shaderPack:compilerUnavailable"));
        YJ(cJ);
        const FJ = (0, sJ.toStoredShaderPack)(JJ, await (0, nJ.f)(cJ, JJ.files));
        await (0, sJ.saveShaderPack)(FJ, cJ) ? (XJ(FJ), kJ(UJ, FJ, cJ)) : HJ(ZJ("shaderPack:saveFailed"))
      }));

      function kJ(JJ, ZJ, FJ) {
        (function(JJ, cJ, ZJ, FJ) {
          return ZJ || QJ(JJ, FJ) || QJ(cJ, FJ)
        })(JJ, ZJ, (0, sJ.isShaderPackChangePending)(), FJ) && ((0, sJ.markShaderPackChangePending)(), cJ((() => xJ.l)))
      }
      return (0, FJ.useEffect)((() => {
        let JJ = !1;
        return async function() {
          const cJ = (0, qJ.hasUsableWebGpuAdapter)(),
            ZJ = await (0, GJ.f)();
          if (JJ) return;
          XJ(ZJ), MJ(!0), yJ(!1);
          const FJ = null !== ZJ ? (0, hJ.loadPageShaderPackCompiler)() : null,
            UJ = await cJ;
          if (JJ) return;
          EJ(UJ);
          const eJ = await FJ;
          if (!JJ && (YJ(eJ), null !== ZJ && UJ && null !== eJ && (0, sJ.shaderPackNeedsCheck)(ZJ, eJ))) {
            const cJ = await (0, nJ.d)(ZJ, eJ);
            JJ || XJ((JJ => JJ === ZJ ? cJ : JJ))
          }
        }().catch((cJ => {
          console.error("Failed to load the stored shader pack", cJ), JJ || HJ(ZJ("shaderPack:unexpectedError"))
        })).finally((() => {
          JJ || (yJ(!1), MJ(!1))
        })), () => {
          JJ = !0
        }
      }), []), (0, IJ.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, IJ.jsx)("div", {
          className: "ShaderPackIntro",
          children: ZJ("shaderPack:intro")
        }), (0, IJ.jsx)(gJ, {
          to: fJ.S,
          className: "ShaderPackBrowseLink",
          children: (0, IJ.jsx)(eJ.m, {
            className: "ShaderPackBrowseButton",
            children: ZJ("shaderPackListing:browse")
          })
        }), !1 === mJ && (0, IJ.jsx)("div", {
          className: "SettingsBoxWarning",
          children: ZJ(VJ ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== WJ && (0, IJ.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [ZJ("general:error"), ": ", WJ]
        }), UJ && (0, IJ.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, IJ.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, IJ.jsxs)("div", {
              children: [(0, IJ.jsx)("div", {
                className: "ShaderPackName",
                children: UJ.manifest.name
              }), UJ.manifest.author && (0, IJ.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, rJ.g)(ZJ, "shaderPack:byAuthor", {
                  author: UJ.manifest.author
                })
              }), UJ.manifest.description && (0, IJ.jsx)("div", {
                className: "ShaderPackDescription",
                children: UJ.manifest.description
              }), UJ.listing && (0, IJ.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, IJ.jsx)(gJ, {
                  to: (0, fJ.W)(UJ.listing.packId),
                  className: "ShaderPackListingLink",
                  children: ZJ("shaderPackListing:openPackPage")
                })
              })]
            }), (0, IJ.jsx)(eJ.J, {
              disabled: KJ || bJ,
              onClick: async function() {
                yJ(!0), HJ(null), await (0, sJ.removeShaderPack)(), XJ(null), yJ(!1), kJ(UJ, null, jJ)
              },
              children: ZJ("shaderPack:removePack")
            })]
          }), (0, IJ.jsx)(wJ, {
            stored: UJ,
            checking: SJ,
            webGpuUsable: mJ,
            changePending: (0, sJ.isShaderPackChangePending)(),
            compiler: jJ,
            t: ZJ
          })]
        }), (0, IJ.jsx)(vJ.e, {
          busy: KJ || bJ || SJ,
          disabled: KJ || bJ || SJ || !0 !== mJ,
          onFiles: PJ
        })]
      })
    }

    function gJ(JJ) {
      let {
        to: cJ,
        className: ZJ,
        children: FJ
      } = JJ;
      const {
        gameState: eJ
      } = (0, jJ.j)(["gameState"]), {
        pathname: AJ,
        search: qJ
      } = (0, UJ.q)(), hJ = "landingPage" !== eJ && "studio" !== eJ;
      return (0, IJ.jsx)(XJ.LinkPreserveSearch, {
        to: cJ,
        className: ZJ,
        target: hJ ? "_blank" : void 0,
        onClick: () => {
          hJ || ((0, fJ.L)(`${AJ}${qJ}`), (0, YJ.f)())
        },
        children: FJ
      })
    }
  },
  5886: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => WJ,
      C: () => zJ,
      G: () => nJ,
      H: () => xJ,
      K: () => IJ,
      L: () => YJ,
      M: () => bJ,
      N: () => GJ,
      Q: () => dJ,
      R: () => kJ,
      S: () => XJ,
      U: () => pJ,
      W: () => qJ,
      Y: () => AJ,
      ab: () => HJ,
      c: () => rJ,
      eb: () => PJ,
      g: () => yJ,
      ib: () => vJ,
      j: () => fJ,
      kb: () => MJ,
      n: () => DJ,
      r: () => hJ,
      s: () => wJ,
      w: () => sJ
    });
    var FJ = ZJ(5889),
      UJ = ZJ(143),
      eJ = ZJ(3982);
    const XJ = "/shader-packs",
      AJ = `${XJ}/publish`;

    function qJ(JJ) {
      return `${XJ}/${encodeURIComponent(JJ)}`
    }
    let jJ = null;

    function YJ(JJ) {
      jJ = JJ
    }

    function hJ() {
      return jJ
    }

    function DJ() {
      jJ = null
    }

    function sJ(JJ) {
      return JJ.playerHasRank("developer") || JJ.playerHasRank("admin")
    }
    const nJ = ["terrain", "water", "models", "sunShadows", "strict"],
      GJ = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function fJ(JJ, cJ) {
      return JJ.withFeatures.includes(cJ) ? "with" : JJ.withoutFeatures.includes(cJ) ? "without" : null
    }

    function xJ(JJ) {
      return null === JJ ? "with" : "with" === JJ ? "without" : null
    }

    function rJ(JJ) {
      return "with" === JJ ? "only" : null === JJ ? "include" : void 0
    }

    function vJ(JJ, cJ) {
      const ZJ = fJ(JJ, cJ),
        FJ = JJ => JJ.filter((JJ => JJ !== cJ));
      return {
        withFeatures: null === ZJ ? [...JJ.withFeatures, cJ] : FJ(JJ.withFeatures),
        withoutFeatures: "with" === ZJ ? [...JJ.withoutFeatures, cJ] : FJ(JJ.withoutFeatures)
      }
    }
    const mJ = "section",
      QJ = "sort",
      EJ = "filters",
      VJ = "q",
      KJ = "banned",
      yJ = "popular",
      SJ = "strict";

    function IJ(JJ) {
      var cJ, ZJ, UJ;
      const XJ = JJ.get(mJ),
        AJ = (null !== (cJ = JJ.get(EJ)) && void 0 !== cJ ? cJ : SJ).split(","),
        qJ = JJ.get(KJ);
      return {
        section: "favourites" === XJ || "mine" === XJ ? XJ : "explore",
        sort: null !== (ZJ = FJ.t.find((cJ => cJ === JJ.get(QJ)))) && void 0 !== ZJ ? ZJ : yJ,
        withFeatures: nJ.filter((JJ => AJ.includes(JJ) && !AJ.includes(`-${JJ}`))),
        withoutFeatures: nJ.filter((JJ => AJ.includes(`-${JJ}`))),
        searchQuery: (null === (UJ = JJ.get(VJ)) || void 0 === UJ ? void 0 : UJ.slice(0, FJ.E)) || null,
        pageNumber: (0, eJ.h)(JJ.get(eJ.e)),
        banned: "only" === qJ ? "with" : "include" === qJ ? null : "without"
      }
    }

    function MJ(JJ, cJ) {
      var ZJ;
      const FJ = gJ(cJ);
      (0, eJ.l)(JJ, mJ, "explore" === cJ.section ? null : cJ.section), (0, eJ.l)(JJ, QJ, cJ.sort === yJ ? null : cJ.sort), (0, eJ.l)(JJ, EJ, FJ === SJ ? null : FJ), (0, eJ.l)(JJ, VJ, cJ.searchQuery), (0, eJ.l)(JJ, KJ, null !== (ZJ = rJ(cJ.banned)) && void 0 !== ZJ ? ZJ : null), (0, eJ.m)(JJ, cJ.pageNumber)
    }

    function bJ(JJ) {
      const cJ = new URLSearchParams;
      return MJ(cJ, {
        section: "explore",
        sort: yJ,
        withFeatures: "strict" === JJ ? [JJ] : [JJ, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${XJ}?${cJ.toString()}`
    }

    function wJ(JJ) {
      return gJ(JJ) === SJ
    }

    function WJ(JJ) {
      return null !== JJ.searchQuery || "with" === JJ.banned || gJ(JJ) !== SJ
    }

    function gJ(JJ) {
      return nJ.flatMap((cJ => {
        const ZJ = fJ(JJ, cJ);
        return "with" === ZJ ? [cJ] : "without" === ZJ ? [`-${cJ}`] : []
      })).join(",")
    }
    const HJ = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      PJ = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function kJ(JJ) {
      return Math.round(100 * Math.max(0, 1 - 1 / JJ))
    }

    function pJ(JJ, cJ, ZJ, UJ) {
      const eJ = [];
      JJ.isBanned && eJ.push({
        tone: "warning",
        text: UJ("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: XJ
      } = JJ;
      if (null === JJ.brokenError || XJ && !XJ.error || eJ.push({
          tone: "warning",
          text: UJ("shaderPackListing:ownerBroken"),
          detail: JJ.brokenError
        }), null !== XJ && void 0 !== XJ && XJ.error) eJ.push({
        tone: "warning",
        text: UJ(cJ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, FJ.j)(XJ.error) ? null : XJ.error
      });
      else if (XJ) {
        const JJ = null === XJ.renderNotBefore ? 0 : XJ.renderNotBefore - ZJ,
          FJ = String(Math.ceil(JJ / 6e4)),
          AJ = UJ(cJ ? JJ > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : JJ > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: FJ
          });
        eJ.push({
          tone: "info",
          text: AJ,
          detail: null
        })
      }
      return JJ.listed || eJ.push({
        tone: "info",
        text: UJ("shaderPackListing:ownerUnlisted"),
        detail: null
      }), eJ
    }

    function dJ(JJ) {
      return Math.max(1, Math.round(JJ / 1024))
    }

    function zJ(JJ, cJ, ZJ) {
      return JJ instanceof UJ.b && JJ.errorMessageForUser ? JJ.errorMessageForUser : cJ(ZJ)
    }
  },
  5889: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => FJ,
      C: () => DJ,
      E: () => YJ,
      G: () => vJ,
      I: () => hJ,
      L: () => jJ,
      b: () => sJ,
      f: () => GJ,
      i: () => nJ,
      j: () => rJ,
      l: () => QJ,
      n: () => qJ,
      o: () => UJ,
      q: () => mJ,
      t: () => eJ,
      u: () => AJ,
      x: () => XJ
    });
    const FJ = ["forest", "desert", "water", "night", "cave"];
    const UJ = {
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
      eJ = ["popular", "updated", "newest"],
      XJ = 3,
      AJ = 32,
      qJ = 300;

    function jJ(JJ, cJ) {
      return JJ.slice(0, cJ).replace(/[\uD800-\uDBFF]$/, "")
    }
    const YJ = 64,
      hJ = 512,
      DJ = 18e5;
    const sJ = "Bloxdhub",
      nJ = "https://bloxdhub.com/shaders";

    function GJ(JJ) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(JJ)}`
    }
    const fJ = "Screenshot generation failed.",
      xJ = "Its screenshots couldn't be generated:";

    function rJ(JJ) {
      var cJ;
      return JJ === fJ || null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.startsWith(xJ)) && void 0 !== cJ && cJ
    }

    function vJ(JJ, cJ) {
      return `shaderPacks/${JJ}/${cJ}.json`
    }

    function mJ(JJ, cJ, ZJ, FJ) {
      return null === cJ.renderId ? QJ(JJ, cJ.baselineVersion, ZJ, FJ) : `${JJ}/${function(JJ,cJ,ZJ,FJ){return`shaderPacks/${JJ}/${cJ}/${ZJ}-${FJ}.webp`}(cJ.packId,cJ.renderId,ZJ,FJ)}`
    }

    function QJ(JJ, cJ, ZJ, FJ) {
      return `${JJ}/${function(JJ,cJ,ZJ){return`shaderPacks/baseline/${JJ}/${cJ}-${ZJ}.webp`}(cJ,ZJ,FJ)}`
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);