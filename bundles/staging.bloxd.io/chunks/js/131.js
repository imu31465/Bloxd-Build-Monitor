export const id = 131;
export const ids = [131];
export const modules = {
  41287: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      ShaderPackCategory: () => lp
    });
    var Op = cp(62),
      op = cp(1543),
      Ip = cp(1480),
      Sp = cp(1538),
      xp = cp(1201),
      Lp = cp(104),
      Yp = cp(25),
      Dp = cp(1650),
      Ap = cp(6758),
      Pp = cp(314),
      Wp = cp(6798),
      yp = cp(6792),
      Up = cp(6804),
      wp = cp(6698),
      vp = cp(5113),
      tp = cp(5156),
      Hp = cp(6752),
      dp = cp(3572);

    function ep(pp, ip) {
      const cp = (0, Wp.storedPackOutcome)(pp, ip);
      return "none" !== cp.kind || "noCompiler" === cp.reason
    }
    var jp = cp(1049),
      kp = cp.n(jp),
      mp = cp(5159),
      Rp = cp(1060),
      qp = cp(6750),
      Mp = cp(1112);
    const Cp = {
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

    function Ep(pp, ip) {
      return "failedRecheck" === pp && ip.listing ? "shaderPack:statusFailedRecheckListed" : Cp[pp]
    }

    function Xp(pp) {
      let {
        stored: ip,
        checking: cp,
        webGpuUsable: Op,
        changePending: op,
        compiler: Ip,
        t: Sp
      } = pp;
      const xp = function(pp, ip, cp, Op, op) {
          const Ip = (0, Wp.storedPackOutcome)(pp, op);
          return "none" === Ip.kind ? "noCompiler" === Ip.reason ? ip ? "checking" : "noCompiler" : "otherApiVersion" === Ip.reason ? "wrongApiVersion" : "failed" : (0, dp.e)() ? "harnessBuild" : "blocked" === Ip.kind ? (0, Wp.shaderPackNeedsCheck)(pp, op) ? ip ? "checking" : !1 === cp ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === cp ? "offNoWebGpu" : Op ? "readyAfterReload" : "ready"
        }(ip, cp, Op, op, Ip),
        Lp = "failed" === xp || "failedRecheck" === xp,
        Yp = Lp || "wrongApiVersion" === xp || "noCompiler" === xp,
        Dp = "ready" === xp || "readyAfterReload" === xp ? ip.validation.offInStrict : [];
      return (0, Mp.jsxs)(Mp.Fragment, {
        children: [(0, Mp.jsxs)("div", {
          className: kp()("ShaderPackStatus", {
            Ready: "ready" === xp,
            Failed: Yp
          }),
          children: ["ready" === xp && (0, Mp.jsx)(Rp.d, {
            name: "circle-check"
          }), Yp && (0, Mp.jsx)(Rp.d, {
            name: "triangle-exclamation"
          }), "harnessBuild" === xp ? (0, dp.c)() : Sp(Ep(xp, ip), {
            packVersion: String(ip.manifest.apiVersion),
            version: String(mp.e)
          })]
        }), Lp && (0, Mp.jsx)(qp.b, {
          diagnostics: ip.validation.errors,
          more: ip.validation.moreErrors,
          t: Sp
        }), Dp.length > 0 && (0, Mp.jsxs)(Mp.Fragment, {
          children: [(0, Mp.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Mp.jsx)(Rp.d, {
              name: "triangle-exclamation"
            }), Sp("shaderPack:offInStrict")]
          }), (0, Mp.jsx)(qp.b, {
            diagnostics: Dp,
            t: Sp
          })]
        })]
      })
    }

    function lp(pp) {
      let {
        setApplySettingsCallback: ip
      } = pp;
      const {
        t: cp
      } = (0, xp.H)(), [op, Sp] = (0, Op.useState)(null), [Yp, Dp] = (0, Op.useState)(null), [dp, jp] = (0, Op.useState)(null), [kp] = (0, Op.useState)(Pp.f), [mp, Rp] = (0, Op.useState)(!0), [qp, Cp] = (0, Op.useState)(!1), {
        loading: Ep,
        error: lp,
        setError: Jp,
        onFiles: Bp
      } = (0, Hp.f)((async pp => {
        const ip = await (0, Ap.loadPageShaderPackCompiler)();
        if (!ip) return void Jp(cp("shaderPack:compilerUnavailable"));
        Dp(ip);
        const Op = (0, Wp.toStoredShaderPack)(pp, await (0, yp.h)(ip, pp.files));
        await (0, Wp.saveShaderPack)(Op, ip) ? (Sp(Op), Np(op, Op, ip)) : Jp(cp("shaderPack:saveFailed"))
      }));

      function Np(pp, cp, Op) {
        (function(pp, ip, cp, Op) {
          return cp || ep(pp, Op) || ep(ip, Op)
        })(pp, cp, (0, Wp.isShaderPackChangePending)(), Op) && ((0, Wp.markShaderPackChangePending)(), ip((() => vp.l)))
      }
      return (0, Op.useEffect)((() => {
        let pp = !1;
        return async function() {
          const ip = (0, Lp.hasUsableWebGpuAdapter)(),
            cp = await (0, Up.f)();
          if (pp) return;
          Sp(cp), Cp(!0), Rp(!1);
          const Op = null !== cp ? (0, Ap.loadPageShaderPackCompiler)() : null,
            op = await ip;
          if (pp) return;
          jp(op);
          const Ip = await Op;
          if (!pp && (Dp(Ip), null !== cp && op && null !== Ip && (0, Wp.shaderPackNeedsCheck)(cp, Ip))) {
            const ip = await (0, yp.e)(cp, Ip);
            pp || Sp((pp => pp === cp ? ip : pp))
          }
        }().catch((ip => {
          console.error("Failed to load the stored shader pack", ip), pp || Jp(cp("shaderPack:unexpectedError"))
        })).finally((() => {
          pp || (Rp(!1), Cp(!1))
        })), () => {
          pp = !0
        }
      }), []), (0, Mp.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Mp.jsx)("div", {
          className: "ShaderPackIntro",
          children: cp("shaderPack:intro")
        }), (0, Mp.jsx)(Qp, {
          to: wp.R,
          className: "ShaderPackBrowseLink",
          children: (0, Mp.jsx)(Ip.o, {
            className: "ShaderPackBrowseButton",
            children: cp("shaderPackListing:browse")
          })
        }), !1 === dp && (0, Mp.jsx)("div", {
          className: "SettingsBoxWarning",
          children: cp(kp ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== lp && (0, Mp.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [cp("general:error"), ": ", lp]
        }), op && (0, Mp.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Mp.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Mp.jsxs)("div", {
              children: [(0, Mp.jsx)("div", {
                className: "ShaderPackName",
                children: op.manifest.name
              }), op.manifest.author && (0, Mp.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, tp.f)(cp, "shaderPack:byAuthor", {
                  author: op.manifest.author
                })
              }), op.manifest.description && (0, Mp.jsx)("div", {
                className: "ShaderPackDescription",
                children: op.manifest.description
              }), op.listing && (0, Mp.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Mp.jsx)(Qp, {
                  to: (0, wp.V)(op.listing.packId),
                  className: "ShaderPackListingLink",
                  children: cp("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Mp.jsx)(Ip.N, {
              disabled: mp || Ep,
              onClick: async function() {
                Rp(!0), Jp(null), await (0, Wp.removeShaderPack)(), Sp(null), Rp(!1), Np(op, null, Yp)
              },
              children: cp("shaderPack:removePack")
            })]
          }), (0, Mp.jsx)(Xp, {
            stored: op,
            checking: qp,
            webGpuUsable: dp,
            changePending: (0, Wp.isShaderPackChangePending)(),
            compiler: Yp,
            t: cp
          })]
        }), (0, Mp.jsx)(Hp.b, {
          busy: mp || Ep || qp,
          disabled: mp || Ep || qp || !0 !== dp,
          onFiles: Bp
        })]
      })
    }

    function Qp(pp) {
      let {
        to: ip,
        className: cp,
        children: Op
      } = pp;
      const {
        gameState: Ip
      } = (0, Yp.o)(["gameState"]), {
        pathname: xp,
        search: Lp
      } = (0, op.r)(), Ap = "landingPage" !== Ip && "studio" !== Ip;
      return (0, Mp.jsx)(Sp.LinkPreserveSearch, {
        to: ip,
        className: cp,
        target: Ap ? "_blank" : void 0,
        onClick: () => {
          Ap || ((0, wp.E)(`${xp}${Lp}`), (0, Dp.e)())
        },
        children: Op
      })
    }
  },
  6698: (pp, ip, cp) => {
    cp.d(ip, {
      C: () => Mp,
      E: () => Dp,
      H: () => Ep,
      L: () => Up,
      O: () => fp,
      P: () => Np,
      R: () => Sp,
      S: () => Tp,
      V: () => Lp,
      X: () => xp,
      Z: () => Jp,
      ab: () => Bp,
      b: () => tp,
      bb: () => Hp,
      d: () => Rp,
      e: () => wp,
      eb: () => Cp,
      g: () => Pp,
      k: () => Ap,
      l: () => Xp,
      n: () => Wp,
      r: () => lp,
      s: () => bp,
      w: () => yp,
      z: () => vp
    });
    var Op = cp(6704),
      op = cp(156),
      Ip = cp(4653);
    const Sp = "/shader-packs",
      xp = `${Sp}/publish`;

    function Lp(pp) {
      return `${Sp}/${encodeURIComponent(pp)}`
    }
    let Yp = null;

    function Dp(pp) {
      Yp = pp
    }

    function Ap() {
      return Yp
    }

    function Pp() {
      Yp = null
    }

    function Wp(pp) {
      return pp.playerHasRank("developer") || pp.playerHasRank("admin")
    }
    const yp = ["terrain", "water", "models", "sunShadows", "strict"],
      Up = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function wp(pp, ip) {
      return pp.withFeatures.includes(ip) ? "with" : pp.withoutFeatures.includes(ip) ? "without" : null
    }

    function vp(pp) {
      return null === pp ? "with" : "with" === pp ? "without" : null
    }

    function tp(pp) {
      return "with" === pp ? "only" : null === pp ? "include" : void 0
    }

    function Hp(pp, ip) {
      const cp = wp(pp, ip),
        Op = pp => pp.filter((pp => pp !== ip));
      return {
        withFeatures: null === cp ? [...pp.withFeatures, ip] : Op(pp.withFeatures),
        withoutFeatures: "with" === cp ? [...pp.withoutFeatures, ip] : Op(pp.withoutFeatures)
      }
    }
    const dp = "section",
      ep = "sort",
      jp = "filters",
      kp = "q",
      mp = "banned",
      Rp = "popular",
      qp = "strict";

    function Mp(pp) {
      var ip, cp, op;
      const Sp = pp.get(dp),
        xp = (null !== (ip = pp.get(jp)) && void 0 !== ip ? ip : qp).split(","),
        Lp = pp.get(mp);
      return {
        section: "favourites" === Sp || "mine" === Sp ? Sp : "explore",
        sort: null !== (cp = Op.A.find((ip => ip === pp.get(ep)))) && void 0 !== cp ? cp : Rp,
        withFeatures: yp.filter((pp => xp.includes(pp) && !xp.includes(`-${pp}`))),
        withoutFeatures: yp.filter((pp => xp.includes(`-${pp}`))),
        searchQuery: (null === (op = pp.get(kp)) || void 0 === op ? void 0 : op.slice(0, Op.P)) || null,
        pageNumber: (0, Ip.e)(pp.get(Ip.c)),
        banned: "only" === Lp ? "with" : "include" === Lp ? null : "without"
      }
    }

    function Cp(pp, ip) {
      var cp;
      const Op = Qp(ip);
      (0, Ip.g)(pp, dp, "explore" === ip.section ? null : ip.section), (0, Ip.g)(pp, ep, ip.sort === Rp ? null : ip.sort), (0, Ip.g)(pp, jp, Op === qp ? null : Op), (0, Ip.g)(pp, kp, ip.searchQuery), (0, Ip.g)(pp, mp, null !== (cp = tp(ip.banned)) && void 0 !== cp ? cp : null), (0, Ip.k)(pp, ip.pageNumber)
    }

    function Ep(pp) {
      const ip = new URLSearchParams;
      return Cp(ip, {
        section: "explore",
        sort: Rp,
        withFeatures: "strict" === pp ? [pp] : [pp, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Sp}?${ip.toString()}`
    }

    function Xp(pp) {
      return Qp(pp) === qp
    }

    function lp(pp) {
      return null !== pp.searchQuery || "with" === pp.banned || Qp(pp) !== qp
    }

    function Qp(pp) {
      return yp.flatMap((ip => {
        const cp = wp(pp, ip);
        return "with" === cp ? [ip] : "without" === cp ? [`-${ip}`] : []
      })).join(",")
    }
    const Jp = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Bp = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Np(pp) {
      return Math.round(100 * Math.max(0, 1 - 1 / pp))
    }

    function Tp(pp, ip, cp, op) {
      const Ip = [];
      pp.isBanned && Ip.push({
        tone: "warning",
        text: op("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Sp
      } = pp;
      if (null === pp.brokenError || Sp && !Sp.error || Ip.push({
          tone: "warning",
          text: op("shaderPackListing:ownerBroken"),
          detail: pp.brokenError
        }), null !== Sp && void 0 !== Sp && Sp.error) Ip.push({
        tone: "warning",
        text: op(ip ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Op.n)(Sp.error) ? null : Sp.error
      });
      else if (Sp) {
        const pp = null === Sp.renderNotBefore ? 0 : Sp.renderNotBefore - cp,
          Op = String(Math.ceil(pp / 6e4)),
          xp = op(ip ? pp > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : pp > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Op
          });
        Ip.push({
          tone: "info",
          text: xp,
          detail: null
        })
      }
      return pp.listed || Ip.push({
        tone: "info",
        text: op("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Ip
    }

    function fp(pp) {
      return Math.max(1, Math.round(pp / 1024))
    }

    function bp(pp, ip, cp) {
      return pp instanceof op.e && pp.errorMessageForUser ? pp.errorMessageForUser : ip(cp)
    }
  },
  6704: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Ip,
      D: () => xp,
      G: () => Sp,
      J: () => Op,
      M: () => Pp,
      P: () => Dp,
      S: () => dp,
      V: () => Ap,
      W: () => Yp,
      d: () => yp,
      g: () => wp,
      j: () => Up,
      l: () => Wp,
      n: () => Hp,
      r: () => jp,
      t: () => Lp,
      u: () => op,
      x: () => ep
    });
    const Op = ["forest", "desert", "water", "night", "cave"];
    const op = {
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
      Ip = ["popular", "updated", "newest"],
      Sp = 3,
      xp = 32,
      Lp = 300;

    function Yp(pp, ip) {
      return pp.slice(0, ip).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Dp = 64,
      Ap = 512,
      Pp = 18e5;

    function Wp(pp) {
      const ip = pp,
        cp = null === ip || void 0 === ip ? void 0 : ip.files;
      return "number" === typeof(null === ip || void 0 === ip ? void 0 : ip.apiVersion) && "string" === typeof ip.name && (null === ip.author || "string" === typeof ip.author) && (void 0 === ip.keepCircleShadows || "boolean" === typeof ip.keepCircleShadows) && "object" === typeof cp && null !== cp && Object.values(cp).every((pp => "string" === typeof pp))
    }
    const yp = "Bloxdhub",
      Up = "https://bloxdhub.com/shaders";

    function wp(pp) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(pp)}`
    }
    const vp = "Screenshot generation failed.",
      tp = "Its screenshots couldn't be generated:";

    function Hp(pp) {
      var ip;
      return pp === vp || null !== (ip = null === pp || void 0 === pp ? void 0 : pp.startsWith(tp)) && void 0 !== ip && ip
    }

    function dp(pp, ip) {
      return `shaderPacks/${pp}/${ip}.json`
    }

    function ep(pp, ip, cp, Op) {
      return null === ip.renderId ? jp(pp, ip.baselineVersion, cp, Op) : `${pp}/${function(pp,ip,cp,Op){return`shaderPacks/${pp}/${ip}/${cp}-${Op}.webp`}(ip.packId,ip.renderId,cp,Op)}`
    }

    function jp(pp, ip, cp, Op) {
      return `${pp}/${function(pp,ip,cp){return`shaderPacks/baseline/${pp}/${ip}-${cp}.webp`}(ip,cp,Op)}`
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);