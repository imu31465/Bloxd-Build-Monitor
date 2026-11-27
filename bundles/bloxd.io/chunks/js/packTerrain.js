export const id = 54;
export const ids = [54];
export const modules = {
  55164: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      MAX_LAYER_WIDTH: () => pr,
      PackTextures: () => nr,
      deviceMaxLayerWidth: () => xr,
      layerWidthFor: () => Ur,
      packFileUrl: () => tr,
      packFilesOf: () => Yr,
      packTerrainSources: () => hr,
      webgl1GridColumns: () => mr,
      webgl1LayerWidth: () => Nr
    });
    var Zr = Qr(5104),
      Wr = Qr(4001),
      ar = Qr(42565),
      jr = Qr(42699),
      Ir = Qr(55173),
      fr = Qr(42694),
      Er = Qr(55176);
    const pr = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function xr(rr) {
      return (0, Wr.e)() || (0, Zr.n)() ? Math.min(pr[rr], 64) : pr[rr]
    }

    function mr(rr) {
      const Sr = Math.ceil(Math.log2(Math.max(1, rr)));
      return 2 ** Math.ceil(Sr / 2)
    }

    function Nr(rr, Sr, Qr) {
      const Zr = null !== Qr && Qr > 0 ? Qr : ar.d.limits.MAX_TEXTURE_SIZE;
      return Ur(Math.max(1, Math.floor(Zr / mr(Sr))), rr)
    }

    function Ur(rr, Sr) {
      let Qr = 1;
      for (; 2 * Qr <= Math.min(rr, Sr);) Qr *= 2;
      return Qr
    }

    function tr(rr, Sr) {
      return "string" !== typeof rr || "" === rr ? null : "player" === Sr || (0, Ir.b)(rr) ? rr : null
    }
    async function hr(rr, Sr, Zr) {
      const Wr = await Qr.e(235).then((() => Qr(35587))),
        {
          sheetLayout: ar,
          sheetWidth: Ir
        } = rr;
      if (Ir > Sr) throw new Error(`the pack's atlas is ${Ir} px wide, not within ${Sr} px`);
      if (!(ar.length === Wr.imagesPerAtlas.length && ar.every(((rr, Sr) => rr === Wr.imagesPerAtlas[Sr])))) {
        const rr = `the pack's atlas is sheets of ${ar.join(", ")} layers, the built atlas's ${Wr.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (ar.length < Wr.imagesPerAtlas.length) throw new Error(rr);
        console.warn(rr)
      }
      return {
        atlasSheets: [],
        heldUntil: rr.heldUntil,
        texture: Sr => {
          var Qr, ar, Ir;
          return null !== (Qr = null !== (ar = null !== (Ir = tr(rr.terrain.texture(Sr), Zr)) && void 0 !== Ir ? Ir : Wr.animatedBlockTextures[Sr]) && void 0 !== ar ? ar : Wr.rotatedBlockTextures[Sr]) && void 0 !== Qr ? Qr : function(rr, Sr, Qr) {
            var Zr, Wr;
            const ar = null !== (Zr = jr.b[rr]) && void 0 !== Zr ? Zr : null;
            return null === ar ? null : null !== (Wr = tr(Sr.texture(rr), Qr)) && void 0 !== Wr ? Wr : ar
          }(Sr, rr, Zr)
        },
        decoded: Sr => {
          const Qr = (0, fr.k)(Sr);
          return null === Qr ? null : (async Sr => {
            const Qr = rr.sheetPixels.at(Sr);
            if (Qr) {
              rr.sheetPixels[Sr] = null;
              const Zr = Ir > 0 ? Qr.byteLength / (4 * Ir) : 0;
              return {
                width: Ir,
                height: Zr,
                pixels: new Uint8Array(Qr.buffer, Qr.byteOffset, Qr.byteLength)
              }
            }
            const Wr = rr.terrain.atlasSheets.at(Sr);
            if (void 0 === Wr) throw new Error(`the pack has no atlas sheet ${Sr}`);
            const ar = tr(Wr, Zr);
            if (null === ar) throw new Error(`the pack's atlas sheet ${Sr} isn't a pack file`);
            return (0, fr.r)(ar)
          })(Qr)
        }
      }
    }
    const zr = new WeakMap;

    function Yr(rr, Sr) {
      if (null === rr) return null;
      let Qr = zr.get(rr);
      void 0 === Qr && (Qr = {}, zr.set(rr, Qr));
      const Zr = Qr[Sr];
      if (void 0 !== Zr) return Zr;
      const {
        armourAtlasUrl: Wr,
        texture: ar,
        model: jr
      } = rr, Ir = {
        armourAtlasUrl: () => tr(Wr, Sr),
        textureUrl: rr => tr(ar(rr), Sr),
        modelUrl: rr => tr(jr(rr), Sr)
      };
      return Qr[Sr] = Ir, Ir
    }
    class nr {
      constructor(rr) {
        this.host = rr, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (rr, Sr, Zr) => {
          const {
            backend: Wr
          } = this.host, ar = xr(Wr);
          if ("webgl1" !== Wr) return ar;
          const [jr, Ir] = await Promise.all([Qr.e(235).then((() => Qr(35587))), null !== (rr = null === (Sr = (Zr = this.host).maxTextureSize) || void 0 === Sr ? void 0 : Sr.call(Zr)) && void 0 !== rr ? rr : null]);
          return Nr(ar, jr.imagesPerAtlas.length * Math.max(0, ...jr.imagesPerAtlas), Ir)
        })().catch((rr => {
          throw this.maxWidth = null, rr
        })), this.maxWidth
      }
      files() {
        return Yr(this.assets, this.owner)
      }
      start() {
        let rr = null;
        const Sr = this.host.feed.subscribe((Sr => {
          const Qr = ++this.latest,
            Zr = null !== Sr.gameSource ? "game" : null !== rr && null !== rr.gameSource ? "join" : "page";
          rr = Sr, this.host.settling(), this.assetsFor(Sr).then((rr => this.apply(Qr, rr, Sr, Zr).catch((rr => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", rr)
          }))), (rr => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", rr), this.settled(Qr, Sr, null, {
              error: rr,
              source: Zr
            })
          }))
        }));
        return () => {
          Sr(), this.latest++, this.ended = !0
        }
      }
      async apply(rr, Sr, Qr, Zr) {
        const {
          host: Wr
        } = this;
        if (rr !== this.latest || Wr.stopped()) return;
        const ar = (0, Ir.j)(Qr);
        if (this.texturesIn(Sr, ar) && 0 === this.swapping) return void this.settled(rr, Qr, Yr(Sr, ar));
        let jr;
        this.swapping++;
        let Er = null;
        try {
          jr = await Wr.terrain.swap((rr => {
            var Sr;
            Wr.warn(`texture pack texture ${null!==(Sr=rr.name)&&void 0!==Sr?Sr:"(all)"} failed`, rr.error), null !== rr.name && null === (0, fr.k)(rr.name) || (Er = rr.error)
          }), (async () => Wr.sourcesOf ? Wr.sourcesOf(Sr) : null === Sr ? (0, fr.o)() : hr(Sr, await this.maxLayerWidth(), ar)), {
            wholeAtlas: null !== Sr,
            wanted: () => rr === this.latest
          })
        } catch (pr) {
          return Wr.warn("the texture pack's swap failed: the textures in stay", pr), void this.settled(rr, Qr, null, {
            error: pr,
            source: Zr
          })
        } finally {
          this.swapping--
        }
        if (!0 !== jr || this.ended) this.settled(rr, Qr, null, {
          error: Er,
          source: Zr
        });
        else {
          Wr.landed(), this.assets = Sr, this.owner = ar;
          try {
            Wr.packSwapped()
          } finally {
            this.settled(rr, Qr, this.files())
          }
        }
      }
      async assetsFor(rr) {
        var Sr;
        return (null !== (Sr = this.host.assetsOf) && void 0 !== Sr ? Sr : Er.i)(rr, await this.maxLayerWidth())
      }
      texturesIn(rr, Sr) {
        return rr === this.assets && (null === rr || Sr === this.owner)
      }
      settled(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        rr !== this.latest || this.ended || this.host.stopped() || this.host.settled(Sr, Qr, Zr)
      }
    }
  },
  55179: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      followPagePackFiles: () => ar
    });
    var Zr = Qr(55164),
      Wr = Qr(55176);

    function ar(rr, Sr, Qr, ar, jr) {
      let Ir, fr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : rr => (0, Wr.i)(rr, (0, Zr.deviceMaxLayerWidth)(Qr)),
        Er = 0,
        pr = null;
      const xr = () => {
          if (null === pr || null !== pr.gameSource && !Sr.showsPage()) return;
          const Qr = null === pr.gameSource ? pr : rr.playerState();
          if (Qr.pack === Ir) return;
          Ir = Qr.pack;
          const Wr = ++Er;
          fr(Qr).then((rr => {
            Wr === Er && ar((0, Zr.packFilesOf)(rr, "player"))
          }), (rr => {
            Wr === Er && (Ir = void 0), jr("the texture pack's files couldn't be had for the previews: the files in stay", rr)
          }))
        },
        mr = rr.subscribe((rr => {
          pr = rr, xr()
        })),
        Nr = rr.onPlayerPackChange(xr),
        Ur = Sr.onPageShown(xr);
      return () => {
        mr(), Nr(), Ur(), Er++
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);