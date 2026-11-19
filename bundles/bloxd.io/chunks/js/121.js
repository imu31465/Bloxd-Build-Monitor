export const id = 121;
export const ids = [121];
export const modules = {
  6286: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(1181),
      lz = bz(1089);

    function Mz(zz) {
      let {
        item: uz,
        className: bz
      } = zz;
      const {
        t: Ez
      } = (0, iz.F)();
      return null === uz.renderId || uz.previewsOutdated ? (0, lz.jsx)("div", {
        className: nz()("ShaderPackPreviewsNotice", bz),
        children: (0, lz.jsx)("span", {
          children: Ez(null === uz.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6296: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Hz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(6283),
      lz = bz(1181),
      Mz = bz(6274),
      tz = bz(1089);

    function Hz(zz) {
      let {
        selected: uz,
        onSelect: bz,
        imageUrl: Ez
      } = zz;
      const {
        t: Hz
      } = (0, lz.F)();
      return (0, tz.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: iz.B.map((zz => {
          const iz = Ez(zz);
          return (0, tz.jsxs)("button", {
            type: "button",
            "aria-pressed": zz === uz,
            className: nz()("ShaderPackViewOption", {
              Selected: zz === uz
            }),
            onClick: () => {
              bz(zz)
            },
            children: [null !== iz && (0, tz.jsx)("img", {
              src: iz,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, tz.jsx)("span", {
              className: "SmallTextBold",
              children: Hz(Mz.db[zz])
            })]
          }, zz)
        }))
      })
    }
  },
  6289: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => dz,
      g: () => Fz,
      k: () => pz,
      m: () => Zz
    });
    var Ez = bz(56),
      nz = bz(6283),
      iz = bz(1473),
      lz = bz(6274),
      Mz = bz(6291),
      tz = bz(1114);
    const Hz = "shaderPackListingView",
      Oz = "shaderPackListingFilterOpen";

    function pz() {
      var zz;
      const [uz, bz] = (0, Mz.d)(Hz, nz.B[0]);
      return [null !== (zz = nz.B.find((zz => zz === uz))) && void 0 !== zz ? zz : nz.B[0], bz]
    }

    function dz() {
      (0, Ez.useEffect)((() => () => {
        window.location.pathname.startsWith(lz.P) || (0, lz.j)()
      }), [])
    }

    function Fz() {
      return (0, Mz.d)(Oz, !1)
    }

    function Zz() {
      const {
        userContext: zz,
        isUserContextUpdating: uz
      } = (0, tz.c)(), [bz, nz] = (0, Ez.useState)(null), lz = (0, Ez.useRef)(new Set);

      function Mz(zz, uz) {
        nz((bz => {
          const Ez = new Set(bz);
          return uz ? Ez.add(zz) : Ez.delete(zz), Ez
        }))
      }
      return (0, Ez.useEffect)((() => {
        if (uz) return;
        let bz = !1;
        return iz.c.getFavouriteShaderPacks(zz).then((zz => {
          bz || nz(new Set(zz))
        })).catch((zz => {
          console.error("Failed to get favourite shader packs", zz), bz || nz(new Set)
        })), () => {
          bz = !0
        }
      }), [zz, uz]), {
        isFavourite: zz => null === bz ? null : bz.has(zz),
        toggle: function(uz) {
          if (null === bz || lz.current.has(uz)) return;
          lz.current.add(uz);
          const Ez = !bz.has(uz);
          Mz(uz, Ez), (Ez ? iz.c.favouriteShaderPack(zz, uz) : iz.c.unfavouriteShaderPack(zz, uz)).catch((zz => {
            console.error("Failed to change a favourite shader pack", zz), Mz(uz, !Ez)
          })).finally((() => {
            lz.current.delete(uz)
          }))
        }
      }
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
  6291: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(56),
      nz = bz(33);

    function iz(zz, uz) {
      var bz;
      const [iz, lz] = (0, Ez.useState)(null !== (bz = nz.g.getItem(zz)) && void 0 !== bz ? bz : uz);
      return [iz, uz => {
        nz.g.setItem(zz, uz), lz(uz)
      }]
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