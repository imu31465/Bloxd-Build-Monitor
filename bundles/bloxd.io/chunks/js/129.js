export const id = 129;
export const ids = [129];
export const modules = {
  41131: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      ShaderPackCategory: () => Nm
    });
    var hm = fm(59),
      Am = fm(1537),
      am = fm(1454),
      xm = fm(1519),
      wm = fm(1208),
      Dm = fm(105),
      im = fm(23),
      Rm = fm(1635),
      pm = fm(6562),
      Em = fm(330),
      om = fm(6600),
      Om = fm(6595),
      Ym = fm(6609),
      qm = fm(6507),
      jm = fm(4954),
      Vm = fm(4980),
      Im = fm(6555),
      Km = fm(3466);

    function Qm(mm, Tm) {
      const fm = (0, om.storedPackOutcome)(mm, Tm);
      return "none" !== fm.kind || "noCompiler" === fm.reason
    }
    var nm = fm(1080),
      Jm = fm.n(nm),
      cm = fm(4985),
      zm = fm(1089),
      Zm = fm(6552),
      km = fm(1135);
    const bm = {
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

    function Sm(mm, Tm) {
      return "failedRecheck" === mm && Tm.listing ? "shaderPack:statusFailedRecheckListed" : bm[mm]
    }

    function em(mm) {
      let {
        stored: Tm,
        checking: fm,
        webGpuUsable: hm,
        changePending: Am,
        compiler: am,
        t: xm
      } = mm;
      const wm = function(mm, Tm, fm, hm, Am) {
          const am = (0, om.storedPackOutcome)(mm, Am);
          return "none" === am.kind ? "noCompiler" === am.reason ? Tm ? "checking" : "noCompiler" : "otherApiVersion" === am.reason ? "wrongApiVersion" : "failed" : (0, Km.e)() ? "harnessBuild" : "blocked" === am.kind ? (0, om.shaderPackNeedsCheck)(mm, Am) ? Tm ? "checking" : !1 === fm ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === fm ? "offNoWebGpu" : hm ? "readyAfterReload" : "ready"
        }(Tm, fm, hm, Am, am),
        Dm = "failed" === wm || "failedRecheck" === wm,
        im = Dm || "wrongApiVersion" === wm || "noCompiler" === wm,
        Rm = "ready" === wm || "readyAfterReload" === wm ? Tm.validation.offInStrict : [];
      return (0, km.jsxs)(km.Fragment, {
        children: [(0, km.jsxs)("div", {
          className: Jm()("ShaderPackStatus", {
            Ready: "ready" === wm,
            Failed: im
          }),
          children: ["ready" === wm && (0, km.jsx)(zm.c, {
            name: "circle-check"
          }), im && (0, km.jsx)(zm.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === wm ? (0, Km.d)() : xm(Sm(wm, Tm), {
            packVersion: String(Tm.manifest.apiVersion),
            version: String(cm.c)
          })]
        }), Dm && (0, km.jsx)(Zm.c, {
          diagnostics: Tm.validation.errors,
          more: Tm.validation.moreErrors,
          t: xm
        }), Rm.length > 0 && (0, km.jsxs)(km.Fragment, {
          children: [(0, km.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, km.jsx)(zm.c, {
              name: "triangle-exclamation"
            }), xm("shaderPack:offInStrict")]
          }), (0, km.jsx)(Zm.c, {
            diagnostics: Rm,
            t: xm
          })]
        })]
      })
    }

    function Nm(mm) {
      let {
        setApplySettingsCallback: Tm
      } = mm;
      const {
        t: fm
      } = (0, wm.A)(), [Am, xm] = (0, hm.useState)(null), [im, Rm] = (0, hm.useState)(null), [Km, nm] = (0, hm.useState)(null), [Jm] = (0, hm.useState)(Em.h), [cm, zm] = (0, hm.useState)(!0), [Zm, bm] = (0, hm.useState)(!1), {
        loading: Sm,
        error: Nm,
        setError: Xm,
        onFiles: Pm
      } = (0, Im.f)((async mm => {
        const Tm = await (0, pm.loadPageShaderPackCompiler)();
        if (!Tm) return void Xm(fm("shaderPack:compilerUnavailable"));
        Rm(Tm);
        const hm = (0, om.toStoredShaderPack)(mm, await (0, Om.f)(Tm, mm.files));
        await (0, om.saveShaderPack)(hm, Tm) ? (xm(hm), Hm(Am, hm, Tm)) : Xm(fm("shaderPack:saveFailed"))
      }));

      function Hm(mm, fm, hm) {
        (function(mm, Tm, fm, hm) {
          return fm || Qm(mm, hm) || Qm(Tm, hm)
        })(mm, fm, (0, om.isShaderPackChangePending)(), hm) && ((0, om.markShaderPackChangePending)(), Tm((() => jm.o)))
      }
      return (0, hm.useEffect)((() => {
        let mm = !1;
        return async function() {
          const Tm = (0, Dm.hasUsableWebGpuAdapter)(),
            fm = await (0, Ym.e)();
          if (mm) return;
          xm(fm), bm(!0), zm(!1);
          const hm = null !== fm ? (0, pm.loadPageShaderPackCompiler)() : null,
            Am = await Tm;
          if (mm) return;
          nm(Am);
          const am = await hm;
          if (!mm && (Rm(am), null !== fm && Am && null !== am && (0, om.shaderPackNeedsCheck)(fm, am))) {
            const Tm = await (0, Om.b)(fm, am);
            mm || xm((mm => mm === fm ? Tm : mm))
          }
        }().catch((Tm => {
          console.error("Failed to load the stored shader pack", Tm), mm || Xm(fm("shaderPack:unexpectedError"))
        })).finally((() => {
          mm || (zm(!1), bm(!1))
        })), () => {
          mm = !0
        }
      }), []), (0, km.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, km.jsx)("div", {
          className: "ShaderPackIntro",
          children: fm("shaderPack:intro")
        }), (0, km.jsx)(Gm, {
          to: qm.S,
          className: "ShaderPackBrowseLink",
          children: (0, km.jsx)(am.m, {
            className: "ShaderPackBrowseButton",
            children: fm("shaderPackListing:browse")
          })
        }), !1 === Km && (0, km.jsx)("div", {
          className: "SettingsBoxWarning",
          children: fm(Jm ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Nm && (0, km.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [fm("general:error"), ": ", Nm]
        }), Am && (0, km.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, km.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, km.jsxs)("div", {
              children: [(0, km.jsx)("div", {
                className: "ShaderPackName",
                children: Am.manifest.name
              }), Am.manifest.author && (0, km.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Vm.j)(fm, "shaderPack:byAuthor", {
                  author: Am.manifest.author
                })
              }), Am.manifest.description && (0, km.jsx)("div", {
                className: "ShaderPackDescription",
                children: Am.manifest.description
              }), Am.listing && (0, km.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, km.jsx)(Gm, {
                  to: (0, qm.V)(Am.listing.packId),
                  className: "ShaderPackListingLink",
                  children: fm("shaderPackListing:openPackPage")
                })
              })]
            }), (0, km.jsx)(am.P, {
              disabled: cm || Sm,
              onClick: async function() {
                zm(!0), Xm(null), await (0, om.removeShaderPack)(), xm(null), zm(!1), Hm(Am, null, im)
              },
              children: fm("shaderPack:removePack")
            })]
          }), (0, km.jsx)(em, {
            stored: Am,
            checking: Zm,
            webGpuUsable: Km,
            changePending: (0, om.isShaderPackChangePending)(),
            compiler: im,
            t: fm
          })]
        }), (0, km.jsx)(Im.c, {
          busy: cm || Sm || Zm,
          disabled: cm || Sm || Zm || !0 !== Km,
          onFiles: Pm
        })]
      })
    }

    function Gm(mm) {
      let {
        to: Tm,
        className: fm,
        children: hm
      } = mm;
      const {
        gameState: am
      } = (0, im.m)(["gameState"]), {
        pathname: wm,
        search: Dm
      } = (0, Am.w)(), pm = "landingPage" !== am && "studio" !== am;
      return (0, km.jsx)(xm.LinkPreserveSearch, {
        to: Tm,
        className: fm,
        target: pm ? "_blank" : void 0,
        onClick: () => {
          pm || ((0, qm.I)(`${wm}${Dm}`), (0, Rm.d)())
        },
        children: hm
      })
    }
  },
  6507: (mm, Tm, fm) => {
    fm.d(Tm, {
      C: () => jm,
      F: () => km,
      I: () => Rm,
      J: () => Sm,
      L: () => Ym,
      N: () => Cm,
      O: () => Hm,
      S: () => xm,
      U: () => ym,
      V: () => Dm,
      W: () => wm,
      Z: () => Xm,
      ab: () => Pm,
      d: () => Vm,
      eb: () => Im,
      fb: () => bm,
      g: () => zm,
      j: () => qm,
      n: () => Em,
      o: () => pm,
      q: () => em,
      t: () => om,
      w: () => Nm,
      x: () => rm,
      y: () => Om
    });
    var hm = fm(6509),
      Am = fm(168),
      am = fm(4501);
    const xm = "/shader-packs",
      wm = `${xm}/publish`;

    function Dm(mm) {
      return `${xm}/${encodeURIComponent(mm)}`
    }
    let im = null;

    function Rm(mm) {
      im = mm
    }

    function pm() {
      return im
    }

    function Em() {
      im = null
    }

    function om(mm) {
      return mm.playerHasRank("developer") || mm.playerHasRank("admin")
    }
    const Om = ["terrain", "water", "models", "sunShadows", "strict"],
      Ym = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function qm(mm, Tm) {
      return mm.withFeatures.includes(Tm) ? "with" : mm.withoutFeatures.includes(Tm) ? "without" : null
    }

    function jm(mm) {
      return null === mm ? "with" : "with" === mm ? "without" : null
    }

    function Vm(mm) {
      return "with" === mm ? "only" : null === mm ? "include" : void 0
    }

    function Im(mm, Tm) {
      const fm = qm(mm, Tm),
        hm = mm => mm.filter((mm => mm !== Tm));
      return {
        withFeatures: null === fm ? [...mm.withFeatures, Tm] : hm(mm.withFeatures),
        withoutFeatures: "with" === fm ? [...mm.withoutFeatures, Tm] : hm(mm.withoutFeatures)
      }
    }
    const Km = "section",
      Qm = "sort",
      nm = "filters",
      Jm = "q",
      cm = "banned",
      zm = "popular",
      Zm = "strict";

    function km(mm) {
      var Tm, fm, Am;
      const xm = mm.get(Km),
        wm = (null !== (Tm = mm.get(nm)) && void 0 !== Tm ? Tm : Zm).split(","),
        Dm = mm.get(cm);
      return {
        section: "favourites" === xm || "mine" === xm ? xm : "explore",
        sort: null !== (fm = hm.z.find((Tm => Tm === mm.get(Qm)))) && void 0 !== fm ? fm : zm,
        withFeatures: Om.filter((mm => wm.includes(mm) && !wm.includes(`-${mm}`))),
        withoutFeatures: Om.filter((mm => wm.includes(`-${mm}`))),
        searchQuery: (null === (Am = mm.get(Jm)) || void 0 === Am ? void 0 : Am.slice(0, hm.P)) || null,
        pageNumber: (0, am.f)(mm.get(am.d)),
        banned: "only" === Dm ? "with" : "include" === Dm ? null : "without"
      }
    }

    function bm(mm, Tm) {
      var fm;
      const hm = Gm(Tm);
      (0, am.h)(mm, Km, "explore" === Tm.section ? null : Tm.section), (0, am.h)(mm, Qm, Tm.sort === zm ? null : Tm.sort), (0, am.h)(mm, nm, hm === Zm ? null : hm), (0, am.h)(mm, Jm, Tm.searchQuery), (0, am.h)(mm, cm, null !== (fm = Vm(Tm.banned)) && void 0 !== fm ? fm : null), (0, am.i)(mm, Tm.pageNumber)
    }

    function Sm(mm) {
      const Tm = new URLSearchParams;
      return bm(Tm, {
        section: "explore",
        sort: zm,
        withFeatures: "strict" === mm ? [mm] : [mm, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${xm}?${Tm.toString()}`
    }

    function em(mm) {
      return Gm(mm) === Zm
    }

    function Nm(mm) {
      return null !== mm.searchQuery || "with" === mm.banned || Gm(mm) !== Zm
    }

    function Gm(mm) {
      return Om.flatMap((Tm => {
        const fm = qm(mm, Tm);
        return "with" === fm ? [Tm] : "without" === fm ? [`-${Tm}`] : []
      })).join(",")
    }
    const Xm = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Pm = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Hm(mm) {
      return Math.round(100 * Math.max(0, 1 - 1 / mm))
    }

    function ym(mm, Tm, fm, Am) {
      const am = [];
      mm.isBanned && am.push({
        tone: "warning",
        text: Am("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: xm
      } = mm;
      if (null === mm.brokenError || xm && !xm.error || am.push({
          tone: "warning",
          text: Am("shaderPackListing:ownerBroken"),
          detail: mm.brokenError
        }), null !== xm && void 0 !== xm && xm.error) am.push({
        tone: "warning",
        text: Am(Tm ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, hm.m)(xm.error) ? null : xm.error
      });
      else if (xm) {
        const mm = null === xm.renderNotBefore ? 0 : xm.renderNotBefore - fm,
          hm = String(Math.ceil(mm / 6e4)),
          wm = Am(Tm ? mm > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : mm > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: hm
          });
        am.push({
          tone: "info",
          text: wm,
          detail: null
        })
      }
      return mm.listed || am.push({
        tone: "info",
        text: Am("shaderPackListing:ownerUnlisted"),
        detail: null
      }), am
    }

    function Cm(mm) {
      return Math.max(1, Math.round(mm / 1024))
    }

    function rm(mm, Tm, fm) {
      return mm instanceof Am.d && mm.errorMessageForUser ? mm.errorMessageForUser : Tm(fm)
    }
  },
  6509: (mm, Tm, fm) => {
    fm.d(Tm, {
      D: () => wm,
      H: () => xm,
      K: () => hm,
      L: () => Em,
      P: () => Rm,
      S: () => Km,
      V: () => pm,
      X: () => im,
      e: () => Om,
      g: () => qm,
      k: () => Ym,
      l: () => om,
      m: () => Im,
      o: () => nm,
      r: () => Dm,
      t: () => Am,
      v: () => Qm,
      z: () => am
    });
    const hm = ["forest", "desert", "water", "night", "cave"];
    const Am = {
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
      am = ["popular", "updated", "newest"],
      xm = 3,
      wm = 32,
      Dm = 300;

    function im(mm, Tm) {
      return mm.slice(0, Tm).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Rm = 64,
      pm = 512,
      Em = 18e5;

    function om(mm) {
      const Tm = mm,
        fm = null === Tm || void 0 === Tm ? void 0 : Tm.files;
      return "number" === typeof(null === Tm || void 0 === Tm ? void 0 : Tm.apiVersion) && "string" === typeof Tm.name && (null === Tm.author || "string" === typeof Tm.author) && (void 0 === Tm.keepCircleShadows || "boolean" === typeof Tm.keepCircleShadows) && "object" === typeof fm && null !== fm && Object.values(fm).every((mm => "string" === typeof mm))
    }
    const Om = "Bloxdhub",
      Ym = "https://bloxdhub.com/shaders";

    function qm(mm) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(mm)}`
    }
    const jm = "Screenshot generation failed.",
      Vm = "Its screenshots couldn't be generated:";

    function Im(mm) {
      var Tm;
      return mm === jm || null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.startsWith(Vm)) && void 0 !== Tm && Tm
    }

    function Km(mm, Tm) {
      return `shaderPacks/${mm}/${Tm}.json`
    }

    function Qm(mm, Tm, fm, hm) {
      return null === Tm.renderId ? nm(mm, Tm.baselineVersion, fm, hm) : `${mm}/${function(mm,Tm,fm,hm){return`shaderPacks/${mm}/${Tm}/${fm}-${hm}.webp`}(Tm.packId,Tm.renderId,fm,hm)}`
    }

    function nm(mm, Tm, fm, hm) {
      return `${mm}/${function(mm,Tm,fm){return`shaderPacks/baseline/${mm}/${Tm}-${fm}.webp`}(Tm,fm,hm)}`
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);