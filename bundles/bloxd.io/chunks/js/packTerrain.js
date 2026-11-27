export const id = 54;
export const ids = [54];
export const modules = {
  54816: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      MAX_LAYER_WIDTH: () => tW,
      PackTextures: () => sW,
      deviceMaxLayerWidth: () => ZW,
      layerWidthFor: () => AW,
      packFileUrl: () => bW,
      packFilesOf: () => kW,
      packTerrainSources: () => jW,
      webgl1GridColumns: () => xW,
      webgl1LayerWidth: () => lW
    });
    var mW = OW(5072),
      EW = OW(3953),
      NW = OW(42222),
      PW = OW(42356),
      LW = OW(54820),
      cW = OW(42348),
      wW = OW(54829);
    const tW = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function ZW(WW) {
      return (0, EW.b)() || (0, mW.k)() ? Math.min(tW[WW], 64) : tW[WW]
    }

    function xW(WW) {
      const iW = Math.ceil(Math.log2(Math.max(1, WW)));
      return 2 ** Math.ceil(iW / 2)
    }

    function lW(WW, iW, OW) {
      const mW = null !== OW && OW > 0 ? OW : NW.d.limits.MAX_TEXTURE_SIZE;
      return AW(Math.max(1, Math.floor(mW / xW(iW))), WW)
    }

    function AW(WW, iW) {
      let OW = 1;
      for (; 2 * OW <= Math.min(WW, iW);) OW *= 2;
      return OW
    }

    function bW(WW, iW) {
      return "string" !== typeof WW || "" === WW ? null : "player" === iW || (0, LW.b)(WW) ? WW : null
    }
    async function jW(WW, iW, mW) {
      const EW = await OW.e(234).then((() => OW(35332))),
        {
          sheetLayout: NW,
          sheetWidth: LW
        } = WW;
      if (LW > iW) throw new Error(`the pack's atlas is ${LW} px wide, not within ${iW} px`);
      if (!(NW.length === EW.imagesPerAtlas.length && NW.every(((WW, iW) => WW === EW.imagesPerAtlas[iW])))) {
        const WW = `the pack's atlas is sheets of ${NW.join(", ")} layers, the built atlas's ${EW.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (NW.length < EW.imagesPerAtlas.length) throw new Error(WW);
        console.warn(WW)
      }
      return {
        atlasSheets: [],
        heldUntil: WW.heldUntil,
        texture: iW => {
          var OW, NW, LW;
          return null !== (OW = null !== (NW = null !== (LW = bW(WW.terrain.texture(iW), mW)) && void 0 !== LW ? LW : EW.animatedBlockTextures[iW]) && void 0 !== NW ? NW : EW.rotatedBlockTextures[iW]) && void 0 !== OW ? OW : function(WW, iW, OW) {
            var mW, EW;
            const NW = null !== (mW = PW.e[WW]) && void 0 !== mW ? mW : null;
            return null === NW ? null : null !== (EW = bW(iW.texture(WW), OW)) && void 0 !== EW ? EW : NW
          }(iW, WW, mW)
        },
        decoded: iW => {
          const OW = (0, cW.f)(iW);
          return null === OW ? null : (async iW => {
            const OW = WW.sheetPixels.at(iW);
            if (OW) {
              WW.sheetPixels[iW] = null;
              const mW = LW > 0 ? OW.byteLength / (4 * LW) : 0;
              return {
                width: LW,
                height: mW,
                pixels: new Uint8Array(OW.buffer, OW.byteOffset, OW.byteLength)
              }
            }
            const EW = WW.terrain.atlasSheets.at(iW);
            if (void 0 === EW) throw new Error(`the pack has no atlas sheet ${iW}`);
            const NW = bW(EW, mW);
            if (null === NW) throw new Error(`the pack's atlas sheet ${iW} isn't a pack file`);
            return (0, cW.l)(NW)
          })(OW)
        }
      }
    }
    const UW = new WeakMap;

    function kW(WW, iW) {
      if (null === WW) return null;
      let OW = UW.get(WW);
      void 0 === OW && (OW = {}, UW.set(WW, OW));
      const mW = OW[iW];
      if (void 0 !== mW) return mW;
      const {
        armourAtlasUrl: EW,
        texture: NW,
        model: PW
      } = WW, LW = {
        armourAtlasUrl: () => bW(EW, iW),
        textureUrl: WW => bW(NW(WW), iW),
        modelUrl: WW => bW(PW(WW), iW)
      };
      return OW[iW] = LW, LW
    }
    class sW {
      constructor(WW) {
        this.host = WW, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (WW, iW, mW) => {
          const {
            backend: EW
          } = this.host, NW = ZW(EW);
          if ("webgl1" !== EW) return NW;
          const [PW, LW] = await Promise.all([OW.e(234).then((() => OW(35332))), null !== (WW = null === (iW = (mW = this.host).maxTextureSize) || void 0 === iW ? void 0 : iW.call(mW)) && void 0 !== WW ? WW : null]);
          return lW(NW, PW.imagesPerAtlas.length * Math.max(0, ...PW.imagesPerAtlas), LW)
        })().catch((WW => {
          throw this.maxWidth = null, WW
        })), this.maxWidth
      }
      files() {
        return kW(this.assets, this.owner)
      }
      start() {
        let WW = null;
        const iW = this.host.feed.subscribe((iW => {
          const OW = ++this.latest,
            mW = null !== iW.gameSource ? "game" : null !== WW && null !== WW.gameSource ? "join" : "page";
          WW = iW, this.host.settling(), this.assetsFor(iW).then((WW => this.apply(OW, WW, iW, mW).catch((WW => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", WW)
          }))), (WW => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", WW), this.settled(OW, iW, null, {
              error: WW,
              source: mW
            })
          }))
        }));
        return () => {
          iW(), this.latest++, this.ended = !0
        }
      }
      async apply(WW, iW, OW, mW) {
        const {
          host: EW
        } = this;
        if (WW !== this.latest || EW.stopped()) return;
        const NW = (0, LW.k)(OW);
        if (this.texturesIn(iW, NW) && 0 === this.swapping) return void this.settled(WW, OW, kW(iW, NW));
        let PW;
        this.swapping++;
        let wW = null;
        try {
          PW = await EW.terrain.swap((WW => {
            var iW;
            EW.warn(`texture pack texture ${null!==(iW=WW.name)&&void 0!==iW?iW:"(all)"} failed`, WW.error), null !== WW.name && null === (0, cW.f)(WW.name) || (wW = WW.error)
          }), (async () => EW.sourcesOf ? EW.sourcesOf(iW) : null === iW ? (0, cW.j)() : jW(iW, await this.maxLayerWidth(), NW)), {
            wholeAtlas: null !== iW,
            wanted: () => WW === this.latest
          })
        } catch (tW) {
          return EW.warn("the texture pack's swap failed: the textures in stay", tW), void this.settled(WW, OW, null, {
            error: tW,
            source: mW
          })
        } finally {
          this.swapping--
        }
        if (!0 !== PW || this.ended) this.settled(WW, OW, null, {
          error: wW,
          source: mW
        });
        else {
          EW.landed(), this.assets = iW, this.owner = NW;
          try {
            EW.packSwapped()
          } finally {
            this.settled(WW, OW, this.files())
          }
        }
      }
      async assetsFor(WW) {
        var iW;
        return (null !== (iW = this.host.assetsOf) && void 0 !== iW ? iW : wW.j)(WW, await this.maxLayerWidth())
      }
      texturesIn(WW, iW) {
        return WW === this.assets && (null === WW || iW === this.owner)
      }
      settled(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        WW !== this.latest || this.ended || this.host.stopped() || this.host.settled(iW, OW, mW)
      }
    }
  },
  54833: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      followPagePackFiles: () => NW
    });
    var mW = OW(54816),
      EW = OW(54829);

    function NW(WW, iW, OW, NW, PW) {
      let LW, cW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW => (0, EW.j)(WW, (0, mW.deviceMaxLayerWidth)(OW)),
        wW = 0,
        tW = null;
      const ZW = () => {
          if (null === tW || null !== tW.gameSource && !iW.showsPage()) return;
          const OW = null === tW.gameSource ? tW : WW.playerState();
          if (OW.pack === LW) return;
          LW = OW.pack;
          const EW = ++wW;
          cW(OW).then((WW => {
            EW === wW && NW((0, mW.packFilesOf)(WW, "player"))
          }), (WW => {
            EW === wW && (LW = void 0), PW("the texture pack's files couldn't be had for the previews: the files in stay", WW)
          }))
        },
        xW = WW.subscribe((WW => {
          tW = WW, ZW()
        })),
        lW = WW.onPlayerPackChange(ZW),
        AW = iW.onPageShown(ZW);
      return () => {
        xW(), lW(), AW(), wW++
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);