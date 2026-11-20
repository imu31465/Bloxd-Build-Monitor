export const id = 45;
export const ids = [45];
export const modules = {
  42713: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      MAX_LAYER_WIDTH: () => Nv,
      PackTextures: () => cv,
      deviceMaxLayerWidth: () => lv,
      layerWidthFor: () => wv,
      packFileUrl: () => av,
      packFilesOf: () => iv,
      packTerrainSources: () => sv,
      webgl1GridColumns: () => Tv,
      webgl1LayerWidth: () => Wv
    });
    var hv = Pv(2904),
      Sv = Pv(40084),
      ev = Pv(40292),
      gv = Pv(42716),
      pv = Pv(40282),
      dv = Pv(42720);
    const Nv = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function lv(vv) {
      return (0, hv.d)() ? Math.min(Nv[vv], 64) : Nv[vv]
    }

    function Tv(vv) {
      const zv = Math.ceil(Math.log2(Math.max(1, vv)));
      return 2 ** Math.ceil(zv / 2)
    }

    function Wv(vv, zv, Pv) {
      const hv = null !== Pv && Pv > 0 ? Pv : Sv.b.limits.MAX_TEXTURE_SIZE;
      return wv(Math.max(1, Math.floor(hv / Tv(zv))), vv)
    }

    function wv(vv, zv) {
      let Pv = 1;
      for (; 2 * Pv <= Math.min(vv, zv);) Pv *= 2;
      return Pv
    }

    function av(vv, zv) {
      return "string" !== typeof vv || "" === vv ? null : "player" === zv || (0, gv.e)(vv) ? vv : null
    }
    async function sv(vv, zv, hv) {
      const Sv = await Pv.e(201).then((() => Pv(33871))),
        {
          sheetLayout: gv,
          sheetWidth: dv
        } = vv;
      if (dv > zv) throw new Error(`the pack's atlas is ${dv} px wide, not within ${zv} px`);
      if (!(gv.length === Sv.imagesPerAtlas.length && gv.every(((vv, zv) => vv === Sv.imagesPerAtlas[zv])))) {
        const vv = `the pack's atlas is sheets of ${gv.join(", ")} layers, the built atlas's ${Sv.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (gv.length < Sv.imagesPerAtlas.length) throw new Error(vv);
        console.warn(vv)
      }
      return {
        atlasSheets: [],
        heldUntil: vv.heldUntil,
        texture: zv => {
          var Pv, gv, pv;
          return null !== (Pv = null !== (gv = null !== (pv = av(vv.terrain.texture(zv), hv)) && void 0 !== pv ? pv : Sv.animatedBlockTextures[zv]) && void 0 !== gv ? gv : Sv.rotatedBlockTextures[zv]) && void 0 !== Pv ? Pv : function(vv, zv, Pv) {
            var hv, Sv;
            const gv = null !== (hv = ev.c[vv]) && void 0 !== hv ? hv : null;
            return null === gv ? null : null !== (Sv = av(zv.texture(vv), Pv)) && void 0 !== Sv ? Sv : gv
          }(zv, vv, hv)
        },
        decoded: zv => {
          const Pv = (0, pv.i)(zv);
          return null === Pv ? null : (async zv => {
            const Pv = vv.sheetPixels.at(zv);
            if (Pv) {
              vv.sheetPixels[zv] = null;
              const hv = dv > 0 ? Pv.byteLength / (4 * dv) : 0;
              return {
                width: dv,
                height: hv,
                pixels: new Uint8Array(Pv.buffer, Pv.byteOffset, Pv.byteLength)
              }
            }
            const Sv = vv.terrain.atlasSheets.at(zv);
            if (void 0 === Sv) throw new Error(`the pack has no atlas sheet ${zv}`);
            const ev = av(Sv, hv);
            if (null === ev) throw new Error(`the pack's atlas sheet ${zv} isn't a pack file`);
            return (0, pv.o)(ev)
          })(Pv)
        }
      }
    }
    const Cv = new WeakMap;

    function iv(vv, zv) {
      if (null === vv) return null;
      let Pv = Cv.get(vv);
      void 0 === Pv && (Pv = {}, Cv.set(vv, Pv));
      const hv = Pv[zv];
      if (void 0 !== hv) return hv;
      const {
        armourAtlasUrl: Sv,
        texture: ev,
        model: gv
      } = vv, pv = {
        armourAtlasUrl: () => av(Sv, zv),
        textureUrl: vv => av(ev(vv), zv),
        modelUrl: vv => av(gv(vv), zv)
      };
      return Pv[zv] = pv, pv
    }
    class cv {
      constructor(vv) {
        this.host = vv, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (vv, zv, hv) => {
          const {
            backend: Sv
          } = this.host, ev = lv(Sv);
          if ("webgl1" !== Sv) return ev;
          const [gv, pv] = await Promise.all([Pv.e(201).then((() => Pv(33871))), null !== (vv = null === (zv = (hv = this.host).maxTextureSize) || void 0 === zv ? void 0 : zv.call(hv)) && void 0 !== vv ? vv : null]);
          return Wv(ev, gv.imagesPerAtlas.length * Math.max(0, ...gv.imagesPerAtlas), pv)
        })().catch((vv => {
          throw this.maxWidth = null, vv
        })), this.maxWidth
      }
      files() {
        return iv(this.assets, this.owner)
      }
      start() {
        const vv = this.host.feed.subscribe((vv => {
          const zv = ++this.latest;
          this.host.settling(), this.assetsFor(vv).then((Pv => this.apply(zv, Pv, vv).catch((vv => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", vv)
          }))), (Pv => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", Pv), this.settled(zv, vv, null, !0)
          }))
        }));
        return () => {
          vv(), this.latest++, this.ended = !0
        }
      }
      async apply(vv, zv, Pv) {
        const {
          host: hv
        } = this;
        if (vv !== this.latest || hv.stopped()) return;
        const Sv = (0, gv.m)(Pv);
        if (this.texturesIn(zv, Sv) && 0 === this.swapping) return void this.settled(vv, Pv, iv(zv, Sv));
        let ev;
        this.swapping++;
        try {
          ev = await hv.terrain.swap((vv => {
            var zv;
            hv.warn(`texture pack texture ${null!==(zv=vv.name)&&void 0!==zv?zv:"(all)"} failed`, vv.error)
          }), (async () => hv.sourcesOf ? hv.sourcesOf(zv) : null === zv ? (0, pv.m)() : sv(zv, await this.maxLayerWidth(), Sv)), {
            wholeAtlas: null !== zv,
            wanted: () => vv === this.latest
          })
        } catch (dv) {
          return hv.warn("the texture pack's swap failed: the textures in stay", dv), void this.settled(vv, Pv, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== ev || this.ended) this.settled(vv, Pv, null, !0);
        else {
          hv.landed(), this.assets = zv, this.owner = Sv;
          try {
            hv.packSwapped()
          } finally {
            this.settled(vv, Pv, this.files())
          }
        }
      }
      async assetsFor(vv) {
        var zv;
        return (null !== (zv = this.host.assetsOf) && void 0 !== zv ? zv : dv.j)(vv, await this.maxLayerWidth())
      }
      texturesIn(vv, zv) {
        return vv === this.assets && (null === vv || zv === this.owner)
      }
      settled(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        vv !== this.latest || this.ended || this.host.stopped() || this.host.settled(zv, Pv, hv)
      }
    }
  },
  42725: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      followPagePackFiles: () => ev
    });
    var hv = Pv(42713),
      Sv = Pv(42720);

    function ev(vv, zv, Pv, ev, gv) {
      let pv, dv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : vv => (0, Sv.j)(vv, (0, hv.deviceMaxLayerWidth)(Pv)),
        Nv = 0,
        lv = null;
      const Tv = () => {
          if (null === lv || null !== lv.gameSource && !zv.showsPage()) return;
          const Pv = null === lv.gameSource ? lv : vv.playerState();
          if (Pv.pack === pv) return;
          pv = Pv.pack;
          const Sv = ++Nv;
          dv(Pv).then((vv => {
            Sv === Nv && ev((0, hv.packFilesOf)(vv, "player"))
          }), (vv => {
            Sv === Nv && (pv = void 0), gv("the texture pack's files couldn't be had for the previews: the files in stay", vv)
          }))
        },
        Wv = vv.subscribe((vv => {
          lv = vv, Tv()
        })),
        wv = vv.onPlayerPackChange(Tv),
        av = zv.onPageShown(Tv);
      return () => {
        Wv(), wv(), av(), Nv++
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);