export const id = 53;
export const ids = [53];
export const modules = {
  54083: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      MAX_LAYER_WIDTH: () => MB,
      PackTextures: () => WB,
      deviceMaxLayerWidth: () => PB,
      layerWidthFor: () => pB,
      packFileUrl: () => qB,
      packFilesOf: () => RB,
      packTerrainSources: () => ZB,
      webgl1GridColumns: () => zB,
      webgl1LayerWidth: () => lB
    });
    var YB = GB(4808),
      DB = GB(3257),
      QB = GB(41736),
      oB = GB(41858),
      jB = GB(54085),
      yB = GB(41851),
      JB = GB(54089);
    const MB = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function PB(BB) {
      return (0, DB.b)() || (0, YB.i)() ? Math.min(MB[BB], 64) : MB[BB]
    }

    function zB(BB) {
      const OB = Math.ceil(Math.log2(Math.max(1, BB)));
      return 2 ** Math.ceil(OB / 2)
    }

    function lB(BB, OB, GB) {
      const YB = null !== GB && GB > 0 ? GB : QB.e.limits.MAX_TEXTURE_SIZE;
      return pB(Math.max(1, Math.floor(YB / zB(OB))), BB)
    }

    function pB(BB, OB) {
      let GB = 1;
      for (; 2 * GB <= Math.min(BB, OB);) GB *= 2;
      return GB
    }

    function qB(BB, OB) {
      return "string" !== typeof BB || "" === BB ? null : "player" === OB || (0, jB.e)(BB) ? BB : null
    }
    async function ZB(BB, OB, YB) {
      const DB = await GB.e(228).then((() => GB(34878))),
        {
          sheetLayout: QB,
          sheetWidth: jB
        } = BB;
      if (jB > OB) throw new Error(`the pack's atlas is ${jB} px wide, not within ${OB} px`);
      if (!(QB.length === DB.imagesPerAtlas.length && QB.every(((BB, OB) => BB === DB.imagesPerAtlas[OB])))) {
        const BB = `the pack's atlas is sheets of ${QB.join(", ")} layers, the built atlas's ${DB.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (QB.length < DB.imagesPerAtlas.length) throw new Error(BB);
        console.warn(BB)
      }
      return {
        atlasSheets: [],
        heldUntil: BB.heldUntil,
        texture: OB => {
          var GB, QB, jB;
          return null !== (GB = null !== (QB = null !== (jB = qB(BB.terrain.texture(OB), YB)) && void 0 !== jB ? jB : DB.animatedBlockTextures[OB]) && void 0 !== QB ? QB : DB.rotatedBlockTextures[OB]) && void 0 !== GB ? GB : function(BB, OB, GB) {
            var YB, DB;
            const QB = null !== (YB = oB.c[BB]) && void 0 !== YB ? YB : null;
            return null === QB ? null : null !== (DB = qB(OB.texture(BB), GB)) && void 0 !== DB ? DB : QB
          }(OB, BB, YB)
        },
        decoded: OB => {
          const GB = (0, yB.j)(OB);
          return null === GB ? null : (async OB => {
            const GB = BB.sheetPixels.at(OB);
            if (GB) {
              BB.sheetPixels[OB] = null;
              const YB = jB > 0 ? GB.byteLength / (4 * jB) : 0;
              return {
                width: jB,
                height: YB,
                pixels: new Uint8Array(GB.buffer, GB.byteOffset, GB.byteLength)
              }
            }
            const DB = BB.terrain.atlasSheets.at(OB);
            if (void 0 === DB) throw new Error(`the pack has no atlas sheet ${OB}`);
            const QB = qB(DB, YB);
            if (null === QB) throw new Error(`the pack's atlas sheet ${OB} isn't a pack file`);
            return (0, yB.p)(QB)
          })(GB)
        }
      }
    }
    const NB = new WeakMap;

    function RB(BB, OB) {
      if (null === BB) return null;
      let GB = NB.get(BB);
      void 0 === GB && (GB = {}, NB.set(BB, GB));
      const YB = GB[OB];
      if (void 0 !== YB) return YB;
      const {
        armourAtlasUrl: DB,
        texture: QB,
        model: oB
      } = BB, jB = {
        armourAtlasUrl: () => qB(DB, OB),
        textureUrl: BB => qB(QB(BB), OB),
        modelUrl: BB => qB(oB(BB), OB)
      };
      return GB[OB] = jB, jB
    }
    class WB {
      constructor(BB) {
        this.host = BB, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (BB, OB, YB) => {
          const {
            backend: DB
          } = this.host, QB = PB(DB);
          if ("webgl1" !== DB) return QB;
          const [oB, jB] = await Promise.all([GB.e(228).then((() => GB(34878))), null !== (BB = null === (OB = (YB = this.host).maxTextureSize) || void 0 === OB ? void 0 : OB.call(YB)) && void 0 !== BB ? BB : null]);
          return lB(QB, oB.imagesPerAtlas.length * Math.max(0, ...oB.imagesPerAtlas), jB)
        })().catch((BB => {
          throw this.maxWidth = null, BB
        })), this.maxWidth
      }
      files() {
        return RB(this.assets, this.owner)
      }
      start() {
        let BB = null;
        const OB = this.host.feed.subscribe((OB => {
          const GB = ++this.latest,
            YB = null !== OB.gameSource ? "game" : null !== BB && null !== BB.gameSource ? "join" : "page";
          BB = OB, this.host.settling(), this.assetsFor(OB).then((BB => this.apply(GB, BB, OB, YB).catch((BB => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", BB)
          }))), (BB => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", BB), this.settled(GB, OB, null, {
              error: BB,
              source: YB
            })
          }))
        }));
        return () => {
          OB(), this.latest++, this.ended = !0
        }
      }
      async apply(BB, OB, GB, YB) {
        const {
          host: DB
        } = this;
        if (BB !== this.latest || DB.stopped()) return;
        const QB = (0, jB.k)(GB);
        if (this.texturesIn(OB, QB) && 0 === this.swapping) return void this.settled(BB, GB, RB(OB, QB));
        let oB;
        this.swapping++;
        let JB = null;
        try {
          oB = await DB.terrain.swap((BB => {
            var OB;
            DB.warn(`texture pack texture ${null!==(OB=BB.name)&&void 0!==OB?OB:"(all)"} failed`, BB.error), null !== BB.name && null === (0, yB.j)(BB.name) || (JB = BB.error)
          }), (async () => DB.sourcesOf ? DB.sourcesOf(OB) : null === OB ? (0, yB.m)() : ZB(OB, await this.maxLayerWidth(), QB)), {
            wholeAtlas: null !== OB,
            wanted: () => BB === this.latest
          })
        } catch (MB) {
          return DB.warn("the texture pack's swap failed: the textures in stay", MB), void this.settled(BB, GB, null, {
            error: MB,
            source: YB
          })
        } finally {
          this.swapping--
        }
        if (!0 !== oB || this.ended) this.settled(BB, GB, null, {
          error: JB,
          source: YB
        });
        else {
          DB.landed(), this.assets = OB, this.owner = QB;
          try {
            DB.packSwapped()
          } finally {
            this.settled(BB, GB, this.files())
          }
        }
      }
      async assetsFor(BB) {
        var OB;
        return (null !== (OB = this.host.assetsOf) && void 0 !== OB ? OB : JB.i)(BB, await this.maxLayerWidth())
      }
      texturesIn(BB, OB) {
        return BB === this.assets && (null === BB || OB === this.owner)
      }
      settled(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        BB !== this.latest || this.ended || this.host.stopped() || this.host.settled(OB, GB, YB)
      }
    }
  },
  54092: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      followPagePackFiles: () => QB
    });
    var YB = GB(54083),
      DB = GB(54089);

    function QB(BB, OB, GB, QB, oB) {
      let jB, yB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => (0, DB.i)(BB, (0, YB.deviceMaxLayerWidth)(GB)),
        JB = 0,
        MB = null;
      const PB = () => {
          if (null === MB || null !== MB.gameSource && !OB.showsPage()) return;
          const GB = null === MB.gameSource ? MB : BB.playerState();
          if (GB.pack === jB) return;
          jB = GB.pack;
          const DB = ++JB;
          yB(GB).then((BB => {
            DB === JB && QB((0, YB.packFilesOf)(BB, "player"))
          }), (BB => {
            DB === JB && (jB = void 0), oB("the texture pack's files couldn't be had for the previews: the files in stay", BB)
          }))
        },
        zB = BB.subscribe((BB => {
          MB = BB, PB()
        })),
        lB = BB.onPlayerPackChange(PB),
        pB = OB.onPageShown(PB);
      return () => {
        zB(), lB(), pB(), JB++
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);