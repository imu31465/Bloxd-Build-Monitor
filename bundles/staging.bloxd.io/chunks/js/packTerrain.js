export const id = 46;
export const ids = [46];
export const modules = {
  51075: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      MAX_LAYER_WIDTH: () => cB,
      PackTextures: () => UB,
      deviceMaxLayerWidth: () => nB,
      layerWidthFor: () => FB,
      packFileUrl: () => NB,
      packFilesOf: () => yB,
      packTerrainSources: () => gB,
      webgl1GridColumns: () => hB,
      webgl1LayerWidth: () => zB
    });
    var TB = ZB(3281),
      JB = ZB(40765),
      oB = ZB(40851),
      GB = ZB(51082),
      vB = ZB(40840),
      kB = ZB(51091);
    const cB = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function nB(BB) {
      return (0, TB.c)() ? Math.min(cB[BB], 64) : cB[BB]
    }

    function hB(BB) {
      const IB = Math.ceil(Math.log2(Math.max(1, BB)));
      return 2 ** Math.ceil(IB / 2)
    }

    function zB(BB, IB, ZB) {
      const TB = null !== ZB && ZB > 0 ? ZB : JB.b.limits.MAX_TEXTURE_SIZE;
      return FB(Math.max(1, Math.floor(TB / hB(IB))), BB)
    }

    function FB(BB, IB) {
      let ZB = 1;
      for (; 2 * ZB <= Math.min(BB, IB);) ZB *= 2;
      return ZB
    }

    function NB(BB, IB) {
      return "string" !== typeof BB || "" === BB ? null : "player" === IB || (0, GB.c)(BB) ? BB : null
    }
    async function gB(BB, IB, TB) {
      const JB = await ZB.e(207).then((() => ZB(34276))),
        {
          sheetLayout: GB,
          sheetWidth: kB
        } = BB;
      if (kB > IB) throw new Error(`the pack's atlas is ${kB} px wide, not within ${IB} px`);
      if (!(GB.length === JB.imagesPerAtlas.length && GB.every(((BB, IB) => BB === JB.imagesPerAtlas[IB])))) {
        const BB = `the pack's atlas is sheets of ${GB.join(", ")} layers, the built atlas's ${JB.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (GB.length < JB.imagesPerAtlas.length) throw new Error(BB);
        console.warn(BB)
      }
      return {
        atlasSheets: [],
        heldUntil: BB.heldUntil,
        texture: IB => {
          var ZB, GB, vB;
          return null !== (ZB = null !== (GB = null !== (vB = NB(BB.terrain.texture(IB), TB)) && void 0 !== vB ? vB : JB.animatedBlockTextures[IB]) && void 0 !== GB ? GB : JB.rotatedBlockTextures[IB]) && void 0 !== ZB ? ZB : function(BB, IB, ZB) {
            var TB, JB;
            const GB = null !== (TB = oB.c[BB]) && void 0 !== TB ? TB : null;
            return null === GB ? null : null !== (JB = NB(IB.texture(BB), ZB)) && void 0 !== JB ? JB : GB
          }(IB, BB, TB)
        },
        decoded: IB => {
          const ZB = (0, vB.k)(IB);
          return null === ZB ? null : (async IB => {
            const ZB = BB.sheetPixels.at(IB);
            if (ZB) {
              BB.sheetPixels[IB] = null;
              const TB = kB > 0 ? ZB.byteLength / (4 * kB) : 0;
              return {
                width: kB,
                height: TB,
                pixels: new Uint8Array(ZB.buffer, ZB.byteOffset, ZB.byteLength)
              }
            }
            const JB = BB.terrain.atlasSheets.at(IB);
            if (void 0 === JB) throw new Error(`the pack has no atlas sheet ${IB}`);
            const oB = NB(JB, TB);
            if (null === oB) throw new Error(`the pack's atlas sheet ${IB} isn't a pack file`);
            return (0, vB.q)(oB)
          })(ZB)
        }
      }
    }
    const qB = new WeakMap;

    function yB(BB, IB) {
      if (null === BB) return null;
      let ZB = qB.get(BB);
      void 0 === ZB && (ZB = {}, qB.set(BB, ZB));
      const TB = ZB[IB];
      if (void 0 !== TB) return TB;
      const {
        armourAtlasUrl: JB,
        texture: oB,
        model: GB
      } = BB, vB = {
        armourAtlasUrl: () => NB(JB, IB),
        textureUrl: BB => NB(oB(BB), IB),
        modelUrl: BB => NB(GB(BB), IB)
      };
      return ZB[IB] = vB, vB
    }
    class UB {
      constructor(BB) {
        this.host = BB, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (BB, IB, TB) => {
          const {
            backend: JB
          } = this.host, oB = nB(JB);
          if ("webgl1" !== JB) return oB;
          const [GB, vB] = await Promise.all([ZB.e(207).then((() => ZB(34276))), null !== (BB = null === (IB = (TB = this.host).maxTextureSize) || void 0 === IB ? void 0 : IB.call(TB)) && void 0 !== BB ? BB : null]);
          return zB(oB, GB.imagesPerAtlas.length * Math.max(0, ...GB.imagesPerAtlas), vB)
        })().catch((BB => {
          throw this.maxWidth = null, BB
        })), this.maxWidth
      }
      files() {
        return yB(this.assets, this.owner)
      }
      start() {
        let BB = null;
        const IB = this.host.feed.subscribe((IB => {
          const ZB = ++this.latest,
            TB = null !== IB.gameSource ? "game" : null !== BB && null !== BB.gameSource ? "join" : "page";
          BB = IB, this.host.settling(), this.assetsFor(IB).then((BB => this.apply(ZB, BB, IB, TB).catch((BB => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", BB)
          }))), (BB => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", BB), this.settled(ZB, IB, null, {
              error: BB,
              source: TB
            })
          }))
        }));
        return () => {
          IB(), this.latest++, this.ended = !0
        }
      }
      async apply(BB, IB, ZB, TB) {
        const {
          host: JB
        } = this;
        if (BB !== this.latest || JB.stopped()) return;
        const oB = (0, GB.i)(ZB);
        if (this.texturesIn(IB, oB) && 0 === this.swapping) return void this.settled(BB, ZB, yB(IB, oB));
        let kB;
        this.swapping++;
        let cB = null;
        try {
          kB = await JB.terrain.swap((BB => {
            var IB;
            JB.warn(`texture pack texture ${null!==(IB=BB.name)&&void 0!==IB?IB:"(all)"} failed`, BB.error), null !== BB.name && null === (0, vB.k)(BB.name) || (cB = BB.error)
          }), (async () => JB.sourcesOf ? JB.sourcesOf(IB) : null === IB ? (0, vB.n)() : gB(IB, await this.maxLayerWidth(), oB)), {
            wholeAtlas: null !== IB,
            wanted: () => BB === this.latest
          })
        } catch (nB) {
          return JB.warn("the texture pack's swap failed: the textures in stay", nB), void this.settled(BB, ZB, null, {
            error: nB,
            source: TB
          })
        } finally {
          this.swapping--
        }
        if (!0 !== kB || this.ended) this.settled(BB, ZB, null, {
          error: cB,
          source: TB
        });
        else {
          JB.landed(), this.assets = IB, this.owner = oB;
          try {
            JB.packSwapped()
          } finally {
            this.settled(BB, ZB, this.files())
          }
        }
      }
      async assetsFor(BB) {
        var IB;
        return (null !== (IB = this.host.assetsOf) && void 0 !== IB ? IB : kB.i)(BB, await this.maxLayerWidth())
      }
      texturesIn(BB, IB) {
        return BB === this.assets && (null === BB || IB === this.owner)
      }
      settled(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        BB !== this.latest || this.ended || this.host.stopped() || this.host.settled(IB, ZB, TB)
      }
    }
  },
  51093: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      followPagePackFiles: () => oB
    });
    var TB = ZB(51075),
      JB = ZB(51091);

    function oB(BB, IB, ZB, oB, GB) {
      let vB, kB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => (0, JB.i)(BB, (0, TB.deviceMaxLayerWidth)(ZB)),
        cB = 0,
        nB = null;
      const hB = () => {
          if (null === nB || null !== nB.gameSource && !IB.showsPage()) return;
          const ZB = null === nB.gameSource ? nB : BB.playerState();
          if (ZB.pack === vB) return;
          vB = ZB.pack;
          const JB = ++cB;
          kB(ZB).then((BB => {
            JB === cB && oB((0, TB.packFilesOf)(BB, "player"))
          }), (BB => {
            JB === cB && (vB = void 0), GB("the texture pack's files couldn't be had for the previews: the files in stay", BB)
          }))
        },
        zB = BB.subscribe((BB => {
          nB = BB, hB()
        })),
        FB = BB.onPlayerPackChange(hB),
        NB = IB.onPageShown(hB);
      return () => {
        zB(), FB(), NB(), cB++
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);