export const id = 240;
export const ids = [240];
export const modules = {
  39466: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => gW,
      f: () => bW,
      i: () => hF,
      l: () => PF
    });
    var CF = SF(35671),
      AF = SF(37107),
      uF = SF(37103);

    function hF(FF, WF, SF, CF) {
      const AF = uF.u;
      WF.fill(0), FF.gravity.toArray(WF, AF.gravity), FF.colorDead.toArray(WF, AF.colorDead), SF[AF.ramp] = FF.useRampGradients ? 1 : 0;
      const hF = FF.getColorGradients(),
        bW = eF(FF, hF, "colour", CF);
      SF[AF.colorCount] = bW;
      for (let uF = 0; uF < bW; uF++) {
        var dF;
        const FF = hF[EF(hF, uF)];
        WF[AF.colorPositions + uF] = FF.gradient, FF.color1.toArray(WF, AF.color1 + 4 * uF), (null !== (dF = FF.color2) && void 0 !== dF ? dF : FF.color1).toArray(WF, AF.color2 + 4 * uF)
      }
      const PF = FF.getVelocityGradients(),
        RF = eF(FF, PF, "Th", CF);
      SF[AF.velocityCount] = RF;
      for (let uF = 0; uF < RF; uF++) TF(WF, AF.Th + 4 * uF, PF[EF(PF, uF)]);
      const iW = FF.useRampGradients ? FF.getColorRemapGradients() : null,
        QF = eF(FF, iW, "colour remap", CF);
      SF[AF.remapCount] = QF;
      for (let uF = 0; uF < QF; uF++) TF(WF, AF.remap + 4 * uF, iW[EF(iW, uF)])
    }

    function bW() {
      return {
        key: [],
        texels: new Uint8Array(4 * uF.k)
      }
    }
    const dF = [];

    function PF(FF, WF) {
      return RF(FF, dF), !tW(dF, WF.key) && (WF.key.length = 0, WF.key.push(...dF), WF.key.length > 0 && function(FF, WF) {
        for (let SF = 0; SF < uF.k; SF++) AF.l.GetCurrentGradient(SF / uF.k, FF, ((FF, WF, SF) => {
          CF.Color3.LerpToRef(FF.color, WF.color, SF, iW)
        })), WF[4 * SF] = 255 * iW.r, WF[4 * SF + 1] = 255 * iW.g, WF[4 * SF + 2] = 255 * iW.b, WF[4 * SF + 3] = 255
      }(FF.getRampGradients(), WF.texels), !0)
    }

    function RF(FF, WF) {
      WF.length = 0;
      const SF = FF.useRampGradients ? FF.getRampGradients() : null;
      if (null !== SF && void 0 !== SF && SF.length) {
        WF.push(SF.length);
        for (const FF of SF) WF.push(FF.gradient, FF.color.r, FF.color.g, FF.color.b)
      }
    }
    const iW = new CF.Color3;

    function eF(FF, WF, SF, CF) {
      return WF ? WF.length > uF.e ? (CF(`particleStops:${SF}`, `GPU particles use the first 2 and last ${uF.e-2} of more than ${uF.e} ${SF} gradient stops (${FF.name})`), uF.e) : WF.length : 0
    }

    function EF(FF, WF) {
      return WF < 2 || FF.length <= uF.e ? WF : FF.length - uF.e + WF
    }
    const QF = new Float32Array(uF.o),
      rW = new Uint32Array(QF.buffer);

    function gW(FF, WF, SF) {
      return hF(FF, QF, rW, SF), WF && tW(rW, WF) ? null : rW.slice()
    }

    function tW(FF, WF) {
      if (FF.length !== WF.length) return !1;
      for (let SF = 0; SF < FF.length; SF++)
        if (FF[SF] !== WF[SF]) return !1;
      return !0
    }

    function TF(FF, WF, SF) {
      var CF;
      FF[WF] = SF.gradient, FF[WF + 1] = SF.factor1, FF[WF + 2] = null !== (CF = SF.factor2) && void 0 !== CF ? CF : SF.factor1
    }
  },
  39464: (FF, WF, SF) => {
    function CF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const WF = new Set;
      return (SF, CF) => {
        WF.has(SF) || (WF.add(SF), console.warn(FF + CF))
      }
    }
    SF.d(WF, {
      e: () => CF
    })
  },
  39500: (FF, WF, SF) => {
    SF.d(WF, {
      createLiteRendererAsync: () => Dd,
      liteBabylonBackend: () => yW,
      setPipelineFailureHook: () => wA
    });
    var CF = SF(35671),
      AF = SF(35954),
      uF = SF(36301),
      hF = SF(35577),
      bW = SF(36316);
    class dF extends bW.b {
      constructor() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        super(...WF), this.color = new CF.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: WF[0].OWF().getUniqueId(),
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
          needAlphaBlendingForMesh: FF => FF.visibility < 1 || FF.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const PF = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      RF = FF => 1 << PF.indexOf(FF),
      iW = RF("VERTEXCOLOR"),
      eF = RF("INSTANCES"),
      EF = RF("THIN_INSTANCES"),
      QF = RF("INSTANCESCOLOR"),
      rW = RF("FOG"),
      gW = RF("LITE_FRONT_LAYER");

    function tW(FF, WF, SF, CF) {
      let AF = 0;
      return FF.isVerticesDataPresent("color") && (AF |= iW), "none" !== WF && (AF |= eF), "thin" === WF && (AF |= EF, FF.isVerticesDataPresent("instanceColor") && (AF |= QF)), CF.fogEnabled && FF.applyFog && 0 !== CF.fogMode && (AF |= rW), SF >= 1 && (AF |= gW), AF
    }

    function TF(FF, WF) {
      FF.updateColor4("color", WF.color, WF.alpha)
    }
    var aW = SF(36246),
      kW = SF(35778),
      qW = SF(35715),
      VF = SF(35551),
      NF = SF(36232),
      DF = SF(36243),
      LF = SF(35563),
      mW = SF(35569),
      OF = SF(35579);
    const xW = VF.d.GLSL;
    class ZF {
      constructor(FF, WF) {
        this.name = FF, this.ju = WF, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.xSF = {
          addOnce: FF => {
            this.disposers.push(FF)
          }
        }, this.uniqueId = WF.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      OWF() {
        return this.ju
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
      needAlphaBlendingForMesh(FF) {
        return (0, LF.Q)(this.model, FF.visibility, FF.hasVertexAlpha)
      }
      needAlphaTestingForMesh(FF) {
        return (0, LF.R)(this.model, FF.visibility, FF.hasVertexAlpha)
      }
      dispose() {
        (0, kW.m)(this);
        for (const FF of this.disposers.splice(0)) FF()
      }
      get model() {
        return (0, LF.ab)(this)
      }
    }
    const oF = new WeakSet;

    function YF(FF) {
      return oF.has(FF)
    }

    function MF(FF) {
      oF.add(FF)
    }
    const cW = {
      create: (FF, WF) => ((0, qW.m)(FF, new ZF(FF.name, WF)), mW.b.defines()),
      write: () => {},
      addFeature: (FF, WF) => {
        const SF = FF.mirror;
        WF.feature === DF.h && WF.state.dirLightCount > 0 && (FF.disableLighting = !0, (0, LF.Y)(FF)), "BLOXD_LIGHTING" in WF.defines && (0, kW.i)(SF), WF.feature === NF.h && ((0, aW.j)(WF.state, xW), function(FF, WF) {
          const SF = FF.OWF().sC();
          WF.textures.forEach(((CF, AF) => {
            setTimeout((() => {
              var uF, hF;
              const {
                url: bW
              } = CF.source;
              SF.atlasArray(bW, null !== (uF = null === (hF = WF.sources.pixels) || void 0 === hF ? void 0 : hF[AF]) && void 0 !== uF ? uF : null, WF.sources.layerWidth).then((SF => {
                (0, aW.e)(FF, WF, AF, SF, SF.layerWidth, SF.layers, xW)
              })).catch((FF => {
                console.error(`Failed to build texture array for atlas ${AF}`, FF)
              }))
            }))
          }))
        }(SF, WF.state))
      },
      texture: (FF, WF, SF) => {
        let {
          data: CF,
          sets: AF
        } = SF;
        var uF;
        (MF(FF), CF) && (FF.uvSet = null !== (uF = null === AF || void 0 === AF ? void 0 : AF.coordinatesIndex) && void 0 !== uF ? uF : 0, (0, qW.V)(FF.matrix, null !== AF && void 0 !== AF ? AF : {}))
      },
      cube: MF,
      canvas: (FF, WF, SF) => {
        let {
          width: CF,
          height: AF,
          mipmaps: uF,
          samplingMode: hF = OF.j.trilinear,
          hasAlpha: bW = !1,
          wrap: dF = OF.c.clamp
        } = SF;
        const PF = FF.sC().createCanvas(CF, AF),
          RF = new OF.n("2d", {
            kind: "canvas",
            width: CF,
            height: AF,
            canvas: PF
          }, {
            samplingMode: hF,
            wrapU: dF,
            wrapV: dF,
            noMipmap: !uF,
            invertY: !0
          });
        return RF.hasAlpha = bW, MF(RF), RF
      }
    };
    var GF = SF(35797),
      zW = SF(35647);
    class IF {
      constructor(FF, WF, SF) {
        this.engine = FF, this.clearColor = WF, this.ambientColor = SF, this.onBeforeRenderObservable = new zW.b, this.onBeforeCameraRenderObservable = new zW.b, this.onAfterRenderObservable = new zW.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.Zm = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      sC() {
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
      addPendingData(FF) {
        this.pending.push(FF)
      }
      removePendingData(FF) {
        const WF = this.pending.indexOf(FF); - 1 !== WF && this.pending.splice(WF, 1)
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

    function fF() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const yW = {
      WRF: fF,
      lPF: (FF, WF) => {
        const SF = new IF(FF.engine, CF.d.FromArray(WF.clearColor), CF.Color3.FromArray(WF.ambientColor));
        (0, hF.c)(cW, SF), FF.ju = SF,
          function(FF, WF) {
            const SF = Object.assign((0, GF.i)(FF, "camera"), {
              layerMask: 268435455
            });
            FF.model.nodes.setWorldSource(SF.row, FF.model.view.worldMatrix), FF.camera = WF.activeCamera = SF
          }(FF, SF), (0, AF.f)(FF, ((FF, WF, SF) => (0, uF.j)(FF, WF, SF, bW.b)))
      },
      jRF: () => {},
      setBabylonFog: () => {},
      SRF: fF,
      uRF: () => {},
      linesFromArrays: (FF, WF, SF) => (0, uF.j)(FF, WF, SF, dF),
      vu: () => {},
      ARF: fF
    };
    var sF = SF(39564),
      nF = SF(39573);
    class HF {
      constructor(FF) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const WF = new Promise((FF => {
          this.refused = FF
        }));
        this.deviceLost = Promise.race([FF, WF])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(FF) {
        (function(FF) {
          const {
            name: WF,
            message: SF
          } = null !== FF && void 0 !== FF ? FF : {};
          return "InvalidStateError" === WF && "string" === typeof SF && SF.startsWith("GPUDevice.")
        })(FF) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: FF.message,
          framesRefused: !0
        }))
      }
    }
    class KF {
      constructor(FF) {
        this.resources = FF, this.matrixKey = {
          ZF: 0
        }, this.attributesKey = {
          ZF: 0
        }, this.inputs = Object.create(null);
        for (let WF = 0; WF < 4; WF++) this.inputs[`world${WF}`] = new UF(this.matrixKey, 16 * WF, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(FF, WF) {
        this.resources.vertexBufferCreated(this.matrixKey, FF, !0), WF && this.resources.vertexBufferCreated(this.attributesKey, WF, !0)
      }
    }
    class wF extends KF {
      constructor(FF, WF, SF) {
        super(FF), this.mesh = WF, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const CF = this.inputs;
        let AF = 0;
        for (const {
            size: hF
          }
          of SF) AF += hF;
        for (const {
            name: hF,
            offset: bW,
            size: dF,
            type: PF
          }
          of SF) CF[hF] = new UF(this.attributesKey, 4 * bW, 4 * AF, dF, !0, PF);
        this.rowStride = AF, FF.duF.set(WF, this);
        const uF = WF.isVerticesDataPresent;
        WF.isVerticesDataPresent = (FF, SF) => FF in CF || uF.call(WF, FF, SF)
      }
      attach(FF, WF) {
        this.matrices = FF, this.attributes = WF, this.bind(FF, WF), this.mirror(FF, FF.length, FF.length / 16)
      }
      suF(FF) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, FF ? 64 * FF : void 0)
      }
      nuF() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(FF, WF) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * FF, 16 * WF)
      }
      attributeRows(FF, WF) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, FF * this.rowStride, WF * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(FF, WF, SF) {
        const CF = this.mesh._thinInstanceDataStorage;
        CF.matrixData = FF, CF.matrixBufferSize = WF, CF.worldMatrices = null, CF.instancesCount = SF
      }
    }
    class XF extends KF {
      constructor(FF, WF, SF) {
        var CF, AF, uF, hF;
        super(FF), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (CF = null === SF || void 0 === SF ? void 0 : SF.interleavedKinds) && void 0 !== CF ? CF : null, this.offsets = null !== (AF = null === SF || void 0 === SF ? void 0 : SF.interleavedOffsets) && void 0 !== AF ? AF : [], this.rowStride = null !== (uF = null === SF || void 0 === SF ? void 0 : SF.interleavedRowStride) && void 0 !== uF ? uF : 0, null === (hF = this.layout) || void 0 === hF || hF.forEach(((FF, WF) => {
          this.inputs[FF] = new UF(this.attributesKey, 4 * this.offsets[WF], 4 * this.rowStride, SF.strides[FF])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), FF.batchUploads.set(WF, this), WF.xSF.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(FF) {
        const WF = this.packedBatch;
        return WF.renderSelf ? 0 === FF ? this.packedSource : WF.instances[FF - 1] : WF.instances[FF]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(FF, WF, SF, CF) {
        const AF = (WF.renderSelf ? 1 : 0) + WF.rows.length;
        if (this.frame = CF, this.count = AF, this.packedSource = FF, this.packedBatch = WF, 0 === AF) return;
        if (FF.getWorldMatrix(), 16 * AF > this.matrices.length) {
          let FF = this.matrices.length / 16;
          for (; FF < AF;) FF *= 2;
          this.matrices = new Float32Array(16 * FF), this.attributes &&= new Float32Array(FF * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let uF = 0;
        WF.renderSelf && this.packRow(uF++, FF, WF.row, SF);
        for (let hF = 0; hF < WF.rows.length; hF++) this.packRow(uF++, WF.instances[hF], WF.rows[hF], SF);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * AF), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, AF * this.rowStride)
      }
      packRow(FF, WF, SF, CF) {
        const AF = this.matrices;
        if (SF < 0) AF.set(WF.getWorldMatrix().m, 16 * FF);
        else
          for (let PF = 0; PF < 16; PF++) AF[16 * FF + PF] = CF[16 * SF + PF];
        const uF = this.attributes;
        if (!uF) return;
        const hF = WF.BWF,
          bW = this.layout;
        for (let PF = 0; PF < bW.length; PF++) {
          var dF;
          const WF = null !== (dF = hF[bW[PF]]) && void 0 !== dF ? dF : 0,
            SF = FF * this.rowStride + this.offsets[PF];
          WF.toArray ? WF.toArray(uF, SF) : WF.copyToArray ? WF.copyToArray(uF, SF) : uF[SF] = WF
        }
      }
    }
    class UF {
      constructor(FF, WF, SF, CF) {
        let AF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = FF, this.byteOffset = WF, this.byteStride = SF, this.size = CF, this.instanced = AF, this.type = uF, this.normalized = hF
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
    const BF = "CANVAS_ALPHA_ONE",
      jW = `override ${BF}: bool = false;`,
      vW = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function JF(FF, WF, SF) {
      var CF;
      let AF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const uF = null !== (CF = WF._colorFormat) && void 0 !== CF ? CF : "bgra8unorm",
        hF = AF ? 15 : 0;
      return SF ? {
        ...FF,
        targets: [{
          format: uF,
          blend: {
            color: SF,
            alpha: vW
          },
          writeMask: hF
        }]
      } : {
        ...FF,
        constants: {
          ...FF.constants,
          [BF]: 1
        },
        targets: [{
          format: uF,
          writeMask: hF
        }]
      }
    }

    function pF(FF, WF) {
      FF._renderables.push(WF)
    }

    function lF(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = FF._frameGraph) || void 0 === SF ? void 0 : SF._tasks) && void 0 !== WF ? WF : []
    }

    function FW(FF) {
      return FF._currentEncoder
    }

    function WW(FF) {
      return FF.createBindGroupLayout({
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
    const SW = "greater-equal",
      CW = 2e5,
      AW = 1e5,
      uW = new WeakMap;

    function hW(FF, WF) {
      let SF = uW.get(FF);
      if (!SF) {
        SF = {
          module: FF.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, uW.set(FF, SF)
      }
      const CF = `${WF._colorFormat}|${WF._depthStencilFormat}|${WF._sampleCount}`;
      let AF = SF.pipelines.get(CF);
      if (!AF) {
        var uF;
        const {
          module: hF
        } = SF;
        AF = FF.createRenderPipeline({
          label: `placeholder ${CF}`,
          layout: FF.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: hF,
            entryPoint: "v"
          },
          fragment: {
            module: hF,
            entryPoint: "f",
            targets: [{
              format: null !== (uF = WF._colorFormat) && void 0 !== uF ? uF : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: WF._depthStencilFormat ? {
            format: WF._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: WF._sampleCount
          }
        }), SF.pipelines.set(CF, AF)
      }
      return AF
    }

    function bS(FF, WF, SF) {
      const CF = WF.eye,
        AF = WF.viewMatrix;
      FF[0] = CF[0] + AF[2] * SF, FF[1] = CF[1] + AF[6] * SF, FF[2] = CF[2] + AF[10] * SF
    }
    var dW = SF(36363),
      PW = SF(39464),
      RW = SF(35559);
    const iS = Math.PI,
      eW = iS / 1.95,
      EW = [5e-4 / 94, 125e-7, 5e-4 / 18],
      QW = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((FF => {
        let [WF, SF] = FF;
        return .434 * iS * Math.pow(2 * iS / WF, 2) * SF
      }));

    function rS(FF, WF, SF) {
      const {
        up: CF,
        mieDirectionalG: AF
      } = FF, uF = 1 - TW(1 - Math.exp(WF[1] / 45e4), 0, 1), hF = FF.rayleigh - (1 - uF), bW = Math.hypot(WF[0], WF[1], WF[2]), dF = bW > 0 ? 1 / bW : 0, PF = SF.sunDir;
      for (let EF = 0; EF < 3; EF++) PF[EF] = WF[EF] * dF;
      const RF = PF[0] * CF[0] + PF[1] * CF[1] + PF[2] * CF[2],
        iW = 1e3 * Math.max(0, 1 - Math.exp(-(eW - Math.acos(TW(RF, -1, 1))) / 1.5));
      SF.sunE = iW;
      const eF = .2 * FF.turbidity * 1e-17 * FF.mieCoefficient;
      for (let EF = 0; EF < 3; EF++) {
        const FF = EW[EF] * hF,
          WF = QW[EF] * eF,
          CF = iW / (FF + WF);
        SF.inScatterR[EF] = FF * CF, SF.inScatterM[EF] = WF * CF, SF.extinctionBeta[EF] = 8400 * FF + 1250 * WF
      }
      return SF.sunsetMix = TW(Math.pow(1 - RF, 5), 0, 1), SF.sunDiscE = 19e3 * iW, SF.mieScale = (1 - AF * AF) / (4 * iS), SF.mieBase = 1 + AF * AF, SF.mieSlope = 2 * AF, SF
    }
    const gS = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const tS = 1 / function(FF) {
      const {
        A: WF,
        B: SF,
        C: CF,
        D: AF,
        E: uF,
        F: hF
      } = gS;
      return (FF * (WF * FF + CF * SF) + AF * uF) / (FF * (WF * FF + SF) + AF * hF) - uF / hF
    }(1e3);

    function TW(FF, WF, SF) {
      return Math.min(Math.max(FF, WF), SF)
    }
    const aS = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function kS(FF, WF) {
      const SF = new Map(WF),
        CF = [],
        AF = [],
        uF = () => 0 === AF.length || AF[AF.length - 1].active;
      let hF = null;
      const bW = () => {
        const FF = [...SF].filter((FF => {
            let [, WF] = FF;
            return !0 !== WF
          })),
          WF = FF.map((FF => {
            let [WF] = FF;
            return WF
          })).join("|");
        hF = FF.length ? new RegExp(`\\b(${WF})\\b`, "g") : null
      };
      bW();
      for (const dF of FF.split("\n")) {
        const FF = aS.exec(dF);
        if (!FF) {
          uF() && CF.push(hF ? qS(dF, hF, SF) : dF);
          continue
        }
        const WF = FF[1],
          PF = FF[2].trim();
        if ("ifdef" === WF || "ifndef" === WF || "if" === WF) {
          const FF = uF(),
            CF = "if" === WF ? VW(PF, SF) : SF.has(PF) === ("ifdef" === WF);
          AF.push({
            active: FF && CF,
            parentActive: FF,
            taken: CF
          })
        } else if ("elif" === WF || "else" === WF) {
          const FF = AF[AF.length - 1];
          if (!FF) throw new Error(`#${WF} without #if`);
          const CF = !FF.taken && ("else" === WF || VW(PF, SF));
          FF.active = FF.parentActive && CF, FF.taken = FF.taken || CF
        } else if ("endif" === WF) {
          if (!AF.pop()) throw new Error("#endif without #if")
        } else if (uF()) {
          const [FF, ...CF] = PF.split(/\s+/);
          "undef" === WF ? SF.delete(FF) : SF.set(FF, !CF.length || CF.join(" ")), bW()
        }
      }
      if (AF.length) throw new Error("Unterminated #if");
      return CF.join("\n")
    }

    function qS(FF, WF, SF) {
      return FF.replace(WF, (FF => {
        const WF = SF.get(FF);
        return "string" === typeof WF ? WF : FF
      }))
    }

    function VW(FF, WF) {
      var SF;
      const CF = null !== (SF = FF.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== SF ? SF : [];
      let AF = 0;
      const uF = () => CF[AF],
        hF = () => CF[AF++],
        bW = FF => {
          const SF = /^\d/.test(FF) ? FF : WF.get(FF);
          return "string" === typeof SF ? parseInt(SF) : Number.NaN
        },
        dF = () => {
          const FF = hF();
          if ("!" === FF) return !dF();
          if ("(" === FF) {
            const FF = RF();
            return hF(), FF
          }
          if ("defined" === FF) {
            const FF = "(" === uF();
            FF && hF();
            const SF = hF();
            return FF && hF(), WF.has(SF)
          }
          const SF = uF();
          if ("==" === SF || "!=" === SF || ">" === SF || "<" === SF || ">=" === SF || "<=" === SF) {
            hF();
            const WF = bW(FF),
              CF = bW(hF());
            if (Number.isNaN(WF) || Number.isNaN(CF)) return !1;
            switch (SF) {
              case "==":
                return WF === CF;
              case "!=":
                return WF !== CF;
              case ">":
                return WF > CF;
              case "<":
                return WF < CF;
              case ">=":
                return WF >= CF;
              default:
                return WF <= CF
            }
          }
          return WF.has(FF)
        },
        PF = () => {
          let FF = dF();
          for (;
            "&&" === uF();) {
            hF();
            const WF = dF();
            FF = FF && WF
          }
          return FF
        },
        RF = () => {
          let FF = PF();
          for (;
            "||" === uF();) {
            hF();
            const WF = PF();
            FF = FF || WF
          }
          return FF
        },
        iW = RF();
      if (AF !== CF.length) throw new Error(`Cannot evaluate #if ${FF}`);
      return iW
    }
    var NW = SF(35555),
      DW = SF(35858),
      LW = SF(35867),
      mS = SF(38764),
      OW = SF(37148);
    const xS = 32,
      ZW = [10, 3, 10],
      oW = [21, 7, 21],
      YW = oW[0] * oW[1] * oW[2],
      MW = 0,
      cS = 1,
      GW = 2,
      zS = 3,
      IW = 64,
      fW = 512,
      yS = 4 * YW,
      sW = 1536,
      nW = yS + YW * sW,
      HW = 1073741824,
      KW = nW + 1;

    function wW(FF, WF) {
      const SF = FF % WF;
      return SF < 0 ? SF + WF : SF
    }

    function XW(FF, WF, SF) {
      return CF = wW(FF, oW[0]), AF = wW(WF, oW[1]), uF = wW(SF, oW[2]), CF + oW[0] * (AF + oW[1] * uF);
      var CF, AF, uF
    }

    function UW(FF, WF, SF) {
      return FF + 8 * (WF + 8 * SF)
    }

    function BW(FF, WF, SF) {
      return FF + 4 * (WF + 4 * SF)
    }
    const jS = 65535,
      vS = 0,
      JW = 1,
      pW = 2,
      lW = 3;

    function FS(FF) {
      return Math.ceil(FF * FF / 32)
    }
    const WS = 8192,
      SS = 1 << 18,
      CS = 65536,
      AS = 294912,
      uS = 128,
      hS = 4096,
      bC = 16,
      dS = 16385,
      PS = 81921,
      RS = 147457,
      iC = 4194304;
    const eS = [0, 0, 0],
      ES = [0, 0, 0];

    function QS(FF, WF, SF, CF) {
      ! function(FF, WF, SF) {
        const [CF, AF, uF] = [FF[0], FF[1], FF[2]];
        let hF, bW, dF;
        Math.abs(AF) < .99 ? (hF = uF, bW = 0, dF = -CF) : (hF = -AF, bW = CF, dF = 0);
        const PF = Math.hypot(hF, bW, dF);
        WF[0] = hF / PF, WF[1] = bW / PF, WF[2] = dF / PF, SF[0] = AF * WF[2] - uF * WF[1], SF[1] = uF * WF[0] - CF * WF[2], SF[2] = CF * WF[1] - AF * WF[0]
      }(CF, eS, ES);
      const AF = 1 / 32;
      for (const [uF, hF] of [
          [0, eS],
          [4, ES]
        ]) {
        for (let SF = 0; SF < 3; SF++) FF[WF + uF + SF] = hF[SF] * AF;
        FF[WF + uF + 3] = -(hF[0] * SF[0] + hF[1] * SF[1] + hF[2] * SF[2]) * AF
      }
    }
    class rC {
      constructor() {
        this.words = new Uint32Array(RS), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      aC(FF, WF) {
        this.parts = 0, this.refs = 0, this.view = FF, this.viewAt = WF;
        const SF = FF[WF + 1] * FF[WF + 6] - FF[WF + 2] * FF[WF + 5],
          CF = FF[WF + 2] * FF[WF + 4] - FF[WF] * FF[WF + 6],
          AF = FF[WF] * FF[WF + 5] - FF[WF + 1] * FF[WF + 4],
          uF = Math.hypot(SF, CF, AF) || 1;
        this.light[0] = SF / uF, this.light[1] = CF / uF, this.light[2] = AF / uF
      }
      add(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= hS || ! function(FF, WF, SF) {
            const CF = FF[WF],
              AF = FF[WF + 1],
              uF = FF[WF + 2],
              hF = FF[WF + 3],
              bW = FF[WF + 4],
              dF = FF[WF + 5],
              PF = FF[WF + 6],
              RF = FF[WF + 7],
              iW = FF[WF + 8],
              eF = FF[WF + 9],
              EF = FF[WF + 10],
              QF = FF[WF + 11],
              rW = FF[WF + 12],
              gW = FF[WF + 13],
              tW = FF[WF + 14],
              TF = FF[WF + 15],
              aW = CF * dF - AF * bW,
              kW = CF * PF - uF * bW,
              qW = CF * RF - hF * bW,
              VF = AF * PF - uF * dF,
              NF = AF * RF - hF * dF,
              DF = uF * RF - hF * PF,
              LF = iW * gW - eF * rW,
              mW = iW * tW - EF * rW,
              OF = iW * TF - QF * rW,
              xW = eF * tW - EF * gW,
              ZF = eF * TF - QF * gW,
              oF = EF * TF - QF * tW,
              YF = aW * oF - kW * ZF + qW * xW + VF * OF - NF * mW + DF * LF;
            if (!(Math.abs(YF) > 1e-12)) return !1;
            const MF = 1 / YF;
            return SF[0] = (dF * oF - PF * ZF + RF * xW) * MF, SF[1] = (uF * ZF - AF * oF - hF * xW) * MF, SF[2] = (gW * DF - tW * NF + TF * VF) * MF, SF[3] = (EF * NF - eF * DF - QF * VF) * MF, SF[4] = (PF * OF - bW * oF - RF * mW) * MF, SF[5] = (CF * oF - uF * OF + hF * mW) * MF, SF[6] = (tW * qW - rW * DF - TF * kW) * MF, SF[7] = (iW * DF - EF * qW + QF * kW) * MF, SF[8] = (bW * ZF - dF * OF + RF * LF) * MF, SF[9] = (AF * OF - CF * ZF - hF * LF) * MF, SF[10] = (rW * NF - gW * qW + TF * aW) * MF, SF[11] = (eF * qW - iW * NF - QF * aW) * MF, SF[12] = (dF * mW - bW * xW - PF * LF) * MF, SF[13] = (CF * xW - AF * mW + uF * LF) * MF, SF[14] = (gW * kW - rW * VF - tW * aW) * MF, SF[15] = (iW * VF - eF * kW + EF * aW) * MF, !0
          }(WF, SF, this.inverse)) return;
        const {
          view: CF,
          viewAt: AF
        } = this, uF = SF;
        let hF = 1 / 0,
          bW = 1 / 0,
          dF = -1 / 0,
          PF = -1 / 0,
          RF = -1 / 0;
        const [iW, eF, EF] = this.light;
        for (let qW = 0; qW < 8; qW++) {
          const SF = 1 & qW ? FF.hi[0] : FF.lo[0],
            QF = 2 & qW ? FF.hi[1] : FF.lo[1],
            rW = 4 & qW ? FF.hi[2] : FF.lo[2],
            gW = SF * WF[uF] + QF * WF[uF + 4] + rW * WF[uF + 8] + WF[uF + 12],
            tW = SF * WF[uF + 1] + QF * WF[uF + 5] + rW * WF[uF + 9] + WF[uF + 13],
            TF = SF * WF[uF + 2] + QF * WF[uF + 6] + rW * WF[uF + 10] + WF[uF + 14],
            aW = CF[AF] * gW + CF[AF + 1] * tW + CF[AF + 2] * TF + CF[AF + 3],
            kW = CF[AF + 4] * gW + CF[AF + 5] * tW + CF[AF + 6] * TF + CF[AF + 7];
          hF = Math.min(hF, aW), bW = Math.min(bW, kW), dF = Math.max(dF, aW), PF = Math.max(PF, kW), RF = Math.max(RF, iW * gW + eF * tW + EF * TF)
        }
        if (dF < -1 || PF < -1 || hF >= 1 || bW >= 1) return;
        const QF = this.parts++,
          rW = this.rects;
        rW[4 * QF] = gC(hF), rW[4 * QF + 1] = gC(bW), rW[4 * QF + 2] = gC(dF), rW[4 * QF + 3] = gC(PF);
        const gW = this.inverse,
          {
            cell: tW,
            dims: TF,
            lo: aW
          } = FF,
          kW = PS + QF * bC;
        for (let qW = 0; qW < 3; qW++) this.floats[kW + 4 * qW] = gW[qW] / tW, this.floats[kW + 4 * qW + 1] = gW[4 + qW] / tW, this.floats[kW + 4 * qW + 2] = gW[8 + qW] / tW, this.floats[kW + 4 * qW + 3] = (gW[12 + qW] - aW[qW]) / tW;
        this.words[kW + 12] = FF.at, this.floats[kW + 13] = RF + .001 * (1 + Math.abs(RF)), this.words[kW + 14] = TF[0] | TF[1] << 8 | TF[2] << 16
      }
      finish() {
        const FF = uS,
          {
            counts: WF,
            rects: SF,
            words: CF
          } = this;
        WF.fill(0);
        let AF = 0,
          uF = 0;
        for (; uF < this.parts; uF++) {
          const CF = 4 * uF,
            hF = (SF[CF + 2] - SF[CF] + 1) * (SF[CF + 3] - SF[CF + 1] + 1);
          if (AF + hF > 65536) break;
          AF += hF;
          for (let AF = SF[CF + 1]; AF <= SF[CF + 3]; AF++)
            for (let uF = SF[CF]; uF <= SF[CF + 2]; uF++) WF[AF * FF + uF]++
        }
        let hF = 0;
        for (let dF = 0; dF < 16384; dF++) CF[dF] = hF, hF += WF[dF], WF[dF] = CF[dF];
        CF[16384] = hF;
        for (let dF = 0; dF < uF; dF++) {
          const AF = 4 * dF;
          for (let uF = SF[AF + 1]; uF <= SF[AF + 3]; uF++)
            for (let hF = SF[AF]; hF <= SF[AF + 2]; hF++) CF[dS + WF[uF * FF + hF]++] = dF
        }
        const bW = this.floats;
        for (let dF = 0; dF < 16384; dF++) {
          const FF = dS + CF[dF],
            WF = FF + Math.min(CF[dF + 1] - CF[dF], 64);
          for (let SF = FF + 1; SF < WF; SF++) {
            const WF = CF[SF],
              AF = bW[81934 + WF * bC];
            let uF = SF - 1;
            for (; uF >= FF && bW[81934 + CF[uF] * bC] < AF; uF--) CF[uF + 1] = CF[uF];
            CF[uF + 1] = WF
          }
        }
        this.refs = AF
      }
    }

    function gC(FF) {
      return Math.min(127, Math.max(0, Math.floor((.5 * FF + .5) * uS)))
    }

    function tC(FF, WF, SF, CF, AF) {
      for (let uF = 0; uF < 4; uF++)
        for (let hF = 0; hF < 4; hF++) AF[4 * uF + hF] = FF[WF + 4 * uF] * SF[CF + hF] + FF[WF + 4 * uF + 1] * SF[CF + 4 + hF] + FF[WF + 4 * uF + 2] * SF[CF + 8 + hF] + FF[WF + 4 * uF + 3] * SF[CF + 12 + hF]
    }

    function TS(FF, WF, SF, CF, AF) {
      const uF = FF[0] - WF,
        hF = FF[1] - SF,
        bW = FF[2] - CF,
        dF = FF[3] - WF,
        PF = FF[4] - SF,
        RF = FF[5] - CF,
        iW = FF[6] - WF,
        eF = FF[7] - SF,
        EF = FF[8] - CF;
      if (Math.min(uF, dF, iW) > AF || Math.max(uF, dF, iW) < -AF) return !1;
      if (Math.min(hF, PF, eF) > AF || Math.max(hF, PF, eF) < -AF) return !1;
      if (Math.min(bW, RF, EF) > AF || Math.max(bW, RF, EF) < -AF) return !1;
      const QF = dF - uF,
        rW = PF - hF,
        gW = RF - bW,
        tW = iW - dF,
        TF = eF - PF,
        aW = EF - RF,
        kW = rW * aW - gW * TF,
        qW = gW * tW - QF * aW,
        VF = QF * TF - rW * tW;
      if (Math.abs(kW * uF + qW * hF + VF * bW) > AF * (Math.abs(kW) + Math.abs(qW) + Math.abs(VF))) return !1;
      const NF = [QF, rW, gW, tW, TF, aW, uF - iW, hF - eF, bW - EF];
      for (let DF = 0; DF < 3; DF++) {
        const FF = NF[3 * DF],
          WF = NF[3 * DF + 1],
          SF = NF[3 * DF + 2];
        for (let CF = 0; CF < 3; CF++) {
          const QF = 0 === CF ? 0 : 1 === CF ? SF : -WF,
            rW = 0 === CF ? -SF : 1 === CF ? 0 : FF,
            gW = 0 === CF ? WF : 1 === CF ? -FF : 0,
            tW = QF * uF + rW * hF + gW * bW,
            TF = QF * dF + rW * PF + gW * RF,
            aW = QF * iW + rW * eF + gW * EF,
            kW = AF * (Math.abs(QF) + Math.abs(rW) + Math.abs(gW));
          if (Math.min(tW, TF, aW) > kW || Math.max(tW, TF, aW) < -kW) return !1
        }
      }
      return !0
    }
    const aC = new Float32Array(1);
    new Uint32Array(aC.buffer);
    var kC = SF(37152);

    function qC(FF) {
      const [WF, SF, CF] = kC.q;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${FF.group}) @binding(${FF.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${WF-1}, ${SF-1}, ${CF-1});\n}\n`
    }

    function VS(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [AF, uF, hF] = oW, [bW, dF, PF] = ZW, RF = Math.log2(xS), iW = CF ? "var<private> bloxdSpCrossed: bool;\n" : "", eF = CF ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${FF.group}) @binding(${FF.MW}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${FF.group}) @binding(${FF.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${SF?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${iW}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${JW}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${pW}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${SF?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${lW}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${AF}, ${uF}, ${hF});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${AF} * (s.y + ${uF} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${bW}, ${dF}, ${PF}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${RF}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${zS}u) {\n\t\treturn named && state == ${GW}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${yS}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${nW}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${WF?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${WF?`\t\tif (exits && step > 0 && step % ${LS} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${RF}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${MW}u || kind == ${cS}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${GW}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${yS}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${eF}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const NS = {
      group: 0,
      uniform: 0,
      MW: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function DS() {
      const FF = NS;
      return `${qC(FF)}${VS(FF,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${kC.c}>,\n}\n@group(${FF.group}) @binding(${FF.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${FF.group}) @binding(${FF.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${kC.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${kC.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${kC.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const LS = 2;
    const mC = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function OS(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const CF = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${WF.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        AF = "trace" === SF || "lit" === SF,
        uF = "maskEdge" === SF ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        hF = AF ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${WF.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${WF.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===SF?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${uF};\n`;
      return `${CF}${FF.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${AF?function(){const[FF,WF,SF]=kC.q;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${FF}.0, ${WF}.0, ${SF}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${hF}}\n`:""}${FF.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${WF.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${WF.renderOffset});\n}\n`:""}`
    }

    function xC(FF) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${FF.texture}) - 1u)))`
    }
    const ZS = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${dW.i.map((FF=>{let[WF,SF]=FF;return`\tbloxdSpOut.${WF} = (bloxdSpWord & ${SF}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function oS(FF) {
      return `bloxdSpFlags(${FF})`
    }
    const YS = `${mS.k}.eyePosition`;

    function MS(FF, WF, SF, CF, AF) {
      const uF = FF.indexOf(WF);
      if (uF < 0 || FF.indexOf(WF, uF + 1) >= 0) throw new Error(`Lite's ${AF} program changed at the shader pack ${CF} hook: ${uF<0?"no":"more than one"} anchor (lite/${AF}ShaderPack.ts)`);
      return FF.slice(0, uF) + SF + FF.slice(uF + WF.length)
    }

    function cC(FF) {
      return FF.sunShadow || FF.airShadow
    }

    function GS(FF, WF) {
      return WF && cC(FF)
    }
    const zC = {
      group: mS.f,
      ...mS.q
    };

    function IS(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!cC(FF)) return "";
      if (WF) {
        const WF = zC,
          AF = "trace" === SF || "lit" === SF;
        let uF = "";
        FF.sunShadow && (uF = AF ? `${VS(WF,!0,"lit"===SF)}${CF=WF,`@group(${CF.group}) @binding(${CF.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${CF.group}) @binding(${CF.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(FF, WF, SF) {
          const CF = `@group(${FF}) @binding(${WF}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return SF ? `${CF}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${mC}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((FF=>`\t{\n\t\tlet o = vec2i(${FF});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : CF
        }(WF.group, mS.r, "maskEdge" === SF));
        const hF = {
          shadowDirection: `${mS.k}.shadowDirection`,
          renderOffset: `${mS.k}.renderOffset`,
          eyePosition: `${mS.k}.eyePosition`
        };
        return `${qC(WF)}${uF}${function(FF){const[WF,SF,CF]=kC.q;return`@group(${FF.group}) @binding(${FF.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${FF.group}) @binding(${FF.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${WF}.0, ${SF}.0, ${CF}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(WF)}${OS(FF,hF,SF)}`
      }
      var CF;
      return `${FF.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${FF.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function fS(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!WF) return "";
      const uF = (hF = "fragmentInputs.vPositionW", bW = FF.sunShadow ? {
        normal: SF,
        flags: CF
      } : null, `\n\tbloxdSpShadowPosition = ${hF};\n${bW?`\tbloxdSpShadowNormal = normalize(${bW.normal});\n\tbloxdSpShadowEmissive = (${bW.flags} & ${dW.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${bW.flags} & ${dW.j}u) != 0u;\n`:""}`);
      var hF, bW;
      return FF.sunShadow && ("mask" === AF || "maskEdge" === AF) ? `${uF}${dF="fragmentInputs.position",PF="maskEdge"===AF,`\n\tbloxdSpShadowPixel = vec2i(${dF}.xy);\n${PF?`\tbloxdSpShadowZ = ${dF}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${dF}.z), dpdy(${dF}.z));\n`:""}`}` : uF;
      var dF, PF
    }
    const yC = "bloxdSpTextureRotation",
      sS = "bloxdSpTextureLayers";

    function nS(FF) {
      return `\tvertexOutputs.vPackTexture = ${sS}[min(u32(${FF}), arrayLength(&${sS}) - 1u)];\n`
    }

    function HS(FF) {
      return void 0 !== FF.uv
    }

    function KS(FF) {
      if (!FF) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (HS(FF)) return function(FF) {
        const {
          texture: WF,
          cells: SF,
          layers: CF
        } = FF, AF = `textureDimensions(${WF}, bloxdSpLevel)`, uF = SF ? `max(vec2u(vec2f(${AF}) / ${SF}), vec2u(1u))` : AF, hF = SF ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${uF};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${SF}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${SF}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${WF}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${AF} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${uF};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${WF}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let bW;
        if (SF)
          if (1 === CF.length) bW = `\treturn bloxdSpOwnTexel(${CF[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const FF = CF.length - 1;
            bW = `\tvar bloxdSpColour = bloxdSpOwnTexel(${CF[FF]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let WF = FF - 1; WF >= 0; WF--) bW += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${CF[WF]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            bW += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else bW = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${hF}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${xC(FF)};\n\treturn ${uF};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${xC(FF)};\n${bW}}\n`
      }(FF);
      const WF = FF,
        SF = FF => {
          const SF = FF > 0 ? `bloxdSpLayer - ${WF.layers*FF}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${FF}, ${WF.sampler}, bloxdSpTurned, ${SF}, round(bloxdSpMipLevel));`
        };
      let CF = "";
      for (let uF = 0; uF < WF.count - 1; uF++) CF += `\tif (bloxdSpLayer < ${WF.layers*(uF+1)}u) {\n\t\t${SF(uF)}\n\t}\n`;
      const AF = WF.frame ? `${WF.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${yC}: u32;\n@group(${mS.f}) @binding(${mS.t}) var<storage, read> ${sS}: array<u32>;\nfn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${yC} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${yC} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${yC} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${AF}${CF}\t${SF(WF.count-1)}\n}\n`
    }

    function wS(FF, WF, SF) {
      return !!FF.surface && "bloxdDefaultSurface" !== FF.surface && function(FF, WF) {
        return "liquid" === WF || !FF
      }(WF, SF)
    }

    function XS(FF, WF) {
      return FF.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${WF.vertexLocalPosition}, ${oS(WF.vertexFlags)});\n\t\tlet bloxdSpVertex = ${FF.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function US(FF, WF, SF, CF, AF) {
      if (!FF.surface) return "";
      const uF = (FF, WF) => `\n\tlet bloxdSpTexelUV = ${FF};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${WF}) - 1u));`;
      let hF = "",
        bW = "0u, 0u, vec2f(0.0), 0.0";
      const dF = CF && HS(CF) ? CF : null,
        PF = CF && !HS(CF) ? CF : null;
      dF ? (hF = `\n\tlet bloxdSpUv = ${dF.uv};${uF(function(FF,WF){var SF;return`${null!==(SF=FF.levelUv)&&void 0!==SF?SF:FF.cells?`${WF} / ${FF.cells}`:WF} * vec2f(textureDimensions(${FF.texture}))`}(dF,"bloxdSpUv"),dF.texture)}`, bW = "0u, 0u, bloxdSpUv, bloxdSpMipLevel") : PF && (hF = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${yC} = bloxdSpTexture >> 16u;${uF(`fragmentInputs.vMainUV1 * ${(0,NW.rb)(PF.width)}`,"textureAtlas0")}`, bW = `bloxdSpTexture & 0xffffu, ${yC}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const RF = AF.overlayColour,
        iW = RF ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        eF = "bloxdDefaultSurface" !== FF.surface || RF ? `\n\tbaseColor = vec4f(${iW}, baseColor.a);` : "",
        EF = wS(FF, WF, SF) ? `\n\t${AF.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${hF}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${AF.alpha}, ${AF.enchantTier}, ${AF.enchantColour}, ${AF.enchantSpeed}, ${null!==RF&&void 0!==RF?RF:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${AF.normal}, ${AF.localPosition}, ${oS(AF.flags)}, ${bW});\n\tlet bloxdSpSurface = ${FF.surface}(bloxdSpSurfaceIn);${eF}${EF}\n`
    }
    const BS = "bloxdSpLightIn";

    function jC(FF, WF, SF, CF) {
      if (!FF.light) return "";
      const AF = WF ? `${NW.h}.rgb, ${NW.h}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${NW.f}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: uF,
          diffuse: hF,
          emissive: bW,
          ambient: dF,
          fogColour: PF,
          fogAlpha: RF,
          normal: iW
        } = CF;
      return `\tvar ${BS} = BloxdLightIn(vec3f(0.0), ${SF?uF:"0.0"}, ${hF}, ${bW}, ${dF}, ${AF}, ${PF}, ${RF}, fragmentInputs.vPositionW, ${iW}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${BS}.litColour = bloxdLitColour(bloxdSpSurface, ${BS});\n`
    }

    function vC(FF) {
      return FF.light ? `\n\t{\n\t\tlet bloxdSpLight = ${FF.light}(bloxdSpSurface, ${BS});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const JS = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      pS = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      lS = "\treturn color;\n}",
      FC = {
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
    const WC = Object.freeze({});

    function SC(FF) {
      var WF;
      return !(null === (WF = (0, OW.e)(FF)) || void 0 === WF || !WF.sceneDepth)
    }

    function CC(FF) {
      const WF = (0, OW.e)(FF);
      return !!WF && wS(WF.hooks, WF.strict, WF.program)
    }

    function AC(FF, WF, SF, CF) {
      return MS(FF, WF, SF, CF, "terrain")
    }

    function uC(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const uF = function(FF) {
          return (0, OW.c)(FF.packVariant, FF.liquid ? "liquid" : "terrain")
        }(FF),
        {
          hooks: hF
        } = uF,
        bW = GS(uF, CF),
        dF = "edge" === AF ? "maskEdge" : "plain" === AF ? "mask" : "trace",
        PF = XS(hF, FC);
      PF && (WF = AC(WF, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${PF}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const RF = "atlas" === FF.texture ? {
          count: FF.atlasCount,
          layers: FF.atlasLayers,
          width: FF.cuF,
          sampler: "atlasSampler",
          frame: FF.animated ? SF : null
        } : null,
        iW = `${uF.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${fS(uF,bW,FC.normal,FC.flags,dF)}${US(hF,uF.strict,uF.program,RF,FC)}`;
      iW && (WF = AC(WF, JS, `${JS.slice(0,-1)}${iW}`, "surface"));
      const eF = vC(hF);
      return eF && (WF = AC(WF, pS, `${jC(hF,FF.lighting,FF.dirLightCount>0,FC)}${pS}`, "light input"), WF = AC(WF, lS, `${eF.slice(1)}${lS}`, "light")), `${(0,mS.w)()}${uF.sceneDepth?`@group(${mS.f}) @binding(${mS.p}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${YS};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${IS(uF,bW,dF)}${KS(RF)}${ZS}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${uF.code}${WF}`
    }
    const hC = VF.d.WGSL;

    function bA(FF) {
      return void 0 !== FF.packVariant
    }
    const dC = {
        hRF: 0,
        biF: 4,
        dRF: 8,
        PRF: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      PC = dC.aoLevels + 4,
      RC = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      iA = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      eC = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      EC = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      QC = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      rA = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      gA = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      tA = 0,
      TC = 3,
      aA = 4,
      kA = 5,
      qA = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${DW.c}, ${DW.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${DW.c}, ${DW.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      VC = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = ((${LW.b}u >> dir) & 1u) == 1u;\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const NC = {
      lF: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: FF => `animDataPerTex[${FF}]`
    };

    function DC(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NC,
        CF = arguments.length > 3 ? arguments[3] : void 0;
      return `\n\tlet atlasIdxIn = ${FF};\n\tlet animTick = ${SF.lF};\n\tlet animTickStride = ${SF.stride};\n\tlet numAnimTextures = ${SF.count};\n\t${(0,NF.e)(VF.d.WGSL,SF.perTexture)}\n\t${WF}animLayer;\n\t${CF?`${CF}animNext;`:""}\n`
    }

    function LC(FF) {
      const WF = FF => `textureSample(diffuseSampler, diffuseSamplerSampler, ${FF})`;
      return FF ? `baseColor = mix(${WF("fragmentInputs.vMainUV1")}, ${WF("fragmentInputs.vMainUV1 + vec2f(0.0, fragmentInputs.vAnimStripNext.x)")}, fragmentInputs.vAnimStripNext.y);` : `baseColor = ${WF("fragmentInputs.vMainUV1")};`
    }

    function mA(FF) {
      const WF = FF.atlasCount > 1 || FF.animated,
        SF = (SF, CF) => {
          const AF = SF > 0 ? `${CF} - ${FF.atlasLayers.toFixed(1)} * ${SF.toFixed(1)}` : CF;
          return `${WF?"textureSampleLevel":"textureSample"}(textureAtlas${SF}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${AF}))${WF?", atlasLod":""})`
        },
        CF = (WF, CF) => {
          if (1 === FF.atlasCount) return `${WF} = ${SF(0,CF)};`;
          let AF = "";
          for (let uF = 0; uF < FF.atlasCount; uF++) {
            const hF = FF.atlasLayers * (uF + 1) - .5;
            AF += `${uF>0?" else ":"\n\t"}if (${CF} < ${(0,NW.rb)(hF)}) {\n\t\t${WF} = ${SF(uF,CF)};\n\t}`
          }
          return AF
        },
        AF = WF ? `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,NW.rb)(FF.cuF)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n` : "",
        uF = FF.animated ? `\n\tif (fragmentInputs.texAtlasNext.y > 0.0) {\n\t\tvar atlasNextColor: vec4f;\n\t\t${CF("atlasNextColor","fragmentInputs.texAtlasNext.x")}\n\t\tbaseColor = mix(baseColor, atlasNextColor, fragmentInputs.texAtlasNext.y);\n\t}` : "";
      return `${AF}${CF("baseColor","fragmentInputs.texAtlasIndex")}${uF}`
    }

    function OC(FF) {
      return `terrain-${FF.texture}${"atlas"===FF.texture?FF.atlasCount:""}${FF.animated?"-anim":""}${FF.alphaTest?"-test":""}${FF.lighting?"-lit":""}-dir${FF.dirLightCount}${FF.packed?"-packed":""}${bA(FF)?`-sp${FF.packVariant}`:""}${FF.liquid?"-liquid":""}${FF.resting?"-rest":""}`
    }

    function xA(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const CF = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const SF = "none" !== FF.texture,
          CF = "atlas" === FF.texture,
          AF = FF.dirLightCount > 0,
          uF = bA(FF);
        if (FF.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${FF.dirLightCount}`);
        let hF = 1,
          bW = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (CF) {
          FF.animated && (bW += `@group(2) @binding(${hF++}) var<storage, read> animDataPerTex: array<f32>;\n`), bW += `@group(2) @binding(${hF++}) var atlasSampler: sampler;\n`;
          for (let WF = 0; WF < FF.atlasCount; WF++) bW += `@group(2) @binding(${hF++}) var textureAtlas${WF}: texture_2d_array<f32>;\n`
        } else "single" === FF.texture && (bW += `@group(2) @binding(${hF++}) var diffuseSamplerSampler: sampler;\n`, bW += `@group(2) @binding(${hF++}) var diffuseSampler: texture_2d<f32>;\n`);
        const dF = function(FF) {
            const WF = gA,
              SF = "none" !== FF.texture,
              CF = "atlas" === FF.texture,
              AF = bA(FF);
            return FF.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${SF?"uv: vec2f,":""}\n\t${CF?"texAtlasIndices: f32,":""}\n\t${FF.lighting?"aPackedLightLevels: f32,":""}\n\t${AF?"blockFlagWords: vec2u,":""}\n}\n${qA}\n${VC}\n${"single"===FF.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\tlet ao = (r2 >> (3u + 2u * slot)) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${SF?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===FF.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${CF?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${FF.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${AF?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${WF.position}) position: vec3f,\n\t@location(${WF.normal}) normal: vec4f,\n\t@location(${WF.color}) color: vec4f,\n\t${SF?`@location(${WF.uv}) uv: vec2f,`:""}\n\t${FF.lighting?`@location(${WF.packedLight}) aPackedLightLevels: f32,`:""}\n\t${AF?`@location(${WF.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(FF),
          PF = `\n${EC}\n${iA}\n${eC}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${bW}\n${jW}\n${dF.declarations}\nstruct Varyings {\n\t${"none"===WF?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${FF.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${AF?"@location(5) vTerrainLambert: f32,":""}\n\t${SF?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${CF?"@location(7) texAtlasIndex: f32,":""}\n\t${FF.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${uF?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${uF&&CF?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n\t${CF&&FF.animated?"@location(11) texAtlasNext: vec2f,":""}\n\t${"single"===FF.texture&&FF.animated?"@location(11) vAnimStripNext: vec2f,":""}\n}\n\n${FF.resting?"":(0,NW.o)(hC)}\n${rA}\n\n@vertex\nfn mainVertex(${dF.parameter}) -> Varyings {\n\t${dF.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${uF?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${dW.e.placed}u;`:""}\n\t${uF&&CF?nS("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${FF.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${SF?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${CF?function(FF){return FF?DC("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = ",NC,"vertexOutputs.texAtlasNext = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(FF.animated):""}\n\t${"single"===FF.texture&&FF.animated?"\n\tlet animFramePos = material.anim.x / abs(material.anim.z);\n\tlet frameTick = floor(animFramePos);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tlet animNextTexIndex = frameTick + 1.0 - material.anim.y * floor((frameTick + 1.0) / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n\tvertexOutputs.vAnimStripNext = vec2f((animNextTexIndex - animTexIndex) / material.anim.y, (animFramePos - frameTick) * step(0.0, material.anim.z));\n":""}\n\t${(0,NW.$)(hC)}\n\t${(0,NW.F)(hC,FF.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${FF.resting?"":QC}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${CF?mA(FF):""}\n\t${"single"===FF.texture?LC(FF.animated):""}\n\t${SF?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${FF.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${AF?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${BF}));\n\t${bA(FF)?(0,NW.kb)(VF.d.WGSL):(0,NW.O)(hC)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          RF = new Set;
        FF.lighting && RF.add("BLOXD_LIGHTING");
        AF && RF.add("BLOXD_TERRAIN_DIRECTIONAL");
        return kS(PF, new Map([...RF].map((FF => [FF, !0]))))
      }(FF, SF);
      if (!bA(FF)) return CF;
      const AF = uC(FF, CF, DC, WF, SF);
      return "none" === SF ? AF : `${AF}${function(FF){const WF="none"!==FF.texture&&FF.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${FF.resting?"":QC}\n\t${FF.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${WF&&"atlas"===FF.texture?mA(FF):""}\n\t${WF&&"single"===FF.texture?LC(FF.animated):""}\n\t${WF?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${dW.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(FF)}`
    }
    const ZC = new Map([
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

    function oC(FF, WF) {
      const SF = new Map;
      let CF = 0;
      const AF = [],
        uF = [],
        hF = [];
      for (const PF of WF) {
        var bW, dF;
        const WF = null !== (bW = PF.type.trim().split(/\s+/).pop()) && void 0 !== bW ? bW : PF.type,
          RF = ZC.get(WF);
        if (!RF) throw new Error(`Lite: no uniform layout for ${PF.name}: ${PF.type}`);
        const iW = null !== (dF = PF.arraySize) && void 0 !== dF ? dF : 0,
          eF = iW ? 4 : RF.align;
        CF = Math.ceil(CF / eF) * eF;
        const EF = iW ? 4 * Math.ceil(RF.floats / 4) : RF.floats;
        if (SF.set(PF.name, {
            offset: CF,
            floats: RF.floats,
            arraySize: iW,
            stride: EF
          }), iW && RF.floats <= 2) {
          const WF = `${FF}_${hF.length}_strided`;
          uF.push(`struct ${WF} {\n\t@size(16) el: ${RF.wgsl},\n}`), hF.push(PF.name), AF.push(`\t@align(16) ${PF.name}: array<${WF}, ${iW}>,`)
        } else iW ? AF.push(`\t@align(16) ${PF.name}: array<${RF.wgsl}, ${iW}>,`) : AF.push(`\t${PF.name}: ${RF.wgsl},`);
        CF += iW ? EF * iW : RF.floats
      }
      return {
        slots: SF,
        floats: Math.max(4, 4 * Math.ceil(CF / 4)),
        wgsl: `${uF.join("\n")}\nstruct ${FF} {\n${AF.join("\n")}\n}\n`,
        stridedArrays: hF
      }
    }
    const YC = [{
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
      MC = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      cA = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function GC(FF, WF) {
      return `#if defined(${FF}) && ${FF}DIRECTUV == 0\nvarying v${WF}UV: vec2f;\n#endif`
    }

    function zA(FF, WF, SF) {
      return `#if defined(${FF}) && ${FF}DIRECTUV == 0\nif (uniforms.v${WF}Infos.x==0.)\n{vertexOutputs.v${WF}UV= (uniforms.${SF}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${WF}UV= (uniforms.${SF}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function IC(FF, WF, SF) {
      return `#ifdef ${FF}\n#if ${FF}DIRECTUV == 1\n#define v${WF}UV vMainUV1\n#elif ${FF}DIRECTUV == 2\n#define v${WF}UV vMainUV2\n#else\nvarying v${WF}UV: vec2f;\n#endif\nvar ${SF}SamplerSampler: sampler;\nvar ${SF}Sampler: texture_2d<f32>;\n#endif`
    }
    const fC = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      yA = 256,
      sC = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      nC = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      HC = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      KC = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      wC = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      XC = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      UC = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      BC = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${nC}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${GC("OPACITY","Opacity")}\n${GC("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${UC}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${HC}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${zA("OPACITY","Opacity","opacity")}\n${zA("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${KC}\n#define CUSTOM_VERTEX_MAIN_END\n${wC}\n}\n`;
    const jA = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${IC("OPACITY","Opacity","opacity")}\n${IC("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${UC}\n${XC}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((FF,WF)=>function(FF){const WF=`
    frame.lights[LITE_LIGHT$ {
        FF
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      FF
    }\
    nvar diffuse$ {
      FF
    }: vec4f = $ {
      WF
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      FF
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      WF
    }.vLightData, diffuse$ {
      FF
    }.rgb, $ {
      WF
    }.vLightSpecular.rgb, diffuse$ {
      FF
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(WF))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, vA = /^([gimus]+)!/, JC = new Set;

    function pC(FF) {
      JC.has(FF) || (JC.add(FF), console.warn(`Lite: no place for plugin code at ${FF} in the standard shader: it is left out`))
    }

    function lC(FF, WF) {
      let SF = FF;
      const CF = new Map;
      for (const [uF, hF] of WF) {
        var AF;
        CF.set(uF, `${null!==(AF=CF.get(uF))&&void 0!==AF?AF:""}${hF}\n`)
      }
      for (const [uF, hF] of CF) {
        if (!uF.startsWith("!")) {
          const FF = `#define ${uF}`;
          if (!SF.includes(FF)) {
            pC(uF);
            continue
          }
          SF = SF.replace(FF, (() => `\n${hF}\n${FF}`));
          continue
        }
        let FF = uF.substring(1),
          WF = "g";
        if (FF.startsWith("!")) WF = "", FF = FF.substring(1);
        else {
          const SF = vA.exec(FF);
          SF && (WF = SF[1], FF = FF.substring(WF.length + 1))
        }
        const CF = new RegExp(FF, WF.includes("g") ? WF : `${WF}g`);
        let AF = CF.exec(SF);
        for (AF || pC(uF); AF;) {
          const FF = AF,
            WF = hF.replace(/\$(\d+)/g, ((WF, SF) => Number(SF) < FF.length ? FF[Number(SF)] : ""));
          SF = SF.substring(0, FF.index) + WF + SF.substring(FF.index + FF[0].length), CF.lastIndex = FF.index + WF.length, AF = CF.exec(SF)
        }
      }
      return SF
    }
    const FA = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      WA = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      SA = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function CA(FF) {
      const WF = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let SF = FF.replace(FA, ((FF, SF, CF, AF, uF, hF) => ("attribute" === SF ? WF.attributes.push({
        name: uF,
        type: hF
      }) : void 0 === SF ? WF.varyings.push({
        name: uF,
        type: hF,
        interpolation: uA(hF, CF, AF)
      }) : WF.uniforms.push({
        name: uF,
        type: AA(hF)
      }), "")));
      return SF = SF.replace(WA, ((FF, SF) => (WF.samplers.add(SF), ""))), SF = SF.replace(SA, ((FF, SF, CF) => (WF.textures.push({
        name: SF,
        type: CF
      }), ""))), WF.body = SF, WF
    }

    function AA(FF) {
      const WF = FF.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        SF = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(WF);
      if (!SF) throw new Error(`Lite: unsupported uniform type ${FF}`);
      return SF
    }

    function uA(FF, WF, SF) {
      return void 0 === WF && void 0 === SF ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(FF.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === WF ? "@interpolate(flat) " : `@interpolate(${null!==WF&&void 0!==WF?WF:"perspective"}, ${null!==SF&&void 0!==SF?SF:"center"}) `
    }

    function hA(FF) {
      return RA({
        defines: FF.defines,
        vertex: lC(BC, FF.vertexCode),
        fragment: lC(jA, FF.fragmentCode),
        members: [...YC, ...FF.defines.has("OPACITY") ? MC : [], ...FF.defines.has("EMISSIVE") ? cA : [], ...FF.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function bu(FF) {
      const WF = FF.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (WF === FF) throw new Error("Lite: fragment main has no return");
      return WF
    }
    const dA = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${nC}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${HC}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${KC}\n${wC}\n}\n`,
      PA = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${XC}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function RA(FF) {
      const WF = FF.defines,
        SF = CA(kS(FF.vertex, WF)),
        CF = CA(kS(FF.fragment, WF)),
        AF = new Map;
      for (const aW of [...SF.varyings, ...CF.varyings]) AF.has(aW.name) || AF.set(aW.name, aW);
      const uF = [...AF.values()].map(((FF, WF) => `\t@location(${WF}) ${FF.interpolation}${FF.name}: ${FF.type},`)),
        hF = [...FF.members];
      for (const aW of [...SF.uniforms, ...CF.uniforms]) hF.some((FF => FF.name === aW.name)) || hF.push(aW);
      const bW = oC(FF.structName, hF),
        dF = [],
        PF = [];
      let RF = 1;
      const iW = new Set;
      for (const aW of [...SF.textures, ...CF.textures]) {
        if (iW.has(aW.name)) continue;
        iW.add(aW.name);
        const FF = `${aW.name}Sampler`,
          WF = RF++,
          SF = RF++,
          CF = aW.type.startsWith("texture_2d_array") ? "2d-array" : aW.type.startsWith("texture_cube") ? "cube" : "2d";
        dF.push({
          name: aW.name,
          binding: WF,
          samplerBinding: SF,
          dimension: CF
        }), PF.push(`@group(2) @binding(${WF}) var ${aW.name}: ${aW.type};`), PF.push(`@group(2) @binding(${SF}) var ${FF}: sampler;`)
      }
      for (const aW of [...SF.samplers, ...CF.samplers])
        if (!iW.has(aW.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${aW} has no texture`);
      const eF = [EC, sC, bW.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${FF.structName};`, ...PF].join("\n"),
        EF = SF.attributes,
        QF = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...SF.attributes.map(((FF, WF) => `\t@location(${WF}) ${FF.name}: ${FF.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        rW = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...uF, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        gW = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...CF.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...uF, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", jW, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${BF}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        tW = FF => {
          for (const WF of bW.stridedArrays) FF = FF.replace(new RegExp(`\\b${WF}\\s*\\[(.*?)\\]`, "g"), `${WF}[$1].el`);
          return FF
        };
      return {
        vertex: `${eF}\n${QF}\n${rW}\n${tW(SF.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${eF}\n${gW}\n${bu((TF=tW(CF.body),TF.includes("fragmentInputs.position")?TF.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):TF))}`,
        attributes: EF,
        material: bW,
        textures: dF
      };
      var TF
    }
    const iu = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      eA = FF => ({
        name: FF,
        type: "vec3"
      }),
      EA = FF => ({
        name: FF,
        type: "float"
      }),
      QA = oC("EarthSkyUniforms", [eA("viewFrom"), EA("exposureScale"), eA("zenithOffset"), EA("fogOn"), eA("up"), EA("ditherOn"), eA("sun"), EA("turbidity"), eA("tint"), EA("rayleigh"), eA("sunDir"), EA("mieStrength"), eA("inScatterR"), EA("mieFocus"), eA("inScatterM"), EA("sunE"), eA("extinctionBeta"), EA("sunsetMix"), EA("mieScale"), EA("mieBase"), EA("mieSlope"), EA("sunDiscE"), EA("exposure")]),
      ru = `${EC}\n${sC}\n${QA.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      gu = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${iu.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      tu = `\n${jW}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(gS).map((FF=>{let[WF,SF]=FF;return`const TONE_${WF}: f32 = ${SF};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${tS};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${BF}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var TA = SF(35617);
    const au = new TA.HC,
      ku = new TA.HC,
      qu = new TA.Quaternion,
      VA = new Float64Array(3),
      NA = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      DA = new Float64Array(16);

    function LA(FF, WF, SF) {
      const CF = SF.worldMatrix;
      var AF;
      FF.updateFloat3("viewFrom", CF[12], CF[13], CF[14]), FF.updateFloatsFrom("zenithOffset", WF.cameraOffset, 0, 3), FF.updateFloatsFrom("up", WF.up, 0, 3), WF.luminance > 0 && (FF.updateFloat("exposure", WF.luminance), FF.updateFloat("exposureScale", (AF = WF.luminance, Math.log2(2 / Math.pow(AF, 4))))), FF.updateFloat("turbidity", WF.turbidity), FF.updateFloat("rayleigh", WF.rayleigh), FF.updateFloat("mieStrength", WF.mieCoefficient), FF.updateFloat("mieFocus", WF.mieDirectionalG), FF.updateFloatsFrom("tint", WF.tint, 0, 3), FF.updateFloat("fogOn", WF.fog && SF.fogEnabled && 0 !== SF.fogMode ? 1 : 0), FF.updateFloat("ditherOn", WF.dithering ? 1 : 0);
      const uF = WF.sunPosition;
      if (au.set(uF[0], uF[1], uF[2]), !WF.useSunPosition) {
        const FF = Math.PI * (WF.inclination - .5),
          SF = 2 * Math.PI * (WF.azimuth - .5);
        au.set(WF.distance * Math.cos(SF) * Math.cos(FF), WF.distance * Math.sin(-FF), WF.distance * Math.sin(SF) * Math.cos(FF)), TA.Quaternion.FromUnitVectorsToRef(TA.HC.UpReadOnly, ku.set(WF.up[0], WF.up[1], WF.up[2]), qu), au.rotateByQuaternionToRef(qu, au)
      }
      FF.updateVector3("sun", au), VA[0] = au.x, VA[1] = au.y, VA[2] = au.z;
      const hF = rS(WF, VA, NA);
      FF.updateFloatsFrom("sunDir", hF.sunDir, 0, 3), FF.updateFloat("sunE", hF.sunE), FF.updateFloatsFrom("inScatterR", hF.inScatterR, 0, 3), FF.updateFloatsFrom("inScatterM", hF.inScatterM, 0, 3), FF.updateFloatsFrom("extinctionBeta", hF.extinctionBeta, 0, 3), FF.updateFloat("sunsetMix", hF.sunsetMix), FF.updateFloat("sunDiscE", hF.sunDiscE), FF.updateFloat("mieScale", hF.mieScale), FF.updateFloat("mieBase", hF.mieBase), FF.updateFloat("mieSlope", hF.mieSlope)
    }

    function mu(FF, WF) {
      const SF = DA;
      SF[0] = WF.far, SF[5] = WF.far, SF[10] = WF.far, SF[15] = 1;
      const CF = FF.infiniteDistance;
      for (let AF = 0; AF < 3; AF++) SF[12 + AF] = FF.position[AF] + (CF ? WF.worldMatrix[12 + AF] : 0);
      return DA
    }
    var OA = SF(37123);

    function xu(FF) {
      return Math.max(4, 4 * Math.ceil(FF / 4))
    }

    function ZA(FF, WF, SF, CF) {
      const AF = FF.createBuffer({
        label: CF,
        size: xu(WF.byteLength),
        usage: SF,
        mappedAtCreation: !0
      });
      return new Uint8Array(AF.getMappedRange(), 0, WF.byteLength).set(new Uint8Array(WF.buffer, WF.byteOffset, WF.byteLength)), AF.unmap(), AF
    }

    function oA(FF, WF) {
      return Math.floor(Math.log2(Math.max(FF, WF))) + 1
    }

    function YA(FF, WF, SF, CF, AF, uF) {
      const hF = FF.createTexture({
          label: uF,
          size: {
            width: SF,
            height: CF,
            depthOrArrayLayers: AF
          },
          format: "rgba8unorm",
          mipLevelCount: oA(SF, CF),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        bW = (WF, SF, CF, uF) => {
          FF.queue.writeTexture({
            texture: hF,
            mipLevel: SF
          }, WF, {
            bytesPerRow: 4 * CF,
            rowsPerImage: uF
          }, {
            width: CF,
            height: uF,
            depthOrArrayLayers: AF
          })
        };
      bW(WF, 0, SF, CF);
      let dF = 1;
      for (const PF of function*(FF, WF, SF, CF) {
          let AF = FF,
            uF = WF,
            hF = SF;
          for (; uF > 1 || hF > 1;) {
            const FF = Math.max(1, uF >> 1),
              WF = Math.max(1, hF >> 1),
              SF = new Uint8Array(FF * WF * CF * 4),
              bW = 4 * uF;
            let dF = 0;
            for (let PF = 0; PF < CF; PF++) {
              const CF = PF * bW * hF;
              for (let PF = 0; PF < WF; PF++) {
                const WF = CF + Math.min(2 * PF, hF - 1) * bW,
                  RF = CF + Math.min(2 * PF + 1, hF - 1) * bW;
                for (let CF = 0; CF < FF; CF++) {
                  const FF = 4 * Math.min(2 * CF, uF - 1),
                    hF = 4 * Math.min(2 * CF + 1, uF - 1);
                  for (let CF = 0; CF < 4; CF++) SF[dF++] = AF[WF + FF + CF] + AF[WF + hF + CF] + AF[RF + FF + CF] + AF[RF + hF + CF] + 2 >> 2
                }
              }
            }
            yield {
              data: SF,
              width: FF,
              height: WF
            }, AF = SF, uF = FF, hF = WF
          }
        }(WF, SF, CF, AF)) bW(PF.data, dF++, PF.width, PF.height);
      return hF
    }
    const MA = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function cu(FF) {
      if (FF.startsWith("data:")) {
        const WF = FF.search(/[;,]/);
        return `data:${WF>5?FF.slice(5,WF):""} URL of ${FF.length} characters`
      }
      return FF.length > 80 ? `${FF.slice(0,80)}...` : FF
    }
    async function GA(FF) {
      const WF = await fetch(FF);
      if (!WF.ok) throw new Error(`${cu(FF)}: ${WF.status} ${WF.statusText}`);
      return createImageBitmap(await WF.blob(), MA)
    }
    async function zu(FF) {
      const WF = await GA(FF),
        SF = new OffscreenCanvas(WF.width, WF.height),
        CF = SF.getContext("2d", {
          willReadFrequently: !0
        });
      if (!CF) throw new Error("No 2D context to decode an image");
      CF.drawImage(WF, 0, 0);
      const {
        data: AF
      } = CF.getImageData(0, 0, WF.width, WF.height);
      return WF.close(), {
        pixels: new Uint8Array(AF.buffer, AF.byteOffset, AF.byteLength),
        width: SF.width,
        height: SF.height
      }
    }
    const IA = new WeakMap;

    function fA(FF, WF, SF, CF) {
      var AF;
      const uF = null !== (AF = IA.get(FF)) && void 0 !== AF ? AF : new Map;
      IA.set(FF, uF);
      let hF = uF.get(WF);
      return hF || (hF = (async AF => {
        const uF = null !== (AF = function(FF, WF) {
          const SF = FF ? new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength) : null;
          return null !== SF && void 0 !== SF && SF.byteLength && WF && SF.byteLength % (WF * WF * 4) === 0 ? {
            pixels: SF,
            layerWidth: WF,
            layers: SF.byteLength / (WF * WF * 4)
          } : null
        }(SF, CF)) && void 0 !== AF ? AF : await async function(FF) {
          const {
            pixels: WF,
            width: SF
          } = await zu(FF);
          return {
            pixels: WF,
            layerWidth: SF,
            layers: WF.byteLength / (SF * SF * 4)
          }
        }(WF), {
          layerWidth: hF,
          layers: bW
        } = uF;
        return {
          texture: YA(FF, uF.pixels, hF, hF, bW, `atlas-${WF}`),
          layerWidth: hF,
          layers: bW
        }
      })(), uF.set(WF, hF), hF.catch((() => {
        uF.delete(WF)
      }))), hF
    }
    const yu = new Map([
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
      sA = new Map([
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

    function nA(FF) {
      for (const WF of (0, OA.k)(FF))
        if (!sA.has((0, OA.h)(WF))) return !1;
      return !0
    }

    function HA(FF) {
      const WF = sA.get(FF);
      if (!WF) return null;
      const [SF, CF, AF] = WF;
      return {
        srcFactor: yu.get(SF),
        dstFactor: yu.get(CF),
        operation: AF
      }
    }
    let KA = null;

    function wA(FF) {
      KA = FF
    }

    function XA(FF, WF, SF) {
      var CF;
      null === (CF = KA) || void 0 === CF || CF(FF, WF, SF, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class UA {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(FF, WF, SF, CF, AF) {
        SF !== this.pipeline && (FF.setPipeline(SF), this.pipeline = SF), FF.setBindGroup(1, CF, [AF]);
        const uF = WF.material.bindGroup;
        uF !== this.materialGroup && (FF.setBindGroup(2, uF), this.materialGroup = uF);
        const hF = WF.program.packGroup;
        hF && hF !== this.packGroup && (FF.setBindGroup(mS.f, hF), this.packGroup = hF);
        const {
          vertexBuffers: bW,
          vertexOffsets: dF
        } = this;
        for (let PF = 0; PF < WF.vertexBuffers.length; PF++) bW[PF] === WF.vertexBuffers[PF] && dF[PF] === WF.vertexOffsets[PF] || (FF.setVertexBuffer(PF, WF.vertexBuffers[PF], WF.vertexOffsets[PF]), bW[PF] = WF.vertexBuffers[PF], dF[PF] = WF.vertexOffsets[PF]);
        WF.indexBuffer && WF.indexBuffer !== this.indexBuffer && (FF.setIndexBuffer(WF.indexBuffer, WF.indexFormat), this.indexBuffer = WF.indexBuffer)
      }
    }
    class BA {
      constructor(FF, WF, SF, CF) {
        this.modelMeshes = FF, this.LuF = WF, this.maker = SF, this.warnOnce = CF, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(FF) {
        this.collectGroup(FF, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(FF, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(FF, 1, this.frontDraws, this.frontDraws, !0);
        for (const WF of this.modelMeshes.groupIds())(WF < -1 || WF > 1) && this.warnOnce(`group:${WF}`, `rendering group ${WF} is not drawn`);
        for (const WF of this.LuF.groupIds())(WF < -1 || WF > 1) && this.warnOnce(`group:${WF}`, `rendering group ${WF} is not drawn`);
        this.opaqueDraws.sort(ju), this.transparentDraws.sort(vu)
      }
      collectGroup(FF, WF, SF, CF, AF) {
        const uF = this.modelMeshes.group(WF),
          hF = this.LuF.group(WF),
          bW = 0 === WF ? null === hF || void 0 === hF ? void 0 : hF.opaque : void 0;
        this.collectList(FF, null === uF || void 0 === uF ? void 0 : uF.opaque, bW || null === hF || void 0 === hF ? void 0 : hF.opaque, WF, !1, SF, AF), bW && (this.LuF.drawn += this.maker.bundleDraws(FF, bW, WF)), this.collectList(FF, null === uF || void 0 === uF ? void 0 : uF.alphaTest, void 0, WF, !1, SF, AF), this.collectList(FF, null === uF || void 0 === uF ? void 0 : uF.transparent, null === hF || void 0 === hF ? void 0 : hF.transparent, WF, !0, CF, AF)
      }
      collectList(FF, WF, SF, CF, AF, uF, hF) {
        var bW;
        const dF = uF.length;
        WF && this.maker.pushDraws(FF, WF.units, WF.units.length, CF, AF, uF, WF.rows), SF && (this.LuF.drawn += this.maker.pushDraws(FF, SF, SF.length, CF, AF, uF));
        const PF = AF ? null === (bW = this.modelMeshes.group(CF)) || void 0 === bW ? void 0 : bW.text : void 0;
        PF && this.maker.pushDraws(FF, PF.units, PF.units.length, CF, !0, uF, PF.rows), hF && JA(uF, dF)
      }
    }

    function ju(FF, WF) {
      return FF.program.id - WF.program.id || FF.material.owner.uniqueId - WF.material.owner.uniqueId
    }

    function vu(FF, WF) {
      return FF.material.owner.uniqueId - WF.material.owner.uniqueId
    }

    function JA(FF, WF) {
      for (let SF = WF + 1; SF < FF.length; SF++) {
        const CF = FF[SF];
        let AF = SF - 1;
        for (; AF >= WF && vu(FF[AF], CF) > 0; AF--) FF[AF + 1] = FF[AF];
        FF[AF + 1] = CF
      }
    }
    const pA = {};

    function lA(FF) {
      return FF.hasThinInstances ? "thin" : FF.RRF || FF._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Fu(FF, WF, SF) {
      return FF ? (SF._needUVs = !0, FF.optimizeUVAllocation && (0, OF.J)(FF.matrix) ? (SF[`${WF}DIRECTUV`] = FF.uvSet + 1, SF[`MAINUV${FF.uvSet+1}`] = !0) : SF[`${WF}DIRECTUV`] = 0, !0) : (SF[`${WF}DIRECTUV`] = 0, !1)
    }

    function Wu(FF) {
      const WF = new Map;
      for (const SF in FF) {
        if (95 === SF.charCodeAt(0)) continue;
        const CF = FF[SF],
          AF = typeof CF;
        "number" === AF || "string" === AF ? WF.set(SF, String(CF)) : CF && "function" !== AF && WF.set(SF, !0)
      }
      return WF
    }

    function Su(FF) {
      const WF = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: SF
        }
        of FF.features)
        for (const FF in SF) WF[FF] = SF[FF];
      return WF
    }

    function Cu(FF) {
      const WF = FF.parts.geometry;
      return null !== WF && void 0 !== WF && WF.live ? WF : null
    }

    function Au(FF) {
      var WF;
      return null !== (WF = Cu(FF)) && void 0 !== WF ? WF : pA
    }
    class uu {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = FF, this.warnOnce = WF, this.programWithModel = SF, this.packFailed = CF, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(FF, WF, SF, CF, AF) {
        const uF = WF.owner;
        let hF = this.drawStates.get(WF);
        if (!hF) {
          const FF = WF.parts.materials[WF.range];
          if (!FF) return this.warnOnce("model", `${SF.name} on ${uF.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          hF = {
            defines: Su(FF),
            model: FF,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: AF,
            groupId: CF,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(WF, hF)
        }
        if (this.programCurrent(hF, WF, AF, CF)) return hF.program;
        const {
          model: bW
        } = hF, dF = Au(WF), PF = this.instanceLayout(uF, AF), RF = this.definesBits(uF);
        if (!this.prepareModelDefines(FF, uF, bW, hF.defines, CF, AF)) return null;
        hF.instancing = AF, hF.groupId = CF, hF.modelVersion = bW.version, hF.geometry = dF, hF.instanceLayout = PF, hF.definesBits = RF;
        const iW = function(FF) {
          let WF = "";
          for (const [SF, CF] of FF) WF += !0 === CF ? `${SF};` : `${SF}=${CF};`;
          return WF
        }(Wu(hF.defines));
        return iW === hF.definesKey && hF.packVariant === this.modelPackVariant && hF.program && !this.packFailed(hF.program) || (hF.definesKey = iW, hF.packVariant = this.modelPackVariant, hF.program = this.programWithModel(bW, hF.defines, iW)), hF.program
      }
      programCurrent(FF, WF, SF, CF) {
        return null !== FF.program && !this.packFailed(FF.program) && FF.instancing === SF && FF.groupId === CF && this.definesHold(FF, WF, SF)
      }
      definesHold(FF, WF, SF) {
        return FF.modelVersion === FF.model.version && FF.geometry === Au(WF) && FF.instanceLayout === this.instanceLayout(WF.owner, SF) && FF.definesBits === this.definesBits(WF.owner) && FF.packVariant === this.modelPackVariant
      }
      modelPackKind(FF) {
        var WF;
        return 0 === this.modelPackVariant ? null : null !== (WF = (0, LF.x)(FF, DF.h.name)) && void 0 !== WF && WF.active ? "placed" : FF.item ? "item" : FF.lifeform ? "lifeform" : null
      }
      instanceLayout(FF, WF) {
        var SF, CF, AF;
        return "thin" === WF ? null !== (AF = this.resources.duF.get(FF)) && void 0 !== AF ? AF : null : "instanced" === WF && null !== (SF = null === (CF = FF._userInstancedBuffersStorage) || void 0 === CF ? void 0 : CF.interleavedKinds) && void 0 !== SF ? SF : null
      }
      definesBits(FF) {
        const WF = this.view;
        return (FF.visibility < 1 ? 1 : 0) | (FF.hasVertexAlpha ? 2 : 0) | (FF.applyFog ? 4 : 0) | (FF.useVertexColors ? 8 : 0) | (FF.nonUniformScaling ? 16 : 0) | (WF.fogEnabled && 0 !== WF.fogMode ? 32 : 0) | (WF.lightsEnabled ? 64 : 0) | WF.lightCount << 7
      }
      prepareLightDefines(FF, WF, SF) {
        let CF = 0;
        if (this.view.lightsEnabled && !WF) {
          const WF = Math.min(SF, 4);
          for (; CF < this.view.lightCount && (FF[`LIGHT${CF}`] = !0, FF[`LITE_LIGHT${CF}_SLOT`] = CF, CF++, FF._needNormals = !0, CF !== WF););
        }
        for (let AF = CF; AF < 4; AF++) FF[`LIGHT${AF}`] = !1, FF[`LITE_LIGHT${AF}_SLOT`] = void 0
      }
      prepareModelDefines(FF, WF, SF, CF, AF, uF) {
        const {
          features: hF
        } = SF;
        CF._needNormals = !1, CF._needUVs = !1;
        const bW = this.view;
        this.prepareLightDefines(CF, SF.disableLighting, SF.maxSimultaneousLights), CF.MAINUV1 = !1, CF.MAINUV2 = !1;
        const dF = SF.diffuseTexture;
        dF ? (CF._needUVs = !0, CF.DIFFUSE = !0, dF.optimizeUVAllocation && (0, OF.J)(dF.matrix) ? (CF.DIFFUSEDIRECTUV = dF.uvSet + 1, CF[`MAINUV${dF.uvSet+1}`] = !0) : CF.DIFFUSEDIRECTUV = 0, dF.uvSet > 1 && this.warnOnce(`uvset:${SF.name}`, `${SF.name} samples UV set ${dF.uvSet+1}, which is not supported`)) : (CF.DIFFUSE = !1, CF.DIFFUSEDIRECTUV = 0);
        const PF = SF.opacityTexture,
          RF = SF.emissiveTexture;
        CF.OPACITY = Fu(PF, "OPACITY", CF), CF.OPACITYRGB = null !== PF && PF.getAlphaFromRGB, CF.EMISSIVE = Fu(RF, "EMISSIVE", CF), (PF && PF.uvSet > 1 || RF && RF.uvSet > 1) && this.warnOnce(`uvset:${SF.name}`, `${SF.name} samples a UV set past 2, which is not supported`);
        const iW = SF.reflectionTexture,
          eF = null !== iW;
        if (eF) {
          if (!this.resources.boundTexture(iW)) return !1;
          CF._needNormals = !0
        }
        CF.REFLECTION = eF, CF.REFLECTIONMAP_3D = eF, CF.REFLECTIONMAP_SKYBOX = eF, CF.REFLECTIONMAP_OPPOSITEZ = eF && (FF.useRightHandedSystem ? !iW.invertZ : iW.invertZ), CF.ROUGHNESS = eF && SF.roughness > 0, CF.REFLECTIONOVERALPHA = eF && SF.useReflectionOverAlpha, CF.LITE_REFLECTION_LUMINANCE = eF && "cube" === iW.source.kind && iW.source.luminance, (WF.skeleton || WF.morphTargetManager) && this.warnOnce(`skin:${WF.name}`, `${WF.name} has bones or morph targets, which are not supported`), CF.FOG = SF.fogEnabled && WF.applyFog && bW.fogEnabled && 0 !== bW.fogMode, CF.NONUNIFORMSCALING = WF.nonUniformScaling;
        const {
          visibility: EF,
          hasVertexAlpha: QF
        } = WF;
        CF.ALPHATEST = (0, LF.R)(SF, EF, QF), CF.ALPHAFROMDIFFUSE = (0, LF.fb)(SF), CF.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== SF.transparencyMode, CF.ALPHABLEND = null === SF.transparencyMode || (0, LF.Q)(SF, EF, QF), CF.PREMULTIPLYALPHA = 7 === SF.alphaMode || 8 === SF.alphaMode, CF.EMISSIVEASILLUMINATION = SF.useEmissiveAsIllumination, CF.LINKEMISSIVEWITHDIFFUSE = SF.linkEmissiveWithDiffuse, CF.TWOSIDEDLIGHTING = !SF.backFaceCulling && SF.twoSidedLighting, CF.INSTANCES = "none" !== uF, CF.THIN_INSTANCES = "thin" === uF, CF.LITE_FRONT_LAYER = AF >= 1;
        for (const {
            feature: NF,
            state: DF,
            active: LF
          }
          of hF) {
          var rW, gW;
          if (LF) null === (rW = (gW = (0, RW.l)(NF)).prepareDefinesBeforeAttributes) || void 0 === rW || rW.call(gW, DF, CF, FF, WF)
        }
        this.modelPackKind(SF) && (CF._needNormals = !0), CF.NORMAL = CF._needNormals && WF.isVerticesDataPresent("normal"), CF.UV1 = CF._needUVs && WF.isVerticesDataPresent("uv"), CF.UV2 = CF._needUVs && WF.isVerticesDataPresent("uv2");
        const tW = WF.useVertexColors && WF.isVerticesDataPresent("color");
        CF.VERTEXCOLOR = tW, CF.VERTEXALPHA = WF.hasVertexAlpha && tW, CF.INSTANCESCOLOR = "none" !== uF && WF.isVerticesDataPresent("instanceColor");
        for (const {
            feature: NF,
            state: DF,
            active: LF
          }
          of hF) {
          var TF, aW;
          if (LF) null === (TF = (aW = (0, RW.l)(NF)).prepareDefines) || void 0 === TF || TF.call(aW, DF, CF, FF, WF, SF)
        }
        const kW = FF.sC();
        for (const {
            feature: NF,
            state: DF,
            active: LF
          }
          of hF) {
          var qW, VF;
          if (LF && !1 === (null === (qW = (VF = (0, RW.l)(NF)).isReadyForSubMesh) || void 0 === qW ? void 0 : qW.call(VF, DF, CF, FF, kW))) return !1
        }
        return !0
      }
    }

    function hu(FF, WF, SF) {
      return FF.codeVersion !== WF.version && function(FF, WF) {
        const SF = [],
          CF = [];
        for (const {
            feature: eF,
            state: EF,
            active: QF
          }
          of WF.features) {
          var AF, uF, hF, bW;
          if (QF) bh(null === (AF = (uF = (0, RW.l)(eF)).getCustomCode) || void 0 === AF ? void 0 : AF.call(uF, EF, "vertex", VF.d.WGSL), SF), bh(null === (hF = (bW = (0, RW.l)(eF)).getCustomCode) || void 0 === hF ? void 0 : hF.call(bW, EF, "fragment", VF.d.WGSL), CF)
        }
        const dF = [];
        for (const {
            feature: eF,
            state: EF
          }
          of WF.features) {
          var PF, RF;
          const FF = null === (PF = (RF = (0, RW.l)(eF)).getUniforms) || void 0 === PF ? void 0 : PF.call(RF, EF, VF.d.WGSL);
          for (const WF of null !== (iW = null === FF || void 0 === FF ? void 0 : FF.ubo) && void 0 !== iW ? iW : []) {
            var iW;
            WF.size && WF.type && dF.push({
              name: WF.name,
              type: WF.type,
              arraySize: WF.arraySize
            })
          }
        }
        FF.vertexCode = SF, FF.fragmentCode = CF, FF.pluginUniforms = dF, FF.codeKey = JSON.stringify([SF, CF, dF]), FF.codeVersion = WF.version
      }(FF, WF), `${SF}#${FF.codeKey}`
    }

    function bh(FF, WF) {
      if (FF)
        for (const SF in FF) FF[SF] && WF.push([SF, FF[SF]])
    }
    const du = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Pu {
      constructor(FF) {
        this.warnOnce = FF, this.states = new Map
      }
      renderState(FF, WF, SF, CF) {
        var AF;
        let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          hF = null !== (AF = FF.sideOrientation) && void 0 !== AF ? AF : WF.sideOrientation;
        WF._getWorldMatrixDeterminant() < 0 && (hF = 0 === hF ? 1 : 0);
        const bW = "triangle-list" === uF,
          dF = SF ? FF.alphaMode : 0,
          PF = (!SF || (0 === dF || FF.forceDepthWrite)) && !FF.disableDepthWrite,
          RF = bW && FF.backFaceCulling ? FF.cullBackFaces ? "back" : "front" : "none",
          iW = bW && 0 !== hF ? "ccw" : "cw",
          eF = FF.depthFunction,
          EF = bW ? FF.zOffset : 0,
          QF = bW ? FF.zOffsetUnits : 0,
          rW = !FF.disableColorWrite;
        return CF && CF.alphaMode === dF && CF.depthWrite === PF && CF.depthFunction === eF && CF.cullMode === RF && CF.frontFace === iW && CF.zOffset === EF && CF.zOffsetUnits === QF && CF.colourWrite === rW && CF.topology === uF ? CF : this.stateFor(dF, PF, eF, RF, iW, EF, QF, rW, uF)
      }
      stateFor(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        const PF = `${FF}|${WF}|${SF}|${CF}|${AF}|${uF}|${hF}|${bW}|${dF}`;
        let RF = this.states.get(PF);
        if (!RF) {
          var iW;
          const eF = FF ? HA(FF) : null;
          FF && !eF && this.warnOnce(`alpha:${FF}`, `alpha mode ${FF} is not supported`), RF = {
            key: PF,
            alphaMode: FF,
            depthFunction: SF,
            zOffset: uF,
            zOffsetUnits: hF,
            topology: dF,
            blend: eF,
            depthWrite: WF,
            depthCompare: SF && null !== (iW = du.get(SF)) && void 0 !== iW ? iW : null,
            cullMode: CF,
            frontFace: AF,
            depthBias: -hF,
            depthBiasSlopeScale: -uF,
            colourWrite: bW
          }, this.states.set(PF, RF)
        }
        return RF
      }
    }
    var Ru = SF(35791);

    function ih(FF) {
      if (!FF.frozen) return -1;
      let WF = FF.version;
      for (const {
          feature: SF,
          state: CF,
          active: AF
        }
        of FF.features) {
        if (!AF || !SF.bind) continue;
        const FF = (0, RW.l)(SF).uniformsVersion;
        if (!FF) return -1;
        WF += FF(CF)
      }
      return WF
    }
    class eu {
      constructor(FF, WF, SF) {
        this.slots = FF, this.data = WF, this.textures = SF, this.useUbo = !0, this.currentEffect = null
      }
      updateFloat(FF, WF) {
        this.write4(FF, WF, 0, 0, 0, 1)
      }
      updateFloat2(FF, WF, SF) {
        this.write4(FF, WF, SF, 0, 0, 2)
      }
      updateFloat3(FF, WF, SF, CF) {
        this.write4(FF, WF, SF, CF, 0, 3)
      }
      updateFloat4(FF, WF, SF, CF, AF) {
        this.write4(FF, WF, SF, CF, AF, 4)
      }
      updateVector3(FF, WF) {
        this.write4(FF, WF.x, WF.y, WF.z, 0, 3)
      }
      updateVector4(FF, WF) {
        this.write4(FF, WF.x, WF.y, WF.z, WF.w, 4)
      }
      updateColor3(FF, WF) {
        this.write4(FF, WF.r, WF.g, WF.b, 0, 3)
      }
      updateColor4(FF, WF, SF) {
        this.write4(FF, WF.r, WF.g, WF.b, SF, 4)
      }
      updateFloatsFrom(FF, WF, SF, CF) {
        const AF = this.slots.get(FF);
        if (!AF) return;
        const uF = this.data,
          hF = AF.offset;
        for (let bW = 0; bW < CF; bW++) uF[hF + bW] = WF[SF + bW]
      }
      updateFloat3TimesFloats(FF, WF, SF, CF) {
        const AF = this.slots.get(FF);
        if (!AF) return;
        const uF = this.data,
          hF = AF.offset;
        uF[hF] = WF[SF] * CF[0], uF[hF + 1] = WF[SF + 1] * CF[1], uF[hF + 2] = WF[SF + 2] * CF[2]
      }
      yhF(FF, WF) {
        const SF = this.slots.get(FF);
        SF && this.data.set(WF.m, SF.offset)
      }
      updateMatrixFloats(FF, WF) {
        const SF = this.slots.get(FF);
        SF && this.data.set(WF, SF.offset)
      }
      updateFloatArray(FF, WF) {
        const SF = this.slots.get(FF);
        if (!SF) return;
        if (!SF.arraySize || SF.stride === SF.floats) return void this.data.set(WF, SF.offset);
        const CF = Math.min(WF.length, SF.floats * SF.arraySize);
        for (let AF = 0; AF < CF; AF++) this.data[SF.offset + Math.floor(AF / SF.floats) * SF.stride + AF % SF.floats] = WF[AF]
      }
      updateArray(FF, WF) {
        this.updateFloatArray(FF, WF)
      }
      setTexture(FF, WF) {
        this.textures.set(FF, WF)
      }
      expectTexture(FF) {
        this.textures.set(FF, null)
      }
      write4(FF, WF, SF, CF, AF, uF) {
        const hF = this.slots.get(FF);
        if (!hF) return;
        const bW = this.data,
          dF = hF.offset;
        bW[dF] = WF, uF > 1 && (bW[dF + 1] = SF), uF > 2 && (bW[dF + 2] = CF), uF > 3 && (bW[dF + 3] = AF)
      }
    }

    function Eu(FF, WF) {
      const SF = fC,
        CF = Ru.m,
        AF = FF.lights,
        uF = Math.min(FF.lightCount, 8);
      for (let hF = 0; hF < uF; hF++) {
        const FF = SF.lights + hF * SF.lightStride,
          uF = hF * Ru.e;
        WF[FF] = AF[uF + CF.vector], WF[FF + 1] = AF[uF + CF.vector + 1], WF[FF + 2] = AF[uF + CF.vector + 2], WF[FF + 3] = AF[uF + CF.kind] === Ru.i.directional ? 1 : 0, WF[FF + 4] = AF[uF + CF.diffuse], WF[FF + 5] = AF[uF + CF.diffuse + 1], WF[FF + 6] = AF[uF + CF.diffuse + 2], WF[FF + 7] = AF[uF + CF.range], WF[FF + 8] = AF[uF + CF.specular], WF[FF + 9] = AF[uF + CF.specular + 1], WF[FF + 10] = AF[uF + CF.specular + 2], WF[FF + 11] = AF[uF + CF.range]
      }
      WF[SF.fogInfos] = FF.fogMode, WF[SF.fogInfos + 1] = FF.fogStart, WF[SF.fogInfos + 2] = FF.fogEnd, WF[SF.fogInfos + 3] = FF.fogDensity, WF[SF.fogColour] = FF.fogColour[0], WF[SF.fogColour + 1] = FF.fogColour[1], WF[SF.fogColour + 2] = FF.fogColour[2], WF[SF.outputHeight] = FF.renderHeight, WF[SF.animTick] = FF.animTick, WF[SF.timeMs] = FF.timeMs
    }
    class Qu {
      constructor(FF) {
        this.instancesOf = FF
      }
      refreshModelUniforms(FF, WF, SF, CF) {
        const AF = ih(SF);
        if (AF >= 0 && AF === WF.heldVersion && WF.textures.get("diffuseSampler") === SF.diffuseTexture && WF.textures.get("reflectionCubeSampler") === SF.reflectionTexture && WF.textures.get("opacitySampler") === SF.opacityTexture && WF.textures.get("emissiveSampler") === SF.emissiveTexture) return !0;
        if (AF < 0)
          for (const uF of this.instancesOf(SF)) uF.heldVersion = -1;
        return this.writeModelUniforms(FF, WF, SF, CF), WF.heldVersion = AF, !1
      }
      writeModelUniforms(FF, WF, SF, CF) {
        const {
          ubo: AF
        } = WF, uF = SF.diffuseTexture, hF = SF.diffuseColor;
        AF.updateFloat4("vDiffuseColor", hF[0], hF[1], hF[2], SF.alpha), uF && (AF.updateFloat2("vDiffuseInfos", uF.uvSet, uF.level), AF.updateMatrixFloats("diffuseMatrix", uF.matrix)), AF.updateFloat("alphaCutOff", SF.alphaCutOff), AF.updateFloatsFrom("vEmissiveColor", SF.emissiveColor, 0, 3), AF.updateFloat3TimesFloats("vAmbientColor", CF.ambientColour, 0, SF.ambientColor);
        const bW = SF.specularColor;
        AF.updateFloat4("vSpecularColor", bW[0], bW[1], bW[2], SF.specularPower), AF.setTexture("diffuseSampler", uF);
        const dF = SF.opacityTexture;
        dF && (AF.updateFloat2("vOpacityInfos", dF.uvSet, dF.level), AF.updateMatrixFloats("opacityMatrix", dF.matrix)), AF.setTexture("opacitySampler", dF);
        const PF = SF.emissiveTexture;
        PF && (AF.updateFloat2("vEmissiveInfos", PF.uvSet, PF.level), AF.updateMatrixFloats("emissiveMatrix", PF.matrix)), AF.setTexture("emissiveSampler", PF);
        const RF = SF.reflectionTexture;
        RF && AF.updateMatrixFloats("reflectionMatrix", RF.matrix), AF.updateFloat2("vReflectionInfos", RF ? RF.level * FF.iblIntensity : 0, SF.roughness), AF.setTexture("reflectionCubeSampler", RF);
        const iW = FF.sC();
        for (const {
            feature: QF,
            state: rW,
            active: gW
          }
          of SF.features) {
          var eF, EF;
          if (gW) null === (eF = (EF = (0, RW.l)(QF)).bind) || void 0 === eF || eF.call(EF, rW, AF, FF, iW)
        }
      }
    }

    function rh(FF) {
      const WF = FF.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(WF) ? "u32" : /i32|^vec\di$/.test(WF) ? "i32" : "f32"
    }

    function gh(FF, WF) {
      const SF = FF.getSize(),
        CF = rh(WF),
        AF = FF => 4 === SF ? `${FF}x4` : 2 === SF ? `${FF}x2` : null;
      if ("f32" === CF) {
        if (5126 === FF.type) return 1 === SF ? "float32" : SF >= 2 && SF <= 4 ? `float32x${SF}` : null;
        if (!FF.normalized) return null;
        switch (FF.type) {
          case 5121:
            return AF("unorm8");
          case 5120:
            return AF("snorm8");
          case 5123:
            return AF("unorm16");
          case 5122:
            return AF("snorm16")
        }
        return null
      }
      const uF = "u32" === CF ? "uint" : "sint";
      switch (FF.type) {
        case 5125:
        case 5124:
          return 1 === SF ? `${uF}32` : SF <= 4 ? `${uF}32x${SF}` : null;
        case 5121:
        case 5120:
          return AF(`${uF}8`);
        case 5123:
        case 5122:
          return AF(`${uF}16`)
      }
      return null
    }

    function th(FF) {
      var WF;
      const SF = /(8|16|32)(?:x(\d))?$/.exec(FF);
      return SF ? Number(SF[1]) / 8 * Number(null !== (WF = SF[2]) && void 0 !== WF ? WF : 1) : 4
    }
    class Tu {
      constructor(FF, WF, SF) {
        this.resources = FF, this.limits = WF, this.warnOnce = SF, this.layouts = new Map
      }
      resolveInputs(FF, WF, SF, CF) {
        const AF = [],
          uF = SF.program.attributes,
          hF = [];
        for (let RF = 0; RF < uF.length; RF++) {
          const SF = uF[RF],
            bW = SF.optional ? null : this.resources.vertexInput(FF, SF.name, CF);
          if (!bW) {
            const FF = rh(SF.type),
              WF = "u32" === FF ? "uint32x4" : "i32" === FF ? "sint32x4" : "float32x4";
            hF.push(null);
            const CF = AF.find((FF => null === FF.data));
            CF ? CF.attributes.push({
              shaderLocation: RF,
              offset: 0,
              format: WF
            }) : AF.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: RF,
                offset: 0,
                format: WF
              }]
            });
            continue
          }
          const dF = bW.getBuffer();
          hF.push(bW);
          const PF = gh(bW, SF.type);
          if (!PF) return this.warnOnce(`format:${WF}:${SF.name}`, `${WF}'s ${SF.name} (type ${bW.type}, size ${bW.getSize()}) has no WebGPU vertex format`), null;
          const iW = bW.getIsInstanced() ? "instance" : "vertex",
            eF = bW.byteStride,
            EF = th(PF),
            QF = AF.find((FF => FF.data === dF && FF.stride === eF && FF.step === iW && bW.byteOffset >= FF.base && bW.byteOffset - FF.base + EF <= eF));
          QF ? QF.attributes.push({
            shaderLocation: RF,
            offset: bW.byteOffset - QF.base,
            format: PF
          }) : AF.push({
            data: dF,
            base: bW.byteOffset,
            stride: eF,
            step: iW,
            attributes: [{
              shaderLocation: RF,
              offset: 0,
              format: PF
            }]
          })
        }
        if (AF.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${WF}`, `${WF} needs ${AF.length} vertex buffers`), null;
        let bW = "";
        for (const RF of AF) {
          bW += `${RF.stride}${"instance"===RF.step?"i":"v"}`;
          for (const FF of RF.attributes) bW += `,${FF.shaderLocation}:${FF.offset}:${FF.format}`;
          bW += ";"
        }
        let dF = this.layouts.get(bW);
        dF || (dF = {
          key: bW,
          buffers: AF.map((FF => ({
            arrayStride: FF.stride,
            stepMode: FF.step,
            attributes: FF.attributes
          }))),
          instanceEnds: AF.map((FF => {
            let WF = -1;
            if ("instance" === FF.step)
              for (const SF of FF.attributes) WF = Math.max(WF, SF.offset + th(SF.format));
            return WF
          }))
        }, this.layouts.set(bW, dF));
        const PF = AF.map((FF => FF.base));
        return {
          program: SF,
          sources: hF,
          layout: dF,
          slotData: AF.map((FF => FF.data)),
          xhF: PF,
          buffers: [],
          offsets: PF,
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

    function ah(FF, WF, SF, CF) {
      const AF = WF.program.program.attributes;
      for (let uF = 0; uF < AF.length; uF++) {
        if ((AF[uF].optional ? null : SF.vertexInput(FF, AF[uF].name, CF)) !== WF.sources[uF]) return !1
      }
      return !0
    }
    const kh = 64;
    class qh {
      constructor(FF, WF, SF, CF) {
        this.device = FF, this.layout = WF, this.frameBuffer = SF, this.label = CF, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(FF) {
        if (FF * kh <= this.data.length) return !1;
        let WF = 2 * this.data.length;
        for (; FF * kh > WF;) WF *= 2;
        const SF = new Float32Array(WF);
        return SF.set(this.data), this.data = SF, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AF = this.data,
          uF = FF * kh;
        let hF = AF[uF + 16] !== SF;
        for (let bW = 0; bW < 16 && !hF; bW++) hF = AF[uF + bW] !== WF[CF + bW];
        if (hF) {
          for (let FF = 0; FF < 16; FF++) AF[uF + FF] = WF[CF + FF];
          AF[uF + 16] = SF
        }
        return hF
      }
      upload(FF, WF) {
        this.device.queue.writeBuffer(this.buffer, FF * yA, this.data, FF * kh, (WF - FF) * kh)
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

    function Vu(FF) {
      return FF.gpu[OF.f.lite] ??= FF.materials.map(((WF, SF) => ({
        parts: FF,
        range: SF,
        owner: FF.owner
      })))
    }

    function Nu(FF) {
      var WF, SF, CF;
      return null !== (WF = null !== (SF = null === (CF = FF.parts.materials[FF.range]) || void 0 === CF ? void 0 : CF.mirror) && void 0 !== SF ? SF : FF.owner.material) && void 0 !== WF ? WF : null
    }
    const Du = ["opaque", "alphaTest", "transparent", "text"];
    class Lu {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, PW.e)("Lite: ")
      }
      attach(FF, WF) {
        this.model = FF, this.mirror = WF
      }
      get worlds() {
        return this.model.nodes.uW
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(FF) {
        return this.groups.get(FF)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(FF) {
        for (const [WF, SF] of this.groups)
          for (const CF of Du)
            for (const AF of SF[CF].units) FF(AF.owner, "text" === CF ? "transparent" : CF, WF)
      }
      select(FF, WF) {
        this.frame++, this.selectedCount = 0;
        for (const bW of this.groups.values())
          for (const FF of Du) bW[FF].units.length = 0, bW[FF].rows.length = 0;
        const {
          model: SF,
          mirror: CF
        } = this;
        if (!SF || !CF || !FF) return;
        this.rows.length < SF.nodes.ZF && (this.rows = new Int32Array(SF.nodes.ZF));
        const AF = this.rows,
          uF = SF.meshes;
        for (let bW = 0; bW < uF.looseCount; bW++) {
          const FF = uF.loose[bW],
            SF = CF.nodes[FF];
          SF && !SF.isBlocked && SF.isEnabled() && !SF.Ah.hasAZeroComponent && uF.selects(FF, WF.frustum) && (this.activate(SF, FF), this.selectedCount++)
        }
        const hF = uF.selectTextPlanes(WF.frustum, AF);
        for (let bW = 0; bW < hF; bW++) {
          const WF = AF[bW],
            uF = CF.nodes[WF],
            hF = SF.meshes.parts[WF];
          if (!uF.isVisible || !(uF.visibility > 0) || 0 === (uF.layerMask & FF.layerMask) || !hF) continue;
          const dF = this.groupOf(SF.meshes.layer[WF]).text;
          for (const FF of Vu(hF)) dF.units.push(FF), dF.rows.push(WF);
          this.selectedCount++
        }
      }
      instanceBatch(FF) {
        const WF = this.batchOf(FF);
        return WF.dispatched || (WF.dispatched = WF.renderSelf = !0, WF.row = this.rowOf(FF)), WF
      }
      rowOf(FF) {
        return FF.row
      }
      activate(FF, WF) {
        if (!FF.ZWF) {
          const SF = FF;
          if (SF.RRF) {
            const FF = this.batchOf(SF);
            FF.dispatched = !0, FF.renderSelf = !0, FF.row = WF
          }
          return void this.dispatch(SF, WF, WF)
        }
        const SF = FF,
          CF = SF.iiF;
        if (CF._getWorldMatrixDeterminant() >= 0 !== SF._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${CF.name}`, `A mirrored InstancedMesh of ${CF.name} is not drawn yet`);
        const AF = this.batchOf(CF);
        AF.instances.push(SF), AF.rows.push(WF), AF.dispatched || (AF.dispatched = !0, this.dispatch(CF, WF, this.rowOf(CF)))
      }
      batchOf(FF) {
        let WF = this.batches.get(FF);
        return WF || (WF = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(FF, WF)), WF.frame !== this.frame && (WF.frame = this.frame, WF.dispatched = !1, WF.renderSelf = !1, WF.instances.length = 0, WF.rows.length = 0), WF
      }
      dispatch(FF, WF, SF) {
        const {
          layer: CF,
          parts: AF
        } = this.model.meshes;
        if (!AF[WF]) return;
        const uF = this.groupOf(CF[WF]),
          hF = FF;
        for (const bW of Vu(AF[WF])) {
          const FF = Nu(bW);
          if (!FF) continue;
          const WF = FF.needAlphaBlendingForMesh(hF) ? uF.transparent : FF.needAlphaTestingForMesh(hF) ? uF.alphaTest : uF.opaque;
          WF.units.push(bW), WF.rows.push(SF)
        }
      }
      groupOf(FF) {
        let WF = this.groups.get(FF);
        return WF || (WF = {
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
        }, this.groups.set(FF, WF)), WF
      }
    }
    class mh {
      constructor() {
        this.yS = new Map, this.enabled = [], this.groups = new Map, this.kept = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(FF) {
        if (this.yS.has(FF)) return;
        const WF = {
          mesh: FF,
          observer: FF.onEffectiveEnabledStateChangedObservable.add((FF => {
            this.MWF(WF, FF)
          })),
          index: -1,
          steady: null
        };
        this.yS.set(FF, WF), this.MWF(WF, FF.isEnabled())
      }
      remove(FF) {
        const WF = this.yS.get(FF);
        WF && (WF.observer.remove(!0), this.MWF(WF, !1), this.yS.delete(FF))
      }
      base(FF) {
        return this.yS.get(FF)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          yS: this.yS.size
        }
      }
      forEachSelected(FF) {
        for (const [WF, SF] of this.groups) {
          for (const CF of SF.opaque) FF(CF.owner, "opaque", WF);
          for (const CF of SF.transparent) FF(CF.owner, "transparent", WF)
        }
        for (const WF of this.kept) FF(WF.mesh, "opaque", 0)
      }
      group(FF) {
        return this.groups.get(FF)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(FF, WF) {
        this.drawn = 0, this.selected = 0, this.kept.length = 0;
        for (const CF of this.groups.values()) CF.opaque.length = 0, CF.transparent.length = 0;
        if (!FF) return;
        const SF = this.enabled;
        for (let CF = 0; CF < SF.length; CF++) {
          const AF = SF[CF];
          if (AF.steady && WF(AF, FF)) {
            this.selected++, this.kept.push(AF);
            continue
          }
          const uF = AF.mesh;
          if (uF.isBlocked || uF.Ah.hasAZeroComponent) continue;
          if (!uF.isVisible || uF.visibility <= 0 || 0 === (uF.layerMask & FF.layerMask)) continue;
          if (uF.RRF) {
            this.warned.has(uF.name) || (this.warned.add(uF.name), console.warn(`Lite: thin instance base ${uF.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: hF
          } = uF;
          if (!hF) continue;
          uF.computeWorldMatrix(), this.selected++;
          const bW = this.listsFor(uF.renderingGroupId);
          for (const FF of Vu(hF)) {
            const WF = Nu(FF);
            WF && (WF.needAlphaBlendingForMesh(uF) ? bW.transparent.push(FF) : bW.opaque.push(FF))
          }
        }
      }
      MWF(FF, WF) {
        if (WF === FF.index >= 0) return;
        FF.steady = null;
        const SF = this.enabled;
        if (WF) FF.index = SF.length, SF.push(FF);
        else {
          const WF = SF.pop();
          WF !== FF && (SF[FF.index] = WF, WF.index = FF.index), FF.index = -1
        }
      }
      listsFor(FF) {
        let WF = this.groups.get(FF);
        return WF || (WF = {
          opaque: [],
          transparent: []
        }, this.groups.set(FF, WF)), WF
      }
    }
    var Ou = SF(37705);
    class xh {
      constructor() {
        this.bundle = null, this.stale = !0, this.yS = new Set
      }
    }
    class Zu {
      constructor(FF, WF, SF) {
        this.device = FF, this.slots = WF, this.host = SF, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new xh, this.EWF = new xh, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new UA, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(FF) {
          var WF, SF;
          let CF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (WF = null === (SF = globalThis.navigator) || void 0 === SF ? void 0 : SF.userAgent) && void 0 !== WF ? WF : "";
          const AF = FF.adapterInfo;
          return "intel" === (null === AF || void 0 === AF ? void 0 : AF.vendor) && "gen-12lp" === AF.architecture && CF.includes("Windows")
        }(FF), (0, Ou.K)(this.direct)
      }
      HL() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Ou.K)(this.directThisFrame)
      }
      add(FF, WF, SF, CF) {
        let AF = this.records.get(FF);
        return AF || (AF = this.createRecord(FF), this.records.set(FF, AF)), AF.recorded && Yu(AF, WF) || (this.bundleOf(AF).stale = !0), this.place(AF, WF, SF, CF), AF
      }
      bundleOf(FF) {
        return FF.EWF ? this.EWF : this.main
      }
      addAgain(FF, WF, SF, CF) {
        FF.recorded || (this.bundleOf(FF).stale = !0), this.place(FF, WF, SF, CF)
      }
      place(FF, WF, SF, CF) {
        FF.seen = this.frame, FF.EWF && null === FF.draw && (this.EWF.stale = !0), FF.draw = WF, this.drawn++, SF && this.slots.write(FF.slot, SF, CF) && (this.slotsFrom = Math.min(this.slotsFrom, FF.slot), this.slotsTo = Math.max(this.slotsTo, FF.slot));
        const AF = this.args,
          uF = 5 * FF.slot;
        AF[uF] === WF.count && AF[uF + 1] === WF.instances && AF[uF + 2] === WF.first || (AF[uF] = WF.count, AF[uF + 1] = WF.instances, AF[uF + 2] = WF.first, this.argsDirty = !0, this.EWF.stale ||= FF.EWF)
      }
      wL() {
        for (const FF of this.records.values()) FF.seen !== this.frame && (FF.draw && (FF.draw = null, this.args[5 * FF.slot + 1] = 0, this.argsDirty = !0, this.EWF.stale ||= FF.EWF), this.frame - FF.seen > 120 && (this.records.delete(FF.unit), this.freeSlots.push(FF.slot), FF.recorded && (this.bundleOf(FF).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(FF) {
        for (const WF of this.records.values()) WF.draw && WF.seen === this.frame && !WF.EWF && FF(WF.draw, this.slots.data, WF.slot * yA / 4)
      }
      resourceDestroyed(FF) {
        this.main.stale ||= this.main.yS.has(FF), this.EWF.stale ||= this.EWF.yS.has(FF)
      }
      execute(FF, WF, SF) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(FF, WF, SF, "direct"), this.drawn;
        const CF = this.host.sceneGroup(WF);
        if (!CF) return this.main.bundle = null, this.EWF.bundle = null, this.recordedSceneGroup = null, this.encode(FF, WF, SF, "direct"), this.drawn;
        this.recordedTarget === SF && this.recordedSceneGroup === CF || (this.recordedTarget = SF, this.recordedSceneGroup = CF, this.main.stale = !0, this.EWF.stale = !0);
        const AF = this.main,
          uF = this.EWF;
        let hF = !1;
        !AF.stale && AF.bundle || (AF.bundle = this.record(WF, SF, CF, "indirect"), hF = !0);
        const bW = (0, Ou.o)();
        return (uF.stale || this.rangedEpoch !== bW) && (this.rangedEpoch = bW, uF.bundle = this.drawsRanged() ? this.record(WF, SF, CF, "EWF") : this.noRangedBundle(), hF = !0), hF && (this.bundles = uF.bundle ? [AF.bundle, uF.bundle] : [AF.bundle]), FF.executeBundles(this.bundles), FF.setBindGroup(0, CF), this.drawn
      }
      record(FF, WF, SF, CF) {
        const AF = this.device.createRenderBundleEncoder({
          label: "EWF" === CF ? "thin-bases-ranged" : "thin-bases",
          colorFormats: FF._colorFormat ? [FF._colorFormat] : [],
          depthStencilFormat: FF._depthStencilFormat,
          sampleCount: FF._sampleCount
        });
        return AF.setBindGroup(0, SF), this.encode(AF, FF, WF, CF), AF.finish()
      }
      noRangedBundle() {
        for (const FF of this.records.values()) FF.EWF && (FF.recorded = !1);
        return this.EWF.yS.clear(), this.EWF.stale = !1, null
      }
      drawsRanged() {
        for (const FF of this.records.values())
          if (FF.EWF && FF.draw) return !0;
        return !1
      }
      encode(FF, WF, SF, CF) {
        const AF = [];
        for (const dF of this.records.values()) "direct" !== CF && dF.EWF !== ("EWF" === CF) || (dF.recorded = !1, dF.draw && AF.push(dF));
        AF.sort(Mu);
        const uF = "direct" === CF ? null : "EWF" === CF ? this.EWF : this.main;
        null === uF || void 0 === uF || uF.yS.clear(), this.binder.reset();
        let hF = !1;
        for (const dF of AF) {
          var bW;
          const AF = dF.draw,
            PF = this.host.pipelineFor(AF, WF, SF);
          if (!PF) {
            this.host.pipelineCompiling(AF, SF) ? hF = !0 : uF && this.keep(dF, AF, uF.yS);
            continue
          }
          let RF;
          if (dF.EWF && "indirect" !== CF) {
            const FF = dF.unit.owner;
            RF = "direct" === CF && (0, Ou.x)(FF) || (0, Ou.r)(FF) || void 0
          }
          if (uF && this.keep(dF, AF, uF.yS), 0 === (null === (bW = RF) || void 0 === bW ? void 0 : bW.count)) continue;
          this.binder.bind(FF, AF, PF, this.slots.bindGroup, dF.slot * yA);
          const iW = 5 * dF.slot;
          if ("indirect" === CF) {
            AF.indexBuffer ? FF.drawIndexedIndirect(this.argsBuffer, 4 * iW) : FF.drawIndirect(this.argsBuffer, 4 * iW);
            continue
          }
          const eF = this.args;
          RF ? ou(FF, null !== AF.indexBuffer, eF, iW, RF) : AF.indexBuffer ? FF.drawIndexed(eF[iW], eF[iW + 1], eF[iW + 2], 0, 0) : FF.draw(eF[iW], eF[iW + 1], eF[iW + 2], 0)
        }
        uF && (uF.stale = hF)
      }
      keep(FF, WF, SF) {
        FF.recorded = !0, FF.pipelineKey = WF.pipelineKey, FF.materialGroup = WF.material.bindGroup, FF.vertexBuffers.length = 0, FF.vertexBuffers.push(...WF.vertexBuffers), FF.vertexOffsets = WF.vertexOffsets, FF.indexBuffer = WF.indexBuffer, FF.indexFormat = WF.indexFormat;
        for (const CF of WF.vertexBuffers) SF.add(CF);
        WF.indexBuffer && SF.add(WF.indexBuffer), SF.add(WF.material.buffer);
        for (const CF of WF.material.bound) CF && SF.add(CF)
      }
      createRecord(FF) {
        let WF = this.freeSlots.pop();
        return void 0 === WF && (WF = this.slotCount++, this.grow()), {
          unit: FF,
          slot: WF,
          EWF: void 0 !== (0, Ou.r)(FF.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.EWF.stale = !0), 5 * this.slotCount > this.args.length) {
          const FF = new Uint32Array(2 * this.args.length);
          FF.set(this.args), this.args = FF, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function ou(FF, WF, SF, CF, AF) {
      const uF = SF[CF + 1],
        hF = AF.data;
      for (let bW = 0; bW < AF.count; bW++) {
        const AF = Math.min(hF[2 * bW], uF),
          dF = Math.min(hF[2 * bW + 1], uF - AF);
        0 !== dF && (WF ? FF.drawIndexed(SF[CF], dF, SF[CF + 2], 0, AF) : FF.draw(SF[CF], dF, SF[CF + 2], AF))
      }
    }

    function Yu(FF, WF) {
      if (FF.pipelineKey !== WF.pipelineKey || FF.materialGroup !== WF.material.bindGroup || FF.indexBuffer !== WF.indexBuffer || FF.indexFormat !== WF.indexFormat || FF.vertexOffsets !== WF.vertexOffsets || FF.vertexBuffers.length !== WF.vertexBuffers.length) return !1;
      for (let SF = 0; SF < FF.vertexBuffers.length; SF++)
        if (FF.vertexBuffers[SF] !== WF.vertexBuffers[SF]) return !1;
      return !0
    }

    function Mu(FF, WF) {
      return ju(FF.draw, WF.draw)
    }
    const ch = new WeakMap,
      Gu = {
        depth: !1,
        sunShadow: !1
      };

    function zh(FF, WF) {
      let SF = ch.get(FF);
      SF || (SF = new Map, ch.set(FF, SF));
      const CF = `${WF.depth?"-depth":""}${WF.sunShadow?"-shadow":""}${WF.shadowMask?"-mask":""}`;
      let AF = SF.get(CF);
      if (!AF) {
        const uF = [{
          binding: mS.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: mS.i
          }
        }, {
          binding: mS.t,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        WF.depth && uF.push({
          binding: mS.p,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), WF.sunShadow && uF.push(... function() {
          const FF = GPUShaderStage.FRAGMENT,
            WF = mS.q;
          return [{
            binding: WF.uniform,
            visibility: FF,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: WF.MW,
            visibility: FF,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: WF.special,
            visibility: FF,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: WF.volume,
            visibility: FF,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: WF.sampler,
            visibility: FF,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: WF.entities,
            visibility: FF,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: WF.entityGrids,
            visibility: FF,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), WF.shadowMask && uF.push({
          binding: mS.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), AF = FF.createBindGroupLayout({
          label: `${WF.depth?"terrain-":""}shader-pack-inputs${CF}`,
          entries: uF
        }), SF.set(CF, AF)
      }
      return AF
    }

    function Iu(FF) {
      return zh(FF, Gu)
    }

    function fu(FF, WF) {
      if (!WF) return !1;
      const SF = (0, OW.e)(FF);
      return !!SF && GS(SF, WF)
    }

    function yh(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!bA(WF)) return [];
      return [zh(FF, {
        depth: SC(WF.packVariant),
        sunShadow: fu(WF.packVariant, SF),
        shadowMask: CF
      })]
    }
    class su {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = FF, this.sunShadow = SF, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(mS.i), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = FF.createBuffer({
          label: "shader-pack-inputs",
          size: mS.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const CF = (0, mS.v)(WF);
        this.textures = FF.createBuffer({
          label: "shader-pack-textures",
          size: CF.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), FF.queue.writeBuffer(this.textures, 0, CF), this.bindGroup = FF.createBindGroup({
          label: "shader-pack-inputs",
          layout: Iu(FF),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: mS.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: mS.t,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(FF, WF, SF) {
        (0, mS.y)(this.data, {
          seconds: FF.seconds(),
          lit: SF,
          renderOffset: FF.renderOffset(),
          ehF: FF.ehF(),
          eyePosition: WF,
          shadowDirection: FF.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const CF = WF ? this.sunShadow : null;
        if ((WF || SF) && !CF) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!FF && !CF) return this.bindGroup;
        (FF && FF !== this.depthView || SF && SF !== this.maskView) && (this.depthView = null !== FF && void 0 !== FF ? FF : this.depthView, this.maskView = null !== SF && void 0 !== SF ? SF : this.maskView, this.groups.clear());
        const AF = (FF ? 1 : 0) | (CF ? 2 : 0) | (SF ? 4 : 0);
        let uF = this.groups.get(AF);
        if (!uF) {
          const WF = this.entries();
          FF && WF.push({
            binding: mS.p,
            resource: FF
          }), CF && WF.push(...CF.entries()), SF && WF.push({
            binding: mS.r,
            resource: SF
          }), uF = this.device.createBindGroup({
            label: `${FF||SF?"terrain-":""}shader-pack-inputs${FF?"-depth":""}${CF?"-shadow":""}${SF?"-mask":""}`,
            layout: zh(this.device, {
              depth: !!FF,
              sunShadow: !!CF,
              shadowMask: !!SF
            }),
            entries: WF
          }), this.groups.set(AF, uF)
        }
        return uF
      }
      bind(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        FF.setBindGroup(mS.f, this.bindGroupFor(WF, SF, CF))
      }
    }

    function nu(FF, WF, SF) {
      if (FF.gpuVersion === WF.gpuBuffersVersion) return !0;
      let CF;
      do {
        if (CF = WF.gpuBuffersVersion, !Hu(FF, WF, SF)) return !1
      } while (WF.gpuBuffersVersion !== CF);
      return FF.gpuVersion = CF, FF.fitInstances = 0, !0
    }

    function Hu(FF, WF, SF) {
      let CF = null;
      for (let uF = 0; uF < FF.slotData.length; uF++) {
        var AF;
        const hF = FF.slotData[uF],
          bW = hF ? WF.gpuBuffer(hF) : SF;
        if (!bW) return !1;
        hF && FF.layout.instanceEnds[uF] < 0 && WF.cover(hF, Number.POSITIVE_INFINITY), FF.buffers[uF] = bW;
        const dF = FF.xhF[uF] + (hF ? WF.gpuOffset(hF) : 0);
        dF !== (null !== (AF = CF) && void 0 !== AF ? AF : FF.offsets)[uF] && (CF ??= FF.offsets.slice(), CF[uF] = dF), FF.ends[uF] = hF ? WF.gpuEnd(hF) : bW.size
      }
      return CF && (FF.offsets = CF), !0
    }

    function Ku(FF, WF, SF, CF) {
      if (WF <= FF.fitInstances) return null;
      const {
        layout: AF,
        ends: uF,
        offsets: hF,
        slotData: bW,
        xhF: dF
      } = FF;
      let PF = !1;
      for (let RF = 0; RF < AF.buffers.length; RF++) {
        const FF = AF.instanceEnds[RF];
        if (FF < 0) continue;
        const CF = (WF - 1) * AF.buffers[RF].arrayStride + FF;
        if (uF[RF] - hF[RF] < CF) return {
          index: RF,
          needed: CF
        };
        const iW = bW[RF];
        iW && SF.cover(iW, dF[RF] + CF) && (PF = !0)
      }
      return PF && nu(FF, SF, CF), FF.fitInstances = WF, null
    }
    var wu = SF(36252);
    const Xu = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Uu = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Bu = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      jh = `((vertexInputs.aPackedLightLevels >> 16u) | ${dW.e.placed}u)`,
      vh = "u32(vertexInputs.aShaderPackItem.x)",
      Ju = `${dW.e.lifeform}u`;

    function pu(FF) {
      return "item" === FF.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const lu = "bloxdSpEnchant",
      Fh = "floor(finalWorld[3].xyz)";

    function Wh(FF, WF, SF) {
      return "placed" === WF.kind && FF.reads[SF].includes("bloxdFragmentBlockPosition")
    }

    function Sh(FF, WF) {
      let [SF, CF] = FF;
      return SF === WF.point && CF === WF.code
    }

    function Ch(FF, WF) {
      var SF, CF, AF;
      const uF = null === (SF = FF.find((FF => FF.texture))) || void 0 === SF ? void 0 : SF.texture,
        hF = null === (CF = FF.find((FF => FF.enchantTier))) || void 0 === CF ? void 0 : CF.enchantTier,
        bW = null === (AF = FF.find((FF => FF.overlay))) || void 0 === AF ? void 0 : AF.overlay,
        dF = bW ? WF.filter((FF => Sh(FF, bW))).length : 0;
      return bW && 1 === dF ? {
        texture: uF,
        overlay: bW,
        enchantTier: hF
      } : {
        texture: uF,
        enchantTier: hF
      }
    }

    function Ah(FF) {
      if ("item" === FF.kind) {
        return {
          vertexFlags: `(${vh} & 0xffffu)`,
          varying: "vPackItem",
          value: vh,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return FF.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: jh,
        varying: "vPackFlags",
        value: jh,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function uh(FF) {
      return "lifeform" === FF.kind ? Ju : "0u"
    }

    function hh(FF) {
      return !!FF.BLOXD_PLUGIN_ENCHANTMENT
    }

    function bb(FF, WF) {
      const {
        enchantTier: SF
      } = WF;
      return SF && hh(WF.defines) && "lifeform" === WF.kind && Rh(FF, "enchantTier") ? SF : null
    }

    function dh(FF, WF) {
      return hh(WF.defines) && Rh(FF, "enchantSpeed")
    }

    function Ph(FF) {
      const {
        overlay: WF,
        defines: SF
      } = FF;
      if (!WF || !SF.DIFFUSE) return null;
      const CF = SF.VERTEXCOLOR || SF.INSTANCESCOLOR && SF.INSTANCES;
      return `vec4f(${WF.colour}.rgb * uniforms.vDiffuseInfos.y${CF?" * fragmentInputs.vColor.rgb":""}, ${WF.colour}.a)`
    }

    function Rh(FF, WF) {
      return FF.reads.fragment.includes(WF)
    }

    function ib(FF) {
      return !!FF.BLOXD_LIGHTING && !FF.BLOXD_UNLIT
    }

    function eh(FF, WF, SF, CF) {
      const AF = FF.filter((FF => {
        let [SF, CF] = FF;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === SF && CF === WF
      }));
      if (1 !== AF.length) throw new Error(`A model program for shader packs has ${0===AF.length?"no":"more than one"} ${CF} code before fog (lite/modelShaderPack.ts)`);
      return FF.map((FF => FF === AF[0] ? [FF[0], SF] : FF))
    }

    function Eh(FF, WF, SF, CF) {
      const {
        hooks: AF
      } = FF, {
        kind: uF,
        defines: hF
      } = WF, bW = [...SF];
      WF.atlas && AF.surface && bW.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", nS("atlasIdxIn")]), "item" === uF && bW.push(["CUSTOM_VERTEX_DEFINITIONS", (0, VF.g)(VF.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]);
      const dF = Ah(WF);
      dF && (AF.surface || AF.light) && bW.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${dF.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${dF.varying} = ${dF.value};`]);
      let PF = CF;
      if (Wh(FF, WF, "fragment") && (bW.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Fh});`]), PF = [...PF, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Rh(FF, "localPosition") && bW.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${pu(WF)};`]), hh(hF) && AF.surface) {
        dh(FF, WF) && bW.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const SF = bb(FF, WF);
        SF && bW.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${SF});`]);
        const CF = (0, VF.cb)(VF.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        PF = [...eh(PF, (0, wu.g)(VF.d.WGSL), CF, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, wu.c)(lu)]]
      }
      const {
        overlay: RF
      } = WF;
      RF && Ph(WF) && AF.surface && (PF = PF.filter((FF => !Sh(FF, RF))));
      const iW = AF.light ? function(FF) {
        return "placed" === FF.kind ? {
          name: "terrain",
          engine: (0, NW.O)(VF.d.WGSL),
          pack: (0, NW.kb)(VF.d.WGSL)
        } : FF.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, NW.H)(VF.d.WGSL),
          pack: (0, NW.fb)(VF.d.WGSL)
        } : null
      }(WF) : null;
      if (iW && (PF = eh(PF, iW.engine, iW.pack, `${iW.name} light`), "placed" !== uF && ib(hF))) {
        const FF = hF.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, VF.pb)(VF.d.WGSL, "uEntityLightLevels") : (0, VF.zb)(VF.d.WGSL, "aLightLevels");
        bW.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${NW.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, NW.gb)(VF.d.WGSL, FF)])
      }
      return {
        vertexCode: bW,
        fragmentCode: PF
      }
    }

    function Qh(FF, WF, SF, CF) {
      return MS(FF, WF, SF, CF, "model")
    }
    const rb = "\t@builtin(position) position: vec4f,\n";

    function gb(FF, WF) {
      const SF = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(FF)[0];
      return `${SF}${WF}${FF.slice(SF.length)}`
    }

    function tb(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: AF
      } = WF, uF = GS(WF, CF), {
        kind: hF,
        defines: bW
      } = SF, dF = function(FF, WF) {
        var SF, CF, AF;
        const {
          defines: uF
        } = WF, hF = Ah(WF), bW = !!uF.FOG, dF = hh(uF), PF = null !== (SF = null === hF || void 0 === hF ? void 0 : hF.enchantTier) && void 0 !== SF ? SF : bb(FF, WF) ? "fragmentInputs.vPackEnchantTier" : "0u", RF = "lifeform" === WF.kind && !uF.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (CF = null === hF || void 0 === hF ? void 0 : hF.vertexFlags) && void 0 !== CF ? CF : uh(WF),
          vertexLocalPosition: pu(WF),
          flags: null !== (AF = null === hF || void 0 === hF ? void 0 : hF.flags) && void 0 !== AF ? AF : uh(WF),
          normal: "normalW",
          alpha: RF ? "alpha * baseColor.a" : "alpha",
          alphaOut: RF ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: bW ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: bW ? "1.0 - fog" : "0.0",
          enchantTier: PF,
          enchantColour: dF ? `${lu}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: dh(FF, WF) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Rh(FF, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Ph(WF)
        }
      }(WF, SF), PF = FF.textures.filter((FF => /^textureAtlas\d+$/.test(FF.name))).length, RF = SF.atlas && PF > 0 ? {
        count: PF,
        layers: SF.atlas.layers,
        width: SF.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: FF.material.slots.has("uAnimDataPerTex") ? (WF, SF) => DC(WF, SF, function(FF) {
          const WF = FF.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            lF: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: FF => `uniforms.uAnimDataPerTex[${FF}]${WF}`
          }
        }(FF)) : null
      } : null, iW = "placed" === hF ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", eF = null !== RF && void 0 !== RF ? RF : function(FF) {
        const {
          atlas: WF,
          defines: SF,
          texture: CF
        } = FF;
        return WF || !SF.DIFFUSE ? null : CF ? {
          texture: "diffuseSampler",
          ...CF
        } : {
          texture: "diffuseSampler",
          cells: null,
          layers: [],
          uv: "fragmentInputs." + (1 === SF.DIFFUSEDIRECTUV ? "vMainUV1" : 2 === SF.DIFFUSEDIRECTUV ? "vMainUV2" : "vDiffuseUV")
        }
      }(SF), EF = (FF, SF) => `${(0,mS.w)()}${IS(WF,SF)}${KS(FF)}${ZS}${iW}${WF.code}`;
      let {
        vertex: QF,
        fragment: rW
      } = FF;
      const gW = XS(AF, dF);
      if (gW) {
        const FF = Wh(WF, SF, "vertex") ? `\tbloxdSpCell = ${Fh};\n` : "";
        QF = Qh(QF, Xu, `${FF}${gW.slice(1)}${Xu}`, "vertex")
      }
      const tW = `${fS(WF,uF,function(FF,WF){return WF.TWOSIDEDLIGHTING?FF:`select(-(${FF}), ${FF}, fragmentInputs.frontFacing)`}(dF.normal,bW),dF.flags)}${US(AF,WF.strict,WF.program,eF,dF)}`;
      tW && (rW = Qh(rW, Uu, `${tW.slice(1)}${Uu}`, "surface")), uF && WF.sunShadow && !bW.TWOSIDEDLIGHTING && (rW = Qh(rW, rb, `${rb}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const TF = vC(AF);
      if (TF) {
        const FF = jC(AF, ib(bW), !0, dF);
        rW = Qh(rW, Bu, `${FF}${TF.slice(1)}${Bu}`, "light")
      }
      return {
        ...FF,
        vertex: gb(QF, EF(RF, !1)),
        fragment: gb(rW, EF(eF, uF))
      }
    }
    const Th = {
      name: "earthSky",
      uniqueId: -1
    };
    class ab {
      constructor(FF) {
        this.resources = FF, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const FF of this.instances.values()) FF.released = !0, this.resources.destroyBuffer(FF.buffer);
        this.instances.clear()
      }
    }

    function kb(FF) {
      return FF.failed && null !== FF.packGroup
    }
    class qb {
      constructor(FF, WF, SF) {
        this.device = FF, this.resources = WF, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.LuF = new mh, this.modelMeshes = new Lu, this.thinBundle = void 0, this.binder = new UA, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new Qu((FF => this.modelSlot(FF).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, PW.e)("Lite: "), this.renderStates = new Pu(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (FF, WF) => this.keepSteady(FF, WF), this.lists = new BA(this.modelMeshes, this.LuF, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new uu(WF, this.warnOnce, ((FF, WF, SF) => this.programWithModel(FF, WF, SF)), kb), this.vertexLayouts = new Tu(WF, FF.limits, this.warnOnce), this.sceneLayout = WW(FF), this.frameLayout = FF.createBindGroupLayout({
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
        }), this.frameBuffer = FF.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new qh(FF, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = FF.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Zu(FF, new qh(FF, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (FF, WF, SF) => this.pipelineFor(FF, WF, SF),
          pipelineCompiling: (FF, WF) => !FF.program.failed && !1 !== this.pipelines.get(`${FF.pipelineKey}|${WF}`),
          sceneGroup: FF => {
            const WF = SF(FF);
            return WF || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), WF
          }
        }), WF.onDestroy = FF => {
          this.thinBundle.resourceDestroyed(FF)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const AF = {
          order: FF,
          isTransparent: WF,
          _direct: !WF,
          bind: (FF, WF) => this.createBinding(AF, WF, SF, CF)
        };
        return AF
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(FF, WF, SF) {
        var CF;
        let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = WF, this.drawDefines.view = WF, this.thinBundle.HL(), this.writeFrameUniforms();
        const uF = null !== (CF = null === AF || void 0 === AF ? void 0 : AF.defineFor("model")) && void 0 !== CF ? CF : 0;
        this.drawDefines.modelPackVariant = uF, AF && 0 !== uF && (this.packInputs ??= new su(this.device, AF.textureLayers(), this.sunShadow), this.packInputs.write(AF, WF.eye, AF.KA())), this.lists.clear(), this.slotCount = 0;
        const hF = FF.activeCamera;
        this.LuF.select(hF, this.keepSteadyBase), this.modelMeshes.select(hF, WF), SF && this.pushEarthSky(SF), this.lists.collect(FF), this.thinBundle.wL(), this.uploadMeshSlots()
      }
      pushDraws(FF, WF, SF, CF, AF, uF) {
        let hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const bW = uF.length;
        for (let dF = 0; dF < SF; dF++) {
          const SF = WF[dF];
          let bW = this.retainedDraw(FF, SF, CF, AF);
          if (void 0 === bW && (bW = this.drawFor(FF, SF, CF, AF), this.retain(SF, bW)), bW) {
            const FF = SF.owner,
              WF = hF ? hF[dF] : -1;
            bW.slotOffset = WF < 0 ? this.writeMeshSlot(FF.getWorldMatrix().m, FF.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[WF], 16 * WF), uF.push(bW)
          }
        }
        return uF.length - bW
      }
      bundleDraws(FF, WF, SF) {
        let CF = 0;
        for (const AF of WF) {
          let WF = this.retainedDraw(FF, AF, SF, !1);
          const uF = void 0 !== WF;
          if (void 0 === WF && (WF = this.drawFor(FF, AF, SF, !1), this.retain(AF, WF)), WF) {
            const FF = AF.owner,
              SF = this.thinBundle.add(AF, WF, FF.getWorldMatrix().m, FF.visibility);
            uF && this.steadyFrom(AF, WF, SF), CF++
          }
        }
        return CF
      }
      steadyFrom(FF, WF, SF) {
        const CF = FF.owner,
          AF = this.LuF.base(CF),
          uF = CF.material,
          {
            drawState: hF,
            instance: bW
          } = WF.inputs.retained;
        if (!AF || !uF || 1 !== FF.parts.materials.length || Nu(FF) !== uF) return;
        const dF = AF.steady ??= {
          unit: FF,
          material: uF,
          visibility: 1,
          draw: WF,
          record: SF,
          drawState: hF,
          instance: bW,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        dF.unit = FF, dF.material = uF, dF.visibility = CF.visibility, dF.draw = WF, dF.record = SF, dF.drawState = hF, dF.instance = bW, dF.bindGroup = bW.bindGroup, dF.gpuVersion = this.resources.gpuBuffersVersion, dF.fitInstances = WF.inputs.fitInstances, dF.worldFlag = CF.getWorldMatrix().updateFlag, dF.handedFrame = this.frame
      }
      keepSteady(FF, WF) {
        const SF = FF.steady;
        if (SF.handedFrame !== this.frame - 1 || (this.frame + SF.phase) % 8 === 0) return !1;
        const CF = FF.mesh,
          {
            unit: AF,
            draw: uF,
            instance: hF,
            drawState: bW
          } = SF,
          dF = CF.forcedInstanceCount || CF.YuF;
        if (!CF.isVisible || CF.RRF || CF.visibility !== SF.visibility || 0 === (CF.layerMask & WF.layerMask) || CF.material !== SF.material || 0 !== CF.renderingGroupId || CF.hasVertexAlpha || !this.drawDefines.definesHold(bW, AF, bW.instancing) || SF.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(uF.inputs, AF, bW.instancing, uF.program) || uF.program.failed || hF.released || dF <= 0 || dF > SF.fitInstances) return !1;
        if (hF.frame !== this.frame && this.bindMaterial(hF, this.modelUniforms.refreshModelUniforms(CF.OWF(), hF, hF.model, this.view)), !hF.bindable || hF.bindGroup !== SF.bindGroup) return !1;
        const PF = CF.computeWorldMatrix(),
          RF = PF.updateFlag !== SF.worldFlag;
        return SF.worldFlag = PF.updateFlag, uF.instances = dF, this.thinBundle.addAgain(SF.record, uF, RF ? PF.m : null, SF.visibility), SF.handedFrame = this.frame, this.LuF.drawn++, !0
      }
      retainedDraw(FF, WF, SF, CF) {
        const AF = this.inputs.get(WF),
          uF = null === AF || void 0 === AF ? void 0 : AF.retained;
        if (!AF || !uF) return;
        const {
          drawState: hF,
          program: bW,
          instance: dF,
          instancing: PF
        } = uF, RF = WF.owner;
        if (lA(RF) !== PF) return;
        const iW = this.instanceCount(RF, PF);
        if (iW <= 0) return null;
        if (dF.released || bW.failed || hF.program !== bW || !this.drawDefines.programCurrent(hF, WF, PF, SF) || !this.inputsStamped(AF, WF, PF, bW) || RF.isUnIndexed !== uF.unIndexed || this.indexKey(WF) !== uF.indexData) return;
        if (uF.indexBuffer && uF.gpuVersion !== this.resources.gpuBuffersVersion) {
          const FF = this.resources.gpuBuffer(uF.indexData);
          if (!FF) return;
          uF.indexBuffer = FF, uF.gpuVersion = this.resources.gpuBuffersVersion
        }
        let eF = !1;
        if (dF.frame !== this.frame && (eF = this.modelUniforms.refreshModelUniforms(FF, dF, dF.model, this.view)), !this.bindMaterial(dF, eF) || !this.withGpuBuffers(AF) || !this.instanceBuffersFit(RF.name, AF, iW)) return null;
        const EF = this.makeDraw(bW, AF, this.renderStates.renderState(hF.model, RF, CF, AF.state), dF, iW);
        return this.setRange(EF, WF, uF.indexBuffer, uF.indexData), EF
      }
      retain(FF, WF) {
        const SF = this.drawDefines.drawStates.get(FF);
        if (!WF || !SF || SF.program !== WF.program) {
          const WF = this.inputs.get(FF);
          return void(WF && (WF.retained = null))
        }
        const CF = FF.owner,
          AF = SF.instancing,
          uF = this.indexKey(FF),
          hF = WF.inputs.retained;
        hF ? (hF.drawState = SF, hF.instancing = AF, hF.program = WF.program, hF.instance = WF.material, hF.indexData = uF, hF.unIndexed = CF.isUnIndexed, hF.indexBuffer = WF.indexBuffer, hF.gpuVersion = this.resources.gpuBuffersVersion) : WF.inputs.retained = {
          drawState: SF,
          instancing: AF,
          program: WF.program,
          instance: WF.material,
          indexData: uF,
          unIndexed: CF.isUnIndexed,
          indexBuffer: WF.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(FF, WF, SF, CF) {
        const AF = WF.owner,
          uF = Nu(WF);
        if (!uF) return null;
        const hF = uF.getClassName();
        let bW = null;
        if (function(FF) {
            return "LinesMesh" === FF.getClassName()
          }(AF)) {
          if (! function(FF) {
              return "ShaderMaterial" === FF.getClassName() && "color" === FF.shaderPath
            }(uF)) return this.warnOnce(`lines:${hF}`, `A LinesMesh with a ${hF} is not drawn yet (${uF.name})`), null;
          bW = AF
        } else if ("StandardMaterial" !== hF && "LiteMaterial" !== hF) return this.warnOnce(`class:${hF}`, `${hF} is not drawn yet (${uF.name})`), null;
        const dF = lA(AF),
          PF = this.instanceCount(AF, dF);
        if (PF <= 0) return null;
        const RF = bW ? this.lineProgramFor(AF, SF, dF) : this.drawDefines.programFor(FF, WF, uF, SF, dF);
        if (!RF || RF.failed) return null;
        const iW = bW ? null : this.drawDefines.drawStates.get(WF).model,
          eF = iW ? this.modelInstance(iW, RF) : this.materialInstance(AF, RF);
        let EF = !1;
        if (eF.frame !== this.frame && (bW ? TF(eF.ubo, bW) : EF = this.modelUniforms.refreshModelUniforms(FF, eF, eF.model, this.view)), !this.bindMaterial(eF, EF)) return null;
        const QF = this.meshInputs(WF, RF, dF);
        if (!QF || !this.instanceBuffersFit(AF.name, QF, PF)) return null;
        const rW = this.indexKey(WF);
        let gW = null;
        if (rW && !AF.isUnIndexed && (gW = this.resources.gpuBuffer(rW), !gW)) return null;
        const tW = this.renderStates.renderState(null !== iW && void 0 !== iW ? iW : uF, AF, CF, QF.state, bW ? "line-list" : "triangle-list"),
          aW = this.makeDraw(RF, QF, tW, eF, PF);
        return this.setRange(aW, WF, gW, rW), aW
      }
      indexKey(FF) {
        const WF = Cu(FF);
        return WF ? this.resources.modelIndex(WF) : null
      }
      setRange(FF, WF, SF, CF) {
        SF && (FF.indexBuffer = SF, FF.indexFormat = this.resources.indexFormat(CF));
        const AF = 4 * WF.range + (SF ? 0 : 2);
        FF.unit = WF, FF.first = WF.parts.Bu[AF], FF.count = WF.parts.Bu[AF + 1]
      }
      makeDraw(FF, WF, SF, CF, AF) {
        WF.state !== SF && (WF.state = SF, WF.pipelineKey = `${FF.id}|${WF.layout.key}|${SF.key}`, WF.pipeline = null);
        const uF = WF.draw ??= {
          program: FF,
          inputs: WF,
          pipelineKey: "",
          layout: WF.layout,
          state: SF,
          material: CF,
          slotOffset: 0,
          vertexBuffers: WF.buffers,
          vertexOffsets: WF.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: AF,
          unit: null
        };
        return uF.program = FF, uF.pipelineKey = WF.pipelineKey, uF.state = SF, uF.material = CF, uF.vertexOffsets = WF.offsets, uF.indexBuffer = null, uF.instances = AF, uF
      }
      instanceCount(FF, WF) {
        switch (WF) {
          case "thin":
            return FF.forcedInstanceCount || FF.YuF;
          case "instanced":
            return this.prepareInstances(FF);
          case "none":
            return 1
        }
      }
      prepareInstances(FF) {
        const WF = function(FF, WF) {
          const SF = WF._userInstancedBuffersStorage,
            CF = FF.batchUploads.get(WF);
          if (CF) {
            var AF;
            if (CF.layout === (null !== (AF = null === SF || void 0 === SF ? void 0 : SF.interleavedKinds) && void 0 !== AF ? AF : null)) return CF;
            CF.release()
          }
          return new XF(FF, WF, SF)
        }(this.resources, FF);
        return WF.frame !== this.frame && WF.pack(FF, this.modelMeshes.instanceBatch(FF), this.modelMeshes.worlds, this.frame), WF.count
      }
      programWithModel(FF, WF, SF) {
        const CF = this.modelSlot(FF),
          AF = hu(CF, FF, SF),
          uF = this.drawDefines.modelPackKind(FF),
          hF = uF ? function(FF, WF, SF, CF) {
            const AF = (0, LF.x)(FF, NF.h.name),
              uF = [];
            for (const {
                feature: dF,
                state: PF,
                active: RF
              }
              of FF.features) {
              var hF, bW;
              const FF = RF ? null === (hF = (bW = (0, RW.l)(dF)).CC) || void 0 === hF ? void 0 : hF.call(bW, PF) : void 0;
              FF && uF.push(FF)
            }
            return {
              kind: WF,
              atlas: null !== AF && void 0 !== AF && AF.active ? (0, NF.d)(AF.state) : null,
              defines: SF,
              ...Ch(uF, CF)
            }
          }(FF, uF, WF, CF.fragmentCode) : null;
        if (hF && function(FF) {
            const WF = FF.defines;
            return (null === FF.atlas || !!WF.DIFFUSE && 1 === WF.DIFFUSEDIRECTUV) && !!WF.NORMAL && !WF.REFLECTION && !WF.EMISSIVEASILLUMINATION && !WF.LINKEMISSIVEWITHDIFFUSE
          }(hF)) {
          const SF = this.modelPackProgram(FF, WF, `${AF}#${uF}#sp${this.drawDefines.modelPackVariant}`, CF, hF);
          if (SF && !SF.failed) return SF
        }
        const bW = this.programs.get(AF);
        if (bW || this.unbuildable.has(AF)) return null !== bW && void 0 !== bW ? bW : null;
        let dF;
        try {
          dF = hA({
            defines: Wu(WF),
            vertexCode: CF.vertexCode,
            fragmentCode: CF.fragmentCode,
            pluginUniforms: CF.pluginUniforms
          })
        } catch (PF) {
          return this.unbuildable.add(AF), this.warnOnce(`build:${AF}`, `could not build a program for ${FF.name}: ${String(PF)}`), null
        }
        return this.createProgram(AF, dF, "standard")
      }
      modelPackProgram(FF, WF, SF, CF, AF) {
        const uF = this.programs.get(SF);
        if (uF || this.unbuildable.has(SF)) return null !== uF && void 0 !== uF ? uF : null;
        const hF = this.drawDefines.modelPackVariant;
        let bW;
        try {
          const FF = function(FF) {
              return (0, OW.c)(FF, "model")
            }(hF),
            SF = Eh(FF, AF, CF.vertexCode, CF.fragmentCode);
          bW = tb(hA({
            defines: Wu(WF),
            ...SF,
            pluginUniforms: CF.pluginUniforms
          }), FF, AF, !!this.sunShadow)
        } catch (RF) {
          return this.unbuildable.add(SF), this.warnOnce(`build:${SF}`, `could not build a shader pack program for ${FF.name}, which draws without the pack: ${String(RF)}`), null
        }
        const dF = fu(hF, !!this.sunShadow),
          PF = {
            group: this.packInputs.bindGroupFor(null, dF),
            layout: zh(this.device, {
              depth: !1,
              sunShadow: dF
            })
          };
        return this.createProgram(SF, bW, function(FF) {
          return `standard-sp${FF}`
        }(hF), PF)
      }
      lineProgramFor(FF, WF, SF) {
        const CF = tW(FF, SF, WF, this.view);
        let AF = this.linePrograms.get(CF);
        var uF;
        return AF || (AF = this.createProgram(`lines#${CF}`, (uF = function(FF) {
          const WF = new Map;
          for (let SF = 0; SF < PF.length; SF++) FF & 1 << SF && WF.set(PF[SF], !0);
          return WF
        }(CF), RA({
          defines: uF,
          vertex: dA,
          fragment: PA,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(CF, AF)), AF
      }
      createProgram(FF, WF, SF) {
        var CF;
        let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const uF = this.nextProgramId++,
          hF = `${SF}-${uF}`,
          bW = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          dF = [{
            binding: 0,
            visibility: bW,
            buffer: {
              type: "uniform"
            }
          }];
        for (const iW of WF.textures) dF.push({
          binding: iW.binding,
          visibility: bW,
          texture: {
            viewDimension: iW.dimension
          }
        }), dF.push({
          binding: iW.samplerBinding,
          visibility: bW,
          sampler: {}
        });
        const PF = this.device.createBindGroupLayout({
            label: hF,
            entries: dF
          }),
          RF = {
            key: FF,
            id: uF,
            kind: SF,
            program: WF,
            vertex: this.device.createShaderModule({
              label: `${hF}-vertex`,
              code: WF.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${hF}-fragment`,
              code: WF.fragment
            }),
            materialLayout: PF,
            pipelineLayout: this.device.createPipelineLayout({
              label: hF,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, PF, ...AF ? [AF.layout] : []]
            }),
            packGroup: null !== (CF = null === AF || void 0 === AF ? void 0 : AF.group) && void 0 !== CF ? CF : null,
            failed: !1
          };
        return this.programs.set(FF, RF), RF
      }
      writeFrameUniforms() {
        const FF = this.frameUniforms;
        Eu(this.view, FF), this.device.queue.writeBuffer(this.frameBuffer, 0, FF)
      }
      materialInstance(FF, WF) {
        let SF = this.materials.get(FF);
        if (!SF) {
          const WF = new Map;
          this.materials.set(FF, WF), FF.xSF.addOnce((() => {
            for (const FF of WF.values()) FF.released = !0, this.resources.destroyBuffer(FF.buffer);
            this.materials.delete(FF)
          })), SF = WF
        }
        let CF = SF.get(WF.key);
        return CF || (CF = this.newMaterialInstance(FF, null, WF), SF.set(WF.key, CF)), CF
      }
      modelInstance(FF, WF) {
        const SF = this.modelSlot(FF);
        let CF = SF.instances.get(WF.key);
        return CF || (CF = this.newMaterialInstance(FF, FF, WF), SF.instances.set(WF.key, CF)), CF
      }
      modelSlot(FF) {
        let WF = FF.gpu[OF.f.lite];
        return WF || (WF = new ab(this.resources), FF.gpu[OF.f.lite] = WF), WF
      }
      newMaterialInstance(FF, WF, SF) {
        const CF = SF.program.material.floats,
          AF = new Float32Array(CF),
          uF = new Map;
        return {
          owner: FF,
          model: WF,
          program: SF,
          data: AF,
          uploaded: new Float32Array(CF).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${FF.name}-uniforms`,
            size: Math.max(16, 4 * CF),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: uF,
          ubo: new eu(SF.program.material.slots, AF, uF),
          bindGroup: null,
          bound: new Array(2 * SF.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(FF) {
        var WF;
        const SF = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: ru + gu,
            fragment: ru + tu,
            attributes: [],
            material: QA,
            textures: []
          }, "earthSky"),
          CF = this.earthSkyUniforms ??= this.newMaterialInstance(Th, null, SF);
        this.earthSkyFrom !== FF && (this.earthSkyFrom = FF, CF.data.fill(0)), LA(CF.ubo, FF, this.view);
        const AF = this.vertexInputs(SF, Th, "earthSky", SF, null);
        if (SF.failed || !AF || !this.bindMaterial(CF, !1)) return;
        const uF = null !== (WF = AF.state) && void 0 !== WF ? WF : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          hF = this.makeDraw(SF, AF, uF, CF, 1);
        hF.count = iu.length;
        const bW = mu(FF, this.view);
        hF.slotOffset = this.writeMeshSlot(bW, 1), this.lists.skyDraws.push(hF)
      }
      uploadIfChanged(FF) {
        const {
          data: WF,
          uploaded: SF
        } = FF;
        for (let CF = 0; CF < WF.length; CF++)
          if (WF[CF] !== SF[CF]) return SF.set(WF), void this.device.queue.writeBuffer(FF.buffer, 0, WF)
      }
      bindMaterial(FF, WF) {
        return FF.frame !== this.frame && (FF.frame = this.frame, WF || this.uploadIfChanged(FF), FF.bindable = this.bindTextures(FF)), FF.bindable
      }
      bindTextures(FF) {
        const {
          program: WF,
          bound: SF
        } = FF, CF = WF.program.textures;
        let AF = !FF.bindGroup,
          uF = !0;
        for (let hF = 0; hF < CF.length; hF++) {
          const WF = FF.textures.get(CF[hF].name),
            bW = WF ? this.resources.boundTexture(WF) : null;
          bW ? SF[2 * hF] === bW.view && SF[2 * hF + 1] === bW.sampler || (SF[2 * hF] = bW.view, SF[2 * hF + 1] = bW.sampler, AF = !0) : (WF || this.warnOnce(`texture:${FF.owner.name}:${CF[hF].name}`, `${FF.owner.name} has no ${CF[hF].name}`), uF = !1)
        }
        if (!uF) return AF && (FF.bindGroup = null), !1;
        if (AF) {
          const AF = [{
            binding: 0,
            resource: {
              buffer: FF.buffer
            }
          }];
          for (let FF = 0; FF < CF.length; FF++) AF.push({
            binding: CF[FF].binding,
            resource: SF[2 * FF]
          }), AF.push({
            binding: CF[FF].samplerBinding,
            resource: SF[2 * FF + 1]
          });
          FF.bindGroup = this.device.createBindGroup({
            label: `${FF.owner.name}-material`,
            layout: WF.materialLayout,
            entries: AF
          })
        }
        return !0
      }
      writeMeshSlot(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, FF, WF, SF), this.slotCount++ * yA
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(FF, WF, SF, CF, AF) {
        let uF = this.inputs.get(FF);
        if (!uF || uF.program !== CF || !ah(WF, uF, this.resources, AF)) {
          var hF;
          if (uF = null !== (hF = this.vertexLayouts.resolveInputs(WF, SF, CF, AF)) && void 0 !== hF ? hF : void 0, !uF) return null;
          this.inputs.set(FF, uF)
        }
        return this.withGpuBuffers(uF)
      }
      meshInputs(FF, WF, SF) {
        const CF = this.inputs.get(FF);
        if (CF && this.inputsStamped(CF, FF, SF, WF)) return this.withGpuBuffers(CF);
        const AF = FF.owner,
          uF = Cu(FF),
          hF = this.vertexInputs(FF, AF, AF.name, WF, uF);
        return hF && (hF.geometry = Au(FF), hF.instanceLayout = this.drawDefines.instanceLayout(AF, SF)), hF
      }
      inputsStamped(FF, WF, SF, CF) {
        return function(FF, WF, SF, CF) {
          return FF.program === SF && FF.geometry === Au(WF) && FF.instanceLayout === CF
        }(FF, WF, CF, this.drawDefines.instanceLayout(WF.owner, SF))
      }
      withGpuBuffers(FF) {
        return nu(FF, this.resources, this.zeroBuffer) ? FF : null
      }
      instanceBuffersFit(FF, WF, SF) {
        const CF = Ku(WF, SF, this.resources, this.zeroBuffer);
        if (CF) {
          const AF = WF.ends[CF.index] - WF.offsets[CF.index] + WF.xhF[CF.index];
          return this.warnOnce(`overrun:${FF}`, `${FF} draws ${SF} instances from a ${AF}-byte buffer (${CF.needed} needed)`), !1
        }
        return !0
      }
      createBinding(FF, WF, SF, CF) {
        const AF = `${WF._colorFormat}|${WF._depthStencilFormat}|${WF._depthCompare}|${WF._sampleCount}`,
          uF = hW(this.device, WF);
        if (FF === this.skyLastRenderable) {
          let SF = null;
          return {
            renderable: FF,
            pipeline: uF,
            draw: FF => SF ? this.drawSky(FF, WF, AF, SF) : 0,
            update: FF => {
              SF = FF
            }
          }
        }
        return {
          renderable: FF,
          pipeline: uF,
          draw: FF => (CF ? CF.execute(FF, WF, AF) : 0) + this.drawList(FF, WF, AF, SF)
        }
      }
      drawSky(FF, WF, SF, CF) {
        const AF = this.lists.skyDraws,
          uF = AF.length > 0;
        if (uF) {
          var hF;
          const SF = (null !== (hF = WF._depthCompare) && void 0 !== hF ? hF : SW).startsWith("greater") ? 0 : 1;
          FF.setViewport(0, 0, CF.targetWidth, CF.targetHeight, SF, SF)
        }
        const bW = this.drawList(FF, WF, SF, AF);
        return uF && FF.setViewport(0, 0, CF.targetWidth, CF.targetHeight, 0, 1), bW
      }
      drawList(FF, WF, SF, CF) {
        let AF = 0;
        const uF = this.binder;
        uF.reset();
        for (const hF of CF) {
          const CF = this.pipelineFor(hF, WF, SF);
          CF && (uF.bind(FF, hF, CF, this.meshSlots.bindGroup, hF.slotOffset), hF.indexBuffer ? FF.drawIndexed(hF.count, hF.instances, hF.first, 0, 0) : FF.draw(hF.count, hF.instances, hF.first, 0), AF++)
        }
        return AF
      }
      pipelineFor(FF, WF, SF) {
        var CF, AF;
        if (FF.program.failed) return null;
        const uF = FF.inputs;
        if (uF.pipeline && uF.pipelineTarget === SF) return uF.pipeline;
        const hF = `${FF.pipelineKey}|${SF}`,
          bW = this.pipelines.get(hF);
        if (void 0 !== bW) return bW && (uF.pipeline = bW, uF.pipelineTarget = SF), bW || null;
        this.pipelines.set(hF, null);
        const {
          program: dF,
          layout: PF,
          state: RF
        } = FF, iW = {
          label: `standard-${dF.id}`,
          layout: dF.pipelineLayout,
          vertex: {
            module: dF.vertex,
            entryPoint: "main",
            buffers: PF.buffers
          },
          fragment: JF({
            module: dF.fragment,
            entryPoint: "main"
          }, WF, RF.blend, RF.colourWrite),
          depthStencil: WF._depthStencilFormat ? {
            format: WF._depthStencilFormat,
            depthCompare: null !== (CF = null !== (AF = RF.depthCompare) && void 0 !== AF ? AF : WF._depthCompare) && void 0 !== CF ? CF : SW,
            depthWriteEnabled: RF.depthWrite,
            depthBias: RF.depthBias,
            depthBiasSlopeScale: RF.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: WF._sampleCount
          },
          primitive: {
            topology: RF.topology,
            frontFace: RF.frontFace,
            cullMode: RF.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(iW).then((FF => {
          this.compiling--, this.pipelines.set(hF, FF)
        }), (FF => {
          this.compiling--, this.reportFailure(dF, hF, FF)
        })), null
      }
      forEachSunShadowCaster(FF) {
        const WF = this.caster,
          SF = (SF, CF, AF) => {
            const uF = SF.unit && function(FF) {
              const WF = FF.material.model;
              return null !== WF && (WF.lifeform || WF.item) && "triangle-list" === FF.state.topology
            }(SF) ? Cu(SF.unit) : null;
            if (!uF) return;
            const hF = SF.unit.owner;
            switch (WF.geometry = uF, WF.skip = hF.noSunShadowVertices, WF.indexed = null !== SF.indexBuffer, WF.first = SF.first, WF.count = SF.count, WF.uW = CF, WF.worldAt = AF, WF.instances = null, WF.instanceCount = 1, WF.thin = !1, lA(hF)) {
              case "thin": {
                const FF = hF._thinInstanceDataStorage.matrixData;
                if (!FF) return;
                WF.instances = FF, WF.instanceCount = Math.min(SF.instances, FF.length / 16), WF.thin = !0;
                break
              }
              case "instanced": {
                const FF = this.resources.batchUploads.get(hF);
                if (!FF || FF.frame !== this.frame || !this.writeBatchCasters(FF)) return;
                break
              }
            }
            FF(WF)
          };
        for (const CF of this.lists.opaqueDraws) SF(CF, this.meshSlots.data, CF.slotOffset / 4);
        this.thinBundle.forEachDrawn(SF)
      }
      writeBatchCasters(FF) {
        const {
          caster: WF
        } = this, SF = FF.packedMatrices, CF = FF.count;
        WF.instances = SF, WF.instanceCount = CF;
        let AF = -1;
        for (let uF = 0; uF < CF; uF++) {
          const WF = Vh(FF.packedRowMesh(uF));
          WF && AF < 0 ? (this.casterWorlds.length < 16 * CF && (this.casterWorlds = new Float32Array(SF.length)), this.casterWorlds.set(SF.subarray(0, 16 * uF)), AF = uF) : !WF && AF >= 0 && (this.casterWorlds.set(SF.subarray(16 * uF, 16 * uF + 16), 16 * AF), AF++)
        }
        return AF >= 0 && (WF.instances = this.casterWorlds, WF.instanceCount = AF), WF.instanceCount > 0
      }
      async reportFailure(FF, WF, SF) {
        const CF = [];
        let AF = !0;
        for (const [uF, hF] of [
            ["vertex", FF.vertex],
            ["fragment", FF.fragment]
          ]) {
          const FF = await hF.getCompilationInfo();
          for (const WF of FF.messages) AF &&= "error" !== WF.type, CF.push(`${uF}:${WF.lineNum}:${WF.linePos} ${WF.type}: ${WF.message}`)
        }
        if (AF && !FF.packGroup) return this.pipelines.set(WF, !1), console.error(`Lite: pipeline ${WF} failed`, SF), void XA("mesh", FF.kind, SF);
        FF.failed || (FF.failed = !0, console.error(`Lite: program ${FF.id} failed`, SF, CF.join("\n"), {
          program: FF.program,
          key: FF.key
        }), XA("mesh", FF.kind, SF, AF ? null : CF[0]))
      }
    }

    function Vh(FF) {
      var WF, SF;
      const CF = null === (WF = FF.BWF) || void 0 === WF || null === (SF = WF.aShaderPackItem) || void 0 === SF ? void 0 : SF.x;
      return void 0 !== CF && 0 !== (CF & dW.j)
    }
    var Nh = SF(39543),
      Dh = SF(39547),
      Lh = SF(39555),
      mb = SF(39504);
    const Oh = [0, 3, 1, 4, 2, 5];

    function xb(FF, WF, SF, CF, AF) {
      const uF = SF[0].width;
      try {
        return AF ? function(FF, WF, SF) {
          const CF = (0, mb.b)(FF, SF, SF, 6);
          for (let AF = 0; AF < 6; AF++)(0, mb.d)(FF, CF, AF, WF[Oh[AF]], {
            invertY: !1
          });
          return CF.texture
        }(FF, SF, uF) : function(FF, WF, SF, CF) {
          const AF = FF.createTexture({
            label: "sink-cube",
            size: {
              width: SF,
              height: SF,
              depthOrArrayLayers: 6
            },
            format: CF,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let uF = 0; uF < 6; uF++) FF.queue.copyExternalImageToTexture({
            source: WF[Oh[uF]]
          }, {
            texture: AF,
            origin: {
              x: 0,
              y: 0,
              z: uF
            }
          }, {
            width: SF,
            height: SF
          });
          return AF
        }(WF, SF, uF, 1 === CF ? "r8unorm" : "rgba8unorm")
      } finally {
        Zh(SF)
      }
    }

    function Zh(FF) {
      for (const WF of null !== FF && void 0 !== FF ? FF : []) null === WF || void 0 === WF || WF.close()
    }
    async function oh(FF) {
      const WF = [],
        SF = [];
      if (await Promise.all(FF.map(((FF, CF) => (WF[CF] = null, FF.then((FF => {
          WF[CF] = FF
        }), (FF => {
          SF.push(FF)
        })))))), SF.length > 0) throw Zh(WF), SF[0];
      return WF
    }
    class Yh {
      constructor(FF) {
        this.ZF = FF, this.starts = [], this.lengths = [], this.used = 0, FF > 0 && (this.starts.push(0), this.lengths.push(FF))
      }
      allocate(FF) {
        const {
          starts: WF,
          lengths: SF
        } = this;
        for (let CF = 0; CF < WF.length; CF++) {
          if (SF[CF] < FF) continue;
          const AF = WF[CF];
          return SF[CF] === FF ? (WF.splice(CF, 1), SF.splice(CF, 1)) : (WF[CF] += FF, SF[CF] -= FF), this.used += FF, AF
        }
        return -1
      }
      free(FF, WF) {
        this.used -= WF;
        const SF = Math.min(FF + WF, this.ZF);
        SF > FF && this.release(FF, SF - FF)
      }
      grow(FF) {
        const WF = this.ZF;
        this.ZF = FF, this.release(WF, FF - WF)
      }
      truncate(FF) {
        const {
          starts: WF,
          lengths: SF
        } = this;
        for (let CF = WF.length - 1; CF >= 0 && WF[CF] + SF[CF] > FF; CF--) WF[CF] >= FF ? (WF.splice(CF, 1), SF.splice(CF, 1)) : SF[CF] = FF - WF[CF];
        this.ZF = FF
      }
      release(FF, WF) {
        const {
          starts: SF,
          lengths: CF
        } = this;
        let AF = 0,
          uF = SF.length;
        for (; AF < uF;) {
          const WF = AF + uF >> 1;
          SF[WF] < FF ? AF = WF + 1 : uF = WF
        }
        const hF = AF,
          bW = hF > 0 && SF[hF - 1] + CF[hF - 1] === FF,
          dF = hF < SF.length && FF + WF === SF[hF];
        bW && dF ? (CF[hF - 1] += WF + CF[hF], SF.splice(hF, 1), CF.splice(hF, 1)) : bW ? CF[hF - 1] += WF : dF ? (SF[hF] = FF, CF[hF] += WF) : (SF.splice(hF, 0, FF), CF.splice(hF, 0, WF))
      }
    }
    const Mh = 256;
    class cb {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = FF, this.onReplaced = WF, this.mergeGap = SF, this.gpu = null, this.bytes = void 0, this.Bu = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const AF = Math.max(Mh, Math.ceil(CF / Mh) * Mh);
        this.bytes = new Uint8Array(AF), this.Bu = new Yh(AF / Mh)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(FF) {
        return Math.max(1, Math.ceil(FF / Mh)) * Mh
      }
      allocate(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FF;
        const CF = cb.slotBytes(FF),
          AF = CF / Mh;
        let uF = this.Bu.allocate(AF);
        uF < 0 && (this.grow(this.Bu.ZF + AF), uF = this.Bu.allocate(AF));
        const hF = uF * Mh;
        return this.growTo(hF + Math.max(SF, CF)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, hF, hF + CF), WF && this.bytes.set(new Uint8Array(WF.buffer, WF.byteOffset, Math.min(WF.byteLength, CF)), hF), this.markDirty(hF, hF + CF), hF
      }
      growTo(FF) {
        const WF = Math.ceil(FF / Mh);
        WF > this.Bu.ZF && this.grow(WF)
      }
      free(FF, WF) {
        this.freed.push(FF, WF)
      }
      write(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (CF <= 0) return;
        this.bytes.set(new Uint8Array(WF.buffer, SF, CF), FF);
        let uF = FF + CF;
        if (AF) {
          const WF = FF + 4 * Math.ceil(CF / 4);
          this.bytes.fill(0, uF, WF), uF = WF
        }
        this.markDirty(FF, uF)
      }
      move(FF, WF, SF) {
        this.bytes.copyWithin(WF, FF, FF + SF), this.markDirty(WF, WF + SF)
      }
      flush() {
        for (const WF of this.retired) this.onReplaced(WF), WF.destroy();
        this.retired.length = 0;
        const FF = this.dirtyStarts.length;
        if (FF > 0) {
          const {
            dirtyStarts: WF,
            dirtyEnds: SF,
            order: CF
          } = this;
          CF.length = FF;
          for (let bW = 0; bW < FF; bW++) CF[bW] = bW;
          FF > 1 && CF.sort(((FF, SF) => WF[FF] - WF[SF]));
          const AF = this.mergeGap;
          let uF = WF[CF[0]],
            hF = SF[CF[0]];
          for (let bW = 1; bW < FF; bW++) {
            const FF = CF[bW];
            WF[FF] - hF <= AF ? hF = Math.max(hF, SF[FF]) : (this.send(uF, hF), uF = WF[FF], hF = SF[FF])
          }
          this.send(uF, hF), WF.length = 0, SF.length = 0
        }
        this.holding = !1
      }
      wL() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const FF = this.freed;
        for (let WF = 0; WF < FF.length; WF += 2) this.Bu.free(FF[WF] / Mh, FF[WF + 1] / Mh);
        FF.length = 0
      }
      send(FF, WF) {
        this.device.queue.writeBuffer(this.gpu, FF, this.bytes.buffer, FF, WF - FF);
        for (const SF of this.replaced) {
          const CF = Math.min(WF, SF.size);
          CF > FF && this.device.queue.writeBuffer(SF, FF, this.bytes.buffer, FF, CF - FF)
        }
      }
      markDirty(FF, WF) {
        FF &= -4, WF = WF + 3 & -4, this.holding ? (this.dirtyStarts.push(FF), this.dirtyEnds.push(WF)) : this.send(FF, WF)
      }
      grow(FF) {
        const WF = this.Bu.ZF,
          SF = Math.max(2 * WF, FF),
          CF = new Uint8Array(SF * Mh);
        CF.set(this.bytes);
        const AF = this.gpu;
        this.gpu = this.createGpu(CF.byteLength), this.bytes = CF, this.Bu.grow(SF), AF && (this.replaced.push(AF), this.onReplaced(AF)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, WF * Mh)
      }
      createGpu(FF) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: FF,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Gh(FF) {
      return Array.isArray(FF) ? new Float32Array(FF) : FF
    }

    function zb(FF, WF, SF, CF, AF) {
      const uF = xu(AF),
        hF = Math.min(AF, CF.byteLength);
      if (uF === hF && CF.byteOffset % 4 === 0) return void FF.queue.writeBuffer(WF, SF, CF.buffer, CF.byteOffset, uF);
      const bW = new Uint8Array(uF);
      bW.set(new Uint8Array(CF.buffer, CF.byteOffset, hF)), FF.queue.writeBuffer(WF, SF, bW)
    }

    function Ih(FF, WF, SF) {
      const CF = "linear",
        AF = "nearest";
      let uF = AF,
        hF = AF,
        bW = "nearest",
        dF = !WF;
      switch (FF) {
        case 11:
          uF = CF, hF = CF;
          break;
        case 3:
          uF = CF, hF = CF, bW = WF ? "linear" : "nearest";
          break;
        case 8:
          bW = WF ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          hF = CF;
          break;
        case 6:
          hF = CF, bW = WF ? "linear" : "nearest";
          break;
        case 7:
          hF = CF, dF = !0;
          break;
        case 9:
          uF = CF;
          break;
        case 10:
          uF = CF, bW = WF ? "linear" : "nearest";
          break;
        case 2:
          uF = CF, hF = CF, SF > 1 ? (bW = "linear", dF = !1) : dF = !0;
          break;
        case 12:
          uF = CF, dF = !0;
          break;
        default:
          dF = !0
      }
      return SF > 1 && !dF ? {
        magFilter: CF,
        minFilter: CF,
        mipmapFilter: "linear",
        maxAnisotropy: SF
      } : {
        magFilter: uF,
        minFilter: hF,
        mipmapFilter: bW,
        ...dF ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function fh(FF) {
      return 0 === FF ? "clamp-to-edge" : 2 === FF ? "mirror-repeat" : "repeat"
    }
    class yb {
      constructor(FF, WF) {
        let {
          vertexArena: SF = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = FF, this.device = WF, this.buffers = new WeakMap, this.duF = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = SF ? new cb(WF, (FF => {
          var WF;
          null === (WF = this.onDestroy) || void 0 === WF || WF.call(this, FF), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var FF;
        null === (FF = this.arena) || void 0 === FF || FF.flush()
      }
      endUploadFrame() {
        var FF;
        null === (FF = this.arena) || void 0 === FF || FF.wL()
      }
      vertexBufferCreated(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SF ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(FF);
        const AF = Gh(WF);
        FF.ZF = AF.byteLength, this.buffers.set(FF, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: SF && null !== this.arena,
          pending: AF,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: CF
        })
      }
      vertexBufferUpdated(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        const AF = this.buffers.get(FF);
        if (!AF) return;
        const uF = Gh(WF),
          hF = void 0 === CF ? uF.byteLength : Math.min(CF, uF.byteLength);
        this.update(AF, uF, SF, hF)
      }
      vertexBufferFloatsUpdated(FF, WF, SF, CF) {
        const AF = this.buffers.get(FF);
        if (!AF) return;
        const uF = SF * Float32Array.BYTES_PER_ELEMENT,
          hF = (CF - SF) * Float32Array.BYTES_PER_ELEMENT;
        AF.slot >= 0 && hF > 0 && uF + hF <= AF.size ? this.writeSlot(AF, uF, WF, WF.byteOffset + uF, hF, !1) : AF.gpu && hF > 0 && uF + hF <= AF.gpu.size ? this.device.queue.writeBuffer(AF.gpu, uF, WF.buffer, WF.byteOffset + uF, hF) : this.update(AF, WF.subarray(SF, CF), uF, hF)
      }
      indexBufferCreated(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(FF);
        const CF = function(FF) {
          if (FF instanceof Uint16Array || FF instanceof Uint32Array) return FF;
          for (let WF = 0; WF < FF.length; WF++)
            if (FF[WF] >= 65535) return new Uint32Array(FF);
          return new Uint16Array(FF)
        }(WF);
        FF.is32Bits = 4 === CF.BYTES_PER_ELEMENT, FF.ZF = CF.byteLength, this.buffers.set(FF, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: CF,
          ownsPending: CF !== WF,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: SF
        })
      }
      bufferDeleted(FF) {
        const WF = this.buffers.get(FF);
        null !== WF && void 0 !== WF && WF.gpu ? (this.destroyBuffer(WF.gpu), this.gpuBuffersVersion++) : WF && WF.slot >= 0 && (this.arena.free(WF.slot, WF.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(FF)
      }
      update(FF, WF, SF, CF) {
        if (FF.slot >= 0) this.updateSlot(FF, WF, SF, CF);
        else if (FF.gpu) {
          if (SF + xu(CF) > FF.gpu.size) {
            const WF = this.device.createBuffer({
                label: FF.label,
                size: xu(Math.max(2 * FF.gpu.size, SF + CF)),
                usage: FF.usage | GPUBufferUsage.COPY_SRC
              }),
              AF = this.device.createCommandEncoder();
            AF.copyBufferToBuffer(FF.gpu, 0, WF, 0, FF.gpu.size), this.device.queue.submit([AF.finish()]), this.destroyBuffer(FF.gpu), this.gpuBuffersVersion++, FF.gpu = WF
          }
          zb(this.device, FF.gpu, SF, WF, CF)
        } else {
          const uF = new Uint8Array(WF.buffer, WF.byteOffset, CF),
            hF = FF.pending;
          if (hF && FF.ownsPending && SF + CF <= hF.byteLength) new Uint8Array(hF.buffer, hF.byteOffset, hF.byteLength).set(uF, SF);
          else if (hF && 0 === SF && CF === hF.byteLength && WF.byteLength === CF) FF.pending = WF, FF.ownsPending = !1;
          else {
            var AF;
            const WF = new Uint8Array(Math.max(null !== (AF = null === hF || void 0 === hF ? void 0 : hF.byteLength) && void 0 !== AF ? AF : 0, SF + CF));
            hF && WF.set(new Uint8Array(hF.buffer, hF.byteOffset, hF.byteLength)), WF.set(uF, SF), FF.pending = WF, FF.ownsPending = !0
          }
        }
      }
      updateSlot(FF, WF, SF, CF) {
        const AF = this.arena;
        SF + xu(CF) > FF.size && (FF.size = xu(Math.max(2 * FF.size, SF + CF)), AF.growTo(FF.slot + FF.size), this.gpuBuffersVersion++), 0 === CF ? this.writeSlot(FF, SF, nh, 0, 4, !1) : this.writeSlot(FF, SF, WF, WF.byteOffset, CF, !0)
      }
      writeSlot(FF, WF, SF, CF, AF, uF) {
        const hF = WF + (uF ? xu(AF) : AF);
        hF > FF.slotBytes && this.moveSlot(FF, hF), this.arena.write(FF.slot + WF, SF, CF, AF, uF)
      }
      moveSlot(FF, WF) {
        const SF = this.arena,
          CF = cb.slotBytes(Math.max(WF, Math.min(2 * FF.slotBytes, FF.size))),
          AF = SF.allocate(CF, null, FF.size);
        SF.move(FF.slot, AF, FF.slotBytes), SF.free(FF.slot, FF.slotBytes), FF.slot = AF, FF.slotBytes = CF, this.gpuBuffersVersion++
      }
      cover(FF, WF) {
        const SF = this.buffers.get(FF);
        if (!SF || SF.slot < 0) return !1;
        const CF = Math.min(WF, SF.size);
        return !(CF <= SF.slotBytes) && (this.moveSlot(SF, CF), !0)
      }
      destroyBuffer(FF) {
        var WF;
        null === (WF = this.onDestroy) || void 0 === WF || WF.call(this, FF), FF.destroy()
      }
      gpuBuffer(FF) {
        const WF = this.buffers.get(FF);
        if (!WF) return null;
        if (WF.slot >= 0) return this.arena.buffer;
        if (WF.arena && WF.pending) {
          const FF = WF.pending,
            SF = this.arena;
          return WF.size = xu(FF.byteLength), WF.slotBytes = cb.slotBytes(function(FF) {
            const WF = new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength);
            let SF = WF.length;
            if (FF.byteOffset % 4 === 0) {
              for (; SF % 4 !== 0 && 0 === WF[SF - 1];) SF--;
              if (SF % 4 === 0) {
                const WF = new Uint32Array(FF.buffer, FF.byteOffset, SF / 4);
                let CF = WF.length;
                for (; CF > 0 && 0 === WF[CF - 1];) CF--;
                SF = 4 * CF
              }
            }
            for (; SF > 0 && 0 === WF[SF - 1];) SF--;
            return SF
          }(FF)), WF.slot = SF.allocate(WF.slotBytes, FF, WF.size), WF.pending = null, SF.buffer
        }
        if (!WF.gpu && WF.pending) {
          const FF = WF.pending;
          WF.gpu = this.device.createBuffer({
            label: WF.label,
            size: xu(FF.byteLength),
            usage: WF.usage
          }), zb(this.device, WF.gpu, 0, FF, FF.byteLength), WF.pending = null
        }
        return WF.gpu
      }
      gpuOffset(FF) {
        var WF, SF;
        const CF = null !== (WF = null === (SF = this.buffers.get(FF)) || void 0 === SF ? void 0 : SF.slot) && void 0 !== WF ? WF : -1;
        return CF < 0 ? 0 : CF
      }
      gpuEnd(FF) {
        var WF, SF;
        const CF = this.buffers.get(FF);
        return CF ? CF.slot >= 0 ? CF.slot + CF.size : null !== (WF = null === (SF = CF.gpu) || void 0 === SF ? void 0 : SF.size) && void 0 !== WF ? WF : 0 : 0
      }
      vertexInput(FF, WF, SF) {
        var CF, AF, uF, hF;
        return null !== (CF = null !== (AF = SF && this.modelInput(SF, WF)) && void 0 !== AF ? AF : null === (uF = null !== (hF = this.duF.get(FF)) && void 0 !== hF ? hF : this.batchUploads.get(FF)) || void 0 === uF ? void 0 : uF.inputs[WF]) && void 0 !== CF ? CF : null
      }
      modelInput(FF, WF) {
        const SF = this.geometrySlot(FF);
        let CF = SF.inputs.get(WF);
        if (void 0 === CF) {
          const AF = FF.vertexAttributes.find((FF => FF.kind === WF));
          CF = AF ? new UF(this.modelKey(SF, AF.data, !1), AF.offset, AF.stride, AF.components, !1, AF.glType, AF.isNormalized) : null, SF.inputs.set(WF, CF)
        }
        return CF
      }
      modelIndex(FF) {
        return FF.indexData && this.modelKey(this.geometrySlot(FF), FF.indexData, !0)
      }
      geometrySlot(FF) {
        let WF = FF.gpu[OF.f.lite];
        if (!WF) {
          const SF = new Map,
            CF = () => {
              for (const FF of SF.values()) this.bufferDeleted(FF)
            },
            AF = FF => {
              const WF = SF.get(FF);
              WF && this.vertexBufferUpdated(WF, FF)
            };
          WF = {
            keys: SF,
            inputs: new Map,
            release: CF,
            updated: AF
          }, FF.gpu[OF.f.lite] = WF
        }
        return WF
      }
      modelKey(FF, WF, SF) {
        let CF = FF.keys.get(WF);
        if (!CF) {
          if (SF) {
            const FF = {
              ZF: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(FF, WF, "model-indices"), CF = FF
          } else CF = {
            ZF: 0
          }, this.vertexBufferCreated(CF, WF, !1, "model-vertices");
          FF.keys.set(WF, CF)
        }
        return CF
      }
      indexFormat(FF) {
        return FF.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(FF, WF) {
        --FF.refs > 0 || (this.releaseTexture(FF), Zh(FF.images), null !== WF && this.textures.delete(WF))
      }
      load(FF, WF) {
        const SF = WF.decoded = async function(FF) {
          if ("cube" === FF.kind) return async function(FF) {
            if (6 !== FF.length) throw new Error(`${FF.length} files where six faces were expected`);
            const WF = await oh(FF.map((FF => GA(FF)))),
              SF = WF[0].width;
            return oh(WF.map((async FF => {
              if (FF.width === SF && FF.height === SF) return FF;
              try {
                return await createImageBitmap(FF, {
                  ...MA,
                  resizeWidth: SF,
                  resizeHeight: SF
                })
              } finally {
                FF.close()
              }
            })))
          }(FF.files);
          if ("data" === FF.kind && FF.data) return [await createImageBitmap(new Blob([FF.data]), MA)];
          return [await GA(sh(FF))]
        }(FF.source).then((FF => {
          0 === WF.refs ? Zh(FF) : WF.images = FF
        }));
        this.track(WF, sh(FF.source), SF, (() => {
          WF.wanted && !WF.failed && WF.refs > 0 && this.upload(FF, WF)
        }))
      }
      canvasUpdated(FF, WF, SF) {
        const {
          state: CF
        } = this.textureSlot(FF);
        CF.dynamicSource = {
          invertY: WF,
          premultiplied: SF
        }, CF.dynamic && this.pushDynamic(FF.source, CF)
      }
      async atlasArray(FF, WF, SF) {
        const CF = await fA(this.device, FF, WF, SF);
        if (!this.atlasBindings.has(CF)) {
          const FF = (0, Nh.e)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(CF, {
            view: CF.texture.createView({
              dimension: "2d-array"
            }),
            sampler: FF
          })
        }
        return CF
      }
      boundTexture(FF) {
        const WF = this.atlasBindings.get(FF);
        if (WF) return WF;
        const SF = FF;
        if (SF.released) return null;
        const CF = this.textureSlot(SF, !0),
          {
            state: AF
          } = CF;
        if (!AF.view && (AF.wanted = !0, AF.loading || AF.failed || this.upload(SF, AF), !AF.view)) return null;
        const uF = this.chosenSampler(SF, CF),
          hF = CF.bound;
        return hF && hF.view === AF.view && hF.sampler === uF ? hF : (CF.bound = {
          view: AF.view,
          sampler: uF
        }, CF.bound)
      }
      textureLoaded(FF) {
        var WF, SF;
        return null !== (WF = null === (SF = FF.gpu[OF.f.lite]) || void 0 === SF ? void 0 : SF.state.decoded) && void 0 !== WF ? WF : null
      }
      textureFailed(FF) {
        var WF;
        return !0 === (null === (WF = FF.gpu[OF.f.lite]) || void 0 === WF ? void 0 : WF.state.failed)
      }
      chosenSampler(FF, WF) {
        const {
          samplingMode: SF,
          wrapU: CF,
          wrapV: AF
        } = FF.sampler, uF = WF.state.hasMips, hF = function(FF, WF) {
          const {
            bilinear: SF,
            trilinear: CF
          } = OF.j;
          return !WF && FF !== SF || 11 !== FF && FF !== CF && FF !== SF ? 1 : 4
        }(SF, uF), bW = WF.sampler;
        if (bW && bW.samplingMode === SF && bW.hasMips === uF && bW.anisotropy === hF && bW.wrapU === CF && bW.wrapV === AF) return bW.sampler;
        const dF = this.samplerFor(SF, uF, hF, CF, AF);
        return WF.sampler = {
          samplingMode: SF,
          hasMips: uF,
          anisotropy: hF,
          wrapU: CF,
          wrapV: AF,
          sampler: dF
        }, dF
      }
      releaseTexture(FF) {
        var WF, SF;
        FF.view && (null === (SF = this.onDestroy) || void 0 === SF || SF.call(this, FF.view));
        null === (WF = FF.destroy) || void 0 === WF || WF.call(FF)
      }
      textureSlot(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = FF.gpu[OF.f.lite];
        if (SF) return SF;
        const CF = function(FF) {
          let {
            source: WF,
            sampler: SF
          } = FF;
          return "canvas" === WF.kind ? null : `${WF.kind}|${sh(WF)}|${SF.noMipmap}|${SF.samplingMode}|${SF.invertY}`
        }(FF);
        let AF = null === CF ? void 0 : this.textures.get(CF);
        AF || (AF = {
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
        }, null !== CF && (this.textures.set(CF, AF), this.load(FF, AF), WF && this.firstBindDecodes++)), AF.refs++;
        const uF = AF,
          hF = {
            state: AF,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(uF, CF)
            }
          };
        return FF.gpu[OF.f.lite] = hF, hF
      }
      samplerFor(FF, WF, SF, CF, AF) {
        const uF = `${FF}|${WF}|${SF}|${CF}|${AF}`;
        let hF = this.samplers.get(uF);
        if (!hF) {
          const bW = {
            ...Ih(FF, WF, SF),
            addressModeU: fh(CF),
            addressModeV: fh(AF)
          };
          hF = (0, Nh.e)(this.engine, bW), this.samplers.set(uF, hF)
        }
        return hF
      }
      upload(FF, WF) {
        const {
          source: SF,
          sampler: CF
        } = FF;
        WF.hasMips = !CF.noMipmap, "canvas" === SF.kind ? this.createDynamic(SF, WF) : "cube" === SF.kind ? this.uploadCube(WF, SF.luminance) : this.uploadImage(WF, !0 === CF.invertY, SF.url)
      }
      uploadImage(FF, WF, SF) {
        const [CF] = FF.images;
        FF.images = null;
        const AF = (0, Dh.d)(this.engine, CF, {
          mipMaps: FF.hasMips,
          invertY: WF,
          srgb: !1
        }).then((WF => {
          CF.close(), 0 !== FF.refs ? (FF.view = WF.view, FF.destroy = WF.texture.destroy.bind(WF.texture)) : WF.texture.destroy()
        }));
        this.track(FF, SF, AF)
      }
      track(FF, WF, SF, CF) {
        FF.loading = !0, this.pending++, SF.catch((SF => {
          FF.failed = !0, console.warn(`Lite: could not load texture ${cu(WF)}`, SF)
        })).finally((() => {
          FF.loading = !1, this.pending--, null === CF || void 0 === CF || CF()
        }))
      }
      uploadCube(FF, WF) {
        const SF = FF.images;
        FF.images = null;
        const CF = xb(this.engine, this.device, SF, (0, OF.z)(WF), FF.hasMips);
        FF.view = CF.createView({
          dimension: "cube"
        }), FF.destroy = () => {
          CF.destroy()
        }
      }
      createDynamic(FF, WF) {
        const {
          canvas: SF
        } = FF, CF = (0, Lh.c)(this.engine, Math.max(1, SF.width), Math.max(1, SF.height), {
          mipMaps: WF.hasMips,
          srgb: !1
        });
        WF.dynamic = CF, WF.view = CF.view, WF.destroy = () => {
          CF.texture.destroy()
        }, this.pushDynamic(FF, WF)
      }
      pushDynamic(FF, WF) {
        const SF = WF.dynamicSource,
          CF = WF.dynamic,
          {
            canvas: AF
          } = FF;
        if (SF && CF && 0 !== AF.width && 0 !== AF.height) return AF.width !== CF.width || AF.height !== CF.height ? (this.releaseTexture(WF), WF.dynamic = null, WF.view = null, void this.createDynamic(FF, WF)) : void(0, Lh.d)(this.engine, CF, AF, {
          invertY: SF.invertY,
          premultiplyAlpha: SF.premultiplied
        })
      }
    }

    function sh(FF) {
      return "cube" === FF.kind ? FF.rootUrl : "canvas" === FF.kind ? "canvas" : FF.url
    }
    const nh = new Uint8Array(4);

    function Hh(FF) {
      const WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      FF._colorAttachment.storeOp = FF._targetSignature._sampleCount > 1 ? WF : "store";
      const SF = FF._renderPassDescriptor.depthStencilAttachment;
      SF && (SF.depthStoreOp = WF, SF.stencilStoreOp && (SF.stencilStoreOp = WF))
    }
    var Kh = SF(36181),
      wh = SF(36223),
      Xh = SF(35808),
      Uh = SF(37711);
    const Bh = new Float64Array([1, 1, 1]),
      jb = new Float64Array([0, 1, 0]),
      vb = new Float64Array(4),
      Jh = new Float32Array(16),
      ph = new Float64Array(3),
      lh = new Float64Array(4);

    function Fb(FF, WF, SF) {
      FF.fov = WF.fov, FF.near = WF.near, FF.far = WF.far, FF.renderWidth = SF.renderWidth, FF.renderHeight = SF.renderHeight, (0, Xh.o)(WF.holderRotation, 0, vb, 0), (0, Xh.d)(Bh, 0, vb, 0, WF.holderPosition, 0, Jh);
      const CF = WF.EAF;
      ph[0] = CF[0], ph[1] = CF[1], ph[2] = CF[2] + 1;
      const AF = FF.viewMatrix;
      (0, Xh.k)(CF, ph, jb, AF), (0, Xh.h)(AF, 0, AF), (0, Xh.l)(AF, Jh, 0, AF), (0, Xh.h)(AF, 0, AF);
      const uF = FF.worldMatrix;
      (0, Xh.h)(AF, 0, uF), FF.eye[0] = uF[12], FF.eye[1] = uF[13], FF.eye[2] = uF[14], lh[0] = FF.fov, lh[1] = FF.renderWidth / FF.renderHeight, lh[2] = FF.near, lh[3] = FF.far, (0, Xh.n)(lh, FF.projectionMatrix), (0, Xh.l)(AF, FF.projectionMatrix, 0, FF.viewProjectionMatrix), (0, Uh.f)(FF.viewProjectionMatrix, FF.frustum)
    }

    function Wb(FF, WF) {
      let SF = FF.frustumPlanes;
      SF || (SF = FF.frustumPlanes = Array.from({
        length: 6
      }, (() => new Kh.d(0, 0, 0, 0))));
      for (let CF = 0; CF < 6; CF++) {
        const FF = SF[CF].normal;
        FF._x = WF[4 * CF], FF._y = WF[4 * CF + 1], FF._z = WF[4 * CF + 2], FF._isDirty = !0, SF[CF].d = WF[4 * CF + 3]
      }
    }

    function Sb(FF, WF) {
      const SF = WF.clearColor;
      FF.clearColour[0] = SF.r, FF.clearColour[1] = SF.g, FF.clearColour[2] = SF.b, FF.clearColour[3] = SF.a;
      const CF = WF.ambientColor;
      FF.ambientColour[0] = CF.r, FF.ambientColour[1] = CF.g, FF.ambientColour[2] = CF.b, FF.animationRatio = WF.animationRatio, FF.frameId = WF.frameId, FF.version++
    }

    function Cb(FF) {
      const WF = FF.model.view;
      return WF.animTick = (0, wh.d)(), WF.timeMs = performance.now(), Sb(WF, FF.ju), FF.model.update(WF.frameId), WF
    }

    function Ab(FF) {
      const WF = FF.ju,
        {
          view: SF,
          eAF: CF
        } = FF.model;
      return Fb(SF, CF, WF.sC()), WF.onBeforeRenderObservable.notifyObservers(WF), Wb(WF, SF.frustum), WF.onBeforeCameraRenderObservable.notifyObservers(WF.activeCamera), Cb(FF)
    }
    var ub = SF(35787),
      hb = SF(35882),
      bd = SF(36211),
      db = SF(36214);

    function Pb(FF) {
      var WF, SF;
      const CF = (0, LF.ab)(FF);
      if (!CF || CF.diffuseTexture && (0, bd.k)(FF)) return null;
      const AF = null === (WF = (0, LF.x)(CF, NF.h.name)) || void 0 === WF ? void 0 : WF.state,
        uF = null === (SF = (0, LF.x)(CF, db.b.name)) || void 0 === SF ? void 0 : SF.state,
        hF = new Float32Array(16);
      return function(FF, WF, SF, CF) {
        var AF, uF;
        const hF = RC;
        CF.set(FF.diffuseColor, hF.diffuse), CF[hF.diffuse + 3] = FF.alpha, CF.set(FF.ambientColor, hF.ambientAndCutoff), CF[hF.ambientAndCutoff + 3] = FF.alphaCutOff, CF.set(FF.emissiveColor, hF.emissiveAndLevel), CF[hF.emissiveAndLevel + 3] = null !== (AF = null === (uF = FF.diffuseTexture) || void 0 === uF ? void 0 : uF.level) && void 0 !== AF ? AF : 1, null !== WF && void 0 !== WF && WF.animDataPerTex ? (CF[hF.anim + 1] = wh.c, CF[hF.anim + 2] = WF.animDataPerTex.length / 3 - 1) : SF && (CF[hF.anim + 1] = SF.numAnimStates, CF[hF.anim + 2] = SF.ticksPerAnimState)
      }(CF, AF, uF, hF), {
        model: CF,
        atlas: AF,
        texture: AF ? "atlas" : CF.diffuseTexture ? "single" : "none",
        animated: AF ? !!AF.animDataPerTex : !!uF,
        liquid: (0, bd.n)(FF),
        customRenderMat: (0, bd.k)(FF),
        uniformData: hF
      }
    }
    var Rb = SF(35771);
    class eb {
      constructor(FF) {
        this.units = FF, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var FF;
        this.buffer.destroy(), null === (FF = this.twin) || void 0 === FF || FF.destroy()
      }
    }
    class Eb {
      constructor(FF, WF) {
        this.arena = FF, this.Bu = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.Bu = new Yh(WF);
        const SF = new eb(WF);
        SF.buffer = this.createBuffer(SF, !1), this.backings.push(SF), this.refresh()
      }
      get ZF() {
        return this.Bu.ZF
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
        let FF = 0;
        for (const WF of this.backings) FF += WF.units * (this.arena.unitBytes + (WF.twin ? this.arena.twinUnitBytes : 0));
        return FF
      }
      holds(FF) {
        return FF.start + FF.length <= this.usable
      }
      lost(FF) {
        return this.dropped || FF.start + FF.length > this.ZF
      }
      write(FF, WF) {
        const {
          device: SF,
          unitBytes: CF
        } = this.arena;
        for (const AF of this.backings) {
          const uF = (AF.units - FF.start) * CF;
          uF > 0 && SF.queue.writeBuffer(AF.buffer, FF.start * CF, WF, 0, Math.min(WF.byteLength, uF))
        }
      }
      writeLight(FF, WF) {
        const {
          device: SF,
          twinUnitBytes: CF,
          verticesPerUnit: AF
        } = this.arena, {
          light: uF,
          count: hF
        } = this.arena.twinLight(WF, Math.min(WF.length, FF.length * AF));
        for (const bW of this.backings) {
          bW.twin || (bW.twin = this.createBuffer(bW, !0));
          const WF = (bW.units - FF.start) * AF;
          WF > 0 && SF.queue.writeBuffer(bW.twin, FF.start * CF, uF, 0, Math.min(hF, WF))
        }
      }
      grow(FF) {
        this.arena.assertNotDrawing();
        const {
          device: WF,
          unitBytes: SF,
          label: CF
        } = this.arena, AF = this.backings[this.backings.length - 1], uF = new eb(FF), hF = WF.createCommandEncoder({
          label: `${CF}-grow`
        });
        uF.buffer = this.createBuffer(uF, !1), hF.copyBufferToBuffer(AF.buffer, 0, uF.buffer, 0, AF.units * SF), AF.twin && (uF.twin = this.createBuffer(uF, !0), hF.copyBufferToBuffer(AF.twin, 0, uF.twin, 0, AF.units * this.arena.twinUnitBytes)), WF.queue.submit([hF.finish()]), this.backings.push(uF), this.Bu.grow(FF)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const FF of this.backings) FF.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(FF, WF) {
        const {
          device: SF,
          unitBytes: CF,
          twinUnitBytes: AF,
          usage: uF,
          label: hF
        } = this.arena;
        SF.pushErrorScope("out-of-memory");
        const bW = SF.createBuffer({
          label: WF ? `${hF}-light` : hF,
          size: FF.units * (WF ? AF : CF),
          usage: (WF ? this.arena.twinUsage : uF) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, SF.popErrorScope().then((SF => {
          this.arena.awaitingVerdict--, this.settle(FF, WF, !SF, !0)
        }), (SF => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${hF} buffer, taken as failed: ${String(SF)}`), this.settle(FF, WF, !1, !1)
        })), bW
      }
      settle(FF, WF, SF, CF) {
        const AF = this.backings.indexOf(FF);
        if (!(this.dropped || AF < 0)) {
          if (!SF) {
            if (CF && this.arena.ranOutOfMemory(FF.units, FF.units * (WF ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === AF) return void this.drop();
            for (const FF of this.backings.splice(AF)) FF.destroy();
            return this.Bu.truncate(this.backings[AF - 1].units), this.growable = !1, void this.promote()
          }
          WF ? FF.twinReady = !0 : (FF.bufferReady = !0, this.arena.allocatedBuffer(FF.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: FF
        } = this;
        let WF = 0;
        for (; WF + 1 < FF.length && FF[WF].ready && FF[WF + 1].ready;) WF++;
        for (const SF of FF.splice(0, WF)) SF.destroy();
        this.refresh()
      }
      refresh() {
        const FF = this.backings[0];
        this.buffer = FF.buffer, this.twin = FF.twinReady ? FF.twin : null, this.usable = !this.dropped && FF.bufferReady ? FF.units : 0
      }
    }
    class Qb {
      constructor(FF, WF, SF, CF) {
        let {
          verticesPerUnit: AF = 1,
          twinUsage: uF = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = FF, this.unitBytes = WF, this.usage = SF, this.label = CF, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, PW.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), WF % 4 !== 0) throw new Error(`${CF}: ${WF}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = AF, this.twinUsage = uF, this.twinValueBytes = AF > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * AF
      }
      twinLight(FF, WF) {
        if (4 === this.twinValueBytes) return this.widened.length < WF && (this.widened = new Float32Array(Math.max(WF, 2 * this.widened.length))), this.widened.set(FF.subarray(0, WF)), {
          light: this.widened,
          count: WF
        };
        const SF = WF % this.verticesPerUnit;
        if (0 === SF) return {
          light: FF,
          count: WF
        };
        const CF = WF - SF + this.verticesPerUnit;
        return this.padded.length < CF && (this.padded = new Uint16Array(Math.max(CF, 2 * this.padded.length))), this.padded.set(FF.subarray(0, WF)), this.padded.fill(0, WF, CF), {
          light: this.padded,
          count: CF
        }
      }
      allocate(FF) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), FF > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const AF of this.pages) {
          const WF = AF.Bu.allocate(FF);
          if (WF >= 0) return {
            page: AF,
            start: WF,
            length: FF
          }
        }
        const WF = this.pages[this.pages.length - 1];
        if (null !== WF && void 0 !== WF && WF.canGrow) {
          const SF = Math.min(this.ceiling, Math.max(2 * WF.ZF, WF.ZF + FF));
          if (SF - WF.ZF >= FF) return WF.grow(SF), {
            page: WF,
            start: WF.Bu.allocate(FF),
            length: FF
          }
        }
        WF && WF !== this.pages[0] && 0 === WF.Bu.used && WF.drop();
        const SF = Math.floor(1048576 / this.unitBytes),
          CF = new Eb(this, Math.max(FF, Math.min(this.ceiling, SF)));
        return this.pages.push(CF), {
          page: CF,
          start: CF.Bu.allocate(FF),
          length: FF
        }
      }
      free(FF) {
        this.assertNotDrawing();
        const {
          page: WF
        } = FF;
        WF.Bu.free(FF.start, FF.length), 0 === WF.Bu.used && WF !== this.pages[0] && WF !== this.pages[this.pages.length - 1] && WF.drop()
      }
      remove(FF) {
        const WF = this.pages.indexOf(FF);
        WF >= 0 && this.pages.splice(WF, 1)
      }
      ranOutOfMemory(FF, WF) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${WF}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, FF), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, FF) / 2));
        const SF = performance.now();
        SF >= this.shortageUntil && (this.forgetFailedAt = SF + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = SF + 1e3)
      }
      allocatedBuffer(FF) {
        FF >= this.failed && (this.failed = 1 / 0);
        const WF = Math.min(2 * FF, Math.floor((FF + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, WF))
      }
      stats() {
        let FF = 0,
          WF = 0,
          SF = 0,
          CF = 0;
        for (const AF of this.pages) FF += AF.ZF, WF += AF.Bu.used, SF += AF.hasTwin ? AF.ZF * this.twinUnitBytes : 0, CF += AF.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: FF * this.unitBytes,
          usedBytes: WF * this.unitBytes,
          twinBytes: SF,
          allocatedBytes: CF
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: FF,
          maxStorageBufferBindingSize: WF
        } = this.device.limits;
        let SF = Math.floor(Math.min(67108864, FF) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (SF = Math.min(SF, Math.floor(WF / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (SF = Math.min(SF, Math.floor(WF / this.twinUnitBytes))), SF
      }
    }
    const rd = 16383;

    function gd(FF, WF, SF, CF, AF) {
      let uF = 0;
      for (let hF = SF; hF < CF; hF += rd) FF.drawIndexed(6 * Math.min(rd, CF - hF), 1, 0, WF + 4 * hF, AF), uF++;
      return uF
    }
    class td {
      constructor(FF, WF) {
        this.recordsGroup = WF, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const SF = DW.f.strideWithoutAtlas;
        this.vertexArena = new Qb(FF, SF, GPUBufferUsage.VERTEX, `terrain-vertices-${SF}`), this.quadArena = new Qb(FF, hb.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const CF = (0, LW.c)(new Uint16Array(98298), rd);
        this.quadPattern = FF.createBuffer({
          label: "terrain-quad-pattern",
          size: CF.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), FF.queue.writeBuffer(this.quadPattern, 0, CF)
      }
      set(FF, WF) {
        const SF = WF.packedVertices,
          CF = SF ? this.quadArena.allocate(FF.faceCount) : this.vertexArena.allocate(FF.vertexCount);
        if (!CF) return !1;
        FF.vertices = CF;
        const AF = SF ? new Uint8Array(SF.buffer, SF.byteOffset, SF.byteLength) : new Uint8Array(WF.vertices);
        return CF.page.write(CF, AF), !0
      }
      setLight(FF, WF) {
        const {
          vertices: SF
        } = FF;
        SF && 0 !== WF.length && SF.page.live && (WF.length < FF.vertexCount ? SF.page.arena.warnOnce("shortLight", `a part's ${WF.length} light values are fewer than its ${FF.vertexCount} vertices, so its light is left as it was`) : (SF.page.writeLight(SF, WF), FF.lit = !0))
      }
      lightFullSky(FF, WF) {
        this.fullSky.length < WF && (this.fullSky = new Uint16Array(Math.max(WF, 4096)).fill(Rb.g));
        for (const SF of FF) {
          const FF = SF.vertices;
          FF.page.live && (FF.page.writeLight(FF, this.fullSky), SF.lit = !0)
        }
      }
      backed(FF) {
        const {
          vertices: WF
        } = FF;
        return !!WF && WF.page.holds(WF)
      }
      lost(FF) {
        const {
          vertices: WF
        } = FF;
        return !!WF && WF.page.lost(WF)
      }
      release(FF) {
        FF.vertices && FF.vertices.page.arena.free(FF.vertices), FF.vertices = null, FF.lit = !1
      }
      setDrawing(FF) {
        this.forgetBound()
      }
      draw(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WF.faceCount;
        const uF = WF.vertices,
          hF = uF.page,
          bW = SF ? hF.twin : null;
        if (!hF.holds(uF) || SF && !bW) return 0;
        const {
          verticesPerUnit: dF
        } = hF.arena;
        let PF = uF.start * dF;
        this.boundPattern || (FF.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const RF = CF + AF;
        if (dF > 1) return hF.buffer === this.boundRecords && bW === this.boundRecordsLight || (FF.setBindGroup(1, this.recordsGroup(hF.buffer, bW)), this.boundRecords = hF.buffer, this.boundRecordsLight = bW), gd(FF, PF, CF, RF, WF.slot);
        hF.buffer !== this.boundVertices && (FF.setVertexBuffer(0, hF.buffer), this.boundVertices = hF.buffer), bW && bW !== this.boundLight && (FF.setVertexBuffer(1, bW), this.boundLight = bW);
        const iW = WF.faceCount;
        return RF <= iW ? gd(FF, PF, CF, RF, WF.slot) : gd(FF, PF, CF, iW, WF.slot) + gd(FF, PF, Math.max(CF, iW) - iW, RF - iW, WF.slot)
      }
      get buffersAwaitingVerdict() {
        let FF = 0;
        for (const WF of this.arenas()) FF += WF.awaitingVerdict;
        return FF
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Tb {
      constructor(FF, WF, SF, CF) {
        this.device = FF, this.splitBefore = WF, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = FF.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const AF = FF.createShaderModule({
          label: "scene-depth-copy",
          code: (uF = SF._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${uF?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var uF;
        FF.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: AF,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: AF,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((FF => {
          this.pipeline = FF, this.building = !1
        }), (FF => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", FF)
        })), SF._executeWithTransmission = () => this.execute(SF, CF)
      }
      get compiling() {
        return this.building
      }
      setWanted(FF) {
        this.wanted = FF
      }
      setPlanes(FF, WF) {
        FF === this.near && WF === this.far || (this.near = FF, this.far = WF, this.unproject[0] = FF / (WF - FF), this.unproject[1] = WF * FF / (WF - FF), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var FF, WF;
        return null !== (FF = null === (WF = this.copy) || void 0 === WF ? void 0 : WF.view) && void 0 !== FF ? FF : null
      }
      execute(FF, WF) {
        var SF;
        null === (SF = this.retired) || void 0 === SF || SF.destroy(), this.retired = null;
        const CF = FW(WF),
          AF = FF._transparentBindings,
          uF = this.wanted && this.pipeline ? this.splitIndex(AF) : -1,
          hF = FF._colorAttachment,
          bW = hF.resolveTarget;
        uF >= 0 && (hF.resolveTarget = void 0, Hh(FF, !0));
        let dF = CF.beginRenderPass(FF._renderPassDescriptor);
        dF.setBindGroup(0, FF._sceneBG);
        let PF = this.drawList(dF, WF, FF._opaqueBindings, 0, FF._opaqueBindings.length);
        if (PF += this.drawList(dF, WF, FF._directBindings, 0, FF._directBindings.length), PF += this.drawList(dF, WF, AF, 0, uF >= 0 ? uF : AF.length), dF.end(), uF < 0) return PF;
        Hh(FF);
        const RF = FF._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: iW,
            stencilLoadOp: eF
          } = RF,
          EF = hF.loadOp;
        hF.resolveTarget = bW;
        try {
          this.copyDepth(CF, FF), hF.loadOp = "load", RF.depthLoadOp = "load", eF && (RF.stencilLoadOp = "load"), dF = CF.beginRenderPass(FF._renderPassDescriptor), dF.setBindGroup(0, FF._sceneBG), PF += this.drawList(dF, WF, AF, uF, AF.length), dF.end()
        } finally {
          hF.loadOp = EF, RF.depthLoadOp = iW, RF.stencilLoadOp = eF
        }
        return PF
      }
      splitIndex(FF) {
        for (let WF = 0; WF < FF.length; WF++)
          if (FF[WF].renderable === this.splitBefore) return WF;
        return -1
      }
      drawList(FF, WF, SF, CF, AF) {
        let uF = null,
          hF = 0;
        for (let bW = CF; bW < AF; bW++) {
          const CF = SF[bW],
            AF = CF.renderable.mesh;
          AF && !1 === AF.visible || (CF.pipeline !== uF && (FF.setPipeline(CF.pipeline), uF = CF.pipeline), hF += CF.draw(FF, WF))
        }
        return hF
      }
      copyDepth(FF, WF) {
        var SF, CF;
        const AF = (null !== (SF = WF._config.depth) && void 0 !== SF ? SF : WF._config.rt)._depthTexture,
          uF = (null === (CF = this.copy) || void 0 === CF ? void 0 : CF.source) === AF ? this.copy : this.remakeCopy(AF),
          hF = FF.beginRenderPass(uF.pass);
        hF.setPipeline(this.pipeline), hF.setBindGroup(0, uF.bindGroup), hF.draw(3), hF.end()
      }
      remakeCopy(FF) {
        var WF, SF;
        this.retired = null !== (WF = null === (SF = this.copy) || void 0 === SF ? void 0 : SF.texture) && void 0 !== WF ? WF : null;
        const CF = this.device.createTexture({
            label: "scene-depth",
            size: [FF.width, FF.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          AF = CF.createView(),
          uF = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: FF.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          hF = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: AF,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: FF,
          texture: CF,
          view: AF,
          bindGroup: uF,
          pass: hF
        }, this.copy
      }
    }
    const ad = "rgba8unorm";

    function kd(FF) {
      return FF ? 15 : 1
    }
    class qd {
      constructor(FF, WF, SF, CF) {
        this.device = FF, this.terrain = CF, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = WF._targetSignature._sampleCount > 1, this.cameraBuffer = FF.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = FF.createBindGroupLayout({
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
        const AF = FF.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = FF.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: AF,
          entries: []
        });
        const uF = FF.createShaderModule({
          label: "sun-shadow-mask",
          code: (hF = this.edge, `${(0,mS.w)()}${IS({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${hF?mC:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${kd(hF)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${hF?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var hF;
        FF.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: FF.createPipelineLayout({
            bindGroupLayouts: [this.layout, AF, AF, zh(FF, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: uF,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: uF,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((FF => {
          this.pipeline = FF, this.building = !1
        }), (FF => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", FF)
        }));
        const bW = WF._executeWithTransmission;
        WF._executeWithTransmission = FF => this.execute(WF, SF, (() => bW ? bW(FF) : function(FF, WF) {
          const SF = FW(WF).beginRenderPass(FF._renderPassDescriptor);
          SF.setBindGroup(0, FF._sceneBG);
          let CF = Vb(SF, WF, FF._opaqueBindings);
          return CF += Vb(SF, WF, FF._directBindings), CF += Vb(SF, WF, FF._transparentBindings), SF.end(), CF
        }(WF, SF)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var FF, WF;
        return null !== (FF = null === (WF = this.targets) || void 0 === WF ? void 0 : WF.maskView) && void 0 !== FF ? FF : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(FF) {
        ! function(FF, WF) {
          const SF = FF.worldMatrix,
            CF = FF.projectionMatrix,
            AF = 1 / CF[0],
            uF = 1 / CF[5],
            hF = FF.far * FF.near / (FF.far - FF.near);
          WF[0] = FF.eye[0], WF[1] = FF.eye[1], WF[2] = FF.eye[2], WF[3] = 2 ** -23 / hF, WF[4] = SF[0] * AF, WF[5] = SF[1] * AF, WF[6] = SF[2] * AF, WF[7] = hF, WF[8] = SF[4] * uF, WF[9] = SF[5] * uF, WF[10] = SF[6] * uF, WF[11] = FF.near / (FF.far - FF.near), WF[12] = SF[8], WF[13] = SF[9], WF[14] = SF[10], WF[15] = 0
        }(FF, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(FF, WF, SF) {
        if (this.retire(), !this.terrain.readsMask) return SF();
        const CF = this.targetsFor(FF),
          AF = FW(WF),
          uF = FF._renderPassDescriptor.depthStencilAttachment;
        this.edge || (CF.prepass.depthStencilAttachment.view = uF.view);
        const hF = this.terrain.drawPrepass(AF, CF.prepass, FF._sceneBG);
        if (0 === hF) return SF();
        if (this.trace(AF, CF), this.edge) return hF + 1 + SF();
        const {
          depthLoadOp: bW,
          stencilLoadOp: dF
        } = uF;
        uF.depthLoadOp = "load", dF && (uF.stencilLoadOp = "load");
        try {
          return hF + 1 + SF()
        } finally {
          uF.depthLoadOp = bW, uF.stencilLoadOp = dF
        }
      }
      trace(FF, WF) {
        const SF = this.terrain.sunShadowGroup(),
          CF = FF.beginRenderPass(WF.trace);
        this.pipeline && SF && (CF.setPipeline(this.pipeline), CF.setBindGroup(0, WF.bindGroup), CF.setBindGroup(1, this.empty), CF.setBindGroup(2, this.empty), CF.setBindGroup(3, SF), CF.draw(3)), CF.end()
      }
      retire() {
        const FF = this.retired;
        var WF;
        FF && (FF.mask.destroy(), FF.normals.destroy(), null === (WF = FF.depth) || void 0 === WF || WF.destroy(), this.retired = null)
      }
      targetsFor(FF) {
        var WF, SF;
        const CF = (null !== (WF = FF._config.depth) && void 0 !== WF ? WF : FF._config.rt)._depthTexture;
        return (null === (SF = this.targets) || void 0 === SF ? void 0 : SF.source) === CF ? this.targets : this.remake(FF, CF)
      }
      remake(FF, WF) {
        var SF;
        this.retired = this.targets;
        const CF = [WF.width, WF.height],
          AF = this.device.createTexture({
            label: "sun-shadow-mask",
            size: CF,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          uF = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: CF,
            format: ad,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          hF = null !== (SF = FF._targetSignature._depthStencilFormat) && void 0 !== SF ? SF : WF.format,
          bW = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: CF,
            format: hF,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          dF = FF._renderPassDescriptor.depthStencilAttachment,
          PF = hF.includes("stencil"),
          RF = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: uF.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: bW ? bW.createView() : dF.view,
              depthClearValue: dF.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...PF ? {
                stencilClearValue: dF.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          iW = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== bW && void 0 !== bW ? bW : WF).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: uF.createView()
            }]
          }),
          eF = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: AF.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [kd(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: WF,
          mask: AF,
          maskView: AF.createView(),
          normals: uF,
          depth: bW,
          bindGroup: iW,
          prepass: RF,
          trace: eF
        }, this.targets
      }
    }

    function Vb(FF, WF, SF) {
      let CF = null,
        AF = 0;
      for (const uF of SF) {
        const SF = uF.renderable.mesh;
        SF && !1 === SF.visible || (uF.pipeline !== CF && (FF.setPipeline(uF.pipeline), CF = uF.pipeline), AF += uF.draw(FF, WF))
      }
      return AF
    }
    const Nb = 6e4,
      Db = {
        status: "ok"
      },
      Lb = {
        status: "skipped"
      };
    async function md(FF, WF) {
      const {
        isCancelled: SF
      } = FF;
      if (SF()) return {
        status: "Qh"
      };
      const {
        target: CF
      } = WF;
      if (!CF) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const AF = [],
        uF = Promise.all(Array.from(new Set(FF.materials), (async SF => {
          AF.push(await async function(FF, WF, SF, CF) {
            const AF = {
              lighting: FF.lighting,
              dirLightCount: Math.min(FF.dirLightCount, 4),
              CC: FF.runtime
            };
            try {
              const uF = WF.material(CF);
              return uF && bA(WF.programKey(uF, !1, AF)) ? (await uF.ready, FF.isCancelled() ? Db : uF.bindGroupLayout ? await async function(FF, WF, SF, CF) {
                const {
                  device: AF
                } = FF;
                let uF, hF;
                AF.pushErrorScope("validation");
                try {
                  uF = FF.pipelineBuild(WF, SF, CF)
                } finally {
                  hF = AF.popErrorScope().catch((() => null))
                }
                const [bW, dF] = await Promise.all([hF, uF.built.then((() => null), (FF => null !== FF && void 0 !== FF ? FF : new Error("pipeline failed")))]);
                if (!bW && !dF) return Db;
                const PF = await Ob(uF.module),
                  RF = PF.length > 0 ? PF.map((FF => `${uF.name} ${FF.lineNum}:${FF.linePos}: ${FF.message}`)).join("\n") : `${uF.name}: ${xd(null!==dF&&void 0!==dF?dF:bW)}`;
                return {
                  status: "failed",
                  material: WF.model.name,
                  message: RF
                }
              }(WF, uF, WF.programKey(uF, "none" !== uF.texture, AF), SF): (console.warn(`Shader pack: skipped the compile check for "${CF.name}", whose textures failed to load`), Lb)) : Db
            } catch (uF) {
              return {
                status: "failed",
                material: CF.name,
                message: xd(uF)
              }
            }
          }(FF, WF, CF, SF))
        }))),
        hF = function(FF, WF) {
          let SF, CF, AF = !1;
          const uF = new Promise((uF => {
            var hF;
            SF = setTimeout((() => {
              uF("timeout")
            }), null !== (hF = WF.timeoutMs) && void 0 !== hF ? hF : Nb), CF = setInterval((() => {
              WF.isCancelled() && uF("Qh")
            }), 50), FF.lost.then((() => {
              AF = !0, uF("lost")
            }))
          }));
          return {
            signal: uF,
            lost: () => AF,
            dispose: () => {
              clearTimeout(SF), clearInterval(CF)
            }
          }
        }(WF.device, FF);
      let bW;
      try {
        bW = await Promise.race([uF.then((() => "done")), hF.signal])
      } finally {
        hF.dispose()
      }
      if ("Qh" === bW || SF()) return {
        status: "Qh"
      };
      const dF = AF.find((FF => "failed" === FF.status));
      return dF && "lost" !== bW && !hF.lost() && await new Promise((FF => {
        setTimeout(FF, 0)
      })), "lost" === bW || hF.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : dF ? {
        status: "failed",
        failure: {
          material: dF.material,
          message: dF.message
        }
      } : "timeout" === bW ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(PF=FF.timeoutMs)&&void 0!==PF?PF:Nb)/1e3} s`), {
        status: "skipped"
      }) : AF.some((FF => "skipped" === FF.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var PF
    }
    async function Ob(FF) {
      if (!FF) return [];
      try {
        return (await FF.getCompilationInfo()).messages.filter((FF => "error" === FF.type))
      } catch {
        return []
      }
    }

    function xd(FF) {
      var WF;
      return null !== (WF = null === FF || void 0 === FF ? void 0 : FF.message) && void 0 !== WF ? WF : String(FF)
    }

    function Zb(FF, WF, SF, CF) {
      bA(FF) ? Ob(SF).then((FF => {
        const [SF] = FF;
        XA("terrain", WF, CF, SF ? `${SF.lineNum}:${SF.linePos} error: ${SF.message}` : null)
      })) : XA("terrain", WF, CF)
    }
    var ob = SF(35887),
      Yb = SF(35902),
      Mb = SF(35912),
      cd = SF(35840);

    function Gb(FF, WF, SF, CF, AF) {
      const uF = Math.hypot(SF[0], SF[1], SF[2]);
      if (!(uF > 0)) return;
      const hF = [SF[0] / uF, SF[1] / uF, SF[2] / uF],
        bW = [Math.floor(WF[0]), Math.floor(WF[1]), Math.floor(WF[2])],
        dF = [0, 0, 0],
        PF = [1 / 0, 1 / 0, 1 / 0],
        RF = [1 / 0, 1 / 0, 1 / 0];
      for (let EF = 0; EF < 3; EF++) hF[EF] > 0 ? (dF[EF] = 1, PF[EF] = (bW[EF] + 1 - WF[EF]) / hF[EF], RF[EF] = 1 / hF[EF]) : hF[EF] < 0 && (dF[EF] = -1, PF[EF] = (bW[EF] - WF[EF]) / hF[EF], RF[EF] = -1 / hF[EF]);
      const {
        MC: iW
      } = FF;
      let eF = FF.ACF(bW[0], bW[1], bW[2]);
      for (;;) {
        const WF = PF[0] < PF[1] ? PF[0] < PF[2] ? 0 : 2 : PF[1] < PF[2] ? 1 : 2;
        if (PF[WF] > CF) return;
        const SF = dF[WF] > 0 ? bW[WF] + 1 : bW[WF];
        bW[WF] += dF[WF], PF[WF] += RF[WF];
        const uF = FF.ACF(bW[0], bW[1], bW[2]),
          hF = uF !== eF && !(FF.opaque[eF] && FF.opaque[uF]);
        if (hF) {
          const CF = [bW[0], bW[1], bW[2]];
          CF[WF] = SF;
          const uF = Math.floor(CF[0] / iW),
            hF = Math.floor(CF[1] / iW),
            dF = Math.floor(CF[2] / iW);
          !FF.isDrawn(uF, hF, dF) && FF.hasParts(uF, hF, dF) && AF.add(`${uF},${hF},${dF}`)
        }
        if (hF && FF.occluders[uF]) return;
        eF = uF
      }
    }

    function zd(FF, WF) {
      return FF.group - WF.group || FF.nearest - WF.nearest
    }
    class Ib {
      constructor(FF, WF) {
        this.device = FF, this.tL = WF, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var FF;
        const WF = null !== (FF = this.free.pop()) && void 0 !== FF ? FF : this.next++;
        if (8 * WF >= this.data.length) {
          const FF = new Float32Array(2 * this.data.length);
          FF.set(this.data), this.data = FF, this.words = new Uint32Array(FF.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.tL()
        }
        return WF
      }
      release(FF) {
        this.free.push(FF)
      }
      set(FF, WF, SF, CF, AF) {
        const uF = 8 * FF + tA;
        this.data[uF] = WF, this.data[uF + 1] = SF, this.data[uF + 2] = CF, this.setVisibility(FF, AF)
      }
      setVisibility(FF, WF) {
        this.data[8 * FF + TC] = WF, this.markDirty(FF, FF)
      }
      setFaces(FF, WF, SF) {
        const CF = 8 * FF;
        this.words[CF + aA] = WF, this.words[CF + kA] = SF, this.markDirty(FF, FF)
      }
      markDirty(FF, WF) {
        this.dirtyMin = Math.min(this.dirtyMin, FF), this.dirtyMax = Math.max(this.dirtyMax, WF)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const fb = gA,
      yd = !0;
    const sb = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: fb.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      nb = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Hb {
      constructor(FF) {
        this.device = FF, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(PC), this.dirLightUniforms = this.frameUniforms.subarray(dC.dirLights, dC.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, PW.e)(), this.faceGroups = !0, this.visibilityGraph = yd, this.visCull = yd, this.visCheck = !1, this.visCullMinDistance = Mb.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Ub, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.CC = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new td(FF, ((FF, WF) => this.recordsGroup(FF, WF))), this.slots = new Ib(FF, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = WW(FF), this.frameLayout = FF.createBindGroupLayout({
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
        }), this.frameBuffer = FF.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = FF.createSampler({
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
          bind: (FF, WF) => this.createBinding(this.opaqueRenderable, WF, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (FF, WF) => this.createBinding(this.transparentRenderable, WF, !0)
        }
      }
      installSceneDepth(FF, WF) {
        this.sceneDepth = new Tb(this.device, this.transparentRenderable, FF, WF)
      }
      createFrameBindGroup() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== FF && void 0 !== FF ? FF : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== WF && void 0 !== WF ? WF : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(FF, WF) {
        const SF = null !== WF && void 0 !== WF ? WF : FF;
        let CF = this.recordsGroups.get(SF);
        return CF || (CF = this.createFrameBindGroup(FF, WF), this.recordsGroups.set(SF, CF)), CF
      }
      setChunkMesh(FF, WF, SF) {
        var CF;
        let AF = this.chunks.get(FF);
        AF ? this.geometry.release(AF) : (AF = {
          mesh: FF,
          slot: this.slots.allocate(),
          origin: [SF[0], SF[1], SF[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: FF.visibility,
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
        }, this.chunks.set(FF, AF), this.writeSlot(AF)), AF.material = FF.material ? this.materialFor(FF.material) : null, AF.packed = !!WF.packedVertices, AF.vertexCount = (0, hb.g)(WF), AF.faceCount = AF.vertexCount / 4;
        const uF = null !== (CF = WF.faceGroups) && void 0 !== CF ? CF : null;
        if (AF.faceGroups = uF, uF) {
          const FF = ob.o;
          AF.planePX = uF[FF], AF.planeNX = uF[FF + 1], AF.planePY = uF[FF + 2], AF.planeNY = uF[FF + 3], AF.planePZ = uF[FF + 4], AF.planeNZ = uF[FF + 5]
        }
        this.drawWhole(AF), 0 !== AF.faceCount && (this.geometry.set(AF, WF) ? (AF.packed && this.slots.setFaces(AF.slot, AF.vertices.start + AF.faceCount, AF.faceCount), WF.gA && this.setChunkMeshLight(FF, WF.gA)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${AF.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(FF, WF) {
        const SF = this.chunks.get(FF);
        SF && this.geometry.setLight(SF, WF)
      }
      drawStats() {
        let FF = this.transparent.length;
        for (const WF of this.opaqueBatches) FF += WF.meshes.length;
        return {
          drawn: FF,
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
      removeChunkMesh(FF) {
        const WF = this.chunks.get(FF);
        WF && (this.geometry.release(WF), this.slots.release(WF.slot), this.chunks.delete(FF))
      }
      remeshLost(FF, WF) {
        this.geometry.release(WF), WF.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** WF.lostRemeshes++);
        const SF = FF.uW,
          [CF, AF, uF] = SF.ERF(WF.origin[0], WF.origin[1], WF.origin[2]),
          hF = SF.DA.LA(CF, AF, uF);
        hF && (hF.VA = !0, hF.YA = !0, SF.NA(hF, !1))
      }
      chooseFaceRanges(FF, WF, SF) {
        const CF = this.faceRanges;
        FF.faceMask = SF, FF.rangeCount = (0, Yb.j)(WF, SF, CF), FF.first0 = CF[0], FF.count0 = CF[1], FF.first1 = CF[2], FF.count1 = CF[3]
      }
      drawWhole(FF) {
        FF.faceMask = -1, FF.faceEpoch = -1, FF.rangeCount = 1, FF.first0 = 0, FF.count0 = FF.faceCount
      }
      writeSlot(FF) {
        const [WF, SF, CF] = this.originOffset;
        this.slots.set(FF.slot, FF.origin[0] - WF, FF.origin[1] - SF, FF.origin[2] - CF, FF.visibility)
      }
      materialFor(FF) {
        const WF = this.materials.get(FF);
        if (WF) return WF;
        const SF = Pb(FF);
        if (!SF) return this.warnOnce(`material:${FF.name}`, `Lite terrain cannot draw material "${FF.name}"; its chunks are skipped.`), null;
        const {
          model: CF,
          atlas: AF,
          texture: uF,
          animated: hF,
          uniformData: bW
        } = SF, dF = {
          id: this.materials.size,
          model: CF,
          texture: uF,
          animated: hF,
          uniformData: bW,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${FF.name}`,
            size: bW.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: SF.liquid,
          customRenderMat: SF.customRenderMat,
          atlasCount: 0,
          cuF: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(FF, dF), this.device.queue.writeBuffer(dF.uniformBuffer, 0, bW), dF.ready = this.createMaterialBindGroup(dF, AF).catch((WF => {
          console.error(`Lite terrain failed to load the textures of material "${FF.name}"`, WF)
        })), dF
      }
      materialLayout(FF) {
        const WF = function(FF) {
            const WF = ["uniforms"];
            if ("atlas" === FF.texture) {
              FF.animated && WF.push("animData"), WF.push("sampler");
              for (let SF = 0; SF < FF.atlasCount; SF++) WF.push("textureArray")
            } else "single" === FF.texture && WF.push("sampler", "texture");
            return WF
          }(FF),
          SF = WF.join(",");
        let CF = this.materialLayouts.get(SF);
        if (!CF) {
          const FF = GPUShaderStage.FRAGMENT;
          CF = this.device.createBindGroupLayout({
            label: `terrain-material-${SF}`,
            entries: WF.map(((WF, SF) => {
              switch (WF) {
                case "uniforms":
                  return {
                    binding: SF, visibility: GPUShaderStage.VERTEX | FF, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: SF, visibility: GPUShaderStage.VERTEX | FF, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: SF, visibility: FF, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: SF, visibility: FF, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: SF, visibility: FF, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(SF, CF)
        }
        return CF
      }
      async createMaterialBindGroup(FF, WF) {
        const SF = [{
          buffer: FF.uniformBuffer
        }];
        if (WF) {
          const {
            urls: CF,
            pixels: AF,
            layerWidth: uF
          } = WF.sources, hF = await Promise.all(CF.map(((FF, WF) => {
            var SF;
            return fA(this.device, FF, null !== (SF = null === AF || void 0 === AF ? void 0 : AF[WF]) && void 0 !== SF ? SF : null, uF)
          })));
          FF.atlasCount = hF.length, FF.cuF = hF[0].layerWidth, FF.atlasLayers = hF[0].layers, WF.animDataPerTex && SF.push({
            buffer: ZA(this.device, Float32Array.from(WF.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), SF.push(this.sampler);
          for (const FF of hF) SF.push(FF.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === FF.texture) {
          const {
            url: WF
          } = FF.model.diffuseTexture.source, {
            pixels: CF,
            width: AF,
            height: uF
          } = await zu(WF);
          SF.push(this.sampler), SF.push(YA(this.device, CF, AF, uF, 1, `terrain-${WF}`).createView({
            dimension: "2d"
          }))
        }
        const CF = this.materialLayout(this.programKey(FF, !1));
        FF.bindGroupLayout = CF, FF.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${FF.model.name}`,
          layout: CF,
          entries: SF.map(((FF, WF) => ({
            binding: WF,
            resource: FF
          })))
        })
      }
      programKey(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const CF = SF ? SF.lighting : this.lighting,
          AF = SF ? SF.CC : this.CC,
          uF = {
            texture: FF.texture,
            atlasCount: FF.atlasCount,
            cuF: FF.cuF,
            atlasLayers: FF.atlasLayers,
            animated: FF.animated,
            alphaTest: FF.model.transparencyMode === LF.n.alphaTest,
            lighting: CF,
            dirLightCount: SF ? SF.dirLightCount : this.dirLightCount,
            packed: WF
          };
        if (!AF) return uF;
        const hF = this.shaderPackFields(FF, AF),
          bW = "atlas" === FF.texture && FF.model.transparencyMode === LF.n.opaque && CC(hF.packVariant);
        return {
          ...uF,
          ...hF,
          alphaTest: uF.alphaTest || bW
        }
      }
      shaderPackFields(FF, WF) {
        return FF.customRenderMat ? WC : function(FF, WF) {
          if (!FF) return WC;
          const SF = FF.defineFor(WF ? "liquid" : "terrain");
          return 0 === SF ? WC : {
            packVariant: SF,
            liquid: WF
          }
        }(WF, FF.liquid)
      }
      isBlended(FF) {
        return FF.model.transparencyMode === LF.n.alphaBlend
      }
      shaderModule(FF, WF) {
        let SF = this.modules.get(FF);
        return SF || (SF = this.device.createShaderModule({
          label: WF,
          code: FF
        }), this.modules.set(FF, SF)), SF
      }
      pipelineFor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!FF.bindGroupLayout) return null;
        const AF = this.programKey(FF, WF);
        if (!CF) return this.pipelineOf(FF, AF, SF);
        const uF = {
            ...AF,
            resting: CF
          },
          hF = this.pipelineId(FF, uF, SF),
          bW = this.pipelines.get(hF);
        if (bW) return bW;
        const dF = this.pipelineOf(FF, AF, SF);
        return dF && void 0 === bW && this.startPipeline(hF, FF, uF, SF), dF
      }
      pipelineOf(FF, WF, SF) {
        const CF = this.pipelineId(FF, WF, SF),
          AF = this.pipelines.get(CF);
        return void 0 !== AF ? AF : (this.startPipeline(CF, FF, WF, SF), null)
      }
      pipelineId(FF, WF, SF) {
        return Kb(WF, this.isBlended(FF), FF.model.backFaceCulling, SF)
      }
      pipelineBuild(FF, WF, SF) {
        var CF;
        const AF = this.pipelineId(FF, WF, SF);
        return null !== (CF = this.builds.get(AF)) && void 0 !== CF ? CF : this.startPipeline(AF, FF, WF, SF)
      }
      startPipeline(FF, WF, SF, CF) {
        var AF;
        this.pipelines.set(FF, null);
        const uF = OC(SF),
          hF = this.isBlended(WF),
          bW = this.shadowMask && CF._depthStencilFormat ? function(FF, WF, SF, CF) {
            if (void 0 === FF.packVariant || FF.liquid || WF) return "none";
            const AF = (0, OW.e)(FF.packVariant);
            return null === AF || void 0 === AF || !AF.sunShadow || !GS(AF, SF) || AF.discards || FF.alphaTest && CC(FF.packVariant) ? "none" : CF ? "edge" : "plain"
          }(SF, hF, !!this.sunShadow, CF._sampleCount > 1) : "none";
        let dF;
        try {
          dF = xA(SF, !!this.sunShadow, bW)
        } catch (gW) {
          if (!bA(SF)) throw gW;
          return this.failedPackBuild(FF, SF, uF, gW)
        }
        const PF = this.shaderModule(dF, uF),
          RF = [];
        SF.packed || (RF.push(function(FF, WF) {
          const SF = [{
            shaderLocation: fb.position,
            offset: DW.f.aA,
            format: "float32x3"
          }, {
            shaderLocation: fb.normal,
            offset: DW.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: fb.color,
            offset: DW.f.colorOffset,
            format: "unorm8x4"
          }];
          return FF && SF.push({
            shaderLocation: fb.uv,
            offset: DW.f.uvOffset,
            format: "float32x2"
          }), WF && SF.push({
            shaderLocation: fb.blockFlagWords,
            offset: DW.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: DW.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: SF
          }
        }("none" !== SF.texture, bA(SF))), SF.lighting && RF.push(sb));
        const iW = WF.model.backFaceCulling,
          eF = {
            label: uF,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, WF.bindGroupLayout, ...yh(this.device, SF, !!this.sunShadow, "none" !== bW)]
            }),
            vertex: {
              module: PF,
              entryPoint: "mainVertex",
              buffers: RF
            },
            fragment: JF({
              module: PF,
              entryPoint: "mainFragment"
            }, CF, hF ? nb : null),
            depthStencil: CF._depthStencilFormat ? {
              format: CF._depthStencilFormat,
              depthCompare: null !== (AF = CF._depthCompare) && void 0 !== AF ? AF : SW,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: CF._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: iW ? "back" : "none"
            }
          },
          EF = SF.resting ? 0 : 1;
        this.compiling += EF;
        const QF = "none" === bW ? this.device.createRenderPipelineAsync(eF) : this.startMaskPipelines(PF, eF, "edge" === bW);
        QF.then((WF => {
          this.compiling -= EF, this.pipelines.set(FF, WF)
        }), (FF => {
          this.compiling -= EF, console.error(`Lite terrain pipeline ${uF} failed`, FF), Zb(SF, uF, PF, FF)
        }));
        const rW = {
          name: uF,
          module: PF,
          built: QF
        };
        return this.builds.set(FF, rW), rW
      }
      startMaskPipelines(FF, WF, SF) {
        const CF = WF.depthStencil,
          AF = this.device.createRenderPipelineAsync(SF ? WF : {
            ...WF,
            depthStencil: {
              ...CF,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          uF = this.device.createRenderPipelineAsync({
            ...WF,
            label: `${WF.label}-prepass`,
            fragment: {
              module: FF,
              entryPoint: "prepassFragment",
              targets: [{
                format: ad
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([AF, uF]).then((FF => {
          let [WF, SF] = FF;
          return this.prepassOf.set(WF, SF), this.maskPipelines++, WF
        }))
      }
      failedPackBuild(FF, WF, SF, CF) {
        console.error(`Lite terrain pipeline ${SF} failed`, CF), Zb(WF, SF, null, CF);
        const AF = Promise.reject(CF);
        AF.catch((() => {}));
        const uF = {
          name: SF,
          module: null,
          built: AF
        };
        return this.builds.set(FF, uF), uF
      }
      checkShaderPack(FF) {
        return md(FF, {
          device: this.device,
          target: this.target,
          material: FF => this.materialFor(FF),
          programKey: (FF, WF, SF) => this.programKey(FF, WF, SF),
          pipelineBuild: (FF, WF, SF) => this.pipelineBuild(FF, WF, SF)
        })
      }
      createBinding(FF, WF, SF) {
        return this.target = WF, {
          renderable: FF,
          pipeline: hW(this.device, WF),
          draw: FF => {
            this.geometry.setDrawing(!0);
            try {
              return SF ? this.drawTransparent(FF, WF) : this.drawOpaque(FF, WF)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(FF, WF) {
        var SF, CF, AF, uF;
        const {
          iS: hF
        } = FF;
        this.lighting = FF.KA;
        const bW = (0, ub.q)(WF);
        this.dirLightCount = Math.min(bW, 4), this.CC = null !== (SF = hF.CC) && void 0 !== SF ? SF : null, bW > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(FF, WF), this.animateMaterials(WF.animTick);
        const dF = hF.OW,
          PF = dF[0] !== this.originOffset[0] || dF[1] !== this.originOffset[1] || dF[2] !== this.originOffset[2];
        PF && (this.originOffset[0] = dF[0], this.originOffset[1] = dF[1], this.originOffset[2] = dF[2]);
        const RF = WF.eye;
        this.eye[0] = RF[0], this.eye[1] = RF[1], this.eye[2] = RF[2], this.writeShaderPackInputs();
        const iW = WF.projectionMatrix,
          eF = 0 === iW[15];
        let EF = 0;
        (PF || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: QF
        } = this;
        bS(this.transparentRenderable._worldCenter, WF, AW), this.resetBatches(eF), this.transparent.length = 0, this.unlit.length = 0;
        const rW = hF.uW.ZhF,
          gW = rW / 2 * Math.sqrt(3);
        let tW = 0;
        const TF = !!this.CC && SC(this.CC.defineFor("liquid"));
        let aW = !1;
        const kW = null !== (CF = null === (AF = hF.Qm) || void 0 === AF ? void 0 : AF.visibility) && void 0 !== CF ? CF : null,
          qW = this.visCull && eF && 0 === this.compiling && null !== kW && hF.uW.DPF[0] >= this.visCullMinDistance ? this.target : null,
          VF = this.visPassable,
          NF = this.visCandidates,
          DF = this.visCandidateBatches;
        VF.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let LF = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let mW = 0;
        const OF = (FF, SF) => {
          if (!SF) return this.transparent.push(FF), void(mW += 2 * FF.faceCount);
          if (null !== FF.faceGroups && SF.faceCull) {
            if (0 === EF && (EF = (0, Yb.b)(iW, WF.renderWidth, WF.renderHeight), EF !== this.faceFocalPx && (this.faceFocalPx = EF, QF = ++this.faceEpoch)), FF.faceEpoch !== QF) {
              FF.faceEpoch = QF;
              const WF = Math.sqrt(FF.distance) + gW,
                SF = (0, Yb.e)(FF.planePX, FF.planeNX, FF.planePY, FF.planeNY, FF.planePZ, FF.planeNZ, this.eye[0] - (FF.origin[0] - this.originOffset[0]), this.eye[1] - (FF.origin[1] - this.originOffset[1]), this.eye[2] - (FF.origin[2] - this.originOffset[2]), (0, Yb.d)(WF, EF));
              SF !== FF.faceMask && this.chooseFaceRanges(FF, FF.faceGroups, SF)
            }
            if (0 === FF.rangeCount) return
          } else - 1 !== FF.faceMask && this.drawWhole(FF);
          SF.meshes.push(FF), mW += 2 * ((FF.rangeCount > 0 ? FF.count0 : 0) + (FF.rangeCount > 1 ? FF.count1 : 0))
        };
        for (const ZF of this.chunks.values()) {
          PF && this.writeSlot(ZF);
          const FF = ZF.mesh.visibility;
          FF !== ZF.visibility && (ZF.visibility = FF, this.slots.setVisibility(ZF.slot, FF));
          const {
            material: SF
          } = ZF;
          this.geometry.lost(ZF) && performance.now() >= ZF.lostRetryAt && this.remeshLost(hF, ZF);
          const CF = !(null === SF || void 0 === SF || !SF.bindGroup) && this.geometry.backed(ZF),
            AF = CF && this.lighting && !ZF.vertices.page.twin;
          if (qW && (Number.isNaN(ZF.key) && (ZF.ci = Math.floor(ZF.origin[0] / rW), ZF.cj = Math.floor(ZF.origin[1] / rW), ZF.ck = Math.floor(ZF.origin[2] / rW), ZF.key = (0, cd.g)(ZF.ci, ZF.cj, ZF.ck)), (!CF || FF < 1 || AF || !this.batchDraws(SF, ZF.packed, qW)) && this.visSeeThrough(ZF, qW) && VF.add(ZF.key)), !CF) continue;
          AF || (ZF.lostRemeshes = 0);
          const uF = ZF.origin[0] - this.originOffset[0],
            bW = ZF.origin[1] - this.originOffset[1],
            dF = ZF.origin[2] - this.originOffset[2];
          if (!(0, Uh.c)(WF.frustum, uF, bW, dF, rW)) continue;
          const RF = uF + rW / 2 - this.eye[0],
            iW = bW + rW / 2 - this.eye[1],
            EF = dF + rW / 2 - this.eye[2];
          if (ZF.distance = RF * RF + iW * iW + EF * EF, this.lighting && !ZF.lit && (tW = Math.max(tW, ZF.vertexCount), this.unlit.push(ZF)), AF) continue;
          const QF = this.isBlended(SF) ? null : this.batchFor(SF, ZF.packed, ZF.vertices.page, 1 === FF, eF);
          qW ? (NF[LF] = ZF, DF[LF++] = QF) : OF(ZF, QF)
        }
        const xW = qW ? this.sweepVisibility(FF, WF, kW) : null;
        null === (uF = (0, Ou.B)(hF)) || void 0 === uF || uF.update(WF.frustum, this.originOffset, rW, xW);
        for (let ZF = 0; ZF < LF; ZF++) {
          const FF = NF[ZF];
          !xW || xW.isDrawn(FF.ci, FF.cj, FF.ck) ? OF(FF, DF[ZF]) : (this.visCulledParts++, this.visCulledTriangles += 2 * FF.faceCount)
        }
        for (const ZF of this.transparent) aW ||= TF && ZF.material.liquid && !ZF.material.customRenderMat;
        this.submittedTriangles = mW, xW && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(FF, WF, xW)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(aW) : aW && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && tW > 0 && this.geometry.lightFullSky(this.unlit, tW);
        for (const ZF of this.opaqueBatches) this.chunkSorter.sort(ZF.meshes, 1) || ZF.meshes.sort(wb);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Xb)
      }
      sweepVisibility(FF, WF, SF) {
        const {
          uW: CF
        } = FF.iS, AF = CF.ZhF, uF = this.visPassable, hF = this.eye[0] + this.originOffset[0], bW = this.eye[1] + this.originOffset[1], dF = this.eye[2] + this.originOffset[2];
        if (!SF.eyeClear(hF, bW, dF, WF.near, WF.projectionMatrix, CF)) return null;
        const [PF, RF] = CF.DPF, iW = SF.update(hF, bW, dF, AF, PF, RF, uF);
        return this.visSweeps = SF.sweeps, iW ? SF : null
      }
      visSeeThrough(FF, WF) {
        const {
          material: SF
        } = FF;
        return (!SF || !this.isBlended(SF)) && (FF.mesh.visibility < 1 || !(null !== SF && void 0 !== SF && SF.bindGroup) || FF.faceCount > 0 && (!this.geometry.backed(FF) || this.lighting && !FF.vertices.page.twin) || !this.batchDraws(SF, FF.packed, WF))
      }
      batchDraws(FF, WF, SF) {
        var CF;
        const AF = WF ? 2 : 0;
        if (FF === this.visDrawsMaterial && function(FF, WF) {
            return 0 !== (FF & 1 << WF)
          }(this.visDrawsBits, AF)) return 0 !== (this.visDrawsBits & 2 << AF);
        let uF = null !== (CF = this.visBatchDraws.get(FF)) && void 0 !== CF ? CF : 0;
        if (!(uF & 1 << AF)) {
          uF |= 1 << AF | (!!FF.bindGroupLayout && this.canDraw(FF, WF) && !!this.pipelines.get(this.pipelineId(FF, this.programKey(FF, WF), SF)) ? 2 << AF : 0), this.visBatchDraws.set(FF, uF)
        }
        return this.visDrawsMaterial = FF, this.visDrawsBits = uF, 0 !== (uF & 2 << AF)
      }
      runVisCheck(FF, WF, SF) {
        const {
          iS: CF
        } = FF, {
          uW: AF
        } = CF, uF = AF.ZhF, hF = new Set;
        for (const EF of this.chunks.values()) hF.add(EF.key);
        const bW = TA.Matrix.FromArray(WF.viewProjectionMatrix).invert(),
          [dF, PF, RF] = this.originOffset,
          iW = new TA.HC,
          eF = function(FF, WF, SF, CF) {
            const AF = new Set;
            for (let uF = 0; uF < 27; uF++)
              for (let hF = 0; hF < 48; hF++) {
                const bW = SF((hF + .5) / 48 * 2 - 1, (uF + .5) / 27 * 2 - 1);
                Gb(FF, WF, [bW[0] - WF[0], bW[1] - WF[1], bW[2] - WF[2]], CF, AF)
              }
            return AF
          }({
            ACF: (FF, WF, SF) => AF.ACF(FF, WF, SF),
            occluders: SF.occluders,
            opaque: SF.opaque,
            MC: uF,
            isDrawn: (FF, WF, CF) => SF.isDrawn(FF, WF, CF),
            hasParts: (FF, WF, SF) => hF.has((0, cd.g)(FF, WF, SF))
          }, [this.eye[0] + dF, this.eye[1] + PF, this.eye[2] + RF], ((FF, WF) => (TA.HC.TransformCoordinatesFromFloatsToRef(FF, WF, .5, bW, iW), [iW.x + dF, iW.y + PF, iW.z + RF])), (AF.DPF[0] + 1) * uF);
        this.visViolations = eF.size;
        for (const EF of eF) this.warnOnce(`vis:${EF}`, `Lite terrain cave culling skipped chunk ${EF}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var FF;
        null !== (FF = this.CC) && void 0 !== FF && FF.isRunning() && (this.shaderPackInputs ??= new su(this.device, this.CC.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.CC, this.eye, this.lighting))
      }
      bindShaderPackInputs(FF, WF, SF) {
        var CF, AF, uF, hF;
        let bW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: dF
        } = this.shaderPackFields(WF, SF);
        if (void 0 === dF) return;
        this.shaderPackInputs || (this.shaderPackInputs = new su(this.device, SF.textureLayers(), this.sunShadow), this.shaderPackInputs.write(SF, this.eye, this.lighting));
        const PF = SC(dF) ? null !== (CF = null === (AF = this.sceneDepth) || void 0 === AF ? void 0 : AF.view) && void 0 !== CF ? CF : this.standIn() : null,
          RF = bW ? null !== (uF = null === (hF = this.shadowMask) || void 0 === hF ? void 0 : hF.view) && void 0 !== uF ? uF : this.standIn() : null;
        this.shaderPackInputs.bind(FF, PF, fu(dF, !!this.sunShadow), RF)
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
        var FF, WF;
        return null !== (FF = null === (WF = this.shaderPackInputs) || void 0 === WF ? void 0 : WF.bindGroupFor(null, !0)) && void 0 !== FF ? FF : null
      }
      resetBatches(FF) {
        const WF = this.opaqueBatches;
        let SF = 0;
        for (const CF of WF) CF.meshes.length > 0 && (CF.meshes.length = 0, CF.faceCull = this.batchFaceCull(CF.material, FF), WF[SF++] = CF);
        WF.length = SF
      }
      orderBatches() {
        const FF = this.opaqueBatches;
        for (let WF = 0; WF < FF.length; WF++) {
          const SF = FF[WF];
          SF.group = WF;
          for (let CF = 0; CF < WF; CF++) {
            const WF = FF[CF];
            if (WF.material === SF.material && WF.packed === SF.packed) {
              SF.group = WF.group;
              break
            }
          }
          SF.nearest = SF.meshes.length > 0 ? SF.meshes[0].distance : 1 / 0
        }
        FF.sort(zd)
      }
      batchFor(FF, WF, SF, CF, AF) {
        for (const hF of this.opaqueBatches)
          if (hF.material === FF && hF.packed === WF && hF.page === SF && hF.resting === CF) return hF;
        const uF = {
          material: FF,
          packed: WF,
          page: SF,
          resting: CF,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(FF, AF)
        };
        return this.opaqueBatches.push(uF), uF
      }
      batchFaceCull(FF, WF) {
        return !(!WF || !(0, ob.t)(FF.model)) && (!this.CC || ! function(FF) {
          var WF;
          return !(null === (WF = (0, OW.e)(FF)) || void 0 === WF || !WF.movesVertices)
        }(this.shaderPackFields(FF, this.CC).packVariant))
      }
      writeFrameUniforms(FF, WF) {
        const SF = this.frameUniforms,
          CF = dC;
        if ((0, ub.s)(FF, SF), SF[CF.fogInfos] = WF.fogEnabled ? WF.fogMode : 0, SF[CF.fogInfos + 1] = WF.fogStart, SF[CF.fogInfos + 2] = WF.fogEnd, SF[CF.fogInfos + 3] = WF.fogDensity, SF.set(WF.fogColour, CF.fogColour), SF[CF.outputHeight] = WF.renderHeight, SF.set(WF.ambientColour, CF.sceneAmbient), (0, ub.p)(WF, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const WF = (0, hb.k)(FF.RA, FF.IC, FF.fC);
          for (let FF = 0; FF < 4; FF++) SF[CF.aoLevels + FF] = WF[FF] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, SF)
      }
      animateMaterials(FF) {
        const WF = RC.anim;
        for (const SF of this.materials.values()) SF.animated && (SF.uniformData[WF] = FF, this.device.queue.writeBuffer(SF.uniformBuffer, 4 * WF, SF.uniformData, WF, 1))
      }
      canDraw(FF, WF) {
        return !("atlas" === FF.texture && !WF) || (this.warnOnce(`stride:${FF.id}`, `Lite terrain: material "${FF.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(FF, WF) {
        let SF = 0;
        FF.setBindGroup(1, this.frameBindGroup);
        for (const CF of this.opaqueBatches) {
          if (!CF.meshes.length || !this.canDraw(CF.material, CF.packed)) continue;
          const AF = this.pipelineFor(CF.material, CF.packed, WF, CF.resting);
          AF && (FF.setPipeline(AF), FF.setBindGroup(2, CF.material.bindGroup), this.CC && this.bindShaderPackInputs(FF, CF.material, this.CC, this.prepassOf.has(AF)), SF += this.drawBatch(FF, CF))
        }
        return SF
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(FF, WF, SF) {
        const CF = this.target,
          AF = this.CC;
        if (!CF || !AF || 0 === this.maskPipelines) return 0;
        let uF = 0,
          hF = null;
        this.geometry.setDrawing(!0);
        try {
          for (const bW of this.opaqueBatches) {
            if (!bW.meshes.length || !this.canDraw(bW.material, bW.packed)) continue;
            const dF = this.pipelineFor(bW.material, bW.packed, CF, bW.resting),
              PF = dF && this.prepassOf.get(dF);
            PF && (hF || (hF = FF.beginRenderPass(WF), hF.setBindGroup(0, SF), hF.setBindGroup(1, this.frameBindGroup)), hF.setPipeline(PF), hF.setBindGroup(2, bW.material.bindGroup), this.bindShaderPackInputs(hF, bW.material, AF, !0), uF += this.drawBatch(hF, bW))
          }
        } finally {
          var bW;
          null === (bW = hF) || void 0 === bW || bW.end(), this.geometry.setDrawing(!1)
        }
        return uF
      }
      drawBatch(FF, WF) {
        let SF = 0;
        for (const CF of WF.meshes) {
          const {
            rangeCount: WF
          } = CF;
          WF > 0 && (SF += this.geometry.draw(FF, CF, this.lighting, CF.first0, CF.count0), WF > 1 && (SF += this.geometry.draw(FF, CF, this.lighting, CF.first1, CF.count1)))
        }
        return SF
      }
      drawTransparent(FF, WF) {
        let SF = 0,
          CF = null,
          AF = null;
        FF.setBindGroup(1, this.frameBindGroup);
        for (const uF of this.transparent) {
          const hF = uF.material;
          if (!this.canDraw(hF, uF.packed)) continue;
          const bW = this.pipelineFor(hF, uF.packed, WF);
          bW && (bW !== CF && (FF.setPipeline(bW), CF = bW, this.CC && this.bindShaderPackInputs(FF, hF, this.CC)), hF !== AF && (FF.setBindGroup(2, hF.bindGroup), AF = hF), SF += this.geometry.draw(FF, uF, this.lighting))
        }
        return SF
      }
    }

    function Kb(FF, WF, SF, CF) {
      return `${OC(FF)}|${FF.atlasLayers}|${FF.cuF}|${WF}|${SF}|${CF._colorFormat}|${CF._depthStencilFormat}|${CF._sampleCount}`
    }

    function wb(FF, WF) {
      return FF.distance - WF.distance
    }

    function Xb(FF, WF) {
      return WF.distance - FF.distance
    }
    class Ub {
      constructor() {
        this.left = []
      }
      sort(FF, WF) {
        for (let SF = 0; SF < FF.length; SF++) {
          const WF = FF[SF].distance;
          if (WF - WF !== 0) return !1
        }
        return this.sortRange(FF, 0, FF.length, WF), !0
      }
      sortRange(FF, WF, SF, CF) {
        if (SF - WF <= 16) {
          for (let AF = WF + 1; AF < SF; AF++) {
            const SF = FF[AF],
              uF = CF * SF.distance;
            let hF = AF - 1;
            for (; hF >= WF && CF * FF[hF].distance > uF; hF--) FF[hF + 1] = FF[hF];
            FF[hF + 1] = SF
          }
          return
        }
        const AF = WF + SF >>> 1;
        if (this.sortRange(FF, WF, AF, CF), this.sortRange(FF, AF, SF, CF), CF * FF[AF - 1].distance <= CF * FF[AF].distance) return;
        const {
          left: uF
        } = this, hF = AF - WF;
        for (let RF = 0; RF < hF; RF++) uF[RF] = FF[WF + RF];
        let bW = 0,
          dF = AF,
          PF = WF;
        for (; bW < hF && dF < SF;) FF[PF++] = CF * FF[dF].distance < CF * uF[bW].distance ? FF[dF++] : uF[bW++];
        for (; bW < hF;) FF[PF++] = uF[bW++]
      }
    }
    const Bb = Math.ceil(102);

    function jd(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WF;
      const uF = Math.min(WF, SF),
        hF = new Uint32Array(FS(CF));
      for (let bW = 0; bW < CF; bW++) {
        const WF = Math.floor(bW * uF / CF),
          SF = Math.max(WF + 1, Math.floor((bW + 1) * uF / CF));
        for (let dF = 0; dF < CF; dF++) {
          const PF = Math.floor(dF * uF / CF),
            RF = Math.max(PF + 1, Math.floor((dF + 1) * uF / CF));
          let iW = 0;
          for (let CF = WF; CF < SF; CF++)
            for (let WF = PF; WF < RF; WF++) FF[CF * AF + WF] >= Bb && iW++;
          if (2 * iW >= (SF - WF) * (RF - PF)) {
            const FF = dF + CF * bW;
            hF[FF >>> 5] |= 1 << (31 & FF)
          }
        }
      }
      return hF
    }

    function vd(FF) {
      return Math.max(1, Math.min(16, FF))
    }
    class Jb {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = FF, this.loadTexture = WF, this.warn = SF, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(FF, WF) {
        return (FF.YSF !== this.builtVersion || this.blockCaster.length !== WF) && (this.build(FF, WF), !0)
      }
      build(FF, WF) {
        this.builtVersion = FF.YSF;
        const SF = new Uint16Array(WF),
          CF = new Map;
        for (let AF = 1; AF < WF; AF++) {
          const WF = this.classify(FF, AF, CF);
          if (null === WF || WF === jS) {
            SF[AF] = null === WF ? 0 : jS;
            continue
          }
          let uF = this.byKey.get(WF.key);
          void 0 === uF && (uF = this.allocate(WF), this.byKey.set(WF.key, uF)), SF[AF] = uF
        }
        this.blockCaster = SF, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(FF, WF) {
        const SF = FF.WuF[WF];
        if ("function" !== typeof SF) return SF;
        try {
          return SF()
        } catch (CF) {
          return this.warnOnce(`Sun shadows: no caster option for block ${WF}: ${CF instanceof Error?CF.message:String(CF)}`), null
        }
      }
      classify(FF, WF, SF) {
        const CF = this.option(FF, WF);
        if ("none" === CF) return null;
        if (CF && CF.planes.length > 0) {
          const FF = CF.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(FF)}`,
            planes: FF
          }
        }
        if (FF.RS[WF]) return null;
        const AF = FF.eS[WF] ? FF.cCF(WF) : null;
        if (AF && AF.length >= 6) {
          const FF = function(FF) {
            const WF = new Uint32Array(16);
            for (let SF = 0; SF + 6 <= FF.length; SF += 6) {
              const CF = [0, 1, 2].map((WF => Math.max(0, Math.ceil(8 * FF[SF + WF] - .5)))),
                AF = [0, 1, 2].map((WF => Math.min(7, Math.floor(8 * FF[SF + WF + 3] - .5))));
              for (let FF = CF[2]; FF <= AF[2]; FF++)
                for (let SF = CF[1]; SF <= AF[1]; SF++)
                  for (let uF = CF[0]; uF <= AF[0]; uF++) {
                    const CF = uF + 8 * (SF + 8 * FF);
                    WF[CF >>> 5] |= 1 << (31 & CF)
                  }
            }
            return WF
          }(AF);
          return function(FF) {
            return FF.every((FF => 4294967295 === FF))
          }(FF) ? jS : FF.every((FF => 0 === FF)) ? null : {
            kind: "shape",
            key: `shape:${FF.join(",")}`,
            mask: FF
          }
        }
        if (FF.KSF[WF] || !FF.iu[WF]) return null;
        const uF = [0, 1, 2, 3, 4, 5].map((CF => {
          const AF = FF.eA[6 * WF + CF];
          let uF = SF.get(AF);
          return void 0 === uF && (uF = function(FF) {
            if (!FF || FF.ku) return null;
            const {
              MAF: WF,
              cuF: SF,
              YAF: CF
            } = FF;
            if (!WF || !SF || !(SF > 0) || void 0 === CF || !(CF >= 0)) return null;
            const AF = WF[0],
              uF = SF * SF * 4;
            if (!AF || AF.byteLength < uF) return null;
            const hF = Math.floor(AF.byteLength / uF),
              bW = WF[Math.floor(CF / hF)];
            if (!bW) return null;
            const dF = new Uint8Array(bW.buffer, bW.byteOffset, bW.byteLength),
              PF = CF % hF * uF;
            if (PF + uF > dF.length) return null;
            const RF = new Uint8Array(SF * SF);
            let iW = !1;
            for (let eF = 0; eF < RF.length; eF++) RF[eF] = dF[PF + 4 * eF + 3], iW ||= RF[eF] < Bb;
            return iW ? {
              alpha: RF,
              width: SF
            } : null
          }(FF.au(AF)), SF.set(AF, uF)), uF
        }));
        if (uF.every((FF => null === FF))) return jS;
        const hF = vd(Math.max(...uF.map((FF => {
            var WF;
            return null !== (WF = null === FF || void 0 === FF ? void 0 : FF.width) && void 0 !== WF ? WF : 1
          })))),
          bW = new Uint32Array(FS(hF)).fill(4294967295),
          dF = uF.map((FF => null === FF ? bW : jd(FF.alpha, FF.width, FF.width, hF)));
        return {
          kind: "cutout",
          key: `cutout:${hF}:${dF.map((FF=>FF.join(","))).join("|")}`,
          size: hF,
          faces: dF
        }
      }
      allocate(FF) {
        if (this.nextCaster >= WS) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const WF = this.nextCaster++;
        if (this.writeCaster(WF, vS, 0, 0, 0), "shape" === FF.kind) {
          const SF = this.allocateMask(FF.mask.length);
          SF >= 0 && (this.sink(SF, FF.mask), this.writeCaster(WF, JW, SF, 0, 8))
        } else if ("cutout" === FF.kind) {
          const SF = FS(FF.size),
            CF = this.allocateMask(6 * SF);
          if (CF >= 0) {
            const AF = new Uint32Array(6 * SF);
            FF.faces.forEach(((FF, WF) => {
              AF.set(FF, WF * SF)
            })), this.sink(CF, AF), this.writeCaster(WF, lW, CF, 0, FF.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(WF, FF.planes).finally((() => {
          this.planesLoading--
        })));
        return WF
      }
      async loadPlanes(FF, WF) {
        const SF = await Promise.all(WF.map((FF => this.texture(FF.texture))));
        if (SF.some((FF => null === FF))) return;
        const CF = SF,
          AF = vd(Math.max(...CF.map((FF => Math.min(FF.width, FF.height))))),
          uF = FS(AF),
          hF = this.allocateMask(WF.length * (4 + uF));
        if (hF < 0) return;
        const bW = new Uint32Array(WF.length * (4 + uF)),
          dF = 4 * WF.length;
        WF.forEach(((FF, WF) => {
          const SF = hF + dF + WF * uF;
          bW.set(function(FF, WF) {
            const [SF, CF] = FF.tangent, AF = Math.hypot(SF, CF) || 1, uF = SF / AF, hF = CF / AF, bW = FF.centre[0] * hF - FF.centre[1] * uF, dF = new Uint32Array(4);
            return new Float32Array(dF.buffer, 0, 3).set([uF, hF, bW]), dF[3] = WF, dF
          }(FF, SF), 4 * WF), bW.set(jd(CF[WF].alpha, CF[WF].width, CF[WF].height, AF), dF + WF * uF)
        })), this.sink(hF, bW), this.writeCaster(FF, pW, hF, WF.length, AF)
      }
      texture(FF) {
        let WF = this.textures.get(FF);
        return WF || (WF = this.loadTexture(FF).catch((WF => (this.warn(`Sun shadows: no mask for ${FF}: ${WF instanceof Error?WF.message:String(WF)}`), null))), this.textures.set(FF, WF)), WF
      }
      allocateMask(FF) {
        if (this.nextMaskWord + FF > SS) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const WF = 32768 + this.nextMaskWord;
        return this.nextMaskWord += FF, WF
      }
      writeCaster(FF, WF, SF, CF, AF) {
        this.sink(0 + 4 * FF, Uint32Array.of(WF, SF, CF, AF))
      }
      warnOnce(FF) {
        this.warned.has(FF) || (this.warned.add(FF), this.warn(FF))
      }
    }
    var pb = SF(36108);

    function lb(FF) {
      return !FF.VA && !FF.QRF && !FF.FA
    }

    function Fd() {
      return {
        bricks: new Uint32Array(sW),
        cells: new Uint16Array(32768),
        special: new Uint8Array(fW)
      }
    }
    class Wd {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = FF, this.writeVoxels = WF, this.writePool = SF, this.warn = CF, this.eyeChunk = null, this.slotChunk = new Array(YW).fill(null), this.slotVersion = new Float64Array(YW).fill(-1), this.slotPool = new Array(YW).fill(null), this.starved = new Uint8Array(YW), this.queue = [], this.queued = new Uint8Array(YW), this.queueSorted = !0, this.freePool = new Uint32Array(CS), this.freeCount = CS, this.casterTable = null, this.warnedPool = !1, this.scratch = Fd(), this.victimScratch = Fd(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * YW), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let AF = 0; AF < CS; AF++) this.freePool[AF] = 65535 - AF
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return CS - this.freeCount
      }
      chunkAdded(FF) {
        if (null === this.eyeChunk || !this.inRadius(FF.i, FF.j, FF.k)) return;
        const WF = XW(FF.i, FF.j, FF.k);
        this.slotChunk[WF] = FF, this.slotVersion[WF] = -1, this.enqueue(WF)
      }
      update(FF, WF, SF) {
        const CF = this.casters.blockCaster;
        if (CF !== this.casterTable) {
          this.casterTable = CF;
          for (let FF = 0; FF < YW; FF++) this.slotVersion[FF] = -1, this.slotChunk[FF] && this.enqueue(FF)
        }
        const AF = Math.floor(FF[0] / 32),
          uF = Math.floor(FF[1] / 32),
          hF = Math.floor(FF[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== AF || this.eyeChunk[1] !== uF || this.eyeChunk[2] !== hF) && (this.eyeChunk = [AF, uF, hF], this.follow(WF), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let bW = 0; bW < YW; bW++) {
          const FF = this.slotChunk[bW];
          FF && (FF.ZdF || FF.CA !== this.slotVersion[bW]) && this.enqueue(bW)
        }
        this.drain(SF), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(FF, WF) {
        this.records.set(WF, 4 * FF), this.windowTopStale = !0, this.writeVoxels(4 * FF, WF)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const FF = this.records;
        let WF = -1 / 0;
        for (let CF = 0; CF < FF.length; CF += 4) {
          const SF = 255 & FF[CF + 3];
          SF !== GW && SF !== zS || !this.inRadius(FF[CF], FF[CF + 1], FF[CF + 2]) || (WF = Math.max(WF, FF[CF + 1] * xS + (FF[CF + 3] >>> 8)))
        }
        const SF = WF === -1 / 0 ? 1 : WF + HW;
        SF !== this.windowTop[0] && (this.windowTop[0] = SF, this.writeVoxels(nW, this.windowTop))
      }
      follow(FF) {
        const WF = this.eyeChunk,
          [SF, CF, AF] = ZW;
        for (let hF = -AF; hF <= AF; hF++)
          for (let AF = -CF; AF <= CF; AF++)
            for (let CF = -SF; CF <= SF; CF++) {
              var uF;
              const SF = WF[0] + CF,
                bW = WF[1] + AF,
                dF = WF[2] + hF,
                PF = XW(SF, bW, dF),
                RF = this.slotChunk[PF];
              if (RF && !RF.ZdF && RF.i === SF && RF.j === bW && RF.k === dF) continue;
              const iW = null !== (uF = FF(SF, bW, dF)) && void 0 !== uF ? uF : null;
              RF && (RF.i !== SF || RF.j !== bW || RF.k !== dF) && this.slotPool[PF] && (this.release(PF), this.record.fill(0), this.writeRecord(PF, this.record)), this.slotChunk[PF] = iW, this.slotVersion[PF] = -1, (iW || RF) && this.enqueue(PF)
            }
      }
      requeueStarved() {
        for (let FF = 0; FF < YW; FF++) this.starved[FF] && this.slotChunk[FF] && this.enqueue(FF)
      }
      enqueue(FF) {
        this.queued[FF] || (this.queued[FF] = 1, this.queue.push(FF), this.queueSorted = !1)
      }
      drain(FF) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const FF = new Map;
          for (const WF of this.queue) FF.set(WF, this.slotDistance(WF));
          this.queue.sort(((WF, SF) => FF.get(SF) - FF.get(WF))), this.queueSorted = !0
        }
        const WF = performance.now();
        let SF = 0;
        const CF = [];
        for (; this.queue.length > 0 && (0 === SF || performance.now() - WF < FF);) {
          const FF = this.queue.pop(),
            WF = this.slotChunk[FF];
          !WF || WF.ZdF || lb(WF) ? (this.queued[FF] = 0, this.encodeSlot(FF), SF++) : CF.push(FF)
        }
        for (let AF = CF.length - 1; AF >= 0; AF--) this.queue.push(CF[AF])
      }
      slotDistance(FF) {
        const WF = this.slotChunk[FF],
          SF = this.eyeChunk;
        return WF ? Math.max(Math.abs(WF.i - SF[0]), Math.abs(WF.j - SF[1]), Math.abs(WF.k - SF[2])) : 0
      }
      inRadius(FF, WF, SF) {
        const CF = this.eyeChunk,
          [AF, uF, hF] = ZW;
        return Math.abs(FF - CF[0]) <= AF && Math.abs(WF - CF[1]) <= uF && Math.abs(SF - CF[2]) <= hF
      }
      release(FF) {
        const WF = this.slotPool[FF];
        if (WF) {
          for (let FF = WF.length - 1; FF >= 0; FF--) this.freePool[this.freeCount++] = WF[FF];
          this.slotPool[FF] = null
        }
      }
      encodeSlot(FF) {
        var WF, SF, CF, AF, uF;
        let hF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          bW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const dF = null !== (WF = null === (SF = this.slotPool[FF]) || void 0 === SF ? void 0 : SF.length) && void 0 !== WF ? WF : 0;
        this.release(FF), this.starved[FF] = 0;
        const PF = this.slotChunk[FF],
          RF = this.record;
        if (!PF || PF.ZdF || !PF.MW) return this.slotChunk[FF] = null, this.slotVersion[FF] = -1, RF.fill(0), this.writeRecord(FF, RF), void(dF > 0 && this.requeueStarved());
        this.slotVersion[FF] = PF.CA;
        const iW = this.encodeBricks(PF, FF, hF, bW);
        RF[0] = PF.i, RF[1] = PF.j, RF[2] = PF.k, RF[3] = iW, this.writeRecord(FF, RF), null === (CF = this.encoded) || void 0 === CF || CF.call(this, PF), bW && (null !== (AF = null === (uF = this.slotPool[FF]) || void 0 === uF ? void 0 : uF.length) && void 0 !== AF ? AF : 0) < dF && this.requeueStarved()
      }
      encodeBricks(FF, WF, SF, CF) {
        if (FF.TC) return cS;
        const AF = this.casters.blockCaster,
          {
            data: uF,
            stride: hF,
            offset: bW
          } = FF.MW,
          [dF, PF, RF] = hF,
          iW = xS,
          {
            bricks: eF,
            cells: EF,
            special: QF
          } = SF;
        eF.fill(0), QF.fill(0);
        let rW = 0,
          gW = 0,
          tW = 0;
        for (let TF = 0; TF < iW; TF++) {
          const WF = TF >> 2,
            SF = 3 & TF,
            CF = FF.oS[TF],
            hF = CF === pb.f ? -1 : CF < AF.length ? AF[CF] : 0;
          if (0 !== hF)
            for (let FF = 0; FF < iW; FF++) {
              const CF = FF >> 2,
                aW = 3 & FF;
              let kW = bW + FF * dF + TF * PF;
              for (let FF = 0; FF < iW; FF++, kW += RF) {
                let bW = hF;
                if (bW < 0) {
                  const FF = uF[kW];
                  if (bW = FF < AF.length ? AF[FF] : 0, 0 === bW) continue
                }
                const dF = UW(CF, WF, FF >> 2),
                  PF = BW(aW, SF, 3 & FF);
                eF[3 * dF + (PF >>> 5)] |= 1 << (31 & PF), EF[dF * IW + PF] = bW, rW++, tW = TF, bW === jS ? gW++ : QF[dF] = 1
              }
            }
        }
        return 0 === rW ? cS : 32768 === gW ? GW | tW << 8 : (this.writePoolEntries(WF, SF, CF), this.writeVoxels(yS + WF * sW, eF), zS | tW << 8)
      }
      writePoolEntries(FF, WF, SF) {
        const {
          bricks: CF,
          cells: AF,
          special: uF
        } = WF, hF = this.entry;
        let bW = 0;
        for (let RF = 0; RF < fW; RF++) bW += uF[RF];
        if (0 === bW) return;
        SF && this.freeCount < bW && this.evictBeyond(FF, bW);
        const dF = new Uint32Array(SF ? Math.min(bW, this.freeCount) : 0);
        let PF = 0;
        for (let RF = 0; RF < fW; RF++) {
          if (!uF[RF]) continue;
          const SF = 3 * RF;
          if (PF === dF.length) {
            this.dropSpecials(WF, RF), this.starved[FF] = 1;
            continue
          }
          const bW = this.freePool[--this.freeCount];
          dF[PF++] = bW;
          for (let FF = 0; FF < IW; FF++) {
            const WF = CF[SF + (FF >>> 5)] >>> (31 & FF) & 1 ? AF[RF * IW + FF] : 0;
            1 & FF ? hF[FF >> 1] |= WF << 16 : hF[FF >> 1] = WF
          }
          CF[SF + 2] = bW + 1, this.writePool(AS + 32 * bW, hF)
        }
        dF.length > 0 && (this.slotPool[FF] = dF)
      }
      evictBeyond(FF, WF) {
        const SF = this.slotDistance(FF),
          CF = [];
        for (let AF = 0; AF < YW; AF++) AF !== FF && this.slotPool[AF] && this.slotDistance(AF) > SF && CF.push(AF);
        CF.sort(((FF, WF) => this.slotDistance(WF) - this.slotDistance(FF)));
        for (const AF of CF) {
          if (this.freeCount >= WF) return;
          const FF = this.slotChunk[AF];
          FF && !FF.ZdF && FF.MW && (FF.CA === this.slotVersion[AF] || lb(FF)) && this.encodeSlot(AF, this.victimScratch, !1)
        }
      }
      dropSpecials(FF, WF) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const SF = 3 * WF;
        for (let CF = 0; CF < IW; CF++) FF.cells[WF * IW + CF] !== jS && (FF.bricks[SF + (CF >>> 5)] &= ~(1 << (31 & CF)))
      }
    }
    var Sd = SF(35820);
    class Cd {
      constructor(FF) {
        this.device = FF, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new rC, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.uW = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = FF.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = FF.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(FF, WF, SF) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: CF
        } = this;
        CF.aC(FF, WF), SF.forEachSunShadowCaster((FF => {
          this.add(FF)
        })), CF.finish();
        const AF = 0 === CF.parts;
        if (AF && this.uploadedEmpty) return;
        this.uploadedEmpty = AF;
        const {
          queue: uF
        } = this.device, {
          words: hF
        } = CF;
        uF.writeBuffer(this.frameBuffer, 0, hF, 0, 16385), CF.refs > 0 && uF.writeBuffer(this.frameBuffer, 65540, hF, dS, CF.refs), AF || uF.writeBuffer(this.frameBuffer, 327684, hF, PS, CF.parts * bC)
      }
      add(FF) {
        const WF = this.gridFor(FF);
        if (!WF) return;
        const {
          frame: SF
        } = this, {
          uW: CF,
          worldAt: AF,
          instances: uF,
          instanceCount: hF,
          thin: bW
        } = FF;
        if (uF)
          for (let dF = 0; dF < hF; dF++) bW ? (tC(uF, 16 * dF, CF, AF, this.uW), SF.add(WF, this.uW)) : SF.add(WF, uF, 16 * dF);
        else SF.add(WF, CF, AF)
      }
      gridFor(FF) {
        let {
          geometry: WF,
          indexed: SF,
          first: CF,
          count: AF,
          skip: uF
        } = FF, hF = this.grids.get(WF);
        hF || (hF = new Map, this.grids.set(WF, hF));
        const bW = `${SF?CF:-1-CF}:${AF}:${null!==uF&&void 0!==uF?uF:""}`;
        let dF = hF.get(bW);
        if (void 0 !== dF || this.gridsFull) return dF;
        const PF = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = PF + 2;
        else if (PF > this.bakeDeadline) return;
        return dF = this.bake(WF, SF, CF, AF, uF), void 0 !== dF && hF.set(bW, dF), dF
      }
      bake(FF, WF, SF, CF, AF) {
        const uF = FF.vertexAttributes.find((FF => "position" === FF.kind)),
          hF = uF ? function(FF, WF, SF, CF) {
            let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const uF = FF => WF ? WF[SF + FF] : SF + FF,
              hF = FF => null !== AF && [0, 1, 2].some((WF => {
                const SF = uF(FF + WF);
                return SF >= AF[0] && SF < AF[1]
              })),
              bW = [1 / 0, 1 / 0, 1 / 0],
              dF = [-1 / 0, -1 / 0, -1 / 0];
            for (let TF = 0; TF + 2 < CF; TF += 3)
              if (!hF(TF))
                for (let WF = 0; WF < 3; WF++) {
                  const SF = uF(TF + WF);
                  for (let WF = 0; WF < 3; WF++) bW[WF] = Math.min(bW[WF], FF[3 * SF + WF]), dF[WF] = Math.max(dF[WF], FF[3 * SF + WF])
                }
            const PF = Math.max(dF[0] - bW[0], dF[1] - bW[1], dF[2] - bW[2]);
            if (!(PF > 0)) return null;
            const RF = PF / 64,
              iW = [0, 0, 0],
              eF = [0, 0, 0],
              EF = [0, 0, 0];
            for (let TF = 0; TF < 3; TF++) iW[TF] = Math.min(65, Math.ceil((dF[TF] - bW[TF]) / RF) + 1), eF[TF] = bW[TF] - RF / 2, EF[TF] = eF[TF] + iW[TF] * RF;
            const QF = new Uint32Array(Math.ceil(iW[0] * iW[1] * iW[2] / 32)),
              rW = new Float64Array(9),
              gW = [0, 0, 0],
              tW = [0, 0, 0];
            for (let TF = 0; TF + 2 < CF; TF += 3)
              if (!hF(TF)) {
                for (let WF = 0; WF < 3; WF++) {
                  const SF = uF(TF + WF);
                  for (let CF = 0; CF < 3; CF++) rW[3 * WF + CF] = FF[3 * SF + CF]
                }
                for (let FF = 0; FF < 3; FF++) {
                  const WF = Math.min(rW[FF], rW[3 + FF], rW[6 + FF]),
                    SF = Math.max(rW[FF], rW[3 + FF], rW[6 + FF]);
                  gW[FF] = Math.max(0, Math.floor((WF - eF[FF]) / RF - 1e-6)), tW[FF] = Math.min(iW[FF] - 1, Math.floor((SF - eF[FF]) / RF + 1e-6))
                }
                for (let FF = gW[2]; FF <= tW[2]; FF++)
                  for (let WF = gW[1]; WF <= tW[1]; WF++)
                    for (let SF = gW[0]; SF <= tW[0]; SF++)
                      if (TS(rW, eF[0] + (SF + .5) * RF, eF[1] + (WF + .5) * RF, eF[2] + (FF + .5) * RF, RF / 2)) {
                        const CF = SF + iW[0] * (WF + iW[1] * FF);
                        QF[CF >>> 5] |= 1 << (31 & CF)
                      }
              } return {
              words: QF,
              lo: eF,
              hi: EF,
              cell: RF,
              dims: iW
            }
          }((0, Sd.l)(uF, FF.vertexCount), WF ? FF.indexData : null, SF, CF, AF) : null;
        if (!hF) return null;
        const {
          words: bW,
          ...dF
        } = hF;
        if (this.gridTop + bW.length > iC) return void(this.gridsFull = !0);
        const PF = this.gridTop;
        return this.gridTop += bW.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * PF, bW), {
          ...dF,
          at: PF
        }
      }
    }
    const Ad = Math.cos(1 * Math.PI / 180);

    function ud(FF, WF) {
      return FF[0] * WF[0] + FF[1] * WF[1] + FF[2] * WF[2] < Ad
    }
    async function hd(FF) {
      const {
        pixels: WF,
        width: SF,
        height: CF
      } = await zu(FF), AF = new Uint8Array(SF * CF);
      for (let uF = 0; uF < AF.length; uF++) AF[uF] = WF[4 * uF + 3];
      return {
        width: SF,
        height: CF,
        alpha: AF
      }
    }
    class bP {
      constructor(FF, WF) {
        this.device = FF, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(kC.o), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = FF.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = FF.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * KW,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = FF.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [SF, CF, AF] = kC.q;
        this.volume = FF.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: SF,
            height: CF,
            depthOrArrayLayers: AF
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = FF.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = FF.createBuffer({
          label: "sun-shadow-volume-work",
          size: kC.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = WF ? new Cd(FF) : null, this.entityStandIn = WF ? null : FF.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var FF, WF;
        const SF = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || SF.push("Lite sun shadow volume pipeline compiling");
        const CF = null !== (FF = null === (WF = this.casters) || void 0 === WF ? void 0 : WF.planesLoading) && void 0 !== FF ? FF : 0;
        return CF > 0 && SF.push(`${CF} Lite sun shadow plane casters loading their textures`), SF
      }
      entries() {
        var FF, WF, SF, CF;
        const AF = mS.q;
        return [{
          binding: AF.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: AF.MW,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: AF.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: AF.volume,
          resource: this.volumeView
        }, {
          binding: AF.sampler,
          resource: this.volumeSampler
        }, {
          binding: AF.entities,
          resource: {
            buffer: null !== (FF = null === (WF = this.entities) || void 0 === WF ? void 0 : WF.frameBuffer) && void 0 !== FF ? FF : this.entityStandIn
          }
        }, {
          binding: AF.entityGrids,
          resource: {
            buffer: null !== (SF = null === (CF = this.entities) || void 0 === CF ? void 0 : CF.gridBuffer) && void 0 !== SF ? SF : this.entityStandIn
          }
        }]
      }
      prepare(FF, WF, SF) {
        var CF;
        this.entitiesThisFrame = !1;
        const AF = null !== (CF = null === SF || void 0 === SF ? void 0 : SF.sunShadowReach()) && void 0 !== CF ? CF : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!SF || !AF.sunShadow && !AF.airShadow) return void(this.volumeHolds = null);
        if (FF.uW.ZhF !== xS) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${FF.uW.ZhF}; everything is lit.`)));
        const uF = this.start(FF);
        this.casters.update(FF.dS, FF.dS.eS.length);
        const hF = FF.OW;
        for (let eF = 0; eF < 3; eF++) this.eye[eF] = WF[eF] + hF[eF];
        const bW = (0, kC.x)(this.eye);
        this.staleNear = bW;
        const dF = FF.uW.DA;
        uF.update(this.eye, ((FF, WF, SF) => dF.LA(FF, WF, SF)), 1);
        const PF = (0, kC.t)(SF.ehF()),
          RF = uF.eyeChunk,
          iW = this.uniformInts;
        for (let eF = 0; eF < 3; eF++) iW[eF] = RF[eF], iW[4 + eF] = bW[eF];
        this.entitiesThisFrame = null !== this.entities && AF.sunShadow, this.entitiesThisFrame && QS(this.uniformFloats, 8, WF, PF), null !== this.volumeHolds && (this.castersWritten || ud(PF, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(bW, PF, RF)
      }
      markStale(FF) {
        const WF = this.staleNear,
          SF = xS,
          CF = [FF.i * SF, FF.j * SF, FF.k * SF];
        for (let uF = 0; uF < 3; uF++)
          if (CF[uF] + SF <= WF[uF] - SF || CF[uF] >= WF[uF] + kC.q[uF] + SF) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const AF = this.stale;
        for (let uF = 0; uF < AF.length; uF += 4)
          if (AF[uF] === FF.i && AF[uF + 1] === FF.j && AF[uF + 2] === FF.k) return void(AF[uF + 3] = this.swept);
        if (16 === AF.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        AF.push(FF.i, FF.j, FF.k, this.swept)
      }
      writeStale() {
        const FF = this.swept,
          WF = this.stale;
        this.staleAll && FF - this.staleAllSwept >= kC.h && (this.staleAll = !1, WF.length = 0);
        let SF = 0;
        for (let AF = 0; AF < WF.length; AF += 4)
          if (FF - WF[AF + 3] < kC.h) {
            for (let FF = 0; FF < 4; FF++) WF[SF + FF] = WF[AF + FF];
            SF += 4
          } WF.length = SF;
        const CF = this.uniformInts;
        CF[3] = this.staleAll ? 5 : SF / 4;
        for (let AF = 0; AF < 4; AF++)
          for (let FF = 0; FF < 3; FF++) CF[16 + 4 * AF + FF] = 4 * AF < SF ? WF[4 * AF + FF] * xS : 0
      }
      writeUniform() {
        const FF = this.uniformInts;
        let WF = this.uniformWritten;
        if (WF) {
          let SF = !0;
          for (let CF = 0; CF < FF.length && SF; CF++) SF = FF[CF] === WF[CF];
          if (SF) return
        }
        WF ??= this.uniformWritten = new Int32Array(FF.length), WF.set(FF), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(FF) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, FF)
      }
      computeVolume(FF, WF, SF) {
        const CF = this.buildVolumePass();
        if (!CF) return void(this.volumeHolds = null);
        const AF = (0, kC.w)(this.volumeHolds, FF);
        this.volumeHolds = FF;
        const uF = 1 === AF.length && AF[0].size.every(((FF, WF) => FF === kC.q[WF])),
          hF = this.sweptChunk,
          bW = this.sweptLight,
          dF = WF[0] !== bW[0] || WF[1] !== bW[1] || WF[2] !== bW[2],
          PF = SF[0] !== hF[0] || SF[1] !== hF[1] || SF[2] !== hF[2],
          RF = dF && ud(WF, bW);
        if ((uF || this.written || PF || RF) && (this.fastLeft = kC.h), uF || this.written || dF || PF) {
          this.written = !1;
          for (let FF = 0; FF < 3; FF++) hF[FF] = SF[FF], bW[FF] = WF[FF];
          this.sweepLeft = uF ? 0 : kC.h
        }
        if (uF ? this.swept += kC.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, AF.push(...(0, kC.z)(FF, this.slice)), this.slice = (this.slice + 1) % kC.h, this.swept++), 0 === AF.length) return;
        const iW = (0, kC.B)(this.workData, WF, AF);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const eF = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          EF = eF.beginComputePass({
            label: "sun-shadow-volume"
          });
        EF.setPipeline(CF.pipeline), EF.setBindGroup(NS.group, CF.bindGroup), EF.dispatchWorkgroups(Math.ceil(iW / kC.l)), EF.end(), this.device.queue.submit([eF.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const FF = NS,
          WF = GPUShaderStage.COMPUTE,
          SF = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: FF.uniform,
              visibility: WF,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: FF.MW,
              visibility: WF,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: FF.special,
              visibility: WF,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: FF.work,
              visibility: WF,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: FF.volume,
              visibility: WF,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          CF = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: SF,
            entries: [{
              binding: FF.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: FF.MW,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: FF.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: FF.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: FF.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [SF]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: DS()
            }),
            entryPoint: "main"
          }
        }).then((FF => {
          this.volumePass = {
            pipeline: FF,
            bindGroup: CF
          }
        }), (FF => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(FF)}`)
        })), null
      }
      start(FF) {
        if (this.window) return this.window;
        const WF = (FF, WF) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * FF, WF)
        };
        this.casters = new Jb(((FF, SF) => {
          this.castersWritten = !0, WF(FF, SF)
        }), hd);
        const SF = new Wd(this.casters, ((FF, WF) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * FF, WF)
        }), WF);
        return SF.encoded = FF => {
          this.markStale(FF)
        }, FF.uW.on("chunkAdded", (FF => {
          SF.chunkAdded(FF)
        })), this.window = SF, SF
      }
    }
    var dd = SF(37096),
      Pd = SF(37103);
    const Rd = 0,
      iP = 3,
      ed = 4,
      Ed = 5;

    function Qd(FF, WF, SF, CF) {
      FF.drawOffset(WF, CF + Rd), WF[CF + iP] = FF.drawTime(), SF[CF + ed] = FF.ring.drawStart(), SF[CF + Ed] = FF.ring.drawCount()
    }
    const rP = `\n${EC}\n\nconst MAX_STOPS = ${Pd.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Pd.e/4}>,\n\tcolor1: array<vec4f, ${Pd.e}>,\n\tcolor2: array<vec4f, ${Pd.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Pd.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Pd.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var gP = SF(39466);
    class tP {
      constructor(FF, WF, SF, CF) {
        this.device = FF, this.system = WF, this.frameIndex = SF, this.uC = CF, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, gP.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (FF, WF) => {
          this.device.queue.writeBuffer(this.ring, FF * Pd.g * 4, this.system.ring.records, FF * Pd.g, (WF - FF) * Pd.g)
        };
        const {
          name: AF
        } = WF;
        this.ring = FF.createBuffer({
          label: `particles-${AF}`,
          size: WF.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = FF.createBuffer({
          label: `particles-uniforms-${AF}`,
          size: 4 * Pd.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(FF) {
        const WF = (0, gP.e)(this.system, this.uniformBits, FF);
        WF && (this.uniformBits = WF, this.device.queue.writeBuffer(this.uniforms, 0, WF))
      }
      bind() {
        const {
          system: FF
        } = this, WF = this.texture;
        (0, gP.l)(FF, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${FF.name}`,
          size: [Pd.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Pd.k
        }, [Pd.k, 1]));
        const SF = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.uC.whiteRamp;
        this.bindGroup && this.boundView === WF.view && this.boundSampler === WF.sampler && this.boundRamp === SF || (this.boundView = WF.view, this.boundSampler = WF.sampler, this.boundRamp = SF, this.bindGroup = this.device.createBindGroup({
          label: `particles-${FF.name}`,
          layout: this.uC.layout,
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
            resource: WF.sampler
          }, {
            binding: 3,
            resource: WF.view
          }, {
            binding: 4,
            resource: this.uC.rampSampler
          }, {
            binding: 5,
            resource: SF
          }]
        }))
      }
      destroy() {
        var FF;
        this.ring.destroy(), this.uniforms.destroy(), null === (FF = this.ramp) || void 0 === FF || FF.destroy()
      }
    }
    class Td {
      constructor(FF, WF) {
        this.device = FF, this.resources = WF, this.renderable = void 0, this.systems = new Map, this.draws = [], this.uC = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, PW.e)();
        const SF = FF.createBindGroupLayout({
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
        this.frameLayout = FF.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = FF.createPipelineLayout({
          bindGroupLayouts: [WW(FF), SF, this.frameLayout]
        }), this.module = FF.createShaderModule({
          label: "particles",
          code: rP
        });
        const CF = FF.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        FF.queue.writeTexture({
          texture: CF
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.uC = {
          layout: SF,
          rampSampler: FF.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: CF.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (WF, SF) => (this.bindTarget(SF), {
            renderable: this.renderable,
            pipeline: hW(FF, SF),
            draw: FF => SF === this.preparedTarget ? this.draw(FF) : 0
          })
        }
      }
      get riF() {
        return this.systems.size
      }
      reset() {
        for (const FF of this.systems.keys()) FF.reset()
      }
      describePendingWork() {
        return (0, dd.e)(this.systems.keys(), "Lite")
      }
      wWF(FF, WF) {
        const SF = new dd.d(FF, WF, this);
        return this.systems.set(SF, new tP(this.device, SF, this.allocateFrameIndex(), this.uC)), SF
      }
      luF(FF, WF) {
        for (const SF of this.systems.keys()) SF.luF(FF, WF)
      }
      canDraw(FF) {
        const WF = this.systems.get(FF),
          SF = FF.texture ? this.resources.boundTexture(FF.texture) : null;
        if (!WF || !SF || !this.targetPipelines) return !1;
        if (WF.texture = SF, WF.pipelines.length = 0, !nA(FF.blendMode)) return this.warnOnce(`blend:${FF.blendMode}`, `particle blend mode ${FF.blendMode} is not drawn (${FF.name})`), !0;
        const CF = (0, OA.k)(FF.blendMode);
        for (const AF of CF) {
          const FF = this.pipelineFor(AF);
          if (!1 === FF) return WF.pipelines.length = 0, !0;
          FF && WF.pipelines.push(FF)
        }
        return WF.pipelines.length === CF.length
      }
      disposeStopped(FF) {
        FF.dispose()
      }
      remove(FF) {
        const WF = this.systems.get(FF);
        WF && (this.systems.delete(FF), WF.destroy(), this.freeFrameIndices.push(WF.frameIndex))
      }
      prepare(FF) {
        const WF = FF.animationRatio || 1;
        bS(this.renderable._worldCenter, FF, CW), this.preparedTarget = this.target, this.draws.length = 0;
        let SF = 0;
        for (const CF of this.systems.values()) {
          const FF = CF.system;
          if (!FF.animateIfActive(WF)) continue;
          if (FF.ring.takeUploads(CF.upload), !FF.hasLiveParticles() || 0 === CF.pipelines.length) continue;
          CF.writeUniforms(this.warnOnce), CF.bind();
          const AF = 64 * CF.frameIndex;
          CF.count = FF.ring.drawCount(), Qd(FF, this.frameData, this.frameBits, AF), SF = Math.max(SF, AF + 64), this.draws.push(CF)
        }
        SF > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, SF)
      }
      draw(FF) {
        let WF = 0,
          SF = null;
        for (const CF of this.draws) {
          FF.setBindGroup(1, CF.bindGroup), FF.setBindGroup(2, this.frameBindGroup, [256 * CF.frameIndex]);
          for (const AF of CF.pipelines) AF !== SF && (FF.setPipeline(AF), SF = AF), FF.draw(4, CF.count), WF++
        }
        return WF
      }
      bindTarget(FF) {
        this.target = FF;
        const WF = `${FF._colorFormat}|${FF._depthStencilFormat}|${FF._depthCompare}|${FF._sampleCount}`;
        let SF = this.pipelines.get(WF);
        SF || (SF = new Map, this.pipelines.set(WF, SF)), this.targetPipelines = SF
      }
      pipelineFor(FF) {
        var WF;
        const SF = this.targetPipelines,
          CF = SF.get(FF);
        if (void 0 !== CF) return CF;
        SF.set(FF, null);
        const AF = this.target,
          uF = FF === OA.b,
          hF = null !== (WF = AF._depthCompare) && void 0 !== WF ? WF : SW;
        return this.device.createRenderPipelineAsync({
          label: `particles-${FF}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: JF({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: uF ? 1 : 0
            }
          }, AF, HA((0, OA.h)(FF))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: AF._depthStencilFormat ? {
            format: AF._depthStencilFormat,
            depthCompare: hF,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: AF._sampleCount
          }
        }).then((WF => {
          SF.set(FF, WF)
        }), (WF => {
          SF.set(FF, !1), console.error("Lite particle pipeline failed", WF), XA("particles", `blend-${FF}`, WF)
        })), null
      }
      allocateFrameIndex() {
        const FF = this.freeFrameIndices.pop();
        if (void 0 !== FF) return FF;
        const WF = this.nextFrameIndex++;
        if (64 * (WF + 1) > this.frameData.length) {
          const FF = new Float32Array(2 * this.frameData.length);
          FF.set(this.frameData), this.frameData = FF, this.frameBits = new Uint32Array(FF.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return WF
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
    class aP {
      constructor(FF, WF, SF, CF, AF) {
        this.lite = FF, this.canvas = WF, this.info = SF, this.resources = AF, this.QPF = !1, this.needPOTTextures = !1, this.uuF = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = WF.width, this.renderHeight = WF.height, this.caps = {
          maxTextureSize: CF.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: CF.maxTextureArrayLayers
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
      setSize(FF, WF) {
        if (this.renderWidth === FF && this.renderHeight === WF) return !1;
        const SF = this.renderWidth,
          CF = this.renderHeight;
        this.renderWidth = FF, this.renderHeight = WF;
        try {
          (0, sF.m)(this.lite, FF, WF)
        } catch (AF) {
          if (AF instanceof DOMException && "InvalidStateError" === AF.name) {
            this.renderWidth = SF, this.renderHeight = CF;
            try {
              (0, sF.m)(this.lite, SF, CF)
            } catch {
              this.canvas.width = SF, this.canvas.height = CF
            }
            return console.warn("WebGPU could not allocate render targets for resize", FF, WF, AF.message), !1
          }
          throw AF
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
      HL() {
        const FF = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : FF - this.lastFrameTime, this.lastFrameTime = FF
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(FF, WF) {
        const SF = document.createElement("canvas");
        return SF.width = FF, SF.height = WF, SF
      }
      duF(FF, WF) {
        var SF;
        return null !== (SF = this.resources.duF.get(FF)) && void 0 !== SF ? SF : new wF(this.resources, FF, WF)
      }
      atlasArray(FF, WF, SF) {
        return this.resources.atlasArray(FF, WF, SF)
      }
    }
    class kP {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(FF) {
        this.fov = FF.fov, this.nearPlane = FF.near, this.farPlane = FF.far;
        const WF = FF.worldMatrix;
        for (let SF = 0; SF < 16; SF++)
          if (this.worldMatrix[SF] !== WF[SF]) return this.worldMatrix.set(WF), void this.worldMatrixVersion++
      }
    }
    class qP {
      constructor(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
        let RF = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = FF, this.ju = WF, this.sceneTask = SF, this.gpuDevice = CF, this.terrain = AF, this.meshes = uF, this.particles = hF, this.resources = bW, this.sunShadow = RF, this.BbF = void 0, this.backendName = "WebGPU (Lite)", this.LuF = void 0, this.modelMeshes = void 0, this.camera = new kP, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new HF(CF.lost), this.deviceLost = this.refusals.deviceLost, this.BbF = new aP(FF, dF, PF, CF.limits, bW), (0, OF.G)({
          yS: FF => {
            YF(FF) && bW.textureSlot(FF)
          },
          loaded: FF => YF(FF) ? bW.textureLoaded(FF) : null,
          canvasUpdated: (FF, WF, SF) => {
            YF(FF) && bW.canvasUpdated(FF, WF, SF)
          }
        }), this.LuF = uF.LuF, this.modelMeshes = uF.modelMeshes, WF.camera = this.camera
      }
      get castsEntitySunShadows() {
        var FF, WF;
        return null !== (FF = null === (WF = this.sunShadow) || void 0 === WF ? void 0 : WF.tracesEntities) && void 0 !== FF && FF
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(FF) {
        this.modelMeshes.attach(FF.model, FF.sceneMirror);
        const WF = FF.ju;
        this.setClearColour(WF.clearColor.r, WF.clearColor.g, WF.clearColor.b), WF.draw = () => {
          this.drawFrame(FF, WF)
        }
      }
      render(FF) {
        try {
          this.BbF.HL(), FF.ju.render()
        } catch (WF) {
          throw this.refusals.frameFailed(WF), WF
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var FF, WF, SF, CF;
        const AF = [...this.particles.describePendingWork(), ...null !== (FF = null === (WF = this.sunShadow) || void 0 === WF ? void 0 : WF.describePendingWork()) && void 0 !== FF ? FF : []],
          uF = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (SF = this.terrain.sceneDepth) && void 0 !== SF && SF.compiling ? 1 : 0) + (null !== (CF = this.terrain.shadowMask) && void 0 !== CF && CF.compiling ? 1 : 0);
        uF > 0 && AF.push(`${uF} Lite pipelines compiling`);
        const hF = this.terrain.buffersAwaitingVerdict;
        hF > 0 && AF.push(`${hF} Lite terrain buffers awaiting their out-of-memory verdict`);
        const bW = this.resources.texturesLoading;
        return bW > 0 && AF.push(`${bW} Lite textures loading`), AF
      }
      prepareTexture(FF) {
        return null !== this.resources.boundTexture(FF) || this.resources.textureFailed(FF)
      }
      drawFrame(FF, WF) {
        var SF, CF, AF, uF, hF, bW;
        const dF = Ab(FF);
        this.camera.copyFromView(dF), this.setClearColour(dF.clearColour[0], dF.clearColour[1], dF.clearColour[2]), null === (SF = this.sunShadow) || void 0 === SF || SF.prepare(FF.iS, dF.eye, null !== (CF = FF.iS.CC) && void 0 !== CF ? CF : null), this.terrain.prepare(FF, dF), null === (AF = this.terrain.sceneDepth) || void 0 === AF || AF.setPlanes(dF.near, dF.far), null === (uF = this.terrain.shadowMask) || void 0 === uF || uF.prepare(dF), Hh(this.sceneTask), this.meshes.prepare(WF, dF, FF.model.earthSky, null !== (hF = FF.iS.CC) && void 0 !== hF ? hF : null), this.particles.prepare(dF);
        const PF = performance.now();
        this.resources.flushUploads(), null === (bW = this.sunShadow) || void 0 === bW || bW.traceEntities(this.meshes);
        try {
          (0, sF.l)(this.engine, this.lastFrameTime > 0 ? PF - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = PF
      }
      setClearColour(FF, WF, SF) {
        const CF = this.ju.clearColor;
        CF.r = FF, CF.g = WF, CF.b = SF, CF.a = 1
      }
    }
    const Vd = "WebGPU device lost while Lite was starting";

    function Nd(FF, WF) {
      return "object" === typeof FF && null !== FF ? Object.assign(FF, {
        startStep: WF
      }) : FF
    }
    async function Dd(FF, WF) {
      const SF = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!SF) throw Nd(new Error("No WebGPU adapter"), "no_adapter");
      const CF = SF.info,
        AF = {
          vendor: (null === CF || void 0 === CF ? void 0 : CF.vendor) || "unknown vendor",
          renderer: (null === CF || void 0 === CF ? void 0 : CF.architecture) || "unknown renderer",
          version: (null === CF || void 0 === CF ? void 0 : CF.description) || "unknown version"
        },
        uF = function(FF) {
          const WF = {};
          for (const SF in FF.limits) {
            const CF = FF.limits[SF];
            "number" === typeof CF && (WF[SF] = CF)
          }
          return WF
        }(SF);
      let hF;
      FF.style.background = "black";
      try {
        hF = await (0, sF.e)(FF, {
          msaaSamples: WF.mPF ? 4 : 1,
          requiredLimits: uF,
          alphaMode: "premultiplied"
        })
      } catch (RF) {
        throw Nd(RF, "#47" === (null === (bW = RF) || void 0 === bW ? void 0 : bW.message) ? "no_adapter" : "device")
      }
      var bW;
      const dF = function(FF) {
        return FF._device
      }(hF);
      let PF = null;
      dF.lost.then((FF => {
        PF = FF, console.error(`WebGPU device lost (${FF.reason}): ${FF.message}`)
      }));
      try {
        const SF = await async function(FF, WF, SF, CF, AF, uF) {
          const hF = (0, nF.c)(FF),
            bW = new yb(FF, WF),
            dF = new Hb(WF),
            PF = new qb(WF, bW, (FF => function(FF, WF) {
              for (const CF of lF(FF)) {
                var SF;
                if (CF._targetSignature === WF) return null !== (SF = CF._sceneBG) && void 0 !== SF ? SF : null
              }
              return null
            }(hF, FF))),
            RF = new Td(WF, bW);
          for (const EF of function(FF, WF, SF) {
              return [WF.opaqueRenderable, FF.opaqueRenderable, FF.skyLastRenderable, SF.renderable, WF.transparentRenderable, FF.transparentRenderable, FF.frontRenderable]
            }(PF, dF, RF)) pF(hF, EF);
          const iW = function(FF) {
            for (const WF of lF(FF))
              if ("ju" === WF.name) return WF;
            throw new Error("Lite: the scene has no render task named scene")
          }(hF);
          AF && dF.installSceneDepth(iW, FF);
          const eF = uF ? new bP(WF, uF.entities) : null;
          dF.sunShadow = eF, eF && null !== uF && void 0 !== uF && uF.entities && (dF.shadowMask = new qd(WF, iW, FF, dF));
          return PF.sunShadow = eF, await (0, nF.g)(hF), new qP(FF, hF, iW, WF, dF, PF, RF, bW, SF, CF, eF)
        }(hF, dF, FF, AF, WF.sceneDepth, WF.sunShadow);
        if (null !== PF) {
          const {
            reason: FF,
            message: WF
          } = PF;
          throw Object.assign(new Error(`${Vd} (${FF}): ${WF}`), {
            fallbackReason: Vd
          })
        }
        return SF
      } catch (RF) {
        throw dF.destroy(), null === PF ? RF : Nd(RF, "device")
      }
    }
  },
  38764: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      f: () => CF,
      i: () => eF,
      k: () => RF,
      m: () => gW,
      p: () => uF,
      q: () => bW,
      r: () => dF,
      t: () => hF,
      v: () => rW,
      w: () => EF,
      y: () => QF
    });
    const CF = 3,
      AF = 0,
      uF = 1,
      hF = 2,
      bW = {
        uniform: 3,
        MW: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      dF = 10,
      PF = "BloxdPackInputs",
      RF = "bloxdPackInputs",
      iW = [{
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
      eF = 80;

    function EF() {
      const FF = iW.map((FF => {
        let {
          name: WF,
          type: SF
        } = FF;
        return `    ${WF}: ${SF},\n`
      })).join("");
      return `struct ${PF} {\n${FF}}\n@group(${CF}) @binding(${AF}) var<uniform> ${RF}: ${PF};\n`
    }

    function QF(FF, WF) {
      const SF = new DataView(FF, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, eF),
        [CF, AF, uF, hF, bW, dF] = iW;
      SF.setFloat32(CF.offset, WF.seconds, !0), SF.setUint32(AF.offset, WF.lit ? 1 : 0, !0);
      for (let PF = 0; PF < 3; PF++) SF.setInt32(uF.offset + 4 * PF, WF.renderOffset[PF], !0), SF.setFloat32(hF.offset + 4 * PF, WF.ehF[PF], !0), SF.setFloat32(bW.offset + 4 * PF, WF.eyePosition[PF], !0), SF.setFloat32(dF.offset + 4 * PF, WF.shadowDirection[PF], !0)
    }

    function rW(FF) {
      const WF = new Uint32Array(Math.max(1, FF.length));
      return FF.forEach(((FF, SF) => {
        let {
          id: CF,
          rotation: AF
        } = FF;
        WF[SF] = 65535 & CF | (3 & AF) << 16
      })), WF
    }
    const gW = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);