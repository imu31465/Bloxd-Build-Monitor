export const id = 52;
export const ids = [52];
export const modules = {
  53772: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      MAX_LAYER_WIDTH: () => QM,
      PackTextures: () => lM,
      deviceMaxLayerWidth: () => zM,
      layerWidthFor: () => HM,
      packFileUrl: () => hM,
      packFilesOf: () => yM,
      packTerrainSources: () => JM,
      webgl1GridColumns: () => LM,
      webgl1LayerWidth: () => mM
    });
    var OM = iM(3511),
      SM = iM(41800),
      jM = iM(41913),
      aM = iM(53774),
      PM = iM(41900),
      nM = iM(53778);
    const QM = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function zM(MM) {
      return (0, OM.c)() ? Math.min(QM[MM], 64) : QM[MM]
    }

    function LM(MM) {
      const rM = Math.ceil(Math.log2(Math.max(1, MM)));
      return 2 ** Math.ceil(rM / 2)
    }

    function mM(MM, rM, iM) {
      const OM = null !== iM && iM > 0 ? iM : SM.b.limits.MAX_TEXTURE_SIZE;
      return HM(Math.max(1, Math.floor(OM / LM(rM))), MM)
    }

    function HM(MM, rM) {
      let iM = 1;
      for (; 2 * iM <= Math.min(MM, rM);) iM *= 2;
      return iM
    }

    function hM(MM, rM) {
      return "string" !== typeof MM || "" === MM ? null : "player" === rM || (0, aM.c)(MM) ? MM : null
    }
    async function JM(MM, rM, OM) {
      const SM = await iM.e(231).then((() => iM(35131))),
        {
          sheetLayout: aM,
          sheetWidth: nM
        } = MM;
      if (nM > rM) throw new Error(`the pack's atlas is ${nM} px wide, not within ${rM} px`);
      if (!(aM.length === SM.imagesPerAtlas.length && aM.every(((MM, rM) => MM === SM.imagesPerAtlas[rM])))) {
        const MM = `the pack's atlas is sheets of ${aM.join(", ")} layers, the built atlas's ${SM.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (aM.length < SM.imagesPerAtlas.length) throw new Error(MM);
        console.warn(MM)
      }
      return {
        atlasSheets: [],
        heldUntil: MM.heldUntil,
        texture: rM => {
          var iM, aM, PM;
          return null !== (iM = null !== (aM = null !== (PM = hM(MM.terrain.texture(rM), OM)) && void 0 !== PM ? PM : SM.animatedBlockTextures[rM]) && void 0 !== aM ? aM : SM.rotatedBlockTextures[rM]) && void 0 !== iM ? iM : function(MM, rM, iM) {
            var OM, SM;
            const aM = null !== (OM = jM.c[MM]) && void 0 !== OM ? OM : null;
            return null === aM ? null : null !== (SM = hM(rM.texture(MM), iM)) && void 0 !== SM ? SM : aM
          }(rM, MM, OM)
        },
        decoded: rM => {
          const iM = (0, PM.i)(rM);
          return null === iM ? null : (async rM => {
            const iM = MM.sheetPixels.at(rM);
            if (iM) {
              MM.sheetPixels[rM] = null;
              const OM = nM > 0 ? iM.byteLength / (4 * nM) : 0;
              return {
                width: nM,
                height: OM,
                pixels: new Uint8Array(iM.buffer, iM.byteOffset, iM.byteLength)
              }
            }
            const SM = MM.terrain.atlasSheets.at(rM);
            if (void 0 === SM) throw new Error(`the pack has no atlas sheet ${rM}`);
            const jM = hM(SM, OM);
            if (null === jM) throw new Error(`the pack's atlas sheet ${rM} isn't a pack file`);
            return (0, PM.o)(jM)
          })(iM)
        }
      }
    }
    const dM = new WeakMap;

    function yM(MM, rM) {
      if (null === MM) return null;
      let iM = dM.get(MM);
      void 0 === iM && (iM = {}, dM.set(MM, iM));
      const OM = iM[rM];
      if (void 0 !== OM) return OM;
      const {
        armourAtlasUrl: SM,
        texture: jM,
        model: aM
      } = MM, PM = {
        armourAtlasUrl: () => hM(SM, rM),
        textureUrl: MM => hM(jM(MM), rM),
        modelUrl: MM => hM(aM(MM), rM)
      };
      return iM[rM] = PM, PM
    }
    class lM {
      constructor(MM) {
        this.host = MM, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (MM, rM, OM) => {
          const {
            backend: SM
          } = this.host, jM = zM(SM);
          if ("webgl1" !== SM) return jM;
          const [aM, PM] = await Promise.all([iM.e(231).then((() => iM(35131))), null !== (MM = null === (rM = (OM = this.host).maxTextureSize) || void 0 === rM ? void 0 : rM.call(OM)) && void 0 !== MM ? MM : null]);
          return mM(jM, aM.imagesPerAtlas.length * Math.max(0, ...aM.imagesPerAtlas), PM)
        })().catch((MM => {
          throw this.maxWidth = null, MM
        })), this.maxWidth
      }
      files() {
        return yM(this.assets, this.owner)
      }
      start() {
        let MM = null;
        const rM = this.host.feed.subscribe((rM => {
          const iM = ++this.latest,
            OM = null !== rM.gameSource ? "game" : null !== MM && null !== MM.gameSource ? "join" : "page";
          MM = rM, this.host.settling(), this.assetsFor(rM).then((MM => this.apply(iM, MM, rM, OM).catch((MM => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", MM)
          }))), (MM => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", MM), this.settled(iM, rM, null, {
              error: MM,
              source: OM
            })
          }))
        }));
        return () => {
          rM(), this.latest++, this.ended = !0
        }
      }
      async apply(MM, rM, iM, OM) {
        const {
          host: SM
        } = this;
        if (MM !== this.latest || SM.stopped()) return;
        const jM = (0, aM.j)(iM);
        if (this.texturesIn(rM, jM) && 0 === this.swapping) return void this.settled(MM, iM, yM(rM, jM));
        let nM;
        this.swapping++;
        let QM = null;
        try {
          nM = await SM.terrain.swap((MM => {
            var rM;
            SM.warn(`texture pack texture ${null!==(rM=MM.name)&&void 0!==rM?rM:"(all)"} failed`, MM.error), null !== MM.name && null === (0, PM.i)(MM.name) || (QM = MM.error)
          }), (async () => SM.sourcesOf ? SM.sourcesOf(rM) : null === rM ? (0, PM.k)() : JM(rM, await this.maxLayerWidth(), jM)), {
            wholeAtlas: null !== rM,
            wanted: () => MM === this.latest
          })
        } catch (zM) {
          return SM.warn("the texture pack's swap failed: the textures in stay", zM), void this.settled(MM, iM, null, {
            error: zM,
            source: OM
          })
        } finally {
          this.swapping--
        }
        if (!0 !== nM || this.ended) this.settled(MM, iM, null, {
          error: QM,
          source: OM
        });
        else {
          SM.landed(), this.assets = rM, this.owner = jM;
          try {
            SM.packSwapped()
          } finally {
            this.settled(MM, iM, this.files())
          }
        }
      }
      async assetsFor(MM) {
        var rM;
        return (null !== (rM = this.host.assetsOf) && void 0 !== rM ? rM : nM.i)(MM, await this.maxLayerWidth())
      }
      texturesIn(MM, rM) {
        return MM === this.assets && (null === MM || rM === this.owner)
      }
      settled(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        MM !== this.latest || this.ended || this.host.stopped() || this.host.settled(rM, iM, OM)
      }
    }
  },
  53784: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      followPagePackFiles: () => jM
    });
    var OM = iM(53772),
      SM = iM(53778);

    function jM(MM, rM, iM, jM, aM) {
      let PM, nM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MM => (0, SM.i)(MM, (0, OM.deviceMaxLayerWidth)(iM)),
        QM = 0,
        zM = null;
      const LM = () => {
          if (null === zM || null !== zM.gameSource && !rM.showsPage()) return;
          const iM = null === zM.gameSource ? zM : MM.playerState();
          if (iM.pack === PM) return;
          PM = iM.pack;
          const SM = ++QM;
          nM(iM).then((MM => {
            SM === QM && jM((0, OM.packFilesOf)(MM, "player"))
          }), (MM => {
            SM === QM && (PM = void 0), aM("the texture pack's files couldn't be had for the previews: the files in stay", MM)
          }))
        },
        mM = MM.subscribe((MM => {
          zM = MM, LM()
        })),
        HM = MM.onPlayerPackChange(LM),
        hM = rM.onPageShown(LM);
      return () => {
        mM(), HM(), hM(), QM++
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);