export const id = 45;
export const ids = [45];
export const modules = {
  42603: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      MAX_LAYER_WIDTH: () => Hz,
      PackTextures: () => Xz,
      deviceMaxLayerWidth: () => Oz,
      layerWidthFor: () => Fz,
      packFileUrl: () => Zz,
      packFilesOf: () => wz,
      packTerrainSources: () => Rz,
      webgl1GridColumns: () => pz,
      webgl1LayerWidth: () => dz
    });
    var Ez = bz(2866),
      nz = bz(39967),
      iz = bz(40189),
      lz = bz(42612),
      Mz = bz(40181),
      tz = bz(42615);
    const Hz = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Oz(zz) {
      return (0, Ez.b)() ? Math.min(Hz[zz], 64) : Hz[zz]
    }

    function pz(zz) {
      const uz = Math.ceil(Math.log2(Math.max(1, zz)));
      return 2 ** Math.ceil(uz / 2)
    }

    function dz(zz, uz, bz) {
      const Ez = null !== bz && bz > 0 ? bz : nz.c.limits.MAX_TEXTURE_SIZE;
      return Fz(Math.max(1, Math.floor(Ez / pz(uz))), zz)
    }

    function Fz(zz, uz) {
      let bz = 1;
      for (; 2 * bz <= Math.min(zz, uz);) bz *= 2;
      return bz
    }

    function Zz(zz, uz) {
      return "string" !== typeof zz || "" === zz ? null : "player" === uz || (0, lz.c)(zz) ? zz : null
    }
    async function Rz(zz, uz, Ez) {
      const nz = await bz.e(201).then((() => bz(33750))),
        {
          sheetLayout: lz,
          sheetWidth: tz
        } = zz;
      if (tz > uz) throw new Error(`the pack's atlas is ${tz} px wide, not within ${uz} px`);
      if (!(lz.length === nz.imagesPerAtlas.length && lz.every(((zz, uz) => zz === nz.imagesPerAtlas[uz])))) {
        const zz = `the pack's atlas is sheets of ${lz.join(", ")} layers, the built atlas's ${nz.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (lz.length < nz.imagesPerAtlas.length) throw new Error(zz);
        console.warn(zz)
      }
      return {
        atlasSheets: [],
        heldUntil: zz.heldUntil,
        texture: uz => {
          var bz, lz, Mz;
          return null !== (bz = null !== (lz = null !== (Mz = Zz(zz.terrain.texture(uz), Ez)) && void 0 !== Mz ? Mz : nz.animatedBlockTextures[uz]) && void 0 !== lz ? lz : nz.rotatedBlockTextures[uz]) && void 0 !== bz ? bz : function(zz, uz, bz) {
            var Ez, nz;
            const lz = null !== (Ez = iz.c[zz]) && void 0 !== Ez ? Ez : null;
            return null === lz ? null : null !== (nz = Zz(uz.texture(zz), bz)) && void 0 !== nz ? nz : lz
          }(uz, zz, Ez)
        },
        decoded: uz => {
          const bz = (0, Mz.g)(uz);
          return null === bz ? null : (async uz => {
            const bz = zz.sheetPixels.at(uz);
            if (bz) {
              zz.sheetPixels[uz] = null;
              const Ez = tz > 0 ? bz.byteLength / (4 * tz) : 0;
              return {
                width: tz,
                height: Ez,
                pixels: new Uint8Array(bz.buffer, bz.byteOffset, bz.byteLength)
              }
            }
            const nz = zz.terrain.atlasSheets.at(uz);
            if (void 0 === nz) throw new Error(`the pack has no atlas sheet ${uz}`);
            const iz = Zz(nz, Ez);
            if (null === iz) throw new Error(`the pack's atlas sheet ${uz} isn't a pack file`);
            return (0, Mz.n)(iz)
          })(bz)
        }
      }
    }
    const Kz = new WeakMap;

    function wz(zz, uz) {
      if (null === zz) return null;
      let bz = Kz.get(zz);
      void 0 === bz && (bz = {}, Kz.set(zz, bz));
      const Ez = bz[uz];
      if (void 0 !== Ez) return Ez;
      const {
        armourAtlasUrl: nz,
        texture: iz,
        model: lz
      } = zz, Mz = {
        armourAtlasUrl: () => Zz(nz, uz),
        textureUrl: zz => Zz(iz(zz), uz),
        modelUrl: zz => Zz(lz(zz), uz)
      };
      return bz[uz] = Mz, Mz
    }
    class Xz {
      constructor(zz) {
        this.host = zz, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (zz, uz, Ez) => {
          const {
            backend: nz
          } = this.host, iz = Oz(nz);
          if ("webgl1" !== nz) return iz;
          const [lz, Mz] = await Promise.all([bz.e(201).then((() => bz(33750))), null !== (zz = null === (uz = (Ez = this.host).maxTextureSize) || void 0 === uz ? void 0 : uz.call(Ez)) && void 0 !== zz ? zz : null]);
          return dz(iz, lz.imagesPerAtlas.length * Math.max(0, ...lz.imagesPerAtlas), Mz)
        })().catch((zz => {
          throw this.maxWidth = null, zz
        })), this.maxWidth
      }
      files() {
        return wz(this.assets, this.owner)
      }
      iconOverrides() {
        const zz = this.files();
        return null === zz ? null : {
          itemSprite: zz.textureUrl,
          blockTexture: zz.textureUrl,
          model: zz.modelUrl
        }
      }
      start() {
        const zz = this.host.feed.subscribe((zz => {
          const uz = ++this.latest;
          this.host.settling(), this.assetsFor(zz).then((bz => this.apply(uz, bz, zz).catch((zz => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", zz)
          }))), (bz => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", bz), this.settled(uz, zz, null, !0)
          }))
        }));
        return () => {
          zz(), this.latest++, this.ended = !0
        }
      }
      async apply(zz, uz, bz) {
        const {
          host: Ez
        } = this;
        if (zz !== this.latest || Ez.stopped()) return;
        const nz = (0, lz.m)(bz);
        if (this.texturesIn(uz, nz) && 0 === this.swapping) return void this.settled(zz, bz, wz(uz, nz));
        let iz;
        this.swapping++;
        try {
          iz = await Ez.terrain.swap((zz => {
            var uz;
            Ez.warn(`texture pack texture ${null!==(uz=zz.name)&&void 0!==uz?uz:"(all)"} failed`, zz.error)
          }), (async () => Ez.sourcesOf ? Ez.sourcesOf(uz) : null === uz ? (0, Mz.j)() : Rz(uz, await this.maxLayerWidth(), nz)), {
            wholeAtlas: null !== uz,
            wanted: () => zz === this.latest
          })
        } catch (tz) {
          return Ez.warn("the texture pack's swap failed: the textures in stay", tz), void this.settled(zz, bz, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== iz || this.ended) this.settled(zz, bz, null, !0);
        else {
          Ez.landed(), this.assets = uz, this.owner = nz;
          try {
            Ez.packSwapped()
          } finally {
            this.settled(zz, bz, this.files())
          }
        }
      }
      async assetsFor(zz) {
        var uz;
        return (null !== (uz = this.host.assetsOf) && void 0 !== uz ? uz : tz.e)(zz, await this.maxLayerWidth())
      }
      texturesIn(zz, uz) {
        return zz === this.assets && (null === zz || uz === this.owner)
      }
      settled(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        zz !== this.latest || this.ended || this.host.stopped() || this.host.settled(uz, bz, Ez)
      }
    }
  },
  42624: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      followPagePackFiles: () => iz
    });
    var Ez = bz(42603),
      nz = bz(42615);

    function iz(zz, uz, bz, iz, lz) {
      let Mz, tz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz => (0, nz.e)(zz, (0, Ez.deviceMaxLayerWidth)(bz)),
        Hz = 0,
        Oz = null;
      const pz = () => {
          if (null === Oz || null !== Oz.gameSource && !uz.showsPage()) return;
          const bz = null === Oz.gameSource ? Oz : zz.playerState();
          if (bz.pack === Mz) return;
          Mz = bz.pack;
          const nz = ++Hz;
          tz(bz).then((zz => {
            nz === Hz && iz((0, Ez.packFilesOf)(zz, "player"))
          }), (zz => {
            nz === Hz && (Mz = void 0), lz("the texture pack's files couldn't be had for the previews: the files in stay", zz)
          }))
        },
        dz = zz.subscribe((zz => {
          Oz = zz, pz()
        })),
        Fz = zz.onPlayerPackChange(pz),
        Zz = uz.onPageShown(pz);
      return () => {
        dz(), Fz(), Zz(), Hz++
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);