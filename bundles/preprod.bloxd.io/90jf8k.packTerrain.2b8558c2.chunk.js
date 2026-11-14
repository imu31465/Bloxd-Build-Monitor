export const id = 39;
export const ids = [39];
export const modules = {
  41181: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      MAX_LAYER_WIDTH: () => dF,
      PackTextures: () => aW,
      layerWidthFor: () => iW,
      packFileUrl: () => rW,
      packFilesOf: () => TF,
      packTerrainSources: () => gW,
      resheet: () => eF,
      webgl1GridColumns: () => PF,
      webgl1LayerWidth: () => RF
    });
    var CF = SF(38685),
      AF = SF(38847),
      uF = SF(41183),
      hF = SF(38834),
      bW = SF(41192);
    const dF = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function PF(FF) {
      const WF = Math.ceil(Math.log2(Math.max(1, FF)));
      return 2 ** Math.ceil(WF / 2)
    }

    function RF(FF, WF, SF) {
      const AF = null !== SF && SF > 0 ? SF : CF.d.limits.MAX_TEXTURE_SIZE;
      return iW(Math.max(1, Math.floor(AF / PF(WF))), FF)
    }

    function iW(FF, WF) {
      let SF = 1;
      for (; 2 * SF <= Math.min(FF, WF);) SF *= 2;
      return SF
    }
    async function eF(FF, WF, SF, CF) {
      const AF = iW(WF, CF),
        uF = [];
      for (const iW of FF) uF.push(AF === WF ? iW : await QF(iW, WF, AF));
      const hF = AF * AF * 4,
        bW = AF * Math.max(0, ...SF),
        dF = SF.map((() => ({
          width: AF,
          height: bW,
          pixels: new Uint8Array(AF * bW * 4)
        })));
      let PF = 0,
        RF = 0;
      for (const iW of uF) {
        let FF = 0;
        const WF = Math.floor(iW.byteLength / hF);
        for (; FF < WF && PF < dF.length;) {
          const CF = Math.min(SF[PF] - RF, WF - FF);
          dF[PF].pixels.set(iW.subarray(FF * hF, (FF + CF) * hF), RF * hF), FF += CF, RF += CF, RF === SF[PF] && (PF++, RF = 0)
        }
      }
      return dF
    }
    const EF = 16;
    async function QF(FF, WF, SF) {
      const CF = Math.floor(FF.byteLength / (WF * WF * 4)),
        AF = new Uint8Array(SF * SF * 4 * CF),
        uF = [0, 0, 0, 0];
      for (let hF = 0; hF < CF; hF++) {
        hF > 0 && hF % EF === 0 && await new Promise((FF => {
          setTimeout(FF, 0)
        }));
        const CF = hF * WF;
        for (let bW = 0; bW < SF; bW++) {
          const dF = Math.floor(bW * WF / SF),
            PF = Math.max(dF + 1, Math.floor((bW + 1) * WF / SF));
          for (let RF = 0; RF < SF; RF++) {
            const iW = Math.floor(RF * WF / SF),
              eF = Math.max(iW + 1, Math.floor((RF + 1) * WF / SF));
            uF.fill(0);
            for (let SF = dF; SF < PF; SF++) {
              const AF = (CF + SF) * WF * 4;
              for (let WF = iW; WF < eF; WF++)
                for (let SF = 0; SF < 4; SF++) uF[SF] += FF[AF + 4 * WF + SF]
            }
            const EF = (PF - dF) * (eF - iW),
              QF = 4 * ((hF * SF + bW) * SF + RF);
            for (let FF = 0; FF < 4; FF++) AF[QF + FF] = Math.round(uF[FF] / EF)
          }
        }
      }
      return AF
    }

    function rW(FF, WF) {
      return "string" !== typeof FF || "" === FF ? null : "player" === WF || (0, uF.c)(FF) ? FF : null
    }
    async function gW(FF, WF, CF) {
      const uF = await SF.e(182).then((() => SF(32982)));
      let bW = null;
      return {
        atlasSheets: [],
        texture: WF => {
          var SF, hF, bW;
          return null !== (SF = null !== (hF = null !== (bW = rW(FF.terrain.texture(WF), CF)) && void 0 !== bW ? bW : uF.animatedBlockTextures[WF]) && void 0 !== hF ? hF : uF.rotatedBlockTextures[WF]) && void 0 !== SF ? SF : function(FF, WF, SF) {
            var CF, uF;
            const hF = null !== (CF = AF.b[FF]) && void 0 !== CF ? CF : null;
            return null === hF ? null : null !== (uF = rW(WF.texture(FF), SF)) && void 0 !== uF ? uF : hF
          }(WF, FF, CF)
        },
        decoded: SF => {
          const AF = (0, hF.h)(SF);
          return null === AF ? null : (bW ??= (async () => {
            const SF = await Promise.all(FF.terrain.atlasSheets.map((async (WF, SF) => {
              const AF = FF.sheetPixels[SF];
              if (AF) return new Uint8Array(AF.buffer, AF.byteOffset, AF.byteLength);
              const uF = rW(WF, CF);
              if (null === uF) throw new Error(`the pack's atlas sheet ${SF} isn't a pack file`);
              return (await (0, hF.l)(uF)).pixels
            })));
            return FF.sheetPixels.fill(null), eF(SF, FF.sheetWidth, uF.imagesPerAtlas, WF)
          })(), bW).then((FF => {
            const WF = FF.at(AF);
            if (void 0 === WF) throw new Error(`the built atlas has no sheet ${AF}`);
            return WF
          }))
        }
      }
    }
    const tW = new WeakMap;

    function TF(FF, WF) {
      if (null === FF) return null;
      let SF = tW.get(FF);
      void 0 === SF && (SF = {}, tW.set(FF, SF));
      const CF = SF[WF];
      if (void 0 !== CF) return CF;
      const {
        armourAtlasUrl: AF,
        texture: uF,
        model: hF
      } = FF, bW = {
        armourAtlasUrl: () => rW(AF, WF),
        textureUrl: FF => rW(uF(FF), WF),
        modelUrl: FF => rW(hF(FF), WF)
      };
      return SF[WF] = bW, bW
    }
    class aW {
      constructor(FF) {
        this.host = FF, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (FF, WF, CF) => {
          const {
            backend: AF
          } = this.host, uF = dF[AF];
          if ("webgl1" !== AF) return uF;
          const [hF, bW] = await Promise.all([SF.e(182).then((() => SF(32982))), null !== (FF = null === (WF = (CF = this.host).maxTextureSize) || void 0 === WF ? void 0 : WF.call(CF)) && void 0 !== FF ? FF : null]);
          return RF(uF, hF.imagesPerAtlas.length * Math.max(0, ...hF.imagesPerAtlas), bW)
        })().catch((FF => {
          throw this.maxWidth = null, FF
        })), this.maxWidth
      }
      files() {
        return TF(this.assets, this.owner)
      }
      iconOverrides() {
        const FF = this.files();
        return null === FF ? null : {
          itemSprite: FF.textureUrl,
          blockTexture: FF.textureUrl,
          model: FF.modelUrl
        }
      }
      start() {
        var FF;
        const WF = null !== (FF = this.host.assetsOf) && void 0 !== FF ? FF : bW.i,
          SF = this.host.feed.subscribe((FF => {
            const SF = ++this.latest;
            this.host.settling(), this.maxLayerWidth().then((SF => WF(FF, SF))).then((WF => this.apply(SF, WF, FF).catch((FF => {
              this.host.warn("the texture pack landed, but reloading what it overrides failed", FF)
            }))), (WF => {
              this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", WF), this.settled(SF, FF, null, !0)
            }))
          }));
        return () => {
          SF(), this.latest++, this.ended = !0
        }
      }
      async apply(FF, WF, SF) {
        const {
          host: CF
        } = this;
        if (FF !== this.latest || CF.stopped()) return;
        const AF = (0, uF.h)(SF);
        if (WF === this.assets && (null === WF || AF === this.owner) && 0 === this.swapping) return void this.settled(FF, SF, TF(WF, AF));
        let bW;
        this.swapping++;
        try {
          bW = await CF.terrain.swap((FF => {
            var WF;
            CF.warn(`texture pack texture ${null!==(WF=FF.name)&&void 0!==WF?WF:"(all)"} failed`, FF.error)
          }), (async () => CF.sourcesOf ? CF.sourcesOf(WF) : null === WF ? (0, hF.i)() : gW(WF, await this.maxLayerWidth(), AF)), {
            wholeAtlas: null !== WF,
            wanted: () => FF === this.latest
          })
        } catch (dF) {
          return CF.warn("the texture pack's swap failed: the textures in stay", dF), void this.settled(FF, SF, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== bW || this.ended) this.settled(FF, SF, null, !0);
        else {
          CF.landed(), this.assets = WF, this.owner = AF;
          try {
            CF.packSwapped()
          } finally {
            this.settled(FF, SF, this.files())
          }
        }
      }
      settled(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        FF !== this.latest || this.ended || this.host.stopped() || this.host.settled(WF, SF, CF)
      }
    }
  },
  41198: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      followPagePackFiles: () => uF
    });
    var CF = SF(41181),
      AF = SF(41192);

    function uF(FF, WF, SF, uF, hF) {
      let bW, dF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : FF => (0, AF.i)(FF, CF.MAX_LAYER_WIDTH[SF]),
        PF = 0,
        RF = null;
      const iW = () => {
          if (null === RF || null !== RF.gameSource && !WF.showsPage()) return;
          const SF = null === RF.gameSource ? RF : FF.playerState();
          if (SF.pack === bW) return;
          bW = SF.pack;
          const AF = ++PF;
          dF(SF).then((FF => {
            AF === PF && uF((0, CF.packFilesOf)(FF, "player"))
          }), (FF => {
            AF === PF && (bW = void 0), hF("the texture pack's files couldn't be had for the previews: the files in stay", FF)
          }))
        },
        eF = FF.subscribe((FF => {
          RF = FF, iW()
        })),
        EF = FF.onPlayerPackChange(iW),
        QF = WF.onPageShown(iW);
      return () => {
        eF(), EF(), QF(), PF++
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);