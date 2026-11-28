export const id = 54;
export const ids = [54];
export const modules = {
  55085: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      MAX_LAYER_WIDTH: () => Qd,
      PackTextures: () => pd,
      deviceMaxLayerWidth: () => td,
      layerWidthFor: () => qd,
      packFileUrl: () => Hd,
      packFilesOf: () => Td,
      packTerrainSources: () => yd,
      webgl1GridColumns: () => od,
      webgl1LayerWidth: () => Nd
    });
    var Wd = md(5043),
      Fd = md(3984),
      Rd = md(42661),
      Xd = md(42804),
      Kd = md(55093),
      hd = md(42797),
      vd = md(55102);
    const Qd = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function td(dd) {
      return (0, Fd.b)() || (0, Wd.o)() ? Math.min(Qd[dd], 64) : Qd[dd]
    }

    function od(dd) {
      const Od = Math.ceil(Math.log2(Math.max(1, dd)));
      return 2 ** Math.ceil(Od / 2)
    }

    function Nd(dd, Od, md) {
      const Wd = null !== md && md > 0 ? md : Rd.b.limits.MAX_TEXTURE_SIZE;
      return qd(Math.max(1, Math.floor(Wd / od(Od))), dd)
    }

    function qd(dd, Od) {
      let md = 1;
      for (; 2 * md <= Math.min(dd, Od);) md *= 2;
      return md
    }

    function Hd(dd, Od) {
      return "string" !== typeof dd || "" === dd ? null : "player" === Od || (0, Kd.e)(dd) ? dd : null
    }
    async function yd(dd, Od, Wd) {
      const Fd = await md.e(235).then((() => md(35669))),
        {
          sheetLayout: Rd,
          sheetWidth: Kd
        } = dd;
      if (Kd > Od) throw new Error(`the pack's atlas is ${Kd} px wide, not within ${Od} px`);
      if (!(Rd.length === Fd.imagesPerAtlas.length && Rd.every(((dd, Od) => dd === Fd.imagesPerAtlas[Od])))) {
        const dd = `the pack's atlas is sheets of ${Rd.join(", ")} layers, the built atlas's ${Fd.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Rd.length < Fd.imagesPerAtlas.length) throw new Error(dd);
        console.warn(dd)
      }
      return {
        atlasSheets: [],
        heldUntil: dd.heldUntil,
        texture: Od => {
          var md, Rd, Kd;
          return null !== (md = null !== (Rd = null !== (Kd = Hd(dd.terrain.texture(Od), Wd)) && void 0 !== Kd ? Kd : Fd.animatedBlockTextures[Od]) && void 0 !== Rd ? Rd : Fd.rotatedBlockTextures[Od]) && void 0 !== md ? md : function(dd, Od, md) {
            var Wd, Fd;
            const Rd = null !== (Wd = Xd.b[dd]) && void 0 !== Wd ? Wd : null;
            return null === Rd ? null : null !== (Fd = Hd(Od.texture(dd), md)) && void 0 !== Fd ? Fd : Rd
          }(Od, dd, Wd)
        },
        decoded: Od => {
          const md = (0, hd.i)(Od);
          return null === md ? null : (async Od => {
            const md = dd.sheetPixels.at(Od);
            if (md) {
              dd.sheetPixels[Od] = null;
              const Wd = Kd > 0 ? md.byteLength / (4 * Kd) : 0;
              return {
                width: Kd,
                height: Wd,
                pixels: new Uint8Array(md.buffer, md.byteOffset, md.byteLength)
              }
            }
            const Fd = dd.terrain.atlasSheets.at(Od);
            if (void 0 === Fd) throw new Error(`the pack has no atlas sheet ${Od}`);
            const Rd = Hd(Fd, Wd);
            if (null === Rd) throw new Error(`the pack's atlas sheet ${Od} isn't a pack file`);
            return (0, hd.m)(Rd)
          })(md)
        }
      }
    }
    const bd = new WeakMap;

    function Td(dd, Od) {
      if (null === dd) return null;
      let md = bd.get(dd);
      void 0 === md && (md = {}, bd.set(dd, md));
      const Wd = md[Od];
      if (void 0 !== Wd) return Wd;
      const {
        armourAtlasUrl: Fd,
        texture: Rd,
        model: Xd
      } = dd, Kd = {
        armourAtlasUrl: () => Hd(Fd, Od),
        textureUrl: dd => Hd(Rd(dd), Od),
        modelUrl: dd => Hd(Xd(dd), Od)
      };
      return md[Od] = Kd, Kd
    }
    class pd {
      constructor(dd) {
        this.host = dd, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (dd, Od, Wd) => {
          const {
            backend: Fd
          } = this.host, Rd = td(Fd);
          if ("webgl1" !== Fd) return Rd;
          const [Xd, Kd] = await Promise.all([md.e(235).then((() => md(35669))), null !== (dd = null === (Od = (Wd = this.host).maxTextureSize) || void 0 === Od ? void 0 : Od.call(Wd)) && void 0 !== dd ? dd : null]);
          return Nd(Rd, Xd.imagesPerAtlas.length * Math.max(0, ...Xd.imagesPerAtlas), Kd)
        })().catch((dd => {
          throw this.maxWidth = null, dd
        })), this.maxWidth
      }
      files() {
        return Td(this.assets, this.owner)
      }
      start() {
        let dd = null;
        const Od = this.host.feed.subscribe((Od => {
          const md = ++this.latest,
            Wd = null !== Od.gameSource ? "game" : null !== dd && null !== dd.gameSource ? "join" : "page";
          dd = Od, this.host.settling(), this.assetsFor(Od).then((dd => this.apply(md, dd, Od, Wd).catch((dd => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", dd)
          }))), (dd => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", dd), this.settled(md, Od, null, {
              error: dd,
              source: Wd
            })
          }))
        }));
        return () => {
          Od(), this.latest++, this.ended = !0
        }
      }
      async apply(dd, Od, md, Wd) {
        const {
          host: Fd
        } = this;
        if (dd !== this.latest || Fd.stopped()) return;
        const Rd = (0, Kd.i)(md);
        if (this.texturesIn(Od, Rd) && 0 === this.swapping) return void this.settled(dd, md, Td(Od, Rd));
        let Xd;
        this.swapping++;
        let vd = null;
        try {
          Xd = await Fd.terrain.swap((dd => {
            var Od;
            Fd.warn(`texture pack texture ${null!==(Od=dd.name)&&void 0!==Od?Od:"(all)"} failed`, dd.error), null !== dd.name && null === (0, hd.i)(dd.name) || (vd = dd.error)
          }), (async () => Fd.sourcesOf ? Fd.sourcesOf(Od) : null === Od ? (0, hd.l)() : yd(Od, await this.maxLayerWidth(), Rd)), {
            wholeAtlas: null !== Od,
            wanted: () => dd === this.latest
          })
        } catch (Qd) {
          return Fd.warn("the texture pack's swap failed: the textures in stay", Qd), void this.settled(dd, md, null, {
            error: Qd,
            source: Wd
          })
        } finally {
          this.swapping--
        }
        if (!0 !== Xd || this.ended) this.settled(dd, md, null, {
          error: vd,
          source: Wd
        });
        else {
          Fd.landed(), this.assets = Od, this.owner = Rd;
          try {
            Fd.packSwapped()
          } finally {
            this.settled(dd, md, this.files())
          }
        }
      }
      async assetsFor(dd) {
        var Od;
        return (null !== (Od = this.host.assetsOf) && void 0 !== Od ? Od : vd.j)(dd, await this.maxLayerWidth())
      }
      texturesIn(dd, Od) {
        return dd === this.assets && (null === dd || Od === this.owner)
      }
      settled(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        dd !== this.latest || this.ended || this.host.stopped() || this.host.settled(Od, md, Wd)
      }
    }
  },
  55111: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      followPagePackFiles: () => Rd
    });
    var Wd = md(55085),
      Fd = md(55102);

    function Rd(dd, Od, md, Rd, Xd) {
      let Kd, hd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd => (0, Fd.j)(dd, (0, Wd.deviceMaxLayerWidth)(md)),
        vd = 0,
        Qd = null;
      const td = () => {
          if (null === Qd || null !== Qd.gameSource && !Od.showsPage()) return;
          const md = null === Qd.gameSource ? Qd : dd.playerState();
          if (md.pack === Kd) return;
          Kd = md.pack;
          const Fd = ++vd;
          hd(md).then((dd => {
            Fd === vd && Rd((0, Wd.packFilesOf)(dd, "player"))
          }), (dd => {
            Fd === vd && (Kd = void 0), Xd("the texture pack's files couldn't be had for the previews: the files in stay", dd)
          }))
        },
        od = dd.subscribe((dd => {
          Qd = dd, td()
        })),
        Nd = dd.onPlayerPackChange(td),
        qd = Od.onPageShown(td);
      return () => {
        od(), Nd(), qd(), vd++
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);