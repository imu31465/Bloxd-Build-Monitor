export const id = 53;
export const ids = [53];
export const modules = {
  53771: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      MAX_LAYER_WIDTH: () => EU,
      PackTextures: () => GU,
      deviceMaxLayerWidth: () => YU,
      layerWidthFor: () => pU,
      packFileUrl: () => aU,
      packFilesOf: () => kU,
      packTerrainSources: () => tU,
      webgl1GridColumns: () => NU,
      webgl1LayerWidth: () => IU
    });
    var cU = zU(4800),
      yU = zU(3217),
      QU = zU(41799),
      AU = zU(41919),
      FU = zU(53774),
      oU = zU(41902),
      DU = zU(53776);
    const EU = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function YU(UU) {
      return (0, yU.d)() || (0, cU.l)() ? Math.min(EU[UU], 64) : EU[UU]
    }

    function NU(UU) {
      const XU = Math.ceil(Math.log2(Math.max(1, UU)));
      return 2 ** Math.ceil(XU / 2)
    }

    function IU(UU, XU, zU) {
      const cU = null !== zU && zU > 0 ? zU : QU.d.limits.MAX_TEXTURE_SIZE;
      return pU(Math.max(1, Math.floor(cU / NU(XU))), UU)
    }

    function pU(UU, XU) {
      let zU = 1;
      for (; 2 * zU <= Math.min(UU, XU);) zU *= 2;
      return zU
    }

    function aU(UU, XU) {
      return "string" !== typeof UU || "" === UU ? null : "player" === XU || (0, FU.b)(UU) ? UU : null
    }
    async function tU(UU, XU, cU) {
      const yU = await zU.e(222).then((() => zU(34975))),
        {
          sheetLayout: QU,
          sheetWidth: FU
        } = UU;
      if (FU > XU) throw new Error(`the pack's atlas is ${FU} px wide, not within ${XU} px`);
      if (!(QU.length === yU.imagesPerAtlas.length && QU.every(((UU, XU) => UU === yU.imagesPerAtlas[XU])))) {
        const UU = `the pack's atlas is sheets of ${QU.join(", ")} layers, the built atlas's ${yU.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (QU.length < yU.imagesPerAtlas.length) throw new Error(UU);
        console.warn(UU)
      }
      return {
        atlasSheets: [],
        heldUntil: UU.heldUntil,
        texture: XU => {
          var zU, QU, FU;
          return null !== (zU = null !== (QU = null !== (FU = aU(UU.terrain.texture(XU), cU)) && void 0 !== FU ? FU : yU.animatedBlockTextures[XU]) && void 0 !== QU ? QU : yU.rotatedBlockTextures[XU]) && void 0 !== zU ? zU : function(UU, XU, zU) {
            var cU, yU;
            const QU = null !== (cU = AU.c[UU]) && void 0 !== cU ? cU : null;
            return null === QU ? null : null !== (yU = aU(XU.texture(UU), zU)) && void 0 !== yU ? yU : QU
          }(XU, UU, cU)
        },
        decoded: XU => {
          const zU = (0, oU.e)(XU);
          return null === zU ? null : (async XU => {
            const zU = UU.sheetPixels.at(XU);
            if (zU) {
              UU.sheetPixels[XU] = null;
              const cU = FU > 0 ? zU.byteLength / (4 * FU) : 0;
              return {
                width: FU,
                height: cU,
                pixels: new Uint8Array(zU.buffer, zU.byteOffset, zU.byteLength)
              }
            }
            const yU = UU.terrain.atlasSheets.at(XU);
            if (void 0 === yU) throw new Error(`the pack has no atlas sheet ${XU}`);
            const QU = aU(yU, cU);
            if (null === QU) throw new Error(`the pack's atlas sheet ${XU} isn't a pack file`);
            return (0, oU.j)(QU)
          })(zU)
        }
      }
    }
    const gU = new WeakMap;

    function kU(UU, XU) {
      if (null === UU) return null;
      let zU = gU.get(UU);
      void 0 === zU && (zU = {}, gU.set(UU, zU));
      const cU = zU[XU];
      if (void 0 !== cU) return cU;
      const {
        armourAtlasUrl: yU,
        texture: QU,
        model: AU
      } = UU, FU = {
        armourAtlasUrl: () => aU(yU, XU),
        textureUrl: UU => aU(QU(UU), XU),
        modelUrl: UU => aU(AU(UU), XU)
      };
      return zU[XU] = FU, FU
    }
    class GU {
      constructor(UU) {
        this.host = UU, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (UU, XU, cU) => {
          const {
            backend: yU
          } = this.host, QU = YU(yU);
          if ("webgl1" !== yU) return QU;
          const [AU, FU] = await Promise.all([zU.e(222).then((() => zU(34975))), null !== (UU = null === (XU = (cU = this.host).maxTextureSize) || void 0 === XU ? void 0 : XU.call(cU)) && void 0 !== UU ? UU : null]);
          return IU(QU, AU.imagesPerAtlas.length * Math.max(0, ...AU.imagesPerAtlas), FU)
        })().catch((UU => {
          throw this.maxWidth = null, UU
        })), this.maxWidth
      }
      files() {
        return kU(this.assets, this.owner)
      }
      start() {
        let UU = null;
        const XU = this.host.feed.subscribe((XU => {
          const zU = ++this.latest,
            cU = null !== XU.gameSource ? "game" : null !== UU && null !== UU.gameSource ? "join" : "page";
          UU = XU, this.host.settling(), this.assetsFor(XU).then((UU => this.apply(zU, UU, XU, cU).catch((UU => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", UU)
          }))), (UU => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", UU), this.settled(zU, XU, null, {
              error: UU,
              source: cU
            })
          }))
        }));
        return () => {
          XU(), this.latest++, this.ended = !0
        }
      }
      async apply(UU, XU, zU, cU) {
        const {
          host: yU
        } = this;
        if (UU !== this.latest || yU.stopped()) return;
        const QU = (0, FU.l)(zU);
        if (this.texturesIn(XU, QU) && 0 === this.swapping) return void this.settled(UU, zU, kU(XU, QU));
        let AU;
        this.swapping++;
        let DU = null;
        try {
          AU = await yU.terrain.swap((UU => {
            var XU;
            yU.warn(`texture pack texture ${null!==(XU=UU.name)&&void 0!==XU?XU:"(all)"} failed`, UU.error), null !== UU.name && null === (0, oU.e)(UU.name) || (DU = UU.error)
          }), (async () => yU.sourcesOf ? yU.sourcesOf(XU) : null === XU ? (0, oU.i)() : tU(XU, await this.maxLayerWidth(), QU)), {
            wholeAtlas: null !== XU,
            wanted: () => UU === this.latest
          })
        } catch (EU) {
          return yU.warn("the texture pack's swap failed: the textures in stay", EU), void this.settled(UU, zU, null, {
            error: EU,
            source: cU
          })
        } finally {
          this.swapping--
        }
        if (!0 !== AU || this.ended) this.settled(UU, zU, null, {
          error: DU,
          source: cU
        });
        else {
          yU.landed(), this.assets = XU, this.owner = QU;
          try {
            yU.packSwapped()
          } finally {
            this.settled(UU, zU, this.files())
          }
        }
      }
      async assetsFor(UU) {
        var XU;
        return (null !== (XU = this.host.assetsOf) && void 0 !== XU ? XU : DU.h)(UU, await this.maxLayerWidth())
      }
      texturesIn(UU, XU) {
        return UU === this.assets && (null === UU || XU === this.owner)
      }
      settled(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        UU !== this.latest || this.ended || this.host.stopped() || this.host.settled(XU, zU, cU)
      }
    }
  },
  53785: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      followPagePackFiles: () => QU
    });
    var cU = zU(53771),
      yU = zU(53776);

    function QU(UU, XU, zU, QU, AU) {
      let FU, oU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU => (0, yU.h)(UU, (0, cU.deviceMaxLayerWidth)(zU)),
        DU = 0,
        EU = null;
      const YU = () => {
          if (null === EU || null !== EU.gameSource && !XU.showsPage()) return;
          const zU = null === EU.gameSource ? EU : UU.playerState();
          if (zU.pack === FU) return;
          FU = zU.pack;
          const yU = ++DU;
          oU(zU).then((UU => {
            yU === DU && QU((0, cU.packFilesOf)(UU, "player"))
          }), (UU => {
            yU === DU && (FU = void 0), AU("the texture pack's files couldn't be had for the previews: the files in stay", UU)
          }))
        },
        NU = UU.subscribe((UU => {
          EU = UU, YU()
        })),
        IU = UU.onPlayerPackChange(YU),
        pU = XU.onPageShown(YU);
      return () => {
        NU(), IU(), pU(), DU++
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);