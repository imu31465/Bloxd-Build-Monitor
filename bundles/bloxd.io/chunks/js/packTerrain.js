export const id = 45;
export const ids = [45];
export const modules = {
  50989: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      MAX_LAYER_WIDTH: () => im,
      PackTextures: () => Vm,
      deviceMaxLayerWidth: () => Rm,
      layerWidthFor: () => om,
      packFileUrl: () => Om,
      packFilesOf: () => jm,
      packTerrainSources: () => Ym,
      webgl1GridColumns: () => pm,
      webgl1LayerWidth: () => Em
    });
    var hm = fm(3117),
      Am = fm(40798),
      am = fm(40905),
      xm = fm(50992),
      wm = fm(40887),
      Dm = fm(51e3);
    const im = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Rm(mm) {
      return (0, hm.e)() ? Math.min(im[mm], 64) : im[mm]
    }

    function pm(mm) {
      const Tm = Math.ceil(Math.log2(Math.max(1, mm)));
      return 2 ** Math.ceil(Tm / 2)
    }

    function Em(mm, Tm, fm) {
      const hm = null !== fm && fm > 0 ? fm : Am.e.limits.MAX_TEXTURE_SIZE;
      return om(Math.max(1, Math.floor(hm / pm(Tm))), mm)
    }

    function om(mm, Tm) {
      let fm = 1;
      for (; 2 * fm <= Math.min(mm, Tm);) fm *= 2;
      return fm
    }

    function Om(mm, Tm) {
      return "string" !== typeof mm || "" === mm ? null : "player" === Tm || (0, xm.d)(mm) ? mm : null
    }
    async function Ym(mm, Tm, hm) {
      const Am = await fm.e(204).then((() => fm(34376))),
        {
          sheetLayout: xm,
          sheetWidth: Dm
        } = mm;
      if (Dm > Tm) throw new Error(`the pack's atlas is ${Dm} px wide, not within ${Tm} px`);
      if (!(xm.length === Am.imagesPerAtlas.length && xm.every(((mm, Tm) => mm === Am.imagesPerAtlas[Tm])))) {
        const mm = `the pack's atlas is sheets of ${xm.join(", ")} layers, the built atlas's ${Am.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (xm.length < Am.imagesPerAtlas.length) throw new Error(mm);
        console.warn(mm)
      }
      return {
        atlasSheets: [],
        heldUntil: mm.heldUntil,
        texture: Tm => {
          var fm, xm, wm;
          return null !== (fm = null !== (xm = null !== (wm = Om(mm.terrain.texture(Tm), hm)) && void 0 !== wm ? wm : Am.animatedBlockTextures[Tm]) && void 0 !== xm ? xm : Am.rotatedBlockTextures[Tm]) && void 0 !== fm ? fm : function(mm, Tm, fm) {
            var hm, Am;
            const xm = null !== (hm = am.e[mm]) && void 0 !== hm ? hm : null;
            return null === xm ? null : null !== (Am = Om(Tm.texture(mm), fm)) && void 0 !== Am ? Am : xm
          }(Tm, mm, hm)
        },
        decoded: Tm => {
          const fm = (0, wm.d)(Tm);
          return null === fm ? null : (async Tm => {
            const fm = mm.sheetPixels.at(Tm);
            if (fm) {
              mm.sheetPixels[Tm] = null;
              const hm = Dm > 0 ? fm.byteLength / (4 * Dm) : 0;
              return {
                width: Dm,
                height: hm,
                pixels: new Uint8Array(fm.buffer, fm.byteOffset, fm.byteLength)
              }
            }
            const Am = mm.terrain.atlasSheets.at(Tm);
            if (void 0 === Am) throw new Error(`the pack has no atlas sheet ${Tm}`);
            const am = Om(Am, hm);
            if (null === am) throw new Error(`the pack's atlas sheet ${Tm} isn't a pack file`);
            return (0, wm.i)(am)
          })(fm)
        }
      }
    }
    const qm = new WeakMap;

    function jm(mm, Tm) {
      if (null === mm) return null;
      let fm = qm.get(mm);
      void 0 === fm && (fm = {}, qm.set(mm, fm));
      const hm = fm[Tm];
      if (void 0 !== hm) return hm;
      const {
        armourAtlasUrl: Am,
        texture: am,
        model: xm
      } = mm, wm = {
        armourAtlasUrl: () => Om(Am, Tm),
        textureUrl: mm => Om(am(mm), Tm),
        modelUrl: mm => Om(xm(mm), Tm)
      };
      return fm[Tm] = wm, wm
    }
    class Vm {
      constructor(mm) {
        this.host = mm, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (mm, Tm, hm) => {
          const {
            backend: Am
          } = this.host, am = Rm(Am);
          if ("webgl1" !== Am) return am;
          const [xm, wm] = await Promise.all([fm.e(204).then((() => fm(34376))), null !== (mm = null === (Tm = (hm = this.host).maxTextureSize) || void 0 === Tm ? void 0 : Tm.call(hm)) && void 0 !== mm ? mm : null]);
          return Em(am, xm.imagesPerAtlas.length * Math.max(0, ...xm.imagesPerAtlas), wm)
        })().catch((mm => {
          throw this.maxWidth = null, mm
        })), this.maxWidth
      }
      files() {
        return jm(this.assets, this.owner)
      }
      start() {
        let mm = null;
        const Tm = this.host.feed.subscribe((Tm => {
          const fm = ++this.latest,
            hm = null !== Tm.gameSource ? "game" : null !== mm && null !== mm.gameSource ? "join" : "page";
          mm = Tm, this.host.settling(), this.assetsFor(Tm).then((mm => this.apply(fm, mm, Tm, hm).catch((mm => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", mm)
          }))), (mm => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", mm), this.settled(fm, Tm, null, {
              error: mm,
              source: hm
            })
          }))
        }));
        return () => {
          Tm(), this.latest++, this.ended = !0
        }
      }
      async apply(mm, Tm, fm, hm) {
        const {
          host: Am
        } = this;
        if (mm !== this.latest || Am.stopped()) return;
        const am = (0, xm.l)(fm);
        if (this.texturesIn(Tm, am) && 0 === this.swapping) return void this.settled(mm, fm, jm(Tm, am));
        let Dm;
        this.swapping++;
        let im = null;
        try {
          Dm = await Am.terrain.swap((mm => {
            var Tm;
            Am.warn(`texture pack texture ${null!==(Tm=mm.name)&&void 0!==Tm?Tm:"(all)"} failed`, mm.error), null !== mm.name && null === (0, wm.d)(mm.name) || (im = mm.error)
          }), (async () => Am.sourcesOf ? Am.sourcesOf(Tm) : null === Tm ? (0, wm.h)() : Ym(Tm, await this.maxLayerWidth(), am)), {
            wholeAtlas: null !== Tm,
            wanted: () => mm === this.latest
          })
        } catch (Rm) {
          return Am.warn("the texture pack's swap failed: the textures in stay", Rm), void this.settled(mm, fm, null, {
            error: Rm,
            source: hm
          })
        } finally {
          this.swapping--
        }
        if (!0 !== Dm || this.ended) this.settled(mm, fm, null, {
          error: im,
          source: hm
        });
        else {
          Am.landed(), this.assets = Tm, this.owner = am;
          try {
            Am.packSwapped()
          } finally {
            this.settled(mm, fm, this.files())
          }
        }
      }
      async assetsFor(mm) {
        var Tm;
        return (null !== (Tm = this.host.assetsOf) && void 0 !== Tm ? Tm : Dm.e)(mm, await this.maxLayerWidth())
      }
      texturesIn(mm, Tm) {
        return mm === this.assets && (null === mm || Tm === this.owner)
      }
      settled(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        mm !== this.latest || this.ended || this.host.stopped() || this.host.settled(Tm, fm, hm)
      }
    }
  },
  51008: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      followPagePackFiles: () => am
    });
    var hm = fm(50989),
      Am = fm(51e3);

    function am(mm, Tm, fm, am, xm) {
      let wm, Dm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mm => (0, Am.e)(mm, (0, hm.deviceMaxLayerWidth)(fm)),
        im = 0,
        Rm = null;
      const pm = () => {
          if (null === Rm || null !== Rm.gameSource && !Tm.showsPage()) return;
          const fm = null === Rm.gameSource ? Rm : mm.playerState();
          if (fm.pack === wm) return;
          wm = fm.pack;
          const Am = ++im;
          Dm(fm).then((mm => {
            Am === im && am((0, hm.packFilesOf)(mm, "player"))
          }), (mm => {
            Am === im && (wm = void 0), xm("the texture pack's files couldn't be had for the previews: the files in stay", mm)
          }))
        },
        Em = mm.subscribe((mm => {
          Rm = mm, pm()
        })),
        om = mm.onPlayerPackChange(pm),
        Om = Tm.onPageShown(pm);
      return () => {
        Em(), om(), Om(), im++
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);