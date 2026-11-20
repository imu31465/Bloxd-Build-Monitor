export const id = 122;
export const ids = [122];
export const modules = {
  40501: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      ShaderPackCategory: () => Db
    });
    var kb = sb(64),
      Wb = sb(1511),
      ab = sb(1431),
      Tb = sb(1495),
      Ub = sb(1197),
      Ib = sb(117),
      Hb = sb(19),
      fb = sb(1626),
      Mb = sb(6276),
      Xb = sb(312),
      nb = sb(6321),
      mb = sb(6314),
      lb = sb(6328),
      Qb = sb(6204),
      eb = sb(4703),
      Cb = sb(6260),
      Nb = sb(6273),
      Vb = sb(3230);

    function Lb(bb, cb) {
      const sb = (0, nb.storedPackOutcome)(bb, cb);
      return "none" !== sb.kind || "noCompiler" === sb.reason
    }
    var ub = sb(1033),
      Yb = sb.n(ub),
      hb = sb(6269),
      Jb = sb(1039),
      gb = sb(6258),
      Bb = sb(1087);
    const tb = {
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

    function yb(bb, cb) {
      return "failedRecheck" === bb && cb.listing ? "shaderPack:statusFailedRecheckListed" : tb[bb]
    }

    function Pb(bb) {
      let {
        stored: cb,
        checking: sb,
        webGpuUsable: kb,
        changePending: Wb,
        compiler: ab,
        t: Tb
      } = bb;
      const Ub = function(bb, cb, sb, kb, Wb) {
          const ab = (0, nb.storedPackOutcome)(bb, Wb);
          return "none" === ab.kind ? "noCompiler" === ab.reason ? cb ? "checking" : "noCompiler" : "otherApiVersion" === ab.reason ? "wrongApiVersion" : "failed" : (0, Vb.g)() ? "harnessBuild" : "blocked" === ab.kind ? (0, nb.shaderPackNeedsCheck)(bb, Wb) ? cb ? "checking" : !1 === sb ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === sb ? "offNoWebGpu" : kb ? "readyAfterReload" : "ready"
        }(cb, sb, kb, Wb, ab),
        Ib = "failed" === Ub || "failedRecheck" === Ub,
        Hb = Ib || "wrongApiVersion" === Ub || "noCompiler" === Ub,
        fb = "ready" === Ub || "readyAfterReload" === Ub ? cb.validation.offInStrict : [];
      return (0, Bb.jsxs)(Bb.Fragment, {
        children: [(0, Bb.jsxs)("div", {
          className: Yb()("ShaderPackStatus", {
            Ready: "ready" === Ub,
            Failed: Hb
          }),
          children: ["ready" === Ub && (0, Bb.jsx)(Jb.b, {
            name: "circle-check"
          }), Hb && (0, Bb.jsx)(Jb.b, {
            name: "triangle-exclamation"
          }), "harnessBuild" === Ub ? (0, Vb.d)() : Tb(yb(Ub, cb), {
            packVersion: String(cb.manifest.apiVersion),
            version: String(hb.e)
          })]
        }), Ib && (0, Bb.jsx)(gb.c, {
          diagnostics: cb.validation.errors,
          more: cb.validation.moreErrors,
          t: Tb
        }), fb.length > 0 && (0, Bb.jsxs)(Bb.Fragment, {
          children: [(0, Bb.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Bb.jsx)(Jb.b, {
              name: "triangle-exclamation"
            }), Tb("shaderPack:offInStrict")]
          }), (0, Bb.jsx)(gb.c, {
            diagnostics: fb,
            t: Tb
          })]
        })]
      })
    }

    function Db(bb) {
      let {
        setApplySettingsCallback: cb
      } = bb;
      const {
        t: sb
      } = (0, Ub.E)(), [Wb, Tb] = (0, kb.useState)(null), [Hb, fb] = (0, kb.useState)(null), [Vb, ub] = (0, kb.useState)(null), [Yb] = (0, kb.useState)(Xb.g), [hb, Jb] = (0, kb.useState)(!0), [gb, tb] = (0, kb.useState)(!1), {
        loading: yb,
        error: Db,
        setError: ib,
        onFiles: Ob
      } = (0, Nb.h)((async bb => {
        const cb = await (0, Mb.loadPageShaderPackCompiler)();
        if (!cb) return void ib(sb("shaderPack:compilerUnavailable"));
        fb(cb);
        const kb = (0, nb.toStoredShaderPack)(bb, await (0, mb.d)(cb, bb.files));
        await (0, nb.saveShaderPack)(kb, cb) ? (Tb(kb), Gb(Wb, kb, cb)) : ib(sb("shaderPack:saveFailed"))
      }));

      function Gb(bb, sb, kb) {
        (function(bb, cb, sb, kb) {
          return sb || Lb(bb, kb) || Lb(cb, kb)
        })(bb, sb, (0, nb.isShaderPackChangePending)(), kb) && ((0, nb.markShaderPackChangePending)(), cb((() => eb.m)))
      }
      return (0, kb.useEffect)((() => {
        let bb = !1;
        return async function() {
          const cb = (0, Ib.hasUsableWebGpuAdapter)(),
            sb = await (0, lb.d)();
          if (bb) return;
          Tb(sb), tb(!0), Jb(!1);
          const kb = null !== sb ? (0, Mb.loadPageShaderPackCompiler)() : null,
            Wb = await cb;
          if (bb) return;
          ub(Wb);
          const ab = await kb;
          if (!bb && (fb(ab), null !== sb && Wb && null !== ab && (0, nb.shaderPackNeedsCheck)(sb, ab))) {
            const cb = await (0, mb.c)(sb, ab);
            bb || Tb((bb => bb === sb ? cb : bb))
          }
        }().catch((cb => {
          console.error("Failed to load the stored shader pack", cb), bb || ib(sb("shaderPack:unexpectedError"))
        })).finally((() => {
          bb || (Jb(!1), tb(!1))
        })), () => {
          bb = !0
        }
      }), []), (0, Bb.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Bb.jsx)("div", {
          className: "ShaderPackIntro",
          children: sb("shaderPack:intro")
        }), (0, Bb.jsx)(Eb, {
          to: Qb.T,
          className: "ShaderPackBrowseLink",
          children: (0, Bb.jsx)(ab.n, {
            className: "ShaderPackBrowseButton",
            children: sb("shaderPackListing:browse")
          })
        }), !1 === Vb && (0, Bb.jsx)("div", {
          className: "SettingsBoxWarning",
          children: sb(Yb ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Db && (0, Bb.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [sb("general:error"), ": ", Db]
        }), Wb && (0, Bb.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Bb.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Bb.jsxs)("div", {
              children: [(0, Bb.jsx)("div", {
                className: "ShaderPackName",
                children: Wb.manifest.name
              }), Wb.manifest.author && (0, Bb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Cb.g)(sb, "shaderPack:byAuthor", {
                  author: Wb.manifest.author
                })
              }), Wb.manifest.description && (0, Bb.jsx)("div", {
                className: "ShaderPackDescription",
                children: Wb.manifest.description
              }), Wb.listing && (0, Bb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Bb.jsx)(Eb, {
                  to: (0, Qb.Z)(Wb.listing.packId),
                  className: "ShaderPackListingLink",
                  children: sb("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Bb.jsx)(ab.J, {
              disabled: hb || yb,
              onClick: async function() {
                Jb(!0), ib(null), await (0, nb.removeShaderPack)(), Tb(null), Jb(!1), Gb(Wb, null, Hb)
              },
              children: sb("shaderPack:removePack")
            })]
          }), (0, Bb.jsx)(Pb, {
            stored: Wb,
            checking: gb,
            webGpuUsable: Vb,
            changePending: (0, nb.isShaderPackChangePending)(),
            compiler: Hb,
            t: sb
          })]
        }), (0, Bb.jsx)(Nb.e, {
          busy: hb || yb || gb,
          disabled: hb || yb || gb || !0 !== Vb,
          onFiles: Ob
        })]
      })
    }

    function Eb(bb) {
      let {
        to: cb,
        className: sb,
        children: kb
      } = bb;
      const {
        gameState: ab
      } = (0, Hb.p)(["gameState"]), {
        pathname: Ub,
        search: Ib
      } = (0, Wb.r)(), Mb = "landingPage" !== ab && "studio" !== ab;
      return (0, Bb.jsx)(Tb.LinkPreserveSearch, {
        to: cb,
        className: sb,
        target: Mb ? "_blank" : void 0,
        onClick: () => {
          Mb || ((0, Qb.G)(`${Ub}${Ib}`), (0, fb.g)())
        },
        children: kb
      })
    }
  },
  6204: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => mb,
      D: () => eb,
      F: () => Bb,
      G: () => fb,
      I: () => yb,
      K: () => lb,
      O: () => Zb,
      Q: () => Gb,
      T: () => Tb,
      X: () => Kb,
      Z: () => Ib,
      _: () => Ub,
      ab: () => ib,
      cb: () => Ob,
      db: () => Nb,
      e: () => Cb,
      f: () => Jb,
      gb: () => tb,
      h: () => Qb,
      k: () => Xb,
      m: () => Mb,
      p: () => Pb,
      t: () => nb,
      x: () => Db,
      y: () => zb
    });
    var kb = sb(6209),
      Wb = sb(195),
      ab = sb(4295);
    const Tb = "/shader-packs",
      Ub = `${Tb}/publish`;

    function Ib(bb) {
      return `${Tb}/${encodeURIComponent(bb)}`
    }
    let Hb = null;

    function fb(bb) {
      Hb = bb
    }

    function Mb() {
      return Hb
    }

    function Xb() {
      Hb = null
    }

    function nb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const mb = ["terrain", "water", "models", "sunShadows", "strict"],
      lb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Qb(bb, cb) {
      return bb.withFeatures.includes(cb) ? "with" : bb.withoutFeatures.includes(cb) ? "without" : null
    }

    function eb(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function Cb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function Nb(bb, cb) {
      const sb = Qb(bb, cb),
        kb = bb => bb.filter((bb => bb !== cb));
      return {
        withFeatures: null === sb ? [...bb.withFeatures, cb] : kb(bb.withFeatures),
        withoutFeatures: "with" === sb ? [...bb.withoutFeatures, cb] : kb(bb.withoutFeatures)
      }
    }
    const Vb = "section",
      Lb = "sort",
      ub = "filters",
      Yb = "q",
      hb = "banned",
      Jb = "popular",
      gb = "strict";

    function Bb(bb) {
      var cb, sb, Wb;
      const Tb = bb.get(Vb),
        Ub = (null !== (cb = bb.get(ub)) && void 0 !== cb ? cb : gb).split(","),
        Ib = bb.get(hb);
      return {
        section: "favourites" === Tb || "mine" === Tb ? Tb : "explore",
        sort: null !== (sb = kb.A.find((cb => cb === bb.get(Lb)))) && void 0 !== sb ? sb : Jb,
        withFeatures: mb.filter((bb => Ub.includes(bb) && !Ub.includes(`-${bb}`))),
        withoutFeatures: mb.filter((bb => Ub.includes(`-${bb}`))),
        searchQuery: (null === (Wb = bb.get(Yb)) || void 0 === Wb ? void 0 : Wb.slice(0, kb.N)) || null,
        pageNumber: (0, ab.d)(bb.get(ab.b)),
        banned: "only" === Ib ? "with" : "include" === Ib ? null : "without"
      }
    }

    function tb(bb, cb) {
      var sb;
      const kb = Eb(cb);
      (0, ab.g)(bb, Vb, "explore" === cb.section ? null : cb.section), (0, ab.g)(bb, Lb, cb.sort === Jb ? null : cb.sort), (0, ab.g)(bb, ub, kb === gb ? null : kb), (0, ab.g)(bb, Yb, cb.searchQuery), (0, ab.g)(bb, hb, null !== (sb = Cb(cb.banned)) && void 0 !== sb ? sb : null), (0, ab.k)(bb, cb.pageNumber)
    }

    function yb(bb) {
      const cb = new URLSearchParams;
      return tb(cb, {
        section: "explore",
        sort: Jb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Tb}?${cb.toString()}`
    }

    function Pb(bb) {
      return Eb(bb) === gb
    }

    function Db(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || Eb(bb) !== gb
    }

    function Eb(bb) {
      return mb.flatMap((cb => {
        const sb = Qb(bb, cb);
        return "with" === sb ? [cb] : "without" === sb ? [`-${cb}`] : []
      })).join(",")
    }
    const ib = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Ob = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Gb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function Kb(bb, cb, sb, Wb) {
      const ab = [];
      bb.isBanned && ab.push({
        tone: "warning",
        text: Wb("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Tb
      } = bb;
      if (null === bb.brokenError || Tb && !Tb.error || ab.push({
          tone: "warning",
          text: Wb("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Tb && void 0 !== Tb && Tb.error) ab.push({
        tone: "warning",
        text: Wb(cb ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, kb.l)(Tb.error) ? null : Tb.error
      });
      else if (Tb) {
        const bb = null === Tb.renderNotBefore ? 0 : Tb.renderNotBefore - sb,
          kb = String(Math.ceil(bb / 6e4)),
          Ub = Wb(cb ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: kb
          });
        ab.push({
          tone: "info",
          text: Ub,
          detail: null
        })
      }
      return bb.listed || ab.push({
        tone: "info",
        text: Wb("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ab
    }

    function Zb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function zb(bb, cb, sb) {
      return bb instanceof Wb.d && bb.errorMessageForUser ? bb.errorMessageForUser : cb(sb)
    }
  },
  6209: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => ab,
      D: () => Ub,
      H: () => Tb,
      K: () => kb,
      M: () => Xb,
      N: () => fb,
      R: () => Nb,
      U: () => Mb,
      Y: () => Hb,
      b: () => nb,
      f: () => lb,
      h: () => mb,
      l: () => Cb,
      p: () => Lb,
      t: () => Ib,
      w: () => Wb,
      y: () => Vb
    });
    const kb = ["forest", "desert", "water", "night", "cave"];
    const Wb = {
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
      ab = ["popular", "updated", "newest"],
      Tb = 3,
      Ub = 32,
      Ib = 300;

    function Hb(bb, cb) {
      return bb.slice(0, cb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const fb = 64,
      Mb = 512,
      Xb = 18e5;
    const nb = "Bloxdhub",
      mb = "https://bloxdhub.com/shaders";

    function lb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const Qb = "Screenshot generation failed.",
      eb = "Its screenshots couldn't be generated:";

    function Cb(bb) {
      var cb;
      return bb === Qb || null !== (cb = null === bb || void 0 === bb ? void 0 : bb.startsWith(eb)) && void 0 !== cb && cb
    }

    function Nb(bb, cb) {
      return `shaderPacks/${bb}/${cb}.json`
    }

    function Vb(bb, cb, sb, kb) {
      return null === cb.renderId ? Lb(bb, cb.baselineVersion, sb, kb) : `${bb}/${function(bb,cb,sb,kb){return`shaderPacks/${bb}/${cb}/${sb}-${kb}.webp`}(cb.packId,cb.renderId,sb,kb)}`
    }

    function Lb(bb, cb, sb, kb) {
      return `${bb}/${function(bb,cb,sb){return`shaderPacks/baseline/${bb}/${cb}-${sb}.webp`}(cb,sb,kb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);