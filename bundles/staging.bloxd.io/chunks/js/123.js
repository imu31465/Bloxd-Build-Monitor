export const id = 123;
export const ids = [123];
export const modules = {
  40508: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      ShaderPackCategory: () => vb
    });
    var Bb = hb(49),
      Ob = hb(1431),
      Gb = hb(1357),
      Ub = hb(1415),
      Lb = hb(1095),
      Yb = hb(86),
      Sb = hb(13),
      ab = hb(1537),
      Hb = hb(6350),
      wb = hb(270),
      Zb = hb(6388),
      Xb = hb(6384),
      pb = hb(6394),
      ob = hb(6279),
      Ab = hb(4765),
      lb = hb(6335),
      Kb = hb(6347),
      Wb = hb(3244);

    function Cb(bb, ub) {
      const hb = (0, Zb.storedPackOutcome)(bb, ub);
      return "none" !== hb.kind || "noCompiler" === hb.reason
    }
    var db = hb(958),
      rb = hb.n(db),
      jb = hb(6344),
      nb = hb(966),
      Db = hb(6331),
      xb = hb(1007);
    const zb = {
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

    function gb(bb, ub) {
      return "failedRecheck" === bb && ub.listing ? "shaderPack:statusFailedRecheckListed" : zb[bb]
    }

    function ib(bb) {
      let {
        stored: ub,
        checking: hb,
        webGpuUsable: Bb,
        changePending: Ob,
        compiler: Gb,
        t: Ub
      } = bb;
      const Lb = function(bb, ub, hb, Bb, Ob) {
          const Gb = (0, Zb.storedPackOutcome)(bb, Ob);
          return "none" === Gb.kind ? "noCompiler" === Gb.reason ? ub ? "checking" : "noCompiler" : "otherApiVersion" === Gb.reason ? "wrongApiVersion" : "failed" : (0, Wb.c)() ? "harnessBuild" : "blocked" === Gb.kind ? (0, Zb.shaderPackNeedsCheck)(bb, Ob) ? ub ? "checking" : !1 === hb ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === hb ? "offNoWebGpu" : Bb ? "readyAfterReload" : "ready"
        }(ub, hb, Bb, Ob, Gb),
        Yb = "failed" === Lb || "failedRecheck" === Lb,
        Sb = Yb || "wrongApiVersion" === Lb || "noCompiler" === Lb,
        ab = "ready" === Lb || "readyAfterReload" === Lb ? ub.validation.offInStrict : [];
      return (0, xb.jsxs)(xb.Fragment, {
        children: [(0, xb.jsxs)("div", {
          className: rb()("ShaderPackStatus", {
            Ready: "ready" === Lb,
            Failed: Sb
          }),
          children: ["ready" === Lb && (0, xb.jsx)(nb.e, {
            name: "circle-check"
          }), Sb && (0, xb.jsx)(nb.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === Lb ? (0, Wb.b)() : Ub(gb(Lb, ub), {
            packVersion: String(ub.manifest.apiVersion),
            version: String(jb.c)
          })]
        }), Yb && (0, xb.jsx)(Db.b, {
          diagnostics: ub.validation.errors,
          more: ub.validation.moreErrors,
          t: Ub
        }), ab.length > 0 && (0, xb.jsxs)(xb.Fragment, {
          children: [(0, xb.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, xb.jsx)(nb.e, {
              name: "triangle-exclamation"
            }), Ub("shaderPack:offInStrict")]
          }), (0, xb.jsx)(Db.b, {
            diagnostics: ab,
            t: Ub
          })]
        })]
      })
    }

    function vb(bb) {
      let {
        setApplySettingsCallback: ub
      } = bb;
      const {
        t: hb
      } = (0, Lb.K)(), [Ob, Ub] = (0, Bb.useState)(null), [Sb, ab] = (0, Bb.useState)(null), [Wb, db] = (0, Bb.useState)(null), [rb] = (0, Bb.useState)(wb.g), [jb, nb] = (0, Bb.useState)(!0), [Db, zb] = (0, Bb.useState)(!1), {
        loading: gb,
        error: vb,
        setError: Jb,
        onFiles: eb
      } = (0, Kb.d)((async bb => {
        const ub = await (0, Hb.loadPageShaderPackCompiler)();
        if (!ub) return void Jb(hb("shaderPack:compilerUnavailable"));
        ab(ub);
        const Bb = (0, Zb.toStoredShaderPack)(bb, await (0, Xb.d)(ub, bb.files));
        await (0, Zb.saveShaderPack)(Bb, ub) ? (Ub(Bb), Nb(Ob, Bb, ub)) : Jb(hb("shaderPack:saveFailed"))
      }));

      function Nb(bb, hb, Bb) {
        (function(bb, ub, hb, Bb) {
          return hb || Cb(bb, Bb) || Cb(ub, Bb)
        })(bb, hb, (0, Zb.isShaderPackChangePending)(), Bb) && ((0, Zb.markShaderPackChangePending)(), ub((() => Ab.k)))
      }
      return (0, Bb.useEffect)((() => {
        let bb = !1;
        return async function() {
          const ub = (0, Yb.hasUsableWebGpuAdapter)(),
            hb = await (0, pb.g)();
          if (bb) return;
          Ub(hb), zb(!0), nb(!1);
          const Bb = null !== hb ? (0, Hb.loadPageShaderPackCompiler)() : null,
            Ob = await ub;
          if (bb) return;
          db(Ob);
          const Gb = await Bb;
          if (!bb && (ab(Gb), null !== hb && Ob && null !== Gb && (0, Zb.shaderPackNeedsCheck)(hb, Gb))) {
            const ub = await (0, Xb.c)(hb, Gb);
            bb || Ub((bb => bb === hb ? ub : bb))
          }
        }().catch((ub => {
          console.error("Failed to load the stored shader pack", ub), bb || Jb(hb("shaderPack:unexpectedError"))
        })).finally((() => {
          bb || (nb(!1), zb(!1))
        })), () => {
          bb = !0
        }
      }), []), (0, xb.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, xb.jsx)("div", {
          className: "ShaderPackIntro",
          children: hb("shaderPack:intro")
        }), (0, xb.jsx)(tb, {
          to: ob.U,
          className: "ShaderPackBrowseLink",
          children: (0, xb.jsx)(Gb.m, {
            className: "ShaderPackBrowseButton",
            children: hb("shaderPackListing:browse")
          })
        }), !1 === Wb && (0, xb.jsx)("div", {
          className: "SettingsBoxWarning",
          children: hb(rb ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== vb && (0, xb.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [hb("general:error"), ": ", vb]
        }), Ob && (0, xb.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, xb.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, xb.jsxs)("div", {
              children: [(0, xb.jsx)("div", {
                className: "ShaderPackName",
                children: Ob.manifest.name
              }), Ob.manifest.author && (0, xb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, lb.k)(hb, "shaderPack:byAuthor", {
                  author: Ob.manifest.author
                })
              }), Ob.manifest.description && (0, xb.jsx)("div", {
                className: "ShaderPackDescription",
                children: Ob.manifest.description
              }), Ob.listing && (0, xb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, xb.jsx)(tb, {
                  to: (0, ob.Z)(Ob.listing.packId),
                  className: "ShaderPackListingLink",
                  children: hb("shaderPackListing:openPackPage")
                })
              })]
            }), (0, xb.jsx)(Gb.I, {
              disabled: jb || gb,
              onClick: async function() {
                nb(!0), Jb(null), await (0, Zb.removeShaderPack)(), Ub(null), nb(!1), Nb(Ob, null, Sb)
              },
              children: hb("shaderPack:removePack")
            })]
          }), (0, xb.jsx)(ib, {
            stored: Ob,
            checking: Db,
            webGpuUsable: Wb,
            changePending: (0, Zb.isShaderPackChangePending)(),
            compiler: Sb,
            t: hb
          })]
        }), (0, xb.jsx)(Kb.c, {
          busy: jb || gb || Db,
          disabled: jb || gb || Db || !0 !== Wb,
          onFiles: eb
        })]
      })
    }

    function tb(bb) {
      let {
        to: ub,
        className: hb,
        children: Bb
      } = bb;
      const {
        gameState: Gb
      } = (0, Sb.j)(["gameState"]), {
        pathname: Lb,
        search: Yb
      } = (0, Ob.x)(), Hb = "landingPage" !== Gb && "studio" !== Gb;
      return (0, xb.jsx)(Ub.LinkPreserveSearch, {
        to: ub,
        className: hb,
        target: Hb ? "_blank" : void 0,
        onClick: () => {
          Hb || ((0, ob.I)(`${Lb}${Yb}`), (0, ab.i)())
        },
        children: Bb
      })
    }
  },
  6279: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => Xb,
      D: () => Ab,
      F: () => xb,
      I: () => ab,
      L: () => gb,
      M: () => pb,
      P: () => Mb,
      R: () => Nb,
      U: () => Ub,
      V: () => sb,
      Z: () => Yb,
      _: () => Lb,
      cb: () => Jb,
      db: () => eb,
      e: () => lb,
      gb: () => Kb,
      i: () => nb,
      j: () => ob,
      jb: () => zb,
      k: () => wb,
      m: () => Hb,
      q: () => ib,
      u: () => Zb,
      v: () => vb,
      w: () => mb
    });
    var Bb = hb(6281),
      Ob = hb(148),
      Gb = hb(4322);
    const Ub = "/shader-packs",
      Lb = `${Ub}/publish`;

    function Yb(bb) {
      return `${Ub}/${encodeURIComponent(bb)}`
    }
    let Sb = null;

    function ab(bb) {
      Sb = bb
    }

    function Hb() {
      return Sb
    }

    function wb() {
      Sb = null
    }

    function Zb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const Xb = ["terrain", "water", "models", "sunShadows", "strict"],
      pb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function ob(bb, ub) {
      return bb.withFeatures.includes(ub) ? "with" : bb.withoutFeatures.includes(ub) ? "without" : null
    }

    function Ab(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function lb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function Kb(bb, ub) {
      const hb = ob(bb, ub),
        Bb = bb => bb.filter((bb => bb !== ub));
      return {
        withFeatures: null === hb ? [...bb.withFeatures, ub] : Bb(bb.withFeatures),
        withoutFeatures: "with" === hb ? [...bb.withoutFeatures, ub] : Bb(bb.withoutFeatures)
      }
    }
    const Wb = "section",
      Cb = "sort",
      db = "filters",
      rb = "q",
      jb = "banned",
      nb = "popular",
      Db = "strict";

    function xb(bb) {
      var ub, hb, Ob;
      const Ub = bb.get(Wb),
        Lb = (null !== (ub = bb.get(db)) && void 0 !== ub ? ub : Db).split(","),
        Yb = bb.get(jb);
      return {
        section: "favourites" === Ub || "mine" === Ub ? Ub : "explore",
        sort: null !== (hb = Bb.q.find((ub => ub === bb.get(Cb)))) && void 0 !== hb ? hb : nb,
        withFeatures: Xb.filter((bb => Lb.includes(bb) && !Lb.includes(`-${bb}`))),
        withoutFeatures: Xb.filter((bb => Lb.includes(`-${bb}`))),
        searchQuery: (null === (Ob = bb.get(rb)) || void 0 === Ob ? void 0 : Ob.slice(0, Bb.C)) || null,
        pageNumber: (0, Gb.d)(bb.get(Gb.c)),
        banned: "only" === Yb ? "with" : "include" === Yb ? null : "without"
      }
    }

    function zb(bb, ub) {
      var hb;
      const Bb = tb(ub);
      (0, Gb.g)(bb, Wb, "explore" === ub.section ? null : ub.section), (0, Gb.g)(bb, Cb, ub.sort === nb ? null : ub.sort), (0, Gb.g)(bb, db, Bb === Db ? null : Bb), (0, Gb.g)(bb, rb, ub.searchQuery), (0, Gb.g)(bb, jb, null !== (hb = lb(ub.banned)) && void 0 !== hb ? hb : null), (0, Gb.h)(bb, ub.pageNumber)
    }

    function gb(bb) {
      const ub = new URLSearchParams;
      return zb(ub, {
        section: "explore",
        sort: nb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Ub}?${ub.toString()}`
    }

    function ib(bb) {
      return tb(bb) === Db
    }

    function vb(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || tb(bb) !== Db
    }

    function tb(bb) {
      return Xb.flatMap((ub => {
        const hb = ob(bb, ub);
        return "with" === hb ? [ub] : "without" === hb ? [`-${ub}`] : []
      })).join(",")
    }
    const Jb = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      eb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Nb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function sb(bb, ub, hb, Ob) {
      const Gb = [];
      bb.isBanned && Gb.push({
        tone: "warning",
        text: Ob("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Ub
      } = bb;
      if (null === bb.brokenError || Ub && !Ub.error || Gb.push({
          tone: "warning",
          text: Ob("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Ub && void 0 !== Ub && Ub.error) Gb.push({
        tone: "warning",
        text: Ob(ub ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Bb.j)(Ub.error) ? null : Ub.error
      });
      else if (Ub) {
        const bb = null === Ub.renderNotBefore ? 0 : Ub.renderNotBefore - hb,
          Bb = String(Math.ceil(bb / 6e4)),
          Lb = Ob(ub ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Bb
          });
        Gb.push({
          tone: "info",
          text: Lb,
          detail: null
        })
      }
      return bb.listed || Gb.push({
        tone: "info",
        text: Ob("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Gb
    }

    function Mb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function mb(bb, ub, hb) {
      return bb instanceof Ob.b && bb.errorMessageForUser ? bb.errorMessageForUser : ub(hb)
    }
  },
  6281: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => wb,
      C: () => ab,
      G: () => Kb,
      J: () => Hb,
      L: () => Sb,
      d: () => Zb,
      f: () => pb,
      g: () => Xb,
      j: () => lb,
      k: () => Cb,
      l: () => Yb,
      o: () => Ob,
      p: () => Wb,
      q: () => Gb,
      s: () => Lb,
      v: () => Ub,
      z: () => Bb
    });
    const Bb = ["forest", "desert", "water", "night", "cave"];
    const Ob = {
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
      Gb = ["popular", "updated", "newest"],
      Ub = 3,
      Lb = 32,
      Yb = 300;

    function Sb(bb, ub) {
      return bb.slice(0, ub).replace(/[\uD800-\uDBFF]$/, "")
    }
    const ab = 64,
      Hb = 512,
      wb = 18e5;
    const Zb = "Bloxdhub",
      Xb = "https://bloxdhub.com/shaders";

    function pb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const ob = "Screenshot generation failed.",
      Ab = "Its screenshots couldn't be generated:";

    function lb(bb) {
      var ub;
      return bb === ob || null !== (ub = null === bb || void 0 === bb ? void 0 : bb.startsWith(Ab)) && void 0 !== ub && ub
    }

    function Kb(bb, ub) {
      return `shaderPacks/${bb}/${ub}.json`
    }

    function Wb(bb, ub, hb, Bb) {
      return null === ub.renderId ? Cb(bb, ub.baselineVersion, hb, Bb) : `${bb}/${function(bb,ub,hb,Bb){return`shaderPacks/${bb}/${ub}/${hb}-${Bb}.webp`}(ub.packId,ub.renderId,hb,Bb)}`
    }

    function Cb(bb, ub, hb, Bb) {
      return `${bb}/${function(bb,ub,hb){return`shaderPacks/baseline/${bb}/${ub}-${hb}.webp`}(ub,hb,Bb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);