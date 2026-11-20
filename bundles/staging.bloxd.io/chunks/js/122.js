export const id = 122;
export const ids = [122];
export const modules = {
  40693: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      ShaderPackCategory: () => HT
    });
    var lT = cT(71),
      MT = cT(1535),
      KT = cT(1470),
      OT = cT(1530),
      yT = cT(1195),
      fT = cT(118),
      xT = cT(31),
      IT = cT(1654),
      AT = cT(6607),
      CT = cT(307),
      jT = cT(6641),
      vT = cT(6636),
      tT = cT(6647),
      hT = cT(6547),
      NT = cT(4945),
      QT = cT(6591),
      ST = cT(6604),
      DT = cT(3390);

    function aT(TT, kT) {
      const cT = (0, jT.storedPackOutcome)(TT, kT);
      return "none" !== cT.kind || "noCompiler" === cT.reason
    }
    var FT = cT(1046),
      rT = cT.n(FT),
      PT = cT(6597),
      wT = cT(1061),
      mT = cT(6586),
      bT = cT(1099);
    const zT = {
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

    function JT(TT, kT) {
      return "failedRecheck" === TT && kT.listing ? "shaderPack:statusFailedRecheckListed" : zT[TT]
    }

    function oT(TT) {
      let {
        stored: kT,
        checking: cT,
        webGpuUsable: lT,
        changePending: MT,
        compiler: KT,
        t: OT
      } = TT;
      const yT = function(TT, kT, cT, lT, MT) {
          const KT = (0, jT.storedPackOutcome)(TT, MT);
          return "none" === KT.kind ? "noCompiler" === KT.reason ? kT ? "checking" : "noCompiler" : "otherApiVersion" === KT.reason ? "wrongApiVersion" : "failed" : (0, DT.g)() ? "harnessBuild" : "blocked" === KT.kind ? (0, jT.shaderPackNeedsCheck)(TT, MT) ? kT ? "checking" : !1 === cT ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === cT ? "offNoWebGpu" : lT ? "readyAfterReload" : "ready"
        }(kT, cT, lT, MT, KT),
        fT = "failed" === yT || "failedRecheck" === yT,
        xT = fT || "wrongApiVersion" === yT || "noCompiler" === yT,
        IT = "ready" === yT || "readyAfterReload" === yT ? kT.validation.offInStrict : [];
      return (0, bT.jsxs)(bT.Fragment, {
        children: [(0, bT.jsxs)("div", {
          className: rT()("ShaderPackStatus", {
            Ready: "ready" === yT,
            Failed: xT
          }),
          children: ["ready" === yT && (0, bT.jsx)(wT.e, {
            name: "circle-check"
          }), xT && (0, bT.jsx)(wT.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === yT ? (0, DT.d)() : OT(JT(yT, kT), {
            packVersion: String(kT.manifest.apiVersion),
            version: String(PT.c)
          })]
        }), fT && (0, bT.jsx)(mT.e, {
          diagnostics: kT.validation.errors,
          more: kT.validation.moreErrors,
          t: OT
        }), IT.length > 0 && (0, bT.jsxs)(bT.Fragment, {
          children: [(0, bT.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, bT.jsx)(wT.e, {
              name: "triangle-exclamation"
            }), OT("shaderPack:offInStrict")]
          }), (0, bT.jsx)(mT.e, {
            diagnostics: IT,
            t: OT
          })]
        })]
      })
    }

    function HT(TT) {
      let {
        setApplySettingsCallback: kT
      } = TT;
      const {
        t: cT
      } = (0, yT.B)(), [MT, OT] = (0, lT.useState)(null), [xT, IT] = (0, lT.useState)(null), [DT, FT] = (0, lT.useState)(null), [rT] = (0, lT.useState)(CT.g), [PT, wT] = (0, lT.useState)(!0), [mT, zT] = (0, lT.useState)(!1), {
        loading: JT,
        error: HT,
        setError: GT,
        onFiles: VT
      } = (0, ST.f)((async TT => {
        const kT = await (0, AT.loadPageShaderPackCompiler)();
        if (!kT) return void GT(cT("shaderPack:compilerUnavailable"));
        IT(kT);
        const lT = (0, jT.toStoredShaderPack)(TT, await (0, vT.h)(kT, TT.files));
        await (0, jT.saveShaderPack)(lT, kT) ? (OT(lT), ET(MT, lT, kT)) : GT(cT("shaderPack:saveFailed"))
      }));

      function ET(TT, cT, lT) {
        (function(TT, kT, cT, lT) {
          return cT || aT(TT, lT) || aT(kT, lT)
        })(TT, cT, (0, jT.isShaderPackChangePending)(), lT) && ((0, jT.markShaderPackChangePending)(), kT((() => NT.m)))
      }
      return (0, lT.useEffect)((() => {
        let TT = !1;
        return async function() {
          const kT = (0, fT.hasUsableWebGpuAdapter)(),
            cT = await (0, tT.e)();
          if (TT) return;
          OT(cT), zT(!0), wT(!1);
          const lT = null !== cT ? (0, AT.loadPageShaderPackCompiler)() : null,
            MT = await kT;
          if (TT) return;
          FT(MT);
          const KT = await lT;
          if (!TT && (IT(KT), null !== cT && MT && null !== KT && (0, jT.shaderPackNeedsCheck)(cT, KT))) {
            const kT = await (0, vT.e)(cT, KT);
            TT || OT((TT => TT === cT ? kT : TT))
          }
        }().catch((kT => {
          console.error("Failed to load the stored shader pack", kT), TT || GT(cT("shaderPack:unexpectedError"))
        })).finally((() => {
          TT || (wT(!1), zT(!1))
        })), () => {
          TT = !0
        }
      }), []), (0, bT.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, bT.jsx)("div", {
          className: "ShaderPackIntro",
          children: cT("shaderPack:intro")
        }), (0, bT.jsx)(eT, {
          to: hT.Q,
          className: "ShaderPackBrowseLink",
          children: (0, bT.jsx)(KT.m, {
            className: "ShaderPackBrowseButton",
            children: cT("shaderPackListing:browse")
          })
        }), !1 === DT && (0, bT.jsx)("div", {
          className: "SettingsBoxWarning",
          children: cT(rT ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== HT && (0, bT.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [cT("general:error"), ": ", HT]
        }), MT && (0, bT.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, bT.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, bT.jsxs)("div", {
              children: [(0, bT.jsx)("div", {
                className: "ShaderPackName",
                children: MT.manifest.name
              }), MT.manifest.author && (0, bT.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, QT.g)(cT, "shaderPack:byAuthor", {
                  author: MT.manifest.author
                })
              }), MT.manifest.description && (0, bT.jsx)("div", {
                className: "ShaderPackDescription",
                children: MT.manifest.description
              }), MT.listing && (0, bT.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, bT.jsx)(eT, {
                  to: (0, hT.V)(MT.listing.packId),
                  className: "ShaderPackListingLink",
                  children: cT("shaderPackListing:openPackPage")
                })
              })]
            }), (0, bT.jsx)(KT.L, {
              disabled: PT || JT,
              onClick: async function() {
                wT(!0), GT(null), await (0, jT.removeShaderPack)(), OT(null), wT(!1), ET(MT, null, xT)
              },
              children: cT("shaderPack:removePack")
            })]
          }), (0, bT.jsx)(oT, {
            stored: MT,
            checking: mT,
            webGpuUsable: DT,
            changePending: (0, jT.isShaderPackChangePending)(),
            compiler: xT,
            t: cT
          })]
        }), (0, bT.jsx)(ST.c, {
          busy: PT || JT || mT,
          disabled: PT || JT || mT || !0 !== DT,
          onFiles: VT
        })]
      })
    }

    function eT(TT) {
      let {
        to: kT,
        className: cT,
        children: lT
      } = TT;
      const {
        gameState: KT
      } = (0, xT.n)(["gameState"]), {
        pathname: yT,
        search: fT
      } = (0, MT.s)(), AT = "landingPage" !== KT && "studio" !== KT;
      return (0, bT.jsx)(OT.LinkPreserveSearch, {
        to: kT,
        className: cT,
        target: AT ? "_blank" : void 0,
        onClick: () => {
          AT || ((0, hT.A)(`${yT}${fT}`), (0, IT.f)())
        },
        children: lT
      })
    }
  },
  6547: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => IT,
      D: () => JT,
      G: () => tT,
      K: () => uT,
      O: () => ET,
      Q: () => OT,
      R: () => ZT,
      V: () => fT,
      Y: () => yT,
      ab: () => GT,
      b: () => QT,
      db: () => VT,
      f: () => wT,
      hb: () => ST,
      j: () => hT,
      k: () => CT,
      kb: () => zT,
      l: () => AT,
      n: () => oT,
      r: () => jT,
      t: () => HT,
      v: () => XT,
      w: () => vT,
      y: () => NT,
      z: () => bT
    });
    var lT = cT(6550),
      MT = cT(184),
      KT = cT(4543);
    const OT = "/shader-packs",
      yT = `${OT}/publish`;

    function fT(TT) {
      return `${OT}/${encodeURIComponent(TT)}`
    }
    let xT = null;

    function IT(TT) {
      xT = TT
    }

    function AT() {
      return xT
    }

    function CT() {
      xT = null
    }

    function jT(TT) {
      return TT.playerHasRank("developer") || TT.playerHasRank("admin")
    }
    const vT = ["terrain", "water", "models", "sunShadows", "strict"],
      tT = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function hT(TT, kT) {
      return TT.withFeatures.includes(kT) ? "with" : TT.withoutFeatures.includes(kT) ? "without" : null
    }

    function NT(TT) {
      return null === TT ? "with" : "with" === TT ? "without" : null
    }

    function QT(TT) {
      return "with" === TT ? "only" : null === TT ? "include" : void 0
    }

    function ST(TT, kT) {
      const cT = hT(TT, kT),
        lT = TT => TT.filter((TT => TT !== kT));
      return {
        withFeatures: null === cT ? [...TT.withFeatures, kT] : lT(TT.withFeatures),
        withoutFeatures: "with" === cT ? [...TT.withoutFeatures, kT] : lT(TT.withoutFeatures)
      }
    }
    const DT = "section",
      aT = "sort",
      FT = "filters",
      rT = "q",
      PT = "banned",
      wT = "popular",
      mT = "strict";

    function bT(TT) {
      var kT, cT, MT;
      const OT = TT.get(DT),
        yT = (null !== (kT = TT.get(FT)) && void 0 !== kT ? kT : mT).split(","),
        fT = TT.get(PT);
      return {
        section: "favourites" === OT || "mine" === OT ? OT : "explore",
        sort: null !== (cT = lT.r.find((kT => kT === TT.get(aT)))) && void 0 !== cT ? cT : wT,
        withFeatures: vT.filter((TT => yT.includes(TT) && !yT.includes(`-${TT}`))),
        withoutFeatures: vT.filter((TT => yT.includes(`-${TT}`))),
        searchQuery: (null === (MT = TT.get(rT)) || void 0 === MT ? void 0 : MT.slice(0, lT.C)) || null,
        pageNumber: (0, KT.f)(TT.get(KT.d)),
        banned: "only" === fT ? "with" : "include" === fT ? null : "without"
      }
    }

    function zT(TT, kT) {
      var cT;
      const lT = eT(kT);
      (0, KT.g)(TT, DT, "explore" === kT.section ? null : kT.section), (0, KT.g)(TT, aT, kT.sort === wT ? null : kT.sort), (0, KT.g)(TT, FT, lT === mT ? null : lT), (0, KT.g)(TT, rT, kT.searchQuery), (0, KT.g)(TT, PT, null !== (cT = QT(kT.banned)) && void 0 !== cT ? cT : null), (0, KT.k)(TT, kT.pageNumber)
    }

    function JT(TT) {
      const kT = new URLSearchParams;
      return zT(kT, {
        section: "explore",
        sort: wT,
        withFeatures: "strict" === TT ? [TT] : [TT, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${OT}?${kT.toString()}`
    }

    function oT(TT) {
      return eT(TT) === mT
    }

    function HT(TT) {
      return null !== TT.searchQuery || "with" === TT.banned || eT(TT) !== mT
    }

    function eT(TT) {
      return vT.flatMap((kT => {
        const cT = hT(TT, kT);
        return "with" === cT ? [kT] : "without" === cT ? [`-${kT}`] : []
      })).join(",")
    }
    const GT = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      VT = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function ET(TT) {
      return Math.round(100 * Math.max(0, 1 - 1 / TT))
    }

    function ZT(TT, kT, cT, MT) {
      const KT = [];
      TT.isBanned && KT.push({
        tone: "warning",
        text: MT("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: OT
      } = TT;
      if (null === TT.brokenError || OT && !OT.error || KT.push({
          tone: "warning",
          text: MT("shaderPackListing:ownerBroken"),
          detail: TT.brokenError
        }), null !== OT && void 0 !== OT && OT.error) KT.push({
        tone: "warning",
        text: MT(kT ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, lT.f)(OT.error) ? null : OT.error
      });
      else if (OT) {
        const TT = null === OT.renderNotBefore ? 0 : OT.renderNotBefore - cT,
          lT = String(Math.ceil(TT / 6e4)),
          yT = MT(kT ? TT > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : TT > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: lT
          });
        KT.push({
          tone: "info",
          text: yT,
          detail: null
        })
      }
      return TT.listed || KT.push({
        tone: "info",
        text: MT("shaderPackListing:ownerUnlisted"),
        detail: null
      }), KT
    }

    function uT(TT) {
      return Math.max(1, Math.round(TT / 1024))
    }

    function XT(TT, kT, cT) {
      return TT instanceof MT.c && TT.errorMessageForUser ? TT.errorMessageForUser : kT(cT)
    }
  },
  6550: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => CT,
      C: () => IT,
      D: () => ST,
      H: () => AT,
      L: () => xT,
      b: () => jT,
      c: () => tT,
      e: () => vT,
      f: () => QT,
      i: () => aT,
      m: () => fT,
      o: () => MT,
      q: () => DT,
      r: () => KT,
      v: () => yT,
      w: () => OT,
      z: () => lT
    });
    const lT = ["forest", "desert", "water", "night", "cave"];
    const MT = {
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
      KT = ["popular", "updated", "newest"],
      OT = 3,
      yT = 32,
      fT = 300;

    function xT(TT, kT) {
      return TT.slice(0, kT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const IT = 64,
      AT = 512,
      CT = 18e5;
    const jT = "Bloxdhub",
      vT = "https://bloxdhub.com/shaders";

    function tT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const hT = "Screenshot generation failed.",
      NT = "Its screenshots couldn't be generated:";

    function QT(TT) {
      var kT;
      return TT === hT || null !== (kT = null === TT || void 0 === TT ? void 0 : TT.startsWith(NT)) && void 0 !== kT && kT
    }

    function ST(TT, kT) {
      return `shaderPacks/${TT}/${kT}.json`
    }

    function DT(TT, kT, cT, lT) {
      return null === kT.renderId ? aT(TT, kT.baselineVersion, cT, lT) : `${TT}/${function(TT,kT,cT,lT){return`shaderPacks/${TT}/${kT}/${cT}-${lT}.webp`}(kT.packId,kT.renderId,cT,lT)}`
    }

    function aT(TT, kT, cT, lT) {
      return `${TT}/${function(TT,kT,cT){return`shaderPacks/baseline/${TT}/${kT}-${cT}.webp`}(kT,cT,lT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);