export const id = 262;
export const ids = [262];
export const modules = {
  39084: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      CapeMaterialPlugin: () => kW,
      HueTintMaterialPlugin: () => qW,
      LifeformMaterialPlugin: () => VF,
      OverlayMaterialPlugin: () => NF
    });
    var CF = SF(39093),
      AF = SF(36412);
    class uF extends((0, CF.d)(AF.b)) {}(0, CF.e)(AF.b, uF);
    var hF = SF(35539);
    class bW extends((0, CF.d)(hF.d)) {}(0, CF.e)(hF.d, bW);
    var dF = SF(36252);
    class PF extends((0, CF.d)(dF.e)) {}(0, CF.e)(dF.e, PF);
    var RF = SF(35778),
      iW = SF(38233),
      eF = SF(35775);
    class EF extends((0, CF.d)(eF.g)) {
      constructor(FF, WF, SF) {
        super(FF, WF, SF), (0, RF.i)(FF)
      }
      dispose(FF) {
        (0, RF.m)(this._material), super.dispose(FF)
      }
    }(0, CF.e)(eF.g, EF), (0, eF.k)({
      disableUnusedSpecularTerm: CF.b,
      isLightingDisabled: FF => FF instanceof iW.StandardMaterial && FF.disableLighting
    });
    var QF = SF(37087);
    class rW extends((0, CF.d)(QF.g)) {}(0, CF.e)(QF.g, rW);
    var gW = SF(37185),
      tW = SF(35686),
      TF = SF(36582),
      aW = SF(35585);
    class kW extends((0, CF.d)(gW.e)) {}(0, CF.e)(gW.e, kW);
    class qW extends((0, CF.d)(tW.e)) {}(0, CF.e)(tW.e, qW);
    class VF extends((0, CF.d)(TF.j)) {}(0, CF.e)(TF.j, VF);
    class NF extends((0, CF.d)(aW.d)) {}(0, CF.e)(aW.d, NF)
  },
  39093: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => sF,
      d: () => TF,
      e: () => UF
    });
    var CF = SF(38233),
      AF = SF(39095),
      uF = SF(39132),
      hF = SF(39102),
      bW = SF(36214),
      dF = SF(36232),
      PF = SF(36239),
      RF = SF(36243),
      iW = SF(35577),
      eF = SF(35579),
      EF = SF(39104),
      QF = SF(35559),
      rW = SF(35563),
      gW = SF(35551);

    function tW(FF, WF) {
      return Object.assign((function(FF, SF, CF, AF) {
        return WF(this.featureState, FF, SF, CF, AF)
      }), {
        bA: FF
      })
    }

    function TF(FF) {
      const WF = class extends EF.c {
          constructor(WF, SF) {
            const CF = (0, rW.ab)(WF),
              AF = CF && (0, rW.x)(CF, FF.name);
            for (var uF = arguments.length, hF = new Array(uF > 2 ? uF - 2 : 0), bW = 2; bW < uF; bW++) hF[bW - 2] = arguments[bW];
            super(WF, FF.name, FF.priority, AF ? AF.defines : FF.defines(...hF), !1), this.featureState = void 0, this.featureState = SF, this._pluginManager._addPlugin(this), this._enable(!0), (0, rW.B)(this._material, FF, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return FF.className
          }
          isCompatible(FF) {
            return FF === gW.d.GLSL || FF === gW.d.WGSL
          }
        },
        SF = (0, QF.l)(FF);
      for (const [CF, AF] of Object.entries(QF.e)) {
        const uF = FF[CF];
        if (uF) {
          const FF = SF[CF];
          Object.defineProperty(WF.prototype, AF, {
            value: tW(uF, FF),
            writable: !0,
            configurable: !0
          })
        }
      }
      return WF
    }
    class aW extends(TF(bW.b)) {}
    var kW = SF(37783),
      qW = SF(39109);
    const VF = new WeakMap;

    function NF(FF, WF, SF) {
      let CF = VF.get(SF);
      CF || (CF = new Map, VF.set(SF, CF));
      const {
        url: AF
      } = FF;
      let uF = CF.get(AF);
      return uF || (uF = async function(FF, WF, SF) {
        const {
          width: CF,
          height: AF
        } = FF.getSize(), uF = Math.round(AF / CF), bW = WF && WF.byteLength === CF * CF * uF * 4 ? WF : FF._readPixelsSync();
        return new qW.b(bW, CF, CF, uF, kW.d.TEXTUREFORMAT_RGBA, SF, !0, !1, hF.d.NEAREST_NEAREST_MIPLINEAR)
      }(FF, WF, SF), CF.set(AF, uF), uF.catch((() => {
        CF.delete(AF)
      }))), uF
    }
    var DF = SF(36246);
    class LF extends(TF(dF.h)) {
      constructor(FF, WF) {
        super(FF, WF), WF.textures.forEach(((FF, WF) => {
          FF.mirror.onLoadObservable.add((FF => {
            this.setTextureArrayData(FF, WF).catch((FF => {
              console.error(`Failed to build texture array for atlas ${WF}`, FF)
            }))
          }))
        })), (0, DF.j)(WF, FF.shaderLanguage)
      }
      async setTextureArrayData(FF, WF) {
        var SF, CF;
        const AF = this.featureState,
          {
            width: uF,
            height: hF
          } = FF.getSize(),
          bW = AF.useWebGL2 ? await NF(FF, null !== (SF = null === (CF = AF.sources.pixels) || void 0 === CF ? void 0 : CF[WF]) && void 0 !== SF ? SF : null, this._material.OWF()) : null;
        (0, DF.e)(this._material, AF, WF, bW, uF, Math.round(hF / uF), this._material.shaderLanguage)
      }
    }
    var mW = SF(39116),
      OF = SF(38281),
      xW = SF(35617),
      ZF = SF(39121),
      oF = SF(38393),
      YF = SF(38269),
      MF = SF(39075),
      cW = SF(35932),
      GF = SF(39123);
    class zW extends mW.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const IF = {
      Mesh: ZF.c,
      TransformNode: MF.c,
      NC: mW.e,
      VertexBuffer: mW.h,
      BoundingInfo: OF.b,
      HC: xW.HC,
      ArenaBuffer: zW,
      SubMesh: YF.c,
      VertexData: oF.b,
      MirroredGeometry: GF.d,
      meshFromArrays: GF.f,
      plainMeshFromArrays: GF.j
    };
    (0, cW.f)(IF);
    var fF = SF(35778);
    class yW extends(TF(RF.h)) {
      constructor(FF, WF) {
        if (super(FF, WF), FF instanceof CF.StandardMaterial && WF.dirLightCount > 0) {
          const WF = FF,
            SF = WF._blockDirtyMechanism;
          WF._blockDirtyMechanism = !0, FF.disableLighting = !0, WF._blockDirtyMechanism = SF;
          const CF = (0, rW.ab)(FF);
          CF && (CF.disableLighting = !0, (0, rW.Y)(CF))
        }(0, fF.i)(FF)
      }
      dispose(FF) {
        (0, fF.m)(this._material), super.dispose(FF)
      }
    }

    function sF(FF, WF) {
      if (!(WF instanceof CF.StandardMaterial) || WF.specularTexture) return;
      const {
        r: SF,
        g: AF,
        b: uF
      } = WF.specularColor;
      0 === SF && 0 === AF && 0 === uF && (FF.SPECULARTERM = !1)
    }(0, RF.f)({
      disableUnusedSpecularTerm: sF
    });
    var nF = SF(35715),
      HF = SF(35942);
    const KF = new RegExp(`^#define ${PF.e}\\s*$`, "m");
    class wF extends(TF(PF.j)) {
      constructor(FF, WF) {
        super(FF, WF), this.DC = !1, WF.ditherOnlyWhileFading && (HF.g.add(FF), this.prewarmDitherTwins(FF))
      }
      prewarmDitherTwins(FF) {
        const WF = new WeakSet;
        FF.onEffectCreatedObservable.add((SF => {
          let {
            effect: CF,
            subMesh: AF
          } = SF;
          if (this.featureState.prewarmingDither || WF.has(CF)) return;
          WF.add(CF);
          const uF = null === AF || void 0 === AF ? void 0 : AF.getMesh();
          uF && !KF.test(CF.defines) && FF.OWF().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(uF) || WF.delete(CF)
          }))
        }))
      }
      prewarmDither(FF) {
        if (this.DC || FF.ZdF()) return !1;
        const WF = new YF.c(0, 0, 0, 0, 0, FF, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(FF, WF)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== WF.effect
      }
      dispose(FF) {
        this.DC = !0, super.dispose(FF)
      }
    }
    const XF = new Map;

    function UF(FF, WF) {
      XF.set(FF, WF)
    }
    UF(bW.b, aW), UF(dF.h, LF), UF(PF.j, wF), UF(RF.h, yW), (0, iW.c)({
      create: (FF, WF) => {
        const SF = new CF.StandardMaterial(FF.name, WF);
        return (0, nF.m)(FF, SF), SF.detailMap._pluginDefineNames
      },
      write: (FF, WF, SF) => {
        (0, nF.O)(FF.mirror, WF, SF)
      },
      addFeature: (FF, WF, SF) => {
        const CF = XF.get(WF.feature);
        if (!CF) throw new Error(`${WF.feature.name} has no plugin class (registerPluginClass)`);
        new CF(FF.mirror, WF.state, ...SF)
      },
      texture: (FF, WF, SF) => {
        let {
          url: CF,
          noMipmap: AF,
          invertY: uF,
          samplingMode: bW,
          data: dF,
          sets: PF
        } = SF;
        if (!dF) {
          const SF = new hF.d(CF, WF, AF, uF, bW);
          return Object.assign(SF, PF), void(0, eF.M)(FF, SF)
        }
        const RF = {},
          iW = new Promise(((FF, WF) => {
            RF.onLoad = FF, RF.onError = (FF, SF) => {
              WF(new Error(`${dF.context}: ${(null===SF||void 0===SF?void 0:SF.message)||FF||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: EF,
            bytes: QF,
            label: rW
          } = dF,
          gW = {
            noMipmap: AF,
            invertY: !1,
            samplingMode: bW,
            ...RF,
            mimeType: EF,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          tW = new hF.d(null, WF, gW);
        nF.o.set(tW, iW), Object.assign(tW, PF), tW.updateURL(CF, QF);
        const TF = tW.getInternalTexture();
        TF && (TF.label = rW), FF.uvSet = tW.coordinatesIndex, FF.matrix.set((0, nF.I)(tW)), (0, eF.M)(FF, tW)
      },
      cube: (FF, WF, SF) => {
        let {
          rootUrl: CF,
          files: uF,
          noMipmap: bW,
          luminance: dF
        } = SF;
        const {
          samplingMode: PF
        } = FF.sampler, RF = PF === (0, eF.A)(bW) ? null : () => {
          (0, nF.H)(iW, PF)
        }, iW = new AF.b(CF, WF, null, bW, uF, RF, null, (0, eF.z)(dF));
        iW.coordinatesMode = hF.d.SKYBOX_MODE, (0, eF.M)(FF, iW)
      },
      canvas: (FF, WF, SF) => {
        let {
          width: CF,
          height: AF,
          mipmaps: bW,
          samplingMode: dF,
          hasAlpha: PF = !1,
          wrap: RF = hF.d.CLAMP_ADDRESSMODE
        } = SF;
        const iW = new uF.c(WF, {
          width: CF,
          height: AF
        }, FF, bW, dF);
        iW.hasAlpha = PF, iW.wrapU = RF, iW.wrapV = RF;
        const eF = (0, nF.w)(iW);
        return (0, nF.A)(eF, iW), eF
      }
    })
  },
  39123: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => RF,
      f: () => iW,
      j: () => eF
    });
    var CF = SF(39116),
      AF = SF(38031),
      uF = SF(38281),
      hF = SF(38398),
      bW = SF(39121),
      dF = SF(38393),
      PF = SF(35820);
    class RF extends hF.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (FF, WF) => {
          this.releaseUnlessInstanced(WF)
        }, this.onLinked = null
      }
      link(FF) {
        var WF;
        (0, PF.r)(FF), this.model = FF, null === (WF = this.onLinked) || void 0 === WF || WF.call(this, FF)
      }
      relink() {
        this.release();
        const FF = [];
        for (const AF of Object.values(this._vertexBuffers))
          if (!AF.getIsInstanced()) {
            const {
              byteOffset: WF,
              byteStride: SF,
              type: CF,
              normalized: uF
            } = AF;
            FF.push({
              kind: AF.getKind(),
              data: AF.getData(),
              offset: WF,
              stride: SF,
              components: AF.getSize(),
              glType: CF,
              isNormalized: uF
            })
          } const WF = this._indices.length ? this._indices : null,
          {
            minimum: SF,
            maximum: CF
          } = this.extend;
        this.link(new PF.h(FF, WF, this.getTotalVertices(), new Float64Array(SF.kRF()), new Float64Array(CF.kRF())))
      }
      copy(FF) {
        if (!this.model) return super.copy(FF);
        const WF = new RF(FF, this.OWF()),
          SF = this.yEF(void 0, !0);
        SF && WF.setIndices(SF);
        let hF = !1;
        for (const uF in this._vertexBuffers) {
          const FF = this._vertexBuffers[uF],
            SF = FF.getData();
          if (!SF) continue;
          const bW = FF.getSize(),
            {
              type: dF,
              byteOffset: PF,
              byteStride: RF,
              normalized: iW
            } = FF;
          hF ||= FF.isUpdatable();
          const eF = FF.getIsInstanced() ? (SF instanceof Array ? 4 * SF.length : SF.byteLength) / RF : this.getTotalVertices(),
            EF = (0, AF.x)(SF, bW, dF, PF, RF, eF, !0),
            QF = {
              updatable: FF.isUpdatable(),
              stride: bW,
              type: dF,
              normalized: iW,
              takeBufferOwnership: !0,
              instanced: FF.getIsInstanced()
            };
          WF.setVerticesBuffer(new CF.h(this.sC(), EF, uF, QF), eF)
        }
        return WF._updatable = hF, WF._boundingInfo = new uF.b(this.extend.minimum, this.extend.maximum), WF.relink(), WF
      }
      static mergeMeshes(FF, WF, SF, CF, AF, uF) {
        const dF = FF[0].OWF(),
          PF = new bW.c(FF[0].name + "_merged", dF),
          iW = new RF(hF.b.RandomId(), dF, void 0, !1, PF);
        try {
          if (!bW.c.MergeMeshes(FF, WF, SF, PF, AF, uF)) return PF.dispose(), null
        } catch (eF) {
          throw PF.dispose(), eF
        }
        return iW.relink(), PF
      }
      removeVerticesData(FF) {
        this.releaseUnlessInstanced(FF), super.removeVerticesData(FF)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(FF) {
        var WF;
        FF && null !== (WF = this.getVertexBuffer(FF)) && void 0 !== WF && WF.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, PF.z)(this.model), this.model = null)
      }
    }

    function iW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bW.c(FF, SF);
      const AF = (0, PF.p)(WF),
        {
          positions: uF,
          normals: iW,
          uvs: eF,
          indices: EF,
          named: QF = {}
        } = WF,
        rW = new dF.b;
      rW.positions = uF, rW.normals = null !== iW && void 0 !== iW ? iW : null, rW.uvs = null !== eF && void 0 !== eF ? eF : null, rW.indices = EF;
      const gW = new RF(hF.b.RandomId(), SF, rW, !1, CF);
      for (const {
          kind: hF,
          components: bW
        }
        of AF.vertexAttributes) hF in QF && CF.setVerticesData(hF, QF[hF], !1, bW);
      return gW.link(AF), CF
    }

    function eF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const AF = new bW.c(FF, SF),
        {
          positions: uF,
          normals: hF,
          uvs: PF,
          indices: RF
        } = WF;
      return Object.assign(new dF.b, {
        positions: uF,
        normals: hF,
        uvs: PF,
        indices: RF
      }).applyToMesh(AF, CF), AF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);