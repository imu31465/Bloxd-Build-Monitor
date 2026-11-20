export const id = 260;
export const ids = [260];
export const modules = {
  39861: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      e: () => Oz
    });
    var Fz = sz(1868);
    let Wz = !1;

    function Xz() {
      Wz = !0
    }

    function Oz() {
      Wz && (Wz = !1, (0, Fz.b)())
    }
  },
  39867: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz,
      e: () => Oz
    });
    var Fz = sz(2970);
    let Wz = null,
      Xz = null;

    function Oz() {
      return Xz ??= sz.e(208).then((() => sz(35839))).then((zz => {
        let {
          ITEM_SPRITES: tz,
          ITEM_SPRITES_WITHOUT_FILE: sz,
          ITEM_FILES_WITHOUT_SPRITE: Xz
        } = zz;
        Wz = function(zz, tz, sz) {
          const Wz = new Set,
            Xz = (0, Fz.t)(tz);
          let Oz = 0;
          for (const [Fz, oz] of zz.entries()) Fz === Xz[Oz] ? Oz++ : Wz.add(oz);
          if ("" !== sz)
            for (const oz of sz.split(Fz.o)) Wz.add(oz);
          return Wz
        }(tz.split(Fz.o), sz, Xz)
      }), (zz => {
        throw Xz = null, zz
      })), Xz
    }

    function oz(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = Wz) || void 0 === sz ? void 0 : sz.has(zz)) && void 0 !== tz && tz
    }
  },
  39853: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      loadIcons: () => ez,
      setIconFileOverrides: () => Zz,
      wasmIconLookups: () => hz,
      wasmIconQueries: () => dz
    });
    var Fz = sz(4133),
      Wz = sz(4105),
      Xz = sz(39861),
      Oz = sz(1868),
      oz = sz(1857),
      vz = sz(2965),
      Uz = sz(2970);
    let Kz = null,
      uz = null;

    function Nz(zz) {
      const tz = zz.startsWith(Uz.k),
        [sz, Fz = sz, Wz = sz] = (tz ? zz.slice(Uz.k.length) : zz).split(Uz.j);
      return {
        top: sz,
        left: Fz,
        right: Wz,
        half: tz
      }
    }

    function bz(zz) {
      const tz = null === Kz ? void 0 : (0, vz.b)(zz),
        sz = void 0 === tz ? 0 : Kz.codes[tz];
      return 0 === sz ? void 0 : Kz.pool[sz - 1]
    }
    var wz = sz(2962),
      Dz = sz(4094),
      gz = sz(4126),
      Hz = sz(39864);
    const Bz = "item:";
    let Pz = null,
      rz = null,
      Yz = null,
      xz = null,
      mz = !1,
      Jz = !1,
      Iz = null,
      Cz = 0;

    function ez() {
      return Jz || (Jz = !0, (0, gz.h)().then((zz => {
        zz && (0, Oz.b)()
      }))), Yz ??= Promise.all([(0, wz.g)(), (uz ??= sz.e(1).then((() => sz(41694))).then((zz => {
        let {
          BLOCK_FACE_RUNS: tz,
          BLOCK_FACES: sz,
          MAX_FACE_ITEM_ID: Fz
        } = zz;
        Kz = {
          codes: (0, Uz.x)(tz, Fz + 1),
          pool: sz.split(Uz.o).map(Nz)
        }
      }), (zz => {
        throw uz = null, zz
      })), uz), (0, Hz.f)(), sz.e(189).then((() => sz(8866)))]).then((zz => {
        let [, , tz, sz] = zz;
        tz.followBundledTextures(), Pz = tz, rz = sz, (0, Oz.b)()
      }), (zz => {
        Yz = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", zz)
      })), Yz
    }

    function Zz(zz) {
      Iz = zz, Cz++, (0, Oz.b)()
    }

    function Gz(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = Iz) || void 0 === sz ? void 0 : sz.itemSprite(zz)) && void 0 !== tz ? tz : Pz.itemSpriteUrl(zz)
    }

    function Tz(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = Iz) || void 0 === sz ? void 0 : sz.blockTexture(zz)) && void 0 !== tz ? tz : Pz.blockTextureUrl(zz)
    }

    function cz(zz) {
      var tz;
      return null !== (tz = (0, wz.e)(zz)) && void 0 !== tz ? tz : zz
    }

    function jz(zz, tz) {
      var sz, Fz, Wz;
      return null !== (sz = null !== (Fz = null !== (Wz = Tz(zz)) && void 0 !== Wz ? Wz : null === tz || void 0 === tz ? void 0 : tz.rotated[zz]) && void 0 !== Fz ? Fz : null === tz || void 0 === tz ? void 0 : tz.animated[zz]) && void 0 !== sz ? sz : Pz.notFoundUrl()
    }

    function Az(zz) {
      return void 0 !== (0, vz.b)(zz) ? zz : /^[1-9][0-9]*$/.test(zz) ? (0, vz.d)(Number(zz)) : void 0
    }

    function yz(zz) {
      var tz;
      if (zz.startsWith(Bz)) {
        var sz;
        const tz = (0, wz.e)(zz.slice(5));
        return null !== (sz = void 0 === tz ? null : Gz(tz)) && void 0 !== sz ? sz : Pz.notFoundUrl()
      }
      return null !== (tz = Pz.particleUrl(zz)) && void 0 !== tz ? tz : Pz.notFoundUrl()
    }

    function Mz(zz, tz) {
      return "StairsBlock" === zz ? zz : tz ? "SlabBlock" : "CubeBlock"
    }
    const dz = {
        async blockIcon(zz) {
          var tz;
          let {
            name: Fz,
            size: Wz,
            lineWidth: Xz
          } = zz;
          await ez();
          const oz = null !== (tz = Az(Fz)) && void 0 !== tz ? tz : Fz,
            Uz = (0, gz.b)(oz, Wz, Xz);
          if (null !== Uz) return Uz;
          const Kz = bz(oz),
            uz = (0, vz.b)(oz),
            Nz = void 0 === uz || null === rz ? void 0 : rz.itemTypeNameOf(uz);
          if (null === Pz || void 0 === Kz) return "";
          const wz = [Kz.top, Kz.left, Kz.right].some((zz => null === Tz(zz))),
            Hz = wz ? await (xz ??= sz.e(201).then((() => sz(33845))).then((zz => (mz && (mz = !1, (0, Oz.b)()), {
              rotated: zz.rotatedBlockTextures,
              animated: zz.animatedBlockTextures
            })), (zz => (xz = null, mz = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", zz), null))), xz) : null;
          if (wz && null === Hz) return "";
          const Bz = {
              top: jz(Kz.top, Hz),
              left: jz(Kz.left, Hz),
              right: jz(Kz.right, Hz),
              itemType: Mz(Nz, Kz.half)
            },
            Yz = 0 === Cz ? oz : `${oz}#${Cz}`;
          return (await (0, Dz.d)()).drawBlockIconUrl(Yz, Wz, Xz, (() => Bz))
        }
      },
      hz = {
        itemIcon: function(zz) {
          var tz, sz;
          if (null === Pz) return ez(), oz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
          if ((0, Wz.h)(zz)) return {
            kind: "icon",
            url: null !== (sz = Pz.ingameIconUrl(zz)) && void 0 !== sz ? sz : Pz.notFoundUrl()
          };
          if (zz.startsWith(Wz.e)) return {
            kind: "icon",
            url: yz(zz.slice(Wz.e.length))
          };
          if (0 === (0, vz.h)()) return (0, Xz.d)(), oz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
          const Oz = null !== (tz = Az(zz)) && void 0 !== tz ? tz : zz,
            Uz = (0, vz.b)(Oz),
            Kz = void 0 === Uz ? void 0 : rz.itemTypeNameOf(Uz);
          if (void 0 !== bz(Oz)) return {
            kind: "drawnBlock"
          };
          const uz = function(zz) {
            var tz;
            return null !== (tz = Gz(cz(zz))) && void 0 !== tz ? tz : Pz.notFoundUrl()
          }(Oz);
          if ((0, gz.e)(Oz) && ! function(zz) {
              return null !== Iz && (null !== Iz.itemSprite(cz(zz)) || null !== Iz.model(zz))
            }(Oz)) return {
            kind: "model",
            url: uz
          };
          if ("Gun" === Kz) return {
            kind: "gun",
            url: uz
          };
          if (void 0 !== Uz && "GrayscaleArmour" === rz.itemTypeOf(Uz) || Object.hasOwn(Fz.c, Oz)) {
            var Nz;
            const tz = null !== (Nz = (0, Fz.e)(zz)) && void 0 !== Nz ? Nz : (0, Fz.e)(Oz);
            if (tz) return {
              kind: "item",
              url: uz,
              tint: tz
            }
          }
          return {
            kind: "item",
            url: uz
          }
        },
        hasIcon: function(zz) {
          return void 0 !== Az(zz) || (0, Wz.h)(zz) || zz.startsWith(Wz.e)
        },
        isItemName: function(zz) {
          return void 0 !== Az(zz)
        }
      }
  },
  39864: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      f: () => oz
    });
    var Fz = sz(39867);
    let Wz = null,
      Xz = null;

    function Oz() {
      return Wz ??= sz.e(58).then((() => sz(41697))).catch((zz => {
        throw Wz = null, zz
      })), Wz
    }

    function oz() {
      return Xz ??= Promise.all([Oz(), (0, Fz.e)()]).then((zz => {
        let [tz] = zz;
        return tz
      }), (zz => {
        throw Xz = null, zz
      })), Xz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);