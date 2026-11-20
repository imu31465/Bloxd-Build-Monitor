export const id = 122;
export const ids = [122];
export const modules = {
  40369: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      ShaderPackCategory: () => Rv
    });
    var hv = Pv(52),
      Sv = Pv(1505),
      ev = Pv(1442),
      gv = Pv(1492),
      pv = Pv(1175),
      dv = Pv(73),
      Nv = Pv(22),
      lv = Pv(1610),
      Tv = Pv(6339),
      Wv = Pv(278),
      wv = Pv(6369),
      av = Pv(6367),
      sv = Pv(6377),
      Cv = Pv(6263),
      iv = Pv(4732),
      cv = Pv(6319),
      Gv = Pv(6335),
      mv = Pv(3205);

    function jv(vv, zv) {
      const Pv = (0, wv.storedPackOutcome)(vv, zv);
      return "none" !== Pv.kind || "noCompiler" === Pv.reason
    }
    var fv = Pv(1035),
      Fv = Pv.n(fv),
      Yv = Pv(6328),
      nv = Pv(1042),
      Ov = Pv(6315),
      Dv = Pv(1082);
    const Kv = {
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

    function Vv(vv, zv) {
      return "failedRecheck" === vv && zv.listing ? "shaderPack:statusFailedRecheckListed" : Kv[vv]
    }

    function Uv(vv) {
      let {
        stored: zv,
        checking: Pv,
        webGpuUsable: hv,
        changePending: Sv,
        compiler: ev,
        t: gv
      } = vv;
      const pv = function(vv, zv, Pv, hv, Sv) {
          const ev = (0, wv.storedPackOutcome)(vv, Sv);
          return "none" === ev.kind ? "noCompiler" === ev.reason ? zv ? "checking" : "noCompiler" : "otherApiVersion" === ev.reason ? "wrongApiVersion" : "failed" : (0, mv.e)() ? "harnessBuild" : "blocked" === ev.kind ? (0, wv.shaderPackNeedsCheck)(vv, Sv) ? zv ? "checking" : !1 === Pv ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === Pv ? "offNoWebGpu" : hv ? "readyAfterReload" : "ready"
        }(zv, Pv, hv, Sv, ev),
        dv = "failed" === pv || "failedRecheck" === pv,
        Nv = dv || "wrongApiVersion" === pv || "noCompiler" === pv,
        lv = "ready" === pv || "readyAfterReload" === pv ? zv.validation.offInStrict : [];
      return (0, Dv.jsxs)(Dv.Fragment, {
        children: [(0, Dv.jsxs)("div", {
          className: Fv()("ShaderPackStatus", {
            Ready: "ready" === pv,
            Failed: Nv
          }),
          children: ["ready" === pv && (0, Dv.jsx)(nv.b, {
            name: "circle-check"
          }), Nv && (0, Dv.jsx)(nv.b, {
            name: "triangle-exclamation"
          }), "harnessBuild" === pv ? (0, mv.b)() : gv(Vv(pv, zv), {
            packVersion: String(zv.manifest.apiVersion),
            version: String(Yv.d)
          })]
        }), dv && (0, Dv.jsx)(Ov.e, {
          diagnostics: zv.validation.errors,
          more: zv.validation.moreErrors,
          t: gv
        }), lv.length > 0 && (0, Dv.jsxs)(Dv.Fragment, {
          children: [(0, Dv.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Dv.jsx)(nv.b, {
              name: "triangle-exclamation"
            }), gv("shaderPack:offInStrict")]
          }), (0, Dv.jsx)(Ov.e, {
            diagnostics: lv,
            t: gv
          })]
        })]
      })
    }

    function Rv(vv) {
      let {
        setApplySettingsCallback: zv
      } = vv;
      const {
        t: Pv
      } = (0, pv.x)(), [Sv, gv] = (0, hv.useState)(null), [Nv, lv] = (0, hv.useState)(null), [mv, fv] = (0, hv.useState)(null), [Fv] = (0, hv.useState)(Wv.g), [Yv, nv] = (0, hv.useState)(!0), [Ov, Kv] = (0, hv.useState)(!1), {
        loading: Vv,
        error: Rv,
        setError: tv,
        onFiles: qv
      } = (0, Gv.f)((async vv => {
        const zv = await (0, Tv.loadPageShaderPackCompiler)();
        if (!zv) return void tv(Pv("shaderPack:compilerUnavailable"));
        lv(zv);
        const hv = (0, wv.toStoredShaderPack)(vv, await (0, av.e)(zv, vv.files));
        await (0, wv.saveShaderPack)(hv, zv) ? (gv(hv), Iv(Sv, hv, zv)) : tv(Pv("shaderPack:saveFailed"))
      }));

      function Iv(vv, Pv, hv) {
        (function(vv, zv, Pv, hv) {
          return Pv || jv(vv, hv) || jv(zv, hv)
        })(vv, Pv, (0, wv.isShaderPackChangePending)(), hv) && ((0, wv.markShaderPackChangePending)(), zv((() => iv.l)))
      }
      return (0, hv.useEffect)((() => {
        let vv = !1;
        return async function() {
          const zv = (0, dv.hasUsableWebGpuAdapter)(),
            Pv = await (0, sv.g)();
          if (vv) return;
          gv(Pv), Kv(!0), nv(!1);
          const hv = null !== Pv ? (0, Tv.loadPageShaderPackCompiler)() : null,
            Sv = await zv;
          if (vv) return;
          fv(Sv);
          const ev = await hv;
          if (!vv && (lv(ev), null !== Pv && Sv && null !== ev && (0, wv.shaderPackNeedsCheck)(Pv, ev))) {
            const zv = await (0, av.c)(Pv, ev);
            vv || gv((vv => vv === Pv ? zv : vv))
          }
        }().catch((zv => {
          console.error("Failed to load the stored shader pack", zv), vv || tv(Pv("shaderPack:unexpectedError"))
        })).finally((() => {
          vv || (nv(!1), Kv(!1))
        })), () => {
          vv = !0
        }
      }), []), (0, Dv.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Dv.jsx)("div", {
          className: "ShaderPackIntro",
          children: Pv("shaderPack:intro")
        }), (0, Dv.jsx)(xv, {
          to: Cv.O,
          className: "ShaderPackBrowseLink",
          children: (0, Dv.jsx)(ev.j, {
            className: "ShaderPackBrowseButton",
            children: Pv("shaderPackListing:browse")
          })
        }), !1 === mv && (0, Dv.jsx)("div", {
          className: "SettingsBoxWarning",
          children: Pv(Fv ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Rv && (0, Dv.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [Pv("general:error"), ": ", Rv]
        }), Sv && (0, Dv.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Dv.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Dv.jsxs)("div", {
              children: [(0, Dv.jsx)("div", {
                className: "ShaderPackName",
                children: Sv.manifest.name
              }), Sv.manifest.author && (0, Dv.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, cv.i)(Pv, "shaderPack:byAuthor", {
                  author: Sv.manifest.author
                })
              }), Sv.manifest.description && (0, Dv.jsx)("div", {
                className: "ShaderPackDescription",
                children: Sv.manifest.description
              }), Sv.listing && (0, Dv.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Dv.jsx)(xv, {
                  to: (0, Cv.U)(Sv.listing.packId),
                  className: "ShaderPackListingLink",
                  children: Pv("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Dv.jsx)(ev.E, {
              disabled: Yv || Vv,
              onClick: async function() {
                nv(!0), tv(null), await (0, wv.removeShaderPack)(), gv(null), nv(!1), Iv(Sv, null, Nv)
              },
              children: Pv("shaderPack:removePack")
            })]
          }), (0, Dv.jsx)(Uv, {
            stored: Sv,
            checking: Ov,
            webGpuUsable: mv,
            changePending: (0, wv.isShaderPackChangePending)(),
            compiler: Nv,
            t: Pv
          })]
        }), (0, Dv.jsx)(Gv.d, {
          busy: Yv || Vv || Ov,
          disabled: Yv || Vv || Ov || !0 !== mv,
          onFiles: qv
        })]
      })
    }

    function xv(vv) {
      let {
        to: zv,
        className: Pv,
        children: hv
      } = vv;
      const {
        gameState: ev
      } = (0, Nv.i)(["gameState"]), {
        pathname: pv,
        search: dv
      } = (0, Sv.p)(), Tv = "landingPage" !== ev && "studio" !== ev;
      return (0, Dv.jsx)(gv.LinkPreserveSearch, {
        to: zv,
        className: Pv,
        target: Tv ? "_blank" : void 0,
        onClick: () => {
          Tv || ((0, Cv.H)(`${pv}${dv}`), (0, lv.f)())
        },
        children: hv
      })
    }
  },
  6263: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => iv,
      E: () => Dv,
      H: () => lv,
      I: () => Vv,
      J: () => sv,
      K: () => Zv,
      L: () => Iv,
      O: () => gv,
      R: () => Qv,
      U: () => dv,
      W: () => pv,
      _: () => tv,
      cb: () => qv,
      e: () => cv,
      fb: () => Gv,
      gb: () => Kv,
      h: () => nv,
      k: () => Cv,
      l: () => Wv,
      m: () => Tv,
      n: () => Uv,
      q: () => wv,
      u: () => Rv,
      w: () => Av,
      y: () => av
    });
    var hv = Pv(6268),
      Sv = Pv(144),
      ev = Pv(4319);
    const gv = "/shader-packs",
      pv = `${gv}/publish`;

    function dv(vv) {
      return `${gv}/${encodeURIComponent(vv)}`
    }
    let Nv = null;

    function lv(vv) {
      Nv = vv
    }

    function Tv() {
      return Nv
    }

    function Wv() {
      Nv = null
    }

    function wv(vv) {
      return vv.playerHasRank("developer") || vv.playerHasRank("admin")
    }
    const av = ["terrain", "water", "models", "sunShadows", "strict"],
      sv = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Cv(vv, zv) {
      return vv.withFeatures.includes(zv) ? "with" : vv.withoutFeatures.includes(zv) ? "without" : null
    }

    function iv(vv) {
      return null === vv ? "with" : "with" === vv ? "without" : null
    }

    function cv(vv) {
      return "with" === vv ? "only" : null === vv ? "include" : void 0
    }

    function Gv(vv, zv) {
      const Pv = Cv(vv, zv),
        hv = vv => vv.filter((vv => vv !== zv));
      return {
        withFeatures: null === Pv ? [...vv.withFeatures, zv] : hv(vv.withFeatures),
        withoutFeatures: "with" === Pv ? [...vv.withoutFeatures, zv] : hv(vv.withoutFeatures)
      }
    }
    const mv = "section",
      jv = "sort",
      fv = "filters",
      Fv = "q",
      Yv = "banned",
      nv = "popular",
      Ov = "strict";

    function Dv(vv) {
      var zv, Pv, Sv;
      const gv = vv.get(mv),
        pv = (null !== (zv = vv.get(fv)) && void 0 !== zv ? zv : Ov).split(","),
        dv = vv.get(Yv);
      return {
        section: "favourites" === gv || "mine" === gv ? gv : "explore",
        sort: null !== (Pv = hv.z.find((zv => zv === vv.get(jv)))) && void 0 !== Pv ? Pv : nv,
        withFeatures: av.filter((vv => pv.includes(vv) && !pv.includes(`-${vv}`))),
        withoutFeatures: av.filter((vv => pv.includes(`-${vv}`))),
        searchQuery: (null === (Sv = vv.get(Fv)) || void 0 === Sv ? void 0 : Sv.slice(0, hv.I)) || null,
        pageNumber: (0, ev.f)(vv.get(ev.d)),
        banned: "only" === dv ? "with" : "include" === dv ? null : "without"
      }
    }

    function Kv(vv, zv) {
      var Pv;
      const hv = xv(zv);
      (0, ev.j)(vv, mv, "explore" === zv.section ? null : zv.section), (0, ev.j)(vv, jv, zv.sort === nv ? null : zv.sort), (0, ev.j)(vv, fv, hv === Ov ? null : hv), (0, ev.j)(vv, Fv, zv.searchQuery), (0, ev.j)(vv, Yv, null !== (Pv = cv(zv.banned)) && void 0 !== Pv ? Pv : null), (0, ev.n)(vv, zv.pageNumber)
    }

    function Vv(vv) {
      const zv = new URLSearchParams;
      return Kv(zv, {
        section: "explore",
        sort: nv,
        withFeatures: "strict" === vv ? [vv] : [vv, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${gv}?${zv.toString()}`
    }

    function Uv(vv) {
      return xv(vv) === Ov
    }

    function Rv(vv) {
      return null !== vv.searchQuery || "with" === vv.banned || xv(vv) !== Ov
    }

    function xv(vv) {
      return av.flatMap((zv => {
        const Pv = Cv(vv, zv);
        return "with" === Pv ? [zv] : "without" === Pv ? [`-${zv}`] : []
      })).join(",")
    }
    const tv = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      qv = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Iv(vv) {
      return Math.round(100 * Math.max(0, 1 - 1 / vv))
    }

    function Qv(vv, zv, Pv, Sv) {
      const ev = [];
      vv.isBanned && ev.push({
        tone: "warning",
        text: Sv("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: gv
      } = vv;
      if (null === vv.brokenError || gv && !gv.error || ev.push({
          tone: "warning",
          text: Sv("shaderPackListing:ownerBroken"),
          detail: vv.brokenError
        }), null !== gv && void 0 !== gv && gv.error) ev.push({
        tone: "warning",
        text: Sv(zv ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, hv.k)(gv.error) ? null : gv.error
      });
      else if (gv) {
        const vv = null === gv.renderNotBefore ? 0 : gv.renderNotBefore - Pv,
          hv = String(Math.ceil(vv / 6e4)),
          pv = Sv(zv ? vv > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : vv > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: hv
          });
        ev.push({
          tone: "info",
          text: pv,
          detail: null
        })
      }
      return vv.listed || ev.push({
        tone: "info",
        text: Sv("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ev
    }

    function Zv(vv) {
      return Math.max(1, Math.round(vv / 1024))
    }

    function Av(vv, zv, Pv) {
      return vv instanceof Sv.c && vv.errorMessageForUser ? vv.errorMessageForUser : zv(Pv)
    }
  },
  6268: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => pv,
      B: () => gv,
      D: () => hv,
      G: () => Wv,
      I: () => lv,
      L: () => Gv,
      N: () => Tv,
      R: () => Nv,
      c: () => wv,
      f: () => sv,
      h: () => av,
      k: () => cv,
      o: () => jv,
      q: () => dv,
      t: () => Sv,
      v: () => mv,
      z: () => ev
    });
    const hv = ["forest", "desert", "water", "night", "cave"];
    const Sv = {
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
      ev = ["popular", "updated", "newest"],
      gv = 3,
      pv = 32,
      dv = 300;

    function Nv(vv, zv) {
      return vv.slice(0, zv).replace(/[\uD800-\uDBFF]$/, "")
    }
    const lv = 64,
      Tv = 512,
      Wv = 18e5;
    const wv = "Bloxdhub",
      av = "https://bloxdhub.com/shaders";

    function sv(vv) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(vv)}`
    }
    const Cv = "Screenshot generation failed.",
      iv = "Its screenshots couldn't be generated:";

    function cv(vv) {
      var zv;
      return vv === Cv || null !== (zv = null === vv || void 0 === vv ? void 0 : vv.startsWith(iv)) && void 0 !== zv && zv
    }

    function Gv(vv, zv) {
      return `shaderPacks/${vv}/${zv}.json`
    }

    function mv(vv, zv, Pv, hv) {
      return null === zv.renderId ? jv(vv, zv.baselineVersion, Pv, hv) : `${vv}/${function(vv,zv,Pv,hv){return`shaderPacks/${vv}/${zv}/${Pv}-${hv}.webp`}(zv.packId,zv.renderId,Pv,hv)}`
    }

    function jv(vv, zv, Pv, hv) {
      return `${vv}/${function(vv,zv,Pv){return`shaderPacks/baseline/${vv}/${zv}-${Pv}.webp`}(zv,Pv,hv)}`
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);