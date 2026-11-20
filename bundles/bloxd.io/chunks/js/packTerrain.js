export const id = 45;
export const ids = [45];
export const modules = {
  42427: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      MAX_LAYER_WIDTH: () => eb,
      PackTextures: () => Zb,
      deviceMaxLayerWidth: () => vb,
      layerWidthFor: () => Xb,
      packFileUrl: () => jb,
      packFilesOf: () => yb,
      packTerrainSources: () => Rb,
      webgl1GridColumns: () => Lb,
      webgl1LayerWidth: () => Pb
    });
    var Ab = Ub(2829),
      Mb = Ub(39907),
      Tb = Ub(40103),
      Eb = Ub(42434),
      Yb = Ub(40092),
      Bb = Ub(42438);
    const eb = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function vb(bb) {
      return (0, Ab.d)() ? Math.min(eb[bb], 64) : eb[bb]
    }

    function Lb(bb) {
      const ab = Math.ceil(Math.log2(Math.max(1, bb)));
      return 2 ** Math.ceil(ab / 2)
    }

    function Pb(bb, ab, Ub) {
      const Ab = null !== Ub && Ub > 0 ? Ub : Mb.c.limits.MAX_TEXTURE_SIZE;
      return Xb(Math.max(1, Math.floor(Ab / Lb(ab))), bb)
    }

    function Xb(bb, ab) {
      let Ub = 1;
      for (; 2 * Ub <= Math.min(bb, ab);) Ub *= 2;
      return Ub
    }

    function jb(bb, ab) {
      return "string" !== typeof bb || "" === bb ? null : "player" === ab || (0, Eb.d)(bb) ? bb : null
    }
    async function Rb(bb, ab, Ab) {
      const Mb = await Ub.e(201).then((() => Ub(33702))),
        {
          sheetLayout: Eb,
          sheetWidth: Bb
        } = bb;
      if (Bb > ab) throw new Error(`the pack's atlas is ${Bb} px wide, not within ${ab} px`);
      if (!(Eb.length === Mb.imagesPerAtlas.length && Eb.every(((bb, ab) => bb === Mb.imagesPerAtlas[ab])))) {
        const bb = `the pack's atlas is sheets of ${Eb.join(", ")} layers, the built atlas's ${Mb.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Eb.length < Mb.imagesPerAtlas.length) throw new Error(bb);
        console.warn(bb)
      }
      return {
        atlasSheets: [],
        heldUntil: bb.heldUntil,
        texture: ab => {
          var Ub, Eb, Yb;
          return null !== (Ub = null !== (Eb = null !== (Yb = jb(bb.terrain.texture(ab), Ab)) && void 0 !== Yb ? Yb : Mb.animatedBlockTextures[ab]) && void 0 !== Eb ? Eb : Mb.rotatedBlockTextures[ab]) && void 0 !== Ub ? Ub : function(bb, ab, Ub) {
            var Ab, Mb;
            const Eb = null !== (Ab = Tb.b[bb]) && void 0 !== Ab ? Ab : null;
            return null === Eb ? null : null !== (Mb = jb(ab.texture(bb), Ub)) && void 0 !== Mb ? Mb : Eb
          }(ab, bb, Ab)
        },
        decoded: ab => {
          const Ub = (0, Yb.h)(ab);
          return null === Ub ? null : (async ab => {
            const Ub = bb.sheetPixels.at(ab);
            if (Ub) {
              bb.sheetPixels[ab] = null;
              const Ab = Bb > 0 ? Ub.byteLength / (4 * Bb) : 0;
              return {
                width: Bb,
                height: Ab,
                pixels: new Uint8Array(Ub.buffer, Ub.byteOffset, Ub.byteLength)
              }
            }
            const Mb = bb.terrain.atlasSheets.at(ab);
            if (void 0 === Mb) throw new Error(`the pack has no atlas sheet ${ab}`);
            const Tb = jb(Mb, Ab);
            if (null === Tb) throw new Error(`the pack's atlas sheet ${ab} isn't a pack file`);
            return (0, Yb.m)(Tb)
          })(Ub)
        }
      }
    }
    const kb = new WeakMap;

    function yb(bb, ab) {
      if (null === bb) return null;
      let Ub = kb.get(bb);
      void 0 === Ub && (Ub = {}, kb.set(bb, Ub));
      const Ab = Ub[ab];
      if (void 0 !== Ab) return Ab;
      const {
        armourAtlasUrl: Mb,
        texture: Tb,
        model: Eb
      } = bb, Yb = {
        armourAtlasUrl: () => jb(Mb, ab),
        textureUrl: bb => jb(Tb(bb), ab),
        modelUrl: bb => jb(Eb(bb), ab)
      };
      return Ub[ab] = Yb, Yb
    }
    class Zb {
      constructor(bb) {
        this.host = bb, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (bb, ab, Ab) => {
          const {
            backend: Mb
          } = this.host, Tb = vb(Mb);
          if ("webgl1" !== Mb) return Tb;
          const [Eb, Yb] = await Promise.all([Ub.e(201).then((() => Ub(33702))), null !== (bb = null === (ab = (Ab = this.host).maxTextureSize) || void 0 === ab ? void 0 : ab.call(Ab)) && void 0 !== bb ? bb : null]);
          return Pb(Tb, Eb.imagesPerAtlas.length * Math.max(0, ...Eb.imagesPerAtlas), Yb)
        })().catch((bb => {
          throw this.maxWidth = null, bb
        })), this.maxWidth
      }
      files() {
        return yb(this.assets, this.owner)
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
          const ab = ++this.latest;
          this.host.settling(), this.assetsFor(bb).then((Ub => this.apply(ab, Ub, bb).catch((bb => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", bb)
          }))), (Ub => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", Ub), this.settled(ab, bb, null, !0)
          }))
        }));
        return () => {
          bb(), this.latest++, this.ended = !0
        }
      }
      async apply(bb, ab, Ub) {
        const {
          host: Ab
        } = this;
        if (bb !== this.latest || Ab.stopped()) return;
        const Mb = (0, Eb.k)(Ub);
        if (this.texturesIn(ab, Mb) && 0 === this.swapping) return void this.settled(bb, Ub, yb(ab, Mb));
        let Tb;
        this.swapping++;
        try {
          Tb = await Ab.terrain.swap((bb => {
            var ab;
            Ab.warn(`texture pack texture ${null!==(ab=bb.name)&&void 0!==ab?ab:"(all)"} failed`, bb.error)
          }), (async () => Ab.sourcesOf ? Ab.sourcesOf(ab) : null === ab ? (0, Yb.j)() : Rb(ab, await this.maxLayerWidth(), Mb)), {
            wholeAtlas: null !== ab,
            wanted: () => bb === this.latest
          })
        } catch (Bb) {
          return Ab.warn("the texture pack's swap failed: the textures in stay", Bb), void this.settled(bb, Ub, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== Tb || this.ended) this.settled(bb, Ub, null, !0);
        else {
          Ab.landed(), this.assets = ab, this.owner = Mb;
          try {
            Ab.packSwapped()
          } finally {
            this.settled(bb, Ub, this.files())
          }
        }
      }
      async assetsFor(bb) {
        var ab;
        return (null !== (ab = this.host.assetsOf) && void 0 !== ab ? ab : Bb.g)(bb, await this.maxLayerWidth())
      }
      texturesIn(bb, ab) {
        return bb === this.assets && (null === bb || ab === this.owner)
      }
      settled(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        bb !== this.latest || this.ended || this.host.stopped() || this.host.settled(ab, Ub, Ab)
      }
    }
  },
  42446: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      followPagePackFiles: () => Tb
    });
    var Ab = Ub(42427),
      Mb = Ub(42438);

    function Tb(bb, ab, Ub, Tb, Eb) {
      let Yb, Bb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => (0, Mb.g)(bb, (0, Ab.deviceMaxLayerWidth)(Ub)),
        eb = 0,
        vb = null;
      const Lb = () => {
          if (null === vb || null !== vb.gameSource && !ab.showsPage()) return;
          const Ub = null === vb.gameSource ? vb : bb.playerState();
          if (Ub.pack === Yb) return;
          Yb = Ub.pack;
          const Mb = ++eb;
          Bb(Ub).then((bb => {
            Mb === eb && Tb((0, Ab.packFilesOf)(bb, "player"))
          }), (bb => {
            Mb === eb && (Yb = void 0), Eb("the texture pack's files couldn't be had for the previews: the files in stay", bb)
          }))
        },
        Pb = bb.subscribe((bb => {
          vb = bb, Lb()
        })),
        Xb = bb.onPlayerPackChange(Lb),
        jb = ab.onPageShown(Lb);
      return () => {
        Pb(), Xb(), jb(), eb++
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);