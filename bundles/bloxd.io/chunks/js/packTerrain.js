export const id = 45;
export const ids = [45];
export const modules = {
  50800: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      MAX_LAYER_WIDTH: () => gD,
      PackTextures: () => nD,
      deviceMaxLayerWidth: () => RD,
      layerWidthFor: () => fD,
      packFileUrl: () => ID,
      packFilesOf: () => hD,
      packTerrainSources: () => BD,
      webgl1GridColumns: () => AD,
      webgl1LayerWidth: () => UD
    });
    var pD = wD(3098),
      sD = wD(40636),
      KD = wD(40743),
      rD = wD(50802),
      LD = wD(40732),
      cD = wD(50808);
    const gD = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function RD(DD) {
      return (0, pD.d)() ? Math.min(gD[DD], 64) : gD[DD]
    }

    function AD(DD) {
      const zD = Math.ceil(Math.log2(Math.max(1, DD)));
      return 2 ** Math.ceil(zD / 2)
    }

    function UD(DD, zD, wD) {
      const pD = null !== wD && wD > 0 ? wD : sD.d.limits.MAX_TEXTURE_SIZE;
      return fD(Math.max(1, Math.floor(pD / AD(zD))), DD)
    }

    function fD(DD, zD) {
      let wD = 1;
      for (; 2 * wD <= Math.min(DD, zD);) wD *= 2;
      return wD
    }

    function ID(DD, zD) {
      return "string" !== typeof DD || "" === DD ? null : "player" === zD || (0, rD.e)(DD) ? DD : null
    }
    async function BD(DD, zD, pD) {
      const sD = await wD.e(204).then((() => wD(34299))),
        {
          sheetLayout: rD,
          sheetWidth: cD
        } = DD;
      if (cD > zD) throw new Error(`the pack's atlas is ${cD} px wide, not within ${zD} px`);
      if (!(rD.length === sD.imagesPerAtlas.length && rD.every(((DD, zD) => DD === sD.imagesPerAtlas[zD])))) {
        const DD = `the pack's atlas is sheets of ${rD.join(", ")} layers, the built atlas's ${sD.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (rD.length < sD.imagesPerAtlas.length) throw new Error(DD);
        console.warn(DD)
      }
      return {
        atlasSheets: [],
        heldUntil: DD.heldUntil,
        texture: zD => {
          var wD, rD, LD;
          return null !== (wD = null !== (rD = null !== (LD = ID(DD.terrain.texture(zD), pD)) && void 0 !== LD ? LD : sD.animatedBlockTextures[zD]) && void 0 !== rD ? rD : sD.rotatedBlockTextures[zD]) && void 0 !== wD ? wD : function(DD, zD, wD) {
            var pD, sD;
            const rD = null !== (pD = KD.b[DD]) && void 0 !== pD ? pD : null;
            return null === rD ? null : null !== (sD = ID(zD.texture(DD), wD)) && void 0 !== sD ? sD : rD
          }(zD, DD, pD)
        },
        decoded: zD => {
          const wD = (0, LD.g)(zD);
          return null === wD ? null : (async zD => {
            const wD = DD.sheetPixels.at(zD);
            if (wD) {
              DD.sheetPixels[zD] = null;
              const pD = cD > 0 ? wD.byteLength / (4 * cD) : 0;
              return {
                width: cD,
                height: pD,
                pixels: new Uint8Array(wD.buffer, wD.byteOffset, wD.byteLength)
              }
            }
            const sD = DD.terrain.atlasSheets.at(zD);
            if (void 0 === sD) throw new Error(`the pack has no atlas sheet ${zD}`);
            const KD = ID(sD, pD);
            if (null === KD) throw new Error(`the pack's atlas sheet ${zD} isn't a pack file`);
            return (0, LD.j)(KD)
          })(wD)
        }
      }
    }
    const GD = new WeakMap;

    function hD(DD, zD) {
      if (null === DD) return null;
      let wD = GD.get(DD);
      void 0 === wD && (wD = {}, GD.set(DD, wD));
      const pD = wD[zD];
      if (void 0 !== pD) return pD;
      const {
        armourAtlasUrl: sD,
        texture: KD,
        model: rD
      } = DD, LD = {
        armourAtlasUrl: () => ID(sD, zD),
        textureUrl: DD => ID(KD(DD), zD),
        modelUrl: DD => ID(rD(DD), zD)
      };
      return wD[zD] = LD, LD
    }
    class nD {
      constructor(DD) {
        this.host = DD, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (DD, zD, pD) => {
          const {
            backend: sD
          } = this.host, KD = RD(sD);
          if ("webgl1" !== sD) return KD;
          const [rD, LD] = await Promise.all([wD.e(204).then((() => wD(34299))), null !== (DD = null === (zD = (pD = this.host).maxTextureSize) || void 0 === zD ? void 0 : zD.call(pD)) && void 0 !== DD ? DD : null]);
          return UD(KD, rD.imagesPerAtlas.length * Math.max(0, ...rD.imagesPerAtlas), LD)
        })().catch((DD => {
          throw this.maxWidth = null, DD
        })), this.maxWidth
      }
      files() {
        return hD(this.assets, this.owner)
      }
      start() {
        let DD = null;
        const zD = this.host.feed.subscribe((zD => {
          const wD = ++this.latest,
            pD = null !== zD.gameSource ? "game" : null !== DD && null !== DD.gameSource ? "join" : "page";
          DD = zD, this.host.settling(), this.assetsFor(zD).then((DD => this.apply(wD, DD, zD, pD).catch((DD => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", DD)
          }))), (DD => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", DD), this.settled(wD, zD, null, {
              error: DD,
              source: pD
            })
          }))
        }));
        return () => {
          zD(), this.latest++, this.ended = !0
        }
      }
      async apply(DD, zD, wD, pD) {
        const {
          host: sD
        } = this;
        if (DD !== this.latest || sD.stopped()) return;
        const KD = (0, rD.k)(wD);
        if (this.texturesIn(zD, KD) && 0 === this.swapping) return void this.settled(DD, wD, hD(zD, KD));
        let cD;
        this.swapping++;
        let gD = null;
        try {
          cD = await sD.terrain.swap((DD => {
            var zD;
            sD.warn(`texture pack texture ${null!==(zD=DD.name)&&void 0!==zD?zD:"(all)"} failed`, DD.error), null !== DD.name && null === (0, LD.g)(DD.name) || (gD = DD.error)
          }), (async () => sD.sourcesOf ? sD.sourcesOf(zD) : null === zD ? (0, LD.h)() : BD(zD, await this.maxLayerWidth(), KD)), {
            wholeAtlas: null !== zD,
            wanted: () => DD === this.latest
          })
        } catch (RD) {
          return sD.warn("the texture pack's swap failed: the textures in stay", RD), void this.settled(DD, wD, null, {
            error: RD,
            source: pD
          })
        } finally {
          this.swapping--
        }
        if (!0 !== cD || this.ended) this.settled(DD, wD, null, {
          error: gD,
          source: pD
        });
        else {
          sD.landed(), this.assets = zD, this.owner = KD;
          try {
            sD.packSwapped()
          } finally {
            this.settled(DD, wD, this.files())
          }
        }
      }
      async assetsFor(DD) {
        var zD;
        return (null !== (zD = this.host.assetsOf) && void 0 !== zD ? zD : cD.f)(DD, await this.maxLayerWidth())
      }
      texturesIn(DD, zD) {
        return DD === this.assets && (null === DD || zD === this.owner)
      }
      settled(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        DD !== this.latest || this.ended || this.host.stopped() || this.host.settled(zD, wD, pD)
      }
    }
  },
  50811: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      followPagePackFiles: () => KD
    });
    var pD = wD(50800),
      sD = wD(50808);

    function KD(DD, zD, wD, KD, rD) {
      let LD, cD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD => (0, sD.f)(DD, (0, pD.deviceMaxLayerWidth)(wD)),
        gD = 0,
        RD = null;
      const AD = () => {
          if (null === RD || null !== RD.gameSource && !zD.showsPage()) return;
          const wD = null === RD.gameSource ? RD : DD.playerState();
          if (wD.pack === LD) return;
          LD = wD.pack;
          const sD = ++gD;
          cD(wD).then((DD => {
            sD === gD && KD((0, pD.packFilesOf)(DD, "player"))
          }), (DD => {
            sD === gD && (LD = void 0), rD("the texture pack's files couldn't be had for the previews: the files in stay", DD)
          }))
        },
        UD = DD.subscribe((DD => {
          RD = DD, AD()
        })),
        fD = DD.onPlayerPackChange(AD),
        ID = zD.onPageShown(AD);
      return () => {
        UD(), fD(), ID(), gD++
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);