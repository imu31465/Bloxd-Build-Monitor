export const id = 129;
export const ids = [129];
export const modules = {
  41082: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      ShaderPackCategory: () => pk
    });
    var Xk = Ik(58),
      Tk = Ik(1485),
      ik = Ik(1406),
      yk = Ik(1475),
      lk = Ik(1179),
      ak = Ik(95),
      qk = Ik(25),
      Lk = Ik(1580),
      tk = Ik(6596),
      Zk = Ik(309),
      jk = Ik(6639),
      ek = Ik(6631),
      wk = Ik(6644),
      Hk = Ik(6541),
      Jk = Ik(4983),
      xk = Ik(5038),
      Pk = Ik(6591),
      Kk = Ik(3403);

    function Qk(kk, Fk) {
      const Ik = (0, jk.storedPackOutcome)(kk, Fk);
      return "none" !== Ik.kind || "noCompiler" === Ik.reason
    }
    var sk = Ik(1055),
      Vk = Ik.n(sk),
      zk = Ik(5047),
      Sk = Ik(1066),
      vk = Ik(6589),
      Ek = Ik(1096);
    const Ok = {
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

    function nk(kk, Fk) {
      return "failedRecheck" === kk && Fk.listing ? "shaderPack:statusFailedRecheckListed" : Ok[kk]
    }

    function Gk(kk) {
      let {
        stored: Fk,
        checking: Ik,
        webGpuUsable: Xk,
        changePending: Tk,
        compiler: ik,
        t: yk
      } = kk;
      const lk = function(kk, Fk, Ik, Xk, Tk) {
          const ik = (0, jk.storedPackOutcome)(kk, Tk);
          return "none" === ik.kind ? "noCompiler" === ik.reason ? Fk ? "checking" : "noCompiler" : "otherApiVersion" === ik.reason ? "wrongApiVersion" : "failed" : (0, Kk.g)() ? "harnessBuild" : "blocked" === ik.kind ? (0, jk.shaderPackNeedsCheck)(kk, Tk) ? Fk ? "checking" : !1 === Ik ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === Ik ? "offNoWebGpu" : Xk ? "readyAfterReload" : "ready"
        }(Fk, Ik, Xk, Tk, ik),
        ak = "failed" === lk || "failedRecheck" === lk,
        qk = ak || "wrongApiVersion" === lk || "noCompiler" === lk,
        Lk = "ready" === lk || "readyAfterReload" === lk ? Fk.validation.offInStrict : [];
      return (0, Ek.jsxs)(Ek.Fragment, {
        children: [(0, Ek.jsxs)("div", {
          className: Vk()("ShaderPackStatus", {
            Ready: "ready" === lk,
            Failed: qk
          }),
          children: ["ready" === lk && (0, Ek.jsx)(Sk.e, {
            name: "circle-check"
          }), qk && (0, Ek.jsx)(Sk.e, {
            name: "triangle-exclamation"
          }), "harnessBuild" === lk ? (0, Kk.d)() : yk(nk(lk, Fk), {
            packVersion: String(Fk.manifest.apiVersion),
            version: String(zk.b)
          })]
        }), ak && (0, Ek.jsx)(vk.c, {
          diagnostics: Fk.validation.errors,
          more: Fk.validation.moreErrors,
          t: yk
        }), Lk.length > 0 && (0, Ek.jsxs)(Ek.Fragment, {
          children: [(0, Ek.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Ek.jsx)(Sk.e, {
              name: "triangle-exclamation"
            }), yk("shaderPack:offInStrict")]
          }), (0, Ek.jsx)(vk.c, {
            diagnostics: Lk,
            t: yk
          })]
        })]
      })
    }

    function pk(kk) {
      let {
        setApplySettingsCallback: Fk
      } = kk;
      const {
        t: Ik
      } = (0, lk.y)(), [Tk, yk] = (0, Xk.useState)(null), [qk, Lk] = (0, Xk.useState)(null), [Kk, sk] = (0, Xk.useState)(null), [Vk] = (0, Xk.useState)(Zk.l), [zk, Sk] = (0, Xk.useState)(!0), [vk, Ok] = (0, Xk.useState)(!1), {
        loading: nk,
        error: pk,
        setError: bk,
        onFiles: Rk
      } = (0, Pk.h)((async kk => {
        const Fk = await (0, tk.loadPageShaderPackCompiler)();
        if (!Fk) return void bk(Ik("shaderPack:compilerUnavailable"));
        Lk(Fk);
        const Xk = (0, jk.toStoredShaderPack)(kk, await (0, ek.f)(Fk, kk.files));
        await (0, jk.saveShaderPack)(Xk, Fk) ? (yk(Xk), Uk(Tk, Xk, Fk)) : bk(Ik("shaderPack:saveFailed"))
      }));

      function Uk(kk, Ik, Xk) {
        (function(kk, Fk, Ik, Xk) {
          return Ik || Qk(kk, Xk) || Qk(Fk, Xk)
        })(kk, Ik, (0, jk.isShaderPackChangePending)(), Xk) && ((0, jk.markShaderPackChangePending)(), Fk((() => Jk.m)))
      }
      return (0, Xk.useEffect)((() => {
        let kk = !1;
        return async function() {
          const Fk = (0, ak.hasUsableWebGpuAdapter)(),
            Ik = await (0, wk.i)();
          if (kk) return;
          yk(Ik), Ok(!0), Sk(!1);
          const Xk = null !== Ik ? (0, tk.loadPageShaderPackCompiler)() : null,
            Tk = await Fk;
          if (kk) return;
          sk(Tk);
          const ik = await Xk;
          if (!kk && (Lk(ik), null !== Ik && Tk && null !== ik && (0, jk.shaderPackNeedsCheck)(Ik, ik))) {
            const Fk = await (0, ek.c)(Ik, ik);
            kk || yk((kk => kk === Ik ? Fk : kk))
          }
        }().catch((Fk => {
          console.error("Failed to load the stored shader pack", Fk), kk || bk(Ik("shaderPack:unexpectedError"))
        })).finally((() => {
          kk || (Sk(!1), Ok(!1))
        })), () => {
          kk = !0
        }
      }), []), (0, Ek.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Ek.jsx)("div", {
          className: "ShaderPackIntro",
          children: Ik("shaderPack:intro")
        }), (0, Ek.jsx)(uk, {
          to: Hk.X,
          className: "ShaderPackBrowseLink",
          children: (0, Ek.jsx)(ik.m, {
            className: "ShaderPackBrowseButton",
            children: Ik("shaderPackListing:browse")
          })
        }), !1 === Kk && (0, Ek.jsx)("div", {
          className: "SettingsBoxWarning",
          children: Ik(Vk ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== pk && (0, Ek.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [Ik("general:error"), ": ", pk]
        }), Tk && (0, Ek.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Ek.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Ek.jsxs)("div", {
              children: [(0, Ek.jsx)("div", {
                className: "ShaderPackName",
                children: Tk.manifest.name
              }), Tk.manifest.author && (0, Ek.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, xk.k)(Ik, "shaderPack:byAuthor", {
                  author: Tk.manifest.author
                })
              }), Tk.manifest.description && (0, Ek.jsx)("div", {
                className: "ShaderPackDescription",
                children: Tk.manifest.description
              }), Tk.listing && (0, Ek.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Ek.jsx)(uk, {
                  to: (0, Hk.ab)(Tk.listing.packId),
                  className: "ShaderPackListingLink",
                  children: Ik("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Ek.jsx)(ik.J, {
              disabled: zk || nk,
              onClick: async function() {
                Sk(!0), bk(null), await (0, jk.removeShaderPack)(), yk(null), Sk(!1), Uk(Tk, null, qk)
              },
              children: Ik("shaderPack:removePack")
            })]
          }), (0, Ek.jsx)(Gk, {
            stored: Tk,
            checking: vk,
            webGpuUsable: Kk,
            changePending: (0, jk.isShaderPackChangePending)(),
            compiler: qk,
            t: Ik
          })]
        }), (0, Ek.jsx)(Pk.e, {
          busy: zk || nk || vk,
          disabled: zk || nk || vk || !0 !== Kk,
          onFiles: Rk
        })]
      })
    }

    function uk(kk) {
      let {
        to: Fk,
        className: Ik,
        children: Xk
      } = kk;
      const {
        gameState: ik
      } = (0, qk.j)(["gameState"]), {
        pathname: lk,
        search: ak
      } = (0, Tk.q)(), tk = "landingPage" !== ik && "studio" !== ik;
      return (0, Ek.jsx)(yk.LinkPreserveSearch, {
        to: Fk,
        className: Ik,
        target: tk ? "_blank" : void 0,
        onClick: () => {
          tk || ((0, Hk.K)(`${lk}${ak}`), (0, Lk.g)())
        },
        children: Xk
      })
    }
  },
  6541: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => ck,
      E: () => ek,
      G: () => Jk,
      J: () => Ek,
      K: () => Lk,
      O: () => nk,
      R: () => wk,
      V: () => Nk,
      W: () => Uk,
      X: () => yk,
      Z: () => Ck,
      ab: () => ak,
      db: () => lk,
      e: () => xk,
      gb: () => bk,
      i: () => Sk,
      ib: () => Rk,
      k: () => Hk,
      kb: () => Pk,
      n: () => Zk,
      ob: () => Ok,
      p: () => tk,
      r: () => Gk,
      u: () => jk,
      y: () => pk
    });
    var Xk = Ik(6544),
      Tk = Ik(149),
      ik = Ik(4550);
    const yk = "/shader-packs",
      lk = `${yk}/publish`;

    function ak(kk) {
      return `${yk}/${encodeURIComponent(kk)}`
    }
    let qk = null;

    function Lk(kk) {
      qk = kk
    }

    function tk() {
      return qk
    }

    function Zk() {
      qk = null
    }

    function jk(kk) {
      return kk.playerHasRank("developer") || kk.playerHasRank("admin")
    }
    const ek = ["terrain", "water", "models", "sunShadows", "strict"],
      wk = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Hk(kk, Fk) {
      return kk.withFeatures.includes(Fk) ? "with" : kk.withoutFeatures.includes(Fk) ? "without" : null
    }

    function Jk(kk) {
      return null === kk ? "with" : "with" === kk ? "without" : null
    }

    function xk(kk) {
      return "with" === kk ? "only" : null === kk ? "include" : void 0
    }

    function Pk(kk, Fk) {
      const Ik = Hk(kk, Fk),
        Xk = kk => kk.filter((kk => kk !== Fk));
      return {
        withFeatures: null === Ik ? [...kk.withFeatures, Fk] : Xk(kk.withFeatures),
        withoutFeatures: "with" === Ik ? [...kk.withoutFeatures, Fk] : Xk(kk.withoutFeatures)
      }
    }
    const Kk = "section",
      Qk = "sort",
      sk = "filters",
      Vk = "q",
      zk = "banned",
      Sk = "popular",
      vk = "strict";

    function Ek(kk) {
      var Fk, Ik, Tk;
      const yk = kk.get(Kk),
        lk = (null !== (Fk = kk.get(sk)) && void 0 !== Fk ? Fk : vk).split(","),
        ak = kk.get(zk);
      return {
        section: "favourites" === yk || "mine" === yk ? yk : "explore",
        sort: null !== (Ik = Xk.z.find((Fk => Fk === kk.get(Qk)))) && void 0 !== Ik ? Ik : Sk,
        withFeatures: ek.filter((kk => lk.includes(kk) && !lk.includes(`-${kk}`))),
        withoutFeatures: ek.filter((kk => lk.includes(`-${kk}`))),
        searchQuery: (null === (Tk = kk.get(Vk)) || void 0 === Tk ? void 0 : Tk.slice(0, Xk.N)) || null,
        pageNumber: (0, ik.f)(kk.get(ik.b)),
        banned: "only" === ak ? "with" : "include" === ak ? null : "without"
      }
    }

    function Ok(kk, Fk) {
      var Ik;
      const Xk = uk(Fk);
      (0, ik.g)(kk, Kk, "explore" === Fk.section ? null : Fk.section), (0, ik.g)(kk, Qk, Fk.sort === Sk ? null : Fk.sort), (0, ik.g)(kk, sk, Xk === vk ? null : Xk), (0, ik.g)(kk, Vk, Fk.searchQuery), (0, ik.g)(kk, zk, null !== (Ik = xk(Fk.banned)) && void 0 !== Ik ? Ik : null), (0, ik.i)(kk, Fk.pageNumber)
    }

    function nk(kk) {
      const Fk = new URLSearchParams;
      return Ok(Fk, {
        section: "explore",
        sort: Sk,
        withFeatures: "strict" === kk ? [kk] : [kk, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${yk}?${Fk.toString()}`
    }

    function Gk(kk) {
      return uk(kk) === vk
    }

    function pk(kk) {
      return null !== kk.searchQuery || "with" === kk.banned || uk(kk) !== vk
    }

    function uk(kk) {
      return ek.flatMap((Fk => {
        const Ik = Hk(kk, Fk);
        return "with" === Ik ? [Fk] : "without" === Ik ? [`-${Fk}`] : []
      })).join(",")
    }
    const bk = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Rk = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Uk(kk) {
      return Math.round(100 * Math.max(0, 1 - 1 / kk))
    }

    function Ck(kk, Fk, Ik, Tk) {
      const ik = [];
      kk.isBanned && ik.push({
        tone: "warning",
        text: Tk("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: yk
      } = kk;
      if (null === kk.brokenError || yk && !yk.error || ik.push({
          tone: "warning",
          text: Tk("shaderPackListing:ownerBroken"),
          detail: kk.brokenError
        }), null !== yk && void 0 !== yk && yk.error) ik.push({
        tone: "warning",
        text: Tk(Fk ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Xk.l)(yk.error) ? null : yk.error
      });
      else if (yk) {
        const kk = null === yk.renderNotBefore ? 0 : yk.renderNotBefore - Ik,
          Xk = String(Math.ceil(kk / 6e4)),
          lk = Tk(Fk ? kk > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : kk > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Xk
          });
        ik.push({
          tone: "info",
          text: lk,
          detail: null
        })
      }
      return kk.listed || ik.push({
        tone: "info",
        text: Tk("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ik
    }

    function Nk(kk) {
      return Math.max(1, Math.round(kk / 1024))
    }

    function ck(kk, Fk, Ik) {
      return kk instanceof Tk.b && kk.errorMessageForUser ? kk.errorMessageForUser : Fk(Ik)
    }
  },
  6544: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => lk,
      E: () => yk,
      I: () => Xk,
      K: () => Zk,
      N: () => Lk,
      P: () => Kk,
      Q: () => tk,
      U: () => qk,
      d: () => ek,
      e: () => Hk,
      g: () => wk,
      j: () => jk,
      l: () => Pk,
      p: () => sk,
      q: () => ak,
      u: () => Tk,
      y: () => Qk,
      z: () => ik
    });
    const Xk = ["forest", "desert", "water", "night", "cave"];
    const Tk = {
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
      ik = ["popular", "updated", "newest"],
      yk = 3,
      lk = 32,
      ak = 300;

    function qk(kk, Fk) {
      return kk.slice(0, Fk).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Lk = 64,
      tk = 512,
      Zk = 18e5;

    function jk(kk) {
      const Fk = kk,
        Ik = null === Fk || void 0 === Fk ? void 0 : Fk.files;
      return "number" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.apiVersion) && "string" === typeof Fk.name && (null === Fk.author || "string" === typeof Fk.author) && (void 0 === Fk.keepCircleShadows || "boolean" === typeof Fk.keepCircleShadows) && "object" === typeof Ik && null !== Ik && Object.values(Ik).every((kk => "string" === typeof kk))
    }
    const ek = "Bloxdhub",
      wk = "https://bloxdhub.com/shaders";

    function Hk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const Jk = "Screenshot generation failed.",
      xk = "Its screenshots couldn't be generated:";

    function Pk(kk) {
      var Fk;
      return kk === Jk || null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.startsWith(xk)) && void 0 !== Fk && Fk
    }

    function Kk(kk, Fk) {
      return `shaderPacks/${kk}/${Fk}.json`
    }

    function Qk(kk, Fk, Ik, Xk) {
      return null === Fk.renderId ? sk(kk, Fk.baselineVersion, Ik, Xk) : `${kk}/${function(kk,Fk,Ik,Xk){return`shaderPacks/${kk}/${Fk}/${Ik}-${Xk}.webp`}(Fk.packId,Fk.renderId,Ik,Xk)}`
    }

    function sk(kk, Fk, Ik, Xk) {
      return `${kk}/${function(kk,Fk,Ik){return`shaderPacks/baseline/${kk}/${Fk}-${Ik}.webp`}(Fk,Ik,Xk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);