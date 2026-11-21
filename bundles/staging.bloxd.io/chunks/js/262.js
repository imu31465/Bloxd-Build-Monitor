export const id = 262;
export const ids = [262];
export const modules = {
  41015: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => tQ,
      d: () => kQ,
      e: () => DQ,
      g: () => mQ
    });
    var LQ = wQ(36870),
      qQ = wQ(38236),
      oQ = wQ(38230);

    function DQ(QQ, FQ, wQ, LQ) {
      const qQ = oQ.y;
      FQ.fill(0), QQ.gravity.toArray(FQ, qQ.gravity), QQ.colorDead.toArray(FQ, qQ.colorDead), wQ[qQ.ramp] = QQ.useRampGradients ? 1 : 0;
      const DQ = QQ.getColorGradients(),
        kQ = bQ(QQ, DQ, "colour", LQ);
      wQ[qQ.colorCount] = kQ;
      for (let oQ = 0; oQ < kQ; oQ++) {
        var vQ;
        const QQ = DQ[YQ(DQ, oQ)];
        FQ[qQ.colorPositions + oQ] = QQ.gradient, QQ.color1.toArray(FQ, qQ.color1 + 4 * oQ), (null !== (vQ = QQ.color2) && void 0 !== vQ ? vQ : QQ.color1).toArray(FQ, qQ.color2 + 4 * oQ)
      }
      const mQ = QQ.getVelocityGradients(),
        uQ = bQ(QQ, mQ, "Qt", LQ);
      wQ[qQ.velocityCount] = uQ;
      for (let oQ = 0; oQ < uQ; oQ++) MQ(FQ, qQ.Qt + 4 * oQ, mQ[YQ(mQ, oQ)]);
      const HQ = QQ.useRampGradients ? QQ.getColorRemapGradients() : null,
        xQ = bQ(QQ, HQ, "colour remap", LQ);
      wQ[qQ.remapCount] = xQ;
      for (let oQ = 0; oQ < xQ; oQ++) MQ(FQ, qQ.remap + 4 * oQ, HQ[YQ(HQ, oQ)])
    }

    function kQ() {
      return {
        key: [],
        texels: new Uint8Array(4 * oQ.k)
      }
    }
    const vQ = [];

    function mQ(QQ, FQ) {
      return uQ(QQ, vQ), !eQ(vQ, FQ.key) && (FQ.key.length = 0, FQ.key.push(...vQ), FQ.key.length > 0 && function(QQ, FQ) {
        for (let wQ = 0; wQ < oQ.k; wQ++) qQ.k.GetCurrentGradient(wQ / oQ.k, QQ, ((QQ, FQ, wQ) => {
          LQ.Color3.LerpToRef(QQ.color, FQ.color, wQ, HQ)
        })), FQ[4 * wQ] = 255 * HQ.r, FQ[4 * wQ + 1] = 255 * HQ.g, FQ[4 * wQ + 2] = 255 * HQ.b, FQ[4 * wQ + 3] = 255
      }(QQ.getRampGradients(), FQ.texels), !0)
    }

    function uQ(QQ, FQ) {
      FQ.length = 0;
      const wQ = QQ.useRampGradients ? QQ.getRampGradients() : null;
      if (null !== wQ && void 0 !== wQ && wQ.length) {
        FQ.push(wQ.length);
        for (const QQ of wQ) FQ.push(QQ.gradient, QQ.color.r, QQ.color.g, QQ.color.b)
      }
    }
    const HQ = new LQ.Color3;

    function bQ(QQ, FQ, wQ, LQ) {
      return FQ ? FQ.length > oQ.e ? (LQ(`particleStops:${wQ}`, `GPU particles use the first 2 and last ${oQ.e-2} of more than ${oQ.e} ${wQ} gradient stops (${QQ.name})`), oQ.e) : FQ.length : 0
    }

    function YQ(QQ, FQ) {
      return FQ < 2 || QQ.length <= oQ.e ? FQ : QQ.length - oQ.e + FQ
    }
    const xQ = new Float32Array(oQ.r),
      AQ = new Uint32Array(xQ.buffer);

    function tQ(QQ, FQ, wQ) {
      return DQ(QQ, xQ, AQ, wQ), FQ && eQ(AQ, FQ) ? null : AQ.slice()
    }

    function eQ(QQ, FQ) {
      if (QQ.length !== FQ.length) return !1;
      for (let wQ = 0; wQ < QQ.length; wQ++)
        if (QQ[wQ] !== FQ[wQ]) return !1;
      return !0
    }

    function MQ(QQ, FQ, wQ) {
      var LQ;
      QQ[FQ] = wQ.gradient, QQ[FQ + 1] = wQ.factor1, QQ[FQ + 2] = null !== (LQ = wQ.factor2) && void 0 !== LQ ? LQ : wQ.factor1
    }
  },
  41008: (QQ, FQ, wQ) => {
    function LQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const FQ = new Set;
      return (wQ, LQ) => {
        FQ.has(wQ) || (FQ.add(wQ), console.warn(QQ + LQ))
      }
    }
    wQ.d(FQ, {
      b: () => LQ
    })
  },
  41057: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      createLiteRendererAsync: () => Uv,
      liteBabylonBackend: () => aQ,
      setPipelineFailureHook: () => nq
    });
    var LQ = wQ(36870),
      qQ = wQ(37172),
      oQ = wQ(37448),
      DQ = wQ(36820),
      kQ = wQ(37460);
    class vQ extends kQ.b {
      constructor() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        super(...FQ), this.color = new LQ.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: FQ[0].iN().getUniqueId(),
          shaderPath: "color",
          fillMode: 4,
          sideOrientation: null,
          alphaMode: 2,
          forceDepthWrite: !1,
          disableDepthWrite: !1,
          backFaceCulling: !0,
          cullBackFaces: !0,
          depthFunction: 0,
          zOffset: 0,
          zOffsetUnits: 0,
          disableColorWrite: !1,
          getClassName: () => "ShaderMaterial",
          needAlphaBlendingForMesh: QQ => QQ.visibility < 1 || QQ.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const mQ = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      uQ = QQ => 1 << mQ.indexOf(QQ),
      HQ = uQ("VERTEXCOLOR"),
      bQ = uQ("INSTANCES"),
      YQ = uQ("THIN_INSTANCES"),
      xQ = uQ("INSTANCESCOLOR"),
      AQ = uQ("FOG"),
      tQ = uQ("LITE_FRONT_LAYER");

    function eQ(QQ, FQ, wQ, LQ) {
      let qQ = 0;
      return QQ.isVerticesDataPresent("color") && (qQ |= HQ), "none" !== FQ && (qQ |= bQ), "thin" === FQ && (qQ |= YQ, QQ.isVerticesDataPresent("instanceColor") && (qQ |= xQ)), LQ.fogEnabled && QQ.applyFog && 0 !== LQ.fogMode && (qQ |= AQ), wQ >= 1 && (qQ |= tQ), qQ
    }

    function MQ(QQ, FQ) {
      QQ.updateColor4("color", FQ.color, FQ.alpha)
    }
    var GQ = wQ(37399),
      pQ = wQ(37019),
      cQ = wQ(36897),
      CQ = wQ(36795),
      SQ = wQ(37381),
      iQ = wQ(37392),
      WQ = wQ(36809),
      RQ = wQ(36816),
      OQ = wQ(36822);
    const sQ = CQ.d.GLSL;
    class rQ {
      constructor(QQ, FQ) {
        this.name = QQ, this.lA = FQ, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.zN = {
          addOnce: QQ => {
            this.disposers.push(QQ)
          }
        }, this.uniqueId = FQ.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      iN() {
        return this.lA
      }
      getClassName() {
        return "LiteMaterial"
      }
      freeze() {
        this.checkReadyOnlyOnce = !0
      }
      unfreeze() {
        this.checkReadyOnlyOnce = !1
      }
      markDirty() {}
      get fillMode() {
        return this.model.fillMode
      }
      needAlphaBlendingForMesh(QQ) {
        return (0, WQ.Y)(this.model, QQ.visibility, QQ.hasVertexAlpha)
      }
      needAlphaTestingForMesh(QQ) {
        return (0, WQ.ab)(this.model, QQ.visibility, QQ.hasVertexAlpha)
      }
      dispose() {
        (0, pQ.g)(this);
        for (const QQ of this.disposers.splice(0)) QQ()
      }
      get model() {
        return (0, WQ.jb)(this)
      }
    }
    const IQ = new WeakSet;

    function UQ(QQ) {
      return IQ.has(QQ)
    }

    function NQ(QQ) {
      IQ.add(QQ)
    }
    const TQ = {
      create: (QQ, FQ) => ((0, cQ.p)(QQ, new rQ(QQ.name, FQ)), RQ.c.defines()),
      write: () => {},
      addFeature: (QQ, FQ) => {
        const wQ = QQ.mirror;
        FQ.feature === iQ.h && FQ.state.dirLightCount > 0 && (QQ.disableLighting = !0, (0, WQ.fb)(QQ)), "BLOXD_LIGHTING" in FQ.defines && (0, pQ.e)(wQ), FQ.feature === SQ.l && ((0, GQ.m)(FQ.state, sQ), function(QQ, FQ) {
          const wQ = QQ.iN().Wx();
          FQ.textures.forEach(((LQ, qQ) => {
            setTimeout((() => {
              var oQ, DQ;
              const {
                url: kQ
              } = LQ.source;
              wQ.atlasArray(kQ, null !== (oQ = null === (DQ = FQ.sources.pixels) || void 0 === DQ ? void 0 : DQ[qQ]) && void 0 !== oQ ? oQ : null, FQ.sources.layerWidth).then((wQ => {
                (0, GQ.e)(QQ, FQ, qQ, wQ, wQ.layerWidth, wQ.layers, sQ)
              })).catch((QQ => {
                console.error(`Failed to build texture array for atlas ${qQ}`, QQ)
              }))
            }))
          }))
        }(wQ, FQ.state))
      },
      texture: (QQ, FQ, wQ) => {
        let {
          data: LQ,
          sets: qQ
        } = wQ;
        var oQ;
        (NQ(QQ), LQ) && (QQ.uvSet = null !== (oQ = null === qQ || void 0 === qQ ? void 0 : qQ.coordinatesIndex) && void 0 !== oQ ? oQ : 0, (0, cQ.$)(QQ.matrix, null !== qQ && void 0 !== qQ ? qQ : {}))
      },
      cube: NQ,
      canvas: (QQ, FQ, wQ) => {
        let {
          width: LQ,
          height: qQ,
          mipmaps: oQ,
          samplingMode: DQ = OQ.f.trilinear,
          hasAlpha: kQ = !1,
          wrap: vQ = OQ.d.clamp
        } = wQ;
        const mQ = QQ.Wx().createCanvas(LQ, qQ),
          uQ = new OQ.j("2d", {
            kind: "canvas",
            width: LQ,
            height: qQ,
            canvas: mQ
          }, {
            samplingMode: DQ,
            wrapU: vQ,
            wrapV: vQ,
            noMipmap: !oQ,
            invertY: !0
          });
        return uQ.hasAlpha = kQ, NQ(uQ), uQ
      }
    };
    var KQ = wQ(37036),
      zQ = wQ(36722);
    class lQ {
      constructor(QQ, FQ, wQ) {
        this.engine = QQ, this.clearColor = FQ, this.ambientColor = wQ, this.onBeforeRenderObservable = new zQ.e, this.onBeforeCameraRenderObservable = new zQ.e, this.onAfterRenderObservable = new zQ.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.fC = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Wx() {
        return this.engine
      }
      getUniqueId() {
        return ++this.lastId
      }
      getFrameId() {
        return this.frameId
      }
      getAnimationRatio() {
        return this.animationRatio
      }
      addPendingData(QQ) {
        this.pending.push(QQ)
      }
      removePendingData(QQ) {
        const FQ = this.pending.indexOf(QQ); - 1 !== FQ && this.pending.splice(FQ, 1)
      }
      getWaitingItemsCount() {
        return this.pending.length
      }
      isReady() {
        return 0 === this.pending.length
      }
      getActiveMeshes() {
        return []
      }
      render() {
        this.frameId++, this.animationRatio = .06 * Math.max(1, Math.min(this.engine.getDeltaTime(), 1e3)), this.draw(), this.onAfterRenderObservable.notifyObservers(this)
      }
    }

    function jQ() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const aQ = {
      awQ: jQ,
      mqQ: (QQ, FQ) => {
        const wQ = new lQ(QQ.engine, LQ.b.FromArray(FQ.clearColor), LQ.Color3.FromArray(FQ.ambientColor));
        (0, DQ.d)(TQ, wQ), QQ.lA = wQ,
          function(QQ, FQ) {
            const wQ = Object.assign((0, KQ.k)(QQ, "camera"), {
              layerMask: 268435455
            });
            QQ.model.nodes.setWorldSource(wQ.row, QQ.model.view.worldMatrix), QQ.camera = FQ.activeCamera = wQ
          }(QQ, wQ), (0, qQ.k)(QQ, ((QQ, FQ, wQ) => (0, oQ.h)(QQ, FQ, wQ, kQ.b)))
      },
      oqQ: () => {},
      setBabylonFog: () => {},
      HqQ: jQ,
      xqQ: () => {},
      linesFromArrays: (QQ, FQ, wQ) => (0, oQ.h)(QQ, FQ, wQ, vQ),
      jA: () => {},
      YqQ: jQ
    };
    var XQ = wQ(41101),
      fQ = wQ(41117);
    class VQ {
      constructor(QQ) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const FQ = new Promise((QQ => {
          this.refused = QQ
        }));
        this.deviceLost = Promise.race([QQ, FQ])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(QQ) {
        (function(QQ) {
          const {
            name: FQ,
            message: wQ
          } = null !== QQ && void 0 !== QQ ? QQ : {};
          return "InvalidStateError" === FQ && "string" === typeof wQ && wQ.startsWith("GPUDevice.")
        })(QQ) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: QQ.message,
          framesRefused: !0
        }))
      }
    }
    class hQ {
      constructor(QQ) {
        this.resources = QQ, this.matrixKey = {
          MH: 0
        }, this.attributesKey = {
          MH: 0
        }, this.inputs = Object.create(null);
        for (let FQ = 0; FQ < 4; FQ++) this.inputs[`world${FQ}`] = new nQ(this.matrixKey, 16 * FQ, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(QQ, FQ) {
        this.resources.vertexBufferCreated(this.matrixKey, QQ, !0), FQ && this.resources.vertexBufferCreated(this.attributesKey, FQ, !0)
      }
    }
    class JQ extends hQ {
      constructor(QQ, FQ, wQ) {
        super(QQ), this.mesh = FQ, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const LQ = this.inputs;
        let qQ = 0;
        for (const {
            size: DQ
          }
          of wQ) qQ += DQ;
        for (const {
            name: DQ,
            offset: kQ,
            size: vQ,
            type: mQ
          }
          of wQ) LQ[DQ] = new nQ(this.attributesKey, 4 * kQ, 4 * qQ, vQ, !0, mQ);
        this.rowStride = qQ, QQ.T_.set(FQ, this);
        const oQ = FQ.isVerticesDataPresent;
        FQ.isVerticesDataPresent = (QQ, wQ) => QQ in LQ || oQ.call(FQ, QQ, wQ)
      }
      attach(QQ, FQ) {
        this.matrices = QQ, this.attributes = FQ, this.bind(QQ, FQ), this.mirror(QQ, QQ.length, QQ.length / 16)
      }
      t5(QQ) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, QQ ? 64 * QQ : void 0)
      }
      i5() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(QQ, FQ) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * QQ, 16 * FQ)
      }
      attributeRows(QQ, FQ) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, QQ * this.rowStride, FQ * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(QQ, FQ, wQ) {
        const LQ = this.mesh._thinInstanceDataStorage;
        LQ.matrixData = QQ, LQ.matrixBufferSize = FQ, LQ.worldMatrices = null, LQ.instancesCount = wQ
      }
    }
    class EQ extends hQ {
      constructor(QQ, FQ, wQ) {
        var LQ, qQ, oQ, DQ;
        super(QQ), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.interleavedKinds) && void 0 !== LQ ? LQ : null, this.offsets = null !== (qQ = null === wQ || void 0 === wQ ? void 0 : wQ.interleavedOffsets) && void 0 !== qQ ? qQ : [], this.rowStride = null !== (oQ = null === wQ || void 0 === wQ ? void 0 : wQ.interleavedRowStride) && void 0 !== oQ ? oQ : 0, null === (DQ = this.layout) || void 0 === DQ || DQ.forEach(((QQ, FQ) => {
          this.inputs[QQ] = new nQ(this.attributesKey, 4 * this.offsets[FQ], 4 * this.rowStride, wQ.strides[QQ])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), QQ.batchUploads.set(FQ, this), FQ.zN.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(QQ) {
        const FQ = this.packedBatch;
        return FQ.renderSelf ? 0 === QQ ? this.packedSource : FQ.instances[QQ - 1] : FQ.instances[QQ]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(QQ, FQ, wQ, LQ) {
        const qQ = (FQ.renderSelf ? 1 : 0) + FQ.rows.length;
        if (this.frame = LQ, this.count = qQ, this.packedSource = QQ, this.packedBatch = FQ, 0 === qQ) return;
        if (QQ.getWorldMatrix(), 16 * qQ > this.matrices.length) {
          let QQ = this.matrices.length / 16;
          for (; QQ < qQ;) QQ *= 2;
          this.matrices = new Float32Array(16 * QQ), this.attributes &&= new Float32Array(QQ * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let oQ = 0;
        FQ.renderSelf && this.packRow(oQ++, QQ, FQ.row, wQ);
        for (let DQ = 0; DQ < FQ.rows.length; DQ++) this.packRow(oQ++, FQ.instances[DQ], FQ.rows[DQ], wQ);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * qQ), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, qQ * this.rowStride)
      }
      packRow(QQ, FQ, wQ, LQ) {
        const qQ = this.matrices;
        if (wQ < 0) qQ.set(FQ.getWorldMatrix().m, 16 * QQ);
        else
          for (let mQ = 0; mQ < 16; mQ++) qQ[16 * QQ + mQ] = LQ[16 * wQ + mQ];
        const oQ = this.attributes;
        if (!oQ) return;
        const DQ = FQ.bK,
          kQ = this.layout;
        for (let mQ = 0; mQ < kQ.length; mQ++) {
          var vQ;
          const FQ = null !== (vQ = DQ[kQ[mQ]]) && void 0 !== vQ ? vQ : 0,
            wQ = QQ * this.rowStride + this.offsets[mQ];
          FQ.toArray ? FQ.toArray(oQ, wQ) : FQ.copyToArray ? FQ.copyToArray(oQ, wQ) : oQ[wQ] = FQ
        }
      }
    }
    class nQ {
      constructor(QQ, FQ, wQ, LQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = QQ, this.byteOffset = FQ, this.byteStride = wQ, this.size = LQ, this.instanced = qQ, this.type = oQ, this.normalized = DQ
      }
      getBuffer() {
        return this.key
      }
      getSize() {
        return this.size
      }
      getIsInstanced() {
        return this.instanced
      }
    }
    const gQ = "CANVAS_ALPHA_ONE",
      PQ = `override ${gQ}: bool = false;`,
      ZQ = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function yQ(QQ, FQ, wQ) {
      var LQ;
      let qQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const oQ = null !== (LQ = FQ._colorFormat) && void 0 !== LQ ? LQ : "bgra8unorm",
        DQ = qQ ? 15 : 0;
      return wQ ? {
        ...QQ,
        targets: [{
          format: oQ,
          blend: {
            color: wQ,
            alpha: ZQ
          },
          writeMask: DQ
        }]
      } : {
        ...QQ,
        constants: {
          ...QQ.constants,
          [gQ]: 1
        },
        targets: [{
          format: oQ,
          writeMask: DQ
        }]
      }
    }

    function BQ(QQ, FQ) {
      QQ._renderables.push(FQ)
    }

    function dQ(QQ) {
      var FQ, wQ;
      return null !== (FQ = null === (wQ = QQ._frameGraph) || void 0 === wQ ? void 0 : wQ._tasks) && void 0 !== FQ ? FQ : []
    }

    function QF(QQ) {
      return QQ._currentEncoder
    }

    function FF(QQ) {
      return QQ.createBindGroupLayout({
        label: "lite-scene-equivalent",
        entries: [{
          binding: 0,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      })
    }
    const wF = "greater-equal",
      LF = 2e5,
      qF = 1e5,
      oF = new WeakMap;

    function DF(QQ, FQ) {
      let wQ = oF.get(QQ);
      if (!wQ) {
        wQ = {
          module: QQ.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, oF.set(QQ, wQ)
      }
      const LQ = `${FQ._colorFormat}|${FQ._depthStencilFormat}|${FQ._sampleCount}`;
      let qQ = wQ.pipelines.get(LQ);
      if (!qQ) {
        var oQ;
        const {
          module: DQ
        } = wQ;
        qQ = QQ.createRenderPipeline({
          label: `placeholder ${LQ}`,
          layout: QQ.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: DQ,
            entryPoint: "v"
          },
          fragment: {
            module: DQ,
            entryPoint: "f",
            targets: [{
              format: null !== (oQ = FQ._colorFormat) && void 0 !== oQ ? oQ : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: FQ._depthStencilFormat ? {
            format: FQ._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: FQ._sampleCount
          }
        }), wQ.pipelines.set(LQ, qQ)
      }
      return qQ
    }

    function kF(QQ, FQ, wQ) {
      const LQ = FQ.eye,
        qQ = FQ.viewMatrix;
      QQ[0] = LQ[0] + qQ[2] * wQ, QQ[1] = LQ[1] + qQ[6] * wQ, QQ[2] = LQ[2] + qQ[10] * wQ
    }
    var vF = wQ(37494),
      mF = wQ(41008),
      uF = wQ(36803);
    const HF = Math.PI,
      bF = HF / 1.95,
      YF = [5e-4 / 94, 125e-7, 5e-4 / 18],
      xF = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((QQ => {
        let [FQ, wQ] = QQ;
        return .434 * HF * Math.pow(2 * HF / FQ, 2) * wQ
      }));

    function AF(QQ, FQ, wQ) {
      const {
        up: LQ,
        mieDirectionalG: qQ
      } = QQ, oQ = 1 - MF(1 - Math.exp(FQ[1] / 45e4), 0, 1), DQ = QQ.rayleigh - (1 - oQ), kQ = Math.hypot(FQ[0], FQ[1], FQ[2]), vQ = kQ > 0 ? 1 / kQ : 0, mQ = wQ.sunDir;
      for (let YQ = 0; YQ < 3; YQ++) mQ[YQ] = FQ[YQ] * vQ;
      const uQ = mQ[0] * LQ[0] + mQ[1] * LQ[1] + mQ[2] * LQ[2],
        HQ = 1e3 * Math.max(0, 1 - Math.exp(-(bF - Math.acos(MF(uQ, -1, 1))) / 1.5));
      wQ.sunE = HQ;
      const bQ = .2 * QQ.turbidity * 1e-17 * QQ.mieCoefficient;
      for (let YQ = 0; YQ < 3; YQ++) {
        const QQ = YF[YQ] * DQ,
          FQ = xF[YQ] * bQ,
          LQ = HQ / (QQ + FQ);
        wQ.inScatterR[YQ] = QQ * LQ, wQ.inScatterM[YQ] = FQ * LQ, wQ.extinctionBeta[YQ] = 8400 * QQ + 1250 * FQ
      }
      return wQ.sunsetMix = MF(Math.pow(1 - uQ, 5), 0, 1), wQ.sunDiscE = 19e3 * HQ, wQ.mieScale = (1 - qQ * qQ) / (4 * HF), wQ.mieBase = 1 + qQ * qQ, wQ.mieSlope = 2 * qQ, wQ
    }
    const tF = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const eF = 1 / function(QQ) {
      const {
        A: FQ,
        B: wQ,
        C: LQ,
        D: qQ,
        E: oQ,
        F: DQ
      } = tF;
      return (QQ * (FQ * QQ + LQ * wQ) + qQ * oQ) / (QQ * (FQ * QQ + wQ) + qQ * DQ) - oQ / DQ
    }(1e3);

    function MF(QQ, FQ, wQ) {
      return Math.min(Math.max(QQ, FQ), wQ)
    }
    const GF = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function pF(QQ, FQ) {
      const wQ = new Map(FQ),
        LQ = [],
        qQ = [],
        oQ = () => 0 === qQ.length || qQ[qQ.length - 1].active;
      let DQ = null;
      const kQ = () => {
        const QQ = [...wQ].filter((QQ => {
            let [, FQ] = QQ;
            return !0 !== FQ
          })),
          FQ = QQ.map((QQ => {
            let [FQ] = QQ;
            return FQ
          })).join("|");
        DQ = QQ.length ? new RegExp(`\\b(${FQ})\\b`, "g") : null
      };
      kQ();
      for (const vQ of QQ.split("\n")) {
        const QQ = GF.exec(vQ);
        if (!QQ) {
          oQ() && LQ.push(DQ ? cF(vQ, DQ, wQ) : vQ);
          continue
        }
        const FQ = QQ[1],
          mQ = QQ[2].trim();
        if ("ifdef" === FQ || "ifndef" === FQ || "if" === FQ) {
          const QQ = oQ(),
            LQ = "if" === FQ ? CF(mQ, wQ) : wQ.has(mQ) === ("ifdef" === FQ);
          qQ.push({
            active: QQ && LQ,
            parentActive: QQ,
            taken: LQ
          })
        } else if ("elif" === FQ || "else" === FQ) {
          const QQ = qQ[qQ.length - 1];
          if (!QQ) throw new Error(`#${FQ} without #if`);
          const LQ = !QQ.taken && ("else" === FQ || CF(mQ, wQ));
          QQ.active = QQ.parentActive && LQ, QQ.taken = QQ.taken || LQ
        } else if ("endif" === FQ) {
          if (!qQ.pop()) throw new Error("#endif without #if")
        } else if (oQ()) {
          const [QQ, ...LQ] = mQ.split(/\s+/);
          "undef" === FQ ? wQ.delete(QQ) : wQ.set(QQ, !LQ.length || LQ.join(" ")), kQ()
        }
      }
      if (qQ.length) throw new Error("Unterminated #if");
      return LQ.join("\n")
    }

    function cF(QQ, FQ, wQ) {
      return QQ.replace(FQ, (QQ => {
        const FQ = wQ.get(QQ);
        return "string" === typeof FQ ? FQ : QQ
      }))
    }

    function CF(QQ, FQ) {
      var wQ;
      const LQ = null !== (wQ = QQ.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== wQ ? wQ : [];
      let qQ = 0;
      const oQ = () => LQ[qQ],
        DQ = () => LQ[qQ++],
        kQ = QQ => {
          const wQ = /^\d/.test(QQ) ? QQ : FQ.get(QQ);
          return "string" === typeof wQ ? parseInt(wQ) : Number.NaN
        },
        vQ = () => {
          const QQ = DQ();
          if ("!" === QQ) return !vQ();
          if ("(" === QQ) {
            const QQ = uQ();
            return DQ(), QQ
          }
          if ("defined" === QQ) {
            const QQ = "(" === oQ();
            QQ && DQ();
            const wQ = DQ();
            return QQ && DQ(), FQ.has(wQ)
          }
          const wQ = oQ();
          if ("==" === wQ || "!=" === wQ || ">" === wQ || "<" === wQ || ">=" === wQ || "<=" === wQ) {
            DQ();
            const FQ = kQ(QQ),
              LQ = kQ(DQ());
            if (Number.isNaN(FQ) || Number.isNaN(LQ)) return !1;
            switch (wQ) {
              case "==":
                return FQ === LQ;
              case "!=":
                return FQ !== LQ;
              case ">":
                return FQ > LQ;
              case "<":
                return FQ < LQ;
              case ">=":
                return FQ >= LQ;
              default:
                return FQ <= LQ
            }
          }
          return FQ.has(QQ)
        },
        mQ = () => {
          let QQ = vQ();
          for (;
            "&&" === oQ();) {
            DQ();
            const FQ = vQ();
            QQ = QQ && FQ
          }
          return QQ
        },
        uQ = () => {
          let QQ = mQ();
          for (;
            "||" === oQ();) {
            DQ();
            const FQ = mQ();
            QQ = QQ || FQ
          }
          return QQ
        },
        HQ = uQ();
      if (qQ !== LQ.length) throw new Error(`Cannot evaluate #if ${QQ}`);
      return HQ
    }
    var SF = wQ(36797),
      iF = wQ(37109),
      WF = wQ(37111),
      RF = wQ(40307),
      OF = wQ(38281);
    const sF = 32,
      rF = [10, 3, 10],
      IF = [21, 7, 21],
      UF = IF[0] * IF[1] * IF[2],
      NF = 0,
      TF = 1,
      KF = 2,
      zF = 3,
      lF = 64,
      jF = 512,
      aF = 4 * UF,
      XF = 1536,
      fF = aF + UF * XF,
      VF = 1073741824,
      hF = fF + 1;

    function JF(QQ, FQ) {
      const wQ = QQ % FQ;
      return wQ < 0 ? wQ + FQ : wQ
    }

    function EF(QQ, FQ, wQ) {
      return LQ = JF(QQ, IF[0]), qQ = JF(FQ, IF[1]), oQ = JF(wQ, IF[2]), LQ + IF[0] * (qQ + IF[1] * oQ);
      var LQ, qQ, oQ
    }

    function nF(QQ, FQ, wQ) {
      return QQ + 8 * (FQ + 8 * wQ)
    }

    function gF(QQ, FQ, wQ) {
      return QQ + 4 * (FQ + 4 * wQ)
    }
    const PF = 65535,
      ZF = 0,
      yF = 1,
      BF = 2,
      dF = 3;

    function Qw(QQ) {
      return Math.ceil(QQ * QQ / 32)
    }
    const Fw = 8192,
      ww = 1 << 18,
      Lw = 65536,
      qw = 294912,
      ow = 128,
      Dw = 4096,
      kw = 16,
      vw = 16385,
      mw = 81921,
      uw = 147457,
      Hw = 4194304;
    const bw = [0, 0, 0],
      Yw = [0, 0, 0];

    function xw(QQ, FQ, wQ, LQ) {
      ! function(QQ, FQ, wQ) {
        const [LQ, qQ, oQ] = [QQ[0], QQ[1], QQ[2]];
        let DQ, kQ, vQ;
        Math.abs(qQ) < .99 ? (DQ = oQ, kQ = 0, vQ = -LQ) : (DQ = -qQ, kQ = LQ, vQ = 0);
        const mQ = Math.hypot(DQ, kQ, vQ);
        FQ[0] = DQ / mQ, FQ[1] = kQ / mQ, FQ[2] = vQ / mQ, wQ[0] = qQ * FQ[2] - oQ * FQ[1], wQ[1] = oQ * FQ[0] - LQ * FQ[2], wQ[2] = LQ * FQ[1] - qQ * FQ[0]
      }(LQ, bw, Yw);
      const qQ = 1 / 32;
      for (const [oQ, DQ] of [
          [0, bw],
          [4, Yw]
        ]) {
        for (let wQ = 0; wQ < 3; wQ++) QQ[FQ + oQ + wQ] = DQ[wQ] * qQ;
        QQ[FQ + oQ + 3] = -(DQ[0] * wQ[0] + DQ[1] * wQ[1] + DQ[2] * wQ[2]) * qQ
      }
    }
    class Aw {
      constructor() {
        this.words = new Uint32Array(uw), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      mY(QQ, FQ) {
        this.parts = 0, this.refs = 0, this.view = QQ, this.viewAt = FQ;
        const wQ = QQ[FQ + 1] * QQ[FQ + 6] - QQ[FQ + 2] * QQ[FQ + 5],
          LQ = QQ[FQ + 2] * QQ[FQ + 4] - QQ[FQ] * QQ[FQ + 6],
          qQ = QQ[FQ] * QQ[FQ + 5] - QQ[FQ + 1] * QQ[FQ + 4],
          oQ = Math.hypot(wQ, LQ, qQ) || 1;
        this.light[0] = wQ / oQ, this.light[1] = LQ / oQ, this.light[2] = qQ / oQ
      }
      add(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= Dw || ! function(QQ, FQ, wQ) {
            const LQ = QQ[FQ],
              qQ = QQ[FQ + 1],
              oQ = QQ[FQ + 2],
              DQ = QQ[FQ + 3],
              kQ = QQ[FQ + 4],
              vQ = QQ[FQ + 5],
              mQ = QQ[FQ + 6],
              uQ = QQ[FQ + 7],
              HQ = QQ[FQ + 8],
              bQ = QQ[FQ + 9],
              YQ = QQ[FQ + 10],
              xQ = QQ[FQ + 11],
              AQ = QQ[FQ + 12],
              tQ = QQ[FQ + 13],
              eQ = QQ[FQ + 14],
              MQ = QQ[FQ + 15],
              GQ = LQ * vQ - qQ * kQ,
              pQ = LQ * mQ - oQ * kQ,
              cQ = LQ * uQ - DQ * kQ,
              CQ = qQ * mQ - oQ * vQ,
              SQ = qQ * uQ - DQ * vQ,
              iQ = oQ * uQ - DQ * mQ,
              WQ = HQ * tQ - bQ * AQ,
              RQ = HQ * eQ - YQ * AQ,
              OQ = HQ * MQ - xQ * AQ,
              sQ = bQ * eQ - YQ * tQ,
              rQ = bQ * MQ - xQ * tQ,
              IQ = YQ * MQ - xQ * eQ,
              UQ = GQ * IQ - pQ * rQ + cQ * sQ + CQ * OQ - SQ * RQ + iQ * WQ;
            if (!(Math.abs(UQ) > 1e-12)) return !1;
            const NQ = 1 / UQ;
            return wQ[0] = (vQ * IQ - mQ * rQ + uQ * sQ) * NQ, wQ[1] = (oQ * rQ - qQ * IQ - DQ * sQ) * NQ, wQ[2] = (tQ * iQ - eQ * SQ + MQ * CQ) * NQ, wQ[3] = (YQ * SQ - bQ * iQ - xQ * CQ) * NQ, wQ[4] = (mQ * OQ - kQ * IQ - uQ * RQ) * NQ, wQ[5] = (LQ * IQ - oQ * OQ + DQ * RQ) * NQ, wQ[6] = (eQ * cQ - AQ * iQ - MQ * pQ) * NQ, wQ[7] = (HQ * iQ - YQ * cQ + xQ * pQ) * NQ, wQ[8] = (kQ * rQ - vQ * OQ + uQ * WQ) * NQ, wQ[9] = (qQ * OQ - LQ * rQ - DQ * WQ) * NQ, wQ[10] = (AQ * SQ - tQ * cQ + MQ * GQ) * NQ, wQ[11] = (bQ * cQ - HQ * SQ - xQ * GQ) * NQ, wQ[12] = (vQ * RQ - kQ * sQ - mQ * WQ) * NQ, wQ[13] = (LQ * sQ - qQ * RQ + oQ * WQ) * NQ, wQ[14] = (tQ * pQ - AQ * CQ - eQ * GQ) * NQ, wQ[15] = (HQ * CQ - bQ * pQ + YQ * GQ) * NQ, !0
          }(FQ, wQ, this.inverse)) return;
        const {
          view: LQ,
          viewAt: qQ
        } = this, oQ = wQ;
        let DQ = 1 / 0,
          kQ = 1 / 0,
          vQ = -1 / 0,
          mQ = -1 / 0,
          uQ = -1 / 0;
        const [HQ, bQ, YQ] = this.light;
        for (let cQ = 0; cQ < 8; cQ++) {
          const wQ = 1 & cQ ? QQ.hi[0] : QQ.lo[0],
            xQ = 2 & cQ ? QQ.hi[1] : QQ.lo[1],
            AQ = 4 & cQ ? QQ.hi[2] : QQ.lo[2],
            tQ = wQ * FQ[oQ] + xQ * FQ[oQ + 4] + AQ * FQ[oQ + 8] + FQ[oQ + 12],
            eQ = wQ * FQ[oQ + 1] + xQ * FQ[oQ + 5] + AQ * FQ[oQ + 9] + FQ[oQ + 13],
            MQ = wQ * FQ[oQ + 2] + xQ * FQ[oQ + 6] + AQ * FQ[oQ + 10] + FQ[oQ + 14],
            GQ = LQ[qQ] * tQ + LQ[qQ + 1] * eQ + LQ[qQ + 2] * MQ + LQ[qQ + 3],
            pQ = LQ[qQ + 4] * tQ + LQ[qQ + 5] * eQ + LQ[qQ + 6] * MQ + LQ[qQ + 7];
          DQ = Math.min(DQ, GQ), kQ = Math.min(kQ, pQ), vQ = Math.max(vQ, GQ), mQ = Math.max(mQ, pQ), uQ = Math.max(uQ, HQ * tQ + bQ * eQ + YQ * MQ)
        }
        if (vQ < -1 || mQ < -1 || DQ >= 1 || kQ >= 1) return;
        const xQ = this.parts++,
          AQ = this.rects;
        AQ[4 * xQ] = tw(DQ), AQ[4 * xQ + 1] = tw(kQ), AQ[4 * xQ + 2] = tw(vQ), AQ[4 * xQ + 3] = tw(mQ);
        const tQ = this.inverse,
          {
            cell: eQ,
            dims: MQ,
            lo: GQ
          } = QQ,
          pQ = mw + xQ * kw;
        for (let cQ = 0; cQ < 3; cQ++) this.floats[pQ + 4 * cQ] = tQ[cQ] / eQ, this.floats[pQ + 4 * cQ + 1] = tQ[4 + cQ] / eQ, this.floats[pQ + 4 * cQ + 2] = tQ[8 + cQ] / eQ, this.floats[pQ + 4 * cQ + 3] = (tQ[12 + cQ] - GQ[cQ]) / eQ;
        this.words[pQ + 12] = QQ.at, this.floats[pQ + 13] = uQ + .001 * (1 + Math.abs(uQ)), this.words[pQ + 14] = MQ[0] | MQ[1] << 8 | MQ[2] << 16
      }
      finish() {
        const QQ = ow,
          {
            counts: FQ,
            rects: wQ,
            words: LQ
          } = this;
        FQ.fill(0);
        let qQ = 0,
          oQ = 0;
        for (; oQ < this.parts; oQ++) {
          const LQ = 4 * oQ,
            DQ = (wQ[LQ + 2] - wQ[LQ] + 1) * (wQ[LQ + 3] - wQ[LQ + 1] + 1);
          if (qQ + DQ > 65536) break;
          qQ += DQ;
          for (let qQ = wQ[LQ + 1]; qQ <= wQ[LQ + 3]; qQ++)
            for (let oQ = wQ[LQ]; oQ <= wQ[LQ + 2]; oQ++) FQ[qQ * QQ + oQ]++
        }
        let DQ = 0;
        for (let vQ = 0; vQ < 16384; vQ++) LQ[vQ] = DQ, DQ += FQ[vQ], FQ[vQ] = LQ[vQ];
        LQ[16384] = DQ;
        for (let vQ = 0; vQ < oQ; vQ++) {
          const qQ = 4 * vQ;
          for (let oQ = wQ[qQ + 1]; oQ <= wQ[qQ + 3]; oQ++)
            for (let DQ = wQ[qQ]; DQ <= wQ[qQ + 2]; DQ++) LQ[vw + FQ[oQ * QQ + DQ]++] = vQ
        }
        const kQ = this.floats;
        for (let vQ = 0; vQ < 16384; vQ++) {
          const QQ = vw + LQ[vQ],
            FQ = QQ + Math.min(LQ[vQ + 1] - LQ[vQ], 64);
          for (let wQ = QQ + 1; wQ < FQ; wQ++) {
            const FQ = LQ[wQ],
              qQ = kQ[81934 + FQ * kw];
            let oQ = wQ - 1;
            for (; oQ >= QQ && kQ[81934 + LQ[oQ] * kw] < qQ; oQ--) LQ[oQ + 1] = LQ[oQ];
            LQ[oQ + 1] = FQ
          }
        }
        this.refs = qQ
      }
    }

    function tw(QQ) {
      return Math.min(127, Math.max(0, Math.floor((.5 * QQ + .5) * ow)))
    }

    function ew(QQ, FQ, wQ, LQ, qQ) {
      for (let oQ = 0; oQ < 4; oQ++)
        for (let DQ = 0; DQ < 4; DQ++) qQ[4 * oQ + DQ] = QQ[FQ + 4 * oQ] * wQ[LQ + DQ] + QQ[FQ + 4 * oQ + 1] * wQ[LQ + 4 + DQ] + QQ[FQ + 4 * oQ + 2] * wQ[LQ + 8 + DQ] + QQ[FQ + 4 * oQ + 3] * wQ[LQ + 12 + DQ]
    }

    function Mw(QQ, FQ, wQ, LQ, qQ) {
      const oQ = QQ[0] - FQ,
        DQ = QQ[1] - wQ,
        kQ = QQ[2] - LQ,
        vQ = QQ[3] - FQ,
        mQ = QQ[4] - wQ,
        uQ = QQ[5] - LQ,
        HQ = QQ[6] - FQ,
        bQ = QQ[7] - wQ,
        YQ = QQ[8] - LQ;
      if (Math.min(oQ, vQ, HQ) > qQ || Math.max(oQ, vQ, HQ) < -qQ) return !1;
      if (Math.min(DQ, mQ, bQ) > qQ || Math.max(DQ, mQ, bQ) < -qQ) return !1;
      if (Math.min(kQ, uQ, YQ) > qQ || Math.max(kQ, uQ, YQ) < -qQ) return !1;
      const xQ = vQ - oQ,
        AQ = mQ - DQ,
        tQ = uQ - kQ,
        eQ = HQ - vQ,
        MQ = bQ - mQ,
        GQ = YQ - uQ,
        pQ = AQ * GQ - tQ * MQ,
        cQ = tQ * eQ - xQ * GQ,
        CQ = xQ * MQ - AQ * eQ;
      if (Math.abs(pQ * oQ + cQ * DQ + CQ * kQ) > qQ * (Math.abs(pQ) + Math.abs(cQ) + Math.abs(CQ))) return !1;
      const SQ = [xQ, AQ, tQ, eQ, MQ, GQ, oQ - HQ, DQ - bQ, kQ - YQ];
      for (let iQ = 0; iQ < 3; iQ++) {
        const QQ = SQ[3 * iQ],
          FQ = SQ[3 * iQ + 1],
          wQ = SQ[3 * iQ + 2];
        for (let LQ = 0; LQ < 3; LQ++) {
          const xQ = 0 === LQ ? 0 : 1 === LQ ? wQ : -FQ,
            AQ = 0 === LQ ? -wQ : 1 === LQ ? 0 : QQ,
            tQ = 0 === LQ ? FQ : 1 === LQ ? -QQ : 0,
            eQ = xQ * oQ + AQ * DQ + tQ * kQ,
            MQ = xQ * vQ + AQ * mQ + tQ * uQ,
            GQ = xQ * HQ + AQ * bQ + tQ * YQ,
            pQ = qQ * (Math.abs(xQ) + Math.abs(AQ) + Math.abs(tQ));
          if (Math.min(eQ, MQ, GQ) > pQ || Math.max(eQ, MQ, GQ) < -pQ) return !1
        }
      }
      return !0
    }
    const Gw = new Float32Array(1);
    new Uint32Array(Gw.buffer);
    var pw = wQ(38284);

    function Cw(QQ) {
      const [FQ, wQ, LQ] = pw.r;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${QQ.group}) @binding(${QQ.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${FQ-1}, ${wQ-1}, ${LQ-1});\n}\n`
    }

    function Sw(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [qQ, oQ, DQ] = IF, [kQ, vQ, mQ] = rF, uQ = Math.log2(sF), HQ = LQ ? "var<private> bloxdSpCrossed: bool;\n" : "", bQ = LQ ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${QQ.group}) @binding(${QQ.Sb}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${QQ.group}) @binding(${QQ.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${wQ?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${HQ}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${yF}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${BF}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${wQ?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${dF}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${qQ}, ${oQ}, ${DQ});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${qQ} * (s.y + ${oQ} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${kQ}, ${vQ}, ${mQ}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${uQ}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${zF}u) {\n\t\treturn named && state == ${KF}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${aF}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${fF}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${FQ?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${FQ?`\t\tif (exits && step > 0 && step % ${Rw} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${uQ}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${NF}u || kind == ${TF}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${KF}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${aF}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${bQ}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const iw = {
      group: 0,
      uniform: 0,
      Sb: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Ww() {
      const QQ = iw;
      return `${Cw(QQ)}${Sw(QQ,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${pw.d}>,\n}\n@group(${QQ.group}) @binding(${QQ.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${QQ.group}) @binding(${QQ.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${pw.n})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${pw.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${pw.g}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Rw = 2;
    const Ow = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function sw(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const LQ = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${FQ.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        qQ = "trace" === wQ || "lit" === wQ,
        oQ = "maskEdge" === wQ ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        DQ = qQ ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${FQ.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${FQ.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===wQ?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${oQ};\n`;
      return `${LQ}${QQ.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${qQ?function(){const[QQ,FQ,wQ]=pw.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${QQ}.0, ${FQ}.0, ${wQ}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${DQ}}\n`:""}${QQ.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${FQ.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${FQ.renderOffset});\n}\n`:""}`
    }
    const rw = "bloxdSpOwnTexture";

    function Iw(QQ) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${QQ.texture}) - 1u)))`
    }
    const Uw = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${vF.d.map((QQ=>{let[FQ,wQ]=QQ;return`\tbloxdSpOut.${FQ} = (bloxdSpWord & ${wQ}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Nw(QQ) {
      return `bloxdSpFlags(${QQ})`
    }
    const Tw = `${RF.k}.eyePosition`;

    function Kw(QQ, FQ, wQ, LQ, qQ) {
      const oQ = QQ.indexOf(FQ);
      if (oQ < 0 || QQ.indexOf(FQ, oQ + 1) >= 0) throw new Error(`Lite's ${qQ} program changed at the shader pack ${LQ} hook: ${oQ<0?"no":"more than one"} anchor (lite/${qQ}ShaderPack.ts)`);
      return QQ.slice(0, oQ) + wQ + QQ.slice(oQ + FQ.length)
    }

    function zw(QQ) {
      return QQ.sunShadow || QQ.airShadow
    }

    function lw(QQ, FQ) {
      return FQ && zw(QQ)
    }
    const jw = {
      group: RF.h,
      ...RF.u
    };

    function aw(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!zw(QQ)) return "";
      if (FQ) {
        const FQ = jw,
          qQ = "trace" === wQ || "lit" === wQ;
        let oQ = "";
        QQ.sunShadow && (oQ = qQ ? `${Sw(FQ,!0,"lit"===wQ)}${LQ=FQ,`@group(${LQ.group}) @binding(${LQ.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${LQ.group}) @binding(${LQ.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(QQ, FQ, wQ) {
          const LQ = `@group(${QQ}) @binding(${FQ}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return wQ ? `${LQ}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Ow}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((QQ=>`\t{\n\t\tlet o = vec2i(${QQ});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : LQ
        }(FQ.group, RF.x, "maskEdge" === wQ));
        const DQ = {
          shadowDirection: `${RF.k}.shadowDirection`,
          renderOffset: `${RF.k}.renderOffset`,
          eyePosition: `${RF.k}.eyePosition`
        };
        return `${Cw(FQ)}${oQ}${function(QQ){const[FQ,wQ,LQ]=pw.r;return`@group(${QQ.group}) @binding(${QQ.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${QQ.group}) @binding(${QQ.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${FQ}.0, ${wQ}.0, ${LQ}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(FQ)}${sw(QQ,DQ,wQ)}`
      }
      var LQ;
      return `${QQ.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${QQ.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Xw(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!FQ) return "";
      const oQ = (DQ = "fragmentInputs.vPositionW", kQ = QQ.sunShadow ? {
        normal: wQ,
        flags: LQ
      } : null, `\n\tbloxdSpShadowPosition = ${DQ};\n${kQ?`\tbloxdSpShadowNormal = normalize(${kQ.normal});\n\tbloxdSpShadowEmissive = (${kQ.flags} & ${vF.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${kQ.flags} & ${vF.h}u) != 0u;\n`:""}`);
      var DQ, kQ;
      return QQ.sunShadow && ("mask" === qQ || "maskEdge" === qQ) ? `${oQ}${vQ="fragmentInputs.position",mQ="maskEdge"===qQ,`\n\tbloxdSpShadowPixel = vec2i(${vQ}.xy);\n${mQ?`\tbloxdSpShadowZ = ${vQ}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${vQ}.z), dpdy(${vQ}.z));\n`:""}`}` : oQ;
      var vQ, mQ
    }
    const fw = "bloxdSpTextureRotation",
      Vw = "bloxdSpTextureLayers",
      hw = `@group(${RF.h}) @binding(${RF.A}) var<storage, read> ${Vw}: array<u32>;\n`;

    function Jw(QQ) {
      return `\tvertexOutputs.vPackTexture = ${Vw}[min(u32(${QQ}), arrayLength(&${Vw}) - 1u)];\n`
    }

    function Ew(QQ) {
      return void 0 !== QQ.uv
    }

    function nw(QQ) {
      if (!QQ) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Ew(QQ)) return function(QQ) {
        const {
          texture: FQ,
          cells: wQ,
          layers: LQ
        } = QQ, qQ = `textureDimensions(${FQ}, bloxdSpLevel)`, oQ = wQ ? `max(vec2u(vec2f(${qQ}) / ${wQ}), vec2u(1u))` : qQ, DQ = wQ ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${oQ};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${wQ}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${wQ}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${FQ}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${qQ} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${oQ};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${FQ}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let kQ;
        if (wQ)
          if (1 === LQ.length) kQ = `\treturn bloxdSpOwnTexel(${LQ[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const QQ = LQ.length - 1;
            kQ = `\tvar bloxdSpColour = bloxdSpOwnTexel(${LQ[QQ]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let FQ = QQ - 1; FQ >= 0; FQ--) kQ += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${LQ[FQ]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            kQ += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else kQ = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${QQ.id?`var<private> ${rw}: u32;\n`:""}${DQ}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Iw(QQ)};\n\treturn ${oQ};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${QQ.id?rw:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Iw(QQ)};\n${kQ}}\n`
      }(QQ);
      const FQ = QQ,
        wQ = QQ => {
          const wQ = QQ > 0 ? `bloxdSpLayer - ${FQ.layers*QQ}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${QQ}, ${FQ.sampler}, bloxdSpTurned, ${wQ}, round(bloxdSpMipLevel));`
        };
      let LQ = "";
      for (let oQ = 0; oQ < FQ.count - 1; oQ++) LQ += `\tif (bloxdSpLayer < ${FQ.layers*(oQ+1)}u) {\n\t\t${wQ(oQ)}\n\t}\n`;
      const qQ = FQ.frame ? `${FQ.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${fw}: u32;\n${hw}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${fw} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${fw} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${fw} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${qQ}${LQ}\t${wQ(FQ.count-1)}\n}\n`
    }

    function gw(QQ, FQ, wQ) {
      return !!QQ.surface && "bloxdDefaultSurface" !== QQ.surface && function(QQ, FQ) {
        return "liquid" === FQ || !QQ
      }(FQ, wQ)
    }

    function Pw(QQ, FQ) {
      return QQ.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${FQ.vertexLocalPosition}, ${Nw(FQ.vertexFlags)});\n\t\tlet bloxdSpVertex = ${QQ.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Zw(QQ, FQ, wQ, LQ, qQ) {
      if (!QQ.surface) return "";
      const oQ = (QQ, FQ) => `\n\tlet bloxdSpTexelUV = ${QQ};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${FQ}) - 1u));`;
      let DQ = "",
        kQ = "0u, 0u, vec2f(0.0), 0.0";
      const vQ = LQ && Ew(LQ) ? LQ : null,
        mQ = LQ && !Ew(LQ) ? LQ : null;
      if (vQ) {
        DQ = `${vQ.id?`\n\tlet bloxdSpTexture = ${vQ.id};\n\t${rw} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${vQ.uv};${oQ(function(QQ,FQ){var wQ;return`${null!==(wQ=QQ.levelUv)&&void 0!==wQ?wQ:QQ.cells?`${FQ} / ${QQ.cells}`:FQ} * vec2f(textureDimensions(${QQ.texture}))`}(vQ,"bloxdSpUv"),vQ.texture)}`, kQ = (vQ.id ? `${rw}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else mQ && (DQ = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${fw} = bloxdSpTexture >> 16u;${oQ(`fragmentInputs.vMainUV1 * ${(0,SF.rb)(mQ.width)}`,"textureAtlas0")}`, kQ = `bloxdSpTexture & 0xffffu, ${fw}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const uQ = qQ.overlayColour,
        HQ = uQ ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        bQ = "bloxdDefaultSurface" !== QQ.surface || uQ ? `\n\tbaseColor = vec4f(${HQ}, baseColor.a);` : "",
        YQ = gw(QQ, FQ, wQ) ? `\n\t${qQ.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${DQ}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${qQ.alpha}, ${qQ.enchantTier}, ${qQ.enchantColour}, ${qQ.enchantSpeed}, ${null!==uQ&&void 0!==uQ?uQ:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${qQ.normal}, ${qQ.localPosition}, ${Nw(qQ.flags)}, ${kQ});\n\tlet bloxdSpSurface = ${QQ.surface}(bloxdSpSurfaceIn);${bQ}${YQ}\n`
    }
    const yw = "bloxdSpLightIn";

    function Bw(QQ, FQ, wQ, LQ) {
      if (!QQ.light) return "";
      const qQ = FQ ? `${SF.k}.rgb, ${SF.k}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${SF.j}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: oQ,
          diffuse: DQ,
          emissive: kQ,
          ambient: vQ,
          fogColour: mQ,
          fogAlpha: uQ,
          normal: HQ
        } = LQ;
      return `\tvar ${yw} = BloxdLightIn(vec3f(0.0), ${wQ?oQ:"0.0"}, ${DQ}, ${kQ}, ${vQ}, ${qQ}, ${mQ}, ${uQ}, fragmentInputs.vPositionW, ${HQ}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${yw}.litColour = bloxdLitColour(bloxdSpSurface, ${yw});\n`
    }

    function dw(QQ) {
      return QQ.light ? `\n\t{\n\t\tlet bloxdSpLight = ${QQ.light}(bloxdSpSurface, ${yw});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const QL = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      FL = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      wL = "\treturn color;\n}",
      LL = {
        vertexFlags: "vertexOutputs.vBlockFlags",
        vertexLocalPosition: "vec3f(0.0)",
        flags: "fragmentInputs.vBlockFlags",
        normal: "normalize(fragmentInputs.vNormalW)",
        alpha: "alpha",
        alphaOut: "alpha",
        lambert: "fragmentInputs.vTerrainLambert",
        diffuse: "material.vDiffuseColor.rgb",
        emissive: "material.emissiveAndLevel.xyz",
        ambient: "ambient",
        fogColour: "select(vec3f(0.0), uniforms.vFogColor, uniforms.vFogInfos.x != 0.0)",
        fogAlpha: "1.0 - fog",
        enchantTier: "0u",
        enchantColour: "vec4f(0.0)",
        enchantSpeed: "0.0",
        localPosition: "vec3f(0.0)",
        overlayColour: null
      };
    const qL = Object.freeze({});

    function oL(QQ) {
      var FQ;
      return !(null === (FQ = (0, OF.f)(QQ)) || void 0 === FQ || !FQ.sceneDepth)
    }

    function DL(QQ) {
      const FQ = (0, OF.f)(QQ);
      return !!FQ && gw(FQ.hooks, FQ.strict, FQ.program)
    }

    function kL(QQ, FQ, wQ, LQ) {
      return Kw(QQ, FQ, wQ, LQ, "terrain")
    }

    function vL(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const oQ = function(QQ) {
          return (0, OF.b)(QQ.packVariant, QQ.liquid ? "liquid" : "terrain")
        }(QQ),
        {
          hooks: DQ
        } = oQ,
        kQ = lw(oQ, LQ),
        vQ = "edge" === qQ ? "maskEdge" : "plain" === qQ ? "mask" : "trace",
        mQ = Pw(DQ, LL);
      mQ && (FQ = kL(FQ, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${mQ}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const uQ = "atlas" === QQ.texture ? {
          count: QQ.atlasCount,
          layers: QQ.atlasLayers,
          width: QQ.Q_,
          sampler: "atlasSampler",
          frame: QQ.animated ? wQ : null
        } : null,
        HQ = `${oQ.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Xw(oQ,kQ,LL.normal,LL.flags,vQ)}${Zw(DQ,oQ.strict,oQ.program,uQ,LL)}`;
      HQ && (FQ = kL(FQ, QL, `${QL.slice(0,-1)}${HQ}`, "surface"));
      const bQ = dw(DQ);
      return bQ && (FQ = kL(FQ, FL, `${Bw(DQ,QQ.lighting,QQ.dirLightCount>0,LL)}${FL}`, "light input"), FQ = kL(FQ, wL, `${bQ.slice(1)}${wL}`, "light")), `${(0,RF.F)()}${oQ.sceneDepth?`@group(${RF.h}) @binding(${RF.q}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Tw};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${aw(oQ,kQ,vQ)}${nw(uQ)}${Uw}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${oQ.code}${FQ}`
    }
    const mL = CQ.d.WGSL;

    function uL(QQ) {
      return void 0 !== QQ.packVariant
    }
    const HL = {
        tqQ: 0,
        eqQ: 4,
        MqQ: 8,
        GqQ: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      bL = HL.aoLevels + 4,
      YL = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      xL = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      AL = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      tL = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      eL = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      ML = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      GL = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      pL = 0,
      cL = 3,
      CL = 4,
      SL = 5,
      iL = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${iF.c}, ${iF.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${iF.c}, ${iF.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      WL = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((QQ=>WF.c>>QQ&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const RL = {
      fH: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: QQ => `animDataPerTex[${QQ}]`
    };

    function OL(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RL;
      return `\n\tlet atlasIdxIn = ${QQ};\n\tlet animTick = ${wQ.fH};\n\tlet animTickStride = ${wQ.stride};\n\tlet numAnimTextures = ${wQ.count};\n\t${(0,SQ.i)(CQ.d.WGSL,wQ.perTexture)}\n\t${FQ}animLayer;\n`
    }

    function sL(QQ) {
      const FQ = (FQ, wQ) => {
        const LQ = FQ > 0 ? `fragmentInputs.texAtlasIndex - ${QQ.atlasLayers.toFixed(1)} * ${FQ.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${wQ?"textureSampleLevel":"textureSample"}(textureAtlas${FQ}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${LQ}))${wQ?", atlasLod":""})`
      };
      if (1 === QQ.atlasCount) return `baseColor = ${FQ(0,!1)};`;
      let wQ = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,SF.rb)(QQ.Q_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let LQ = 0; LQ < QQ.atlasCount; LQ++) {
        const qQ = QQ.atlasLayers * (LQ + 1) - .5;
        wQ += `${LQ>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,SF.rb)(qQ)}) {\n\t\tbaseColor = ${FQ(LQ,!0)};\n\t}`
      }
      return wQ
    }

    function rL(QQ) {
      return `terrain-${QQ.texture}${"atlas"===QQ.texture?QQ.atlasCount:""}${QQ.animated?"-anim":""}${QQ.alphaTest?"-test":""}${QQ.lighting?"-lit":""}-dir${QQ.dirLightCount}${QQ.packed?"-packed":""}${uL(QQ)?`-sp${QQ.packVariant}`:""}${QQ.liquid?"-liquid":""}${QQ.resting?"-rest":""}`
    }

    function IL(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const LQ = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const wQ = "none" !== QQ.texture,
          LQ = "atlas" === QQ.texture,
          qQ = QQ.dirLightCount > 0,
          oQ = uL(QQ);
        if (QQ.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${QQ.dirLightCount}`);
        let DQ = 1,
          kQ = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (LQ) {
          QQ.animated && (kQ += `@group(2) @binding(${DQ++}) var<storage, read> animDataPerTex: array<f32>;\n`), kQ += `@group(2) @binding(${DQ++}) var atlasSampler: sampler;\n`;
          for (let FQ = 0; FQ < QQ.atlasCount; FQ++) kQ += `@group(2) @binding(${DQ++}) var textureAtlas${FQ}: texture_2d_array<f32>;\n`
        } else "single" === QQ.texture && (kQ += `@group(2) @binding(${DQ++}) var diffuseSamplerSampler: sampler;\n`, kQ += `@group(2) @binding(${DQ++}) var diffuseSampler: texture_2d<f32>;\n`);
        const vQ = function(QQ) {
            const FQ = GL,
              wQ = "none" !== QQ.texture,
              LQ = "atlas" === QQ.texture,
              qQ = uL(QQ);
            return QQ.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${wQ?"uv: vec2f,":""}\n\t${LQ?"texAtlasIndices: f32,":""}\n\t${QQ.lighting?"aPackedLightLevels: f32,":""}\n\t${qQ?"blockFlagWords: vec2u,":""}\n}\n${iL}\n${WL}\n${"single"===QQ.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${wQ?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===QQ.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${LQ?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${QQ.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${qQ?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${FQ.position}) position: vec3f,\n\t@location(${FQ.normal}) normal: vec4f,\n\t@location(${FQ.color}) color: vec4f,\n\t${wQ?`@location(${FQ.uv}) uv: vec2f,`:""}\n\t${QQ.lighting?`@location(${FQ.packedLight}) aPackedLightLevels: f32,`:""}\n\t${qQ?`@location(${FQ.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(QQ),
          mQ = `\n${tL}\n${xL}\n${AL}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${kQ}\n${PQ}\n${vQ.declarations}\nstruct Varyings {\n\t${"none"===FQ?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${QQ.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${qQ?"@location(5) vTerrainLambert: f32,":""}\n\t${wQ?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${LQ?"@location(7) texAtlasIndex: f32,":""}\n\t${QQ.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${oQ?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${oQ&&LQ?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${QQ.resting?"":(0,SF.u)(mL)}\n${ML}\n\n@vertex\nfn mainVertex(${vQ.parameter}) -> Varyings {\n\t${vQ.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${oQ?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${vF.c.placed}u;`:""}\n\t${oQ&&LQ?Jw("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${QQ.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${wQ?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${LQ?function(QQ){return QQ?OL("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(QQ.animated):""}\n\t${"single"===QQ.texture&&QQ.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,SF.ab)(mL)}\n\t${(0,SF.I)(mL,QQ.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${QQ.resting?"":eL}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${LQ?sL(QQ):""}\n\t${"single"===QQ.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${wQ?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${QQ.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${qQ?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${gQ}));\n\t${uL(QQ)?(0,SF.kb)(CQ.d.WGSL):(0,SF.T)(mL)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          uQ = new Set;
        QQ.lighting && uQ.add("BLOXD_LIGHTING");
        qQ && uQ.add("BLOXD_TERRAIN_DIRECTIONAL");
        return pF(mQ, new Map([...uQ].map((QQ => [QQ, !0]))))
      }(QQ, wQ);
      if (!uL(QQ)) return LQ;
      const qQ = vL(QQ, LQ, OL, FQ, wQ);
      return "none" === wQ ? qQ : `${qQ}${function(QQ){const FQ="none"!==QQ.texture&&QQ.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${QQ.resting?"":eL}\n\t${QQ.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${FQ&&"atlas"===QQ.texture?sL(QQ):""}\n\t${FQ&&"single"===QQ.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${FQ?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${vF.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(QQ)}`
    }
    const UL = new Map([
      ["float", {
        wgsl: "f32",
        align: 1,
        floats: 1
      }],
      ["vec2", {
        wgsl: "vec2f",
        align: 2,
        floats: 2
      }],
      ["vec3", {
        wgsl: "vec3f",
        align: 4,
        floats: 3
      }],
      ["vec4", {
        wgsl: "vec4f",
        align: 4,
        floats: 4
      }],
      ["mat4", {
        wgsl: "mat4x4f",
        align: 4,
        floats: 16
      }]
    ]);

    function NL(QQ, FQ) {
      const wQ = new Map;
      let LQ = 0;
      const qQ = [],
        oQ = [],
        DQ = [];
      for (const mQ of FQ) {
        var kQ, vQ;
        const FQ = null !== (kQ = mQ.type.trim().split(/\s+/).pop()) && void 0 !== kQ ? kQ : mQ.type,
          uQ = UL.get(FQ);
        if (!uQ) throw new Error(`Lite: no uniform layout for ${mQ.name}: ${mQ.type}`);
        const HQ = null !== (vQ = mQ.arraySize) && void 0 !== vQ ? vQ : 0,
          bQ = HQ ? 4 : uQ.align;
        LQ = Math.ceil(LQ / bQ) * bQ;
        const YQ = HQ ? 4 * Math.ceil(uQ.floats / 4) : uQ.floats;
        if (wQ.set(mQ.name, {
            offset: LQ,
            floats: uQ.floats,
            arraySize: HQ,
            stride: YQ
          }), HQ && uQ.floats <= 2) {
          const FQ = `${QQ}_${DQ.length}_strided`;
          oQ.push(`struct ${FQ} {\n\t@size(16) el: ${uQ.wgsl},\n}`), DQ.push(mQ.name), qQ.push(`\t@align(16) ${mQ.name}: array<${FQ}, ${HQ}>,`)
        } else HQ ? qQ.push(`\t@align(16) ${mQ.name}: array<${uQ.wgsl}, ${HQ}>,`) : qQ.push(`\t${mQ.name}: ${uQ.wgsl},`);
        LQ += HQ ? YQ * HQ : uQ.floats
      }
      return {
        slots: wQ,
        floats: Math.max(4, 4 * Math.ceil(LQ / 4)),
        wgsl: `${oQ.join("\n")}\nstruct ${QQ} {\n${qQ.join("\n")}\n}\n`,
        stridedArrays: DQ
      }
    }
    const TL = [{
        name: "vDiffuseColor",
        type: "vec4"
      }, {
        name: "vDiffuseInfos",
        type: "vec2"
      }, {
        name: "alphaCutOff",
        type: "float"
      }, {
        name: "vEmissiveColor",
        type: "vec3"
      }, {
        name: "vAmbientColor",
        type: "vec3"
      }, {
        name: "vSpecularColor",
        type: "vec4"
      }, {
        name: "diffuseMatrix",
        type: "mat4"
      }, {
        name: "vReflectionInfos",
        type: "vec2"
      }, {
        name: "reflectionMatrix",
        type: "mat4"
      }],
      KL = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      zL = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function lL(QQ, FQ) {
      return `#if defined(${QQ}) && ${QQ}DIRECTUV == 0\nvarying v${FQ}UV: vec2f;\n#endif`
    }

    function jL(QQ, FQ, wQ) {
      return `#if defined(${QQ}) && ${QQ}DIRECTUV == 0\nif (uniforms.v${FQ}Infos.x==0.)\n{vertexOutputs.v${FQ}UV= (uniforms.${wQ}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${FQ}UV= (uniforms.${wQ}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function aL(QQ, FQ, wQ) {
      return `#ifdef ${QQ}\n#if ${QQ}DIRECTUV == 1\n#define v${FQ}UV vMainUV1\n#elif ${QQ}DIRECTUV == 2\n#define v${FQ}UV vMainUV2\n#else\nvarying v${FQ}UV: vec2f;\n#endif\nvar ${wQ}SamplerSampler: sampler;\nvar ${wQ}Sampler: texture_2d<f32>;\n#endif`
    }
    const XL = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      fL = 256,
      VL = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      hL = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      JL = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      EL = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      nL = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      gL = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      PL = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      ZL = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${hL}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${lL("OPACITY","Opacity")}\n${lL("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${PL}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${JL}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${jL("OPACITY","Opacity","opacity")}\n${jL("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${EL}\n#define CUSTOM_VERTEX_MAIN_END\n${nL}\n}\n`;
    const yL = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${aL("OPACITY","Opacity","opacity")}\n${aL("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${PL}\n${gL}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((QQ,FQ)=>function(QQ){const FQ=`
    frame.lights[LITE_LIGHT$ {
        QQ
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      QQ
    }\
    nvar diffuse$ {
      QQ
    }: vec4f = $ {
      FQ
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      QQ
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      FQ
    }.vLightData, diffuse$ {
      QQ
    }.rgb, $ {
      FQ
    }.vLightSpecular.rgb, diffuse$ {
      QQ
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(FQ))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, BL = /^([gimus]+)!/, dL = new Set;

    function Qq(QQ) {
      dL.has(QQ) || (dL.add(QQ), console.warn(`Lite: no place for plugin code at ${QQ} in the standard shader: it is left out`))
    }

    function Fq(QQ, FQ) {
      let wQ = QQ;
      const LQ = new Map;
      for (const [oQ, DQ] of FQ) {
        var qQ;
        LQ.set(oQ, `${null!==(qQ=LQ.get(oQ))&&void 0!==qQ?qQ:""}${DQ}\n`)
      }
      for (const [oQ, DQ] of LQ) {
        if (!oQ.startsWith("!")) {
          const QQ = `#define ${oQ}`;
          if (!wQ.includes(QQ)) {
            Qq(oQ);
            continue
          }
          wQ = wQ.replace(QQ, (() => `\n${DQ}\n${QQ}`));
          continue
        }
        let QQ = oQ.substring(1),
          FQ = "g";
        if (QQ.startsWith("!")) FQ = "", QQ = QQ.substring(1);
        else {
          const wQ = BL.exec(QQ);
          wQ && (FQ = wQ[1], QQ = QQ.substring(FQ.length + 1))
        }
        const LQ = new RegExp(QQ, FQ.includes("g") ? FQ : `${FQ}g`);
        let qQ = LQ.exec(wQ);
        for (qQ || Qq(oQ); qQ;) {
          const QQ = qQ,
            FQ = DQ.replace(/\$(\d+)/g, ((FQ, wQ) => Number(wQ) < QQ.length ? QQ[Number(wQ)] : ""));
          wQ = wQ.substring(0, QQ.index) + FQ + wQ.substring(QQ.index + QQ[0].length), LQ.lastIndex = QQ.index + FQ.length, qQ = LQ.exec(wQ)
        }
      }
      return wQ
    }
    const wq = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Lq = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      qq = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function oq(QQ) {
      const FQ = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let wQ = QQ.replace(wq, ((QQ, wQ, LQ, qQ, oQ, DQ) => ("attribute" === wQ ? FQ.attributes.push({
        name: oQ,
        type: DQ
      }) : void 0 === wQ ? FQ.varyings.push({
        name: oQ,
        type: DQ,
        interpolation: kq(DQ, LQ, qQ)
      }) : FQ.uniforms.push({
        name: oQ,
        type: Dq(DQ)
      }), "")));
      return wQ = wQ.replace(Lq, ((QQ, wQ) => (FQ.samplers.add(wQ), ""))), wQ = wQ.replace(qq, ((QQ, wQ, LQ) => (FQ.textures.push({
        name: wQ,
        type: LQ
      }), ""))), FQ.body = wQ, FQ
    }

    function Dq(QQ) {
      const FQ = QQ.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        wQ = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(FQ);
      if (!wQ) throw new Error(`Lite: unsupported uniform type ${QQ}`);
      return wQ
    }

    function kq(QQ, FQ, wQ) {
      return void 0 === FQ && void 0 === wQ ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(QQ.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === FQ ? "@interpolate(flat) " : `@interpolate(${null!==FQ&&void 0!==FQ?FQ:"perspective"}, ${null!==wQ&&void 0!==wQ?wQ:"center"}) `
    }

    function vq(QQ) {
      return bq({
        defines: QQ.defines,
        vertex: Fq(ZL, QQ.vertexCode),
        fragment: Fq(yL, QQ.fragmentCode),
        members: [...TL, ...QQ.defines.has("OPACITY") ? KL : [], ...QQ.defines.has("EMISSIVE") ? zL : [], ...QQ.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function mq(QQ) {
      const FQ = QQ.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (FQ === QQ) throw new Error("Lite: fragment main has no return");
      return FQ
    }
    const uq = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${hL}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${JL}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${EL}\n${nL}\n}\n`,
      Hq = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${gL}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function bq(QQ) {
      const FQ = QQ.defines,
        wQ = oq(pF(QQ.vertex, FQ)),
        LQ = oq(pF(QQ.fragment, FQ)),
        qQ = new Map;
      for (const GQ of [...wQ.varyings, ...LQ.varyings]) qQ.has(GQ.name) || qQ.set(GQ.name, GQ);
      const oQ = [...qQ.values()].map(((QQ, FQ) => `\t@location(${FQ}) ${QQ.interpolation}${QQ.name}: ${QQ.type},`)),
        DQ = [...QQ.members];
      for (const GQ of [...wQ.uniforms, ...LQ.uniforms]) DQ.some((QQ => QQ.name === GQ.name)) || DQ.push(GQ);
      const kQ = NL(QQ.structName, DQ),
        vQ = [],
        mQ = [];
      let uQ = 1;
      const HQ = new Set;
      for (const GQ of [...wQ.textures, ...LQ.textures]) {
        if (HQ.has(GQ.name)) continue;
        HQ.add(GQ.name);
        const QQ = `${GQ.name}Sampler`,
          FQ = uQ++,
          wQ = uQ++,
          LQ = GQ.type.startsWith("texture_2d_array") ? "2d-array" : GQ.type.startsWith("texture_cube") ? "cube" : "2d";
        vQ.push({
          name: GQ.name,
          binding: FQ,
          samplerBinding: wQ,
          dimension: LQ
        }), mQ.push(`@group(2) @binding(${FQ}) var ${GQ.name}: ${GQ.type};`), mQ.push(`@group(2) @binding(${wQ}) var ${QQ}: sampler;`)
      }
      for (const GQ of [...wQ.samplers, ...LQ.samplers])
        if (!HQ.has(GQ.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${GQ} has no texture`);
      const bQ = [tL, VL, kQ.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${QQ.structName};`, ...mQ].join("\n"),
        YQ = wQ.attributes,
        xQ = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...wQ.attributes.map(((QQ, FQ) => `\t@location(${FQ}) ${QQ.name}: ${QQ.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        AQ = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...oQ, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        tQ = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...LQ.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...oQ, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", PQ, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${gQ}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        eQ = QQ => {
          for (const FQ of kQ.stridedArrays) QQ = QQ.replace(new RegExp(`\\b${FQ}\\s*\\[(.*?)\\]`, "g"), `${FQ}[$1].el`);
          return QQ
        };
      return {
        vertex: `${bQ}\n${xQ}\n${AQ}\n${eQ(wQ.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${bQ}\n${tQ}\n${mq((MQ=eQ(LQ.body),MQ.includes("fragmentInputs.position")?MQ.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):MQ))}`,
        attributes: YQ,
        material: kQ,
        textures: vQ
      };
      var MQ
    }
    const Yq = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      xq = QQ => ({
        name: QQ,
        type: "vec3"
      }),
      Aq = QQ => ({
        name: QQ,
        type: "float"
      }),
      tq = NL("EarthSkyUniforms", [xq("viewFrom"), Aq("exposureScale"), xq("zenithOffset"), Aq("fogOn"), xq("up"), Aq("ditherOn"), xq("sun"), Aq("turbidity"), xq("tint"), Aq("rayleigh"), xq("sunDir"), Aq("mieStrength"), xq("inScatterR"), Aq("mieFocus"), xq("inScatterM"), Aq("sunE"), xq("extinctionBeta"), Aq("sunsetMix"), Aq("mieScale"), Aq("mieBase"), Aq("mieSlope"), Aq("sunDiscE"), Aq("exposure")]),
      eq = `${tL}\n${VL}\n${tq.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      Mq = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Yq.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Gq = `\n${PQ}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(tF).map((QQ=>{let[FQ,wQ]=QQ;return`const TONE_${FQ}: f32 = ${wQ};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${eF};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${gQ}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var pq = wQ(36688);
    const cq = new pq.Ox,
      Cq = new pq.Ox,
      Sq = new pq.Quaternion,
      iq = new Float64Array(3),
      Wq = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Rq = new Float64Array(16);

    function Oq(QQ, FQ, wQ) {
      const LQ = wQ.worldMatrix;
      var qQ;
      QQ.updateFloat3("viewFrom", LQ[12], LQ[13], LQ[14]), QQ.updateFloatsFrom("zenithOffset", FQ.cameraOffset, 0, 3), QQ.updateFloatsFrom("up", FQ.up, 0, 3), FQ.luminance > 0 && (QQ.updateFloat("exposure", FQ.luminance), QQ.updateFloat("exposureScale", (qQ = FQ.luminance, Math.log2(2 / Math.pow(qQ, 4))))), QQ.updateFloat("turbidity", FQ.turbidity), QQ.updateFloat("rayleigh", FQ.rayleigh), QQ.updateFloat("mieStrength", FQ.mieCoefficient), QQ.updateFloat("mieFocus", FQ.mieDirectionalG), QQ.updateFloatsFrom("tint", FQ.tint, 0, 3), QQ.updateFloat("fogOn", FQ.fog && wQ.fogEnabled && 0 !== wQ.fogMode ? 1 : 0), QQ.updateFloat("ditherOn", FQ.dithering ? 1 : 0);
      const oQ = FQ.sunPosition;
      if (cq.set(oQ[0], oQ[1], oQ[2]), !FQ.useSunPosition) {
        const QQ = Math.PI * (FQ.inclination - .5),
          wQ = 2 * Math.PI * (FQ.azimuth - .5);
        cq.set(FQ.distance * Math.cos(wQ) * Math.cos(QQ), FQ.distance * Math.sin(-QQ), FQ.distance * Math.sin(wQ) * Math.cos(QQ)), pq.Quaternion.FromUnitVectorsToRef(pq.Ox.UpReadOnly, Cq.set(FQ.up[0], FQ.up[1], FQ.up[2]), Sq), cq.rotateByQuaternionToRef(Sq, cq)
      }
      QQ.updateVector3("sun", cq), iq[0] = cq.x, iq[1] = cq.y, iq[2] = cq.z;
      const DQ = AF(FQ, iq, Wq);
      QQ.updateFloatsFrom("sunDir", DQ.sunDir, 0, 3), QQ.updateFloat("sunE", DQ.sunE), QQ.updateFloatsFrom("inScatterR", DQ.inScatterR, 0, 3), QQ.updateFloatsFrom("inScatterM", DQ.inScatterM, 0, 3), QQ.updateFloatsFrom("extinctionBeta", DQ.extinctionBeta, 0, 3), QQ.updateFloat("sunsetMix", DQ.sunsetMix), QQ.updateFloat("sunDiscE", DQ.sunDiscE), QQ.updateFloat("mieScale", DQ.mieScale), QQ.updateFloat("mieBase", DQ.mieBase), QQ.updateFloat("mieSlope", DQ.mieSlope)
    }

    function sq(QQ, FQ) {
      const wQ = Rq;
      wQ[0] = FQ.far, wQ[5] = FQ.far, wQ[10] = FQ.far, wQ[15] = 1;
      const LQ = QQ.infiniteDistance;
      for (let qQ = 0; qQ < 3; qQ++) wQ[12 + qQ] = QQ.position[qQ] + (LQ ? FQ.worldMatrix[12 + qQ] : 0);
      return Rq
    }
    var rq = wQ(38247);

    function Iq(QQ) {
      return Math.max(4, 4 * Math.ceil(QQ / 4))
    }

    function Uq(QQ, FQ, wQ, LQ) {
      const qQ = QQ.createBuffer({
        label: LQ,
        size: Iq(FQ.byteLength),
        usage: wQ,
        mappedAtCreation: !0
      });
      return new Uint8Array(qQ.getMappedRange(), 0, FQ.byteLength).set(new Uint8Array(FQ.buffer, FQ.byteOffset, FQ.byteLength)), qQ.unmap(), qQ
    }

    function Nq(QQ, FQ) {
      return Math.floor(Math.log2(Math.max(QQ, FQ))) + 1
    }

    function Tq(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = QQ.createTexture({
          label: oQ,
          size: {
            width: wQ,
            height: LQ,
            depthOrArrayLayers: qQ
          },
          format: "rgba8unorm",
          mipLevelCount: Nq(wQ, LQ),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        kQ = (FQ, wQ, LQ, oQ) => {
          QQ.queue.writeTexture({
            texture: DQ,
            mipLevel: wQ
          }, FQ, {
            bytesPerRow: 4 * LQ,
            rowsPerImage: oQ
          }, {
            width: LQ,
            height: oQ,
            depthOrArrayLayers: qQ
          })
        };
      kQ(FQ, 0, wQ, LQ);
      let vQ = 1;
      for (const mQ of function*(QQ, FQ, wQ, LQ) {
          let qQ = QQ,
            oQ = FQ,
            DQ = wQ;
          for (; oQ > 1 || DQ > 1;) {
            const QQ = Math.max(1, oQ >> 1),
              FQ = Math.max(1, DQ >> 1),
              wQ = new Uint8Array(QQ * FQ * LQ * 4),
              kQ = 4 * oQ;
            let vQ = 0;
            for (let mQ = 0; mQ < LQ; mQ++) {
              const LQ = mQ * kQ * DQ;
              for (let mQ = 0; mQ < FQ; mQ++) {
                const FQ = LQ + Math.min(2 * mQ, DQ - 1) * kQ,
                  uQ = LQ + Math.min(2 * mQ + 1, DQ - 1) * kQ;
                for (let LQ = 0; LQ < QQ; LQ++) {
                  const QQ = 4 * Math.min(2 * LQ, oQ - 1),
                    DQ = 4 * Math.min(2 * LQ + 1, oQ - 1);
                  for (let LQ = 0; LQ < 4; LQ++) wQ[vQ++] = qQ[FQ + QQ + LQ] + qQ[FQ + DQ + LQ] + qQ[uQ + QQ + LQ] + qQ[uQ + DQ + LQ] + 2 >> 2
                }
              }
            }
            yield {
              data: wQ,
              width: QQ,
              height: FQ
            }, qQ = wQ, oQ = QQ, DQ = FQ
          }
        }(FQ, wQ, LQ, qQ)) kQ(mQ.data, vQ++, mQ.width, mQ.height);
      return DQ
    }
    const Kq = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function zq(QQ) {
      if (QQ.startsWith("data:")) {
        const FQ = QQ.search(/[;,]/);
        return `data:${FQ>5?QQ.slice(5,FQ):""} URL of ${QQ.length} characters`
      }
      return QQ.length > 80 ? `${QQ.slice(0,80)}...` : QQ
    }
    async function lq(QQ) {
      const FQ = await fetch(QQ);
      if (!FQ.ok) throw new Error(`${zq(QQ)}: ${FQ.status} ${FQ.statusText}`);
      return createImageBitmap(await FQ.blob(), Kq)
    }
    async function jq(QQ) {
      const FQ = await lq(QQ),
        wQ = new OffscreenCanvas(FQ.width, FQ.height),
        LQ = wQ.getContext("2d", {
          willReadFrequently: !0
        });
      if (!LQ) throw new Error("No 2D context to decode an image");
      LQ.drawImage(FQ, 0, 0);
      const {
        data: qQ
      } = LQ.getImageData(0, 0, FQ.width, FQ.height);
      return FQ.close(), {
        pixels: new Uint8Array(qQ.buffer, qQ.byteOffset, qQ.byteLength),
        width: wQ.width,
        height: wQ.height
      }
    }
    const aq = new WeakMap;

    function Xq(QQ, FQ, wQ, LQ) {
      var qQ;
      const oQ = null !== (qQ = aq.get(QQ)) && void 0 !== qQ ? qQ : new Map;
      aq.set(QQ, oQ);
      let DQ = oQ.get(FQ);
      return DQ || (DQ = (async qQ => {
        const oQ = null !== (qQ = function(QQ, FQ) {
          const wQ = QQ ? new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength) : null;
          return null !== wQ && void 0 !== wQ && wQ.byteLength && FQ && wQ.byteLength % (FQ * FQ * 4) === 0 ? {
            pixels: wQ,
            layerWidth: FQ,
            layers: wQ.byteLength / (FQ * FQ * 4)
          } : null
        }(wQ, LQ)) && void 0 !== qQ ? qQ : await async function(QQ) {
          const {
            pixels: FQ,
            width: wQ
          } = await jq(QQ);
          return {
            pixels: FQ,
            layerWidth: wQ,
            layers: FQ.byteLength / (wQ * wQ * 4)
          }
        }(FQ), {
          layerWidth: DQ,
          layers: kQ
        } = oQ;
        return {
          texture: Tq(QQ, oQ.pixels, DQ, DQ, kQ, `atlas-${FQ}`),
          layerWidth: DQ,
          layers: kQ
        }
      })(), oQ.set(FQ, DQ), DQ.catch((() => {
        oQ.delete(FQ)
      }))), DQ
    }
    const fq = new Map([
        [0, "zero"],
        [1, "one"],
        [768, "src"],
        [769, "one-minus-src"],
        [770, "src-alpha"],
        [771, "one-minus-src-alpha"],
        [772, "dst-alpha"],
        [773, "one-minus-dst-alpha"],
        [774, "dst"],
        [775, "one-minus-dst"],
        [776, "src-alpha-saturated"]
      ]),
      Vq = new Map([
        [1, [770, 1, "add"]],
        [2, [770, 771, "add"]],
        [3, [0, 769, "add"]],
        [4, [774, 0, "add"]],
        [5, [770, 769, "add"]],
        [6, [1, 1, "add"]],
        [7, [1, 771, "add"]],
        [8, [1, 771, "add"]],
        [10, [1, 769, "add"]],
        [11, [1, 1, "add"]],
        [14, [1, 771, "add"]],
        [15, [1, 1, "add"]],
        [17, [770, 771, "add"]],
        [18, [1, 1, "min"]],
        [19, [1, 1, "max"]]
      ]);

    function hq(QQ) {
      for (const FQ of (0, rq.l)(QQ))
        if (!Vq.has((0, rq.j)(FQ))) return !1;
      return !0
    }

    function Jq(QQ) {
      const FQ = Vq.get(QQ);
      if (!FQ) return null;
      const [wQ, LQ, qQ] = FQ;
      return {
        srcFactor: fq.get(wQ),
        dstFactor: fq.get(LQ),
        operation: qQ
      }
    }
    let Eq = null;

    function nq(QQ) {
      Eq = QQ
    }

    function gq(QQ, FQ, wQ) {
      var LQ;
      null === (LQ = Eq) || void 0 === LQ || LQ(QQ, FQ, wQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class Pq {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(QQ, FQ, wQ, LQ, qQ) {
        wQ !== this.pipeline && (QQ.setPipeline(wQ), this.pipeline = wQ), QQ.setBindGroup(1, LQ, [qQ]);
        const oQ = FQ.material.bindGroup;
        oQ !== this.materialGroup && (QQ.setBindGroup(2, oQ), this.materialGroup = oQ);
        const DQ = FQ.program.packGroup;
        DQ && DQ !== this.packGroup && (QQ.setBindGroup(RF.h, DQ), this.packGroup = DQ);
        const {
          vertexBuffers: kQ,
          vertexOffsets: vQ
        } = this;
        for (let mQ = 0; mQ < FQ.vertexBuffers.length; mQ++) kQ[mQ] === FQ.vertexBuffers[mQ] && vQ[mQ] === FQ.vertexOffsets[mQ] || (QQ.setVertexBuffer(mQ, FQ.vertexBuffers[mQ], FQ.vertexOffsets[mQ]), kQ[mQ] = FQ.vertexBuffers[mQ], vQ[mQ] = FQ.vertexOffsets[mQ]);
        FQ.indexBuffer && FQ.indexBuffer !== this.indexBuffer && (QQ.setIndexBuffer(FQ.indexBuffer, FQ.indexFormat), this.indexBuffer = FQ.indexBuffer)
      }
    }
    class Zq {
      constructor(QQ, FQ, wQ, LQ) {
        this.modelMeshes = QQ, this.X3 = FQ, this.maker = wQ, this.warnOnce = LQ, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(QQ) {
        this.collectGroup(QQ, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(QQ, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(QQ, 1, this.frontDraws, this.frontDraws, !0);
        for (const FQ of this.modelMeshes.groupIds())(FQ < -1 || FQ > 1) && this.warnOnce(`group:${FQ}`, `rendering group ${FQ} is not drawn`);
        for (const FQ of this.X3.groupIds())(FQ < -1 || FQ > 1) && this.warnOnce(`group:${FQ}`, `rendering group ${FQ} is not drawn`);
        this.opaqueDraws.sort(yq), this.transparentDraws.sort(Bq)
      }
      collectGroup(QQ, FQ, wQ, LQ, qQ) {
        const oQ = this.modelMeshes.group(FQ),
          DQ = this.X3.group(FQ),
          kQ = 0 === FQ ? null === DQ || void 0 === DQ ? void 0 : DQ.opaque : void 0;
        this.collectList(QQ, null === oQ || void 0 === oQ ? void 0 : oQ.opaque, kQ || null === DQ || void 0 === DQ ? void 0 : DQ.opaque, FQ, !1, wQ, qQ), kQ && (this.X3.drawn += this.maker.bundleDraws(QQ, kQ, FQ)), this.collectList(QQ, null === oQ || void 0 === oQ ? void 0 : oQ.alphaTest, void 0, FQ, !1, wQ, qQ), this.collectList(QQ, null === oQ || void 0 === oQ ? void 0 : oQ.transparent, null === DQ || void 0 === DQ ? void 0 : DQ.transparent, FQ, !0, LQ, qQ)
      }
      collectList(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        var kQ;
        const vQ = oQ.length;
        FQ && this.maker.pushDraws(QQ, FQ.units, FQ.units.length, LQ, qQ, oQ, FQ.rows), wQ && (this.X3.drawn += this.maker.pushDraws(QQ, wQ, wQ.length, LQ, qQ, oQ));
        const mQ = qQ ? null === (kQ = this.modelMeshes.group(LQ)) || void 0 === kQ ? void 0 : kQ.text : void 0;
        mQ && this.maker.pushDraws(QQ, mQ.units, mQ.units.length, LQ, !0, oQ, mQ.rows), DQ && dq(oQ, vQ)
      }
    }

    function yq(QQ, FQ) {
      return QQ.program.id - FQ.program.id || QQ.material.owner.uniqueId - FQ.material.owner.uniqueId
    }

    function Bq(QQ, FQ) {
      return QQ.material.owner.uniqueId - FQ.material.owner.uniqueId
    }

    function dq(QQ, FQ) {
      for (let wQ = FQ + 1; wQ < QQ.length; wQ++) {
        const LQ = QQ[wQ];
        let qQ = wQ - 1;
        for (; qQ >= FQ && Bq(QQ[qQ], LQ) > 0; qQ--) QQ[qQ + 1] = QQ[qQ];
        QQ[qQ + 1] = LQ
      }
    }
    const Qo = {};

    function Fo(QQ) {
      return QQ.hasThinInstances ? "thin" : QQ.pqQ || QQ._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function wo(QQ, FQ, wQ) {
      return QQ ? (wQ._needUVs = !0, QQ.optimizeUVAllocation && (0, OQ.B)(QQ.matrix) ? (wQ[`${FQ}DIRECTUV`] = QQ.uvSet + 1, wQ[`MAINUV${QQ.uvSet+1}`] = !0) : wQ[`${FQ}DIRECTUV`] = 0, !0) : (wQ[`${FQ}DIRECTUV`] = 0, !1)
    }

    function Lo(QQ) {
      const FQ = new Map;
      for (const wQ in QQ) {
        if (95 === wQ.charCodeAt(0)) continue;
        const LQ = QQ[wQ],
          qQ = typeof LQ;
        "number" === qQ || "string" === qQ ? FQ.set(wQ, String(LQ)) : LQ && "function" !== qQ && FQ.set(wQ, !0)
      }
      return FQ
    }

    function qo(QQ) {
      const FQ = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: wQ
        }
        of QQ.features)
        for (const QQ in wQ) FQ[QQ] = wQ[QQ];
      return FQ
    }

    function oo(QQ) {
      const FQ = QQ.parts.geometry;
      return null !== FQ && void 0 !== FQ && FQ.live ? FQ : null
    }

    function Do(QQ) {
      var FQ;
      return null !== (FQ = oo(QQ)) && void 0 !== FQ ? FQ : Qo
    }
    class ko {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = QQ, this.warnOnce = FQ, this.programWithModel = wQ, this.packFailed = LQ, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(QQ, FQ, wQ, LQ, qQ) {
        const oQ = FQ.owner;
        let DQ = this.drawStates.get(FQ);
        if (!DQ) {
          const QQ = FQ.parts.materials[FQ.range];
          if (!QQ) return this.warnOnce("model", `${wQ.name} on ${oQ.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          DQ = {
            defines: qo(QQ),
            model: QQ,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: qQ,
            groupId: LQ,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(FQ, DQ)
        }
        if (this.programCurrent(DQ, FQ, qQ, LQ)) return DQ.program;
        const {
          model: kQ
        } = DQ, vQ = Do(FQ), mQ = this.instanceLayout(oQ, qQ), uQ = this.definesBits(oQ);
        if (!this.prepareModelDefines(QQ, oQ, kQ, DQ.defines, LQ, qQ)) return null;
        DQ.instancing = qQ, DQ.groupId = LQ, DQ.modelVersion = kQ.version, DQ.geometry = vQ, DQ.instanceLayout = mQ, DQ.definesBits = uQ;
        const HQ = function(QQ) {
          let FQ = "";
          for (const [wQ, LQ] of QQ) FQ += !0 === LQ ? `${wQ};` : `${wQ}=${LQ};`;
          return FQ
        }(Lo(DQ.defines));
        return HQ === DQ.definesKey && DQ.packVariant === this.modelPackVariant && DQ.program && !this.packFailed(DQ.program) || (DQ.definesKey = HQ, DQ.packVariant = this.modelPackVariant, DQ.program = this.programWithModel(kQ, DQ.defines, HQ)), DQ.program
      }
      programCurrent(QQ, FQ, wQ, LQ) {
        return null !== QQ.program && !this.packFailed(QQ.program) && QQ.instancing === wQ && QQ.groupId === LQ && this.definesHold(QQ, FQ, wQ)
      }
      definesHold(QQ, FQ, wQ) {
        return QQ.modelVersion === QQ.model.version && QQ.geometry === Do(FQ) && QQ.instanceLayout === this.instanceLayout(FQ.owner, wQ) && QQ.definesBits === this.definesBits(FQ.owner) && QQ.packVariant === this.modelPackVariant
      }
      modelPackKind(QQ) {
        var FQ;
        return 0 === this.modelPackVariant ? null : null !== (FQ = (0, WQ.z)(QQ, iQ.h.name)) && void 0 !== FQ && FQ.active ? "placed" : QQ.item ? "item" : QQ.lifeform ? "lifeform" : QQ.box ? "box" : null
      }
      instanceLayout(QQ, FQ) {
        var wQ, LQ, qQ;
        return "thin" === FQ ? null !== (qQ = this.resources.T_.get(QQ)) && void 0 !== qQ ? qQ : null : "instanced" === FQ && null !== (wQ = null === (LQ = QQ._userInstancedBuffersStorage) || void 0 === LQ ? void 0 : LQ.interleavedKinds) && void 0 !== wQ ? wQ : null
      }
      definesBits(QQ) {
        const FQ = this.view;
        return (QQ.visibility < 1 ? 1 : 0) | (QQ.hasVertexAlpha ? 2 : 0) | (QQ.applyFog ? 4 : 0) | (QQ.useVertexColors ? 8 : 0) | (QQ.nonUniformScaling ? 16 : 0) | (FQ.fogEnabled && 0 !== FQ.fogMode ? 32 : 0) | (FQ.lightsEnabled ? 64 : 0) | FQ.lightCount << 7
      }
      prepareLightDefines(QQ, FQ, wQ) {
        let LQ = 0;
        if (this.view.lightsEnabled && !FQ) {
          const FQ = Math.min(wQ, 4);
          for (; LQ < this.view.lightCount && (QQ[`LIGHT${LQ}`] = !0, QQ[`LITE_LIGHT${LQ}_SLOT`] = LQ, LQ++, QQ._needNormals = !0, LQ !== FQ););
        }
        for (let qQ = LQ; qQ < 4; qQ++) QQ[`LIGHT${qQ}`] = !1, QQ[`LITE_LIGHT${qQ}_SLOT`] = void 0
      }
      prepareModelDefines(QQ, FQ, wQ, LQ, qQ, oQ) {
        const {
          features: DQ
        } = wQ;
        LQ._needNormals = !1, LQ._needUVs = !1;
        const kQ = this.view;
        this.prepareLightDefines(LQ, wQ.disableLighting, wQ.maxSimultaneousLights), LQ.MAINUV1 = !1, LQ.MAINUV2 = !1;
        const vQ = wQ.diffuseTexture;
        vQ ? (LQ._needUVs = !0, LQ.DIFFUSE = !0, vQ.optimizeUVAllocation && (0, OQ.B)(vQ.matrix) ? (LQ.DIFFUSEDIRECTUV = vQ.uvSet + 1, LQ[`MAINUV${vQ.uvSet+1}`] = !0) : LQ.DIFFUSEDIRECTUV = 0, vQ.uvSet > 1 && this.warnOnce(`uvset:${wQ.name}`, `${wQ.name} samples UV set ${vQ.uvSet+1}, which is not supported`)) : (LQ.DIFFUSE = !1, LQ.DIFFUSEDIRECTUV = 0);
        const mQ = wQ.opacityTexture,
          uQ = wQ.emissiveTexture;
        LQ.OPACITY = wo(mQ, "OPACITY", LQ), LQ.OPACITYRGB = null !== mQ && mQ.getAlphaFromRGB, LQ.EMISSIVE = wo(uQ, "EMISSIVE", LQ), (mQ && mQ.uvSet > 1 || uQ && uQ.uvSet > 1) && this.warnOnce(`uvset:${wQ.name}`, `${wQ.name} samples a UV set past 2, which is not supported`);
        const HQ = wQ.reflectionTexture,
          bQ = null !== HQ;
        if (bQ) {
          if (!this.resources.boundTexture(HQ)) return !1;
          LQ._needNormals = !0
        }
        LQ.REFLECTION = bQ, LQ.REFLECTIONMAP_3D = bQ, LQ.REFLECTIONMAP_SKYBOX = bQ, LQ.REFLECTIONMAP_OPPOSITEZ = bQ && (QQ.useRightHandedSystem ? !HQ.invertZ : HQ.invertZ), LQ.ROUGHNESS = bQ && wQ.roughness > 0, LQ.REFLECTIONOVERALPHA = bQ && wQ.useReflectionOverAlpha, LQ.LITE_REFLECTION_LUMINANCE = bQ && "cube" === HQ.source.kind && HQ.source.luminance, (FQ.skeleton || FQ.morphTargetManager) && this.warnOnce(`skin:${FQ.name}`, `${FQ.name} has bones or morph targets, which are not supported`), LQ.FOG = wQ.fogEnabled && FQ.applyFog && kQ.fogEnabled && 0 !== kQ.fogMode, LQ.NONUNIFORMSCALING = FQ.nonUniformScaling;
        const {
          visibility: YQ,
          hasVertexAlpha: xQ
        } = FQ;
        LQ.ALPHATEST = (0, WQ.ab)(wQ, YQ, xQ), LQ.ALPHAFROMDIFFUSE = (0, WQ.sb)(wQ), LQ.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== wQ.transparencyMode, LQ.ALPHABLEND = null === wQ.transparencyMode || (0, WQ.Y)(wQ, YQ, xQ), LQ.PREMULTIPLYALPHA = 7 === wQ.alphaMode || 8 === wQ.alphaMode, LQ.EMISSIVEASILLUMINATION = wQ.useEmissiveAsIllumination, LQ.LINKEMISSIVEWITHDIFFUSE = wQ.linkEmissiveWithDiffuse, LQ.TWOSIDEDLIGHTING = !wQ.backFaceCulling && wQ.twoSidedLighting, LQ.INSTANCES = "none" !== oQ, LQ.THIN_INSTANCES = "thin" === oQ, LQ.LITE_FRONT_LAYER = qQ >= 1;
        for (const {
            feature: SQ,
            state: iQ,
            active: WQ
          }
          of DQ) {
          var AQ, tQ;
          if (WQ) null === (AQ = (tQ = (0, uF.j)(SQ)).prepareDefinesBeforeAttributes) || void 0 === AQ || AQ.call(tQ, iQ, LQ, QQ, FQ)
        }
        this.modelPackKind(wQ) && (LQ._needNormals = !0), LQ.NORMAL = LQ._needNormals && FQ.isVerticesDataPresent("normal"), LQ.UV1 = LQ._needUVs && FQ.isVerticesDataPresent("uv"), LQ.UV2 = LQ._needUVs && FQ.isVerticesDataPresent("uv2");
        const eQ = FQ.useVertexColors && FQ.isVerticesDataPresent("color");
        LQ.VERTEXCOLOR = eQ, LQ.VERTEXALPHA = FQ.hasVertexAlpha && eQ, LQ.INSTANCESCOLOR = "none" !== oQ && FQ.isVerticesDataPresent("instanceColor");
        for (const {
            feature: SQ,
            state: iQ,
            active: WQ
          }
          of DQ) {
          var MQ, GQ;
          if (WQ) null === (MQ = (GQ = (0, uF.j)(SQ)).prepareDefines) || void 0 === MQ || MQ.call(GQ, iQ, LQ, QQ, FQ, wQ)
        }
        const pQ = QQ.Wx();
        for (const {
            feature: SQ,
            state: iQ,
            active: WQ
          }
          of DQ) {
          var cQ, CQ;
          if (WQ && !1 === (null === (cQ = (CQ = (0, uF.j)(SQ)).isReadyForSubMesh) || void 0 === cQ ? void 0 : cQ.call(CQ, iQ, LQ, QQ, pQ))) return !1
        }
        return !0
      }
    }

    function vo(QQ, FQ, wQ) {
      return QQ.codeVersion !== FQ.version && function(QQ, FQ) {
        const wQ = [],
          LQ = [];
        for (const {
            feature: bQ,
            state: YQ,
            active: xQ
          }
          of FQ.features) {
          var qQ, oQ, DQ, kQ;
          if (xQ) mo(null === (qQ = (oQ = (0, uF.j)(bQ)).getCustomCode) || void 0 === qQ ? void 0 : qQ.call(oQ, YQ, "vertex", CQ.d.WGSL), wQ), mo(null === (DQ = (kQ = (0, uF.j)(bQ)).getCustomCode) || void 0 === DQ ? void 0 : DQ.call(kQ, YQ, "fragment", CQ.d.WGSL), LQ)
        }
        const vQ = [];
        for (const {
            feature: bQ,
            state: YQ
          }
          of FQ.features) {
          var mQ, uQ;
          const QQ = null === (mQ = (uQ = (0, uF.j)(bQ)).getUniforms) || void 0 === mQ ? void 0 : mQ.call(uQ, YQ, CQ.d.WGSL);
          for (const FQ of null !== (HQ = null === QQ || void 0 === QQ ? void 0 : QQ.ubo) && void 0 !== HQ ? HQ : []) {
            var HQ;
            FQ.size && FQ.type && vQ.push({
              name: FQ.name,
              type: FQ.type,
              arraySize: FQ.arraySize
            })
          }
        }
        QQ.vertexCode = wQ, QQ.fragmentCode = LQ, QQ.pluginUniforms = vQ, QQ.codeKey = JSON.stringify([wQ, LQ, vQ]), QQ.codeVersion = FQ.version
      }(QQ, FQ), `${wQ}#${QQ.codeKey}`
    }

    function mo(QQ, FQ) {
      if (QQ)
        for (const wQ in QQ) QQ[wQ] && FQ.push([wQ, QQ[wQ]])
    }
    const uo = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Ho {
      constructor(QQ) {
        this.warnOnce = QQ, this.states = new Map
      }
      renderState(QQ, FQ, wQ, LQ) {
        var qQ;
        let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          DQ = null !== (qQ = QQ.sideOrientation) && void 0 !== qQ ? qQ : FQ.sideOrientation;
        FQ._getWorldMatrixDeterminant() < 0 && (DQ = 0 === DQ ? 1 : 0);
        const kQ = "triangle-list" === oQ,
          vQ = wQ ? QQ.alphaMode : 0,
          mQ = (!wQ || (0 === vQ || QQ.forceDepthWrite)) && !QQ.disableDepthWrite,
          uQ = kQ && QQ.backFaceCulling ? QQ.cullBackFaces ? "back" : "front" : "none",
          HQ = kQ && 0 !== DQ ? "ccw" : "cw",
          bQ = QQ.depthFunction,
          YQ = kQ ? QQ.zOffset : 0,
          xQ = kQ ? QQ.zOffsetUnits : 0,
          AQ = !QQ.disableColorWrite;
        return LQ && LQ.alphaMode === vQ && LQ.depthWrite === mQ && LQ.depthFunction === bQ && LQ.cullMode === uQ && LQ.frontFace === HQ && LQ.zOffset === YQ && LQ.zOffsetUnits === xQ && LQ.colourWrite === AQ && LQ.topology === oQ ? LQ : this.stateFor(vQ, mQ, bQ, uQ, HQ, YQ, xQ, AQ, oQ)
      }
      stateFor(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        const mQ = `${QQ}|${FQ}|${wQ}|${LQ}|${qQ}|${oQ}|${DQ}|${kQ}|${vQ}`;
        let uQ = this.states.get(mQ);
        if (!uQ) {
          var HQ;
          const bQ = QQ ? Jq(QQ) : null;
          QQ && !bQ && this.warnOnce(`alpha:${QQ}`, `alpha mode ${QQ} is not supported`), uQ = {
            key: mQ,
            alphaMode: QQ,
            depthFunction: wQ,
            zOffset: oQ,
            zOffsetUnits: DQ,
            topology: vQ,
            blend: bQ,
            depthWrite: FQ,
            depthCompare: wQ && null !== (HQ = uo.get(wQ)) && void 0 !== HQ ? HQ : null,
            cullMode: LQ,
            frontFace: qQ,
            depthBias: -DQ,
            depthBiasSlopeScale: -oQ,
            colourWrite: kQ
          }, this.states.set(mQ, uQ)
        }
        return uQ
      }
    }
    var bo = wQ(37030);

    function Yo(QQ) {
      if (!QQ.frozen) return -1;
      let FQ = QQ.version;
      for (const {
          feature: wQ,
          state: LQ,
          active: qQ
        }
        of QQ.features) {
        if (!qQ || !wQ.bind) continue;
        const QQ = (0, uF.j)(wQ).uniformsVersion;
        if (!QQ) return -1;
        FQ += QQ(LQ)
      }
      return FQ
    }
    class xo {
      constructor(QQ, FQ, wQ) {
        this.slots = QQ, this.data = FQ, this.textures = wQ, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(QQ, FQ) {
        this.write4(QQ, FQ, 0, 0, 0, 1)
      }
      updateFloat2(QQ, FQ, wQ) {
        this.write4(QQ, FQ, wQ, 0, 0, 2)
      }
      updateFloat3(QQ, FQ, wQ, LQ) {
        this.write4(QQ, FQ, wQ, LQ, 0, 3)
      }
      updateFloat4(QQ, FQ, wQ, LQ, qQ) {
        this.write4(QQ, FQ, wQ, LQ, qQ, 4)
      }
      updateVector3(QQ, FQ) {
        this.write4(QQ, FQ.x, FQ.y, FQ.z, 0, 3)
      }
      updateVector4(QQ, FQ) {
        this.write4(QQ, FQ.x, FQ.y, FQ.z, FQ.w, 4)
      }
      updateColor3(QQ, FQ) {
        this.write4(QQ, FQ.r, FQ.g, FQ.b, 0, 3)
      }
      updateColor4(QQ, FQ, wQ) {
        this.write4(QQ, FQ.r, FQ.g, FQ.b, wQ, 4)
      }
      updateFloatsFrom(QQ, FQ, wQ, LQ) {
        const qQ = this.slots.get(QQ);
        if (!qQ) return;
        const oQ = this.data,
          DQ = qQ.offset;
        for (let kQ = 0; kQ < LQ; kQ++) oQ[DQ + kQ] = FQ[wQ + kQ]
      }
      updateFloat3TimesFloats(QQ, FQ, wQ, LQ) {
        const qQ = this.slots.get(QQ);
        if (!qQ) return;
        const oQ = this.data,
          DQ = qQ.offset;
        oQ[DQ] = FQ[wQ] * LQ[0], oQ[DQ + 1] = FQ[wQ + 1] * LQ[1], oQ[DQ + 2] = FQ[wQ + 2] * LQ[2]
      }
      Y5(QQ, FQ) {
        const wQ = this.slots.get(QQ);
        wQ && this.data.set(FQ.m, wQ.offset)
      }
      updateMatrixFloats(QQ, FQ) {
        const wQ = this.slots.get(QQ);
        wQ && this.data.set(FQ, wQ.offset)
      }
      updateFloatArray(QQ, FQ) {
        const wQ = this.slots.get(QQ);
        if (!wQ) return;
        if (!wQ.arraySize || wQ.stride === wQ.floats) return void this.data.set(FQ, wQ.offset);
        const LQ = Math.min(FQ.length, wQ.floats * wQ.arraySize);
        for (let qQ = 0; qQ < LQ; qQ++) this.data[wQ.offset + Math.floor(qQ / wQ.floats) * wQ.stride + qQ % wQ.floats] = FQ[qQ]
      }
      updateArray(QQ, FQ) {
        this.updateFloatArray(QQ, FQ)
      }
      setTexture(QQ, FQ) {
        this.textures.set(QQ, FQ), this.expected.delete(QQ)
      }
      expectTexture(QQ) {
        this.textures.set(QQ, null), this.expected.add(QQ)
      }
      write4(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = this.slots.get(QQ);
        if (!DQ) return;
        const kQ = this.data,
          vQ = DQ.offset;
        kQ[vQ] = FQ, oQ > 1 && (kQ[vQ + 1] = wQ), oQ > 2 && (kQ[vQ + 2] = LQ), oQ > 3 && (kQ[vQ + 3] = qQ)
      }
    }

    function Ao(QQ, FQ) {
      const wQ = XL,
        LQ = bo.i,
        qQ = QQ.lights,
        oQ = Math.min(QQ.lightCount, 8);
      for (let DQ = 0; DQ < oQ; DQ++) {
        const QQ = wQ.lights + DQ * wQ.lightStride,
          oQ = DQ * bo.e;
        FQ[QQ] = qQ[oQ + LQ.vector], FQ[QQ + 1] = qQ[oQ + LQ.vector + 1], FQ[QQ + 2] = qQ[oQ + LQ.vector + 2], FQ[QQ + 3] = qQ[oQ + LQ.kind] === bo.f.directional ? 1 : 0, FQ[QQ + 4] = qQ[oQ + LQ.diffuse], FQ[QQ + 5] = qQ[oQ + LQ.diffuse + 1], FQ[QQ + 6] = qQ[oQ + LQ.diffuse + 2], FQ[QQ + 7] = qQ[oQ + LQ.range], FQ[QQ + 8] = qQ[oQ + LQ.specular], FQ[QQ + 9] = qQ[oQ + LQ.specular + 1], FQ[QQ + 10] = qQ[oQ + LQ.specular + 2], FQ[QQ + 11] = qQ[oQ + LQ.range]
      }
      FQ[wQ.fogInfos] = QQ.fogMode, FQ[wQ.fogInfos + 1] = QQ.fogStart, FQ[wQ.fogInfos + 2] = QQ.fogEnd, FQ[wQ.fogInfos + 3] = QQ.fogDensity, FQ[wQ.fogColour] = QQ.fogColour[0], FQ[wQ.fogColour + 1] = QQ.fogColour[1], FQ[wQ.fogColour + 2] = QQ.fogColour[2], FQ[wQ.outputHeight] = QQ.renderHeight, FQ[wQ.animTick] = QQ.animTick, FQ[wQ.timeMs] = QQ.timeMs
    }
    class to {
      constructor(QQ) {
        this.instancesOf = QQ
      }
      refreshModelUniforms(QQ, FQ, wQ, LQ) {
        const qQ = Yo(wQ);
        if (qQ >= 0 && qQ === FQ.heldVersion && FQ.textures.get("diffuseSampler") === wQ.diffuseTexture && FQ.textures.get("reflectionCubeSampler") === wQ.reflectionTexture && FQ.textures.get("opacitySampler") === wQ.opacityTexture && FQ.textures.get("emissiveSampler") === wQ.emissiveTexture) return !0;
        if (qQ < 0)
          for (const oQ of this.instancesOf(wQ)) oQ.heldVersion = -1;
        return this.writeModelUniforms(QQ, FQ, wQ, LQ), FQ.heldVersion = qQ, !1
      }
      writeModelUniforms(QQ, FQ, wQ, LQ) {
        const {
          ubo: qQ
        } = FQ, oQ = wQ.diffuseTexture, DQ = wQ.diffuseColor;
        qQ.updateFloat4("vDiffuseColor", DQ[0], DQ[1], DQ[2], wQ.alpha), oQ && (qQ.updateFloat2("vDiffuseInfos", oQ.uvSet, oQ.level), qQ.updateMatrixFloats("diffuseMatrix", oQ.matrix)), qQ.updateFloat("alphaCutOff", wQ.alphaCutOff), qQ.updateFloatsFrom("vEmissiveColor", wQ.emissiveColor, 0, 3), qQ.updateFloat3TimesFloats("vAmbientColor", LQ.ambientColour, 0, wQ.ambientColor);
        const kQ = wQ.specularColor;
        qQ.updateFloat4("vSpecularColor", kQ[0], kQ[1], kQ[2], wQ.specularPower), qQ.setTexture("diffuseSampler", oQ);
        const vQ = wQ.opacityTexture;
        vQ && (qQ.updateFloat2("vOpacityInfos", vQ.uvSet, vQ.level), qQ.updateMatrixFloats("opacityMatrix", vQ.matrix)), qQ.setTexture("opacitySampler", vQ);
        const mQ = wQ.emissiveTexture;
        mQ && (qQ.updateFloat2("vEmissiveInfos", mQ.uvSet, mQ.level), qQ.updateMatrixFloats("emissiveMatrix", mQ.matrix)), qQ.setTexture("emissiveSampler", mQ);
        const uQ = wQ.reflectionTexture;
        uQ && qQ.updateMatrixFloats("reflectionMatrix", uQ.matrix), qQ.updateFloat2("vReflectionInfos", uQ ? uQ.level * QQ.iblIntensity : 0, wQ.roughness), qQ.setTexture("reflectionCubeSampler", uQ);
        const HQ = QQ.Wx();
        for (const {
            feature: xQ,
            state: AQ,
            active: tQ
          }
          of wQ.features) {
          var bQ, YQ;
          if (tQ) null === (bQ = (YQ = (0, uF.j)(xQ)).bind) || void 0 === bQ || bQ.call(YQ, AQ, qQ, QQ, HQ)
        }
      }
    }

    function eo(QQ) {
      const FQ = QQ.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(FQ) ? "u32" : /i32|^vec\di$/.test(FQ) ? "i32" : "f32"
    }

    function Mo(QQ, FQ) {
      const wQ = QQ.getSize(),
        LQ = eo(FQ),
        qQ = QQ => 4 === wQ ? `${QQ}x4` : 2 === wQ ? `${QQ}x2` : null;
      if ("f32" === LQ) {
        if (5126 === QQ.type) return 1 === wQ ? "float32" : wQ >= 2 && wQ <= 4 ? `float32x${wQ}` : null;
        if (!QQ.normalized) return null;
        switch (QQ.type) {
          case 5121:
            return qQ("unorm8");
          case 5120:
            return qQ("snorm8");
          case 5123:
            return qQ("unorm16");
          case 5122:
            return qQ("snorm16")
        }
        return null
      }
      const oQ = "u32" === LQ ? "uint" : "sint";
      switch (QQ.type) {
        case 5125:
        case 5124:
          return 1 === wQ ? `${oQ}32` : wQ <= 4 ? `${oQ}32x${wQ}` : null;
        case 5121:
        case 5120:
          return qQ(`${oQ}8`);
        case 5123:
        case 5122:
          return qQ(`${oQ}16`)
      }
      return null
    }

    function Go(QQ) {
      var FQ;
      const wQ = /(8|16|32)(?:x(\d))?$/.exec(QQ);
      return wQ ? Number(wQ[1]) / 8 * Number(null !== (FQ = wQ[2]) && void 0 !== FQ ? FQ : 1) : 4
    }
    class po {
      constructor(QQ, FQ, wQ) {
        this.resources = QQ, this.limits = FQ, this.warnOnce = wQ, this.layouts = new Map
      }
      resolveInputs(QQ, FQ, wQ, LQ) {
        const qQ = [],
          oQ = wQ.program.attributes,
          DQ = [];
        for (let uQ = 0; uQ < oQ.length; uQ++) {
          const wQ = oQ[uQ],
            kQ = wQ.optional ? null : this.resources.vertexInput(QQ, wQ.name, LQ);
          if (!kQ) {
            const QQ = eo(wQ.type),
              FQ = "u32" === QQ ? "uint32x4" : "i32" === QQ ? "sint32x4" : "float32x4";
            DQ.push(null);
            const LQ = qQ.find((QQ => null === QQ.data));
            LQ ? LQ.attributes.push({
              shaderLocation: uQ,
              offset: 0,
              format: FQ
            }) : qQ.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: uQ,
                offset: 0,
                format: FQ
              }]
            });
            continue
          }
          const vQ = kQ.getBuffer();
          DQ.push(kQ);
          const mQ = Mo(kQ, wQ.type);
          if (!mQ) return this.warnOnce(`format:${FQ}:${wQ.name}`, `${FQ}'s ${wQ.name} (type ${kQ.type}, size ${kQ.getSize()}) has no WebGPU vertex format`), null;
          const HQ = kQ.getIsInstanced() ? "instance" : "vertex",
            bQ = kQ.byteStride,
            YQ = Go(mQ),
            xQ = qQ.find((QQ => QQ.data === vQ && QQ.stride === bQ && QQ.step === HQ && kQ.byteOffset >= QQ.base && kQ.byteOffset - QQ.base + YQ <= bQ));
          xQ ? xQ.attributes.push({
            shaderLocation: uQ,
            offset: kQ.byteOffset - xQ.base,
            format: mQ
          }) : qQ.push({
            data: vQ,
            base: kQ.byteOffset,
            stride: bQ,
            step: HQ,
            attributes: [{
              shaderLocation: uQ,
              offset: 0,
              format: mQ
            }]
          })
        }
        if (qQ.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${FQ}`, `${FQ} needs ${qQ.length} vertex buffers`), null;
        let kQ = "";
        for (const uQ of qQ) {
          kQ += `${uQ.stride}${"instance"===uQ.step?"i":"v"}`;
          for (const QQ of uQ.attributes) kQ += `,${QQ.shaderLocation}:${QQ.offset}:${QQ.format}`;
          kQ += ";"
        }
        let vQ = this.layouts.get(kQ);
        vQ || (vQ = {
          key: kQ,
          buffers: qQ.map((QQ => ({
            arrayStride: QQ.stride,
            stepMode: QQ.step,
            attributes: QQ.attributes
          }))),
          instanceEnds: qQ.map((QQ => {
            let FQ = -1;
            if ("instance" === QQ.step)
              for (const wQ of QQ.attributes) FQ = Math.max(FQ, wQ.offset + Go(wQ.format));
            return FQ
          }))
        }, this.layouts.set(kQ, vQ));
        const mQ = qQ.map((QQ => QQ.base));
        return {
          program: wQ,
          sources: DQ,
          layout: vQ,
          slotData: qQ.map((QQ => QQ.data)),
          N7: mQ,
          buffers: [],
          offsets: mQ,
          ends: [],
          state: null,
          pipelineKey: "",
          pipeline: null,
          pipelineTarget: "",
          geometry: null,
          instanceLayout: null,
          draw: null,
          retained: null,
          gpuVersion: -1,
          fitInstances: 0
        }
      }
    }

    function co(QQ, FQ, wQ, LQ) {
      const qQ = FQ.program.program.attributes;
      for (let oQ = 0; oQ < qQ.length; oQ++) {
        if ((qQ[oQ].optional ? null : wQ.vertexInput(QQ, qQ[oQ].name, LQ)) !== FQ.sources[oQ]) return !1
      }
      return !0
    }
    const Co = 64;
    class So {
      constructor(QQ, FQ, wQ, LQ) {
        this.device = QQ, this.layout = FQ, this.frameBuffer = wQ, this.label = LQ, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(QQ) {
        if (QQ * Co <= this.data.length) return !1;
        let FQ = 2 * this.data.length;
        for (; QQ * Co > FQ;) FQ *= 2;
        const wQ = new Float32Array(FQ);
        return wQ.set(this.data), this.data = wQ, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = this.data,
          oQ = QQ * Co;
        let DQ = qQ[oQ + 16] !== wQ;
        for (let kQ = 0; kQ < 16 && !DQ; kQ++) DQ = qQ[oQ + kQ] !== FQ[LQ + kQ];
        if (DQ) {
          for (let QQ = 0; QQ < 16; QQ++) qQ[oQ + QQ] = FQ[LQ + QQ];
          qQ[oQ + 16] = wQ
        }
        return DQ
      }
      upload(QQ, FQ) {
        this.device.queue.writeBuffer(this.buffer, QQ * fL, this.data, QQ * Co, (FQ - QQ) * Co)
      }
      createBuffer() {
        return this.device.createBuffer({
          label: this.label,
          size: this.data.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      createBindGroup() {
        return this.device.createBindGroup({
          label: this.label,
          layout: this.layout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.frameBuffer
            }
          }, {
            binding: 1,
            resource: {
              buffer: this.buffer,
              size: 80
            }
          }]
        })
      }
    }

    function io(QQ) {
      return QQ.gpu[OQ.e.lite] ??= QQ.materials.map(((FQ, wQ) => ({
        parts: QQ,
        range: wQ,
        owner: QQ.owner
      })))
    }

    function Wo(QQ) {
      var FQ, wQ, LQ;
      return null !== (FQ = null !== (wQ = null === (LQ = QQ.parts.materials[QQ.range]) || void 0 === LQ ? void 0 : LQ.mirror) && void 0 !== wQ ? wQ : QQ.owner.material) && void 0 !== FQ ? FQ : null
    }
    const Ro = ["opaque", "alphaTest", "transparent", "text"];
    class Oo {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, mF.b)("Lite: ")
      }
      attach(QQ, FQ) {
        this.model = QQ, this.mirror = FQ
      }
      get worlds() {
        return this.model.nodes.nH
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(QQ) {
        return this.groups.get(QQ)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(QQ) {
        for (const [FQ, wQ] of this.groups)
          for (const LQ of Ro)
            for (const qQ of wQ[LQ].units) QQ(qQ.owner, "text" === LQ ? "transparent" : LQ, FQ)
      }
      select(QQ, FQ) {
        this.frame++, this.selectedCount = 0;
        for (const kQ of this.groups.values())
          for (const QQ of Ro) kQ[QQ].units.length = 0, kQ[QQ].rows.length = 0;
        const {
          model: wQ,
          mirror: LQ
        } = this;
        if (!wQ || !LQ || !QQ) return;
        this.rows.length < wQ.nodes.MH && (this.rows = new Int32Array(wQ.nodes.MH));
        const qQ = this.rows,
          oQ = wQ.meshes;
        for (let kQ = 0; kQ < oQ.looseCount; kQ++) {
          const QQ = oQ.loose[kQ],
            wQ = LQ.nodes[QQ];
          wQ && !wQ.isBlocked && wQ.isEnabled() && !wQ.ck.hasAZeroComponent && oQ.selects(QQ, FQ.frustum) && (this.activate(wQ, QQ), this.selectedCount++)
        }
        const DQ = oQ.selectTextPlanes(FQ.frustum, qQ);
        for (let kQ = 0; kQ < DQ; kQ++) {
          const FQ = qQ[kQ],
            oQ = LQ.nodes[FQ],
            DQ = wQ.meshes.parts[FQ];
          if (!oQ.isVisible || !(oQ.visibility > 0) || 0 === (oQ.layerMask & QQ.layerMask) || !DQ) continue;
          const vQ = this.groupOf(wQ.meshes.layer[FQ]).text;
          for (const QQ of io(DQ)) vQ.units.push(QQ), vQ.rows.push(FQ);
          this.selectedCount++
        }
      }
      instanceBatch(QQ) {
        const FQ = this.batchOf(QQ);
        return FQ.dispatched || (FQ.dispatched = FQ.renderSelf = !0, FQ.row = this.rowOf(QQ)), FQ
      }
      rowOf(QQ) {
        return QQ.row
      }
      activate(QQ, FQ) {
        if (!QQ.lN) {
          const wQ = QQ;
          if (wQ.pqQ) {
            const QQ = this.batchOf(wQ);
            QQ.dispatched = !0, QQ.renderSelf = !0, QQ.row = FQ
          }
          return void this.dispatch(wQ, FQ, FQ)
        }
        const wQ = QQ,
          LQ = wQ.cqQ;
        if (LQ._getWorldMatrixDeterminant() >= 0 !== wQ._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${LQ.name}`, `A mirrored InstancedMesh of ${LQ.name} is not drawn yet`);
        const qQ = this.batchOf(LQ);
        qQ.instances.push(wQ), qQ.rows.push(FQ), qQ.dispatched || (qQ.dispatched = !0, this.dispatch(LQ, FQ, this.rowOf(LQ)))
      }
      batchOf(QQ) {
        let FQ = this.batches.get(QQ);
        return FQ || (FQ = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(QQ, FQ)), FQ.frame !== this.frame && (FQ.frame = this.frame, FQ.dispatched = !1, FQ.renderSelf = !1, FQ.instances.length = 0, FQ.rows.length = 0), FQ
      }
      dispatch(QQ, FQ, wQ) {
        const {
          layer: LQ,
          parts: qQ
        } = this.model.meshes;
        if (!qQ[FQ]) return;
        const oQ = this.groupOf(LQ[FQ]),
          DQ = QQ;
        for (const kQ of io(qQ[FQ])) {
          const QQ = Wo(kQ);
          if (!QQ) continue;
          const FQ = QQ.needAlphaBlendingForMesh(DQ) ? oQ.transparent : QQ.needAlphaTestingForMesh(DQ) ? oQ.alphaTest : oQ.opaque;
          FQ.units.push(kQ), FQ.rows.push(wQ)
        }
      }
      groupOf(QQ) {
        let FQ = this.groups.get(QQ);
        return FQ || (FQ = {
          opaque: {
            units: [],
            rows: []
          },
          alphaTest: {
            units: [],
            rows: []
          },
          transparent: {
            units: [],
            rows: []
          },
          text: {
            units: [],
            rows: []
          }
        }, this.groups.set(QQ, FQ)), FQ
      }
    }
    class so {
      constructor() {
        this.ym = new Map, this.enabled = [], this.groups = new Map, this.iY = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(QQ) {
        if (this.ym.has(QQ)) return;
        const FQ = {
          mesh: QQ,
          observer: QQ.onEffectiveEnabledStateChangedObservable.add((QQ => {
            this.Qr(FQ, QQ)
          })),
          index: -1,
          steady: null
        };
        this.ym.set(QQ, FQ), this.Qr(FQ, QQ.isEnabled())
      }
      remove(QQ) {
        const FQ = this.ym.get(QQ);
        FQ && (FQ.observer.remove(!0), this.Qr(FQ, !1), this.ym.delete(QQ))
      }
      base(QQ) {
        return this.ym.get(QQ)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          ym: this.ym.size
        }
      }
      forEachSelected(QQ) {
        for (const [FQ, wQ] of this.groups) {
          for (const LQ of wQ.opaque) QQ(LQ.owner, "opaque", FQ);
          for (const LQ of wQ.transparent) QQ(LQ.owner, "transparent", FQ)
        }
        for (const FQ of this.iY) QQ(FQ.mesh, "opaque", 0)
      }
      group(QQ) {
        return this.groups.get(QQ)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(QQ, FQ) {
        this.drawn = 0, this.selected = 0, this.iY.length = 0;
        for (const LQ of this.groups.values()) LQ.opaque.length = 0, LQ.transparent.length = 0;
        if (!QQ) return;
        const wQ = this.enabled;
        for (let LQ = 0; LQ < wQ.length; LQ++) {
          const qQ = wQ[LQ];
          if (qQ.steady && FQ(qQ, QQ)) {
            this.selected++, this.iY.push(qQ);
            continue
          }
          const oQ = qQ.mesh;
          if (oQ.isBlocked || oQ.ck.hasAZeroComponent) continue;
          if (!oQ.isVisible || oQ.visibility <= 0 || 0 === (oQ.layerMask & QQ.layerMask)) continue;
          if (oQ.pqQ) {
            this.warned.has(oQ.name) || (this.warned.add(oQ.name), console.warn(`Lite: thin instance base ${oQ.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: DQ
          } = oQ;
          if (!DQ) continue;
          oQ.computeWorldMatrix(), this.selected++;
          const kQ = this.listsFor(oQ.renderingGroupId);
          for (const QQ of io(DQ)) {
            const FQ = Wo(QQ);
            FQ && (FQ.needAlphaBlendingForMesh(oQ) ? kQ.transparent.push(QQ) : kQ.opaque.push(QQ))
          }
        }
      }
      Qr(QQ, FQ) {
        if (FQ === QQ.index >= 0) return;
        QQ.steady = null;
        const wQ = this.enabled;
        if (FQ) QQ.index = wQ.length, wQ.push(QQ);
        else {
          const FQ = wQ.pop();
          FQ !== QQ && (wQ[QQ.index] = FQ, FQ.index = QQ.index), QQ.index = -1
        }
      }
      listsFor(QQ) {
        let FQ = this.groups.get(QQ);
        return FQ || (FQ = {
          opaque: [],
          transparent: []
        }, this.groups.set(QQ, FQ)), FQ
      }
    }
    var ro = wQ(39099);
    class Io {
      constructor() {
        this.bundle = null, this.stale = !0, this.ym = new Set
      }
    }
    class Uo {
      constructor(QQ, FQ, wQ) {
        this.device = QQ, this.slots = FQ, this.host = wQ, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Io, this.IU = new Io, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Pq, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(QQ) {
          var FQ, wQ;
          let LQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (FQ = null === (wQ = globalThis.navigator) || void 0 === wQ ? void 0 : wQ.userAgent) && void 0 !== FQ ? FQ : "";
          const qQ = QQ.adapterInfo;
          return "intel" === (null === qQ || void 0 === qQ ? void 0 : qQ.vendor) && "gen-12lp" === qQ.architecture && LQ.includes("Windows")
        }(QQ), (0, ro.F)(this.direct)
      }
      eC() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, ro.F)(this.directThisFrame)
      }
      add(QQ, FQ, wQ, LQ) {
        let qQ = this.records.get(QQ);
        return qQ || (qQ = this.createRecord(QQ), this.records.set(QQ, qQ)), qQ.recorded && To(qQ, FQ) || (this.bundleOf(qQ).stale = !0), this.place(qQ, FQ, wQ, LQ), qQ
      }
      bundleOf(QQ) {
        return QQ.IU ? this.IU : this.main
      }
      addAgain(QQ, FQ, wQ, LQ) {
        QQ.recorded || (this.bundleOf(QQ).stale = !0), this.place(QQ, FQ, wQ, LQ)
      }
      place(QQ, FQ, wQ, LQ) {
        QQ.seen = this.frame, QQ.IU && null === QQ.draw && (this.IU.stale = !0), QQ.draw = FQ, this.drawn++, wQ && this.slots.write(QQ.slot, wQ, LQ) && (this.slotsFrom = Math.min(this.slotsFrom, QQ.slot), this.slotsTo = Math.max(this.slotsTo, QQ.slot));
        const qQ = this.args,
          oQ = 5 * QQ.slot;
        qQ[oQ] === FQ.count && qQ[oQ + 1] === FQ.instances && qQ[oQ + 2] === FQ.first || (qQ[oQ] = FQ.count, qQ[oQ + 1] = FQ.instances, qQ[oQ + 2] = FQ.first, this.argsDirty = !0, this.IU.stale ||= QQ.IU)
      }
      pC() {
        for (const QQ of this.records.values()) QQ.seen !== this.frame && (QQ.draw && (QQ.draw = null, this.args[5 * QQ.slot + 1] = 0, this.argsDirty = !0, this.IU.stale ||= QQ.IU), this.frame - QQ.seen > 120 && (this.records.delete(QQ.unit), this.freeSlots.push(QQ.slot), QQ.recorded && (this.bundleOf(QQ).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(QQ) {
        for (const FQ of this.records.values()) FQ.draw && FQ.seen === this.frame && !FQ.IU && QQ(FQ.draw, this.slots.data, FQ.slot * fL / 4)
      }
      resourceDestroyed(QQ) {
        this.main.stale ||= this.main.ym.has(QQ), this.IU.stale ||= this.IU.ym.has(QQ)
      }
      execute(QQ, FQ, wQ) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(QQ, FQ, wQ, "direct"), this.drawn;
        const LQ = this.host.sceneGroup(FQ);
        if (!LQ) return this.main.bundle = null, this.IU.bundle = null, this.recordedSceneGroup = null, this.encode(QQ, FQ, wQ, "direct"), this.drawn;
        this.recordedTarget === wQ && this.recordedSceneGroup === LQ || (this.recordedTarget = wQ, this.recordedSceneGroup = LQ, this.main.stale = !0, this.IU.stale = !0);
        const qQ = this.main,
          oQ = this.IU;
        let DQ = !1;
        !qQ.stale && qQ.bundle || (qQ.bundle = this.record(FQ, wQ, LQ, "indirect"), DQ = !0);
        const kQ = (0, ro.h)();
        return (oQ.stale || this.rangedEpoch !== kQ) && (this.rangedEpoch = kQ, oQ.bundle = this.drawsRanged() ? this.record(FQ, wQ, LQ, "IU") : this.noRangedBundle(), DQ = !0), DQ && (this.bundles = oQ.bundle ? [qQ.bundle, oQ.bundle] : [qQ.bundle]), QQ.executeBundles(this.bundles), QQ.setBindGroup(0, LQ), this.drawn
      }
      record(QQ, FQ, wQ, LQ) {
        const qQ = this.device.createRenderBundleEncoder({
          label: "IU" === LQ ? "thin-bases-ranged" : "thin-bases",
          colorFormats: QQ._colorFormat ? [QQ._colorFormat] : [],
          depthStencilFormat: QQ._depthStencilFormat,
          sampleCount: QQ._sampleCount
        });
        return qQ.setBindGroup(0, wQ), this.encode(qQ, QQ, FQ, LQ), qQ.finish()
      }
      noRangedBundle() {
        for (const QQ of this.records.values()) QQ.IU && (QQ.recorded = !1);
        return this.IU.ym.clear(), this.IU.stale = !1, null
      }
      drawsRanged() {
        for (const QQ of this.records.values())
          if (QQ.IU && QQ.draw) return !0;
        return !1
      }
      encode(QQ, FQ, wQ, LQ) {
        const qQ = [];
        for (const vQ of this.records.values()) "direct" !== LQ && vQ.IU !== ("IU" === LQ) || (vQ.recorded = !1, vQ.draw && qQ.push(vQ));
        qQ.sort(Ko);
        const oQ = "direct" === LQ ? null : "IU" === LQ ? this.IU : this.main;
        null === oQ || void 0 === oQ || oQ.ym.clear(), this.binder.reset();
        let DQ = !1;
        for (const vQ of qQ) {
          var kQ;
          const qQ = vQ.draw,
            mQ = this.host.pipelineFor(qQ, FQ, wQ);
          if (!mQ) {
            this.host.pipelineCompiling(qQ, wQ) ? DQ = !0 : oQ && this.keep(vQ, qQ, oQ.ym);
            continue
          }
          let uQ;
          if (vQ.IU && "indirect" !== LQ) {
            const QQ = vQ.unit.owner;
            uQ = "direct" === LQ && (0, ro.t)(QQ) || (0, ro.l)(QQ) || void 0
          }
          if (oQ && this.keep(vQ, qQ, oQ.ym), 0 === (null === (kQ = uQ) || void 0 === kQ ? void 0 : kQ.count)) continue;
          this.binder.bind(QQ, qQ, mQ, this.slots.bindGroup, vQ.slot * fL);
          const HQ = 5 * vQ.slot;
          if ("indirect" === LQ) {
            qQ.indexBuffer ? QQ.drawIndexedIndirect(this.argsBuffer, 4 * HQ) : QQ.drawIndirect(this.argsBuffer, 4 * HQ);
            continue
          }
          const bQ = this.args;
          uQ ? No(QQ, null !== qQ.indexBuffer, bQ, HQ, uQ) : qQ.indexBuffer ? QQ.drawIndexed(bQ[HQ], bQ[HQ + 1], bQ[HQ + 2], 0, 0) : QQ.draw(bQ[HQ], bQ[HQ + 1], bQ[HQ + 2], 0)
        }
        oQ && (oQ.stale = DQ)
      }
      keep(QQ, FQ, wQ) {
        QQ.recorded = !0, QQ.pipelineKey = FQ.pipelineKey, QQ.materialGroup = FQ.material.bindGroup, QQ.vertexBuffers.length = 0, QQ.vertexBuffers.push(...FQ.vertexBuffers), QQ.vertexOffsets = FQ.vertexOffsets, QQ.indexBuffer = FQ.indexBuffer, QQ.indexFormat = FQ.indexFormat;
        for (const LQ of FQ.vertexBuffers) wQ.add(LQ);
        FQ.indexBuffer && wQ.add(FQ.indexBuffer), wQ.add(FQ.material.buffer);
        for (const LQ of FQ.material.bound) LQ && wQ.add(LQ)
      }
      createRecord(QQ) {
        let FQ = this.freeSlots.pop();
        return void 0 === FQ && (FQ = this.slotCount++, this.grow()), {
          unit: QQ,
          slot: FQ,
          IU: void 0 !== (0, ro.l)(QQ.owner),
          seen: -1,
          draw: null,
          recorded: !1,
          pipelineKey: "",
          materialGroup: null,
          vertexBuffers: [],
          vertexOffsets: [],
          indexBuffer: null,
          indexFormat: "uint16"
        }
      }
      grow() {
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.IU.stale = !0), 5 * this.slotCount > this.args.length) {
          const QQ = new Uint32Array(2 * this.args.length);
          QQ.set(this.args), this.args = QQ, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
        }
      }
      createArgsBuffer() {
        return this.device.createBuffer({
          label: "thin-bases-args",
          size: this.args.byteLength,
          usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.COPY_DST
        })
      }
    }

    function No(QQ, FQ, wQ, LQ, qQ) {
      const oQ = wQ[LQ + 1],
        DQ = qQ.data;
      for (let kQ = 0; kQ < qQ.count; kQ++) {
        const qQ = Math.min(DQ[2 * kQ], oQ),
          vQ = Math.min(DQ[2 * kQ + 1], oQ - qQ);
        0 !== vQ && (FQ ? QQ.drawIndexed(wQ[LQ], vQ, wQ[LQ + 2], 0, qQ) : QQ.draw(wQ[LQ], vQ, wQ[LQ + 2], qQ))
      }
    }

    function To(QQ, FQ) {
      if (QQ.pipelineKey !== FQ.pipelineKey || QQ.materialGroup !== FQ.material.bindGroup || QQ.indexBuffer !== FQ.indexBuffer || QQ.indexFormat !== FQ.indexFormat || QQ.vertexOffsets !== FQ.vertexOffsets || QQ.vertexBuffers.length !== FQ.vertexBuffers.length) return !1;
      for (let wQ = 0; wQ < QQ.vertexBuffers.length; wQ++)
        if (QQ.vertexBuffers[wQ] !== FQ.vertexBuffers[wQ]) return !1;
      return !0
    }

    function Ko(QQ, FQ) {
      return yq(QQ.draw, FQ.draw)
    }
    const zo = new WeakMap,
      jo = {
        depth: !1,
        sunShadow: !1
      };

    function ao(QQ, FQ) {
      let wQ = zo.get(QQ);
      wQ || (wQ = new Map, zo.set(QQ, wQ));
      const LQ = `${FQ.depth?"-depth":""}${FQ.sunShadow?"-shadow":""}${FQ.shadowMask?"-mask":""}`;
      let qQ = wQ.get(LQ);
      if (!qQ) {
        const oQ = [{
          binding: RF.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: RF.i
          }
        }, {
          binding: RF.A,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        FQ.depth && oQ.push({
          binding: RF.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), FQ.sunShadow && oQ.push(... function() {
          const QQ = GPUShaderStage.FRAGMENT,
            FQ = RF.u;
          return [{
            binding: FQ.uniform,
            visibility: QQ,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: FQ.Sb,
            visibility: QQ,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: FQ.special,
            visibility: QQ,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: FQ.volume,
            visibility: QQ,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: FQ.sampler,
            visibility: QQ,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: FQ.entities,
            visibility: QQ,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: FQ.entityGrids,
            visibility: QQ,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), FQ.shadowMask && oQ.push({
          binding: RF.x,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), qQ = QQ.createBindGroupLayout({
          label: `${FQ.depth?"terrain-":""}shader-pack-inputs${LQ}`,
          entries: oQ
        }), wQ.set(LQ, qQ)
      }
      return qQ
    }

    function Xo(QQ) {
      return ao(QQ, jo)
    }

    function fo(QQ, FQ) {
      if (!FQ) return !1;
      const wQ = (0, OF.f)(QQ);
      return !!wQ && lw(wQ, FQ)
    }

    function Vo(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!uL(FQ)) return [];
      return [ao(QQ, {
        depth: oL(FQ.packVariant),
        sunShadow: fo(FQ.packVariant, wQ),
        shadowMask: LQ
      })]
    }
    class ho {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = QQ, this.sunShadow = wQ, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(RF.i), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = QQ.createBuffer({
          label: "shader-pack-inputs",
          size: RF.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const LQ = (0, RF.D)(FQ);
        this.textures = QQ.createBuffer({
          label: "shader-pack-textures",
          size: LQ.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), QQ.queue.writeBuffer(this.textures, 0, LQ), this.bindGroup = QQ.createBindGroup({
          label: "shader-pack-inputs",
          layout: Xo(QQ),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: RF.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: RF.A,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(QQ, FQ, wQ) {
        (0, RF.J)(this.data, {
          seconds: QQ.seconds(),
          lit: wQ,
          renderOffset: QQ.renderOffset(),
          MQQ: QQ.MQQ(),
          eyePosition: FQ,
          shadowDirection: QQ.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const LQ = FQ ? this.sunShadow : null;
        if ((FQ || wQ) && !LQ) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!QQ && !LQ) return this.bindGroup;
        (QQ && QQ !== this.depthView || wQ && wQ !== this.maskView) && (this.depthView = null !== QQ && void 0 !== QQ ? QQ : this.depthView, this.maskView = null !== wQ && void 0 !== wQ ? wQ : this.maskView, this.groups.clear());
        const qQ = (QQ ? 1 : 0) | (LQ ? 2 : 0) | (wQ ? 4 : 0);
        let oQ = this.groups.get(qQ);
        if (!oQ) {
          const FQ = this.entries();
          QQ && FQ.push({
            binding: RF.q,
            resource: QQ
          }), LQ && FQ.push(...LQ.entries()), wQ && FQ.push({
            binding: RF.x,
            resource: wQ
          }), oQ = this.device.createBindGroup({
            label: `${QQ||wQ?"terrain-":""}shader-pack-inputs${QQ?"-depth":""}${LQ?"-shadow":""}${wQ?"-mask":""}`,
            layout: ao(this.device, {
              depth: !!QQ,
              sunShadow: !!LQ,
              shadowMask: !!wQ
            }),
            entries: FQ
          }), this.groups.set(qQ, oQ)
        }
        return oQ
      }
      bind(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        QQ.setBindGroup(RF.h, this.bindGroupFor(FQ, wQ, LQ))
      }
    }

    function Jo(QQ, FQ, wQ) {
      if (QQ.gpuVersion === FQ.gpuBuffersVersion) return !0;
      let LQ;
      do {
        if (LQ = FQ.gpuBuffersVersion, !Eo(QQ, FQ, wQ)) return !1
      } while (FQ.gpuBuffersVersion !== LQ);
      return QQ.gpuVersion = LQ, QQ.fitInstances = 0, !0
    }

    function Eo(QQ, FQ, wQ) {
      let LQ = null;
      for (let oQ = 0; oQ < QQ.slotData.length; oQ++) {
        var qQ;
        const DQ = QQ.slotData[oQ],
          kQ = DQ ? FQ.gpuBuffer(DQ) : wQ;
        if (!kQ) return !1;
        DQ && QQ.layout.instanceEnds[oQ] < 0 && FQ.cover(DQ, Number.POSITIVE_INFINITY), QQ.buffers[oQ] = kQ;
        const vQ = QQ.N7[oQ] + (DQ ? FQ.gpuOffset(DQ) : 0);
        vQ !== (null !== (qQ = LQ) && void 0 !== qQ ? qQ : QQ.offsets)[oQ] && (LQ ??= QQ.offsets.slice(), LQ[oQ] = vQ), QQ.ends[oQ] = DQ ? FQ.gpuEnd(DQ) : kQ.size
      }
      return LQ && (QQ.offsets = LQ), !0
    }

    function no(QQ, FQ, wQ, LQ) {
      if (FQ <= QQ.fitInstances) return null;
      const {
        layout: qQ,
        ends: oQ,
        offsets: DQ,
        slotData: kQ,
        N7: vQ
      } = QQ;
      let mQ = !1;
      for (let uQ = 0; uQ < qQ.buffers.length; uQ++) {
        const QQ = qQ.instanceEnds[uQ];
        if (QQ < 0) continue;
        const LQ = (FQ - 1) * qQ.buffers[uQ].arrayStride + QQ;
        if (oQ[uQ] - DQ[uQ] < LQ) return {
          index: uQ,
          needed: LQ
        };
        const HQ = kQ[uQ];
        HQ && wQ.cover(HQ, vQ[uQ] + LQ) && (mQ = !0)
      }
      return mQ && Jo(QQ, wQ, LQ), QQ.fitInstances = FQ, null
    }
    var go = wQ(37368),
      Po = wQ(37401);
    const Zo = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      yo = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Bo = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      QD = `((vertexInputs.aPackedLightLevels >> 16u) | ${vF.c.placed}u)`,
      FD = "u32(vertexInputs.aShaderPackItem.x)",
      wD = `${vF.c.lifeform}u`;

    function LD(QQ) {
      return "item" === QQ.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const qD = "bloxdSpEnchant",
      oD = "floor(finalWorld[3].xyz)";

    function DD(QQ, FQ, wQ) {
      return "placed" === FQ.kind && QQ.reads[wQ].includes("bloxdFragmentBlockPosition")
    }

    function kD(QQ, FQ) {
      let [wQ, LQ] = QQ;
      return wQ === FQ.point && LQ === FQ.code
    }

    function vD(QQ, FQ) {
      var wQ, LQ, qQ;
      const oQ = null === (wQ = QQ.find((QQ => QQ.texture))) || void 0 === wQ ? void 0 : wQ.texture,
        DQ = null === (LQ = QQ.find((QQ => QQ.enchantTier))) || void 0 === LQ ? void 0 : LQ.enchantTier,
        kQ = null === (qQ = QQ.find((QQ => QQ.overlay))) || void 0 === qQ ? void 0 : qQ.overlay,
        vQ = kQ ? FQ.filter((QQ => kD(QQ, kQ))).length : 0;
      return kQ && 1 === vQ ? {
        texture: oQ,
        overlay: kQ,
        enchantTier: DQ
      } : {
        texture: oQ,
        enchantTier: DQ
      }
    }

    function mD(QQ) {
      if ("item" === QQ.kind) {
        return {
          vertexFlags: `(${FD} & 0xffffu)`,
          varying: "vPackItem",
          value: FD,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return QQ.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: QD,
        varying: "vPackFlags",
        value: QD,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function uD(QQ) {
      return "lifeform" === QQ.kind ? wD : "0u"
    }

    function HD(QQ) {
      return !!QQ.BLOXD_PLUGIN_ENCHANTMENT
    }

    function bD(QQ, FQ) {
      const {
        enchantTier: wQ
      } = FQ;
      return wQ && HD(FQ.defines) && "lifeform" === FQ.kind && MD(QQ, "enchantTier") ? wQ : null
    }

    function YD(QQ, FQ) {
      return HD(FQ.defines) && MD(QQ, "enchantSpeed")
    }

    function xD(QQ) {
      const {
        overlay: FQ,
        defines: wQ
      } = QQ;
      if (!FQ || !wQ.DIFFUSE) return null;
      const LQ = wQ.VERTEXCOLOR || wQ.INSTANCESCOLOR && wQ.INSTANCES;
      return `vec4f(${FQ.colour}.rgb * uniforms.vDiffuseInfos.y${LQ?" * fragmentInputs.vColor.rgb":""}, ${FQ.colour}.a)`
    }
    const AD = "fragmentInputs.vPackTexture";

    function tD(QQ) {
      const {
        atlas: FQ,
        defines: wQ,
        texture: LQ
      } = QQ;
      if (FQ || !wQ.DIFFUSE) return null;
      if (LQ) return {
        texture: "diffuseSampler",
        ...LQ
      };
      const qQ = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===wQ.DIFFUSEDIRECTUV?"vMainUV1":2===wQ.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== QQ.kind) return qQ;
      if (!wQ.BLOXD_PLUGIN_ANIMATED) return {
        ...qQ,
        id: AD
      };
      const oQ = CQ.d.WGSL,
        DQ = (0, CQ.Pb)(oQ, "uAnimStatesNum"),
        kQ = (0, CQ.pb)(oQ, (0, go.i)(oQ), DQ),
        vQ = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${DQ})`,
        layers: [kQ],
        uv: `vec2f(${vQ}.x, ${vQ}.y * ${DQ} - ${kQ})`,
        levelUv: vQ,
        id: AD
      }
    }

    function eD(QQ, FQ) {
      return "box" === FQ.kind && !!QQ.hooks.surface && null !== tD(FQ)
    }

    function MD(QQ, FQ) {
      return QQ.reads.fragment.includes(FQ)
    }

    function GD(QQ) {
      return !!QQ.BLOXD_LIGHTING && !QQ.BLOXD_UNLIT
    }

    function pD(QQ, FQ, wQ, LQ) {
      const qQ = QQ.filter((QQ => {
        let [wQ, LQ] = QQ;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === wQ && LQ === FQ
      }));
      if (1 !== qQ.length) throw new Error(`A model program for shader packs has ${0===qQ.length?"no":"more than one"} ${LQ} code before fog (lite/modelShaderPack.ts)`);
      return QQ.map((QQ => QQ === qQ[0] ? [QQ[0], wQ] : QQ))
    }

    function cD(QQ, FQ, wQ, LQ) {
      const {
        hooks: qQ
      } = QQ, {
        kind: oQ,
        defines: DQ
      } = FQ, kQ = [...wQ];
      var vQ;
      FQ.atlas && qQ.surface && kQ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Jw("atlasIdxIn")]), "item" === oQ && kQ.push(["CUSTOM_VERTEX_DEFINITIONS", (0, CQ.h)(CQ.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), eD(QQ, FQ) && kQ.push(["CUSTOM_VERTEX_DEFINITIONS", (0, CQ.h)(CQ.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (vQ = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Vw}[min(u32(${vQ}) - 1u, arrayLength(&${Vw}) - 1u)], ${vQ} > 0.5);\n`)]);
      const mQ = mD(FQ);
      mQ && (qQ.surface || qQ.light) && kQ.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${mQ.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${mQ.varying} = ${mQ.value};`]);
      let uQ = LQ;
      if (DD(QQ, FQ, "fragment") && (kQ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${oD});`]), uQ = [...uQ, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), MD(QQ, "localPosition") && kQ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${LD(FQ)};`]), HD(DQ) && qQ.surface) {
        YD(QQ, FQ) && kQ.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const wQ = bD(QQ, FQ);
        wQ && kQ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${wQ});`]);
        const LQ = (0, CQ.Cb)(CQ.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        uQ = [...pD(uQ, (0, Po.g)(CQ.d.WGSL), LQ, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Po.c)(qD)]]
      }
      const {
        overlay: HQ
      } = FQ;
      HQ && xD(FQ) && qQ.surface && (uQ = uQ.filter((QQ => !kD(QQ, HQ))));
      const bQ = qQ.light ? function(QQ) {
        return "placed" === QQ.kind ? {
          name: "terrain",
          engine: (0, SF.T)(CQ.d.WGSL),
          pack: (0, SF.kb)(CQ.d.WGSL)
        } : QQ.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, SF.M)(CQ.d.WGSL),
          pack: (0, SF.fb)(CQ.d.WGSL)
        } : null
      }(FQ) : null;
      if (bQ && (uQ = pD(uQ, bQ.engine, bQ.pack, `${bQ.name} light`), "placed" !== oQ && GD(DQ))) {
        const QQ = DQ.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, CQ.Pb)(CQ.d.WGSL, "uEntityLightLevels") : (0, CQ.Vb)(CQ.d.WGSL, "aLightLevels");
        kQ.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${SF.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, SF.ib)(CQ.d.WGSL, QQ)])
      }
      return {
        vertexCode: kQ,
        fragmentCode: uQ
      }
    }

    function CD(QQ, FQ, wQ, LQ) {
      return Kw(QQ, FQ, wQ, LQ, "model")
    }
    const SD = "\t@builtin(position) position: vec4f,\n";

    function iD(QQ, FQ) {
      const wQ = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(QQ)[0];
      return `${wQ}${FQ}${QQ.slice(wQ.length)}`
    }

    function WD(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: qQ
      } = FQ, oQ = lw(FQ, LQ), {
        kind: DQ,
        defines: kQ
      } = wQ, vQ = function(QQ, FQ) {
        var wQ, LQ, qQ;
        const {
          defines: oQ
        } = FQ, DQ = mD(FQ), kQ = !!oQ.FOG, vQ = HD(oQ), mQ = null !== (wQ = null === DQ || void 0 === DQ ? void 0 : DQ.enchantTier) && void 0 !== wQ ? wQ : bD(QQ, FQ) ? "fragmentInputs.vPackEnchantTier" : "0u", uQ = "lifeform" === FQ.kind && !oQ.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (LQ = null === DQ || void 0 === DQ ? void 0 : DQ.vertexFlags) && void 0 !== LQ ? LQ : uD(FQ),
          vertexLocalPosition: LD(FQ),
          flags: null !== (qQ = null === DQ || void 0 === DQ ? void 0 : DQ.flags) && void 0 !== qQ ? qQ : uD(FQ),
          normal: "normalW",
          alpha: uQ ? "alpha * baseColor.a" : "alpha",
          alphaOut: uQ ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: kQ ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: kQ ? "1.0 - fog" : "0.0",
          enchantTier: mQ,
          enchantColour: vQ ? `${qD}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: YD(QQ, FQ) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: MD(QQ, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: xD(FQ)
        }
      }(FQ, wQ), mQ = QQ.textures.filter((QQ => /^textureAtlas\d+$/.test(QQ.name))).length, uQ = wQ.atlas && mQ > 0 ? {
        count: mQ,
        layers: wQ.atlas.layers,
        width: wQ.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: QQ.material.slots.has("uAnimDataPerTex") ? (FQ, wQ) => OL(FQ, wQ, function(QQ) {
          const FQ = QQ.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            fH: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: QQ => `uniforms.uAnimDataPerTex[${QQ}]${FQ}`
          }
        }(QQ)) : null
      } : null, HQ = "placed" === DQ ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", bQ = null !== uQ && void 0 !== uQ ? uQ : tD(wQ), YQ = function(QQ, wQ) {
        let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,RF.F)()}${aw(FQ,wQ)}${LQ}${nw(QQ)}${Uw}${HQ}${FQ.code}`
      };
      let {
        vertex: xQ,
        fragment: AQ
      } = QQ;
      const tQ = Pw(qQ, vQ);
      if (tQ) {
        const QQ = DD(FQ, wQ, "vertex") ? `\tbloxdSpCell = ${oD};\n` : "";
        xQ = CD(xQ, Zo, `${QQ}${tQ.slice(1)}${Zo}`, "vertex")
      }
      const eQ = `${Xw(FQ,oQ,function(QQ,FQ){return FQ.TWOSIDEDLIGHTING?QQ:`select(-(${QQ}), ${QQ}, fragmentInputs.frontFacing)`}(vQ.normal,kQ),vQ.flags)}${Zw(qQ,FQ.strict,FQ.program,bQ,vQ)}`;
      eQ && (AQ = CD(AQ, yo, `${eQ.slice(1)}${yo}`, "surface")), oQ && FQ.sunShadow && !kQ.TWOSIDEDLIGHTING && (AQ = CD(AQ, SD, `${SD}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const MQ = dw(qQ);
      if (MQ) {
        const QQ = Bw(qQ, GD(kQ), !0, vQ);
        AQ = CD(AQ, Bo, `${QQ}${MQ.slice(1)}${Bo}`, "light")
      }
      const GQ = eD(FQ, wQ) ? hw : "";
      return {
        ...QQ,
        vertex: iD(xQ, YQ(uQ, !1, GQ)),
        fragment: iD(AQ, YQ(bQ, oQ))
      }
    }
    const RD = {
      name: "earthSky",
      uniqueId: -1
    };
    class OD {
      constructor(QQ) {
        this.resources = QQ, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const QQ of this.instances.values()) QQ.released = !0, this.resources.destroyBuffer(QQ.buffer);
        this.instances.clear()
      }
    }

    function sD(QQ) {
      return QQ.failed && null !== QQ.packGroup
    }
    class rD {
      constructor(QQ, FQ, wQ) {
        this.device = QQ, this.resources = FQ, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.X3 = new so, this.modelMeshes = new Oo, this.thinBundle = void 0, this.binder = new Pq, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new to((QQ => this.modelSlot(QQ).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, mF.b)("Lite: "), this.renderStates = new Ho(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (QQ, FQ) => this.keepSteady(QQ, FQ), this.lists = new Zq(this.modelMeshes, this.X3, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new ko(FQ, this.warnOnce, ((QQ, FQ, wQ) => this.programWithModel(QQ, FQ, wQ)), sD), this.vertexLayouts = new po(FQ, QQ.limits, this.warnOnce), this.sceneLayout = FF(QQ), this.frameLayout = QQ.createBindGroupLayout({
          label: "meshes-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0,
              minBindingSize: 80
            }
          }]
        }), this.frameBuffer = QQ.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new So(QQ, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = QQ.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Uo(QQ, new So(QQ, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (QQ, FQ, wQ) => this.pipelineFor(QQ, FQ, wQ),
          pipelineCompiling: (QQ, FQ) => !QQ.program.failed && !1 !== this.pipelines.get(`${QQ.pipelineKey}|${FQ}`),
          sceneGroup: QQ => {
            const FQ = wQ(QQ);
            return FQ || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), FQ
          }
        }), FQ.onDestroy = QQ => {
          this.thinBundle.resourceDestroyed(QQ)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qQ = {
          order: QQ,
          isTransparent: FQ,
          _direct: !FQ,
          bind: (QQ, FQ) => this.createBinding(qQ, FQ, wQ, LQ)
        };
        return qQ
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(QQ, FQ, wQ) {
        var LQ;
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = FQ, this.drawDefines.view = FQ, this.thinBundle.eC(), this.writeFrameUniforms();
        const oQ = null !== (LQ = null === qQ || void 0 === qQ ? void 0 : qQ.defineFor("model")) && void 0 !== LQ ? LQ : 0;
        this.drawDefines.modelPackVariant = oQ, qQ && 0 !== oQ && (this.packInputs ??= new ho(this.device, qQ.textureLayers(), this.sunShadow), this.packInputs.write(qQ, FQ.eye, qQ.UA())), this.lists.clear(), this.slotCount = 0;
        const DQ = QQ.activeCamera;
        this.X3.select(DQ, this.keepSteadyBase), this.modelMeshes.select(DQ, FQ), wQ && this.pushEarthSky(wQ), this.lists.collect(QQ), this.thinBundle.pC(), this.uploadMeshSlots()
      }
      pushDraws(QQ, FQ, wQ, LQ, qQ, oQ) {
        let DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const kQ = oQ.length;
        for (let vQ = 0; vQ < wQ; vQ++) {
          const wQ = FQ[vQ];
          let kQ = this.retainedDraw(QQ, wQ, LQ, qQ);
          if (void 0 === kQ && (kQ = this.drawFor(QQ, wQ, LQ, qQ), this.retain(wQ, kQ)), kQ) {
            const QQ = wQ.owner,
              FQ = DQ ? DQ[vQ] : -1;
            kQ.slotOffset = FQ < 0 ? this.writeMeshSlot(QQ.getWorldMatrix().m, QQ.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[FQ], 16 * FQ), oQ.push(kQ)
          }
        }
        return oQ.length - kQ
      }
      bundleDraws(QQ, FQ, wQ) {
        let LQ = 0;
        for (const qQ of FQ) {
          let FQ = this.retainedDraw(QQ, qQ, wQ, !1);
          const oQ = void 0 !== FQ;
          if (void 0 === FQ && (FQ = this.drawFor(QQ, qQ, wQ, !1), this.retain(qQ, FQ)), FQ) {
            const QQ = qQ.owner,
              wQ = this.thinBundle.add(qQ, FQ, QQ.getWorldMatrix().m, QQ.visibility);
            oQ && this.steadyFrom(qQ, FQ, wQ), LQ++
          }
        }
        return LQ
      }
      steadyFrom(QQ, FQ, wQ) {
        const LQ = QQ.owner,
          qQ = this.X3.base(LQ),
          oQ = LQ.material,
          {
            drawState: DQ,
            instance: kQ
          } = FQ.inputs.retained;
        if (!qQ || !oQ || 1 !== QQ.parts.materials.length || Wo(QQ) !== oQ) return;
        const vQ = qQ.steady ??= {
          unit: QQ,
          material: oQ,
          visibility: 1,
          draw: FQ,
          record: wQ,
          drawState: DQ,
          instance: kQ,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        vQ.unit = QQ, vQ.material = oQ, vQ.visibility = LQ.visibility, vQ.draw = FQ, vQ.record = wQ, vQ.drawState = DQ, vQ.instance = kQ, vQ.bindGroup = kQ.bindGroup, vQ.gpuVersion = this.resources.gpuBuffersVersion, vQ.fitInstances = FQ.inputs.fitInstances, vQ.worldFlag = LQ.getWorldMatrix().updateFlag, vQ.handedFrame = this.frame
      }
      keepSteady(QQ, FQ) {
        const wQ = QQ.steady;
        if (wQ.handedFrame !== this.frame - 1 || (this.frame + wQ.phase) % 8 === 0) return !1;
        const LQ = QQ.mesh,
          {
            unit: qQ,
            draw: oQ,
            instance: DQ,
            drawState: kQ
          } = wQ,
          vQ = LQ.forcedInstanceCount || LQ.o4;
        if (!LQ.isVisible || LQ.pqQ || LQ.visibility !== wQ.visibility || 0 === (LQ.layerMask & FQ.layerMask) || LQ.material !== wQ.material || 0 !== LQ.renderingGroupId || LQ.hasVertexAlpha || !this.drawDefines.definesHold(kQ, qQ, kQ.instancing) || wQ.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(oQ.inputs, qQ, kQ.instancing, oQ.program) || oQ.program.failed || DQ.released || vQ <= 0 || vQ > wQ.fitInstances) return !1;
        if (DQ.frame !== this.frame && this.bindMaterial(DQ, this.modelUniforms.refreshModelUniforms(LQ.iN(), DQ, DQ.model, this.view)), !DQ.bindable || DQ.bindGroup !== wQ.bindGroup) return !1;
        const mQ = LQ.computeWorldMatrix(),
          uQ = mQ.updateFlag !== wQ.worldFlag;
        return wQ.worldFlag = mQ.updateFlag, oQ.instances = vQ, this.thinBundle.addAgain(wQ.record, oQ, uQ ? mQ.m : null, wQ.visibility), wQ.handedFrame = this.frame, this.X3.drawn++, !0
      }
      retainedDraw(QQ, FQ, wQ, LQ) {
        const qQ = this.inputs.get(FQ),
          oQ = null === qQ || void 0 === qQ ? void 0 : qQ.retained;
        if (!qQ || !oQ) return;
        const {
          drawState: DQ,
          program: kQ,
          instance: vQ,
          instancing: mQ
        } = oQ, uQ = FQ.owner;
        if (Fo(uQ) !== mQ) return;
        const HQ = this.instanceCount(uQ, mQ);
        if (HQ <= 0) return null;
        if (vQ.released || kQ.failed || DQ.program !== kQ || !this.drawDefines.programCurrent(DQ, FQ, mQ, wQ) || !this.inputsStamped(qQ, FQ, mQ, kQ) || uQ.isUnIndexed !== oQ.unIndexed || this.indexKey(FQ) !== oQ.indexData) return;
        if (oQ.indexBuffer && oQ.gpuVersion !== this.resources.gpuBuffersVersion) {
          const QQ = this.resources.gpuBuffer(oQ.indexData);
          if (!QQ) return;
          oQ.indexBuffer = QQ, oQ.gpuVersion = this.resources.gpuBuffersVersion
        }
        let bQ = !1;
        if (vQ.frame !== this.frame && (bQ = this.modelUniforms.refreshModelUniforms(QQ, vQ, vQ.model, this.view)), !this.bindMaterial(vQ, bQ) || !this.withGpuBuffers(qQ) || !this.instanceBuffersFit(uQ.name, qQ, HQ)) return null;
        const YQ = this.makeDraw(kQ, qQ, this.renderStates.renderState(DQ.model, uQ, LQ, qQ.state), vQ, HQ);
        return this.setRange(YQ, FQ, oQ.indexBuffer, oQ.indexData), YQ
      }
      retain(QQ, FQ) {
        const wQ = this.drawDefines.drawStates.get(QQ);
        if (!FQ || !wQ || wQ.program !== FQ.program) {
          const FQ = this.inputs.get(QQ);
          return void(FQ && (FQ.retained = null))
        }
        const LQ = QQ.owner,
          qQ = wQ.instancing,
          oQ = this.indexKey(QQ),
          DQ = FQ.inputs.retained;
        DQ ? (DQ.drawState = wQ, DQ.instancing = qQ, DQ.program = FQ.program, DQ.instance = FQ.material, DQ.indexData = oQ, DQ.unIndexed = LQ.isUnIndexed, DQ.indexBuffer = FQ.indexBuffer, DQ.gpuVersion = this.resources.gpuBuffersVersion) : FQ.inputs.retained = {
          drawState: wQ,
          instancing: qQ,
          program: FQ.program,
          instance: FQ.material,
          indexData: oQ,
          unIndexed: LQ.isUnIndexed,
          indexBuffer: FQ.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(QQ, FQ, wQ, LQ) {
        const qQ = FQ.owner,
          oQ = Wo(FQ);
        if (!oQ) return null;
        const DQ = oQ.getClassName();
        let kQ = null;
        if (function(QQ) {
            return "LinesMesh" === QQ.getClassName()
          }(qQ)) {
          if (! function(QQ) {
              return "ShaderMaterial" === QQ.getClassName() && "color" === QQ.shaderPath
            }(oQ)) return this.warnOnce(`lines:${DQ}`, `A LinesMesh with a ${DQ} is not drawn yet (${oQ.name})`), null;
          kQ = qQ
        } else if ("StandardMaterial" !== DQ && "LiteMaterial" !== DQ) return this.warnOnce(`class:${DQ}`, `${DQ} is not drawn yet (${oQ.name})`), null;
        const vQ = Fo(qQ),
          mQ = this.instanceCount(qQ, vQ);
        if (mQ <= 0) return null;
        const uQ = kQ ? this.lineProgramFor(qQ, wQ, vQ) : this.drawDefines.programFor(QQ, FQ, oQ, wQ, vQ);
        if (!uQ || uQ.failed) return null;
        const HQ = kQ ? null : this.drawDefines.drawStates.get(FQ).model,
          bQ = HQ ? this.modelInstance(HQ, uQ) : this.materialInstance(qQ, uQ);
        let YQ = !1;
        if (bQ.frame !== this.frame && (kQ ? MQ(bQ.ubo, kQ) : YQ = this.modelUniforms.refreshModelUniforms(QQ, bQ, bQ.model, this.view)), !this.bindMaterial(bQ, YQ)) return null;
        const xQ = this.meshInputs(FQ, uQ, vQ);
        if (!xQ || !this.instanceBuffersFit(qQ.name, xQ, mQ)) return null;
        const AQ = this.indexKey(FQ);
        let tQ = null;
        if (AQ && !qQ.isUnIndexed && (tQ = this.resources.gpuBuffer(AQ), !tQ)) return null;
        const eQ = this.renderStates.renderState(null !== HQ && void 0 !== HQ ? HQ : oQ, qQ, LQ, xQ.state, kQ ? "line-list" : "triangle-list"),
          GQ = this.makeDraw(uQ, xQ, eQ, bQ, mQ);
        return this.setRange(GQ, FQ, tQ, AQ), GQ
      }
      indexKey(QQ) {
        const FQ = oo(QQ);
        return FQ ? this.resources.modelIndex(FQ) : null
      }
      setRange(QQ, FQ, wQ, LQ) {
        wQ && (QQ.indexBuffer = wQ, QQ.indexFormat = this.resources.indexFormat(LQ));
        const qQ = 4 * FQ.range + (wQ ? 0 : 2);
        QQ.unit = FQ, QQ.first = FQ.parts.PA[qQ], QQ.count = FQ.parts.PA[qQ + 1]
      }
      makeDraw(QQ, FQ, wQ, LQ, qQ) {
        FQ.state !== wQ && (FQ.state = wQ, FQ.pipelineKey = `${QQ.id}|${FQ.layout.key}|${wQ.key}`, FQ.pipeline = null);
        const oQ = FQ.draw ??= {
          program: QQ,
          inputs: FQ,
          pipelineKey: "",
          layout: FQ.layout,
          state: wQ,
          material: LQ,
          slotOffset: 0,
          vertexBuffers: FQ.buffers,
          vertexOffsets: FQ.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: qQ,
          unit: null
        };
        return oQ.program = QQ, oQ.pipelineKey = FQ.pipelineKey, oQ.state = wQ, oQ.material = LQ, oQ.vertexOffsets = FQ.offsets, oQ.indexBuffer = null, oQ.instances = qQ, oQ
      }
      instanceCount(QQ, FQ) {
        switch (FQ) {
          case "thin":
            return QQ.forcedInstanceCount || QQ.o4;
          case "instanced":
            return this.prepareInstances(QQ);
          case "none":
            return 1
        }
      }
      prepareInstances(QQ) {
        const FQ = function(QQ, FQ) {
          const wQ = FQ._userInstancedBuffersStorage,
            LQ = QQ.batchUploads.get(FQ);
          if (LQ) {
            var qQ;
            if (LQ.layout === (null !== (qQ = null === wQ || void 0 === wQ ? void 0 : wQ.interleavedKinds) && void 0 !== qQ ? qQ : null)) return LQ;
            LQ.release()
          }
          return new EQ(QQ, FQ, wQ)
        }(this.resources, QQ);
        return FQ.frame !== this.frame && FQ.pack(QQ, this.modelMeshes.instanceBatch(QQ), this.modelMeshes.worlds, this.frame), FQ.count
      }
      programWithModel(QQ, FQ, wQ) {
        const LQ = this.modelSlot(QQ),
          qQ = vo(LQ, QQ, wQ),
          oQ = this.drawDefines.modelPackKind(QQ),
          DQ = oQ ? function(QQ, FQ, wQ, LQ) {
            const qQ = (0, WQ.z)(QQ, SQ.l.name),
              oQ = [];
            for (const {
                feature: vQ,
                state: mQ,
                active: uQ
              }
              of QQ.features) {
              var DQ, kQ;
              const QQ = uQ ? null === (DQ = (kQ = (0, uF.j)(vQ)).JY) || void 0 === DQ ? void 0 : DQ.call(kQ, mQ) : void 0;
              QQ && oQ.push(QQ)
            }
            return {
              kind: FQ,
              atlas: null !== qQ && void 0 !== qQ && qQ.active ? (0, SQ.e)(qQ.state) : null,
              defines: wQ,
              ...vD(oQ, LQ)
            }
          }(QQ, oQ, FQ, LQ.fragmentCode) : null;
        if (DQ && function(QQ) {
            const FQ = QQ.defines;
            return (null === QQ.atlas || !!FQ.DIFFUSE && 1 === FQ.DIFFUSEDIRECTUV) && !!FQ.NORMAL && !FQ.REFLECTION && !FQ.EMISSIVEASILLUMINATION && !FQ.LINKEMISSIVEWITHDIFFUSE
          }(DQ)) {
          const wQ = this.modelPackProgram(QQ, FQ, `${qQ}#${oQ}#sp${this.drawDefines.modelPackVariant}`, LQ, DQ);
          if (wQ && !wQ.failed) return wQ
        }
        const kQ = this.programs.get(qQ);
        if (kQ || this.unbuildable.has(qQ)) return null !== kQ && void 0 !== kQ ? kQ : null;
        let vQ;
        try {
          vQ = vq({
            defines: Lo(FQ),
            vertexCode: LQ.vertexCode,
            fragmentCode: LQ.fragmentCode,
            pluginUniforms: LQ.pluginUniforms
          })
        } catch (mQ) {
          return this.unbuildable.add(qQ), this.warnOnce(`build:${qQ}`, `could not build a program for ${QQ.name}: ${String(mQ)}`), null
        }
        return this.createProgram(qQ, vQ, "standard")
      }
      modelPackProgram(QQ, FQ, wQ, LQ, qQ) {
        const oQ = this.programs.get(wQ);
        if (oQ || this.unbuildable.has(wQ)) return null !== oQ && void 0 !== oQ ? oQ : null;
        const DQ = this.drawDefines.modelPackVariant;
        let kQ;
        try {
          const QQ = function(QQ) {
              return (0, OF.b)(QQ, "model")
            }(DQ),
            wQ = cD(QQ, qQ, LQ.vertexCode, LQ.fragmentCode);
          kQ = WD(vq({
            defines: Lo(FQ),
            ...wQ,
            pluginUniforms: LQ.pluginUniforms
          }), QQ, qQ, !!this.sunShadow)
        } catch (uQ) {
          return this.unbuildable.add(wQ), this.warnOnce(`build:${wQ}`, `could not build a shader pack program for ${QQ.name}, which draws without the pack: ${String(uQ)}`), null
        }
        const vQ = fo(DQ, !!this.sunShadow),
          mQ = {
            group: this.packInputs.bindGroupFor(null, vQ),
            layout: ao(this.device, {
              depth: !1,
              sunShadow: vQ
            })
          };
        return this.createProgram(wQ, kQ, function(QQ) {
          return `standard-sp${QQ}`
        }(DQ), mQ)
      }
      lineProgramFor(QQ, FQ, wQ) {
        const LQ = eQ(QQ, wQ, FQ, this.view);
        let qQ = this.linePrograms.get(LQ);
        var oQ;
        return qQ || (qQ = this.createProgram(`lines#${LQ}`, (oQ = function(QQ) {
          const FQ = new Map;
          for (let wQ = 0; wQ < mQ.length; wQ++) QQ & 1 << wQ && FQ.set(mQ[wQ], !0);
          return FQ
        }(LQ), bq({
          defines: oQ,
          vertex: uq,
          fragment: Hq,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(LQ, qQ)), qQ
      }
      createProgram(QQ, FQ, wQ) {
        var LQ;
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const oQ = this.nextProgramId++,
          DQ = `${wQ}-${oQ}`,
          kQ = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          vQ = [{
            binding: 0,
            visibility: kQ,
            buffer: {
              type: "uniform"
            }
          }];
        for (const HQ of FQ.textures) vQ.push({
          binding: HQ.binding,
          visibility: kQ,
          texture: {
            viewDimension: HQ.dimension
          }
        }), vQ.push({
          binding: HQ.samplerBinding,
          visibility: kQ,
          sampler: {}
        });
        const mQ = this.device.createBindGroupLayout({
            label: DQ,
            entries: vQ
          }),
          uQ = {
            key: QQ,
            id: oQ,
            kind: wQ,
            program: FQ,
            vertex: this.device.createShaderModule({
              label: `${DQ}-vertex`,
              code: FQ.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${DQ}-fragment`,
              code: FQ.fragment
            }),
            materialLayout: mQ,
            pipelineLayout: this.device.createPipelineLayout({
              label: DQ,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, mQ, ...qQ ? [qQ.layout] : []]
            }),
            packGroup: null !== (LQ = null === qQ || void 0 === qQ ? void 0 : qQ.group) && void 0 !== LQ ? LQ : null,
            failed: !1
          };
        return this.programs.set(QQ, uQ), uQ
      }
      writeFrameUniforms() {
        const QQ = this.frameUniforms;
        Ao(this.view, QQ), this.device.queue.writeBuffer(this.frameBuffer, 0, QQ)
      }
      materialInstance(QQ, FQ) {
        let wQ = this.materials.get(QQ);
        if (!wQ) {
          const FQ = new Map;
          this.materials.set(QQ, FQ), QQ.zN.addOnce((() => {
            for (const QQ of FQ.values()) QQ.released = !0, this.resources.destroyBuffer(QQ.buffer);
            this.materials.delete(QQ)
          })), wQ = FQ
        }
        let LQ = wQ.get(FQ.key);
        return LQ || (LQ = this.newMaterialInstance(QQ, null, FQ), wQ.set(FQ.key, LQ)), LQ
      }
      modelInstance(QQ, FQ) {
        const wQ = this.modelSlot(QQ);
        let LQ = wQ.instances.get(FQ.key);
        return LQ || (LQ = this.newMaterialInstance(QQ, QQ, FQ), wQ.instances.set(FQ.key, LQ)), LQ
      }
      modelSlot(QQ) {
        let FQ = QQ.gpu[OQ.e.lite];
        return FQ || (FQ = new OD(this.resources), QQ.gpu[OQ.e.lite] = FQ), FQ
      }
      newMaterialInstance(QQ, FQ, wQ) {
        const LQ = wQ.program.material.floats,
          qQ = new Float32Array(LQ),
          oQ = new Map;
        return {
          owner: QQ,
          model: FQ,
          program: wQ,
          data: qQ,
          uploaded: new Float32Array(LQ).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${QQ.name}-uniforms`,
            size: Math.max(16, 4 * LQ),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: oQ,
          ubo: new xo(wQ.program.material.slots, qQ, oQ),
          bindGroup: null,
          bound: new Array(2 * wQ.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(QQ) {
        var FQ;
        const wQ = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: eq + Mq,
            fragment: eq + Gq,
            attributes: [],
            material: tq,
            textures: []
          }, "earthSky"),
          LQ = this.earthSkyUniforms ??= this.newMaterialInstance(RD, null, wQ);
        this.earthSkyFrom !== QQ && (this.earthSkyFrom = QQ, LQ.data.fill(0)), Oq(LQ.ubo, QQ, this.view);
        const qQ = this.vertexInputs(wQ, RD, "earthSky", wQ, null);
        if (wQ.failed || !qQ || !this.bindMaterial(LQ, !1)) return;
        const oQ = null !== (FQ = qQ.state) && void 0 !== FQ ? FQ : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          DQ = this.makeDraw(wQ, qQ, oQ, LQ, 1);
        DQ.count = Yq.length;
        const kQ = sq(QQ, this.view);
        DQ.slotOffset = this.writeMeshSlot(kQ, 1), this.lists.skyDraws.push(DQ)
      }
      uploadIfChanged(QQ) {
        const {
          data: FQ,
          uploaded: wQ
        } = QQ;
        for (let LQ = 0; LQ < FQ.length; LQ++)
          if (FQ[LQ] !== wQ[LQ]) return wQ.set(FQ), void this.device.queue.writeBuffer(QQ.buffer, 0, FQ)
      }
      bindMaterial(QQ, FQ) {
        return QQ.frame !== this.frame && (QQ.frame = this.frame, FQ || this.uploadIfChanged(QQ), QQ.bindable = this.bindTextures(QQ)), QQ.bindable
      }
      bindTextures(QQ) {
        const {
          program: FQ,
          bound: wQ
        } = QQ, LQ = FQ.program.textures;
        let qQ = !QQ.bindGroup,
          oQ = !0;
        for (let DQ = 0; DQ < LQ.length; DQ++) {
          const FQ = QQ.textures.get(LQ[DQ].name),
            kQ = FQ ? this.resources.boundTexture(FQ) : null;
          kQ ? wQ[2 * DQ] === kQ.view && wQ[2 * DQ + 1] === kQ.sampler || (wQ[2 * DQ] = kQ.view, wQ[2 * DQ + 1] = kQ.sampler, qQ = !0) : (FQ || QQ.ubo.expected.has(LQ[DQ].name) || this.warnOnce(`texture:${QQ.owner.name}:${LQ[DQ].name}`, `${QQ.owner.name} has no ${LQ[DQ].name}`), oQ = !1)
        }
        if (!oQ) return qQ && (QQ.bindGroup = null), !1;
        if (qQ) {
          const qQ = [{
            binding: 0,
            resource: {
              buffer: QQ.buffer
            }
          }];
          for (let QQ = 0; QQ < LQ.length; QQ++) qQ.push({
            binding: LQ[QQ].binding,
            resource: wQ[2 * QQ]
          }), qQ.push({
            binding: LQ[QQ].samplerBinding,
            resource: wQ[2 * QQ + 1]
          });
          QQ.bindGroup = this.device.createBindGroup({
            label: `${QQ.owner.name}-material`,
            layout: FQ.materialLayout,
            entries: qQ
          })
        }
        return !0
      }
      writeMeshSlot(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, QQ, FQ, wQ), this.slotCount++ * fL
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(QQ, FQ, wQ, LQ, qQ) {
        let oQ = this.inputs.get(QQ);
        if (!oQ || oQ.program !== LQ || !co(FQ, oQ, this.resources, qQ)) {
          var DQ;
          if (oQ = null !== (DQ = this.vertexLayouts.resolveInputs(FQ, wQ, LQ, qQ)) && void 0 !== DQ ? DQ : void 0, !oQ) return null;
          this.inputs.set(QQ, oQ)
        }
        return this.withGpuBuffers(oQ)
      }
      meshInputs(QQ, FQ, wQ) {
        const LQ = this.inputs.get(QQ);
        if (LQ && this.inputsStamped(LQ, QQ, wQ, FQ)) return this.withGpuBuffers(LQ);
        const qQ = QQ.owner,
          oQ = oo(QQ),
          DQ = this.vertexInputs(QQ, qQ, qQ.name, FQ, oQ);
        return DQ && (DQ.geometry = Do(QQ), DQ.instanceLayout = this.drawDefines.instanceLayout(qQ, wQ)), DQ
      }
      inputsStamped(QQ, FQ, wQ, LQ) {
        return function(QQ, FQ, wQ, LQ) {
          return QQ.program === wQ && QQ.geometry === Do(FQ) && QQ.instanceLayout === LQ
        }(QQ, FQ, LQ, this.drawDefines.instanceLayout(FQ.owner, wQ))
      }
      withGpuBuffers(QQ) {
        return Jo(QQ, this.resources, this.zeroBuffer) ? QQ : null
      }
      instanceBuffersFit(QQ, FQ, wQ) {
        const LQ = no(FQ, wQ, this.resources, this.zeroBuffer);
        if (LQ) {
          const qQ = FQ.ends[LQ.index] - FQ.offsets[LQ.index] + FQ.N7[LQ.index];
          return this.warnOnce(`overrun:${QQ}`, `${QQ} draws ${wQ} instances from a ${qQ}-byte buffer (${LQ.needed} needed)`), !1
        }
        return !0
      }
      createBinding(QQ, FQ, wQ, LQ) {
        const qQ = `${FQ._colorFormat}|${FQ._depthStencilFormat}|${FQ._depthCompare}|${FQ._sampleCount}`,
          oQ = DF(this.device, FQ);
        if (QQ === this.skyLastRenderable) {
          let wQ = null;
          return {
            renderable: QQ,
            pipeline: oQ,
            draw: QQ => wQ ? this.drawSky(QQ, FQ, qQ, wQ) : 0,
            update: QQ => {
              wQ = QQ
            }
          }
        }
        return {
          renderable: QQ,
          pipeline: oQ,
          draw: QQ => (LQ ? LQ.execute(QQ, FQ, qQ) : 0) + this.drawList(QQ, FQ, qQ, wQ)
        }
      }
      drawSky(QQ, FQ, wQ, LQ) {
        const qQ = this.lists.skyDraws,
          oQ = qQ.length > 0;
        if (oQ) {
          var DQ;
          const wQ = (null !== (DQ = FQ._depthCompare) && void 0 !== DQ ? DQ : wF).startsWith("greater") ? 0 : 1;
          QQ.setViewport(0, 0, LQ.targetWidth, LQ.targetHeight, wQ, wQ)
        }
        const kQ = this.drawList(QQ, FQ, wQ, qQ);
        return oQ && QQ.setViewport(0, 0, LQ.targetWidth, LQ.targetHeight, 0, 1), kQ
      }
      drawList(QQ, FQ, wQ, LQ) {
        let qQ = 0;
        const oQ = this.binder;
        oQ.reset();
        for (const DQ of LQ) {
          const LQ = this.pipelineFor(DQ, FQ, wQ);
          LQ && (oQ.bind(QQ, DQ, LQ, this.meshSlots.bindGroup, DQ.slotOffset), DQ.indexBuffer ? QQ.drawIndexed(DQ.count, DQ.instances, DQ.first, 0, 0) : QQ.draw(DQ.count, DQ.instances, DQ.first, 0), qQ++)
        }
        return qQ
      }
      pipelineFor(QQ, FQ, wQ) {
        var LQ, qQ;
        if (QQ.program.failed) return null;
        const oQ = QQ.inputs;
        if (oQ.pipeline && oQ.pipelineTarget === wQ) return oQ.pipeline;
        const DQ = `${QQ.pipelineKey}|${wQ}`,
          kQ = this.pipelines.get(DQ);
        if (void 0 !== kQ) return kQ && (oQ.pipeline = kQ, oQ.pipelineTarget = wQ), kQ || null;
        this.pipelines.set(DQ, null);
        const {
          program: vQ,
          layout: mQ,
          state: uQ
        } = QQ, HQ = {
          label: `standard-${vQ.id}`,
          layout: vQ.pipelineLayout,
          vertex: {
            module: vQ.vertex,
            entryPoint: "main",
            buffers: mQ.buffers
          },
          fragment: yQ({
            module: vQ.fragment,
            entryPoint: "main"
          }, FQ, uQ.blend, uQ.colourWrite),
          depthStencil: FQ._depthStencilFormat ? {
            format: FQ._depthStencilFormat,
            depthCompare: null !== (LQ = null !== (qQ = uQ.depthCompare) && void 0 !== qQ ? qQ : FQ._depthCompare) && void 0 !== LQ ? LQ : wF,
            depthWriteEnabled: uQ.depthWrite,
            depthBias: uQ.depthBias,
            depthBiasSlopeScale: uQ.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: FQ._sampleCount
          },
          primitive: {
            topology: uQ.topology,
            frontFace: uQ.frontFace,
            cullMode: uQ.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(HQ).then((QQ => {
          this.compiling--, this.pipelines.set(DQ, QQ)
        }), (QQ => {
          this.compiling--, this.reportFailure(vQ, DQ, QQ)
        })), null
      }
      forEachSunShadowCaster(QQ) {
        const FQ = this.caster,
          wQ = (wQ, LQ, qQ) => {
            const oQ = wQ.unit && function(QQ) {
              const FQ = QQ.material.model;
              return null !== FQ && (FQ.lifeform || FQ.item) && FQ.castsSunShadow && "triangle-list" === QQ.state.topology
            }(wQ) ? oo(wQ.unit) : null;
            if (!oQ) return;
            const DQ = wQ.unit.owner;
            switch (FQ.geometry = oQ, FQ.skip = DQ.noSunShadowVertices, FQ.indexed = null !== wQ.indexBuffer, FQ.first = wQ.first, FQ.count = wQ.count, FQ.nH = LQ, FQ.worldAt = qQ, FQ.instances = null, FQ.instanceCount = 1, FQ.thin = !1, Fo(DQ)) {
              case "thin": {
                const QQ = DQ._thinInstanceDataStorage.matrixData;
                if (!QQ) return;
                FQ.instances = QQ, FQ.instanceCount = Math.min(wQ.instances, QQ.length / 16), FQ.thin = !0;
                break
              }
              case "instanced": {
                const QQ = this.resources.batchUploads.get(DQ);
                if (!QQ || QQ.frame !== this.frame || !this.writeBatchCasters(QQ)) return;
                break
              }
            }
            QQ(FQ)
          };
        for (const LQ of this.lists.opaqueDraws) wQ(LQ, this.meshSlots.data, LQ.slotOffset / 4);
        this.thinBundle.forEachDrawn(wQ)
      }
      writeBatchCasters(QQ) {
        const {
          caster: FQ
        } = this, wQ = QQ.packedMatrices, LQ = QQ.count;
        FQ.instances = wQ, FQ.instanceCount = LQ;
        let qQ = -1;
        for (let oQ = 0; oQ < LQ; oQ++) {
          const FQ = ID(QQ.packedRowMesh(oQ));
          FQ && qQ < 0 ? (this.casterWorlds.length < 16 * LQ && (this.casterWorlds = new Float32Array(wQ.length)), this.casterWorlds.set(wQ.subarray(0, 16 * oQ)), qQ = oQ) : !FQ && qQ >= 0 && (this.casterWorlds.set(wQ.subarray(16 * oQ, 16 * oQ + 16), 16 * qQ), qQ++)
        }
        return qQ >= 0 && (FQ.instances = this.casterWorlds, FQ.instanceCount = qQ), FQ.instanceCount > 0
      }
      async reportFailure(QQ, FQ, wQ) {
        const LQ = [];
        let qQ = !0;
        for (const [oQ, DQ] of [
            ["vertex", QQ.vertex],
            ["fragment", QQ.fragment]
          ]) {
          const QQ = await DQ.getCompilationInfo();
          for (const FQ of QQ.messages) qQ &&= "error" !== FQ.type, LQ.push(`${oQ}:${FQ.lineNum}:${FQ.linePos} ${FQ.type}: ${FQ.message}`)
        }
        if (qQ && !QQ.packGroup) return this.pipelines.set(FQ, !1), console.error(`Lite: pipeline ${FQ} failed`, wQ), void gq("mesh", QQ.kind, wQ);
        QQ.failed || (QQ.failed = !0, console.error(`Lite: program ${QQ.id} failed`, wQ, LQ.join("\n"), {
          program: QQ.program,
          key: QQ.key
        }), gq("mesh", QQ.kind, wQ, qQ ? null : LQ[0]))
      }
    }

    function ID(QQ) {
      var FQ, wQ;
      const LQ = null === (FQ = QQ.bK) || void 0 === FQ || null === (wQ = FQ.aShaderPackItem) || void 0 === wQ ? void 0 : wQ.x;
      return void 0 !== LQ && 0 !== (LQ & vF.h)
    }
    var UD = wQ(41086),
      ND = wQ(41089),
      TD = wQ(41093),
      KD = wQ(41059);
    const zD = [0, 3, 1, 4, 2, 5];

    function lD(QQ, FQ, wQ, LQ, qQ) {
      const oQ = wQ[0].width;
      try {
        return qQ ? function(QQ, FQ, wQ) {
          const LQ = (0, KD.d)(QQ, wQ, wQ, 6);
          for (let qQ = 0; qQ < 6; qQ++)(0, KD.e)(QQ, LQ, qQ, FQ[zD[qQ]], {
            invertY: !1
          });
          return LQ.texture
        }(QQ, wQ, oQ) : function(QQ, FQ, wQ, LQ) {
          const qQ = QQ.createTexture({
            label: "sink-cube",
            size: {
              width: wQ,
              height: wQ,
              depthOrArrayLayers: 6
            },
            format: LQ,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let oQ = 0; oQ < 6; oQ++) QQ.queue.copyExternalImageToTexture({
            source: FQ[zD[oQ]]
          }, {
            texture: qQ,
            origin: {
              x: 0,
              y: 0,
              z: oQ
            }
          }, {
            width: wQ,
            height: wQ
          });
          return qQ
        }(FQ, wQ, oQ, 1 === LQ ? "r8unorm" : "rgba8unorm")
      } finally {
        jD(wQ)
      }
    }

    function jD(QQ) {
      for (const FQ of null !== QQ && void 0 !== QQ ? QQ : []) null === FQ || void 0 === FQ || FQ.close()
    }
    async function aD(QQ) {
      const FQ = [],
        wQ = [];
      if (await Promise.all(QQ.map(((QQ, LQ) => (FQ[LQ] = null, QQ.then((QQ => {
          FQ[LQ] = QQ
        }), (QQ => {
          wQ.push(QQ)
        })))))), wQ.length > 0) throw jD(FQ), wQ[0];
      return FQ
    }
    class XD {
      constructor(QQ) {
        this.MH = QQ, this.starts = [], this.lengths = [], this.used = 0, QQ > 0 && (this.starts.push(0), this.lengths.push(QQ))
      }
      allocate(QQ) {
        const {
          starts: FQ,
          lengths: wQ
        } = this;
        for (let LQ = 0; LQ < FQ.length; LQ++) {
          if (wQ[LQ] < QQ) continue;
          const qQ = FQ[LQ];
          return wQ[LQ] === QQ ? (FQ.splice(LQ, 1), wQ.splice(LQ, 1)) : (FQ[LQ] += QQ, wQ[LQ] -= QQ), this.used += QQ, qQ
        }
        return -1
      }
      free(QQ, FQ) {
        this.used -= FQ;
        const wQ = Math.min(QQ + FQ, this.MH);
        wQ > QQ && this.release(QQ, wQ - QQ)
      }
      grow(QQ) {
        const FQ = this.MH;
        this.MH = QQ, this.release(FQ, QQ - FQ)
      }
      truncate(QQ) {
        const {
          starts: FQ,
          lengths: wQ
        } = this;
        for (let LQ = FQ.length - 1; LQ >= 0 && FQ[LQ] + wQ[LQ] > QQ; LQ--) FQ[LQ] >= QQ ? (FQ.splice(LQ, 1), wQ.splice(LQ, 1)) : wQ[LQ] = QQ - FQ[LQ];
        this.MH = QQ
      }
      release(QQ, FQ) {
        const {
          starts: wQ,
          lengths: LQ
        } = this;
        let qQ = 0,
          oQ = wQ.length;
        for (; qQ < oQ;) {
          const FQ = qQ + oQ >> 1;
          wQ[FQ] < QQ ? qQ = FQ + 1 : oQ = FQ
        }
        const DQ = qQ,
          kQ = DQ > 0 && wQ[DQ - 1] + LQ[DQ - 1] === QQ,
          vQ = DQ < wQ.length && QQ + FQ === wQ[DQ];
        kQ && vQ ? (LQ[DQ - 1] += FQ + LQ[DQ], wQ.splice(DQ, 1), LQ.splice(DQ, 1)) : kQ ? LQ[DQ - 1] += FQ : vQ ? (wQ[DQ] = QQ, LQ[DQ] += FQ) : (wQ.splice(DQ, 0, QQ), LQ.splice(DQ, 0, FQ))
      }
    }
    const fD = 256;
    class VD {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = QQ, this.onReplaced = FQ, this.mergeGap = wQ, this.gpu = null, this.bytes = void 0, this.PA = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const qQ = Math.max(fD, Math.ceil(LQ / fD) * fD);
        this.bytes = new Uint8Array(qQ), this.PA = new XD(qQ / fD)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(QQ) {
        return Math.max(1, Math.ceil(QQ / fD)) * fD
      }
      allocate(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ;
        const LQ = VD.slotBytes(QQ),
          qQ = LQ / fD;
        let oQ = this.PA.allocate(qQ);
        oQ < 0 && (this.grow(this.PA.MH + qQ), oQ = this.PA.allocate(qQ));
        const DQ = oQ * fD;
        return this.growTo(DQ + Math.max(wQ, LQ)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, DQ, DQ + LQ), FQ && this.bytes.set(new Uint8Array(FQ.buffer, FQ.byteOffset, Math.min(FQ.byteLength, LQ)), DQ), this.markDirty(DQ, DQ + LQ), DQ
      }
      growTo(QQ) {
        const FQ = Math.ceil(QQ / fD);
        FQ > this.PA.MH && this.grow(FQ)
      }
      free(QQ, FQ) {
        this.freed.push(QQ, FQ)
      }
      write(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (LQ <= 0) return;
        this.bytes.set(new Uint8Array(FQ.buffer, wQ, LQ), QQ);
        let oQ = QQ + LQ;
        if (qQ) {
          const FQ = QQ + 4 * Math.ceil(LQ / 4);
          this.bytes.fill(0, oQ, FQ), oQ = FQ
        }
        this.markDirty(QQ, oQ)
      }
      move(QQ, FQ, wQ) {
        this.bytes.copyWithin(FQ, QQ, QQ + wQ), this.markDirty(FQ, FQ + wQ)
      }
      flush() {
        for (const FQ of this.retired) this.onReplaced(FQ), FQ.destroy();
        this.retired.length = 0;
        const QQ = this.dirtyStarts.length;
        if (QQ > 0) {
          const {
            dirtyStarts: FQ,
            dirtyEnds: wQ,
            order: LQ
          } = this;
          LQ.length = QQ;
          for (let kQ = 0; kQ < QQ; kQ++) LQ[kQ] = kQ;
          QQ > 1 && LQ.sort(((QQ, wQ) => FQ[QQ] - FQ[wQ]));
          const qQ = this.mergeGap;
          let oQ = FQ[LQ[0]],
            DQ = wQ[LQ[0]];
          for (let kQ = 1; kQ < QQ; kQ++) {
            const QQ = LQ[kQ];
            FQ[QQ] - DQ <= qQ ? DQ = Math.max(DQ, wQ[QQ]) : (this.send(oQ, DQ), oQ = FQ[QQ], DQ = wQ[QQ])
          }
          this.send(oQ, DQ), FQ.length = 0, wQ.length = 0
        }
        this.holding = !1
      }
      pC() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const QQ = this.freed;
        for (let FQ = 0; FQ < QQ.length; FQ += 2) this.PA.free(QQ[FQ] / fD, QQ[FQ + 1] / fD);
        QQ.length = 0
      }
      send(QQ, FQ) {
        this.device.queue.writeBuffer(this.gpu, QQ, this.bytes.buffer, QQ, FQ - QQ);
        for (const wQ of this.replaced) {
          const LQ = Math.min(FQ, wQ.size);
          LQ > QQ && this.device.queue.writeBuffer(wQ, QQ, this.bytes.buffer, QQ, LQ - QQ)
        }
      }
      markDirty(QQ, FQ) {
        QQ &= -4, FQ = FQ + 3 & -4, this.holding ? (this.dirtyStarts.push(QQ), this.dirtyEnds.push(FQ)) : this.send(QQ, FQ)
      }
      grow(QQ) {
        const FQ = this.PA.MH,
          wQ = Math.max(2 * FQ, QQ),
          LQ = new Uint8Array(wQ * fD);
        LQ.set(this.bytes);
        const qQ = this.gpu;
        this.gpu = this.createGpu(LQ.byteLength), this.bytes = LQ, this.PA.grow(wQ), qQ && (this.replaced.push(qQ), this.onReplaced(qQ)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, FQ * fD)
      }
      createGpu(QQ) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: QQ,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function hD(QQ) {
      return Array.isArray(QQ) ? new Float32Array(QQ) : QQ
    }

    function JD(QQ, FQ, wQ, LQ, qQ) {
      const oQ = Iq(qQ),
        DQ = Math.min(qQ, LQ.byteLength);
      if (oQ === DQ && LQ.byteOffset % 4 === 0) return void QQ.queue.writeBuffer(FQ, wQ, LQ.buffer, LQ.byteOffset, oQ);
      const kQ = new Uint8Array(oQ);
      kQ.set(new Uint8Array(LQ.buffer, LQ.byteOffset, DQ)), QQ.queue.writeBuffer(FQ, wQ, kQ)
    }

    function ED(QQ, FQ, wQ) {
      const LQ = "linear",
        qQ = "nearest";
      let oQ = qQ,
        DQ = qQ,
        kQ = "nearest",
        vQ = !FQ;
      switch (QQ) {
        case 11:
          oQ = LQ, DQ = LQ;
          break;
        case 3:
          oQ = LQ, DQ = LQ, kQ = FQ ? "linear" : "nearest";
          break;
        case 8:
          kQ = FQ ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          DQ = LQ;
          break;
        case 6:
          DQ = LQ, kQ = FQ ? "linear" : "nearest";
          break;
        case 7:
          DQ = LQ, vQ = !0;
          break;
        case 9:
          oQ = LQ;
          break;
        case 10:
          oQ = LQ, kQ = FQ ? "linear" : "nearest";
          break;
        case 2:
          oQ = LQ, DQ = LQ, wQ > 1 ? (kQ = "linear", vQ = !1) : vQ = !0;
          break;
        case 12:
          oQ = LQ, vQ = !0;
          break;
        default:
          vQ = !0
      }
      return wQ > 1 && !vQ ? {
        magFilter: LQ,
        minFilter: LQ,
        mipmapFilter: "linear",
        maxAnisotropy: wQ
      } : {
        magFilter: oQ,
        minFilter: DQ,
        mipmapFilter: kQ,
        ...vQ ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function nD(QQ) {
      return 0 === QQ ? "clamp-to-edge" : 2 === QQ ? "mirror-repeat" : "repeat"
    }
    class gD {
      constructor(QQ, FQ) {
        let {
          vertexArena: wQ = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = QQ, this.device = FQ, this.buffers = new WeakMap, this.T_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = wQ ? new VD(FQ, (QQ => {
          var FQ;
          null === (FQ = this.onDestroy) || void 0 === FQ || FQ.call(this, QQ), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var QQ;
        null === (QQ = this.arena) || void 0 === QQ || QQ.flush()
      }
      endUploadFrame() {
        var QQ;
        null === (QQ = this.arena) || void 0 === QQ || QQ.pC()
      }
      vertexBufferCreated(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wQ ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(QQ);
        const qQ = hD(FQ);
        QQ.MH = qQ.byteLength, this.buffers.set(QQ, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: wQ && null !== this.arena,
          pending: qQ,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: LQ
        })
      }
      vertexBufferUpdated(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        const qQ = this.buffers.get(QQ);
        if (!qQ) return;
        const oQ = hD(FQ),
          DQ = void 0 === LQ ? oQ.byteLength : Math.min(LQ, oQ.byteLength);
        this.update(qQ, oQ, wQ, DQ)
      }
      vertexBufferFloatsUpdated(QQ, FQ, wQ, LQ) {
        const qQ = this.buffers.get(QQ);
        if (!qQ) return;
        const oQ = wQ * Float32Array.BYTES_PER_ELEMENT,
          DQ = (LQ - wQ) * Float32Array.BYTES_PER_ELEMENT;
        qQ.slot >= 0 && DQ > 0 && oQ + DQ <= qQ.size ? this.writeSlot(qQ, oQ, FQ, FQ.byteOffset + oQ, DQ, !1) : qQ.gpu && DQ > 0 && oQ + DQ <= qQ.gpu.size ? this.device.queue.writeBuffer(qQ.gpu, oQ, FQ.buffer, FQ.byteOffset + oQ, DQ) : this.update(qQ, FQ.subarray(wQ, LQ), oQ, DQ)
      }
      indexBufferCreated(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(QQ);
        const LQ = function(QQ) {
          if (QQ instanceof Uint16Array || QQ instanceof Uint32Array) return QQ;
          for (let FQ = 0; FQ < QQ.length; FQ++)
            if (QQ[FQ] >= 65535) return new Uint32Array(QQ);
          return new Uint16Array(QQ)
        }(FQ);
        QQ.is32Bits = 4 === LQ.BYTES_PER_ELEMENT, QQ.MH = LQ.byteLength, this.buffers.set(QQ, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: LQ,
          ownsPending: LQ !== FQ,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: wQ
        })
      }
      bufferDeleted(QQ) {
        const FQ = this.buffers.get(QQ);
        null !== FQ && void 0 !== FQ && FQ.gpu ? (this.destroyBuffer(FQ.gpu), this.gpuBuffersVersion++) : FQ && FQ.slot >= 0 && (this.arena.free(FQ.slot, FQ.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(QQ)
      }
      update(QQ, FQ, wQ, LQ) {
        if (QQ.slot >= 0) this.updateSlot(QQ, FQ, wQ, LQ);
        else if (QQ.gpu) {
          if (wQ + Iq(LQ) > QQ.gpu.size) {
            const FQ = this.device.createBuffer({
                label: QQ.label,
                size: Iq(Math.max(2 * QQ.gpu.size, wQ + LQ)),
                usage: QQ.usage | GPUBufferUsage.COPY_SRC
              }),
              qQ = this.device.createCommandEncoder();
            qQ.copyBufferToBuffer(QQ.gpu, 0, FQ, 0, QQ.gpu.size), this.device.queue.submit([qQ.finish()]), this.destroyBuffer(QQ.gpu), this.gpuBuffersVersion++, QQ.gpu = FQ
          }
          JD(this.device, QQ.gpu, wQ, FQ, LQ)
        } else {
          const oQ = new Uint8Array(FQ.buffer, FQ.byteOffset, LQ),
            DQ = QQ.pending;
          if (DQ && QQ.ownsPending && wQ + LQ <= DQ.byteLength) new Uint8Array(DQ.buffer, DQ.byteOffset, DQ.byteLength).set(oQ, wQ);
          else if (DQ && 0 === wQ && LQ === DQ.byteLength && FQ.byteLength === LQ) QQ.pending = FQ, QQ.ownsPending = !1;
          else {
            var qQ;
            const FQ = new Uint8Array(Math.max(null !== (qQ = null === DQ || void 0 === DQ ? void 0 : DQ.byteLength) && void 0 !== qQ ? qQ : 0, wQ + LQ));
            DQ && FQ.set(new Uint8Array(DQ.buffer, DQ.byteOffset, DQ.byteLength)), FQ.set(oQ, wQ), QQ.pending = FQ, QQ.ownsPending = !0
          }
        }
      }
      updateSlot(QQ, FQ, wQ, LQ) {
        const qQ = this.arena;
        wQ + Iq(LQ) > QQ.size && (QQ.size = Iq(Math.max(2 * QQ.size, wQ + LQ)), qQ.growTo(QQ.slot + QQ.size), this.gpuBuffersVersion++), 0 === LQ ? this.writeSlot(QQ, wQ, ZD, 0, 4, !1) : this.writeSlot(QQ, wQ, FQ, FQ.byteOffset, LQ, !0)
      }
      writeSlot(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = FQ + (oQ ? Iq(qQ) : qQ);
        DQ > QQ.slotBytes && this.moveSlot(QQ, DQ), this.arena.write(QQ.slot + FQ, wQ, LQ, qQ, oQ)
      }
      moveSlot(QQ, FQ) {
        const wQ = this.arena,
          LQ = VD.slotBytes(Math.max(FQ, Math.min(2 * QQ.slotBytes, QQ.size))),
          qQ = wQ.allocate(LQ, null, QQ.size);
        wQ.move(QQ.slot, qQ, QQ.slotBytes), wQ.free(QQ.slot, QQ.slotBytes), QQ.slot = qQ, QQ.slotBytes = LQ, this.gpuBuffersVersion++
      }
      cover(QQ, FQ) {
        const wQ = this.buffers.get(QQ);
        if (!wQ || wQ.slot < 0) return !1;
        const LQ = Math.min(FQ, wQ.size);
        return !(LQ <= wQ.slotBytes) && (this.moveSlot(wQ, LQ), !0)
      }
      destroyBuffer(QQ) {
        var FQ;
        null === (FQ = this.onDestroy) || void 0 === FQ || FQ.call(this, QQ), QQ.destroy()
      }
      gpuBuffer(QQ) {
        const FQ = this.buffers.get(QQ);
        if (!FQ) return null;
        if (FQ.slot >= 0) return this.arena.buffer;
        if (FQ.arena && FQ.pending) {
          const QQ = FQ.pending,
            wQ = this.arena;
          return FQ.size = Iq(QQ.byteLength), FQ.slotBytes = VD.slotBytes(function(QQ) {
            const FQ = new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength);
            let wQ = FQ.length;
            if (QQ.byteOffset % 4 === 0) {
              for (; wQ % 4 !== 0 && 0 === FQ[wQ - 1];) wQ--;
              if (wQ % 4 === 0) {
                const FQ = new Uint32Array(QQ.buffer, QQ.byteOffset, wQ / 4);
                let LQ = FQ.length;
                for (; LQ > 0 && 0 === FQ[LQ - 1];) LQ--;
                wQ = 4 * LQ
              }
            }
            for (; wQ > 0 && 0 === FQ[wQ - 1];) wQ--;
            return wQ
          }(QQ)), FQ.slot = wQ.allocate(FQ.slotBytes, QQ, FQ.size), FQ.pending = null, wQ.buffer
        }
        if (!FQ.gpu && FQ.pending) {
          const QQ = FQ.pending;
          FQ.gpu = this.device.createBuffer({
            label: FQ.label,
            size: Iq(QQ.byteLength),
            usage: FQ.usage
          }), JD(this.device, FQ.gpu, 0, QQ, QQ.byteLength), FQ.pending = null
        }
        return FQ.gpu
      }
      gpuOffset(QQ) {
        var FQ, wQ;
        const LQ = null !== (FQ = null === (wQ = this.buffers.get(QQ)) || void 0 === wQ ? void 0 : wQ.slot) && void 0 !== FQ ? FQ : -1;
        return LQ < 0 ? 0 : LQ
      }
      gpuEnd(QQ) {
        var FQ, wQ;
        const LQ = this.buffers.get(QQ);
        return LQ ? LQ.slot >= 0 ? LQ.slot + LQ.size : null !== (FQ = null === (wQ = LQ.gpu) || void 0 === wQ ? void 0 : wQ.size) && void 0 !== FQ ? FQ : 0 : 0
      }
      vertexInput(QQ, FQ, wQ) {
        var LQ, qQ, oQ, DQ;
        return null !== (LQ = null !== (qQ = wQ && this.modelInput(wQ, FQ)) && void 0 !== qQ ? qQ : null === (oQ = null !== (DQ = this.T_.get(QQ)) && void 0 !== DQ ? DQ : this.batchUploads.get(QQ)) || void 0 === oQ ? void 0 : oQ.inputs[FQ]) && void 0 !== LQ ? LQ : null
      }
      modelInput(QQ, FQ) {
        const wQ = this.geometrySlot(QQ);
        let LQ = wQ.inputs.get(FQ);
        if (void 0 === LQ) {
          const qQ = QQ.vertexAttributes.find((QQ => QQ.kind === FQ));
          LQ = qQ ? new nQ(this.modelKey(wQ, qQ.data, !1), qQ.offset, qQ.stride, qQ.components, !1, qQ.glType, qQ.isNormalized) : null, wQ.inputs.set(FQ, LQ)
        }
        return LQ
      }
      modelIndex(QQ) {
        return QQ.indexData && this.modelKey(this.geometrySlot(QQ), QQ.indexData, !0)
      }
      geometrySlot(QQ) {
        let FQ = QQ.gpu[OQ.e.lite];
        if (!FQ) {
          const wQ = new Map,
            LQ = () => {
              for (const QQ of wQ.values()) this.bufferDeleted(QQ)
            },
            qQ = QQ => {
              const FQ = wQ.get(QQ);
              FQ && this.vertexBufferUpdated(FQ, QQ)
            };
          FQ = {
            keys: wQ,
            inputs: new Map,
            release: LQ,
            updated: qQ
          }, QQ.gpu[OQ.e.lite] = FQ
        }
        return FQ
      }
      modelKey(QQ, FQ, wQ) {
        let LQ = QQ.keys.get(FQ);
        if (!LQ) {
          if (wQ) {
            const QQ = {
              MH: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(QQ, FQ, "model-indices"), LQ = QQ
          } else LQ = {
            MH: 0
          }, this.vertexBufferCreated(LQ, FQ, !1, "model-vertices");
          QQ.keys.set(FQ, LQ)
        }
        return LQ
      }
      indexFormat(QQ) {
        return QQ.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(QQ, FQ) {
        --QQ.refs > 0 || (this.releaseTexture(QQ), jD(QQ.images), null !== FQ && this.textures.delete(FQ))
      }
      load(QQ, FQ) {
        const wQ = FQ.decoded = async function(QQ) {
          if ("cube" === QQ.kind) return async function(QQ) {
            if (6 !== QQ.length) throw new Error(`${QQ.length} files where six faces were expected`);
            const FQ = await aD(QQ.map((QQ => lq(QQ)))),
              wQ = FQ[0].width;
            return aD(FQ.map((async QQ => {
              if (QQ.width === wQ && QQ.height === wQ) return QQ;
              try {
                return await createImageBitmap(QQ, {
                  ...Kq,
                  resizeWidth: wQ,
                  resizeHeight: wQ
                })
              } finally {
                QQ.close()
              }
            })))
          }(QQ.files);
          if ("data" === QQ.kind && QQ.data) return [await createImageBitmap(new Blob([QQ.data]), Kq)];
          return [await lq(PD(QQ))]
        }(QQ.source).then((QQ => {
          0 === FQ.refs ? jD(QQ) : FQ.images = QQ
        }));
        this.track(FQ, PD(QQ.source), wQ, (() => {
          FQ.wanted && !FQ.failed && FQ.refs > 0 && this.upload(QQ, FQ)
        }))
      }
      canvasUpdated(QQ, FQ, wQ) {
        const {
          state: LQ
        } = this.textureSlot(QQ);
        LQ.dynamicSource = {
          invertY: FQ,
          premultiplied: wQ
        }, LQ.dynamic && this.pushDynamic(QQ.source, LQ)
      }
      async atlasArray(QQ, FQ, wQ) {
        const LQ = await Xq(this.device, QQ, FQ, wQ);
        if (!this.atlasBindings.has(LQ)) {
          const QQ = (0, UD.b)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(LQ, {
            view: LQ.texture.createView({
              dimension: "2d-array"
            }),
            sampler: QQ
          })
        }
        return LQ
      }
      boundTexture(QQ) {
        const FQ = this.atlasBindings.get(QQ);
        if (FQ) return FQ;
        const wQ = QQ;
        if (wQ.released) return null;
        const LQ = this.textureSlot(wQ, !0),
          {
            state: qQ
          } = LQ;
        if (!qQ.view && (qQ.wanted = !0, qQ.loading || qQ.failed || this.upload(wQ, qQ), !qQ.view)) return null;
        const oQ = this.chosenSampler(wQ, LQ),
          DQ = LQ.bound;
        return DQ && DQ.view === qQ.view && DQ.sampler === oQ ? DQ : (LQ.bound = {
          view: qQ.view,
          sampler: oQ
        }, LQ.bound)
      }
      textureLoaded(QQ) {
        var FQ, wQ;
        return null !== (FQ = null === (wQ = QQ.gpu[OQ.e.lite]) || void 0 === wQ ? void 0 : wQ.state.decoded) && void 0 !== FQ ? FQ : null
      }
      textureFailed(QQ) {
        var FQ;
        return !0 === (null === (FQ = QQ.gpu[OQ.e.lite]) || void 0 === FQ ? void 0 : FQ.state.failed)
      }
      chosenSampler(QQ, FQ) {
        const {
          samplingMode: wQ,
          wrapU: LQ,
          wrapV: qQ
        } = QQ.sampler, oQ = FQ.state.hasMips, DQ = function(QQ, FQ) {
          const {
            bilinear: wQ,
            trilinear: LQ
          } = OQ.f;
          return !FQ && QQ !== wQ || 11 !== QQ && QQ !== LQ && QQ !== wQ ? 1 : 4
        }(wQ, oQ), kQ = FQ.sampler;
        if (kQ && kQ.samplingMode === wQ && kQ.hasMips === oQ && kQ.anisotropy === DQ && kQ.wrapU === LQ && kQ.wrapV === qQ) return kQ.sampler;
        const vQ = this.samplerFor(wQ, oQ, DQ, LQ, qQ);
        return FQ.sampler = {
          samplingMode: wQ,
          hasMips: oQ,
          anisotropy: DQ,
          wrapU: LQ,
          wrapV: qQ,
          sampler: vQ
        }, vQ
      }
      releaseTexture(QQ) {
        var FQ, wQ;
        QQ.view && (null === (wQ = this.onDestroy) || void 0 === wQ || wQ.call(this, QQ.view));
        null === (FQ = QQ.destroy) || void 0 === FQ || FQ.call(QQ)
      }
      textureSlot(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = QQ.gpu[OQ.e.lite];
        if (wQ) return wQ;
        const LQ = function(QQ) {
          let {
            source: FQ,
            sampler: wQ
          } = QQ;
          return "canvas" === FQ.kind ? null : `${FQ.kind}|${PD(FQ)}|${wQ.noMipmap}|${wQ.samplingMode}|${wQ.invertY}`
        }(QQ);
        let qQ = null === LQ ? void 0 : this.textures.get(LQ);
        qQ || (qQ = {
          refs: 0,
          view: null,
          destroy: null,
          loading: !1,
          decoded: null,
          failed: !1,
          wanted: !1,
          hasMips: !1,
          images: null,
          dynamic: null,
          dynamicSource: null
        }, null !== LQ && (this.textures.set(LQ, qQ), this.load(QQ, qQ), FQ && this.firstBindDecodes++)), qQ.refs++;
        const oQ = qQ,
          DQ = {
            state: qQ,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(oQ, LQ)
            }
          };
        return QQ.gpu[OQ.e.lite] = DQ, DQ
      }
      samplerFor(QQ, FQ, wQ, LQ, qQ) {
        const oQ = `${QQ}|${FQ}|${wQ}|${LQ}|${qQ}`;
        let DQ = this.samplers.get(oQ);
        if (!DQ) {
          const kQ = {
            ...ED(QQ, FQ, wQ),
            addressModeU: nD(LQ),
            addressModeV: nD(qQ)
          };
          DQ = (0, UD.b)(this.engine, kQ), this.samplers.set(oQ, DQ)
        }
        return DQ
      }
      upload(QQ, FQ) {
        const {
          source: wQ,
          sampler: LQ
        } = QQ;
        FQ.hasMips = !LQ.noMipmap, "canvas" === wQ.kind ? this.createDynamic(wQ, FQ) : "cube" === wQ.kind ? this.uploadCube(FQ, wQ.luminance) : this.uploadImage(FQ, !0 === LQ.invertY, wQ.url)
      }
      uploadImage(QQ, FQ, wQ) {
        const [LQ] = QQ.images;
        QQ.images = null;
        const qQ = (0, ND.b)(this.engine, LQ, {
          mipMaps: QQ.hasMips,
          invertY: FQ,
          srgb: !1
        }).then((FQ => {
          LQ.close(), 0 !== QQ.refs ? (QQ.view = FQ.view, QQ.destroy = FQ.texture.destroy.bind(FQ.texture)) : FQ.texture.destroy()
        }));
        this.track(QQ, wQ, qQ)
      }
      track(QQ, FQ, wQ, LQ) {
        QQ.loading = !0, this.pending++, wQ.catch((wQ => {
          QQ.failed = !0, console.warn(`Lite: could not load texture ${zq(FQ)}`, wQ)
        })).finally((() => {
          QQ.loading = !1, this.pending--, null === LQ || void 0 === LQ || LQ()
        }))
      }
      uploadCube(QQ, FQ) {
        const wQ = QQ.images;
        QQ.images = null;
        const LQ = lD(this.engine, this.device, wQ, (0, OQ.s)(FQ), QQ.hasMips);
        QQ.view = LQ.createView({
          dimension: "cube"
        }), QQ.destroy = () => {
          LQ.destroy()
        }
      }
      createDynamic(QQ, FQ) {
        const {
          canvas: wQ
        } = QQ, LQ = (0, TD.e)(this.engine, Math.max(1, wQ.width), Math.max(1, wQ.height), {
          mipMaps: FQ.hasMips,
          srgb: !1
        });
        FQ.dynamic = LQ, FQ.view = LQ.view, FQ.destroy = () => {
          LQ.texture.destroy()
        }, this.pushDynamic(QQ, FQ)
      }
      pushDynamic(QQ, FQ) {
        const wQ = FQ.dynamicSource,
          LQ = FQ.dynamic,
          {
            canvas: qQ
          } = QQ;
        if (wQ && LQ && 0 !== qQ.width && 0 !== qQ.height) return qQ.width !== LQ.width || qQ.height !== LQ.height ? (this.releaseTexture(FQ), FQ.dynamic = null, FQ.view = null, void this.createDynamic(QQ, FQ)) : void(0, TD.i)(this.engine, LQ, qQ, {
          invertY: wQ.invertY,
          premultiplyAlpha: wQ.premultiplied
        })
      }
    }

    function PD(QQ) {
      return "cube" === QQ.kind ? QQ.rootUrl : "canvas" === QQ.kind ? "canvas" : QQ.url
    }
    const ZD = new Uint8Array(4);

    function yD(QQ) {
      const FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      QQ._colorAttachment.storeOp = QQ._targetSignature._sampleCount > 1 ? FQ : "store";
      const wQ = QQ._renderPassDescriptor.depthStencilAttachment;
      wQ && (wQ.depthStoreOp = FQ, wQ.stencilStoreOp && (wQ.stencilStoreOp = FQ))
    }
    var BD = wQ(37324),
      dD = wQ(37372),
      Qk = wQ(37052),
      Fk = wQ(39108);
    const wk = new Float64Array([1, 1, 1]),
      Lk = new Float64Array([0, 1, 0]),
      qk = new Float64Array(4),
      Dk = new Float32Array(16),
      kk = new Float64Array(3),
      vk = new Float64Array(4);

    function mk(QQ, FQ, wQ) {
      QQ.fov = FQ.fov, QQ.near = FQ.near, QQ.far = FQ.far, QQ.renderWidth = wQ.renderWidth, QQ.renderHeight = wQ.renderHeight, (0, Qk.w)(FQ.holderRotation, 0, qk, 0), (0, Qk.d)(wk, 0, qk, 0, FQ.holderPosition, 0, Dk);
      const LQ = FQ.Q8;
      kk[0] = LQ[0], kk[1] = LQ[1], kk[2] = LQ[2] + 1;
      const qQ = QQ.viewMatrix;
      (0, Qk.l)(LQ, kk, Lk, qQ), (0, Qk.i)(qQ, 0, qQ), (0, Qk.p)(qQ, Dk, 0, qQ), (0, Qk.i)(qQ, 0, qQ);
      const oQ = QQ.worldMatrix;
      (0, Qk.i)(qQ, 0, oQ), QQ.eye[0] = oQ[12], QQ.eye[1] = oQ[13], QQ.eye[2] = oQ[14], vk[0] = QQ.fov, vk[1] = QQ.renderWidth / QQ.renderHeight, vk[2] = QQ.near, vk[3] = QQ.far, (0, Qk.t)(vk, QQ.projectionMatrix), (0, Qk.p)(qQ, QQ.projectionMatrix, 0, QQ.viewProjectionMatrix), (0, Fk.f)(QQ.viewProjectionMatrix, QQ.frustum)
    }

    function uk(QQ, FQ) {
      let wQ = QQ.frustumPlanes;
      wQ || (wQ = QQ.frustumPlanes = Array.from({
        length: 6
      }, (() => new BD.d(0, 0, 0, 0))));
      for (let LQ = 0; LQ < 6; LQ++) {
        const QQ = wQ[LQ].normal;
        QQ._x = FQ[4 * LQ], QQ._y = FQ[4 * LQ + 1], QQ._z = FQ[4 * LQ + 2], QQ._isDirty = !0, wQ[LQ].d = FQ[4 * LQ + 3]
      }
    }

    function Hk(QQ, FQ) {
      const wQ = FQ.clearColor;
      QQ.clearColour[0] = wQ.r, QQ.clearColour[1] = wQ.g, QQ.clearColour[2] = wQ.b, QQ.clearColour[3] = wQ.a;
      const LQ = FQ.ambientColor;
      QQ.ambientColour[0] = LQ.r, QQ.ambientColour[1] = LQ.g, QQ.ambientColour[2] = LQ.b, QQ.animationRatio = FQ.animationRatio, QQ.frameId = FQ.frameId, QQ.version++
    }

    function bk(QQ) {
      const FQ = QQ.model.view;
      return FQ.animTick = (0, dD.f)(), FQ.timeMs = performance.now(), Hk(FQ, QQ.lA), QQ.model.update(FQ.frameId), FQ
    }

    function Yk(QQ) {
      const FQ = QQ.lA,
        {
          view: wQ,
          yB: LQ
        } = QQ.model;
      return mk(wQ, LQ, FQ.Wx()), FQ.onBeforeRenderObservable.notifyObservers(FQ), uk(FQ, wQ.frustum), FQ.onBeforeCameraRenderObservable.notifyObservers(FQ.activeCamera), bk(QQ)
    }
    var xk = wQ(37026),
      Ak = wQ(37121),
      tk = wQ(37364);

    function ek(QQ) {
      var FQ, wQ;
      const LQ = (0, WQ.jb)(QQ);
      if (!LQ || LQ.diffuseTexture && (0, tk.l)(QQ)) return null;
      const qQ = null === (FQ = (0, WQ.z)(LQ, SQ.l.name)) || void 0 === FQ ? void 0 : FQ.state,
        oQ = null === (wQ = (0, WQ.z)(LQ, go.e.name)) || void 0 === wQ ? void 0 : wQ.state,
        DQ = new Float32Array(16);
      return function(QQ, FQ, wQ, LQ) {
        var qQ, oQ;
        const DQ = YL;
        LQ.set(QQ.diffuseColor, DQ.diffuse), LQ[DQ.diffuse + 3] = QQ.alpha, LQ.set(QQ.ambientColor, DQ.ambientAndCutoff), LQ[DQ.ambientAndCutoff + 3] = QQ.alphaCutOff, LQ.set(QQ.emissiveColor, DQ.emissiveAndLevel), LQ[DQ.emissiveAndLevel + 3] = null !== (qQ = null === (oQ = QQ.diffuseTexture) || void 0 === oQ ? void 0 : oQ.level) && void 0 !== qQ ? qQ : 1, null !== FQ && void 0 !== FQ && FQ.animDataPerTex ? (LQ[DQ.anim + 1] = dD.b, LQ[DQ.anim + 2] = FQ.animDataPerTex.length / 3 - 1) : wQ && (LQ[DQ.anim + 1] = wQ.numAnimStates, LQ[DQ.anim + 2] = wQ.ticksPerAnimState)
      }(LQ, qQ, oQ, DQ), {
        model: LQ,
        atlas: qQ,
        texture: qQ ? "atlas" : LQ.diffuseTexture ? "single" : "none",
        animated: qQ ? !!qQ.animDataPerTex : !!oQ,
        liquid: (0, tk.n)(QQ),
        customRenderMat: (0, tk.l)(QQ),
        uniformData: DQ
      }
    }
    var Mk = wQ(2806);
    class Gk {
      constructor(QQ) {
        this.units = QQ, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var QQ;
        this.buffer.destroy(), null === (QQ = this.twin) || void 0 === QQ || QQ.destroy()
      }
    }
    class pk {
      constructor(QQ, FQ) {
        this.arena = QQ, this.PA = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.PA = new XD(FQ);
        const wQ = new Gk(FQ);
        wQ.buffer = this.createBuffer(wQ, !1), this.backings.push(wQ), this.refresh()
      }
      get MH() {
        return this.PA.MH
      }
      get canGrow() {
        return this.growable && !this.dropped
      }
      get live() {
        return !this.dropped
      }
      get hasTwin() {
        return null !== this.backings[this.backings.length - 1].twin
      }
      get allocatedBytes() {
        let QQ = 0;
        for (const FQ of this.backings) QQ += FQ.units * (this.arena.unitBytes + (FQ.twin ? this.arena.twinUnitBytes : 0));
        return QQ
      }
      holds(QQ) {
        return QQ.start + QQ.length <= this.usable
      }
      lost(QQ) {
        return this.dropped || QQ.start + QQ.length > this.MH
      }
      write(QQ, FQ) {
        const {
          device: wQ,
          unitBytes: LQ
        } = this.arena;
        for (const qQ of this.backings) {
          const oQ = (qQ.units - QQ.start) * LQ;
          oQ > 0 && wQ.queue.writeBuffer(qQ.buffer, QQ.start * LQ, FQ, 0, Math.min(FQ.byteLength, oQ))
        }
      }
      writeLight(QQ, FQ) {
        const {
          device: wQ,
          twinUnitBytes: LQ,
          verticesPerUnit: qQ
        } = this.arena, {
          light: oQ,
          count: DQ
        } = this.arena.twinLight(FQ, Math.min(FQ.length, QQ.length * qQ));
        for (const kQ of this.backings) {
          kQ.twin || (kQ.twin = this.createBuffer(kQ, !0));
          const FQ = (kQ.units - QQ.start) * qQ;
          FQ > 0 && wQ.queue.writeBuffer(kQ.twin, QQ.start * LQ, oQ, 0, Math.min(DQ, FQ))
        }
      }
      grow(QQ) {
        this.arena.assertNotDrawing();
        const {
          device: FQ,
          unitBytes: wQ,
          label: LQ
        } = this.arena, qQ = this.backings[this.backings.length - 1], oQ = new Gk(QQ), DQ = FQ.createCommandEncoder({
          label: `${LQ}-grow`
        });
        oQ.buffer = this.createBuffer(oQ, !1), DQ.copyBufferToBuffer(qQ.buffer, 0, oQ.buffer, 0, qQ.units * wQ), qQ.twin && (oQ.twin = this.createBuffer(oQ, !0), DQ.copyBufferToBuffer(qQ.twin, 0, oQ.twin, 0, qQ.units * this.arena.twinUnitBytes)), FQ.queue.submit([DQ.finish()]), this.backings.push(oQ), this.PA.grow(QQ)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const QQ of this.backings) QQ.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(QQ, FQ) {
        const {
          device: wQ,
          unitBytes: LQ,
          twinUnitBytes: qQ,
          usage: oQ,
          label: DQ
        } = this.arena;
        wQ.pushErrorScope("out-of-memory");
        const kQ = wQ.createBuffer({
          label: FQ ? `${DQ}-light` : DQ,
          size: QQ.units * (FQ ? qQ : LQ),
          usage: (FQ ? this.arena.twinUsage : oQ) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, wQ.popErrorScope().then((wQ => {
          this.arena.awaitingVerdict--, this.settle(QQ, FQ, !wQ, !0)
        }), (wQ => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${DQ} buffer, taken as failed: ${String(wQ)}`), this.settle(QQ, FQ, !1, !1)
        })), kQ
      }
      settle(QQ, FQ, wQ, LQ) {
        const qQ = this.backings.indexOf(QQ);
        if (!(this.dropped || qQ < 0)) {
          if (!wQ) {
            if (LQ && this.arena.ranOutOfMemory(QQ.units, QQ.units * (FQ ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === qQ) return void this.drop();
            for (const QQ of this.backings.splice(qQ)) QQ.destroy();
            return this.PA.truncate(this.backings[qQ - 1].units), this.growable = !1, void this.promote()
          }
          FQ ? QQ.twinReady = !0 : (QQ.bufferReady = !0, this.arena.allocatedBuffer(QQ.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: QQ
        } = this;
        let FQ = 0;
        for (; FQ + 1 < QQ.length && QQ[FQ].ready && QQ[FQ + 1].ready;) FQ++;
        for (const wQ of QQ.splice(0, FQ)) wQ.destroy();
        this.refresh()
      }
      refresh() {
        const QQ = this.backings[0];
        this.buffer = QQ.buffer, this.twin = QQ.twinReady ? QQ.twin : null, this.usable = !this.dropped && QQ.bufferReady ? QQ.units : 0
      }
    }
    class ck {
      constructor(QQ, FQ, wQ, LQ) {
        let {
          verticesPerUnit: qQ = 1,
          twinUsage: oQ = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = QQ, this.unitBytes = FQ, this.usage = wQ, this.label = LQ, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, mF.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), FQ % 4 !== 0) throw new Error(`${LQ}: ${FQ}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = qQ, this.twinUsage = oQ, this.twinValueBytes = qQ > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * qQ
      }
      twinLight(QQ, FQ) {
        if (4 === this.twinValueBytes) return this.widened.length < FQ && (this.widened = new Float32Array(Math.max(FQ, 2 * this.widened.length))), this.widened.set(QQ.subarray(0, FQ)), {
          light: this.widened,
          count: FQ
        };
        const wQ = FQ % this.verticesPerUnit;
        if (0 === wQ) return {
          light: QQ,
          count: FQ
        };
        const LQ = FQ - wQ + this.verticesPerUnit;
        return this.padded.length < LQ && (this.padded = new Uint16Array(Math.max(LQ, 2 * this.padded.length))), this.padded.set(QQ.subarray(0, FQ)), this.padded.fill(0, FQ, LQ), {
          light: this.padded,
          count: LQ
        }
      }
      allocate(QQ) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), QQ > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const qQ of this.pages) {
          const FQ = qQ.PA.allocate(QQ);
          if (FQ >= 0) return {
            page: qQ,
            start: FQ,
            length: QQ
          }
        }
        const FQ = this.pages[this.pages.length - 1];
        if (null !== FQ && void 0 !== FQ && FQ.canGrow) {
          const wQ = Math.min(this.ceiling, Math.max(2 * FQ.MH, FQ.MH + QQ));
          if (wQ - FQ.MH >= QQ) return FQ.grow(wQ), {
            page: FQ,
            start: FQ.PA.allocate(QQ),
            length: QQ
          }
        }
        FQ && FQ !== this.pages[0] && 0 === FQ.PA.used && FQ.drop();
        const wQ = Math.floor(1048576 / this.unitBytes),
          LQ = new pk(this, Math.max(QQ, Math.min(this.ceiling, wQ)));
        return this.pages.push(LQ), {
          page: LQ,
          start: LQ.PA.allocate(QQ),
          length: QQ
        }
      }
      free(QQ) {
        this.assertNotDrawing();
        const {
          page: FQ
        } = QQ;
        FQ.PA.free(QQ.start, QQ.length), 0 === FQ.PA.used && FQ !== this.pages[0] && FQ !== this.pages[this.pages.length - 1] && FQ.drop()
      }
      remove(QQ) {
        const FQ = this.pages.indexOf(QQ);
        FQ >= 0 && this.pages.splice(FQ, 1)
      }
      ranOutOfMemory(QQ, FQ) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${FQ}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, QQ), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, QQ) / 2));
        const wQ = performance.now();
        wQ >= this.shortageUntil && (this.forgetFailedAt = wQ + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = wQ + 1e3)
      }
      allocatedBuffer(QQ) {
        QQ >= this.failed && (this.failed = 1 / 0);
        const FQ = Math.min(2 * QQ, Math.floor((QQ + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, FQ))
      }
      stats() {
        let QQ = 0,
          FQ = 0,
          wQ = 0,
          LQ = 0;
        for (const qQ of this.pages) QQ += qQ.MH, FQ += qQ.PA.used, wQ += qQ.hasTwin ? qQ.MH * this.twinUnitBytes : 0, LQ += qQ.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: QQ * this.unitBytes,
          usedBytes: FQ * this.unitBytes,
          twinBytes: wQ,
          allocatedBytes: LQ
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: QQ,
          maxStorageBufferBindingSize: FQ
        } = this.device.limits;
        let wQ = Math.floor(Math.min(67108864, QQ) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (wQ = Math.min(wQ, Math.floor(FQ / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (wQ = Math.min(wQ, Math.floor(FQ / this.twinUnitBytes))), wQ
      }
    }
    const Ck = 16383;

    function Sk(QQ, FQ, wQ, LQ, qQ) {
      let oQ = 0;
      for (let DQ = wQ; DQ < LQ; DQ += Ck) QQ.drawIndexed(6 * Math.min(Ck, LQ - DQ), 1, 0, FQ + 4 * DQ, qQ), oQ++;
      return oQ
    }
    class ik {
      constructor(QQ, FQ) {
        this.recordsGroup = FQ, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const wQ = iF.g.strideWithoutAtlas;
        this.vertexArena = new ck(QQ, wQ, GPUBufferUsage.VERTEX, `terrain-vertices-${wQ}`), this.quadArena = new ck(QQ, Ak.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const LQ = (0, WF.e)(new Uint16Array(98298), Ck);
        this.quadPattern = QQ.createBuffer({
          label: "terrain-quad-pattern",
          size: LQ.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), QQ.queue.writeBuffer(this.quadPattern, 0, LQ)
      }
      set(QQ, FQ) {
        const wQ = FQ.packedVertices,
          LQ = wQ ? this.quadArena.allocate(QQ.faceCount) : this.vertexArena.allocate(QQ.vertexCount);
        if (!LQ) return !1;
        QQ.vertices = LQ;
        const qQ = wQ ? new Uint8Array(wQ.buffer, wQ.byteOffset, wQ.byteLength) : new Uint8Array(FQ.vertices);
        return LQ.page.write(LQ, qQ), !0
      }
      setLight(QQ, FQ) {
        const {
          vertices: wQ
        } = QQ;
        wQ && 0 !== FQ.length && wQ.page.live && (FQ.length < QQ.vertexCount ? wQ.page.arena.warnOnce("shortLight", `a part's ${FQ.length} light values are fewer than its ${QQ.vertexCount} vertices, so its light is left as it was`) : (wQ.page.writeLight(wQ, FQ), QQ.lit = !0))
      }
      lightFullSky(QQ, FQ) {
        this.fullSky.length < FQ && (this.fullSky = new Uint16Array(Math.max(FQ, 4096)).fill(Mk.h));
        for (const wQ of QQ) {
          const QQ = wQ.vertices;
          QQ.page.live && (QQ.page.writeLight(QQ, this.fullSky), wQ.lit = !0)
        }
      }
      backed(QQ) {
        const {
          vertices: FQ
        } = QQ;
        return !!FQ && FQ.page.holds(FQ)
      }
      lost(QQ) {
        const {
          vertices: FQ
        } = QQ;
        return !!FQ && FQ.page.lost(FQ)
      }
      release(QQ) {
        QQ.vertices && QQ.vertices.page.arena.free(QQ.vertices), QQ.vertices = null, QQ.lit = !1
      }
      setDrawing(QQ) {
        this.forgetBound()
      }
      draw(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FQ.faceCount;
        const oQ = FQ.vertices,
          DQ = oQ.page,
          kQ = wQ ? DQ.twin : null;
        if (!DQ.holds(oQ) || wQ && !kQ) return 0;
        const {
          verticesPerUnit: vQ
        } = DQ.arena;
        let mQ = oQ.start * vQ;
        this.boundPattern || (QQ.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const uQ = LQ + qQ;
        if (vQ > 1) return DQ.buffer === this.boundRecords && kQ === this.boundRecordsLight || (QQ.setBindGroup(1, this.recordsGroup(DQ.buffer, kQ)), this.boundRecords = DQ.buffer, this.boundRecordsLight = kQ), Sk(QQ, mQ, LQ, uQ, FQ.slot);
        DQ.buffer !== this.boundVertices && (QQ.setVertexBuffer(0, DQ.buffer), this.boundVertices = DQ.buffer), kQ && kQ !== this.boundLight && (QQ.setVertexBuffer(1, kQ), this.boundLight = kQ);
        const HQ = FQ.faceCount;
        return uQ <= HQ ? Sk(QQ, mQ, LQ, uQ, FQ.slot) : Sk(QQ, mQ, LQ, HQ, FQ.slot) + Sk(QQ, mQ, Math.max(LQ, HQ) - HQ, uQ - HQ, FQ.slot)
      }
      get buffersAwaitingVerdict() {
        let QQ = 0;
        for (const FQ of this.arenas()) QQ += FQ.awaitingVerdict;
        return QQ
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Wk {
      constructor(QQ, FQ, wQ, LQ) {
        this.device = QQ, this.splitBefore = FQ, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = QQ.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const qQ = QQ.createShaderModule({
          label: "scene-depth-copy",
          code: (oQ = wQ._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${oQ?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var oQ;
        QQ.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: qQ,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: qQ,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((QQ => {
          this.pipeline = QQ, this.building = !1
        }), (QQ => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", QQ)
        })), wQ._executeWithTransmission = () => this.execute(wQ, LQ)
      }
      get compiling() {
        return this.building
      }
      setWanted(QQ) {
        this.wanted = QQ
      }
      setPlanes(QQ, FQ) {
        QQ === this.near && FQ === this.far || (this.near = QQ, this.far = FQ, this.unproject[0] = QQ / (FQ - QQ), this.unproject[1] = FQ * QQ / (FQ - QQ), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.copy) || void 0 === FQ ? void 0 : FQ.view) && void 0 !== QQ ? QQ : null
      }
      execute(QQ, FQ) {
        var wQ;
        null === (wQ = this.retired) || void 0 === wQ || wQ.destroy(), this.retired = null;
        const LQ = QF(FQ),
          qQ = QQ._transparentBindings,
          oQ = this.wanted && this.pipeline ? this.splitIndex(qQ) : -1,
          DQ = QQ._colorAttachment,
          kQ = DQ.resolveTarget;
        oQ >= 0 && (DQ.resolveTarget = void 0, yD(QQ, !0));
        let vQ = LQ.beginRenderPass(QQ._renderPassDescriptor);
        vQ.setBindGroup(0, QQ._sceneBG);
        let mQ = this.drawList(vQ, FQ, QQ._opaqueBindings, 0, QQ._opaqueBindings.length);
        if (mQ += this.drawList(vQ, FQ, QQ._directBindings, 0, QQ._directBindings.length), mQ += this.drawList(vQ, FQ, qQ, 0, oQ >= 0 ? oQ : qQ.length), vQ.end(), oQ < 0) return mQ;
        yD(QQ);
        const uQ = QQ._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: HQ,
            stencilLoadOp: bQ
          } = uQ,
          YQ = DQ.loadOp;
        DQ.resolveTarget = kQ;
        try {
          this.copyDepth(LQ, QQ), DQ.loadOp = "load", uQ.depthLoadOp = "load", bQ && (uQ.stencilLoadOp = "load"), vQ = LQ.beginRenderPass(QQ._renderPassDescriptor), vQ.setBindGroup(0, QQ._sceneBG), mQ += this.drawList(vQ, FQ, qQ, oQ, qQ.length), vQ.end()
        } finally {
          DQ.loadOp = YQ, uQ.depthLoadOp = HQ, uQ.stencilLoadOp = bQ
        }
        return mQ
      }
      splitIndex(QQ) {
        for (let FQ = 0; FQ < QQ.length; FQ++)
          if (QQ[FQ].renderable === this.splitBefore) return FQ;
        return -1
      }
      drawList(QQ, FQ, wQ, LQ, qQ) {
        let oQ = null,
          DQ = 0;
        for (let kQ = LQ; kQ < qQ; kQ++) {
          const LQ = wQ[kQ],
            qQ = LQ.renderable.mesh;
          qQ && !1 === qQ.visible || (LQ.pipeline !== oQ && (QQ.setPipeline(LQ.pipeline), oQ = LQ.pipeline), DQ += LQ.draw(QQ, FQ))
        }
        return DQ
      }
      copyDepth(QQ, FQ) {
        var wQ, LQ;
        const qQ = (null !== (wQ = FQ._config.depth) && void 0 !== wQ ? wQ : FQ._config.rt)._depthTexture,
          oQ = (null === (LQ = this.copy) || void 0 === LQ ? void 0 : LQ.source) === qQ ? this.copy : this.remakeCopy(qQ),
          DQ = QQ.beginRenderPass(oQ.pass);
        DQ.setPipeline(this.pipeline), DQ.setBindGroup(0, oQ.bindGroup), DQ.draw(3), DQ.end()
      }
      remakeCopy(QQ) {
        var FQ, wQ;
        this.retired = null !== (FQ = null === (wQ = this.copy) || void 0 === wQ ? void 0 : wQ.texture) && void 0 !== FQ ? FQ : null;
        const LQ = this.device.createTexture({
            label: "scene-depth",
            size: [QQ.width, QQ.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          qQ = LQ.createView(),
          oQ = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: QQ.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          DQ = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: qQ,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: QQ,
          texture: LQ,
          view: qQ,
          bindGroup: oQ,
          pass: DQ
        }, this.copy
      }
    }
    const Rk = "rgba8unorm";

    function Ok(QQ) {
      return QQ ? 15 : 1
    }
    class sk {
      constructor(QQ, FQ, wQ, LQ) {
        this.device = QQ, this.terrain = LQ, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = FQ._targetSignature._sampleCount > 1, this.cameraBuffer = QQ.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = QQ.createBindGroupLayout({
          label: "sun-shadow-mask",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "depth"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "float"
            }
          }]
        });
        const qQ = QQ.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = QQ.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: qQ,
          entries: []
        });
        const oQ = QQ.createShaderModule({
          label: "sun-shadow-mask",
          code: (DQ = this.edge, `${(0,RF.F)()}${aw({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${DQ?Ow:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Ok(DQ)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${DQ?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var DQ;
        QQ.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: QQ.createPipelineLayout({
            bindGroupLayouts: [this.layout, qQ, qQ, ao(QQ, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: oQ,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: oQ,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((QQ => {
          this.pipeline = QQ, this.building = !1
        }), (QQ => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", QQ)
        }));
        const kQ = FQ._executeWithTransmission;
        FQ._executeWithTransmission = QQ => this.execute(FQ, wQ, (() => kQ ? kQ(QQ) : function(QQ, FQ) {
          const wQ = QF(FQ).beginRenderPass(QQ._renderPassDescriptor);
          wQ.setBindGroup(0, QQ._sceneBG);
          let LQ = rk(wQ, FQ, QQ._opaqueBindings);
          return LQ += rk(wQ, FQ, QQ._directBindings), LQ += rk(wQ, FQ, QQ._transparentBindings), wQ.end(), LQ
        }(FQ, wQ)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.targets) || void 0 === FQ ? void 0 : FQ.maskView) && void 0 !== QQ ? QQ : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(QQ) {
        ! function(QQ, FQ) {
          const wQ = QQ.worldMatrix,
            LQ = QQ.projectionMatrix,
            qQ = 1 / LQ[0],
            oQ = 1 / LQ[5],
            DQ = QQ.far * QQ.near / (QQ.far - QQ.near);
          FQ[0] = QQ.eye[0], FQ[1] = QQ.eye[1], FQ[2] = QQ.eye[2], FQ[3] = 2 ** -23 / DQ, FQ[4] = wQ[0] * qQ, FQ[5] = wQ[1] * qQ, FQ[6] = wQ[2] * qQ, FQ[7] = DQ, FQ[8] = wQ[4] * oQ, FQ[9] = wQ[5] * oQ, FQ[10] = wQ[6] * oQ, FQ[11] = QQ.near / (QQ.far - QQ.near), FQ[12] = wQ[8], FQ[13] = wQ[9], FQ[14] = wQ[10], FQ[15] = 0
        }(QQ, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(QQ, FQ, wQ) {
        if (this.retire(), !this.terrain.readsMask) return wQ();
        const LQ = this.targetsFor(QQ),
          qQ = QF(FQ),
          oQ = QQ._renderPassDescriptor.depthStencilAttachment;
        this.edge || (LQ.prepass.depthStencilAttachment.view = oQ.view);
        const DQ = this.terrain.drawPrepass(qQ, LQ.prepass, QQ._sceneBG);
        if (0 === DQ) return wQ();
        if (this.trace(qQ, LQ), this.edge) return DQ + 1 + wQ();
        const {
          depthLoadOp: kQ,
          stencilLoadOp: vQ
        } = oQ;
        oQ.depthLoadOp = "load", vQ && (oQ.stencilLoadOp = "load");
        try {
          return DQ + 1 + wQ()
        } finally {
          oQ.depthLoadOp = kQ, oQ.stencilLoadOp = vQ
        }
      }
      trace(QQ, FQ) {
        const wQ = this.terrain.sunShadowGroup(),
          LQ = QQ.beginRenderPass(FQ.trace);
        this.pipeline && wQ && (LQ.setPipeline(this.pipeline), LQ.setBindGroup(0, FQ.bindGroup), LQ.setBindGroup(1, this.empty), LQ.setBindGroup(2, this.empty), LQ.setBindGroup(3, wQ), LQ.draw(3)), LQ.end()
      }
      retire() {
        const QQ = this.retired;
        var FQ;
        QQ && (QQ.mask.destroy(), QQ.normals.destroy(), null === (FQ = QQ.depth) || void 0 === FQ || FQ.destroy(), this.retired = null)
      }
      targetsFor(QQ) {
        var FQ, wQ;
        const LQ = (null !== (FQ = QQ._config.depth) && void 0 !== FQ ? FQ : QQ._config.rt)._depthTexture;
        return (null === (wQ = this.targets) || void 0 === wQ ? void 0 : wQ.source) === LQ ? this.targets : this.remake(QQ, LQ)
      }
      remake(QQ, FQ) {
        var wQ;
        this.retired = this.targets;
        const LQ = [FQ.width, FQ.height],
          qQ = this.device.createTexture({
            label: "sun-shadow-mask",
            size: LQ,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          oQ = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: LQ,
            format: Rk,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          DQ = null !== (wQ = QQ._targetSignature._depthStencilFormat) && void 0 !== wQ ? wQ : FQ.format,
          kQ = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: LQ,
            format: DQ,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          vQ = QQ._renderPassDescriptor.depthStencilAttachment,
          mQ = DQ.includes("stencil"),
          uQ = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: oQ.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: kQ ? kQ.createView() : vQ.view,
              depthClearValue: vQ.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...mQ ? {
                stencilClearValue: vQ.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          HQ = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== kQ && void 0 !== kQ ? kQ : FQ).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: oQ.createView()
            }]
          }),
          bQ = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: qQ.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Ok(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: FQ,
          mask: qQ,
          maskView: qQ.createView(),
          normals: oQ,
          depth: kQ,
          bindGroup: HQ,
          prepass: uQ,
          trace: bQ
        }, this.targets
      }
    }

    function rk(QQ, FQ, wQ) {
      let LQ = null,
        qQ = 0;
      for (const oQ of wQ) {
        const wQ = oQ.renderable.mesh;
        wQ && !1 === wQ.visible || (oQ.pipeline !== LQ && (QQ.setPipeline(oQ.pipeline), LQ = oQ.pipeline), qQ += oQ.draw(QQ, FQ))
      }
      return qQ
    }
    const Ik = 6e4,
      Uk = {
        status: "ok"
      },
      Nk = {
        status: "skipped"
      };
    async function Tk(QQ, FQ) {
      const {
        isCancelled: wQ
      } = QQ;
      if (wQ()) return {
        status: "wF"
      };
      const {
        target: LQ
      } = FQ;
      if (!LQ) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const qQ = [],
        oQ = Promise.all(Array.from(new Set(QQ.materials), (async wQ => {
          qQ.push(await async function(QQ, FQ, wQ, LQ) {
            const qQ = {
              lighting: QQ.lighting,
              dirLightCount: Math.min(QQ.dirLightCount, 4),
              JY: QQ.runtime
            };
            try {
              const oQ = FQ.material(LQ);
              return oQ && uL(FQ.programKey(oQ, !1, qQ)) ? (await oQ.ready, QQ.isCancelled() ? Uk : oQ.bindGroupLayout ? await async function(QQ, FQ, wQ, LQ) {
                const {
                  device: qQ
                } = QQ;
                let oQ, DQ;
                qQ.pushErrorScope("validation");
                try {
                  oQ = QQ.pipelineBuild(FQ, wQ, LQ)
                } finally {
                  DQ = qQ.popErrorScope().catch((() => null))
                }
                const [kQ, vQ] = await Promise.all([DQ, oQ.built.then((() => null), (QQ => null !== QQ && void 0 !== QQ ? QQ : new Error("pipeline failed")))]);
                if (!kQ && !vQ) return Uk;
                const mQ = await Kk(oQ.module),
                  uQ = mQ.length > 0 ? mQ.map((QQ => `${oQ.name} ${QQ.lineNum}:${QQ.linePos}: ${QQ.message}`)).join("\n") : `${oQ.name}: ${zk(null!==vQ&&void 0!==vQ?vQ:kQ)}`;
                return {
                  status: "failed",
                  material: FQ.model.name,
                  message: uQ
                }
              }(FQ, oQ, FQ.programKey(oQ, "none" !== oQ.texture, qQ), wQ): (console.warn(`Shader pack: skipped the compile check for "${LQ.name}", whose textures failed to load`), Nk)) : Uk
            } catch (oQ) {
              return {
                status: "failed",
                material: LQ.name,
                message: zk(oQ)
              }
            }
          }(QQ, FQ, LQ, wQ))
        }))),
        DQ = function(QQ, FQ) {
          let wQ, LQ, qQ = !1;
          const oQ = new Promise((oQ => {
            var DQ;
            wQ = setTimeout((() => {
              oQ("timeout")
            }), null !== (DQ = FQ.timeoutMs) && void 0 !== DQ ? DQ : Ik), LQ = setInterval((() => {
              FQ.isCancelled() && oQ("wF")
            }), 50), QQ.lost.then((() => {
              qQ = !0, oQ("lost")
            }))
          }));
          return {
            signal: oQ,
            lost: () => qQ,
            dispose: () => {
              clearTimeout(wQ), clearInterval(LQ)
            }
          }
        }(FQ.device, QQ);
      let kQ;
      try {
        kQ = await Promise.race([oQ.then((() => "done")), DQ.signal])
      } finally {
        DQ.dispose()
      }
      if ("wF" === kQ || wQ()) return {
        status: "wF"
      };
      const vQ = qQ.find((QQ => "failed" === QQ.status));
      return vQ && "lost" !== kQ && !DQ.lost() && await new Promise((QQ => {
        setTimeout(QQ, 0)
      })), "lost" === kQ || DQ.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : vQ ? {
        status: "failed",
        failure: {
          material: vQ.material,
          message: vQ.message
        }
      } : "timeout" === kQ ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(mQ=QQ.timeoutMs)&&void 0!==mQ?mQ:Ik)/1e3} s`), {
        status: "skipped"
      }) : qQ.some((QQ => "skipped" === QQ.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var mQ
    }
    async function Kk(QQ) {
      if (!QQ) return [];
      try {
        return (await QQ.getCompilationInfo()).messages.filter((QQ => "error" === QQ.type))
      } catch {
        return []
      }
    }

    function zk(QQ) {
      var FQ;
      return null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.message) && void 0 !== FQ ? FQ : String(QQ)
    }

    function lk(QQ, FQ, wQ, LQ) {
      uL(QQ) ? Kk(wQ).then((QQ => {
        const [wQ] = QQ;
        gq("terrain", FQ, LQ, wQ ? `${wQ.lineNum}:${wQ.linePos} error: ${wQ.message}` : null)
      })) : gq("terrain", FQ, LQ)
    }
    var jk = wQ(37123),
      ak = wQ(37134),
      Xk = wQ(37145),
      fk = wQ(2797);

    function Vk(QQ, FQ, wQ, LQ, qQ) {
      const oQ = Math.hypot(wQ[0], wQ[1], wQ[2]);
      if (!(oQ > 0)) return;
      const DQ = [wQ[0] / oQ, wQ[1] / oQ, wQ[2] / oQ],
        kQ = [Math.floor(FQ[0]), Math.floor(FQ[1]), Math.floor(FQ[2])],
        vQ = [0, 0, 0],
        mQ = [1 / 0, 1 / 0, 1 / 0],
        uQ = [1 / 0, 1 / 0, 1 / 0];
      for (let YQ = 0; YQ < 3; YQ++) DQ[YQ] > 0 ? (vQ[YQ] = 1, mQ[YQ] = (kQ[YQ] + 1 - FQ[YQ]) / DQ[YQ], uQ[YQ] = 1 / DQ[YQ]) : DQ[YQ] < 0 && (vQ[YQ] = -1, mQ[YQ] = (kQ[YQ] - FQ[YQ]) / DQ[YQ], uQ[YQ] = -1 / DQ[YQ]);
      const {
        tx: HQ
      } = QQ;
      let bQ = QQ.PJ(kQ[0], kQ[1], kQ[2]);
      for (;;) {
        const FQ = mQ[0] < mQ[1] ? mQ[0] < mQ[2] ? 0 : 2 : mQ[1] < mQ[2] ? 1 : 2;
        if (mQ[FQ] > LQ) return;
        const wQ = vQ[FQ] > 0 ? kQ[FQ] + 1 : kQ[FQ];
        kQ[FQ] += vQ[FQ], mQ[FQ] += uQ[FQ];
        const oQ = QQ.PJ(kQ[0], kQ[1], kQ[2]),
          DQ = oQ !== bQ && !(QQ.opaque[bQ] && QQ.opaque[oQ]);
        if (DQ) {
          const LQ = [kQ[0], kQ[1], kQ[2]];
          LQ[FQ] = wQ;
          const oQ = Math.floor(LQ[0] / HQ),
            DQ = Math.floor(LQ[1] / HQ),
            vQ = Math.floor(LQ[2] / HQ);
          !QQ.isDrawn(oQ, DQ, vQ) && QQ.hasParts(oQ, DQ, vQ) && qQ.add(`${oQ},${DQ},${vQ}`)
        }
        if (DQ && QQ.occluders[oQ]) return;
        bQ = oQ
      }
    }

    function hk(QQ, FQ) {
      return QQ.group - FQ.group || QQ.nearest - FQ.nearest
    }
    class Jk {
      constructor(QQ, FQ) {
        this.device = QQ, this.aG = FQ, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var QQ;
        const FQ = null !== (QQ = this.free.pop()) && void 0 !== QQ ? QQ : this.next++;
        if (8 * FQ >= this.data.length) {
          const QQ = new Float32Array(2 * this.data.length);
          QQ.set(this.data), this.data = QQ, this.words = new Uint32Array(QQ.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.aG()
        }
        return FQ
      }
      release(QQ) {
        this.free.push(QQ)
      }
      set(QQ, FQ, wQ, LQ, qQ) {
        const oQ = 8 * QQ + pL;
        this.data[oQ] = FQ, this.data[oQ + 1] = wQ, this.data[oQ + 2] = LQ, this.setVisibility(QQ, qQ)
      }
      setVisibility(QQ, FQ) {
        this.data[8 * QQ + cL] = FQ, this.markDirty(QQ, QQ)
      }
      setFaces(QQ, FQ, wQ) {
        const LQ = 8 * QQ;
        this.words[LQ + CL] = FQ, this.words[LQ + SL] = wQ, this.markDirty(QQ, QQ)
      }
      markDirty(QQ, FQ) {
        this.dirtyMin = Math.min(this.dirtyMin, QQ), this.dirtyMax = Math.max(this.dirtyMax, FQ)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Ek = GL,
      nk = !0;
    const gk = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Ek.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Pk = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Zk {
      constructor(QQ) {
        this.device = QQ, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(bL), this.dirLightUniforms = this.frameUniforms.subarray(HL.dirLights, HL.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, mF.b)(), this.faceGroups = !0, this.visibilityGraph = nk, this.visCull = nk, this.visCheck = !1, this.visCullMinDistance = Xk.h, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Qv, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.JY = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new ik(QQ, ((QQ, FQ) => this.recordsGroup(QQ, FQ))), this.slots = new Jk(QQ, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = FF(QQ), this.frameLayout = QQ.createBindGroupLayout({
          label: "terrain-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: 2,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: 3,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }), this.frameBuffer = QQ.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = QQ.createSampler({
          label: "terrain",
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        }), this.opaqueRenderable = {
          order: 100,
          isTransparent: !1,
          _direct: !0,
          bind: (QQ, FQ) => this.createBinding(this.opaqueRenderable, FQ, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (QQ, FQ) => this.createBinding(this.transparentRenderable, FQ, !0)
        }
      }
      installSceneDepth(QQ, FQ) {
        this.sceneDepth = new Wk(this.device, this.transparentRenderable, QQ, FQ)
      }
      createFrameBindGroup() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.device.createBindGroup({
          label: "terrain-frame",
          layout: this.frameLayout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.frameBuffer
            }
          }, {
            binding: 1,
            resource: {
              buffer: this.slots.buffer
            }
          }, {
            binding: 2,
            resource: {
              buffer: null !== QQ && void 0 !== QQ ? QQ : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== FQ && void 0 !== FQ ? FQ : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(QQ, FQ) {
        const wQ = null !== FQ && void 0 !== FQ ? FQ : QQ;
        let LQ = this.recordsGroups.get(wQ);
        return LQ || (LQ = this.createFrameBindGroup(QQ, FQ), this.recordsGroups.set(wQ, LQ)), LQ
      }
      setChunkMesh(QQ, FQ, wQ) {
        var LQ;
        let qQ = this.chunks.get(QQ);
        qQ ? this.geometry.release(qQ) : (qQ = {
          mesh: QQ,
          slot: this.slots.allocate(),
          origin: [wQ[0], wQ[1], wQ[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: QQ.visibility,
          distance: 0,
          faceGroups: null,
          planePX: 0,
          planeNX: 0,
          planePY: 0,
          planeNY: 0,
          planePZ: 0,
          planeNZ: 0,
          faceMask: -1,
          faceEpoch: -1,
          rangeCount: 1,
          first0: 0,
          count0: 0,
          first1: 0,
          count1: 0,
          ci: NaN,
          cj: NaN,
          ck: NaN,
          key: NaN
        }, this.chunks.set(QQ, qQ), this.writeSlot(qQ)), qQ.material = QQ.material ? this.materialFor(QQ.material) : null, qQ.packed = !!FQ.packedVertices, qQ.vertexCount = (0, Ak.g)(FQ), qQ.faceCount = qQ.vertexCount / 4;
        const oQ = null !== (LQ = FQ.faceGroups) && void 0 !== LQ ? LQ : null;
        if (qQ.faceGroups = oQ, oQ) {
          const QQ = jk.l;
          qQ.planePX = oQ[QQ], qQ.planeNX = oQ[QQ + 1], qQ.planePY = oQ[QQ + 2], qQ.planeNY = oQ[QQ + 3], qQ.planePZ = oQ[QQ + 4], qQ.planeNZ = oQ[QQ + 5]
        }
        this.drawWhole(qQ), 0 !== qQ.faceCount && (this.geometry.set(qQ, FQ) ? (qQ.packed && this.slots.setFaces(qQ.slot, qQ.vertices.start + qQ.faceCount, qQ.faceCount), FQ.Qx && this.setChunkMeshLight(QQ, FQ.Qx)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${qQ.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(QQ, FQ) {
        const wQ = this.chunks.get(QQ);
        wQ && this.geometry.setLight(wQ, FQ)
      }
      drawStats() {
        let QQ = this.transparent.length;
        for (const FQ of this.opaqueBatches) QQ += FQ.meshes.length;
        return {
          drawn: QQ,
          loaded: this.chunks.size,
          triangles: this.submittedTriangles,
          visCulled: this.visCulledParts,
          visCulledTriangles: this.visCulledTriangles,
          visViolations: this.visViolations,
          visSweeps: this.visSweeps,
          visPassable: this.visPassable.size
        }
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      get buffersAwaitingVerdict() {
        return this.geometry.buffersAwaitingVerdict
      }
      removeChunkMesh(QQ) {
        const FQ = this.chunks.get(QQ);
        FQ && (this.geometry.release(FQ), this.slots.release(FQ.slot), this.chunks.delete(QQ))
      }
      remeshLost(QQ, FQ) {
        this.geometry.release(FQ), FQ.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** FQ.lostRemeshes++);
        const wQ = QQ.nH,
          [LQ, qQ, oQ] = wQ.iqQ(FQ.origin[0], FQ.origin[1], FQ.origin[2]),
          DQ = wQ.AA.tA(LQ, qQ, oQ);
        DQ && (DQ.YA = !0, DQ.cA = !0, wQ.xA(DQ, !1))
      }
      chooseFaceRanges(QQ, FQ, wQ) {
        const LQ = this.faceRanges;
        QQ.faceMask = wQ, QQ.rangeCount = (0, ak.p)(FQ, wQ, LQ), QQ.first0 = LQ[0], QQ.count0 = LQ[1], QQ.first1 = LQ[2], QQ.count1 = LQ[3]
      }
      drawWhole(QQ) {
        QQ.faceMask = -1, QQ.faceEpoch = -1, QQ.rangeCount = 1, QQ.first0 = 0, QQ.count0 = QQ.faceCount
      }
      writeSlot(QQ) {
        const [FQ, wQ, LQ] = this.originOffset;
        this.slots.set(QQ.slot, QQ.origin[0] - FQ, QQ.origin[1] - wQ, QQ.origin[2] - LQ, QQ.visibility)
      }
      materialFor(QQ) {
        const FQ = this.materials.get(QQ);
        if (FQ) return FQ;
        const wQ = ek(QQ);
        if (!wQ) return this.warnOnce(`material:${QQ.name}`, `Lite terrain cannot draw material "${QQ.name}"; its chunks are skipped.`), null;
        const {
          model: LQ,
          atlas: qQ,
          texture: oQ,
          animated: DQ,
          uniformData: kQ
        } = wQ, vQ = {
          id: this.materials.size,
          model: LQ,
          texture: oQ,
          animated: DQ,
          uniformData: kQ,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${QQ.name}`,
            size: kQ.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: wQ.liquid,
          customRenderMat: wQ.customRenderMat,
          atlasCount: 0,
          Q_: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(QQ, vQ), this.device.queue.writeBuffer(vQ.uniformBuffer, 0, kQ), vQ.ready = this.createMaterialBindGroup(vQ, qQ).catch((FQ => {
          console.error(`Lite terrain failed to load the textures of material "${QQ.name}"`, FQ)
        })), vQ
      }
      materialLayout(QQ) {
        const FQ = function(QQ) {
            const FQ = ["uniforms"];
            if ("atlas" === QQ.texture) {
              QQ.animated && FQ.push("animData"), FQ.push("sampler");
              for (let wQ = 0; wQ < QQ.atlasCount; wQ++) FQ.push("textureArray")
            } else "single" === QQ.texture && FQ.push("sampler", "texture");
            return FQ
          }(QQ),
          wQ = FQ.join(",");
        let LQ = this.materialLayouts.get(wQ);
        if (!LQ) {
          const QQ = GPUShaderStage.FRAGMENT;
          LQ = this.device.createBindGroupLayout({
            label: `terrain-material-${wQ}`,
            entries: FQ.map(((FQ, wQ) => {
              switch (FQ) {
                case "uniforms":
                  return {
                    binding: wQ, visibility: GPUShaderStage.VERTEX | QQ, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: wQ, visibility: GPUShaderStage.VERTEX | QQ, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: wQ, visibility: QQ, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: wQ, visibility: QQ, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: wQ, visibility: QQ, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(wQ, LQ)
        }
        return LQ
      }
      async createMaterialBindGroup(QQ, FQ) {
        const wQ = [{
          buffer: QQ.uniformBuffer
        }];
        if (FQ) {
          const {
            urls: LQ,
            pixels: qQ,
            layerWidth: oQ
          } = FQ.sources, DQ = await Promise.all(LQ.map(((QQ, FQ) => {
            var wQ;
            return Xq(this.device, QQ, null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ[FQ]) && void 0 !== wQ ? wQ : null, oQ)
          })));
          QQ.atlasCount = DQ.length, QQ.Q_ = DQ[0].layerWidth, QQ.atlasLayers = DQ[0].layers, FQ.animDataPerTex && wQ.push({
            buffer: Uq(this.device, Float32Array.from(FQ.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), wQ.push(this.sampler);
          for (const QQ of DQ) wQ.push(QQ.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === QQ.texture) {
          const {
            url: FQ
          } = QQ.model.diffuseTexture.source, {
            pixels: LQ,
            width: qQ,
            height: oQ
          } = await jq(FQ);
          wQ.push(this.sampler), wQ.push(Tq(this.device, LQ, qQ, oQ, 1, `terrain-${FQ}`).createView({
            dimension: "2d"
          }))
        }
        const LQ = this.materialLayout(this.programKey(QQ, !1));
        QQ.bindGroupLayout = LQ, QQ.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${QQ.model.name}`,
          layout: LQ,
          entries: wQ.map(((QQ, FQ) => ({
            binding: FQ,
            resource: QQ
          })))
        })
      }
      programKey(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const LQ = wQ ? wQ.lighting : this.lighting,
          qQ = wQ ? wQ.JY : this.JY,
          oQ = {
            texture: QQ.texture,
            atlasCount: QQ.atlasCount,
            Q_: QQ.Q_,
            atlasLayers: QQ.atlasLayers,
            animated: QQ.animated,
            alphaTest: QQ.model.transparencyMode === WQ.q.alphaTest,
            lighting: LQ,
            dirLightCount: wQ ? wQ.dirLightCount : this.dirLightCount,
            packed: FQ
          };
        if (!qQ) return oQ;
        const DQ = this.shaderPackFields(QQ, qQ),
          kQ = "atlas" === QQ.texture && QQ.model.transparencyMode === WQ.q.opaque && DL(DQ.packVariant);
        return {
          ...oQ,
          ...DQ,
          alphaTest: oQ.alphaTest || kQ
        }
      }
      shaderPackFields(QQ, FQ) {
        return QQ.customRenderMat ? qL : function(QQ, FQ) {
          if (!QQ) return qL;
          const wQ = QQ.defineFor(FQ ? "liquid" : "terrain");
          return 0 === wQ ? qL : {
            packVariant: wQ,
            liquid: FQ
          }
        }(FQ, QQ.liquid)
      }
      isBlended(QQ) {
        return QQ.model.transparencyMode === WQ.q.alphaBlend
      }
      shaderModule(QQ, FQ) {
        let wQ = this.modules.get(QQ);
        return wQ || (wQ = this.device.createShaderModule({
          label: FQ,
          code: QQ
        }), this.modules.set(QQ, wQ)), wQ
      }
      pipelineFor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!QQ.bindGroupLayout) return null;
        const qQ = this.programKey(QQ, FQ);
        if (!LQ) return this.pipelineOf(QQ, qQ, wQ);
        const oQ = {
            ...qQ,
            resting: LQ
          },
          DQ = this.pipelineId(QQ, oQ, wQ),
          kQ = this.pipelines.get(DQ);
        if (kQ) return kQ;
        const vQ = this.pipelineOf(QQ, qQ, wQ);
        return vQ && void 0 === kQ && this.startPipeline(DQ, QQ, oQ, wQ), vQ
      }
      pipelineOf(QQ, FQ, wQ) {
        const LQ = this.pipelineId(QQ, FQ, wQ),
          qQ = this.pipelines.get(LQ);
        return void 0 !== qQ ? qQ : (this.startPipeline(LQ, QQ, FQ, wQ), null)
      }
      pipelineId(QQ, FQ, wQ) {
        return yk(FQ, this.isBlended(QQ), QQ.model.backFaceCulling, wQ)
      }
      pipelineBuild(QQ, FQ, wQ) {
        var LQ;
        const qQ = this.pipelineId(QQ, FQ, wQ);
        return null !== (LQ = this.builds.get(qQ)) && void 0 !== LQ ? LQ : this.startPipeline(qQ, QQ, FQ, wQ)
      }
      startPipeline(QQ, FQ, wQ, LQ) {
        var qQ;
        this.pipelines.set(QQ, null);
        const oQ = rL(wQ),
          DQ = this.isBlended(FQ),
          kQ = this.shadowMask && LQ._depthStencilFormat ? function(QQ, FQ, wQ, LQ) {
            if (void 0 === QQ.packVariant || QQ.liquid || FQ) return "none";
            const qQ = (0, OF.f)(QQ.packVariant);
            return null === qQ || void 0 === qQ || !qQ.sunShadow || !lw(qQ, wQ) || qQ.discards || QQ.alphaTest && DL(QQ.packVariant) ? "none" : LQ ? "edge" : "plain"
          }(wQ, DQ, !!this.sunShadow, LQ._sampleCount > 1) : "none";
        let vQ;
        try {
          vQ = IL(wQ, !!this.sunShadow, kQ)
        } catch (tQ) {
          if (!uL(wQ)) throw tQ;
          return this.failedPackBuild(QQ, wQ, oQ, tQ)
        }
        const mQ = this.shaderModule(vQ, oQ),
          uQ = [];
        wQ.packed || (uQ.push(function(QQ, FQ) {
          const wQ = [{
            shaderLocation: Ek.position,
            offset: iF.g.Uw,
            format: "float32x3"
          }, {
            shaderLocation: Ek.normal,
            offset: iF.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Ek.color,
            offset: iF.g.colorOffset,
            format: "unorm8x4"
          }];
          return QQ && wQ.push({
            shaderLocation: Ek.uv,
            offset: iF.g.uvOffset,
            format: "float32x2"
          }), FQ && wQ.push({
            shaderLocation: Ek.blockFlagWords,
            offset: iF.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: iF.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: wQ
          }
        }("none" !== wQ.texture, uL(wQ))), wQ.lighting && uQ.push(gk));
        const HQ = FQ.model.backFaceCulling,
          bQ = {
            label: oQ,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, FQ.bindGroupLayout, ...Vo(this.device, wQ, !!this.sunShadow, "none" !== kQ)]
            }),
            vertex: {
              module: mQ,
              entryPoint: "mainVertex",
              buffers: uQ
            },
            fragment: yQ({
              module: mQ,
              entryPoint: "mainFragment"
            }, LQ, DQ ? Pk : null),
            depthStencil: LQ._depthStencilFormat ? {
              format: LQ._depthStencilFormat,
              depthCompare: null !== (qQ = LQ._depthCompare) && void 0 !== qQ ? qQ : wF,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: LQ._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: HQ ? "back" : "none"
            }
          },
          YQ = wQ.resting ? 0 : 1;
        this.compiling += YQ;
        const xQ = "none" === kQ ? this.device.createRenderPipelineAsync(bQ) : this.startMaskPipelines(mQ, bQ, "edge" === kQ);
        xQ.then((FQ => {
          this.compiling -= YQ, this.pipelines.set(QQ, FQ)
        }), (QQ => {
          this.compiling -= YQ, console.error(`Lite terrain pipeline ${oQ} failed`, QQ), lk(wQ, oQ, mQ, QQ)
        }));
        const AQ = {
          name: oQ,
          module: mQ,
          built: xQ
        };
        return this.builds.set(QQ, AQ), AQ
      }
      startMaskPipelines(QQ, FQ, wQ) {
        const LQ = FQ.depthStencil,
          qQ = this.device.createRenderPipelineAsync(wQ ? FQ : {
            ...FQ,
            depthStencil: {
              ...LQ,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          oQ = this.device.createRenderPipelineAsync({
            ...FQ,
            label: `${FQ.label}-prepass`,
            fragment: {
              module: QQ,
              entryPoint: "prepassFragment",
              targets: [{
                format: Rk
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([qQ, oQ]).then((QQ => {
          let [FQ, wQ] = QQ;
          return this.prepassOf.set(FQ, wQ), this.maskPipelines++, FQ
        }))
      }
      failedPackBuild(QQ, FQ, wQ, LQ) {
        console.error(`Lite terrain pipeline ${wQ} failed`, LQ), lk(FQ, wQ, null, LQ);
        const qQ = Promise.reject(LQ);
        qQ.catch((() => {}));
        const oQ = {
          name: wQ,
          module: null,
          built: qQ
        };
        return this.builds.set(QQ, oQ), oQ
      }
      checkShaderPack(QQ) {
        return Tk(QQ, {
          device: this.device,
          target: this.target,
          material: QQ => this.materialFor(QQ),
          programKey: (QQ, FQ, wQ) => this.programKey(QQ, FQ, wQ),
          pipelineBuild: (QQ, FQ, wQ) => this.pipelineBuild(QQ, FQ, wQ)
        })
      }
      createBinding(QQ, FQ, wQ) {
        return this.target = FQ, {
          renderable: QQ,
          pipeline: DF(this.device, FQ),
          draw: QQ => {
            this.geometry.setDrawing(!0);
            try {
              return wQ ? this.drawTransparent(QQ, FQ) : this.drawOpaque(QQ, FQ)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(QQ, FQ) {
        var wQ, LQ, qQ, oQ;
        const {
          dH: DQ
        } = QQ;
        this.lighting = QQ.UA;
        const kQ = (0, xk.p)(FQ);
        this.dirLightCount = Math.min(kQ, 4), this.JY = null !== (wQ = DQ.JY) && void 0 !== wQ ? wQ : null, kQ > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(QQ, FQ), this.animateMaterials(FQ.animTick);
        const vQ = DQ.Mb,
          mQ = vQ[0] !== this.originOffset[0] || vQ[1] !== this.originOffset[1] || vQ[2] !== this.originOffset[2];
        mQ && (this.originOffset[0] = vQ[0], this.originOffset[1] = vQ[1], this.originOffset[2] = vQ[2]);
        const uQ = FQ.eye;
        this.eye[0] = uQ[0], this.eye[1] = uQ[1], this.eye[2] = uQ[2], this.writeShaderPackInputs();
        const HQ = FQ.projectionMatrix,
          bQ = 0 === HQ[15];
        let YQ = 0;
        (mQ || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: xQ
        } = this;
        kF(this.transparentRenderable._worldCenter, FQ, qF), this.resetBatches(bQ), this.transparent.length = 0, this.unlit.length = 0;
        const AQ = DQ.nH.KQQ,
          tQ = AQ / 2 * Math.sqrt(3);
        let eQ = 0;
        const MQ = !!this.JY && oL(this.JY.defineFor("liquid"));
        let GQ = !1;
        const pQ = null !== (LQ = null === (qQ = DQ.RC) || void 0 === qQ ? void 0 : qQ.visibility) && void 0 !== LQ ? LQ : null,
          cQ = this.visCull && bQ && 0 === this.compiling && null !== pQ && DQ.nH.KLQ[0] >= this.visCullMinDistance ? this.target : null,
          CQ = this.visPassable,
          SQ = this.visCandidates,
          iQ = this.visCandidateBatches;
        CQ.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let WQ = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let RQ = 0;
        const OQ = (QQ, wQ) => {
          if (!wQ) return this.transparent.push(QQ), void(RQ += 2 * QQ.faceCount);
          if (null !== QQ.faceGroups && wQ.faceCull) {
            if (0 === YQ && (YQ = (0, ak.c)(HQ, FQ.renderWidth, FQ.renderHeight), YQ !== this.faceFocalPx && (this.faceFocalPx = YQ, xQ = ++this.faceEpoch)), QQ.faceEpoch !== xQ) {
              QQ.faceEpoch = xQ;
              const FQ = Math.sqrt(QQ.distance) + tQ,
                wQ = (0, ak.j)(QQ.planePX, QQ.planeNX, QQ.planePY, QQ.planeNY, QQ.planePZ, QQ.planeNZ, this.eye[0] - (QQ.origin[0] - this.originOffset[0]), this.eye[1] - (QQ.origin[1] - this.originOffset[1]), this.eye[2] - (QQ.origin[2] - this.originOffset[2]), (0, ak.f)(FQ, YQ));
              wQ !== QQ.faceMask && this.chooseFaceRanges(QQ, QQ.faceGroups, wQ)
            }
            if (0 === QQ.rangeCount) return
          } else - 1 !== QQ.faceMask && this.drawWhole(QQ);
          wQ.meshes.push(QQ), RQ += 2 * ((QQ.rangeCount > 0 ? QQ.count0 : 0) + (QQ.rangeCount > 1 ? QQ.count1 : 0))
        };
        for (const rQ of this.chunks.values()) {
          mQ && this.writeSlot(rQ);
          const QQ = rQ.mesh.visibility;
          QQ !== rQ.visibility && (rQ.visibility = QQ, this.slots.setVisibility(rQ.slot, QQ));
          const {
            material: wQ
          } = rQ;
          this.geometry.lost(rQ) && performance.now() >= rQ.lostRetryAt && this.remeshLost(DQ, rQ);
          const LQ = !(null === wQ || void 0 === wQ || !wQ.bindGroup) && this.geometry.backed(rQ),
            qQ = LQ && this.lighting && !rQ.vertices.page.twin;
          if (cQ && (Number.isNaN(rQ.key) && (rQ.ci = Math.floor(rQ.origin[0] / AQ), rQ.cj = Math.floor(rQ.origin[1] / AQ), rQ.ck = Math.floor(rQ.origin[2] / AQ), rQ.key = (0, fk.i)(rQ.ci, rQ.cj, rQ.ck)), (!LQ || QQ < 1 || qQ || !this.batchDraws(wQ, rQ.packed, cQ)) && this.visSeeThrough(rQ, cQ) && CQ.add(rQ.key)), !LQ) continue;
          qQ || (rQ.lostRemeshes = 0);
          const oQ = rQ.origin[0] - this.originOffset[0],
            kQ = rQ.origin[1] - this.originOffset[1],
            vQ = rQ.origin[2] - this.originOffset[2];
          if (!(0, Fk.e)(FQ.frustum, oQ, kQ, vQ, AQ)) continue;
          const uQ = oQ + AQ / 2 - this.eye[0],
            HQ = kQ + AQ / 2 - this.eye[1],
            YQ = vQ + AQ / 2 - this.eye[2];
          if (rQ.distance = uQ * uQ + HQ * HQ + YQ * YQ, this.lighting && !rQ.lit && (eQ = Math.max(eQ, rQ.vertexCount), this.unlit.push(rQ)), qQ) continue;
          const xQ = this.isBlended(wQ) ? null : this.batchFor(wQ, rQ.packed, rQ.vertices.page, 1 === QQ, bQ);
          cQ ? (SQ[WQ] = rQ, iQ[WQ++] = xQ) : OQ(rQ, xQ)
        }
        const sQ = cQ ? this.sweepVisibility(QQ, FQ, pQ) : null;
        null === (oQ = (0, ro.v)(DQ)) || void 0 === oQ || oQ.update(FQ.frustum, this.originOffset, AQ, sQ);
        for (let rQ = 0; rQ < WQ; rQ++) {
          const QQ = SQ[rQ];
          !sQ || sQ.isDrawn(QQ.ci, QQ.cj, QQ.ck) ? OQ(QQ, iQ[rQ]) : (this.visCulledParts++, this.visCulledTriangles += 2 * QQ.faceCount)
        }
        for (const rQ of this.transparent) GQ ||= MQ && rQ.material.liquid && !rQ.material.customRenderMat;
        this.submittedTriangles = RQ, sQ && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(QQ, FQ, sQ)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(GQ) : GQ && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && eQ > 0 && this.geometry.lightFullSky(this.unlit, eQ);
        for (const rQ of this.opaqueBatches) this.chunkSorter.sort(rQ.meshes, 1) || rQ.meshes.sort(Bk);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(dk)
      }
      sweepVisibility(QQ, FQ, wQ) {
        const {
          nH: LQ
        } = QQ.dH, qQ = LQ.KQQ, oQ = this.visPassable, DQ = this.eye[0] + this.originOffset[0], kQ = this.eye[1] + this.originOffset[1], vQ = this.eye[2] + this.originOffset[2];
        if (!wQ.eyeClear(DQ, kQ, vQ, FQ.near, FQ.projectionMatrix, LQ)) return null;
        const [mQ, uQ] = LQ.KLQ, HQ = wQ.update(DQ, kQ, vQ, qQ, mQ, uQ, oQ);
        return this.visSweeps = wQ.sweeps, HQ ? wQ : null
      }
      visSeeThrough(QQ, FQ) {
        const {
          material: wQ
        } = QQ;
        return (!wQ || !this.isBlended(wQ)) && (QQ.mesh.visibility < 1 || !(null !== wQ && void 0 !== wQ && wQ.bindGroup) || QQ.faceCount > 0 && (!this.geometry.backed(QQ) || this.lighting && !QQ.vertices.page.twin) || !this.batchDraws(wQ, QQ.packed, FQ))
      }
      batchDraws(QQ, FQ, wQ) {
        var LQ;
        const qQ = FQ ? 2 : 0;
        if (QQ === this.visDrawsMaterial && function(QQ, FQ) {
            return 0 !== (QQ & 1 << FQ)
          }(this.visDrawsBits, qQ)) return 0 !== (this.visDrawsBits & 2 << qQ);
        let oQ = null !== (LQ = this.visBatchDraws.get(QQ)) && void 0 !== LQ ? LQ : 0;
        if (!(oQ & 1 << qQ)) {
          oQ |= 1 << qQ | (!!QQ.bindGroupLayout && this.canDraw(QQ, FQ) && !!this.pipelines.get(this.pipelineId(QQ, this.programKey(QQ, FQ), wQ)) ? 2 << qQ : 0), this.visBatchDraws.set(QQ, oQ)
        }
        return this.visDrawsMaterial = QQ, this.visDrawsBits = oQ, 0 !== (oQ & 2 << qQ)
      }
      runVisCheck(QQ, FQ, wQ) {
        const {
          dH: LQ
        } = QQ, {
          nH: qQ
        } = LQ, oQ = qQ.KQQ, DQ = new Set;
        for (const YQ of this.chunks.values()) DQ.add(YQ.key);
        const kQ = pq.Matrix.FromArray(FQ.viewProjectionMatrix).invert(),
          [vQ, mQ, uQ] = this.originOffset,
          HQ = new pq.Ox,
          bQ = function(QQ, FQ, wQ, LQ) {
            const qQ = new Set;
            for (let oQ = 0; oQ < 27; oQ++)
              for (let DQ = 0; DQ < 48; DQ++) {
                const kQ = wQ((DQ + .5) / 48 * 2 - 1, (oQ + .5) / 27 * 2 - 1);
                Vk(QQ, FQ, [kQ[0] - FQ[0], kQ[1] - FQ[1], kQ[2] - FQ[2]], LQ, qQ)
              }
            return qQ
          }({
            PJ: (QQ, FQ, wQ) => qQ.PJ(QQ, FQ, wQ),
            occluders: wQ.occluders,
            opaque: wQ.opaque,
            tx: oQ,
            isDrawn: (QQ, FQ, LQ) => wQ.isDrawn(QQ, FQ, LQ),
            hasParts: (QQ, FQ, wQ) => DQ.has((0, fk.i)(QQ, FQ, wQ))
          }, [this.eye[0] + vQ, this.eye[1] + mQ, this.eye[2] + uQ], ((QQ, FQ) => (pq.Ox.TransformCoordinatesFromFloatsToRef(QQ, FQ, .5, kQ, HQ), [HQ.x + vQ, HQ.y + mQ, HQ.z + uQ])), (qQ.KLQ[0] + 1) * oQ);
        this.visViolations = bQ.size;
        for (const YQ of bQ) this.warnOnce(`vis:${YQ}`, `Lite terrain cave culling skipped chunk ${YQ}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var QQ;
        null !== (QQ = this.JY) && void 0 !== QQ && QQ.isRunning() && (this.shaderPackInputs ??= new ho(this.device, this.JY.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.JY, this.eye, this.lighting))
      }
      bindShaderPackInputs(QQ, FQ, wQ) {
        var LQ, qQ, oQ, DQ;
        let kQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: vQ
        } = this.shaderPackFields(FQ, wQ);
        if (void 0 === vQ) return;
        this.shaderPackInputs || (this.shaderPackInputs = new ho(this.device, wQ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(wQ, this.eye, this.lighting));
        const mQ = oL(vQ) ? null !== (LQ = null === (qQ = this.sceneDepth) || void 0 === qQ ? void 0 : qQ.view) && void 0 !== LQ ? LQ : this.standIn() : null,
          uQ = kQ ? null !== (oQ = null === (DQ = this.shadowMask) || void 0 === DQ ? void 0 : DQ.view) && void 0 !== oQ ? oQ : this.standIn() : null;
        this.shaderPackInputs.bind(QQ, mQ, fo(vQ, !!this.sunShadow), uQ)
      }
      standIn() {
        return this.depthStandIn ??= this.device.createTexture({
          label: "scene-depth-stand-in",
          size: [1, 1],
          format: "r32float",
          usage: GPUTextureUsage.TEXTURE_BINDING
        }).createView()
      }
      sunShadowGroup() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.shaderPackInputs) || void 0 === FQ ? void 0 : FQ.bindGroupFor(null, !0)) && void 0 !== QQ ? QQ : null
      }
      resetBatches(QQ) {
        const FQ = this.opaqueBatches;
        let wQ = 0;
        for (const LQ of FQ) LQ.meshes.length > 0 && (LQ.meshes.length = 0, LQ.faceCull = this.batchFaceCull(LQ.material, QQ), FQ[wQ++] = LQ);
        FQ.length = wQ
      }
      orderBatches() {
        const QQ = this.opaqueBatches;
        for (let FQ = 0; FQ < QQ.length; FQ++) {
          const wQ = QQ[FQ];
          wQ.group = FQ;
          for (let LQ = 0; LQ < FQ; LQ++) {
            const FQ = QQ[LQ];
            if (FQ.material === wQ.material && FQ.packed === wQ.packed) {
              wQ.group = FQ.group;
              break
            }
          }
          wQ.nearest = wQ.meshes.length > 0 ? wQ.meshes[0].distance : 1 / 0
        }
        QQ.sort(hk)
      }
      batchFor(QQ, FQ, wQ, LQ, qQ) {
        for (const DQ of this.opaqueBatches)
          if (DQ.material === QQ && DQ.packed === FQ && DQ.page === wQ && DQ.resting === LQ) return DQ;
        const oQ = {
          material: QQ,
          packed: FQ,
          page: wQ,
          resting: LQ,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(QQ, qQ)
        };
        return this.opaqueBatches.push(oQ), oQ
      }
      batchFaceCull(QQ, FQ) {
        return !(!FQ || !(0, jk.p)(QQ.model)) && (!this.JY || ! function(QQ) {
          var FQ;
          return !(null === (FQ = (0, OF.f)(QQ)) || void 0 === FQ || !FQ.movesVertices)
        }(this.shaderPackFields(QQ, this.JY).packVariant))
      }
      writeFrameUniforms(QQ, FQ) {
        const wQ = this.frameUniforms,
          LQ = HL;
        if ((0, xk.s)(QQ, wQ), wQ[LQ.fogInfos] = FQ.fogEnabled ? FQ.fogMode : 0, wQ[LQ.fogInfos + 1] = FQ.fogStart, wQ[LQ.fogInfos + 2] = FQ.fogEnd, wQ[LQ.fogInfos + 3] = FQ.fogDensity, wQ.set(FQ.fogColour, LQ.fogColour), wQ[LQ.outputHeight] = FQ.renderHeight, wQ.set(FQ.ambientColour, LQ.sceneAmbient), (0, xk.o)(FQ, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const FQ = (0, Ak.h)(QQ.Bx, QQ.Cx, QQ.Sx);
          for (let QQ = 0; QQ < 4; QQ++) wQ[LQ.aoLevels + QQ] = FQ[QQ] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, wQ)
      }
      animateMaterials(QQ) {
        const FQ = YL.anim;
        for (const wQ of this.materials.values()) wQ.animated && (wQ.uniformData[FQ] = QQ, this.device.queue.writeBuffer(wQ.uniformBuffer, 4 * FQ, wQ.uniformData, FQ, 1))
      }
      canDraw(QQ, FQ) {
        return !("atlas" === QQ.texture && !FQ) || (this.warnOnce(`stride:${QQ.id}`, `Lite terrain: material "${QQ.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(QQ, FQ) {
        let wQ = 0;
        QQ.setBindGroup(1, this.frameBindGroup);
        for (const LQ of this.opaqueBatches) {
          if (!LQ.meshes.length || !this.canDraw(LQ.material, LQ.packed)) continue;
          const qQ = this.pipelineFor(LQ.material, LQ.packed, FQ, LQ.resting);
          qQ && (QQ.setPipeline(qQ), QQ.setBindGroup(2, LQ.material.bindGroup), this.JY && this.bindShaderPackInputs(QQ, LQ.material, this.JY, this.prepassOf.has(qQ)), wQ += this.drawBatch(QQ, LQ))
        }
        return wQ
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(QQ, FQ, wQ) {
        const LQ = this.target,
          qQ = this.JY;
        if (!LQ || !qQ || 0 === this.maskPipelines) return 0;
        let oQ = 0,
          DQ = null;
        this.geometry.setDrawing(!0);
        try {
          for (const kQ of this.opaqueBatches) {
            if (!kQ.meshes.length || !this.canDraw(kQ.material, kQ.packed)) continue;
            const vQ = this.pipelineFor(kQ.material, kQ.packed, LQ, kQ.resting),
              mQ = vQ && this.prepassOf.get(vQ);
            mQ && (DQ || (DQ = QQ.beginRenderPass(FQ), DQ.setBindGroup(0, wQ), DQ.setBindGroup(1, this.frameBindGroup)), DQ.setPipeline(mQ), DQ.setBindGroup(2, kQ.material.bindGroup), this.bindShaderPackInputs(DQ, kQ.material, qQ, !0), oQ += this.drawBatch(DQ, kQ))
          }
        } finally {
          var kQ;
          null === (kQ = DQ) || void 0 === kQ || kQ.end(), this.geometry.setDrawing(!1)
        }
        return oQ
      }
      drawBatch(QQ, FQ) {
        let wQ = 0;
        for (const LQ of FQ.meshes) {
          const {
            rangeCount: FQ
          } = LQ;
          FQ > 0 && (wQ += this.geometry.draw(QQ, LQ, this.lighting, LQ.first0, LQ.count0), FQ > 1 && (wQ += this.geometry.draw(QQ, LQ, this.lighting, LQ.first1, LQ.count1)))
        }
        return wQ
      }
      drawTransparent(QQ, FQ) {
        let wQ = 0,
          LQ = null,
          qQ = null;
        QQ.setBindGroup(1, this.frameBindGroup);
        for (const oQ of this.transparent) {
          const DQ = oQ.material;
          if (!this.canDraw(DQ, oQ.packed)) continue;
          const kQ = this.pipelineFor(DQ, oQ.packed, FQ);
          kQ && (kQ !== LQ && (QQ.setPipeline(kQ), LQ = kQ, this.JY && this.bindShaderPackInputs(QQ, DQ, this.JY)), DQ !== qQ && (QQ.setBindGroup(2, DQ.bindGroup), qQ = DQ), wQ += this.geometry.draw(QQ, oQ, this.lighting))
        }
        return wQ
      }
    }

    function yk(QQ, FQ, wQ, LQ) {
      return `${rL(QQ)}|${QQ.atlasLayers}|${QQ.Q_}|${FQ}|${wQ}|${LQ._colorFormat}|${LQ._depthStencilFormat}|${LQ._sampleCount}`
    }

    function Bk(QQ, FQ) {
      return QQ.distance - FQ.distance
    }

    function dk(QQ, FQ) {
      return FQ.distance - QQ.distance
    }
    class Qv {
      constructor() {
        this.left = []
      }
      sort(QQ, FQ) {
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          const FQ = QQ[wQ].distance;
          if (FQ - FQ !== 0) return !1
        }
        return this.sortRange(QQ, 0, QQ.length, FQ), !0
      }
      sortRange(QQ, FQ, wQ, LQ) {
        if (wQ - FQ <= 16) {
          for (let qQ = FQ + 1; qQ < wQ; qQ++) {
            const wQ = QQ[qQ],
              oQ = LQ * wQ.distance;
            let DQ = qQ - 1;
            for (; DQ >= FQ && LQ * QQ[DQ].distance > oQ; DQ--) QQ[DQ + 1] = QQ[DQ];
            QQ[DQ + 1] = wQ
          }
          return
        }
        const qQ = FQ + wQ >>> 1;
        if (this.sortRange(QQ, FQ, qQ, LQ), this.sortRange(QQ, qQ, wQ, LQ), LQ * QQ[qQ - 1].distance <= LQ * QQ[qQ].distance) return;
        const {
          left: oQ
        } = this, DQ = qQ - FQ;
        for (let uQ = 0; uQ < DQ; uQ++) oQ[uQ] = QQ[FQ + uQ];
        let kQ = 0,
          vQ = qQ,
          mQ = FQ;
        for (; kQ < DQ && vQ < wQ;) QQ[mQ++] = LQ * QQ[vQ].distance < LQ * oQ[kQ].distance ? QQ[vQ++] : oQ[kQ++];
        for (; kQ < DQ;) QQ[mQ++] = oQ[kQ++]
      }
    }
    const Fv = Math.ceil(102);

    function wv(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FQ;
      const oQ = Math.min(FQ, wQ),
        DQ = new Uint32Array(Qw(LQ));
      for (let kQ = 0; kQ < LQ; kQ++) {
        const FQ = Math.floor(kQ * oQ / LQ),
          wQ = Math.max(FQ + 1, Math.floor((kQ + 1) * oQ / LQ));
        for (let vQ = 0; vQ < LQ; vQ++) {
          const mQ = Math.floor(vQ * oQ / LQ),
            uQ = Math.max(mQ + 1, Math.floor((vQ + 1) * oQ / LQ));
          let HQ = 0;
          for (let LQ = FQ; LQ < wQ; LQ++)
            for (let FQ = mQ; FQ < uQ; FQ++) QQ[LQ * qQ + FQ] >= Fv && HQ++;
          if (2 * HQ >= (wQ - FQ) * (uQ - mQ)) {
            const QQ = vQ + LQ * kQ;
            DQ[QQ >>> 5] |= 1 << (31 & QQ)
          }
        }
      }
      return DQ
    }

    function Lv(QQ) {
      return Math.max(1, Math.min(16, QQ))
    }
    class qv {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = QQ, this.loadTexture = FQ, this.warn = wQ, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(QQ, FQ) {
        return (QQ.cV !== this.builtVersion || this.blockCaster.length !== FQ) && (this.build(QQ, FQ), !0)
      }
      build(QQ, FQ) {
        this.builtVersion = QQ.cV;
        const wQ = new Uint16Array(FQ),
          LQ = new Map;
        for (let qQ = 1; qQ < FQ; qQ++) {
          const FQ = this.classify(QQ, qQ, LQ);
          if (null === FQ || FQ === PF) {
            wQ[qQ] = null === FQ ? 0 : PF;
            continue
          }
          let oQ = this.byKey.get(FQ.key);
          void 0 === oQ && (oQ = this.allocate(FQ), this.byKey.set(FQ.key, oQ)), wQ[qQ] = oQ
        }
        this.blockCaster = wQ, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(QQ, FQ) {
        const wQ = QQ.p_[FQ];
        if ("function" !== typeof wQ) return wQ;
        try {
          return wQ()
        } catch (LQ) {
          return this.warnOnce(`Sun shadows: no caster option for block ${FQ}: ${LQ instanceof Error?LQ.message:String(LQ)}`), null
        }
      }
      classify(QQ, FQ, wQ) {
        const LQ = this.option(QQ, FQ);
        if ("none" === LQ) return null;
        if (LQ && LQ.planes.length > 0) {
          const QQ = LQ.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(QQ)}`,
            planes: QQ
          }
        }
        if (QQ.FY[FQ]) return null;
        const qQ = QQ.LY[FQ] ? QQ.sV(FQ) : null;
        if (qQ && qQ.length >= 6) {
          const QQ = function(QQ) {
            const FQ = new Uint32Array(16);
            for (let wQ = 0; wQ + 6 <= QQ.length; wQ += 6) {
              const LQ = [0, 1, 2].map((FQ => Math.max(0, Math.ceil(8 * QQ[wQ + FQ] - .5)))),
                qQ = [0, 1, 2].map((FQ => Math.min(7, Math.floor(8 * QQ[wQ + FQ + 3] - .5))));
              for (let QQ = LQ[2]; QQ <= qQ[2]; QQ++)
                for (let wQ = LQ[1]; wQ <= qQ[1]; wQ++)
                  for (let oQ = LQ[0]; oQ <= qQ[0]; oQ++) {
                    const LQ = oQ + 8 * (wQ + 8 * QQ);
                    FQ[LQ >>> 5] |= 1 << (31 & LQ)
                  }
            }
            return FQ
          }(qQ);
          return function(QQ) {
            return QQ.every((QQ => 4294967295 === QQ))
          }(QQ) ? PF : QQ.every((QQ => 0 === QQ)) ? null : {
            kind: "shape",
            key: `shape:${QQ.join(",")}`,
            mask: QQ
          }
        }
        if (QQ.jW[FQ] || !QQ.QA[FQ]) return null;
        const oQ = [0, 1, 2, 3, 4, 5].map((LQ => {
          const qQ = QQ.FA[6 * FQ + LQ];
          let oQ = wQ.get(qQ);
          return void 0 === oQ && (oQ = function(QQ) {
            if (!QQ || QQ.HA) return null;
            const {
              J9: FQ,
              Q_: wQ,
              K9: LQ
            } = QQ;
            if (!FQ || !wQ || !(wQ > 0) || void 0 === LQ || !(LQ >= 0)) return null;
            const qQ = FQ[0],
              oQ = wQ * wQ * 4;
            if (!qQ || qQ.byteLength < oQ) return null;
            const DQ = Math.floor(qQ.byteLength / oQ),
              kQ = FQ[Math.floor(LQ / DQ)];
            if (!kQ) return null;
            const vQ = new Uint8Array(kQ.buffer, kQ.byteOffset, kQ.byteLength),
              mQ = LQ % DQ * oQ;
            if (mQ + oQ > vQ.length) return null;
            const uQ = new Uint8Array(wQ * wQ);
            let HQ = !1;
            for (let bQ = 0; bQ < uQ.length; bQ++) uQ[bQ] = vQ[mQ + 4 * bQ + 3], HQ ||= uQ[bQ] < Fv;
            return HQ ? {
              alpha: uQ,
              width: wQ
            } : null
          }(QQ.uA(qQ)), wQ.set(qQ, oQ)), oQ
        }));
        if (oQ.every((QQ => null === QQ))) return PF;
        const DQ = Lv(Math.max(...oQ.map((QQ => {
            var FQ;
            return null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.width) && void 0 !== FQ ? FQ : 1
          })))),
          kQ = new Uint32Array(Qw(DQ)).fill(4294967295),
          vQ = oQ.map((QQ => null === QQ ? kQ : wv(QQ.alpha, QQ.width, QQ.width, DQ)));
        return {
          kind: "cutout",
          key: `cutout:${DQ}:${vQ.map((QQ=>QQ.join(","))).join("|")}`,
          size: DQ,
          faces: vQ
        }
      }
      allocate(QQ) {
        if (this.nextCaster >= Fw) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const FQ = this.nextCaster++;
        if (this.writeCaster(FQ, ZF, 0, 0, 0), "shape" === QQ.kind) {
          const wQ = this.allocateMask(QQ.mask.length);
          wQ >= 0 && (this.sink(wQ, QQ.mask), this.writeCaster(FQ, yF, wQ, 0, 8))
        } else if ("cutout" === QQ.kind) {
          const wQ = Qw(QQ.size),
            LQ = this.allocateMask(6 * wQ);
          if (LQ >= 0) {
            const qQ = new Uint32Array(6 * wQ);
            QQ.faces.forEach(((QQ, FQ) => {
              qQ.set(QQ, FQ * wQ)
            })), this.sink(LQ, qQ), this.writeCaster(FQ, dF, LQ, 0, QQ.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(FQ, QQ.planes).finally((() => {
          this.planesLoading--
        })));
        return FQ
      }
      async loadPlanes(QQ, FQ) {
        const wQ = await Promise.all(FQ.map((QQ => this.texture(QQ.texture))));
        if (wQ.some((QQ => null === QQ))) return;
        const LQ = wQ,
          qQ = Lv(Math.max(...LQ.map((QQ => Math.min(QQ.width, QQ.height))))),
          oQ = Qw(qQ),
          DQ = this.allocateMask(FQ.length * (4 + oQ));
        if (DQ < 0) return;
        const kQ = new Uint32Array(FQ.length * (4 + oQ)),
          vQ = 4 * FQ.length;
        FQ.forEach(((QQ, FQ) => {
          const wQ = DQ + vQ + FQ * oQ;
          kQ.set(function(QQ, FQ) {
            const [wQ, LQ] = QQ.tangent, qQ = Math.hypot(wQ, LQ) || 1, oQ = wQ / qQ, DQ = LQ / qQ, kQ = QQ.centre[0] * DQ - QQ.centre[1] * oQ, vQ = new Uint32Array(4);
            return new Float32Array(vQ.buffer, 0, 3).set([oQ, DQ, kQ]), vQ[3] = FQ, vQ
          }(QQ, wQ), 4 * FQ), kQ.set(wv(LQ[FQ].alpha, LQ[FQ].width, LQ[FQ].height, qQ), vQ + FQ * oQ)
        })), this.sink(DQ, kQ), this.writeCaster(QQ, BF, DQ, FQ.length, qQ)
      }
      texture(QQ) {
        let FQ = this.textures.get(QQ);
        return FQ || (FQ = this.loadTexture(QQ).catch((FQ => (this.warn(`Sun shadows: no mask for ${QQ}: ${FQ instanceof Error?FQ.message:String(FQ)}`), null))), this.textures.set(QQ, FQ)), FQ
      }
      allocateMask(QQ) {
        if (this.nextMaskWord + QQ > ww) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const FQ = 32768 + this.nextMaskWord;
        return this.nextMaskWord += QQ, FQ
      }
      writeCaster(QQ, FQ, wQ, LQ, qQ) {
        this.sink(0 + 4 * QQ, Uint32Array.of(FQ, wQ, LQ, qQ))
      }
      warnOnce(QQ) {
        this.warned.has(QQ) || (this.warned.add(QQ), this.warn(QQ))
      }
    }
    var ov = wQ(2780);

    function Dv(QQ) {
      return !QQ.YA && !QQ.pW && !QQ.Vx
    }

    function kv() {
      return {
        bricks: new Uint32Array(XF),
        cells: new Uint16Array(32768),
        special: new Uint8Array(jF)
      }
    }
    class vv {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = QQ, this.writeVoxels = FQ, this.writePool = wQ, this.warn = LQ, this.eyeChunk = null, this.slotChunk = new Array(UF).fill(null), this.slotVersion = new Float64Array(UF).fill(-1), this.slotPool = new Array(UF).fill(null), this.starved = new Uint8Array(UF), this.queue = [], this.queued = new Uint8Array(UF), this.queueSorted = !0, this.freePool = new Uint32Array(Lw), this.freeCount = Lw, this.casterTable = null, this.warnedPool = !1, this.scratch = kv(), this.victimScratch = kv(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * UF), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let qQ = 0; qQ < Lw; qQ++) this.freePool[qQ] = 65535 - qQ
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Lw - this.freeCount
      }
      chunkAdded(QQ) {
        if (null === this.eyeChunk || !this.inRadius(QQ.i, QQ.j, QQ.k)) return;
        const FQ = EF(QQ.i, QQ.j, QQ.k);
        this.slotChunk[FQ] = QQ, this.slotVersion[FQ] = -1, this.enqueue(FQ)
      }
      update(QQ, FQ, wQ) {
        const LQ = this.casters.blockCaster;
        if (LQ !== this.casterTable) {
          this.casterTable = LQ;
          for (let QQ = 0; QQ < UF; QQ++) this.slotVersion[QQ] = -1, this.slotChunk[QQ] && this.enqueue(QQ)
        }
        const qQ = Math.floor(QQ[0] / 32),
          oQ = Math.floor(QQ[1] / 32),
          DQ = Math.floor(QQ[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== qQ || this.eyeChunk[1] !== oQ || this.eyeChunk[2] !== DQ) && (this.eyeChunk = [qQ, oQ, DQ], this.follow(FQ), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let kQ = 0; kQ < UF; kQ++) {
          const QQ = this.slotChunk[kQ];
          QQ && (QQ.vW || QQ.Ex !== this.slotVersion[kQ]) && this.enqueue(kQ)
        }
        this.drain(wQ), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(QQ, FQ) {
        this.records.set(FQ, 4 * QQ), this.windowTopStale = !0, this.writeVoxels(4 * QQ, FQ)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const QQ = this.records;
        let FQ = -1 / 0;
        for (let LQ = 0; LQ < QQ.length; LQ += 4) {
          const wQ = 255 & QQ[LQ + 3];
          wQ !== KF && wQ !== zF || !this.inRadius(QQ[LQ], QQ[LQ + 1], QQ[LQ + 2]) || (FQ = Math.max(FQ, QQ[LQ + 1] * sF + (QQ[LQ + 3] >>> 8)))
        }
        const wQ = FQ === -1 / 0 ? 1 : FQ + VF;
        wQ !== this.windowTop[0] && (this.windowTop[0] = wQ, this.writeVoxels(fF, this.windowTop))
      }
      follow(QQ) {
        const FQ = this.eyeChunk,
          [wQ, LQ, qQ] = rF;
        for (let DQ = -qQ; DQ <= qQ; DQ++)
          for (let qQ = -LQ; qQ <= LQ; qQ++)
            for (let LQ = -wQ; LQ <= wQ; LQ++) {
              var oQ;
              const wQ = FQ[0] + LQ,
                kQ = FQ[1] + qQ,
                vQ = FQ[2] + DQ,
                mQ = EF(wQ, kQ, vQ),
                uQ = this.slotChunk[mQ];
              if (uQ && !uQ.vW && uQ.i === wQ && uQ.j === kQ && uQ.k === vQ) continue;
              const HQ = null !== (oQ = QQ(wQ, kQ, vQ)) && void 0 !== oQ ? oQ : null;
              uQ && (uQ.i !== wQ || uQ.j !== kQ || uQ.k !== vQ) && this.slotPool[mQ] && (this.release(mQ), this.record.fill(0), this.writeRecord(mQ, this.record)), this.slotChunk[mQ] = HQ, this.slotVersion[mQ] = -1, (HQ || uQ) && this.enqueue(mQ)
            }
      }
      requeueStarved() {
        for (let QQ = 0; QQ < UF; QQ++) this.starved[QQ] && this.slotChunk[QQ] && this.enqueue(QQ)
      }
      enqueue(QQ) {
        this.queued[QQ] || (this.queued[QQ] = 1, this.queue.push(QQ), this.queueSorted = !1)
      }
      drain(QQ) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const QQ = new Map;
          for (const FQ of this.queue) QQ.set(FQ, this.slotDistance(FQ));
          this.queue.sort(((FQ, wQ) => QQ.get(wQ) - QQ.get(FQ))), this.queueSorted = !0
        }
        const FQ = performance.now();
        let wQ = 0;
        const LQ = [];
        for (; this.queue.length > 0 && (0 === wQ || performance.now() - FQ < QQ);) {
          const QQ = this.queue.pop(),
            FQ = this.slotChunk[QQ];
          !FQ || FQ.vW || Dv(FQ) ? (this.queued[QQ] = 0, this.encodeSlot(QQ), wQ++) : LQ.push(QQ)
        }
        for (let qQ = LQ.length - 1; qQ >= 0; qQ--) this.queue.push(LQ[qQ])
      }
      slotDistance(QQ) {
        const FQ = this.slotChunk[QQ],
          wQ = this.eyeChunk;
        return FQ ? Math.max(Math.abs(FQ.i - wQ[0]), Math.abs(FQ.j - wQ[1]), Math.abs(FQ.k - wQ[2])) : 0
      }
      inRadius(QQ, FQ, wQ) {
        const LQ = this.eyeChunk,
          [qQ, oQ, DQ] = rF;
        return Math.abs(QQ - LQ[0]) <= qQ && Math.abs(FQ - LQ[1]) <= oQ && Math.abs(wQ - LQ[2]) <= DQ
      }
      release(QQ) {
        const FQ = this.slotPool[QQ];
        if (FQ) {
          for (let QQ = FQ.length - 1; QQ >= 0; QQ--) this.freePool[this.freeCount++] = FQ[QQ];
          this.slotPool[QQ] = null
        }
      }
      encodeSlot(QQ) {
        var FQ, wQ, LQ, qQ, oQ;
        let DQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          kQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const vQ = null !== (FQ = null === (wQ = this.slotPool[QQ]) || void 0 === wQ ? void 0 : wQ.length) && void 0 !== FQ ? FQ : 0;
        this.release(QQ), this.starved[QQ] = 0;
        const mQ = this.slotChunk[QQ],
          uQ = this.record;
        if (!mQ || mQ.vW || !mQ.Sb) return this.slotChunk[QQ] = null, this.slotVersion[QQ] = -1, uQ.fill(0), this.writeRecord(QQ, uQ), void(vQ > 0 && this.requeueStarved());
        this.slotVersion[QQ] = mQ.Ex;
        const HQ = this.encodeBricks(mQ, QQ, DQ, kQ);
        uQ[0] = mQ.i, uQ[1] = mQ.j, uQ[2] = mQ.k, uQ[3] = HQ, this.writeRecord(QQ, uQ), null === (LQ = this.encoded) || void 0 === LQ || LQ.call(this, mQ), kQ && (null !== (qQ = null === (oQ = this.slotPool[QQ]) || void 0 === oQ ? void 0 : oQ.length) && void 0 !== qQ ? qQ : 0) < vQ && this.requeueStarved()
      }
      encodeBricks(QQ, FQ, wQ, LQ) {
        if (QQ.wx) return TF;
        const qQ = this.casters.blockCaster,
          {
            data: oQ,
            stride: DQ,
            offset: kQ
          } = QQ.Sb,
          [vQ, mQ, uQ] = DQ,
          HQ = sF,
          {
            bricks: bQ,
            cells: YQ,
            special: xQ
          } = wQ;
        bQ.fill(0), xQ.fill(0);
        let AQ = 0,
          tQ = 0,
          eQ = 0;
        for (let MQ = 0; MQ < HQ; MQ++) {
          const FQ = MQ >> 2,
            wQ = 3 & MQ,
            LQ = QQ.pY[MQ],
            DQ = LQ === ov.f ? -1 : LQ < qQ.length ? qQ[LQ] : 0;
          if (0 !== DQ)
            for (let QQ = 0; QQ < HQ; QQ++) {
              const LQ = QQ >> 2,
                GQ = 3 & QQ;
              let pQ = kQ + QQ * vQ + MQ * mQ;
              for (let QQ = 0; QQ < HQ; QQ++, pQ += uQ) {
                let kQ = DQ;
                if (kQ < 0) {
                  const QQ = oQ[pQ];
                  if (kQ = QQ < qQ.length ? qQ[QQ] : 0, 0 === kQ) continue
                }
                const vQ = nF(LQ, FQ, QQ >> 2),
                  mQ = gF(GQ, wQ, 3 & QQ);
                bQ[3 * vQ + (mQ >>> 5)] |= 1 << (31 & mQ), YQ[vQ * lF + mQ] = kQ, AQ++, eQ = MQ, kQ === PF ? tQ++ : xQ[vQ] = 1
              }
            }
        }
        return 0 === AQ ? TF : 32768 === tQ ? KF | eQ << 8 : (this.writePoolEntries(FQ, wQ, LQ), this.writeVoxels(aF + FQ * XF, bQ), zF | eQ << 8)
      }
      writePoolEntries(QQ, FQ, wQ) {
        const {
          bricks: LQ,
          cells: qQ,
          special: oQ
        } = FQ, DQ = this.entry;
        let kQ = 0;
        for (let uQ = 0; uQ < jF; uQ++) kQ += oQ[uQ];
        if (0 === kQ) return;
        wQ && this.freeCount < kQ && this.evictBeyond(QQ, kQ);
        const vQ = new Uint32Array(wQ ? Math.min(kQ, this.freeCount) : 0);
        let mQ = 0;
        for (let uQ = 0; uQ < jF; uQ++) {
          if (!oQ[uQ]) continue;
          const wQ = 3 * uQ;
          if (mQ === vQ.length) {
            this.dropSpecials(FQ, uQ), this.starved[QQ] = 1;
            continue
          }
          const kQ = this.freePool[--this.freeCount];
          vQ[mQ++] = kQ;
          for (let QQ = 0; QQ < lF; QQ++) {
            const FQ = LQ[wQ + (QQ >>> 5)] >>> (31 & QQ) & 1 ? qQ[uQ * lF + QQ] : 0;
            1 & QQ ? DQ[QQ >> 1] |= FQ << 16 : DQ[QQ >> 1] = FQ
          }
          LQ[wQ + 2] = kQ + 1, this.writePool(qw + 32 * kQ, DQ)
        }
        vQ.length > 0 && (this.slotPool[QQ] = vQ)
      }
      evictBeyond(QQ, FQ) {
        const wQ = this.slotDistance(QQ),
          LQ = [];
        for (let qQ = 0; qQ < UF; qQ++) qQ !== QQ && this.slotPool[qQ] && this.slotDistance(qQ) > wQ && LQ.push(qQ);
        LQ.sort(((QQ, FQ) => this.slotDistance(FQ) - this.slotDistance(QQ)));
        for (const qQ of LQ) {
          if (this.freeCount >= FQ) return;
          const QQ = this.slotChunk[qQ];
          QQ && !QQ.vW && QQ.Sb && (QQ.Ex === this.slotVersion[qQ] || Dv(QQ)) && this.encodeSlot(qQ, this.victimScratch, !1)
        }
      }
      dropSpecials(QQ, FQ) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const wQ = 3 * FQ;
        for (let LQ = 0; LQ < lF; LQ++) QQ.cells[FQ * lF + LQ] !== PF && (QQ.bricks[wQ + (LQ >>> 5)] &= ~(1 << (31 & LQ)))
      }
    }
    var mv = wQ(37065);
    class uv {
      constructor(QQ) {
        this.device = QQ, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Aw, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.nH = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = QQ.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = QQ.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(QQ, FQ, wQ) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: LQ
        } = this;
        LQ.mY(QQ, FQ), wQ.forEachSunShadowCaster((QQ => {
          this.add(QQ)
        })), LQ.finish();
        const qQ = 0 === LQ.parts;
        if (qQ && this.uploadedEmpty) return;
        this.uploadedEmpty = qQ;
        const {
          queue: oQ
        } = this.device, {
          words: DQ
        } = LQ;
        oQ.writeBuffer(this.frameBuffer, 0, DQ, 0, 16385), LQ.refs > 0 && oQ.writeBuffer(this.frameBuffer, 65540, DQ, vw, LQ.refs), qQ || oQ.writeBuffer(this.frameBuffer, 327684, DQ, mw, LQ.parts * kw)
      }
      add(QQ) {
        const FQ = this.gridFor(QQ);
        if (!FQ) return;
        const {
          frame: wQ
        } = this, {
          nH: LQ,
          worldAt: qQ,
          instances: oQ,
          instanceCount: DQ,
          thin: kQ
        } = QQ;
        if (oQ)
          for (let vQ = 0; vQ < DQ; vQ++) kQ ? (ew(oQ, 16 * vQ, LQ, qQ, this.nH), wQ.add(FQ, this.nH)) : wQ.add(FQ, oQ, 16 * vQ);
        else wQ.add(FQ, LQ, qQ)
      }
      gridFor(QQ) {
        let {
          geometry: FQ,
          indexed: wQ,
          first: LQ,
          count: qQ,
          skip: oQ
        } = QQ, DQ = this.grids.get(FQ);
        DQ || (DQ = new Map, this.grids.set(FQ, DQ));
        const kQ = `${wQ?LQ:-1-LQ}:${qQ}:${null!==oQ&&void 0!==oQ?oQ:""}`;
        let vQ = DQ.get(kQ);
        if (void 0 !== vQ || this.gridsFull) return vQ;
        const mQ = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = mQ + 2;
        else if (mQ > this.bakeDeadline) return;
        return vQ = this.bake(FQ, wQ, LQ, qQ, oQ), void 0 !== vQ && DQ.set(kQ, vQ), vQ
      }
      bake(QQ, FQ, wQ, LQ, qQ) {
        const oQ = QQ.vertexAttributes.find((QQ => "position" === QQ.kind)),
          DQ = oQ ? function(QQ, FQ, wQ, LQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const oQ = QQ => FQ ? FQ[wQ + QQ] : wQ + QQ,
              DQ = QQ => null !== qQ && [0, 1, 2].some((FQ => {
                const wQ = oQ(QQ + FQ);
                return wQ >= qQ[0] && wQ < qQ[1]
              })),
              kQ = [1 / 0, 1 / 0, 1 / 0],
              vQ = [-1 / 0, -1 / 0, -1 / 0];
            for (let MQ = 0; MQ + 2 < LQ; MQ += 3)
              if (!DQ(MQ))
                for (let FQ = 0; FQ < 3; FQ++) {
                  const wQ = oQ(MQ + FQ);
                  for (let FQ = 0; FQ < 3; FQ++) kQ[FQ] = Math.min(kQ[FQ], QQ[3 * wQ + FQ]), vQ[FQ] = Math.max(vQ[FQ], QQ[3 * wQ + FQ])
                }
            const mQ = Math.max(vQ[0] - kQ[0], vQ[1] - kQ[1], vQ[2] - kQ[2]);
            if (!(mQ > 0)) return null;
            const uQ = mQ / 64,
              HQ = [0, 0, 0],
              bQ = [0, 0, 0],
              YQ = [0, 0, 0];
            for (let MQ = 0; MQ < 3; MQ++) HQ[MQ] = Math.min(65, Math.ceil((vQ[MQ] - kQ[MQ]) / uQ) + 1), bQ[MQ] = kQ[MQ] - uQ / 2, YQ[MQ] = bQ[MQ] + HQ[MQ] * uQ;
            const xQ = new Uint32Array(Math.ceil(HQ[0] * HQ[1] * HQ[2] / 32)),
              AQ = new Float64Array(9),
              tQ = [0, 0, 0],
              eQ = [0, 0, 0];
            for (let MQ = 0; MQ + 2 < LQ; MQ += 3)
              if (!DQ(MQ)) {
                for (let FQ = 0; FQ < 3; FQ++) {
                  const wQ = oQ(MQ + FQ);
                  for (let LQ = 0; LQ < 3; LQ++) AQ[3 * FQ + LQ] = QQ[3 * wQ + LQ]
                }
                for (let QQ = 0; QQ < 3; QQ++) {
                  const FQ = Math.min(AQ[QQ], AQ[3 + QQ], AQ[6 + QQ]),
                    wQ = Math.max(AQ[QQ], AQ[3 + QQ], AQ[6 + QQ]);
                  tQ[QQ] = Math.max(0, Math.floor((FQ - bQ[QQ]) / uQ - 1e-6)), eQ[QQ] = Math.min(HQ[QQ] - 1, Math.floor((wQ - bQ[QQ]) / uQ + 1e-6))
                }
                for (let QQ = tQ[2]; QQ <= eQ[2]; QQ++)
                  for (let FQ = tQ[1]; FQ <= eQ[1]; FQ++)
                    for (let wQ = tQ[0]; wQ <= eQ[0]; wQ++)
                      if (Mw(AQ, bQ[0] + (wQ + .5) * uQ, bQ[1] + (FQ + .5) * uQ, bQ[2] + (QQ + .5) * uQ, uQ / 2)) {
                        const LQ = wQ + HQ[0] * (FQ + HQ[1] * QQ);
                        xQ[LQ >>> 5] |= 1 << (31 & LQ)
                      }
              } return {
              words: xQ,
              lo: bQ,
              hi: YQ,
              cell: uQ,
              dims: HQ
            }
          }((0, mv.l)(oQ, QQ.vertexCount), FQ ? QQ.indexData : null, wQ, LQ, qQ) : null;
        if (!DQ) return null;
        const {
          words: kQ,
          ...vQ
        } = DQ;
        if (this.gridTop + kQ.length > Hw) return void(this.gridsFull = !0);
        const mQ = this.gridTop;
        return this.gridTop += kQ.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * mQ, kQ), {
          ...vQ,
          at: mQ
        }
      }
    }
    const Hv = Math.cos(1 * Math.PI / 180);

    function bv(QQ, FQ) {
      return QQ[0] * FQ[0] + QQ[1] * FQ[1] + QQ[2] * FQ[2] < Hv
    }
    async function Yv(QQ) {
      const {
        pixels: FQ,
        width: wQ,
        height: LQ
      } = await jq(QQ), qQ = new Uint8Array(wQ * LQ);
      for (let oQ = 0; oQ < qQ.length; oQ++) qQ[oQ] = FQ[4 * oQ + 3];
      return {
        width: wQ,
        height: LQ,
        alpha: qQ
      }
    }
    class xv {
      constructor(QQ, FQ) {
        this.device = QQ, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(pw.q), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = QQ.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = QQ.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * hF,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = QQ.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [wQ, LQ, qQ] = pw.r;
        this.volume = QQ.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: wQ,
            height: LQ,
            depthOrArrayLayers: qQ
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = QQ.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = QQ.createBuffer({
          label: "sun-shadow-volume-work",
          size: pw.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = FQ ? new uv(QQ) : null, this.entityStandIn = FQ ? null : QQ.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var QQ, FQ;
        const wQ = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || wQ.push("Lite sun shadow volume pipeline compiling");
        const LQ = null !== (QQ = null === (FQ = this.casters) || void 0 === FQ ? void 0 : FQ.planesLoading) && void 0 !== QQ ? QQ : 0;
        return LQ > 0 && wQ.push(`${LQ} Lite sun shadow plane casters loading their textures`), wQ
      }
      entries() {
        var QQ, FQ, wQ, LQ;
        const qQ = RF.u;
        return [{
          binding: qQ.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: qQ.Sb,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: qQ.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: qQ.volume,
          resource: this.volumeView
        }, {
          binding: qQ.sampler,
          resource: this.volumeSampler
        }, {
          binding: qQ.entities,
          resource: {
            buffer: null !== (QQ = null === (FQ = this.entities) || void 0 === FQ ? void 0 : FQ.frameBuffer) && void 0 !== QQ ? QQ : this.entityStandIn
          }
        }, {
          binding: qQ.entityGrids,
          resource: {
            buffer: null !== (wQ = null === (LQ = this.entities) || void 0 === LQ ? void 0 : LQ.gridBuffer) && void 0 !== wQ ? wQ : this.entityStandIn
          }
        }]
      }
      prepare(QQ, FQ, wQ) {
        var LQ;
        this.entitiesThisFrame = !1;
        const qQ = null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.sunShadowReach()) && void 0 !== LQ ? LQ : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!wQ || !qQ.sunShadow && !qQ.airShadow) return void(this.volumeHolds = null);
        if (QQ.nH.KQQ !== sF) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${QQ.nH.KQQ}; everything is lit.`)));
        const oQ = this.start(QQ);
        this.casters.update(QQ.Bb, QQ.Bb.LY.length);
        const DQ = QQ.Mb;
        for (let bQ = 0; bQ < 3; bQ++) this.eye[bQ] = FQ[bQ] + DQ[bQ];
        const kQ = (0, pw.z)(this.eye);
        this.staleNear = kQ;
        const vQ = QQ.nH.AA;
        oQ.update(this.eye, ((QQ, FQ, wQ) => vQ.tA(QQ, FQ, wQ)), 1);
        const mQ = (0, pw.v)(wQ.MQQ()),
          uQ = oQ.eyeChunk,
          HQ = this.uniformInts;
        for (let bQ = 0; bQ < 3; bQ++) HQ[bQ] = uQ[bQ], HQ[4 + bQ] = kQ[bQ];
        this.entitiesThisFrame = null !== this.entities && qQ.sunShadow, this.entitiesThisFrame && xw(this.uniformFloats, 8, FQ, mQ), null !== this.volumeHolds && (this.castersWritten || bv(mQ, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(kQ, mQ, uQ)
      }
      markStale(QQ) {
        const FQ = this.staleNear,
          wQ = sF,
          LQ = [QQ.i * wQ, QQ.j * wQ, QQ.k * wQ];
        for (let oQ = 0; oQ < 3; oQ++)
          if (LQ[oQ] + wQ <= FQ[oQ] - wQ || LQ[oQ] >= FQ[oQ] + pw.r[oQ] + wQ) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const qQ = this.stale;
        for (let oQ = 0; oQ < qQ.length; oQ += 4)
          if (qQ[oQ] === QQ.i && qQ[oQ + 1] === QQ.j && qQ[oQ + 2] === QQ.k) return void(qQ[oQ + 3] = this.swept);
        if (16 === qQ.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        qQ.push(QQ.i, QQ.j, QQ.k, this.swept)
      }
      writeStale() {
        const QQ = this.swept,
          FQ = this.stale;
        this.staleAll && QQ - this.staleAllSwept >= pw.j && (this.staleAll = !1, FQ.length = 0);
        let wQ = 0;
        for (let qQ = 0; qQ < FQ.length; qQ += 4)
          if (QQ - FQ[qQ + 3] < pw.j) {
            for (let QQ = 0; QQ < 4; QQ++) FQ[wQ + QQ] = FQ[qQ + QQ];
            wQ += 4
          } FQ.length = wQ;
        const LQ = this.uniformInts;
        LQ[3] = this.staleAll ? 5 : wQ / 4;
        for (let qQ = 0; qQ < 4; qQ++)
          for (let QQ = 0; QQ < 3; QQ++) LQ[16 + 4 * qQ + QQ] = 4 * qQ < wQ ? FQ[4 * qQ + QQ] * sF : 0
      }
      writeUniform() {
        const QQ = this.uniformInts;
        let FQ = this.uniformWritten;
        if (FQ) {
          let wQ = !0;
          for (let LQ = 0; LQ < QQ.length && wQ; LQ++) wQ = QQ[LQ] === FQ[LQ];
          if (wQ) return
        }
        FQ ??= this.uniformWritten = new Int32Array(QQ.length), FQ.set(QQ), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(QQ) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, QQ)
      }
      computeVolume(QQ, FQ, wQ) {
        const LQ = this.buildVolumePass();
        if (!LQ) return void(this.volumeHolds = null);
        const qQ = (0, pw.y)(this.volumeHolds, QQ);
        this.volumeHolds = QQ;
        const oQ = 1 === qQ.length && qQ[0].size.every(((QQ, FQ) => QQ === pw.r[FQ])),
          DQ = this.sweptChunk,
          kQ = this.sweptLight,
          vQ = FQ[0] !== kQ[0] || FQ[1] !== kQ[1] || FQ[2] !== kQ[2],
          mQ = wQ[0] !== DQ[0] || wQ[1] !== DQ[1] || wQ[2] !== DQ[2],
          uQ = vQ && bv(FQ, kQ);
        if ((oQ || this.written || mQ || uQ) && (this.fastLeft = pw.j), oQ || this.written || vQ || mQ) {
          this.written = !1;
          for (let QQ = 0; QQ < 3; QQ++) DQ[QQ] = wQ[QQ], kQ[QQ] = FQ[QQ];
          this.sweepLeft = oQ ? 0 : pw.j
        }
        if (oQ ? this.swept += pw.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, qQ.push(...(0, pw.B)(QQ, this.slice)), this.slice = (this.slice + 1) % pw.j, this.swept++), 0 === qQ.length) return;
        const HQ = (0, pw.F)(this.workData, FQ, qQ);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const bQ = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          YQ = bQ.beginComputePass({
            label: "sun-shadow-volume"
          });
        YQ.setPipeline(LQ.pipeline), YQ.setBindGroup(iw.group, LQ.bindGroup), YQ.dispatchWorkgroups(Math.ceil(HQ / pw.n)), YQ.end(), this.device.queue.submit([bQ.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const QQ = iw,
          FQ = GPUShaderStage.COMPUTE,
          wQ = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: QQ.uniform,
              visibility: FQ,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: QQ.Sb,
              visibility: FQ,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: QQ.special,
              visibility: FQ,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: QQ.work,
              visibility: FQ,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: QQ.volume,
              visibility: FQ,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          LQ = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: wQ,
            entries: [{
              binding: QQ.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: QQ.Sb,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: QQ.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: QQ.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: QQ.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [wQ]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Ww()
            }),
            entryPoint: "main"
          }
        }).then((QQ => {
          this.volumePass = {
            pipeline: QQ,
            bindGroup: LQ
          }
        }), (QQ => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(QQ)}`)
        })), null
      }
      start(QQ) {
        if (this.window) return this.window;
        const FQ = (QQ, FQ) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * QQ, FQ)
        };
        this.casters = new qv(((QQ, wQ) => {
          this.castersWritten = !0, FQ(QQ, wQ)
        }), Yv);
        const wQ = new vv(this.casters, ((QQ, FQ) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * QQ, FQ)
        }), FQ);
        return wQ.encoded = QQ => {
          this.markStale(QQ)
        }, QQ.nH.on("chunkAdded", (QQ => {
          wQ.chunkAdded(QQ)
        })), this.window = wQ, wQ
      }
    }
    var Av = wQ(38222),
      tv = wQ(38230);
    const ev = 0,
      Mv = 3,
      Gv = 4,
      pv = 5;

    function cv(QQ, FQ, wQ, LQ) {
      QQ.drawOffset(FQ, LQ + ev), FQ[LQ + Mv] = QQ.drawTime(), wQ[LQ + Gv] = QQ.ring.drawStart(), wQ[LQ + pv] = QQ.ring.drawCount()
    }
    const Cv = `\n${tL}\n\nconst MAX_STOPS = ${tv.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${tv.e/4}>,\n\tcolor1: array<vec4f, ${tv.e}>,\n\tcolor2: array<vec4f, ${tv.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${tv.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${tv.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var Sv = wQ(41015);
    class iv {
      constructor(QQ, FQ, wQ, LQ) {
        this.device = QQ, this.system = FQ, this.frameIndex = wQ, this.bindings = LQ, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Sv.d)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (QQ, FQ) => {
          this.device.queue.writeBuffer(this.ring, QQ * tv.f * 4, this.system.ring.records, QQ * tv.f, (FQ - QQ) * tv.f)
        };
        const {
          name: qQ
        } = FQ;
        this.ring = QQ.createBuffer({
          label: `particles-${qQ}`,
          size: FQ.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = QQ.createBuffer({
          label: `particles-uniforms-${qQ}`,
          size: 4 * tv.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(QQ) {
        const FQ = (0, Sv.b)(this.system, this.uniformBits, QQ);
        FQ && (this.uniformBits = FQ, this.device.queue.writeBuffer(this.uniforms, 0, FQ))
      }
      bind() {
        const {
          system: QQ
        } = this, FQ = this.texture;
        (0, Sv.g)(QQ, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${QQ.name}`,
          size: [tv.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * tv.k
        }, [tv.k, 1]));
        const wQ = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === FQ.view && this.boundSampler === FQ.sampler && this.boundRamp === wQ || (this.boundView = FQ.view, this.boundSampler = FQ.sampler, this.boundRamp = wQ, this.bindGroup = this.device.createBindGroup({
          label: `particles-${QQ.name}`,
          layout: this.bindings.layout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.uniforms
            }
          }, {
            binding: 1,
            resource: {
              buffer: this.ring
            }
          }, {
            binding: 2,
            resource: FQ.sampler
          }, {
            binding: 3,
            resource: FQ.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: wQ
          }]
        }))
      }
      destroy() {
        var QQ;
        this.ring.destroy(), this.uniforms.destroy(), null === (QQ = this.ramp) || void 0 === QQ || QQ.destroy()
      }
    }
    class Wv {
      constructor(QQ, FQ) {
        this.device = QQ, this.resources = FQ, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, mF.b)();
        const wQ = QQ.createBindGroupLayout({
          label: "particles-system",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: 3,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "float"
            }
          }, {
            binding: 4,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: 5,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "float"
            }
          }]
        });
        this.frameLayout = QQ.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = QQ.createPipelineLayout({
          bindGroupLayouts: [FF(QQ), wQ, this.frameLayout]
        }), this.module = QQ.createShaderModule({
          label: "particles",
          code: Cv
        });
        const LQ = QQ.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        QQ.queue.writeTexture({
          texture: LQ
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: wQ,
          rampSampler: QQ.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: LQ.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (FQ, wQ) => (this.bindTarget(wQ), {
            renderable: this.renderable,
            pipeline: DF(QQ, wQ),
            draw: QQ => wQ === this.preparedTarget ? this.draw(QQ) : 0
          })
        }
      }
      get WqQ() {
        return this.systems.size
      }
      reset() {
        for (const QQ of this.systems.keys()) QQ.reset()
      }
      describePendingWork() {
        return (0, Av.g)(this.systems.keys(), "Lite")
      }
      aT(QQ, FQ) {
        const wQ = new Av.e(QQ, FQ, this);
        return this.systems.set(wQ, new iv(this.device, wQ, this.allocateFrameIndex(), this.bindings)), wQ
      }
      kQQ(QQ, FQ) {
        for (const wQ of this.systems.keys()) wQ.kQQ(QQ, FQ)
      }
      canDraw(QQ) {
        const FQ = this.systems.get(QQ),
          wQ = QQ.texture ? this.resources.boundTexture(QQ.texture) : null;
        if (!FQ || !wQ || !this.targetPipelines) return !1;
        if (FQ.texture = wQ, FQ.pipelines.length = 0, !hq(QQ.blendMode)) return this.warnOnce(`blend:${QQ.blendMode}`, `particle blend mode ${QQ.blendMode} is not drawn (${QQ.name})`), !0;
        const LQ = (0, rq.l)(QQ.blendMode);
        for (const qQ of LQ) {
          const QQ = this.pipelineFor(qQ);
          if (!1 === QQ) return FQ.pipelines.length = 0, !0;
          QQ && FQ.pipelines.push(QQ)
        }
        return FQ.pipelines.length === LQ.length
      }
      disposeStopped(QQ) {
        QQ.dispose()
      }
      remove(QQ) {
        const FQ = this.systems.get(QQ);
        FQ && (this.systems.delete(QQ), FQ.destroy(), this.freeFrameIndices.push(FQ.frameIndex))
      }
      prepare(QQ) {
        const FQ = QQ.animationRatio || 1;
        kF(this.renderable._worldCenter, QQ, LF), this.preparedTarget = this.target, this.draws.length = 0;
        let wQ = 0;
        for (const LQ of this.systems.values()) {
          const QQ = LQ.system;
          if (!QQ.animateIfActive(FQ)) continue;
          if (QQ.ring.takeUploads(LQ.upload), !QQ.hasLiveParticles() || 0 === LQ.pipelines.length) continue;
          LQ.writeUniforms(this.warnOnce), LQ.bind();
          const qQ = 64 * LQ.frameIndex;
          LQ.count = QQ.ring.drawCount(), cv(QQ, this.frameData, this.frameBits, qQ), wQ = Math.max(wQ, qQ + 64), this.draws.push(LQ)
        }
        wQ > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, wQ)
      }
      draw(QQ) {
        let FQ = 0,
          wQ = null;
        for (const LQ of this.draws) {
          QQ.setBindGroup(1, LQ.bindGroup), QQ.setBindGroup(2, this.frameBindGroup, [256 * LQ.frameIndex]);
          for (const qQ of LQ.pipelines) qQ !== wQ && (QQ.setPipeline(qQ), wQ = qQ), QQ.draw(4, LQ.count), FQ++
        }
        return FQ
      }
      bindTarget(QQ) {
        this.target = QQ;
        const FQ = `${QQ._colorFormat}|${QQ._depthStencilFormat}|${QQ._depthCompare}|${QQ._sampleCount}`;
        let wQ = this.pipelines.get(FQ);
        wQ || (wQ = new Map, this.pipelines.set(FQ, wQ)), this.targetPipelines = wQ
      }
      pipelineFor(QQ) {
        var FQ;
        const wQ = this.targetPipelines,
          LQ = wQ.get(QQ);
        if (void 0 !== LQ) return LQ;
        wQ.set(QQ, null);
        const qQ = this.target,
          oQ = QQ === rq.e,
          DQ = null !== (FQ = qQ._depthCompare) && void 0 !== FQ ? FQ : wF;
        return this.device.createRenderPipelineAsync({
          label: `particles-${QQ}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: yQ({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: oQ ? 1 : 0
            }
          }, qQ, Jq((0, rq.j)(QQ))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: qQ._depthStencilFormat ? {
            format: qQ._depthStencilFormat,
            depthCompare: DQ,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: qQ._sampleCount
          }
        }).then((FQ => {
          wQ.set(QQ, FQ)
        }), (FQ => {
          wQ.set(QQ, !1), console.error("Lite particle pipeline failed", FQ), gq("particles", `blend-${QQ}`, FQ)
        })), null
      }
      allocateFrameIndex() {
        const QQ = this.freeFrameIndices.pop();
        if (void 0 !== QQ) return QQ;
        const FQ = this.nextFrameIndex++;
        if (64 * (FQ + 1) > this.frameData.length) {
          const QQ = new Float32Array(2 * this.frameData.length);
          QQ.set(this.frameData), this.frameData = QQ, this.frameBits = new Uint32Array(QQ.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return FQ
      }
      createFrameBuffer() {
        return this.device.createBuffer({
          label: "particles-frames",
          size: this.frameData.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      createFrameBindGroup() {
        return this.device.createBindGroup({
          label: "particles-frames",
          layout: this.frameLayout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.frameBuffer,
              size: 32
            }
          }]
        })
      }
    }
    class Rv {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.lite = QQ, this.canvas = FQ, this.info = wQ, this.resources = qQ, this.SLQ = !1, this.needPOTTextures = !1, this.r_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = FQ.width, this.renderHeight = FQ.height, this.caps = {
          maxTextureSize: LQ.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: LQ.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      getRenderWidth() {
        return this.renderWidth
      }
      getRenderHeight() {
        return this.renderHeight
      }
      getHardwareScalingLevel() {
        return 1
      }
      setSize(QQ, FQ) {
        if (this.renderWidth === QQ && this.renderHeight === FQ) return !1;
        const wQ = this.renderWidth,
          LQ = this.renderHeight;
        this.renderWidth = QQ, this.renderHeight = FQ;
        try {
          (0, XQ.r)(this.lite, QQ, FQ)
        } catch (qQ) {
          if (qQ instanceof DOMException && "InvalidStateError" === qQ.name) {
            this.renderWidth = wQ, this.renderHeight = LQ;
            try {
              (0, XQ.r)(this.lite, wQ, LQ)
            } catch {
              this.canvas.width = wQ, this.canvas.height = LQ
            }
            return console.warn("WebGPU could not allocate render targets for resize", QQ, FQ, qQ.message), !1
          }
          throw qQ
        }
        return !0
      }
      resize() {}
      getRenderingCanvas() {
        return this.canvas
      }
      getInfo() {
        return this.info
      }
      eC() {
        const QQ = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : QQ - this.lastFrameTime, this.lastFrameTime = QQ
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(QQ, FQ) {
        const wQ = document.createElement("canvas");
        return wQ.width = QQ, wQ.height = FQ, wQ
      }
      T_(QQ, FQ) {
        var wQ;
        return null !== (wQ = this.resources.T_.get(QQ)) && void 0 !== wQ ? wQ : new JQ(this.resources, QQ, FQ)
      }
      atlasArray(QQ, FQ, wQ) {
        return this.resources.atlasArray(QQ, FQ, wQ)
      }
    }
    class Ov {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(QQ) {
        this.fov = QQ.fov, this.nearPlane = QQ.near, this.farPlane = QQ.far;
        const FQ = QQ.worldMatrix;
        for (let wQ = 0; wQ < 16; wQ++)
          if (this.worldMatrix[wQ] !== FQ[wQ]) return this.worldMatrix.set(FQ), void this.worldMatrixVersion++
      }
    }
    class sv {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        let uQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = QQ, this.lA = FQ, this.sceneTask = wQ, this.gpuDevice = LQ, this.terrain = qQ, this.meshes = oQ, this.particles = DQ, this.resources = kQ, this.sunShadow = uQ, this.FwQ = void 0, this.backendName = "WebGPU (Lite)", this.X3 = void 0, this.modelMeshes = void 0, this.camera = new Ov, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new VQ(LQ.lost), this.deviceLost = this.refusals.deviceLost, this.FwQ = new Rv(QQ, vQ, mQ, LQ.limits, kQ), (0, OQ.x)({
          ym: QQ => {
            UQ(QQ) && kQ.textureSlot(QQ)
          },
          loaded: QQ => UQ(QQ) ? kQ.textureLoaded(QQ) : null,
          canvasUpdated: (QQ, FQ, wQ) => {
            UQ(QQ) && kQ.canvasUpdated(QQ, FQ, wQ)
          }
        }), this.X3 = oQ.X3, this.modelMeshes = oQ.modelMeshes, FQ.camera = this.camera
      }
      get castsEntitySunShadows() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.sunShadow) || void 0 === FQ ? void 0 : FQ.tracesEntities) && void 0 !== QQ && QQ
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(QQ) {
        this.modelMeshes.attach(QQ.model, QQ.sceneMirror);
        const FQ = QQ.lA;
        this.setClearColour(FQ.clearColor.r, FQ.clearColor.g, FQ.clearColor.b), FQ.draw = () => {
          this.drawFrame(QQ, FQ)
        }
      }
      render(QQ) {
        try {
          this.FwQ.eC(), QQ.lA.render()
        } catch (FQ) {
          throw this.refusals.frameFailed(FQ), FQ
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var QQ, FQ, wQ, LQ;
        const qQ = [...this.particles.describePendingWork(), ...null !== (QQ = null === (FQ = this.sunShadow) || void 0 === FQ ? void 0 : FQ.describePendingWork()) && void 0 !== QQ ? QQ : []],
          oQ = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (wQ = this.terrain.sceneDepth) && void 0 !== wQ && wQ.compiling ? 1 : 0) + (null !== (LQ = this.terrain.shadowMask) && void 0 !== LQ && LQ.compiling ? 1 : 0);
        oQ > 0 && qQ.push(`${oQ} Lite pipelines compiling`);
        const DQ = this.terrain.buffersAwaitingVerdict;
        DQ > 0 && qQ.push(`${DQ} Lite terrain buffers awaiting their out-of-memory verdict`);
        const kQ = this.resources.texturesLoading;
        return kQ > 0 && qQ.push(`${kQ} Lite textures loading`), qQ
      }
      prepareTexture(QQ) {
        return null !== this.resources.boundTexture(QQ) || this.resources.textureFailed(QQ)
      }
      drawFrame(QQ, FQ) {
        var wQ, LQ, qQ, oQ, DQ, kQ;
        const vQ = Yk(QQ);
        this.camera.copyFromView(vQ), this.setClearColour(vQ.clearColour[0], vQ.clearColour[1], vQ.clearColour[2]), null === (wQ = this.sunShadow) || void 0 === wQ || wQ.prepare(QQ.dH, vQ.eye, null !== (LQ = QQ.dH.JY) && void 0 !== LQ ? LQ : null), this.terrain.prepare(QQ, vQ), null === (qQ = this.terrain.sceneDepth) || void 0 === qQ || qQ.setPlanes(vQ.near, vQ.far), null === (oQ = this.terrain.shadowMask) || void 0 === oQ || oQ.prepare(vQ), yD(this.sceneTask), this.meshes.prepare(FQ, vQ, QQ.model.earthSky, null !== (DQ = QQ.dH.JY) && void 0 !== DQ ? DQ : null), this.particles.prepare(vQ);
        const mQ = performance.now();
        this.resources.flushUploads(), null === (kQ = this.sunShadow) || void 0 === kQ || kQ.traceEntities(this.meshes);
        try {
          (0, XQ.q)(this.engine, this.lastFrameTime > 0 ? mQ - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = mQ
      }
      setClearColour(QQ, FQ, wQ) {
        const LQ = this.lA.clearColor;
        LQ.r = QQ, LQ.g = FQ, LQ.b = wQ, LQ.a = 1
      }
    }
    const rv = "WebGPU device lost while Lite was starting";

    function Iv(QQ, FQ) {
      return "object" === typeof QQ && null !== QQ ? Object.assign(QQ, {
        startStep: FQ
      }) : QQ
    }
    async function Uv(QQ, FQ) {
      const wQ = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!wQ) throw Iv(new Error("No WebGPU adapter"), "no_adapter");
      const LQ = wQ.info,
        qQ = {
          vendor: (null === LQ || void 0 === LQ ? void 0 : LQ.vendor) || "unknown vendor",
          renderer: (null === LQ || void 0 === LQ ? void 0 : LQ.architecture) || "unknown renderer",
          version: (null === LQ || void 0 === LQ ? void 0 : LQ.description) || "unknown version"
        },
        oQ = function(QQ) {
          const FQ = {};
          for (const wQ in QQ.limits) {
            const LQ = QQ.limits[wQ];
            "number" === typeof LQ && (FQ[wQ] = LQ)
          }
          return FQ
        }(wQ);
      let DQ;
      QQ.style.background = "black";
      try {
        DQ = await (0, XQ.f)(QQ, {
          msaaSamples: FQ.zwQ ? 4 : 1,
          requiredLimits: oQ,
          alphaMode: "premultiplied"
        })
      } catch (uQ) {
        throw Iv(uQ, "#47" === (null === (kQ = uQ) || void 0 === kQ ? void 0 : kQ.message) ? "no_adapter" : "device")
      }
      var kQ;
      const vQ = function(QQ) {
        return QQ._device
      }(DQ);
      let mQ = null;
      vQ.lost.then((QQ => {
        mQ = QQ, console.error(`WebGPU device lost (${QQ.reason}): ${QQ.message}`)
      }));
      try {
        const wQ = await async function(QQ, FQ, wQ, LQ, qQ, oQ) {
          const DQ = (0, fQ.e)(QQ),
            kQ = new gD(QQ, FQ),
            vQ = new Zk(FQ),
            mQ = new rD(FQ, kQ, (QQ => function(QQ, FQ) {
              for (const LQ of dQ(QQ)) {
                var wQ;
                if (LQ._targetSignature === FQ) return null !== (wQ = LQ._sceneBG) && void 0 !== wQ ? wQ : null
              }
              return null
            }(DQ, QQ))),
            uQ = new Wv(FQ, kQ);
          for (const YQ of function(QQ, FQ, wQ) {
              return [FQ.opaqueRenderable, QQ.opaqueRenderable, QQ.skyLastRenderable, wQ.renderable, FQ.transparentRenderable, QQ.transparentRenderable, QQ.frontRenderable]
            }(mQ, vQ, uQ)) BQ(DQ, YQ);
          const HQ = function(QQ) {
            for (const FQ of dQ(QQ))
              if ("lA" === FQ.name) return FQ;
            throw new Error("Lite: the scene has no render task named scene")
          }(DQ);
          qQ && vQ.installSceneDepth(HQ, QQ);
          const bQ = oQ ? new xv(FQ, oQ.entities) : null;
          vQ.sunShadow = bQ, bQ && null !== oQ && void 0 !== oQ && oQ.entities && (vQ.shadowMask = new sk(FQ, HQ, QQ, vQ));
          return mQ.sunShadow = bQ, await (0, fQ.h)(DQ), new sv(QQ, DQ, HQ, FQ, vQ, mQ, uQ, kQ, wQ, LQ, bQ)
        }(DQ, vQ, QQ, qQ, FQ.sceneDepth, FQ.sunShadow);
        if (null !== mQ) {
          const {
            reason: QQ,
            message: FQ
          } = mQ;
          throw Object.assign(new Error(`${rv} (${QQ}): ${FQ}`), {
            fallbackReason: rv
          })
        }
        return wQ
      } catch (uQ) {
        throw vQ.destroy(), null === mQ ? uQ : Iv(uQ, "device")
      }
    }
  },
  40307: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => DQ,
      D: () => AQ,
      F: () => YQ,
      J: () => xQ,
      e: () => qQ,
      h: () => LQ,
      i: () => bQ,
      k: () => uQ,
      n: () => tQ,
      q: () => oQ,
      u: () => kQ,
      x: () => vQ
    });
    const LQ = 3,
      qQ = 0,
      oQ = 1,
      DQ = 2,
      kQ = {
        uniform: 3,
        Sb: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      vQ = 10,
      mQ = "BloxdPackInputs",
      uQ = "bloxdPackInputs",
      HQ = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      bQ = 80;

    function YQ() {
      const QQ = HQ.map((QQ => {
        let {
          name: FQ,
          type: wQ
        } = QQ;
        return `    ${FQ}: ${wQ},\n`
      })).join("");
      return `struct ${mQ} {\n${QQ}}\n@group(${LQ}) @binding(${qQ}) var<uniform> ${uQ}: ${mQ};\n`
    }

    function xQ(QQ, FQ) {
      const wQ = new DataView(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, bQ),
        [LQ, qQ, oQ, DQ, kQ, vQ] = HQ;
      wQ.setFloat32(LQ.offset, FQ.seconds, !0), wQ.setUint32(qQ.offset, FQ.lit ? 1 : 0, !0);
      for (let mQ = 0; mQ < 3; mQ++) wQ.setInt32(oQ.offset + 4 * mQ, FQ.renderOffset[mQ], !0), wQ.setFloat32(DQ.offset + 4 * mQ, FQ.MQQ[mQ], !0), wQ.setFloat32(kQ.offset + 4 * mQ, FQ.eyePosition[mQ], !0), wQ.setFloat32(vQ.offset + 4 * mQ, FQ.shadowDirection[mQ], !0)
    }

    function AQ(QQ) {
      const FQ = new Uint32Array(Math.max(1, QQ.length));
      return QQ.forEach(((QQ, wQ) => {
        let {
          id: LQ,
          rotation: qQ
        } = QQ;
        FQ[wQ] = 65535 & LQ | (3 & qQ) << 16
      })), FQ
    }
    const tQ = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);