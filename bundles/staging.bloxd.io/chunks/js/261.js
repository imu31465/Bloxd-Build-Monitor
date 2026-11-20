export const id = 261;
export const ids = [261];
export const modules = {
  40988: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => QU,
      h: () => TU,
      i: () => PU,
      j: () => KU
    });
    var tU = gU(36754),
      pU = gU(38260),
      EU = gU(38253);

    function PU(UU, RU, gU, tU) {
      const pU = EU.s;
      RU.fill(0), UU.gravity.toArray(RU, pU.gravity), UU.colorDead.toArray(RU, pU.colorDead), gU[pU.ramp] = UU.useRampGradients ? 1 : 0;
      const PU = UU.getColorGradients(),
        TU = jU(UU, PU, "colour", tU);
      gU[pU.colorCount] = TU;
      for (let EU = 0; EU < TU; EU++) {
        var qU;
        const UU = PU[uU(PU, EU)];
        RU[pU.colorPositions + EU] = UU.gradient, UU.color1.toArray(RU, pU.color1 + 4 * EU), (null !== (qU = UU.color2) && void 0 !== qU ? qU : UU.color1).toArray(RU, pU.color2 + 4 * EU)
      }
      const KU = UU.getVelocityGradients(),
        cU = jU(UU, KU, "Fh", tU);
      gU[pU.velocityCount] = cU;
      for (let EU = 0; EU < cU; EU++) WU(RU, pU.Fh + 4 * EU, KU[uU(KU, EU)]);
      const GU = UU.useRampGradients ? UU.getColorRemapGradients() : null,
        CU = jU(UU, GU, "colour remap", tU);
      gU[pU.remapCount] = CU;
      for (let EU = 0; EU < CU; EU++) WU(RU, pU.remap + 4 * EU, GU[uU(GU, EU)])
    }

    function TU() {
      return {
        key: [],
        texels: new Uint8Array(4 * EU.g)
      }
    }
    const qU = [];

    function KU(UU, RU) {
      return cU(UU, qU), !eU(qU, RU.key) && (RU.key.length = 0, RU.key.push(...qU), RU.key.length > 0 && function(UU, RU) {
        for (let gU = 0; gU < EU.g; gU++) pU.j.GetCurrentGradient(gU / EU.g, UU, ((UU, RU, gU) => {
          tU.Color3.LerpToRef(UU.color, RU.color, gU, GU)
        })), RU[4 * gU] = 255 * GU.r, RU[4 * gU + 1] = 255 * GU.g, RU[4 * gU + 2] = 255 * GU.b, RU[4 * gU + 3] = 255
      }(UU.getRampGradients(), RU.texels), !0)
    }

    function cU(UU, RU) {
      RU.length = 0;
      const gU = UU.useRampGradients ? UU.getRampGradients() : null;
      if (null !== gU && void 0 !== gU && gU.length) {
        RU.push(gU.length);
        for (const UU of gU) RU.push(UU.gradient, UU.color.r, UU.color.g, UU.color.b)
      }
    }
    const GU = new tU.Color3;

    function jU(UU, RU, gU, tU) {
      return RU ? RU.length > EU.b ? (tU(`particleStops:${gU}`, `GPU particles use the first 2 and last ${EU.b-2} of more than ${EU.b} ${gU} gradient stops (${UU.name})`), EU.b) : RU.length : 0
    }

    function uU(UU, RU) {
      return RU < 2 || UU.length <= EU.b ? RU : UU.length - EU.b + RU
    }
    const CU = new Float32Array(EU.k),
      hU = new Uint32Array(CU.buffer);

    function QU(UU, RU, gU) {
      return PU(UU, CU, hU, gU), RU && eU(hU, RU) ? null : hU.slice()
    }

    function eU(UU, RU) {
      if (UU.length !== RU.length) return !1;
      for (let gU = 0; gU < UU.length; gU++)
        if (UU[gU] !== RU[gU]) return !1;
      return !0
    }

    function WU(UU, RU, gU) {
      var tU;
      UU[RU] = gU.gradient, UU[RU + 1] = gU.factor1, UU[RU + 2] = null !== (tU = gU.factor2) && void 0 !== tU ? tU : gU.factor1
    }
  },
  40981: (UU, RU, gU) => {
    function tU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const RU = new Set;
      return (gU, tU) => {
        RU.has(gU) || (RU.add(gU), console.warn(UU + tU))
      }
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  41023: (UU, RU, gU) => {
    gU.d(RU, {
      createLiteRendererAsync: () => aq,
      liteBabylonBackend: () => SU,
      setPipelineFailureHook: () => Mp
    });
    var tU = gU(36754),
      pU = gU(37124),
      EU = gU(37434),
      PU = gU(36703),
      TU = gU(37447);
    class qU extends TU.c {
      constructor() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        super(...RU), this.color = new tU.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: RU[0].aZ().getUniqueId(),
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
          needAlphaBlendingForMesh: UU => UU.visibility < 1 || UU.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const KU = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      cU = UU => 1 << KU.indexOf(UU),
      GU = cU("VERTEXCOLOR"),
      jU = cU("INSTANCES"),
      uU = cU("THIN_INSTANCES"),
      CU = cU("INSTANCESCOLOR"),
      hU = cU("FOG"),
      QU = cU("LITE_FRONT_LAYER");

    function eU(UU, RU, gU, tU) {
      let pU = 0;
      return UU.isVerticesDataPresent("color") && (pU |= GU), "none" !== RU && (pU |= jU), "thin" === RU && (pU |= uU, UU.isVerticesDataPresent("instanceColor") && (pU |= CU)), tU.fogEnabled && UU.applyFog && 0 !== tU.fogMode && (pU |= hU), gU >= 1 && (pU |= QU), pU
    }

    function WU(UU, RU) {
      UU.updateColor4("color", RU.color, RU.alpha)
    }
    var fU = gU(37374),
      xU = gU(36925),
      mU = gU(36790),
      IU = gU(36678),
      JU = gU(37359),
      wU = gU(37365),
      nU = gU(36689),
      bU = gU(36696),
      oU = gU(36707);
    const ZU = IU.d.GLSL;
    class aU {
      constructor(UU, RU) {
        this.name = UU, this.Zh = RU, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.HZ = {
          addOnce: UU => {
            this.disposers.push(UU)
          }
        }, this.uniqueId = RU.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      aZ() {
        return this.Zh
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
      needAlphaBlendingForMesh(UU) {
        return (0, nU._)(this.model, UU.visibility, UU.hasVertexAlpha)
      }
      needAlphaTestingForMesh(UU) {
        return (0, nU.bb)(this.model, UU.visibility, UU.hasVertexAlpha)
      }
      dispose() {
        (0, xU.l)(this);
        for (const UU of this.disposers.splice(0)) UU()
      }
      get model() {
        return (0, nU.kb)(this)
      }
    }
    const YU = new WeakSet;

    function BU(UU) {
      return YU.has(UU)
    }

    function VU(UU) {
      YU.add(UU)
    }
    const rU = {
      create: (UU, RU) => ((0, mU.m)(UU, new aU(UU.name, RU)), bU.b.defines()),
      write: () => {},
      addFeature: (UU, RU) => {
        const gU = UU.mirror;
        RU.feature === wU.k && RU.state.dirLightCount > 0 && (UU.disableLighting = !0, (0, nU.gb)(UU)), "BLOXD_LIGHTING" in RU.defines && (0, xU.h)(gU), RU.feature === JU.h && ((0, fU.j)(RU.state, ZU), function(UU, RU) {
          const gU = UU.aZ().WC();
          RU.textures.forEach(((tU, pU) => {
            setTimeout((() => {
              var EU, PU;
              const {
                url: TU
              } = tU.source;
              gU.atlasArray(TU, null !== (EU = null === (PU = RU.sources.pixels) || void 0 === PU ? void 0 : PU[pU]) && void 0 !== EU ? EU : null, RU.sources.layerWidth).then((gU => {
                (0, fU.d)(UU, RU, pU, gU, gU.layerWidth, gU.layers, ZU)
              })).catch((UU => {
                console.error(`Failed to build texture array for atlas ${pU}`, UU)
              }))
            }))
          }))
        }(gU, RU.state))
      },
      texture: (UU, RU, gU) => {
        let {
          data: tU,
          sets: pU
        } = gU;
        var EU;
        (VU(UU), tU) && (UU.uvSet = null !== (EU = null === pU || void 0 === pU ? void 0 : pU.coordinatesIndex) && void 0 !== EU ? EU : 0, (0, mU._)(UU.matrix, null !== pU && void 0 !== pU ? pU : {}))
      },
      cube: VU,
      canvas: (UU, RU, gU) => {
        let {
          width: tU,
          height: pU,
          mipmaps: EU,
          samplingMode: PU = oU.h.trilinear,
          hasAlpha: TU = !1,
          wrap: qU = oU.c.clamp
        } = gU;
        const KU = UU.WC().createCanvas(tU, pU),
          cU = new oU.j("2d", {
            kind: "canvas",
            width: tU,
            height: pU,
            canvas: KU
          }, {
            samplingMode: PU,
            wrapU: qU,
            wrapV: qU,
            noMipmap: !EU,
            invertY: !0
          });
        return cU.hasAlpha = TU, VU(cU), cU
      }
    };
    var XU = gU(36945),
      vU = gU(36624);
    class dU {
      constructor(UU, RU, gU) {
        this.engine = UU, this.clearColor = RU, this.ambientColor = gU, this.onBeforeRenderObservable = new vU.b, this.onBeforeCameraRenderObservable = new vU.b, this.onAfterRenderObservable = new vU.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.vI = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      WC() {
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
      addPendingData(UU) {
        this.pending.push(UU)
      }
      removePendingData(UU) {
        const RU = this.pending.indexOf(UU); - 1 !== RU && this.pending.splice(RU, 1)
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

    function HU() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const SU = {
      xtU: HU,
      WtU: (UU, RU) => {
        const gU = new dU(UU.engine, tU.c.FromArray(RU.clearColor), tU.Color3.FromArray(RU.ambientColor));
        (0, PU.d)(rU, gU), UU.Zh = gU,
          function(UU, RU) {
            const gU = Object.assign((0, XU.m)(UU, "camera"), {
              layerMask: 268435455
            });
            UU.model.nodes.setWorldSource(gU.row, UU.model.view.worldMatrix), UU.camera = RU.activeCamera = gU
          }(UU, gU), (0, pU.g)(UU, ((UU, RU, gU) => (0, EU.i)(UU, RU, gU, TU.c)))
      },
      CtU: () => {},
      setBabylonFog: () => {},
      mtU: HU,
      wtU: () => {},
      linesFromArrays: (UU, RU, gU) => (0, EU.i)(UU, RU, gU, qU),
      ah: () => {},
      JtU: HU
    };
    var sU = gU(41073),
      yU = gU(41080);
    class kU {
      constructor(UU) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const RU = new Promise((UU => {
          this.refused = UU
        }));
        this.deviceLost = Promise.race([UU, RU])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(UU) {
        (function(UU) {
          const {
            name: RU,
            message: gU
          } = null !== UU && void 0 !== UU ? UU : {};
          return "InvalidStateError" === RU && "string" === typeof gU && gU.startsWith("GPUDevice.")
        })(UU) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: UU.message,
          framesRefused: !0
        }))
      }
    }
    class FU {
      constructor(UU) {
        this.resources = UU, this.matrixKey = {
          hG: 0
        }, this.attributesKey = {
          hG: 0
        }, this.inputs = Object.create(null);
        for (let RU = 0; RU < 4; RU++) this.inputs[`world${RU}`] = new zU(this.matrixKey, 16 * RU, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(UU, RU) {
        this.resources.vertexBufferCreated(this.matrixKey, UU, !0), RU && this.resources.vertexBufferCreated(this.attributesKey, RU, !0)
      }
    }
    class iU extends FU {
      constructor(UU, RU, gU) {
        super(UU), this.mesh = RU, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const tU = this.inputs;
        let pU = 0;
        for (const {
            size: PU
          }
          of gU) pU += PU;
        for (const {
            name: PU,
            offset: TU,
            size: qU,
            type: KU
          }
          of gU) tU[PU] = new zU(this.attributesKey, 4 * TU, 4 * pU, qU, !0, KU);
        this.rowStride = pU, UU.LO.set(RU, this);
        const EU = RU.isVerticesDataPresent;
        RU.isVerticesDataPresent = (UU, gU) => UU in tU || EU.call(RU, UU, gU)
      }
      attach(UU, RU) {
        this.matrices = UU, this.attributes = RU, this.bind(UU, RU), this.mirror(UU, UU.length, UU.length / 16)
      }
      E_(UU) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, UU ? 64 * UU : void 0)
      }
      P_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(UU, RU) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * UU, 16 * RU)
      }
      attributeRows(UU, RU) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, UU * this.rowStride, RU * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(UU, RU, gU) {
        const tU = this.mesh._thinInstanceDataStorage;
        tU.matrixData = UU, tU.matrixBufferSize = RU, tU.worldMatrices = null, tU.instancesCount = gU
      }
    }
    class AU extends FU {
      constructor(UU, RU, gU) {
        var tU, pU, EU, PU;
        super(UU), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (tU = null === gU || void 0 === gU ? void 0 : gU.interleavedKinds) && void 0 !== tU ? tU : null, this.offsets = null !== (pU = null === gU || void 0 === gU ? void 0 : gU.interleavedOffsets) && void 0 !== pU ? pU : [], this.rowStride = null !== (EU = null === gU || void 0 === gU ? void 0 : gU.interleavedRowStride) && void 0 !== EU ? EU : 0, null === (PU = this.layout) || void 0 === PU || PU.forEach(((UU, RU) => {
          this.inputs[UU] = new zU(this.attributesKey, 4 * this.offsets[RU], 4 * this.rowStride, gU.strides[UU])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), UU.batchUploads.set(RU, this), RU.HZ.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(UU) {
        const RU = this.packedBatch;
        return RU.renderSelf ? 0 === UU ? this.packedSource : RU.instances[UU - 1] : RU.instances[UU]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(UU, RU, gU, tU) {
        const pU = (RU.renderSelf ? 1 : 0) + RU.rows.length;
        if (this.frame = tU, this.count = pU, this.packedSource = UU, this.packedBatch = RU, 0 === pU) return;
        if (UU.getWorldMatrix(), 16 * pU > this.matrices.length) {
          let UU = this.matrices.length / 16;
          for (; UU < pU;) UU *= 2;
          this.matrices = new Float32Array(16 * UU), this.attributes &&= new Float32Array(UU * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let EU = 0;
        RU.renderSelf && this.packRow(EU++, UU, RU.row, gU);
        for (let PU = 0; PU < RU.rows.length; PU++) this.packRow(EU++, RU.instances[PU], RU.rows[PU], gU);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * pU), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, pU * this.rowStride)
      }
      packRow(UU, RU, gU, tU) {
        const pU = this.matrices;
        if (gU < 0) pU.set(RU.getWorldMatrix().m, 16 * UU);
        else
          for (let KU = 0; KU < 16; KU++) pU[16 * UU + KU] = tU[16 * gU + KU];
        const EU = this.attributes;
        if (!EU) return;
        const PU = RU.kY,
          TU = this.layout;
        for (let KU = 0; KU < TU.length; KU++) {
          var qU;
          const RU = null !== (qU = PU[TU[KU]]) && void 0 !== qU ? qU : 0,
            gU = UU * this.rowStride + this.offsets[KU];
          RU.toArray ? RU.toArray(EU, gU) : RU.copyToArray ? RU.copyToArray(EU, gU) : EU[gU] = RU
        }
      }
    }
    class zU {
      constructor(UU, RU, gU, tU) {
        let pU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = UU, this.byteOffset = RU, this.byteStride = gU, this.size = tU, this.instanced = pU, this.type = EU, this.normalized = PU
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
    const MU = "CANVAS_ALPHA_ONE",
      DU = `override ${MU}: bool = false;`,
      LU = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function NU(UU, RU, gU) {
      var tU;
      let pU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const EU = null !== (tU = RU._colorFormat) && void 0 !== tU ? tU : "bgra8unorm",
        PU = pU ? 15 : 0;
      return gU ? {
        ...UU,
        targets: [{
          format: EU,
          blend: {
            color: gU,
            alpha: LU
          },
          writeMask: PU
        }]
      } : {
        ...UU,
        constants: {
          ...UU.constants,
          [MU]: 1
        },
        targets: [{
          format: EU,
          writeMask: PU
        }]
      }
    }

    function lU(UU, RU) {
      UU._renderables.push(RU)
    }

    function OU(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = UU._frameGraph) || void 0 === gU ? void 0 : gU._tasks) && void 0 !== RU ? RU : []
    }

    function UR(UU) {
      return UU._currentEncoder
    }

    function RR(UU) {
      return UU.createBindGroupLayout({
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
    const gR = "greater-equal",
      tR = 2e5,
      pR = 1e5,
      ER = new WeakMap;

    function PR(UU, RU) {
      let gU = ER.get(UU);
      if (!gU) {
        gU = {
          module: UU.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, ER.set(UU, gU)
      }
      const tU = `${RU._colorFormat}|${RU._depthStencilFormat}|${RU._sampleCount}`;
      let pU = gU.pipelines.get(tU);
      if (!pU) {
        var EU;
        const {
          module: PU
        } = gU;
        pU = UU.createRenderPipeline({
          label: `placeholder ${tU}`,
          layout: UU.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: PU,
            entryPoint: "v"
          },
          fragment: {
            module: PU,
            entryPoint: "f",
            targets: [{
              format: null !== (EU = RU._colorFormat) && void 0 !== EU ? EU : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: RU._depthStencilFormat ? {
            format: RU._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: RU._sampleCount
          }
        }), gU.pipelines.set(tU, pU)
      }
      return pU
    }

    function TR(UU, RU, gU) {
      const tU = RU.eye,
        pU = RU.viewMatrix;
      UU[0] = tU[0] + pU[2] * gU, UU[1] = tU[1] + pU[6] * gU, UU[2] = tU[2] + pU[10] * gU
    }
    var qR = gU(37489),
      KR = gU(40981),
      cR = gU(36683);
    const GR = Math.PI,
      jR = GR / 1.95,
      uR = [5e-4 / 94, 125e-7, 5e-4 / 18],
      CR = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((UU => {
        let [RU, gU] = UU;
        return .434 * GR * Math.pow(2 * GR / RU, 2) * gU
      }));

    function hR(UU, RU, gU) {
      const {
        up: tU,
        mieDirectionalG: pU
      } = UU, EU = 1 - WR(1 - Math.exp(RU[1] / 45e4), 0, 1), PU = UU.rayleigh - (1 - EU), TU = Math.hypot(RU[0], RU[1], RU[2]), qU = TU > 0 ? 1 / TU : 0, KU = gU.sunDir;
      for (let uU = 0; uU < 3; uU++) KU[uU] = RU[uU] * qU;
      const cU = KU[0] * tU[0] + KU[1] * tU[1] + KU[2] * tU[2],
        GU = 1e3 * Math.max(0, 1 - Math.exp(-(jR - Math.acos(WR(cU, -1, 1))) / 1.5));
      gU.sunE = GU;
      const jU = .2 * UU.turbidity * 1e-17 * UU.mieCoefficient;
      for (let uU = 0; uU < 3; uU++) {
        const UU = uR[uU] * PU,
          RU = CR[uU] * jU,
          tU = GU / (UU + RU);
        gU.inScatterR[uU] = UU * tU, gU.inScatterM[uU] = RU * tU, gU.extinctionBeta[uU] = 8400 * UU + 1250 * RU
      }
      return gU.sunsetMix = WR(Math.pow(1 - cU, 5), 0, 1), gU.sunDiscE = 19e3 * GU, gU.mieScale = (1 - pU * pU) / (4 * GR), gU.mieBase = 1 + pU * pU, gU.mieSlope = 2 * pU, gU
    }
    const QR = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const eR = 1 / function(UU) {
      const {
        A: RU,
        B: gU,
        C: tU,
        D: pU,
        E: EU,
        F: PU
      } = QR;
      return (UU * (RU * UU + tU * gU) + pU * EU) / (UU * (RU * UU + gU) + pU * PU) - EU / PU
    }(1e3);

    function WR(UU, RU, gU) {
      return Math.min(Math.max(UU, RU), gU)
    }
    const fR = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function xR(UU, RU) {
      const gU = new Map(RU),
        tU = [],
        pU = [],
        EU = () => 0 === pU.length || pU[pU.length - 1].active;
      let PU = null;
      const TU = () => {
        const UU = [...gU].filter((UU => {
            let [, RU] = UU;
            return !0 !== RU
          })),
          RU = UU.map((UU => {
            let [RU] = UU;
            return RU
          })).join("|");
        PU = UU.length ? new RegExp(`\\b(${RU})\\b`, "g") : null
      };
      TU();
      for (const qU of UU.split("\n")) {
        const UU = fR.exec(qU);
        if (!UU) {
          EU() && tU.push(PU ? mR(qU, PU, gU) : qU);
          continue
        }
        const RU = UU[1],
          KU = UU[2].trim();
        if ("ifdef" === RU || "ifndef" === RU || "if" === RU) {
          const UU = EU(),
            tU = "if" === RU ? IR(KU, gU) : gU.has(KU) === ("ifdef" === RU);
          pU.push({
            active: UU && tU,
            parentActive: UU,
            taken: tU
          })
        } else if ("elif" === RU || "else" === RU) {
          const UU = pU[pU.length - 1];
          if (!UU) throw new Error(`#${RU} without #if`);
          const tU = !UU.taken && ("else" === RU || IR(KU, gU));
          UU.active = UU.parentActive && tU, UU.taken = UU.taken || tU
        } else if ("endif" === RU) {
          if (!pU.pop()) throw new Error("#endif without #if")
        } else if (EU()) {
          const [UU, ...tU] = KU.split(/\s+/);
          "undef" === RU ? gU.delete(UU) : gU.set(UU, !tU.length || tU.join(" ")), TU()
        }
      }
      if (pU.length) throw new Error("Unterminated #if");
      return tU.join("\n")
    }

    function mR(UU, RU, gU) {
      return UU.replace(RU, (UU => {
        const RU = gU.get(UU);
        return "string" === typeof RU ? RU : UU
      }))
    }

    function IR(UU, RU) {
      var gU;
      const tU = null !== (gU = UU.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== gU ? gU : [];
      let pU = 0;
      const EU = () => tU[pU],
        PU = () => tU[pU++],
        TU = UU => {
          const gU = /^\d/.test(UU) ? UU : RU.get(UU);
          return "string" === typeof gU ? parseInt(gU) : Number.NaN
        },
        qU = () => {
          const UU = PU();
          if ("!" === UU) return !qU();
          if ("(" === UU) {
            const UU = cU();
            return PU(), UU
          }
          if ("defined" === UU) {
            const UU = "(" === EU();
            UU && PU();
            const gU = PU();
            return UU && PU(), RU.has(gU)
          }
          const gU = EU();
          if ("==" === gU || "!=" === gU || ">" === gU || "<" === gU || ">=" === gU || "<=" === gU) {
            PU();
            const RU = TU(UU),
              tU = TU(PU());
            if (Number.isNaN(RU) || Number.isNaN(tU)) return !1;
            switch (gU) {
              case "==":
                return RU === tU;
              case "!=":
                return RU !== tU;
              case ">":
                return RU > tU;
              case "<":
                return RU < tU;
              case ">=":
                return RU >= tU;
              default:
                return RU <= tU
            }
          }
          return RU.has(UU)
        },
        KU = () => {
          let UU = qU();
          for (;
            "&&" === EU();) {
            PU();
            const RU = qU();
            UU = UU && RU
          }
          return UU
        },
        cU = () => {
          let UU = KU();
          for (;
            "||" === EU();) {
            PU();
            const RU = KU();
            UU = UU || RU
          }
          return UU
        },
        GU = cU();
      if (pU !== tU.length) throw new Error(`Cannot evaluate #if ${UU}`);
      return GU
    }
    var JR = gU(36681),
      wR = gU(37033),
      nR = gU(37035),
      bR = gU(40270),
      oR = gU(38306);
    const ZR = 32,
      aR = [10, 3, 10],
      YR = [21, 7, 21],
      BR = YR[0] * YR[1] * YR[2],
      VR = 0,
      rR = 1,
      XR = 2,
      vR = 3,
      dR = 64,
      HR = 512,
      SR = 4 * BR,
      sR = 1536,
      yR = SR + BR * sR,
      kR = 1073741824,
      FR = yR + 1;

    function iR(UU, RU) {
      const gU = UU % RU;
      return gU < 0 ? gU + RU : gU
    }

    function AR(UU, RU, gU) {
      return tU = iR(UU, YR[0]), pU = iR(RU, YR[1]), EU = iR(gU, YR[2]), tU + YR[0] * (pU + YR[1] * EU);
      var tU, pU, EU
    }

    function zR(UU, RU, gU) {
      return UU + 8 * (RU + 8 * gU)
    }

    function MR(UU, RU, gU) {
      return UU + 4 * (RU + 4 * gU)
    }
    const DR = 65535,
      LR = 0,
      NR = 1,
      lR = 2,
      OR = 3;

    function Ug(UU) {
      return Math.ceil(UU * UU / 32)
    }
    const Rg = 8192,
      gg = 1 << 18,
      tg = 65536,
      pg = 294912,
      Eg = 128,
      Pg = 4096,
      Tg = 16,
      qg = 16385,
      Kg = 81921,
      cg = 147457,
      Gg = 4194304;
    const jg = [0, 0, 0],
      ug = [0, 0, 0];

    function Cg(UU, RU, gU, tU) {
      ! function(UU, RU, gU) {
        const [tU, pU, EU] = [UU[0], UU[1], UU[2]];
        let PU, TU, qU;
        Math.abs(pU) < .99 ? (PU = EU, TU = 0, qU = -tU) : (PU = -pU, TU = tU, qU = 0);
        const KU = Math.hypot(PU, TU, qU);
        RU[0] = PU / KU, RU[1] = TU / KU, RU[2] = qU / KU, gU[0] = pU * RU[2] - EU * RU[1], gU[1] = EU * RU[0] - tU * RU[2], gU[2] = tU * RU[1] - pU * RU[0]
      }(tU, jg, ug);
      const pU = 1 / 32;
      for (const [EU, PU] of [
          [0, jg],
          [4, ug]
        ]) {
        for (let gU = 0; gU < 3; gU++) UU[RU + EU + gU] = PU[gU] * pU;
        UU[RU + EU + 3] = -(PU[0] * gU[0] + PU[1] * gU[1] + PU[2] * gU[2]) * pU
      }
    }
    class hg {
      constructor() {
        this.words = new Uint32Array(cg), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      pu(UU, RU) {
        this.parts = 0, this.refs = 0, this.view = UU, this.viewAt = RU;
        const gU = UU[RU + 1] * UU[RU + 6] - UU[RU + 2] * UU[RU + 5],
          tU = UU[RU + 2] * UU[RU + 4] - UU[RU] * UU[RU + 6],
          pU = UU[RU] * UU[RU + 5] - UU[RU + 1] * UU[RU + 4],
          EU = Math.hypot(gU, tU, pU) || 1;
        this.light[0] = gU / EU, this.light[1] = tU / EU, this.light[2] = pU / EU
      }
      add(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= Pg || ! function(UU, RU, gU) {
            const tU = UU[RU],
              pU = UU[RU + 1],
              EU = UU[RU + 2],
              PU = UU[RU + 3],
              TU = UU[RU + 4],
              qU = UU[RU + 5],
              KU = UU[RU + 6],
              cU = UU[RU + 7],
              GU = UU[RU + 8],
              jU = UU[RU + 9],
              uU = UU[RU + 10],
              CU = UU[RU + 11],
              hU = UU[RU + 12],
              QU = UU[RU + 13],
              eU = UU[RU + 14],
              WU = UU[RU + 15],
              fU = tU * qU - pU * TU,
              xU = tU * KU - EU * TU,
              mU = tU * cU - PU * TU,
              IU = pU * KU - EU * qU,
              JU = pU * cU - PU * qU,
              wU = EU * cU - PU * KU,
              nU = GU * QU - jU * hU,
              bU = GU * eU - uU * hU,
              oU = GU * WU - CU * hU,
              ZU = jU * eU - uU * QU,
              aU = jU * WU - CU * QU,
              YU = uU * WU - CU * eU,
              BU = fU * YU - xU * aU + mU * ZU + IU * oU - JU * bU + wU * nU;
            if (!(Math.abs(BU) > 1e-12)) return !1;
            const VU = 1 / BU;
            return gU[0] = (qU * YU - KU * aU + cU * ZU) * VU, gU[1] = (EU * aU - pU * YU - PU * ZU) * VU, gU[2] = (QU * wU - eU * JU + WU * IU) * VU, gU[3] = (uU * JU - jU * wU - CU * IU) * VU, gU[4] = (KU * oU - TU * YU - cU * bU) * VU, gU[5] = (tU * YU - EU * oU + PU * bU) * VU, gU[6] = (eU * mU - hU * wU - WU * xU) * VU, gU[7] = (GU * wU - uU * mU + CU * xU) * VU, gU[8] = (TU * aU - qU * oU + cU * nU) * VU, gU[9] = (pU * oU - tU * aU - PU * nU) * VU, gU[10] = (hU * JU - QU * mU + WU * fU) * VU, gU[11] = (jU * mU - GU * JU - CU * fU) * VU, gU[12] = (qU * bU - TU * ZU - KU * nU) * VU, gU[13] = (tU * ZU - pU * bU + EU * nU) * VU, gU[14] = (QU * xU - hU * IU - eU * fU) * VU, gU[15] = (GU * IU - jU * xU + uU * fU) * VU, !0
          }(RU, gU, this.inverse)) return;
        const {
          view: tU,
          viewAt: pU
        } = this, EU = gU;
        let PU = 1 / 0,
          TU = 1 / 0,
          qU = -1 / 0,
          KU = -1 / 0,
          cU = -1 / 0;
        const [GU, jU, uU] = this.light;
        for (let mU = 0; mU < 8; mU++) {
          const gU = 1 & mU ? UU.hi[0] : UU.lo[0],
            CU = 2 & mU ? UU.hi[1] : UU.lo[1],
            hU = 4 & mU ? UU.hi[2] : UU.lo[2],
            QU = gU * RU[EU] + CU * RU[EU + 4] + hU * RU[EU + 8] + RU[EU + 12],
            eU = gU * RU[EU + 1] + CU * RU[EU + 5] + hU * RU[EU + 9] + RU[EU + 13],
            WU = gU * RU[EU + 2] + CU * RU[EU + 6] + hU * RU[EU + 10] + RU[EU + 14],
            fU = tU[pU] * QU + tU[pU + 1] * eU + tU[pU + 2] * WU + tU[pU + 3],
            xU = tU[pU + 4] * QU + tU[pU + 5] * eU + tU[pU + 6] * WU + tU[pU + 7];
          PU = Math.min(PU, fU), TU = Math.min(TU, xU), qU = Math.max(qU, fU), KU = Math.max(KU, xU), cU = Math.max(cU, GU * QU + jU * eU + uU * WU)
        }
        if (qU < -1 || KU < -1 || PU >= 1 || TU >= 1) return;
        const CU = this.parts++,
          hU = this.rects;
        hU[4 * CU] = Qg(PU), hU[4 * CU + 1] = Qg(TU), hU[4 * CU + 2] = Qg(qU), hU[4 * CU + 3] = Qg(KU);
        const QU = this.inverse,
          {
            cell: eU,
            dims: WU,
            lo: fU
          } = UU,
          xU = Kg + CU * Tg;
        for (let mU = 0; mU < 3; mU++) this.floats[xU + 4 * mU] = QU[mU] / eU, this.floats[xU + 4 * mU + 1] = QU[4 + mU] / eU, this.floats[xU + 4 * mU + 2] = QU[8 + mU] / eU, this.floats[xU + 4 * mU + 3] = (QU[12 + mU] - fU[mU]) / eU;
        this.words[xU + 12] = UU.at, this.floats[xU + 13] = cU + .001 * (1 + Math.abs(cU)), this.words[xU + 14] = WU[0] | WU[1] << 8 | WU[2] << 16
      }
      finish() {
        const UU = Eg,
          {
            counts: RU,
            rects: gU,
            words: tU
          } = this;
        RU.fill(0);
        let pU = 0,
          EU = 0;
        for (; EU < this.parts; EU++) {
          const tU = 4 * EU,
            PU = (gU[tU + 2] - gU[tU] + 1) * (gU[tU + 3] - gU[tU + 1] + 1);
          if (pU + PU > 65536) break;
          pU += PU;
          for (let pU = gU[tU + 1]; pU <= gU[tU + 3]; pU++)
            for (let EU = gU[tU]; EU <= gU[tU + 2]; EU++) RU[pU * UU + EU]++
        }
        let PU = 0;
        for (let qU = 0; qU < 16384; qU++) tU[qU] = PU, PU += RU[qU], RU[qU] = tU[qU];
        tU[16384] = PU;
        for (let qU = 0; qU < EU; qU++) {
          const pU = 4 * qU;
          for (let EU = gU[pU + 1]; EU <= gU[pU + 3]; EU++)
            for (let PU = gU[pU]; PU <= gU[pU + 2]; PU++) tU[qg + RU[EU * UU + PU]++] = qU
        }
        const TU = this.floats;
        for (let qU = 0; qU < 16384; qU++) {
          const UU = qg + tU[qU],
            RU = UU + Math.min(tU[qU + 1] - tU[qU], 64);
          for (let gU = UU + 1; gU < RU; gU++) {
            const RU = tU[gU],
              pU = TU[81934 + RU * Tg];
            let EU = gU - 1;
            for (; EU >= UU && TU[81934 + tU[EU] * Tg] < pU; EU--) tU[EU + 1] = tU[EU];
            tU[EU + 1] = RU
          }
        }
        this.refs = pU
      }
    }

    function Qg(UU) {
      return Math.min(127, Math.max(0, Math.floor((.5 * UU + .5) * Eg)))
    }

    function eg(UU, RU, gU, tU, pU) {
      for (let EU = 0; EU < 4; EU++)
        for (let PU = 0; PU < 4; PU++) pU[4 * EU + PU] = UU[RU + 4 * EU] * gU[tU + PU] + UU[RU + 4 * EU + 1] * gU[tU + 4 + PU] + UU[RU + 4 * EU + 2] * gU[tU + 8 + PU] + UU[RU + 4 * EU + 3] * gU[tU + 12 + PU]
    }

    function Wg(UU, RU, gU, tU, pU) {
      const EU = UU[0] - RU,
        PU = UU[1] - gU,
        TU = UU[2] - tU,
        qU = UU[3] - RU,
        KU = UU[4] - gU,
        cU = UU[5] - tU,
        GU = UU[6] - RU,
        jU = UU[7] - gU,
        uU = UU[8] - tU;
      if (Math.min(EU, qU, GU) > pU || Math.max(EU, qU, GU) < -pU) return !1;
      if (Math.min(PU, KU, jU) > pU || Math.max(PU, KU, jU) < -pU) return !1;
      if (Math.min(TU, cU, uU) > pU || Math.max(TU, cU, uU) < -pU) return !1;
      const CU = qU - EU,
        hU = KU - PU,
        QU = cU - TU,
        eU = GU - qU,
        WU = jU - KU,
        fU = uU - cU,
        xU = hU * fU - QU * WU,
        mU = QU * eU - CU * fU,
        IU = CU * WU - hU * eU;
      if (Math.abs(xU * EU + mU * PU + IU * TU) > pU * (Math.abs(xU) + Math.abs(mU) + Math.abs(IU))) return !1;
      const JU = [CU, hU, QU, eU, WU, fU, EU - GU, PU - jU, TU - uU];
      for (let wU = 0; wU < 3; wU++) {
        const UU = JU[3 * wU],
          RU = JU[3 * wU + 1],
          gU = JU[3 * wU + 2];
        for (let tU = 0; tU < 3; tU++) {
          const CU = 0 === tU ? 0 : 1 === tU ? gU : -RU,
            hU = 0 === tU ? -gU : 1 === tU ? 0 : UU,
            QU = 0 === tU ? RU : 1 === tU ? -UU : 0,
            eU = CU * EU + hU * PU + QU * TU,
            WU = CU * qU + hU * KU + QU * cU,
            fU = CU * GU + hU * jU + QU * uU,
            xU = pU * (Math.abs(CU) + Math.abs(hU) + Math.abs(QU));
          if (Math.min(eU, WU, fU) > xU || Math.max(eU, WU, fU) < -xU) return !1
        }
      }
      return !0
    }
    const fg = new Float32Array(1);
    new Uint32Array(fg.buffer);
    var xg = gU(38311);

    function mg(UU) {
      const [RU, gU, tU] = xg.n;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${UU.group}) @binding(${UU.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${RU-1}, ${gU-1}, ${tU-1});\n}\n`
    }

    function Ig(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [pU, EU, PU] = YR, [TU, qU, KU] = aR, cU = Math.log2(ZR), GU = tU ? "var<private> bloxdSpCrossed: bool;\n" : "", jU = tU ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${UU.group}) @binding(${UU.Wj}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${UU.group}) @binding(${UU.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${gU?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${GU}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${NR}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${lR}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${gU?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${OR}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${pU}, ${EU}, ${PU});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${pU} * (s.y + ${EU} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${TU}, ${qU}, ${KU}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${cU}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${vR}u) {\n\t\treturn named && state == ${XR}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${SR}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${yR}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${RU?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${RU?`\t\tif (exits && step > 0 && step % ${ng} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${cU}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${VR}u || kind == ${rR}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${XR}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${SR}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${jU}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Jg = {
      group: 0,
      uniform: 0,
      Wj: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function wg() {
      const UU = Jg;
      return `${mg(UU)}${Ig(UU,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${xg.e}>,\n}\n@group(${UU.group}) @binding(${UU.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${UU.group}) @binding(${UU.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${xg.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${xg.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${xg.i}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const ng = 2;
    const bg = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function og(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const tU = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${RU.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        pU = "trace" === gU || "lit" === gU,
        EU = "maskEdge" === gU ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        PU = pU ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${RU.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${RU.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===gU?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${EU};\n`;
      return `${tU}${UU.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${pU?function(){const[UU,RU,gU]=xg.n;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${UU}.0, ${RU}.0, ${gU}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${PU}}\n`:""}${UU.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${RU.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${RU.renderOffset});\n}\n`:""}`
    }
    const Zg = "bloxdSpOwnTexture";

    function ag(UU) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${UU.texture}) - 1u)))`
    }
    const Yg = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${qR.f.map((UU=>{let[RU,gU]=UU;return`\tbloxdSpOut.${RU} = (bloxdSpWord & ${gU}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Bg(UU) {
      return `bloxdSpFlags(${UU})`
    }
    const Vg = `${bR.i}.eyePosition`;

    function rg(UU, RU, gU, tU, pU) {
      const EU = UU.indexOf(RU);
      if (EU < 0 || UU.indexOf(RU, EU + 1) >= 0) throw new Error(`Lite's ${pU} program changed at the shader pack ${tU} hook: ${EU<0?"no":"more than one"} anchor (lite/${pU}ShaderPack.ts)`);
      return UU.slice(0, EU) + gU + UU.slice(EU + RU.length)
    }

    function Xg(UU) {
      return UU.sunShadow || UU.airShadow
    }

    function vg(UU, RU) {
      return RU && Xg(UU)
    }
    const dg = {
      group: bR.d,
      ...bR.o
    };

    function Hg(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!Xg(UU)) return "";
      if (RU) {
        const RU = dg,
          pU = "trace" === gU || "lit" === gU;
        let EU = "";
        UU.sunShadow && (EU = pU ? `${Ig(RU,!0,"lit"===gU)}${tU=RU,`@group(${tU.group}) @binding(${tU.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${tU.group}) @binding(${tU.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(UU, RU, gU) {
          const tU = `@group(${UU}) @binding(${RU}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return gU ? `${tU}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${bg}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((UU=>`\t{\n\t\tlet o = vec2i(${UU});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : tU
        }(RU.group, bR.r, "maskEdge" === gU));
        const PU = {
          shadowDirection: `${bR.i}.shadowDirection`,
          renderOffset: `${bR.i}.renderOffset`,
          eyePosition: `${bR.i}.eyePosition`
        };
        return `${mg(RU)}${EU}${function(UU){const[RU,gU,tU]=xg.n;return`@group(${UU.group}) @binding(${UU.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${UU.group}) @binding(${UU.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${RU}.0, ${gU}.0, ${tU}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(RU)}${og(UU,PU,gU)}`
      }
      var tU;
      return `${UU.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${UU.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Sg(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!RU) return "";
      const EU = (PU = "fragmentInputs.vPositionW", TU = UU.sunShadow ? {
        normal: gU,
        flags: tU
      } : null, `\n\tbloxdSpShadowPosition = ${PU};\n${TU?`\tbloxdSpShadowNormal = normalize(${TU.normal});\n\tbloxdSpShadowEmissive = (${TU.flags} & ${qR.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${TU.flags} & ${qR.g}u) != 0u;\n`:""}`);
      var PU, TU;
      return UU.sunShadow && ("mask" === pU || "maskEdge" === pU) ? `${EU}${qU="fragmentInputs.position",KU="maskEdge"===pU,`\n\tbloxdSpShadowPixel = vec2i(${qU}.xy);\n${KU?`\tbloxdSpShadowZ = ${qU}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${qU}.z), dpdy(${qU}.z));\n`:""}`}` : EU;
      var qU, KU
    }
    const sg = "bloxdSpTextureRotation",
      yg = "bloxdSpTextureLayers",
      kg = `@group(${bR.d}) @binding(${bR.s}) var<storage, read> ${yg}: array<u32>;\n`;

    function Fg(UU) {
      return `\tvertexOutputs.vPackTexture = ${yg}[min(u32(${UU}), arrayLength(&${yg}) - 1u)];\n`
    }

    function ig(UU) {
      return void 0 !== UU.uv
    }

    function Ag(UU) {
      if (!UU) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (ig(UU)) return function(UU) {
        const {
          texture: RU,
          cells: gU,
          layers: tU
        } = UU, pU = `textureDimensions(${RU}, bloxdSpLevel)`, EU = gU ? `max(vec2u(vec2f(${pU}) / ${gU}), vec2u(1u))` : pU, PU = gU ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${EU};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${gU}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${gU}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${RU}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${pU} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${EU};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${RU}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let TU;
        if (gU)
          if (1 === tU.length) TU = `\treturn bloxdSpOwnTexel(${tU[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const UU = tU.length - 1;
            TU = `\tvar bloxdSpColour = bloxdSpOwnTexel(${tU[UU]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let RU = UU - 1; RU >= 0; RU--) TU += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${tU[RU]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            TU += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else TU = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${UU.id?`var<private> ${Zg}: u32;\n`:""}${PU}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${ag(UU)};\n\treturn ${EU};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${UU.id?Zg:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${ag(UU)};\n${TU}}\n`
      }(UU);
      const RU = UU,
        gU = UU => {
          const gU = UU > 0 ? `bloxdSpLayer - ${RU.layers*UU}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${UU}, ${RU.sampler}, bloxdSpTurned, ${gU}, round(bloxdSpMipLevel));`
        };
      let tU = "";
      for (let EU = 0; EU < RU.count - 1; EU++) tU += `\tif (bloxdSpLayer < ${RU.layers*(EU+1)}u) {\n\t\t${gU(EU)}\n\t}\n`;
      const pU = RU.frame ? `${RU.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${sg}: u32;\n${kg}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${sg} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${sg} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${sg} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${pU}${tU}\t${gU(RU.count-1)}\n}\n`
    }

    function zg(UU, RU, gU) {
      return !!UU.surface && "bloxdDefaultSurface" !== UU.surface && function(UU, RU) {
        return "liquid" === RU || !UU
      }(RU, gU)
    }

    function Mg(UU, RU) {
      return UU.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${RU.vertexLocalPosition}, ${Bg(RU.vertexFlags)});\n\t\tlet bloxdSpVertex = ${UU.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Dg(UU, RU, gU, tU, pU) {
      if (!UU.surface) return "";
      const EU = (UU, RU) => `\n\tlet bloxdSpTexelUV = ${UU};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${RU}) - 1u));`;
      let PU = "",
        TU = "0u, 0u, vec2f(0.0), 0.0";
      const qU = tU && ig(tU) ? tU : null,
        KU = tU && !ig(tU) ? tU : null;
      if (qU) {
        PU = `${qU.id?`\n\tlet bloxdSpTexture = ${qU.id};\n\t${Zg} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${qU.uv};${EU(function(UU,RU){var gU;return`${null!==(gU=UU.levelUv)&&void 0!==gU?gU:UU.cells?`${RU} / ${UU.cells}`:RU} * vec2f(textureDimensions(${UU.texture}))`}(qU,"bloxdSpUv"),qU.texture)}`, TU = (qU.id ? `${Zg}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else KU && (PU = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${sg} = bloxdSpTexture >> 16u;${EU(`fragmentInputs.vMainUV1 * ${(0,JR.eb)(KU.width)}`,"textureAtlas0")}`, TU = `bloxdSpTexture & 0xffffu, ${sg}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const cU = pU.overlayColour,
        GU = cU ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        jU = "bloxdDefaultSurface" !== UU.surface || cU ? `\n\tbaseColor = vec4f(${GU}, baseColor.a);` : "",
        uU = zg(UU, RU, gU) ? `\n\t${pU.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${PU}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${pU.alpha}, ${pU.enchantTier}, ${pU.enchantColour}, ${pU.enchantSpeed}, ${null!==cU&&void 0!==cU?cU:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${pU.normal}, ${pU.localPosition}, ${Bg(pU.flags)}, ${TU});\n\tlet bloxdSpSurface = ${UU.surface}(bloxdSpSurfaceIn);${jU}${uU}\n`
    }
    const Lg = "bloxdSpLightIn";

    function Ng(UU, RU, gU, tU) {
      if (!UU.light) return "";
      const pU = RU ? `${JR.k}.rgb, ${JR.k}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${JR.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: EU,
          diffuse: PU,
          emissive: TU,
          ambient: qU,
          fogColour: KU,
          fogAlpha: cU,
          normal: GU
        } = tU;
      return `\tvar ${Lg} = BloxdLightIn(vec3f(0.0), ${gU?EU:"0.0"}, ${PU}, ${TU}, ${qU}, ${pU}, ${KU}, ${cU}, fragmentInputs.vPositionW, ${GU}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Lg}.litColour = bloxdLitColour(bloxdSpSurface, ${Lg});\n`
    }

    function lg(UU) {
      return UU.light ? `\n\t{\n\t\tlet bloxdSpLight = ${UU.light}(bloxdSpSurface, ${Lg});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Og = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      Ut = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      Rt = "\treturn color;\n}",
      gt = {
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
    const tt = Object.freeze({});

    function pt(UU) {
      var RU;
      return !(null === (RU = (0, oR.d)(UU)) || void 0 === RU || !RU.sceneDepth)
    }

    function Et(UU) {
      const RU = (0, oR.d)(UU);
      return !!RU && zg(RU.hooks, RU.strict, RU.program)
    }

    function Pt(UU, RU, gU, tU) {
      return rg(UU, RU, gU, tU, "terrain")
    }

    function Tt(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const EU = function(UU) {
          return (0, oR.c)(UU.packVariant, UU.liquid ? "liquid" : "terrain")
        }(UU),
        {
          hooks: PU
        } = EU,
        TU = vg(EU, tU),
        qU = "edge" === pU ? "maskEdge" : "plain" === pU ? "mask" : "trace",
        KU = Mg(PU, gt);
      KU && (RU = Pt(RU, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${KU}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const cU = "atlas" === UU.texture ? {
          count: UU.atlasCount,
          layers: UU.atlasLayers,
          width: UU.lL,
          sampler: "atlasSampler",
          frame: UU.animated ? gU : null
        } : null,
        GU = `${EU.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Sg(EU,TU,gt.normal,gt.flags,qU)}${Dg(PU,EU.strict,EU.program,cU,gt)}`;
      GU && (RU = Pt(RU, Og, `${Og.slice(0,-1)}${GU}`, "surface"));
      const jU = lg(PU);
      return jU && (RU = Pt(RU, Ut, `${Ng(PU,UU.lighting,UU.dirLightCount>0,gt)}${Ut}`, "light input"), RU = Pt(RU, Rt, `${jU.slice(1)}${Rt}`, "light")), `${(0,bR.x)()}${EU.sceneDepth?`@group(${bR.d}) @binding(${bR.n}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Vg};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Hg(EU,TU,qU)}${Ag(cU)}${Yg}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${EU.code}${RU}`
    }
    const qt = IU.d.WGSL;

    function Kt(UU) {
      return void 0 !== UU.packVariant
    }
    const ct = {
        ntU: 0,
        btU: 4,
        ZtU: 8,
        atU: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Gt = ct.aoLevels + 4,
      jt = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      ut = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      Ct = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      ht = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Qt = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      et = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Wt = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      ft = 0,
      xt = 3,
      mt = 4,
      It = 5,
      Jt = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${wR.c}, ${wR.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${wR.c}, ${wR.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      wt = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((UU=>nR.d>>UU&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const nt = {
      HG: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: UU => `animDataPerTex[${UU}]`
    };

    function bt(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nt;
      return `\n\tlet atlasIdxIn = ${UU};\n\tlet animTick = ${gU.HG};\n\tlet animTickStride = ${gU.stride};\n\tlet numAnimTextures = ${gU.count};\n\t${(0,JU.d)(IU.d.WGSL,gU.perTexture)}\n\t${RU}animLayer;\n`
    }

    function ot(UU) {
      const RU = (RU, gU) => {
        const tU = RU > 0 ? `fragmentInputs.texAtlasIndex - ${UU.atlasLayers.toFixed(1)} * ${RU.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${gU?"textureSampleLevel":"textureSample"}(textureAtlas${RU}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${tU}))${gU?", atlasLod":""})`
      };
      if (1 === UU.atlasCount) return `baseColor = ${RU(0,!1)};`;
      let gU = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,JR.eb)(UU.lL)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let tU = 0; tU < UU.atlasCount; tU++) {
        const pU = UU.atlasLayers * (tU + 1) - .5;
        gU += `${tU>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,JR.eb)(pU)}) {\n\t\tbaseColor = ${RU(tU,!0)};\n\t}`
      }
      return gU
    }

    function Zt(UU) {
      return `terrain-${UU.texture}${"atlas"===UU.texture?UU.atlasCount:""}${UU.animated?"-anim":""}${UU.alphaTest?"-test":""}${UU.lighting?"-lit":""}-dir${UU.dirLightCount}${UU.packed?"-packed":""}${Kt(UU)?`-sp${UU.packVariant}`:""}${UU.liquid?"-liquid":""}${UU.resting?"-rest":""}`
    }

    function Yt(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const tU = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const gU = "none" !== UU.texture,
          tU = "atlas" === UU.texture,
          pU = UU.dirLightCount > 0,
          EU = Kt(UU);
        if (UU.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${UU.dirLightCount}`);
        let PU = 1,
          TU = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (tU) {
          UU.animated && (TU += `@group(2) @binding(${PU++}) var<storage, read> animDataPerTex: array<f32>;\n`), TU += `@group(2) @binding(${PU++}) var atlasSampler: sampler;\n`;
          for (let RU = 0; RU < UU.atlasCount; RU++) TU += `@group(2) @binding(${PU++}) var textureAtlas${RU}: texture_2d_array<f32>;\n`
        } else "single" === UU.texture && (TU += `@group(2) @binding(${PU++}) var diffuseSamplerSampler: sampler;\n`, TU += `@group(2) @binding(${PU++}) var diffuseSampler: texture_2d<f32>;\n`);
        const qU = function(UU) {
            const RU = Wt,
              gU = "none" !== UU.texture,
              tU = "atlas" === UU.texture,
              pU = Kt(UU);
            return UU.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${gU?"uv: vec2f,":""}\n\t${tU?"texAtlasIndices: f32,":""}\n\t${UU.lighting?"aPackedLightLevels: f32,":""}\n\t${pU?"blockFlagWords: vec2u,":""}\n}\n${Jt}\n${wt}\n${"single"===UU.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${gU?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===UU.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${tU?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${UU.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${pU?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${RU.position}) position: vec3f,\n\t@location(${RU.normal}) normal: vec4f,\n\t@location(${RU.color}) color: vec4f,\n\t${gU?`@location(${RU.uv}) uv: vec2f,`:""}\n\t${UU.lighting?`@location(${RU.packedLight}) aPackedLightLevels: f32,`:""}\n\t${pU?`@location(${RU.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(UU),
          KU = `\n${ht}\n${ut}\n${Ct}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${TU}\n${DU}\n${qU.declarations}\nstruct Varyings {\n\t${"none"===RU?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${UU.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${pU?"@location(5) vTerrainLambert: f32,":""}\n\t${gU?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${tU?"@location(7) texAtlasIndex: f32,":""}\n\t${UU.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${EU?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${EU&&tU?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${UU.resting?"":(0,JR.s)(qt)}\n${et}\n\n@vertex\nfn mainVertex(${qU.parameter}) -> Varyings {\n\t${qU.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${EU?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${qR.e.placed}u;`:""}\n\t${EU&&tU?Fg("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${UU.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${gU?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${tU?function(UU){return UU?bt("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(UU.animated):""}\n\t${"single"===UU.texture&&UU.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,JR.R)(qt)}\n\t${(0,JR.D)(qt,UU.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${UU.resting?"":Qt}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${tU?ot(UU):""}\n\t${"single"===UU.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${gU?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${UU.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${pU?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${MU}));\n\t${Kt(UU)?(0,JR.cb)(IU.d.WGSL):(0,JR.K)(qt)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          cU = new Set;
        UU.lighting && cU.add("BLOXD_LIGHTING");
        pU && cU.add("BLOXD_TERRAIN_DIRECTIONAL");
        return xR(KU, new Map([...cU].map((UU => [UU, !0]))))
      }(UU, gU);
      if (!Kt(UU)) return tU;
      const pU = Tt(UU, tU, bt, RU, gU);
      return "none" === gU ? pU : `${pU}${function(UU){const RU="none"!==UU.texture&&UU.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${UU.resting?"":Qt}\n\t${UU.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${RU&&"atlas"===UU.texture?ot(UU):""}\n\t${RU&&"single"===UU.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${RU?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${qR.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(UU)}`
    }
    const Bt = new Map([
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

    function Vt(UU, RU) {
      const gU = new Map;
      let tU = 0;
      const pU = [],
        EU = [],
        PU = [];
      for (const KU of RU) {
        var TU, qU;
        const RU = null !== (TU = KU.type.trim().split(/\s+/).pop()) && void 0 !== TU ? TU : KU.type,
          cU = Bt.get(RU);
        if (!cU) throw new Error(`Lite: no uniform layout for ${KU.name}: ${KU.type}`);
        const GU = null !== (qU = KU.arraySize) && void 0 !== qU ? qU : 0,
          jU = GU ? 4 : cU.align;
        tU = Math.ceil(tU / jU) * jU;
        const uU = GU ? 4 * Math.ceil(cU.floats / 4) : cU.floats;
        if (gU.set(KU.name, {
            offset: tU,
            floats: cU.floats,
            arraySize: GU,
            stride: uU
          }), GU && cU.floats <= 2) {
          const RU = `${UU}_${PU.length}_strided`;
          EU.push(`struct ${RU} {\n\t@size(16) el: ${cU.wgsl},\n}`), PU.push(KU.name), pU.push(`\t@align(16) ${KU.name}: array<${RU}, ${GU}>,`)
        } else GU ? pU.push(`\t@align(16) ${KU.name}: array<${cU.wgsl}, ${GU}>,`) : pU.push(`\t${KU.name}: ${cU.wgsl},`);
        tU += GU ? uU * GU : cU.floats
      }
      return {
        slots: gU,
        floats: Math.max(4, 4 * Math.ceil(tU / 4)),
        wgsl: `${EU.join("\n")}\nstruct ${UU} {\n${pU.join("\n")}\n}\n`,
        stridedArrays: PU
      }
    }
    const rt = [{
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
      Xt = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      vt = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function dt(UU, RU) {
      return `#if defined(${UU}) && ${UU}DIRECTUV == 0\nvarying v${RU}UV: vec2f;\n#endif`
    }

    function Ht(UU, RU, gU) {
      return `#if defined(${UU}) && ${UU}DIRECTUV == 0\nif (uniforms.v${RU}Infos.x==0.)\n{vertexOutputs.v${RU}UV= (uniforms.${gU}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${RU}UV= (uniforms.${gU}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function St(UU, RU, gU) {
      return `#ifdef ${UU}\n#if ${UU}DIRECTUV == 1\n#define v${RU}UV vMainUV1\n#elif ${UU}DIRECTUV == 2\n#define v${RU}UV vMainUV2\n#else\nvarying v${RU}UV: vec2f;\n#endif\nvar ${gU}SamplerSampler: sampler;\nvar ${gU}Sampler: texture_2d<f32>;\n#endif`
    }
    const st = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      yt = 256,
      kt = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      Ft = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      it = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      At = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      zt = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      Mt = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      Dt = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      Lt = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Ft}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${dt("OPACITY","Opacity")}\n${dt("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${Dt}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${it}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${Ht("OPACITY","Opacity","opacity")}\n${Ht("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${At}\n#define CUSTOM_VERTEX_MAIN_END\n${zt}\n}\n`;
    const Nt = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${St("OPACITY","Opacity","opacity")}\n${St("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${Dt}\n${Mt}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((UU,RU)=>function(UU){const RU=`
    frame.lights[LITE_LIGHT$ {
        UU
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      UU
    }\
    nvar diffuse$ {
      UU
    }: vec4f = $ {
      RU
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      UU
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      RU
    }.vLightData, diffuse$ {
      UU
    }.rgb, $ {
      RU
    }.vLightSpecular.rgb, diffuse$ {
      UU
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(RU))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, lt = /^([gimus]+)!/, Ot = new Set;

    function Up(UU) {
      Ot.has(UU) || (Ot.add(UU), console.warn(`Lite: no place for plugin code at ${UU} in the standard shader: it is left out`))
    }

    function Rp(UU, RU) {
      let gU = UU;
      const tU = new Map;
      for (const [EU, PU] of RU) {
        var pU;
        tU.set(EU, `${null!==(pU=tU.get(EU))&&void 0!==pU?pU:""}${PU}\n`)
      }
      for (const [EU, PU] of tU) {
        if (!EU.startsWith("!")) {
          const UU = `#define ${EU}`;
          if (!gU.includes(UU)) {
            Up(EU);
            continue
          }
          gU = gU.replace(UU, (() => `\n${PU}\n${UU}`));
          continue
        }
        let UU = EU.substring(1),
          RU = "g";
        if (UU.startsWith("!")) RU = "", UU = UU.substring(1);
        else {
          const gU = lt.exec(UU);
          gU && (RU = gU[1], UU = UU.substring(RU.length + 1))
        }
        const tU = new RegExp(UU, RU.includes("g") ? RU : `${RU}g`);
        let pU = tU.exec(gU);
        for (pU || Up(EU); pU;) {
          const UU = pU,
            RU = PU.replace(/\$(\d+)/g, ((RU, gU) => Number(gU) < UU.length ? UU[Number(gU)] : ""));
          gU = gU.substring(0, UU.index) + RU + gU.substring(UU.index + UU[0].length), tU.lastIndex = UU.index + RU.length, pU = tU.exec(gU)
        }
      }
      return gU
    }
    const gp = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      tp = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      pp = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function Ep(UU) {
      const RU = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let gU = UU.replace(gp, ((UU, gU, tU, pU, EU, PU) => ("attribute" === gU ? RU.attributes.push({
        name: EU,
        type: PU
      }) : void 0 === gU ? RU.varyings.push({
        name: EU,
        type: PU,
        interpolation: Tp(PU, tU, pU)
      }) : RU.uniforms.push({
        name: EU,
        type: Pp(PU)
      }), "")));
      return gU = gU.replace(tp, ((UU, gU) => (RU.samplers.add(gU), ""))), gU = gU.replace(pp, ((UU, gU, tU) => (RU.textures.push({
        name: gU,
        type: tU
      }), ""))), RU.body = gU, RU
    }

    function Pp(UU) {
      const RU = UU.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        gU = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(RU);
      if (!gU) throw new Error(`Lite: unsupported uniform type ${UU}`);
      return gU
    }

    function Tp(UU, RU, gU) {
      return void 0 === RU && void 0 === gU ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(UU.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === RU ? "@interpolate(flat) " : `@interpolate(${null!==RU&&void 0!==RU?RU:"perspective"}, ${null!==gU&&void 0!==gU?gU:"center"}) `
    }

    function qp(UU) {
      return jp({
        defines: UU.defines,
        vertex: Rp(Lt, UU.vertexCode),
        fragment: Rp(Nt, UU.fragmentCode),
        members: [...rt, ...UU.defines.has("OPACITY") ? Xt : [], ...UU.defines.has("EMISSIVE") ? vt : [], ...UU.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Kp(UU) {
      const RU = UU.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (RU === UU) throw new Error("Lite: fragment main has no return");
      return RU
    }
    const cp = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Ft}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${it}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${At}\n${zt}\n}\n`,
      Gp = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Mt}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function jp(UU) {
      const RU = UU.defines,
        gU = Ep(xR(UU.vertex, RU)),
        tU = Ep(xR(UU.fragment, RU)),
        pU = new Map;
      for (const fU of [...gU.varyings, ...tU.varyings]) pU.has(fU.name) || pU.set(fU.name, fU);
      const EU = [...pU.values()].map(((UU, RU) => `\t@location(${RU}) ${UU.interpolation}${UU.name}: ${UU.type},`)),
        PU = [...UU.members];
      for (const fU of [...gU.uniforms, ...tU.uniforms]) PU.some((UU => UU.name === fU.name)) || PU.push(fU);
      const TU = Vt(UU.structName, PU),
        qU = [],
        KU = [];
      let cU = 1;
      const GU = new Set;
      for (const fU of [...gU.textures, ...tU.textures]) {
        if (GU.has(fU.name)) continue;
        GU.add(fU.name);
        const UU = `${fU.name}Sampler`,
          RU = cU++,
          gU = cU++,
          tU = fU.type.startsWith("texture_2d_array") ? "2d-array" : fU.type.startsWith("texture_cube") ? "cube" : "2d";
        qU.push({
          name: fU.name,
          binding: RU,
          samplerBinding: gU,
          dimension: tU
        }), KU.push(`@group(2) @binding(${RU}) var ${fU.name}: ${fU.type};`), KU.push(`@group(2) @binding(${gU}) var ${UU}: sampler;`)
      }
      for (const fU of [...gU.samplers, ...tU.samplers])
        if (!GU.has(fU.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${fU} has no texture`);
      const jU = [ht, kt, TU.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${UU.structName};`, ...KU].join("\n"),
        uU = gU.attributes,
        CU = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...gU.attributes.map(((UU, RU) => `\t@location(${RU}) ${UU.name}: ${UU.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        hU = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...EU, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        QU = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...tU.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...EU, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", DU, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${MU}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        eU = UU => {
          for (const RU of TU.stridedArrays) UU = UU.replace(new RegExp(`\\b${RU}\\s*\\[(.*?)\\]`, "g"), `${RU}[$1].el`);
          return UU
        };
      return {
        vertex: `${jU}\n${CU}\n${hU}\n${eU(gU.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${jU}\n${QU}\n${Kp((WU=eU(tU.body),WU.includes("fragmentInputs.position")?WU.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):WU))}`,
        attributes: uU,
        material: TU,
        textures: qU
      };
      var WU
    }
    const Cp = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      hp = UU => ({
        name: UU,
        type: "vec3"
      }),
      Qp = UU => ({
        name: UU,
        type: "float"
      }),
      ep = Vt("EarthSkyUniforms", [hp("viewFrom"), Qp("exposureScale"), hp("zenithOffset"), Qp("fogOn"), hp("up"), Qp("ditherOn"), hp("sun"), Qp("turbidity"), hp("tint"), Qp("rayleigh"), hp("sunDir"), Qp("mieStrength"), hp("inScatterR"), Qp("mieFocus"), hp("inScatterM"), Qp("sunE"), hp("extinctionBeta"), Qp("sunsetMix"), Qp("mieScale"), Qp("mieBase"), Qp("mieSlope"), Qp("sunDiscE"), Qp("exposure")]),
      Wp = `${ht}\n${kt}\n${ep.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      fp = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Cp.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      xp = `\n${DU}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(QR).map((UU=>{let[RU,gU]=UU;return`const TONE_${RU}: f32 = ${gU};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${eR};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${MU}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var mp = gU(36593);
    const Ip = new mp.xC,
      Jp = new mp.xC,
      wp = new mp.Quaternion,
      np = new Float64Array(3),
      bp = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      op = new Float64Array(16);

    function Zp(UU, RU, gU) {
      const tU = gU.worldMatrix;
      var pU;
      UU.updateFloat3("viewFrom", tU[12], tU[13], tU[14]), UU.updateFloatsFrom("zenithOffset", RU.cameraOffset, 0, 3), UU.updateFloatsFrom("up", RU.up, 0, 3), RU.luminance > 0 && (UU.updateFloat("exposure", RU.luminance), UU.updateFloat("exposureScale", (pU = RU.luminance, Math.log2(2 / Math.pow(pU, 4))))), UU.updateFloat("turbidity", RU.turbidity), UU.updateFloat("rayleigh", RU.rayleigh), UU.updateFloat("mieStrength", RU.mieCoefficient), UU.updateFloat("mieFocus", RU.mieDirectionalG), UU.updateFloatsFrom("tint", RU.tint, 0, 3), UU.updateFloat("fogOn", RU.fog && gU.fogEnabled && 0 !== gU.fogMode ? 1 : 0), UU.updateFloat("ditherOn", RU.dithering ? 1 : 0);
      const EU = RU.sunPosition;
      if (Ip.set(EU[0], EU[1], EU[2]), !RU.useSunPosition) {
        const UU = Math.PI * (RU.inclination - .5),
          gU = 2 * Math.PI * (RU.azimuth - .5);
        Ip.set(RU.distance * Math.cos(gU) * Math.cos(UU), RU.distance * Math.sin(-UU), RU.distance * Math.sin(gU) * Math.cos(UU)), mp.Quaternion.FromUnitVectorsToRef(mp.xC.UpReadOnly, Jp.set(RU.up[0], RU.up[1], RU.up[2]), wp), Ip.rotateByQuaternionToRef(wp, Ip)
      }
      UU.updateVector3("sun", Ip), np[0] = Ip.x, np[1] = Ip.y, np[2] = Ip.z;
      const PU = hR(RU, np, bp);
      UU.updateFloatsFrom("sunDir", PU.sunDir, 0, 3), UU.updateFloat("sunE", PU.sunE), UU.updateFloatsFrom("inScatterR", PU.inScatterR, 0, 3), UU.updateFloatsFrom("inScatterM", PU.inScatterM, 0, 3), UU.updateFloatsFrom("extinctionBeta", PU.extinctionBeta, 0, 3), UU.updateFloat("sunsetMix", PU.sunsetMix), UU.updateFloat("sunDiscE", PU.sunDiscE), UU.updateFloat("mieScale", PU.mieScale), UU.updateFloat("mieBase", PU.mieBase), UU.updateFloat("mieSlope", PU.mieSlope)
    }

    function ap(UU, RU) {
      const gU = op;
      gU[0] = RU.far, gU[5] = RU.far, gU[10] = RU.far, gU[15] = 1;
      const tU = UU.infiniteDistance;
      for (let pU = 0; pU < 3; pU++) gU[12 + pU] = UU.position[pU] + (tU ? RU.worldMatrix[12 + pU] : 0);
      return op
    }
    var Yp = gU(38272);

    function Bp(UU) {
      return Math.max(4, 4 * Math.ceil(UU / 4))
    }

    function Vp(UU, RU, gU, tU) {
      const pU = UU.createBuffer({
        label: tU,
        size: Bp(RU.byteLength),
        usage: gU,
        mappedAtCreation: !0
      });
      return new Uint8Array(pU.getMappedRange(), 0, RU.byteLength).set(new Uint8Array(RU.buffer, RU.byteOffset, RU.byteLength)), pU.unmap(), pU
    }

    function rp(UU, RU) {
      return Math.floor(Math.log2(Math.max(UU, RU))) + 1
    }

    function Xp(UU, RU, gU, tU, pU, EU) {
      const PU = UU.createTexture({
          label: EU,
          size: {
            width: gU,
            height: tU,
            depthOrArrayLayers: pU
          },
          format: "rgba8unorm",
          mipLevelCount: rp(gU, tU),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        TU = (RU, gU, tU, EU) => {
          UU.queue.writeTexture({
            texture: PU,
            mipLevel: gU
          }, RU, {
            bytesPerRow: 4 * tU,
            rowsPerImage: EU
          }, {
            width: tU,
            height: EU,
            depthOrArrayLayers: pU
          })
        };
      TU(RU, 0, gU, tU);
      let qU = 1;
      for (const KU of function*(UU, RU, gU, tU) {
          let pU = UU,
            EU = RU,
            PU = gU;
          for (; EU > 1 || PU > 1;) {
            const UU = Math.max(1, EU >> 1),
              RU = Math.max(1, PU >> 1),
              gU = new Uint8Array(UU * RU * tU * 4),
              TU = 4 * EU;
            let qU = 0;
            for (let KU = 0; KU < tU; KU++) {
              const tU = KU * TU * PU;
              for (let KU = 0; KU < RU; KU++) {
                const RU = tU + Math.min(2 * KU, PU - 1) * TU,
                  cU = tU + Math.min(2 * KU + 1, PU - 1) * TU;
                for (let tU = 0; tU < UU; tU++) {
                  const UU = 4 * Math.min(2 * tU, EU - 1),
                    PU = 4 * Math.min(2 * tU + 1, EU - 1);
                  for (let tU = 0; tU < 4; tU++) gU[qU++] = pU[RU + UU + tU] + pU[RU + PU + tU] + pU[cU + UU + tU] + pU[cU + PU + tU] + 2 >> 2
                }
              }
            }
            yield {
              data: gU,
              width: UU,
              height: RU
            }, pU = gU, EU = UU, PU = RU
          }
        }(RU, gU, tU, pU)) TU(KU.data, qU++, KU.width, KU.height);
      return PU
    }
    const vp = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function dp(UU) {
      if (UU.startsWith("data:")) {
        const RU = UU.search(/[;,]/);
        return `data:${RU>5?UU.slice(5,RU):""} URL of ${UU.length} characters`
      }
      return UU.length > 80 ? `${UU.slice(0,80)}...` : UU
    }
    async function Hp(UU) {
      const RU = await fetch(UU);
      if (!RU.ok) throw new Error(`${dp(UU)}: ${RU.status} ${RU.statusText}`);
      return createImageBitmap(await RU.blob(), vp)
    }
    async function Sp(UU) {
      const RU = await Hp(UU),
        gU = new OffscreenCanvas(RU.width, RU.height),
        tU = gU.getContext("2d", {
          willReadFrequently: !0
        });
      if (!tU) throw new Error("No 2D context to decode an image");
      tU.drawImage(RU, 0, 0);
      const {
        data: pU
      } = tU.getImageData(0, 0, RU.width, RU.height);
      return RU.close(), {
        pixels: new Uint8Array(pU.buffer, pU.byteOffset, pU.byteLength),
        width: gU.width,
        height: gU.height
      }
    }
    const sp = new WeakMap;

    function yp(UU, RU, gU, tU) {
      var pU;
      const EU = null !== (pU = sp.get(UU)) && void 0 !== pU ? pU : new Map;
      sp.set(UU, EU);
      let PU = EU.get(RU);
      return PU || (PU = (async pU => {
        const EU = null !== (pU = function(UU, RU) {
          const gU = UU ? new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength) : null;
          return null !== gU && void 0 !== gU && gU.byteLength && RU && gU.byteLength % (RU * RU * 4) === 0 ? {
            pixels: gU,
            layerWidth: RU,
            layers: gU.byteLength / (RU * RU * 4)
          } : null
        }(gU, tU)) && void 0 !== pU ? pU : await async function(UU) {
          const {
            pixels: RU,
            width: gU
          } = await Sp(UU);
          return {
            pixels: RU,
            layerWidth: gU,
            layers: RU.byteLength / (gU * gU * 4)
          }
        }(RU), {
          layerWidth: PU,
          layers: TU
        } = EU;
        return {
          texture: Xp(UU, EU.pixels, PU, PU, TU, `atlas-${RU}`),
          layerWidth: PU,
          layers: TU
        }
      })(), EU.set(RU, PU), PU.catch((() => {
        EU.delete(RU)
      }))), PU
    }
    const kp = new Map([
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
      Fp = new Map([
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

    function ip(UU) {
      for (const RU of (0, Yp.l)(UU))
        if (!Fp.has((0, Yp.k)(RU))) return !1;
      return !0
    }

    function Ap(UU) {
      const RU = Fp.get(UU);
      if (!RU) return null;
      const [gU, tU, pU] = RU;
      return {
        srcFactor: kp.get(gU),
        dstFactor: kp.get(tU),
        operation: pU
      }
    }
    let zp = null;

    function Mp(UU) {
      zp = UU
    }

    function Dp(UU, RU, gU) {
      var tU;
      null === (tU = zp) || void 0 === tU || tU(UU, RU, gU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class Lp {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(UU, RU, gU, tU, pU) {
        gU !== this.pipeline && (UU.setPipeline(gU), this.pipeline = gU), UU.setBindGroup(1, tU, [pU]);
        const EU = RU.material.bindGroup;
        EU !== this.materialGroup && (UU.setBindGroup(2, EU), this.materialGroup = EU);
        const PU = RU.program.packGroup;
        PU && PU !== this.packGroup && (UU.setBindGroup(bR.d, PU), this.packGroup = PU);
        const {
          vertexBuffers: TU,
          vertexOffsets: qU
        } = this;
        for (let KU = 0; KU < RU.vertexBuffers.length; KU++) TU[KU] === RU.vertexBuffers[KU] && qU[KU] === RU.vertexOffsets[KU] || (UU.setVertexBuffer(KU, RU.vertexBuffers[KU], RU.vertexOffsets[KU]), TU[KU] = RU.vertexBuffers[KU], qU[KU] = RU.vertexOffsets[KU]);
        RU.indexBuffer && RU.indexBuffer !== this.indexBuffer && (UU.setIndexBuffer(RU.indexBuffer, RU.indexFormat), this.indexBuffer = RU.indexBuffer)
      }
    }
    class Np {
      constructor(UU, RU, gU, tU) {
        this.modelMeshes = UU, this.B5 = RU, this.maker = gU, this.warnOnce = tU, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(UU) {
        this.collectGroup(UU, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(UU, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(UU, 1, this.frontDraws, this.frontDraws, !0);
        for (const RU of this.modelMeshes.groupIds())(RU < -1 || RU > 1) && this.warnOnce(`group:${RU}`, `rendering group ${RU} is not drawn`);
        for (const RU of this.B5.groupIds())(RU < -1 || RU > 1) && this.warnOnce(`group:${RU}`, `rendering group ${RU} is not drawn`);
        this.opaqueDraws.sort(lp), this.transparentDraws.sort(Op)
      }
      collectGroup(UU, RU, gU, tU, pU) {
        const EU = this.modelMeshes.group(RU),
          PU = this.B5.group(RU),
          TU = 0 === RU ? null === PU || void 0 === PU ? void 0 : PU.opaque : void 0;
        this.collectList(UU, null === EU || void 0 === EU ? void 0 : EU.opaque, TU || null === PU || void 0 === PU ? void 0 : PU.opaque, RU, !1, gU, pU), TU && (this.B5.drawn += this.maker.bundleDraws(UU, TU, RU)), this.collectList(UU, null === EU || void 0 === EU ? void 0 : EU.alphaTest, void 0, RU, !1, gU, pU), this.collectList(UU, null === EU || void 0 === EU ? void 0 : EU.transparent, null === PU || void 0 === PU ? void 0 : PU.transparent, RU, !0, tU, pU)
      }
      collectList(UU, RU, gU, tU, pU, EU, PU) {
        var TU;
        const qU = EU.length;
        RU && this.maker.pushDraws(UU, RU.units, RU.units.length, tU, pU, EU, RU.rows), gU && (this.B5.drawn += this.maker.pushDraws(UU, gU, gU.length, tU, pU, EU));
        const KU = pU ? null === (TU = this.modelMeshes.group(tU)) || void 0 === TU ? void 0 : TU.text : void 0;
        KU && this.maker.pushDraws(UU, KU.units, KU.units.length, tU, !0, EU, KU.rows), PU && UE(EU, qU)
      }
    }

    function lp(UU, RU) {
      return UU.program.id - RU.program.id || UU.material.owner.uniqueId - RU.material.owner.uniqueId
    }

    function Op(UU, RU) {
      return UU.material.owner.uniqueId - RU.material.owner.uniqueId
    }

    function UE(UU, RU) {
      for (let gU = RU + 1; gU < UU.length; gU++) {
        const tU = UU[gU];
        let pU = gU - 1;
        for (; pU >= RU && Op(UU[pU], tU) > 0; pU--) UU[pU + 1] = UU[pU];
        UU[pU + 1] = tU
      }
    }
    const RE = {};

    function gE(UU) {
      return UU.hasThinInstances ? "thin" : UU.BtU || UU._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function tE(UU, RU, gU) {
      return UU ? (gU._needUVs = !0, UU.optimizeUVAllocation && (0, oU.D)(UU.matrix) ? (gU[`${RU}DIRECTUV`] = UU.uvSet + 1, gU[`MAINUV${UU.uvSet+1}`] = !0) : gU[`${RU}DIRECTUV`] = 0, !0) : (gU[`${RU}DIRECTUV`] = 0, !1)
    }

    function pE(UU) {
      const RU = new Map;
      for (const gU in UU) {
        if (95 === gU.charCodeAt(0)) continue;
        const tU = UU[gU],
          pU = typeof tU;
        "number" === pU || "string" === pU ? RU.set(gU, String(tU)) : tU && "function" !== pU && RU.set(gU, !0)
      }
      return RU
    }

    function EE(UU) {
      const RU = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: gU
        }
        of UU.features)
        for (const UU in gU) RU[UU] = gU[UU];
      return RU
    }

    function PE(UU) {
      const RU = UU.parts.geometry;
      return null !== RU && void 0 !== RU && RU.live ? RU : null
    }

    function TE(UU) {
      var RU;
      return null !== (RU = PE(UU)) && void 0 !== RU ? RU : RE
    }
    class qE {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = UU, this.warnOnce = RU, this.programWithModel = gU, this.packFailed = tU, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(UU, RU, gU, tU, pU) {
        const EU = RU.owner;
        let PU = this.drawStates.get(RU);
        if (!PU) {
          const UU = RU.parts.materials[RU.range];
          if (!UU) return this.warnOnce("model", `${gU.name} on ${EU.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          PU = {
            defines: EE(UU),
            model: UU,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: pU,
            groupId: tU,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(RU, PU)
        }
        if (this.programCurrent(PU, RU, pU, tU)) return PU.program;
        const {
          model: TU
        } = PU, qU = TE(RU), KU = this.instanceLayout(EU, pU), cU = this.definesBits(EU);
        if (!this.prepareModelDefines(UU, EU, TU, PU.defines, tU, pU)) return null;
        PU.instancing = pU, PU.groupId = tU, PU.modelVersion = TU.version, PU.geometry = qU, PU.instanceLayout = KU, PU.definesBits = cU;
        const GU = function(UU) {
          let RU = "";
          for (const [gU, tU] of UU) RU += !0 === tU ? `${gU};` : `${gU}=${tU};`;
          return RU
        }(pE(PU.defines));
        return GU === PU.definesKey && PU.packVariant === this.modelPackVariant && PU.program && !this.packFailed(PU.program) || (PU.definesKey = GU, PU.packVariant = this.modelPackVariant, PU.program = this.programWithModel(TU, PU.defines, GU)), PU.program
      }
      programCurrent(UU, RU, gU, tU) {
        return null !== UU.program && !this.packFailed(UU.program) && UU.instancing === gU && UU.groupId === tU && this.definesHold(UU, RU, gU)
      }
      definesHold(UU, RU, gU) {
        return UU.modelVersion === UU.model.version && UU.geometry === TE(RU) && UU.instanceLayout === this.instanceLayout(RU.owner, gU) && UU.definesBits === this.definesBits(RU.owner) && UU.packVariant === this.modelPackVariant
      }
      modelPackKind(UU) {
        var RU;
        return 0 === this.modelPackVariant ? null : null !== (RU = (0, nU.D)(UU, wU.k.name)) && void 0 !== RU && RU.active ? "placed" : UU.item ? "item" : UU.lifeform ? "lifeform" : UU.box ? "box" : null
      }
      instanceLayout(UU, RU) {
        var gU, tU, pU;
        return "thin" === RU ? null !== (pU = this.resources.LO.get(UU)) && void 0 !== pU ? pU : null : "instanced" === RU && null !== (gU = null === (tU = UU._userInstancedBuffersStorage) || void 0 === tU ? void 0 : tU.interleavedKinds) && void 0 !== gU ? gU : null
      }
      definesBits(UU) {
        const RU = this.view;
        return (UU.visibility < 1 ? 1 : 0) | (UU.hasVertexAlpha ? 2 : 0) | (UU.applyFog ? 4 : 0) | (UU.useVertexColors ? 8 : 0) | (UU.nonUniformScaling ? 16 : 0) | (RU.fogEnabled && 0 !== RU.fogMode ? 32 : 0) | (RU.lightsEnabled ? 64 : 0) | RU.lightCount << 7
      }
      prepareLightDefines(UU, RU, gU) {
        let tU = 0;
        if (this.view.lightsEnabled && !RU) {
          const RU = Math.min(gU, 4);
          for (; tU < this.view.lightCount && (UU[`LIGHT${tU}`] = !0, UU[`LITE_LIGHT${tU}_SLOT`] = tU, tU++, UU._needNormals = !0, tU !== RU););
        }
        for (let pU = tU; pU < 4; pU++) UU[`LIGHT${pU}`] = !1, UU[`LITE_LIGHT${pU}_SLOT`] = void 0
      }
      prepareModelDefines(UU, RU, gU, tU, pU, EU) {
        const {
          features: PU
        } = gU;
        tU._needNormals = !1, tU._needUVs = !1;
        const TU = this.view;
        this.prepareLightDefines(tU, gU.disableLighting, gU.maxSimultaneousLights), tU.MAINUV1 = !1, tU.MAINUV2 = !1;
        const qU = gU.diffuseTexture;
        qU ? (tU._needUVs = !0, tU.DIFFUSE = !0, qU.optimizeUVAllocation && (0, oU.D)(qU.matrix) ? (tU.DIFFUSEDIRECTUV = qU.uvSet + 1, tU[`MAINUV${qU.uvSet+1}`] = !0) : tU.DIFFUSEDIRECTUV = 0, qU.uvSet > 1 && this.warnOnce(`uvset:${gU.name}`, `${gU.name} samples UV set ${qU.uvSet+1}, which is not supported`)) : (tU.DIFFUSE = !1, tU.DIFFUSEDIRECTUV = 0);
        const KU = gU.opacityTexture,
          cU = gU.emissiveTexture;
        tU.OPACITY = tE(KU, "OPACITY", tU), tU.OPACITYRGB = null !== KU && KU.getAlphaFromRGB, tU.EMISSIVE = tE(cU, "EMISSIVE", tU), (KU && KU.uvSet > 1 || cU && cU.uvSet > 1) && this.warnOnce(`uvset:${gU.name}`, `${gU.name} samples a UV set past 2, which is not supported`);
        const GU = gU.reflectionTexture,
          jU = null !== GU;
        if (jU) {
          if (!this.resources.boundTexture(GU)) return !1;
          tU._needNormals = !0
        }
        tU.REFLECTION = jU, tU.REFLECTIONMAP_3D = jU, tU.REFLECTIONMAP_SKYBOX = jU, tU.REFLECTIONMAP_OPPOSITEZ = jU && (UU.useRightHandedSystem ? !GU.invertZ : GU.invertZ), tU.ROUGHNESS = jU && gU.roughness > 0, tU.REFLECTIONOVERALPHA = jU && gU.useReflectionOverAlpha, tU.LITE_REFLECTION_LUMINANCE = jU && "cube" === GU.source.kind && GU.source.luminance, (RU.skeleton || RU.morphTargetManager) && this.warnOnce(`skin:${RU.name}`, `${RU.name} has bones or morph targets, which are not supported`), tU.FOG = gU.fogEnabled && RU.applyFog && TU.fogEnabled && 0 !== TU.fogMode, tU.NONUNIFORMSCALING = RU.nonUniformScaling;
        const {
          visibility: uU,
          hasVertexAlpha: CU
        } = RU;
        tU.ALPHATEST = (0, nU.bb)(gU, uU, CU), tU.ALPHAFROMDIFFUSE = (0, nU.wb)(gU), tU.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== gU.transparencyMode, tU.ALPHABLEND = null === gU.transparencyMode || (0, nU._)(gU, uU, CU), tU.PREMULTIPLYALPHA = 7 === gU.alphaMode || 8 === gU.alphaMode, tU.EMISSIVEASILLUMINATION = gU.useEmissiveAsIllumination, tU.LINKEMISSIVEWITHDIFFUSE = gU.linkEmissiveWithDiffuse, tU.TWOSIDEDLIGHTING = !gU.backFaceCulling && gU.twoSidedLighting, tU.INSTANCES = "none" !== EU, tU.THIN_INSTANCES = "thin" === EU, tU.LITE_FRONT_LAYER = pU >= 1;
        for (const {
            feature: JU,
            state: wU,
            active: nU
          }
          of PU) {
          var hU, QU;
          if (nU) null === (hU = (QU = (0, cR.j)(JU)).prepareDefinesBeforeAttributes) || void 0 === hU || hU.call(QU, wU, tU, UU, RU)
        }
        this.modelPackKind(gU) && (tU._needNormals = !0), tU.NORMAL = tU._needNormals && RU.isVerticesDataPresent("normal"), tU.UV1 = tU._needUVs && RU.isVerticesDataPresent("uv"), tU.UV2 = tU._needUVs && RU.isVerticesDataPresent("uv2");
        const eU = RU.useVertexColors && RU.isVerticesDataPresent("color");
        tU.VERTEXCOLOR = eU, tU.VERTEXALPHA = RU.hasVertexAlpha && eU, tU.INSTANCESCOLOR = "none" !== EU && RU.isVerticesDataPresent("instanceColor");
        for (const {
            feature: JU,
            state: wU,
            active: nU
          }
          of PU) {
          var WU, fU;
          if (nU) null === (WU = (fU = (0, cR.j)(JU)).prepareDefines) || void 0 === WU || WU.call(fU, wU, tU, UU, RU, gU)
        }
        const xU = UU.WC();
        for (const {
            feature: JU,
            state: wU,
            active: nU
          }
          of PU) {
          var mU, IU;
          if (nU && !1 === (null === (mU = (IU = (0, cR.j)(JU)).isReadyForSubMesh) || void 0 === mU ? void 0 : mU.call(IU, wU, tU, UU, xU))) return !1
        }
        return !0
      }
    }

    function KE(UU, RU, gU) {
      return UU.codeVersion !== RU.version && function(UU, RU) {
        const gU = [],
          tU = [];
        for (const {
            feature: jU,
            state: uU,
            active: CU
          }
          of RU.features) {
          var pU, EU, PU, TU;
          if (CU) cE(null === (pU = (EU = (0, cR.j)(jU)).getCustomCode) || void 0 === pU ? void 0 : pU.call(EU, uU, "vertex", IU.d.WGSL), gU), cE(null === (PU = (TU = (0, cR.j)(jU)).getCustomCode) || void 0 === PU ? void 0 : PU.call(TU, uU, "fragment", IU.d.WGSL), tU)
        }
        const qU = [];
        for (const {
            feature: jU,
            state: uU
          }
          of RU.features) {
          var KU, cU;
          const UU = null === (KU = (cU = (0, cR.j)(jU)).getUniforms) || void 0 === KU ? void 0 : KU.call(cU, uU, IU.d.WGSL);
          for (const RU of null !== (GU = null === UU || void 0 === UU ? void 0 : UU.ubo) && void 0 !== GU ? GU : []) {
            var GU;
            RU.size && RU.type && qU.push({
              name: RU.name,
              type: RU.type,
              arraySize: RU.arraySize
            })
          }
        }
        UU.vertexCode = gU, UU.fragmentCode = tU, UU.pluginUniforms = qU, UU.codeKey = JSON.stringify([gU, tU, qU]), UU.codeVersion = RU.version
      }(UU, RU), `${gU}#${UU.codeKey}`
    }

    function cE(UU, RU) {
      if (UU)
        for (const gU in UU) UU[gU] && RU.push([gU, UU[gU]])
    }
    const GE = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class jE {
      constructor(UU) {
        this.warnOnce = UU, this.states = new Map
      }
      renderState(UU, RU, gU, tU) {
        var pU;
        let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          PU = null !== (pU = UU.sideOrientation) && void 0 !== pU ? pU : RU.sideOrientation;
        RU._getWorldMatrixDeterminant() < 0 && (PU = 0 === PU ? 1 : 0);
        const TU = "triangle-list" === EU,
          qU = gU ? UU.alphaMode : 0,
          KU = (!gU || (0 === qU || UU.forceDepthWrite)) && !UU.disableDepthWrite,
          cU = TU && UU.backFaceCulling ? UU.cullBackFaces ? "back" : "front" : "none",
          GU = TU && 0 !== PU ? "ccw" : "cw",
          jU = UU.depthFunction,
          uU = TU ? UU.zOffset : 0,
          CU = TU ? UU.zOffsetUnits : 0,
          hU = !UU.disableColorWrite;
        return tU && tU.alphaMode === qU && tU.depthWrite === KU && tU.depthFunction === jU && tU.cullMode === cU && tU.frontFace === GU && tU.zOffset === uU && tU.zOffsetUnits === CU && tU.colourWrite === hU && tU.topology === EU ? tU : this.stateFor(qU, KU, jU, cU, GU, uU, CU, hU, EU)
      }
      stateFor(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        const KU = `${UU}|${RU}|${gU}|${tU}|${pU}|${EU}|${PU}|${TU}|${qU}`;
        let cU = this.states.get(KU);
        if (!cU) {
          var GU;
          const jU = UU ? Ap(UU) : null;
          UU && !jU && this.warnOnce(`alpha:${UU}`, `alpha mode ${UU} is not supported`), cU = {
            key: KU,
            alphaMode: UU,
            depthFunction: gU,
            zOffset: EU,
            zOffsetUnits: PU,
            topology: qU,
            blend: jU,
            depthWrite: RU,
            depthCompare: gU && null !== (GU = GE.get(gU)) && void 0 !== GU ? GU : null,
            cullMode: tU,
            frontFace: pU,
            depthBias: -PU,
            depthBiasSlopeScale: -EU,
            colourWrite: TU
          }, this.states.set(KU, cU)
        }
        return cU
      }
    }
    var uE = gU(36933);

    function CE(UU) {
      if (!UU.frozen) return -1;
      let RU = UU.version;
      for (const {
          feature: gU,
          state: tU,
          active: pU
        }
        of UU.features) {
        if (!pU || !gU.bind) continue;
        const UU = (0, cR.j)(gU).uniformsVersion;
        if (!UU) return -1;
        RU += UU(tU)
      }
      return RU
    }
    class hE {
      constructor(UU, RU, gU) {
        this.slots = UU, this.data = RU, this.textures = gU, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(UU, RU) {
        this.write4(UU, RU, 0, 0, 0, 1)
      }
      updateFloat2(UU, RU, gU) {
        this.write4(UU, RU, gU, 0, 0, 2)
      }
      updateFloat3(UU, RU, gU, tU) {
        this.write4(UU, RU, gU, tU, 0, 3)
      }
      updateFloat4(UU, RU, gU, tU, pU) {
        this.write4(UU, RU, gU, tU, pU, 4)
      }
      updateVector3(UU, RU) {
        this.write4(UU, RU.x, RU.y, RU.z, 0, 3)
      }
      updateVector4(UU, RU) {
        this.write4(UU, RU.x, RU.y, RU.z, RU.w, 4)
      }
      updateColor3(UU, RU) {
        this.write4(UU, RU.r, RU.g, RU.b, 0, 3)
      }
      updateColor4(UU, RU, gU) {
        this.write4(UU, RU.r, RU.g, RU.b, gU, 4)
      }
      updateFloatsFrom(UU, RU, gU, tU) {
        const pU = this.slots.get(UU);
        if (!pU) return;
        const EU = this.data,
          PU = pU.offset;
        for (let TU = 0; TU < tU; TU++) EU[PU + TU] = RU[gU + TU]
      }
      updateFloat3TimesFloats(UU, RU, gU, tU) {
        const pU = this.slots.get(UU);
        if (!pU) return;
        const EU = this.data,
          PU = pU.offset;
        EU[PU] = RU[gU] * tU[0], EU[PU + 1] = RU[gU + 1] * tU[1], EU[PU + 2] = RU[gU + 2] * tU[2]
      }
      p_(UU, RU) {
        const gU = this.slots.get(UU);
        gU && this.data.set(RU.m, gU.offset)
      }
      updateMatrixFloats(UU, RU) {
        const gU = this.slots.get(UU);
        gU && this.data.set(RU, gU.offset)
      }
      updateFloatArray(UU, RU) {
        const gU = this.slots.get(UU);
        if (!gU) return;
        if (!gU.arraySize || gU.stride === gU.floats) return void this.data.set(RU, gU.offset);
        const tU = Math.min(RU.length, gU.floats * gU.arraySize);
        for (let pU = 0; pU < tU; pU++) this.data[gU.offset + Math.floor(pU / gU.floats) * gU.stride + pU % gU.floats] = RU[pU]
      }
      updateArray(UU, RU) {
        this.updateFloatArray(UU, RU)
      }
      setTexture(UU, RU) {
        this.textures.set(UU, RU), this.expected.delete(UU)
      }
      expectTexture(UU) {
        this.textures.set(UU, null), this.expected.add(UU)
      }
      write4(UU, RU, gU, tU, pU, EU) {
        const PU = this.slots.get(UU);
        if (!PU) return;
        const TU = this.data,
          qU = PU.offset;
        TU[qU] = RU, EU > 1 && (TU[qU + 1] = gU), EU > 2 && (TU[qU + 2] = tU), EU > 3 && (TU[qU + 3] = pU)
      }
    }

    function QE(UU, RU) {
      const gU = st,
        tU = uE.i,
        pU = UU.lights,
        EU = Math.min(UU.lightCount, 8);
      for (let PU = 0; PU < EU; PU++) {
        const UU = gU.lights + PU * gU.lightStride,
          EU = PU * uE.c;
        RU[UU] = pU[EU + tU.vector], RU[UU + 1] = pU[EU + tU.vector + 1], RU[UU + 2] = pU[EU + tU.vector + 2], RU[UU + 3] = pU[EU + tU.kind] === uE.f.directional ? 1 : 0, RU[UU + 4] = pU[EU + tU.diffuse], RU[UU + 5] = pU[EU + tU.diffuse + 1], RU[UU + 6] = pU[EU + tU.diffuse + 2], RU[UU + 7] = pU[EU + tU.range], RU[UU + 8] = pU[EU + tU.specular], RU[UU + 9] = pU[EU + tU.specular + 1], RU[UU + 10] = pU[EU + tU.specular + 2], RU[UU + 11] = pU[EU + tU.range]
      }
      RU[gU.fogInfos] = UU.fogMode, RU[gU.fogInfos + 1] = UU.fogStart, RU[gU.fogInfos + 2] = UU.fogEnd, RU[gU.fogInfos + 3] = UU.fogDensity, RU[gU.fogColour] = UU.fogColour[0], RU[gU.fogColour + 1] = UU.fogColour[1], RU[gU.fogColour + 2] = UU.fogColour[2], RU[gU.outputHeight] = UU.renderHeight, RU[gU.animTick] = UU.animTick, RU[gU.timeMs] = UU.timeMs
    }
    class eE {
      constructor(UU) {
        this.instancesOf = UU
      }
      refreshModelUniforms(UU, RU, gU, tU) {
        const pU = CE(gU);
        if (pU >= 0 && pU === RU.heldVersion && RU.textures.get("diffuseSampler") === gU.diffuseTexture && RU.textures.get("reflectionCubeSampler") === gU.reflectionTexture && RU.textures.get("opacitySampler") === gU.opacityTexture && RU.textures.get("emissiveSampler") === gU.emissiveTexture) return !0;
        if (pU < 0)
          for (const EU of this.instancesOf(gU)) EU.heldVersion = -1;
        return this.writeModelUniforms(UU, RU, gU, tU), RU.heldVersion = pU, !1
      }
      writeModelUniforms(UU, RU, gU, tU) {
        const {
          ubo: pU
        } = RU, EU = gU.diffuseTexture, PU = gU.diffuseColor;
        pU.updateFloat4("vDiffuseColor", PU[0], PU[1], PU[2], gU.alpha), EU && (pU.updateFloat2("vDiffuseInfos", EU.uvSet, EU.level), pU.updateMatrixFloats("diffuseMatrix", EU.matrix)), pU.updateFloat("alphaCutOff", gU.alphaCutOff), pU.updateFloatsFrom("vEmissiveColor", gU.emissiveColor, 0, 3), pU.updateFloat3TimesFloats("vAmbientColor", tU.ambientColour, 0, gU.ambientColor);
        const TU = gU.specularColor;
        pU.updateFloat4("vSpecularColor", TU[0], TU[1], TU[2], gU.specularPower), pU.setTexture("diffuseSampler", EU);
        const qU = gU.opacityTexture;
        qU && (pU.updateFloat2("vOpacityInfos", qU.uvSet, qU.level), pU.updateMatrixFloats("opacityMatrix", qU.matrix)), pU.setTexture("opacitySampler", qU);
        const KU = gU.emissiveTexture;
        KU && (pU.updateFloat2("vEmissiveInfos", KU.uvSet, KU.level), pU.updateMatrixFloats("emissiveMatrix", KU.matrix)), pU.setTexture("emissiveSampler", KU);
        const cU = gU.reflectionTexture;
        cU && pU.updateMatrixFloats("reflectionMatrix", cU.matrix), pU.updateFloat2("vReflectionInfos", cU ? cU.level * UU.iblIntensity : 0, gU.roughness), pU.setTexture("reflectionCubeSampler", cU);
        const GU = UU.WC();
        for (const {
            feature: CU,
            state: hU,
            active: QU
          }
          of gU.features) {
          var jU, uU;
          if (QU) null === (jU = (uU = (0, cR.j)(CU)).bind) || void 0 === jU || jU.call(uU, hU, pU, UU, GU)
        }
      }
    }

    function WE(UU) {
      const RU = UU.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(RU) ? "u32" : /i32|^vec\di$/.test(RU) ? "i32" : "f32"
    }

    function fE(UU, RU) {
      const gU = UU.getSize(),
        tU = WE(RU),
        pU = UU => 4 === gU ? `${UU}x4` : 2 === gU ? `${UU}x2` : null;
      if ("f32" === tU) {
        if (5126 === UU.type) return 1 === gU ? "float32" : gU >= 2 && gU <= 4 ? `float32x${gU}` : null;
        if (!UU.normalized) return null;
        switch (UU.type) {
          case 5121:
            return pU("unorm8");
          case 5120:
            return pU("snorm8");
          case 5123:
            return pU("unorm16");
          case 5122:
            return pU("snorm16")
        }
        return null
      }
      const EU = "u32" === tU ? "uint" : "sint";
      switch (UU.type) {
        case 5125:
        case 5124:
          return 1 === gU ? `${EU}32` : gU <= 4 ? `${EU}32x${gU}` : null;
        case 5121:
        case 5120:
          return pU(`${EU}8`);
        case 5123:
        case 5122:
          return pU(`${EU}16`)
      }
      return null
    }

    function xE(UU) {
      var RU;
      const gU = /(8|16|32)(?:x(\d))?$/.exec(UU);
      return gU ? Number(gU[1]) / 8 * Number(null !== (RU = gU[2]) && void 0 !== RU ? RU : 1) : 4
    }
    class mE {
      constructor(UU, RU, gU) {
        this.resources = UU, this.limits = RU, this.warnOnce = gU, this.layouts = new Map
      }
      resolveInputs(UU, RU, gU, tU) {
        const pU = [],
          EU = gU.program.attributes,
          PU = [];
        for (let cU = 0; cU < EU.length; cU++) {
          const gU = EU[cU],
            TU = gU.optional ? null : this.resources.vertexInput(UU, gU.name, tU);
          if (!TU) {
            const UU = WE(gU.type),
              RU = "u32" === UU ? "uint32x4" : "i32" === UU ? "sint32x4" : "float32x4";
            PU.push(null);
            const tU = pU.find((UU => null === UU.data));
            tU ? tU.attributes.push({
              shaderLocation: cU,
              offset: 0,
              format: RU
            }) : pU.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: cU,
                offset: 0,
                format: RU
              }]
            });
            continue
          }
          const qU = TU.getBuffer();
          PU.push(TU);
          const KU = fE(TU, gU.type);
          if (!KU) return this.warnOnce(`format:${RU}:${gU.name}`, `${RU}'s ${gU.name} (type ${TU.type}, size ${TU.getSize()}) has no WebGPU vertex format`), null;
          const GU = TU.getIsInstanced() ? "instance" : "vertex",
            jU = TU.byteStride,
            uU = xE(KU),
            CU = pU.find((UU => UU.data === qU && UU.stride === jU && UU.step === GU && TU.byteOffset >= UU.base && TU.byteOffset - UU.base + uU <= jU));
          CU ? CU.attributes.push({
            shaderLocation: cU,
            offset: TU.byteOffset - CU.base,
            format: KU
          }) : pU.push({
            data: qU,
            base: TU.byteOffset,
            stride: jU,
            step: GU,
            attributes: [{
              shaderLocation: cU,
              offset: 0,
              format: KU
            }]
          })
        }
        if (pU.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${RU}`, `${RU} needs ${pU.length} vertex buffers`), null;
        let TU = "";
        for (const cU of pU) {
          TU += `${cU.stride}${"instance"===cU.step?"i":"v"}`;
          for (const UU of cU.attributes) TU += `,${UU.shaderLocation}:${UU.offset}:${UU.format}`;
          TU += ";"
        }
        let qU = this.layouts.get(TU);
        qU || (qU = {
          key: TU,
          buffers: pU.map((UU => ({
            arrayStride: UU.stride,
            stepMode: UU.step,
            attributes: UU.attributes
          }))),
          instanceEnds: pU.map((UU => {
            let RU = -1;
            if ("instance" === UU.step)
              for (const gU of UU.attributes) RU = Math.max(RU, gU.offset + xE(gU.format));
            return RU
          }))
        }, this.layouts.set(TU, qU));
        const KU = pU.map((UU => UU.base));
        return {
          program: gU,
          sources: PU,
          layout: qU,
          slotData: pU.map((UU => UU.data)),
          R6: KU,
          buffers: [],
          offsets: KU,
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

    function IE(UU, RU, gU, tU) {
      const pU = RU.program.program.attributes;
      for (let EU = 0; EU < pU.length; EU++) {
        if ((pU[EU].optional ? null : gU.vertexInput(UU, pU[EU].name, tU)) !== RU.sources[EU]) return !1
      }
      return !0
    }
    const JE = 64;
    class wE {
      constructor(UU, RU, gU, tU) {
        this.device = UU, this.layout = RU, this.frameBuffer = gU, this.label = tU, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(UU) {
        if (UU * JE <= this.data.length) return !1;
        let RU = 2 * this.data.length;
        for (; UU * JE > RU;) RU *= 2;
        const gU = new Float32Array(RU);
        return gU.set(this.data), this.data = gU, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pU = this.data,
          EU = UU * JE;
        let PU = pU[EU + 16] !== gU;
        for (let TU = 0; TU < 16 && !PU; TU++) PU = pU[EU + TU] !== RU[tU + TU];
        if (PU) {
          for (let UU = 0; UU < 16; UU++) pU[EU + UU] = RU[tU + UU];
          pU[EU + 16] = gU
        }
        return PU
      }
      upload(UU, RU) {
        this.device.queue.writeBuffer(this.buffer, UU * yt, this.data, UU * JE, (RU - UU) * JE)
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

    function nE(UU) {
      return UU.gpu[oU.g.lite] ??= UU.materials.map(((RU, gU) => ({
        parts: UU,
        range: gU,
        owner: UU.owner
      })))
    }

    function bE(UU) {
      var RU, gU, tU;
      return null !== (RU = null !== (gU = null === (tU = UU.parts.materials[UU.range]) || void 0 === tU ? void 0 : tU.mirror) && void 0 !== gU ? gU : UU.owner.material) && void 0 !== RU ? RU : null
    }
    const oE = ["opaque", "alphaTest", "transparent", "text"];
    class ZE {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, KR.b)("Lite: ")
      }
      attach(UU, RU) {
        this.model = UU, this.mirror = RU
      }
      get worlds() {
        return this.model.nodes.FG
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(UU) {
        return this.groups.get(UU)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(UU) {
        for (const [RU, gU] of this.groups)
          for (const tU of oE)
            for (const pU of gU[tU].units) UU(pU.owner, "text" === tU ? "transparent" : tU, RU)
      }
      select(UU, RU) {
        this.frame++, this.selectedCount = 0;
        for (const TU of this.groups.values())
          for (const UU of oE) TU[UU].units.length = 0, TU[UU].rows.length = 0;
        const {
          model: gU,
          mirror: tU
        } = this;
        if (!gU || !tU || !UU) return;
        this.rows.length < gU.nodes.hG && (this.rows = new Int32Array(gU.nodes.hG));
        const pU = this.rows,
          EU = gU.meshes;
        for (let TU = 0; TU < EU.looseCount; TU++) {
          const UU = EU.loose[TU],
            gU = tU.nodes[UU];
          gU && !gU.isBlocked && gU.isEnabled() && !gU.ep.hasAZeroComponent && EU.selects(UU, RU.frustum) && (this.activate(gU, UU), this.selectedCount++)
        }
        const PU = EU.selectTextPlanes(RU.frustum, pU);
        for (let TU = 0; TU < PU; TU++) {
          const RU = pU[TU],
            EU = tU.nodes[RU],
            PU = gU.meshes.parts[RU];
          if (!EU.isVisible || !(EU.visibility > 0) || 0 === (EU.layerMask & UU.layerMask) || !PU) continue;
          const qU = this.groupOf(gU.meshes.layer[RU]).text;
          for (const UU of nE(PU)) qU.units.push(UU), qU.rows.push(RU);
          this.selectedCount++
        }
      }
      instanceBatch(UU) {
        const RU = this.batchOf(UU);
        return RU.dispatched || (RU.dispatched = RU.renderSelf = !0, RU.row = this.rowOf(UU)), RU
      }
      rowOf(UU) {
        return UU.row
      }
      activate(UU, RU) {
        if (!UU.sZ) {
          const gU = UU;
          if (gU.BtU) {
            const UU = this.batchOf(gU);
            UU.dispatched = !0, UU.renderSelf = !0, UU.row = RU
          }
          return void this.dispatch(gU, RU, RU)
        }
        const gU = UU,
          tU = gU.VtU;
        if (tU._getWorldMatrixDeterminant() >= 0 !== gU._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${tU.name}`, `A mirrored InstancedMesh of ${tU.name} is not drawn yet`);
        const pU = this.batchOf(tU);
        pU.instances.push(gU), pU.rows.push(RU), pU.dispatched || (pU.dispatched = !0, this.dispatch(tU, RU, this.rowOf(tU)))
      }
      batchOf(UU) {
        let RU = this.batches.get(UU);
        return RU || (RU = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(UU, RU)), RU.frame !== this.frame && (RU.frame = this.frame, RU.dispatched = !1, RU.renderSelf = !1, RU.instances.length = 0, RU.rows.length = 0), RU
      }
      dispatch(UU, RU, gU) {
        const {
          layer: tU,
          parts: pU
        } = this.model.meshes;
        if (!pU[RU]) return;
        const EU = this.groupOf(tU[RU]),
          PU = UU;
        for (const TU of nE(pU[RU])) {
          const UU = bE(TU);
          if (!UU) continue;
          const RU = UU.needAlphaBlendingForMesh(PU) ? EU.transparent : UU.needAlphaTestingForMesh(PU) ? EU.alphaTest : EU.opaque;
          RU.units.push(TU), RU.rows.push(gU)
        }
      }
      groupOf(UU) {
        let RU = this.groups.get(UU);
        return RU || (RU = {
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
        }, this.groups.set(UU, RU)), RU
      }
    }
    class aE {
      constructor() {
        this.WT = new Map, this.enabled = [], this.groups = new Map, this.xu = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(UU) {
        if (this.WT.has(UU)) return;
        const RU = {
          mesh: UU,
          observer: UU.onEffectiveEnabledStateChangedObservable.add((UU => {
            this.GJ(RU, UU)
          })),
          index: -1,
          steady: null
        };
        this.WT.set(UU, RU), this.GJ(RU, UU.isEnabled())
      }
      remove(UU) {
        const RU = this.WT.get(UU);
        RU && (RU.observer.remove(!0), this.GJ(RU, !1), this.WT.delete(UU))
      }
      base(UU) {
        return this.WT.get(UU)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          WT: this.WT.size
        }
      }
      forEachSelected(UU) {
        for (const [RU, gU] of this.groups) {
          for (const tU of gU.opaque) UU(tU.owner, "opaque", RU);
          for (const tU of gU.transparent) UU(tU.owner, "transparent", RU)
        }
        for (const RU of this.xu) UU(RU.mesh, "opaque", 0)
      }
      group(UU) {
        return this.groups.get(UU)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(UU, RU) {
        this.drawn = 0, this.selected = 0, this.xu.length = 0;
        for (const tU of this.groups.values()) tU.opaque.length = 0, tU.transparent.length = 0;
        if (!UU) return;
        const gU = this.enabled;
        for (let tU = 0; tU < gU.length; tU++) {
          const pU = gU[tU];
          if (pU.steady && RU(pU, UU)) {
            this.selected++, this.xu.push(pU);
            continue
          }
          const EU = pU.mesh;
          if (EU.isBlocked || EU.ep.hasAZeroComponent) continue;
          if (!EU.isVisible || EU.visibility <= 0 || 0 === (EU.layerMask & UU.layerMask)) continue;
          if (EU.BtU) {
            this.warned.has(EU.name) || (this.warned.add(EU.name), console.warn(`Lite: thin instance base ${EU.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: PU
          } = EU;
          if (!PU) continue;
          EU.computeWorldMatrix(), this.selected++;
          const TU = this.listsFor(EU.renderingGroupId);
          for (const UU of nE(PU)) {
            const RU = bE(UU);
            RU && (RU.needAlphaBlendingForMesh(EU) ? TU.transparent.push(UU) : TU.opaque.push(UU))
          }
        }
      }
      GJ(UU, RU) {
        if (RU === UU.index >= 0) return;
        UU.steady = null;
        const gU = this.enabled;
        if (RU) UU.index = gU.length, gU.push(UU);
        else {
          const RU = gU.pop();
          RU !== UU && (gU[UU.index] = RU, RU.index = UU.index), UU.index = -1
        }
      }
      listsFor(UU) {
        let RU = this.groups.get(UU);
        return RU || (RU = {
          opaque: [],
          transparent: []
        }, this.groups.set(UU, RU)), RU
      }
    }
    var YE = gU(39111);
    class BE {
      constructor() {
        this.bundle = null, this.stale = !0, this.WT = new Set
      }
    }
    class VE {
      constructor(UU, RU, gU) {
        this.device = UU, this.slots = RU, this.host = gU, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new BE, this.Gw = new BE, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Lp, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(UU) {
          var RU, gU;
          let tU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (RU = null === (gU = globalThis.navigator) || void 0 === gU ? void 0 : gU.userAgent) && void 0 !== RU ? RU : "";
          const pU = UU.adapterInfo;
          return "intel" === (null === pU || void 0 === pU ? void 0 : pU.vendor) && "gen-12lp" === pU.architecture && tU.includes("Windows")
        }(UU), (0, YE.J)(this.direct)
      }
      Am() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, YE.J)(this.directThisFrame)
      }
      add(UU, RU, gU, tU) {
        let pU = this.records.get(UU);
        return pU || (pU = this.createRecord(UU), this.records.set(UU, pU)), pU.recorded && XE(pU, RU) || (this.bundleOf(pU).stale = !0), this.place(pU, RU, gU, tU), pU
      }
      bundleOf(UU) {
        return UU.Gw ? this.Gw : this.main
      }
      addAgain(UU, RU, gU, tU) {
        UU.recorded || (this.bundleOf(UU).stale = !0), this.place(UU, RU, gU, tU)
      }
      place(UU, RU, gU, tU) {
        UU.seen = this.frame, UU.Gw && null === UU.draw && (this.Gw.stale = !0), UU.draw = RU, this.drawn++, gU && this.slots.write(UU.slot, gU, tU) && (this.slotsFrom = Math.min(this.slotsFrom, UU.slot), this.slotsTo = Math.max(this.slotsTo, UU.slot));
        const pU = this.args,
          EU = 5 * UU.slot;
        pU[EU] === RU.count && pU[EU + 1] === RU.instances && pU[EU + 2] === RU.first || (pU[EU] = RU.count, pU[EU + 1] = RU.instances, pU[EU + 2] = RU.first, this.argsDirty = !0, this.Gw.stale ||= UU.Gw)
      }
      Om() {
        for (const UU of this.records.values()) UU.seen !== this.frame && (UU.draw && (UU.draw = null, this.args[5 * UU.slot + 1] = 0, this.argsDirty = !0, this.Gw.stale ||= UU.Gw), this.frame - UU.seen > 120 && (this.records.delete(UU.unit), this.freeSlots.push(UU.slot), UU.recorded && (this.bundleOf(UU).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(UU) {
        for (const RU of this.records.values()) RU.draw && RU.seen === this.frame && !RU.Gw && UU(RU.draw, this.slots.data, RU.slot * yt / 4)
      }
      resourceDestroyed(UU) {
        this.main.stale ||= this.main.WT.has(UU), this.Gw.stale ||= this.Gw.WT.has(UU)
      }
      execute(UU, RU, gU) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(UU, RU, gU, "direct"), this.drawn;
        const tU = this.host.sceneGroup(RU);
        if (!tU) return this.main.bundle = null, this.Gw.bundle = null, this.recordedSceneGroup = null, this.encode(UU, RU, gU, "direct"), this.drawn;
        this.recordedTarget === gU && this.recordedSceneGroup === tU || (this.recordedTarget = gU, this.recordedSceneGroup = tU, this.main.stale = !0, this.Gw.stale = !0);
        const pU = this.main,
          EU = this.Gw;
        let PU = !1;
        !pU.stale && pU.bundle || (pU.bundle = this.record(RU, gU, tU, "indirect"), PU = !0);
        const TU = (0, YE.j)();
        return (EU.stale || this.rangedEpoch !== TU) && (this.rangedEpoch = TU, EU.bundle = this.drawsRanged() ? this.record(RU, gU, tU, "Gw") : this.noRangedBundle(), PU = !0), PU && (this.bundles = EU.bundle ? [pU.bundle, EU.bundle] : [pU.bundle]), UU.executeBundles(this.bundles), UU.setBindGroup(0, tU), this.drawn
      }
      record(UU, RU, gU, tU) {
        const pU = this.device.createRenderBundleEncoder({
          label: "Gw" === tU ? "thin-bases-ranged" : "thin-bases",
          colorFormats: UU._colorFormat ? [UU._colorFormat] : [],
          depthStencilFormat: UU._depthStencilFormat,
          sampleCount: UU._sampleCount
        });
        return pU.setBindGroup(0, gU), this.encode(pU, UU, RU, tU), pU.finish()
      }
      noRangedBundle() {
        for (const UU of this.records.values()) UU.Gw && (UU.recorded = !1);
        return this.Gw.WT.clear(), this.Gw.stale = !1, null
      }
      drawsRanged() {
        for (const UU of this.records.values())
          if (UU.Gw && UU.draw) return !0;
        return !1
      }
      encode(UU, RU, gU, tU) {
        const pU = [];
        for (const qU of this.records.values()) "direct" !== tU && qU.Gw !== ("Gw" === tU) || (qU.recorded = !1, qU.draw && pU.push(qU));
        pU.sort(vE);
        const EU = "direct" === tU ? null : "Gw" === tU ? this.Gw : this.main;
        null === EU || void 0 === EU || EU.WT.clear(), this.binder.reset();
        let PU = !1;
        for (const qU of pU) {
          var TU;
          const pU = qU.draw,
            KU = this.host.pipelineFor(pU, RU, gU);
          if (!KU) {
            this.host.pipelineCompiling(pU, gU) ? PU = !0 : EU && this.keep(qU, pU, EU.WT);
            continue
          }
          let cU;
          if (qU.Gw && "indirect" !== tU) {
            const UU = qU.unit.owner;
            cU = "direct" === tU && (0, YE.v)(UU) || (0, YE.n)(UU) || void 0
          }
          if (EU && this.keep(qU, pU, EU.WT), 0 === (null === (TU = cU) || void 0 === TU ? void 0 : TU.count)) continue;
          this.binder.bind(UU, pU, KU, this.slots.bindGroup, qU.slot * yt);
          const GU = 5 * qU.slot;
          if ("indirect" === tU) {
            pU.indexBuffer ? UU.drawIndexedIndirect(this.argsBuffer, 4 * GU) : UU.drawIndirect(this.argsBuffer, 4 * GU);
            continue
          }
          const jU = this.args;
          cU ? rE(UU, null !== pU.indexBuffer, jU, GU, cU) : pU.indexBuffer ? UU.drawIndexed(jU[GU], jU[GU + 1], jU[GU + 2], 0, 0) : UU.draw(jU[GU], jU[GU + 1], jU[GU + 2], 0)
        }
        EU && (EU.stale = PU)
      }
      keep(UU, RU, gU) {
        UU.recorded = !0, UU.pipelineKey = RU.pipelineKey, UU.materialGroup = RU.material.bindGroup, UU.vertexBuffers.length = 0, UU.vertexBuffers.push(...RU.vertexBuffers), UU.vertexOffsets = RU.vertexOffsets, UU.indexBuffer = RU.indexBuffer, UU.indexFormat = RU.indexFormat;
        for (const tU of RU.vertexBuffers) gU.add(tU);
        RU.indexBuffer && gU.add(RU.indexBuffer), gU.add(RU.material.buffer);
        for (const tU of RU.material.bound) tU && gU.add(tU)
      }
      createRecord(UU) {
        let RU = this.freeSlots.pop();
        return void 0 === RU && (RU = this.slotCount++, this.grow()), {
          unit: UU,
          slot: RU,
          Gw: void 0 !== (0, YE.n)(UU.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.Gw.stale = !0), 5 * this.slotCount > this.args.length) {
          const UU = new Uint32Array(2 * this.args.length);
          UU.set(this.args), this.args = UU, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function rE(UU, RU, gU, tU, pU) {
      const EU = gU[tU + 1],
        PU = pU.data;
      for (let TU = 0; TU < pU.count; TU++) {
        const pU = Math.min(PU[2 * TU], EU),
          qU = Math.min(PU[2 * TU + 1], EU - pU);
        0 !== qU && (RU ? UU.drawIndexed(gU[tU], qU, gU[tU + 2], 0, pU) : UU.draw(gU[tU], qU, gU[tU + 2], pU))
      }
    }

    function XE(UU, RU) {
      if (UU.pipelineKey !== RU.pipelineKey || UU.materialGroup !== RU.material.bindGroup || UU.indexBuffer !== RU.indexBuffer || UU.indexFormat !== RU.indexFormat || UU.vertexOffsets !== RU.vertexOffsets || UU.vertexBuffers.length !== RU.vertexBuffers.length) return !1;
      for (let gU = 0; gU < UU.vertexBuffers.length; gU++)
        if (UU.vertexBuffers[gU] !== RU.vertexBuffers[gU]) return !1;
      return !0
    }

    function vE(UU, RU) {
      return lp(UU.draw, RU.draw)
    }
    const dE = new WeakMap,
      HE = {
        depth: !1,
        sunShadow: !1
      };

    function SE(UU, RU) {
      let gU = dE.get(UU);
      gU || (gU = new Map, dE.set(UU, gU));
      const tU = `${RU.depth?"-depth":""}${RU.sunShadow?"-shadow":""}${RU.shadowMask?"-mask":""}`;
      let pU = gU.get(tU);
      if (!pU) {
        const EU = [{
          binding: bR.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: bR.h
          }
        }, {
          binding: bR.s,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        RU.depth && EU.push({
          binding: bR.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), RU.sunShadow && EU.push(... function() {
          const UU = GPUShaderStage.FRAGMENT,
            RU = bR.o;
          return [{
            binding: RU.uniform,
            visibility: UU,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: RU.Wj,
            visibility: UU,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: RU.special,
            visibility: UU,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: RU.volume,
            visibility: UU,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: RU.sampler,
            visibility: UU,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: RU.entities,
            visibility: UU,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: RU.entityGrids,
            visibility: UU,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), RU.shadowMask && EU.push({
          binding: bR.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), pU = UU.createBindGroupLayout({
          label: `${RU.depth?"terrain-":""}shader-pack-inputs${tU}`,
          entries: EU
        }), gU.set(tU, pU)
      }
      return pU
    }

    function sE(UU) {
      return SE(UU, HE)
    }

    function yE(UU, RU) {
      if (!RU) return !1;
      const gU = (0, oR.d)(UU);
      return !!gU && vg(gU, RU)
    }

    function kE(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Kt(RU)) return [];
      return [SE(UU, {
        depth: pt(RU.packVariant),
        sunShadow: yE(RU.packVariant, gU),
        shadowMask: tU
      })]
    }
    class FE {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = UU, this.sunShadow = gU, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(bR.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = UU.createBuffer({
          label: "shader-pack-inputs",
          size: bR.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const tU = (0, bR.v)(RU);
        this.textures = UU.createBuffer({
          label: "shader-pack-textures",
          size: tU.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), UU.queue.writeBuffer(this.textures, 0, tU), this.bindGroup = UU.createBindGroup({
          label: "shader-pack-inputs",
          layout: sE(UU),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: bR.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: bR.s,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(UU, RU, gU) {
        (0, bR.B)(this.data, {
          seconds: UU.seconds(),
          lit: gU,
          renderOffset: UU.renderOffset(),
          M_: UU.M_(),
          eyePosition: RU,
          shadowDirection: UU.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const tU = RU ? this.sunShadow : null;
        if ((RU || gU) && !tU) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!UU && !tU) return this.bindGroup;
        (UU && UU !== this.depthView || gU && gU !== this.maskView) && (this.depthView = null !== UU && void 0 !== UU ? UU : this.depthView, this.maskView = null !== gU && void 0 !== gU ? gU : this.maskView, this.groups.clear());
        const pU = (UU ? 1 : 0) | (tU ? 2 : 0) | (gU ? 4 : 0);
        let EU = this.groups.get(pU);
        if (!EU) {
          const RU = this.entries();
          UU && RU.push({
            binding: bR.n,
            resource: UU
          }), tU && RU.push(...tU.entries()), gU && RU.push({
            binding: bR.r,
            resource: gU
          }), EU = this.device.createBindGroup({
            label: `${UU||gU?"terrain-":""}shader-pack-inputs${UU?"-depth":""}${tU?"-shadow":""}${gU?"-mask":""}`,
            layout: SE(this.device, {
              depth: !!UU,
              sunShadow: !!tU,
              shadowMask: !!gU
            }),
            entries: RU
          }), this.groups.set(pU, EU)
        }
        return EU
      }
      bind(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        UU.setBindGroup(bR.d, this.bindGroupFor(RU, gU, tU))
      }
    }

    function iE(UU, RU, gU) {
      if (UU.gpuVersion === RU.gpuBuffersVersion) return !0;
      let tU;
      do {
        if (tU = RU.gpuBuffersVersion, !AE(UU, RU, gU)) return !1
      } while (RU.gpuBuffersVersion !== tU);
      return UU.gpuVersion = tU, UU.fitInstances = 0, !0
    }

    function AE(UU, RU, gU) {
      let tU = null;
      for (let EU = 0; EU < UU.slotData.length; EU++) {
        var pU;
        const PU = UU.slotData[EU],
          TU = PU ? RU.gpuBuffer(PU) : gU;
        if (!TU) return !1;
        PU && UU.layout.instanceEnds[EU] < 0 && RU.cover(PU, Number.POSITIVE_INFINITY), UU.buffers[EU] = TU;
        const qU = UU.R6[EU] + (PU ? RU.gpuOffset(PU) : 0);
        qU !== (null !== (pU = tU) && void 0 !== pU ? pU : UU.offsets)[EU] && (tU ??= UU.offsets.slice(), tU[EU] = qU), UU.ends[EU] = PU ? RU.gpuEnd(PU) : TU.size
      }
      return tU && (UU.offsets = tU), !0
    }

    function zE(UU, RU, gU, tU) {
      if (RU <= UU.fitInstances) return null;
      const {
        layout: pU,
        ends: EU,
        offsets: PU,
        slotData: TU,
        R6: qU
      } = UU;
      let KU = !1;
      for (let cU = 0; cU < pU.buffers.length; cU++) {
        const UU = pU.instanceEnds[cU];
        if (UU < 0) continue;
        const tU = (RU - 1) * pU.buffers[cU].arrayStride + UU;
        if (EU[cU] - PU[cU] < tU) return {
          index: cU,
          needed: tU
        };
        const GU = TU[cU];
        GU && gU.cover(GU, qU[cU] + tU) && (KU = !0)
      }
      return KU && iE(UU, gU, tU), UU.fitInstances = RU, null
    }
    var ME = gU(37346),
      DE = gU(37377);
    const LE = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      NE = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      lE = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      OE = `((vertexInputs.aPackedLightLevels >> 16u) | ${qR.e.placed}u)`,
      UP = "u32(vertexInputs.aShaderPackItem.x)",
      RP = `${qR.e.lifeform}u`;

    function gP(UU) {
      return "item" === UU.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const tP = "bloxdSpEnchant",
      pP = "floor(finalWorld[3].xyz)";

    function EP(UU, RU, gU) {
      return "placed" === RU.kind && UU.reads[gU].includes("bloxdFragmentBlockPosition")
    }

    function PP(UU, RU) {
      let [gU, tU] = UU;
      return gU === RU.point && tU === RU.code
    }

    function TP(UU, RU) {
      var gU, tU, pU;
      const EU = null === (gU = UU.find((UU => UU.texture))) || void 0 === gU ? void 0 : gU.texture,
        PU = null === (tU = UU.find((UU => UU.enchantTier))) || void 0 === tU ? void 0 : tU.enchantTier,
        TU = null === (pU = UU.find((UU => UU.overlay))) || void 0 === pU ? void 0 : pU.overlay,
        qU = TU ? RU.filter((UU => PP(UU, TU))).length : 0;
      return TU && 1 === qU ? {
        texture: EU,
        overlay: TU,
        enchantTier: PU
      } : {
        texture: EU,
        enchantTier: PU
      }
    }

    function qP(UU) {
      if ("item" === UU.kind) {
        return {
          vertexFlags: `(${UP} & 0xffffu)`,
          varying: "vPackItem",
          value: UP,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return UU.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: OE,
        varying: "vPackFlags",
        value: OE,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function KP(UU) {
      return "lifeform" === UU.kind ? RP : "0u"
    }

    function cP(UU) {
      return !!UU.BLOXD_PLUGIN_ENCHANTMENT
    }

    function GP(UU, RU) {
      const {
        enchantTier: gU
      } = RU;
      return gU && cP(RU.defines) && "lifeform" === RU.kind && eP(UU, "enchantTier") ? gU : null
    }

    function jP(UU, RU) {
      return cP(RU.defines) && eP(UU, "enchantSpeed")
    }

    function uP(UU) {
      const {
        overlay: RU,
        defines: gU
      } = UU;
      if (!RU || !gU.DIFFUSE) return null;
      const tU = gU.VERTEXCOLOR || gU.INSTANCESCOLOR && gU.INSTANCES;
      return `vec4f(${RU.colour}.rgb * uniforms.vDiffuseInfos.y${tU?" * fragmentInputs.vColor.rgb":""}, ${RU.colour}.a)`
    }
    const CP = "fragmentInputs.vPackTexture";

    function hP(UU) {
      const {
        atlas: RU,
        defines: gU,
        texture: tU
      } = UU;
      if (RU || !gU.DIFFUSE) return null;
      if (tU) return {
        texture: "diffuseSampler",
        ...tU
      };
      const pU = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===gU.DIFFUSEDIRECTUV?"vMainUV1":2===gU.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== UU.kind) return pU;
      if (!gU.BLOXD_PLUGIN_ANIMATED) return {
        ...pU,
        id: CP
      };
      const EU = IU.d.WGSL,
        PU = (0, IU.Hb)(EU, "uAnimStatesNum"),
        TU = (0, IU.fb)(EU, (0, ME.h)(EU), PU),
        qU = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${PU})`,
        layers: [TU],
        uv: `vec2f(${qU}.x, ${qU}.y * ${PU} - ${TU})`,
        levelUv: qU,
        id: CP
      }
    }

    function QP(UU, RU) {
      return "box" === RU.kind && !!UU.hooks.surface && null !== hP(RU)
    }

    function eP(UU, RU) {
      return UU.reads.fragment.includes(RU)
    }

    function WP(UU) {
      return !!UU.BLOXD_LIGHTING && !UU.BLOXD_UNLIT
    }

    function fP(UU, RU, gU, tU) {
      const pU = UU.filter((UU => {
        let [gU, tU] = UU;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === gU && tU === RU
      }));
      if (1 !== pU.length) throw new Error(`A model program for shader packs has ${0===pU.length?"no":"more than one"} ${tU} code before fog (lite/modelShaderPack.ts)`);
      return UU.map((UU => UU === pU[0] ? [UU[0], gU] : UU))
    }

    function xP(UU, RU, gU, tU) {
      const {
        hooks: pU
      } = UU, {
        kind: EU,
        defines: PU
      } = RU, TU = [...gU];
      var qU;
      RU.atlas && pU.surface && TU.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Fg("atlasIdxIn")]), "item" === EU && TU.push(["CUSTOM_VERTEX_DEFINITIONS", (0, IU.f)(IU.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), QP(UU, RU) && TU.push(["CUSTOM_VERTEX_DEFINITIONS", (0, IU.f)(IU.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (qU = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${yg}[min(u32(${qU}) - 1u, arrayLength(&${yg}) - 1u)], ${qU} > 0.5);\n`)]);
      const KU = qP(RU);
      KU && (pU.surface || pU.light) && TU.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${KU.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${KU.varying} = ${KU.value};`]);
      let cU = tU;
      if (EP(UU, RU, "fragment") && (TU.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${pP});`]), cU = [...cU, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), eP(UU, "localPosition") && TU.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${gP(RU)};`]), cP(PU) && pU.surface) {
        jP(UU, RU) && TU.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const gU = GP(UU, RU);
        gU && TU.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${gU});`]);
        const tU = (0, IU.ub)(IU.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        cU = [...fP(cU, (0, DE.h)(IU.d.WGSL), tU, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, DE.e)(tP)]]
      }
      const {
        overlay: GU
      } = RU;
      GU && uP(RU) && pU.surface && (cU = cU.filter((UU => !PP(UU, GU))));
      const jU = pU.light ? function(UU) {
        return "placed" === UU.kind ? {
          name: "terrain",
          engine: (0, JR.K)(IU.d.WGSL),
          pack: (0, JR.cb)(IU.d.WGSL)
        } : UU.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, JR.G)(IU.d.WGSL),
          pack: (0, JR.Z)(IU.d.WGSL)
        } : null
      }(RU) : null;
      if (jU && (cU = fP(cU, jU.engine, jU.pack, `${jU.name} light`), "placed" !== EU && WP(PU))) {
        const UU = PU.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, IU.Hb)(IU.d.WGSL, "uEntityLightLevels") : (0, IU.Sb)(IU.d.WGSL, "aLightLevels");
        TU.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${JR.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, JR.bb)(IU.d.WGSL, UU)])
      }
      return {
        vertexCode: TU,
        fragmentCode: cU
      }
    }

    function mP(UU, RU, gU, tU) {
      return rg(UU, RU, gU, tU, "model")
    }
    const IP = "\t@builtin(position) position: vec4f,\n";

    function JP(UU, RU) {
      const gU = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(UU)[0];
      return `${gU}${RU}${UU.slice(gU.length)}`
    }

    function wP(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: pU
      } = RU, EU = vg(RU, tU), {
        kind: PU,
        defines: TU
      } = gU, qU = function(UU, RU) {
        var gU, tU, pU;
        const {
          defines: EU
        } = RU, PU = qP(RU), TU = !!EU.FOG, qU = cP(EU), KU = null !== (gU = null === PU || void 0 === PU ? void 0 : PU.enchantTier) && void 0 !== gU ? gU : GP(UU, RU) ? "fragmentInputs.vPackEnchantTier" : "0u", cU = "lifeform" === RU.kind && !EU.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (tU = null === PU || void 0 === PU ? void 0 : PU.vertexFlags) && void 0 !== tU ? tU : KP(RU),
          vertexLocalPosition: gP(RU),
          flags: null !== (pU = null === PU || void 0 === PU ? void 0 : PU.flags) && void 0 !== pU ? pU : KP(RU),
          normal: "normalW",
          alpha: cU ? "alpha * baseColor.a" : "alpha",
          alphaOut: cU ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: TU ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: TU ? "1.0 - fog" : "0.0",
          enchantTier: KU,
          enchantColour: qU ? `${tP}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: jP(UU, RU) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: eP(UU, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: uP(RU)
        }
      }(RU, gU), KU = UU.textures.filter((UU => /^textureAtlas\d+$/.test(UU.name))).length, cU = gU.atlas && KU > 0 ? {
        count: KU,
        layers: gU.atlas.layers,
        width: gU.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: UU.material.slots.has("uAnimDataPerTex") ? (RU, gU) => bt(RU, gU, function(UU) {
          const RU = UU.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            HG: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: UU => `uniforms.uAnimDataPerTex[${UU}]${RU}`
          }
        }(UU)) : null
      } : null, GU = "placed" === PU ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", jU = null !== cU && void 0 !== cU ? cU : hP(gU), uU = function(UU, gU) {
        let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,bR.x)()}${Hg(RU,gU)}${tU}${Ag(UU)}${Yg}${GU}${RU.code}`
      };
      let {
        vertex: CU,
        fragment: hU
      } = UU;
      const QU = Mg(pU, qU);
      if (QU) {
        const UU = EP(RU, gU, "vertex") ? `\tbloxdSpCell = ${pP};\n` : "";
        CU = mP(CU, LE, `${UU}${QU.slice(1)}${LE}`, "vertex")
      }
      const eU = `${Sg(RU,EU,function(UU,RU){return RU.TWOSIDEDLIGHTING?UU:`select(-(${UU}), ${UU}, fragmentInputs.frontFacing)`}(qU.normal,TU),qU.flags)}${Dg(pU,RU.strict,RU.program,jU,qU)}`;
      eU && (hU = mP(hU, NE, `${eU.slice(1)}${NE}`, "surface")), EU && RU.sunShadow && !TU.TWOSIDEDLIGHTING && (hU = mP(hU, IP, `${IP}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const WU = lg(pU);
      if (WU) {
        const UU = Ng(pU, WP(TU), !0, qU);
        hU = mP(hU, lE, `${UU}${WU.slice(1)}${lE}`, "light")
      }
      const fU = QP(RU, gU) ? kg : "";
      return {
        ...UU,
        vertex: JP(CU, uU(cU, !1, fU)),
        fragment: JP(hU, uU(jU, EU))
      }
    }
    const nP = {
      name: "earthSky",
      uniqueId: -1
    };
    class bP {
      constructor(UU) {
        this.resources = UU, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const UU of this.instances.values()) UU.released = !0, this.resources.destroyBuffer(UU.buffer);
        this.instances.clear()
      }
    }

    function oP(UU) {
      return UU.failed && null !== UU.packGroup
    }
    class ZP {
      constructor(UU, RU, gU) {
        this.device = UU, this.resources = RU, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.B5 = new aE, this.modelMeshes = new ZE, this.thinBundle = void 0, this.binder = new Lp, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new eE((UU => this.modelSlot(UU).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, KR.b)("Lite: "), this.renderStates = new jE(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (UU, RU) => this.keepSteady(UU, RU), this.lists = new Np(this.modelMeshes, this.B5, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new qE(RU, this.warnOnce, ((UU, RU, gU) => this.programWithModel(UU, RU, gU)), oP), this.vertexLayouts = new mE(RU, UU.limits, this.warnOnce), this.sceneLayout = RR(UU), this.frameLayout = UU.createBindGroupLayout({
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
        }), this.frameBuffer = UU.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new wE(UU, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = UU.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new VE(UU, new wE(UU, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (UU, RU, gU) => this.pipelineFor(UU, RU, gU),
          pipelineCompiling: (UU, RU) => !UU.program.failed && !1 !== this.pipelines.get(`${UU.pipelineKey}|${RU}`),
          sceneGroup: UU => {
            const RU = gU(UU);
            return RU || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), RU
          }
        }), RU.onDestroy = UU => {
          this.thinBundle.resourceDestroyed(UU)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pU = {
          order: UU,
          isTransparent: RU,
          _direct: !RU,
          bind: (UU, RU) => this.createBinding(pU, RU, gU, tU)
        };
        return pU
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(UU, RU, gU) {
        var tU;
        let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = RU, this.drawDefines.view = RU, this.thinBundle.Am(), this.writeFrameUniforms();
        const EU = null !== (tU = null === pU || void 0 === pU ? void 0 : pU.defineFor("model")) && void 0 !== tU ? tU : 0;
        this.drawDefines.modelPackVariant = EU, pU && 0 !== EU && (this.packInputs ??= new FE(this.device, pU.textureLayers(), this.sunShadow), this.packInputs.write(pU, RU.eye, pU.Ih())), this.lists.clear(), this.slotCount = 0;
        const PU = UU.activeCamera;
        this.B5.select(PU, this.keepSteadyBase), this.modelMeshes.select(PU, RU), gU && this.pushEarthSky(gU), this.lists.collect(UU), this.thinBundle.Om(), this.uploadMeshSlots()
      }
      pushDraws(UU, RU, gU, tU, pU, EU) {
        let PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const TU = EU.length;
        for (let qU = 0; qU < gU; qU++) {
          const gU = RU[qU];
          let TU = this.retainedDraw(UU, gU, tU, pU);
          if (void 0 === TU && (TU = this.drawFor(UU, gU, tU, pU), this.retain(gU, TU)), TU) {
            const UU = gU.owner,
              RU = PU ? PU[qU] : -1;
            TU.slotOffset = RU < 0 ? this.writeMeshSlot(UU.getWorldMatrix().m, UU.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[RU], 16 * RU), EU.push(TU)
          }
        }
        return EU.length - TU
      }
      bundleDraws(UU, RU, gU) {
        let tU = 0;
        for (const pU of RU) {
          let RU = this.retainedDraw(UU, pU, gU, !1);
          const EU = void 0 !== RU;
          if (void 0 === RU && (RU = this.drawFor(UU, pU, gU, !1), this.retain(pU, RU)), RU) {
            const UU = pU.owner,
              gU = this.thinBundle.add(pU, RU, UU.getWorldMatrix().m, UU.visibility);
            EU && this.steadyFrom(pU, RU, gU), tU++
          }
        }
        return tU
      }
      steadyFrom(UU, RU, gU) {
        const tU = UU.owner,
          pU = this.B5.base(tU),
          EU = tU.material,
          {
            drawState: PU,
            instance: TU
          } = RU.inputs.retained;
        if (!pU || !EU || 1 !== UU.parts.materials.length || bE(UU) !== EU) return;
        const qU = pU.steady ??= {
          unit: UU,
          material: EU,
          visibility: 1,
          draw: RU,
          record: gU,
          drawState: PU,
          instance: TU,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        qU.unit = UU, qU.material = EU, qU.visibility = tU.visibility, qU.draw = RU, qU.record = gU, qU.drawState = PU, qU.instance = TU, qU.bindGroup = TU.bindGroup, qU.gpuVersion = this.resources.gpuBuffersVersion, qU.fitInstances = RU.inputs.fitInstances, qU.worldFlag = tU.getWorldMatrix().updateFlag, qU.handedFrame = this.frame
      }
      keepSteady(UU, RU) {
        const gU = UU.steady;
        if (gU.handedFrame !== this.frame - 1 || (this.frame + gU.phase) % 8 === 0) return !1;
        const tU = UU.mesh,
          {
            unit: pU,
            draw: EU,
            instance: PU,
            drawState: TU
          } = gU,
          qU = tU.forcedInstanceCount || tU.I6;
        if (!tU.isVisible || tU.BtU || tU.visibility !== gU.visibility || 0 === (tU.layerMask & RU.layerMask) || tU.material !== gU.material || 0 !== tU.renderingGroupId || tU.hasVertexAlpha || !this.drawDefines.definesHold(TU, pU, TU.instancing) || gU.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(EU.inputs, pU, TU.instancing, EU.program) || EU.program.failed || PU.released || qU <= 0 || qU > gU.fitInstances) return !1;
        if (PU.frame !== this.frame && this.bindMaterial(PU, this.modelUniforms.refreshModelUniforms(tU.aZ(), PU, PU.model, this.view)), !PU.bindable || PU.bindGroup !== gU.bindGroup) return !1;
        const KU = tU.computeWorldMatrix(),
          cU = KU.updateFlag !== gU.worldFlag;
        return gU.worldFlag = KU.updateFlag, EU.instances = qU, this.thinBundle.addAgain(gU.record, EU, cU ? KU.m : null, gU.visibility), gU.handedFrame = this.frame, this.B5.drawn++, !0
      }
      retainedDraw(UU, RU, gU, tU) {
        const pU = this.inputs.get(RU),
          EU = null === pU || void 0 === pU ? void 0 : pU.retained;
        if (!pU || !EU) return;
        const {
          drawState: PU,
          program: TU,
          instance: qU,
          instancing: KU
        } = EU, cU = RU.owner;
        if (gE(cU) !== KU) return;
        const GU = this.instanceCount(cU, KU);
        if (GU <= 0) return null;
        if (qU.released || TU.failed || PU.program !== TU || !this.drawDefines.programCurrent(PU, RU, KU, gU) || !this.inputsStamped(pU, RU, KU, TU) || cU.isUnIndexed !== EU.unIndexed || this.indexKey(RU) !== EU.indexData) return;
        if (EU.indexBuffer && EU.gpuVersion !== this.resources.gpuBuffersVersion) {
          const UU = this.resources.gpuBuffer(EU.indexData);
          if (!UU) return;
          EU.indexBuffer = UU, EU.gpuVersion = this.resources.gpuBuffersVersion
        }
        let jU = !1;
        if (qU.frame !== this.frame && (jU = this.modelUniforms.refreshModelUniforms(UU, qU, qU.model, this.view)), !this.bindMaterial(qU, jU) || !this.withGpuBuffers(pU) || !this.instanceBuffersFit(cU.name, pU, GU)) return null;
        const uU = this.makeDraw(TU, pU, this.renderStates.renderState(PU.model, cU, tU, pU.state), qU, GU);
        return this.setRange(uU, RU, EU.indexBuffer, EU.indexData), uU
      }
      retain(UU, RU) {
        const gU = this.drawDefines.drawStates.get(UU);
        if (!RU || !gU || gU.program !== RU.program) {
          const RU = this.inputs.get(UU);
          return void(RU && (RU.retained = null))
        }
        const tU = UU.owner,
          pU = gU.instancing,
          EU = this.indexKey(UU),
          PU = RU.inputs.retained;
        PU ? (PU.drawState = gU, PU.instancing = pU, PU.program = RU.program, PU.instance = RU.material, PU.indexData = EU, PU.unIndexed = tU.isUnIndexed, PU.indexBuffer = RU.indexBuffer, PU.gpuVersion = this.resources.gpuBuffersVersion) : RU.inputs.retained = {
          drawState: gU,
          instancing: pU,
          program: RU.program,
          instance: RU.material,
          indexData: EU,
          unIndexed: tU.isUnIndexed,
          indexBuffer: RU.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(UU, RU, gU, tU) {
        const pU = RU.owner,
          EU = bE(RU);
        if (!EU) return null;
        const PU = EU.getClassName();
        let TU = null;
        if (function(UU) {
            return "LinesMesh" === UU.getClassName()
          }(pU)) {
          if (! function(UU) {
              return "ShaderMaterial" === UU.getClassName() && "color" === UU.shaderPath
            }(EU)) return this.warnOnce(`lines:${PU}`, `A LinesMesh with a ${PU} is not drawn yet (${EU.name})`), null;
          TU = pU
        } else if ("StandardMaterial" !== PU && "LiteMaterial" !== PU) return this.warnOnce(`class:${PU}`, `${PU} is not drawn yet (${EU.name})`), null;
        const qU = gE(pU),
          KU = this.instanceCount(pU, qU);
        if (KU <= 0) return null;
        const cU = TU ? this.lineProgramFor(pU, gU, qU) : this.drawDefines.programFor(UU, RU, EU, gU, qU);
        if (!cU || cU.failed) return null;
        const GU = TU ? null : this.drawDefines.drawStates.get(RU).model,
          jU = GU ? this.modelInstance(GU, cU) : this.materialInstance(pU, cU);
        let uU = !1;
        if (jU.frame !== this.frame && (TU ? WU(jU.ubo, TU) : uU = this.modelUniforms.refreshModelUniforms(UU, jU, jU.model, this.view)), !this.bindMaterial(jU, uU)) return null;
        const CU = this.meshInputs(RU, cU, qU);
        if (!CU || !this.instanceBuffersFit(pU.name, CU, KU)) return null;
        const hU = this.indexKey(RU);
        let QU = null;
        if (hU && !pU.isUnIndexed && (QU = this.resources.gpuBuffer(hU), !QU)) return null;
        const eU = this.renderStates.renderState(null !== GU && void 0 !== GU ? GU : EU, pU, tU, CU.state, TU ? "line-list" : "triangle-list"),
          fU = this.makeDraw(cU, CU, eU, jU, KU);
        return this.setRange(fU, RU, QU, hU), fU
      }
      indexKey(UU) {
        const RU = PE(UU);
        return RU ? this.resources.modelIndex(RU) : null
      }
      setRange(UU, RU, gU, tU) {
        gU && (UU.indexBuffer = gU, UU.indexFormat = this.resources.indexFormat(tU));
        const pU = 4 * RU.range + (gU ? 0 : 2);
        UU.unit = RU, UU.first = RU.parts.hu[pU], UU.count = RU.parts.hu[pU + 1]
      }
      makeDraw(UU, RU, gU, tU, pU) {
        RU.state !== gU && (RU.state = gU, RU.pipelineKey = `${UU.id}|${RU.layout.key}|${gU.key}`, RU.pipeline = null);
        const EU = RU.draw ??= {
          program: UU,
          inputs: RU,
          pipelineKey: "",
          layout: RU.layout,
          state: gU,
          material: tU,
          slotOffset: 0,
          vertexBuffers: RU.buffers,
          vertexOffsets: RU.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: pU,
          unit: null
        };
        return EU.program = UU, EU.pipelineKey = RU.pipelineKey, EU.state = gU, EU.material = tU, EU.vertexOffsets = RU.offsets, EU.indexBuffer = null, EU.instances = pU, EU
      }
      instanceCount(UU, RU) {
        switch (RU) {
          case "thin":
            return UU.forcedInstanceCount || UU.I6;
          case "instanced":
            return this.prepareInstances(UU);
          case "none":
            return 1
        }
      }
      prepareInstances(UU) {
        const RU = function(UU, RU) {
          const gU = RU._userInstancedBuffersStorage,
            tU = UU.batchUploads.get(RU);
          if (tU) {
            var pU;
            if (tU.layout === (null !== (pU = null === gU || void 0 === gU ? void 0 : gU.interleavedKinds) && void 0 !== pU ? pU : null)) return tU;
            tU.release()
          }
          return new AU(UU, RU, gU)
        }(this.resources, UU);
        return RU.frame !== this.frame && RU.pack(UU, this.modelMeshes.instanceBatch(UU), this.modelMeshes.worlds, this.frame), RU.count
      }
      programWithModel(UU, RU, gU) {
        const tU = this.modelSlot(UU),
          pU = KE(tU, UU, gU),
          EU = this.drawDefines.modelPackKind(UU),
          PU = EU ? function(UU, RU, gU, tU) {
            const pU = (0, nU.D)(UU, JU.h.name),
              EU = [];
            for (const {
                feature: qU,
                state: KU,
                active: cU
              }
              of UU.features) {
              var PU, TU;
              const UU = cU ? null === (PU = (TU = (0, cR.j)(qU)).Fu) || void 0 === PU ? void 0 : PU.call(TU, KU) : void 0;
              UU && EU.push(UU)
            }
            return {
              kind: RU,
              atlas: null !== pU && void 0 !== pU && pU.active ? (0, JU.c)(pU.state) : null,
              defines: gU,
              ...TP(EU, tU)
            }
          }(UU, EU, RU, tU.fragmentCode) : null;
        if (PU && function(UU) {
            const RU = UU.defines;
            return (null === UU.atlas || !!RU.DIFFUSE && 1 === RU.DIFFUSEDIRECTUV) && !!RU.NORMAL && !RU.REFLECTION && !RU.EMISSIVEASILLUMINATION && !RU.LINKEMISSIVEWITHDIFFUSE
          }(PU)) {
          const gU = this.modelPackProgram(UU, RU, `${pU}#${EU}#sp${this.drawDefines.modelPackVariant}`, tU, PU);
          if (gU && !gU.failed) return gU
        }
        const TU = this.programs.get(pU);
        if (TU || this.unbuildable.has(pU)) return null !== TU && void 0 !== TU ? TU : null;
        let qU;
        try {
          qU = qp({
            defines: pE(RU),
            vertexCode: tU.vertexCode,
            fragmentCode: tU.fragmentCode,
            pluginUniforms: tU.pluginUniforms
          })
        } catch (KU) {
          return this.unbuildable.add(pU), this.warnOnce(`build:${pU}`, `could not build a program for ${UU.name}: ${String(KU)}`), null
        }
        return this.createProgram(pU, qU, "standard")
      }
      modelPackProgram(UU, RU, gU, tU, pU) {
        const EU = this.programs.get(gU);
        if (EU || this.unbuildable.has(gU)) return null !== EU && void 0 !== EU ? EU : null;
        const PU = this.drawDefines.modelPackVariant;
        let TU;
        try {
          const UU = function(UU) {
              return (0, oR.c)(UU, "model")
            }(PU),
            gU = xP(UU, pU, tU.vertexCode, tU.fragmentCode);
          TU = wP(qp({
            defines: pE(RU),
            ...gU,
            pluginUniforms: tU.pluginUniforms
          }), UU, pU, !!this.sunShadow)
        } catch (cU) {
          return this.unbuildable.add(gU), this.warnOnce(`build:${gU}`, `could not build a shader pack program for ${UU.name}, which draws without the pack: ${String(cU)}`), null
        }
        const qU = yE(PU, !!this.sunShadow),
          KU = {
            group: this.packInputs.bindGroupFor(null, qU),
            layout: SE(this.device, {
              depth: !1,
              sunShadow: qU
            })
          };
        return this.createProgram(gU, TU, function(UU) {
          return `standard-sp${UU}`
        }(PU), KU)
      }
      lineProgramFor(UU, RU, gU) {
        const tU = eU(UU, gU, RU, this.view);
        let pU = this.linePrograms.get(tU);
        var EU;
        return pU || (pU = this.createProgram(`lines#${tU}`, (EU = function(UU) {
          const RU = new Map;
          for (let gU = 0; gU < KU.length; gU++) UU & 1 << gU && RU.set(KU[gU], !0);
          return RU
        }(tU), jp({
          defines: EU,
          vertex: cp,
          fragment: Gp,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(tU, pU)), pU
      }
      createProgram(UU, RU, gU) {
        var tU;
        let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const EU = this.nextProgramId++,
          PU = `${gU}-${EU}`,
          TU = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          qU = [{
            binding: 0,
            visibility: TU,
            buffer: {
              type: "uniform"
            }
          }];
        for (const GU of RU.textures) qU.push({
          binding: GU.binding,
          visibility: TU,
          texture: {
            viewDimension: GU.dimension
          }
        }), qU.push({
          binding: GU.samplerBinding,
          visibility: TU,
          sampler: {}
        });
        const KU = this.device.createBindGroupLayout({
            label: PU,
            entries: qU
          }),
          cU = {
            key: UU,
            id: EU,
            kind: gU,
            program: RU,
            vertex: this.device.createShaderModule({
              label: `${PU}-vertex`,
              code: RU.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${PU}-fragment`,
              code: RU.fragment
            }),
            materialLayout: KU,
            pipelineLayout: this.device.createPipelineLayout({
              label: PU,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, KU, ...pU ? [pU.layout] : []]
            }),
            packGroup: null !== (tU = null === pU || void 0 === pU ? void 0 : pU.group) && void 0 !== tU ? tU : null,
            failed: !1
          };
        return this.programs.set(UU, cU), cU
      }
      writeFrameUniforms() {
        const UU = this.frameUniforms;
        QE(this.view, UU), this.device.queue.writeBuffer(this.frameBuffer, 0, UU)
      }
      materialInstance(UU, RU) {
        let gU = this.materials.get(UU);
        if (!gU) {
          const RU = new Map;
          this.materials.set(UU, RU), UU.HZ.addOnce((() => {
            for (const UU of RU.values()) UU.released = !0, this.resources.destroyBuffer(UU.buffer);
            this.materials.delete(UU)
          })), gU = RU
        }
        let tU = gU.get(RU.key);
        return tU || (tU = this.newMaterialInstance(UU, null, RU), gU.set(RU.key, tU)), tU
      }
      modelInstance(UU, RU) {
        const gU = this.modelSlot(UU);
        let tU = gU.instances.get(RU.key);
        return tU || (tU = this.newMaterialInstance(UU, UU, RU), gU.instances.set(RU.key, tU)), tU
      }
      modelSlot(UU) {
        let RU = UU.gpu[oU.g.lite];
        return RU || (RU = new bP(this.resources), UU.gpu[oU.g.lite] = RU), RU
      }
      newMaterialInstance(UU, RU, gU) {
        const tU = gU.program.material.floats,
          pU = new Float32Array(tU),
          EU = new Map;
        return {
          owner: UU,
          model: RU,
          program: gU,
          data: pU,
          uploaded: new Float32Array(tU).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${UU.name}-uniforms`,
            size: Math.max(16, 4 * tU),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: EU,
          ubo: new hE(gU.program.material.slots, pU, EU),
          bindGroup: null,
          bound: new Array(2 * gU.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(UU) {
        var RU;
        const gU = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: Wp + fp,
            fragment: Wp + xp,
            attributes: [],
            material: ep,
            textures: []
          }, "earthSky"),
          tU = this.earthSkyUniforms ??= this.newMaterialInstance(nP, null, gU);
        this.earthSkyFrom !== UU && (this.earthSkyFrom = UU, tU.data.fill(0)), Zp(tU.ubo, UU, this.view);
        const pU = this.vertexInputs(gU, nP, "earthSky", gU, null);
        if (gU.failed || !pU || !this.bindMaterial(tU, !1)) return;
        const EU = null !== (RU = pU.state) && void 0 !== RU ? RU : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          PU = this.makeDraw(gU, pU, EU, tU, 1);
        PU.count = Cp.length;
        const TU = ap(UU, this.view);
        PU.slotOffset = this.writeMeshSlot(TU, 1), this.lists.skyDraws.push(PU)
      }
      uploadIfChanged(UU) {
        const {
          data: RU,
          uploaded: gU
        } = UU;
        for (let tU = 0; tU < RU.length; tU++)
          if (RU[tU] !== gU[tU]) return gU.set(RU), void this.device.queue.writeBuffer(UU.buffer, 0, RU)
      }
      bindMaterial(UU, RU) {
        return UU.frame !== this.frame && (UU.frame = this.frame, RU || this.uploadIfChanged(UU), UU.bindable = this.bindTextures(UU)), UU.bindable
      }
      bindTextures(UU) {
        const {
          program: RU,
          bound: gU
        } = UU, tU = RU.program.textures;
        let pU = !UU.bindGroup,
          EU = !0;
        for (let PU = 0; PU < tU.length; PU++) {
          const RU = UU.textures.get(tU[PU].name),
            TU = RU ? this.resources.boundTexture(RU) : null;
          TU ? gU[2 * PU] === TU.view && gU[2 * PU + 1] === TU.sampler || (gU[2 * PU] = TU.view, gU[2 * PU + 1] = TU.sampler, pU = !0) : (RU || UU.ubo.expected.has(tU[PU].name) || this.warnOnce(`texture:${UU.owner.name}:${tU[PU].name}`, `${UU.owner.name} has no ${tU[PU].name}`), EU = !1)
        }
        if (!EU) return pU && (UU.bindGroup = null), !1;
        if (pU) {
          const pU = [{
            binding: 0,
            resource: {
              buffer: UU.buffer
            }
          }];
          for (let UU = 0; UU < tU.length; UU++) pU.push({
            binding: tU[UU].binding,
            resource: gU[2 * UU]
          }), pU.push({
            binding: tU[UU].samplerBinding,
            resource: gU[2 * UU + 1]
          });
          UU.bindGroup = this.device.createBindGroup({
            label: `${UU.owner.name}-material`,
            layout: RU.materialLayout,
            entries: pU
          })
        }
        return !0
      }
      writeMeshSlot(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, UU, RU, gU), this.slotCount++ * yt
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(UU, RU, gU, tU, pU) {
        let EU = this.inputs.get(UU);
        if (!EU || EU.program !== tU || !IE(RU, EU, this.resources, pU)) {
          var PU;
          if (EU = null !== (PU = this.vertexLayouts.resolveInputs(RU, gU, tU, pU)) && void 0 !== PU ? PU : void 0, !EU) return null;
          this.inputs.set(UU, EU)
        }
        return this.withGpuBuffers(EU)
      }
      meshInputs(UU, RU, gU) {
        const tU = this.inputs.get(UU);
        if (tU && this.inputsStamped(tU, UU, gU, RU)) return this.withGpuBuffers(tU);
        const pU = UU.owner,
          EU = PE(UU),
          PU = this.vertexInputs(UU, pU, pU.name, RU, EU);
        return PU && (PU.geometry = TE(UU), PU.instanceLayout = this.drawDefines.instanceLayout(pU, gU)), PU
      }
      inputsStamped(UU, RU, gU, tU) {
        return function(UU, RU, gU, tU) {
          return UU.program === gU && UU.geometry === TE(RU) && UU.instanceLayout === tU
        }(UU, RU, tU, this.drawDefines.instanceLayout(RU.owner, gU))
      }
      withGpuBuffers(UU) {
        return iE(UU, this.resources, this.zeroBuffer) ? UU : null
      }
      instanceBuffersFit(UU, RU, gU) {
        const tU = zE(RU, gU, this.resources, this.zeroBuffer);
        if (tU) {
          const pU = RU.ends[tU.index] - RU.offsets[tU.index] + RU.R6[tU.index];
          return this.warnOnce(`overrun:${UU}`, `${UU} draws ${gU} instances from a ${pU}-byte buffer (${tU.needed} needed)`), !1
        }
        return !0
      }
      createBinding(UU, RU, gU, tU) {
        const pU = `${RU._colorFormat}|${RU._depthStencilFormat}|${RU._depthCompare}|${RU._sampleCount}`,
          EU = PR(this.device, RU);
        if (UU === this.skyLastRenderable) {
          let gU = null;
          return {
            renderable: UU,
            pipeline: EU,
            draw: UU => gU ? this.drawSky(UU, RU, pU, gU) : 0,
            update: UU => {
              gU = UU
            }
          }
        }
        return {
          renderable: UU,
          pipeline: EU,
          draw: UU => (tU ? tU.execute(UU, RU, pU) : 0) + this.drawList(UU, RU, pU, gU)
        }
      }
      drawSky(UU, RU, gU, tU) {
        const pU = this.lists.skyDraws,
          EU = pU.length > 0;
        if (EU) {
          var PU;
          const gU = (null !== (PU = RU._depthCompare) && void 0 !== PU ? PU : gR).startsWith("greater") ? 0 : 1;
          UU.setViewport(0, 0, tU.targetWidth, tU.targetHeight, gU, gU)
        }
        const TU = this.drawList(UU, RU, gU, pU);
        return EU && UU.setViewport(0, 0, tU.targetWidth, tU.targetHeight, 0, 1), TU
      }
      drawList(UU, RU, gU, tU) {
        let pU = 0;
        const EU = this.binder;
        EU.reset();
        for (const PU of tU) {
          const tU = this.pipelineFor(PU, RU, gU);
          tU && (EU.bind(UU, PU, tU, this.meshSlots.bindGroup, PU.slotOffset), PU.indexBuffer ? UU.drawIndexed(PU.count, PU.instances, PU.first, 0, 0) : UU.draw(PU.count, PU.instances, PU.first, 0), pU++)
        }
        return pU
      }
      pipelineFor(UU, RU, gU) {
        var tU, pU;
        if (UU.program.failed) return null;
        const EU = UU.inputs;
        if (EU.pipeline && EU.pipelineTarget === gU) return EU.pipeline;
        const PU = `${UU.pipelineKey}|${gU}`,
          TU = this.pipelines.get(PU);
        if (void 0 !== TU) return TU && (EU.pipeline = TU, EU.pipelineTarget = gU), TU || null;
        this.pipelines.set(PU, null);
        const {
          program: qU,
          layout: KU,
          state: cU
        } = UU, GU = {
          label: `standard-${qU.id}`,
          layout: qU.pipelineLayout,
          vertex: {
            module: qU.vertex,
            entryPoint: "main",
            buffers: KU.buffers
          },
          fragment: NU({
            module: qU.fragment,
            entryPoint: "main"
          }, RU, cU.blend, cU.colourWrite),
          depthStencil: RU._depthStencilFormat ? {
            format: RU._depthStencilFormat,
            depthCompare: null !== (tU = null !== (pU = cU.depthCompare) && void 0 !== pU ? pU : RU._depthCompare) && void 0 !== tU ? tU : gR,
            depthWriteEnabled: cU.depthWrite,
            depthBias: cU.depthBias,
            depthBiasSlopeScale: cU.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: RU._sampleCount
          },
          primitive: {
            topology: cU.topology,
            frontFace: cU.frontFace,
            cullMode: cU.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(GU).then((UU => {
          this.compiling--, this.pipelines.set(PU, UU)
        }), (UU => {
          this.compiling--, this.reportFailure(qU, PU, UU)
        })), null
      }
      forEachSunShadowCaster(UU) {
        const RU = this.caster,
          gU = (gU, tU, pU) => {
            const EU = gU.unit && function(UU) {
              const RU = UU.material.model;
              return null !== RU && (RU.lifeform || RU.item) && RU.castsSunShadow && "triangle-list" === UU.state.topology
            }(gU) ? PE(gU.unit) : null;
            if (!EU) return;
            const PU = gU.unit.owner;
            switch (RU.geometry = EU, RU.skip = PU.noSunShadowVertices, RU.indexed = null !== gU.indexBuffer, RU.first = gU.first, RU.count = gU.count, RU.FG = tU, RU.worldAt = pU, RU.instances = null, RU.instanceCount = 1, RU.thin = !1, gE(PU)) {
              case "thin": {
                const UU = PU._thinInstanceDataStorage.matrixData;
                if (!UU) return;
                RU.instances = UU, RU.instanceCount = Math.min(gU.instances, UU.length / 16), RU.thin = !0;
                break
              }
              case "instanced": {
                const UU = this.resources.batchUploads.get(PU);
                if (!UU || UU.frame !== this.frame || !this.writeBatchCasters(UU)) return;
                break
              }
            }
            UU(RU)
          };
        for (const tU of this.lists.opaqueDraws) gU(tU, this.meshSlots.data, tU.slotOffset / 4);
        this.thinBundle.forEachDrawn(gU)
      }
      writeBatchCasters(UU) {
        const {
          caster: RU
        } = this, gU = UU.packedMatrices, tU = UU.count;
        RU.instances = gU, RU.instanceCount = tU;
        let pU = -1;
        for (let EU = 0; EU < tU; EU++) {
          const RU = aP(UU.packedRowMesh(EU));
          RU && pU < 0 ? (this.casterWorlds.length < 16 * tU && (this.casterWorlds = new Float32Array(gU.length)), this.casterWorlds.set(gU.subarray(0, 16 * EU)), pU = EU) : !RU && pU >= 0 && (this.casterWorlds.set(gU.subarray(16 * EU, 16 * EU + 16), 16 * pU), pU++)
        }
        return pU >= 0 && (RU.instances = this.casterWorlds, RU.instanceCount = pU), RU.instanceCount > 0
      }
      async reportFailure(UU, RU, gU) {
        const tU = [];
        let pU = !0;
        for (const [EU, PU] of [
            ["vertex", UU.vertex],
            ["fragment", UU.fragment]
          ]) {
          const UU = await PU.getCompilationInfo();
          for (const RU of UU.messages) pU &&= "error" !== RU.type, tU.push(`${EU}:${RU.lineNum}:${RU.linePos} ${RU.type}: ${RU.message}`)
        }
        if (pU && !UU.packGroup) return this.pipelines.set(RU, !1), console.error(`Lite: pipeline ${RU} failed`, gU), void Dp("mesh", UU.kind, gU);
        UU.failed || (UU.failed = !0, console.error(`Lite: program ${UU.id} failed`, gU, tU.join("\n"), {
          program: UU.program,
          key: UU.key
        }), Dp("mesh", UU.kind, gU, pU ? null : tU[0]))
      }
    }

    function aP(UU) {
      var RU, gU;
      const tU = null === (RU = UU.kY) || void 0 === RU || null === (gU = RU.aShaderPackItem) || void 0 === gU ? void 0 : gU.x;
      return void 0 !== tU && 0 !== (tU & qR.g)
    }
    var YP = gU(41062),
      BP = gU(41069),
      VP = gU(41071),
      rP = gU(41032);
    const XP = [0, 3, 1, 4, 2, 5];

    function vP(UU, RU, gU, tU, pU) {
      const EU = gU[0].width;
      try {
        return pU ? function(UU, RU, gU) {
          const tU = (0, rP.d)(UU, gU, gU, 6);
          for (let pU = 0; pU < 6; pU++)(0, rP.g)(UU, tU, pU, RU[XP[pU]], {
            invertY: !1
          });
          return tU.texture
        }(UU, gU, EU) : function(UU, RU, gU, tU) {
          const pU = UU.createTexture({
            label: "sink-cube",
            size: {
              width: gU,
              height: gU,
              depthOrArrayLayers: 6
            },
            format: tU,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let EU = 0; EU < 6; EU++) UU.queue.copyExternalImageToTexture({
            source: RU[XP[EU]]
          }, {
            texture: pU,
            origin: {
              x: 0,
              y: 0,
              z: EU
            }
          }, {
            width: gU,
            height: gU
          });
          return pU
        }(RU, gU, EU, 1 === tU ? "r8unorm" : "rgba8unorm")
      } finally {
        dP(gU)
      }
    }

    function dP(UU) {
      for (const RU of null !== UU && void 0 !== UU ? UU : []) null === RU || void 0 === RU || RU.close()
    }
    async function HP(UU) {
      const RU = [],
        gU = [];
      if (await Promise.all(UU.map(((UU, tU) => (RU[tU] = null, UU.then((UU => {
          RU[tU] = UU
        }), (UU => {
          gU.push(UU)
        })))))), gU.length > 0) throw dP(RU), gU[0];
      return RU
    }
    class SP {
      constructor(UU) {
        this.hG = UU, this.starts = [], this.lengths = [], this.used = 0, UU > 0 && (this.starts.push(0), this.lengths.push(UU))
      }
      allocate(UU) {
        const {
          starts: RU,
          lengths: gU
        } = this;
        for (let tU = 0; tU < RU.length; tU++) {
          if (gU[tU] < UU) continue;
          const pU = RU[tU];
          return gU[tU] === UU ? (RU.splice(tU, 1), gU.splice(tU, 1)) : (RU[tU] += UU, gU[tU] -= UU), this.used += UU, pU
        }
        return -1
      }
      free(UU, RU) {
        this.used -= RU;
        const gU = Math.min(UU + RU, this.hG);
        gU > UU && this.release(UU, gU - UU)
      }
      grow(UU) {
        const RU = this.hG;
        this.hG = UU, this.release(RU, UU - RU)
      }
      truncate(UU) {
        const {
          starts: RU,
          lengths: gU
        } = this;
        for (let tU = RU.length - 1; tU >= 0 && RU[tU] + gU[tU] > UU; tU--) RU[tU] >= UU ? (RU.splice(tU, 1), gU.splice(tU, 1)) : gU[tU] = UU - RU[tU];
        this.hG = UU
      }
      release(UU, RU) {
        const {
          starts: gU,
          lengths: tU
        } = this;
        let pU = 0,
          EU = gU.length;
        for (; pU < EU;) {
          const RU = pU + EU >> 1;
          gU[RU] < UU ? pU = RU + 1 : EU = RU
        }
        const PU = pU,
          TU = PU > 0 && gU[PU - 1] + tU[PU - 1] === UU,
          qU = PU < gU.length && UU + RU === gU[PU];
        TU && qU ? (tU[PU - 1] += RU + tU[PU], gU.splice(PU, 1), tU.splice(PU, 1)) : TU ? tU[PU - 1] += RU : qU ? (gU[PU] = UU, tU[PU] += RU) : (gU.splice(PU, 0, UU), tU.splice(PU, 0, RU))
      }
    }
    const sP = 256;
    class yP {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = UU, this.onReplaced = RU, this.mergeGap = gU, this.gpu = null, this.bytes = void 0, this.hu = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const pU = Math.max(sP, Math.ceil(tU / sP) * sP);
        this.bytes = new Uint8Array(pU), this.hu = new SP(pU / sP)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(UU) {
        return Math.max(1, Math.ceil(UU / sP)) * sP
      }
      allocate(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU;
        const tU = yP.slotBytes(UU),
          pU = tU / sP;
        let EU = this.hu.allocate(pU);
        EU < 0 && (this.grow(this.hu.hG + pU), EU = this.hu.allocate(pU));
        const PU = EU * sP;
        return this.growTo(PU + Math.max(gU, tU)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, PU, PU + tU), RU && this.bytes.set(new Uint8Array(RU.buffer, RU.byteOffset, Math.min(RU.byteLength, tU)), PU), this.markDirty(PU, PU + tU), PU
      }
      growTo(UU) {
        const RU = Math.ceil(UU / sP);
        RU > this.hu.hG && this.grow(RU)
      }
      free(UU, RU) {
        this.freed.push(UU, RU)
      }
      write(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (tU <= 0) return;
        this.bytes.set(new Uint8Array(RU.buffer, gU, tU), UU);
        let EU = UU + tU;
        if (pU) {
          const RU = UU + 4 * Math.ceil(tU / 4);
          this.bytes.fill(0, EU, RU), EU = RU
        }
        this.markDirty(UU, EU)
      }
      move(UU, RU, gU) {
        this.bytes.copyWithin(RU, UU, UU + gU), this.markDirty(RU, RU + gU)
      }
      flush() {
        for (const RU of this.retired) this.onReplaced(RU), RU.destroy();
        this.retired.length = 0;
        const UU = this.dirtyStarts.length;
        if (UU > 0) {
          const {
            dirtyStarts: RU,
            dirtyEnds: gU,
            order: tU
          } = this;
          tU.length = UU;
          for (let TU = 0; TU < UU; TU++) tU[TU] = TU;
          UU > 1 && tU.sort(((UU, gU) => RU[UU] - RU[gU]));
          const pU = this.mergeGap;
          let EU = RU[tU[0]],
            PU = gU[tU[0]];
          for (let TU = 1; TU < UU; TU++) {
            const UU = tU[TU];
            RU[UU] - PU <= pU ? PU = Math.max(PU, gU[UU]) : (this.send(EU, PU), EU = RU[UU], PU = gU[UU])
          }
          this.send(EU, PU), RU.length = 0, gU.length = 0
        }
        this.holding = !1
      }
      Om() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const UU = this.freed;
        for (let RU = 0; RU < UU.length; RU += 2) this.hu.free(UU[RU] / sP, UU[RU + 1] / sP);
        UU.length = 0
      }
      send(UU, RU) {
        this.device.queue.writeBuffer(this.gpu, UU, this.bytes.buffer, UU, RU - UU);
        for (const gU of this.replaced) {
          const tU = Math.min(RU, gU.size);
          tU > UU && this.device.queue.writeBuffer(gU, UU, this.bytes.buffer, UU, tU - UU)
        }
      }
      markDirty(UU, RU) {
        UU &= -4, RU = RU + 3 & -4, this.holding ? (this.dirtyStarts.push(UU), this.dirtyEnds.push(RU)) : this.send(UU, RU)
      }
      grow(UU) {
        const RU = this.hu.hG,
          gU = Math.max(2 * RU, UU),
          tU = new Uint8Array(gU * sP);
        tU.set(this.bytes);
        const pU = this.gpu;
        this.gpu = this.createGpu(tU.byteLength), this.bytes = tU, this.hu.grow(gU), pU && (this.replaced.push(pU), this.onReplaced(pU)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, RU * sP)
      }
      createGpu(UU) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: UU,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function kP(UU) {
      return Array.isArray(UU) ? new Float32Array(UU) : UU
    }

    function FP(UU, RU, gU, tU, pU) {
      const EU = Bp(pU),
        PU = Math.min(pU, tU.byteLength);
      if (EU === PU && tU.byteOffset % 4 === 0) return void UU.queue.writeBuffer(RU, gU, tU.buffer, tU.byteOffset, EU);
      const TU = new Uint8Array(EU);
      TU.set(new Uint8Array(tU.buffer, tU.byteOffset, PU)), UU.queue.writeBuffer(RU, gU, TU)
    }

    function iP(UU, RU, gU) {
      const tU = "linear",
        pU = "nearest";
      let EU = pU,
        PU = pU,
        TU = "nearest",
        qU = !RU;
      switch (UU) {
        case 11:
          EU = tU, PU = tU;
          break;
        case 3:
          EU = tU, PU = tU, TU = RU ? "linear" : "nearest";
          break;
        case 8:
          TU = RU ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          PU = tU;
          break;
        case 6:
          PU = tU, TU = RU ? "linear" : "nearest";
          break;
        case 7:
          PU = tU, qU = !0;
          break;
        case 9:
          EU = tU;
          break;
        case 10:
          EU = tU, TU = RU ? "linear" : "nearest";
          break;
        case 2:
          EU = tU, PU = tU, gU > 1 ? (TU = "linear", qU = !1) : qU = !0;
          break;
        case 12:
          EU = tU, qU = !0;
          break;
        default:
          qU = !0
      }
      return gU > 1 && !qU ? {
        magFilter: tU,
        minFilter: tU,
        mipmapFilter: "linear",
        maxAnisotropy: gU
      } : {
        magFilter: EU,
        minFilter: PU,
        mipmapFilter: TU,
        ...qU ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function AP(UU) {
      return 0 === UU ? "clamp-to-edge" : 2 === UU ? "mirror-repeat" : "repeat"
    }
    class zP {
      constructor(UU, RU) {
        let {
          vertexArena: gU = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = UU, this.device = RU, this.buffers = new WeakMap, this.LO = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = gU ? new yP(RU, (UU => {
          var RU;
          null === (RU = this.onDestroy) || void 0 === RU || RU.call(this, UU), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var UU;
        null === (UU = this.arena) || void 0 === UU || UU.flush()
      }
      endUploadFrame() {
        var UU;
        null === (UU = this.arena) || void 0 === UU || UU.Om()
      }
      vertexBufferCreated(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gU ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(UU);
        const pU = kP(RU);
        UU.hG = pU.byteLength, this.buffers.set(UU, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: gU && null !== this.arena,
          pending: pU,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: tU
        })
      }
      vertexBufferUpdated(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        const pU = this.buffers.get(UU);
        if (!pU) return;
        const EU = kP(RU),
          PU = void 0 === tU ? EU.byteLength : Math.min(tU, EU.byteLength);
        this.update(pU, EU, gU, PU)
      }
      vertexBufferFloatsUpdated(UU, RU, gU, tU) {
        const pU = this.buffers.get(UU);
        if (!pU) return;
        const EU = gU * Float32Array.BYTES_PER_ELEMENT,
          PU = (tU - gU) * Float32Array.BYTES_PER_ELEMENT;
        pU.slot >= 0 && PU > 0 && EU + PU <= pU.size ? this.writeSlot(pU, EU, RU, RU.byteOffset + EU, PU, !1) : pU.gpu && PU > 0 && EU + PU <= pU.gpu.size ? this.device.queue.writeBuffer(pU.gpu, EU, RU.buffer, RU.byteOffset + EU, PU) : this.update(pU, RU.subarray(gU, tU), EU, PU)
      }
      indexBufferCreated(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(UU);
        const tU = function(UU) {
          if (UU instanceof Uint16Array || UU instanceof Uint32Array) return UU;
          for (let RU = 0; RU < UU.length; RU++)
            if (UU[RU] >= 65535) return new Uint32Array(UU);
          return new Uint16Array(UU)
        }(RU);
        UU.is32Bits = 4 === tU.BYTES_PER_ELEMENT, UU.hG = tU.byteLength, this.buffers.set(UU, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: tU,
          ownsPending: tU !== RU,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: gU
        })
      }
      bufferDeleted(UU) {
        const RU = this.buffers.get(UU);
        null !== RU && void 0 !== RU && RU.gpu ? (this.destroyBuffer(RU.gpu), this.gpuBuffersVersion++) : RU && RU.slot >= 0 && (this.arena.free(RU.slot, RU.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(UU)
      }
      update(UU, RU, gU, tU) {
        if (UU.slot >= 0) this.updateSlot(UU, RU, gU, tU);
        else if (UU.gpu) {
          if (gU + Bp(tU) > UU.gpu.size) {
            const RU = this.device.createBuffer({
                label: UU.label,
                size: Bp(Math.max(2 * UU.gpu.size, gU + tU)),
                usage: UU.usage | GPUBufferUsage.COPY_SRC
              }),
              pU = this.device.createCommandEncoder();
            pU.copyBufferToBuffer(UU.gpu, 0, RU, 0, UU.gpu.size), this.device.queue.submit([pU.finish()]), this.destroyBuffer(UU.gpu), this.gpuBuffersVersion++, UU.gpu = RU
          }
          FP(this.device, UU.gpu, gU, RU, tU)
        } else {
          const EU = new Uint8Array(RU.buffer, RU.byteOffset, tU),
            PU = UU.pending;
          if (PU && UU.ownsPending && gU + tU <= PU.byteLength) new Uint8Array(PU.buffer, PU.byteOffset, PU.byteLength).set(EU, gU);
          else if (PU && 0 === gU && tU === PU.byteLength && RU.byteLength === tU) UU.pending = RU, UU.ownsPending = !1;
          else {
            var pU;
            const RU = new Uint8Array(Math.max(null !== (pU = null === PU || void 0 === PU ? void 0 : PU.byteLength) && void 0 !== pU ? pU : 0, gU + tU));
            PU && RU.set(new Uint8Array(PU.buffer, PU.byteOffset, PU.byteLength)), RU.set(EU, gU), UU.pending = RU, UU.ownsPending = !0
          }
        }
      }
      updateSlot(UU, RU, gU, tU) {
        const pU = this.arena;
        gU + Bp(tU) > UU.size && (UU.size = Bp(Math.max(2 * UU.size, gU + tU)), pU.growTo(UU.slot + UU.size), this.gpuBuffersVersion++), 0 === tU ? this.writeSlot(UU, gU, DP, 0, 4, !1) : this.writeSlot(UU, gU, RU, RU.byteOffset, tU, !0)
      }
      writeSlot(UU, RU, gU, tU, pU, EU) {
        const PU = RU + (EU ? Bp(pU) : pU);
        PU > UU.slotBytes && this.moveSlot(UU, PU), this.arena.write(UU.slot + RU, gU, tU, pU, EU)
      }
      moveSlot(UU, RU) {
        const gU = this.arena,
          tU = yP.slotBytes(Math.max(RU, Math.min(2 * UU.slotBytes, UU.size))),
          pU = gU.allocate(tU, null, UU.size);
        gU.move(UU.slot, pU, UU.slotBytes), gU.free(UU.slot, UU.slotBytes), UU.slot = pU, UU.slotBytes = tU, this.gpuBuffersVersion++
      }
      cover(UU, RU) {
        const gU = this.buffers.get(UU);
        if (!gU || gU.slot < 0) return !1;
        const tU = Math.min(RU, gU.size);
        return !(tU <= gU.slotBytes) && (this.moveSlot(gU, tU), !0)
      }
      destroyBuffer(UU) {
        var RU;
        null === (RU = this.onDestroy) || void 0 === RU || RU.call(this, UU), UU.destroy()
      }
      gpuBuffer(UU) {
        const RU = this.buffers.get(UU);
        if (!RU) return null;
        if (RU.slot >= 0) return this.arena.buffer;
        if (RU.arena && RU.pending) {
          const UU = RU.pending,
            gU = this.arena;
          return RU.size = Bp(UU.byteLength), RU.slotBytes = yP.slotBytes(function(UU) {
            const RU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength);
            let gU = RU.length;
            if (UU.byteOffset % 4 === 0) {
              for (; gU % 4 !== 0 && 0 === RU[gU - 1];) gU--;
              if (gU % 4 === 0) {
                const RU = new Uint32Array(UU.buffer, UU.byteOffset, gU / 4);
                let tU = RU.length;
                for (; tU > 0 && 0 === RU[tU - 1];) tU--;
                gU = 4 * tU
              }
            }
            for (; gU > 0 && 0 === RU[gU - 1];) gU--;
            return gU
          }(UU)), RU.slot = gU.allocate(RU.slotBytes, UU, RU.size), RU.pending = null, gU.buffer
        }
        if (!RU.gpu && RU.pending) {
          const UU = RU.pending;
          RU.gpu = this.device.createBuffer({
            label: RU.label,
            size: Bp(UU.byteLength),
            usage: RU.usage
          }), FP(this.device, RU.gpu, 0, UU, UU.byteLength), RU.pending = null
        }
        return RU.gpu
      }
      gpuOffset(UU) {
        var RU, gU;
        const tU = null !== (RU = null === (gU = this.buffers.get(UU)) || void 0 === gU ? void 0 : gU.slot) && void 0 !== RU ? RU : -1;
        return tU < 0 ? 0 : tU
      }
      gpuEnd(UU) {
        var RU, gU;
        const tU = this.buffers.get(UU);
        return tU ? tU.slot >= 0 ? tU.slot + tU.size : null !== (RU = null === (gU = tU.gpu) || void 0 === gU ? void 0 : gU.size) && void 0 !== RU ? RU : 0 : 0
      }
      vertexInput(UU, RU, gU) {
        var tU, pU, EU, PU;
        return null !== (tU = null !== (pU = gU && this.modelInput(gU, RU)) && void 0 !== pU ? pU : null === (EU = null !== (PU = this.LO.get(UU)) && void 0 !== PU ? PU : this.batchUploads.get(UU)) || void 0 === EU ? void 0 : EU.inputs[RU]) && void 0 !== tU ? tU : null
      }
      modelInput(UU, RU) {
        const gU = this.geometrySlot(UU);
        let tU = gU.inputs.get(RU);
        if (void 0 === tU) {
          const pU = UU.vertexAttributes.find((UU => UU.kind === RU));
          tU = pU ? new zU(this.modelKey(gU, pU.data, !1), pU.offset, pU.stride, pU.components, !1, pU.glType, pU.isNormalized) : null, gU.inputs.set(RU, tU)
        }
        return tU
      }
      modelIndex(UU) {
        return UU.indexData && this.modelKey(this.geometrySlot(UU), UU.indexData, !0)
      }
      geometrySlot(UU) {
        let RU = UU.gpu[oU.g.lite];
        if (!RU) {
          const gU = new Map,
            tU = () => {
              for (const UU of gU.values()) this.bufferDeleted(UU)
            },
            pU = UU => {
              const RU = gU.get(UU);
              RU && this.vertexBufferUpdated(RU, UU)
            };
          RU = {
            keys: gU,
            inputs: new Map,
            release: tU,
            updated: pU
          }, UU.gpu[oU.g.lite] = RU
        }
        return RU
      }
      modelKey(UU, RU, gU) {
        let tU = UU.keys.get(RU);
        if (!tU) {
          if (gU) {
            const UU = {
              hG: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(UU, RU, "model-indices"), tU = UU
          } else tU = {
            hG: 0
          }, this.vertexBufferCreated(tU, RU, !1, "model-vertices");
          UU.keys.set(RU, tU)
        }
        return tU
      }
      indexFormat(UU) {
        return UU.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(UU, RU) {
        --UU.refs > 0 || (this.releaseTexture(UU), dP(UU.images), null !== RU && this.textures.delete(RU))
      }
      load(UU, RU) {
        const gU = RU.decoded = async function(UU) {
          if ("cube" === UU.kind) return async function(UU) {
            if (6 !== UU.length) throw new Error(`${UU.length} files where six faces were expected`);
            const RU = await HP(UU.map((UU => Hp(UU)))),
              gU = RU[0].width;
            return HP(RU.map((async UU => {
              if (UU.width === gU && UU.height === gU) return UU;
              try {
                return await createImageBitmap(UU, {
                  ...vp,
                  resizeWidth: gU,
                  resizeHeight: gU
                })
              } finally {
                UU.close()
              }
            })))
          }(UU.files);
          if ("data" === UU.kind && UU.data) return [await createImageBitmap(new Blob([UU.data]), vp)];
          return [await Hp(MP(UU))]
        }(UU.source).then((UU => {
          0 === RU.refs ? dP(UU) : RU.images = UU
        }));
        this.track(RU, MP(UU.source), gU, (() => {
          RU.wanted && !RU.failed && RU.refs > 0 && this.upload(UU, RU)
        }))
      }
      canvasUpdated(UU, RU, gU) {
        const {
          state: tU
        } = this.textureSlot(UU);
        tU.dynamicSource = {
          invertY: RU,
          premultiplied: gU
        }, tU.dynamic && this.pushDynamic(UU.source, tU)
      }
      async atlasArray(UU, RU, gU) {
        const tU = await yp(this.device, UU, RU, gU);
        if (!this.atlasBindings.has(tU)) {
          const UU = (0, YP.c)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(tU, {
            view: tU.texture.createView({
              dimension: "2d-array"
            }),
            sampler: UU
          })
        }
        return tU
      }
      boundTexture(UU) {
        const RU = this.atlasBindings.get(UU);
        if (RU) return RU;
        const gU = UU;
        if (gU.released) return null;
        const tU = this.textureSlot(gU, !0),
          {
            state: pU
          } = tU;
        if (!pU.view && (pU.wanted = !0, pU.loading || pU.failed || this.upload(gU, pU), !pU.view)) return null;
        const EU = this.chosenSampler(gU, tU),
          PU = tU.bound;
        return PU && PU.view === pU.view && PU.sampler === EU ? PU : (tU.bound = {
          view: pU.view,
          sampler: EU
        }, tU.bound)
      }
      textureLoaded(UU) {
        var RU, gU;
        return null !== (RU = null === (gU = UU.gpu[oU.g.lite]) || void 0 === gU ? void 0 : gU.state.decoded) && void 0 !== RU ? RU : null
      }
      textureFailed(UU) {
        var RU;
        return !0 === (null === (RU = UU.gpu[oU.g.lite]) || void 0 === RU ? void 0 : RU.state.failed)
      }
      chosenSampler(UU, RU) {
        const {
          samplingMode: gU,
          wrapU: tU,
          wrapV: pU
        } = UU.sampler, EU = RU.state.hasMips, PU = function(UU, RU) {
          const {
            bilinear: gU,
            trilinear: tU
          } = oU.h;
          return !RU && UU !== gU || 11 !== UU && UU !== tU && UU !== gU ? 1 : 4
        }(gU, EU), TU = RU.sampler;
        if (TU && TU.samplingMode === gU && TU.hasMips === EU && TU.anisotropy === PU && TU.wrapU === tU && TU.wrapV === pU) return TU.sampler;
        const qU = this.samplerFor(gU, EU, PU, tU, pU);
        return RU.sampler = {
          samplingMode: gU,
          hasMips: EU,
          anisotropy: PU,
          wrapU: tU,
          wrapV: pU,
          sampler: qU
        }, qU
      }
      releaseTexture(UU) {
        var RU, gU;
        UU.view && (null === (gU = this.onDestroy) || void 0 === gU || gU.call(this, UU.view));
        null === (RU = UU.destroy) || void 0 === RU || RU.call(UU)
      }
      textureSlot(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = UU.gpu[oU.g.lite];
        if (gU) return gU;
        const tU = function(UU) {
          let {
            source: RU,
            sampler: gU
          } = UU;
          return "canvas" === RU.kind ? null : `${RU.kind}|${MP(RU)}|${gU.noMipmap}|${gU.samplingMode}|${gU.invertY}`
        }(UU);
        let pU = null === tU ? void 0 : this.textures.get(tU);
        pU || (pU = {
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
        }, null !== tU && (this.textures.set(tU, pU), this.load(UU, pU), RU && this.firstBindDecodes++)), pU.refs++;
        const EU = pU,
          PU = {
            state: pU,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(EU, tU)
            }
          };
        return UU.gpu[oU.g.lite] = PU, PU
      }
      samplerFor(UU, RU, gU, tU, pU) {
        const EU = `${UU}|${RU}|${gU}|${tU}|${pU}`;
        let PU = this.samplers.get(EU);
        if (!PU) {
          const TU = {
            ...iP(UU, RU, gU),
            addressModeU: AP(tU),
            addressModeV: AP(pU)
          };
          PU = (0, YP.c)(this.engine, TU), this.samplers.set(EU, PU)
        }
        return PU
      }
      upload(UU, RU) {
        const {
          source: gU,
          sampler: tU
        } = UU;
        RU.hasMips = !tU.noMipmap, "canvas" === gU.kind ? this.createDynamic(gU, RU) : "cube" === gU.kind ? this.uploadCube(RU, gU.luminance) : this.uploadImage(RU, !0 === tU.invertY, gU.url)
      }
      uploadImage(UU, RU, gU) {
        const [tU] = UU.images;
        UU.images = null;
        const pU = (0, BP.e)(this.engine, tU, {
          mipMaps: UU.hasMips,
          invertY: RU,
          srgb: !1
        }).then((RU => {
          tU.close(), 0 !== UU.refs ? (UU.view = RU.view, UU.destroy = RU.texture.destroy.bind(RU.texture)) : RU.texture.destroy()
        }));
        this.track(UU, gU, pU)
      }
      track(UU, RU, gU, tU) {
        UU.loading = !0, this.pending++, gU.catch((gU => {
          UU.failed = !0, console.warn(`Lite: could not load texture ${dp(RU)}`, gU)
        })).finally((() => {
          UU.loading = !1, this.pending--, null === tU || void 0 === tU || tU()
        }))
      }
      uploadCube(UU, RU) {
        const gU = UU.images;
        UU.images = null;
        const tU = vP(this.engine, this.device, gU, (0, oU.w)(RU), UU.hasMips);
        UU.view = tU.createView({
          dimension: "cube"
        }), UU.destroy = () => {
          tU.destroy()
        }
      }
      createDynamic(UU, RU) {
        const {
          canvas: gU
        } = UU, tU = (0, VP.b)(this.engine, Math.max(1, gU.width), Math.max(1, gU.height), {
          mipMaps: RU.hasMips,
          srgb: !1
        });
        RU.dynamic = tU, RU.view = tU.view, RU.destroy = () => {
          tU.texture.destroy()
        }, this.pushDynamic(UU, RU)
      }
      pushDynamic(UU, RU) {
        const gU = RU.dynamicSource,
          tU = RU.dynamic,
          {
            canvas: pU
          } = UU;
        if (gU && tU && 0 !== pU.width && 0 !== pU.height) return pU.width !== tU.width || pU.height !== tU.height ? (this.releaseTexture(RU), RU.dynamic = null, RU.view = null, void this.createDynamic(UU, RU)) : void(0, VP.f)(this.engine, tU, pU, {
          invertY: gU.invertY,
          premultiplyAlpha: gU.premultiplied
        })
      }
    }

    function MP(UU) {
      return "cube" === UU.kind ? UU.rootUrl : "canvas" === UU.kind ? "canvas" : UU.url
    }
    const DP = new Uint8Array(4);

    function LP(UU) {
      const RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      UU._colorAttachment.storeOp = UU._targetSignature._sampleCount > 1 ? RU : "store";
      const gU = UU._renderPassDescriptor.depthStencilAttachment;
      gU && (gU.depthStoreOp = RU, gU.stencilStoreOp && (gU.stencilStoreOp = RU))
    }
    var NP = gU(37308),
      lP = gU(37354),
      OP = gU(36974),
      UT = gU(39117);
    const RT = new Float64Array([1, 1, 1]),
      gT = new Float64Array([0, 1, 0]),
      tT = new Float64Array(4),
      pT = new Float32Array(16),
      ET = new Float64Array(3),
      PT = new Float64Array(4);

    function TT(UU, RU, gU) {
      UU.fov = RU.fov, UU.near = RU.near, UU.far = RU.far, UU.renderWidth = gU.renderWidth, UU.renderHeight = gU.renderHeight, (0, OP.s)(RU.holderRotation, 0, tT, 0), (0, OP.b)(RT, 0, tT, 0, RU.holderPosition, 0, pT);
      const tU = RU.fD;
      ET[0] = tU[0], ET[1] = tU[1], ET[2] = tU[2] + 1;
      const pU = UU.viewMatrix;
      (0, OP.j)(tU, ET, gT, pU), (0, OP.g)(pU, 0, pU), (0, OP.m)(pU, pT, 0, pU), (0, OP.g)(pU, 0, pU);
      const EU = UU.worldMatrix;
      (0, OP.g)(pU, 0, EU), UU.eye[0] = EU[12], UU.eye[1] = EU[13], UU.eye[2] = EU[14], PT[0] = UU.fov, PT[1] = UU.renderWidth / UU.renderHeight, PT[2] = UU.near, PT[3] = UU.far, (0, OP.p)(PT, UU.projectionMatrix), (0, OP.m)(pU, UU.projectionMatrix, 0, UU.viewProjectionMatrix), (0, UT.h)(UU.viewProjectionMatrix, UU.frustum)
    }

    function qT(UU, RU) {
      let gU = UU.frustumPlanes;
      gU || (gU = UU.frustumPlanes = Array.from({
        length: 6
      }, (() => new NP.e(0, 0, 0, 0))));
      for (let tU = 0; tU < 6; tU++) {
        const UU = gU[tU].normal;
        UU._x = RU[4 * tU], UU._y = RU[4 * tU + 1], UU._z = RU[4 * tU + 2], UU._isDirty = !0, gU[tU].d = RU[4 * tU + 3]
      }
    }

    function KT(UU, RU) {
      const gU = RU.clearColor;
      UU.clearColour[0] = gU.r, UU.clearColour[1] = gU.g, UU.clearColour[2] = gU.b, UU.clearColour[3] = gU.a;
      const tU = RU.ambientColor;
      UU.ambientColour[0] = tU.r, UU.ambientColour[1] = tU.g, UU.ambientColour[2] = tU.b, UU.animationRatio = RU.animationRatio, UU.frameId = RU.frameId, UU.version++
    }

    function cT(UU) {
      const RU = UU.model.view;
      return RU.animTick = (0, lP.f)(), RU.timeMs = performance.now(), KT(RU, UU.Zh), UU.model.update(RU.frameId), RU
    }

    function GT(UU) {
      const RU = UU.Zh,
        {
          view: gU,
          eD: tU
        } = UU.model;
      return TT(gU, tU, RU.WC()), RU.onBeforeRenderObservable.notifyObservers(RU), qT(RU, gU.frustum), RU.onBeforeCameraRenderObservable.notifyObservers(RU.activeCamera), cT(UU)
    }
    var jT = gU(36929),
      uT = gU(37054),
      CT = gU(37339);

    function hT(UU) {
      var RU, gU;
      const tU = (0, nU.kb)(UU);
      if (!tU || tU.diffuseTexture && (0, CT.k)(UU)) return null;
      const pU = null === (RU = (0, nU.D)(tU, JU.h.name)) || void 0 === RU ? void 0 : RU.state,
        EU = null === (gU = (0, nU.D)(tU, ME.e.name)) || void 0 === gU ? void 0 : gU.state,
        PU = new Float32Array(16);
      return function(UU, RU, gU, tU) {
        var pU, EU;
        const PU = jt;
        tU.set(UU.diffuseColor, PU.diffuse), tU[PU.diffuse + 3] = UU.alpha, tU.set(UU.ambientColor, PU.ambientAndCutoff), tU[PU.ambientAndCutoff + 3] = UU.alphaCutOff, tU.set(UU.emissiveColor, PU.emissiveAndLevel), tU[PU.emissiveAndLevel + 3] = null !== (pU = null === (EU = UU.diffuseTexture) || void 0 === EU ? void 0 : EU.level) && void 0 !== pU ? pU : 1, null !== RU && void 0 !== RU && RU.animDataPerTex ? (tU[PU.anim + 1] = lP.c, tU[PU.anim + 2] = RU.animDataPerTex.length / 3 - 1) : gU && (tU[PU.anim + 1] = gU.numAnimStates, tU[PU.anim + 2] = gU.ticksPerAnimState)
      }(tU, pU, EU, PU), {
        model: tU,
        atlas: pU,
        texture: pU ? "atlas" : tU.diffuseTexture ? "single" : "none",
        animated: pU ? !!pU.animDataPerTex : !!EU,
        liquid: (0, CT.m)(UU),
        customRenderMat: (0, CT.k)(UU),
        uniformData: PU
      }
    }
    var QT = gU(36916);
    class eT {
      constructor(UU) {
        this.units = UU, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var UU;
        this.buffer.destroy(), null === (UU = this.twin) || void 0 === UU || UU.destroy()
      }
    }
    class WT {
      constructor(UU, RU) {
        this.arena = UU, this.hu = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.hu = new SP(RU);
        const gU = new eT(RU);
        gU.buffer = this.createBuffer(gU, !1), this.backings.push(gU), this.refresh()
      }
      get hG() {
        return this.hu.hG
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
        let UU = 0;
        for (const RU of this.backings) UU += RU.units * (this.arena.unitBytes + (RU.twin ? this.arena.twinUnitBytes : 0));
        return UU
      }
      holds(UU) {
        return UU.start + UU.length <= this.usable
      }
      lost(UU) {
        return this.dropped || UU.start + UU.length > this.hG
      }
      write(UU, RU) {
        const {
          device: gU,
          unitBytes: tU
        } = this.arena;
        for (const pU of this.backings) {
          const EU = (pU.units - UU.start) * tU;
          EU > 0 && gU.queue.writeBuffer(pU.buffer, UU.start * tU, RU, 0, Math.min(RU.byteLength, EU))
        }
      }
      writeLight(UU, RU) {
        const {
          device: gU,
          twinUnitBytes: tU,
          verticesPerUnit: pU
        } = this.arena, {
          light: EU,
          count: PU
        } = this.arena.twinLight(RU, Math.min(RU.length, UU.length * pU));
        for (const TU of this.backings) {
          TU.twin || (TU.twin = this.createBuffer(TU, !0));
          const RU = (TU.units - UU.start) * pU;
          RU > 0 && gU.queue.writeBuffer(TU.twin, UU.start * tU, EU, 0, Math.min(PU, RU))
        }
      }
      grow(UU) {
        this.arena.assertNotDrawing();
        const {
          device: RU,
          unitBytes: gU,
          label: tU
        } = this.arena, pU = this.backings[this.backings.length - 1], EU = new eT(UU), PU = RU.createCommandEncoder({
          label: `${tU}-grow`
        });
        EU.buffer = this.createBuffer(EU, !1), PU.copyBufferToBuffer(pU.buffer, 0, EU.buffer, 0, pU.units * gU), pU.twin && (EU.twin = this.createBuffer(EU, !0), PU.copyBufferToBuffer(pU.twin, 0, EU.twin, 0, pU.units * this.arena.twinUnitBytes)), RU.queue.submit([PU.finish()]), this.backings.push(EU), this.hu.grow(UU)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const UU of this.backings) UU.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(UU, RU) {
        const {
          device: gU,
          unitBytes: tU,
          twinUnitBytes: pU,
          usage: EU,
          label: PU
        } = this.arena;
        gU.pushErrorScope("out-of-memory");
        const TU = gU.createBuffer({
          label: RU ? `${PU}-light` : PU,
          size: UU.units * (RU ? pU : tU),
          usage: (RU ? this.arena.twinUsage : EU) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, gU.popErrorScope().then((gU => {
          this.arena.awaitingVerdict--, this.settle(UU, RU, !gU, !0)
        }), (gU => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${PU} buffer, taken as failed: ${String(gU)}`), this.settle(UU, RU, !1, !1)
        })), TU
      }
      settle(UU, RU, gU, tU) {
        const pU = this.backings.indexOf(UU);
        if (!(this.dropped || pU < 0)) {
          if (!gU) {
            if (tU && this.arena.ranOutOfMemory(UU.units, UU.units * (RU ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === pU) return void this.drop();
            for (const UU of this.backings.splice(pU)) UU.destroy();
            return this.hu.truncate(this.backings[pU - 1].units), this.growable = !1, void this.promote()
          }
          RU ? UU.twinReady = !0 : (UU.bufferReady = !0, this.arena.allocatedBuffer(UU.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: UU
        } = this;
        let RU = 0;
        for (; RU + 1 < UU.length && UU[RU].ready && UU[RU + 1].ready;) RU++;
        for (const gU of UU.splice(0, RU)) gU.destroy();
        this.refresh()
      }
      refresh() {
        const UU = this.backings[0];
        this.buffer = UU.buffer, this.twin = UU.twinReady ? UU.twin : null, this.usable = !this.dropped && UU.bufferReady ? UU.units : 0
      }
    }
    class fT {
      constructor(UU, RU, gU, tU) {
        let {
          verticesPerUnit: pU = 1,
          twinUsage: EU = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = UU, this.unitBytes = RU, this.usage = gU, this.label = tU, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, KR.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), RU % 4 !== 0) throw new Error(`${tU}: ${RU}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = pU, this.twinUsage = EU, this.twinValueBytes = pU > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * pU
      }
      twinLight(UU, RU) {
        if (4 === this.twinValueBytes) return this.widened.length < RU && (this.widened = new Float32Array(Math.max(RU, 2 * this.widened.length))), this.widened.set(UU.subarray(0, RU)), {
          light: this.widened,
          count: RU
        };
        const gU = RU % this.verticesPerUnit;
        if (0 === gU) return {
          light: UU,
          count: RU
        };
        const tU = RU - gU + this.verticesPerUnit;
        return this.padded.length < tU && (this.padded = new Uint16Array(Math.max(tU, 2 * this.padded.length))), this.padded.set(UU.subarray(0, RU)), this.padded.fill(0, RU, tU), {
          light: this.padded,
          count: tU
        }
      }
      allocate(UU) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), UU > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const pU of this.pages) {
          const RU = pU.hu.allocate(UU);
          if (RU >= 0) return {
            page: pU,
            start: RU,
            length: UU
          }
        }
        const RU = this.pages[this.pages.length - 1];
        if (null !== RU && void 0 !== RU && RU.canGrow) {
          const gU = Math.min(this.ceiling, Math.max(2 * RU.hG, RU.hG + UU));
          if (gU - RU.hG >= UU) return RU.grow(gU), {
            page: RU,
            start: RU.hu.allocate(UU),
            length: UU
          }
        }
        RU && RU !== this.pages[0] && 0 === RU.hu.used && RU.drop();
        const gU = Math.floor(1048576 / this.unitBytes),
          tU = new WT(this, Math.max(UU, Math.min(this.ceiling, gU)));
        return this.pages.push(tU), {
          page: tU,
          start: tU.hu.allocate(UU),
          length: UU
        }
      }
      free(UU) {
        this.assertNotDrawing();
        const {
          page: RU
        } = UU;
        RU.hu.free(UU.start, UU.length), 0 === RU.hu.used && RU !== this.pages[0] && RU !== this.pages[this.pages.length - 1] && RU.drop()
      }
      remove(UU) {
        const RU = this.pages.indexOf(UU);
        RU >= 0 && this.pages.splice(RU, 1)
      }
      ranOutOfMemory(UU, RU) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${RU}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, UU), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, UU) / 2));
        const gU = performance.now();
        gU >= this.shortageUntil && (this.forgetFailedAt = gU + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = gU + 1e3)
      }
      allocatedBuffer(UU) {
        UU >= this.failed && (this.failed = 1 / 0);
        const RU = Math.min(2 * UU, Math.floor((UU + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, RU))
      }
      stats() {
        let UU = 0,
          RU = 0,
          gU = 0,
          tU = 0;
        for (const pU of this.pages) UU += pU.hG, RU += pU.hu.used, gU += pU.hasTwin ? pU.hG * this.twinUnitBytes : 0, tU += pU.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: UU * this.unitBytes,
          usedBytes: RU * this.unitBytes,
          twinBytes: gU,
          allocatedBytes: tU
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: UU,
          maxStorageBufferBindingSize: RU
        } = this.device.limits;
        let gU = Math.floor(Math.min(67108864, UU) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (gU = Math.min(gU, Math.floor(RU / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (gU = Math.min(gU, Math.floor(RU / this.twinUnitBytes))), gU
      }
    }
    const xT = 16383;

    function mT(UU, RU, gU, tU, pU) {
      let EU = 0;
      for (let PU = gU; PU < tU; PU += xT) UU.drawIndexed(6 * Math.min(xT, tU - PU), 1, 0, RU + 4 * PU, pU), EU++;
      return EU
    }
    class IT {
      constructor(UU, RU) {
        this.recordsGroup = RU, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const gU = wR.e.strideWithoutAtlas;
        this.vertexArena = new fT(UU, gU, GPUBufferUsage.VERTEX, `terrain-vertices-${gU}`), this.quadArena = new fT(UU, uT.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const tU = (0, nR.g)(new Uint16Array(98298), xT);
        this.quadPattern = UU.createBuffer({
          label: "terrain-quad-pattern",
          size: tU.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), UU.queue.writeBuffer(this.quadPattern, 0, tU)
      }
      set(UU, RU) {
        const gU = RU.packedVertices,
          tU = gU ? this.quadArena.allocate(UU.faceCount) : this.vertexArena.allocate(UU.vertexCount);
        if (!tU) return !1;
        UU.vertices = tU;
        const pU = gU ? new Uint8Array(gU.buffer, gU.byteOffset, gU.byteLength) : new Uint8Array(RU.vertices);
        return tU.page.write(tU, pU), !0
      }
      setLight(UU, RU) {
        const {
          vertices: gU
        } = UU;
        gU && 0 !== RU.length && gU.page.live && (RU.length < UU.vertexCount ? gU.page.arena.warnOnce("shortLight", `a part's ${RU.length} light values are fewer than its ${UU.vertexCount} vertices, so its light is left as it was`) : (gU.page.writeLight(gU, RU), UU.lit = !0))
      }
      lightFullSky(UU, RU) {
        this.fullSky.length < RU && (this.fullSky = new Uint16Array(Math.max(RU, 4096)).fill(QT.i));
        for (const gU of UU) {
          const UU = gU.vertices;
          UU.page.live && (UU.page.writeLight(UU, this.fullSky), gU.lit = !0)
        }
      }
      backed(UU) {
        const {
          vertices: RU
        } = UU;
        return !!RU && RU.page.holds(RU)
      }
      lost(UU) {
        const {
          vertices: RU
        } = UU;
        return !!RU && RU.page.lost(RU)
      }
      release(UU) {
        UU.vertices && UU.vertices.page.arena.free(UU.vertices), UU.vertices = null, UU.lit = !1
      }
      setDrawing(UU) {
        this.forgetBound()
      }
      draw(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RU.faceCount;
        const EU = RU.vertices,
          PU = EU.page,
          TU = gU ? PU.twin : null;
        if (!PU.holds(EU) || gU && !TU) return 0;
        const {
          verticesPerUnit: qU
        } = PU.arena;
        let KU = EU.start * qU;
        this.boundPattern || (UU.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const cU = tU + pU;
        if (qU > 1) return PU.buffer === this.boundRecords && TU === this.boundRecordsLight || (UU.setBindGroup(1, this.recordsGroup(PU.buffer, TU)), this.boundRecords = PU.buffer, this.boundRecordsLight = TU), mT(UU, KU, tU, cU, RU.slot);
        PU.buffer !== this.boundVertices && (UU.setVertexBuffer(0, PU.buffer), this.boundVertices = PU.buffer), TU && TU !== this.boundLight && (UU.setVertexBuffer(1, TU), this.boundLight = TU);
        const GU = RU.faceCount;
        return cU <= GU ? mT(UU, KU, tU, cU, RU.slot) : mT(UU, KU, tU, GU, RU.slot) + mT(UU, KU, Math.max(tU, GU) - GU, cU - GU, RU.slot)
      }
      get buffersAwaitingVerdict() {
        let UU = 0;
        for (const RU of this.arenas()) UU += RU.awaitingVerdict;
        return UU
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class JT {
      constructor(UU, RU, gU, tU) {
        this.device = UU, this.splitBefore = RU, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = UU.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const pU = UU.createShaderModule({
          label: "scene-depth-copy",
          code: (EU = gU._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${EU?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var EU;
        UU.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: pU,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: pU,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((UU => {
          this.pipeline = UU, this.building = !1
        }), (UU => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", UU)
        })), gU._executeWithTransmission = () => this.execute(gU, tU)
      }
      get compiling() {
        return this.building
      }
      setWanted(UU) {
        this.wanted = UU
      }
      setPlanes(UU, RU) {
        UU === this.near && RU === this.far || (this.near = UU, this.far = RU, this.unproject[0] = UU / (RU - UU), this.unproject[1] = RU * UU / (RU - UU), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var UU, RU;
        return null !== (UU = null === (RU = this.copy) || void 0 === RU ? void 0 : RU.view) && void 0 !== UU ? UU : null
      }
      execute(UU, RU) {
        var gU;
        null === (gU = this.retired) || void 0 === gU || gU.destroy(), this.retired = null;
        const tU = UR(RU),
          pU = UU._transparentBindings,
          EU = this.wanted && this.pipeline ? this.splitIndex(pU) : -1,
          PU = UU._colorAttachment,
          TU = PU.resolveTarget;
        EU >= 0 && (PU.resolveTarget = void 0, LP(UU, !0));
        let qU = tU.beginRenderPass(UU._renderPassDescriptor);
        qU.setBindGroup(0, UU._sceneBG);
        let KU = this.drawList(qU, RU, UU._opaqueBindings, 0, UU._opaqueBindings.length);
        if (KU += this.drawList(qU, RU, UU._directBindings, 0, UU._directBindings.length), KU += this.drawList(qU, RU, pU, 0, EU >= 0 ? EU : pU.length), qU.end(), EU < 0) return KU;
        LP(UU);
        const cU = UU._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: GU,
            stencilLoadOp: jU
          } = cU,
          uU = PU.loadOp;
        PU.resolveTarget = TU;
        try {
          this.copyDepth(tU, UU), PU.loadOp = "load", cU.depthLoadOp = "load", jU && (cU.stencilLoadOp = "load"), qU = tU.beginRenderPass(UU._renderPassDescriptor), qU.setBindGroup(0, UU._sceneBG), KU += this.drawList(qU, RU, pU, EU, pU.length), qU.end()
        } finally {
          PU.loadOp = uU, cU.depthLoadOp = GU, cU.stencilLoadOp = jU
        }
        return KU
      }
      splitIndex(UU) {
        for (let RU = 0; RU < UU.length; RU++)
          if (UU[RU].renderable === this.splitBefore) return RU;
        return -1
      }
      drawList(UU, RU, gU, tU, pU) {
        let EU = null,
          PU = 0;
        for (let TU = tU; TU < pU; TU++) {
          const tU = gU[TU],
            pU = tU.renderable.mesh;
          pU && !1 === pU.visible || (tU.pipeline !== EU && (UU.setPipeline(tU.pipeline), EU = tU.pipeline), PU += tU.draw(UU, RU))
        }
        return PU
      }
      copyDepth(UU, RU) {
        var gU, tU;
        const pU = (null !== (gU = RU._config.depth) && void 0 !== gU ? gU : RU._config.rt)._depthTexture,
          EU = (null === (tU = this.copy) || void 0 === tU ? void 0 : tU.source) === pU ? this.copy : this.remakeCopy(pU),
          PU = UU.beginRenderPass(EU.pass);
        PU.setPipeline(this.pipeline), PU.setBindGroup(0, EU.bindGroup), PU.draw(3), PU.end()
      }
      remakeCopy(UU) {
        var RU, gU;
        this.retired = null !== (RU = null === (gU = this.copy) || void 0 === gU ? void 0 : gU.texture) && void 0 !== RU ? RU : null;
        const tU = this.device.createTexture({
            label: "scene-depth",
            size: [UU.width, UU.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          pU = tU.createView(),
          EU = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: UU.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          PU = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: pU,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: UU,
          texture: tU,
          view: pU,
          bindGroup: EU,
          pass: PU
        }, this.copy
      }
    }
    const wT = "rgba8unorm";

    function nT(UU) {
      return UU ? 15 : 1
    }
    class bT {
      constructor(UU, RU, gU, tU) {
        this.device = UU, this.terrain = tU, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = RU._targetSignature._sampleCount > 1, this.cameraBuffer = UU.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = UU.createBindGroupLayout({
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
        const pU = UU.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = UU.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: pU,
          entries: []
        });
        const EU = UU.createShaderModule({
          label: "sun-shadow-mask",
          code: (PU = this.edge, `${(0,bR.x)()}${Hg({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${PU?bg:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${nT(PU)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${PU?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var PU;
        UU.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: UU.createPipelineLayout({
            bindGroupLayouts: [this.layout, pU, pU, SE(UU, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: EU,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: EU,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((UU => {
          this.pipeline = UU, this.building = !1
        }), (UU => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", UU)
        }));
        const TU = RU._executeWithTransmission;
        RU._executeWithTransmission = UU => this.execute(RU, gU, (() => TU ? TU(UU) : function(UU, RU) {
          const gU = UR(RU).beginRenderPass(UU._renderPassDescriptor);
          gU.setBindGroup(0, UU._sceneBG);
          let tU = oT(gU, RU, UU._opaqueBindings);
          return tU += oT(gU, RU, UU._directBindings), tU += oT(gU, RU, UU._transparentBindings), gU.end(), tU
        }(RU, gU)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var UU, RU;
        return null !== (UU = null === (RU = this.targets) || void 0 === RU ? void 0 : RU.maskView) && void 0 !== UU ? UU : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(UU) {
        ! function(UU, RU) {
          const gU = UU.worldMatrix,
            tU = UU.projectionMatrix,
            pU = 1 / tU[0],
            EU = 1 / tU[5],
            PU = UU.far * UU.near / (UU.far - UU.near);
          RU[0] = UU.eye[0], RU[1] = UU.eye[1], RU[2] = UU.eye[2], RU[3] = 2 ** -23 / PU, RU[4] = gU[0] * pU, RU[5] = gU[1] * pU, RU[6] = gU[2] * pU, RU[7] = PU, RU[8] = gU[4] * EU, RU[9] = gU[5] * EU, RU[10] = gU[6] * EU, RU[11] = UU.near / (UU.far - UU.near), RU[12] = gU[8], RU[13] = gU[9], RU[14] = gU[10], RU[15] = 0
        }(UU, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(UU, RU, gU) {
        if (this.retire(), !this.terrain.readsMask) return gU();
        const tU = this.targetsFor(UU),
          pU = UR(RU),
          EU = UU._renderPassDescriptor.depthStencilAttachment;
        this.edge || (tU.prepass.depthStencilAttachment.view = EU.view);
        const PU = this.terrain.drawPrepass(pU, tU.prepass, UU._sceneBG);
        if (0 === PU) return gU();
        if (this.trace(pU, tU), this.edge) return PU + 1 + gU();
        const {
          depthLoadOp: TU,
          stencilLoadOp: qU
        } = EU;
        EU.depthLoadOp = "load", qU && (EU.stencilLoadOp = "load");
        try {
          return PU + 1 + gU()
        } finally {
          EU.depthLoadOp = TU, EU.stencilLoadOp = qU
        }
      }
      trace(UU, RU) {
        const gU = this.terrain.sunShadowGroup(),
          tU = UU.beginRenderPass(RU.trace);
        this.pipeline && gU && (tU.setPipeline(this.pipeline), tU.setBindGroup(0, RU.bindGroup), tU.setBindGroup(1, this.empty), tU.setBindGroup(2, this.empty), tU.setBindGroup(3, gU), tU.draw(3)), tU.end()
      }
      retire() {
        const UU = this.retired;
        var RU;
        UU && (UU.mask.destroy(), UU.normals.destroy(), null === (RU = UU.depth) || void 0 === RU || RU.destroy(), this.retired = null)
      }
      targetsFor(UU) {
        var RU, gU;
        const tU = (null !== (RU = UU._config.depth) && void 0 !== RU ? RU : UU._config.rt)._depthTexture;
        return (null === (gU = this.targets) || void 0 === gU ? void 0 : gU.source) === tU ? this.targets : this.remake(UU, tU)
      }
      remake(UU, RU) {
        var gU;
        this.retired = this.targets;
        const tU = [RU.width, RU.height],
          pU = this.device.createTexture({
            label: "sun-shadow-mask",
            size: tU,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          EU = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: tU,
            format: wT,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          PU = null !== (gU = UU._targetSignature._depthStencilFormat) && void 0 !== gU ? gU : RU.format,
          TU = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: tU,
            format: PU,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          qU = UU._renderPassDescriptor.depthStencilAttachment,
          KU = PU.includes("stencil"),
          cU = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: EU.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: TU ? TU.createView() : qU.view,
              depthClearValue: qU.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...KU ? {
                stencilClearValue: qU.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          GU = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== TU && void 0 !== TU ? TU : RU).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: EU.createView()
            }]
          }),
          jU = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: pU.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [nT(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: RU,
          mask: pU,
          maskView: pU.createView(),
          normals: EU,
          depth: TU,
          bindGroup: GU,
          prepass: cU,
          trace: jU
        }, this.targets
      }
    }

    function oT(UU, RU, gU) {
      let tU = null,
        pU = 0;
      for (const EU of gU) {
        const gU = EU.renderable.mesh;
        gU && !1 === gU.visible || (EU.pipeline !== tU && (UU.setPipeline(EU.pipeline), tU = EU.pipeline), pU += EU.draw(UU, RU))
      }
      return pU
    }
    const ZT = 6e4,
      aT = {
        status: "ok"
      },
      YT = {
        status: "skipped"
      };
    async function BT(UU, RU) {
      const {
        isCancelled: gU
      } = UU;
      if (gU()) return {
        status: "cg"
      };
      const {
        target: tU
      } = RU;
      if (!tU) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const pU = [],
        EU = Promise.all(Array.from(new Set(UU.materials), (async gU => {
          pU.push(await async function(UU, RU, gU, tU) {
            const pU = {
              lighting: UU.lighting,
              dirLightCount: Math.min(UU.dirLightCount, 4),
              Fu: UU.runtime
            };
            try {
              const EU = RU.material(tU);
              return EU && Kt(RU.programKey(EU, !1, pU)) ? (await EU.ready, UU.isCancelled() ? aT : EU.bindGroupLayout ? await async function(UU, RU, gU, tU) {
                const {
                  device: pU
                } = UU;
                let EU, PU;
                pU.pushErrorScope("validation");
                try {
                  EU = UU.pipelineBuild(RU, gU, tU)
                } finally {
                  PU = pU.popErrorScope().catch((() => null))
                }
                const [TU, qU] = await Promise.all([PU, EU.built.then((() => null), (UU => null !== UU && void 0 !== UU ? UU : new Error("pipeline failed")))]);
                if (!TU && !qU) return aT;
                const KU = await VT(EU.module),
                  cU = KU.length > 0 ? KU.map((UU => `${EU.name} ${UU.lineNum}:${UU.linePos}: ${UU.message}`)).join("\n") : `${EU.name}: ${rT(null!==qU&&void 0!==qU?qU:TU)}`;
                return {
                  status: "failed",
                  material: RU.model.name,
                  message: cU
                }
              }(RU, EU, RU.programKey(EU, "none" !== EU.texture, pU), gU): (console.warn(`Shader pack: skipped the compile check for "${tU.name}", whose textures failed to load`), YT)) : aT
            } catch (EU) {
              return {
                status: "failed",
                material: tU.name,
                message: rT(EU)
              }
            }
          }(UU, RU, tU, gU))
        }))),
        PU = function(UU, RU) {
          let gU, tU, pU = !1;
          const EU = new Promise((EU => {
            var PU;
            gU = setTimeout((() => {
              EU("timeout")
            }), null !== (PU = RU.timeoutMs) && void 0 !== PU ? PU : ZT), tU = setInterval((() => {
              RU.isCancelled() && EU("cg")
            }), 50), UU.lost.then((() => {
              pU = !0, EU("lost")
            }))
          }));
          return {
            signal: EU,
            lost: () => pU,
            dispose: () => {
              clearTimeout(gU), clearInterval(tU)
            }
          }
        }(RU.device, UU);
      let TU;
      try {
        TU = await Promise.race([EU.then((() => "done")), PU.signal])
      } finally {
        PU.dispose()
      }
      if ("cg" === TU || gU()) return {
        status: "cg"
      };
      const qU = pU.find((UU => "failed" === UU.status));
      return qU && "lost" !== TU && !PU.lost() && await new Promise((UU => {
        setTimeout(UU, 0)
      })), "lost" === TU || PU.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : qU ? {
        status: "failed",
        failure: {
          material: qU.material,
          message: qU.message
        }
      } : "timeout" === TU ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(KU=UU.timeoutMs)&&void 0!==KU?KU:ZT)/1e3} s`), {
        status: "skipped"
      }) : pU.some((UU => "skipped" === UU.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var KU
    }
    async function VT(UU) {
      if (!UU) return [];
      try {
        return (await UU.getCompilationInfo()).messages.filter((UU => "error" === UU.type))
      } catch {
        return []
      }
    }

    function rT(UU) {
      var RU;
      return null !== (RU = null === UU || void 0 === UU ? void 0 : UU.message) && void 0 !== RU ? RU : String(UU)
    }

    function XT(UU, RU, gU, tU) {
      Kt(UU) ? VT(gU).then((UU => {
        const [gU] = UU;
        Dp("terrain", RU, tU, gU ? `${gU.lineNum}:${gU.linePos} error: ${gU.message}` : null)
      })) : Dp("terrain", RU, tU)
    }
    var vT = gU(37062),
      dT = gU(37075),
      HT = gU(37081),
      ST = gU(37012);

    function sT(UU, RU, gU, tU, pU) {
      const EU = Math.hypot(gU[0], gU[1], gU[2]);
      if (!(EU > 0)) return;
      const PU = [gU[0] / EU, gU[1] / EU, gU[2] / EU],
        TU = [Math.floor(RU[0]), Math.floor(RU[1]), Math.floor(RU[2])],
        qU = [0, 0, 0],
        KU = [1 / 0, 1 / 0, 1 / 0],
        cU = [1 / 0, 1 / 0, 1 / 0];
      for (let uU = 0; uU < 3; uU++) PU[uU] > 0 ? (qU[uU] = 1, KU[uU] = (TU[uU] + 1 - RU[uU]) / PU[uU], cU[uU] = 1 / PU[uU]) : PU[uU] < 0 && (qU[uU] = -1, KU[uU] = (TU[uU] - RU[uU]) / PU[uU], cU[uU] = -1 / PU[uU]);
      const {
        jC: GU
      } = UU;
      let jU = UU.Uy(TU[0], TU[1], TU[2]);
      for (;;) {
        const RU = KU[0] < KU[1] ? KU[0] < KU[2] ? 0 : 2 : KU[1] < KU[2] ? 1 : 2;
        if (KU[RU] > tU) return;
        const gU = qU[RU] > 0 ? TU[RU] + 1 : TU[RU];
        TU[RU] += qU[RU], KU[RU] += cU[RU];
        const EU = UU.Uy(TU[0], TU[1], TU[2]),
          PU = EU !== jU && !(UU.opaque[jU] && UU.opaque[EU]);
        if (PU) {
          const tU = [TU[0], TU[1], TU[2]];
          tU[RU] = gU;
          const EU = Math.floor(tU[0] / GU),
            PU = Math.floor(tU[1] / GU),
            qU = Math.floor(tU[2] / GU);
          !UU.isDrawn(EU, PU, qU) && UU.hasParts(EU, PU, qU) && pU.add(`${EU},${PU},${qU}`)
        }
        if (PU && UU.occluders[EU]) return;
        jU = EU
      }
    }

    function yT(UU, RU) {
      return UU.group - RU.group || UU.nearest - RU.nearest
    }
    class kT {
      constructor(UU, RU) {
        this.device = UU, this.Xx = RU, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var UU;
        const RU = null !== (UU = this.free.pop()) && void 0 !== UU ? UU : this.next++;
        if (8 * RU >= this.data.length) {
          const UU = new Float32Array(2 * this.data.length);
          UU.set(this.data), this.data = UU, this.words = new Uint32Array(UU.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Xx()
        }
        return RU
      }
      release(UU) {
        this.free.push(UU)
      }
      set(UU, RU, gU, tU, pU) {
        const EU = 8 * UU + ft;
        this.data[EU] = RU, this.data[EU + 1] = gU, this.data[EU + 2] = tU, this.setVisibility(UU, pU)
      }
      setVisibility(UU, RU) {
        this.data[8 * UU + xt] = RU, this.markDirty(UU, UU)
      }
      setFaces(UU, RU, gU) {
        const tU = 8 * UU;
        this.words[tU + mt] = RU, this.words[tU + It] = gU, this.markDirty(UU, UU)
      }
      markDirty(UU, RU) {
        this.dirtyMin = Math.min(this.dirtyMin, UU), this.dirtyMax = Math.max(this.dirtyMax, RU)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const FT = Wt,
      iT = !0;
    const AT = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: FT.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      zT = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class MT {
      constructor(UU) {
        this.device = UU, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Gt), this.dirLightUniforms = this.frameUniforms.subarray(ct.dirLights, ct.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, KR.b)(), this.faceGroups = !0, this.visibilityGraph = iT, this.visCull = iT, this.visCheck = !1, this.visCullMinDistance = HT.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new lT, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Fu = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new IT(UU, ((UU, RU) => this.recordsGroup(UU, RU))), this.slots = new kT(UU, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = RR(UU), this.frameLayout = UU.createBindGroupLayout({
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
        }), this.frameBuffer = UU.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = UU.createSampler({
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
          bind: (UU, RU) => this.createBinding(this.opaqueRenderable, RU, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (UU, RU) => this.createBinding(this.transparentRenderable, RU, !0)
        }
      }
      installSceneDepth(UU, RU) {
        this.sceneDepth = new JT(this.device, this.transparentRenderable, UU, RU)
      }
      createFrameBindGroup() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== UU && void 0 !== UU ? UU : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== RU && void 0 !== RU ? RU : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(UU, RU) {
        const gU = null !== RU && void 0 !== RU ? RU : UU;
        let tU = this.recordsGroups.get(gU);
        return tU || (tU = this.createFrameBindGroup(UU, RU), this.recordsGroups.set(gU, tU)), tU
      }
      setChunkMesh(UU, RU, gU) {
        var tU;
        let pU = this.chunks.get(UU);
        pU ? this.geometry.release(pU) : (pU = {
          mesh: UU,
          slot: this.slots.allocate(),
          origin: [gU[0], gU[1], gU[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: UU.visibility,
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
        }, this.chunks.set(UU, pU), this.writeSlot(pU)), pU.material = UU.material ? this.materialFor(UU.material) : null, pU.packed = !!RU.packedVertices, pU.vertexCount = (0, uT.i)(RU), pU.faceCount = pU.vertexCount / 4;
        const EU = null !== (tU = RU.faceGroups) && void 0 !== tU ? tU : null;
        if (pU.faceGroups = EU, EU) {
          const UU = vT.o;
          pU.planePX = EU[UU], pU.planeNX = EU[UU + 1], pU.planePY = EU[UU + 2], pU.planeNY = EU[UU + 3], pU.planePZ = EU[UU + 4], pU.planeNZ = EU[UU + 5]
        }
        this.drawWhole(pU), 0 !== pU.faceCount && (this.geometry.set(pU, RU) ? (pU.packed && this.slots.setFaces(pU.slot, pU.vertices.start + pU.faceCount, pU.faceCount), RU.lu && this.setChunkMeshLight(UU, RU.lu)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${pU.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(UU, RU) {
        const gU = this.chunks.get(UU);
        gU && this.geometry.setLight(gU, RU)
      }
      drawStats() {
        let UU = this.transparent.length;
        for (const RU of this.opaqueBatches) UU += RU.meshes.length;
        return {
          drawn: UU,
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
      removeChunkMesh(UU) {
        const RU = this.chunks.get(UU);
        RU && (this.geometry.release(RU), this.slots.release(RU.slot), this.chunks.delete(UU))
      }
      remeshLost(UU, RU) {
        this.geometry.release(RU), RU.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** RU.lostRemeshes++);
        const gU = UU.FG,
          [tU, pU, EU] = gU.XtU(RU.origin[0], RU.origin[1], RU.origin[2]),
          PU = gU.ph.Eh(tU, pU, EU);
        PU && (PU.Rh = !0, PU.Gh = !0, gU.gh(PU, !1))
      }
      chooseFaceRanges(UU, RU, gU) {
        const tU = this.faceRanges;
        UU.faceMask = gU, UU.rangeCount = (0, dT.k)(RU, gU, tU), UU.first0 = tU[0], UU.count0 = tU[1], UU.first1 = tU[2], UU.count1 = tU[3]
      }
      drawWhole(UU) {
        UU.faceMask = -1, UU.faceEpoch = -1, UU.rangeCount = 1, UU.first0 = 0, UU.count0 = UU.faceCount
      }
      writeSlot(UU) {
        const [RU, gU, tU] = this.originOffset;
        this.slots.set(UU.slot, UU.origin[0] - RU, UU.origin[1] - gU, UU.origin[2] - tU, UU.visibility)
      }
      materialFor(UU) {
        const RU = this.materials.get(UU);
        if (RU) return RU;
        const gU = hT(UU);
        if (!gU) return this.warnOnce(`material:${UU.name}`, `Lite terrain cannot draw material "${UU.name}"; its chunks are skipped.`), null;
        const {
          model: tU,
          atlas: pU,
          texture: EU,
          animated: PU,
          uniformData: TU
        } = gU, qU = {
          id: this.materials.size,
          model: tU,
          texture: EU,
          animated: PU,
          uniformData: TU,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${UU.name}`,
            size: TU.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: gU.liquid,
          customRenderMat: gU.customRenderMat,
          atlasCount: 0,
          lL: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(UU, qU), this.device.queue.writeBuffer(qU.uniformBuffer, 0, TU), qU.ready = this.createMaterialBindGroup(qU, pU).catch((RU => {
          console.error(`Lite terrain failed to load the textures of material "${UU.name}"`, RU)
        })), qU
      }
      materialLayout(UU) {
        const RU = function(UU) {
            const RU = ["uniforms"];
            if ("atlas" === UU.texture) {
              UU.animated && RU.push("animData"), RU.push("sampler");
              for (let gU = 0; gU < UU.atlasCount; gU++) RU.push("textureArray")
            } else "single" === UU.texture && RU.push("sampler", "texture");
            return RU
          }(UU),
          gU = RU.join(",");
        let tU = this.materialLayouts.get(gU);
        if (!tU) {
          const UU = GPUShaderStage.FRAGMENT;
          tU = this.device.createBindGroupLayout({
            label: `terrain-material-${gU}`,
            entries: RU.map(((RU, gU) => {
              switch (RU) {
                case "uniforms":
                  return {
                    binding: gU, visibility: GPUShaderStage.VERTEX | UU, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: gU, visibility: GPUShaderStage.VERTEX | UU, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: gU, visibility: UU, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: gU, visibility: UU, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: gU, visibility: UU, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(gU, tU)
        }
        return tU
      }
      async createMaterialBindGroup(UU, RU) {
        const gU = [{
          buffer: UU.uniformBuffer
        }];
        if (RU) {
          const {
            urls: tU,
            pixels: pU,
            layerWidth: EU
          } = RU.sources, PU = await Promise.all(tU.map(((UU, RU) => {
            var gU;
            return yp(this.device, UU, null !== (gU = null === pU || void 0 === pU ? void 0 : pU[RU]) && void 0 !== gU ? gU : null, EU)
          })));
          UU.atlasCount = PU.length, UU.lL = PU[0].layerWidth, UU.atlasLayers = PU[0].layers, RU.animDataPerTex && gU.push({
            buffer: Vp(this.device, Float32Array.from(RU.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), gU.push(this.sampler);
          for (const UU of PU) gU.push(UU.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === UU.texture) {
          const {
            url: RU
          } = UU.model.diffuseTexture.source, {
            pixels: tU,
            width: pU,
            height: EU
          } = await Sp(RU);
          gU.push(this.sampler), gU.push(Xp(this.device, tU, pU, EU, 1, `terrain-${RU}`).createView({
            dimension: "2d"
          }))
        }
        const tU = this.materialLayout(this.programKey(UU, !1));
        UU.bindGroupLayout = tU, UU.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${UU.model.name}`,
          layout: tU,
          entries: gU.map(((UU, RU) => ({
            binding: RU,
            resource: UU
          })))
        })
      }
      programKey(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const tU = gU ? gU.lighting : this.lighting,
          pU = gU ? gU.Fu : this.Fu,
          EU = {
            texture: UU.texture,
            atlasCount: UU.atlasCount,
            lL: UU.lL,
            atlasLayers: UU.atlasLayers,
            animated: UU.animated,
            alphaTest: UU.model.transparencyMode === nU.r.alphaTest,
            lighting: tU,
            dirLightCount: gU ? gU.dirLightCount : this.dirLightCount,
            packed: RU
          };
        if (!pU) return EU;
        const PU = this.shaderPackFields(UU, pU),
          TU = "atlas" === UU.texture && UU.model.transparencyMode === nU.r.opaque && Et(PU.packVariant);
        return {
          ...EU,
          ...PU,
          alphaTest: EU.alphaTest || TU
        }
      }
      shaderPackFields(UU, RU) {
        return UU.customRenderMat ? tt : function(UU, RU) {
          if (!UU) return tt;
          const gU = UU.defineFor(RU ? "liquid" : "terrain");
          return 0 === gU ? tt : {
            packVariant: gU,
            liquid: RU
          }
        }(RU, UU.liquid)
      }
      isBlended(UU) {
        return UU.model.transparencyMode === nU.r.alphaBlend
      }
      shaderModule(UU, RU) {
        let gU = this.modules.get(UU);
        return gU || (gU = this.device.createShaderModule({
          label: RU,
          code: UU
        }), this.modules.set(UU, gU)), gU
      }
      pipelineFor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!UU.bindGroupLayout) return null;
        const pU = this.programKey(UU, RU);
        if (!tU) return this.pipelineOf(UU, pU, gU);
        const EU = {
            ...pU,
            resting: tU
          },
          PU = this.pipelineId(UU, EU, gU),
          TU = this.pipelines.get(PU);
        if (TU) return TU;
        const qU = this.pipelineOf(UU, pU, gU);
        return qU && void 0 === TU && this.startPipeline(PU, UU, EU, gU), qU
      }
      pipelineOf(UU, RU, gU) {
        const tU = this.pipelineId(UU, RU, gU),
          pU = this.pipelines.get(tU);
        return void 0 !== pU ? pU : (this.startPipeline(tU, UU, RU, gU), null)
      }
      pipelineId(UU, RU, gU) {
        return DT(RU, this.isBlended(UU), UU.model.backFaceCulling, gU)
      }
      pipelineBuild(UU, RU, gU) {
        var tU;
        const pU = this.pipelineId(UU, RU, gU);
        return null !== (tU = this.builds.get(pU)) && void 0 !== tU ? tU : this.startPipeline(pU, UU, RU, gU)
      }
      startPipeline(UU, RU, gU, tU) {
        var pU;
        this.pipelines.set(UU, null);
        const EU = Zt(gU),
          PU = this.isBlended(RU),
          TU = this.shadowMask && tU._depthStencilFormat ? function(UU, RU, gU, tU) {
            if (void 0 === UU.packVariant || UU.liquid || RU) return "none";
            const pU = (0, oR.d)(UU.packVariant);
            return null === pU || void 0 === pU || !pU.sunShadow || !vg(pU, gU) || pU.discards || UU.alphaTest && Et(UU.packVariant) ? "none" : tU ? "edge" : "plain"
          }(gU, PU, !!this.sunShadow, tU._sampleCount > 1) : "none";
        let qU;
        try {
          qU = Yt(gU, !!this.sunShadow, TU)
        } catch (QU) {
          if (!Kt(gU)) throw QU;
          return this.failedPackBuild(UU, gU, EU, QU)
        }
        const KU = this.shaderModule(qU, EU),
          cU = [];
        gU.packed || (cU.push(function(UU, RU) {
          const gU = [{
            shaderLocation: FT.position,
            offset: wR.e.jR,
            format: "float32x3"
          }, {
            shaderLocation: FT.normal,
            offset: wR.e.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: FT.color,
            offset: wR.e.colorOffset,
            format: "unorm8x4"
          }];
          return UU && gU.push({
            shaderLocation: FT.uv,
            offset: wR.e.uvOffset,
            format: "float32x2"
          }), RU && gU.push({
            shaderLocation: FT.blockFlagWords,
            offset: wR.e.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: wR.e.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: gU
          }
        }("none" !== gU.texture, Kt(gU))), gU.lighting && cU.push(AT));
        const GU = RU.model.backFaceCulling,
          jU = {
            label: EU,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, RU.bindGroupLayout, ...kE(this.device, gU, !!this.sunShadow, "none" !== TU)]
            }),
            vertex: {
              module: KU,
              entryPoint: "mainVertex",
              buffers: cU
            },
            fragment: NU({
              module: KU,
              entryPoint: "mainFragment"
            }, tU, PU ? zT : null),
            depthStencil: tU._depthStencilFormat ? {
              format: tU._depthStencilFormat,
              depthCompare: null !== (pU = tU._depthCompare) && void 0 !== pU ? pU : gR,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: tU._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: GU ? "back" : "none"
            }
          },
          uU = gU.resting ? 0 : 1;
        this.compiling += uU;
        const CU = "none" === TU ? this.device.createRenderPipelineAsync(jU) : this.startMaskPipelines(KU, jU, "edge" === TU);
        CU.then((RU => {
          this.compiling -= uU, this.pipelines.set(UU, RU)
        }), (UU => {
          this.compiling -= uU, console.error(`Lite terrain pipeline ${EU} failed`, UU), XT(gU, EU, KU, UU)
        }));
        const hU = {
          name: EU,
          module: KU,
          built: CU
        };
        return this.builds.set(UU, hU), hU
      }
      startMaskPipelines(UU, RU, gU) {
        const tU = RU.depthStencil,
          pU = this.device.createRenderPipelineAsync(gU ? RU : {
            ...RU,
            depthStencil: {
              ...tU,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          EU = this.device.createRenderPipelineAsync({
            ...RU,
            label: `${RU.label}-prepass`,
            fragment: {
              module: UU,
              entryPoint: "prepassFragment",
              targets: [{
                format: wT
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([pU, EU]).then((UU => {
          let [RU, gU] = UU;
          return this.prepassOf.set(RU, gU), this.maskPipelines++, RU
        }))
      }
      failedPackBuild(UU, RU, gU, tU) {
        console.error(`Lite terrain pipeline ${gU} failed`, tU), XT(RU, gU, null, tU);
        const pU = Promise.reject(tU);
        pU.catch((() => {}));
        const EU = {
          name: gU,
          module: null,
          built: pU
        };
        return this.builds.set(UU, EU), EU
      }
      checkShaderPack(UU) {
        return BT(UU, {
          device: this.device,
          target: this.target,
          material: UU => this.materialFor(UU),
          programKey: (UU, RU, gU) => this.programKey(UU, RU, gU),
          pipelineBuild: (UU, RU, gU) => this.pipelineBuild(UU, RU, gU)
        })
      }
      createBinding(UU, RU, gU) {
        return this.target = RU, {
          renderable: UU,
          pipeline: PR(this.device, RU),
          draw: UU => {
            this.geometry.setDrawing(!0);
            try {
              return gU ? this.drawTransparent(UU, RU) : this.drawOpaque(UU, RU)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(UU, RU) {
        var gU, tU, pU, EU;
        const {
          LG: PU
        } = UU;
        this.lighting = UU.Ih;
        const TU = (0, jT.t)(RU);
        this.dirLightCount = Math.min(TU, 4), this.Fu = null !== (gU = PU.Fu) && void 0 !== gU ? gU : null, TU > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(UU, RU), this.animateMaterials(RU.animTick);
        const qU = PU.uj,
          KU = qU[0] !== this.originOffset[0] || qU[1] !== this.originOffset[1] || qU[2] !== this.originOffset[2];
        KU && (this.originOffset[0] = qU[0], this.originOffset[1] = qU[1], this.originOffset[2] = qU[2]);
        const cU = RU.eye;
        this.eye[0] = cU[0], this.eye[1] = cU[1], this.eye[2] = cU[2], this.writeShaderPackInputs();
        const GU = RU.projectionMatrix,
          jU = 0 === GU[15];
        let uU = 0;
        (KU || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: CU
        } = this;
        TR(this.transparentRenderable._worldCenter, RU, pR), this.resetBatches(jU), this.transparent.length = 0, this.unlit.length = 0;
        const hU = PU.FG.u9,
          QU = hU / 2 * Math.sqrt(3);
        let eU = 0;
        const WU = !!this.Fu && pt(this.Fu.defineFor("liquid"));
        let fU = !1;
        const xU = null !== (tU = null === (pU = PU.JI) || void 0 === pU ? void 0 : pU.visibility) && void 0 !== tU ? tU : null,
          mU = this.visCull && jU && 0 === this.compiling && null !== xU && PU.FG.AgU[0] >= this.visCullMinDistance ? this.target : null,
          IU = this.visPassable,
          JU = this.visCandidates,
          wU = this.visCandidateBatches;
        IU.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let nU = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let bU = 0;
        const oU = (UU, gU) => {
          if (!gU) return this.transparent.push(UU), void(bU += 2 * UU.faceCount);
          if (null !== UU.faceGroups && gU.faceCull) {
            if (0 === uU && (uU = (0, dT.c)(GU, RU.renderWidth, RU.renderHeight), uU !== this.faceFocalPx && (this.faceFocalPx = uU, CU = ++this.faceEpoch)), UU.faceEpoch !== CU) {
              UU.faceEpoch = CU;
              const RU = Math.sqrt(UU.distance) + QU,
                gU = (0, dT.h)(UU.planePX, UU.planeNX, UU.planePY, UU.planeNY, UU.planePZ, UU.planeNZ, this.eye[0] - (UU.origin[0] - this.originOffset[0]), this.eye[1] - (UU.origin[1] - this.originOffset[1]), this.eye[2] - (UU.origin[2] - this.originOffset[2]), (0, dT.f)(RU, uU));
              gU !== UU.faceMask && this.chooseFaceRanges(UU, UU.faceGroups, gU)
            }
            if (0 === UU.rangeCount) return
          } else - 1 !== UU.faceMask && this.drawWhole(UU);
          gU.meshes.push(UU), bU += 2 * ((UU.rangeCount > 0 ? UU.count0 : 0) + (UU.rangeCount > 1 ? UU.count1 : 0))
        };
        for (const aU of this.chunks.values()) {
          KU && this.writeSlot(aU);
          const UU = aU.mesh.visibility;
          UU !== aU.visibility && (aU.visibility = UU, this.slots.setVisibility(aU.slot, UU));
          const {
            material: gU
          } = aU;
          this.geometry.lost(aU) && performance.now() >= aU.lostRetryAt && this.remeshLost(PU, aU);
          const tU = !(null === gU || void 0 === gU || !gU.bindGroup) && this.geometry.backed(aU),
            pU = tU && this.lighting && !aU.vertices.page.twin;
          if (mU && (Number.isNaN(aU.key) && (aU.ci = Math.floor(aU.origin[0] / hU), aU.cj = Math.floor(aU.origin[1] / hU), aU.ck = Math.floor(aU.origin[2] / hU), aU.key = (0, ST.k)(aU.ci, aU.cj, aU.ck)), (!tU || UU < 1 || pU || !this.batchDraws(gU, aU.packed, mU)) && this.visSeeThrough(aU, mU) && IU.add(aU.key)), !tU) continue;
          pU || (aU.lostRemeshes = 0);
          const EU = aU.origin[0] - this.originOffset[0],
            TU = aU.origin[1] - this.originOffset[1],
            qU = aU.origin[2] - this.originOffset[2];
          if (!(0, UT.d)(RU.frustum, EU, TU, qU, hU)) continue;
          const cU = EU + hU / 2 - this.eye[0],
            GU = TU + hU / 2 - this.eye[1],
            uU = qU + hU / 2 - this.eye[2];
          if (aU.distance = cU * cU + GU * GU + uU * uU, this.lighting && !aU.lit && (eU = Math.max(eU, aU.vertexCount), this.unlit.push(aU)), pU) continue;
          const CU = this.isBlended(gU) ? null : this.batchFor(gU, aU.packed, aU.vertices.page, 1 === UU, jU);
          mU ? (JU[nU] = aU, wU[nU++] = CU) : oU(aU, CU)
        }
        const ZU = mU ? this.sweepVisibility(UU, RU, xU) : null;
        null === (EU = (0, YE.z)(PU)) || void 0 === EU || EU.update(RU.frustum, this.originOffset, hU, ZU);
        for (let aU = 0; aU < nU; aU++) {
          const UU = JU[aU];
          !ZU || ZU.isDrawn(UU.ci, UU.cj, UU.ck) ? oU(UU, wU[aU]) : (this.visCulledParts++, this.visCulledTriangles += 2 * UU.faceCount)
        }
        for (const aU of this.transparent) fU ||= WU && aU.material.liquid && !aU.material.customRenderMat;
        this.submittedTriangles = bU, ZU && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(UU, RU, ZU)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(fU) : fU && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && eU > 0 && this.geometry.lightFullSky(this.unlit, eU);
        for (const aU of this.opaqueBatches) this.chunkSorter.sort(aU.meshes, 1) || aU.meshes.sort(LT);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(NT)
      }
      sweepVisibility(UU, RU, gU) {
        const {
          FG: tU
        } = UU.LG, pU = tU.u9, EU = this.visPassable, PU = this.eye[0] + this.originOffset[0], TU = this.eye[1] + this.originOffset[1], qU = this.eye[2] + this.originOffset[2];
        if (!gU.eyeClear(PU, TU, qU, RU.near, RU.projectionMatrix, tU)) return null;
        const [KU, cU] = tU.AgU, GU = gU.update(PU, TU, qU, pU, KU, cU, EU);
        return this.visSweeps = gU.sweeps, GU ? gU : null
      }
      visSeeThrough(UU, RU) {
        const {
          material: gU
        } = UU;
        return (!gU || !this.isBlended(gU)) && (UU.mesh.visibility < 1 || !(null !== gU && void 0 !== gU && gU.bindGroup) || UU.faceCount > 0 && (!this.geometry.backed(UU) || this.lighting && !UU.vertices.page.twin) || !this.batchDraws(gU, UU.packed, RU))
      }
      batchDraws(UU, RU, gU) {
        var tU;
        const pU = RU ? 2 : 0;
        if (UU === this.visDrawsMaterial && function(UU, RU) {
            return 0 !== (UU & 1 << RU)
          }(this.visDrawsBits, pU)) return 0 !== (this.visDrawsBits & 2 << pU);
        let EU = null !== (tU = this.visBatchDraws.get(UU)) && void 0 !== tU ? tU : 0;
        if (!(EU & 1 << pU)) {
          EU |= 1 << pU | (!!UU.bindGroupLayout && this.canDraw(UU, RU) && !!this.pipelines.get(this.pipelineId(UU, this.programKey(UU, RU), gU)) ? 2 << pU : 0), this.visBatchDraws.set(UU, EU)
        }
        return this.visDrawsMaterial = UU, this.visDrawsBits = EU, 0 !== (EU & 2 << pU)
      }
      runVisCheck(UU, RU, gU) {
        const {
          LG: tU
        } = UU, {
          FG: pU
        } = tU, EU = pU.u9, PU = new Set;
        for (const uU of this.chunks.values()) PU.add(uU.key);
        const TU = mp.Matrix.FromArray(RU.viewProjectionMatrix).invert(),
          [qU, KU, cU] = this.originOffset,
          GU = new mp.xC,
          jU = function(UU, RU, gU, tU) {
            const pU = new Set;
            for (let EU = 0; EU < 27; EU++)
              for (let PU = 0; PU < 48; PU++) {
                const TU = gU((PU + .5) / 48 * 2 - 1, (EU + .5) / 27 * 2 - 1);
                sT(UU, RU, [TU[0] - RU[0], TU[1] - RU[1], TU[2] - RU[2]], tU, pU)
              }
            return pU
          }({
            Uy: (UU, RU, gU) => pU.Uy(UU, RU, gU),
            occluders: gU.occluders,
            opaque: gU.opaque,
            jC: EU,
            isDrawn: (UU, RU, tU) => gU.isDrawn(UU, RU, tU),
            hasParts: (UU, RU, gU) => PU.has((0, ST.k)(UU, RU, gU))
          }, [this.eye[0] + qU, this.eye[1] + KU, this.eye[2] + cU], ((UU, RU) => (mp.xC.TransformCoordinatesFromFloatsToRef(UU, RU, .5, TU, GU), [GU.x + qU, GU.y + KU, GU.z + cU])), (pU.AgU[0] + 1) * EU);
        this.visViolations = jU.size;
        for (const uU of jU) this.warnOnce(`vis:${uU}`, `Lite terrain cave culling skipped chunk ${uU}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var UU;
        null !== (UU = this.Fu) && void 0 !== UU && UU.isRunning() && (this.shaderPackInputs ??= new FE(this.device, this.Fu.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Fu, this.eye, this.lighting))
      }
      bindShaderPackInputs(UU, RU, gU) {
        var tU, pU, EU, PU;
        let TU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: qU
        } = this.shaderPackFields(RU, gU);
        if (void 0 === qU) return;
        this.shaderPackInputs || (this.shaderPackInputs = new FE(this.device, gU.textureLayers(), this.sunShadow), this.shaderPackInputs.write(gU, this.eye, this.lighting));
        const KU = pt(qU) ? null !== (tU = null === (pU = this.sceneDepth) || void 0 === pU ? void 0 : pU.view) && void 0 !== tU ? tU : this.standIn() : null,
          cU = TU ? null !== (EU = null === (PU = this.shadowMask) || void 0 === PU ? void 0 : PU.view) && void 0 !== EU ? EU : this.standIn() : null;
        this.shaderPackInputs.bind(UU, KU, yE(qU, !!this.sunShadow), cU)
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
        var UU, RU;
        return null !== (UU = null === (RU = this.shaderPackInputs) || void 0 === RU ? void 0 : RU.bindGroupFor(null, !0)) && void 0 !== UU ? UU : null
      }
      resetBatches(UU) {
        const RU = this.opaqueBatches;
        let gU = 0;
        for (const tU of RU) tU.meshes.length > 0 && (tU.meshes.length = 0, tU.faceCull = this.batchFaceCull(tU.material, UU), RU[gU++] = tU);
        RU.length = gU
      }
      orderBatches() {
        const UU = this.opaqueBatches;
        for (let RU = 0; RU < UU.length; RU++) {
          const gU = UU[RU];
          gU.group = RU;
          for (let tU = 0; tU < RU; tU++) {
            const RU = UU[tU];
            if (RU.material === gU.material && RU.packed === gU.packed) {
              gU.group = RU.group;
              break
            }
          }
          gU.nearest = gU.meshes.length > 0 ? gU.meshes[0].distance : 1 / 0
        }
        UU.sort(yT)
      }
      batchFor(UU, RU, gU, tU, pU) {
        for (const PU of this.opaqueBatches)
          if (PU.material === UU && PU.packed === RU && PU.page === gU && PU.resting === tU) return PU;
        const EU = {
          material: UU,
          packed: RU,
          page: gU,
          resting: tU,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(UU, pU)
        };
        return this.opaqueBatches.push(EU), EU
      }
      batchFaceCull(UU, RU) {
        return !(!RU || !(0, vT.u)(UU.model)) && (!this.Fu || ! function(UU) {
          var RU;
          return !(null === (RU = (0, oR.d)(UU)) || void 0 === RU || !RU.movesVertices)
        }(this.shaderPackFields(UU, this.Fu).packVariant))
      }
      writeFrameUniforms(UU, RU) {
        const gU = this.frameUniforms,
          tU = ct;
        if ((0, jT.w)(UU, gU), gU[tU.fogInfos] = RU.fogEnabled ? RU.fogMode : 0, gU[tU.fogInfos + 1] = RU.fogStart, gU[tU.fogInfos + 2] = RU.fogEnd, gU[tU.fogInfos + 3] = RU.fogDensity, gU.set(RU.fogColour, tU.fogColour), gU[tU.outputHeight] = RU.renderHeight, gU.set(RU.ambientColour, tU.sceneAmbient), (0, jT.s)(RU, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const RU = (0, uT.m)(UU.yC, UU.hC, UU.QC);
          for (let UU = 0; UU < 4; UU++) gU[tU.aoLevels + UU] = RU[UU] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, gU)
      }
      animateMaterials(UU) {
        const RU = jt.anim;
        for (const gU of this.materials.values()) gU.animated && (gU.uniformData[RU] = UU, this.device.queue.writeBuffer(gU.uniformBuffer, 4 * RU, gU.uniformData, RU, 1))
      }
      canDraw(UU, RU) {
        return !("atlas" === UU.texture && !RU) || (this.warnOnce(`stride:${UU.id}`, `Lite terrain: material "${UU.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(UU, RU) {
        let gU = 0;
        UU.setBindGroup(1, this.frameBindGroup);
        for (const tU of this.opaqueBatches) {
          if (!tU.meshes.length || !this.canDraw(tU.material, tU.packed)) continue;
          const pU = this.pipelineFor(tU.material, tU.packed, RU, tU.resting);
          pU && (UU.setPipeline(pU), UU.setBindGroup(2, tU.material.bindGroup), this.Fu && this.bindShaderPackInputs(UU, tU.material, this.Fu, this.prepassOf.has(pU)), gU += this.drawBatch(UU, tU))
        }
        return gU
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(UU, RU, gU) {
        const tU = this.target,
          pU = this.Fu;
        if (!tU || !pU || 0 === this.maskPipelines) return 0;
        let EU = 0,
          PU = null;
        this.geometry.setDrawing(!0);
        try {
          for (const TU of this.opaqueBatches) {
            if (!TU.meshes.length || !this.canDraw(TU.material, TU.packed)) continue;
            const qU = this.pipelineFor(TU.material, TU.packed, tU, TU.resting),
              KU = qU && this.prepassOf.get(qU);
            KU && (PU || (PU = UU.beginRenderPass(RU), PU.setBindGroup(0, gU), PU.setBindGroup(1, this.frameBindGroup)), PU.setPipeline(KU), PU.setBindGroup(2, TU.material.bindGroup), this.bindShaderPackInputs(PU, TU.material, pU, !0), EU += this.drawBatch(PU, TU))
          }
        } finally {
          var TU;
          null === (TU = PU) || void 0 === TU || TU.end(), this.geometry.setDrawing(!1)
        }
        return EU
      }
      drawBatch(UU, RU) {
        let gU = 0;
        for (const tU of RU.meshes) {
          const {
            rangeCount: RU
          } = tU;
          RU > 0 && (gU += this.geometry.draw(UU, tU, this.lighting, tU.first0, tU.count0), RU > 1 && (gU += this.geometry.draw(UU, tU, this.lighting, tU.first1, tU.count1)))
        }
        return gU
      }
      drawTransparent(UU, RU) {
        let gU = 0,
          tU = null,
          pU = null;
        UU.setBindGroup(1, this.frameBindGroup);
        for (const EU of this.transparent) {
          const PU = EU.material;
          if (!this.canDraw(PU, EU.packed)) continue;
          const TU = this.pipelineFor(PU, EU.packed, RU);
          TU && (TU !== tU && (UU.setPipeline(TU), tU = TU, this.Fu && this.bindShaderPackInputs(UU, PU, this.Fu)), PU !== pU && (UU.setBindGroup(2, PU.bindGroup), pU = PU), gU += this.geometry.draw(UU, EU, this.lighting))
        }
        return gU
      }
    }

    function DT(UU, RU, gU, tU) {
      return `${Zt(UU)}|${UU.atlasLayers}|${UU.lL}|${RU}|${gU}|${tU._colorFormat}|${tU._depthStencilFormat}|${tU._sampleCount}`
    }

    function LT(UU, RU) {
      return UU.distance - RU.distance
    }

    function NT(UU, RU) {
      return RU.distance - UU.distance
    }
    class lT {
      constructor() {
        this.left = []
      }
      sort(UU, RU) {
        for (let gU = 0; gU < UU.length; gU++) {
          const RU = UU[gU].distance;
          if (RU - RU !== 0) return !1
        }
        return this.sortRange(UU, 0, UU.length, RU), !0
      }
      sortRange(UU, RU, gU, tU) {
        if (gU - RU <= 16) {
          for (let pU = RU + 1; pU < gU; pU++) {
            const gU = UU[pU],
              EU = tU * gU.distance;
            let PU = pU - 1;
            for (; PU >= RU && tU * UU[PU].distance > EU; PU--) UU[PU + 1] = UU[PU];
            UU[PU + 1] = gU
          }
          return
        }
        const pU = RU + gU >>> 1;
        if (this.sortRange(UU, RU, pU, tU), this.sortRange(UU, pU, gU, tU), tU * UU[pU - 1].distance <= tU * UU[pU].distance) return;
        const {
          left: EU
        } = this, PU = pU - RU;
        for (let cU = 0; cU < PU; cU++) EU[cU] = UU[RU + cU];
        let TU = 0,
          qU = pU,
          KU = RU;
        for (; TU < PU && qU < gU;) UU[KU++] = tU * UU[qU].distance < tU * EU[TU].distance ? UU[qU++] : EU[TU++];
        for (; TU < PU;) UU[KU++] = EU[TU++]
      }
    }
    const OT = Math.ceil(102);

    function Uq(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RU;
      const EU = Math.min(RU, gU),
        PU = new Uint32Array(Ug(tU));
      for (let TU = 0; TU < tU; TU++) {
        const RU = Math.floor(TU * EU / tU),
          gU = Math.max(RU + 1, Math.floor((TU + 1) * EU / tU));
        for (let qU = 0; qU < tU; qU++) {
          const KU = Math.floor(qU * EU / tU),
            cU = Math.max(KU + 1, Math.floor((qU + 1) * EU / tU));
          let GU = 0;
          for (let tU = RU; tU < gU; tU++)
            for (let RU = KU; RU < cU; RU++) UU[tU * pU + RU] >= OT && GU++;
          if (2 * GU >= (gU - RU) * (cU - KU)) {
            const UU = qU + tU * TU;
            PU[UU >>> 5] |= 1 << (31 & UU)
          }
        }
      }
      return PU
    }

    function Rq(UU) {
      return Math.max(1, Math.min(16, UU))
    }
    class gq {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = UU, this.loadTexture = RU, this.warn = gU, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(UU, RU) {
        return (UU.lV !== this.builtVersion || this.blockCaster.length !== RU) && (this.build(UU, RU), !0)
      }
      build(UU, RU) {
        this.builtVersion = UU.lV;
        const gU = new Uint16Array(RU),
          tU = new Map;
        for (let pU = 1; pU < RU; pU++) {
          const RU = this.classify(UU, pU, tU);
          if (null === RU || RU === DR) {
            gU[pU] = null === RU ? 0 : DR;
            continue
          }
          let EU = this.byKey.get(RU.key);
          void 0 === EU && (EU = this.allocate(RU), this.byKey.set(RU.key, EU)), gU[pU] = EU
        }
        this.blockCaster = gU, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(UU, RU) {
        const gU = UU.Gl[RU];
        if ("function" !== typeof gU) return gU;
        try {
          return gU()
        } catch (tU) {
          return this.warnOnce(`Sun shadows: no caster option for block ${RU}: ${tU instanceof Error?tU.message:String(tU)}`), null
        }
      }
      classify(UU, RU, gU) {
        const tU = this.option(UU, RU);
        if ("none" === tU) return null;
        if (tU && tU.planes.length > 0) {
          const UU = tU.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(UU)}`,
            planes: UU
          }
        }
        if (UU.Lj[RU]) return null;
        const pU = UU.lj[RU] ? UU.Qr(RU) : null;
        if (pU && pU.length >= 6) {
          const UU = function(UU) {
            const RU = new Uint32Array(16);
            for (let gU = 0; gU + 6 <= UU.length; gU += 6) {
              const tU = [0, 1, 2].map((RU => Math.max(0, Math.ceil(8 * UU[gU + RU] - .5)))),
                pU = [0, 1, 2].map((RU => Math.min(7, Math.floor(8 * UU[gU + RU + 3] - .5))));
              for (let UU = tU[2]; UU <= pU[2]; UU++)
                for (let gU = tU[1]; gU <= pU[1]; gU++)
                  for (let EU = tU[0]; EU <= pU[0]; EU++) {
                    const tU = EU + 8 * (gU + 8 * UU);
                    RU[tU >>> 5] |= 1 << (31 & tU)
                  }
            }
            return RU
          }(pU);
          return function(UU) {
            return UU.every((UU => 4294967295 === UU))
          }(UU) ? DR : UU.every((UU => 0 === UU)) ? null : {
            kind: "shape",
            key: `shape:${UU.join(",")}`,
            mask: UU
          }
        }
        if (UU.Fv[RU] || !UU.kC[RU]) return null;
        const EU = [0, 1, 2, 3, 4, 5].map((tU => {
          const pU = UU.FC[6 * RU + tU];
          let EU = gU.get(pU);
          return void 0 === EU && (EU = function(UU) {
            if (!UU || UU.OC) return null;
            const {
              dL: RU,
              lL: gU,
              YL: tU
            } = UU;
            if (!RU || !gU || !(gU > 0) || void 0 === tU || !(tU >= 0)) return null;
            const pU = RU[0],
              EU = gU * gU * 4;
            if (!pU || pU.byteLength < EU) return null;
            const PU = Math.floor(pU.byteLength / EU),
              TU = RU[Math.floor(tU / PU)];
            if (!TU) return null;
            const qU = new Uint8Array(TU.buffer, TU.byteOffset, TU.byteLength),
              KU = tU % PU * EU;
            if (KU + EU > qU.length) return null;
            const cU = new Uint8Array(gU * gU);
            let GU = !1;
            for (let jU = 0; jU < cU.length; jU++) cU[jU] = qU[KU + 4 * jU + 3], GU ||= cU[jU] < OT;
            return GU ? {
              alpha: cU,
              width: gU
            } : null
          }(UU.lC(pU)), gU.set(pU, EU)), EU
        }));
        if (EU.every((UU => null === UU))) return DR;
        const PU = Rq(Math.max(...EU.map((UU => {
            var RU;
            return null !== (RU = null === UU || void 0 === UU ? void 0 : UU.width) && void 0 !== RU ? RU : 1
          })))),
          TU = new Uint32Array(Ug(PU)).fill(4294967295),
          qU = EU.map((UU => null === UU ? TU : Uq(UU.alpha, UU.width, UU.width, PU)));
        return {
          kind: "cutout",
          key: `cutout:${PU}:${qU.map((UU=>UU.join(","))).join("|")}`,
          size: PU,
          faces: qU
        }
      }
      allocate(UU) {
        if (this.nextCaster >= Rg) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const RU = this.nextCaster++;
        if (this.writeCaster(RU, LR, 0, 0, 0), "shape" === UU.kind) {
          const gU = this.allocateMask(UU.mask.length);
          gU >= 0 && (this.sink(gU, UU.mask), this.writeCaster(RU, NR, gU, 0, 8))
        } else if ("cutout" === UU.kind) {
          const gU = Ug(UU.size),
            tU = this.allocateMask(6 * gU);
          if (tU >= 0) {
            const pU = new Uint32Array(6 * gU);
            UU.faces.forEach(((UU, RU) => {
              pU.set(UU, RU * gU)
            })), this.sink(tU, pU), this.writeCaster(RU, OR, tU, 0, UU.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(RU, UU.planes).finally((() => {
          this.planesLoading--
        })));
        return RU
      }
      async loadPlanes(UU, RU) {
        const gU = await Promise.all(RU.map((UU => this.texture(UU.texture))));
        if (gU.some((UU => null === UU))) return;
        const tU = gU,
          pU = Rq(Math.max(...tU.map((UU => Math.min(UU.width, UU.height))))),
          EU = Ug(pU),
          PU = this.allocateMask(RU.length * (4 + EU));
        if (PU < 0) return;
        const TU = new Uint32Array(RU.length * (4 + EU)),
          qU = 4 * RU.length;
        RU.forEach(((UU, RU) => {
          const gU = PU + qU + RU * EU;
          TU.set(function(UU, RU) {
            const [gU, tU] = UU.tangent, pU = Math.hypot(gU, tU) || 1, EU = gU / pU, PU = tU / pU, TU = UU.centre[0] * PU - UU.centre[1] * EU, qU = new Uint32Array(4);
            return new Float32Array(qU.buffer, 0, 3).set([EU, PU, TU]), qU[3] = RU, qU
          }(UU, gU), 4 * RU), TU.set(Uq(tU[RU].alpha, tU[RU].width, tU[RU].height, pU), qU + RU * EU)
        })), this.sink(PU, TU), this.writeCaster(UU, lR, PU, RU.length, pU)
      }
      texture(UU) {
        let RU = this.textures.get(UU);
        return RU || (RU = this.loadTexture(UU).catch((RU => (this.warn(`Sun shadows: no mask for ${UU}: ${RU instanceof Error?RU.message:String(RU)}`), null))), this.textures.set(UU, RU)), RU
      }
      allocateMask(UU) {
        if (this.nextMaskWord + UU > gg) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const RU = 32768 + this.nextMaskWord;
        return this.nextMaskWord += UU, RU
      }
      writeCaster(UU, RU, gU, tU, pU) {
        this.sink(0 + 4 * UU, Uint32Array.of(RU, gU, tU, pU))
      }
      warnOnce(UU) {
        this.warned.has(UU) || (this.warned.add(UU), this.warn(UU))
      }
    }
    var tq = gU(37234);

    function pq(UU) {
      return !UU.Rh && !UU.vtU && !UU.BC
    }

    function Eq() {
      return {
        bricks: new Uint32Array(sR),
        cells: new Uint16Array(32768),
        special: new Uint8Array(HR)
      }
    }
    class Pq {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = UU, this.writeVoxels = RU, this.writePool = gU, this.warn = tU, this.eyeChunk = null, this.slotChunk = new Array(BR).fill(null), this.slotVersion = new Float64Array(BR).fill(-1), this.slotPool = new Array(BR).fill(null), this.starved = new Uint8Array(BR), this.queue = [], this.queued = new Uint8Array(BR), this.queueSorted = !0, this.freePool = new Uint32Array(tg), this.freeCount = tg, this.casterTable = null, this.warnedPool = !1, this.scratch = Eq(), this.victimScratch = Eq(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * BR), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let pU = 0; pU < tg; pU++) this.freePool[pU] = 65535 - pU
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return tg - this.freeCount
      }
      chunkAdded(UU) {
        if (null === this.eyeChunk || !this.inRadius(UU.i, UU.j, UU.k)) return;
        const RU = AR(UU.i, UU.j, UU.k);
        this.slotChunk[RU] = UU, this.slotVersion[RU] = -1, this.enqueue(RU)
      }
      update(UU, RU, gU) {
        const tU = this.casters.blockCaster;
        if (tU !== this.casterTable) {
          this.casterTable = tU;
          for (let UU = 0; UU < BR; UU++) this.slotVersion[UU] = -1, this.slotChunk[UU] && this.enqueue(UU)
        }
        const pU = Math.floor(UU[0] / 32),
          EU = Math.floor(UU[1] / 32),
          PU = Math.floor(UU[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== pU || this.eyeChunk[1] !== EU || this.eyeChunk[2] !== PU) && (this.eyeChunk = [pU, EU, PU], this.follow(RU), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let TU = 0; TU < BR; TU++) {
          const UU = this.slotChunk[TU];
          UU && (UU.lRU || UU.XC !== this.slotVersion[TU]) && this.enqueue(TU)
        }
        this.drain(gU), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(UU, RU) {
        this.records.set(RU, 4 * UU), this.windowTopStale = !0, this.writeVoxels(4 * UU, RU)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const UU = this.records;
        let RU = -1 / 0;
        for (let tU = 0; tU < UU.length; tU += 4) {
          const gU = 255 & UU[tU + 3];
          gU !== XR && gU !== vR || !this.inRadius(UU[tU], UU[tU + 1], UU[tU + 2]) || (RU = Math.max(RU, UU[tU + 1] * ZR + (UU[tU + 3] >>> 8)))
        }
        const gU = RU === -1 / 0 ? 1 : RU + kR;
        gU !== this.windowTop[0] && (this.windowTop[0] = gU, this.writeVoxels(yR, this.windowTop))
      }
      follow(UU) {
        const RU = this.eyeChunk,
          [gU, tU, pU] = aR;
        for (let PU = -pU; PU <= pU; PU++)
          for (let pU = -tU; pU <= tU; pU++)
            for (let tU = -gU; tU <= gU; tU++) {
              var EU;
              const gU = RU[0] + tU,
                TU = RU[1] + pU,
                qU = RU[2] + PU,
                KU = AR(gU, TU, qU),
                cU = this.slotChunk[KU];
              if (cU && !cU.lRU && cU.i === gU && cU.j === TU && cU.k === qU) continue;
              const GU = null !== (EU = UU(gU, TU, qU)) && void 0 !== EU ? EU : null;
              cU && (cU.i !== gU || cU.j !== TU || cU.k !== qU) && this.slotPool[KU] && (this.release(KU), this.record.fill(0), this.writeRecord(KU, this.record)), this.slotChunk[KU] = GU, this.slotVersion[KU] = -1, (GU || cU) && this.enqueue(KU)
            }
      }
      requeueStarved() {
        for (let UU = 0; UU < BR; UU++) this.starved[UU] && this.slotChunk[UU] && this.enqueue(UU)
      }
      enqueue(UU) {
        this.queued[UU] || (this.queued[UU] = 1, this.queue.push(UU), this.queueSorted = !1)
      }
      drain(UU) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const UU = new Map;
          for (const RU of this.queue) UU.set(RU, this.slotDistance(RU));
          this.queue.sort(((RU, gU) => UU.get(gU) - UU.get(RU))), this.queueSorted = !0
        }
        const RU = performance.now();
        let gU = 0;
        const tU = [];
        for (; this.queue.length > 0 && (0 === gU || performance.now() - RU < UU);) {
          const UU = this.queue.pop(),
            RU = this.slotChunk[UU];
          !RU || RU.lRU || pq(RU) ? (this.queued[UU] = 0, this.encodeSlot(UU), gU++) : tU.push(UU)
        }
        for (let pU = tU.length - 1; pU >= 0; pU--) this.queue.push(tU[pU])
      }
      slotDistance(UU) {
        const RU = this.slotChunk[UU],
          gU = this.eyeChunk;
        return RU ? Math.max(Math.abs(RU.i - gU[0]), Math.abs(RU.j - gU[1]), Math.abs(RU.k - gU[2])) : 0
      }
      inRadius(UU, RU, gU) {
        const tU = this.eyeChunk,
          [pU, EU, PU] = aR;
        return Math.abs(UU - tU[0]) <= pU && Math.abs(RU - tU[1]) <= EU && Math.abs(gU - tU[2]) <= PU
      }
      release(UU) {
        const RU = this.slotPool[UU];
        if (RU) {
          for (let UU = RU.length - 1; UU >= 0; UU--) this.freePool[this.freeCount++] = RU[UU];
          this.slotPool[UU] = null
        }
      }
      encodeSlot(UU) {
        var RU, gU, tU, pU, EU;
        let PU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          TU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const qU = null !== (RU = null === (gU = this.slotPool[UU]) || void 0 === gU ? void 0 : gU.length) && void 0 !== RU ? RU : 0;
        this.release(UU), this.starved[UU] = 0;
        const KU = this.slotChunk[UU],
          cU = this.record;
        if (!KU || KU.lRU || !KU.Wj) return this.slotChunk[UU] = null, this.slotVersion[UU] = -1, cU.fill(0), this.writeRecord(UU, cU), void(qU > 0 && this.requeueStarved());
        this.slotVersion[UU] = KU.XC;
        const GU = this.encodeBricks(KU, UU, PU, TU);
        cU[0] = KU.i, cU[1] = KU.j, cU[2] = KU.k, cU[3] = GU, this.writeRecord(UU, cU), null === (tU = this.encoded) || void 0 === tU || tU.call(this, KU), TU && (null !== (pU = null === (EU = this.slotPool[UU]) || void 0 === EU ? void 0 : EU.length) && void 0 !== pU ? pU : 0) < qU && this.requeueStarved()
      }
      encodeBricks(UU, RU, gU, tU) {
        if (UU.UC) return rR;
        const pU = this.casters.blockCaster,
          {
            data: EU,
            stride: PU,
            offset: TU
          } = UU.Wj,
          [qU, KU, cU] = PU,
          GU = ZR,
          {
            bricks: jU,
            cells: uU,
            special: CU
          } = gU;
        jU.fill(0), CU.fill(0);
        let hU = 0,
          QU = 0,
          eU = 0;
        for (let WU = 0; WU < GU; WU++) {
          const RU = WU >> 2,
            gU = 3 & WU,
            tU = UU.Qu[WU],
            PU = tU === tq.e ? -1 : tU < pU.length ? pU[tU] : 0;
          if (0 !== PU)
            for (let UU = 0; UU < GU; UU++) {
              const tU = UU >> 2,
                fU = 3 & UU;
              let xU = TU + UU * qU + WU * KU;
              for (let UU = 0; UU < GU; UU++, xU += cU) {
                let TU = PU;
                if (TU < 0) {
                  const UU = EU[xU];
                  if (TU = UU < pU.length ? pU[UU] : 0, 0 === TU) continue
                }
                const qU = zR(tU, RU, UU >> 2),
                  KU = MR(fU, gU, 3 & UU);
                jU[3 * qU + (KU >>> 5)] |= 1 << (31 & KU), uU[qU * dR + KU] = TU, hU++, eU = WU, TU === DR ? QU++ : CU[qU] = 1
              }
            }
        }
        return 0 === hU ? rR : 32768 === QU ? XR | eU << 8 : (this.writePoolEntries(RU, gU, tU), this.writeVoxels(SR + RU * sR, jU), vR | eU << 8)
      }
      writePoolEntries(UU, RU, gU) {
        const {
          bricks: tU,
          cells: pU,
          special: EU
        } = RU, PU = this.entry;
        let TU = 0;
        for (let cU = 0; cU < HR; cU++) TU += EU[cU];
        if (0 === TU) return;
        gU && this.freeCount < TU && this.evictBeyond(UU, TU);
        const qU = new Uint32Array(gU ? Math.min(TU, this.freeCount) : 0);
        let KU = 0;
        for (let cU = 0; cU < HR; cU++) {
          if (!EU[cU]) continue;
          const gU = 3 * cU;
          if (KU === qU.length) {
            this.dropSpecials(RU, cU), this.starved[UU] = 1;
            continue
          }
          const TU = this.freePool[--this.freeCount];
          qU[KU++] = TU;
          for (let UU = 0; UU < dR; UU++) {
            const RU = tU[gU + (UU >>> 5)] >>> (31 & UU) & 1 ? pU[cU * dR + UU] : 0;
            1 & UU ? PU[UU >> 1] |= RU << 16 : PU[UU >> 1] = RU
          }
          tU[gU + 2] = TU + 1, this.writePool(pg + 32 * TU, PU)
        }
        qU.length > 0 && (this.slotPool[UU] = qU)
      }
      evictBeyond(UU, RU) {
        const gU = this.slotDistance(UU),
          tU = [];
        for (let pU = 0; pU < BR; pU++) pU !== UU && this.slotPool[pU] && this.slotDistance(pU) > gU && tU.push(pU);
        tU.sort(((UU, RU) => this.slotDistance(RU) - this.slotDistance(UU)));
        for (const pU of tU) {
          if (this.freeCount >= RU) return;
          const UU = this.slotChunk[pU];
          UU && !UU.lRU && UU.Wj && (UU.XC === this.slotVersion[pU] || pq(UU)) && this.encodeSlot(pU, this.victimScratch, !1)
        }
      }
      dropSpecials(UU, RU) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const gU = 3 * RU;
        for (let tU = 0; tU < dR; tU++) UU.cells[RU * dR + tU] !== DR && (UU.bricks[gU + (tU >>> 5)] &= ~(1 << (31 & tU)))
      }
    }
    var Tq = gU(36988);
    class qq {
      constructor(UU) {
        this.device = UU, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new hg, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.FG = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = UU.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = UU.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(UU, RU, gU) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: tU
        } = this;
        tU.pu(UU, RU), gU.forEachSunShadowCaster((UU => {
          this.add(UU)
        })), tU.finish();
        const pU = 0 === tU.parts;
        if (pU && this.uploadedEmpty) return;
        this.uploadedEmpty = pU;
        const {
          queue: EU
        } = this.device, {
          words: PU
        } = tU;
        EU.writeBuffer(this.frameBuffer, 0, PU, 0, 16385), tU.refs > 0 && EU.writeBuffer(this.frameBuffer, 65540, PU, qg, tU.refs), pU || EU.writeBuffer(this.frameBuffer, 327684, PU, Kg, tU.parts * Tg)
      }
      add(UU) {
        const RU = this.gridFor(UU);
        if (!RU) return;
        const {
          frame: gU
        } = this, {
          FG: tU,
          worldAt: pU,
          instances: EU,
          instanceCount: PU,
          thin: TU
        } = UU;
        if (EU)
          for (let qU = 0; qU < PU; qU++) TU ? (eg(EU, 16 * qU, tU, pU, this.FG), gU.add(RU, this.FG)) : gU.add(RU, EU, 16 * qU);
        else gU.add(RU, tU, pU)
      }
      gridFor(UU) {
        let {
          geometry: RU,
          indexed: gU,
          first: tU,
          count: pU,
          skip: EU
        } = UU, PU = this.grids.get(RU);
        PU || (PU = new Map, this.grids.set(RU, PU));
        const TU = `${gU?tU:-1-tU}:${pU}:${null!==EU&&void 0!==EU?EU:""}`;
        let qU = PU.get(TU);
        if (void 0 !== qU || this.gridsFull) return qU;
        const KU = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = KU + 2;
        else if (KU > this.bakeDeadline) return;
        return qU = this.bake(RU, gU, tU, pU, EU), void 0 !== qU && PU.set(TU, qU), qU
      }
      bake(UU, RU, gU, tU, pU) {
        const EU = UU.vertexAttributes.find((UU => "position" === UU.kind)),
          PU = EU ? function(UU, RU, gU, tU) {
            let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const EU = UU => RU ? RU[gU + UU] : gU + UU,
              PU = UU => null !== pU && [0, 1, 2].some((RU => {
                const gU = EU(UU + RU);
                return gU >= pU[0] && gU < pU[1]
              })),
              TU = [1 / 0, 1 / 0, 1 / 0],
              qU = [-1 / 0, -1 / 0, -1 / 0];
            for (let WU = 0; WU + 2 < tU; WU += 3)
              if (!PU(WU))
                for (let RU = 0; RU < 3; RU++) {
                  const gU = EU(WU + RU);
                  for (let RU = 0; RU < 3; RU++) TU[RU] = Math.min(TU[RU], UU[3 * gU + RU]), qU[RU] = Math.max(qU[RU], UU[3 * gU + RU])
                }
            const KU = Math.max(qU[0] - TU[0], qU[1] - TU[1], qU[2] - TU[2]);
            if (!(KU > 0)) return null;
            const cU = KU / 64,
              GU = [0, 0, 0],
              jU = [0, 0, 0],
              uU = [0, 0, 0];
            for (let WU = 0; WU < 3; WU++) GU[WU] = Math.min(65, Math.ceil((qU[WU] - TU[WU]) / cU) + 1), jU[WU] = TU[WU] - cU / 2, uU[WU] = jU[WU] + GU[WU] * cU;
            const CU = new Uint32Array(Math.ceil(GU[0] * GU[1] * GU[2] / 32)),
              hU = new Float64Array(9),
              QU = [0, 0, 0],
              eU = [0, 0, 0];
            for (let WU = 0; WU + 2 < tU; WU += 3)
              if (!PU(WU)) {
                for (let RU = 0; RU < 3; RU++) {
                  const gU = EU(WU + RU);
                  for (let tU = 0; tU < 3; tU++) hU[3 * RU + tU] = UU[3 * gU + tU]
                }
                for (let UU = 0; UU < 3; UU++) {
                  const RU = Math.min(hU[UU], hU[3 + UU], hU[6 + UU]),
                    gU = Math.max(hU[UU], hU[3 + UU], hU[6 + UU]);
                  QU[UU] = Math.max(0, Math.floor((RU - jU[UU]) / cU - 1e-6)), eU[UU] = Math.min(GU[UU] - 1, Math.floor((gU - jU[UU]) / cU + 1e-6))
                }
                for (let UU = QU[2]; UU <= eU[2]; UU++)
                  for (let RU = QU[1]; RU <= eU[1]; RU++)
                    for (let gU = QU[0]; gU <= eU[0]; gU++)
                      if (Wg(hU, jU[0] + (gU + .5) * cU, jU[1] + (RU + .5) * cU, jU[2] + (UU + .5) * cU, cU / 2)) {
                        const tU = gU + GU[0] * (RU + GU[1] * UU);
                        CU[tU >>> 5] |= 1 << (31 & tU)
                      }
              } return {
              words: CU,
              lo: jU,
              hi: uU,
              cell: cU,
              dims: GU
            }
          }((0, Tq.f)(EU, UU.vertexCount), RU ? UU.indexData : null, gU, tU, pU) : null;
        if (!PU) return null;
        const {
          words: TU,
          ...qU
        } = PU;
        if (this.gridTop + TU.length > Gg) return void(this.gridsFull = !0);
        const KU = this.gridTop;
        return this.gridTop += TU.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * KU, TU), {
          ...qU,
          at: KU
        }
      }
    }
    const Kq = Math.cos(1 * Math.PI / 180);

    function cq(UU, RU) {
      return UU[0] * RU[0] + UU[1] * RU[1] + UU[2] * RU[2] < Kq
    }
    async function Gq(UU) {
      const {
        pixels: RU,
        width: gU,
        height: tU
      } = await Sp(UU), pU = new Uint8Array(gU * tU);
      for (let EU = 0; EU < pU.length; EU++) pU[EU] = RU[4 * EU + 3];
      return {
        width: gU,
        height: tU,
        alpha: pU
      }
    }
    class jq {
      constructor(UU, RU) {
        this.device = UU, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(xg.m), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = UU.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = UU.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * FR,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = UU.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [gU, tU, pU] = xg.n;
        this.volume = UU.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: gU,
            height: tU,
            depthOrArrayLayers: pU
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = UU.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = UU.createBuffer({
          label: "sun-shadow-volume-work",
          size: xg.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = RU ? new qq(UU) : null, this.entityStandIn = RU ? null : UU.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var UU, RU;
        const gU = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || gU.push("Lite sun shadow volume pipeline compiling");
        const tU = null !== (UU = null === (RU = this.casters) || void 0 === RU ? void 0 : RU.planesLoading) && void 0 !== UU ? UU : 0;
        return tU > 0 && gU.push(`${tU} Lite sun shadow plane casters loading their textures`), gU
      }
      entries() {
        var UU, RU, gU, tU;
        const pU = bR.o;
        return [{
          binding: pU.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: pU.Wj,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: pU.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: pU.volume,
          resource: this.volumeView
        }, {
          binding: pU.sampler,
          resource: this.volumeSampler
        }, {
          binding: pU.entities,
          resource: {
            buffer: null !== (UU = null === (RU = this.entities) || void 0 === RU ? void 0 : RU.frameBuffer) && void 0 !== UU ? UU : this.entityStandIn
          }
        }, {
          binding: pU.entityGrids,
          resource: {
            buffer: null !== (gU = null === (tU = this.entities) || void 0 === tU ? void 0 : tU.gridBuffer) && void 0 !== gU ? gU : this.entityStandIn
          }
        }]
      }
      prepare(UU, RU, gU) {
        var tU;
        this.entitiesThisFrame = !1;
        const pU = null !== (tU = null === gU || void 0 === gU ? void 0 : gU.sunShadowReach()) && void 0 !== tU ? tU : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!gU || !pU.sunShadow && !pU.airShadow) return void(this.volumeHolds = null);
        if (UU.FG.u9 !== ZR) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${UU.FG.u9}; everything is lit.`)));
        const EU = this.start(UU);
        this.casters.update(UU.Mj, UU.Mj.lj.length);
        const PU = UU.uj;
        for (let jU = 0; jU < 3; jU++) this.eye[jU] = RU[jU] + PU[jU];
        const TU = (0, xg.w)(this.eye);
        this.staleNear = TU;
        const qU = UU.FG.ph;
        EU.update(this.eye, ((UU, RU, gU) => qU.Eh(UU, RU, gU)), 1);
        const KU = (0, xg.q)(gU.M_()),
          cU = EU.eyeChunk,
          GU = this.uniformInts;
        for (let jU = 0; jU < 3; jU++) GU[jU] = cU[jU], GU[4 + jU] = TU[jU];
        this.entitiesThisFrame = null !== this.entities && pU.sunShadow, this.entitiesThisFrame && Cg(this.uniformFloats, 8, RU, KU), null !== this.volumeHolds && (this.castersWritten || cq(KU, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(TU, KU, cU)
      }
      markStale(UU) {
        const RU = this.staleNear,
          gU = ZR,
          tU = [UU.i * gU, UU.j * gU, UU.k * gU];
        for (let EU = 0; EU < 3; EU++)
          if (tU[EU] + gU <= RU[EU] - gU || tU[EU] >= RU[EU] + xg.n[EU] + gU) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const pU = this.stale;
        for (let EU = 0; EU < pU.length; EU += 4)
          if (pU[EU] === UU.i && pU[EU + 1] === UU.j && pU[EU + 2] === UU.k) return void(pU[EU + 3] = this.swept);
        if (16 === pU.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        pU.push(UU.i, UU.j, UU.k, this.swept)
      }
      writeStale() {
        const UU = this.swept,
          RU = this.stale;
        this.staleAll && UU - this.staleAllSwept >= xg.j && (this.staleAll = !1, RU.length = 0);
        let gU = 0;
        for (let pU = 0; pU < RU.length; pU += 4)
          if (UU - RU[pU + 3] < xg.j) {
            for (let UU = 0; UU < 4; UU++) RU[gU + UU] = RU[pU + UU];
            gU += 4
          } RU.length = gU;
        const tU = this.uniformInts;
        tU[3] = this.staleAll ? 5 : gU / 4;
        for (let pU = 0; pU < 4; pU++)
          for (let UU = 0; UU < 3; UU++) tU[16 + 4 * pU + UU] = 4 * pU < gU ? RU[4 * pU + UU] * ZR : 0
      }
      writeUniform() {
        const UU = this.uniformInts;
        let RU = this.uniformWritten;
        if (RU) {
          let gU = !0;
          for (let tU = 0; tU < UU.length && gU; tU++) gU = UU[tU] === RU[tU];
          if (gU) return
        }
        RU ??= this.uniformWritten = new Int32Array(UU.length), RU.set(UU), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(UU) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, UU)
      }
      computeVolume(UU, RU, gU) {
        const tU = this.buildVolumePass();
        if (!tU) return void(this.volumeHolds = null);
        const pU = (0, xg.t)(this.volumeHolds, UU);
        this.volumeHolds = UU;
        const EU = 1 === pU.length && pU[0].size.every(((UU, RU) => UU === xg.n[RU])),
          PU = this.sweptChunk,
          TU = this.sweptLight,
          qU = RU[0] !== TU[0] || RU[1] !== TU[1] || RU[2] !== TU[2],
          KU = gU[0] !== PU[0] || gU[1] !== PU[1] || gU[2] !== PU[2],
          cU = qU && cq(RU, TU);
        if ((EU || this.written || KU || cU) && (this.fastLeft = xg.j), EU || this.written || qU || KU) {
          this.written = !1;
          for (let UU = 0; UU < 3; UU++) PU[UU] = gU[UU], TU[UU] = RU[UU];
          this.sweepLeft = EU ? 0 : xg.j
        }
        if (EU ? this.swept += xg.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, pU.push(...(0, xg.x)(UU, this.slice)), this.slice = (this.slice + 1) % xg.j, this.swept++), 0 === pU.length) return;
        const GU = (0, xg.z)(this.workData, RU, pU);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const jU = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          uU = jU.beginComputePass({
            label: "sun-shadow-volume"
          });
        uU.setPipeline(tU.pipeline), uU.setBindGroup(Jg.group, tU.bindGroup), uU.dispatchWorkgroups(Math.ceil(GU / xg.l)), uU.end(), this.device.queue.submit([jU.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const UU = Jg,
          RU = GPUShaderStage.COMPUTE,
          gU = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: UU.uniform,
              visibility: RU,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: UU.Wj,
              visibility: RU,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: UU.special,
              visibility: RU,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: UU.work,
              visibility: RU,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: UU.volume,
              visibility: RU,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          tU = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: gU,
            entries: [{
              binding: UU.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: UU.Wj,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: UU.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: UU.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: UU.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [gU]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: wg()
            }),
            entryPoint: "main"
          }
        }).then((UU => {
          this.volumePass = {
            pipeline: UU,
            bindGroup: tU
          }
        }), (UU => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(UU)}`)
        })), null
      }
      start(UU) {
        if (this.window) return this.window;
        const RU = (UU, RU) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * UU, RU)
        };
        this.casters = new gq(((UU, gU) => {
          this.castersWritten = !0, RU(UU, gU)
        }), Gq);
        const gU = new Pq(this.casters, ((UU, RU) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * UU, RU)
        }), RU);
        return gU.encoded = UU => {
          this.markStale(UU)
        }, UU.FG.on("chunkAdded", (UU => {
          gU.chunkAdded(UU)
        })), this.window = gU, gU
      }
    }
    var uq = gU(38250),
      Cq = gU(38253);
    const hq = 0,
      Qq = 3,
      eq = 4,
      Wq = 5;

    function fq(UU, RU, gU, tU) {
      UU.drawOffset(RU, tU + hq), RU[tU + Qq] = UU.drawTime(), gU[tU + eq] = UU.ring.drawStart(), gU[tU + Wq] = UU.ring.drawCount()
    }
    const xq = `\n${ht}\n\nconst MAX_STOPS = ${Cq.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Cq.b/4}>,\n\tcolor1: array<vec4f, ${Cq.b}>,\n\tcolor2: array<vec4f, ${Cq.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Cq.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Cq.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var mq = gU(40988);
    class Iq {
      constructor(UU, RU, gU, tU) {
        this.device = UU, this.system = RU, this.frameIndex = gU, this.bindings = tU, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, mq.h)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (UU, RU) => {
          this.device.queue.writeBuffer(this.ring, UU * Cq.d * 4, this.system.ring.records, UU * Cq.d, (RU - UU) * Cq.d)
        };
        const {
          name: pU
        } = RU;
        this.ring = UU.createBuffer({
          label: `particles-${pU}`,
          size: RU.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = UU.createBuffer({
          label: `particles-uniforms-${pU}`,
          size: 4 * Cq.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(UU) {
        const RU = (0, mq.d)(this.system, this.uniformBits, UU);
        RU && (this.uniformBits = RU, this.device.queue.writeBuffer(this.uniforms, 0, RU))
      }
      bind() {
        const {
          system: UU
        } = this, RU = this.texture;
        (0, mq.j)(UU, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${UU.name}`,
          size: [Cq.g, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Cq.g
        }, [Cq.g, 1]));
        const gU = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === RU.view && this.boundSampler === RU.sampler && this.boundRamp === gU || (this.boundView = RU.view, this.boundSampler = RU.sampler, this.boundRamp = gU, this.bindGroup = this.device.createBindGroup({
          label: `particles-${UU.name}`,
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
            resource: RU.sampler
          }, {
            binding: 3,
            resource: RU.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: gU
          }]
        }))
      }
      destroy() {
        var UU;
        this.ring.destroy(), this.uniforms.destroy(), null === (UU = this.ramp) || void 0 === UU || UU.destroy()
      }
    }
    class Jq {
      constructor(UU, RU) {
        this.device = UU, this.resources = RU, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, KR.b)();
        const gU = UU.createBindGroupLayout({
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
        this.frameLayout = UU.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = UU.createPipelineLayout({
          bindGroupLayouts: [RR(UU), gU, this.frameLayout]
        }), this.module = UU.createShaderModule({
          label: "particles",
          code: xq
        });
        const tU = UU.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        UU.queue.writeTexture({
          texture: tU
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: gU,
          rampSampler: UU.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: tU.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (RU, gU) => (this.bindTarget(gU), {
            renderable: this.renderable,
            pipeline: PR(UU, gU),
            draw: UU => gU === this.preparedTarget ? this.draw(UU) : 0
          })
        }
      }
      get dtU() {
        return this.systems.size
      }
      reset() {
        for (const UU of this.systems.keys()) UU.reset()
      }
      describePendingWork() {
        return (0, uq.c)(this.systems.keys(), "Lite")
      }
      aY(UU, RU) {
        const gU = new uq.b(UU, RU, this);
        return this.systems.set(gU, new Iq(this.device, gU, this.allocateFrameIndex(), this.bindings)), gU
      }
      n_(UU, RU) {
        for (const gU of this.systems.keys()) gU.n_(UU, RU)
      }
      canDraw(UU) {
        const RU = this.systems.get(UU),
          gU = UU.texture ? this.resources.boundTexture(UU.texture) : null;
        if (!RU || !gU || !this.targetPipelines) return !1;
        if (RU.texture = gU, RU.pipelines.length = 0, !ip(UU.blendMode)) return this.warnOnce(`blend:${UU.blendMode}`, `particle blend mode ${UU.blendMode} is not drawn (${UU.name})`), !0;
        const tU = (0, Yp.l)(UU.blendMode);
        for (const pU of tU) {
          const UU = this.pipelineFor(pU);
          if (!1 === UU) return RU.pipelines.length = 0, !0;
          UU && RU.pipelines.push(UU)
        }
        return RU.pipelines.length === tU.length
      }
      disposeStopped(UU) {
        UU.dispose()
      }
      remove(UU) {
        const RU = this.systems.get(UU);
        RU && (this.systems.delete(UU), RU.destroy(), this.freeFrameIndices.push(RU.frameIndex))
      }
      prepare(UU) {
        const RU = UU.animationRatio || 1;
        TR(this.renderable._worldCenter, UU, tR), this.preparedTarget = this.target, this.draws.length = 0;
        let gU = 0;
        for (const tU of this.systems.values()) {
          const UU = tU.system;
          if (!UU.animateIfActive(RU)) continue;
          if (UU.ring.takeUploads(tU.upload), !UU.hasLiveParticles() || 0 === tU.pipelines.length) continue;
          tU.writeUniforms(this.warnOnce), tU.bind();
          const pU = 64 * tU.frameIndex;
          tU.count = UU.ring.drawCount(), fq(UU, this.frameData, this.frameBits, pU), gU = Math.max(gU, pU + 64), this.draws.push(tU)
        }
        gU > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, gU)
      }
      draw(UU) {
        let RU = 0,
          gU = null;
        for (const tU of this.draws) {
          UU.setBindGroup(1, tU.bindGroup), UU.setBindGroup(2, this.frameBindGroup, [256 * tU.frameIndex]);
          for (const pU of tU.pipelines) pU !== gU && (UU.setPipeline(pU), gU = pU), UU.draw(4, tU.count), RU++
        }
        return RU
      }
      bindTarget(UU) {
        this.target = UU;
        const RU = `${UU._colorFormat}|${UU._depthStencilFormat}|${UU._depthCompare}|${UU._sampleCount}`;
        let gU = this.pipelines.get(RU);
        gU || (gU = new Map, this.pipelines.set(RU, gU)), this.targetPipelines = gU
      }
      pipelineFor(UU) {
        var RU;
        const gU = this.targetPipelines,
          tU = gU.get(UU);
        if (void 0 !== tU) return tU;
        gU.set(UU, null);
        const pU = this.target,
          EU = UU === Yp.d,
          PU = null !== (RU = pU._depthCompare) && void 0 !== RU ? RU : gR;
        return this.device.createRenderPipelineAsync({
          label: `particles-${UU}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: NU({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: EU ? 1 : 0
            }
          }, pU, Ap((0, Yp.k)(UU))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: pU._depthStencilFormat ? {
            format: pU._depthStencilFormat,
            depthCompare: PU,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: pU._sampleCount
          }
        }).then((RU => {
          gU.set(UU, RU)
        }), (RU => {
          gU.set(UU, !1), console.error("Lite particle pipeline failed", RU), Dp("particles", `blend-${UU}`, RU)
        })), null
      }
      allocateFrameIndex() {
        const UU = this.freeFrameIndices.pop();
        if (void 0 !== UU) return UU;
        const RU = this.nextFrameIndex++;
        if (64 * (RU + 1) > this.frameData.length) {
          const UU = new Float32Array(2 * this.frameData.length);
          UU.set(this.frameData), this.frameData = UU, this.frameBits = new Uint32Array(UU.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return RU
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
    class wq {
      constructor(UU, RU, gU, tU, pU) {
        this.lite = UU, this.canvas = RU, this.info = gU, this.resources = pU, this.VgU = !1, this.needPOTTextures = !1, this.Al = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = RU.width, this.renderHeight = RU.height, this.caps = {
          maxTextureSize: tU.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: tU.maxTextureArrayLayers
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
      setSize(UU, RU) {
        if (this.renderWidth === UU && this.renderHeight === RU) return !1;
        const gU = this.renderWidth,
          tU = this.renderHeight;
        this.renderWidth = UU, this.renderHeight = RU;
        try {
          (0, sU.t)(this.lite, UU, RU)
        } catch (pU) {
          if (pU instanceof DOMException && "InvalidStateError" === pU.name) {
            this.renderWidth = gU, this.renderHeight = tU;
            try {
              (0, sU.t)(this.lite, gU, tU)
            } catch {
              this.canvas.width = gU, this.canvas.height = tU
            }
            return console.warn("WebGPU could not allocate render targets for resize", UU, RU, pU.message), !1
          }
          throw pU
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
      Am() {
        const UU = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : UU - this.lastFrameTime, this.lastFrameTime = UU
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(UU, RU) {
        const gU = document.createElement("canvas");
        return gU.width = UU, gU.height = RU, gU
      }
      LO(UU, RU) {
        var gU;
        return null !== (gU = this.resources.LO.get(UU)) && void 0 !== gU ? gU : new iU(this.resources, UU, RU)
      }
      atlasArray(UU, RU, gU) {
        return this.resources.atlasArray(UU, RU, gU)
      }
    }
    class nq {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(UU) {
        this.fov = UU.fov, this.nearPlane = UU.near, this.farPlane = UU.far;
        const RU = UU.worldMatrix;
        for (let gU = 0; gU < 16; gU++)
          if (this.worldMatrix[gU] !== RU[gU]) return this.worldMatrix.set(RU), void this.worldMatrixVersion++
      }
    }
    class bq {
      constructor(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
        let cU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = UU, this.Zh = RU, this.sceneTask = gU, this.gpuDevice = tU, this.terrain = pU, this.meshes = EU, this.particles = PU, this.resources = TU, this.sunShadow = cU, this.jRU = void 0, this.backendName = "WebGPU (Lite)", this.B5 = void 0, this.modelMeshes = void 0, this.camera = new nq, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new kU(tU.lost), this.deviceLost = this.refusals.deviceLost, this.jRU = new wq(UU, qU, KU, tU.limits, TU), (0, oU.C)({
          WT: UU => {
            BU(UU) && TU.textureSlot(UU)
          },
          loaded: UU => BU(UU) ? TU.textureLoaded(UU) : null,
          canvasUpdated: (UU, RU, gU) => {
            BU(UU) && TU.canvasUpdated(UU, RU, gU)
          }
        }), this.B5 = EU.B5, this.modelMeshes = EU.modelMeshes, RU.camera = this.camera
      }
      get castsEntitySunShadows() {
        var UU, RU;
        return null !== (UU = null === (RU = this.sunShadow) || void 0 === RU ? void 0 : RU.tracesEntities) && void 0 !== UU && UU
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(UU) {
        this.modelMeshes.attach(UU.model, UU.sceneMirror);
        const RU = UU.Zh;
        this.setClearColour(RU.clearColor.r, RU.clearColor.g, RU.clearColor.b), RU.draw = () => {
          this.drawFrame(UU, RU)
        }
      }
      render(UU) {
        try {
          this.jRU.Am(), UU.Zh.render()
        } catch (RU) {
          throw this.refusals.frameFailed(RU), RU
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var UU, RU, gU, tU;
        const pU = [...this.particles.describePendingWork(), ...null !== (UU = null === (RU = this.sunShadow) || void 0 === RU ? void 0 : RU.describePendingWork()) && void 0 !== UU ? UU : []],
          EU = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (gU = this.terrain.sceneDepth) && void 0 !== gU && gU.compiling ? 1 : 0) + (null !== (tU = this.terrain.shadowMask) && void 0 !== tU && tU.compiling ? 1 : 0);
        EU > 0 && pU.push(`${EU} Lite pipelines compiling`);
        const PU = this.terrain.buffersAwaitingVerdict;
        PU > 0 && pU.push(`${PU} Lite terrain buffers awaiting their out-of-memory verdict`);
        const TU = this.resources.texturesLoading;
        return TU > 0 && pU.push(`${TU} Lite textures loading`), pU
      }
      prepareTexture(UU) {
        return null !== this.resources.boundTexture(UU) || this.resources.textureFailed(UU)
      }
      drawFrame(UU, RU) {
        var gU, tU, pU, EU, PU, TU;
        const qU = GT(UU);
        this.camera.copyFromView(qU), this.setClearColour(qU.clearColour[0], qU.clearColour[1], qU.clearColour[2]), null === (gU = this.sunShadow) || void 0 === gU || gU.prepare(UU.LG, qU.eye, null !== (tU = UU.LG.Fu) && void 0 !== tU ? tU : null), this.terrain.prepare(UU, qU), null === (pU = this.terrain.sceneDepth) || void 0 === pU || pU.setPlanes(qU.near, qU.far), null === (EU = this.terrain.shadowMask) || void 0 === EU || EU.prepare(qU), LP(this.sceneTask), this.meshes.prepare(RU, qU, UU.model.earthSky, null !== (PU = UU.LG.Fu) && void 0 !== PU ? PU : null), this.particles.prepare(qU);
        const KU = performance.now();
        this.resources.flushUploads(), null === (TU = this.sunShadow) || void 0 === TU || TU.traceEntities(this.meshes);
        try {
          (0, sU.s)(this.engine, this.lastFrameTime > 0 ? KU - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = KU
      }
      setClearColour(UU, RU, gU) {
        const tU = this.Zh.clearColor;
        tU.r = UU, tU.g = RU, tU.b = gU, tU.a = 1
      }
    }
    const oq = "WebGPU device lost while Lite was starting";

    function Zq(UU, RU) {
      return "object" === typeof UU && null !== UU ? Object.assign(UU, {
        startStep: RU
      }) : UU
    }
    async function aq(UU, RU) {
      const gU = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!gU) throw Zq(new Error("No WebGPU adapter"), "no_adapter");
      const tU = gU.info,
        pU = {
          vendor: (null === tU || void 0 === tU ? void 0 : tU.vendor) || "unknown vendor",
          renderer: (null === tU || void 0 === tU ? void 0 : tU.architecture) || "unknown renderer",
          version: (null === tU || void 0 === tU ? void 0 : tU.description) || "unknown version"
        },
        EU = function(UU) {
          const RU = {};
          for (const gU in UU.limits) {
            const tU = UU.limits[gU];
            "number" === typeof tU && (RU[gU] = tU)
          }
          return RU
        }(gU);
      let PU;
      UU.style.background = "black";
      try {
        PU = await (0, sU.i)(UU, {
          msaaSamples: RU.DRU ? 4 : 1,
          requiredLimits: EU,
          alphaMode: "premultiplied"
        })
      } catch (cU) {
        throw Zq(cU, "#47" === (null === (TU = cU) || void 0 === TU ? void 0 : TU.message) ? "no_adapter" : "device")
      }
      var TU;
      const qU = function(UU) {
        return UU._device
      }(PU);
      let KU = null;
      qU.lost.then((UU => {
        KU = UU, console.error(`WebGPU device lost (${UU.reason}): ${UU.message}`)
      }));
      try {
        const gU = await async function(UU, RU, gU, tU, pU, EU) {
          const PU = (0, yU.d)(UU),
            TU = new zP(UU, RU),
            qU = new MT(RU),
            KU = new ZP(RU, TU, (UU => function(UU, RU) {
              for (const tU of OU(UU)) {
                var gU;
                if (tU._targetSignature === RU) return null !== (gU = tU._sceneBG) && void 0 !== gU ? gU : null
              }
              return null
            }(PU, UU))),
            cU = new Jq(RU, TU);
          for (const uU of function(UU, RU, gU) {
              return [RU.opaqueRenderable, UU.opaqueRenderable, UU.skyLastRenderable, gU.renderable, RU.transparentRenderable, UU.transparentRenderable, UU.frontRenderable]
            }(KU, qU, cU)) lU(PU, uU);
          const GU = function(UU) {
            for (const RU of OU(UU))
              if ("Zh" === RU.name) return RU;
            throw new Error("Lite: the scene has no render task named scene")
          }(PU);
          pU && qU.installSceneDepth(GU, UU);
          const jU = EU ? new jq(RU, EU.entities) : null;
          qU.sunShadow = jU, jU && null !== EU && void 0 !== EU && EU.entities && (qU.shadowMask = new bT(RU, GU, UU, qU));
          return KU.sunShadow = jU, await (0, yU.e)(PU), new bq(UU, PU, GU, RU, qU, KU, cU, TU, gU, tU, jU)
        }(PU, qU, UU, pU, RU.sceneDepth, RU.sunShadow);
        if (null !== KU) {
          const {
            reason: UU,
            message: RU
          } = KU;
          throw Object.assign(new Error(`${oq} (${UU}): ${RU}`), {
            fallbackReason: oq
          })
        }
        return gU
      } catch (cU) {
        throw qU.destroy(), null === KU ? cU : Zq(cU, "device")
      }
    }
  },
  40270: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => CU,
      c: () => pU,
      d: () => tU,
      h: () => jU,
      i: () => cU,
      m: () => QU,
      n: () => EU,
      o: () => TU,
      r: () => qU,
      s: () => PU,
      v: () => hU,
      x: () => uU
    });
    const tU = 3,
      pU = 0,
      EU = 1,
      PU = 2,
      TU = {
        uniform: 3,
        Wj: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qU = 10,
      KU = "BloxdPackInputs",
      cU = "bloxdPackInputs",
      GU = [{
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
      jU = 80;

    function uU() {
      const UU = GU.map((UU => {
        let {
          name: RU,
          type: gU
        } = UU;
        return `    ${RU}: ${gU},\n`
      })).join("");
      return `struct ${KU} {\n${UU}}\n@group(${tU}) @binding(${pU}) var<uniform> ${cU}: ${KU};\n`
    }

    function CU(UU, RU) {
      const gU = new DataView(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, jU),
        [tU, pU, EU, PU, TU, qU] = GU;
      gU.setFloat32(tU.offset, RU.seconds, !0), gU.setUint32(pU.offset, RU.lit ? 1 : 0, !0);
      for (let KU = 0; KU < 3; KU++) gU.setInt32(EU.offset + 4 * KU, RU.renderOffset[KU], !0), gU.setFloat32(PU.offset + 4 * KU, RU.M_[KU], !0), gU.setFloat32(TU.offset + 4 * KU, RU.eyePosition[KU], !0), gU.setFloat32(qU.offset + 4 * KU, RU.shadowDirection[KU], !0)
    }

    function hU(UU) {
      const RU = new Uint32Array(Math.max(1, UU.length));
      return UU.forEach(((UU, gU) => {
        let {
          id: tU,
          rotation: pU
        } = UU;
        RU[gU] = 65535 & tU | (3 & pU) << 16
      })), RU
    }
    const QU = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);