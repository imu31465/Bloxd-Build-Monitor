export const id = 45;
export const ids = [45];
export const modules = {
  51025: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      MAX_LAYER_WIDTH: () => uS,
      PackTextures: () => nS,
      deviceMaxLayerWidth: () => IS,
      layerWidthFor: () => aS,
      packFileUrl: () => KS,
      packFilesOf: () => CS,
      packTerrainSources: () => jS,
      webgl1GridColumns: () => fS,
      webgl1LayerWidth: () => kS
    });
    var tS = gS(3285),
      bS = gS(40759),
      XS = gS(40852),
      xS = gS(51027),
      NS = gS(40844),
      qS = gS(51036);
    const uS = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function IS(SS) {
      return (0, tS.b)() ? Math.min(uS[SS], 64) : uS[SS]
    }

    function fS(SS) {
      const HS = Math.ceil(Math.log2(Math.max(1, SS)));
      return 2 ** Math.ceil(HS / 2)
    }

    function kS(SS, HS, gS) {
      const tS = null !== gS && gS > 0 ? gS : bS.c.limits.MAX_TEXTURE_SIZE;
      return aS(Math.max(1, Math.floor(tS / fS(HS))), SS)
    }

    function aS(SS, HS) {
      let gS = 1;
      for (; 2 * gS <= Math.min(SS, HS);) gS *= 2;
      return gS
    }

    function KS(SS, HS) {
      return "string" !== typeof SS || "" === SS ? null : "player" === HS || (0, xS.c)(SS) ? SS : null
    }
    async function jS(SS, HS, tS) {
      const bS = await gS.e(204).then((() => gS(34324))),
        {
          sheetLayout: xS,
          sheetWidth: qS
        } = SS;
      if (qS > HS) throw new Error(`the pack's atlas is ${qS} px wide, not within ${HS} px`);
      if (!(xS.length === bS.imagesPerAtlas.length && xS.every(((SS, HS) => SS === bS.imagesPerAtlas[HS])))) {
        const SS = `the pack's atlas is sheets of ${xS.join(", ")} layers, the built atlas's ${bS.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (xS.length < bS.imagesPerAtlas.length) throw new Error(SS);
        console.warn(SS)
      }
      return {
        atlasSheets: [],
        heldUntil: SS.heldUntil,
        texture: HS => {
          var gS, xS, NS;
          return null !== (gS = null !== (xS = null !== (NS = KS(SS.terrain.texture(HS), tS)) && void 0 !== NS ? NS : bS.animatedBlockTextures[HS]) && void 0 !== xS ? xS : bS.rotatedBlockTextures[HS]) && void 0 !== gS ? gS : function(SS, HS, gS) {
            var tS, bS;
            const xS = null !== (tS = XS.d[SS]) && void 0 !== tS ? tS : null;
            return null === xS ? null : null !== (bS = KS(HS.texture(SS), gS)) && void 0 !== bS ? bS : xS
          }(HS, SS, tS)
        },
        decoded: HS => {
          const gS = (0, NS.f)(HS);
          return null === gS ? null : (async HS => {
            const gS = SS.sheetPixels.at(HS);
            if (gS) {
              SS.sheetPixels[HS] = null;
              const tS = qS > 0 ? gS.byteLength / (4 * qS) : 0;
              return {
                width: qS,
                height: tS,
                pixels: new Uint8Array(gS.buffer, gS.byteOffset, gS.byteLength)
              }
            }
            const bS = SS.terrain.atlasSheets.at(HS);
            if (void 0 === bS) throw new Error(`the pack has no atlas sheet ${HS}`);
            const XS = KS(bS, tS);
            if (null === XS) throw new Error(`the pack's atlas sheet ${HS} isn't a pack file`);
            return (0, NS.i)(XS)
          })(gS)
        }
      }
    }
    const GS = new WeakMap;

    function CS(SS, HS) {
      if (null === SS) return null;
      let gS = GS.get(SS);
      void 0 === gS && (gS = {}, GS.set(SS, gS));
      const tS = gS[HS];
      if (void 0 !== tS) return tS;
      const {
        armourAtlasUrl: bS,
        texture: XS,
        model: xS
      } = SS, NS = {
        armourAtlasUrl: () => KS(bS, HS),
        textureUrl: SS => KS(XS(SS), HS),
        modelUrl: SS => KS(xS(SS), HS)
      };
      return gS[HS] = NS, NS
    }
    class nS {
      constructor(SS) {
        this.host = SS, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (SS, HS, tS) => {
          const {
            backend: bS
          } = this.host, XS = IS(bS);
          if ("webgl1" !== bS) return XS;
          const [xS, NS] = await Promise.all([gS.e(204).then((() => gS(34324))), null !== (SS = null === (HS = (tS = this.host).maxTextureSize) || void 0 === HS ? void 0 : HS.call(tS)) && void 0 !== SS ? SS : null]);
          return kS(XS, xS.imagesPerAtlas.length * Math.max(0, ...xS.imagesPerAtlas), NS)
        })().catch((SS => {
          throw this.maxWidth = null, SS
        })), this.maxWidth
      }
      files() {
        return CS(this.assets, this.owner)
      }
      start() {
        let SS = null;
        const HS = this.host.feed.subscribe((HS => {
          const gS = ++this.latest,
            tS = null !== HS.gameSource ? "game" : null !== SS && null !== SS.gameSource ? "join" : "page";
          SS = HS, this.host.settling(), this.assetsFor(HS).then((SS => this.apply(gS, SS, HS, tS).catch((SS => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", SS)
          }))), (SS => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", SS), this.settled(gS, HS, null, {
              error: SS,
              source: tS
            })
          }))
        }));
        return () => {
          HS(), this.latest++, this.ended = !0
        }
      }
      async apply(SS, HS, gS, tS) {
        const {
          host: bS
        } = this;
        if (SS !== this.latest || bS.stopped()) return;
        const XS = (0, xS.k)(gS);
        if (this.texturesIn(HS, XS) && 0 === this.swapping) return void this.settled(SS, gS, CS(HS, XS));
        let qS;
        this.swapping++;
        let uS = null;
        try {
          qS = await bS.terrain.swap((SS => {
            var HS;
            bS.warn(`texture pack texture ${null!==(HS=SS.name)&&void 0!==HS?HS:"(all)"} failed`, SS.error), null !== SS.name && null === (0, NS.f)(SS.name) || (uS = SS.error)
          }), (async () => bS.sourcesOf ? bS.sourcesOf(HS) : null === HS ? (0, NS.g)() : jS(HS, await this.maxLayerWidth(), XS)), {
            wholeAtlas: null !== HS,
            wanted: () => SS === this.latest
          })
        } catch (IS) {
          return bS.warn("the texture pack's swap failed: the textures in stay", IS), void this.settled(SS, gS, null, {
            error: IS,
            source: tS
          })
        } finally {
          this.swapping--
        }
        if (!0 !== qS || this.ended) this.settled(SS, gS, null, {
          error: uS,
          source: tS
        });
        else {
          bS.landed(), this.assets = HS, this.owner = XS;
          try {
            bS.packSwapped()
          } finally {
            this.settled(SS, gS, this.files())
          }
        }
      }
      async assetsFor(SS) {
        var HS;
        return (null !== (HS = this.host.assetsOf) && void 0 !== HS ? HS : qS.f)(SS, await this.maxLayerWidth())
      }
      texturesIn(SS, HS) {
        return SS === this.assets && (null === SS || HS === this.owner)
      }
      settled(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        SS !== this.latest || this.ended || this.host.stopped() || this.host.settled(HS, gS, tS)
      }
    }
  },
  51043: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      followPagePackFiles: () => XS
    });
    var tS = gS(51025),
      bS = gS(51036);

    function XS(SS, HS, gS, XS, xS) {
      let NS, qS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : SS => (0, bS.f)(SS, (0, tS.deviceMaxLayerWidth)(gS)),
        uS = 0,
        IS = null;
      const fS = () => {
          if (null === IS || null !== IS.gameSource && !HS.showsPage()) return;
          const gS = null === IS.gameSource ? IS : SS.playerState();
          if (gS.pack === NS) return;
          NS = gS.pack;
          const bS = ++uS;
          qS(gS).then((SS => {
            bS === uS && XS((0, tS.packFilesOf)(SS, "player"))
          }), (SS => {
            bS === uS && (NS = void 0), xS("the texture pack's files couldn't be had for the previews: the files in stay", SS)
          }))
        },
        kS = SS.subscribe((SS => {
          IS = SS, fS()
        })),
        aS = SS.onPlayerPackChange(fS),
        KS = HS.onPageShown(fS);
      return () => {
        kS(), aS(), KS(), uS++
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);