export const id = 122;
export const ids = [122];
export const modules = {
  40497: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      ShaderPackCategory: () => Uk
    });
    var Rk = Bk(61),
      tk = Bk(1473),
      ak = Bk(1389),
      Xk = Bk(1459),
      bk = Bk(1149),
      wk = Bk(98),
      dk = Bk(22),
      sk = Bk(1585),
      Vk = Bk(6316),
      Jk = Bk(267),
      Ak = Bk(6358),
      ek = Bk(6356),
      yk = Bk(6361),
      fk = Bk(6245),
      mk = Bk(4688),
      Wk = Bk(6295),
      vk = Bk(6307),
      ik = Bk(3262);

    function Yk(kk, Fk) {
      const Bk = (0, Ak.storedPackOutcome)(kk, Fk);
      return "none" !== Bk.kind || "noCompiler" === Bk.reason
    }
    var Lk = Bk(1020),
      Ok = Bk.n(Lk),
      Ek = Bk(6299),
      Sk = Bk(1028),
      Nk = Bk(6293),
      Hk = Bk(1069);
    const uk = {
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

    function Mk(kk, Fk) {
      return "failedRecheck" === kk && Fk.listing ? "shaderPack:statusFailedRecheckListed" : uk[kk]
    }

    function gk(kk) {
      let {
        stored: Fk,
        checking: Bk,
        webGpuUsable: Rk,
        changePending: tk,
        compiler: ak,
        t: Xk
      } = kk;
      const bk = function(kk, Fk, Bk, Rk, tk) {
          const ak = (0, Ak.storedPackOutcome)(kk, tk);
          return "none" === ak.kind ? "noCompiler" === ak.reason ? Fk ? "checking" : "noCompiler" : "otherApiVersion" === ak.reason ? "wrongApiVersion" : "failed" : (0, ik.e)() ? "harnessBuild" : "blocked" === ak.kind ? (0, Ak.shaderPackNeedsCheck)(kk, tk) ? Fk ? "checking" : !1 === Bk ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === Bk ? "offNoWebGpu" : Rk ? "readyAfterReload" : "ready"
        }(Fk, Bk, Rk, tk, ak),
        wk = "failed" === bk || "failedRecheck" === bk,
        dk = wk || "wrongApiVersion" === bk || "noCompiler" === bk,
        sk = "ready" === bk || "readyAfterReload" === bk ? Fk.validation.offInStrict : [];
      return (0, Hk.jsxs)(Hk.Fragment, {
        children: [(0, Hk.jsxs)("div", {
          className: Ok()("ShaderPackStatus", {
            Ready: "ready" === bk,
            Failed: dk
          }),
          children: ["ready" === bk && (0, Hk.jsx)(Sk.d, {
            name: "circle-check"
          }), dk && (0, Hk.jsx)(Sk.d, {
            name: "triangle-exclamation"
          }), "harnessBuild" === bk ? (0, ik.d)() : Xk(Mk(bk, Fk), {
            packVersion: String(Fk.manifest.apiVersion),
            version: String(Ek.b)
          })]
        }), wk && (0, Hk.jsx)(Nk.e, {
          diagnostics: Fk.validation.errors,
          more: Fk.validation.moreErrors,
          t: Xk
        }), sk.length > 0 && (0, Hk.jsxs)(Hk.Fragment, {
          children: [(0, Hk.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Hk.jsx)(Sk.d, {
              name: "triangle-exclamation"
            }), Xk("shaderPack:offInStrict")]
          }), (0, Hk.jsx)(Nk.e, {
            diagnostics: sk,
            t: Xk
          })]
        })]
      })
    }

    function Uk(kk) {
      let {
        setApplySettingsCallback: Fk
      } = kk;
      const {
        t: Bk
      } = (0, bk.x)(), [tk, Xk] = (0, Rk.useState)(null), [dk, sk] = (0, Rk.useState)(null), [ik, Lk] = (0, Rk.useState)(null), [Ok] = (0, Rk.useState)(Jk.c), [Ek, Sk] = (0, Rk.useState)(!0), [Nk, uk] = (0, Rk.useState)(!1), {
        loading: Mk,
        error: Uk,
        setError: Gk,
        onFiles: Tk
      } = (0, vk.i)((async kk => {
        const Fk = await (0, Vk.loadPageShaderPackCompiler)();
        if (!Fk) return void Gk(Bk("shaderPack:compilerUnavailable"));
        sk(Fk);
        const Rk = (0, Ak.toStoredShaderPack)(kk, await (0, ek.g)(Fk, kk.files));
        await (0, Ak.saveShaderPack)(Rk, Fk) ? (Xk(Rk), rk(tk, Rk, Fk)) : Gk(Bk("shaderPack:saveFailed"))
      }));

      function rk(kk, Bk, Rk) {
        (function(kk, Fk, Bk, Rk) {
          return Bk || Yk(kk, Rk) || Yk(Fk, Rk)
        })(kk, Bk, (0, Ak.isShaderPackChangePending)(), Rk) && ((0, Ak.markShaderPackChangePending)(), Fk((() => mk.m)))
      }
      return (0, Rk.useEffect)((() => {
        let kk = !1;
        return async function() {
          const Fk = (0, wk.hasUsableWebGpuAdapter)(),
            Bk = await (0, yk.e)();
          if (kk) return;
          Xk(Bk), uk(!0), Sk(!1);
          const Rk = null !== Bk ? (0, Vk.loadPageShaderPackCompiler)() : null,
            tk = await Fk;
          if (kk) return;
          Lk(tk);
          const ak = await Rk;
          if (!kk && (sk(ak), null !== Bk && tk && null !== ak && (0, Ak.shaderPackNeedsCheck)(Bk, ak))) {
            const Fk = await (0, ek.d)(Bk, ak);
            kk || Xk((kk => kk === Bk ? Fk : kk))
          }
        }().catch((Fk => {
          console.error("Failed to load the stored shader pack", Fk), kk || Gk(Bk("shaderPack:unexpectedError"))
        })).finally((() => {
          kk || (Sk(!1), uk(!1))
        })), () => {
          kk = !0
        }
      }), []), (0, Hk.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Hk.jsx)("div", {
          className: "ShaderPackIntro",
          children: Bk("shaderPack:intro")
        }), (0, Hk.jsx)(ck, {
          to: fk.S,
          className: "ShaderPackBrowseLink",
          children: (0, Hk.jsx)(ak.o, {
            className: "ShaderPackBrowseButton",
            children: Bk("shaderPackListing:browse")
          })
        }), !1 === ik && (0, Hk.jsx)("div", {
          className: "SettingsBoxWarning",
          children: Bk(Ok ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Uk && (0, Hk.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [Bk("general:error"), ": ", Uk]
        }), tk && (0, Hk.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Hk.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Hk.jsxs)("div", {
              children: [(0, Hk.jsx)("div", {
                className: "ShaderPackName",
                children: tk.manifest.name
              }), tk.manifest.author && (0, Hk.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Wk.e)(Bk, "shaderPack:byAuthor", {
                  author: tk.manifest.author
                })
              }), tk.manifest.description && (0, Hk.jsx)("div", {
                className: "ShaderPackDescription",
                children: tk.manifest.description
              }), tk.listing && (0, Hk.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Hk.jsx)(ck, {
                  to: (0, fk.W)(tk.listing.packId),
                  className: "ShaderPackListingLink",
                  children: Bk("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Hk.jsx)(ak.K, {
              disabled: Ek || Mk,
              onClick: async function() {
                Sk(!0), Gk(null), await (0, Ak.removeShaderPack)(), Xk(null), Sk(!1), rk(tk, null, dk)
              },
              children: Bk("shaderPack:removePack")
            })]
          }), (0, Hk.jsx)(gk, {
            stored: tk,
            checking: Nk,
            webGpuUsable: ik,
            changePending: (0, Ak.isShaderPackChangePending)(),
            compiler: dk,
            t: Bk
          })]
        }), (0, Hk.jsx)(vk.e, {
          busy: Ek || Mk || Nk,
          disabled: Ek || Mk || Nk || !0 !== ik,
          onFiles: Tk
        })]
      })
    }

    function ck(kk) {
      let {
        to: Fk,
        className: Bk,
        children: Rk
      } = kk;
      const {
        gameState: ak
      } = (0, dk.h)(["gameState"]), {
        pathname: bk,
        search: wk
      } = (0, tk.s)(), Vk = "landingPage" !== ak && "studio" !== ak;
      return (0, Hk.jsx)(Xk.LinkPreserveSearch, {
        to: Fk,
        className: Bk,
        target: Vk ? "_blank" : void 0,
        onClick: () => {
          Vk || ((0, fk.G)(`${bk}${wk}`), (0, sk.f)())
        },
        children: Rk
      })
    }
  },
  6245: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => mk,
      E: () => Hk,
      G: () => sk,
      K: () => Mk,
      L: () => yk,
      M: () => zk,
      O: () => rk,
      S: () => Xk,
      U: () => Dk,
      W: () => wk,
      Y: () => bk,
      Z: () => Gk,
      ab: () => Tk,
      b: () => Wk,
      db: () => vk,
      e: () => Sk,
      eb: () => uk,
      f: () => fk,
      h: () => Jk,
      j: () => Vk,
      m: () => gk,
      q: () => Ak,
      r: () => Uk,
      v: () => Pk,
      z: () => ek
    });
    var Rk = Bk(6253),
      tk = Bk(152),
      ak = Bk(4299);
    const Xk = "/shader-packs",
      bk = `${Xk}/publish`;

    function wk(kk) {
      return `${Xk}/${encodeURIComponent(kk)}`
    }
    let dk = null;

    function sk(kk) {
      dk = kk
    }

    function Vk() {
      return dk
    }

    function Jk() {
      dk = null
    }

    function Ak(kk) {
      return kk.playerHasRank("developer") || kk.playerHasRank("admin")
    }
    const ek = ["terrain", "water", "models", "sunShadows", "strict"],
      yk = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function fk(kk, Fk) {
      return kk.withFeatures.includes(Fk) ? "with" : kk.withoutFeatures.includes(Fk) ? "without" : null
    }

    function mk(kk) {
      return null === kk ? "with" : "with" === kk ? "without" : null
    }

    function Wk(kk) {
      return "with" === kk ? "only" : null === kk ? "include" : void 0
    }

    function vk(kk, Fk) {
      const Bk = fk(kk, Fk),
        Rk = kk => kk.filter((kk => kk !== Fk));
      return {
        withFeatures: null === Bk ? [...kk.withFeatures, Fk] : Rk(kk.withFeatures),
        withoutFeatures: "with" === Bk ? [...kk.withoutFeatures, Fk] : Rk(kk.withoutFeatures)
      }
    }
    const ik = "section",
      Yk = "sort",
      Lk = "filters",
      Ok = "q",
      Ek = "banned",
      Sk = "popular",
      Nk = "strict";

    function Hk(kk) {
      var Fk, Bk, tk;
      const Xk = kk.get(ik),
        bk = (null !== (Fk = kk.get(Lk)) && void 0 !== Fk ? Fk : Nk).split(","),
        wk = kk.get(Ek);
      return {
        section: "favourites" === Xk || "mine" === Xk ? Xk : "explore",
        sort: null !== (Bk = Rk.B.find((Fk => Fk === kk.get(Yk)))) && void 0 !== Bk ? Bk : Sk,
        withFeatures: ek.filter((kk => bk.includes(kk) && !bk.includes(`-${kk}`))),
        withoutFeatures: ek.filter((kk => bk.includes(`-${kk}`))),
        searchQuery: (null === (tk = kk.get(Ok)) || void 0 === tk ? void 0 : tk.slice(0, Rk.M)) || null,
        pageNumber: (0, ak.g)(kk.get(ak.d)),
        banned: "only" === wk ? "with" : "include" === wk ? null : "without"
      }
    }

    function uk(kk, Fk) {
      var Bk;
      const Rk = ck(Fk);
      (0, ak.k)(kk, ik, "explore" === Fk.section ? null : Fk.section), (0, ak.k)(kk, Yk, Fk.sort === Sk ? null : Fk.sort), (0, ak.k)(kk, Lk, Rk === Nk ? null : Rk), (0, ak.k)(kk, Ok, Fk.searchQuery), (0, ak.k)(kk, Ek, null !== (Bk = Wk(Fk.banned)) && void 0 !== Bk ? Bk : null), (0, ak.l)(kk, Fk.pageNumber)
    }

    function Mk(kk) {
      const Fk = new URLSearchParams;
      return uk(Fk, {
        section: "explore",
        sort: Sk,
        withFeatures: "strict" === kk ? [kk] : [kk, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Xk}?${Fk.toString()}`
    }

    function gk(kk) {
      return ck(kk) === Nk
    }

    function Uk(kk) {
      return null !== kk.searchQuery || "with" === kk.banned || ck(kk) !== Nk
    }

    function ck(kk) {
      return ek.flatMap((Fk => {
        const Bk = fk(kk, Fk);
        return "with" === Bk ? [Fk] : "without" === Bk ? [`-${Fk}`] : []
      })).join(",")
    }
    const Gk = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Tk = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function rk(kk) {
      return Math.round(100 * Math.max(0, 1 - 1 / kk))
    }

    function Dk(kk, Fk, Bk, tk) {
      const ak = [];
      kk.isBanned && ak.push({
        tone: "warning",
        text: tk("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Xk
      } = kk;
      if (null === kk.brokenError || Xk && !Xk.error || ak.push({
          tone: "warning",
          text: tk("shaderPackListing:ownerBroken"),
          detail: kk.brokenError
        }), null !== Xk && void 0 !== Xk && Xk.error) ak.push({
        tone: "warning",
        text: tk(Fk ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Rk.k)(Xk.error) ? null : Xk.error
      });
      else if (Xk) {
        const kk = null === Xk.renderNotBefore ? 0 : Xk.renderNotBefore - Bk,
          Rk = String(Math.ceil(kk / 6e4)),
          bk = tk(Fk ? kk > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : kk > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Rk
          });
        ak.push({
          tone: "info",
          text: bk,
          detail: null
        })
      }
      return kk.listed || ak.push({
        tone: "info",
        text: tk("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ak
    }

    function zk(kk) {
      return Math.max(1, Math.round(kk / 1024))
    }

    function Pk(kk, Fk, Bk) {
      return kk instanceof tk.c && kk.errorMessageForUser ? kk.errorMessageForUser : Fk(Bk)
    }
  },
  6253: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      B: () => ak,
      D: () => bk,
      G: () => Xk,
      I: () => Rk,
      J: () => Jk,
      M: () => sk,
      Q: () => vk,
      R: () => Vk,
      T: () => dk,
      e: () => Ak,
      h: () => yk,
      i: () => ek,
      k: () => Wk,
      n: () => Yk,
      p: () => wk,
      t: () => tk,
      x: () => ik
    });
    const Rk = ["forest", "desert", "water", "night", "cave"];
    const tk = {
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
      ak = ["popular", "updated", "newest"],
      Xk = 3,
      bk = 32,
      wk = 300;

    function dk(kk, Fk) {
      return kk.slice(0, Fk).replace(/[\uD800-\uDBFF]$/, "")
    }
    const sk = 64,
      Vk = 512,
      Jk = 18e5;
    const Ak = "Bloxdhub",
      ek = "https://bloxdhub.com/shaders";

    function yk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const fk = "Screenshot generation failed.",
      mk = "Its screenshots couldn't be generated:";

    function Wk(kk) {
      var Fk;
      return kk === fk || null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.startsWith(mk)) && void 0 !== Fk && Fk
    }

    function vk(kk, Fk) {
      return `shaderPacks/${kk}/${Fk}.json`
    }

    function ik(kk, Fk, Bk, Rk) {
      return null === Fk.renderId ? Yk(kk, Fk.baselineVersion, Bk, Rk) : `${kk}/${function(kk,Fk,Bk,Rk){return`shaderPacks/${kk}/${Fk}/${Bk}-${Rk}.webp`}(Fk.packId,Fk.renderId,Bk,Rk)}`
    }

    function Yk(kk, Fk, Bk, Rk) {
      return `${kk}/${function(kk,Fk,Bk){return`shaderPacks/baseline/${kk}/${Fk}-${Bk}.webp`}(Fk,Bk,Rk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);