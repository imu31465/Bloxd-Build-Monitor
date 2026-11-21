export const id = 123;
export const ids = [123];
export const modules = {
  41065: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      ShaderPackCategory: () => Sd
    });
    var pd = kd(56),
      Nd = kd(1557),
      Wd = kd(1461),
      Pd = kd(1543),
      Zd = kd(1211),
      gd = kd(95),
      Cd = kd(22),
      Kd = kd(1670),
      od = kd(6478),
      ld = kd(282),
      Qd = kd(6526),
      Ld = kd(6522),
      Od = kd(6534),
      ed = kd(6419),
      Rd = kd(4877),
      Id = kd(6464),
      Gd = kd(6472),
      vd = kd(3291);

    function xd(dd, Jd) {
      const kd = (0, Qd.storedPackOutcome)(dd, Jd);
      return "none" !== kd.kind || "noCompiler" === kd.reason
    }
    var qd = kd(1044),
      Bd = kd.n(qd),
      sd = kd(6466),
      ad = kd(1059),
      Md = kd(6459),
      Fd = kd(1103);
    const Yd = {
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

    function md(dd, Jd) {
      return "failedRecheck" === dd && Jd.listing ? "shaderPack:statusFailedRecheckListed" : Yd[dd]
    }

    function bd(dd) {
      let {
        stored: Jd,
        checking: kd,
        webGpuUsable: pd,
        changePending: Nd,
        compiler: Wd,
        t: Pd
      } = dd;
      const Zd = function(dd, Jd, kd, pd, Nd) {
          const Wd = (0, Qd.storedPackOutcome)(dd, Nd);
          return "none" === Wd.kind ? "noCompiler" === Wd.reason ? Jd ? "checking" : "noCompiler" : "otherApiVersion" === Wd.reason ? "wrongApiVersion" : "failed" : (0, vd.d)() ? "harnessBuild" : "blocked" === Wd.kind ? (0, Qd.shaderPackNeedsCheck)(dd, Nd) ? Jd ? "checking" : !1 === kd ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === kd ? "offNoWebGpu" : pd ? "readyAfterReload" : "ready"
        }(Jd, kd, pd, Nd, Wd),
        gd = "failed" === Zd || "failedRecheck" === Zd,
        Cd = gd || "wrongApiVersion" === Zd || "noCompiler" === Zd,
        Kd = "ready" === Zd || "readyAfterReload" === Zd ? Jd.validation.offInStrict : [];
      return (0, Fd.jsxs)(Fd.Fragment, {
        children: [(0, Fd.jsxs)("div", {
          className: Bd()("ShaderPackStatus", {
            Ready: "ready" === Zd,
            Failed: Cd
          }),
          children: ["ready" === Zd && (0, Fd.jsx)(ad.e, {
            name: "circle-check"
          }), Cd && (0, Fd.jsx)(ad.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === Zd ? (0, vd.c)() : Pd(md(Zd, Jd), {
            packVersion: String(Jd.manifest.apiVersion),
            version: String(sd.e)
          })]
        }), gd && (0, Fd.jsx)(Md.c, {
          diagnostics: Jd.validation.errors,
          more: Jd.validation.moreErrors,
          t: Pd
        }), Kd.length > 0 && (0, Fd.jsxs)(Fd.Fragment, {
          children: [(0, Fd.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Fd.jsx)(ad.e, {
              name: "triangle-exclamation"
            }), Pd("shaderPack:offInStrict")]
          }), (0, Fd.jsx)(Md.c, {
            diagnostics: Kd,
            t: Pd
          })]
        })]
      })
    }

    function Sd(dd) {
      let {
        setApplySettingsCallback: Jd
      } = dd;
      const {
        t: kd
      } = (0, Zd.B)(), [Nd, Pd] = (0, pd.useState)(null), [Cd, Kd] = (0, pd.useState)(null), [vd, qd] = (0, pd.useState)(null), [Bd] = (0, pd.useState)(ld.i), [sd, ad] = (0, pd.useState)(!0), [Md, Yd] = (0, pd.useState)(!1), {
        loading: md,
        error: Sd,
        setError: Xd,
        onFiles: fd
      } = (0, Gd.h)((async dd => {
        const Jd = await (0, od.loadPageShaderPackCompiler)();
        if (!Jd) return void Xd(kd("shaderPack:compilerUnavailable"));
        Kd(Jd);
        const pd = (0, Qd.toStoredShaderPack)(dd, await (0, Ld.f)(Jd, dd.files));
        await (0, Qd.saveShaderPack)(pd, Jd) ? (Pd(pd), nd(Nd, pd, Jd)) : Xd(kd("shaderPack:saveFailed"))
      }));

      function nd(dd, kd, pd) {
        (function(dd, Jd, kd, pd) {
          return kd || xd(dd, pd) || xd(Jd, pd)
        })(dd, kd, (0, Qd.isShaderPackChangePending)(), pd) && ((0, Qd.markShaderPackChangePending)(), Jd((() => Rd.l)))
      }
      return (0, pd.useEffect)((() => {
        let dd = !1;
        return async function() {
          const Jd = (0, gd.hasUsableWebGpuAdapter)(),
            kd = await (0, Od.g)();
          if (dd) return;
          Pd(kd), Yd(!0), ad(!1);
          const pd = null !== kd ? (0, od.loadPageShaderPackCompiler)() : null,
            Nd = await Jd;
          if (dd) return;
          qd(Nd);
          const Wd = await pd;
          if (!dd && (Kd(Wd), null !== kd && Nd && null !== Wd && (0, Qd.shaderPackNeedsCheck)(kd, Wd))) {
            const Jd = await (0, Ld.d)(kd, Wd);
            dd || Pd((dd => dd === kd ? Jd : dd))
          }
        }().catch((Jd => {
          console.error("Failed to load the stored shader pack", Jd), dd || Xd(kd("shaderPack:unexpectedError"))
        })).finally((() => {
          dd || (ad(!1), Yd(!1))
        })), () => {
          dd = !0
        }
      }), []), (0, Fd.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Fd.jsx)("div", {
          className: "ShaderPackIntro",
          children: kd("shaderPack:intro")
        }), (0, Fd.jsx)(jd, {
          to: ed.X,
          className: "ShaderPackBrowseLink",
          children: (0, Fd.jsx)(Wd.j, {
            className: "ShaderPackBrowseButton",
            children: kd("shaderPackListing:browse")
          })
        }), !1 === vd && (0, Fd.jsx)("div", {
          className: "SettingsBoxWarning",
          children: kd(Bd ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Sd && (0, Fd.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [kd("general:error"), ": ", Sd]
        }), Nd && (0, Fd.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Fd.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Fd.jsxs)("div", {
              children: [(0, Fd.jsx)("div", {
                className: "ShaderPackName",
                children: Nd.manifest.name
              }), Nd.manifest.author && (0, Fd.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Id.j)(kd, "shaderPack:byAuthor", {
                  author: Nd.manifest.author
                })
              }), Nd.manifest.description && (0, Fd.jsx)("div", {
                className: "ShaderPackDescription",
                children: Nd.manifest.description
              }), Nd.listing && (0, Fd.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Fd.jsx)(jd, {
                  to: (0, ed.$)(Nd.listing.packId),
                  className: "ShaderPackListingLink",
                  children: kd("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Fd.jsx)(Wd.E, {
              disabled: sd || md,
              onClick: async function() {
                ad(!0), Xd(null), await (0, Qd.removeShaderPack)(), Pd(null), ad(!1), nd(Nd, null, Cd)
              },
              children: kd("shaderPack:removePack")
            })]
          }), (0, Fd.jsx)(bd, {
            stored: Nd,
            checking: Md,
            webGpuUsable: vd,
            changePending: (0, Qd.isShaderPackChangePending)(),
            compiler: Cd,
            t: kd
          })]
        }), (0, Fd.jsx)(Gd.e, {
          busy: sd || md || Md,
          disabled: sd || md || Md || !0 !== vd,
          onFiles: fd
        })]
      })
    }

    function jd(dd) {
      let {
        to: Jd,
        className: kd,
        children: pd
      } = dd;
      const {
        gameState: Wd
      } = (0, Cd.j)(["gameState"]), {
        pathname: Zd,
        search: gd
      } = (0, Nd.v)(), od = "landingPage" !== Wd && "studio" !== Wd;
      return (0, Fd.jsx)(Pd.LinkPreserveSearch, {
        to: Jd,
        className: kd,
        target: od ? "_blank" : void 0,
        onClick: () => {
          od || ((0, ed.H)(`${Zd}${gd}`), (0, Kd.e)())
        },
        children: pd
      })
    }
  },
  6419: (dd, Jd, kd) => {
    kd.d(Jd, {
      $: () => gd,
      B: () => Ld,
      C: () => Rd,
      E: () => Fd,
      H: () => Kd,
      L: () => md,
      P: () => Od,
      R: () => yd,
      U: () => nd,
      X: () => Pd,
      _: () => Ud,
      cb: () => Zd,
      e: () => Id,
      fb: () => Xd,
      g: () => ad,
      gb: () => fd,
      ib: () => Gd,
      j: () => ed,
      kb: () => Yd,
      n: () => ld,
      q: () => od,
      r: () => bd,
      t: () => Qd,
      v: () => Sd,
      x: () => Dd
    });
    var pd = kd(6425),
      Nd = kd(149),
      Wd = kd(4411);
    const Pd = "/shader-packs",
      Zd = `${Pd}/publish`;

    function gd(dd) {
      return `${Pd}/${encodeURIComponent(dd)}`
    }
    let Cd = null;

    function Kd(dd) {
      Cd = dd
    }

    function od() {
      return Cd
    }

    function ld() {
      Cd = null
    }

    function Qd(dd) {
      return dd.playerHasRank("developer") || dd.playerHasRank("admin")
    }
    const Ld = ["terrain", "water", "models", "sunShadows", "strict"],
      Od = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function ed(dd, Jd) {
      return dd.withFeatures.includes(Jd) ? "with" : dd.withoutFeatures.includes(Jd) ? "without" : null
    }

    function Rd(dd) {
      return null === dd ? "with" : "with" === dd ? "without" : null
    }

    function Id(dd) {
      return "with" === dd ? "only" : null === dd ? "include" : void 0
    }

    function Gd(dd, Jd) {
      const kd = ed(dd, Jd),
        pd = dd => dd.filter((dd => dd !== Jd));
      return {
        withFeatures: null === kd ? [...dd.withFeatures, Jd] : pd(dd.withFeatures),
        withoutFeatures: "with" === kd ? [...dd.withoutFeatures, Jd] : pd(dd.withoutFeatures)
      }
    }
    const vd = "section",
      xd = "sort",
      qd = "filters",
      Bd = "q",
      sd = "banned",
      ad = "popular",
      Md = "strict";

    function Fd(dd) {
      var Jd, kd, Nd;
      const Pd = dd.get(vd),
        Zd = (null !== (Jd = dd.get(qd)) && void 0 !== Jd ? Jd : Md).split(","),
        gd = dd.get(sd);
      return {
        section: "favourites" === Pd || "mine" === Pd ? Pd : "explore",
        sort: null !== (kd = pd.s.find((Jd => Jd === dd.get(xd)))) && void 0 !== kd ? kd : ad,
        withFeatures: Ld.filter((dd => Zd.includes(dd) && !Zd.includes(`-${dd}`))),
        withoutFeatures: Ld.filter((dd => Zd.includes(`-${dd}`))),
        searchQuery: (null === (Nd = dd.get(Bd)) || void 0 === Nd ? void 0 : Nd.slice(0, pd.B)) || null,
        pageNumber: (0, Wd.e)(dd.get(Wd.b)),
        banned: "only" === gd ? "with" : "include" === gd ? null : "without"
      }
    }

    function Yd(dd, Jd) {
      var kd;
      const pd = jd(Jd);
      (0, Wd.i)(dd, vd, "explore" === Jd.section ? null : Jd.section), (0, Wd.i)(dd, xd, Jd.sort === ad ? null : Jd.sort), (0, Wd.i)(dd, qd, pd === Md ? null : pd), (0, Wd.i)(dd, Bd, Jd.searchQuery), (0, Wd.i)(dd, sd, null !== (kd = Id(Jd.banned)) && void 0 !== kd ? kd : null), (0, Wd.k)(dd, Jd.pageNumber)
    }

    function md(dd) {
      const Jd = new URLSearchParams;
      return Yd(Jd, {
        section: "explore",
        sort: ad,
        withFeatures: "strict" === dd ? [dd] : [dd, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Pd}?${Jd.toString()}`
    }

    function bd(dd) {
      return jd(dd) === Md
    }

    function Sd(dd) {
      return null !== dd.searchQuery || "with" === dd.banned || jd(dd) !== Md
    }

    function jd(dd) {
      return Ld.flatMap((Jd => {
        const kd = ed(dd, Jd);
        return "with" === kd ? [Jd] : "without" === kd ? [`-${Jd}`] : []
      })).join(",")
    }
    const Xd = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      fd = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function nd(dd) {
      return Math.round(100 * Math.max(0, 1 - 1 / dd))
    }

    function Ud(dd, Jd, kd, Nd) {
      const Wd = [];
      dd.isBanned && Wd.push({
        tone: "warning",
        text: Nd("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Pd
      } = dd;
      if (null === dd.brokenError || Pd && !Pd.error || Wd.push({
          tone: "warning",
          text: Nd("shaderPackListing:ownerBroken"),
          detail: dd.brokenError
        }), null !== Pd && void 0 !== Pd && Pd.error) Wd.push({
        tone: "warning",
        text: Nd(Jd ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, pd.h)(Pd.error) ? null : Pd.error
      });
      else if (Pd) {
        const dd = null === Pd.renderNotBefore ? 0 : Pd.renderNotBefore - kd,
          pd = String(Math.ceil(dd / 6e4)),
          Zd = Nd(Jd ? dd > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : dd > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: pd
          });
        Wd.push({
          tone: "info",
          text: Zd,
          detail: null
        })
      }
      return dd.listed || Wd.push({
        tone: "info",
        text: Nd("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Wd
    }

    function yd(dd) {
      return Math.max(1, Math.round(dd / 1024))
    }

    function Dd(dd, Jd, kd) {
      return dd instanceof Nd.c && dd.errorMessageForUser ? dd.errorMessageForUser : Jd(kd)
    }
  },
  6425: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Kd,
      D: () => Gd,
      G: () => od,
      I: () => Cd,
      c: () => Qd,
      f: () => Od,
      g: () => Ld,
      h: () => Id,
      k: () => xd,
      m: () => gd,
      p: () => Nd,
      q: () => vd,
      s: () => Wd,
      t: () => Zd,
      v: () => Pd,
      w: () => pd,
      z: () => ld
    });
    const pd = ["forest", "desert", "water", "night", "cave"];
    const Nd = {
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
      Wd = ["popular", "updated", "newest"],
      Pd = 3,
      Zd = 32,
      gd = 300;

    function Cd(dd, Jd) {
      return dd.slice(0, Jd).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Kd = 64,
      od = 512,
      ld = 18e5;
    const Qd = "Bloxdhub",
      Ld = "https://bloxdhub.com/shaders";

    function Od(dd) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(dd)}`
    }
    const ed = "Screenshot generation failed.",
      Rd = "Its screenshots couldn't be generated:";

    function Id(dd) {
      var Jd;
      return dd === ed || null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.startsWith(Rd)) && void 0 !== Jd && Jd
    }

    function Gd(dd, Jd) {
      return `shaderPacks/${dd}/${Jd}.json`
    }

    function vd(dd, Jd, kd, pd) {
      return null === Jd.renderId ? xd(dd, Jd.baselineVersion, kd, pd) : `${dd}/${function(dd,Jd,kd,pd){return`shaderPacks/${dd}/${Jd}/${kd}-${pd}.webp`}(Jd.packId,Jd.renderId,kd,pd)}`
    }

    function xd(dd, Jd, kd, pd) {
      return `${dd}/${function(dd,Jd,kd){return`shaderPacks/baseline/${dd}/${Jd}-${kd}.webp`}(Jd,kd,pd)}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);