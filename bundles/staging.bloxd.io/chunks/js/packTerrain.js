export const id = 45;
export const ids = [45];
export const modules = {
  42653: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      MAX_LAYER_WIDTH: () => KU,
      PackTextures: () => WU,
      deviceMaxLayerWidth: () => cU,
      layerWidthFor: () => uU,
      packFileUrl: () => CU,
      packFilesOf: () => eU,
      packTerrainSources: () => hU,
      webgl1GridColumns: () => GU,
      webgl1LayerWidth: () => jU
    });
    var tU = gU(2811),
      pU = gU(40172),
      EU = gU(40382),
      PU = gU(42655),
      TU = gU(40369),
      qU = gU(42658);
    const KU = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function cU(UU) {
      return (0, tU.e)() ? Math.min(KU[UU], 64) : KU[UU]
    }

    function GU(UU) {
      const RU = Math.ceil(Math.log2(Math.max(1, UU)));
      return 2 ** Math.ceil(RU / 2)
    }

    function jU(UU, RU, gU) {
      const tU = null !== gU && gU > 0 ? gU : pU.c.limits.MAX_TEXTURE_SIZE;
      return uU(Math.max(1, Math.floor(tU / GU(RU))), UU)
    }

    function uU(UU, RU) {
      let gU = 1;
      for (; 2 * gU <= Math.min(UU, RU);) gU *= 2;
      return gU
    }

    function CU(UU, RU) {
      return "string" !== typeof UU || "" === UU ? null : "player" === RU || (0, PU.d)(UU) ? UU : null
    }
    async function hU(UU, RU, tU) {
      const pU = await gU.e(201).then((() => gU(33915))),
        {
          sheetLayout: PU,
          sheetWidth: qU
        } = UU;
      if (qU > RU) throw new Error(`the pack's atlas is ${qU} px wide, not within ${RU} px`);
      if (!(PU.length === pU.imagesPerAtlas.length && PU.every(((UU, RU) => UU === pU.imagesPerAtlas[RU])))) {
        const UU = `the pack's atlas is sheets of ${PU.join(", ")} layers, the built atlas's ${pU.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (PU.length < pU.imagesPerAtlas.length) throw new Error(UU);
        console.warn(UU)
      }
      return {
        atlasSheets: [],
        heldUntil: UU.heldUntil,
        texture: RU => {
          var gU, PU, TU;
          return null !== (gU = null !== (PU = null !== (TU = CU(UU.terrain.texture(RU), tU)) && void 0 !== TU ? TU : pU.animatedBlockTextures[RU]) && void 0 !== PU ? PU : pU.rotatedBlockTextures[RU]) && void 0 !== gU ? gU : function(UU, RU, gU) {
            var tU, pU;
            const PU = null !== (tU = EU.c[UU]) && void 0 !== tU ? tU : null;
            return null === PU ? null : null !== (pU = CU(RU.texture(UU), gU)) && void 0 !== pU ? pU : PU
          }(RU, UU, tU)
        },
        decoded: RU => {
          const gU = (0, TU.j)(RU);
          return null === gU ? null : (async RU => {
            const gU = UU.sheetPixels.at(RU);
            if (gU) {
              UU.sheetPixels[RU] = null;
              const tU = qU > 0 ? gU.byteLength / (4 * qU) : 0;
              return {
                width: qU,
                height: tU,
                pixels: new Uint8Array(gU.buffer, gU.byteOffset, gU.byteLength)
              }
            }
            const pU = UU.terrain.atlasSheets.at(RU);
            if (void 0 === pU) throw new Error(`the pack has no atlas sheet ${RU}`);
            const EU = CU(pU, tU);
            if (null === EU) throw new Error(`the pack's atlas sheet ${RU} isn't a pack file`);
            return (0, TU.m)(EU)
          })(gU)
        }
      }
    }
    const QU = new WeakMap;

    function eU(UU, RU) {
      if (null === UU) return null;
      let gU = QU.get(UU);
      void 0 === gU && (gU = {}, QU.set(UU, gU));
      const tU = gU[RU];
      if (void 0 !== tU) return tU;
      const {
        armourAtlasUrl: pU,
        texture: EU,
        model: PU
      } = UU, TU = {
        armourAtlasUrl: () => CU(pU, RU),
        textureUrl: UU => CU(EU(UU), RU),
        modelUrl: UU => CU(PU(UU), RU)
      };
      return gU[RU] = TU, TU
    }
    class WU {
      constructor(UU) {
        this.host = UU, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (UU, RU, tU) => {
          const {
            backend: pU
          } = this.host, EU = cU(pU);
          if ("webgl1" !== pU) return EU;
          const [PU, TU] = await Promise.all([gU.e(201).then((() => gU(33915))), null !== (UU = null === (RU = (tU = this.host).maxTextureSize) || void 0 === RU ? void 0 : RU.call(tU)) && void 0 !== UU ? UU : null]);
          return jU(EU, PU.imagesPerAtlas.length * Math.max(0, ...PU.imagesPerAtlas), TU)
        })().catch((UU => {
          throw this.maxWidth = null, UU
        })), this.maxWidth
      }
      files() {
        return eU(this.assets, this.owner)
      }
      iconOverrides() {
        const UU = this.files();
        return null === UU ? null : {
          itemSprite: UU.textureUrl,
          blockTexture: UU.textureUrl,
          model: UU.modelUrl
        }
      }
      start() {
        const UU = this.host.feed.subscribe((UU => {
          const RU = ++this.latest;
          this.host.settling(), this.assetsFor(UU).then((gU => this.apply(RU, gU, UU).catch((UU => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", UU)
          }))), (gU => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", gU), this.settled(RU, UU, null, !0)
          }))
        }));
        return () => {
          UU(), this.latest++, this.ended = !0
        }
      }
      async apply(UU, RU, gU) {
        const {
          host: tU
        } = this;
        if (UU !== this.latest || tU.stopped()) return;
        const pU = (0, PU.j)(gU);
        if (this.texturesIn(RU, pU) && 0 === this.swapping) return void this.settled(UU, gU, eU(RU, pU));
        let EU;
        this.swapping++;
        try {
          EU = await tU.terrain.swap((UU => {
            var RU;
            tU.warn(`texture pack texture ${null!==(RU=UU.name)&&void 0!==RU?RU:"(all)"} failed`, UU.error)
          }), (async () => tU.sourcesOf ? tU.sourcesOf(RU) : null === RU ? (0, TU.l)() : hU(RU, await this.maxLayerWidth(), pU)), {
            wholeAtlas: null !== RU,
            wanted: () => UU === this.latest
          })
        } catch (qU) {
          return tU.warn("the texture pack's swap failed: the textures in stay", qU), void this.settled(UU, gU, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== EU || this.ended) this.settled(UU, gU, null, !0);
        else {
          tU.landed(), this.assets = RU, this.owner = pU;
          try {
            tU.packSwapped()
          } finally {
            this.settled(UU, gU, this.files())
          }
        }
      }
      async assetsFor(UU) {
        var RU;
        return (null !== (RU = this.host.assetsOf) && void 0 !== RU ? RU : qU.g)(UU, await this.maxLayerWidth())
      }
      texturesIn(UU, RU) {
        return UU === this.assets && (null === UU || RU === this.owner)
      }
      settled(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        UU !== this.latest || this.ended || this.host.stopped() || this.host.settled(RU, gU, tU)
      }
    }
  },
  42663: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      followPagePackFiles: () => EU
    });
    var tU = gU(42653),
      pU = gU(42658);

    function EU(UU, RU, gU, EU, PU) {
      let TU, qU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU => (0, pU.g)(UU, (0, tU.deviceMaxLayerWidth)(gU)),
        KU = 0,
        cU = null;
      const GU = () => {
          if (null === cU || null !== cU.gameSource && !RU.showsPage()) return;
          const gU = null === cU.gameSource ? cU : UU.playerState();
          if (gU.pack === TU) return;
          TU = gU.pack;
          const pU = ++KU;
          qU(gU).then((UU => {
            pU === KU && EU((0, tU.packFilesOf)(UU, "player"))
          }), (UU => {
            pU === KU && (TU = void 0), PU("the texture pack's files couldn't be had for the previews: the files in stay", UU)
          }))
        },
        jU = UU.subscribe((UU => {
          cU = UU, GU()
        })),
        uU = UU.onPlayerPackChange(GU),
        CU = RU.onPageShown(GU);
      return () => {
        jU(), uU(), CU(), KU++
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);