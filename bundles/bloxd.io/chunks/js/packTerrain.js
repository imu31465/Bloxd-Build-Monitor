export const id = 45;
export const ids = [45];
export const modules = {
  42825: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      MAX_LAYER_WIDTH: () => xT,
      PackTextures: () => QT,
      deviceMaxLayerWidth: () => IT,
      layerWidthFor: () => jT,
      packFileUrl: () => vT,
      packFilesOf: () => NT,
      packTerrainSources: () => tT,
      webgl1GridColumns: () => AT,
      webgl1LayerWidth: () => CT
    });
    var lT = cT(3045),
      MT = cT(40434),
      KT = cT(40615),
      OT = cT(42833),
      yT = cT(40603),
      fT = cT(42840);
    const xT = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function IT(TT) {
      return (0, lT.b)() ? Math.min(xT[TT], 64) : xT[TT]
    }

    function AT(TT) {
      const kT = Math.ceil(Math.log2(Math.max(1, TT)));
      return 2 ** Math.ceil(kT / 2)
    }

    function CT(TT, kT, cT) {
      const lT = null !== cT && cT > 0 ? cT : MT.b.limits.MAX_TEXTURE_SIZE;
      return jT(Math.max(1, Math.floor(lT / AT(kT))), TT)
    }

    function jT(TT, kT) {
      let cT = 1;
      for (; 2 * cT <= Math.min(TT, kT);) cT *= 2;
      return cT
    }

    function vT(TT, kT) {
      return "string" !== typeof TT || "" === TT ? null : "player" === kT || (0, OT.c)(TT) ? TT : null
    }
    async function tT(TT, kT, lT) {
      const MT = await cT.e(201).then((() => cT(34029))),
        {
          sheetLayout: OT,
          sheetWidth: fT
        } = TT;
      if (fT > kT) throw new Error(`the pack's atlas is ${fT} px wide, not within ${kT} px`);
      if (!(OT.length === MT.imagesPerAtlas.length && OT.every(((TT, kT) => TT === MT.imagesPerAtlas[kT])))) {
        const TT = `the pack's atlas is sheets of ${OT.join(", ")} layers, the built atlas's ${MT.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (OT.length < MT.imagesPerAtlas.length) throw new Error(TT);
        console.warn(TT)
      }
      return {
        atlasSheets: [],
        heldUntil: TT.heldUntil,
        texture: kT => {
          var cT, OT, yT;
          return null !== (cT = null !== (OT = null !== (yT = vT(TT.terrain.texture(kT), lT)) && void 0 !== yT ? yT : MT.animatedBlockTextures[kT]) && void 0 !== OT ? OT : MT.rotatedBlockTextures[kT]) && void 0 !== cT ? cT : function(TT, kT, cT) {
            var lT, MT;
            const OT = null !== (lT = KT.c[TT]) && void 0 !== lT ? lT : null;
            return null === OT ? null : null !== (MT = vT(kT.texture(TT), cT)) && void 0 !== MT ? MT : OT
          }(kT, TT, lT)
        },
        decoded: kT => {
          const cT = (0, yT.g)(kT);
          return null === cT ? null : (async kT => {
            const cT = TT.sheetPixels.at(kT);
            if (cT) {
              TT.sheetPixels[kT] = null;
              const lT = fT > 0 ? cT.byteLength / (4 * fT) : 0;
              return {
                width: fT,
                height: lT,
                pixels: new Uint8Array(cT.buffer, cT.byteOffset, cT.byteLength)
              }
            }
            const MT = TT.terrain.atlasSheets.at(kT);
            if (void 0 === MT) throw new Error(`the pack has no atlas sheet ${kT}`);
            const KT = vT(MT, lT);
            if (null === KT) throw new Error(`the pack's atlas sheet ${kT} isn't a pack file`);
            return (0, yT.m)(KT)
          })(cT)
        }
      }
    }
    const hT = new WeakMap;

    function NT(TT, kT) {
      if (null === TT) return null;
      let cT = hT.get(TT);
      void 0 === cT && (cT = {}, hT.set(TT, cT));
      const lT = cT[kT];
      if (void 0 !== lT) return lT;
      const {
        armourAtlasUrl: MT,
        texture: KT,
        model: OT
      } = TT, yT = {
        armourAtlasUrl: () => vT(MT, kT),
        textureUrl: TT => vT(KT(TT), kT),
        modelUrl: TT => vT(OT(TT), kT)
      };
      return cT[kT] = yT, yT
    }
    class QT {
      constructor(TT) {
        this.host = TT, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (TT, kT, lT) => {
          const {
            backend: MT
          } = this.host, KT = IT(MT);
          if ("webgl1" !== MT) return KT;
          const [OT, yT] = await Promise.all([cT.e(201).then((() => cT(34029))), null !== (TT = null === (kT = (lT = this.host).maxTextureSize) || void 0 === kT ? void 0 : kT.call(lT)) && void 0 !== TT ? TT : null]);
          return CT(KT, OT.imagesPerAtlas.length * Math.max(0, ...OT.imagesPerAtlas), yT)
        })().catch((TT => {
          throw this.maxWidth = null, TT
        })), this.maxWidth
      }
      files() {
        return NT(this.assets, this.owner)
      }
      start() {
        const TT = this.host.feed.subscribe((TT => {
          const kT = ++this.latest;
          this.host.settling(), this.assetsFor(TT).then((cT => this.apply(kT, cT, TT).catch((TT => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", TT)
          }))), (cT => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", cT), this.settled(kT, TT, null, !0)
          }))
        }));
        return () => {
          TT(), this.latest++, this.ended = !0
        }
      }
      async apply(TT, kT, cT) {
        const {
          host: lT
        } = this;
        if (TT !== this.latest || lT.stopped()) return;
        const MT = (0, OT.k)(cT);
        if (this.texturesIn(kT, MT) && 0 === this.swapping) return void this.settled(TT, cT, NT(kT, MT));
        let KT;
        this.swapping++;
        try {
          KT = await lT.terrain.swap((TT => {
            var kT;
            lT.warn(`texture pack texture ${null!==(kT=TT.name)&&void 0!==kT?kT:"(all)"} failed`, TT.error)
          }), (async () => lT.sourcesOf ? lT.sourcesOf(kT) : null === kT ? (0, yT.j)() : tT(kT, await this.maxLayerWidth(), MT)), {
            wholeAtlas: null !== kT,
            wanted: () => TT === this.latest
          })
        } catch (fT) {
          return lT.warn("the texture pack's swap failed: the textures in stay", fT), void this.settled(TT, cT, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== KT || this.ended) this.settled(TT, cT, null, !0);
        else {
          lT.landed(), this.assets = kT, this.owner = MT;
          try {
            lT.packSwapped()
          } finally {
            this.settled(TT, cT, this.files())
          }
        }
      }
      async assetsFor(TT) {
        var kT;
        return (null !== (kT = this.host.assetsOf) && void 0 !== kT ? kT : fT.g)(TT, await this.maxLayerWidth())
      }
      texturesIn(TT, kT) {
        return TT === this.assets && (null === TT || kT === this.owner)
      }
      settled(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        TT !== this.latest || this.ended || this.host.stopped() || this.host.settled(kT, cT, lT)
      }
    }
  },
  42847: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      followPagePackFiles: () => KT
    });
    var lT = cT(42825),
      MT = cT(42840);

    function KT(TT, kT, cT, KT, OT) {
      let yT, fT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT => (0, MT.g)(TT, (0, lT.deviceMaxLayerWidth)(cT)),
        xT = 0,
        IT = null;
      const AT = () => {
          if (null === IT || null !== IT.gameSource && !kT.showsPage()) return;
          const cT = null === IT.gameSource ? IT : TT.playerState();
          if (cT.pack === yT) return;
          yT = cT.pack;
          const MT = ++xT;
          fT(cT).then((TT => {
            MT === xT && KT((0, lT.packFilesOf)(TT, "player"))
          }), (TT => {
            MT === xT && (yT = void 0), OT("the texture pack's files couldn't be had for the previews: the files in stay", TT)
          }))
        },
        CT = TT.subscribe((TT => {
          IT = TT, AT()
        })),
        jT = TT.onPlayerPackChange(AT),
        vT = kT.onPageShown(AT);
      return () => {
        CT(), jT(), vT(), xT++
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);