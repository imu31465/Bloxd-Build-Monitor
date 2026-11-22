export const id = 129;
export const ids = [129];
export const modules = {
  40661: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      ShaderPackCategory: () => Ik
    });
    var Dk = ik(60),
      fk = ik(1496),
      Sk = ik(1410),
      bk = ik(1479),
      rk = ik(1172),
      Pk = ik(99),
      mk = ik(22),
      Mk = ik(1614),
      Kk = ik(6451),
      xk = ik(280),
      nk = ik(6498),
      Uk = ik(6493),
      Hk = ik(6505),
      wk = ik(6393),
      lk = ik(4926),
      pk = ik(4959),
      yk = ik(6445),
      Yk = ik(3421);

    function Lk(kk, ek) {
      const ik = (0, nk.storedPackOutcome)(kk, ek);
      return "none" !== ik.kind || "noCompiler" === ik.reason
    }
    var Ck = ik(1021),
      Ak = ik.n(Ck),
      jk = ik(4961),
      sk = ik(1033),
      dk = ik(6436),
      Vk = ik(1066);
    const Fk = {
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

    function uk(kk, ek) {
      return "failedRecheck" === kk && ek.listing ? "shaderPack:statusFailedRecheckListed" : Fk[kk]
    }

    function qk(kk) {
      let {
        stored: ek,
        checking: ik,
        webGpuUsable: Dk,
        changePending: fk,
        compiler: Sk,
        t: bk
      } = kk;
      const rk = function(kk, ek, ik, Dk, fk) {
          const Sk = (0, nk.storedPackOutcome)(kk, fk);
          return "none" === Sk.kind ? "noCompiler" === Sk.reason ? ek ? "checking" : "noCompiler" : "otherApiVersion" === Sk.reason ? "wrongApiVersion" : "failed" : (0, Yk.f)() ? "harnessBuild" : "blocked" === Sk.kind ? (0, nk.shaderPackNeedsCheck)(kk, fk) ? ek ? "checking" : !1 === ik ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === ik ? "offNoWebGpu" : Dk ? "readyAfterReload" : "ready"
        }(ek, ik, Dk, fk, Sk),
        Pk = "failed" === rk || "failedRecheck" === rk,
        mk = Pk || "wrongApiVersion" === rk || "noCompiler" === rk,
        Mk = "ready" === rk || "readyAfterReload" === rk ? ek.validation.offInStrict : [];
      return (0, Vk.jsxs)(Vk.Fragment, {
        children: [(0, Vk.jsxs)("div", {
          className: Ak()("ShaderPackStatus", {
            Ready: "ready" === rk,
            Failed: mk
          }),
          children: ["ready" === rk && (0, Vk.jsx)(sk.d, {
            name: "circle-check"
          }), mk && (0, Vk.jsx)(sk.d, {
            name: "triangle-exclamation"
          }), "harnessBuild" === rk ? (0, Yk.c)() : bk(uk(rk, ek), {
            packVersion: String(ek.manifest.apiVersion),
            version: String(jk.c)
          })]
        }), Pk && (0, Vk.jsx)(dk.b, {
          diagnostics: ek.validation.errors,
          more: ek.validation.moreErrors,
          t: bk
        }), Mk.length > 0 && (0, Vk.jsxs)(Vk.Fragment, {
          children: [(0, Vk.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Vk.jsx)(sk.d, {
              name: "triangle-exclamation"
            }), bk("shaderPack:offInStrict")]
          }), (0, Vk.jsx)(dk.b, {
            diagnostics: Mk,
            t: bk
          })]
        })]
      })
    }

    function Ik(kk) {
      let {
        setApplySettingsCallback: ek
      } = kk;
      const {
        t: ik
      } = (0, rk.D)(), [fk, bk] = (0, Dk.useState)(null), [mk, Mk] = (0, Dk.useState)(null), [Yk, Ck] = (0, Dk.useState)(null), [Ak] = (0, Dk.useState)(xk.i), [jk, sk] = (0, Dk.useState)(!0), [dk, Fk] = (0, Dk.useState)(!1), {
        loading: uk,
        error: Ik,
        setError: Qk,
        onFiles: vk
      } = (0, yk.i)((async kk => {
        const ek = await (0, Kk.loadPageShaderPackCompiler)();
        if (!ek) return void Qk(ik("shaderPack:compilerUnavailable"));
        Mk(ek);
        const Dk = (0, nk.toStoredShaderPack)(kk, await (0, Uk.c)(ek, kk.files));
        await (0, nk.saveShaderPack)(Dk, ek) ? (bk(Dk), Ek(fk, Dk, ek)) : Qk(ik("shaderPack:saveFailed"))
      }));

      function Ek(kk, ik, Dk) {
        (function(kk, ek, ik, Dk) {
          return ik || Lk(kk, Dk) || Lk(ek, Dk)
        })(kk, ik, (0, nk.isShaderPackChangePending)(), Dk) && ((0, nk.markShaderPackChangePending)(), ek((() => lk.q)))
      }
      return (0, Dk.useEffect)((() => {
        let kk = !1;
        return async function() {
          const ek = (0, Pk.hasUsableWebGpuAdapter)(),
            ik = await (0, Hk.f)();
          if (kk) return;
          bk(ik), Fk(!0), sk(!1);
          const Dk = null !== ik ? (0, Kk.loadPageShaderPackCompiler)() : null,
            fk = await ek;
          if (kk) return;
          Ck(fk);
          const Sk = await Dk;
          if (!kk && (Mk(Sk), null !== ik && fk && null !== Sk && (0, nk.shaderPackNeedsCheck)(ik, Sk))) {
            const ek = await (0, Uk.b)(ik, Sk);
            kk || bk((kk => kk === ik ? ek : kk))
          }
        }().catch((ek => {
          console.error("Failed to load the stored shader pack", ek), kk || Qk(ik("shaderPack:unexpectedError"))
        })).finally((() => {
          kk || (sk(!1), Fk(!1))
        })), () => {
          kk = !0
        }
      }), []), (0, Vk.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Vk.jsx)("div", {
          className: "ShaderPackIntro",
          children: ik("shaderPack:intro")
        }), (0, Vk.jsx)(zk, {
          to: wk.S,
          className: "ShaderPackBrowseLink",
          children: (0, Vk.jsx)(Sk.r, {
            className: "ShaderPackBrowseButton",
            children: ik("shaderPackListing:browse")
          })
        }), !1 === Yk && (0, Vk.jsx)("div", {
          className: "SettingsBoxWarning",
          children: ik(Ak ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Ik && (0, Vk.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [ik("general:error"), ": ", Ik]
        }), fk && (0, Vk.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Vk.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Vk.jsxs)("div", {
              children: [(0, Vk.jsx)("div", {
                className: "ShaderPackName",
                children: fk.manifest.name
              }), fk.manifest.author && (0, Vk.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, pk.j)(ik, "shaderPack:byAuthor", {
                  author: fk.manifest.author
                })
              }), fk.manifest.description && (0, Vk.jsx)("div", {
                className: "ShaderPackDescription",
                children: fk.manifest.description
              }), fk.listing && (0, Vk.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Vk.jsx)(zk, {
                  to: (0, wk.Y)(fk.listing.packId),
                  className: "ShaderPackListingLink",
                  children: ik("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Vk.jsx)(Sk.U, {
              disabled: jk || uk,
              onClick: async function() {
                sk(!0), Qk(null), await (0, nk.removeShaderPack)(), bk(null), sk(!1), Ek(fk, null, mk)
              },
              children: ik("shaderPack:removePack")
            })]
          }), (0, Vk.jsx)(qk, {
            stored: fk,
            checking: dk,
            webGpuUsable: Yk,
            changePending: (0, nk.isShaderPackChangePending)(),
            compiler: mk,
            t: ik
          })]
        }), (0, Vk.jsx)(yk.e, {
          busy: jk || uk || dk,
          disabled: jk || uk || dk || !0 !== Yk,
          onFiles: vk
        })]
      })
    }

    function zk(kk) {
      let {
        to: ek,
        className: ik,
        children: Dk
      } = kk;
      const {
        gameState: Sk
      } = (0, mk.n)(["gameState"]), {
        pathname: rk,
        search: Pk
      } = (0, fk.p)(), Kk = "landingPage" !== Sk && "studio" !== Sk;
      return (0, Vk.jsx)(bk.LinkPreserveSearch, {
        to: ek,
        className: ik,
        target: Kk ? "_blank" : void 0,
        onClick: () => {
          Kk || ((0, wk.L)(`${rk}${Pk}`), (0, Mk.h)())
        },
        children: Dk
      })
    }
  },
  6393: (kk, ek, ik) => {
    ik.d(ek, {
      B: () => Ik,
      D: () => Wk,
      E: () => Uk,
      F: () => lk,
      I: () => Vk,
      L: () => Mk,
      M: () => uk,
      N: () => Hk,
      O: () => ak,
      P: () => Ek,
      S: () => bk,
      V: () => hk,
      Y: () => Pk,
      ab: () => rk,
      c: () => pk,
      eb: () => Qk,
      f: () => sk,
      ib: () => vk,
      j: () => wk,
      lb: () => yk,
      m: () => xk,
      ob: () => Fk,
      q: () => Kk,
      u: () => qk,
      x: () => nk
    });
    var Dk = ik(6396),
      fk = ik(165),
      Sk = ik(4505);
    const bk = "/shader-packs",
      rk = `${bk}/publish`;

    function Pk(kk) {
      return `${bk}/${encodeURIComponent(kk)}`
    }
    let mk = null;

    function Mk(kk) {
      mk = kk
    }

    function Kk() {
      return mk
    }

    function xk() {
      mk = null
    }

    function nk(kk) {
      return kk.playerHasRank("developer") || kk.playerHasRank("admin")
    }
    const Uk = ["terrain", "water", "models", "sunShadows", "strict"],
      Hk = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function wk(kk, ek) {
      return kk.withFeatures.includes(ek) ? "with" : kk.withoutFeatures.includes(ek) ? "without" : null
    }

    function lk(kk) {
      return null === kk ? "with" : "with" === kk ? "without" : null
    }

    function pk(kk) {
      return "with" === kk ? "only" : null === kk ? "include" : void 0
    }

    function yk(kk, ek) {
      const ik = wk(kk, ek),
        Dk = kk => kk.filter((kk => kk !== ek));
      return {
        withFeatures: null === ik ? [...kk.withFeatures, ek] : Dk(kk.withFeatures),
        withoutFeatures: "with" === ik ? [...kk.withoutFeatures, ek] : Dk(kk.withoutFeatures)
      }
    }
    const Yk = "section",
      Lk = "sort",
      Ck = "filters",
      Ak = "q",
      jk = "banned",
      sk = "popular",
      dk = "strict";

    function Vk(kk) {
      var ek, ik, fk;
      const bk = kk.get(Yk),
        rk = (null !== (ek = kk.get(Ck)) && void 0 !== ek ? ek : dk).split(","),
        Pk = kk.get(jk);
      return {
        section: "favourites" === bk || "mine" === bk ? bk : "explore",
        sort: null !== (ik = Dk.C.find((ek => ek === kk.get(Lk)))) && void 0 !== ik ? ik : sk,
        withFeatures: Uk.filter((kk => rk.includes(kk) && !rk.includes(`-${kk}`))),
        withoutFeatures: Uk.filter((kk => rk.includes(`-${kk}`))),
        searchQuery: (null === (fk = kk.get(Ak)) || void 0 === fk ? void 0 : fk.slice(0, Dk.N)) || null,
        pageNumber: (0, Sk.g)(kk.get(Sk.e)),
        banned: "only" === Pk ? "with" : "include" === Pk ? null : "without"
      }
    }

    function Fk(kk, ek) {
      var ik;
      const Dk = zk(ek);
      (0, Sk.k)(kk, Yk, "explore" === ek.section ? null : ek.section), (0, Sk.k)(kk, Lk, ek.sort === sk ? null : ek.sort), (0, Sk.k)(kk, Ck, Dk === dk ? null : Dk), (0, Sk.k)(kk, Ak, ek.searchQuery), (0, Sk.k)(kk, jk, null !== (ik = pk(ek.banned)) && void 0 !== ik ? ik : null), (0, Sk.n)(kk, ek.pageNumber)
    }

    function uk(kk) {
      const ek = new URLSearchParams;
      return Fk(ek, {
        section: "explore",
        sort: sk,
        withFeatures: "strict" === kk ? [kk] : [kk, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${bk}?${ek.toString()}`
    }

    function qk(kk) {
      return zk(kk) === dk
    }

    function Ik(kk) {
      return null !== kk.searchQuery || "with" === kk.banned || zk(kk) !== dk
    }

    function zk(kk) {
      return Uk.flatMap((ek => {
        const ik = wk(kk, ek);
        return "with" === ik ? [ek] : "without" === ik ? [`-${ek}`] : []
      })).join(",")
    }
    const Qk = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      vk = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Ek(kk) {
      return Math.round(100 * Math.max(0, 1 - 1 / kk))
    }

    function hk(kk, ek, ik, fk) {
      const Sk = [];
      kk.isBanned && Sk.push({
        tone: "warning",
        text: fk("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: bk
      } = kk;
      if (null === kk.brokenError || bk && !bk.error || Sk.push({
          tone: "warning",
          text: fk("shaderPackListing:ownerBroken"),
          detail: kk.brokenError
        }), null !== bk && void 0 !== bk && bk.error) Sk.push({
        tone: "warning",
        text: fk(ek ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Dk.p)(bk.error) ? null : bk.error
      });
      else if (bk) {
        const kk = null === bk.renderNotBefore ? 0 : bk.renderNotBefore - ik,
          Dk = String(Math.ceil(kk / 6e4)),
          rk = fk(ek ? kk > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : kk > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Dk
          });
        Sk.push({
          tone: "info",
          text: rk,
          detail: null
        })
      }
      return kk.listed || Sk.push({
        tone: "info",
        text: fk("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Sk
    }

    function ak(kk) {
      return Math.max(1, Math.round(kk / 1024))
    }

    function Wk(kk, ek, ik) {
      return kk instanceof fk.d && kk.errorMessageForUser ? kk.errorMessageForUser : ek(ik)
    }
  },
  6396: (kk, ek, ik) => {
    ik.d(ek, {
      C: () => Sk,
      F: () => rk,
      G: () => bk,
      H: () => Dk,
      K: () => xk,
      N: () => Mk,
      Q: () => Yk,
      R: () => Kk,
      V: () => mk,
      e: () => Uk,
      h: () => wk,
      i: () => Hk,
      m: () => nk,
      p: () => yk,
      t: () => Ck,
      v: () => Pk,
      x: () => fk,
      y: () => Lk
    });
    const Dk = ["forest", "desert", "water", "night", "cave"];
    const fk = {
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
      Sk = ["popular", "updated", "newest"],
      bk = 3,
      rk = 32,
      Pk = 300;

    function mk(kk, ek) {
      return kk.slice(0, ek).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Mk = 64,
      Kk = 512,
      xk = 18e5;

    function nk(kk) {
      const ek = kk,
        ik = null === ek || void 0 === ek ? void 0 : ek.files;
      return "number" === typeof(null === ek || void 0 === ek ? void 0 : ek.apiVersion) && "string" === typeof ek.name && (null === ek.author || "string" === typeof ek.author) && (void 0 === ek.keepCircleShadows || "boolean" === typeof ek.keepCircleShadows) && "object" === typeof ik && null !== ik && Object.values(ik).every((kk => "string" === typeof kk))
    }
    const Uk = "Bloxdhub",
      Hk = "https://bloxdhub.com/shaders";

    function wk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const lk = "Screenshot generation failed.",
      pk = "Its screenshots couldn't be generated:";

    function yk(kk) {
      var ek;
      return kk === lk || null !== (ek = null === kk || void 0 === kk ? void 0 : kk.startsWith(pk)) && void 0 !== ek && ek
    }

    function Yk(kk, ek) {
      return `shaderPacks/${kk}/${ek}.json`
    }

    function Lk(kk, ek, ik, Dk) {
      return null === ek.renderId ? Ck(kk, ek.baselineVersion, ik, Dk) : `${kk}/${function(kk,ek,ik,Dk){return`shaderPacks/${kk}/${ek}/${ik}-${Dk}.webp`}(ek.packId,ek.renderId,ik,Dk)}`
    }

    function Ck(kk, ek, ik, Dk) {
      return `${kk}/${function(kk,ek,ik){return`shaderPacks/baseline/${kk}/${ek}-${ik}.webp`}(ek,ik,Dk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);