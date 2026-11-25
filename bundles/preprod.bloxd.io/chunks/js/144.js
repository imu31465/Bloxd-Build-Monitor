export const id = 144;
export const ids = [144];
export const modules = {
  42177: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      ShaderPackCategory: () => WM
    });
    var OM = iM(44),
      SM = iM(1608),
      jM = iM(1520),
      aM = iM(1591),
      PM = iM(1188),
      nM = iM(83),
      QM = iM(19),
      zM = iM(1717),
      LM = iM(7111),
      mM = iM(308),
      HM = iM(7142),
      hM = iM(7134),
      JM = iM(7148),
      dM = iM(7051),
      yM = iM(5401),
      lM = iM(5430),
      EM = iM(7105),
      UM = iM(3860);

    function GM(MM, rM) {
      const iM = (0, HM.storedPackOutcome)(MM, rM);
      return "none" !== iM.kind || "noCompiler" === iM.reason
    }
    var CM = iM(1116),
      eM = iM.n(CM),
      bM = iM(5435),
      wM = iM(1398),
      tM = iM(7102),
      gM = iM(1303);
    const uM = {
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

    function RM(MM, rM) {
      return "failedRecheck" === MM && rM.listing ? "shaderPack:statusFailedRecheckListed" : uM[MM]
    }

    function pM(MM) {
      let {
        stored: rM,
        checking: iM,
        webGpuUsable: OM,
        changePending: SM,
        compiler: jM,
        t: aM
      } = MM;
      const PM = function(MM, rM, iM, OM, SM) {
          const jM = (0, HM.storedPackOutcome)(MM, SM);
          return "none" === jM.kind ? "noCompiler" === jM.reason ? rM ? "checking" : "noCompiler" : "otherApiVersion" === jM.reason ? "wrongApiVersion" : "failed" : (0, UM.f)() ? "harnessBuild" : "blocked" === jM.kind ? (0, HM.shaderPackNeedsCheck)(MM, SM) ? rM ? "checking" : !1 === iM ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === iM ? "offNoWebGpu" : OM ? "readyAfterReload" : "ready"
        }(rM, iM, OM, SM, jM),
        nM = "failed" === PM || "failedRecheck" === PM,
        QM = nM || "wrongApiVersion" === PM || "noCompiler" === PM,
        zM = "ready" === PM || "readyAfterReload" === PM ? rM.validation.offInStrict : [];
      return (0, gM.jsxs)(gM.Fragment, {
        children: [(0, gM.jsxs)("div", {
          className: eM()("ShaderPackStatus", {
            Ready: "ready" === PM,
            Failed: QM
          }),
          children: ["ready" === PM && (0, gM.jsx)(wM.b, {
            name: "circle-check"
          }), QM && (0, gM.jsx)(wM.b, {
            name: "triangle-exclamation"
          }), "harnessBuild" === PM ? (0, UM.e)() : aM(RM(PM, rM), {
            packVersion: String(rM.manifest.apiVersion),
            version: String(bM.e)
          })]
        }), nM && (0, gM.jsx)(tM.b, {
          diagnostics: rM.validation.errors,
          more: rM.validation.moreErrors,
          t: aM
        }), zM.length > 0 && (0, gM.jsxs)(gM.Fragment, {
          children: [(0, gM.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, gM.jsx)(wM.b, {
              name: "triangle-exclamation"
            }), aM("shaderPack:offInStrict")]
          }), (0, gM.jsx)(tM.b, {
            diagnostics: zM,
            t: aM
          })]
        })]
      })
    }

    function WM(MM) {
      let {
        setApplySettingsCallback: rM
      } = MM;
      const {
        t: iM
      } = (0, PM.A)(), [SM, aM] = (0, OM.useState)(null), [QM, zM] = (0, OM.useState)(null), [UM, CM] = (0, OM.useState)(null), [eM] = (0, OM.useState)(mM.k), [bM, wM] = (0, OM.useState)(!0), [tM, uM] = (0, OM.useState)(!1), {
        loading: RM,
        error: WM,
        setError: DM,
        onFiles: kM
      } = (0, EM.e)((async MM => {
        const rM = await (0, LM.loadPageShaderPackCompiler)();
        if (!rM) return void DM(iM("shaderPack:compilerUnavailable"));
        zM(rM);
        const OM = (0, HM.toStoredShaderPack)(MM, await (0, hM.f)(rM, MM.files));
        await (0, HM.saveShaderPack)(OM, rM) ? (aM(OM), ZM(SM, OM, rM)) : DM(iM("shaderPack:saveFailed"))
      }));

      function ZM(MM, iM, OM) {
        (function(MM, rM, iM, OM) {
          return iM || GM(MM, OM) || GM(rM, OM)
        })(MM, iM, (0, HM.isShaderPackChangePending)(), OM) && ((0, HM.markShaderPackChangePending)(), rM((() => yM.j)))
      }
      return (0, OM.useEffect)((() => {
        let MM = !1;
        return async function() {
          const rM = (0, nM.hasUsableWebGpuAdapter)(),
            iM = await (0, JM.d)();
          if (MM) return;
          aM(iM), uM(!0), wM(!1);
          const OM = null !== iM ? (0, LM.loadPageShaderPackCompiler)() : null,
            SM = await rM;
          if (MM) return;
          CM(SM);
          const jM = await OM;
          if (!MM && (zM(jM), null !== iM && SM && null !== jM && (0, HM.shaderPackNeedsCheck)(iM, jM))) {
            const rM = await (0, hM.e)(iM, jM);
            MM || aM((MM => MM === iM ? rM : MM))
          }
        }().catch((rM => {
          console.error("Failed to load the stored shader pack", rM), MM || DM(iM("shaderPack:unexpectedError"))
        })).finally((() => {
          MM || (wM(!1), uM(!1))
        })), () => {
          MM = !0
        }
      }), []), (0, gM.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, gM.jsx)("div", {
          className: "ShaderPackIntro",
          children: iM("shaderPack:intro")
        }), (0, gM.jsx)(sM, {
          to: dM.P,
          className: "ShaderPackBrowseLink",
          children: (0, gM.jsx)(jM.p, {
            className: "ShaderPackBrowseButton",
            children: iM("shaderPackListing:browse")
          })
        }), !1 === UM && (0, gM.jsx)("div", {
          className: "SettingsBoxWarning",
          children: iM(eM ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== WM && (0, gM.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [iM("general:error"), ": ", WM]
        }), SM && (0, gM.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, gM.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, gM.jsxs)("div", {
              children: [(0, gM.jsx)("div", {
                className: "ShaderPackName",
                children: SM.manifest.name
              }), SM.manifest.author && (0, gM.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, lM.i)(iM, "shaderPack:byAuthor", {
                  author: SM.manifest.author
                })
              }), SM.manifest.description && (0, gM.jsx)("div", {
                className: "ShaderPackDescription",
                children: SM.manifest.description
              }), SM.listing && (0, gM.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, gM.jsx)(sM, {
                  to: (0, dM.W)(SM.listing.packId),
                  className: "ShaderPackListingLink",
                  children: iM("shaderPackListing:openPackPage")
                })
              })]
            }), (0, gM.jsx)(jM.N, {
              disabled: bM || RM,
              onClick: async function() {
                wM(!0), DM(null), await (0, HM.removeShaderPack)(), aM(null), wM(!1), ZM(SM, null, QM)
              },
              children: iM("shaderPack:removePack")
            })]
          }), (0, gM.jsx)(pM, {
            stored: SM,
            checking: tM,
            webGpuUsable: UM,
            changePending: (0, HM.isShaderPackChangePending)(),
            compiler: QM,
            t: iM
          })]
        }), (0, gM.jsx)(EM.b, {
          busy: bM || RM || tM,
          disabled: bM || RM || tM || !0 !== UM,
          onFiles: kM
        })]
      })
    }

    function sM(MM) {
      let {
        to: rM,
        className: iM,
        children: OM
      } = MM;
      const {
        gameState: jM
      } = (0, QM.m)(["gameState"]), {
        pathname: PM,
        search: nM
      } = (0, SM.u)(), LM = "landingPage" !== jM && "studio" !== jM;
      return (0, gM.jsx)(aM.LinkPreserveSearch, {
        to: rM,
        className: iM,
        target: LM ? "_blank" : void 0,
        onClick: () => {
          LM || ((0, dM.B)(`${PM}${nM}`), (0, zM.i)())
        },
        children: OM
      })
    }
  },
  7051: (MM, rM, iM) => {
    iM.d(rM, {
      $: () => DM,
      B: () => zM,
      F: () => RM,
      I: () => JM,
      K: () => fM,
      N: () => ZM,
      P: () => aM,
      S: () => oM,
      W: () => nM,
      Y: () => PM,
      c: () => lM,
      d: () => wM,
      db: () => kM,
      fb: () => EM,
      g: () => dM,
      h: () => mM,
      j: () => LM,
      jb: () => uM,
      n: () => pM,
      q: () => HM,
      r: () => WM,
      u: () => YM,
      w: () => hM,
      x: () => yM,
      z: () => gM
    });
    var OM = iM(7054),
      SM = iM(143),
      jM = iM(4937);
    const aM = "/shader-packs",
      PM = `${aM}/publish`;

    function nM(MM) {
      return `${aM}/${encodeURIComponent(MM)}`
    }
    let QM = null;

    function zM(MM) {
      QM = MM
    }

    function LM() {
      return QM
    }

    function mM() {
      QM = null
    }

    function HM(MM) {
      return MM.playerHasRank("developer") || MM.playerHasRank("admin")
    }
    const hM = ["terrain", "water", "models", "sunShadows", "strict"],
      JM = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function dM(MM, rM) {
      return MM.withFeatures.includes(rM) ? "with" : MM.withoutFeatures.includes(rM) ? "without" : null
    }

    function yM(MM) {
      return null === MM ? "with" : "with" === MM ? "without" : null
    }

    function lM(MM) {
      return "with" === MM ? "only" : null === MM ? "include" : void 0
    }

    function EM(MM, rM) {
      const iM = dM(MM, rM),
        OM = MM => MM.filter((MM => MM !== rM));
      return {
        withFeatures: null === iM ? [...MM.withFeatures, rM] : OM(MM.withFeatures),
        withoutFeatures: "with" === iM ? [...MM.withoutFeatures, rM] : OM(MM.withoutFeatures)
      }
    }
    const UM = "section",
      GM = "sort",
      CM = "filters",
      eM = "q",
      bM = "banned",
      wM = "popular",
      tM = "strict";

    function gM(MM) {
      var rM, iM, SM;
      const aM = MM.get(UM),
        PM = (null !== (rM = MM.get(CM)) && void 0 !== rM ? rM : tM).split(","),
        nM = MM.get(bM);
      return {
        section: "favourites" === aM || "mine" === aM ? aM : "explore",
        sort: null !== (iM = OM.y.find((rM => rM === MM.get(GM)))) && void 0 !== iM ? iM : wM,
        withFeatures: hM.filter((MM => PM.includes(MM) && !PM.includes(`-${MM}`))),
        withoutFeatures: hM.filter((MM => PM.includes(`-${MM}`))),
        searchQuery: (null === (SM = MM.get(eM)) || void 0 === SM ? void 0 : SM.slice(0, OM.M)) || null,
        pageNumber: (0, jM.d)(MM.get(jM.c)),
        banned: "only" === nM ? "with" : "include" === nM ? null : "without"
      }
    }

    function uM(MM, rM) {
      var iM;
      const OM = sM(rM);
      (0, jM.f)(MM, UM, "explore" === rM.section ? null : rM.section), (0, jM.f)(MM, GM, rM.sort === wM ? null : rM.sort), (0, jM.f)(MM, CM, OM === tM ? null : OM), (0, jM.f)(MM, eM, rM.searchQuery), (0, jM.f)(MM, bM, null !== (iM = lM(rM.banned)) && void 0 !== iM ? iM : null), (0, jM.h)(MM, rM.pageNumber)
    }

    function RM(MM) {
      const rM = new URLSearchParams;
      return uM(rM, {
        section: "explore",
        sort: wM,
        withFeatures: "strict" === MM ? [MM] : [MM, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${aM}?${rM.toString()}`
    }

    function pM(MM) {
      return sM(MM) === tM
    }

    function WM(MM) {
      return null !== MM.searchQuery || "with" === MM.banned || sM(MM) !== tM
    }

    function sM(MM) {
      return hM.flatMap((rM => {
        const iM = dM(MM, rM);
        return "with" === iM ? [rM] : "without" === iM ? [`-${rM}`] : []
      })).join(",")
    }
    const DM = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      kM = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function ZM(MM) {
      return Math.round(100 * Math.max(0, 1 - 1 / MM))
    }

    function oM(MM, rM, iM, SM) {
      const jM = [];
      MM.isBanned && jM.push({
        tone: "warning",
        text: SM("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: aM
      } = MM;
      if (null === MM.brokenError || aM && !aM.error || jM.push({
          tone: "warning",
          text: SM("shaderPackListing:ownerBroken"),
          detail: MM.brokenError
        }), null !== aM && void 0 !== aM && aM.error) jM.push({
        tone: "warning",
        text: SM(rM ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, OM.m)(aM.error) ? null : aM.error
      });
      else if (aM) {
        const MM = null === aM.renderNotBefore ? 0 : aM.renderNotBefore - iM,
          OM = String(Math.ceil(MM / 6e4)),
          PM = SM(rM ? MM > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : MM > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: OM
          });
        jM.push({
          tone: "info",
          text: PM,
          detail: null
        })
      }
      return MM.listed || jM.push({
        tone: "info",
        text: SM("shaderPackListing:ownerUnlisted"),
        detail: null
      }), jM
    }

    function fM(MM) {
      return Math.max(1, Math.round(MM / 1024))
    }

    function YM(MM, rM, iM) {
      return MM instanceof SM.e && MM.errorMessageForUser ? MM.errorMessageForUser : rM(iM)
    }
  },
  7054: (MM, rM, iM) => {
    iM.d(rM, {
      D: () => aM,
      E: () => OM,
      I: () => mM,
      M: () => zM,
      Q: () => UM,
      U: () => LM,
      V: () => QM,
      b: () => hM,
      e: () => dM,
      g: () => JM,
      k: () => HM,
      m: () => EM,
      q: () => CM,
      t: () => nM,
      v: () => SM,
      w: () => GM,
      y: () => jM,
      z: () => PM
    });
    const OM = ["forest", "desert", "water", "night", "cave"];
    const SM = {
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
      jM = ["popular", "updated", "newest"],
      aM = 3,
      PM = 32,
      nM = 300;

    function QM(MM, rM) {
      return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
    }
    const zM = 64,
      LM = 512,
      mM = 18e5;

    function HM(MM) {
      const rM = MM,
        iM = null === rM || void 0 === rM ? void 0 : rM.files;
      return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof iM && null !== iM && Object.values(iM).every((MM => "string" === typeof MM))
    }
    const hM = "Bloxdhub",
      JM = "https://bloxdhub.com/shaders";

    function dM(MM) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
    }
    const yM = "Screenshot generation failed.",
      lM = "Its screenshots couldn't be generated:";

    function EM(MM) {
      var rM;
      return MM === yM || null !== (rM = null === MM || void 0 === MM ? void 0 : MM.startsWith(lM)) && void 0 !== rM && rM
    }

    function UM(MM, rM) {
      return `shaderPacks/${MM}/${rM}.json`
    }

    function GM(MM, rM, iM, OM) {
      return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
    }

    function CM(MM, rM, iM, OM) {
      return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);