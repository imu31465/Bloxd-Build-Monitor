export const id = 45;
export const ids = [45];
export const modules = {
  50562: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      MAX_LAYER_WIDTH: () => mk,
      PackTextures: () => pk,
      deviceMaxLayerWidth: () => Mk,
      layerWidthFor: () => nk,
      packFileUrl: () => Uk,
      packFilesOf: () => lk,
      packTerrainSources: () => Hk,
      webgl1GridColumns: () => Kk,
      webgl1LayerWidth: () => xk
    });
    var Dk = ik(3082),
      fk = ik(40300),
      Sk = ik(40407),
      bk = ik(50568),
      rk = ik(40397),
      Pk = ik(50577);
    const mk = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Mk(kk) {
      return (0, Dk.c)() ? Math.min(mk[kk], 64) : mk[kk]
    }

    function Kk(kk) {
      const ek = Math.ceil(Math.log2(Math.max(1, kk)));
      return 2 ** Math.ceil(ek / 2)
    }

    function xk(kk, ek, ik) {
      const Dk = null !== ik && ik > 0 ? ik : fk.c.limits.MAX_TEXTURE_SIZE;
      return nk(Math.max(1, Math.floor(Dk / Kk(ek))), kk)
    }

    function nk(kk, ek) {
      let ik = 1;
      for (; 2 * ik <= Math.min(kk, ek);) ik *= 2;
      return ik
    }

    function Uk(kk, ek) {
      return "string" !== typeof kk || "" === kk ? null : "player" === ek || (0, bk.d)(kk) ? kk : null
    }
    async function Hk(kk, ek, Dk) {
      const fk = await ik.e(206).then((() => ik(33856))),
        {
          sheetLayout: bk,
          sheetWidth: Pk
        } = kk;
      if (Pk > ek) throw new Error(`the pack's atlas is ${Pk} px wide, not within ${ek} px`);
      if (!(bk.length === fk.imagesPerAtlas.length && bk.every(((kk, ek) => kk === fk.imagesPerAtlas[ek])))) {
        const kk = `the pack's atlas is sheets of ${bk.join(", ")} layers, the built atlas's ${fk.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (bk.length < fk.imagesPerAtlas.length) throw new Error(kk);
        console.warn(kk)
      }
      return {
        atlasSheets: [],
        heldUntil: kk.heldUntil,
        texture: ek => {
          var ik, bk, rk;
          return null !== (ik = null !== (bk = null !== (rk = Uk(kk.terrain.texture(ek), Dk)) && void 0 !== rk ? rk : fk.animatedBlockTextures[ek]) && void 0 !== bk ? bk : fk.rotatedBlockTextures[ek]) && void 0 !== ik ? ik : function(kk, ek, ik) {
            var Dk, fk;
            const bk = null !== (Dk = Sk.c[kk]) && void 0 !== Dk ? Dk : null;
            return null === bk ? null : null !== (fk = Uk(ek.texture(kk), ik)) && void 0 !== fk ? fk : bk
          }(ek, kk, Dk)
        },
        decoded: ek => {
          const ik = (0, rk.j)(ek);
          return null === ik ? null : (async ek => {
            const ik = kk.sheetPixels.at(ek);
            if (ik) {
              kk.sheetPixels[ek] = null;
              const Dk = Pk > 0 ? ik.byteLength / (4 * Pk) : 0;
              return {
                width: Pk,
                height: Dk,
                pixels: new Uint8Array(ik.buffer, ik.byteOffset, ik.byteLength)
              }
            }
            const fk = kk.terrain.atlasSheets.at(ek);
            if (void 0 === fk) throw new Error(`the pack has no atlas sheet ${ek}`);
            const Sk = Uk(fk, Dk);
            if (null === Sk) throw new Error(`the pack's atlas sheet ${ek} isn't a pack file`);
            return (0, rk.o)(Sk)
          })(ik)
        }
      }
    }
    const wk = new WeakMap;

    function lk(kk, ek) {
      if (null === kk) return null;
      let ik = wk.get(kk);
      void 0 === ik && (ik = {}, wk.set(kk, ik));
      const Dk = ik[ek];
      if (void 0 !== Dk) return Dk;
      const {
        armourAtlasUrl: fk,
        texture: Sk,
        model: bk
      } = kk, rk = {
        armourAtlasUrl: () => Uk(fk, ek),
        textureUrl: kk => Uk(Sk(kk), ek),
        modelUrl: kk => Uk(bk(kk), ek)
      };
      return ik[ek] = rk, rk
    }
    class pk {
      constructor(kk) {
        this.host = kk, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (kk, ek, Dk) => {
          const {
            backend: fk
          } = this.host, Sk = Mk(fk);
          if ("webgl1" !== fk) return Sk;
          const [bk, rk] = await Promise.all([ik.e(206).then((() => ik(33856))), null !== (kk = null === (ek = (Dk = this.host).maxTextureSize) || void 0 === ek ? void 0 : ek.call(Dk)) && void 0 !== kk ? kk : null]);
          return xk(Sk, bk.imagesPerAtlas.length * Math.max(0, ...bk.imagesPerAtlas), rk)
        })().catch((kk => {
          throw this.maxWidth = null, kk
        })), this.maxWidth
      }
      files() {
        return lk(this.assets, this.owner)
      }
      start() {
        let kk = null;
        const ek = this.host.feed.subscribe((ek => {
          const ik = ++this.latest,
            Dk = null !== ek.gameSource ? "game" : null !== kk && null !== kk.gameSource ? "join" : "page";
          kk = ek, this.host.settling(), this.assetsFor(ek).then((kk => this.apply(ik, kk, ek, Dk).catch((kk => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", kk)
          }))), (kk => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", kk), this.settled(ik, ek, null, {
              error: kk,
              source: Dk
            })
          }))
        }));
        return () => {
          ek(), this.latest++, this.ended = !0
        }
      }
      async apply(kk, ek, ik, Dk) {
        const {
          host: fk
        } = this;
        if (kk !== this.latest || fk.stopped()) return;
        const Sk = (0, bk.j)(ik);
        if (this.texturesIn(ek, Sk) && 0 === this.swapping) return void this.settled(kk, ik, lk(ek, Sk));
        let Pk;
        this.swapping++;
        let mk = null;
        try {
          Pk = await fk.terrain.swap((kk => {
            var ek;
            fk.warn(`texture pack texture ${null!==(ek=kk.name)&&void 0!==ek?ek:"(all)"} failed`, kk.error), null !== kk.name && null === (0, rk.j)(kk.name) || (mk = kk.error)
          }), (async () => fk.sourcesOf ? fk.sourcesOf(ek) : null === ek ? (0, rk.l)() : Hk(ek, await this.maxLayerWidth(), Sk)), {
            wholeAtlas: null !== ek,
            wanted: () => kk === this.latest
          })
        } catch (Mk) {
          return fk.warn("the texture pack's swap failed: the textures in stay", Mk), void this.settled(kk, ik, null, {
            error: Mk,
            source: Dk
          })
        } finally {
          this.swapping--
        }
        if (!0 !== Pk || this.ended) this.settled(kk, ik, null, {
          error: mk,
          source: Dk
        });
        else {
          fk.landed(), this.assets = ek, this.owner = Sk;
          try {
            fk.packSwapped()
          } finally {
            this.settled(kk, ik, this.files())
          }
        }
      }
      async assetsFor(kk) {
        var ek;
        return (null !== (ek = this.host.assetsOf) && void 0 !== ek ? ek : Pk.h)(kk, await this.maxLayerWidth())
      }
      texturesIn(kk, ek) {
        return kk === this.assets && (null === kk || ek === this.owner)
      }
      settled(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        kk !== this.latest || this.ended || this.host.stopped() || this.host.settled(ek, ik, Dk)
      }
    }
  },
  50582: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      followPagePackFiles: () => Sk
    });
    var Dk = ik(50562),
      fk = ik(50577);

    function Sk(kk, ek, ik, Sk, bk) {
      let rk, Pk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk => (0, fk.h)(kk, (0, Dk.deviceMaxLayerWidth)(ik)),
        mk = 0,
        Mk = null;
      const Kk = () => {
          if (null === Mk || null !== Mk.gameSource && !ek.showsPage()) return;
          const ik = null === Mk.gameSource ? Mk : kk.playerState();
          if (ik.pack === rk) return;
          rk = ik.pack;
          const fk = ++mk;
          Pk(ik).then((kk => {
            fk === mk && Sk((0, Dk.packFilesOf)(kk, "player"))
          }), (kk => {
            fk === mk && (rk = void 0), bk("the texture pack's files couldn't be had for the previews: the files in stay", kk)
          }))
        },
        xk = kk.subscribe((kk => {
          Mk = kk, Kk()
        })),
        nk = kk.onPlayerPackChange(Kk),
        Uk = ek.onPageShown(Kk);
      return () => {
        xk(), nk(), Uk(), mk++
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);