export const id = 129;
export const ids = [129];
export const modules = {
  40908: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      ShaderPackCategory: () => mC
    });
    var QC = ZC(48),
      wC = ZC(1463),
      bC = ZC(1388),
      nC = ZC(1453),
      fC = ZC(1143),
      oC = ZC(77),
      qC = ZC(20),
      FC = ZC(1557),
      WC = ZC(6609),
      NC = ZC(296),
      MC = ZC(6658),
      gC = ZC(6651),
      SC = ZC(6660),
      pC = ZC(6556),
      PC = ZC(4942),
      GC = ZC(4992),
      RC = ZC(6600),
      AC = ZC(3436);

    function xC(CC, zC) {
      const ZC = (0, MC.storedPackOutcome)(CC, zC);
      return "none" !== ZC.kind || "noCompiler" === ZC.reason
    }
    var JC = ZC(1002),
      IC = ZC.n(JC),
      iC = ZC(4998),
      vC = ZC(1013),
      eC = ZC(6596),
      hC = ZC(1056);
    const KC = {
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

    function YC(CC, zC) {
      return "failedRecheck" === CC && zC.listing ? "shaderPack:statusFailedRecheckListed" : KC[CC]
    }

    function dC(CC) {
      let {
        stored: zC,
        checking: ZC,
        webGpuUsable: QC,
        changePending: wC,
        compiler: bC,
        t: nC
      } = CC;
      const fC = function(CC, zC, ZC, QC, wC) {
          const bC = (0, MC.storedPackOutcome)(CC, wC);
          return "none" === bC.kind ? "noCompiler" === bC.reason ? zC ? "checking" : "noCompiler" : "otherApiVersion" === bC.reason ? "wrongApiVersion" : "failed" : (0, AC.f)() ? "harnessBuild" : "blocked" === bC.kind ? (0, MC.shaderPackNeedsCheck)(CC, wC) ? zC ? "checking" : !1 === ZC ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === ZC ? "offNoWebGpu" : QC ? "readyAfterReload" : "ready"
        }(zC, ZC, QC, wC, bC),
        oC = "failed" === fC || "failedRecheck" === fC,
        qC = oC || "wrongApiVersion" === fC || "noCompiler" === fC,
        FC = "ready" === fC || "readyAfterReload" === fC ? zC.validation.offInStrict : [];
      return (0, hC.jsxs)(hC.Fragment, {
        children: [(0, hC.jsxs)("div", {
          className: IC()("ShaderPackStatus", {
            Ready: "ready" === fC,
            Failed: qC
          }),
          children: ["ready" === fC && (0, hC.jsx)(vC.c, {
            name: "circle-check"
          }), qC && (0, hC.jsx)(vC.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === fC ? (0, AC.e)() : nC(YC(fC, zC), {
            packVersion: String(zC.manifest.apiVersion),
            version: String(iC.b)
          })]
        }), oC && (0, hC.jsx)(eC.d, {
          diagnostics: zC.validation.errors,
          more: zC.validation.moreErrors,
          t: nC
        }), FC.length > 0 && (0, hC.jsxs)(hC.Fragment, {
          children: [(0, hC.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, hC.jsx)(vC.c, {
              name: "triangle-exclamation"
            }), nC("shaderPack:offInStrict")]
          }), (0, hC.jsx)(eC.d, {
            diagnostics: FC,
            t: nC
          })]
        })]
      })
    }

    function mC(CC) {
      let {
        setApplySettingsCallback: zC
      } = CC;
      const {
        t: ZC
      } = (0, fC.y)(), [wC, nC] = (0, QC.useState)(null), [qC, FC] = (0, QC.useState)(null), [AC, JC] = (0, QC.useState)(null), [IC] = (0, QC.useState)(NC.k), [iC, vC] = (0, QC.useState)(!0), [eC, KC] = (0, QC.useState)(!1), {
        loading: YC,
        error: mC,
        setError: EC,
        onFiles: lC
      } = (0, RC.i)((async CC => {
        const zC = await (0, WC.loadPageShaderPackCompiler)();
        if (!zC) return void EC(ZC("shaderPack:compilerUnavailable"));
        FC(zC);
        const QC = (0, MC.toStoredShaderPack)(CC, await (0, gC.c)(zC, CC.files));
        await (0, MC.saveShaderPack)(QC, zC) ? (nC(QC), XC(wC, QC, zC)) : EC(ZC("shaderPack:saveFailed"))
      }));

      function XC(CC, ZC, QC) {
        (function(CC, zC, ZC, QC) {
          return ZC || xC(CC, QC) || xC(zC, QC)
        })(CC, ZC, (0, MC.isShaderPackChangePending)(), QC) && ((0, MC.markShaderPackChangePending)(), zC((() => PC.h)))
      }
      return (0, QC.useEffect)((() => {
        let CC = !1;
        return async function() {
          const zC = (0, oC.hasUsableWebGpuAdapter)(),
            ZC = await (0, SC.e)();
          if (CC) return;
          nC(ZC), KC(!0), vC(!1);
          const QC = null !== ZC ? (0, WC.loadPageShaderPackCompiler)() : null,
            wC = await zC;
          if (CC) return;
          JC(wC);
          const bC = await QC;
          if (!CC && (FC(bC), null !== ZC && wC && null !== bC && (0, MC.shaderPackNeedsCheck)(ZC, bC))) {
            const zC = await (0, gC.b)(ZC, bC);
            CC || nC((CC => CC === ZC ? zC : CC))
          }
        }().catch((zC => {
          console.error("Failed to load the stored shader pack", zC), CC || EC(ZC("shaderPack:unexpectedError"))
        })).finally((() => {
          CC || (vC(!1), KC(!1))
        })), () => {
          CC = !0
        }
      }), []), (0, hC.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, hC.jsx)("div", {
          className: "ShaderPackIntro",
          children: ZC("shaderPack:intro")
        }), (0, hC.jsx)(HC, {
          to: pC.W,
          className: "ShaderPackBrowseLink",
          children: (0, hC.jsx)(bC.o, {
            className: "ShaderPackBrowseButton",
            children: ZC("shaderPackListing:browse")
          })
        }), !1 === AC && (0, hC.jsx)("div", {
          className: "SettingsBoxWarning",
          children: ZC(IC ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== mC && (0, hC.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [ZC("general:error"), ": ", mC]
        }), wC && (0, hC.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, hC.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, hC.jsxs)("div", {
              children: [(0, hC.jsx)("div", {
                className: "ShaderPackName",
                children: wC.manifest.name
              }), wC.manifest.author && (0, hC.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, GC.h)(ZC, "shaderPack:byAuthor", {
                  author: wC.manifest.author
                })
              }), wC.manifest.description && (0, hC.jsx)("div", {
                className: "ShaderPackDescription",
                children: wC.manifest.description
              }), wC.listing && (0, hC.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, hC.jsx)(HC, {
                  to: (0, pC.$)(wC.listing.packId),
                  className: "ShaderPackListingLink",
                  children: ZC("shaderPackListing:openPackPage")
                })
              })]
            }), (0, hC.jsx)(bC.K, {
              disabled: iC || YC,
              onClick: async function() {
                vC(!0), EC(null), await (0, MC.removeShaderPack)(), nC(null), vC(!1), XC(wC, null, qC)
              },
              children: ZC("shaderPack:removePack")
            })]
          }), (0, hC.jsx)(dC, {
            stored: wC,
            checking: eC,
            webGpuUsable: AC,
            changePending: (0, MC.isShaderPackChangePending)(),
            compiler: qC,
            t: ZC
          })]
        }), (0, hC.jsx)(RC.e, {
          busy: iC || YC || eC,
          disabled: iC || YC || eC || !0 !== AC,
          onFiles: lC
        })]
      })
    }

    function HC(CC) {
      let {
        to: zC,
        className: ZC,
        children: QC
      } = CC;
      const {
        gameState: bC
      } = (0, qC.k)(["gameState"]), {
        pathname: fC,
        search: oC
      } = (0, wC.v)(), WC = "landingPage" !== bC && "studio" !== bC;
      return (0, hC.jsx)(nC.LinkPreserveSearch, {
        to: zC,
        className: ZC,
        target: WC ? "_blank" : void 0,
        onClick: () => {
          WC || ((0, pC.J)(`${fC}${oC}`), (0, FC.f)())
        },
        children: QC
      })
    }
  },
  6556: (CC, zC, ZC) => {
    ZC.d(zC, {
      $: () => oC,
      B: () => gC,
      E: () => PC,
      I: () => hC,
      J: () => FC,
      M: () => YC,
      Q: () => SC,
      S: () => uC,
      V: () => XC,
      W: () => nC,
      X: () => cC,
      ab: () => fC,
      db: () => EC,
      e: () => GC,
      f: () => vC,
      gb: () => lC,
      i: () => pC,
      ib: () => RC,
      jb: () => KC,
      m: () => NC,
      q: () => WC,
      r: () => dC,
      u: () => MC,
      w: () => mC,
      z: () => rC
    });
    var QC = ZC(6560),
      wC = ZC(134),
      bC = ZC(4496);
    const nC = "/shader-packs",
      fC = `${nC}/publish`;

    function oC(CC) {
      return `${nC}/${encodeURIComponent(CC)}`
    }
    let qC = null;

    function FC(CC) {
      qC = CC
    }

    function WC() {
      return qC
    }

    function NC() {
      qC = null
    }

    function MC(CC) {
      return CC.playerHasRank("developer") || CC.playerHasRank("admin")
    }
    const gC = ["terrain", "water", "models", "sunShadows", "strict"],
      SC = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function pC(CC, zC) {
      return CC.withFeatures.includes(zC) ? "with" : CC.withoutFeatures.includes(zC) ? "without" : null
    }

    function PC(CC) {
      return null === CC ? "with" : "with" === CC ? "without" : null
    }

    function GC(CC) {
      return "with" === CC ? "only" : null === CC ? "include" : void 0
    }

    function RC(CC, zC) {
      const ZC = pC(CC, zC),
        QC = CC => CC.filter((CC => CC !== zC));
      return {
        withFeatures: null === ZC ? [...CC.withFeatures, zC] : QC(CC.withFeatures),
        withoutFeatures: "with" === ZC ? [...CC.withoutFeatures, zC] : QC(CC.withoutFeatures)
      }
    }
    const AC = "section",
      xC = "sort",
      JC = "filters",
      IC = "q",
      iC = "banned",
      vC = "popular",
      eC = "strict";

    function hC(CC) {
      var zC, ZC, wC;
      const nC = CC.get(AC),
        fC = (null !== (zC = CC.get(JC)) && void 0 !== zC ? zC : eC).split(","),
        oC = CC.get(iC);
      return {
        section: "favourites" === nC || "mine" === nC ? nC : "explore",
        sort: null !== (ZC = QC.x.find((zC => zC === CC.get(xC)))) && void 0 !== ZC ? ZC : vC,
        withFeatures: gC.filter((CC => fC.includes(CC) && !fC.includes(`-${CC}`))),
        withoutFeatures: gC.filter((CC => fC.includes(`-${CC}`))),
        searchQuery: (null === (wC = CC.get(IC)) || void 0 === wC ? void 0 : wC.slice(0, QC.G)) || null,
        pageNumber: (0, bC.f)(CC.get(bC.b)),
        banned: "only" === oC ? "with" : "include" === oC ? null : "without"
      }
    }

    function KC(CC, zC) {
      var ZC;
      const QC = HC(zC);
      (0, bC.i)(CC, AC, "explore" === zC.section ? null : zC.section), (0, bC.i)(CC, xC, zC.sort === vC ? null : zC.sort), (0, bC.i)(CC, JC, QC === eC ? null : QC), (0, bC.i)(CC, IC, zC.searchQuery), (0, bC.i)(CC, iC, null !== (ZC = GC(zC.banned)) && void 0 !== ZC ? ZC : null), (0, bC.l)(CC, zC.pageNumber)
    }

    function YC(CC) {
      const zC = new URLSearchParams;
      return KC(zC, {
        section: "explore",
        sort: vC,
        withFeatures: "strict" === CC ? [CC] : [CC, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${nC}?${zC.toString()}`
    }

    function dC(CC) {
      return HC(CC) === eC
    }

    function mC(CC) {
      return null !== CC.searchQuery || "with" === CC.banned || HC(CC) !== eC
    }

    function HC(CC) {
      return gC.flatMap((zC => {
        const ZC = pC(CC, zC);
        return "with" === ZC ? [zC] : "without" === ZC ? [`-${zC}`] : []
      })).join(",")
    }
    const EC = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      lC = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function XC(CC) {
      return Math.round(100 * Math.max(0, 1 - 1 / CC))
    }

    function cC(CC, zC, ZC, wC) {
      const bC = [];
      CC.isBanned && bC.push({
        tone: "warning",
        text: wC("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: nC
      } = CC;
      if (null === CC.brokenError || nC && !nC.error || bC.push({
          tone: "warning",
          text: wC("shaderPackListing:ownerBroken"),
          detail: CC.brokenError
        }), null !== nC && void 0 !== nC && nC.error) bC.push({
        tone: "warning",
        text: wC(zC ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, QC.i)(nC.error) ? null : nC.error
      });
      else if (nC) {
        const CC = null === nC.renderNotBefore ? 0 : nC.renderNotBefore - ZC,
          QC = String(Math.ceil(CC / 6e4)),
          fC = wC(zC ? CC > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : CC > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: QC
          });
        bC.push({
          tone: "info",
          text: fC,
          detail: null
        })
      }
      return CC.listed || bC.push({
        tone: "info",
        text: wC("shaderPackListing:ownerUnlisted"),
        detail: null
      }), bC
    }

    function uC(CC) {
      return Math.max(1, Math.round(CC / 1024))
    }

    function rC(CC, zC, ZC) {
      return CC instanceof wC.d && CC.errorMessageForUser ? CC.errorMessageForUser : zC(ZC)
    }
  },
  6560: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => nC,
      B: () => QC,
      E: () => NC,
      G: () => FC,
      J: () => AC,
      L: () => WC,
      P: () => qC,
      b: () => gC,
      e: () => pC,
      f: () => SC,
      g: () => MC,
      i: () => RC,
      m: () => JC,
      o: () => oC,
      s: () => wC,
      w: () => xC,
      x: () => bC,
      y: () => fC
    });
    const QC = ["forest", "desert", "water", "night", "cave"];
    const wC = {
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
      bC = ["popular", "updated", "newest"],
      nC = 3,
      fC = 32,
      oC = 300;

    function qC(CC, zC) {
      return CC.slice(0, zC).replace(/[\uD800-\uDBFF]$/, "")
    }
    const FC = 64,
      WC = 512,
      NC = 18e5;

    function MC(CC) {
      const zC = CC,
        ZC = null === zC || void 0 === zC ? void 0 : zC.files;
      return "number" === typeof(null === zC || void 0 === zC ? void 0 : zC.apiVersion) && "string" === typeof zC.name && (null === zC.author || "string" === typeof zC.author) && (void 0 === zC.keepCircleShadows || "boolean" === typeof zC.keepCircleShadows) && "object" === typeof ZC && null !== ZC && Object.values(ZC).every((CC => "string" === typeof CC))
    }
    const gC = "Bloxdhub",
      SC = "https://bloxdhub.com/shaders";

    function pC(CC) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(CC)}`
    }
    const PC = "Screenshot generation failed.",
      GC = "Its screenshots couldn't be generated:";

    function RC(CC) {
      var zC;
      return CC === PC || null !== (zC = null === CC || void 0 === CC ? void 0 : CC.startsWith(GC)) && void 0 !== zC && zC
    }

    function AC(CC, zC) {
      return `shaderPacks/${CC}/${zC}.json`
    }

    function xC(CC, zC, ZC, QC) {
      return null === zC.renderId ? JC(CC, zC.baselineVersion, ZC, QC) : `${CC}/${function(CC,zC,ZC,QC){return`shaderPacks/${CC}/${zC}/${ZC}-${QC}.webp`}(zC.packId,zC.renderId,ZC,QC)}`
    }

    function JC(CC, zC, ZC, QC) {
      return `${CC}/${function(CC,zC,ZC){return`shaderPacks/baseline/${CC}/${zC}-${ZC}.webp`}(zC,ZC,QC)}`
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);