export const id = 260;
export const ids = [260];
export const modules = {
  40673: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => oY,
      g: () => OY,
      h: () => RY,
      k: () => aY
    });
    var FY = DY(36586),
      AY = DY(38066),
      IY = DY(38058);

    function RY(YY, rY, DY, FY) {
      const AY = IY.r;
      rY.fill(0), YY.gravity.toArray(rY, AY.gravity), YY.colorDead.toArray(rY, AY.colorDead), DY[AY.ramp] = YY.useRampGradients ? 1 : 0;
      const RY = YY.getColorGradients(),
        OY = sY(YY, RY, "colour", FY);
      DY[AY.colorCount] = OY;
      for (let IY = 0; IY < OY; IY++) {
        var gY;
        const YY = RY[iY(RY, IY)];
        rY[AY.colorPositions + IY] = YY.gradient, YY.color1.toArray(rY, AY.color1 + 4 * IY), (null !== (gY = YY.color2) && void 0 !== gY ? gY : YY.color1).toArray(rY, AY.color2 + 4 * IY)
      }
      const aY = YY.getVelocityGradients(),
        vY = sY(YY, aY, "ci", FY);
      DY[AY.velocityCount] = vY;
      for (let IY = 0; IY < vY; IY++) EY(rY, AY.ci + 4 * IY, aY[iY(aY, IY)]);
      const uY = YY.useRampGradients ? YY.getColorRemapGradients() : null,
        yY = sY(YY, uY, "colour remap", FY);
      DY[AY.remapCount] = yY;
      for (let IY = 0; IY < yY; IY++) EY(rY, AY.remap + 4 * IY, uY[iY(uY, IY)])
    }

    function OY() {
      return {
        key: [],
        texels: new Uint8Array(4 * IY.k)
      }
    }
    const gY = [];

    function aY(YY, rY) {
      return vY(YY, gY), !WY(gY, rY.key) && (rY.key.length = 0, rY.key.push(...gY), rY.key.length > 0 && function(YY, rY) {
        for (let DY = 0; DY < IY.k; DY++) AY.g.GetCurrentGradient(DY / IY.k, YY, ((YY, rY, DY) => {
          FY.Color3.LerpToRef(YY.color, rY.color, DY, uY)
        })), rY[4 * DY] = 255 * uY.r, rY[4 * DY + 1] = 255 * uY.g, rY[4 * DY + 2] = 255 * uY.b, rY[4 * DY + 3] = 255
      }(YY.getRampGradients(), rY.texels), !0)
    }

    function vY(YY, rY) {
      rY.length = 0;
      const DY = YY.useRampGradients ? YY.getRampGradients() : null;
      if (null !== DY && void 0 !== DY && DY.length) {
        rY.push(DY.length);
        for (const YY of DY) rY.push(YY.gradient, YY.color.r, YY.color.g, YY.color.b)
      }
    }
    const uY = new FY.Color3;

    function sY(YY, rY, DY, FY) {
      return rY ? rY.length > IY.b ? (FY(`particleStops:${DY}`, `GPU particles use the first 2 and last ${IY.b-2} of more than ${IY.b} ${DY} gradient stops (${YY.name})`), IY.b) : rY.length : 0
    }

    function iY(YY, rY) {
      return rY < 2 || YY.length <= IY.b ? rY : YY.length - IY.b + rY
    }
    const yY = new Float32Array(IY.o),
      QY = new Uint32Array(yY.buffer);

    function oY(YY, rY, DY) {
      return RY(YY, yY, QY, DY), rY && WY(QY, rY) ? null : QY.slice()
    }

    function WY(YY, rY) {
      if (YY.length !== rY.length) return !1;
      for (let DY = 0; DY < YY.length; DY++)
        if (YY[DY] !== rY[DY]) return !1;
      return !0
    }

    function EY(YY, rY, DY) {
      var FY;
      YY[rY] = DY.gradient, YY[rY + 1] = DY.factor1, YY[rY + 2] = null !== (FY = DY.factor2) && void 0 !== FY ? FY : DY.factor1
    }
  },
  40666: (YY, rY, DY) => {
    function FY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const rY = new Set;
      return (DY, FY) => {
        rY.has(DY) || (rY.add(DY), console.warn(YY + FY))
      }
    }
    DY.d(rY, {
      b: () => FY
    })
  },
  40708: (YY, rY, DY) => {
    DY.d(rY, {
      createLiteRendererAsync: () => cg,
      liteBabylonBackend: () => MY,
      setPipelineFailureHook: () => kA
    });
    var FY = DY(36586),
      AY = DY(36876),
      IY = DY(37239),
      RY = DY(36477),
      OY = DY(37244);
    class gY extends OY.b {
      constructor() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        super(...rY), this.color = new FY.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: rY[0].hT().getUniqueId(),
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
          needAlphaBlendingForMesh: YY => YY.visibility < 1 || YY.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const aY = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      vY = YY => 1 << aY.indexOf(YY),
      uY = vY("VERTEXCOLOR"),
      sY = vY("INSTANCES"),
      iY = vY("THIN_INSTANCES"),
      yY = vY("INSTANCESCOLOR"),
      QY = vY("FOG"),
      oY = vY("LITE_FRONT_LAYER");

    function WY(YY, rY, DY, FY) {
      let AY = 0;
      return YY.isVerticesDataPresent("color") && (AY |= uY), "none" !== rY && (AY |= sY), "thin" === rY && (AY |= iY, YY.isVerticesDataPresent("instanceColor") && (AY |= yY)), FY.fogEnabled && YY.applyFog && 0 !== FY.fogMode && (AY |= QY), DY >= 1 && (AY |= oY), AY
    }

    function EY(YY, rY) {
      YY.updateColor4("color", rY.color, rY.alpha)
    }
    var mY = DY(37180),
      VY = DY(36681),
      SY = DY(36615),
      lY = DY(36454),
      TY = DY(37168),
      eY = DY(37172),
      NY = DY(36467),
      BY = DY(36474),
      cY = DY(36482);
    const KY = lY.e.GLSL;
    class HY {
      constructor(YY, rY) {
        this.name = YY, this.LQ = rY, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.wT = {
          addOnce: YY => {
            this.disposers.push(YY)
          }
        }, this.uniqueId = rY.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      hT() {
        return this.LQ
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
      needAlphaBlendingForMesh(YY) {
        return (0, NY.K)(this.model, YY.visibility, YY.hasVertexAlpha)
      }
      needAlphaTestingForMesh(YY) {
        return (0, NY.M)(this.model, YY.visibility, YY.hasVertexAlpha)
      }
      dispose() {
        (0, VY.h)(this);
        for (const YY of this.disposers.splice(0)) YY()
      }
      get model() {
        return (0, NY.S)(this)
      }
    }
    const zY = new WeakSet;

    function ZY(YY) {
      return zY.has(YY)
    }

    function CY(YY) {
      zY.add(YY)
    }
    const fY = {
      create: (YY, rY) => ((0, SY.p)(YY, new HY(YY.name, rY)), BY.c.defines()),
      write: () => {},
      addFeature: (YY, rY) => {
        const DY = YY.mirror;
        rY.feature === eY.d && rY.state.dirLightCount > 0 && (YY.disableLighting = !0, (0, NY.Q)(YY)), "BLOXD_LIGHTING" in rY.defines && (0, VY.g)(DY), rY.feature === TY.f && ((0, mY.g)(rY.state, KY), function(YY, rY) {
          const DY = YY.hT().ky();
          rY.textures.forEach(((FY, AY) => {
            setTimeout((() => {
              var IY, RY;
              const {
                url: OY
              } = FY.source;
              DY.atlasArray(OY, null !== (IY = null === (RY = rY.sources.pixels) || void 0 === RY ? void 0 : RY[AY]) && void 0 !== IY ? IY : null, rY.sources.layerWidth).then((DY => {
                (0, mY.e)(YY, rY, AY, DY, DY.layerWidth, DY.layers, KY)
              })).catch((YY => {
                console.error(`Failed to build texture array for atlas ${AY}`, YY)
              }))
            }))
          }))
        }(DY, rY.state))
      },
      texture: (YY, rY, DY) => {
        let {
          data: FY,
          sets: AY
        } = DY;
        var IY;
        (CY(YY), FY) && (YY.uvSet = null !== (IY = null === AY || void 0 === AY ? void 0 : AY.coordinatesIndex) && void 0 !== IY ? IY : 0, (0, SY.bb)(YY.matrix, null !== AY && void 0 !== AY ? AY : {}))
      },
      cube: CY,
      canvas: (YY, rY, DY) => {
        let {
          width: FY,
          height: AY,
          mipmaps: IY,
          samplingMode: RY = cY.k.trilinear,
          hasAlpha: OY = !1,
          wrap: gY = cY.c.clamp
        } = DY;
        const aY = YY.ky().createCanvas(FY, AY),
          vY = new cY.o("2d", {
            kind: "canvas",
            width: FY,
            height: AY,
            canvas: aY
          }, {
            samplingMode: RY,
            wrapU: gY,
            wrapV: gY,
            noMipmap: !IY,
            invertY: !0
          });
        return vY.hasAlpha = OY, CY(vY), vY
      }
    };
    var jY = DY(36700),
      hY = DY(36552);
    class dY {
      constructor(YY, rY, DY) {
        this.engine = YY, this.clearColor = rY, this.ambientColor = DY, this.onBeforeRenderObservable = new hY.e, this.onBeforeCameraRenderObservable = new hY.e, this.onAfterRenderObservable = new hY.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.YV = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      ky() {
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
      addPendingData(YY) {
        this.pending.push(YY)
      }
      removePendingData(YY) {
        const rY = this.pending.indexOf(YY); - 1 !== rY && this.pending.splice(rY, 1)
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

    function JY() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const MY = {
      YFY: JY,
      LDY: (YY, rY) => {
        const DY = new dY(YY.engine, FY.c.FromArray(rY.clearColor), FY.Color3.FromArray(rY.ambientColor));
        (0, RY.e)(fY, DY), YY.LQ = DY,
          function(YY, rY) {
            const DY = Object.assign((0, jY.h)(YY, "camera"), {
              layerMask: 268435455
            });
            YY.model.nodes.setWorldSource(DY.row, YY.model.view.worldMatrix), YY.camera = rY.activeCamera = DY
          }(YY, DY), (0, AY.f)(YY, ((YY, rY, DY) => (0, IY.j)(YY, rY, DY, OY.b)))
      },
      xDY: () => {},
      setBabylonFog: () => {},
      rFY: JY,
      AFY: () => {},
      linesFromArrays: (YY, rY, DY) => (0, IY.j)(YY, rY, DY, gY),
      tQ: () => {},
      FFY: JY
    };
    var wY = DY(40771),
      bY = DY(40782);
    class XY {
      constructor(YY) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const rY = new Promise((YY => {
          this.refused = YY
        }));
        this.deviceLost = Promise.race([YY, rY])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(YY) {
        (function(YY) {
          const {
            name: rY,
            message: DY
          } = null !== YY && void 0 !== YY ? YY : {};
          return "InvalidStateError" === rY && "string" === typeof DY && DY.startsWith("GPUDevice.")
        })(YY) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: YY.message,
          framesRefused: !0
        }))
      }
    }
    class qY {
      constructor(YY) {
        this.resources = YY, this.matrixKey = {
          gu: 0
        }, this.attributesKey = {
          gu: 0
        }, this.inputs = Object.create(null);
        for (let rY = 0; rY < 4; rY++) this.inputs[`world${rY}`] = new GY(this.matrixKey, 16 * rY, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(YY, rY) {
        this.resources.vertexBufferCreated(this.matrixKey, YY, !0), rY && this.resources.vertexBufferCreated(this.attributesKey, rY, !0)
      }
    }
    class pY extends qY {
      constructor(YY, rY, DY) {
        super(YY), this.mesh = rY, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const FY = this.inputs;
        let AY = 0;
        for (const {
            size: RY
          }
          of DY) AY += RY;
        for (const {
            name: RY,
            offset: OY,
            size: gY,
            type: aY
          }
          of DY) FY[RY] = new GY(this.attributesKey, 4 * OY, 4 * AY, gY, !0, aY);
        this.rowStride = AY, YY.kU.set(rY, this);
        const IY = rY.isVerticesDataPresent;
        rY.isVerticesDataPresent = (YY, DY) => YY in FY || IY.call(rY, YY, DY)
      }
      attach(YY, rY) {
        this.matrices = YY, this.attributes = rY, this.bind(YY, rY), this.mirror(YY, YY.length, YY.length / 16)
      }
      S_(YY) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, YY ? 64 * YY : void 0)
      }
      l_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(YY, rY) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * YY, 16 * rY)
      }
      attributeRows(YY, rY) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, YY * this.rowStride, rY * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(YY, rY, DY) {
        const FY = this.mesh._thinInstanceDataStorage;
        FY.matrixData = YY, FY.matrixBufferSize = rY, FY.worldMatrices = null, FY.instancesCount = DY
      }
    }
    class kY extends qY {
      constructor(YY, rY, DY) {
        var FY, AY, IY, RY;
        super(YY), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (FY = null === DY || void 0 === DY ? void 0 : DY.interleavedKinds) && void 0 !== FY ? FY : null, this.offsets = null !== (AY = null === DY || void 0 === DY ? void 0 : DY.interleavedOffsets) && void 0 !== AY ? AY : [], this.rowStride = null !== (IY = null === DY || void 0 === DY ? void 0 : DY.interleavedRowStride) && void 0 !== IY ? IY : 0, null === (RY = this.layout) || void 0 === RY || RY.forEach(((YY, rY) => {
          this.inputs[YY] = new GY(this.attributesKey, 4 * this.offsets[rY], 4 * this.rowStride, DY.strides[YY])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), YY.batchUploads.set(rY, this), rY.wT.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(YY) {
        const rY = this.packedBatch;
        return rY.renderSelf ? 0 === YY ? this.packedSource : rY.instances[YY - 1] : rY.instances[YY]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(YY, rY, DY, FY) {
        const AY = (rY.renderSelf ? 1 : 0) + rY.rows.length;
        if (this.frame = FY, this.count = AY, this.packedSource = YY, this.packedBatch = rY, 0 === AY) return;
        if (YY.getWorldMatrix(), 16 * AY > this.matrices.length) {
          let YY = this.matrices.length / 16;
          for (; YY < AY;) YY *= 2;
          this.matrices = new Float32Array(16 * YY), this.attributes &&= new Float32Array(YY * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let IY = 0;
        rY.renderSelf && this.packRow(IY++, YY, rY.row, DY);
        for (let RY = 0; RY < rY.rows.length; RY++) this.packRow(IY++, rY.instances[RY], rY.rows[RY], DY);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * AY), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, AY * this.rowStride)
      }
      packRow(YY, rY, DY, FY) {
        const AY = this.matrices;
        if (DY < 0) AY.set(rY.getWorldMatrix().m, 16 * YY);
        else
          for (let aY = 0; aY < 16; aY++) AY[16 * YY + aY] = FY[16 * DY + aY];
        const IY = this.attributes;
        if (!IY) return;
        const RY = rY.YB,
          OY = this.layout;
        for (let aY = 0; aY < OY.length; aY++) {
          var gY;
          const rY = null !== (gY = RY[OY[aY]]) && void 0 !== gY ? gY : 0,
            DY = YY * this.rowStride + this.offsets[aY];
          rY.toArray ? rY.toArray(IY, DY) : rY.copyToArray ? rY.copyToArray(IY, DY) : IY[DY] = rY
        }
      }
    }
    class GY {
      constructor(YY, rY, DY, FY) {
        let AY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = YY, this.byteOffset = rY, this.byteStride = DY, this.size = FY, this.instanced = AY, this.type = IY, this.normalized = RY
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
    const xY = "CANVAS_ALPHA_ONE",
      nY = `override ${xY}: bool = false;`,
      PY = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function UY(YY, rY, DY) {
      var FY;
      let AY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const IY = null !== (FY = rY._colorFormat) && void 0 !== FY ? FY : "bgra8unorm",
        RY = AY ? 15 : 0;
      return DY ? {
        ...YY,
        targets: [{
          format: IY,
          blend: {
            color: DY,
            alpha: PY
          },
          writeMask: RY
        }]
      } : {
        ...YY,
        constants: {
          ...YY.constants,
          [xY]: 1
        },
        targets: [{
          format: IY,
          writeMask: RY
        }]
      }
    }

    function LY(YY, rY) {
      YY._renderables.push(rY)
    }

    function tY(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = YY._frameGraph) || void 0 === DY ? void 0 : DY._tasks) && void 0 !== rY ? rY : []
    }

    function Yr(YY) {
      return YY._currentEncoder
    }

    function rr(YY) {
      return YY.createBindGroupLayout({
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
    const Dr = "greater-equal",
      Fr = 2e5,
      Ar = 1e5,
      Ir = new WeakMap;

    function Rr(YY, rY) {
      let DY = Ir.get(YY);
      if (!DY) {
        DY = {
          module: YY.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Ir.set(YY, DY)
      }
      const FY = `${rY._colorFormat}|${rY._depthStencilFormat}|${rY._sampleCount}`;
      let AY = DY.pipelines.get(FY);
      if (!AY) {
        var IY;
        const {
          module: RY
        } = DY;
        AY = YY.createRenderPipeline({
          label: `placeholder ${FY}`,
          layout: YY.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: RY,
            entryPoint: "v"
          },
          fragment: {
            module: RY,
            entryPoint: "f",
            targets: [{
              format: null !== (IY = rY._colorFormat) && void 0 !== IY ? IY : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: rY._depthStencilFormat ? {
            format: rY._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: rY._sampleCount
          }
        }), DY.pipelines.set(FY, AY)
      }
      return AY
    }

    function Or(YY, rY, DY) {
      const FY = rY.eye,
        AY = rY.viewMatrix;
      YY[0] = FY[0] + AY[2] * DY, YY[1] = FY[1] + AY[6] * DY, YY[2] = FY[2] + AY[10] * DY
    }
    var gr = DY(37291),
      ar = DY(40666),
      vr = DY(36465);
    const ur = Math.PI,
      sr = ur / 1.95,
      ir = [5e-4 / 94, 125e-7, 5e-4 / 18],
      yr = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((YY => {
        let [rY, DY] = YY;
        return .434 * ur * Math.pow(2 * ur / rY, 2) * DY
      }));

    function Qr(YY, rY, DY) {
      const {
        up: FY,
        mieDirectionalG: AY
      } = YY, IY = 1 - Er(1 - Math.exp(rY[1] / 45e4), 0, 1), RY = YY.rayleigh - (1 - IY), OY = Math.hypot(rY[0], rY[1], rY[2]), gY = OY > 0 ? 1 / OY : 0, aY = DY.sunDir;
      for (let iY = 0; iY < 3; iY++) aY[iY] = rY[iY] * gY;
      const vY = aY[0] * FY[0] + aY[1] * FY[1] + aY[2] * FY[2],
        uY = 1e3 * Math.max(0, 1 - Math.exp(-(sr - Math.acos(Er(vY, -1, 1))) / 1.5));
      DY.sunE = uY;
      const sY = .2 * YY.turbidity * 1e-17 * YY.mieCoefficient;
      for (let iY = 0; iY < 3; iY++) {
        const YY = ir[iY] * RY,
          rY = yr[iY] * sY,
          FY = uY / (YY + rY);
        DY.inScatterR[iY] = YY * FY, DY.inScatterM[iY] = rY * FY, DY.extinctionBeta[iY] = 8400 * YY + 1250 * rY
      }
      return DY.sunsetMix = Er(Math.pow(1 - vY, 5), 0, 1), DY.sunDiscE = 19e3 * uY, DY.mieScale = (1 - AY * AY) / (4 * ur), DY.mieBase = 1 + AY * AY, DY.mieSlope = 2 * AY, DY
    }
    const or = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const Wr = 1 / function(YY) {
      const {
        A: rY,
        B: DY,
        C: FY,
        D: AY,
        E: IY,
        F: RY
      } = or;
      return (YY * (rY * YY + FY * DY) + AY * IY) / (YY * (rY * YY + DY) + AY * RY) - IY / RY
    }(1e3);

    function Er(YY, rY, DY) {
      return Math.min(Math.max(YY, rY), DY)
    }
    const mr = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Vr(YY, rY) {
      const DY = new Map(rY),
        FY = [],
        AY = [],
        IY = () => 0 === AY.length || AY[AY.length - 1].active;
      let RY = null;
      const OY = () => {
        const YY = [...DY].filter((YY => {
            let [, rY] = YY;
            return !0 !== rY
          })),
          rY = YY.map((YY => {
            let [rY] = YY;
            return rY
          })).join("|");
        RY = YY.length ? new RegExp(`\\b(${rY})\\b`, "g") : null
      };
      OY();
      for (const gY of YY.split("\n")) {
        const YY = mr.exec(gY);
        if (!YY) {
          IY() && FY.push(RY ? Sr(gY, RY, DY) : gY);
          continue
        }
        const rY = YY[1],
          aY = YY[2].trim();
        if ("ifdef" === rY || "ifndef" === rY || "if" === rY) {
          const YY = IY(),
            FY = "if" === rY ? lr(aY, DY) : DY.has(aY) === ("ifdef" === rY);
          AY.push({
            active: YY && FY,
            parentActive: YY,
            taken: FY
          })
        } else if ("elif" === rY || "else" === rY) {
          const YY = AY[AY.length - 1];
          if (!YY) throw new Error(`#${rY} without #if`);
          const FY = !YY.taken && ("else" === rY || lr(aY, DY));
          YY.active = YY.parentActive && FY, YY.taken = YY.taken || FY
        } else if ("endif" === rY) {
          if (!AY.pop()) throw new Error("#endif without #if")
        } else if (IY()) {
          const [YY, ...FY] = aY.split(/\s+/);
          "undef" === rY ? DY.delete(YY) : DY.set(YY, !FY.length || FY.join(" ")), OY()
        }
      }
      if (AY.length) throw new Error("Unterminated #if");
      return FY.join("\n")
    }

    function Sr(YY, rY, DY) {
      return YY.replace(rY, (YY => {
        const rY = DY.get(YY);
        return "string" === typeof rY ? rY : YY
      }))
    }

    function lr(YY, rY) {
      var DY;
      const FY = null !== (DY = YY.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== DY ? DY : [];
      let AY = 0;
      const IY = () => FY[AY],
        RY = () => FY[AY++],
        OY = YY => {
          const DY = /^\d/.test(YY) ? YY : rY.get(YY);
          return "string" === typeof DY ? parseInt(DY) : Number.NaN
        },
        gY = () => {
          const YY = RY();
          if ("!" === YY) return !gY();
          if ("(" === YY) {
            const YY = vY();
            return RY(), YY
          }
          if ("defined" === YY) {
            const YY = "(" === IY();
            YY && RY();
            const DY = RY();
            return YY && RY(), rY.has(DY)
          }
          const DY = IY();
          if ("==" === DY || "!=" === DY || ">" === DY || "<" === DY || ">=" === DY || "<=" === DY) {
            RY();
            const rY = OY(YY),
              FY = OY(RY());
            if (Number.isNaN(rY) || Number.isNaN(FY)) return !1;
            switch (DY) {
              case "==":
                return rY === FY;
              case "!=":
                return rY !== FY;
              case ">":
                return rY > FY;
              case "<":
                return rY < FY;
              case ">=":
                return rY >= FY;
              default:
                return rY <= FY
            }
          }
          return rY.has(YY)
        },
        aY = () => {
          let YY = gY();
          for (;
            "&&" === IY();) {
            RY();
            const rY = gY();
            YY = YY && rY
          }
          return YY
        },
        vY = () => {
          let YY = aY();
          for (;
            "||" === IY();) {
            RY();
            const rY = aY();
            YY = YY || rY
          }
          return YY
        },
        uY = vY();
      if (AY !== FY.length) throw new Error(`Cannot evaluate #if ${YY}`);
      return uY
    }
    var Tr = DY(36460),
      er = DY(36779),
      Nr = DY(36787),
      Br = DY(39986),
      cr = DY(38106);
    const Kr = 32,
      Hr = [10, 3, 10],
      zr = [21, 7, 21],
      Zr = zr[0] * zr[1] * zr[2],
      Cr = 0,
      fr = 1,
      jr = 2,
      hr = 3,
      dr = 64,
      Jr = 512,
      Mr = 4 * Zr,
      wr = 1536,
      br = Mr + Zr * wr,
      Xr = 1073741824,
      qr = br + 1;

    function pr(YY, rY) {
      const DY = YY % rY;
      return DY < 0 ? DY + rY : DY
    }

    function kr(YY, rY, DY) {
      return FY = pr(YY, zr[0]), AY = pr(rY, zr[1]), IY = pr(DY, zr[2]), FY + zr[0] * (AY + zr[1] * IY);
      var FY, AY, IY
    }

    function Gr(YY, rY, DY) {
      return YY + 8 * (rY + 8 * DY)
    }

    function xr(YY, rY, DY) {
      return YY + 4 * (rY + 4 * DY)
    }
    const nr = 65535,
      Pr = 0,
      Ur = 1,
      Lr = 2,
      tr = 3;

    function YD(YY) {
      return Math.ceil(YY * YY / 32)
    }
    const rD = 8192,
      DD = 1 << 18,
      FD = 65536,
      AD = 294912,
      ID = 128,
      RD = 4096,
      OD = 16,
      gD = 16385,
      aD = 81921,
      vD = 147457,
      uD = 4194304;
    const sD = [0, 0, 0],
      iD = [0, 0, 0];

    function yD(YY, rY, DY, FY) {
      ! function(YY, rY, DY) {
        const [FY, AY, IY] = [YY[0], YY[1], YY[2]];
        let RY, OY, gY;
        Math.abs(AY) < .99 ? (RY = IY, OY = 0, gY = -FY) : (RY = -AY, OY = FY, gY = 0);
        const aY = Math.hypot(RY, OY, gY);
        rY[0] = RY / aY, rY[1] = OY / aY, rY[2] = gY / aY, DY[0] = AY * rY[2] - IY * rY[1], DY[1] = IY * rY[0] - FY * rY[2], DY[2] = FY * rY[1] - AY * rY[0]
      }(FY, sD, iD);
      const AY = 1 / 32;
      for (const [IY, RY] of [
          [0, sD],
          [4, iD]
        ]) {
        for (let DY = 0; DY < 3; DY++) YY[rY + IY + DY] = RY[DY] * AY;
        YY[rY + IY + 3] = -(RY[0] * DY[0] + RY[1] * DY[1] + RY[2] * DY[2]) * AY
      }
    }
    class QD {
      constructor() {
        this.words = new Uint32Array(vD), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Ei(YY, rY) {
        this.parts = 0, this.refs = 0, this.view = YY, this.viewAt = rY;
        const DY = YY[rY + 1] * YY[rY + 6] - YY[rY + 2] * YY[rY + 5],
          FY = YY[rY + 2] * YY[rY + 4] - YY[rY] * YY[rY + 6],
          AY = YY[rY] * YY[rY + 5] - YY[rY + 1] * YY[rY + 4],
          IY = Math.hypot(DY, FY, AY) || 1;
        this.light[0] = DY / IY, this.light[1] = FY / IY, this.light[2] = AY / IY
      }
      add(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= RD || ! function(YY, rY, DY) {
            const FY = YY[rY],
              AY = YY[rY + 1],
              IY = YY[rY + 2],
              RY = YY[rY + 3],
              OY = YY[rY + 4],
              gY = YY[rY + 5],
              aY = YY[rY + 6],
              vY = YY[rY + 7],
              uY = YY[rY + 8],
              sY = YY[rY + 9],
              iY = YY[rY + 10],
              yY = YY[rY + 11],
              QY = YY[rY + 12],
              oY = YY[rY + 13],
              WY = YY[rY + 14],
              EY = YY[rY + 15],
              mY = FY * gY - AY * OY,
              VY = FY * aY - IY * OY,
              SY = FY * vY - RY * OY,
              lY = AY * aY - IY * gY,
              TY = AY * vY - RY * gY,
              eY = IY * vY - RY * aY,
              NY = uY * oY - sY * QY,
              BY = uY * WY - iY * QY,
              cY = uY * EY - yY * QY,
              KY = sY * WY - iY * oY,
              HY = sY * EY - yY * oY,
              zY = iY * EY - yY * WY,
              ZY = mY * zY - VY * HY + SY * KY + lY * cY - TY * BY + eY * NY;
            if (!(Math.abs(ZY) > 1e-12)) return !1;
            const CY = 1 / ZY;
            return DY[0] = (gY * zY - aY * HY + vY * KY) * CY, DY[1] = (IY * HY - AY * zY - RY * KY) * CY, DY[2] = (oY * eY - WY * TY + EY * lY) * CY, DY[3] = (iY * TY - sY * eY - yY * lY) * CY, DY[4] = (aY * cY - OY * zY - vY * BY) * CY, DY[5] = (FY * zY - IY * cY + RY * BY) * CY, DY[6] = (WY * SY - QY * eY - EY * VY) * CY, DY[7] = (uY * eY - iY * SY + yY * VY) * CY, DY[8] = (OY * HY - gY * cY + vY * NY) * CY, DY[9] = (AY * cY - FY * HY - RY * NY) * CY, DY[10] = (QY * TY - oY * SY + EY * mY) * CY, DY[11] = (sY * SY - uY * TY - yY * mY) * CY, DY[12] = (gY * BY - OY * KY - aY * NY) * CY, DY[13] = (FY * KY - AY * BY + IY * NY) * CY, DY[14] = (oY * VY - QY * lY - WY * mY) * CY, DY[15] = (uY * lY - sY * VY + iY * mY) * CY, !0
          }(rY, DY, this.inverse)) return;
        const {
          view: FY,
          viewAt: AY
        } = this, IY = DY;
        let RY = 1 / 0,
          OY = 1 / 0,
          gY = -1 / 0,
          aY = -1 / 0,
          vY = -1 / 0;
        const [uY, sY, iY] = this.light;
        for (let SY = 0; SY < 8; SY++) {
          const DY = 1 & SY ? YY.hi[0] : YY.lo[0],
            yY = 2 & SY ? YY.hi[1] : YY.lo[1],
            QY = 4 & SY ? YY.hi[2] : YY.lo[2],
            oY = DY * rY[IY] + yY * rY[IY + 4] + QY * rY[IY + 8] + rY[IY + 12],
            WY = DY * rY[IY + 1] + yY * rY[IY + 5] + QY * rY[IY + 9] + rY[IY + 13],
            EY = DY * rY[IY + 2] + yY * rY[IY + 6] + QY * rY[IY + 10] + rY[IY + 14],
            mY = FY[AY] * oY + FY[AY + 1] * WY + FY[AY + 2] * EY + FY[AY + 3],
            VY = FY[AY + 4] * oY + FY[AY + 5] * WY + FY[AY + 6] * EY + FY[AY + 7];
          RY = Math.min(RY, mY), OY = Math.min(OY, VY), gY = Math.max(gY, mY), aY = Math.max(aY, VY), vY = Math.max(vY, uY * oY + sY * WY + iY * EY)
        }
        if (gY < -1 || aY < -1 || RY >= 1 || OY >= 1) return;
        const yY = this.parts++,
          QY = this.rects;
        QY[4 * yY] = oD(RY), QY[4 * yY + 1] = oD(OY), QY[4 * yY + 2] = oD(gY), QY[4 * yY + 3] = oD(aY);
        const oY = this.inverse,
          {
            cell: WY,
            dims: EY,
            lo: mY
          } = YY,
          VY = aD + yY * OD;
        for (let SY = 0; SY < 3; SY++) this.floats[VY + 4 * SY] = oY[SY] / WY, this.floats[VY + 4 * SY + 1] = oY[4 + SY] / WY, this.floats[VY + 4 * SY + 2] = oY[8 + SY] / WY, this.floats[VY + 4 * SY + 3] = (oY[12 + SY] - mY[SY]) / WY;
        this.words[VY + 12] = YY.at, this.floats[VY + 13] = vY + .001 * (1 + Math.abs(vY)), this.words[VY + 14] = EY[0] | EY[1] << 8 | EY[2] << 16
      }
      finish() {
        const YY = ID,
          {
            counts: rY,
            rects: DY,
            words: FY
          } = this;
        rY.fill(0);
        let AY = 0,
          IY = 0;
        for (; IY < this.parts; IY++) {
          const FY = 4 * IY,
            RY = (DY[FY + 2] - DY[FY] + 1) * (DY[FY + 3] - DY[FY + 1] + 1);
          if (AY + RY > 65536) break;
          AY += RY;
          for (let AY = DY[FY + 1]; AY <= DY[FY + 3]; AY++)
            for (let IY = DY[FY]; IY <= DY[FY + 2]; IY++) rY[AY * YY + IY]++
        }
        let RY = 0;
        for (let gY = 0; gY < 16384; gY++) FY[gY] = RY, RY += rY[gY], rY[gY] = FY[gY];
        FY[16384] = RY;
        for (let gY = 0; gY < IY; gY++) {
          const AY = 4 * gY;
          for (let IY = DY[AY + 1]; IY <= DY[AY + 3]; IY++)
            for (let RY = DY[AY]; RY <= DY[AY + 2]; RY++) FY[gD + rY[IY * YY + RY]++] = gY
        }
        const OY = this.floats;
        for (let gY = 0; gY < 16384; gY++) {
          const YY = gD + FY[gY],
            rY = YY + Math.min(FY[gY + 1] - FY[gY], 64);
          for (let DY = YY + 1; DY < rY; DY++) {
            const rY = FY[DY],
              AY = OY[81934 + rY * OD];
            let IY = DY - 1;
            for (; IY >= YY && OY[81934 + FY[IY] * OD] < AY; IY--) FY[IY + 1] = FY[IY];
            FY[IY + 1] = rY
          }
        }
        this.refs = AY
      }
    }

    function oD(YY) {
      return Math.min(127, Math.max(0, Math.floor((.5 * YY + .5) * ID)))
    }

    function WD(YY, rY, DY, FY, AY) {
      for (let IY = 0; IY < 4; IY++)
        for (let RY = 0; RY < 4; RY++) AY[4 * IY + RY] = YY[rY + 4 * IY] * DY[FY + RY] + YY[rY + 4 * IY + 1] * DY[FY + 4 + RY] + YY[rY + 4 * IY + 2] * DY[FY + 8 + RY] + YY[rY + 4 * IY + 3] * DY[FY + 12 + RY]
    }

    function ED(YY, rY, DY, FY, AY) {
      const IY = YY[0] - rY,
        RY = YY[1] - DY,
        OY = YY[2] - FY,
        gY = YY[3] - rY,
        aY = YY[4] - DY,
        vY = YY[5] - FY,
        uY = YY[6] - rY,
        sY = YY[7] - DY,
        iY = YY[8] - FY;
      if (Math.min(IY, gY, uY) > AY || Math.max(IY, gY, uY) < -AY) return !1;
      if (Math.min(RY, aY, sY) > AY || Math.max(RY, aY, sY) < -AY) return !1;
      if (Math.min(OY, vY, iY) > AY || Math.max(OY, vY, iY) < -AY) return !1;
      const yY = gY - IY,
        QY = aY - RY,
        oY = vY - OY,
        WY = uY - gY,
        EY = sY - aY,
        mY = iY - vY,
        VY = QY * mY - oY * EY,
        SY = oY * WY - yY * mY,
        lY = yY * EY - QY * WY;
      if (Math.abs(VY * IY + SY * RY + lY * OY) > AY * (Math.abs(VY) + Math.abs(SY) + Math.abs(lY))) return !1;
      const TY = [yY, QY, oY, WY, EY, mY, IY - uY, RY - sY, OY - iY];
      for (let eY = 0; eY < 3; eY++) {
        const YY = TY[3 * eY],
          rY = TY[3 * eY + 1],
          DY = TY[3 * eY + 2];
        for (let FY = 0; FY < 3; FY++) {
          const yY = 0 === FY ? 0 : 1 === FY ? DY : -rY,
            QY = 0 === FY ? -DY : 1 === FY ? 0 : YY,
            oY = 0 === FY ? rY : 1 === FY ? -YY : 0,
            WY = yY * IY + QY * RY + oY * OY,
            EY = yY * gY + QY * aY + oY * vY,
            mY = yY * uY + QY * sY + oY * iY,
            VY = AY * (Math.abs(yY) + Math.abs(QY) + Math.abs(oY));
          if (Math.min(WY, EY, mY) > VY || Math.max(WY, EY, mY) < -VY) return !1
        }
      }
      return !0
    }
    const mD = new Float32Array(1);
    new Uint32Array(mD.buffer);
    var VD = DY(38111);

    function SD(YY) {
      const [rY, DY, FY] = VD.k;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${YY.group}) @binding(${YY.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${rY-1}, ${DY-1}, ${FY-1});\n}\n`
    }

    function lD(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [AY, IY, RY] = zr, [OY, gY, aY] = Hr, vY = Math.log2(Kr), uY = FY ? "var<private> bloxdSpCrossed: bool;\n" : "", sY = FY ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${YY.group}) @binding(${YY.ls}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${YY.group}) @binding(${YY.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${DY?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${uY}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Ur}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Lr}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${DY?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${tr}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${AY}, ${IY}, ${RY});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${AY} * (s.y + ${IY} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${OY}, ${gY}, ${aY}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${vY}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${hr}u) {\n\t\treturn named && state == ${jr}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${Mr}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${br}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${rY?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${rY?`\t\tif (exits && step > 0 && step % ${ND} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${vY}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${Cr}u || kind == ${fr}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${jr}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${Mr}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${sY}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const TD = {
      group: 0,
      uniform: 0,
      ls: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function eD() {
      const YY = TD;
      return `${SD(YY)}${lD(YY,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${VD.b}>,\n}\n@group(${YY.group}) @binding(${YY.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${YY.group}) @binding(${YY.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${VD.i})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${VD.b}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${VD.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const ND = 2;
    const BD = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function cD(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const FY = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${rY.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        AY = "trace" === DY || "lit" === DY,
        IY = "maskEdge" === DY ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        RY = AY ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${rY.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${rY.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===DY?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${IY};\n`;
      return `${FY}${YY.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${AY?function(){const[YY,rY,DY]=VD.k;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${YY}.0, ${rY}.0, ${DY}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${RY}}\n`:""}${YY.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${rY.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${rY.renderOffset});\n}\n`:""}`
    }
    const KD = "bloxdSpOwnTexture";

    function HD(YY) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${YY.texture}) - 1u)))`
    }
    const zD = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${gr.f.map((YY=>{let[rY,DY]=YY;return`\tbloxdSpOut.${rY} = (bloxdSpWord & ${DY}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function ZD(YY) {
      return `bloxdSpFlags(${YY})`
    }
    const CD = `${Br.i}.eyePosition`;

    function fD(YY, rY, DY, FY, AY) {
      const IY = YY.indexOf(rY);
      if (IY < 0 || YY.indexOf(rY, IY + 1) >= 0) throw new Error(`Lite's ${AY} program changed at the shader pack ${FY} hook: ${IY<0?"no":"more than one"} anchor (lite/${AY}ShaderPack.ts)`);
      return YY.slice(0, IY) + DY + YY.slice(IY + rY.length)
    }

    function jD(YY) {
      return YY.sunShadow || YY.airShadow
    }

    function hD(YY, rY) {
      return rY && jD(YY)
    }
    const dD = {
      group: Br.e,
      ...Br.p
    };

    function JD(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!jD(YY)) return "";
      if (rY) {
        const rY = dD,
          AY = "trace" === DY || "lit" === DY;
        let IY = "";
        YY.sunShadow && (IY = AY ? `${lD(rY,!0,"lit"===DY)}${FY=rY,`@group(${FY.group}) @binding(${FY.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${FY.group}) @binding(${FY.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(YY, rY, DY) {
          const FY = `@group(${YY}) @binding(${rY}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return DY ? `${FY}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${BD}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((YY=>`\t{\n\t\tlet o = vec2i(${YY});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : FY
        }(rY.group, Br.q, "maskEdge" === DY));
        const RY = {
          shadowDirection: `${Br.i}.shadowDirection`,
          renderOffset: `${Br.i}.renderOffset`,
          eyePosition: `${Br.i}.eyePosition`
        };
        return `${SD(rY)}${IY}${function(YY){const[rY,DY,FY]=VD.k;return`@group(${YY.group}) @binding(${YY.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${YY.group}) @binding(${YY.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${rY}.0, ${DY}.0, ${FY}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(rY)}${cD(YY,RY,DY)}`
      }
      var FY;
      return `${YY.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${YY.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function MD(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!rY) return "";
      const IY = (RY = "fragmentInputs.vPositionW", OY = YY.sunShadow ? {
        normal: DY,
        flags: FY
      } : null, `\n\tbloxdSpShadowPosition = ${RY};\n${OY?`\tbloxdSpShadowNormal = normalize(${OY.normal});\n\tbloxdSpShadowEmissive = (${OY.flags} & ${gr.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${OY.flags} & ${gr.g}u) != 0u;\n`:""}`);
      var RY, OY;
      return YY.sunShadow && ("mask" === AY || "maskEdge" === AY) ? `${IY}${gY="fragmentInputs.position",aY="maskEdge"===AY,`\n\tbloxdSpShadowPixel = vec2i(${gY}.xy);\n${aY?`\tbloxdSpShadowZ = ${gY}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${gY}.z), dpdy(${gY}.z));\n`:""}`}` : IY;
      var gY, aY
    }
    const wD = "bloxdSpTextureRotation",
      bD = "bloxdSpTextureLayers",
      XD = `@group(${Br.e}) @binding(${Br.r}) var<storage, read> ${bD}: array<u32>;\n`;

    function qD(YY) {
      return `\tvertexOutputs.vPackTexture = ${bD}[min(u32(${YY}), arrayLength(&${bD}) - 1u)];\n`
    }

    function pD(YY) {
      return void 0 !== YY.uv
    }

    function kD(YY) {
      if (!YY) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (pD(YY)) return function(YY) {
        const {
          texture: rY,
          cells: DY,
          layers: FY
        } = YY, AY = `textureDimensions(${rY}, bloxdSpLevel)`, IY = DY ? `max(vec2u(vec2f(${AY}) / ${DY}), vec2u(1u))` : AY, RY = DY ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${IY};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${DY}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${DY}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${rY}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${AY} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${IY};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${rY}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let OY;
        if (DY)
          if (1 === FY.length) OY = `\treturn bloxdSpOwnTexel(${FY[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const YY = FY.length - 1;
            OY = `\tvar bloxdSpColour = bloxdSpOwnTexel(${FY[YY]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let rY = YY - 1; rY >= 0; rY--) OY += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${FY[rY]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            OY += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else OY = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${YY.id?`var<private> ${KD}: u32;\n`:""}${RY}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${HD(YY)};\n\treturn ${IY};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${YY.id?KD:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${HD(YY)};\n${OY}}\n`
      }(YY);
      const rY = YY,
        DY = YY => {
          const DY = YY > 0 ? `bloxdSpLayer - ${rY.layers*YY}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${YY}, ${rY.sampler}, bloxdSpTurned, ${DY}, round(bloxdSpMipLevel));`
        };
      let FY = "";
      for (let IY = 0; IY < rY.count - 1; IY++) FY += `\tif (bloxdSpLayer < ${rY.layers*(IY+1)}u) {\n\t\t${DY(IY)}\n\t}\n`;
      const AY = rY.frame ? `${rY.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${wD}: u32;\n${XD}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${wD} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${wD} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${wD} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${AY}${FY}\t${DY(rY.count-1)}\n}\n`
    }

    function GD(YY, rY, DY) {
      return !!YY.surface && "bloxdDefaultSurface" !== YY.surface && function(YY, rY) {
        return "liquid" === rY || !YY
      }(rY, DY)
    }

    function xD(YY, rY) {
      return YY.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${rY.vertexLocalPosition}, ${ZD(rY.vertexFlags)});\n\t\tlet bloxdSpVertex = ${YY.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function nD(YY, rY, DY, FY, AY) {
      if (!YY.surface) return "";
      const IY = (YY, rY) => `\n\tlet bloxdSpTexelUV = ${YY};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${rY}) - 1u));`;
      let RY = "",
        OY = "0u, 0u, vec2f(0.0), 0.0";
      const gY = FY && pD(FY) ? FY : null,
        aY = FY && !pD(FY) ? FY : null;
      if (gY) {
        RY = `${gY.id?`\n\tlet bloxdSpTexture = ${gY.id};\n\t${KD} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${gY.uv};${IY(function(YY,rY){var DY;return`${null!==(DY=YY.levelUv)&&void 0!==DY?DY:YY.cells?`${rY} / ${YY.cells}`:rY} * vec2f(textureDimensions(${YY.texture}))`}(gY,"bloxdSpUv"),gY.texture)}`, OY = (gY.id ? `${KD}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else aY && (RY = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${wD} = bloxdSpTexture >> 16u;${IY(`fragmentInputs.vMainUV1 * ${(0,Tr.lb)(aY.width)}`,"textureAtlas0")}`, OY = `bloxdSpTexture & 0xffffu, ${wD}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const vY = AY.overlayColour,
        uY = vY ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        sY = "bloxdDefaultSurface" !== YY.surface || vY ? `\n\tbaseColor = vec4f(${uY}, baseColor.a);` : "",
        iY = GD(YY, rY, DY) ? `\n\t${AY.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${RY}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${AY.alpha}, ${AY.enchantTier}, ${AY.enchantColour}, ${AY.enchantSpeed}, ${null!==vY&&void 0!==vY?vY:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${AY.normal}, ${AY.localPosition}, ${ZD(AY.flags)}, ${OY});\n\tlet bloxdSpSurface = ${YY.surface}(bloxdSpSurfaceIn);${sY}${iY}\n`
    }
    const PD = "bloxdSpLightIn";

    function UD(YY, rY, DY, FY) {
      if (!YY.light) return "";
      const AY = rY ? `${Tr.l}.rgb, ${Tr.l}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Tr.i}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: IY,
          diffuse: RY,
          emissive: OY,
          ambient: gY,
          fogColour: aY,
          fogAlpha: vY,
          normal: uY
        } = FY;
      return `\tvar ${PD} = BloxdLightIn(vec3f(0.0), ${DY?IY:"0.0"}, ${RY}, ${OY}, ${gY}, ${AY}, ${aY}, ${vY}, fragmentInputs.vPositionW, ${uY}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${PD}.litColour = bloxdLitColour(bloxdSpSurface, ${PD});\n`
    }

    function LD(YY) {
      return YY.light ? `\n\t{\n\t\tlet bloxdSpLight = ${YY.light}(bloxdSpSurface, ${PD});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const tD = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      YF = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      rF = "\treturn color;\n}",
      DF = {
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

    function AF(YY) {
      var rY;
      return !(null === (rY = (0, cr.g)(YY)) || void 0 === rY || !rY.sceneDepth)
    }

    function IF(YY) {
      const rY = (0, cr.g)(YY);
      return !!rY && GD(rY.hooks, rY.strict, rY.program)
    }

    function RF(YY, rY, DY, FY) {
      return fD(YY, rY, DY, FY, "terrain")
    }

    function OF(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const IY = function(YY) {
          return (0, cr.c)(YY.packVariant, YY.liquid ? "liquid" : "terrain")
        }(YY),
        {
          hooks: RY
        } = IY,
        OY = hD(IY, FY),
        gY = "edge" === AY ? "maskEdge" : "plain" === AY ? "mask" : "trace",
        aY = xD(RY, DF);
      aY && (rY = RF(rY, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${aY}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const vY = "atlas" === YY.texture ? {
          count: YY.atlasCount,
          layers: YY.atlasLayers,
          width: YY.WG,
          sampler: "atlasSampler",
          frame: YY.animated ? DY : null
        } : null,
        uY = `${IY.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${MD(IY,OY,DF.normal,DF.flags,gY)}${nD(RY,IY.strict,IY.program,vY,DF)}`;
      uY && (rY = RF(rY, tD, `${tD.slice(0,-1)}${uY}`, "surface"));
      const sY = LD(RY);
      return sY && (rY = RF(rY, YF, `${UD(RY,YY.lighting,YY.dirLightCount>0,DF)}${YF}`, "light input"), rY = RF(rY, rF, `${sY.slice(1)}${rF}`, "light")), `${(0,Br.x)()}${IY.sceneDepth?`@group(${Br.e}) @binding(${Br.o}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${CD};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${JD(IY,OY,gY)}${kD(vY)}${zD}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${IY.code}${rY}`
    }
    const gF = lY.e.WGSL;

    function aF(YY) {
      return void 0 !== YY.packVariant
    }
    const vF = {
        IFY: 0,
        RFY: 4,
        OFY: 8,
        gFY: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      uF = vF.aoLevels + 4,
      sF = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      iF = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      yF = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      QF = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      oF = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      WF = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      EF = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      mF = 0,
      VF = 3,
      SF = 4,
      lF = 5,
      TF = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${er.c}, ${er.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${er.c}, ${er.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      eF = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((YY=>Nr.e>>YY&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const NF = {
      Zu: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: YY => `animDataPerTex[${YY}]`
    };

    function BF(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NF;
      return `\n\tlet atlasIdxIn = ${YY};\n\tlet animTick = ${DY.Zu};\n\tlet animTickStride = ${DY.stride};\n\tlet numAnimTextures = ${DY.count};\n\t${(0,TY.e)(lY.e.WGSL,DY.perTexture)}\n\t${rY}animLayer;\n`
    }

    function cF(YY) {
      const rY = (rY, DY) => {
        const FY = rY > 0 ? `fragmentInputs.texAtlasIndex - ${YY.atlasLayers.toFixed(1)} * ${rY.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${DY?"textureSampleLevel":"textureSample"}(textureAtlas${rY}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${FY}))${DY?", atlasLod":""})`
      };
      if (1 === YY.atlasCount) return `baseColor = ${rY(0,!1)};`;
      let DY = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Tr.lb)(YY.WG)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let FY = 0; FY < YY.atlasCount; FY++) {
        const AY = YY.atlasLayers * (FY + 1) - .5;
        DY += `${FY>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Tr.lb)(AY)}) {\n\t\tbaseColor = ${rY(FY,!0)};\n\t}`
      }
      return DY
    }

    function KF(YY) {
      return `terrain-${YY.texture}${"atlas"===YY.texture?YY.atlasCount:""}${YY.animated?"-anim":""}${YY.alphaTest?"-test":""}${YY.lighting?"-lit":""}-dir${YY.dirLightCount}${YY.packed?"-packed":""}${aF(YY)?`-sp${YY.packVariant}`:""}${YY.liquid?"-liquid":""}${YY.resting?"-rest":""}`
    }

    function HF(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const FY = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const DY = "none" !== YY.texture,
          FY = "atlas" === YY.texture,
          AY = YY.dirLightCount > 0,
          IY = aF(YY);
        if (YY.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${YY.dirLightCount}`);
        let RY = 1,
          OY = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (FY) {
          YY.animated && (OY += `@group(2) @binding(${RY++}) var<storage, read> animDataPerTex: array<f32>;\n`), OY += `@group(2) @binding(${RY++}) var atlasSampler: sampler;\n`;
          for (let rY = 0; rY < YY.atlasCount; rY++) OY += `@group(2) @binding(${RY++}) var textureAtlas${rY}: texture_2d_array<f32>;\n`
        } else "single" === YY.texture && (OY += `@group(2) @binding(${RY++}) var diffuseSamplerSampler: sampler;\n`, OY += `@group(2) @binding(${RY++}) var diffuseSampler: texture_2d<f32>;\n`);
        const gY = function(YY) {
            const rY = EF,
              DY = "none" !== YY.texture,
              FY = "atlas" === YY.texture,
              AY = aF(YY);
            return YY.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${DY?"uv: vec2f,":""}\n\t${FY?"texAtlasIndices: f32,":""}\n\t${YY.lighting?"aPackedLightLevels: f32,":""}\n\t${AY?"blockFlagWords: vec2u,":""}\n}\n${TF}\n${eF}\n${"single"===YY.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${DY?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===YY.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${FY?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${YY.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${AY?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${rY.position}) position: vec3f,\n\t@location(${rY.normal}) normal: vec4f,\n\t@location(${rY.color}) color: vec4f,\n\t${DY?`@location(${rY.uv}) uv: vec2f,`:""}\n\t${YY.lighting?`@location(${rY.packedLight}) aPackedLightLevels: f32,`:""}\n\t${AY?`@location(${rY.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(YY),
          aY = `\n${QF}\n${iF}\n${yF}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${OY}\n${nY}\n${gY.declarations}\nstruct Varyings {\n\t${"none"===rY?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${YY.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${AY?"@location(5) vTerrainLambert: f32,":""}\n\t${DY?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${FY?"@location(7) texAtlasIndex: f32,":""}\n\t${YY.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${IY?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${IY&&FY?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${YY.resting?"":(0,Tr.r)(gF)}\n${WF}\n\n@vertex\nfn mainVertex(${gY.parameter}) -> Varyings {\n\t${gY.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${IY?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${gr.b.placed}u;`:""}\n\t${IY&&FY?qD("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${YY.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${DY?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${FY?function(YY){return YY?BF("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(YY.animated):""}\n\t${"single"===YY.texture&&YY.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Tr._)(gF)}\n\t${(0,Tr.F)(gF,YY.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${YY.resting?"":oF}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${FY?cF(YY):""}\n\t${"single"===YY.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${DY?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${YY.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${AY?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${xY}));\n\t${aF(YY)?(0,Tr.fb)(lY.e.WGSL):(0,Tr.P)(gF)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          vY = new Set;
        YY.lighting && vY.add("BLOXD_LIGHTING");
        AY && vY.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Vr(aY, new Map([...vY].map((YY => [YY, !0]))))
      }(YY, DY);
      if (!aF(YY)) return FY;
      const AY = OF(YY, FY, BF, rY, DY);
      return "none" === DY ? AY : `${AY}${function(YY){const rY="none"!==YY.texture&&YY.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${YY.resting?"":oF}\n\t${YY.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${rY&&"atlas"===YY.texture?cF(YY):""}\n\t${rY&&"single"===YY.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${rY?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${gr.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(YY)}`
    }
    const zF = new Map([
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

    function ZF(YY, rY) {
      const DY = new Map;
      let FY = 0;
      const AY = [],
        IY = [],
        RY = [];
      for (const aY of rY) {
        var OY, gY;
        const rY = null !== (OY = aY.type.trim().split(/\s+/).pop()) && void 0 !== OY ? OY : aY.type,
          vY = zF.get(rY);
        if (!vY) throw new Error(`Lite: no uniform layout for ${aY.name}: ${aY.type}`);
        const uY = null !== (gY = aY.arraySize) && void 0 !== gY ? gY : 0,
          sY = uY ? 4 : vY.align;
        FY = Math.ceil(FY / sY) * sY;
        const iY = uY ? 4 * Math.ceil(vY.floats / 4) : vY.floats;
        if (DY.set(aY.name, {
            offset: FY,
            floats: vY.floats,
            arraySize: uY,
            stride: iY
          }), uY && vY.floats <= 2) {
          const rY = `${YY}_${RY.length}_strided`;
          IY.push(`struct ${rY} {\n\t@size(16) el: ${vY.wgsl},\n}`), RY.push(aY.name), AY.push(`\t@align(16) ${aY.name}: array<${rY}, ${uY}>,`)
        } else uY ? AY.push(`\t@align(16) ${aY.name}: array<${vY.wgsl}, ${uY}>,`) : AY.push(`\t${aY.name}: ${vY.wgsl},`);
        FY += uY ? iY * uY : vY.floats
      }
      return {
        slots: DY,
        floats: Math.max(4, 4 * Math.ceil(FY / 4)),
        wgsl: `${IY.join("\n")}\nstruct ${YY} {\n${AY.join("\n")}\n}\n`,
        stridedArrays: RY
      }
    }
    const CF = [{
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
      fF = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      jF = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function hF(YY, rY) {
      return `#if defined(${YY}) && ${YY}DIRECTUV == 0\nvarying v${rY}UV: vec2f;\n#endif`
    }

    function dF(YY, rY, DY) {
      return `#if defined(${YY}) && ${YY}DIRECTUV == 0\nif (uniforms.v${rY}Infos.x==0.)\n{vertexOutputs.v${rY}UV= (uniforms.${DY}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${rY}UV= (uniforms.${DY}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function JF(YY, rY, DY) {
      return `#ifdef ${YY}\n#if ${YY}DIRECTUV == 1\n#define v${rY}UV vMainUV1\n#elif ${YY}DIRECTUV == 2\n#define v${rY}UV vMainUV2\n#else\nvarying v${rY}UV: vec2f;\n#endif\nvar ${DY}SamplerSampler: sampler;\nvar ${DY}Sampler: texture_2d<f32>;\n#endif`
    }
    const MF = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      wF = 256,
      bF = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      XF = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      qF = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      pF = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      kF = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      GF = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      xF = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      nF = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${XF}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${hF("OPACITY","Opacity")}\n${hF("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${xF}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${qF}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${dF("OPACITY","Opacity","opacity")}\n${dF("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${pF}\n#define CUSTOM_VERTEX_MAIN_END\n${kF}\n}\n`;
    const PF = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${JF("OPACITY","Opacity","opacity")}\n${JF("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${xF}\n${GF}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((YY,rY)=>function(YY){const rY=`
    frame.lights[LITE_LIGHT$ {
        YY
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      YY
    }\
    nvar diffuse$ {
      YY
    }: vec4f = $ {
      rY
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      YY
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      rY
    }.vLightData, diffuse$ {
      YY
    }.rgb, $ {
      rY
    }.vLightSpecular.rgb, diffuse$ {
      YY
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(rY))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, UF = /^([gimus]+)!/, LF = new Set;

    function tF(YY) {
      LF.has(YY) || (LF.add(YY), console.warn(`Lite: no place for plugin code at ${YY} in the standard shader: it is left out`))
    }

    function YA(YY, rY) {
      let DY = YY;
      const FY = new Map;
      for (const [IY, RY] of rY) {
        var AY;
        FY.set(IY, `${null!==(AY=FY.get(IY))&&void 0!==AY?AY:""}${RY}\n`)
      }
      for (const [IY, RY] of FY) {
        if (!IY.startsWith("!")) {
          const YY = `#define ${IY}`;
          if (!DY.includes(YY)) {
            tF(IY);
            continue
          }
          DY = DY.replace(YY, (() => `\n${RY}\n${YY}`));
          continue
        }
        let YY = IY.substring(1),
          rY = "g";
        if (YY.startsWith("!")) rY = "", YY = YY.substring(1);
        else {
          const DY = UF.exec(YY);
          DY && (rY = DY[1], YY = YY.substring(rY.length + 1))
        }
        const FY = new RegExp(YY, rY.includes("g") ? rY : `${rY}g`);
        let AY = FY.exec(DY);
        for (AY || tF(IY); AY;) {
          const YY = AY,
            rY = RY.replace(/\$(\d+)/g, ((rY, DY) => Number(DY) < YY.length ? YY[Number(DY)] : ""));
          DY = DY.substring(0, YY.index) + rY + DY.substring(YY.index + YY[0].length), FY.lastIndex = YY.index + rY.length, AY = FY.exec(DY)
        }
      }
      return DY
    }
    const rA = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      DA = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      FA = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function AA(YY) {
      const rY = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let DY = YY.replace(rA, ((YY, DY, FY, AY, IY, RY) => ("attribute" === DY ? rY.attributes.push({
        name: IY,
        type: RY
      }) : void 0 === DY ? rY.varyings.push({
        name: IY,
        type: RY,
        interpolation: RA(RY, FY, AY)
      }) : rY.uniforms.push({
        name: IY,
        type: IA(RY)
      }), "")));
      return DY = DY.replace(DA, ((YY, DY) => (rY.samplers.add(DY), ""))), DY = DY.replace(FA, ((YY, DY, FY) => (rY.textures.push({
        name: DY,
        type: FY
      }), ""))), rY.body = DY, rY
    }

    function IA(YY) {
      const rY = YY.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        DY = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(rY);
      if (!DY) throw new Error(`Lite: unsupported uniform type ${YY}`);
      return DY
    }

    function RA(YY, rY, DY) {
      return void 0 === rY && void 0 === DY ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(YY.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === rY ? "@interpolate(flat) " : `@interpolate(${null!==rY&&void 0!==rY?rY:"perspective"}, ${null!==DY&&void 0!==DY?DY:"center"}) `
    }

    function OA(YY) {
      return uA({
        defines: YY.defines,
        vertex: YA(nF, YY.vertexCode),
        fragment: YA(PF, YY.fragmentCode),
        members: [...CF, ...YY.defines.has("OPACITY") ? fF : [], ...YY.defines.has("EMISSIVE") ? jF : [], ...YY.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function gA(YY) {
      const rY = YY.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (rY === YY) throw new Error("Lite: fragment main has no return");
      return rY
    }
    const aA = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${XF}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${qF}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${pF}\n${kF}\n}\n`,
      vA = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${GF}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function uA(YY) {
      const rY = YY.defines,
        DY = AA(Vr(YY.vertex, rY)),
        FY = AA(Vr(YY.fragment, rY)),
        AY = new Map;
      for (const mY of [...DY.varyings, ...FY.varyings]) AY.has(mY.name) || AY.set(mY.name, mY);
      const IY = [...AY.values()].map(((YY, rY) => `\t@location(${rY}) ${YY.interpolation}${YY.name}: ${YY.type},`)),
        RY = [...YY.members];
      for (const mY of [...DY.uniforms, ...FY.uniforms]) RY.some((YY => YY.name === mY.name)) || RY.push(mY);
      const OY = ZF(YY.structName, RY),
        gY = [],
        aY = [];
      let vY = 1;
      const uY = new Set;
      for (const mY of [...DY.textures, ...FY.textures]) {
        if (uY.has(mY.name)) continue;
        uY.add(mY.name);
        const YY = `${mY.name}Sampler`,
          rY = vY++,
          DY = vY++,
          FY = mY.type.startsWith("texture_2d_array") ? "2d-array" : mY.type.startsWith("texture_cube") ? "cube" : "2d";
        gY.push({
          name: mY.name,
          binding: rY,
          samplerBinding: DY,
          dimension: FY
        }), aY.push(`@group(2) @binding(${rY}) var ${mY.name}: ${mY.type};`), aY.push(`@group(2) @binding(${DY}) var ${YY}: sampler;`)
      }
      for (const mY of [...DY.samplers, ...FY.samplers])
        if (!uY.has(mY.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${mY} has no texture`);
      const sY = [QF, bF, OY.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${YY.structName};`, ...aY].join("\n"),
        iY = DY.attributes,
        yY = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...DY.attributes.map(((YY, rY) => `\t@location(${rY}) ${YY.name}: ${YY.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        QY = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...IY, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        oY = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...FY.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...IY, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", nY, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${xY}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        WY = YY => {
          for (const rY of OY.stridedArrays) YY = YY.replace(new RegExp(`\\b${rY}\\s*\\[(.*?)\\]`, "g"), `${rY}[$1].el`);
          return YY
        };
      return {
        vertex: `${sY}\n${yY}\n${QY}\n${WY(DY.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${sY}\n${oY}\n${gA((EY=WY(FY.body),EY.includes("fragmentInputs.position")?EY.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):EY))}`,
        attributes: iY,
        material: OY,
        textures: gY
      };
      var EY
    }
    const sA = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      iA = YY => ({
        name: YY,
        type: "vec3"
      }),
      yA = YY => ({
        name: YY,
        type: "float"
      }),
      QA = ZF("EarthSkyUniforms", [iA("viewFrom"), yA("exposureScale"), iA("zenithOffset"), yA("fogOn"), iA("up"), yA("ditherOn"), iA("sun"), yA("turbidity"), iA("tint"), yA("rayleigh"), iA("sunDir"), yA("mieStrength"), iA("inScatterR"), yA("mieFocus"), iA("inScatterM"), yA("sunE"), iA("extinctionBeta"), yA("sunsetMix"), yA("mieScale"), yA("mieBase"), yA("mieSlope"), yA("sunDiscE"), yA("exposure")]),
      oA = `${QF}\n${bF}\n${QA.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      WA = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${sA.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      EA = `\n${nY}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(or).map((YY=>{let[rY,DY]=YY;return`const TONE_${rY}: f32 = ${DY};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${Wr};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${xY}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var mA = DY(36518);
    const VA = new mA.xy,
      SA = new mA.xy,
      lA = new mA.Quaternion,
      TA = new Float64Array(3),
      eA = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      NA = new Float64Array(16);

    function BA(YY, rY, DY) {
      const FY = DY.worldMatrix;
      var AY;
      YY.updateFloat3("viewFrom", FY[12], FY[13], FY[14]), YY.updateFloatsFrom("zenithOffset", rY.cameraOffset, 0, 3), YY.updateFloatsFrom("up", rY.up, 0, 3), rY.luminance > 0 && (YY.updateFloat("exposure", rY.luminance), YY.updateFloat("exposureScale", (AY = rY.luminance, Math.log2(2 / Math.pow(AY, 4))))), YY.updateFloat("turbidity", rY.turbidity), YY.updateFloat("rayleigh", rY.rayleigh), YY.updateFloat("mieStrength", rY.mieCoefficient), YY.updateFloat("mieFocus", rY.mieDirectionalG), YY.updateFloatsFrom("tint", rY.tint, 0, 3), YY.updateFloat("fogOn", rY.fog && DY.fogEnabled && 0 !== DY.fogMode ? 1 : 0), YY.updateFloat("ditherOn", rY.dithering ? 1 : 0);
      const IY = rY.sunPosition;
      if (VA.set(IY[0], IY[1], IY[2]), !rY.useSunPosition) {
        const YY = Math.PI * (rY.inclination - .5),
          DY = 2 * Math.PI * (rY.azimuth - .5);
        VA.set(rY.distance * Math.cos(DY) * Math.cos(YY), rY.distance * Math.sin(-YY), rY.distance * Math.sin(DY) * Math.cos(YY)), mA.Quaternion.FromUnitVectorsToRef(mA.xy.UpReadOnly, SA.set(rY.up[0], rY.up[1], rY.up[2]), lA), VA.rotateByQuaternionToRef(lA, VA)
      }
      YY.updateVector3("sun", VA), TA[0] = VA.x, TA[1] = VA.y, TA[2] = VA.z;
      const RY = Qr(rY, TA, eA);
      YY.updateFloatsFrom("sunDir", RY.sunDir, 0, 3), YY.updateFloat("sunE", RY.sunE), YY.updateFloatsFrom("inScatterR", RY.inScatterR, 0, 3), YY.updateFloatsFrom("inScatterM", RY.inScatterM, 0, 3), YY.updateFloatsFrom("extinctionBeta", RY.extinctionBeta, 0, 3), YY.updateFloat("sunsetMix", RY.sunsetMix), YY.updateFloat("sunDiscE", RY.sunDiscE), YY.updateFloat("mieScale", RY.mieScale), YY.updateFloat("mieBase", RY.mieBase), YY.updateFloat("mieSlope", RY.mieSlope)
    }

    function cA(YY, rY) {
      const DY = NA;
      DY[0] = rY.far, DY[5] = rY.far, DY[10] = rY.far, DY[15] = 1;
      const FY = YY.infiniteDistance;
      for (let AY = 0; AY < 3; AY++) DY[12 + AY] = YY.position[AY] + (FY ? rY.worldMatrix[12 + AY] : 0);
      return NA
    }
    var KA = DY(38075);

    function HA(YY) {
      return Math.max(4, 4 * Math.ceil(YY / 4))
    }

    function zA(YY, rY, DY, FY) {
      const AY = YY.createBuffer({
        label: FY,
        size: HA(rY.byteLength),
        usage: DY,
        mappedAtCreation: !0
      });
      return new Uint8Array(AY.getMappedRange(), 0, rY.byteLength).set(new Uint8Array(rY.buffer, rY.byteOffset, rY.byteLength)), AY.unmap(), AY
    }

    function ZA(YY, rY) {
      return Math.floor(Math.log2(Math.max(YY, rY))) + 1
    }

    function CA(YY, rY, DY, FY, AY, IY) {
      const RY = YY.createTexture({
          label: IY,
          size: {
            width: DY,
            height: FY,
            depthOrArrayLayers: AY
          },
          format: "rgba8unorm",
          mipLevelCount: ZA(DY, FY),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        OY = (rY, DY, FY, IY) => {
          YY.queue.writeTexture({
            texture: RY,
            mipLevel: DY
          }, rY, {
            bytesPerRow: 4 * FY,
            rowsPerImage: IY
          }, {
            width: FY,
            height: IY,
            depthOrArrayLayers: AY
          })
        };
      OY(rY, 0, DY, FY);
      let gY = 1;
      for (const aY of function*(YY, rY, DY, FY) {
          let AY = YY,
            IY = rY,
            RY = DY;
          for (; IY > 1 || RY > 1;) {
            const YY = Math.max(1, IY >> 1),
              rY = Math.max(1, RY >> 1),
              DY = new Uint8Array(YY * rY * FY * 4),
              OY = 4 * IY;
            let gY = 0;
            for (let aY = 0; aY < FY; aY++) {
              const FY = aY * OY * RY;
              for (let aY = 0; aY < rY; aY++) {
                const rY = FY + Math.min(2 * aY, RY - 1) * OY,
                  vY = FY + Math.min(2 * aY + 1, RY - 1) * OY;
                for (let FY = 0; FY < YY; FY++) {
                  const YY = 4 * Math.min(2 * FY, IY - 1),
                    RY = 4 * Math.min(2 * FY + 1, IY - 1);
                  for (let FY = 0; FY < 4; FY++) DY[gY++] = AY[rY + YY + FY] + AY[rY + RY + FY] + AY[vY + YY + FY] + AY[vY + RY + FY] + 2 >> 2
                }
              }
            }
            yield {
              data: DY,
              width: YY,
              height: rY
            }, AY = DY, IY = YY, RY = rY
          }
        }(rY, DY, FY, AY)) OY(aY.data, gY++, aY.width, aY.height);
      return RY
    }
    const fA = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function jA(YY) {
      if (YY.startsWith("data:")) {
        const rY = YY.search(/[;,]/);
        return `data:${rY>5?YY.slice(5,rY):""} URL of ${YY.length} characters`
      }
      return YY.length > 80 ? `${YY.slice(0,80)}...` : YY
    }
    async function hA(YY) {
      const rY = await fetch(YY);
      if (!rY.ok) throw new Error(`${jA(YY)}: ${rY.status} ${rY.statusText}`);
      return createImageBitmap(await rY.blob(), fA)
    }
    async function dA(YY) {
      const rY = await hA(YY),
        DY = new OffscreenCanvas(rY.width, rY.height),
        FY = DY.getContext("2d", {
          willReadFrequently: !0
        });
      if (!FY) throw new Error("No 2D context to decode an image");
      FY.drawImage(rY, 0, 0);
      const {
        data: AY
      } = FY.getImageData(0, 0, rY.width, rY.height);
      return rY.close(), {
        pixels: new Uint8Array(AY.buffer, AY.byteOffset, AY.byteLength),
        width: DY.width,
        height: DY.height
      }
    }
    const JA = new WeakMap;

    function MA(YY, rY, DY, FY) {
      var AY;
      const IY = null !== (AY = JA.get(YY)) && void 0 !== AY ? AY : new Map;
      JA.set(YY, IY);
      let RY = IY.get(rY);
      return RY || (RY = (async AY => {
        const IY = null !== (AY = function(YY, rY) {
          const DY = YY ? new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength) : null;
          return null !== DY && void 0 !== DY && DY.byteLength && rY && DY.byteLength % (rY * rY * 4) === 0 ? {
            pixels: DY,
            layerWidth: rY,
            layers: DY.byteLength / (rY * rY * 4)
          } : null
        }(DY, FY)) && void 0 !== AY ? AY : await async function(YY) {
          const {
            pixels: rY,
            width: DY
          } = await dA(YY);
          return {
            pixels: rY,
            layerWidth: DY,
            layers: rY.byteLength / (DY * DY * 4)
          }
        }(rY), {
          layerWidth: RY,
          layers: OY
        } = IY;
        return {
          texture: CA(YY, IY.pixels, RY, RY, OY, `atlas-${rY}`),
          layerWidth: RY,
          layers: OY
        }
      })(), IY.set(rY, RY), RY.catch((() => {
        IY.delete(rY)
      }))), RY
    }
    const wA = new Map([
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
      bA = new Map([
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

    function XA(YY) {
      for (const rY of (0, KA.l)(YY))
        if (!bA.has((0, KA.h)(rY))) return !1;
      return !0
    }

    function qA(YY) {
      const rY = bA.get(YY);
      if (!rY) return null;
      const [DY, FY, AY] = rY;
      return {
        srcFactor: wA.get(DY),
        dstFactor: wA.get(FY),
        operation: AY
      }
    }
    let pA = null;

    function kA(YY) {
      pA = YY
    }

    function GA(YY, rY, DY) {
      var FY;
      null === (FY = pA) || void 0 === FY || FY(YY, rY, DY, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class xA {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(YY, rY, DY, FY, AY) {
        DY !== this.pipeline && (YY.setPipeline(DY), this.pipeline = DY), YY.setBindGroup(1, FY, [AY]);
        const IY = rY.material.bindGroup;
        IY !== this.materialGroup && (YY.setBindGroup(2, IY), this.materialGroup = IY);
        const RY = rY.program.packGroup;
        RY && RY !== this.packGroup && (YY.setBindGroup(Br.e, RY), this.packGroup = RY);
        const {
          vertexBuffers: OY,
          vertexOffsets: gY
        } = this;
        for (let aY = 0; aY < rY.vertexBuffers.length; aY++) OY[aY] === rY.vertexBuffers[aY] && gY[aY] === rY.vertexOffsets[aY] || (YY.setVertexBuffer(aY, rY.vertexBuffers[aY], rY.vertexOffsets[aY]), OY[aY] = rY.vertexBuffers[aY], gY[aY] = rY.vertexOffsets[aY]);
        rY.indexBuffer && rY.indexBuffer !== this.indexBuffer && (YY.setIndexBuffer(rY.indexBuffer, rY.indexFormat), this.indexBuffer = rY.indexBuffer)
      }
    }
    class nA {
      constructor(YY, rY, DY, FY) {
        this.modelMeshes = YY, this.B3 = rY, this.maker = DY, this.warnOnce = FY, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(YY) {
        this.collectGroup(YY, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(YY, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(YY, 1, this.frontDraws, this.frontDraws, !0);
        for (const rY of this.modelMeshes.groupIds())(rY < -1 || rY > 1) && this.warnOnce(`group:${rY}`, `rendering group ${rY} is not drawn`);
        for (const rY of this.B3.groupIds())(rY < -1 || rY > 1) && this.warnOnce(`group:${rY}`, `rendering group ${rY} is not drawn`);
        this.opaqueDraws.sort(PA), this.transparentDraws.sort(UA)
      }
      collectGroup(YY, rY, DY, FY, AY) {
        const IY = this.modelMeshes.group(rY),
          RY = this.B3.group(rY),
          OY = 0 === rY ? null === RY || void 0 === RY ? void 0 : RY.opaque : void 0;
        this.collectList(YY, null === IY || void 0 === IY ? void 0 : IY.opaque, OY || null === RY || void 0 === RY ? void 0 : RY.opaque, rY, !1, DY, AY), OY && (this.B3.drawn += this.maker.bundleDraws(YY, OY, rY)), this.collectList(YY, null === IY || void 0 === IY ? void 0 : IY.alphaTest, void 0, rY, !1, DY, AY), this.collectList(YY, null === IY || void 0 === IY ? void 0 : IY.transparent, null === RY || void 0 === RY ? void 0 : RY.transparent, rY, !0, FY, AY)
      }
      collectList(YY, rY, DY, FY, AY, IY, RY) {
        var OY;
        const gY = IY.length;
        rY && this.maker.pushDraws(YY, rY.units, rY.units.length, FY, AY, IY, rY.rows), DY && (this.B3.drawn += this.maker.pushDraws(YY, DY, DY.length, FY, AY, IY));
        const aY = AY ? null === (OY = this.modelMeshes.group(FY)) || void 0 === OY ? void 0 : OY.text : void 0;
        aY && this.maker.pushDraws(YY, aY.units, aY.units.length, FY, !0, IY, aY.rows), RY && LA(IY, gY)
      }
    }

    function PA(YY, rY) {
      return YY.program.id - rY.program.id || YY.material.owner.uniqueId - rY.material.owner.uniqueId
    }

    function UA(YY, rY) {
      return YY.material.owner.uniqueId - rY.material.owner.uniqueId
    }

    function LA(YY, rY) {
      for (let DY = rY + 1; DY < YY.length; DY++) {
        const FY = YY[DY];
        let AY = DY - 1;
        for (; AY >= rY && UA(YY[AY], FY) > 0; AY--) YY[AY + 1] = YY[AY];
        YY[AY + 1] = FY
      }
    }
    const tA = {};

    function YI(YY) {
      return YY.hasThinInstances ? "thin" : YY.aFY || YY._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function rI(YY, rY, DY) {
      return YY ? (DY._needUVs = !0, YY.optimizeUVAllocation && (0, cY.P)(YY.matrix) ? (DY[`${rY}DIRECTUV`] = YY.uvSet + 1, DY[`MAINUV${YY.uvSet+1}`] = !0) : DY[`${rY}DIRECTUV`] = 0, !0) : (DY[`${rY}DIRECTUV`] = 0, !1)
    }

    function DI(YY) {
      const rY = new Map;
      for (const DY in YY) {
        if (95 === DY.charCodeAt(0)) continue;
        const FY = YY[DY],
          AY = typeof FY;
        "number" === AY || "string" === AY ? rY.set(DY, String(FY)) : FY && "function" !== AY && rY.set(DY, !0)
      }
      return rY
    }

    function FI(YY) {
      const rY = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: DY
        }
        of YY.features)
        for (const YY in DY) rY[YY] = DY[YY];
      return rY
    }

    function AI(YY) {
      const rY = YY.parts.geometry;
      return null !== rY && void 0 !== rY && rY.live ? rY : null
    }

    function II(YY) {
      var rY;
      return null !== (rY = AI(YY)) && void 0 !== rY ? rY : tA
    }
    class RI {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = YY, this.warnOnce = rY, this.programWithModel = DY, this.packFailed = FY, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(YY, rY, DY, FY, AY) {
        const IY = rY.owner;
        let RY = this.drawStates.get(rY);
        if (!RY) {
          const YY = rY.parts.materials[rY.range];
          if (!YY) return this.warnOnce("model", `${DY.name} on ${IY.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          RY = {
            defines: FI(YY),
            model: YY,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: AY,
            groupId: FY,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(rY, RY)
        }
        if (this.programCurrent(RY, rY, AY, FY)) return RY.program;
        const {
          model: OY
        } = RY, gY = II(rY), aY = this.instanceLayout(IY, AY), vY = this.definesBits(IY);
        if (!this.prepareModelDefines(YY, IY, OY, RY.defines, FY, AY)) return null;
        RY.instancing = AY, RY.groupId = FY, RY.modelVersion = OY.version, RY.geometry = gY, RY.instanceLayout = aY, RY.definesBits = vY;
        const uY = function(YY) {
          let rY = "";
          for (const [DY, FY] of YY) rY += !0 === FY ? `${DY};` : `${DY}=${FY};`;
          return rY
        }(DI(RY.defines));
        return uY === RY.definesKey && RY.packVariant === this.modelPackVariant && RY.program && !this.packFailed(RY.program) || (RY.definesKey = uY, RY.packVariant = this.modelPackVariant, RY.program = this.programWithModel(OY, RY.defines, uY)), RY.program
      }
      programCurrent(YY, rY, DY, FY) {
        return null !== YY.program && !this.packFailed(YY.program) && YY.instancing === DY && YY.groupId === FY && this.definesHold(YY, rY, DY)
      }
      definesHold(YY, rY, DY) {
        return YY.modelVersion === YY.model.version && YY.geometry === II(rY) && YY.instanceLayout === this.instanceLayout(rY.owner, DY) && YY.definesBits === this.definesBits(rY.owner) && YY.packVariant === this.modelPackVariant
      }
      modelPackKind(YY) {
        var rY;
        return 0 === this.modelPackVariant ? null : null !== (rY = (0, NY.v)(YY, eY.d.name)) && void 0 !== rY && rY.active ? "placed" : YY.item ? "item" : YY.lifeform ? "lifeform" : YY.box ? "box" : null
      }
      instanceLayout(YY, rY) {
        var DY, FY, AY;
        return "thin" === rY ? null !== (AY = this.resources.kU.get(YY)) && void 0 !== AY ? AY : null : "instanced" === rY && null !== (DY = null === (FY = YY._userInstancedBuffersStorage) || void 0 === FY ? void 0 : FY.interleavedKinds) && void 0 !== DY ? DY : null
      }
      definesBits(YY) {
        const rY = this.view;
        return (YY.visibility < 1 ? 1 : 0) | (YY.hasVertexAlpha ? 2 : 0) | (YY.applyFog ? 4 : 0) | (YY.useVertexColors ? 8 : 0) | (YY.nonUniformScaling ? 16 : 0) | (rY.fogEnabled && 0 !== rY.fogMode ? 32 : 0) | (rY.lightsEnabled ? 64 : 0) | rY.lightCount << 7
      }
      prepareLightDefines(YY, rY, DY) {
        let FY = 0;
        if (this.view.lightsEnabled && !rY) {
          const rY = Math.min(DY, 4);
          for (; FY < this.view.lightCount && (YY[`LIGHT${FY}`] = !0, YY[`LITE_LIGHT${FY}_SLOT`] = FY, FY++, YY._needNormals = !0, FY !== rY););
        }
        for (let AY = FY; AY < 4; AY++) YY[`LIGHT${AY}`] = !1, YY[`LITE_LIGHT${AY}_SLOT`] = void 0
      }
      prepareModelDefines(YY, rY, DY, FY, AY, IY) {
        const {
          features: RY
        } = DY;
        FY._needNormals = !1, FY._needUVs = !1;
        const OY = this.view;
        this.prepareLightDefines(FY, DY.disableLighting, DY.maxSimultaneousLights), FY.MAINUV1 = !1, FY.MAINUV2 = !1;
        const gY = DY.diffuseTexture;
        gY ? (FY._needUVs = !0, FY.DIFFUSE = !0, gY.optimizeUVAllocation && (0, cY.P)(gY.matrix) ? (FY.DIFFUSEDIRECTUV = gY.uvSet + 1, FY[`MAINUV${gY.uvSet+1}`] = !0) : FY.DIFFUSEDIRECTUV = 0, gY.uvSet > 1 && this.warnOnce(`uvset:${DY.name}`, `${DY.name} samples UV set ${gY.uvSet+1}, which is not supported`)) : (FY.DIFFUSE = !1, FY.DIFFUSEDIRECTUV = 0);
        const aY = DY.opacityTexture,
          vY = DY.emissiveTexture;
        FY.OPACITY = rI(aY, "OPACITY", FY), FY.OPACITYRGB = null !== aY && aY.getAlphaFromRGB, FY.EMISSIVE = rI(vY, "EMISSIVE", FY), (aY && aY.uvSet > 1 || vY && vY.uvSet > 1) && this.warnOnce(`uvset:${DY.name}`, `${DY.name} samples a UV set past 2, which is not supported`);
        const uY = DY.reflectionTexture,
          sY = null !== uY;
        if (sY) {
          if (!this.resources.boundTexture(uY)) return !1;
          FY._needNormals = !0
        }
        FY.REFLECTION = sY, FY.REFLECTIONMAP_3D = sY, FY.REFLECTIONMAP_SKYBOX = sY, FY.REFLECTIONMAP_OPPOSITEZ = sY && (YY.useRightHandedSystem ? !uY.invertZ : uY.invertZ), FY.ROUGHNESS = sY && DY.roughness > 0, FY.REFLECTIONOVERALPHA = sY && DY.useReflectionOverAlpha, FY.LITE_REFLECTION_LUMINANCE = sY && "cube" === uY.source.kind && uY.source.luminance, (rY.skeleton || rY.morphTargetManager) && this.warnOnce(`skin:${rY.name}`, `${rY.name} has bones or morph targets, which are not supported`), FY.FOG = DY.fogEnabled && rY.applyFog && OY.fogEnabled && 0 !== OY.fogMode, FY.NONUNIFORMSCALING = rY.nonUniformScaling;
        const {
          visibility: iY,
          hasVertexAlpha: yY
        } = rY;
        FY.ALPHATEST = (0, NY.M)(DY, iY, yY), FY.ALPHAFROMDIFFUSE = (0, NY.Y)(DY), FY.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== DY.transparencyMode, FY.ALPHABLEND = null === DY.transparencyMode || (0, NY.K)(DY, iY, yY), FY.PREMULTIPLYALPHA = 7 === DY.alphaMode || 8 === DY.alphaMode, FY.EMISSIVEASILLUMINATION = DY.useEmissiveAsIllumination, FY.LINKEMISSIVEWITHDIFFUSE = DY.linkEmissiveWithDiffuse, FY.TWOSIDEDLIGHTING = !DY.backFaceCulling && DY.twoSidedLighting, FY.INSTANCES = "none" !== IY, FY.THIN_INSTANCES = "thin" === IY, FY.LITE_FRONT_LAYER = AY >= 1;
        for (const {
            feature: TY,
            state: eY,
            active: NY
          }
          of RY) {
          var QY, oY;
          if (NY) null === (QY = (oY = (0, vr.j)(TY)).prepareDefinesBeforeAttributes) || void 0 === QY || QY.call(oY, eY, FY, YY, rY)
        }
        this.modelPackKind(DY) && (FY._needNormals = !0), FY.NORMAL = FY._needNormals && rY.isVerticesDataPresent("normal"), FY.UV1 = FY._needUVs && rY.isVerticesDataPresent("uv"), FY.UV2 = FY._needUVs && rY.isVerticesDataPresent("uv2");
        const WY = rY.useVertexColors && rY.isVerticesDataPresent("color");
        FY.VERTEXCOLOR = WY, FY.VERTEXALPHA = rY.hasVertexAlpha && WY, FY.INSTANCESCOLOR = "none" !== IY && rY.isVerticesDataPresent("instanceColor");
        for (const {
            feature: TY,
            state: eY,
            active: NY
          }
          of RY) {
          var EY, mY;
          if (NY) null === (EY = (mY = (0, vr.j)(TY)).prepareDefines) || void 0 === EY || EY.call(mY, eY, FY, YY, rY, DY)
        }
        const VY = YY.ky();
        for (const {
            feature: TY,
            state: eY,
            active: NY
          }
          of RY) {
          var SY, lY;
          if (NY && !1 === (null === (SY = (lY = (0, vr.j)(TY)).isReadyForSubMesh) || void 0 === SY ? void 0 : SY.call(lY, eY, FY, YY, VY))) return !1
        }
        return !0
      }
    }

    function OI(YY, rY, DY) {
      return YY.codeVersion !== rY.version && function(YY, rY) {
        const DY = [],
          FY = [];
        for (const {
            feature: sY,
            state: iY,
            active: yY
          }
          of rY.features) {
          var AY, IY, RY, OY;
          if (yY) gI(null === (AY = (IY = (0, vr.j)(sY)).getCustomCode) || void 0 === AY ? void 0 : AY.call(IY, iY, "vertex", lY.e.WGSL), DY), gI(null === (RY = (OY = (0, vr.j)(sY)).getCustomCode) || void 0 === RY ? void 0 : RY.call(OY, iY, "fragment", lY.e.WGSL), FY)
        }
        const gY = [];
        for (const {
            feature: sY,
            state: iY
          }
          of rY.features) {
          var aY, vY;
          const YY = null === (aY = (vY = (0, vr.j)(sY)).getUniforms) || void 0 === aY ? void 0 : aY.call(vY, iY, lY.e.WGSL);
          for (const rY of null !== (uY = null === YY || void 0 === YY ? void 0 : YY.ubo) && void 0 !== uY ? uY : []) {
            var uY;
            rY.size && rY.type && gY.push({
              name: rY.name,
              type: rY.type,
              arraySize: rY.arraySize
            })
          }
        }
        YY.vertexCode = DY, YY.fragmentCode = FY, YY.pluginUniforms = gY, YY.codeKey = JSON.stringify([DY, FY, gY]), YY.codeVersion = rY.version
      }(YY, rY), `${DY}#${YY.codeKey}`
    }

    function gI(YY, rY) {
      if (YY)
        for (const DY in YY) YY[DY] && rY.push([DY, YY[DY]])
    }
    const aI = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class vI {
      constructor(YY) {
        this.warnOnce = YY, this.states = new Map
      }
      renderState(YY, rY, DY, FY) {
        var AY;
        let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          RY = null !== (AY = YY.sideOrientation) && void 0 !== AY ? AY : rY.sideOrientation;
        rY._getWorldMatrixDeterminant() < 0 && (RY = 0 === RY ? 1 : 0);
        const OY = "triangle-list" === IY,
          gY = DY ? YY.alphaMode : 0,
          aY = (!DY || (0 === gY || YY.forceDepthWrite)) && !YY.disableDepthWrite,
          vY = OY && YY.backFaceCulling ? YY.cullBackFaces ? "back" : "front" : "none",
          uY = OY && 0 !== RY ? "ccw" : "cw",
          sY = YY.depthFunction,
          iY = OY ? YY.zOffset : 0,
          yY = OY ? YY.zOffsetUnits : 0,
          QY = !YY.disableColorWrite;
        return FY && FY.alphaMode === gY && FY.depthWrite === aY && FY.depthFunction === sY && FY.cullMode === vY && FY.frontFace === uY && FY.zOffset === iY && FY.zOffsetUnits === yY && FY.colourWrite === QY && FY.topology === IY ? FY : this.stateFor(gY, aY, sY, vY, uY, iY, yY, QY, IY)
      }
      stateFor(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        const aY = `${YY}|${rY}|${DY}|${FY}|${AY}|${IY}|${RY}|${OY}|${gY}`;
        let vY = this.states.get(aY);
        if (!vY) {
          var uY;
          const sY = YY ? qA(YY) : null;
          YY && !sY && this.warnOnce(`alpha:${YY}`, `alpha mode ${YY} is not supported`), vY = {
            key: aY,
            alphaMode: YY,
            depthFunction: DY,
            zOffset: IY,
            zOffsetUnits: RY,
            topology: gY,
            blend: sY,
            depthWrite: rY,
            depthCompare: DY && null !== (uY = aI.get(DY)) && void 0 !== uY ? uY : null,
            cullMode: FY,
            frontFace: AY,
            depthBias: -RY,
            depthBiasSlopeScale: -IY,
            colourWrite: OY
          }, this.states.set(aY, vY)
        }
        return vY
      }
    }
    var uI = DY(36688);

    function sI(YY) {
      if (!YY.frozen) return -1;
      let rY = YY.version;
      for (const {
          feature: DY,
          state: FY,
          active: AY
        }
        of YY.features) {
        if (!AY || !DY.bind) continue;
        const YY = (0, vr.j)(DY).uniformsVersion;
        if (!YY) return -1;
        rY += YY(FY)
      }
      return rY
    }
    class iI {
      constructor(YY, rY, DY) {
        this.slots = YY, this.data = rY, this.textures = DY, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(YY, rY) {
        this.write4(YY, rY, 0, 0, 0, 1)
      }
      updateFloat2(YY, rY, DY) {
        this.write4(YY, rY, DY, 0, 0, 2)
      }
      updateFloat3(YY, rY, DY, FY) {
        this.write4(YY, rY, DY, FY, 0, 3)
      }
      updateFloat4(YY, rY, DY, FY, AY) {
        this.write4(YY, rY, DY, FY, AY, 4)
      }
      updateVector3(YY, rY) {
        this.write4(YY, rY.x, rY.y, rY.z, 0, 3)
      }
      updateVector4(YY, rY) {
        this.write4(YY, rY.x, rY.y, rY.z, rY.w, 4)
      }
      updateColor3(YY, rY) {
        this.write4(YY, rY.r, rY.g, rY.b, 0, 3)
      }
      updateColor4(YY, rY, DY) {
        this.write4(YY, rY.r, rY.g, rY.b, DY, 4)
      }
      updateFloatsFrom(YY, rY, DY, FY) {
        const AY = this.slots.get(YY);
        if (!AY) return;
        const IY = this.data,
          RY = AY.offset;
        for (let OY = 0; OY < FY; OY++) IY[RY + OY] = rY[DY + OY]
      }
      updateFloat3TimesFloats(YY, rY, DY, FY) {
        const AY = this.slots.get(YY);
        if (!AY) return;
        const IY = this.data,
          RY = AY.offset;
        IY[RY] = rY[DY] * FY[0], IY[RY + 1] = rY[DY + 1] * FY[1], IY[RY + 2] = rY[DY + 2] * FY[2]
      }
      m_(YY, rY) {
        const DY = this.slots.get(YY);
        DY && this.data.set(rY.m, DY.offset)
      }
      updateMatrixFloats(YY, rY) {
        const DY = this.slots.get(YY);
        DY && this.data.set(rY, DY.offset)
      }
      updateFloatArray(YY, rY) {
        const DY = this.slots.get(YY);
        if (!DY) return;
        if (!DY.arraySize || DY.stride === DY.floats) return void this.data.set(rY, DY.offset);
        const FY = Math.min(rY.length, DY.floats * DY.arraySize);
        for (let AY = 0; AY < FY; AY++) this.data[DY.offset + Math.floor(AY / DY.floats) * DY.stride + AY % DY.floats] = rY[AY]
      }
      updateArray(YY, rY) {
        this.updateFloatArray(YY, rY)
      }
      setTexture(YY, rY) {
        this.textures.set(YY, rY), this.expected.delete(YY)
      }
      expectTexture(YY) {
        this.textures.set(YY, null), this.expected.add(YY)
      }
      write4(YY, rY, DY, FY, AY, IY) {
        const RY = this.slots.get(YY);
        if (!RY) return;
        const OY = this.data,
          gY = RY.offset;
        OY[gY] = rY, IY > 1 && (OY[gY + 1] = DY), IY > 2 && (OY[gY + 2] = FY), IY > 3 && (OY[gY + 3] = AY)
      }
    }

    function yI(YY, rY) {
      const DY = MF,
        FY = uI.f,
        AY = YY.lights,
        IY = Math.min(YY.lightCount, 8);
      for (let RY = 0; RY < IY; RY++) {
        const YY = DY.lights + RY * DY.lightStride,
          IY = RY * uI.b;
        rY[YY] = AY[IY + FY.vector], rY[YY + 1] = AY[IY + FY.vector + 1], rY[YY + 2] = AY[IY + FY.vector + 2], rY[YY + 3] = AY[IY + FY.kind] === uI.d.directional ? 1 : 0, rY[YY + 4] = AY[IY + FY.diffuse], rY[YY + 5] = AY[IY + FY.diffuse + 1], rY[YY + 6] = AY[IY + FY.diffuse + 2], rY[YY + 7] = AY[IY + FY.range], rY[YY + 8] = AY[IY + FY.specular], rY[YY + 9] = AY[IY + FY.specular + 1], rY[YY + 10] = AY[IY + FY.specular + 2], rY[YY + 11] = AY[IY + FY.range]
      }
      rY[DY.fogInfos] = YY.fogMode, rY[DY.fogInfos + 1] = YY.fogStart, rY[DY.fogInfos + 2] = YY.fogEnd, rY[DY.fogInfos + 3] = YY.fogDensity, rY[DY.fogColour] = YY.fogColour[0], rY[DY.fogColour + 1] = YY.fogColour[1], rY[DY.fogColour + 2] = YY.fogColour[2], rY[DY.outputHeight] = YY.renderHeight, rY[DY.animTick] = YY.animTick, rY[DY.timeMs] = YY.timeMs
    }
    class QI {
      constructor(YY) {
        this.instancesOf = YY
      }
      refreshModelUniforms(YY, rY, DY, FY) {
        const AY = sI(DY);
        if (AY >= 0 && AY === rY.heldVersion && rY.textures.get("diffuseSampler") === DY.diffuseTexture && rY.textures.get("reflectionCubeSampler") === DY.reflectionTexture && rY.textures.get("opacitySampler") === DY.opacityTexture && rY.textures.get("emissiveSampler") === DY.emissiveTexture) return !0;
        if (AY < 0)
          for (const IY of this.instancesOf(DY)) IY.heldVersion = -1;
        return this.writeModelUniforms(YY, rY, DY, FY), rY.heldVersion = AY, !1
      }
      writeModelUniforms(YY, rY, DY, FY) {
        const {
          ubo: AY
        } = rY, IY = DY.diffuseTexture, RY = DY.diffuseColor;
        AY.updateFloat4("vDiffuseColor", RY[0], RY[1], RY[2], DY.alpha), IY && (AY.updateFloat2("vDiffuseInfos", IY.uvSet, IY.level), AY.updateMatrixFloats("diffuseMatrix", IY.matrix)), AY.updateFloat("alphaCutOff", DY.alphaCutOff), AY.updateFloatsFrom("vEmissiveColor", DY.emissiveColor, 0, 3), AY.updateFloat3TimesFloats("vAmbientColor", FY.ambientColour, 0, DY.ambientColor);
        const OY = DY.specularColor;
        AY.updateFloat4("vSpecularColor", OY[0], OY[1], OY[2], DY.specularPower), AY.setTexture("diffuseSampler", IY);
        const gY = DY.opacityTexture;
        gY && (AY.updateFloat2("vOpacityInfos", gY.uvSet, gY.level), AY.updateMatrixFloats("opacityMatrix", gY.matrix)), AY.setTexture("opacitySampler", gY);
        const aY = DY.emissiveTexture;
        aY && (AY.updateFloat2("vEmissiveInfos", aY.uvSet, aY.level), AY.updateMatrixFloats("emissiveMatrix", aY.matrix)), AY.setTexture("emissiveSampler", aY);
        const vY = DY.reflectionTexture;
        vY && AY.updateMatrixFloats("reflectionMatrix", vY.matrix), AY.updateFloat2("vReflectionInfos", vY ? vY.level * YY.iblIntensity : 0, DY.roughness), AY.setTexture("reflectionCubeSampler", vY);
        const uY = YY.ky();
        for (const {
            feature: yY,
            state: QY,
            active: oY
          }
          of DY.features) {
          var sY, iY;
          if (oY) null === (sY = (iY = (0, vr.j)(yY)).bind) || void 0 === sY || sY.call(iY, QY, AY, YY, uY)
        }
      }
    }

    function oI(YY) {
      const rY = YY.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(rY) ? "u32" : /i32|^vec\di$/.test(rY) ? "i32" : "f32"
    }

    function WI(YY, rY) {
      const DY = YY.getSize(),
        FY = oI(rY),
        AY = YY => 4 === DY ? `${YY}x4` : 2 === DY ? `${YY}x2` : null;
      if ("f32" === FY) {
        if (5126 === YY.type) return 1 === DY ? "float32" : DY >= 2 && DY <= 4 ? `float32x${DY}` : null;
        if (!YY.normalized) return null;
        switch (YY.type) {
          case 5121:
            return AY("unorm8");
          case 5120:
            return AY("snorm8");
          case 5123:
            return AY("unorm16");
          case 5122:
            return AY("snorm16")
        }
        return null
      }
      const IY = "u32" === FY ? "uint" : "sint";
      switch (YY.type) {
        case 5125:
        case 5124:
          return 1 === DY ? `${IY}32` : DY <= 4 ? `${IY}32x${DY}` : null;
        case 5121:
        case 5120:
          return AY(`${IY}8`);
        case 5123:
        case 5122:
          return AY(`${IY}16`)
      }
      return null
    }

    function EI(YY) {
      var rY;
      const DY = /(8|16|32)(?:x(\d))?$/.exec(YY);
      return DY ? Number(DY[1]) / 8 * Number(null !== (rY = DY[2]) && void 0 !== rY ? rY : 1) : 4
    }
    class mI {
      constructor(YY, rY, DY) {
        this.resources = YY, this.limits = rY, this.warnOnce = DY, this.layouts = new Map
      }
      resolveInputs(YY, rY, DY, FY) {
        const AY = [],
          IY = DY.program.attributes,
          RY = [];
        for (let vY = 0; vY < IY.length; vY++) {
          const DY = IY[vY],
            OY = DY.optional ? null : this.resources.vertexInput(YY, DY.name, FY);
          if (!OY) {
            const YY = oI(DY.type),
              rY = "u32" === YY ? "uint32x4" : "i32" === YY ? "sint32x4" : "float32x4";
            RY.push(null);
            const FY = AY.find((YY => null === YY.data));
            FY ? FY.attributes.push({
              shaderLocation: vY,
              offset: 0,
              format: rY
            }) : AY.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: vY,
                offset: 0,
                format: rY
              }]
            });
            continue
          }
          const gY = OY.getBuffer();
          RY.push(OY);
          const aY = WI(OY, DY.type);
          if (!aY) return this.warnOnce(`format:${rY}:${DY.name}`, `${rY}'s ${DY.name} (type ${OY.type}, size ${OY.getSize()}) has no WebGPU vertex format`), null;
          const uY = OY.getIsInstanced() ? "instance" : "vertex",
            sY = OY.byteStride,
            iY = EI(aY),
            yY = AY.find((YY => YY.data === gY && YY.stride === sY && YY.step === uY && OY.byteOffset >= YY.base && OY.byteOffset - YY.base + iY <= sY));
          yY ? yY.attributes.push({
            shaderLocation: vY,
            offset: OY.byteOffset - yY.base,
            format: aY
          }) : AY.push({
            data: gY,
            base: OY.byteOffset,
            stride: sY,
            step: uY,
            attributes: [{
              shaderLocation: vY,
              offset: 0,
              format: aY
            }]
          })
        }
        if (AY.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${rY}`, `${rY} needs ${AY.length} vertex buffers`), null;
        let OY = "";
        for (const vY of AY) {
          OY += `${vY.stride}${"instance"===vY.step?"i":"v"}`;
          for (const YY of vY.attributes) OY += `,${YY.shaderLocation}:${YY.offset}:${YY.format}`;
          OY += ";"
        }
        let gY = this.layouts.get(OY);
        gY || (gY = {
          key: OY,
          buffers: AY.map((YY => ({
            arrayStride: YY.stride,
            stepMode: YY.step,
            attributes: YY.attributes
          }))),
          instanceEnds: AY.map((YY => {
            let rY = -1;
            if ("instance" === YY.step)
              for (const DY of YY.attributes) rY = Math.max(rY, DY.offset + EI(DY.format));
            return rY
          }))
        }, this.layouts.set(OY, gY));
        const aY = AY.map((YY => YY.base));
        return {
          program: DY,
          sources: RY,
          layout: gY,
          slotData: AY.map((YY => YY.data)),
          r_: aY,
          buffers: [],
          offsets: aY,
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

    function VI(YY, rY, DY, FY) {
      const AY = rY.program.program.attributes;
      for (let IY = 0; IY < AY.length; IY++) {
        if ((AY[IY].optional ? null : DY.vertexInput(YY, AY[IY].name, FY)) !== rY.sources[IY]) return !1
      }
      return !0
    }
    const SI = 64;
    class lI {
      constructor(YY, rY, DY, FY) {
        this.device = YY, this.layout = rY, this.frameBuffer = DY, this.label = FY, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(YY) {
        if (YY * SI <= this.data.length) return !1;
        let rY = 2 * this.data.length;
        for (; YY * SI > rY;) rY *= 2;
        const DY = new Float32Array(rY);
        return DY.set(this.data), this.data = DY, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AY = this.data,
          IY = YY * SI;
        let RY = AY[IY + 16] !== DY;
        for (let OY = 0; OY < 16 && !RY; OY++) RY = AY[IY + OY] !== rY[FY + OY];
        if (RY) {
          for (let YY = 0; YY < 16; YY++) AY[IY + YY] = rY[FY + YY];
          AY[IY + 16] = DY
        }
        return RY
      }
      upload(YY, rY) {
        this.device.queue.writeBuffer(this.buffer, YY * wF, this.data, YY * SI, (rY - YY) * SI)
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

    function TI(YY) {
      return YY.gpu[cY.g.lite] ??= YY.materials.map(((rY, DY) => ({
        parts: YY,
        range: DY,
        owner: YY.owner
      })))
    }

    function eI(YY) {
      var rY, DY, FY;
      return null !== (rY = null !== (DY = null === (FY = YY.parts.materials[YY.range]) || void 0 === FY ? void 0 : FY.mirror) && void 0 !== DY ? DY : YY.owner.material) && void 0 !== rY ? rY : null
    }
    const NI = ["opaque", "alphaTest", "transparent", "text"];
    class BI {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, ar.b)("Lite: ")
      }
      attach(YY, rY) {
        this.model = YY, this.mirror = rY
      }
      get worlds() {
        return this.model.nodes.Mu
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(YY) {
        return this.groups.get(YY)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(YY) {
        for (const [rY, DY] of this.groups)
          for (const FY of NI)
            for (const AY of DY[FY].units) YY(AY.owner, "text" === FY ? "transparent" : FY, rY)
      }
      select(YY, rY) {
        this.frame++, this.selectedCount = 0;
        for (const OY of this.groups.values())
          for (const YY of NI) OY[YY].units.length = 0, OY[YY].rows.length = 0;
        const {
          model: DY,
          mirror: FY
        } = this;
        if (!DY || !FY || !YY) return;
        this.rows.length < DY.nodes.gu && (this.rows = new Int32Array(DY.nodes.gu));
        const AY = this.rows,
          IY = DY.meshes;
        for (let OY = 0; OY < IY.looseCount; OY++) {
          const YY = IY.loose[OY],
            DY = FY.nodes[YY];
          DY && !DY.isBlocked && DY.isEnabled() && !DY.pa.hasAZeroComponent && IY.selects(YY, rY.frustum) && (this.activate(DY, YY), this.selectedCount++)
        }
        const RY = IY.selectTextPlanes(rY.frustum, AY);
        for (let OY = 0; OY < RY; OY++) {
          const rY = AY[OY],
            IY = FY.nodes[rY],
            RY = DY.meshes.parts[rY];
          if (!IY.isVisible || !(IY.visibility > 0) || 0 === (IY.layerMask & YY.layerMask) || !RY) continue;
          const gY = this.groupOf(DY.meshes.layer[rY]).text;
          for (const YY of TI(RY)) gY.units.push(YY), gY.rows.push(rY);
          this.selectedCount++
        }
      }
      instanceBatch(YY) {
        const rY = this.batchOf(YY);
        return rY.dispatched || (rY.dispatched = rY.renderSelf = !0, rY.row = this.rowOf(YY)), rY
      }
      rowOf(YY) {
        return YY.row
      }
      activate(YY, rY) {
        if (!YY.XT) {
          const DY = YY;
          if (DY.aFY) {
            const YY = this.batchOf(DY);
            YY.dispatched = !0, YY.renderSelf = !0, YY.row = rY
          }
          return void this.dispatch(DY, rY, rY)
        }
        const DY = YY,
          FY = DY.vFY;
        if (FY._getWorldMatrixDeterminant() >= 0 !== DY._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${FY.name}`, `A mirrored InstancedMesh of ${FY.name} is not drawn yet`);
        const AY = this.batchOf(FY);
        AY.instances.push(DY), AY.rows.push(rY), AY.dispatched || (AY.dispatched = !0, this.dispatch(FY, rY, this.rowOf(FY)))
      }
      batchOf(YY) {
        let rY = this.batches.get(YY);
        return rY || (rY = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(YY, rY)), rY.frame !== this.frame && (rY.frame = this.frame, rY.dispatched = !1, rY.renderSelf = !1, rY.instances.length = 0, rY.rows.length = 0), rY
      }
      dispatch(YY, rY, DY) {
        const {
          layer: FY,
          parts: AY
        } = this.model.meshes;
        if (!AY[rY]) return;
        const IY = this.groupOf(FY[rY]),
          RY = YY;
        for (const OY of TI(AY[rY])) {
          const YY = eI(OY);
          if (!YY) continue;
          const rY = YY.needAlphaBlendingForMesh(RY) ? IY.transparent : YY.needAlphaTestingForMesh(RY) ? IY.alphaTest : IY.opaque;
          rY.units.push(OY), rY.rows.push(DY)
        }
      }
      groupOf(YY) {
        let rY = this.groups.get(YY);
        return rY || (rY = {
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
        }, this.groups.set(YY, rY)), rY
      }
    }
    class cI {
      constructor() {
        this.ja = new Map, this.enabled = [], this.groups = new Map, this.Mi = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(YY) {
        if (this.ja.has(YY)) return;
        const rY = {
          mesh: YY,
          observer: YY.onEffectiveEnabledStateChangedObservable.add((YY => {
            this.mV(rY, YY)
          })),
          index: -1,
          steady: null
        };
        this.ja.set(YY, rY), this.mV(rY, YY.isEnabled())
      }
      remove(YY) {
        const rY = this.ja.get(YY);
        rY && (rY.observer.remove(!0), this.mV(rY, !1), this.ja.delete(YY))
      }
      base(YY) {
        return this.ja.get(YY)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          ja: this.ja.size
        }
      }
      forEachSelected(YY) {
        for (const [rY, DY] of this.groups) {
          for (const FY of DY.opaque) YY(FY.owner, "opaque", rY);
          for (const FY of DY.transparent) YY(FY.owner, "transparent", rY)
        }
        for (const rY of this.Mi) YY(rY.mesh, "opaque", 0)
      }
      group(YY) {
        return this.groups.get(YY)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(YY, rY) {
        this.drawn = 0, this.selected = 0, this.Mi.length = 0;
        for (const FY of this.groups.values()) FY.opaque.length = 0, FY.transparent.length = 0;
        if (!YY) return;
        const DY = this.enabled;
        for (let FY = 0; FY < DY.length; FY++) {
          const AY = DY[FY];
          if (AY.steady && rY(AY, YY)) {
            this.selected++, this.Mi.push(AY);
            continue
          }
          const IY = AY.mesh;
          if (IY.isBlocked || IY.pa.hasAZeroComponent) continue;
          if (!IY.isVisible || IY.visibility <= 0 || 0 === (IY.layerMask & YY.layerMask)) continue;
          if (IY.aFY) {
            this.warned.has(IY.name) || (this.warned.add(IY.name), console.warn(`Lite: thin instance base ${IY.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: RY
          } = IY;
          if (!RY) continue;
          IY.computeWorldMatrix(), this.selected++;
          const OY = this.listsFor(IY.renderingGroupId);
          for (const YY of TI(RY)) {
            const rY = eI(YY);
            rY && (rY.needAlphaBlendingForMesh(IY) ? OY.transparent.push(YY) : OY.opaque.push(YY))
          }
        }
      }
      mV(YY, rY) {
        if (rY === YY.index >= 0) return;
        YY.steady = null;
        const DY = this.enabled;
        if (rY) YY.index = DY.length, DY.push(YY);
        else {
          const rY = DY.pop();
          rY !== YY && (DY[YY.index] = rY, rY.index = YY.index), YY.index = -1
        }
      }
      listsFor(YY) {
        let rY = this.groups.get(YY);
        return rY || (rY = {
          opaque: [],
          transparent: []
        }, this.groups.set(YY, rY)), rY
      }
    }
    var KI = DY(38878);
    class HI {
      constructor() {
        this.bundle = null, this.stale = !0, this.ja = new Set
      }
    }
    class zI {
      constructor(YY, rY, DY) {
        this.device = YY, this.slots = rY, this.host = DY, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new HI, this.nS = new HI, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new xA, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(YY) {
          var rY, DY;
          let FY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (rY = null === (DY = globalThis.navigator) || void 0 === DY ? void 0 : DY.userAgent) && void 0 !== rY ? rY : "";
          const AY = YY.adapterInfo;
          return "intel" === (null === AY || void 0 === AY ? void 0 : AY.vendor) && "gen-12lp" === AY.architecture && FY.includes("Windows")
        }(YY), (0, KI.A)(this.direct)
      }
      Om() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, KI.A)(this.directThisFrame)
      }
      add(YY, rY, DY, FY) {
        let AY = this.records.get(YY);
        return AY || (AY = this.createRecord(YY), this.records.set(YY, AY)), AY.recorded && CI(AY, rY) || (this.bundleOf(AY).stale = !0), this.place(AY, rY, DY, FY), AY
      }
      bundleOf(YY) {
        return YY.nS ? this.nS : this.main
      }
      addAgain(YY, rY, DY, FY) {
        YY.recorded || (this.bundleOf(YY).stale = !0), this.place(YY, rY, DY, FY)
      }
      place(YY, rY, DY, FY) {
        YY.seen = this.frame, YY.nS && null === YY.draw && (this.nS.stale = !0), YY.draw = rY, this.drawn++, DY && this.slots.write(YY.slot, DY, FY) && (this.slotsFrom = Math.min(this.slotsFrom, YY.slot), this.slotsTo = Math.max(this.slotsTo, YY.slot));
        const AY = this.args,
          IY = 5 * YY.slot;
        AY[IY] === rY.count && AY[IY + 1] === rY.instances && AY[IY + 2] === rY.first || (AY[IY] = rY.count, AY[IY + 1] = rY.instances, AY[IY + 2] = rY.first, this.argsDirty = !0, this.nS.stale ||= YY.nS)
      }
      Qm() {
        for (const YY of this.records.values()) YY.seen !== this.frame && (YY.draw && (YY.draw = null, this.args[5 * YY.slot + 1] = 0, this.argsDirty = !0, this.nS.stale ||= YY.nS), this.frame - YY.seen > 120 && (this.records.delete(YY.unit), this.freeSlots.push(YY.slot), YY.recorded && (this.bundleOf(YY).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(YY) {
        for (const rY of this.records.values()) rY.draw && rY.seen === this.frame && !rY.nS && YY(rY.draw, this.slots.data, rY.slot * wF / 4)
      }
      resourceDestroyed(YY) {
        this.main.stale ||= this.main.ja.has(YY), this.nS.stale ||= this.nS.ja.has(YY)
      }
      execute(YY, rY, DY) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(YY, rY, DY, "direct"), this.drawn;
        const FY = this.host.sceneGroup(rY);
        if (!FY) return this.main.bundle = null, this.nS.bundle = null, this.recordedSceneGroup = null, this.encode(YY, rY, DY, "direct"), this.drawn;
        this.recordedTarget === DY && this.recordedSceneGroup === FY || (this.recordedTarget = DY, this.recordedSceneGroup = FY, this.main.stale = !0, this.nS.stale = !0);
        const AY = this.main,
          IY = this.nS;
        let RY = !1;
        !AY.stale && AY.bundle || (AY.bundle = this.record(rY, DY, FY, "indirect"), RY = !0);
        const OY = (0, KI.j)();
        return (IY.stale || this.rangedEpoch !== OY) && (this.rangedEpoch = OY, IY.bundle = this.drawsRanged() ? this.record(rY, DY, FY, "nS") : this.noRangedBundle(), RY = !0), RY && (this.bundles = IY.bundle ? [AY.bundle, IY.bundle] : [AY.bundle]), YY.executeBundles(this.bundles), YY.setBindGroup(0, FY), this.drawn
      }
      record(YY, rY, DY, FY) {
        const AY = this.device.createRenderBundleEncoder({
          label: "nS" === FY ? "thin-bases-ranged" : "thin-bases",
          colorFormats: YY._colorFormat ? [YY._colorFormat] : [],
          depthStencilFormat: YY._depthStencilFormat,
          sampleCount: YY._sampleCount
        });
        return AY.setBindGroup(0, DY), this.encode(AY, YY, rY, FY), AY.finish()
      }
      noRangedBundle() {
        for (const YY of this.records.values()) YY.nS && (YY.recorded = !1);
        return this.nS.ja.clear(), this.nS.stale = !1, null
      }
      drawsRanged() {
        for (const YY of this.records.values())
          if (YY.nS && YY.draw) return !0;
        return !1
      }
      encode(YY, rY, DY, FY) {
        const AY = [];
        for (const gY of this.records.values()) "direct" !== FY && gY.nS !== ("nS" === FY) || (gY.recorded = !1, gY.draw && AY.push(gY));
        AY.sort(fI);
        const IY = "direct" === FY ? null : "nS" === FY ? this.nS : this.main;
        null === IY || void 0 === IY || IY.ja.clear(), this.binder.reset();
        let RY = !1;
        for (const gY of AY) {
          var OY;
          const AY = gY.draw,
            aY = this.host.pipelineFor(AY, rY, DY);
          if (!aY) {
            this.host.pipelineCompiling(AY, DY) ? RY = !0 : IY && this.keep(gY, AY, IY.ja);
            continue
          }
          let vY;
          if (gY.nS && "indirect" !== FY) {
            const YY = gY.unit.owner;
            vY = "direct" === FY && (0, KI.p)(YY) || (0, KI.k)(YY) || void 0
          }
          if (IY && this.keep(gY, AY, IY.ja), 0 === (null === (OY = vY) || void 0 === OY ? void 0 : OY.count)) continue;
          this.binder.bind(YY, AY, aY, this.slots.bindGroup, gY.slot * wF);
          const uY = 5 * gY.slot;
          if ("indirect" === FY) {
            AY.indexBuffer ? YY.drawIndexedIndirect(this.argsBuffer, 4 * uY) : YY.drawIndirect(this.argsBuffer, 4 * uY);
            continue
          }
          const sY = this.args;
          vY ? ZI(YY, null !== AY.indexBuffer, sY, uY, vY) : AY.indexBuffer ? YY.drawIndexed(sY[uY], sY[uY + 1], sY[uY + 2], 0, 0) : YY.draw(sY[uY], sY[uY + 1], sY[uY + 2], 0)
        }
        IY && (IY.stale = RY)
      }
      keep(YY, rY, DY) {
        YY.recorded = !0, YY.pipelineKey = rY.pipelineKey, YY.materialGroup = rY.material.bindGroup, YY.vertexBuffers.length = 0, YY.vertexBuffers.push(...rY.vertexBuffers), YY.vertexOffsets = rY.vertexOffsets, YY.indexBuffer = rY.indexBuffer, YY.indexFormat = rY.indexFormat;
        for (const FY of rY.vertexBuffers) DY.add(FY);
        rY.indexBuffer && DY.add(rY.indexBuffer), DY.add(rY.material.buffer);
        for (const FY of rY.material.bound) FY && DY.add(FY)
      }
      createRecord(YY) {
        let rY = this.freeSlots.pop();
        return void 0 === rY && (rY = this.slotCount++, this.grow()), {
          unit: YY,
          slot: rY,
          nS: void 0 !== (0, KI.k)(YY.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.nS.stale = !0), 5 * this.slotCount > this.args.length) {
          const YY = new Uint32Array(2 * this.args.length);
          YY.set(this.args), this.args = YY, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function ZI(YY, rY, DY, FY, AY) {
      const IY = DY[FY + 1],
        RY = AY.data;
      for (let OY = 0; OY < AY.count; OY++) {
        const AY = Math.min(RY[2 * OY], IY),
          gY = Math.min(RY[2 * OY + 1], IY - AY);
        0 !== gY && (rY ? YY.drawIndexed(DY[FY], gY, DY[FY + 2], 0, AY) : YY.draw(DY[FY], gY, DY[FY + 2], AY))
      }
    }

    function CI(YY, rY) {
      if (YY.pipelineKey !== rY.pipelineKey || YY.materialGroup !== rY.material.bindGroup || YY.indexBuffer !== rY.indexBuffer || YY.indexFormat !== rY.indexFormat || YY.vertexOffsets !== rY.vertexOffsets || YY.vertexBuffers.length !== rY.vertexBuffers.length) return !1;
      for (let DY = 0; DY < YY.vertexBuffers.length; DY++)
        if (YY.vertexBuffers[DY] !== rY.vertexBuffers[DY]) return !1;
      return !0
    }

    function fI(YY, rY) {
      return PA(YY.draw, rY.draw)
    }
    const jI = new WeakMap,
      hI = {
        depth: !1,
        sunShadow: !1
      };

    function dI(YY, rY) {
      let DY = jI.get(YY);
      DY || (DY = new Map, jI.set(YY, DY));
      const FY = `${rY.depth?"-depth":""}${rY.sunShadow?"-shadow":""}${rY.shadowMask?"-mask":""}`;
      let AY = DY.get(FY);
      if (!AY) {
        const IY = [{
          binding: Br.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Br.f
          }
        }, {
          binding: Br.r,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        rY.depth && IY.push({
          binding: Br.o,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), rY.sunShadow && IY.push(... function() {
          const YY = GPUShaderStage.FRAGMENT,
            rY = Br.p;
          return [{
            binding: rY.uniform,
            visibility: YY,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: rY.ls,
            visibility: YY,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: rY.special,
            visibility: YY,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: rY.volume,
            visibility: YY,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: rY.sampler,
            visibility: YY,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: rY.entities,
            visibility: YY,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: rY.entityGrids,
            visibility: YY,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), rY.shadowMask && IY.push({
          binding: Br.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), AY = YY.createBindGroupLayout({
          label: `${rY.depth?"terrain-":""}shader-pack-inputs${FY}`,
          entries: IY
        }), DY.set(FY, AY)
      }
      return AY
    }

    function JI(YY) {
      return dI(YY, hI)
    }

    function MI(YY, rY) {
      if (!rY) return !1;
      const DY = (0, cr.g)(YY);
      return !!DY && hD(DY, rY)
    }

    function wI(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!aF(rY)) return [];
      return [dI(YY, {
        depth: AF(rY.packVariant),
        sunShadow: MI(rY.packVariant, DY),
        shadowMask: FY
      })]
    }
    class bI {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = YY, this.sunShadow = DY, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Br.f), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = YY.createBuffer({
          label: "shader-pack-inputs",
          size: Br.f,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const FY = (0, Br.t)(rY);
        this.textures = YY.createBuffer({
          label: "shader-pack-textures",
          size: FY.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), YY.queue.writeBuffer(this.textures, 0, FY), this.bindGroup = YY.createBindGroup({
          label: "shader-pack-inputs",
          layout: JI(YY),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Br.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Br.r,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(YY, rY, DY) {
        (0, Br.A)(this.data, {
          seconds: YY.seconds(),
          lit: DY,
          renderOffset: YY.renderOffset(),
          i6: YY.i6(),
          eyePosition: rY,
          shadowDirection: YY.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const FY = rY ? this.sunShadow : null;
        if ((rY || DY) && !FY) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!YY && !FY) return this.bindGroup;
        (YY && YY !== this.depthView || DY && DY !== this.maskView) && (this.depthView = null !== YY && void 0 !== YY ? YY : this.depthView, this.maskView = null !== DY && void 0 !== DY ? DY : this.maskView, this.groups.clear());
        const AY = (YY ? 1 : 0) | (FY ? 2 : 0) | (DY ? 4 : 0);
        let IY = this.groups.get(AY);
        if (!IY) {
          const rY = this.entries();
          YY && rY.push({
            binding: Br.o,
            resource: YY
          }), FY && rY.push(...FY.entries()), DY && rY.push({
            binding: Br.q,
            resource: DY
          }), IY = this.device.createBindGroup({
            label: `${YY||DY?"terrain-":""}shader-pack-inputs${YY?"-depth":""}${FY?"-shadow":""}${DY?"-mask":""}`,
            layout: dI(this.device, {
              depth: !!YY,
              sunShadow: !!FY,
              shadowMask: !!DY
            }),
            entries: rY
          }), this.groups.set(AY, IY)
        }
        return IY
      }
      bind(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        YY.setBindGroup(Br.e, this.bindGroupFor(rY, DY, FY))
      }
    }

    function XI(YY, rY, DY) {
      if (YY.gpuVersion === rY.gpuBuffersVersion) return !0;
      let FY;
      do {
        if (FY = rY.gpuBuffersVersion, !qI(YY, rY, DY)) return !1
      } while (rY.gpuBuffersVersion !== FY);
      return YY.gpuVersion = FY, YY.fitInstances = 0, !0
    }

    function qI(YY, rY, DY) {
      let FY = null;
      for (let IY = 0; IY < YY.slotData.length; IY++) {
        var AY;
        const RY = YY.slotData[IY],
          OY = RY ? rY.gpuBuffer(RY) : DY;
        if (!OY) return !1;
        RY && YY.layout.instanceEnds[IY] < 0 && rY.cover(RY, Number.POSITIVE_INFINITY), YY.buffers[IY] = OY;
        const gY = YY.r_[IY] + (RY ? rY.gpuOffset(RY) : 0);
        gY !== (null !== (AY = FY) && void 0 !== AY ? AY : YY.offsets)[IY] && (FY ??= YY.offsets.slice(), FY[IY] = gY), YY.ends[IY] = RY ? rY.gpuEnd(RY) : OY.size
      }
      return FY && (YY.offsets = FY), !0
    }

    function pI(YY, rY, DY, FY) {
      if (rY <= YY.fitInstances) return null;
      const {
        layout: AY,
        ends: IY,
        offsets: RY,
        slotData: OY,
        r_: gY
      } = YY;
      let aY = !1;
      for (let vY = 0; vY < AY.buffers.length; vY++) {
        const YY = AY.instanceEnds[vY];
        if (YY < 0) continue;
        const FY = (rY - 1) * AY.buffers[vY].arrayStride + YY;
        if (IY[vY] - RY[vY] < FY) return {
          index: vY,
          needed: FY
        };
        const uY = OY[vY];
        uY && DY.cover(uY, gY[vY] + FY) && (aY = !0)
      }
      return aY && XI(YY, DY, FY), YY.fitInstances = rY, null
    }
    var kI = DY(37159),
      GI = DY(37189);
    const xI = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      nI = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      PI = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      UI = `((vertexInputs.aPackedLightLevels >> 16u) | ${gr.b.placed}u)`,
      LI = "u32(vertexInputs.aShaderPackItem.x)",
      tI = `${gr.b.lifeform}u`;

    function YR(YY) {
      return "item" === YY.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const rR = "bloxdSpEnchant",
      DR = "floor(finalWorld[3].xyz)";

    function FR(YY, rY, DY) {
      return "placed" === rY.kind && YY.reads[DY].includes("bloxdFragmentBlockPosition")
    }

    function AR(YY, rY) {
      let [DY, FY] = YY;
      return DY === rY.point && FY === rY.code
    }

    function IR(YY, rY) {
      var DY, FY, AY;
      const IY = null === (DY = YY.find((YY => YY.texture))) || void 0 === DY ? void 0 : DY.texture,
        RY = null === (FY = YY.find((YY => YY.enchantTier))) || void 0 === FY ? void 0 : FY.enchantTier,
        OY = null === (AY = YY.find((YY => YY.overlay))) || void 0 === AY ? void 0 : AY.overlay,
        gY = OY ? rY.filter((YY => AR(YY, OY))).length : 0;
      return OY && 1 === gY ? {
        texture: IY,
        overlay: OY,
        enchantTier: RY
      } : {
        texture: IY,
        enchantTier: RY
      }
    }

    function RR(YY) {
      if ("item" === YY.kind) {
        return {
          vertexFlags: `(${LI} & 0xffffu)`,
          varying: "vPackItem",
          value: LI,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return YY.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: UI,
        varying: "vPackFlags",
        value: UI,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function OR(YY) {
      return "lifeform" === YY.kind ? tI : "0u"
    }

    function gR(YY) {
      return !!YY.BLOXD_PLUGIN_ENCHANTMENT
    }

    function aR(YY, rY) {
      const {
        enchantTier: DY
      } = rY;
      return DY && gR(rY.defines) && "lifeform" === rY.kind && QR(YY, "enchantTier") ? DY : null
    }

    function vR(YY, rY) {
      return gR(rY.defines) && QR(YY, "enchantSpeed")
    }

    function uR(YY) {
      const {
        overlay: rY,
        defines: DY
      } = YY;
      if (!rY || !DY.DIFFUSE) return null;
      const FY = DY.VERTEXCOLOR || DY.INSTANCESCOLOR && DY.INSTANCES;
      return `vec4f(${rY.colour}.rgb * uniforms.vDiffuseInfos.y${FY?" * fragmentInputs.vColor.rgb":""}, ${rY.colour}.a)`
    }
    const sR = "fragmentInputs.vPackTexture";

    function iR(YY) {
      const {
        atlas: rY,
        defines: DY,
        texture: FY
      } = YY;
      if (rY || !DY.DIFFUSE) return null;
      if (FY) return {
        texture: "diffuseSampler",
        ...FY
      };
      const AY = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===DY.DIFFUSEDIRECTUV?"vMainUV1":2===DY.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== YY.kind) return AY;
      if (!DY.BLOXD_PLUGIN_ANIMATED) return {
        ...AY,
        id: sR
      };
      const IY = lY.e.WGSL,
        RY = (0, lY.Ib)(IY, "uAnimStatesNum"),
        OY = (0, lY.hb)(IY, (0, kI.e)(IY), RY),
        gY = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${RY})`,
        layers: [OY],
        uv: `vec2f(${gY}.x, ${gY}.y * ${RY} - ${OY})`,
        levelUv: gY,
        id: sR
      }
    }

    function yR(YY, rY) {
      return "box" === rY.kind && !!YY.hooks.surface && null !== iR(rY)
    }

    function QR(YY, rY) {
      return YY.reads.fragment.includes(rY)
    }

    function oR(YY) {
      return !!YY.BLOXD_LIGHTING && !YY.BLOXD_UNLIT
    }

    function WR(YY, rY, DY, FY) {
      const AY = YY.filter((YY => {
        let [DY, FY] = YY;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === DY && FY === rY
      }));
      if (1 !== AY.length) throw new Error(`A model program for shader packs has ${0===AY.length?"no":"more than one"} ${FY} code before fog (lite/modelShaderPack.ts)`);
      return YY.map((YY => YY === AY[0] ? [YY[0], DY] : YY))
    }

    function ER(YY, rY, DY, FY) {
      const {
        hooks: AY
      } = YY, {
        kind: IY,
        defines: RY
      } = rY, OY = [...DY];
      var gY;
      rY.atlas && AY.surface && OY.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", qD("atlasIdxIn")]), "item" === IY && OY.push(["CUSTOM_VERTEX_DEFINITIONS", (0, lY.g)(lY.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), yR(YY, rY) && OY.push(["CUSTOM_VERTEX_DEFINITIONS", (0, lY.g)(lY.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (gY = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${bD}[min(u32(${gY}) - 1u, arrayLength(&${bD}) - 1u)], ${gY} > 0.5);\n`)]);
      const aY = RR(rY);
      aY && (AY.surface || AY.light) && OY.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${aY.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${aY.varying} = ${aY.value};`]);
      let vY = FY;
      if (FR(YY, rY, "fragment") && (OY.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${DR});`]), vY = [...vY, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), QR(YY, "localPosition") && OY.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${YR(rY)};`]), gR(RY) && AY.surface) {
        vR(YY, rY) && OY.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const DY = aR(YY, rY);
        DY && OY.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${DY});`]);
        const FY = (0, lY.tb)(lY.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        vY = [...WR(vY, (0, GI.i)(lY.e.WGSL), FY, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, GI.b)(rR)]]
      }
      const {
        overlay: uY
      } = rY;
      uY && uR(rY) && AY.surface && (vY = vY.filter((YY => !AR(YY, uY))));
      const sY = AY.light ? function(YY) {
        return "placed" === YY.kind ? {
          name: "terrain",
          engine: (0, Tr.P)(lY.e.WGSL),
          pack: (0, Tr.fb)(lY.e.WGSL)
        } : YY.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Tr.H)(lY.e.WGSL),
          pack: (0, Tr.bb)(lY.e.WGSL)
        } : null
      }(rY) : null;
      if (sY && (vY = WR(vY, sY.engine, sY.pack, `${sY.name} light`), "placed" !== IY && oR(RY))) {
        const YY = RY.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, lY.Ib)(lY.e.WGSL, "uEntityLightLevels") : (0, lY.Ob)(lY.e.WGSL, "aLightLevels");
        OY.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Tr.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Tr.cb)(lY.e.WGSL, YY)])
      }
      return {
        vertexCode: OY,
        fragmentCode: vY
      }
    }

    function mR(YY, rY, DY, FY) {
      return fD(YY, rY, DY, FY, "model")
    }
    const VR = "\t@builtin(position) position: vec4f,\n";

    function SR(YY, rY) {
      const DY = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(YY)[0];
      return `${DY}${rY}${YY.slice(DY.length)}`
    }

    function lR(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: AY
      } = rY, IY = hD(rY, FY), {
        kind: RY,
        defines: OY
      } = DY, gY = function(YY, rY) {
        var DY, FY, AY;
        const {
          defines: IY
        } = rY, RY = RR(rY), OY = !!IY.FOG, gY = gR(IY), aY = null !== (DY = null === RY || void 0 === RY ? void 0 : RY.enchantTier) && void 0 !== DY ? DY : aR(YY, rY) ? "fragmentInputs.vPackEnchantTier" : "0u", vY = "lifeform" === rY.kind && !IY.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (FY = null === RY || void 0 === RY ? void 0 : RY.vertexFlags) && void 0 !== FY ? FY : OR(rY),
          vertexLocalPosition: YR(rY),
          flags: null !== (AY = null === RY || void 0 === RY ? void 0 : RY.flags) && void 0 !== AY ? AY : OR(rY),
          normal: "normalW",
          alpha: vY ? "alpha * baseColor.a" : "alpha",
          alphaOut: vY ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: OY ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: OY ? "1.0 - fog" : "0.0",
          enchantTier: aY,
          enchantColour: gY ? `${rR}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: vR(YY, rY) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: QR(YY, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: uR(rY)
        }
      }(rY, DY), aY = YY.textures.filter((YY => /^textureAtlas\d+$/.test(YY.name))).length, vY = DY.atlas && aY > 0 ? {
        count: aY,
        layers: DY.atlas.layers,
        width: DY.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: YY.material.slots.has("uAnimDataPerTex") ? (rY, DY) => BF(rY, DY, function(YY) {
          const rY = YY.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Zu: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: YY => `uniforms.uAnimDataPerTex[${YY}]${rY}`
          }
        }(YY)) : null
      } : null, uY = "placed" === RY ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", sY = null !== vY && void 0 !== vY ? vY : iR(DY), iY = function(YY, DY) {
        let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Br.x)()}${JD(rY,DY)}${FY}${kD(YY)}${zD}${uY}${rY.code}`
      };
      let {
        vertex: yY,
        fragment: QY
      } = YY;
      const oY = xD(AY, gY);
      if (oY) {
        const YY = FR(rY, DY, "vertex") ? `\tbloxdSpCell = ${DR};\n` : "";
        yY = mR(yY, xI, `${YY}${oY.slice(1)}${xI}`, "vertex")
      }
      const WY = `${MD(rY,IY,function(YY,rY){return rY.TWOSIDEDLIGHTING?YY:`select(-(${YY}), ${YY}, fragmentInputs.frontFacing)`}(gY.normal,OY),gY.flags)}${nD(AY,rY.strict,rY.program,sY,gY)}`;
      WY && (QY = mR(QY, nI, `${WY.slice(1)}${nI}`, "surface")), IY && rY.sunShadow && !OY.TWOSIDEDLIGHTING && (QY = mR(QY, VR, `${VR}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const EY = LD(AY);
      if (EY) {
        const YY = UD(AY, oR(OY), !0, gY);
        QY = mR(QY, PI, `${YY}${EY.slice(1)}${PI}`, "light")
      }
      const mY = yR(rY, DY) ? XD : "";
      return {
        ...YY,
        vertex: SR(yY, iY(vY, !1, mY)),
        fragment: SR(QY, iY(sY, IY))
      }
    }
    const TR = {
      name: "earthSky",
      uniqueId: -1
    };
    class eR {
      constructor(YY) {
        this.resources = YY, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const YY of this.instances.values()) YY.released = !0, this.resources.destroyBuffer(YY.buffer);
        this.instances.clear()
      }
    }

    function NR(YY) {
      return YY.failed && null !== YY.packGroup
    }
    class BR {
      constructor(YY, rY, DY) {
        this.device = YY, this.resources = rY, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.B3 = new cI, this.modelMeshes = new BI, this.thinBundle = void 0, this.binder = new xA, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new QI((YY => this.modelSlot(YY).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, ar.b)("Lite: "), this.renderStates = new vI(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (YY, rY) => this.keepSteady(YY, rY), this.lists = new nA(this.modelMeshes, this.B3, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new RI(rY, this.warnOnce, ((YY, rY, DY) => this.programWithModel(YY, rY, DY)), NR), this.vertexLayouts = new mI(rY, YY.limits, this.warnOnce), this.sceneLayout = rr(YY), this.frameLayout = YY.createBindGroupLayout({
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
        }), this.frameBuffer = YY.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new lI(YY, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = YY.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new zI(YY, new lI(YY, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (YY, rY, DY) => this.pipelineFor(YY, rY, DY),
          pipelineCompiling: (YY, rY) => !YY.program.failed && !1 !== this.pipelines.get(`${YY.pipelineKey}|${rY}`),
          sceneGroup: YY => {
            const rY = DY(YY);
            return rY || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), rY
          }
        }), rY.onDestroy = YY => {
          this.thinBundle.resourceDestroyed(YY)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const AY = {
          order: YY,
          isTransparent: rY,
          _direct: !rY,
          bind: (YY, rY) => this.createBinding(AY, rY, DY, FY)
        };
        return AY
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(YY, rY, DY) {
        var FY;
        let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = rY, this.drawDefines.view = rY, this.thinBundle.Om(), this.writeFrameUniforms();
        const IY = null !== (FY = null === AY || void 0 === AY ? void 0 : AY.defineFor("model")) && void 0 !== FY ? FY : 0;
        this.drawDefines.modelPackVariant = IY, AY && 0 !== IY && (this.packInputs ??= new bI(this.device, AY.textureLayers(), this.sunShadow), this.packInputs.write(AY, rY.eye, AY.GQ())), this.lists.clear(), this.slotCount = 0;
        const RY = YY.activeCamera;
        this.B3.select(RY, this.keepSteadyBase), this.modelMeshes.select(RY, rY), DY && this.pushEarthSky(DY), this.lists.collect(YY), this.thinBundle.Qm(), this.uploadMeshSlots()
      }
      pushDraws(YY, rY, DY, FY, AY, IY) {
        let RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const OY = IY.length;
        for (let gY = 0; gY < DY; gY++) {
          const DY = rY[gY];
          let OY = this.retainedDraw(YY, DY, FY, AY);
          if (void 0 === OY && (OY = this.drawFor(YY, DY, FY, AY), this.retain(DY, OY)), OY) {
            const YY = DY.owner,
              rY = RY ? RY[gY] : -1;
            OY.slotOffset = rY < 0 ? this.writeMeshSlot(YY.getWorldMatrix().m, YY.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[rY], 16 * rY), IY.push(OY)
          }
        }
        return IY.length - OY
      }
      bundleDraws(YY, rY, DY) {
        let FY = 0;
        for (const AY of rY) {
          let rY = this.retainedDraw(YY, AY, DY, !1);
          const IY = void 0 !== rY;
          if (void 0 === rY && (rY = this.drawFor(YY, AY, DY, !1), this.retain(AY, rY)), rY) {
            const YY = AY.owner,
              DY = this.thinBundle.add(AY, rY, YY.getWorldMatrix().m, YY.visibility);
            IY && this.steadyFrom(AY, rY, DY), FY++
          }
        }
        return FY
      }
      steadyFrom(YY, rY, DY) {
        const FY = YY.owner,
          AY = this.B3.base(FY),
          IY = FY.material,
          {
            drawState: RY,
            instance: OY
          } = rY.inputs.retained;
        if (!AY || !IY || 1 !== YY.parts.materials.length || eI(YY) !== IY) return;
        const gY = AY.steady ??= {
          unit: YY,
          material: IY,
          visibility: 1,
          draw: rY,
          record: DY,
          drawState: RY,
          instance: OY,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        gY.unit = YY, gY.material = IY, gY.visibility = FY.visibility, gY.draw = rY, gY.record = DY, gY.drawState = RY, gY.instance = OY, gY.bindGroup = OY.bindGroup, gY.gpuVersion = this.resources.gpuBuffersVersion, gY.fitInstances = rY.inputs.fitInstances, gY.worldFlag = FY.getWorldMatrix().updateFlag, gY.handedFrame = this.frame
      }
      keepSteady(YY, rY) {
        const DY = YY.steady;
        if (DY.handedFrame !== this.frame - 1 || (this.frame + DY.phase) % 8 === 0) return !1;
        const FY = YY.mesh,
          {
            unit: AY,
            draw: IY,
            instance: RY,
            drawState: OY
          } = DY,
          gY = FY.forcedInstanceCount || FY.R_;
        if (!FY.isVisible || FY.aFY || FY.visibility !== DY.visibility || 0 === (FY.layerMask & rY.layerMask) || FY.material !== DY.material || 0 !== FY.renderingGroupId || FY.hasVertexAlpha || !this.drawDefines.definesHold(OY, AY, OY.instancing) || DY.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(IY.inputs, AY, OY.instancing, IY.program) || IY.program.failed || RY.released || gY <= 0 || gY > DY.fitInstances) return !1;
        if (RY.frame !== this.frame && this.bindMaterial(RY, this.modelUniforms.refreshModelUniforms(FY.hT(), RY, RY.model, this.view)), !RY.bindable || RY.bindGroup !== DY.bindGroup) return !1;
        const aY = FY.computeWorldMatrix(),
          vY = aY.updateFlag !== DY.worldFlag;
        return DY.worldFlag = aY.updateFlag, IY.instances = gY, this.thinBundle.addAgain(DY.record, IY, vY ? aY.m : null, DY.visibility), DY.handedFrame = this.frame, this.B3.drawn++, !0
      }
      retainedDraw(YY, rY, DY, FY) {
        const AY = this.inputs.get(rY),
          IY = null === AY || void 0 === AY ? void 0 : AY.retained;
        if (!AY || !IY) return;
        const {
          drawState: RY,
          program: OY,
          instance: gY,
          instancing: aY
        } = IY, vY = rY.owner;
        if (YI(vY) !== aY) return;
        const uY = this.instanceCount(vY, aY);
        if (uY <= 0) return null;
        if (gY.released || OY.failed || RY.program !== OY || !this.drawDefines.programCurrent(RY, rY, aY, DY) || !this.inputsStamped(AY, rY, aY, OY) || vY.isUnIndexed !== IY.unIndexed || this.indexKey(rY) !== IY.indexData) return;
        if (IY.indexBuffer && IY.gpuVersion !== this.resources.gpuBuffersVersion) {
          const YY = this.resources.gpuBuffer(IY.indexData);
          if (!YY) return;
          IY.indexBuffer = YY, IY.gpuVersion = this.resources.gpuBuffersVersion
        }
        let sY = !1;
        if (gY.frame !== this.frame && (sY = this.modelUniforms.refreshModelUniforms(YY, gY, gY.model, this.view)), !this.bindMaterial(gY, sY) || !this.withGpuBuffers(AY) || !this.instanceBuffersFit(vY.name, AY, uY)) return null;
        const iY = this.makeDraw(OY, AY, this.renderStates.renderState(RY.model, vY, FY, AY.state), gY, uY);
        return this.setRange(iY, rY, IY.indexBuffer, IY.indexData), iY
      }
      retain(YY, rY) {
        const DY = this.drawDefines.drawStates.get(YY);
        if (!rY || !DY || DY.program !== rY.program) {
          const rY = this.inputs.get(YY);
          return void(rY && (rY.retained = null))
        }
        const FY = YY.owner,
          AY = DY.instancing,
          IY = this.indexKey(YY),
          RY = rY.inputs.retained;
        RY ? (RY.drawState = DY, RY.instancing = AY, RY.program = rY.program, RY.instance = rY.material, RY.indexData = IY, RY.unIndexed = FY.isUnIndexed, RY.indexBuffer = rY.indexBuffer, RY.gpuVersion = this.resources.gpuBuffersVersion) : rY.inputs.retained = {
          drawState: DY,
          instancing: AY,
          program: rY.program,
          instance: rY.material,
          indexData: IY,
          unIndexed: FY.isUnIndexed,
          indexBuffer: rY.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(YY, rY, DY, FY) {
        const AY = rY.owner,
          IY = eI(rY);
        if (!IY) return null;
        const RY = IY.getClassName();
        let OY = null;
        if (function(YY) {
            return "LinesMesh" === YY.getClassName()
          }(AY)) {
          if (! function(YY) {
              return "ShaderMaterial" === YY.getClassName() && "color" === YY.shaderPath
            }(IY)) return this.warnOnce(`lines:${RY}`, `A LinesMesh with a ${RY} is not drawn yet (${IY.name})`), null;
          OY = AY
        } else if ("StandardMaterial" !== RY && "LiteMaterial" !== RY) return this.warnOnce(`class:${RY}`, `${RY} is not drawn yet (${IY.name})`), null;
        const gY = YI(AY),
          aY = this.instanceCount(AY, gY);
        if (aY <= 0) return null;
        const vY = OY ? this.lineProgramFor(AY, DY, gY) : this.drawDefines.programFor(YY, rY, IY, DY, gY);
        if (!vY || vY.failed) return null;
        const uY = OY ? null : this.drawDefines.drawStates.get(rY).model,
          sY = uY ? this.modelInstance(uY, vY) : this.materialInstance(AY, vY);
        let iY = !1;
        if (sY.frame !== this.frame && (OY ? EY(sY.ubo, OY) : iY = this.modelUniforms.refreshModelUniforms(YY, sY, sY.model, this.view)), !this.bindMaterial(sY, iY)) return null;
        const yY = this.meshInputs(rY, vY, gY);
        if (!yY || !this.instanceBuffersFit(AY.name, yY, aY)) return null;
        const QY = this.indexKey(rY);
        let oY = null;
        if (QY && !AY.isUnIndexed && (oY = this.resources.gpuBuffer(QY), !oY)) return null;
        const WY = this.renderStates.renderState(null !== uY && void 0 !== uY ? uY : IY, AY, FY, yY.state, OY ? "line-list" : "triangle-list"),
          mY = this.makeDraw(vY, yY, WY, sY, aY);
        return this.setRange(mY, rY, oY, QY), mY
      }
      indexKey(YY) {
        const rY = AI(YY);
        return rY ? this.resources.modelIndex(rY) : null
      }
      setRange(YY, rY, DY, FY) {
        DY && (YY.indexBuffer = DY, YY.indexFormat = this.resources.indexFormat(FY));
        const AY = 4 * rY.range + (DY ? 0 : 2);
        YY.unit = rY, YY.first = rY.parts.ws[AY], YY.count = rY.parts.ws[AY + 1]
      }
      makeDraw(YY, rY, DY, FY, AY) {
        rY.state !== DY && (rY.state = DY, rY.pipelineKey = `${YY.id}|${rY.layout.key}|${DY.key}`, rY.pipeline = null);
        const IY = rY.draw ??= {
          program: YY,
          inputs: rY,
          pipelineKey: "",
          layout: rY.layout,
          state: DY,
          material: FY,
          slotOffset: 0,
          vertexBuffers: rY.buffers,
          vertexOffsets: rY.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: AY,
          unit: null
        };
        return IY.program = YY, IY.pipelineKey = rY.pipelineKey, IY.state = DY, IY.material = FY, IY.vertexOffsets = rY.offsets, IY.indexBuffer = null, IY.instances = AY, IY
      }
      instanceCount(YY, rY) {
        switch (rY) {
          case "thin":
            return YY.forcedInstanceCount || YY.R_;
          case "instanced":
            return this.prepareInstances(YY);
          case "none":
            return 1
        }
      }
      prepareInstances(YY) {
        const rY = function(YY, rY) {
          const DY = rY._userInstancedBuffersStorage,
            FY = YY.batchUploads.get(rY);
          if (FY) {
            var AY;
            if (FY.layout === (null !== (AY = null === DY || void 0 === DY ? void 0 : DY.interleavedKinds) && void 0 !== AY ? AY : null)) return FY;
            FY.release()
          }
          return new kY(YY, rY, DY)
        }(this.resources, YY);
        return rY.frame !== this.frame && rY.pack(YY, this.modelMeshes.instanceBatch(YY), this.modelMeshes.worlds, this.frame), rY.count
      }
      programWithModel(YY, rY, DY) {
        const FY = this.modelSlot(YY),
          AY = OI(FY, YY, DY),
          IY = this.drawDefines.modelPackKind(YY),
          RY = IY ? function(YY, rY, DY, FY) {
            const AY = (0, NY.v)(YY, TY.f.name),
              IY = [];
            for (const {
                feature: gY,
                state: aY,
                active: vY
              }
              of YY.features) {
              var RY, OY;
              const YY = vY ? null === (RY = (OY = (0, vr.j)(gY)).vy) || void 0 === RY ? void 0 : RY.call(OY, aY) : void 0;
              YY && IY.push(YY)
            }
            return {
              kind: rY,
              atlas: null !== AY && void 0 !== AY && AY.active ? (0, TY.d)(AY.state) : null,
              defines: DY,
              ...IR(IY, FY)
            }
          }(YY, IY, rY, FY.fragmentCode) : null;
        if (RY && function(YY) {
            const rY = YY.defines;
            return (null === YY.atlas || !!rY.DIFFUSE && 1 === rY.DIFFUSEDIRECTUV) && !!rY.NORMAL && !rY.REFLECTION && !rY.EMISSIVEASILLUMINATION && !rY.LINKEMISSIVEWITHDIFFUSE
          }(RY)) {
          const DY = this.modelPackProgram(YY, rY, `${AY}#${IY}#sp${this.drawDefines.modelPackVariant}`, FY, RY);
          if (DY && !DY.failed) return DY
        }
        const OY = this.programs.get(AY);
        if (OY || this.unbuildable.has(AY)) return null !== OY && void 0 !== OY ? OY : null;
        let gY;
        try {
          gY = OA({
            defines: DI(rY),
            vertexCode: FY.vertexCode,
            fragmentCode: FY.fragmentCode,
            pluginUniforms: FY.pluginUniforms
          })
        } catch (aY) {
          return this.unbuildable.add(AY), this.warnOnce(`build:${AY}`, `could not build a program for ${YY.name}: ${String(aY)}`), null
        }
        return this.createProgram(AY, gY, "standard")
      }
      modelPackProgram(YY, rY, DY, FY, AY) {
        const IY = this.programs.get(DY);
        if (IY || this.unbuildable.has(DY)) return null !== IY && void 0 !== IY ? IY : null;
        const RY = this.drawDefines.modelPackVariant;
        let OY;
        try {
          const YY = function(YY) {
              return (0, cr.c)(YY, "model")
            }(RY),
            DY = ER(YY, AY, FY.vertexCode, FY.fragmentCode);
          OY = lR(OA({
            defines: DI(rY),
            ...DY,
            pluginUniforms: FY.pluginUniforms
          }), YY, AY, !!this.sunShadow)
        } catch (vY) {
          return this.unbuildable.add(DY), this.warnOnce(`build:${DY}`, `could not build a shader pack program for ${YY.name}, which draws without the pack: ${String(vY)}`), null
        }
        const gY = MI(RY, !!this.sunShadow),
          aY = {
            group: this.packInputs.bindGroupFor(null, gY),
            layout: dI(this.device, {
              depth: !1,
              sunShadow: gY
            })
          };
        return this.createProgram(DY, OY, function(YY) {
          return `standard-sp${YY}`
        }(RY), aY)
      }
      lineProgramFor(YY, rY, DY) {
        const FY = WY(YY, DY, rY, this.view);
        let AY = this.linePrograms.get(FY);
        var IY;
        return AY || (AY = this.createProgram(`lines#${FY}`, (IY = function(YY) {
          const rY = new Map;
          for (let DY = 0; DY < aY.length; DY++) YY & 1 << DY && rY.set(aY[DY], !0);
          return rY
        }(FY), uA({
          defines: IY,
          vertex: aA,
          fragment: vA,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(FY, AY)), AY
      }
      createProgram(YY, rY, DY) {
        var FY;
        let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const IY = this.nextProgramId++,
          RY = `${DY}-${IY}`,
          OY = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          gY = [{
            binding: 0,
            visibility: OY,
            buffer: {
              type: "uniform"
            }
          }];
        for (const uY of rY.textures) gY.push({
          binding: uY.binding,
          visibility: OY,
          texture: {
            viewDimension: uY.dimension
          }
        }), gY.push({
          binding: uY.samplerBinding,
          visibility: OY,
          sampler: {}
        });
        const aY = this.device.createBindGroupLayout({
            label: RY,
            entries: gY
          }),
          vY = {
            key: YY,
            id: IY,
            kind: DY,
            program: rY,
            vertex: this.device.createShaderModule({
              label: `${RY}-vertex`,
              code: rY.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${RY}-fragment`,
              code: rY.fragment
            }),
            materialLayout: aY,
            pipelineLayout: this.device.createPipelineLayout({
              label: RY,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, aY, ...AY ? [AY.layout] : []]
            }),
            packGroup: null !== (FY = null === AY || void 0 === AY ? void 0 : AY.group) && void 0 !== FY ? FY : null,
            failed: !1
          };
        return this.programs.set(YY, vY), vY
      }
      writeFrameUniforms() {
        const YY = this.frameUniforms;
        yI(this.view, YY), this.device.queue.writeBuffer(this.frameBuffer, 0, YY)
      }
      materialInstance(YY, rY) {
        let DY = this.materials.get(YY);
        if (!DY) {
          const rY = new Map;
          this.materials.set(YY, rY), YY.wT.addOnce((() => {
            for (const YY of rY.values()) YY.released = !0, this.resources.destroyBuffer(YY.buffer);
            this.materials.delete(YY)
          })), DY = rY
        }
        let FY = DY.get(rY.key);
        return FY || (FY = this.newMaterialInstance(YY, null, rY), DY.set(rY.key, FY)), FY
      }
      modelInstance(YY, rY) {
        const DY = this.modelSlot(YY);
        let FY = DY.instances.get(rY.key);
        return FY || (FY = this.newMaterialInstance(YY, YY, rY), DY.instances.set(rY.key, FY)), FY
      }
      modelSlot(YY) {
        let rY = YY.gpu[cY.g.lite];
        return rY || (rY = new eR(this.resources), YY.gpu[cY.g.lite] = rY), rY
      }
      newMaterialInstance(YY, rY, DY) {
        const FY = DY.program.material.floats,
          AY = new Float32Array(FY),
          IY = new Map;
        return {
          owner: YY,
          model: rY,
          program: DY,
          data: AY,
          uploaded: new Float32Array(FY).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${YY.name}-uniforms`,
            size: Math.max(16, 4 * FY),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: IY,
          ubo: new iI(DY.program.material.slots, AY, IY),
          bindGroup: null,
          bound: new Array(2 * DY.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(YY) {
        var rY;
        const DY = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: oA + WA,
            fragment: oA + EA,
            attributes: [],
            material: QA,
            textures: []
          }, "earthSky"),
          FY = this.earthSkyUniforms ??= this.newMaterialInstance(TR, null, DY);
        this.earthSkyFrom !== YY && (this.earthSkyFrom = YY, FY.data.fill(0)), BA(FY.ubo, YY, this.view);
        const AY = this.vertexInputs(DY, TR, "earthSky", DY, null);
        if (DY.failed || !AY || !this.bindMaterial(FY, !1)) return;
        const IY = null !== (rY = AY.state) && void 0 !== rY ? rY : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          RY = this.makeDraw(DY, AY, IY, FY, 1);
        RY.count = sA.length;
        const OY = cA(YY, this.view);
        RY.slotOffset = this.writeMeshSlot(OY, 1), this.lists.skyDraws.push(RY)
      }
      uploadIfChanged(YY) {
        const {
          data: rY,
          uploaded: DY
        } = YY;
        for (let FY = 0; FY < rY.length; FY++)
          if (rY[FY] !== DY[FY]) return DY.set(rY), void this.device.queue.writeBuffer(YY.buffer, 0, rY)
      }
      bindMaterial(YY, rY) {
        return YY.frame !== this.frame && (YY.frame = this.frame, rY || this.uploadIfChanged(YY), YY.bindable = this.bindTextures(YY)), YY.bindable
      }
      bindTextures(YY) {
        const {
          program: rY,
          bound: DY
        } = YY, FY = rY.program.textures;
        let AY = !YY.bindGroup,
          IY = !0;
        for (let RY = 0; RY < FY.length; RY++) {
          const rY = YY.textures.get(FY[RY].name),
            OY = rY ? this.resources.boundTexture(rY) : null;
          OY ? DY[2 * RY] === OY.view && DY[2 * RY + 1] === OY.sampler || (DY[2 * RY] = OY.view, DY[2 * RY + 1] = OY.sampler, AY = !0) : (rY || YY.ubo.expected.has(FY[RY].name) || this.warnOnce(`texture:${YY.owner.name}:${FY[RY].name}`, `${YY.owner.name} has no ${FY[RY].name}`), IY = !1)
        }
        if (!IY) return AY && (YY.bindGroup = null), !1;
        if (AY) {
          const AY = [{
            binding: 0,
            resource: {
              buffer: YY.buffer
            }
          }];
          for (let YY = 0; YY < FY.length; YY++) AY.push({
            binding: FY[YY].binding,
            resource: DY[2 * YY]
          }), AY.push({
            binding: FY[YY].samplerBinding,
            resource: DY[2 * YY + 1]
          });
          YY.bindGroup = this.device.createBindGroup({
            label: `${YY.owner.name}-material`,
            layout: rY.materialLayout,
            entries: AY
          })
        }
        return !0
      }
      writeMeshSlot(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, YY, rY, DY), this.slotCount++ * wF
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(YY, rY, DY, FY, AY) {
        let IY = this.inputs.get(YY);
        if (!IY || IY.program !== FY || !VI(rY, IY, this.resources, AY)) {
          var RY;
          if (IY = null !== (RY = this.vertexLayouts.resolveInputs(rY, DY, FY, AY)) && void 0 !== RY ? RY : void 0, !IY) return null;
          this.inputs.set(YY, IY)
        }
        return this.withGpuBuffers(IY)
      }
      meshInputs(YY, rY, DY) {
        const FY = this.inputs.get(YY);
        if (FY && this.inputsStamped(FY, YY, DY, rY)) return this.withGpuBuffers(FY);
        const AY = YY.owner,
          IY = AI(YY),
          RY = this.vertexInputs(YY, AY, AY.name, rY, IY);
        return RY && (RY.geometry = II(YY), RY.instanceLayout = this.drawDefines.instanceLayout(AY, DY)), RY
      }
      inputsStamped(YY, rY, DY, FY) {
        return function(YY, rY, DY, FY) {
          return YY.program === DY && YY.geometry === II(rY) && YY.instanceLayout === FY
        }(YY, rY, FY, this.drawDefines.instanceLayout(rY.owner, DY))
      }
      withGpuBuffers(YY) {
        return XI(YY, this.resources, this.zeroBuffer) ? YY : null
      }
      instanceBuffersFit(YY, rY, DY) {
        const FY = pI(rY, DY, this.resources, this.zeroBuffer);
        if (FY) {
          const AY = rY.ends[FY.index] - rY.offsets[FY.index] + rY.r_[FY.index];
          return this.warnOnce(`overrun:${YY}`, `${YY} draws ${DY} instances from a ${AY}-byte buffer (${FY.needed} needed)`), !1
        }
        return !0
      }
      createBinding(YY, rY, DY, FY) {
        const AY = `${rY._colorFormat}|${rY._depthStencilFormat}|${rY._depthCompare}|${rY._sampleCount}`,
          IY = Rr(this.device, rY);
        if (YY === this.skyLastRenderable) {
          let DY = null;
          return {
            renderable: YY,
            pipeline: IY,
            draw: YY => DY ? this.drawSky(YY, rY, AY, DY) : 0,
            update: YY => {
              DY = YY
            }
          }
        }
        return {
          renderable: YY,
          pipeline: IY,
          draw: YY => (FY ? FY.execute(YY, rY, AY) : 0) + this.drawList(YY, rY, AY, DY)
        }
      }
      drawSky(YY, rY, DY, FY) {
        const AY = this.lists.skyDraws,
          IY = AY.length > 0;
        if (IY) {
          var RY;
          const DY = (null !== (RY = rY._depthCompare) && void 0 !== RY ? RY : Dr).startsWith("greater") ? 0 : 1;
          YY.setViewport(0, 0, FY.targetWidth, FY.targetHeight, DY, DY)
        }
        const OY = this.drawList(YY, rY, DY, AY);
        return IY && YY.setViewport(0, 0, FY.targetWidth, FY.targetHeight, 0, 1), OY
      }
      drawList(YY, rY, DY, FY) {
        let AY = 0;
        const IY = this.binder;
        IY.reset();
        for (const RY of FY) {
          const FY = this.pipelineFor(RY, rY, DY);
          FY && (IY.bind(YY, RY, FY, this.meshSlots.bindGroup, RY.slotOffset), RY.indexBuffer ? YY.drawIndexed(RY.count, RY.instances, RY.first, 0, 0) : YY.draw(RY.count, RY.instances, RY.first, 0), AY++)
        }
        return AY
      }
      pipelineFor(YY, rY, DY) {
        var FY, AY;
        if (YY.program.failed) return null;
        const IY = YY.inputs;
        if (IY.pipeline && IY.pipelineTarget === DY) return IY.pipeline;
        const RY = `${YY.pipelineKey}|${DY}`,
          OY = this.pipelines.get(RY);
        if (void 0 !== OY) return OY && (IY.pipeline = OY, IY.pipelineTarget = DY), OY || null;
        this.pipelines.set(RY, null);
        const {
          program: gY,
          layout: aY,
          state: vY
        } = YY, uY = {
          label: `standard-${gY.id}`,
          layout: gY.pipelineLayout,
          vertex: {
            module: gY.vertex,
            entryPoint: "main",
            buffers: aY.buffers
          },
          fragment: UY({
            module: gY.fragment,
            entryPoint: "main"
          }, rY, vY.blend, vY.colourWrite),
          depthStencil: rY._depthStencilFormat ? {
            format: rY._depthStencilFormat,
            depthCompare: null !== (FY = null !== (AY = vY.depthCompare) && void 0 !== AY ? AY : rY._depthCompare) && void 0 !== FY ? FY : Dr,
            depthWriteEnabled: vY.depthWrite,
            depthBias: vY.depthBias,
            depthBiasSlopeScale: vY.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: rY._sampleCount
          },
          primitive: {
            topology: vY.topology,
            frontFace: vY.frontFace,
            cullMode: vY.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(uY).then((YY => {
          this.compiling--, this.pipelines.set(RY, YY)
        }), (YY => {
          this.compiling--, this.reportFailure(gY, RY, YY)
        })), null
      }
      forEachSunShadowCaster(YY) {
        const rY = this.caster,
          DY = (DY, FY, AY) => {
            const IY = DY.unit && function(YY) {
              const rY = YY.material.model;
              return null !== rY && (rY.lifeform || rY.item) && rY.castsSunShadow && "triangle-list" === YY.state.topology
            }(DY) ? AI(DY.unit) : null;
            if (!IY) return;
            const RY = DY.unit.owner;
            switch (rY.geometry = IY, rY.skip = RY.noSunShadowVertices, rY.indexed = null !== DY.indexBuffer, rY.first = DY.first, rY.count = DY.count, rY.Mu = FY, rY.worldAt = AY, rY.instances = null, rY.instanceCount = 1, rY.thin = !1, YI(RY)) {
              case "thin": {
                const YY = RY._thinInstanceDataStorage.matrixData;
                if (!YY) return;
                rY.instances = YY, rY.instanceCount = Math.min(DY.instances, YY.length / 16), rY.thin = !0;
                break
              }
              case "instanced": {
                const YY = this.resources.batchUploads.get(RY);
                if (!YY || YY.frame !== this.frame || !this.writeBatchCasters(YY)) return;
                break
              }
            }
            YY(rY)
          };
        for (const FY of this.lists.opaqueDraws) DY(FY, this.meshSlots.data, FY.slotOffset / 4);
        this.thinBundle.forEachDrawn(DY)
      }
      writeBatchCasters(YY) {
        const {
          caster: rY
        } = this, DY = YY.packedMatrices, FY = YY.count;
        rY.instances = DY, rY.instanceCount = FY;
        let AY = -1;
        for (let IY = 0; IY < FY; IY++) {
          const rY = cR(YY.packedRowMesh(IY));
          rY && AY < 0 ? (this.casterWorlds.length < 16 * FY && (this.casterWorlds = new Float32Array(DY.length)), this.casterWorlds.set(DY.subarray(0, 16 * IY)), AY = IY) : !rY && AY >= 0 && (this.casterWorlds.set(DY.subarray(16 * IY, 16 * IY + 16), 16 * AY), AY++)
        }
        return AY >= 0 && (rY.instances = this.casterWorlds, rY.instanceCount = AY), rY.instanceCount > 0
      }
      async reportFailure(YY, rY, DY) {
        const FY = [];
        let AY = !0;
        for (const [IY, RY] of [
            ["vertex", YY.vertex],
            ["fragment", YY.fragment]
          ]) {
          const YY = await RY.getCompilationInfo();
          for (const rY of YY.messages) AY &&= "error" !== rY.type, FY.push(`${IY}:${rY.lineNum}:${rY.linePos} ${rY.type}: ${rY.message}`)
        }
        if (AY && !YY.packGroup) return this.pipelines.set(rY, !1), console.error(`Lite: pipeline ${rY} failed`, DY), void GA("mesh", YY.kind, DY);
        YY.failed || (YY.failed = !0, console.error(`Lite: program ${YY.id} failed`, DY, FY.join("\n"), {
          program: YY.program,
          key: YY.key
        }), GA("mesh", YY.kind, DY, AY ? null : FY[0]))
      }
    }

    function cR(YY) {
      var rY, DY;
      const FY = null === (rY = YY.YB) || void 0 === rY || null === (DY = rY.aShaderPackItem) || void 0 === DY ? void 0 : DY.x;
      return void 0 !== FY && 0 !== (FY & gr.g)
    }
    var KR = DY(40749),
      HR = DY(40758),
      zR = DY(40764),
      ZR = DY(40710);
    const CR = [0, 3, 1, 4, 2, 5];

    function fR(YY, rY, DY, FY, AY) {
      const IY = DY[0].width;
      try {
        return AY ? function(YY, rY, DY) {
          const FY = (0, ZR.d)(YY, DY, DY, 6);
          for (let AY = 0; AY < 6; AY++)(0, ZR.g)(YY, FY, AY, rY[CR[AY]], {
            invertY: !1
          });
          return FY.texture
        }(YY, DY, IY) : function(YY, rY, DY, FY) {
          const AY = YY.createTexture({
            label: "sink-cube",
            size: {
              width: DY,
              height: DY,
              depthOrArrayLayers: 6
            },
            format: FY,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let IY = 0; IY < 6; IY++) YY.queue.copyExternalImageToTexture({
            source: rY[CR[IY]]
          }, {
            texture: AY,
            origin: {
              x: 0,
              y: 0,
              z: IY
            }
          }, {
            width: DY,
            height: DY
          });
          return AY
        }(rY, DY, IY, 1 === FY ? "r8unorm" : "rgba8unorm")
      } finally {
        jR(DY)
      }
    }

    function jR(YY) {
      for (const rY of null !== YY && void 0 !== YY ? YY : []) null === rY || void 0 === rY || rY.close()
    }
    async function hR(YY) {
      const rY = [],
        DY = [];
      if (await Promise.all(YY.map(((YY, FY) => (rY[FY] = null, YY.then((YY => {
          rY[FY] = YY
        }), (YY => {
          DY.push(YY)
        })))))), DY.length > 0) throw jR(rY), DY[0];
      return rY
    }
    class dR {
      constructor(YY) {
        this.gu = YY, this.starts = [], this.lengths = [], this.used = 0, YY > 0 && (this.starts.push(0), this.lengths.push(YY))
      }
      allocate(YY) {
        const {
          starts: rY,
          lengths: DY
        } = this;
        for (let FY = 0; FY < rY.length; FY++) {
          if (DY[FY] < YY) continue;
          const AY = rY[FY];
          return DY[FY] === YY ? (rY.splice(FY, 1), DY.splice(FY, 1)) : (rY[FY] += YY, DY[FY] -= YY), this.used += YY, AY
        }
        return -1
      }
      free(YY, rY) {
        this.used -= rY;
        const DY = Math.min(YY + rY, this.gu);
        DY > YY && this.release(YY, DY - YY)
      }
      grow(YY) {
        const rY = this.gu;
        this.gu = YY, this.release(rY, YY - rY)
      }
      truncate(YY) {
        const {
          starts: rY,
          lengths: DY
        } = this;
        for (let FY = rY.length - 1; FY >= 0 && rY[FY] + DY[FY] > YY; FY--) rY[FY] >= YY ? (rY.splice(FY, 1), DY.splice(FY, 1)) : DY[FY] = YY - rY[FY];
        this.gu = YY
      }
      release(YY, rY) {
        const {
          starts: DY,
          lengths: FY
        } = this;
        let AY = 0,
          IY = DY.length;
        for (; AY < IY;) {
          const rY = AY + IY >> 1;
          DY[rY] < YY ? AY = rY + 1 : IY = rY
        }
        const RY = AY,
          OY = RY > 0 && DY[RY - 1] + FY[RY - 1] === YY,
          gY = RY < DY.length && YY + rY === DY[RY];
        OY && gY ? (FY[RY - 1] += rY + FY[RY], DY.splice(RY, 1), FY.splice(RY, 1)) : OY ? FY[RY - 1] += rY : gY ? (DY[RY] = YY, FY[RY] += rY) : (DY.splice(RY, 0, YY), FY.splice(RY, 0, rY))
      }
    }
    const JR = 256;
    class MR {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = YY, this.onReplaced = rY, this.mergeGap = DY, this.gpu = null, this.bytes = void 0, this.ws = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const AY = Math.max(JR, Math.ceil(FY / JR) * JR);
        this.bytes = new Uint8Array(AY), this.ws = new dR(AY / JR)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(YY) {
        return Math.max(1, Math.ceil(YY / JR)) * JR
      }
      allocate(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YY;
        const FY = MR.slotBytes(YY),
          AY = FY / JR;
        let IY = this.ws.allocate(AY);
        IY < 0 && (this.grow(this.ws.gu + AY), IY = this.ws.allocate(AY));
        const RY = IY * JR;
        return this.growTo(RY + Math.max(DY, FY)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, RY, RY + FY), rY && this.bytes.set(new Uint8Array(rY.buffer, rY.byteOffset, Math.min(rY.byteLength, FY)), RY), this.markDirty(RY, RY + FY), RY
      }
      growTo(YY) {
        const rY = Math.ceil(YY / JR);
        rY > this.ws.gu && this.grow(rY)
      }
      free(YY, rY) {
        this.freed.push(YY, rY)
      }
      write(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (FY <= 0) return;
        this.bytes.set(new Uint8Array(rY.buffer, DY, FY), YY);
        let IY = YY + FY;
        if (AY) {
          const rY = YY + 4 * Math.ceil(FY / 4);
          this.bytes.fill(0, IY, rY), IY = rY
        }
        this.markDirty(YY, IY)
      }
      move(YY, rY, DY) {
        this.bytes.copyWithin(rY, YY, YY + DY), this.markDirty(rY, rY + DY)
      }
      flush() {
        for (const rY of this.retired) this.onReplaced(rY), rY.destroy();
        this.retired.length = 0;
        const YY = this.dirtyStarts.length;
        if (YY > 0) {
          const {
            dirtyStarts: rY,
            dirtyEnds: DY,
            order: FY
          } = this;
          FY.length = YY;
          for (let OY = 0; OY < YY; OY++) FY[OY] = OY;
          YY > 1 && FY.sort(((YY, DY) => rY[YY] - rY[DY]));
          const AY = this.mergeGap;
          let IY = rY[FY[0]],
            RY = DY[FY[0]];
          for (let OY = 1; OY < YY; OY++) {
            const YY = FY[OY];
            rY[YY] - RY <= AY ? RY = Math.max(RY, DY[YY]) : (this.send(IY, RY), IY = rY[YY], RY = DY[YY])
          }
          this.send(IY, RY), rY.length = 0, DY.length = 0
        }
        this.holding = !1
      }
      Qm() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const YY = this.freed;
        for (let rY = 0; rY < YY.length; rY += 2) this.ws.free(YY[rY] / JR, YY[rY + 1] / JR);
        YY.length = 0
      }
      send(YY, rY) {
        this.device.queue.writeBuffer(this.gpu, YY, this.bytes.buffer, YY, rY - YY);
        for (const DY of this.replaced) {
          const FY = Math.min(rY, DY.size);
          FY > YY && this.device.queue.writeBuffer(DY, YY, this.bytes.buffer, YY, FY - YY)
        }
      }
      markDirty(YY, rY) {
        YY &= -4, rY = rY + 3 & -4, this.holding ? (this.dirtyStarts.push(YY), this.dirtyEnds.push(rY)) : this.send(YY, rY)
      }
      grow(YY) {
        const rY = this.ws.gu,
          DY = Math.max(2 * rY, YY),
          FY = new Uint8Array(DY * JR);
        FY.set(this.bytes);
        const AY = this.gpu;
        this.gpu = this.createGpu(FY.byteLength), this.bytes = FY, this.ws.grow(DY), AY && (this.replaced.push(AY), this.onReplaced(AY)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, rY * JR)
      }
      createGpu(YY) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: YY,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function wR(YY) {
      return Array.isArray(YY) ? new Float32Array(YY) : YY
    }

    function bR(YY, rY, DY, FY, AY) {
      const IY = HA(AY),
        RY = Math.min(AY, FY.byteLength);
      if (IY === RY && FY.byteOffset % 4 === 0) return void YY.queue.writeBuffer(rY, DY, FY.buffer, FY.byteOffset, IY);
      const OY = new Uint8Array(IY);
      OY.set(new Uint8Array(FY.buffer, FY.byteOffset, RY)), YY.queue.writeBuffer(rY, DY, OY)
    }

    function XR(YY, rY, DY) {
      const FY = "linear",
        AY = "nearest";
      let IY = AY,
        RY = AY,
        OY = "nearest",
        gY = !rY;
      switch (YY) {
        case 11:
          IY = FY, RY = FY;
          break;
        case 3:
          IY = FY, RY = FY, OY = rY ? "linear" : "nearest";
          break;
        case 8:
          OY = rY ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          RY = FY;
          break;
        case 6:
          RY = FY, OY = rY ? "linear" : "nearest";
          break;
        case 7:
          RY = FY, gY = !0;
          break;
        case 9:
          IY = FY;
          break;
        case 10:
          IY = FY, OY = rY ? "linear" : "nearest";
          break;
        case 2:
          IY = FY, RY = FY, DY > 1 ? (OY = "linear", gY = !1) : gY = !0;
          break;
        case 12:
          IY = FY, gY = !0;
          break;
        default:
          gY = !0
      }
      return DY > 1 && !gY ? {
        magFilter: FY,
        minFilter: FY,
        mipmapFilter: "linear",
        maxAnisotropy: DY
      } : {
        magFilter: IY,
        minFilter: RY,
        mipmapFilter: OY,
        ...gY ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function qR(YY) {
      return 0 === YY ? "clamp-to-edge" : 2 === YY ? "mirror-repeat" : "repeat"
    }
    class pR {
      constructor(YY, rY) {
        let {
          vertexArena: DY = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = YY, this.device = rY, this.buffers = new WeakMap, this.kU = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = DY ? new MR(rY, (YY => {
          var rY;
          null === (rY = this.onDestroy) || void 0 === rY || rY.call(this, YY), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var YY;
        null === (YY = this.arena) || void 0 === YY || YY.flush()
      }
      endUploadFrame() {
        var YY;
        null === (YY = this.arena) || void 0 === YY || YY.Qm()
      }
      vertexBufferCreated(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DY ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(YY);
        const AY = wR(rY);
        YY.gu = AY.byteLength, this.buffers.set(YY, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: DY && null !== this.arena,
          pending: AY,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: FY
        })
      }
      vertexBufferUpdated(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        const AY = this.buffers.get(YY);
        if (!AY) return;
        const IY = wR(rY),
          RY = void 0 === FY ? IY.byteLength : Math.min(FY, IY.byteLength);
        this.update(AY, IY, DY, RY)
      }
      vertexBufferFloatsUpdated(YY, rY, DY, FY) {
        const AY = this.buffers.get(YY);
        if (!AY) return;
        const IY = DY * Float32Array.BYTES_PER_ELEMENT,
          RY = (FY - DY) * Float32Array.BYTES_PER_ELEMENT;
        AY.slot >= 0 && RY > 0 && IY + RY <= AY.size ? this.writeSlot(AY, IY, rY, rY.byteOffset + IY, RY, !1) : AY.gpu && RY > 0 && IY + RY <= AY.gpu.size ? this.device.queue.writeBuffer(AY.gpu, IY, rY.buffer, rY.byteOffset + IY, RY) : this.update(AY, rY.subarray(DY, FY), IY, RY)
      }
      indexBufferCreated(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(YY);
        const FY = function(YY) {
          if (YY instanceof Uint16Array || YY instanceof Uint32Array) return YY;
          for (let rY = 0; rY < YY.length; rY++)
            if (YY[rY] >= 65535) return new Uint32Array(YY);
          return new Uint16Array(YY)
        }(rY);
        YY.is32Bits = 4 === FY.BYTES_PER_ELEMENT, YY.gu = FY.byteLength, this.buffers.set(YY, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: FY,
          ownsPending: FY !== rY,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: DY
        })
      }
      bufferDeleted(YY) {
        const rY = this.buffers.get(YY);
        null !== rY && void 0 !== rY && rY.gpu ? (this.destroyBuffer(rY.gpu), this.gpuBuffersVersion++) : rY && rY.slot >= 0 && (this.arena.free(rY.slot, rY.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(YY)
      }
      update(YY, rY, DY, FY) {
        if (YY.slot >= 0) this.updateSlot(YY, rY, DY, FY);
        else if (YY.gpu) {
          if (DY + HA(FY) > YY.gpu.size) {
            const rY = this.device.createBuffer({
                label: YY.label,
                size: HA(Math.max(2 * YY.gpu.size, DY + FY)),
                usage: YY.usage | GPUBufferUsage.COPY_SRC
              }),
              AY = this.device.createCommandEncoder();
            AY.copyBufferToBuffer(YY.gpu, 0, rY, 0, YY.gpu.size), this.device.queue.submit([AY.finish()]), this.destroyBuffer(YY.gpu), this.gpuBuffersVersion++, YY.gpu = rY
          }
          bR(this.device, YY.gpu, DY, rY, FY)
        } else {
          const IY = new Uint8Array(rY.buffer, rY.byteOffset, FY),
            RY = YY.pending;
          if (RY && YY.ownsPending && DY + FY <= RY.byteLength) new Uint8Array(RY.buffer, RY.byteOffset, RY.byteLength).set(IY, DY);
          else if (RY && 0 === DY && FY === RY.byteLength && rY.byteLength === FY) YY.pending = rY, YY.ownsPending = !1;
          else {
            var AY;
            const rY = new Uint8Array(Math.max(null !== (AY = null === RY || void 0 === RY ? void 0 : RY.byteLength) && void 0 !== AY ? AY : 0, DY + FY));
            RY && rY.set(new Uint8Array(RY.buffer, RY.byteOffset, RY.byteLength)), rY.set(IY, DY), YY.pending = rY, YY.ownsPending = !0
          }
        }
      }
      updateSlot(YY, rY, DY, FY) {
        const AY = this.arena;
        DY + HA(FY) > YY.size && (YY.size = HA(Math.max(2 * YY.size, DY + FY)), AY.growTo(YY.slot + YY.size), this.gpuBuffersVersion++), 0 === FY ? this.writeSlot(YY, DY, GR, 0, 4, !1) : this.writeSlot(YY, DY, rY, rY.byteOffset, FY, !0)
      }
      writeSlot(YY, rY, DY, FY, AY, IY) {
        const RY = rY + (IY ? HA(AY) : AY);
        RY > YY.slotBytes && this.moveSlot(YY, RY), this.arena.write(YY.slot + rY, DY, FY, AY, IY)
      }
      moveSlot(YY, rY) {
        const DY = this.arena,
          FY = MR.slotBytes(Math.max(rY, Math.min(2 * YY.slotBytes, YY.size))),
          AY = DY.allocate(FY, null, YY.size);
        DY.move(YY.slot, AY, YY.slotBytes), DY.free(YY.slot, YY.slotBytes), YY.slot = AY, YY.slotBytes = FY, this.gpuBuffersVersion++
      }
      cover(YY, rY) {
        const DY = this.buffers.get(YY);
        if (!DY || DY.slot < 0) return !1;
        const FY = Math.min(rY, DY.size);
        return !(FY <= DY.slotBytes) && (this.moveSlot(DY, FY), !0)
      }
      destroyBuffer(YY) {
        var rY;
        null === (rY = this.onDestroy) || void 0 === rY || rY.call(this, YY), YY.destroy()
      }
      gpuBuffer(YY) {
        const rY = this.buffers.get(YY);
        if (!rY) return null;
        if (rY.slot >= 0) return this.arena.buffer;
        if (rY.arena && rY.pending) {
          const YY = rY.pending,
            DY = this.arena;
          return rY.size = HA(YY.byteLength), rY.slotBytes = MR.slotBytes(function(YY) {
            const rY = new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength);
            let DY = rY.length;
            if (YY.byteOffset % 4 === 0) {
              for (; DY % 4 !== 0 && 0 === rY[DY - 1];) DY--;
              if (DY % 4 === 0) {
                const rY = new Uint32Array(YY.buffer, YY.byteOffset, DY / 4);
                let FY = rY.length;
                for (; FY > 0 && 0 === rY[FY - 1];) FY--;
                DY = 4 * FY
              }
            }
            for (; DY > 0 && 0 === rY[DY - 1];) DY--;
            return DY
          }(YY)), rY.slot = DY.allocate(rY.slotBytes, YY, rY.size), rY.pending = null, DY.buffer
        }
        if (!rY.gpu && rY.pending) {
          const YY = rY.pending;
          rY.gpu = this.device.createBuffer({
            label: rY.label,
            size: HA(YY.byteLength),
            usage: rY.usage
          }), bR(this.device, rY.gpu, 0, YY, YY.byteLength), rY.pending = null
        }
        return rY.gpu
      }
      gpuOffset(YY) {
        var rY, DY;
        const FY = null !== (rY = null === (DY = this.buffers.get(YY)) || void 0 === DY ? void 0 : DY.slot) && void 0 !== rY ? rY : -1;
        return FY < 0 ? 0 : FY
      }
      gpuEnd(YY) {
        var rY, DY;
        const FY = this.buffers.get(YY);
        return FY ? FY.slot >= 0 ? FY.slot + FY.size : null !== (rY = null === (DY = FY.gpu) || void 0 === DY ? void 0 : DY.size) && void 0 !== rY ? rY : 0 : 0
      }
      vertexInput(YY, rY, DY) {
        var FY, AY, IY, RY;
        return null !== (FY = null !== (AY = DY && this.modelInput(DY, rY)) && void 0 !== AY ? AY : null === (IY = null !== (RY = this.kU.get(YY)) && void 0 !== RY ? RY : this.batchUploads.get(YY)) || void 0 === IY ? void 0 : IY.inputs[rY]) && void 0 !== FY ? FY : null
      }
      modelInput(YY, rY) {
        const DY = this.geometrySlot(YY);
        let FY = DY.inputs.get(rY);
        if (void 0 === FY) {
          const AY = YY.vertexAttributes.find((YY => YY.kind === rY));
          FY = AY ? new GY(this.modelKey(DY, AY.data, !1), AY.offset, AY.stride, AY.components, !1, AY.glType, AY.isNormalized) : null, DY.inputs.set(rY, FY)
        }
        return FY
      }
      modelIndex(YY) {
        return YY.indexData && this.modelKey(this.geometrySlot(YY), YY.indexData, !0)
      }
      geometrySlot(YY) {
        let rY = YY.gpu[cY.g.lite];
        if (!rY) {
          const DY = new Map,
            FY = () => {
              for (const YY of DY.values()) this.bufferDeleted(YY)
            },
            AY = YY => {
              const rY = DY.get(YY);
              rY && this.vertexBufferUpdated(rY, YY)
            };
          rY = {
            keys: DY,
            inputs: new Map,
            release: FY,
            updated: AY
          }, YY.gpu[cY.g.lite] = rY
        }
        return rY
      }
      modelKey(YY, rY, DY) {
        let FY = YY.keys.get(rY);
        if (!FY) {
          if (DY) {
            const YY = {
              gu: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(YY, rY, "model-indices"), FY = YY
          } else FY = {
            gu: 0
          }, this.vertexBufferCreated(FY, rY, !1, "model-vertices");
          YY.keys.set(rY, FY)
        }
        return FY
      }
      indexFormat(YY) {
        return YY.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(YY, rY) {
        --YY.refs > 0 || (this.releaseTexture(YY), jR(YY.images), null !== rY && this.textures.delete(rY))
      }
      load(YY, rY) {
        const DY = rY.decoded = async function(YY) {
          if ("cube" === YY.kind) return async function(YY) {
            if (6 !== YY.length) throw new Error(`${YY.length} files where six faces were expected`);
            const rY = await hR(YY.map((YY => hA(YY)))),
              DY = rY[0].width;
            return hR(rY.map((async YY => {
              if (YY.width === DY && YY.height === DY) return YY;
              try {
                return await createImageBitmap(YY, {
                  ...fA,
                  resizeWidth: DY,
                  resizeHeight: DY
                })
              } finally {
                YY.close()
              }
            })))
          }(YY.files);
          if ("data" === YY.kind && YY.data) return [await createImageBitmap(new Blob([YY.data]), fA)];
          return [await hA(kR(YY))]
        }(YY.source).then((YY => {
          0 === rY.refs ? jR(YY) : rY.images = YY
        }));
        this.track(rY, kR(YY.source), DY, (() => {
          rY.wanted && !rY.failed && rY.refs > 0 && this.upload(YY, rY)
        }))
      }
      canvasUpdated(YY, rY, DY) {
        const {
          state: FY
        } = this.textureSlot(YY);
        FY.dynamicSource = {
          invertY: rY,
          premultiplied: DY
        }, FY.dynamic && this.pushDynamic(YY.source, FY)
      }
      async atlasArray(YY, rY, DY) {
        const FY = await MA(this.device, YY, rY, DY);
        if (!this.atlasBindings.has(FY)) {
          const YY = (0, KR.d)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(FY, {
            view: FY.texture.createView({
              dimension: "2d-array"
            }),
            sampler: YY
          })
        }
        return FY
      }
      boundTexture(YY) {
        const rY = this.atlasBindings.get(YY);
        if (rY) return rY;
        const DY = YY;
        if (DY.released) return null;
        const FY = this.textureSlot(DY, !0),
          {
            state: AY
          } = FY;
        if (!AY.view && (AY.wanted = !0, AY.loading || AY.failed || this.upload(DY, AY), !AY.view)) return null;
        const IY = this.chosenSampler(DY, FY),
          RY = FY.bound;
        return RY && RY.view === AY.view && RY.sampler === IY ? RY : (FY.bound = {
          view: AY.view,
          sampler: IY
        }, FY.bound)
      }
      textureLoaded(YY) {
        var rY, DY;
        return null !== (rY = null === (DY = YY.gpu[cY.g.lite]) || void 0 === DY ? void 0 : DY.state.decoded) && void 0 !== rY ? rY : null
      }
      textureFailed(YY) {
        var rY;
        return !0 === (null === (rY = YY.gpu[cY.g.lite]) || void 0 === rY ? void 0 : rY.state.failed)
      }
      chosenSampler(YY, rY) {
        const {
          samplingMode: DY,
          wrapU: FY,
          wrapV: AY
        } = YY.sampler, IY = rY.state.hasMips, RY = function(YY, rY) {
          const {
            bilinear: DY,
            trilinear: FY
          } = cY.k;
          return !rY && YY !== DY || 11 !== YY && YY !== FY && YY !== DY ? 1 : 4
        }(DY, IY), OY = rY.sampler;
        if (OY && OY.samplingMode === DY && OY.hasMips === IY && OY.anisotropy === RY && OY.wrapU === FY && OY.wrapV === AY) return OY.sampler;
        const gY = this.samplerFor(DY, IY, RY, FY, AY);
        return rY.sampler = {
          samplingMode: DY,
          hasMips: IY,
          anisotropy: RY,
          wrapU: FY,
          wrapV: AY,
          sampler: gY
        }, gY
      }
      releaseTexture(YY) {
        var rY, DY;
        YY.view && (null === (DY = this.onDestroy) || void 0 === DY || DY.call(this, YY.view));
        null === (rY = YY.destroy) || void 0 === rY || rY.call(YY)
      }
      textureSlot(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = YY.gpu[cY.g.lite];
        if (DY) return DY;
        const FY = function(YY) {
          let {
            source: rY,
            sampler: DY
          } = YY;
          return "canvas" === rY.kind ? null : `${rY.kind}|${kR(rY)}|${DY.noMipmap}|${DY.samplingMode}|${DY.invertY}`
        }(YY);
        let AY = null === FY ? void 0 : this.textures.get(FY);
        AY || (AY = {
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
        }, null !== FY && (this.textures.set(FY, AY), this.load(YY, AY), rY && this.firstBindDecodes++)), AY.refs++;
        const IY = AY,
          RY = {
            state: AY,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(IY, FY)
            }
          };
        return YY.gpu[cY.g.lite] = RY, RY
      }
      samplerFor(YY, rY, DY, FY, AY) {
        const IY = `${YY}|${rY}|${DY}|${FY}|${AY}`;
        let RY = this.samplers.get(IY);
        if (!RY) {
          const OY = {
            ...XR(YY, rY, DY),
            addressModeU: qR(FY),
            addressModeV: qR(AY)
          };
          RY = (0, KR.d)(this.engine, OY), this.samplers.set(IY, RY)
        }
        return RY
      }
      upload(YY, rY) {
        const {
          source: DY,
          sampler: FY
        } = YY;
        rY.hasMips = !FY.noMipmap, "canvas" === DY.kind ? this.createDynamic(DY, rY) : "cube" === DY.kind ? this.uploadCube(rY, DY.luminance) : this.uploadImage(rY, !0 === FY.invertY, DY.url)
      }
      uploadImage(YY, rY, DY) {
        const [FY] = YY.images;
        YY.images = null;
        const AY = (0, HR.d)(this.engine, FY, {
          mipMaps: YY.hasMips,
          invertY: rY,
          srgb: !1
        }).then((rY => {
          FY.close(), 0 !== YY.refs ? (YY.view = rY.view, YY.destroy = rY.texture.destroy.bind(rY.texture)) : rY.texture.destroy()
        }));
        this.track(YY, DY, AY)
      }
      track(YY, rY, DY, FY) {
        YY.loading = !0, this.pending++, DY.catch((DY => {
          YY.failed = !0, console.warn(`Lite: could not load texture ${jA(rY)}`, DY)
        })).finally((() => {
          YY.loading = !1, this.pending--, null === FY || void 0 === FY || FY()
        }))
      }
      uploadCube(YY, rY) {
        const DY = YY.images;
        YY.images = null;
        const FY = fR(this.engine, this.device, DY, (0, cY.H)(rY), YY.hasMips);
        YY.view = FY.createView({
          dimension: "cube"
        }), YY.destroy = () => {
          FY.destroy()
        }
      }
      createDynamic(YY, rY) {
        const {
          canvas: DY
        } = YY, FY = (0, zR.e)(this.engine, Math.max(1, DY.width), Math.max(1, DY.height), {
          mipMaps: rY.hasMips,
          srgb: !1
        });
        rY.dynamic = FY, rY.view = FY.view, rY.destroy = () => {
          FY.texture.destroy()
        }, this.pushDynamic(YY, rY)
      }
      pushDynamic(YY, rY) {
        const DY = rY.dynamicSource,
          FY = rY.dynamic,
          {
            canvas: AY
          } = YY;
        if (DY && FY && 0 !== AY.width && 0 !== AY.height) return AY.width !== FY.width || AY.height !== FY.height ? (this.releaseTexture(rY), rY.dynamic = null, rY.view = null, void this.createDynamic(YY, rY)) : void(0, zR.g)(this.engine, FY, AY, {
          invertY: DY.invertY,
          premultiplyAlpha: DY.premultiplied
        })
      }
    }

    function kR(YY) {
      return "cube" === YY.kind ? YY.rootUrl : "canvas" === YY.kind ? "canvas" : YY.url
    }
    const GR = new Uint8Array(4);

    function xR(YY) {
      const rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      YY._colorAttachment.storeOp = YY._targetSignature._sampleCount > 1 ? rY : "store";
      const DY = YY._renderPassDescriptor.depthStencilAttachment;
      DY && (DY.depthStoreOp = rY, DY.stencilStoreOp && (DY.stencilStoreOp = rY))
    }
    var nR = DY(37107),
      PR = DY(37166),
      UR = DY(36725),
      LR = DY(38880);
    const tR = new Float64Array([1, 1, 1]),
      YO = new Float64Array([0, 1, 0]),
      rO = new Float64Array(4),
      DO = new Float32Array(16),
      FO = new Float64Array(3),
      AO = new Float64Array(4);

    function IO(YY, rY, DY) {
      YY.fov = rY.fov, YY.near = rY.near, YY.far = rY.far, YY.renderWidth = DY.renderWidth, YY.renderHeight = DY.renderHeight, (0, UR.n)(rY.holderRotation, 0, rO, 0), (0, UR.b)(tR, 0, rO, 0, rY.holderPosition, 0, DO);
      const FY = rY.Yk;
      FO[0] = FY[0], FO[1] = FY[1], FO[2] = FY[2] + 1;
      const AY = YY.viewMatrix;
      (0, UR.h)(FY, FO, YO, AY), (0, UR.f)(AY, 0, AY), (0, UR.j)(AY, DO, 0, AY), (0, UR.f)(AY, 0, AY);
      const IY = YY.worldMatrix;
      (0, UR.f)(AY, 0, IY), YY.eye[0] = IY[12], YY.eye[1] = IY[13], YY.eye[2] = IY[14], AO[0] = YY.fov, AO[1] = YY.renderWidth / YY.renderHeight, AO[2] = YY.near, AO[3] = YY.far, (0, UR.l)(AO, YY.projectionMatrix), (0, UR.j)(AY, YY.projectionMatrix, 0, YY.viewProjectionMatrix), (0, LR.f)(YY.viewProjectionMatrix, YY.frustum)
    }

    function RO(YY, rY) {
      let DY = YY.frustumPlanes;
      DY || (DY = YY.frustumPlanes = Array.from({
        length: 6
      }, (() => new nR.c(0, 0, 0, 0))));
      for (let FY = 0; FY < 6; FY++) {
        const YY = DY[FY].normal;
        YY._x = rY[4 * FY], YY._y = rY[4 * FY + 1], YY._z = rY[4 * FY + 2], YY._isDirty = !0, DY[FY].d = rY[4 * FY + 3]
      }
    }

    function OO(YY, rY) {
      const DY = rY.clearColor;
      YY.clearColour[0] = DY.r, YY.clearColour[1] = DY.g, YY.clearColour[2] = DY.b, YY.clearColour[3] = DY.a;
      const FY = rY.ambientColor;
      YY.ambientColour[0] = FY.r, YY.ambientColour[1] = FY.g, YY.ambientColour[2] = FY.b, YY.animationRatio = rY.animationRatio, YY.frameId = rY.frameId, YY.version++
    }

    function gO(YY) {
      const rY = YY.model.view;
      return rY.animTick = (0, PR.h)(), rY.timeMs = performance.now(), OO(rY, YY.LQ), YY.model.update(rY.frameId), rY
    }

    function aO(YY) {
      const rY = YY.LQ,
        {
          view: DY,
          kp: FY
        } = YY.model;
      return IO(DY, FY, rY.ky()), rY.onBeforeRenderObservable.notifyObservers(rY), RO(rY, DY.frustum), rY.onBeforeCameraRenderObservable.notifyObservers(rY.activeCamera), gO(YY)
    }
    var vO = DY(36685),
      uO = DY(36805),
      sO = DY(37153);

    function iO(YY) {
      var rY, DY;
      const FY = (0, NY.S)(YY);
      if (!FY || FY.diffuseTexture && (0, sO.i)(YY)) return null;
      const AY = null === (rY = (0, NY.v)(FY, TY.f.name)) || void 0 === rY ? void 0 : rY.state,
        IY = null === (DY = (0, NY.v)(FY, kI.d.name)) || void 0 === DY ? void 0 : DY.state,
        RY = new Float32Array(16);
      return function(YY, rY, DY, FY) {
        var AY, IY;
        const RY = sF;
        FY.set(YY.diffuseColor, RY.diffuse), FY[RY.diffuse + 3] = YY.alpha, FY.set(YY.ambientColor, RY.ambientAndCutoff), FY[RY.ambientAndCutoff + 3] = YY.alphaCutOff, FY.set(YY.emissiveColor, RY.emissiveAndLevel), FY[RY.emissiveAndLevel + 3] = null !== (AY = null === (IY = YY.diffuseTexture) || void 0 === IY ? void 0 : IY.level) && void 0 !== AY ? AY : 1, null !== rY && void 0 !== rY && rY.animDataPerTex ? (FY[RY.anim + 1] = PR.e, FY[RY.anim + 2] = rY.animDataPerTex.length / 3 - 1) : DY && (FY[RY.anim + 1] = DY.numAnimStates, FY[RY.anim + 2] = DY.ticksPerAnimState)
      }(FY, AY, IY, RY), {
        model: FY,
        atlas: AY,
        texture: AY ? "atlas" : FY.diffuseTexture ? "single" : "none",
        animated: AY ? !!AY.animDataPerTex : !!IY,
        liquid: (0, sO.j)(YY),
        customRenderMat: (0, sO.i)(YY),
        uniformData: RY
      }
    }
    var yO = DY(36669);
    class QO {
      constructor(YY) {
        this.units = YY, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var YY;
        this.buffer.destroy(), null === (YY = this.twin) || void 0 === YY || YY.destroy()
      }
    }
    class oO {
      constructor(YY, rY) {
        this.arena = YY, this.ws = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.ws = new dR(rY);
        const DY = new QO(rY);
        DY.buffer = this.createBuffer(DY, !1), this.backings.push(DY), this.refresh()
      }
      get gu() {
        return this.ws.gu
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
        let YY = 0;
        for (const rY of this.backings) YY += rY.units * (this.arena.unitBytes + (rY.twin ? this.arena.twinUnitBytes : 0));
        return YY
      }
      holds(YY) {
        return YY.start + YY.length <= this.usable
      }
      lost(YY) {
        return this.dropped || YY.start + YY.length > this.gu
      }
      write(YY, rY) {
        const {
          device: DY,
          unitBytes: FY
        } = this.arena;
        for (const AY of this.backings) {
          const IY = (AY.units - YY.start) * FY;
          IY > 0 && DY.queue.writeBuffer(AY.buffer, YY.start * FY, rY, 0, Math.min(rY.byteLength, IY))
        }
      }
      writeLight(YY, rY) {
        const {
          device: DY,
          twinUnitBytes: FY,
          verticesPerUnit: AY
        } = this.arena, {
          light: IY,
          count: RY
        } = this.arena.twinLight(rY, Math.min(rY.length, YY.length * AY));
        for (const OY of this.backings) {
          OY.twin || (OY.twin = this.createBuffer(OY, !0));
          const rY = (OY.units - YY.start) * AY;
          rY > 0 && DY.queue.writeBuffer(OY.twin, YY.start * FY, IY, 0, Math.min(RY, rY))
        }
      }
      grow(YY) {
        this.arena.assertNotDrawing();
        const {
          device: rY,
          unitBytes: DY,
          label: FY
        } = this.arena, AY = this.backings[this.backings.length - 1], IY = new QO(YY), RY = rY.createCommandEncoder({
          label: `${FY}-grow`
        });
        IY.buffer = this.createBuffer(IY, !1), RY.copyBufferToBuffer(AY.buffer, 0, IY.buffer, 0, AY.units * DY), AY.twin && (IY.twin = this.createBuffer(IY, !0), RY.copyBufferToBuffer(AY.twin, 0, IY.twin, 0, AY.units * this.arena.twinUnitBytes)), rY.queue.submit([RY.finish()]), this.backings.push(IY), this.ws.grow(YY)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const YY of this.backings) YY.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(YY, rY) {
        const {
          device: DY,
          unitBytes: FY,
          twinUnitBytes: AY,
          usage: IY,
          label: RY
        } = this.arena;
        DY.pushErrorScope("out-of-memory");
        const OY = DY.createBuffer({
          label: rY ? `${RY}-light` : RY,
          size: YY.units * (rY ? AY : FY),
          usage: (rY ? this.arena.twinUsage : IY) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, DY.popErrorScope().then((DY => {
          this.arena.awaitingVerdict--, this.settle(YY, rY, !DY, !0)
        }), (DY => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${RY} buffer, taken as failed: ${String(DY)}`), this.settle(YY, rY, !1, !1)
        })), OY
      }
      settle(YY, rY, DY, FY) {
        const AY = this.backings.indexOf(YY);
        if (!(this.dropped || AY < 0)) {
          if (!DY) {
            if (FY && this.arena.ranOutOfMemory(YY.units, YY.units * (rY ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === AY) return void this.drop();
            for (const YY of this.backings.splice(AY)) YY.destroy();
            return this.ws.truncate(this.backings[AY - 1].units), this.growable = !1, void this.promote()
          }
          rY ? YY.twinReady = !0 : (YY.bufferReady = !0, this.arena.allocatedBuffer(YY.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: YY
        } = this;
        let rY = 0;
        for (; rY + 1 < YY.length && YY[rY].ready && YY[rY + 1].ready;) rY++;
        for (const DY of YY.splice(0, rY)) DY.destroy();
        this.refresh()
      }
      refresh() {
        const YY = this.backings[0];
        this.buffer = YY.buffer, this.twin = YY.twinReady ? YY.twin : null, this.usable = !this.dropped && YY.bufferReady ? YY.units : 0
      }
    }
    class WO {
      constructor(YY, rY, DY, FY) {
        let {
          verticesPerUnit: AY = 1,
          twinUsage: IY = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = YY, this.unitBytes = rY, this.usage = DY, this.label = FY, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, ar.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), rY % 4 !== 0) throw new Error(`${FY}: ${rY}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = AY, this.twinUsage = IY, this.twinValueBytes = AY > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * AY
      }
      twinLight(YY, rY) {
        if (4 === this.twinValueBytes) return this.widened.length < rY && (this.widened = new Float32Array(Math.max(rY, 2 * this.widened.length))), this.widened.set(YY.subarray(0, rY)), {
          light: this.widened,
          count: rY
        };
        const DY = rY % this.verticesPerUnit;
        if (0 === DY) return {
          light: YY,
          count: rY
        };
        const FY = rY - DY + this.verticesPerUnit;
        return this.padded.length < FY && (this.padded = new Uint16Array(Math.max(FY, 2 * this.padded.length))), this.padded.set(YY.subarray(0, rY)), this.padded.fill(0, rY, FY), {
          light: this.padded,
          count: FY
        }
      }
      allocate(YY) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), YY > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const AY of this.pages) {
          const rY = AY.ws.allocate(YY);
          if (rY >= 0) return {
            page: AY,
            start: rY,
            length: YY
          }
        }
        const rY = this.pages[this.pages.length - 1];
        if (null !== rY && void 0 !== rY && rY.canGrow) {
          const DY = Math.min(this.ceiling, Math.max(2 * rY.gu, rY.gu + YY));
          if (DY - rY.gu >= YY) return rY.grow(DY), {
            page: rY,
            start: rY.ws.allocate(YY),
            length: YY
          }
        }
        rY && rY !== this.pages[0] && 0 === rY.ws.used && rY.drop();
        const DY = Math.floor(1048576 / this.unitBytes),
          FY = new oO(this, Math.max(YY, Math.min(this.ceiling, DY)));
        return this.pages.push(FY), {
          page: FY,
          start: FY.ws.allocate(YY),
          length: YY
        }
      }
      free(YY) {
        this.assertNotDrawing();
        const {
          page: rY
        } = YY;
        rY.ws.free(YY.start, YY.length), 0 === rY.ws.used && rY !== this.pages[0] && rY !== this.pages[this.pages.length - 1] && rY.drop()
      }
      remove(YY) {
        const rY = this.pages.indexOf(YY);
        rY >= 0 && this.pages.splice(rY, 1)
      }
      ranOutOfMemory(YY, rY) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${rY}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, YY), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, YY) / 2));
        const DY = performance.now();
        DY >= this.shortageUntil && (this.forgetFailedAt = DY + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = DY + 1e3)
      }
      allocatedBuffer(YY) {
        YY >= this.failed && (this.failed = 1 / 0);
        const rY = Math.min(2 * YY, Math.floor((YY + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, rY))
      }
      stats() {
        let YY = 0,
          rY = 0,
          DY = 0,
          FY = 0;
        for (const AY of this.pages) YY += AY.gu, rY += AY.ws.used, DY += AY.hasTwin ? AY.gu * this.twinUnitBytes : 0, FY += AY.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: YY * this.unitBytes,
          usedBytes: rY * this.unitBytes,
          twinBytes: DY,
          allocatedBytes: FY
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: YY,
          maxStorageBufferBindingSize: rY
        } = this.device.limits;
        let DY = Math.floor(Math.min(67108864, YY) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (DY = Math.min(DY, Math.floor(rY / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (DY = Math.min(DY, Math.floor(rY / this.twinUnitBytes))), DY
      }
    }
    const EO = 16383;

    function mO(YY, rY, DY, FY, AY) {
      let IY = 0;
      for (let RY = DY; RY < FY; RY += EO) YY.drawIndexed(6 * Math.min(EO, FY - RY), 1, 0, rY + 4 * RY, AY), IY++;
      return IY
    }
    class VO {
      constructor(YY, rY) {
        this.recordsGroup = rY, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const DY = er.g.strideWithoutAtlas;
        this.vertexArena = new WO(YY, DY, GPUBufferUsage.VERTEX, `terrain-vertices-${DY}`), this.quadArena = new WO(YY, uO.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const FY = (0, Nr.f)(new Uint16Array(98298), EO);
        this.quadPattern = YY.createBuffer({
          label: "terrain-quad-pattern",
          size: FY.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), YY.queue.writeBuffer(this.quadPattern, 0, FY)
      }
      set(YY, rY) {
        const DY = rY.packedVertices,
          FY = DY ? this.quadArena.allocate(YY.faceCount) : this.vertexArena.allocate(YY.vertexCount);
        if (!FY) return !1;
        YY.vertices = FY;
        const AY = DY ? new Uint8Array(DY.buffer, DY.byteOffset, DY.byteLength) : new Uint8Array(rY.vertices);
        return FY.page.write(FY, AY), !0
      }
      setLight(YY, rY) {
        const {
          vertices: DY
        } = YY;
        DY && 0 !== rY.length && DY.page.live && (rY.length < YY.vertexCount ? DY.page.arena.warnOnce("shortLight", `a part's ${rY.length} light values are fewer than its ${YY.vertexCount} vertices, so its light is left as it was`) : (DY.page.writeLight(DY, rY), YY.lit = !0))
      }
      lightFullSky(YY, rY) {
        this.fullSky.length < rY && (this.fullSky = new Uint16Array(Math.max(rY, 4096)).fill(yO.h));
        for (const DY of YY) {
          const YY = DY.vertices;
          YY.page.live && (YY.page.writeLight(YY, this.fullSky), DY.lit = !0)
        }
      }
      backed(YY) {
        const {
          vertices: rY
        } = YY;
        return !!rY && rY.page.holds(rY)
      }
      lost(YY) {
        const {
          vertices: rY
        } = YY;
        return !!rY && rY.page.lost(rY)
      }
      release(YY) {
        YY.vertices && YY.vertices.page.arena.free(YY.vertices), YY.vertices = null, YY.lit = !1
      }
      setDrawing(YY) {
        this.forgetBound()
      }
      draw(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rY.faceCount;
        const IY = rY.vertices,
          RY = IY.page,
          OY = DY ? RY.twin : null;
        if (!RY.holds(IY) || DY && !OY) return 0;
        const {
          verticesPerUnit: gY
        } = RY.arena;
        let aY = IY.start * gY;
        this.boundPattern || (YY.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const vY = FY + AY;
        if (gY > 1) return RY.buffer === this.boundRecords && OY === this.boundRecordsLight || (YY.setBindGroup(1, this.recordsGroup(RY.buffer, OY)), this.boundRecords = RY.buffer, this.boundRecordsLight = OY), mO(YY, aY, FY, vY, rY.slot);
        RY.buffer !== this.boundVertices && (YY.setVertexBuffer(0, RY.buffer), this.boundVertices = RY.buffer), OY && OY !== this.boundLight && (YY.setVertexBuffer(1, OY), this.boundLight = OY);
        const uY = rY.faceCount;
        return vY <= uY ? mO(YY, aY, FY, vY, rY.slot) : mO(YY, aY, FY, uY, rY.slot) + mO(YY, aY, Math.max(FY, uY) - uY, vY - uY, rY.slot)
      }
      get buffersAwaitingVerdict() {
        let YY = 0;
        for (const rY of this.arenas()) YY += rY.awaitingVerdict;
        return YY
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class SO {
      constructor(YY, rY, DY, FY) {
        this.device = YY, this.splitBefore = rY, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = YY.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const AY = YY.createShaderModule({
          label: "scene-depth-copy",
          code: (IY = DY._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${IY?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var IY;
        YY.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: AY,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: AY,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((YY => {
          this.pipeline = YY, this.building = !1
        }), (YY => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", YY)
        })), DY._executeWithTransmission = () => this.execute(DY, FY)
      }
      get compiling() {
        return this.building
      }
      setWanted(YY) {
        this.wanted = YY
      }
      setPlanes(YY, rY) {
        YY === this.near && rY === this.far || (this.near = YY, this.far = rY, this.unproject[0] = YY / (rY - YY), this.unproject[1] = rY * YY / (rY - YY), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var YY, rY;
        return null !== (YY = null === (rY = this.copy) || void 0 === rY ? void 0 : rY.view) && void 0 !== YY ? YY : null
      }
      execute(YY, rY) {
        var DY;
        null === (DY = this.retired) || void 0 === DY || DY.destroy(), this.retired = null;
        const FY = Yr(rY),
          AY = YY._transparentBindings,
          IY = this.wanted && this.pipeline ? this.splitIndex(AY) : -1,
          RY = YY._colorAttachment,
          OY = RY.resolveTarget;
        IY >= 0 && (RY.resolveTarget = void 0, xR(YY, !0));
        let gY = FY.beginRenderPass(YY._renderPassDescriptor);
        gY.setBindGroup(0, YY._sceneBG);
        let aY = this.drawList(gY, rY, YY._opaqueBindings, 0, YY._opaqueBindings.length);
        if (aY += this.drawList(gY, rY, YY._directBindings, 0, YY._directBindings.length), aY += this.drawList(gY, rY, AY, 0, IY >= 0 ? IY : AY.length), gY.end(), IY < 0) return aY;
        xR(YY);
        const vY = YY._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: uY,
            stencilLoadOp: sY
          } = vY,
          iY = RY.loadOp;
        RY.resolveTarget = OY;
        try {
          this.copyDepth(FY, YY), RY.loadOp = "load", vY.depthLoadOp = "load", sY && (vY.stencilLoadOp = "load"), gY = FY.beginRenderPass(YY._renderPassDescriptor), gY.setBindGroup(0, YY._sceneBG), aY += this.drawList(gY, rY, AY, IY, AY.length), gY.end()
        } finally {
          RY.loadOp = iY, vY.depthLoadOp = uY, vY.stencilLoadOp = sY
        }
        return aY
      }
      splitIndex(YY) {
        for (let rY = 0; rY < YY.length; rY++)
          if (YY[rY].renderable === this.splitBefore) return rY;
        return -1
      }
      drawList(YY, rY, DY, FY, AY) {
        let IY = null,
          RY = 0;
        for (let OY = FY; OY < AY; OY++) {
          const FY = DY[OY],
            AY = FY.renderable.mesh;
          AY && !1 === AY.visible || (FY.pipeline !== IY && (YY.setPipeline(FY.pipeline), IY = FY.pipeline), RY += FY.draw(YY, rY))
        }
        return RY
      }
      copyDepth(YY, rY) {
        var DY, FY;
        const AY = (null !== (DY = rY._config.depth) && void 0 !== DY ? DY : rY._config.rt)._depthTexture,
          IY = (null === (FY = this.copy) || void 0 === FY ? void 0 : FY.source) === AY ? this.copy : this.remakeCopy(AY),
          RY = YY.beginRenderPass(IY.pass);
        RY.setPipeline(this.pipeline), RY.setBindGroup(0, IY.bindGroup), RY.draw(3), RY.end()
      }
      remakeCopy(YY) {
        var rY, DY;
        this.retired = null !== (rY = null === (DY = this.copy) || void 0 === DY ? void 0 : DY.texture) && void 0 !== rY ? rY : null;
        const FY = this.device.createTexture({
            label: "scene-depth",
            size: [YY.width, YY.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          AY = FY.createView(),
          IY = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: YY.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          RY = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: AY,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: YY,
          texture: FY,
          view: AY,
          bindGroup: IY,
          pass: RY
        }, this.copy
      }
    }
    const lO = "rgba8unorm";

    function TO(YY) {
      return YY ? 15 : 1
    }
    class eO {
      constructor(YY, rY, DY, FY) {
        this.device = YY, this.terrain = FY, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = rY._targetSignature._sampleCount > 1, this.cameraBuffer = YY.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = YY.createBindGroupLayout({
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
        const AY = YY.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = YY.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: AY,
          entries: []
        });
        const IY = YY.createShaderModule({
          label: "sun-shadow-mask",
          code: (RY = this.edge, `${(0,Br.x)()}${JD({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${RY?BD:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${TO(RY)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${RY?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var RY;
        YY.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: YY.createPipelineLayout({
            bindGroupLayouts: [this.layout, AY, AY, dI(YY, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: IY,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: IY,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((YY => {
          this.pipeline = YY, this.building = !1
        }), (YY => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", YY)
        }));
        const OY = rY._executeWithTransmission;
        rY._executeWithTransmission = YY => this.execute(rY, DY, (() => OY ? OY(YY) : function(YY, rY) {
          const DY = Yr(rY).beginRenderPass(YY._renderPassDescriptor);
          DY.setBindGroup(0, YY._sceneBG);
          let FY = NO(DY, rY, YY._opaqueBindings);
          return FY += NO(DY, rY, YY._directBindings), FY += NO(DY, rY, YY._transparentBindings), DY.end(), FY
        }(rY, DY)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var YY, rY;
        return null !== (YY = null === (rY = this.targets) || void 0 === rY ? void 0 : rY.maskView) && void 0 !== YY ? YY : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(YY) {
        ! function(YY, rY) {
          const DY = YY.worldMatrix,
            FY = YY.projectionMatrix,
            AY = 1 / FY[0],
            IY = 1 / FY[5],
            RY = YY.far * YY.near / (YY.far - YY.near);
          rY[0] = YY.eye[0], rY[1] = YY.eye[1], rY[2] = YY.eye[2], rY[3] = 2 ** -23 / RY, rY[4] = DY[0] * AY, rY[5] = DY[1] * AY, rY[6] = DY[2] * AY, rY[7] = RY, rY[8] = DY[4] * IY, rY[9] = DY[5] * IY, rY[10] = DY[6] * IY, rY[11] = YY.near / (YY.far - YY.near), rY[12] = DY[8], rY[13] = DY[9], rY[14] = DY[10], rY[15] = 0
        }(YY, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(YY, rY, DY) {
        if (this.retire(), !this.terrain.readsMask) return DY();
        const FY = this.targetsFor(YY),
          AY = Yr(rY),
          IY = YY._renderPassDescriptor.depthStencilAttachment;
        this.edge || (FY.prepass.depthStencilAttachment.view = IY.view);
        const RY = this.terrain.drawPrepass(AY, FY.prepass, YY._sceneBG);
        if (0 === RY) return DY();
        if (this.trace(AY, FY), this.edge) return RY + 1 + DY();
        const {
          depthLoadOp: OY,
          stencilLoadOp: gY
        } = IY;
        IY.depthLoadOp = "load", gY && (IY.stencilLoadOp = "load");
        try {
          return RY + 1 + DY()
        } finally {
          IY.depthLoadOp = OY, IY.stencilLoadOp = gY
        }
      }
      trace(YY, rY) {
        const DY = this.terrain.sunShadowGroup(),
          FY = YY.beginRenderPass(rY.trace);
        this.pipeline && DY && (FY.setPipeline(this.pipeline), FY.setBindGroup(0, rY.bindGroup), FY.setBindGroup(1, this.empty), FY.setBindGroup(2, this.empty), FY.setBindGroup(3, DY), FY.draw(3)), FY.end()
      }
      retire() {
        const YY = this.retired;
        var rY;
        YY && (YY.mask.destroy(), YY.normals.destroy(), null === (rY = YY.depth) || void 0 === rY || rY.destroy(), this.retired = null)
      }
      targetsFor(YY) {
        var rY, DY;
        const FY = (null !== (rY = YY._config.depth) && void 0 !== rY ? rY : YY._config.rt)._depthTexture;
        return (null === (DY = this.targets) || void 0 === DY ? void 0 : DY.source) === FY ? this.targets : this.remake(YY, FY)
      }
      remake(YY, rY) {
        var DY;
        this.retired = this.targets;
        const FY = [rY.width, rY.height],
          AY = this.device.createTexture({
            label: "sun-shadow-mask",
            size: FY,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          IY = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: FY,
            format: lO,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          RY = null !== (DY = YY._targetSignature._depthStencilFormat) && void 0 !== DY ? DY : rY.format,
          OY = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: FY,
            format: RY,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          gY = YY._renderPassDescriptor.depthStencilAttachment,
          aY = RY.includes("stencil"),
          vY = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: IY.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: OY ? OY.createView() : gY.view,
              depthClearValue: gY.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...aY ? {
                stencilClearValue: gY.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          uY = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== OY && void 0 !== OY ? OY : rY).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: IY.createView()
            }]
          }),
          sY = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: AY.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [TO(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: rY,
          mask: AY,
          maskView: AY.createView(),
          normals: IY,
          depth: OY,
          bindGroup: uY,
          prepass: vY,
          trace: sY
        }, this.targets
      }
    }

    function NO(YY, rY, DY) {
      let FY = null,
        AY = 0;
      for (const IY of DY) {
        const DY = IY.renderable.mesh;
        DY && !1 === DY.visible || (IY.pipeline !== FY && (YY.setPipeline(IY.pipeline), FY = IY.pipeline), AY += IY.draw(YY, rY))
      }
      return AY
    }
    const BO = 6e4,
      cO = {
        status: "ok"
      },
      KO = {
        status: "skipped"
      };
    async function HO(YY, rY) {
      const {
        isCancelled: DY
      } = YY;
      if (DY()) return {
        status: "Hr"
      };
      const {
        target: FY
      } = rY;
      if (!FY) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const AY = [],
        IY = Promise.all(Array.from(new Set(YY.materials), (async DY => {
          AY.push(await async function(YY, rY, DY, FY) {
            const AY = {
              lighting: YY.lighting,
              dirLightCount: Math.min(YY.dirLightCount, 4),
              vy: YY.runtime
            };
            try {
              const IY = rY.material(FY);
              return IY && aF(rY.programKey(IY, !1, AY)) ? (await IY.ready, YY.isCancelled() ? cO : IY.bindGroupLayout ? await async function(YY, rY, DY, FY) {
                const {
                  device: AY
                } = YY;
                let IY, RY;
                AY.pushErrorScope("validation");
                try {
                  IY = YY.pipelineBuild(rY, DY, FY)
                } finally {
                  RY = AY.popErrorScope().catch((() => null))
                }
                const [OY, gY] = await Promise.all([RY, IY.built.then((() => null), (YY => null !== YY && void 0 !== YY ? YY : new Error("pipeline failed")))]);
                if (!OY && !gY) return cO;
                const aY = await zO(IY.module),
                  vY = aY.length > 0 ? aY.map((YY => `${IY.name} ${YY.lineNum}:${YY.linePos}: ${YY.message}`)).join("\n") : `${IY.name}: ${ZO(null!==gY&&void 0!==gY?gY:OY)}`;
                return {
                  status: "failed",
                  material: rY.model.name,
                  message: vY
                }
              }(rY, IY, rY.programKey(IY, "none" !== IY.texture, AY), DY): (console.warn(`Shader pack: skipped the compile check for "${FY.name}", whose textures failed to load`), KO)) : cO
            } catch (IY) {
              return {
                status: "failed",
                material: FY.name,
                message: ZO(IY)
              }
            }
          }(YY, rY, FY, DY))
        }))),
        RY = function(YY, rY) {
          let DY, FY, AY = !1;
          const IY = new Promise((IY => {
            var RY;
            DY = setTimeout((() => {
              IY("timeout")
            }), null !== (RY = rY.timeoutMs) && void 0 !== RY ? RY : BO), FY = setInterval((() => {
              rY.isCancelled() && IY("Hr")
            }), 50), YY.lost.then((() => {
              AY = !0, IY("lost")
            }))
          }));
          return {
            signal: IY,
            lost: () => AY,
            dispose: () => {
              clearTimeout(DY), clearInterval(FY)
            }
          }
        }(rY.device, YY);
      let OY;
      try {
        OY = await Promise.race([IY.then((() => "done")), RY.signal])
      } finally {
        RY.dispose()
      }
      if ("Hr" === OY || DY()) return {
        status: "Hr"
      };
      const gY = AY.find((YY => "failed" === YY.status));
      return gY && "lost" !== OY && !RY.lost() && await new Promise((YY => {
        setTimeout(YY, 0)
      })), "lost" === OY || RY.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : gY ? {
        status: "failed",
        failure: {
          material: gY.material,
          message: gY.message
        }
      } : "timeout" === OY ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(aY=YY.timeoutMs)&&void 0!==aY?aY:BO)/1e3} s`), {
        status: "skipped"
      }) : AY.some((YY => "skipped" === YY.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var aY
    }
    async function zO(YY) {
      if (!YY) return [];
      try {
        return (await YY.getCompilationInfo()).messages.filter((YY => "error" === YY.type))
      } catch {
        return []
      }
    }

    function ZO(YY) {
      var rY;
      return null !== (rY = null === YY || void 0 === YY ? void 0 : YY.message) && void 0 !== rY ? rY : String(YY)
    }

    function CO(YY, rY, DY, FY) {
      aF(YY) ? zO(DY).then((YY => {
        const [DY] = YY;
        GA("terrain", rY, FY, DY ? `${DY.lineNum}:${DY.linePos} error: ${DY.message}` : null)
      })) : GA("terrain", rY, FY)
    }
    var fO = DY(36809),
      jO = DY(36817),
      hO = DY(36830),
      dO = DY(36751);

    function JO(YY, rY, DY, FY, AY) {
      const IY = Math.hypot(DY[0], DY[1], DY[2]);
      if (!(IY > 0)) return;
      const RY = [DY[0] / IY, DY[1] / IY, DY[2] / IY],
        OY = [Math.floor(rY[0]), Math.floor(rY[1]), Math.floor(rY[2])],
        gY = [0, 0, 0],
        aY = [1 / 0, 1 / 0, 1 / 0],
        vY = [1 / 0, 1 / 0, 1 / 0];
      for (let iY = 0; iY < 3; iY++) RY[iY] > 0 ? (gY[iY] = 1, aY[iY] = (OY[iY] + 1 - rY[iY]) / RY[iY], vY[iY] = 1 / RY[iY]) : RY[iY] < 0 && (gY[iY] = -1, aY[iY] = (OY[iY] - rY[iY]) / RY[iY], vY[iY] = -1 / RY[iY]);
      const {
        Jy: uY
      } = YY;
      let sY = YY.VJ(OY[0], OY[1], OY[2]);
      for (;;) {
        const rY = aY[0] < aY[1] ? aY[0] < aY[2] ? 0 : 2 : aY[1] < aY[2] ? 1 : 2;
        if (aY[rY] > FY) return;
        const DY = gY[rY] > 0 ? OY[rY] + 1 : OY[rY];
        OY[rY] += gY[rY], aY[rY] += vY[rY];
        const IY = YY.VJ(OY[0], OY[1], OY[2]),
          RY = IY !== sY && !(YY.opaque[sY] && YY.opaque[IY]);
        if (RY) {
          const FY = [OY[0], OY[1], OY[2]];
          FY[rY] = DY;
          const IY = Math.floor(FY[0] / uY),
            RY = Math.floor(FY[1] / uY),
            gY = Math.floor(FY[2] / uY);
          !YY.isDrawn(IY, RY, gY) && YY.hasParts(IY, RY, gY) && AY.add(`${IY},${RY},${gY}`)
        }
        if (RY && YY.occluders[IY]) return;
        sY = IY
      }
    }

    function MO(YY, rY) {
      return YY.group - rY.group || YY.nearest - rY.nearest
    }
    class wO {
      constructor(YY, rY) {
        this.device = YY, this.QE = rY, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var YY;
        const rY = null !== (YY = this.free.pop()) && void 0 !== YY ? YY : this.next++;
        if (8 * rY >= this.data.length) {
          const YY = new Float32Array(2 * this.data.length);
          YY.set(this.data), this.data = YY, this.words = new Uint32Array(YY.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.QE()
        }
        return rY
      }
      release(YY) {
        this.free.push(YY)
      }
      set(YY, rY, DY, FY, AY) {
        const IY = 8 * YY + mF;
        this.data[IY] = rY, this.data[IY + 1] = DY, this.data[IY + 2] = FY, this.setVisibility(YY, AY)
      }
      setVisibility(YY, rY) {
        this.data[8 * YY + VF] = rY, this.markDirty(YY, YY)
      }
      setFaces(YY, rY, DY) {
        const FY = 8 * YY;
        this.words[FY + SF] = rY, this.words[FY + lF] = DY, this.markDirty(YY, YY)
      }
      markDirty(YY, rY) {
        this.dirtyMin = Math.min(this.dirtyMin, YY), this.dirtyMax = Math.max(this.dirtyMax, rY)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const bO = EF,
      XO = !0;
    const qO = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: bO.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      pO = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class kO {
      constructor(YY) {
        this.device = YY, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(uF), this.dirLightUniforms = this.frameUniforms.subarray(vF.dirLights, vF.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, ar.b)(), this.faceGroups = !0, this.visibilityGraph = XO, this.visCull = XO, this.visCheck = !1, this.visCullMinDistance = hO.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new PO, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.vy = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new VO(YY, ((YY, rY) => this.recordsGroup(YY, rY))), this.slots = new wO(YY, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = rr(YY), this.frameLayout = YY.createBindGroupLayout({
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
        }), this.frameBuffer = YY.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = YY.createSampler({
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
          bind: (YY, rY) => this.createBinding(this.opaqueRenderable, rY, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (YY, rY) => this.createBinding(this.transparentRenderable, rY, !0)
        }
      }
      installSceneDepth(YY, rY) {
        this.sceneDepth = new SO(this.device, this.transparentRenderable, YY, rY)
      }
      createFrameBindGroup() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== YY && void 0 !== YY ? YY : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== rY && void 0 !== rY ? rY : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(YY, rY) {
        const DY = null !== rY && void 0 !== rY ? rY : YY;
        let FY = this.recordsGroups.get(DY);
        return FY || (FY = this.createFrameBindGroup(YY, rY), this.recordsGroups.set(DY, FY)), FY
      }
      setChunkMesh(YY, rY, DY) {
        var FY;
        let AY = this.chunks.get(YY);
        AY ? this.geometry.release(AY) : (AY = {
          mesh: YY,
          slot: this.slots.allocate(),
          origin: [DY[0], DY[1], DY[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: YY.visibility,
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
        }, this.chunks.set(YY, AY), this.writeSlot(AY)), AY.material = YY.material ? this.materialFor(YY.material) : null, AY.packed = !!rY.packedVertices, AY.vertexCount = (0, uO.d)(rY), AY.faceCount = AY.vertexCount / 4;
        const IY = null !== (FY = rY.faceGroups) && void 0 !== FY ? FY : null;
        if (AY.faceGroups = IY, IY) {
          const YY = fO.m;
          AY.planePX = IY[YY], AY.planeNX = IY[YY + 1], AY.planePY = IY[YY + 2], AY.planeNY = IY[YY + 3], AY.planePZ = IY[YY + 4], AY.planeNZ = IY[YY + 5]
        }
        this.drawWhole(AY), 0 !== AY.faceCount && (this.geometry.set(AY, rY) ? (AY.packed && this.slots.setFaces(AY.slot, AY.vertices.start + AY.faceCount, AY.faceCount), rY.Vy && this.setChunkMeshLight(YY, rY.Vy)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${AY.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(YY, rY) {
        const DY = this.chunks.get(YY);
        DY && this.geometry.setLight(DY, rY)
      }
      drawStats() {
        let YY = this.transparent.length;
        for (const rY of this.opaqueBatches) YY += rY.meshes.length;
        return {
          drawn: YY,
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
      removeChunkMesh(YY) {
        const rY = this.chunks.get(YY);
        rY && (this.geometry.release(rY), this.slots.release(rY.slot), this.chunks.delete(YY))
      }
      remeshLost(YY, rY) {
        this.geometry.release(rY), rY.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** rY.lostRemeshes++);
        const DY = YY.Mu,
          [FY, AY, IY] = DY.sFY(rY.origin[0], rY.origin[1], rY.origin[2]),
          RY = DY.HQ.zQ(FY, AY, IY);
        RY && (RY.cQ = !0, RY.hQ = !0, DY.KQ(RY, !1))
      }
      chooseFaceRanges(YY, rY, DY) {
        const FY = this.faceRanges;
        YY.faceMask = DY, YY.rangeCount = (0, jO.m)(rY, DY, FY), YY.first0 = FY[0], YY.count0 = FY[1], YY.first1 = FY[2], YY.count1 = FY[3]
      }
      drawWhole(YY) {
        YY.faceMask = -1, YY.faceEpoch = -1, YY.rangeCount = 1, YY.first0 = 0, YY.count0 = YY.faceCount
      }
      writeSlot(YY) {
        const [rY, DY, FY] = this.originOffset;
        this.slots.set(YY.slot, YY.origin[0] - rY, YY.origin[1] - DY, YY.origin[2] - FY, YY.visibility)
      }
      materialFor(YY) {
        const rY = this.materials.get(YY);
        if (rY) return rY;
        const DY = iO(YY);
        if (!DY) return this.warnOnce(`material:${YY.name}`, `Lite terrain cannot draw material "${YY.name}"; its chunks are skipped.`), null;
        const {
          model: FY,
          atlas: AY,
          texture: IY,
          animated: RY,
          uniformData: OY
        } = DY, gY = {
          id: this.materials.size,
          model: FY,
          texture: IY,
          animated: RY,
          uniformData: OY,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${YY.name}`,
            size: OY.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: DY.liquid,
          customRenderMat: DY.customRenderMat,
          atlasCount: 0,
          WG: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(YY, gY), this.device.queue.writeBuffer(gY.uniformBuffer, 0, OY), gY.ready = this.createMaterialBindGroup(gY, AY).catch((rY => {
          console.error(`Lite terrain failed to load the textures of material "${YY.name}"`, rY)
        })), gY
      }
      materialLayout(YY) {
        const rY = function(YY) {
            const rY = ["uniforms"];
            if ("atlas" === YY.texture) {
              YY.animated && rY.push("animData"), rY.push("sampler");
              for (let DY = 0; DY < YY.atlasCount; DY++) rY.push("textureArray")
            } else "single" === YY.texture && rY.push("sampler", "texture");
            return rY
          }(YY),
          DY = rY.join(",");
        let FY = this.materialLayouts.get(DY);
        if (!FY) {
          const YY = GPUShaderStage.FRAGMENT;
          FY = this.device.createBindGroupLayout({
            label: `terrain-material-${DY}`,
            entries: rY.map(((rY, DY) => {
              switch (rY) {
                case "uniforms":
                  return {
                    binding: DY, visibility: GPUShaderStage.VERTEX | YY, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: DY, visibility: GPUShaderStage.VERTEX | YY, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: DY, visibility: YY, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: DY, visibility: YY, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: DY, visibility: YY, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(DY, FY)
        }
        return FY
      }
      async createMaterialBindGroup(YY, rY) {
        const DY = [{
          buffer: YY.uniformBuffer
        }];
        if (rY) {
          const {
            urls: FY,
            pixels: AY,
            layerWidth: IY
          } = rY.sources, RY = await Promise.all(FY.map(((YY, rY) => {
            var DY;
            return MA(this.device, YY, null !== (DY = null === AY || void 0 === AY ? void 0 : AY[rY]) && void 0 !== DY ? DY : null, IY)
          })));
          YY.atlasCount = RY.length, YY.WG = RY[0].layerWidth, YY.atlasLayers = RY[0].layers, rY.animDataPerTex && DY.push({
            buffer: zA(this.device, Float32Array.from(rY.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), DY.push(this.sampler);
          for (const YY of RY) DY.push(YY.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === YY.texture) {
          const {
            url: rY
          } = YY.model.diffuseTexture.source, {
            pixels: FY,
            width: AY,
            height: IY
          } = await dA(rY);
          DY.push(this.sampler), DY.push(CA(this.device, FY, AY, IY, 1, `terrain-${rY}`).createView({
            dimension: "2d"
          }))
        }
        const FY = this.materialLayout(this.programKey(YY, !1));
        YY.bindGroupLayout = FY, YY.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${YY.model.name}`,
          layout: FY,
          entries: DY.map(((YY, rY) => ({
            binding: rY,
            resource: YY
          })))
        })
      }
      programKey(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const FY = DY ? DY.lighting : this.lighting,
          AY = DY ? DY.vy : this.vy,
          IY = {
            texture: YY.texture,
            atlasCount: YY.atlasCount,
            WG: YY.WG,
            atlasLayers: YY.atlasLayers,
            animated: YY.animated,
            alphaTest: YY.model.transparencyMode === NY.n.alphaTest,
            lighting: FY,
            dirLightCount: DY ? DY.dirLightCount : this.dirLightCount,
            packed: rY
          };
        if (!AY) return IY;
        const RY = this.shaderPackFields(YY, AY),
          OY = "atlas" === YY.texture && YY.model.transparencyMode === NY.n.opaque && IF(RY.packVariant);
        return {
          ...IY,
          ...RY,
          alphaTest: IY.alphaTest || OY
        }
      }
      shaderPackFields(YY, rY) {
        return YY.customRenderMat ? FF : function(YY, rY) {
          if (!YY) return FF;
          const DY = YY.defineFor(rY ? "liquid" : "terrain");
          return 0 === DY ? FF : {
            packVariant: DY,
            liquid: rY
          }
        }(rY, YY.liquid)
      }
      isBlended(YY) {
        return YY.model.transparencyMode === NY.n.alphaBlend
      }
      shaderModule(YY, rY) {
        let DY = this.modules.get(YY);
        return DY || (DY = this.device.createShaderModule({
          label: rY,
          code: YY
        }), this.modules.set(YY, DY)), DY
      }
      pipelineFor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!YY.bindGroupLayout) return null;
        const AY = this.programKey(YY, rY);
        if (!FY) return this.pipelineOf(YY, AY, DY);
        const IY = {
            ...AY,
            resting: FY
          },
          RY = this.pipelineId(YY, IY, DY),
          OY = this.pipelines.get(RY);
        if (OY) return OY;
        const gY = this.pipelineOf(YY, AY, DY);
        return gY && void 0 === OY && this.startPipeline(RY, YY, IY, DY), gY
      }
      pipelineOf(YY, rY, DY) {
        const FY = this.pipelineId(YY, rY, DY),
          AY = this.pipelines.get(FY);
        return void 0 !== AY ? AY : (this.startPipeline(FY, YY, rY, DY), null)
      }
      pipelineId(YY, rY, DY) {
        return GO(rY, this.isBlended(YY), YY.model.backFaceCulling, DY)
      }
      pipelineBuild(YY, rY, DY) {
        var FY;
        const AY = this.pipelineId(YY, rY, DY);
        return null !== (FY = this.builds.get(AY)) && void 0 !== FY ? FY : this.startPipeline(AY, YY, rY, DY)
      }
      startPipeline(YY, rY, DY, FY) {
        var AY;
        this.pipelines.set(YY, null);
        const IY = KF(DY),
          RY = this.isBlended(rY),
          OY = this.shadowMask && FY._depthStencilFormat ? function(YY, rY, DY, FY) {
            if (void 0 === YY.packVariant || YY.liquid || rY) return "none";
            const AY = (0, cr.g)(YY.packVariant);
            return null === AY || void 0 === AY || !AY.sunShadow || !hD(AY, DY) || AY.discards || YY.alphaTest && IF(YY.packVariant) ? "none" : FY ? "edge" : "plain"
          }(DY, RY, !!this.sunShadow, FY._sampleCount > 1) : "none";
        let gY;
        try {
          gY = HF(DY, !!this.sunShadow, OY)
        } catch (oY) {
          if (!aF(DY)) throw oY;
          return this.failedPackBuild(YY, DY, IY, oY)
        }
        const aY = this.shaderModule(gY, IY),
          vY = [];
        DY.packed || (vY.push(function(YY, rY) {
          const DY = [{
            shaderLocation: bO.position,
            offset: er.g.sA,
            format: "float32x3"
          }, {
            shaderLocation: bO.normal,
            offset: er.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: bO.color,
            offset: er.g.colorOffset,
            format: "unorm8x4"
          }];
          return YY && DY.push({
            shaderLocation: bO.uv,
            offset: er.g.uvOffset,
            format: "float32x2"
          }), rY && DY.push({
            shaderLocation: bO.blockFlagWords,
            offset: er.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: er.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: DY
          }
        }("none" !== DY.texture, aF(DY))), DY.lighting && vY.push(qO));
        const uY = rY.model.backFaceCulling,
          sY = {
            label: IY,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, rY.bindGroupLayout, ...wI(this.device, DY, !!this.sunShadow, "none" !== OY)]
            }),
            vertex: {
              module: aY,
              entryPoint: "mainVertex",
              buffers: vY
            },
            fragment: UY({
              module: aY,
              entryPoint: "mainFragment"
            }, FY, RY ? pO : null),
            depthStencil: FY._depthStencilFormat ? {
              format: FY._depthStencilFormat,
              depthCompare: null !== (AY = FY._depthCompare) && void 0 !== AY ? AY : Dr,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: FY._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: uY ? "back" : "none"
            }
          },
          iY = DY.resting ? 0 : 1;
        this.compiling += iY;
        const yY = "none" === OY ? this.device.createRenderPipelineAsync(sY) : this.startMaskPipelines(aY, sY, "edge" === OY);
        yY.then((rY => {
          this.compiling -= iY, this.pipelines.set(YY, rY)
        }), (YY => {
          this.compiling -= iY, console.error(`Lite terrain pipeline ${IY} failed`, YY), CO(DY, IY, aY, YY)
        }));
        const QY = {
          name: IY,
          module: aY,
          built: yY
        };
        return this.builds.set(YY, QY), QY
      }
      startMaskPipelines(YY, rY, DY) {
        const FY = rY.depthStencil,
          AY = this.device.createRenderPipelineAsync(DY ? rY : {
            ...rY,
            depthStencil: {
              ...FY,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          IY = this.device.createRenderPipelineAsync({
            ...rY,
            label: `${rY.label}-prepass`,
            fragment: {
              module: YY,
              entryPoint: "prepassFragment",
              targets: [{
                format: lO
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([AY, IY]).then((YY => {
          let [rY, DY] = YY;
          return this.prepassOf.set(rY, DY), this.maskPipelines++, rY
        }))
      }
      failedPackBuild(YY, rY, DY, FY) {
        console.error(`Lite terrain pipeline ${DY} failed`, FY), CO(rY, DY, null, FY);
        const AY = Promise.reject(FY);
        AY.catch((() => {}));
        const IY = {
          name: DY,
          module: null,
          built: AY
        };
        return this.builds.set(YY, IY), IY
      }
      checkShaderPack(YY) {
        return HO(YY, {
          device: this.device,
          target: this.target,
          material: YY => this.materialFor(YY),
          programKey: (YY, rY, DY) => this.programKey(YY, rY, DY),
          pipelineBuild: (YY, rY, DY) => this.pipelineBuild(YY, rY, DY)
        })
      }
      createBinding(YY, rY, DY) {
        return this.target = rY, {
          renderable: YY,
          pipeline: Rr(this.device, rY),
          draw: YY => {
            this.geometry.setDrawing(!0);
            try {
              return DY ? this.drawTransparent(YY, rY) : this.drawOpaque(YY, rY)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(YY, rY) {
        var DY, FY, AY, IY;
        const {
          Gu: RY
        } = YY;
        this.lighting = YY.GQ;
        const OY = (0, vO.o)(rY);
        this.dirLightCount = Math.min(OY, 4), this.vy = null !== (DY = RY.vy) && void 0 !== DY ? DY : null, OY > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(YY, rY), this.animateMaterials(rY.animTick);
        const gY = RY.os,
          aY = gY[0] !== this.originOffset[0] || gY[1] !== this.originOffset[1] || gY[2] !== this.originOffset[2];
        aY && (this.originOffset[0] = gY[0], this.originOffset[1] = gY[1], this.originOffset[2] = gY[2]);
        const vY = rY.eye;
        this.eye[0] = vY[0], this.eye[1] = vY[1], this.eye[2] = vY[2], this.writeShaderPackInputs();
        const uY = rY.projectionMatrix,
          sY = 0 === uY[15];
        let iY = 0;
        (aY || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: yY
        } = this;
        Or(this.transparentRenderable._worldCenter, rY, Ar), this.resetBatches(sY), this.transparent.length = 0, this.unlit.length = 0;
        const QY = RY.Mu.K9,
          oY = QY / 2 * Math.sqrt(3);
        let WY = 0;
        const EY = !!this.vy && AF(this.vy.defineFor("liquid"));
        let mY = !1;
        const VY = null !== (FY = null === (AY = RY.Zm) || void 0 === AY ? void 0 : AY.visibility) && void 0 !== FY ? FY : null,
          SY = this.visCull && sY && 0 === this.compiling && null !== VY && RY.Mu.eDY[0] >= this.visCullMinDistance ? this.target : null,
          lY = this.visPassable,
          TY = this.visCandidates,
          eY = this.visCandidateBatches;
        lY.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let NY = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let BY = 0;
        const cY = (YY, DY) => {
          if (!DY) return this.transparent.push(YY), void(BY += 2 * YY.faceCount);
          if (null !== YY.faceGroups && DY.faceCull) {
            if (0 === iY && (iY = (0, jO.c)(uY, rY.renderWidth, rY.renderHeight), iY !== this.faceFocalPx && (this.faceFocalPx = iY, yY = ++this.faceEpoch)), YY.faceEpoch !== yY) {
              YY.faceEpoch = yY;
              const rY = Math.sqrt(YY.distance) + oY,
                DY = (0, jO.i)(YY.planePX, YY.planeNX, YY.planePY, YY.planeNY, YY.planePZ, YY.planeNZ, this.eye[0] - (YY.origin[0] - this.originOffset[0]), this.eye[1] - (YY.origin[1] - this.originOffset[1]), this.eye[2] - (YY.origin[2] - this.originOffset[2]), (0, jO.f)(rY, iY));
              DY !== YY.faceMask && this.chooseFaceRanges(YY, YY.faceGroups, DY)
            }
            if (0 === YY.rangeCount) return
          } else - 1 !== YY.faceMask && this.drawWhole(YY);
          DY.meshes.push(YY), BY += 2 * ((YY.rangeCount > 0 ? YY.count0 : 0) + (YY.rangeCount > 1 ? YY.count1 : 0))
        };
        for (const HY of this.chunks.values()) {
          aY && this.writeSlot(HY);
          const YY = HY.mesh.visibility;
          YY !== HY.visibility && (HY.visibility = YY, this.slots.setVisibility(HY.slot, YY));
          const {
            material: DY
          } = HY;
          this.geometry.lost(HY) && performance.now() >= HY.lostRetryAt && this.remeshLost(RY, HY);
          const FY = !(null === DY || void 0 === DY || !DY.bindGroup) && this.geometry.backed(HY),
            AY = FY && this.lighting && !HY.vertices.page.twin;
          if (SY && (Number.isNaN(HY.key) && (HY.ci = Math.floor(HY.origin[0] / QY), HY.cj = Math.floor(HY.origin[1] / QY), HY.ck = Math.floor(HY.origin[2] / QY), HY.key = (0, dO.i)(HY.ci, HY.cj, HY.ck)), (!FY || YY < 1 || AY || !this.batchDraws(DY, HY.packed, SY)) && this.visSeeThrough(HY, SY) && lY.add(HY.key)), !FY) continue;
          AY || (HY.lostRemeshes = 0);
          const IY = HY.origin[0] - this.originOffset[0],
            OY = HY.origin[1] - this.originOffset[1],
            gY = HY.origin[2] - this.originOffset[2];
          if (!(0, LR.c)(rY.frustum, IY, OY, gY, QY)) continue;
          const vY = IY + QY / 2 - this.eye[0],
            uY = OY + QY / 2 - this.eye[1],
            iY = gY + QY / 2 - this.eye[2];
          if (HY.distance = vY * vY + uY * uY + iY * iY, this.lighting && !HY.lit && (WY = Math.max(WY, HY.vertexCount), this.unlit.push(HY)), AY) continue;
          const yY = this.isBlended(DY) ? null : this.batchFor(DY, HY.packed, HY.vertices.page, 1 === YY, sY);
          SY ? (TY[NY] = HY, eY[NY++] = yY) : cY(HY, yY)
        }
        const KY = SY ? this.sweepVisibility(YY, rY, VY) : null;
        null === (IY = (0, KI.t)(RY)) || void 0 === IY || IY.update(rY.frustum, this.originOffset, QY, KY);
        for (let HY = 0; HY < NY; HY++) {
          const YY = TY[HY];
          !KY || KY.isDrawn(YY.ci, YY.cj, YY.ck) ? cY(YY, eY[HY]) : (this.visCulledParts++, this.visCulledTriangles += 2 * YY.faceCount)
        }
        for (const HY of this.transparent) mY ||= EY && HY.material.liquid && !HY.material.customRenderMat;
        this.submittedTriangles = BY, KY && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(YY, rY, KY)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(mY) : mY && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && WY > 0 && this.geometry.lightFullSky(this.unlit, WY);
        for (const HY of this.opaqueBatches) this.chunkSorter.sort(HY.meshes, 1) || HY.meshes.sort(xO);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(nO)
      }
      sweepVisibility(YY, rY, DY) {
        const {
          Mu: FY
        } = YY.Gu, AY = FY.K9, IY = this.visPassable, RY = this.eye[0] + this.originOffset[0], OY = this.eye[1] + this.originOffset[1], gY = this.eye[2] + this.originOffset[2];
        if (!DY.eyeClear(RY, OY, gY, rY.near, rY.projectionMatrix, FY)) return null;
        const [aY, vY] = FY.eDY, uY = DY.update(RY, OY, gY, AY, aY, vY, IY);
        return this.visSweeps = DY.sweeps, uY ? DY : null
      }
      visSeeThrough(YY, rY) {
        const {
          material: DY
        } = YY;
        return (!DY || !this.isBlended(DY)) && (YY.mesh.visibility < 1 || !(null !== DY && void 0 !== DY && DY.bindGroup) || YY.faceCount > 0 && (!this.geometry.backed(YY) || this.lighting && !YY.vertices.page.twin) || !this.batchDraws(DY, YY.packed, rY))
      }
      batchDraws(YY, rY, DY) {
        var FY;
        const AY = rY ? 2 : 0;
        if (YY === this.visDrawsMaterial && function(YY, rY) {
            return 0 !== (YY & 1 << rY)
          }(this.visDrawsBits, AY)) return 0 !== (this.visDrawsBits & 2 << AY);
        let IY = null !== (FY = this.visBatchDraws.get(YY)) && void 0 !== FY ? FY : 0;
        if (!(IY & 1 << AY)) {
          IY |= 1 << AY | (!!YY.bindGroupLayout && this.canDraw(YY, rY) && !!this.pipelines.get(this.pipelineId(YY, this.programKey(YY, rY), DY)) ? 2 << AY : 0), this.visBatchDraws.set(YY, IY)
        }
        return this.visDrawsMaterial = YY, this.visDrawsBits = IY, 0 !== (IY & 2 << AY)
      }
      runVisCheck(YY, rY, DY) {
        const {
          Gu: FY
        } = YY, {
          Mu: AY
        } = FY, IY = AY.K9, RY = new Set;
        for (const iY of this.chunks.values()) RY.add(iY.key);
        const OY = mA.Matrix.FromArray(rY.viewProjectionMatrix).invert(),
          [gY, aY, vY] = this.originOffset,
          uY = new mA.xy,
          sY = function(YY, rY, DY, FY) {
            const AY = new Set;
            for (let IY = 0; IY < 27; IY++)
              for (let RY = 0; RY < 48; RY++) {
                const OY = DY((RY + .5) / 48 * 2 - 1, (IY + .5) / 27 * 2 - 1);
                JO(YY, rY, [OY[0] - rY[0], OY[1] - rY[1], OY[2] - rY[2]], FY, AY)
              }
            return AY
          }({
            VJ: (YY, rY, DY) => AY.VJ(YY, rY, DY),
            occluders: DY.occluders,
            opaque: DY.opaque,
            Jy: IY,
            isDrawn: (YY, rY, FY) => DY.isDrawn(YY, rY, FY),
            hasParts: (YY, rY, DY) => RY.has((0, dO.i)(YY, rY, DY))
          }, [this.eye[0] + gY, this.eye[1] + aY, this.eye[2] + vY], ((YY, rY) => (mA.xy.TransformCoordinatesFromFloatsToRef(YY, rY, .5, OY, uY), [uY.x + gY, uY.y + aY, uY.z + vY])), (AY.eDY[0] + 1) * IY);
        this.visViolations = sY.size;
        for (const iY of sY) this.warnOnce(`vis:${iY}`, `Lite terrain cave culling skipped chunk ${iY}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var YY;
        null !== (YY = this.vy) && void 0 !== YY && YY.isRunning() && (this.shaderPackInputs ??= new bI(this.device, this.vy.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.vy, this.eye, this.lighting))
      }
      bindShaderPackInputs(YY, rY, DY) {
        var FY, AY, IY, RY;
        let OY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: gY
        } = this.shaderPackFields(rY, DY);
        if (void 0 === gY) return;
        this.shaderPackInputs || (this.shaderPackInputs = new bI(this.device, DY.textureLayers(), this.sunShadow), this.shaderPackInputs.write(DY, this.eye, this.lighting));
        const aY = AF(gY) ? null !== (FY = null === (AY = this.sceneDepth) || void 0 === AY ? void 0 : AY.view) && void 0 !== FY ? FY : this.standIn() : null,
          vY = OY ? null !== (IY = null === (RY = this.shadowMask) || void 0 === RY ? void 0 : RY.view) && void 0 !== IY ? IY : this.standIn() : null;
        this.shaderPackInputs.bind(YY, aY, MI(gY, !!this.sunShadow), vY)
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
        var YY, rY;
        return null !== (YY = null === (rY = this.shaderPackInputs) || void 0 === rY ? void 0 : rY.bindGroupFor(null, !0)) && void 0 !== YY ? YY : null
      }
      resetBatches(YY) {
        const rY = this.opaqueBatches;
        let DY = 0;
        for (const FY of rY) FY.meshes.length > 0 && (FY.meshes.length = 0, FY.faceCull = this.batchFaceCull(FY.material, YY), rY[DY++] = FY);
        rY.length = DY
      }
      orderBatches() {
        const YY = this.opaqueBatches;
        for (let rY = 0; rY < YY.length; rY++) {
          const DY = YY[rY];
          DY.group = rY;
          for (let FY = 0; FY < rY; FY++) {
            const rY = YY[FY];
            if (rY.material === DY.material && rY.packed === DY.packed) {
              DY.group = rY.group;
              break
            }
          }
          DY.nearest = DY.meshes.length > 0 ? DY.meshes[0].distance : 1 / 0
        }
        YY.sort(MO)
      }
      batchFor(YY, rY, DY, FY, AY) {
        for (const RY of this.opaqueBatches)
          if (RY.material === YY && RY.packed === rY && RY.page === DY && RY.resting === FY) return RY;
        const IY = {
          material: YY,
          packed: rY,
          page: DY,
          resting: FY,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(YY, AY)
        };
        return this.opaqueBatches.push(IY), IY
      }
      batchFaceCull(YY, rY) {
        return !(!rY || !(0, fO.q)(YY.model)) && (!this.vy || ! function(YY) {
          var rY;
          return !(null === (rY = (0, cr.g)(YY)) || void 0 === rY || !rY.movesVertices)
        }(this.shaderPackFields(YY, this.vy).packVariant))
      }
      writeFrameUniforms(YY, rY) {
        const DY = this.frameUniforms,
          FY = vF;
        if ((0, vO.p)(YY, DY), DY[FY.fogInfos] = rY.fogEnabled ? rY.fogMode : 0, DY[FY.fogInfos + 1] = rY.fogStart, DY[FY.fogInfos + 2] = rY.fogEnd, DY[FY.fogInfos + 3] = rY.fogDensity, DY.set(rY.fogColour, FY.fogColour), DY[FY.outputHeight] = rY.renderHeight, DY.set(rY.ambientColour, FY.sceneAmbient), (0, vO.n)(rY, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const rY = (0, uO.g)(YY.yQ, YY.Xy, YY.qy);
          for (let YY = 0; YY < 4; YY++) DY[FY.aoLevels + YY] = rY[YY] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, DY)
      }
      animateMaterials(YY) {
        const rY = sF.anim;
        for (const DY of this.materials.values()) DY.animated && (DY.uniformData[rY] = YY, this.device.queue.writeBuffer(DY.uniformBuffer, 4 * rY, DY.uniformData, rY, 1))
      }
      canDraw(YY, rY) {
        return !("atlas" === YY.texture && !rY) || (this.warnOnce(`stride:${YY.id}`, `Lite terrain: material "${YY.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(YY, rY) {
        let DY = 0;
        YY.setBindGroup(1, this.frameBindGroup);
        for (const FY of this.opaqueBatches) {
          if (!FY.meshes.length || !this.canDraw(FY.material, FY.packed)) continue;
          const AY = this.pipelineFor(FY.material, FY.packed, rY, FY.resting);
          AY && (YY.setPipeline(AY), YY.setBindGroup(2, FY.material.bindGroup), this.vy && this.bindShaderPackInputs(YY, FY.material, this.vy, this.prepassOf.has(AY)), DY += this.drawBatch(YY, FY))
        }
        return DY
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(YY, rY, DY) {
        const FY = this.target,
          AY = this.vy;
        if (!FY || !AY || 0 === this.maskPipelines) return 0;
        let IY = 0,
          RY = null;
        this.geometry.setDrawing(!0);
        try {
          for (const OY of this.opaqueBatches) {
            if (!OY.meshes.length || !this.canDraw(OY.material, OY.packed)) continue;
            const gY = this.pipelineFor(OY.material, OY.packed, FY, OY.resting),
              aY = gY && this.prepassOf.get(gY);
            aY && (RY || (RY = YY.beginRenderPass(rY), RY.setBindGroup(0, DY), RY.setBindGroup(1, this.frameBindGroup)), RY.setPipeline(aY), RY.setBindGroup(2, OY.material.bindGroup), this.bindShaderPackInputs(RY, OY.material, AY, !0), IY += this.drawBatch(RY, OY))
          }
        } finally {
          var OY;
          null === (OY = RY) || void 0 === OY || OY.end(), this.geometry.setDrawing(!1)
        }
        return IY
      }
      drawBatch(YY, rY) {
        let DY = 0;
        for (const FY of rY.meshes) {
          const {
            rangeCount: rY
          } = FY;
          rY > 0 && (DY += this.geometry.draw(YY, FY, this.lighting, FY.first0, FY.count0), rY > 1 && (DY += this.geometry.draw(YY, FY, this.lighting, FY.first1, FY.count1)))
        }
        return DY
      }
      drawTransparent(YY, rY) {
        let DY = 0,
          FY = null,
          AY = null;
        YY.setBindGroup(1, this.frameBindGroup);
        for (const IY of this.transparent) {
          const RY = IY.material;
          if (!this.canDraw(RY, IY.packed)) continue;
          const OY = this.pipelineFor(RY, IY.packed, rY);
          OY && (OY !== FY && (YY.setPipeline(OY), FY = OY, this.vy && this.bindShaderPackInputs(YY, RY, this.vy)), RY !== AY && (YY.setBindGroup(2, RY.bindGroup), AY = RY), DY += this.geometry.draw(YY, IY, this.lighting))
        }
        return DY
      }
    }

    function GO(YY, rY, DY, FY) {
      return `${KF(YY)}|${YY.atlasLayers}|${YY.WG}|${rY}|${DY}|${FY._colorFormat}|${FY._depthStencilFormat}|${FY._sampleCount}`
    }

    function xO(YY, rY) {
      return YY.distance - rY.distance
    }

    function nO(YY, rY) {
      return rY.distance - YY.distance
    }
    class PO {
      constructor() {
        this.left = []
      }
      sort(YY, rY) {
        for (let DY = 0; DY < YY.length; DY++) {
          const rY = YY[DY].distance;
          if (rY - rY !== 0) return !1
        }
        return this.sortRange(YY, 0, YY.length, rY), !0
      }
      sortRange(YY, rY, DY, FY) {
        if (DY - rY <= 16) {
          for (let AY = rY + 1; AY < DY; AY++) {
            const DY = YY[AY],
              IY = FY * DY.distance;
            let RY = AY - 1;
            for (; RY >= rY && FY * YY[RY].distance > IY; RY--) YY[RY + 1] = YY[RY];
            YY[RY + 1] = DY
          }
          return
        }
        const AY = rY + DY >>> 1;
        if (this.sortRange(YY, rY, AY, FY), this.sortRange(YY, AY, DY, FY), FY * YY[AY - 1].distance <= FY * YY[AY].distance) return;
        const {
          left: IY
        } = this, RY = AY - rY;
        for (let vY = 0; vY < RY; vY++) IY[vY] = YY[rY + vY];
        let OY = 0,
          gY = AY,
          aY = rY;
        for (; OY < RY && gY < DY;) YY[aY++] = FY * YY[gY].distance < FY * IY[OY].distance ? YY[gY++] : IY[OY++];
        for (; OY < RY;) YY[aY++] = IY[OY++]
      }
    }
    const UO = Math.ceil(102);

    function LO(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rY;
      const IY = Math.min(rY, DY),
        RY = new Uint32Array(YD(FY));
      for (let OY = 0; OY < FY; OY++) {
        const rY = Math.floor(OY * IY / FY),
          DY = Math.max(rY + 1, Math.floor((OY + 1) * IY / FY));
        for (let gY = 0; gY < FY; gY++) {
          const aY = Math.floor(gY * IY / FY),
            vY = Math.max(aY + 1, Math.floor((gY + 1) * IY / FY));
          let uY = 0;
          for (let FY = rY; FY < DY; FY++)
            for (let rY = aY; rY < vY; rY++) YY[FY * AY + rY] >= UO && uY++;
          if (2 * uY >= (DY - rY) * (vY - aY)) {
            const YY = gY + FY * OY;
            RY[YY >>> 5] |= 1 << (31 & YY)
          }
        }
      }
      return RY
    }

    function tO(YY) {
      return Math.max(1, Math.min(16, YY))
    }
    class Yg {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = YY, this.loadTexture = rY, this.warn = DY, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(YY, rY) {
        return (YY.Yz !== this.builtVersion || this.blockCaster.length !== rY) && (this.build(YY, rY), !0)
      }
      build(YY, rY) {
        this.builtVersion = YY.Yz;
        const DY = new Uint16Array(rY),
          FY = new Map;
        for (let AY = 1; AY < rY; AY++) {
          const rY = this.classify(YY, AY, FY);
          if (null === rY || rY === nr) {
            DY[AY] = null === rY ? 0 : nr;
            continue
          }
          let IY = this.byKey.get(rY.key);
          void 0 === IY && (IY = this.allocate(rY), this.byKey.set(rY.key, IY)), DY[AY] = IY
        }
        this.blockCaster = DY, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(YY, rY) {
        const DY = YY.vU[rY];
        if ("function" !== typeof DY) return DY;
        try {
          return DY()
        } catch (FY) {
          return this.warnOnce(`Sun shadows: no caster option for block ${rY}: ${FY instanceof Error?FY.message:String(FY)}`), null
        }
      }
      classify(YY, rY, DY) {
        const FY = this.option(YY, rY);
        if ("none" === FY) return null;
        if (FY && FY.planes.length > 0) {
          const YY = FY.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(YY)}`,
            planes: YY
          }
        }
        if (YY.ai[rY]) return null;
        const AY = YY.si[rY] ? YY.uZ(rY) : null;
        if (AY && AY.length >= 6) {
          const YY = function(YY) {
            const rY = new Uint32Array(16);
            for (let DY = 0; DY + 6 <= YY.length; DY += 6) {
              const FY = [0, 1, 2].map((rY => Math.max(0, Math.ceil(8 * YY[DY + rY] - .5)))),
                AY = [0, 1, 2].map((rY => Math.min(7, Math.floor(8 * YY[DY + rY + 3] - .5))));
              for (let YY = FY[2]; YY <= AY[2]; YY++)
                for (let DY = FY[1]; DY <= AY[1]; DY++)
                  for (let IY = FY[0]; IY <= AY[0]; IY++) {
                    const FY = IY + 8 * (DY + 8 * YY);
                    rY[FY >>> 5] |= 1 << (31 & FY)
                  }
            }
            return rY
          }(AY);
          return function(YY) {
            return YY.every((YY => 4294967295 === YY))
          }(YY) ? nr : YY.every((YY => 0 === YY)) ? null : {
            kind: "shape",
            key: `shape:${YY.join(",")}`,
            mask: YY
          }
        }
        if (YY.YC[rY] || !YY.QQ[rY]) return null;
        const IY = [0, 1, 2, 3, 4, 5].map((FY => {
          const AY = YY.oQ[6 * rY + FY];
          let IY = DY.get(AY);
          return void 0 === IY && (IY = function(YY) {
            if (!YY || YY.NQ) return null;
            const {
              QG: rY,
              WG: DY,
              yG: FY
            } = YY;
            if (!rY || !DY || !(DY > 0) || void 0 === FY || !(FY >= 0)) return null;
            const AY = rY[0],
              IY = DY * DY * 4;
            if (!AY || AY.byteLength < IY) return null;
            const RY = Math.floor(AY.byteLength / IY),
              OY = rY[Math.floor(FY / RY)];
            if (!OY) return null;
            const gY = new Uint8Array(OY.buffer, OY.byteOffset, OY.byteLength),
              aY = FY % RY * IY;
            if (aY + IY > gY.length) return null;
            const vY = new Uint8Array(DY * DY);
            let uY = !1;
            for (let sY = 0; sY < vY.length; sY++) vY[sY] = gY[aY + 4 * sY + 3], uY ||= vY[sY] < UO;
            return uY ? {
              alpha: vY,
              width: DY
            } : null
          }(YY.eQ(AY)), DY.set(AY, IY)), IY
        }));
        if (IY.every((YY => null === YY))) return nr;
        const RY = tO(Math.max(...IY.map((YY => {
            var rY;
            return null !== (rY = null === YY || void 0 === YY ? void 0 : YY.width) && void 0 !== rY ? rY : 1
          })))),
          OY = new Uint32Array(YD(RY)).fill(4294967295),
          gY = IY.map((YY => null === YY ? OY : LO(YY.alpha, YY.width, YY.width, RY)));
        return {
          kind: "cutout",
          key: `cutout:${RY}:${gY.map((YY=>YY.join(","))).join("|")}`,
          size: RY,
          faces: gY
        }
      }
      allocate(YY) {
        if (this.nextCaster >= rD) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const rY = this.nextCaster++;
        if (this.writeCaster(rY, Pr, 0, 0, 0), "shape" === YY.kind) {
          const DY = this.allocateMask(YY.mask.length);
          DY >= 0 && (this.sink(DY, YY.mask), this.writeCaster(rY, Ur, DY, 0, 8))
        } else if ("cutout" === YY.kind) {
          const DY = YD(YY.size),
            FY = this.allocateMask(6 * DY);
          if (FY >= 0) {
            const AY = new Uint32Array(6 * DY);
            YY.faces.forEach(((YY, rY) => {
              AY.set(YY, rY * DY)
            })), this.sink(FY, AY), this.writeCaster(rY, tr, FY, 0, YY.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(rY, YY.planes).finally((() => {
          this.planesLoading--
        })));
        return rY
      }
      async loadPlanes(YY, rY) {
        const DY = await Promise.all(rY.map((YY => this.texture(YY.texture))));
        if (DY.some((YY => null === YY))) return;
        const FY = DY,
          AY = tO(Math.max(...FY.map((YY => Math.min(YY.width, YY.height))))),
          IY = YD(AY),
          RY = this.allocateMask(rY.length * (4 + IY));
        if (RY < 0) return;
        const OY = new Uint32Array(rY.length * (4 + IY)),
          gY = 4 * rY.length;
        rY.forEach(((YY, rY) => {
          const DY = RY + gY + rY * IY;
          OY.set(function(YY, rY) {
            const [DY, FY] = YY.tangent, AY = Math.hypot(DY, FY) || 1, IY = DY / AY, RY = FY / AY, OY = YY.centre[0] * RY - YY.centre[1] * IY, gY = new Uint32Array(4);
            return new Float32Array(gY.buffer, 0, 3).set([IY, RY, OY]), gY[3] = rY, gY
          }(YY, DY), 4 * rY), OY.set(LO(FY[rY].alpha, FY[rY].width, FY[rY].height, AY), gY + rY * IY)
        })), this.sink(RY, OY), this.writeCaster(YY, Lr, RY, rY.length, AY)
      }
      texture(YY) {
        let rY = this.textures.get(YY);
        return rY || (rY = this.loadTexture(YY).catch((rY => (this.warn(`Sun shadows: no mask for ${YY}: ${rY instanceof Error?rY.message:String(rY)}`), null))), this.textures.set(YY, rY)), rY
      }
      allocateMask(YY) {
        if (this.nextMaskWord + YY > DD) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const rY = 32768 + this.nextMaskWord;
        return this.nextMaskWord += YY, rY
      }
      writeCaster(YY, rY, DY, FY, AY) {
        this.sink(0 + 4 * YY, Uint32Array.of(rY, DY, FY, AY))
      }
      warnOnce(YY) {
        this.warned.has(YY) || (this.warned.add(YY), this.warn(YY))
      }
    }
    var rg = DY(37041);

    function Dg(YY) {
      return !YY.cQ && !YY.iFY && !YY.IQ
    }

    function Fg() {
      return {
        bricks: new Uint32Array(wr),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Jr)
      }
    }
    class Ag {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = YY, this.writeVoxels = rY, this.writePool = DY, this.warn = FY, this.eyeChunk = null, this.slotChunk = new Array(Zr).fill(null), this.slotVersion = new Float64Array(Zr).fill(-1), this.slotPool = new Array(Zr).fill(null), this.starved = new Uint8Array(Zr), this.queue = [], this.queued = new Uint8Array(Zr), this.queueSorted = !0, this.freePool = new Uint32Array(FD), this.freeCount = FD, this.casterTable = null, this.warnedPool = !1, this.scratch = Fg(), this.victimScratch = Fg(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Zr), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let AY = 0; AY < FD; AY++) this.freePool[AY] = 65535 - AY
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return FD - this.freeCount
      }
      chunkAdded(YY) {
        if (null === this.eyeChunk || !this.inRadius(YY.i, YY.j, YY.k)) return;
        const rY = kr(YY.i, YY.j, YY.k);
        this.slotChunk[rY] = YY, this.slotVersion[rY] = -1, this.enqueue(rY)
      }
      update(YY, rY, DY) {
        const FY = this.casters.blockCaster;
        if (FY !== this.casterTable) {
          this.casterTable = FY;
          for (let YY = 0; YY < Zr; YY++) this.slotVersion[YY] = -1, this.slotChunk[YY] && this.enqueue(YY)
        }
        const AY = Math.floor(YY[0] / 32),
          IY = Math.floor(YY[1] / 32),
          RY = Math.floor(YY[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== AY || this.eyeChunk[1] !== IY || this.eyeChunk[2] !== RY) && (this.eyeChunk = [AY, IY, RY], this.follow(rY), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let OY = 0; OY < Zr; OY++) {
          const YY = this.slotChunk[OY];
          YY && (YY.CrY || YY.gQ !== this.slotVersion[OY]) && this.enqueue(OY)
        }
        this.drain(DY), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(YY, rY) {
        this.records.set(rY, 4 * YY), this.windowTopStale = !0, this.writeVoxels(4 * YY, rY)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const YY = this.records;
        let rY = -1 / 0;
        for (let FY = 0; FY < YY.length; FY += 4) {
          const DY = 255 & YY[FY + 3];
          DY !== jr && DY !== hr || !this.inRadius(YY[FY], YY[FY + 1], YY[FY + 2]) || (rY = Math.max(rY, YY[FY + 1] * Kr + (YY[FY + 3] >>> 8)))
        }
        const DY = rY === -1 / 0 ? 1 : rY + Xr;
        DY !== this.windowTop[0] && (this.windowTop[0] = DY, this.writeVoxels(br, this.windowTop))
      }
      follow(YY) {
        const rY = this.eyeChunk,
          [DY, FY, AY] = Hr;
        for (let RY = -AY; RY <= AY; RY++)
          for (let AY = -FY; AY <= FY; AY++)
            for (let FY = -DY; FY <= DY; FY++) {
              var IY;
              const DY = rY[0] + FY,
                OY = rY[1] + AY,
                gY = rY[2] + RY,
                aY = kr(DY, OY, gY),
                vY = this.slotChunk[aY];
              if (vY && !vY.CrY && vY.i === DY && vY.j === OY && vY.k === gY) continue;
              const uY = null !== (IY = YY(DY, OY, gY)) && void 0 !== IY ? IY : null;
              vY && (vY.i !== DY || vY.j !== OY || vY.k !== gY) && this.slotPool[aY] && (this.release(aY), this.record.fill(0), this.writeRecord(aY, this.record)), this.slotChunk[aY] = uY, this.slotVersion[aY] = -1, (uY || vY) && this.enqueue(aY)
            }
      }
      requeueStarved() {
        for (let YY = 0; YY < Zr; YY++) this.starved[YY] && this.slotChunk[YY] && this.enqueue(YY)
      }
      enqueue(YY) {
        this.queued[YY] || (this.queued[YY] = 1, this.queue.push(YY), this.queueSorted = !1)
      }
      drain(YY) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const YY = new Map;
          for (const rY of this.queue) YY.set(rY, this.slotDistance(rY));
          this.queue.sort(((rY, DY) => YY.get(DY) - YY.get(rY))), this.queueSorted = !0
        }
        const rY = performance.now();
        let DY = 0;
        const FY = [];
        for (; this.queue.length > 0 && (0 === DY || performance.now() - rY < YY);) {
          const YY = this.queue.pop(),
            rY = this.slotChunk[YY];
          !rY || rY.CrY || Dg(rY) ? (this.queued[YY] = 0, this.encodeSlot(YY), DY++) : FY.push(YY)
        }
        for (let AY = FY.length - 1; AY >= 0; AY--) this.queue.push(FY[AY])
      }
      slotDistance(YY) {
        const rY = this.slotChunk[YY],
          DY = this.eyeChunk;
        return rY ? Math.max(Math.abs(rY.i - DY[0]), Math.abs(rY.j - DY[1]), Math.abs(rY.k - DY[2])) : 0
      }
      inRadius(YY, rY, DY) {
        const FY = this.eyeChunk,
          [AY, IY, RY] = Hr;
        return Math.abs(YY - FY[0]) <= AY && Math.abs(rY - FY[1]) <= IY && Math.abs(DY - FY[2]) <= RY
      }
      release(YY) {
        const rY = this.slotPool[YY];
        if (rY) {
          for (let YY = rY.length - 1; YY >= 0; YY--) this.freePool[this.freeCount++] = rY[YY];
          this.slotPool[YY] = null
        }
      }
      encodeSlot(YY) {
        var rY, DY, FY, AY, IY;
        let RY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          OY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const gY = null !== (rY = null === (DY = this.slotPool[YY]) || void 0 === DY ? void 0 : DY.length) && void 0 !== rY ? rY : 0;
        this.release(YY), this.starved[YY] = 0;
        const aY = this.slotChunk[YY],
          vY = this.record;
        if (!aY || aY.CrY || !aY.ls) return this.slotChunk[YY] = null, this.slotVersion[YY] = -1, vY.fill(0), this.writeRecord(YY, vY), void(gY > 0 && this.requeueStarved());
        this.slotVersion[YY] = aY.gQ;
        const uY = this.encodeBricks(aY, YY, RY, OY);
        vY[0] = aY.i, vY[1] = aY.j, vY[2] = aY.k, vY[3] = uY, this.writeRecord(YY, vY), null === (FY = this.encoded) || void 0 === FY || FY.call(this, aY), OY && (null !== (AY = null === (IY = this.slotPool[YY]) || void 0 === IY ? void 0 : IY.length) && void 0 !== AY ? AY : 0) < gY && this.requeueStarved()
      }
      encodeBricks(YY, rY, DY, FY) {
        if (YY.ly) return fr;
        const AY = this.casters.blockCaster,
          {
            data: IY,
            stride: RY,
            offset: OY
          } = YY.ls,
          [gY, aY, vY] = RY,
          uY = Kr,
          {
            bricks: sY,
            cells: iY,
            special: yY
          } = DY;
        sY.fill(0), yY.fill(0);
        let QY = 0,
          oY = 0,
          WY = 0;
        for (let EY = 0; EY < uY; EY++) {
          const rY = EY >> 2,
            DY = 3 & EY,
            FY = YY.Zi[EY],
            RY = FY === rg.g ? -1 : FY < AY.length ? AY[FY] : 0;
          if (0 !== RY)
            for (let YY = 0; YY < uY; YY++) {
              const FY = YY >> 2,
                mY = 3 & YY;
              let VY = OY + YY * gY + EY * aY;
              for (let YY = 0; YY < uY; YY++, VY += vY) {
                let OY = RY;
                if (OY < 0) {
                  const YY = IY[VY];
                  if (OY = YY < AY.length ? AY[YY] : 0, 0 === OY) continue
                }
                const gY = Gr(FY, rY, YY >> 2),
                  aY = xr(mY, DY, 3 & YY);
                sY[3 * gY + (aY >>> 5)] |= 1 << (31 & aY), iY[gY * dr + aY] = OY, QY++, WY = EY, OY === nr ? oY++ : yY[gY] = 1
              }
            }
        }
        return 0 === QY ? fr : 32768 === oY ? jr | WY << 8 : (this.writePoolEntries(rY, DY, FY), this.writeVoxels(Mr + rY * wr, sY), hr | WY << 8)
      }
      writePoolEntries(YY, rY, DY) {
        const {
          bricks: FY,
          cells: AY,
          special: IY
        } = rY, RY = this.entry;
        let OY = 0;
        for (let vY = 0; vY < Jr; vY++) OY += IY[vY];
        if (0 === OY) return;
        DY && this.freeCount < OY && this.evictBeyond(YY, OY);
        const gY = new Uint32Array(DY ? Math.min(OY, this.freeCount) : 0);
        let aY = 0;
        for (let vY = 0; vY < Jr; vY++) {
          if (!IY[vY]) continue;
          const DY = 3 * vY;
          if (aY === gY.length) {
            this.dropSpecials(rY, vY), this.starved[YY] = 1;
            continue
          }
          const OY = this.freePool[--this.freeCount];
          gY[aY++] = OY;
          for (let YY = 0; YY < dr; YY++) {
            const rY = FY[DY + (YY >>> 5)] >>> (31 & YY) & 1 ? AY[vY * dr + YY] : 0;
            1 & YY ? RY[YY >> 1] |= rY << 16 : RY[YY >> 1] = rY
          }
          FY[DY + 2] = OY + 1, this.writePool(AD + 32 * OY, RY)
        }
        gY.length > 0 && (this.slotPool[YY] = gY)
      }
      evictBeyond(YY, rY) {
        const DY = this.slotDistance(YY),
          FY = [];
        for (let AY = 0; AY < Zr; AY++) AY !== YY && this.slotPool[AY] && this.slotDistance(AY) > DY && FY.push(AY);
        FY.sort(((YY, rY) => this.slotDistance(rY) - this.slotDistance(YY)));
        for (const AY of FY) {
          if (this.freeCount >= rY) return;
          const YY = this.slotChunk[AY];
          YY && !YY.CrY && YY.ls && (YY.gQ === this.slotVersion[AY] || Dg(YY)) && this.encodeSlot(AY, this.victimScratch, !1)
        }
      }
      dropSpecials(YY, rY) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const DY = 3 * rY;
        for (let FY = 0; FY < dr; FY++) YY.cells[rY * dr + FY] !== nr && (YY.bricks[DY + (FY >>> 5)] &= ~(1 << (31 & FY)))
      }
    }
    var Ig = DY(36739);
    class Rg {
      constructor(YY) {
        this.device = YY, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new QD, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Mu = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = YY.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = YY.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(YY, rY, DY) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: FY
        } = this;
        FY.Ei(YY, rY), DY.forEachSunShadowCaster((YY => {
          this.add(YY)
        })), FY.finish();
        const AY = 0 === FY.parts;
        if (AY && this.uploadedEmpty) return;
        this.uploadedEmpty = AY;
        const {
          queue: IY
        } = this.device, {
          words: RY
        } = FY;
        IY.writeBuffer(this.frameBuffer, 0, RY, 0, 16385), FY.refs > 0 && IY.writeBuffer(this.frameBuffer, 65540, RY, gD, FY.refs), AY || IY.writeBuffer(this.frameBuffer, 327684, RY, aD, FY.parts * OD)
      }
      add(YY) {
        const rY = this.gridFor(YY);
        if (!rY) return;
        const {
          frame: DY
        } = this, {
          Mu: FY,
          worldAt: AY,
          instances: IY,
          instanceCount: RY,
          thin: OY
        } = YY;
        if (IY)
          for (let gY = 0; gY < RY; gY++) OY ? (WD(IY, 16 * gY, FY, AY, this.Mu), DY.add(rY, this.Mu)) : DY.add(rY, IY, 16 * gY);
        else DY.add(rY, FY, AY)
      }
      gridFor(YY) {
        let {
          geometry: rY,
          indexed: DY,
          first: FY,
          count: AY,
          skip: IY
        } = YY, RY = this.grids.get(rY);
        RY || (RY = new Map, this.grids.set(rY, RY));
        const OY = `${DY?FY:-1-FY}:${AY}:${null!==IY&&void 0!==IY?IY:""}`;
        let gY = RY.get(OY);
        if (void 0 !== gY || this.gridsFull) return gY;
        const aY = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = aY + 2;
        else if (aY > this.bakeDeadline) return;
        return gY = this.bake(rY, DY, FY, AY, IY), void 0 !== gY && RY.set(OY, gY), gY
      }
      bake(YY, rY, DY, FY, AY) {
        const IY = YY.vertexAttributes.find((YY => "position" === YY.kind)),
          RY = IY ? function(YY, rY, DY, FY) {
            let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const IY = YY => rY ? rY[DY + YY] : DY + YY,
              RY = YY => null !== AY && [0, 1, 2].some((rY => {
                const DY = IY(YY + rY);
                return DY >= AY[0] && DY < AY[1]
              })),
              OY = [1 / 0, 1 / 0, 1 / 0],
              gY = [-1 / 0, -1 / 0, -1 / 0];
            for (let EY = 0; EY + 2 < FY; EY += 3)
              if (!RY(EY))
                for (let rY = 0; rY < 3; rY++) {
                  const DY = IY(EY + rY);
                  for (let rY = 0; rY < 3; rY++) OY[rY] = Math.min(OY[rY], YY[3 * DY + rY]), gY[rY] = Math.max(gY[rY], YY[3 * DY + rY])
                }
            const aY = Math.max(gY[0] - OY[0], gY[1] - OY[1], gY[2] - OY[2]);
            if (!(aY > 0)) return null;
            const vY = aY / 64,
              uY = [0, 0, 0],
              sY = [0, 0, 0],
              iY = [0, 0, 0];
            for (let EY = 0; EY < 3; EY++) uY[EY] = Math.min(65, Math.ceil((gY[EY] - OY[EY]) / vY) + 1), sY[EY] = OY[EY] - vY / 2, iY[EY] = sY[EY] + uY[EY] * vY;
            const yY = new Uint32Array(Math.ceil(uY[0] * uY[1] * uY[2] / 32)),
              QY = new Float64Array(9),
              oY = [0, 0, 0],
              WY = [0, 0, 0];
            for (let EY = 0; EY + 2 < FY; EY += 3)
              if (!RY(EY)) {
                for (let rY = 0; rY < 3; rY++) {
                  const DY = IY(EY + rY);
                  for (let FY = 0; FY < 3; FY++) QY[3 * rY + FY] = YY[3 * DY + FY]
                }
                for (let YY = 0; YY < 3; YY++) {
                  const rY = Math.min(QY[YY], QY[3 + YY], QY[6 + YY]),
                    DY = Math.max(QY[YY], QY[3 + YY], QY[6 + YY]);
                  oY[YY] = Math.max(0, Math.floor((rY - sY[YY]) / vY - 1e-6)), WY[YY] = Math.min(uY[YY] - 1, Math.floor((DY - sY[YY]) / vY + 1e-6))
                }
                for (let YY = oY[2]; YY <= WY[2]; YY++)
                  for (let rY = oY[1]; rY <= WY[1]; rY++)
                    for (let DY = oY[0]; DY <= WY[0]; DY++)
                      if (ED(QY, sY[0] + (DY + .5) * vY, sY[1] + (rY + .5) * vY, sY[2] + (YY + .5) * vY, vY / 2)) {
                        const FY = DY + uY[0] * (rY + uY[1] * YY);
                        yY[FY >>> 5] |= 1 << (31 & FY)
                      }
              } return {
              words: yY,
              lo: sY,
              hi: iY,
              cell: vY,
              dims: uY
            }
          }((0, Ig.i)(IY, YY.vertexCount), rY ? YY.indexData : null, DY, FY, AY) : null;
        if (!RY) return null;
        const {
          words: OY,
          ...gY
        } = RY;
        if (this.gridTop + OY.length > uD) return void(this.gridsFull = !0);
        const aY = this.gridTop;
        return this.gridTop += OY.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * aY, OY), {
          ...gY,
          at: aY
        }
      }
    }
    const Og = Math.cos(1 * Math.PI / 180);

    function gg(YY, rY) {
      return YY[0] * rY[0] + YY[1] * rY[1] + YY[2] * rY[2] < Og
    }
    async function ag(YY) {
      const {
        pixels: rY,
        width: DY,
        height: FY
      } = await dA(YY), AY = new Uint8Array(DY * FY);
      for (let IY = 0; IY < AY.length; IY++) AY[IY] = rY[4 * IY + 3];
      return {
        width: DY,
        height: FY,
        alpha: AY
      }
    }
    class vg {
      constructor(YY, rY) {
        this.device = YY, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(VD.j), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = YY.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = YY.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * qr,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = YY.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [DY, FY, AY] = VD.k;
        this.volume = YY.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: DY,
            height: FY,
            depthOrArrayLayers: AY
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = YY.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = YY.createBuffer({
          label: "sun-shadow-volume-work",
          size: VD.j,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = rY ? new Rg(YY) : null, this.entityStandIn = rY ? null : YY.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var YY, rY;
        const DY = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || DY.push("Lite sun shadow volume pipeline compiling");
        const FY = null !== (YY = null === (rY = this.casters) || void 0 === rY ? void 0 : rY.planesLoading) && void 0 !== YY ? YY : 0;
        return FY > 0 && DY.push(`${FY} Lite sun shadow plane casters loading their textures`), DY
      }
      entries() {
        var YY, rY, DY, FY;
        const AY = Br.p;
        return [{
          binding: AY.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: AY.ls,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: AY.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: AY.volume,
          resource: this.volumeView
        }, {
          binding: AY.sampler,
          resource: this.volumeSampler
        }, {
          binding: AY.entities,
          resource: {
            buffer: null !== (YY = null === (rY = this.entities) || void 0 === rY ? void 0 : rY.frameBuffer) && void 0 !== YY ? YY : this.entityStandIn
          }
        }, {
          binding: AY.entityGrids,
          resource: {
            buffer: null !== (DY = null === (FY = this.entities) || void 0 === FY ? void 0 : FY.gridBuffer) && void 0 !== DY ? DY : this.entityStandIn
          }
        }]
      }
      prepare(YY, rY, DY) {
        var FY;
        this.entitiesThisFrame = !1;
        const AY = null !== (FY = null === DY || void 0 === DY ? void 0 : DY.sunShadowReach()) && void 0 !== FY ? FY : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!DY || !AY.sunShadow && !AY.airShadow) return void(this.volumeHolds = null);
        if (YY.Mu.K9 !== Kr) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${YY.Mu.K9}; everything is lit.`)));
        const IY = this.start(YY);
        this.casters.update(YY.Oi, YY.Oi.si.length);
        const RY = YY.os;
        for (let sY = 0; sY < 3; sY++) this.eye[sY] = rY[sY] + RY[sY];
        const OY = (0, VD.u)(this.eye);
        this.staleNear = OY;
        const gY = YY.Mu.HQ;
        IY.update(this.eye, ((YY, rY, DY) => gY.zQ(YY, rY, DY)), 1);
        const aY = (0, VD.o)(DY.i6()),
          vY = IY.eyeChunk,
          uY = this.uniformInts;
        for (let sY = 0; sY < 3; sY++) uY[sY] = vY[sY], uY[4 + sY] = OY[sY];
        this.entitiesThisFrame = null !== this.entities && AY.sunShadow, this.entitiesThisFrame && yD(this.uniformFloats, 8, rY, aY), null !== this.volumeHolds && (this.castersWritten || gg(aY, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(OY, aY, vY)
      }
      markStale(YY) {
        const rY = this.staleNear,
          DY = Kr,
          FY = [YY.i * DY, YY.j * DY, YY.k * DY];
        for (let IY = 0; IY < 3; IY++)
          if (FY[IY] + DY <= rY[IY] - DY || FY[IY] >= rY[IY] + VD.k[IY] + DY) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const AY = this.stale;
        for (let IY = 0; IY < AY.length; IY += 4)
          if (AY[IY] === YY.i && AY[IY + 1] === YY.j && AY[IY + 2] === YY.k) return void(AY[IY + 3] = this.swept);
        if (16 === AY.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        AY.push(YY.i, YY.j, YY.k, this.swept)
      }
      writeStale() {
        const YY = this.swept,
          rY = this.stale;
        this.staleAll && YY - this.staleAllSwept >= VD.f && (this.staleAll = !1, rY.length = 0);
        let DY = 0;
        for (let AY = 0; AY < rY.length; AY += 4)
          if (YY - rY[AY + 3] < VD.f) {
            for (let YY = 0; YY < 4; YY++) rY[DY + YY] = rY[AY + YY];
            DY += 4
          } rY.length = DY;
        const FY = this.uniformInts;
        FY[3] = this.staleAll ? 5 : DY / 4;
        for (let AY = 0; AY < 4; AY++)
          for (let YY = 0; YY < 3; YY++) FY[16 + 4 * AY + YY] = 4 * AY < DY ? rY[4 * AY + YY] * Kr : 0
      }
      writeUniform() {
        const YY = this.uniformInts;
        let rY = this.uniformWritten;
        if (rY) {
          let DY = !0;
          for (let FY = 0; FY < YY.length && DY; FY++) DY = YY[FY] === rY[FY];
          if (DY) return
        }
        rY ??= this.uniformWritten = new Int32Array(YY.length), rY.set(YY), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(YY) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, YY)
      }
      computeVolume(YY, rY, DY) {
        const FY = this.buildVolumePass();
        if (!FY) return void(this.volumeHolds = null);
        const AY = (0, VD.q)(this.volumeHolds, YY);
        this.volumeHolds = YY;
        const IY = 1 === AY.length && AY[0].size.every(((YY, rY) => YY === VD.k[rY])),
          RY = this.sweptChunk,
          OY = this.sweptLight,
          gY = rY[0] !== OY[0] || rY[1] !== OY[1] || rY[2] !== OY[2],
          aY = DY[0] !== RY[0] || DY[1] !== RY[1] || DY[2] !== RY[2],
          vY = gY && gg(rY, OY);
        if ((IY || this.written || aY || vY) && (this.fastLeft = VD.f), IY || this.written || gY || aY) {
          this.written = !1;
          for (let YY = 0; YY < 3; YY++) RY[YY] = DY[YY], OY[YY] = rY[YY];
          this.sweepLeft = IY ? 0 : VD.f
        }
        if (IY ? this.swept += VD.f : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, AY.push(...(0, VD.x)(YY, this.slice)), this.slice = (this.slice + 1) % VD.f, this.swept++), 0 === AY.length) return;
        const uY = (0, VD.z)(this.workData, rY, AY);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const sY = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          iY = sY.beginComputePass({
            label: "sun-shadow-volume"
          });
        iY.setPipeline(FY.pipeline), iY.setBindGroup(TD.group, FY.bindGroup), iY.dispatchWorkgroups(Math.ceil(uY / VD.i)), iY.end(), this.device.queue.submit([sY.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const YY = TD,
          rY = GPUShaderStage.COMPUTE,
          DY = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: YY.uniform,
              visibility: rY,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: YY.ls,
              visibility: rY,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: YY.special,
              visibility: rY,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: YY.work,
              visibility: rY,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: YY.volume,
              visibility: rY,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          FY = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: DY,
            entries: [{
              binding: YY.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: YY.ls,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: YY.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: YY.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: YY.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [DY]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: eD()
            }),
            entryPoint: "main"
          }
        }).then((YY => {
          this.volumePass = {
            pipeline: YY,
            bindGroup: FY
          }
        }), (YY => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(YY)}`)
        })), null
      }
      start(YY) {
        if (this.window) return this.window;
        const rY = (YY, rY) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * YY, rY)
        };
        this.casters = new Yg(((YY, DY) => {
          this.castersWritten = !0, rY(YY, DY)
        }), ag);
        const DY = new Ag(this.casters, ((YY, rY) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * YY, rY)
        }), rY);
        return DY.encoded = YY => {
          this.markStale(YY)
        }, YY.Mu.on("chunkAdded", (YY => {
          DY.chunkAdded(YY)
        })), this.window = DY, DY
      }
    }
    var ug = DY(38054),
      sg = DY(38058);
    const ig = 0,
      yg = 3,
      Qg = 4,
      og = 5;

    function Wg(YY, rY, DY, FY) {
      YY.drawOffset(rY, FY + ig), rY[FY + yg] = YY.drawTime(), DY[FY + Qg] = YY.ring.drawStart(), DY[FY + og] = YY.ring.drawCount()
    }
    const Eg = `\n${QF}\n\nconst MAX_STOPS = ${sg.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${sg.b/4}>,\n\tcolor1: array<vec4f, ${sg.b}>,\n\tcolor2: array<vec4f, ${sg.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${sg.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${sg.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var mg = DY(40673);
    class Vg {
      constructor(YY, rY, DY, FY) {
        this.device = YY, this.system = rY, this.frameIndex = DY, this.bindings = FY, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, mg.g)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (YY, rY) => {
          this.device.queue.writeBuffer(this.ring, YY * sg.f * 4, this.system.ring.records, YY * sg.f, (rY - YY) * sg.f)
        };
        const {
          name: AY
        } = rY;
        this.ring = YY.createBuffer({
          label: `particles-${AY}`,
          size: rY.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = YY.createBuffer({
          label: `particles-uniforms-${AY}`,
          size: 4 * sg.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(YY) {
        const rY = (0, mg.c)(this.system, this.uniformBits, YY);
        rY && (this.uniformBits = rY, this.device.queue.writeBuffer(this.uniforms, 0, rY))
      }
      bind() {
        const {
          system: YY
        } = this, rY = this.texture;
        (0, mg.k)(YY, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${YY.name}`,
          size: [sg.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * sg.k
        }, [sg.k, 1]));
        const DY = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === rY.view && this.boundSampler === rY.sampler && this.boundRamp === DY || (this.boundView = rY.view, this.boundSampler = rY.sampler, this.boundRamp = DY, this.bindGroup = this.device.createBindGroup({
          label: `particles-${YY.name}`,
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
            resource: rY.sampler
          }, {
            binding: 3,
            resource: rY.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: DY
          }]
        }))
      }
      destroy() {
        var YY;
        this.ring.destroy(), this.uniforms.destroy(), null === (YY = this.ramp) || void 0 === YY || YY.destroy()
      }
    }
    class Sg {
      constructor(YY, rY) {
        this.device = YY, this.resources = rY, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, ar.b)();
        const DY = YY.createBindGroupLayout({
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
        this.frameLayout = YY.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = YY.createPipelineLayout({
          bindGroupLayouts: [rr(YY), DY, this.frameLayout]
        }), this.module = YY.createShaderModule({
          label: "particles",
          code: Eg
        });
        const FY = YY.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        YY.queue.writeTexture({
          texture: FY
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: DY,
          rampSampler: YY.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: FY.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (rY, DY) => (this.bindTarget(DY), {
            renderable: this.renderable,
            pipeline: Rr(YY, DY),
            draw: YY => DY === this.preparedTarget ? this.draw(YY) : 0
          })
        }
      }
      get yFY() {
        return this.systems.size
      }
      reset() {
        for (const YY of this.systems.keys()) YY.reset()
      }
      describePendingWork() {
        return (0, ug.e)(this.systems.keys(), "Lite")
      }
      XN(YY, rY) {
        const DY = new ug.d(YY, rY, this);
        return this.systems.set(DY, new Vg(this.device, DY, this.allocateFrameIndex(), this.bindings)), DY
      }
      q_(YY, rY) {
        for (const DY of this.systems.keys()) DY.q_(YY, rY)
      }
      canDraw(YY) {
        const rY = this.systems.get(YY),
          DY = YY.texture ? this.resources.boundTexture(YY.texture) : null;
        if (!rY || !DY || !this.targetPipelines) return !1;
        if (rY.texture = DY, rY.pipelines.length = 0, !XA(YY.blendMode)) return this.warnOnce(`blend:${YY.blendMode}`, `particle blend mode ${YY.blendMode} is not drawn (${YY.name})`), !0;
        const FY = (0, KA.l)(YY.blendMode);
        for (const AY of FY) {
          const YY = this.pipelineFor(AY);
          if (!1 === YY) return rY.pipelines.length = 0, !0;
          YY && rY.pipelines.push(YY)
        }
        return rY.pipelines.length === FY.length
      }
      disposeStopped(YY) {
        YY.dispose()
      }
      remove(YY) {
        const rY = this.systems.get(YY);
        rY && (this.systems.delete(YY), rY.destroy(), this.freeFrameIndices.push(rY.frameIndex))
      }
      prepare(YY) {
        const rY = YY.animationRatio || 1;
        Or(this.renderable._worldCenter, YY, Fr), this.preparedTarget = this.target, this.draws.length = 0;
        let DY = 0;
        for (const FY of this.systems.values()) {
          const YY = FY.system;
          if (!YY.animateIfActive(rY)) continue;
          if (YY.ring.takeUploads(FY.upload), !YY.hasLiveParticles() || 0 === FY.pipelines.length) continue;
          FY.writeUniforms(this.warnOnce), FY.bind();
          const AY = 64 * FY.frameIndex;
          FY.count = YY.ring.drawCount(), Wg(YY, this.frameData, this.frameBits, AY), DY = Math.max(DY, AY + 64), this.draws.push(FY)
        }
        DY > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, DY)
      }
      draw(YY) {
        let rY = 0,
          DY = null;
        for (const FY of this.draws) {
          YY.setBindGroup(1, FY.bindGroup), YY.setBindGroup(2, this.frameBindGroup, [256 * FY.frameIndex]);
          for (const AY of FY.pipelines) AY !== DY && (YY.setPipeline(AY), DY = AY), YY.draw(4, FY.count), rY++
        }
        return rY
      }
      bindTarget(YY) {
        this.target = YY;
        const rY = `${YY._colorFormat}|${YY._depthStencilFormat}|${YY._depthCompare}|${YY._sampleCount}`;
        let DY = this.pipelines.get(rY);
        DY || (DY = new Map, this.pipelines.set(rY, DY)), this.targetPipelines = DY
      }
      pipelineFor(YY) {
        var rY;
        const DY = this.targetPipelines,
          FY = DY.get(YY);
        if (void 0 !== FY) return FY;
        DY.set(YY, null);
        const AY = this.target,
          IY = YY === KA.b,
          RY = null !== (rY = AY._depthCompare) && void 0 !== rY ? rY : Dr;
        return this.device.createRenderPipelineAsync({
          label: `particles-${YY}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: UY({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: IY ? 1 : 0
            }
          }, AY, qA((0, KA.h)(YY))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: AY._depthStencilFormat ? {
            format: AY._depthStencilFormat,
            depthCompare: RY,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: AY._sampleCount
          }
        }).then((rY => {
          DY.set(YY, rY)
        }), (rY => {
          DY.set(YY, !1), console.error("Lite particle pipeline failed", rY), GA("particles", `blend-${YY}`, rY)
        })), null
      }
      allocateFrameIndex() {
        const YY = this.freeFrameIndices.pop();
        if (void 0 !== YY) return YY;
        const rY = this.nextFrameIndex++;
        if (64 * (rY + 1) > this.frameData.length) {
          const YY = new Float32Array(2 * this.frameData.length);
          YY.set(this.frameData), this.frameData = YY, this.frameBits = new Uint32Array(YY.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return rY
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
    class lg {
      constructor(YY, rY, DY, FY, AY) {
        this.lite = YY, this.canvas = rY, this.info = DY, this.resources = AY, this.QDY = !1, this.needPOTTextures = !1, this.hU = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = rY.width, this.renderHeight = rY.height, this.caps = {
          maxTextureSize: FY.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: FY.maxTextureArrayLayers
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
      setSize(YY, rY) {
        if (this.renderWidth === YY && this.renderHeight === rY) return !1;
        const DY = this.renderWidth,
          FY = this.renderHeight;
        this.renderWidth = YY, this.renderHeight = rY;
        try {
          (0, wY.m)(this.lite, YY, rY)
        } catch (AY) {
          if (AY instanceof DOMException && "InvalidStateError" === AY.name) {
            this.renderWidth = DY, this.renderHeight = FY;
            try {
              (0, wY.m)(this.lite, DY, FY)
            } catch {
              this.canvas.width = DY, this.canvas.height = FY
            }
            return console.warn("WebGPU could not allocate render targets for resize", YY, rY, AY.message), !1
          }
          throw AY
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
      Om() {
        const YY = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : YY - this.lastFrameTime, this.lastFrameTime = YY
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(YY, rY) {
        const DY = document.createElement("canvas");
        return DY.width = YY, DY.height = rY, DY
      }
      kU(YY, rY) {
        var DY;
        return null !== (DY = this.resources.kU.get(YY)) && void 0 !== DY ? DY : new pY(this.resources, YY, rY)
      }
      atlasArray(YY, rY, DY) {
        return this.resources.atlasArray(YY, rY, DY)
      }
    }
    class Tg {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(YY) {
        this.fov = YY.fov, this.nearPlane = YY.near, this.farPlane = YY.far;
        const rY = YY.worldMatrix;
        for (let DY = 0; DY < 16; DY++)
          if (this.worldMatrix[DY] !== rY[DY]) return this.worldMatrix.set(rY), void this.worldMatrixVersion++
      }
    }
    class eg {
      constructor(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
        let vY = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = YY, this.LQ = rY, this.sceneTask = DY, this.gpuDevice = FY, this.terrain = AY, this.meshes = IY, this.particles = RY, this.resources = OY, this.sunShadow = vY, this.UYY = void 0, this.backendName = "WebGPU (Lite)", this.B3 = void 0, this.modelMeshes = void 0, this.camera = new Tg, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new XY(FY.lost), this.deviceLost = this.refusals.deviceLost, this.UYY = new lg(YY, gY, aY, FY.limits, OY), (0, cY.O)({
          ja: YY => {
            ZY(YY) && OY.textureSlot(YY)
          },
          loaded: YY => ZY(YY) ? OY.textureLoaded(YY) : null,
          canvasUpdated: (YY, rY, DY) => {
            ZY(YY) && OY.canvasUpdated(YY, rY, DY)
          }
        }), this.B3 = IY.B3, this.modelMeshes = IY.modelMeshes, rY.camera = this.camera
      }
      get castsEntitySunShadows() {
        var YY, rY;
        return null !== (YY = null === (rY = this.sunShadow) || void 0 === rY ? void 0 : rY.tracesEntities) && void 0 !== YY && YY
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(YY) {
        this.modelMeshes.attach(YY.model, YY.sceneMirror);
        const rY = YY.LQ;
        this.setClearColour(rY.clearColor.r, rY.clearColor.g, rY.clearColor.b), rY.draw = () => {
          this.drawFrame(YY, rY)
        }
      }
      render(YY) {
        try {
          this.UYY.Om(), YY.LQ.render()
        } catch (rY) {
          throw this.refusals.frameFailed(rY), rY
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var YY, rY, DY, FY;
        const AY = [...this.particles.describePendingWork(), ...null !== (YY = null === (rY = this.sunShadow) || void 0 === rY ? void 0 : rY.describePendingWork()) && void 0 !== YY ? YY : []],
          IY = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (DY = this.terrain.sceneDepth) && void 0 !== DY && DY.compiling ? 1 : 0) + (null !== (FY = this.terrain.shadowMask) && void 0 !== FY && FY.compiling ? 1 : 0);
        IY > 0 && AY.push(`${IY} Lite pipelines compiling`);
        const RY = this.terrain.buffersAwaitingVerdict;
        RY > 0 && AY.push(`${RY} Lite terrain buffers awaiting their out-of-memory verdict`);
        const OY = this.resources.texturesLoading;
        return OY > 0 && AY.push(`${OY} Lite textures loading`), AY
      }
      prepareTexture(YY) {
        return null !== this.resources.boundTexture(YY) || this.resources.textureFailed(YY)
      }
      drawFrame(YY, rY) {
        var DY, FY, AY, IY, RY, OY;
        const gY = aO(YY);
        this.camera.copyFromView(gY), this.setClearColour(gY.clearColour[0], gY.clearColour[1], gY.clearColour[2]), null === (DY = this.sunShadow) || void 0 === DY || DY.prepare(YY.Gu, gY.eye, null !== (FY = YY.Gu.vy) && void 0 !== FY ? FY : null), this.terrain.prepare(YY, gY), null === (AY = this.terrain.sceneDepth) || void 0 === AY || AY.setPlanes(gY.near, gY.far), null === (IY = this.terrain.shadowMask) || void 0 === IY || IY.prepare(gY), xR(this.sceneTask), this.meshes.prepare(rY, gY, YY.model.earthSky, null !== (RY = YY.Gu.vy) && void 0 !== RY ? RY : null), this.particles.prepare(gY);
        const aY = performance.now();
        this.resources.flushUploads(), null === (OY = this.sunShadow) || void 0 === OY || OY.traceEntities(this.meshes);
        try {
          (0, wY.l)(this.engine, this.lastFrameTime > 0 ? aY - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = aY
      }
      setClearColour(YY, rY, DY) {
        const FY = this.LQ.clearColor;
        FY.r = YY, FY.g = rY, FY.b = DY, FY.a = 1
      }
    }
    const Ng = "WebGPU device lost while Lite was starting";

    function Bg(YY, rY) {
      return "object" === typeof YY && null !== YY ? Object.assign(YY, {
        startStep: rY
      }) : YY
    }
    async function cg(YY, rY) {
      const DY = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!DY) throw Bg(new Error("No WebGPU adapter"), "no_adapter");
      const FY = DY.info,
        AY = {
          vendor: (null === FY || void 0 === FY ? void 0 : FY.vendor) || "unknown vendor",
          renderer: (null === FY || void 0 === FY ? void 0 : FY.architecture) || "unknown renderer",
          version: (null === FY || void 0 === FY ? void 0 : FY.description) || "unknown version"
        },
        IY = function(YY) {
          const rY = {};
          for (const DY in YY.limits) {
            const FY = YY.limits[DY];
            "number" === typeof FY && (rY[DY] = FY)
          }
          return rY
        }(DY);
      let RY;
      YY.style.background = "black";
      try {
        RY = await (0, wY.e)(YY, {
          msaaSamples: rY.HrY ? 4 : 1,
          requiredLimits: IY,
          alphaMode: "premultiplied"
        })
      } catch (vY) {
        throw Bg(vY, "#47" === (null === (OY = vY) || void 0 === OY ? void 0 : OY.message) ? "no_adapter" : "device")
      }
      var OY;
      const gY = function(YY) {
        return YY._device
      }(RY);
      let aY = null;
      gY.lost.then((YY => {
        aY = YY, console.error(`WebGPU device lost (${YY.reason}): ${YY.message}`)
      }));
      try {
        const DY = await async function(YY, rY, DY, FY, AY, IY) {
          const RY = (0, bY.e)(YY),
            OY = new pR(YY, rY),
            gY = new kO(rY),
            aY = new BR(rY, OY, (YY => function(YY, rY) {
              for (const FY of tY(YY)) {
                var DY;
                if (FY._targetSignature === rY) return null !== (DY = FY._sceneBG) && void 0 !== DY ? DY : null
              }
              return null
            }(RY, YY))),
            vY = new Sg(rY, OY);
          for (const iY of function(YY, rY, DY) {
              return [rY.opaqueRenderable, YY.opaqueRenderable, YY.skyLastRenderable, DY.renderable, rY.transparentRenderable, YY.transparentRenderable, YY.frontRenderable]
            }(aY, gY, vY)) LY(RY, iY);
          const uY = function(YY) {
            for (const rY of tY(YY))
              if ("LQ" === rY.name) return rY;
            throw new Error("Lite: the scene has no render task named scene")
          }(RY);
          AY && gY.installSceneDepth(uY, YY);
          const sY = IY ? new vg(rY, IY.entities) : null;
          gY.sunShadow = sY, sY && null !== IY && void 0 !== IY && IY.entities && (gY.shadowMask = new eO(rY, uY, YY, gY));
          return aY.sunShadow = sY, await (0, bY.i)(RY), new eg(YY, RY, uY, rY, gY, aY, vY, OY, DY, FY, sY)
        }(RY, gY, YY, AY, rY.sceneDepth, rY.sunShadow);
        if (null !== aY) {
          const {
            reason: YY,
            message: rY
          } = aY;
          throw Object.assign(new Error(`${Ng} (${YY}): ${rY}`), {
            fallbackReason: Ng
          })
        }
        return DY
      } catch (vY) {
        throw gY.destroy(), null === aY ? vY : Bg(vY, "device")
      }
    }
  },
  39986: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => yY,
      c: () => AY,
      e: () => FY,
      f: () => sY,
      i: () => vY,
      m: () => oY,
      o: () => IY,
      p: () => OY,
      q: () => gY,
      r: () => RY,
      t: () => QY,
      x: () => iY
    });
    const FY = 3,
      AY = 0,
      IY = 1,
      RY = 2,
      OY = {
        uniform: 3,
        ls: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      gY = 10,
      aY = "BloxdPackInputs",
      vY = "bloxdPackInputs",
      uY = [{
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
      sY = 80;

    function iY() {
      const YY = uY.map((YY => {
        let {
          name: rY,
          type: DY
        } = YY;
        return `    ${rY}: ${DY},\n`
      })).join("");
      return `struct ${aY} {\n${YY}}\n@group(${FY}) @binding(${AY}) var<uniform> ${vY}: ${aY};\n`
    }

    function yY(YY, rY) {
      const DY = new DataView(YY, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, sY),
        [FY, AY, IY, RY, OY, gY] = uY;
      DY.setFloat32(FY.offset, rY.seconds, !0), DY.setUint32(AY.offset, rY.lit ? 1 : 0, !0);
      for (let aY = 0; aY < 3; aY++) DY.setInt32(IY.offset + 4 * aY, rY.renderOffset[aY], !0), DY.setFloat32(RY.offset + 4 * aY, rY.i6[aY], !0), DY.setFloat32(OY.offset + 4 * aY, rY.eyePosition[aY], !0), DY.setFloat32(gY.offset + 4 * aY, rY.shadowDirection[aY], !0)
    }

    function QY(YY) {
      const rY = new Uint32Array(Math.max(1, YY.length));
      return YY.forEach(((YY, DY) => {
        let {
          id: FY,
          rotation: AY
        } = YY;
        rY[DY] = 65535 & FY | (3 & AY) << 16
      })), rY
    }
    const oY = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);