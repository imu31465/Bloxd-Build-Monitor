export const id = 45;
export const ids = [45];
export const modules = {
  43081: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      MAX_LAYER_WIDTH: () => cq,
      PackTextures: () => Hq,
      deviceMaxLayerWidth: () => uq,
      layerWidthFor: () => Nq,
      packFileUrl: () => aq,
      packFilesOf: () => jq,
      packTerrainSources: () => Vq,
      webgl1GridColumns: () => Bq,
      webgl1LayerWidth: () => Wq
    });
    var Yq = gq(3027),
      lq = gq(40503),
      Oq = gq(40735),
      mq = gq(43087),
      xq = gq(40731),
      Aq = gq(43092);
    const cq = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function uq(qq) {
      return (0, Yq.e)() ? Math.min(cq[qq], 64) : cq[qq]
    }

    function Bq(qq) {
      const Eq = Math.ceil(Math.log2(Math.max(1, qq)));
      return 2 ** Math.ceil(Eq / 2)
    }

    function Wq(qq, Eq, gq) {
      const Yq = null !== gq && gq > 0 ? gq : lq.c.limits.MAX_TEXTURE_SIZE;
      return Nq(Math.max(1, Math.floor(Yq / Bq(Eq))), qq)
    }

    function Nq(qq, Eq) {
      let gq = 1;
      for (; 2 * gq <= Math.min(qq, Eq);) gq *= 2;
      return gq
    }

    function aq(qq, Eq) {
      return "string" !== typeof qq || "" === qq ? null : "player" === Eq || (0, mq.d)(qq) ? qq : null
    }
    async function Vq(qq, Eq, Yq) {
      const lq = await gq.e(202).then((() => gq(34302))),
        {
          sheetLayout: mq,
          sheetWidth: Aq
        } = qq;
      if (Aq > Eq) throw new Error(`the pack's atlas is ${Aq} px wide, not within ${Eq} px`);
      if (!(mq.length === lq.imagesPerAtlas.length && mq.every(((qq, Eq) => qq === lq.imagesPerAtlas[Eq])))) {
        const qq = `the pack's atlas is sheets of ${mq.join(", ")} layers, the built atlas's ${lq.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (mq.length < lq.imagesPerAtlas.length) throw new Error(qq);
        console.warn(qq)
      }
      return {
        atlasSheets: [],
        heldUntil: qq.heldUntil,
        texture: Eq => {
          var gq, mq, xq;
          return null !== (gq = null !== (mq = null !== (xq = aq(qq.terrain.texture(Eq), Yq)) && void 0 !== xq ? xq : lq.animatedBlockTextures[Eq]) && void 0 !== mq ? mq : lq.rotatedBlockTextures[Eq]) && void 0 !== gq ? gq : function(qq, Eq, gq) {
            var Yq, lq;
            const mq = null !== (Yq = Oq.c[qq]) && void 0 !== Yq ? Yq : null;
            return null === mq ? null : null !== (lq = aq(Eq.texture(qq), gq)) && void 0 !== lq ? lq : mq
          }(Eq, qq, Yq)
        },
        decoded: Eq => {
          const gq = (0, xq.h)(Eq);
          return null === gq ? null : (async Eq => {
            const gq = qq.sheetPixels.at(Eq);
            if (gq) {
              qq.sheetPixels[Eq] = null;
              const Yq = Aq > 0 ? gq.byteLength / (4 * Aq) : 0;
              return {
                width: Aq,
                height: Yq,
                pixels: new Uint8Array(gq.buffer, gq.byteOffset, gq.byteLength)
              }
            }
            const lq = qq.terrain.atlasSheets.at(Eq);
            if (void 0 === lq) throw new Error(`the pack has no atlas sheet ${Eq}`);
            const Oq = aq(lq, Yq);
            if (null === Oq) throw new Error(`the pack's atlas sheet ${Eq} isn't a pack file`);
            return (0, xq.m)(Oq)
          })(gq)
        }
      }
    }
    const dq = new WeakMap;

    function jq(qq, Eq) {
      if (null === qq) return null;
      let gq = dq.get(qq);
      void 0 === gq && (gq = {}, dq.set(qq, gq));
      const Yq = gq[Eq];
      if (void 0 !== Yq) return Yq;
      const {
        armourAtlasUrl: lq,
        texture: Oq,
        model: mq
      } = qq, xq = {
        armourAtlasUrl: () => aq(lq, Eq),
        textureUrl: qq => aq(Oq(qq), Eq),
        modelUrl: qq => aq(mq(qq), Eq)
      };
      return gq[Eq] = xq, xq
    }
    class Hq {
      constructor(qq) {
        this.host = qq, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (qq, Eq, Yq) => {
          const {
            backend: lq
          } = this.host, Oq = uq(lq);
          if ("webgl1" !== lq) return Oq;
          const [mq, xq] = await Promise.all([gq.e(202).then((() => gq(34302))), null !== (qq = null === (Eq = (Yq = this.host).maxTextureSize) || void 0 === Eq ? void 0 : Eq.call(Yq)) && void 0 !== qq ? qq : null]);
          return Wq(Oq, mq.imagesPerAtlas.length * Math.max(0, ...mq.imagesPerAtlas), xq)
        })().catch((qq => {
          throw this.maxWidth = null, qq
        })), this.maxWidth
      }
      files() {
        return jq(this.assets, this.owner)
      }
      start() {
        const qq = this.host.feed.subscribe((qq => {
          const Eq = ++this.latest;
          this.host.settling(), this.assetsFor(qq).then((gq => this.apply(Eq, gq, qq).catch((qq => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", qq)
          }))), (gq => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", gq), this.settled(Eq, qq, null, !0)
          }))
        }));
        return () => {
          qq(), this.latest++, this.ended = !0
        }
      }
      async apply(qq, Eq, gq) {
        const {
          host: Yq
        } = this;
        if (qq !== this.latest || Yq.stopped()) return;
        const lq = (0, mq.k)(gq);
        if (this.texturesIn(Eq, lq) && 0 === this.swapping) return void this.settled(qq, gq, jq(Eq, lq));
        let Oq;
        this.swapping++;
        try {
          Oq = await Yq.terrain.swap((qq => {
            var Eq;
            Yq.warn(`texture pack texture ${null!==(Eq=qq.name)&&void 0!==Eq?Eq:"(all)"} failed`, qq.error)
          }), (async () => Yq.sourcesOf ? Yq.sourcesOf(Eq) : null === Eq ? (0, xq.k)() : Vq(Eq, await this.maxLayerWidth(), lq)), {
            wholeAtlas: null !== Eq,
            wanted: () => qq === this.latest
          })
        } catch (Aq) {
          return Yq.warn("the texture pack's swap failed: the textures in stay", Aq), void this.settled(qq, gq, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== Oq || this.ended) this.settled(qq, gq, null, !0);
        else {
          Yq.landed(), this.assets = Eq, this.owner = lq;
          try {
            Yq.packSwapped()
          } finally {
            this.settled(qq, gq, this.files())
          }
        }
      }
      async assetsFor(qq) {
        var Eq;
        return (null !== (Eq = this.host.assetsOf) && void 0 !== Eq ? Eq : Aq.h)(qq, await this.maxLayerWidth())
      }
      texturesIn(qq, Eq) {
        return qq === this.assets && (null === qq || Eq === this.owner)
      }
      settled(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        qq !== this.latest || this.ended || this.host.stopped() || this.host.settled(Eq, gq, Yq)
      }
    }
  },
  43094: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      followPagePackFiles: () => Oq
    });
    var Yq = gq(43081),
      lq = gq(43092);

    function Oq(qq, Eq, gq, Oq, mq) {
      let xq, Aq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : qq => (0, lq.h)(qq, (0, Yq.deviceMaxLayerWidth)(gq)),
        cq = 0,
        uq = null;
      const Bq = () => {
          if (null === uq || null !== uq.gameSource && !Eq.showsPage()) return;
          const gq = null === uq.gameSource ? uq : qq.playerState();
          if (gq.pack === xq) return;
          xq = gq.pack;
          const lq = ++cq;
          Aq(gq).then((qq => {
            lq === cq && Oq((0, Yq.packFilesOf)(qq, "player"))
          }), (qq => {
            lq === cq && (xq = void 0), mq("the texture pack's files couldn't be had for the previews: the files in stay", qq)
          }))
        },
        Wq = qq.subscribe((qq => {
          uq = qq, Bq()
        })),
        Nq = qq.onPlayerPackChange(Bq),
        aq = Eq.onPageShown(Bq);
      return () => {
        Wq(), Nq(), aq(), cq++
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);