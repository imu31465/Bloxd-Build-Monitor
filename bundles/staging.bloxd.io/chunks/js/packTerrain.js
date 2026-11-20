export const id = 45;
export const ids = [45];
export const modules = {
  42723: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      MAX_LAYER_WIDTH: () => Sb,
      PackTextures: () => lb,
      deviceMaxLayerWidth: () => ab,
      layerWidthFor: () => Zb,
      packFileUrl: () => Xb,
      packFilesOf: () => Ab,
      packTerrainSources: () => pb,
      webgl1GridColumns: () => Hb,
      webgl1LayerWidth: () => wb
    });
    var Bb = hb(2911),
      Ob = hb(40221),
      Gb = hb(40421),
      Ub = hb(42730),
      Lb = hb(40413),
      Yb = hb(42735);
    const Sb = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function ab(bb) {
      return (0, Bb.c)() ? Math.min(Sb[bb], 64) : Sb[bb]
    }

    function Hb(bb) {
      const ub = Math.ceil(Math.log2(Math.max(1, bb)));
      return 2 ** Math.ceil(ub / 2)
    }

    function wb(bb, ub, hb) {
      const Bb = null !== hb && hb > 0 ? hb : Ob.d.limits.MAX_TEXTURE_SIZE;
      return Zb(Math.max(1, Math.floor(Bb / Hb(ub))), bb)
    }

    function Zb(bb, ub) {
      let hb = 1;
      for (; 2 * hb <= Math.min(bb, ub);) hb *= 2;
      return hb
    }

    function Xb(bb, ub) {
      return "string" !== typeof bb || "" === bb ? null : "player" === ub || (0, Ub.d)(bb) ? bb : null
    }
    async function pb(bb, ub, Bb) {
      const Ob = await hb.e(202).then((() => hb(33950))),
        {
          sheetLayout: Ub,
          sheetWidth: Yb
        } = bb;
      if (Yb > ub) throw new Error(`the pack's atlas is ${Yb} px wide, not within ${ub} px`);
      if (!(Ub.length === Ob.imagesPerAtlas.length && Ub.every(((bb, ub) => bb === Ob.imagesPerAtlas[ub])))) {
        const bb = `the pack's atlas is sheets of ${Ub.join(", ")} layers, the built atlas's ${Ob.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Ub.length < Ob.imagesPerAtlas.length) throw new Error(bb);
        console.warn(bb)
      }
      return {
        atlasSheets: [],
        heldUntil: bb.heldUntil,
        texture: ub => {
          var hb, Ub, Lb;
          return null !== (hb = null !== (Ub = null !== (Lb = Xb(bb.terrain.texture(ub), Bb)) && void 0 !== Lb ? Lb : Ob.animatedBlockTextures[ub]) && void 0 !== Ub ? Ub : Ob.rotatedBlockTextures[ub]) && void 0 !== hb ? hb : function(bb, ub, hb) {
            var Bb, Ob;
            const Ub = null !== (Bb = Gb.c[bb]) && void 0 !== Bb ? Bb : null;
            return null === Ub ? null : null !== (Ob = Xb(ub.texture(bb), hb)) && void 0 !== Ob ? Ob : Ub
          }(ub, bb, Bb)
        },
        decoded: ub => {
          const hb = (0, Lb.j)(ub);
          return null === hb ? null : (async ub => {
            const hb = bb.sheetPixels.at(ub);
            if (hb) {
              bb.sheetPixels[ub] = null;
              const Bb = Yb > 0 ? hb.byteLength / (4 * Yb) : 0;
              return {
                width: Yb,
                height: Bb,
                pixels: new Uint8Array(hb.buffer, hb.byteOffset, hb.byteLength)
              }
            }
            const Ob = bb.terrain.atlasSheets.at(ub);
            if (void 0 === Ob) throw new Error(`the pack has no atlas sheet ${ub}`);
            const Gb = Xb(Ob, Bb);
            if (null === Gb) throw new Error(`the pack's atlas sheet ${ub} isn't a pack file`);
            return (0, Lb.m)(Gb)
          })(hb)
        }
      }
    }
    const ob = new WeakMap;

    function Ab(bb, ub) {
      if (null === bb) return null;
      let hb = ob.get(bb);
      void 0 === hb && (hb = {}, ob.set(bb, hb));
      const Bb = hb[ub];
      if (void 0 !== Bb) return Bb;
      const {
        armourAtlasUrl: Ob,
        texture: Gb,
        model: Ub
      } = bb, Lb = {
        armourAtlasUrl: () => Xb(Ob, ub),
        textureUrl: bb => Xb(Gb(bb), ub),
        modelUrl: bb => Xb(Ub(bb), ub)
      };
      return hb[ub] = Lb, Lb
    }
    class lb {
      constructor(bb) {
        this.host = bb, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (bb, ub, Bb) => {
          const {
            backend: Ob
          } = this.host, Gb = ab(Ob);
          if ("webgl1" !== Ob) return Gb;
          const [Ub, Lb] = await Promise.all([hb.e(202).then((() => hb(33950))), null !== (bb = null === (ub = (Bb = this.host).maxTextureSize) || void 0 === ub ? void 0 : ub.call(Bb)) && void 0 !== bb ? bb : null]);
          return wb(Gb, Ub.imagesPerAtlas.length * Math.max(0, ...Ub.imagesPerAtlas), Lb)
        })().catch((bb => {
          throw this.maxWidth = null, bb
        })), this.maxWidth
      }
      files() {
        return Ab(this.assets, this.owner)
      }
      start() {
        const bb = this.host.feed.subscribe((bb => {
          const ub = ++this.latest;
          this.host.settling(), this.assetsFor(bb).then((hb => this.apply(ub, hb, bb).catch((bb => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", bb)
          }))), (hb => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", hb), this.settled(ub, bb, null, !0)
          }))
        }));
        return () => {
          bb(), this.latest++, this.ended = !0
        }
      }
      async apply(bb, ub, hb) {
        const {
          host: Bb
        } = this;
        if (bb !== this.latest || Bb.stopped()) return;
        const Ob = (0, Ub.j)(hb);
        if (this.texturesIn(ub, Ob) && 0 === this.swapping) return void this.settled(bb, hb, Ab(ub, Ob));
        let Gb;
        this.swapping++;
        try {
          Gb = await Bb.terrain.swap((bb => {
            var ub;
            Bb.warn(`texture pack texture ${null!==(ub=bb.name)&&void 0!==ub?ub:"(all)"} failed`, bb.error)
          }), (async () => Bb.sourcesOf ? Bb.sourcesOf(ub) : null === ub ? (0, Lb.l)() : pb(ub, await this.maxLayerWidth(), Ob)), {
            wholeAtlas: null !== ub,
            wanted: () => bb === this.latest
          })
        } catch (Yb) {
          return Bb.warn("the texture pack's swap failed: the textures in stay", Yb), void this.settled(bb, hb, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== Gb || this.ended) this.settled(bb, hb, null, !0);
        else {
          Bb.landed(), this.assets = ub, this.owner = Ob;
          try {
            Bb.packSwapped()
          } finally {
            this.settled(bb, hb, this.files())
          }
        }
      }
      async assetsFor(bb) {
        var ub;
        return (null !== (ub = this.host.assetsOf) && void 0 !== ub ? ub : Yb.j)(bb, await this.maxLayerWidth())
      }
      texturesIn(bb, ub) {
        return bb === this.assets && (null === bb || ub === this.owner)
      }
      settled(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        bb !== this.latest || this.ended || this.host.stopped() || this.host.settled(ub, hb, Bb)
      }
    }
  },
  42743: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      followPagePackFiles: () => Gb
    });
    var Bb = hb(42723),
      Ob = hb(42735);

    function Gb(bb, ub, hb, Gb, Ub) {
      let Lb, Yb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => (0, Ob.j)(bb, (0, Bb.deviceMaxLayerWidth)(hb)),
        Sb = 0,
        ab = null;
      const Hb = () => {
          if (null === ab || null !== ab.gameSource && !ub.showsPage()) return;
          const hb = null === ab.gameSource ? ab : bb.playerState();
          if (hb.pack === Lb) return;
          Lb = hb.pack;
          const Ob = ++Sb;
          Yb(hb).then((bb => {
            Ob === Sb && Gb((0, Bb.packFilesOf)(bb, "player"))
          }), (bb => {
            Ob === Sb && (Lb = void 0), Ub("the texture pack's files couldn't be had for the previews: the files in stay", bb)
          }))
        },
        wb = bb.subscribe((bb => {
          ab = bb, Hb()
        })),
        Zb = bb.onPlayerPackChange(Hb),
        Xb = ub.onPageShown(Hb);
      return () => {
        wb(), Zb(), Xb(), Sb++
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);