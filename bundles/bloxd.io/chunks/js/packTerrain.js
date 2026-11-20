export const id = 45;
export const ids = [45];
export const modules = {
  42676: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      MAX_LAYER_WIDTH: () => Hb,
      PackTextures: () => Cb,
      deviceMaxLayerWidth: () => fb,
      layerWidthFor: () => nb,
      packFileUrl: () => mb,
      packFilesOf: () => eb,
      packTerrainSources: () => lb,
      webgl1GridColumns: () => Mb,
      webgl1LayerWidth: () => Xb
    });
    var kb = sb(2867),
      Wb = sb(40212),
      ab = sb(40415),
      Tb = sb(42678),
      Ub = sb(40406),
      Ib = sb(42683);
    const Hb = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function fb(bb) {
      return (0, kb.e)() ? Math.min(Hb[bb], 64) : Hb[bb]
    }

    function Mb(bb) {
      const cb = Math.ceil(Math.log2(Math.max(1, bb)));
      return 2 ** Math.ceil(cb / 2)
    }

    function Xb(bb, cb, sb) {
      const kb = null !== sb && sb > 0 ? sb : Wb.d.limits.MAX_TEXTURE_SIZE;
      return nb(Math.max(1, Math.floor(kb / Mb(cb))), bb)
    }

    function nb(bb, cb) {
      let sb = 1;
      for (; 2 * sb <= Math.min(bb, cb);) sb *= 2;
      return sb
    }

    function mb(bb, cb) {
      return "string" !== typeof bb || "" === bb ? null : "player" === cb || (0, Tb.b)(bb) ? bb : null
    }
    async function lb(bb, cb, kb) {
      const Wb = await sb.e(201).then((() => sb(33944))),
        {
          sheetLayout: Tb,
          sheetWidth: Ib
        } = bb;
      if (Ib > cb) throw new Error(`the pack's atlas is ${Ib} px wide, not within ${cb} px`);
      if (!(Tb.length === Wb.imagesPerAtlas.length && Tb.every(((bb, cb) => bb === Wb.imagesPerAtlas[cb])))) {
        const bb = `the pack's atlas is sheets of ${Tb.join(", ")} layers, the built atlas's ${Wb.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Tb.length < Wb.imagesPerAtlas.length) throw new Error(bb);
        console.warn(bb)
      }
      return {
        atlasSheets: [],
        heldUntil: bb.heldUntil,
        texture: cb => {
          var sb, Tb, Ub;
          return null !== (sb = null !== (Tb = null !== (Ub = mb(bb.terrain.texture(cb), kb)) && void 0 !== Ub ? Ub : Wb.animatedBlockTextures[cb]) && void 0 !== Tb ? Tb : Wb.rotatedBlockTextures[cb]) && void 0 !== sb ? sb : function(bb, cb, sb) {
            var kb, Wb;
            const Tb = null !== (kb = ab.d[bb]) && void 0 !== kb ? kb : null;
            return null === Tb ? null : null !== (Wb = mb(cb.texture(bb), sb)) && void 0 !== Wb ? Wb : Tb
          }(cb, bb, kb)
        },
        decoded: cb => {
          const sb = (0, Ub.e)(cb);
          return null === sb ? null : (async cb => {
            const sb = bb.sheetPixels.at(cb);
            if (sb) {
              bb.sheetPixels[cb] = null;
              const kb = Ib > 0 ? sb.byteLength / (4 * Ib) : 0;
              return {
                width: Ib,
                height: kb,
                pixels: new Uint8Array(sb.buffer, sb.byteOffset, sb.byteLength)
              }
            }
            const Wb = bb.terrain.atlasSheets.at(cb);
            if (void 0 === Wb) throw new Error(`the pack has no atlas sheet ${cb}`);
            const ab = mb(Wb, kb);
            if (null === ab) throw new Error(`the pack's atlas sheet ${cb} isn't a pack file`);
            return (0, Ub.j)(ab)
          })(sb)
        }
      }
    }
    const Qb = new WeakMap;

    function eb(bb, cb) {
      if (null === bb) return null;
      let sb = Qb.get(bb);
      void 0 === sb && (sb = {}, Qb.set(bb, sb));
      const kb = sb[cb];
      if (void 0 !== kb) return kb;
      const {
        armourAtlasUrl: Wb,
        texture: ab,
        model: Tb
      } = bb, Ub = {
        armourAtlasUrl: () => mb(Wb, cb),
        textureUrl: bb => mb(ab(bb), cb),
        modelUrl: bb => mb(Tb(bb), cb)
      };
      return sb[cb] = Ub, Ub
    }
    class Cb {
      constructor(bb) {
        this.host = bb, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (bb, cb, kb) => {
          const {
            backend: Wb
          } = this.host, ab = fb(Wb);
          if ("webgl1" !== Wb) return ab;
          const [Tb, Ub] = await Promise.all([sb.e(201).then((() => sb(33944))), null !== (bb = null === (cb = (kb = this.host).maxTextureSize) || void 0 === cb ? void 0 : cb.call(kb)) && void 0 !== bb ? bb : null]);
          return Xb(ab, Tb.imagesPerAtlas.length * Math.max(0, ...Tb.imagesPerAtlas), Ub)
        })().catch((bb => {
          throw this.maxWidth = null, bb
        })), this.maxWidth
      }
      files() {
        return eb(this.assets, this.owner)
      }
      iconOverrides() {
        const bb = this.files();
        return null === bb ? null : {
          itemSprite: bb.textureUrl,
          blockTexture: bb.textureUrl,
          model: bb.modelUrl
        }
      }
      start() {
        const bb = this.host.feed.subscribe((bb => {
          const cb = ++this.latest;
          this.host.settling(), this.assetsFor(bb).then((sb => this.apply(cb, sb, bb).catch((bb => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", bb)
          }))), (sb => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", sb), this.settled(cb, bb, null, !0)
          }))
        }));
        return () => {
          bb(), this.latest++, this.ended = !0
        }
      }
      async apply(bb, cb, sb) {
        const {
          host: kb
        } = this;
        if (bb !== this.latest || kb.stopped()) return;
        const Wb = (0, Tb.f)(sb);
        if (this.texturesIn(cb, Wb) && 0 === this.swapping) return void this.settled(bb, sb, eb(cb, Wb));
        let ab;
        this.swapping++;
        try {
          ab = await kb.terrain.swap((bb => {
            var cb;
            kb.warn(`texture pack texture ${null!==(cb=bb.name)&&void 0!==cb?cb:"(all)"} failed`, bb.error)
          }), (async () => kb.sourcesOf ? kb.sourcesOf(cb) : null === cb ? (0, Ub.h)() : lb(cb, await this.maxLayerWidth(), Wb)), {
            wholeAtlas: null !== cb,
            wanted: () => bb === this.latest
          })
        } catch (Ib) {
          return kb.warn("the texture pack's swap failed: the textures in stay", Ib), void this.settled(bb, sb, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== ab || this.ended) this.settled(bb, sb, null, !0);
        else {
          kb.landed(), this.assets = cb, this.owner = Wb;
          try {
            kb.packSwapped()
          } finally {
            this.settled(bb, sb, this.files())
          }
        }
      }
      async assetsFor(bb) {
        var cb;
        return (null !== (cb = this.host.assetsOf) && void 0 !== cb ? cb : Ib.e)(bb, await this.maxLayerWidth())
      }
      texturesIn(bb, cb) {
        return bb === this.assets && (null === bb || cb === this.owner)
      }
      settled(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        bb !== this.latest || this.ended || this.host.stopped() || this.host.settled(cb, sb, kb)
      }
    }
  },
  42692: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      followPagePackFiles: () => ab
    });
    var kb = sb(42676),
      Wb = sb(42683);

    function ab(bb, cb, sb, ab, Tb) {
      let Ub, Ib = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => (0, Wb.e)(bb, (0, kb.deviceMaxLayerWidth)(sb)),
        Hb = 0,
        fb = null;
      const Mb = () => {
          if (null === fb || null !== fb.gameSource && !cb.showsPage()) return;
          const sb = null === fb.gameSource ? fb : bb.playerState();
          if (sb.pack === Ub) return;
          Ub = sb.pack;
          const Wb = ++Hb;
          Ib(sb).then((bb => {
            Wb === Hb && ab((0, kb.packFilesOf)(bb, "player"))
          }), (bb => {
            Wb === Hb && (Ub = void 0), Tb("the texture pack's files couldn't be had for the previews: the files in stay", bb)
          }))
        },
        Xb = bb.subscribe((bb => {
          fb = bb, Mb()
        })),
        nb = bb.onPlayerPackChange(Mb),
        mb = cb.onPageShown(Mb);
      return () => {
        Xb(), nb(), mb(), Hb++
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);