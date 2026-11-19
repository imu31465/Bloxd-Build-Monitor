export const id = 123;
export const ids = [123];
export const modules = {
  39861: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      ShaderPackCategory: () => JT
    });
    var iT = IT(46),
      zT = IT(1484),
      kT = IT(1408),
      WT = IT(1468),
      XT = IT(1171),
      BT = IT(90),
      FT = IT(12),
      ST = IT(1585),
      DT = IT(6114),
      LT = IT(282),
      xT = IT(6154),
      cT = IT(6146),
      KT = IT(6158),
      MT = IT(6042),
      rT = IT(4481),
      AT = IT(6101),
      gT = IT(6107),
      hT = IT(3014);

    function wT(TT, oT) {
      const IT = (0, xT.storedPackOutcome)(TT, oT);
      return "none" !== IT.kind || "noCompiler" === IT.reason
    }
    var mT = IT(1042),
      eT = IT.n(mT),
      RT = IT(6103),
      uT = IT(1055),
      vT = IT(6099),
      ET = IT(1083);
    const fT = {
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

    function CT(TT, oT) {
      return "failedRecheck" === TT && oT.listing ? "shaderPack:statusFailedRecheckListed" : fT[TT]
    }

    function jT(TT) {
      let {
        stored: oT,
        checking: IT,
        webGpuUsable: iT,
        changePending: zT,
        compiler: kT,
        t: WT
      } = TT;
      const XT = function(TT, oT, IT, iT, zT) {
          const kT = (0, xT.storedPackOutcome)(TT, zT);
          return "none" === kT.kind ? "noCompiler" === kT.reason ? oT ? "checking" : "noCompiler" : "otherApiVersion" === kT.reason ? "wrongApiVersion" : "failed" : (0, hT.g)() ? "harnessBuild" : "blocked" === kT.kind ? (0, xT.shaderPackNeedsCheck)(TT, zT) ? oT ? "checking" : !1 === IT ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === IT ? "offNoWebGpu" : iT ? "readyAfterReload" : "ready"
        }(oT, IT, iT, zT, kT),
        BT = "failed" === XT || "failedRecheck" === XT,
        FT = BT || "wrongApiVersion" === XT || "noCompiler" === XT,
        ST = "ready" === XT || "readyAfterReload" === XT ? oT.validation.offInStrict : [];
      return (0, ET.jsxs)(ET.Fragment, {
        children: [(0, ET.jsxs)("div", {
          className: eT()("ShaderPackStatus", {
            Ready: "ready" === XT,
            Failed: FT
          }),
          children: ["ready" === XT && (0, ET.jsx)(uT.e, {
            name: "circle-check"
          }), FT && (0, ET.jsx)(uT.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === XT ? (0, hT.d)() : WT(CT(XT, oT), {
            packVersion: String(oT.manifest.apiVersion),
            version: String(RT.e)
          })]
        }), BT && (0, ET.jsx)(vT.e, {
          diagnostics: oT.validation.errors,
          more: oT.validation.moreErrors,
          t: WT
        }), ST.length > 0 && (0, ET.jsxs)(ET.Fragment, {
          children: [(0, ET.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, ET.jsx)(uT.e, {
              name: "triangle-exclamation"
            }), WT("shaderPack:offInStrict")]
          }), (0, ET.jsx)(vT.e, {
            diagnostics: ST,
            t: WT
          })]
        })]
      })
    }

    function JT(TT) {
      let {
        setApplySettingsCallback: oT
      } = TT;
      const {
        t: IT
      } = (0, XT.t)(), [zT, WT] = (0, iT.useState)(null), [FT, ST] = (0, iT.useState)(null), [hT, mT] = (0, iT.useState)(null), [eT] = (0, iT.useState)(LT.h), [RT, uT] = (0, iT.useState)(!0), [vT, fT] = (0, iT.useState)(!1), {
        loading: CT,
        error: JT,
        setError: aT,
        onFiles: YT
      } = (0, gT.d)((async TT => {
        const oT = await (0, DT.loadPageShaderPackCompiler)();
        if (!oT) return void aT(IT("shaderPack:compilerUnavailable"));
        ST(oT);
        const iT = (0, xT.toStoredShaderPack)(TT, await (0, cT.c)(oT, TT.files));
        await (0, xT.saveShaderPack)(iT, oT) ? (WT(iT), QT(zT, iT, oT)) : aT(IT("shaderPack:saveFailed"))
      }));

      function QT(TT, IT, iT) {
        (function(TT, oT, IT, iT) {
          return IT || wT(TT, iT) || wT(oT, iT)
        })(TT, IT, (0, xT.isShaderPackChangePending)(), iT) && ((0, xT.markShaderPackChangePending)(), oT((() => rT.n)))
      }
      return (0, iT.useEffect)((() => {
        let TT = !1;
        return async function() {
          const oT = (0, BT.hasUsableWebGpuAdapter)(),
            IT = await (0, KT.e)();
          if (TT) return;
          WT(IT), fT(!0), uT(!1);
          const iT = null !== IT ? (0, DT.loadPageShaderPackCompiler)() : null,
            zT = await oT;
          if (TT) return;
          mT(zT);
          const kT = await iT;
          if (!TT && (ST(kT), null !== IT && zT && null !== kT && (0, xT.shaderPackNeedsCheck)(IT, kT))) {
            const oT = await (0, cT.b)(IT, kT);
            TT || WT((TT => TT === IT ? oT : TT))
          }
        }().catch((oT => {
          console.error("Failed to load the stored shader pack", oT), TT || aT(IT("shaderPack:unexpectedError"))
        })).finally((() => {
          TT || (uT(!1), fT(!1))
        })), () => {
          TT = !0
        }
      }), []), (0, ET.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, ET.jsx)("div", {
          className: "ShaderPackIntro",
          children: IT("shaderPack:intro")
        }), (0, ET.jsx)(UT, {
          to: MT.V,
          className: "ShaderPackBrowseLink",
          children: (0, ET.jsx)(kT.m, {
            className: "ShaderPackBrowseButton",
            children: IT("shaderPackListing:browse")
          })
        }), !1 === hT && (0, ET.jsx)("div", {
          className: "SettingsBoxWarning",
          children: IT(eT ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== JT && (0, ET.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [IT("general:error"), ": ", JT]
        }), zT && (0, ET.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, ET.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, ET.jsxs)("div", {
              children: [(0, ET.jsx)("div", {
                className: "ShaderPackName",
                children: zT.manifest.name
              }), zT.manifest.author && (0, ET.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, AT.f)(IT, "shaderPack:byAuthor", {
                  author: zT.manifest.author
                })
              }), zT.manifest.description && (0, ET.jsx)("div", {
                className: "ShaderPackDescription",
                children: zT.manifest.description
              }), zT.listing && (0, ET.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, ET.jsx)(UT, {
                  to: (0, MT.ab)(zT.listing.packId),
                  className: "ShaderPackListingLink",
                  children: IT("shaderPackListing:openPackPage")
                })
              })]
            }), (0, ET.jsx)(kT.F, {
              disabled: RT || CT,
              onClick: async function() {
                uT(!0), aT(null), await (0, xT.removeShaderPack)(), WT(null), uT(!1), QT(zT, null, FT)
              },
              children: IT("shaderPack:removePack")
            })]
          }), (0, ET.jsx)(jT, {
            stored: zT,
            checking: vT,
            webGpuUsable: hT,
            changePending: (0, xT.isShaderPackChangePending)(),
            compiler: FT,
            t: IT
          })]
        }), (0, ET.jsx)(gT.b, {
          busy: RT || CT || vT,
          disabled: RT || CT || vT || !0 !== hT,
          onFiles: YT
        })]
      })
    }

    function UT(TT) {
      let {
        to: oT,
        className: IT,
        children: iT
      } = TT;
      const {
        gameState: kT
      } = (0, FT.k)(["gameState"]), {
        pathname: XT,
        search: BT
      } = (0, zT.t)(), DT = "landingPage" !== kT && "studio" !== kT;
      return (0, ET.jsx)(WT.LinkPreserveSearch, {
        to: oT,
        className: IT,
        target: DT ? "_blank" : void 0,
        onClick: () => {
          DT || ((0, MT.K)(`${XT}${BT}`), (0, ST.i)())
        },
        children: iT
      })
    }
  },
  6042: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => nT,
      D: () => cT,
      G: () => rT,
      I: () => ET,
      K: () => ST,
      L: () => CT,
      N: () => KT,
      P: () => HT,
      S: () => QT,
      V: () => WT,
      Y: () => OT,
      ab: () => BT,
      d: () => AT,
      db: () => XT,
      f: () => uT,
      fb: () => aT,
      i: () => MT,
      jb: () => YT,
      kb: () => gT,
      m: () => LT,
      mb: () => fT,
      p: () => DT,
      t: () => jT,
      u: () => xT,
      x: () => JT
    });
    var iT = IT(6045),
      zT = IT(159),
      kT = IT(4074);
    const WT = "/shader-packs",
      XT = `${WT}/publish`;

    function BT(TT) {
      return `${WT}/${encodeURIComponent(TT)}`
    }
    let FT = null;

    function ST(TT) {
      FT = TT
    }

    function DT() {
      return FT
    }

    function LT() {
      FT = null
    }

    function xT(TT) {
      return TT.playerHasRank("developer") || TT.playerHasRank("admin")
    }
    const cT = ["terrain", "water", "models", "sunShadows", "strict"],
      KT = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function MT(TT, oT) {
      return TT.withFeatures.includes(oT) ? "with" : TT.withoutFeatures.includes(oT) ? "without" : null
    }

    function rT(TT) {
      return null === TT ? "with" : "with" === TT ? "without" : null
    }

    function AT(TT) {
      return "with" === TT ? "only" : null === TT ? "include" : void 0
    }

    function gT(TT, oT) {
      const IT = MT(TT, oT),
        iT = TT => TT.filter((TT => TT !== oT));
      return {
        withFeatures: null === IT ? [...TT.withFeatures, oT] : iT(TT.withFeatures),
        withoutFeatures: "with" === IT ? [...TT.withoutFeatures, oT] : iT(TT.withoutFeatures)
      }
    }
    const hT = "section",
      wT = "sort",
      mT = "filters",
      eT = "q",
      RT = "banned",
      uT = "popular",
      vT = "strict";

    function ET(TT) {
      var oT, IT, zT;
      const WT = TT.get(hT),
        XT = (null !== (oT = TT.get(mT)) && void 0 !== oT ? oT : vT).split(","),
        BT = TT.get(RT);
      return {
        section: "favourites" === WT || "mine" === WT ? WT : "explore",
        sort: null !== (IT = iT.A.find((oT => oT === TT.get(wT)))) && void 0 !== IT ? IT : uT,
        withFeatures: cT.filter((TT => XT.includes(TT) && !XT.includes(`-${TT}`))),
        withoutFeatures: cT.filter((TT => XT.includes(`-${TT}`))),
        searchQuery: (null === (zT = TT.get(eT)) || void 0 === zT ? void 0 : zT.slice(0, iT.Q)) || null,
        pageNumber: (0, kT.i)(TT.get(kT.e)),
        banned: "only" === BT ? "with" : "include" === BT ? null : "without"
      }
    }

    function fT(TT, oT) {
      var IT;
      const iT = UT(oT);
      (0, kT.l)(TT, hT, "explore" === oT.section ? null : oT.section), (0, kT.l)(TT, wT, oT.sort === uT ? null : oT.sort), (0, kT.l)(TT, mT, iT === vT ? null : iT), (0, kT.l)(TT, eT, oT.searchQuery), (0, kT.l)(TT, RT, null !== (IT = AT(oT.banned)) && void 0 !== IT ? IT : null), (0, kT.n)(TT, oT.pageNumber)
    }

    function CT(TT) {
      const oT = new URLSearchParams;
      return fT(oT, {
        section: "explore",
        sort: uT,
        withFeatures: "strict" === TT ? [TT] : [TT, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${WT}?${oT.toString()}`
    }

    function jT(TT) {
      return UT(TT) === vT
    }

    function JT(TT) {
      return null !== TT.searchQuery || "with" === TT.banned || UT(TT) !== vT
    }

    function UT(TT) {
      return cT.flatMap((oT => {
        const IT = MT(TT, oT);
        return "with" === IT ? [oT] : "without" === IT ? [`-${oT}`] : []
      })).join(",")
    }
    const aT = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      YT = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function QT(TT) {
      return Math.round(100 * Math.max(0, 1 - 1 / TT))
    }

    function OT(TT, oT, IT, zT) {
      const kT = [];
      TT.isBanned && kT.push({
        tone: "warning",
        text: zT("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: WT
      } = TT;
      if (null === TT.brokenError || WT && !WT.error || kT.push({
          tone: "warning",
          text: zT("shaderPackListing:ownerBroken"),
          detail: TT.brokenError
        }), null !== WT && void 0 !== WT && WT.error) kT.push({
        tone: "warning",
        text: zT(oT ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, iT.l)(WT.error) ? null : WT.error
      });
      else if (WT) {
        const TT = null === WT.renderNotBefore ? 0 : WT.renderNotBefore - IT,
          iT = String(Math.ceil(TT / 6e4)),
          XT = zT(oT ? TT > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : TT > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: iT
          });
        kT.push({
          tone: "info",
          text: XT,
          detail: null
        })
      }
      return TT.listed || kT.push({
        tone: "info",
        text: zT("shaderPackListing:ownerUnlisted"),
        detail: null
      }), kT
    }

    function HT(TT) {
      return Math.max(1, Math.round(TT / 1024))
    }

    function nT(TT, oT, IT) {
      return TT instanceof zT.d && TT.errorMessageForUser ? TT.errorMessageForUser : oT(IT)
    }
  },
  6045: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => kT,
      E: () => XT,
      I: () => WT,
      J: () => iT,
      N: () => LT,
      Q: () => ST,
      T: () => gT,
      U: () => DT,
      Y: () => FT,
      c: () => xT,
      g: () => KT,
      i: () => cT,
      l: () => AT,
      o: () => wT,
      s: () => BT,
      v: () => zT,
      y: () => hT
    });
    const iT = ["forest", "desert", "water", "night", "cave"];
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
      kT = ["popular", "updated", "newest"],
      WT = 3,
      XT = 32,
      BT = 300;

    function FT(TT, oT) {
      return TT.slice(0, oT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const ST = 64,
      DT = 512,
      LT = 18e5;
    const xT = "Bloxdhub",
      cT = "https://bloxdhub.com/shaders";

    function KT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const MT = "Screenshot generation failed.",
      rT = "Its screenshots couldn't be generated:";

    function AT(TT) {
      var oT;
      return TT === MT || null !== (oT = null === TT || void 0 === TT ? void 0 : TT.startsWith(rT)) && void 0 !== oT && oT
    }

    function gT(TT, oT) {
      return `shaderPacks/${TT}/${oT}.json`
    }

    function hT(TT, oT, IT, iT) {
      return null === oT.renderId ? wT(TT, oT.baselineVersion, IT, iT) : `${TT}/${function(TT,oT,IT,iT){return`shaderPacks/${TT}/${oT}/${IT}-${iT}.webp`}(oT.packId,oT.renderId,IT,iT)}`
    }

    function wT(TT, oT, IT, iT) {
      return `${TT}/${function(TT,oT,IT){return`shaderPacks/baseline/${TT}/${oT}-${IT}.webp`}(oT,IT,iT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);