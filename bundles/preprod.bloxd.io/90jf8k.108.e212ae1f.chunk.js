export const id = 108;
export const ids = [108];
export const modules = {
  38929: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      ShaderPackCategory: () => YF
    });
    var CF = SF(46),
      AF = SF(1360),
      uF = SF(1266),
      hF = SF(1352),
      bW = SF(1046),
      dF = SF(89),
      PF = SF(11),
      RF = SF(1475),
      iW = SF(5589),
      eF = SF(211),
      EF = SF(5626),
      QF = SF(5624),
      rW = SF(5630),
      gW = SF(5512),
      tW = SF(3997),
      TF = SF(5576),
      aW = SF(5585),
      kW = SF(2598);

    function qW(FF, WF) {
      const SF = (0, EF.storedPackOutcome)(FF, WF);
      return "none" !== SF.kind || "noCompiler" === SF.reason
    }
    var VF = SF(918),
      NF = SF.n(VF),
      DF = SF(5578),
      LF = SF(929),
      mW = SF(5572),
      OF = SF(971);
    const xW = {
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

    function ZF(FF, WF) {
      return "failedRecheck" === FF && WF.listing ? "shaderPack:statusFailedRecheckListed" : xW[FF]
    }

    function oF(FF) {
      let {
        stored: WF,
        checking: SF,
        webGpuUsable: CF,
        changePending: AF,
        compiler: uF,
        t: hF
      } = FF;
      const bW = function(FF, WF, SF, CF, AF) {
          const uF = (0, EF.storedPackOutcome)(FF, AF);
          return "none" === uF.kind ? "noCompiler" === uF.reason ? WF ? "checking" : "noCompiler" : "otherApiVersion" === uF.reason ? "wrongApiVersion" : "failed" : (0, kW.g)() ? "harnessBuild" : "blocked" === uF.kind ? (0, EF.shaderPackNeedsCheck)(FF, AF) ? WF ? "checking" : !1 === SF ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === SF ? "offNoWebGpu" : CF ? "readyAfterReload" : "ready"
        }(WF, SF, CF, AF, uF),
        dF = "failed" === bW || "failedRecheck" === bW,
        PF = dF || "wrongApiVersion" === bW || "noCompiler" === bW,
        RF = "ready" === bW || "readyAfterReload" === bW ? WF.validation.offInStrict : [];
      return (0, OF.jsxs)(OF.Fragment, {
        children: [(0, OF.jsxs)("div", {
          className: NF()("ShaderPackStatus", {
            Ready: "ready" === bW,
            Failed: PF
          }),
          children: ["ready" === bW && (0, OF.jsx)(LF.e, {
            name: "circle-check"
          }), PF && (0, OF.jsx)(LF.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === bW ? (0, kW.d)() : hF(ZF(bW, WF), {
            packVersion: String(WF.manifest.apiVersion),
            version: String(DF.b)
          })]
        }), dF && (0, OF.jsx)(mW.d, {
          diagnostics: WF.validation.errors,
          more: WF.validation.moreErrors,
          t: hF
        }), RF.length > 0 && (0, OF.jsxs)(OF.Fragment, {
          children: [(0, OF.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, OF.jsx)(LF.e, {
              name: "triangle-exclamation"
            }), hF("shaderPack:offInStrict")]
          }), (0, OF.jsx)(mW.d, {
            diagnostics: RF,
            t: hF
          })]
        })]
      })
    }

    function YF(FF) {
      let {
        setApplySettingsCallback: WF
      } = FF;
      const {
        t: SF
      } = (0, bW.B)(), [AF, hF] = (0, CF.useState)(null), [PF, RF] = (0, CF.useState)(null), [kW, VF] = (0, CF.useState)(null), [NF] = (0, CF.useState)(eF.i), [DF, LF] = (0, CF.useState)(!0), [mW, xW] = (0, CF.useState)(!1), {
        loading: ZF,
        error: YF,
        setError: cW,
        onFiles: GF
      } = (0, aW.d)((async FF => {
        const WF = await (0, iW.loadPageShaderPackCompiler)();
        if (!WF) return void cW(SF("shaderPack:compilerUnavailable"));
        RF(WF);
        const CF = (0, EF.toStoredShaderPack)(FF, await (0, QF.f)(WF, FF.files));
        await (0, EF.saveShaderPack)(CF, WF) ? (hF(CF), zW(AF, CF, WF)) : cW(SF("shaderPack:saveFailed"))
      }));

      function zW(FF, SF, CF) {
        (function(FF, WF, SF, CF) {
          return SF || qW(FF, CF) || qW(WF, CF)
        })(FF, SF, (0, EF.isShaderPackChangePending)(), CF) && ((0, EF.markShaderPackChangePending)(), WF((() => tW.k)))
      }
      return (0, CF.useEffect)((() => {
        let FF = !1;
        return async function() {
          const WF = (0, dF.hasUsableWebGpuAdapter)(),
            SF = await (0, rW.f)();
          if (FF) return;
          hF(SF), xW(!0), LF(!1);
          const CF = null !== SF ? (0, iW.loadPageShaderPackCompiler)() : null,
            AF = await WF;
          if (FF) return;
          VF(AF);
          const uF = await CF;
          if (!FF && (RF(uF), null !== SF && AF && null !== uF && (0, EF.shaderPackNeedsCheck)(SF, uF))) {
            const WF = await (0, QF.e)(SF, uF);
            FF || hF((FF => FF === SF ? WF : FF))
          }
        }().catch((WF => {
          console.error("Failed to load the stored shader pack", WF), FF || cW(SF("shaderPack:unexpectedError"))
        })).finally((() => {
          FF || (LF(!1), xW(!1))
        })), () => {
          FF = !0
        }
      }), []), (0, OF.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, OF.jsx)("div", {
          className: "ShaderPackIntro",
          children: SF("shaderPack:intro")
        }), (0, OF.jsx)(MF, {
          to: gW.Q,
          className: "ShaderPackBrowseLink",
          children: (0, OF.jsx)(uF.k, {
            className: "ShaderPackBrowseButton",
            children: SF("shaderPackListing:browse")
          })
        }), !1 === kW && (0, OF.jsx)("div", {
          className: "SettingsBoxWarning",
          children: SF(NF ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== YF && (0, OF.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [SF("general:error"), ": ", YF]
        }), AF && (0, OF.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, OF.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, OF.jsxs)("div", {
              children: [(0, OF.jsx)("div", {
                className: "ShaderPackName",
                children: AF.manifest.name
              }), AF.manifest.author && (0, OF.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, TF.i)(SF, "shaderPack:byAuthor", {
                  author: AF.manifest.author
                })
              }), AF.manifest.description && (0, OF.jsx)("div", {
                className: "ShaderPackDescription",
                children: AF.manifest.description
              }), AF.listing && (0, OF.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, OF.jsx)(MF, {
                  to: (0, gW.W)(AF.listing.packId),
                  className: "ShaderPackListingLink",
                  children: SF("shaderPackListing:openPackPage")
                })
              })]
            }), (0, OF.jsx)(uF.I, {
              disabled: DF || ZF,
              onClick: async function() {
                LF(!0), cW(null), await (0, EF.removeShaderPack)(), hF(null), LF(!1), zW(AF, null, PF)
              },
              children: SF("shaderPack:removePack")
            })]
          }), (0, OF.jsx)(oF, {
            stored: AF,
            checking: mW,
            webGpuUsable: kW,
            changePending: (0, EF.isShaderPackChangePending)(),
            compiler: PF,
            t: SF
          })]
        }), (0, OF.jsx)(aW.b, {
          busy: DF || ZF || mW,
          disabled: DF || ZF || mW || !0 !== kW,
          onFiles: GF
        })]
      })
    }

    function MF(FF) {
      let {
        to: WF,
        className: SF,
        children: CF
      } = FF;
      const {
        gameState: uF
      } = (0, PF.d)(["gameState"]), {
        pathname: bW,
        search: dF
      } = (0, AF.p)(), iW = "landingPage" !== uF && "studio" !== uF;
      return (0, OF.jsx)(hF.LinkPreserveSearch, {
        to: WF,
        className: SF,
        target: iW ? "_blank" : void 0,
        onClick: () => {
          iW || ((0, gW.F)(`${bW}${dF}`), (0, RF.f)())
        },
        children: CF
      })
    }
  },
  5512: (FF, WF, SF) => {
    SF.d(WF, {
      $: () => cW,
      A: () => tW,
      C: () => OF,
      F: () => RF,
      I: () => ZF,
      J: () => rW,
      K: () => fF,
      O: () => zW,
      Q: () => hF,
      U: () => IF,
      W: () => dF,
      _: () => bW,
      ab: () => GF,
      db: () => aW,
      e: () => TF,
      eb: () => xW,
      h: () => LF,
      j: () => gW,
      k: () => eF,
      l: () => iW,
      m: () => oF,
      o: () => EF,
      q: () => YF,
      u: () => yW,
      y: () => QF
    });
    var CF = SF(5520),
      AF = SF(138),
      uF = SF(3629);
    const hF = "/shader-packs",
      bW = `${hF}/publish`;

    function dF(FF) {
      return `${hF}/${encodeURIComponent(FF)}`
    }
    let PF = null;

    function RF(FF) {
      PF = FF
    }

    function iW() {
      return PF
    }

    function eF() {
      PF = null
    }

    function EF(FF) {
      return FF.playerHasRank("developer") || FF.playerHasRank("admin")
    }
    const QF = ["terrain", "water", "models", "sunShadows", "strict"],
      rW = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function gW(FF, WF) {
      return FF.withFeatures.includes(WF) ? "with" : FF.withoutFeatures.includes(WF) ? "without" : null
    }

    function tW(FF) {
      return null === FF ? "with" : "with" === FF ? "without" : null
    }

    function TF(FF) {
      return "with" === FF ? "only" : null === FF ? "include" : void 0
    }

    function aW(FF, WF) {
      const SF = gW(FF, WF),
        CF = FF => FF.filter((FF => FF !== WF));
      return {
        withFeatures: null === SF ? [...FF.withFeatures, WF] : CF(FF.withFeatures),
        withoutFeatures: "with" === SF ? [...FF.withoutFeatures, WF] : CF(FF.withoutFeatures)
      }
    }
    const kW = "section",
      qW = "sort",
      VF = "filters",
      NF = "q",
      DF = "banned",
      LF = "popular",
      mW = "strict";

    function OF(FF) {
      var WF, SF, AF;
      const hF = FF.get(kW),
        bW = (null !== (WF = FF.get(VF)) && void 0 !== WF ? WF : mW).split(","),
        dF = FF.get(DF);
      return {
        section: "favourites" === hF || "mine" === hF ? hF : "explore",
        sort: null !== (SF = CF.A.find((WF => WF === FF.get(qW)))) && void 0 !== SF ? SF : LF,
        withFeatures: QF.filter((FF => bW.includes(FF) && !bW.includes(`-${FF}`))),
        withoutFeatures: QF.filter((FF => bW.includes(`-${FF}`))),
        searchQuery: (null === (AF = FF.get(NF)) || void 0 === AF ? void 0 : AF.slice(0, CF.M)) || null,
        pageNumber: (0, uF.g)(FF.get(uF.e)),
        banned: "only" === dF ? "with" : "include" === dF ? null : "without"
      }
    }

    function xW(FF, WF) {
      var SF;
      const CF = MF(WF);
      (0, uF.i)(FF, kW, "explore" === WF.section ? null : WF.section), (0, uF.i)(FF, qW, WF.sort === LF ? null : WF.sort), (0, uF.i)(FF, VF, CF === mW ? null : CF), (0, uF.i)(FF, NF, WF.searchQuery), (0, uF.i)(FF, DF, null !== (SF = TF(WF.banned)) && void 0 !== SF ? SF : null), (0, uF.l)(FF, WF.pageNumber)
    }

    function ZF(FF) {
      const WF = new URLSearchParams;
      return xW(WF, {
        section: "explore",
        sort: LF,
        withFeatures: "strict" === FF ? [FF] : [FF, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${hF}?${WF.toString()}`
    }

    function oF(FF) {
      return MF(FF) === mW
    }

    function YF(FF) {
      return null !== FF.searchQuery || "with" === FF.banned || MF(FF) !== mW
    }

    function MF(FF) {
      return QF.flatMap((WF => {
        const SF = gW(FF, WF);
        return "with" === SF ? [WF] : "without" === SF ? [`-${WF}`] : []
      })).join(",")
    }
    const cW = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      GF = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function zW(FF) {
      return Math.round(100 * Math.max(0, 1 - 1 / FF))
    }

    function IF(FF, WF, SF, AF) {
      const uF = [];
      FF.isBanned && uF.push({
        tone: "warning",
        text: AF("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: hF
      } = FF;
      if (null === FF.brokenError || hF && !hF.error || uF.push({
          tone: "warning",
          text: AF("shaderPackListing:ownerBroken"),
          detail: FF.brokenError
        }), null !== hF && void 0 !== hF && hF.error) uF.push({
        tone: "warning",
        text: AF(WF ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, CF.l)(hF.error) ? null : hF.error
      });
      else if (hF) {
        const FF = null === hF.renderNotBefore ? 0 : hF.renderNotBefore - SF,
          CF = String(Math.ceil(FF / 6e4)),
          bW = AF(WF ? FF > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : FF > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: CF
          });
        uF.push({
          tone: "info",
          text: bW,
          detail: null
        })
      }
      return FF.listed || uF.push({
        tone: "info",
        text: AF("shaderPackListing:ownerUnlisted"),
        detail: null
      }), uF
    }

    function fF(FF) {
      return Math.max(1, Math.round(FF / 1024))
    }

    function yW(FF, WF, SF) {
      return FF instanceof AF.c && FF.errorMessageForUser ? FF.errorMessageForUser : WF(SF)
    }
  },
  5520: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => uF,
      E: () => bW,
      F: () => hF,
      H: () => CF,
      L: () => eF,
      M: () => RF,
      O: () => aW,
      P: () => iW,
      Q: () => PF,
      d: () => EF,
      g: () => rW,
      h: () => QF,
      l: () => TF,
      o: () => qW,
      q: () => dF,
      t: () => AF,
      w: () => kW
    });
    const CF = ["forest", "desert", "water", "night", "cave"];
    const AF = {
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
      uF = ["popular", "updated", "newest"],
      hF = 3,
      bW = 32,
      dF = 300;

    function PF(FF, WF) {
      return FF.slice(0, WF).replace(/[\uD800-\uDBFF]$/, "")
    }
    const RF = 64,
      iW = 512,
      eF = 18e5;
    const EF = "Bloxdhub",
      QF = "https://bloxdhub.com/shaders";

    function rW(FF) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(FF)}`
    }
    const gW = "Screenshot generation failed.",
      tW = "Its screenshots couldn't be generated:";

    function TF(FF) {
      var WF;
      return FF === gW || null !== (WF = null === FF || void 0 === FF ? void 0 : FF.startsWith(tW)) && void 0 !== WF && WF
    }

    function aW(FF, WF) {
      return `shaderPacks/${FF}/${WF}.json`
    }

    function kW(FF, WF, SF, CF) {
      return null === WF.renderId ? qW(FF, WF.baselineVersion, SF, CF) : `${FF}/${function(FF,WF,SF,CF){return`shaderPacks/${FF}/${WF}/${SF}-${CF}.webp`}(WF.packId,WF.renderId,SF,CF)}`
    }

    function qW(FF, WF, SF, CF) {
      return `${FF}/${function(FF,WF,SF){return`shaderPacks/baseline/${FF}/${WF}-${SF}.webp`}(WF,SF,CF)}`
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);