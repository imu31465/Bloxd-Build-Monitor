export const id = 45;
export const ids = [45];
export const modules = {
  42374: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      MAX_LAYER_WIDTH: () => aY,
      PackTextures: () => EY,
      deviceMaxLayerWidth: () => vY,
      layerWidthFor: () => iY,
      packFileUrl: () => yY,
      packFilesOf: () => WY,
      packTerrainSources: () => QY,
      webgl1GridColumns: () => uY,
      webgl1LayerWidth: () => sY
    });
    var FY = DY(2707),
      AY = DY(39893),
      IY = DY(40109),
      RY = DY(42383),
      OY = DY(40098),
      gY = DY(42386);
    const aY = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function vY(YY) {
      return (0, FY.b)() ? Math.min(aY[YY], 64) : aY[YY]
    }

    function uY(YY) {
      const rY = Math.ceil(Math.log2(Math.max(1, YY)));
      return 2 ** Math.ceil(rY / 2)
    }

    function sY(YY, rY, DY) {
      const FY = null !== DY && DY > 0 ? DY : AY.d.limits.MAX_TEXTURE_SIZE;
      return iY(Math.max(1, Math.floor(FY / uY(rY))), YY)
    }

    function iY(YY, rY) {
      let DY = 1;
      for (; 2 * DY <= Math.min(YY, rY);) DY *= 2;
      return DY
    }

    function yY(YY, rY) {
      return "string" !== typeof YY || "" === YY ? null : "player" === rY || (0, RY.e)(YY) ? YY : null
    }
    async function QY(YY, rY, FY) {
      const AY = await DY.e(196).then((() => DY(33702))),
        {
          sheetLayout: RY,
          sheetWidth: gY
        } = YY;
      if (gY > rY) throw new Error(`the pack's atlas is ${gY} px wide, not within ${rY} px`);
      if (!(RY.length === AY.imagesPerAtlas.length && RY.every(((YY, rY) => YY === AY.imagesPerAtlas[rY])))) {
        const YY = `the pack's atlas is sheets of ${RY.join(", ")} layers, the built atlas's ${AY.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (RY.length < AY.imagesPerAtlas.length) throw new Error(YY);
        console.warn(YY)
      }
      return {
        atlasSheets: [],
        heldUntil: YY.heldUntil,
        texture: rY => {
          var DY, RY, OY;
          return null !== (DY = null !== (RY = null !== (OY = yY(YY.terrain.texture(rY), FY)) && void 0 !== OY ? OY : AY.animatedBlockTextures[rY]) && void 0 !== RY ? RY : AY.rotatedBlockTextures[rY]) && void 0 !== DY ? DY : function(YY, rY, DY) {
            var FY, AY;
            const RY = null !== (FY = IY.e[YY]) && void 0 !== FY ? FY : null;
            return null === RY ? null : null !== (AY = yY(rY.texture(YY), DY)) && void 0 !== AY ? AY : RY
          }(rY, YY, FY)
        },
        decoded: rY => {
          const DY = (0, OY.i)(rY);
          return null === DY ? null : (async rY => {
            const DY = YY.sheetPixels.at(rY);
            if (DY) {
              YY.sheetPixels[rY] = null;
              const FY = gY > 0 ? DY.byteLength / (4 * gY) : 0;
              return {
                width: gY,
                height: FY,
                pixels: new Uint8Array(DY.buffer, DY.byteOffset, DY.byteLength)
              }
            }
            const AY = YY.terrain.atlasSheets.at(rY);
            if (void 0 === AY) throw new Error(`the pack has no atlas sheet ${rY}`);
            const IY = yY(AY, FY);
            if (null === IY) throw new Error(`the pack's atlas sheet ${rY} isn't a pack file`);
            return (0, OY.m)(IY)
          })(DY)
        }
      }
    }
    const oY = new WeakMap;

    function WY(YY, rY) {
      if (null === YY) return null;
      let DY = oY.get(YY);
      void 0 === DY && (DY = {}, oY.set(YY, DY));
      const FY = DY[rY];
      if (void 0 !== FY) return FY;
      const {
        armourAtlasUrl: AY,
        texture: IY,
        model: RY
      } = YY, OY = {
        armourAtlasUrl: () => yY(AY, rY),
        textureUrl: YY => yY(IY(YY), rY),
        modelUrl: YY => yY(RY(YY), rY)
      };
      return DY[rY] = OY, OY
    }
    class EY {
      constructor(YY) {
        this.host = YY, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (YY, rY, FY) => {
          const {
            backend: AY
          } = this.host, IY = vY(AY);
          if ("webgl1" !== AY) return IY;
          const [RY, OY] = await Promise.all([DY.e(196).then((() => DY(33702))), null !== (YY = null === (rY = (FY = this.host).maxTextureSize) || void 0 === rY ? void 0 : rY.call(FY)) && void 0 !== YY ? YY : null]);
          return sY(IY, RY.imagesPerAtlas.length * Math.max(0, ...RY.imagesPerAtlas), OY)
        })().catch((YY => {
          throw this.maxWidth = null, YY
        })), this.maxWidth
      }
      files() {
        return WY(this.assets, this.owner)
      }
      iconOverrides() {
        const YY = this.files();
        return null === YY ? null : {
          itemSprite: YY.textureUrl,
          blockTexture: YY.textureUrl,
          model: YY.modelUrl
        }
      }
      start() {
        const YY = this.host.feed.subscribe((YY => {
          const rY = ++this.latest;
          this.host.settling(), this.assetsFor(YY).then((DY => this.apply(rY, DY, YY).catch((YY => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", YY)
          }))), (DY => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", DY), this.settled(rY, YY, null, !0)
          }))
        }));
        return () => {
          YY(), this.latest++, this.ended = !0
        }
      }
      async apply(YY, rY, DY) {
        const {
          host: FY
        } = this;
        if (YY !== this.latest || FY.stopped()) return;
        const AY = (0, RY.l)(DY);
        if (this.texturesIn(rY, AY) && 0 === this.swapping) return void this.settled(YY, DY, WY(rY, AY));
        let IY;
        this.swapping++;
        try {
          IY = await FY.terrain.swap((YY => {
            var rY;
            FY.warn(`texture pack texture ${null!==(rY=YY.name)&&void 0!==rY?rY:"(all)"} failed`, YY.error)
          }), (async () => FY.sourcesOf ? FY.sourcesOf(rY) : null === rY ? (0, OY.j)() : QY(rY, await this.maxLayerWidth(), AY)), {
            wholeAtlas: null !== rY,
            wanted: () => YY === this.latest
          })
        } catch (gY) {
          return FY.warn("the texture pack's swap failed: the textures in stay", gY), void this.settled(YY, DY, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== IY || this.ended) this.settled(YY, DY, null, !0);
        else {
          FY.landed(), this.assets = rY, this.owner = AY;
          try {
            FY.packSwapped()
          } finally {
            this.settled(YY, DY, this.files())
          }
        }
      }
      async assetsFor(YY) {
        var rY;
        return (null !== (rY = this.host.assetsOf) && void 0 !== rY ? rY : gY.j)(YY, await this.maxLayerWidth())
      }
      texturesIn(YY, rY) {
        return YY === this.assets && (null === YY || rY === this.owner)
      }
      settled(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        YY !== this.latest || this.ended || this.host.stopped() || this.host.settled(rY, DY, FY)
      }
    }
  },
  42389: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      followPagePackFiles: () => IY
    });
    var FY = DY(42374),
      AY = DY(42386);

    function IY(YY, rY, DY, IY, RY) {
      let OY, gY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : YY => (0, AY.j)(YY, (0, FY.deviceMaxLayerWidth)(DY)),
        aY = 0,
        vY = null;
      const uY = () => {
          if (null === vY || null !== vY.gameSource && !rY.showsPage()) return;
          const DY = null === vY.gameSource ? vY : YY.playerState();
          if (DY.pack === OY) return;
          OY = DY.pack;
          const AY = ++aY;
          gY(DY).then((YY => {
            AY === aY && IY((0, FY.packFilesOf)(YY, "player"))
          }), (YY => {
            AY === aY && (OY = void 0), RY("the texture pack's files couldn't be had for the previews: the files in stay", YY)
          }))
        },
        sY = YY.subscribe((YY => {
          vY = YY, uY()
        })),
        iY = YY.onPlayerPackChange(uY),
        yY = rY.onPageShown(uY);
      return () => {
        sY(), iY(), yY(), aY++
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);