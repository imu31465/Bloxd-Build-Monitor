export const id = 131;
export const ids = [131];
export const modules = {
  41099: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      ShaderPackCategory: () => MB
    });
    var TB = ZB(63),
      JB = ZB(1591),
      oB = ZB(1516),
      GB = ZB(1579),
      vB = ZB(1248),
      kB = ZB(105),
      cB = ZB(20),
      nB = ZB(1711),
      hB = ZB(6763),
      zB = ZB(331),
      FB = ZB(6800),
      NB = ZB(6792),
      gB = ZB(6808),
      qB = ZB(6726),
      yB = ZB(5143),
      UB = ZB(5198),
      WB = ZB(6760),
      dB = ZB(3649);

    function CB(BB, IB) {
      const ZB = (0, FB.storedPackOutcome)(BB, IB);
      return "none" !== ZB.kind || "noCompiler" === ZB.reason
    }
    var QB = ZB(1091),
      sB = ZB.n(QB),
      wB = ZB(5204),
      OB = ZB(1102),
      YB = ZB(6758),
      iB = ZB(1153);
    const pB = {
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

    function aB(BB, IB) {
      return "failedRecheck" === BB && IB.listing ? "shaderPack:statusFailedRecheckListed" : pB[BB]
    }

    function HB(BB) {
      let {
        stored: IB,
        checking: ZB,
        webGpuUsable: TB,
        changePending: JB,
        compiler: oB,
        t: GB
      } = BB;
      const vB = function(BB, IB, ZB, TB, JB) {
          const oB = (0, FB.storedPackOutcome)(BB, JB);
          return "none" === oB.kind ? "noCompiler" === oB.reason ? IB ? "checking" : "noCompiler" : "otherApiVersion" === oB.reason ? "wrongApiVersion" : "failed" : (0, dB.e)() ? "harnessBuild" : "blocked" === oB.kind ? (0, FB.shaderPackNeedsCheck)(BB, JB) ? IB ? "checking" : !1 === ZB ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === ZB ? "offNoWebGpu" : TB ? "readyAfterReload" : "ready"
        }(IB, ZB, TB, JB, oB),
        kB = "failed" === vB || "failedRecheck" === vB,
        cB = kB || "wrongApiVersion" === vB || "noCompiler" === vB,
        nB = "ready" === vB || "readyAfterReload" === vB ? IB.validation.offInStrict : [];
      return (0, iB.jsxs)(iB.Fragment, {
        children: [(0, iB.jsxs)("div", {
          className: sB()("ShaderPackStatus", {
            Ready: "ready" === vB,
            Failed: cB
          }),
          children: ["ready" === vB && (0, iB.jsx)(OB.d, {
            name: "circle-check"
          }), cB && (0, iB.jsx)(OB.d, {
            name: "triangle-exclamation"
          }), "harnessBuild" === vB ? (0, dB.d)() : GB(aB(vB, IB), {
            packVersion: String(IB.manifest.apiVersion),
            version: String(wB.b)
          })]
        }), kB && (0, iB.jsx)(YB.c, {
          diagnostics: IB.validation.errors,
          more: IB.validation.moreErrors,
          t: GB
        }), nB.length > 0 && (0, iB.jsxs)(iB.Fragment, {
          children: [(0, iB.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, iB.jsx)(OB.d, {
              name: "triangle-exclamation"
            }), GB("shaderPack:offInStrict")]
          }), (0, iB.jsx)(YB.c, {
            diagnostics: nB,
            t: GB
          })]
        })]
      })
    }

    function MB(BB) {
      let {
        setApplySettingsCallback: IB
      } = BB;
      const {
        t: ZB
      } = (0, vB.G)(), [JB, GB] = (0, TB.useState)(null), [cB, nB] = (0, TB.useState)(null), [dB, QB] = (0, TB.useState)(null), [sB] = (0, TB.useState)(zB.l), [wB, OB] = (0, TB.useState)(!0), [YB, pB] = (0, TB.useState)(!1), {
        loading: aB,
        error: MB,
        setError: PB,
        onFiles: RB
      } = (0, WB.e)((async BB => {
        const IB = await (0, hB.loadPageShaderPackCompiler)();
        if (!IB) return void PB(ZB("shaderPack:compilerUnavailable"));
        nB(IB);
        const TB = (0, FB.toStoredShaderPack)(BB, await (0, NB.h)(IB, BB.files));
        await (0, FB.saveShaderPack)(TB, IB) ? (GB(TB), rB(JB, TB, IB)) : PB(ZB("shaderPack:saveFailed"))
      }));

      function rB(BB, ZB, TB) {
        (function(BB, IB, ZB, TB) {
          return ZB || CB(BB, TB) || CB(IB, TB)
        })(BB, ZB, (0, FB.isShaderPackChangePending)(), TB) && ((0, FB.markShaderPackChangePending)(), IB((() => yB.m)))
      }
      return (0, TB.useEffect)((() => {
        let BB = !1;
        return async function() {
          const IB = (0, kB.hasUsableWebGpuAdapter)(),
            ZB = await (0, gB.i)();
          if (BB) return;
          GB(ZB), pB(!0), OB(!1);
          const TB = null !== ZB ? (0, hB.loadPageShaderPackCompiler)() : null,
            JB = await IB;
          if (BB) return;
          QB(JB);
          const oB = await TB;
          if (!BB && (nB(oB), null !== ZB && JB && null !== oB && (0, FB.shaderPackNeedsCheck)(ZB, oB))) {
            const IB = await (0, NB.d)(ZB, oB);
            BB || GB((BB => BB === ZB ? IB : BB))
          }
        }().catch((IB => {
          console.error("Failed to load the stored shader pack", IB), BB || PB(ZB("shaderPack:unexpectedError"))
        })).finally((() => {
          BB || (OB(!1), pB(!1))
        })), () => {
          BB = !0
        }
      }), []), (0, iB.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, iB.jsx)("div", {
          className: "ShaderPackIntro",
          children: ZB("shaderPack:intro")
        }), (0, iB.jsx)(jB, {
          to: qB.S,
          className: "ShaderPackBrowseLink",
          children: (0, iB.jsx)(oB.p, {
            className: "ShaderPackBrowseButton",
            children: ZB("shaderPackListing:browse")
          })
        }), !1 === dB && (0, iB.jsx)("div", {
          className: "SettingsBoxWarning",
          children: ZB(sB ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== MB && (0, iB.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [ZB("general:error"), ": ", MB]
        }), JB && (0, iB.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, iB.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, iB.jsxs)("div", {
              children: [(0, iB.jsx)("div", {
                className: "ShaderPackName",
                children: JB.manifest.name
              }), JB.manifest.author && (0, iB.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, UB.h)(ZB, "shaderPack:byAuthor", {
                  author: JB.manifest.author
                })
              }), JB.manifest.description && (0, iB.jsx)("div", {
                className: "ShaderPackDescription",
                children: JB.manifest.description
              }), JB.listing && (0, iB.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, iB.jsx)(jB, {
                  to: (0, qB.X)(JB.listing.packId),
                  className: "ShaderPackListingLink",
                  children: ZB("shaderPackListing:openPackPage")
                })
              })]
            }), (0, iB.jsx)(oB.N, {
              disabled: wB || aB,
              onClick: async function() {
                OB(!0), PB(null), await (0, FB.removeShaderPack)(), GB(null), OB(!1), rB(JB, null, cB)
              },
              children: ZB("shaderPack:removePack")
            })]
          }), (0, iB.jsx)(HB, {
            stored: JB,
            checking: YB,
            webGpuUsable: dB,
            changePending: (0, FB.isShaderPackChangePending)(),
            compiler: cB,
            t: ZB
          })]
        }), (0, iB.jsx)(WB.b, {
          busy: wB || aB || YB,
          disabled: wB || aB || YB || !0 !== dB,
          onFiles: RB
        })]
      })
    }

    function jB(BB) {
      let {
        to: IB,
        className: ZB,
        children: TB
      } = BB;
      const {
        gameState: oB
      } = (0, cB.o)(["gameState"]), {
        pathname: vB,
        search: kB
      } = (0, JB.r)(), hB = "landingPage" !== oB && "studio" !== oB;
      return (0, iB.jsx)(GB.LinkPreserveSearch, {
        to: IB,
        className: ZB,
        target: hB ? "_blank" : void 0,
        onClick: () => {
          hB || ((0, qB.I)(`${vB}${kB}`), (0, nB.d)())
        },
        children: TB
      })
    }
  },
  6726: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => yB,
      F: () => iB,
      I: () => nB,
      J: () => aB,
      K: () => gB,
      O: () => XB,
      R: () => rB,
      S: () => GB,
      T: () => mB,
      X: () => kB,
      Y: () => vB,
      ab: () => PB,
      e: () => UB,
      eb: () => RB,
      hb: () => WB,
      i: () => OB,
      kb: () => pB,
      l: () => qB,
      m: () => zB,
      p: () => hB,
      q: () => HB,
      r: () => FB,
      u: () => MB,
      x: () => LB,
      y: () => NB
    });
    var TB = ZB(6731),
      JB = ZB(168),
      oB = ZB(4750);
    const GB = "/shader-packs",
      vB = `${GB}/publish`;

    function kB(BB) {
      return `${GB}/${encodeURIComponent(BB)}`
    }
    let cB = null;

    function nB(BB) {
      cB = BB
    }

    function hB() {
      return cB
    }

    function zB() {
      cB = null
    }

    function FB(BB) {
      return BB.playerHasRank("developer") || BB.playerHasRank("admin")
    }
    const NB = ["terrain", "water", "models", "sunShadows", "strict"],
      gB = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function qB(BB, IB) {
      return BB.withFeatures.includes(IB) ? "with" : BB.withoutFeatures.includes(IB) ? "without" : null
    }

    function yB(BB) {
      return null === BB ? "with" : "with" === BB ? "without" : null
    }

    function UB(BB) {
      return "with" === BB ? "only" : null === BB ? "include" : void 0
    }

    function WB(BB, IB) {
      const ZB = qB(BB, IB),
        TB = BB => BB.filter((BB => BB !== IB));
      return {
        withFeatures: null === ZB ? [...BB.withFeatures, IB] : TB(BB.withFeatures),
        withoutFeatures: "with" === ZB ? [...BB.withoutFeatures, IB] : TB(BB.withoutFeatures)
      }
    }
    const dB = "section",
      CB = "sort",
      QB = "filters",
      sB = "q",
      wB = "banned",
      OB = "popular",
      YB = "strict";

    function iB(BB) {
      var IB, ZB, JB;
      const GB = BB.get(dB),
        vB = (null !== (IB = BB.get(QB)) && void 0 !== IB ? IB : YB).split(","),
        kB = BB.get(wB);
      return {
        section: "favourites" === GB || "mine" === GB ? GB : "explore",
        sort: null !== (ZB = TB.y.find((IB => IB === BB.get(CB)))) && void 0 !== ZB ? ZB : OB,
        withFeatures: NB.filter((BB => vB.includes(BB) && !vB.includes(`-${BB}`))),
        withoutFeatures: NB.filter((BB => vB.includes(`-${BB}`))),
        searchQuery: (null === (JB = BB.get(sB)) || void 0 === JB ? void 0 : JB.slice(0, TB.K)) || null,
        pageNumber: (0, oB.e)(BB.get(oB.b)),
        banned: "only" === kB ? "with" : "include" === kB ? null : "without"
      }
    }

    function pB(BB, IB) {
      var ZB;
      const TB = jB(IB);
      (0, oB.i)(BB, dB, "explore" === IB.section ? null : IB.section), (0, oB.i)(BB, CB, IB.sort === OB ? null : IB.sort), (0, oB.i)(BB, QB, TB === YB ? null : TB), (0, oB.i)(BB, sB, IB.searchQuery), (0, oB.i)(BB, wB, null !== (ZB = UB(IB.banned)) && void 0 !== ZB ? ZB : null), (0, oB.m)(BB, IB.pageNumber)
    }

    function aB(BB) {
      const IB = new URLSearchParams;
      return pB(IB, {
        section: "explore",
        sort: OB,
        withFeatures: "strict" === BB ? [BB] : [BB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${GB}?${IB.toString()}`
    }

    function HB(BB) {
      return jB(BB) === YB
    }

    function MB(BB) {
      return null !== BB.searchQuery || "with" === BB.banned || jB(BB) !== YB
    }

    function jB(BB) {
      return NB.flatMap((IB => {
        const ZB = qB(BB, IB);
        return "with" === ZB ? [IB] : "without" === ZB ? [`-${IB}`] : []
      })).join(",")
    }
    const PB = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      RB = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function rB(BB) {
      return Math.round(100 * Math.max(0, 1 - 1 / BB))
    }

    function mB(BB, IB, ZB, JB) {
      const oB = [];
      BB.isBanned && oB.push({
        tone: "warning",
        text: JB("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: GB
      } = BB;
      if (null === BB.brokenError || GB && !GB.error || oB.push({
          tone: "warning",
          text: JB("shaderPackListing:ownerBroken"),
          detail: BB.brokenError
        }), null !== GB && void 0 !== GB && GB.error) oB.push({
        tone: "warning",
        text: JB(IB ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, TB.j)(GB.error) ? null : GB.error
      });
      else if (GB) {
        const BB = null === GB.renderNotBefore ? 0 : GB.renderNotBefore - ZB,
          TB = String(Math.ceil(BB / 6e4)),
          vB = JB(IB ? BB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : BB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: TB
          });
        oB.push({
          tone: "info",
          text: vB,
          detail: null
        })
      }
      return BB.listed || oB.push({
        tone: "info",
        text: JB("shaderPackListing:ownerUnlisted"),
        detail: null
      }), oB
    }

    function XB(BB) {
      return Math.max(1, Math.round(BB / 1024))
    }

    function LB(BB, IB, ZB) {
      return BB instanceof JB.d && BB.errorMessageForUser ? BB.errorMessageForUser : IB(ZB)
    }
  },
  6731: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => vB,
      B: () => GB,
      F: () => TB,
      G: () => zB,
      K: () => nB,
      O: () => dB,
      P: () => hB,
      R: () => cB,
      d: () => NB,
      f: () => qB,
      h: () => gB,
      i: () => FB,
      j: () => WB,
      n: () => QB,
      o: () => kB,
      r: () => JB,
      u: () => CB,
      y: () => oB
    });
    const TB = ["forest", "desert", "water", "night", "cave"];
    const JB = {
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
      oB = ["popular", "updated", "newest"],
      GB = 3,
      vB = 32,
      kB = 300;

    function cB(BB, IB) {
      return BB.slice(0, IB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const nB = 64,
      hB = 512,
      zB = 18e5;

    function FB(BB) {
      const IB = BB,
        ZB = null === IB || void 0 === IB ? void 0 : IB.files;
      return "number" === typeof(null === IB || void 0 === IB ? void 0 : IB.apiVersion) && "string" === typeof IB.name && (null === IB.author || "string" === typeof IB.author) && (void 0 === IB.keepCircleShadows || "boolean" === typeof IB.keepCircleShadows) && "object" === typeof ZB && null !== ZB && Object.values(ZB).every((BB => "string" === typeof BB))
    }
    const NB = "Bloxdhub",
      gB = "https://bloxdhub.com/shaders";

    function qB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const yB = "Screenshot generation failed.",
      UB = "Its screenshots couldn't be generated:";

    function WB(BB) {
      var IB;
      return BB === yB || null !== (IB = null === BB || void 0 === BB ? void 0 : BB.startsWith(UB)) && void 0 !== IB && IB
    }

    function dB(BB, IB) {
      return `shaderPacks/${BB}/${IB}.json`
    }

    function CB(BB, IB, ZB, TB) {
      return null === IB.renderId ? QB(BB, IB.baselineVersion, ZB, TB) : `${BB}/${function(BB,IB,ZB,TB){return`shaderPacks/${BB}/${IB}/${ZB}-${TB}.webp`}(IB.packId,IB.renderId,ZB,TB)}`
    }

    function QB(BB, IB, ZB, TB) {
      return `${BB}/${function(BB,IB,ZB){return`shaderPacks/baseline/${BB}/${IB}-${ZB}.webp`}(IB,ZB,TB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);