export const id = 111;
export const ids = [111];
export const modules = {
  39055: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      ShaderPackCategory: () => Cc
    });
    var Vc = nc(73),
      Ic = nc(1344),
      rB = nc(1255),
      uc = nc(1330),
      sc = nc(1051),
      Mc = nc(107),
      Pc = nc(27),
      qB = nc(1464),
      Oc = nc(5583),
      Tc = nc(235),
      fc = nc(5624),
      mB = nc(5618),
      ec = nc(5626),
      tB = nc(5516),
      Sc = nc(4035),
      yB = nc(5568),
      zB = nc(5577),
      pc = nc(2590);

    function hc(cB, Bc) {
      const nc = (0, fc.storedPackOutcome)(cB, Bc);
      return "none" !== nc.kind || "noCompiler" === nc.reason
    }
    var aB = nc(912),
      lc = nc.n(aB),
      Yc = nc(5570),
      Lc = nc(926),
      gB = nc(5564),
      Uc = nc(957);
    const bB = {
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

    function Zc(cB, Bc) {
      return "failedRecheck" === cB && Bc.listing ? "shaderPack:statusFailedRecheckListed" : bB[cB]
    }

    function Qc(cB) {
      let {
        stored: Bc,
        checking: nc,
        webGpuUsable: Vc,
        changePending: Ic,
        compiler: rB,
        t: uc
      } = cB;
      const sc = function(cB, Bc, nc, Vc, Ic) {
          const rB = (0, fc.storedPackOutcome)(cB, Ic);
          return "none" === rB.kind ? "noCompiler" === rB.reason ? Bc ? "checking" : "noCompiler" : "otherApiVersion" === rB.reason ? "wrongApiVersion" : "failed" : (0, pc.e)() ? "harnessBuild" : "blocked" === rB.kind ? (0, fc.shaderPackNeedsCheck)(cB, Ic) ? Bc ? "checking" : !1 === nc ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === nc ? "offNoWebGpu" : Vc ? "readyAfterReload" : "ready"
        }(Bc, nc, Vc, Ic, rB),
        Mc = "failed" === sc || "failedRecheck" === sc,
        Pc = Mc || "wrongApiVersion" === sc || "noCompiler" === sc,
        qB = "ready" === sc || "readyAfterReload" === sc ? Bc.validation.offInStrict : [];
      return (0, Uc.jsxs)(Uc.Fragment, {
        children: [(0, Uc.jsxs)("div", {
          className: lc()("ShaderPackStatus", {
            Ready: "ready" === sc,
            Failed: Pc
          }),
          children: ["ready" === sc && (0, Uc.jsx)(Lc.e, {
            name: "circle-check"
          }), Pc && (0, Uc.jsx)(Lc.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === sc ? (0, pc.d)() : uc(Zc(sc, Bc), {
            packVersion: String(Bc.manifest.apiVersion),
            version: String(Yc.e)
          })]
        }), Mc && (0, Uc.jsx)(gB.b, {
          diagnostics: Bc.validation.errors,
          more: Bc.validation.moreErrors,
          t: uc
        }), qB.length > 0 && (0, Uc.jsxs)(Uc.Fragment, {
          children: [(0, Uc.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Uc.jsx)(Lc.e, {
              name: "triangle-exclamation"
            }), uc("shaderPack:offInStrict")]
          }), (0, Uc.jsx)(gB.b, {
            diagnostics: qB,
            t: uc
          })]
        })]
      })
    }

    function Cc(cB) {
      let {
        setApplySettingsCallback: Bc
      } = cB;
      const {
        t: nc
      } = (0, sc.x)(), [Ic, uc] = (0, Vc.useState)(null), [Pc, qB] = (0, Vc.useState)(null), [pc, aB] = (0, Vc.useState)(null), [lc] = (0, Vc.useState)(Tc.h), [Yc, Lc] = (0, Vc.useState)(!0), [gB, bB] = (0, Vc.useState)(!1), {
        loading: Zc,
        error: Cc,
        setError: Dc,
        onFiles: Nc
      } = (0, zB.g)((async cB => {
        const Bc = await (0, Oc.loadPageShaderPackCompiler)();
        if (!Bc) return void Dc(nc("shaderPack:compilerUnavailable"));
        qB(Bc);
        const Vc = (0, fc.toStoredShaderPack)(cB, await (0, mB.h)(Bc, cB.files));
        await (0, fc.saveShaderPack)(Vc, Bc) ? (uc(Vc), Ec(Ic, Vc, Bc)) : Dc(nc("shaderPack:saveFailed"))
      }));

      function Ec(cB, nc, Vc) {
        (function(cB, Bc, nc, Vc) {
          return nc || hc(cB, Vc) || hc(Bc, Vc)
        })(cB, nc, (0, fc.isShaderPackChangePending)(), Vc) && ((0, fc.markShaderPackChangePending)(), Bc((() => Sc.i)))
      }
      return (0, Vc.useEffect)((() => {
        let cB = !1;
        return async function() {
          const Bc = (0, Mc.hasUsableWebGpuAdapter)(),
            nc = await (0, ec.e)();
          if (cB) return;
          uc(nc), bB(!0), Lc(!1);
          const Vc = null !== nc ? (0, Oc.loadPageShaderPackCompiler)() : null,
            Ic = await Bc;
          if (cB) return;
          aB(Ic);
          const rB = await Vc;
          if (!cB && (qB(rB), null !== nc && Ic && null !== rB && (0, fc.shaderPackNeedsCheck)(nc, rB))) {
            const Bc = await (0, mB.d)(nc, rB);
            cB || uc((cB => cB === nc ? Bc : cB))
          }
        }().catch((Bc => {
          console.error("Failed to load the stored shader pack", Bc), cB || Dc(nc("shaderPack:unexpectedError"))
        })).finally((() => {
          cB || (Lc(!1), bB(!1))
        })), () => {
          cB = !0
        }
      }), []), (0, Uc.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Uc.jsx)("div", {
          className: "ShaderPackIntro",
          children: nc("shaderPack:intro")
        }), (0, Uc.jsx)(vB, {
          to: tB.Z,
          className: "ShaderPackBrowseLink",
          children: (0, Uc.jsx)(rB.n, {
            className: "ShaderPackBrowseButton",
            children: nc("shaderPackListing:browse")
          })
        }), !1 === pc && (0, Uc.jsx)("div", {
          className: "SettingsBoxWarning",
          children: nc(lc ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Cc && (0, Uc.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [nc("general:error"), ": ", Cc]
        }), Ic && (0, Uc.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Uc.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Uc.jsxs)("div", {
              children: [(0, Uc.jsx)("div", {
                className: "ShaderPackName",
                children: Ic.manifest.name
              }), Ic.manifest.author && (0, Uc.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, yB.h)(nc, "shaderPack:byAuthor", {
                  author: Ic.manifest.author
                })
              }), Ic.manifest.description && (0, Uc.jsx)("div", {
                className: "ShaderPackDescription",
                children: Ic.manifest.description
              }), Ic.listing && (0, Uc.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Uc.jsx)(vB, {
                  to: (0, tB.db)(Ic.listing.packId),
                  className: "ShaderPackListingLink",
                  children: nc("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Uc.jsx)(rB.N, {
              disabled: Yc || Zc,
              onClick: async function() {
                Lc(!0), Dc(null), await (0, fc.removeShaderPack)(), uc(null), Lc(!1), Ec(Ic, null, Pc)
              },
              children: nc("shaderPack:removePack")
            })]
          }), (0, Uc.jsx)(Qc, {
            stored: Ic,
            checking: gB,
            webGpuUsable: pc,
            changePending: (0, fc.isShaderPackChangePending)(),
            compiler: Pc,
            t: nc
          })]
        }), (0, Uc.jsx)(zB.c, {
          busy: Yc || Zc || gB,
          disabled: Yc || Zc || gB || !0 !== pc,
          onFiles: Nc
        })]
      })
    }

    function vB(cB) {
      let {
        to: Bc,
        className: nc,
        children: Vc
      } = cB;
      const {
        gameState: rB
      } = (0, Pc.j)(["gameState"]), {
        pathname: sc,
        search: Mc
      } = (0, Ic.s)(), Oc = "landingPage" !== rB && "studio" !== rB;
      return (0, Uc.jsx)(uc.LinkPreserveSearch, {
        to: Bc,
        className: nc,
        target: Oc ? "_blank" : void 0,
        onClick: () => {
          Oc || ((0, tB.J)(`${sc}${Mc}`), (0, qB.e)())
        },
        children: Vc
      })
    }
  },
  5516: (cB, Bc, nc) => {
    nc.d(Bc, {
      $: () => oc,
      D: () => mB,
      H: () => Sc,
      I: () => Uc,
      J: () => qB,
      N: () => Zc,
      O: () => ec,
      R: () => Wc,
      V: () => Ec,
      Z: () => uc,
      c: () => yB,
      db: () => Mc,
      g: () => Lc,
      gb: () => sc,
      ib: () => Dc,
      jb: () => Nc,
      k: () => tB,
      mb: () => zB,
      n: () => Tc,
      o: () => Oc,
      pb: () => bB,
      r: () => Qc,
      t: () => fc,
      x: () => Cc,
      z: () => wc
    });
    var Vc = nc(5523),
      Ic = nc(152),
      rB = nc(3668);
    const uc = "/shader-packs",
      sc = `${uc}/publish`;

    function Mc(cB) {
      return `${uc}/${encodeURIComponent(cB)}`
    }
    let Pc = null;

    function qB(cB) {
      Pc = cB
    }

    function Oc() {
      return Pc
    }

    function Tc() {
      Pc = null
    }

    function fc(cB) {
      return cB.playerHasRank("developer") || cB.playerHasRank("admin")
    }
    const mB = ["terrain", "water", "models", "sunShadows", "strict"],
      ec = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function tB(cB, Bc) {
      return cB.withFeatures.includes(Bc) ? "with" : cB.withoutFeatures.includes(Bc) ? "without" : null
    }

    function Sc(cB) {
      return null === cB ? "with" : "with" === cB ? "without" : null
    }

    function yB(cB) {
      return "with" === cB ? "only" : null === cB ? "include" : void 0
    }

    function zB(cB, Bc) {
      const nc = tB(cB, Bc),
        Vc = cB => cB.filter((cB => cB !== Bc));
      return {
        withFeatures: null === nc ? [...cB.withFeatures, Bc] : Vc(cB.withFeatures),
        withoutFeatures: "with" === nc ? [...cB.withoutFeatures, Bc] : Vc(cB.withoutFeatures)
      }
    }
    const pc = "section",
      hc = "sort",
      aB = "filters",
      lc = "q",
      Yc = "banned",
      Lc = "popular",
      gB = "strict";

    function Uc(cB) {
      var Bc, nc, Ic;
      const uc = cB.get(pc),
        sc = (null !== (Bc = cB.get(aB)) && void 0 !== Bc ? Bc : gB).split(","),
        Mc = cB.get(Yc);
      return {
        section: "favourites" === uc || "mine" === uc ? uc : "explore",
        sort: null !== (nc = Vc.w.find((Bc => Bc === cB.get(hc)))) && void 0 !== nc ? nc : Lc,
        withFeatures: mB.filter((cB => sc.includes(cB) && !sc.includes(`-${cB}`))),
        withoutFeatures: mB.filter((cB => sc.includes(`-${cB}`))),
        searchQuery: (null === (Ic = cB.get(lc)) || void 0 === Ic ? void 0 : Ic.slice(0, Vc.L)) || null,
        pageNumber: (0, rB.g)(cB.get(rB.c)),
        banned: "only" === Mc ? "with" : "include" === Mc ? null : "without"
      }
    }

    function bB(cB, Bc) {
      var nc;
      const Vc = vB(Bc);
      (0, rB.j)(cB, pc, "explore" === Bc.section ? null : Bc.section), (0, rB.j)(cB, hc, Bc.sort === Lc ? null : Bc.sort), (0, rB.j)(cB, aB, Vc === gB ? null : Vc), (0, rB.j)(cB, lc, Bc.searchQuery), (0, rB.j)(cB, Yc, null !== (nc = yB(Bc.banned)) && void 0 !== nc ? nc : null), (0, rB.k)(cB, Bc.pageNumber)
    }

    function Zc(cB) {
      const Bc = new URLSearchParams;
      return bB(Bc, {
        section: "explore",
        sort: Lc,
        withFeatures: "strict" === cB ? [cB] : [cB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${uc}?${Bc.toString()}`
    }

    function Qc(cB) {
      return vB(cB) === gB
    }

    function Cc(cB) {
      return null !== cB.searchQuery || "with" === cB.banned || vB(cB) !== gB
    }

    function vB(cB) {
      return mB.flatMap((Bc => {
        const nc = tB(cB, Bc);
        return "with" === nc ? [Bc] : "without" === nc ? [`-${Bc}`] : []
      })).join(",")
    }
    const Dc = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Nc = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Ec(cB) {
      return Math.round(100 * Math.max(0, 1 - 1 / cB))
    }

    function oc(cB, Bc, nc, Ic) {
      const rB = [];
      cB.isBanned && rB.push({
        tone: "warning",
        text: Ic("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: uc
      } = cB;
      if (null === cB.brokenError || uc && !uc.error || rB.push({
          tone: "warning",
          text: Ic("shaderPackListing:ownerBroken"),
          detail: cB.brokenError
        }), null !== uc && void 0 !== uc && uc.error) rB.push({
        tone: "warning",
        text: Ic(Bc ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Vc.i)(uc.error) ? null : uc.error
      });
      else if (uc) {
        const cB = null === uc.renderNotBefore ? 0 : uc.renderNotBefore - nc,
          Vc = String(Math.ceil(cB / 6e4)),
          sc = Ic(Bc ? cB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : cB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Vc
          });
        rB.push({
          tone: "info",
          text: sc,
          detail: null
        })
      }
      return cB.listed || rB.push({
        tone: "info",
        text: Ic("shaderPackListing:ownerUnlisted"),
        detail: null
      }), rB
    }

    function Wc(cB) {
      return Math.max(1, Math.round(cB / 1024))
    }

    function wc(cB, Bc, nc) {
      return cB instanceof Ic.c && cB.errorMessageForUser ? cB.errorMessageForUser : Bc(nc)
    }
  },
  5523: (cB, Bc, nc) => {
    nc.d(Bc, {
      C: () => uc,
      E: () => Vc,
      I: () => Tc,
      L: () => qB,
      O: () => zB,
      P: () => Oc,
      T: () => Pc,
      c: () => fc,
      d: () => ec,
      f: () => mB,
      i: () => yB,
      l: () => hc,
      p: () => Mc,
      q: () => Ic,
      t: () => pc,
      w: () => rB,
      z: () => sc
    });
    const Vc = ["forest", "desert", "water", "night", "cave"];
    const Ic = {
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
      rB = ["popular", "updated", "newest"],
      uc = 3,
      sc = 32,
      Mc = 300;

    function Pc(cB, Bc) {
      return cB.slice(0, Bc).replace(/[\uD800-\uDBFF]$/, "")
    }
    const qB = 64,
      Oc = 512,
      Tc = 18e5;
    const fc = "Bloxdhub",
      mB = "https://bloxdhub.com/shaders";

    function ec(cB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(cB)}`
    }
    const tB = "Screenshot generation failed.",
      Sc = "Its screenshots couldn't be generated:";

    function yB(cB) {
      var Bc;
      return cB === tB || null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.startsWith(Sc)) && void 0 !== Bc && Bc
    }

    function zB(cB, Bc) {
      return `shaderPacks/${cB}/${Bc}.json`
    }

    function pc(cB, Bc, nc, Vc) {
      return null === Bc.renderId ? hc(cB, Bc.baselineVersion, nc, Vc) : `${cB}/${function(cB,Bc,nc,Vc){return`shaderPacks/${cB}/${Bc}/${nc}-${Vc}.webp`}(Bc.packId,Bc.renderId,nc,Vc)}`
    }

    function hc(cB, Bc, nc, Vc) {
      return `${cB}/${function(cB,Bc,nc){return`shaderPacks/baseline/${cB}/${Bc}-${nc}.webp`}(Bc,nc,Vc)}`
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);