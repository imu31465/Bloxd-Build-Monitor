export const id = 45;
export const ids = [45];
export const modules = {
  42480: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      MAX_LAYER_WIDTH: () => wD,
      PackTextures: () => ND,
      deviceMaxLayerWidth: () => SD,
      layerWidthFor: () => MD,
      packFileUrl: () => tD,
      packFilesOf: () => vD,
      packTerrainSources: () => ZD,
      webgl1GridColumns: () => BD,
      webgl1LayerWidth: () => yD
    });
    var ID = cD(2908),
      pD = cD(39860),
      iD = cD(40088),
      fD = cD(42485),
      bD = cD(40079),
      QD = cD(42491);
    const wD = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function SD(DD) {
      return (0, ID.e)() ? Math.min(wD[DD], 64) : wD[DD]
    }

    function BD(DD) {
      const CD = Math.ceil(Math.log2(Math.max(1, DD)));
      return 2 ** Math.ceil(CD / 2)
    }

    function yD(DD, CD, cD) {
      const ID = null !== cD && cD > 0 ? cD : pD.e.limits.MAX_TEXTURE_SIZE;
      return MD(Math.max(1, Math.floor(ID / BD(CD))), DD)
    }

    function MD(DD, CD) {
      let cD = 1;
      for (; 2 * cD <= Math.min(DD, CD);) cD *= 2;
      return cD
    }

    function tD(DD, CD) {
      return "string" !== typeof DD || "" === DD ? null : "player" === CD || (0, fD.d)(DD) ? DD : null
    }
    async function ZD(DD, CD, ID) {
      const pD = await cD.e(201).then((() => cD(33733))),
        {
          sheetLayout: fD,
          sheetWidth: QD
        } = DD;
      if (QD > CD) throw new Error(`the pack's atlas is ${QD} px wide, not within ${CD} px`);
      if (!(fD.length === pD.imagesPerAtlas.length && fD.every(((DD, CD) => DD === pD.imagesPerAtlas[CD])))) {
        const DD = `the pack's atlas is sheets of ${fD.join(", ")} layers, the built atlas's ${pD.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (fD.length < pD.imagesPerAtlas.length) throw new Error(DD);
        console.warn(DD)
      }
      return {
        atlasSheets: [],
        heldUntil: DD.heldUntil,
        texture: CD => {
          var cD, fD, bD;
          return null !== (cD = null !== (fD = null !== (bD = tD(DD.terrain.texture(CD), ID)) && void 0 !== bD ? bD : pD.animatedBlockTextures[CD]) && void 0 !== fD ? fD : pD.rotatedBlockTextures[CD]) && void 0 !== cD ? cD : function(DD, CD, cD) {
            var ID, pD;
            const fD = null !== (ID = iD.d[DD]) && void 0 !== ID ? ID : null;
            return null === fD ? null : null !== (pD = tD(CD.texture(DD), cD)) && void 0 !== pD ? pD : fD
          }(CD, DD, ID)
        },
        decoded: CD => {
          const cD = (0, bD.g)(CD);
          return null === cD ? null : (async CD => {
            const cD = DD.sheetPixels.at(CD);
            if (cD) {
              DD.sheetPixels[CD] = null;
              const ID = QD > 0 ? cD.byteLength / (4 * QD) : 0;
              return {
                width: QD,
                height: ID,
                pixels: new Uint8Array(cD.buffer, cD.byteOffset, cD.byteLength)
              }
            }
            const pD = DD.terrain.atlasSheets.at(CD);
            if (void 0 === pD) throw new Error(`the pack has no atlas sheet ${CD}`);
            const iD = tD(pD, ID);
            if (null === iD) throw new Error(`the pack's atlas sheet ${CD} isn't a pack file`);
            return (0, bD.l)(iD)
          })(cD)
        }
      }
    }
    const oD = new WeakMap;

    function vD(DD, CD) {
      if (null === DD) return null;
      let cD = oD.get(DD);
      void 0 === cD && (cD = {}, oD.set(DD, cD));
      const ID = cD[CD];
      if (void 0 !== ID) return ID;
      const {
        armourAtlasUrl: pD,
        texture: iD,
        model: fD
      } = DD, bD = {
        armourAtlasUrl: () => tD(pD, CD),
        textureUrl: DD => tD(iD(DD), CD),
        modelUrl: DD => tD(fD(DD), CD)
      };
      return cD[CD] = bD, bD
    }
    class ND {
      constructor(DD) {
        this.host = DD, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (DD, CD, ID) => {
          const {
            backend: pD
          } = this.host, iD = SD(pD);
          if ("webgl1" !== pD) return iD;
          const [fD, bD] = await Promise.all([cD.e(201).then((() => cD(33733))), null !== (DD = null === (CD = (ID = this.host).maxTextureSize) || void 0 === CD ? void 0 : CD.call(ID)) && void 0 !== DD ? DD : null]);
          return yD(iD, fD.imagesPerAtlas.length * Math.max(0, ...fD.imagesPerAtlas), bD)
        })().catch((DD => {
          throw this.maxWidth = null, DD
        })), this.maxWidth
      }
      files() {
        return vD(this.assets, this.owner)
      }
      iconOverrides() {
        const DD = this.files();
        return null === DD ? null : {
          itemSprite: DD.textureUrl,
          blockTexture: DD.textureUrl,
          model: DD.modelUrl
        }
      }
      start() {
        const DD = this.host.feed.subscribe((DD => {
          const CD = ++this.latest;
          this.host.settling(), this.assetsFor(DD).then((cD => this.apply(CD, cD, DD).catch((DD => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", DD)
          }))), (cD => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", cD), this.settled(CD, DD, null, !0)
          }))
        }));
        return () => {
          DD(), this.latest++, this.ended = !0
        }
      }
      async apply(DD, CD, cD) {
        const {
          host: ID
        } = this;
        if (DD !== this.latest || ID.stopped()) return;
        const pD = (0, fD.i)(cD);
        if (this.texturesIn(CD, pD) && 0 === this.swapping) return void this.settled(DD, cD, vD(CD, pD));
        let iD;
        this.swapping++;
        try {
          iD = await ID.terrain.swap((DD => {
            var CD;
            ID.warn(`texture pack texture ${null!==(CD=DD.name)&&void 0!==CD?CD:"(all)"} failed`, DD.error)
          }), (async () => ID.sourcesOf ? ID.sourcesOf(CD) : null === CD ? (0, bD.h)() : ZD(CD, await this.maxLayerWidth(), pD)), {
            wholeAtlas: null !== CD,
            wanted: () => DD === this.latest
          })
        } catch (QD) {
          return ID.warn("the texture pack's swap failed: the textures in stay", QD), void this.settled(DD, cD, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== iD || this.ended) this.settled(DD, cD, null, !0);
        else {
          ID.landed(), this.assets = CD, this.owner = pD;
          try {
            ID.packSwapped()
          } finally {
            this.settled(DD, cD, this.files())
          }
        }
      }
      async assetsFor(DD) {
        var CD;
        return (null !== (CD = this.host.assetsOf) && void 0 !== CD ? CD : QD.k)(DD, await this.maxLayerWidth())
      }
      texturesIn(DD, CD) {
        return DD === this.assets && (null === DD || CD === this.owner)
      }
      settled(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        DD !== this.latest || this.ended || this.host.stopped() || this.host.settled(CD, cD, ID)
      }
    }
  },
  42494: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      followPagePackFiles: () => iD
    });
    var ID = cD(42480),
      pD = cD(42491);

    function iD(DD, CD, cD, iD, fD) {
      let bD, QD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD => (0, pD.k)(DD, (0, ID.deviceMaxLayerWidth)(cD)),
        wD = 0,
        SD = null;
      const BD = () => {
          if (null === SD || null !== SD.gameSource && !CD.showsPage()) return;
          const cD = null === SD.gameSource ? SD : DD.playerState();
          if (cD.pack === bD) return;
          bD = cD.pack;
          const pD = ++wD;
          QD(cD).then((DD => {
            pD === wD && iD((0, ID.packFilesOf)(DD, "player"))
          }), (DD => {
            pD === wD && (bD = void 0), fD("the texture pack's files couldn't be had for the previews: the files in stay", DD)
          }))
        },
        yD = DD.subscribe((DD => {
          SD = DD, BD()
        })),
        MD = DD.onPlayerPackChange(BD),
        tD = CD.onPageShown(BD);
      return () => {
        yD(), MD(), tD(), wD++
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);