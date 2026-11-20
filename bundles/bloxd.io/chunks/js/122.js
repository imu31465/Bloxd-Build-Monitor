export const id = 122;
export const ids = [122];
export const modules = {
  40642: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      ShaderPackCategory: () => nu
    });
    var Eu = yu(64),
      Ku = yu(1483),
      Qu = yu(1408),
      mu = yu(1467),
      Ju = yu(1170),
      Nu = yu(106),
      Xu = yu(27),
      Vu = yu(1583),
      ru = yu(6395),
      Bu = yu(305),
      xu = yu(6430),
      Su = yu(6424),
      pu = yu(6436),
      Tu = yu(6314),
      Wu = yu(4782),
      ju = yu(6379),
      Hu = yu(6389),
      du = yu(3262);

    function bu(uu, Ru) {
      const yu = (0, xu.storedPackOutcome)(uu, Ru);
      return "none" !== yu.kind || "noCompiler" === yu.reason
    }
    var Cu = yu(1035),
      ku = yu.n(Cu),
      eu = yu(6381),
      Au = yu(1043),
      Du = yu(6370),
      Mu = yu(1079);
    const Iu = {
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

    function Gu(uu, Ru) {
      return "failedRecheck" === uu && Ru.listing ? "shaderPack:statusFailedRecheckListed" : Iu[uu]
    }

    function Uu(uu) {
      let {
        stored: Ru,
        checking: yu,
        webGpuUsable: Eu,
        changePending: Ku,
        compiler: Qu,
        t: mu
      } = uu;
      const Ju = function(uu, Ru, yu, Eu, Ku) {
          const Qu = (0, xu.storedPackOutcome)(uu, Ku);
          return "none" === Qu.kind ? "noCompiler" === Qu.reason ? Ru ? "checking" : "noCompiler" : "otherApiVersion" === Qu.reason ? "wrongApiVersion" : "failed" : (0, du.f)() ? "harnessBuild" : "blocked" === Qu.kind ? (0, xu.shaderPackNeedsCheck)(uu, Ku) ? Ru ? "checking" : !1 === yu ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === yu ? "offNoWebGpu" : Eu ? "readyAfterReload" : "ready"
        }(Ru, yu, Eu, Ku, Qu),
        Nu = "failed" === Ju || "failedRecheck" === Ju,
        Xu = Nu || "wrongApiVersion" === Ju || "noCompiler" === Ju,
        Vu = "ready" === Ju || "readyAfterReload" === Ju ? Ru.validation.offInStrict : [];
      return (0, Mu.jsxs)(Mu.Fragment, {
        children: [(0, Mu.jsxs)("div", {
          className: ku()("ShaderPackStatus", {
            Ready: "ready" === Ju,
            Failed: Xu
          }),
          children: ["ready" === Ju && (0, Mu.jsx)(Au.c, {
            name: "circle-check"
          }), Xu && (0, Mu.jsx)(Au.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === Ju ? (0, du.b)() : mu(Gu(Ju, Ru), {
            packVersion: String(Ru.manifest.apiVersion),
            version: String(eu.b)
          })]
        }), Nu && (0, Mu.jsx)(Du.d, {
          diagnostics: Ru.validation.errors,
          more: Ru.validation.moreErrors,
          t: mu
        }), Vu.length > 0 && (0, Mu.jsxs)(Mu.Fragment, {
          children: [(0, Mu.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Mu.jsx)(Au.c, {
              name: "triangle-exclamation"
            }), mu("shaderPack:offInStrict")]
          }), (0, Mu.jsx)(Du.d, {
            diagnostics: Vu,
            t: mu
          })]
        })]
      })
    }

    function nu(uu) {
      let {
        setApplySettingsCallback: Ru
      } = uu;
      const {
        t: yu
      } = (0, Ju.E)(), [Ku, mu] = (0, Eu.useState)(null), [Xu, Vu] = (0, Eu.useState)(null), [du, Cu] = (0, Eu.useState)(null), [ku] = (0, Eu.useState)(Bu.f), [eu, Au] = (0, Eu.useState)(!0), [Du, Iu] = (0, Eu.useState)(!1), {
        loading: Gu,
        error: nu,
        setError: tu,
        onFiles: lu
      } = (0, Hu.d)((async uu => {
        const Ru = await (0, ru.loadPageShaderPackCompiler)();
        if (!Ru) return void tu(yu("shaderPack:compilerUnavailable"));
        Vu(Ru);
        const Eu = (0, xu.toStoredShaderPack)(uu, await (0, Su.g)(Ru, uu.files));
        await (0, xu.saveShaderPack)(Eu, Ru) ? (mu(Eu), gu(Ku, Eu, Ru)) : tu(yu("shaderPack:saveFailed"))
      }));

      function gu(uu, yu, Eu) {
        (function(uu, Ru, yu, Eu) {
          return yu || bu(uu, Eu) || bu(Ru, Eu)
        })(uu, yu, (0, xu.isShaderPackChangePending)(), Eu) && ((0, xu.markShaderPackChangePending)(), Ru((() => Wu.i)))
      }
      return (0, Eu.useEffect)((() => {
        let uu = !1;
        return async function() {
          const Ru = (0, Nu.hasUsableWebGpuAdapter)(),
            yu = await (0, pu.h)();
          if (uu) return;
          mu(yu), Iu(!0), Au(!1);
          const Eu = null !== yu ? (0, ru.loadPageShaderPackCompiler)() : null,
            Ku = await Ru;
          if (uu) return;
          Cu(Ku);
          const Qu = await Eu;
          if (!uu && (Vu(Qu), null !== yu && Ku && null !== Qu && (0, xu.shaderPackNeedsCheck)(yu, Qu))) {
            const Ru = await (0, Su.c)(yu, Qu);
            uu || mu((uu => uu === yu ? Ru : uu))
          }
        }().catch((Ru => {
          console.error("Failed to load the stored shader pack", Ru), uu || tu(yu("shaderPack:unexpectedError"))
        })).finally((() => {
          uu || (Au(!1), Iu(!1))
        })), () => {
          uu = !0
        }
      }), []), (0, Mu.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Mu.jsx)("div", {
          className: "ShaderPackIntro",
          children: yu("shaderPack:intro")
        }), (0, Mu.jsx)(su, {
          to: Tu.S,
          className: "ShaderPackBrowseLink",
          children: (0, Mu.jsx)(Qu.l, {
            className: "ShaderPackBrowseButton",
            children: yu("shaderPackListing:browse")
          })
        }), !1 === du && (0, Mu.jsx)("div", {
          className: "SettingsBoxWarning",
          children: yu(ku ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== nu && (0, Mu.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [yu("general:error"), ": ", nu]
        }), Ku && (0, Mu.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Mu.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Mu.jsxs)("div", {
              children: [(0, Mu.jsx)("div", {
                className: "ShaderPackName",
                children: Ku.manifest.name
              }), Ku.manifest.author && (0, Mu.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, ju.j)(yu, "shaderPack:byAuthor", {
                  author: Ku.manifest.author
                })
              }), Ku.manifest.description && (0, Mu.jsx)("div", {
                className: "ShaderPackDescription",
                children: Ku.manifest.description
              }), Ku.listing && (0, Mu.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Mu.jsx)(su, {
                  to: (0, Tu.X)(Ku.listing.packId),
                  className: "ShaderPackListingLink",
                  children: yu("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Mu.jsx)(Qu.H, {
              disabled: eu || Gu,
              onClick: async function() {
                Au(!0), tu(null), await (0, xu.removeShaderPack)(), mu(null), Au(!1), gu(Ku, null, Xu)
              },
              children: yu("shaderPack:removePack")
            })]
          }), (0, Mu.jsx)(Uu, {
            stored: Ku,
            checking: Du,
            webGpuUsable: du,
            changePending: (0, xu.isShaderPackChangePending)(),
            compiler: Xu,
            t: yu
          })]
        }), (0, Mu.jsx)(Hu.b, {
          busy: eu || Gu || Du,
          disabled: eu || Gu || Du || !0 !== du,
          onFiles: lu
        })]
      })
    }

    function su(uu) {
      let {
        to: Ru,
        className: yu,
        children: Eu
      } = uu;
      const {
        gameState: Qu
      } = (0, Xu.j)(["gameState"]), {
        pathname: Ju,
        search: Nu
      } = (0, Ku.s)(), ru = "landingPage" !== Qu && "studio" !== Qu;
      return (0, Mu.jsx)(mu.LinkPreserveSearch, {
        to: Ru,
        className: yu,
        target: ru ? "_blank" : void 0,
        onClick: () => {
          ru || ((0, Tu.D)(`${Ju}${Nu}`), (0, Vu.h)())
        },
        children: Eu
      })
    }
  },
  6314: (uu, Ru, yu) => {
    yu.d(Ru, {
      D: () => Vu,
      E: () => Gu,
      I: () => pu,
      K: () => Lu,
      O: () => gu,
      S: () => mu,
      W: () => cu,
      X: () => Nu,
      _: () => Ju,
      cb: () => tu,
      d: () => ju,
      g: () => Au,
      gb: () => lu,
      h: () => Tu,
      hb: () => Hu,
      ib: () => Iu,
      j: () => Bu,
      k: () => ru,
      m: () => Uu,
      p: () => xu,
      t: () => nu,
      u: () => zu,
      v: () => Su,
      x: () => Wu,
      z: () => Mu
    });
    var Eu = yu(6322),
      Ku = yu(174),
      Qu = yu(4331);
    const mu = "/shader-packs",
      Ju = `${mu}/publish`;

    function Nu(uu) {
      return `${mu}/${encodeURIComponent(uu)}`
    }
    let Xu = null;

    function Vu(uu) {
      Xu = uu
    }

    function ru() {
      return Xu
    }

    function Bu() {
      Xu = null
    }

    function xu(uu) {
      return uu.playerHasRank("developer") || uu.playerHasRank("admin")
    }
    const Su = ["terrain", "water", "models", "sunShadows", "strict"],
      pu = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Tu(uu, Ru) {
      return uu.withFeatures.includes(Ru) ? "with" : uu.withoutFeatures.includes(Ru) ? "without" : null
    }

    function Wu(uu) {
      return null === uu ? "with" : "with" === uu ? "without" : null
    }

    function ju(uu) {
      return "with" === uu ? "only" : null === uu ? "include" : void 0
    }

    function Hu(uu, Ru) {
      const yu = Tu(uu, Ru),
        Eu = uu => uu.filter((uu => uu !== Ru));
      return {
        withFeatures: null === yu ? [...uu.withFeatures, Ru] : Eu(uu.withFeatures),
        withoutFeatures: "with" === yu ? [...uu.withoutFeatures, Ru] : Eu(uu.withoutFeatures)
      }
    }
    const du = "section",
      bu = "sort",
      Cu = "filters",
      ku = "q",
      eu = "banned",
      Au = "popular",
      Du = "strict";

    function Mu(uu) {
      var Ru, yu, Ku;
      const mu = uu.get(du),
        Ju = (null !== (Ru = uu.get(Cu)) && void 0 !== Ru ? Ru : Du).split(","),
        Nu = uu.get(eu);
      return {
        section: "favourites" === mu || "mine" === mu ? mu : "explore",
        sort: null !== (yu = Eu.u.find((Ru => Ru === uu.get(bu)))) && void 0 !== yu ? yu : Au,
        withFeatures: Su.filter((uu => Ju.includes(uu) && !Ju.includes(`-${uu}`))),
        withoutFeatures: Su.filter((uu => Ju.includes(`-${uu}`))),
        searchQuery: (null === (Ku = uu.get(ku)) || void 0 === Ku ? void 0 : Ku.slice(0, Eu.H)) || null,
        pageNumber: (0, Qu.d)(uu.get(Qu.c)),
        banned: "only" === Nu ? "with" : "include" === Nu ? null : "without"
      }
    }

    function Iu(uu, Ru) {
      var yu;
      const Eu = su(Ru);
      (0, Qu.h)(uu, du, "explore" === Ru.section ? null : Ru.section), (0, Qu.h)(uu, bu, Ru.sort === Au ? null : Ru.sort), (0, Qu.h)(uu, Cu, Eu === Du ? null : Eu), (0, Qu.h)(uu, ku, Ru.searchQuery), (0, Qu.h)(uu, eu, null !== (yu = ju(Ru.banned)) && void 0 !== yu ? yu : null), (0, Qu.j)(uu, Ru.pageNumber)
    }

    function Gu(uu) {
      const Ru = new URLSearchParams;
      return Iu(Ru, {
        section: "explore",
        sort: Au,
        withFeatures: "strict" === uu ? [uu] : [uu, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${mu}?${Ru.toString()}`
    }

    function Uu(uu) {
      return su(uu) === Du
    }

    function nu(uu) {
      return null !== uu.searchQuery || "with" === uu.banned || su(uu) !== Du
    }

    function su(uu) {
      return Su.flatMap((Ru => {
        const yu = Tu(uu, Ru);
        return "with" === yu ? [Ru] : "without" === yu ? [`-${Ru}`] : []
      })).join(",")
    }
    const tu = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      lu = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function gu(uu) {
      return Math.round(100 * Math.max(0, 1 - 1 / uu))
    }

    function cu(uu, Ru, yu, Ku) {
      const Qu = [];
      uu.isBanned && Qu.push({
        tone: "warning",
        text: Ku("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: mu
      } = uu;
      if (null === uu.brokenError || mu && !mu.error || Qu.push({
          tone: "warning",
          text: Ku("shaderPackListing:ownerBroken"),
          detail: uu.brokenError
        }), null !== mu && void 0 !== mu && mu.error) Qu.push({
        tone: "warning",
        text: Ku(Ru ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Eu.g)(mu.error) ? null : mu.error
      });
      else if (mu) {
        const uu = null === mu.renderNotBefore ? 0 : mu.renderNotBefore - yu,
          Eu = String(Math.ceil(uu / 6e4)),
          Ju = Ku(Ru ? uu > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : uu > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Eu
          });
        Qu.push({
          tone: "info",
          text: Ju,
          detail: null
        })
      }
      return uu.listed || Qu.push({
        tone: "info",
        text: Ku("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Qu
    }

    function Lu(uu) {
      return Math.max(1, Math.round(uu / 1024))
    }

    function zu(uu, Ru, yu) {
      return uu instanceof Ku.e && uu.errorMessageForUser ? uu.errorMessageForUser : Ru(yu)
    }
  },
  6322: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => Eu,
      D: () => Bu,
      H: () => Vu,
      K: () => Hu,
      N: () => ru,
      R: () => Xu,
      c: () => xu,
      e: () => pu,
      f: () => Su,
      g: () => ju,
      h: () => bu,
      l: () => Nu,
      o: () => Ku,
      q: () => du,
      u: () => Qu,
      w: () => Ju,
      x: () => mu
    });
    const Eu = ["forest", "desert", "water", "night", "cave"];
    const Ku = {
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
      Qu = ["popular", "updated", "newest"],
      mu = 3,
      Ju = 32,
      Nu = 300;

    function Xu(uu, Ru) {
      return uu.slice(0, Ru).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Vu = 64,
      ru = 512,
      Bu = 18e5;
    const xu = "Bloxdhub",
      Su = "https://bloxdhub.com/shaders";

    function pu(uu) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(uu)}`
    }
    const Tu = "Screenshot generation failed.",
      Wu = "Its screenshots couldn't be generated:";

    function ju(uu) {
      var Ru;
      return uu === Tu || null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.startsWith(Wu)) && void 0 !== Ru && Ru
    }

    function Hu(uu, Ru) {
      return `shaderPacks/${uu}/${Ru}.json`
    }

    function du(uu, Ru, yu, Eu) {
      return null === Ru.renderId ? bu(uu, Ru.baselineVersion, yu, Eu) : `${uu}/${function(uu,Ru,yu,Eu){return`shaderPacks/${uu}/${Ru}/${yu}-${Eu}.webp`}(Ru.packId,Ru.renderId,yu,Eu)}`
    }

    function bu(uu, Ru, yu, Eu) {
      return `${uu}/${function(uu,Ru,yu){return`shaderPacks/baseline/${uu}/${Ru}-${yu}.webp`}(Ru,yu,Eu)}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);