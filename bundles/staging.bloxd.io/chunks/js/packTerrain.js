export const id = 46;
export const ids = [46];
export const modules = {
  51166: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      MAX_LAYER_WIDTH: () => UB,
      PackTextures: () => GB,
      deviceMaxLayerWidth: () => aB,
      layerWidthFor: () => sB,
      packFileUrl: () => JB,
      packFilesOf: () => kB,
      packTerrainSources: () => mB,
      webgl1GridColumns: () => pB,
      webgl1LayerWidth: () => rB
    });
    var QB = zB(3228),
      nB = zB(40814),
      dB = zB(40906),
      IB = zB(51168),
      NB = zB(40889),
      uB = zB(51173);
    const UB = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function aB(BB) {
      return (0, QB.b)() ? Math.min(UB[BB], 64) : UB[BB]
    }

    function pB(BB) {
      const jB = Math.ceil(Math.log2(Math.max(1, BB)));
      return 2 ** Math.ceil(jB / 2)
    }

    function rB(BB, jB, zB) {
      const QB = null !== zB && zB > 0 ? zB : nB.c.limits.MAX_TEXTURE_SIZE;
      return sB(Math.max(1, Math.floor(QB / pB(jB))), BB)
    }

    function sB(BB, jB) {
      let zB = 1;
      for (; 2 * zB <= Math.min(BB, jB);) zB *= 2;
      return zB
    }

    function JB(BB, jB) {
      return "string" !== typeof BB || "" === BB ? null : "player" === jB || (0, IB.d)(BB) ? BB : null
    }
    async function mB(BB, jB, QB) {
      const nB = await zB.e(207).then((() => zB(34335))),
        {
          sheetLayout: IB,
          sheetWidth: uB
        } = BB;
      if (uB > jB) throw new Error(`the pack's atlas is ${uB} px wide, not within ${jB} px`);
      if (!(IB.length === nB.imagesPerAtlas.length && IB.every(((BB, jB) => BB === nB.imagesPerAtlas[jB])))) {
        const BB = `the pack's atlas is sheets of ${IB.join(", ")} layers, the built atlas's ${nB.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (IB.length < nB.imagesPerAtlas.length) throw new Error(BB);
        console.warn(BB)
      }
      return {
        atlasSheets: [],
        heldUntil: BB.heldUntil,
        texture: jB => {
          var zB, IB, NB;
          return null !== (zB = null !== (IB = null !== (NB = JB(BB.terrain.texture(jB), QB)) && void 0 !== NB ? NB : nB.animatedBlockTextures[jB]) && void 0 !== IB ? IB : nB.rotatedBlockTextures[jB]) && void 0 !== zB ? zB : function(BB, jB, zB) {
            var QB, nB;
            const IB = null !== (QB = dB.b[BB]) && void 0 !== QB ? QB : null;
            return null === IB ? null : null !== (nB = JB(jB.texture(BB), zB)) && void 0 !== nB ? nB : IB
          }(jB, BB, QB)
        },
        decoded: jB => {
          const zB = (0, NB.h)(jB);
          return null === zB ? null : (async jB => {
            const zB = BB.sheetPixels.at(jB);
            if (zB) {
              BB.sheetPixels[jB] = null;
              const QB = uB > 0 ? zB.byteLength / (4 * uB) : 0;
              return {
                width: uB,
                height: QB,
                pixels: new Uint8Array(zB.buffer, zB.byteOffset, zB.byteLength)
              }
            }
            const nB = BB.terrain.atlasSheets.at(jB);
            if (void 0 === nB) throw new Error(`the pack has no atlas sheet ${jB}`);
            const dB = JB(nB, QB);
            if (null === dB) throw new Error(`the pack's atlas sheet ${jB} isn't a pack file`);
            return (0, NB.o)(dB)
          })(zB)
        }
      }
    }
    const yB = new WeakMap;

    function kB(BB, jB) {
      if (null === BB) return null;
      let zB = yB.get(BB);
      void 0 === zB && (zB = {}, yB.set(BB, zB));
      const QB = zB[jB];
      if (void 0 !== QB) return QB;
      const {
        armourAtlasUrl: nB,
        texture: dB,
        model: IB
      } = BB, NB = {
        armourAtlasUrl: () => JB(nB, jB),
        textureUrl: BB => JB(dB(BB), jB),
        modelUrl: BB => JB(IB(BB), jB)
      };
      return zB[jB] = NB, NB
    }
    class GB {
      constructor(BB) {
        this.host = BB, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (BB, jB, QB) => {
          const {
            backend: nB
          } = this.host, dB = aB(nB);
          if ("webgl1" !== nB) return dB;
          const [IB, NB] = await Promise.all([zB.e(207).then((() => zB(34335))), null !== (BB = null === (jB = (QB = this.host).maxTextureSize) || void 0 === jB ? void 0 : jB.call(QB)) && void 0 !== BB ? BB : null]);
          return rB(dB, IB.imagesPerAtlas.length * Math.max(0, ...IB.imagesPerAtlas), NB)
        })().catch((BB => {
          throw this.maxWidth = null, BB
        })), this.maxWidth
      }
      files() {
        return kB(this.assets, this.owner)
      }
      start() {
        let BB = null;
        const jB = this.host.feed.subscribe((jB => {
          const zB = ++this.latest,
            QB = null !== jB.gameSource ? "game" : null !== BB && null !== BB.gameSource ? "join" : "page";
          BB = jB, this.host.settling(), this.assetsFor(jB).then((BB => this.apply(zB, BB, jB, QB).catch((BB => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", BB)
          }))), (BB => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", BB), this.settled(zB, jB, null, {
              error: BB,
              source: QB
            })
          }))
        }));
        return () => {
          jB(), this.latest++, this.ended = !0
        }
      }
      async apply(BB, jB, zB, QB) {
        const {
          host: nB
        } = this;
        if (BB !== this.latest || nB.stopped()) return;
        const dB = (0, IB.m)(zB);
        if (this.texturesIn(jB, dB) && 0 === this.swapping) return void this.settled(BB, zB, kB(jB, dB));
        let uB;
        this.swapping++;
        let UB = null;
        try {
          uB = await nB.terrain.swap((BB => {
            var jB;
            nB.warn(`texture pack texture ${null!==(jB=BB.name)&&void 0!==jB?jB:"(all)"} failed`, BB.error), null !== BB.name && null === (0, NB.h)(BB.name) || (UB = BB.error)
          }), (async () => nB.sourcesOf ? nB.sourcesOf(jB) : null === jB ? (0, NB.k)() : mB(jB, await this.maxLayerWidth(), dB)), {
            wholeAtlas: null !== jB,
            wanted: () => BB === this.latest
          })
        } catch (aB) {
          return nB.warn("the texture pack's swap failed: the textures in stay", aB), void this.settled(BB, zB, null, {
            error: aB,
            source: QB
          })
        } finally {
          this.swapping--
        }
        if (!0 !== uB || this.ended) this.settled(BB, zB, null, {
          error: UB,
          source: QB
        });
        else {
          nB.landed(), this.assets = jB, this.owner = dB;
          try {
            nB.packSwapped()
          } finally {
            this.settled(BB, zB, this.files())
          }
        }
      }
      async assetsFor(BB) {
        var jB;
        return (null !== (jB = this.host.assetsOf) && void 0 !== jB ? jB : uB.h)(BB, await this.maxLayerWidth())
      }
      texturesIn(BB, jB) {
        return BB === this.assets && (null === BB || jB === this.owner)
      }
      settled(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        BB !== this.latest || this.ended || this.host.stopped() || this.host.settled(jB, zB, QB)
      }
    }
  },
  51181: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      followPagePackFiles: () => dB
    });
    var QB = zB(51166),
      nB = zB(51173);

    function dB(BB, jB, zB, dB, IB) {
      let NB, uB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => (0, nB.h)(BB, (0, QB.deviceMaxLayerWidth)(zB)),
        UB = 0,
        aB = null;
      const pB = () => {
          if (null === aB || null !== aB.gameSource && !jB.showsPage()) return;
          const zB = null === aB.gameSource ? aB : BB.playerState();
          if (zB.pack === NB) return;
          NB = zB.pack;
          const nB = ++UB;
          uB(zB).then((BB => {
            nB === UB && dB((0, QB.packFilesOf)(BB, "player"))
          }), (BB => {
            nB === UB && (NB = void 0), IB("the texture pack's files couldn't be had for the previews: the files in stay", BB)
          }))
        },
        rB = BB.subscribe((BB => {
          aB = BB, pB()
        })),
        sB = BB.onPlayerPackChange(pB),
        JB = jB.onPageShown(pB);
      return () => {
        rB(), sB(), JB(), UB++
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);