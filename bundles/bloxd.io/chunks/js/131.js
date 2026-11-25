export const id = 131;
export const ids = [131];
export const modules = {
  41292: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      ShaderPackCategory: () => vu
    });
    var su = ju(58),
      Uu = ju(1580),
      Zu = ju(1506),
      Xu = ju(1570),
      lu = ju(1244),
      qu = ju(91),
      fu = ju(22),
      Cu = ju(1687),
      bu = ju(6810),
      cu = ju(326),
      Nu = ju(6851),
      Ou = ju(6849),
      Yu = ju(6854),
      hu = ju(6761),
      Du = ju(5155),
      gu = ju(5197),
      Mu = ju(6806),
      eu = ju(3653);

    function Gu(uu, Eu) {
      const ju = (0, Nu.storedPackOutcome)(uu, Eu);
      return "none" !== ju.kind || "noCompiler" === ju.reason
    }
    var pu = ju(1105),
      wu = ju.n(pu),
      Ju = ju(5206),
      du = ju(1116),
      au = ju(6800),
      Pu = ju(1154);
    const ou = {
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

    function ku(uu, Eu) {
      return "failedRecheck" === uu && Eu.listing ? "shaderPack:statusFailedRecheckListed" : ou[uu]
    }

    function mu(uu) {
      let {
        stored: Eu,
        checking: ju,
        webGpuUsable: su,
        changePending: Uu,
        compiler: Zu,
        t: Xu
      } = uu;
      const lu = function(uu, Eu, ju, su, Uu) {
          const Zu = (0, Nu.storedPackOutcome)(uu, Uu);
          return "none" === Zu.kind ? "noCompiler" === Zu.reason ? Eu ? "checking" : "noCompiler" : "otherApiVersion" === Zu.reason ? "wrongApiVersion" : "failed" : (0, eu.h)() ? "harnessBuild" : "blocked" === Zu.kind ? (0, Nu.shaderPackNeedsCheck)(uu, Uu) ? Eu ? "checking" : !1 === ju ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === ju ? "offNoWebGpu" : su ? "readyAfterReload" : "ready"
        }(Eu, ju, su, Uu, Zu),
        qu = "failed" === lu || "failedRecheck" === lu,
        fu = qu || "wrongApiVersion" === lu || "noCompiler" === lu,
        Cu = "ready" === lu || "readyAfterReload" === lu ? Eu.validation.offInStrict : [];
      return (0, Pu.jsxs)(Pu.Fragment, {
        children: [(0, Pu.jsxs)("div", {
          className: wu()("ShaderPackStatus", {
            Ready: "ready" === lu,
            Failed: fu
          }),
          children: ["ready" === lu && (0, Pu.jsx)(du.e, {
            name: "circle-check"
          }), fu && (0, Pu.jsx)(du.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === lu ? (0, eu.e)() : Xu(ku(lu, Eu), {
            packVersion: String(Eu.manifest.apiVersion),
            version: String(Ju.d)
          })]
        }), qu && (0, Pu.jsx)(au.d, {
          diagnostics: Eu.validation.errors,
          more: Eu.validation.moreErrors,
          t: Xu
        }), Cu.length > 0 && (0, Pu.jsxs)(Pu.Fragment, {
          children: [(0, Pu.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Pu.jsx)(du.e, {
              name: "triangle-exclamation"
            }), Xu("shaderPack:offInStrict")]
          }), (0, Pu.jsx)(au.d, {
            diagnostics: Cu,
            t: Xu
          })]
        })]
      })
    }

    function vu(uu) {
      let {
        setApplySettingsCallback: Eu
      } = uu;
      const {
        t: ju
      } = (0, lu.A)(), [Uu, Xu] = (0, su.useState)(null), [fu, Cu] = (0, su.useState)(null), [eu, pu] = (0, su.useState)(null), [wu] = (0, su.useState)(cu.g), [Ju, du] = (0, su.useState)(!0), [au, ou] = (0, su.useState)(!1), {
        loading: ku,
        error: vu,
        setError: Vu,
        onFiles: ru
      } = (0, Mu.g)((async uu => {
        const Eu = await (0, bu.loadPageShaderPackCompiler)();
        if (!Eu) return void Vu(ju("shaderPack:compilerUnavailable"));
        Cu(Eu);
        const su = (0, Nu.toStoredShaderPack)(uu, await (0, Ou.e)(Eu, uu.files));
        await (0, Nu.saveShaderPack)(su, Eu) ? (Xu(su), Qu(Uu, su, Eu)) : Vu(ju("shaderPack:saveFailed"))
      }));

      function Qu(uu, ju, su) {
        (function(uu, Eu, ju, su) {
          return ju || Gu(uu, su) || Gu(Eu, su)
        })(uu, ju, (0, Nu.isShaderPackChangePending)(), su) && ((0, Nu.markShaderPackChangePending)(), Eu((() => Du.l)))
      }
      return (0, su.useEffect)((() => {
        let uu = !1;
        return async function() {
          const Eu = (0, qu.hasUsableWebGpuAdapter)(),
            ju = await (0, Yu.e)();
          if (uu) return;
          Xu(ju), ou(!0), du(!1);
          const su = null !== ju ? (0, bu.loadPageShaderPackCompiler)() : null,
            Uu = await Eu;
          if (uu) return;
          pu(Uu);
          const Zu = await su;
          if (!uu && (Cu(Zu), null !== ju && Uu && null !== Zu && (0, Nu.shaderPackNeedsCheck)(ju, Zu))) {
            const Eu = await (0, Ou.d)(ju, Zu);
            uu || Xu((uu => uu === ju ? Eu : uu))
          }
        }().catch((Eu => {
          console.error("Failed to load the stored shader pack", Eu), uu || Vu(ju("shaderPack:unexpectedError"))
        })).finally((() => {
          uu || (du(!1), ou(!1))
        })), () => {
          uu = !0
        }
      }), []), (0, Pu.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Pu.jsx)("div", {
          className: "ShaderPackIntro",
          children: ju("shaderPack:intro")
        }), (0, Pu.jsx)(Ku, {
          to: hu.R,
          className: "ShaderPackBrowseLink",
          children: (0, Pu.jsx)(Zu.p, {
            className: "ShaderPackBrowseButton",
            children: ju("shaderPackListing:browse")
          })
        }), !1 === eu && (0, Pu.jsx)("div", {
          className: "SettingsBoxWarning",
          children: ju(wu ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== vu && (0, Pu.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [ju("general:error"), ": ", vu]
        }), Uu && (0, Pu.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Pu.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Pu.jsxs)("div", {
              children: [(0, Pu.jsx)("div", {
                className: "ShaderPackName",
                children: Uu.manifest.name
              }), Uu.manifest.author && (0, Pu.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, gu.g)(ju, "shaderPack:byAuthor", {
                  author: Uu.manifest.author
                })
              }), Uu.manifest.description && (0, Pu.jsx)("div", {
                className: "ShaderPackDescription",
                children: Uu.manifest.description
              }), Uu.listing && (0, Pu.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Pu.jsx)(Ku, {
                  to: (0, hu.U)(Uu.listing.packId),
                  className: "ShaderPackListingLink",
                  children: ju("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Pu.jsx)(Zu.U, {
              disabled: Ju || ku,
              onClick: async function() {
                du(!0), Vu(null), await (0, Nu.removeShaderPack)(), Xu(null), du(!1), Qu(Uu, null, fu)
              },
              children: ju("shaderPack:removePack")
            })]
          }), (0, Pu.jsx)(mu, {
            stored: Uu,
            checking: au,
            webGpuUsable: eu,
            changePending: (0, Nu.isShaderPackChangePending)(),
            compiler: fu,
            t: ju
          })]
        }), (0, Pu.jsx)(Mu.c, {
          busy: Ju || ku || au,
          disabled: Ju || ku || au || !0 !== eu,
          onFiles: ru
        })]
      })
    }

    function Ku(uu) {
      let {
        to: Eu,
        className: ju,
        children: su
      } = uu;
      const {
        gameState: Zu
      } = (0, fu.l)(["gameState"]), {
        pathname: lu,
        search: qu
      } = (0, Uu.r)(), bu = "landingPage" !== Zu && "studio" !== Zu;
      return (0, Pu.jsx)(Xu.LinkPreserveSearch, {
        to: Eu,
        className: ju,
        target: bu ? "_blank" : void 0,
        onClick: () => {
          bu || ((0, hu.F)(`${lu}${qu}`), (0, Cu.h)())
        },
        children: su
      })
    }
  },
  6761: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => Du,
      B: () => Pu,
      F: () => Cu,
      H: () => ku,
      I: () => Yu,
      M: () => Wu,
      N: () => Qu,
      R: () => Xu,
      T: () => iu,
      U: () => qu,
      V: () => lu,
      Y: () => Vu,
      ab: () => ru,
      d: () => gu,
      eb: () => Mu,
      gb: () => ou,
      h: () => du,
      k: () => hu,
      l: () => cu,
      o: () => bu,
      r: () => mu,
      s: () => Nu,
      w: () => vu,
      x: () => Su,
      y: () => Ou
    });
    var su = ju(6764),
      Uu = ju(166),
      Zu = ju(4740);
    const Xu = "/shader-packs",
      lu = `${Xu}/publish`;

    function qu(uu) {
      return `${Xu}/${encodeURIComponent(uu)}`
    }
    let fu = null;

    function Cu(uu) {
      fu = uu
    }

    function bu() {
      return fu
    }

    function cu() {
      fu = null
    }

    function Nu(uu) {
      return uu.playerHasRank("developer") || uu.playerHasRank("admin")
    }
    const Ou = ["terrain", "water", "models", "sunShadows", "strict"],
      Yu = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function hu(uu, Eu) {
      return uu.withFeatures.includes(Eu) ? "with" : uu.withoutFeatures.includes(Eu) ? "without" : null
    }

    function Du(uu) {
      return null === uu ? "with" : "with" === uu ? "without" : null
    }

    function gu(uu) {
      return "with" === uu ? "only" : null === uu ? "include" : void 0
    }

    function Mu(uu, Eu) {
      const ju = hu(uu, Eu),
        su = uu => uu.filter((uu => uu !== Eu));
      return {
        withFeatures: null === ju ? [...uu.withFeatures, Eu] : su(uu.withFeatures),
        withoutFeatures: "with" === ju ? [...uu.withoutFeatures, Eu] : su(uu.withoutFeatures)
      }
    }
    const eu = "section",
      Gu = "sort",
      pu = "filters",
      wu = "q",
      Ju = "banned",
      du = "popular",
      au = "strict";

    function Pu(uu) {
      var Eu, ju, Uu;
      const Xu = uu.get(eu),
        lu = (null !== (Eu = uu.get(pu)) && void 0 !== Eu ? Eu : au).split(","),
        qu = uu.get(Ju);
      return {
        section: "favourites" === Xu || "mine" === Xu ? Xu : "explore",
        sort: null !== (ju = su.E.find((Eu => Eu === uu.get(Gu)))) && void 0 !== ju ? ju : du,
        withFeatures: Ou.filter((uu => lu.includes(uu) && !lu.includes(`-${uu}`))),
        withoutFeatures: Ou.filter((uu => lu.includes(`-${uu}`))),
        searchQuery: (null === (Uu = uu.get(wu)) || void 0 === Uu ? void 0 : Uu.slice(0, su.R)) || null,
        pageNumber: (0, Zu.c)(uu.get(Zu.b)),
        banned: "only" === qu ? "with" : "include" === qu ? null : "without"
      }
    }

    function ou(uu, Eu) {
      var ju;
      const su = Ku(Eu);
      (0, Zu.f)(uu, eu, "explore" === Eu.section ? null : Eu.section), (0, Zu.f)(uu, Gu, Eu.sort === du ? null : Eu.sort), (0, Zu.f)(uu, pu, su === au ? null : su), (0, Zu.f)(uu, wu, Eu.searchQuery), (0, Zu.f)(uu, Ju, null !== (ju = gu(Eu.banned)) && void 0 !== ju ? ju : null), (0, Zu.i)(uu, Eu.pageNumber)
    }

    function ku(uu) {
      const Eu = new URLSearchParams;
      return ou(Eu, {
        section: "explore",
        sort: du,
        withFeatures: "strict" === uu ? [uu] : [uu, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Xu}?${Eu.toString()}`
    }

    function mu(uu) {
      return Ku(uu) === au
    }

    function vu(uu) {
      return null !== uu.searchQuery || "with" === uu.banned || Ku(uu) !== au
    }

    function Ku(uu) {
      return Ou.flatMap((Eu => {
        const ju = hu(uu, Eu);
        return "with" === ju ? [Eu] : "without" === ju ? [`-${Eu}`] : []
      })).join(",")
    }
    const Vu = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      ru = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Qu(uu) {
      return Math.round(100 * Math.max(0, 1 - 1 / uu))
    }

    function iu(uu, Eu, ju, Uu) {
      const Zu = [];
      uu.isBanned && Zu.push({
        tone: "warning",
        text: Uu("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Xu
      } = uu;
      if (null === uu.brokenError || Xu && !Xu.error || Zu.push({
          tone: "warning",
          text: Uu("shaderPackListing:ownerBroken"),
          detail: uu.brokenError
        }), null !== Xu && void 0 !== Xu && Xu.error) Zu.push({
        tone: "warning",
        text: Uu(Eu ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, su.r)(Xu.error) ? null : Xu.error
      });
      else if (Xu) {
        const uu = null === Xu.renderNotBefore ? 0 : Xu.renderNotBefore - ju,
          su = String(Math.ceil(uu / 6e4)),
          lu = Uu(Eu ? uu > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : uu > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: su
          });
        Zu.push({
          tone: "info",
          text: lu,
          detail: null
        })
      }
      return uu.listed || Zu.push({
        tone: "info",
        text: Uu("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Zu
    }

    function Wu(uu) {
      return Math.max(1, Math.round(uu / 1024))
    }

    function Su(uu, Eu, ju) {
      return uu instanceof Uu.b && uu.errorMessageForUser ? uu.errorMessageForUser : Eu(ju)
    }
  },
  6764: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => Gu,
      E: () => Zu,
      F: () => lu,
      I: () => Xu,
      M: () => su,
      Q: () => cu,
      R: () => Cu,
      U: () => eu,
      X: () => bu,
      _: () => fu,
      c: () => Ou,
      f: () => hu,
      j: () => Yu,
      n: () => Nu,
      r: () => Mu,
      t: () => pu,
      x: () => qu,
      z: () => Uu
    });
    const su = ["forest", "desert", "water", "night", "cave"];
    const Uu = {
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
      Zu = ["popular", "updated", "newest"],
      Xu = 3,
      lu = 32,
      qu = 300;

    function fu(uu, Eu) {
      return uu.slice(0, Eu).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Cu = 64,
      bu = 512,
      cu = 18e5;

    function Nu(uu) {
      const Eu = uu,
        ju = null === Eu || void 0 === Eu ? void 0 : Eu.files;
      return "number" === typeof(null === Eu || void 0 === Eu ? void 0 : Eu.apiVersion) && "string" === typeof Eu.name && (null === Eu.author || "string" === typeof Eu.author) && (void 0 === Eu.keepCircleShadows || "boolean" === typeof Eu.keepCircleShadows) && "object" === typeof ju && null !== ju && Object.values(ju).every((uu => "string" === typeof uu))
    }
    const Ou = "Bloxdhub",
      Yu = "https://bloxdhub.com/shaders";

    function hu(uu) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(uu)}`
    }
    const Du = "Screenshot generation failed.",
      gu = "Its screenshots couldn't be generated:";

    function Mu(uu) {
      var Eu;
      return uu === Du || null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.startsWith(gu)) && void 0 !== Eu && Eu
    }

    function eu(uu, Eu) {
      return `shaderPacks/${uu}/${Eu}.json`
    }

    function Gu(uu, Eu, ju, su) {
      return null === Eu.renderId ? pu(uu, Eu.baselineVersion, ju, su) : `${uu}/${function(uu,Eu,ju,su){return`shaderPacks/${uu}/${Eu}/${ju}-${su}.webp`}(Eu.packId,Eu.renderId,ju,su)}`
    }

    function pu(uu, Eu, ju, su) {
      return `${uu}/${function(uu,Eu,ju){return`shaderPacks/baseline/${uu}/${Eu}-${ju}.webp`}(Eu,ju,su)}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);