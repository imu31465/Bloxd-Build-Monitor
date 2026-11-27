export const id = 144;
export const ids = [144];
export const modules = {
  42144: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ShaderPackCategory: () => Ye
    });
    var ye = He(59),
      be = He(1515),
      Me = He(1438),
      Ke = He(1502),
      Ue = He(1127),
      Fe = He(97),
      Je = He(18),
      oe = He(1620),
      Re = He(7249),
      ke = He(325),
      qe = He(7290),
      fe = He(7283),
      Te = He(7296),
      pe = He(7201),
      Xe = He(5501),
      ze = He(5557),
      Be = He(7247),
      Ee = He(3811);

    function ge(ee, ie) {
      const He = (0, qe.storedPackOutcome)(ee, ie);
      return "none" !== He.kind || "noCompiler" === He.reason
    }
    var Oe = He(1053),
      de = He.n(Oe),
      We = He(5563),
      te = He(1323),
      Ze = He(7242),
      we = He(1228);
    const De = {
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

    function Pe(ee, ie) {
      return "failedRecheck" === ee && ie.listing ? "shaderPack:statusFailedRecheckListed" : De[ee]
    }

    function Ae(ee) {
      let {
        stored: ie,
        checking: He,
        webGpuUsable: ye,
        changePending: be,
        compiler: Me,
        t: Ke
      } = ee;
      const Ue = function(ee, ie, He, ye, be) {
          const Me = (0, qe.storedPackOutcome)(ee, be);
          return "none" === Me.kind ? "noCompiler" === Me.reason ? ie ? "checking" : "noCompiler" : "otherApiVersion" === Me.reason ? "wrongApiVersion" : "failed" : (0, Ee.h)() ? "harnessBuild" : "blocked" === Me.kind ? (0, qe.shaderPackNeedsCheck)(ee, be) ? ie ? "checking" : !1 === He ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === He ? "offNoWebGpu" : ye ? "readyAfterReload" : "ready"
        }(ie, He, ye, be, Me),
        Fe = "failed" === Ue || "failedRecheck" === Ue,
        Je = Fe || "wrongApiVersion" === Ue || "noCompiler" === Ue,
        oe = "ready" === Ue || "readyAfterReload" === Ue ? ie.validation.offInStrict : [];
      return (0, we.jsxs)(we.Fragment, {
        children: [(0, we.jsxs)("div", {
          className: de()("ShaderPackStatus", {
            Ready: "ready" === Ue,
            Failed: Je
          }),
          children: ["ready" === Ue && (0, we.jsx)(te.e, {
            name: "circle-check"
          }), Je && (0, we.jsx)(te.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === Ue ? (0, Ee.d)() : Ke(Pe(Ue, ie), {
            packVersion: String(ie.manifest.apiVersion),
            version: String(We.c)
          })]
        }), Fe && (0, we.jsx)(Ze.b, {
          diagnostics: ie.validation.errors,
          more: ie.validation.moreErrors,
          t: Ke
        }), oe.length > 0 && (0, we.jsxs)(we.Fragment, {
          children: [(0, we.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, we.jsx)(te.e, {
              name: "triangle-exclamation"
            }), Ke("shaderPack:offInStrict")]
          }), (0, we.jsx)(Ze.b, {
            diagnostics: oe,
            t: Ke
          })]
        })]
      })
    }

    function Ye(ee) {
      let {
        setApplySettingsCallback: ie
      } = ee;
      const {
        t: He
      } = (0, Ue.v)(), [be, Ke] = (0, ye.useState)(null), [Je, oe] = (0, ye.useState)(null), [Ee, Oe] = (0, ye.useState)(null), [de] = (0, ye.useState)(ke.m), [We, te] = (0, ye.useState)(!0), [Ze, De] = (0, ye.useState)(!1), {
        loading: Pe,
        error: Ye,
        setError: ae,
        onFiles: ce
      } = (0, Be.f)((async ee => {
        const ie = await (0, Re.loadPageShaderPackCompiler)();
        if (!ie) return void ae(He("shaderPack:compilerUnavailable"));
        oe(ie);
        const ye = (0, qe.toStoredShaderPack)(ee, await (0, fe.g)(ie, ee.files));
        await (0, qe.saveShaderPack)(ye, ie) ? (Ke(ye), xe(be, ye, ie)) : ae(He("shaderPack:saveFailed"))
      }));

      function xe(ee, He, ye) {
        (function(ee, ie, He, ye) {
          return He || ge(ee, ye) || ge(ie, ye)
        })(ee, He, (0, qe.isShaderPackChangePending)(), ye) && ((0, qe.markShaderPackChangePending)(), ie((() => Xe.j)))
      }
      return (0, ye.useEffect)((() => {
        let ee = !1;
        return async function() {
          const ie = (0, Fe.hasUsableWebGpuAdapter)(),
            He = await (0, Te.h)();
          if (ee) return;
          Ke(He), De(!0), te(!1);
          const ye = null !== He ? (0, Re.loadPageShaderPackCompiler)() : null,
            be = await ie;
          if (ee) return;
          Oe(be);
          const Me = await ye;
          if (!ee && (oe(Me), null !== He && be && null !== Me && (0, qe.shaderPackNeedsCheck)(He, Me))) {
            const ie = await (0, fe.e)(He, Me);
            ee || Ke((ee => ee === He ? ie : ee))
          }
        }().catch((ie => {
          console.error("Failed to load the stored shader pack", ie), ee || ae(He("shaderPack:unexpectedError"))
        })).finally((() => {
          ee || (te(!1), De(!1))
        })), () => {
          ee = !0
        }
      }), []), (0, we.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, we.jsx)("div", {
          className: "ShaderPackIntro",
          children: He("shaderPack:intro")
        }), (0, we.jsx)(Ve, {
          to: pe.Y,
          className: "ShaderPackBrowseLink",
          children: (0, we.jsx)(Me.m, {
            className: "ShaderPackBrowseButton",
            children: He("shaderPackListing:browse")
          })
        }), !1 === Ee && (0, we.jsx)("div", {
          className: "SettingsBoxWarning",
          children: He(de ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Ye && (0, we.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [He("general:error"), ": ", Ye]
        }), be && (0, we.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, we.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, we.jsxs)("div", {
              children: [(0, we.jsx)("div", {
                className: "ShaderPackName",
                children: be.manifest.name
              }), be.manifest.author && (0, we.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, ze.i)(He, "shaderPack:byAuthor", {
                  author: be.manifest.author
                })
              }), be.manifest.description && (0, we.jsx)("div", {
                className: "ShaderPackDescription",
                children: be.manifest.description
              }), be.listing && (0, we.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, we.jsx)(Ve, {
                  to: (0, pe.eb)(be.listing.packId),
                  className: "ShaderPackListingLink",
                  children: He("shaderPackListing:openPackPage")
                })
              })]
            }), (0, we.jsx)(Me.I, {
              disabled: We || Pe,
              onClick: async function() {
                te(!0), ae(null), await (0, qe.removeShaderPack)(), Ke(null), te(!1), xe(be, null, Je)
              },
              children: He("shaderPack:removePack")
            })]
          }), (0, we.jsx)(Ae, {
            stored: be,
            checking: Ze,
            webGpuUsable: Ee,
            changePending: (0, qe.isShaderPackChangePending)(),
            compiler: Je,
            t: He
          })]
        }), (0, we.jsx)(Be.b, {
          busy: We || Pe || Ze,
          disabled: We || Pe || Ze || !0 !== Ee,
          onFiles: ce
        })]
      })
    }

    function Ve(ee) {
      let {
        to: ie,
        className: He,
        children: ye
      } = ee;
      const {
        gameState: Me
      } = (0, Je.m)(["gameState"]), {
        pathname: Ue,
        search: Fe
      } = (0, be.u)(), Re = "landingPage" !== Me && "studio" !== Me;
      return (0, we.jsx)(Ke.LinkPreserveSearch, {
        to: ie,
        className: He,
        target: Re ? "_blank" : void 0,
        onClick: () => {
          Re || ((0, pe.J)(`${Ue}${Fe}`), (0, oe.e)())
        },
        children: ye
      })
    }
  },
  7201: (ee, ie, He) => {
    He.d(ie, {
      C: () => fe,
      F: () => Xe,
      H: () => we,
      J: () => oe,
      N: () => Pe,
      P: () => Te,
      T: () => Ce,
      V: () => xe,
      Y: () => Ke,
      ab: () => Le,
      c: () => ze,
      eb: () => Fe,
      g: () => te,
      hb: () => Ue,
      i: () => pe,
      ib: () => ae,
      l: () => ke,
      lb: () => ce,
      p: () => Re,
      pb: () => Be,
      r: () => Ae,
      rb: () => De,
      t: () => qe,
      w: () => Ye,
      z: () => ve
    });
    var ye = He(7206),
      be = He(153),
      Me = He(4947);
    const Ke = "/shader-packs",
      Ue = `${Ke}/publish`;

    function Fe(ee) {
      return `${Ke}/${encodeURIComponent(ee)}`
    }
    let Je = null;

    function oe(ee) {
      Je = ee
    }

    function Re() {
      return Je
    }

    function ke() {
      Je = null
    }

    function qe(ee) {
      return ee.playerHasRank("developer") || ee.playerHasRank("admin")
    }
    const fe = ["terrain", "water", "models", "sunShadows", "strict"],
      Te = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function pe(ee, ie) {
      return ee.withFeatures.includes(ie) ? "with" : ee.withoutFeatures.includes(ie) ? "without" : null
    }

    function Xe(ee) {
      return null === ee ? "with" : "with" === ee ? "without" : null
    }

    function ze(ee) {
      return "with" === ee ? "only" : null === ee ? "include" : void 0
    }

    function Be(ee, ie) {
      const He = pe(ee, ie),
        ye = ee => ee.filter((ee => ee !== ie));
      return {
        withFeatures: null === He ? [...ee.withFeatures, ie] : ye(ee.withFeatures),
        withoutFeatures: "with" === He ? [...ee.withoutFeatures, ie] : ye(ee.withoutFeatures)
      }
    }
    const Ee = "section",
      ge = "sort",
      Oe = "filters",
      de = "q",
      We = "banned",
      te = "popular",
      Ze = "strict";

    function we(ee) {
      var ie, He, be;
      const Ke = ee.get(Ee),
        Ue = (null !== (ie = ee.get(Oe)) && void 0 !== ie ? ie : Ze).split(","),
        Fe = ee.get(We);
      return {
        section: "favourites" === Ke || "mine" === Ke ? Ke : "explore",
        sort: null !== (He = ye.w.find((ie => ie === ee.get(ge)))) && void 0 !== He ? He : te,
        withFeatures: fe.filter((ee => Ue.includes(ee) && !Ue.includes(`-${ee}`))),
        withoutFeatures: fe.filter((ee => Ue.includes(`-${ee}`))),
        searchQuery: (null === (be = ee.get(de)) || void 0 === be ? void 0 : be.slice(0, ye.G)) || null,
        pageNumber: (0, Me.g)(ee.get(Me.e)),
        banned: "only" === Fe ? "with" : "include" === Fe ? null : "without"
      }
    }

    function De(ee, ie) {
      var He;
      const ye = Ve(ie);
      (0, Me.i)(ee, Ee, "explore" === ie.section ? null : ie.section), (0, Me.i)(ee, ge, ie.sort === te ? null : ie.sort), (0, Me.i)(ee, Oe, ye === Ze ? null : ye), (0, Me.i)(ee, de, ie.searchQuery), (0, Me.i)(ee, We, null !== (He = ze(ie.banned)) && void 0 !== He ? He : null), (0, Me.k)(ee, ie.pageNumber)
    }

    function Pe(ee) {
      const ie = new URLSearchParams;
      return De(ie, {
        section: "explore",
        sort: te,
        withFeatures: "strict" === ee ? [ee] : [ee, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Ke}?${ie.toString()}`
    }

    function Ae(ee) {
      return Ve(ee) === Ze
    }

    function Ye(ee) {
      return null !== ee.searchQuery || "with" === ee.banned || Ve(ee) !== Ze
    }

    function Ve(ee) {
      return fe.flatMap((ie => {
        const He = pe(ee, ie);
        return "with" === He ? [ie] : "without" === He ? [`-${ie}`] : []
      })).join(",")
    }
    const ae = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      ce = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function xe(ee) {
      return Math.round(100 * Math.max(0, 1 - 1 / ee))
    }

    function Le(ee, ie, He, be) {
      const Me = [];
      ee.isBanned && Me.push({
        tone: "warning",
        text: be("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Ke
      } = ee;
      if (null === ee.brokenError || Ke && !Ke.error || Me.push({
          tone: "warning",
          text: be("shaderPackListing:ownerBroken"),
          detail: ee.brokenError
        }), null !== Ke && void 0 !== Ke && Ke.error) Me.push({
        tone: "warning",
        text: be(ie ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, ye.l)(Ke.error) ? null : Ke.error
      });
      else if (Ke) {
        const ee = null === Ke.renderNotBefore ? 0 : Ke.renderNotBefore - He,
          ye = String(Math.ceil(ee / 6e4)),
          Ue = be(ie ? ee > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : ee > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: ye
          });
        Me.push({
          tone: "info",
          text: Ue,
          detail: null
        })
      }
      return ee.listed || Me.push({
        tone: "info",
        text: be("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Me
    }

    function Ce(ee) {
      return Math.max(1, Math.round(ee / 1024))
    }

    function ve(ee, ie, He) {
      return ee instanceof be.b && ee.errorMessageForUser ? ee.errorMessageForUser : ie(He)
    }
  },
  7206: (ee, ie, He) => {
    He.d(ie, {
      A: () => Ke,
      C: () => ye,
      D: () => ke,
      G: () => oe,
      H: () => Ee,
      L: () => Re,
      M: () => Je,
      d: () => fe,
      h: () => pe,
      i: () => Te,
      j: () => qe,
      l: () => Be,
      m: () => Oe,
      o: () => Fe,
      s: () => be,
      t: () => ge,
      w: () => Me,
      y: () => Ue
    });
    const ye = ["forest", "desert", "water", "night", "cave"];
    const be = {
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
      Me = ["popular", "updated", "newest"],
      Ke = 3,
      Ue = 32,
      Fe = 300;

    function Je(ee, ie) {
      return ee.slice(0, ie).replace(/[\uD800-\uDBFF]$/, "")
    }
    const oe = 64,
      Re = 512,
      ke = 18e5;

    function qe(ee) {
      const ie = ee,
        He = null === ie || void 0 === ie ? void 0 : ie.files;
      return "number" === typeof(null === ie || void 0 === ie ? void 0 : ie.apiVersion) && "string" === typeof ie.name && (null === ie.author || "string" === typeof ie.author) && (void 0 === ie.keepCircleShadows || "boolean" === typeof ie.keepCircleShadows) && "object" === typeof He && null !== He && Object.values(He).every((ee => "string" === typeof ee))
    }
    const fe = "Bloxdhub",
      Te = "https://bloxdhub.com/shaders";

    function pe(ee) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(ee)}`
    }
    const Xe = "Screenshot generation failed.",
      ze = "Its screenshots couldn't be generated:";

    function Be(ee) {
      var ie;
      return ee === Xe || null !== (ie = null === ee || void 0 === ee ? void 0 : ee.startsWith(ze)) && void 0 !== ie && ie
    }

    function Ee(ee, ie) {
      return `shaderPacks/${ee}/${ie}.json`
    }

    function ge(ee, ie, He, ye) {
      return null === ie.renderId ? Oe(ee, ie.baselineVersion, He, ye) : `${ee}/${function(ee,ie,He,ye){return`shaderPacks/${ee}/${ie}/${He}-${ye}.webp`}(ie.packId,ie.renderId,He,ye)}`
    }

    function Oe(ee, ie, He, ye) {
      return `${ee}/${function(ee,ie,He){return`shaderPacks/baseline/${ee}/${ie}-${He}.webp`}(ie,He,ye)}`
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);