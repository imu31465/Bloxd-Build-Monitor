export const id = 45;
export const ids = [45];
export const modules = {
  42898: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      MAX_LAYER_WIDTH: () => Xu,
      PackTextures: () => ju,
      deviceMaxLayerWidth: () => Vu,
      layerWidthFor: () => xu,
      packFileUrl: () => Su,
      packFilesOf: () => Wu,
      packTerrainSources: () => pu,
      webgl1GridColumns: () => ru,
      webgl1LayerWidth: () => Bu
    });
    var Eu = yu(2896),
      Ku = yu(40366),
      Qu = yu(40573),
      mu = yu(42902),
      Ju = yu(40559),
      Nu = yu(42910);
    const Xu = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Vu(uu) {
      return (0, Eu.d)() ? Math.min(Xu[uu], 64) : Xu[uu]
    }

    function ru(uu) {
      const Ru = Math.ceil(Math.log2(Math.max(1, uu)));
      return 2 ** Math.ceil(Ru / 2)
    }

    function Bu(uu, Ru, yu) {
      const Eu = null !== yu && yu > 0 ? yu : Ku.b.limits.MAX_TEXTURE_SIZE;
      return xu(Math.max(1, Math.floor(Eu / ru(Ru))), uu)
    }

    function xu(uu, Ru) {
      let yu = 1;
      for (; 2 * yu <= Math.min(uu, Ru);) yu *= 2;
      return yu
    }

    function Su(uu, Ru) {
      return "string" !== typeof uu || "" === uu ? null : "player" === Ru || (0, mu.d)(uu) ? uu : null
    }
    async function pu(uu, Ru, Eu) {
      const Ku = await yu.e(201).then((() => yu(34131))),
        {
          sheetLayout: mu,
          sheetWidth: Nu
        } = uu;
      if (Nu > Ru) throw new Error(`the pack's atlas is ${Nu} px wide, not within ${Ru} px`);
      if (!(mu.length === Ku.imagesPerAtlas.length && mu.every(((uu, Ru) => uu === Ku.imagesPerAtlas[Ru])))) {
        const uu = `the pack's atlas is sheets of ${mu.join(", ")} layers, the built atlas's ${Ku.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (mu.length < Ku.imagesPerAtlas.length) throw new Error(uu);
        console.warn(uu)
      }
      return {
        atlasSheets: [],
        heldUntil: uu.heldUntil,
        texture: Ru => {
          var yu, mu, Ju;
          return null !== (yu = null !== (mu = null !== (Ju = Su(uu.terrain.texture(Ru), Eu)) && void 0 !== Ju ? Ju : Ku.animatedBlockTextures[Ru]) && void 0 !== mu ? mu : Ku.rotatedBlockTextures[Ru]) && void 0 !== yu ? yu : function(uu, Ru, yu) {
            var Eu, Ku;
            const mu = null !== (Eu = Qu.d[uu]) && void 0 !== Eu ? Eu : null;
            return null === mu ? null : null !== (Ku = Su(Ru.texture(uu), yu)) && void 0 !== Ku ? Ku : mu
          }(Ru, uu, Eu)
        },
        decoded: Ru => {
          const yu = (0, Ju.f)(Ru);
          return null === yu ? null : (async Ru => {
            const yu = uu.sheetPixels.at(Ru);
            if (yu) {
              uu.sheetPixels[Ru] = null;
              const Eu = Nu > 0 ? yu.byteLength / (4 * Nu) : 0;
              return {
                width: Nu,
                height: Eu,
                pixels: new Uint8Array(yu.buffer, yu.byteOffset, yu.byteLength)
              }
            }
            const Ku = uu.terrain.atlasSheets.at(Ru);
            if (void 0 === Ku) throw new Error(`the pack has no atlas sheet ${Ru}`);
            const Qu = Su(Ku, Eu);
            if (null === Qu) throw new Error(`the pack's atlas sheet ${Ru} isn't a pack file`);
            return (0, Ju.j)(Qu)
          })(yu)
        }
      }
    }
    const Tu = new WeakMap;

    function Wu(uu, Ru) {
      if (null === uu) return null;
      let yu = Tu.get(uu);
      void 0 === yu && (yu = {}, Tu.set(uu, yu));
      const Eu = yu[Ru];
      if (void 0 !== Eu) return Eu;
      const {
        armourAtlasUrl: Ku,
        texture: Qu,
        model: mu
      } = uu, Ju = {
        armourAtlasUrl: () => Su(Ku, Ru),
        textureUrl: uu => Su(Qu(uu), Ru),
        modelUrl: uu => Su(mu(uu), Ru)
      };
      return yu[Ru] = Ju, Ju
    }
    class ju {
      constructor(uu) {
        this.host = uu, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (uu, Ru, Eu) => {
          const {
            backend: Ku
          } = this.host, Qu = Vu(Ku);
          if ("webgl1" !== Ku) return Qu;
          const [mu, Ju] = await Promise.all([yu.e(201).then((() => yu(34131))), null !== (uu = null === (Ru = (Eu = this.host).maxTextureSize) || void 0 === Ru ? void 0 : Ru.call(Eu)) && void 0 !== uu ? uu : null]);
          return Bu(Qu, mu.imagesPerAtlas.length * Math.max(0, ...mu.imagesPerAtlas), Ju)
        })().catch((uu => {
          throw this.maxWidth = null, uu
        })), this.maxWidth
      }
      files() {
        return Wu(this.assets, this.owner)
      }
      iconOverrides() {
        const uu = this.files();
        return null === uu ? null : {
          itemSprite: uu.textureUrl,
          blockTexture: uu.textureUrl,
          model: uu.modelUrl
        }
      }
      start() {
        const uu = this.host.feed.subscribe((uu => {
          const Ru = ++this.latest;
          this.host.settling(), this.assetsFor(uu).then((yu => this.apply(Ru, yu, uu).catch((uu => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", uu)
          }))), (yu => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", yu), this.settled(Ru, uu, null, !0)
          }))
        }));
        return () => {
          uu(), this.latest++, this.ended = !0
        }
      }
      async apply(uu, Ru, yu) {
        const {
          host: Eu
        } = this;
        if (uu !== this.latest || Eu.stopped()) return;
        const Ku = (0, mu.h)(yu);
        if (this.texturesIn(Ru, Ku) && 0 === this.swapping) return void this.settled(uu, yu, Wu(Ru, Ku));
        let Qu;
        this.swapping++;
        try {
          Qu = await Eu.terrain.swap((uu => {
            var Ru;
            Eu.warn(`texture pack texture ${null!==(Ru=uu.name)&&void 0!==Ru?Ru:"(all)"} failed`, uu.error)
          }), (async () => Eu.sourcesOf ? Eu.sourcesOf(Ru) : null === Ru ? (0, Ju.g)() : pu(Ru, await this.maxLayerWidth(), Ku)), {
            wholeAtlas: null !== Ru,
            wanted: () => uu === this.latest
          })
        } catch (Nu) {
          return Eu.warn("the texture pack's swap failed: the textures in stay", Nu), void this.settled(uu, yu, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== Qu || this.ended) this.settled(uu, yu, null, !0);
        else {
          Eu.landed(), this.assets = Ru, this.owner = Ku;
          try {
            Eu.packSwapped()
          } finally {
            this.settled(uu, yu, this.files())
          }
        }
      }
      async assetsFor(uu) {
        var Ru;
        return (null !== (Ru = this.host.assetsOf) && void 0 !== Ru ? Ru : Nu.k)(uu, await this.maxLayerWidth())
      }
      texturesIn(uu, Ru) {
        return uu === this.assets && (null === uu || Ru === this.owner)
      }
      settled(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        uu !== this.latest || this.ended || this.host.stopped() || this.host.settled(Ru, yu, Eu)
      }
    }
  },
  42912: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      followPagePackFiles: () => Qu
    });
    var Eu = yu(42898),
      Ku = yu(42910);

    function Qu(uu, Ru, yu, Qu, mu) {
      let Ju, Nu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu => (0, Ku.k)(uu, (0, Eu.deviceMaxLayerWidth)(yu)),
        Xu = 0,
        Vu = null;
      const ru = () => {
          if (null === Vu || null !== Vu.gameSource && !Ru.showsPage()) return;
          const yu = null === Vu.gameSource ? Vu : uu.playerState();
          if (yu.pack === Ju) return;
          Ju = yu.pack;
          const Ku = ++Xu;
          Nu(yu).then((uu => {
            Ku === Xu && Qu((0, Eu.packFilesOf)(uu, "player"))
          }), (uu => {
            Ku === Xu && (Ju = void 0), mu("the texture pack's files couldn't be had for the previews: the files in stay", uu)
          }))
        },
        Bu = uu.subscribe((uu => {
          Vu = uu, ru()
        })),
        xu = uu.onPlayerPackChange(ru),
        Su = Ru.onPageShown(ru);
      return () => {
        Bu(), xu(), Su(), Xu++
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);