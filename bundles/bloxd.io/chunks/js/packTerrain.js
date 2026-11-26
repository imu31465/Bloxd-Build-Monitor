export const id = 52;
export const ids = [52];
export const modules = {
  53974: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      MAX_LAYER_WIDTH: () => nV,
      PackTextures: () => jV,
      deviceMaxLayerWidth: () => wV,
      layerWidthFor: () => rV,
      packFileUrl: () => kV,
      packFilesOf: () => BV,
      packTerrainSources: () => bV,
      webgl1GridColumns: () => ZV,
      webgl1LayerWidth: () => vV
    });
    var JV = xV(3535),
      YV = xV(42007),
      UV = xV(42123),
      yV = xV(53977),
      pV = xV(42109),
      QV = xV(53983);
    const nV = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function wV(VV) {
      return (0, JV.d)() ? Math.min(nV[VV], 64) : nV[VV]
    }

    function ZV(VV) {
      const eV = Math.ceil(Math.log2(Math.max(1, VV)));
      return 2 ** Math.ceil(eV / 2)
    }

    function vV(VV, eV, xV) {
      const JV = null !== xV && xV > 0 ? xV : YV.c.limits.MAX_TEXTURE_SIZE;
      return rV(Math.max(1, Math.floor(JV / ZV(eV))), VV)
    }

    function rV(VV, eV) {
      let xV = 1;
      for (; 2 * xV <= Math.min(VV, eV);) xV *= 2;
      return xV
    }

    function kV(VV, eV) {
      return "string" !== typeof VV || "" === VV ? null : "player" === eV || (0, yV.b)(VV) ? VV : null
    }
    async function bV(VV, eV, JV) {
      const YV = await xV.e(231).then((() => xV(35423))),
        {
          sheetLayout: yV,
          sheetWidth: QV
        } = VV;
      if (QV > eV) throw new Error(`the pack's atlas is ${QV} px wide, not within ${eV} px`);
      if (!(yV.length === YV.imagesPerAtlas.length && yV.every(((VV, eV) => VV === YV.imagesPerAtlas[eV])))) {
        const VV = `the pack's atlas is sheets of ${yV.join(", ")} layers, the built atlas's ${YV.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (yV.length < YV.imagesPerAtlas.length) throw new Error(VV);
        console.warn(VV)
      }
      return {
        atlasSheets: [],
        heldUntil: VV.heldUntil,
        texture: eV => {
          var xV, yV, pV;
          return null !== (xV = null !== (yV = null !== (pV = kV(VV.terrain.texture(eV), JV)) && void 0 !== pV ? pV : YV.animatedBlockTextures[eV]) && void 0 !== yV ? yV : YV.rotatedBlockTextures[eV]) && void 0 !== xV ? xV : function(VV, eV, xV) {
            var JV, YV;
            const yV = null !== (JV = UV.d[VV]) && void 0 !== JV ? JV : null;
            return null === yV ? null : null !== (YV = kV(eV.texture(VV), xV)) && void 0 !== YV ? YV : yV
          }(eV, VV, JV)
        },
        decoded: eV => {
          const xV = (0, pV.f)(eV);
          return null === xV ? null : (async eV => {
            const xV = VV.sheetPixels.at(eV);
            if (xV) {
              VV.sheetPixels[eV] = null;
              const JV = QV > 0 ? xV.byteLength / (4 * QV) : 0;
              return {
                width: QV,
                height: JV,
                pixels: new Uint8Array(xV.buffer, xV.byteOffset, xV.byteLength)
              }
            }
            const YV = VV.terrain.atlasSheets.at(eV);
            if (void 0 === YV) throw new Error(`the pack has no atlas sheet ${eV}`);
            const UV = kV(YV, JV);
            if (null === UV) throw new Error(`the pack's atlas sheet ${eV} isn't a pack file`);
            return (0, pV.j)(UV)
          })(xV)
        }
      }
    }
    const EV = new WeakMap;

    function BV(VV, eV) {
      if (null === VV) return null;
      let xV = EV.get(VV);
      void 0 === xV && (xV = {}, EV.set(VV, xV));
      const JV = xV[eV];
      if (void 0 !== JV) return JV;
      const {
        armourAtlasUrl: YV,
        texture: UV,
        model: yV
      } = VV, pV = {
        armourAtlasUrl: () => kV(YV, eV),
        textureUrl: VV => kV(UV(VV), eV),
        modelUrl: VV => kV(yV(VV), eV)
      };
      return xV[eV] = pV, pV
    }
    class jV {
      constructor(VV) {
        this.host = VV, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (VV, eV, JV) => {
          const {
            backend: YV
          } = this.host, UV = wV(YV);
          if ("webgl1" !== YV) return UV;
          const [yV, pV] = await Promise.all([xV.e(231).then((() => xV(35423))), null !== (VV = null === (eV = (JV = this.host).maxTextureSize) || void 0 === eV ? void 0 : eV.call(JV)) && void 0 !== VV ? VV : null]);
          return vV(UV, yV.imagesPerAtlas.length * Math.max(0, ...yV.imagesPerAtlas), pV)
        })().catch((VV => {
          throw this.maxWidth = null, VV
        })), this.maxWidth
      }
      files() {
        return BV(this.assets, this.owner)
      }
      start() {
        let VV = null;
        const eV = this.host.feed.subscribe((eV => {
          const xV = ++this.latest,
            JV = null !== eV.gameSource ? "game" : null !== VV && null !== VV.gameSource ? "join" : "page";
          VV = eV, this.host.settling(), this.assetsFor(eV).then((VV => this.apply(xV, VV, eV, JV).catch((VV => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", VV)
          }))), (VV => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", VV), this.settled(xV, eV, null, {
              error: VV,
              source: JV
            })
          }))
        }));
        return () => {
          eV(), this.latest++, this.ended = !0
        }
      }
      async apply(VV, eV, xV, JV) {
        const {
          host: YV
        } = this;
        if (VV !== this.latest || YV.stopped()) return;
        const UV = (0, yV.i)(xV);
        if (this.texturesIn(eV, UV) && 0 === this.swapping) return void this.settled(VV, xV, BV(eV, UV));
        let QV;
        this.swapping++;
        let nV = null;
        try {
          QV = await YV.terrain.swap((VV => {
            var eV;
            YV.warn(`texture pack texture ${null!==(eV=VV.name)&&void 0!==eV?eV:"(all)"} failed`, VV.error), null !== VV.name && null === (0, pV.f)(VV.name) || (nV = VV.error)
          }), (async () => YV.sourcesOf ? YV.sourcesOf(eV) : null === eV ? (0, pV.i)() : bV(eV, await this.maxLayerWidth(), UV)), {
            wholeAtlas: null !== eV,
            wanted: () => VV === this.latest
          })
        } catch (wV) {
          return YV.warn("the texture pack's swap failed: the textures in stay", wV), void this.settled(VV, xV, null, {
            error: wV,
            source: JV
          })
        } finally {
          this.swapping--
        }
        if (!0 !== QV || this.ended) this.settled(VV, xV, null, {
          error: nV,
          source: JV
        });
        else {
          YV.landed(), this.assets = eV, this.owner = UV;
          try {
            YV.packSwapped()
          } finally {
            this.settled(VV, xV, this.files())
          }
        }
      }
      async assetsFor(VV) {
        var eV;
        return (null !== (eV = this.host.assetsOf) && void 0 !== eV ? eV : QV.j)(VV, await this.maxLayerWidth())
      }
      texturesIn(VV, eV) {
        return VV === this.assets && (null === VV || eV === this.owner)
      }
      settled(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        VV !== this.latest || this.ended || this.host.stopped() || this.host.settled(eV, xV, JV)
      }
    }
  },
  53989: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      followPagePackFiles: () => UV
    });
    var JV = xV(53974),
      YV = xV(53983);

    function UV(VV, eV, xV, UV, yV) {
      let pV, QV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : VV => (0, YV.j)(VV, (0, JV.deviceMaxLayerWidth)(xV)),
        nV = 0,
        wV = null;
      const ZV = () => {
          if (null === wV || null !== wV.gameSource && !eV.showsPage()) return;
          const xV = null === wV.gameSource ? wV : VV.playerState();
          if (xV.pack === pV) return;
          pV = xV.pack;
          const YV = ++nV;
          QV(xV).then((VV => {
            YV === nV && UV((0, JV.packFilesOf)(VV, "player"))
          }), (VV => {
            YV === nV && (pV = void 0), yV("the texture pack's files couldn't be had for the previews: the files in stay", VV)
          }))
        },
        vV = VV.subscribe((VV => {
          wV = VV, ZV()
        })),
        rV = VV.onPlayerPackChange(ZV),
        kV = eV.onPageShown(ZV);
      return () => {
        vV(), rV(), kV(), nV++
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);