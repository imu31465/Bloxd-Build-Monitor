export const id = 260;
export const ids = [260];
export const modules = {
  39919: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      h: () => lz
    });
    var Ez = bz(1878);
    let nz = !1;

    function iz() {
      nz = !0
    }

    function lz() {
      nz && (nz = !1, (0, Ez.c)())
    }
  },
  39925: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      f: () => lz
    });
    var Ez = bz(3052);
    let nz = null,
      iz = null;

    function lz() {
      return iz ??= bz.e(208).then((() => bz(35817))).then((zz => {
        let {
          ITEM_SPRITES: uz,
          ITEM_SPRITES_WITHOUT_FILE: bz,
          ITEM_FILES_WITHOUT_SPRITE: iz
        } = zz;
        nz = function(zz, uz, bz) {
          const nz = new Set,
            iz = (0, Ez.y)(uz);
          let lz = 0;
          for (const [Ez, Mz] of zz.entries()) Ez === iz[lz] ? lz++ : nz.add(Mz);
          if ("" !== bz)
            for (const Mz of bz.split(Ez.t)) nz.add(Mz);
          return nz
        }(uz.split(Ez.t), bz, iz)
      }), (zz => {
        throw iz = null, zz
      })), iz
    }

    function Mz(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = nz) || void 0 === bz ? void 0 : bz.has(zz)) && void 0 !== uz && uz
    }
  },
  39910: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      loadIcons: () => Az,
      setIconFileOverrides: () => Tz,
      wasmIconLookups: () => Uz,
      wasmIconQueries: () => hz
    });
    var Ez = bz(4263),
      nz = bz(4247),
      iz = bz(39919),
      lz = bz(1878),
      Mz = bz(1871),
      tz = bz(3043),
      Hz = bz(3052);
    let Oz = null,
      pz = null;

    function dz(zz) {
      const uz = zz.startsWith(Hz.n),
        [bz, Ez = bz, nz = bz] = (uz ? zz.slice(Hz.n.length) : zz).split(Hz.k);
      return {
        top: bz,
        left: Ez,
        right: nz,
        half: uz
      }
    }

    function Fz(zz) {
      const uz = null === Oz ? void 0 : (0, tz.e)(zz),
        bz = void 0 === uz ? 0 : Oz.codes[uz];
      return 0 === bz ? void 0 : Oz.pool[bz - 1]
    }
    var Zz = bz(3036),
      Rz = bz(4229),
      Kz = bz(4258),
      wz = bz(39922);
    const Xz = "item:";
    let fz = null,
      sz = null,
      rz = null,
      oz = null,
      Nz = !1,
      vz = !1,
      xz = null,
      Jz = 0;

    function Az() {
      return vz || (vz = !0, (0, Kz.g)().then((zz => {
        zz && (0, lz.c)()
      }))), rz ??= Promise.all([(0, Zz.e)(), (pz ??= bz.e(1).then((() => bz(41847))).then((zz => {
        let {
          BLOCK_FACE_RUNS: uz,
          BLOCK_FACES: bz,
          MAX_FACE_ITEM_ID: Ez
        } = zz;
        Oz = {
          codes: (0, Hz.B)(uz, Ez + 1),
          pool: bz.split(Hz.t).map(dz)
        }
      }), (zz => {
        throw pz = null, zz
      })), pz), (0, wz.g)(), bz.e(189).then((() => bz(9007)))]).then((zz => {
        let [, , uz, bz] = zz;
        uz.followBundledTextures(), fz = uz, sz = bz, (0, lz.c)()
      }), (zz => {
        rz = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", zz)
      })), rz
    }

    function Tz(zz) {
      xz = zz, Jz++, (0, lz.c)()
    }

    function Lz(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = xz) || void 0 === bz ? void 0 : bz.itemSprite(zz)) && void 0 !== uz ? uz : fz.itemSpriteUrl(zz)
    }

    function Pz(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = xz) || void 0 === bz ? void 0 : bz.blockTexture(zz)) && void 0 !== uz ? uz : fz.blockTextureUrl(zz)
    }

    function Gz(zz) {
      var uz;
      return null !== (uz = (0, Zz.d)(zz)) && void 0 !== uz ? uz : zz
    }

    function az(zz, uz) {
      var bz, Ez, nz;
      return null !== (bz = null !== (Ez = null !== (nz = Pz(zz)) && void 0 !== nz ? nz : null === uz || void 0 === uz ? void 0 : uz.rotated[zz]) && void 0 !== Ez ? Ez : null === uz || void 0 === uz ? void 0 : uz.animated[zz]) && void 0 !== bz ? bz : fz.notFoundUrl()
    }

    function Vz(zz) {
      return void 0 !== (0, tz.e)(zz) ? zz : /^[1-9][0-9]*$/.test(zz) ? (0, tz.g)(Number(zz)) : void 0
    }

    function mz(zz) {
      var uz;
      if (zz.startsWith(Xz)) {
        var bz;
        const uz = (0, Zz.d)(zz.slice(5));
        return null !== (bz = void 0 === uz ? null : Lz(uz)) && void 0 !== bz ? bz : fz.notFoundUrl()
      }
      return null !== (uz = fz.particleUrl(zz)) && void 0 !== uz ? uz : fz.notFoundUrl()
    }

    function qz(zz, uz) {
      return "StairsBlock" === zz ? zz : uz ? "SlabBlock" : "CubeBlock"
    }
    const hz = {
        async blockIcon(zz) {
          var uz;
          let {
            name: Ez,
            size: nz,
            lineWidth: iz
          } = zz;
          await Az();
          const Mz = null !== (uz = Vz(Ez)) && void 0 !== uz ? uz : Ez,
            Hz = (0, Kz.d)(Mz, nz, iz);
          if (null !== Hz) return Hz;
          const Oz = Fz(Mz),
            pz = (0, tz.e)(Mz),
            dz = void 0 === pz || null === sz ? void 0 : sz.itemTypeNameOf(pz);
          if (null === fz || void 0 === Oz) return "";
          const Zz = [Oz.top, Oz.left, Oz.right].some((zz => null === Pz(zz))),
            wz = Zz ? await (oz ??= bz.e(201).then((() => bz(33750))).then((zz => (Nz && (Nz = !1, (0, lz.c)()), {
              rotated: zz.rotatedBlockTextures,
              animated: zz.animatedBlockTextures
            })), (zz => (oz = null, Nz = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", zz), null))), oz) : null;
          if (Zz && null === wz) return "";
          const Xz = {
              top: az(Oz.top, wz),
              left: az(Oz.left, wz),
              right: az(Oz.right, wz),
              itemType: qz(dz, Oz.half)
            },
            rz = 0 === Jz ? Mz : `${Mz}#${Jz}`;
          return (await (0, Rz.d)()).drawBlockIconUrl(rz, nz, iz, (() => Xz))
        }
      },
      Uz = {
        itemIcon: function(zz) {
          var uz, bz;
          if (null === fz) return Az(), Mz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
          if ((0, nz.i)(zz)) return {
            kind: "icon",
            url: null !== (bz = fz.ingameIconUrl(zz)) && void 0 !== bz ? bz : fz.notFoundUrl()
          };
          if (zz.startsWith(nz.c)) return {
            kind: "icon",
            url: mz(zz.slice(nz.c.length))
          };
          if (0 === (0, tz.k)()) return (0, iz.d)(), Mz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
          const lz = null !== (uz = Vz(zz)) && void 0 !== uz ? uz : zz,
            Hz = (0, tz.e)(lz),
            Oz = void 0 === Hz ? void 0 : sz.itemTypeNameOf(Hz);
          if (void 0 !== Fz(lz)) return {
            kind: "drawnBlock"
          };
          const pz = function(zz) {
            var uz;
            return null !== (uz = Lz(Gz(zz))) && void 0 !== uz ? uz : fz.notFoundUrl()
          }(lz);
          if ((0, Kz.e)(lz) && ! function(zz) {
              return null !== xz && (null !== xz.itemSprite(Gz(zz)) || null !== xz.model(zz))
            }(lz)) return {
            kind: "model",
            url: pz
          };
          if ("Gun" === Oz) return {
            kind: "gun",
            url: pz
          };
          if (void 0 !== Hz && "GrayscaleArmour" === sz.itemTypeOf(Hz) || Object.hasOwn(Ez.c, lz)) {
            var dz;
            const uz = null !== (dz = (0, Ez.d)(zz)) && void 0 !== dz ? dz : (0, Ez.d)(lz);
            if (uz) return {
              kind: "item",
              url: pz,
              tint: uz
            }
          }
          return {
            kind: "item",
            url: pz
          }
        },
        hasIcon: function(zz) {
          return void 0 !== Vz(zz) || (0, nz.i)(zz) || zz.startsWith(nz.c)
        },
        isItemName: function(zz) {
          return void 0 !== Vz(zz)
        }
      }
  },
  39922: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      g: () => Mz
    });
    var Ez = bz(39925);
    let nz = null,
      iz = null;

    function lz() {
      return nz ??= bz.e(58).then((() => bz(41849))).catch((zz => {
        throw nz = null, zz
      })), nz
    }

    function Mz() {
      return iz ??= Promise.all([lz(), (0, Ez.f)()]).then((zz => {
        let [uz] = zz;
        return uz
      }), (zz => {
        throw iz = null, zz
      })), iz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);