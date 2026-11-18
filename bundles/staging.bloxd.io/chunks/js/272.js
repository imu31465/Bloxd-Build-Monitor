export const id = 272;
export const ids = [272];
export const modules = {
  39987: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      CapeMaterialPlugin: () => mJ,
      HueTintMaterialPlugin: () => QJ,
      LifeformMaterialPlugin: () => EJ,
      OverlayMaterialPlugin: () => VJ
    });
    var FJ = ZJ(39993),
      UJ = ZJ(36976);
    class eJ extends((0, FJ.e)(UJ.d)) {}(0, FJ.i)(UJ.d, eJ);
    var XJ = ZJ(36082);
    class AJ extends((0, FJ.e)(XJ.f)) {}(0, FJ.i)(XJ.f, AJ);
    var qJ = ZJ(36823);
    class jJ extends((0, FJ.e)(qJ.f)) {}(0, FJ.i)(qJ.f, jJ);
    var YJ = ZJ(36325),
      hJ = ZJ(39029),
      DJ = ZJ(36319);
    class sJ extends((0, FJ.e)(DJ.e)) {
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ, ZJ), (0, YJ.i)(JJ)
      }
      dispose(JJ) {
        (0, YJ.l)(this._material), super.dispose(JJ)
      }
    }(0, FJ.i)(DJ.e, sJ), (0, DJ.g)({
      disableUnusedSpecularTerm: FJ.c,
      isLightingDisabled: JJ => JJ instanceof hJ.StandardMaterial && JJ.disableLighting
    });
    var nJ = ZJ(37667);
    class GJ extends((0, FJ.e)(nJ.g)) {}(0, FJ.i)(nJ.g, GJ);
    var fJ = ZJ(37754),
      xJ = ZJ(36239),
      rJ = ZJ(37125),
      vJ = ZJ(36130);
    class mJ extends((0, FJ.e)(fJ.d)) {}(0, FJ.i)(fJ.d, mJ);
    class QJ extends((0, FJ.e)(xJ.e)) {}(0, FJ.i)(xJ.e, QJ);
    class EJ extends((0, FJ.e)(rJ.i)) {}(0, FJ.i)(rJ.i, EJ);
    class VJ extends((0, FJ.e)(vJ.d)) {}(0, FJ.i)(vJ.d, VJ)
  },
  39993: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => NJ,
      e: () => rJ,
      i: () => RJ
    });
    var FJ = ZJ(39029),
      UJ = ZJ(40001),
      eJ = ZJ(40037),
      XJ = ZJ(40004),
      AJ = ZJ(36789),
      qJ = ZJ(36797),
      jJ = ZJ(36802),
      YJ = ZJ(36808),
      hJ = ZJ(36121),
      DJ = ZJ(36125),
      sJ = ZJ(40009),
      nJ = ZJ(36107),
      GJ = ZJ(36113),
      fJ = ZJ(36093);

    function xJ(JJ, cJ) {
      return Object.assign((function(JJ, ZJ, FJ, UJ) {
        return cJ(this.featureState, JJ, ZJ, FJ, UJ)
      }), {
        Un: JJ
      })
    }

    function rJ(JJ) {
      const cJ = class extends sJ.c {
          constructor(cJ, ZJ) {
            const FJ = (0, GJ._)(cJ),
              UJ = FJ && (0, GJ.r)(FJ, JJ.name);
            for (var eJ = arguments.length, XJ = new Array(eJ > 2 ? eJ - 2 : 0), AJ = 2; AJ < eJ; AJ++) XJ[AJ - 2] = arguments[AJ];
            super(cJ, JJ.name, JJ.priority, UJ ? UJ.defines : JJ.defines(...XJ), !1), this.featureState = void 0, this.featureState = ZJ, this._pluginManager._addPlugin(this), this._enable(!0), (0, GJ.v)(this._material, JJ, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return JJ.className
          }
          isCompatible(JJ) {
            return JJ === fJ.c.GLSL || JJ === fJ.c.WGSL
          }
        },
        ZJ = (0, nJ.i)(JJ);
      for (const [FJ, UJ] of Object.entries(nJ.b)) {
        const eJ = JJ[FJ];
        if (eJ) {
          const JJ = ZJ[FJ];
          Object.defineProperty(cJ.prototype, UJ, {
            value: xJ(eJ, JJ),
            writable: !0,
            configurable: !0
          })
        }
      }
      return cJ
    }
    class vJ extends(rJ(AJ.c)) {}
    var mJ = ZJ(38624),
      QJ = ZJ(40012);
    const EJ = new WeakMap;

    function VJ(JJ, cJ, ZJ) {
      let FJ = EJ.get(ZJ);
      FJ || (FJ = new Map, EJ.set(ZJ, FJ));
      const {
        url: UJ
      } = JJ;
      let eJ = FJ.get(UJ);
      return eJ || (eJ = async function(JJ, cJ, ZJ) {
        const {
          width: FJ,
          height: UJ
        } = JJ.getSize(), eJ = Math.round(UJ / FJ), AJ = cJ && cJ.byteLength === FJ * FJ * eJ * 4 ? cJ : JJ._readPixelsSync();
        return new QJ.b(AJ, FJ, FJ, eJ, mJ.e.TEXTUREFORMAT_RGBA, ZJ, !0, !1, XJ.b.NEAREST_NEAREST_MIPLINEAR)
      }(JJ, cJ, ZJ), FJ.set(UJ, eJ), eJ.catch((() => {
        FJ.delete(UJ)
      }))), eJ
    }
    var KJ = ZJ(36814);
    class yJ extends(rJ(qJ.g)) {
      constructor(JJ, cJ) {
        super(JJ, cJ), cJ.textures.forEach(((JJ, cJ) => {
          JJ.mirror.onLoadObservable.add((JJ => {
            this.setTextureArrayData(JJ, cJ).catch((JJ => {
              console.error(`Failed to build texture array for atlas ${cJ}`, JJ)
            }))
          }))
        })), (0, KJ.i)(cJ, JJ.shaderLanguage)
      }
      async setTextureArrayData(JJ, cJ) {
        var ZJ, FJ;
        const UJ = this.featureState,
          {
            width: eJ,
            height: XJ
          } = JJ.getSize(),
          AJ = UJ.useWebGL2 ? await VJ(JJ, null !== (ZJ = null === (FJ = UJ.sources.pixels) || void 0 === FJ ? void 0 : FJ[cJ]) && void 0 !== ZJ ? ZJ : null, this._material.Qy()) : null;
        (0, KJ.e)(this._material, UJ, cJ, AJ, eJ, Math.round(XJ / eJ), this._material.shaderLanguage)
      }
    }
    var SJ = ZJ(40018),
      IJ = ZJ(39065),
      MJ = ZJ(36165),
      bJ = ZJ(40024),
      wJ = ZJ(39170),
      WJ = ZJ(39058),
      gJ = ZJ(39971),
      HJ = ZJ(36504),
      PJ = ZJ(40033);
    class kJ extends SJ.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const pJ = {
      Mesh: bJ.d,
      TransformNode: gJ.e,
      fn: SJ.b,
      VertexBuffer: SJ.e,
      BoundingInfo: IJ.b,
      Pn: MJ.Pn,
      ArenaBuffer: kJ,
      SubMesh: WJ.e,
      VertexData: wJ.e,
      MirroredGeometry: PJ.b,
      meshFromArrays: PJ.f,
      plainMeshFromArrays: PJ.g
    };
    (0, HJ.e)(pJ);
    var dJ = ZJ(36325);
    class zJ extends(rJ(YJ.j)) {
      constructor(JJ, cJ) {
        if (super(JJ, cJ), JJ instanceof FJ.StandardMaterial && cJ.dirLightCount > 0) {
          const cJ = JJ,
            ZJ = cJ._blockDirtyMechanism;
          cJ._blockDirtyMechanism = !0, JJ.disableLighting = !0, cJ._blockDirtyMechanism = ZJ;
          const FJ = (0, GJ._)(JJ);
          FJ && (FJ.disableLighting = !0, (0, GJ.W)(FJ))
        }(0, dJ.i)(JJ)
      }
      dispose(JJ) {
        (0, dJ.l)(this._material), super.dispose(JJ)
      }
    }

    function NJ(JJ, cJ) {
      if (!(cJ instanceof FJ.StandardMaterial) || cJ.specularTexture) return;
      const {
        r: ZJ,
        g: UJ,
        b: eJ
      } = cJ.specularColor;
      0 === ZJ && 0 === UJ && 0 === eJ && (JJ.SPECULARTERM = !1)
    }(0, YJ.f)({
      disableUnusedSpecularTerm: NJ
    });
    var OJ = ZJ(36261),
      TJ = ZJ(36517);
    const CJ = new RegExp(`^#define ${jJ.b}\\s*$`, "m");
    class uJ extends(rJ(jJ.j)) {
      constructor(JJ, cJ) {
        super(JJ, cJ), this.xn = !1, cJ.ditherOnlyWhileFading && (TJ.c.add(JJ), this.prewarmDitherTwins(JJ))
      }
      prewarmDitherTwins(JJ) {
        const cJ = new WeakSet;
        JJ.onEffectCreatedObservable.add((ZJ => {
          let {
            effect: FJ,
            subMesh: UJ
          } = ZJ;
          if (this.featureState.prewarmingDither || cJ.has(FJ)) return;
          cJ.add(FJ);
          const eJ = null === UJ || void 0 === UJ ? void 0 : UJ.getMesh();
          eJ && !CJ.test(FJ.defines) && JJ.Qy().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(eJ) || cJ.delete(FJ)
          }))
        }))
      }
      prewarmDither(JJ) {
        if (this.xn || JJ.YZJ()) return !1;
        const cJ = new WJ.e(0, 0, 0, 0, 0, JJ, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(JJ, cJ)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== cJ.effect
      }
      dispose(JJ) {
        this.xn = !0, super.dispose(JJ)
      }
    }
    const iJ = new Map;

    function RJ(JJ, cJ) {
      iJ.set(JJ, cJ)
    }
    RJ(AJ.c, vJ), RJ(qJ.g, yJ), RJ(jJ.j, uJ), RJ(YJ.j, zJ), (0, hJ.d)({
      create: (JJ, cJ) => {
        const ZJ = new FJ.StandardMaterial(JJ.name, cJ);
        return (0, OJ.n)(JJ, ZJ), ZJ.detailMap._pluginDefineNames
      },
      write: (JJ, cJ, ZJ) => {
        (0, OJ.V)(JJ.mirror, cJ, ZJ)
      },
      addFeature: (JJ, cJ, ZJ) => {
        const FJ = iJ.get(cJ.feature);
        if (!FJ) throw new Error(`${cJ.feature.name} has no plugin class (registerPluginClass)`);
        new FJ(JJ.mirror, cJ.state, ...ZJ)
      },
      texture: (JJ, cJ, ZJ) => {
        let {
          url: FJ,
          noMipmap: UJ,
          invertY: eJ,
          samplingMode: AJ,
          data: qJ,
          sets: jJ
        } = ZJ;
        if (!qJ) {
          const ZJ = new XJ.b(FJ, cJ, UJ, eJ, AJ);
          return Object.assign(ZJ, jJ), void(0, DJ.H)(JJ, ZJ)
        }
        const YJ = {},
          hJ = new Promise(((JJ, cJ) => {
            YJ.onLoad = JJ, YJ.onError = (JJ, ZJ) => {
              cJ(new Error(`${qJ.context}: ${(null===ZJ||void 0===ZJ?void 0:ZJ.message)||JJ||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: sJ,
            bytes: nJ,
            label: GJ
          } = qJ,
          fJ = {
            noMipmap: UJ,
            invertY: !1,
            samplingMode: AJ,
            ...YJ,
            mimeType: sJ,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          xJ = new XJ.b(null, cJ, fJ);
        OJ.q.set(xJ, hJ), Object.assign(xJ, jJ), xJ.updateURL(FJ, nJ);
        const rJ = xJ.getInternalTexture();
        rJ && (rJ.label = GJ), JJ.uvSet = xJ.coordinatesIndex, JJ.matrix.set((0, OJ.L)(xJ)), (0, DJ.H)(JJ, xJ)
      },
      cube: (JJ, cJ, ZJ) => {
        let {
          rootUrl: FJ,
          files: eJ,
          noMipmap: AJ,
          luminance: qJ
        } = ZJ;
        const {
          samplingMode: jJ
        } = JJ.sampler, YJ = jJ === (0, DJ.A)(AJ) ? null : () => {
          (0, OJ.H)(hJ, jJ)
        }, hJ = new UJ.e(FJ, cJ, null, AJ, eJ, YJ, null, (0, DJ.w)(qJ));
        hJ.coordinatesMode = XJ.b.SKYBOX_MODE, (0, DJ.H)(JJ, hJ)
      },
      canvas: (JJ, cJ, ZJ) => {
        let {
          width: FJ,
          height: UJ,
          mipmaps: AJ,
          samplingMode: qJ,
          hasAlpha: jJ = !1,
          wrap: YJ = XJ.b.CLAMP_ADDRESSMODE
        } = ZJ;
        const hJ = new eJ.d(cJ, {
          width: FJ,
          height: UJ
        }, JJ, AJ, qJ);
        hJ.hasAlpha = jJ, hJ.wrapU = YJ, hJ.wrapV = YJ;
        const DJ = (0, OJ.w)(hJ);
        return (0, OJ.z)(DJ, hJ), DJ
      }
    })
  },
  40033: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => YJ,
      f: () => hJ,
      g: () => DJ
    });
    var FJ = ZJ(40018),
      UJ = ZJ(38859),
      eJ = ZJ(39065),
      XJ = ZJ(39179),
      AJ = ZJ(40024),
      qJ = ZJ(39170),
      jJ = ZJ(36378);
    class YJ extends XJ.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (JJ, cJ) => {
          this.releaseUnlessInstanced(cJ)
        }, this.onLinked = null
      }
      link(JJ) {
        var cJ;
        (0, jJ.n)(JJ), this.model = JJ, null === (cJ = this.onLinked) || void 0 === cJ || cJ.call(this, JJ)
      }
      relink() {
        this.release();
        const JJ = [];
        for (const UJ of Object.values(this._vertexBuffers))
          if (!UJ.getIsInstanced()) {
            const {
              byteOffset: cJ,
              byteStride: ZJ,
              type: FJ,
              normalized: eJ
            } = UJ;
            JJ.push({
              kind: UJ.getKind(),
              data: UJ.getData(),
              offset: cJ,
              stride: ZJ,
              components: UJ.getSize(),
              glType: FJ,
              isNormalized: eJ
            })
          } const cJ = this._indices.length ? this._indices : null,
          {
            minimum: ZJ,
            maximum: FJ
          } = this.extend;
        this.link(new jJ.f(JJ, cJ, this.getTotalVertices(), new Float64Array(ZJ.JFJ()), new Float64Array(FJ.JFJ())))
      }
      copy(JJ) {
        if (!this.model) return super.copy(JJ);
        const cJ = new YJ(JJ, this.Qy()),
          ZJ = this.QXJ(void 0, !0);
        ZJ && cJ.setIndices(ZJ);
        let XJ = !1;
        for (const eJ in this._vertexBuffers) {
          const JJ = this._vertexBuffers[eJ],
            ZJ = JJ.getData();
          if (!ZJ) continue;
          const AJ = JJ.getSize(),
            {
              type: qJ,
              byteOffset: jJ,
              byteStride: YJ,
              normalized: hJ
            } = JJ;
          XJ ||= JJ.isUpdatable();
          const DJ = JJ.getIsInstanced() ? (ZJ instanceof Array ? 4 * ZJ.length : ZJ.byteLength) / YJ : this.getTotalVertices(),
            sJ = (0, UJ.r)(ZJ, AJ, qJ, jJ, YJ, DJ, !0),
            nJ = {
              updatable: JJ.isUpdatable(),
              stride: AJ,
              type: qJ,
              normalized: hJ,
              takeBufferOwnership: !0,
              instanced: JJ.getIsInstanced()
            };
          cJ.setVerticesBuffer(new FJ.e(this.gn(), sJ, eJ, nJ), DJ)
        }
        return cJ._updatable = XJ, cJ._boundingInfo = new eJ.b(this.extend.minimum, this.extend.maximum), cJ.relink(), cJ
      }
      static mergeMeshes(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const qJ = JJ[0].Qy(),
          jJ = new AJ.d(JJ[0].name + "_merged", qJ),
          hJ = new YJ(XJ.d.RandomId(), qJ, void 0, !1, jJ);
        try {
          if (!AJ.d.MergeMeshes(JJ, cJ, ZJ, jJ, UJ, eJ)) return jJ.dispose(), null
        } catch (DJ) {
          throw jJ.dispose(), DJ
        }
        return hJ.relink(), jJ
      }
      removeVerticesData(JJ) {
        this.releaseUnlessInstanced(JJ), super.removeVerticesData(JJ)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(JJ) {
        var cJ;
        JJ && null !== (cJ = this.getVertexBuffer(JJ)) && void 0 !== cJ && cJ.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, jJ.x)(this.model), this.model = null)
      }
    }

    function hJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new AJ.d(JJ, ZJ);
      const UJ = (0, jJ.l)(cJ),
        {
          positions: eJ,
          normals: hJ,
          uvs: DJ,
          indices: sJ,
          named: nJ = {}
        } = cJ,
        GJ = new qJ.e;
      GJ.positions = eJ, GJ.normals = null !== hJ && void 0 !== hJ ? hJ : null, GJ.uvs = null !== DJ && void 0 !== DJ ? DJ : null, GJ.indices = sJ;
      const fJ = new YJ(XJ.d.RandomId(), ZJ, GJ, !1, FJ);
      for (const {
          kind: XJ,
          components: AJ
        }
        of UJ.vertexAttributes) XJ in nJ && FJ.setVerticesData(XJ, nJ[XJ], !1, AJ);
      return fJ.link(UJ), FJ
    }

    function DJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const UJ = new AJ.d(JJ, ZJ),
        {
          positions: eJ,
          normals: XJ,
          uvs: jJ,
          indices: YJ
        } = cJ;
      return Object.assign(new qJ.e, {
        positions: eJ,
        normals: XJ,
        uvs: jJ,
        indices: YJ
      }).applyToMesh(UJ, FJ), UJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);