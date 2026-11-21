export const id = 45;
export const ids = [45];
export const modules = {
  42738: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      MAX_LAYER_WIDTH: () => mQ,
      PackTextures: () => MQ,
      deviceMaxLayerWidth: () => uQ,
      layerWidthFor: () => YQ,
      packFileUrl: () => xQ,
      packFilesOf: () => eQ,
      packTerrainSources: () => AQ,
      webgl1GridColumns: () => HQ,
      webgl1LayerWidth: () => bQ
    });
    var LQ = wQ(3009),
      qQ = wQ(40224),
      oQ = wQ(40411),
      DQ = wQ(42741),
      kQ = wQ(40399),
      vQ = wQ(42750);
    const mQ = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function uQ(QQ) {
      return (0, LQ.b)() ? Math.min(mQ[QQ], 64) : mQ[QQ]
    }

    function HQ(QQ) {
      const FQ = Math.ceil(Math.log2(Math.max(1, QQ)));
      return 2 ** Math.ceil(FQ / 2)
    }

    function bQ(QQ, FQ, wQ) {
      const LQ = null !== wQ && wQ > 0 ? wQ : qQ.b.limits.MAX_TEXTURE_SIZE;
      return YQ(Math.max(1, Math.floor(LQ / HQ(FQ))), QQ)
    }

    function YQ(QQ, FQ) {
      let wQ = 1;
      for (; 2 * wQ <= Math.min(QQ, FQ);) wQ *= 2;
      return wQ
    }

    function xQ(QQ, FQ) {
      return "string" !== typeof QQ || "" === QQ ? null : "player" === FQ || (0, DQ.d)(QQ) ? QQ : null
    }
    async function AQ(QQ, FQ, LQ) {
      const qQ = await wQ.e(202).then((() => wQ(33928))),
        {
          sheetLayout: DQ,
          sheetWidth: vQ
        } = QQ;
      if (vQ > FQ) throw new Error(`the pack's atlas is ${vQ} px wide, not within ${FQ} px`);
      if (!(DQ.length === qQ.imagesPerAtlas.length && DQ.every(((QQ, FQ) => QQ === qQ.imagesPerAtlas[FQ])))) {
        const QQ = `the pack's atlas is sheets of ${DQ.join(", ")} layers, the built atlas's ${qQ.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (DQ.length < qQ.imagesPerAtlas.length) throw new Error(QQ);
        console.warn(QQ)
      }
      return {
        atlasSheets: [],
        heldUntil: QQ.heldUntil,
        texture: FQ => {
          var wQ, DQ, kQ;
          return null !== (wQ = null !== (DQ = null !== (kQ = xQ(QQ.terrain.texture(FQ), LQ)) && void 0 !== kQ ? kQ : qQ.animatedBlockTextures[FQ]) && void 0 !== DQ ? DQ : qQ.rotatedBlockTextures[FQ]) && void 0 !== wQ ? wQ : function(QQ, FQ, wQ) {
            var LQ, qQ;
            const DQ = null !== (LQ = oQ.e[QQ]) && void 0 !== LQ ? LQ : null;
            return null === DQ ? null : null !== (qQ = xQ(FQ.texture(QQ), wQ)) && void 0 !== qQ ? qQ : DQ
          }(FQ, QQ, LQ)
        },
        decoded: FQ => {
          const wQ = (0, kQ.h)(FQ);
          return null === wQ ? null : (async FQ => {
            const wQ = QQ.sheetPixels.at(FQ);
            if (wQ) {
              QQ.sheetPixels[FQ] = null;
              const LQ = vQ > 0 ? wQ.byteLength / (4 * vQ) : 0;
              return {
                width: vQ,
                height: LQ,
                pixels: new Uint8Array(wQ.buffer, wQ.byteOffset, wQ.byteLength)
              }
            }
            const qQ = QQ.terrain.atlasSheets.at(FQ);
            if (void 0 === qQ) throw new Error(`the pack has no atlas sheet ${FQ}`);
            const oQ = xQ(qQ, LQ);
            if (null === oQ) throw new Error(`the pack's atlas sheet ${FQ} isn't a pack file`);
            return (0, kQ.o)(oQ)
          })(wQ)
        }
      }
    }
    const tQ = new WeakMap;

    function eQ(QQ, FQ) {
      if (null === QQ) return null;
      let wQ = tQ.get(QQ);
      void 0 === wQ && (wQ = {}, tQ.set(QQ, wQ));
      const LQ = wQ[FQ];
      if (void 0 !== LQ) return LQ;
      const {
        armourAtlasUrl: qQ,
        texture: oQ,
        model: DQ
      } = QQ, kQ = {
        armourAtlasUrl: () => xQ(qQ, FQ),
        textureUrl: QQ => xQ(oQ(QQ), FQ),
        modelUrl: QQ => xQ(DQ(QQ), FQ)
      };
      return wQ[FQ] = kQ, kQ
    }
    class MQ {
      constructor(QQ) {
        this.host = QQ, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (QQ, FQ, LQ) => {
          const {
            backend: qQ
          } = this.host, oQ = uQ(qQ);
          if ("webgl1" !== qQ) return oQ;
          const [DQ, kQ] = await Promise.all([wQ.e(202).then((() => wQ(33928))), null !== (QQ = null === (FQ = (LQ = this.host).maxTextureSize) || void 0 === FQ ? void 0 : FQ.call(LQ)) && void 0 !== QQ ? QQ : null]);
          return bQ(oQ, DQ.imagesPerAtlas.length * Math.max(0, ...DQ.imagesPerAtlas), kQ)
        })().catch((QQ => {
          throw this.maxWidth = null, QQ
        })), this.maxWidth
      }
      files() {
        return eQ(this.assets, this.owner)
      }
      start() {
        const QQ = this.host.feed.subscribe((QQ => {
          const FQ = ++this.latest;
          this.host.settling(), this.assetsFor(QQ).then((wQ => this.apply(FQ, wQ, QQ).catch((QQ => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", QQ)
          }))), (wQ => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", wQ), this.settled(FQ, QQ, null, !0)
          }))
        }));
        return () => {
          QQ(), this.latest++, this.ended = !0
        }
      }
      async apply(QQ, FQ, wQ) {
        const {
          host: LQ
        } = this;
        if (QQ !== this.latest || LQ.stopped()) return;
        const qQ = (0, DQ.i)(wQ);
        if (this.texturesIn(FQ, qQ) && 0 === this.swapping) return void this.settled(QQ, wQ, eQ(FQ, qQ));
        let oQ;
        this.swapping++;
        try {
          oQ = await LQ.terrain.swap((QQ => {
            var FQ;
            LQ.warn(`texture pack texture ${null!==(FQ=QQ.name)&&void 0!==FQ?FQ:"(all)"} failed`, QQ.error)
          }), (async () => LQ.sourcesOf ? LQ.sourcesOf(FQ) : null === FQ ? (0, kQ.l)() : AQ(FQ, await this.maxLayerWidth(), qQ)), {
            wholeAtlas: null !== FQ,
            wanted: () => QQ === this.latest
          })
        } catch (vQ) {
          return LQ.warn("the texture pack's swap failed: the textures in stay", vQ), void this.settled(QQ, wQ, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== oQ || this.ended) this.settled(QQ, wQ, null, !0);
        else {
          LQ.landed(), this.assets = FQ, this.owner = qQ;
          try {
            LQ.packSwapped()
          } finally {
            this.settled(QQ, wQ, this.files())
          }
        }
      }
      async assetsFor(QQ) {
        var FQ;
        return (null !== (FQ = this.host.assetsOf) && void 0 !== FQ ? FQ : vQ.k)(QQ, await this.maxLayerWidth())
      }
      texturesIn(QQ, FQ) {
        return QQ === this.assets && (null === QQ || FQ === this.owner)
      }
      settled(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        QQ !== this.latest || this.ended || this.host.stopped() || this.host.settled(FQ, wQ, LQ)
      }
    }
  },
  42759: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      followPagePackFiles: () => oQ
    });
    var LQ = wQ(42738),
      qQ = wQ(42750);

    function oQ(QQ, FQ, wQ, oQ, DQ) {
      let kQ, vQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ => (0, qQ.k)(QQ, (0, LQ.deviceMaxLayerWidth)(wQ)),
        mQ = 0,
        uQ = null;
      const HQ = () => {
          if (null === uQ || null !== uQ.gameSource && !FQ.showsPage()) return;
          const wQ = null === uQ.gameSource ? uQ : QQ.playerState();
          if (wQ.pack === kQ) return;
          kQ = wQ.pack;
          const qQ = ++mQ;
          vQ(wQ).then((QQ => {
            qQ === mQ && oQ((0, LQ.packFilesOf)(QQ, "player"))
          }), (QQ => {
            qQ === mQ && (kQ = void 0), DQ("the texture pack's files couldn't be had for the previews: the files in stay", QQ)
          }))
        },
        bQ = QQ.subscribe((QQ => {
          uQ = QQ, HQ()
        })),
        YQ = QQ.onPlayerPackChange(HQ),
        xQ = FQ.onPageShown(HQ);
      return () => {
        bQ(), YQ(), xQ(), mQ++
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);