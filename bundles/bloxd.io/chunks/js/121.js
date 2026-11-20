export const id = 121;
export const ids = [121];
export const modules = {
  6138: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(1173),
      Oz = sz(1087);

    function oz(zz) {
      let {
        item: tz,
        className: sz
      } = zz;
      const {
        t: Fz
      } = (0, Xz.B)();
      return null === tz.renderId || tz.previewsOutdated ? (0, Oz.jsx)("div", {
        className: Wz()("ShaderPackPreviewsNotice", sz),
        children: (0, Oz.jsx)("span", {
          children: Fz(null === tz.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6153: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(6129),
      Oz = sz(1173),
      oz = sz(6122),
      vz = sz(1087);

    function Uz(zz) {
      let {
        selected: tz,
        onSelect: sz,
        imageUrl: Fz
      } = zz;
      const {
        t: Uz
      } = (0, Oz.B)();
      return (0, vz.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: Xz.B.map((zz => {
          const Xz = Fz(zz);
          return (0, vz.jsxs)("button", {
            type: "button",
            "aria-pressed": zz === tz,
            className: Wz()("ShaderPackViewOption", {
              Selected: zz === tz
            }),
            onClick: () => {
              sz(zz)
            },
            children: [null !== Xz && (0, vz.jsx)("img", {
              src: Xz,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, vz.jsx)("span", {
              className: "SmallTextBold",
              children: Uz(oz.qb[zz])
            })]
          }, zz)
        }))
      })
    }
  },
  6143: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Nz,
      e: () => bz,
      f: () => uz,
      g: () => wz
    });
    var Fz = sz(65),
      Wz = sz(6129),
      Xz = sz(1466),
      Oz = sz(6122),
      oz = sz(6151),
      vz = sz(1116);
    const Uz = "shaderPackListingView",
      Kz = "shaderPackListingFilterOpen";

    function uz() {
      var zz;
      const [tz, sz] = (0, oz.c)(Uz, Wz.B[0]);
      return [null !== (zz = Wz.B.find((zz => zz === tz))) && void 0 !== zz ? zz : Wz.B[0], sz]
    }

    function Nz() {
      (0, Fz.useEffect)((() => () => {
        window.location.pathname.startsWith(Oz.db) || (0, Oz.p)()
      }), [])
    }

    function bz() {
      return (0, oz.c)(Kz, !1)
    }

    function wz() {
      const {
        userContext: zz,
        isUserContextUpdating: tz
      } = (0, vz.b)(), [sz, Wz] = (0, Fz.useState)(null), Oz = (0, Fz.useRef)(new Set);

      function oz(zz, tz) {
        Wz((sz => {
          const Fz = new Set(sz);
          return tz ? Fz.add(zz) : Fz.delete(zz), Fz
        }))
      }
      return (0, Fz.useEffect)((() => {
        if (tz) return;
        let sz = !1;
        return Xz.d.getFavouriteShaderPacks(zz).then((zz => {
          sz || Wz(new Set(zz))
        })).catch((zz => {
          console.error("Failed to get favourite shader packs", zz), sz || Wz(new Set)
        })), () => {
          sz = !0
        }
      }), [zz, tz]), {
        isFavourite: zz => null === sz ? null : sz.has(zz),
        toggle: function(tz) {
          if (null === sz || Oz.current.has(tz)) return;
          Oz.current.add(tz);
          const Fz = !sz.has(tz);
          oz(tz, Fz), (Fz ? Xz.d.favouriteShaderPack(zz, tz) : Xz.d.unfavouriteShaderPack(zz, tz)).catch((zz => {
            console.error("Failed to change a favourite shader pack", zz), oz(tz, !Fz)
          })).finally((() => {
            Oz.current.delete(tz)
          }))
        }
      }
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
  6151: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(65),
      Wz = sz(44);

    function Xz(zz, tz) {
      var sz;
      const [Xz, Oz] = (0, Fz.useState)(null !== (sz = Wz.f.getItem(zz)) && void 0 !== sz ? sz : tz);
      return [Xz, tz => {
        Wz.f.setItem(zz, tz), Oz(tz)
      }]
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