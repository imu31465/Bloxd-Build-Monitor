export const id = 42;
export const ids = [42];
export const modules = {
  41985: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      MAX_LAYER_WIDTH: () => jJ,
      PackTextures: () => rJ,
      deviceMaxLayerWidth: () => YJ,
      layerWidthFor: () => sJ,
      packFileUrl: () => nJ,
      packFilesOf: () => xJ,
      packTerrainSources: () => GJ,
      webgl1GridColumns: () => hJ,
      webgl1LayerWidth: () => DJ
    });
    var FJ = ZJ(2601),
      UJ = ZJ(39531),
      eJ = ZJ(39759),
      XJ = ZJ(41989),
      AJ = ZJ(39747),
      qJ = ZJ(41991);
    const jJ = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function YJ(JJ) {
      return (0, FJ.e)() ? Math.min(jJ[JJ], 64) : jJ[JJ]
    }

    function hJ(JJ) {
      const cJ = Math.ceil(Math.log2(Math.max(1, JJ)));
      return 2 ** Math.ceil(cJ / 2)
    }

    function DJ(JJ, cJ, ZJ) {
      const FJ = null !== ZJ && ZJ > 0 ? ZJ : UJ.d.limits.MAX_TEXTURE_SIZE;
      return sJ(Math.max(1, Math.floor(FJ / hJ(cJ))), JJ)
    }

    function sJ(JJ, cJ) {
      let ZJ = 1;
      for (; 2 * ZJ <= Math.min(JJ, cJ);) ZJ *= 2;
      return ZJ
    }

    function nJ(JJ, cJ) {
      return "string" !== typeof JJ || "" === JJ ? null : "player" === cJ || (0, XJ.e)(JJ) ? JJ : null
    }
    async function GJ(JJ, cJ, FJ) {
      const UJ = await ZJ.e(187).then((() => ZJ(33439))),
        {
          sheetLayout: XJ,
          sheetWidth: qJ
        } = JJ;
      if (qJ > cJ) throw new Error(`the pack's atlas is ${qJ} px wide, not within ${cJ} px`);
      if (!(XJ.length === UJ.imagesPerAtlas.length && XJ.every(((JJ, cJ) => JJ === UJ.imagesPerAtlas[cJ])))) {
        const JJ = `the pack's atlas is sheets of ${XJ.join(", ")} layers, the built atlas's ${UJ.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (XJ.length < UJ.imagesPerAtlas.length) throw new Error(JJ);
        console.warn(JJ)
      }
      return {
        atlasSheets: [],
        heldUntil: JJ.heldUntil,
        texture: cJ => {
          var ZJ, XJ, AJ;
          return null !== (ZJ = null !== (XJ = null !== (AJ = nJ(JJ.terrain.texture(cJ), FJ)) && void 0 !== AJ ? AJ : UJ.animatedBlockTextures[cJ]) && void 0 !== XJ ? XJ : UJ.rotatedBlockTextures[cJ]) && void 0 !== ZJ ? ZJ : function(JJ, cJ, ZJ) {
            var FJ, UJ;
            const XJ = null !== (FJ = eJ.c[JJ]) && void 0 !== FJ ? FJ : null;
            return null === XJ ? null : null !== (UJ = nJ(cJ.texture(JJ), ZJ)) && void 0 !== UJ ? UJ : XJ
          }(cJ, JJ, FJ)
        },
        decoded: cJ => {
          const ZJ = (0, AJ.j)(cJ);
          return null === ZJ ? null : (async cJ => {
            const ZJ = JJ.sheetPixels.at(cJ);
            if (ZJ) {
              JJ.sheetPixels[cJ] = null;
              const FJ = qJ > 0 ? ZJ.byteLength / (4 * qJ) : 0;
              return {
                width: qJ,
                height: FJ,
                pixels: new Uint8Array(ZJ.buffer, ZJ.byteOffset, ZJ.byteLength)
              }
            }
            const UJ = JJ.terrain.atlasSheets.at(cJ);
            if (void 0 === UJ) throw new Error(`the pack has no atlas sheet ${cJ}`);
            const eJ = nJ(UJ, FJ);
            if (null === eJ) throw new Error(`the pack's atlas sheet ${cJ} isn't a pack file`);
            return (0, AJ.m)(eJ)
          })(ZJ)
        }
      }
    }
    const fJ = new WeakMap;

    function xJ(JJ, cJ) {
      if (null === JJ) return null;
      let ZJ = fJ.get(JJ);
      void 0 === ZJ && (ZJ = {}, fJ.set(JJ, ZJ));
      const FJ = ZJ[cJ];
      if (void 0 !== FJ) return FJ;
      const {
        armourAtlasUrl: UJ,
        texture: eJ,
        model: XJ
      } = JJ, AJ = {
        armourAtlasUrl: () => nJ(UJ, cJ),
        textureUrl: JJ => nJ(eJ(JJ), cJ),
        modelUrl: JJ => nJ(XJ(JJ), cJ)
      };
      return ZJ[cJ] = AJ, AJ
    }
    class rJ {
      constructor(JJ) {
        this.host = JJ, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (JJ, cJ, FJ) => {
          const {
            backend: UJ
          } = this.host, eJ = YJ(UJ);
          if ("webgl1" !== UJ) return eJ;
          const [XJ, AJ] = await Promise.all([ZJ.e(187).then((() => ZJ(33439))), null !== (JJ = null === (cJ = (FJ = this.host).maxTextureSize) || void 0 === cJ ? void 0 : cJ.call(FJ)) && void 0 !== JJ ? JJ : null]);
          return DJ(eJ, XJ.imagesPerAtlas.length * Math.max(0, ...XJ.imagesPerAtlas), AJ)
        })().catch((JJ => {
          throw this.maxWidth = null, JJ
        })), this.maxWidth
      }
      files() {
        return xJ(this.assets, this.owner)
      }
      iconOverrides() {
        const JJ = this.files();
        return null === JJ ? null : {
          itemSprite: JJ.textureUrl,
          blockTexture: JJ.textureUrl,
          model: JJ.modelUrl
        }
      }
      start() {
        const JJ = this.host.feed.subscribe((JJ => {
          const cJ = ++this.latest;
          this.host.settling(), this.assetsFor(JJ).then((ZJ => this.apply(cJ, ZJ, JJ).catch((JJ => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", JJ)
          }))), (ZJ => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", ZJ), this.settled(cJ, JJ, null, !0)
          }))
        }));
        return () => {
          JJ(), this.latest++, this.ended = !0
        }
      }
      async apply(JJ, cJ, ZJ) {
        const {
          host: FJ
        } = this;
        if (JJ !== this.latest || FJ.stopped()) return;
        const UJ = (0, XJ.l)(ZJ);
        if (this.texturesIn(cJ, UJ) && 0 === this.swapping) return void this.settled(JJ, ZJ, xJ(cJ, UJ));
        let eJ;
        this.swapping++;
        try {
          eJ = await FJ.terrain.swap((JJ => {
            var cJ;
            FJ.warn(`texture pack texture ${null!==(cJ=JJ.name)&&void 0!==cJ?cJ:"(all)"} failed`, JJ.error)
          }), (async () => FJ.sourcesOf ? FJ.sourcesOf(cJ) : null === cJ ? (0, AJ.k)() : GJ(cJ, await this.maxLayerWidth(), UJ)), {
            wholeAtlas: null !== cJ,
            wanted: () => JJ === this.latest
          })
        } catch (qJ) {
          return FJ.warn("the texture pack's swap failed: the textures in stay", qJ), void this.settled(JJ, ZJ, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== eJ || this.ended) this.settled(JJ, ZJ, null, !0);
        else {
          FJ.landed(), this.assets = cJ, this.owner = UJ;
          try {
            FJ.packSwapped()
          } finally {
            this.settled(JJ, ZJ, this.files())
          }
        }
      }
      async assetsFor(JJ) {
        var cJ;
        return (null !== (cJ = this.host.assetsOf) && void 0 !== cJ ? cJ : qJ.j)(JJ, await this.maxLayerWidth())
      }
      texturesIn(JJ, cJ) {
        return JJ === this.assets && (null === JJ || cJ === this.owner)
      }
      settled(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        JJ !== this.latest || this.ended || this.host.stopped() || this.host.settled(cJ, ZJ, FJ)
      }
    }
  },
  42e3: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      followPagePackFiles: () => eJ
    });
    var FJ = ZJ(41985),
      UJ = ZJ(41991);

    function eJ(JJ, cJ, ZJ, eJ, XJ) {
      let AJ, qJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : JJ => (0, UJ.j)(JJ, (0, FJ.deviceMaxLayerWidth)(ZJ)),
        jJ = 0,
        YJ = null;
      const hJ = () => {
          if (null === YJ || null !== YJ.gameSource && !cJ.showsPage()) return;
          const ZJ = null === YJ.gameSource ? YJ : JJ.playerState();
          if (ZJ.pack === AJ) return;
          AJ = ZJ.pack;
          const UJ = ++jJ;
          qJ(ZJ).then((JJ => {
            UJ === jJ && eJ((0, FJ.packFilesOf)(JJ, "player"))
          }), (JJ => {
            UJ === jJ && (AJ = void 0), XJ("the texture pack's files couldn't be had for the previews: the files in stay", JJ)
          }))
        },
        DJ = JJ.subscribe((JJ => {
          YJ = JJ, hJ()
        })),
        sJ = JJ.onPlayerPackChange(hJ),
        nJ = cJ.onPageShown(hJ);
      return () => {
        DJ(), sJ(), nJ(), jJ++
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);