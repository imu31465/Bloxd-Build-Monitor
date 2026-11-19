export const id = 282;
export const ids = [282];
export const modules = {
  40323: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      CapeMaterialPlugin: () => VY,
      HueTintMaterialPlugin: () => SY,
      LifeformMaterialPlugin: () => lY,
      OverlayMaterialPlugin: () => TY
    });
    var FY = DY(40327),
      AY = DY(37353);
    class IY extends((0, FY.d)(AY.c)) {}(0, FY.g)(AY.c, IY);
    var RY = DY(36443);
    class OY extends((0, FY.d)(RY.g)) {}(0, FY.g)(RY.g, OY);
    var gY = DY(37189);
    class aY extends((0, FY.d)(gY.f)) {}(0, FY.g)(gY.f, aY);
    var vY = DY(36681),
      uY = DY(39391),
      sY = DY(36678);
    class iY extends((0, FY.d)(sY.f)) {
      constructor(YY, rY, DY) {
        super(YY, rY, DY), (0, vY.g)(YY)
      }
      dispose(YY) {
        (0, vY.h)(this._material), super.dispose(YY)
      }
    }(0, FY.g)(sY.f, iY), (0, sY.j)({
      disableUnusedSpecularTerm: FY.c,
      isLightingDisabled: YY => YY instanceof uY.StandardMaterial && YY.disableLighting
    });
    var yY = DY(38050);
    class QY extends((0, FY.d)(yY.f)) {}(0, FY.g)(yY.f, QY);
    var oY = DY(38154),
      WY = DY(36597),
      EY = DY(37527),
      mY = DY(36490);
    class VY extends((0, FY.d)(oY.e)) {}(0, FY.g)(oY.e, VY);
    class SY extends((0, FY.d)(WY.c)) {}(0, FY.g)(WY.c, SY);
    class lY extends((0, FY.d)(EY.n)) {}(0, FY.g)(EY.n, lY);
    class TY extends((0, FY.d)(mY.e)) {}(0, FY.g)(mY.e, TY)
  },
  40327: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => wY,
      d: () => EY,
      g: () => GY
    });
    var FY = DY(39391),
      AY = DY(40329),
      IY = DY(40372),
      RY = DY(40338),
      OY = DY(37159),
      gY = DY(37168),
      aY = DY(37170),
      vY = DY(37172),
      uY = DY(36477),
      sY = DY(36482),
      iY = DY(40347),
      yY = DY(36465),
      QY = DY(36467),
      oY = DY(36454);

    function WY(YY, rY) {
      return Object.assign((function(YY, DY, FY, AY) {
        return rY(this.featureState, YY, DY, FY, AY)
      }), {
        iy: YY
      })
    }

    function EY(YY) {
      const rY = class extends iY.c {
          constructor(rY, DY) {
            const FY = (0, QY.S)(rY),
              AY = FY && (0, QY.v)(FY, YY.name);
            for (var IY = arguments.length, RY = new Array(IY > 2 ? IY - 2 : 0), OY = 2; OY < IY; OY++) RY[OY - 2] = arguments[OY];
            super(rY, YY.name, YY.priority, AY ? AY.defines : YY.defines(...RY), !1), this.featureState = void 0, this.featureState = DY, this._pluginManager._addPlugin(this), this._enable(!0), (0, QY.x)(this._material, YY, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return YY.className
          }
          isCompatible(YY) {
            return YY === oY.e.GLSL || YY === oY.e.WGSL
          }
        },
        DY = (0, yY.j)(YY);
      for (const [FY, AY] of Object.entries(yY.d)) {
        const IY = YY[FY];
        if (IY) {
          const YY = DY[FY];
          Object.defineProperty(rY.prototype, AY, {
            value: WY(IY, YY),
            writable: !0,
            configurable: !0
          })
        }
      }
      return rY
    }
    class mY extends(EY(OY.d)) {}
    var VY = DY(38965),
      SY = DY(40352);
    const lY = new WeakMap;

    function TY(YY, rY, DY) {
      let FY = lY.get(DY);
      FY || (FY = new Map, lY.set(DY, FY));
      const {
        url: AY
      } = YY;
      let IY = FY.get(AY);
      return IY || (IY = async function(YY, rY, DY) {
        const {
          width: FY,
          height: AY
        } = YY.getSize(), IY = Math.round(AY / FY), OY = rY && rY.byteLength === FY * FY * IY * 4 ? rY : YY._readPixelsSync();
        return new SY.d(OY, FY, FY, IY, VY.c.TEXTUREFORMAT_RGBA, DY, !0, !1, RY.d.NEAREST_NEAREST_MIPLINEAR)
      }(YY, rY, DY), FY.set(AY, IY), IY.catch((() => {
        FY.delete(AY)
      }))), IY
    }
    var eY = DY(37180);
    class NY extends(EY(gY.f)) {
      constructor(YY, rY) {
        super(YY, rY), rY.textures.forEach(((YY, rY) => {
          YY.mirror.onLoadObservable.add((YY => {
            this.setTextureArrayData(YY, rY).catch((YY => {
              console.error(`Failed to build texture array for atlas ${rY}`, YY)
            }))
          }))
        })), (0, eY.g)(rY, YY.shaderLanguage)
      }
      async setTextureArrayData(YY, rY) {
        var DY, FY;
        const AY = this.featureState,
          {
            width: IY,
            height: RY
          } = YY.getSize(),
          OY = AY.useWebGL2 ? await TY(YY, null !== (DY = null === (FY = AY.sources.pixels) || void 0 === FY ? void 0 : FY[rY]) && void 0 !== DY ? DY : null, this._material.hT()) : null;
        (0, eY.e)(this._material, AY, rY, OY, IY, Math.round(RY / IY), this._material.shaderLanguage)
      }
    }
    var BY = DY(40356),
      cY = DY(39422),
      KY = DY(36518),
      HY = DY(40362),
      zY = DY(39530),
      ZY = DY(39416),
      CY = DY(40314),
      fY = DY(36851),
      jY = DY(40368);
    class hY extends BY.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const dY = {
      Mesh: HY.d,
      TransformNode: CY.e,
      Ny: BY.e,
      VertexBuffer: BY.i,
      BoundingInfo: cY.d,
      xy: KY.xy,
      ArenaBuffer: hY,
      SubMesh: ZY.d,
      VertexData: zY.c,
      MirroredGeometry: jY.d,
      meshFromArrays: jY.e,
      plainMeshFromArrays: jY.h
    };
    (0, fY.f)(dY);
    var JY = DY(36681);
    class MY extends(EY(vY.d)) {
      constructor(YY, rY) {
        if (super(YY, rY), YY instanceof FY.StandardMaterial && rY.dirLightCount > 0) {
          const rY = YY,
            DY = rY._blockDirtyMechanism;
          rY._blockDirtyMechanism = !0, YY.disableLighting = !0, rY._blockDirtyMechanism = DY;
          const FY = (0, QY.S)(YY);
          FY && (FY.disableLighting = !0, (0, QY.Q)(FY))
        }(0, JY.g)(YY)
      }
      dispose(YY) {
        (0, JY.h)(this._material), super.dispose(YY)
      }
    }

    function wY(YY, rY) {
      if (!(rY instanceof FY.StandardMaterial) || rY.specularTexture) return;
      const {
        r: DY,
        g: AY,
        b: IY
      } = rY.specularColor;
      0 === DY && 0 === AY && 0 === IY && (YY.SPECULARTERM = !1)
    }(0, vY.c)({
      disableUnusedSpecularTerm: wY
    });
    var bY = DY(36615),
      XY = DY(36865);
    const qY = new RegExp(`^#define ${aY.b}\\s*$`, "m");
    class pY extends(EY(aY.h)) {
      constructor(YY, rY) {
        super(YY, rY), this.Ky = !1, rY.ditherOnlyWhileFading && (XY.f.add(YY), this.prewarmDitherTwins(YY))
      }
      prewarmDitherTwins(YY) {
        const rY = new WeakSet;
        YY.onEffectCreatedObservable.add((DY => {
          let {
            effect: FY,
            subMesh: AY
          } = DY;
          if (this.featureState.prewarmingDither || rY.has(FY)) return;
          rY.add(FY);
          const IY = null === AY || void 0 === AY ? void 0 : AY.getMesh();
          IY && !qY.test(FY.defines) && YY.hT().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(IY) || rY.delete(FY)
          }))
        }))
      }
      prewarmDither(YY) {
        if (this.Ky || YY.CrY()) return !1;
        const rY = new ZY.d(0, 0, 0, 0, 0, YY, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(YY, rY)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== rY.effect
      }
      dispose(YY) {
        this.Ky = !0, super.dispose(YY)
      }
    }
    const kY = new Map;

    function GY(YY, rY) {
      kY.set(YY, rY)
    }
    GY(OY.d, mY), GY(gY.f, NY), GY(aY.h, pY), GY(vY.d, MY), (0, uY.e)({
      create: (YY, rY) => {
        const DY = new FY.StandardMaterial(YY.name, rY);
        return (0, bY.p)(YY, DY), DY.detailMap._pluginDefineNames
      },
      write: (YY, rY, DY) => {
        (0, bY.V)(YY.mirror, rY, DY)
      },
      addFeature: (YY, rY, DY) => {
        const FY = kY.get(rY.feature);
        if (!FY) throw new Error(`${rY.feature.name} has no plugin class (registerPluginClass)`);
        new FY(YY.mirror, rY.state, ...DY)
      },
      texture: (YY, rY, DY) => {
        let {
          url: FY,
          noMipmap: AY,
          invertY: IY,
          samplingMode: OY,
          data: gY,
          sets: aY
        } = DY;
        if (!gY) {
          const DY = new RY.d(FY, rY, AY, IY, OY);
          return Object.assign(DY, aY), void(0, sY.R)(YY, DY)
        }
        const vY = {},
          uY = new Promise(((YY, rY) => {
            vY.onLoad = YY, vY.onError = (YY, DY) => {
              rY(new Error(`${gY.context}: ${(null===DY||void 0===DY?void 0:DY.message)||YY||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: iY,
            bytes: yY,
            label: QY
          } = gY,
          oY = {
            noMipmap: AY,
            invertY: !1,
            samplingMode: OY,
            ...vY,
            mimeType: iY,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          WY = new RY.d(null, rY, oY);
        bY.t.set(WY, uY), Object.assign(WY, aY), WY.updateURL(FY, yY);
        const EY = WY.getInternalTexture();
        EY && (EY.label = QY), YY.uvSet = WY.coordinatesIndex, YY.matrix.set((0, bY.M)(WY)), (0, sY.R)(YY, WY)
      },
      cube: (YY, rY, DY) => {
        let {
          rootUrl: FY,
          files: IY,
          noMipmap: OY,
          luminance: gY
        } = DY;
        const {
          samplingMode: aY
        } = YY.sampler, vY = aY === (0, sY.I)(OY) ? null : () => {
          (0, bY.L)(uY, aY)
        }, uY = new AY.d(FY, rY, null, OY, IY, vY, null, (0, sY.H)(gY));
        uY.coordinatesMode = RY.d.SKYBOX_MODE, (0, sY.R)(YY, uY)
      },
      canvas: (YY, rY, DY) => {
        let {
          width: FY,
          height: AY,
          mipmaps: OY,
          samplingMode: gY,
          hasAlpha: aY = !1,
          wrap: vY = RY.d.CLAMP_ADDRESSMODE
        } = DY;
        const uY = new IY.d(rY, {
          width: FY,
          height: AY
        }, YY, OY, gY);
        uY.hasAlpha = aY, uY.wrapU = vY, uY.wrapV = vY;
        const sY = (0, bY.C)(uY);
        return (0, bY.F)(sY, uY), sY
      }
    })
  },
  40368: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => vY,
      e: () => uY,
      h: () => sY
    });
    var FY = DY(40356),
      AY = DY(39180),
      IY = DY(39422),
      RY = DY(39534),
      OY = DY(40362),
      gY = DY(39530),
      aY = DY(36739);
    class vY extends RY.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (YY, rY) => {
          this.releaseUnlessInstanced(rY)
        }, this.onLinked = null
      }
      link(YY) {
        var rY;
        (0, aY.n)(YY), this.model = YY, null === (rY = this.onLinked) || void 0 === rY || rY.call(this, YY)
      }
      relink() {
        this.release();
        const YY = [];
        for (const AY of Object.values(this._vertexBuffers))
          if (!AY.getIsInstanced()) {
            const {
              byteOffset: rY,
              byteStride: DY,
              type: FY,
              normalized: IY
            } = AY;
            YY.push({
              kind: AY.getKind(),
              data: AY.getData(),
              offset: rY,
              stride: DY,
              components: AY.getSize(),
              glType: FY,
              isNormalized: IY
            })
          } const rY = this._indices.length ? this._indices : null,
          {
            minimum: DY,
            maximum: FY
          } = this.extend;
        this.link(new aY.f(YY, rY, this.getTotalVertices(), new Float64Array(DY.VDY()), new Float64Array(FY.VDY())))
      }
      copy(YY) {
        if (!this.model) return super.copy(YY);
        const rY = new vY(YY, this.hT()),
          DY = this.XIY(void 0, !0);
        DY && rY.setIndices(DY);
        let RY = !1;
        for (const IY in this._vertexBuffers) {
          const YY = this._vertexBuffers[IY],
            DY = YY.getData();
          if (!DY) continue;
          const OY = YY.getSize(),
            {
              type: gY,
              byteOffset: aY,
              byteStride: vY,
              normalized: uY
            } = YY;
          RY ||= YY.isUpdatable();
          const sY = YY.getIsInstanced() ? (DY instanceof Array ? 4 * DY.length : DY.byteLength) / vY : this.getTotalVertices(),
            iY = (0, AY.q)(DY, OY, gY, aY, vY, sY, !0),
            yY = {
              updatable: YY.isUpdatable(),
              stride: OY,
              type: gY,
              normalized: uY,
              takeBufferOwnership: !0,
              instanced: YY.getIsInstanced()
            };
          rY.setVerticesBuffer(new FY.i(this.ky(), iY, IY, yY), sY)
        }
        return rY._updatable = RY, rY._boundingInfo = new IY.d(this.extend.minimum, this.extend.maximum), rY.relink(), rY
      }
      static mergeMeshes(YY, rY, DY, FY, AY, IY) {
        const gY = YY[0].hT(),
          aY = new OY.d(YY[0].name + "_merged", gY),
          uY = new vY(RY.c.RandomId(), gY, void 0, !1, aY);
        try {
          if (!OY.d.MergeMeshes(YY, rY, DY, aY, AY, IY)) return aY.dispose(), null
        } catch (sY) {
          throw aY.dispose(), sY
        }
        return uY.relink(), aY
      }
      removeVerticesData(YY) {
        this.releaseUnlessInstanced(YY), super.removeVerticesData(YY)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(YY) {
        var rY;
        YY && null !== (rY = this.getVertexBuffer(YY)) && void 0 !== rY && rY.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, aY.r)(this.model), this.model = null)
      }
    }

    function uY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new OY.d(YY, DY);
      const AY = (0, aY.k)(rY),
        {
          positions: IY,
          normals: uY,
          uvs: sY,
          indices: iY,
          named: yY = {}
        } = rY,
        QY = new gY.c;
      QY.positions = IY, QY.normals = null !== uY && void 0 !== uY ? uY : null, QY.uvs = null !== sY && void 0 !== sY ? sY : null, QY.indices = iY;
      const oY = new vY(RY.c.RandomId(), DY, QY, !1, FY);
      for (const {
          kind: RY,
          components: OY
        }
        of AY.vertexAttributes) RY in yY && FY.setVerticesData(RY, yY[RY], !1, OY);
      return oY.link(AY), FY
    }

    function sY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const AY = new OY.d(YY, DY),
        {
          positions: IY,
          normals: RY,
          uvs: aY,
          indices: vY
        } = rY;
      return Object.assign(new gY.c, {
        positions: IY,
        normals: RY,
        uvs: aY,
        indices: vY
      }).applyToMesh(AY, FY), AY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);