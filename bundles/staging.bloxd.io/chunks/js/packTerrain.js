export const id = 46;
export const ids = [46];
export const modules = {
  51300: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      MAX_LAYER_WIDTH: () => Ht,
      PackTextures: () => Mt,
      deviceMaxLayerWidth: () => Xt,
      layerWidthFor: () => Et,
      packFileUrl: () => ft,
      packFilesOf: () => Nt,
      packTerrainSources: () => wt,
      webgl1GridColumns: () => Qt,
      webgl1LayerWidth: () => lt
    });
    var Ot = Vt(3179),
      qt = Vt(40913),
      Dt = Vt(41014),
      mt = Vt(51303),
      dt = Vt(41003),
      jt = Vt(51307);
    const Ht = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Xt(tt) {
      return (0, Ot.c)() ? Math.min(Ht[tt], 64) : Ht[tt]
    }

    function Qt(tt) {
      const et = Math.ceil(Math.log2(Math.max(1, tt)));
      return 2 ** Math.ceil(et / 2)
    }

    function lt(tt, et, Vt) {
      const Ot = null !== Vt && Vt > 0 ? Vt : qt.e.limits.MAX_TEXTURE_SIZE;
      return Et(Math.max(1, Math.floor(Ot / Qt(et))), tt)
    }

    function Et(tt, et) {
      let Vt = 1;
      for (; 2 * Vt <= Math.min(tt, et);) Vt *= 2;
      return Vt
    }

    function ft(tt, et) {
      return "string" !== typeof tt || "" === tt ? null : "player" === et || (0, mt.b)(tt) ? tt : null
    }
    async function wt(tt, et, Ot) {
      const qt = await Vt.e(207).then((() => Vt(34482))),
        {
          sheetLayout: mt,
          sheetWidth: jt
        } = tt;
      if (jt > et) throw new Error(`the pack's atlas is ${jt} px wide, not within ${et} px`);
      if (!(mt.length === qt.imagesPerAtlas.length && mt.every(((tt, et) => tt === qt.imagesPerAtlas[et])))) {
        const tt = `the pack's atlas is sheets of ${mt.join(", ")} layers, the built atlas's ${qt.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (mt.length < qt.imagesPerAtlas.length) throw new Error(tt);
        console.warn(tt)
      }
      return {
        atlasSheets: [],
        heldUntil: tt.heldUntil,
        texture: et => {
          var Vt, mt, dt;
          return null !== (Vt = null !== (mt = null !== (dt = ft(tt.terrain.texture(et), Ot)) && void 0 !== dt ? dt : qt.animatedBlockTextures[et]) && void 0 !== mt ? mt : qt.rotatedBlockTextures[et]) && void 0 !== Vt ? Vt : function(tt, et, Vt) {
            var Ot, qt;
            const mt = null !== (Ot = Dt.e[tt]) && void 0 !== Ot ? Ot : null;
            return null === mt ? null : null !== (qt = ft(et.texture(tt), Vt)) && void 0 !== qt ? qt : mt
          }(et, tt, Ot)
        },
        decoded: et => {
          const Vt = (0, dt.d)(et);
          return null === Vt ? null : (async et => {
            const Vt = tt.sheetPixels.at(et);
            if (Vt) {
              tt.sheetPixels[et] = null;
              const Ot = jt > 0 ? Vt.byteLength / (4 * jt) : 0;
              return {
                width: jt,
                height: Ot,
                pixels: new Uint8Array(Vt.buffer, Vt.byteOffset, Vt.byteLength)
              }
            }
            const qt = tt.terrain.atlasSheets.at(et);
            if (void 0 === qt) throw new Error(`the pack has no atlas sheet ${et}`);
            const Dt = ft(qt, Ot);
            if (null === Dt) throw new Error(`the pack's atlas sheet ${et} isn't a pack file`);
            return (0, dt.k)(Dt)
          })(Vt)
        }
      }
    }
    const yt = new WeakMap;

    function Nt(tt, et) {
      if (null === tt) return null;
      let Vt = yt.get(tt);
      void 0 === Vt && (Vt = {}, yt.set(tt, Vt));
      const Ot = Vt[et];
      if (void 0 !== Ot) return Ot;
      const {
        armourAtlasUrl: qt,
        texture: Dt,
        model: mt
      } = tt, dt = {
        armourAtlasUrl: () => ft(qt, et),
        textureUrl: tt => ft(Dt(tt), et),
        modelUrl: tt => ft(mt(tt), et)
      };
      return Vt[et] = dt, dt
    }
    class Mt {
      constructor(tt) {
        this.host = tt, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (tt, et, Ot) => {
          const {
            backend: qt
          } = this.host, Dt = Xt(qt);
          if ("webgl1" !== qt) return Dt;
          const [mt, dt] = await Promise.all([Vt.e(207).then((() => Vt(34482))), null !== (tt = null === (et = (Ot = this.host).maxTextureSize) || void 0 === et ? void 0 : et.call(Ot)) && void 0 !== tt ? tt : null]);
          return lt(Dt, mt.imagesPerAtlas.length * Math.max(0, ...mt.imagesPerAtlas), dt)
        })().catch((tt => {
          throw this.maxWidth = null, tt
        })), this.maxWidth
      }
      files() {
        return Nt(this.assets, this.owner)
      }
      start() {
        let tt = null;
        const et = this.host.feed.subscribe((et => {
          const Vt = ++this.latest,
            Ot = null !== et.gameSource ? "game" : null !== tt && null !== tt.gameSource ? "join" : "page";
          tt = et, this.host.settling(), this.assetsFor(et).then((tt => this.apply(Vt, tt, et, Ot).catch((tt => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", tt)
          }))), (tt => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", tt), this.settled(Vt, et, null, {
              error: tt,
              source: Ot
            })
          }))
        }));
        return () => {
          et(), this.latest++, this.ended = !0
        }
      }
      async apply(tt, et, Vt, Ot) {
        const {
          host: qt
        } = this;
        if (tt !== this.latest || qt.stopped()) return;
        const Dt = (0, mt.j)(Vt);
        if (this.texturesIn(et, Dt) && 0 === this.swapping) return void this.settled(tt, Vt, Nt(et, Dt));
        let jt;
        this.swapping++;
        let Ht = null;
        try {
          jt = await qt.terrain.swap((tt => {
            var et;
            qt.warn(`texture pack texture ${null!==(et=tt.name)&&void 0!==et?et:"(all)"} failed`, tt.error), null !== tt.name && null === (0, dt.d)(tt.name) || (Ht = tt.error)
          }), (async () => qt.sourcesOf ? qt.sourcesOf(et) : null === et ? (0, dt.g)() : wt(et, await this.maxLayerWidth(), Dt)), {
            wholeAtlas: null !== et,
            wanted: () => tt === this.latest
          })
        } catch (Xt) {
          return qt.warn("the texture pack's swap failed: the textures in stay", Xt), void this.settled(tt, Vt, null, {
            error: Xt,
            source: Ot
          })
        } finally {
          this.swapping--
        }
        if (!0 !== jt || this.ended) this.settled(tt, Vt, null, {
          error: Ht,
          source: Ot
        });
        else {
          qt.landed(), this.assets = et, this.owner = Dt;
          try {
            qt.packSwapped()
          } finally {
            this.settled(tt, Vt, this.files())
          }
        }
      }
      async assetsFor(tt) {
        var et;
        return (null !== (et = this.host.assetsOf) && void 0 !== et ? et : jt.j)(tt, await this.maxLayerWidth())
      }
      texturesIn(tt, et) {
        return tt === this.assets && (null === tt || et === this.owner)
      }
      settled(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        tt !== this.latest || this.ended || this.host.stopped() || this.host.settled(et, Vt, Ot)
      }
    }
  },
  51310: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      followPagePackFiles: () => Dt
    });
    var Ot = Vt(51300),
      qt = Vt(51307);

    function Dt(tt, et, Vt, Dt, mt) {
      let dt, jt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : tt => (0, qt.j)(tt, (0, Ot.deviceMaxLayerWidth)(Vt)),
        Ht = 0,
        Xt = null;
      const Qt = () => {
          if (null === Xt || null !== Xt.gameSource && !et.showsPage()) return;
          const Vt = null === Xt.gameSource ? Xt : tt.playerState();
          if (Vt.pack === dt) return;
          dt = Vt.pack;
          const qt = ++Ht;
          jt(Vt).then((tt => {
            qt === Ht && Dt((0, Ot.packFilesOf)(tt, "player"))
          }), (tt => {
            qt === Ht && (dt = void 0), mt("the texture pack's files couldn't be had for the previews: the files in stay", tt)
          }))
        },
        lt = tt.subscribe((tt => {
          Xt = tt, Qt()
        })),
        Et = tt.onPlayerPackChange(Qt),
        ft = et.onPageShown(Qt);
      return () => {
        lt(), Et(), ft(), Ht++
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);