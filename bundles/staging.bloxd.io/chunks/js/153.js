export const id = 153;
export const ids = [153];
export const modules = {
  42738: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      ShaderPackCategory: () => Zb
    });
    var eb = Mb(64),
      Hb = Mb(1696),
      pb = Mb(1616),
      Vb = Mb(1686),
      gb = Mb(1259),
      lb = Mb(110),
      Lb = Mb(26),
      Ib = Mb(1821),
      Ob = Mb(7798),
      Ub = Mb(361),
      tb = Mb(7840),
      Cb = Mb(7833),
      Eb = Mb(7848),
      Fb = Mb(7754),
      Bb = Mb(6050),
      sb = Mb(6098),
      mb = Mb(7795),
      hb = Mb(4845);

    function zb(bb, wb) {
      const Mb = (0, tb.storedPackOutcome)(bb, wb);
      return "none" !== Mb.kind || "noCompiler" === Mb.reason
    }
    var Xb = Mb(1159),
      xb = Mb.n(Xb),
      jb = Mb(6105),
      Kb = Mb(1475),
      rb = Mb(7787),
      Rb = Mb(1364);
    const Db = {
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

    function cb(bb, wb) {
      return "failedRecheck" === bb && wb.listing ? "shaderPack:statusFailedRecheckListed" : Db[bb]
    }

    function Yb(bb) {
      let {
        stored: wb,
        checking: Mb,
        webGpuUsable: eb,
        changePending: Hb,
        compiler: pb,
        t: Vb
      } = bb;
      const gb = function(bb, wb, Mb, eb, Hb) {
          const pb = (0, tb.storedPackOutcome)(bb, Hb);
          return "none" === pb.kind ? "noCompiler" === pb.reason ? wb ? "checking" : "noCompiler" : "otherApiVersion" === pb.reason ? "wrongApiVersion" : "failed" : (0, hb.c)() ? "harnessBuild" : "blocked" === pb.kind ? (0, tb.shaderPackNeedsCheck)(bb, Hb) ? wb ? "checking" : !1 === Mb ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === Mb ? "offNoWebGpu" : eb ? "readyAfterReload" : "ready"
        }(wb, Mb, eb, Hb, pb),
        lb = "failed" === gb || "failedRecheck" === gb,
        Lb = lb || "wrongApiVersion" === gb || "noCompiler" === gb,
        Ib = "ready" === gb || "readyAfterReload" === gb ? wb.validation.offInStrict : [];
      return (0, Rb.jsxs)(Rb.Fragment, {
        children: [(0, Rb.jsxs)("div", {
          className: xb()("ShaderPackStatus", {
            Ready: "ready" === gb,
            Failed: Lb
          }),
          children: ["ready" === gb && (0, Rb.jsx)(Kb.b, {
            name: "circle-check"
          }), Lb && (0, Rb.jsx)(Kb.b, {
            name: "triangle-exclamation"
          }), "harnessBuild" === gb ? (0, hb.b)() : Vb(cb(gb, wb), {
            packVersion: String(wb.manifest.apiVersion),
            version: String(jb.b)
          })]
        }), lb && (0, Rb.jsx)(rb.e, {
          diagnostics: wb.validation.errors,
          more: wb.validation.moreErrors,
          t: Vb
        }), Ib.length > 0 && (0, Rb.jsxs)(Rb.Fragment, {
          children: [(0, Rb.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Rb.jsx)(Kb.b, {
              name: "triangle-exclamation"
            }), Vb("shaderPack:offInStrict")]
          }), (0, Rb.jsx)(rb.e, {
            diagnostics: Ib,
            t: Vb
          })]
        })]
      })
    }

    function Zb(bb) {
      let {
        setApplySettingsCallback: wb
      } = bb;
      const {
        t: Mb
      } = (0, gb.C)(), [Hb, Vb] = (0, eb.useState)(null), [Lb, Ib] = (0, eb.useState)(null), [hb, Xb] = (0, eb.useState)(null), [xb] = (0, eb.useState)(Ub.j), [jb, Kb] = (0, eb.useState)(!0), [rb, Db] = (0, eb.useState)(!1), {
        loading: cb,
        error: Zb,
        setError: Ab,
        onFiles: Wb
      } = (0, mb.f)((async bb => {
        const wb = await (0, Ob.loadPageShaderPackCompiler)();
        if (!wb) return void Ab(Mb("shaderPack:compilerUnavailable"));
        Ib(wb);
        const eb = (0, tb.toStoredShaderPack)(bb, await (0, Cb.d)(wb, bb.files));
        await (0, tb.saveShaderPack)(eb, wb) ? (Vb(eb), Jb(Hb, eb, wb)) : Ab(Mb("shaderPack:saveFailed"))
      }));

      function Jb(bb, Mb, eb) {
        (function(bb, wb, Mb, eb) {
          return Mb || zb(bb, eb) || zb(wb, eb)
        })(bb, Mb, (0, tb.isShaderPackChangePending)(), eb) && ((0, tb.markShaderPackChangePending)(), wb((() => Bb.l)))
      }
      return (0, eb.useEffect)((() => {
        let bb = !1;
        return async function() {
          const wb = (0, lb.hasUsableWebGpuAdapter)(),
            Mb = await (0, Eb.g)();
          if (bb) return;
          Vb(Mb), Db(!0), Kb(!1);
          const eb = null !== Mb ? (0, Ob.loadPageShaderPackCompiler)() : null,
            Hb = await wb;
          if (bb) return;
          Xb(Hb);
          const pb = await eb;
          if (!bb && (Ib(pb), null !== Mb && Hb && null !== pb && (0, tb.shaderPackNeedsCheck)(Mb, pb))) {
            const wb = await (0, Cb.c)(Mb, pb);
            bb || Vb((bb => bb === Mb ? wb : bb))
          }
        }().catch((wb => {
          console.error("Failed to load the stored shader pack", wb), bb || Ab(Mb("shaderPack:unexpectedError"))
        })).finally((() => {
          bb || (Kb(!1), Db(!1))
        })), () => {
          bb = !0
        }
      }), []), (0, Rb.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Rb.jsx)("div", {
          className: "ShaderPackIntro",
          children: Mb("shaderPack:intro")
        }), (0, Rb.jsx)(fb, {
          to: Fb.N,
          className: "ShaderPackBrowseLink",
          children: (0, Rb.jsx)(pb.p, {
            className: "ShaderPackBrowseButton",
            children: Mb("shaderPackListing:browse")
          })
        }), !1 === hb && (0, Rb.jsx)("div", {
          className: "SettingsBoxWarning",
          children: Mb(xb ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Zb && (0, Rb.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [Mb("general:error"), ": ", Zb]
        }), Hb && (0, Rb.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Rb.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Rb.jsxs)("div", {
              children: [(0, Rb.jsx)("div", {
                className: "ShaderPackName",
                children: Hb.manifest.name
              }), Hb.manifest.author && (0, Rb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, sb.i)(Mb, "shaderPack:byAuthor", {
                  author: Hb.manifest.author
                })
              }), Hb.manifest.description && (0, Rb.jsx)("div", {
                className: "ShaderPackDescription",
                children: Hb.manifest.description
              }), Hb.listing && (0, Rb.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Rb.jsx)(fb, {
                  to: (0, Fb.T)(Hb.listing.packId),
                  className: "ShaderPackListingLink",
                  children: Mb("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Rb.jsx)(pb.S, {
              disabled: jb || cb,
              onClick: async function() {
                Kb(!0), Ab(null), await (0, tb.removeShaderPack)(), Vb(null), Kb(!1), Jb(Hb, null, Lb)
              },
              children: Mb("shaderPack:removePack")
            })]
          }), (0, Rb.jsx)(Yb, {
            stored: Hb,
            checking: rb,
            webGpuUsable: hb,
            changePending: (0, tb.isShaderPackChangePending)(),
            compiler: Lb,
            t: Mb
          })]
        }), (0, Rb.jsx)(mb.c, {
          busy: jb || cb || rb,
          disabled: jb || cb || rb || !0 !== hb,
          onFiles: Wb
        })]
      })
    }

    function fb(bb) {
      let {
        to: wb,
        className: Mb,
        children: eb
      } = bb;
      const {
        gameState: pb
      } = (0, Lb.o)(["gameState"]), {
        pathname: gb,
        search: lb
      } = (0, Hb.v)(), Ob = "landingPage" !== pb && "studio" !== pb;
      return (0, Rb.jsx)(Vb.LinkPreserveSearch, {
        to: wb,
        className: Mb,
        target: Ob ? "_blank" : void 0,
        onClick: () => {
          Ob || ((0, Fb.D)(`${gb}${lb}`), (0, Ib.g)())
        },
        children: eb
      })
    }
  },
  7754: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => Rb,
      D: () => Ib,
      G: () => cb,
      H: () => Eb,
      I: () => Nb,
      L: () => Jb,
      N: () => Vb,
      Q: () => Sb,
      T: () => lb,
      W: () => gb,
      _: () => Ab,
      b: () => sb,
      cb: () => Wb,
      d: () => Kb,
      eb: () => mb,
      fb: () => Db,
      h: () => Fb,
      i: () => Ub,
      j: () => Ob,
      l: () => Yb,
      m: () => tb,
      q: () => Zb,
      t: () => vb,
      w: () => Cb,
      y: () => Bb
    });
    var eb = Mb(7760),
      Hb = Mb(192),
      pb = Mb(5411);
    const Vb = "/shader-packs",
      gb = `${Vb}/publish`;

    function lb(bb) {
      return `${Vb}/${encodeURIComponent(bb)}`
    }
    let Lb = null;

    function Ib(bb) {
      Lb = bb
    }

    function Ob() {
      return Lb
    }

    function Ub() {
      Lb = null
    }

    function tb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const Cb = ["terrain", "water", "models", "sunShadows", "strict"],
      Eb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Fb(bb, wb) {
      return bb.withFeatures.includes(wb) ? "with" : bb.withoutFeatures.includes(wb) ? "without" : null
    }

    function Bb(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function sb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function mb(bb, wb) {
      const Mb = Fb(bb, wb),
        eb = bb => bb.filter((bb => bb !== wb));
      return {
        withFeatures: null === Mb ? [...bb.withFeatures, wb] : eb(bb.withFeatures),
        withoutFeatures: "with" === Mb ? [...bb.withoutFeatures, wb] : eb(bb.withoutFeatures)
      }
    }
    const hb = "section",
      zb = "sort",
      Xb = "filters",
      xb = "q",
      jb = "banned",
      Kb = "popular",
      rb = "strict";

    function Rb(bb) {
      var wb, Mb, Hb;
      const Vb = bb.get(hb),
        gb = (null !== (wb = bb.get(Xb)) && void 0 !== wb ? wb : rb).split(","),
        lb = bb.get(jb);
      return {
        section: "favourites" === Vb || "mine" === Vb ? Vb : "explore",
        sort: null !== (Mb = eb.C.find((wb => wb === bb.get(zb)))) && void 0 !== Mb ? Mb : Kb,
        withFeatures: Cb.filter((bb => gb.includes(bb) && !gb.includes(`-${bb}`))),
        withoutFeatures: Cb.filter((bb => gb.includes(`-${bb}`))),
        searchQuery: (null === (Hb = bb.get(xb)) || void 0 === Hb ? void 0 : Hb.slice(0, eb.M)) || null,
        pageNumber: (0, pb.f)(bb.get(pb.b)),
        banned: "only" === lb ? "with" : "include" === lb ? null : "without"
      }
    }

    function Db(bb, wb) {
      var Mb;
      const eb = fb(wb);
      (0, pb.g)(bb, hb, "explore" === wb.section ? null : wb.section), (0, pb.g)(bb, zb, wb.sort === Kb ? null : wb.sort), (0, pb.g)(bb, Xb, eb === rb ? null : eb), (0, pb.g)(bb, xb, wb.searchQuery), (0, pb.g)(bb, jb, null !== (Mb = sb(wb.banned)) && void 0 !== Mb ? Mb : null), (0, pb.i)(bb, wb.pageNumber)
    }

    function cb(bb) {
      const wb = new URLSearchParams;
      return Db(wb, {
        section: "explore",
        sort: Kb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Vb}?${wb.toString()}`
    }

    function Yb(bb) {
      return fb(bb) === rb
    }

    function Zb(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || fb(bb) !== rb
    }

    function fb(bb) {
      return Cb.flatMap((wb => {
        const Mb = Fb(bb, wb);
        return "with" === Mb ? [wb] : "without" === Mb ? [`-${wb}`] : []
      })).join(",")
    }
    const Ab = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Wb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Jb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function Sb(bb, wb, Mb, Hb) {
      const pb = [];
      bb.isBanned && pb.push({
        tone: "warning",
        text: Hb("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Vb
      } = bb;
      if (null === bb.brokenError || Vb && !Vb.error || pb.push({
          tone: "warning",
          text: Hb("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Vb && void 0 !== Vb && Vb.error) pb.push({
        tone: "warning",
        text: Hb(wb ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, eb.q)(Vb.error) ? null : Vb.error
      });
      else if (Vb) {
        const bb = null === Vb.renderNotBefore ? 0 : Vb.renderNotBefore - Mb,
          eb = String(Math.ceil(bb / 6e4)),
          gb = Hb(wb ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: eb
          });
        pb.push({
          tone: "info",
          text: gb,
          detail: null
        })
      }
      return bb.listed || pb.push({
        tone: "info",
        text: Hb("shaderPackListing:ownerUnlisted"),
        detail: null
      }), pb
    }

    function Nb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function vb(bb, wb, Mb) {
      return bb instanceof Hb.b && bb.errorMessageForUser ? bb.errorMessageForUser : wb(Mb)
    }
  },
  7760: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => zb,
      C: () => pb,
      G: () => gb,
      H: () => Vb,
      I: () => eb,
      J: () => Ub,
      M: () => Ib,
      O: () => hb,
      S: () => Ob,
      T: () => Lb,
      e: () => Cb,
      i: () => Fb,
      j: () => Eb,
      m: () => tb,
      q: () => mb,
      u: () => Xb,
      y: () => lb,
      z: () => Hb
    });
    const eb = ["forest", "desert", "water", "night", "cave"];
    const Hb = {
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
      pb = ["popular", "updated", "newest"],
      Vb = 3,
      gb = 32,
      lb = 300;

    function Lb(bb, wb) {
      return bb.slice(0, wb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Ib = 64,
      Ob = 512,
      Ub = 18e5;

    function tb(bb) {
      const wb = bb,
        Mb = null === wb || void 0 === wb ? void 0 : wb.files;
      return "number" === typeof(null === wb || void 0 === wb ? void 0 : wb.apiVersion) && "string" === typeof wb.name && (null === wb.author || "string" === typeof wb.author) && (void 0 === wb.keepCircleShadows || "boolean" === typeof wb.keepCircleShadows) && "object" === typeof Mb && null !== Mb && Object.values(Mb).every((bb => "string" === typeof bb))
    }
    const Cb = "Bloxdhub",
      Eb = "https://bloxdhub.com/shaders";

    function Fb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const Bb = "Screenshot generation failed.",
      sb = "Its screenshots couldn't be generated:";

    function mb(bb) {
      var wb;
      return bb === Bb || null !== (wb = null === bb || void 0 === bb ? void 0 : bb.startsWith(sb)) && void 0 !== wb && wb
    }

    function hb(bb, wb) {
      return `shaderPacks/${bb}/${wb}.json`
    }

    function zb(bb, wb, Mb, eb) {
      return null === wb.renderId ? Xb(bb, wb.baselineVersion, Mb, eb) : `${bb}/${function(bb,wb,Mb,eb){return`shaderPacks/${bb}/${wb}/${Mb}-${eb}.webp`}(wb.packId,wb.renderId,Mb,eb)}`
    }

    function Xb(bb, wb, Mb, eb) {
      return `${bb}/${function(bb,wb,Mb){return`shaderPacks/baseline/${bb}/${wb}-${Mb}.webp`}(wb,Mb,eb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);