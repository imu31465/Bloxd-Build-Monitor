export const id = 45;
export const ids = [45];
export const modules = {
  42131: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      MAX_LAYER_WIDTH: () => FT,
      PackTextures: () => AT,
      deviceMaxLayerWidth: () => ST,
      layerWidthFor: () => xT,
      packFileUrl: () => cT,
      packFilesOf: () => rT,
      packTerrainSources: () => KT,
      webgl1GridColumns: () => DT,
      webgl1LayerWidth: () => LT
    });
    var iT = IT(2679),
      zT = IT(39572),
      kT = IT(39783),
      WT = IT(42138),
      XT = IT(39779),
      BT = IT(42141);
    const FT = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function ST(TT) {
      return (0, iT.c)() ? Math.min(FT[TT], 64) : FT[TT]
    }

    function DT(TT) {
      const oT = Math.ceil(Math.log2(Math.max(1, TT)));
      return 2 ** Math.ceil(oT / 2)
    }

    function LT(TT, oT, IT) {
      const iT = null !== IT && IT > 0 ? IT : zT.d.limits.MAX_TEXTURE_SIZE;
      return xT(Math.max(1, Math.floor(iT / DT(oT))), TT)
    }

    function xT(TT, oT) {
      let IT = 1;
      for (; 2 * IT <= Math.min(TT, oT);) IT *= 2;
      return IT
    }

    function cT(TT, oT) {
      return "string" !== typeof TT || "" === TT ? null : "player" === oT || (0, WT.c)(TT) ? TT : null
    }
    async function KT(TT, oT, iT) {
      const zT = await IT.e(196).then((() => IT(33287))),
        {
          sheetLayout: WT,
          sheetWidth: BT
        } = TT;
      if (BT > oT) throw new Error(`the pack's atlas is ${BT} px wide, not within ${oT} px`);
      if (!(WT.length === zT.imagesPerAtlas.length && WT.every(((TT, oT) => TT === zT.imagesPerAtlas[oT])))) {
        const TT = `the pack's atlas is sheets of ${WT.join(", ")} layers, the built atlas's ${zT.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (WT.length < zT.imagesPerAtlas.length) throw new Error(TT);
        console.warn(TT)
      }
      return {
        atlasSheets: [],
        heldUntil: TT.heldUntil,
        texture: oT => {
          var IT, WT, XT;
          return null !== (IT = null !== (WT = null !== (XT = cT(TT.terrain.texture(oT), iT)) && void 0 !== XT ? XT : zT.animatedBlockTextures[oT]) && void 0 !== WT ? WT : zT.rotatedBlockTextures[oT]) && void 0 !== IT ? IT : function(TT, oT, IT) {
            var iT, zT;
            const WT = null !== (iT = kT.b[TT]) && void 0 !== iT ? iT : null;
            return null === WT ? null : null !== (zT = cT(oT.texture(TT), IT)) && void 0 !== zT ? zT : WT
          }(oT, TT, iT)
        },
        decoded: oT => {
          const IT = (0, XT.h)(oT);
          return null === IT ? null : (async oT => {
            const IT = TT.sheetPixels.at(oT);
            if (IT) {
              TT.sheetPixels[oT] = null;
              const iT = BT > 0 ? IT.byteLength / (4 * BT) : 0;
              return {
                width: BT,
                height: iT,
                pixels: new Uint8Array(IT.buffer, IT.byteOffset, IT.byteLength)
              }
            }
            const zT = TT.terrain.atlasSheets.at(oT);
            if (void 0 === zT) throw new Error(`the pack has no atlas sheet ${oT}`);
            const kT = cT(zT, iT);
            if (null === kT) throw new Error(`the pack's atlas sheet ${oT} isn't a pack file`);
            return (0, XT.o)(kT)
          })(IT)
        }
      }
    }
    const MT = new WeakMap;

    function rT(TT, oT) {
      if (null === TT) return null;
      let IT = MT.get(TT);
      void 0 === IT && (IT = {}, MT.set(TT, IT));
      const iT = IT[oT];
      if (void 0 !== iT) return iT;
      const {
        armourAtlasUrl: zT,
        texture: kT,
        model: WT
      } = TT, XT = {
        armourAtlasUrl: () => cT(zT, oT),
        textureUrl: TT => cT(kT(TT), oT),
        modelUrl: TT => cT(WT(TT), oT)
      };
      return IT[oT] = XT, XT
    }
    class AT {
      constructor(TT) {
        this.host = TT, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (TT, oT, iT) => {
          const {
            backend: zT
          } = this.host, kT = ST(zT);
          if ("webgl1" !== zT) return kT;
          const [WT, XT] = await Promise.all([IT.e(196).then((() => IT(33287))), null !== (TT = null === (oT = (iT = this.host).maxTextureSize) || void 0 === oT ? void 0 : oT.call(iT)) && void 0 !== TT ? TT : null]);
          return LT(kT, WT.imagesPerAtlas.length * Math.max(0, ...WT.imagesPerAtlas), XT)
        })().catch((TT => {
          throw this.maxWidth = null, TT
        })), this.maxWidth
      }
      files() {
        return rT(this.assets, this.owner)
      }
      iconOverrides() {
        const TT = this.files();
        return null === TT ? null : {
          itemSprite: TT.textureUrl,
          blockTexture: TT.textureUrl,
          model: TT.modelUrl
        }
      }
      start() {
        const TT = this.host.feed.subscribe((TT => {
          const oT = ++this.latest;
          this.host.settling(), this.assetsFor(TT).then((IT => this.apply(oT, IT, TT).catch((TT => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", TT)
          }))), (IT => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", IT), this.settled(oT, TT, null, !0)
          }))
        }));
        return () => {
          TT(), this.latest++, this.ended = !0
        }
      }
      async apply(TT, oT, IT) {
        const {
          host: iT
        } = this;
        if (TT !== this.latest || iT.stopped()) return;
        const zT = (0, WT.i)(IT);
        if (this.texturesIn(oT, zT) && 0 === this.swapping) return void this.settled(TT, IT, rT(oT, zT));
        let kT;
        this.swapping++;
        try {
          kT = await iT.terrain.swap((TT => {
            var oT;
            iT.warn(`texture pack texture ${null!==(oT=TT.name)&&void 0!==oT?oT:"(all)"} failed`, TT.error)
          }), (async () => iT.sourcesOf ? iT.sourcesOf(oT) : null === oT ? (0, XT.l)() : KT(oT, await this.maxLayerWidth(), zT)), {
            wholeAtlas: null !== oT,
            wanted: () => TT === this.latest
          })
        } catch (BT) {
          return iT.warn("the texture pack's swap failed: the textures in stay", BT), void this.settled(TT, IT, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== kT || this.ended) this.settled(TT, IT, null, !0);
        else {
          iT.landed(), this.assets = oT, this.owner = zT;
          try {
            iT.packSwapped()
          } finally {
            this.settled(TT, IT, this.files())
          }
        }
      }
      async assetsFor(TT) {
        var oT;
        return (null !== (oT = this.host.assetsOf) && void 0 !== oT ? oT : BT.j)(TT, await this.maxLayerWidth())
      }
      texturesIn(TT, oT) {
        return TT === this.assets && (null === TT || oT === this.owner)
      }
      settled(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        TT !== this.latest || this.ended || this.host.stopped() || this.host.settled(oT, IT, iT)
      }
    }
  },
  42144: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      followPagePackFiles: () => kT
    });
    var iT = IT(42131),
      zT = IT(42141);

    function kT(TT, oT, IT, kT, WT) {
      let XT, BT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT => (0, zT.j)(TT, (0, iT.deviceMaxLayerWidth)(IT)),
        FT = 0,
        ST = null;
      const DT = () => {
          if (null === ST || null !== ST.gameSource && !oT.showsPage()) return;
          const IT = null === ST.gameSource ? ST : TT.playerState();
          if (IT.pack === XT) return;
          XT = IT.pack;
          const zT = ++FT;
          BT(IT).then((TT => {
            zT === FT && kT((0, iT.packFilesOf)(TT, "player"))
          }), (TT => {
            zT === FT && (XT = void 0), WT("the texture pack's files couldn't be had for the previews: the files in stay", TT)
          }))
        },
        LT = TT.subscribe((TT => {
          ST = TT, DT()
        })),
        xT = TT.onPlayerPackChange(DT),
        cT = oT.onPageShown(DT);
      return () => {
        LT(), xT(), cT(), FT++
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);