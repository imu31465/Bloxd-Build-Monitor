export const id = 153;
export const ids = [153];
export const modules = {
  42603: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      ShaderPackCategory: () => xR
    });
    var yR = GR(66),
      tR = GR(1677),
      uR = GR(1590),
      ZR = GR(1663),
      qR = GR(1270),
      iR = GR(103),
      fR = GR(25),
      VR = GR(1800),
      KR = GR(7756),
      wR = GR(342),
      rR = GR(7800),
      eR = GR(7792),
      aR = GR(7802),
      LR = GR(7697),
      nR = GR(6037),
      UR = GR(6076),
      WR = GR(7750),
      AR = GR(4781);

    function CR(RR, JR) {
      const GR = (0, rR.storedPackOutcome)(RR, JR);
      return "none" !== GR.kind || "noCompiler" === GR.reason
    }
    var XR = GR(1163),
      MR = GR.n(XR),
      BR = GR(6080),
      lR = GR(1468),
      pR = GR(7743),
      gR = GR(1378);
    const bR = {
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

    function vR(RR, JR) {
      return "failedRecheck" === RR && JR.listing ? "shaderPack:statusFailedRecheckListed" : bR[RR]
    }

    function OR(RR) {
      let {
        stored: JR,
        checking: GR,
        webGpuUsable: yR,
        changePending: tR,
        compiler: uR,
        t: ZR
      } = RR;
      const qR = function(RR, JR, GR, yR, tR) {
          const uR = (0, rR.storedPackOutcome)(RR, tR);
          return "none" === uR.kind ? "noCompiler" === uR.reason ? JR ? "checking" : "noCompiler" : "otherApiVersion" === uR.reason ? "wrongApiVersion" : "failed" : (0, AR.f)() ? "harnessBuild" : "blocked" === uR.kind ? (0, rR.shaderPackNeedsCheck)(RR, tR) ? JR ? "checking" : !1 === GR ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === GR ? "offNoWebGpu" : yR ? "readyAfterReload" : "ready"
        }(JR, GR, yR, tR, uR),
        iR = "failed" === qR || "failedRecheck" === qR,
        fR = iR || "wrongApiVersion" === qR || "noCompiler" === qR,
        VR = "ready" === qR || "readyAfterReload" === qR ? JR.validation.offInStrict : [];
      return (0, gR.jsxs)(gR.Fragment, {
        children: [(0, gR.jsxs)("div", {
          className: MR()("ShaderPackStatus", {
            Ready: "ready" === qR,
            Failed: fR
          }),
          children: ["ready" === qR && (0, gR.jsx)(lR.d, {
            name: "circle-check"
          }), fR && (0, gR.jsx)(lR.d, {
            name: "triangle-exclamation"
          }), "harnessBuild" === qR ? (0, AR.e)() : ZR(vR(qR, JR), {
            packVersion: String(JR.manifest.apiVersion),
            version: String(BR.c)
          })]
        }), iR && (0, gR.jsx)(pR.c, {
          diagnostics: JR.validation.errors,
          more: JR.validation.moreErrors,
          t: ZR
        }), VR.length > 0 && (0, gR.jsxs)(gR.Fragment, {
          children: [(0, gR.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, gR.jsx)(lR.d, {
              name: "triangle-exclamation"
            }), ZR("shaderPack:offInStrict")]
          }), (0, gR.jsx)(pR.c, {
            diagnostics: VR,
            t: ZR
          })]
        })]
      })
    }

    function xR(RR) {
      let {
        setApplySettingsCallback: JR
      } = RR;
      const {
        t: GR
      } = (0, qR.A)(), [tR, ZR] = (0, yR.useState)(null), [fR, VR] = (0, yR.useState)(null), [AR, XR] = (0, yR.useState)(null), [MR] = (0, yR.useState)(wR.j), [BR, lR] = (0, yR.useState)(!0), [pR, bR] = (0, yR.useState)(!1), {
        loading: vR,
        error: xR,
        setError: DR,
        onFiles: HR
      } = (0, WR.i)((async RR => {
        const JR = await (0, KR.loadPageShaderPackCompiler)();
        if (!JR) return void DR(GR("shaderPack:compilerUnavailable"));
        VR(JR);
        const yR = (0, rR.toStoredShaderPack)(RR, await (0, eR.h)(JR, RR.files));
        await (0, rR.saveShaderPack)(yR, JR) ? (ZR(yR), oR(tR, yR, JR)) : DR(GR("shaderPack:saveFailed"))
      }));

      function oR(RR, GR, yR) {
        (function(RR, JR, GR, yR) {
          return GR || CR(RR, yR) || CR(JR, yR)
        })(RR, GR, (0, rR.isShaderPackChangePending)(), yR) && ((0, rR.markShaderPackChangePending)(), JR((() => nR.m)))
      }
      return (0, yR.useEffect)((() => {
        let RR = !1;
        return async function() {
          const JR = (0, iR.hasUsableWebGpuAdapter)(),
            GR = await (0, aR.d)();
          if (RR) return;
          ZR(GR), bR(!0), lR(!1);
          const yR = null !== GR ? (0, KR.loadPageShaderPackCompiler)() : null,
            tR = await JR;
          if (RR) return;
          XR(tR);
          const uR = await yR;
          if (!RR && (VR(uR), null !== GR && tR && null !== uR && (0, rR.shaderPackNeedsCheck)(GR, uR))) {
            const JR = await (0, eR.d)(GR, uR);
            RR || ZR((RR => RR === GR ? JR : RR))
          }
        }().catch((JR => {
          console.error("Failed to load the stored shader pack", JR), RR || DR(GR("shaderPack:unexpectedError"))
        })).finally((() => {
          RR || (lR(!1), bR(!1))
        })), () => {
          RR = !0
        }
      }), []), (0, gR.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, gR.jsx)("div", {
          className: "ShaderPackIntro",
          children: GR("shaderPack:intro")
        }), (0, gR.jsx)(NR, {
          to: LR.Z,
          className: "ShaderPackBrowseLink",
          children: (0, gR.jsx)(uR.n, {
            className: "ShaderPackBrowseButton",
            children: GR("shaderPackListing:browse")
          })
        }), !1 === AR && (0, gR.jsx)("div", {
          className: "SettingsBoxWarning",
          children: GR(MR ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== xR && (0, gR.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [GR("general:error"), ": ", xR]
        }), tR && (0, gR.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, gR.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, gR.jsxs)("div", {
              children: [(0, gR.jsx)("div", {
                className: "ShaderPackName",
                children: tR.manifest.name
              }), tR.manifest.author && (0, gR.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, UR.d)(GR, "shaderPack:byAuthor", {
                  author: tR.manifest.author
                })
              }), tR.manifest.description && (0, gR.jsx)("div", {
                className: "ShaderPackDescription",
                children: tR.manifest.description
              }), tR.listing && (0, gR.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, gR.jsx)(NR, {
                  to: (0, LR.ab)(tR.listing.packId),
                  className: "ShaderPackListingLink",
                  children: GR("shaderPackListing:openPackPage")
                })
              })]
            }), (0, gR.jsx)(uR.O, {
              disabled: BR || vR,
              onClick: async function() {
                lR(!0), DR(null), await (0, rR.removeShaderPack)(), ZR(null), lR(!1), oR(tR, null, fR)
              },
              children: GR("shaderPack:removePack")
            })]
          }), (0, gR.jsx)(OR, {
            stored: tR,
            checking: pR,
            webGpuUsable: AR,
            changePending: (0, rR.isShaderPackChangePending)(),
            compiler: fR,
            t: GR
          })]
        }), (0, gR.jsx)(WR.e, {
          busy: BR || vR || pR,
          disabled: BR || vR || pR || !0 !== AR,
          onFiles: HR
        })]
      })
    }

    function NR(RR) {
      let {
        to: JR,
        className: GR,
        children: yR
      } = RR;
      const {
        gameState: uR
      } = (0, fR.o)(["gameState"]), {
        pathname: qR,
        search: iR
      } = (0, tR.r)(), KR = "landingPage" !== uR && "studio" !== uR;
      return (0, gR.jsx)(ZR.LinkPreserveSearch, {
        to: JR,
        className: GR,
        target: KR ? "_blank" : void 0,
        onClick: () => {
          KR || ((0, LR.Q)(`${qR}${iR}`), (0, VR.e)())
        },
        children: yR
      })
    }
  },
  7697: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => xR,
      F: () => IR,
      I: () => eR,
      K: () => nR,
      M: () => gR,
      Q: () => VR,
      R: () => vR,
      T: () => aR,
      V: () => PR,
      W: () => oR,
      Z: () => ZR,
      _: () => cR,
      ab: () => iR,
      bb: () => qR,
      db: () => DR,
      e: () => UR,
      h: () => lR,
      hb: () => HR,
      jb: () => WR,
      kb: () => bR,
      l: () => LR,
      p: () => wR,
      s: () => KR,
      u: () => OR,
      x: () => rR
    });
    var yR = GR(7702),
      tR = GR(163),
      uR = GR(5368);
    const ZR = "/shader-packs",
      qR = `${ZR}/publish`;

    function iR(RR) {
      return `${ZR}/${encodeURIComponent(RR)}`
    }
    let fR = null;

    function VR(RR) {
      fR = RR
    }

    function KR() {
      return fR
    }

    function wR() {
      fR = null
    }

    function rR(RR) {
      return RR.playerHasRank("developer") || RR.playerHasRank("admin")
    }
    const eR = ["terrain", "water", "models", "sunShadows", "strict"],
      aR = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function LR(RR, JR) {
      return RR.withFeatures.includes(JR) ? "with" : RR.withoutFeatures.includes(JR) ? "without" : null
    }

    function nR(RR) {
      return null === RR ? "with" : "with" === RR ? "without" : null
    }

    function UR(RR) {
      return "with" === RR ? "only" : null === RR ? "include" : void 0
    }

    function WR(RR, JR) {
      const GR = LR(RR, JR),
        yR = RR => RR.filter((RR => RR !== JR));
      return {
        withFeatures: null === GR ? [...RR.withFeatures, JR] : yR(RR.withFeatures),
        withoutFeatures: "with" === GR ? [...RR.withoutFeatures, JR] : yR(RR.withoutFeatures)
      }
    }
    const AR = "section",
      CR = "sort",
      XR = "filters",
      MR = "q",
      BR = "banned",
      lR = "popular",
      pR = "strict";

    function gR(RR) {
      var JR, GR, tR;
      const ZR = RR.get(AR),
        qR = (null !== (JR = RR.get(XR)) && void 0 !== JR ? JR : pR).split(","),
        iR = RR.get(BR);
      return {
        section: "favourites" === ZR || "mine" === ZR ? ZR : "explore",
        sort: null !== (GR = yR.v.find((JR => JR === RR.get(CR)))) && void 0 !== GR ? GR : lR,
        withFeatures: eR.filter((RR => qR.includes(RR) && !qR.includes(`-${RR}`))),
        withoutFeatures: eR.filter((RR => qR.includes(`-${RR}`))),
        searchQuery: (null === (tR = RR.get(MR)) || void 0 === tR ? void 0 : tR.slice(0, yR.E)) || null,
        pageNumber: (0, uR.g)(RR.get(uR.c)),
        banned: "only" === iR ? "with" : "include" === iR ? null : "without"
      }
    }

    function bR(RR, JR) {
      var GR;
      const yR = NR(JR);
      (0, uR.h)(RR, AR, "explore" === JR.section ? null : JR.section), (0, uR.h)(RR, CR, JR.sort === lR ? null : JR.sort), (0, uR.h)(RR, XR, yR === pR ? null : yR), (0, uR.h)(RR, MR, JR.searchQuery), (0, uR.h)(RR, BR, null !== (GR = UR(JR.banned)) && void 0 !== GR ? GR : null), (0, uR.l)(RR, JR.pageNumber)
    }

    function vR(RR) {
      const JR = new URLSearchParams;
      return bR(JR, {
        section: "explore",
        sort: lR,
        withFeatures: "strict" === RR ? [RR] : [RR, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${ZR}?${JR.toString()}`
    }

    function OR(RR) {
      return NR(RR) === pR
    }

    function xR(RR) {
      return null !== RR.searchQuery || "with" === RR.banned || NR(RR) !== pR
    }

    function NR(RR) {
      return eR.flatMap((JR => {
        const GR = LR(RR, JR);
        return "with" === GR ? [JR] : "without" === GR ? [`-${JR}`] : []
      })).join(",")
    }
    const DR = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      HR = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function oR(RR) {
      return Math.round(100 * Math.max(0, 1 - 1 / RR))
    }

    function cR(RR, JR, GR, tR) {
      const uR = [];
      RR.isBanned && uR.push({
        tone: "warning",
        text: tR("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: ZR
      } = RR;
      if (null === RR.brokenError || ZR && !ZR.error || uR.push({
          tone: "warning",
          text: tR("shaderPackListing:ownerBroken"),
          detail: RR.brokenError
        }), null !== ZR && void 0 !== ZR && ZR.error) uR.push({
        tone: "warning",
        text: tR(JR ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, yR.n)(ZR.error) ? null : ZR.error
      });
      else if (ZR) {
        const RR = null === ZR.renderNotBefore ? 0 : ZR.renderNotBefore - GR,
          yR = String(Math.ceil(RR / 6e4)),
          qR = tR(JR ? RR > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : RR > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: yR
          });
        uR.push({
          tone: "info",
          text: qR,
          detail: null
        })
      }
      return RR.listed || uR.push({
        tone: "info",
        text: tR("shaderPackListing:ownerUnlisted"),
        detail: null
      }), uR
    }

    function PR(RR) {
      return Math.max(1, Math.round(RR / 1024))
    }

    function IR(RR, JR, GR) {
      return RR instanceof tR.d && RR.errorMessageForUser ? RR.errorMessageForUser : JR(GR)
    }
  },
  7702: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => yR,
      C: () => wR,
      E: () => VR,
      I: () => AR,
      M: () => KR,
      N: () => fR,
      d: () => eR,
      e: () => LR,
      i: () => aR,
      j: () => rR,
      n: () => WR,
      p: () => XR,
      q: () => iR,
      s: () => tR,
      u: () => CR,
      v: () => uR,
      w: () => qR,
      z: () => ZR
    });
    const yR = ["forest", "desert", "water", "night", "cave"];
    const tR = {
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
      uR = ["popular", "updated", "newest"],
      ZR = 3,
      qR = 32,
      iR = 300;

    function fR(RR, JR) {
      return RR.slice(0, JR).replace(/[\uD800-\uDBFF]$/, "")
    }
    const VR = 64,
      KR = 512,
      wR = 18e5;

    function rR(RR) {
      const JR = RR,
        GR = null === JR || void 0 === JR ? void 0 : JR.files;
      return "number" === typeof(null === JR || void 0 === JR ? void 0 : JR.apiVersion) && "string" === typeof JR.name && (null === JR.author || "string" === typeof JR.author) && (void 0 === JR.keepCircleShadows || "boolean" === typeof JR.keepCircleShadows) && "object" === typeof GR && null !== GR && Object.values(GR).every((RR => "string" === typeof RR))
    }
    const eR = "Bloxdhub",
      aR = "https://bloxdhub.com/shaders";

    function LR(RR) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(RR)}`
    }
    const nR = "Screenshot generation failed.",
      UR = "Its screenshots couldn't be generated:";

    function WR(RR) {
      var JR;
      return RR === nR || null !== (JR = null === RR || void 0 === RR ? void 0 : RR.startsWith(UR)) && void 0 !== JR && JR
    }

    function AR(RR, JR) {
      return `shaderPacks/${RR}/${JR}.json`
    }

    function CR(RR, JR, GR, yR) {
      return null === JR.renderId ? XR(RR, JR.baselineVersion, GR, yR) : `${RR}/${function(RR,JR,GR,yR){return`shaderPacks/${RR}/${JR}/${GR}-${yR}.webp`}(JR.packId,JR.renderId,GR,yR)}`
    }

    function XR(RR, JR, GR, yR) {
      return `${RR}/${function(RR,JR,GR){return`shaderPacks/baseline/${RR}/${JR}-${GR}.webp`}(JR,GR,yR)}`
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);