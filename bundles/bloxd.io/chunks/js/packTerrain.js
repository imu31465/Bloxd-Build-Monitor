export const id = 45;
export const ids = [45];
export const modules = {
  42778: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      MAX_LAYER_WIDTH: () => dk,
      PackTextures: () => Wk,
      deviceMaxLayerWidth: () => sk,
      layerWidthFor: () => Ak,
      packFileUrl: () => ek,
      packFilesOf: () => mk,
      packTerrainSources: () => yk,
      webgl1GridColumns: () => Vk,
      webgl1LayerWidth: () => Jk
    });
    var Rk = Bk(2906),
      tk = Bk(40197),
      ak = Bk(40421),
      Xk = Bk(42786),
      bk = Bk(40407),
      wk = Bk(42791);
    const dk = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function sk(kk) {
      return (0, Rk.d)() ? Math.min(dk[kk], 64) : dk[kk]
    }

    function Vk(kk) {
      const Fk = Math.ceil(Math.log2(Math.max(1, kk)));
      return 2 ** Math.ceil(Fk / 2)
    }

    function Jk(kk, Fk, Bk) {
      const Rk = null !== Bk && Bk > 0 ? Bk : tk.c.limits.MAX_TEXTURE_SIZE;
      return Ak(Math.max(1, Math.floor(Rk / Vk(Fk))), kk)
    }

    function Ak(kk, Fk) {
      let Bk = 1;
      for (; 2 * Bk <= Math.min(kk, Fk);) Bk *= 2;
      return Bk
    }

    function ek(kk, Fk) {
      return "string" !== typeof kk || "" === kk ? null : "player" === Fk || (0, Xk.b)(kk) ? kk : null
    }
    async function yk(kk, Fk, Rk) {
      const tk = await Bk.e(201).then((() => Bk(34024))),
        {
          sheetLayout: Xk,
          sheetWidth: wk
        } = kk;
      if (wk > Fk) throw new Error(`the pack's atlas is ${wk} px wide, not within ${Fk} px`);
      if (!(Xk.length === tk.imagesPerAtlas.length && Xk.every(((kk, Fk) => kk === tk.imagesPerAtlas[Fk])))) {
        const kk = `the pack's atlas is sheets of ${Xk.join(", ")} layers, the built atlas's ${tk.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Xk.length < tk.imagesPerAtlas.length) throw new Error(kk);
        console.warn(kk)
      }
      return {
        atlasSheets: [],
        heldUntil: kk.heldUntil,
        texture: Fk => {
          var Bk, Xk, bk;
          return null !== (Bk = null !== (Xk = null !== (bk = ek(kk.terrain.texture(Fk), Rk)) && void 0 !== bk ? bk : tk.animatedBlockTextures[Fk]) && void 0 !== Xk ? Xk : tk.rotatedBlockTextures[Fk]) && void 0 !== Bk ? Bk : function(kk, Fk, Bk) {
            var Rk, tk;
            const Xk = null !== (Rk = ak.b[kk]) && void 0 !== Rk ? Rk : null;
            return null === Xk ? null : null !== (tk = ek(Fk.texture(kk), Bk)) && void 0 !== tk ? tk : Xk
          }(Fk, kk, Rk)
        },
        decoded: Fk => {
          const Bk = (0, bk.k)(Fk);
          return null === Bk ? null : (async Fk => {
            const Bk = kk.sheetPixels.at(Fk);
            if (Bk) {
              kk.sheetPixels[Fk] = null;
              const Rk = wk > 0 ? Bk.byteLength / (4 * wk) : 0;
              return {
                width: wk,
                height: Rk,
                pixels: new Uint8Array(Bk.buffer, Bk.byteOffset, Bk.byteLength)
              }
            }
            const tk = kk.terrain.atlasSheets.at(Fk);
            if (void 0 === tk) throw new Error(`the pack has no atlas sheet ${Fk}`);
            const ak = ek(tk, Rk);
            if (null === ak) throw new Error(`the pack's atlas sheet ${Fk} isn't a pack file`);
            return (0, bk.q)(ak)
          })(Bk)
        }
      }
    }
    const fk = new WeakMap;

    function mk(kk, Fk) {
      if (null === kk) return null;
      let Bk = fk.get(kk);
      void 0 === Bk && (Bk = {}, fk.set(kk, Bk));
      const Rk = Bk[Fk];
      if (void 0 !== Rk) return Rk;
      const {
        armourAtlasUrl: tk,
        texture: ak,
        model: Xk
      } = kk, bk = {
        armourAtlasUrl: () => ek(tk, Fk),
        textureUrl: kk => ek(ak(kk), Fk),
        modelUrl: kk => ek(Xk(kk), Fk)
      };
      return Bk[Fk] = bk, bk
    }
    class Wk {
      constructor(kk) {
        this.host = kk, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (kk, Fk, Rk) => {
          const {
            backend: tk
          } = this.host, ak = sk(tk);
          if ("webgl1" !== tk) return ak;
          const [Xk, bk] = await Promise.all([Bk.e(201).then((() => Bk(34024))), null !== (kk = null === (Fk = (Rk = this.host).maxTextureSize) || void 0 === Fk ? void 0 : Fk.call(Rk)) && void 0 !== kk ? kk : null]);
          return Jk(ak, Xk.imagesPerAtlas.length * Math.max(0, ...Xk.imagesPerAtlas), bk)
        })().catch((kk => {
          throw this.maxWidth = null, kk
        })), this.maxWidth
      }
      files() {
        return mk(this.assets, this.owner)
      }
      iconOverrides() {
        const kk = this.files();
        return null === kk ? null : {
          itemSprite: kk.textureUrl,
          blockTexture: kk.textureUrl,
          model: kk.modelUrl
        }
      }
      start() {
        const kk = this.host.feed.subscribe((kk => {
          const Fk = ++this.latest;
          this.host.settling(), this.assetsFor(kk).then((Bk => this.apply(Fk, Bk, kk).catch((kk => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", kk)
          }))), (Bk => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", Bk), this.settled(Fk, kk, null, !0)
          }))
        }));
        return () => {
          kk(), this.latest++, this.ended = !0
        }
      }
      async apply(kk, Fk, Bk) {
        const {
          host: Rk
        } = this;
        if (kk !== this.latest || Rk.stopped()) return;
        const tk = (0, Xk.h)(Bk);
        if (this.texturesIn(Fk, tk) && 0 === this.swapping) return void this.settled(kk, Bk, mk(Fk, tk));
        let ak;
        this.swapping++;
        try {
          ak = await Rk.terrain.swap((kk => {
            var Fk;
            Rk.warn(`texture pack texture ${null!==(Fk=kk.name)&&void 0!==Fk?Fk:"(all)"} failed`, kk.error)
          }), (async () => Rk.sourcesOf ? Rk.sourcesOf(Fk) : null === Fk ? (0, bk.n)() : yk(Fk, await this.maxLayerWidth(), tk)), {
            wholeAtlas: null !== Fk,
            wanted: () => kk === this.latest
          })
        } catch (wk) {
          return Rk.warn("the texture pack's swap failed: the textures in stay", wk), void this.settled(kk, Bk, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== ak || this.ended) this.settled(kk, Bk, null, !0);
        else {
          Rk.landed(), this.assets = Fk, this.owner = tk;
          try {
            Rk.packSwapped()
          } finally {
            this.settled(kk, Bk, this.files())
          }
        }
      }
      async assetsFor(kk) {
        var Fk;
        return (null !== (Fk = this.host.assetsOf) && void 0 !== Fk ? Fk : wk.i)(kk, await this.maxLayerWidth())
      }
      texturesIn(kk, Fk) {
        return kk === this.assets && (null === kk || Fk === this.owner)
      }
      settled(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        kk !== this.latest || this.ended || this.host.stopped() || this.host.settled(Fk, Bk, Rk)
      }
    }
  },
  42797: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      followPagePackFiles: () => ak
    });
    var Rk = Bk(42778),
      tk = Bk(42791);

    function ak(kk, Fk, Bk, ak, Xk) {
      let bk, wk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk => (0, tk.i)(kk, (0, Rk.deviceMaxLayerWidth)(Bk)),
        dk = 0,
        sk = null;
      const Vk = () => {
          if (null === sk || null !== sk.gameSource && !Fk.showsPage()) return;
          const Bk = null === sk.gameSource ? sk : kk.playerState();
          if (Bk.pack === bk) return;
          bk = Bk.pack;
          const tk = ++dk;
          wk(Bk).then((kk => {
            tk === dk && ak((0, Rk.packFilesOf)(kk, "player"))
          }), (kk => {
            tk === dk && (bk = void 0), Xk("the texture pack's files couldn't be had for the previews: the files in stay", kk)
          }))
        },
        Jk = kk.subscribe((kk => {
          sk = kk, Vk()
        })),
        Ak = kk.onPlayerPackChange(Vk),
        ek = Fk.onPageShown(Vk);
      return () => {
        Jk(), Ak(), ek(), dk++
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);