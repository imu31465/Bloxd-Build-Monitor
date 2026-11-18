export const id = 272;
export const ids = [272];
export const modules = {
  39959: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      CapeMaterialPlugin: () => iB,
      HueTintMaterialPlugin: () => NB,
      LifeformMaterialPlugin: () => tB,
      OverlayMaterialPlugin: () => fB
    });
    var VB = dB(39962),
      yB = dB(36906);
    class pB extends((0, VB.e)(yB.e)) {}(0, VB.f)(yB.e, pB);
    var lB = dB(36016);
    class JB extends((0, VB.e)(lB.e)) {}(0, VB.f)(lB.e, JB);
    var YB = dB(36768);
    class gB extends((0, VB.e)(YB.f)) {}(0, VB.f)(YB.f, gB);
    var oB = dB(36272),
      kB = dB(39019),
      LB = dB(36264);
    class OB extends((0, VB.e)(LB.f)) {
      constructor(BB, TB, dB) {
        super(BB, TB, dB), (0, oB.f)(BB)
      }
      dispose(BB) {
        (0, oB.g)(this._material), super.dispose(BB)
      }
    }(0, VB.f)(LB.f, OB), (0, LB.h)({
      disableUnusedSpecularTerm: VB.d,
      isLightingDisabled: BB => BB instanceof kB.StandardMaterial && BB.disableLighting
    });
    var DB = dB(37661);
    class uB extends((0, VB.e)(DB.i)) {}(0, VB.f)(DB.i, uB);
    var HB = dB(37767),
      EB = dB(36186),
      vB = dB(37071),
      mB = dB(36078);
    class iB extends((0, VB.e)(HB.c)) {}(0, VB.f)(HB.c, iB);
    class NB extends((0, VB.e)(EB.e)) {}(0, VB.f)(EB.e, NB);
    class tB extends((0, VB.e)(vB.p)) {}(0, VB.f)(vB.p, tB);
    class fB extends((0, VB.e)(mB.d)) {}(0, VB.f)(mB.d, fB)
  },
  39962: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => ZB,
      e: () => vB,
      f: () => qB
    });
    var VB = dB(39019),
      yB = dB(39971),
      pB = dB(40018),
      lB = dB(39976),
      JB = dB(36740),
      YB = dB(36751),
      gB = dB(36757),
      oB = dB(36759),
      kB = dB(36067),
      LB = dB(36074),
      OB = dB(39980),
      DB = dB(36050),
      uB = dB(36054),
      HB = dB(36033);

    function EB(BB, TB) {
      return Object.assign((function(BB, dB, VB, yB) {
        return TB(this.featureState, BB, dB, VB, yB)
      }), {
        gD: BB
      })
    }

    function vB(BB) {
      const TB = class extends OB.c {
          constructor(TB, dB) {
            const VB = (0, uB.X)(TB),
              yB = VB && (0, uB.x)(VB, BB.name);
            for (var pB = arguments.length, lB = new Array(pB > 2 ? pB - 2 : 0), JB = 2; JB < pB; JB++) lB[JB - 2] = arguments[JB];
            super(TB, BB.name, BB.priority, yB ? yB.defines : BB.defines(...lB), !1), this.featureState = void 0, this.featureState = dB, this._pluginManager._addPlugin(this), this._enable(!0), (0, uB.y)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === HB.b.GLSL || BB === HB.b.WGSL
          }
        },
        dB = (0, DB.g)(BB);
      for (const [VB, yB] of Object.entries(DB.c)) {
        const pB = BB[VB];
        if (pB) {
          const BB = dB[VB];
          Object.defineProperty(TB.prototype, yB, {
            value: EB(pB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return TB
    }
    class mB extends(vB(JB.c)) {}
    var iB = dB(38562),
      NB = dB(39986);
    const tB = new WeakMap;

    function fB(BB, TB, dB) {
      let VB = tB.get(dB);
      VB || (VB = new Map, tB.set(dB, VB));
      const {
        url: yB
      } = BB;
      let pB = VB.get(yB);
      return pB || (pB = async function(BB, TB, dB) {
        const {
          width: VB,
          height: yB
        } = BB.getSize(), pB = Math.round(yB / VB), JB = TB && TB.byteLength === VB * VB * pB * 4 ? TB : BB._readPixelsSync();
        return new NB.d(JB, VB, VB, pB, iB.d.TEXTUREFORMAT_RGBA, dB, !0, !1, lB.b.NEAREST_NEAREST_MIPLINEAR)
      }(BB, TB, dB), VB.set(yB, pB), pB.catch((() => {
        VB.delete(yB)
      }))), pB
    }
    var sB = dB(36762);
    class MB extends(vB(YB.k)) {
      constructor(BB, TB) {
        super(BB, TB), TB.textures.forEach(((BB, TB) => {
          BB.mirror.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, TB).catch((BB => {
              console.error(`Failed to build texture array for atlas ${TB}`, BB)
            }))
          }))
        })), (0, sB.h)(TB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, TB) {
        var dB, VB;
        const yB = this.featureState,
          {
            width: pB,
            height: lB
          } = BB.getSize(),
          JB = yB.useWebGL2 ? await fB(BB, null !== (dB = null === (VB = yB.sources.pixels) || void 0 === VB ? void 0 : VB[TB]) && void 0 !== dB ? dB : null, this._material.jU()) : null;
        (0, sB.b)(this._material, yB, TB, JB, pB, Math.round(lB / pB), this._material.shaderLanguage)
      }
    }
    var zB = dB(39994),
      wB = dB(39058),
      UB = dB(36119),
      FB = dB(40003),
      KB = dB(39156),
      rB = dB(39045),
      IB = dB(39949),
      cB = dB(36450),
      SB = dB(40010);
    class PB extends zB.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const QB = {
      Mesh: FB.c,
      TransformNode: IB.c,
      iD: zB.b,
      VertexBuffer: zB.f,
      BoundingInfo: wB.b,
      RD: UB.RD,
      ArenaBuffer: PB,
      SubMesh: rB.c,
      VertexData: KB.d,
      MirroredGeometry: SB.c,
      meshFromArrays: SB.d,
      plainMeshFromArrays: SB.f
    };
    (0, cB.d)(QB);
    var RB = dB(36272);
    class aB extends(vB(oB.m)) {
      constructor(BB, TB) {
        if (super(BB, TB), BB instanceof VB.StandardMaterial && TB.dirLightCount > 0) {
          const TB = BB,
            dB = TB._blockDirtyMechanism;
          TB._blockDirtyMechanism = !0, BB.disableLighting = !0, TB._blockDirtyMechanism = dB;
          const VB = (0, uB.X)(BB);
          VB && (VB.disableLighting = !0, (0, uB.U)(VB))
        }(0, RB.f)(BB)
      }
      dispose(BB) {
        (0, RB.g)(this._material), super.dispose(BB)
      }
    }

    function ZB(BB, TB) {
      if (!(TB instanceof VB.StandardMaterial) || TB.specularTexture) return;
      const {
        r: dB,
        g: yB,
        b: pB
      } = TB.specularColor;
      0 === dB && 0 === yB && 0 === pB && (BB.SPECULARTERM = !1)
    }(0, oB.i)({
      disableUnusedSpecularTerm: ZB
    });
    var XB = dB(36211),
      WB = dB(36457);
    const hB = new RegExp(`^#define ${gB.d}\\s*$`, "m");
    class CB extends(vB(gB.g)) {
      constructor(BB, TB) {
        super(BB, TB), this.ND = !1, TB.ditherOnlyWhileFading && (WB.f.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const TB = new WeakSet;
        BB.onEffectCreatedObservable.add((dB => {
          let {
            effect: VB,
            subMesh: yB
          } = dB;
          if (this.featureState.prewarmingDither || TB.has(VB)) return;
          TB.add(VB);
          const pB = null === yB || void 0 === yB ? void 0 : yB.getMesh();
          pB && !hB.test(VB.defines) && BB.jU().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(pB) || TB.delete(VB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.ND || BB.WdB()) return !1;
        const TB = new rB.c(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, TB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== TB.effect
      }
      dispose(BB) {
        this.ND = !0, super.dispose(BB)
      }
    }
    const GB = new Map;

    function qB(BB, TB) {
      GB.set(BB, TB)
    }
    qB(JB.c, mB), qB(YB.k, MB), qB(gB.g, CB), qB(oB.m, aB), (0, kB.c)({
      create: (BB, TB) => {
        const dB = new VB.StandardMaterial(BB.name, TB);
        return (0, XB.n)(BB, dB), dB.detailMap._pluginDefineNames
      },
      write: (BB, TB, dB) => {
        (0, XB.I)(BB.mirror, TB, dB)
      },
      addFeature: (BB, TB, dB) => {
        const VB = GB.get(TB.feature);
        if (!VB) throw new Error(`${TB.feature.name} has no plugin class (registerPluginClass)`);
        new VB(BB.mirror, TB.state, ...dB)
      },
      texture: (BB, TB, dB) => {
        let {
          url: VB,
          noMipmap: yB,
          invertY: pB,
          samplingMode: JB,
          data: YB,
          sets: gB
        } = dB;
        if (!YB) {
          const dB = new lB.b(VB, TB, yB, pB, JB);
          return Object.assign(dB, gB), void(0, LB.H)(BB, dB)
        }
        const oB = {},
          kB = new Promise(((BB, TB) => {
            oB.onLoad = BB, oB.onError = (BB, dB) => {
              TB(new Error(`${YB.context}: ${(null===dB||void 0===dB?void 0:dB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: OB,
            bytes: DB,
            label: uB
          } = YB,
          HB = {
            noMipmap: yB,
            invertY: !1,
            samplingMode: JB,
            ...oB,
            mimeType: OB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          EB = new lB.b(null, TB, HB);
        XB.p.set(EB, kB), Object.assign(EB, gB), EB.updateURL(VB, DB);
        const vB = EB.getInternalTexture();
        vB && (vB.label = uB), BB.uvSet = EB.coordinatesIndex, BB.matrix.set((0, XB.D)(EB)), (0, LB.H)(BB, EB)
      },
      cube: (BB, TB, dB) => {
        let {
          rootUrl: VB,
          files: pB,
          noMipmap: JB,
          luminance: YB
        } = dB;
        const {
          samplingMode: gB
        } = BB.sampler, oB = gB === (0, LB.x)(JB) ? null : () => {
          (0, XB.B)(kB, gB)
        }, kB = new yB.e(VB, TB, null, JB, pB, oB, null, (0, LB.v)(YB));
        kB.coordinatesMode = lB.b.SKYBOX_MODE, (0, LB.H)(BB, kB)
      },
      canvas: (BB, TB, dB) => {
        let {
          width: VB,
          height: yB,
          mipmaps: JB,
          samplingMode: YB,
          hasAlpha: gB = !1,
          wrap: oB = lB.b.CLAMP_ADDRESSMODE
        } = dB;
        const kB = new pB.d(TB, {
          width: VB,
          height: yB
        }, BB, JB, YB);
        kB.hasAlpha = gB, kB.wrapU = oB, kB.wrapV = oB;
        const LB = (0, XB.t)(kB);
        return (0, XB.v)(LB, kB), LB
      }
    })
  },
  40010: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => oB,
      d: () => kB,
      f: () => LB
    });
    var VB = dB(39994),
      yB = dB(38819),
      pB = dB(39058),
      lB = dB(39158),
      JB = dB(40003),
      YB = dB(39156),
      gB = dB(36331);
    class oB extends lB.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, TB) => {
          this.releaseUnlessInstanced(TB)
        }, this.onLinked = null
      }
      link(BB) {
        var TB;
        (0, gB.l)(BB), this.model = BB, null === (TB = this.onLinked) || void 0 === TB || TB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const yB of Object.values(this._vertexBuffers))
          if (!yB.getIsInstanced()) {
            const {
              byteOffset: TB,
              byteStride: dB,
              type: VB,
              normalized: pB
            } = yB;
            BB.push({
              kind: yB.getKind(),
              data: yB.getData(),
              offset: TB,
              stride: dB,
              components: yB.getSize(),
              glType: VB,
              isNormalized: pB
            })
          } const TB = this._indices.length ? this._indices : null,
          {
            minimum: dB,
            maximum: VB
          } = this.extend;
        this.link(new gB.g(BB, TB, this.getTotalVertices(), new Float64Array(dB.FVB()), new Float64Array(VB.FVB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const TB = new oB(BB, this.jU()),
          dB = this.elB(void 0, !0);
        dB && TB.setIndices(dB);
        let lB = !1;
        for (const pB in this._vertexBuffers) {
          const BB = this._vertexBuffers[pB],
            dB = BB.getData();
          if (!dB) continue;
          const JB = BB.getSize(),
            {
              type: YB,
              byteOffset: gB,
              byteStride: oB,
              normalized: kB
            } = BB;
          lB ||= BB.isUpdatable();
          const LB = BB.getIsInstanced() ? (dB instanceof Array ? 4 * dB.length : dB.byteLength) / oB : this.getTotalVertices(),
            OB = (0, yB.s)(dB, JB, YB, gB, oB, LB, !0),
            DB = {
              updatable: BB.isUpdatable(),
              stride: JB,
              type: YB,
              normalized: kB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          TB.setVerticesBuffer(new VB.f(this.PD(), OB, pB, DB), LB)
        }
        return TB._updatable = lB, TB._boundingInfo = new pB.b(this.extend.minimum, this.extend.maximum), TB.relink(), TB
      }
      static mergeMeshes(BB, TB, dB, VB, yB, pB) {
        const YB = BB[0].jU(),
          gB = new JB.c(BB[0].name + "_merged", YB),
          kB = new oB(lB.b.RandomId(), YB, void 0, !1, gB);
        try {
          if (!JB.c.MergeMeshes(BB, TB, dB, gB, yB, pB)) return gB.dispose(), null
        } catch (LB) {
          throw gB.dispose(), LB
        }
        return kB.relink(), gB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var TB;
        BB && null !== (TB = this.getVertexBuffer(BB)) && void 0 !== TB && TB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, gB.t)(this.model), this.model = null)
      }
    }

    function kB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new JB.c(BB, dB);
      const yB = (0, gB.j)(TB),
        {
          positions: pB,
          normals: kB,
          uvs: LB,
          indices: OB,
          named: DB = {}
        } = TB,
        uB = new YB.d;
      uB.positions = pB, uB.normals = null !== kB && void 0 !== kB ? kB : null, uB.uvs = null !== LB && void 0 !== LB ? LB : null, uB.indices = OB;
      const HB = new oB(lB.b.RandomId(), dB, uB, !1, VB);
      for (const {
          kind: lB,
          components: JB
        }
        of yB.vertexAttributes) lB in DB && VB.setVerticesData(lB, DB[lB], !1, JB);
      return HB.link(yB), VB
    }

    function LB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const yB = new JB.c(BB, dB),
        {
          positions: pB,
          normals: lB,
          uvs: gB,
          indices: oB
        } = TB;
      return Object.assign(new YB.d, {
        positions: pB,
        normals: lB,
        uvs: gB,
        indices: oB
      }).applyToMesh(yB, VB), yB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);