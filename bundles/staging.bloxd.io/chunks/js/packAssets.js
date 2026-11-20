export const id = 44;
export const ids = [44, 194];
export const modules = {
  8916: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      packDisplayName: () => wz,
      packModelMessage: () => Dz,
      packModelSummary: () => Hz,
      refusedPackModels: () => gz
    });
    var Fz = sz(8924),
      Wz = sz(8930);
    const Xz = "DRACO",
      Oz = 0,
      oz = 1,
      vz = 0,
      Uz = 1,
      Kz = 32768;

    function uz(zz) {
      const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      let sz = 0;
      const Fz = () => {
          if (sz >= zz.byteLength) throw new RangeError("past the stream");
          return zz[sz++]
        },
        Wz = () => {
          if (sz + 4 > zz.byteLength) throw new RangeError("past the stream");
          const Fz = tz.getUint32(sz, !0);
          return sz += 4, Fz
        },
        uz = () => {
          let zz = 0;
          for (let tz = 0; tz < 35; tz += 7) {
            const sz = Fz();
            if (zz += (127 & sz) * 2 ** tz, 0 === (128 & sz)) return zz
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let zz = 0; zz < Xz.length; zz++)
          if (Fz() !== Xz.charCodeAt(zz)) return null;
        const tz = Fz(),
          Nz = Fz(),
          bz = Fz(),
          wz = Fz(),
          Dz = Fz() | Fz() << 8;
        if (2 !== tz) return null;
        0 !== (Dz & Kz) && function(zz, tz, sz) {
          const Fz = () => {
              tz(sz())
            },
            Wz = () => {
              let sz = 1,
                Wz = !0;
              for (; sz > 0;) {
                sz--, Wz || Fz(), Wz = !1;
                const Xz = zz();
                for (let sz = 0; sz < Xz; sz++) Fz(), tz(zz());
                sz += zz()
              }
            },
            Xz = zz();
          for (let Oz = 0; Oz < Xz; Oz++) zz(), Wz();
          Wz()
        }(uz, (tz => {
          if (sz + tz > zz.byteLength) throw new RangeError("past the stream");
          sz += tz
        }), Fz);
        const gz = Nz < 2 ? Wz : uz;
        if (bz === Oz) return {
          faces: 0,
          vertices: Wz()
        };
        if (bz !== oz) return null;
        if (wz === vz) {
          return {
            faces: gz(),
            vertices: gz()
          }
        }
        if (wz !== Uz) return null;
        Fz(), Nz < 2 && uz();
        const Hz = uz();
        return {
          faces: uz(),
          vertices: Hz
        }
      } catch {
        return null
      }
    }

    function Nz(zz, tz, sz) {
      var Fz, Wz;
      if (null === (Fz = null === (Wz = zz.extensionsUsed) || void 0 === Wz ? void 0 : Wz.includes("KHR_draco_mesh_compression")) || void 0 === Fz || !Fz) return null;
      for (const wz of null !== (Xz = zz.meshes) && void 0 !== Xz ? Xz : []) {
        var Xz;
        for (const Fz of wz.primitives) {
          var Oz, oz, vz, Uz, Kz, Nz;
          const Wz = null === (Oz = Fz.extensions) || void 0 === Oz ? void 0 : Oz.KHR_draco_mesh_compression;
          if ("object" !== typeof Wz || null === Wz) continue;
          const Xz = null === (oz = zz.bufferViews) || void 0 === oz ? void 0 : oz[Wz.bufferView];
          if (null === tz || void 0 === Xz) return bz;
          const wz = null !== (vz = Xz.byteOffset) && void 0 !== vz ? vz : 0,
            Dz = uz(tz.subarray(wz, wz + Xz.byteLength));
          if (null === Dz && !sz) continue;
          const gz = null !== (Uz = zz.accessors) && void 0 !== Uz ? Uz : [],
            Hz = null === (Kz = gz[Fz.attributes.POSITION]) || void 0 === Kz ? void 0 : Kz.count,
            Bz = void 0 === Fz.indices ? 0 : null === (Nz = gz[Fz.indices]) || void 0 === Nz ? void 0 : Nz.count;
          if (null === Dz || void 0 === Hz || void 0 === Bz || 3 * Dz.faces !== Bz || Dz.vertices > Hz) return bz
        }
      }
      return null
    }
    const bz = "has a Draco stream whose counts don't match its accessors";

    function wz(zz) {
      var tz;
      return null !== (tz = zz.name) && void 0 !== tz ? tz : zz.fromFolderName || zz.id
    }

    function Dz(zz, tz, sz) {
      return `Texture pack "${zz}": model "${tz}" was not loaded because it ${sz}. The default model is used instead.`
    }

    function gz(zz, tz, sz) {
      let {
        strictDraco: Xz = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Oz = {};
      for (const [oz, vz] of Object.entries(tz)) {
        let tz;
        if (vz.startsWith("data:")) try {
          const zz = new Uint8Array((0, Wz.o)(vz));
          if (tz = (0, Fz.c)(zz), null === tz) {
            const {
              json: sz,
              bin: Fz
            } = (0, Wz.y)(zz);
            tz = Nz(sz, Fz, Xz)
          }
        } catch {
          tz = "is not a binary glTF 2.0 file"
        } else tz = "loads data from outside the file";
        tz && (Oz[oz] = tz, sz && console.warn(Dz(zz, oz, tz)))
      }
      return Oz
    }

    function Hz(zz, tz) {
      const sz = Object.keys(tz);
      if (0 === sz.length) return null;
      if (1 === sz.length) return Dz(zz, sz[0], tz[sz[0]]);
      const Fz = sz.map((zz => `"${zz}" ${tz[zz]}`)).join("; ");
      return `Texture pack "${zz}": ${sz.length} models were not loaded (${Fz}). The default models are used instead.`
    }
  },
  60644: (zz, tz, sz) => {
    sz.d(tz, {
      packAssets: () => Hz
    });
    var Fz = sz(2883),
      Wz = sz(2910),
      Xz = sz(8916),
      Oz = sz(2929),
      oz = sz(2944);

    function vz(zz, tz, sz, Fz) {
      const Wz = `${(0,Oz.e)(zz,tz)}|sheets${sz}`;
      return Fz === oz.c ? Wz : `${Wz}|layers${Fz}`
    }
    var Uz = sz(2947),
      Kz = sz(2896),
      uz = sz(2886),
      Nz = sz(2933);
    var bz = sz(42381);
    const wz = 256;
    let Dz = null,
      gz = null;

    function Hz(zz) {
      var tz;
      let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oz.c;
      if ((null === (tz = Dz) || void 0 === tz ? void 0 : tz.pack) === zz.pack && Dz.maxLayerWidth === sz) return Dz.assets;
      const Hz = (0, bz.g)(zz.pack, (0, bz.m)(zz));
      if (null === Hz || !(0, Wz.e)(Hz)) return Promise.resolve(null);
      const Pz = async function(zz, tz, sz) {
        var bz;
        const Dz = null !== (bz = zz.textureOverrides) && void 0 !== bz ? bz : {},
          {
            id: Hz,
            version: Pz
          } = zz.metaData,
          rz = tz && Hz !== Fz.s.CUSTOM,
          Yz = {};
        rz && (gz = Yz);
        let xz, mz, Jz = rz ? await async function(zz, tz, sz, Fz) {
          const Wz = vz(zz, tz, sz, oz.c),
            Xz = vz(zz, tz, sz, Fz),
            Uz = await (0, Oz.i)((zz => zz === Wz || zz === Xz));
          return null !== Uz && (Fz === oz.c || Uz.blockAtlasWidth <= Fz) ? Uz : null
        }(Hz, Pz, wz, sz): null;
        if (null === Jz) {
          const {
            blockMetadata: zz,
            getDefaultTexture: tz,
            textureNameToIndex: Xz
          } = await (0, Wz.l)(), oz = (0, Kz.d)(zz, ((zz, sz) => ({
            url: Bz(Dz, tz, zz, "block" === sz ? uz.e.BLOCK : uz.e.ITEM)
          }))), Uz = await
          function(zz, tz, sz, Fz, Wz, Xz) {
            return (0, Nz.e)((Oz => Oz.WasmTextureWorker.generateRequired(zz, tz, sz, Fz, Wz, Xz)))
          }(zz, Xz, oz, Hz === Fz.e, sz, wz), bz = Uz.assets;
          Jz = {
            ...bz,
            averageColors: {}
          }, xz = Uz.averageColors(), rz && (mz = xz.then((async zz => {
            null !== zz && gz === Yz && await
            function(zz, tz, sz, Fz, Wz) {
              return (0, Oz.n)(vz(zz, tz, Fz, Wz), sz)
            }(Hz, Pz, {
              ...bz,
              averageColors: zz
            }, wz, Uz.layerCap)
          })))
        }
        return function(zz, tz) {
          var sz, Fz;
          let Wz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((oz = zz.averageColors, 0 === Object.keys(null !== oz && void 0 !== oz ? oz : {}).length ? null : zz.averageColors)),
            Oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var oz;
          const vz = null !== (sz = tz.textureOverrides) && void 0 !== sz ? sz : {},
            Kz = null !== (Fz = tz.modelOverrides) && void 0 !== Fz ? Fz : {},
            uz = 0 === Object.keys(Kz).length ? {} : (0, Xz.refusedPackModels)((0, Xz.packDisplayName)(tz.metaData), Kz, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Nz,
              rotatedBlockTextures: bz
            } = zz,
            wz = zz => {
              var tz, sz;
              return null !== (tz = null !== (sz = Nz[zz]) && void 0 !== sz ? sz : bz[zz]) && void 0 !== tz ? tz : null
            };
          return {
            terrain: {
              atlasSheets: zz.blockAtlasArr,
              texture: wz
            },
            sheetPixels: [...zz.blockAtlasPixels],
            heldUntil: Oz,
            sheetLayout: zz.imagesPerAtlas,
            sheetWidth: zz.blockAtlasWidth,
            armourAtlasUrl: zz.armourAtlas,
            texture: zz => {
              var tz, sz;
              return null !== (tz = null !== (sz = wz(zz)) && void 0 !== sz ? sz : (0, Uz.b)(vz, zz)) && void 0 !== tz ? tz : null
            },
            model: zz => void 0 === uz[zz] && Kz[zz] || null,
            averageColours: Wz
          }
        }(Jz, zz, xz, mz)
      }(Hz, null === zz.gameSource, sz), rz = {
        pack: zz.pack,
        maxLayerWidth: sz,
        assets: Pz
      };
      return Dz = rz, Pz.catch((() => {
        Dz === rz && (Dz = null)
      })), Pz
    }

    function Bz(zz, tz, Fz, Wz) {
      const Xz = (0, Uz.b)(zz, Fz);
      if (Xz) return Xz;
      try {
        return tz(Fz, Wz).url
      } catch {
        return sz(2989)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);