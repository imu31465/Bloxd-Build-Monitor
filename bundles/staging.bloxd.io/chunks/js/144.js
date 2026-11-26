export const id = 144;
export const ids = [144];
export const modules = {
  42398: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      ShaderPackCategory: () => RV
    });
    var JV = xV(62),
      YV = xV(1625),
      UV = xV(1551),
      yV = xV(1612),
      pV = xV(1220),
      QV = xV(99),
      nV = xV(27),
      wV = xV(1725),
      ZV = xV(7176),
      vV = xV(348),
      rV = xV(7212),
      kV = xV(7208),
      bV = xV(7216),
      EV = xV(7130),
      BV = xV(5500),
      jV = xV(5548),
      qV = xV(7174),
      tV = xV(3911);

    function FV(VV, eV) {
      const xV = (0, rV.storedPackOutcome)(VV, eV);
      return "none" !== xV.kind || "noCompiler" === xV.reason
    }
    var TV = xV(1146),
      PV = xV.n(TV),
      AV = xV(5556),
      NV = xV(1414),
      XV = xV(7169),
      MV = xV(1321);
    const zV = {
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

    function GV(VV, eV) {
      return "failedRecheck" === VV && eV.listing ? "shaderPack:statusFailedRecheckListed" : zV[VV]
    }

    function WV(VV) {
      let {
        stored: eV,
        checking: xV,
        webGpuUsable: JV,
        changePending: YV,
        compiler: UV,
        t: yV
      } = VV;
      const pV = function(VV, eV, xV, JV, YV) {
          const UV = (0, rV.storedPackOutcome)(VV, YV);
          return "none" === UV.kind ? "noCompiler" === UV.reason ? eV ? "checking" : "noCompiler" : "otherApiVersion" === UV.reason ? "wrongApiVersion" : "failed" : (0, tV.f)() ? "harnessBuild" : "blocked" === UV.kind ? (0, rV.shaderPackNeedsCheck)(VV, YV) ? eV ? "checking" : !1 === xV ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === xV ? "offNoWebGpu" : JV ? "readyAfterReload" : "ready"
        }(eV, xV, JV, YV, UV),
        QV = "failed" === pV || "failedRecheck" === pV,
        nV = QV || "wrongApiVersion" === pV || "noCompiler" === pV,
        wV = "ready" === pV || "readyAfterReload" === pV ? eV.validation.offInStrict : [];
      return (0, MV.jsxs)(MV.Fragment, {
        children: [(0, MV.jsxs)("div", {
          className: PV()("ShaderPackStatus", {
            Ready: "ready" === pV,
            Failed: nV
          }),
          children: ["ready" === pV && (0, MV.jsx)(NV.b, {
            name: "circle-check"
          }), nV && (0, MV.jsx)(NV.b, {
            name: "triangle-exclamation"
          }), "harnessBuild" === pV ? (0, tV.d)() : yV(GV(pV, eV), {
            packVersion: String(eV.manifest.apiVersion),
            version: String(AV.d)
          })]
        }), QV && (0, MV.jsx)(XV.d, {
          diagnostics: eV.validation.errors,
          more: eV.validation.moreErrors,
          t: yV
        }), wV.length > 0 && (0, MV.jsxs)(MV.Fragment, {
          children: [(0, MV.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, MV.jsx)(NV.b, {
              name: "triangle-exclamation"
            }), yV("shaderPack:offInStrict")]
          }), (0, MV.jsx)(XV.d, {
            diagnostics: wV,
            t: yV
          })]
        })]
      })
    }

    function RV(VV) {
      let {
        setApplySettingsCallback: eV
      } = VV;
      const {
        t: xV
      } = (0, pV.A)(), [YV, yV] = (0, JV.useState)(null), [nV, wV] = (0, JV.useState)(null), [tV, TV] = (0, JV.useState)(null), [PV] = (0, JV.useState)(vV.l), [AV, NV] = (0, JV.useState)(!0), [XV, zV] = (0, JV.useState)(!1), {
        loading: GV,
        error: RV,
        setError: DV,
        onFiles: iV
      } = (0, qV.c)((async VV => {
        const eV = await (0, ZV.loadPageShaderPackCompiler)();
        if (!eV) return void DV(xV("shaderPack:compilerUnavailable"));
        wV(eV);
        const JV = (0, rV.toStoredShaderPack)(VV, await (0, kV.d)(eV, VV.files));
        await (0, rV.saveShaderPack)(JV, eV) ? (yV(JV), CV(YV, JV, eV)) : DV(xV("shaderPack:saveFailed"))
      }));

      function CV(VV, xV, JV) {
        (function(VV, eV, xV, JV) {
          return xV || FV(VV, JV) || FV(eV, JV)
        })(VV, xV, (0, rV.isShaderPackChangePending)(), JV) && ((0, rV.markShaderPackChangePending)(), eV((() => BV.q)))
      }
      return (0, JV.useEffect)((() => {
        let VV = !1;
        return async function() {
          const eV = (0, QV.hasUsableWebGpuAdapter)(),
            xV = await (0, bV.f)();
          if (VV) return;
          yV(xV), zV(!0), NV(!1);
          const JV = null !== xV ? (0, ZV.loadPageShaderPackCompiler)() : null,
            YV = await eV;
          if (VV) return;
          TV(YV);
          const UV = await JV;
          if (!VV && (wV(UV), null !== xV && YV && null !== UV && (0, rV.shaderPackNeedsCheck)(xV, UV))) {
            const eV = await (0, kV.b)(xV, UV);
            VV || yV((VV => VV === xV ? eV : VV))
          }
        }().catch((eV => {
          console.error("Failed to load the stored shader pack", eV), VV || DV(xV("shaderPack:unexpectedError"))
        })).finally((() => {
          VV || (NV(!1), zV(!1))
        })), () => {
          VV = !0
        }
      }), []), (0, MV.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, MV.jsx)("div", {
          className: "ShaderPackIntro",
          children: xV("shaderPack:intro")
        }), (0, MV.jsx)(gV, {
          to: EV.Y,
          className: "ShaderPackBrowseLink",
          children: (0, MV.jsx)(UV.m, {
            className: "ShaderPackBrowseButton",
            children: xV("shaderPackListing:browse")
          })
        }), !1 === tV && (0, MV.jsx)("div", {
          className: "SettingsBoxWarning",
          children: xV(PV ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== RV && (0, MV.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [xV("general:error"), ": ", RV]
        }), YV && (0, MV.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, MV.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, MV.jsxs)("div", {
              children: [(0, MV.jsx)("div", {
                className: "ShaderPackName",
                children: YV.manifest.name
              }), YV.manifest.author && (0, MV.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, jV.h)(xV, "shaderPack:byAuthor", {
                  author: YV.manifest.author
                })
              }), YV.manifest.description && (0, MV.jsx)("div", {
                className: "ShaderPackDescription",
                children: YV.manifest.description
              }), YV.listing && (0, MV.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, MV.jsx)(gV, {
                  to: (0, EV.db)(YV.listing.packId),
                  className: "ShaderPackListingLink",
                  children: xV("shaderPackListing:openPackPage")
                })
              })]
            }), (0, MV.jsx)(UV.G, {
              disabled: AV || GV,
              onClick: async function() {
                NV(!0), DV(null), await (0, rV.removeShaderPack)(), yV(null), NV(!1), CV(YV, null, nV)
              },
              children: xV("shaderPack:removePack")
            })]
          }), (0, MV.jsx)(WV, {
            stored: YV,
            checking: XV,
            webGpuUsable: tV,
            changePending: (0, rV.isShaderPackChangePending)(),
            compiler: nV,
            t: xV
          })]
        }), (0, MV.jsx)(qV.b, {
          busy: AV || GV || XV,
          disabled: AV || GV || XV || !0 !== tV,
          onFiles: iV
        })]
      })
    }

    function gV(VV) {
      let {
        to: eV,
        className: xV,
        children: JV
      } = VV;
      const {
        gameState: UV
      } = (0, nV.l)(["gameState"]), {
        pathname: pV,
        search: QV
      } = (0, YV.r)(), ZV = "landingPage" !== UV && "studio" !== UV;
      return (0, MV.jsx)(yV.LinkPreserveSearch, {
        to: eV,
        className: xV,
        target: ZV ? "_blank" : void 0,
        onClick: () => {
          ZV || ((0, EV.K)(`${pV}${QV}`), (0, wV.h)())
        },
        children: JV
      })
    }
  },
  7130: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => aV,
      A: () => kV,
      E: () => BV,
      I: () => MV,
      K: () => wV,
      O: () => GV,
      Q: () => bV,
      T: () => oV,
      V: () => CV,
      Y: () => yV,
      b: () => jV,
      d: () => NV,
      db: () => QV,
      e: () => EV,
      g: () => vV,
      hb: () => pV,
      jb: () => DV,
      k: () => ZV,
      mb: () => iV,
      nb: () => qV,
      o: () => WV,
      qb: () => zV,
      r: () => rV,
      t: () => RV,
      x: () => cV
    });
    var JV = xV(7132),
      YV = xV(165),
      UV = xV(5037);
    const yV = "/shader-packs",
      pV = `${yV}/publish`;

    function QV(VV) {
      return `${yV}/${encodeURIComponent(VV)}`
    }
    let nV = null;

    function wV(VV) {
      nV = VV
    }

    function ZV() {
      return nV
    }

    function vV() {
      nV = null
    }

    function rV(VV) {
      return VV.playerHasRank("developer") || VV.playerHasRank("admin")
    }
    const kV = ["terrain", "water", "models", "sunShadows", "strict"],
      bV = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function EV(VV, eV) {
      return VV.withFeatures.includes(eV) ? "with" : VV.withoutFeatures.includes(eV) ? "without" : null
    }

    function BV(VV) {
      return null === VV ? "with" : "with" === VV ? "without" : null
    }

    function jV(VV) {
      return "with" === VV ? "only" : null === VV ? "include" : void 0
    }

    function qV(VV, eV) {
      const xV = EV(VV, eV),
        JV = VV => VV.filter((VV => VV !== eV));
      return {
        withFeatures: null === xV ? [...VV.withFeatures, eV] : JV(VV.withFeatures),
        withoutFeatures: "with" === xV ? [...VV.withoutFeatures, eV] : JV(VV.withoutFeatures)
      }
    }
    const tV = "section",
      FV = "sort",
      TV = "filters",
      PV = "q",
      AV = "banned",
      NV = "popular",
      XV = "strict";

    function MV(VV) {
      var eV, xV, YV;
      const yV = VV.get(tV),
        pV = (null !== (eV = VV.get(TV)) && void 0 !== eV ? eV : XV).split(","),
        QV = VV.get(AV);
      return {
        section: "favourites" === yV || "mine" === yV ? yV : "explore",
        sort: null !== (xV = JV.B.find((eV => eV === VV.get(FV)))) && void 0 !== xV ? xV : NV,
        withFeatures: kV.filter((VV => pV.includes(VV) && !pV.includes(`-${VV}`))),
        withoutFeatures: kV.filter((VV => pV.includes(`-${VV}`))),
        searchQuery: (null === (YV = VV.get(PV)) || void 0 === YV ? void 0 : YV.slice(0, JV.P)) || null,
        pageNumber: (0, UV.g)(VV.get(UV.d)),
        banned: "only" === QV ? "with" : "include" === QV ? null : "without"
      }
    }

    function zV(VV, eV) {
      var xV;
      const JV = gV(eV);
      (0, UV.k)(VV, tV, "explore" === eV.section ? null : eV.section), (0, UV.k)(VV, FV, eV.sort === NV ? null : eV.sort), (0, UV.k)(VV, TV, JV === XV ? null : JV), (0, UV.k)(VV, PV, eV.searchQuery), (0, UV.k)(VV, AV, null !== (xV = jV(eV.banned)) && void 0 !== xV ? xV : null), (0, UV.l)(VV, eV.pageNumber)
    }

    function GV(VV) {
      const eV = new URLSearchParams;
      return zV(eV, {
        section: "explore",
        sort: NV,
        withFeatures: "strict" === VV ? [VV] : [VV, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${yV}?${eV.toString()}`
    }

    function WV(VV) {
      return gV(VV) === XV
    }

    function RV(VV) {
      return null !== VV.searchQuery || "with" === VV.banned || gV(VV) !== XV
    }

    function gV(VV) {
      return kV.flatMap((eV => {
        const xV = EV(VV, eV);
        return "with" === xV ? [eV] : "without" === xV ? [`-${eV}`] : []
      })).join(",")
    }
    const DV = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      iV = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function CV(VV) {
      return Math.round(100 * Math.max(0, 1 - 1 / VV))
    }

    function aV(VV, eV, xV, YV) {
      const UV = [];
      VV.isBanned && UV.push({
        tone: "warning",
        text: YV("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: yV
      } = VV;
      if (null === VV.brokenError || yV && !yV.error || UV.push({
          tone: "warning",
          text: YV("shaderPackListing:ownerBroken"),
          detail: VV.brokenError
        }), null !== yV && void 0 !== yV && yV.error) UV.push({
        tone: "warning",
        text: YV(eV ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, JV.n)(yV.error) ? null : yV.error
      });
      else if (yV) {
        const VV = null === yV.renderNotBefore ? 0 : yV.renderNotBefore - xV,
          JV = String(Math.ceil(VV / 6e4)),
          pV = YV(eV ? VV > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : VV > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: JV
          });
        UV.push({
          tone: "info",
          text: pV,
          detail: null
        })
      }
      return VV.listed || UV.push({
        tone: "info",
        text: YV("shaderPackListing:ownerUnlisted"),
        detail: null
      }), UV
    }

    function oV(VV) {
      return Math.max(1, Math.round(VV / 1024))
    }

    function cV(VV, eV, xV) {
      return VV instanceof YV.b && VV.errorMessageForUser ? VV.errorMessageForUser : eV(xV)
    }
  },
  7132: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => UV,
      D: () => pV,
      H: () => yV,
      L: () => JV,
      O: () => vV,
      P: () => wV,
      S: () => tV,
      V: () => ZV,
      X: () => nV,
      d: () => kV,
      g: () => EV,
      h: () => bV,
      k: () => rV,
      n: () => qV,
      q: () => TV,
      s: () => QV,
      w: () => YV,
      x: () => FV
    });
    const JV = ["forest", "desert", "water", "night", "cave"];
    const YV = {
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
      UV = ["popular", "updated", "newest"],
      yV = 3,
      pV = 32,
      QV = 300;

    function nV(VV, eV) {
      return VV.slice(0, eV).replace(/[\uD800-\uDBFF]$/, "")
    }
    const wV = 64,
      ZV = 512,
      vV = 18e5;

    function rV(VV) {
      const eV = VV,
        xV = null === eV || void 0 === eV ? void 0 : eV.files;
      return "number" === typeof(null === eV || void 0 === eV ? void 0 : eV.apiVersion) && "string" === typeof eV.name && (null === eV.author || "string" === typeof eV.author) && (void 0 === eV.keepCircleShadows || "boolean" === typeof eV.keepCircleShadows) && "object" === typeof xV && null !== xV && Object.values(xV).every((VV => "string" === typeof VV))
    }
    const kV = "Bloxdhub",
      bV = "https://bloxdhub.com/shaders";

    function EV(VV) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(VV)}`
    }
    const BV = "Screenshot generation failed.",
      jV = "Its screenshots couldn't be generated:";

    function qV(VV) {
      var eV;
      return VV === BV || null !== (eV = null === VV || void 0 === VV ? void 0 : VV.startsWith(jV)) && void 0 !== eV && eV
    }

    function tV(VV, eV) {
      return `shaderPacks/${VV}/${eV}.json`
    }

    function FV(VV, eV, xV, JV) {
      return null === eV.renderId ? TV(VV, eV.baselineVersion, xV, JV) : `${VV}/${function(VV,eV,xV,JV){return`shaderPacks/${VV}/${eV}/${xV}-${JV}.webp`}(eV.packId,eV.renderId,xV,JV)}`
    }

    function TV(VV, eV, xV, JV) {
      return `${VV}/${function(VV,eV,xV){return`shaderPacks/baseline/${VV}/${eV}-${xV}.webp`}(eV,xV,JV)}`
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);