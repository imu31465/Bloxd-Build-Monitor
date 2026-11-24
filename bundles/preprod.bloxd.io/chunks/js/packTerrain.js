export const id = 46;
export const ids = [46];
export const modules = {
  51218: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      MAX_LAYER_WIDTH: () => Yp,
      PackTextures: () => tp,
      deviceMaxLayerWidth: () => Dp,
      layerWidthFor: () => Wp,
      packFileUrl: () => yp,
      packFilesOf: () => vp,
      packTerrainSources: () => Up,
      webgl1GridColumns: () => Ap,
      webgl1LayerWidth: () => Pp
    });
    var Op = cp(3211),
      op = cp(40920),
      Ip = cp(41016),
      Sp = cp(51220),
      xp = cp(41008),
      Lp = cp(51229);
    const Yp = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Dp(pp) {
      return (0, Op.b)() ? Math.min(Yp[pp], 64) : Yp[pp]
    }

    function Ap(pp) {
      const ip = Math.ceil(Math.log2(Math.max(1, pp)));
      return 2 ** Math.ceil(ip / 2)
    }

    function Pp(pp, ip, cp) {
      const Op = null !== cp && cp > 0 ? cp : op.d.limits.MAX_TEXTURE_SIZE;
      return Wp(Math.max(1, Math.floor(Op / Ap(ip))), pp)
    }

    function Wp(pp, ip) {
      let cp = 1;
      for (; 2 * cp <= Math.min(pp, ip);) cp *= 2;
      return cp
    }

    function yp(pp, ip) {
      return "string" !== typeof pp || "" === pp ? null : "player" === ip || (0, Sp.e)(pp) ? pp : null
    }
    async function Up(pp, ip, Op) {
      const op = await cp.e(207).then((() => cp(34510))),
        {
          sheetLayout: Sp,
          sheetWidth: Lp
        } = pp;
      if (Lp > ip) throw new Error(`the pack's atlas is ${Lp} px wide, not within ${ip} px`);
      if (!(Sp.length === op.imagesPerAtlas.length && Sp.every(((pp, ip) => pp === op.imagesPerAtlas[ip])))) {
        const pp = `the pack's atlas is sheets of ${Sp.join(", ")} layers, the built atlas's ${op.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
        if (Sp.length < op.imagesPerAtlas.length) throw new Error(pp);
        console.warn(pp)
      }
      return {
        atlasSheets: [],
        heldUntil: pp.heldUntil,
        texture: ip => {
          var cp, Sp, xp;
          return null !== (cp = null !== (Sp = null !== (xp = yp(pp.terrain.texture(ip), Op)) && void 0 !== xp ? xp : op.animatedBlockTextures[ip]) && void 0 !== Sp ? Sp : op.rotatedBlockTextures[ip]) && void 0 !== cp ? cp : function(pp, ip, cp) {
            var Op, op;
            const Sp = null !== (Op = Ip.c[pp]) && void 0 !== Op ? Op : null;
            return null === Sp ? null : null !== (op = yp(ip.texture(pp), cp)) && void 0 !== op ? op : Sp
          }(ip, pp, Op)
        },
        decoded: ip => {
          const cp = (0, xp.h)(ip);
          return null === cp ? null : (async ip => {
            const cp = pp.sheetPixels.at(ip);
            if (cp) {
              pp.sheetPixels[ip] = null;
              const Op = Lp > 0 ? cp.byteLength / (4 * Lp) : 0;
              return {
                width: Lp,
                height: Op,
                pixels: new Uint8Array(cp.buffer, cp.byteOffset, cp.byteLength)
              }
            }
            const op = pp.terrain.atlasSheets.at(ip);
            if (void 0 === op) throw new Error(`the pack has no atlas sheet ${ip}`);
            const Ip = yp(op, Op);
            if (null === Ip) throw new Error(`the pack's atlas sheet ${ip} isn't a pack file`);
            return (0, xp.j)(Ip)
          })(cp)
        }
      }
    }
    const wp = new WeakMap;

    function vp(pp, ip) {
      if (null === pp) return null;
      let cp = wp.get(pp);
      void 0 === cp && (cp = {}, wp.set(pp, cp));
      const Op = cp[ip];
      if (void 0 !== Op) return Op;
      const {
        armourAtlasUrl: op,
        texture: Ip,
        model: Sp
      } = pp, xp = {
        armourAtlasUrl: () => yp(op, ip),
        textureUrl: pp => yp(Ip(pp), ip),
        modelUrl: pp => yp(Sp(pp), ip)
      };
      return cp[ip] = xp, xp
    }
    class tp {
      constructor(pp) {
        this.host = pp, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (pp, ip, Op) => {
          const {
            backend: op
          } = this.host, Ip = Dp(op);
          if ("webgl1" !== op) return Ip;
          const [Sp, xp] = await Promise.all([cp.e(207).then((() => cp(34510))), null !== (pp = null === (ip = (Op = this.host).maxTextureSize) || void 0 === ip ? void 0 : ip.call(Op)) && void 0 !== pp ? pp : null]);
          return Pp(Ip, Sp.imagesPerAtlas.length * Math.max(0, ...Sp.imagesPerAtlas), xp)
        })().catch((pp => {
          throw this.maxWidth = null, pp
        })), this.maxWidth
      }
      files() {
        return vp(this.assets, this.owner)
      }
      start() {
        let pp = null;
        const ip = this.host.feed.subscribe((ip => {
          const cp = ++this.latest,
            Op = null !== ip.gameSource ? "game" : null !== pp && null !== pp.gameSource ? "join" : "page";
          pp = ip, this.host.settling(), this.assetsFor(ip).then((pp => this.apply(cp, pp, ip, Op).catch((pp => {
            this.host.warn("the texture pack landed, but reloading what it overrides failed", pp)
          }))), (pp => {
            this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", pp), this.settled(cp, ip, null, {
              error: pp,
              source: Op
            })
          }))
        }));
        return () => {
          ip(), this.latest++, this.ended = !0
        }
      }
      async apply(pp, ip, cp, Op) {
        const {
          host: op
        } = this;
        if (pp !== this.latest || op.stopped()) return;
        const Ip = (0, Sp.h)(cp);
        if (this.texturesIn(ip, Ip) && 0 === this.swapping) return void this.settled(pp, cp, vp(ip, Ip));
        let Lp;
        this.swapping++;
        let Yp = null;
        try {
          Lp = await op.terrain.swap((pp => {
            var ip;
            op.warn(`texture pack texture ${null!==(ip=pp.name)&&void 0!==ip?ip:"(all)"} failed`, pp.error), null !== pp.name && null === (0, xp.h)(pp.name) || (Yp = pp.error)
          }), (async () => op.sourcesOf ? op.sourcesOf(ip) : null === ip ? (0, xp.i)() : Up(ip, await this.maxLayerWidth(), Ip)), {
            wholeAtlas: null !== ip,
            wanted: () => pp === this.latest
          })
        } catch (Dp) {
          return op.warn("the texture pack's swap failed: the textures in stay", Dp), void this.settled(pp, cp, null, {
            error: Dp,
            source: Op
          })
        } finally {
          this.swapping--
        }
        if (!0 !== Lp || this.ended) this.settled(pp, cp, null, {
          error: Yp,
          source: Op
        });
        else {
          op.landed(), this.assets = ip, this.owner = Ip;
          try {
            op.packSwapped()
          } finally {
            this.settled(pp, cp, this.files())
          }
        }
      }
      async assetsFor(pp) {
        var ip;
        return (null !== (ip = this.host.assetsOf) && void 0 !== ip ? ip : Lp.h)(pp, await this.maxLayerWidth())
      }
      texturesIn(pp, ip) {
        return pp === this.assets && (null === pp || ip === this.owner)
      }
      settled(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        pp !== this.latest || this.ended || this.host.stopped() || this.host.settled(ip, cp, Op)
      }
    }
  },
  51238: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      followPagePackFiles: () => Ip
    });
    var Op = cp(51218),
      op = cp(51229);

    function Ip(pp, ip, cp, Ip, Sp) {
      let xp, Lp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : pp => (0, op.h)(pp, (0, Op.deviceMaxLayerWidth)(cp)),
        Yp = 0,
        Dp = null;
      const Ap = () => {
          if (null === Dp || null !== Dp.gameSource && !ip.showsPage()) return;
          const cp = null === Dp.gameSource ? Dp : pp.playerState();
          if (cp.pack === xp) return;
          xp = cp.pack;
          const op = ++Yp;
          Lp(cp).then((pp => {
            op === Yp && Ip((0, Op.packFilesOf)(pp, "player"))
          }), (pp => {
            op === Yp && (xp = void 0), Sp("the texture pack's files couldn't be had for the previews: the files in stay", pp)
          }))
        },
        Pp = pp.subscribe((pp => {
          Dp = pp, Ap()
        })),
        Wp = pp.onPlayerPackChange(Ap),
        yp = ip.onPageShown(Ap);
      return () => {
        Pp(), Wp(), yp(), Yp++
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);