export const id = 250;
export const ids = [250];
export const modules = {
  40336: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => fJ,
      e: () => AJ,
      f: () => XJ,
      g: () => jJ
    });
    var FJ = ZJ(36229),
      UJ = ZJ(37683),
      eJ = ZJ(37680);

    function XJ(JJ, cJ, ZJ, FJ) {
      const UJ = eJ.q;
      cJ.fill(0), JJ.gravity.toArray(cJ, UJ.gravity), JJ.colorDead.toArray(cJ, UJ.colorDead), ZJ[UJ.ramp] = JJ.useRampGradients ? 1 : 0;
      const XJ = JJ.getColorGradients(),
        AJ = DJ(JJ, XJ, "colour", FJ);
      ZJ[UJ.colorCount] = AJ;
      for (let eJ = 0; eJ < AJ; eJ++) {
        var qJ;
        const JJ = XJ[sJ(XJ, eJ)];
        cJ[UJ.colorPositions + eJ] = JJ.gradient, JJ.color1.toArray(cJ, UJ.color1 + 4 * eJ), (null !== (qJ = JJ.color2) && void 0 !== qJ ? qJ : JJ.color1).toArray(cJ, UJ.color2 + 4 * eJ)
      }
      const jJ = JJ.getVelocityGradients(),
        YJ = DJ(JJ, jJ, "jf", FJ);
      ZJ[UJ.velocityCount] = YJ;
      for (let eJ = 0; eJ < YJ; eJ++) rJ(cJ, UJ.jf + 4 * eJ, jJ[sJ(jJ, eJ)]);
      const hJ = JJ.useRampGradients ? JJ.getColorRemapGradients() : null,
        nJ = DJ(JJ, hJ, "colour remap", FJ);
      ZJ[UJ.remapCount] = nJ;
      for (let eJ = 0; eJ < nJ; eJ++) rJ(cJ, UJ.remap + 4 * eJ, hJ[sJ(hJ, eJ)])
    }

    function AJ() {
      return {
        key: [],
        texels: new Uint8Array(4 * eJ.l)
      }
    }
    const qJ = [];

    function jJ(JJ, cJ) {
      return YJ(JJ, qJ), !xJ(qJ, cJ.key) && (cJ.key.length = 0, cJ.key.push(...qJ), cJ.key.length > 0 && function(JJ, cJ) {
        for (let ZJ = 0; ZJ < eJ.l; ZJ++) UJ.j.GetCurrentGradient(ZJ / eJ.l, JJ, ((JJ, cJ, ZJ) => {
          FJ.Color3.LerpToRef(JJ.color, cJ.color, ZJ, hJ)
        })), cJ[4 * ZJ] = 255 * hJ.r, cJ[4 * ZJ + 1] = 255 * hJ.g, cJ[4 * ZJ + 2] = 255 * hJ.b, cJ[4 * ZJ + 3] = 255
      }(JJ.getRampGradients(), cJ.texels), !0)
    }

    function YJ(JJ, cJ) {
      cJ.length = 0;
      const ZJ = JJ.useRampGradients ? JJ.getRampGradients() : null;
      if (null !== ZJ && void 0 !== ZJ && ZJ.length) {
        cJ.push(ZJ.length);
        for (const JJ of ZJ) cJ.push(JJ.gradient, JJ.color.r, JJ.color.g, JJ.color.b)
      }
    }
    const hJ = new FJ.Color3;

    function DJ(JJ, cJ, ZJ, FJ) {
      return cJ ? cJ.length > eJ.d ? (FJ(`particleStops:${ZJ}`, `GPU particles use the first 2 and last ${eJ.d-2} of more than ${eJ.d} ${ZJ} gradient stops (${JJ.name})`), eJ.d) : cJ.length : 0
    }

    function sJ(JJ, cJ) {
      return cJ < 2 || JJ.length <= eJ.d ? cJ : JJ.length - eJ.d + cJ
    }
    const nJ = new Float32Array(eJ.m),
      GJ = new Uint32Array(nJ.buffer);

    function fJ(JJ, cJ, ZJ) {
      return XJ(JJ, nJ, GJ, ZJ), cJ && xJ(GJ, cJ) ? null : GJ.slice()
    }

    function xJ(JJ, cJ) {
      if (JJ.length !== cJ.length) return !1;
      for (let ZJ = 0; ZJ < JJ.length; ZJ++)
        if (JJ[ZJ] !== cJ[ZJ]) return !1;
      return !0
    }

    function rJ(JJ, cJ, ZJ) {
      var FJ;
      JJ[cJ] = ZJ.gradient, JJ[cJ + 1] = ZJ.factor1, JJ[cJ + 2] = null !== (FJ = ZJ.factor2) && void 0 !== FJ ? FJ : ZJ.factor1
    }
  },
  40329: (JJ, cJ, ZJ) => {
    function FJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const cJ = new Set;
      return (ZJ, FJ) => {
        cJ.has(ZJ) || (cJ.add(ZJ), console.warn(JJ + FJ))
      }
    }
    ZJ.d(cJ, {
      e: () => FJ
    })
  },
  40356: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      createLiteRendererAsync: () => Mq,
      liteBabylonBackend: () => zJ,
      setPipelineFailureHook: () => RU
    });
    var FJ = ZJ(36229),
      UJ = ZJ(36529),
      eJ = ZJ(36859),
      XJ = ZJ(36121),
      AJ = ZJ(36873);
    class qJ extends AJ.b {
      constructor() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        super(...cJ), this.color = new FJ.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: cJ[0].Qy().getUniqueId(),
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
          needAlphaBlendingForMesh: JJ => JJ.visibility < 1 || JJ.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const jJ = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      YJ = JJ => 1 << jJ.indexOf(JJ),
      hJ = YJ("VERTEXCOLOR"),
      DJ = YJ("INSTANCES"),
      sJ = YJ("THIN_INSTANCES"),
      nJ = YJ("INSTANCESCOLOR"),
      GJ = YJ("FOG"),
      fJ = YJ("LITE_FRONT_LAYER");

    function xJ(JJ, cJ, ZJ, FJ) {
      let UJ = 0;
      return JJ.isVerticesDataPresent("color") && (UJ |= hJ), "none" !== cJ && (UJ |= DJ), "thin" === cJ && (UJ |= sJ, JJ.isVerticesDataPresent("instanceColor") && (UJ |= nJ)), FJ.fogEnabled && JJ.applyFog && 0 !== FJ.fogMode && (UJ |= GJ), ZJ >= 1 && (UJ |= fJ), UJ
    }

    function rJ(JJ, cJ) {
      JJ.updateColor4("color", cJ.color, cJ.alpha)
    }
    var vJ = ZJ(36814),
      mJ = ZJ(36325),
      QJ = ZJ(36261),
      EJ = ZJ(36093),
      VJ = ZJ(36797),
      KJ = ZJ(36808),
      yJ = ZJ(36113),
      SJ = ZJ(36117),
      IJ = ZJ(36125);
    const MJ = EJ.c.GLSL;
    class bJ {
      constructor(JJ, cJ) {
        this.name = JJ, this.iG = cJ, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Sy = {
          addOnce: JJ => {
            this.disposers.push(JJ)
          }
        }, this.uniqueId = cJ.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      Qy() {
        return this.iG
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
      needAlphaBlendingForMesh(JJ) {
        return (0, yJ.P)(this.model, JJ.visibility, JJ.hasVertexAlpha)
      }
      needAlphaTestingForMesh(JJ) {
        return (0, yJ.R)(this.model, JJ.visibility, JJ.hasVertexAlpha)
      }
      dispose() {
        (0, mJ.l)(this);
        for (const JJ of this.disposers.splice(0)) JJ()
      }
      get model() {
        return (0, yJ._)(this)
      }
    }
    const wJ = new WeakSet;

    function WJ(JJ) {
      return wJ.has(JJ)
    }

    function gJ(JJ) {
      wJ.add(JJ)
    }
    const HJ = {
      create: (JJ, cJ) => ((0, QJ.n)(JJ, new bJ(JJ.name, cJ)), SJ.e.defines()),
      write: () => {},
      addFeature: (JJ, cJ) => {
        const ZJ = JJ.mirror;
        cJ.feature === KJ.j && cJ.state.dirLightCount > 0 && (JJ.disableLighting = !0, (0, yJ.W)(JJ)), "BLOXD_LIGHTING" in cJ.defines && (0, mJ.i)(ZJ), cJ.feature === VJ.g && ((0, vJ.i)(cJ.state, MJ), function(JJ, cJ) {
          const ZJ = JJ.Qy().gn();
          cJ.textures.forEach(((FJ, UJ) => {
            setTimeout((() => {
              var eJ, XJ;
              const {
                url: AJ
              } = FJ.source;
              ZJ.atlasArray(AJ, null !== (eJ = null === (XJ = cJ.sources.pixels) || void 0 === XJ ? void 0 : XJ[UJ]) && void 0 !== eJ ? eJ : null, cJ.sources.layerWidth).then((ZJ => {
                (0, vJ.e)(JJ, cJ, UJ, ZJ, ZJ.layerWidth, ZJ.layers, MJ)
              })).catch((JJ => {
                console.error(`Failed to build texture array for atlas ${UJ}`, JJ)
              }))
            }))
          }))
        }(ZJ, cJ.state))
      },
      texture: (JJ, cJ, ZJ) => {
        let {
          data: FJ,
          sets: UJ
        } = ZJ;
        var eJ;
        (gJ(JJ), FJ) && (JJ.uvSet = null !== (eJ = null === UJ || void 0 === UJ ? void 0 : UJ.coordinatesIndex) && void 0 !== eJ ? eJ : 0, (0, QJ.cb)(JJ.matrix, null !== UJ && void 0 !== UJ ? UJ : {}))
      },
      cube: gJ,
      canvas: (JJ, cJ, ZJ) => {
        let {
          width: FJ,
          height: UJ,
          mipmaps: eJ,
          samplingMode: XJ = IJ.g.trilinear,
          hasAlpha: AJ = !1,
          wrap: qJ = IJ.c.clamp
        } = ZJ;
        const jJ = JJ.gn().createCanvas(FJ, UJ),
          YJ = new IJ.h("2d", {
            kind: "canvas",
            width: FJ,
            height: UJ,
            canvas: jJ
          }, {
            samplingMode: XJ,
            wrapU: qJ,
            wrapV: qJ,
            noMipmap: !eJ,
            invertY: !0
          });
        return YJ.hasAlpha = AJ, gJ(YJ), YJ
      }
    };
    var PJ = ZJ(36358),
      kJ = ZJ(36200);
    class pJ {
      constructor(JJ, cJ, ZJ) {
        this.engine = JJ, this.clearColor = cJ, this.ambientColor = ZJ, this.onBeforeRenderObservable = new kJ.c, this.onBeforeCameraRenderObservable = new kJ.c, this.onAfterRenderObservable = new kJ.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.lE = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      gn() {
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
      addPendingData(JJ) {
        this.pending.push(JJ)
      }
      removePendingData(JJ) {
        const cJ = this.pending.indexOf(JJ); - 1 !== cJ && this.pending.splice(cJ, 1)
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

    function dJ() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const zJ = {
      HFJ: dJ,
      WFJ: (JJ, cJ) => {
        const ZJ = new pJ(JJ.engine, FJ.e.FromArray(cJ.clearColor), FJ.Color3.FromArray(cJ.ambientColor));
        (0, XJ.d)(HJ, ZJ), JJ.iG = ZJ,
          function(JJ, cJ) {
            const ZJ = Object.assign((0, PJ.h)(JJ, "camera"), {
              layerMask: 268435455
            });
            JJ.model.nodes.setWorldSource(ZJ.row, JJ.model.view.worldMatrix), JJ.camera = cJ.activeCamera = ZJ
          }(JJ, ZJ), (0, UJ.h)(JJ, ((JJ, cJ, ZJ) => (0, eJ.j)(JJ, cJ, ZJ, AJ.b)))
      },
      IFJ: () => {},
      setBabylonFog: () => {},
      PFJ: dJ,
      dFJ: () => {},
      linesFromArrays: (JJ, cJ, ZJ) => (0, eJ.j)(JJ, cJ, ZJ, qJ),
      LG: () => {},
      pFJ: dJ
    };
    var NJ = ZJ(40432),
      OJ = ZJ(40439);
    class TJ {
      constructor(JJ) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const cJ = new Promise((JJ => {
          this.refused = JJ
        }));
        this.deviceLost = Promise.race([JJ, cJ])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(JJ) {
        (function(JJ) {
          const {
            name: cJ,
            message: ZJ
          } = null !== JJ && void 0 !== JJ ? JJ : {};
          return "InvalidStateError" === cJ && "string" === typeof ZJ && ZJ.startsWith("GPUDevice.")
        })(JJ) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: JJ.message,
          framesRefused: !0
        }))
      }
    }
    class CJ {
      constructor(JJ) {
        this.resources = JJ, this.matrixKey = {
          qh: 0
        }, this.attributesKey = {
          qh: 0
        }, this.inputs = Object.create(null);
        for (let cJ = 0; cJ < 4; cJ++) this.inputs[`world${cJ}`] = new RJ(this.matrixKey, 16 * cJ, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(JJ, cJ) {
        this.resources.vertexBufferCreated(this.matrixKey, JJ, !0), cJ && this.resources.vertexBufferCreated(this.attributesKey, cJ, !0)
      }
    }
    class uJ extends CJ {
      constructor(JJ, cJ, ZJ) {
        super(JJ), this.mesh = cJ, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const FJ = this.inputs;
        let UJ = 0;
        for (const {
            size: XJ
          }
          of ZJ) UJ += XJ;
        for (const {
            name: XJ,
            offset: AJ,
            size: qJ,
            type: jJ
          }
          of ZJ) FJ[XJ] = new RJ(this.attributesKey, 4 * AJ, 4 * UJ, qJ, !0, jJ);
        this.rowStride = UJ, JJ.b_.set(cJ, this);
        const eJ = cJ.isVerticesDataPresent;
        cJ.isVerticesDataPresent = (JJ, ZJ) => JJ in FJ || eJ.call(cJ, JJ, ZJ)
      }
      attach(JJ, cJ) {
        this.matrices = JJ, this.attributes = cJ, this.bind(JJ, cJ), this.mirror(JJ, JJ.length, JJ.length / 16)
      }
      y5(JJ) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, JJ ? 64 * JJ : void 0)
      }
      I5() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(JJ, cJ) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * JJ, 16 * cJ)
      }
      attributeRows(JJ, cJ) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, JJ * this.rowStride, cJ * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(JJ, cJ, ZJ) {
        const FJ = this.mesh._thinInstanceDataStorage;
        FJ.matrixData = JJ, FJ.matrixBufferSize = cJ, FJ.worldMatrices = null, FJ.instancesCount = ZJ
      }
    }
    class iJ extends CJ {
      constructor(JJ, cJ, ZJ) {
        var FJ, UJ, eJ, XJ;
        super(JJ), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.interleavedKinds) && void 0 !== FJ ? FJ : null, this.offsets = null !== (UJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.interleavedOffsets) && void 0 !== UJ ? UJ : [], this.rowStride = null !== (eJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.interleavedRowStride) && void 0 !== eJ ? eJ : 0, null === (XJ = this.layout) || void 0 === XJ || XJ.forEach(((JJ, cJ) => {
          this.inputs[JJ] = new RJ(this.attributesKey, 4 * this.offsets[cJ], 4 * this.rowStride, ZJ.strides[JJ])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), JJ.batchUploads.set(cJ, this), cJ.Sy.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(JJ) {
        const cJ = this.packedBatch;
        return cJ.renderSelf ? 0 === JJ ? this.packedSource : cJ.instances[JJ - 1] : cJ.instances[JJ]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(JJ, cJ, ZJ, FJ) {
        const UJ = (cJ.renderSelf ? 1 : 0) + cJ.rows.length;
        if (this.frame = FJ, this.count = UJ, this.packedSource = JJ, this.packedBatch = cJ, 0 === UJ) return;
        if (JJ.getWorldMatrix(), 16 * UJ > this.matrices.length) {
          let JJ = this.matrices.length / 16;
          for (; JJ < UJ;) JJ *= 2;
          this.matrices = new Float32Array(16 * JJ), this.attributes &&= new Float32Array(JJ * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let eJ = 0;
        cJ.renderSelf && this.packRow(eJ++, JJ, cJ.row, ZJ);
        for (let XJ = 0; XJ < cJ.rows.length; XJ++) this.packRow(eJ++, cJ.instances[XJ], cJ.rows[XJ], ZJ);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * UJ), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, UJ * this.rowStride)
      }
      packRow(JJ, cJ, ZJ, FJ) {
        const UJ = this.matrices;
        if (ZJ < 0) UJ.set(cJ.getWorldMatrix().m, 16 * JJ);
        else
          for (let jJ = 0; jJ < 16; jJ++) UJ[16 * JJ + jJ] = FJ[16 * ZJ + jJ];
        const eJ = this.attributes;
        if (!eJ) return;
        const XJ = cJ.HI,
          AJ = this.layout;
        for (let jJ = 0; jJ < AJ.length; jJ++) {
          var qJ;
          const cJ = null !== (qJ = XJ[AJ[jJ]]) && void 0 !== qJ ? qJ : 0,
            ZJ = JJ * this.rowStride + this.offsets[jJ];
          cJ.toArray ? cJ.toArray(eJ, ZJ) : cJ.copyToArray ? cJ.copyToArray(eJ, ZJ) : eJ[ZJ] = cJ
        }
      }
    }
    class RJ {
      constructor(JJ, cJ, ZJ, FJ) {
        let UJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = JJ, this.byteOffset = cJ, this.byteStride = ZJ, this.size = FJ, this.instanced = UJ, this.type = eJ, this.normalized = XJ
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
    const LJ = "CANVAS_ALPHA_ONE",
      aJ = `override ${LJ}: bool = false;`,
      BJ = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function tJ(JJ, cJ, ZJ) {
      var FJ;
      let UJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const eJ = null !== (FJ = cJ._colorFormat) && void 0 !== FJ ? FJ : "bgra8unorm",
        XJ = UJ ? 15 : 0;
      return ZJ ? {
        ...JJ,
        targets: [{
          format: eJ,
          blend: {
            color: ZJ,
            alpha: BJ
          },
          writeMask: XJ
        }]
      } : {
        ...JJ,
        constants: {
          ...JJ.constants,
          [LJ]: 1
        },
        targets: [{
          format: eJ,
          writeMask: XJ
        }]
      }
    }

    function oJ(JJ, cJ) {
      JJ._renderables.push(cJ)
    }

    function lJ(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = JJ._frameGraph) || void 0 === ZJ ? void 0 : ZJ._tasks) && void 0 !== cJ ? cJ : []
    }

    function Jc(JJ) {
      return JJ._currentEncoder
    }

    function cc(JJ) {
      return JJ.createBindGroupLayout({
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
    const Zc = "greater-equal",
      Fc = 2e5,
      Uc = 1e5,
      ec = new WeakMap;

    function Xc(JJ, cJ) {
      let ZJ = ec.get(JJ);
      if (!ZJ) {
        ZJ = {
          module: JJ.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, ec.set(JJ, ZJ)
      }
      const FJ = `${cJ._colorFormat}|${cJ._depthStencilFormat}|${cJ._sampleCount}`;
      let UJ = ZJ.pipelines.get(FJ);
      if (!UJ) {
        var eJ;
        const {
          module: XJ
        } = ZJ;
        UJ = JJ.createRenderPipeline({
          label: `placeholder ${FJ}`,
          layout: JJ.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: XJ,
            entryPoint: "v"
          },
          fragment: {
            module: XJ,
            entryPoint: "f",
            targets: [{
              format: null !== (eJ = cJ._colorFormat) && void 0 !== eJ ? eJ : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: cJ._depthStencilFormat ? {
            format: cJ._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: cJ._sampleCount
          }
        }), ZJ.pipelines.set(FJ, UJ)
      }
      return UJ
    }

    function Ac(JJ, cJ, ZJ) {
      const FJ = cJ.eye,
        UJ = cJ.viewMatrix;
      JJ[0] = FJ[0] + UJ[2] * ZJ, JJ[1] = FJ[1] + UJ[6] * ZJ, JJ[2] = FJ[2] + UJ[10] * ZJ
    }
    var qc = ZJ(36920),
      jc = ZJ(40329),
      Yc = ZJ(36107);
    const hc = Math.PI,
      Dc = hc / 1.95,
      sc = [5e-4 / 94, 125e-7, 5e-4 / 18],
      nc = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((JJ => {
        let [cJ, ZJ] = JJ;
        return .434 * hc * Math.pow(2 * hc / cJ, 2) * ZJ
      }));

    function Gc(JJ, cJ, ZJ) {
      const {
        up: FJ,
        mieDirectionalG: UJ
      } = JJ, eJ = 1 - rc(1 - Math.exp(cJ[1] / 45e4), 0, 1), XJ = JJ.rayleigh - (1 - eJ), AJ = Math.hypot(cJ[0], cJ[1], cJ[2]), qJ = AJ > 0 ? 1 / AJ : 0, jJ = ZJ.sunDir;
      for (let sJ = 0; sJ < 3; sJ++) jJ[sJ] = cJ[sJ] * qJ;
      const YJ = jJ[0] * FJ[0] + jJ[1] * FJ[1] + jJ[2] * FJ[2],
        hJ = 1e3 * Math.max(0, 1 - Math.exp(-(Dc - Math.acos(rc(YJ, -1, 1))) / 1.5));
      ZJ.sunE = hJ;
      const DJ = .2 * JJ.turbidity * 1e-17 * JJ.mieCoefficient;
      for (let sJ = 0; sJ < 3; sJ++) {
        const JJ = sc[sJ] * XJ,
          cJ = nc[sJ] * DJ,
          FJ = hJ / (JJ + cJ);
        ZJ.inScatterR[sJ] = JJ * FJ, ZJ.inScatterM[sJ] = cJ * FJ, ZJ.extinctionBeta[sJ] = 8400 * JJ + 1250 * cJ
      }
      return ZJ.sunsetMix = rc(Math.pow(1 - YJ, 5), 0, 1), ZJ.sunDiscE = 19e3 * hJ, ZJ.mieScale = (1 - UJ * UJ) / (4 * hc), ZJ.mieBase = 1 + UJ * UJ, ZJ.mieSlope = 2 * UJ, ZJ
    }
    const fc = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const xc = 1 / function(JJ) {
      const {
        A: cJ,
        B: ZJ,
        C: FJ,
        D: UJ,
        E: eJ,
        F: XJ
      } = fc;
      return (JJ * (cJ * JJ + FJ * ZJ) + UJ * eJ) / (JJ * (cJ * JJ + ZJ) + UJ * XJ) - eJ / XJ
    }(1e3);

    function rc(JJ, cJ, ZJ) {
      return Math.min(Math.max(JJ, cJ), ZJ)
    }
    const vc = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function mc(JJ, cJ) {
      const ZJ = new Map(cJ),
        FJ = [],
        UJ = [],
        eJ = () => 0 === UJ.length || UJ[UJ.length - 1].active;
      let XJ = null;
      const AJ = () => {
        const JJ = [...ZJ].filter((JJ => {
            let [, cJ] = JJ;
            return !0 !== cJ
          })),
          cJ = JJ.map((JJ => {
            let [cJ] = JJ;
            return cJ
          })).join("|");
        XJ = JJ.length ? new RegExp(`\\b(${cJ})\\b`, "g") : null
      };
      AJ();
      for (const qJ of JJ.split("\n")) {
        const JJ = vc.exec(qJ);
        if (!JJ) {
          eJ() && FJ.push(XJ ? Qc(qJ, XJ, ZJ) : qJ);
          continue
        }
        const cJ = JJ[1],
          jJ = JJ[2].trim();
        if ("ifdef" === cJ || "ifndef" === cJ || "if" === cJ) {
          const JJ = eJ(),
            FJ = "if" === cJ ? Ec(jJ, ZJ) : ZJ.has(jJ) === ("ifdef" === cJ);
          UJ.push({
            active: JJ && FJ,
            parentActive: JJ,
            taken: FJ
          })
        } else if ("elif" === cJ || "else" === cJ) {
          const JJ = UJ[UJ.length - 1];
          if (!JJ) throw new Error(`#${cJ} without #if`);
          const FJ = !JJ.taken && ("else" === cJ || Ec(jJ, ZJ));
          JJ.active = JJ.parentActive && FJ, JJ.taken = JJ.taken || FJ
        } else if ("endif" === cJ) {
          if (!UJ.pop()) throw new Error("#endif without #if")
        } else if (eJ()) {
          const [JJ, ...FJ] = jJ.split(/\s+/);
          "undef" === cJ ? ZJ.delete(JJ) : ZJ.set(JJ, !FJ.length || FJ.join(" ")), AJ()
        }
      }
      if (UJ.length) throw new Error("Unterminated #if");
      return FJ.join("\n")
    }

    function Qc(JJ, cJ, ZJ) {
      return JJ.replace(cJ, (JJ => {
        const cJ = ZJ.get(JJ);
        return "string" === typeof cJ ? cJ : JJ
      }))
    }

    function Ec(JJ, cJ) {
      var ZJ;
      const FJ = null !== (ZJ = JJ.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== ZJ ? ZJ : [];
      let UJ = 0;
      const eJ = () => FJ[UJ],
        XJ = () => FJ[UJ++],
        AJ = JJ => {
          const ZJ = /^\d/.test(JJ) ? JJ : cJ.get(JJ);
          return "string" === typeof ZJ ? parseInt(ZJ) : Number.NaN
        },
        qJ = () => {
          const JJ = XJ();
          if ("!" === JJ) return !qJ();
          if ("(" === JJ) {
            const JJ = YJ();
            return XJ(), JJ
          }
          if ("defined" === JJ) {
            const JJ = "(" === eJ();
            JJ && XJ();
            const ZJ = XJ();
            return JJ && XJ(), cJ.has(ZJ)
          }
          const ZJ = eJ();
          if ("==" === ZJ || "!=" === ZJ || ">" === ZJ || "<" === ZJ || ">=" === ZJ || "<=" === ZJ) {
            XJ();
            const cJ = AJ(JJ),
              FJ = AJ(XJ());
            if (Number.isNaN(cJ) || Number.isNaN(FJ)) return !1;
            switch (ZJ) {
              case "==":
                return cJ === FJ;
              case "!=":
                return cJ !== FJ;
              case ">":
                return cJ > FJ;
              case "<":
                return cJ < FJ;
              case ">=":
                return cJ >= FJ;
              default:
                return cJ <= FJ
            }
          }
          return cJ.has(JJ)
        },
        jJ = () => {
          let JJ = qJ();
          for (;
            "&&" === eJ();) {
            XJ();
            const cJ = qJ();
            JJ = JJ && cJ
          }
          return JJ
        },
        YJ = () => {
          let JJ = jJ();
          for (;
            "||" === eJ();) {
            XJ();
            const cJ = jJ();
            JJ = JJ || cJ
          }
          return JJ
        },
        hJ = YJ();
      if (UJ !== FJ.length) throw new Error(`Cannot evaluate #if ${JJ}`);
      return hJ
    }
    var Vc = ZJ(36102),
      Kc = ZJ(36429),
      yc = ZJ(36432),
      Sc = ZJ(39623),
      Ic = ZJ(37716);
    const Mc = 32,
      bc = [10, 3, 10],
      wc = [21, 7, 21],
      Wc = wc[0] * wc[1] * wc[2],
      gc = 0,
      Hc = 1,
      Pc = 2,
      kc = 3,
      pc = 64,
      dc = 512,
      zc = 4 * Wc,
      Nc = 1536,
      Oc = zc + Wc * Nc,
      Tc = 1073741824,
      Cc = Oc + 1;

    function uc(JJ, cJ) {
      const ZJ = JJ % cJ;
      return ZJ < 0 ? ZJ + cJ : ZJ
    }

    function ic(JJ, cJ, ZJ) {
      return FJ = uc(JJ, wc[0]), UJ = uc(cJ, wc[1]), eJ = uc(ZJ, wc[2]), FJ + wc[0] * (UJ + wc[1] * eJ);
      var FJ, UJ, eJ
    }

    function Rc(JJ, cJ, ZJ) {
      return JJ + 8 * (cJ + 8 * ZJ)
    }

    function Lc(JJ, cJ, ZJ) {
      return JJ + 4 * (cJ + 4 * ZJ)
    }
    const ac = 65535,
      Bc = 0,
      tc = 1,
      oc = 2,
      lc = 3;

    function JZ(JJ) {
      return Math.ceil(JJ * JJ / 32)
    }
    const cZ = 8192,
      ZZ = 1 << 18,
      FZ = 65536,
      UZ = 294912,
      eZ = 128,
      XZ = 4096,
      AZ = 16,
      qZ = 16385,
      jZ = 81921,
      YZ = 147457,
      hZ = 4194304;
    const DZ = [0, 0, 0],
      sZ = [0, 0, 0];

    function nZ(JJ, cJ, ZJ, FJ) {
      ! function(JJ, cJ, ZJ) {
        const [FJ, UJ, eJ] = [JJ[0], JJ[1], JJ[2]];
        let XJ, AJ, qJ;
        Math.abs(UJ) < .99 ? (XJ = eJ, AJ = 0, qJ = -FJ) : (XJ = -UJ, AJ = FJ, qJ = 0);
        const jJ = Math.hypot(XJ, AJ, qJ);
        cJ[0] = XJ / jJ, cJ[1] = AJ / jJ, cJ[2] = qJ / jJ, ZJ[0] = UJ * cJ[2] - eJ * cJ[1], ZJ[1] = eJ * cJ[0] - FJ * cJ[2], ZJ[2] = FJ * cJ[1] - UJ * cJ[0]
      }(FJ, DZ, sZ);
      const UJ = 1 / 32;
      for (const [eJ, XJ] of [
          [0, DZ],
          [4, sZ]
        ]) {
        for (let ZJ = 0; ZJ < 3; ZJ++) JJ[cJ + eJ + ZJ] = XJ[ZJ] * UJ;
        JJ[cJ + eJ + 3] = -(XJ[0] * ZJ[0] + XJ[1] * ZJ[1] + XJ[2] * ZJ[2]) * UJ
      }
    }
    class GZ {
      constructor() {
        this.words = new Uint32Array(YZ), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Fs(JJ, cJ) {
        this.parts = 0, this.refs = 0, this.view = JJ, this.viewAt = cJ;
        const ZJ = JJ[cJ + 1] * JJ[cJ + 6] - JJ[cJ + 2] * JJ[cJ + 5],
          FJ = JJ[cJ + 2] * JJ[cJ + 4] - JJ[cJ] * JJ[cJ + 6],
          UJ = JJ[cJ] * JJ[cJ + 5] - JJ[cJ + 1] * JJ[cJ + 4],
          eJ = Math.hypot(ZJ, FJ, UJ) || 1;
        this.light[0] = ZJ / eJ, this.light[1] = FJ / eJ, this.light[2] = UJ / eJ
      }
      add(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= XZ || ! function(JJ, cJ, ZJ) {
            const FJ = JJ[cJ],
              UJ = JJ[cJ + 1],
              eJ = JJ[cJ + 2],
              XJ = JJ[cJ + 3],
              AJ = JJ[cJ + 4],
              qJ = JJ[cJ + 5],
              jJ = JJ[cJ + 6],
              YJ = JJ[cJ + 7],
              hJ = JJ[cJ + 8],
              DJ = JJ[cJ + 9],
              sJ = JJ[cJ + 10],
              nJ = JJ[cJ + 11],
              GJ = JJ[cJ + 12],
              fJ = JJ[cJ + 13],
              xJ = JJ[cJ + 14],
              rJ = JJ[cJ + 15],
              vJ = FJ * qJ - UJ * AJ,
              mJ = FJ * jJ - eJ * AJ,
              QJ = FJ * YJ - XJ * AJ,
              EJ = UJ * jJ - eJ * qJ,
              VJ = UJ * YJ - XJ * qJ,
              KJ = eJ * YJ - XJ * jJ,
              yJ = hJ * fJ - DJ * GJ,
              SJ = hJ * xJ - sJ * GJ,
              IJ = hJ * rJ - nJ * GJ,
              MJ = DJ * xJ - sJ * fJ,
              bJ = DJ * rJ - nJ * fJ,
              wJ = sJ * rJ - nJ * xJ,
              WJ = vJ * wJ - mJ * bJ + QJ * MJ + EJ * IJ - VJ * SJ + KJ * yJ;
            if (!(Math.abs(WJ) > 1e-12)) return !1;
            const gJ = 1 / WJ;
            return ZJ[0] = (qJ * wJ - jJ * bJ + YJ * MJ) * gJ, ZJ[1] = (eJ * bJ - UJ * wJ - XJ * MJ) * gJ, ZJ[2] = (fJ * KJ - xJ * VJ + rJ * EJ) * gJ, ZJ[3] = (sJ * VJ - DJ * KJ - nJ * EJ) * gJ, ZJ[4] = (jJ * IJ - AJ * wJ - YJ * SJ) * gJ, ZJ[5] = (FJ * wJ - eJ * IJ + XJ * SJ) * gJ, ZJ[6] = (xJ * QJ - GJ * KJ - rJ * mJ) * gJ, ZJ[7] = (hJ * KJ - sJ * QJ + nJ * mJ) * gJ, ZJ[8] = (AJ * bJ - qJ * IJ + YJ * yJ) * gJ, ZJ[9] = (UJ * IJ - FJ * bJ - XJ * yJ) * gJ, ZJ[10] = (GJ * VJ - fJ * QJ + rJ * vJ) * gJ, ZJ[11] = (DJ * QJ - hJ * VJ - nJ * vJ) * gJ, ZJ[12] = (qJ * SJ - AJ * MJ - jJ * yJ) * gJ, ZJ[13] = (FJ * MJ - UJ * SJ + eJ * yJ) * gJ, ZJ[14] = (fJ * mJ - GJ * EJ - xJ * vJ) * gJ, ZJ[15] = (hJ * EJ - DJ * mJ + sJ * vJ) * gJ, !0
          }(cJ, ZJ, this.inverse)) return;
        const {
          view: FJ,
          viewAt: UJ
        } = this, eJ = ZJ;
        let XJ = 1 / 0,
          AJ = 1 / 0,
          qJ = -1 / 0,
          jJ = -1 / 0,
          YJ = -1 / 0;
        const [hJ, DJ, sJ] = this.light;
        for (let QJ = 0; QJ < 8; QJ++) {
          const ZJ = 1 & QJ ? JJ.hi[0] : JJ.lo[0],
            nJ = 2 & QJ ? JJ.hi[1] : JJ.lo[1],
            GJ = 4 & QJ ? JJ.hi[2] : JJ.lo[2],
            fJ = ZJ * cJ[eJ] + nJ * cJ[eJ + 4] + GJ * cJ[eJ + 8] + cJ[eJ + 12],
            xJ = ZJ * cJ[eJ + 1] + nJ * cJ[eJ + 5] + GJ * cJ[eJ + 9] + cJ[eJ + 13],
            rJ = ZJ * cJ[eJ + 2] + nJ * cJ[eJ + 6] + GJ * cJ[eJ + 10] + cJ[eJ + 14],
            vJ = FJ[UJ] * fJ + FJ[UJ + 1] * xJ + FJ[UJ + 2] * rJ + FJ[UJ + 3],
            mJ = FJ[UJ + 4] * fJ + FJ[UJ + 5] * xJ + FJ[UJ + 6] * rJ + FJ[UJ + 7];
          XJ = Math.min(XJ, vJ), AJ = Math.min(AJ, mJ), qJ = Math.max(qJ, vJ), jJ = Math.max(jJ, mJ), YJ = Math.max(YJ, hJ * fJ + DJ * xJ + sJ * rJ)
        }
        if (qJ < -1 || jJ < -1 || XJ >= 1 || AJ >= 1) return;
        const nJ = this.parts++,
          GJ = this.rects;
        GJ[4 * nJ] = fZ(XJ), GJ[4 * nJ + 1] = fZ(AJ), GJ[4 * nJ + 2] = fZ(qJ), GJ[4 * nJ + 3] = fZ(jJ);
        const fJ = this.inverse,
          {
            cell: xJ,
            dims: rJ,
            lo: vJ
          } = JJ,
          mJ = jZ + nJ * AZ;
        for (let QJ = 0; QJ < 3; QJ++) this.floats[mJ + 4 * QJ] = fJ[QJ] / xJ, this.floats[mJ + 4 * QJ + 1] = fJ[4 + QJ] / xJ, this.floats[mJ + 4 * QJ + 2] = fJ[8 + QJ] / xJ, this.floats[mJ + 4 * QJ + 3] = (fJ[12 + QJ] - vJ[QJ]) / xJ;
        this.words[mJ + 12] = JJ.at, this.floats[mJ + 13] = YJ + .001 * (1 + Math.abs(YJ)), this.words[mJ + 14] = rJ[0] | rJ[1] << 8 | rJ[2] << 16
      }
      finish() {
        const JJ = eZ,
          {
            counts: cJ,
            rects: ZJ,
            words: FJ
          } = this;
        cJ.fill(0);
        let UJ = 0,
          eJ = 0;
        for (; eJ < this.parts; eJ++) {
          const FJ = 4 * eJ,
            XJ = (ZJ[FJ + 2] - ZJ[FJ] + 1) * (ZJ[FJ + 3] - ZJ[FJ + 1] + 1);
          if (UJ + XJ > 65536) break;
          UJ += XJ;
          for (let UJ = ZJ[FJ + 1]; UJ <= ZJ[FJ + 3]; UJ++)
            for (let eJ = ZJ[FJ]; eJ <= ZJ[FJ + 2]; eJ++) cJ[UJ * JJ + eJ]++
        }
        let XJ = 0;
        for (let qJ = 0; qJ < 16384; qJ++) FJ[qJ] = XJ, XJ += cJ[qJ], cJ[qJ] = FJ[qJ];
        FJ[16384] = XJ;
        for (let qJ = 0; qJ < eJ; qJ++) {
          const UJ = 4 * qJ;
          for (let eJ = ZJ[UJ + 1]; eJ <= ZJ[UJ + 3]; eJ++)
            for (let XJ = ZJ[UJ]; XJ <= ZJ[UJ + 2]; XJ++) FJ[qZ + cJ[eJ * JJ + XJ]++] = qJ
        }
        const AJ = this.floats;
        for (let qJ = 0; qJ < 16384; qJ++) {
          const JJ = qZ + FJ[qJ],
            cJ = JJ + Math.min(FJ[qJ + 1] - FJ[qJ], 64);
          for (let ZJ = JJ + 1; ZJ < cJ; ZJ++) {
            const cJ = FJ[ZJ],
              UJ = AJ[81934 + cJ * AZ];
            let eJ = ZJ - 1;
            for (; eJ >= JJ && AJ[81934 + FJ[eJ] * AZ] < UJ; eJ--) FJ[eJ + 1] = FJ[eJ];
            FJ[eJ + 1] = cJ
          }
        }
        this.refs = UJ
      }
    }

    function fZ(JJ) {
      return Math.min(127, Math.max(0, Math.floor((.5 * JJ + .5) * eZ)))
    }

    function xZ(JJ, cJ, ZJ, FJ, UJ) {
      for (let eJ = 0; eJ < 4; eJ++)
        for (let XJ = 0; XJ < 4; XJ++) UJ[4 * eJ + XJ] = JJ[cJ + 4 * eJ] * ZJ[FJ + XJ] + JJ[cJ + 4 * eJ + 1] * ZJ[FJ + 4 + XJ] + JJ[cJ + 4 * eJ + 2] * ZJ[FJ + 8 + XJ] + JJ[cJ + 4 * eJ + 3] * ZJ[FJ + 12 + XJ]
    }

    function rZ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ[0] - cJ,
        XJ = JJ[1] - ZJ,
        AJ = JJ[2] - FJ,
        qJ = JJ[3] - cJ,
        jJ = JJ[4] - ZJ,
        YJ = JJ[5] - FJ,
        hJ = JJ[6] - cJ,
        DJ = JJ[7] - ZJ,
        sJ = JJ[8] - FJ;
      if (Math.min(eJ, qJ, hJ) > UJ || Math.max(eJ, qJ, hJ) < -UJ) return !1;
      if (Math.min(XJ, jJ, DJ) > UJ || Math.max(XJ, jJ, DJ) < -UJ) return !1;
      if (Math.min(AJ, YJ, sJ) > UJ || Math.max(AJ, YJ, sJ) < -UJ) return !1;
      const nJ = qJ - eJ,
        GJ = jJ - XJ,
        fJ = YJ - AJ,
        xJ = hJ - qJ,
        rJ = DJ - jJ,
        vJ = sJ - YJ,
        mJ = GJ * vJ - fJ * rJ,
        QJ = fJ * xJ - nJ * vJ,
        EJ = nJ * rJ - GJ * xJ;
      if (Math.abs(mJ * eJ + QJ * XJ + EJ * AJ) > UJ * (Math.abs(mJ) + Math.abs(QJ) + Math.abs(EJ))) return !1;
      const VJ = [nJ, GJ, fJ, xJ, rJ, vJ, eJ - hJ, XJ - DJ, AJ - sJ];
      for (let KJ = 0; KJ < 3; KJ++) {
        const JJ = VJ[3 * KJ],
          cJ = VJ[3 * KJ + 1],
          ZJ = VJ[3 * KJ + 2];
        for (let FJ = 0; FJ < 3; FJ++) {
          const nJ = 0 === FJ ? 0 : 1 === FJ ? ZJ : -cJ,
            GJ = 0 === FJ ? -ZJ : 1 === FJ ? 0 : JJ,
            fJ = 0 === FJ ? cJ : 1 === FJ ? -JJ : 0,
            xJ = nJ * eJ + GJ * XJ + fJ * AJ,
            rJ = nJ * qJ + GJ * jJ + fJ * YJ,
            vJ = nJ * hJ + GJ * DJ + fJ * sJ,
            mJ = UJ * (Math.abs(nJ) + Math.abs(GJ) + Math.abs(fJ));
          if (Math.min(xJ, rJ, vJ) > mJ || Math.max(xJ, rJ, vJ) < -mJ) return !1
        }
      }
      return !0
    }
    const vZ = new Float32Array(1);
    new Uint32Array(vZ.buffer);
    var mZ = ZJ(37721);

    function QZ(JJ) {
      const [cJ, ZJ, FJ] = mZ.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${JJ.group}) @binding(${JJ.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${cJ-1}, ${ZJ-1}, ${FJ-1});\n}\n`
    }

    function EZ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [UJ, eJ, XJ] = wc, [AJ, qJ, jJ] = bc, YJ = Math.log2(Mc), hJ = FJ ? "var<private> bloxdSpCrossed: bool;\n" : "", DJ = FJ ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${JJ.group}) @binding(${JJ.GD}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${JJ.group}) @binding(${JJ.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${ZJ?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${hJ}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${tc}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${oc}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${ZJ?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${lc}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${UJ}, ${eJ}, ${XJ});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${UJ} * (s.y + ${eJ} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${AJ}, ${qJ}, ${jJ}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${YJ}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${kc}u) {\n\t\treturn named && state == ${Pc}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${zc}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Oc}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${cJ?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${cJ?`\t\tif (exits && step > 0 && step % ${yZ} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${YJ}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${gc}u || kind == ${Hc}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Pc}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${zc}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${DJ}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const VZ = {
      group: 0,
      uniform: 0,
      GD: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function KZ() {
      const JJ = VZ;
      return `${QZ(JJ)}${EZ(JJ,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${mZ.e}>,\n}\n@group(${JJ.group}) @binding(${JJ.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${JJ.group}) @binding(${JJ.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${mZ.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${mZ.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${mZ.h}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const yZ = 2;
    const SZ = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function IZ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const FJ = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${cJ.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        UJ = "trace" === ZJ || "lit" === ZJ,
        eJ = "maskEdge" === ZJ ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        XJ = UJ ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${cJ.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${cJ.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===ZJ?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${eJ};\n`;
      return `${FJ}${JJ.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${UJ?function(){const[JJ,cJ,ZJ]=mZ.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${JJ}.0, ${cJ}.0, ${ZJ}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${XJ}}\n`:""}${JJ.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${cJ.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${cJ.renderOffset});\n}\n`:""}`
    }
    const MZ = "bloxdSpOwnTexture";

    function bZ(JJ) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${JJ.texture}) - 1u)))`
    }
    const wZ = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${qc.h.map((JJ=>{let[cJ,ZJ]=JJ;return`\tbloxdSpOut.${cJ} = (bloxdSpWord & ${ZJ}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function WZ(JJ) {
      return `bloxdSpFlags(${JJ})`
    }
    const gZ = `${Sc.k}.eyePosition`;

    function HZ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ.indexOf(cJ);
      if (eJ < 0 || JJ.indexOf(cJ, eJ + 1) >= 0) throw new Error(`Lite's ${UJ} program changed at the shader pack ${FJ} hook: ${eJ<0?"no":"more than one"} anchor (lite/${UJ}ShaderPack.ts)`);
      return JJ.slice(0, eJ) + ZJ + JJ.slice(eJ + cJ.length)
    }

    function PZ(JJ) {
      return JJ.sunShadow || JJ.airShadow
    }

    function kZ(JJ, cJ) {
      return cJ && PZ(JJ)
    }
    const pZ = {
      group: Sc.f,
      ...Sc.r
    };

    function dZ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!PZ(JJ)) return "";
      if (cJ) {
        const cJ = pZ,
          UJ = "trace" === ZJ || "lit" === ZJ;
        let eJ = "";
        JJ.sunShadow && (eJ = UJ ? `${EZ(cJ,!0,"lit"===ZJ)}${FJ=cJ,`@group(${FJ.group}) @binding(${FJ.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${FJ.group}) @binding(${FJ.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(JJ, cJ, ZJ) {
          const FJ = `@group(${JJ}) @binding(${cJ}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return ZJ ? `${FJ}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${SZ}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((JJ=>`\t{\n\t\tlet o = vec2i(${JJ});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : FJ
        }(cJ.group, Sc.u, "maskEdge" === ZJ));
        const XJ = {
          shadowDirection: `${Sc.k}.shadowDirection`,
          renderOffset: `${Sc.k}.renderOffset`,
          eyePosition: `${Sc.k}.eyePosition`
        };
        return `${QZ(cJ)}${eJ}${function(JJ){const[cJ,ZJ,FJ]=mZ.o;return`@group(${JJ.group}) @binding(${JJ.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${JJ.group}) @binding(${JJ.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${cJ}.0, ${ZJ}.0, ${FJ}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(cJ)}${IZ(JJ,XJ,ZJ)}`
      }
      var FJ;
      return `${JJ.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${JJ.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function zZ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!cJ) return "";
      const eJ = (XJ = "fragmentInputs.vPositionW", AJ = JJ.sunShadow ? {
        normal: ZJ,
        flags: FJ
      } : null, `\n\tbloxdSpShadowPosition = ${XJ};\n${AJ?`\tbloxdSpShadowNormal = normalize(${AJ.normal});\n\tbloxdSpShadowEmissive = (${AJ.flags} & ${qc.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${AJ.flags} & ${qc.i}u) != 0u;\n`:""}`);
      var XJ, AJ;
      return JJ.sunShadow && ("mask" === UJ || "maskEdge" === UJ) ? `${eJ}${qJ="fragmentInputs.position",jJ="maskEdge"===UJ,`\n\tbloxdSpShadowPixel = vec2i(${qJ}.xy);\n${jJ?`\tbloxdSpShadowZ = ${qJ}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${qJ}.z), dpdy(${qJ}.z));\n`:""}`}` : eJ;
      var qJ, jJ
    }
    const NZ = "bloxdSpTextureRotation",
      OZ = "bloxdSpTextureLayers",
      TZ = `@group(${Sc.f}) @binding(${Sc.y}) var<storage, read> ${OZ}: array<u32>;\n`;

    function CZ(JJ) {
      return `\tvertexOutputs.vPackTexture = ${OZ}[min(u32(${JJ}), arrayLength(&${OZ}) - 1u)];\n`
    }

    function uZ(JJ) {
      return void 0 !== JJ.uv
    }

    function iZ(JJ) {
      if (!JJ) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (uZ(JJ)) return function(JJ) {
        const {
          texture: cJ,
          cells: ZJ,
          layers: FJ
        } = JJ, UJ = `textureDimensions(${cJ}, bloxdSpLevel)`, eJ = ZJ ? `max(vec2u(vec2f(${UJ}) / ${ZJ}), vec2u(1u))` : UJ, XJ = ZJ ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${eJ};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${ZJ}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${ZJ}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${cJ}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${UJ} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${eJ};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${cJ}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let AJ;
        if (ZJ)
          if (1 === FJ.length) AJ = `\treturn bloxdSpOwnTexel(${FJ[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const JJ = FJ.length - 1;
            AJ = `\tvar bloxdSpColour = bloxdSpOwnTexel(${FJ[JJ]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let cJ = JJ - 1; cJ >= 0; cJ--) AJ += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${FJ[cJ]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            AJ += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else AJ = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${JJ.id?`var<private> ${MZ}: u32;\n`:""}${XJ}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${bZ(JJ)};\n\treturn ${eJ};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${JJ.id?MZ:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${bZ(JJ)};\n${AJ}}\n`
      }(JJ);
      const cJ = JJ,
        ZJ = JJ => {
          const ZJ = JJ > 0 ? `bloxdSpLayer - ${cJ.layers*JJ}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${JJ}, ${cJ.sampler}, bloxdSpTurned, ${ZJ}, round(bloxdSpMipLevel));`
        };
      let FJ = "";
      for (let eJ = 0; eJ < cJ.count - 1; eJ++) FJ += `\tif (bloxdSpLayer < ${cJ.layers*(eJ+1)}u) {\n\t\t${ZJ(eJ)}\n\t}\n`;
      const UJ = cJ.frame ? `${cJ.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${NZ}: u32;\n${TZ}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${NZ} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${NZ} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${NZ} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${UJ}${FJ}\t${ZJ(cJ.count-1)}\n}\n`
    }

    function RZ(JJ, cJ, ZJ) {
      return !!JJ.surface && "bloxdDefaultSurface" !== JJ.surface && function(JJ, cJ) {
        return "liquid" === cJ || !JJ
      }(cJ, ZJ)
    }

    function LZ(JJ, cJ) {
      return JJ.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${cJ.vertexLocalPosition}, ${WZ(cJ.vertexFlags)});\n\t\tlet bloxdSpVertex = ${JJ.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function aZ(JJ, cJ, ZJ, FJ, UJ) {
      if (!JJ.surface) return "";
      const eJ = (JJ, cJ) => `\n\tlet bloxdSpTexelUV = ${JJ};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${cJ}) - 1u));`;
      let XJ = "",
        AJ = "0u, 0u, vec2f(0.0), 0.0";
      const qJ = FJ && uZ(FJ) ? FJ : null,
        jJ = FJ && !uZ(FJ) ? FJ : null;
      if (qJ) {
        XJ = `${qJ.id?`\n\tlet bloxdSpTexture = ${qJ.id};\n\t${MZ} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${qJ.uv};${eJ(function(JJ,cJ){var ZJ;return`${null!==(ZJ=JJ.levelUv)&&void 0!==ZJ?ZJ:JJ.cells?`${cJ} / ${JJ.cells}`:cJ} * vec2f(textureDimensions(${JJ.texture}))`}(qJ,"bloxdSpUv"),qJ.texture)}`, AJ = (qJ.id ? `${MZ}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else jJ && (XJ = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${NZ} = bloxdSpTexture >> 16u;${eJ(`fragmentInputs.vMainUV1 * ${(0,Vc.ib)(jJ.width)}`,"textureAtlas0")}`, AJ = `bloxdSpTexture & 0xffffu, ${NZ}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const YJ = UJ.overlayColour,
        hJ = YJ ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        DJ = "bloxdDefaultSurface" !== JJ.surface || YJ ? `\n\tbaseColor = vec4f(${hJ}, baseColor.a);` : "",
        sJ = RZ(JJ, cJ, ZJ) ? `\n\t${UJ.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${XJ}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${UJ.alpha}, ${UJ.enchantTier}, ${UJ.enchantColour}, ${UJ.enchantSpeed}, ${null!==YJ&&void 0!==YJ?YJ:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${UJ.normal}, ${UJ.localPosition}, ${WZ(UJ.flags)}, ${AJ});\n\tlet bloxdSpSurface = ${JJ.surface}(bloxdSpSurfaceIn);${DJ}${sJ}\n`
    }
    const BZ = "bloxdSpLightIn";

    function tZ(JJ, cJ, ZJ, FJ) {
      if (!JJ.light) return "";
      const UJ = cJ ? `${Vc.k}.rgb, ${Vc.k}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Vc.g}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: eJ,
          diffuse: XJ,
          emissive: AJ,
          ambient: qJ,
          fogColour: jJ,
          fogAlpha: YJ,
          normal: hJ
        } = FJ;
      return `\tvar ${BZ} = BloxdLightIn(vec3f(0.0), ${ZJ?eJ:"0.0"}, ${XJ}, ${AJ}, ${qJ}, ${UJ}, ${jJ}, ${YJ}, fragmentInputs.vPositionW, ${hJ}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${BZ}.litColour = bloxdLitColour(bloxdSpSurface, ${BZ});\n`
    }

    function oZ(JJ) {
      return JJ.light ? `\n\t{\n\t\tlet bloxdSpLight = ${JJ.light}(bloxdSpSurface, ${BZ});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const lZ = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      JF = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      cF = "\treturn color;\n}",
      ZF = {
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
    const FF = Object.freeze({});

    function UF(JJ) {
      var cJ;
      return !(null === (cJ = (0, Ic.d)(JJ)) || void 0 === cJ || !cJ.sceneDepth)
    }

    function eF(JJ) {
      const cJ = (0, Ic.d)(JJ);
      return !!cJ && RZ(cJ.hooks, cJ.strict, cJ.program)
    }

    function XF(JJ, cJ, ZJ, FJ) {
      return HZ(JJ, cJ, ZJ, FJ, "terrain")
    }

    function AF(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const eJ = function(JJ) {
          return (0, Ic.c)(JJ.packVariant, JJ.liquid ? "liquid" : "terrain")
        }(JJ),
        {
          hooks: XJ
        } = eJ,
        AJ = kZ(eJ, FJ),
        qJ = "edge" === UJ ? "maskEdge" : "plain" === UJ ? "mask" : "trace",
        jJ = LZ(XJ, ZF);
      jJ && (cJ = XF(cJ, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${jJ}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const YJ = "atlas" === JJ.texture ? {
          count: JJ.atlasCount,
          layers: JJ.atlasLayers,
          width: JJ.Gl,
          sampler: "atlasSampler",
          frame: JJ.animated ? ZJ : null
        } : null,
        hJ = `${eJ.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${zZ(eJ,AJ,ZF.normal,ZF.flags,qJ)}${aZ(XJ,eJ.strict,eJ.program,YJ,ZF)}`;
      hJ && (cJ = XF(cJ, lZ, `${lZ.slice(0,-1)}${hJ}`, "surface"));
      const DJ = oZ(XJ);
      return DJ && (cJ = XF(cJ, JF, `${tZ(XJ,JJ.lighting,JJ.dirLightCount>0,ZF)}${JF}`, "light input"), cJ = XF(cJ, cF, `${DJ.slice(1)}${cF}`, "light")), `${(0,Sc.E)()}${eJ.sceneDepth?`@group(${Sc.f}) @binding(${Sc.q}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${gZ};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${dZ(eJ,AJ,qJ)}${iZ(YJ)}${wZ}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${eJ.code}${cJ}`
    }
    const qF = EJ.c.WGSL;

    function jF(JJ) {
      return void 0 !== JJ.packVariant
    }
    const YF = {
        zFJ: 0,
        NFJ: 4,
        OFJ: 8,
        TFJ: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      hF = YF.aoLevels + 4,
      DF = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      sF = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      nF = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      GF = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      fF = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      xF = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      rF = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      vF = 0,
      mF = 3,
      QF = 4,
      EF = 5,
      VF = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Kc.e}, ${Kc.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Kc.e}, ${Kc.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      KF = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = ((${yc.c}u >> dir) & 1u) == 1u;\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const yF = {
      Hh: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: JJ => `animDataPerTex[${JJ}]`
    };

    function SF(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yF,
        FJ = arguments.length > 3 ? arguments[3] : void 0;
      return `\n\tlet atlasIdxIn = ${JJ};\n\tlet animTick = ${ZJ.Hh};\n\tlet animTickStride = ${ZJ.stride};\n\tlet numAnimTextures = ${ZJ.count};\n\t${(0,VJ.d)(EJ.c.WGSL,ZJ.perTexture)}\n\t${cJ}animLayer;\n\t${FJ?`${FJ}animNext;`:""}\n`
    }

    function IF(JJ) {
      const cJ = JJ => `textureSample(diffuseSampler, diffuseSamplerSampler, ${JJ})`;
      return JJ ? `baseColor = mix(${cJ("fragmentInputs.vMainUV1")}, ${cJ("fragmentInputs.vMainUV1 + vec2f(0.0, fragmentInputs.vAnimStripNext.x)")}, fragmentInputs.vAnimStripNext.y);` : `baseColor = ${cJ("fragmentInputs.vMainUV1")};`
    }

    function MF(JJ) {
      const cJ = JJ.atlasCount > 1 || JJ.animated,
        ZJ = (ZJ, FJ) => {
          const UJ = ZJ > 0 ? `${FJ} - ${JJ.atlasLayers.toFixed(1)} * ${ZJ.toFixed(1)}` : FJ;
          return `${cJ?"textureSampleLevel":"textureSample"}(textureAtlas${ZJ}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${UJ}))${cJ?", atlasLod":""})`
        },
        FJ = function(cJ, FJ) {
          let UJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JJ.atlasCount;
          if (1 === UJ) return `${cJ} = ${ZJ(0,FJ)};`;
          let eJ = "";
          for (let XJ = 0; XJ < UJ; XJ++) {
            const UJ = JJ.atlasLayers * (XJ + 1) - .5;
            eJ += `${XJ>0?" else ":"\n\t"}if (${FJ} < ${(0,Vc.ib)(UJ)}) {\n\t\t${cJ} = ${ZJ(XJ,FJ)};\n\t}`
          }
          return eJ
        },
        UJ = cJ ? `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Vc.ib)(JJ.Gl)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n` : "",
        eJ = JJ.animated ? `\n\tif (fragmentInputs.texAtlasNext.y > 0.0) {\n\t\tvar atlasNextColor: vec4f;\n\t\t${FJ("atlasNextColor","fragmentInputs.texAtlasNext.x",JJ.nextFrameAtlases)}\n\t\tbaseColor = mix(baseColor, atlasNextColor, fragmentInputs.texAtlasNext.y);\n\t}` : "";
      return `${UJ}${FJ("baseColor","fragmentInputs.texAtlasIndex")}${eJ}`
    }

    function bF(JJ) {
      return `terrain-${JJ.texture}${"atlas"===JJ.texture?JJ.atlasCount:""}${JJ.animated?"-anim":""}${void 0!==JJ.nextFrameAtlases?`n${JJ.nextFrameAtlases}`:""}${JJ.alphaTest?"-test":""}${JJ.lighting?"-lit":""}-dir${JJ.dirLightCount}${JJ.packed?"-packed":""}${jF(JJ)?`-sp${JJ.packVariant}`:""}${JJ.liquid?"-liquid":""}${JJ.resting?"-rest":""}`
    }

    function wF(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const FJ = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const ZJ = "none" !== JJ.texture,
          FJ = "atlas" === JJ.texture,
          UJ = JJ.dirLightCount > 0,
          eJ = jF(JJ);
        if (JJ.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${JJ.dirLightCount}`);
        let XJ = 1,
          AJ = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (FJ) {
          JJ.animated && (AJ += `@group(2) @binding(${XJ++}) var<storage, read> animDataPerTex: array<f32>;\n`), AJ += `@group(2) @binding(${XJ++}) var atlasSampler: sampler;\n`;
          for (let cJ = 0; cJ < JJ.atlasCount; cJ++) AJ += `@group(2) @binding(${XJ++}) var textureAtlas${cJ}: texture_2d_array<f32>;\n`
        } else "single" === JJ.texture && (AJ += `@group(2) @binding(${XJ++}) var diffuseSamplerSampler: sampler;\n`, AJ += `@group(2) @binding(${XJ++}) var diffuseSampler: texture_2d<f32>;\n`);
        const qJ = function(JJ) {
            const cJ = rF,
              ZJ = "none" !== JJ.texture,
              FJ = "atlas" === JJ.texture,
              UJ = jF(JJ);
            return JJ.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${ZJ?"uv: vec2f,":""}\n\t${FJ?"texAtlasIndices: f32,":""}\n\t${JJ.lighting?"aPackedLightLevels: f32,":""}\n\t${UJ?"blockFlagWords: vec2u,":""}\n}\n${VF}\n${KF}\n${"single"===JJ.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\tlet ao = (r2 >> (3u + 2u * slot)) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${ZJ?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===JJ.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${FJ?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${JJ.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${UJ?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${cJ.position}) position: vec3f,\n\t@location(${cJ.normal}) normal: vec4f,\n\t@location(${cJ.color}) color: vec4f,\n\t${ZJ?`@location(${cJ.uv}) uv: vec2f,`:""}\n\t${JJ.lighting?`@location(${cJ.packedLight}) aPackedLightLevels: f32,`:""}\n\t${UJ?`@location(${cJ.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(JJ),
          jJ = `\n${GF}\n${sF}\n${nF}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${AJ}\n${aJ}\n${qJ.declarations}\nstruct Varyings {\n\t${"none"===cJ?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${JJ.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${UJ?"@location(5) vTerrainLambert: f32,":""}\n\t${ZJ?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${FJ?"@location(7) texAtlasIndex: f32,":""}\n\t${JJ.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${eJ?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${eJ&&FJ?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n\t${FJ&&JJ.animated?"@location(11) texAtlasNext: vec2f,":""}\n\t${"single"===JJ.texture&&JJ.animated?"@location(11) vAnimStripNext: vec2f,":""}\n}\n\n${JJ.resting?"":(0,Vc.p)(qF)}\n${xF}\n\n@vertex\nfn mainVertex(${qJ.parameter}) -> Varyings {\n\t${qJ.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${eJ?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${qc.e.placed}u;`:""}\n\t${eJ&&FJ?CZ("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${JJ.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${ZJ?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${FJ?function(JJ){return JJ?SF("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = ",yF,"vertexOutputs.texAtlasNext = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(JJ.animated):""}\n\t${"single"===JJ.texture&&JJ.animated?"\n\tlet animFramePos = material.anim.x / abs(material.anim.z);\n\tlet frameTick = floor(animFramePos);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tlet animNextTexIndex = frameTick + 1.0 - material.anim.y * floor((frameTick + 1.0) / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n\tvertexOutputs.vAnimStripNext = vec2f((animNextTexIndex - animTexIndex) / material.anim.y, (animFramePos - frameTick) * step(0.0, material.anim.z));\n":""}\n\t${(0,Vc.S)(qF)}\n\t${(0,Vc.C)(qF,JJ.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${JJ.resting?"":fF}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${FJ?MF(JJ):""}\n\t${"single"===JJ.texture?IF(JJ.animated):""}\n\t${ZJ?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${JJ.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${UJ?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${LJ}));\n\t${jF(JJ)?(0,Vc.bb)(EJ.c.WGSL):(0,Vc.M)(qF)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          YJ = new Set;
        JJ.lighting && YJ.add("BLOXD_LIGHTING");
        UJ && YJ.add("BLOXD_TERRAIN_DIRECTIONAL");
        return mc(jJ, new Map([...YJ].map((JJ => [JJ, !0]))))
      }(JJ, ZJ);
      if (!jF(JJ)) return FJ;
      const UJ = AF(JJ, FJ, SF, cJ, ZJ);
      return "none" === ZJ ? UJ : `${UJ}${function(JJ){const cJ="none"!==JJ.texture&&JJ.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${JJ.resting?"":fF}\n\t${JJ.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${cJ&&"atlas"===JJ.texture?MF(JJ):""}\n\t${cJ&&"single"===JJ.texture?IF(JJ.animated):""}\n\t${cJ?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${qc.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(JJ)}`
    }
    const WF = new Map([
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

    function gF(JJ, cJ) {
      const ZJ = new Map;
      let FJ = 0;
      const UJ = [],
        eJ = [],
        XJ = [];
      for (const jJ of cJ) {
        var AJ, qJ;
        const cJ = null !== (AJ = jJ.type.trim().split(/\s+/).pop()) && void 0 !== AJ ? AJ : jJ.type,
          YJ = WF.get(cJ);
        if (!YJ) throw new Error(`Lite: no uniform layout for ${jJ.name}: ${jJ.type}`);
        const hJ = null !== (qJ = jJ.arraySize) && void 0 !== qJ ? qJ : 0,
          DJ = hJ ? 4 : YJ.align;
        FJ = Math.ceil(FJ / DJ) * DJ;
        const sJ = hJ ? 4 * Math.ceil(YJ.floats / 4) : YJ.floats;
        if (ZJ.set(jJ.name, {
            offset: FJ,
            floats: YJ.floats,
            arraySize: hJ,
            stride: sJ
          }), hJ && YJ.floats <= 2) {
          const cJ = `${JJ}_${XJ.length}_strided`;
          eJ.push(`struct ${cJ} {\n\t@size(16) el: ${YJ.wgsl},\n}`), XJ.push(jJ.name), UJ.push(`\t@align(16) ${jJ.name}: array<${cJ}, ${hJ}>,`)
        } else hJ ? UJ.push(`\t@align(16) ${jJ.name}: array<${YJ.wgsl}, ${hJ}>,`) : UJ.push(`\t${jJ.name}: ${YJ.wgsl},`);
        FJ += hJ ? sJ * hJ : YJ.floats
      }
      return {
        slots: ZJ,
        floats: Math.max(4, 4 * Math.ceil(FJ / 4)),
        wgsl: `${eJ.join("\n")}\nstruct ${JJ} {\n${UJ.join("\n")}\n}\n`,
        stridedArrays: XJ
      }
    }
    const HF = [{
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
      PF = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      kF = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function pF(JJ, cJ) {
      return `#if defined(${JJ}) && ${JJ}DIRECTUV == 0\nvarying v${cJ}UV: vec2f;\n#endif`
    }

    function dF(JJ, cJ, ZJ) {
      return `#if defined(${JJ}) && ${JJ}DIRECTUV == 0\nif (uniforms.v${cJ}Infos.x==0.)\n{vertexOutputs.v${cJ}UV= (uniforms.${ZJ}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${cJ}UV= (uniforms.${ZJ}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function zF(JJ, cJ, ZJ) {
      return `#ifdef ${JJ}\n#if ${JJ}DIRECTUV == 1\n#define v${cJ}UV vMainUV1\n#elif ${JJ}DIRECTUV == 2\n#define v${cJ}UV vMainUV2\n#else\nvarying v${cJ}UV: vec2f;\n#endif\nvar ${ZJ}SamplerSampler: sampler;\nvar ${ZJ}Sampler: texture_2d<f32>;\n#endif`
    }
    const NF = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      OF = 256,
      TF = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      CF = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      uF = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      iF = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      RF = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      LF = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      aF = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      BF = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${CF}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${pF("OPACITY","Opacity")}\n${pF("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${aF}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${uF}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${dF("OPACITY","Opacity","opacity")}\n${dF("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${iF}\n#define CUSTOM_VERTEX_MAIN_END\n${RF}\n}\n`;
    const tF = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${zF("OPACITY","Opacity","opacity")}\n${zF("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${aF}\n${LF}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((JJ,cJ)=>function(JJ){const cJ=`
    frame.lights[LITE_LIGHT$ {
        JJ
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      JJ
    }\
    nvar diffuse$ {
      JJ
    }: vec4f = $ {
      cJ
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      JJ
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      cJ
    }.vLightData, diffuse$ {
      JJ
    }.rgb, $ {
      cJ
    }.vLightSpecular.rgb, diffuse$ {
      JJ
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(cJ))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, oF = /^([gimus]+)!/, lF = new Set;

    function JU(JJ) {
      lF.has(JJ) || (lF.add(JJ), console.warn(`Lite: no place for plugin code at ${JJ} in the standard shader: it is left out`))
    }

    function cU(JJ, cJ) {
      let ZJ = JJ;
      const FJ = new Map;
      for (const [eJ, XJ] of cJ) {
        var UJ;
        FJ.set(eJ, `${null!==(UJ=FJ.get(eJ))&&void 0!==UJ?UJ:""}${XJ}\n`)
      }
      for (const [eJ, XJ] of FJ) {
        if (!eJ.startsWith("!")) {
          const JJ = `#define ${eJ}`;
          if (!ZJ.includes(JJ)) {
            JU(eJ);
            continue
          }
          ZJ = ZJ.replace(JJ, (() => `\n${XJ}\n${JJ}`));
          continue
        }
        let JJ = eJ.substring(1),
          cJ = "g";
        if (JJ.startsWith("!")) cJ = "", JJ = JJ.substring(1);
        else {
          const ZJ = oF.exec(JJ);
          ZJ && (cJ = ZJ[1], JJ = JJ.substring(cJ.length + 1))
        }
        const FJ = new RegExp(JJ, cJ.includes("g") ? cJ : `${cJ}g`);
        let UJ = FJ.exec(ZJ);
        for (UJ || JU(eJ); UJ;) {
          const JJ = UJ,
            cJ = XJ.replace(/\$(\d+)/g, ((cJ, ZJ) => Number(ZJ) < JJ.length ? JJ[Number(ZJ)] : ""));
          ZJ = ZJ.substring(0, JJ.index) + cJ + ZJ.substring(JJ.index + JJ[0].length), FJ.lastIndex = JJ.index + cJ.length, UJ = FJ.exec(ZJ)
        }
      }
      return ZJ
    }
    const ZU = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      FU = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      UU = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function eU(JJ) {
      const cJ = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let ZJ = JJ.replace(ZU, ((JJ, ZJ, FJ, UJ, eJ, XJ) => ("attribute" === ZJ ? cJ.attributes.push({
        name: eJ,
        type: XJ
      }) : void 0 === ZJ ? cJ.varyings.push({
        name: eJ,
        type: XJ,
        interpolation: AU(XJ, FJ, UJ)
      }) : cJ.uniforms.push({
        name: eJ,
        type: XU(XJ)
      }), "")));
      return ZJ = ZJ.replace(FU, ((JJ, ZJ) => (cJ.samplers.add(ZJ), ""))), ZJ = ZJ.replace(UU, ((JJ, ZJ, FJ) => (cJ.textures.push({
        name: ZJ,
        type: FJ
      }), ""))), cJ.body = ZJ, cJ
    }

    function XU(JJ) {
      const cJ = JJ.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        ZJ = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(cJ);
      if (!ZJ) throw new Error(`Lite: unsupported uniform type ${JJ}`);
      return ZJ
    }

    function AU(JJ, cJ, ZJ) {
      return void 0 === cJ && void 0 === ZJ ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(JJ.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === cJ ? "@interpolate(flat) " : `@interpolate(${null!==cJ&&void 0!==cJ?cJ:"perspective"}, ${null!==ZJ&&void 0!==ZJ?ZJ:"center"}) `
    }

    function qU(JJ) {
      return DU({
        defines: JJ.defines,
        vertex: cU(BF, JJ.vertexCode),
        fragment: cU(tF, JJ.fragmentCode),
        members: [...HF, ...JJ.defines.has("OPACITY") ? PF : [], ...JJ.defines.has("EMISSIVE") ? kF : [], ...JJ.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function jU(JJ) {
      const cJ = JJ.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (cJ === JJ) throw new Error("Lite: fragment main has no return");
      return cJ
    }
    const YU = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${CF}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${uF}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${iF}\n${RF}\n}\n`,
      hU = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${LF}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function DU(JJ) {
      const cJ = JJ.defines,
        ZJ = eU(mc(JJ.vertex, cJ)),
        FJ = eU(mc(JJ.fragment, cJ)),
        UJ = new Map;
      for (const vJ of [...ZJ.varyings, ...FJ.varyings]) UJ.has(vJ.name) || UJ.set(vJ.name, vJ);
      const eJ = [...UJ.values()].map(((JJ, cJ) => `\t@location(${cJ}) ${JJ.interpolation}${JJ.name}: ${JJ.type},`)),
        XJ = [...JJ.members];
      for (const vJ of [...ZJ.uniforms, ...FJ.uniforms]) XJ.some((JJ => JJ.name === vJ.name)) || XJ.push(vJ);
      const AJ = gF(JJ.structName, XJ),
        qJ = [],
        jJ = [];
      let YJ = 1;
      const hJ = new Set;
      for (const vJ of [...ZJ.textures, ...FJ.textures]) {
        if (hJ.has(vJ.name)) continue;
        hJ.add(vJ.name);
        const JJ = `${vJ.name}Sampler`,
          cJ = YJ++,
          ZJ = YJ++,
          FJ = vJ.type.startsWith("texture_2d_array") ? "2d-array" : vJ.type.startsWith("texture_cube") ? "cube" : "2d";
        qJ.push({
          name: vJ.name,
          binding: cJ,
          samplerBinding: ZJ,
          dimension: FJ
        }), jJ.push(`@group(2) @binding(${cJ}) var ${vJ.name}: ${vJ.type};`), jJ.push(`@group(2) @binding(${ZJ}) var ${JJ}: sampler;`)
      }
      for (const vJ of [...ZJ.samplers, ...FJ.samplers])
        if (!hJ.has(vJ.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${vJ} has no texture`);
      const DJ = [GF, TF, AJ.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${JJ.structName};`, ...jJ].join("\n"),
        sJ = ZJ.attributes,
        nJ = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...ZJ.attributes.map(((JJ, cJ) => `\t@location(${cJ}) ${JJ.name}: ${JJ.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        GJ = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...eJ, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        fJ = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...FJ.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...eJ, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", aJ, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${LJ}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        xJ = JJ => {
          for (const cJ of AJ.stridedArrays) JJ = JJ.replace(new RegExp(`\\b${cJ}\\s*\\[(.*?)\\]`, "g"), `${cJ}[$1].el`);
          return JJ
        };
      return {
        vertex: `${DJ}\n${nJ}\n${GJ}\n${xJ(ZJ.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${DJ}\n${fJ}\n${jU((rJ=xJ(FJ.body),rJ.includes("fragmentInputs.position")?rJ.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):rJ))}`,
        attributes: sJ,
        material: AJ,
        textures: qJ
      };
      var rJ
    }
    const sU = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      nU = JJ => ({
        name: JJ,
        type: "vec3"
      }),
      GU = JJ => ({
        name: JJ,
        type: "float"
      }),
      fU = gF("EarthSkyUniforms", [nU("viewFrom"), GU("exposureScale"), nU("zenithOffset"), GU("fogOn"), nU("up"), GU("ditherOn"), nU("sun"), GU("turbidity"), nU("tint"), GU("rayleigh"), nU("sunDir"), GU("mieStrength"), nU("inScatterR"), GU("mieFocus"), nU("inScatterM"), GU("sunE"), nU("extinctionBeta"), GU("sunsetMix"), GU("mieScale"), GU("mieBase"), GU("mieSlope"), GU("sunDiscE"), GU("exposure")]),
      xU = `${GF}\n${TF}\n${fU.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      rU = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${sU.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      vU = `\n${aJ}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(fc).map((JJ=>{let[cJ,ZJ]=JJ;return`const TONE_${cJ}: f32 = ${ZJ};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${xc};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${LJ}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var mU = ZJ(36165);
    const QU = new mU.Pn,
      EU = new mU.Pn,
      VU = new mU.Quaternion,
      KU = new Float64Array(3),
      yU = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      SU = new Float64Array(16);

    function IU(JJ, cJ, ZJ) {
      const FJ = ZJ.worldMatrix;
      var UJ;
      JJ.updateFloat3("viewFrom", FJ[12], FJ[13], FJ[14]), JJ.updateFloatsFrom("zenithOffset", cJ.cameraOffset, 0, 3), JJ.updateFloatsFrom("up", cJ.up, 0, 3), cJ.luminance > 0 && (JJ.updateFloat("exposure", cJ.luminance), JJ.updateFloat("exposureScale", (UJ = cJ.luminance, Math.log2(2 / Math.pow(UJ, 4))))), JJ.updateFloat("turbidity", cJ.turbidity), JJ.updateFloat("rayleigh", cJ.rayleigh), JJ.updateFloat("mieStrength", cJ.mieCoefficient), JJ.updateFloat("mieFocus", cJ.mieDirectionalG), JJ.updateFloatsFrom("tint", cJ.tint, 0, 3), JJ.updateFloat("fogOn", cJ.fog && ZJ.fogEnabled && 0 !== ZJ.fogMode ? 1 : 0), JJ.updateFloat("ditherOn", cJ.dithering ? 1 : 0);
      const eJ = cJ.sunPosition;
      if (QU.set(eJ[0], eJ[1], eJ[2]), !cJ.useSunPosition) {
        const JJ = Math.PI * (cJ.inclination - .5),
          ZJ = 2 * Math.PI * (cJ.azimuth - .5);
        QU.set(cJ.distance * Math.cos(ZJ) * Math.cos(JJ), cJ.distance * Math.sin(-JJ), cJ.distance * Math.sin(ZJ) * Math.cos(JJ)), mU.Quaternion.FromUnitVectorsToRef(mU.Pn.UpReadOnly, EU.set(cJ.up[0], cJ.up[1], cJ.up[2]), VU), QU.rotateByQuaternionToRef(VU, QU)
      }
      JJ.updateVector3("sun", QU), KU[0] = QU.x, KU[1] = QU.y, KU[2] = QU.z;
      const XJ = Gc(cJ, KU, yU);
      JJ.updateFloatsFrom("sunDir", XJ.sunDir, 0, 3), JJ.updateFloat("sunE", XJ.sunE), JJ.updateFloatsFrom("inScatterR", XJ.inScatterR, 0, 3), JJ.updateFloatsFrom("inScatterM", XJ.inScatterM, 0, 3), JJ.updateFloatsFrom("extinctionBeta", XJ.extinctionBeta, 0, 3), JJ.updateFloat("sunsetMix", XJ.sunsetMix), JJ.updateFloat("sunDiscE", XJ.sunDiscE), JJ.updateFloat("mieScale", XJ.mieScale), JJ.updateFloat("mieBase", XJ.mieBase), JJ.updateFloat("mieSlope", XJ.mieSlope)
    }

    function MU(JJ, cJ) {
      const ZJ = SU;
      ZJ[0] = cJ.far, ZJ[5] = cJ.far, ZJ[10] = cJ.far, ZJ[15] = 1;
      const FJ = JJ.infiniteDistance;
      for (let UJ = 0; UJ < 3; UJ++) ZJ[12 + UJ] = JJ.position[UJ] + (FJ ? cJ.worldMatrix[12 + UJ] : 0);
      return SU
    }
    var bU = ZJ(37691);

    function wU(JJ) {
      return Math.max(4, 4 * Math.ceil(JJ / 4))
    }

    function WU(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.createBuffer({
        label: FJ,
        size: wU(cJ.byteLength),
        usage: ZJ,
        mappedAtCreation: !0
      });
      return new Uint8Array(UJ.getMappedRange(), 0, cJ.byteLength).set(new Uint8Array(cJ.buffer, cJ.byteOffset, cJ.byteLength)), UJ.unmap(), UJ
    }

    function gU(JJ, cJ) {
      return Math.floor(Math.log2(Math.max(JJ, cJ))) + 1
    }

    function HU(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = JJ.createTexture({
          label: eJ,
          size: {
            width: ZJ,
            height: FJ,
            depthOrArrayLayers: UJ
          },
          format: "rgba8unorm",
          mipLevelCount: gU(ZJ, FJ),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        AJ = (cJ, ZJ, FJ, eJ) => {
          JJ.queue.writeTexture({
            texture: XJ,
            mipLevel: ZJ
          }, cJ, {
            bytesPerRow: 4 * FJ,
            rowsPerImage: eJ
          }, {
            width: FJ,
            height: eJ,
            depthOrArrayLayers: UJ
          })
        };
      AJ(cJ, 0, ZJ, FJ);
      let qJ = 1;
      for (const jJ of function*(JJ, cJ, ZJ, FJ) {
          let UJ = JJ,
            eJ = cJ,
            XJ = ZJ;
          for (; eJ > 1 || XJ > 1;) {
            const JJ = Math.max(1, eJ >> 1),
              cJ = Math.max(1, XJ >> 1),
              ZJ = new Uint8Array(JJ * cJ * FJ * 4),
              AJ = 4 * eJ;
            let qJ = 0;
            for (let jJ = 0; jJ < FJ; jJ++) {
              const FJ = jJ * AJ * XJ;
              for (let jJ = 0; jJ < cJ; jJ++) {
                const cJ = FJ + Math.min(2 * jJ, XJ - 1) * AJ,
                  YJ = FJ + Math.min(2 * jJ + 1, XJ - 1) * AJ;
                for (let FJ = 0; FJ < JJ; FJ++) {
                  const JJ = 4 * Math.min(2 * FJ, eJ - 1),
                    XJ = 4 * Math.min(2 * FJ + 1, eJ - 1);
                  for (let FJ = 0; FJ < 4; FJ++) ZJ[qJ++] = UJ[cJ + JJ + FJ] + UJ[cJ + XJ + FJ] + UJ[YJ + JJ + FJ] + UJ[YJ + XJ + FJ] + 2 >> 2
                }
              }
            }
            yield {
              data: ZJ,
              width: JJ,
              height: cJ
            }, UJ = ZJ, eJ = JJ, XJ = cJ
          }
        }(cJ, ZJ, FJ, UJ)) AJ(jJ.data, qJ++, jJ.width, jJ.height);
      return XJ
    }
    const PU = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function kU(JJ) {
      if (JJ.startsWith("data:")) {
        const cJ = JJ.search(/[;,]/);
        return `data:${cJ>5?JJ.slice(5,cJ):""} URL of ${JJ.length} characters`
      }
      return JJ.length > 80 ? `${JJ.slice(0,80)}...` : JJ
    }
    async function pU(JJ) {
      const cJ = await fetch(JJ);
      if (!cJ.ok) throw new Error(`${kU(JJ)}: ${cJ.status} ${cJ.statusText}`);
      return createImageBitmap(await cJ.blob(), PU)
    }
    async function dU(JJ) {
      const cJ = await pU(JJ),
        ZJ = new OffscreenCanvas(cJ.width, cJ.height),
        FJ = ZJ.getContext("2d", {
          willReadFrequently: !0
        });
      if (!FJ) throw new Error("No 2D context to decode an image");
      FJ.drawImage(cJ, 0, 0);
      const {
        data: UJ
      } = FJ.getImageData(0, 0, cJ.width, cJ.height);
      return cJ.close(), {
        pixels: new Uint8Array(UJ.buffer, UJ.byteOffset, UJ.byteLength),
        width: ZJ.width,
        height: ZJ.height
      }
    }
    const zU = new WeakMap;

    function NU(JJ, cJ, ZJ, FJ) {
      var UJ;
      const eJ = null !== (UJ = zU.get(JJ)) && void 0 !== UJ ? UJ : new Map;
      zU.set(JJ, eJ);
      let XJ = eJ.get(cJ);
      return XJ || (XJ = (async UJ => {
        const eJ = null !== (UJ = function(JJ, cJ) {
          const ZJ = JJ ? new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength) : null;
          return null !== ZJ && void 0 !== ZJ && ZJ.byteLength && cJ && ZJ.byteLength % (cJ * cJ * 4) === 0 ? {
            pixels: ZJ,
            layerWidth: cJ,
            layers: ZJ.byteLength / (cJ * cJ * 4)
          } : null
        }(ZJ, FJ)) && void 0 !== UJ ? UJ : await async function(JJ) {
          const {
            pixels: cJ,
            width: ZJ
          } = await dU(JJ);
          return {
            pixels: cJ,
            layerWidth: ZJ,
            layers: cJ.byteLength / (ZJ * ZJ * 4)
          }
        }(cJ), {
          layerWidth: XJ,
          layers: AJ
        } = eJ;
        return {
          texture: HU(JJ, eJ.pixels, XJ, XJ, AJ, `atlas-${cJ}`),
          layerWidth: XJ,
          layers: AJ
        }
      })(), eJ.set(cJ, XJ), XJ.catch((() => {
        eJ.delete(cJ)
      }))), XJ
    }
    const OU = new Map([
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
      TU = new Map([
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

    function CU(JJ) {
      for (const cJ of (0, bU.k)(JJ))
        if (!TU.has((0, bU.h)(cJ))) return !1;
      return !0
    }

    function uU(JJ) {
      const cJ = TU.get(JJ);
      if (!cJ) return null;
      const [ZJ, FJ, UJ] = cJ;
      return {
        srcFactor: OU.get(ZJ),
        dstFactor: OU.get(FJ),
        operation: UJ
      }
    }
    let iU = null;

    function RU(JJ) {
      iU = JJ
    }

    function LU(JJ, cJ, ZJ) {
      var FJ;
      null === (FJ = iU) || void 0 === FJ || FJ(JJ, cJ, ZJ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class aU {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(JJ, cJ, ZJ, FJ, UJ) {
        ZJ !== this.pipeline && (JJ.setPipeline(ZJ), this.pipeline = ZJ), JJ.setBindGroup(1, FJ, [UJ]);
        const eJ = cJ.material.bindGroup;
        eJ !== this.materialGroup && (JJ.setBindGroup(2, eJ), this.materialGroup = eJ);
        const XJ = cJ.program.packGroup;
        XJ && XJ !== this.packGroup && (JJ.setBindGroup(Sc.f, XJ), this.packGroup = XJ);
        const {
          vertexBuffers: AJ,
          vertexOffsets: qJ
        } = this;
        for (let jJ = 0; jJ < cJ.vertexBuffers.length; jJ++) AJ[jJ] === cJ.vertexBuffers[jJ] && qJ[jJ] === cJ.vertexOffsets[jJ] || (JJ.setVertexBuffer(jJ, cJ.vertexBuffers[jJ], cJ.vertexOffsets[jJ]), AJ[jJ] = cJ.vertexBuffers[jJ], qJ[jJ] = cJ.vertexOffsets[jJ]);
        cJ.indexBuffer && cJ.indexBuffer !== this.indexBuffer && (JJ.setIndexBuffer(cJ.indexBuffer, cJ.indexFormat), this.indexBuffer = cJ.indexBuffer)
      }
    }
    class BU {
      constructor(JJ, cJ, ZJ, FJ) {
        this.modelMeshes = JJ, this.K3 = cJ, this.maker = ZJ, this.warnOnce = FJ, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(JJ) {
        this.collectGroup(JJ, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(JJ, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(JJ, 1, this.frontDraws, this.frontDraws, !0);
        for (const cJ of this.modelMeshes.groupIds())(cJ < -1 || cJ > 1) && this.warnOnce(`group:${cJ}`, `rendering group ${cJ} is not drawn`);
        for (const cJ of this.K3.groupIds())(cJ < -1 || cJ > 1) && this.warnOnce(`group:${cJ}`, `rendering group ${cJ} is not drawn`);
        this.opaqueDraws.sort(tU), this.transparentDraws.sort(oU)
      }
      collectGroup(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = this.modelMeshes.group(cJ),
          XJ = this.K3.group(cJ),
          AJ = 0 === cJ ? null === XJ || void 0 === XJ ? void 0 : XJ.opaque : void 0;
        this.collectList(JJ, null === eJ || void 0 === eJ ? void 0 : eJ.opaque, AJ || null === XJ || void 0 === XJ ? void 0 : XJ.opaque, cJ, !1, ZJ, UJ), AJ && (this.K3.drawn += this.maker.bundleDraws(JJ, AJ, cJ)), this.collectList(JJ, null === eJ || void 0 === eJ ? void 0 : eJ.alphaTest, void 0, cJ, !1, ZJ, UJ), this.collectList(JJ, null === eJ || void 0 === eJ ? void 0 : eJ.transparent, null === XJ || void 0 === XJ ? void 0 : XJ.transparent, cJ, !0, FJ, UJ)
      }
      collectList(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        var AJ;
        const qJ = eJ.length;
        cJ && this.maker.pushDraws(JJ, cJ.units, cJ.units.length, FJ, UJ, eJ, cJ.rows), ZJ && (this.K3.drawn += this.maker.pushDraws(JJ, ZJ, ZJ.length, FJ, UJ, eJ));
        const jJ = UJ ? null === (AJ = this.modelMeshes.group(FJ)) || void 0 === AJ ? void 0 : AJ.text : void 0;
        jJ && this.maker.pushDraws(JJ, jJ.units, jJ.units.length, FJ, !0, eJ, jJ.rows), XJ && lU(eJ, qJ)
      }
    }

    function tU(JJ, cJ) {
      return JJ.program.id - cJ.program.id || JJ.material.owner.uniqueId - cJ.material.owner.uniqueId
    }

    function oU(JJ, cJ) {
      return JJ.material.owner.uniqueId - cJ.material.owner.uniqueId
    }

    function lU(JJ, cJ) {
      for (let ZJ = cJ + 1; ZJ < JJ.length; ZJ++) {
        const FJ = JJ[ZJ];
        let UJ = ZJ - 1;
        for (; UJ >= cJ && oU(JJ[UJ], FJ) > 0; UJ--) JJ[UJ + 1] = JJ[UJ];
        JJ[UJ + 1] = FJ
      }
    }
    const Je = {};

    function ce(JJ) {
      return JJ.hasThinInstances ? "thin" : JJ.CFJ || JJ._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Ze(JJ, cJ, ZJ) {
      return JJ ? (ZJ._needUVs = !0, JJ.optimizeUVAllocation && (0, IJ.F)(JJ.matrix) ? (ZJ[`${cJ}DIRECTUV`] = JJ.uvSet + 1, ZJ[`MAINUV${JJ.uvSet+1}`] = !0) : ZJ[`${cJ}DIRECTUV`] = 0, !0) : (ZJ[`${cJ}DIRECTUV`] = 0, !1)
    }

    function Fe(JJ) {
      const cJ = new Map;
      for (const ZJ in JJ) {
        if (95 === ZJ.charCodeAt(0)) continue;
        const FJ = JJ[ZJ],
          UJ = typeof FJ;
        "number" === UJ || "string" === UJ ? cJ.set(ZJ, String(FJ)) : FJ && "function" !== UJ && cJ.set(ZJ, !0)
      }
      return cJ
    }

    function Ue(JJ) {
      const cJ = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: ZJ
        }
        of JJ.features)
        for (const JJ in ZJ) cJ[JJ] = ZJ[JJ];
      return cJ
    }

    function ee(JJ) {
      const cJ = JJ.parts.geometry;
      return null !== cJ && void 0 !== cJ && cJ.live ? cJ : null
    }

    function Xe(JJ) {
      var cJ;
      return null !== (cJ = ee(JJ)) && void 0 !== cJ ? cJ : Je
    }
    class Ae {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = JJ, this.warnOnce = cJ, this.programWithModel = ZJ, this.packFailed = FJ, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = cJ.owner;
        let XJ = this.drawStates.get(cJ);
        if (!XJ) {
          const JJ = cJ.parts.materials[cJ.range];
          if (!JJ) return this.warnOnce("model", `${ZJ.name} on ${eJ.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          XJ = {
            defines: Ue(JJ),
            model: JJ,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: UJ,
            groupId: FJ,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(cJ, XJ)
        }
        if (this.programCurrent(XJ, cJ, UJ, FJ)) return XJ.program;
        const {
          model: AJ
        } = XJ, qJ = Xe(cJ), jJ = this.instanceLayout(eJ, UJ), YJ = this.definesBits(eJ);
        if (!this.prepareModelDefines(JJ, eJ, AJ, XJ.defines, FJ, UJ)) return null;
        XJ.instancing = UJ, XJ.groupId = FJ, XJ.modelVersion = AJ.version, XJ.geometry = qJ, XJ.instanceLayout = jJ, XJ.definesBits = YJ;
        const hJ = function(JJ) {
          let cJ = "";
          for (const [ZJ, FJ] of JJ) cJ += !0 === FJ ? `${ZJ};` : `${ZJ}=${FJ};`;
          return cJ
        }(Fe(XJ.defines));
        return hJ === XJ.definesKey && XJ.packVariant === this.modelPackVariant && XJ.program && !this.packFailed(XJ.program) || (XJ.definesKey = hJ, XJ.packVariant = this.modelPackVariant, XJ.program = this.programWithModel(AJ, XJ.defines, hJ)), XJ.program
      }
      programCurrent(JJ, cJ, ZJ, FJ) {
        return null !== JJ.program && !this.packFailed(JJ.program) && JJ.instancing === ZJ && JJ.groupId === FJ && this.definesHold(JJ, cJ, ZJ)
      }
      definesHold(JJ, cJ, ZJ) {
        return JJ.modelVersion === JJ.model.version && JJ.geometry === Xe(cJ) && JJ.instanceLayout === this.instanceLayout(cJ.owner, ZJ) && JJ.definesBits === this.definesBits(cJ.owner) && JJ.packVariant === this.modelPackVariant
      }
      modelPackKind(JJ) {
        var cJ;
        return 0 === this.modelPackVariant ? null : null !== (cJ = (0, yJ.r)(JJ, KJ.j.name)) && void 0 !== cJ && cJ.active ? "placed" : JJ.item ? "item" : JJ.lifeform ? "lifeform" : JJ.box ? "box" : null
      }
      instanceLayout(JJ, cJ) {
        var ZJ, FJ, UJ;
        return "thin" === cJ ? null !== (UJ = this.resources.b_.get(JJ)) && void 0 !== UJ ? UJ : null : "instanced" === cJ && null !== (ZJ = null === (FJ = JJ._userInstancedBuffersStorage) || void 0 === FJ ? void 0 : FJ.interleavedKinds) && void 0 !== ZJ ? ZJ : null
      }
      definesBits(JJ) {
        const cJ = this.view;
        return (JJ.visibility < 1 ? 1 : 0) | (JJ.hasVertexAlpha ? 2 : 0) | (JJ.applyFog ? 4 : 0) | (JJ.useVertexColors ? 8 : 0) | (JJ.nonUniformScaling ? 16 : 0) | (cJ.fogEnabled && 0 !== cJ.fogMode ? 32 : 0) | (cJ.lightsEnabled ? 64 : 0) | cJ.lightCount << 7
      }
      prepareLightDefines(JJ, cJ, ZJ) {
        let FJ = 0;
        if (this.view.lightsEnabled && !cJ) {
          const cJ = Math.min(ZJ, 4);
          for (; FJ < this.view.lightCount && (JJ[`LIGHT${FJ}`] = !0, JJ[`LITE_LIGHT${FJ}_SLOT`] = FJ, FJ++, JJ._needNormals = !0, FJ !== cJ););
        }
        for (let UJ = FJ; UJ < 4; UJ++) JJ[`LIGHT${UJ}`] = !1, JJ[`LITE_LIGHT${UJ}_SLOT`] = void 0
      }
      prepareModelDefines(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const {
          features: XJ
        } = ZJ;
        FJ._needNormals = !1, FJ._needUVs = !1;
        const AJ = this.view;
        this.prepareLightDefines(FJ, ZJ.disableLighting, ZJ.maxSimultaneousLights), FJ.MAINUV1 = !1, FJ.MAINUV2 = !1;
        const qJ = ZJ.diffuseTexture;
        qJ ? (FJ._needUVs = !0, FJ.DIFFUSE = !0, qJ.optimizeUVAllocation && (0, IJ.F)(qJ.matrix) ? (FJ.DIFFUSEDIRECTUV = qJ.uvSet + 1, FJ[`MAINUV${qJ.uvSet+1}`] = !0) : FJ.DIFFUSEDIRECTUV = 0, qJ.uvSet > 1 && this.warnOnce(`uvset:${ZJ.name}`, `${ZJ.name} samples UV set ${qJ.uvSet+1}, which is not supported`)) : (FJ.DIFFUSE = !1, FJ.DIFFUSEDIRECTUV = 0);
        const jJ = ZJ.opacityTexture,
          YJ = ZJ.emissiveTexture;
        FJ.OPACITY = Ze(jJ, "OPACITY", FJ), FJ.OPACITYRGB = null !== jJ && jJ.getAlphaFromRGB, FJ.EMISSIVE = Ze(YJ, "EMISSIVE", FJ), (jJ && jJ.uvSet > 1 || YJ && YJ.uvSet > 1) && this.warnOnce(`uvset:${ZJ.name}`, `${ZJ.name} samples a UV set past 2, which is not supported`);
        const hJ = ZJ.reflectionTexture,
          DJ = null !== hJ;
        if (DJ) {
          if (!this.resources.boundTexture(hJ)) return !1;
          FJ._needNormals = !0
        }
        FJ.REFLECTION = DJ, FJ.REFLECTIONMAP_3D = DJ, FJ.REFLECTIONMAP_SKYBOX = DJ, FJ.REFLECTIONMAP_OPPOSITEZ = DJ && (JJ.useRightHandedSystem ? !hJ.invertZ : hJ.invertZ), FJ.ROUGHNESS = DJ && ZJ.roughness > 0, FJ.REFLECTIONOVERALPHA = DJ && ZJ.useReflectionOverAlpha, FJ.LITE_REFLECTION_LUMINANCE = DJ && "cube" === hJ.source.kind && hJ.source.luminance, (cJ.skeleton || cJ.morphTargetManager) && this.warnOnce(`skin:${cJ.name}`, `${cJ.name} has bones or morph targets, which are not supported`), FJ.FOG = ZJ.fogEnabled && cJ.applyFog && AJ.fogEnabled && 0 !== AJ.fogMode, FJ.NONUNIFORMSCALING = cJ.nonUniformScaling;
        const {
          visibility: sJ,
          hasVertexAlpha: nJ
        } = cJ;
        FJ.ALPHATEST = (0, yJ.R)(ZJ, sJ, nJ), FJ.ALPHAFROMDIFFUSE = (0, yJ.db)(ZJ), FJ.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== ZJ.transparencyMode, FJ.ALPHABLEND = null === ZJ.transparencyMode || (0, yJ.P)(ZJ, sJ, nJ), FJ.PREMULTIPLYALPHA = 7 === ZJ.alphaMode || 8 === ZJ.alphaMode, FJ.EMISSIVEASILLUMINATION = ZJ.useEmissiveAsIllumination, FJ.LINKEMISSIVEWITHDIFFUSE = ZJ.linkEmissiveWithDiffuse, FJ.TWOSIDEDLIGHTING = !ZJ.backFaceCulling && ZJ.twoSidedLighting, FJ.INSTANCES = "none" !== eJ, FJ.THIN_INSTANCES = "thin" === eJ, FJ.LITE_FRONT_LAYER = UJ >= 1;
        for (const {
            feature: VJ,
            state: KJ,
            active: yJ
          }
          of XJ) {
          var GJ, fJ;
          if (yJ) null === (GJ = (fJ = (0, Yc.i)(VJ)).prepareDefinesBeforeAttributes) || void 0 === GJ || GJ.call(fJ, KJ, FJ, JJ, cJ)
        }
        this.modelPackKind(ZJ) && (FJ._needNormals = !0), FJ.NORMAL = FJ._needNormals && cJ.isVerticesDataPresent("normal"), FJ.UV1 = FJ._needUVs && cJ.isVerticesDataPresent("uv"), FJ.UV2 = FJ._needUVs && cJ.isVerticesDataPresent("uv2");
        const xJ = cJ.useVertexColors && cJ.isVerticesDataPresent("color");
        FJ.VERTEXCOLOR = xJ, FJ.VERTEXALPHA = cJ.hasVertexAlpha && xJ, FJ.INSTANCESCOLOR = "none" !== eJ && cJ.isVerticesDataPresent("instanceColor");
        for (const {
            feature: VJ,
            state: KJ,
            active: yJ
          }
          of XJ) {
          var rJ, vJ;
          if (yJ) null === (rJ = (vJ = (0, Yc.i)(VJ)).prepareDefines) || void 0 === rJ || rJ.call(vJ, KJ, FJ, JJ, cJ, ZJ)
        }
        const mJ = JJ.gn();
        for (const {
            feature: VJ,
            state: KJ,
            active: yJ
          }
          of XJ) {
          var QJ, EJ;
          if (yJ && !1 === (null === (QJ = (EJ = (0, Yc.i)(VJ)).isReadyForSubMesh) || void 0 === QJ ? void 0 : QJ.call(EJ, KJ, FJ, JJ, mJ))) return !1
        }
        return !0
      }
    }

    function qe(JJ, cJ, ZJ) {
      return JJ.codeVersion !== cJ.version && function(JJ, cJ) {
        const ZJ = [],
          FJ = [];
        for (const {
            feature: DJ,
            state: sJ,
            active: nJ
          }
          of cJ.features) {
          var UJ, eJ, XJ, AJ;
          if (nJ) je(null === (UJ = (eJ = (0, Yc.i)(DJ)).getCustomCode) || void 0 === UJ ? void 0 : UJ.call(eJ, sJ, "vertex", EJ.c.WGSL), ZJ), je(null === (XJ = (AJ = (0, Yc.i)(DJ)).getCustomCode) || void 0 === XJ ? void 0 : XJ.call(AJ, sJ, "fragment", EJ.c.WGSL), FJ)
        }
        const qJ = [];
        for (const {
            feature: DJ,
            state: sJ
          }
          of cJ.features) {
          var jJ, YJ;
          const JJ = null === (jJ = (YJ = (0, Yc.i)(DJ)).getUniforms) || void 0 === jJ ? void 0 : jJ.call(YJ, sJ, EJ.c.WGSL);
          for (const cJ of null !== (hJ = null === JJ || void 0 === JJ ? void 0 : JJ.ubo) && void 0 !== hJ ? hJ : []) {
            var hJ;
            cJ.size && cJ.type && qJ.push({
              name: cJ.name,
              type: cJ.type,
              arraySize: cJ.arraySize
            })
          }
        }
        JJ.vertexCode = ZJ, JJ.fragmentCode = FJ, JJ.pluginUniforms = qJ, JJ.codeKey = JSON.stringify([ZJ, FJ, qJ]), JJ.codeVersion = cJ.version
      }(JJ, cJ), `${ZJ}#${JJ.codeKey}`
    }

    function je(JJ, cJ) {
      if (JJ)
        for (const ZJ in JJ) JJ[ZJ] && cJ.push([ZJ, JJ[ZJ]])
    }
    const Ye = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class he {
      constructor(JJ) {
        this.warnOnce = JJ, this.states = new Map
      }
      renderState(JJ, cJ, ZJ, FJ) {
        var UJ;
        let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          XJ = null !== (UJ = JJ.sideOrientation) && void 0 !== UJ ? UJ : cJ.sideOrientation;
        cJ._getWorldMatrixDeterminant() < 0 && (XJ = 0 === XJ ? 1 : 0);
        const AJ = "triangle-list" === eJ,
          qJ = ZJ ? JJ.alphaMode : 0,
          jJ = (!ZJ || (0 === qJ || JJ.forceDepthWrite)) && !JJ.disableDepthWrite,
          YJ = AJ && JJ.backFaceCulling ? JJ.cullBackFaces ? "back" : "front" : "none",
          hJ = AJ && 0 !== XJ ? "ccw" : "cw",
          DJ = JJ.depthFunction,
          sJ = AJ ? JJ.zOffset : 0,
          nJ = AJ ? JJ.zOffsetUnits : 0,
          GJ = !JJ.disableColorWrite;
        return FJ && FJ.alphaMode === qJ && FJ.depthWrite === jJ && FJ.depthFunction === DJ && FJ.cullMode === YJ && FJ.frontFace === hJ && FJ.zOffset === sJ && FJ.zOffsetUnits === nJ && FJ.colourWrite === GJ && FJ.topology === eJ ? FJ : this.stateFor(qJ, jJ, DJ, YJ, hJ, sJ, nJ, GJ, eJ)
      }
      stateFor(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        const jJ = `${JJ}|${cJ}|${ZJ}|${FJ}|${UJ}|${eJ}|${XJ}|${AJ}|${qJ}`;
        let YJ = this.states.get(jJ);
        if (!YJ) {
          var hJ;
          const DJ = JJ ? uU(JJ) : null;
          JJ && !DJ && this.warnOnce(`alpha:${JJ}`, `alpha mode ${JJ} is not supported`), YJ = {
            key: jJ,
            alphaMode: JJ,
            depthFunction: ZJ,
            zOffset: eJ,
            zOffsetUnits: XJ,
            topology: qJ,
            blend: DJ,
            depthWrite: cJ,
            depthCompare: ZJ && null !== (hJ = Ye.get(ZJ)) && void 0 !== hJ ? hJ : null,
            cullMode: FJ,
            frontFace: UJ,
            depthBias: -XJ,
            depthBiasSlopeScale: -eJ,
            colourWrite: AJ
          }, this.states.set(jJ, YJ)
        }
        return YJ
      }
    }
    var De = ZJ(36342);

    function se(JJ) {
      if (!JJ.frozen) return -1;
      let cJ = JJ.version;
      for (const {
          feature: ZJ,
          state: FJ,
          active: UJ
        }
        of JJ.features) {
        if (!UJ || !ZJ.bind) continue;
        const JJ = (0, Yc.i)(ZJ).uniformsVersion;
        if (!JJ) return -1;
        cJ += JJ(FJ)
      }
      return cJ
    }
    class ne {
      constructor(JJ, cJ, ZJ) {
        this.slots = JJ, this.data = cJ, this.textures = ZJ, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(JJ, cJ) {
        this.write4(JJ, cJ, 0, 0, 0, 1)
      }
      updateFloat2(JJ, cJ, ZJ) {
        this.write4(JJ, cJ, ZJ, 0, 0, 2)
      }
      updateFloat3(JJ, cJ, ZJ, FJ) {
        this.write4(JJ, cJ, ZJ, FJ, 0, 3)
      }
      updateFloat4(JJ, cJ, ZJ, FJ, UJ) {
        this.write4(JJ, cJ, ZJ, FJ, UJ, 4)
      }
      updateVector3(JJ, cJ) {
        this.write4(JJ, cJ.x, cJ.y, cJ.z, 0, 3)
      }
      updateVector4(JJ, cJ) {
        this.write4(JJ, cJ.x, cJ.y, cJ.z, cJ.w, 4)
      }
      updateColor3(JJ, cJ) {
        this.write4(JJ, cJ.r, cJ.g, cJ.b, 0, 3)
      }
      updateColor4(JJ, cJ, ZJ) {
        this.write4(JJ, cJ.r, cJ.g, cJ.b, ZJ, 4)
      }
      updateFloatsFrom(JJ, cJ, ZJ, FJ) {
        const UJ = this.slots.get(JJ);
        if (!UJ) return;
        const eJ = this.data,
          XJ = UJ.offset;
        for (let AJ = 0; AJ < FJ; AJ++) eJ[XJ + AJ] = cJ[ZJ + AJ]
      }
      updateFloat3TimesFloats(JJ, cJ, ZJ, FJ) {
        const UJ = this.slots.get(JJ);
        if (!UJ) return;
        const eJ = this.data,
          XJ = UJ.offset;
        eJ[XJ] = cJ[ZJ] * FJ[0], eJ[XJ + 1] = cJ[ZJ + 1] * FJ[1], eJ[XJ + 2] = cJ[ZJ + 2] * FJ[2]
      }
      Y5(JJ, cJ) {
        const ZJ = this.slots.get(JJ);
        ZJ && this.data.set(cJ.m, ZJ.offset)
      }
      updateMatrixFloats(JJ, cJ) {
        const ZJ = this.slots.get(JJ);
        ZJ && this.data.set(cJ, ZJ.offset)
      }
      updateFloatArray(JJ, cJ) {
        const ZJ = this.slots.get(JJ);
        if (!ZJ) return;
        if (!ZJ.arraySize || ZJ.stride === ZJ.floats) return void this.data.set(cJ, ZJ.offset);
        const FJ = Math.min(cJ.length, ZJ.floats * ZJ.arraySize);
        for (let UJ = 0; UJ < FJ; UJ++) this.data[ZJ.offset + Math.floor(UJ / ZJ.floats) * ZJ.stride + UJ % ZJ.floats] = cJ[UJ]
      }
      updateArray(JJ, cJ) {
        this.updateFloatArray(JJ, cJ)
      }
      setTexture(JJ, cJ) {
        this.textures.set(JJ, cJ), this.expected.delete(JJ)
      }
      expectTexture(JJ) {
        this.textures.set(JJ, null), this.expected.add(JJ)
      }
      write4(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = this.slots.get(JJ);
        if (!XJ) return;
        const AJ = this.data,
          qJ = XJ.offset;
        AJ[qJ] = cJ, eJ > 1 && (AJ[qJ + 1] = ZJ), eJ > 2 && (AJ[qJ + 2] = FJ), eJ > 3 && (AJ[qJ + 3] = UJ)
      }
    }

    function Ge(JJ, cJ) {
      const ZJ = NF,
        FJ = De.f,
        UJ = JJ.lights,
        eJ = Math.min(JJ.lightCount, 8);
      for (let XJ = 0; XJ < eJ; XJ++) {
        const JJ = ZJ.lights + XJ * ZJ.lightStride,
          eJ = XJ * De.c;
        cJ[JJ] = UJ[eJ + FJ.vector], cJ[JJ + 1] = UJ[eJ + FJ.vector + 1], cJ[JJ + 2] = UJ[eJ + FJ.vector + 2], cJ[JJ + 3] = UJ[eJ + FJ.kind] === De.e.directional ? 1 : 0, cJ[JJ + 4] = UJ[eJ + FJ.diffuse], cJ[JJ + 5] = UJ[eJ + FJ.diffuse + 1], cJ[JJ + 6] = UJ[eJ + FJ.diffuse + 2], cJ[JJ + 7] = UJ[eJ + FJ.range], cJ[JJ + 8] = UJ[eJ + FJ.specular], cJ[JJ + 9] = UJ[eJ + FJ.specular + 1], cJ[JJ + 10] = UJ[eJ + FJ.specular + 2], cJ[JJ + 11] = UJ[eJ + FJ.range]
      }
      cJ[ZJ.fogInfos] = JJ.fogMode, cJ[ZJ.fogInfos + 1] = JJ.fogStart, cJ[ZJ.fogInfos + 2] = JJ.fogEnd, cJ[ZJ.fogInfos + 3] = JJ.fogDensity, cJ[ZJ.fogColour] = JJ.fogColour[0], cJ[ZJ.fogColour + 1] = JJ.fogColour[1], cJ[ZJ.fogColour + 2] = JJ.fogColour[2], cJ[ZJ.outputHeight] = JJ.renderHeight, cJ[ZJ.animTick] = JJ.animTick, cJ[ZJ.timeMs] = JJ.timeMs
    }
    class fe {
      constructor(JJ) {
        this.instancesOf = JJ
      }
      refreshModelUniforms(JJ, cJ, ZJ, FJ) {
        const UJ = se(ZJ);
        if (UJ >= 0 && UJ === cJ.heldVersion && cJ.textures.get("diffuseSampler") === ZJ.diffuseTexture && cJ.textures.get("reflectionCubeSampler") === ZJ.reflectionTexture && cJ.textures.get("opacitySampler") === ZJ.opacityTexture && cJ.textures.get("emissiveSampler") === ZJ.emissiveTexture) return !0;
        if (UJ < 0)
          for (const eJ of this.instancesOf(ZJ)) eJ.heldVersion = -1;
        return this.writeModelUniforms(JJ, cJ, ZJ, FJ), cJ.heldVersion = UJ, !1
      }
      writeModelUniforms(JJ, cJ, ZJ, FJ) {
        const {
          ubo: UJ
        } = cJ, eJ = ZJ.diffuseTexture, XJ = ZJ.diffuseColor;
        UJ.updateFloat4("vDiffuseColor", XJ[0], XJ[1], XJ[2], ZJ.alpha), eJ && (UJ.updateFloat2("vDiffuseInfos", eJ.uvSet, eJ.level), UJ.updateMatrixFloats("diffuseMatrix", eJ.matrix)), UJ.updateFloat("alphaCutOff", ZJ.alphaCutOff), UJ.updateFloatsFrom("vEmissiveColor", ZJ.emissiveColor, 0, 3), UJ.updateFloat3TimesFloats("vAmbientColor", FJ.ambientColour, 0, ZJ.ambientColor);
        const AJ = ZJ.specularColor;
        UJ.updateFloat4("vSpecularColor", AJ[0], AJ[1], AJ[2], ZJ.specularPower), UJ.setTexture("diffuseSampler", eJ);
        const qJ = ZJ.opacityTexture;
        qJ && (UJ.updateFloat2("vOpacityInfos", qJ.uvSet, qJ.level), UJ.updateMatrixFloats("opacityMatrix", qJ.matrix)), UJ.setTexture("opacitySampler", qJ);
        const jJ = ZJ.emissiveTexture;
        jJ && (UJ.updateFloat2("vEmissiveInfos", jJ.uvSet, jJ.level), UJ.updateMatrixFloats("emissiveMatrix", jJ.matrix)), UJ.setTexture("emissiveSampler", jJ);
        const YJ = ZJ.reflectionTexture;
        YJ && UJ.updateMatrixFloats("reflectionMatrix", YJ.matrix), UJ.updateFloat2("vReflectionInfos", YJ ? YJ.level * JJ.iblIntensity : 0, ZJ.roughness), UJ.setTexture("reflectionCubeSampler", YJ);
        const hJ = JJ.gn();
        for (const {
            feature: nJ,
            state: GJ,
            active: fJ
          }
          of ZJ.features) {
          var DJ, sJ;
          if (fJ) null === (DJ = (sJ = (0, Yc.i)(nJ)).bind) || void 0 === DJ || DJ.call(sJ, GJ, UJ, JJ, hJ)
        }
      }
    }

    function xe(JJ) {
      const cJ = JJ.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(cJ) ? "u32" : /i32|^vec\di$/.test(cJ) ? "i32" : "f32"
    }

    function re(JJ, cJ) {
      const ZJ = JJ.getSize(),
        FJ = xe(cJ),
        UJ = JJ => 4 === ZJ ? `${JJ}x4` : 2 === ZJ ? `${JJ}x2` : null;
      if ("f32" === FJ) {
        if (5126 === JJ.type) return 1 === ZJ ? "float32" : ZJ >= 2 && ZJ <= 4 ? `float32x${ZJ}` : null;
        if (!JJ.normalized) return null;
        switch (JJ.type) {
          case 5121:
            return UJ("unorm8");
          case 5120:
            return UJ("snorm8");
          case 5123:
            return UJ("unorm16");
          case 5122:
            return UJ("snorm16")
        }
        return null
      }
      const eJ = "u32" === FJ ? "uint" : "sint";
      switch (JJ.type) {
        case 5125:
        case 5124:
          return 1 === ZJ ? `${eJ}32` : ZJ <= 4 ? `${eJ}32x${ZJ}` : null;
        case 5121:
        case 5120:
          return UJ(`${eJ}8`);
        case 5123:
        case 5122:
          return UJ(`${eJ}16`)
      }
      return null
    }

    function ve(JJ) {
      var cJ;
      const ZJ = /(8|16|32)(?:x(\d))?$/.exec(JJ);
      return ZJ ? Number(ZJ[1]) / 8 * Number(null !== (cJ = ZJ[2]) && void 0 !== cJ ? cJ : 1) : 4
    }
    class me {
      constructor(JJ, cJ, ZJ) {
        this.resources = JJ, this.limits = cJ, this.warnOnce = ZJ, this.layouts = new Map
      }
      resolveInputs(JJ, cJ, ZJ, FJ) {
        const UJ = [],
          eJ = ZJ.program.attributes,
          XJ = [];
        for (let YJ = 0; YJ < eJ.length; YJ++) {
          const ZJ = eJ[YJ],
            AJ = ZJ.optional ? null : this.resources.vertexInput(JJ, ZJ.name, FJ);
          if (!AJ) {
            const JJ = xe(ZJ.type),
              cJ = "u32" === JJ ? "uint32x4" : "i32" === JJ ? "sint32x4" : "float32x4";
            XJ.push(null);
            const FJ = UJ.find((JJ => null === JJ.data));
            FJ ? FJ.attributes.push({
              shaderLocation: YJ,
              offset: 0,
              format: cJ
            }) : UJ.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: YJ,
                offset: 0,
                format: cJ
              }]
            });
            continue
          }
          const qJ = AJ.getBuffer();
          XJ.push(AJ);
          const jJ = re(AJ, ZJ.type);
          if (!jJ) return this.warnOnce(`format:${cJ}:${ZJ.name}`, `${cJ}'s ${ZJ.name} (type ${AJ.type}, size ${AJ.getSize()}) has no WebGPU vertex format`), null;
          const hJ = AJ.getIsInstanced() ? "instance" : "vertex",
            DJ = AJ.byteStride,
            sJ = ve(jJ),
            nJ = UJ.find((JJ => JJ.data === qJ && JJ.stride === DJ && JJ.step === hJ && AJ.byteOffset >= JJ.base && AJ.byteOffset - JJ.base + sJ <= DJ));
          nJ ? nJ.attributes.push({
            shaderLocation: YJ,
            offset: AJ.byteOffset - nJ.base,
            format: jJ
          }) : UJ.push({
            data: qJ,
            base: AJ.byteOffset,
            stride: DJ,
            step: hJ,
            attributes: [{
              shaderLocation: YJ,
              offset: 0,
              format: jJ
            }]
          })
        }
        if (UJ.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${cJ}`, `${cJ} needs ${UJ.length} vertex buffers`), null;
        let AJ = "";
        for (const YJ of UJ) {
          AJ += `${YJ.stride}${"instance"===YJ.step?"i":"v"}`;
          for (const JJ of YJ.attributes) AJ += `,${JJ.shaderLocation}:${JJ.offset}:${JJ.format}`;
          AJ += ";"
        }
        let qJ = this.layouts.get(AJ);
        qJ || (qJ = {
          key: AJ,
          buffers: UJ.map((JJ => ({
            arrayStride: JJ.stride,
            stepMode: JJ.step,
            attributes: JJ.attributes
          }))),
          instanceEnds: UJ.map((JJ => {
            let cJ = -1;
            if ("instance" === JJ.step)
              for (const ZJ of JJ.attributes) cJ = Math.max(cJ, ZJ.offset + ve(ZJ.format));
            return cJ
          }))
        }, this.layouts.set(AJ, qJ));
        const jJ = UJ.map((JJ => JJ.base));
        return {
          program: ZJ,
          sources: XJ,
          layout: qJ,
          slotData: UJ.map((JJ => JJ.data)),
          o3: jJ,
          buffers: [],
          offsets: jJ,
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

    function Qe(JJ, cJ, ZJ, FJ) {
      const UJ = cJ.program.program.attributes;
      for (let eJ = 0; eJ < UJ.length; eJ++) {
        if ((UJ[eJ].optional ? null : ZJ.vertexInput(JJ, UJ[eJ].name, FJ)) !== cJ.sources[eJ]) return !1
      }
      return !0
    }
    const Ee = 64;
    class Ve {
      constructor(JJ, cJ, ZJ, FJ) {
        this.device = JJ, this.layout = cJ, this.frameBuffer = ZJ, this.label = FJ, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(JJ) {
        if (JJ * Ee <= this.data.length) return !1;
        let cJ = 2 * this.data.length;
        for (; JJ * Ee > cJ;) cJ *= 2;
        const ZJ = new Float32Array(cJ);
        return ZJ.set(this.data), this.data = ZJ, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const UJ = this.data,
          eJ = JJ * Ee;
        let XJ = UJ[eJ + 16] !== ZJ;
        for (let AJ = 0; AJ < 16 && !XJ; AJ++) XJ = UJ[eJ + AJ] !== cJ[FJ + AJ];
        if (XJ) {
          for (let JJ = 0; JJ < 16; JJ++) UJ[eJ + JJ] = cJ[FJ + JJ];
          UJ[eJ + 16] = ZJ
        }
        return XJ
      }
      upload(JJ, cJ) {
        this.device.queue.writeBuffer(this.buffer, JJ * OF, this.data, JJ * Ee, (cJ - JJ) * Ee)
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

    function Ke(JJ) {
      return JJ.gpu[IJ.f.lite] ??= JJ.materials.map(((cJ, ZJ) => ({
        parts: JJ,
        range: ZJ,
        owner: JJ.owner
      })))
    }

    function ye(JJ) {
      var cJ, ZJ, FJ;
      return null !== (cJ = null !== (ZJ = null === (FJ = JJ.parts.materials[JJ.range]) || void 0 === FJ ? void 0 : FJ.mirror) && void 0 !== ZJ ? ZJ : JJ.owner.material) && void 0 !== cJ ? cJ : null
    }
    const Se = ["opaque", "alphaTest", "transparent", "text"];
    class Ie {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, jc.e)("Lite: ")
      }
      attach(JJ, cJ) {
        this.model = JJ, this.mirror = cJ
      }
      get worlds() {
        return this.model.nodes.zh
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(JJ) {
        return this.groups.get(JJ)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(JJ) {
        for (const [cJ, ZJ] of this.groups)
          for (const FJ of Se)
            for (const UJ of ZJ[FJ].units) JJ(UJ.owner, "text" === FJ ? "transparent" : FJ, cJ)
      }
      select(JJ, cJ) {
        this.frame++, this.selectedCount = 0;
        for (const AJ of this.groups.values())
          for (const JJ of Se) AJ[JJ].units.length = 0, AJ[JJ].rows.length = 0;
        const {
          model: ZJ,
          mirror: FJ
        } = this;
        if (!ZJ || !FJ || !JJ) return;
        this.rows.length < ZJ.nodes.qh && (this.rows = new Int32Array(ZJ.nodes.qh));
        const UJ = this.rows,
          eJ = ZJ.meshes;
        for (let AJ = 0; AJ < eJ.looseCount; AJ++) {
          const JJ = eJ.loose[AJ],
            ZJ = FJ.nodes[JJ];
          ZJ && !ZJ.isBlocked && ZJ.isEnabled() && !ZJ.GA.hasAZeroComponent && eJ.selects(JJ, cJ.frustum) && (this.activate(ZJ, JJ), this.selectedCount++)
        }
        const XJ = eJ.selectTextPlanes(cJ.frustum, UJ);
        for (let AJ = 0; AJ < XJ; AJ++) {
          const cJ = UJ[AJ],
            eJ = FJ.nodes[cJ],
            XJ = ZJ.meshes.parts[cJ];
          if (!eJ.isVisible || !(eJ.visibility > 0) || 0 === (eJ.layerMask & JJ.layerMask) || !XJ) continue;
          const qJ = this.groupOf(ZJ.meshes.layer[cJ]).text;
          for (const JJ of Ke(XJ)) qJ.units.push(JJ), qJ.rows.push(cJ);
          this.selectedCount++
        }
      }
      instanceBatch(JJ) {
        const cJ = this.batchOf(JJ);
        return cJ.dispatched || (cJ.dispatched = cJ.renderSelf = !0, cJ.row = this.rowOf(JJ)), cJ
      }
      rowOf(JJ) {
        return JJ.row
      }
      activate(JJ, cJ) {
        if (!JJ.Iy) {
          const ZJ = JJ;
          if (ZJ.CFJ) {
            const JJ = this.batchOf(ZJ);
            JJ.dispatched = !0, JJ.renderSelf = !0, JJ.row = cJ
          }
          return void this.dispatch(ZJ, cJ, cJ)
        }
        const ZJ = JJ,
          FJ = ZJ.uFJ;
        if (FJ._getWorldMatrixDeterminant() >= 0 !== ZJ._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${FJ.name}`, `A mirrored InstancedMesh of ${FJ.name} is not drawn yet`);
        const UJ = this.batchOf(FJ);
        UJ.instances.push(ZJ), UJ.rows.push(cJ), UJ.dispatched || (UJ.dispatched = !0, this.dispatch(FJ, cJ, this.rowOf(FJ)))
      }
      batchOf(JJ) {
        let cJ = this.batches.get(JJ);
        return cJ || (cJ = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(JJ, cJ)), cJ.frame !== this.frame && (cJ.frame = this.frame, cJ.dispatched = !1, cJ.renderSelf = !1, cJ.instances.length = 0, cJ.rows.length = 0), cJ
      }
      dispatch(JJ, cJ, ZJ) {
        const {
          layer: FJ,
          parts: UJ
        } = this.model.meshes;
        if (!UJ[cJ]) return;
        const eJ = this.groupOf(FJ[cJ]),
          XJ = JJ;
        for (const AJ of Ke(UJ[cJ])) {
          const JJ = ye(AJ);
          if (!JJ) continue;
          const cJ = JJ.needAlphaBlendingForMesh(XJ) ? eJ.transparent : JJ.needAlphaTestingForMesh(XJ) ? eJ.alphaTest : eJ.opaque;
          cJ.units.push(AJ), cJ.rows.push(ZJ)
        }
      }
      groupOf(JJ) {
        let cJ = this.groups.get(JJ);
        return cJ || (cJ = {
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
        }, this.groups.set(JJ, cJ)), cJ
      }
    }
    class Me {
      constructor() {
        this.hj = new Map, this.enabled = [], this.groups = new Map, this.ys = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(JJ) {
        if (this.hj.has(JJ)) return;
        const cJ = {
          mesh: JJ,
          observer: JJ.onEffectiveEnabledStateChangedObservable.add((JJ => {
            this.GV(cJ, JJ)
          })),
          index: -1,
          steady: null
        };
        this.hj.set(JJ, cJ), this.GV(cJ, JJ.isEnabled())
      }
      remove(JJ) {
        const cJ = this.hj.get(JJ);
        cJ && (cJ.observer.remove(!0), this.GV(cJ, !1), this.hj.delete(JJ))
      }
      base(JJ) {
        return this.hj.get(JJ)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          hj: this.hj.size
        }
      }
      forEachSelected(JJ) {
        for (const [cJ, ZJ] of this.groups) {
          for (const FJ of ZJ.opaque) JJ(FJ.owner, "opaque", cJ);
          for (const FJ of ZJ.transparent) JJ(FJ.owner, "transparent", cJ)
        }
        for (const cJ of this.ys) JJ(cJ.mesh, "opaque", 0)
      }
      group(JJ) {
        return this.groups.get(JJ)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(JJ, cJ) {
        this.drawn = 0, this.selected = 0, this.ys.length = 0;
        for (const FJ of this.groups.values()) FJ.opaque.length = 0, FJ.transparent.length = 0;
        if (!JJ) return;
        const ZJ = this.enabled;
        for (let FJ = 0; FJ < ZJ.length; FJ++) {
          const UJ = ZJ[FJ];
          if (UJ.steady && cJ(UJ, JJ)) {
            this.selected++, this.ys.push(UJ);
            continue
          }
          const eJ = UJ.mesh;
          if (eJ.isBlocked || eJ.GA.hasAZeroComponent) continue;
          if (!eJ.isVisible || eJ.visibility <= 0 || 0 === (eJ.layerMask & JJ.layerMask)) continue;
          if (eJ.CFJ) {
            this.warned.has(eJ.name) || (this.warned.add(eJ.name), console.warn(`Lite: thin instance base ${eJ.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: XJ
          } = eJ;
          if (!XJ) continue;
          eJ.computeWorldMatrix(), this.selected++;
          const AJ = this.listsFor(eJ.renderingGroupId);
          for (const JJ of Ke(XJ)) {
            const cJ = ye(JJ);
            cJ && (cJ.needAlphaBlendingForMesh(eJ) ? AJ.transparent.push(JJ) : AJ.opaque.push(JJ))
          }
        }
      }
      GV(JJ, cJ) {
        if (cJ === JJ.index >= 0) return;
        JJ.steady = null;
        const ZJ = this.enabled;
        if (cJ) JJ.index = ZJ.length, ZJ.push(JJ);
        else {
          const cJ = ZJ.pop();
          cJ !== JJ && (ZJ[JJ.index] = cJ, cJ.index = JJ.index), JJ.index = -1
        }
      }
      listsFor(JJ) {
        let cJ = this.groups.get(JJ);
        return cJ || (cJ = {
          opaque: [],
          transparent: []
        }, this.groups.set(JJ, cJ)), cJ
      }
    }
    var be = ZJ(38538);
    class we {
      constructor() {
        this.bundle = null, this.stale = !0, this.hj = new Set
      }
    }
    class We {
      constructor(JJ, cJ, ZJ) {
        this.device = JJ, this.slots = cJ, this.host = ZJ, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new we, this.hK = new we, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new aU, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(JJ) {
          var cJ, ZJ;
          let FJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (cJ = null === (ZJ = globalThis.navigator) || void 0 === ZJ ? void 0 : ZJ.userAgent) && void 0 !== cJ ? cJ : "";
          const UJ = JJ.adapterInfo;
          return "intel" === (null === UJ || void 0 === UJ ? void 0 : UJ.vendor) && "gen-12lp" === UJ.architecture && FJ.includes("Windows")
        }(JJ), (0, be.H)(this.direct)
      }
      yE() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, be.H)(this.directThisFrame)
      }
      add(JJ, cJ, ZJ, FJ) {
        let UJ = this.records.get(JJ);
        return UJ || (UJ = this.createRecord(JJ), this.records.set(JJ, UJ)), UJ.recorded && He(UJ, cJ) || (this.bundleOf(UJ).stale = !0), this.place(UJ, cJ, ZJ, FJ), UJ
      }
      bundleOf(JJ) {
        return JJ.hK ? this.hK : this.main
      }
      addAgain(JJ, cJ, ZJ, FJ) {
        JJ.recorded || (this.bundleOf(JJ).stale = !0), this.place(JJ, cJ, ZJ, FJ)
      }
      place(JJ, cJ, ZJ, FJ) {
        JJ.seen = this.frame, JJ.hK && null === JJ.draw && (this.hK.stale = !0), JJ.draw = cJ, this.drawn++, ZJ && this.slots.write(JJ.slot, ZJ, FJ) && (this.slotsFrom = Math.min(this.slotsFrom, JJ.slot), this.slotsTo = Math.max(this.slotsTo, JJ.slot));
        const UJ = this.args,
          eJ = 5 * JJ.slot;
        UJ[eJ] === cJ.count && UJ[eJ + 1] === cJ.instances && UJ[eJ + 2] === cJ.first || (UJ[eJ] = cJ.count, UJ[eJ + 1] = cJ.instances, UJ[eJ + 2] = cJ.first, this.argsDirty = !0, this.hK.stale ||= JJ.hK)
      }
      WE() {
        for (const JJ of this.records.values()) JJ.seen !== this.frame && (JJ.draw && (JJ.draw = null, this.args[5 * JJ.slot + 1] = 0, this.argsDirty = !0, this.hK.stale ||= JJ.hK), this.frame - JJ.seen > 120 && (this.records.delete(JJ.unit), this.freeSlots.push(JJ.slot), JJ.recorded && (this.bundleOf(JJ).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(JJ) {
        for (const cJ of this.records.values()) cJ.draw && cJ.seen === this.frame && !cJ.hK && JJ(cJ.draw, this.slots.data, cJ.slot * OF / 4)
      }
      resourceDestroyed(JJ) {
        this.main.stale ||= this.main.hj.has(JJ), this.hK.stale ||= this.hK.hj.has(JJ)
      }
      execute(JJ, cJ, ZJ) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(JJ, cJ, ZJ, "direct"), this.drawn;
        const FJ = this.host.sceneGroup(cJ);
        if (!FJ) return this.main.bundle = null, this.hK.bundle = null, this.recordedSceneGroup = null, this.encode(JJ, cJ, ZJ, "direct"), this.drawn;
        this.recordedTarget === ZJ && this.recordedSceneGroup === FJ || (this.recordedTarget = ZJ, this.recordedSceneGroup = FJ, this.main.stale = !0, this.hK.stale = !0);
        const UJ = this.main,
          eJ = this.hK;
        let XJ = !1;
        !UJ.stale && UJ.bundle || (UJ.bundle = this.record(cJ, ZJ, FJ, "indirect"), XJ = !0);
        const AJ = (0, be.n)();
        return (eJ.stale || this.rangedEpoch !== AJ) && (this.rangedEpoch = AJ, eJ.bundle = this.drawsRanged() ? this.record(cJ, ZJ, FJ, "hK") : this.noRangedBundle(), XJ = !0), XJ && (this.bundles = eJ.bundle ? [UJ.bundle, eJ.bundle] : [UJ.bundle]), JJ.executeBundles(this.bundles), JJ.setBindGroup(0, FJ), this.drawn
      }
      record(JJ, cJ, ZJ, FJ) {
        const UJ = this.device.createRenderBundleEncoder({
          label: "hK" === FJ ? "thin-bases-ranged" : "thin-bases",
          colorFormats: JJ._colorFormat ? [JJ._colorFormat] : [],
          depthStencilFormat: JJ._depthStencilFormat,
          sampleCount: JJ._sampleCount
        });
        return UJ.setBindGroup(0, ZJ), this.encode(UJ, JJ, cJ, FJ), UJ.finish()
      }
      noRangedBundle() {
        for (const JJ of this.records.values()) JJ.hK && (JJ.recorded = !1);
        return this.hK.hj.clear(), this.hK.stale = !1, null
      }
      drawsRanged() {
        for (const JJ of this.records.values())
          if (JJ.hK && JJ.draw) return !0;
        return !1
      }
      encode(JJ, cJ, ZJ, FJ) {
        const UJ = [];
        for (const qJ of this.records.values()) "direct" !== FJ && qJ.hK !== ("hK" === FJ) || (qJ.recorded = !1, qJ.draw && UJ.push(qJ));
        UJ.sort(Pe);
        const eJ = "direct" === FJ ? null : "hK" === FJ ? this.hK : this.main;
        null === eJ || void 0 === eJ || eJ.hj.clear(), this.binder.reset();
        let XJ = !1;
        for (const qJ of UJ) {
          var AJ;
          const UJ = qJ.draw,
            jJ = this.host.pipelineFor(UJ, cJ, ZJ);
          if (!jJ) {
            this.host.pipelineCompiling(UJ, ZJ) ? XJ = !0 : eJ && this.keep(qJ, UJ, eJ.hj);
            continue
          }
          let YJ;
          if (qJ.hK && "indirect" !== FJ) {
            const JJ = qJ.unit.owner;
            YJ = "direct" === FJ && (0, be.w)(JJ) || (0, be.p)(JJ) || void 0
          }
          if (eJ && this.keep(qJ, UJ, eJ.hj), 0 === (null === (AJ = YJ) || void 0 === AJ ? void 0 : AJ.count)) continue;
          this.binder.bind(JJ, UJ, jJ, this.slots.bindGroup, qJ.slot * OF);
          const hJ = 5 * qJ.slot;
          if ("indirect" === FJ) {
            UJ.indexBuffer ? JJ.drawIndexedIndirect(this.argsBuffer, 4 * hJ) : JJ.drawIndirect(this.argsBuffer, 4 * hJ);
            continue
          }
          const DJ = this.args;
          YJ ? ge(JJ, null !== UJ.indexBuffer, DJ, hJ, YJ) : UJ.indexBuffer ? JJ.drawIndexed(DJ[hJ], DJ[hJ + 1], DJ[hJ + 2], 0, 0) : JJ.draw(DJ[hJ], DJ[hJ + 1], DJ[hJ + 2], 0)
        }
        eJ && (eJ.stale = XJ)
      }
      keep(JJ, cJ, ZJ) {
        JJ.recorded = !0, JJ.pipelineKey = cJ.pipelineKey, JJ.materialGroup = cJ.material.bindGroup, JJ.vertexBuffers.length = 0, JJ.vertexBuffers.push(...cJ.vertexBuffers), JJ.vertexOffsets = cJ.vertexOffsets, JJ.indexBuffer = cJ.indexBuffer, JJ.indexFormat = cJ.indexFormat;
        for (const FJ of cJ.vertexBuffers) ZJ.add(FJ);
        cJ.indexBuffer && ZJ.add(cJ.indexBuffer), ZJ.add(cJ.material.buffer);
        for (const FJ of cJ.material.bound) FJ && ZJ.add(FJ)
      }
      createRecord(JJ) {
        let cJ = this.freeSlots.pop();
        return void 0 === cJ && (cJ = this.slotCount++, this.grow()), {
          unit: JJ,
          slot: cJ,
          hK: void 0 !== (0, be.p)(JJ.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.hK.stale = !0), 5 * this.slotCount > this.args.length) {
          const JJ = new Uint32Array(2 * this.args.length);
          JJ.set(this.args), this.args = JJ, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function ge(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = ZJ[FJ + 1],
        XJ = UJ.data;
      for (let AJ = 0; AJ < UJ.count; AJ++) {
        const UJ = Math.min(XJ[2 * AJ], eJ),
          qJ = Math.min(XJ[2 * AJ + 1], eJ - UJ);
        0 !== qJ && (cJ ? JJ.drawIndexed(ZJ[FJ], qJ, ZJ[FJ + 2], 0, UJ) : JJ.draw(ZJ[FJ], qJ, ZJ[FJ + 2], UJ))
      }
    }

    function He(JJ, cJ) {
      if (JJ.pipelineKey !== cJ.pipelineKey || JJ.materialGroup !== cJ.material.bindGroup || JJ.indexBuffer !== cJ.indexBuffer || JJ.indexFormat !== cJ.indexFormat || JJ.vertexOffsets !== cJ.vertexOffsets || JJ.vertexBuffers.length !== cJ.vertexBuffers.length) return !1;
      for (let ZJ = 0; ZJ < JJ.vertexBuffers.length; ZJ++)
        if (JJ.vertexBuffers[ZJ] !== cJ.vertexBuffers[ZJ]) return !1;
      return !0
    }

    function Pe(JJ, cJ) {
      return tU(JJ.draw, cJ.draw)
    }
    const ke = new WeakMap,
      pe = {
        depth: !1,
        sunShadow: !1
      };

    function de(JJ, cJ) {
      let ZJ = ke.get(JJ);
      ZJ || (ZJ = new Map, ke.set(JJ, ZJ));
      const FJ = `${cJ.depth?"-depth":""}${cJ.sunShadow?"-shadow":""}${cJ.shadowMask?"-mask":""}`;
      let UJ = ZJ.get(FJ);
      if (!UJ) {
        const eJ = [{
          binding: Sc.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Sc.h
          }
        }, {
          binding: Sc.y,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        cJ.depth && eJ.push({
          binding: Sc.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), cJ.sunShadow && eJ.push(... function() {
          const JJ = GPUShaderStage.FRAGMENT,
            cJ = Sc.r;
          return [{
            binding: cJ.uniform,
            visibility: JJ,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: cJ.GD,
            visibility: JJ,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: cJ.special,
            visibility: JJ,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: cJ.volume,
            visibility: JJ,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: cJ.sampler,
            visibility: JJ,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: cJ.entities,
            visibility: JJ,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: cJ.entityGrids,
            visibility: JJ,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), cJ.shadowMask && eJ.push({
          binding: Sc.u,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), UJ = JJ.createBindGroupLayout({
          label: `${cJ.depth?"terrain-":""}shader-pack-inputs${FJ}`,
          entries: eJ
        }), ZJ.set(FJ, UJ)
      }
      return UJ
    }

    function ze(JJ) {
      return de(JJ, pe)
    }

    function Ne(JJ, cJ) {
      if (!cJ) return !1;
      const ZJ = (0, Ic.d)(JJ);
      return !!ZJ && kZ(ZJ, cJ)
    }

    function Oe(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!jF(cJ)) return [];
      return [de(JJ, {
        depth: UF(cJ.packVariant),
        sunShadow: Ne(cJ.packVariant, ZJ),
        shadowMask: FJ
      })]
    }
    class Te {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = JJ, this.sunShadow = ZJ, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Sc.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = JJ.createBuffer({
          label: "shader-pack-inputs",
          size: Sc.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const FJ = (0, Sc.B)(cJ);
        this.textures = JJ.createBuffer({
          label: "shader-pack-textures",
          size: FJ.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), JJ.queue.writeBuffer(this.textures, 0, FJ), this.bindGroup = JJ.createBindGroup({
          label: "shader-pack-inputs",
          layout: ze(JJ),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Sc.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Sc.y,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(JJ, cJ, ZJ) {
        (0, Sc.H)(this.data, {
          seconds: JJ.seconds(),
          lit: ZJ,
          renderOffset: JJ.renderOffset(),
          i4: JJ.i4(),
          eyePosition: cJ,
          shadowDirection: JJ.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const FJ = cJ ? this.sunShadow : null;
        if ((cJ || ZJ) && !FJ) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!JJ && !FJ) return this.bindGroup;
        (JJ && JJ !== this.depthView || ZJ && ZJ !== this.maskView) && (this.depthView = null !== JJ && void 0 !== JJ ? JJ : this.depthView, this.maskView = null !== ZJ && void 0 !== ZJ ? ZJ : this.maskView, this.groups.clear());
        const UJ = (JJ ? 1 : 0) | (FJ ? 2 : 0) | (ZJ ? 4 : 0);
        let eJ = this.groups.get(UJ);
        if (!eJ) {
          const cJ = this.entries();
          JJ && cJ.push({
            binding: Sc.q,
            resource: JJ
          }), FJ && cJ.push(...FJ.entries()), ZJ && cJ.push({
            binding: Sc.u,
            resource: ZJ
          }), eJ = this.device.createBindGroup({
            label: `${JJ||ZJ?"terrain-":""}shader-pack-inputs${JJ?"-depth":""}${FJ?"-shadow":""}${ZJ?"-mask":""}`,
            layout: de(this.device, {
              depth: !!JJ,
              sunShadow: !!FJ,
              shadowMask: !!ZJ
            }),
            entries: cJ
          }), this.groups.set(UJ, eJ)
        }
        return eJ
      }
      bind(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        JJ.setBindGroup(Sc.f, this.bindGroupFor(cJ, ZJ, FJ))
      }
    }

    function Ce(JJ, cJ, ZJ) {
      if (JJ.gpuVersion === cJ.gpuBuffersVersion) return !0;
      let FJ;
      do {
        if (FJ = cJ.gpuBuffersVersion, !ue(JJ, cJ, ZJ)) return !1
      } while (cJ.gpuBuffersVersion !== FJ);
      return JJ.gpuVersion = FJ, JJ.fitInstances = 0, !0
    }

    function ue(JJ, cJ, ZJ) {
      let FJ = null;
      for (let eJ = 0; eJ < JJ.slotData.length; eJ++) {
        var UJ;
        const XJ = JJ.slotData[eJ],
          AJ = XJ ? cJ.gpuBuffer(XJ) : ZJ;
        if (!AJ) return !1;
        XJ && JJ.layout.instanceEnds[eJ] < 0 && cJ.cover(XJ, Number.POSITIVE_INFINITY), JJ.buffers[eJ] = AJ;
        const qJ = JJ.o3[eJ] + (XJ ? cJ.gpuOffset(XJ) : 0);
        qJ !== (null !== (UJ = FJ) && void 0 !== UJ ? UJ : JJ.offsets)[eJ] && (FJ ??= JJ.offsets.slice(), FJ[eJ] = qJ), JJ.ends[eJ] = XJ ? cJ.gpuEnd(XJ) : AJ.size
      }
      return FJ && (JJ.offsets = FJ), !0
    }

    function ie(JJ, cJ, ZJ, FJ) {
      if (cJ <= JJ.fitInstances) return null;
      const {
        layout: UJ,
        ends: eJ,
        offsets: XJ,
        slotData: AJ,
        o3: qJ
      } = JJ;
      let jJ = !1;
      for (let YJ = 0; YJ < UJ.buffers.length; YJ++) {
        const JJ = UJ.instanceEnds[YJ];
        if (JJ < 0) continue;
        const FJ = (cJ - 1) * UJ.buffers[YJ].arrayStride + JJ;
        if (eJ[YJ] - XJ[YJ] < FJ) return {
          index: YJ,
          needed: FJ
        };
        const hJ = AJ[YJ];
        hJ && ZJ.cover(hJ, qJ[YJ] + FJ) && (jJ = !0)
      }
      return jJ && Ce(JJ, ZJ, FJ), JJ.fitInstances = cJ, null
    }
    var Re = ZJ(36789),
      Le = ZJ(36823);
    const ae = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Be = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      te = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      oe = `((vertexInputs.aPackedLightLevels >> 16u) | ${qc.e.placed}u)`,
      le = "u32(vertexInputs.aShaderPackItem.x)",
      JX = `${qc.e.lifeform}u`;

    function cX(JJ) {
      return "item" === JJ.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const ZX = "bloxdSpEnchant",
      FX = "floor(finalWorld[3].xyz)";

    function UX(JJ, cJ, ZJ) {
      return "placed" === cJ.kind && JJ.reads[ZJ].includes("bloxdFragmentBlockPosition")
    }

    function eX(JJ, cJ) {
      let [ZJ, FJ] = JJ;
      return ZJ === cJ.point && FJ === cJ.code
    }

    function XX(JJ, cJ) {
      var ZJ, FJ, UJ;
      const eJ = null === (ZJ = JJ.find((JJ => JJ.texture))) || void 0 === ZJ ? void 0 : ZJ.texture,
        XJ = null === (FJ = JJ.find((JJ => JJ.enchantTier))) || void 0 === FJ ? void 0 : FJ.enchantTier,
        AJ = null === (UJ = JJ.find((JJ => JJ.overlay))) || void 0 === UJ ? void 0 : UJ.overlay,
        qJ = AJ ? cJ.filter((JJ => eX(JJ, AJ))).length : 0;
      return AJ && 1 === qJ ? {
        texture: eJ,
        overlay: AJ,
        enchantTier: XJ
      } : {
        texture: eJ,
        enchantTier: XJ
      }
    }

    function AX(JJ) {
      if ("item" === JJ.kind) {
        return {
          vertexFlags: `(${le} & 0xffffu)`,
          varying: "vPackItem",
          value: le,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return JJ.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: oe,
        varying: "vPackFlags",
        value: oe,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function qX(JJ) {
      return "lifeform" === JJ.kind ? JX : "0u"
    }

    function jX(JJ) {
      return !!JJ.BLOXD_PLUGIN_ENCHANTMENT
    }

    function YX(JJ, cJ) {
      const {
        enchantTier: ZJ
      } = cJ;
      return ZJ && jX(cJ.defines) && "lifeform" === cJ.kind && fX(JJ, "enchantTier") ? ZJ : null
    }

    function hX(JJ, cJ) {
      return jX(cJ.defines) && fX(JJ, "enchantSpeed")
    }

    function DX(JJ) {
      const {
        overlay: cJ,
        defines: ZJ
      } = JJ;
      if (!cJ || !ZJ.DIFFUSE) return null;
      const FJ = ZJ.VERTEXCOLOR || ZJ.INSTANCESCOLOR && ZJ.INSTANCES;
      return `vec4f(${cJ.colour}.rgb * uniforms.vDiffuseInfos.y${FJ?" * fragmentInputs.vColor.rgb":""}, ${cJ.colour}.a)`
    }
    const sX = "fragmentInputs.vPackTexture";

    function nX(JJ) {
      const {
        atlas: cJ,
        defines: ZJ,
        texture: FJ
      } = JJ;
      if (cJ || !ZJ.DIFFUSE) return null;
      if (FJ) return {
        texture: "diffuseSampler",
        ...FJ
      };
      const UJ = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===ZJ.DIFFUSEDIRECTUV?"vMainUV1":2===ZJ.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== JJ.kind) return UJ;
      if (!ZJ.BLOXD_PLUGIN_ANIMATED) return {
        ...UJ,
        id: sX
      };
      const eJ = EJ.c.WGSL,
        XJ = (0, EJ.Hb)(eJ, "uAnimStatesNum"),
        AJ = (0, EJ.mb)(eJ, (0, Re.e)(eJ), XJ),
        qJ = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${XJ})`,
        layers: [AJ],
        uv: `vec2f(${qJ}.x, ${qJ}.y * ${XJ} - ${AJ})`,
        levelUv: qJ,
        id: sX
      }
    }

    function GX(JJ, cJ) {
      return "box" === cJ.kind && !!JJ.hooks.surface && null !== nX(cJ)
    }

    function fX(JJ, cJ) {
      return JJ.reads.fragment.includes(cJ)
    }

    function xX(JJ) {
      return !!JJ.BLOXD_LIGHTING && !JJ.BLOXD_UNLIT
    }

    function rX(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.filter((JJ => {
        let [ZJ, FJ] = JJ;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === ZJ && FJ === cJ
      }));
      if (1 !== UJ.length) throw new Error(`A model program for shader packs has ${0===UJ.length?"no":"more than one"} ${FJ} code before fog (lite/modelShaderPack.ts)`);
      return JJ.map((JJ => JJ === UJ[0] ? [JJ[0], ZJ] : JJ))
    }

    function vX(JJ, cJ, ZJ, FJ) {
      const {
        hooks: UJ
      } = JJ, {
        kind: eJ,
        defines: XJ
      } = cJ, AJ = [...ZJ];
      var qJ;
      cJ.atlas && UJ.surface && AJ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", CZ("atlasIdxIn")]), "item" === eJ && AJ.push(["CUSTOM_VERTEX_DEFINITIONS", (0, EJ.g)(EJ.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), GX(JJ, cJ) && AJ.push(["CUSTOM_VERTEX_DEFINITIONS", (0, EJ.g)(EJ.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (qJ = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${OZ}[min(u32(${qJ}) - 1u, arrayLength(&${OZ}) - 1u)], ${qJ} > 0.5);\n`)]);
      const jJ = AX(cJ);
      jJ && (UJ.surface || UJ.light) && AJ.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${jJ.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${jJ.varying} = ${jJ.value};`]);
      let YJ = FJ;
      if (UX(JJ, cJ, "fragment") && (AJ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${FX});`]), YJ = [...YJ, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), fX(JJ, "localPosition") && AJ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${cX(cJ)};`]), jX(XJ) && UJ.surface) {
        hX(JJ, cJ) && AJ.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const ZJ = YX(JJ, cJ);
        ZJ && AJ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${ZJ});`]);
        const FJ = (0, EJ.yb)(EJ.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        YJ = [...rX(YJ, (0, Le.h)(EJ.c.WGSL), FJ, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Le.d)(ZX)]]
      }
      const {
        overlay: hJ
      } = cJ;
      hJ && DX(cJ) && UJ.surface && (YJ = YJ.filter((JJ => !eX(JJ, hJ))));
      const DJ = UJ.light ? function(JJ) {
        return "placed" === JJ.kind ? {
          name: "terrain",
          engine: (0, Vc.M)(EJ.c.WGSL),
          pack: (0, Vc.bb)(EJ.c.WGSL)
        } : JJ.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Vc.F)(EJ.c.WGSL),
          pack: (0, Vc._)(EJ.c.WGSL)
        } : null
      }(cJ) : null;
      if (DJ && (YJ = rX(YJ, DJ.engine, DJ.pack, `${DJ.name} light`), "placed" !== eJ && xX(XJ))) {
        const JJ = XJ.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, EJ.Hb)(EJ.c.WGSL, "uEntityLightLevels") : (0, EJ.Nb)(EJ.c.WGSL, "aLightLevels");
        AJ.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Vc.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Vc.$)(EJ.c.WGSL, JJ)])
      }
      return {
        vertexCode: AJ,
        fragmentCode: YJ
      }
    }

    function mX(JJ, cJ, ZJ, FJ) {
      return HZ(JJ, cJ, ZJ, FJ, "model")
    }
    const QX = "\t@builtin(position) position: vec4f,\n";

    function EX(JJ, cJ) {
      const ZJ = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(JJ)[0];
      return `${ZJ}${cJ}${JJ.slice(ZJ.length)}`
    }

    function VX(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: UJ
      } = cJ, eJ = kZ(cJ, FJ), {
        kind: XJ,
        defines: AJ
      } = ZJ, qJ = function(JJ, cJ) {
        var ZJ, FJ, UJ;
        const {
          defines: eJ
        } = cJ, XJ = AX(cJ), AJ = !!eJ.FOG, qJ = jX(eJ), jJ = null !== (ZJ = null === XJ || void 0 === XJ ? void 0 : XJ.enchantTier) && void 0 !== ZJ ? ZJ : YX(JJ, cJ) ? "fragmentInputs.vPackEnchantTier" : "0u", YJ = "lifeform" === cJ.kind && !eJ.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (FJ = null === XJ || void 0 === XJ ? void 0 : XJ.vertexFlags) && void 0 !== FJ ? FJ : qX(cJ),
          vertexLocalPosition: cX(cJ),
          flags: null !== (UJ = null === XJ || void 0 === XJ ? void 0 : XJ.flags) && void 0 !== UJ ? UJ : qX(cJ),
          normal: "normalW",
          alpha: YJ ? "alpha * baseColor.a" : "alpha",
          alphaOut: YJ ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: AJ ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: AJ ? "1.0 - fog" : "0.0",
          enchantTier: jJ,
          enchantColour: qJ ? `${ZX}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: hX(JJ, cJ) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: fX(JJ, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: DX(cJ)
        }
      }(cJ, ZJ), jJ = JJ.textures.filter((JJ => /^textureAtlas\d+$/.test(JJ.name))).length, YJ = ZJ.atlas && jJ > 0 ? {
        count: jJ,
        layers: ZJ.atlas.layers,
        width: ZJ.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: JJ.material.slots.has("uAnimDataPerTex") ? (cJ, ZJ) => SF(cJ, ZJ, function(JJ) {
          const cJ = JJ.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Hh: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: JJ => `uniforms.uAnimDataPerTex[${JJ}]${cJ}`
          }
        }(JJ)) : null
      } : null, hJ = "placed" === XJ ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", DJ = null !== YJ && void 0 !== YJ ? YJ : nX(ZJ), sJ = function(JJ, ZJ) {
        let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Sc.E)()}${dZ(cJ,ZJ)}${FJ}${iZ(JJ)}${wZ}${hJ}${cJ.code}`
      };
      let {
        vertex: nJ,
        fragment: GJ
      } = JJ;
      const fJ = LZ(UJ, qJ);
      if (fJ) {
        const JJ = UX(cJ, ZJ, "vertex") ? `\tbloxdSpCell = ${FX};\n` : "";
        nJ = mX(nJ, ae, `${JJ}${fJ.slice(1)}${ae}`, "vertex")
      }
      const xJ = `${zZ(cJ,eJ,function(JJ,cJ){return cJ.TWOSIDEDLIGHTING?JJ:`select(-(${JJ}), ${JJ}, fragmentInputs.frontFacing)`}(qJ.normal,AJ),qJ.flags)}${aZ(UJ,cJ.strict,cJ.program,DJ,qJ)}`;
      xJ && (GJ = mX(GJ, Be, `${xJ.slice(1)}${Be}`, "surface")), eJ && cJ.sunShadow && !AJ.TWOSIDEDLIGHTING && (GJ = mX(GJ, QX, `${QX}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const rJ = oZ(UJ);
      if (rJ) {
        const JJ = tZ(UJ, xX(AJ), !0, qJ);
        GJ = mX(GJ, te, `${JJ}${rJ.slice(1)}${te}`, "light")
      }
      const vJ = GX(cJ, ZJ) ? TZ : "";
      return {
        ...JJ,
        vertex: EX(nJ, sJ(YJ, !1, vJ)),
        fragment: EX(GJ, sJ(DJ, eJ))
      }
    }
    const KX = {
      name: "earthSky",
      uniqueId: -1
    };
    class yX {
      constructor(JJ) {
        this.resources = JJ, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const JJ of this.instances.values()) JJ.released = !0, this.resources.destroyBuffer(JJ.buffer);
        this.instances.clear()
      }
    }

    function SX(JJ) {
      return JJ.failed && null !== JJ.packGroup
    }
    class IX {
      constructor(JJ, cJ, ZJ) {
        this.device = JJ, this.resources = cJ, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.K3 = new Me, this.modelMeshes = new Ie, this.thinBundle = void 0, this.binder = new aU, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new fe((JJ => this.modelSlot(JJ).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, jc.e)("Lite: "), this.renderStates = new he(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (JJ, cJ) => this.keepSteady(JJ, cJ), this.lists = new BU(this.modelMeshes, this.K3, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new Ae(cJ, this.warnOnce, ((JJ, cJ, ZJ) => this.programWithModel(JJ, cJ, ZJ)), SX), this.vertexLayouts = new me(cJ, JJ.limits, this.warnOnce), this.sceneLayout = cc(JJ), this.frameLayout = JJ.createBindGroupLayout({
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
        }), this.frameBuffer = JJ.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Ve(JJ, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = JJ.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new We(JJ, new Ve(JJ, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (JJ, cJ, ZJ) => this.pipelineFor(JJ, cJ, ZJ),
          pipelineCompiling: (JJ, cJ) => !JJ.program.failed && !1 !== this.pipelines.get(`${JJ.pipelineKey}|${cJ}`),
          sceneGroup: JJ => {
            const cJ = ZJ(JJ);
            return cJ || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), cJ
          }
        }), cJ.onDestroy = JJ => {
          this.thinBundle.resourceDestroyed(JJ)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const UJ = {
          order: JJ,
          isTransparent: cJ,
          _direct: !cJ,
          bind: (JJ, cJ) => this.createBinding(UJ, cJ, ZJ, FJ)
        };
        return UJ
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(JJ, cJ, ZJ) {
        var FJ;
        let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = cJ, this.drawDefines.view = cJ, this.thinBundle.yE(), this.writeFrameUniforms();
        const eJ = null !== (FJ = null === UJ || void 0 === UJ ? void 0 : UJ.defineFor("model")) && void 0 !== FJ ? FJ : 0;
        this.drawDefines.modelPackVariant = eJ, UJ && 0 !== eJ && (this.packInputs ??= new Te(this.device, UJ.textureLayers(), this.sunShadow), this.packInputs.write(UJ, cJ.eye, UJ.NG())), this.lists.clear(), this.slotCount = 0;
        const XJ = JJ.activeCamera;
        this.K3.select(XJ, this.keepSteadyBase), this.modelMeshes.select(XJ, cJ), ZJ && this.pushEarthSky(ZJ), this.lists.collect(JJ), this.thinBundle.WE(), this.uploadMeshSlots()
      }
      pushDraws(JJ, cJ, ZJ, FJ, UJ, eJ) {
        let XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const AJ = eJ.length;
        for (let qJ = 0; qJ < ZJ; qJ++) {
          const ZJ = cJ[qJ];
          let AJ = this.retainedDraw(JJ, ZJ, FJ, UJ);
          if (void 0 === AJ && (AJ = this.drawFor(JJ, ZJ, FJ, UJ), this.retain(ZJ, AJ)), AJ) {
            const JJ = ZJ.owner,
              cJ = XJ ? XJ[qJ] : -1;
            AJ.slotOffset = cJ < 0 ? this.writeMeshSlot(JJ.getWorldMatrix().m, JJ.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[cJ], 16 * cJ), eJ.push(AJ)
          }
        }
        return eJ.length - AJ
      }
      bundleDraws(JJ, cJ, ZJ) {
        let FJ = 0;
        for (const UJ of cJ) {
          let cJ = this.retainedDraw(JJ, UJ, ZJ, !1);
          const eJ = void 0 !== cJ;
          if (void 0 === cJ && (cJ = this.drawFor(JJ, UJ, ZJ, !1), this.retain(UJ, cJ)), cJ) {
            const JJ = UJ.owner,
              ZJ = this.thinBundle.add(UJ, cJ, JJ.getWorldMatrix().m, JJ.visibility);
            eJ && this.steadyFrom(UJ, cJ, ZJ), FJ++
          }
        }
        return FJ
      }
      steadyFrom(JJ, cJ, ZJ) {
        const FJ = JJ.owner,
          UJ = this.K3.base(FJ),
          eJ = FJ.material,
          {
            drawState: XJ,
            instance: AJ
          } = cJ.inputs.retained;
        if (!UJ || !eJ || 1 !== JJ.parts.materials.length || ye(JJ) !== eJ) return;
        const qJ = UJ.steady ??= {
          unit: JJ,
          material: eJ,
          visibility: 1,
          draw: cJ,
          record: ZJ,
          drawState: XJ,
          instance: AJ,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        qJ.unit = JJ, qJ.material = eJ, qJ.visibility = FJ.visibility, qJ.draw = cJ, qJ.record = ZJ, qJ.drawState = XJ, qJ.instance = AJ, qJ.bindGroup = AJ.bindGroup, qJ.gpuVersion = this.resources.gpuBuffersVersion, qJ.fitInstances = cJ.inputs.fitInstances, qJ.worldFlag = FJ.getWorldMatrix().updateFlag, qJ.handedFrame = this.frame
      }
      keepSteady(JJ, cJ) {
        const ZJ = JJ.steady;
        if (ZJ.handedFrame !== this.frame - 1 || (this.frame + ZJ.phase) % 8 === 0) return !1;
        const FJ = JJ.mesh,
          {
            unit: UJ,
            draw: eJ,
            instance: XJ,
            drawState: AJ
          } = ZJ,
          qJ = FJ.forcedInstanceCount || FJ.f6;
        if (!FJ.isVisible || FJ.CFJ || FJ.visibility !== ZJ.visibility || 0 === (FJ.layerMask & cJ.layerMask) || FJ.material !== ZJ.material || 0 !== FJ.renderingGroupId || FJ.hasVertexAlpha || !this.drawDefines.definesHold(AJ, UJ, AJ.instancing) || ZJ.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(eJ.inputs, UJ, AJ.instancing, eJ.program) || eJ.program.failed || XJ.released || qJ <= 0 || qJ > ZJ.fitInstances) return !1;
        if (XJ.frame !== this.frame && this.bindMaterial(XJ, this.modelUniforms.refreshModelUniforms(FJ.Qy(), XJ, XJ.model, this.view)), !XJ.bindable || XJ.bindGroup !== ZJ.bindGroup) return !1;
        const jJ = FJ.computeWorldMatrix(),
          YJ = jJ.updateFlag !== ZJ.worldFlag;
        return ZJ.worldFlag = jJ.updateFlag, eJ.instances = qJ, this.thinBundle.addAgain(ZJ.record, eJ, YJ ? jJ.m : null, ZJ.visibility), ZJ.handedFrame = this.frame, this.K3.drawn++, !0
      }
      retainedDraw(JJ, cJ, ZJ, FJ) {
        const UJ = this.inputs.get(cJ),
          eJ = null === UJ || void 0 === UJ ? void 0 : UJ.retained;
        if (!UJ || !eJ) return;
        const {
          drawState: XJ,
          program: AJ,
          instance: qJ,
          instancing: jJ
        } = eJ, YJ = cJ.owner;
        if (ce(YJ) !== jJ) return;
        const hJ = this.instanceCount(YJ, jJ);
        if (hJ <= 0) return null;
        if (qJ.released || AJ.failed || XJ.program !== AJ || !this.drawDefines.programCurrent(XJ, cJ, jJ, ZJ) || !this.inputsStamped(UJ, cJ, jJ, AJ) || YJ.isUnIndexed !== eJ.unIndexed || this.indexKey(cJ) !== eJ.indexData) return;
        if (eJ.indexBuffer && eJ.gpuVersion !== this.resources.gpuBuffersVersion) {
          const JJ = this.resources.gpuBuffer(eJ.indexData);
          if (!JJ) return;
          eJ.indexBuffer = JJ, eJ.gpuVersion = this.resources.gpuBuffersVersion
        }
        let DJ = !1;
        if (qJ.frame !== this.frame && (DJ = this.modelUniforms.refreshModelUniforms(JJ, qJ, qJ.model, this.view)), !this.bindMaterial(qJ, DJ) || !this.withGpuBuffers(UJ) || !this.instanceBuffersFit(YJ.name, UJ, hJ)) return null;
        const sJ = this.makeDraw(AJ, UJ, this.renderStates.renderState(XJ.model, YJ, FJ, UJ.state), qJ, hJ);
        return this.setRange(sJ, cJ, eJ.indexBuffer, eJ.indexData), sJ
      }
      retain(JJ, cJ) {
        const ZJ = this.drawDefines.drawStates.get(JJ);
        if (!cJ || !ZJ || ZJ.program !== cJ.program) {
          const cJ = this.inputs.get(JJ);
          return void(cJ && (cJ.retained = null))
        }
        const FJ = JJ.owner,
          UJ = ZJ.instancing,
          eJ = this.indexKey(JJ),
          XJ = cJ.inputs.retained;
        XJ ? (XJ.drawState = ZJ, XJ.instancing = UJ, XJ.program = cJ.program, XJ.instance = cJ.material, XJ.indexData = eJ, XJ.unIndexed = FJ.isUnIndexed, XJ.indexBuffer = cJ.indexBuffer, XJ.gpuVersion = this.resources.gpuBuffersVersion) : cJ.inputs.retained = {
          drawState: ZJ,
          instancing: UJ,
          program: cJ.program,
          instance: cJ.material,
          indexData: eJ,
          unIndexed: FJ.isUnIndexed,
          indexBuffer: cJ.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(JJ, cJ, ZJ, FJ) {
        const UJ = cJ.owner,
          eJ = ye(cJ);
        if (!eJ) return null;
        const XJ = eJ.getClassName();
        let AJ = null;
        if (function(JJ) {
            return "LinesMesh" === JJ.getClassName()
          }(UJ)) {
          if (! function(JJ) {
              return "ShaderMaterial" === JJ.getClassName() && "color" === JJ.shaderPath
            }(eJ)) return this.warnOnce(`lines:${XJ}`, `A LinesMesh with a ${XJ} is not drawn yet (${eJ.name})`), null;
          AJ = UJ
        } else if ("StandardMaterial" !== XJ && "LiteMaterial" !== XJ) return this.warnOnce(`class:${XJ}`, `${XJ} is not drawn yet (${eJ.name})`), null;
        const qJ = ce(UJ),
          jJ = this.instanceCount(UJ, qJ);
        if (jJ <= 0) return null;
        const YJ = AJ ? this.lineProgramFor(UJ, ZJ, qJ) : this.drawDefines.programFor(JJ, cJ, eJ, ZJ, qJ);
        if (!YJ || YJ.failed) return null;
        const hJ = AJ ? null : this.drawDefines.drawStates.get(cJ).model,
          DJ = hJ ? this.modelInstance(hJ, YJ) : this.materialInstance(UJ, YJ);
        let sJ = !1;
        if (DJ.frame !== this.frame && (AJ ? rJ(DJ.ubo, AJ) : sJ = this.modelUniforms.refreshModelUniforms(JJ, DJ, DJ.model, this.view)), !this.bindMaterial(DJ, sJ)) return null;
        const nJ = this.meshInputs(cJ, YJ, qJ);
        if (!nJ || !this.instanceBuffersFit(UJ.name, nJ, jJ)) return null;
        const GJ = this.indexKey(cJ);
        let fJ = null;
        if (GJ && !UJ.isUnIndexed && (fJ = this.resources.gpuBuffer(GJ), !fJ)) return null;
        const xJ = this.renderStates.renderState(null !== hJ && void 0 !== hJ ? hJ : eJ, UJ, FJ, nJ.state, AJ ? "line-list" : "triangle-list"),
          vJ = this.makeDraw(YJ, nJ, xJ, DJ, jJ);
        return this.setRange(vJ, cJ, fJ, GJ), vJ
      }
      indexKey(JJ) {
        const cJ = ee(JJ);
        return cJ ? this.resources.modelIndex(cJ) : null
      }
      setRange(JJ, cJ, ZJ, FJ) {
        ZJ && (JJ.indexBuffer = ZJ, JJ.indexFormat = this.resources.indexFormat(FJ));
        const UJ = 4 * cJ.range + (ZJ ? 0 : 2);
        JJ.unit = cJ, JJ.first = cJ.parts.ws[UJ], JJ.count = cJ.parts.ws[UJ + 1]
      }
      makeDraw(JJ, cJ, ZJ, FJ, UJ) {
        cJ.state !== ZJ && (cJ.state = ZJ, cJ.pipelineKey = `${JJ.id}|${cJ.layout.key}|${ZJ.key}`, cJ.pipeline = null);
        const eJ = cJ.draw ??= {
          program: JJ,
          inputs: cJ,
          pipelineKey: "",
          layout: cJ.layout,
          state: ZJ,
          material: FJ,
          slotOffset: 0,
          vertexBuffers: cJ.buffers,
          vertexOffsets: cJ.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: UJ,
          unit: null
        };
        return eJ.program = JJ, eJ.pipelineKey = cJ.pipelineKey, eJ.state = ZJ, eJ.material = FJ, eJ.vertexOffsets = cJ.offsets, eJ.indexBuffer = null, eJ.instances = UJ, eJ
      }
      instanceCount(JJ, cJ) {
        switch (cJ) {
          case "thin":
            return JJ.forcedInstanceCount || JJ.f6;
          case "instanced":
            return this.prepareInstances(JJ);
          case "none":
            return 1
        }
      }
      prepareInstances(JJ) {
        const cJ = function(JJ, cJ) {
          const ZJ = cJ._userInstancedBuffersStorage,
            FJ = JJ.batchUploads.get(cJ);
          if (FJ) {
            var UJ;
            if (FJ.layout === (null !== (UJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.interleavedKinds) && void 0 !== UJ ? UJ : null)) return FJ;
            FJ.release()
          }
          return new iJ(JJ, cJ, ZJ)
        }(this.resources, JJ);
        return cJ.frame !== this.frame && cJ.pack(JJ, this.modelMeshes.instanceBatch(JJ), this.modelMeshes.worlds, this.frame), cJ.count
      }
      programWithModel(JJ, cJ, ZJ) {
        const FJ = this.modelSlot(JJ),
          UJ = qe(FJ, JJ, ZJ),
          eJ = this.drawDefines.modelPackKind(JJ),
          XJ = eJ ? function(JJ, cJ, ZJ, FJ) {
            const UJ = (0, yJ.r)(JJ, VJ.g.name),
              eJ = [];
            for (const {
                feature: qJ,
                state: jJ,
                active: YJ
              }
              of JJ.features) {
              var XJ, AJ;
              const JJ = YJ ? null === (XJ = (AJ = (0, Yc.i)(qJ)).Jn) || void 0 === XJ ? void 0 : XJ.call(AJ, jJ) : void 0;
              JJ && eJ.push(JJ)
            }
            return {
              kind: cJ,
              atlas: null !== UJ && void 0 !== UJ && UJ.active ? (0, VJ.c)(UJ.state) : null,
              defines: ZJ,
              ...XX(eJ, FJ)
            }
          }(JJ, eJ, cJ, FJ.fragmentCode) : null;
        if (XJ && function(JJ) {
            const cJ = JJ.defines;
            return (null === JJ.atlas || !!cJ.DIFFUSE && 1 === cJ.DIFFUSEDIRECTUV) && !!cJ.NORMAL && !cJ.REFLECTION && !cJ.EMISSIVEASILLUMINATION && !cJ.LINKEMISSIVEWITHDIFFUSE
          }(XJ)) {
          const ZJ = this.modelPackProgram(JJ, cJ, `${UJ}#${eJ}#sp${this.drawDefines.modelPackVariant}`, FJ, XJ);
          if (ZJ && !ZJ.failed) return ZJ
        }
        const AJ = this.programs.get(UJ);
        if (AJ || this.unbuildable.has(UJ)) return null !== AJ && void 0 !== AJ ? AJ : null;
        let qJ;
        try {
          qJ = qU({
            defines: Fe(cJ),
            vertexCode: FJ.vertexCode,
            fragmentCode: FJ.fragmentCode,
            pluginUniforms: FJ.pluginUniforms
          })
        } catch (jJ) {
          return this.unbuildable.add(UJ), this.warnOnce(`build:${UJ}`, `could not build a program for ${JJ.name}: ${String(jJ)}`), null
        }
        return this.createProgram(UJ, qJ, "standard")
      }
      modelPackProgram(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = this.programs.get(ZJ);
        if (eJ || this.unbuildable.has(ZJ)) return null !== eJ && void 0 !== eJ ? eJ : null;
        const XJ = this.drawDefines.modelPackVariant;
        let AJ;
        try {
          const JJ = function(JJ) {
              return (0, Ic.c)(JJ, "model")
            }(XJ),
            ZJ = vX(JJ, UJ, FJ.vertexCode, FJ.fragmentCode);
          AJ = VX(qU({
            defines: Fe(cJ),
            ...ZJ,
            pluginUniforms: FJ.pluginUniforms
          }), JJ, UJ, !!this.sunShadow)
        } catch (YJ) {
          return this.unbuildable.add(ZJ), this.warnOnce(`build:${ZJ}`, `could not build a shader pack program for ${JJ.name}, which draws without the pack: ${String(YJ)}`), null
        }
        const qJ = Ne(XJ, !!this.sunShadow),
          jJ = {
            group: this.packInputs.bindGroupFor(null, qJ),
            layout: de(this.device, {
              depth: !1,
              sunShadow: qJ
            })
          };
        return this.createProgram(ZJ, AJ, function(JJ) {
          return `standard-sp${JJ}`
        }(XJ), jJ)
      }
      lineProgramFor(JJ, cJ, ZJ) {
        const FJ = xJ(JJ, ZJ, cJ, this.view);
        let UJ = this.linePrograms.get(FJ);
        var eJ;
        return UJ || (UJ = this.createProgram(`lines#${FJ}`, (eJ = function(JJ) {
          const cJ = new Map;
          for (let ZJ = 0; ZJ < jJ.length; ZJ++) JJ & 1 << ZJ && cJ.set(jJ[ZJ], !0);
          return cJ
        }(FJ), DU({
          defines: eJ,
          vertex: YU,
          fragment: hU,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(FJ, UJ)), UJ
      }
      createProgram(JJ, cJ, ZJ) {
        var FJ;
        let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const eJ = this.nextProgramId++,
          XJ = `${ZJ}-${eJ}`,
          AJ = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          qJ = [{
            binding: 0,
            visibility: AJ,
            buffer: {
              type: "uniform"
            }
          }];
        for (const hJ of cJ.textures) qJ.push({
          binding: hJ.binding,
          visibility: AJ,
          texture: {
            viewDimension: hJ.dimension
          }
        }), qJ.push({
          binding: hJ.samplerBinding,
          visibility: AJ,
          sampler: {}
        });
        const jJ = this.device.createBindGroupLayout({
            label: XJ,
            entries: qJ
          }),
          YJ = {
            key: JJ,
            id: eJ,
            kind: ZJ,
            program: cJ,
            vertex: this.device.createShaderModule({
              label: `${XJ}-vertex`,
              code: cJ.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${XJ}-fragment`,
              code: cJ.fragment
            }),
            materialLayout: jJ,
            pipelineLayout: this.device.createPipelineLayout({
              label: XJ,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, jJ, ...UJ ? [UJ.layout] : []]
            }),
            packGroup: null !== (FJ = null === UJ || void 0 === UJ ? void 0 : UJ.group) && void 0 !== FJ ? FJ : null,
            failed: !1
          };
        return this.programs.set(JJ, YJ), YJ
      }
      writeFrameUniforms() {
        const JJ = this.frameUniforms;
        Ge(this.view, JJ), this.device.queue.writeBuffer(this.frameBuffer, 0, JJ)
      }
      materialInstance(JJ, cJ) {
        let ZJ = this.materials.get(JJ);
        if (!ZJ) {
          const cJ = new Map;
          this.materials.set(JJ, cJ), JJ.Sy.addOnce((() => {
            for (const JJ of cJ.values()) JJ.released = !0, this.resources.destroyBuffer(JJ.buffer);
            this.materials.delete(JJ)
          })), ZJ = cJ
        }
        let FJ = ZJ.get(cJ.key);
        return FJ || (FJ = this.newMaterialInstance(JJ, null, cJ), ZJ.set(cJ.key, FJ)), FJ
      }
      modelInstance(JJ, cJ) {
        const ZJ = this.modelSlot(JJ);
        let FJ = ZJ.instances.get(cJ.key);
        return FJ || (FJ = this.newMaterialInstance(JJ, JJ, cJ), ZJ.instances.set(cJ.key, FJ)), FJ
      }
      modelSlot(JJ) {
        let cJ = JJ.gpu[IJ.f.lite];
        return cJ || (cJ = new yX(this.resources), JJ.gpu[IJ.f.lite] = cJ), cJ
      }
      newMaterialInstance(JJ, cJ, ZJ) {
        const FJ = ZJ.program.material.floats,
          UJ = new Float32Array(FJ),
          eJ = new Map;
        return {
          owner: JJ,
          model: cJ,
          program: ZJ,
          data: UJ,
          uploaded: new Float32Array(FJ).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${JJ.name}-uniforms`,
            size: Math.max(16, 4 * FJ),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: eJ,
          ubo: new ne(ZJ.program.material.slots, UJ, eJ),
          bindGroup: null,
          bound: new Array(2 * ZJ.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(JJ) {
        var cJ;
        const ZJ = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: xU + rU,
            fragment: xU + vU,
            attributes: [],
            material: fU,
            textures: []
          }, "earthSky"),
          FJ = this.earthSkyUniforms ??= this.newMaterialInstance(KX, null, ZJ);
        this.earthSkyFrom !== JJ && (this.earthSkyFrom = JJ, FJ.data.fill(0)), IU(FJ.ubo, JJ, this.view);
        const UJ = this.vertexInputs(ZJ, KX, "earthSky", ZJ, null);
        if (ZJ.failed || !UJ || !this.bindMaterial(FJ, !1)) return;
        const eJ = null !== (cJ = UJ.state) && void 0 !== cJ ? cJ : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          XJ = this.makeDraw(ZJ, UJ, eJ, FJ, 1);
        XJ.count = sU.length;
        const AJ = MU(JJ, this.view);
        XJ.slotOffset = this.writeMeshSlot(AJ, 1), this.lists.skyDraws.push(XJ)
      }
      uploadIfChanged(JJ) {
        const {
          data: cJ,
          uploaded: ZJ
        } = JJ;
        for (let FJ = 0; FJ < cJ.length; FJ++)
          if (cJ[FJ] !== ZJ[FJ]) return ZJ.set(cJ), void this.device.queue.writeBuffer(JJ.buffer, 0, cJ)
      }
      bindMaterial(JJ, cJ) {
        return JJ.frame !== this.frame && (JJ.frame = this.frame, cJ || this.uploadIfChanged(JJ), JJ.bindable = this.bindTextures(JJ)), JJ.bindable
      }
      bindTextures(JJ) {
        const {
          program: cJ,
          bound: ZJ
        } = JJ, FJ = cJ.program.textures;
        let UJ = !JJ.bindGroup,
          eJ = !0;
        for (let XJ = 0; XJ < FJ.length; XJ++) {
          const cJ = JJ.textures.get(FJ[XJ].name),
            AJ = cJ ? this.resources.boundTexture(cJ) : null;
          AJ ? ZJ[2 * XJ] === AJ.view && ZJ[2 * XJ + 1] === AJ.sampler || (ZJ[2 * XJ] = AJ.view, ZJ[2 * XJ + 1] = AJ.sampler, UJ = !0) : (cJ || JJ.ubo.expected.has(FJ[XJ].name) || this.warnOnce(`texture:${JJ.owner.name}:${FJ[XJ].name}`, `${JJ.owner.name} has no ${FJ[XJ].name}`), eJ = !1)
        }
        if (!eJ) return UJ && (JJ.bindGroup = null), !1;
        if (UJ) {
          const UJ = [{
            binding: 0,
            resource: {
              buffer: JJ.buffer
            }
          }];
          for (let JJ = 0; JJ < FJ.length; JJ++) UJ.push({
            binding: FJ[JJ].binding,
            resource: ZJ[2 * JJ]
          }), UJ.push({
            binding: FJ[JJ].samplerBinding,
            resource: ZJ[2 * JJ + 1]
          });
          JJ.bindGroup = this.device.createBindGroup({
            label: `${JJ.owner.name}-material`,
            layout: cJ.materialLayout,
            entries: UJ
          })
        }
        return !0
      }
      writeMeshSlot(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, JJ, cJ, ZJ), this.slotCount++ * OF
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = this.inputs.get(JJ);
        if (!eJ || eJ.program !== FJ || !Qe(cJ, eJ, this.resources, UJ)) {
          var XJ;
          if (eJ = null !== (XJ = this.vertexLayouts.resolveInputs(cJ, ZJ, FJ, UJ)) && void 0 !== XJ ? XJ : void 0, !eJ) return null;
          this.inputs.set(JJ, eJ)
        }
        return this.withGpuBuffers(eJ)
      }
      meshInputs(JJ, cJ, ZJ) {
        const FJ = this.inputs.get(JJ);
        if (FJ && this.inputsStamped(FJ, JJ, ZJ, cJ)) return this.withGpuBuffers(FJ);
        const UJ = JJ.owner,
          eJ = ee(JJ),
          XJ = this.vertexInputs(JJ, UJ, UJ.name, cJ, eJ);
        return XJ && (XJ.geometry = Xe(JJ), XJ.instanceLayout = this.drawDefines.instanceLayout(UJ, ZJ)), XJ
      }
      inputsStamped(JJ, cJ, ZJ, FJ) {
        return function(JJ, cJ, ZJ, FJ) {
          return JJ.program === ZJ && JJ.geometry === Xe(cJ) && JJ.instanceLayout === FJ
        }(JJ, cJ, FJ, this.drawDefines.instanceLayout(cJ.owner, ZJ))
      }
      withGpuBuffers(JJ) {
        return Ce(JJ, this.resources, this.zeroBuffer) ? JJ : null
      }
      instanceBuffersFit(JJ, cJ, ZJ) {
        const FJ = ie(cJ, ZJ, this.resources, this.zeroBuffer);
        if (FJ) {
          const UJ = cJ.ends[FJ.index] - cJ.offsets[FJ.index] + cJ.o3[FJ.index];
          return this.warnOnce(`overrun:${JJ}`, `${JJ} draws ${ZJ} instances from a ${UJ}-byte buffer (${FJ.needed} needed)`), !1
        }
        return !0
      }
      createBinding(JJ, cJ, ZJ, FJ) {
        const UJ = `${cJ._colorFormat}|${cJ._depthStencilFormat}|${cJ._depthCompare}|${cJ._sampleCount}`,
          eJ = Xc(this.device, cJ);
        if (JJ === this.skyLastRenderable) {
          let ZJ = null;
          return {
            renderable: JJ,
            pipeline: eJ,
            draw: JJ => ZJ ? this.drawSky(JJ, cJ, UJ, ZJ) : 0,
            update: JJ => {
              ZJ = JJ
            }
          }
        }
        return {
          renderable: JJ,
          pipeline: eJ,
          draw: JJ => (FJ ? FJ.execute(JJ, cJ, UJ) : 0) + this.drawList(JJ, cJ, UJ, ZJ)
        }
      }
      drawSky(JJ, cJ, ZJ, FJ) {
        const UJ = this.lists.skyDraws,
          eJ = UJ.length > 0;
        if (eJ) {
          var XJ;
          const ZJ = (null !== (XJ = cJ._depthCompare) && void 0 !== XJ ? XJ : Zc).startsWith("greater") ? 0 : 1;
          JJ.setViewport(0, 0, FJ.targetWidth, FJ.targetHeight, ZJ, ZJ)
        }
        const AJ = this.drawList(JJ, cJ, ZJ, UJ);
        return eJ && JJ.setViewport(0, 0, FJ.targetWidth, FJ.targetHeight, 0, 1), AJ
      }
      drawList(JJ, cJ, ZJ, FJ) {
        let UJ = 0;
        const eJ = this.binder;
        eJ.reset();
        for (const XJ of FJ) {
          const FJ = this.pipelineFor(XJ, cJ, ZJ);
          FJ && (eJ.bind(JJ, XJ, FJ, this.meshSlots.bindGroup, XJ.slotOffset), XJ.indexBuffer ? JJ.drawIndexed(XJ.count, XJ.instances, XJ.first, 0, 0) : JJ.draw(XJ.count, XJ.instances, XJ.first, 0), UJ++)
        }
        return UJ
      }
      pipelineFor(JJ, cJ, ZJ) {
        var FJ, UJ;
        if (JJ.program.failed) return null;
        const eJ = JJ.inputs;
        if (eJ.pipeline && eJ.pipelineTarget === ZJ) return eJ.pipeline;
        const XJ = `${JJ.pipelineKey}|${ZJ}`,
          AJ = this.pipelines.get(XJ);
        if (void 0 !== AJ) return AJ && (eJ.pipeline = AJ, eJ.pipelineTarget = ZJ), AJ || null;
        this.pipelines.set(XJ, null);
        const {
          program: qJ,
          layout: jJ,
          state: YJ
        } = JJ, hJ = {
          label: `standard-${qJ.id}`,
          layout: qJ.pipelineLayout,
          vertex: {
            module: qJ.vertex,
            entryPoint: "main",
            buffers: jJ.buffers
          },
          fragment: tJ({
            module: qJ.fragment,
            entryPoint: "main"
          }, cJ, YJ.blend, YJ.colourWrite),
          depthStencil: cJ._depthStencilFormat ? {
            format: cJ._depthStencilFormat,
            depthCompare: null !== (FJ = null !== (UJ = YJ.depthCompare) && void 0 !== UJ ? UJ : cJ._depthCompare) && void 0 !== FJ ? FJ : Zc,
            depthWriteEnabled: YJ.depthWrite,
            depthBias: YJ.depthBias,
            depthBiasSlopeScale: YJ.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: cJ._sampleCount
          },
          primitive: {
            topology: YJ.topology,
            frontFace: YJ.frontFace,
            cullMode: YJ.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(hJ).then((JJ => {
          this.compiling--, this.pipelines.set(XJ, JJ)
        }), (JJ => {
          this.compiling--, this.reportFailure(qJ, XJ, JJ)
        })), null
      }
      forEachSunShadowCaster(JJ) {
        const cJ = this.caster,
          ZJ = (ZJ, FJ, UJ) => {
            const eJ = ZJ.unit && function(JJ) {
              const cJ = JJ.material.model;
              return null !== cJ && (cJ.lifeform || cJ.item) && cJ.castsSunShadow && "triangle-list" === JJ.state.topology
            }(ZJ) ? ee(ZJ.unit) : null;
            if (!eJ) return;
            const XJ = ZJ.unit.owner;
            switch (cJ.geometry = eJ, cJ.skip = XJ.noSunShadowVertices, cJ.indexed = null !== ZJ.indexBuffer, cJ.first = ZJ.first, cJ.count = ZJ.count, cJ.zh = FJ, cJ.worldAt = UJ, cJ.instances = null, cJ.instanceCount = 1, cJ.thin = !1, ce(XJ)) {
              case "thin": {
                const JJ = XJ._thinInstanceDataStorage.matrixData;
                if (!JJ) return;
                cJ.instances = JJ, cJ.instanceCount = Math.min(ZJ.instances, JJ.length / 16), cJ.thin = !0;
                break
              }
              case "instanced": {
                const JJ = this.resources.batchUploads.get(XJ);
                if (!JJ || JJ.frame !== this.frame || !this.writeBatchCasters(JJ)) return;
                break
              }
            }
            JJ(cJ)
          };
        for (const FJ of this.lists.opaqueDraws) ZJ(FJ, this.meshSlots.data, FJ.slotOffset / 4);
        this.thinBundle.forEachDrawn(ZJ)
      }
      writeBatchCasters(JJ) {
        const {
          caster: cJ
        } = this, ZJ = JJ.packedMatrices, FJ = JJ.count;
        cJ.instances = ZJ, cJ.instanceCount = FJ;
        let UJ = -1;
        for (let eJ = 0; eJ < FJ; eJ++) {
          const cJ = MX(JJ.packedRowMesh(eJ));
          cJ && UJ < 0 ? (this.casterWorlds.length < 16 * FJ && (this.casterWorlds = new Float32Array(ZJ.length)), this.casterWorlds.set(ZJ.subarray(0, 16 * eJ)), UJ = eJ) : !cJ && UJ >= 0 && (this.casterWorlds.set(ZJ.subarray(16 * eJ, 16 * eJ + 16), 16 * UJ), UJ++)
        }
        return UJ >= 0 && (cJ.instances = this.casterWorlds, cJ.instanceCount = UJ), cJ.instanceCount > 0
      }
      async reportFailure(JJ, cJ, ZJ) {
        const FJ = [];
        let UJ = !0;
        for (const [eJ, XJ] of [
            ["vertex", JJ.vertex],
            ["fragment", JJ.fragment]
          ]) {
          const JJ = await XJ.getCompilationInfo();
          for (const cJ of JJ.messages) UJ &&= "error" !== cJ.type, FJ.push(`${eJ}:${cJ.lineNum}:${cJ.linePos} ${cJ.type}: ${cJ.message}`)
        }
        if (UJ && !JJ.packGroup) return this.pipelines.set(cJ, !1), console.error(`Lite: pipeline ${cJ} failed`, ZJ), void LU("mesh", JJ.kind, ZJ);
        JJ.failed || (JJ.failed = !0, console.error(`Lite: program ${JJ.id} failed`, ZJ, FJ.join("\n"), {
          program: JJ.program,
          key: JJ.key
        }), LU("mesh", JJ.kind, ZJ, UJ ? null : FJ[0]))
      }
    }

    function MX(JJ) {
      var cJ, ZJ;
      const FJ = null === (cJ = JJ.HI) || void 0 === cJ || null === (ZJ = cJ.aShaderPackItem) || void 0 === ZJ ? void 0 : ZJ.x;
      return void 0 !== FJ && 0 !== (FJ & qc.i)
    }
    var bX = ZJ(40416),
      wX = ZJ(40421),
      WX = ZJ(40425),
      gX = ZJ(40364);
    const HX = [0, 3, 1, 4, 2, 5];

    function PX(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = ZJ[0].width;
      try {
        return UJ ? function(JJ, cJ, ZJ) {
          const FJ = (0, gX.b)(JJ, ZJ, ZJ, 6);
          for (let UJ = 0; UJ < 6; UJ++)(0, gX.d)(JJ, FJ, UJ, cJ[HX[UJ]], {
            invertY: !1
          });
          return FJ.texture
        }(JJ, ZJ, eJ) : function(JJ, cJ, ZJ, FJ) {
          const UJ = JJ.createTexture({
            label: "sink-cube",
            size: {
              width: ZJ,
              height: ZJ,
              depthOrArrayLayers: 6
            },
            format: FJ,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let eJ = 0; eJ < 6; eJ++) JJ.queue.copyExternalImageToTexture({
            source: cJ[HX[eJ]]
          }, {
            texture: UJ,
            origin: {
              x: 0,
              y: 0,
              z: eJ
            }
          }, {
            width: ZJ,
            height: ZJ
          });
          return UJ
        }(cJ, ZJ, eJ, 1 === FJ ? "r8unorm" : "rgba8unorm")
      } finally {
        kX(ZJ)
      }
    }

    function kX(JJ) {
      for (const cJ of null !== JJ && void 0 !== JJ ? JJ : []) null === cJ || void 0 === cJ || cJ.close()
    }
    async function pX(JJ) {
      const cJ = [],
        ZJ = [];
      if (await Promise.all(JJ.map(((JJ, FJ) => (cJ[FJ] = null, JJ.then((JJ => {
          cJ[FJ] = JJ
        }), (JJ => {
          ZJ.push(JJ)
        })))))), ZJ.length > 0) throw kX(cJ), ZJ[0];
      return cJ
    }
    class dX {
      constructor(JJ) {
        this.qh = JJ, this.starts = [], this.lengths = [], this.used = 0, JJ > 0 && (this.starts.push(0), this.lengths.push(JJ))
      }
      allocate(JJ) {
        const {
          starts: cJ,
          lengths: ZJ
        } = this;
        for (let FJ = 0; FJ < cJ.length; FJ++) {
          if (ZJ[FJ] < JJ) continue;
          const UJ = cJ[FJ];
          return ZJ[FJ] === JJ ? (cJ.splice(FJ, 1), ZJ.splice(FJ, 1)) : (cJ[FJ] += JJ, ZJ[FJ] -= JJ), this.used += JJ, UJ
        }
        return -1
      }
      free(JJ, cJ) {
        this.used -= cJ;
        const ZJ = Math.min(JJ + cJ, this.qh);
        ZJ > JJ && this.release(JJ, ZJ - JJ)
      }
      grow(JJ) {
        const cJ = this.qh;
        this.qh = JJ, this.release(cJ, JJ - cJ)
      }
      truncate(JJ) {
        const {
          starts: cJ,
          lengths: ZJ
        } = this;
        for (let FJ = cJ.length - 1; FJ >= 0 && cJ[FJ] + ZJ[FJ] > JJ; FJ--) cJ[FJ] >= JJ ? (cJ.splice(FJ, 1), ZJ.splice(FJ, 1)) : ZJ[FJ] = JJ - cJ[FJ];
        this.qh = JJ
      }
      release(JJ, cJ) {
        const {
          starts: ZJ,
          lengths: FJ
        } = this;
        let UJ = 0,
          eJ = ZJ.length;
        for (; UJ < eJ;) {
          const cJ = UJ + eJ >> 1;
          ZJ[cJ] < JJ ? UJ = cJ + 1 : eJ = cJ
        }
        const XJ = UJ,
          AJ = XJ > 0 && ZJ[XJ - 1] + FJ[XJ - 1] === JJ,
          qJ = XJ < ZJ.length && JJ + cJ === ZJ[XJ];
        AJ && qJ ? (FJ[XJ - 1] += cJ + FJ[XJ], ZJ.splice(XJ, 1), FJ.splice(XJ, 1)) : AJ ? FJ[XJ - 1] += cJ : qJ ? (ZJ[XJ] = JJ, FJ[XJ] += cJ) : (ZJ.splice(XJ, 0, JJ), FJ.splice(XJ, 0, cJ))
      }
    }
    const zX = 256;
    class NX {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = JJ, this.onReplaced = cJ, this.mergeGap = ZJ, this.gpu = null, this.bytes = void 0, this.ws = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const UJ = Math.max(zX, Math.ceil(FJ / zX) * zX);
        this.bytes = new Uint8Array(UJ), this.ws = new dX(UJ / zX)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(JJ) {
        return Math.max(1, Math.ceil(JJ / zX)) * zX
      }
      allocate(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JJ;
        const FJ = NX.slotBytes(JJ),
          UJ = FJ / zX;
        let eJ = this.ws.allocate(UJ);
        eJ < 0 && (this.grow(this.ws.qh + UJ), eJ = this.ws.allocate(UJ));
        const XJ = eJ * zX;
        return this.growTo(XJ + Math.max(ZJ, FJ)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, XJ, XJ + FJ), cJ && this.bytes.set(new Uint8Array(cJ.buffer, cJ.byteOffset, Math.min(cJ.byteLength, FJ)), XJ), this.markDirty(XJ, XJ + FJ), XJ
      }
      growTo(JJ) {
        const cJ = Math.ceil(JJ / zX);
        cJ > this.ws.qh && this.grow(cJ)
      }
      free(JJ, cJ) {
        this.freed.push(JJ, cJ)
      }
      write(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (FJ <= 0) return;
        this.bytes.set(new Uint8Array(cJ.buffer, ZJ, FJ), JJ);
        let eJ = JJ + FJ;
        if (UJ) {
          const cJ = JJ + 4 * Math.ceil(FJ / 4);
          this.bytes.fill(0, eJ, cJ), eJ = cJ
        }
        this.markDirty(JJ, eJ)
      }
      move(JJ, cJ, ZJ) {
        this.bytes.copyWithin(cJ, JJ, JJ + ZJ), this.markDirty(cJ, cJ + ZJ)
      }
      flush() {
        for (const cJ of this.retired) this.onReplaced(cJ), cJ.destroy();
        this.retired.length = 0;
        const JJ = this.dirtyStarts.length;
        if (JJ > 0) {
          const {
            dirtyStarts: cJ,
            dirtyEnds: ZJ,
            order: FJ
          } = this;
          FJ.length = JJ;
          for (let AJ = 0; AJ < JJ; AJ++) FJ[AJ] = AJ;
          JJ > 1 && FJ.sort(((JJ, ZJ) => cJ[JJ] - cJ[ZJ]));
          const UJ = this.mergeGap;
          let eJ = cJ[FJ[0]],
            XJ = ZJ[FJ[0]];
          for (let AJ = 1; AJ < JJ; AJ++) {
            const JJ = FJ[AJ];
            cJ[JJ] - XJ <= UJ ? XJ = Math.max(XJ, ZJ[JJ]) : (this.send(eJ, XJ), eJ = cJ[JJ], XJ = ZJ[JJ])
          }
          this.send(eJ, XJ), cJ.length = 0, ZJ.length = 0
        }
        this.holding = !1
      }
      WE() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const JJ = this.freed;
        for (let cJ = 0; cJ < JJ.length; cJ += 2) this.ws.free(JJ[cJ] / zX, JJ[cJ + 1] / zX);
        JJ.length = 0
      }
      send(JJ, cJ) {
        this.device.queue.writeBuffer(this.gpu, JJ, this.bytes.buffer, JJ, cJ - JJ);
        for (const ZJ of this.replaced) {
          const FJ = Math.min(cJ, ZJ.size);
          FJ > JJ && this.device.queue.writeBuffer(ZJ, JJ, this.bytes.buffer, JJ, FJ - JJ)
        }
      }
      markDirty(JJ, cJ) {
        JJ &= -4, cJ = cJ + 3 & -4, this.holding ? (this.dirtyStarts.push(JJ), this.dirtyEnds.push(cJ)) : this.send(JJ, cJ)
      }
      grow(JJ) {
        const cJ = this.ws.qh,
          ZJ = Math.max(2 * cJ, JJ),
          FJ = new Uint8Array(ZJ * zX);
        FJ.set(this.bytes);
        const UJ = this.gpu;
        this.gpu = this.createGpu(FJ.byteLength), this.bytes = FJ, this.ws.grow(ZJ), UJ && (this.replaced.push(UJ), this.onReplaced(UJ)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, cJ * zX)
      }
      createGpu(JJ) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: JJ,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function OX(JJ) {
      return Array.isArray(JJ) ? new Float32Array(JJ) : JJ
    }

    function TX(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = wU(UJ),
        XJ = Math.min(UJ, FJ.byteLength);
      if (eJ === XJ && FJ.byteOffset % 4 === 0) return void JJ.queue.writeBuffer(cJ, ZJ, FJ.buffer, FJ.byteOffset, eJ);
      const AJ = new Uint8Array(eJ);
      AJ.set(new Uint8Array(FJ.buffer, FJ.byteOffset, XJ)), JJ.queue.writeBuffer(cJ, ZJ, AJ)
    }

    function CX(JJ, cJ, ZJ) {
      const FJ = "linear",
        UJ = "nearest";
      let eJ = UJ,
        XJ = UJ,
        AJ = "nearest",
        qJ = !cJ;
      switch (JJ) {
        case 11:
          eJ = FJ, XJ = FJ;
          break;
        case 3:
          eJ = FJ, XJ = FJ, AJ = cJ ? "linear" : "nearest";
          break;
        case 8:
          AJ = cJ ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          XJ = FJ;
          break;
        case 6:
          XJ = FJ, AJ = cJ ? "linear" : "nearest";
          break;
        case 7:
          XJ = FJ, qJ = !0;
          break;
        case 9:
          eJ = FJ;
          break;
        case 10:
          eJ = FJ, AJ = cJ ? "linear" : "nearest";
          break;
        case 2:
          eJ = FJ, XJ = FJ, ZJ > 1 ? (AJ = "linear", qJ = !1) : qJ = !0;
          break;
        case 12:
          eJ = FJ, qJ = !0;
          break;
        default:
          qJ = !0
      }
      return ZJ > 1 && !qJ ? {
        magFilter: FJ,
        minFilter: FJ,
        mipmapFilter: "linear",
        maxAnisotropy: ZJ
      } : {
        magFilter: eJ,
        minFilter: XJ,
        mipmapFilter: AJ,
        ...qJ ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function uX(JJ) {
      return 0 === JJ ? "clamp-to-edge" : 2 === JJ ? "mirror-repeat" : "repeat"
    }
    class iX {
      constructor(JJ, cJ) {
        let {
          vertexArena: ZJ = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = JJ, this.device = cJ, this.buffers = new WeakMap, this.b_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = ZJ ? new NX(cJ, (JJ => {
          var cJ;
          null === (cJ = this.onDestroy) || void 0 === cJ || cJ.call(this, JJ), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var JJ;
        null === (JJ = this.arena) || void 0 === JJ || JJ.flush()
      }
      endUploadFrame() {
        var JJ;
        null === (JJ = this.arena) || void 0 === JJ || JJ.WE()
      }
      vertexBufferCreated(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZJ ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(JJ);
        const UJ = OX(cJ);
        JJ.qh = UJ.byteLength, this.buffers.set(JJ, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: ZJ && null !== this.arena,
          pending: UJ,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: FJ
        })
      }
      vertexBufferUpdated(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        const UJ = this.buffers.get(JJ);
        if (!UJ) return;
        const eJ = OX(cJ),
          XJ = void 0 === FJ ? eJ.byteLength : Math.min(FJ, eJ.byteLength);
        this.update(UJ, eJ, ZJ, XJ)
      }
      vertexBufferFloatsUpdated(JJ, cJ, ZJ, FJ) {
        const UJ = this.buffers.get(JJ);
        if (!UJ) return;
        const eJ = ZJ * Float32Array.BYTES_PER_ELEMENT,
          XJ = (FJ - ZJ) * Float32Array.BYTES_PER_ELEMENT;
        UJ.slot >= 0 && XJ > 0 && eJ + XJ <= UJ.size ? this.writeSlot(UJ, eJ, cJ, cJ.byteOffset + eJ, XJ, !1) : UJ.gpu && XJ > 0 && eJ + XJ <= UJ.gpu.size ? this.device.queue.writeBuffer(UJ.gpu, eJ, cJ.buffer, cJ.byteOffset + eJ, XJ) : this.update(UJ, cJ.subarray(ZJ, FJ), eJ, XJ)
      }
      indexBufferCreated(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(JJ);
        const FJ = function(JJ) {
          if (JJ instanceof Uint16Array || JJ instanceof Uint32Array) return JJ;
          for (let cJ = 0; cJ < JJ.length; cJ++)
            if (JJ[cJ] >= 65535) return new Uint32Array(JJ);
          return new Uint16Array(JJ)
        }(cJ);
        JJ.is32Bits = 4 === FJ.BYTES_PER_ELEMENT, JJ.qh = FJ.byteLength, this.buffers.set(JJ, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: FJ,
          ownsPending: FJ !== cJ,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: ZJ
        })
      }
      bufferDeleted(JJ) {
        const cJ = this.buffers.get(JJ);
        null !== cJ && void 0 !== cJ && cJ.gpu ? (this.destroyBuffer(cJ.gpu), this.gpuBuffersVersion++) : cJ && cJ.slot >= 0 && (this.arena.free(cJ.slot, cJ.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(JJ)
      }
      update(JJ, cJ, ZJ, FJ) {
        if (JJ.slot >= 0) this.updateSlot(JJ, cJ, ZJ, FJ);
        else if (JJ.gpu) {
          if (ZJ + wU(FJ) > JJ.gpu.size) {
            const cJ = this.device.createBuffer({
                label: JJ.label,
                size: wU(Math.max(2 * JJ.gpu.size, ZJ + FJ)),
                usage: JJ.usage | GPUBufferUsage.COPY_SRC
              }),
              UJ = this.device.createCommandEncoder();
            UJ.copyBufferToBuffer(JJ.gpu, 0, cJ, 0, JJ.gpu.size), this.device.queue.submit([UJ.finish()]), this.destroyBuffer(JJ.gpu), this.gpuBuffersVersion++, JJ.gpu = cJ
          }
          TX(this.device, JJ.gpu, ZJ, cJ, FJ)
        } else {
          const eJ = new Uint8Array(cJ.buffer, cJ.byteOffset, FJ),
            XJ = JJ.pending;
          if (XJ && JJ.ownsPending && ZJ + FJ <= XJ.byteLength) new Uint8Array(XJ.buffer, XJ.byteOffset, XJ.byteLength).set(eJ, ZJ);
          else if (XJ && 0 === ZJ && FJ === XJ.byteLength && cJ.byteLength === FJ) JJ.pending = cJ, JJ.ownsPending = !1;
          else {
            var UJ;
            const cJ = new Uint8Array(Math.max(null !== (UJ = null === XJ || void 0 === XJ ? void 0 : XJ.byteLength) && void 0 !== UJ ? UJ : 0, ZJ + FJ));
            XJ && cJ.set(new Uint8Array(XJ.buffer, XJ.byteOffset, XJ.byteLength)), cJ.set(eJ, ZJ), JJ.pending = cJ, JJ.ownsPending = !0
          }
        }
      }
      updateSlot(JJ, cJ, ZJ, FJ) {
        const UJ = this.arena;
        ZJ + wU(FJ) > JJ.size && (JJ.size = wU(Math.max(2 * JJ.size, ZJ + FJ)), UJ.growTo(JJ.slot + JJ.size), this.gpuBuffersVersion++), 0 === FJ ? this.writeSlot(JJ, ZJ, LX, 0, 4, !1) : this.writeSlot(JJ, ZJ, cJ, cJ.byteOffset, FJ, !0)
      }
      writeSlot(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = cJ + (eJ ? wU(UJ) : UJ);
        XJ > JJ.slotBytes && this.moveSlot(JJ, XJ), this.arena.write(JJ.slot + cJ, ZJ, FJ, UJ, eJ)
      }
      moveSlot(JJ, cJ) {
        const ZJ = this.arena,
          FJ = NX.slotBytes(Math.max(cJ, Math.min(2 * JJ.slotBytes, JJ.size))),
          UJ = ZJ.allocate(FJ, null, JJ.size);
        ZJ.move(JJ.slot, UJ, JJ.slotBytes), ZJ.free(JJ.slot, JJ.slotBytes), JJ.slot = UJ, JJ.slotBytes = FJ, this.gpuBuffersVersion++
      }
      cover(JJ, cJ) {
        const ZJ = this.buffers.get(JJ);
        if (!ZJ || ZJ.slot < 0) return !1;
        const FJ = Math.min(cJ, ZJ.size);
        return !(FJ <= ZJ.slotBytes) && (this.moveSlot(ZJ, FJ), !0)
      }
      destroyBuffer(JJ) {
        var cJ;
        null === (cJ = this.onDestroy) || void 0 === cJ || cJ.call(this, JJ), JJ.destroy()
      }
      gpuBuffer(JJ) {
        const cJ = this.buffers.get(JJ);
        if (!cJ) return null;
        if (cJ.slot >= 0) return this.arena.buffer;
        if (cJ.arena && cJ.pending) {
          const JJ = cJ.pending,
            ZJ = this.arena;
          return cJ.size = wU(JJ.byteLength), cJ.slotBytes = NX.slotBytes(function(JJ) {
            const cJ = new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength);
            let ZJ = cJ.length;
            if (JJ.byteOffset % 4 === 0) {
              for (; ZJ % 4 !== 0 && 0 === cJ[ZJ - 1];) ZJ--;
              if (ZJ % 4 === 0) {
                const cJ = new Uint32Array(JJ.buffer, JJ.byteOffset, ZJ / 4);
                let FJ = cJ.length;
                for (; FJ > 0 && 0 === cJ[FJ - 1];) FJ--;
                ZJ = 4 * FJ
              }
            }
            for (; ZJ > 0 && 0 === cJ[ZJ - 1];) ZJ--;
            return ZJ
          }(JJ)), cJ.slot = ZJ.allocate(cJ.slotBytes, JJ, cJ.size), cJ.pending = null, ZJ.buffer
        }
        if (!cJ.gpu && cJ.pending) {
          const JJ = cJ.pending;
          cJ.gpu = this.device.createBuffer({
            label: cJ.label,
            size: wU(JJ.byteLength),
            usage: cJ.usage
          }), TX(this.device, cJ.gpu, 0, JJ, JJ.byteLength), cJ.pending = null
        }
        return cJ.gpu
      }
      gpuOffset(JJ) {
        var cJ, ZJ;
        const FJ = null !== (cJ = null === (ZJ = this.buffers.get(JJ)) || void 0 === ZJ ? void 0 : ZJ.slot) && void 0 !== cJ ? cJ : -1;
        return FJ < 0 ? 0 : FJ
      }
      gpuEnd(JJ) {
        var cJ, ZJ;
        const FJ = this.buffers.get(JJ);
        return FJ ? FJ.slot >= 0 ? FJ.slot + FJ.size : null !== (cJ = null === (ZJ = FJ.gpu) || void 0 === ZJ ? void 0 : ZJ.size) && void 0 !== cJ ? cJ : 0 : 0
      }
      vertexInput(JJ, cJ, ZJ) {
        var FJ, UJ, eJ, XJ;
        return null !== (FJ = null !== (UJ = ZJ && this.modelInput(ZJ, cJ)) && void 0 !== UJ ? UJ : null === (eJ = null !== (XJ = this.b_.get(JJ)) && void 0 !== XJ ? XJ : this.batchUploads.get(JJ)) || void 0 === eJ ? void 0 : eJ.inputs[cJ]) && void 0 !== FJ ? FJ : null
      }
      modelInput(JJ, cJ) {
        const ZJ = this.geometrySlot(JJ);
        let FJ = ZJ.inputs.get(cJ);
        if (void 0 === FJ) {
          const UJ = JJ.vertexAttributes.find((JJ => JJ.kind === cJ));
          FJ = UJ ? new RJ(this.modelKey(ZJ, UJ.data, !1), UJ.offset, UJ.stride, UJ.components, !1, UJ.glType, UJ.isNormalized) : null, ZJ.inputs.set(cJ, FJ)
        }
        return FJ
      }
      modelIndex(JJ) {
        return JJ.indexData && this.modelKey(this.geometrySlot(JJ), JJ.indexData, !0)
      }
      geometrySlot(JJ) {
        let cJ = JJ.gpu[IJ.f.lite];
        if (!cJ) {
          const ZJ = new Map,
            FJ = () => {
              for (const JJ of ZJ.values()) this.bufferDeleted(JJ)
            },
            UJ = JJ => {
              const cJ = ZJ.get(JJ);
              cJ && this.vertexBufferUpdated(cJ, JJ)
            };
          cJ = {
            keys: ZJ,
            inputs: new Map,
            release: FJ,
            updated: UJ
          }, JJ.gpu[IJ.f.lite] = cJ
        }
        return cJ
      }
      modelKey(JJ, cJ, ZJ) {
        let FJ = JJ.keys.get(cJ);
        if (!FJ) {
          if (ZJ) {
            const JJ = {
              qh: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(JJ, cJ, "model-indices"), FJ = JJ
          } else FJ = {
            qh: 0
          }, this.vertexBufferCreated(FJ, cJ, !1, "model-vertices");
          JJ.keys.set(cJ, FJ)
        }
        return FJ
      }
      indexFormat(JJ) {
        return JJ.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(JJ, cJ) {
        --JJ.refs > 0 || (this.releaseTexture(JJ), kX(JJ.images), null !== cJ && this.textures.delete(cJ))
      }
      load(JJ, cJ) {
        const ZJ = cJ.decoded = async function(JJ) {
          if ("cube" === JJ.kind) return async function(JJ) {
            if (6 !== JJ.length) throw new Error(`${JJ.length} files where six faces were expected`);
            const cJ = await pX(JJ.map((JJ => pU(JJ)))),
              ZJ = cJ[0].width;
            return pX(cJ.map((async JJ => {
              if (JJ.width === ZJ && JJ.height === ZJ) return JJ;
              try {
                return await createImageBitmap(JJ, {
                  ...PU,
                  resizeWidth: ZJ,
                  resizeHeight: ZJ
                })
              } finally {
                JJ.close()
              }
            })))
          }(JJ.files);
          if ("data" === JJ.kind && JJ.data) return [await createImageBitmap(new Blob([JJ.data]), PU)];
          return [await pU(RX(JJ))]
        }(JJ.source).then((JJ => {
          0 === cJ.refs ? kX(JJ) : cJ.images = JJ
        }));
        this.track(cJ, RX(JJ.source), ZJ, (() => {
          cJ.wanted && !cJ.failed && cJ.refs > 0 && this.upload(JJ, cJ)
        }))
      }
      canvasUpdated(JJ, cJ, ZJ) {
        const {
          state: FJ
        } = this.textureSlot(JJ);
        FJ.dynamicSource = {
          invertY: cJ,
          premultiplied: ZJ
        }, FJ.dynamic && this.pushDynamic(JJ.source, FJ)
      }
      async atlasArray(JJ, cJ, ZJ) {
        const FJ = await NU(this.device, JJ, cJ, ZJ);
        if (!this.atlasBindings.has(FJ)) {
          const JJ = (0, bX.c)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(FJ, {
            view: FJ.texture.createView({
              dimension: "2d-array"
            }),
            sampler: JJ
          })
        }
        return FJ
      }
      boundTexture(JJ) {
        const cJ = this.atlasBindings.get(JJ);
        if (cJ) return cJ;
        const ZJ = JJ;
        if (ZJ.released) return null;
        const FJ = this.textureSlot(ZJ, !0),
          {
            state: UJ
          } = FJ;
        if (!UJ.view && (UJ.wanted = !0, UJ.loading || UJ.failed || this.upload(ZJ, UJ), !UJ.view)) return null;
        const eJ = this.chosenSampler(ZJ, FJ),
          XJ = FJ.bound;
        return XJ && XJ.view === UJ.view && XJ.sampler === eJ ? XJ : (FJ.bound = {
          view: UJ.view,
          sampler: eJ
        }, FJ.bound)
      }
      textureLoaded(JJ) {
        var cJ, ZJ;
        return null !== (cJ = null === (ZJ = JJ.gpu[IJ.f.lite]) || void 0 === ZJ ? void 0 : ZJ.state.decoded) && void 0 !== cJ ? cJ : null
      }
      textureFailed(JJ) {
        var cJ;
        return !0 === (null === (cJ = JJ.gpu[IJ.f.lite]) || void 0 === cJ ? void 0 : cJ.state.failed)
      }
      chosenSampler(JJ, cJ) {
        const {
          samplingMode: ZJ,
          wrapU: FJ,
          wrapV: UJ
        } = JJ.sampler, eJ = cJ.state.hasMips, XJ = function(JJ, cJ) {
          const {
            bilinear: ZJ,
            trilinear: FJ
          } = IJ.g;
          return !cJ && JJ !== ZJ || 11 !== JJ && JJ !== FJ && JJ !== ZJ ? 1 : 4
        }(ZJ, eJ), AJ = cJ.sampler;
        if (AJ && AJ.samplingMode === ZJ && AJ.hasMips === eJ && AJ.anisotropy === XJ && AJ.wrapU === FJ && AJ.wrapV === UJ) return AJ.sampler;
        const qJ = this.samplerFor(ZJ, eJ, XJ, FJ, UJ);
        return cJ.sampler = {
          samplingMode: ZJ,
          hasMips: eJ,
          anisotropy: XJ,
          wrapU: FJ,
          wrapV: UJ,
          sampler: qJ
        }, qJ
      }
      releaseTexture(JJ) {
        var cJ, ZJ;
        JJ.view && (null === (ZJ = this.onDestroy) || void 0 === ZJ || ZJ.call(this, JJ.view));
        null === (cJ = JJ.destroy) || void 0 === cJ || cJ.call(JJ)
      }
      textureSlot(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = JJ.gpu[IJ.f.lite];
        if (ZJ) return ZJ;
        const FJ = function(JJ) {
          let {
            source: cJ,
            sampler: ZJ
          } = JJ;
          return "canvas" === cJ.kind ? null : `${cJ.kind}|${RX(cJ)}|${ZJ.noMipmap}|${ZJ.samplingMode}|${ZJ.invertY}`
        }(JJ);
        let UJ = null === FJ ? void 0 : this.textures.get(FJ);
        UJ || (UJ = {
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
        }, null !== FJ && (this.textures.set(FJ, UJ), this.load(JJ, UJ), cJ && this.firstBindDecodes++)), UJ.refs++;
        const eJ = UJ,
          XJ = {
            state: UJ,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(eJ, FJ)
            }
          };
        return JJ.gpu[IJ.f.lite] = XJ, XJ
      }
      samplerFor(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = `${JJ}|${cJ}|${ZJ}|${FJ}|${UJ}`;
        let XJ = this.samplers.get(eJ);
        if (!XJ) {
          const AJ = {
            ...CX(JJ, cJ, ZJ),
            addressModeU: uX(FJ),
            addressModeV: uX(UJ)
          };
          XJ = (0, bX.c)(this.engine, AJ), this.samplers.set(eJ, XJ)
        }
        return XJ
      }
      upload(JJ, cJ) {
        const {
          source: ZJ,
          sampler: FJ
        } = JJ;
        cJ.hasMips = !FJ.noMipmap, "canvas" === ZJ.kind ? this.createDynamic(ZJ, cJ) : "cube" === ZJ.kind ? this.uploadCube(cJ, ZJ.luminance) : this.uploadImage(cJ, !0 === FJ.invertY, ZJ.url)
      }
      uploadImage(JJ, cJ, ZJ) {
        const [FJ] = JJ.images;
        JJ.images = null;
        const UJ = (0, wX.e)(this.engine, FJ, {
          mipMaps: JJ.hasMips,
          invertY: cJ,
          srgb: !1
        }).then((cJ => {
          FJ.close(), 0 !== JJ.refs ? (JJ.view = cJ.view, JJ.destroy = cJ.texture.destroy.bind(cJ.texture)) : cJ.texture.destroy()
        }));
        this.track(JJ, ZJ, UJ)
      }
      track(JJ, cJ, ZJ, FJ) {
        JJ.loading = !0, this.pending++, ZJ.catch((ZJ => {
          JJ.failed = !0, console.warn(`Lite: could not load texture ${kU(cJ)}`, ZJ)
        })).finally((() => {
          JJ.loading = !1, this.pending--, null === FJ || void 0 === FJ || FJ()
        }))
      }
      uploadCube(JJ, cJ) {
        const ZJ = JJ.images;
        JJ.images = null;
        const FJ = PX(this.engine, this.device, ZJ, (0, IJ.w)(cJ), JJ.hasMips);
        JJ.view = FJ.createView({
          dimension: "cube"
        }), JJ.destroy = () => {
          FJ.destroy()
        }
      }
      createDynamic(JJ, cJ) {
        const {
          canvas: ZJ
        } = JJ, FJ = (0, WX.d)(this.engine, Math.max(1, ZJ.width), Math.max(1, ZJ.height), {
          mipMaps: cJ.hasMips,
          srgb: !1
        });
        cJ.dynamic = FJ, cJ.view = FJ.view, cJ.destroy = () => {
          FJ.texture.destroy()
        }, this.pushDynamic(JJ, cJ)
      }
      pushDynamic(JJ, cJ) {
        const ZJ = cJ.dynamicSource,
          FJ = cJ.dynamic,
          {
            canvas: UJ
          } = JJ;
        if (ZJ && FJ && 0 !== UJ.width && 0 !== UJ.height) return UJ.width !== FJ.width || UJ.height !== FJ.height ? (this.releaseTexture(cJ), cJ.dynamic = null, cJ.view = null, void this.createDynamic(JJ, cJ)) : void(0, WX.h)(this.engine, FJ, UJ, {
          invertY: ZJ.invertY,
          premultiplyAlpha: ZJ.premultiplied
        })
      }
    }

    function RX(JJ) {
      return "cube" === JJ.kind ? JJ.rootUrl : "canvas" === JJ.kind ? "canvas" : JJ.url
    }
    const LX = new Uint8Array(4);

    function aX(JJ) {
      const cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      JJ._colorAttachment.storeOp = JJ._targetSignature._sampleCount > 1 ? cJ : "store";
      const ZJ = JJ._renderPassDescriptor.depthStencilAttachment;
      ZJ && (ZJ.depthStoreOp = cJ, ZJ.stencilStoreOp && (ZJ.stencilStoreOp = cJ))
    }
    var BX = ZJ(36744),
      tX = ZJ(36794),
      oX = ZJ(36374),
      lX = ZJ(38545);
    const JA = new Float64Array([1, 1, 1]),
      cA = new Float64Array([0, 1, 0]),
      ZA = new Float64Array(4),
      FA = new Float32Array(16),
      UA = new Float64Array(3),
      eA = new Float64Array(4);

    function XA(JJ, cJ, ZJ) {
      JJ.fov = cJ.fov, JJ.near = cJ.near, JJ.far = cJ.far, JJ.renderWidth = ZJ.renderWidth, JJ.renderHeight = ZJ.renderHeight, (0, oX.w)(cJ.holderRotation, 0, ZA, 0), (0, oX.c)(JA, 0, ZA, 0, cJ.holderPosition, 0, FA);
      const FJ = cJ.fL;
      UA[0] = FJ[0], UA[1] = FJ[1], UA[2] = FJ[2] + 1;
      const UJ = JJ.viewMatrix;
      (0, oX.n)(FJ, UA, cA, UJ), (0, oX.k)(UJ, 0, UJ), (0, oX.r)(UJ, FA, 0, UJ), (0, oX.k)(UJ, 0, UJ);
      const eJ = JJ.worldMatrix;
      (0, oX.k)(UJ, 0, eJ), JJ.eye[0] = eJ[12], JJ.eye[1] = eJ[13], JJ.eye[2] = eJ[14], eA[0] = JJ.fov, eA[1] = JJ.renderWidth / JJ.renderHeight, eA[2] = JJ.near, eA[3] = JJ.far, (0, oX.s)(eA, JJ.projectionMatrix), (0, oX.r)(UJ, JJ.projectionMatrix, 0, JJ.viewProjectionMatrix), (0, lX.f)(JJ.viewProjectionMatrix, JJ.frustum)
    }

    function AA(JJ, cJ) {
      let ZJ = JJ.frustumPlanes;
      ZJ || (ZJ = JJ.frustumPlanes = Array.from({
        length: 6
      }, (() => new BX.c(0, 0, 0, 0))));
      for (let FJ = 0; FJ < 6; FJ++) {
        const JJ = ZJ[FJ].normal;
        JJ._x = cJ[4 * FJ], JJ._y = cJ[4 * FJ + 1], JJ._z = cJ[4 * FJ + 2], JJ._isDirty = !0, ZJ[FJ].d = cJ[4 * FJ + 3]
      }
    }

    function qA(JJ, cJ) {
      const ZJ = cJ.clearColor;
      JJ.clearColour[0] = ZJ.r, JJ.clearColour[1] = ZJ.g, JJ.clearColour[2] = ZJ.b, JJ.clearColour[3] = ZJ.a;
      const FJ = cJ.ambientColor;
      JJ.ambientColour[0] = FJ.r, JJ.ambientColour[1] = FJ.g, JJ.ambientColour[2] = FJ.b, JJ.animationRatio = cJ.animationRatio, JJ.frameId = cJ.frameId, JJ.version++
    }

    function jA(JJ) {
      const cJ = JJ.model.view;
      return cJ.animTick = (0, tX.e)(), cJ.timeMs = performance.now(), qA(cJ, JJ.iG), JJ.model.update(cJ.frameId), cJ
    }

    function YA(JJ) {
      const cJ = JJ.iG,
        {
          view: ZJ,
          sL: FJ
        } = JJ.model;
      return XA(ZJ, FJ, cJ.gn()), cJ.onBeforeRenderObservable.notifyObservers(cJ), AA(cJ, ZJ.frustum), cJ.onBeforeCameraRenderObservable.notifyObservers(cJ.activeCamera), jA(JJ)
    }
    var hA = ZJ(36333),
      DA = ZJ(36443),
      sA = ZJ(36783);

    function nA(JJ) {
      var cJ, ZJ;
      const FJ = (0, yJ._)(JJ);
      if (!FJ || FJ.diffuseTexture && (0, sA.h)(JJ)) return null;
      const UJ = null === (cJ = (0, yJ.r)(FJ, VJ.g.name)) || void 0 === cJ ? void 0 : cJ.state,
        eJ = null === (ZJ = (0, yJ.r)(FJ, Re.c.name)) || void 0 === ZJ ? void 0 : ZJ.state,
        XJ = new Float32Array(16);
      return function(JJ, cJ, ZJ, FJ) {
        var UJ, eJ;
        const XJ = DF;
        FJ.set(JJ.diffuseColor, XJ.diffuse), FJ[XJ.diffuse + 3] = JJ.alpha, FJ.set(JJ.ambientColor, XJ.ambientAndCutoff), FJ[XJ.ambientAndCutoff + 3] = JJ.alphaCutOff, FJ.set(JJ.emissiveColor, XJ.emissiveAndLevel), FJ[XJ.emissiveAndLevel + 3] = null !== (UJ = null === (eJ = JJ.diffuseTexture) || void 0 === eJ ? void 0 : eJ.level) && void 0 !== UJ ? UJ : 1, null !== cJ && void 0 !== cJ && cJ.animDataPerTex ? (FJ[XJ.anim + 1] = tX.d, FJ[XJ.anim + 2] = cJ.animDataPerTex.length / 3 - 1) : ZJ && (FJ[XJ.anim + 1] = ZJ.numAnimStates, FJ[XJ.anim + 2] = ZJ.ticksPerAnimState)
      }(FJ, UJ, eJ, XJ), {
        model: FJ,
        atlas: UJ,
        texture: UJ ? "atlas" : FJ.diffuseTexture ? "single" : "none",
        animated: UJ ? !!UJ.animDataPerTex : !!eJ,
        liquid: (0, sA.i)(JJ),
        customRenderMat: (0, sA.h)(JJ),
        uniformData: XJ
      }
    }
    var GA = ZJ(36314);
    class fA {
      constructor(JJ) {
        this.units = JJ, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var JJ;
        this.buffer.destroy(), null === (JJ = this.twin) || void 0 === JJ || JJ.destroy()
      }
    }
    class xA {
      constructor(JJ, cJ) {
        this.arena = JJ, this.ws = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.ws = new dX(cJ);
        const ZJ = new fA(cJ);
        ZJ.buffer = this.createBuffer(ZJ, !1), this.backings.push(ZJ), this.refresh()
      }
      get qh() {
        return this.ws.qh
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
        let JJ = 0;
        for (const cJ of this.backings) JJ += cJ.units * (this.arena.unitBytes + (cJ.twin ? this.arena.twinUnitBytes : 0));
        return JJ
      }
      holds(JJ) {
        return JJ.start + JJ.length <= this.usable
      }
      lost(JJ) {
        return this.dropped || JJ.start + JJ.length > this.qh
      }
      write(JJ, cJ) {
        const {
          device: ZJ,
          unitBytes: FJ
        } = this.arena;
        for (const UJ of this.backings) {
          const eJ = (UJ.units - JJ.start) * FJ;
          eJ > 0 && ZJ.queue.writeBuffer(UJ.buffer, JJ.start * FJ, cJ, 0, Math.min(cJ.byteLength, eJ))
        }
      }
      writeLight(JJ, cJ) {
        const {
          device: ZJ,
          twinUnitBytes: FJ,
          verticesPerUnit: UJ
        } = this.arena, {
          light: eJ,
          count: XJ
        } = this.arena.twinLight(cJ, Math.min(cJ.length, JJ.length * UJ));
        for (const AJ of this.backings) {
          AJ.twin || (AJ.twin = this.createBuffer(AJ, !0));
          const cJ = (AJ.units - JJ.start) * UJ;
          cJ > 0 && ZJ.queue.writeBuffer(AJ.twin, JJ.start * FJ, eJ, 0, Math.min(XJ, cJ))
        }
      }
      grow(JJ) {
        this.arena.assertNotDrawing();
        const {
          device: cJ,
          unitBytes: ZJ,
          label: FJ
        } = this.arena, UJ = this.backings[this.backings.length - 1], eJ = new fA(JJ), XJ = cJ.createCommandEncoder({
          label: `${FJ}-grow`
        });
        eJ.buffer = this.createBuffer(eJ, !1), XJ.copyBufferToBuffer(UJ.buffer, 0, eJ.buffer, 0, UJ.units * ZJ), UJ.twin && (eJ.twin = this.createBuffer(eJ, !0), XJ.copyBufferToBuffer(UJ.twin, 0, eJ.twin, 0, UJ.units * this.arena.twinUnitBytes)), cJ.queue.submit([XJ.finish()]), this.backings.push(eJ), this.ws.grow(JJ)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const JJ of this.backings) JJ.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(JJ, cJ) {
        const {
          device: ZJ,
          unitBytes: FJ,
          twinUnitBytes: UJ,
          usage: eJ,
          label: XJ
        } = this.arena;
        ZJ.pushErrorScope("out-of-memory");
        const AJ = ZJ.createBuffer({
          label: cJ ? `${XJ}-light` : XJ,
          size: JJ.units * (cJ ? UJ : FJ),
          usage: (cJ ? this.arena.twinUsage : eJ) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, ZJ.popErrorScope().then((ZJ => {
          this.arena.awaitingVerdict--, this.settle(JJ, cJ, !ZJ, !0)
        }), (ZJ => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${XJ} buffer, taken as failed: ${String(ZJ)}`), this.settle(JJ, cJ, !1, !1)
        })), AJ
      }
      settle(JJ, cJ, ZJ, FJ) {
        const UJ = this.backings.indexOf(JJ);
        if (!(this.dropped || UJ < 0)) {
          if (!ZJ) {
            if (FJ && this.arena.ranOutOfMemory(JJ.units, JJ.units * (cJ ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === UJ) return void this.drop();
            for (const JJ of this.backings.splice(UJ)) JJ.destroy();
            return this.ws.truncate(this.backings[UJ - 1].units), this.growable = !1, void this.promote()
          }
          cJ ? JJ.twinReady = !0 : (JJ.bufferReady = !0, this.arena.allocatedBuffer(JJ.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: JJ
        } = this;
        let cJ = 0;
        for (; cJ + 1 < JJ.length && JJ[cJ].ready && JJ[cJ + 1].ready;) cJ++;
        for (const ZJ of JJ.splice(0, cJ)) ZJ.destroy();
        this.refresh()
      }
      refresh() {
        const JJ = this.backings[0];
        this.buffer = JJ.buffer, this.twin = JJ.twinReady ? JJ.twin : null, this.usable = !this.dropped && JJ.bufferReady ? JJ.units : 0
      }
    }
    class rA {
      constructor(JJ, cJ, ZJ, FJ) {
        let {
          verticesPerUnit: UJ = 1,
          twinUsage: eJ = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = JJ, this.unitBytes = cJ, this.usage = ZJ, this.label = FJ, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, jc.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), cJ % 4 !== 0) throw new Error(`${FJ}: ${cJ}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = UJ, this.twinUsage = eJ, this.twinValueBytes = UJ > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * UJ
      }
      twinLight(JJ, cJ) {
        if (4 === this.twinValueBytes) return this.widened.length < cJ && (this.widened = new Float32Array(Math.max(cJ, 2 * this.widened.length))), this.widened.set(JJ.subarray(0, cJ)), {
          light: this.widened,
          count: cJ
        };
        const ZJ = cJ % this.verticesPerUnit;
        if (0 === ZJ) return {
          light: JJ,
          count: cJ
        };
        const FJ = cJ - ZJ + this.verticesPerUnit;
        return this.padded.length < FJ && (this.padded = new Uint16Array(Math.max(FJ, 2 * this.padded.length))), this.padded.set(JJ.subarray(0, cJ)), this.padded.fill(0, cJ, FJ), {
          light: this.padded,
          count: FJ
        }
      }
      allocate(JJ) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), JJ > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const UJ of this.pages) {
          const cJ = UJ.ws.allocate(JJ);
          if (cJ >= 0) return {
            page: UJ,
            start: cJ,
            length: JJ
          }
        }
        const cJ = this.pages[this.pages.length - 1];
        if (null !== cJ && void 0 !== cJ && cJ.canGrow) {
          const ZJ = Math.min(this.ceiling, Math.max(2 * cJ.qh, cJ.qh + JJ));
          if (ZJ - cJ.qh >= JJ) return cJ.grow(ZJ), {
            page: cJ,
            start: cJ.ws.allocate(JJ),
            length: JJ
          }
        }
        cJ && cJ !== this.pages[0] && 0 === cJ.ws.used && cJ.drop();
        const ZJ = Math.floor(1048576 / this.unitBytes),
          FJ = new xA(this, Math.max(JJ, Math.min(this.ceiling, ZJ)));
        return this.pages.push(FJ), {
          page: FJ,
          start: FJ.ws.allocate(JJ),
          length: JJ
        }
      }
      free(JJ) {
        this.assertNotDrawing();
        const {
          page: cJ
        } = JJ;
        cJ.ws.free(JJ.start, JJ.length), 0 === cJ.ws.used && cJ !== this.pages[0] && cJ !== this.pages[this.pages.length - 1] && cJ.drop()
      }
      remove(JJ) {
        const cJ = this.pages.indexOf(JJ);
        cJ >= 0 && this.pages.splice(cJ, 1)
      }
      ranOutOfMemory(JJ, cJ) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${cJ}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, JJ), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, JJ) / 2));
        const ZJ = performance.now();
        ZJ >= this.shortageUntil && (this.forgetFailedAt = ZJ + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = ZJ + 1e3)
      }
      allocatedBuffer(JJ) {
        JJ >= this.failed && (this.failed = 1 / 0);
        const cJ = Math.min(2 * JJ, Math.floor((JJ + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, cJ))
      }
      stats() {
        let JJ = 0,
          cJ = 0,
          ZJ = 0,
          FJ = 0;
        for (const UJ of this.pages) JJ += UJ.qh, cJ += UJ.ws.used, ZJ += UJ.hasTwin ? UJ.qh * this.twinUnitBytes : 0, FJ += UJ.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: JJ * this.unitBytes,
          usedBytes: cJ * this.unitBytes,
          twinBytes: ZJ,
          allocatedBytes: FJ
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: JJ,
          maxStorageBufferBindingSize: cJ
        } = this.device.limits;
        let ZJ = Math.floor(Math.min(67108864, JJ) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (ZJ = Math.min(ZJ, Math.floor(cJ / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (ZJ = Math.min(ZJ, Math.floor(cJ / this.twinUnitBytes))), ZJ
      }
    }
    const vA = 16383;

    function mA(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = 0;
      for (let XJ = ZJ; XJ < FJ; XJ += vA) JJ.drawIndexed(6 * Math.min(vA, FJ - XJ), 1, 0, cJ + 4 * XJ, UJ), eJ++;
      return eJ
    }
    class QA {
      constructor(JJ, cJ) {
        this.recordsGroup = cJ, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const ZJ = Kc.g.strideWithoutAtlas;
        this.vertexArena = new rA(JJ, ZJ, GPUBufferUsage.VERTEX, `terrain-vertices-${ZJ}`), this.quadArena = new rA(JJ, DA.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const FJ = (0, yc.d)(new Uint16Array(98298), vA);
        this.quadPattern = JJ.createBuffer({
          label: "terrain-quad-pattern",
          size: FJ.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), JJ.queue.writeBuffer(this.quadPattern, 0, FJ)
      }
      set(JJ, cJ) {
        const ZJ = cJ.packedVertices,
          FJ = ZJ ? this.quadArena.allocate(JJ.faceCount) : this.vertexArena.allocate(JJ.vertexCount);
        if (!FJ) return !1;
        JJ.vertices = FJ;
        const UJ = ZJ ? new Uint8Array(ZJ.buffer, ZJ.byteOffset, ZJ.byteLength) : new Uint8Array(cJ.vertices);
        return FJ.page.write(FJ, UJ), !0
      }
      setLight(JJ, cJ) {
        const {
          vertices: ZJ
        } = JJ;
        ZJ && 0 !== cJ.length && ZJ.page.live && (cJ.length < JJ.vertexCount ? ZJ.page.arena.warnOnce("shortLight", `a part's ${cJ.length} light values are fewer than its ${JJ.vertexCount} vertices, so its light is left as it was`) : (ZJ.page.writeLight(ZJ, cJ), JJ.lit = !0))
      }
      lightFullSky(JJ, cJ) {
        this.fullSky.length < cJ && (this.fullSky = new Uint16Array(Math.max(cJ, 4096)).fill(GA.i));
        for (const ZJ of JJ) {
          const JJ = ZJ.vertices;
          JJ.page.live && (JJ.page.writeLight(JJ, this.fullSky), ZJ.lit = !0)
        }
      }
      backed(JJ) {
        const {
          vertices: cJ
        } = JJ;
        return !!cJ && cJ.page.holds(cJ)
      }
      lost(JJ) {
        const {
          vertices: cJ
        } = JJ;
        return !!cJ && cJ.page.lost(cJ)
      }
      release(JJ) {
        JJ.vertices && JJ.vertices.page.arena.free(JJ.vertices), JJ.vertices = null, JJ.lit = !1
      }
      setDrawing(JJ) {
        this.forgetBound()
      }
      draw(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cJ.faceCount;
        const eJ = cJ.vertices,
          XJ = eJ.page,
          AJ = ZJ ? XJ.twin : null;
        if (!XJ.holds(eJ) || ZJ && !AJ) return 0;
        const {
          verticesPerUnit: qJ
        } = XJ.arena;
        let jJ = eJ.start * qJ;
        this.boundPattern || (JJ.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const YJ = FJ + UJ;
        if (qJ > 1) return XJ.buffer === this.boundRecords && AJ === this.boundRecordsLight || (JJ.setBindGroup(1, this.recordsGroup(XJ.buffer, AJ)), this.boundRecords = XJ.buffer, this.boundRecordsLight = AJ), mA(JJ, jJ, FJ, YJ, cJ.slot);
        XJ.buffer !== this.boundVertices && (JJ.setVertexBuffer(0, XJ.buffer), this.boundVertices = XJ.buffer), AJ && AJ !== this.boundLight && (JJ.setVertexBuffer(1, AJ), this.boundLight = AJ);
        const hJ = cJ.faceCount;
        return YJ <= hJ ? mA(JJ, jJ, FJ, YJ, cJ.slot) : mA(JJ, jJ, FJ, hJ, cJ.slot) + mA(JJ, jJ, Math.max(FJ, hJ) - hJ, YJ - hJ, cJ.slot)
      }
      get buffersAwaitingVerdict() {
        let JJ = 0;
        for (const cJ of this.arenas()) JJ += cJ.awaitingVerdict;
        return JJ
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class EA {
      constructor(JJ, cJ, ZJ, FJ) {
        this.device = JJ, this.splitBefore = cJ, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = JJ.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const UJ = JJ.createShaderModule({
          label: "scene-depth-copy",
          code: (eJ = ZJ._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${eJ?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var eJ;
        JJ.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: UJ,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: UJ,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((JJ => {
          this.pipeline = JJ, this.building = !1
        }), (JJ => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", JJ)
        })), ZJ._executeWithTransmission = () => this.execute(ZJ, FJ)
      }
      get compiling() {
        return this.building
      }
      setWanted(JJ) {
        this.wanted = JJ
      }
      setPlanes(JJ, cJ) {
        JJ === this.near && cJ === this.far || (this.near = JJ, this.far = cJ, this.unproject[0] = JJ / (cJ - JJ), this.unproject[1] = cJ * JJ / (cJ - JJ), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.copy) || void 0 === cJ ? void 0 : cJ.view) && void 0 !== JJ ? JJ : null
      }
      execute(JJ, cJ) {
        var ZJ;
        null === (ZJ = this.retired) || void 0 === ZJ || ZJ.destroy(), this.retired = null;
        const FJ = Jc(cJ),
          UJ = JJ._transparentBindings,
          eJ = this.wanted && this.pipeline ? this.splitIndex(UJ) : -1,
          XJ = JJ._colorAttachment,
          AJ = XJ.resolveTarget;
        eJ >= 0 && (XJ.resolveTarget = void 0, aX(JJ, !0));
        let qJ = FJ.beginRenderPass(JJ._renderPassDescriptor);
        qJ.setBindGroup(0, JJ._sceneBG);
        let jJ = this.drawList(qJ, cJ, JJ._opaqueBindings, 0, JJ._opaqueBindings.length);
        if (jJ += this.drawList(qJ, cJ, JJ._directBindings, 0, JJ._directBindings.length), jJ += this.drawList(qJ, cJ, UJ, 0, eJ >= 0 ? eJ : UJ.length), qJ.end(), eJ < 0) return jJ;
        aX(JJ);
        const YJ = JJ._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: hJ,
            stencilLoadOp: DJ
          } = YJ,
          sJ = XJ.loadOp;
        XJ.resolveTarget = AJ;
        try {
          this.copyDepth(FJ, JJ), XJ.loadOp = "load", YJ.depthLoadOp = "load", DJ && (YJ.stencilLoadOp = "load"), qJ = FJ.beginRenderPass(JJ._renderPassDescriptor), qJ.setBindGroup(0, JJ._sceneBG), jJ += this.drawList(qJ, cJ, UJ, eJ, UJ.length), qJ.end()
        } finally {
          XJ.loadOp = sJ, YJ.depthLoadOp = hJ, YJ.stencilLoadOp = DJ
        }
        return jJ
      }
      splitIndex(JJ) {
        for (let cJ = 0; cJ < JJ.length; cJ++)
          if (JJ[cJ].renderable === this.splitBefore) return cJ;
        return -1
      }
      drawList(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = null,
          XJ = 0;
        for (let AJ = FJ; AJ < UJ; AJ++) {
          const FJ = ZJ[AJ],
            UJ = FJ.renderable.mesh;
          UJ && !1 === UJ.visible || (FJ.pipeline !== eJ && (JJ.setPipeline(FJ.pipeline), eJ = FJ.pipeline), XJ += FJ.draw(JJ, cJ))
        }
        return XJ
      }
      copyDepth(JJ, cJ) {
        var ZJ, FJ;
        const UJ = (null !== (ZJ = cJ._config.depth) && void 0 !== ZJ ? ZJ : cJ._config.rt)._depthTexture,
          eJ = (null === (FJ = this.copy) || void 0 === FJ ? void 0 : FJ.source) === UJ ? this.copy : this.remakeCopy(UJ),
          XJ = JJ.beginRenderPass(eJ.pass);
        XJ.setPipeline(this.pipeline), XJ.setBindGroup(0, eJ.bindGroup), XJ.draw(3), XJ.end()
      }
      remakeCopy(JJ) {
        var cJ, ZJ;
        this.retired = null !== (cJ = null === (ZJ = this.copy) || void 0 === ZJ ? void 0 : ZJ.texture) && void 0 !== cJ ? cJ : null;
        const FJ = this.device.createTexture({
            label: "scene-depth",
            size: [JJ.width, JJ.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          UJ = FJ.createView(),
          eJ = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: JJ.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          XJ = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: UJ,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: JJ,
          texture: FJ,
          view: UJ,
          bindGroup: eJ,
          pass: XJ
        }, this.copy
      }
    }
    const VA = "rgba8unorm";

    function KA(JJ) {
      return JJ ? 15 : 1
    }
    class yA {
      constructor(JJ, cJ, ZJ, FJ) {
        this.device = JJ, this.terrain = FJ, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = cJ._targetSignature._sampleCount > 1, this.cameraBuffer = JJ.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = JJ.createBindGroupLayout({
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
        const UJ = JJ.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = JJ.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: UJ,
          entries: []
        });
        const eJ = JJ.createShaderModule({
          label: "sun-shadow-mask",
          code: (XJ = this.edge, `${(0,Sc.E)()}${dZ({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${XJ?SZ:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${KA(XJ)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${XJ?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var XJ;
        JJ.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: JJ.createPipelineLayout({
            bindGroupLayouts: [this.layout, UJ, UJ, de(JJ, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: eJ,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: eJ,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((JJ => {
          this.pipeline = JJ, this.building = !1
        }), (JJ => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", JJ)
        }));
        const AJ = cJ._executeWithTransmission;
        cJ._executeWithTransmission = JJ => this.execute(cJ, ZJ, (() => AJ ? AJ(JJ) : function(JJ, cJ) {
          const ZJ = Jc(cJ).beginRenderPass(JJ._renderPassDescriptor);
          ZJ.setBindGroup(0, JJ._sceneBG);
          let FJ = SA(ZJ, cJ, JJ._opaqueBindings);
          return FJ += SA(ZJ, cJ, JJ._directBindings), FJ += SA(ZJ, cJ, JJ._transparentBindings), ZJ.end(), FJ
        }(cJ, ZJ)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.targets) || void 0 === cJ ? void 0 : cJ.maskView) && void 0 !== JJ ? JJ : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(JJ) {
        ! function(JJ, cJ) {
          const ZJ = JJ.worldMatrix,
            FJ = JJ.projectionMatrix,
            UJ = 1 / FJ[0],
            eJ = 1 / FJ[5],
            XJ = JJ.far * JJ.near / (JJ.far - JJ.near);
          cJ[0] = JJ.eye[0], cJ[1] = JJ.eye[1], cJ[2] = JJ.eye[2], cJ[3] = 2 ** -23 / XJ, cJ[4] = ZJ[0] * UJ, cJ[5] = ZJ[1] * UJ, cJ[6] = ZJ[2] * UJ, cJ[7] = XJ, cJ[8] = ZJ[4] * eJ, cJ[9] = ZJ[5] * eJ, cJ[10] = ZJ[6] * eJ, cJ[11] = JJ.near / (JJ.far - JJ.near), cJ[12] = ZJ[8], cJ[13] = ZJ[9], cJ[14] = ZJ[10], cJ[15] = 0
        }(JJ, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(JJ, cJ, ZJ) {
        if (this.retire(), !this.terrain.readsMask) return ZJ();
        const FJ = this.targetsFor(JJ),
          UJ = Jc(cJ),
          eJ = JJ._renderPassDescriptor.depthStencilAttachment;
        this.edge || (FJ.prepass.depthStencilAttachment.view = eJ.view);
        const XJ = this.terrain.drawPrepass(UJ, FJ.prepass, JJ._sceneBG);
        if (0 === XJ) return ZJ();
        if (this.trace(UJ, FJ), this.edge) return XJ + 1 + ZJ();
        const {
          depthLoadOp: AJ,
          stencilLoadOp: qJ
        } = eJ;
        eJ.depthLoadOp = "load", qJ && (eJ.stencilLoadOp = "load");
        try {
          return XJ + 1 + ZJ()
        } finally {
          eJ.depthLoadOp = AJ, eJ.stencilLoadOp = qJ
        }
      }
      trace(JJ, cJ) {
        const ZJ = this.terrain.sunShadowGroup(),
          FJ = JJ.beginRenderPass(cJ.trace);
        this.pipeline && ZJ && (FJ.setPipeline(this.pipeline), FJ.setBindGroup(0, cJ.bindGroup), FJ.setBindGroup(1, this.empty), FJ.setBindGroup(2, this.empty), FJ.setBindGroup(3, ZJ), FJ.draw(3)), FJ.end()
      }
      retire() {
        const JJ = this.retired;
        var cJ;
        JJ && (JJ.mask.destroy(), JJ.normals.destroy(), null === (cJ = JJ.depth) || void 0 === cJ || cJ.destroy(), this.retired = null)
      }
      targetsFor(JJ) {
        var cJ, ZJ;
        const FJ = (null !== (cJ = JJ._config.depth) && void 0 !== cJ ? cJ : JJ._config.rt)._depthTexture;
        return (null === (ZJ = this.targets) || void 0 === ZJ ? void 0 : ZJ.source) === FJ ? this.targets : this.remake(JJ, FJ)
      }
      remake(JJ, cJ) {
        var ZJ;
        this.retired = this.targets;
        const FJ = [cJ.width, cJ.height],
          UJ = this.device.createTexture({
            label: "sun-shadow-mask",
            size: FJ,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          eJ = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: FJ,
            format: VA,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          XJ = null !== (ZJ = JJ._targetSignature._depthStencilFormat) && void 0 !== ZJ ? ZJ : cJ.format,
          AJ = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: FJ,
            format: XJ,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          qJ = JJ._renderPassDescriptor.depthStencilAttachment,
          jJ = XJ.includes("stencil"),
          YJ = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: eJ.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: AJ ? AJ.createView() : qJ.view,
              depthClearValue: qJ.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...jJ ? {
                stencilClearValue: qJ.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          hJ = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== AJ && void 0 !== AJ ? AJ : cJ).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: eJ.createView()
            }]
          }),
          DJ = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: UJ.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [KA(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: cJ,
          mask: UJ,
          maskView: UJ.createView(),
          normals: eJ,
          depth: AJ,
          bindGroup: hJ,
          prepass: YJ,
          trace: DJ
        }, this.targets
      }
    }

    function SA(JJ, cJ, ZJ) {
      let FJ = null,
        UJ = 0;
      for (const eJ of ZJ) {
        const ZJ = eJ.renderable.mesh;
        ZJ && !1 === ZJ.visible || (eJ.pipeline !== FJ && (JJ.setPipeline(eJ.pipeline), FJ = eJ.pipeline), UJ += eJ.draw(JJ, cJ))
      }
      return UJ
    }
    const IA = 6e4,
      MA = {
        status: "ok"
      },
      bA = {
        status: "skipped"
      };
    async function wA(JJ, cJ) {
      const {
        isCancelled: ZJ
      } = JJ;
      if (ZJ()) return {
        status: "hZ"
      };
      const {
        target: FJ
      } = cJ;
      if (!FJ) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const UJ = [],
        eJ = Promise.all(Array.from(new Set(JJ.materials), (async ZJ => {
          UJ.push(await async function(JJ, cJ, ZJ, FJ) {
            const UJ = {
              lighting: JJ.lighting,
              dirLightCount: Math.min(JJ.dirLightCount, 4),
              Jn: JJ.runtime
            };
            try {
              const eJ = cJ.material(FJ);
              return eJ && jF(cJ.programKey(eJ, !1, UJ)) ? (await eJ.ready, JJ.isCancelled() ? MA : eJ.bindGroupLayout ? await async function(JJ, cJ, ZJ, FJ) {
                const {
                  device: UJ
                } = JJ;
                let eJ, XJ;
                UJ.pushErrorScope("validation");
                try {
                  eJ = JJ.pipelineBuild(cJ, ZJ, FJ)
                } finally {
                  XJ = UJ.popErrorScope().catch((() => null))
                }
                const [AJ, qJ] = await Promise.all([XJ, eJ.built.then((() => null), (JJ => null !== JJ && void 0 !== JJ ? JJ : new Error("pipeline failed")))]);
                if (!AJ && !qJ) return MA;
                const jJ = await WA(eJ.module),
                  YJ = jJ.length > 0 ? jJ.map((JJ => `${eJ.name} ${JJ.lineNum}:${JJ.linePos}: ${JJ.message}`)).join("\n") : `${eJ.name}: ${gA(null!==qJ&&void 0!==qJ?qJ:AJ)}`;
                return {
                  status: "failed",
                  material: cJ.model.name,
                  message: YJ
                }
              }(cJ, eJ, cJ.programKey(eJ, "none" !== eJ.texture, UJ), ZJ): (console.warn(`Shader pack: skipped the compile check for "${FJ.name}", whose textures failed to load`), bA)) : MA
            } catch (eJ) {
              return {
                status: "failed",
                material: FJ.name,
                message: gA(eJ)
              }
            }
          }(JJ, cJ, FJ, ZJ))
        }))),
        XJ = function(JJ, cJ) {
          let ZJ, FJ, UJ = !1;
          const eJ = new Promise((eJ => {
            var XJ;
            ZJ = setTimeout((() => {
              eJ("timeout")
            }), null !== (XJ = cJ.timeoutMs) && void 0 !== XJ ? XJ : IA), FJ = setInterval((() => {
              cJ.isCancelled() && eJ("hZ")
            }), 50), JJ.lost.then((() => {
              UJ = !0, eJ("lost")
            }))
          }));
          return {
            signal: eJ,
            lost: () => UJ,
            dispose: () => {
              clearTimeout(ZJ), clearInterval(FJ)
            }
          }
        }(cJ.device, JJ);
      let AJ;
      try {
        AJ = await Promise.race([eJ.then((() => "done")), XJ.signal])
      } finally {
        XJ.dispose()
      }
      if ("hZ" === AJ || ZJ()) return {
        status: "hZ"
      };
      const qJ = UJ.find((JJ => "failed" === JJ.status));
      return qJ && "lost" !== AJ && !XJ.lost() && await new Promise((JJ => {
        setTimeout(JJ, 0)
      })), "lost" === AJ || XJ.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : qJ ? {
        status: "failed",
        failure: {
          material: qJ.material,
          message: qJ.message
        }
      } : "timeout" === AJ ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(jJ=JJ.timeoutMs)&&void 0!==jJ?jJ:IA)/1e3} s`), {
        status: "skipped"
      }) : UJ.some((JJ => "skipped" === JJ.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var jJ
    }
    async function WA(JJ) {
      if (!JJ) return [];
      try {
        return (await JJ.getCompilationInfo()).messages.filter((JJ => "error" === JJ.type))
      } catch {
        return []
      }
    }

    function gA(JJ) {
      var cJ;
      return null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.message) && void 0 !== cJ ? cJ : String(JJ)
    }

    function HA(JJ, cJ, ZJ, FJ) {
      jF(JJ) ? WA(ZJ).then((JJ => {
        const [ZJ] = JJ;
        LU("terrain", cJ, FJ, ZJ ? `${ZJ.lineNum}:${ZJ.linePos} error: ${ZJ.message}` : null)
      })) : LU("terrain", cJ, FJ)
    }
    var PA = ZJ(36450),
      kA = ZJ(36468),
      pA = ZJ(36478),
      dA = ZJ(36393);

    function zA(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = Math.hypot(ZJ[0], ZJ[1], ZJ[2]);
      if (!(eJ > 0)) return;
      const XJ = [ZJ[0] / eJ, ZJ[1] / eJ, ZJ[2] / eJ],
        AJ = [Math.floor(cJ[0]), Math.floor(cJ[1]), Math.floor(cJ[2])],
        qJ = [0, 0, 0],
        jJ = [1 / 0, 1 / 0, 1 / 0],
        YJ = [1 / 0, 1 / 0, 1 / 0];
      for (let sJ = 0; sJ < 3; sJ++) XJ[sJ] > 0 ? (qJ[sJ] = 1, jJ[sJ] = (AJ[sJ] + 1 - cJ[sJ]) / XJ[sJ], YJ[sJ] = 1 / XJ[sJ]) : XJ[sJ] < 0 && (qJ[sJ] = -1, jJ[sJ] = (AJ[sJ] - cJ[sJ]) / XJ[sJ], YJ[sJ] = -1 / XJ[sJ]);
      const {
        Kn: hJ
      } = JJ;
      let DJ = JJ.aN(AJ[0], AJ[1], AJ[2]);
      for (;;) {
        const cJ = jJ[0] < jJ[1] ? jJ[0] < jJ[2] ? 0 : 2 : jJ[1] < jJ[2] ? 1 : 2;
        if (jJ[cJ] > FJ) return;
        const ZJ = qJ[cJ] > 0 ? AJ[cJ] + 1 : AJ[cJ];
        AJ[cJ] += qJ[cJ], jJ[cJ] += YJ[cJ];
        const eJ = JJ.aN(AJ[0], AJ[1], AJ[2]),
          XJ = eJ !== DJ && !(JJ.opaque[DJ] && JJ.opaque[eJ]);
        if (XJ) {
          const FJ = [AJ[0], AJ[1], AJ[2]];
          FJ[cJ] = ZJ;
          const eJ = Math.floor(FJ[0] / hJ),
            XJ = Math.floor(FJ[1] / hJ),
            qJ = Math.floor(FJ[2] / hJ);
          !JJ.isDrawn(eJ, XJ, qJ) && JJ.hasParts(eJ, XJ, qJ) && UJ.add(`${eJ},${XJ},${qJ}`)
        }
        if (XJ && JJ.occluders[eJ]) return;
        DJ = eJ
      }
    }

    function NA(JJ, cJ) {
      return JJ.group - cJ.group || JJ.nearest - cJ.nearest
    }
    class OA {
      constructor(JJ, cJ) {
        this.device = JJ, this.Im = cJ, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var JJ;
        const cJ = null !== (JJ = this.free.pop()) && void 0 !== JJ ? JJ : this.next++;
        if (8 * cJ >= this.data.length) {
          const JJ = new Float32Array(2 * this.data.length);
          JJ.set(this.data), this.data = JJ, this.words = new Uint32Array(JJ.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Im()
        }
        return cJ
      }
      release(JJ) {
        this.free.push(JJ)
      }
      set(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = 8 * JJ + vF;
        this.data[eJ] = cJ, this.data[eJ + 1] = ZJ, this.data[eJ + 2] = FJ, this.setVisibility(JJ, UJ)
      }
      setVisibility(JJ, cJ) {
        this.data[8 * JJ + mF] = cJ, this.markDirty(JJ, JJ)
      }
      setFaces(JJ, cJ, ZJ) {
        const FJ = 8 * JJ;
        this.words[FJ + QF] = cJ, this.words[FJ + EF] = ZJ, this.markDirty(JJ, JJ)
      }
      markDirty(JJ, cJ) {
        this.dirtyMin = Math.min(this.dirtyMin, JJ), this.dirtyMax = Math.max(this.dirtyMax, cJ)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const TA = rF,
      CA = !0;
    const uA = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: TA.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      iA = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class RA {
      constructor(JJ) {
        this.device = JJ, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(hF), this.dirLightUniforms = this.frameUniforms.subarray(YF.dirLights, YF.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, jc.e)(), this.faceGroups = !0, this.visibilityGraph = CA, this.visCull = CA, this.visCheck = !1, this.visCullMinDistance = pA.d, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new tA, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Jn = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new QA(JJ, ((JJ, cJ) => this.recordsGroup(JJ, cJ))), this.slots = new OA(JJ, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = cc(JJ), this.frameLayout = JJ.createBindGroupLayout({
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
        }), this.frameBuffer = JJ.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = JJ.createSampler({
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
          bind: (JJ, cJ) => this.createBinding(this.opaqueRenderable, cJ, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (JJ, cJ) => this.createBinding(this.transparentRenderable, cJ, !0)
        }
      }
      installSceneDepth(JJ, cJ) {
        this.sceneDepth = new EA(this.device, this.transparentRenderable, JJ, cJ)
      }
      createFrameBindGroup() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== JJ && void 0 !== JJ ? JJ : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== cJ && void 0 !== cJ ? cJ : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(JJ, cJ) {
        const ZJ = null !== cJ && void 0 !== cJ ? cJ : JJ;
        let FJ = this.recordsGroups.get(ZJ);
        return FJ || (FJ = this.createFrameBindGroup(JJ, cJ), this.recordsGroups.set(ZJ, FJ)), FJ
      }
      setChunkMesh(JJ, cJ, ZJ) {
        var FJ;
        let UJ = this.chunks.get(JJ);
        UJ ? this.geometry.release(UJ) : (UJ = {
          mesh: JJ,
          slot: this.slots.allocate(),
          origin: [ZJ[0], ZJ[1], ZJ[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: JJ.visibility,
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
        }, this.chunks.set(JJ, UJ), this.writeSlot(UJ)), UJ.material = JJ.material ? this.materialFor(JJ.material) : null, UJ.packed = !!cJ.packedVertices, UJ.vertexCount = (0, DA.e)(cJ), UJ.faceCount = UJ.vertexCount / 4;
        const eJ = null !== (FJ = cJ.faceGroups) && void 0 !== FJ ? FJ : null;
        if (UJ.faceGroups = eJ, eJ) {
          const JJ = PA.n;
          UJ.planePX = eJ[JJ], UJ.planeNX = eJ[JJ + 1], UJ.planePY = eJ[JJ + 2], UJ.planeNY = eJ[JJ + 3], UJ.planePZ = eJ[JJ + 4], UJ.planeNZ = eJ[JJ + 5]
        }
        this.drawWhole(UJ), 0 !== UJ.faceCount && (this.geometry.set(UJ, cJ) ? (UJ.packed && this.slots.setFaces(UJ.slot, UJ.vertices.start + UJ.faceCount, UJ.faceCount), cJ.hn && this.setChunkMeshLight(JJ, cJ.hn)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${UJ.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(JJ, cJ) {
        const ZJ = this.chunks.get(JJ);
        ZJ && this.geometry.setLight(ZJ, cJ)
      }
      drawStats() {
        let JJ = this.transparent.length;
        for (const cJ of this.opaqueBatches) JJ += cJ.meshes.length;
        return {
          drawn: JJ,
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
      removeChunkMesh(JJ) {
        const cJ = this.chunks.get(JJ);
        cJ && (this.geometry.release(cJ), this.slots.release(cJ.slot), this.chunks.delete(JJ))
      }
      remeshLost(JJ, cJ) {
        this.geometry.release(cJ), cJ.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** cJ.lostRemeshes++);
        const ZJ = JJ.zh,
          [FJ, UJ, eJ] = ZJ.RFJ(cJ.origin[0], cJ.origin[1], cJ.origin[2]),
          XJ = ZJ.VG.KG(FJ, UJ, eJ);
        XJ && (XJ.QG = !0, XJ.bG = !0, ZJ.EG(XJ, !1))
      }
      chooseFaceRanges(JJ, cJ, ZJ) {
        const FJ = this.faceRanges;
        JJ.faceMask = ZJ, JJ.rangeCount = (0, kA.p)(cJ, ZJ, FJ), JJ.first0 = FJ[0], JJ.count0 = FJ[1], JJ.first1 = FJ[2], JJ.count1 = FJ[3]
      }
      drawWhole(JJ) {
        JJ.faceMask = -1, JJ.faceEpoch = -1, JJ.rangeCount = 1, JJ.first0 = 0, JJ.count0 = JJ.faceCount
      }
      writeSlot(JJ) {
        const [cJ, ZJ, FJ] = this.originOffset;
        this.slots.set(JJ.slot, JJ.origin[0] - cJ, JJ.origin[1] - ZJ, JJ.origin[2] - FJ, JJ.visibility)
      }
      materialFor(JJ) {
        const cJ = this.materials.get(JJ);
        if (cJ) return cJ;
        const ZJ = nA(JJ);
        if (!ZJ) return this.warnOnce(`material:${JJ.name}`, `Lite terrain cannot draw material "${JJ.name}"; its chunks are skipped.`), null;
        const {
          model: FJ,
          atlas: UJ,
          texture: eJ,
          animated: XJ,
          uniformData: AJ
        } = ZJ, qJ = {
          id: this.materials.size,
          model: FJ,
          texture: eJ,
          animated: XJ,
          uniformData: AJ,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${JJ.name}`,
            size: AJ.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: ZJ.liquid,
          customRenderMat: ZJ.customRenderMat,
          atlasCount: 0,
          Gl: 0,
          atlasLayers: 0,
          nextFrameAtlases: void 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(JJ, qJ), this.device.queue.writeBuffer(qJ.uniformBuffer, 0, AJ), qJ.ready = this.createMaterialBindGroup(qJ, UJ).catch((cJ => {
          console.error(`Lite terrain failed to load the textures of material "${JJ.name}"`, cJ)
        })), qJ
      }
      materialLayout(JJ) {
        const cJ = function(JJ) {
            const cJ = ["uniforms"];
            if ("atlas" === JJ.texture) {
              JJ.animated && cJ.push("animData"), cJ.push("sampler");
              for (let ZJ = 0; ZJ < JJ.atlasCount; ZJ++) cJ.push("textureArray")
            } else "single" === JJ.texture && cJ.push("sampler", "texture");
            return cJ
          }(JJ),
          ZJ = cJ.join(",");
        let FJ = this.materialLayouts.get(ZJ);
        if (!FJ) {
          const JJ = GPUShaderStage.FRAGMENT;
          FJ = this.device.createBindGroupLayout({
            label: `terrain-material-${ZJ}`,
            entries: cJ.map(((cJ, ZJ) => {
              switch (cJ) {
                case "uniforms":
                  return {
                    binding: ZJ, visibility: GPUShaderStage.VERTEX | JJ, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: ZJ, visibility: GPUShaderStage.VERTEX | JJ, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: ZJ, visibility: JJ, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: ZJ, visibility: JJ, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: ZJ, visibility: JJ, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(ZJ, FJ)
        }
        return FJ
      }
      async createMaterialBindGroup(JJ, cJ) {
        const ZJ = [{
          buffer: JJ.uniformBuffer
        }];
        if (cJ) {
          const {
            urls: FJ,
            pixels: UJ,
            layerWidth: eJ
          } = cJ.sources, XJ = await Promise.all(FJ.map(((JJ, cJ) => {
            var ZJ;
            return NU(this.device, JJ, null !== (ZJ = null === UJ || void 0 === UJ ? void 0 : UJ[cJ]) && void 0 !== ZJ ? ZJ : null, eJ)
          })));
          JJ.atlasCount = XJ.length, JJ.Gl = XJ[0].layerWidth, JJ.atlasLayers = XJ[0].layers, cJ.animDataPerTex && (JJ.nextFrameAtlases = (0, VJ.j)(cJ.animDataPerTex, JJ.atlasLayers, JJ.atlasCount), ZJ.push({
            buffer: WU(this.device, Float32Array.from(cJ.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          })), ZJ.push(this.sampler);
          for (const JJ of XJ) ZJ.push(JJ.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === JJ.texture) {
          const {
            url: cJ
          } = JJ.model.diffuseTexture.source, {
            pixels: FJ,
            width: UJ,
            height: eJ
          } = await dU(cJ);
          ZJ.push(this.sampler), ZJ.push(HU(this.device, FJ, UJ, eJ, 1, `terrain-${cJ}`).createView({
            dimension: "2d"
          }))
        }
        const FJ = this.materialLayout(this.programKey(JJ, !1));
        JJ.bindGroupLayout = FJ, JJ.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${JJ.model.name}`,
          layout: FJ,
          entries: ZJ.map(((JJ, cJ) => ({
            binding: cJ,
            resource: JJ
          })))
        })
      }
      programKey(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const FJ = ZJ ? ZJ.lighting : this.lighting,
          UJ = ZJ ? ZJ.Jn : this.Jn,
          eJ = {
            texture: JJ.texture,
            atlasCount: JJ.atlasCount,
            Gl: JJ.Gl,
            atlasLayers: JJ.atlasLayers,
            nextFrameAtlases: JJ.nextFrameAtlases,
            animated: JJ.animated,
            alphaTest: JJ.model.transparencyMode === yJ.m.alphaTest,
            lighting: FJ,
            dirLightCount: ZJ ? ZJ.dirLightCount : this.dirLightCount,
            packed: cJ
          };
        if (!UJ) return eJ;
        const XJ = this.shaderPackFields(JJ, UJ),
          AJ = "atlas" === JJ.texture && JJ.model.transparencyMode === yJ.m.opaque && eF(XJ.packVariant);
        return {
          ...eJ,
          ...XJ,
          alphaTest: eJ.alphaTest || AJ
        }
      }
      shaderPackFields(JJ, cJ) {
        return JJ.customRenderMat ? FF : function(JJ, cJ) {
          if (!JJ) return FF;
          const ZJ = JJ.defineFor(cJ ? "liquid" : "terrain");
          return 0 === ZJ ? FF : {
            packVariant: ZJ,
            liquid: cJ
          }
        }(cJ, JJ.liquid)
      }
      isBlended(JJ) {
        return JJ.model.transparencyMode === yJ.m.alphaBlend
      }
      shaderModule(JJ, cJ) {
        let ZJ = this.modules.get(JJ);
        return ZJ || (ZJ = this.device.createShaderModule({
          label: cJ,
          code: JJ
        }), this.modules.set(JJ, ZJ)), ZJ
      }
      pipelineFor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!JJ.bindGroupLayout) return null;
        const UJ = this.programKey(JJ, cJ);
        if (!FJ) return this.pipelineOf(JJ, UJ, ZJ);
        const eJ = {
            ...UJ,
            resting: FJ
          },
          XJ = this.pipelineId(JJ, eJ, ZJ),
          AJ = this.pipelines.get(XJ);
        if (AJ) return AJ;
        const qJ = this.pipelineOf(JJ, UJ, ZJ);
        return qJ && void 0 === AJ && this.startPipeline(XJ, JJ, eJ, ZJ), qJ
      }
      pipelineOf(JJ, cJ, ZJ) {
        const FJ = this.pipelineId(JJ, cJ, ZJ),
          UJ = this.pipelines.get(FJ);
        return void 0 !== UJ ? UJ : (this.startPipeline(FJ, JJ, cJ, ZJ), null)
      }
      pipelineId(JJ, cJ, ZJ) {
        return LA(cJ, this.isBlended(JJ), JJ.model.backFaceCulling, ZJ)
      }
      pipelineBuild(JJ, cJ, ZJ) {
        var FJ;
        const UJ = this.pipelineId(JJ, cJ, ZJ);
        return null !== (FJ = this.builds.get(UJ)) && void 0 !== FJ ? FJ : this.startPipeline(UJ, JJ, cJ, ZJ)
      }
      startPipeline(JJ, cJ, ZJ, FJ) {
        var UJ;
        this.pipelines.set(JJ, null);
        const eJ = bF(ZJ),
          XJ = this.isBlended(cJ),
          AJ = this.shadowMask && FJ._depthStencilFormat ? function(JJ, cJ, ZJ, FJ) {
            if (void 0 === JJ.packVariant || JJ.liquid || cJ) return "none";
            const UJ = (0, Ic.d)(JJ.packVariant);
            return null === UJ || void 0 === UJ || !UJ.sunShadow || !kZ(UJ, ZJ) || UJ.discards || JJ.alphaTest && eF(JJ.packVariant) ? "none" : FJ ? "edge" : "plain"
          }(ZJ, XJ, !!this.sunShadow, FJ._sampleCount > 1) : "none";
        let qJ;
        try {
          qJ = wF(ZJ, !!this.sunShadow, AJ)
        } catch (fJ) {
          if (!jF(ZJ)) throw fJ;
          return this.failedPackBuild(JJ, ZJ, eJ, fJ)
        }
        const jJ = this.shaderModule(qJ, eJ),
          YJ = [];
        ZJ.packed || (YJ.push(function(JJ, cJ) {
          const ZJ = [{
            shaderLocation: TA.position,
            offset: Kc.g.nU,
            format: "float32x3"
          }, {
            shaderLocation: TA.normal,
            offset: Kc.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: TA.color,
            offset: Kc.g.colorOffset,
            format: "unorm8x4"
          }];
          return JJ && ZJ.push({
            shaderLocation: TA.uv,
            offset: Kc.g.uvOffset,
            format: "float32x2"
          }), cJ && ZJ.push({
            shaderLocation: TA.blockFlagWords,
            offset: Kc.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Kc.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: ZJ
          }
        }("none" !== ZJ.texture, jF(ZJ))), ZJ.lighting && YJ.push(uA));
        const hJ = cJ.model.backFaceCulling,
          DJ = {
            label: eJ,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, cJ.bindGroupLayout, ...Oe(this.device, ZJ, !!this.sunShadow, "none" !== AJ)]
            }),
            vertex: {
              module: jJ,
              entryPoint: "mainVertex",
              buffers: YJ
            },
            fragment: tJ({
              module: jJ,
              entryPoint: "mainFragment"
            }, FJ, XJ ? iA : null),
            depthStencil: FJ._depthStencilFormat ? {
              format: FJ._depthStencilFormat,
              depthCompare: null !== (UJ = FJ._depthCompare) && void 0 !== UJ ? UJ : Zc,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: FJ._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: hJ ? "back" : "none"
            }
          },
          sJ = ZJ.resting ? 0 : 1;
        this.compiling += sJ;
        const nJ = "none" === AJ ? this.device.createRenderPipelineAsync(DJ) : this.startMaskPipelines(jJ, DJ, "edge" === AJ);
        nJ.then((cJ => {
          this.compiling -= sJ, this.pipelines.set(JJ, cJ)
        }), (JJ => {
          this.compiling -= sJ, console.error(`Lite terrain pipeline ${eJ} failed`, JJ), HA(ZJ, eJ, jJ, JJ)
        }));
        const GJ = {
          name: eJ,
          module: jJ,
          built: nJ
        };
        return this.builds.set(JJ, GJ), GJ
      }
      startMaskPipelines(JJ, cJ, ZJ) {
        const FJ = cJ.depthStencil,
          UJ = this.device.createRenderPipelineAsync(ZJ ? cJ : {
            ...cJ,
            depthStencil: {
              ...FJ,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          eJ = this.device.createRenderPipelineAsync({
            ...cJ,
            label: `${cJ.label}-prepass`,
            fragment: {
              module: JJ,
              entryPoint: "prepassFragment",
              targets: [{
                format: VA
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([UJ, eJ]).then((JJ => {
          let [cJ, ZJ] = JJ;
          return this.prepassOf.set(cJ, ZJ), this.maskPipelines++, cJ
        }))
      }
      failedPackBuild(JJ, cJ, ZJ, FJ) {
        console.error(`Lite terrain pipeline ${ZJ} failed`, FJ), HA(cJ, ZJ, null, FJ);
        const UJ = Promise.reject(FJ);
        UJ.catch((() => {}));
        const eJ = {
          name: ZJ,
          module: null,
          built: UJ
        };
        return this.builds.set(JJ, eJ), eJ
      }
      checkShaderPack(JJ) {
        return wA(JJ, {
          device: this.device,
          target: this.target,
          material: JJ => this.materialFor(JJ),
          programKey: (JJ, cJ, ZJ) => this.programKey(JJ, cJ, ZJ),
          pipelineBuild: (JJ, cJ, ZJ) => this.pipelineBuild(JJ, cJ, ZJ)
        })
      }
      createBinding(JJ, cJ, ZJ) {
        return this.target = cJ, {
          renderable: JJ,
          pipeline: Xc(this.device, cJ),
          draw: JJ => {
            this.geometry.setDrawing(!0);
            try {
              return ZJ ? this.drawTransparent(JJ, cJ) : this.drawOpaque(JJ, cJ)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(JJ, cJ) {
        var ZJ, FJ, UJ, eJ;
        const {
          ih: XJ
        } = JJ;
        this.lighting = JJ.NG;
        const AJ = (0, hA.B)(cJ);
        this.dirLightCount = Math.min(AJ, 4), this.Jn = null !== (ZJ = XJ.Jn) && void 0 !== ZJ ? ZJ : null, AJ > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(JJ, cJ), this.animateMaterials(cJ.animTick);
        const qJ = XJ.YD,
          jJ = qJ[0] !== this.originOffset[0] || qJ[1] !== this.originOffset[1] || qJ[2] !== this.originOffset[2];
        jJ && (this.originOffset[0] = qJ[0], this.originOffset[1] = qJ[1], this.originOffset[2] = qJ[2]);
        const YJ = cJ.eye;
        this.eye[0] = YJ[0], this.eye[1] = YJ[1], this.eye[2] = YJ[2], this.writeShaderPackInputs();
        const hJ = cJ.projectionMatrix,
          DJ = 0 === hJ[15];
        let sJ = 0;
        (jJ || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: nJ
        } = this;
        Ac(this.transparentRenderable._worldCenter, cJ, Uc), this.resetBatches(DJ), this.transparent.length = 0, this.unlit.length = 0;
        const GJ = XJ.zh.hJJ,
          fJ = GJ / 2 * Math.sqrt(3);
        let xJ = 0;
        const rJ = !!this.Jn && UF(this.Jn.defineFor("liquid"));
        let vJ = !1;
        const mJ = null !== (FJ = null === (UJ = XJ.TE) || void 0 === UJ ? void 0 : UJ.visibility) && void 0 !== FJ ? FJ : null,
          QJ = this.visCull && DJ && 0 === this.compiling && null !== mJ && XJ.zh.eFJ[0] >= this.visCullMinDistance ? this.target : null,
          EJ = this.visPassable,
          VJ = this.visCandidates,
          KJ = this.visCandidateBatches;
        EJ.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let yJ = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let SJ = 0;
        const IJ = (JJ, ZJ) => {
          if (!ZJ) return this.transparent.push(JJ), void(SJ += 2 * JJ.faceCount);
          if (null !== JJ.faceGroups && ZJ.faceCull) {
            if (0 === sJ && (sJ = (0, kA.c)(hJ, cJ.renderWidth, cJ.renderHeight), sJ !== this.faceFocalPx && (this.faceFocalPx = sJ, nJ = ++this.faceEpoch)), JJ.faceEpoch !== nJ) {
              JJ.faceEpoch = nJ;
              const cJ = Math.sqrt(JJ.distance) + fJ,
                ZJ = (0, kA.j)(JJ.planePX, JJ.planeNX, JJ.planePY, JJ.planeNY, JJ.planePZ, JJ.planeNZ, this.eye[0] - (JJ.origin[0] - this.originOffset[0]), this.eye[1] - (JJ.origin[1] - this.originOffset[1]), this.eye[2] - (JJ.origin[2] - this.originOffset[2]), (0, kA.g)(cJ, sJ));
              ZJ !== JJ.faceMask && this.chooseFaceRanges(JJ, JJ.faceGroups, ZJ)
            }
            if (0 === JJ.rangeCount) return
          } else - 1 !== JJ.faceMask && this.drawWhole(JJ);
          ZJ.meshes.push(JJ), SJ += 2 * ((JJ.rangeCount > 0 ? JJ.count0 : 0) + (JJ.rangeCount > 1 ? JJ.count1 : 0))
        };
        for (const bJ of this.chunks.values()) {
          jJ && this.writeSlot(bJ);
          const JJ = bJ.mesh.visibility;
          JJ !== bJ.visibility && (bJ.visibility = JJ, this.slots.setVisibility(bJ.slot, JJ));
          const {
            material: ZJ
          } = bJ;
          this.geometry.lost(bJ) && performance.now() >= bJ.lostRetryAt && this.remeshLost(XJ, bJ);
          const FJ = !(null === ZJ || void 0 === ZJ || !ZJ.bindGroup) && this.geometry.backed(bJ),
            UJ = FJ && this.lighting && !bJ.vertices.page.twin;
          if (QJ && (Number.isNaN(bJ.key) && (bJ.ci = Math.floor(bJ.origin[0] / GJ), bJ.cj = Math.floor(bJ.origin[1] / GJ), bJ.ck = Math.floor(bJ.origin[2] / GJ), bJ.key = (0, dA.h)(bJ.ci, bJ.cj, bJ.ck)), (!FJ || JJ < 1 || UJ || !this.batchDraws(ZJ, bJ.packed, QJ)) && this.visSeeThrough(bJ, QJ) && EJ.add(bJ.key)), !FJ) continue;
          UJ || (bJ.lostRemeshes = 0);
          const eJ = bJ.origin[0] - this.originOffset[0],
            AJ = bJ.origin[1] - this.originOffset[1],
            qJ = bJ.origin[2] - this.originOffset[2];
          if (!(0, lX.d)(cJ.frustum, eJ, AJ, qJ, GJ)) continue;
          const YJ = eJ + GJ / 2 - this.eye[0],
            hJ = AJ + GJ / 2 - this.eye[1],
            sJ = qJ + GJ / 2 - this.eye[2];
          if (bJ.distance = YJ * YJ + hJ * hJ + sJ * sJ, this.lighting && !bJ.lit && (xJ = Math.max(xJ, bJ.vertexCount), this.unlit.push(bJ)), UJ) continue;
          const nJ = this.isBlended(ZJ) ? null : this.batchFor(ZJ, bJ.packed, bJ.vertices.page, 1 === JJ, DJ);
          QJ ? (VJ[yJ] = bJ, KJ[yJ++] = nJ) : IJ(bJ, nJ)
        }
        const MJ = QJ ? this.sweepVisibility(JJ, cJ, mJ) : null;
        null === (eJ = (0, be.y)(XJ)) || void 0 === eJ || eJ.update(cJ.frustum, this.originOffset, GJ, MJ);
        for (let bJ = 0; bJ < yJ; bJ++) {
          const JJ = VJ[bJ];
          !MJ || MJ.isDrawn(JJ.ci, JJ.cj, JJ.ck) ? IJ(JJ, KJ[bJ]) : (this.visCulledParts++, this.visCulledTriangles += 2 * JJ.faceCount)
        }
        for (const bJ of this.transparent) vJ ||= rJ && bJ.material.liquid && !bJ.material.customRenderMat;
        this.submittedTriangles = SJ, MJ && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(JJ, cJ, MJ)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(vJ) : vJ && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && xJ > 0 && this.geometry.lightFullSky(this.unlit, xJ);
        for (const bJ of this.opaqueBatches) this.chunkSorter.sort(bJ.meshes, 1) || bJ.meshes.sort(aA);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(BA)
      }
      sweepVisibility(JJ, cJ, ZJ) {
        const {
          zh: FJ
        } = JJ.ih, UJ = FJ.hJJ, eJ = this.visPassable, XJ = this.eye[0] + this.originOffset[0], AJ = this.eye[1] + this.originOffset[1], qJ = this.eye[2] + this.originOffset[2];
        if (!ZJ.eyeClear(XJ, AJ, qJ, cJ.near, cJ.projectionMatrix, FJ)) return null;
        const [jJ, YJ] = FJ.eFJ, hJ = ZJ.update(XJ, AJ, qJ, UJ, jJ, YJ, eJ);
        return this.visSweeps = ZJ.sweeps, hJ ? ZJ : null
      }
      visSeeThrough(JJ, cJ) {
        const {
          material: ZJ
        } = JJ;
        return (!ZJ || !this.isBlended(ZJ)) && (JJ.mesh.visibility < 1 || !(null !== ZJ && void 0 !== ZJ && ZJ.bindGroup) || JJ.faceCount > 0 && (!this.geometry.backed(JJ) || this.lighting && !JJ.vertices.page.twin) || !this.batchDraws(ZJ, JJ.packed, cJ))
      }
      batchDraws(JJ, cJ, ZJ) {
        var FJ;
        const UJ = cJ ? 2 : 0;
        if (JJ === this.visDrawsMaterial && function(JJ, cJ) {
            return 0 !== (JJ & 1 << cJ)
          }(this.visDrawsBits, UJ)) return 0 !== (this.visDrawsBits & 2 << UJ);
        let eJ = null !== (FJ = this.visBatchDraws.get(JJ)) && void 0 !== FJ ? FJ : 0;
        if (!(eJ & 1 << UJ)) {
          eJ |= 1 << UJ | (!!JJ.bindGroupLayout && this.canDraw(JJ, cJ) && !!this.pipelines.get(this.pipelineId(JJ, this.programKey(JJ, cJ), ZJ)) ? 2 << UJ : 0), this.visBatchDraws.set(JJ, eJ)
        }
        return this.visDrawsMaterial = JJ, this.visDrawsBits = eJ, 0 !== (eJ & 2 << UJ)
      }
      runVisCheck(JJ, cJ, ZJ) {
        const {
          ih: FJ
        } = JJ, {
          zh: UJ
        } = FJ, eJ = UJ.hJJ, XJ = new Set;
        for (const sJ of this.chunks.values()) XJ.add(sJ.key);
        const AJ = mU.Matrix.FromArray(cJ.viewProjectionMatrix).invert(),
          [qJ, jJ, YJ] = this.originOffset,
          hJ = new mU.Pn,
          DJ = function(JJ, cJ, ZJ, FJ) {
            const UJ = new Set;
            for (let eJ = 0; eJ < 27; eJ++)
              for (let XJ = 0; XJ < 48; XJ++) {
                const AJ = ZJ((XJ + .5) / 48 * 2 - 1, (eJ + .5) / 27 * 2 - 1);
                zA(JJ, cJ, [AJ[0] - cJ[0], AJ[1] - cJ[1], AJ[2] - cJ[2]], FJ, UJ)
              }
            return UJ
          }({
            aN: (JJ, cJ, ZJ) => UJ.aN(JJ, cJ, ZJ),
            occluders: ZJ.occluders,
            opaque: ZJ.opaque,
            Kn: eJ,
            isDrawn: (JJ, cJ, FJ) => ZJ.isDrawn(JJ, cJ, FJ),
            hasParts: (JJ, cJ, ZJ) => XJ.has((0, dA.h)(JJ, cJ, ZJ))
          }, [this.eye[0] + qJ, this.eye[1] + jJ, this.eye[2] + YJ], ((JJ, cJ) => (mU.Pn.TransformCoordinatesFromFloatsToRef(JJ, cJ, .5, AJ, hJ), [hJ.x + qJ, hJ.y + jJ, hJ.z + YJ])), (UJ.eFJ[0] + 1) * eJ);
        this.visViolations = DJ.size;
        for (const sJ of DJ) this.warnOnce(`vis:${sJ}`, `Lite terrain cave culling skipped chunk ${sJ}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var JJ;
        null !== (JJ = this.Jn) && void 0 !== JJ && JJ.isRunning() && (this.shaderPackInputs ??= new Te(this.device, this.Jn.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Jn, this.eye, this.lighting))
      }
      bindShaderPackInputs(JJ, cJ, ZJ) {
        var FJ, UJ, eJ, XJ;
        let AJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: qJ
        } = this.shaderPackFields(cJ, ZJ);
        if (void 0 === qJ) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Te(this.device, ZJ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(ZJ, this.eye, this.lighting));
        const jJ = UF(qJ) ? null !== (FJ = null === (UJ = this.sceneDepth) || void 0 === UJ ? void 0 : UJ.view) && void 0 !== FJ ? FJ : this.standIn() : null,
          YJ = AJ ? null !== (eJ = null === (XJ = this.shadowMask) || void 0 === XJ ? void 0 : XJ.view) && void 0 !== eJ ? eJ : this.standIn() : null;
        this.shaderPackInputs.bind(JJ, jJ, Ne(qJ, !!this.sunShadow), YJ)
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
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.shaderPackInputs) || void 0 === cJ ? void 0 : cJ.bindGroupFor(null, !0)) && void 0 !== JJ ? JJ : null
      }
      resetBatches(JJ) {
        const cJ = this.opaqueBatches;
        let ZJ = 0;
        for (const FJ of cJ) FJ.meshes.length > 0 && (FJ.meshes.length = 0, FJ.faceCull = this.batchFaceCull(FJ.material, JJ), cJ[ZJ++] = FJ);
        cJ.length = ZJ
      }
      orderBatches() {
        const JJ = this.opaqueBatches;
        for (let cJ = 0; cJ < JJ.length; cJ++) {
          const ZJ = JJ[cJ];
          ZJ.group = cJ;
          for (let FJ = 0; FJ < cJ; FJ++) {
            const cJ = JJ[FJ];
            if (cJ.material === ZJ.material && cJ.packed === ZJ.packed) {
              ZJ.group = cJ.group;
              break
            }
          }
          ZJ.nearest = ZJ.meshes.length > 0 ? ZJ.meshes[0].distance : 1 / 0
        }
        JJ.sort(NA)
      }
      batchFor(JJ, cJ, ZJ, FJ, UJ) {
        for (const XJ of this.opaqueBatches)
          if (XJ.material === JJ && XJ.packed === cJ && XJ.page === ZJ && XJ.resting === FJ) return XJ;
        const eJ = {
          material: JJ,
          packed: cJ,
          page: ZJ,
          resting: FJ,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(JJ, UJ)
        };
        return this.opaqueBatches.push(eJ), eJ
      }
      batchFaceCull(JJ, cJ) {
        return !(!cJ || !(0, PA.u)(JJ.model)) && (!this.Jn || ! function(JJ) {
          var cJ;
          return !(null === (cJ = (0, Ic.d)(JJ)) || void 0 === cJ || !cJ.movesVertices)
        }(this.shaderPackFields(JJ, this.Jn).packVariant))
      }
      writeFrameUniforms(JJ, cJ) {
        const ZJ = this.frameUniforms,
          FJ = YF;
        if ((0, hA.C)(JJ, ZJ), ZJ[FJ.fogInfos] = cJ.fogEnabled ? cJ.fogMode : 0, ZJ[FJ.fogInfos + 1] = cJ.fogStart, ZJ[FJ.fogInfos + 2] = cJ.fogEnd, ZJ[FJ.fogInfos + 3] = cJ.fogDensity, ZJ.set(cJ.fogColour, FJ.fogColour), ZJ[FJ.outputHeight] = cJ.renderHeight, ZJ.set(cJ.ambientColour, FJ.sceneAmbient), (0, hA.x)(cJ, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const cJ = (0, DA.g)(JJ.qG, JJ.Mn, JJ.bn);
          for (let JJ = 0; JJ < 4; JJ++) ZJ[FJ.aoLevels + JJ] = cJ[JJ] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, ZJ)
      }
      animateMaterials(JJ) {
        const cJ = DF.anim;
        for (const ZJ of this.materials.values()) ZJ.animated && (ZJ.uniformData[cJ] = JJ, this.device.queue.writeBuffer(ZJ.uniformBuffer, 4 * cJ, ZJ.uniformData, cJ, 1))
      }
      canDraw(JJ, cJ) {
        return !("atlas" === JJ.texture && !cJ) || (this.warnOnce(`stride:${JJ.id}`, `Lite terrain: material "${JJ.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(JJ, cJ) {
        let ZJ = 0;
        JJ.setBindGroup(1, this.frameBindGroup);
        for (const FJ of this.opaqueBatches) {
          if (!FJ.meshes.length || !this.canDraw(FJ.material, FJ.packed)) continue;
          const UJ = this.pipelineFor(FJ.material, FJ.packed, cJ, FJ.resting);
          UJ && (JJ.setPipeline(UJ), JJ.setBindGroup(2, FJ.material.bindGroup), this.Jn && this.bindShaderPackInputs(JJ, FJ.material, this.Jn, this.prepassOf.has(UJ)), ZJ += this.drawBatch(JJ, FJ))
        }
        return ZJ
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(JJ, cJ, ZJ) {
        const FJ = this.target,
          UJ = this.Jn;
        if (!FJ || !UJ || 0 === this.maskPipelines) return 0;
        let eJ = 0,
          XJ = null;
        this.geometry.setDrawing(!0);
        try {
          for (const AJ of this.opaqueBatches) {
            if (!AJ.meshes.length || !this.canDraw(AJ.material, AJ.packed)) continue;
            const qJ = this.pipelineFor(AJ.material, AJ.packed, FJ, AJ.resting),
              jJ = qJ && this.prepassOf.get(qJ);
            jJ && (XJ || (XJ = JJ.beginRenderPass(cJ), XJ.setBindGroup(0, ZJ), XJ.setBindGroup(1, this.frameBindGroup)), XJ.setPipeline(jJ), XJ.setBindGroup(2, AJ.material.bindGroup), this.bindShaderPackInputs(XJ, AJ.material, UJ, !0), eJ += this.drawBatch(XJ, AJ))
          }
        } finally {
          var AJ;
          null === (AJ = XJ) || void 0 === AJ || AJ.end(), this.geometry.setDrawing(!1)
        }
        return eJ
      }
      drawBatch(JJ, cJ) {
        let ZJ = 0;
        for (const FJ of cJ.meshes) {
          const {
            rangeCount: cJ
          } = FJ;
          cJ > 0 && (ZJ += this.geometry.draw(JJ, FJ, this.lighting, FJ.first0, FJ.count0), cJ > 1 && (ZJ += this.geometry.draw(JJ, FJ, this.lighting, FJ.first1, FJ.count1)))
        }
        return ZJ
      }
      drawTransparent(JJ, cJ) {
        let ZJ = 0,
          FJ = null,
          UJ = null;
        JJ.setBindGroup(1, this.frameBindGroup);
        for (const eJ of this.transparent) {
          const XJ = eJ.material;
          if (!this.canDraw(XJ, eJ.packed)) continue;
          const AJ = this.pipelineFor(XJ, eJ.packed, cJ);
          AJ && (AJ !== FJ && (JJ.setPipeline(AJ), FJ = AJ, this.Jn && this.bindShaderPackInputs(JJ, XJ, this.Jn)), XJ !== UJ && (JJ.setBindGroup(2, XJ.bindGroup), UJ = XJ), ZJ += this.geometry.draw(JJ, eJ, this.lighting))
        }
        return ZJ
      }
    }

    function LA(JJ, cJ, ZJ, FJ) {
      return `${bF(JJ)}|${JJ.atlasLayers}|${JJ.Gl}|${cJ}|${ZJ}|${FJ._colorFormat}|${FJ._depthStencilFormat}|${FJ._sampleCount}`
    }

    function aA(JJ, cJ) {
      return JJ.distance - cJ.distance
    }

    function BA(JJ, cJ) {
      return cJ.distance - JJ.distance
    }
    class tA {
      constructor() {
        this.left = []
      }
      sort(JJ, cJ) {
        for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
          const cJ = JJ[ZJ].distance;
          if (cJ - cJ !== 0) return !1
        }
        return this.sortRange(JJ, 0, JJ.length, cJ), !0
      }
      sortRange(JJ, cJ, ZJ, FJ) {
        if (ZJ - cJ <= 16) {
          for (let UJ = cJ + 1; UJ < ZJ; UJ++) {
            const ZJ = JJ[UJ],
              eJ = FJ * ZJ.distance;
            let XJ = UJ - 1;
            for (; XJ >= cJ && FJ * JJ[XJ].distance > eJ; XJ--) JJ[XJ + 1] = JJ[XJ];
            JJ[XJ + 1] = ZJ
          }
          return
        }
        const UJ = cJ + ZJ >>> 1;
        if (this.sortRange(JJ, cJ, UJ, FJ), this.sortRange(JJ, UJ, ZJ, FJ), FJ * JJ[UJ - 1].distance <= FJ * JJ[UJ].distance) return;
        const {
          left: eJ
        } = this, XJ = UJ - cJ;
        for (let YJ = 0; YJ < XJ; YJ++) eJ[YJ] = JJ[cJ + YJ];
        let AJ = 0,
          qJ = UJ,
          jJ = cJ;
        for (; AJ < XJ && qJ < ZJ;) JJ[jJ++] = FJ * JJ[qJ].distance < FJ * eJ[AJ].distance ? JJ[qJ++] : eJ[AJ++];
        for (; AJ < XJ;) JJ[jJ++] = eJ[AJ++]
      }
    }
    const oA = Math.ceil(102);

    function lA(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cJ;
      const eJ = Math.min(cJ, ZJ),
        XJ = new Uint32Array(JZ(FJ));
      for (let AJ = 0; AJ < FJ; AJ++) {
        const cJ = Math.floor(AJ * eJ / FJ),
          ZJ = Math.max(cJ + 1, Math.floor((AJ + 1) * eJ / FJ));
        for (let qJ = 0; qJ < FJ; qJ++) {
          const jJ = Math.floor(qJ * eJ / FJ),
            YJ = Math.max(jJ + 1, Math.floor((qJ + 1) * eJ / FJ));
          let hJ = 0;
          for (let FJ = cJ; FJ < ZJ; FJ++)
            for (let cJ = jJ; cJ < YJ; cJ++) JJ[FJ * UJ + cJ] >= oA && hJ++;
          if (2 * hJ >= (ZJ - cJ) * (YJ - jJ)) {
            const JJ = qJ + FJ * AJ;
            XJ[JJ >>> 5] |= 1 << (31 & JJ)
          }
        }
      }
      return XJ
    }

    function Jq(JJ) {
      return Math.max(1, Math.min(16, JJ))
    }
    class cq {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = JJ, this.loadTexture = cJ, this.warn = ZJ, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(JJ, cJ) {
        return (JJ.nH !== this.builtVersion || this.blockCaster.length !== cJ) && (this.build(JJ, cJ), !0)
      }
      build(JJ, cJ) {
        this.builtVersion = JJ.nH;
        const ZJ = new Uint16Array(cJ),
          FJ = new Map;
        for (let UJ = 1; UJ < cJ; UJ++) {
          const cJ = this.classify(JJ, UJ, FJ);
          if (null === cJ || cJ === ac) {
            ZJ[UJ] = null === cJ ? 0 : ac;
            continue
          }
          let eJ = this.byKey.get(cJ.key);
          void 0 === eJ && (eJ = this.allocate(cJ), this.byKey.set(cJ.key, eJ)), ZJ[UJ] = eJ
        }
        this.blockCaster = ZJ, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(JJ, cJ) {
        const ZJ = JJ.v_[cJ];
        if ("function" !== typeof ZJ) return ZJ;
        try {
          return ZJ()
        } catch (FJ) {
          return this.warnOnce(`Sun shadows: no caster option for block ${cJ}: ${FJ instanceof Error?FJ.message:String(FJ)}`), null
        }
      }
      classify(JJ, cJ, ZJ) {
        const FJ = this.option(JJ, cJ);
        if ("none" === FJ) return null;
        if (FJ && FJ.planes.length > 0) {
          const JJ = FJ.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(JJ)}`,
            planes: JJ
          }
        }
        if (JJ.RD[cJ]) return null;
        const UJ = JJ.aD[cJ] ? JJ.mH(cJ) : null;
        if (UJ && UJ.length >= 6) {
          const JJ = function(JJ) {
            const cJ = new Uint32Array(16);
            for (let ZJ = 0; ZJ + 6 <= JJ.length; ZJ += 6) {
              const FJ = [0, 1, 2].map((cJ => Math.max(0, Math.ceil(8 * JJ[ZJ + cJ] - .5)))),
                UJ = [0, 1, 2].map((cJ => Math.min(7, Math.floor(8 * JJ[ZJ + cJ + 3] - .5))));
              for (let JJ = FJ[2]; JJ <= UJ[2]; JJ++)
                for (let ZJ = FJ[1]; ZJ <= UJ[1]; ZJ++)
                  for (let eJ = FJ[0]; eJ <= UJ[0]; eJ++) {
                    const FJ = eJ + 8 * (ZJ + 8 * JJ);
                    cJ[FJ >>> 5] |= 1 << (31 & FJ)
                  }
            }
            return cJ
          }(UJ);
          return function(JJ) {
            return JJ.every((JJ => 4294967295 === JJ))
          }(JJ) ? ac : JJ.every((JJ => 0 === JJ)) ? null : {
            kind: "shape",
            key: `shape:${JJ.join(",")}`,
            mask: JJ
          }
        }
        if (JJ.Fk[cJ] || !JJ.jG[cJ]) return null;
        const eJ = [0, 1, 2, 3, 4, 5].map((FJ => {
          const UJ = JJ.YG[6 * cJ + FJ];
          let eJ = ZJ.get(UJ);
          return void 0 === eJ && (eJ = function(JJ) {
            if (!JJ || JJ.vG) return null;
            const {
              Al: cJ,
              Gl: ZJ,
              Ul: FJ
            } = JJ;
            if (!cJ || !ZJ || !(ZJ > 0) || void 0 === FJ || !(FJ >= 0)) return null;
            const UJ = cJ[0],
              eJ = ZJ * ZJ * 4;
            if (!UJ || UJ.byteLength < eJ) return null;
            const XJ = Math.floor(UJ.byteLength / eJ),
              AJ = cJ[Math.floor(FJ / XJ)];
            if (!AJ) return null;
            const qJ = new Uint8Array(AJ.buffer, AJ.byteOffset, AJ.byteLength),
              jJ = FJ % XJ * eJ;
            if (jJ + eJ > qJ.length) return null;
            const YJ = new Uint8Array(ZJ * ZJ);
            let hJ = !1;
            for (let DJ = 0; DJ < YJ.length; DJ++) YJ[DJ] = qJ[jJ + 4 * DJ + 3], hJ ||= YJ[DJ] < oA;
            return hJ ? {
              alpha: YJ,
              width: ZJ
            } : null
          }(JJ.rG(UJ)), ZJ.set(UJ, eJ)), eJ
        }));
        if (eJ.every((JJ => null === JJ))) return ac;
        const XJ = Jq(Math.max(...eJ.map((JJ => {
            var cJ;
            return null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.width) && void 0 !== cJ ? cJ : 1
          })))),
          AJ = new Uint32Array(JZ(XJ)).fill(4294967295),
          qJ = eJ.map((JJ => null === JJ ? AJ : lA(JJ.alpha, JJ.width, JJ.width, XJ)));
        return {
          kind: "cutout",
          key: `cutout:${XJ}:${qJ.map((JJ=>JJ.join(","))).join("|")}`,
          size: XJ,
          faces: qJ
        }
      }
      allocate(JJ) {
        if (this.nextCaster >= cZ) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const cJ = this.nextCaster++;
        if (this.writeCaster(cJ, Bc, 0, 0, 0), "shape" === JJ.kind) {
          const ZJ = this.allocateMask(JJ.mask.length);
          ZJ >= 0 && (this.sink(ZJ, JJ.mask), this.writeCaster(cJ, tc, ZJ, 0, 8))
        } else if ("cutout" === JJ.kind) {
          const ZJ = JZ(JJ.size),
            FJ = this.allocateMask(6 * ZJ);
          if (FJ >= 0) {
            const UJ = new Uint32Array(6 * ZJ);
            JJ.faces.forEach(((JJ, cJ) => {
              UJ.set(JJ, cJ * ZJ)
            })), this.sink(FJ, UJ), this.writeCaster(cJ, lc, FJ, 0, JJ.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(cJ, JJ.planes).finally((() => {
          this.planesLoading--
        })));
        return cJ
      }
      async loadPlanes(JJ, cJ) {
        const ZJ = await Promise.all(cJ.map((JJ => this.texture(JJ.texture))));
        if (ZJ.some((JJ => null === JJ))) return;
        const FJ = ZJ,
          UJ = Jq(Math.max(...FJ.map((JJ => Math.min(JJ.width, JJ.height))))),
          eJ = JZ(UJ),
          XJ = this.allocateMask(cJ.length * (4 + eJ));
        if (XJ < 0) return;
        const AJ = new Uint32Array(cJ.length * (4 + eJ)),
          qJ = 4 * cJ.length;
        cJ.forEach(((JJ, cJ) => {
          const ZJ = XJ + qJ + cJ * eJ;
          AJ.set(function(JJ, cJ) {
            const [ZJ, FJ] = JJ.tangent, UJ = Math.hypot(ZJ, FJ) || 1, eJ = ZJ / UJ, XJ = FJ / UJ, AJ = JJ.centre[0] * XJ - JJ.centre[1] * eJ, qJ = new Uint32Array(4);
            return new Float32Array(qJ.buffer, 0, 3).set([eJ, XJ, AJ]), qJ[3] = cJ, qJ
          }(JJ, ZJ), 4 * cJ), AJ.set(lA(FJ[cJ].alpha, FJ[cJ].width, FJ[cJ].height, UJ), qJ + cJ * eJ)
        })), this.sink(XJ, AJ), this.writeCaster(JJ, oc, XJ, cJ.length, UJ)
      }
      texture(JJ) {
        let cJ = this.textures.get(JJ);
        return cJ || (cJ = this.loadTexture(JJ).catch((cJ => (this.warn(`Sun shadows: no mask for ${JJ}: ${cJ instanceof Error?cJ.message:String(cJ)}`), null))), this.textures.set(JJ, cJ)), cJ
      }
      allocateMask(JJ) {
        if (this.nextMaskWord + JJ > ZZ) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const cJ = 32768 + this.nextMaskWord;
        return this.nextMaskWord += JJ, cJ
      }
      writeCaster(JJ, cJ, ZJ, FJ, UJ) {
        this.sink(0 + 4 * JJ, Uint32Array.of(cJ, ZJ, FJ, UJ))
      }
      warnOnce(JJ) {
        this.warned.has(JJ) || (this.warned.add(JJ), this.warn(JJ))
      }
    }
    var Zq = ZJ(36687);

    function Fq(JJ) {
      return !JJ.QG && !JJ.LFJ && !JJ.tn
    }

    function Uq() {
      return {
        bricks: new Uint32Array(Nc),
        cells: new Uint16Array(32768),
        special: new Uint8Array(dc)
      }
    }
    class eq {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = JJ, this.writeVoxels = cJ, this.writePool = ZJ, this.warn = FJ, this.eyeChunk = null, this.slotChunk = new Array(Wc).fill(null), this.slotVersion = new Float64Array(Wc).fill(-1), this.slotPool = new Array(Wc).fill(null), this.starved = new Uint8Array(Wc), this.queue = [], this.queued = new Uint8Array(Wc), this.queueSorted = !0, this.freePool = new Uint32Array(FZ), this.freeCount = FZ, this.casterTable = null, this.warnedPool = !1, this.scratch = Uq(), this.victimScratch = Uq(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Wc), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let UJ = 0; UJ < FZ; UJ++) this.freePool[UJ] = 65535 - UJ
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return FZ - this.freeCount
      }
      chunkAdded(JJ) {
        if (null === this.eyeChunk || !this.inRadius(JJ.i, JJ.j, JJ.k)) return;
        const cJ = ic(JJ.i, JJ.j, JJ.k);
        this.slotChunk[cJ] = JJ, this.slotVersion[cJ] = -1, this.enqueue(cJ)
      }
      update(JJ, cJ, ZJ) {
        const FJ = this.casters.blockCaster;
        if (FJ !== this.casterTable) {
          this.casterTable = FJ;
          for (let JJ = 0; JJ < Wc; JJ++) this.slotVersion[JJ] = -1, this.slotChunk[JJ] && this.enqueue(JJ)
        }
        const UJ = Math.floor(JJ[0] / 32),
          eJ = Math.floor(JJ[1] / 32),
          XJ = Math.floor(JJ[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== UJ || this.eyeChunk[1] !== eJ || this.eyeChunk[2] !== XJ) && (this.eyeChunk = [UJ, eJ, XJ], this.follow(cJ), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let AJ = 0; AJ < Wc; AJ++) {
          const JJ = this.slotChunk[AJ];
          JJ && (JJ.YZJ || JJ.ZG !== this.slotVersion[AJ]) && this.enqueue(AJ)
        }
        this.drain(ZJ), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(JJ, cJ) {
        this.records.set(cJ, 4 * JJ), this.windowTopStale = !0, this.writeVoxels(4 * JJ, cJ)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const JJ = this.records;
        let cJ = -1 / 0;
        for (let FJ = 0; FJ < JJ.length; FJ += 4) {
          const ZJ = 255 & JJ[FJ + 3];
          ZJ !== Pc && ZJ !== kc || !this.inRadius(JJ[FJ], JJ[FJ + 1], JJ[FJ + 2]) || (cJ = Math.max(cJ, JJ[FJ + 1] * Mc + (JJ[FJ + 3] >>> 8)))
        }
        const ZJ = cJ === -1 / 0 ? 1 : cJ + Tc;
        ZJ !== this.windowTop[0] && (this.windowTop[0] = ZJ, this.writeVoxels(Oc, this.windowTop))
      }
      follow(JJ) {
        const cJ = this.eyeChunk,
          [ZJ, FJ, UJ] = bc;
        for (let XJ = -UJ; XJ <= UJ; XJ++)
          for (let UJ = -FJ; UJ <= FJ; UJ++)
            for (let FJ = -ZJ; FJ <= ZJ; FJ++) {
              var eJ;
              const ZJ = cJ[0] + FJ,
                AJ = cJ[1] + UJ,
                qJ = cJ[2] + XJ,
                jJ = ic(ZJ, AJ, qJ),
                YJ = this.slotChunk[jJ];
              if (YJ && !YJ.YZJ && YJ.i === ZJ && YJ.j === AJ && YJ.k === qJ) continue;
              const hJ = null !== (eJ = JJ(ZJ, AJ, qJ)) && void 0 !== eJ ? eJ : null;
              YJ && (YJ.i !== ZJ || YJ.j !== AJ || YJ.k !== qJ) && this.slotPool[jJ] && (this.release(jJ), this.record.fill(0), this.writeRecord(jJ, this.record)), this.slotChunk[jJ] = hJ, this.slotVersion[jJ] = -1, (hJ || YJ) && this.enqueue(jJ)
            }
      }
      requeueStarved() {
        for (let JJ = 0; JJ < Wc; JJ++) this.starved[JJ] && this.slotChunk[JJ] && this.enqueue(JJ)
      }
      enqueue(JJ) {
        this.queued[JJ] || (this.queued[JJ] = 1, this.queue.push(JJ), this.queueSorted = !1)
      }
      drain(JJ) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const JJ = new Map;
          for (const cJ of this.queue) JJ.set(cJ, this.slotDistance(cJ));
          this.queue.sort(((cJ, ZJ) => JJ.get(ZJ) - JJ.get(cJ))), this.queueSorted = !0
        }
        const cJ = performance.now();
        let ZJ = 0;
        const FJ = [];
        for (; this.queue.length > 0 && (0 === ZJ || performance.now() - cJ < JJ);) {
          const JJ = this.queue.pop(),
            cJ = this.slotChunk[JJ];
          !cJ || cJ.YZJ || Fq(cJ) ? (this.queued[JJ] = 0, this.encodeSlot(JJ), ZJ++) : FJ.push(JJ)
        }
        for (let UJ = FJ.length - 1; UJ >= 0; UJ--) this.queue.push(FJ[UJ])
      }
      slotDistance(JJ) {
        const cJ = this.slotChunk[JJ],
          ZJ = this.eyeChunk;
        return cJ ? Math.max(Math.abs(cJ.i - ZJ[0]), Math.abs(cJ.j - ZJ[1]), Math.abs(cJ.k - ZJ[2])) : 0
      }
      inRadius(JJ, cJ, ZJ) {
        const FJ = this.eyeChunk,
          [UJ, eJ, XJ] = bc;
        return Math.abs(JJ - FJ[0]) <= UJ && Math.abs(cJ - FJ[1]) <= eJ && Math.abs(ZJ - FJ[2]) <= XJ
      }
      release(JJ) {
        const cJ = this.slotPool[JJ];
        if (cJ) {
          for (let JJ = cJ.length - 1; JJ >= 0; JJ--) this.freePool[this.freeCount++] = cJ[JJ];
          this.slotPool[JJ] = null
        }
      }
      encodeSlot(JJ) {
        var cJ, ZJ, FJ, UJ, eJ;
        let XJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          AJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const qJ = null !== (cJ = null === (ZJ = this.slotPool[JJ]) || void 0 === ZJ ? void 0 : ZJ.length) && void 0 !== cJ ? cJ : 0;
        this.release(JJ), this.starved[JJ] = 0;
        const jJ = this.slotChunk[JJ],
          YJ = this.record;
        if (!jJ || jJ.YZJ || !jJ.GD) return this.slotChunk[JJ] = null, this.slotVersion[JJ] = -1, YJ.fill(0), this.writeRecord(JJ, YJ), void(qJ > 0 && this.requeueStarved());
        this.slotVersion[JJ] = jJ.ZG;
        const hJ = this.encodeBricks(jJ, JJ, XJ, AJ);
        YJ[0] = jJ.i, YJ[1] = jJ.j, YJ[2] = jJ.k, YJ[3] = hJ, this.writeRecord(JJ, YJ), null === (FJ = this.encoded) || void 0 === FJ || FJ.call(this, jJ), AJ && (null !== (UJ = null === (eJ = this.slotPool[JJ]) || void 0 === eJ ? void 0 : eJ.length) && void 0 !== UJ ? UJ : 0) < qJ && this.requeueStarved()
      }
      encodeBricks(JJ, cJ, ZJ, FJ) {
        if (JJ.sn) return Hc;
        const UJ = this.casters.blockCaster,
          {
            data: eJ,
            stride: XJ,
            offset: AJ
          } = JJ.GD,
          [qJ, jJ, YJ] = XJ,
          hJ = Mc,
          {
            bricks: DJ,
            cells: sJ,
            special: nJ
          } = ZJ;
        DJ.fill(0), nJ.fill(0);
        let GJ = 0,
          fJ = 0,
          xJ = 0;
        for (let rJ = 0; rJ < hJ; rJ++) {
          const cJ = rJ >> 2,
            ZJ = 3 & rJ,
            FJ = JJ.Qs[rJ],
            XJ = FJ === Zq.f ? -1 : FJ < UJ.length ? UJ[FJ] : 0;
          if (0 !== XJ)
            for (let JJ = 0; JJ < hJ; JJ++) {
              const FJ = JJ >> 2,
                vJ = 3 & JJ;
              let mJ = AJ + JJ * qJ + rJ * jJ;
              for (let JJ = 0; JJ < hJ; JJ++, mJ += YJ) {
                let AJ = XJ;
                if (AJ < 0) {
                  const JJ = eJ[mJ];
                  if (AJ = JJ < UJ.length ? UJ[JJ] : 0, 0 === AJ) continue
                }
                const qJ = Rc(FJ, cJ, JJ >> 2),
                  jJ = Lc(vJ, ZJ, 3 & JJ);
                DJ[3 * qJ + (jJ >>> 5)] |= 1 << (31 & jJ), sJ[qJ * pc + jJ] = AJ, GJ++, xJ = rJ, AJ === ac ? fJ++ : nJ[qJ] = 1
              }
            }
        }
        return 0 === GJ ? Hc : 32768 === fJ ? Pc | xJ << 8 : (this.writePoolEntries(cJ, ZJ, FJ), this.writeVoxels(zc + cJ * Nc, DJ), kc | xJ << 8)
      }
      writePoolEntries(JJ, cJ, ZJ) {
        const {
          bricks: FJ,
          cells: UJ,
          special: eJ
        } = cJ, XJ = this.entry;
        let AJ = 0;
        for (let YJ = 0; YJ < dc; YJ++) AJ += eJ[YJ];
        if (0 === AJ) return;
        ZJ && this.freeCount < AJ && this.evictBeyond(JJ, AJ);
        const qJ = new Uint32Array(ZJ ? Math.min(AJ, this.freeCount) : 0);
        let jJ = 0;
        for (let YJ = 0; YJ < dc; YJ++) {
          if (!eJ[YJ]) continue;
          const ZJ = 3 * YJ;
          if (jJ === qJ.length) {
            this.dropSpecials(cJ, YJ), this.starved[JJ] = 1;
            continue
          }
          const AJ = this.freePool[--this.freeCount];
          qJ[jJ++] = AJ;
          for (let JJ = 0; JJ < pc; JJ++) {
            const cJ = FJ[ZJ + (JJ >>> 5)] >>> (31 & JJ) & 1 ? UJ[YJ * pc + JJ] : 0;
            1 & JJ ? XJ[JJ >> 1] |= cJ << 16 : XJ[JJ >> 1] = cJ
          }
          FJ[ZJ + 2] = AJ + 1, this.writePool(UZ + 32 * AJ, XJ)
        }
        qJ.length > 0 && (this.slotPool[JJ] = qJ)
      }
      evictBeyond(JJ, cJ) {
        const ZJ = this.slotDistance(JJ),
          FJ = [];
        for (let UJ = 0; UJ < Wc; UJ++) UJ !== JJ && this.slotPool[UJ] && this.slotDistance(UJ) > ZJ && FJ.push(UJ);
        FJ.sort(((JJ, cJ) => this.slotDistance(cJ) - this.slotDistance(JJ)));
        for (const UJ of FJ) {
          if (this.freeCount >= cJ) return;
          const JJ = this.slotChunk[UJ];
          JJ && !JJ.YZJ && JJ.GD && (JJ.ZG === this.slotVersion[UJ] || Fq(JJ)) && this.encodeSlot(UJ, this.victimScratch, !1)
        }
      }
      dropSpecials(JJ, cJ) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const ZJ = 3 * cJ;
        for (let FJ = 0; FJ < pc; FJ++) JJ.cells[cJ * pc + FJ] !== ac && (JJ.bricks[ZJ + (FJ >>> 5)] &= ~(1 << (31 & FJ)))
      }
    }
    var Xq = ZJ(36378);
    class Aq {
      constructor(JJ) {
        this.device = JJ, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new GZ, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.zh = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = JJ.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = JJ.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(JJ, cJ, ZJ) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: FJ
        } = this;
        FJ.Fs(JJ, cJ), ZJ.forEachSunShadowCaster((JJ => {
          this.add(JJ)
        })), FJ.finish();
        const UJ = 0 === FJ.parts;
        if (UJ && this.uploadedEmpty) return;
        this.uploadedEmpty = UJ;
        const {
          queue: eJ
        } = this.device, {
          words: XJ
        } = FJ;
        eJ.writeBuffer(this.frameBuffer, 0, XJ, 0, 16385), FJ.refs > 0 && eJ.writeBuffer(this.frameBuffer, 65540, XJ, qZ, FJ.refs), UJ || eJ.writeBuffer(this.frameBuffer, 327684, XJ, jZ, FJ.parts * AZ)
      }
      add(JJ) {
        const cJ = this.gridFor(JJ);
        if (!cJ) return;
        const {
          frame: ZJ
        } = this, {
          zh: FJ,
          worldAt: UJ,
          instances: eJ,
          instanceCount: XJ,
          thin: AJ
        } = JJ;
        if (eJ)
          for (let qJ = 0; qJ < XJ; qJ++) AJ ? (xZ(eJ, 16 * qJ, FJ, UJ, this.zh), ZJ.add(cJ, this.zh)) : ZJ.add(cJ, eJ, 16 * qJ);
        else ZJ.add(cJ, FJ, UJ)
      }
      gridFor(JJ) {
        let {
          geometry: cJ,
          indexed: ZJ,
          first: FJ,
          count: UJ,
          skip: eJ
        } = JJ, XJ = this.grids.get(cJ);
        XJ || (XJ = new Map, this.grids.set(cJ, XJ));
        const AJ = `${ZJ?FJ:-1-FJ}:${UJ}:${null!==eJ&&void 0!==eJ?eJ:""}`;
        let qJ = XJ.get(AJ);
        if (void 0 !== qJ || this.gridsFull) return qJ;
        const jJ = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = jJ + 2;
        else if (jJ > this.bakeDeadline) return;
        return qJ = this.bake(cJ, ZJ, FJ, UJ, eJ), void 0 !== qJ && XJ.set(AJ, qJ), qJ
      }
      bake(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = JJ.vertexAttributes.find((JJ => "position" === JJ.kind)),
          XJ = eJ ? function(JJ, cJ, ZJ, FJ) {
            let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const eJ = JJ => cJ ? cJ[ZJ + JJ] : ZJ + JJ,
              XJ = JJ => null !== UJ && [0, 1, 2].some((cJ => {
                const ZJ = eJ(JJ + cJ);
                return ZJ >= UJ[0] && ZJ < UJ[1]
              })),
              AJ = [1 / 0, 1 / 0, 1 / 0],
              qJ = [-1 / 0, -1 / 0, -1 / 0];
            for (let rJ = 0; rJ + 2 < FJ; rJ += 3)
              if (!XJ(rJ))
                for (let cJ = 0; cJ < 3; cJ++) {
                  const ZJ = eJ(rJ + cJ);
                  for (let cJ = 0; cJ < 3; cJ++) AJ[cJ] = Math.min(AJ[cJ], JJ[3 * ZJ + cJ]), qJ[cJ] = Math.max(qJ[cJ], JJ[3 * ZJ + cJ])
                }
            const jJ = Math.max(qJ[0] - AJ[0], qJ[1] - AJ[1], qJ[2] - AJ[2]);
            if (!(jJ > 0)) return null;
            const YJ = jJ / 64,
              hJ = [0, 0, 0],
              DJ = [0, 0, 0],
              sJ = [0, 0, 0];
            for (let rJ = 0; rJ < 3; rJ++) hJ[rJ] = Math.min(65, Math.ceil((qJ[rJ] - AJ[rJ]) / YJ) + 1), DJ[rJ] = AJ[rJ] - YJ / 2, sJ[rJ] = DJ[rJ] + hJ[rJ] * YJ;
            const nJ = new Uint32Array(Math.ceil(hJ[0] * hJ[1] * hJ[2] / 32)),
              GJ = new Float64Array(9),
              fJ = [0, 0, 0],
              xJ = [0, 0, 0];
            for (let rJ = 0; rJ + 2 < FJ; rJ += 3)
              if (!XJ(rJ)) {
                for (let cJ = 0; cJ < 3; cJ++) {
                  const ZJ = eJ(rJ + cJ);
                  for (let FJ = 0; FJ < 3; FJ++) GJ[3 * cJ + FJ] = JJ[3 * ZJ + FJ]
                }
                for (let JJ = 0; JJ < 3; JJ++) {
                  const cJ = Math.min(GJ[JJ], GJ[3 + JJ], GJ[6 + JJ]),
                    ZJ = Math.max(GJ[JJ], GJ[3 + JJ], GJ[6 + JJ]);
                  fJ[JJ] = Math.max(0, Math.floor((cJ - DJ[JJ]) / YJ - 1e-6)), xJ[JJ] = Math.min(hJ[JJ] - 1, Math.floor((ZJ - DJ[JJ]) / YJ + 1e-6))
                }
                for (let JJ = fJ[2]; JJ <= xJ[2]; JJ++)
                  for (let cJ = fJ[1]; cJ <= xJ[1]; cJ++)
                    for (let ZJ = fJ[0]; ZJ <= xJ[0]; ZJ++)
                      if (rZ(GJ, DJ[0] + (ZJ + .5) * YJ, DJ[1] + (cJ + .5) * YJ, DJ[2] + (JJ + .5) * YJ, YJ / 2)) {
                        const FJ = ZJ + hJ[0] * (cJ + hJ[1] * JJ);
                        nJ[FJ >>> 5] |= 1 << (31 & FJ)
                      }
              } return {
              words: nJ,
              lo: DJ,
              hi: sJ,
              cell: YJ,
              dims: hJ
            }
          }((0, Xq.h)(eJ, JJ.vertexCount), cJ ? JJ.indexData : null, ZJ, FJ, UJ) : null;
        if (!XJ) return null;
        const {
          words: AJ,
          ...qJ
        } = XJ;
        if (this.gridTop + AJ.length > hZ) return void(this.gridsFull = !0);
        const jJ = this.gridTop;
        return this.gridTop += AJ.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * jJ, AJ), {
          ...qJ,
          at: jJ
        }
      }
    }
    const qq = Math.cos(1 * Math.PI / 180);

    function jq(JJ, cJ) {
      return JJ[0] * cJ[0] + JJ[1] * cJ[1] + JJ[2] * cJ[2] < qq
    }
    async function Yq(JJ) {
      const {
        pixels: cJ,
        width: ZJ,
        height: FJ
      } = await dU(JJ), UJ = new Uint8Array(ZJ * FJ);
      for (let eJ = 0; eJ < UJ.length; eJ++) UJ[eJ] = cJ[4 * eJ + 3];
      return {
        width: ZJ,
        height: FJ,
        alpha: UJ
      }
    }
    class hq {
      constructor(JJ, cJ) {
        this.device = JJ, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(mZ.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = JJ.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = JJ.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Cc,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = JJ.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [ZJ, FJ, UJ] = mZ.o;
        this.volume = JJ.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: ZJ,
            height: FJ,
            depthOrArrayLayers: UJ
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = JJ.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = JJ.createBuffer({
          label: "sun-shadow-volume-work",
          size: mZ.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = cJ ? new Aq(JJ) : null, this.entityStandIn = cJ ? null : JJ.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var JJ, cJ;
        const ZJ = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || ZJ.push("Lite sun shadow volume pipeline compiling");
        const FJ = null !== (JJ = null === (cJ = this.casters) || void 0 === cJ ? void 0 : cJ.planesLoading) && void 0 !== JJ ? JJ : 0;
        return FJ > 0 && ZJ.push(`${FJ} Lite sun shadow plane casters loading their textures`), ZJ
      }
      entries() {
        var JJ, cJ, ZJ, FJ;
        const UJ = Sc.r;
        return [{
          binding: UJ.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: UJ.GD,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: UJ.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: UJ.volume,
          resource: this.volumeView
        }, {
          binding: UJ.sampler,
          resource: this.volumeSampler
        }, {
          binding: UJ.entities,
          resource: {
            buffer: null !== (JJ = null === (cJ = this.entities) || void 0 === cJ ? void 0 : cJ.frameBuffer) && void 0 !== JJ ? JJ : this.entityStandIn
          }
        }, {
          binding: UJ.entityGrids,
          resource: {
            buffer: null !== (ZJ = null === (FJ = this.entities) || void 0 === FJ ? void 0 : FJ.gridBuffer) && void 0 !== ZJ ? ZJ : this.entityStandIn
          }
        }]
      }
      prepare(JJ, cJ, ZJ) {
        var FJ;
        this.entitiesThisFrame = !1;
        const UJ = null !== (FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.sunShadowReach()) && void 0 !== FJ ? FJ : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!ZJ || !UJ.sunShadow && !UJ.airShadow) return void(this.volumeHolds = null);
        if (JJ.zh.hJJ !== Mc) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${JJ.zh.hJJ}; everything is lit.`)));
        const eJ = this.start(JJ);
        this.casters.update(JJ.uD, JJ.uD.aD.length);
        const XJ = JJ.YD;
        for (let DJ = 0; DJ < 3; DJ++) this.eye[DJ] = cJ[DJ] + XJ[DJ];
        const AJ = (0, mZ.v)(this.eye);
        this.staleNear = AJ;
        const qJ = JJ.zh.VG;
        eJ.update(this.eye, ((JJ, cJ, ZJ) => qJ.KG(JJ, cJ, ZJ)), 1);
        const jJ = (0, mZ.r)(ZJ.i4()),
          YJ = eJ.eyeChunk,
          hJ = this.uniformInts;
        for (let DJ = 0; DJ < 3; DJ++) hJ[DJ] = YJ[DJ], hJ[4 + DJ] = AJ[DJ];
        this.entitiesThisFrame = null !== this.entities && UJ.sunShadow, this.entitiesThisFrame && nZ(this.uniformFloats, 8, cJ, jJ), null !== this.volumeHolds && (this.castersWritten || jq(jJ, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(AJ, jJ, YJ)
      }
      markStale(JJ) {
        const cJ = this.staleNear,
          ZJ = Mc,
          FJ = [JJ.i * ZJ, JJ.j * ZJ, JJ.k * ZJ];
        for (let eJ = 0; eJ < 3; eJ++)
          if (FJ[eJ] + ZJ <= cJ[eJ] - ZJ || FJ[eJ] >= cJ[eJ] + mZ.o[eJ] + ZJ) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const UJ = this.stale;
        for (let eJ = 0; eJ < UJ.length; eJ += 4)
          if (UJ[eJ] === JJ.i && UJ[eJ + 1] === JJ.j && UJ[eJ + 2] === JJ.k) return void(UJ[eJ + 3] = this.swept);
        if (16 === UJ.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        UJ.push(JJ.i, JJ.j, JJ.k, this.swept)
      }
      writeStale() {
        const JJ = this.swept,
          cJ = this.stale;
        this.staleAll && JJ - this.staleAllSwept >= mZ.j && (this.staleAll = !1, cJ.length = 0);
        let ZJ = 0;
        for (let UJ = 0; UJ < cJ.length; UJ += 4)
          if (JJ - cJ[UJ + 3] < mZ.j) {
            for (let JJ = 0; JJ < 4; JJ++) cJ[ZJ + JJ] = cJ[UJ + JJ];
            ZJ += 4
          } cJ.length = ZJ;
        const FJ = this.uniformInts;
        FJ[3] = this.staleAll ? 5 : ZJ / 4;
        for (let UJ = 0; UJ < 4; UJ++)
          for (let JJ = 0; JJ < 3; JJ++) FJ[16 + 4 * UJ + JJ] = 4 * UJ < ZJ ? cJ[4 * UJ + JJ] * Mc : 0
      }
      writeUniform() {
        const JJ = this.uniformInts;
        let cJ = this.uniformWritten;
        if (cJ) {
          let ZJ = !0;
          for (let FJ = 0; FJ < JJ.length && ZJ; FJ++) ZJ = JJ[FJ] === cJ[FJ];
          if (ZJ) return
        }
        cJ ??= this.uniformWritten = new Int32Array(JJ.length), cJ.set(JJ), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(JJ) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, JJ)
      }
      computeVolume(JJ, cJ, ZJ) {
        const FJ = this.buildVolumePass();
        if (!FJ) return void(this.volumeHolds = null);
        const UJ = (0, mZ.u)(this.volumeHolds, JJ);
        this.volumeHolds = JJ;
        const eJ = 1 === UJ.length && UJ[0].size.every(((JJ, cJ) => JJ === mZ.o[cJ])),
          XJ = this.sweptChunk,
          AJ = this.sweptLight,
          qJ = cJ[0] !== AJ[0] || cJ[1] !== AJ[1] || cJ[2] !== AJ[2],
          jJ = ZJ[0] !== XJ[0] || ZJ[1] !== XJ[1] || ZJ[2] !== XJ[2],
          YJ = qJ && jq(cJ, AJ);
        if ((eJ || this.written || jJ || YJ) && (this.fastLeft = mZ.j), eJ || this.written || qJ || jJ) {
          this.written = !1;
          for (let JJ = 0; JJ < 3; JJ++) XJ[JJ] = ZJ[JJ], AJ[JJ] = cJ[JJ];
          this.sweepLeft = eJ ? 0 : mZ.j
        }
        if (eJ ? this.swept += mZ.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, UJ.push(...(0, mZ.x)(JJ, this.slice)), this.slice = (this.slice + 1) % mZ.j, this.swept++), 0 === UJ.length) return;
        const hJ = (0, mZ.y)(this.workData, cJ, UJ);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const DJ = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          sJ = DJ.beginComputePass({
            label: "sun-shadow-volume"
          });
        sJ.setPipeline(FJ.pipeline), sJ.setBindGroup(VZ.group, FJ.bindGroup), sJ.dispatchWorkgroups(Math.ceil(hJ / mZ.l)), sJ.end(), this.device.queue.submit([DJ.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const JJ = VZ,
          cJ = GPUShaderStage.COMPUTE,
          ZJ = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: JJ.uniform,
              visibility: cJ,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: JJ.GD,
              visibility: cJ,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: JJ.special,
              visibility: cJ,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: JJ.work,
              visibility: cJ,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: JJ.volume,
              visibility: cJ,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          FJ = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: ZJ,
            entries: [{
              binding: JJ.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: JJ.GD,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: JJ.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: JJ.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: JJ.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [ZJ]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: KZ()
            }),
            entryPoint: "main"
          }
        }).then((JJ => {
          this.volumePass = {
            pipeline: JJ,
            bindGroup: FJ
          }
        }), (JJ => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(JJ)}`)
        })), null
      }
      start(JJ) {
        if (this.window) return this.window;
        const cJ = (JJ, cJ) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * JJ, cJ)
        };
        this.casters = new cq(((JJ, ZJ) => {
          this.castersWritten = !0, cJ(JJ, ZJ)
        }), Yq);
        const ZJ = new eq(this.casters, ((JJ, cJ) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * JJ, cJ)
        }), cJ);
        return ZJ.encoded = JJ => {
          this.markStale(JJ)
        }, JJ.zh.on("chunkAdded", (JJ => {
          ZJ.chunkAdded(JJ)
        })), this.window = ZJ, ZJ
      }
    }
    var Dq = ZJ(37673),
      sq = ZJ(37680);
    const nq = 0,
      Gq = 3,
      fq = 4,
      xq = 5;

    function rq(JJ, cJ, ZJ, FJ) {
      JJ.drawOffset(cJ, FJ + nq), cJ[FJ + Gq] = JJ.drawTime(), ZJ[FJ + fq] = JJ.ring.drawStart(), ZJ[FJ + xq] = JJ.ring.drawCount()
    }
    const vq = `\n${GF}\n\nconst MAX_STOPS = ${sq.d}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${sq.d/4}>,\n\tcolor1: array<vec4f, ${sq.d}>,\n\tcolor2: array<vec4f, ${sq.d}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${sq.d}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${sq.d}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var mq = ZJ(40336);
    class Qq {
      constructor(JJ, cJ, ZJ, FJ) {
        this.device = JJ, this.system = cJ, this.frameIndex = ZJ, this.Zn = FJ, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, mq.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (JJ, cJ) => {
          this.device.queue.writeBuffer(this.ring, JJ * sq.h * 4, this.system.ring.records, JJ * sq.h, (cJ - JJ) * sq.h)
        };
        const {
          name: UJ
        } = cJ;
        this.ring = JJ.createBuffer({
          label: `particles-${UJ}`,
          size: cJ.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = JJ.createBuffer({
          label: `particles-uniforms-${UJ}`,
          size: 4 * sq.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(JJ) {
        const cJ = (0, mq.d)(this.system, this.uniformBits, JJ);
        cJ && (this.uniformBits = cJ, this.device.queue.writeBuffer(this.uniforms, 0, cJ))
      }
      bind() {
        const {
          system: JJ
        } = this, cJ = this.texture;
        (0, mq.g)(JJ, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${JJ.name}`,
          size: [sq.l, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * sq.l
        }, [sq.l, 1]));
        const ZJ = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.Zn.whiteRamp;
        this.bindGroup && this.boundView === cJ.view && this.boundSampler === cJ.sampler && this.boundRamp === ZJ || (this.boundView = cJ.view, this.boundSampler = cJ.sampler, this.boundRamp = ZJ, this.bindGroup = this.device.createBindGroup({
          label: `particles-${JJ.name}`,
          layout: this.Zn.layout,
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
            resource: cJ.sampler
          }, {
            binding: 3,
            resource: cJ.view
          }, {
            binding: 4,
            resource: this.Zn.rampSampler
          }, {
            binding: 5,
            resource: ZJ
          }]
        }))
      }
      destroy() {
        var JJ;
        this.ring.destroy(), this.uniforms.destroy(), null === (JJ = this.ramp) || void 0 === JJ || JJ.destroy()
      }
    }
    class Eq {
      constructor(JJ, cJ) {
        this.device = JJ, this.resources = cJ, this.renderable = void 0, this.systems = new Map, this.draws = [], this.Zn = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, jc.e)();
        const ZJ = JJ.createBindGroupLayout({
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
        this.frameLayout = JJ.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = JJ.createPipelineLayout({
          bindGroupLayouts: [cc(JJ), ZJ, this.frameLayout]
        }), this.module = JJ.createShaderModule({
          label: "particles",
          code: vq
        });
        const FJ = JJ.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        JJ.queue.writeTexture({
          texture: FJ
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.Zn = {
          layout: ZJ,
          rampSampler: JJ.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: FJ.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (cJ, ZJ) => (this.bindTarget(ZJ), {
            renderable: this.renderable,
            pipeline: Xc(JJ, ZJ),
            draw: JJ => ZJ === this.preparedTarget ? this.draw(JJ) : 0
          })
        }
      }
      get aFJ() {
        return this.systems.size
      }
      reset() {
        for (const JJ of this.systems.keys()) JJ.reset()
      }
      describePendingWork() {
        return (0, Dq.i)(this.systems.keys(), "Lite")
      }
      yI(JJ, cJ) {
        const ZJ = new Dq.e(JJ, cJ, this);
        return this.systems.set(ZJ, new Qq(this.device, ZJ, this.allocateFrameIndex(), this.Zn)), ZJ
      }
      J9(JJ, cJ) {
        for (const ZJ of this.systems.keys()) ZJ.J9(JJ, cJ)
      }
      canDraw(JJ) {
        const cJ = this.systems.get(JJ),
          ZJ = JJ.texture ? this.resources.boundTexture(JJ.texture) : null;
        if (!cJ || !ZJ || !this.targetPipelines) return !1;
        if (cJ.texture = ZJ, cJ.pipelines.length = 0, !CU(JJ.blendMode)) return this.warnOnce(`blend:${JJ.blendMode}`, `particle blend mode ${JJ.blendMode} is not drawn (${JJ.name})`), !0;
        const FJ = (0, bU.k)(JJ.blendMode);
        for (const UJ of FJ) {
          const JJ = this.pipelineFor(UJ);
          if (!1 === JJ) return cJ.pipelines.length = 0, !0;
          JJ && cJ.pipelines.push(JJ)
        }
        return cJ.pipelines.length === FJ.length
      }
      disposeStopped(JJ) {
        JJ.dispose()
      }
      remove(JJ) {
        const cJ = this.systems.get(JJ);
        cJ && (this.systems.delete(JJ), cJ.destroy(), this.freeFrameIndices.push(cJ.frameIndex))
      }
      prepare(JJ) {
        const cJ = JJ.animationRatio || 1;
        Ac(this.renderable._worldCenter, JJ, Fc), this.preparedTarget = this.target, this.draws.length = 0;
        let ZJ = 0;
        for (const FJ of this.systems.values()) {
          const JJ = FJ.system;
          if (!JJ.animateIfActive(cJ)) continue;
          if (JJ.ring.takeUploads(FJ.upload), !JJ.hasLiveParticles() || 0 === FJ.pipelines.length) continue;
          FJ.writeUniforms(this.warnOnce), FJ.bind();
          const UJ = 64 * FJ.frameIndex;
          FJ.count = JJ.ring.drawCount(), rq(JJ, this.frameData, this.frameBits, UJ), ZJ = Math.max(ZJ, UJ + 64), this.draws.push(FJ)
        }
        ZJ > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, ZJ)
      }
      draw(JJ) {
        let cJ = 0,
          ZJ = null;
        for (const FJ of this.draws) {
          JJ.setBindGroup(1, FJ.bindGroup), JJ.setBindGroup(2, this.frameBindGroup, [256 * FJ.frameIndex]);
          for (const UJ of FJ.pipelines) UJ !== ZJ && (JJ.setPipeline(UJ), ZJ = UJ), JJ.draw(4, FJ.count), cJ++
        }
        return cJ
      }
      bindTarget(JJ) {
        this.target = JJ;
        const cJ = `${JJ._colorFormat}|${JJ._depthStencilFormat}|${JJ._depthCompare}|${JJ._sampleCount}`;
        let ZJ = this.pipelines.get(cJ);
        ZJ || (ZJ = new Map, this.pipelines.set(cJ, ZJ)), this.targetPipelines = ZJ
      }
      pipelineFor(JJ) {
        var cJ;
        const ZJ = this.targetPipelines,
          FJ = ZJ.get(JJ);
        if (void 0 !== FJ) return FJ;
        ZJ.set(JJ, null);
        const UJ = this.target,
          eJ = JJ === bU.d,
          XJ = null !== (cJ = UJ._depthCompare) && void 0 !== cJ ? cJ : Zc;
        return this.device.createRenderPipelineAsync({
          label: `particles-${JJ}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: tJ({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: eJ ? 1 : 0
            }
          }, UJ, uU((0, bU.h)(JJ))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: UJ._depthStencilFormat ? {
            format: UJ._depthStencilFormat,
            depthCompare: XJ,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: UJ._sampleCount
          }
        }).then((cJ => {
          ZJ.set(JJ, cJ)
        }), (cJ => {
          ZJ.set(JJ, !1), console.error("Lite particle pipeline failed", cJ), LU("particles", `blend-${JJ}`, cJ)
        })), null
      }
      allocateFrameIndex() {
        const JJ = this.freeFrameIndices.pop();
        if (void 0 !== JJ) return JJ;
        const cJ = this.nextFrameIndex++;
        if (64 * (cJ + 1) > this.frameData.length) {
          const JJ = new Float32Array(2 * this.frameData.length);
          JJ.set(this.frameData), this.frameData = JJ, this.frameBits = new Uint32Array(JJ.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return cJ
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
    class Vq {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.lite = JJ, this.canvas = cJ, this.info = ZJ, this.resources = UJ, this.LZJ = !1, this.needPOTTextures = !1, this.y_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = cJ.width, this.renderHeight = cJ.height, this.caps = {
          maxTextureSize: FJ.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: FJ.maxTextureArrayLayers
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
      setSize(JJ, cJ) {
        if (this.renderWidth === JJ && this.renderHeight === cJ) return !1;
        const ZJ = this.renderWidth,
          FJ = this.renderHeight;
        this.renderWidth = JJ, this.renderHeight = cJ;
        try {
          (0, NJ.q)(this.lite, JJ, cJ)
        } catch (UJ) {
          if (UJ instanceof DOMException && "InvalidStateError" === UJ.name) {
            this.renderWidth = ZJ, this.renderHeight = FJ;
            try {
              (0, NJ.q)(this.lite, ZJ, FJ)
            } catch {
              this.canvas.width = ZJ, this.canvas.height = FJ
            }
            return console.warn("WebGPU could not allocate render targets for resize", JJ, cJ, UJ.message), !1
          }
          throw UJ
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
      yE() {
        const JJ = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : JJ - this.lastFrameTime, this.lastFrameTime = JJ
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(JJ, cJ) {
        const ZJ = document.createElement("canvas");
        return ZJ.width = JJ, ZJ.height = cJ, ZJ
      }
      b_(JJ, cJ) {
        var ZJ;
        return null !== (ZJ = this.resources.b_.get(JJ)) && void 0 !== ZJ ? ZJ : new uJ(this.resources, JJ, cJ)
      }
      atlasArray(JJ, cJ, ZJ) {
        return this.resources.atlasArray(JJ, cJ, ZJ)
      }
    }
    class Kq {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(JJ) {
        this.fov = JJ.fov, this.nearPlane = JJ.near, this.farPlane = JJ.far;
        const cJ = JJ.worldMatrix;
        for (let ZJ = 0; ZJ < 16; ZJ++)
          if (this.worldMatrix[ZJ] !== cJ[ZJ]) return this.worldMatrix.set(cJ), void this.worldMatrixVersion++
      }
    }
    class yq {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        let YJ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = JJ, this.iG = cJ, this.sceneTask = ZJ, this.gpuDevice = FJ, this.terrain = UJ, this.meshes = eJ, this.particles = XJ, this.resources = AJ, this.sunShadow = YJ, this.IcJ = void 0, this.backendName = "WebGPU (Lite)", this.K3 = void 0, this.modelMeshes = void 0, this.camera = new Kq, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new TJ(FJ.lost), this.deviceLost = this.refusals.deviceLost, this.IcJ = new Vq(JJ, qJ, jJ, FJ.limits, AJ), (0, IJ.E)({
          hj: JJ => {
            WJ(JJ) && AJ.textureSlot(JJ)
          },
          loaded: JJ => WJ(JJ) ? AJ.textureLoaded(JJ) : null,
          canvasUpdated: (JJ, cJ, ZJ) => {
            WJ(JJ) && AJ.canvasUpdated(JJ, cJ, ZJ)
          }
        }), this.K3 = eJ.K3, this.modelMeshes = eJ.modelMeshes, cJ.camera = this.camera
      }
      get castsEntitySunShadows() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.sunShadow) || void 0 === cJ ? void 0 : cJ.tracesEntities) && void 0 !== JJ && JJ
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(JJ) {
        this.modelMeshes.attach(JJ.model, JJ.sceneMirror);
        const cJ = JJ.iG;
        this.setClearColour(cJ.clearColor.r, cJ.clearColor.g, cJ.clearColor.b), cJ.draw = () => {
          this.drawFrame(JJ, cJ)
        }
      }
      render(JJ) {
        try {
          this.IcJ.yE(), JJ.iG.render()
        } catch (cJ) {
          throw this.refusals.frameFailed(cJ), cJ
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var JJ, cJ, ZJ, FJ;
        const UJ = [...this.particles.describePendingWork(), ...null !== (JJ = null === (cJ = this.sunShadow) || void 0 === cJ ? void 0 : cJ.describePendingWork()) && void 0 !== JJ ? JJ : []],
          eJ = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (ZJ = this.terrain.sceneDepth) && void 0 !== ZJ && ZJ.compiling ? 1 : 0) + (null !== (FJ = this.terrain.shadowMask) && void 0 !== FJ && FJ.compiling ? 1 : 0);
        eJ > 0 && UJ.push(`${eJ} Lite pipelines compiling`);
        const XJ = this.terrain.buffersAwaitingVerdict;
        XJ > 0 && UJ.push(`${XJ} Lite terrain buffers awaiting their out-of-memory verdict`);
        const AJ = this.resources.texturesLoading;
        return AJ > 0 && UJ.push(`${AJ} Lite textures loading`), UJ
      }
      prepareTexture(JJ) {
        return null !== this.resources.boundTexture(JJ) || this.resources.textureFailed(JJ)
      }
      drawFrame(JJ, cJ) {
        var ZJ, FJ, UJ, eJ, XJ, AJ;
        const qJ = YA(JJ);
        this.camera.copyFromView(qJ), this.setClearColour(qJ.clearColour[0], qJ.clearColour[1], qJ.clearColour[2]), null === (ZJ = this.sunShadow) || void 0 === ZJ || ZJ.prepare(JJ.ih, qJ.eye, null !== (FJ = JJ.ih.Jn) && void 0 !== FJ ? FJ : null), this.terrain.prepare(JJ, qJ), null === (UJ = this.terrain.sceneDepth) || void 0 === UJ || UJ.setPlanes(qJ.near, qJ.far), null === (eJ = this.terrain.shadowMask) || void 0 === eJ || eJ.prepare(qJ), aX(this.sceneTask), this.meshes.prepare(cJ, qJ, JJ.model.earthSky, null !== (XJ = JJ.ih.Jn) && void 0 !== XJ ? XJ : null), this.particles.prepare(qJ);
        const jJ = performance.now();
        this.resources.flushUploads(), null === (AJ = this.sunShadow) || void 0 === AJ || AJ.traceEntities(this.meshes);
        try {
          (0, NJ.o)(this.engine, this.lastFrameTime > 0 ? jJ - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = jJ
      }
      setClearColour(JJ, cJ, ZJ) {
        const FJ = this.iG.clearColor;
        FJ.r = JJ, FJ.g = cJ, FJ.b = ZJ, FJ.a = 1
      }
    }
    const Sq = "WebGPU device lost while Lite was starting";

    function Iq(JJ, cJ) {
      return "object" === typeof JJ && null !== JJ ? Object.assign(JJ, {
        startStep: cJ
      }) : JJ
    }
    async function Mq(JJ, cJ) {
      const ZJ = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!ZJ) throw Iq(new Error("No WebGPU adapter"), "no_adapter");
      const FJ = ZJ.info,
        UJ = {
          vendor: (null === FJ || void 0 === FJ ? void 0 : FJ.vendor) || "unknown vendor",
          renderer: (null === FJ || void 0 === FJ ? void 0 : FJ.architecture) || "unknown renderer",
          version: (null === FJ || void 0 === FJ ? void 0 : FJ.description) || "unknown version"
        },
        eJ = function(JJ) {
          const cJ = {};
          for (const ZJ in JJ.limits) {
            const FJ = JJ.limits[ZJ];
            "number" === typeof FJ && (cJ[ZJ] = FJ)
          }
          return cJ
        }(ZJ);
      let XJ;
      JJ.style.background = "black";
      try {
        XJ = await (0, NJ.f)(JJ, {
          msaaSamples: cJ.AZJ ? 4 : 1,
          requiredLimits: eJ,
          alphaMode: "premultiplied"
        })
      } catch (YJ) {
        throw Iq(YJ, "#47" === (null === (AJ = YJ) || void 0 === AJ ? void 0 : AJ.message) ? "no_adapter" : "device")
      }
      var AJ;
      const qJ = function(JJ) {
        return JJ._device
      }(XJ);
      let jJ = null;
      qJ.lost.then((JJ => {
        jJ = JJ, console.error(`WebGPU device lost (${JJ.reason}): ${JJ.message}`)
      }));
      try {
        const ZJ = await async function(JJ, cJ, ZJ, FJ, UJ, eJ) {
          const XJ = (0, OJ.c)(JJ),
            AJ = new iX(JJ, cJ),
            qJ = new RA(cJ),
            jJ = new IX(cJ, AJ, (JJ => function(JJ, cJ) {
              for (const FJ of lJ(JJ)) {
                var ZJ;
                if (FJ._targetSignature === cJ) return null !== (ZJ = FJ._sceneBG) && void 0 !== ZJ ? ZJ : null
              }
              return null
            }(XJ, JJ))),
            YJ = new Eq(cJ, AJ);
          for (const sJ of function(JJ, cJ, ZJ) {
              return [cJ.opaqueRenderable, JJ.opaqueRenderable, JJ.skyLastRenderable, ZJ.renderable, cJ.transparentRenderable, JJ.transparentRenderable, JJ.frontRenderable]
            }(jJ, qJ, YJ)) oJ(XJ, sJ);
          const hJ = function(JJ) {
            for (const cJ of lJ(JJ))
              if ("iG" === cJ.name) return cJ;
            throw new Error("Lite: the scene has no render task named scene")
          }(XJ);
          UJ && qJ.installSceneDepth(hJ, JJ);
          const DJ = eJ ? new hq(cJ, eJ.entities) : null;
          qJ.sunShadow = DJ, DJ && null !== eJ && void 0 !== eJ && eJ.entities && (qJ.shadowMask = new yA(cJ, hJ, JJ, qJ));
          return jJ.sunShadow = DJ, await (0, OJ.g)(XJ), new yq(JJ, XJ, hJ, cJ, qJ, jJ, YJ, AJ, ZJ, FJ, DJ)
        }(XJ, qJ, JJ, UJ, cJ.sceneDepth, cJ.sunShadow);
        if (null !== jJ) {
          const {
            reason: JJ,
            message: cJ
          } = jJ;
          throw Object.assign(new Error(`${Sq} (${JJ}): ${cJ}`), {
            fallbackReason: Sq
          })
        }
        return ZJ
      } catch (YJ) {
        throw qJ.destroy(), null === jJ ? YJ : Iq(YJ, "device")
      }
    }
  },
  39623: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => GJ,
      E: () => sJ,
      H: () => nJ,
      c: () => UJ,
      f: () => FJ,
      h: () => DJ,
      k: () => YJ,
      o: () => fJ,
      q: () => eJ,
      r: () => AJ,
      u: () => qJ,
      y: () => XJ
    });
    const FJ = 3,
      UJ = 0,
      eJ = 1,
      XJ = 2,
      AJ = {
        uniform: 3,
        GD: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qJ = 10,
      jJ = "BloxdPackInputs",
      YJ = "bloxdPackInputs",
      hJ = [{
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
      DJ = 80;

    function sJ() {
      const JJ = hJ.map((JJ => {
        let {
          name: cJ,
          type: ZJ
        } = JJ;
        return `    ${cJ}: ${ZJ},\n`
      })).join("");
      return `struct ${jJ} {\n${JJ}}\n@group(${FJ}) @binding(${UJ}) var<uniform> ${YJ}: ${jJ};\n`
    }

    function nJ(JJ, cJ) {
      const ZJ = new DataView(JJ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, DJ),
        [FJ, UJ, eJ, XJ, AJ, qJ] = hJ;
      ZJ.setFloat32(FJ.offset, cJ.seconds, !0), ZJ.setUint32(UJ.offset, cJ.lit ? 1 : 0, !0);
      for (let jJ = 0; jJ < 3; jJ++) ZJ.setInt32(eJ.offset + 4 * jJ, cJ.renderOffset[jJ], !0), ZJ.setFloat32(XJ.offset + 4 * jJ, cJ.i4[jJ], !0), ZJ.setFloat32(AJ.offset + 4 * jJ, cJ.eyePosition[jJ], !0), ZJ.setFloat32(qJ.offset + 4 * jJ, cJ.shadowDirection[jJ], !0)
    }

    function GJ(JJ) {
      const cJ = new Uint32Array(Math.max(1, JJ.length));
      return JJ.forEach(((JJ, ZJ) => {
        let {
          id: FJ,
          rotation: UJ
        } = JJ;
        cJ[ZJ] = 65535 & FJ | (3 & UJ) << 16
      })), cJ
    }
    const fJ = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);