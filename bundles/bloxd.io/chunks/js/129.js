export const id = 129;
export const ids = [129];
export const modules = {
  40991: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      ShaderPackCategory: () => jD
    });
    var pD = wD(58),
      sD = wD(1523),
      KD = wD(1447),
      rD = wD(1511),
      LD = wD(1200),
      cD = wD(103),
      gD = wD(20),
      RD = wD(1648),
      AD = wD(6645),
      UD = wD(323),
      fD = wD(6691),
      ID = wD(6682),
      BD = wD(6693),
      GD = wD(6590),
      hD = wD(5021),
      nD = wD(5070),
      MD = wD(6637),
      OD = wD(3466);

    function JD(DD, zD) {
      const wD = (0, fD.storedPackOutcome)(DD, zD);
      return "none" !== wD.kind || "noCompiler" === wD.reason
    }
    var ED = wD(1044),
      QD = wD.n(ED),
      XD = wD(5076),
      VD = wD(1057),
      PD = wD(6630),
      CD = wD(1096);
    const xD = {
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

    function TD(DD, zD) {
      return "failedRecheck" === DD && zD.listing ? "shaderPack:statusFailedRecheckListed" : xD[DD]
    }

    function bD(DD) {
      let {
        stored: zD,
        checking: wD,
        webGpuUsable: pD,
        changePending: sD,
        compiler: KD,
        t: rD
      } = DD;
      const LD = function(DD, zD, wD, pD, sD) {
          const KD = (0, fD.storedPackOutcome)(DD, sD);
          return "none" === KD.kind ? "noCompiler" === KD.reason ? zD ? "checking" : "noCompiler" : "otherApiVersion" === KD.reason ? "wrongApiVersion" : "failed" : (0, OD.f)() ? "harnessBuild" : "blocked" === KD.kind ? (0, fD.shaderPackNeedsCheck)(DD, sD) ? zD ? "checking" : !1 === wD ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === wD ? "offNoWebGpu" : pD ? "readyAfterReload" : "ready"
        }(zD, wD, pD, sD, KD),
        cD = "failed" === LD || "failedRecheck" === LD,
        gD = cD || "wrongApiVersion" === LD || "noCompiler" === LD,
        RD = "ready" === LD || "readyAfterReload" === LD ? zD.validation.offInStrict : [];
      return (0, CD.jsxs)(CD.Fragment, {
        children: [(0, CD.jsxs)("div", {
          className: QD()("ShaderPackStatus", {
            Ready: "ready" === LD,
            Failed: gD
          }),
          children: ["ready" === LD && (0, CD.jsx)(VD.e, {
            name: "circle-check"
          }), gD && (0, CD.jsx)(VD.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === LD ? (0, OD.b)() : rD(TD(LD, zD), {
            packVersion: String(zD.manifest.apiVersion),
            version: String(XD.b)
          })]
        }), cD && (0, CD.jsx)(PD.b, {
          diagnostics: zD.validation.errors,
          more: zD.validation.moreErrors,
          t: rD
        }), RD.length > 0 && (0, CD.jsxs)(CD.Fragment, {
          children: [(0, CD.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, CD.jsx)(VD.e, {
              name: "triangle-exclamation"
            }), rD("shaderPack:offInStrict")]
          }), (0, CD.jsx)(PD.b, {
            diagnostics: RD,
            t: rD
          })]
        })]
      })
    }

    function jD(DD) {
      let {
        setApplySettingsCallback: zD
      } = DD;
      const {
        t: wD
      } = (0, LD.E)(), [sD, rD] = (0, pD.useState)(null), [gD, RD] = (0, pD.useState)(null), [OD, ED] = (0, pD.useState)(null), [QD] = (0, pD.useState)(UD.i), [XD, VD] = (0, pD.useState)(!0), [PD, xD] = (0, pD.useState)(!1), {
        loading: TD,
        error: jD,
        setError: SD,
        onFiles: iD
      } = (0, MD.f)((async DD => {
        const zD = await (0, AD.loadPageShaderPackCompiler)();
        if (!zD) return void SD(wD("shaderPack:compilerUnavailable"));
        RD(zD);
        const pD = (0, fD.toStoredShaderPack)(DD, await (0, ID.h)(zD, DD.files));
        await (0, fD.saveShaderPack)(pD, zD) ? (rD(pD), lD(sD, pD, zD)) : SD(wD("shaderPack:saveFailed"))
      }));

      function lD(DD, wD, pD) {
        (function(DD, zD, wD, pD) {
          return wD || JD(DD, pD) || JD(zD, pD)
        })(DD, wD, (0, fD.isShaderPackChangePending)(), pD) && ((0, fD.markShaderPackChangePending)(), zD((() => hD.g)))
      }
      return (0, pD.useEffect)((() => {
        let DD = !1;
        return async function() {
          const zD = (0, cD.hasUsableWebGpuAdapter)(),
            wD = await (0, BD.c)();
          if (DD) return;
          rD(wD), xD(!0), VD(!1);
          const pD = null !== wD ? (0, AD.loadPageShaderPackCompiler)() : null,
            sD = await zD;
          if (DD) return;
          ED(sD);
          const KD = await pD;
          if (!DD && (RD(KD), null !== wD && sD && null !== KD && (0, fD.shaderPackNeedsCheck)(wD, KD))) {
            const zD = await (0, ID.d)(wD, KD);
            DD || rD((DD => DD === wD ? zD : DD))
          }
        }().catch((zD => {
          console.error("Failed to load the stored shader pack", zD), DD || SD(wD("shaderPack:unexpectedError"))
        })).finally((() => {
          DD || (VD(!1), xD(!1))
        })), () => {
          DD = !0
        }
      }), []), (0, CD.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, CD.jsx)("div", {
          className: "ShaderPackIntro",
          children: wD("shaderPack:intro")
        }), (0, CD.jsx)(dD, {
          to: GD.S,
          className: "ShaderPackBrowseLink",
          children: (0, CD.jsx)(KD.o, {
            className: "ShaderPackBrowseButton",
            children: wD("shaderPackListing:browse")
          })
        }), !1 === OD && (0, CD.jsx)("div", {
          className: "SettingsBoxWarning",
          children: wD(QD ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== jD && (0, CD.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [wD("general:error"), ": ", jD]
        }), sD && (0, CD.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, CD.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, CD.jsxs)("div", {
              children: [(0, CD.jsx)("div", {
                className: "ShaderPackName",
                children: sD.manifest.name
              }), sD.manifest.author && (0, CD.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, nD.i)(wD, "shaderPack:byAuthor", {
                  author: sD.manifest.author
                })
              }), sD.manifest.description && (0, CD.jsx)("div", {
                className: "ShaderPackDescription",
                children: sD.manifest.description
              }), sD.listing && (0, CD.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, CD.jsx)(dD, {
                  to: (0, GD.Y)(sD.listing.packId),
                  className: "ShaderPackListingLink",
                  children: wD("shaderPackListing:openPackPage")
                })
              })]
            }), (0, CD.jsx)(KD.T, {
              disabled: XD || TD,
              onClick: async function() {
                VD(!0), SD(null), await (0, fD.removeShaderPack)(), rD(null), VD(!1), lD(sD, null, gD)
              },
              children: wD("shaderPack:removePack")
            })]
          }), (0, CD.jsx)(bD, {
            stored: sD,
            checking: PD,
            webGpuUsable: OD,
            changePending: (0, fD.isShaderPackChangePending)(),
            compiler: gD,
            t: wD
          })]
        }), (0, CD.jsx)(MD.e, {
          busy: XD || TD || PD,
          disabled: XD || TD || PD || !0 !== OD,
          onFiles: iD
        })]
      })
    }

    function dD(DD) {
      let {
        to: zD,
        className: wD,
        children: pD
      } = DD;
      const {
        gameState: KD
      } = (0, gD.n)(["gameState"]), {
        pathname: LD,
        search: cD
      } = (0, sD.s)(), AD = "landingPage" !== KD && "studio" !== KD;
      return (0, CD.jsx)(rD.LinkPreserveSearch, {
        to: zD,
        className: wD,
        target: AD ? "_blank" : void 0,
        onClick: () => {
          AD || ((0, GD.E)(`${LD}${cD}`), (0, RD.i)())
        },
        children: pD
      })
    }
  },
  6590: (DD, zD, wD) => {
    wD.d(zD, {
      $: () => LD,
      B: () => CD,
      E: () => RD,
      F: () => TD,
      I: () => BD,
      L: () => ND,
      P: () => lD,
      S: () => rD,
      V: () => WD,
      Y: () => cD,
      c: () => nD,
      cb: () => SD,
      g: () => VD,
      gb: () => iD,
      i: () => GD,
      k: () => UD,
      kb: () => MD,
      lb: () => xD,
      m: () => AD,
      o: () => bD,
      q: () => fD,
      t: () => jD,
      u: () => ZD,
      w: () => ID,
      x: () => hD
    });
    var pD = wD(6594),
      sD = wD(157),
      KD = wD(4576);
    const rD = "/shader-packs",
      LD = `${rD}/publish`;

    function cD(DD) {
      return `${rD}/${encodeURIComponent(DD)}`
    }
    let gD = null;

    function RD(DD) {
      gD = DD
    }

    function AD() {
      return gD
    }

    function UD() {
      gD = null
    }

    function fD(DD) {
      return DD.playerHasRank("developer") || DD.playerHasRank("admin")
    }
    const ID = ["terrain", "water", "models", "sunShadows", "strict"],
      BD = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function GD(DD, zD) {
      return DD.withFeatures.includes(zD) ? "with" : DD.withoutFeatures.includes(zD) ? "without" : null
    }

    function hD(DD) {
      return null === DD ? "with" : "with" === DD ? "without" : null
    }

    function nD(DD) {
      return "with" === DD ? "only" : null === DD ? "include" : void 0
    }

    function MD(DD, zD) {
      const wD = GD(DD, zD),
        pD = DD => DD.filter((DD => DD !== zD));
      return {
        withFeatures: null === wD ? [...DD.withFeatures, zD] : pD(DD.withFeatures),
        withoutFeatures: "with" === wD ? [...DD.withoutFeatures, zD] : pD(DD.withoutFeatures)
      }
    }
    const OD = "section",
      JD = "sort",
      ED = "filters",
      QD = "q",
      XD = "banned",
      VD = "popular",
      PD = "strict";

    function CD(DD) {
      var zD, wD, sD;
      const rD = DD.get(OD),
        LD = (null !== (zD = DD.get(ED)) && void 0 !== zD ? zD : PD).split(","),
        cD = DD.get(XD);
      return {
        section: "favourites" === rD || "mine" === rD ? rD : "explore",
        sort: null !== (wD = pD.A.find((zD => zD === DD.get(JD)))) && void 0 !== wD ? wD : VD,
        withFeatures: ID.filter((DD => LD.includes(DD) && !LD.includes(`-${DD}`))),
        withoutFeatures: ID.filter((DD => LD.includes(`-${DD}`))),
        searchQuery: (null === (sD = DD.get(QD)) || void 0 === sD ? void 0 : sD.slice(0, pD.K)) || null,
        pageNumber: (0, KD.g)(DD.get(KD.d)),
        banned: "only" === cD ? "with" : "include" === cD ? null : "without"
      }
    }

    function xD(DD, zD) {
      var wD;
      const pD = dD(zD);
      (0, KD.j)(DD, OD, "explore" === zD.section ? null : zD.section), (0, KD.j)(DD, JD, zD.sort === VD ? null : zD.sort), (0, KD.j)(DD, ED, pD === PD ? null : pD), (0, KD.j)(DD, QD, zD.searchQuery), (0, KD.j)(DD, XD, null !== (wD = nD(zD.banned)) && void 0 !== wD ? wD : null), (0, KD.n)(DD, zD.pageNumber)
    }

    function TD(DD) {
      const zD = new URLSearchParams;
      return xD(zD, {
        section: "explore",
        sort: VD,
        withFeatures: "strict" === DD ? [DD] : [DD, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${rD}?${zD.toString()}`
    }

    function bD(DD) {
      return dD(DD) === PD
    }

    function jD(DD) {
      return null !== DD.searchQuery || "with" === DD.banned || dD(DD) !== PD
    }

    function dD(DD) {
      return ID.flatMap((zD => {
        const wD = GD(DD, zD);
        return "with" === wD ? [zD] : "without" === wD ? [`-${zD}`] : []
      })).join(",")
    }
    const SD = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      iD = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function lD(DD) {
      return Math.round(100 * Math.max(0, 1 - 1 / DD))
    }

    function WD(DD, zD, wD, sD) {
      const KD = [];
      DD.isBanned && KD.push({
        tone: "warning",
        text: sD("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: rD
      } = DD;
      if (null === DD.brokenError || rD && !rD.error || KD.push({
          tone: "warning",
          text: sD("shaderPackListing:ownerBroken"),
          detail: DD.brokenError
        }), null !== rD && void 0 !== rD && rD.error) KD.push({
        tone: "warning",
        text: sD(zD ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, pD.k)(rD.error) ? null : rD.error
      });
      else if (rD) {
        const DD = null === rD.renderNotBefore ? 0 : rD.renderNotBefore - wD,
          pD = String(Math.ceil(DD / 6e4)),
          LD = sD(zD ? DD > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : DD > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: pD
          });
        KD.push({
          tone: "info",
          text: LD,
          detail: null
        })
      }
      return DD.listed || KD.push({
        tone: "info",
        text: sD("shaderPackListing:ownerUnlisted"),
        detail: null
      }), KD
    }

    function ND(DD) {
      return Math.max(1, Math.round(DD / 1024))
    }

    function ZD(DD, zD, wD) {
      return DD instanceof sD.c && DD.errorMessageForUser ? DD.errorMessageForUser : zD(wD)
    }
  },
  6594: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => KD,
      C: () => LD,
      G: () => rD,
      H: () => pD,
      I: () => UD,
      K: () => RD,
      M: () => OD,
      N: () => AD,
      R: () => gD,
      d: () => ID,
      f: () => GD,
      g: () => BD,
      i: () => fD,
      k: () => MD,
      l: () => ED,
      p: () => cD,
      s: () => sD,
      w: () => JD
    });
    const pD = ["forest", "desert", "water", "night", "cave"];
    const sD = {
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
      KD = ["popular", "updated", "newest"],
      rD = 3,
      LD = 32,
      cD = 300;

    function gD(DD, zD) {
      return DD.slice(0, zD).replace(/[\uD800-\uDBFF]$/, "")
    }
    const RD = 64,
      AD = 512,
      UD = 18e5;

    function fD(DD) {
      const zD = DD,
        wD = null === zD || void 0 === zD ? void 0 : zD.files;
      return "number" === typeof(null === zD || void 0 === zD ? void 0 : zD.apiVersion) && "string" === typeof zD.name && (null === zD.author || "string" === typeof zD.author) && (void 0 === zD.keepCircleShadows || "boolean" === typeof zD.keepCircleShadows) && "object" === typeof wD && null !== wD && Object.values(wD).every((DD => "string" === typeof DD))
    }
    const ID = "Bloxdhub",
      BD = "https://bloxdhub.com/shaders";

    function GD(DD) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
    }
    const hD = "Screenshot generation failed.",
      nD = "Its screenshots couldn't be generated:";

    function MD(DD) {
      var zD;
      return DD === hD || null !== (zD = null === DD || void 0 === DD ? void 0 : DD.startsWith(nD)) && void 0 !== zD && zD
    }

    function OD(DD, zD) {
      return `shaderPacks/${DD}/${zD}.json`
    }

    function JD(DD, zD, wD, pD) {
      return null === zD.renderId ? ED(DD, zD.baselineVersion, wD, pD) : `${DD}/${function(DD,zD,wD,pD){return`shaderPacks/${DD}/${zD}/${wD}-${pD}.webp`}(zD.packId,zD.renderId,wD,pD)}`
    }

    function ED(DD, zD, wD, pD) {
      return `${DD}/${function(DD,zD,wD){return`shaderPacks/baseline/${DD}/${zD}-${wD}.webp`}(zD,wD,pD)}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);