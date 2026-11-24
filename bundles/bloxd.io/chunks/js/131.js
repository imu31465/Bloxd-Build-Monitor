export const id = 131;
export const ids = [131];
export const modules = {
  41164: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      ShaderPackCategory: () => FB
    });
    var QB = zB(62),
      nB = zB(1547),
      dB = zB(1478),
      IB = zB(1543),
      NB = zB(1240),
      uB = zB(106),
      UB = zB(28),
      aB = zB(1664),
      pB = zB(6574),
      rB = zB(348),
      sB = zB(6601),
      JB = zB(6598),
      mB = zB(6606),
      yB = zB(6515),
      kB = zB(5078),
      GB = zB(5110),
      LB = zB(6572),
      gB = zB(3577);

    function tB(BB, jB) {
      const zB = (0, sB.storedPackOutcome)(BB, jB);
      return "none" !== zB.kind || "noCompiler" === zB.reason
    }
    var SB = zB(1091),
      MB = zB.n(SB),
      EB = zB(5115),
      iB = zB(1108),
      qB = zB(6567),
      fB = zB(1148);
    const oB = {
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

    function HB(BB, jB) {
      return "failedRecheck" === BB && jB.listing ? "shaderPack:statusFailedRecheckListed" : oB[BB]
    }

    function DB(BB) {
      let {
        stored: jB,
        checking: zB,
        webGpuUsable: QB,
        changePending: nB,
        compiler: dB,
        t: IB
      } = BB;
      const NB = function(BB, jB, zB, QB, nB) {
          const dB = (0, sB.storedPackOutcome)(BB, nB);
          return "none" === dB.kind ? "noCompiler" === dB.reason ? jB ? "checking" : "noCompiler" : "otherApiVersion" === dB.reason ? "wrongApiVersion" : "failed" : (0, gB.e)() ? "harnessBuild" : "blocked" === dB.kind ? (0, sB.shaderPackNeedsCheck)(BB, nB) ? jB ? "checking" : !1 === zB ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === zB ? "offNoWebGpu" : QB ? "readyAfterReload" : "ready"
        }(jB, zB, QB, nB, dB),
        uB = "failed" === NB || "failedRecheck" === NB,
        UB = uB || "wrongApiVersion" === NB || "noCompiler" === NB,
        aB = "ready" === NB || "readyAfterReload" === NB ? jB.validation.offInStrict : [];
      return (0, fB.jsxs)(fB.Fragment, {
        children: [(0, fB.jsxs)("div", {
          className: MB()("ShaderPackStatus", {
            Ready: "ready" === NB,
            Failed: UB
          }),
          children: ["ready" === NB && (0, fB.jsx)(iB.c, {
            name: "circle-check"
          }), UB && (0, fB.jsx)(iB.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === NB ? (0, gB.d)() : IB(HB(NB, jB), {
            packVersion: String(jB.manifest.apiVersion),
            version: String(EB.d)
          })]
        }), uB && (0, fB.jsx)(qB.e, {
          diagnostics: jB.validation.errors,
          more: jB.validation.moreErrors,
          t: IB
        }), aB.length > 0 && (0, fB.jsxs)(fB.Fragment, {
          children: [(0, fB.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, fB.jsx)(iB.c, {
              name: "triangle-exclamation"
            }), IB("shaderPack:offInStrict")]
          }), (0, fB.jsx)(qB.e, {
            diagnostics: aB,
            t: IB
          })]
        })]
      })
    }

    function FB(BB) {
      let {
        setApplySettingsCallback: jB
      } = BB;
      const {
        t: zB
      } = (0, NB.D)(), [nB, IB] = (0, QB.useState)(null), [UB, aB] = (0, QB.useState)(null), [gB, SB] = (0, QB.useState)(null), [MB] = (0, QB.useState)(rB.l), [EB, iB] = (0, QB.useState)(!0), [qB, oB] = (0, QB.useState)(!1), {
        loading: HB,
        error: FB,
        setError: VB,
        onFiles: hB
      } = (0, LB.e)((async BB => {
        const jB = await (0, pB.loadPageShaderPackCompiler)();
        if (!jB) return void VB(zB("shaderPack:compilerUnavailable"));
        aB(jB);
        const QB = (0, sB.toStoredShaderPack)(BB, await (0, JB.f)(jB, BB.files));
        await (0, sB.saveShaderPack)(QB, jB) ? (IB(QB), XB(nB, QB, jB)) : VB(zB("shaderPack:saveFailed"))
      }));

      function XB(BB, zB, QB) {
        (function(BB, jB, zB, QB) {
          return zB || tB(BB, QB) || tB(jB, QB)
        })(BB, zB, (0, sB.isShaderPackChangePending)(), QB) && ((0, sB.markShaderPackChangePending)(), jB((() => kB.i)))
      }
      return (0, QB.useEffect)((() => {
        let BB = !1;
        return async function() {
          const jB = (0, uB.hasUsableWebGpuAdapter)(),
            zB = await (0, mB.h)();
          if (BB) return;
          IB(zB), oB(!0), iB(!1);
          const QB = null !== zB ? (0, pB.loadPageShaderPackCompiler)() : null,
            nB = await jB;
          if (BB) return;
          SB(nB);
          const dB = await QB;
          if (!BB && (aB(dB), null !== zB && nB && null !== dB && (0, sB.shaderPackNeedsCheck)(zB, dB))) {
            const jB = await (0, JB.c)(zB, dB);
            BB || IB((BB => BB === zB ? jB : BB))
          }
        }().catch((jB => {
          console.error("Failed to load the stored shader pack", jB), BB || VB(zB("shaderPack:unexpectedError"))
        })).finally((() => {
          BB || (iB(!1), oB(!1))
        })), () => {
          BB = !0
        }
      }), []), (0, fB.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, fB.jsx)("div", {
          className: "ShaderPackIntro",
          children: zB("shaderPack:intro")
        }), (0, fB.jsx)(YB, {
          to: yB.R,
          className: "ShaderPackBrowseLink",
          children: (0, fB.jsx)(dB.m, {
            className: "ShaderPackBrowseButton",
            children: zB("shaderPackListing:browse")
          })
        }), !1 === gB && (0, fB.jsx)("div", {
          className: "SettingsBoxWarning",
          children: zB(MB ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== FB && (0, fB.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [zB("general:error"), ": ", FB]
        }), nB && (0, fB.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, fB.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, fB.jsxs)("div", {
              children: [(0, fB.jsx)("div", {
                className: "ShaderPackName",
                children: nB.manifest.name
              }), nB.manifest.author && (0, fB.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, GB.h)(zB, "shaderPack:byAuthor", {
                  author: nB.manifest.author
                })
              }), nB.manifest.description && (0, fB.jsx)("div", {
                className: "ShaderPackDescription",
                children: nB.manifest.description
              }), nB.listing && (0, fB.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, fB.jsx)(YB, {
                  to: (0, yB.W)(nB.listing.packId),
                  className: "ShaderPackListingLink",
                  children: zB("shaderPackListing:openPackPage")
                })
              })]
            }), (0, fB.jsx)(dB.J, {
              disabled: EB || HB,
              onClick: async function() {
                iB(!0), VB(null), await (0, sB.removeShaderPack)(), IB(null), iB(!1), XB(nB, null, UB)
              },
              children: zB("shaderPack:removePack")
            })]
          }), (0, fB.jsx)(DB, {
            stored: nB,
            checking: qB,
            webGpuUsable: gB,
            changePending: (0, sB.isShaderPackChangePending)(),
            compiler: UB,
            t: zB
          })]
        }), (0, fB.jsx)(LB.d, {
          busy: EB || HB || qB,
          disabled: EB || HB || qB || !0 !== gB,
          onFiles: hB
        })]
      })
    }

    function YB(BB) {
      let {
        to: jB,
        className: zB,
        children: QB
      } = BB;
      const {
        gameState: dB
      } = (0, UB.m)(["gameState"]), {
        pathname: NB,
        search: uB
      } = (0, nB.n)(), pB = "landingPage" !== dB && "studio" !== dB;
      return (0, fB.jsx)(IB.LinkPreserveSearch, {
        to: jB,
        className: zB,
        target: pB ? "_blank" : void 0,
        onClick: () => {
          pB || ((0, yB.H)(`${NB}${uB}`), (0, aB.c)())
        },
        children: QB
      })
    }
  },
  6515: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => JB,
      B: () => kB,
      D: () => fB,
      H: () => aB,
      J: () => HB,
      L: () => mB,
      N: () => AB,
      Q: () => XB,
      R: () => IB,
      S: () => ZB,
      W: () => uB,
      X: () => NB,
      Z: () => VB,
      ab: () => hB,
      e: () => GB,
      eb: () => LB,
      gb: () => oB,
      i: () => iB,
      j: () => yB,
      m: () => rB,
      p: () => pB,
      s: () => DB,
      u: () => sB,
      v: () => FB,
      z: () => TB
    });
    var QB = zB(6523),
      nB = zB(174),
      dB = zB(4673);
    const IB = "/shader-packs",
      NB = `${IB}/publish`;

    function uB(BB) {
      return `${IB}/${encodeURIComponent(BB)}`
    }
    let UB = null;

    function aB(BB) {
      UB = BB
    }

    function pB() {
      return UB
    }

    function rB() {
      UB = null
    }

    function sB(BB) {
      return BB.playerHasRank("developer") || BB.playerHasRank("admin")
    }
    const JB = ["terrain", "water", "models", "sunShadows", "strict"],
      mB = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function yB(BB, jB) {
      return BB.withFeatures.includes(jB) ? "with" : BB.withoutFeatures.includes(jB) ? "without" : null
    }

    function kB(BB) {
      return null === BB ? "with" : "with" === BB ? "without" : null
    }

    function GB(BB) {
      return "with" === BB ? "only" : null === BB ? "include" : void 0
    }

    function LB(BB, jB) {
      const zB = yB(BB, jB),
        QB = BB => BB.filter((BB => BB !== jB));
      return {
        withFeatures: null === zB ? [...BB.withFeatures, jB] : QB(BB.withFeatures),
        withoutFeatures: "with" === zB ? [...BB.withoutFeatures, jB] : QB(BB.withoutFeatures)
      }
    }
    const gB = "section",
      tB = "sort",
      SB = "filters",
      MB = "q",
      EB = "banned",
      iB = "popular",
      qB = "strict";

    function fB(BB) {
      var jB, zB, nB;
      const IB = BB.get(gB),
        NB = (null !== (jB = BB.get(SB)) && void 0 !== jB ? jB : qB).split(","),
        uB = BB.get(EB);
      return {
        section: "favourites" === IB || "mine" === IB ? IB : "explore",
        sort: null !== (zB = QB.y.find((jB => jB === BB.get(tB)))) && void 0 !== zB ? zB : iB,
        withFeatures: JB.filter((BB => NB.includes(BB) && !NB.includes(`-${BB}`))),
        withoutFeatures: JB.filter((BB => NB.includes(`-${BB}`))),
        searchQuery: (null === (nB = BB.get(MB)) || void 0 === nB ? void 0 : nB.slice(0, QB.O)) || null,
        pageNumber: (0, dB.d)(BB.get(dB.c)),
        banned: "only" === uB ? "with" : "include" === uB ? null : "without"
      }
    }

    function oB(BB, jB) {
      var zB;
      const QB = YB(jB);
      (0, dB.f)(BB, gB, "explore" === jB.section ? null : jB.section), (0, dB.f)(BB, tB, jB.sort === iB ? null : jB.sort), (0, dB.f)(BB, SB, QB === qB ? null : QB), (0, dB.f)(BB, MB, jB.searchQuery), (0, dB.f)(BB, EB, null !== (zB = GB(jB.banned)) && void 0 !== zB ? zB : null), (0, dB.i)(BB, jB.pageNumber)
    }

    function HB(BB) {
      const jB = new URLSearchParams;
      return oB(jB, {
        section: "explore",
        sort: iB,
        withFeatures: "strict" === BB ? [BB] : [BB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${IB}?${jB.toString()}`
    }

    function DB(BB) {
      return YB(BB) === qB
    }

    function FB(BB) {
      return null !== BB.searchQuery || "with" === BB.banned || YB(BB) !== qB
    }

    function YB(BB) {
      return JB.flatMap((jB => {
        const zB = yB(BB, jB);
        return "with" === zB ? [jB] : "without" === zB ? [`-${jB}`] : []
      })).join(",")
    }
    const VB = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      hB = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function XB(BB) {
      return Math.round(100 * Math.max(0, 1 - 1 / BB))
    }

    function ZB(BB, jB, zB, nB) {
      const dB = [];
      BB.isBanned && dB.push({
        tone: "warning",
        text: nB("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: IB
      } = BB;
      if (null === BB.brokenError || IB && !IB.error || dB.push({
          tone: "warning",
          text: nB("shaderPackListing:ownerBroken"),
          detail: BB.brokenError
        }), null !== IB && void 0 !== IB && IB.error) dB.push({
        tone: "warning",
        text: nB(jB ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, QB.m)(IB.error) ? null : IB.error
      });
      else if (IB) {
        const BB = null === IB.renderNotBefore ? 0 : IB.renderNotBefore - zB,
          QB = String(Math.ceil(BB / 6e4)),
          NB = nB(jB ? BB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : BB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: QB
          });
        dB.push({
          tone: "info",
          text: NB,
          detail: null
        })
      }
      return BB.listed || dB.push({
        tone: "info",
        text: nB("shaderPackListing:ownerUnlisted"),
        detail: null
      }), dB
    }

    function AB(BB) {
      return Math.max(1, Math.round(BB / 1024))
    }

    function TB(BB, jB, zB) {
      return BB instanceof nB.c && BB.errorMessageForUser ? BB.errorMessageForUser : jB(zB)
    }
  },
  6523: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => NB,
      D: () => IB,
      H: () => QB,
      L: () => rB,
      O: () => aB,
      P: () => gB,
      T: () => pB,
      U: () => UB,
      d: () => JB,
      f: () => yB,
      h: () => mB,
      l: () => sB,
      m: () => LB,
      n: () => SB,
      o: () => uB,
      s: () => nB,
      u: () => tB,
      y: () => dB
    });
    const QB = ["forest", "desert", "water", "night", "cave"];
    const nB = {
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
      dB = ["popular", "updated", "newest"],
      IB = 3,
      NB = 32,
      uB = 300;

    function UB(BB, jB) {
      return BB.slice(0, jB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const aB = 64,
      pB = 512,
      rB = 18e5;

    function sB(BB) {
      const jB = BB,
        zB = null === jB || void 0 === jB ? void 0 : jB.files;
      return "number" === typeof(null === jB || void 0 === jB ? void 0 : jB.apiVersion) && "string" === typeof jB.name && (null === jB.author || "string" === typeof jB.author) && (void 0 === jB.keepCircleShadows || "boolean" === typeof jB.keepCircleShadows) && "object" === typeof zB && null !== zB && Object.values(zB).every((BB => "string" === typeof BB))
    }
    const JB = "Bloxdhub",
      mB = "https://bloxdhub.com/shaders";

    function yB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const kB = "Screenshot generation failed.",
      GB = "Its screenshots couldn't be generated:";

    function LB(BB) {
      var jB;
      return BB === kB || null !== (jB = null === BB || void 0 === BB ? void 0 : BB.startsWith(GB)) && void 0 !== jB && jB
    }

    function gB(BB, jB) {
      return `shaderPacks/${BB}/${jB}.json`
    }

    function tB(BB, jB, zB, QB) {
      return null === jB.renderId ? SB(BB, jB.baselineVersion, zB, QB) : `${BB}/${function(BB,jB,zB,QB){return`shaderPacks/${BB}/${jB}/${zB}-${QB}.webp`}(jB.packId,jB.renderId,zB,QB)}`
    }

    function SB(BB, jB, zB, QB) {
      return `${BB}/${function(BB,jB,zB){return`shaderPacks/baseline/${BB}/${jB}-${zB}.webp`}(jB,zB,QB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);