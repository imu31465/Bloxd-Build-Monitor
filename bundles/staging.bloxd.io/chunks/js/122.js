export const id = 122;
export const ids = [122];
export const modules = {
  40457: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      ShaderPackCategory: () => BU
    });
    var tU = gU(56),
      pU = gU(1481),
      EU = gU(1412),
      PU = gU(1475),
      TU = gU(1181),
      qU = gU(96),
      KU = gU(21),
      cU = gU(1567),
      GU = gU(6295),
      jU = gU(274),
      uU = gU(6330),
      CU = gU(6321),
      hU = gU(6339),
      QU = gU(6220),
      eU = gU(4670),
      WU = gU(6276),
      fU = gU(6292),
      xU = gU(3153);

    function mU(UU, RU) {
      const gU = (0, uU.storedPackOutcome)(UU, RU);
      return "none" !== gU.kind || "noCompiler" === gU.reason
    }
    var IU = gU(1037),
      JU = gU.n(IU),
      wU = gU(6284),
      nU = gU(1049),
      bU = gU(6270),
      oU = gU(1090);
    const ZU = {
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

    function aU(UU, RU) {
      return "failedRecheck" === UU && RU.listing ? "shaderPack:statusFailedRecheckListed" : ZU[UU]
    }

    function YU(UU) {
      let {
        stored: RU,
        checking: gU,
        webGpuUsable: tU,
        changePending: pU,
        compiler: EU,
        t: PU
      } = UU;
      const TU = function(UU, RU, gU, tU, pU) {
          const EU = (0, uU.storedPackOutcome)(UU, pU);
          return "none" === EU.kind ? "noCompiler" === EU.reason ? RU ? "checking" : "noCompiler" : "otherApiVersion" === EU.reason ? "wrongApiVersion" : "failed" : (0, xU.e)() ? "harnessBuild" : "blocked" === EU.kind ? (0, uU.shaderPackNeedsCheck)(UU, pU) ? RU ? "checking" : !1 === gU ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === gU ? "offNoWebGpu" : tU ? "readyAfterReload" : "ready"
        }(RU, gU, tU, pU, EU),
        qU = "failed" === TU || "failedRecheck" === TU,
        KU = qU || "wrongApiVersion" === TU || "noCompiler" === TU,
        cU = "ready" === TU || "readyAfterReload" === TU ? RU.validation.offInStrict : [];
      return (0, oU.jsxs)(oU.Fragment, {
        children: [(0, oU.jsxs)("div", {
          className: JU()("ShaderPackStatus", {
            Ready: "ready" === TU,
            Failed: KU
          }),
          children: ["ready" === TU && (0, oU.jsx)(nU.c, {
            name: "circle-check"
          }), KU && (0, oU.jsx)(nU.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === TU ? (0, xU.c)() : PU(aU(TU, RU), {
            packVersion: String(RU.manifest.apiVersion),
            version: String(wU.b)
          })]
        }), qU && (0, oU.jsx)(bU.b, {
          diagnostics: RU.validation.errors,
          more: RU.validation.moreErrors,
          t: PU
        }), cU.length > 0 && (0, oU.jsxs)(oU.Fragment, {
          children: [(0, oU.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, oU.jsx)(nU.c, {
              name: "triangle-exclamation"
            }), PU("shaderPack:offInStrict")]
          }), (0, oU.jsx)(bU.b, {
            diagnostics: cU,
            t: PU
          })]
        })]
      })
    }

    function BU(UU) {
      let {
        setApplySettingsCallback: RU
      } = UU;
      const {
        t: gU
      } = (0, TU.B)(), [pU, PU] = (0, tU.useState)(null), [KU, cU] = (0, tU.useState)(null), [xU, IU] = (0, tU.useState)(null), [JU] = (0, tU.useState)(jU.c), [wU, nU] = (0, tU.useState)(!0), [bU, ZU] = (0, tU.useState)(!1), {
        loading: aU,
        error: BU,
        setError: rU,
        onFiles: XU
      } = (0, fU.g)((async UU => {
        const RU = await (0, GU.loadPageShaderPackCompiler)();
        if (!RU) return void rU(gU("shaderPack:compilerUnavailable"));
        cU(RU);
        const tU = (0, uU.toStoredShaderPack)(UU, await (0, CU.f)(RU, UU.files));
        await (0, uU.saveShaderPack)(tU, RU) ? (PU(tU), vU(pU, tU, RU)) : rU(gU("shaderPack:saveFailed"))
      }));

      function vU(UU, gU, tU) {
        (function(UU, RU, gU, tU) {
          return gU || mU(UU, tU) || mU(RU, tU)
        })(UU, gU, (0, uU.isShaderPackChangePending)(), tU) && ((0, uU.markShaderPackChangePending)(), RU((() => eU.l)))
      }
      return (0, tU.useEffect)((() => {
        let UU = !1;
        return async function() {
          const RU = (0, qU.hasUsableWebGpuAdapter)(),
            gU = await (0, hU.e)();
          if (UU) return;
          PU(gU), ZU(!0), nU(!1);
          const tU = null !== gU ? (0, GU.loadPageShaderPackCompiler)() : null,
            pU = await RU;
          if (UU) return;
          IU(pU);
          const EU = await tU;
          if (!UU && (cU(EU), null !== gU && pU && null !== EU && (0, uU.shaderPackNeedsCheck)(gU, EU))) {
            const RU = await (0, CU.c)(gU, EU);
            UU || PU((UU => UU === gU ? RU : UU))
          }
        }().catch((RU => {
          console.error("Failed to load the stored shader pack", RU), UU || rU(gU("shaderPack:unexpectedError"))
        })).finally((() => {
          UU || (nU(!1), ZU(!1))
        })), () => {
          UU = !0
        }
      }), []), (0, oU.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, oU.jsx)("div", {
          className: "ShaderPackIntro",
          children: gU("shaderPack:intro")
        }), (0, oU.jsx)(VU, {
          to: QU.Q,
          className: "ShaderPackBrowseLink",
          children: (0, oU.jsx)(EU.j, {
            className: "ShaderPackBrowseButton",
            children: gU("shaderPackListing:browse")
          })
        }), !1 === xU && (0, oU.jsx)("div", {
          className: "SettingsBoxWarning",
          children: gU(JU ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== BU && (0, oU.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [gU("general:error"), ": ", BU]
        }), pU && (0, oU.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, oU.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, oU.jsxs)("div", {
              children: [(0, oU.jsx)("div", {
                className: "ShaderPackName",
                children: pU.manifest.name
              }), pU.manifest.author && (0, oU.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, WU.g)(gU, "shaderPack:byAuthor", {
                  author: pU.manifest.author
                })
              }), pU.manifest.description && (0, oU.jsx)("div", {
                className: "ShaderPackDescription",
                children: pU.manifest.description
              }), pU.listing && (0, oU.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, oU.jsx)(VU, {
                  to: (0, QU.T)(pU.listing.packId),
                  className: "ShaderPackListingLink",
                  children: gU("shaderPackListing:openPackPage")
                })
              })]
            }), (0, oU.jsx)(EU.F, {
              disabled: wU || aU,
              onClick: async function() {
                nU(!0), rU(null), await (0, uU.removeShaderPack)(), PU(null), nU(!1), vU(pU, null, KU)
              },
              children: gU("shaderPack:removePack")
            })]
          }), (0, oU.jsx)(YU, {
            stored: pU,
            checking: bU,
            webGpuUsable: xU,
            changePending: (0, uU.isShaderPackChangePending)(),
            compiler: KU,
            t: gU
          })]
        }), (0, oU.jsx)(fU.e, {
          busy: wU || aU || bU,
          disabled: wU || aU || bU || !0 !== xU,
          onFiles: XU
        })]
      })
    }

    function VU(UU) {
      let {
        to: RU,
        className: gU,
        children: tU
      } = UU;
      const {
        gameState: EU
      } = (0, KU.l)(["gameState"]), {
        pathname: TU,
        search: qU
      } = (0, pU.s)(), GU = "landingPage" !== EU && "studio" !== EU;
      return (0, oU.jsx)(PU.LinkPreserveSearch, {
        to: RU,
        className: gU,
        target: GU ? "_blank" : void 0,
        onClick: () => {
          GU || ((0, QU.C)(`${TU}${qU}`), (0, cU.f)())
        },
        children: tU
      })
    }
  },
  6220: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => fU,
      C: () => cU,
      E: () => aU,
      H: () => hU,
      L: () => HU,
      O: () => vU,
      Q: () => PU,
      S: () => dU,
      T: () => qU,
      U: () => TU,
      X: () => rU,
      Y: () => XU,
      c: () => WU,
      cb: () => ZU,
      d: () => nU,
      e: () => QU,
      g: () => jU,
      h: () => GU,
      k: () => YU,
      o: () => uU,
      p: () => BU,
      q: () => SU,
      t: () => CU,
      x: () => eU,
      y: () => oU
    });
    var tU = gU(6222),
      pU = gU(165),
      EU = gU(4222);
    const PU = "/shader-packs",
      TU = `${PU}/publish`;

    function qU(UU) {
      return `${PU}/${encodeURIComponent(UU)}`
    }
    let KU = null;

    function cU(UU) {
      KU = UU
    }

    function GU() {
      return KU
    }

    function jU() {
      KU = null
    }

    function uU(UU) {
      return UU.playerHasRank("developer") || UU.playerHasRank("admin")
    }
    const CU = ["terrain", "water", "models", "sunShadows", "strict"],
      hU = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function QU(UU, RU) {
      return UU.withFeatures.includes(RU) ? "with" : UU.withoutFeatures.includes(RU) ? "without" : null
    }

    function eU(UU) {
      return null === UU ? "with" : "with" === UU ? "without" : null
    }

    function WU(UU) {
      return "with" === UU ? "only" : null === UU ? "include" : void 0
    }

    function fU(UU, RU) {
      const gU = QU(UU, RU),
        tU = UU => UU.filter((UU => UU !== RU));
      return {
        withFeatures: null === gU ? [...UU.withFeatures, RU] : tU(UU.withFeatures),
        withoutFeatures: "with" === gU ? [...UU.withoutFeatures, RU] : tU(UU.withoutFeatures)
      }
    }
    const xU = "section",
      mU = "sort",
      IU = "filters",
      JU = "q",
      wU = "banned",
      nU = "popular",
      bU = "strict";

    function oU(UU) {
      var RU, gU, pU;
      const PU = UU.get(xU),
        TU = (null !== (RU = UU.get(IU)) && void 0 !== RU ? RU : bU).split(","),
        qU = UU.get(wU);
      return {
        section: "favourites" === PU || "mine" === PU ? PU : "explore",
        sort: null !== (gU = tU.x.find((RU => RU === UU.get(mU)))) && void 0 !== gU ? gU : nU,
        withFeatures: CU.filter((UU => TU.includes(UU) && !TU.includes(`-${UU}`))),
        withoutFeatures: CU.filter((UU => TU.includes(`-${UU}`))),
        searchQuery: (null === (pU = UU.get(JU)) || void 0 === pU ? void 0 : pU.slice(0, tU.L)) || null,
        pageNumber: (0, EU.h)(UU.get(EU.e)),
        banned: "only" === qU ? "with" : "include" === qU ? null : "without"
      }
    }

    function ZU(UU, RU) {
      var gU;
      const tU = VU(RU);
      (0, EU.i)(UU, xU, "explore" === RU.section ? null : RU.section), (0, EU.i)(UU, mU, RU.sort === nU ? null : RU.sort), (0, EU.i)(UU, IU, tU === bU ? null : tU), (0, EU.i)(UU, JU, RU.searchQuery), (0, EU.i)(UU, wU, null !== (gU = WU(RU.banned)) && void 0 !== gU ? gU : null), (0, EU.l)(UU, RU.pageNumber)
    }

    function aU(UU) {
      const RU = new URLSearchParams;
      return ZU(RU, {
        section: "explore",
        sort: nU,
        withFeatures: "strict" === UU ? [UU] : [UU, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${PU}?${RU.toString()}`
    }

    function YU(UU) {
      return VU(UU) === bU
    }

    function BU(UU) {
      return null !== UU.searchQuery || "with" === UU.banned || VU(UU) !== bU
    }

    function VU(UU) {
      return CU.flatMap((RU => {
        const gU = QU(UU, RU);
        return "with" === gU ? [RU] : "without" === gU ? [`-${RU}`] : []
      })).join(",")
    }
    const rU = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      XU = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function vU(UU) {
      return Math.round(100 * Math.max(0, 1 - 1 / UU))
    }

    function dU(UU, RU, gU, pU) {
      const EU = [];
      UU.isBanned && EU.push({
        tone: "warning",
        text: pU("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: PU
      } = UU;
      if (null === UU.brokenError || PU && !PU.error || EU.push({
          tone: "warning",
          text: pU("shaderPackListing:ownerBroken"),
          detail: UU.brokenError
        }), null !== PU && void 0 !== PU && PU.error) EU.push({
        tone: "warning",
        text: pU(RU ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, tU.m)(PU.error) ? null : PU.error
      });
      else if (PU) {
        const UU = null === PU.renderNotBefore ? 0 : PU.renderNotBefore - gU,
          tU = String(Math.ceil(UU / 6e4)),
          TU = pU(RU ? UU > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : UU > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: tU
          });
        EU.push({
          tone: "info",
          text: TU,
          detail: null
        })
      }
      return UU.listed || EU.push({
        tone: "info",
        text: pU("shaderPackListing:ownerUnlisted"),
        detail: null
      }), EU
    }

    function HU(UU) {
      return Math.max(1, Math.round(UU / 1024))
    }

    function SU(UU, RU, gU) {
      return UU instanceof pU.e && UU.errorMessageForUser ? UU.errorMessageForUser : RU(gU)
    }
  },
  6222: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => PU,
      E: () => tU,
      I: () => jU,
      L: () => cU,
      M: () => fU,
      O: () => GU,
      P: () => KU,
      e: () => uU,
      h: () => hU,
      k: () => CU,
      m: () => WU,
      q: () => mU,
      r: () => qU,
      s: () => pU,
      v: () => xU,
      x: () => EU,
      z: () => TU
    });
    const tU = ["forest", "desert", "water", "night", "cave"];
    const pU = {
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
      EU = ["popular", "updated", "newest"],
      PU = 3,
      TU = 32,
      qU = 300;

    function KU(UU, RU) {
      return UU.slice(0, RU).replace(/[\uD800-\uDBFF]$/, "")
    }
    const cU = 64,
      GU = 512,
      jU = 18e5;
    const uU = "Bloxdhub",
      CU = "https://bloxdhub.com/shaders";

    function hU(UU) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
    }
    const QU = "Screenshot generation failed.",
      eU = "Its screenshots couldn't be generated:";

    function WU(UU) {
      var RU;
      return UU === QU || null !== (RU = null === UU || void 0 === UU ? void 0 : UU.startsWith(eU)) && void 0 !== RU && RU
    }

    function fU(UU, RU) {
      return `shaderPacks/${UU}/${RU}.json`
    }

    function xU(UU, RU, gU, tU) {
      return null === RU.renderId ? mU(UU, RU.baselineVersion, gU, tU) : `${UU}/${function(UU,RU,gU,tU){return`shaderPacks/${UU}/${RU}/${gU}-${tU}.webp`}(RU.packId,RU.renderId,gU,tU)}`
    }

    function mU(UU, RU, gU, tU) {
      return `${UU}/${function(UU,RU,gU){return`shaderPacks/baseline/${UU}/${RU}-${gU}.webp`}(RU,gU,tU)}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);