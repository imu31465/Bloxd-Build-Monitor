export const id = 123;
export const ids = [123];
export const modules = {
  40482: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      ShaderPackCategory: () => UQ
    });
    var LQ = wQ(53),
      qQ = wQ(1515),
      oQ = wQ(1451),
      DQ = wQ(1503),
      kQ = wQ(1207),
      vQ = wQ(96),
      mQ = wQ(17),
      uQ = wQ(1641),
      HQ = wQ(6438),
      bQ = wQ(282),
      YQ = wQ(6481),
      xQ = wQ(6476),
      AQ = wQ(6485),
      tQ = wQ(6371),
      eQ = wQ(4837),
      MQ = wQ(6427),
      GQ = wQ(6435),
      pQ = wQ(3325);

    function cQ(QQ, FQ) {
      const wQ = (0, YQ.storedPackOutcome)(QQ, FQ);
      return "none" !== wQ.kind || "noCompiler" === wQ.reason
    }
    var CQ = wQ(1070),
      SQ = wQ.n(CQ),
      iQ = wQ(6429),
      WQ = wQ(1079),
      RQ = wQ(6422),
      OQ = wQ(1107);
    const sQ = {
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

    function rQ(QQ, FQ) {
      return "failedRecheck" === QQ && FQ.listing ? "shaderPack:statusFailedRecheckListed" : sQ[QQ]
    }

    function IQ(QQ) {
      let {
        stored: FQ,
        checking: wQ,
        webGpuUsable: LQ,
        changePending: qQ,
        compiler: oQ,
        t: DQ
      } = QQ;
      const kQ = function(QQ, FQ, wQ, LQ, qQ) {
          const oQ = (0, YQ.storedPackOutcome)(QQ, qQ);
          return "none" === oQ.kind ? "noCompiler" === oQ.reason ? FQ ? "checking" : "noCompiler" : "otherApiVersion" === oQ.reason ? "wrongApiVersion" : "failed" : (0, pQ.c)() ? "harnessBuild" : "blocked" === oQ.kind ? (0, YQ.shaderPackNeedsCheck)(QQ, qQ) ? FQ ? "checking" : !1 === wQ ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === wQ ? "offNoWebGpu" : LQ ? "readyAfterReload" : "ready"
        }(FQ, wQ, LQ, qQ, oQ),
        vQ = "failed" === kQ || "failedRecheck" === kQ,
        mQ = vQ || "wrongApiVersion" === kQ || "noCompiler" === kQ,
        uQ = "ready" === kQ || "readyAfterReload" === kQ ? FQ.validation.offInStrict : [];
      return (0, OQ.jsxs)(OQ.Fragment, {
        children: [(0, OQ.jsxs)("div", {
          className: SQ()("ShaderPackStatus", {
            Ready: "ready" === kQ,
            Failed: mQ
          }),
          children: ["ready" === kQ && (0, OQ.jsx)(WQ.c, {
            name: "circle-check"
          }), mQ && (0, OQ.jsx)(WQ.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === kQ ? (0, pQ.b)() : DQ(rQ(kQ, FQ), {
            packVersion: String(FQ.manifest.apiVersion),
            version: String(iQ.e)
          })]
        }), vQ && (0, OQ.jsx)(RQ.e, {
          diagnostics: FQ.validation.errors,
          more: FQ.validation.moreErrors,
          t: DQ
        }), uQ.length > 0 && (0, OQ.jsxs)(OQ.Fragment, {
          children: [(0, OQ.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, OQ.jsx)(WQ.c, {
              name: "triangle-exclamation"
            }), DQ("shaderPack:offInStrict")]
          }), (0, OQ.jsx)(RQ.e, {
            diagnostics: uQ,
            t: DQ
          })]
        })]
      })
    }

    function UQ(QQ) {
      let {
        setApplySettingsCallback: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, kQ.y)(), [qQ, DQ] = (0, LQ.useState)(null), [mQ, uQ] = (0, LQ.useState)(null), [pQ, CQ] = (0, LQ.useState)(null), [SQ] = (0, LQ.useState)(bQ.g), [iQ, WQ] = (0, LQ.useState)(!0), [RQ, sQ] = (0, LQ.useState)(!1), {
        loading: rQ,
        error: UQ,
        setError: TQ,
        onFiles: KQ
      } = (0, GQ.g)((async QQ => {
        const FQ = await (0, HQ.loadPageShaderPackCompiler)();
        if (!FQ) return void TQ(wQ("shaderPack:compilerUnavailable"));
        uQ(FQ);
        const LQ = (0, YQ.toStoredShaderPack)(QQ, await (0, xQ.f)(FQ, QQ.files));
        await (0, YQ.saveShaderPack)(LQ, FQ) ? (DQ(LQ), zQ(qQ, LQ, FQ)) : TQ(wQ("shaderPack:saveFailed"))
      }));

      function zQ(QQ, wQ, LQ) {
        (function(QQ, FQ, wQ, LQ) {
          return wQ || cQ(QQ, LQ) || cQ(FQ, LQ)
        })(QQ, wQ, (0, YQ.isShaderPackChangePending)(), LQ) && ((0, YQ.markShaderPackChangePending)(), FQ((() => eQ.h)))
      }
      return (0, LQ.useEffect)((() => {
        let QQ = !1;
        return async function() {
          const FQ = (0, vQ.hasUsableWebGpuAdapter)(),
            wQ = await (0, AQ.f)();
          if (QQ) return;
          DQ(wQ), sQ(!0), WQ(!1);
          const LQ = null !== wQ ? (0, HQ.loadPageShaderPackCompiler)() : null,
            qQ = await FQ;
          if (QQ) return;
          CQ(qQ);
          const oQ = await LQ;
          if (!QQ && (uQ(oQ), null !== wQ && qQ && null !== oQ && (0, YQ.shaderPackNeedsCheck)(wQ, oQ))) {
            const FQ = await (0, xQ.e)(wQ, oQ);
            QQ || DQ((QQ => QQ === wQ ? FQ : QQ))
          }
        }().catch((FQ => {
          console.error("Failed to load the stored shader pack", FQ), QQ || TQ(wQ("shaderPack:unexpectedError"))
        })).finally((() => {
          QQ || (WQ(!1), sQ(!1))
        })), () => {
          QQ = !0
        }
      }), []), (0, OQ.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, OQ.jsx)("div", {
          className: "ShaderPackIntro",
          children: wQ("shaderPack:intro")
        }), (0, OQ.jsx)(NQ, {
          to: tQ.W,
          className: "ShaderPackBrowseLink",
          children: (0, OQ.jsx)(oQ.m, {
            className: "ShaderPackBrowseButton",
            children: wQ("shaderPackListing:browse")
          })
        }), !1 === pQ && (0, OQ.jsx)("div", {
          className: "SettingsBoxWarning",
          children: wQ(SQ ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== UQ && (0, OQ.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [wQ("general:error"), ": ", UQ]
        }), qQ && (0, OQ.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, OQ.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, OQ.jsxs)("div", {
              children: [(0, OQ.jsx)("div", {
                className: "ShaderPackName",
                children: qQ.manifest.name
              }), qQ.manifest.author && (0, OQ.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, MQ.k)(wQ, "shaderPack:byAuthor", {
                  author: qQ.manifest.author
                })
              }), qQ.manifest.description && (0, OQ.jsx)("div", {
                className: "ShaderPackDescription",
                children: qQ.manifest.description
              }), qQ.listing && (0, OQ.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, OQ.jsx)(NQ, {
                  to: (0, tQ.Z)(qQ.listing.packId),
                  className: "ShaderPackListingLink",
                  children: wQ("shaderPackListing:openPackPage")
                })
              })]
            }), (0, OQ.jsx)(oQ.G, {
              disabled: iQ || rQ,
              onClick: async function() {
                WQ(!0), TQ(null), await (0, YQ.removeShaderPack)(), DQ(null), WQ(!1), zQ(qQ, null, mQ)
              },
              children: wQ("shaderPack:removePack")
            })]
          }), (0, OQ.jsx)(IQ, {
            stored: qQ,
            checking: RQ,
            webGpuUsable: pQ,
            changePending: (0, YQ.isShaderPackChangePending)(),
            compiler: mQ,
            t: wQ
          })]
        }), (0, OQ.jsx)(GQ.c, {
          busy: iQ || rQ || RQ,
          disabled: iQ || rQ || RQ || !0 !== pQ,
          onFiles: KQ
        })]
      })
    }

    function NQ(QQ) {
      let {
        to: FQ,
        className: wQ,
        children: LQ
      } = QQ;
      const {
        gameState: oQ
      } = (0, mQ.l)(["gameState"]), {
        pathname: kQ,
        search: vQ
      } = (0, qQ.r)(), HQ = "landingPage" !== oQ && "studio" !== oQ;
      return (0, OQ.jsx)(DQ.LinkPreserveSearch, {
        to: FQ,
        className: wQ,
        target: HQ ? "_blank" : void 0,
        onClick: () => {
          HQ || ((0, tQ.H)(`${kQ}${vQ}`), (0, uQ.f)())
        },
        children: LQ
      })
    }
  },
  6371: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => xQ,
      C: () => eQ,
      G: () => OQ,
      H: () => uQ,
      K: () => rQ,
      N: () => AQ,
      R: () => jQ,
      U: () => zQ,
      W: () => DQ,
      Y: () => lQ,
      Z: () => vQ,
      bb: () => kQ,
      d: () => MQ,
      fb: () => TQ,
      g: () => WQ,
      gb: () => KQ,
      j: () => tQ,
      jb: () => GQ,
      l: () => bQ,
      mb: () => sQ,
      p: () => HQ,
      q: () => IQ,
      u: () => YQ,
      x: () => UQ,
      z: () => aQ
    });
    var LQ = wQ(6374),
      qQ = wQ(160),
      oQ = wQ(4409);
    const DQ = "/shader-packs",
      kQ = `${DQ}/publish`;

    function vQ(QQ) {
      return `${DQ}/${encodeURIComponent(QQ)}`
    }
    let mQ = null;

    function uQ(QQ) {
      mQ = QQ
    }

    function HQ() {
      return mQ
    }

    function bQ() {
      mQ = null
    }

    function YQ(QQ) {
      return QQ.playerHasRank("developer") || QQ.playerHasRank("admin")
    }
    const xQ = ["terrain", "water", "models", "sunShadows", "strict"],
      AQ = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function tQ(QQ, FQ) {
      return QQ.withFeatures.includes(FQ) ? "with" : QQ.withoutFeatures.includes(FQ) ? "without" : null
    }

    function eQ(QQ) {
      return null === QQ ? "with" : "with" === QQ ? "without" : null
    }

    function MQ(QQ) {
      return "with" === QQ ? "only" : null === QQ ? "include" : void 0
    }

    function GQ(QQ, FQ) {
      const wQ = tQ(QQ, FQ),
        LQ = QQ => QQ.filter((QQ => QQ !== FQ));
      return {
        withFeatures: null === wQ ? [...QQ.withFeatures, FQ] : LQ(QQ.withFeatures),
        withoutFeatures: "with" === wQ ? [...QQ.withoutFeatures, FQ] : LQ(QQ.withoutFeatures)
      }
    }
    const pQ = "section",
      cQ = "sort",
      CQ = "filters",
      SQ = "q",
      iQ = "banned",
      WQ = "popular",
      RQ = "strict";

    function OQ(QQ) {
      var FQ, wQ, qQ;
      const DQ = QQ.get(pQ),
        kQ = (null !== (FQ = QQ.get(CQ)) && void 0 !== FQ ? FQ : RQ).split(","),
        vQ = QQ.get(iQ);
      return {
        section: "favourites" === DQ || "mine" === DQ ? DQ : "explore",
        sort: null !== (wQ = LQ.x.find((FQ => FQ === QQ.get(cQ)))) && void 0 !== wQ ? wQ : WQ,
        withFeatures: xQ.filter((QQ => kQ.includes(QQ) && !kQ.includes(`-${QQ}`))),
        withoutFeatures: xQ.filter((QQ => kQ.includes(`-${QQ}`))),
        searchQuery: (null === (qQ = QQ.get(SQ)) || void 0 === qQ ? void 0 : qQ.slice(0, LQ.I)) || null,
        pageNumber: (0, oQ.d)(QQ.get(oQ.b)),
        banned: "only" === vQ ? "with" : "include" === vQ ? null : "without"
      }
    }

    function sQ(QQ, FQ) {
      var wQ;
      const LQ = NQ(FQ);
      (0, oQ.g)(QQ, pQ, "explore" === FQ.section ? null : FQ.section), (0, oQ.g)(QQ, cQ, FQ.sort === WQ ? null : FQ.sort), (0, oQ.g)(QQ, CQ, LQ === RQ ? null : LQ), (0, oQ.g)(QQ, SQ, FQ.searchQuery), (0, oQ.g)(QQ, iQ, null !== (wQ = MQ(FQ.banned)) && void 0 !== wQ ? wQ : null), (0, oQ.i)(QQ, FQ.pageNumber)
    }

    function rQ(QQ) {
      const FQ = new URLSearchParams;
      return sQ(FQ, {
        section: "explore",
        sort: WQ,
        withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${DQ}?${FQ.toString()}`
    }

    function IQ(QQ) {
      return NQ(QQ) === RQ
    }

    function UQ(QQ) {
      return null !== QQ.searchQuery || "with" === QQ.banned || NQ(QQ) !== RQ
    }

    function NQ(QQ) {
      return xQ.flatMap((FQ => {
        const wQ = tQ(QQ, FQ);
        return "with" === wQ ? [FQ] : "without" === wQ ? [`-${FQ}`] : []
      })).join(",")
    }
    const TQ = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      KQ = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function zQ(QQ) {
      return Math.round(100 * Math.max(0, 1 - 1 / QQ))
    }

    function lQ(QQ, FQ, wQ, qQ) {
      const oQ = [];
      QQ.isBanned && oQ.push({
        tone: "warning",
        text: qQ("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: DQ
      } = QQ;
      if (null === QQ.brokenError || DQ && !DQ.error || oQ.push({
          tone: "warning",
          text: qQ("shaderPackListing:ownerBroken"),
          detail: QQ.brokenError
        }), null !== DQ && void 0 !== DQ && DQ.error) oQ.push({
        tone: "warning",
        text: qQ(FQ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, LQ.l)(DQ.error) ? null : DQ.error
      });
      else if (DQ) {
        const QQ = null === DQ.renderNotBefore ? 0 : DQ.renderNotBefore - wQ,
          LQ = String(Math.ceil(QQ / 6e4)),
          kQ = qQ(FQ ? QQ > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : QQ > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: LQ
          });
        oQ.push({
          tone: "info",
          text: kQ,
          detail: null
        })
      }
      return QQ.listed || oQ.push({
        tone: "info",
        text: qQ("shaderPackListing:ownerUnlisted"),
        detail: null
      }), oQ
    }

    function jQ(QQ) {
      return Math.max(1, Math.round(QQ / 1024))
    }

    function aQ(QQ, FQ, wQ) {
      return QQ instanceof qQ.d && QQ.errorMessageForUser ? QQ.errorMessageForUser : FQ(wQ)
    }
  },
  6374: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      B: () => DQ,
      E: () => LQ,
      H: () => bQ,
      I: () => uQ,
      J: () => GQ,
      L: () => HQ,
      O: () => mQ,
      c: () => YQ,
      e: () => AQ,
      h: () => xQ,
      l: () => MQ,
      n: () => cQ,
      p: () => vQ,
      t: () => qQ,
      u: () => pQ,
      x: () => oQ,
      z: () => kQ
    });
    const LQ = ["forest", "desert", "water", "night", "cave"];
    const qQ = {
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
      oQ = ["popular", "updated", "newest"],
      DQ = 3,
      kQ = 32,
      vQ = 300;

    function mQ(QQ, FQ) {
      return QQ.slice(0, FQ).replace(/[\uD800-\uDBFF]$/, "")
    }
    const uQ = 64,
      HQ = 512,
      bQ = 18e5;
    const YQ = "Bloxdhub",
      xQ = "https://bloxdhub.com/shaders";

    function AQ(QQ) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(QQ)}`
    }
    const tQ = "Screenshot generation failed.",
      eQ = "Its screenshots couldn't be generated:";

    function MQ(QQ) {
      var FQ;
      return QQ === tQ || null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsWith(eQ)) && void 0 !== FQ && FQ
    }

    function GQ(QQ, FQ) {
      return `shaderPacks/${QQ}/${FQ}.json`
    }

    function pQ(QQ, FQ, wQ, LQ) {
      return null === FQ.renderId ? cQ(QQ, FQ.baselineVersion, wQ, LQ) : `${QQ}/${function(QQ,FQ,wQ,LQ){return`shaderPacks/${QQ}/${FQ}/${wQ}-${LQ}.webp`}(FQ.packId,FQ.renderId,wQ,LQ)}`
    }

    function cQ(QQ, FQ, wQ, LQ) {
      return `${QQ}/${function(QQ,FQ,wQ){return`shaderPacks/baseline/${QQ}/${FQ}-${wQ}.webp`}(FQ,wQ,LQ)}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);