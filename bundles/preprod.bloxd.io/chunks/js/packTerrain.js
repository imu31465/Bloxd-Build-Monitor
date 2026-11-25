export const id = 48;
export const ids = [48];
export const modules = {
  51243: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      MAX_LAYER_WIDTH: () => PQ,
      PackTextures: () => DQ,
      deviceMaxLayerWidth: () => gQ,
      layerWidthFor: () => IQ,
      packFileUrl: () => jQ,
      packFilesOf: () => VQ,
      packTerrainSources: () => BQ,
      webgl1GridColumns: () => JQ,
      webgl1LayerWidth: () => rQ
    });
    var wQ = XQ(3381),
      qQ = XQ(40934),
      TQ = XQ(41034),
      zQ = XQ(51248),
      sQ = XQ(41022),
      FQ = XQ(51250);
    const PQ = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function gQ(QQ) {
      return (0, wQ.b)() ? Math.min(PQ[QQ], 64) : PQ[QQ]
    }

    function JQ(QQ) {
      const WQ = Math.ceil(Math.log2(Math.max(1, QQ)));
      return 2 ** Math.ceil(WQ / 2)
    }

    function rQ(QQ, WQ, XQ) {
      const wQ = null !== XQ && XQ > 0 ? XQ : qQ.d.limits.MAX_TEXTURE_SIZE;
      return IQ(Math.max(1, Math.floor(wQ / JQ(WQ))), QQ)
    }

    function IQ(QQ, WQ) {
      let XQ = 1;
      for (; 2 * XQ <= Math.min(QQ, WQ);) XQ *= 2;
      return XQ
    }

    function jQ(QQ, WQ) {
      return "string" !== typeof QQ || "" === QQ ? null : "player" === WQ || (0, zQ.d)(QQ) ? QQ : null
    }
    async function BQ(QQ, WQ, wQ) {
      const qQ = await XQ.e(213).then((() => XQ(34609))),
        {
          sheetLayout: zQ,
          sheetWidth: FQ
        } = QQ;
      if (FQ > WQ) throw new Error(`the pack's atlas is ${FQ} px wide, not within ${WQ} px`);
      if (!(zQ.length === qQ.imagesPerAtlas.length && zQ.every(((QQ, WQ) => QQ === qQ.imagesPerAtlas[WQ])))) {
        const QQ = `the pack's atlas is sheets of ${zQ.join(", ")} layers, the built atlas's ${qQ.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (zQ.length < qQ.imagesPerAtlas.length) throw new Error(QQ);
        console.warn(QQ)
      }
      return {
        atlasSheets: [],
        heldUntil: QQ.heldUntil,
        texture: WQ => {
          var XQ, zQ, sQ;
          return null !== (XQ = null !== (zQ = null !== (sQ = jQ(QQ.terrain.texture(WQ), wQ)) && void 0 !== sQ ? sQ : qQ.animatedBlockTextures[WQ]) && void 0 !== zQ ? zQ : qQ.rotatedBlockTextures[WQ]) && void 0 !== XQ ? XQ : function(QQ, WQ, XQ) {
            var wQ, qQ;
            const zQ = null !== (wQ = TQ.e[QQ]) && void 0 !== wQ ? wQ : null;
            return null === zQ ? null : null !== (qQ = jQ(WQ.texture(QQ), XQ)) && void 0 !== qQ ? qQ : zQ
          }(WQ, QQ, wQ)
        },
        decoded: WQ => {
          const XQ = (0, sQ.j)(WQ);
          return null === XQ ? null : (async WQ => {
            const XQ = QQ.sheetPixels.at(WQ);
            if (XQ) {
              QQ.sheetPixels[WQ] = null;
              const wQ = FQ > 0 ? XQ.byteLength / (4 * FQ) : 0;
              return {
                width: FQ,
                height: wQ,
                pixels: new Uint8Array(XQ.buffer, XQ.byteOffset, XQ.byteLength)
              }
            }
            const qQ = QQ.terrain.atlasSheets.at(WQ);
            if (void 0 === qQ) throw new Error(`the pack has no atlas sheet ${WQ}`);
            const TQ = jQ(qQ, wQ);
            if (null === TQ) throw new Error(`the pack's atlas sheet ${WQ} isn't a pack file`);
            return (0, sQ.m)(TQ)
          })(XQ)
        }
      }
    }
    const yQ = new WeakMap;

    function VQ(QQ, WQ) {
      if (null === QQ) return null;
      let XQ = yQ.get(QQ);
      void 0 === XQ && (XQ = {}, yQ.set(QQ, XQ));
      const wQ = XQ[WQ];
      if (void 0 !== wQ) return wQ;
      const {
        armourAtlasUrl: qQ,
        texture: TQ,
        model: zQ
      } = QQ, sQ = {
        armourAtlasUrl: () => jQ(qQ, WQ),
        textureUrl: QQ => jQ(TQ(QQ), WQ),
        modelUrl: QQ => jQ(zQ(QQ), WQ)
      };
      return XQ[WQ] = sQ, sQ
    }
    class DQ {
      constructor(QQ) {
        this.host = QQ, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (QQ, WQ, wQ) => {
          const {
            backend: qQ
          } = this.host, TQ = gQ(qQ);
          if ("webgl1" !== qQ) return TQ;
          const [zQ, sQ] = await Promise.all([XQ.e(213).then((() => XQ(34609))), null !== (QQ = null === (WQ = (wQ = this.host).maxTextureSize) || void 0 === WQ ? void 0 : WQ.call(wQ)) && void 0 !== QQ ? QQ : null]);
          return rQ(TQ, zQ.imagesPerAtlas.length * Math.max(0, ...zQ.imagesPerAtlas), sQ)
        })().catch((QQ => {
          throw this.maxWidth = null, QQ
        })), this.maxWidth
      }
      files() {
        return VQ(this.assets, this.owner)
      }
      start() {
        let QQ = null;
        const WQ = this.host.feed.subscribe((WQ => {
          const XQ = ++this.latest,
            wQ = null !== WQ.gameSource ? "game" : null !== QQ && null !== QQ.gameSource ? "join" : "page";
          QQ = WQ, this.host.settling(), this.assetsFor(WQ).then((QQ => this.apply(XQ, QQ, WQ, wQ).catch((QQ => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", QQ)
          }))), (QQ => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", QQ), this.settled(XQ, WQ, null, {
              error: QQ,
              source: wQ
            })
          }))
        }));
        return () => {
          WQ(), this.latest++, this.ended = !0
        }
      }
      async apply(QQ, WQ, XQ, wQ) {
        const {
          host: qQ
        } = this;
        if (QQ !== this.latest || qQ.stopped()) return;
        const TQ = (0, zQ.n)(XQ);
        if (this.texturesIn(WQ, TQ) && 0 === this.swapping) return void this.settled(QQ, XQ, VQ(WQ, TQ));
        let FQ;
        this.swapping++;
        let PQ = null;
        try {
          FQ = await qQ.terrain.swap((QQ => {
            var WQ;
            qQ.warn(`texture pack texture ${null!==(WQ=QQ.name)&&void 0!==WQ?WQ:"(all)"} failed`, QQ.error), null !== QQ.name && null === (0, sQ.j)(QQ.name) || (PQ = QQ.error)
          }), (async () => qQ.sourcesOf ? qQ.sourcesOf(WQ) : null === WQ ? (0, sQ.l)() : BQ(WQ, await this.maxLayerWidth(), TQ)), {
            wholeAtlas: null !== WQ,
            wanted: () => QQ === this.latest
          })
        } catch (gQ) {
          return qQ.warn("the texture pack's swap failed: the textures in stay", gQ), void this.settled(QQ, XQ, null, {
            error: gQ,
            source: wQ
          })
        } finally {
          this.swapping--
        }
        if (!0 !== FQ || this.ended) this.settled(QQ, XQ, null, {
          error: PQ,
          source: wQ
        });
        else {
          qQ.landed(), this.assets = WQ, this.owner = TQ;
          try {
            qQ.packSwapped()
          } finally {
            this.settled(QQ, XQ, this.files())
          }
        }
      }
      async assetsFor(QQ) {
        var WQ;
        return (null !== (WQ = this.host.assetsOf) && void 0 !== WQ ? WQ : FQ.j)(QQ, await this.maxLayerWidth())
      }
      texturesIn(QQ, WQ) {
        return QQ === this.assets && (null === QQ || WQ === this.owner)
      }
      settled(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        QQ !== this.latest || this.ended || this.host.stopped() || this.host.settled(WQ, XQ, wQ)
      }
    }
  },
  51257: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      followPagePackFiles: () => TQ
    });
    var wQ = XQ(51243),
      qQ = XQ(51250);

    function TQ(QQ, WQ, XQ, TQ, zQ) {
      let sQ, FQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ => (0, qQ.j)(QQ, (0, wQ.deviceMaxLayerWidth)(XQ)),
        PQ = 0,
        gQ = null;
      const JQ = () => {
          if (null === gQ || null !== gQ.gameSource && !WQ.showsPage()) return;
          const XQ = null === gQ.gameSource ? gQ : QQ.playerState();
          if (XQ.pack === sQ) return;
          sQ = XQ.pack;
          const qQ = ++PQ;
          FQ(XQ).then((QQ => {
            qQ === PQ && TQ((0, wQ.packFilesOf)(QQ, "player"))
          }), (QQ => {
            qQ === PQ && (sQ = void 0), zQ("the texture pack's files couldn't be had for the previews: the files in stay", QQ)
          }))
        },
        rQ = QQ.subscribe((QQ => {
          gQ = QQ, JQ()
        })),
        IQ = QQ.onPlayerPackChange(JQ),
        jQ = WQ.onPageShown(JQ);
      return () => {
        rQ(), IQ(), jQ(), PQ++
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);