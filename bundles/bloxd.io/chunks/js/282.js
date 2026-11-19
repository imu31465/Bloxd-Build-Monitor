export const id = 282;
export const ids = [282];
export const modules = {
  40038: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      CapeMaterialPlugin: () => hT,
      HueTintMaterialPlugin: () => wT,
      LifeformMaterialPlugin: () => mT,
      OverlayMaterialPlugin: () => eT
    });
    var iT = IT(40043),
      zT = IT(36958);
    class kT extends((0, iT.d)(zT.e)) {}(0, iT.f)(zT.e, kT);
    var WT = IT(36034);
    class XT extends((0, iT.d)(WT.f)) {}(0, iT.f)(WT.f, XT);
    var BT = IT(36799);
    class FT extends((0, iT.d)(BT.e)) {}(0, iT.f)(BT.e, FT);
    var ST = IT(36263),
      DT = IT(39038),
      LT = IT(36261);
    class xT extends((0, iT.d)(LT.f)) {
      constructor(TT, oT, IT) {
        super(TT, oT, IT), (0, ST.j)(TT)
      }
      dispose(TT) {
        (0, ST.n)(this._material), super.dispose(TT)
      }
    }(0, iT.f)(LT.f, xT), (0, LT.g)({
      disableUnusedSpecularTerm: iT.b,
      isLightingDisabled: TT => TT instanceof DT.StandardMaterial && TT.disableLighting
    });
    var cT = IT(37671);
    class KT extends((0, iT.d)(cT.h)) {}(0, iT.f)(cT.h, KT);
    var MT = IT(37777),
      rT = IT(36179),
      AT = IT(37138),
      gT = IT(36083);
    class hT extends((0, iT.d)(MT.e)) {}(0, iT.f)(MT.e, hT);
    class wT extends((0, iT.d)(rT.c)) {}(0, iT.f)(rT.c, wT);
    class mT extends((0, iT.d)(AT.m)) {}(0, iT.f)(AT.m, mT);
    class eT extends((0, iT.d)(gT.e)) {}(0, iT.f)(gT.e, eT)
  },
  40043: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => qT,
      d: () => AT,
      f: () => pT
    });
    var iT = IT(39038),
      zT = IT(40050),
      kT = IT(40086),
      WT = IT(40055),
      XT = IT(36764),
      BT = IT(36774),
      FT = IT(36777),
      ST = IT(36782),
      DT = IT(36071),
      LT = IT(36076),
      xT = IT(40059),
      cT = IT(36056),
      KT = IT(36063),
      MT = IT(36047);

    function rT(TT, oT) {
      return Object.assign((function(TT, IT, iT, zT) {
        return oT(this.featureState, TT, IT, iT, zT)
      }), {
        Dc: TT
      })
    }

    function AT(TT) {
      const oT = class extends xT.d {
          constructor(oT, IT) {
            const iT = (0, KT.Z)(oT),
              zT = iT && (0, KT.w)(iT, TT.name);
            for (var kT = arguments.length, WT = new Array(kT > 2 ? kT - 2 : 0), XT = 2; XT < kT; XT++) WT[XT - 2] = arguments[XT];
            super(oT, TT.name, TT.priority, zT ? zT.defines : TT.defines(...WT), !1), this.featureState = void 0, this.featureState = IT, this._pluginManager._addPlugin(this), this._enable(!0), (0, KT.A)(this._material, TT, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return TT.className
          }
          isCompatible(TT) {
            return TT === MT.d.GLSL || TT === MT.d.WGSL
          }
        },
        IT = (0, cT.j)(TT);
      for (const [iT, zT] of Object.entries(cT.d)) {
        const kT = TT[iT];
        if (kT) {
          const TT = IT[iT];
          Object.defineProperty(oT.prototype, zT, {
            value: rT(kT, TT),
            writable: !0,
            configurable: !0
          })
        }
      }
      return oT
    }
    class gT extends(AT(XT.d)) {}
    var hT = IT(38589),
      wT = IT(40064);
    const mT = new WeakMap;

    function eT(TT, oT, IT) {
      let iT = mT.get(IT);
      iT || (iT = new Map, mT.set(IT, iT));
      const {
        url: zT
      } = TT;
      let kT = iT.get(zT);
      return kT || (kT = async function(TT, oT, IT) {
        const {
          width: iT,
          height: zT
        } = TT.getSize(), kT = Math.round(zT / iT), XT = oT && oT.byteLength === iT * iT * kT * 4 ? oT : TT._readPixelsSync();
        return new wT.e(XT, iT, iT, kT, hT.c.TEXTUREFORMAT_RGBA, IT, !0, !1, WT.d.NEAREST_NEAREST_MIPLINEAR)
      }(TT, oT, IT), iT.set(zT, kT), kT.catch((() => {
        iT.delete(zT)
      }))), kT
    }
    var RT = IT(36791);
    class uT extends(AT(BT.f)) {
      constructor(TT, oT) {
        super(TT, oT), oT.textures.forEach(((TT, oT) => {
          TT.mirror.onLoadObservable.add((TT => {
            this.setTextureArrayData(TT, oT).catch((TT => {
              console.error(`Failed to build texture array for atlas ${oT}`, TT)
            }))
          }))
        })), (0, RT.e)(oT, TT.shaderLanguage)
      }
      async setTextureArrayData(TT, oT) {
        var IT, iT;
        const zT = this.featureState,
          {
            width: kT,
            height: WT
          } = TT.getSize(),
          XT = zT.useWebGL2 ? await eT(TT, null !== (IT = null === (iT = zT.sources.pixels) || void 0 === iT ? void 0 : iT[oT]) && void 0 !== IT ? IT : null, this._material.pC()) : null;
        (0, RT.b)(this._material, zT, oT, XT, kT, Math.round(WT / kT), this._material.shaderLanguage)
      }
    }
    var vT = IT(40072),
      ET = IT(39091),
      fT = IT(36114),
      CT = IT(40079),
      jT = IT(39210),
      JT = IT(39076),
      UT = IT(40023),
      aT = IT(36439),
      YT = IT(40084);
    class QT extends vT.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const OT = {
      Mesh: CT.b,
      TransformNode: UT.c,
      vc: vT.b,
      VertexBuffer: vT.d,
      BoundingInfo: ET.d,
      sc: fT.sc,
      ArenaBuffer: QT,
      SubMesh: JT.c,
      VertexData: jT.c,
      MirroredGeometry: YT.c,
      meshFromArrays: YT.d,
      plainMeshFromArrays: YT.h
    };
    (0, aT.g)(OT);
    var HT = IT(36263);
    class nT extends(AT(ST.h)) {
      constructor(TT, oT) {
        if (super(TT, oT), TT instanceof iT.StandardMaterial && oT.dirLightCount > 0) {
          const oT = TT,
            IT = oT._blockDirtyMechanism;
          oT._blockDirtyMechanism = !0, TT.disableLighting = !0, oT._blockDirtyMechanism = IT;
          const iT = (0, KT.Z)(TT);
          iT && (iT.disableLighting = !0, (0, KT.W)(iT))
        }(0, HT.j)(TT)
      }
      dispose(TT) {
        (0, HT.n)(this._material), super.dispose(TT)
      }
    }

    function qT(TT, oT) {
      if (!(oT instanceof iT.StandardMaterial) || oT.specularTexture) return;
      const {
        r: IT,
        g: zT,
        b: kT
      } = oT.specularColor;
      0 === IT && 0 === zT && 0 === kT && (TT.SPECULARTERM = !1)
    }(0, ST.g)({
      disableUnusedSpecularTerm: qT
    });
    var ZT = IT(36205),
      lT = IT(36454);
    const sT = new RegExp(`^#define ${FT.b}\\s*$`, "m");
    class tT extends(AT(FT.h)) {
      constructor(TT, oT) {
        super(TT, oT), this.Ec = !1, oT.ditherOnlyWhileFading && (lT.c.add(TT), this.prewarmDitherTwins(TT))
      }
      prewarmDitherTwins(TT) {
        const oT = new WeakSet;
        TT.onEffectCreatedObservable.add((IT => {
          let {
            effect: iT,
            subMesh: zT
          } = IT;
          if (this.featureState.prewarmingDither || oT.has(iT)) return;
          oT.add(iT);
          const kT = null === zT || void 0 === zT ? void 0 : zT.getMesh();
          kT && !sT.test(iT.defines) && TT.pC().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(kT) || oT.delete(iT)
          }))
        }))
      }
      prewarmDither(TT) {
        if (this.Ec || TT.IIT()) return !1;
        const oT = new JT.c(0, 0, 0, 0, 0, TT, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(TT, oT)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== oT.effect
      }
      dispose(TT) {
        this.Ec = !0, super.dispose(TT)
      }
    }
    const GT = new Map;

    function pT(TT, oT) {
      GT.set(TT, oT)
    }
    pT(XT.d, gT), pT(BT.f, uT), pT(FT.h, tT), pT(ST.h, nT), (0, DT.b)({
      create: (TT, oT) => {
        const IT = new iT.StandardMaterial(TT.name, oT);
        return (0, ZT.g)(TT, IT), IT.detailMap._pluginDefineNames
      },
      write: (TT, oT, IT) => {
        (0, ZT.M)(TT.mirror, oT, IT)
      },
      addFeature: (TT, oT, IT) => {
        const iT = GT.get(oT.feature);
        if (!iT) throw new Error(`${oT.feature.name} has no plugin class (registerPluginClass)`);
        new iT(TT.mirror, oT.state, ...IT)
      },
      texture: (TT, oT, IT) => {
        let {
          url: iT,
          noMipmap: zT,
          invertY: kT,
          samplingMode: XT,
          data: BT,
          sets: FT
        } = IT;
        if (!BT) {
          const IT = new WT.d(iT, oT, zT, kT, XT);
          return Object.assign(IT, FT), void(0, LT.I)(TT, IT)
        }
        const ST = {},
          DT = new Promise(((TT, oT) => {
            ST.onLoad = TT, ST.onError = (TT, IT) => {
              oT(new Error(`${BT.context}: ${(null===IT||void 0===IT?void 0:IT.message)||TT||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: xT,
            bytes: cT,
            label: KT
          } = BT,
          MT = {
            noMipmap: zT,
            invertY: !1,
            samplingMode: XT,
            ...ST,
            mimeType: xT,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          rT = new WT.d(null, oT, MT);
        ZT.h.set(rT, DT), Object.assign(rT, FT), rT.updateURL(iT, cT);
        const AT = rT.getInternalTexture();
        AT && (AT.label = KT), TT.uvSet = rT.coordinatesIndex, TT.matrix.set((0, ZT.A)(rT)), (0, LT.I)(TT, rT)
      },
      cube: (TT, oT, IT) => {
        let {
          rootUrl: iT,
          files: kT,
          noMipmap: XT,
          luminance: BT
        } = IT;
        const {
          samplingMode: FT
        } = TT.sampler, ST = FT === (0, LT.A)(XT) ? null : () => {
          (0, ZT.z)(DT, FT)
        }, DT = new zT.e(iT, oT, null, XT, kT, ST, null, (0, LT.x)(BT));
        DT.coordinatesMode = WT.d.SKYBOX_MODE, (0, LT.I)(TT, DT)
      },
      canvas: (TT, oT, IT) => {
        let {
          width: iT,
          height: zT,
          mipmaps: XT,
          samplingMode: BT,
          hasAlpha: FT = !1,
          wrap: ST = WT.d.CLAMP_ADDRESSMODE
        } = IT;
        const DT = new kT.c(oT, {
          width: iT,
          height: zT
        }, TT, XT, BT);
        DT.hasAlpha = FT, DT.wrapU = ST, DT.wrapV = ST;
        const LT = (0, ZT.p)(DT);
        return (0, ZT.q)(LT, DT), LT
      }
    })
  },
  40084: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      d: () => DT,
      h: () => LT
    });
    var iT = IT(40072),
      zT = IT(38851),
      kT = IT(39091),
      WT = IT(39212),
      XT = IT(40079),
      BT = IT(39210),
      FT = IT(36325);
    class ST extends WT.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (TT, oT) => {
          this.releaseUnlessInstanced(oT)
        }, this.onLinked = null
      }
      link(TT) {
        var oT;
        (0, FT.m)(TT), this.model = TT, null === (oT = this.onLinked) || void 0 === oT || oT.call(this, TT)
      }
      relink() {
        this.release();
        const TT = [];
        for (const zT of Object.values(this._vertexBuffers))
          if (!zT.getIsInstanced()) {
            const {
              byteOffset: oT,
              byteStride: IT,
              type: iT,
              normalized: kT
            } = zT;
            TT.push({
              kind: zT.getKind(),
              data: zT.getData(),
              offset: oT,
              stride: IT,
              components: zT.getSize(),
              glType: iT,
              isNormalized: kT
            })
          } const oT = this._indices.length ? this._indices : null,
          {
            minimum: IT,
            maximum: iT
          } = this.extend;
        this.link(new FT.g(TT, oT, this.getTotalVertices(), new Float64Array(IT.bIT()), new Float64Array(iT.bIT())))
      }
      copy(TT) {
        if (!this.model) return super.copy(TT);
        const oT = new ST(TT, this.pC()),
          IT = this.hWT(void 0, !0);
        IT && oT.setIndices(IT);
        let WT = !1;
        for (const kT in this._vertexBuffers) {
          const TT = this._vertexBuffers[kT],
            IT = TT.getData();
          if (!IT) continue;
          const XT = TT.getSize(),
            {
              type: BT,
              byteOffset: FT,
              byteStride: ST,
              normalized: DT
            } = TT;
          WT ||= TT.isUpdatable();
          const LT = TT.getIsInstanced() ? (IT instanceof Array ? 4 * IT.length : IT.byteLength) / ST : this.getTotalVertices(),
            xT = (0, zT.o)(IT, XT, BT, FT, ST, LT, !0),
            cT = {
              updatable: TT.isUpdatable(),
              stride: XT,
              type: BT,
              normalized: DT,
              takeBufferOwnership: !0,
              instanced: TT.getIsInstanced()
            };
          oT.setVerticesBuffer(new iT.d(this.Zc(), xT, kT, cT), LT)
        }
        return oT._updatable = WT, oT._boundingInfo = new kT.d(this.extend.minimum, this.extend.maximum), oT.relink(), oT
      }
      static mergeMeshes(TT, oT, IT, iT, zT, kT) {
        const BT = TT[0].pC(),
          FT = new XT.b(TT[0].name + "_merged", BT),
          DT = new ST(WT.d.RandomId(), BT, void 0, !1, FT);
        try {
          if (!XT.b.MergeMeshes(TT, oT, IT, FT, zT, kT)) return FT.dispose(), null
        } catch (LT) {
          throw FT.dispose(), LT
        }
        return DT.relink(), FT
      }
      removeVerticesData(TT) {
        this.releaseUnlessInstanced(TT), super.removeVerticesData(TT)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(TT) {
        var oT;
        TT && null !== (oT = this.getVertexBuffer(TT)) && void 0 !== oT && oT.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, FT.v)(this.model), this.model = null)
      }
    }

    function DT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new XT.b(TT, IT);
      const zT = (0, FT.j)(oT),
        {
          positions: kT,
          normals: DT,
          uvs: LT,
          indices: xT,
          named: cT = {}
        } = oT,
        KT = new BT.c;
      KT.positions = kT, KT.normals = null !== DT && void 0 !== DT ? DT : null, KT.uvs = null !== LT && void 0 !== LT ? LT : null, KT.indices = xT;
      const MT = new ST(WT.d.RandomId(), IT, KT, !1, iT);
      for (const {
          kind: WT,
          components: XT
        }
        of zT.vertexAttributes) WT in cT && iT.setVerticesData(WT, cT[WT], !1, XT);
      return MT.link(zT), iT
    }

    function LT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const zT = new XT.b(TT, IT),
        {
          positions: kT,
          normals: WT,
          uvs: FT,
          indices: ST
        } = oT;
      return Object.assign(new BT.c, {
        positions: kT,
        normals: WT,
        uvs: FT,
        indices: ST
      }).applyToMesh(zT, iT), zT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);