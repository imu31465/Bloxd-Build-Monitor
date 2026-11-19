export const id = 123;
export const ids = [123];
export const modules = {
  40161: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      ShaderPackCategory: () => ZY
    });
    var FY = DY(61),
      AY = DY(1501),
      IY = DY(1437),
      RY = DY(1488),
      OY = DY(1211),
      gY = DY(99),
      aY = DY(19),
      vY = DY(1619),
      uY = DY(6182),
      sY = DY(307),
      iY = DY(6221),
      yY = DY(6212),
      QY = DY(6230),
      oY = DY(6108),
      WY = DY(4580),
      EY = DY(6162),
      mY = DY(6176),
      VY = DY(3022);

    function SY(YY, rY) {
      const DY = (0, iY.storedPackOutcome)(YY, rY);
      return "none" !== DY.kind || "noCompiler" === DY.reason
    }
    var lY = DY(1092),
      TY = DY.n(lY),
      eY = DY(6168),
      NY = DY(1098),
      BY = DY(6157),
      cY = DY(1125);
    const KY = {
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

    function HY(YY, rY) {
      return "failedRecheck" === YY && rY.listing ? "shaderPack:statusFailedRecheckListed" : KY[YY]
    }

    function zY(YY) {
      let {
        stored: rY,
        checking: DY,
        webGpuUsable: FY,
        changePending: AY,
        compiler: IY,
        t: RY
      } = YY;
      const OY = function(YY, rY, DY, FY, AY) {
          const IY = (0, iY.storedPackOutcome)(YY, AY);
          return "none" === IY.kind ? "noCompiler" === IY.reason ? rY ? "checking" : "noCompiler" : "otherApiVersion" === IY.reason ? "wrongApiVersion" : "failed" : (0, VY.e)() ? "harnessBuild" : "blocked" === IY.kind ? (0, iY.shaderPackNeedsCheck)(YY, AY) ? rY ? "checking" : !1 === DY ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === DY ? "offNoWebGpu" : FY ? "readyAfterReload" : "ready"
        }(rY, DY, FY, AY, IY),
        gY = "failed" === OY || "failedRecheck" === OY,
        aY = gY || "wrongApiVersion" === OY || "noCompiler" === OY,
        vY = "ready" === OY || "readyAfterReload" === OY ? rY.validation.offInStrict : [];
      return (0, cY.jsxs)(cY.Fragment, {
        children: [(0, cY.jsxs)("div", {
          className: TY()("ShaderPackStatus", {
            Ready: "ready" === OY,
            Failed: aY
          }),
          children: ["ready" === OY && (0, cY.jsx)(NY.e, {
            name: "circle-check"
          }), aY && (0, cY.jsx)(NY.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === OY ? (0, VY.d)() : RY(HY(OY, rY), {
            packVersion: String(rY.manifest.apiVersion),
            version: String(eY.c)
          })]
        }), gY && (0, cY.jsx)(BY.e, {
          diagnostics: rY.validation.errors,
          more: rY.validation.moreErrors,
          t: RY
        }), vY.length > 0 && (0, cY.jsxs)(cY.Fragment, {
          children: [(0, cY.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, cY.jsx)(NY.e, {
              name: "triangle-exclamation"
            }), RY("shaderPack:offInStrict")]
          }), (0, cY.jsx)(BY.e, {
            diagnostics: vY,
            t: RY
          })]
        })]
      })
    }

    function ZY(YY) {
      let {
        setApplySettingsCallback: rY
      } = YY;
      const {
        t: DY
      } = (0, OY.C)(), [AY, RY] = (0, FY.useState)(null), [aY, vY] = (0, FY.useState)(null), [VY, lY] = (0, FY.useState)(null), [TY] = (0, FY.useState)(sY.i), [eY, NY] = (0, FY.useState)(!0), [BY, KY] = (0, FY.useState)(!1), {
        loading: HY,
        error: ZY,
        setError: fY,
        onFiles: jY
      } = (0, mY.i)((async YY => {
        const rY = await (0, uY.loadPageShaderPackCompiler)();
        if (!rY) return void fY(DY("shaderPack:compilerUnavailable"));
        vY(rY);
        const FY = (0, iY.toStoredShaderPack)(YY, await (0, yY.g)(rY, YY.files));
        await (0, iY.saveShaderPack)(FY, rY) ? (RY(FY), hY(AY, FY, rY)) : fY(DY("shaderPack:saveFailed"))
      }));

      function hY(YY, DY, FY) {
        (function(YY, rY, DY, FY) {
          return DY || SY(YY, FY) || SY(rY, FY)
        })(YY, DY, (0, iY.isShaderPackChangePending)(), FY) && ((0, iY.markShaderPackChangePending)(), rY((() => WY.m)))
      }
      return (0, FY.useEffect)((() => {
        let YY = !1;
        return async function() {
          const rY = (0, gY.hasUsableWebGpuAdapter)(),
            DY = await (0, QY.e)();
          if (YY) return;
          RY(DY), KY(!0), NY(!1);
          const FY = null !== DY ? (0, uY.loadPageShaderPackCompiler)() : null,
            AY = await rY;
          if (YY) return;
          lY(AY);
          const IY = await FY;
          if (!YY && (vY(IY), null !== DY && AY && null !== IY && (0, iY.shaderPackNeedsCheck)(DY, IY))) {
            const rY = await (0, yY.c)(DY, IY);
            YY || RY((YY => YY === DY ? rY : YY))
          }
        }().catch((rY => {
          console.error("Failed to load the stored shader pack", rY), YY || fY(DY("shaderPack:unexpectedError"))
        })).finally((() => {
          YY || (NY(!1), KY(!1))
        })), () => {
          YY = !0
        }
      }), []), (0, cY.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, cY.jsx)("div", {
          className: "ShaderPackIntro",
          children: DY("shaderPack:intro")
        }), (0, cY.jsx)(CY, {
          to: oY.R,
          className: "ShaderPackBrowseLink",
          children: (0, cY.jsx)(IY.n, {
            className: "ShaderPackBrowseButton",
            children: DY("shaderPackListing:browse")
          })
        }), !1 === VY && (0, cY.jsx)("div", {
          className: "SettingsBoxWarning",
          children: DY(TY ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== ZY && (0, cY.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [DY("general:error"), ": ", ZY]
        }), AY && (0, cY.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, cY.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, cY.jsxs)("div", {
              children: [(0, cY.jsx)("div", {
                className: "ShaderPackName",
                children: AY.manifest.name
              }), AY.manifest.author && (0, cY.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, EY.j)(DY, "shaderPack:byAuthor", {
                  author: AY.manifest.author
                })
              }), AY.manifest.description && (0, cY.jsx)("div", {
                className: "ShaderPackDescription",
                children: AY.manifest.description
              }), AY.listing && (0, cY.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, cY.jsx)(CY, {
                  to: (0, oY.Y)(AY.listing.packId),
                  className: "ShaderPackListingLink",
                  children: DY("shaderPackListing:openPackPage")
                })
              })]
            }), (0, cY.jsx)(IY.E, {
              disabled: eY || HY,
              onClick: async function() {
                NY(!0), fY(null), await (0, iY.removeShaderPack)(), RY(null), NY(!1), hY(AY, null, aY)
              },
              children: DY("shaderPack:removePack")
            })]
          }), (0, cY.jsx)(zY, {
            stored: AY,
            checking: BY,
            webGpuUsable: VY,
            changePending: (0, iY.isShaderPackChangePending)(),
            compiler: aY,
            t: DY
          })]
        }), (0, cY.jsx)(mY.e, {
          busy: eY || HY || BY,
          disabled: eY || HY || BY || !0 !== VY,
          onFiles: jY
        })]
      })
    }

    function CY(YY) {
      let {
        to: rY,
        className: DY,
        children: FY
      } = YY;
      const {
        gameState: IY
      } = (0, aY.j)(["gameState"]), {
        pathname: OY,
        search: gY
      } = (0, AY.u)(), uY = "landingPage" !== IY && "studio" !== IY;
      return (0, cY.jsx)(RY.LinkPreserveSearch, {
        to: rY,
        className: DY,
        target: uY ? "_blank" : void 0,
        onClick: () => {
          uY || ((0, oY.E)(`${OY}${gY}`), (0, vY.e)())
        },
        children: FY
      })
    }
  },
  6108: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => WY,
      C: () => cY,
      E: () => vY,
      I: () => HY,
      J: () => QY,
      N: () => JY,
      Q: () => hY,
      R: () => RY,
      V: () => dY,
      Y: () => gY,
      ab: () => OY,
      bb: () => fY,
      e: () => EY,
      eb: () => jY,
      fb: () => mY,
      h: () => NY,
      j: () => oY,
      jb: () => KY,
      l: () => sY,
      o: () => uY,
      q: () => zY,
      s: () => iY,
      u: () => ZY,
      y: () => MY,
      z: () => yY
    });
    var FY = DY(6112),
      AY = DY(183),
      IY = DY(4122);
    const RY = "/shader-packs",
      OY = `${RY}/publish`;

    function gY(YY) {
      return `${RY}/${encodeURIComponent(YY)}`
    }
    let aY = null;

    function vY(YY) {
      aY = YY
    }

    function uY() {
      return aY
    }

    function sY() {
      aY = null
    }

    function iY(YY) {
      return YY.playerHasRank("developer") || YY.playerHasRank("admin")
    }
    const yY = ["terrain", "water", "models", "sunShadows", "strict"],
      QY = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function oY(YY, rY) {
      return YY.withFeatures.includes(rY) ? "with" : YY.withoutFeatures.includes(rY) ? "without" : null
    }

    function WY(YY) {
      return null === YY ? "with" : "with" === YY ? "without" : null
    }

    function EY(YY) {
      return "with" === YY ? "only" : null === YY ? "include" : void 0
    }

    function mY(YY, rY) {
      const DY = oY(YY, rY),
        FY = YY => YY.filter((YY => YY !== rY));
      return {
        withFeatures: null === DY ? [...YY.withFeatures, rY] : FY(YY.withFeatures),
        withoutFeatures: "with" === DY ? [...YY.withoutFeatures, rY] : FY(YY.withoutFeatures)
      }
    }
    const VY = "section",
      SY = "sort",
      lY = "filters",
      TY = "q",
      eY = "banned",
      NY = "popular",
      BY = "strict";

    function cY(YY) {
      var rY, DY, AY;
      const RY = YY.get(VY),
        OY = (null !== (rY = YY.get(lY)) && void 0 !== rY ? rY : BY).split(","),
        gY = YY.get(eY);
      return {
        section: "favourites" === RY || "mine" === RY ? RY : "explore",
        sort: null !== (DY = FY.A.find((rY => rY === YY.get(SY)))) && void 0 !== DY ? DY : NY,
        withFeatures: yY.filter((YY => OY.includes(YY) && !OY.includes(`-${YY}`))),
        withoutFeatures: yY.filter((YY => OY.includes(`-${YY}`))),
        searchQuery: (null === (AY = YY.get(TY)) || void 0 === AY ? void 0 : AY.slice(0, FY.L)) || null,
        pageNumber: (0, IY.i)(YY.get(IY.e)),
        banned: "only" === gY ? "with" : "include" === gY ? null : "without"
      }
    }

    function KY(YY, rY) {
      var DY;
      const FY = CY(rY);
      (0, IY.l)(YY, VY, "explore" === rY.section ? null : rY.section), (0, IY.l)(YY, SY, rY.sort === NY ? null : rY.sort), (0, IY.l)(YY, lY, FY === BY ? null : FY), (0, IY.l)(YY, TY, rY.searchQuery), (0, IY.l)(YY, eY, null !== (DY = EY(rY.banned)) && void 0 !== DY ? DY : null), (0, IY.n)(YY, rY.pageNumber)
    }

    function HY(YY) {
      const rY = new URLSearchParams;
      return KY(rY, {
        section: "explore",
        sort: NY,
        withFeatures: "strict" === YY ? [YY] : [YY, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${RY}?${rY.toString()}`
    }

    function zY(YY) {
      return CY(YY) === BY
    }

    function ZY(YY) {
      return null !== YY.searchQuery || "with" === YY.banned || CY(YY) !== BY
    }

    function CY(YY) {
      return yY.flatMap((rY => {
        const DY = oY(YY, rY);
        return "with" === DY ? [rY] : "without" === DY ? [`-${rY}`] : []
      })).join(",")
    }
    const fY = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      jY = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function hY(YY) {
      return Math.round(100 * Math.max(0, 1 - 1 / YY))
    }

    function dY(YY, rY, DY, AY) {
      const IY = [];
      YY.isBanned && IY.push({
        tone: "warning",
        text: AY("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: RY
      } = YY;
      if (null === YY.brokenError || RY && !RY.error || IY.push({
          tone: "warning",
          text: AY("shaderPackListing:ownerBroken"),
          detail: YY.brokenError
        }), null !== RY && void 0 !== RY && RY.error) IY.push({
        tone: "warning",
        text: AY(rY ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, FY.m)(RY.error) ? null : RY.error
      });
      else if (RY) {
        const YY = null === RY.renderNotBefore ? 0 : RY.renderNotBefore - DY,
          FY = String(Math.ceil(YY / 6e4)),
          OY = AY(rY ? YY > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : YY > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: FY
          });
        IY.push({
          tone: "info",
          text: OY,
          detail: null
        })
      }
      return YY.listed || IY.push({
        tone: "info",
        text: AY("shaderPackListing:ownerUnlisted"),
        detail: null
      }), IY
    }

    function JY(YY) {
      return Math.max(1, Math.round(YY / 1024))
    }

    function MY(YY, rY, DY) {
      return YY instanceof AY.e && YY.errorMessageForUser ? YY.errorMessageForUser : rY(DY)
    }
  },
  6112: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => IY,
      D: () => OY,
      G: () => RY,
      J: () => FY,
      K: () => sY,
      L: () => vY,
      P: () => mY,
      S: () => uY,
      V: () => aY,
      d: () => iY,
      e: () => QY,
      i: () => yY,
      m: () => EY,
      q: () => SY,
      t: () => gY,
      u: () => AY,
      x: () => VY
    });
    const FY = ["forest", "desert", "water", "night", "cave"];
    const AY = {
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
      IY = ["popular", "updated", "newest"],
      RY = 3,
      OY = 32,
      gY = 300;

    function aY(YY, rY) {
      return YY.slice(0, rY).replace(/[\uD800-\uDBFF]$/, "")
    }
    const vY = 64,
      uY = 512,
      sY = 18e5;
    const iY = "Bloxdhub",
      yY = "https://bloxdhub.com/shaders";

    function QY(YY) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(YY)}`
    }
    const oY = "Screenshot generation failed.",
      WY = "Its screenshots couldn't be generated:";

    function EY(YY) {
      var rY;
      return YY === oY || null !== (rY = null === YY || void 0 === YY ? void 0 : YY.startsWith(WY)) && void 0 !== rY && rY
    }

    function mY(YY, rY) {
      return `shaderPacks/${YY}/${rY}.json`
    }

    function VY(YY, rY, DY, FY) {
      return null === rY.renderId ? SY(YY, rY.baselineVersion, DY, FY) : `${YY}/${function(YY,rY,DY,FY){return`shaderPacks/${YY}/${rY}/${DY}-${FY}.webp`}(rY.packId,rY.renderId,DY,FY)}`
    }

    function SY(YY, rY, DY, FY) {
      return `${YY}/${function(YY,rY,DY){return`shaderPacks/baseline/${YY}/${rY}-${DY}.webp`}(rY,DY,FY)}`
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);