export const id = 45;
export const ids = [45];
export const modules = {
  50985: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      MAX_LAYER_WIDTH: () => qk,
      PackTextures: () => xk,
      deviceMaxLayerWidth: () => Lk,
      layerWidthFor: () => jk,
      packFileUrl: () => ek,
      packFilesOf: () => Jk,
      packTerrainSources: () => wk,
      webgl1GridColumns: () => tk,
      webgl1LayerWidth: () => Zk
    });
    var Xk = Ik(3047),
      Tk = Ik(40729),
      ik = Ik(40827),
      yk = Ik(50988),
      lk = Ik(40819),
      ak = Ik(50992);
    const qk = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Lk(kk) {
      return (0, Xk.e)() ? Math.min(qk[kk], 64) : qk[kk]
    }

    function tk(kk) {
      const Fk = Math.ceil(Math.log2(Math.max(1, kk)));
      return 2 ** Math.ceil(Fk / 2)
    }

    function Zk(kk, Fk, Ik) {
      const Xk = null !== Ik && Ik > 0 ? Ik : Tk.e.limits.MAX_TEXTURE_SIZE;
      return jk(Math.max(1, Math.floor(Xk / tk(Fk))), kk)
    }

    function jk(kk, Fk) {
      let Ik = 1;
      for (; 2 * Ik <= Math.min(kk, Fk);) Ik *= 2;
      return Ik
    }

    function ek(kk, Fk) {
      return "string" !== typeof kk || "" === kk ? null : "player" === Fk || (0, yk.c)(kk) ? kk : null
    }
    async function wk(kk, Fk, Xk) {
      const Tk = await Ik.e(204).then((() => Ik(34274))),
        {
          sheetLayout: yk,
          sheetWidth: ak
        } = kk;
      if (ak > Fk) throw new Error(`the pack's atlas is ${ak} px wide, not within ${Fk} px`);
      if (!(yk.length === Tk.imagesPerAtlas.length && yk.every(((kk, Fk) => kk === Tk.imagesPerAtlas[Fk])))) {
        const kk = `the pack's atlas is sheets of ${yk.join(", ")} layers, the built atlas's ${Tk.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (yk.length < Tk.imagesPerAtlas.length) throw new Error(kk);
        console.warn(kk)
      }
      return {
        atlasSheets: [],
        heldUntil: kk.heldUntil,
        texture: Fk => {
          var Ik, yk, lk;
          return null !== (Ik = null !== (yk = null !== (lk = ek(kk.terrain.texture(Fk), Xk)) && void 0 !== lk ? lk : Tk.animatedBlockTextures[Fk]) && void 0 !== yk ? yk : Tk.rotatedBlockTextures[Fk]) && void 0 !== Ik ? Ik : function(kk, Fk, Ik) {
            var Xk, Tk;
            const yk = null !== (Xk = ik.c[kk]) && void 0 !== Xk ? Xk : null;
            return null === yk ? null : null !== (Tk = ek(Fk.texture(kk), Ik)) && void 0 !== Tk ? Tk : yk
          }(Fk, kk, Xk)
        },
        decoded: Fk => {
          const Ik = (0, lk.i)(Fk);
          return null === Ik ? null : (async Fk => {
            const Ik = kk.sheetPixels.at(Fk);
            if (Ik) {
              kk.sheetPixels[Fk] = null;
              const Xk = ak > 0 ? Ik.byteLength / (4 * ak) : 0;
              return {
                width: ak,
                height: Xk,
                pixels: new Uint8Array(Ik.buffer, Ik.byteOffset, Ik.byteLength)
              }
            }
            const Tk = kk.terrain.atlasSheets.at(Fk);
            if (void 0 === Tk) throw new Error(`the pack has no atlas sheet ${Fk}`);
            const ik = ek(Tk, Xk);
            if (null === ik) throw new Error(`the pack's atlas sheet ${Fk} isn't a pack file`);
            return (0, lk.o)(ik)
          })(Ik)
        }
      }
    }
    const Hk = new WeakMap;

    function Jk(kk, Fk) {
      if (null === kk) return null;
      let Ik = Hk.get(kk);
      void 0 === Ik && (Ik = {}, Hk.set(kk, Ik));
      const Xk = Ik[Fk];
      if (void 0 !== Xk) return Xk;
      const {
        armourAtlasUrl: Tk,
        texture: ik,
        model: yk
      } = kk, lk = {
        armourAtlasUrl: () => ek(Tk, Fk),
        textureUrl: kk => ek(ik(kk), Fk),
        modelUrl: kk => ek(yk(kk), Fk)
      };
      return Ik[Fk] = lk, lk
    }
    class xk {
      constructor(kk) {
        this.host = kk, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (kk, Fk, Xk) => {
          const {
            backend: Tk
          } = this.host, ik = Lk(Tk);
          if ("webgl1" !== Tk) return ik;
          const [yk, lk] = await Promise.all([Ik.e(204).then((() => Ik(34274))), null !== (kk = null === (Fk = (Xk = this.host).maxTextureSize) || void 0 === Fk ? void 0 : Fk.call(Xk)) && void 0 !== kk ? kk : null]);
          return Zk(ik, yk.imagesPerAtlas.length * Math.max(0, ...yk.imagesPerAtlas), lk)
        })().catch((kk => {
          throw this.maxWidth = null, kk
        })), this.maxWidth
      }
      files() {
        return Jk(this.assets, this.owner)
      }
      start() {
        let kk = null;
        const Fk = this.host.feed.subscribe((Fk => {
          const Ik = ++this.latest,
            Xk = null !== Fk.gameSource ? "game" : null !== kk && null !== kk.gameSource ? "join" : "page";
          kk = Fk, this.host.settling(), this.assetsFor(Fk).then((kk => this.apply(Ik, kk, Fk, Xk).catch((kk => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", kk)
          }))), (kk => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", kk), this.settled(Ik, Fk, null, {
              error: kk,
              source: Xk
            })
          }))
        }));
        return () => {
          Fk(), this.latest++, this.ended = !0
        }
      }
      async apply(kk, Fk, Ik, Xk) {
        const {
          host: Tk
        } = this;
        if (kk !== this.latest || Tk.stopped()) return;
        const ik = (0, yk.h)(Ik);
        if (this.texturesIn(Fk, ik) && 0 === this.swapping) return void this.settled(kk, Ik, Jk(Fk, ik));
        let ak;
        this.swapping++;
        let qk = null;
        try {
          ak = await Tk.terrain.swap((kk => {
            var Fk;
            Tk.warn(`texture pack texture ${null!==(Fk=kk.name)&&void 0!==Fk?Fk:"(all)"} failed`, kk.error), null !== kk.name && null === (0, lk.i)(kk.name) || (qk = kk.error)
          }), (async () => Tk.sourcesOf ? Tk.sourcesOf(Fk) : null === Fk ? (0, lk.l)() : wk(Fk, await this.maxLayerWidth(), ik)), {
            wholeAtlas: null !== Fk,
            wanted: () => kk === this.latest
          })
        } catch (Lk) {
          return Tk.warn("the texture pack's swap failed: the textures in stay", Lk), void this.settled(kk, Ik, null, {
            error: Lk,
            source: Xk
          })
        } finally {
          this.swapping--
        }
        if (!0 !== ak || this.ended) this.settled(kk, Ik, null, {
          error: qk,
          source: Xk
        });
        else {
          Tk.landed(), this.assets = Fk, this.owner = ik;
          try {
            Tk.packSwapped()
          } finally {
            this.settled(kk, Ik, this.files())
          }
        }
      }
      async assetsFor(kk) {
        var Fk;
        return (null !== (Fk = this.host.assetsOf) && void 0 !== Fk ? Fk : ak.j)(kk, await this.maxLayerWidth())
      }
      texturesIn(kk, Fk) {
        return kk === this.assets && (null === kk || Fk === this.owner)
      }
      settled(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        kk !== this.latest || this.ended || this.host.stopped() || this.host.settled(Fk, Ik, Xk)
      }
    }
  },
  50999: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      followPagePackFiles: () => ik
    });
    var Xk = Ik(50985),
      Tk = Ik(50992);

    function ik(kk, Fk, Ik, ik, yk) {
      let lk, ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk => (0, Tk.j)(kk, (0, Xk.deviceMaxLayerWidth)(Ik)),
        qk = 0,
        Lk = null;
      const tk = () => {
          if (null === Lk || null !== Lk.gameSource && !Fk.showsPage()) return;
          const Ik = null === Lk.gameSource ? Lk : kk.playerState();
          if (Ik.pack === lk) return;
          lk = Ik.pack;
          const Tk = ++qk;
          ak(Ik).then((kk => {
            Tk === qk && ik((0, Xk.packFilesOf)(kk, "player"))
          }), (kk => {
            Tk === qk && (lk = void 0), yk("the texture pack's files couldn't be had for the previews: the files in stay", kk)
          }))
        },
        Zk = kk.subscribe((kk => {
          Lk = kk, tk()
        })),
        jk = kk.onPlayerPackChange(tk),
        ek = Fk.onPageShown(tk);
      return () => {
        Zk(), jk(), ek(), qk++
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);