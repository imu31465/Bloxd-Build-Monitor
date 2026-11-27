export const id = 153;
export const ids = [153];
export const modules = {
  42556: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      ShaderPackCategory: () => oW
    });
    var mW = OW(62),
      EW = OW(1616),
      NW = OW(1532),
      PW = OW(1605),
      LW = OW(1172),
      cW = OW(100),
      wW = OW(25),
      tW = OW(1729),
      ZW = OW(7621),
      xW = OW(315),
      lW = OW(7656),
      AW = OW(7648),
      bW = OW(7659),
      jW = OW(7567),
      UW = OW(5910),
      kW = OW(5952),
      sW = OW(7615),
      MW = OW(4675);

    function KW(WW, iW) {
      const OW = (0, lW.storedPackOutcome)(WW, iW);
      return "none" !== OW.kind || "noCompiler" === OW.reason
    }
    var SW = OW(1089),
      YW = OW.n(SW),
      yW = OW(5961),
      TW = OW(1391),
      JW = OW(7609),
      hW = OW(1283);
    const HW = {
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

    function nW(WW, iW) {
      return "failedRecheck" === WW && iW.listing ? "shaderPack:statusFailedRecheckListed" : HW[WW]
    }

    function uW(WW) {
      let {
        stored: iW,
        checking: OW,
        webGpuUsable: mW,
        changePending: EW,
        compiler: NW,
        t: PW
      } = WW;
      const LW = function(WW, iW, OW, mW, EW) {
          const NW = (0, lW.storedPackOutcome)(WW, EW);
          return "none" === NW.kind ? "noCompiler" === NW.reason ? iW ? "checking" : "noCompiler" : "otherApiVersion" === NW.reason ? "wrongApiVersion" : "failed" : (0, MW.i)() ? "harnessBuild" : "blocked" === NW.kind ? (0, lW.shaderPackNeedsCheck)(WW, EW) ? iW ? "checking" : !1 === OW ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === OW ? "offNoWebGpu" : mW ? "readyAfterReload" : "ready"
        }(iW, OW, mW, EW, NW),
        cW = "failed" === LW || "failedRecheck" === LW,
        wW = cW || "wrongApiVersion" === LW || "noCompiler" === LW,
        tW = "ready" === LW || "readyAfterReload" === LW ? iW.validation.offInStrict : [];
      return (0, hW.jsxs)(hW.Fragment, {
        children: [(0, hW.jsxs)("div", {
          className: YW()("ShaderPackStatus", {
            Ready: "ready" === LW,
            Failed: wW
          }),
          children: ["ready" === LW && (0, hW.jsx)(TW.c, {
            name: "circle-check"
          }), wW && (0, hW.jsx)(TW.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === LW ? (0, MW.e)() : PW(nW(LW, iW), {
            packVersion: String(iW.manifest.apiVersion),
            version: String(yW.b)
          })]
        }), cW && (0, hW.jsx)(JW.b, {
          diagnostics: iW.validation.errors,
          more: iW.validation.moreErrors,
          t: PW
        }), tW.length > 0 && (0, hW.jsxs)(hW.Fragment, {
          children: [(0, hW.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, hW.jsx)(TW.c, {
              name: "triangle-exclamation"
            }), PW("shaderPack:offInStrict")]
          }), (0, hW.jsx)(JW.b, {
            diagnostics: tW,
            t: PW
          })]
        })]
      })
    }

    function oW(WW) {
      let {
        setApplySettingsCallback: iW
      } = WW;
      const {
        t: OW
      } = (0, LW.B)(), [EW, PW] = (0, mW.useState)(null), [wW, tW] = (0, mW.useState)(null), [MW, SW] = (0, mW.useState)(null), [YW] = (0, mW.useState)(xW.l), [yW, TW] = (0, mW.useState)(!0), [JW, HW] = (0, mW.useState)(!1), {
        loading: nW,
        error: oW,
        setError: eW,
        onFiles: vW
      } = (0, sW.d)((async WW => {
        const iW = await (0, ZW.loadPageShaderPackCompiler)();
        if (!iW) return void eW(OW("shaderPack:compilerUnavailable"));
        tW(iW);
        const mW = (0, lW.toStoredShaderPack)(WW, await (0, AW.g)(iW, WW.files));
        await (0, lW.saveShaderPack)(mW, iW) ? (PW(mW), gW(EW, mW, iW)) : eW(OW("shaderPack:saveFailed"))
      }));

      function gW(WW, OW, mW) {
        (function(WW, iW, OW, mW) {
          return OW || KW(WW, mW) || KW(iW, mW)
        })(WW, OW, (0, lW.isShaderPackChangePending)(), mW) && ((0, lW.markShaderPackChangePending)(), iW((() => UW.n)))
      }
      return (0, mW.useEffect)((() => {
        let WW = !1;
        return async function() {
          const iW = (0, cW.hasUsableWebGpuAdapter)(),
            OW = await (0, bW.g)();
          if (WW) return;
          PW(OW), HW(!0), TW(!1);
          const mW = null !== OW ? (0, ZW.loadPageShaderPackCompiler)() : null,
            EW = await iW;
          if (WW) return;
          SW(EW);
          const NW = await mW;
          if (!WW && (tW(NW), null !== OW && EW && null !== NW && (0, lW.shaderPackNeedsCheck)(OW, NW))) {
            const iW = await (0, AW.c)(OW, NW);
            WW || PW((WW => WW === OW ? iW : WW))
          }
        }().catch((iW => {
          console.error("Failed to load the stored shader pack", iW), WW || eW(OW("shaderPack:unexpectedError"))
        })).finally((() => {
          WW || (TW(!1), HW(!1))
        })), () => {
          WW = !0
        }
      }), []), (0, hW.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, hW.jsx)("div", {
          className: "ShaderPackIntro",
          children: OW("shaderPack:intro")
        }), (0, hW.jsx)(dW, {
          to: jW.W,
          className: "ShaderPackBrowseLink",
          children: (0, hW.jsx)(NW.n, {
            className: "ShaderPackBrowseButton",
            children: OW("shaderPackListing:browse")
          })
        }), !1 === MW && (0, hW.jsx)("div", {
          className: "SettingsBoxWarning",
          children: OW(YW ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== oW && (0, hW.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [OW("general:error"), ": ", oW]
        }), EW && (0, hW.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, hW.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, hW.jsxs)("div", {
              children: [(0, hW.jsx)("div", {
                className: "ShaderPackName",
                children: EW.manifest.name
              }), EW.manifest.author && (0, hW.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, kW.h)(OW, "shaderPack:byAuthor", {
                  author: EW.manifest.author
                })
              }), EW.manifest.description && (0, hW.jsx)("div", {
                className: "ShaderPackDescription",
                children: EW.manifest.description
              }), EW.listing && (0, hW.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, hW.jsx)(dW, {
                  to: (0, jW.$)(EW.listing.packId),
                  className: "ShaderPackListingLink",
                  children: OW("shaderPackListing:openPackPage")
                })
              })]
            }), (0, hW.jsx)(NW.S, {
              disabled: yW || nW,
              onClick: async function() {
                TW(!0), eW(null), await (0, lW.removeShaderPack)(), PW(null), TW(!1), gW(EW, null, wW)
              },
              children: OW("shaderPack:removePack")
            })]
          }), (0, hW.jsx)(uW, {
            stored: EW,
            checking: JW,
            webGpuUsable: MW,
            changePending: (0, lW.isShaderPackChangePending)(),
            compiler: wW,
            t: OW
          })]
        }), (0, hW.jsx)(sW.c, {
          busy: yW || nW || JW,
          disabled: yW || nW || JW || !0 !== MW,
          onFiles: vW
        })]
      })
    }

    function dW(WW) {
      let {
        to: iW,
        className: OW,
        children: mW
      } = WW;
      const {
        gameState: NW
      } = (0, wW.p)(["gameState"]), {
        pathname: LW,
        search: cW
      } = (0, EW.u)(), ZW = "landingPage" !== NW && "studio" !== NW;
      return (0, hW.jsx)(PW.LinkPreserveSearch, {
        to: iW,
        className: OW,
        target: ZW ? "_blank" : void 0,
        onClick: () => {
          ZW || ((0, jW.K)(`${LW}${cW}`), (0, tW.f)())
        },
        children: mW
      })
    }
  },
  7567: (WW, iW, OW) => {
    OW.d(iW, {
      $: () => cW,
      B: () => AW,
      E: () => UW,
      G: () => hW,
      K: () => tW,
      M: () => nW,
      N: () => bW,
      Q: () => VW,
      S: () => gW,
      W: () => PW,
      _: () => DW,
      bb: () => LW,
      cb: () => eW,
      d: () => kW,
      e: () => TW,
      f: () => jW,
      fb: () => vW,
      j: () => xW,
      jb: () => sW,
      kb: () => HW,
      l: () => ZW,
      p: () => uW,
      q: () => lW,
      u: () => oW,
      y: () => pW
    });
    var mW = OW(7570),
      EW = OW(154),
      NW = OW(5268);
    const PW = "/shader-packs",
      LW = `${PW}/publish`;

    function cW(WW) {
      return `${PW}/${encodeURIComponent(WW)}`
    }
    let wW = null;

    function tW(WW) {
      wW = WW
    }

    function ZW() {
      return wW
    }

    function xW() {
      wW = null
    }

    function lW(WW) {
      return WW.playerHasRank("developer") || WW.playerHasRank("admin")
    }
    const AW = ["terrain", "water", "models", "sunShadows", "strict"],
      bW = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function jW(WW, iW) {
      return WW.withFeatures.includes(iW) ? "with" : WW.withoutFeatures.includes(iW) ? "without" : null
    }

    function UW(WW) {
      return null === WW ? "with" : "with" === WW ? "without" : null
    }

    function kW(WW) {
      return "with" === WW ? "only" : null === WW ? "include" : void 0
    }

    function sW(WW, iW) {
      const OW = jW(WW, iW),
        mW = WW => WW.filter((WW => WW !== iW));
      return {
        withFeatures: null === OW ? [...WW.withFeatures, iW] : mW(WW.withFeatures),
        withoutFeatures: "with" === OW ? [...WW.withoutFeatures, iW] : mW(WW.withoutFeatures)
      }
    }
    const MW = "section",
      KW = "sort",
      SW = "filters",
      YW = "q",
      yW = "banned",
      TW = "popular",
      JW = "strict";

    function hW(WW) {
      var iW, OW, EW;
      const PW = WW.get(MW),
        LW = (null !== (iW = WW.get(SW)) && void 0 !== iW ? iW : JW).split(","),
        cW = WW.get(yW);
      return {
        section: "favourites" === PW || "mine" === PW ? PW : "explore",
        sort: null !== (OW = mW.u.find((iW => iW === WW.get(KW)))) && void 0 !== OW ? OW : TW,
        withFeatures: AW.filter((WW => LW.includes(WW) && !LW.includes(`-${WW}`))),
        withoutFeatures: AW.filter((WW => LW.includes(`-${WW}`))),
        searchQuery: (null === (EW = WW.get(YW)) || void 0 === EW ? void 0 : EW.slice(0, mW.K)) || null,
        pageNumber: (0, NW.f)(WW.get(NW.b)),
        banned: "only" === cW ? "with" : "include" === cW ? null : "without"
      }
    }

    function HW(WW, iW) {
      var OW;
      const mW = dW(iW);
      (0, NW.j)(WW, MW, "explore" === iW.section ? null : iW.section), (0, NW.j)(WW, KW, iW.sort === TW ? null : iW.sort), (0, NW.j)(WW, SW, mW === JW ? null : mW), (0, NW.j)(WW, YW, iW.searchQuery), (0, NW.j)(WW, yW, null !== (OW = kW(iW.banned)) && void 0 !== OW ? OW : null), (0, NW.m)(WW, iW.pageNumber)
    }

    function nW(WW) {
      const iW = new URLSearchParams;
      return HW(iW, {
        section: "explore",
        sort: TW,
        withFeatures: "strict" === WW ? [WW] : [WW, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${PW}?${iW.toString()}`
    }

    function uW(WW) {
      return dW(WW) === JW
    }

    function oW(WW) {
      return null !== WW.searchQuery || "with" === WW.banned || dW(WW) !== JW
    }

    function dW(WW) {
      return AW.flatMap((iW => {
        const OW = jW(WW, iW);
        return "with" === OW ? [iW] : "without" === OW ? [`-${iW}`] : []
      })).join(",")
    }
    const eW = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      vW = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function gW(WW) {
      return Math.round(100 * Math.max(0, 1 - 1 / WW))
    }

    function DW(WW, iW, OW, EW) {
      const NW = [];
      WW.isBanned && NW.push({
        tone: "warning",
        text: EW("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: PW
      } = WW;
      if (null === WW.brokenError || PW && !PW.error || NW.push({
          tone: "warning",
          text: EW("shaderPackListing:ownerBroken"),
          detail: WW.brokenError
        }), null !== PW && void 0 !== PW && PW.error) NW.push({
        tone: "warning",
        text: EW(iW ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, mW.g)(PW.error) ? null : PW.error
      });
      else if (PW) {
        const WW = null === PW.renderNotBefore ? 0 : PW.renderNotBefore - OW,
          mW = String(Math.ceil(WW / 6e4)),
          LW = EW(iW ? WW > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : WW > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: mW
          });
        NW.push({
          tone: "info",
          text: LW,
          detail: null
        })
      }
      return WW.listed || NW.push({
        tone: "info",
        text: EW("shaderPackListing:ownerUnlisted"),
        detail: null
      }), NW
    }

    function VW(WW) {
      return Math.max(1, Math.round(WW / 1024))
    }

    function pW(WW, iW, OW) {
      return WW instanceof EW.c && WW.errorMessageForUser ? WW.errorMessageForUser : iW(OW)
    }
  },
  7570: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => PW,
      F: () => mW,
      G: () => xW,
      K: () => tW,
      L: () => MW,
      M: () => ZW,
      N: () => wW,
      c: () => AW,
      d: () => jW,
      e: () => bW,
      f: () => lW,
      g: () => sW,
      i: () => SW,
      j: () => cW,
      n: () => EW,
      q: () => KW,
      u: () => NW,
      x: () => LW
    });
    const mW = ["forest", "desert", "water", "night", "cave"];
    const EW = {
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
      NW = ["popular", "updated", "newest"],
      PW = 3,
      LW = 32,
      cW = 300;

    function wW(WW, iW) {
      return WW.slice(0, iW).replace(/[\uD800-\uDBFF]$/, "")
    }
    const tW = 64,
      ZW = 512,
      xW = 18e5;

    function lW(WW) {
      const iW = WW,
        OW = null === iW || void 0 === iW ? void 0 : iW.files;
      return "number" === typeof(null === iW || void 0 === iW ? void 0 : iW.apiVersion) && "string" === typeof iW.name && (null === iW.author || "string" === typeof iW.author) && (void 0 === iW.keepCircleShadows || "boolean" === typeof iW.keepCircleShadows) && "object" === typeof OW && null !== OW && Object.values(OW).every((WW => "string" === typeof WW))
    }
    const AW = "Bloxdhub",
      bW = "https://bloxdhub.com/shaders";

    function jW(WW) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
    }
    const UW = "Screenshot generation failed.",
      kW = "Its screenshots couldn't be generated:";

    function sW(WW) {
      var iW;
      return WW === UW || null !== (iW = null === WW || void 0 === WW ? void 0 : WW.startsWith(kW)) && void 0 !== iW && iW
    }

    function MW(WW, iW) {
      return `shaderPacks/${WW}/${iW}.json`
    }

    function KW(WW, iW, OW, mW) {
      return null === iW.renderId ? SW(WW, iW.baselineVersion, OW, mW) : `${WW}/${function(WW,iW,OW,mW){return`shaderPacks/${WW}/${iW}/${OW}-${mW}.webp`}(iW.packId,iW.renderId,OW,mW)}`
    }

    function SW(WW, iW, OW, mW) {
      return `${WW}/${function(WW,iW,OW){return`shaderPacks/baseline/${WW}/${iW}-${OW}.webp`}(iW,OW,mW)}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);