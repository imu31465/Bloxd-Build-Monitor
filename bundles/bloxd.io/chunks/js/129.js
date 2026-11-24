export const id = 129;
export const ids = [129];
export const modules = {
  41084: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      ShaderPackCategory: () => LS
    });
    var tS = gS(64),
      bS = gS(1622),
      XS = gS(1528),
      xS = gS(1608),
      NS = gS(1281),
      qS = gS(104),
      uS = gS(24),
      IS = gS(1733),
      fS = gS(6810),
      kS = gS(362),
      aS = gS(6844),
      KS = gS(6839),
      jS = gS(6848),
      GS = gS(6754),
      CS = gS(5148),
      nS = gS(5204),
      PS = gS(6805),
      QS = gS(3600);

    function DS(SS, HS) {
      const gS = (0, aS.storedPackOutcome)(SS, HS);
      return "none" !== gS.kind || "noCompiler" === gS.reason
    }
    var wS = gS(1121),
      hS = gS.n(wS),
      ZS = gS(5212),
      JS = gS(1127),
      OS = gS(6796),
      dS = gS(1181);
    const cS = {
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

    function vS(SS, HS) {
      return "failedRecheck" === SS && HS.listing ? "shaderPack:statusFailedRecheckListed" : cS[SS]
    }

    function ES(SS) {
      let {
        stored: HS,
        checking: gS,
        webGpuUsable: tS,
        changePending: bS,
        compiler: XS,
        t: xS
      } = SS;
      const NS = function(SS, HS, gS, tS, bS) {
          const XS = (0, aS.storedPackOutcome)(SS, bS);
          return "none" === XS.kind ? "noCompiler" === XS.reason ? HS ? "checking" : "noCompiler" : "otherApiVersion" === XS.reason ? "wrongApiVersion" : "failed" : (0, QS.e)() ? "harnessBuild" : "blocked" === XS.kind ? (0, aS.shaderPackNeedsCheck)(SS, bS) ? HS ? "checking" : !1 === gS ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === gS ? "offNoWebGpu" : tS ? "readyAfterReload" : "ready"
        }(HS, gS, tS, bS, XS),
        qS = "failed" === NS || "failedRecheck" === NS,
        uS = qS || "wrongApiVersion" === NS || "noCompiler" === NS,
        IS = "ready" === NS || "readyAfterReload" === NS ? HS.validation.offInStrict : [];
      return (0, dS.jsxs)(dS.Fragment, {
        children: [(0, dS.jsxs)("div", {
          className: hS()("ShaderPackStatus", {
            Ready: "ready" === NS,
            Failed: uS
          }),
          children: ["ready" === NS && (0, dS.jsx)(JS.d, {
            name: "circle-check"
          }), uS && (0, dS.jsx)(JS.d, {
            name: "triangle-exclamation"
          }), "harnessBuild" === NS ? (0, QS.d)() : xS(vS(NS, HS), {
            packVersion: String(HS.manifest.apiVersion),
            version: String(ZS.e)
          })]
        }), qS && (0, dS.jsx)(OS.c, {
          diagnostics: HS.validation.errors,
          more: HS.validation.moreErrors,
          t: xS
        }), IS.length > 0 && (0, dS.jsxs)(dS.Fragment, {
          children: [(0, dS.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, dS.jsx)(JS.d, {
              name: "triangle-exclamation"
            }), xS("shaderPack:offInStrict")]
          }), (0, dS.jsx)(OS.c, {
            diagnostics: IS,
            t: xS
          })]
        })]
      })
    }

    function LS(SS) {
      let {
        setApplySettingsCallback: HS
      } = SS;
      const {
        t: gS
      } = (0, NS.F)(), [bS, xS] = (0, tS.useState)(null), [uS, IS] = (0, tS.useState)(null), [QS, wS] = (0, tS.useState)(null), [hS] = (0, tS.useState)(kS.m), [ZS, JS] = (0, tS.useState)(!0), [OS, cS] = (0, tS.useState)(!1), {
        loading: vS,
        error: LS,
        setError: AS,
        onFiles: yS
      } = (0, PS.h)((async SS => {
        const HS = await (0, fS.loadPageShaderPackCompiler)();
        if (!HS) return void AS(gS("shaderPack:compilerUnavailable"));
        IS(HS);
        const tS = (0, aS.toStoredShaderPack)(SS, await (0, KS.g)(HS, SS.files));
        await (0, aS.saveShaderPack)(tS, HS) ? (xS(tS), VS(bS, tS, HS)) : AS(gS("shaderPack:saveFailed"))
      }));

      function VS(SS, gS, tS) {
        (function(SS, HS, gS, tS) {
          return gS || DS(SS, tS) || DS(HS, tS)
        })(SS, gS, (0, aS.isShaderPackChangePending)(), tS) && ((0, aS.markShaderPackChangePending)(), HS((() => CS.o)))
      }
      return (0, tS.useEffect)((() => {
        let SS = !1;
        return async function() {
          const HS = (0, qS.hasUsableWebGpuAdapter)(),
            gS = await (0, jS.f)();
          if (SS) return;
          xS(gS), cS(!0), JS(!1);
          const tS = null !== gS ? (0, fS.loadPageShaderPackCompiler)() : null,
            bS = await HS;
          if (SS) return;
          wS(bS);
          const XS = await tS;
          if (!SS && (IS(XS), null !== gS && bS && null !== XS && (0, aS.shaderPackNeedsCheck)(gS, XS))) {
            const HS = await (0, KS.c)(gS, XS);
            SS || xS((SS => SS === gS ? HS : SS))
          }
        }().catch((HS => {
          console.error("Failed to load the stored shader pack", HS), SS || AS(gS("shaderPack:unexpectedError"))
        })).finally((() => {
          SS || (JS(!1), cS(!1))
        })), () => {
          SS = !0
        }
      }), []), (0, dS.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, dS.jsx)("div", {
          className: "ShaderPackIntro",
          children: gS("shaderPack:intro")
        }), (0, dS.jsx)(YS, {
          to: GS.P,
          className: "ShaderPackBrowseLink",
          children: (0, dS.jsx)(XS.p, {
            className: "ShaderPackBrowseButton",
            children: gS("shaderPackListing:browse")
          })
        }), !1 === QS && (0, dS.jsx)("div", {
          className: "SettingsBoxWarning",
          children: gS(hS ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== LS && (0, dS.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [gS("general:error"), ": ", LS]
        }), bS && (0, dS.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, dS.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, dS.jsxs)("div", {
              children: [(0, dS.jsx)("div", {
                className: "ShaderPackName",
                children: bS.manifest.name
              }), bS.manifest.author && (0, dS.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, nS.j)(gS, "shaderPack:byAuthor", {
                  author: bS.manifest.author
                })
              }), bS.manifest.description && (0, dS.jsx)("div", {
                className: "ShaderPackDescription",
                children: bS.manifest.description
              }), bS.listing && (0, dS.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, dS.jsx)(YS, {
                  to: (0, GS.W)(bS.listing.packId),
                  className: "ShaderPackListingLink",
                  children: gS("shaderPackListing:openPackPage")
                })
              })]
            }), (0, dS.jsx)(XS.M, {
              disabled: ZS || vS,
              onClick: async function() {
                JS(!0), AS(null), await (0, aS.removeShaderPack)(), xS(null), JS(!1), VS(bS, null, uS)
              },
              children: gS("shaderPack:removePack")
            })]
          }), (0, dS.jsx)(ES, {
            stored: bS,
            checking: OS,
            webGpuUsable: QS,
            changePending: (0, aS.isShaderPackChangePending)(),
            compiler: uS,
            t: gS
          })]
        }), (0, dS.jsx)(PS.e, {
          busy: ZS || vS || OS,
          disabled: ZS || vS || OS || !0 !== QS,
          onFiles: yS
        })]
      })
    }

    function YS(SS) {
      let {
        to: HS,
        className: gS,
        children: tS
      } = SS;
      const {
        gameState: XS
      } = (0, uS.m)(["gameState"]), {
        pathname: NS,
        search: qS
      } = (0, bS.t)(), fS = "landingPage" !== XS && "studio" !== XS;
      return (0, dS.jsx)(xS.LinkPreserveSearch, {
        to: HS,
        className: gS,
        target: fS ? "_blank" : void 0,
        onClick: () => {
          fS || ((0, GS.D)(`${NS}${qS}`), (0, IS.g)())
        },
        children: tS
      })
    }
  },
  6754: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => dS,
      D: () => IS,
      H: () => vS,
      J: () => jS,
      K: () => WS,
      O: () => VS,
      P: () => xS,
      S: () => iS,
      W: () => qS,
      _: () => NS,
      ab: () => AS,
      db: () => yS,
      e: () => nS,
      eb: () => PS,
      gb: () => cS,
      h: () => JS,
      j: () => GS,
      k: () => kS,
      l: () => fS,
      n: () => ES,
      o: () => aS,
      p: () => LS,
      s: () => zS,
      w: () => KS,
      y: () => CS
    });
    var tS = gS(6760),
      bS = gS(160),
      XS = gS(4693);
    const xS = "/shader-packs",
      NS = `${xS}/publish`;

    function qS(SS) {
      return `${xS}/${encodeURIComponent(SS)}`
    }
    let uS = null;

    function IS(SS) {
      uS = SS
    }

    function fS() {
      return uS
    }

    function kS() {
      uS = null
    }

    function aS(SS) {
      return SS.playerHasRank("developer") || SS.playerHasRank("admin")
    }
    const KS = ["terrain", "water", "models", "sunShadows", "strict"],
      jS = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function GS(SS, HS) {
      return SS.withFeatures.includes(HS) ? "with" : SS.withoutFeatures.includes(HS) ? "without" : null
    }

    function CS(SS) {
      return null === SS ? "with" : "with" === SS ? "without" : null
    }

    function nS(SS) {
      return "with" === SS ? "only" : null === SS ? "include" : void 0
    }

    function PS(SS, HS) {
      const gS = GS(SS, HS),
        tS = SS => SS.filter((SS => SS !== HS));
      return {
        withFeatures: null === gS ? [...SS.withFeatures, HS] : tS(SS.withFeatures),
        withoutFeatures: "with" === gS ? [...SS.withoutFeatures, HS] : tS(SS.withoutFeatures)
      }
    }
    const QS = "section",
      DS = "sort",
      wS = "filters",
      hS = "q",
      ZS = "banned",
      JS = "popular",
      OS = "strict";

    function dS(SS) {
      var HS, gS, bS;
      const xS = SS.get(QS),
        NS = (null !== (HS = SS.get(wS)) && void 0 !== HS ? HS : OS).split(","),
        qS = SS.get(ZS);
      return {
        section: "favourites" === xS || "mine" === xS ? xS : "explore",
        sort: null !== (gS = tS.C.find((HS => HS === SS.get(DS)))) && void 0 !== gS ? gS : JS,
        withFeatures: KS.filter((SS => NS.includes(SS) && !NS.includes(`-${SS}`))),
        withoutFeatures: KS.filter((SS => NS.includes(`-${SS}`))),
        searchQuery: (null === (bS = SS.get(hS)) || void 0 === bS ? void 0 : bS.slice(0, tS.Q)) || null,
        pageNumber: (0, XS.e)(SS.get(XS.c)),
        banned: "only" === qS ? "with" : "include" === qS ? null : "without"
      }
    }

    function cS(SS, HS) {
      var gS;
      const tS = YS(HS);
      (0, XS.f)(SS, QS, "explore" === HS.section ? null : HS.section), (0, XS.f)(SS, DS, HS.sort === JS ? null : HS.sort), (0, XS.f)(SS, wS, tS === OS ? null : tS), (0, XS.f)(SS, hS, HS.searchQuery), (0, XS.f)(SS, ZS, null !== (gS = nS(HS.banned)) && void 0 !== gS ? gS : null), (0, XS.i)(SS, HS.pageNumber)
    }

    function vS(SS) {
      const HS = new URLSearchParams;
      return cS(HS, {
        section: "explore",
        sort: JS,
        withFeatures: "strict" === SS ? [SS] : [SS, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${xS}?${HS.toString()}`
    }

    function ES(SS) {
      return YS(SS) === OS
    }

    function LS(SS) {
      return null !== SS.searchQuery || "with" === SS.banned || YS(SS) !== OS
    }

    function YS(SS) {
      return KS.flatMap((HS => {
        const gS = GS(SS, HS);
        return "with" === gS ? [HS] : "without" === gS ? [`-${HS}`] : []
      })).join(",")
    }
    const AS = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      yS = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function VS(SS) {
      return Math.round(100 * Math.max(0, 1 - 1 / SS))
    }

    function iS(SS, HS, gS, bS) {
      const XS = [];
      SS.isBanned && XS.push({
        tone: "warning",
        text: bS("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: xS
      } = SS;
      if (null === SS.brokenError || xS && !xS.error || XS.push({
          tone: "warning",
          text: bS("shaderPackListing:ownerBroken"),
          detail: SS.brokenError
        }), null !== xS && void 0 !== xS && xS.error) XS.push({
        tone: "warning",
        text: bS(HS ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, tS.q)(xS.error) ? null : xS.error
      });
      else if (xS) {
        const SS = null === xS.renderNotBefore ? 0 : xS.renderNotBefore - gS,
          tS = String(Math.ceil(SS / 6e4)),
          NS = bS(HS ? SS > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : SS > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: tS
          });
        XS.push({
          tone: "info",
          text: NS,
          detail: null
        })
      }
      return SS.listed || XS.push({
        tone: "info",
        text: bS("shaderPackListing:ownerUnlisted"),
        detail: null
      }), XS
    }

    function WS(SS) {
      return Math.max(1, Math.round(SS / 1024))
    }

    function zS(SS, HS, gS) {
      return SS instanceof bS.b && SS.errorMessageForUser ? SS.errorMessageForUser : HS(gS)
    }
  },
  6760: (SS, HS, gS) => {
    gS.d(HS, {
      C: () => XS,
      E: () => NS,
      I: () => xS,
      K: () => tS,
      M: () => kS,
      Q: () => IS,
      R: () => QS,
      T: () => fS,
      V: () => uS,
      e: () => KS,
      h: () => GS,
      i: () => jS,
      m: () => aS,
      q: () => PS,
      u: () => wS,
      v: () => qS,
      w: () => bS,
      z: () => DS
    });
    const tS = ["forest", "desert", "water", "night", "cave"];
    const bS = {
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
      XS = ["popular", "updated", "newest"],
      xS = 3,
      NS = 32,
      qS = 300;

    function uS(SS, HS) {
      return SS.slice(0, HS).replace(/[\uD800-\uDBFF]$/, "")
    }
    const IS = 64,
      fS = 512,
      kS = 18e5;

    function aS(SS) {
      const HS = SS,
        gS = null === HS || void 0 === HS ? void 0 : HS.files;
      return "number" === typeof(null === HS || void 0 === HS ? void 0 : HS.apiVersion) && "string" === typeof HS.name && (null === HS.author || "string" === typeof HS.author) && (void 0 === HS.keepCircleShadows || "boolean" === typeof HS.keepCircleShadows) && "object" === typeof gS && null !== gS && Object.values(gS).every((SS => "string" === typeof SS))
    }
    const KS = "Bloxdhub",
      jS = "https://bloxdhub.com/shaders";

    function GS(SS) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(SS)}`
    }
    const CS = "Screenshot generation failed.",
      nS = "Its screenshots couldn't be generated:";

    function PS(SS) {
      var HS;
      return SS === CS || null !== (HS = null === SS || void 0 === SS ? void 0 : SS.startsWith(nS)) && void 0 !== HS && HS
    }

    function QS(SS, HS) {
      return `shaderPacks/${SS}/${HS}.json`
    }

    function DS(SS, HS, gS, tS) {
      return null === HS.renderId ? wS(SS, HS.baselineVersion, gS, tS) : `${SS}/${function(SS,HS,gS,tS){return`shaderPacks/${SS}/${HS}/${gS}-${tS}.webp`}(HS.packId,HS.renderId,gS,tS)}`
    }

    function wS(SS, HS, gS, tS) {
      return `${SS}/${function(SS,HS,gS){return`shaderPacks/baseline/${SS}/${HS}-${gS}.webp`}(HS,gS,tS)}`
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);