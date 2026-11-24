export const id = 46;
export const ids = [46];
export const modules = {
  51134: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      MAX_LAYER_WIDTH: () => kT,
      PackTextures: () => fT,
      deviceMaxLayerWidth: () => jT,
      layerWidthFor: () => pT,
      packFileUrl: () => BT,
      packFilesOf: () => vT,
      packTerrainSources: () => ZT,
      webgl1GridColumns: () => lT,
      webgl1LayerWidth: () => LT
    });
    var WT = mT(3247),
      zT = mT(40869),
      MT = mT(40966),
      gT = mT(51139),
      nT = mT(40951),
      HT = mT(51142);
    const kT = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function jT(TT) {
      return (0, WT.e)() ? Math.min(kT[TT], 64) : kT[TT]
    }

    function lT(TT) {
      const UT = Math.ceil(Math.log2(Math.max(1, TT)));
      return 2 ** Math.ceil(UT / 2)
    }

    function LT(TT, UT, mT) {
      const WT = null !== mT && mT > 0 ? mT : zT.d.limits.MAX_TEXTURE_SIZE;
      return pT(Math.max(1, Math.floor(WT / lT(UT))), TT)
    }

    function pT(TT, UT) {
      let mT = 1;
      for (; 2 * mT <= Math.min(TT, UT);) mT *= 2;
      return mT
    }

    function BT(TT, UT) {
      return "string" !== typeof TT || "" === TT ? null : "player" === UT || (0, gT.c)(TT) ? TT : null
    }
    async function ZT(TT, UT, WT) {
      const zT = await mT.e(207).then((() => mT(34366))),
        {
          sheetLayout: gT,
          sheetWidth: HT
        } = TT;
      if (HT > UT) throw new Error(`the pack's atlas is ${HT} px wide, not within ${UT} px`);
      if (!(gT.length === zT.imagesPerAtlas.length && gT.every(((TT, UT) => TT === zT.imagesPerAtlas[UT])))) {
        const TT = `the pack's atlas is sheets of ${gT.join(", ")} layers, the built atlas's ${zT.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (gT.length < zT.imagesPerAtlas.length) throw new Error(TT);
        console.warn(TT)
      }
      return {
        atlasSheets: [],
        heldUntil: TT.heldUntil,
        texture: UT => {
          var mT, gT, nT;
          return null !== (mT = null !== (gT = null !== (nT = BT(TT.terrain.texture(UT), WT)) && void 0 !== nT ? nT : zT.animatedBlockTextures[UT]) && void 0 !== gT ? gT : zT.rotatedBlockTextures[UT]) && void 0 !== mT ? mT : function(TT, UT, mT) {
            var WT, zT;
            const gT = null !== (WT = MT.e[TT]) && void 0 !== WT ? WT : null;
            return null === gT ? null : null !== (zT = BT(UT.texture(TT), mT)) && void 0 !== zT ? zT : gT
          }(UT, TT, WT)
        },
        decoded: UT => {
          const mT = (0, nT.j)(UT);
          return null === mT ? null : (async UT => {
            const mT = TT.sheetPixels.at(UT);
            if (mT) {
              TT.sheetPixels[UT] = null;
              const WT = HT > 0 ? mT.byteLength / (4 * HT) : 0;
              return {
                width: HT,
                height: WT,
                pixels: new Uint8Array(mT.buffer, mT.byteOffset, mT.byteLength)
              }
            }
            const zT = TT.terrain.atlasSheets.at(UT);
            if (void 0 === zT) throw new Error(`the pack has no atlas sheet ${UT}`);
            const MT = BT(zT, WT);
            if (null === MT) throw new Error(`the pack's atlas sheet ${UT} isn't a pack file`);
            return (0, nT.l)(MT)
          })(mT)
        }
      }
    }
    const cT = new WeakMap;

    function vT(TT, UT) {
      if (null === TT) return null;
      let mT = cT.get(TT);
      void 0 === mT && (mT = {}, cT.set(TT, mT));
      const WT = mT[UT];
      if (void 0 !== WT) return WT;
      const {
        armourAtlasUrl: zT,
        texture: MT,
        model: gT
      } = TT, nT = {
        armourAtlasUrl: () => BT(zT, UT),
        textureUrl: TT => BT(MT(TT), UT),
        modelUrl: TT => BT(gT(TT), UT)
      };
      return mT[UT] = nT, nT
    }
    class fT {
      constructor(TT) {
        this.host = TT, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (TT, UT, WT) => {
          const {
            backend: zT
          } = this.host, MT = jT(zT);
          if ("webgl1" !== zT) return MT;
          const [gT, nT] = await Promise.all([mT.e(207).then((() => mT(34366))), null !== (TT = null === (UT = (WT = this.host).maxTextureSize) || void 0 === UT ? void 0 : UT.call(WT)) && void 0 !== TT ? TT : null]);
          return LT(MT, gT.imagesPerAtlas.length * Math.max(0, ...gT.imagesPerAtlas), nT)
        })().catch((TT => {
          throw this.maxWidth = null, TT
        })), this.maxWidth
      }
      files() {
        return vT(this.assets, this.owner)
      }
      start() {
        let TT = null;
        const UT = this.host.feed.subscribe((UT => {
          const mT = ++this.latest,
            WT = null !== UT.gameSource ? "game" : null !== TT && null !== TT.gameSource ? "join" : "page";
          TT = UT, this.host.settling(), this.assetsFor(UT).then((TT => this.apply(mT, TT, UT, WT).catch((TT => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", TT)
          }))), (TT => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", TT), this.settled(mT, UT, null, {
              error: TT,
              source: WT
            })
          }))
        }));
        return () => {
          UT(), this.latest++, this.ended = !0
        }
      }
      async apply(TT, UT, mT, WT) {
        const {
          host: zT
        } = this;
        if (TT !== this.latest || zT.stopped()) return;
        const MT = (0, gT.j)(mT);
        if (this.texturesIn(UT, MT) && 0 === this.swapping) return void this.settled(TT, mT, vT(UT, MT));
        let HT;
        this.swapping++;
        let kT = null;
        try {
          HT = await zT.terrain.swap((TT => {
            var UT;
            zT.warn(`texture pack texture ${null!==(UT=TT.name)&&void 0!==UT?UT:"(all)"} failed`, TT.error), null !== TT.name && null === (0, nT.j)(TT.name) || (kT = TT.error)
          }), (async () => zT.sourcesOf ? zT.sourcesOf(UT) : null === UT ? (0, nT.k)() : ZT(UT, await this.maxLayerWidth(), MT)), {
            wholeAtlas: null !== UT,
            wanted: () => TT === this.latest
          })
        } catch (jT) {
          return zT.warn("the texture pack's swap failed: the textures in stay", jT), void this.settled(TT, mT, null, {
            error: jT,
            source: WT
          })
        } finally {
          this.swapping--
        }
        if (!0 !== HT || this.ended) this.settled(TT, mT, null, {
          error: kT,
          source: WT
        });
        else {
          zT.landed(), this.assets = UT, this.owner = MT;
          try {
            zT.packSwapped()
          } finally {
            this.settled(TT, mT, this.files())
          }
        }
      }
      async assetsFor(TT) {
        var UT;
        return (null !== (UT = this.host.assetsOf) && void 0 !== UT ? UT : HT.i)(TT, await this.maxLayerWidth())
      }
      texturesIn(TT, UT) {
        return TT === this.assets && (null === TT || UT === this.owner)
      }
      settled(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        TT !== this.latest || this.ended || this.host.stopped() || this.host.settled(UT, mT, WT)
      }
    }
  },
  51145: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      followPagePackFiles: () => MT
    });
    var WT = mT(51134),
      zT = mT(51142);

    function MT(TT, UT, mT, MT, gT) {
      let nT, HT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT => (0, zT.i)(TT, (0, WT.deviceMaxLayerWidth)(mT)),
        kT = 0,
        jT = null;
      const lT = () => {
          if (null === jT || null !== jT.gameSource && !UT.showsPage()) return;
          const mT = null === jT.gameSource ? jT : TT.playerState();
          if (mT.pack === nT) return;
          nT = mT.pack;
          const zT = ++kT;
          HT(mT).then((TT => {
            zT === kT && MT((0, WT.packFilesOf)(TT, "player"))
          }), (TT => {
            zT === kT && (nT = void 0), gT("the texture pack's files couldn't be had for the previews: the files in stay", TT)
          }))
        },
        LT = TT.subscribe((TT => {
          jT = TT, lT()
        })),
        pT = TT.onPlayerPackChange(lT),
        BT = UT.onPageShown(lT);
      return () => {
        LT(), pT(), BT(), kT++
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);