export const id = 122;
export const ids = [122];
export const modules = {
  40169: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      ShaderPackCategory: () => cz
    });
    var Fz = sz(65),
      Wz = sz(1493),
      Xz = sz(1419),
      Oz = sz(1483),
      oz = sz(1173),
      vz = sz(106),
      Uz = sz(30),
      Kz = sz(1571),
      uz = sz(6193),
      Nz = sz(290),
      bz = sz(6234),
      wz = sz(6225),
      Dz = sz(6237),
      gz = sz(6122),
      Hz = sz(4609),
      Bz = sz(6174),
      Pz = sz(6188),
      rz = sz(3135);

    function Yz(zz, tz) {
      const sz = (0, bz.storedPackOutcome)(zz, tz);
      return "none" !== sz.kind || "noCompiler" === sz.reason
    }
    var xz = sz(1020),
      mz = sz.n(xz),
      Jz = sz(6180),
      Iz = sz(1036),
      Cz = sz(6169),
      ez = sz(1087);
    const Zz = {
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

    function Gz(zz, tz) {
      return "failedRecheck" === zz && tz.listing ? "shaderPack:statusFailedRecheckListed" : Zz[zz]
    }

    function Tz(zz) {
      let {
        stored: tz,
        checking: sz,
        webGpuUsable: Fz,
        changePending: Wz,
        compiler: Xz,
        t: Oz
      } = zz;
      const oz = function(zz, tz, sz, Fz, Wz) {
          const Xz = (0, bz.storedPackOutcome)(zz, Wz);
          return "none" === Xz.kind ? "noCompiler" === Xz.reason ? tz ? "checking" : "noCompiler" : "otherApiVersion" === Xz.reason ? "wrongApiVersion" : "failed" : (0, rz.i)() ? "harnessBuild" : "blocked" === Xz.kind ? (0, bz.shaderPackNeedsCheck)(zz, Wz) ? tz ? "checking" : !1 === sz ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === sz ? "offNoWebGpu" : Fz ? "readyAfterReload" : "ready"
        }(tz, sz, Fz, Wz, Xz),
        vz = "failed" === oz || "failedRecheck" === oz,
        Uz = vz || "wrongApiVersion" === oz || "noCompiler" === oz,
        Kz = "ready" === oz || "readyAfterReload" === oz ? tz.validation.offInStrict : [];
      return (0, ez.jsxs)(ez.Fragment, {
        children: [(0, ez.jsxs)("div", {
          className: mz()("ShaderPackStatus", {
            Ready: "ready" === oz,
            Failed: Uz
          }),
          children: ["ready" === oz && (0, ez.jsx)(Iz.c, {
            name: "circle-check"
          }), Uz && (0, ez.jsx)(Iz.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === oz ? (0, rz.e)() : Oz(Gz(oz, tz), {
            packVersion: String(tz.manifest.apiVersion),
            version: String(Jz.e)
          })]
        }), vz && (0, ez.jsx)(Cz.c, {
          diagnostics: tz.validation.errors,
          more: tz.validation.moreErrors,
          t: Oz
        }), Kz.length > 0 && (0, ez.jsxs)(ez.Fragment, {
          children: [(0, ez.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, ez.jsx)(Iz.c, {
              name: "triangle-exclamation"
            }), Oz("shaderPack:offInStrict")]
          }), (0, ez.jsx)(Cz.c, {
            diagnostics: Kz,
            t: Oz
          })]
        })]
      })
    }

    function cz(zz) {
      let {
        setApplySettingsCallback: tz
      } = zz;
      const {
        t: sz
      } = (0, oz.B)(), [Wz, Oz] = (0, Fz.useState)(null), [Uz, Kz] = (0, Fz.useState)(null), [rz, xz] = (0, Fz.useState)(null), [mz] = (0, Fz.useState)(Nz.g), [Jz, Iz] = (0, Fz.useState)(!0), [Cz, Zz] = (0, Fz.useState)(!1), {
        loading: Gz,
        error: cz,
        setError: Az,
        onFiles: yz
      } = (0, Pz.d)((async zz => {
        const tz = await (0, uz.loadPageShaderPackCompiler)();
        if (!tz) return void Az(sz("shaderPack:compilerUnavailable"));
        Kz(tz);
        const Fz = (0, bz.toStoredShaderPack)(zz, await (0, wz.f)(tz, zz.files));
        await (0, bz.saveShaderPack)(Fz, tz) ? (Oz(Fz), Mz(Wz, Fz, tz)) : Az(sz("shaderPack:saveFailed"))
      }));

      function Mz(zz, sz, Fz) {
        (function(zz, tz, sz, Fz) {
          return sz || Yz(zz, Fz) || Yz(tz, Fz)
        })(zz, sz, (0, bz.isShaderPackChangePending)(), Fz) && ((0, bz.markShaderPackChangePending)(), tz((() => Hz.h)))
      }
      return (0, Fz.useEffect)((() => {
        let zz = !1;
        return async function() {
          const tz = (0, vz.hasUsableWebGpuAdapter)(),
            sz = await (0, Dz.g)();
          if (zz) return;
          Oz(sz), Zz(!0), Iz(!1);
          const Fz = null !== sz ? (0, uz.loadPageShaderPackCompiler)() : null,
            Wz = await tz;
          if (zz) return;
          xz(Wz);
          const Xz = await Fz;
          if (!zz && (Kz(Xz), null !== sz && Wz && null !== Xz && (0, bz.shaderPackNeedsCheck)(sz, Xz))) {
            const tz = await (0, wz.d)(sz, Xz);
            zz || Oz((zz => zz === sz ? tz : zz))
          }
        }().catch((tz => {
          console.error("Failed to load the stored shader pack", tz), zz || Az(sz("shaderPack:unexpectedError"))
        })).finally((() => {
          zz || (Iz(!1), Zz(!1))
        })), () => {
          zz = !0
        }
      }), []), (0, ez.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, ez.jsx)("div", {
          className: "ShaderPackIntro",
          children: sz("shaderPack:intro")
        }), (0, ez.jsx)(jz, {
          to: gz.db,
          className: "ShaderPackBrowseLink",
          children: (0, ez.jsx)(Xz.p, {
            className: "ShaderPackBrowseButton",
            children: sz("shaderPackListing:browse")
          })
        }), !1 === rz && (0, ez.jsx)("div", {
          className: "SettingsBoxWarning",
          children: sz(mz ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== cz && (0, ez.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [sz("general:error"), ": ", cz]
        }), Wz && (0, ez.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, ez.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, ez.jsxs)("div", {
              children: [(0, ez.jsx)("div", {
                className: "ShaderPackName",
                children: Wz.manifest.name
              }), Wz.manifest.author && (0, ez.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, Bz.h)(sz, "shaderPack:byAuthor", {
                  author: Wz.manifest.author
                })
              }), Wz.manifest.description && (0, ez.jsx)("div", {
                className: "ShaderPackDescription",
                children: Wz.manifest.description
              }), Wz.listing && (0, ez.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, ez.jsx)(jz, {
                  to: (0, gz.jb)(Wz.listing.packId),
                  className: "ShaderPackListingLink",
                  children: sz("shaderPackListing:openPackPage")
                })
              })]
            }), (0, ez.jsx)(Xz.K, {
              disabled: Jz || Gz,
              onClick: async function() {
                Iz(!0), Az(null), await (0, bz.removeShaderPack)(), Oz(null), Iz(!1), Mz(Wz, null, Uz)
              },
              children: sz("shaderPack:removePack")
            })]
          }), (0, ez.jsx)(Tz, {
            stored: Wz,
            checking: Cz,
            webGpuUsable: rz,
            changePending: (0, bz.isShaderPackChangePending)(),
            compiler: Uz,
            t: sz
          })]
        }), (0, ez.jsx)(Pz.b, {
          busy: Jz || Gz || Cz,
          disabled: Jz || Gz || Cz || !0 !== rz,
          onFiles: yz
        })]
      })
    }

    function jz(zz) {
      let {
        to: tz,
        className: sz,
        children: Fz
      } = zz;
      const {
        gameState: Xz
      } = (0, Uz.h)(["gameState"]), {
        pathname: oz,
        search: vz
      } = (0, Wz.s)(), uz = "landingPage" !== Xz && "studio" !== Xz;
      return (0, ez.jsx)(Oz.LinkPreserveSearch, {
        to: tz,
        className: sz,
        target: uz ? "_blank" : void 0,
        onClick: () => {
          uz || ((0, gz.N)(`${oz}${vz}`), (0, Kz.h)())
        },
        children: Fz
      })
    }
  },
  6122: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Qz,
      E: () => wz,
      H: () => Hz,
      K: () => ez,
      N: () => Kz,
      Q: () => Gz,
      U: () => Dz,
      Y: () => hz,
      ab: () => Mz,
      d: () => Bz,
      db: () => Oz,
      h: () => Iz,
      hb: () => dz,
      jb: () => vz,
      kb: () => oz,
      l: () => gz,
      mb: () => Az,
      p: () => Nz,
      qb: () => yz,
      s: () => uz,
      t: () => Tz,
      u: () => bz,
      ub: () => Pz,
      wb: () => Zz,
      x: () => cz
    });
    var Fz = sz(6129),
      Wz = sz(161),
      Xz = sz(4194);
    const Oz = "/shader-packs",
      oz = `${Oz}/publish`;

    function vz(zz) {
      return `${Oz}/${encodeURIComponent(zz)}`
    }
    let Uz = null;

    function Kz(zz) {
      Uz = zz
    }

    function uz() {
      return Uz
    }

    function Nz() {
      Uz = null
    }

    function bz(zz) {
      return zz.playerHasRank("developer") || zz.playerHasRank("admin")
    }
    const wz = ["terrain", "water", "models", "sunShadows", "strict"],
      Dz = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function gz(zz, tz) {
      return zz.withFeatures.includes(tz) ? "with" : zz.withoutFeatures.includes(tz) ? "without" : null
    }

    function Hz(zz) {
      return null === zz ? "with" : "with" === zz ? "without" : null
    }

    function Bz(zz) {
      return "with" === zz ? "only" : null === zz ? "include" : void 0
    }

    function Pz(zz, tz) {
      const sz = gz(zz, tz),
        Fz = zz => zz.filter((zz => zz !== tz));
      return {
        withFeatures: null === sz ? [...zz.withFeatures, tz] : Fz(zz.withFeatures),
        withoutFeatures: "with" === sz ? [...zz.withoutFeatures, tz] : Fz(zz.withoutFeatures)
      }
    }
    const rz = "section",
      Yz = "sort",
      xz = "filters",
      mz = "q",
      Jz = "banned",
      Iz = "popular",
      Cz = "strict";

    function ez(zz) {
      var tz, sz, Wz;
      const Oz = zz.get(rz),
        oz = (null !== (tz = zz.get(xz)) && void 0 !== tz ? tz : Cz).split(","),
        vz = zz.get(Jz);
      return {
        section: "favourites" === Oz || "mine" === Oz ? Oz : "explore",
        sort: null !== (sz = Fz.u.find((tz => tz === zz.get(Yz)))) && void 0 !== sz ? sz : Iz,
        withFeatures: wz.filter((zz => oz.includes(zz) && !oz.includes(`-${zz}`))),
        withoutFeatures: wz.filter((zz => oz.includes(`-${zz}`))),
        searchQuery: (null === (Wz = zz.get(mz)) || void 0 === Wz ? void 0 : Wz.slice(0, Fz.G)) || null,
        pageNumber: (0, Xz.e)(zz.get(Xz.b)),
        banned: "only" === vz ? "with" : "include" === vz ? null : "without"
      }
    }

    function Zz(zz, tz) {
      var sz;
      const Fz = jz(tz);
      (0, Xz.f)(zz, rz, "explore" === tz.section ? null : tz.section), (0, Xz.f)(zz, Yz, tz.sort === Iz ? null : tz.sort), (0, Xz.f)(zz, xz, Fz === Cz ? null : Fz), (0, Xz.f)(zz, mz, tz.searchQuery), (0, Xz.f)(zz, Jz, null !== (sz = Bz(tz.banned)) && void 0 !== sz ? sz : null), (0, Xz.g)(zz, tz.pageNumber)
    }

    function Gz(zz) {
      const tz = new URLSearchParams;
      return Zz(tz, {
        section: "explore",
        sort: Iz,
        withFeatures: "strict" === zz ? [zz] : [zz, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Oz}?${tz.toString()}`
    }

    function Tz(zz) {
      return jz(zz) === Cz
    }

    function cz(zz) {
      return null !== zz.searchQuery || "with" === zz.banned || jz(zz) !== Cz
    }

    function jz(zz) {
      return wz.flatMap((tz => {
        const sz = gz(zz, tz);
        return "with" === sz ? [tz] : "without" === sz ? [`-${tz}`] : []
      })).join(",")
    }
    const Az = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      yz = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Mz(zz) {
      return Math.round(100 * Math.max(0, 1 - 1 / zz))
    }

    function dz(zz, tz, sz, Wz) {
      const Xz = [];
      zz.isBanned && Xz.push({
        tone: "warning",
        text: Wz("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Oz
      } = zz;
      if (null === zz.brokenError || Oz && !Oz.error || Xz.push({
          tone: "warning",
          text: Wz("shaderPackListing:ownerBroken"),
          detail: zz.brokenError
        }), null !== Oz && void 0 !== Oz && Oz.error) Xz.push({
        tone: "warning",
        text: Wz(tz ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Fz.j)(Oz.error) ? null : Oz.error
      });
      else if (Oz) {
        const zz = null === Oz.renderNotBefore ? 0 : Oz.renderNotBefore - sz,
          Fz = String(Math.ceil(zz / 6e4)),
          oz = Wz(tz ? zz > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : zz > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Fz
          });
        Xz.push({
          tone: "info",
          text: oz,
          detail: null
        })
      }
      return zz.listed || Xz.push({
        tone: "info",
        text: Wz("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Xz
    }

    function hz(zz) {
      return Math.max(1, Math.round(zz / 1024))
    }

    function Qz(zz, tz, sz) {
      return zz instanceof Wz.e && zz.errorMessageForUser ? zz.errorMessageForUser : tz(sz)
    }
  },
  6129: (zz, tz, sz) => {
    sz.d(tz, {
      A: () => Oz,
      B: () => Fz,
      F: () => Nz,
      G: () => Kz,
      I: () => Pz,
      J: () => uz,
      N: () => Uz,
      b: () => bz,
      f: () => Dz,
      i: () => wz,
      j: () => Bz,
      m: () => Yz,
      p: () => vz,
      q: () => Wz,
      r: () => rz,
      u: () => Xz,
      w: () => oz
    });
    const Fz = ["forest", "desert", "water", "night", "cave"];
    const Wz = {
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
      Xz = ["popular", "updated", "newest"],
      Oz = 3,
      oz = 32,
      vz = 300;

    function Uz(zz, tz) {
      return zz.slice(0, tz).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Kz = 64,
      uz = 512,
      Nz = 18e5;
    const bz = "Bloxdhub",
      wz = "https://bloxdhub.com/shaders";

    function Dz(zz) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(zz)}`
    }
    const gz = "Screenshot generation failed.",
      Hz = "Its screenshots couldn't be generated:";

    function Bz(zz) {
      var tz;
      return zz === gz || null !== (tz = null === zz || void 0 === zz ? void 0 : zz.startsWith(Hz)) && void 0 !== tz && tz
    }

    function Pz(zz, tz) {
      return `shaderPacks/${zz}/${tz}.json`
    }

    function rz(zz, tz, sz, Fz) {
      return null === tz.renderId ? Yz(zz, tz.baselineVersion, sz, Fz) : `${zz}/${function(zz,tz,sz,Fz){return`shaderPacks/${zz}/${tz}/${sz}-${Fz}.webp`}(tz.packId,tz.renderId,sz,Fz)}`
    }

    function Yz(zz, tz, sz, Fz) {
      return `${zz}/${function(zz,tz,sz){return`shaderPacks/baseline/${zz}/${tz}-${sz}.webp`}(tz,sz,Fz)}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);