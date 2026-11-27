export const id = 53;
export const ids = [53];
export const modules = {
  54282: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      MAX_LAYER_WIDTH: () => oe,
      PackTextures: () => Be,
      deviceMaxLayerWidth: () => Re,
      layerWidthFor: () => fe,
      packFileUrl: () => Te,
      packFilesOf: () => ze,
      packTerrainSources: () => pe,
      webgl1GridColumns: () => ke,
      webgl1LayerWidth: () => qe
    });
    var ye = He(4771),
      be = He(3136),
      Me = He(41834),
      Ke = He(41941),
      Ue = He(54284),
      Fe = He(41936),
      Je = He(54292);
    const oe = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Re(ee) {
      return (0, be.d)() || (0, ye.o)() ? Math.min(oe[ee], 64) : oe[ee]
    }

    function ke(ee) {
      const ie = Math.ceil(Math.log2(Math.max(1, ee)));
      return 2 ** Math.ceil(ie / 2)
    }

    function qe(ee, ie, He) {
      const ye = null !== He && He > 0 ? He : Me.e.limits.MAX_TEXTURE_SIZE;
      return fe(Math.max(1, Math.floor(ye / ke(ie))), ee)
    }

    function fe(ee, ie) {
      let He = 1;
      for (; 2 * He <= Math.min(ee, ie);) He *= 2;
      return He
    }

    function Te(ee, ie) {
      return "string" !== typeof ee || "" === ee ? null : "player" === ie || (0, Ue.c)(ee) ? ee : null
    }
    async function pe(ee, ie, ye) {
      const be = await He.e(228).then((() => He(34995))),
        {
          sheetLayout: Me,
          sheetWidth: Ue
        } = ee;
      if (Ue > ie) throw new Error(`the pack's atlas is ${Ue} px wide, not within ${ie} px`);
      if (!(Me.length === be.imagesPerAtlas.length && Me.every(((ee, ie) => ee === be.imagesPerAtlas[ie])))) {
        const ee = `the pack's atlas is sheets of ${Me.join(", ")} layers, the built atlas's ${be.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Me.length < be.imagesPerAtlas.length) throw new Error(ee);
        console.warn(ee)
      }
      return {
        atlasSheets: [],
        heldUntil: ee.heldUntil,
        texture: ie => {
          var He, Me, Ue;
          return null !== (He = null !== (Me = null !== (Ue = Te(ee.terrain.texture(ie), ye)) && void 0 !== Ue ? Ue : be.animatedBlockTextures[ie]) && void 0 !== Me ? Me : be.rotatedBlockTextures[ie]) && void 0 !== He ? He : function(ee, ie, He) {
            var ye, be;
            const Me = null !== (ye = Ke.e[ee]) && void 0 !== ye ? ye : null;
            return null === Me ? null : null !== (be = Te(ie.texture(ee), He)) && void 0 !== be ? be : Me
          }(ie, ee, ye)
        },
        decoded: ie => {
          const He = (0, Fe.j)(ie);
          return null === He ? null : (async ie => {
            const He = ee.sheetPixels.at(ie);
            if (He) {
              ee.sheetPixels[ie] = null;
              const ye = Ue > 0 ? He.byteLength / (4 * Ue) : 0;
              return {
                width: Ue,
                height: ye,
                pixels: new Uint8Array(He.buffer, He.byteOffset, He.byteLength)
              }
            }
            const be = ee.terrain.atlasSheets.at(ie);
            if (void 0 === be) throw new Error(`the pack has no atlas sheet ${ie}`);
            const Me = Te(be, ye);
            if (null === Me) throw new Error(`the pack's atlas sheet ${ie} isn't a pack file`);
            return (0, Fe.o)(Me)
          })(He)
        }
      }
    }
    const Xe = new WeakMap;

    function ze(ee, ie) {
      if (null === ee) return null;
      let He = Xe.get(ee);
      void 0 === He && (He = {}, Xe.set(ee, He));
      const ye = He[ie];
      if (void 0 !== ye) return ye;
      const {
        armourAtlasUrl: be,
        texture: Me,
        model: Ke
      } = ee, Ue = {
        armourAtlasUrl: () => Te(be, ie),
        textureUrl: ee => Te(Me(ee), ie),
        modelUrl: ee => Te(Ke(ee), ie)
      };
      return He[ie] = Ue, Ue
    }
    class Be {
      constructor(ee) {
        this.host = ee, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (ee, ie, ye) => {
          const {
            backend: be
          } = this.host, Me = Re(be);
          if ("webgl1" !== be) return Me;
          const [Ke, Ue] = await Promise.all([He.e(228).then((() => He(34995))), null !== (ee = null === (ie = (ye = this.host).maxTextureSize) || void 0 === ie ? void 0 : ie.call(ye)) && void 0 !== ee ? ee : null]);
          return qe(Me, Ke.imagesPerAtlas.length * Math.max(0, ...Ke.imagesPerAtlas), Ue)
        })().catch((ee => {
          throw this.maxWidth = null, ee
        })), this.maxWidth
      }
      files() {
        return ze(this.assets, this.owner)
      }
      start() {
        let ee = null;
        const ie = this.host.feed.subscribe((ie => {
          const He = ++this.latest,
            ye = null !== ie.gameSource ? "game" : null !== ee && null !== ee.gameSource ? "join" : "page";
          ee = ie, this.host.settling(), this.assetsFor(ie).then((ee => this.apply(He, ee, ie, ye).catch((ee => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", ee)
          }))), (ee => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", ee), this.settled(He, ie, null, {
              error: ee,
              source: ye
            })
          }))
        }));
        return () => {
          ie(), this.latest++, this.ended = !0
        }
      }
      async apply(ee, ie, He, ye) {
        const {
          host: be
        } = this;
        if (ee !== this.latest || be.stopped()) return;
        const Me = (0, Ue.m)(He);
        if (this.texturesIn(ie, Me) && 0 === this.swapping) return void this.settled(ee, He, ze(ie, Me));
        let Ke;
        this.swapping++;
        let Je = null;
        try {
          Ke = await be.terrain.swap((ee => {
            var ie;
            be.warn(`texture pack texture ${null!==(ie=ee.name)&&void 0!==ie?ie:"(all)"} failed`, ee.error), null !== ee.name && null === (0, Fe.j)(ee.name) || (Je = ee.error)
          }), (async () => be.sourcesOf ? be.sourcesOf(ie) : null === ie ? (0, Fe.l)() : pe(ie, await this.maxLayerWidth(), Me)), {
            wholeAtlas: null !== ie,
            wanted: () => ee === this.latest
          })
        } catch (oe) {
          return be.warn("the texture pack's swap failed: the textures in stay", oe), void this.settled(ee, He, null, {
            error: oe,
            source: ye
          })
        } finally {
          this.swapping--
        }
        if (!0 !== Ke || this.ended) this.settled(ee, He, null, {
          error: Je,
          source: ye
        });
        else {
          be.landed(), this.assets = ie, this.owner = Me;
          try {
            be.packSwapped()
          } finally {
            this.settled(ee, He, this.files())
          }
        }
      }
      async assetsFor(ee) {
        var ie;
        return (null !== (ie = this.host.assetsOf) && void 0 !== ie ? ie : Je.i)(ee, await this.maxLayerWidth())
      }
      texturesIn(ee, ie) {
        return ee === this.assets && (null === ee || ie === this.owner)
      }
      settled(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        ee !== this.latest || this.ended || this.host.stopped() || this.host.settled(ie, He, ye)
      }
    }
  },
  54294: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      followPagePackFiles: () => Me
    });
    var ye = He(54282),
      be = He(54292);

    function Me(ee, ie, He, Me, Ke) {
      let Ue, Fe = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ee => (0, be.i)(ee, (0, ye.deviceMaxLayerWidth)(He)),
        Je = 0,
        oe = null;
      const Re = () => {
          if (null === oe || null !== oe.gameSource && !ie.showsPage()) return;
          const He = null === oe.gameSource ? oe : ee.playerState();
          if (He.pack === Ue) return;
          Ue = He.pack;
          const be = ++Je;
          Fe(He).then((ee => {
            be === Je && Me((0, ye.packFilesOf)(ee, "player"))
          }), (ee => {
            be === Je && (Ue = void 0), Ke("the texture pack's files couldn't be had for the previews: the files in stay", ee)
          }))
        },
        ke = ee.subscribe((ee => {
          oe = ee, Re()
        })),
        qe = ee.onPlayerPackChange(Re),
        fe = ie.onPageShown(Re);
      return () => {
        ke(), qe(), fe(), Je++
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);