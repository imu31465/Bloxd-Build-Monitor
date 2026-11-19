export const id = 122;
export const ids = [122];
export const modules = {
  40151: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      ShaderPackCategory: () => aD
    });
    var ID = cD(53),
      pD = cD(1517),
      iD = cD(1442),
      fD = cD(1508),
      bD = cD(1192),
      QD = cD(90),
      wD = cD(16),
      SD = cD(1627),
      BD = cD(6366),
      yD = cD(298),
      MD = cD(6404),
      tD = cD(6401),
      ZD = cD(6409),
      oD = cD(6291),
      vD = cD(4770),
      ND = cD(6354),
      gD = cD(6362),
      XD = cD(3260);

    function mD(DD, CD) {
      const cD = (0, MD.storedPackOutcome)(DD, CD);
      return "none" !== cD.kind || "noCompiler" === cD.reason
    }
    var nD = cD(1049),
      OD = cD.n(nD),
      PD = cD(6356),
      HD = cD(1064),
      UD = cD(6350),
      xD = cD(1093);
    const qD = {
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

    function JD(DD, CD) {
      return "failedRecheck" === DD && CD.listing ? "shaderPack:statusFailedRecheckListed" : qD[DD]
    }

    function KD(DD) {
      let {
        stored: CD,
        checking: cD,
        webGpuUsable: ID,
        changePending: pD,
        compiler: iD,
        t: fD
      } = DD;
      const bD = function(DD, CD, cD, ID, pD) {
          const iD = (0, MD.storedPackOutcome)(DD, pD);
          return "none" === iD.kind ? "noCompiler" === iD.reason ? CD ? "checking" : "noCompiler" : "otherApiVersion" === iD.reason ? "wrongApiVersion" : "failed" : (0, XD.d)() ? "harnessBuild" : "blocked" === iD.kind ? (0, MD.shaderPackNeedsCheck)(DD, pD) ? CD ? "checking" : !1 === cD ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === cD ? "offNoWebGpu" : ID ? "readyAfterReload" : "ready"
        }(CD, cD, ID, pD, iD),
        QD = "failed" === bD || "failedRecheck" === bD,
        wD = QD || "wrongApiVersion" === bD || "noCompiler" === bD,
        SD = "ready" === bD || "readyAfterReload" === bD ? CD.validation.offInStrict : [];
      return (0, xD.jsxs)(xD.Fragment, {
        children: [(0, xD.jsxs)("div", {
          className: OD()("ShaderPackStatus", {
            Ready: "ready" === bD,
            Failed: wD
          }),
          children: ["ready" === bD && (0, xD.jsx)(HD.c, {
            name: "circle-check"
          }), wD && (0, xD.jsx)(HD.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === bD ? (0, XD.c)() : fD(JD(bD, CD), {
            packVersion: String(CD.manifest.apiVersion),
            version: String(PD.c)
          })]
        }), QD && (0, xD.jsx)(UD.b, {
          diagnostics: CD.validation.errors,
          more: CD.validation.moreErrors,
          t: fD
        }), SD.length > 0 && (0, xD.jsxs)(xD.Fragment, {
          children: [(0, xD.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, xD.jsx)(HD.c, {
              name: "triangle-exclamation"
            }), fD("shaderPack:offInStrict")]
          }), (0, xD.jsx)(UD.b, {
            diagnostics: SD,
            t: fD
          })]
        })]
      })
    }

    function aD(DD) {
      let {
        setApplySettingsCallback: CD
      } = DD;
      const {
        t: cD
      } = (0, bD.F)(), [pD, fD] = (0, ID.useState)(null), [wD, SD] = (0, ID.useState)(null), [XD, nD] = (0, ID.useState)(null), [OD] = (0, ID.useState)(yD.f), [PD, HD] = (0, ID.useState)(!0), [UD, qD] = (0, ID.useState)(!1), {
        loading: JD,
        error: aD,
        setError: zD,
        onFiles: jD
      } = (0, gD.e)((async DD => {
        const CD = await (0, BD.loadPageShaderPackCompiler)();
        if (!CD) return void zD(cD("shaderPack:compilerUnavailable"));
        SD(CD);
        const ID = (0, MD.toStoredShaderPack)(DD, await (0, tD.f)(CD, DD.files));
        await (0, MD.saveShaderPack)(ID, CD) ? (fD(ID), lD(pD, ID, CD)) : zD(cD("shaderPack:saveFailed"))
      }));

      function lD(DD, cD, ID) {
        (function(DD, CD, cD, ID) {
          return cD || mD(DD, ID) || mD(CD, ID)
        })(DD, cD, (0, MD.isShaderPackChangePending)(), ID) && ((0, MD.markShaderPackChangePending)(), CD((() => vD.j)))
      }
      return (0, ID.useEffect)((() => {
        let DD = !1;
        return async function() {
          const CD = (0, QD.hasUsableWebGpuAdapter)(),
            cD = await (0, ZD.d)();
          if (DD) return;
          fD(cD), qD(!0), HD(!1);
          const ID = null !== cD ? (0, BD.loadPageShaderPackCompiler)() : null,
            pD = await CD;
          if (DD) return;
          nD(pD);
          const iD = await ID;
          if (!DD && (SD(iD), null !== cD && pD && null !== iD && (0, MD.shaderPackNeedsCheck)(cD, iD))) {
            const CD = await (0, tD.b)(cD, iD);
            DD || fD((DD => DD === cD ? CD : DD))
          }
        }().catch((CD => {
          console.error("Failed to load the stored shader pack", CD), DD || zD(cD("shaderPack:unexpectedError"))
        })).finally((() => {
          DD || (HD(!1), qD(!1))
        })), () => {
          DD = !0
        }
      }), []), (0, xD.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, xD.jsx)("div", {
          className: "ShaderPackIntro",
          children: cD("shaderPack:intro")
        }), (0, xD.jsx)(VD, {
          to: oD.W,
          className: "ShaderPackBrowseLink",
          children: (0, xD.jsx)(iD.o, {
            className: "ShaderPackBrowseButton",
            children: cD("shaderPackListing:browse")
          })
        }), !1 === XD && (0, xD.jsx)("div", {
          className: "SettingsBoxWarning",
          children: cD(OD ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== aD && (0, xD.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [cD("general:error"), ": ", aD]
        }), pD && (0, xD.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, xD.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, xD.jsxs)("div", {
              children: [(0, xD.jsx)("div", {
                className: "ShaderPackName",
                children: pD.manifest.name
              }), pD.manifest.author && (0, xD.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, ND.d)(cD, "shaderPack:byAuthor", {
                  author: pD.manifest.author
                })
              }), pD.manifest.description && (0, xD.jsx)("div", {
                className: "ShaderPackDescription",
                children: pD.manifest.description
              }), pD.listing && (0, xD.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, xD.jsx)(VD, {
                  to: (0, oD.$)(pD.listing.packId),
                  className: "ShaderPackListingLink",
                  children: cD("shaderPackListing:openPackPage")
                })
              })]
            }), (0, xD.jsx)(iD.N, {
              disabled: PD || JD,
              onClick: async function() {
                HD(!0), zD(null), await (0, MD.removeShaderPack)(), fD(null), HD(!1), lD(pD, null, wD)
              },
              children: cD("shaderPack:removePack")
            })]
          }), (0, xD.jsx)(KD, {
            stored: pD,
            checking: UD,
            webGpuUsable: XD,
            changePending: (0, MD.isShaderPackChangePending)(),
            compiler: wD,
            t: cD
          })]
        }), (0, xD.jsx)(gD.d, {
          busy: PD || JD || UD,
          disabled: PD || JD || UD || !0 !== XD,
          onFiles: jD
        })]
      })
    }

    function VD(DD) {
      let {
        to: CD,
        className: cD,
        children: ID
      } = DD;
      const {
        gameState: iD
      } = (0, wD.o)(["gameState"]), {
        pathname: bD,
        search: QD
      } = (0, pD.w)(), BD = "landingPage" !== iD && "studio" !== iD;
      return (0, xD.jsx)(fD.LinkPreserveSearch, {
        to: CD,
        className: cD,
        target: BD ? "_blank" : void 0,
        onClick: () => {
          BD || ((0, oD.G)(`${bD}${QD}`), (0, SD.g)())
        },
        children: ID
      })
    }
  },
  6291: (DD, CD, cD) => {
    cD.d(CD, {
      $: () => QD,
      A: () => vD,
      E: () => xD,
      G: () => SD,
      I: () => JD,
      M: () => ZD,
      P: () => TD,
      S: () => lD,
      W: () => fD,
      Y: () => LD,
      ab: () => bD,
      bb: () => zD,
      c: () => ND,
      db: () => jD,
      eb: () => gD,
      fb: () => qD,
      g: () => HD,
      k: () => oD,
      n: () => yD,
      p: () => BD,
      q: () => KD,
      r: () => MD,
      s: () => aD,
      w: () => GD,
      x: () => tD
    });
    var ID = cD(6298),
      pD = cD(162),
      iD = cD(4353);
    const fD = "/shader-packs",
      bD = `${fD}/publish`;

    function QD(DD) {
      return `${fD}/${encodeURIComponent(DD)}`
    }
    let wD = null;

    function SD(DD) {
      wD = DD
    }

    function BD() {
      return wD
    }

    function yD() {
      wD = null
    }

    function MD(DD) {
      return DD.playerHasRank("developer") || DD.playerHasRank("admin")
    }
    const tD = ["terrain", "water", "models", "sunShadows", "strict"],
      ZD = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function oD(DD, CD) {
      return DD.withFeatures.includes(CD) ? "with" : DD.withoutFeatures.includes(CD) ? "without" : null
    }

    function vD(DD) {
      return null === DD ? "with" : "with" === DD ? "without" : null
    }

    function ND(DD) {
      return "with" === DD ? "only" : null === DD ? "include" : void 0
    }

    function gD(DD, CD) {
      const cD = oD(DD, CD),
        ID = DD => DD.filter((DD => DD !== CD));
      return {
        withFeatures: null === cD ? [...DD.withFeatures, CD] : ID(DD.withFeatures),
        withoutFeatures: "with" === cD ? [...DD.withoutFeatures, CD] : ID(DD.withoutFeatures)
      }
    }
    const XD = "section",
      mD = "sort",
      nD = "filters",
      OD = "q",
      PD = "banned",
      HD = "popular",
      UD = "strict";

    function xD(DD) {
      var CD, cD, pD;
      const fD = DD.get(XD),
        bD = (null !== (CD = DD.get(nD)) && void 0 !== CD ? CD : UD).split(","),
        QD = DD.get(PD);
      return {
        section: "favourites" === fD || "mine" === fD ? fD : "explore",
        sort: null !== (cD = ID.z.find((CD => CD === DD.get(mD)))) && void 0 !== cD ? cD : HD,
        withFeatures: tD.filter((DD => bD.includes(DD) && !bD.includes(`-${DD}`))),
        withoutFeatures: tD.filter((DD => bD.includes(`-${DD}`))),
        searchQuery: (null === (pD = DD.get(OD)) || void 0 === pD ? void 0 : pD.slice(0, ID.N)) || null,
        pageNumber: (0, iD.e)(DD.get(iD.b)),
        banned: "only" === QD ? "with" : "include" === QD ? null : "without"
      }
    }

    function qD(DD, CD) {
      var cD;
      const ID = VD(CD);
      (0, iD.f)(DD, XD, "explore" === CD.section ? null : CD.section), (0, iD.f)(DD, mD, CD.sort === HD ? null : CD.sort), (0, iD.f)(DD, nD, ID === UD ? null : ID), (0, iD.f)(DD, OD, CD.searchQuery), (0, iD.f)(DD, PD, null !== (cD = ND(CD.banned)) && void 0 !== cD ? cD : null), (0, iD.h)(DD, CD.pageNumber)
    }

    function JD(DD) {
      const CD = new URLSearchParams;
      return qD(CD, {
        section: "explore",
        sort: HD,
        withFeatures: "strict" === DD ? [DD] : [DD, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${fD}?${CD.toString()}`
    }

    function KD(DD) {
      return VD(DD) === UD
    }

    function aD(DD) {
      return null !== DD.searchQuery || "with" === DD.banned || VD(DD) !== UD
    }

    function VD(DD) {
      return tD.flatMap((CD => {
        const cD = oD(DD, CD);
        return "with" === cD ? [CD] : "without" === cD ? [`-${CD}`] : []
      })).join(",")
    }
    const zD = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      jD = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function lD(DD) {
      return Math.round(100 * Math.max(0, 1 - 1 / DD))
    }

    function LD(DD, CD, cD, pD) {
      const iD = [];
      DD.isBanned && iD.push({
        tone: "warning",
        text: pD("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: fD
      } = DD;
      if (null === DD.brokenError || fD && !fD.error || iD.push({
          tone: "warning",
          text: pD("shaderPackListing:ownerBroken"),
          detail: DD.brokenError
        }), null !== fD && void 0 !== fD && fD.error) iD.push({
        tone: "warning",
        text: pD(CD ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, ID.n)(fD.error) ? null : fD.error
      });
      else if (fD) {
        const DD = null === fD.renderNotBefore ? 0 : fD.renderNotBefore - cD,
          ID = String(Math.ceil(DD / 6e4)),
          bD = pD(CD ? DD > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : DD > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: ID
          });
        iD.push({
          tone: "info",
          text: bD,
          detail: null
        })
      }
      return DD.listed || iD.push({
        tone: "info",
        text: pD("shaderPackListing:ownerUnlisted"),
        detail: null
      }), iD
    }

    function TD(DD) {
      return Math.max(1, Math.round(DD / 1024))
    }

    function GD(DD, CD, cD) {
      return DD instanceof pD.d && DD.errorMessageForUser ? DD.errorMessageForUser : CD(cD)
    }
  },
  6298: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => bD,
      E: () => fD,
      H: () => ID,
      L: () => yD,
      N: () => SD,
      Q: () => gD,
      T: () => BD,
      U: () => wD,
      e: () => MD,
      h: () => ZD,
      k: () => tD,
      n: () => ND,
      p: () => mD,
      t: () => QD,
      u: () => pD,
      w: () => XD,
      z: () => iD
    });
    const ID = ["forest", "desert", "water", "night", "cave"];
    const pD = {
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
      iD = ["popular", "updated", "newest"],
      fD = 3,
      bD = 32,
      QD = 300;

    function wD(DD, CD) {
      return DD.slice(0, CD).replace(/[\uD800-\uDBFF]$/, "")
    }
    const SD = 64,
      BD = 512,
      yD = 18e5;
    const MD = "Bloxdhub",
      tD = "https://bloxdhub.com/shaders";

    function ZD(DD) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
    }
    const oD = "Screenshot generation failed.",
      vD = "Its screenshots couldn't be generated:";

    function ND(DD) {
      var CD;
      return DD === oD || null !== (CD = null === DD || void 0 === DD ? void 0 : DD.startsWith(vD)) && void 0 !== CD && CD
    }

    function gD(DD, CD) {
      return `shaderPacks/${DD}/${CD}.json`
    }

    function XD(DD, CD, cD, ID) {
      return null === CD.renderId ? mD(DD, CD.baselineVersion, cD, ID) : `${DD}/${function(DD,CD,cD,ID){return`shaderPacks/${DD}/${CD}/${cD}-${ID}.webp`}(CD.packId,CD.renderId,cD,ID)}`
    }

    function mD(DD, CD, cD, ID) {
      return `${DD}/${function(DD,CD,cD){return`shaderPacks/baseline/${DD}/${CD}-${cD}.webp`}(CD,cD,ID)}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);