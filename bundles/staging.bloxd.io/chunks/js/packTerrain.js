export const id = 42;
export const ids = [42];
export const modules = {
  42039: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      MAX_LAYER_WIDTH: () => gB,
      PackTextures: () => vB,
      deviceMaxLayerWidth: () => oB,
      layerWidthFor: () => OB,
      packFileUrl: () => DB,
      packFilesOf: () => EB,
      packTerrainSources: () => uB,
      webgl1GridColumns: () => kB,
      webgl1LayerWidth: () => LB
    });
    var VB = dB(2575),
      yB = dB(39508),
      pB = dB(39727),
      lB = dB(42041),
      JB = dB(39716),
      YB = dB(42043);
    const gB = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function oB(BB) {
      return (0, VB.e)() ? Math.min(gB[BB], 64) : gB[BB]
    }

    function kB(BB) {
      const TB = Math.ceil(Math.log2(Math.max(1, BB)));
      return 2 ** Math.ceil(TB / 2)
    }

    function LB(BB, TB, dB) {
      const VB = null !== dB && dB > 0 ? dB : yB.e.limits.MAX_TEXTURE_SIZE;
      return OB(Math.max(1, Math.floor(VB / kB(TB))), BB)
    }

    function OB(BB, TB) {
      let dB = 1;
      for (; 2 * dB <= Math.min(BB, TB);) dB *= 2;
      return dB
    }

    function DB(BB, TB) {
      return "string" !== typeof BB || "" === BB ? null : "player" === TB || (0, lB.d)(BB) ? BB : null
    }
    async function uB(BB, TB, VB) {
      const yB = await dB.e(187).then((() => dB(33444))),
        {
          sheetLayout: lB,
          sheetWidth: YB
        } = BB;
      if (YB > TB) throw new Error(`the pack's atlas is ${YB} px wide, not within ${TB} px`);
      if (!(lB.length === yB.imagesPerAtlas.length && lB.every(((BB, TB) => BB === yB.imagesPerAtlas[TB])))) {
        const BB = `the pack's atlas is sheets of ${lB.join(", ")} layers, the built atlas's ${yB.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (lB.length < yB.imagesPerAtlas.length) throw new Error(BB);
        console.warn(BB)
      }
      return {
        atlasSheets: [],
        heldUntil: BB.heldUntil,
        texture: TB => {
          var dB, lB, JB;
          return null !== (dB = null !== (lB = null !== (JB = DB(BB.terrain.texture(TB), VB)) && void 0 !== JB ? JB : yB.animatedBlockTextures[TB]) && void 0 !== lB ? lB : yB.rotatedBlockTextures[TB]) && void 0 !== dB ? dB : function(BB, TB, dB) {
            var VB, yB;
            const lB = null !== (VB = pB.d[BB]) && void 0 !== VB ? VB : null;
            return null === lB ? null : null !== (yB = DB(TB.texture(BB), dB)) && void 0 !== yB ? yB : lB
          }(TB, BB, VB)
        },
        decoded: TB => {
          const dB = (0, JB.h)(TB);
          return null === dB ? null : (async TB => {
            const dB = BB.sheetPixels.at(TB);
            if (dB) {
              BB.sheetPixels[TB] = null;
              const VB = YB > 0 ? dB.byteLength / (4 * YB) : 0;
              return {
                width: YB,
                height: VB,
                pixels: new Uint8Array(dB.buffer, dB.byteOffset, dB.byteLength)
              }
            }
            const yB = BB.terrain.atlasSheets.at(TB);
            if (void 0 === yB) throw new Error(`the pack has no atlas sheet ${TB}`);
            const pB = DB(yB, VB);
            if (null === pB) throw new Error(`the pack's atlas sheet ${TB} isn't a pack file`);
            return (0, JB.m)(pB)
          })(dB)
        }
      }
    }
    const HB = new WeakMap;

    function EB(BB, TB) {
      if (null === BB) return null;
      let dB = HB.get(BB);
      void 0 === dB && (dB = {}, HB.set(BB, dB));
      const VB = dB[TB];
      if (void 0 !== VB) return VB;
      const {
        armourAtlasUrl: yB,
        texture: pB,
        model: lB
      } = BB, JB = {
        armourAtlasUrl: () => DB(yB, TB),
        textureUrl: BB => DB(pB(BB), TB),
        modelUrl: BB => DB(lB(BB), TB)
      };
      return dB[TB] = JB, JB
    }
    class vB {
      constructor(BB) {
        this.host = BB, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (BB, TB, VB) => {
          const {
            backend: yB
          } = this.host, pB = oB(yB);
          if ("webgl1" !== yB) return pB;
          const [lB, JB] = await Promise.all([dB.e(187).then((() => dB(33444))), null !== (BB = null === (TB = (VB = this.host).maxTextureSize) || void 0 === TB ? void 0 : TB.call(VB)) && void 0 !== BB ? BB : null]);
          return LB(pB, lB.imagesPerAtlas.length * Math.max(0, ...lB.imagesPerAtlas), JB)
        })().catch((BB => {
          throw this.maxWidth = null, BB
        })), this.maxWidth
      }
      files() {
        return EB(this.assets, this.owner)
      }
      iconOverrides() {
        const BB = this.files();
        return null === BB ? null : {
          itemSprite: BB.textureUrl,
          blockTexture: BB.textureUrl,
          model: BB.modelUrl
        }
      }
      start() {
        const BB = this.host.feed.subscribe((BB => {
          const TB = ++this.latest;
          this.host.settling(), this.assetsFor(BB).then((dB => this.apply(TB, dB, BB).catch((BB => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", BB)
          }))), (dB => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", dB), this.settled(TB, BB, null, !0)
          }))
        }));
        return () => {
          BB(), this.latest++, this.ended = !0
        }
      }
      async apply(BB, TB, dB) {
        const {
          host: VB
        } = this;
        if (BB !== this.latest || VB.stopped()) return;
        const yB = (0, lB.l)(dB);
        if (this.texturesIn(TB, yB) && 0 === this.swapping) return void this.settled(BB, dB, EB(TB, yB));
        let pB;
        this.swapping++;
        try {
          pB = await VB.terrain.swap((BB => {
            var TB;
            VB.warn(`texture pack texture ${null!==(TB=BB.name)&&void 0!==TB?TB:"(all)"} failed`, BB.error)
          }), (async () => VB.sourcesOf ? VB.sourcesOf(TB) : null === TB ? (0, JB.i)() : uB(TB, await this.maxLayerWidth(), yB)), {
            wholeAtlas: null !== TB,
            wanted: () => BB === this.latest
          })
        } catch (YB) {
          return VB.warn("the texture pack's swap failed: the textures in stay", YB), void this.settled(BB, dB, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== pB || this.ended) this.settled(BB, dB, null, !0);
        else {
          VB.landed(), this.assets = TB, this.owner = yB;
          try {
            VB.packSwapped()
          } finally {
            this.settled(BB, dB, this.files())
          }
        }
      }
      async assetsFor(BB) {
        var TB;
        return (null !== (TB = this.host.assetsOf) && void 0 !== TB ? TB : YB.f)(BB, await this.maxLayerWidth())
      }
      texturesIn(BB, TB) {
        return BB === this.assets && (null === BB || TB === this.owner)
      }
      settled(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        BB !== this.latest || this.ended || this.host.stopped() || this.host.settled(TB, dB, VB)
      }
    }
  },
  42050: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      followPagePackFiles: () => pB
    });
    var VB = dB(42039),
      yB = dB(42043);

    function pB(BB, TB, dB, pB, lB) {
      let JB, YB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => (0, yB.f)(BB, (0, VB.deviceMaxLayerWidth)(dB)),
        gB = 0,
        oB = null;
      const kB = () => {
          if (null === oB || null !== oB.gameSource && !TB.showsPage()) return;
          const dB = null === oB.gameSource ? oB : BB.playerState();
          if (dB.pack === JB) return;
          JB = dB.pack;
          const yB = ++gB;
          YB(dB).then((BB => {
            yB === gB && pB((0, VB.packFilesOf)(BB, "player"))
          }), (BB => {
            yB === gB && (JB = void 0), lB("the texture pack's files couldn't be had for the previews: the files in stay", BB)
          }))
        },
        LB = BB.subscribe((BB => {
          oB = BB, kB()
        })),
        OB = BB.onPlayerPackChange(kB),
        DB = TB.onPageShown(kB);
      return () => {
        LB(), OB(), DB(), gB++
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);