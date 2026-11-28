export const id = 54;
export const ids = [54];
export const modules = {
  54889: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      MAX_LAYER_WIDTH: () => Ib,
      PackTextures: () => mb,
      deviceMaxLayerWidth: () => Ob,
      layerWidthFor: () => Cb,
      packFileUrl: () => Eb,
      packFilesOf: () => sb,
      packTerrainSources: () => Fb,
      webgl1GridColumns: () => Ub,
      webgl1LayerWidth: () => tb
    });
    var eb = Mb(5226),
      Hb = Mb(4151),
      pb = Mb(42379),
      Vb = Mb(42519),
      gb = Mb(54897),
      lb = Mb(42515),
      Lb = Mb(54903);
    const Ib = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Ob(bb) {
      return (0, Hb.e)() || (0, eb.k)() ? Math.min(Ib[bb], 64) : Ib[bb]
    }

    function Ub(bb) {
      const wb = Math.ceil(Math.log2(Math.max(1, bb)));
      return 2 ** Math.ceil(wb / 2)
    }

    function tb(bb, wb, Mb) {
      const eb = null !== Mb && Mb > 0 ? Mb : pb.e.limits.MAX_TEXTURE_SIZE;
      return Cb(Math.max(1, Math.floor(eb / Ub(wb))), bb)
    }

    function Cb(bb, wb) {
      let Mb = 1;
      for (; 2 * Mb <= Math.min(bb, wb);) Mb *= 2;
      return Mb
    }

    function Eb(bb, wb) {
      return "string" !== typeof bb || "" === bb ? null : "player" === wb || (0, gb.b)(bb) ? bb : null
    }
    async function Fb(bb, wb, eb) {
      const Hb = await Mb.e(235).then((() => Mb(35425))),
        {
          sheetLayout: pb,
          sheetWidth: gb
        } = bb;
      if (gb > wb) throw new Error(`the pack's atlas is ${gb} px wide, not within ${wb} px`);
      if (!(pb.length === Hb.imagesPerAtlas.length && pb.every(((bb, wb) => bb === Hb.imagesPerAtlas[wb])))) {
        const bb = `the pack's atlas is sheets of ${pb.join(", ")} layers, the built atlas's ${Hb.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (pb.length < Hb.imagesPerAtlas.length) throw new Error(bb);
        console.warn(bb)
      }
      return {
        atlasSheets: [],
        heldUntil: bb.heldUntil,
        texture: wb => {
          var Mb, pb, gb;
          return null !== (Mb = null !== (pb = null !== (gb = Eb(bb.terrain.texture(wb), eb)) && void 0 !== gb ? gb : Hb.animatedBlockTextures[wb]) && void 0 !== pb ? pb : Hb.rotatedBlockTextures[wb]) && void 0 !== Mb ? Mb : function(bb, wb, Mb) {
            var eb, Hb;
            const pb = null !== (eb = Vb.b[bb]) && void 0 !== eb ? eb : null;
            return null === pb ? null : null !== (Hb = Eb(wb.texture(bb), Mb)) && void 0 !== Hb ? Hb : pb
          }(wb, bb, eb)
        },
        decoded: wb => {
          const Mb = (0, lb.f)(wb);
          return null === Mb ? null : (async wb => {
            const Mb = bb.sheetPixels.at(wb);
            if (Mb) {
              bb.sheetPixels[wb] = null;
              const eb = gb > 0 ? Mb.byteLength / (4 * gb) : 0;
              return {
                width: gb,
                height: eb,
                pixels: new Uint8Array(Mb.buffer, Mb.byteOffset, Mb.byteLength)
              }
            }
            const Hb = bb.terrain.atlasSheets.at(wb);
            if (void 0 === Hb) throw new Error(`the pack has no atlas sheet ${wb}`);
            const pb = Eb(Hb, eb);
            if (null === pb) throw new Error(`the pack's atlas sheet ${wb} isn't a pack file`);
            return (0, lb.i)(pb)
          })(Mb)
        }
      }
    }
    const Bb = new WeakMap;

    function sb(bb, wb) {
      if (null === bb) return null;
      let Mb = Bb.get(bb);
      void 0 === Mb && (Mb = {}, Bb.set(bb, Mb));
      const eb = Mb[wb];
      if (void 0 !== eb) return eb;
      const {
        armourAtlasUrl: Hb,
        texture: pb,
        model: Vb
      } = bb, gb = {
        armourAtlasUrl: () => Eb(Hb, wb),
        textureUrl: bb => Eb(pb(bb), wb),
        modelUrl: bb => Eb(Vb(bb), wb)
      };
      return Mb[wb] = gb, gb
    }
    class mb {
      constructor(bb) {
        this.host = bb, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (bb, wb, eb) => {
          const {
            backend: Hb
          } = this.host, pb = Ob(Hb);
          if ("webgl1" !== Hb) return pb;
          const [Vb, gb] = await Promise.all([Mb.e(235).then((() => Mb(35425))), null !== (bb = null === (wb = (eb = this.host).maxTextureSize) || void 0 === wb ? void 0 : wb.call(eb)) && void 0 !== bb ? bb : null]);
          return tb(pb, Vb.imagesPerAtlas.length * Math.max(0, ...Vb.imagesPerAtlas), gb)
        })().catch((bb => {
          throw this.maxWidth = null, bb
        })), this.maxWidth
      }
      files() {
        return sb(this.assets, this.owner)
      }
      start() {
        let bb = null;
        const wb = this.host.feed.subscribe((wb => {
          const Mb = ++this.latest,
            eb = null !== wb.gameSource ? "game" : null !== bb && null !== bb.gameSource ? "join" : "page";
          bb = wb, this.host.settling(), this.assetsFor(wb).then((bb => this.apply(Mb, bb, wb, eb).catch((bb => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", bb)
          }))), (bb => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", bb), this.settled(Mb, wb, null, {
              error: bb,
              source: eb
            })
          }))
        }));
        return () => {
          wb(), this.latest++, this.ended = !0
        }
      }
      async apply(bb, wb, Mb, eb) {
        const {
          host: Hb
        } = this;
        if (bb !== this.latest || Hb.stopped()) return;
        const pb = (0, gb.l)(Mb);
        if (this.texturesIn(wb, pb) && 0 === this.swapping) return void this.settled(bb, Mb, sb(wb, pb));
        let Vb;
        this.swapping++;
        let Lb = null;
        try {
          Vb = await Hb.terrain.swap((bb => {
            var wb;
            Hb.warn(`texture pack texture ${null!==(wb=bb.name)&&void 0!==wb?wb:"(all)"} failed`, bb.error), null !== bb.name && null === (0, lb.f)(bb.name) || (Lb = bb.error)
          }), (async () => Hb.sourcesOf ? Hb.sourcesOf(wb) : null === wb ? (0, lb.g)() : Fb(wb, await this.maxLayerWidth(), pb)), {
            wholeAtlas: null !== wb,
            wanted: () => bb === this.latest
          })
        } catch (Ib) {
          return Hb.warn("the texture pack's swap failed: the textures in stay", Ib), void this.settled(bb, Mb, null, {
            error: Ib,
            source: eb
          })
        } finally {
          this.swapping--
        }
        if (!0 !== Vb || this.ended) this.settled(bb, Mb, null, {
          error: Lb,
          source: eb
        });
        else {
          Hb.landed(), this.assets = wb, this.owner = pb;
          try {
            Hb.packSwapped()
          } finally {
            this.settled(bb, Mb, this.files())
          }
        }
      }
      async assetsFor(bb) {
        var wb;
        return (null !== (wb = this.host.assetsOf) && void 0 !== wb ? wb : Lb.i)(bb, await this.maxLayerWidth())
      }
      texturesIn(bb, wb) {
        return bb === this.assets && (null === bb || wb === this.owner)
      }
      settled(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        bb !== this.latest || this.ended || this.host.stopped() || this.host.settled(wb, Mb, eb)
      }
    }
  },
  54912: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      followPagePackFiles: () => pb
    });
    var eb = Mb(54889),
      Hb = Mb(54903);

    function pb(bb, wb, Mb, pb, Vb) {
      let gb, lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => (0, Hb.i)(bb, (0, eb.deviceMaxLayerWidth)(Mb)),
        Lb = 0,
        Ib = null;
      const Ob = () => {
          if (null === Ib || null !== Ib.gameSource && !wb.showsPage()) return;
          const Mb = null === Ib.gameSource ? Ib : bb.playerState();
          if (Mb.pack === gb) return;
          gb = Mb.pack;
          const Hb = ++Lb;
          lb(Mb).then((bb => {
            Hb === Lb && pb((0, eb.packFilesOf)(bb, "player"))
          }), (bb => {
            Hb === Lb && (gb = void 0), Vb("the texture pack's files couldn't be had for the previews: the files in stay", bb)
          }))
        },
        Ub = bb.subscribe((bb => {
          Ib = bb, Ob()
        })),
        tb = bb.onPlayerPackChange(Ob),
        Cb = wb.onPageShown(Ob);
      return () => {
        Ub(), tb(), Cb(), Lb++
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);