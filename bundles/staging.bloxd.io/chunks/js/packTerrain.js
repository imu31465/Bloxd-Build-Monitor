export const id = 53;
export const ids = [53];
export const modules = {
  54568: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      MAX_LAYER_WIDTH: () => EH,
      PackTextures: () => vH,
      deviceMaxLayerWidth: () => XH,
      layerWidthFor: () => uH,
      packFileUrl: () => QH,
      packFilesOf: () => xH,
      packTerrainSources: () => WH,
      webgl1GridColumns: () => GH,
      webgl1LayerWidth: () => YH
    });
    var AH = LH(4786),
      rH = LH(3206),
      SH = LH(42041),
      hH = LH(42145),
      tH = LH(54576),
      zH = LH(42142),
      CH = LH(54579);
    const EH = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function XH(HH) {
      return (0, rH.e)() || (0, AH.k)() ? Math.min(EH[HH], 64) : EH[HH]
    }

    function GH(HH) {
      const BH = Math.ceil(Math.log2(Math.max(1, HH)));
      return 2 ** Math.ceil(BH / 2)
    }

    function YH(HH, BH, LH) {
      const AH = null !== LH && LH > 0 ? LH : SH.b.limits.MAX_TEXTURE_SIZE;
      return uH(Math.max(1, Math.floor(AH / GH(BH))), HH)
    }

    function uH(HH, BH) {
      let LH = 1;
      for (; 2 * LH <= Math.min(HH, BH);) LH *= 2;
      return LH
    }

    function QH(HH, BH) {
      return "string" !== typeof HH || "" === HH ? null : "player" === BH || (0, tH.c)(HH) ? HH : null
    }
    async function WH(HH, BH, AH) {
      const rH = await LH.e(228).then((() => LH(35079))),
        {
          sheetLayout: SH,
          sheetWidth: tH
        } = HH;
      if (tH > BH) throw new Error(`the pack's atlas is ${tH} px wide, not within ${BH} px`);
      if (!(SH.length === rH.imagesPerAtlas.length && SH.every(((HH, BH) => HH === rH.imagesPerAtlas[BH])))) {
        const HH = `the pack's atlas is sheets of ${SH.join(", ")} layers, the built atlas's ${rH.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (SH.length < rH.imagesPerAtlas.length) throw new Error(HH);
        console.warn(HH)
      }
      return {
        atlasSheets: [],
        heldUntil: HH.heldUntil,
        texture: BH => {
          var LH, SH, tH;
          return null !== (LH = null !== (SH = null !== (tH = QH(HH.terrain.texture(BH), AH)) && void 0 !== tH ? tH : rH.animatedBlockTextures[BH]) && void 0 !== SH ? SH : rH.rotatedBlockTextures[BH]) && void 0 !== LH ? LH : function(HH, BH, LH) {
            var AH, rH;
            const SH = null !== (AH = hH.e[HH]) && void 0 !== AH ? AH : null;
            return null === SH ? null : null !== (rH = QH(BH.texture(HH), LH)) && void 0 !== rH ? rH : SH
          }(BH, HH, AH)
        },
        decoded: BH => {
          const LH = (0, zH.h)(BH);
          return null === LH ? null : (async BH => {
            const LH = HH.sheetPixels.at(BH);
            if (LH) {
              HH.sheetPixels[BH] = null;
              const AH = tH > 0 ? LH.byteLength / (4 * tH) : 0;
              return {
                width: tH,
                height: AH,
                pixels: new Uint8Array(LH.buffer, LH.byteOffset, LH.byteLength)
              }
            }
            const rH = HH.terrain.atlasSheets.at(BH);
            if (void 0 === rH) throw new Error(`the pack has no atlas sheet ${BH}`);
            const SH = QH(rH, AH);
            if (null === SH) throw new Error(`the pack's atlas sheet ${BH} isn't a pack file`);
            return (0, zH.m)(SH)
          })(LH)
        }
      }
    }
    const MH = new WeakMap;

    function xH(HH, BH) {
      if (null === HH) return null;
      let LH = MH.get(HH);
      void 0 === LH && (LH = {}, MH.set(HH, LH));
      const AH = LH[BH];
      if (void 0 !== AH) return AH;
      const {
        armourAtlasUrl: rH,
        texture: SH,
        model: hH
      } = HH, tH = {
        armourAtlasUrl: () => QH(rH, BH),
        textureUrl: HH => QH(SH(HH), BH),
        modelUrl: HH => QH(hH(HH), BH)
      };
      return LH[BH] = tH, tH
    }
    class vH {
      constructor(HH) {
        this.host = HH, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (HH, BH, AH) => {
          const {
            backend: rH
          } = this.host, SH = XH(rH);
          if ("webgl1" !== rH) return SH;
          const [hH, tH] = await Promise.all([LH.e(228).then((() => LH(35079))), null !== (HH = null === (BH = (AH = this.host).maxTextureSize) || void 0 === BH ? void 0 : BH.call(AH)) && void 0 !== HH ? HH : null]);
          return YH(SH, hH.imagesPerAtlas.length * Math.max(0, ...hH.imagesPerAtlas), tH)
        })().catch((HH => {
          throw this.maxWidth = null, HH
        })), this.maxWidth
      }
      files() {
        return xH(this.assets, this.owner)
      }
      start() {
        let HH = null;
        const BH = this.host.feed.subscribe((BH => {
          const LH = ++this.latest,
            AH = null !== BH.gameSource ? "game" : null !== HH && null !== HH.gameSource ? "join" : "page";
          HH = BH, this.host.settling(), this.assetsFor(BH).then((HH => this.apply(LH, HH, BH, AH).catch((HH => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", HH)
          }))), (HH => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", HH), this.settled(LH, BH, null, {
              error: HH,
              source: AH
            })
          }))
        }));
        return () => {
          BH(), this.latest++, this.ended = !0
        }
      }
      async apply(HH, BH, LH, AH) {
        const {
          host: rH
        } = this;
        if (HH !== this.latest || rH.stopped()) return;
        const SH = (0, tH.j)(LH);
        if (this.texturesIn(BH, SH) && 0 === this.swapping) return void this.settled(HH, LH, xH(BH, SH));
        let hH;
        this.swapping++;
        let CH = null;
        try {
          hH = await rH.terrain.swap((HH => {
            var BH;
            rH.warn(`texture pack texture ${null!==(BH=HH.name)&&void 0!==BH?BH:"(all)"} failed`, HH.error), null !== HH.name && null === (0, zH.h)(HH.name) || (CH = HH.error)
          }), (async () => rH.sourcesOf ? rH.sourcesOf(BH) : null === BH ? (0, zH.j)() : WH(BH, await this.maxLayerWidth(), SH)), {
            wholeAtlas: null !== BH,
            wanted: () => HH === this.latest
          })
        } catch (EH) {
          return rH.warn("the texture pack's swap failed: the textures in stay", EH), void this.settled(HH, LH, null, {
            error: EH,
            source: AH
          })
        } finally {
          this.swapping--
        }
        if (!0 !== hH || this.ended) this.settled(HH, LH, null, {
          error: CH,
          source: AH
        });
        else {
          rH.landed(), this.assets = BH, this.owner = SH;
          try {
            rH.packSwapped()
          } finally {
            this.settled(HH, LH, this.files())
          }
        }
      }
      async assetsFor(HH) {
        var BH;
        return (null !== (BH = this.host.assetsOf) && void 0 !== BH ? BH : CH.l)(HH, await this.maxLayerWidth())
      }
      texturesIn(HH, BH) {
        return HH === this.assets && (null === HH || BH === this.owner)
      }
      settled(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        HH !== this.latest || this.ended || this.host.stopped() || this.host.settled(BH, LH, AH)
      }
    }
  },
  54585: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      followPagePackFiles: () => SH
    });
    var AH = LH(54568),
      rH = LH(54579);

    function SH(HH, BH, LH, SH, hH) {
      let tH, zH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : HH => (0, rH.l)(HH, (0, AH.deviceMaxLayerWidth)(LH)),
        CH = 0,
        EH = null;
      const XH = () => {
          if (null === EH || null !== EH.gameSource && !BH.showsPage()) return;
          const LH = null === EH.gameSource ? EH : HH.playerState();
          if (LH.pack === tH) return;
          tH = LH.pack;
          const rH = ++CH;
          zH(LH).then((HH => {
            rH === CH && SH((0, AH.packFilesOf)(HH, "player"))
          }), (HH => {
            rH === CH && (tH = void 0), hH("the texture pack's files couldn't be had for the previews: the files in stay", HH)
          }))
        },
        GH = HH.subscribe((HH => {
          EH = HH, XH()
        })),
        YH = HH.onPlayerPackChange(XH),
        uH = BH.onPageShown(XH);
      return () => {
        GH(), YH(), uH(), CH++
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);