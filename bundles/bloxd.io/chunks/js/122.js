export const id = 122;
export const ids = [122];
export const modules = {
  40266: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      ShaderPackCategory: () => Gz
    });
    var Ez = bz(56),
      nz = bz(1490),
      iz = bz(1419),
      lz = bz(1482),
      Mz = bz(1181),
      tz = bz(96),
      Hz = bz(20),
      Oz = bz(1595),
      pz = bz(6340),
      dz = bz(298),
      Fz = bz(6379),
      Zz = bz(6371),
      Rz = bz(6382),
      Kz = bz(6274),
      wz = bz(4746),
      Xz = bz(6323),
      fz = bz(6337),
      sz = bz(3204);

    function rz(zz, uz) {
      const bz = (0, Fz.storedPackOutcome)(zz, uz);
      return "none" !== bz.kind || "noCompiler" === bz.reason
    }
    var oz = bz(1038),
      Nz = bz.n(oz),
      vz = bz(6331),
      xz = bz(1047),
      Jz = bz(6316),
      Az = bz(1089);
    const Tz = {
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

    function Lz(zz, uz) {
      return "failedRecheck" === zz && uz.listing ? "shaderPack:statusFailedRecheckListed" : Tz[zz]
    }

    function Pz(zz) {
      let {
        stored: uz,
        checking: bz,
        webGpuUsable: Ez,
        changePending: nz,
        compiler: iz,
        t: lz
      } = zz;
      const Mz = function(zz, uz, bz, Ez, nz) {
          const iz = (0, Fz.storedPackOutcome)(zz, nz);
          return "none" === iz.kind ? "noCompiler" === iz.reason ? uz ? "checking" : "noCompiler" : "otherApiVersion" === iz.reason ? "wrongApiVersion" : "failed" : (0, sz.f)() ? "harnessBuild" : "blocked" === iz.kind ? (0, Fz.shaderPackNeedsCheck)(zz, nz) ? uz ? "checking" : !1 === bz ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === bz ? "offNoWebGpu" : Ez ? "readyAfterReload" : "ready"
        }(uz, bz, Ez, nz, iz),
        tz = "failed" === Mz || "failedRecheck" === Mz,
        Hz = tz || "wrongApiVersion" === Mz || "noCompiler" === Mz,
        Oz = "ready" === Mz || "readyAfterReload" === Mz ? uz.validation.offInStrict : [];
      return (0, Az.jsxs)(Az.Fragment, {
        children: [(0, Az.jsxs)("div", {
          className: Nz()("ShaderPackStatus", {
            Ready: "ready" === Mz,
            Failed: Hz
          }),
          children: ["ready" === Mz && (0, Az.jsx)(xz.c, {
            name: "circle-check"
          }), Hz && (0, Az.jsx)(xz.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === Mz ? (0, sz.b)() : lz(Lz(Mz, uz), {
            packVersion: String(uz.manifest.apiVersion),
            version: String(vz.d)
          })]
        }), tz && (0, Az.jsx)(Jz.b, {
          diagnostics: uz.validation.errors,
          more: uz.validation.moreErrors,
          t: lz
        }), Oz.length > 0 && (0, Az.jsxs)(Az.Fragment, {
          children: [(0, Az.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, Az.jsx)(xz.c, {
              name: "triangle-exclamation"
            }), lz("shaderPack:offInStrict")]
          }), (0, Az.jsx)(Jz.b, {
            diagnostics: Oz,
            t: lz
          })]
        })]
      })
    }

    function Gz(zz) {
      let {
        setApplySettingsCallback: uz
      } = zz;
      const {
        t: bz
      } = (0, Mz.F)(), [nz, lz] = (0, Ez.useState)(null), [Hz, Oz] = (0, Ez.useState)(null), [sz, oz] = (0, Ez.useState)(null), [Nz] = (0, Ez.useState)(dz.g), [vz, xz] = (0, Ez.useState)(!0), [Jz, Tz] = (0, Ez.useState)(!1), {
        loading: Lz,
        error: Gz,
        setError: Vz,
        onFiles: mz
      } = (0, fz.e)((async zz => {
        const uz = await (0, pz.loadPageShaderPackCompiler)();
        if (!uz) return void Vz(bz("shaderPack:compilerUnavailable"));
        Oz(uz);
        const Ez = (0, Fz.toStoredShaderPack)(zz, await (0, Zz.g)(uz, zz.files));
        await (0, Fz.saveShaderPack)(Ez, uz) ? (lz(Ez), qz(nz, Ez, uz)) : Vz(bz("shaderPack:saveFailed"))
      }));

      function qz(zz, bz, Ez) {
        (function(zz, uz, bz, Ez) {
          return bz || rz(zz, Ez) || rz(uz, Ez)
        })(zz, bz, (0, Fz.isShaderPackChangePending)(), Ez) && ((0, Fz.markShaderPackChangePending)(), uz((() => wz.j)))
      }
      return (0, Ez.useEffect)((() => {
        let zz = !1;
        return async function() {
          const uz = (0, tz.hasUsableWebGpuAdapter)(),
            bz = await (0, Rz.e)();
          if (zz) return;
          lz(bz), Tz(!0), xz(!1);
          const Ez = null !== bz ? (0, pz.loadPageShaderPackCompiler)() : null,
            nz = await uz;
          if (zz) return;
          oz(nz);
          const iz = await Ez;
          if (!zz && (Oz(iz), null !== bz && nz && null !== iz && (0, Fz.shaderPackNeedsCheck)(bz, iz))) {
            const uz = await (0, Zz.c)(bz, iz);
            zz || lz((zz => zz === bz ? uz : zz))
          }
        }().catch((uz => {
          console.error("Failed to load the stored shader pack", uz), zz || Vz(bz("shaderPack:unexpectedError"))
        })).finally((() => {
          zz || (xz(!1), Tz(!1))
        })), () => {
          zz = !0
        }
      }), []), (0, Az.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, Az.jsx)("div", {
          className: "ShaderPackIntro",
          children: bz("shaderPack:intro")
        }), (0, Az.jsx)(az, {
          to: Kz.P,
          className: "ShaderPackBrowseLink",
          children: (0, Az.jsx)(iz.q, {
            className: "ShaderPackBrowseButton",
            children: bz("shaderPackListing:browse")
          })
        }), !1 === sz && (0, Az.jsx)("div", {
          className: "SettingsBoxWarning",
          children: bz(Nz ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== Gz && (0, Az.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [bz("general:error"), ": ", Gz]
        }), nz && (0, Az.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, Az.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, Az.jsxs)("div", {
              children: [(0, Az.jsx)("div", {
                className: "ShaderPackName",
                children: nz.manifest.name
              }), nz.manifest.author && (0, Az.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Xz.h)(bz, "shaderPack:byAuthor", {
                  author: nz.manifest.author
                })
              }), nz.manifest.description && (0, Az.jsx)("div", {
                className: "ShaderPackDescription",
                children: nz.manifest.description
              }), nz.listing && (0, Az.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Az.jsx)(az, {
                  to: (0, Kz.W)(nz.listing.packId),
                  className: "ShaderPackListingLink",
                  children: bz("shaderPackListing:openPackPage")
                })
              })]
            }), (0, Az.jsx)(iz.O, {
              disabled: vz || Lz,
              onClick: async function() {
                xz(!0), Vz(null), await (0, Fz.removeShaderPack)(), lz(null), xz(!1), qz(nz, null, Hz)
              },
              children: bz("shaderPack:removePack")
            })]
          }), (0, Az.jsx)(Pz, {
            stored: nz,
            checking: Jz,
            webGpuUsable: sz,
            changePending: (0, Fz.isShaderPackChangePending)(),
            compiler: Hz,
            t: bz
          })]
        }), (0, Az.jsx)(fz.c, {
          busy: vz || Lz || Jz,
          disabled: vz || Lz || Jz || !0 !== sz,
          onFiles: mz
        })]
      })
    }

    function az(zz) {
      let {
        to: uz,
        className: bz,
        children: Ez
      } = zz;
      const {
        gameState: iz
      } = (0, Hz.m)(["gameState"]), {
        pathname: Mz,
        search: tz
      } = (0, nz.v)(), pz = "landingPage" !== iz && "studio" !== iz;
      return (0, Az.jsx)(lz.LinkPreserveSearch, {
        to: uz,
        className: bz,
        target: pz ? "_blank" : void 0,
        onClick: () => {
          pz || ((0, Kz.G)(`${Mz}${tz}`), (0, Oz.c)())
        },
        children: Ez
      })
    }
  },
  6274: (zz, uz, bz) => {
    bz.d(uz, {
      D: () => wz,
      F: () => Az,
      G: () => Oz,
      J: () => Lz,
      M: () => Rz,
      N: () => Uz,
      O: () => qz,
      P: () => lz,
      T: () => hz,
      W: () => tz,
      _: () => Mz,
      bb: () => Vz,
      db: () => mz,
      e: () => Xz,
      eb: () => fz,
      f: () => xz,
      gb: () => Tz,
      h: () => Kz,
      j: () => dz,
      m: () => pz,
      p: () => Pz,
      q: () => Fz,
      u: () => Gz,
      v: () => cz,
      z: () => Zz
    });
    var Ez = bz(6283),
      nz = bz(158),
      iz = bz(4313);
    const lz = "/shader-packs",
      Mz = `${lz}/publish`;

    function tz(zz) {
      return `${lz}/${encodeURIComponent(zz)}`
    }
    let Hz = null;

    function Oz(zz) {
      Hz = zz
    }

    function pz() {
      return Hz
    }

    function dz() {
      Hz = null
    }

    function Fz(zz) {
      return zz.playerHasRank("developer") || zz.playerHasRank("admin")
    }
    const Zz = ["terrain", "water", "models", "sunShadows", "strict"],
      Rz = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Kz(zz, uz) {
      return zz.withFeatures.includes(uz) ? "with" : zz.withoutFeatures.includes(uz) ? "without" : null
    }

    function wz(zz) {
      return null === zz ? "with" : "with" === zz ? "without" : null
    }

    function Xz(zz) {
      return "with" === zz ? "only" : null === zz ? "include" : void 0
    }

    function fz(zz, uz) {
      const bz = Kz(zz, uz),
        Ez = zz => zz.filter((zz => zz !== uz));
      return {
        withFeatures: null === bz ? [...zz.withFeatures, uz] : Ez(zz.withFeatures),
        withoutFeatures: "with" === bz ? [...zz.withoutFeatures, uz] : Ez(zz.withoutFeatures)
      }
    }
    const sz = "section",
      rz = "sort",
      oz = "filters",
      Nz = "q",
      vz = "banned",
      xz = "popular",
      Jz = "strict";

    function Az(zz) {
      var uz, bz, nz;
      const lz = zz.get(sz),
        Mz = (null !== (uz = zz.get(oz)) && void 0 !== uz ? uz : Jz).split(","),
        tz = zz.get(vz);
      return {
        section: "favourites" === lz || "mine" === lz ? lz : "explore",
        sort: null !== (bz = Ez.u.find((uz => uz === zz.get(rz)))) && void 0 !== bz ? bz : xz,
        withFeatures: Zz.filter((zz => Mz.includes(zz) && !Mz.includes(`-${zz}`))),
        withoutFeatures: Zz.filter((zz => Mz.includes(`-${zz}`))),
        searchQuery: (null === (nz = zz.get(Nz)) || void 0 === nz ? void 0 : nz.slice(0, Ez.G)) || null,
        pageNumber: (0, iz.h)(zz.get(iz.e)),
        banned: "only" === tz ? "with" : "include" === tz ? null : "without"
      }
    }

    function Tz(zz, uz) {
      var bz;
      const Ez = az(uz);
      (0, iz.k)(zz, sz, "explore" === uz.section ? null : uz.section), (0, iz.k)(zz, rz, uz.sort === xz ? null : uz.sort), (0, iz.k)(zz, oz, Ez === Jz ? null : Ez), (0, iz.k)(zz, Nz, uz.searchQuery), (0, iz.k)(zz, vz, null !== (bz = Xz(uz.banned)) && void 0 !== bz ? bz : null), (0, iz.m)(zz, uz.pageNumber)
    }

    function Lz(zz) {
      const uz = new URLSearchParams;
      return Tz(uz, {
        section: "explore",
        sort: xz,
        withFeatures: "strict" === zz ? [zz] : [zz, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${lz}?${uz.toString()}`
    }

    function Pz(zz) {
      return az(zz) === Jz
    }

    function Gz(zz) {
      return null !== zz.searchQuery || "with" === zz.banned || az(zz) !== Jz
    }

    function az(zz) {
      return Zz.flatMap((uz => {
        const bz = Kz(zz, uz);
        return "with" === bz ? [uz] : "without" === bz ? [`-${uz}`] : []
      })).join(",")
    }
    const Vz = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      mz = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function qz(zz) {
      return Math.round(100 * Math.max(0, 1 - 1 / zz))
    }

    function hz(zz, uz, bz, nz) {
      const iz = [];
      zz.isBanned && iz.push({
        tone: "warning",
        text: nz("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: lz
      } = zz;
      if (null === zz.brokenError || lz && !lz.error || iz.push({
          tone: "warning",
          text: nz("shaderPackListing:ownerBroken"),
          detail: zz.brokenError
        }), null !== lz && void 0 !== lz && lz.error) iz.push({
        tone: "warning",
        text: nz(uz ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Ez.g)(lz.error) ? null : lz.error
      });
      else if (lz) {
        const zz = null === lz.renderNotBefore ? 0 : lz.renderNotBefore - bz,
          Ez = String(Math.ceil(zz / 6e4)),
          Mz = nz(uz ? zz > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : zz > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Ez
          });
        iz.push({
          tone: "info",
          text: Mz,
          detail: null
        })
      }
      return zz.listed || iz.push({
        tone: "info",
        text: nz("shaderPackListing:ownerUnlisted"),
        detail: null
      }), iz
    }

    function Uz(zz) {
      return Math.max(1, Math.round(zz / 1024))
    }

    function cz(zz, uz, bz) {
      return zz instanceof nz.c && zz.errorMessageForUser ? zz.errorMessageForUser : uz(bz)
    }
  },
  6283: (zz, uz, bz) => {
    bz.d(uz, {
      B: () => Ez,
      D: () => dz,
      G: () => Oz,
      K: () => fz,
      M: () => pz,
      O: () => Hz,
      b: () => Fz,
      e: () => Rz,
      f: () => Zz,
      g: () => Xz,
      i: () => rz,
      l: () => tz,
      m: () => nz,
      q: () => sz,
      u: () => iz,
      y: () => Mz,
      z: () => lz
    });
    const Ez = ["forest", "desert", "water", "night", "cave"];
    const nz = {
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
      iz = ["popular", "updated", "newest"],
      lz = 3,
      Mz = 32,
      tz = 300;

    function Hz(zz, uz) {
      return zz.slice(0, uz).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Oz = 64,
      pz = 512,
      dz = 18e5;
    const Fz = "Bloxdhub",
      Zz = "https://bloxdhub.com/shaders";

    function Rz(zz) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(zz)}`
    }
    const Kz = "Screenshot generation failed.",
      wz = "Its screenshots couldn't be generated:";

    function Xz(zz) {
      var uz;
      return zz === Kz || null !== (uz = null === zz || void 0 === zz ? void 0 : zz.startsWith(wz)) && void 0 !== uz && uz
    }

    function fz(zz, uz) {
      return `shaderPacks/${zz}/${uz}.json`
    }

    function sz(zz, uz, bz, Ez) {
      return null === uz.renderId ? rz(zz, uz.baselineVersion, bz, Ez) : `${zz}/${function(zz,uz,bz,Ez){return`shaderPacks/${zz}/${uz}/${bz}-${Ez}.webp`}(uz.packId,uz.renderId,bz,Ez)}`
    }

    function rz(zz, uz, bz, Ez) {
      return `${zz}/${function(zz,uz,bz){return`shaderPacks/baseline/${zz}/${uz}-${bz}.webp`}(uz,bz,Ez)}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);