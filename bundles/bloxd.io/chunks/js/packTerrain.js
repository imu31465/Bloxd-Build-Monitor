export const id = 46;
export const ids = [46];
export const modules = {
  51276: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      MAX_LAYER_WIDTH: () => fu,
      PackTextures: () => gu,
      deviceMaxLayerWidth: () => Cu,
      layerWidthFor: () => Nu,
      packFileUrl: () => Ou,
      packFilesOf: () => Du,
      packTerrainSources: () => Yu,
      webgl1GridColumns: () => bu,
      webgl1LayerWidth: () => cu
    });
    var su = ju(3290),
      Uu = ju(40967),
      Zu = ju(41067),
      Xu = ju(51278),
      lu = ju(41056),
      qu = ju(51284);
    const fu = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Cu(uu) {
      return (0, su.b)() ? Math.min(fu[uu], 64) : fu[uu]
    }

    function bu(uu) {
      const Eu = Math.ceil(Math.log2(Math.max(1, uu)));
      return 2 ** Math.ceil(Eu / 2)
    }

    function cu(uu, Eu, ju) {
      const su = null !== ju && ju > 0 ? ju : Uu.c.limits.MAX_TEXTURE_SIZE;
      return Nu(Math.max(1, Math.floor(su / bu(Eu))), uu)
    }

    function Nu(uu, Eu) {
      let ju = 1;
      for (; 2 * ju <= Math.min(uu, Eu);) ju *= 2;
      return ju
    }

    function Ou(uu, Eu) {
      return "string" !== typeof uu || "" === uu ? null : "player" === Eu || (0, Xu.d)(uu) ? uu : null
    }
    async function Yu(uu, Eu, su) {
      const Uu = await ju.e(207).then((() => ju(34634))),
        {
          sheetLayout: Xu,
          sheetWidth: qu
        } = uu;
      if (qu > Eu) throw new Error(`the pack's atlas is ${qu} px wide, not within ${Eu} px`);
      if (!(Xu.length === Uu.imagesPerAtlas.length && Xu.every(((uu, Eu) => uu === Uu.imagesPerAtlas[Eu])))) {
        const uu = `the pack's atlas is sheets of ${Xu.join(", ")} layers, the built atlas's ${Uu.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Xu.length < Uu.imagesPerAtlas.length) throw new Error(uu);
        console.warn(uu)
      }
      return {
        atlasSheets: [],
        heldUntil: uu.heldUntil,
        texture: Eu => {
          var ju, Xu, lu;
          return null !== (ju = null !== (Xu = null !== (lu = Ou(uu.terrain.texture(Eu), su)) && void 0 !== lu ? lu : Uu.animatedBlockTextures[Eu]) && void 0 !== Xu ? Xu : Uu.rotatedBlockTextures[Eu]) && void 0 !== ju ? ju : function(uu, Eu, ju) {
            var su, Uu;
            const Xu = null !== (su = Zu.c[uu]) && void 0 !== su ? su : null;
            return null === Xu ? null : null !== (Uu = Ou(Eu.texture(uu), ju)) && void 0 !== Uu ? Uu : Xu
          }(Eu, uu, su)
        },
        decoded: Eu => {
          const ju = (0, lu.f)(Eu);
          return null === ju ? null : (async Eu => {
            const ju = uu.sheetPixels.at(Eu);
            if (ju) {
              uu.sheetPixels[Eu] = null;
              const su = qu > 0 ? ju.byteLength / (4 * qu) : 0;
              return {
                width: qu,
                height: su,
                pixels: new Uint8Array(ju.buffer, ju.byteOffset, ju.byteLength)
              }
            }
            const Uu = uu.terrain.atlasSheets.at(Eu);
            if (void 0 === Uu) throw new Error(`the pack has no atlas sheet ${Eu}`);
            const Zu = Ou(Uu, su);
            if (null === Zu) throw new Error(`the pack's atlas sheet ${Eu} isn't a pack file`);
            return (0, lu.l)(Zu)
          })(ju)
        }
      }
    }
    const hu = new WeakMap;

    function Du(uu, Eu) {
      if (null === uu) return null;
      let ju = hu.get(uu);
      void 0 === ju && (ju = {}, hu.set(uu, ju));
      const su = ju[Eu];
      if (void 0 !== su) return su;
      const {
        armourAtlasUrl: Uu,
        texture: Zu,
        model: Xu
      } = uu, lu = {
        armourAtlasUrl: () => Ou(Uu, Eu),
        textureUrl: uu => Ou(Zu(uu), Eu),
        modelUrl: uu => Ou(Xu(uu), Eu)
      };
      return ju[Eu] = lu, lu
    }
    class gu {
      constructor(uu) {
        this.host = uu, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (uu, Eu, su) => {
          const {
            backend: Uu
          } = this.host, Zu = Cu(Uu);
          if ("webgl1" !== Uu) return Zu;
          const [Xu, lu] = await Promise.all([ju.e(207).then((() => ju(34634))), null !== (uu = null === (Eu = (su = this.host).maxTextureSize) || void 0 === Eu ? void 0 : Eu.call(su)) && void 0 !== uu ? uu : null]);
          return cu(Zu, Xu.imagesPerAtlas.length * Math.max(0, ...Xu.imagesPerAtlas), lu)
        })().catch((uu => {
          throw this.maxWidth = null, uu
        })), this.maxWidth
      }
      files() {
        return Du(this.assets, this.owner)
      }
      start() {
        let uu = null;
        const Eu = this.host.feed.subscribe((Eu => {
          const ju = ++this.latest,
            su = null !== Eu.gameSource ? "game" : null !== uu && null !== uu.gameSource ? "join" : "page";
          uu = Eu, this.host.settling(), this.assetsFor(Eu).then((uu => this.apply(ju, uu, Eu, su).catch((uu => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", uu)
          }))), (uu => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", uu), this.settled(ju, Eu, null, {
              error: uu,
              source: su
            })
          }))
        }));
        return () => {
          Eu(), this.latest++, this.ended = !0
        }
      }
      async apply(uu, Eu, ju, su) {
        const {
          host: Uu
        } = this;
        if (uu !== this.latest || Uu.stopped()) return;
        const Zu = (0, Xu.k)(ju);
        if (this.texturesIn(Eu, Zu) && 0 === this.swapping) return void this.settled(uu, ju, Du(Eu, Zu));
        let qu;
        this.swapping++;
        let fu = null;
        try {
          qu = await Uu.terrain.swap((uu => {
            var Eu;
            Uu.warn(`texture pack texture ${null!==(Eu=uu.name)&&void 0!==Eu?Eu:"(all)"} failed`, uu.error), null !== uu.name && null === (0, lu.f)(uu.name) || (fu = uu.error)
          }), (async () => Uu.sourcesOf ? Uu.sourcesOf(Eu) : null === Eu ? (0, lu.h)() : Yu(Eu, await this.maxLayerWidth(), Zu)), {
            wholeAtlas: null !== Eu,
            wanted: () => uu === this.latest
          })
        } catch (Cu) {
          return Uu.warn("the texture pack's swap failed: the textures in stay", Cu), void this.settled(uu, ju, null, {
            error: Cu,
            source: su
          })
        } finally {
          this.swapping--
        }
        if (!0 !== qu || this.ended) this.settled(uu, ju, null, {
          error: fu,
          source: su
        });
        else {
          Uu.landed(), this.assets = Eu, this.owner = Zu;
          try {
            Uu.packSwapped()
          } finally {
            this.settled(uu, ju, this.files())
          }
        }
      }
      async assetsFor(uu) {
        var Eu;
        return (null !== (Eu = this.host.assetsOf) && void 0 !== Eu ? Eu : qu.k)(uu, await this.maxLayerWidth())
      }
      texturesIn(uu, Eu) {
        return uu === this.assets && (null === uu || Eu === this.owner)
      }
      settled(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        uu !== this.latest || this.ended || this.host.stopped() || this.host.settled(Eu, ju, su)
      }
    }
  },
  51288: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      followPagePackFiles: () => Zu
    });
    var su = ju(51276),
      Uu = ju(51284);

    function Zu(uu, Eu, ju, Zu, Xu) {
      let lu, qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu => (0, Uu.k)(uu, (0, su.deviceMaxLayerWidth)(ju)),
        fu = 0,
        Cu = null;
      const bu = () => {
          if (null === Cu || null !== Cu.gameSource && !Eu.showsPage()) return;
          const ju = null === Cu.gameSource ? Cu : uu.playerState();
          if (ju.pack === lu) return;
          lu = ju.pack;
          const Uu = ++fu;
          qu(ju).then((uu => {
            Uu === fu && Zu((0, su.packFilesOf)(uu, "player"))
          }), (uu => {
            Uu === fu && (lu = void 0), Xu("the texture pack's files couldn't be had for the previews: the files in stay", uu)
          }))
        },
        cu = uu.subscribe((uu => {
          Cu = uu, bu()
        })),
        Nu = uu.onPlayerPackChange(bu),
        Ou = Eu.onPageShown(bu);
      return () => {
        cu(), Nu(), Ou(), fu++
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);