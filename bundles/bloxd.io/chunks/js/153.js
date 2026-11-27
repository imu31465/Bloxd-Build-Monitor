export const id = 153;
export const ids = [153];
export const modules = {
  42936: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      ShaderPackCategory: () => Hr
    });
    var Zr = Qr(72),
      Wr = Qr(1653),
      ar = Qr(1576),
      jr = Qr(1644),
      Ir = Qr(1251),
      fr = Qr(109),
      Er = Qr(26),
      pr = Qr(1758),
      xr = Qr(7575),
      mr = Qr(345),
      Nr = Qr(7615),
      Ur = Qr(7610),
      tr = Qr(7617),
      hr = Qr(7526),
      zr = Qr(5951),
      Yr = Qr(5998),
      nr = Qr(7573),
      er = Qr(4699);

    function Kr(rr, Sr) {
      const Qr = (0, Nr.storedPackOutcome)(rr, Sr);
      return "none" !== Qr.kind || "noCompiler" === Qr.reason
    }
    var yr = Qr(1155),
      Br = Qr.n(yr),
      Tr = Qr(6005),
      vr = Qr(1448),
      Or = Qr(7567),
      Lr = Qr(1338);
    const lr = {
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

    function Xr(rr, Sr) {
      return "failedRecheck" === rr && Sr.listing ? "shaderPack:statusFailedRecheckListed" : lr[rr]
    }

    function Pr(rr) {
      let {
        stored: Sr,
        checking: Qr,
        webGpuUsable: Zr,
        changePending: Wr,
        compiler: ar,
        t: jr
      } = rr;
      const Ir = function(rr, Sr, Qr, Zr, Wr) {
          const ar = (0, Nr.storedPackOutcome)(rr, Wr);
          return "none" === ar.kind ? "noCompiler" === ar.reason ? Sr ? "checking" : "noCompiler" : "otherApiVersion" === ar.reason ? "wrongApiVersion" : "failed" : (0, er.f)() ? "harnessBuild" : "blocked" === ar.kind ? (0, Nr.shaderPackNeedsCheck)(rr, Wr) ? Sr ? "checking" : !1 === Qr ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === Qr ? "offNoWebGpu" : Zr ? "readyAfterReload" : "ready"
        }(Sr, Qr, Zr, Wr, ar),
        fr = "failed" === Ir || "failedRecheck" === Ir,
        Er = fr || "wrongApiVersion" === Ir || "noCompiler" === Ir,
        pr = "ready" === Ir || "readyAfterReload" === Ir ? Sr.validation.offInStrict : [];
      return (0, Lr.jsxs)(Lr.Fragment, {
        children: [(0, Lr.jsxs)("div", {
          className: Br()("ShaderPackStatus", {
            Ready: "ready" === Ir,
            Failed: Er
          }),
          children: ["ready" === Ir && (0, Lr.jsx)(vr.c, {
            name: "circle-check"
          }), Er && (0, Lr.jsx)(vr.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === Ir ? (0, er.b)() : jr(Xr(Ir, Sr), {
            packVersion: String(Sr.manifest.apiVersion),
            version: String(Tr.d)
          })]
        }), fr && (0, Lr.jsx)(Or.e, {
          diagnostics: Sr.validation.errors,
          more: Sr.validation.moreErrors,
          t: jr
        }), pr.length > 0 && (0, Lr.jsxs)(Lr.Fragment, {
          children: [(0, Lr.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Lr.jsx)(vr.c, {
              name: "triangle-exclamation"
            }), jr("shaderPack:offInStrict")]
          }), (0, Lr.jsx)(Or.e, {
            diagnostics: pr,
            t: jr
          })]
        })]
      })
    }

    function Hr(rr) {
      let {
        setApplySettingsCallback: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Ir.E)(), [Wr, jr] = (0, Zr.useState)(null), [Er, pr] = (0, Zr.useState)(null), [er, yr] = (0, Zr.useState)(null), [Br] = (0, Zr.useState)(mr.l), [Tr, vr] = (0, Zr.useState)(!0), [Or, lr] = (0, Zr.useState)(!1), {
        loading: Xr,
        error: Hr,
        setError: Rr,
        onFiles: gr
      } = (0, nr.e)((async rr => {
        const Sr = await (0, xr.loadPageShaderPackCompiler)();
        if (!Sr) return void Rr(Qr("shaderPack:compilerUnavailable"));
        pr(Sr);
        const Zr = (0, Nr.toStoredShaderPack)(rr, await (0, Ur.e)(Sr, rr.files));
        await (0, Nr.saveShaderPack)(Zr, Sr) ? (jr(Zr), Cr(Wr, Zr, Sr)) : Rr(Qr("shaderPack:saveFailed"))
      }));

      function Cr(rr, Qr, Zr) {
        (function(rr, Sr, Qr, Zr) {
          return Qr || Kr(rr, Zr) || Kr(Sr, Zr)
        })(rr, Qr, (0, Nr.isShaderPackChangePending)(), Zr) && ((0, Nr.markShaderPackChangePending)(), Sr((() => zr.i)))
      }
      return (0, Zr.useEffect)((() => {
        let rr = !1;
        return async function() {
          const Sr = (0, fr.hasUsableWebGpuAdapter)(),
            Qr = await (0, tr.e)();
          if (rr) return;
          jr(Qr), lr(!0), vr(!1);
          const Zr = null !== Qr ? (0, xr.loadPageShaderPackCompiler)() : null,
            Wr = await Sr;
          if (rr) return;
          yr(Wr);
          const ar = await Zr;
          if (!rr && (pr(ar), null !== Qr && Wr && null !== ar && (0, Nr.shaderPackNeedsCheck)(Qr, ar))) {
            const Sr = await (0, Ur.d)(Qr, ar);
            rr || jr((rr => rr === Qr ? Sr : rr))
          }
        }().catch((Sr => {
          console.error("Failed to load the stored shader pack", Sr), rr || Rr(Qr("shaderPack:unexpectedError"))
        })).finally((() => {
          rr || (vr(!1), lr(!1))
        })), () => {
          rr = !0
        }
      }), []), (0, Lr.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Lr.jsx)("div", {
          className: "ShaderPackIntro",
          children: Qr("shaderPack:intro")
        }), (0, Lr.jsx)(qr, {
          to: hr.X,
          className: "ShaderPackBrowseLink",
          children: (0, Lr.jsx)(ar.p, {
            className: "ShaderPackBrowseButton",
            children: Qr("shaderPackListing:browse")
          })
        }), !1 === er && (0, Lr.jsx)("div", {
          className: "SettingsBoxWarning",
          children: Qr(Br ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Hr && (0, Lr.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [Qr("general:error"), ": ", Hr]
        }), Wr && (0, Lr.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Lr.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Lr.jsxs)("div", {
              children: [(0, Lr.jsx)("div", {
                className: "ShaderPackName",
                children: Wr.manifest.name
              }), Wr.manifest.author && (0, Lr.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Yr.g)(Qr, "shaderPack:byAuthor", {
                  author: Wr.manifest.author
                })
              }), Wr.manifest.description && (0, Lr.jsx)("div", {
                className: "ShaderPackDescription",
                children: Wr.manifest.description
              }), Wr.listing && (0, Lr.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Lr.jsx)(qr, {
                  to: (0, hr._)(Wr.listing.packId),
                  className: "ShaderPackListingLink",
                  children: Qr("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Lr.jsx)(ar.O, {
              disabled: Tr || Xr,
              onClick: async function() {
                vr(!0), Rr(null), await (0, Nr.removeShaderPack)(), jr(null), vr(!1), Cr(Wr, null, Er)
              },
              children: Qr("shaderPack:removePack")
            })]
          }), (0, Lr.jsx)(Pr, {
            stored: Wr,
            checking: Or,
            webGpuUsable: er,
            changePending: (0, Nr.isShaderPackChangePending)(),
            compiler: Er,
            t: Qr
          })]
        }), (0, Lr.jsx)(nr.c, {
          busy: Tr || Xr || Or,
          disabled: Tr || Xr || Or || !0 !== er,
          onFiles: gr
        })]
      })
    }

    function qr(rr) {
      let {
        to: Sr,
        className: Qr,
        children: Zr
      } = rr;
      const {
        gameState: ar
      } = (0, Er.n)(["gameState"]), {
        pathname: Ir,
        search: fr
      } = (0, Wr.s)(), xr = "landingPage" !== ar && "studio" !== ar;
      return (0, Lr.jsx)(jr.LinkPreserveSearch, {
        to: Sr,
        className: Qr,
        target: xr ? "_blank" : void 0,
        onClick: () => {
          xr || ((0, hr.I)(`${Ir}${fr}`), (0, pr.e)())
        },
        children: Zr
      })
    }
  },
  7526: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => Ur,
      B: () => zr,
      F: () => Lr,
      I: () => pr,
      M: () => Xr,
      Q: () => tr,
      R: () => Gr,
      V: () => Cr,
      X: () => jr,
      Z: () => Mr,
      _: () => fr,
      bb: () => Ir,
      cb: () => Rr,
      d: () => Yr,
      eb: () => gr,
      gb: () => nr,
      h: () => vr,
      i: () => hr,
      kb: () => lr,
      l: () => mr,
      n: () => xr,
      p: () => Pr,
      t: () => Nr,
      v: () => Hr,
      z: () => kr
    });
    var Zr = Qr(7533),
      Wr = Qr(161),
      ar = Qr(5323);
    const jr = "/shader-packs",
      Ir = `${jr}/publish`;

    function fr(rr) {
      return `${jr}/${encodeURIComponent(rr)}`
    }
    let Er = null;

    function pr(rr) {
      Er = rr
    }

    function xr() {
      return Er
    }

    function mr() {
      Er = null
    }

    function Nr(rr) {
      return rr.playerHasRank("developer") || rr.playerHasRank("admin")
    }
    const Ur = ["terrain", "water", "models", "sunShadows", "strict"],
      tr = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function hr(rr, Sr) {
      return rr.withFeatures.includes(Sr) ? "with" : rr.withoutFeatures.includes(Sr) ? "without" : null
    }

    function zr(rr) {
      return null === rr ? "with" : "with" === rr ? "without" : null
    }

    function Yr(rr) {
      return "with" === rr ? "only" : null === rr ? "include" : void 0
    }

    function nr(rr, Sr) {
      const Qr = hr(rr, Sr),
        Zr = rr => rr.filter((rr => rr !== Sr));
      return {
        withFeatures: null === Qr ? [...rr.withFeatures, Sr] : Zr(rr.withFeatures),
        withoutFeatures: "with" === Qr ? [...rr.withoutFeatures, Sr] : Zr(rr.withoutFeatures)
      }
    }
    const er = "section",
      Kr = "sort",
      yr = "filters",
      Br = "q",
      Tr = "banned",
      vr = "popular",
      Or = "strict";

    function Lr(rr) {
      var Sr, Qr, Wr;
      const jr = rr.get(er),
        Ir = (null !== (Sr = rr.get(yr)) && void 0 !== Sr ? Sr : Or).split(","),
        fr = rr.get(Tr);
      return {
        section: "favourites" === jr || "mine" === jr ? jr : "explore",
        sort: null !== (Qr = Zr.w.find((Sr => Sr === rr.get(Kr)))) && void 0 !== Qr ? Qr : vr,
        withFeatures: Ur.filter((rr => Ir.includes(rr) && !Ir.includes(`-${rr}`))),
        withoutFeatures: Ur.filter((rr => Ir.includes(`-${rr}`))),
        searchQuery: (null === (Wr = rr.get(Br)) || void 0 === Wr ? void 0 : Wr.slice(0, Zr.I)) || null,
        pageNumber: (0, ar.c)(rr.get(ar.b)),
        banned: "only" === fr ? "with" : "include" === fr ? null : "without"
      }
    }

    function lr(rr, Sr) {
      var Qr;
      const Zr = qr(Sr);
      (0, ar.g)(rr, er, "explore" === Sr.section ? null : Sr.section), (0, ar.g)(rr, Kr, Sr.sort === vr ? null : Sr.sort), (0, ar.g)(rr, yr, Zr === Or ? null : Zr), (0, ar.g)(rr, Br, Sr.searchQuery), (0, ar.g)(rr, Tr, null !== (Qr = Yr(Sr.banned)) && void 0 !== Qr ? Qr : null), (0, ar.j)(rr, Sr.pageNumber)
    }

    function Xr(rr) {
      const Sr = new URLSearchParams;
      return lr(Sr, {
        section: "explore",
        sort: vr,
        withFeatures: "strict" === rr ? [rr] : [rr, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${jr}?${Sr.toString()}`
    }

    function Pr(rr) {
      return qr(rr) === Or
    }

    function Hr(rr) {
      return null !== rr.searchQuery || "with" === rr.banned || qr(rr) !== Or
    }

    function qr(rr) {
      return Ur.flatMap((Sr => {
        const Qr = hr(rr, Sr);
        return "with" === Qr ? [Sr] : "without" === Qr ? [`-${Sr}`] : []
      })).join(",")
    }
    const Rr = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      gr = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Cr(rr) {
      return Math.round(100 * Math.max(0, 1 - 1 / rr))
    }

    function Mr(rr, Sr, Qr, Wr) {
      const ar = [];
      rr.isBanned && ar.push({
        tone: "warning",
        text: Wr("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: jr
      } = rr;
      if (null === rr.brokenError || jr && !jr.error || ar.push({
          tone: "warning",
          text: Wr("shaderPackListing:ownerBroken"),
          detail: rr.brokenError
        }), null !== jr && void 0 !== jr && jr.error) ar.push({
        tone: "warning",
        text: Wr(Sr ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Zr.l)(jr.error) ? null : jr.error
      });
      else if (jr) {
        const rr = null === jr.renderNotBefore ? 0 : jr.renderNotBefore - Qr,
          Zr = String(Math.ceil(rr / 6e4)),
          Ir = Wr(Sr ? rr > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : rr > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Zr
          });
        ar.push({
          tone: "info",
          text: Ir,
          detail: null
        })
      }
      return rr.listed || ar.push({
        tone: "info",
        text: Wr("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ar
    }

    function Gr(rr) {
      return Math.max(1, Math.round(rr / 1024))
    }

    function kr(rr, Sr, Qr) {
      return rr instanceof Wr.b && rr.errorMessageForUser ? rr.errorMessageForUser : Sr(Qr)
    }
  },
  7533: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => jr,
      D: () => Zr,
      E: () => mr,
      I: () => pr,
      J: () => er,
      K: () => xr,
      L: () => Er,
      c: () => Ur,
      g: () => hr,
      i: () => tr,
      j: () => Nr,
      l: () => nr,
      o: () => yr,
      q: () => fr,
      r: () => Wr,
      u: () => Kr,
      w: () => ar,
      z: () => Ir
    });
    const Zr = ["forest", "desert", "water", "night", "cave"];
    const Wr = {
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
      ar = ["popular", "updated", "newest"],
      jr = 3,
      Ir = 32,
      fr = 300;

    function Er(rr, Sr) {
      return rr.slice(0, Sr).replace(/[\uD800-\uDBFF]$/, "")
    }
    const pr = 64,
      xr = 512,
      mr = 18e5;

    function Nr(rr) {
      const Sr = rr,
        Qr = null === Sr || void 0 === Sr ? void 0 : Sr.files;
      return "number" === typeof(null === Sr || void 0 === Sr ? void 0 : Sr.apiVersion) && "string" === typeof Sr.name && (null === Sr.author || "string" === typeof Sr.author) && (void 0 === Sr.keepCircleShadows || "boolean" === typeof Sr.keepCircleShadows) && "object" === typeof Qr && null !== Qr && Object.values(Qr).every((rr => "string" === typeof rr))
    }
    const Ur = "Bloxdhub",
      tr = "https://bloxdhub.com/shaders";

    function hr(rr) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(rr)}`
    }
    const zr = "Screenshot generation failed.",
      Yr = "Its screenshots couldn't be generated:";

    function nr(rr) {
      var Sr;
      return rr === zr || null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.startsWith(Yr)) && void 0 !== Sr && Sr
    }

    function er(rr, Sr) {
      return `shaderPacks/${rr}/${Sr}.json`
    }

    function Kr(rr, Sr, Qr, Zr) {
      return null === Sr.renderId ? yr(rr, Sr.baselineVersion, Qr, Zr) : `${rr}/${function(rr,Sr,Qr,Zr){return`shaderPacks/${rr}/${Sr}/${Qr}-${Zr}.webp`}(Sr.packId,Sr.renderId,Qr,Zr)}`
    }

    function yr(rr, Sr, Qr, Zr) {
      return `${rr}/${function(rr,Sr,Qr){return`shaderPacks/baseline/${rr}/${Sr}-${Qr}.webp`}(Sr,Qr,Zr)}`
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);