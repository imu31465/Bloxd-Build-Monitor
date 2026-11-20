export const id = 123;
export const ids = [123];
export const modules = {
  40813: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      ShaderPackCategory: () => fq
    });
    var Yq = gq(57),
      lq = gq(1512),
      Oq = gq(1422),
      mq = gq(1498),
      xq = gq(1183),
      Aq = gq(96),
      cq = gq(24),
      uq = gq(1622),
      Bq = gq(6496),
      Wq = gq(275),
      Nq = gq(6531),
      aq = gq(6526),
      Vq = gq(6535),
      dq = gq(6422),
      jq = gq(4828),
      Hq = gq(6473),
      oq = gq(6490),
      Pq = gq(3328);

    function Qq(qq, Eq) {
      const gq = (0, Nq.storedPackOutcome)(qq, Eq);
      return "none" !== gq.kind || "noCompiler" === gq.reason
    }
    var yq = gq(1018),
      tq = gq.n(yq),
      rq = gq(6482),
      vq = gq(1025),
      hq = gq(6467),
      nq = gq(1070);
    const bq = {
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

    function iq(qq, Eq) {
      return "failedRecheck" === qq && Eq.listing ? "shaderPack:statusFailedRecheckListed" : bq[qq]
    }

    function Zq(qq) {
      let {
        stored: Eq,
        checking: gq,
        webGpuUsable: Yq,
        changePending: lq,
        compiler: Oq,
        t: mq
      } = qq;
      const xq = function(qq, Eq, gq, Yq, lq) {
          const Oq = (0, Nq.storedPackOutcome)(qq, lq);
          return "none" === Oq.kind ? "noCompiler" === Oq.reason ? Eq ? "checking" : "noCompiler" : "otherApiVersion" === Oq.reason ? "wrongApiVersion" : "failed" : (0, Pq.c)() ? "harnessBuild" : "blocked" === Oq.kind ? (0, Nq.shaderPackNeedsCheck)(qq, lq) ? Eq ? "checking" : !1 === gq ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === gq ? "offNoWebGpu" : Yq ? "readyAfterReload" : "ready"
        }(Eq, gq, Yq, lq, Oq),
        Aq = "failed" === xq || "failedRecheck" === xq,
        cq = Aq || "wrongApiVersion" === xq || "noCompiler" === xq,
        uq = "ready" === xq || "readyAfterReload" === xq ? Eq.validation.offInStrict : [];
      return (0, nq.jsxs)(nq.Fragment, {
        children: [(0, nq.jsxs)("div", {
          className: tq()("ShaderPackStatus", {
            Ready: "ready" === xq,
            Failed: cq
          }),
          children: ["ready" === xq && (0, nq.jsx)(vq.d, {
            name: "circle-check"
          }), cq && (0, nq.jsx)(vq.d, {
            name: "triangle-exclamation"
          }), "harnessBuild" === xq ? (0, Pq.b)() : mq(iq(xq, Eq), {
            packVersion: String(Eq.manifest.apiVersion),
            version: String(rq.b)
          })]
        }), Aq && (0, nq.jsx)(hq.b, {
          diagnostics: Eq.validation.errors,
          more: Eq.validation.moreErrors,
          t: mq
        }), uq.length > 0 && (0, nq.jsxs)(nq.Fragment, {
          children: [(0, nq.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, nq.jsx)(vq.d, {
              name: "triangle-exclamation"
            }), mq("shaderPack:offInStrict")]
          }), (0, nq.jsx)(hq.b, {
            diagnostics: uq,
            t: mq
          })]
        })]
      })
    }

    function fq(qq) {
      let {
        setApplySettingsCallback: Eq
      } = qq;
      const {
        t: gq
      } = (0, xq.v)(), [lq, mq] = (0, Yq.useState)(null), [cq, uq] = (0, Yq.useState)(null), [Pq, yq] = (0, Yq.useState)(null), [tq] = (0, Yq.useState)(Wq.f), [rq, vq] = (0, Yq.useState)(!0), [hq, bq] = (0, Yq.useState)(!1), {
        loading: iq,
        error: fq,
        setError: Tq,
        onFiles: zq
      } = (0, oq.c)((async qq => {
        const Eq = await (0, Bq.loadPageShaderPackCompiler)();
        if (!Eq) return void Tq(gq("shaderPack:compilerUnavailable"));
        uq(Eq);
        const Yq = (0, Nq.toStoredShaderPack)(qq, await (0, aq.e)(Eq, qq.files));
        await (0, Nq.saveShaderPack)(Yq, Eq) ? (mq(Yq), Sq(lq, Yq, Eq)) : Tq(gq("shaderPack:saveFailed"))
      }));

      function Sq(qq, gq, Yq) {
        (function(qq, Eq, gq, Yq) {
          return gq || Qq(qq, Yq) || Qq(Eq, Yq)
        })(qq, gq, (0, Nq.isShaderPackChangePending)(), Yq) && ((0, Nq.markShaderPackChangePending)(), Eq((() => jq.l)))
      }
      return (0, Yq.useEffect)((() => {
        let qq = !1;
        return async function() {
          const Eq = (0, Aq.hasUsableWebGpuAdapter)(),
            gq = await (0, Vq.d)();
          if (qq) return;
          mq(gq), bq(!0), vq(!1);
          const Yq = null !== gq ? (0, Bq.loadPageShaderPackCompiler)() : null,
            lq = await Eq;
          if (qq) return;
          yq(lq);
          const Oq = await Yq;
          if (!qq && (uq(Oq), null !== gq && lq && null !== Oq && (0, Nq.shaderPackNeedsCheck)(gq, Oq))) {
            const Eq = await (0, aq.b)(gq, Oq);
            qq || mq((qq => qq === gq ? Eq : qq))
          }
        }().catch((Eq => {
          console.error("Failed to load the stored shader pack", Eq), qq || Tq(gq("shaderPack:unexpectedError"))
        })).finally((() => {
          qq || (vq(!1), bq(!1))
        })), () => {
          qq = !0
        }
      }), []), (0, nq.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, nq.jsx)("div", {
          className: "ShaderPackIntro",
          children: gq("shaderPack:intro")
        }), (0, nq.jsx)(Mq, {
          to: dq.V,
          className: "ShaderPackBrowseLink",
          children: (0, nq.jsx)(Oq.p, {
            className: "ShaderPackBrowseButton",
            children: gq("shaderPackListing:browse")
          })
        }), !1 === Pq && (0, nq.jsx)("div", {
          className: "SettingsBoxWarning",
          children: gq(tq ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== fq && (0, nq.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [gq("general:error"), ": ", fq]
        }), lq && (0, nq.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, nq.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, nq.jsxs)("div", {
              children: [(0, nq.jsx)("div", {
                className: "ShaderPackName",
                children: lq.manifest.name
              }), lq.manifest.author && (0, nq.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Hq.k)(gq, "shaderPack:byAuthor", {
                  author: lq.manifest.author
                })
              }), lq.manifest.description && (0, nq.jsx)("div", {
                className: "ShaderPackDescription",
                children: lq.manifest.description
              }), lq.listing && (0, nq.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, nq.jsx)(Mq, {
                  to: (0, dq.$)(lq.listing.packId),
                  className: "ShaderPackListingLink",
                  children: gq("shaderPackListing:openPackPage")
                })
              })]
            }), (0, nq.jsx)(Oq.L, {
              disabled: rq || iq,
              onClick: async function() {
                vq(!0), Tq(null), await (0, Nq.removeShaderPack)(), mq(null), vq(!1), Sq(lq, null, cq)
              },
              children: gq("shaderPack:removePack")
            })]
          }), (0, nq.jsx)(Zq, {
            stored: lq,
            checking: hq,
            webGpuUsable: Pq,
            changePending: (0, Nq.isShaderPackChangePending)(),
            compiler: cq,
            t: gq
          })]
        }), (0, nq.jsx)(oq.b, {
          busy: rq || iq || hq,
          disabled: rq || iq || hq || !0 !== Pq,
          onFiles: zq
        })]
      })
    }

    function Mq(qq) {
      let {
        to: Eq,
        className: gq,
        children: Yq
      } = qq;
      const {
        gameState: Oq
      } = (0, cq.j)(["gameState"]), {
        pathname: xq,
        search: Aq
      } = (0, lq.q)(), Bq = "landingPage" !== Oq && "studio" !== Oq;
      return (0, nq.jsx)(mq.LinkPreserveSearch, {
        to: Eq,
        className: gq,
        target: Bq ? "_blank" : void 0,
        onClick: () => {
          Bq || ((0, dq.C)(`${xq}${Aq}`), (0, uq.f)())
        },
        children: Yq
      })
    }
  },
  6422: (qq, Eq, gq) => {
    gq.d(Eq, {
      $: () => Aq,
      B: () => nq,
      C: () => uq,
      G: () => iq,
      K: () => Vq,
      O: () => Gq,
      R: () => Sq,
      V: () => mq,
      X: () => pq,
      ab: () => xq,
      b: () => Hq,
      c: () => vq,
      db: () => Tq,
      f: () => dq,
      fb: () => zq,
      g: () => Wq,
      hb: () => oq,
      ib: () => bq,
      j: () => Bq,
      m: () => Zq,
      p: () => Nq,
      r: () => fq,
      s: () => Lq,
      w: () => aq,
      z: () => jq
    });
    var Yq = gq(6424),
      lq = gq(163),
      Oq = gq(4387);
    const mq = "/shader-packs",
      xq = `${mq}/publish`;

    function Aq(qq) {
      return `${mq}/${encodeURIComponent(qq)}`
    }
    let cq = null;

    function uq(qq) {
      cq = qq
    }

    function Bq() {
      return cq
    }

    function Wq() {
      cq = null
    }

    function Nq(qq) {
      return qq.playerHasRank("developer") || qq.playerHasRank("admin")
    }
    const aq = ["terrain", "water", "models", "sunShadows", "strict"],
      Vq = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function dq(qq, Eq) {
      return qq.withFeatures.includes(Eq) ? "with" : qq.withoutFeatures.includes(Eq) ? "without" : null
    }

    function jq(qq) {
      return null === qq ? "with" : "with" === qq ? "without" : null
    }

    function Hq(qq) {
      return "with" === qq ? "only" : null === qq ? "include" : void 0
    }

    function oq(qq, Eq) {
      const gq = dq(qq, Eq),
        Yq = qq => qq.filter((qq => qq !== Eq));
      return {
        withFeatures: null === gq ? [...qq.withFeatures, Eq] : Yq(qq.withFeatures),
        withoutFeatures: "with" === gq ? [...qq.withoutFeatures, Eq] : Yq(qq.withoutFeatures)
      }
    }
    const Pq = "section",
      Qq = "sort",
      yq = "filters",
      tq = "q",
      rq = "banned",
      vq = "popular",
      hq = "strict";

    function nq(qq) {
      var Eq, gq, lq;
      const mq = qq.get(Pq),
        xq = (null !== (Eq = qq.get(yq)) && void 0 !== Eq ? Eq : hq).split(","),
        Aq = qq.get(rq);
      return {
        section: "favourites" === mq || "mine" === mq ? mq : "explore",
        sort: null !== (gq = Yq.v.find((Eq => Eq === qq.get(Qq)))) && void 0 !== gq ? gq : vq,
        withFeatures: aq.filter((qq => xq.includes(qq) && !xq.includes(`-${qq}`))),
        withoutFeatures: aq.filter((qq => xq.includes(`-${qq}`))),
        searchQuery: (null === (lq = qq.get(tq)) || void 0 === lq ? void 0 : lq.slice(0, Yq.I)) || null,
        pageNumber: (0, Oq.e)(qq.get(Oq.d)),
        banned: "only" === Aq ? "with" : "include" === Aq ? null : "without"
      }
    }

    function bq(qq, Eq) {
      var gq;
      const Yq = Mq(Eq);
      (0, Oq.f)(qq, Pq, "explore" === Eq.section ? null : Eq.section), (0, Oq.f)(qq, Qq, Eq.sort === vq ? null : Eq.sort), (0, Oq.f)(qq, yq, Yq === hq ? null : Yq), (0, Oq.f)(qq, tq, Eq.searchQuery), (0, Oq.f)(qq, rq, null !== (gq = Hq(Eq.banned)) && void 0 !== gq ? gq : null), (0, Oq.g)(qq, Eq.pageNumber)
    }

    function iq(qq) {
      const Eq = new URLSearchParams;
      return bq(Eq, {
        section: "explore",
        sort: vq,
        withFeatures: "strict" === qq ? [qq] : [qq, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${mq}?${Eq.toString()}`
    }

    function Zq(qq) {
      return Mq(qq) === hq
    }

    function fq(qq) {
      return null !== qq.searchQuery || "with" === qq.banned || Mq(qq) !== hq
    }

    function Mq(qq) {
      return aq.flatMap((Eq => {
        const gq = dq(qq, Eq);
        return "with" === gq ? [Eq] : "without" === gq ? [`-${Eq}`] : []
      })).join(",")
    }
    const Tq = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      zq = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Sq(qq) {
      return Math.round(100 * Math.max(0, 1 - 1 / qq))
    }

    function pq(qq, Eq, gq, lq) {
      const Oq = [];
      qq.isBanned && Oq.push({
        tone: "warning",
        text: lq("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: mq
      } = qq;
      if (null === qq.brokenError || mq && !mq.error || Oq.push({
          tone: "warning",
          text: lq("shaderPackListing:ownerBroken"),
          detail: qq.brokenError
        }), null !== mq && void 0 !== mq && mq.error) Oq.push({
        tone: "warning",
        text: lq(Eq ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Yq.k)(mq.error) ? null : mq.error
      });
      else if (mq) {
        const qq = null === mq.renderNotBefore ? 0 : mq.renderNotBefore - gq,
          Yq = String(Math.ceil(qq / 6e4)),
          xq = lq(Eq ? qq > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : qq > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Yq
          });
        Oq.push({
          tone: "info",
          text: xq,
          detail: null
        })
      }
      return qq.listed || Oq.push({
        tone: "info",
        text: lq("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Oq
    }

    function Gq(qq) {
      return Math.max(1, Math.round(qq / 1024))
    }

    function Lq(qq, Eq, gq) {
      return qq instanceof lq.b && qq.errorMessageForUser ? qq.errorMessageForUser : Eq(gq)
    }
  },
  6424: (qq, Eq, gq) => {
    gq.d(Eq, {
      D: () => mq,
      E: () => Yq,
      G: () => Wq,
      I: () => uq,
      K: () => oq,
      N: () => Bq,
      R: () => cq,
      e: () => Nq,
      g: () => Vq,
      i: () => aq,
      k: () => Hq,
      m: () => Qq,
      n: () => Aq,
      p: () => lq,
      r: () => Pq,
      v: () => Oq,
      z: () => xq
    });
    const Yq = ["forest", "desert", "water", "night", "cave"];
    const lq = {
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
      Oq = ["popular", "updated", "newest"],
      mq = 3,
      xq = 32,
      Aq = 300;

    function cq(qq, Eq) {
      return qq.slice(0, Eq).replace(/[\uD800-\uDBFF]$/, "")
    }
    const uq = 64,
      Bq = 512,
      Wq = 18e5;
    const Nq = "Bloxdhub",
      aq = "https://bloxdhub.com/shaders";

    function Vq(qq) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(qq)}`
    }
    const dq = "Screenshot generation failed.",
      jq = "Its screenshots couldn't be generated:";

    function Hq(qq) {
      var Eq;
      return qq === dq || null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.startsWith(jq)) && void 0 !== Eq && Eq
    }

    function oq(qq, Eq) {
      return `shaderPacks/${qq}/${Eq}.json`
    }

    function Pq(qq, Eq, gq, Yq) {
      return null === Eq.renderId ? Qq(qq, Eq.baselineVersion, gq, Yq) : `${qq}/${function(qq,Eq,gq,Yq){return`shaderPacks/${qq}/${Eq}/${gq}-${Yq}.webp`}(Eq.packId,Eq.renderId,gq,Yq)}`
    }

    function Qq(qq, Eq, gq, Yq) {
      return `${qq}/${function(qq,Eq,gq){return`shaderPacks/baseline/${qq}/${Eq}-${gq}.webp`}(Eq,gq,Yq)}`
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);