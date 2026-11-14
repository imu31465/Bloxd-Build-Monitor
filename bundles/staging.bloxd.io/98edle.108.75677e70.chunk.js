export const id = 108;
export const ids = [108];
export const modules = {
  38556: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      ShaderPackCategory: () => sW
    });
    var wW = MW(75),
      CW = MW(1345),
      zR = MW(1255),
      AW = MW(1330),
      bR = MW(1027),
      yR = MW(116),
      NW = MW(27),
      eW = MW(1459),
      BW = MW(5621),
      tR = MW(230),
      TW = MW(5656),
      gR = MW(5653),
      iR = MW(5661),
      YW = MW(5548),
      JW = MW(3965),
      PW = MW(5613),
      IW = MW(5619),
      oW = MW(2525);

    function lW(WW, RW) {
      const MW = (0, TW.storedPackOutcome)(WW, RW);
      return "none" !== MW.kind || "noCompiler" === MW.reason
    }
    var FW = MW(897),
      fW = MW.n(FW),
      QW = MW(5615),
      rR = MW(904),
      cR = MW(5605),
      XW = MW(940);
    const jR = {
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

    function kR(WW, RW) {
      return "failedRecheck" === WW && RW.listing ? "shaderPack:statusFailedRecheckListed" : jR[WW]
    }

    function aR(WW) {
      let {
        stored: RW,
        checking: MW,
        webGpuUsable: wW,
        changePending: CW,
        compiler: zR,
        t: AW
      } = WW;
      const bR = function(WW, RW, MW, wW, CW) {
          const zR = (0, TW.storedPackOutcome)(WW, CW);
          return "none" === zR.kind ? "noCompiler" === zR.reason ? RW ? "checking" : "noCompiler" : "otherApiVersion" === zR.reason ? "wrongApiVersion" : "failed" : (0, oW.d)() ? "harnessBuild" : "blocked" === zR.kind ? (0, TW.shaderPackNeedsCheck)(WW, CW) ? RW ? "checking" : !1 === MW ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === MW ? "offNoWebGpu" : wW ? "readyAfterReload" : "ready"
        }(RW, MW, wW, CW, zR),
        yR = "failed" === bR || "failedRecheck" === bR,
        NW = yR || "wrongApiVersion" === bR || "noCompiler" === bR,
        eW = "ready" === bR || "readyAfterReload" === bR ? RW.validation.offInStrict : [];
      return (0, XW.jsxs)(XW.Fragment, {
        children: [(0, XW.jsxs)("div", {
          className: fW()("ShaderPackStatus", {
            Ready: "ready" === bR,
            Failed: NW
          }),
          children: ["ready" === bR && (0, XW.jsx)(rR.e, {
            name: "circle-check"
          }), NW && (0, XW.jsx)(rR.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === bR ? (0, oW.c)() : AW(kR(bR, RW), {
            packVersion: String(RW.manifest.apiVersion),
            version: String(QW.e)
          })]
        }), yR && (0, XW.jsx)(cR.c, {
          diagnostics: RW.validation.errors,
          more: RW.validation.moreErrors,
          t: AW
        }), eW.length > 0 && (0, XW.jsxs)(XW.Fragment, {
          children: [(0, XW.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, XW.jsx)(rR.e, {
              name: "triangle-exclamation"
            }), AW("shaderPack:offInStrict")]
          }), (0, XW.jsx)(cR.c, {
            diagnostics: eW,
            t: AW
          })]
        })]
      })
    }

    function sW(WW) {
      let {
        setApplySettingsCallback: RW
      } = WW;
      const {
        t: MW
      } = (0, bR.C)(), [CW, AW] = (0, wW.useState)(null), [NW, eW] = (0, wW.useState)(null), [oW, FW] = (0, wW.useState)(null), [fW] = (0, wW.useState)(tR.f), [QW, rR] = (0, wW.useState)(!0), [cR, jR] = (0, wW.useState)(!1), {
        loading: kR,
        error: sW,
        setError: pW,
        onFiles: hW
      } = (0, IW.h)((async WW => {
        const RW = await (0, BW.loadPageShaderPackCompiler)();
        if (!RW) return void pW(MW("shaderPack:compilerUnavailable"));
        eW(RW);
        const wW = (0, TW.toStoredShaderPack)(WW, await (0, gR.f)(RW, WW.files));
        await (0, TW.saveShaderPack)(wW, RW) ? (AW(wW), UW(CW, wW, RW)) : pW(MW("shaderPack:saveFailed"))
      }));

      function UW(WW, MW, wW) {
        (function(WW, RW, MW, wW) {
          return MW || lW(WW, wW) || lW(RW, wW)
        })(WW, MW, (0, TW.isShaderPackChangePending)(), wW) && ((0, TW.markShaderPackChangePending)(), RW((() => JW.i)))
      }
      return (0, wW.useEffect)((() => {
        let WW = !1;
        return async function() {
          const RW = (0, yR.hasUsableWebGpuAdapter)(),
            MW = await (0, iR.h)();
          if (WW) return;
          AW(MW), jR(!0), rR(!1);
          const wW = null !== MW ? (0, BW.loadPageShaderPackCompiler)() : null,
            CW = await RW;
          if (WW) return;
          FW(CW);
          const zR = await wW;
          if (!WW && (eW(zR), null !== MW && CW && null !== zR && (0, TW.shaderPackNeedsCheck)(MW, zR))) {
            const RW = await (0, gR.e)(MW, zR);
            WW || AW((WW => WW === MW ? RW : WW))
          }
        }().catch((RW => {
          console.error("Failed to load the stored shader pack", RW), WW || pW(MW("shaderPack:unexpectedError"))
        })).finally((() => {
          WW || (rR(!1), jR(!1))
        })), () => {
          WW = !0
        }
      }), []), (0, XW.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, XW.jsx)("div", {
          className: "ShaderPackIntro",
          children: MW("shaderPack:intro")
        }), (0, XW.jsx)(dW, {
          to: YW.$,
          className: "ShaderPackBrowseLink",
          children: (0, XW.jsx)(zR.m, {
            className: "ShaderPackBrowseButton",
            children: MW("shaderPackListing:browse")
          })
        }), !1 === oW && (0, XW.jsx)("div", {
          className: "SettingsBoxWarning",
          children: MW(fW ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== sW && (0, XW.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [MW("general:error"), ": ", sW]
        }), CW && (0, XW.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, XW.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, XW.jsxs)("div", {
              children: [(0, XW.jsx)("div", {
                className: "ShaderPackName",
                children: CW.manifest.name
              }), CW.manifest.author && (0, XW.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, PW.g)(MW, "shaderPack:byAuthor", {
                  author: CW.manifest.author
                })
              }), CW.manifest.description && (0, XW.jsx)("div", {
                className: "ShaderPackDescription",
                children: CW.manifest.description
              }), CW.listing && (0, XW.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, XW.jsx)(dW, {
                  to: (0, YW.cb)(CW.listing.packId),
                  className: "ShaderPackListingLink",
                  children: MW("shaderPackListing:openPackPage")
                })
              })]
            }), (0, XW.jsx)(zR.I, {
              disabled: QW || kR,
              onClick: async function() {
                rR(!0), pW(null), await (0, TW.removeShaderPack)(), AW(null), rR(!1), UW(CW, null, NW)
              },
              children: MW("shaderPack:removePack")
            })]
          }), (0, XW.jsx)(aR, {
            stored: CW,
            checking: cR,
            webGpuUsable: oW,
            changePending: (0, TW.isShaderPackChangePending)(),
            compiler: NW,
            t: MW
          })]
        }), (0, XW.jsx)(IW.d, {
          busy: QW || kR || cR,
          disabled: QW || kR || cR || !0 !== oW,
          onFiles: hW
        })]
      })
    }

    function dW(WW) {
      let {
        to: RW,
        className: MW,
        children: wW
      } = WW;
      const {
        gameState: zR
      } = (0, NW.i)(["gameState"]), {
        pathname: bR,
        search: yR
      } = (0, CW.s)(), BW = "landingPage" !== zR && "studio" !== zR;
      return (0, XW.jsx)(AW.LinkPreserveSearch, {
        to: RW,
        className: MW,
        target: BW ? "_blank" : void 0,
        onClick: () => {
          BW || ((0, YW.L)(`${bR}${yR}`), (0, eW.h)())
        },
        children: wW
      })
    }
  },
  5548: (WW, RW, MW) => {
    MW.d(RW, {
      $: () => AW,
      C: () => gR,
      G: () => JW,
      K: () => XW,
      L: () => eW,
      M: () => kR,
      P: () => iR,
      T: () => VW,
      X: () => UW,
      bb: () => EW,
      cb: () => yR,
      db: () => bR,
      e: () => PW,
      h: () => rR,
      hb: () => pW,
      ib: () => hW,
      j: () => YW,
      lb: () => IW,
      m: () => tR,
      o: () => BW,
      ob: () => jR,
      r: () => aR,
      v: () => TW,
      w: () => sW,
      y: () => mR
    });
    var wW = MW(5557),
      CW = MW(156),
      zR = MW(3600);
    const AW = "/shader-packs",
      bR = `${AW}/publish`;

    function yR(WW) {
      return `${AW}/${encodeURIComponent(WW)}`
    }
    let NW = null;

    function eW(WW) {
      NW = WW
    }

    function BW() {
      return NW
    }

    function tR() {
      NW = null
    }

    function TW(WW) {
      return WW.playerHasRank("developer") || WW.playerHasRank("admin")
    }
    const gR = ["terrain", "water", "models", "sunShadows", "strict"],
      iR = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function YW(WW, RW) {
      return WW.withFeatures.includes(RW) ? "with" : WW.withoutFeatures.includes(RW) ? "without" : null
    }

    function JW(WW) {
      return null === WW ? "with" : "with" === WW ? "without" : null
    }

    function PW(WW) {
      return "with" === WW ? "only" : null === WW ? "include" : void 0
    }

    function IW(WW, RW) {
      const MW = YW(WW, RW),
        wW = WW => WW.filter((WW => WW !== RW));
      return {
        withFeatures: null === MW ? [...WW.withFeatures, RW] : wW(WW.withFeatures),
        withoutFeatures: "with" === MW ? [...WW.withoutFeatures, RW] : wW(WW.withoutFeatures)
      }
    }
    const oW = "section",
      lW = "sort",
      FW = "filters",
      fW = "q",
      QW = "banned",
      rR = "popular",
      cR = "strict";

    function XW(WW) {
      var RW, MW, CW;
      const AW = WW.get(oW),
        bR = (null !== (RW = WW.get(FW)) && void 0 !== RW ? RW : cR).split(","),
        yR = WW.get(QW);
      return {
        section: "favourites" === AW || "mine" === AW ? AW : "explore",
        sort: null !== (MW = wW.q.find((RW => RW === WW.get(lW)))) && void 0 !== MW ? MW : rR,
        withFeatures: gR.filter((WW => bR.includes(WW) && !bR.includes(`-${WW}`))),
        withoutFeatures: gR.filter((WW => bR.includes(`-${WW}`))),
        searchQuery: (null === (CW = WW.get(fW)) || void 0 === CW ? void 0 : CW.slice(0, wW.G)) || null,
        pageNumber: (0, zR.f)(WW.get(zR.b)),
        banned: "only" === yR ? "with" : "include" === yR ? null : "without"
      }
    }

    function jR(WW, RW) {
      var MW;
      const wW = dW(RW);
      (0, zR.i)(WW, oW, "explore" === RW.section ? null : RW.section), (0, zR.i)(WW, lW, RW.sort === rR ? null : RW.sort), (0, zR.i)(WW, FW, wW === cR ? null : wW), (0, zR.i)(WW, fW, RW.searchQuery), (0, zR.i)(WW, QW, null !== (MW = PW(RW.banned)) && void 0 !== MW ? MW : null), (0, zR.k)(WW, RW.pageNumber)
    }

    function kR(WW) {
      const RW = new URLSearchParams;
      return jR(RW, {
        section: "explore",
        sort: rR,
        withFeatures: "strict" === WW ? [WW] : [WW, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${AW}?${RW.toString()}`
    }

    function aR(WW) {
      return dW(WW) === cR
    }

    function sW(WW) {
      return null !== WW.searchQuery || "with" === WW.banned || dW(WW) !== cR
    }

    function dW(WW) {
      return gR.flatMap((RW => {
        const MW = YW(WW, RW);
        return "with" === MW ? [RW] : "without" === MW ? [`-${RW}`] : []
      })).join(",")
    }
    const pW = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      hW = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function UW(WW) {
      return Math.round(100 * Math.max(0, 1 - 1 / WW))
    }

    function EW(WW, RW, MW, CW) {
      const zR = [];
      WW.isBanned && zR.push({
        tone: "warning",
        text: CW("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: AW
      } = WW;
      if (null === WW.brokenError || AW && !AW.error || zR.push({
          tone: "warning",
          text: CW("shaderPackListing:ownerBroken"),
          detail: WW.brokenError
        }), null !== AW && void 0 !== AW && AW.error) zR.push({
        tone: "warning",
        text: CW(RW ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, wW.i)(AW.error) ? null : AW.error
      });
      else if (AW) {
        const WW = null === AW.renderNotBefore ? 0 : AW.renderNotBefore - MW,
          wW = String(Math.ceil(WW / 6e4)),
          bR = CW(RW ? WW > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : WW > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: wW
          });
        zR.push({
          tone: "info",
          text: bR,
          detail: null
        })
      }
      return WW.listed || zR.push({
        tone: "info",
        text: CW("shaderPackListing:ownerUnlisted"),
        detail: null
      }), zR
    }

    function VW(WW) {
      return Math.max(1, Math.round(WW / 1024))
    }

    function mR(WW, RW, MW) {
      return WW instanceof CW.d && WW.errorMessageForUser ? WW.errorMessageForUser : RW(MW)
    }
  },
  5557: (WW, RW, MW) => {
    MW.d(RW, {
      C: () => tR,
      G: () => eW,
      J: () => IW,
      K: () => BW,
      M: () => NW,
      c: () => TW,
      e: () => iR,
      f: () => gR,
      i: () => PW,
      j: () => lW,
      k: () => yR,
      m: () => CW,
      o: () => oW,
      q: () => zR,
      t: () => bR,
      u: () => AW,
      y: () => wW
    });
    const wW = ["forest", "desert", "water", "night", "cave"];
    const CW = {
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
      zR = ["popular", "updated", "newest"],
      AW = 3,
      bR = 32,
      yR = 300;

    function NW(WW, RW) {
      return WW.slice(0, RW).replace(/[\uD800-\uDBFF]$/, "")
    }
    const eW = 64,
      BW = 512,
      tR = 18e5;
    const TW = "Bloxdhub",
      gR = "https://bloxdhub.com/shaders";

    function iR(WW) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
    }
    const YW = "Screenshot generation failed.",
      JW = "Its screenshots couldn't be generated:";

    function PW(WW) {
      var RW;
      return WW === YW || null !== (RW = null === WW || void 0 === WW ? void 0 : WW.startsWith(JW)) && void 0 !== RW && RW
    }

    function IW(WW, RW) {
      return `shaderPacks/${WW}/${RW}.json`
    }

    function oW(WW, RW, MW, wW) {
      return null === RW.renderId ? lW(WW, RW.baselineVersion, MW, wW) : `${WW}/${function(WW,RW,MW,wW){return`shaderPacks/${WW}/${RW}/${MW}-${wW}.webp`}(RW.packId,RW.renderId,MW,wW)}`
    }

    function lW(WW, RW, MW, wW) {
      return `${WW}/${function(WW,RW,MW){return`shaderPacks/baseline/${WW}/${RW}-${MW}.webp`}(RW,MW,wW)}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);