export const id = 144;
export const ids = [144];
export const modules = {
  42069: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      ShaderPackCategory: () => IB
    });
    var YB = GB(56),
      DB = GB(1571),
      QB = GB(1485),
      oB = GB(1560),
      jB = GB(1175),
      yB = GB(92),
      JB = GB(16),
      MB = GB(1699),
      PB = GB(7159),
      zB = GB(320),
      lB = GB(7193),
      pB = GB(7186),
      qB = GB(7198),
      ZB = GB(7099),
      NB = GB(5480),
      RB = GB(5531),
      WB = GB(7152),
      AB = GB(3890);

    function VB(BB, OB) {
      const GB = (0, lB.storedPackOutcome)(BB, OB);
      return "none" !== GB.kind || "noCompiler" === GB.reason
    }
    var SB = GB(1090),
      nB = GB.n(SB),
      UB = GB(5538),
      fB = GB(1383),
      kB = GB(7147),
      dB = GB(1282);
    const KB = {
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

    function uB(BB, OB) {
      return "failedRecheck" === BB && OB.listing ? "shaderPack:statusFailedRecheckListed" : KB[BB]
    }

    function mB(BB) {
      let {
        stored: OB,
        checking: GB,
        webGpuUsable: YB,
        changePending: DB,
        compiler: QB,
        t: oB
      } = BB;
      const jB = function(BB, OB, GB, YB, DB) {
          const QB = (0, lB.storedPackOutcome)(BB, DB);
          return "none" === QB.kind ? "noCompiler" === QB.reason ? OB ? "checking" : "noCompiler" : "otherApiVersion" === QB.reason ? "wrongApiVersion" : "failed" : (0, AB.e)() ? "harnessBuild" : "blocked" === QB.kind ? (0, lB.shaderPackNeedsCheck)(BB, DB) ? OB ? "checking" : !1 === GB ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === GB ? "offNoWebGpu" : YB ? "readyAfterReload" : "ready"
        }(OB, GB, YB, DB, QB),
        yB = "failed" === jB || "failedRecheck" === jB,
        JB = yB || "wrongApiVersion" === jB || "noCompiler" === jB,
        MB = "ready" === jB || "readyAfterReload" === jB ? OB.validation.offInStrict : [];
      return (0, dB.jsxs)(dB.Fragment, {
        children: [(0, dB.jsxs)("div", {
          className: nB()("ShaderPackStatus", {
            Ready: "ready" === jB,
            Failed: JB
          }),
          children: ["ready" === jB && (0, dB.jsx)(fB.b, {
            name: "circle-check"
          }), JB && (0, dB.jsx)(fB.b, {
            name: "triangle-exclamation"
          }), "harnessBuild" === jB ? (0, AB.d)() : oB(uB(jB, OB), {
            packVersion: String(OB.manifest.apiVersion),
            version: String(UB.b)
          })]
        }), yB && (0, dB.jsx)(kB.c, {
          diagnostics: OB.validation.errors,
          more: OB.validation.moreErrors,
          t: oB
        }), MB.length > 0 && (0, dB.jsxs)(dB.Fragment, {
          children: [(0, dB.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, dB.jsx)(fB.b, {
              name: "triangle-exclamation"
            }), oB("shaderPack:offInStrict")]
          }), (0, dB.jsx)(kB.c, {
            diagnostics: MB,
            t: oB
          })]
        })]
      })
    }

    function IB(BB) {
      let {
        setApplySettingsCallback: OB
      } = BB;
      const {
        t: GB
      } = (0, jB.H)(), [DB, oB] = (0, YB.useState)(null), [JB, MB] = (0, YB.useState)(null), [AB, SB] = (0, YB.useState)(null), [nB] = (0, YB.useState)(zB.l), [UB, fB] = (0, YB.useState)(!0), [kB, KB] = (0, YB.useState)(!1), {
        loading: uB,
        error: IB,
        setError: iB,
        onFiles: LB
      } = (0, WB.e)((async BB => {
        const OB = await (0, PB.loadPageShaderPackCompiler)();
        if (!OB) return void iB(GB("shaderPack:compilerUnavailable"));
        MB(OB);
        const YB = (0, lB.toStoredShaderPack)(BB, await (0, pB.f)(OB, BB.files));
        await (0, lB.saveShaderPack)(YB, OB) ? (oB(YB), gB(DB, YB, OB)) : iB(GB("shaderPack:saveFailed"))
      }));

      function gB(BB, GB, YB) {
        (function(BB, OB, GB, YB) {
          return GB || VB(BB, YB) || VB(OB, YB)
        })(BB, GB, (0, lB.isShaderPackChangePending)(), YB) && ((0, lB.markShaderPackChangePending)(), OB((() => NB.g)))
      }
      return (0, YB.useEffect)((() => {
        let BB = !1;
        return async function() {
          const OB = (0, yB.hasUsableWebGpuAdapter)(),
            GB = await (0, qB.e)();
          if (BB) return;
          oB(GB), KB(!0), fB(!1);
          const YB = null !== GB ? (0, PB.loadPageShaderPackCompiler)() : null,
            DB = await OB;
          if (BB) return;
          SB(DB);
          const QB = await YB;
          if (!BB && (MB(QB), null !== GB && DB && null !== QB && (0, lB.shaderPackNeedsCheck)(GB, QB))) {
            const OB = await (0, pB.d)(GB, QB);
            BB || oB((BB => BB === GB ? OB : BB))
          }
        }().catch((OB => {
          console.error("Failed to load the stored shader pack", OB), BB || iB(GB("shaderPack:unexpectedError"))
        })).finally((() => {
          BB || (fB(!1), KB(!1))
        })), () => {
          BB = !0
        }
      }), []), (0, dB.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, dB.jsx)("div", {
          className: "ShaderPackIntro",
          children: GB("shaderPack:intro")
        }), (0, dB.jsx)(FB, {
          to: ZB.V,
          className: "ShaderPackBrowseLink",
          children: (0, dB.jsx)(QB.q, {
            className: "ShaderPackBrowseButton",
            children: GB("shaderPackListing:browse")
          })
        }), !1 === AB && (0, dB.jsx)("div", {
          className: "SettingsBoxWarning",
          children: GB(nB ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== IB && (0, dB.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [GB("general:error"), ": ", IB]
        }), DB && (0, dB.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, dB.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, dB.jsxs)("div", {
              children: [(0, dB.jsx)("div", {
                className: "ShaderPackName",
                children: DB.manifest.name
              }), DB.manifest.author && (0, dB.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, RB.j)(GB, "shaderPack:byAuthor", {
                  author: DB.manifest.author
                })
              }), DB.manifest.description && (0, dB.jsx)("div", {
                className: "ShaderPackDescription",
                children: DB.manifest.description
              }), DB.listing && (0, dB.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, dB.jsx)(FB, {
                  to: (0, ZB.$)(DB.listing.packId),
                  className: "ShaderPackListingLink",
                  children: GB("shaderPackListing:openPackPage")
                })
              })]
            }), (0, dB.jsx)(QB.R, {
              disabled: UB || uB,
              onClick: async function() {
                fB(!0), iB(null), await (0, lB.removeShaderPack)(), oB(null), fB(!1), gB(DB, null, JB)
              },
              children: GB("shaderPack:removePack")
            })]
          }), (0, dB.jsx)(mB, {
            stored: DB,
            checking: kB,
            webGpuUsable: AB,
            changePending: (0, lB.isShaderPackChangePending)(),
            compiler: JB,
            t: GB
          })]
        }), (0, dB.jsx)(WB.b, {
          busy: UB || uB || kB,
          disabled: UB || uB || kB || !0 !== AB,
          onFiles: LB
        })]
      })
    }

    function FB(BB) {
      let {
        to: OB,
        className: GB,
        children: YB
      } = BB;
      const {
        gameState: QB
      } = (0, JB.o)(["gameState"]), {
        pathname: jB,
        search: yB
      } = (0, DB.r)(), PB = "landingPage" !== QB && "studio" !== QB;
      return (0, dB.jsx)(oB.LinkPreserveSearch, {
        to: OB,
        className: GB,
        target: PB ? "_blank" : void 0,
        onClick: () => {
          PB || ((0, ZB.E)(`${jB}${yB}`), (0, MB.f)())
        },
        children: YB
      })
    }
  },
  7099: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => yB,
      C: () => dB,
      E: () => MB,
      H: () => uB,
      L: () => qB,
      P: () => XB,
      R: () => gB,
      V: () => oB,
      X: () => rB,
      ab: () => jB,
      b: () => RB,
      c: () => fB,
      eb: () => iB,
      f: () => ZB,
      g: () => zB,
      hb: () => LB,
      ib: () => WB,
      j: () => PB,
      lb: () => KB,
      n: () => mB,
      p: () => lB,
      q: () => IB,
      u: () => wB,
      x: () => pB,
      y: () => NB
    });
    var YB = GB(7107),
      DB = GB(162),
      QB = GB(4975);
    const oB = "/shader-packs",
      jB = `${oB}/publish`;

    function yB(BB) {
      return `${oB}/${encodeURIComponent(BB)}`
    }
    let JB = null;

    function MB(BB) {
      JB = BB
    }

    function PB() {
      return JB
    }

    function zB() {
      JB = null
    }

    function lB(BB) {
      return BB.playerHasRank("developer") || BB.playerHasRank("admin")
    }
    const pB = ["terrain", "water", "models", "sunShadows", "strict"],
      qB = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function ZB(BB, OB) {
      return BB.withFeatures.includes(OB) ? "with" : BB.withoutFeatures.includes(OB) ? "without" : null
    }

    function NB(BB) {
      return null === BB ? "with" : "with" === BB ? "without" : null
    }

    function RB(BB) {
      return "with" === BB ? "only" : null === BB ? "include" : void 0
    }

    function WB(BB, OB) {
      const GB = ZB(BB, OB),
        YB = BB => BB.filter((BB => BB !== OB));
      return {
        withFeatures: null === GB ? [...BB.withFeatures, OB] : YB(BB.withFeatures),
        withoutFeatures: "with" === GB ? [...BB.withoutFeatures, OB] : YB(BB.withoutFeatures)
      }
    }
    const AB = "section",
      VB = "sort",
      SB = "filters",
      nB = "q",
      UB = "banned",
      fB = "popular",
      kB = "strict";

    function dB(BB) {
      var OB, GB, DB;
      const oB = BB.get(AB),
        jB = (null !== (OB = BB.get(SB)) && void 0 !== OB ? OB : kB).split(","),
        yB = BB.get(UB);
      return {
        section: "favourites" === oB || "mine" === oB ? oB : "explore",
        sort: null !== (GB = YB.z.find((OB => OB === BB.get(VB)))) && void 0 !== GB ? GB : fB,
        withFeatures: pB.filter((BB => jB.includes(BB) && !jB.includes(`-${BB}`))),
        withoutFeatures: pB.filter((BB => jB.includes(`-${BB}`))),
        searchQuery: (null === (DB = BB.get(nB)) || void 0 === DB ? void 0 : DB.slice(0, YB.M)) || null,
        pageNumber: (0, QB.h)(BB.get(QB.d)),
        banned: "only" === yB ? "with" : "include" === yB ? null : "without"
      }
    }

    function KB(BB, OB) {
      var GB;
      const YB = FB(OB);
      (0, QB.i)(BB, AB, "explore" === OB.section ? null : OB.section), (0, QB.i)(BB, VB, OB.sort === fB ? null : OB.sort), (0, QB.i)(BB, SB, YB === kB ? null : YB), (0, QB.i)(BB, nB, OB.searchQuery), (0, QB.i)(BB, UB, null !== (GB = RB(OB.banned)) && void 0 !== GB ? GB : null), (0, QB.k)(BB, OB.pageNumber)
    }

    function uB(BB) {
      const OB = new URLSearchParams;
      return KB(OB, {
        section: "explore",
        sort: fB,
        withFeatures: "strict" === BB ? [BB] : [BB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${oB}?${OB.toString()}`
    }

    function mB(BB) {
      return FB(BB) === kB
    }

    function IB(BB) {
      return null !== BB.searchQuery || "with" === BB.banned || FB(BB) !== kB
    }

    function FB(BB) {
      return pB.flatMap((OB => {
        const GB = ZB(BB, OB);
        return "with" === GB ? [OB] : "without" === GB ? [`-${OB}`] : []
      })).join(",")
    }
    const iB = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      LB = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function gB(BB) {
      return Math.round(100 * Math.max(0, 1 - 1 / BB))
    }

    function rB(BB, OB, GB, DB) {
      const QB = [];
      BB.isBanned && QB.push({
        tone: "warning",
        text: DB("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: oB
      } = BB;
      if (null === BB.brokenError || oB && !oB.error || QB.push({
          tone: "warning",
          text: DB("shaderPackListing:ownerBroken"),
          detail: BB.brokenError
        }), null !== oB && void 0 !== oB && oB.error) QB.push({
        tone: "warning",
        text: DB(OB ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, YB.n)(oB.error) ? null : oB.error
      });
      else if (oB) {
        const BB = null === oB.renderNotBefore ? 0 : oB.renderNotBefore - GB,
          YB = String(Math.ceil(BB / 6e4)),
          jB = DB(OB ? BB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : BB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: YB
          });
        QB.push({
          tone: "info",
          text: jB,
          detail: null
        })
      }
      return BB.listed || QB.push({
        tone: "info",
        text: DB("shaderPackListing:ownerUnlisted"),
        detail: null
      }), QB
    }

    function XB(BB) {
      return Math.max(1, Math.round(BB / 1024))
    }

    function wB(BB, OB, GB) {
      return BB instanceof DB.d && BB.errorMessageForUser ? BB.errorMessageForUser : OB(GB)
    }
  },
  7107: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => jB,
      E: () => oB,
      F: () => YB,
      I: () => zB,
      M: () => MB,
      Q: () => AB,
      U: () => PB,
      X: () => JB,
      e: () => pB,
      h: () => ZB,
      i: () => qB,
      l: () => lB,
      n: () => WB,
      q: () => SB,
      r: () => yB,
      t: () => DB,
      x: () => VB,
      z: () => QB
    });
    const YB = ["forest", "desert", "water", "night", "cave"];
    const DB = {
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
      QB = ["popular", "updated", "newest"],
      oB = 3,
      jB = 32,
      yB = 300;

    function JB(BB, OB) {
      return BB.slice(0, OB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const MB = 64,
      PB = 512,
      zB = 18e5;

    function lB(BB) {
      const OB = BB,
        GB = null === OB || void 0 === OB ? void 0 : OB.files;
      return "number" === typeof(null === OB || void 0 === OB ? void 0 : OB.apiVersion) && "string" === typeof OB.name && (null === OB.author || "string" === typeof OB.author) && (void 0 === OB.keepCircleShadows || "boolean" === typeof OB.keepCircleShadows) && "object" === typeof GB && null !== GB && Object.values(GB).every((BB => "string" === typeof BB))
    }
    const pB = "Bloxdhub",
      qB = "https://bloxdhub.com/shaders";

    function ZB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const NB = "Screenshot generation failed.",
      RB = "Its screenshots couldn't be generated:";

    function WB(BB) {
      var OB;
      return BB === NB || null !== (OB = null === BB || void 0 === BB ? void 0 : BB.startsWith(RB)) && void 0 !== OB && OB
    }

    function AB(BB, OB) {
      return `shaderPacks/${BB}/${OB}.json`
    }

    function VB(BB, OB, GB, YB) {
      return null === OB.renderId ? SB(BB, OB.baselineVersion, GB, YB) : `${BB}/${function(BB,OB,GB,YB){return`shaderPacks/${BB}/${OB}/${GB}-${YB}.webp`}(OB.packId,OB.renderId,GB,YB)}`
    }

    function SB(BB, OB, GB, YB) {
      return `${BB}/${function(BB,OB,GB){return`shaderPacks/baseline/${BB}/${OB}-${GB}.webp`}(OB,GB,YB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);