export const id = 40;
export const ids = [40];
export const modules = {
  41228: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      MAX_LAYER_WIDTH: () => Mc,
      PackTextures: () => zB,
      layerWidthFor: () => Oc,
      packFileUrl: () => ec,
      packFilesOf: () => yB,
      packTerrainSources: () => tB,
      resheet: () => Tc,
      webgl1GridColumns: () => Pc,
      webgl1LayerWidth: () => qB
    });
    var Vc = nc(38801),
      Ic = nc(38956),
      rB = nc(41236),
      uc = nc(38944),
      sc = nc(41240);
    const Mc = {
      webgpu: 128,
      webgl: 128,
      webgl1: 64
    };

    function Pc(cB) {
      const Bc = Math.ceil(Math.log2(Math.max(1, cB)));
      return 2 ** Math.ceil(Bc / 2)
    }

    function qB(cB, Bc, nc) {
      const Ic = null !== nc && nc > 0 ? nc : Vc.d.limits.MAX_TEXTURE_SIZE;
      return Oc(Math.max(1, Math.floor(Ic / Pc(Bc))), cB)
    }

    function Oc(cB, Bc) {
      let nc = 1;
      for (; 2 * nc <= Math.min(cB, Bc);) nc *= 2;
      return nc
    }
    async function Tc(cB, Bc, nc, Vc) {
      const Ic = Oc(Bc, Vc),
        rB = [];
      for (const Oc of cB) rB.push(Ic === Bc ? Oc : await mB(Oc, Bc, Ic));
      const uc = Ic * Ic * 4,
        sc = Ic * Math.max(0, ...nc),
        Mc = nc.map((() => ({
          width: Ic,
          height: sc,
          pixels: new Uint8Array(Ic * sc * 4)
        })));
      let Pc = 0,
        qB = 0;
      for (const Oc of rB) {
        let cB = 0;
        const Bc = Math.floor(Oc.byteLength / uc);
        for (; cB < Bc && Pc < Mc.length;) {
          const Vc = Math.min(nc[Pc] - qB, Bc - cB);
          Mc[Pc].pixels.set(Oc.subarray(cB * uc, (cB + Vc) * uc), qB * uc), cB += Vc, qB += Vc, qB === nc[Pc] && (Pc++, qB = 0)
        }
      }
      return Mc
    }
    const fc = 16;
    async function mB(cB, Bc, nc) {
      const Vc = Math.floor(cB.byteLength / (Bc * Bc * 4)),
        Ic = new Uint8Array(nc * nc * 4 * Vc),
        rB = [0, 0, 0, 0];
      for (let uc = 0; uc < Vc; uc++) {
        uc > 0 && uc % fc === 0 && await new Promise((cB => {
          setTimeout(cB, 0)
        }));
        const Vc = uc * Bc;
        for (let sc = 0; sc < nc; sc++) {
          const Mc = Math.floor(sc * Bc / nc),
            Pc = Math.max(Mc + 1, Math.floor((sc + 1) * Bc / nc));
          for (let qB = 0; qB < nc; qB++) {
            const Oc = Math.floor(qB * Bc / nc),
              Tc = Math.max(Oc + 1, Math.floor((qB + 1) * Bc / nc));
            rB.fill(0);
            for (let nc = Mc; nc < Pc; nc++) {
              const Ic = (Vc + nc) * Bc * 4;
              for (let Bc = Oc; Bc < Tc; Bc++)
                for (let nc = 0; nc < 4; nc++) rB[nc] += cB[Ic + 4 * Bc + nc]
            }
            const fc = (Pc - Mc) * (Tc - Oc),
              mB = 4 * ((uc * nc + sc) * nc + qB);
            for (let cB = 0; cB < 4; cB++) Ic[mB + cB] = Math.round(rB[cB] / fc)
          }
        }
      }
      return Ic
    }

    function ec(cB, Bc) {
      return "string" !== typeof cB || "" === cB ? null : "player" === Bc || (0, rB.c)(cB) ? cB : null
    }
    async function tB(cB, Bc, Vc) {
      const rB = await nc.e(185).then((() => nc(33054)));
      let sc = null;
      return {
        atlasSheets: [],
        texture: Bc => {
          var nc, uc, sc;
          return null !== (nc = null !== (uc = null !== (sc = ec(cB.terrain.texture(Bc), Vc)) && void 0 !== sc ? sc : rB.animatedBlockTextures[Bc]) && void 0 !== uc ? uc : rB.rotatedBlockTextures[Bc]) && void 0 !== nc ? nc : function(cB, Bc, nc) {
            var Vc, rB;
            const uc = null !== (Vc = Ic.c[cB]) && void 0 !== Vc ? Vc : null;
            return null === uc ? null : null !== (rB = ec(Bc.texture(cB), nc)) && void 0 !== rB ? rB : uc
          }(Bc, cB, Vc)
        },
        decoded: nc => {
          const Ic = (0, uc.j)(nc);
          return null === Ic ? null : (sc ??= (async () => {
            const nc = await Promise.all(cB.terrain.atlasSheets.map((async (Bc, nc) => {
              const Ic = cB.sheetPixels[nc];
              if (Ic) return new Uint8Array(Ic.buffer, Ic.byteOffset, Ic.byteLength);
              const rB = ec(Bc, Vc);
              if (null === rB) throw new Error(`the pack's atlas sheet ${nc} isn't a pack file`);
              return (await (0, uc.p)(rB)).pixels
            })));
            return cB.sheetPixels.fill(null), Tc(nc, cB.sheetWidth, rB.imagesPerAtlas, Bc)
          })(), sc).then((cB => {
            const Bc = cB.at(Ic);
            if (void 0 === Bc) throw new Error(`the built atlas has no sheet ${Ic}`);
            return Bc
          }))
        }
      }
    }
    const Sc = new WeakMap;

    function yB(cB, Bc) {
      if (null === cB) return null;
      let nc = Sc.get(cB);
      void 0 === nc && (nc = {}, Sc.set(cB, nc));
      const Vc = nc[Bc];
      if (void 0 !== Vc) return Vc;
      const {
        armourAtlasUrl: Ic,
        texture: rB,
        model: uc
      } = cB, sc = {
        armourAtlasUrl: () => ec(Ic, Bc),
        textureUrl: cB => ec(rB(cB), Bc),
        modelUrl: cB => ec(uc(cB), Bc)
      };
      return nc[Bc] = sc, sc
    }
    class zB {
      constructor(cB) {
        this.host = cB, this.assets = null, this.owner = "player", this.latest = 0, this.swapping = 0, this.ended = !1, this.maxWidth = null
      }
      maxLayerWidth() {
        return this.maxWidth ??= (async (cB, Bc, Vc) => {
          const {
            backend: Ic
          } = this.host, rB = Mc[Ic];
          if ("webgl1" !== Ic) return rB;
          const [uc, sc] = await Promise.all([nc.e(185).then((() => nc(33054))), null !== (cB = null === (Bc = (Vc = this.host).maxTextureSize) || void 0 === Bc ? void 0 : Bc.call(Vc)) && void 0 !== cB ? cB : null]);
          return qB(rB, uc.imagesPerAtlas.length * Math.max(0, ...uc.imagesPerAtlas), sc)
        })().catch((cB => {
          throw this.maxWidth = null, cB
        })), this.maxWidth
      }
      files() {
        return yB(this.assets, this.owner)
      }
      iconOverrides() {
        const cB = this.files();
        return null === cB ? null : {
          itemSprite: cB.textureUrl,
          blockTexture: cB.textureUrl,
          model: cB.modelUrl
        }
      }
      start() {
        var cB;
        const Bc = null !== (cB = this.host.assetsOf) && void 0 !== cB ? cB : sc.h,
          nc = this.host.feed.subscribe((cB => {
            const nc = ++this.latest;
            this.host.settling(), this.maxLayerWidth().then((nc => Bc(cB, nc))).then((Bc => this.apply(nc, Bc, cB).catch((cB => {
              this.host.warn("the texture pack landed, but reloading what it overrides failed", cB)
            }))), (Bc => {
              this.host.warn("the texture pack's atlas couldn't be generated: the textures in stay", Bc), this.settled(nc, cB, null, !0)
            }))
          }));
        return () => {
          nc(), this.latest++, this.ended = !0
        }
      }
      async apply(cB, Bc, nc) {
        const {
          host: Vc
        } = this;
        if (cB !== this.latest || Vc.stopped()) return;
        const Ic = (0, rB.k)(nc);
        if (Bc === this.assets && (null === Bc || Ic === this.owner) && 0 === this.swapping) return void this.settled(cB, nc, yB(Bc, Ic));
        let sc;
        this.swapping++;
        try {
          sc = await Vc.terrain.swap((cB => {
            var Bc;
            Vc.warn(`texture pack texture ${null!==(Bc=cB.name)&&void 0!==Bc?Bc:"(all)"} failed`, cB.error)
          }), (async () => Vc.sourcesOf ? Vc.sourcesOf(Bc) : null === Bc ? (0, uc.m)() : tB(Bc, await this.maxLayerWidth(), Ic)), {
            wholeAtlas: null !== Bc,
            wanted: () => cB === this.latest
          })
        } catch (Mc) {
          return Vc.warn("the texture pack's swap failed: the textures in stay", Mc), void this.settled(cB, nc, null, !0)
        } finally {
          this.swapping--
        }
        if (!0 !== sc || this.ended) this.settled(cB, nc, null, !0);
        else {
          Vc.landed(), this.assets = Bc, this.owner = Ic;
          try {
            Vc.packSwapped()
          } finally {
            this.settled(cB, nc, this.files())
          }
        }
      }
      settled(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        cB !== this.latest || this.ended || this.host.stopped() || this.host.settled(Bc, nc, Vc)
      }
    }
  },
  41243: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      followPagePackFiles: () => rB
    });
    var Vc = nc(41228),
      Ic = nc(41240);

    function rB(cB, Bc, nc, rB, uc) {
      let sc, Mc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : cB => (0, Ic.h)(cB, Vc.MAX_LAYER_WIDTH[nc]),
        Pc = 0,
        qB = null;
      const Oc = () => {
          if (null === qB || null !== qB.gameSource && !Bc.showsPage()) return;
          const nc = null === qB.gameSource ? qB : cB.playerState();
          if (nc.pack === sc) return;
          sc = nc.pack;
          const Ic = ++Pc;
          Mc(nc).then((cB => {
            Ic === Pc && rB((0, Vc.packFilesOf)(cB, "player"))
          }), (cB => {
            Ic === Pc && (sc = void 0), uc("the texture pack's files couldn't be had for the previews: the files in stay", cB)
          }))
        },
        Tc = cB.subscribe((cB => {
          qB = cB, Oc()
        })),
        fc = cB.onPlayerPackChange(Oc),
        mB = Bc.onPageShown(Oc);
      return () => {
        Tc(), fc(), mB(), Pc++
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);