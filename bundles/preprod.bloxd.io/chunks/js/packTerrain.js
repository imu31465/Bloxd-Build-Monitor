export const id = 42;
export const ids = [42];
export const modules = {
  41837: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      MAX_LAYER_WIDTH: () => oy,
      PackTextures: () => mb,
      deviceMaxLayerWidth: () => By,
      layerWidthFor: () => qb,
      packFileUrl: () => sy,
      packFilesOf: () => ly,
      packTerrainSources: () => Sy,
      webgl1GridColumns: () => Ky,
      webgl1LayerWidth: () => ey
    });
    var Uy = Wy(2435),
      hy = Wy(39297),
      fy = Wy(39498),
      Zy = Wy(41841),
      cb = Wy(39481),
      Py = Wy(41849);
    const oy = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function By(yb) {
      return (0, Uy.e)() ? Math.min(oy[yb], 64) : oy[yb]
    }

    function Ky(yb) {
      const bb = Math.ceil(Math.log2(Math.max(1, yb)));
      return 2 ** Math.ceil(bb / 2)
    }

    function ey(yb, bb, Wy) {
      const Uy = null !== Wy && Wy > 0 ? Wy : hy.b.limits.MAX_TEXTURE_SIZE;
      return qb(Math.max(1, Math.floor(Uy / Ky(bb))), yb)
    }

    function qb(yb, bb) {
      let Wy = 1;
      for (; 2 * Wy <= Math.min(yb, bb);) Wy *= 2;
      return Wy
    }

    function sy(yb, bb) {
      return "string" !== typeof yb || "" === yb ? null : "player" === bb || (0, Zy.e)(yb) ? yb : null
    }
    async function Sy(yb, bb, Uy) {
      const hy = await Wy.e(186).then((() => Wy(33215))),
        {
          sheetLayout: Zy,
          sheetWidth: Py
        } = yb;
      if (Py > bb) throw new Error(`the pack's atlas is ${Py} px wide, not within ${bb} px`);
      if (!(Zy.length === hy.imagesPerAtlas.length && Zy.every(((yb, bb) => yb === hy.imagesPerAtlas[bb])))) {
        const yb = `the pack's atlas is sheets of ${Zy.join(", ")} layers, the built atlas's ${hy.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Zy.length < hy.imagesPerAtlas.length) throw new Error(yb);
        console.warn(yb)
      }
      return {
        atlasSheets: [],
        heldUntil: yb.heldUntil,
        texture: bb => {
          var Wy, Zy, cb;
          return null !== (Wy = null !== (Zy = null !== (cb = sy(yb.terrain.texture(bb), Uy)) && void 0 !== cb ? cb : hy.animatedBlockTextures[bb]) && void 0 !== Zy ? Zy : hy.rotatedBlockTextures[bb]) && void 0 !== Wy ? Wy : function(yb, bb, Wy) {
            var Uy, hy;
            const Zy = null !== (Uy = fy.c[yb]) && void 0 !== Uy ? Uy : null;
            return null === Zy ? null : null !== (hy = sy(bb.texture(yb), Wy)) && void 0 !== hy ? hy : Zy
          }(bb, yb, Uy)
        },
        decoded: bb => {
          const Wy = (0, cb.k)(bb);
          return null === Wy ? null : (async bb => {
            const Wy = yb.sheetPixels.at(bb);
            if (Wy) {
              yb.sheetPixels[bb] = null;
              const Uy = Py > 0 ? Wy.byteLength / (4 * Py) : 0;
              return {
                width: Py,
                height: Uy,
                pixels: new Uint8Array(Wy.buffer, Wy.byteOffset, Wy.byteLength)
              }
            }
            const hy = yb.terrain.atlasSheets.at(bb);
            if (void 0 === hy) throw new Error(`the pack has no atlas sheet ${bb}`);
            const fy = sy(hy, Uy);
            if (null === fy) throw new Error(`the pack's atlas sheet ${bb} isn't a pack file`);
            return (0, cb.r)(fy)
          })(Wy)
        }
      }
    }
    const Ey = new WeakMap;

    function ly(yb, bb) {
      if (null === yb) return null;
      let Wy = Ey.get(yb);
      void 0 === Wy && (Wy = {}, Ey.set(yb, Wy));
      const Uy = Wy[bb];
      if (void 0 !== Uy) return Uy;
      const {
        armourAtlasUrl: hy,
        texture: fy,
        model: Zy
      } = yb, cb = {
        armourAtlasUrl: () => sy(hy, bb),
        textureUrl: yb => sy(fy(yb), bb),
        modelUrl: yb => sy(Zy(yb), bb)
      };
      return Wy[bb] = cb, cb
    }
    class mb {
      constructor(yb) {
        this.host = yb, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (yb, bb, Uy) => {
          const {
            backend: hy
          } = this.host, fy = By(hy);
          if ("webgl1" !== hy) return fy;
          const [Zy, cb] = await Promise.all([Wy.e(186).then((() => Wy(33215))), null !== (yb = null === (bb = (Uy = this.host).maxTextureSize) || void 0 === bb ? void 0 : bb.call(Uy)) && void 0 !== yb ? yb : null]);
          return ey(fy, Zy.imagesPerAtlas.length * Math.max(0, ...Zy.imagesPerAtlas), cb)
        })().catch((yb => {
          throw this.maxWidth = null, yb
        })), this.maxWidth
      }
      files() {
        return ly(this.assets, this.owner)
      }
      iconOverrides() {
        const yb = this.files();
        return null === yb ? null : {
          itemSprite: yb.textureUrl,
          blockTexture: yb.textureUrl,
          model: yb.modelUrl
        }
      }
      start() {
        const yb = this.host.feed.subscribe((yb => {
          const bb = ++this.latest;
          this.host.settling(), this.assetsFor(yb).then((Wy => this.apply(bb, Wy, yb).catch((yb => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", yb)
          }))), (Wy => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", Wy), this.settled(bb, yb, null, !0)
          }))
        }));
        return () => {
          yb(), this.latest++, this.ended = !0
        }
      }
      async apply(yb, bb, Wy) {
        const {
          host: Uy
        } = this;
        if (yb !== this.latest || Uy.stopped()) return;
        const hy = (0, Zy.m)(Wy);
        if (this.texturesIn(bb, hy) && 0 === this.swapping) return void this.settled(yb, Wy, ly(bb, hy));
        let fy;
        this.swapping++;
        try {
          fy = await Uy.terrain.swap((yb => {
            var bb;
            Uy.warn(`texture pack texture ${null!==(bb=yb.name)&&void 0!==bb?bb:"(all)"} failed`, yb.error)
          }), (async () => Uy.sourcesOf ? Uy.sourcesOf(bb) : null === bb ? (0, cb.n)() : Sy(bb, await this.maxLayerWidth(), hy)), {
            wholeAtlas: null !== bb,
            wanted: () => yb === this.latest
          })
        } catch (Py) {
          return Uy.warn("the texture pack's swap failed: the textures in stay", Py), void this.settled(yb, Wy, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== fy || this.ended) this.settled(yb, Wy, null, !0);
        else {
          Uy.landed(), this.assets = bb, this.owner = hy;
          try {
            Uy.packSwapped()
          } finally {
            this.settled(yb, Wy, this.files())
          }
        }
      }
      async assetsFor(yb) {
        var bb;
        return (null !== (bb = this.host.assetsOf) && void 0 !== bb ? bb : Py.i)(yb, await this.maxLayerWidth())
      }
      texturesIn(yb, bb) {
        return yb === this.assets && (null === yb || bb === this.owner)
      }
      settled(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        yb !== this.latest || this.ended || this.host.stopped() || this.host.settled(bb, Wy, Uy)
      }
    }
  },
  41858: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      followPagePackFiles: () => fy
    });
    var Uy = Wy(41837),
      hy = Wy(41849);

    function fy(yb, bb, Wy, fy, Zy) {
      let cb, Py = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yb => (0, hy.i)(yb, (0, Uy.deviceMaxLayerWidth)(Wy)),
        oy = 0,
        By = null;
      const Ky = () => {
          if (null === By || null !== By.gameSource && !bb.showsPage()) return;
          const Wy = null === By.gameSource ? By : yb.playerState();
          if (Wy.pack === cb) return;
          cb = Wy.pack;
          const hy = ++oy;
          Py(Wy).then((yb => {
            hy === oy && fy((0, Uy.packFilesOf)(yb, "player"))
          }), (yb => {
            hy === oy && (cb = void 0), Zy("the texture pack's files couldn't be had for the previews: the files in stay", yb)
          }))
        },
        ey = yb.subscribe((yb => {
          By = yb, Ky()
        })),
        qb = yb.onPlayerPackChange(Ky),
        sy = bb.onPageShown(Ky);
      return () => {
        ey(), qb(), sy(), oy++
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);