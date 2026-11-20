export const id = 122;
export const ids = [122];
export const modules = {
  40177: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      ShaderPackCategory: () => Fb
    });
    var Ab = Ub(52),
      Mb = Ub(1446),
      Tb = Ub(1352),
      Eb = Ub(1433),
      Yb = Ub(1134),
      Bb = Ub(101),
      eb = Ub(19),
      vb = Ub(1548),
      Lb = Ub(6244),
      Pb = Ub(292),
      Xb = Ub(6285),
      jb = Ub(6281),
      Rb = Ub(6294),
      kb = Ub(6161),
      yb = Ub(4673),
      Zb = Ub(6225),
      Db = Ub(6237),
      zb = Ub(3138);

    function xb(bb, ab) {
      const Ub = (0, Xb.storedPackOutcome)(bb, ab);
      return "none" !== Ub.kind || "noCompiler" === Ub.reason
    }
    var ib = Ub(984),
      fb = Ub.n(ib),
      mb = Ub(6233),
      pb = Ub(990),
      Nb = Ub(6219),
      Wb = Ub(1023);
    const Hb = {
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

    function Ib(bb, ab) {
      return "failedRecheck" === bb && ab.listing ? "shaderPack:statusFailedRecheckListed" : Hb[bb]
    }

    function db(bb) {
      let {
        stored: ab,
        checking: Ub,
        webGpuUsable: Ab,
        changePending: Mb,
        compiler: Tb,
        t: Eb
      } = bb;
      const Yb = function(bb, ab, Ub, Ab, Mb) {
          const Tb = (0, Xb.storedPackOutcome)(bb, Mb);
          return "none" === Tb.kind ? "noCompiler" === Tb.reason ? ab ? "checking" : "noCompiler" : "otherApiVersion" === Tb.reason ? "wrongApiVersion" : "failed" : (0, zb.i)() ? "harnessBuild" : "blocked" === Tb.kind ? (0, Xb.shaderPackNeedsCheck)(bb, Mb) ? ab ? "checking" : !1 === Ub ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === Ub ? "offNoWebGpu" : Ab ? "readyAfterReload" : "ready"
        }(ab, Ub, Ab, Mb, Tb),
        Bb = "failed" === Yb || "failedRecheck" === Yb,
        eb = Bb || "wrongApiVersion" === Yb || "noCompiler" === Yb,
        vb = "ready" === Yb || "readyAfterReload" === Yb ? ab.validation.offInStrict : [];
      return (0, Wb.jsxs)(Wb.Fragment, {
        children: [(0, Wb.jsxs)("div", {
          className: fb()("ShaderPackStatus", {
            Ready: "ready" === Yb,
            Failed: eb
          }),
          children: ["ready" === Yb && (0, Wb.jsx)(pb.e, {
            name: "circle-check"
          }), eb && (0, Wb.jsx)(pb.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === Yb ? (0, zb.e)() : Eb(Ib(Yb, ab), {
            packVersion: String(ab.manifest.apiVersion),
            version: String(mb.b)
          })]
        }), Bb && (0, Wb.jsx)(Nb.d, {
          diagnostics: ab.validation.errors,
          more: ab.validation.moreErrors,
          t: Eb
        }), vb.length > 0 && (0, Wb.jsxs)(Wb.Fragment, {
          children: [(0, Wb.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Wb.jsx)(pb.e, {
              name: "triangle-exclamation"
            }), Eb("shaderPack:offInStrict")]
          }), (0, Wb.jsx)(Nb.d, {
            diagnostics: vb,
            t: Eb
          })]
        })]
      })
    }

    function Fb(bb) {
      let {
        setApplySettingsCallback: ab
      } = bb;
      const {
        t: Ub
      } = (0, Yb.A)(), [Mb, Eb] = (0, Ab.useState)(null), [eb, vb] = (0, Ab.useState)(null), [zb, ib] = (0, Ab.useState)(null), [fb] = (0, Ab.useState)(Pb.f), [mb, pb] = (0, Ab.useState)(!0), [Nb, Hb] = (0, Ab.useState)(!1), {
        loading: Ib,
        error: Fb,
        setError: Gb,
        onFiles: Qb
      } = (0, Db.g)((async bb => {
        const ab = await (0, Lb.loadPageShaderPackCompiler)();
        if (!ab) return void Gb(Ub("shaderPack:compilerUnavailable"));
        vb(ab);
        const Ab = (0, Xb.toStoredShaderPack)(bb, await (0, jb.d)(ab, bb.files));
        await (0, Xb.saveShaderPack)(Ab, ab) ? (Eb(Ab), qb(Mb, Ab, ab)) : Gb(Ub("shaderPack:saveFailed"))
      }));

      function qb(bb, Ub, Ab) {
        (function(bb, ab, Ub, Ab) {
          return Ub || xb(bb, Ab) || xb(ab, Ab)
        })(bb, Ub, (0, Xb.isShaderPackChangePending)(), Ab) && ((0, Xb.markShaderPackChangePending)(), ab((() => yb.h)))
      }
      return (0, Ab.useEffect)((() => {
        let bb = !1;
        return async function() {
          const ab = (0, Bb.hasUsableWebGpuAdapter)(),
            Ub = await (0, Rb.f)();
          if (bb) return;
          Eb(Ub), Hb(!0), pb(!1);
          const Ab = null !== Ub ? (0, Lb.loadPageShaderPackCompiler)() : null,
            Mb = await ab;
          if (bb) return;
          ib(Mb);
          const Tb = await Ab;
          if (!bb && (vb(Tb), null !== Ub && Mb && null !== Tb && (0, Xb.shaderPackNeedsCheck)(Ub, Tb))) {
            const ab = await (0, jb.c)(Ub, Tb);
            bb || Eb((bb => bb === Ub ? ab : bb))
          }
        }().catch((ab => {
          console.error("Failed to load the stored shader pack", ab), bb || Gb(Ub("shaderPack:unexpectedError"))
        })).finally((() => {
          bb || (pb(!1), Hb(!1))
        })), () => {
          bb = !0
        }
      }), []), (0, Wb.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Wb.jsx)("div", {
          className: "ShaderPackIntro",
          children: Ub("shaderPack:intro")
        }), (0, Wb.jsx)(hb, {
          to: kb.U,
          className: "ShaderPackBrowseLink",
          children: (0, Wb.jsx)(Tb.m, {
            className: "ShaderPackBrowseButton",
            children: Ub("shaderPackListing:browse")
          })
        }), !1 === zb && (0, Wb.jsx)("div", {
          className: "SettingsBoxWarning",
          children: Ub(fb ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Fb && (0, Wb.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [Ub("general:error"), ": ", Fb]
        }), Mb && (0, Wb.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Wb.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Wb.jsxs)("div", {
              children: [(0, Wb.jsx)("div", {
                className: "ShaderPackName",
                children: Mb.manifest.name
              }), Mb.manifest.author && (0, Wb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Zb.h)(Ub, "shaderPack:byAuthor", {
                  author: Mb.manifest.author
                })
              }), Mb.manifest.description && (0, Wb.jsx)("div", {
                className: "ShaderPackDescription",
                children: Mb.manifest.description
              }), Mb.listing && (0, Wb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Wb.jsx)(hb, {
                  to: (0, kb.Z)(Mb.listing.packId),
                  className: "ShaderPackListingLink",
                  children: Ub("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Wb.jsx)(Tb.F, {
              disabled: mb || Ib,
              onClick: async function() {
                pb(!0), Gb(null), await (0, Xb.removeShaderPack)(), Eb(null), pb(!1), qb(Mb, null, eb)
              },
              children: Ub("shaderPack:removePack")
            })]
          }), (0, Wb.jsx)(db, {
            stored: Mb,
            checking: Nb,
            webGpuUsable: zb,
            changePending: (0, Xb.isShaderPackChangePending)(),
            compiler: eb,
            t: Ub
          })]
        }), (0, Wb.jsx)(Db.d, {
          busy: mb || Ib || Nb,
          disabled: mb || Ib || Nb || !0 !== zb,
          onFiles: Qb
        })]
      })
    }

    function hb(bb) {
      let {
        to: ab,
        className: Ub,
        children: Ab
      } = bb;
      const {
        gameState: Tb
      } = (0, eb.n)(["gameState"]), {
        pathname: Yb,
        search: Bb
      } = (0, Mb.v)(), Lb = "landingPage" !== Tb && "studio" !== Tb;
      return (0, Wb.jsx)(Eb.LinkPreserveSearch, {
        to: ab,
        className: Ub,
        target: Lb ? "_blank" : void 0,
        onClick: () => {
          Lb || ((0, kb.I)(`${Yb}${Bb}`), (0, vb.e)())
        },
        children: Ab
      })
    }
  },
  6161: (bb, ab, Ub) => {
    Ub.d(ab, {
      D: () => jb,
      E: () => yb,
      H: () => Wb,
      I: () => vb,
      J: () => Ib,
      K: () => Rb,
      O: () => rb,
      R: () => qb,
      U: () => Eb,
      V: () => ub,
      Z: () => Bb,
      ab: () => Yb,
      db: () => Gb,
      e: () => Zb,
      eb: () => Qb,
      g: () => pb,
      hb: () => Db,
      ib: () => Hb,
      j: () => kb,
      l: () => Pb,
      m: () => Lb,
      p: () => db,
      t: () => Xb,
      x: () => Fb,
      z: () => Kb
    });
    var Ab = Ub(6167),
      Mb = Ub(166),
      Tb = Ub(4239);
    const Eb = "/shader-packs",
      Yb = `${Eb}/publish`;

    function Bb(bb) {
      return `${Eb}/${encodeURIComponent(bb)}`
    }
    let eb = null;

    function vb(bb) {
      eb = bb
    }

    function Lb() {
      return eb
    }

    function Pb() {
      eb = null
    }

    function Xb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const jb = ["terrain", "water", "models", "sunShadows", "strict"],
      Rb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function kb(bb, ab) {
      return bb.withFeatures.includes(ab) ? "with" : bb.withoutFeatures.includes(ab) ? "without" : null
    }

    function yb(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function Zb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function Db(bb, ab) {
      const Ub = kb(bb, ab),
        Ab = bb => bb.filter((bb => bb !== ab));
      return {
        withFeatures: null === Ub ? [...bb.withFeatures, ab] : Ab(bb.withFeatures),
        withoutFeatures: "with" === Ub ? [...bb.withoutFeatures, ab] : Ab(bb.withoutFeatures)
      }
    }
    const zb = "section",
      xb = "sort",
      ib = "filters",
      fb = "q",
      mb = "banned",
      pb = "popular",
      Nb = "strict";

    function Wb(bb) {
      var ab, Ub, Mb;
      const Eb = bb.get(zb),
        Yb = (null !== (ab = bb.get(ib)) && void 0 !== ab ? ab : Nb).split(","),
        Bb = bb.get(mb);
      return {
        section: "favourites" === Eb || "mine" === Eb ? Eb : "explore",
        sort: null !== (Ub = Ab.z.find((ab => ab === bb.get(xb)))) && void 0 !== Ub ? Ub : pb,
        withFeatures: jb.filter((bb => Yb.includes(bb) && !Yb.includes(`-${bb}`))),
        withoutFeatures: jb.filter((bb => Yb.includes(`-${bb}`))),
        searchQuery: (null === (Mb = bb.get(fb)) || void 0 === Mb ? void 0 : Mb.slice(0, Ab.M)) || null,
        pageNumber: (0, Tb.e)(bb.get(Tb.b)),
        banned: "only" === Bb ? "with" : "include" === Bb ? null : "without"
      }
    }

    function Hb(bb, ab) {
      var Ub;
      const Ab = hb(ab);
      (0, Tb.f)(bb, zb, "explore" === ab.section ? null : ab.section), (0, Tb.f)(bb, xb, ab.sort === pb ? null : ab.sort), (0, Tb.f)(bb, ib, Ab === Nb ? null : Ab), (0, Tb.f)(bb, fb, ab.searchQuery), (0, Tb.f)(bb, mb, null !== (Ub = Zb(ab.banned)) && void 0 !== Ub ? Ub : null), (0, Tb.h)(bb, ab.pageNumber)
    }

    function Ib(bb) {
      const ab = new URLSearchParams;
      return Hb(ab, {
        section: "explore",
        sort: pb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Eb}?${ab.toString()}`
    }

    function db(bb) {
      return hb(bb) === Nb
    }

    function Fb(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || hb(bb) !== Nb
    }

    function hb(bb) {
      return jb.flatMap((ab => {
        const Ub = kb(bb, ab);
        return "with" === Ub ? [ab] : "without" === Ub ? [`-${ab}`] : []
      })).join(",")
    }
    const Gb = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Qb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function qb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function ub(bb, ab, Ub, Mb) {
      const Tb = [];
      bb.isBanned && Tb.push({
        tone: "warning",
        text: Mb("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Eb
      } = bb;
      if (null === bb.brokenError || Eb && !Eb.error || Tb.push({
          tone: "warning",
          text: Mb("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Eb && void 0 !== Eb && Eb.error) Tb.push({
        tone: "warning",
        text: Mb(ab ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Ab.l)(Eb.error) ? null : Eb.error
      });
      else if (Eb) {
        const bb = null === Eb.renderNotBefore ? 0 : Eb.renderNotBefore - Ub,
          Ab = String(Math.ceil(bb / 6e4)),
          Yb = Mb(ab ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Ab
          });
        Tb.push({
          tone: "info",
          text: Yb,
          detail: null
        })
      }
      return bb.listed || Tb.push({
        tone: "info",
        text: Mb("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Tb
    }

    function rb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function Kb(bb, ab, Ub) {
      return bb instanceof Mb.c && bb.errorMessageForUser ? bb.errorMessageForUser : ab(Ub)
    }
  },
  6167: (bb, ab, Ub) => {
    Ub.d(ab, {
      C: () => Yb,
      E: () => Eb,
      G: () => Ab,
      I: () => Pb,
      M: () => vb,
      P: () => Db,
      R: () => Lb,
      T: () => eb,
      e: () => Xb,
      f: () => Rb,
      j: () => jb,
      l: () => Zb,
      m: () => xb,
      o: () => Bb,
      s: () => Mb,
      w: () => zb,
      z: () => Tb
    });
    const Ab = ["forest", "desert", "water", "night", "cave"];
    const Mb = {
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
      Tb = ["popular", "updated", "newest"],
      Eb = 3,
      Yb = 32,
      Bb = 300;

    function eb(bb, ab) {
      return bb.slice(0, ab).replace(/[\uD800-\uDBFF]$/, "")
    }
    const vb = 64,
      Lb = 512,
      Pb = 18e5;
    const Xb = "Bloxdhub",
      jb = "https://bloxdhub.com/shaders";

    function Rb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const kb = "Screenshot generation failed.",
      yb = "Its screenshots couldn't be generated:";

    function Zb(bb) {
      var ab;
      return bb === kb || null !== (ab = null === bb || void 0 === bb ? void 0 : bb.startsWith(yb)) && void 0 !== ab && ab
    }

    function Db(bb, ab) {
      return `shaderPacks/${bb}/${ab}.json`
    }

    function zb(bb, ab, Ub, Ab) {
      return null === ab.renderId ? xb(bb, ab.baselineVersion, Ub, Ab) : `${bb}/${function(bb,ab,Ub,Ab){return`shaderPacks/${bb}/${ab}/${Ub}-${Ab}.webp`}(ab.packId,ab.renderId,Ub,Ab)}`
    }

    function xb(bb, ab, Ub, Ab) {
      return `${bb}/${function(bb,ab,Ub){return`shaderPacks/baseline/${bb}/${ab}-${Ub}.webp`}(ab,Ub,Ab)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);