export const id = 45;
export const ids = [45];
export const modules = {
  43245: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      MAX_LAYER_WIDTH: () => Cd,
      PackTextures: () => Id,
      deviceMaxLayerWidth: () => Kd,
      layerWidthFor: () => Qd,
      packFileUrl: () => Ld,
      packFilesOf: () => Rd,
      packTerrainSources: () => Od,
      webgl1GridColumns: () => od,
      webgl1LayerWidth: () => ld
    });
    var pd = kd(2980),
      Nd = kd(40775),
      Wd = kd(40991),
      Pd = kd(43247),
      Zd = kd(40986),
      gd = kd(43253);
    const Cd = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Kd(dd) {
      return (0, pd.e)() ? Math.min(Cd[dd], 64) : Cd[dd]
    }

    function od(dd) {
      const Jd = Math.ceil(Math.log2(Math.max(1, dd)));
      return 2 ** Math.ceil(Jd / 2)
    }

    function ld(dd, Jd, kd) {
      const pd = null !== kd && kd > 0 ? kd : Nd.d.limits.MAX_TEXTURE_SIZE;
      return Qd(Math.max(1, Math.floor(pd / od(Jd))), dd)
    }

    function Qd(dd, Jd) {
      let kd = 1;
      for (; 2 * kd <= Math.min(dd, Jd);) kd *= 2;
      return kd
    }

    function Ld(dd, Jd) {
      return "string" !== typeof dd || "" === dd ? null : "player" === Jd || (0, Pd.c)(dd) ? dd : null
    }
    async function Od(dd, Jd, pd) {
      const Nd = await kd.e(202).then((() => kd(34385))),
        {
          sheetLayout: Pd,
          sheetWidth: gd
        } = dd;
      if (gd > Jd) throw new Error(`the pack's atlas is ${gd} px wide, not within ${Jd} px`);
      if (!(Pd.length === Nd.imagesPerAtlas.length && Pd.every(((dd, Jd) => dd === Nd.imagesPerAtlas[Jd])))) {
        const dd = `the pack's atlas is sheets of ${Pd.join(", ")} layers, the built atlas's ${Nd.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Pd.length < Nd.imagesPerAtlas.length) throw new Error(dd);
        console.warn(dd)
      }
      return {
        atlasSheets: [],
        heldUntil: dd.heldUntil,
        texture: Jd => {
          var kd, Pd, Zd;
          return null !== (kd = null !== (Pd = null !== (Zd = Ld(dd.terrain.texture(Jd), pd)) && void 0 !== Zd ? Zd : Nd.animatedBlockTextures[Jd]) && void 0 !== Pd ? Pd : Nd.rotatedBlockTextures[Jd]) && void 0 !== kd ? kd : function(dd, Jd, kd) {
            var pd, Nd;
            const Pd = null !== (pd = Wd.b[dd]) && void 0 !== pd ? pd : null;
            return null === Pd ? null : null !== (Nd = Ld(Jd.texture(dd), kd)) && void 0 !== Nd ? Nd : Pd
          }(Jd, dd, pd)
        },
        decoded: Jd => {
          const kd = (0, Zd.i)(Jd);
          return null === kd ? null : (async Jd => {
            const kd = dd.sheetPixels.at(Jd);
            if (kd) {
              dd.sheetPixels[Jd] = null;
              const pd = gd > 0 ? kd.byteLength / (4 * gd) : 0;
              return {
                width: gd,
                height: pd,
                pixels: new Uint8Array(kd.buffer, kd.byteOffset, kd.byteLength)
              }
            }
            const Nd = dd.terrain.atlasSheets.at(Jd);
            if (void 0 === Nd) throw new Error(`the pack has no atlas sheet ${Jd}`);
            const Wd = Ld(Nd, pd);
            if (null === Wd) throw new Error(`the pack's atlas sheet ${Jd} isn't a pack file`);
            return (0, Zd.q)(Wd)
          })(kd)
        }
      }
    }
    const ed = new WeakMap;

    function Rd(dd, Jd) {
      if (null === dd) return null;
      let kd = ed.get(dd);
      void 0 === kd && (kd = {}, ed.set(dd, kd));
      const pd = kd[Jd];
      if (void 0 !== pd) return pd;
      const {
        armourAtlasUrl: Nd,
        texture: Wd,
        model: Pd
      } = dd, Zd = {
        armourAtlasUrl: () => Ld(Nd, Jd),
        textureUrl: dd => Ld(Wd(dd), Jd),
        modelUrl: dd => Ld(Pd(dd), Jd)
      };
      return kd[Jd] = Zd, Zd
    }
    class Id {
      constructor(dd) {
        this.host = dd, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (dd, Jd, pd) => {
          const {
            backend: Nd
          } = this.host, Wd = Kd(Nd);
          if ("webgl1" !== Nd) return Wd;
          const [Pd, Zd] = await Promise.all([kd.e(202).then((() => kd(34385))), null !== (dd = null === (Jd = (pd = this.host).maxTextureSize) || void 0 === Jd ? void 0 : Jd.call(pd)) && void 0 !== dd ? dd : null]);
          return ld(Wd, Pd.imagesPerAtlas.length * Math.max(0, ...Pd.imagesPerAtlas), Zd)
        })().catch((dd => {
          throw this.maxWidth = null, dd
        })), this.maxWidth
      }
      files() {
        return Rd(this.assets, this.owner)
      }
      start() {
        const dd = this.host.feed.subscribe((dd => {
          const Jd = ++this.latest;
          this.host.settling(), this.assetsFor(dd).then((kd => this.apply(Jd, kd, dd).catch((dd => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", dd)
          }))), (kd => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", kd), this.settled(Jd, dd, null, !0)
          }))
        }));
        return () => {
          dd(), this.latest++, this.ended = !0
        }
      }
      async apply(dd, Jd, kd) {
        const {
          host: pd
        } = this;
        if (dd !== this.latest || pd.stopped()) return;
        const Nd = (0, Pd.h)(kd);
        if (this.texturesIn(Jd, Nd) && 0 === this.swapping) return void this.settled(dd, kd, Rd(Jd, Nd));
        let Wd;
        this.swapping++;
        try {
          Wd = await pd.terrain.swap((dd => {
            var Jd;
            pd.warn(`texture pack texture ${null!==(Jd=dd.name)&&void 0!==Jd?Jd:"(all)"} failed`, dd.error)
          }), (async () => pd.sourcesOf ? pd.sourcesOf(Jd) : null === Jd ? (0, Zd.m)() : Od(Jd, await this.maxLayerWidth(), Nd)), {
            wholeAtlas: null !== Jd,
            wanted: () => dd === this.latest
          })
        } catch (gd) {
          return pd.warn("the texture pack's swap failed: the textures in stay", gd), void this.settled(dd, kd, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== Wd || this.ended) this.settled(dd, kd, null, !0);
        else {
          pd.landed(), this.assets = Jd, this.owner = Nd;
          try {
            pd.packSwapped()
          } finally {
            this.settled(dd, kd, this.files())
          }
        }
      }
      async assetsFor(dd) {
        var Jd;
        return (null !== (Jd = this.host.assetsOf) && void 0 !== Jd ? Jd : gd.l)(dd, await this.maxLayerWidth())
      }
      texturesIn(dd, Jd) {
        return dd === this.assets && (null === dd || Jd === this.owner)
      }
      settled(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        dd !== this.latest || this.ended || this.host.stopped() || this.host.settled(Jd, kd, pd)
      }
    }
  },
  43259: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      followPagePackFiles: () => Wd
    });
    var pd = kd(43245),
      Nd = kd(43253);

    function Wd(dd, Jd, kd, Wd, Pd) {
      let Zd, gd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd => (0, Nd.l)(dd, (0, pd.deviceMaxLayerWidth)(kd)),
        Cd = 0,
        Kd = null;
      const od = () => {
          if (null === Kd || null !== Kd.gameSource && !Jd.showsPage()) return;
          const kd = null === Kd.gameSource ? Kd : dd.playerState();
          if (kd.pack === Zd) return;
          Zd = kd.pack;
          const Nd = ++Cd;
          gd(kd).then((dd => {
            Nd === Cd && Wd((0, pd.packFilesOf)(dd, "player"))
          }), (dd => {
            Nd === Cd && (Zd = void 0), Pd("the texture pack's files couldn't be had for the previews: the files in stay", dd)
          }))
        },
        ld = dd.subscribe((dd => {
          Kd = dd, od()
        })),
        Qd = dd.onPlayerPackChange(od),
        Ld = Jd.onPageShown(od);
      return () => {
        ld(), Qd(), Ld(), Cd++
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);