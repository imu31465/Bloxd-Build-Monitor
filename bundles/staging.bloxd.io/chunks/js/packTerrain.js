export const id = 45;
export const ids = [45];
export const modules = {
  50734: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      MAX_LAYER_WIDTH: () => qC,
      PackTextures: () => GC,
      deviceMaxLayerWidth: () => FC,
      layerWidthFor: () => MC,
      packFileUrl: () => gC,
      packFilesOf: () => PC,
      packTerrainSources: () => SC,
      webgl1GridColumns: () => WC,
      webgl1LayerWidth: () => NC
    });
    var QC = ZC(3101),
      wC = ZC(40549),
      bC = ZC(40659),
      nC = ZC(50739),
      fC = ZC(40647),
      oC = ZC(50746);
    const qC = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function FC(CC) {
      return (0, QC.c)() ? Math.min(qC[CC], 64) : qC[CC]
    }

    function WC(CC) {
      const zC = Math.ceil(Math.log2(Math.max(1, CC)));
      return 2 ** Math.ceil(zC / 2)
    }

    function NC(CC, zC, ZC) {
      const QC = null !== ZC && ZC > 0 ? ZC : wC.b.limits.MAX_TEXTURE_SIZE;
      return MC(Math.max(1, Math.floor(QC / WC(zC))), CC)
    }

    function MC(CC, zC) {
      let ZC = 1;
      for (; 2 * ZC <= Math.min(CC, zC);) ZC *= 2;
      return ZC
    }

    function gC(CC, zC) {
      return "string" !== typeof CC || "" === CC ? null : "player" === zC || (0, nC.b)(CC) ? CC : null
    }
    async function SC(CC, zC, QC) {
      const wC = await ZC.e(204).then((() => ZC(34243))),
        {
          sheetLayout: nC,
          sheetWidth: oC
        } = CC;
      if (oC > zC) throw new Error(`the pack's atlas is ${oC} px wide, not within ${zC} px`);
      if (!(nC.length === wC.imagesPerAtlas.length && nC.every(((CC, zC) => CC === wC.imagesPerAtlas[zC])))) {
        const CC = `the pack's atlas is sheets of ${nC.join(", ")} layers, the built atlas's ${wC.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (nC.length < wC.imagesPerAtlas.length) throw new Error(CC);
        console.warn(CC)
      }
      return {
        atlasSheets: [],
        heldUntil: CC.heldUntil,
        texture: zC => {
          var ZC, nC, fC;
          return null !== (ZC = null !== (nC = null !== (fC = gC(CC.terrain.texture(zC), QC)) && void 0 !== fC ? fC : wC.animatedBlockTextures[zC]) && void 0 !== nC ? nC : wC.rotatedBlockTextures[zC]) && void 0 !== ZC ? ZC : function(CC, zC, ZC) {
            var QC, wC;
            const nC = null !== (QC = bC.e[CC]) && void 0 !== QC ? QC : null;
            return null === nC ? null : null !== (wC = gC(zC.texture(CC), ZC)) && void 0 !== wC ? wC : nC
          }(zC, CC, QC)
        },
        decoded: zC => {
          const ZC = (0, fC.d)(zC);
          return null === ZC ? null : (async zC => {
            const ZC = CC.sheetPixels.at(zC);
            if (ZC) {
              CC.sheetPixels[zC] = null;
              const QC = oC > 0 ? ZC.byteLength / (4 * oC) : 0;
              return {
                width: oC,
                height: QC,
                pixels: new Uint8Array(ZC.buffer, ZC.byteOffset, ZC.byteLength)
              }
            }
            const wC = CC.terrain.atlasSheets.at(zC);
            if (void 0 === wC) throw new Error(`the pack has no atlas sheet ${zC}`);
            const bC = gC(wC, QC);
            if (null === bC) throw new Error(`the pack's atlas sheet ${zC} isn't a pack file`);
            return (0, fC.j)(bC)
          })(ZC)
        }
      }
    }
    const pC = new WeakMap;

    function PC(CC, zC) {
      if (null === CC) return null;
      let ZC = pC.get(CC);
      void 0 === ZC && (ZC = {}, pC.set(CC, ZC));
      const QC = ZC[zC];
      if (void 0 !== QC) return QC;
      const {
        armourAtlasUrl: wC,
        texture: bC,
        model: nC
      } = CC, fC = {
        armourAtlasUrl: () => gC(wC, zC),
        textureUrl: CC => gC(bC(CC), zC),
        modelUrl: CC => gC(nC(CC), zC)
      };
      return ZC[zC] = fC, fC
    }
    class GC {
      constructor(CC) {
        this.host = CC, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (CC, zC, QC) => {
          const {
            backend: wC
          } = this.host, bC = FC(wC);
          if ("webgl1" !== wC) return bC;
          const [nC, fC] = await Promise.all([ZC.e(204).then((() => ZC(34243))), null !== (CC = null === (zC = (QC = this.host).maxTextureSize) || void 0 === zC ? void 0 : zC.call(QC)) && void 0 !== CC ? CC : null]);
          return NC(bC, nC.imagesPerAtlas.length * Math.max(0, ...nC.imagesPerAtlas), fC)
        })().catch((CC => {
          throw this.maxWidth = null, CC
        })), this.maxWidth
      }
      files() {
        return PC(this.assets, this.owner)
      }
      start() {
        let CC = null;
        const zC = this.host.feed.subscribe((zC => {
          const ZC = ++this.latest,
            QC = null !== zC.gameSource ? "game" : null !== CC && null !== CC.gameSource ? "join" : "page";
          CC = zC, this.host.settling(), this.assetsFor(zC).then((CC => this.apply(ZC, CC, zC, QC).catch((CC => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", CC)
          }))), (CC => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", CC), this.settled(ZC, zC, null, {
              error: CC,
              source: QC
            })
          }))
        }));
        return () => {
          zC(), this.latest++, this.ended = !0
        }
      }
      async apply(CC, zC, ZC, QC) {
        const {
          host: wC
        } = this;
        if (CC !== this.latest || wC.stopped()) return;
        const bC = (0, nC.i)(ZC);
        if (this.texturesIn(zC, bC) && 0 === this.swapping) return void this.settled(CC, ZC, PC(zC, bC));
        let oC;
        this.swapping++;
        let qC = null;
        try {
          oC = await wC.terrain.swap((CC => {
            var zC;
            wC.warn(`texture pack texture ${null!==(zC=CC.name)&&void 0!==zC?zC:"(all)"} failed`, CC.error), null !== CC.name && null === (0, fC.d)(CC.name) || (qC = CC.error)
          }), (async () => wC.sourcesOf ? wC.sourcesOf(zC) : null === zC ? (0, fC.f)() : SC(zC, await this.maxLayerWidth(), bC)), {
            wholeAtlas: null !== zC,
            wanted: () => CC === this.latest
          })
        } catch (FC) {
          return wC.warn("the texture pack's swap failed: the textures in stay", FC), void this.settled(CC, ZC, null, {
            error: FC,
            source: QC
          })
        } finally {
          this.swapping--
        }
        if (!0 !== oC || this.ended) this.settled(CC, ZC, null, {
          error: qC,
          source: QC
        });
        else {
          wC.landed(), this.assets = zC, this.owner = bC;
          try {
            wC.packSwapped()
          } finally {
            this.settled(CC, ZC, this.files())
          }
        }
      }
      async assetsFor(CC) {
        var zC;
        return (null !== (zC = this.host.assetsOf) && void 0 !== zC ? zC : oC.g)(CC, await this.maxLayerWidth())
      }
      texturesIn(CC, zC) {
        return CC === this.assets && (null === CC || zC === this.owner)
      }
      settled(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        CC !== this.latest || this.ended || this.host.stopped() || this.host.settled(zC, ZC, QC)
      }
    }
  },
  50750: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      followPagePackFiles: () => bC
    });
    var QC = ZC(50734),
      wC = ZC(50746);

    function bC(CC, zC, ZC, bC, nC) {
      let fC, oC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CC => (0, wC.g)(CC, (0, QC.deviceMaxLayerWidth)(ZC)),
        qC = 0,
        FC = null;
      const WC = () => {
          if (null === FC || null !== FC.gameSource && !zC.showsPage()) return;
          const ZC = null === FC.gameSource ? FC : CC.playerState();
          if (ZC.pack === fC) return;
          fC = ZC.pack;
          const wC = ++qC;
          oC(ZC).then((CC => {
            wC === qC && bC((0, QC.packFilesOf)(CC, "player"))
          }), (CC => {
            wC === qC && (fC = void 0), nC("the texture pack's files couldn't be had for the previews: the files in stay", CC)
          }))
        },
        NC = CC.subscribe((CC => {
          FC = CC, WC()
        })),
        MC = CC.onPlayerPackChange(WC),
        gC = zC.onPageShown(WC);
      return () => {
        NC(), MC(), gC(), qC++
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);