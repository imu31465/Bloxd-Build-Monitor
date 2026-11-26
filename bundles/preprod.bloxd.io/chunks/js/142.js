export const id = 142;
export const ids = [142];
export const modules = {
  42172: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      ShaderPackCategory: () => OU
    });
    var cU = zU(61),
      yU = zU(1577),
      QU = zU(1494),
      AU = zU(1568),
      FU = zU(1193),
      oU = zU(97),
      DU = zU(27),
      EU = zU(1680),
      YU = zU(7209),
      NU = zU(316),
      IU = zU(7251),
      pU = zU(7242),
      aU = zU(7253),
      tU = zU(7150),
      gU = zU(5540),
      kU = zU(5597),
      GU = zU(7203),
      BU = zU(3854);

    function ZU(UU, XU) {
      const zU = (0, IU.storedPackOutcome)(UU, XU);
      return "none" !== zU.kind || "noCompiler" === zU.reason
    }
    var RU = zU(1106),
      PU = zU.n(RU),
      WU = zU(5603),
      dU = zU(1390),
      LU = zU(7198),
      eU = zU(1305);
    const CU = {
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

    function wU(UU, XU) {
      return "failedRecheck" === UU && XU.listing ? "shaderPack:statusFailedRecheckListed" : CU[UU]
    }

    function qU(UU) {
      let {
        stored: XU,
        checking: zU,
        webGpuUsable: cU,
        changePending: yU,
        compiler: QU,
        t: AU
      } = UU;
      const FU = function(UU, XU, zU, cU, yU) {
          const QU = (0, IU.storedPackOutcome)(UU, yU);
          return "none" === QU.kind ? "noCompiler" === QU.reason ? XU ? "checking" : "noCompiler" : "otherApiVersion" === QU.reason ? "wrongApiVersion" : "failed" : (0, BU.d)() ? "harnessBuild" : "blocked" === QU.kind ? (0, IU.shaderPackNeedsCheck)(UU, yU) ? XU ? "checking" : !1 === zU ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === zU ? "offNoWebGpu" : cU ? "readyAfterReload" : "ready"
        }(XU, zU, cU, yU, QU),
        oU = "failed" === FU || "failedRecheck" === FU,
        DU = oU || "wrongApiVersion" === FU || "noCompiler" === FU,
        EU = "ready" === FU || "readyAfterReload" === FU ? XU.validation.offInStrict : [];
      return (0, eU.jsxs)(eU.Fragment, {
        children: [(0, eU.jsxs)("div", {
          className: PU()("ShaderPackStatus", {
            Ready: "ready" === FU,
            Failed: DU
          }),
          children: ["ready" === FU && (0, eU.jsx)(dU.d, {
            name: "circle-check"
          }), DU && (0, eU.jsx)(dU.d, {
            name: "triangle-exclamation"
          }), "harnessBuild" === FU ? (0, BU.b)() : AU(wU(FU, XU), {
            packVersion: String(XU.manifest.apiVersion),
            version: String(WU.d)
          })]
        }), oU && (0, eU.jsx)(LU.d, {
          diagnostics: XU.validation.errors,
          more: XU.validation.moreErrors,
          t: AU
        }), EU.length > 0 && (0, eU.jsxs)(eU.Fragment, {
          children: [(0, eU.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, eU.jsx)(dU.d, {
              name: "triangle-exclamation"
            }), AU("shaderPack:offInStrict")]
          }), (0, eU.jsx)(LU.d, {
            diagnostics: EU,
            t: AU
          })]
        })]
      })
    }

    function OU(UU) {
      let {
        setApplySettingsCallback: XU
      } = UU;
      const {
        t: zU
      } = (0, FU.I)(), [yU, AU] = (0, cU.useState)(null), [DU, EU] = (0, cU.useState)(null), [BU, RU] = (0, cU.useState)(null), [PU] = (0, cU.useState)(NU.l), [WU, dU] = (0, cU.useState)(!0), [LU, CU] = (0, cU.useState)(!1), {
        loading: wU,
        error: OU,
        setError: rU,
        onFiles: uU
      } = (0, GU.f)((async UU => {
        const XU = await (0, YU.loadPageShaderPackCompiler)();
        if (!XU) return void rU(zU("shaderPack:compilerUnavailable"));
        EU(XU);
        const cU = (0, IU.toStoredShaderPack)(UU, await (0, pU.h)(XU, UU.files));
        await (0, IU.saveShaderPack)(cU, XU) ? (AU(cU), fU(yU, cU, XU)) : rU(zU("shaderPack:saveFailed"))
      }));

      function fU(UU, zU, cU) {
        (function(UU, XU, zU, cU) {
          return zU || ZU(UU, cU) || ZU(XU, cU)
        })(UU, zU, (0, IU.isShaderPackChangePending)(), cU) && ((0, IU.markShaderPackChangePending)(), XU((() => gU.k)))
      }
      return (0, cU.useEffect)((() => {
        let UU = !1;
        return async function() {
          const XU = (0, oU.hasUsableWebGpuAdapter)(),
            zU = await (0, aU.f)();
          if (UU) return;
          AU(zU), CU(!0), dU(!1);
          const cU = null !== zU ? (0, YU.loadPageShaderPackCompiler)() : null,
            yU = await XU;
          if (UU) return;
          RU(yU);
          const QU = await cU;
          if (!UU && (EU(QU), null !== zU && yU && null !== QU && (0, IU.shaderPackNeedsCheck)(zU, QU))) {
            const XU = await (0, pU.d)(zU, QU);
            UU || AU((UU => UU === zU ? XU : UU))
          }
        }().catch((XU => {
          console.error("Failed to load the stored shader pack", XU), UU || rU(zU("shaderPack:unexpectedError"))
        })).finally((() => {
          UU || (dU(!1), CU(!1))
        })), () => {
          UU = !0
        }
      }), []), (0, eU.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, eU.jsx)("div", {
          className: "ShaderPackIntro",
          children: zU("shaderPack:intro")
        }), (0, eU.jsx)(SU, {
          to: tU.T,
          className: "ShaderPackBrowseLink",
          children: (0, eU.jsx)(QU.l, {
            className: "ShaderPackBrowseButton",
            children: zU("shaderPackListing:browse")
          })
        }), !1 === BU && (0, eU.jsx)("div", {
          className: "SettingsBoxWarning",
          children: zU(PU ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== OU && (0, eU.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [zU("general:error"), ": ", OU]
        }), yU && (0, eU.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, eU.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, eU.jsxs)("div", {
              children: [(0, eU.jsx)("div", {
                className: "ShaderPackName",
                children: yU.manifest.name
              }), yU.manifest.author && (0, eU.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, kU.i)(zU, "shaderPack:byAuthor", {
                  author: yU.manifest.author
                })
              }), yU.manifest.description && (0, eU.jsx)("div", {
                className: "ShaderPackDescription",
                children: yU.manifest.description
              }), yU.listing && (0, eU.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, eU.jsx)(SU, {
                  to: (0, tU.Z)(yU.listing.packId),
                  className: "ShaderPackListingLink",
                  children: zU("shaderPackListing:openPackPage")
                })
              })]
            }), (0, eU.jsx)(QU.K, {
              disabled: WU || wU,
              onClick: async function() {
                dU(!0), rU(null), await (0, IU.removeShaderPack)(), AU(null), dU(!1), fU(yU, null, DU)
              },
              children: zU("shaderPack:removePack")
            })]
          }), (0, eU.jsx)(qU, {
            stored: yU,
            checking: LU,
            webGpuUsable: BU,
            changePending: (0, IU.isShaderPackChangePending)(),
            compiler: DU,
            t: zU
          })]
        }), (0, eU.jsx)(GU.b, {
          busy: WU || wU || LU,
          disabled: WU || wU || LU || !0 !== BU,
          onFiles: uU
        })]
      })
    }

    function SU(UU) {
      let {
        to: XU,
        className: zU,
        children: cU
      } = UU;
      const {
        gameState: QU
      } = (0, DU.q)(["gameState"]), {
        pathname: FU,
        search: oU
      } = (0, yU.w)(), YU = "landingPage" !== QU && "studio" !== QU;
      return (0, eU.jsx)(AU.LinkPreserveSearch, {
        to: XU,
        className: zU,
        target: YU ? "_blank" : void 0,
        onClick: () => {
          YU || ((0, tU.I)(`${FU}${oU}`), (0, EU.f)())
        },
        children: cU
      })
    }
  },
  7150: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => FU,
      D: () => gU,
      F: () => eU,
      I: () => EU,
      K: () => wU,
      N: () => aU,
      Q: () => HU,
      S: () => fU,
      T: () => AU,
      V: () => iU,
      Z: () => oU,
      bb: () => rU,
      c: () => kU,
      db: () => uU,
      g: () => dU,
      gb: () => GU,
      h: () => tU,
      jb: () => CU,
      k: () => NU,
      m: () => YU,
      n: () => qU,
      p: () => IU,
      s: () => OU,
      w: () => MU,
      z: () => pU
    });
    var cU = zU(7158),
      yU = zU(173),
      QU = zU(4997);
    const AU = "/shader-packs",
      FU = `${AU}/publish`;

    function oU(UU) {
      return `${AU}/${encodeURIComponent(UU)}`
    }
    let DU = null;

    function EU(UU) {
      DU = UU
    }

    function YU() {
      return DU
    }

    function NU() {
      DU = null
    }

    function IU(UU) {
      return UU.playerHasRank("developer") || UU.playerHasRank("admin")
    }
    const pU = ["terrain", "water", "models", "sunShadows", "strict"],
      aU = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function tU(UU, XU) {
      return UU.withFeatures.includes(XU) ? "with" : UU.withoutFeatures.includes(XU) ? "without" : null
    }

    function gU(UU) {
      return null === UU ? "with" : "with" === UU ? "without" : null
    }

    function kU(UU) {
      return "with" === UU ? "only" : null === UU ? "include" : void 0
    }

    function GU(UU, XU) {
      const zU = tU(UU, XU),
        cU = UU => UU.filter((UU => UU !== XU));
      return {
        withFeatures: null === zU ? [...UU.withFeatures, XU] : cU(UU.withFeatures),
        withoutFeatures: "with" === zU ? [...UU.withoutFeatures, XU] : cU(UU.withoutFeatures)
      }
    }
    const BU = "section",
      ZU = "sort",
      RU = "filters",
      PU = "q",
      WU = "banned",
      dU = "popular",
      LU = "strict";

    function eU(UU) {
      var XU, zU, yU;
      const AU = UU.get(BU),
        FU = (null !== (XU = UU.get(RU)) && void 0 !== XU ? XU : LU).split(","),
        oU = UU.get(WU);
      return {
        section: "favourites" === AU || "mine" === AU ? AU : "explore",
        sort: null !== (zU = cU.z.find((XU => XU === UU.get(ZU)))) && void 0 !== zU ? zU : dU,
        withFeatures: pU.filter((UU => FU.includes(UU) && !FU.includes(`-${UU}`))),
        withoutFeatures: pU.filter((UU => FU.includes(`-${UU}`))),
        searchQuery: (null === (yU = UU.get(PU)) || void 0 === yU ? void 0 : yU.slice(0, cU.I)) || null,
        pageNumber: (0, QU.e)(UU.get(QU.c)),
        banned: "only" === oU ? "with" : "include" === oU ? null : "without"
      }
    }

    function CU(UU, XU) {
      var zU;
      const cU = SU(XU);
      (0, QU.i)(UU, BU, "explore" === XU.section ? null : XU.section), (0, QU.i)(UU, ZU, XU.sort === dU ? null : XU.sort), (0, QU.i)(UU, RU, cU === LU ? null : cU), (0, QU.i)(UU, PU, XU.searchQuery), (0, QU.i)(UU, WU, null !== (zU = kU(XU.banned)) && void 0 !== zU ? zU : null), (0, QU.m)(UU, XU.pageNumber)
    }

    function wU(UU) {
      const XU = new URLSearchParams;
      return CU(XU, {
        section: "explore",
        sort: dU,
        withFeatures: "strict" === UU ? [UU] : [UU, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${AU}?${XU.toString()}`
    }

    function qU(UU) {
      return SU(UU) === LU
    }

    function OU(UU) {
      return null !== UU.searchQuery || "with" === UU.banned || SU(UU) !== LU
    }

    function SU(UU) {
      return pU.flatMap((XU => {
        const zU = tU(UU, XU);
        return "with" === zU ? [XU] : "without" === zU ? [`-${XU}`] : []
      })).join(",")
    }
    const rU = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      uU = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function fU(UU) {
      return Math.round(100 * Math.max(0, 1 - 1 / UU))
    }

    function iU(UU, XU, zU, yU) {
      const QU = [];
      UU.isBanned && QU.push({
        tone: "warning",
        text: yU("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: AU
      } = UU;
      if (null === UU.brokenError || AU && !AU.error || QU.push({
          tone: "warning",
          text: yU("shaderPackListing:ownerBroken"),
          detail: UU.brokenError
        }), null !== AU && void 0 !== AU && AU.error) QU.push({
        tone: "warning",
        text: yU(XU ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, cU.l)(AU.error) ? null : AU.error
      });
      else if (AU) {
        const UU = null === AU.renderNotBefore ? 0 : AU.renderNotBefore - zU,
          cU = String(Math.ceil(UU / 6e4)),
          FU = yU(XU ? UU > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : UU > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: cU
          });
        QU.push({
          tone: "info",
          text: FU,
          detail: null
        })
      }
      return UU.listed || QU.push({
        tone: "info",
        text: yU("shaderPackListing:ownerUnlisted"),
        detail: null
      }), QU
    }

    function HU(UU) {
      return Math.max(1, Math.round(UU / 1024))
    }

    function MU(UU, XU, zU) {
      return UU instanceof yU.e && UU.errorMessageForUser ? UU.errorMessageForUser : XU(zU)
    }
  },
  7158: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => FU,
      C: () => AU,
      E: () => cU,
      H: () => NU,
      I: () => EU,
      M: () => BU,
      N: () => YU,
      O: () => DU,
      c: () => pU,
      f: () => tU,
      h: () => aU,
      i: () => IU,
      l: () => GU,
      o: () => RU,
      r: () => oU,
      s: () => yU,
      v: () => ZU,
      z: () => QU
    });
    const cU = ["forest", "desert", "water", "night", "cave"];
    const yU = {
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
      QU = ["popular", "updated", "newest"],
      AU = 3,
      FU = 32,
      oU = 300;

    function DU(UU, XU) {
      return UU.slice(0, XU).replace(/[\uD800-\uDBFF]$/, "")
    }
    const EU = 64,
      YU = 512,
      NU = 18e5;

    function IU(UU) {
      const XU = UU,
        zU = null === XU || void 0 === XU ? void 0 : XU.files;
      return "number" === typeof(null === XU || void 0 === XU ? void 0 : XU.apiVersion) && "string" === typeof XU.name && (null === XU.author || "string" === typeof XU.author) && (void 0 === XU.keepCircleShadows || "boolean" === typeof XU.keepCircleShadows) && "object" === typeof zU && null !== zU && Object.values(zU).every((UU => "string" === typeof UU))
    }
    const pU = "Bloxdhub",
      aU = "https://bloxdhub.com/shaders";

    function tU(UU) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
    }
    const gU = "Screenshot generation failed.",
      kU = "Its screenshots couldn't be generated:";

    function GU(UU) {
      var XU;
      return UU === gU || null !== (XU = null === UU || void 0 === UU ? void 0 : UU.startsWith(kU)) && void 0 !== XU && XU
    }

    function BU(UU, XU) {
      return `shaderPacks/${UU}/${XU}.json`
    }

    function ZU(UU, XU, zU, cU) {
      return null === XU.renderId ? RU(UU, XU.baselineVersion, zU, cU) : `${UU}/${function(UU,XU,zU,cU){return`shaderPacks/${UU}/${XU}/${zU}-${cU}.webp`}(XU.packId,XU.renderId,zU,cU)}`
    }

    function RU(UU, XU, zU, cU) {
      return `${UU}/${function(UU,XU,zU){return`shaderPacks/baseline/${UU}/${XU}-${zU}.webp`}(XU,zU,cU)}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);