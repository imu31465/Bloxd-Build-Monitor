export const id = 114;
export const ids = [114];
export const modules = {
  39554: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      ShaderPackCategory: () => Xy
    });
    var Uy = Wy(55),
      hy = Wy(1370),
      fy = Wy(1273),
      Zy = Wy(1356),
      cb = Wy(1042),
      Py = Wy(94),
      oy = Wy(19),
      By = Wy(1458),
      Ky = Wy(5867),
      ey = Wy(240),
      qb = Wy(5915),
      sy = Wy(5911),
      Sy = Wy(5923),
      Ey = Wy(5799),
      ly = Wy(4200),
      mb = Wy(5850),
      Cy = Wy(5860),
      Ty = Wy(2756);

    function Vy(yb, bb) {
      const Wy = (0, qb.storedPackOutcome)(yb, bb);
      return "none" !== Wy.kind || "noCompiler" === Wy.reason
    }
    var Jy = Wy(898),
      gb = Wy.n(Jy),
      Gy = Wy(5852),
      Oy = Wy(910),
      Ry = Wy(5844),
      vb = Wy(952);
    const ib = {
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

    function My(yb, bb) {
      return "failedRecheck" === yb && bb.listing ? "shaderPack:statusFailedRecheckListed" : ib[yb]
    }

    function Yy(yb) {
      let {
        stored: bb,
        checking: Wy,
        webGpuUsable: Uy,
        changePending: hy,
        compiler: fy,
        t: Zy
      } = yb;
      const cb = function(yb, bb, Wy, Uy, hy) {
          const fy = (0, qb.storedPackOutcome)(yb, hy);
          return "none" === fy.kind ? "noCompiler" === fy.reason ? bb ? "checking" : "noCompiler" : "otherApiVersion" === fy.reason ? "wrongApiVersion" : "failed" : (0, Ty.f)() ? "harnessBuild" : "blocked" === fy.kind ? (0, qb.shaderPackNeedsCheck)(yb, hy) ? bb ? "checking" : !1 === Wy ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === Wy ? "offNoWebGpu" : Uy ? "readyAfterReload" : "ready"
        }(bb, Wy, Uy, hy, fy),
        Py = "failed" === cb || "failedRecheck" === cb,
        oy = Py || "wrongApiVersion" === cb || "noCompiler" === cb,
        By = "ready" === cb || "readyAfterReload" === cb ? bb.validation.offInStrict : [];
      return (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsxs)("div", {
          className: gb()("ShaderPackStatus", {
            Ready: "ready" === cb,
            Failed: oy
          }),
          children: ["ready" === cb && (0, vb.jsx)(Oy.e, {
            name: "circle-check"
          }), oy && (0, vb.jsx)(Oy.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === cb ? (0, Ty.c)() : Zy(My(cb, bb), {
            packVersion: String(bb.manifest.apiVersion),
            version: String(Gy.c)
          })]
        }), Py && (0, vb.jsx)(Ry.d, {
          diagnostics: bb.validation.errors,
          more: bb.validation.moreErrors,
          t: Zy
        }), By.length > 0 && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, vb.jsx)(Oy.e, {
              name: "triangle-exclamation"
            }), Zy("shaderPack:offInStrict")]
          }), (0, vb.jsx)(Ry.d, {
            diagnostics: By,
            t: Zy
          })]
        })]
      })
    }

    function Xy(yb) {
      let {
        setApplySettingsCallback: bb
      } = yb;
      const {
        t: Wy
      } = (0, cb.D)(), [hy, Zy] = (0, Uy.useState)(null), [oy, By] = (0, Uy.useState)(null), [Ty, Jy] = (0, Uy.useState)(null), [gb] = (0, Uy.useState)(ey.b), [Gy, Oy] = (0, Uy.useState)(!0), [Ry, ib] = (0, Uy.useState)(!1), {
        loading: My,
        error: Xy,
        setError: uy,
        onFiles: rb
      } = (0, Cy.f)((async yb => {
        const bb = await (0, Ky.loadPageShaderPackCompiler)();
        if (!bb) return void uy(Wy("shaderPack:compilerUnavailable"));
        By(bb);
        const Uy = (0, qb.toStoredShaderPack)(yb, await (0, sy.e)(bb, yb.files));
        await (0, qb.saveShaderPack)(Uy, bb) ? (Zy(Uy), Hy(hy, Uy, bb)) : uy(Wy("shaderPack:saveFailed"))
      }));

      function Hy(yb, Wy, Uy) {
        (function(yb, bb, Wy, Uy) {
          return Wy || Vy(yb, Uy) || Vy(bb, Uy)
        })(yb, Wy, (0, qb.isShaderPackChangePending)(), Uy) && ((0, qb.markShaderPackChangePending)(), bb((() => ly.g)))
      }
      return (0, Uy.useEffect)((() => {
        let yb = !1;
        return async function() {
          const bb = (0, Py.hasUsableWebGpuAdapter)(),
            Wy = await (0, Sy.g)();
          if (yb) return;
          Zy(Wy), ib(!0), Oy(!1);
          const Uy = null !== Wy ? (0, Ky.loadPageShaderPackCompiler)() : null,
            hy = await bb;
          if (yb) return;
          Jy(hy);
          const fy = await Uy;
          if (!yb && (By(fy), null !== Wy && hy && null !== fy && (0, qb.shaderPackNeedsCheck)(Wy, fy))) {
            const bb = await (0, sy.c)(Wy, fy);
            yb || Zy((yb => yb === Wy ? bb : yb))
          }
        }().catch((bb => {
          console.error("Failed to load the stored shader pack", bb), yb || uy(Wy("shaderPack:unexpectedError"))
        })).finally((() => {
          yb || (Oy(!1), ib(!1))
        })), () => {
          yb = !0
        }
      }), []), (0, vb.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, vb.jsx)("div", {
          className: "ShaderPackIntro",
          children: Wy("shaderPack:intro")
        }), (0, vb.jsx)(ny, {
          to: Ey.P,
          className: "ShaderPackBrowseLink",
          children: (0, vb.jsx)(fy.i, {
            className: "ShaderPackBrowseButton",
            children: Wy("shaderPackListing:browse")
          })
        }), !1 === Ty && (0, vb.jsx)("div", {
          className: "SettingsBoxWarning",
          children: Wy(gb ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Xy && (0, vb.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [Wy("general:error"), ": ", Xy]
        }), hy && (0, vb.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, vb.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, vb.jsxs)("div", {
              children: [(0, vb.jsx)("div", {
                className: "ShaderPackName",
                children: hy.manifest.name
              }), hy.manifest.author && (0, vb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, mb.f)(Wy, "shaderPack:byAuthor", {
                  author: hy.manifest.author
                })
              }), hy.manifest.description && (0, vb.jsx)("div", {
                className: "ShaderPackDescription",
                children: hy.manifest.description
              }), hy.listing && (0, vb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, vb.jsx)(ny, {
                  to: (0, Ey.U)(hy.listing.packId),
                  className: "ShaderPackListingLink",
                  children: Wy("shaderPackListing:openPackPage")
                })
              })]
            }), (0, vb.jsx)(fy.F, {
              disabled: Gy || My,
              onClick: async function() {
                Oy(!0), uy(null), await (0, qb.removeShaderPack)(), Zy(null), Oy(!1), Hy(hy, null, oy)
              },
              children: Wy("shaderPack:removePack")
            })]
          }), (0, vb.jsx)(Yy, {
            stored: hy,
            checking: Ry,
            webGpuUsable: Ty,
            changePending: (0, qb.isShaderPackChangePending)(),
            compiler: oy,
            t: Wy
          })]
        }), (0, vb.jsx)(Cy.d, {
          busy: Gy || My || Ry,
          disabled: Gy || My || Ry || !0 !== Ty,
          onFiles: rb
        })]
      })
    }

    function ny(yb) {
      let {
        to: bb,
        className: Wy,
        children: Uy
      } = yb;
      const {
        gameState: fy
      } = (0, oy.h)(["gameState"]), {
        pathname: cb,
        search: Py
      } = (0, hy.y)(), Ky = "landingPage" !== fy && "studio" !== fy;
      return (0, vb.jsx)(Zy.LinkPreserveSearch, {
        to: bb,
        className: Wy,
        target: Ky ? "_blank" : void 0,
        onClick: () => {
          Ky || ((0, Ey.D)(`${cb}${Py}`), (0, By.f)())
        },
        children: Uy
      })
    }
  },
  5799: (yb, bb, Wy) => {
    Wy.d(bb, {
      $: () => rb,
      D: () => By,
      F: () => My,
      I: () => Sy,
      J: () => Fy,
      L: () => Hy,
      P: () => Zy,
      S: () => ab,
      U: () => Py,
      V: () => cb,
      Z: () => uy,
      ab: () => Cy,
      bb: () => ib,
      d: () => mb,
      g: () => Oy,
      j: () => Ey,
      k: () => ey,
      m: () => Ky,
      n: () => Yy,
      o: () => qb,
      p: () => Xy,
      t: () => py,
      u: () => sy,
      v: () => ly,
      z: () => vb
    });
    var Uy = Wy(5801),
      hy = Wy(143),
      fy = Wy(3758);
    const Zy = "/shader-packs",
      cb = `${Zy}/publish`;

    function Py(yb) {
      return `${Zy}/${encodeURIComponent(yb)}`
    }
    let oy = null;

    function By(yb) {
      oy = yb
    }

    function Ky() {
      return oy
    }

    function ey() {
      oy = null
    }

    function qb(yb) {
      return yb.playerHasRank("developer") || yb.playerHasRank("admin")
    }
    const sy = ["terrain", "water", "models", "sunShadows", "strict"],
      Sy = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Ey(yb, bb) {
      return yb.withFeatures.includes(bb) ? "with" : yb.withoutFeatures.includes(bb) ? "without" : null
    }

    function ly(yb) {
      return null === yb ? "with" : "with" === yb ? "without" : null
    }

    function mb(yb) {
      return "with" === yb ? "only" : null === yb ? "include" : void 0
    }

    function Cy(yb, bb) {
      const Wy = Ey(yb, bb),
        Uy = yb => yb.filter((yb => yb !== bb));
      return {
        withFeatures: null === Wy ? [...yb.withFeatures, bb] : Uy(yb.withFeatures),
        withoutFeatures: "with" === Wy ? [...yb.withoutFeatures, bb] : Uy(yb.withoutFeatures)
      }
    }
    const Ty = "section",
      Vy = "sort",
      Jy = "filters",
      gb = "q",
      Gy = "banned",
      Oy = "popular",
      Ry = "strict";

    function vb(yb) {
      var bb, Wy, hy;
      const Zy = yb.get(Ty),
        cb = (null !== (bb = yb.get(Jy)) && void 0 !== bb ? bb : Ry).split(","),
        Py = yb.get(Gy);
      return {
        section: "favourites" === Zy || "mine" === Zy ? Zy : "explore",
        sort: null !== (Wy = Uy.D.find((bb => bb === yb.get(Vy)))) && void 0 !== Wy ? Wy : Oy,
        withFeatures: sy.filter((yb => cb.includes(yb) && !cb.includes(`-${yb}`))),
        withoutFeatures: sy.filter((yb => cb.includes(`-${yb}`))),
        searchQuery: (null === (hy = yb.get(gb)) || void 0 === hy ? void 0 : hy.slice(0, Uy.S)) || null,
        pageNumber: (0, fy.i)(yb.get(fy.e)),
        banned: "only" === Py ? "with" : "include" === Py ? null : "without"
      }
    }

    function ib(yb, bb) {
      var Wy;
      const Uy = ny(bb);
      (0, fy.k)(yb, Ty, "explore" === bb.section ? null : bb.section), (0, fy.k)(yb, Vy, bb.sort === Oy ? null : bb.sort), (0, fy.k)(yb, Jy, Uy === Ry ? null : Uy), (0, fy.k)(yb, gb, bb.searchQuery), (0, fy.k)(yb, Gy, null !== (Wy = mb(bb.banned)) && void 0 !== Wy ? Wy : null), (0, fy.n)(yb, bb.pageNumber)
    }

    function My(yb) {
      const bb = new URLSearchParams;
      return ib(bb, {
        section: "explore",
        sort: Oy,
        withFeatures: "strict" === yb ? [yb] : [yb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Zy}?${bb.toString()}`
    }

    function Yy(yb) {
      return ny(yb) === Ry
    }

    function Xy(yb) {
      return null !== yb.searchQuery || "with" === yb.banned || ny(yb) !== Ry
    }

    function ny(yb) {
      return sy.flatMap((bb => {
        const Wy = Ey(yb, bb);
        return "with" === Wy ? [bb] : "without" === Wy ? [`-${bb}`] : []
      })).join(",")
    }
    const uy = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      rb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Hy(yb) {
      return Math.round(100 * Math.max(0, 1 - 1 / yb))
    }

    function ab(yb, bb, Wy, hy) {
      const fy = [];
      yb.isBanned && fy.push({
        tone: "warning",
        text: hy("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Zy
      } = yb;
      if (null === yb.brokenError || Zy && !Zy.error || fy.push({
          tone: "warning",
          text: hy("shaderPackListing:ownerBroken"),
          detail: yb.brokenError
        }), null !== Zy && void 0 !== Zy && Zy.error) fy.push({
        tone: "warning",
        text: hy(bb ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Uy.m)(Zy.error) ? null : Zy.error
      });
      else if (Zy) {
        const yb = null === Zy.renderNotBefore ? 0 : Zy.renderNotBefore - Wy,
          Uy = String(Math.ceil(yb / 6e4)),
          cb = hy(bb ? yb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : yb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Uy
          });
        fy.push({
          tone: "info",
          text: cb,
          detail: null
        })
      }
      return yb.listed || fy.push({
        tone: "info",
        text: hy("shaderPackListing:ownerUnlisted"),
        detail: null
      }), fy
    }

    function Fy(yb) {
      return Math.max(1, Math.round(yb / 1024))
    }

    function py(yb, bb, Wy) {
      return yb instanceof hy.c && yb.errorMessageForUser ? yb.errorMessageForUser : bb(Wy)
    }
  },
  5801: (yb, bb, Wy) => {
    Wy.d(bb, {
      D: () => fy,
      H: () => cb,
      J: () => Zy,
      N: () => Uy,
      R: () => ey,
      S: () => By,
      U: () => Cy,
      V: () => Ky,
      Y: () => oy,
      e: () => qb,
      h: () => Sy,
      l: () => sy,
      m: () => mb,
      p: () => Vy,
      r: () => Py,
      v: () => hy,
      z: () => Ty
    });
    const Uy = ["forest", "desert", "water", "night", "cave"];
    const hy = {
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
      fy = ["popular", "updated", "newest"],
      Zy = 3,
      cb = 32,
      Py = 300;

    function oy(yb, bb) {
      return yb.slice(0, bb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const By = 64,
      Ky = 512,
      ey = 18e5;
    const qb = "Bloxdhub",
      sy = "https://bloxdhub.com/shaders";

    function Sy(yb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(yb)}`
    }
    const Ey = "Screenshot generation failed.",
      ly = "Its screenshots couldn't be generated:";

    function mb(yb) {
      var bb;
      return yb === Ey || null !== (bb = null === yb || void 0 === yb ? void 0 : yb.startsWith(ly)) && void 0 !== bb && bb
    }

    function Cy(yb, bb) {
      return `shaderPacks/${yb}/${bb}.json`
    }

    function Ty(yb, bb, Wy, Uy) {
      return null === bb.renderId ? Vy(yb, bb.baselineVersion, Wy, Uy) : `${yb}/${function(yb,bb,Wy,Uy){return`shaderPacks/${yb}/${bb}/${Wy}-${Uy}.webp`}(bb.packId,bb.renderId,Wy,Uy)}`
    }

    function Vy(yb, bb, Wy, Uy) {
      return `${yb}/${function(yb,bb,Wy){return`shaderPacks/baseline/${yb}/${bb}-${Wy}.webp`}(bb,Wy,Uy)}`
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);