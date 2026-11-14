export const id = 267;
export const ids = [267];
export const modules = {
  39206: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      CapeMaterialPlugin: () => pc,
      HueTintMaterialPlugin: () => hc,
      LifeformMaterialPlugin: () => aB,
      OverlayMaterialPlugin: () => lc
    });
    var Vc = nc(39211),
      Ic = nc(36559);
    class rB extends((0, Vc.e)(Ic.b)) {}(0, Vc.h)(Ic.b, rB);
    var uc = nc(35666);
    class sc extends((0, Vc.e)(uc.g)) {}(0, Vc.h)(uc.g, sc);
    var Mc = nc(36407);
    class Pc extends((0, Vc.e)(Mc.e)) {}(0, Vc.h)(Mc.e, Pc);
    var qB = nc(35916),
      Oc = nc(38294),
      Tc = nc(35908);
    class fc extends((0, Vc.e)(Tc.f)) {
      constructor(cB, Bc, nc) {
        super(cB, Bc, nc), (0, qB.i)(cB)
      }
      dispose(cB) {
        (0, qB.l)(this._material), super.dispose(cB)
      }
    }(0, Vc.h)(Tc.f, fc), (0, Tc.j)({
      disableUnusedSpecularTerm: Vc.d,
      isLightingDisabled: cB => cB instanceof Oc.StandardMaterial && cB.disableLighting
    });
    var mB = nc(37205);
    class ec extends((0, Vc.e)(mB.g)) {}(0, Vc.h)(mB.g, ec);
    var tB = nc(37295),
      Sc = nc(35823),
      yB = nc(36708),
      zB = nc(35720);
    class pc extends((0, Vc.e)(tB.b)) {}(0, Vc.h)(tB.b, pc);
    class hc extends((0, Vc.e)(Sc.c)) {}(0, Vc.h)(Sc.c, hc);
    class aB extends((0, Vc.e)(yB.k)) {}(0, Vc.h)(yB.k, aB);
    class lc extends((0, Vc.e)(zB.b)) {}(0, Vc.h)(zB.b, lc)
  },
  39211: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => kB,
      e: () => yB,
      h: () => Rc
    });
    var Vc = nc(38294),
      Ic = nc(39216),
      rB = nc(39251),
      uc = nc(39218),
      sc = nc(36377),
      Mc = nc(36389),
      Pc = nc(36396),
      qB = nc(36401),
      Oc = nc(35708),
      Tc = nc(35714),
      fc = nc(39220),
      mB = nc(35689),
      ec = nc(35697),
      tB = nc(35679);

    function Sc(cB, Bc) {
      return Object.assign((function(cB, nc, Vc, Ic) {
        return Bc(this.featureState, cB, nc, Vc, Ic)
      }), {
        mI: cB
      })
    }

    function yB(cB) {
      const Bc = class extends fc.b {
          constructor(Bc, nc) {
            const Vc = (0, ec.X)(Bc),
              Ic = Vc && (0, ec.z)(Vc, cB.name);
            for (var rB = arguments.length, uc = new Array(rB > 2 ? rB - 2 : 0), sc = 2; sc < rB; sc++) uc[sc - 2] = arguments[sc];
            super(Bc, cB.name, cB.priority, Ic ? Ic.defines : cB.defines(...uc), !1), this.featureState = void 0, this.featureState = nc, this._pluginManager._addPlugin(this), this._enable(!0), (0, ec.B)(this._material, cB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return cB.className
          }
          isCompatible(cB) {
            return cB === tB.c.GLSL || cB === tB.c.WGSL
          }
        },
        nc = (0, mB.g)(cB);
      for (const [Vc, Ic] of Object.entries(mB.c)) {
        const rB = cB[Vc];
        if (rB) {
          const cB = nc[Vc];
          Object.defineProperty(Bc.prototype, Ic, {
            value: Sc(rB, cB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Bc
    }
    class zB extends(yB(sc.e)) {}
    var pc = nc(37884),
      hc = nc(39227);
    const aB = new WeakMap;

    function lc(cB, Bc, nc) {
      let Vc = aB.get(nc);
      Vc || (Vc = new Map, aB.set(nc, Vc));
      const {
        url: Ic
      } = cB;
      let rB = Vc.get(Ic);
      return rB || (rB = async function(cB, Bc, nc) {
        const {
          width: Vc,
          height: Ic
        } = cB.getSize(), rB = Math.round(Ic / Vc), sc = Bc && Bc.byteLength === Vc * Vc * rB * 4 ? Bc : cB._readPixelsSync();
        return new hc.e(sc, Vc, Vc, rB, pc.e.TEXTUREFORMAT_RGBA, nc, !0, !1, uc.b.NEAREST_NEAREST_MIPLINEAR)
      }(cB, Bc, nc), Vc.set(Ic, rB), rB.catch((() => {
        Vc.delete(Ic)
      }))), rB
    }
    var Yc = nc(36405);
    class Lc extends(yB(Mc.j)) {
      constructor(cB, Bc) {
        super(cB, Bc), Bc.textures.forEach(((cB, Bc) => {
          cB.mirror.onLoadObservable.add((cB => {
            this.setTextureArrayData(cB, Bc).catch((cB => {
              console.error(`Failed to build texture array for atlas ${Bc}`, cB)
            }))
          }))
        })), (0, Yc.h)(Bc, cB.shaderLanguage)
      }
      async setTextureArrayData(cB, Bc) {
        var nc, Vc;
        const Ic = this.featureState,
          {
            width: rB,
            height: uc
          } = cB.getSize(),
          sc = Ic.useWebGL2 ? await lc(cB, null !== (nc = null === (Vc = Ic.sources.pixels) || void 0 === Vc ? void 0 : Vc[Bc]) && void 0 !== nc ? nc : null, this._material.knc()) : null;
        (0, Yc.e)(this._material, Ic, Bc, sc, rB, Math.round(uc / rB), this._material.shaderLanguage)
      }
    }
    var gB = nc(39232),
      Uc = nc(38343),
      bB = nc(35753),
      Zc = nc(39241),
      Qc = nc(38430),
      Cc = nc(38332),
      vB = nc(39192),
      Dc = nc(36092),
      Nc = nc(39248);
    class Ec extends gB.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const oc = {
      Mesh: Zc.d,
      TransformNode: vB.d,
      QV: gB.d,
      VertexBuffer: gB.g,
      BoundingInfo: Uc.b,
      KV: bB.KV,
      ArenaBuffer: Ec,
      SubMesh: Cc.e,
      VertexData: Qc.b,
      MirroredGeometry: Nc.b,
      meshFromArrays: Nc.f,
      plainMeshFromArrays: Nc.g
    };
    (0, Dc.e)(oc);
    var Wc = nc(35916);
    class wc extends(yB(qB.j)) {
      constructor(cB, Bc) {
        if (super(cB, Bc), cB instanceof Vc.StandardMaterial && Bc.dirLightCount > 0) {
          const Bc = cB,
            nc = Bc._blockDirtyMechanism;
          Bc._blockDirtyMechanism = !0, cB.disableLighting = !0, Bc._blockDirtyMechanism = nc;
          const Vc = (0, ec.X)(cB);
          Vc && (Vc.disableLighting = !0, (0, ec.W)(Vc))
        }(0, Wc.i)(cB)
      }
      dispose(cB) {
        (0, Wc.l)(this._material), super.dispose(cB)
      }
    }

    function kB(cB, Bc) {
      if (!(Bc instanceof Vc.StandardMaterial) || Bc.specularTexture) return;
      const {
        r: nc,
        g: Ic,
        b: rB
      } = Bc.specularColor;
      0 === nc && 0 === Ic && 0 === rB && (cB.SPECULARTERM = !1)
    }(0, qB.f)({
      disableUnusedSpecularTerm: kB
    });
    var Xc = nc(35847),
      Hc = nc(36105);
    const Fc = new RegExp(`^#define ${Pc.d}\\s*$`, "m");
    class Jc extends(yB(Pc.l)) {
      constructor(cB, Bc) {
        super(cB, Bc), this.CV = !1, Bc.ditherOnlyWhileFading && (Hc.h.add(cB), this.prewarmDitherTwins(cB))
      }
      prewarmDitherTwins(cB) {
        const Bc = new WeakSet;
        cB.onEffectCreatedObservable.add((nc => {
          let {
            effect: Vc,
            subMesh: Ic
          } = nc;
          if (this.featureState.prewarmingDither || Bc.has(Vc)) return;
          Bc.add(Vc);
          const rB = null === Ic || void 0 === Ic ? void 0 : Ic.getMesh();
          rB && !Fc.test(Vc.defines) && cB.knc().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(rB) || Bc.delete(Vc)
          }))
        }))
      }
      prewarmDither(cB) {
        if (this.CV || cB.nPc()) return !1;
        const Bc = new Cc.e(0, 0, 0, 0, 0, cB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(cB, Bc)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Bc.effect
      }
      dispose(cB) {
        this.CV = !0, super.dispose(cB)
      }
    }
    const jB = new Map;

    function Rc(cB, Bc) {
      jB.set(cB, Bc)
    }
    Rc(sc.e, zB), Rc(Mc.j, Lc), Rc(Pc.l, Jc), Rc(qB.j, wc), (0, Oc.e)({
      create: (cB, Bc) => {
        const nc = new Vc.StandardMaterial(cB.name, Bc);
        return (0, Xc.s)(cB, nc), nc.detailMap._pluginDefineNames
      },
      write: (cB, Bc, nc) => {
        (0, Xc.Y)(cB.mirror, Bc, nc)
      },
      addFeature: (cB, Bc, nc) => {
        const Vc = jB.get(Bc.feature);
        if (!Vc) throw new Error(`${Bc.feature.name} has no plugin class (registerPluginClass)`);
        new Vc(cB.mirror, Bc.state, ...nc)
      },
      texture: (cB, Bc, nc) => {
        let {
          url: Vc,
          noMipmap: Ic,
          invertY: rB,
          samplingMode: sc,
          data: Mc,
          sets: Pc
        } = nc;
        if (!Mc) {
          const nc = new uc.b(Vc, Bc, Ic, rB, sc);
          return Object.assign(nc, Pc), void(0, Tc.M)(cB, nc)
        }
        const qB = {},
          Oc = new Promise(((cB, Bc) => {
            qB.onLoad = cB, qB.onError = (cB, nc) => {
              Bc(new Error(`${Mc.context}: ${(null===nc||void 0===nc?void 0:nc.message)||cB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: fc,
            bytes: mB,
            label: ec
          } = Mc,
          tB = {
            noMipmap: Ic,
            invertY: !1,
            samplingMode: sc,
            ...qB,
            mimeType: fc,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Sc = new uc.b(null, Bc, tB);
        Xc.t.set(Sc, Oc), Object.assign(Sc, Pc), Sc.updateURL(Vc, mB);
        const yB = Sc.getInternalTexture();
        yB && (yB.label = ec), cB.uvSet = Sc.coordinatesIndex, cB.matrix.set((0, Xc.O)(Sc)), (0, Tc.M)(cB, Sc)
      },
      cube: (cB, Bc, nc) => {
        let {
          rootUrl: Vc,
          files: rB,
          noMipmap: sc,
          luminance: Mc
        } = nc;
        const {
          samplingMode: Pc
        } = cB.sampler, qB = Pc === (0, Tc.D)(sc) ? null : () => {
          (0, Xc.K)(Oc, Pc)
        }, Oc = new Ic.c(Vc, Bc, null, sc, rB, qB, null, (0, Tc.A)(Mc));
        Oc.coordinatesMode = uc.b.SKYBOX_MODE, (0, Tc.M)(cB, Oc)
      },
      canvas: (cB, Bc, nc) => {
        let {
          width: Vc,
          height: Ic,
          mipmaps: sc,
          samplingMode: Mc,
          hasAlpha: Pc = !1,
          wrap: qB = uc.b.CLAMP_ADDRESSMODE
        } = nc;
        const Oc = new rB.b(Bc, {
          width: Vc,
          height: Ic
        }, cB, sc, Mc);
        Oc.hasAlpha = Pc, Oc.wrapU = qB, Oc.wrapV = qB;
        const Tc = (0, Xc.A)(Oc);
        return (0, Xc.E)(Tc, Oc), Tc
      }
    })
  },
  39248: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => qB,
      f: () => Oc,
      g: () => Tc
    });
    var Vc = nc(39232),
      Ic = nc(38116),
      rB = nc(38343),
      uc = nc(38434),
      sc = nc(39241),
      Mc = nc(38430),
      Pc = nc(35971);
    class qB extends uc.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (cB, Bc) => {
          this.releaseUnlessInstanced(Bc)
        }, this.onLinked = null
      }
      link(cB) {
        var Bc;
        (0, Pc.p)(cB), this.model = cB, null === (Bc = this.onLinked) || void 0 === Bc || Bc.call(this, cB)
      }
      relink() {
        this.release();
        const cB = [];
        for (const Ic of Object.values(this._vertexBuffers))
          if (!Ic.getIsInstanced()) {
            const {
              byteOffset: Bc,
              byteStride: nc,
              type: Vc,
              normalized: rB
            } = Ic;
            cB.push({
              kind: Ic.getKind(),
              data: Ic.getData(),
              offset: Bc,
              stride: nc,
              components: Ic.getSize(),
              glType: Vc,
              isNormalized: rB
            })
          } const Bc = this._indices.length ? this._indices : null,
          {
            minimum: nc,
            maximum: Vc
          } = this.extend;
        this.link(new Pc.d(cB, Bc, this.getTotalVertices(), new Float64Array(nc.KPc()), new Float64Array(Vc.KPc())))
      }
      copy(cB) {
        if (!this.model) return super.copy(cB);
        const Bc = new qB(cB, this.knc()),
          nc = this.Tfc(void 0, !0);
        nc && Bc.setIndices(nc);
        let uc = !1;
        for (const rB in this._vertexBuffers) {
          const cB = this._vertexBuffers[rB],
            nc = cB.getData();
          if (!nc) continue;
          const sc = cB.getSize(),
            {
              type: Mc,
              byteOffset: Pc,
              byteStride: qB,
              normalized: Oc
            } = cB;
          uc ||= cB.isUpdatable();
          const Tc = cB.getIsInstanced() ? (nc instanceof Array ? 4 * nc.length : nc.byteLength) / qB : this.getTotalVertices(),
            fc = (0, Ic.s)(nc, sc, Mc, Pc, qB, Tc, !0),
            mB = {
              updatable: cB.isUpdatable(),
              stride: sc,
              type: Mc,
              normalized: Oc,
              takeBufferOwnership: !0,
              instanced: cB.getIsInstanced()
            };
          Bc.setVerticesBuffer(new Vc.g(this.RV(), fc, rB, mB), Tc)
        }
        return Bc._updatable = uc, Bc._boundingInfo = new rB.b(this.extend.minimum, this.extend.maximum), Bc.relink(), Bc
      }
      static mergeMeshes(cB, Bc, nc, Vc, Ic, rB) {
        const Mc = cB[0].knc(),
          Pc = new sc.d(cB[0].name + "_merged", Mc),
          Oc = new qB(uc.e.RandomId(), Mc, void 0, !1, Pc);
        try {
          if (!sc.d.MergeMeshes(cB, Bc, nc, Pc, Ic, rB)) return Pc.dispose(), null
        } catch (Tc) {
          throw Pc.dispose(), Tc
        }
        return Oc.relink(), Pc
      }
      removeVerticesData(cB) {
        this.releaseUnlessInstanced(cB), super.removeVerticesData(cB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(cB) {
        var Bc;
        cB && null !== (Bc = this.getVertexBuffer(cB)) && void 0 !== Bc && Bc.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Pc.t)(this.model), this.model = null)
      }
    }

    function Oc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new sc.d(cB, nc);
      const Ic = (0, Pc.l)(Bc),
        {
          positions: rB,
          normals: Oc,
          uvs: Tc,
          indices: fc,
          named: mB = {}
        } = Bc,
        ec = new Mc.b;
      ec.positions = rB, ec.normals = null !== Oc && void 0 !== Oc ? Oc : null, ec.uvs = null !== Tc && void 0 !== Tc ? Tc : null, ec.indices = fc;
      const tB = new qB(uc.e.RandomId(), nc, ec, !1, Vc);
      for (const {
          kind: uc,
          components: sc
        }
        of Ic.vertexAttributes) uc in mB && Vc.setVerticesData(uc, mB[uc], !1, sc);
      return tB.link(Ic), Vc
    }

    function Tc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Ic = new sc.d(cB, nc),
        {
          positions: rB,
          normals: uc,
          uvs: Pc,
          indices: qB
        } = Bc;
      return Object.assign(new Mc.b, {
        positions: rB,
        normals: uc,
        uvs: Pc,
        indices: qB
      }).applyToMesh(Ic, Vc), Ic
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);