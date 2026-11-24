export const id = 131;
export const ids = [131];
export const modules = {
  41269: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      ShaderPackCategory: () => Pt
    });
    var Ot = Vt(63),
      qt = Vt(1623),
      Dt = Vt(1556),
      mt = Vt(1613),
      dt = Vt(1286),
      jt = Vt(106),
      Ht = Vt(26),
      Xt = Vt(1732),
      Qt = Vt(6816),
      lt = Vt(366),
      Et = Vt(6866),
      ft = Vt(6857),
      wt = Vt(6873),
      yt = Vt(6754),
      Nt = Vt(5155),
      Mt = Vt(5208),
      bt = Vt(6810),
      Jt = Vt(3533);

    function Ct(tt, et) {
      const Vt = (0, Et.storedPackOutcome)(tt, et);
      return "none" !== Vt.kind || "noCompiler" === Vt.reason
    }
    var ut = Vt(1140),
      Kt = Vt.n(ut),
      ht = Vt(5216),
      vt = Vt(1152),
      Wt = Vt(6801),
      St = Vt(1188);
    const ct = {
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

    function Rt(tt, et) {
      return "failedRecheck" === tt && et.listing ? "shaderPack:statusFailedRecheckListed" : ct[tt]
    }

    function It(tt) {
      let {
        stored: et,
        checking: Vt,
        webGpuUsable: Ot,
        changePending: qt,
        compiler: Dt,
        t: mt
      } = tt;
      const dt = function(tt, et, Vt, Ot, qt) {
          const Dt = (0, Et.storedPackOutcome)(tt, qt);
          return "none" === Dt.kind ? "noCompiler" === Dt.reason ? et ? "checking" : "noCompiler" : "otherApiVersion" === Dt.reason ? "wrongApiVersion" : "failed" : (0, Jt.f)() ? "harnessBuild" : "blocked" === Dt.kind ? (0, Et.shaderPackNeedsCheck)(tt, qt) ? et ? "checking" : !1 === Vt ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === Vt ? "offNoWebGpu" : Ot ? "readyAfterReload" : "ready"
        }(et, Vt, Ot, qt, Dt),
        jt = "failed" === dt || "failedRecheck" === dt,
        Ht = jt || "wrongApiVersion" === dt || "noCompiler" === dt,
        Xt = "ready" === dt || "readyAfterReload" === dt ? et.validation.offInStrict : [];
      return (0, St.jsxs)(St.Fragment, {
        children: [(0, St.jsxs)("div", {
          className: Kt()("ShaderPackStatus", {
            Ready: "ready" === dt,
            Failed: Ht
          }),
          children: ["ready" === dt && (0, St.jsx)(vt.b, {
            name: "circle-check"
          }), Ht && (0, St.jsx)(vt.b, {
            name: "triangle-exclamation"
          }), "harnessBuild" === dt ? (0, Jt.e)() : mt(Rt(dt, et), {
            packVersion: String(et.manifest.apiVersion),
            version: String(ht.d)
          })]
        }), jt && (0, St.jsx)(Wt.b, {
          diagnostics: et.validation.errors,
          more: et.validation.moreErrors,
          t: mt
        }), Xt.length > 0 && (0, St.jsxs)(St.Fragment, {
          children: [(0, St.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, St.jsx)(vt.b, {
              name: "triangle-exclamation"
            }), mt("shaderPack:offInStrict")]
          }), (0, St.jsx)(Wt.b, {
            diagnostics: Xt,
            t: mt
          })]
        })]
      })
    }

    function Pt(tt) {
      let {
        setApplySettingsCallback: et
      } = tt;
      const {
        t: Vt
      } = (0, dt.H)(), [qt, mt] = (0, Ot.useState)(null), [Ht, Xt] = (0, Ot.useState)(null), [Jt, ut] = (0, Ot.useState)(null), [Kt] = (0, Ot.useState)(lt.g), [ht, vt] = (0, Ot.useState)(!0), [Wt, ct] = (0, Ot.useState)(!1), {
        loading: Rt,
        error: Pt,
        setError: Lt,
        onFiles: Ft
      } = (0, bt.e)((async tt => {
        const et = await (0, Qt.loadPageShaderPackCompiler)();
        if (!et) return void Lt(Vt("shaderPack:compilerUnavailable"));
        Xt(et);
        const Ot = (0, Et.toStoredShaderPack)(tt, await (0, ft.f)(et, tt.files));
        await (0, Et.saveShaderPack)(Ot, et) ? (mt(Ot), kt(qt, Ot, et)) : Lt(Vt("shaderPack:saveFailed"))
      }));

      function kt(tt, Vt, Ot) {
        (function(tt, et, Vt, Ot) {
          return Vt || Ct(tt, Ot) || Ct(et, Ot)
        })(tt, Vt, (0, Et.isShaderPackChangePending)(), Ot) && ((0, Et.markShaderPackChangePending)(), et((() => Nt.j)))
      }
      return (0, Ot.useEffect)((() => {
        let tt = !1;
        return async function() {
          const et = (0, jt.hasUsableWebGpuAdapter)(),
            Vt = await (0, wt.g)();
          if (tt) return;
          mt(Vt), ct(!0), vt(!1);
          const Ot = null !== Vt ? (0, Qt.loadPageShaderPackCompiler)() : null,
            qt = await et;
          if (tt) return;
          ut(qt);
          const Dt = await Ot;
          if (!tt && (Xt(Dt), null !== Vt && qt && null !== Dt && (0, Et.shaderPackNeedsCheck)(Vt, Dt))) {
            const et = await (0, ft.b)(Vt, Dt);
            tt || mt((tt => tt === Vt ? et : tt))
          }
        }().catch((et => {
          console.error("Failed to load the stored shader pack", et), tt || Lt(Vt("shaderPack:unexpectedError"))
        })).finally((() => {
          tt || (vt(!1), ct(!1))
        })), () => {
          tt = !0
        }
      }), []), (0, St.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, St.jsx)("div", {
          className: "ShaderPackIntro",
          children: Vt("shaderPack:intro")
        }), (0, St.jsx)(Zt, {
          to: yt.Z,
          className: "ShaderPackBrowseLink",
          children: (0, St.jsx)(Dt.m, {
            className: "ShaderPackBrowseButton",
            children: Vt("shaderPackListing:browse")
          })
        }), !1 === Jt && (0, St.jsx)("div", {
          className: "SettingsBoxWarning",
          children: Vt(Kt ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Pt && (0, St.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [Vt("general:error"), ": ", Pt]
        }), qt && (0, St.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, St.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, St.jsxs)("div", {
              children: [(0, St.jsx)("div", {
                className: "ShaderPackName",
                children: qt.manifest.name
              }), qt.manifest.author && (0, St.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Mt.j)(Vt, "shaderPack:byAuthor", {
                  author: qt.manifest.author
                })
              }), qt.manifest.description && (0, St.jsx)("div", {
                className: "ShaderPackDescription",
                children: qt.manifest.description
              }), qt.listing && (0, St.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, St.jsx)(Zt, {
                  to: (0, yt.cb)(qt.listing.packId),
                  className: "ShaderPackListingLink",
                  children: Vt("shaderPackListing:openPackPage")
                })
              })]
            }), (0, St.jsx)(Dt.K, {
              disabled: ht || Rt,
              onClick: async function() {
                vt(!0), Lt(null), await (0, Et.removeShaderPack)(), mt(null), vt(!1), kt(qt, null, Ht)
              },
              children: Vt("shaderPack:removePack")
            })]
          }), (0, St.jsx)(It, {
            stored: qt,
            checking: Wt,
            webGpuUsable: Jt,
            changePending: (0, Et.isShaderPackChangePending)(),
            compiler: Ht,
            t: Vt
          })]
        }), (0, St.jsx)(bt.d, {
          busy: ht || Rt || Wt,
          disabled: ht || Rt || Wt || !0 !== Jt,
          onFiles: Ft
        })]
      })
    }

    function Zt(tt) {
      let {
        to: et,
        className: Vt,
        children: Ot
      } = tt;
      const {
        gameState: Dt
      } = (0, Ht.k)(["gameState"]), {
        pathname: dt,
        search: jt
      } = (0, qt.s)(), Qt = "landingPage" !== Dt && "studio" !== Dt;
      return (0, St.jsx)(mt.LinkPreserveSearch, {
        to: et,
        className: Vt,
        target: Qt ? "_blank" : void 0,
        onClick: () => {
          Qt || ((0, yt.L)(`${dt}${jt}`), (0, Xt.f)())
        },
        children: Ot
      })
    }
  },
  6754: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => ft,
      E: () => Nt,
      I: () => St,
      L: () => Xt,
      O: () => Rt,
      Q: () => wt,
      U: () => zt,
      X: () => kt,
      Z: () => mt,
      _: () => Gt,
      c: () => Mt,
      cb: () => jt,
      f: () => vt,
      fb: () => dt,
      g: () => yt,
      ib: () => Lt,
      k: () => lt,
      lb: () => Ft,
      n: () => Qt,
      nb: () => bt,
      qb: () => ct,
      r: () => It,
      s: () => Et,
      v: () => Pt,
      z: () => ot
    });
    var Ot = Vt(6756),
      qt = Vt(184),
      Dt = Vt(4691);
    const mt = "/shader-packs",
      dt = `${mt}/publish`;

    function jt(tt) {
      return `${mt}/${encodeURIComponent(tt)}`
    }
    let Ht = null;

    function Xt(tt) {
      Ht = tt
    }

    function Qt() {
      return Ht
    }

    function lt() {
      Ht = null
    }

    function Et(tt) {
      return tt.playerHasRank("developer") || tt.playerHasRank("admin")
    }
    const ft = ["terrain", "water", "models", "sunShadows", "strict"],
      wt = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function yt(tt, et) {
      return tt.withFeatures.includes(et) ? "with" : tt.withoutFeatures.includes(et) ? "without" : null
    }

    function Nt(tt) {
      return null === tt ? "with" : "with" === tt ? "without" : null
    }

    function Mt(tt) {
      return "with" === tt ? "only" : null === tt ? "include" : void 0
    }

    function bt(tt, et) {
      const Vt = yt(tt, et),
        Ot = tt => tt.filter((tt => tt !== et));
      return {
        withFeatures: null === Vt ? [...tt.withFeatures, et] : Ot(tt.withFeatures),
        withoutFeatures: "with" === Vt ? [...tt.withoutFeatures, et] : Ot(tt.withoutFeatures)
      }
    }
    const Jt = "section",
      Ct = "sort",
      ut = "filters",
      Kt = "q",
      ht = "banned",
      vt = "popular",
      Wt = "strict";

    function St(tt) {
      var et, Vt, qt;
      const mt = tt.get(Jt),
        dt = (null !== (et = tt.get(ut)) && void 0 !== et ? et : Wt).split(","),
        jt = tt.get(ht);
      return {
        section: "favourites" === mt || "mine" === mt ? mt : "explore",
        sort: null !== (Vt = Ot.x.find((et => et === tt.get(Ct)))) && void 0 !== Vt ? Vt : vt,
        withFeatures: ft.filter((tt => dt.includes(tt) && !dt.includes(`-${tt}`))),
        withoutFeatures: ft.filter((tt => dt.includes(`-${tt}`))),
        searchQuery: (null === (qt = tt.get(Kt)) || void 0 === qt ? void 0 : qt.slice(0, Ot.I)) || null,
        pageNumber: (0, Dt.h)(tt.get(Dt.d)),
        banned: "only" === jt ? "with" : "include" === jt ? null : "without"
      }
    }

    function ct(tt, et) {
      var Vt;
      const Ot = Zt(et);
      (0, Dt.j)(tt, Jt, "explore" === et.section ? null : et.section), (0, Dt.j)(tt, Ct, et.sort === vt ? null : et.sort), (0, Dt.j)(tt, ut, Ot === Wt ? null : Ot), (0, Dt.j)(tt, Kt, et.searchQuery), (0, Dt.j)(tt, ht, null !== (Vt = Mt(et.banned)) && void 0 !== Vt ? Vt : null), (0, Dt.n)(tt, et.pageNumber)
    }

    function Rt(tt) {
      const et = new URLSearchParams;
      return ct(et, {
        section: "explore",
        sort: vt,
        withFeatures: "strict" === tt ? [tt] : [tt, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${mt}?${et.toString()}`
    }

    function It(tt) {
      return Zt(tt) === Wt
    }

    function Pt(tt) {
      return null !== tt.searchQuery || "with" === tt.banned || Zt(tt) !== Wt
    }

    function Zt(tt) {
      return ft.flatMap((et => {
        const Vt = yt(tt, et);
        return "with" === Vt ? [et] : "without" === Vt ? [`-${et}`] : []
      })).join(",")
    }
    const Lt = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Ft = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function kt(tt) {
      return Math.round(100 * Math.max(0, 1 - 1 / tt))
    }

    function Gt(tt, et, Vt, qt) {
      const Dt = [];
      tt.isBanned && Dt.push({
        tone: "warning",
        text: qt("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: mt
      } = tt;
      if (null === tt.brokenError || mt && !mt.error || Dt.push({
          tone: "warning",
          text: qt("shaderPackListing:ownerBroken"),
          detail: tt.brokenError
        }), null !== mt && void 0 !== mt && mt.error) Dt.push({
        tone: "warning",
        text: qt(et ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Ot.q)(mt.error) ? null : mt.error
      });
      else if (mt) {
        const tt = null === mt.renderNotBefore ? 0 : mt.renderNotBefore - Vt,
          Ot = String(Math.ceil(tt / 6e4)),
          dt = qt(et ? tt > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : tt > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Ot
          });
        Dt.push({
          tone: "info",
          text: dt,
          detail: null
        })
      }
      return tt.listed || Dt.push({
        tone: "info",
        text: qt("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Dt
    }

    function zt(tt) {
      return Math.max(1, Math.round(tt / 1024))
    }

    function ot(tt, et, Vt) {
      return tt instanceof qt.e && tt.errorMessageForUser ? tt.errorMessageForUser : et(Vt)
    }
  },
  6756: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => dt,
      E: () => mt,
      G: () => Ot,
      H: () => lt,
      I: () => Xt,
      K: () => Jt,
      L: () => Qt,
      P: () => Ht,
      e: () => ft,
      i: () => yt,
      k: () => wt,
      o: () => Et,
      q: () => bt,
      t: () => ut,
      u: () => jt,
      v: () => qt,
      w: () => Ct,
      x: () => Dt
    });
    const Ot = ["forest", "desert", "water", "night", "cave"];
    const qt = {
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
      Dt = ["popular", "updated", "newest"],
      mt = 3,
      dt = 32,
      jt = 300;

    function Ht(tt, et) {
      return tt.slice(0, et).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Xt = 64,
      Qt = 512,
      lt = 18e5;

    function Et(tt) {
      const et = tt,
        Vt = null === et || void 0 === et ? void 0 : et.files;
      return "number" === typeof(null === et || void 0 === et ? void 0 : et.apiVersion) && "string" === typeof et.name && (null === et.author || "string" === typeof et.author) && (void 0 === et.keepCircleShadows || "boolean" === typeof et.keepCircleShadows) && "object" === typeof Vt && null !== Vt && Object.values(Vt).every((tt => "string" === typeof tt))
    }
    const ft = "Bloxdhub",
      wt = "https://bloxdhub.com/shaders";

    function yt(tt) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(tt)}`
    }
    const Nt = "Screenshot generation failed.",
      Mt = "Its screenshots couldn't be generated:";

    function bt(tt) {
      var et;
      return tt === Nt || null !== (et = null === tt || void 0 === tt ? void 0 : tt.startsWith(Mt)) && void 0 !== et && et
    }

    function Jt(tt, et) {
      return `shaderPacks/${tt}/${et}.json`
    }

    function Ct(tt, et, Vt, Ot) {
      return null === et.renderId ? ut(tt, et.baselineVersion, Vt, Ot) : `${tt}/${function(tt,et,Vt,Ot){return`shaderPacks/${tt}/${et}/${Vt}-${Ot}.webp`}(et.packId,et.renderId,Vt,Ot)}`
    }

    function ut(tt, et, Vt, Ot) {
      return `${tt}/${function(tt,et,Vt){return`shaderPacks/baseline/${tt}/${et}-${Vt}.webp`}(et,Vt,Ot)}`
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);