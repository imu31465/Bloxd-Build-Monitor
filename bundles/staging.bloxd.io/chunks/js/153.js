export const id = 153;
export const ids = [153];
export const modules = {
  43019: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      ShaderPackCategory: () => Vd
    });
    var Wd = md(66),
      Fd = md(1650),
      Rd = md(1572),
      Xd = md(1641),
      Kd = md(1238),
      hd = md(107),
      vd = md(29),
      Qd = md(1765),
      td = md(7566),
      od = md(373),
      Nd = md(7598),
      qd = md(7595),
      Hd = md(7602),
      yd = md(7509),
      bd = md(5901),
      Td = md(5947),
      pd = md(7561),
      Yd = md(4678);

    function gd(dd, Od) {
      const md = (0, Nd.storedPackOutcome)(dd, Od);
      return "none" !== md.kind || "noCompiler" === md.reason
    }
    var wd = md(1155),
      Ed = md.n(wd),
      Jd = md(5951),
      Ud = md(1443),
      xd = md(7558),
      Bd = md(1341);
    const Sd = {
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

    function sd(dd, Od) {
      return "failedRecheck" === dd && Od.listing ? "shaderPack:statusFailedRecheckListed" : Sd[dd]
    }

    function ud(dd) {
      let {
        stored: Od,
        checking: md,
        webGpuUsable: Wd,
        changePending: Fd,
        compiler: Rd,
        t: Xd
      } = dd;
      const Kd = function(dd, Od, md, Wd, Fd) {
          const Rd = (0, Nd.storedPackOutcome)(dd, Fd);
          return "none" === Rd.kind ? "noCompiler" === Rd.reason ? Od ? "checking" : "noCompiler" : "otherApiVersion" === Rd.reason ? "wrongApiVersion" : "failed" : (0, Yd.d)() ? "harnessBuild" : "blocked" === Rd.kind ? (0, Nd.shaderPackNeedsCheck)(dd, Fd) ? Od ? "checking" : !1 === md ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === md ? "offNoWebGpu" : Wd ? "readyAfterReload" : "ready"
        }(Od, md, Wd, Fd, Rd),
        hd = "failed" === Kd || "failedRecheck" === Kd,
        vd = hd || "wrongApiVersion" === Kd || "noCompiler" === Kd,
        Qd = "ready" === Kd || "readyAfterReload" === Kd ? Od.validation.offInStrict : [];
      return (0, Bd.jsxs)(Bd.Fragment, {
        children: [(0, Bd.jsxs)("div", {
          className: Ed()("ShaderPackStatus", {
            Ready: "ready" === Kd,
            Failed: vd
          }),
          children: ["ready" === Kd && (0, Bd.jsx)(Ud.c, {
            name: "circle-check"
          }), vd && (0, Bd.jsx)(Ud.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === Kd ? (0, Yd.c)() : Xd(sd(Kd, Od), {
            packVersion: String(Od.manifest.apiVersion),
            version: String(Jd.c)
          })]
        }), hd && (0, Bd.jsx)(xd.e, {
          diagnostics: Od.validation.errors,
          more: Od.validation.moreErrors,
          t: Xd
        }), Qd.length > 0 && (0, Bd.jsxs)(Bd.Fragment, {
          children: [(0, Bd.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Bd.jsx)(Ud.c, {
              name: "triangle-exclamation"
            }), Xd("shaderPack:offInStrict")]
          }), (0, Bd.jsx)(xd.e, {
            diagnostics: Qd,
            t: Xd
          })]
        })]
      })
    }

    function Vd(dd) {
      let {
        setApplySettingsCallback: Od
      } = dd;
      const {
        t: md
      } = (0, Kd.G)(), [Fd, Xd] = (0, Wd.useState)(null), [vd, Qd] = (0, Wd.useState)(null), [Yd, wd] = (0, Wd.useState)(null), [Ed] = (0, Wd.useState)(od.f), [Jd, Ud] = (0, Wd.useState)(!0), [xd, Sd] = (0, Wd.useState)(!1), {
        loading: sd,
        error: Vd,
        setError: rd,
        onFiles: Gd
      } = (0, pd.c)((async dd => {
        const Od = await (0, td.loadPageShaderPackCompiler)();
        if (!Od) return void rd(md("shaderPack:compilerUnavailable"));
        Qd(Od);
        const Wd = (0, Nd.toStoredShaderPack)(dd, await (0, qd.e)(Od, dd.files));
        await (0, Nd.saveShaderPack)(Wd, Od) ? (Xd(Wd), nd(Fd, Wd, Od)) : rd(md("shaderPack:saveFailed"))
      }));

      function nd(dd, md, Wd) {
        (function(dd, Od, md, Wd) {
          return md || gd(dd, Wd) || gd(Od, Wd)
        })(dd, md, (0, Nd.isShaderPackChangePending)(), Wd) && ((0, Nd.markShaderPackChangePending)(), Od((() => bd.l)))
      }
      return (0, Wd.useEffect)((() => {
        let dd = !1;
        return async function() {
          const Od = (0, hd.hasUsableWebGpuAdapter)(),
            md = await (0, Hd.g)();
          if (dd) return;
          Xd(md), Sd(!0), Ud(!1);
          const Wd = null !== md ? (0, td.loadPageShaderPackCompiler)() : null,
            Fd = await Od;
          if (dd) return;
          wd(Fd);
          const Rd = await Wd;
          if (!dd && (Qd(Rd), null !== md && Fd && null !== Rd && (0, Nd.shaderPackNeedsCheck)(md, Rd))) {
            const Od = await (0, qd.c)(md, Rd);
            dd || Xd((dd => dd === md ? Od : dd))
          }
        }().catch((Od => {
          console.error("Failed to load the stored shader pack", Od), dd || rd(md("shaderPack:unexpectedError"))
        })).finally((() => {
          dd || (Ud(!1), Sd(!1))
        })), () => {
          dd = !0
        }
      }), []), (0, Bd.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Bd.jsx)("div", {
          className: "ShaderPackIntro",
          children: md("shaderPack:intro")
        }), (0, Bd.jsx)(Ad, {
          to: yd.U,
          className: "ShaderPackBrowseLink",
          children: (0, Bd.jsx)(Rd.m, {
            className: "ShaderPackBrowseButton",
            children: md("shaderPackListing:browse")
          })
        }), !1 === Yd && (0, Bd.jsx)("div", {
          className: "SettingsBoxWarning",
          children: md(Ed ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Vd && (0, Bd.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [md("general:error"), ": ", Vd]
        }), Fd && (0, Bd.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Bd.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Bd.jsxs)("div", {
              children: [(0, Bd.jsx)("div", {
                className: "ShaderPackName",
                children: Fd.manifest.name
              }), Fd.manifest.author && (0, Bd.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Td.i)(md, "shaderPack:byAuthor", {
                  author: Fd.manifest.author
                })
              }), Fd.manifest.description && (0, Bd.jsx)("div", {
                className: "ShaderPackDescription",
                children: Fd.manifest.description
              }), Fd.listing && (0, Bd.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Bd.jsx)(Ad, {
                  to: (0, yd.Y)(Fd.listing.packId),
                  className: "ShaderPackListingLink",
                  children: md("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Bd.jsx)(Rd.K, {
              disabled: Jd || sd,
              onClick: async function() {
                Ud(!0), rd(null), await (0, Nd.removeShaderPack)(), Xd(null), Ud(!1), nd(Fd, null, vd)
              },
              children: md("shaderPack:removePack")
            })]
          }), (0, Bd.jsx)(ud, {
            stored: Fd,
            checking: xd,
            webGpuUsable: Yd,
            changePending: (0, Nd.isShaderPackChangePending)(),
            compiler: vd,
            t: md
          })]
        }), (0, Bd.jsx)(pd.b, {
          busy: Jd || sd || xd,
          disabled: Jd || sd || xd || !0 !== Yd,
          onFiles: Gd
        })]
      })
    }

    function Ad(dd) {
      let {
        to: Od,
        className: md,
        children: Wd
      } = dd;
      const {
        gameState: Rd
      } = (0, vd.p)(["gameState"]), {
        pathname: Kd,
        search: hd
      } = (0, Fd.p)(), td = "landingPage" !== Rd && "studio" !== Rd;
      return (0, Bd.jsx)(Xd.LinkPreserveSearch, {
        to: Od,
        className: md,
        target: td ? "_blank" : void 0,
        onClick: () => {
          td || ((0, yd.L)(`${Kd}${hd}`), (0, Qd.g)())
        },
        children: Wd
      })
    }
  },
  7509: (dd, Od, md) => {
    md.d(Od, {
      D: () => bd,
      H: () => Bd,
      L: () => Qd,
      N: () => sd,
      O: () => Hd,
      Q: () => Pd,
      R: () => nd,
      U: () => Xd,
      X: () => Ld,
      Y: () => hd,
      ab: () => Kd,
      d: () => Td,
      eb: () => rd,
      f: () => Ud,
      hb: () => Gd,
      i: () => yd,
      k: () => od,
      l: () => td,
      lb: () => pd,
      mb: () => Sd,
      p: () => ud,
      r: () => Nd,
      u: () => Vd,
      w: () => zd,
      z: () => qd
    });
    var Wd = md(7512),
      Fd = md(180),
      Rd = md(5223);
    const Xd = "/shader-packs",
      Kd = `${Xd}/publish`;

    function hd(dd) {
      return `${Xd}/${encodeURIComponent(dd)}`
    }
    let vd = null;

    function Qd(dd) {
      vd = dd
    }

    function td() {
      return vd
    }

    function od() {
      vd = null
    }

    function Nd(dd) {
      return dd.playerHasRank("developer") || dd.playerHasRank("admin")
    }
    const qd = ["terrain", "water", "models", "sunShadows", "strict"],
      Hd = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function yd(dd, Od) {
      return dd.withFeatures.includes(Od) ? "with" : dd.withoutFeatures.includes(Od) ? "without" : null
    }

    function bd(dd) {
      return null === dd ? "with" : "with" === dd ? "without" : null
    }

    function Td(dd) {
      return "with" === dd ? "only" : null === dd ? "include" : void 0
    }

    function pd(dd, Od) {
      const md = yd(dd, Od),
        Wd = dd => dd.filter((dd => dd !== Od));
      return {
        withFeatures: null === md ? [...dd.withFeatures, Od] : Wd(dd.withFeatures),
        withoutFeatures: "with" === md ? [...dd.withoutFeatures, Od] : Wd(dd.withoutFeatures)
      }
    }
    const Yd = "section",
      gd = "sort",
      wd = "filters",
      Ed = "q",
      Jd = "banned",
      Ud = "popular",
      xd = "strict";

    function Bd(dd) {
      var Od, md, Fd;
      const Xd = dd.get(Yd),
        Kd = (null !== (Od = dd.get(wd)) && void 0 !== Od ? Od : xd).split(","),
        hd = dd.get(Jd);
      return {
        section: "favourites" === Xd || "mine" === Xd ? Xd : "explore",
        sort: null !== (md = Wd.v.find((Od => Od === dd.get(gd)))) && void 0 !== md ? md : Ud,
        withFeatures: qd.filter((dd => Kd.includes(dd) && !Kd.includes(`-${dd}`))),
        withoutFeatures: qd.filter((dd => Kd.includes(`-${dd}`))),
        searchQuery: (null === (Fd = dd.get(Ed)) || void 0 === Fd ? void 0 : Fd.slice(0, Wd.F)) || null,
        pageNumber: (0, Rd.e)(dd.get(Rd.d)),
        banned: "only" === hd ? "with" : "include" === hd ? null : "without"
      }
    }

    function Sd(dd, Od) {
      var md;
      const Wd = Ad(Od);
      (0, Rd.g)(dd, Yd, "explore" === Od.section ? null : Od.section), (0, Rd.g)(dd, gd, Od.sort === Ud ? null : Od.sort), (0, Rd.g)(dd, wd, Wd === xd ? null : Wd), (0, Rd.g)(dd, Ed, Od.searchQuery), (0, Rd.g)(dd, Jd, null !== (md = Td(Od.banned)) && void 0 !== md ? md : null), (0, Rd.j)(dd, Od.pageNumber)
    }

    function sd(dd) {
      const Od = new URLSearchParams;
      return Sd(Od, {
        section: "explore",
        sort: Ud,
        withFeatures: "strict" === dd ? [dd] : [dd, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Xd}?${Od.toString()}`
    }

    function ud(dd) {
      return Ad(dd) === xd
    }

    function Vd(dd) {
      return null !== dd.searchQuery || "with" === dd.banned || Ad(dd) !== xd
    }

    function Ad(dd) {
      return qd.flatMap((Od => {
        const md = yd(dd, Od);
        return "with" === md ? [Od] : "without" === md ? [`-${Od}`] : []
      })).join(",")
    }
    const rd = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Gd = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function nd(dd) {
      return Math.round(100 * Math.max(0, 1 - 1 / dd))
    }

    function Ld(dd, Od, md, Fd) {
      const Rd = [];
      dd.isBanned && Rd.push({
        tone: "warning",
        text: Fd("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Xd
      } = dd;
      if (null === dd.brokenError || Xd && !Xd.error || Rd.push({
          tone: "warning",
          text: Fd("shaderPackListing:ownerBroken"),
          detail: dd.brokenError
        }), null !== Xd && void 0 !== Xd && Xd.error) Rd.push({
        tone: "warning",
        text: Fd(Od ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Wd.m)(Xd.error) ? null : Xd.error
      });
      else if (Xd) {
        const dd = null === Xd.renderNotBefore ? 0 : Xd.renderNotBefore - md,
          Wd = String(Math.ceil(dd / 6e4)),
          Kd = Fd(Od ? dd > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : dd > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Wd
          });
        Rd.push({
          tone: "info",
          text: Kd,
          detail: null
        })
      }
      return dd.listed || Rd.push({
        tone: "info",
        text: Fd("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Rd
    }

    function Pd(dd) {
      return Math.max(1, Math.round(dd / 1024))
    }

    function zd(dd, Od, md) {
      return dd instanceof Fd.e && dd.errorMessageForUser ? dd.errorMessageForUser : Od(md)
    }
  },
  7512: (dd, Od, md) => {
    md.d(Od, {
      A: () => Wd,
      D: () => od,
      F: () => Qd,
      H: () => Yd,
      L: () => td,
      P: () => vd,
      d: () => qd,
      f: () => yd,
      j: () => Hd,
      l: () => Nd,
      m: () => pd,
      n: () => wd,
      p: () => hd,
      q: () => Fd,
      r: () => gd,
      v: () => Rd,
      w: () => Kd,
      y: () => Xd
    });
    const Wd = ["forest", "desert", "water", "night", "cave"];
    const Fd = {
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
      Rd = ["popular", "updated", "newest"],
      Xd = 3,
      Kd = 32,
      hd = 300;

    function vd(dd, Od) {
      return dd.slice(0, Od).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Qd = 64,
      td = 512,
      od = 18e5;

    function Nd(dd) {
      const Od = dd,
        md = null === Od || void 0 === Od ? void 0 : Od.files;
      return "number" === typeof(null === Od || void 0 === Od ? void 0 : Od.apiVersion) && "string" === typeof Od.name && (null === Od.author || "string" === typeof Od.author) && (void 0 === Od.keepCircleShadows || "boolean" === typeof Od.keepCircleShadows) && "object" === typeof md && null !== md && Object.values(md).every((dd => "string" === typeof dd))
    }
    const qd = "Bloxdhub",
      Hd = "https://bloxdhub.com/shaders";

    function yd(dd) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(dd)}`
    }
    const bd = "Screenshot generation failed.",
      Td = "Its screenshots couldn't be generated:";

    function pd(dd) {
      var Od;
      return dd === bd || null !== (Od = null === dd || void 0 === dd ? void 0 : dd.startsWith(Td)) && void 0 !== Od && Od
    }

    function Yd(dd, Od) {
      return `shaderPacks/${dd}/${Od}.json`
    }

    function gd(dd, Od, md, Wd) {
      return null === Od.renderId ? wd(dd, Od.baselineVersion, md, Wd) : `${dd}/${function(dd,Od,md,Wd){return`shaderPacks/${dd}/${Od}/${md}-${Wd}.webp`}(Od.packId,Od.renderId,md,Wd)}`
    }

    function wd(dd, Od, md, Wd) {
      return `${dd}/${function(dd,Od,md){return`shaderPacks/baseline/${dd}/${Od}-${md}.webp`}(Od,md,Wd)}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);