export const id = 46;
export const ids = [46];
export const modules = {
  51435: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      MAX_LAYER_WIDTH: () => YG,
      PackTextures: () => rG,
      deviceMaxLayerWidth: () => VG,
      layerWidthFor: () => QG,
      packFileUrl: () => KG,
      packFilesOf: () => JG,
      packTerrainSources: () => hG,
      webgl1GridColumns: () => pG,
      webgl1LayerWidth: () => fG
    });
    var wG = ZG(3104),
      SG = ZG(41104),
      LG = ZG(41205),
      yG = ZG(51440),
      kG = ZG(41195),
      UG = ZG(51442);
    const YG = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function VG(GG) {
      return (0, wG.e)() ? Math.min(YG[GG], 64) : YG[GG]
    }

    function pG(GG) {
      const bG = Math.ceil(Math.log2(Math.max(1, GG)));
      return 2 ** Math.ceil(bG / 2)
    }

    function fG(GG, bG, ZG) {
      const wG = null !== ZG && ZG > 0 ? ZG : SG.b.limits.MAX_TEXTURE_SIZE;
      return QG(Math.max(1, Math.floor(wG / pG(bG))), GG)
    }

    function QG(GG, bG) {
      let ZG = 1;
      for (; 2 * ZG <= Math.min(GG, bG);) ZG *= 2;
      return ZG
    }

    function KG(GG, bG) {
      return "string" !== typeof GG || "" === GG ? null : "player" === bG || (0, yG.b)(GG) ? GG : null
    }
    async function hG(GG, bG, wG) {
      const SG = await ZG.e(207).then((() => ZG(34575))),
        {
          sheetLayout: yG,
          sheetWidth: UG
        } = GG;
      if (UG > bG) throw new Error(`the pack's atlas is ${UG} px wide, not within ${bG} px`);
      if (!(yG.length === SG.imagesPerAtlas.length && yG.every(((GG, bG) => GG === SG.imagesPerAtlas[bG])))) {
        const GG = `the pack's atlas is sheets of ${yG.join(", ")} layers, the built atlas's ${SG.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (yG.length < SG.imagesPerAtlas.length) throw new Error(GG);
        console.warn(GG)
      }
      return {
        atlasSheets: [],
        heldUntil: GG.heldUntil,
        texture: bG => {
          var ZG, yG, kG;
          return null !== (ZG = null !== (yG = null !== (kG = KG(GG.terrain.texture(bG), wG)) && void 0 !== kG ? kG : SG.animatedBlockTextures[bG]) && void 0 !== yG ? yG : SG.rotatedBlockTextures[bG]) && void 0 !== ZG ? ZG : function(GG, bG, ZG) {
            var wG, SG;
            const yG = null !== (wG = LG.b[GG]) && void 0 !== wG ? wG : null;
            return null === yG ? null : null !== (SG = KG(bG.texture(GG), ZG)) && void 0 !== SG ? SG : yG
          }(bG, GG, wG)
        },
        decoded: bG => {
          const ZG = (0, kG.f)(bG);
          return null === ZG ? null : (async bG => {
            const ZG = GG.sheetPixels.at(bG);
            if (ZG) {
              GG.sheetPixels[bG] = null;
              const wG = UG > 0 ? ZG.byteLength / (4 * UG) : 0;
              return {
                width: UG,
                height: wG,
                pixels: new Uint8Array(ZG.buffer, ZG.byteOffset, ZG.byteLength)
              }
            }
            const SG = GG.terrain.atlasSheets.at(bG);
            if (void 0 === SG) throw new Error(`the pack has no atlas sheet ${bG}`);
            const LG = KG(SG, wG);
            if (null === LG) throw new Error(`the pack's atlas sheet ${bG} isn't a pack file`);
            return (0, kG.k)(LG)
          })(ZG)
        }
      }
    }
    const dG = new WeakMap;

    function JG(GG, bG) {
      if (null === GG) return null;
      let ZG = dG.get(GG);
      void 0 === ZG && (ZG = {}, dG.set(GG, ZG));
      const wG = ZG[bG];
      if (void 0 !== wG) return wG;
      const {
        armourAtlasUrl: SG,
        texture: LG,
        model: yG
      } = GG, kG = {
        armourAtlasUrl: () => KG(SG, bG),
        textureUrl: GG => KG(LG(GG), bG),
        modelUrl: GG => KG(yG(GG), bG)
      };
      return ZG[bG] = kG, kG
    }
    class rG {
      constructor(GG) {
        this.host = GG, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (GG, bG, wG) => {
          const {
            backend: SG
          } = this.host, LG = VG(SG);
          if ("webgl1" !== SG) return LG;
          const [yG, kG] = await Promise.all([ZG.e(207).then((() => ZG(34575))), null !== (GG = null === (bG = (wG = this.host).maxTextureSize) || void 0 === bG ? void 0 : bG.call(wG)) && void 0 !== GG ? GG : null]);
          return fG(LG, yG.imagesPerAtlas.length * Math.max(0, ...yG.imagesPerAtlas), kG)
        })().catch((GG => {
          throw this.maxWidth = null, GG
        })), this.maxWidth
      }
      files() {
        return JG(this.assets, this.owner)
      }
      start() {
        let GG = null;
        const bG = this.host.feed.subscribe((bG => {
          const ZG = ++this.latest,
            wG = null !== bG.gameSource ? "game" : null !== GG && null !== GG.gameSource ? "join" : "page";
          GG = bG, this.host.settling(), this.assetsFor(bG).then((GG => this.apply(ZG, GG, bG, wG).catch((GG => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", GG)
          }))), (GG => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", GG), this.settled(ZG, bG, null, {
              error: GG,
              source: wG
            })
          }))
        }));
        return () => {
          bG(), this.latest++, this.ended = !0
        }
      }
      async apply(GG, bG, ZG, wG) {
        const {
          host: SG
        } = this;
        if (GG !== this.latest || SG.stopped()) return;
        const LG = (0, yG.j)(ZG);
        if (this.texturesIn(bG, LG) && 0 === this.swapping) return void this.settled(GG, ZG, JG(bG, LG));
        let UG;
        this.swapping++;
        let YG = null;
        try {
          UG = await SG.terrain.swap((GG => {
            var bG;
            SG.warn(`texture pack texture ${null!==(bG=GG.name)&&void 0!==bG?bG:"(all)"} failed`, GG.error), null !== GG.name && null === (0, kG.f)(GG.name) || (YG = GG.error)
          }), (async () => SG.sourcesOf ? SG.sourcesOf(bG) : null === bG ? (0, kG.g)() : hG(bG, await this.maxLayerWidth(), LG)), {
            wholeAtlas: null !== bG,
            wanted: () => GG === this.latest
          })
        } catch (VG) {
          return SG.warn("the texture pack's swap failed: the textures in stay", VG), void this.settled(GG, ZG, null, {
            error: VG,
            source: wG
          })
        } finally {
          this.swapping--
        }
        if (!0 !== UG || this.ended) this.settled(GG, ZG, null, {
          error: YG,
          source: wG
        });
        else {
          SG.landed(), this.assets = bG, this.owner = LG;
          try {
            SG.packSwapped()
          } finally {
            this.settled(GG, ZG, this.files())
          }
        }
      }
      async assetsFor(GG) {
        var bG;
        return (null !== (bG = this.host.assetsOf) && void 0 !== bG ? bG : UG.f)(GG, await this.maxLayerWidth())
      }
      texturesIn(GG, bG) {
        return GG === this.assets && (null === GG || bG === this.owner)
      }
      settled(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        GG !== this.latest || this.ended || this.host.stopped() || this.host.settled(bG, ZG, wG)
      }
    }
  },
  51447: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      followPagePackFiles: () => LG
    });
    var wG = ZG(51435),
      SG = ZG(51442);

    function LG(GG, bG, ZG, LG, yG) {
      let kG, UG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : GG => (0, SG.f)(GG, (0, wG.deviceMaxLayerWidth)(ZG)),
        YG = 0,
        VG = null;
      const pG = () => {
          if (null === VG || null !== VG.gameSource && !bG.showsPage()) return;
          const ZG = null === VG.gameSource ? VG : GG.playerState();
          if (ZG.pack === kG) return;
          kG = ZG.pack;
          const SG = ++YG;
          UG(ZG).then((GG => {
            SG === YG && LG((0, wG.packFilesOf)(GG, "player"))
          }), (GG => {
            SG === YG && (kG = void 0), yG("the texture pack's files couldn't be had for the previews: the files in stay", GG)
          }))
        },
        fG = GG.subscribe((GG => {
          VG = GG, pG()
        })),
        QG = GG.onPlayerPackChange(pG),
        KG = bG.onPageShown(pG);
      return () => {
        fG(), QG(), KG(), YG++
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);