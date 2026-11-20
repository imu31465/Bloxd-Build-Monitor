export const id = 45;
export const ids = [45];
export const modules = {
  42374: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      MAX_LAYER_WIDTH: () => Uz,
      PackTextures: () => Bz,
      deviceMaxLayerWidth: () => Kz,
      layerWidthFor: () => bz,
      packFileUrl: () => wz,
      packFilesOf: () => Hz,
      packTerrainSources: () => Dz,
      webgl1GridColumns: () => uz,
      webgl1LayerWidth: () => Nz
    });
    var Fz = sz(2844),
      Wz = sz(39894),
      Xz = sz(40075),
      Oz = sz(42381),
      oz = sz(40063),
      vz = sz(42384);
    const Uz = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Kz(zz) {
      return (0, Fz.b)() ? Math.min(Uz[zz], 64) : Uz[zz]
    }

    function uz(zz) {
      const tz = Math.ceil(Math.log2(Math.max(1, zz)));
      return 2 ** Math.ceil(tz / 2)
    }

    function Nz(zz, tz, sz) {
      const Fz = null !== sz && sz > 0 ? sz : Wz.b.limits.MAX_TEXTURE_SIZE;
      return bz(Math.max(1, Math.floor(Fz / uz(tz))), zz)
    }

    function bz(zz, tz) {
      let sz = 1;
      for (; 2 * sz <= Math.min(zz, tz);) sz *= 2;
      return sz
    }

    function wz(zz, tz) {
      return "string" !== typeof zz || "" === zz ? null : "player" === tz || (0, Oz.e)(zz) ? zz : null
    }
    async function Dz(zz, tz, Fz) {
      const Wz = await sz.e(201).then((() => sz(33845))),
        {
          sheetLayout: Oz,
          sheetWidth: vz
        } = zz;
      if (vz > tz) throw new Error(`the pack's atlas is ${vz} px wide, not within ${tz} px`);
      if (!(Oz.length === Wz.imagesPerAtlas.length && Oz.every(((zz, tz) => zz === Wz.imagesPerAtlas[tz])))) {
        const zz = `the pack's atlas is sheets of ${Oz.join(", ")} layers, the built atlas's ${Wz.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Oz.length < Wz.imagesPerAtlas.length) throw new Error(zz);
        console.warn(zz)
      }
      return {
        atlasSheets: [],
        heldUntil: zz.heldUntil,
        texture: tz => {
          var sz, Oz, oz;
          return null !== (sz = null !== (Oz = null !== (oz = wz(zz.terrain.texture(tz), Fz)) && void 0 !== oz ? oz : Wz.animatedBlockTextures[tz]) && void 0 !== Oz ? Oz : Wz.rotatedBlockTextures[tz]) && void 0 !== sz ? sz : function(zz, tz, sz) {
            var Fz, Wz;
            const Oz = null !== (Fz = Xz.b[zz]) && void 0 !== Fz ? Fz : null;
            return null === Oz ? null : null !== (Wz = wz(tz.texture(zz), sz)) && void 0 !== Wz ? Wz : Oz
          }(tz, zz, Fz)
        },
        decoded: tz => {
          const sz = (0, oz.h)(tz);
          return null === sz ? null : (async tz => {
            const sz = zz.sheetPixels.at(tz);
            if (sz) {
              zz.sheetPixels[tz] = null;
              const Fz = vz > 0 ? sz.byteLength / (4 * vz) : 0;
              return {
                width: vz,
                height: Fz,
                pixels: new Uint8Array(sz.buffer, sz.byteOffset, sz.byteLength)
              }
            }
            const Wz = zz.terrain.atlasSheets.at(tz);
            if (void 0 === Wz) throw new Error(`the pack has no atlas sheet ${tz}`);
            const Xz = wz(Wz, Fz);
            if (null === Xz) throw new Error(`the pack's atlas sheet ${tz} isn't a pack file`);
            return (0, oz.j)(Xz)
          })(sz)
        }
      }
    }
    const gz = new WeakMap;

    function Hz(zz, tz) {
      if (null === zz) return null;
      let sz = gz.get(zz);
      void 0 === sz && (sz = {}, gz.set(zz, sz));
      const Fz = sz[tz];
      if (void 0 !== Fz) return Fz;
      const {
        armourAtlasUrl: Wz,
        texture: Xz,
        model: Oz
      } = zz, oz = {
        armourAtlasUrl: () => wz(Wz, tz),
        textureUrl: zz => wz(Xz(zz), tz),
        modelUrl: zz => wz(Oz(zz), tz)
      };
      return sz[tz] = oz, oz
    }
    class Bz {
      constructor(zz) {
        this.host = zz, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (zz, tz, Fz) => {
          const {
            backend: Wz
          } = this.host, Xz = Kz(Wz);
          if ("webgl1" !== Wz) return Xz;
          const [Oz, oz] = await Promise.all([sz.e(201).then((() => sz(33845))), null !== (zz = null === (tz = (Fz = this.host).maxTextureSize) || void 0 === tz ? void 0 : tz.call(Fz)) && void 0 !== zz ? zz : null]);
          return Nz(Xz, Oz.imagesPerAtlas.length * Math.max(0, ...Oz.imagesPerAtlas), oz)
        })().catch((zz => {
          throw this.maxWidth = null, zz
        })), this.maxWidth
      }
      files() {
        return Hz(this.assets, this.owner)
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
          const tz = ++this.latest;
          this.host.settling(), this.assetsFor(zz).then((sz => this.apply(tz, sz, zz).catch((zz => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", zz)
          }))), (sz => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", sz), this.settled(tz, zz, null, !0)
          }))
        }));
        return () => {
          zz(), this.latest++, this.ended = !0
        }
      }
      async apply(zz, tz, sz) {
        const {
          host: Fz
        } = this;
        if (zz !== this.latest || Fz.stopped()) return;
        const Wz = (0, Oz.m)(sz);
        if (this.texturesIn(tz, Wz) && 0 === this.swapping) return void this.settled(zz, sz, Hz(tz, Wz));
        let Xz;
        this.swapping++;
        try {
          Xz = await Fz.terrain.swap((zz => {
            var tz;
            Fz.warn(`texture pack texture ${null!==(tz=zz.name)&&void 0!==tz?tz:"(all)"} failed`, zz.error)
          }), (async () => Fz.sourcesOf ? Fz.sourcesOf(tz) : null === tz ? (0, oz.i)() : Dz(tz, await this.maxLayerWidth(), Wz)), {
            wholeAtlas: null !== tz,
            wanted: () => zz === this.latest
          })
        } catch (vz) {
          return Fz.warn("the texture pack's swap failed: the textures in stay", vz), void this.settled(zz, sz, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== Xz || this.ended) this.settled(zz, sz, null, !0);
        else {
          Fz.landed(), this.assets = tz, this.owner = Wz;
          try {
            Fz.packSwapped()
          } finally {
            this.settled(zz, sz, this.files())
          }
        }
      }
      async assetsFor(zz) {
        var tz;
        return (null !== (tz = this.host.assetsOf) && void 0 !== tz ? tz : vz.i)(zz, await this.maxLayerWidth())
      }
      texturesIn(zz, tz) {
        return zz === this.assets && (null === zz || tz === this.owner)
      }
      settled(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        zz !== this.latest || this.ended || this.host.stopped() || this.host.settled(tz, sz, Fz)
      }
    }
  },
  42386: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      followPagePackFiles: () => Xz
    });
    var Fz = sz(42374),
      Wz = sz(42384);

    function Xz(zz, tz, sz, Xz, Oz) {
      let oz, vz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz => (0, Wz.i)(zz, (0, Fz.deviceMaxLayerWidth)(sz)),
        Uz = 0,
        Kz = null;
      const uz = () => {
          if (null === Kz || null !== Kz.gameSource && !tz.showsPage()) return;
          const sz = null === Kz.gameSource ? Kz : zz.playerState();
          if (sz.pack === oz) return;
          oz = sz.pack;
          const Wz = ++Uz;
          vz(sz).then((zz => {
            Wz === Uz && Xz((0, Fz.packFilesOf)(zz, "player"))
          }), (zz => {
            Wz === Uz && (oz = void 0), Oz("the texture pack's files couldn't be had for the previews: the files in stay", zz)
          }))
        },
        Nz = zz.subscribe((zz => {
          Kz = zz, uz()
        })),
        bz = zz.onPlayerPackChange(uz),
        wz = tz.onPageShown(uz);
      return () => {
        Nz(), bz(), wz(), Uz++
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);