export const id = 133;
export const ids = [133];
export const modules = {
  41284: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      ShaderPackCategory: () => AQ
    });
    var wQ = XQ(61),
      qQ = XQ(1581),
      TQ = XQ(1507),
      zQ = XQ(1567),
      sQ = XQ(1226),
      FQ = XQ(105),
      PQ = XQ(26),
      gQ = XQ(1698),
      JQ = XQ(6984),
      rQ = XQ(367),
      IQ = XQ(7024),
      jQ = XQ(7018),
      BQ = XQ(7026),
      yQ = XQ(6946),
      VQ = XQ(5349),
      DQ = XQ(5386),
      pQ = XQ(6979),
      GQ = XQ(3723);

    function UQ(QQ, WQ) {
      const XQ = (0, IQ.storedPackOutcome)(QQ, WQ);
      return "none" !== XQ.kind || "noCompiler" === XQ.reason
    }
    var bQ = XQ(1081),
      vQ = XQ.n(bQ),
      dQ = XQ(5394),
      HQ = XQ(1094),
      aQ = XQ(6972),
      lQ = XQ(1145);
    const hQ = {
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

    function iQ(QQ, WQ) {
      return "failedRecheck" === QQ && WQ.listing ? "shaderPack:statusFailedRecheckListed" : hQ[QQ]
    }

    function cQ(QQ) {
      let {
        stored: WQ,
        checking: XQ,
        webGpuUsable: wQ,
        changePending: qQ,
        compiler: TQ,
        t: zQ
      } = QQ;
      const sQ = function(QQ, WQ, XQ, wQ, qQ) {
          const TQ = (0, IQ.storedPackOutcome)(QQ, qQ);
          return "none" === TQ.kind ? "noCompiler" === TQ.reason ? WQ ? "checking" : "noCompiler" : "otherApiVersion" === TQ.reason ? "wrongApiVersion" : "failed" : (0, GQ.f)() ? "harnessBuild" : "blocked" === TQ.kind ? (0, IQ.shaderPackNeedsCheck)(QQ, qQ) ? WQ ? "checking" : !1 === XQ ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === XQ ? "offNoWebGpu" : wQ ? "readyAfterReload" : "ready"
        }(WQ, XQ, wQ, qQ, TQ),
        FQ = "failed" === sQ || "failedRecheck" === sQ,
        PQ = FQ || "wrongApiVersion" === sQ || "noCompiler" === sQ,
        gQ = "ready" === sQ || "readyAfterReload" === sQ ? WQ.validation.offInStrict : [];
      return (0, lQ.jsxs)(lQ.Fragment, {
        children: [(0, lQ.jsxs)("div", {
          className: vQ()("ShaderPackStatus", {
            Ready: "ready" === sQ,
            Failed: PQ
          }),
          children: ["ready" === sQ && (0, lQ.jsx)(HQ.d, {
            name: "circle-check"
          }), PQ && (0, lQ.jsx)(HQ.d, {
            name: "triangle-exclamation"
          }), "harnessBuild" === sQ ? (0, GQ.c)() : zQ(iQ(sQ, WQ), {
            packVersion: String(WQ.manifest.apiVersion),
            version: String(dQ.b)
          })]
        }), FQ && (0, lQ.jsx)(aQ.e, {
          diagnostics: WQ.validation.errors,
          more: WQ.validation.moreErrors,
          t: zQ
        }), gQ.length > 0 && (0, lQ.jsxs)(lQ.Fragment, {
          children: [(0, lQ.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, lQ.jsx)(HQ.d, {
              name: "triangle-exclamation"
            }), zQ("shaderPack:offInStrict")]
          }), (0, lQ.jsx)(aQ.e, {
            diagnostics: gQ,
            t: zQ
          })]
        })]
      })
    }

    function AQ(QQ) {
      let {
        setApplySettingsCallback: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, sQ.C)(), [qQ, zQ] = (0, wQ.useState)(null), [PQ, gQ] = (0, wQ.useState)(null), [GQ, bQ] = (0, wQ.useState)(null), [vQ] = (0, wQ.useState)(rQ.j), [dQ, HQ] = (0, wQ.useState)(!0), [aQ, hQ] = (0, wQ.useState)(!1), {
        loading: iQ,
        error: AQ,
        setError: EQ,
        onFiles: CQ
      } = (0, pQ.d)((async QQ => {
        const WQ = await (0, JQ.loadPageShaderPackCompiler)();
        if (!WQ) return void EQ(XQ("shaderPack:compilerUnavailable"));
        gQ(WQ);
        const wQ = (0, IQ.toStoredShaderPack)(QQ, await (0, jQ.g)(WQ, QQ.files));
        await (0, IQ.saveShaderPack)(wQ, WQ) ? (zQ(wQ), uQ(qQ, wQ, WQ)) : EQ(XQ("shaderPack:saveFailed"))
      }));

      function uQ(QQ, XQ, wQ) {
        (function(QQ, WQ, XQ, wQ) {
          return XQ || UQ(QQ, wQ) || UQ(WQ, wQ)
        })(QQ, XQ, (0, IQ.isShaderPackChangePending)(), wQ) && ((0, IQ.markShaderPackChangePending)(), WQ((() => VQ.i)))
      }
      return (0, wQ.useEffect)((() => {
        let QQ = !1;
        return async function() {
          const WQ = (0, FQ.hasUsableWebGpuAdapter)(),
            XQ = await (0, BQ.f)();
          if (QQ) return;
          zQ(XQ), hQ(!0), HQ(!1);
          const wQ = null !== XQ ? (0, JQ.loadPageShaderPackCompiler)() : null,
            qQ = await WQ;
          if (QQ) return;
          bQ(qQ);
          const TQ = await wQ;
          if (!QQ && (gQ(TQ), null !== XQ && qQ && null !== TQ && (0, IQ.shaderPackNeedsCheck)(XQ, TQ))) {
            const WQ = await (0, jQ.e)(XQ, TQ);
            QQ || zQ((QQ => QQ === XQ ? WQ : QQ))
          }
        }().catch((WQ => {
          console.error("Failed to load the stored shader pack", WQ), QQ || EQ(XQ("shaderPack:unexpectedError"))
        })).finally((() => {
          QQ || (HQ(!1), hQ(!1))
        })), () => {
          QQ = !0
        }
      }), []), (0, lQ.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, lQ.jsx)("div", {
          className: "ShaderPackIntro",
          children: XQ("shaderPack:intro")
        }), (0, lQ.jsx)(RQ, {
          to: yQ.R,
          className: "ShaderPackBrowseLink",
          children: (0, lQ.jsx)(TQ.s, {
            className: "ShaderPackBrowseButton",
            children: XQ("shaderPackListing:browse")
          })
        }), !1 === GQ && (0, lQ.jsx)("div", {
          className: "SettingsBoxWarning",
          children: XQ(vQ ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== AQ && (0, lQ.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [XQ("general:error"), ": ", AQ]
        }), qQ && (0, lQ.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, lQ.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, lQ.jsxs)("div", {
              children: [(0, lQ.jsx)("div", {
                className: "ShaderPackName",
                children: qQ.manifest.name
              }), qQ.manifest.author && (0, lQ.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, DQ.l)(XQ, "shaderPack:byAuthor", {
                  author: qQ.manifest.author
                })
              }), qQ.manifest.description && (0, lQ.jsx)("div", {
                className: "ShaderPackDescription",
                children: qQ.manifest.description
              }), qQ.listing && (0, lQ.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, lQ.jsx)(RQ, {
                  to: (0, yQ.V)(qQ.listing.packId),
                  className: "ShaderPackListingLink",
                  children: XQ("shaderPackListing:openPackPage")
                })
              })]
            }), (0, lQ.jsx)(TQ.Q, {
              disabled: dQ || iQ,
              onClick: async function() {
                HQ(!0), EQ(null), await (0, IQ.removeShaderPack)(), zQ(null), HQ(!1), uQ(qQ, null, PQ)
              },
              children: XQ("shaderPack:removePack")
            })]
          }), (0, lQ.jsx)(cQ, {
            stored: qQ,
            checking: aQ,
            webGpuUsable: GQ,
            changePending: (0, IQ.isShaderPackChangePending)(),
            compiler: PQ,
            t: XQ
          })]
        }), (0, lQ.jsx)(pQ.b, {
          busy: dQ || iQ || aQ,
          disabled: dQ || iQ || aQ || !0 !== GQ,
          onFiles: CQ
        })]
      })
    }

    function RQ(QQ) {
      let {
        to: WQ,
        className: XQ,
        children: wQ
      } = QQ;
      const {
        gameState: TQ
      } = (0, PQ.n)(["gameState"]), {
        pathname: sQ,
        search: FQ
      } = (0, qQ.w)(), JQ = "landingPage" !== TQ && "studio" !== TQ;
      return (0, lQ.jsx)(zQ.LinkPreserveSearch, {
        to: WQ,
        className: XQ,
        target: JQ ? "_blank" : void 0,
        onClick: () => {
          JQ || ((0, yQ.E)(`${sQ}${FQ}`), (0, gQ.e)())
        },
        children: wQ
      })
    }
  },
  6946: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => EQ,
      A: () => jQ,
      B: () => VQ,
      D: () => lQ,
      E: () => gQ,
      H: () => iQ,
      I: () => BQ,
      L: () => kQ,
      O: () => uQ,
      R: () => zQ,
      S: () => LQ,
      V: () => FQ,
      Z: () => sQ,
      cb: () => CQ,
      d: () => DQ,
      eb: () => pQ,
      f: () => HQ,
      hb: () => hQ,
      j: () => yQ,
      l: () => rQ,
      m: () => JQ,
      q: () => cQ,
      s: () => IQ,
      v: () => AQ,
      y: () => fQ
    });
    var wQ = XQ(6952),
      qQ = XQ(193),
      TQ = XQ(4879);
    const zQ = "/shader-packs",
      sQ = `${zQ}/publish`;

    function FQ(QQ) {
      return `${zQ}/${encodeURIComponent(QQ)}`
    }
    let PQ = null;

    function gQ(QQ) {
      PQ = QQ
    }

    function JQ() {
      return PQ
    }

    function rQ() {
      PQ = null
    }

    function IQ(QQ) {
      return QQ.playerHasRank("developer") || QQ.playerHasRank("admin")
    }
    const jQ = ["terrain", "water", "models", "sunShadows", "strict"],
      BQ = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function yQ(QQ, WQ) {
      return QQ.withFeatures.includes(WQ) ? "with" : QQ.withoutFeatures.includes(WQ) ? "without" : null
    }

    function VQ(QQ) {
      return null === QQ ? "with" : "with" === QQ ? "without" : null
    }

    function DQ(QQ) {
      return "with" === QQ ? "only" : null === QQ ? "include" : void 0
    }

    function pQ(QQ, WQ) {
      const XQ = yQ(QQ, WQ),
        wQ = QQ => QQ.filter((QQ => QQ !== WQ));
      return {
        withFeatures: null === XQ ? [...QQ.withFeatures, WQ] : wQ(QQ.withFeatures),
        withoutFeatures: "with" === XQ ? [...QQ.withoutFeatures, WQ] : wQ(QQ.withoutFeatures)
      }
    }
    const GQ = "section",
      UQ = "sort",
      bQ = "filters",
      vQ = "q",
      dQ = "banned",
      HQ = "popular",
      aQ = "strict";

    function lQ(QQ) {
      var WQ, XQ, qQ;
      const zQ = QQ.get(GQ),
        sQ = (null !== (WQ = QQ.get(bQ)) && void 0 !== WQ ? WQ : aQ).split(","),
        FQ = QQ.get(dQ);
      return {
        section: "favourites" === zQ || "mine" === zQ ? zQ : "explore",
        sort: null !== (XQ = wQ.u.find((WQ => WQ === QQ.get(UQ)))) && void 0 !== XQ ? XQ : HQ,
        withFeatures: jQ.filter((QQ => sQ.includes(QQ) && !sQ.includes(`-${QQ}`))),
        withoutFeatures: jQ.filter((QQ => sQ.includes(`-${QQ}`))),
        searchQuery: (null === (qQ = QQ.get(vQ)) || void 0 === qQ ? void 0 : qQ.slice(0, wQ.G)) || null,
        pageNumber: (0, TQ.f)(QQ.get(TQ.e)),
        banned: "only" === FQ ? "with" : "include" === FQ ? null : "without"
      }
    }

    function hQ(QQ, WQ) {
      var XQ;
      const wQ = RQ(WQ);
      (0, TQ.i)(QQ, GQ, "explore" === WQ.section ? null : WQ.section), (0, TQ.i)(QQ, UQ, WQ.sort === HQ ? null : WQ.sort), (0, TQ.i)(QQ, bQ, wQ === aQ ? null : wQ), (0, TQ.i)(QQ, vQ, WQ.searchQuery), (0, TQ.i)(QQ, dQ, null !== (XQ = DQ(WQ.banned)) && void 0 !== XQ ? XQ : null), (0, TQ.m)(QQ, WQ.pageNumber)
    }

    function iQ(QQ) {
      const WQ = new URLSearchParams;
      return hQ(WQ, {
        section: "explore",
        sort: HQ,
        withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${zQ}?${WQ.toString()}`
    }

    function cQ(QQ) {
      return RQ(QQ) === aQ
    }

    function AQ(QQ) {
      return null !== QQ.searchQuery || "with" === QQ.banned || RQ(QQ) !== aQ
    }

    function RQ(QQ) {
      return jQ.flatMap((WQ => {
        const XQ = yQ(QQ, WQ);
        return "with" === XQ ? [WQ] : "without" === XQ ? [`-${WQ}`] : []
      })).join(",")
    }
    const EQ = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      CQ = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function uQ(QQ) {
      return Math.round(100 * Math.max(0, 1 - 1 / QQ))
    }

    function LQ(QQ, WQ, XQ, qQ) {
      const TQ = [];
      QQ.isBanned && TQ.push({
        tone: "warning",
        text: qQ("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: zQ
      } = QQ;
      if (null === QQ.brokenError || zQ && !zQ.error || TQ.push({
          tone: "warning",
          text: qQ("shaderPackListing:ownerBroken"),
          detail: QQ.brokenError
        }), null !== zQ && void 0 !== zQ && zQ.error) TQ.push({
        tone: "warning",
        text: qQ(WQ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, wQ.l)(zQ.error) ? null : zQ.error
      });
      else if (zQ) {
        const QQ = null === zQ.renderNotBefore ? 0 : zQ.renderNotBefore - XQ,
          wQ = String(Math.ceil(QQ / 6e4)),
          sQ = qQ(WQ ? QQ > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : QQ > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: wQ
          });
        TQ.push({
          tone: "info",
          text: sQ,
          detail: null
        })
      }
      return QQ.listed || TQ.push({
        tone: "info",
        text: qQ("shaderPackListing:ownerUnlisted"),
        detail: null
      }), TQ
    }

    function kQ(QQ) {
      return Math.max(1, Math.round(QQ / 1024))
    }

    function fQ(QQ, WQ, XQ) {
      return QQ instanceof qQ.b && QQ.errorMessageForUser ? QQ.errorMessageForUser : WQ(XQ)
    }
  },
  6952: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => wQ,
      E: () => rQ,
      G: () => gQ,
      J: () => GQ,
      K: () => JQ,
      M: () => PQ,
      c: () => jQ,
      f: () => yQ,
      i: () => BQ,
      j: () => IQ,
      l: () => pQ,
      m: () => bQ,
      o: () => FQ,
      p: () => qQ,
      r: () => UQ,
      u: () => TQ,
      w: () => sQ,
      z: () => zQ
    });
    const wQ = ["forest", "desert", "water", "night", "cave"];
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
      TQ = ["popular", "updated", "newest"],
      zQ = 3,
      sQ = 32,
      FQ = 300;

    function PQ(QQ, WQ) {
      return QQ.slice(0, WQ).replace(/[\uD800-\uDBFF]$/, "")
    }
    const gQ = 64,
      JQ = 512,
      rQ = 18e5;

    function IQ(QQ) {
      const WQ = QQ,
        XQ = null === WQ || void 0 === WQ ? void 0 : WQ.files;
      return "number" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.apiVersion) && "string" === typeof WQ.name && (null === WQ.author || "string" === typeof WQ.author) && (void 0 === WQ.keepCircleShadows || "boolean" === typeof WQ.keepCircleShadows) && "object" === typeof XQ && null !== XQ && Object.values(XQ).every((QQ => "string" === typeof QQ))
    }
    const jQ = "Bloxdhub",
      BQ = "https://bloxdhub.com/shaders";

    function yQ(QQ) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(QQ)}`
    }
    const VQ = "Screenshot generation failed.",
      DQ = "Its screenshots couldn't be generated:";

    function pQ(QQ) {
      var WQ;
      return QQ === VQ || null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsWith(DQ)) && void 0 !== WQ && WQ
    }

    function GQ(QQ, WQ) {
      return `shaderPacks/${QQ}/${WQ}.json`
    }

    function UQ(QQ, WQ, XQ, wQ) {
      return null === WQ.renderId ? bQ(QQ, WQ.baselineVersion, XQ, wQ) : `${QQ}/${function(QQ,WQ,XQ,wQ){return`shaderPacks/${QQ}/${WQ}/${XQ}-${wQ}.webp`}(WQ.packId,WQ.renderId,XQ,wQ)}`
    }

    function bQ(QQ, WQ, XQ, wQ) {
      return `${QQ}/${function(QQ,WQ,XQ){return`shaderPacks/baseline/${QQ}/${WQ}-${XQ}.webp`}(WQ,XQ,wQ)}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);