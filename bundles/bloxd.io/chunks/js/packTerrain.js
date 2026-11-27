export const id = 54;
export const ids = [54];
export const modules = {
  54664: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      MAX_LAYER_WIDTH: () => VR,
      PackTextures: () => WR,
      deviceMaxLayerWidth: () => KR,
      layerWidthFor: () => eR,
      packFileUrl: () => aR,
      packFilesOf: () => UR,
      packTerrainSources: () => LR,
      webgl1GridColumns: () => wR,
      webgl1LayerWidth: () => rR
    });
    var yR = GR(5180),
      tR = GR(4051),
      uR = GR(42237),
      ZR = GR(42369),
      qR = GR(54671),
      iR = GR(42364),
      fR = GR(54680);
    const VR = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function KR(RR) {
      return (0, tR.c)() || (0, yR.k)() ? Math.min(VR[RR], 64) : VR[RR]
    }

    function wR(RR) {
      const JR = Math.ceil(Math.log2(Math.max(1, RR)));
      return 2 ** Math.ceil(JR / 2)
    }

    function rR(RR, JR, GR) {
      const yR = null !== GR && GR > 0 ? GR : uR.d.limits.MAX_TEXTURE_SIZE;
      return eR(Math.max(1, Math.floor(yR / wR(JR))), RR)
    }

    function eR(RR, JR) {
      let GR = 1;
      for (; 2 * GR <= Math.min(RR, JR);) GR *= 2;
      return GR
    }

    function aR(RR, JR) {
      return "string" !== typeof RR || "" === RR ? null : "player" === JR || (0, qR.c)(RR) ? RR : null
    }
    async function LR(RR, JR, yR) {
      const tR = await GR.e(234).then((() => GR(35257))),
        {
          sheetLayout: uR,
          sheetWidth: qR
        } = RR;
      if (qR > JR) throw new Error(`the pack's atlas is ${qR} px wide, not within ${JR} px`);
      if (!(uR.length === tR.imagesPerAtlas.length && uR.every(((RR, JR) => RR === tR.imagesPerAtlas[JR])))) {
        const RR = `the pack's atlas is sheets of ${uR.join(", ")} layers, the built atlas's ${tR.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (uR.length < tR.imagesPerAtlas.length) throw new Error(RR);
        console.warn(RR)
      }
      return {
        atlasSheets: [],
        heldUntil: RR.heldUntil,
        texture: JR => {
          var GR, uR, qR;
          return null !== (GR = null !== (uR = null !== (qR = aR(RR.terrain.texture(JR), yR)) && void 0 !== qR ? qR : tR.animatedBlockTextures[JR]) && void 0 !== uR ? uR : tR.rotatedBlockTextures[JR]) && void 0 !== GR ? GR : function(RR, JR, GR) {
            var yR, tR;
            const uR = null !== (yR = ZR.b[RR]) && void 0 !== yR ? yR : null;
            return null === uR ? null : null !== (tR = aR(JR.texture(RR), GR)) && void 0 !== tR ? tR : uR
          }(JR, RR, yR)
        },
        decoded: JR => {
          const GR = (0, iR.k)(JR);
          return null === GR ? null : (async JR => {
            const GR = RR.sheetPixels.at(JR);
            if (GR) {
              RR.sheetPixels[JR] = null;
              const yR = qR > 0 ? GR.byteLength / (4 * qR) : 0;
              return {
                width: qR,
                height: yR,
                pixels: new Uint8Array(GR.buffer, GR.byteOffset, GR.byteLength)
              }
            }
            const tR = RR.terrain.atlasSheets.at(JR);
            if (void 0 === tR) throw new Error(`the pack has no atlas sheet ${JR}`);
            const uR = aR(tR, yR);
            if (null === uR) throw new Error(`the pack's atlas sheet ${JR} isn't a pack file`);
            return (0, iR.s)(uR)
          })(GR)
        }
      }
    }
    const nR = new WeakMap;

    function UR(RR, JR) {
      if (null === RR) return null;
      let GR = nR.get(RR);
      void 0 === GR && (GR = {}, nR.set(RR, GR));
      const yR = GR[JR];
      if (void 0 !== yR) return yR;
      const {
        armourAtlasUrl: tR,
        texture: uR,
        model: ZR
      } = RR, qR = {
        armourAtlasUrl: () => aR(tR, JR),
        textureUrl: RR => aR(uR(RR), JR),
        modelUrl: RR => aR(ZR(RR), JR)
      };
      return GR[JR] = qR, qR
    }
    class WR {
      constructor(RR) {
        this.host = RR, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (RR, JR, yR) => {
          const {
            backend: tR
          } = this.host, uR = KR(tR);
          if ("webgl1" !== tR) return uR;
          const [ZR, qR] = await Promise.all([GR.e(234).then((() => GR(35257))), null !== (RR = null === (JR = (yR = this.host).maxTextureSize) || void 0 === JR ? void 0 : JR.call(yR)) && void 0 !== RR ? RR : null]);
          return rR(uR, ZR.imagesPerAtlas.length * Math.max(0, ...ZR.imagesPerAtlas), qR)
        })().catch((RR => {
          throw this.maxWidth = null, RR
        })), this.maxWidth
      }
      files() {
        return UR(this.assets, this.owner)
      }
      start() {
        let RR = null;
        const JR = this.host.feed.subscribe((JR => {
          const GR = ++this.latest,
            yR = null !== JR.gameSource ? "game" : null !== RR && null !== RR.gameSource ? "join" : "page";
          RR = JR, this.host.settling(), this.assetsFor(JR).then((RR => this.apply(GR, RR, JR, yR).catch((RR => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", RR)
          }))), (RR => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", RR), this.settled(GR, JR, null, {
              error: RR,
              source: yR
            })
          }))
        }));
        return () => {
          JR(), this.latest++, this.ended = !0
        }
      }
      async apply(RR, JR, GR, yR) {
        const {
          host: tR
        } = this;
        if (RR !== this.latest || tR.stopped()) return;
        const uR = (0, qR.m)(GR);
        if (this.texturesIn(JR, uR) && 0 === this.swapping) return void this.settled(RR, GR, UR(JR, uR));
        let ZR;
        this.swapping++;
        let fR = null;
        try {
          ZR = await tR.terrain.swap((RR => {
            var JR;
            tR.warn(`texture pack texture ${null!==(JR=RR.name)&&void 0!==JR?JR:"(all)"} failed`, RR.error), null !== RR.name && null === (0, iR.k)(RR.name) || (fR = RR.error)
          }), (async () => tR.sourcesOf ? tR.sourcesOf(JR) : null === JR ? (0, iR.o)() : LR(JR, await this.maxLayerWidth(), uR)), {
            wholeAtlas: null !== JR,
            wanted: () => RR === this.latest
          })
        } catch (VR) {
          return tR.warn("the texture pack's swap failed: the textures in stay", VR), void this.settled(RR, GR, null, {
            error: VR,
            source: yR
          })
        } finally {
          this.swapping--
        }
        if (!0 !== ZR || this.ended) this.settled(RR, GR, null, {
          error: fR,
          source: yR
        });
        else {
          tR.landed(), this.assets = JR, this.owner = uR;
          try {
            tR.packSwapped()
          } finally {
            this.settled(RR, GR, this.files())
          }
        }
      }
      async assetsFor(RR) {
        var JR;
        return (null !== (JR = this.host.assetsOf) && void 0 !== JR ? JR : fR.f)(RR, await this.maxLayerWidth())
      }
      texturesIn(RR, JR) {
        return RR === this.assets && (null === RR || JR === this.owner)
      }
      settled(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        RR !== this.latest || this.ended || this.host.stopped() || this.host.settled(JR, GR, yR)
      }
    }
  },
  54685: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      followPagePackFiles: () => uR
    });
    var yR = GR(54664),
      tR = GR(54680);

    function uR(RR, JR, GR, uR, ZR) {
      let qR, iR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : RR => (0, tR.f)(RR, (0, yR.deviceMaxLayerWidth)(GR)),
        fR = 0,
        VR = null;
      const KR = () => {
          if (null === VR || null !== VR.gameSource && !JR.showsPage()) return;
          const GR = null === VR.gameSource ? VR : RR.playerState();
          if (GR.pack === qR) return;
          qR = GR.pack;
          const tR = ++fR;
          iR(GR).then((RR => {
            tR === fR && uR((0, yR.packFilesOf)(RR, "player"))
          }), (RR => {
            tR === fR && (qR = void 0), ZR("the texture pack's files couldn't be had for the previews: the files in stay", RR)
          }))
        },
        wR = RR.subscribe((RR => {
          VR = RR, KR()
        })),
        rR = RR.onPlayerPackChange(KR),
        eR = JR.onPageShown(KR);
      return () => {
        wR(), rR(), eR(), fR++
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);