export const id = 131;
export const ids = [131];
export const modules = {
  41213: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      ShaderPackCategory: () => yT
    });
    var WT = mT(63),
      zT = mT(1641),
      MT = mT(1569),
      gT = mT(1633),
      nT = mT(1288),
      HT = mT(102),
      kT = mT(25),
      jT = mT(1752),
      lT = mT(6682),
      LT = mT(340),
      pT = mT(6719),
      BT = mT(6716),
      ZT = mT(6723),
      cT = mT(6623),
      vT = mT(5090),
      fT = mT(5136),
      qT = mT(6680),
      iT = mT(3559);

    function bT(TT, UT) {
      const mT = (0, pT.storedPackOutcome)(TT, UT);
      return "none" !== mT.kind || "noCompiler" === mT.reason
    }
    var OT = mT(1126),
      eT = mT.n(OT),
      YT = mT(5139),
      JT = mT(1135),
      xT = mT(6674),
      dT = mT(1188);
    const wT = {
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

    function tT(TT, UT) {
      return "failedRecheck" === TT && UT.listing ? "shaderPack:statusFailedRecheckListed" : wT[TT]
    }

    function aT(TT) {
      let {
        stored: UT,
        checking: mT,
        webGpuUsable: WT,
        changePending: zT,
        compiler: MT,
        t: gT
      } = TT;
      const nT = function(TT, UT, mT, WT, zT) {
          const MT = (0, pT.storedPackOutcome)(TT, zT);
          return "none" === MT.kind ? "noCompiler" === MT.reason ? UT ? "checking" : "noCompiler" : "otherApiVersion" === MT.reason ? "wrongApiVersion" : "failed" : (0, iT.c)() ? "harnessBuild" : "blocked" === MT.kind ? (0, pT.shaderPackNeedsCheck)(TT, zT) ? UT ? "checking" : !1 === mT ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === mT ? "offNoWebGpu" : WT ? "readyAfterReload" : "ready"
        }(UT, mT, WT, zT, MT),
        HT = "failed" === nT || "failedRecheck" === nT,
        kT = HT || "wrongApiVersion" === nT || "noCompiler" === nT,
        jT = "ready" === nT || "readyAfterReload" === nT ? UT.validation.offInStrict : [];
      return (0, dT.jsxs)(dT.Fragment, {
        children: [(0, dT.jsxs)("div", {
          className: eT()("ShaderPackStatus", {
            Ready: "ready" === nT,
            Failed: kT
          }),
          children: ["ready" === nT && (0, dT.jsx)(JT.c, {
            name: "circle-check"
          }), kT && (0, dT.jsx)(JT.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === nT ? (0, iT.b)() : gT(tT(nT, UT), {
            packVersion: String(UT.manifest.apiVersion),
            version: String(YT.b)
          })]
        }), HT && (0, dT.jsx)(xT.b, {
          diagnostics: UT.validation.errors,
          more: UT.validation.moreErrors,
          t: gT
        }), jT.length > 0 && (0, dT.jsxs)(dT.Fragment, {
          children: [(0, dT.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, dT.jsx)(JT.c, {
              name: "triangle-exclamation"
            }), gT("shaderPack:offInStrict")]
          }), (0, dT.jsx)(xT.b, {
            diagnostics: jT,
            t: gT
          })]
        })]
      })
    }

    function yT(TT) {
      let {
        setApplySettingsCallback: UT
      } = TT;
      const {
        t: mT
      } = (0, nT.z)(), [zT, gT] = (0, WT.useState)(null), [kT, jT] = (0, WT.useState)(null), [iT, OT] = (0, WT.useState)(null), [eT] = (0, WT.useState)(LT.h), [YT, JT] = (0, WT.useState)(!0), [xT, wT] = (0, WT.useState)(!1), {
        loading: tT,
        error: yT,
        setError: IT,
        onFiles: QT
      } = (0, qT.d)((async TT => {
        const UT = await (0, lT.loadPageShaderPackCompiler)();
        if (!UT) return void IT(mT("shaderPack:compilerUnavailable"));
        jT(UT);
        const WT = (0, pT.toStoredShaderPack)(TT, await (0, BT.f)(UT, TT.files));
        await (0, pT.saveShaderPack)(WT, UT) ? (gT(WT), sT(zT, WT, UT)) : IT(mT("shaderPack:saveFailed"))
      }));

      function sT(TT, mT, WT) {
        (function(TT, UT, mT, WT) {
          return mT || bT(TT, WT) || bT(UT, WT)
        })(TT, mT, (0, pT.isShaderPackChangePending)(), WT) && ((0, pT.markShaderPackChangePending)(), UT((() => vT.l)))
      }
      return (0, WT.useEffect)((() => {
        let TT = !1;
        return async function() {
          const UT = (0, HT.hasUsableWebGpuAdapter)(),
            mT = await (0, ZT.h)();
          if (TT) return;
          gT(mT), wT(!0), JT(!1);
          const WT = null !== mT ? (0, lT.loadPageShaderPackCompiler)() : null,
            zT = await UT;
          if (TT) return;
          OT(zT);
          const MT = await WT;
          if (!TT && (jT(MT), null !== mT && zT && null !== MT && (0, pT.shaderPackNeedsCheck)(mT, MT))) {
            const UT = await (0, BT.e)(mT, MT);
            TT || gT((TT => TT === mT ? UT : TT))
          }
        }().catch((UT => {
          console.error("Failed to load the stored shader pack", UT), TT || IT(mT("shaderPack:unexpectedError"))
        })).finally((() => {
          TT || (JT(!1), wT(!1))
        })), () => {
          TT = !0
        }
      }), []), (0, dT.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, dT.jsx)("div", {
          className: "ShaderPackIntro",
          children: mT("shaderPack:intro")
        }), (0, dT.jsx)(XT, {
          to: cT.K,
          className: "ShaderPackBrowseLink",
          children: (0, dT.jsx)(MT.l, {
            className: "ShaderPackBrowseButton",
            children: mT("shaderPackListing:browse")
          })
        }), !1 === iT && (0, dT.jsx)("div", {
          className: "SettingsBoxWarning",
          children: mT(eT ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== yT && (0, dT.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [mT("general:error"), ": ", yT]
        }), zT && (0, dT.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, dT.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, dT.jsxs)("div", {
              children: [(0, dT.jsx)("div", {
                className: "ShaderPackName",
                children: zT.manifest.name
              }), zT.manifest.author && (0, dT.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, fT.f)(mT, "shaderPack:byAuthor", {
                  author: zT.manifest.author
                })
              }), zT.manifest.description && (0, dT.jsx)("div", {
                className: "ShaderPackDescription",
                children: zT.manifest.description
              }), zT.listing && (0, dT.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, dT.jsx)(XT, {
                  to: (0, cT.N)(zT.listing.packId),
                  className: "ShaderPackListingLink",
                  children: mT("shaderPackListing:openPackPage")
                })
              })]
            }), (0, dT.jsx)(MT.J, {
              disabled: YT || tT,
              onClick: async function() {
                JT(!0), IT(null), await (0, pT.removeShaderPack)(), gT(null), JT(!1), sT(zT, null, kT)
              },
              children: mT("shaderPack:removePack")
            })]
          }), (0, dT.jsx)(aT, {
            stored: zT,
            checking: xT,
            webGpuUsable: iT,
            changePending: (0, pT.isShaderPackChangePending)(),
            compiler: kT,
            t: mT
          })]
        }), (0, dT.jsx)(qT.b, {
          busy: YT || tT || xT,
          disabled: YT || tT || xT || !0 !== iT,
          onFiles: QT
        })]
      })
    }

    function XT(TT) {
      let {
        to: UT,
        className: mT,
        children: WT
      } = TT;
      const {
        gameState: MT
      } = (0, kT.h)(["gameState"]), {
        pathname: nT,
        search: HT
      } = (0, zT.p)(), lT = "landingPage" !== MT && "studio" !== MT;
      return (0, dT.jsx)(gT.LinkPreserveSearch, {
        to: UT,
        className: mT,
        target: lT ? "_blank" : void 0,
        onClick: () => {
          lT || ((0, cT.z)(`${nT}${HT}`), (0, jT.c)())
        },
        children: WT
      })
    }
  },
  6623: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => tT,
      C: () => ZT,
      G: () => PT,
      J: () => sT,
      K: () => gT,
      M: () => FT,
      N: () => HT,
      O: () => nT,
      R: () => IT,
      U: () => QT,
      W: () => qT,
      _: () => wT,
      b: () => fT,
      c: () => JT,
      e: () => cT,
      h: () => LT,
      k: () => lT,
      l: () => aT,
      o: () => pT,
      r: () => yT,
      s: () => VT,
      t: () => BT,
      u: () => vT,
      x: () => dT,
      z: () => jT
    });
    var WT = mT(6630),
      zT = mT(166),
      MT = mT(4660);
    const gT = "/shader-packs",
      nT = `${gT}/publish`;

    function HT(TT) {
      return `${gT}/${encodeURIComponent(TT)}`
    }
    let kT = null;

    function jT(TT) {
      kT = TT
    }

    function lT() {
      return kT
    }

    function LT() {
      kT = null
    }

    function pT(TT) {
      return TT.playerHasRank("developer") || TT.playerHasRank("admin")
    }
    const BT = ["terrain", "water", "models", "sunShadows", "strict"],
      ZT = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function cT(TT, UT) {
      return TT.withFeatures.includes(UT) ? "with" : TT.withoutFeatures.includes(UT) ? "without" : null
    }

    function vT(TT) {
      return null === TT ? "with" : "with" === TT ? "without" : null
    }

    function fT(TT) {
      return "with" === TT ? "only" : null === TT ? "include" : void 0
    }

    function qT(TT, UT) {
      const mT = cT(TT, UT),
        WT = TT => TT.filter((TT => TT !== UT));
      return {
        withFeatures: null === mT ? [...TT.withFeatures, UT] : WT(TT.withFeatures),
        withoutFeatures: "with" === mT ? [...TT.withoutFeatures, UT] : WT(TT.withoutFeatures)
      }
    }
    const iT = "section",
      bT = "sort",
      OT = "filters",
      eT = "q",
      YT = "banned",
      JT = "popular",
      xT = "strict";

    function dT(TT) {
      var UT, mT, zT;
      const gT = TT.get(iT),
        nT = (null !== (UT = TT.get(OT)) && void 0 !== UT ? UT : xT).split(","),
        HT = TT.get(YT);
      return {
        section: "favourites" === gT || "mine" === gT ? gT : "explore",
        sort: null !== (mT = WT.z.find((UT => UT === TT.get(bT)))) && void 0 !== mT ? mT : JT,
        withFeatures: BT.filter((TT => nT.includes(TT) && !nT.includes(`-${TT}`))),
        withoutFeatures: BT.filter((TT => nT.includes(`-${TT}`))),
        searchQuery: (null === (zT = TT.get(eT)) || void 0 === zT ? void 0 : zT.slice(0, WT.L)) || null,
        pageNumber: (0, MT.f)(TT.get(MT.d)),
        banned: "only" === HT ? "with" : "include" === HT ? null : "without"
      }
    }

    function wT(TT, UT) {
      var mT;
      const WT = XT(UT);
      (0, MT.j)(TT, iT, "explore" === UT.section ? null : UT.section), (0, MT.j)(TT, bT, UT.sort === JT ? null : UT.sort), (0, MT.j)(TT, OT, WT === xT ? null : WT), (0, MT.j)(TT, eT, UT.searchQuery), (0, MT.j)(TT, YT, null !== (mT = fT(UT.banned)) && void 0 !== mT ? mT : null), (0, MT.k)(TT, UT.pageNumber)
    }

    function tT(TT) {
      const UT = new URLSearchParams;
      return wT(UT, {
        section: "explore",
        sort: JT,
        withFeatures: "strict" === TT ? [TT] : [TT, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${gT}?${UT.toString()}`
    }

    function aT(TT) {
      return XT(TT) === xT
    }

    function yT(TT) {
      return null !== TT.searchQuery || "with" === TT.banned || XT(TT) !== xT
    }

    function XT(TT) {
      return BT.flatMap((UT => {
        const mT = cT(TT, UT);
        return "with" === mT ? [UT] : "without" === mT ? [`-${UT}`] : []
      })).join(",")
    }
    const IT = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      QT = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function sT(TT) {
      return Math.round(100 * Math.max(0, 1 - 1 / TT))
    }

    function FT(TT, UT, mT, zT) {
      const MT = [];
      TT.isBanned && MT.push({
        tone: "warning",
        text: zT("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: gT
      } = TT;
      if (null === TT.brokenError || gT && !gT.error || MT.push({
          tone: "warning",
          text: zT("shaderPackListing:ownerBroken"),
          detail: TT.brokenError
        }), null !== gT && void 0 !== gT && gT.error) MT.push({
        tone: "warning",
        text: zT(UT ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, WT.n)(gT.error) ? null : gT.error
      });
      else if (gT) {
        const TT = null === gT.renderNotBefore ? 0 : gT.renderNotBefore - mT,
          WT = String(Math.ceil(TT / 6e4)),
          nT = zT(UT ? TT > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : TT > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: WT
          });
        MT.push({
          tone: "info",
          text: nT,
          detail: null
        })
      }
      return TT.listed || MT.push({
        tone: "info",
        text: zT("shaderPackListing:ownerUnlisted"),
        detail: null
      }), MT
    }

    function PT(TT) {
      return Math.max(1, Math.round(TT / 1024))
    }

    function VT(TT, UT, mT) {
      return TT instanceof zT.d && TT.errorMessageForUser ? TT.errorMessageForUser : UT(mT)
    }
  },
  6630: (TT, UT, mT) => {
    mT.d(UT, {
      C: () => nT,
      F: () => gT,
      G: () => WT,
      K: () => LT,
      L: () => jT,
      O: () => iT,
      S: () => lT,
      T: () => kT,
      e: () => BT,
      h: () => cT,
      i: () => ZT,
      j: () => pT,
      n: () => qT,
      q: () => OT,
      s: () => HT,
      t: () => zT,
      x: () => bT,
      z: () => MT
    });
    const WT = ["forest", "desert", "water", "night", "cave"];
    const zT = {
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
      MT = ["popular", "updated", "newest"],
      gT = 3,
      nT = 32,
      HT = 300;

    function kT(TT, UT) {
      return TT.slice(0, UT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const jT = 64,
      lT = 512,
      LT = 18e5;

    function pT(TT) {
      const UT = TT,
        mT = null === UT || void 0 === UT ? void 0 : UT.files;
      return "number" === typeof(null === UT || void 0 === UT ? void 0 : UT.apiVersion) && "string" === typeof UT.name && (null === UT.author || "string" === typeof UT.author) && (void 0 === UT.keepCircleShadows || "boolean" === typeof UT.keepCircleShadows) && "object" === typeof mT && null !== mT && Object.values(mT).every((TT => "string" === typeof TT))
    }
    const BT = "Bloxdhub",
      ZT = "https://bloxdhub.com/shaders";

    function cT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const vT = "Screenshot generation failed.",
      fT = "Its screenshots couldn't be generated:";

    function qT(TT) {
      var UT;
      return TT === vT || null !== (UT = null === TT || void 0 === TT ? void 0 : TT.startsWith(fT)) && void 0 !== UT && UT
    }

    function iT(TT, UT) {
      return `shaderPacks/${TT}/${UT}.json`
    }

    function bT(TT, UT, mT, WT) {
      return null === UT.renderId ? OT(TT, UT.baselineVersion, mT, WT) : `${TT}/${function(TT,UT,mT,WT){return`shaderPacks/${TT}/${UT}/${mT}-${WT}.webp`}(UT.packId,UT.renderId,mT,WT)}`
    }

    function OT(TT, UT, mT, WT) {
      return `${TT}/${function(TT,UT,mT){return`shaderPacks/baseline/${TT}/${UT}-${mT}.webp`}(UT,mT,WT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);