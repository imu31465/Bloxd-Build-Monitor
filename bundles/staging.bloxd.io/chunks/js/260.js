export const id = 260;
export const ids = [260];
export const modules = {
  40425: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => MT,
      c: () => XT,
      g: () => WT,
      i: () => FT
    });
    var iT = IT(36175),
      zT = IT(37687),
      kT = IT(37682);

    function WT(TT, oT, IT, iT) {
      const zT = kT.v;
      oT.fill(0), TT.gravity.toArray(oT, zT.gravity), TT.colorDead.toArray(oT, zT.colorDead), IT[zT.ramp] = TT.useRampGradients ? 1 : 0;
      const WT = TT.getColorGradients(),
        XT = LT(TT, WT, "colour", iT);
      IT[zT.colorCount] = XT;
      for (let kT = 0; kT < XT; kT++) {
        var BT;
        const TT = WT[xT(WT, kT)];
        oT[zT.colorPositions + kT] = TT.gradient, TT.color1.toArray(oT, zT.color1 + 4 * kT), (null !== (BT = TT.color2) && void 0 !== BT ? BT : TT.color1).toArray(oT, zT.color2 + 4 * kT)
      }
      const FT = TT.getVelocityGradients(),
        ST = LT(TT, FT, "LM", iT);
      IT[zT.velocityCount] = ST;
      for (let kT = 0; kT < ST; kT++) AT(oT, zT.LM + 4 * kT, FT[xT(FT, kT)]);
      const DT = TT.useRampGradients ? TT.getColorRemapGradients() : null,
        cT = LT(TT, DT, "colour remap", iT);
      IT[zT.remapCount] = cT;
      for (let kT = 0; kT < cT; kT++) AT(oT, zT.remap + 4 * kT, DT[xT(DT, kT)])
    }

    function XT() {
      return {
        key: [],
        texels: new Uint8Array(4 * kT.l)
      }
    }
    const BT = [];

    function FT(TT, oT) {
      return ST(TT, BT), !rT(BT, oT.key) && (oT.key.length = 0, oT.key.push(...BT), oT.key.length > 0 && function(TT, oT) {
        for (let IT = 0; IT < kT.l; IT++) zT.i.GetCurrentGradient(IT / kT.l, TT, ((TT, oT, IT) => {
          iT.Color3.LerpToRef(TT.color, oT.color, IT, DT)
        })), oT[4 * IT] = 255 * DT.r, oT[4 * IT + 1] = 255 * DT.g, oT[4 * IT + 2] = 255 * DT.b, oT[4 * IT + 3] = 255
      }(TT.getRampGradients(), oT.texels), !0)
    }

    function ST(TT, oT) {
      oT.length = 0;
      const IT = TT.useRampGradients ? TT.getRampGradients() : null;
      if (null !== IT && void 0 !== IT && IT.length) {
        oT.push(IT.length);
        for (const TT of IT) oT.push(TT.gradient, TT.color.r, TT.color.g, TT.color.b)
      }
    }
    const DT = new iT.Color3;

    function LT(TT, oT, IT, iT) {
      return oT ? oT.length > kT.c ? (iT(`particleStops:${IT}`, `GPU particles use the first 2 and last ${kT.c-2} of more than ${kT.c} ${IT} gradient stops (${TT.name})`), kT.c) : oT.length : 0
    }

    function xT(TT, oT) {
      return oT < 2 || TT.length <= kT.c ? oT : TT.length - kT.c + oT
    }
    const cT = new Float32Array(kT.o),
      KT = new Uint32Array(cT.buffer);

    function MT(TT, oT, IT) {
      return WT(TT, cT, KT, IT), oT && rT(KT, oT) ? null : KT.slice()
    }

    function rT(TT, oT) {
      if (TT.length !== oT.length) return !1;
      for (let IT = 0; IT < TT.length; IT++)
        if (TT[IT] !== oT[IT]) return !1;
      return !0
    }

    function AT(TT, oT, IT) {
      var iT;
      TT[oT] = IT.gradient, TT[oT + 1] = IT.factor1, TT[oT + 2] = null !== (iT = IT.factor2) && void 0 !== iT ? iT : IT.factor1
    }
  },
  40417: (TT, oT, IT) => {
    function iT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const oT = new Set;
      return (IT, iT) => {
        oT.has(IT) || (oT.add(IT), console.warn(TT + iT))
      }
    }
    IT.d(oT, {
      c: () => iT
    })
  },
  40466: (TT, oT, IT) => {
    IT.d(oT, {
      createLiteRendererAsync: () => UB,
      liteBabylonBackend: () => nT,
      setPipelineFailureHook: () => Nz
    });
    var iT = IT(36175),
      zT = IT(36472),
      kT = IT(36847),
      WT = IT(36071),
      XT = IT(36857);
    class BT extends XT.b {
      constructor() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        super(...oT), this.color = new iT.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: oT[0].pC().getUniqueId(),
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
          needAlphaBlendingForMesh: TT => TT.visibility < 1 || TT.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const FT = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      ST = TT => 1 << FT.indexOf(TT),
      DT = ST("VERTEXCOLOR"),
      LT = ST("INSTANCES"),
      xT = ST("THIN_INSTANCES"),
      cT = ST("INSTANCESCOLOR"),
      KT = ST("FOG"),
      MT = ST("LITE_FRONT_LAYER");

    function rT(TT, oT, IT, iT) {
      let zT = 0;
      return TT.isVerticesDataPresent("color") && (zT |= DT), "none" !== oT && (zT |= LT), "thin" === oT && (zT |= xT, TT.isVerticesDataPresent("instanceColor") && (zT |= cT)), iT.fogEnabled && TT.applyFog && 0 !== iT.fogMode && (zT |= KT), IT >= 1 && (zT |= MT), zT
    }

    function AT(TT, oT) {
      TT.updateColor4("color", oT.color, oT.alpha)
    }
    var gT = IT(36791),
      hT = IT(36263),
      wT = IT(36205),
      mT = IT(36047),
      eT = IT(36774),
      RT = IT(36782),
      uT = IT(36063),
      vT = IT(36068),
      ET = IT(36076);
    const fT = mT.d.GLSL;
    class CT {
      constructor(TT, oT) {
        this.name = TT, this.NK = oT, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.bC = {
          addOnce: TT => {
            this.disposers.push(TT)
          }
        }, this.uniqueId = oT.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      pC() {
        return this.NK
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
      needAlphaBlendingForMesh(TT) {
        return (0, uT.S)(this.model, TT.visibility, TT.hasVertexAlpha)
      }
      needAlphaTestingForMesh(TT) {
        return (0, uT.T)(this.model, TT.visibility, TT.hasVertexAlpha)
      }
      dispose() {
        (0, hT.n)(this);
        for (const TT of this.disposers.splice(0)) TT()
      }
      get model() {
        return (0, uT.Z)(this)
      }
    }
    const jT = new WeakSet;

    function JT(TT) {
      return jT.has(TT)
    }

    function UT(TT) {
      jT.add(TT)
    }
    const aT = {
      create: (TT, oT) => ((0, wT.g)(TT, new CT(TT.name, oT)), vT.b.defines()),
      write: () => {},
      addFeature: (TT, oT) => {
        const IT = TT.mirror;
        oT.feature === RT.h && oT.state.dirLightCount > 0 && (TT.disableLighting = !0, (0, uT.W)(TT)), "BLOXD_LIGHTING" in oT.defines && (0, hT.j)(IT), oT.feature === eT.f && ((0, gT.e)(oT.state, fT), function(TT, oT) {
          const IT = TT.pC().Zc();
          oT.textures.forEach(((iT, zT) => {
            setTimeout((() => {
              var kT, WT;
              const {
                url: XT
              } = iT.source;
              IT.atlasArray(XT, null !== (kT = null === (WT = oT.sources.pixels) || void 0 === WT ? void 0 : WT[zT]) && void 0 !== kT ? kT : null, oT.sources.layerWidth).then((IT => {
                (0, gT.b)(TT, oT, zT, IT, IT.layerWidth, IT.layers, fT)
              })).catch((TT => {
                console.error(`Failed to build texture array for atlas ${zT}`, TT)
              }))
            }))
          }))
        }(IT, oT.state))
      },
      texture: (TT, oT, IT) => {
        let {
          data: iT,
          sets: zT
        } = IT;
        var kT;
        (UT(TT), iT) && (TT.uvSet = null !== (kT = null === zT || void 0 === zT ? void 0 : zT.coordinatesIndex) && void 0 !== kT ? kT : 0, (0, wT.U)(TT.matrix, null !== zT && void 0 !== zT ? zT : {}))
      },
      cube: UT,
      canvas: (TT, oT, IT) => {
        let {
          width: iT,
          height: zT,
          mipmaps: kT,
          samplingMode: WT = ET.g.trilinear,
          hasAlpha: XT = !1,
          wrap: BT = ET.c.clamp
        } = IT;
        const FT = TT.Zc().createCanvas(iT, zT),
          ST = new ET.k("2d", {
            kind: "canvas",
            width: iT,
            height: zT,
            canvas: FT
          }, {
            samplingMode: WT,
            wrapU: BT,
            wrapV: BT,
            noMipmap: !kT,
            invertY: !0
          });
        return ST.hasAlpha = XT, UT(ST), ST
      }
    };
    var YT = IT(36288),
      QT = IT(36149);
    class OT {
      constructor(TT, oT, IT) {
        this.engine = TT, this.clearColor = oT, this.ambientColor = IT, this.onBeforeRenderObservable = new QT.d, this.onBeforeCameraRenderObservable = new QT.d, this.onAfterRenderObservable = new QT.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.bR = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Zc() {
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
      addPendingData(TT) {
        this.pending.push(TT)
      }
      removePendingData(TT) {
        const oT = this.pending.indexOf(TT); - 1 !== oT && this.pending.splice(oT, 1)
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

    function HT() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const nT = {
      EiT: HT,
      uiT: (TT, oT) => {
        const IT = new OT(TT.engine, iT.b.FromArray(oT.clearColor), iT.Color3.FromArray(oT.ambientColor));
        (0, WT.b)(aT, IT), TT.NK = IT,
          function(TT, oT) {
            const IT = Object.assign((0, YT.l)(TT, "camera"), {
              layerMask: 268435455
            });
            TT.model.nodes.setWorldSource(IT.row, TT.model.view.worldMatrix), TT.camera = oT.activeCamera = IT
          }(TT, IT), (0, zT.i)(TT, ((TT, oT, IT) => (0, kT.l)(TT, oT, IT, XT.b)))
      },
      wiT: () => {},
      setBabylonFog: () => {},
      fiT: HT,
      JiT: () => {},
      linesFromArrays: (TT, oT, IT) => (0, kT.l)(TT, oT, IT, BT),
      PK: () => {},
      jiT: HT
    };
    var qT = IT(40530),
      ZT = IT(40545);
    class lT {
      constructor(TT) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const oT = new Promise((TT => {
          this.refused = TT
        }));
        this.deviceLost = Promise.race([TT, oT])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(TT) {
        (function(TT) {
          const {
            name: oT,
            message: IT
          } = null !== TT && void 0 !== TT ? TT : {};
          return "InvalidStateError" === oT && "string" === typeof IT && IT.startsWith("GPUDevice.")
        })(TT) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: TT.message,
          framesRefused: !0
        }))
      }
    }
    class sT {
      constructor(TT) {
        this.resources = TT, this.matrixKey = {
          fD: 0
        }, this.attributesKey = {
          fD: 0
        }, this.inputs = Object.create(null);
        for (let oT = 0; oT < 4; oT++) this.inputs[`world${oT}`] = new pT(this.matrixKey, 16 * oT, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(TT, oT) {
        this.resources.vertexBufferCreated(this.matrixKey, TT, !0), oT && this.resources.vertexBufferCreated(this.attributesKey, oT, !0)
      }
    }
    class tT extends sT {
      constructor(TT, oT, IT) {
        super(TT), this.mesh = oT, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const iT = this.inputs;
        let zT = 0;
        for (const {
            size: WT
          }
          of IT) zT += WT;
        for (const {
            name: WT,
            offset: XT,
            size: BT,
            type: FT
          }
          of IT) iT[WT] = new pT(this.attributesKey, 4 * XT, 4 * zT, BT, !0, FT);
        this.rowStride = zT, TT.I6.set(oT, this);
        const kT = oT.isVerticesDataPresent;
        oT.isVerticesDataPresent = (TT, IT) => TT in iT || kT.call(oT, TT, IT)
      }
      attach(TT, oT) {
        this.matrices = TT, this.attributes = oT, this.bind(TT, oT), this.mirror(TT, TT.length, TT.length / 16)
      }
      o3(TT) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, TT ? 64 * TT : void 0)
      }
      I3() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(TT, oT) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * TT, 16 * oT)
      }
      attributeRows(TT, oT) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, TT * this.rowStride, oT * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(TT, oT, IT) {
        const iT = this.mesh._thinInstanceDataStorage;
        iT.matrixData = TT, iT.matrixBufferSize = oT, iT.worldMatrices = null, iT.instancesCount = IT
      }
    }
    class GT extends sT {
      constructor(TT, oT, IT) {
        var iT, zT, kT, WT;
        super(TT), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (iT = null === IT || void 0 === IT ? void 0 : IT.interleavedKinds) && void 0 !== iT ? iT : null, this.offsets = null !== (zT = null === IT || void 0 === IT ? void 0 : IT.interleavedOffsets) && void 0 !== zT ? zT : [], this.rowStride = null !== (kT = null === IT || void 0 === IT ? void 0 : IT.interleavedRowStride) && void 0 !== kT ? kT : 0, null === (WT = this.layout) || void 0 === WT || WT.forEach(((TT, oT) => {
          this.inputs[TT] = new pT(this.attributesKey, 4 * this.offsets[oT], 4 * this.rowStride, IT.strides[TT])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), TT.batchUploads.set(oT, this), oT.bC.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(TT) {
        const oT = this.packedBatch;
        return oT.renderSelf ? 0 === TT ? this.packedSource : oT.instances[TT - 1] : oT.instances[TT]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(TT, oT, IT, iT) {
        const zT = (oT.renderSelf ? 1 : 0) + oT.rows.length;
        if (this.frame = iT, this.count = zT, this.packedSource = TT, this.packedBatch = oT, 0 === zT) return;
        if (TT.getWorldMatrix(), 16 * zT > this.matrices.length) {
          let TT = this.matrices.length / 16;
          for (; TT < zT;) TT *= 2;
          this.matrices = new Float32Array(16 * TT), this.attributes &&= new Float32Array(TT * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let kT = 0;
        oT.renderSelf && this.packRow(kT++, TT, oT.row, IT);
        for (let WT = 0; WT < oT.rows.length; WT++) this.packRow(kT++, oT.instances[WT], oT.rows[WT], IT);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * zT), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, zT * this.rowStride)
      }
      packRow(TT, oT, IT, iT) {
        const zT = this.matrices;
        if (IT < 0) zT.set(oT.getWorldMatrix().m, 16 * TT);
        else
          for (let FT = 0; FT < 16; FT++) zT[16 * TT + FT] = iT[16 * IT + FT];
        const kT = this.attributes;
        if (!kT) return;
        const WT = oT.HJ,
          XT = this.layout;
        for (let FT = 0; FT < XT.length; FT++) {
          var BT;
          const oT = null !== (BT = WT[XT[FT]]) && void 0 !== BT ? BT : 0,
            IT = TT * this.rowStride + this.offsets[FT];
          oT.toArray ? oT.toArray(kT, IT) : oT.copyToArray ? oT.copyToArray(kT, IT) : kT[IT] = oT
        }
      }
    }
    class pT {
      constructor(TT, oT, IT, iT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = TT, this.byteOffset = oT, this.byteStride = IT, this.size = iT, this.instanced = zT, this.type = kT, this.normalized = WT
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
    const bT = "CANVAS_ALPHA_ONE",
      yT = `override ${bT}: bool = false;`,
      NT = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function PT(TT, oT, IT) {
      var iT;
      let zT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const kT = null !== (iT = oT._colorFormat) && void 0 !== iT ? iT : "bgra8unorm",
        WT = zT ? 15 : 0;
      return IT ? {
        ...TT,
        targets: [{
          format: kT,
          blend: {
            color: IT,
            alpha: NT
          },
          writeMask: WT
        }]
      } : {
        ...TT,
        constants: {
          ...TT.constants,
          [bT]: 1
        },
        targets: [{
          format: kT,
          writeMask: WT
        }]
      }
    }

    function dT(TT, oT) {
      TT._renderables.push(oT)
    }

    function VT(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = TT._frameGraph) || void 0 === IT ? void 0 : IT._tasks) && void 0 !== oT ? oT : []
    }

    function To(TT) {
      return TT._currentEncoder
    }

    function oo(TT) {
      return TT.createBindGroupLayout({
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
    const Io = "greater-equal",
      io = 2e5,
      zo = 1e5,
      ko = new WeakMap;

    function Wo(TT, oT) {
      let IT = ko.get(TT);
      if (!IT) {
        IT = {
          module: TT.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, ko.set(TT, IT)
      }
      const iT = `${oT._colorFormat}|${oT._depthStencilFormat}|${oT._sampleCount}`;
      let zT = IT.pipelines.get(iT);
      if (!zT) {
        var kT;
        const {
          module: WT
        } = IT;
        zT = TT.createRenderPipeline({
          label: `placeholder ${iT}`,
          layout: TT.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: WT,
            entryPoint: "v"
          },
          fragment: {
            module: WT,
            entryPoint: "f",
            targets: [{
              format: null !== (kT = oT._colorFormat) && void 0 !== kT ? kT : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: oT._depthStencilFormat ? {
            format: oT._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: oT._sampleCount
          }
        }), IT.pipelines.set(iT, zT)
      }
      return zT
    }

    function Xo(TT, oT, IT) {
      const iT = oT.eye,
        zT = oT.viewMatrix;
      TT[0] = iT[0] + zT[2] * IT, TT[1] = iT[1] + zT[6] * IT, TT[2] = iT[2] + zT[10] * IT
    }
    var Bo = IT(36905),
      Fo = IT(40417),
      So = IT(36056);
    const Do = Math.PI,
      Lo = Do / 1.95,
      xo = [5e-4 / 94, 125e-7, 5e-4 / 18],
      co = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((TT => {
        let [oT, IT] = TT;
        return .434 * Do * Math.pow(2 * Do / oT, 2) * IT
      }));

    function Ko(TT, oT, IT) {
      const {
        up: iT,
        mieDirectionalG: zT
      } = TT, kT = 1 - Ao(1 - Math.exp(oT[1] / 45e4), 0, 1), WT = TT.rayleigh - (1 - kT), XT = Math.hypot(oT[0], oT[1], oT[2]), BT = XT > 0 ? 1 / XT : 0, FT = IT.sunDir;
      for (let xT = 0; xT < 3; xT++) FT[xT] = oT[xT] * BT;
      const ST = FT[0] * iT[0] + FT[1] * iT[1] + FT[2] * iT[2],
        DT = 1e3 * Math.max(0, 1 - Math.exp(-(Lo - Math.acos(Ao(ST, -1, 1))) / 1.5));
      IT.sunE = DT;
      const LT = .2 * TT.turbidity * 1e-17 * TT.mieCoefficient;
      for (let xT = 0; xT < 3; xT++) {
        const TT = xo[xT] * WT,
          oT = co[xT] * LT,
          iT = DT / (TT + oT);
        IT.inScatterR[xT] = TT * iT, IT.inScatterM[xT] = oT * iT, IT.extinctionBeta[xT] = 8400 * TT + 1250 * oT
      }
      return IT.sunsetMix = Ao(Math.pow(1 - ST, 5), 0, 1), IT.sunDiscE = 19e3 * DT, IT.mieScale = (1 - zT * zT) / (4 * Do), IT.mieBase = 1 + zT * zT, IT.mieSlope = 2 * zT, IT
    }
    const Mo = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const ro = 1 / function(TT) {
      const {
        A: oT,
        B: IT,
        C: iT,
        D: zT,
        E: kT,
        F: WT
      } = Mo;
      return (TT * (oT * TT + iT * IT) + zT * kT) / (TT * (oT * TT + IT) + zT * WT) - kT / WT
    }(1e3);

    function Ao(TT, oT, IT) {
      return Math.min(Math.max(TT, oT), IT)
    }
    const go = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function ho(TT, oT) {
      const IT = new Map(oT),
        iT = [],
        zT = [],
        kT = () => 0 === zT.length || zT[zT.length - 1].active;
      let WT = null;
      const XT = () => {
        const TT = [...IT].filter((TT => {
            let [, oT] = TT;
            return !0 !== oT
          })),
          oT = TT.map((TT => {
            let [oT] = TT;
            return oT
          })).join("|");
        WT = TT.length ? new RegExp(`\\b(${oT})\\b`, "g") : null
      };
      XT();
      for (const BT of TT.split("\n")) {
        const TT = go.exec(BT);
        if (!TT) {
          kT() && iT.push(WT ? wo(BT, WT, IT) : BT);
          continue
        }
        const oT = TT[1],
          FT = TT[2].trim();
        if ("ifdef" === oT || "ifndef" === oT || "if" === oT) {
          const TT = kT(),
            iT = "if" === oT ? mo(FT, IT) : IT.has(FT) === ("ifdef" === oT);
          zT.push({
            active: TT && iT,
            parentActive: TT,
            taken: iT
          })
        } else if ("elif" === oT || "else" === oT) {
          const TT = zT[zT.length - 1];
          if (!TT) throw new Error(`#${oT} without #if`);
          const iT = !TT.taken && ("else" === oT || mo(FT, IT));
          TT.active = TT.parentActive && iT, TT.taken = TT.taken || iT
        } else if ("endif" === oT) {
          if (!zT.pop()) throw new Error("#endif without #if")
        } else if (kT()) {
          const [TT, ...iT] = FT.split(/\s+/);
          "undef" === oT ? IT.delete(TT) : IT.set(TT, !iT.length || iT.join(" ")), XT()
        }
      }
      if (zT.length) throw new Error("Unterminated #if");
      return iT.join("\n")
    }

    function wo(TT, oT, IT) {
      return TT.replace(oT, (TT => {
        const oT = IT.get(TT);
        return "string" === typeof oT ? oT : TT
      }))
    }

    function mo(TT, oT) {
      var IT;
      const iT = null !== (IT = TT.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== IT ? IT : [];
      let zT = 0;
      const kT = () => iT[zT],
        WT = () => iT[zT++],
        XT = TT => {
          const IT = /^\d/.test(TT) ? TT : oT.get(TT);
          return "string" === typeof IT ? parseInt(IT) : Number.NaN
        },
        BT = () => {
          const TT = WT();
          if ("!" === TT) return !BT();
          if ("(" === TT) {
            const TT = ST();
            return WT(), TT
          }
          if ("defined" === TT) {
            const TT = "(" === kT();
            TT && WT();
            const IT = WT();
            return TT && WT(), oT.has(IT)
          }
          const IT = kT();
          if ("==" === IT || "!=" === IT || ">" === IT || "<" === IT || ">=" === IT || "<=" === IT) {
            WT();
            const oT = XT(TT),
              iT = XT(WT());
            if (Number.isNaN(oT) || Number.isNaN(iT)) return !1;
            switch (IT) {
              case "==":
                return oT === iT;
              case "!=":
                return oT !== iT;
              case ">":
                return oT > iT;
              case "<":
                return oT < iT;
              case ">=":
                return oT >= iT;
              default:
                return oT <= iT
            }
          }
          return oT.has(TT)
        },
        FT = () => {
          let TT = BT();
          for (;
            "&&" === kT();) {
            WT();
            const oT = BT();
            TT = TT && oT
          }
          return TT
        },
        ST = () => {
          let TT = FT();
          for (;
            "||" === kT();) {
            WT();
            const oT = FT();
            TT = TT || oT
          }
          return TT
        },
        DT = ST();
      if (zT !== iT.length) throw new Error(`Cannot evaluate #if ${TT}`);
      return DT
    }
    var eo = IT(36051),
      Ro = IT(36363),
      uo = IT(36369),
      vo = IT(39679),
      Eo = IT(37729);
    const fo = 32,
      Co = [10, 3, 10],
      jo = [21, 7, 21],
      Jo = jo[0] * jo[1] * jo[2],
      Uo = 0,
      ao = 1,
      Yo = 2,
      Qo = 3,
      Oo = 64,
      Ho = 512,
      no = 4 * Jo,
      qo = 1536,
      Zo = no + Jo * qo,
      so = 1073741824,
      to = Zo + 1;

    function Go(TT, oT) {
      const IT = TT % oT;
      return IT < 0 ? IT + oT : IT
    }

    function po(TT, oT, IT) {
      return iT = Go(TT, jo[0]), zT = Go(oT, jo[1]), kT = Go(IT, jo[2]), iT + jo[0] * (zT + jo[1] * kT);
      var iT, zT, kT
    }

    function bo(TT, oT, IT) {
      return TT + 8 * (oT + 8 * IT)
    }

    function yo(TT, oT, IT) {
      return TT + 4 * (oT + 4 * IT)
    }
    const No = 65535,
      Po = 0,
      Vo = 1,
      TI = 2,
      oI = 3;

    function II(TT) {
      return Math.ceil(TT * TT / 32)
    }
    const iI = 8192,
      zI = 1 << 18,
      kI = 65536,
      WI = 294912,
      XI = 128,
      BI = 4096,
      FI = 16,
      SI = 16385,
      DI = 81921,
      LI = 147457,
      xI = 4194304;
    const cI = [0, 0, 0],
      KI = [0, 0, 0];

    function MI(TT, oT, IT, iT) {
      ! function(TT, oT, IT) {
        const [iT, zT, kT] = [TT[0], TT[1], TT[2]];
        let WT, XT, BT;
        Math.abs(zT) < .99 ? (WT = kT, XT = 0, BT = -iT) : (WT = -zT, XT = iT, BT = 0);
        const FT = Math.hypot(WT, XT, BT);
        oT[0] = WT / FT, oT[1] = XT / FT, oT[2] = BT / FT, IT[0] = zT * oT[2] - kT * oT[1], IT[1] = kT * oT[0] - iT * oT[2], IT[2] = iT * oT[1] - zT * oT[0]
      }(iT, cI, KI);
      const zT = 1 / 32;
      for (const [kT, WT] of [
          [0, cI],
          [4, KI]
        ]) {
        for (let IT = 0; IT < 3; IT++) TT[oT + kT + IT] = WT[IT] * zT;
        TT[oT + kT + 3] = -(WT[0] * IT[0] + WT[1] * IT[1] + WT[2] * IT[2]) * zT
      }
    }
    class rI {
      constructor() {
        this.words = new Uint32Array(LI), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      hx(TT, oT) {
        this.parts = 0, this.refs = 0, this.view = TT, this.viewAt = oT;
        const IT = TT[oT + 1] * TT[oT + 6] - TT[oT + 2] * TT[oT + 5],
          iT = TT[oT + 2] * TT[oT + 4] - TT[oT] * TT[oT + 6],
          zT = TT[oT] * TT[oT + 5] - TT[oT + 1] * TT[oT + 4],
          kT = Math.hypot(IT, iT, zT) || 1;
        this.light[0] = IT / kT, this.light[1] = iT / kT, this.light[2] = zT / kT
      }
      add(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= BI || ! function(TT, oT, IT) {
            const iT = TT[oT],
              zT = TT[oT + 1],
              kT = TT[oT + 2],
              WT = TT[oT + 3],
              XT = TT[oT + 4],
              BT = TT[oT + 5],
              FT = TT[oT + 6],
              ST = TT[oT + 7],
              DT = TT[oT + 8],
              LT = TT[oT + 9],
              xT = TT[oT + 10],
              cT = TT[oT + 11],
              KT = TT[oT + 12],
              MT = TT[oT + 13],
              rT = TT[oT + 14],
              AT = TT[oT + 15],
              gT = iT * BT - zT * XT,
              hT = iT * FT - kT * XT,
              wT = iT * ST - WT * XT,
              mT = zT * FT - kT * BT,
              eT = zT * ST - WT * BT,
              RT = kT * ST - WT * FT,
              uT = DT * MT - LT * KT,
              vT = DT * rT - xT * KT,
              ET = DT * AT - cT * KT,
              fT = LT * rT - xT * MT,
              CT = LT * AT - cT * MT,
              jT = xT * AT - cT * rT,
              JT = gT * jT - hT * CT + wT * fT + mT * ET - eT * vT + RT * uT;
            if (!(Math.abs(JT) > 1e-12)) return !1;
            const UT = 1 / JT;
            return IT[0] = (BT * jT - FT * CT + ST * fT) * UT, IT[1] = (kT * CT - zT * jT - WT * fT) * UT, IT[2] = (MT * RT - rT * eT + AT * mT) * UT, IT[3] = (xT * eT - LT * RT - cT * mT) * UT, IT[4] = (FT * ET - XT * jT - ST * vT) * UT, IT[5] = (iT * jT - kT * ET + WT * vT) * UT, IT[6] = (rT * wT - KT * RT - AT * hT) * UT, IT[7] = (DT * RT - xT * wT + cT * hT) * UT, IT[8] = (XT * CT - BT * ET + ST * uT) * UT, IT[9] = (zT * ET - iT * CT - WT * uT) * UT, IT[10] = (KT * eT - MT * wT + AT * gT) * UT, IT[11] = (LT * wT - DT * eT - cT * gT) * UT, IT[12] = (BT * vT - XT * fT - FT * uT) * UT, IT[13] = (iT * fT - zT * vT + kT * uT) * UT, IT[14] = (MT * hT - KT * mT - rT * gT) * UT, IT[15] = (DT * mT - LT * hT + xT * gT) * UT, !0
          }(oT, IT, this.inverse)) return;
        const {
          view: iT,
          viewAt: zT
        } = this, kT = IT;
        let WT = 1 / 0,
          XT = 1 / 0,
          BT = -1 / 0,
          FT = -1 / 0,
          ST = -1 / 0;
        const [DT, LT, xT] = this.light;
        for (let wT = 0; wT < 8; wT++) {
          const IT = 1 & wT ? TT.hi[0] : TT.lo[0],
            cT = 2 & wT ? TT.hi[1] : TT.lo[1],
            KT = 4 & wT ? TT.hi[2] : TT.lo[2],
            MT = IT * oT[kT] + cT * oT[kT + 4] + KT * oT[kT + 8] + oT[kT + 12],
            rT = IT * oT[kT + 1] + cT * oT[kT + 5] + KT * oT[kT + 9] + oT[kT + 13],
            AT = IT * oT[kT + 2] + cT * oT[kT + 6] + KT * oT[kT + 10] + oT[kT + 14],
            gT = iT[zT] * MT + iT[zT + 1] * rT + iT[zT + 2] * AT + iT[zT + 3],
            hT = iT[zT + 4] * MT + iT[zT + 5] * rT + iT[zT + 6] * AT + iT[zT + 7];
          WT = Math.min(WT, gT), XT = Math.min(XT, hT), BT = Math.max(BT, gT), FT = Math.max(FT, hT), ST = Math.max(ST, DT * MT + LT * rT + xT * AT)
        }
        if (BT < -1 || FT < -1 || WT >= 1 || XT >= 1) return;
        const cT = this.parts++,
          KT = this.rects;
        KT[4 * cT] = AI(WT), KT[4 * cT + 1] = AI(XT), KT[4 * cT + 2] = AI(BT), KT[4 * cT + 3] = AI(FT);
        const MT = this.inverse,
          {
            cell: rT,
            dims: AT,
            lo: gT
          } = TT,
          hT = DI + cT * FI;
        for (let wT = 0; wT < 3; wT++) this.floats[hT + 4 * wT] = MT[wT] / rT, this.floats[hT + 4 * wT + 1] = MT[4 + wT] / rT, this.floats[hT + 4 * wT + 2] = MT[8 + wT] / rT, this.floats[hT + 4 * wT + 3] = (MT[12 + wT] - gT[wT]) / rT;
        this.words[hT + 12] = TT.at, this.floats[hT + 13] = ST + .001 * (1 + Math.abs(ST)), this.words[hT + 14] = AT[0] | AT[1] << 8 | AT[2] << 16
      }
      finish() {
        const TT = XI,
          {
            counts: oT,
            rects: IT,
            words: iT
          } = this;
        oT.fill(0);
        let zT = 0,
          kT = 0;
        for (; kT < this.parts; kT++) {
          const iT = 4 * kT,
            WT = (IT[iT + 2] - IT[iT] + 1) * (IT[iT + 3] - IT[iT + 1] + 1);
          if (zT + WT > 65536) break;
          zT += WT;
          for (let zT = IT[iT + 1]; zT <= IT[iT + 3]; zT++)
            for (let kT = IT[iT]; kT <= IT[iT + 2]; kT++) oT[zT * TT + kT]++
        }
        let WT = 0;
        for (let BT = 0; BT < 16384; BT++) iT[BT] = WT, WT += oT[BT], oT[BT] = iT[BT];
        iT[16384] = WT;
        for (let BT = 0; BT < kT; BT++) {
          const zT = 4 * BT;
          for (let kT = IT[zT + 1]; kT <= IT[zT + 3]; kT++)
            for (let WT = IT[zT]; WT <= IT[zT + 2]; WT++) iT[SI + oT[kT * TT + WT]++] = BT
        }
        const XT = this.floats;
        for (let BT = 0; BT < 16384; BT++) {
          const TT = SI + iT[BT],
            oT = TT + Math.min(iT[BT + 1] - iT[BT], 64);
          for (let IT = TT + 1; IT < oT; IT++) {
            const oT = iT[IT],
              zT = XT[81934 + oT * FI];
            let kT = IT - 1;
            for (; kT >= TT && XT[81934 + iT[kT] * FI] < zT; kT--) iT[kT + 1] = iT[kT];
            iT[kT + 1] = oT
          }
        }
        this.refs = zT
      }
    }

    function AI(TT) {
      return Math.min(127, Math.max(0, Math.floor((.5 * TT + .5) * XI)))
    }

    function gI(TT, oT, IT, iT, zT) {
      for (let kT = 0; kT < 4; kT++)
        for (let WT = 0; WT < 4; WT++) zT[4 * kT + WT] = TT[oT + 4 * kT] * IT[iT + WT] + TT[oT + 4 * kT + 1] * IT[iT + 4 + WT] + TT[oT + 4 * kT + 2] * IT[iT + 8 + WT] + TT[oT + 4 * kT + 3] * IT[iT + 12 + WT]
    }

    function hI(TT, oT, IT, iT, zT) {
      const kT = TT[0] - oT,
        WT = TT[1] - IT,
        XT = TT[2] - iT,
        BT = TT[3] - oT,
        FT = TT[4] - IT,
        ST = TT[5] - iT,
        DT = TT[6] - oT,
        LT = TT[7] - IT,
        xT = TT[8] - iT;
      if (Math.min(kT, BT, DT) > zT || Math.max(kT, BT, DT) < -zT) return !1;
      if (Math.min(WT, FT, LT) > zT || Math.max(WT, FT, LT) < -zT) return !1;
      if (Math.min(XT, ST, xT) > zT || Math.max(XT, ST, xT) < -zT) return !1;
      const cT = BT - kT,
        KT = FT - WT,
        MT = ST - XT,
        rT = DT - BT,
        AT = LT - FT,
        gT = xT - ST,
        hT = KT * gT - MT * AT,
        wT = MT * rT - cT * gT,
        mT = cT * AT - KT * rT;
      if (Math.abs(hT * kT + wT * WT + mT * XT) > zT * (Math.abs(hT) + Math.abs(wT) + Math.abs(mT))) return !1;
      const eT = [cT, KT, MT, rT, AT, gT, kT - DT, WT - LT, XT - xT];
      for (let RT = 0; RT < 3; RT++) {
        const TT = eT[3 * RT],
          oT = eT[3 * RT + 1],
          IT = eT[3 * RT + 2];
        for (let iT = 0; iT < 3; iT++) {
          const cT = 0 === iT ? 0 : 1 === iT ? IT : -oT,
            KT = 0 === iT ? -IT : 1 === iT ? 0 : TT,
            MT = 0 === iT ? oT : 1 === iT ? -TT : 0,
            rT = cT * kT + KT * WT + MT * XT,
            AT = cT * BT + KT * FT + MT * ST,
            gT = cT * DT + KT * LT + MT * xT,
            hT = zT * (Math.abs(cT) + Math.abs(KT) + Math.abs(MT));
          if (Math.min(rT, AT, gT) > hT || Math.max(rT, AT, gT) < -hT) return !1
        }
      }
      return !0
    }
    const wI = new Float32Array(1);
    new Uint32Array(wI.buffer);
    var mI = IT(37738);

    function eI(TT) {
      const [oT, IT, iT] = mI.p;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${TT.group}) @binding(${TT.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${oT-1}, ${IT-1}, ${iT-1});\n}\n`
    }

    function RI(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [zT, kT, WT] = jo, [XT, BT, FT] = Co, ST = Math.log2(fo), DT = iT ? "var<private> bloxdSpCrossed: bool;\n" : "", LT = iT ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${TT.group}) @binding(${TT.jL}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${TT.group}) @binding(${TT.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${IT?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${DT}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Vo}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${TI}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${IT?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${oI}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${zT}, ${kT}, ${WT});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${zT} * (s.y + ${kT} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${XT}, ${BT}, ${FT}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${ST}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Qo}u) {\n\t\treturn named && state == ${Yo}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${no}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Zo}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${oT?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${oT?`\t\tif (exits && step > 0 && step % ${EI} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${ST}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${Uo}u || kind == ${ao}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Yo}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${no}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${LT}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const uI = {
      group: 0,
      uniform: 0,
      jL: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function vI() {
      const TT = uI;
      return `${eI(TT)}${RI(TT,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${mI.b}>,\n}\n@group(${TT.group}) @binding(${TT.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${TT.group}) @binding(${TT.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${mI.i})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${mI.b}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${mI.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const EI = 2;
    const fI = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function CI(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const iT = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${oT.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        zT = "trace" === IT || "lit" === IT,
        kT = "maskEdge" === IT ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        WT = zT ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${oT.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${oT.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===IT?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${kT};\n`;
      return `${iT}${TT.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${zT?function(){const[TT,oT,IT]=mI.p;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${TT}.0, ${oT}.0, ${IT}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${WT}}\n`:""}${TT.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${oT.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${oT.renderOffset});\n}\n`:""}`
    }
    const jI = "bloxdSpOwnTexture";

    function JI(TT) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${TT.texture}) - 1u)))`
    }
    const UI = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${Bo.g.map((TT=>{let[oT,IT]=TT;return`\tbloxdSpOut.${oT} = (bloxdSpWord & ${IT}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function aI(TT) {
      return `bloxdSpFlags(${TT})`
    }
    const YI = `${vo.h}.eyePosition`;

    function QI(TT, oT, IT, iT, zT) {
      const kT = TT.indexOf(oT);
      if (kT < 0 || TT.indexOf(oT, kT + 1) >= 0) throw new Error(`Lite's ${zT} program changed at the shader pack ${iT} hook: ${kT<0?"no":"more than one"} anchor (lite/${zT}ShaderPack.ts)`);
      return TT.slice(0, kT) + IT + TT.slice(kT + oT.length)
    }

    function OI(TT) {
      return TT.sunShadow || TT.airShadow
    }

    function HI(TT, oT) {
      return oT && OI(TT)
    }
    const nI = {
      group: vo.d,
      ...vo.q
    };

    function qI(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!OI(TT)) return "";
      if (oT) {
        const oT = nI,
          zT = "trace" === IT || "lit" === IT;
        let kT = "";
        TT.sunShadow && (kT = zT ? `${RI(oT,!0,"lit"===IT)}${iT=oT,`@group(${iT.group}) @binding(${iT.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${iT.group}) @binding(${iT.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(TT, oT, IT) {
          const iT = `@group(${TT}) @binding(${oT}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return IT ? `${iT}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${fI}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((TT=>`\t{\n\t\tlet o = vec2i(${TT});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : iT
        }(oT.group, vo.r, "maskEdge" === IT));
        const WT = {
          shadowDirection: `${vo.h}.shadowDirection`,
          renderOffset: `${vo.h}.renderOffset`,
          eyePosition: `${vo.h}.eyePosition`
        };
        return `${eI(oT)}${kT}${function(TT){const[oT,IT,iT]=mI.p;return`@group(${TT.group}) @binding(${TT.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${TT.group}) @binding(${TT.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${oT}.0, ${IT}.0, ${iT}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(oT)}${CI(TT,WT,IT)}`
      }
      var iT;
      return `${TT.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${TT.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function ZI(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!oT) return "";
      const kT = (WT = "fragmentInputs.vPositionW", XT = TT.sunShadow ? {
        normal: IT,
        flags: iT
      } : null, `\n\tbloxdSpShadowPosition = ${WT};\n${XT?`\tbloxdSpShadowNormal = normalize(${XT.normal});\n\tbloxdSpShadowEmissive = (${XT.flags} & ${Bo.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${XT.flags} & ${Bo.k}u) != 0u;\n`:""}`);
      var WT, XT;
      return TT.sunShadow && ("mask" === zT || "maskEdge" === zT) ? `${kT}${BT="fragmentInputs.position",FT="maskEdge"===zT,`\n\tbloxdSpShadowPixel = vec2i(${BT}.xy);\n${FT?`\tbloxdSpShadowZ = ${BT}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${BT}.z), dpdy(${BT}.z));\n`:""}`}` : kT;
      var BT, FT
    }
    const lI = "bloxdSpTextureRotation",
      sI = "bloxdSpTextureLayers",
      tI = `@group(${vo.d}) @binding(${vo.v}) var<storage, read> ${sI}: array<u32>;\n`;

    function GI(TT) {
      return `\tvertexOutputs.vPackTexture = ${sI}[min(u32(${TT}), arrayLength(&${sI}) - 1u)];\n`
    }

    function pI(TT) {
      return void 0 !== TT.uv
    }

    function bI(TT) {
      if (!TT) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (pI(TT)) return function(TT) {
        const {
          texture: oT,
          cells: IT,
          layers: iT
        } = TT, zT = `textureDimensions(${oT}, bloxdSpLevel)`, kT = IT ? `max(vec2u(vec2f(${zT}) / ${IT}), vec2u(1u))` : zT, WT = IT ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${kT};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${IT}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${IT}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${oT}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${zT} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${kT};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${oT}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let XT;
        if (IT)
          if (1 === iT.length) XT = `\treturn bloxdSpOwnTexel(${iT[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const TT = iT.length - 1;
            XT = `\tvar bloxdSpColour = bloxdSpOwnTexel(${iT[TT]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let oT = TT - 1; oT >= 0; oT--) XT += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${iT[oT]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            XT += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else XT = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${TT.id?`var<private> ${jI}: u32;\n`:""}${WT}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${JI(TT)};\n\treturn ${kT};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${TT.id?jI:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${JI(TT)};\n${XT}}\n`
      }(TT);
      const oT = TT,
        IT = TT => {
          const IT = TT > 0 ? `bloxdSpLayer - ${oT.layers*TT}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${TT}, ${oT.sampler}, bloxdSpTurned, ${IT}, round(bloxdSpMipLevel));`
        };
      let iT = "";
      for (let kT = 0; kT < oT.count - 1; kT++) iT += `\tif (bloxdSpLayer < ${oT.layers*(kT+1)}u) {\n\t\t${IT(kT)}\n\t}\n`;
      const zT = oT.frame ? `${oT.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${lI}: u32;\n${tI}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${lI} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${lI} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${lI} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${zT}${iT}\t${IT(oT.count-1)}\n}\n`
    }

    function yI(TT, oT, IT) {
      return !!TT.surface && "bloxdDefaultSurface" !== TT.surface && function(TT, oT) {
        return "liquid" === oT || !TT
      }(oT, IT)
    }

    function NI(TT, oT) {
      return TT.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${oT.vertexLocalPosition}, ${aI(oT.vertexFlags)});\n\t\tlet bloxdSpVertex = ${TT.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function PI(TT, oT, IT, iT, zT) {
      if (!TT.surface) return "";
      const kT = (TT, oT) => `\n\tlet bloxdSpTexelUV = ${TT};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${oT}) - 1u));`;
      let WT = "",
        XT = "0u, 0u, vec2f(0.0), 0.0";
      const BT = iT && pI(iT) ? iT : null,
        FT = iT && !pI(iT) ? iT : null;
      if (BT) {
        WT = `${BT.id?`\n\tlet bloxdSpTexture = ${BT.id};\n\t${jI} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${BT.uv};${kT(function(TT,oT){var IT;return`${null!==(IT=TT.levelUv)&&void 0!==IT?IT:TT.cells?`${oT} / ${TT.cells}`:oT} * vec2f(textureDimensions(${TT.texture}))`}(BT,"bloxdSpUv"),BT.texture)}`, XT = (BT.id ? `${jI}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else FT && (WT = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${lI} = bloxdSpTexture >> 16u;${kT(`fragmentInputs.vMainUV1 * ${(0,eo.nb)(FT.width)}`,"textureAtlas0")}`, XT = `bloxdSpTexture & 0xffffu, ${lI}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const ST = zT.overlayColour,
        DT = ST ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        LT = "bloxdDefaultSurface" !== TT.surface || ST ? `\n\tbaseColor = vec4f(${DT}, baseColor.a);` : "",
        xT = yI(TT, oT, IT) ? `\n\t${zT.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${WT}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${zT.alpha}, ${zT.enchantTier}, ${zT.enchantColour}, ${zT.enchantSpeed}, ${null!==ST&&void 0!==ST?ST:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${zT.normal}, ${zT.localPosition}, ${aI(zT.flags)}, ${XT});\n\tlet bloxdSpSurface = ${TT.surface}(bloxdSpSurfaceIn);${LT}${xT}\n`
    }
    const dI = "bloxdSpLightIn";

    function VI(TT, oT, IT, iT) {
      if (!TT.light) return "";
      const zT = oT ? `${eo.j}.rgb, ${eo.j}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${eo.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: kT,
          diffuse: WT,
          emissive: XT,
          ambient: BT,
          fogColour: FT,
          fogAlpha: ST,
          normal: DT
        } = iT;
      return `\tvar ${dI} = BloxdLightIn(vec3f(0.0), ${IT?kT:"0.0"}, ${WT}, ${XT}, ${BT}, ${zT}, ${FT}, ${ST}, fragmentInputs.vPositionW, ${DT}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${dI}.litColour = bloxdLitColour(bloxdSpSurface, ${dI});\n`
    }

    function Ti(TT) {
      return TT.light ? `\n\t{\n\t\tlet bloxdSpLight = ${TT.light}(bloxdSpSurface, ${dI});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const oi = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      Ii = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      ii = "\treturn color;\n}",
      zi = {
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
    const ki = Object.freeze({});

    function Wi(TT) {
      var oT;
      return !(null === (oT = (0, Eo.f)(TT)) || void 0 === oT || !oT.sceneDepth)
    }

    function Xi(TT) {
      const oT = (0, Eo.f)(TT);
      return !!oT && yI(oT.hooks, oT.strict, oT.program)
    }

    function Bi(TT, oT, IT, iT) {
      return QI(TT, oT, IT, iT, "terrain")
    }

    function Fi(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const kT = function(TT) {
          return (0, Eo.b)(TT.packVariant, TT.liquid ? "liquid" : "terrain")
        }(TT),
        {
          hooks: WT
        } = kT,
        XT = HI(kT, iT),
        BT = "edge" === zT ? "maskEdge" : "plain" === zT ? "mask" : "trace",
        FT = NI(WT, zi);
      FT && (oT = Bi(oT, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${FT}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const ST = "atlas" === TT.texture ? {
          count: TT.atlasCount,
          layers: TT.atlasLayers,
          width: TT.xV,
          sampler: "atlasSampler",
          frame: TT.animated ? IT : null
        } : null,
        DT = `${kT.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${ZI(kT,XT,zi.normal,zi.flags,BT)}${PI(WT,kT.strict,kT.program,ST,zi)}`;
      DT && (oT = Bi(oT, oi, `${oi.slice(0,-1)}${DT}`, "surface"));
      const LT = Ti(WT);
      return LT && (oT = Bi(oT, Ii, `${VI(WT,TT.lighting,TT.dirLightCount>0,zi)}${Ii}`, "light input"), oT = Bi(oT, ii, `${LT.slice(1)}${ii}`, "light")), `${(0,vo.A)()}${kT.sceneDepth?`@group(${vo.d}) @binding(${vo.n}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${YI};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${qI(kT,XT,BT)}${bI(ST)}${UI}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${kT.code}${oT}`
    }
    const Si = mT.d.WGSL;

    function Di(TT) {
      return void 0 !== TT.packVariant
    }
    const Li = {
        UiT: 0,
        aiT: 4,
        YiT: 8,
        QiT: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      xi = Li.aoLevels + 4,
      ci = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Ki = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      Mi = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      ri = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Ai = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      gi = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      wi = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      mi = 0,
      ei = 3,
      Ri = 4,
      ui = 5,
      vi = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Ro.b}, ${Ro.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Ro.b}, ${Ro.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      Ei = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((TT=>uo.b>>TT&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const fi = {
      dD: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: TT => `animDataPerTex[${TT}]`
    };

    function Ci(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fi;
      return `\n\tlet atlasIdxIn = ${TT};\n\tlet animTick = ${IT.dD};\n\tlet animTickStride = ${IT.stride};\n\tlet numAnimTextures = ${IT.count};\n\t${(0,eT.d)(mT.d.WGSL,IT.perTexture)}\n\t${oT}animLayer;\n`
    }

    function ji(TT) {
      const oT = (oT, IT) => {
        const iT = oT > 0 ? `fragmentInputs.texAtlasIndex - ${TT.atlasLayers.toFixed(1)} * ${oT.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${IT?"textureSampleLevel":"textureSample"}(textureAtlas${oT}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${iT}))${IT?", atlasLod":""})`
      };
      if (1 === TT.atlasCount) return `baseColor = ${oT(0,!1)};`;
      let IT = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,eo.nb)(TT.xV)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let iT = 0; iT < TT.atlasCount; iT++) {
        const zT = TT.atlasLayers * (iT + 1) - .5;
        IT += `${iT>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,eo.nb)(zT)}) {\n\t\tbaseColor = ${oT(iT,!0)};\n\t}`
      }
      return IT
    }

    function Ji(TT) {
      return `terrain-${TT.texture}${"atlas"===TT.texture?TT.atlasCount:""}${TT.animated?"-anim":""}${TT.alphaTest?"-test":""}${TT.lighting?"-lit":""}-dir${TT.dirLightCount}${TT.packed?"-packed":""}${Di(TT)?`-sp${TT.packVariant}`:""}${TT.liquid?"-liquid":""}${TT.resting?"-rest":""}`
    }

    function Ui(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const iT = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const IT = "none" !== TT.texture,
          iT = "atlas" === TT.texture,
          zT = TT.dirLightCount > 0,
          kT = Di(TT);
        if (TT.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${TT.dirLightCount}`);
        let WT = 1,
          XT = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (iT) {
          TT.animated && (XT += `@group(2) @binding(${WT++}) var<storage, read> animDataPerTex: array<f32>;\n`), XT += `@group(2) @binding(${WT++}) var atlasSampler: sampler;\n`;
          for (let oT = 0; oT < TT.atlasCount; oT++) XT += `@group(2) @binding(${WT++}) var textureAtlas${oT}: texture_2d_array<f32>;\n`
        } else "single" === TT.texture && (XT += `@group(2) @binding(${WT++}) var diffuseSamplerSampler: sampler;\n`, XT += `@group(2) @binding(${WT++}) var diffuseSampler: texture_2d<f32>;\n`);
        const BT = function(TT) {
            const oT = wi,
              IT = "none" !== TT.texture,
              iT = "atlas" === TT.texture,
              zT = Di(TT);
            return TT.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${IT?"uv: vec2f,":""}\n\t${iT?"texAtlasIndices: f32,":""}\n\t${TT.lighting?"aPackedLightLevels: f32,":""}\n\t${zT?"blockFlagWords: vec2u,":""}\n}\n${vi}\n${Ei}\n${"single"===TT.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${IT?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===TT.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${iT?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${TT.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${zT?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${oT.position}) position: vec3f,\n\t@location(${oT.normal}) normal: vec4f,\n\t@location(${oT.color}) color: vec4f,\n\t${IT?`@location(${oT.uv}) uv: vec2f,`:""}\n\t${TT.lighting?`@location(${oT.packedLight}) aPackedLightLevels: f32,`:""}\n\t${zT?`@location(${oT.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(TT),
          FT = `\n${ri}\n${Ki}\n${Mi}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${XT}\n${yT}\n${BT.declarations}\nstruct Varyings {\n\t${"none"===oT?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${TT.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${zT?"@location(5) vTerrainLambert: f32,":""}\n\t${IT?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${iT?"@location(7) texAtlasIndex: f32,":""}\n\t${TT.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${kT?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${kT&&iT?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${TT.resting?"":(0,eo.o)(Si)}\n${gi}\n\n@vertex\nfn mainVertex(${BT.parameter}) -> Varyings {\n\t${BT.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${kT?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${Bo.d.placed}u;`:""}\n\t${kT&&iT?GI("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${TT.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${IT?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${iT?function(TT){return TT?Ci("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(TT.animated):""}\n\t${"single"===TT.texture&&TT.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,eo.X)(Si)}\n\t${(0,eo.C)(Si,TT.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${TT.resting?"":Ai}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${iT?ji(TT):""}\n\t${"single"===TT.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${IT?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${TT.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${zT?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${bT}));\n\t${Di(TT)?(0,eo.hb)(mT.d.WGSL):(0,eo.L)(Si)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          ST = new Set;
        TT.lighting && ST.add("BLOXD_LIGHTING");
        zT && ST.add("BLOXD_TERRAIN_DIRECTIONAL");
        return ho(FT, new Map([...ST].map((TT => [TT, !0]))))
      }(TT, IT);
      if (!Di(TT)) return iT;
      const zT = Fi(TT, iT, Ci, oT, IT);
      return "none" === IT ? zT : `${zT}${function(TT){const oT="none"!==TT.texture&&TT.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${TT.resting?"":Ai}\n\t${TT.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${oT&&"atlas"===TT.texture?ji(TT):""}\n\t${oT&&"single"===TT.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${oT?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${Bo.d.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(TT)}`
    }
    const ai = new Map([
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

    function Yi(TT, oT) {
      const IT = new Map;
      let iT = 0;
      const zT = [],
        kT = [],
        WT = [];
      for (const FT of oT) {
        var XT, BT;
        const oT = null !== (XT = FT.type.trim().split(/\s+/).pop()) && void 0 !== XT ? XT : FT.type,
          ST = ai.get(oT);
        if (!ST) throw new Error(`Lite: no uniform layout for ${FT.name}: ${FT.type}`);
        const DT = null !== (BT = FT.arraySize) && void 0 !== BT ? BT : 0,
          LT = DT ? 4 : ST.align;
        iT = Math.ceil(iT / LT) * LT;
        const xT = DT ? 4 * Math.ceil(ST.floats / 4) : ST.floats;
        if (IT.set(FT.name, {
            offset: iT,
            floats: ST.floats,
            arraySize: DT,
            stride: xT
          }), DT && ST.floats <= 2) {
          const oT = `${TT}_${WT.length}_strided`;
          kT.push(`struct ${oT} {\n\t@size(16) el: ${ST.wgsl},\n}`), WT.push(FT.name), zT.push(`\t@align(16) ${FT.name}: array<${oT}, ${DT}>,`)
        } else DT ? zT.push(`\t@align(16) ${FT.name}: array<${ST.wgsl}, ${DT}>,`) : zT.push(`\t${FT.name}: ${ST.wgsl},`);
        iT += DT ? xT * DT : ST.floats
      }
      return {
        slots: IT,
        floats: Math.max(4, 4 * Math.ceil(iT / 4)),
        wgsl: `${kT.join("\n")}\nstruct ${TT} {\n${zT.join("\n")}\n}\n`,
        stridedArrays: WT
      }
    }
    const Qi = [{
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
      Oi = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      Hi = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function ni(TT, oT) {
      return `#if defined(${TT}) && ${TT}DIRECTUV == 0\nvarying v${oT}UV: vec2f;\n#endif`
    }

    function qi(TT, oT, IT) {
      return `#if defined(${TT}) && ${TT}DIRECTUV == 0\nif (uniforms.v${oT}Infos.x==0.)\n{vertexOutputs.v${oT}UV= (uniforms.${IT}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${oT}UV= (uniforms.${IT}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Zi(TT, oT, IT) {
      return `#ifdef ${TT}\n#if ${TT}DIRECTUV == 1\n#define v${oT}UV vMainUV1\n#elif ${TT}DIRECTUV == 2\n#define v${oT}UV vMainUV2\n#else\nvarying v${oT}UV: vec2f;\n#endif\nvar ${IT}SamplerSampler: sampler;\nvar ${IT}Sampler: texture_2d<f32>;\n#endif`
    }
    const li = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      si = 256,
      ti = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      Gi = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      bi = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      yi = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Ni = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      Pi = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      di = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      Vi = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Gi}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${ni("OPACITY","Opacity")}\n${ni("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${di}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${bi}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${qi("OPACITY","Opacity","opacity")}\n${qi("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${yi}\n#define CUSTOM_VERTEX_MAIN_END\n${Ni}\n}\n`;
    const Tz = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Zi("OPACITY","Opacity","opacity")}\n${Zi("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${di}\n${Pi}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((TT,oT)=>function(TT){const oT=`
    frame.lights[LITE_LIGHT$ {
        TT
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      TT
    }\
    nvar diffuse$ {
      TT
    }: vec4f = $ {
      oT
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      TT
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      oT
    }.vLightData, diffuse$ {
      TT
    }.rgb, $ {
      oT
    }.vLightSpecular.rgb, diffuse$ {
      TT
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(oT))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, oz = /^([gimus]+)!/, Iz = new Set;

    function iz(TT) {
      Iz.has(TT) || (Iz.add(TT), console.warn(`Lite: no place for plugin code at ${TT} in the standard shader: it is left out`))
    }

    function zz(TT, oT) {
      let IT = TT;
      const iT = new Map;
      for (const [kT, WT] of oT) {
        var zT;
        iT.set(kT, `${null!==(zT=iT.get(kT))&&void 0!==zT?zT:""}${WT}\n`)
      }
      for (const [kT, WT] of iT) {
        if (!kT.startsWith("!")) {
          const TT = `#define ${kT}`;
          if (!IT.includes(TT)) {
            iz(kT);
            continue
          }
          IT = IT.replace(TT, (() => `\n${WT}\n${TT}`));
          continue
        }
        let TT = kT.substring(1),
          oT = "g";
        if (TT.startsWith("!")) oT = "", TT = TT.substring(1);
        else {
          const IT = oz.exec(TT);
          IT && (oT = IT[1], TT = TT.substring(oT.length + 1))
        }
        const iT = new RegExp(TT, oT.includes("g") ? oT : `${oT}g`);
        let zT = iT.exec(IT);
        for (zT || iz(kT); zT;) {
          const TT = zT,
            oT = WT.replace(/\$(\d+)/g, ((oT, IT) => Number(IT) < TT.length ? TT[Number(IT)] : ""));
          IT = IT.substring(0, TT.index) + oT + IT.substring(TT.index + TT[0].length), iT.lastIndex = TT.index + oT.length, zT = iT.exec(IT)
        }
      }
      return IT
    }
    const kz = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Wz = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      Xz = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function Bz(TT) {
      const oT = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let IT = TT.replace(kz, ((TT, IT, iT, zT, kT, WT) => ("attribute" === IT ? oT.attributes.push({
        name: kT,
        type: WT
      }) : void 0 === IT ? oT.varyings.push({
        name: kT,
        type: WT,
        interpolation: Sz(WT, iT, zT)
      }) : oT.uniforms.push({
        name: kT,
        type: Fz(WT)
      }), "")));
      return IT = IT.replace(Wz, ((TT, IT) => (oT.samplers.add(IT), ""))), IT = IT.replace(Xz, ((TT, IT, iT) => (oT.textures.push({
        name: IT,
        type: iT
      }), ""))), oT.body = IT, oT
    }

    function Fz(TT) {
      const oT = TT.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        IT = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(oT);
      if (!IT) throw new Error(`Lite: unsupported uniform type ${TT}`);
      return IT
    }

    function Sz(TT, oT, IT) {
      return void 0 === oT && void 0 === IT ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(TT.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === oT ? "@interpolate(flat) " : `@interpolate(${null!==oT&&void 0!==oT?oT:"perspective"}, ${null!==IT&&void 0!==IT?IT:"center"}) `
    }

    function Dz(TT) {
      return Kz({
        defines: TT.defines,
        vertex: zz(Vi, TT.vertexCode),
        fragment: zz(Tz, TT.fragmentCode),
        members: [...Qi, ...TT.defines.has("OPACITY") ? Oi : [], ...TT.defines.has("EMISSIVE") ? Hi : [], ...TT.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Lz(TT) {
      const oT = TT.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (oT === TT) throw new Error("Lite: fragment main has no return");
      return oT
    }
    const xz = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Gi}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${bi}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${yi}\n${Ni}\n}\n`,
      cz = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Pi}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Kz(TT) {
      const oT = TT.defines,
        IT = Bz(ho(TT.vertex, oT)),
        iT = Bz(ho(TT.fragment, oT)),
        zT = new Map;
      for (const gT of [...IT.varyings, ...iT.varyings]) zT.has(gT.name) || zT.set(gT.name, gT);
      const kT = [...zT.values()].map(((TT, oT) => `\t@location(${oT}) ${TT.interpolation}${TT.name}: ${TT.type},`)),
        WT = [...TT.members];
      for (const gT of [...IT.uniforms, ...iT.uniforms]) WT.some((TT => TT.name === gT.name)) || WT.push(gT);
      const XT = Yi(TT.structName, WT),
        BT = [],
        FT = [];
      let ST = 1;
      const DT = new Set;
      for (const gT of [...IT.textures, ...iT.textures]) {
        if (DT.has(gT.name)) continue;
        DT.add(gT.name);
        const TT = `${gT.name}Sampler`,
          oT = ST++,
          IT = ST++,
          iT = gT.type.startsWith("texture_2d_array") ? "2d-array" : gT.type.startsWith("texture_cube") ? "cube" : "2d";
        BT.push({
          name: gT.name,
          binding: oT,
          samplerBinding: IT,
          dimension: iT
        }), FT.push(`@group(2) @binding(${oT}) var ${gT.name}: ${gT.type};`), FT.push(`@group(2) @binding(${IT}) var ${TT}: sampler;`)
      }
      for (const gT of [...IT.samplers, ...iT.samplers])
        if (!DT.has(gT.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${gT} has no texture`);
      const LT = [ri, ti, XT.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${TT.structName};`, ...FT].join("\n"),
        xT = IT.attributes,
        cT = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...IT.attributes.map(((TT, oT) => `\t@location(${oT}) ${TT.name}: ${TT.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        KT = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...kT, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        MT = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...iT.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...kT, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", yT, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${bT}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        rT = TT => {
          for (const oT of XT.stridedArrays) TT = TT.replace(new RegExp(`\\b${oT}\\s*\\[(.*?)\\]`, "g"), `${oT}[$1].el`);
          return TT
        };
      return {
        vertex: `${LT}\n${cT}\n${KT}\n${rT(IT.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${LT}\n${MT}\n${Lz((AT=rT(iT.body),AT.includes("fragmentInputs.position")?AT.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):AT))}`,
        attributes: xT,
        material: XT,
        textures: BT
      };
      var AT
    }
    const Mz = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      rz = TT => ({
        name: TT,
        type: "vec3"
      }),
      Az = TT => ({
        name: TT,
        type: "float"
      }),
      gz = Yi("EarthSkyUniforms", [rz("viewFrom"), Az("exposureScale"), rz("zenithOffset"), Az("fogOn"), rz("up"), Az("ditherOn"), rz("sun"), Az("turbidity"), rz("tint"), Az("rayleigh"), rz("sunDir"), Az("mieStrength"), rz("inScatterR"), Az("mieFocus"), rz("inScatterM"), Az("sunE"), rz("extinctionBeta"), Az("sunsetMix"), Az("mieScale"), Az("mieBase"), Az("mieSlope"), Az("sunDiscE"), Az("exposure")]),
      hz = `${ri}\n${ti}\n${gz.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      wz = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Mz.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      mz = `\n${yT}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Mo).map((TT=>{let[oT,IT]=TT;return`const TONE_${oT}: f32 = ${IT};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${ro};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${bT}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var ez = IT(36114);
    const Rz = new ez.sc,
      uz = new ez.sc,
      vz = new ez.Quaternion,
      Ez = new Float64Array(3),
      fz = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Cz = new Float64Array(16);

    function jz(TT, oT, IT) {
      const iT = IT.worldMatrix;
      var zT;
      TT.updateFloat3("viewFrom", iT[12], iT[13], iT[14]), TT.updateFloatsFrom("zenithOffset", oT.cameraOffset, 0, 3), TT.updateFloatsFrom("up", oT.up, 0, 3), oT.luminance > 0 && (TT.updateFloat("exposure", oT.luminance), TT.updateFloat("exposureScale", (zT = oT.luminance, Math.log2(2 / Math.pow(zT, 4))))), TT.updateFloat("turbidity", oT.turbidity), TT.updateFloat("rayleigh", oT.rayleigh), TT.updateFloat("mieStrength", oT.mieCoefficient), TT.updateFloat("mieFocus", oT.mieDirectionalG), TT.updateFloatsFrom("tint", oT.tint, 0, 3), TT.updateFloat("fogOn", oT.fog && IT.fogEnabled && 0 !== IT.fogMode ? 1 : 0), TT.updateFloat("ditherOn", oT.dithering ? 1 : 0);
      const kT = oT.sunPosition;
      if (Rz.set(kT[0], kT[1], kT[2]), !oT.useSunPosition) {
        const TT = Math.PI * (oT.inclination - .5),
          IT = 2 * Math.PI * (oT.azimuth - .5);
        Rz.set(oT.distance * Math.cos(IT) * Math.cos(TT), oT.distance * Math.sin(-TT), oT.distance * Math.sin(IT) * Math.cos(TT)), ez.Quaternion.FromUnitVectorsToRef(ez.sc.UpReadOnly, uz.set(oT.up[0], oT.up[1], oT.up[2]), vz), Rz.rotateByQuaternionToRef(vz, Rz)
      }
      TT.updateVector3("sun", Rz), Ez[0] = Rz.x, Ez[1] = Rz.y, Ez[2] = Rz.z;
      const WT = Ko(oT, Ez, fz);
      TT.updateFloatsFrom("sunDir", WT.sunDir, 0, 3), TT.updateFloat("sunE", WT.sunE), TT.updateFloatsFrom("inScatterR", WT.inScatterR, 0, 3), TT.updateFloatsFrom("inScatterM", WT.inScatterM, 0, 3), TT.updateFloatsFrom("extinctionBeta", WT.extinctionBeta, 0, 3), TT.updateFloat("sunsetMix", WT.sunsetMix), TT.updateFloat("sunDiscE", WT.sunDiscE), TT.updateFloat("mieScale", WT.mieScale), TT.updateFloat("mieBase", WT.mieBase), TT.updateFloat("mieSlope", WT.mieSlope)
    }

    function Jz(TT, oT) {
      const IT = Cz;
      IT[0] = oT.far, IT[5] = oT.far, IT[10] = oT.far, IT[15] = 1;
      const iT = TT.infiniteDistance;
      for (let zT = 0; zT < 3; zT++) IT[12 + zT] = TT.position[zT] + (iT ? oT.worldMatrix[12 + zT] : 0);
      return Cz
    }
    var Uz = IT(37700);

    function az(TT) {
      return Math.max(4, 4 * Math.ceil(TT / 4))
    }

    function Yz(TT, oT, IT, iT) {
      const zT = TT.createBuffer({
        label: iT,
        size: az(oT.byteLength),
        usage: IT,
        mappedAtCreation: !0
      });
      return new Uint8Array(zT.getMappedRange(), 0, oT.byteLength).set(new Uint8Array(oT.buffer, oT.byteOffset, oT.byteLength)), zT.unmap(), zT
    }

    function Qz(TT, oT) {
      return Math.floor(Math.log2(Math.max(TT, oT))) + 1
    }

    function Oz(TT, oT, IT, iT, zT, kT) {
      const WT = TT.createTexture({
          label: kT,
          size: {
            width: IT,
            height: iT,
            depthOrArrayLayers: zT
          },
          format: "rgba8unorm",
          mipLevelCount: Qz(IT, iT),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        XT = (oT, IT, iT, kT) => {
          TT.queue.writeTexture({
            texture: WT,
            mipLevel: IT
          }, oT, {
            bytesPerRow: 4 * iT,
            rowsPerImage: kT
          }, {
            width: iT,
            height: kT,
            depthOrArrayLayers: zT
          })
        };
      XT(oT, 0, IT, iT);
      let BT = 1;
      for (const FT of function*(TT, oT, IT, iT) {
          let zT = TT,
            kT = oT,
            WT = IT;
          for (; kT > 1 || WT > 1;) {
            const TT = Math.max(1, kT >> 1),
              oT = Math.max(1, WT >> 1),
              IT = new Uint8Array(TT * oT * iT * 4),
              XT = 4 * kT;
            let BT = 0;
            for (let FT = 0; FT < iT; FT++) {
              const iT = FT * XT * WT;
              for (let FT = 0; FT < oT; FT++) {
                const oT = iT + Math.min(2 * FT, WT - 1) * XT,
                  ST = iT + Math.min(2 * FT + 1, WT - 1) * XT;
                for (let iT = 0; iT < TT; iT++) {
                  const TT = 4 * Math.min(2 * iT, kT - 1),
                    WT = 4 * Math.min(2 * iT + 1, kT - 1);
                  for (let iT = 0; iT < 4; iT++) IT[BT++] = zT[oT + TT + iT] + zT[oT + WT + iT] + zT[ST + TT + iT] + zT[ST + WT + iT] + 2 >> 2
                }
              }
            }
            yield {
              data: IT,
              width: TT,
              height: oT
            }, zT = IT, kT = TT, WT = oT
          }
        }(oT, IT, iT, zT)) XT(FT.data, BT++, FT.width, FT.height);
      return WT
    }
    const Hz = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function nz(TT) {
      if (TT.startsWith("data:")) {
        const oT = TT.search(/[;,]/);
        return `data:${oT>5?TT.slice(5,oT):""} URL of ${TT.length} characters`
      }
      return TT.length > 80 ? `${TT.slice(0,80)}...` : TT
    }
    async function qz(TT) {
      const oT = await fetch(TT);
      if (!oT.ok) throw new Error(`${nz(TT)}: ${oT.status} ${oT.statusText}`);
      return createImageBitmap(await oT.blob(), Hz)
    }
    async function Zz(TT) {
      const oT = await qz(TT),
        IT = new OffscreenCanvas(oT.width, oT.height),
        iT = IT.getContext("2d", {
          willReadFrequently: !0
        });
      if (!iT) throw new Error("No 2D context to decode an image");
      iT.drawImage(oT, 0, 0);
      const {
        data: zT
      } = iT.getImageData(0, 0, oT.width, oT.height);
      return oT.close(), {
        pixels: new Uint8Array(zT.buffer, zT.byteOffset, zT.byteLength),
        width: IT.width,
        height: IT.height
      }
    }
    const lz = new WeakMap;

    function sz(TT, oT, IT, iT) {
      var zT;
      const kT = null !== (zT = lz.get(TT)) && void 0 !== zT ? zT : new Map;
      lz.set(TT, kT);
      let WT = kT.get(oT);
      return WT || (WT = (async zT => {
        const kT = null !== (zT = function(TT, oT) {
          const IT = TT ? new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength) : null;
          return null !== IT && void 0 !== IT && IT.byteLength && oT && IT.byteLength % (oT * oT * 4) === 0 ? {
            pixels: IT,
            layerWidth: oT,
            layers: IT.byteLength / (oT * oT * 4)
          } : null
        }(IT, iT)) && void 0 !== zT ? zT : await async function(TT) {
          const {
            pixels: oT,
            width: IT
          } = await Zz(TT);
          return {
            pixels: oT,
            layerWidth: IT,
            layers: oT.byteLength / (IT * IT * 4)
          }
        }(oT), {
          layerWidth: WT,
          layers: XT
        } = kT;
        return {
          texture: Oz(TT, kT.pixels, WT, WT, XT, `atlas-${oT}`),
          layerWidth: WT,
          layers: XT
        }
      })(), kT.set(oT, WT), WT.catch((() => {
        kT.delete(oT)
      }))), WT
    }
    const tz = new Map([
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
      Gz = new Map([
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

    function pz(TT) {
      for (const oT of (0, Uz.l)(TT))
        if (!Gz.has((0, Uz.i)(oT))) return !1;
      return !0
    }

    function bz(TT) {
      const oT = Gz.get(TT);
      if (!oT) return null;
      const [IT, iT, zT] = oT;
      return {
        srcFactor: tz.get(IT),
        dstFactor: tz.get(iT),
        operation: zT
      }
    }
    let yz = null;

    function Nz(TT) {
      yz = TT
    }

    function Pz(TT, oT, IT) {
      var iT;
      null === (iT = yz) || void 0 === iT || iT(TT, oT, IT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class dz {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(TT, oT, IT, iT, zT) {
        IT !== this.pipeline && (TT.setPipeline(IT), this.pipeline = IT), TT.setBindGroup(1, iT, [zT]);
        const kT = oT.material.bindGroup;
        kT !== this.materialGroup && (TT.setBindGroup(2, kT), this.materialGroup = kT);
        const WT = oT.program.packGroup;
        WT && WT !== this.packGroup && (TT.setBindGroup(vo.d, WT), this.packGroup = WT);
        const {
          vertexBuffers: XT,
          vertexOffsets: BT
        } = this;
        for (let FT = 0; FT < oT.vertexBuffers.length; FT++) XT[FT] === oT.vertexBuffers[FT] && BT[FT] === oT.vertexOffsets[FT] || (TT.setVertexBuffer(FT, oT.vertexBuffers[FT], oT.vertexOffsets[FT]), XT[FT] = oT.vertexBuffers[FT], BT[FT] = oT.vertexOffsets[FT]);
        oT.indexBuffer && oT.indexBuffer !== this.indexBuffer && (TT.setIndexBuffer(oT.indexBuffer, oT.indexFormat), this.indexBuffer = oT.indexBuffer)
      }
    }
    class Vz {
      constructor(TT, oT, IT, iT) {
        this.modelMeshes = TT, this.K8 = oT, this.maker = IT, this.warnOnce = iT, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(TT) {
        this.collectGroup(TT, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(TT, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(TT, 1, this.frontDraws, this.frontDraws, !0);
        for (const oT of this.modelMeshes.groupIds())(oT < -1 || oT > 1) && this.warnOnce(`group:${oT}`, `rendering group ${oT} is not drawn`);
        for (const oT of this.K8.groupIds())(oT < -1 || oT > 1) && this.warnOnce(`group:${oT}`, `rendering group ${oT} is not drawn`);
        this.opaqueDraws.sort(Tk), this.transparentDraws.sort(Ik)
      }
      collectGroup(TT, oT, IT, iT, zT) {
        const kT = this.modelMeshes.group(oT),
          WT = this.K8.group(oT),
          XT = 0 === oT ? null === WT || void 0 === WT ? void 0 : WT.opaque : void 0;
        this.collectList(TT, null === kT || void 0 === kT ? void 0 : kT.opaque, XT || null === WT || void 0 === WT ? void 0 : WT.opaque, oT, !1, IT, zT), XT && (this.K8.drawn += this.maker.bundleDraws(TT, XT, oT)), this.collectList(TT, null === kT || void 0 === kT ? void 0 : kT.alphaTest, void 0, oT, !1, IT, zT), this.collectList(TT, null === kT || void 0 === kT ? void 0 : kT.transparent, null === WT || void 0 === WT ? void 0 : WT.transparent, oT, !0, iT, zT)
      }
      collectList(TT, oT, IT, iT, zT, kT, WT) {
        var XT;
        const BT = kT.length;
        oT && this.maker.pushDraws(TT, oT.units, oT.units.length, iT, zT, kT, oT.rows), IT && (this.K8.drawn += this.maker.pushDraws(TT, IT, IT.length, iT, zT, kT));
        const FT = zT ? null === (XT = this.modelMeshes.group(iT)) || void 0 === XT ? void 0 : XT.text : void 0;
        FT && this.maker.pushDraws(TT, FT.units, FT.units.length, iT, !0, kT, FT.rows), WT && ik(kT, BT)
      }
    }

    function Tk(TT, oT) {
      return TT.program.id - oT.program.id || TT.material.owner.uniqueId - oT.material.owner.uniqueId
    }

    function Ik(TT, oT) {
      return TT.material.owner.uniqueId - oT.material.owner.uniqueId
    }

    function ik(TT, oT) {
      for (let IT = oT + 1; IT < TT.length; IT++) {
        const iT = TT[IT];
        let zT = IT - 1;
        for (; zT >= oT && Ik(TT[zT], iT) > 0; zT--) TT[zT + 1] = TT[zT];
        TT[zT + 1] = iT
      }
    }
    const zk = {};

    function kk(TT) {
      return TT.hasThinInstances ? "thin" : TT.OiT || TT._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Wk(TT, oT, IT) {
      return TT ? (IT._needUVs = !0, TT.optimizeUVAllocation && (0, ET.H)(TT.matrix) ? (IT[`${oT}DIRECTUV`] = TT.uvSet + 1, IT[`MAINUV${TT.uvSet+1}`] = !0) : IT[`${oT}DIRECTUV`] = 0, !0) : (IT[`${oT}DIRECTUV`] = 0, !1)
    }

    function Xk(TT) {
      const oT = new Map;
      for (const IT in TT) {
        if (95 === IT.charCodeAt(0)) continue;
        const iT = TT[IT],
          zT = typeof iT;
        "number" === zT || "string" === zT ? oT.set(IT, String(iT)) : iT && "function" !== zT && oT.set(IT, !0)
      }
      return oT
    }

    function Bk(TT) {
      const oT = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: IT
        }
        of TT.features)
        for (const TT in IT) oT[TT] = IT[TT];
      return oT
    }

    function Fk(TT) {
      const oT = TT.parts.geometry;
      return null !== oT && void 0 !== oT && oT.live ? oT : null
    }

    function Sk(TT) {
      var oT;
      return null !== (oT = Fk(TT)) && void 0 !== oT ? oT : zk
    }
    class Dk {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = TT, this.warnOnce = oT, this.programWithModel = IT, this.packFailed = iT, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(TT, oT, IT, iT, zT) {
        const kT = oT.owner;
        let WT = this.drawStates.get(oT);
        if (!WT) {
          const TT = oT.parts.materials[oT.range];
          if (!TT) return this.warnOnce("model", `${IT.name} on ${kT.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          WT = {
            defines: Bk(TT),
            model: TT,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: zT,
            groupId: iT,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(oT, WT)
        }
        if (this.programCurrent(WT, oT, zT, iT)) return WT.program;
        const {
          model: XT
        } = WT, BT = Sk(oT), FT = this.instanceLayout(kT, zT), ST = this.definesBits(kT);
        if (!this.prepareModelDefines(TT, kT, XT, WT.defines, iT, zT)) return null;
        WT.instancing = zT, WT.groupId = iT, WT.modelVersion = XT.version, WT.geometry = BT, WT.instanceLayout = FT, WT.definesBits = ST;
        const DT = function(TT) {
          let oT = "";
          for (const [IT, iT] of TT) oT += !0 === iT ? `${IT};` : `${IT}=${iT};`;
          return oT
        }(Xk(WT.defines));
        return DT === WT.definesKey && WT.packVariant === this.modelPackVariant && WT.program && !this.packFailed(WT.program) || (WT.definesKey = DT, WT.packVariant = this.modelPackVariant, WT.program = this.programWithModel(XT, WT.defines, DT)), WT.program
      }
      programCurrent(TT, oT, IT, iT) {
        return null !== TT.program && !this.packFailed(TT.program) && TT.instancing === IT && TT.groupId === iT && this.definesHold(TT, oT, IT)
      }
      definesHold(TT, oT, IT) {
        return TT.modelVersion === TT.model.version && TT.geometry === Sk(oT) && TT.instanceLayout === this.instanceLayout(oT.owner, IT) && TT.definesBits === this.definesBits(oT.owner) && TT.packVariant === this.modelPackVariant
      }
      modelPackKind(TT) {
        var oT;
        return 0 === this.modelPackVariant ? null : null !== (oT = (0, uT.w)(TT, RT.h.name)) && void 0 !== oT && oT.active ? "placed" : TT.item ? "item" : TT.lifeform ? "lifeform" : TT.box ? "box" : null
      }
      instanceLayout(TT, oT) {
        var IT, iT, zT;
        return "thin" === oT ? null !== (zT = this.resources.I6.get(TT)) && void 0 !== zT ? zT : null : "instanced" === oT && null !== (IT = null === (iT = TT._userInstancedBuffersStorage) || void 0 === iT ? void 0 : iT.interleavedKinds) && void 0 !== IT ? IT : null
      }
      definesBits(TT) {
        const oT = this.view;
        return (TT.visibility < 1 ? 1 : 0) | (TT.hasVertexAlpha ? 2 : 0) | (TT.applyFog ? 4 : 0) | (TT.useVertexColors ? 8 : 0) | (TT.nonUniformScaling ? 16 : 0) | (oT.fogEnabled && 0 !== oT.fogMode ? 32 : 0) | (oT.lightsEnabled ? 64 : 0) | oT.lightCount << 7
      }
      prepareLightDefines(TT, oT, IT) {
        let iT = 0;
        if (this.view.lightsEnabled && !oT) {
          const oT = Math.min(IT, 4);
          for (; iT < this.view.lightCount && (TT[`LIGHT${iT}`] = !0, TT[`LITE_LIGHT${iT}_SLOT`] = iT, iT++, TT._needNormals = !0, iT !== oT););
        }
        for (let zT = iT; zT < 4; zT++) TT[`LIGHT${zT}`] = !1, TT[`LITE_LIGHT${zT}_SLOT`] = void 0
      }
      prepareModelDefines(TT, oT, IT, iT, zT, kT) {
        const {
          features: WT
        } = IT;
        iT._needNormals = !1, iT._needUVs = !1;
        const XT = this.view;
        this.prepareLightDefines(iT, IT.disableLighting, IT.maxSimultaneousLights), iT.MAINUV1 = !1, iT.MAINUV2 = !1;
        const BT = IT.diffuseTexture;
        BT ? (iT._needUVs = !0, iT.DIFFUSE = !0, BT.optimizeUVAllocation && (0, ET.H)(BT.matrix) ? (iT.DIFFUSEDIRECTUV = BT.uvSet + 1, iT[`MAINUV${BT.uvSet+1}`] = !0) : iT.DIFFUSEDIRECTUV = 0, BT.uvSet > 1 && this.warnOnce(`uvset:${IT.name}`, `${IT.name} samples UV set ${BT.uvSet+1}, which is not supported`)) : (iT.DIFFUSE = !1, iT.DIFFUSEDIRECTUV = 0);
        const FT = IT.opacityTexture,
          ST = IT.emissiveTexture;
        iT.OPACITY = Wk(FT, "OPACITY", iT), iT.OPACITYRGB = null !== FT && FT.getAlphaFromRGB, iT.EMISSIVE = Wk(ST, "EMISSIVE", iT), (FT && FT.uvSet > 1 || ST && ST.uvSet > 1) && this.warnOnce(`uvset:${IT.name}`, `${IT.name} samples a UV set past 2, which is not supported`);
        const DT = IT.reflectionTexture,
          LT = null !== DT;
        if (LT) {
          if (!this.resources.boundTexture(DT)) return !1;
          iT._needNormals = !0
        }
        iT.REFLECTION = LT, iT.REFLECTIONMAP_3D = LT, iT.REFLECTIONMAP_SKYBOX = LT, iT.REFLECTIONMAP_OPPOSITEZ = LT && (TT.useRightHandedSystem ? !DT.invertZ : DT.invertZ), iT.ROUGHNESS = LT && IT.roughness > 0, iT.REFLECTIONOVERALPHA = LT && IT.useReflectionOverAlpha, iT.LITE_REFLECTION_LUMINANCE = LT && "cube" === DT.source.kind && DT.source.luminance, (oT.skeleton || oT.morphTargetManager) && this.warnOnce(`skin:${oT.name}`, `${oT.name} has bones or morph targets, which are not supported`), iT.FOG = IT.fogEnabled && oT.applyFog && XT.fogEnabled && 0 !== XT.fogMode, iT.NONUNIFORMSCALING = oT.nonUniformScaling;
        const {
          visibility: xT,
          hasVertexAlpha: cT
        } = oT;
        iT.ALPHATEST = (0, uT.T)(IT, xT, cT), iT.ALPHAFROMDIFFUSE = (0, uT.eb)(IT), iT.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== IT.transparencyMode, iT.ALPHABLEND = null === IT.transparencyMode || (0, uT.S)(IT, xT, cT), iT.PREMULTIPLYALPHA = 7 === IT.alphaMode || 8 === IT.alphaMode, iT.EMISSIVEASILLUMINATION = IT.useEmissiveAsIllumination, iT.LINKEMISSIVEWITHDIFFUSE = IT.linkEmissiveWithDiffuse, iT.TWOSIDEDLIGHTING = !IT.backFaceCulling && IT.twoSidedLighting, iT.INSTANCES = "none" !== kT, iT.THIN_INSTANCES = "thin" === kT, iT.LITE_FRONT_LAYER = zT >= 1;
        for (const {
            feature: eT,
            state: RT,
            active: uT
          }
          of WT) {
          var KT, MT;
          if (uT) null === (KT = (MT = (0, So.j)(eT)).prepareDefinesBeforeAttributes) || void 0 === KT || KT.call(MT, RT, iT, TT, oT)
        }
        this.modelPackKind(IT) && (iT._needNormals = !0), iT.NORMAL = iT._needNormals && oT.isVerticesDataPresent("normal"), iT.UV1 = iT._needUVs && oT.isVerticesDataPresent("uv"), iT.UV2 = iT._needUVs && oT.isVerticesDataPresent("uv2");
        const rT = oT.useVertexColors && oT.isVerticesDataPresent("color");
        iT.VERTEXCOLOR = rT, iT.VERTEXALPHA = oT.hasVertexAlpha && rT, iT.INSTANCESCOLOR = "none" !== kT && oT.isVerticesDataPresent("instanceColor");
        for (const {
            feature: eT,
            state: RT,
            active: uT
          }
          of WT) {
          var AT, gT;
          if (uT) null === (AT = (gT = (0, So.j)(eT)).prepareDefines) || void 0 === AT || AT.call(gT, RT, iT, TT, oT, IT)
        }
        const hT = TT.Zc();
        for (const {
            feature: eT,
            state: RT,
            active: uT
          }
          of WT) {
          var wT, mT;
          if (uT && !1 === (null === (wT = (mT = (0, So.j)(eT)).isReadyForSubMesh) || void 0 === wT ? void 0 : wT.call(mT, RT, iT, TT, hT))) return !1
        }
        return !0
      }
    }

    function Lk(TT, oT, IT) {
      return TT.codeVersion !== oT.version && function(TT, oT) {
        const IT = [],
          iT = [];
        for (const {
            feature: LT,
            state: xT,
            active: cT
          }
          of oT.features) {
          var zT, kT, WT, XT;
          if (cT) xk(null === (zT = (kT = (0, So.j)(LT)).getCustomCode) || void 0 === zT ? void 0 : zT.call(kT, xT, "vertex", mT.d.WGSL), IT), xk(null === (WT = (XT = (0, So.j)(LT)).getCustomCode) || void 0 === WT ? void 0 : WT.call(XT, xT, "fragment", mT.d.WGSL), iT)
        }
        const BT = [];
        for (const {
            feature: LT,
            state: xT
          }
          of oT.features) {
          var FT, ST;
          const TT = null === (FT = (ST = (0, So.j)(LT)).getUniforms) || void 0 === FT ? void 0 : FT.call(ST, xT, mT.d.WGSL);
          for (const oT of null !== (DT = null === TT || void 0 === TT ? void 0 : TT.ubo) && void 0 !== DT ? DT : []) {
            var DT;
            oT.size && oT.type && BT.push({
              name: oT.name,
              type: oT.type,
              arraySize: oT.arraySize
            })
          }
        }
        TT.vertexCode = IT, TT.fragmentCode = iT, TT.pluginUniforms = BT, TT.codeKey = JSON.stringify([IT, iT, BT]), TT.codeVersion = oT.version
      }(TT, oT), `${IT}#${TT.codeKey}`
    }

    function xk(TT, oT) {
      if (TT)
        for (const IT in TT) TT[IT] && oT.push([IT, TT[IT]])
    }
    const ck = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Kk {
      constructor(TT) {
        this.warnOnce = TT, this.states = new Map
      }
      renderState(TT, oT, IT, iT) {
        var zT;
        let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          WT = null !== (zT = TT.sideOrientation) && void 0 !== zT ? zT : oT.sideOrientation;
        oT._getWorldMatrixDeterminant() < 0 && (WT = 0 === WT ? 1 : 0);
        const XT = "triangle-list" === kT,
          BT = IT ? TT.alphaMode : 0,
          FT = (!IT || (0 === BT || TT.forceDepthWrite)) && !TT.disableDepthWrite,
          ST = XT && TT.backFaceCulling ? TT.cullBackFaces ? "back" : "front" : "none",
          DT = XT && 0 !== WT ? "ccw" : "cw",
          LT = TT.depthFunction,
          xT = XT ? TT.zOffset : 0,
          cT = XT ? TT.zOffsetUnits : 0,
          KT = !TT.disableColorWrite;
        return iT && iT.alphaMode === BT && iT.depthWrite === FT && iT.depthFunction === LT && iT.cullMode === ST && iT.frontFace === DT && iT.zOffset === xT && iT.zOffsetUnits === cT && iT.colourWrite === KT && iT.topology === kT ? iT : this.stateFor(BT, FT, LT, ST, DT, xT, cT, KT, kT)
      }
      stateFor(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        const FT = `${TT}|${oT}|${IT}|${iT}|${zT}|${kT}|${WT}|${XT}|${BT}`;
        let ST = this.states.get(FT);
        if (!ST) {
          var DT;
          const LT = TT ? bz(TT) : null;
          TT && !LT && this.warnOnce(`alpha:${TT}`, `alpha mode ${TT} is not supported`), ST = {
            key: FT,
            alphaMode: TT,
            depthFunction: IT,
            zOffset: kT,
            zOffsetUnits: WT,
            topology: BT,
            blend: LT,
            depthWrite: oT,
            depthCompare: IT && null !== (DT = ck.get(IT)) && void 0 !== DT ? DT : null,
            cullMode: iT,
            frontFace: zT,
            depthBias: -WT,
            depthBiasSlopeScale: -kT,
            colourWrite: XT
          }, this.states.set(FT, ST)
        }
        return ST
      }
    }
    var Mk = IT(36273);

    function rk(TT) {
      if (!TT.frozen) return -1;
      let oT = TT.version;
      for (const {
          feature: IT,
          state: iT,
          active: zT
        }
        of TT.features) {
        if (!zT || !IT.bind) continue;
        const TT = (0, So.j)(IT).uniformsVersion;
        if (!TT) return -1;
        oT += TT(iT)
      }
      return oT
    }
    class Ak {
      constructor(TT, oT, IT) {
        this.slots = TT, this.data = oT, this.textures = IT, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(TT, oT) {
        this.write4(TT, oT, 0, 0, 0, 1)
      }
      updateFloat2(TT, oT, IT) {
        this.write4(TT, oT, IT, 0, 0, 2)
      }
      updateFloat3(TT, oT, IT, iT) {
        this.write4(TT, oT, IT, iT, 0, 3)
      }
      updateFloat4(TT, oT, IT, iT, zT) {
        this.write4(TT, oT, IT, iT, zT, 4)
      }
      updateVector3(TT, oT) {
        this.write4(TT, oT.x, oT.y, oT.z, 0, 3)
      }
      updateVector4(TT, oT) {
        this.write4(TT, oT.x, oT.y, oT.z, oT.w, 4)
      }
      updateColor3(TT, oT) {
        this.write4(TT, oT.r, oT.g, oT.b, 0, 3)
      }
      updateColor4(TT, oT, IT) {
        this.write4(TT, oT.r, oT.g, oT.b, IT, 4)
      }
      updateFloatsFrom(TT, oT, IT, iT) {
        const zT = this.slots.get(TT);
        if (!zT) return;
        const kT = this.data,
          WT = zT.offset;
        for (let XT = 0; XT < iT; XT++) kT[WT + XT] = oT[IT + XT]
      }
      updateFloat3TimesFloats(TT, oT, IT, iT) {
        const zT = this.slots.get(TT);
        if (!zT) return;
        const kT = this.data,
          WT = zT.offset;
        kT[WT] = oT[IT] * iT[0], kT[WT + 1] = oT[IT + 1] * iT[1], kT[WT + 2] = oT[IT + 2] * iT[2]
      }
      Y1(TT, oT) {
        const IT = this.slots.get(TT);
        IT && this.data.set(oT.m, IT.offset)
      }
      updateMatrixFloats(TT, oT) {
        const IT = this.slots.get(TT);
        IT && this.data.set(oT, IT.offset)
      }
      updateFloatArray(TT, oT) {
        const IT = this.slots.get(TT);
        if (!IT) return;
        if (!IT.arraySize || IT.stride === IT.floats) return void this.data.set(oT, IT.offset);
        const iT = Math.min(oT.length, IT.floats * IT.arraySize);
        for (let zT = 0; zT < iT; zT++) this.data[IT.offset + Math.floor(zT / IT.floats) * IT.stride + zT % IT.floats] = oT[zT]
      }
      updateArray(TT, oT) {
        this.updateFloatArray(TT, oT)
      }
      setTexture(TT, oT) {
        this.textures.set(TT, oT), this.expected.delete(TT)
      }
      expectTexture(TT) {
        this.textures.set(TT, null), this.expected.add(TT)
      }
      write4(TT, oT, IT, iT, zT, kT) {
        const WT = this.slots.get(TT);
        if (!WT) return;
        const XT = this.data,
          BT = WT.offset;
        XT[BT] = oT, kT > 1 && (XT[BT + 1] = IT), kT > 2 && (XT[BT + 2] = iT), kT > 3 && (XT[BT + 3] = zT)
      }
    }

    function gk(TT, oT) {
      const IT = li,
        iT = Mk.i,
        zT = TT.lights,
        kT = Math.min(TT.lightCount, 8);
      for (let WT = 0; WT < kT; WT++) {
        const TT = IT.lights + WT * IT.lightStride,
          kT = WT * Mk.d;
        oT[TT] = zT[kT + iT.vector], oT[TT + 1] = zT[kT + iT.vector + 1], oT[TT + 2] = zT[kT + iT.vector + 2], oT[TT + 3] = zT[kT + iT.kind] === Mk.e.directional ? 1 : 0, oT[TT + 4] = zT[kT + iT.diffuse], oT[TT + 5] = zT[kT + iT.diffuse + 1], oT[TT + 6] = zT[kT + iT.diffuse + 2], oT[TT + 7] = zT[kT + iT.range], oT[TT + 8] = zT[kT + iT.specular], oT[TT + 9] = zT[kT + iT.specular + 1], oT[TT + 10] = zT[kT + iT.specular + 2], oT[TT + 11] = zT[kT + iT.range]
      }
      oT[IT.fogInfos] = TT.fogMode, oT[IT.fogInfos + 1] = TT.fogStart, oT[IT.fogInfos + 2] = TT.fogEnd, oT[IT.fogInfos + 3] = TT.fogDensity, oT[IT.fogColour] = TT.fogColour[0], oT[IT.fogColour + 1] = TT.fogColour[1], oT[IT.fogColour + 2] = TT.fogColour[2], oT[IT.outputHeight] = TT.renderHeight, oT[IT.animTick] = TT.animTick, oT[IT.timeMs] = TT.timeMs
    }
    class hk {
      constructor(TT) {
        this.instancesOf = TT
      }
      refreshModelUniforms(TT, oT, IT, iT) {
        const zT = rk(IT);
        if (zT >= 0 && zT === oT.heldVersion && oT.textures.get("diffuseSampler") === IT.diffuseTexture && oT.textures.get("reflectionCubeSampler") === IT.reflectionTexture && oT.textures.get("opacitySampler") === IT.opacityTexture && oT.textures.get("emissiveSampler") === IT.emissiveTexture) return !0;
        if (zT < 0)
          for (const kT of this.instancesOf(IT)) kT.heldVersion = -1;
        return this.writeModelUniforms(TT, oT, IT, iT), oT.heldVersion = zT, !1
      }
      writeModelUniforms(TT, oT, IT, iT) {
        const {
          ubo: zT
        } = oT, kT = IT.diffuseTexture, WT = IT.diffuseColor;
        zT.updateFloat4("vDiffuseColor", WT[0], WT[1], WT[2], IT.alpha), kT && (zT.updateFloat2("vDiffuseInfos", kT.uvSet, kT.level), zT.updateMatrixFloats("diffuseMatrix", kT.matrix)), zT.updateFloat("alphaCutOff", IT.alphaCutOff), zT.updateFloatsFrom("vEmissiveColor", IT.emissiveColor, 0, 3), zT.updateFloat3TimesFloats("vAmbientColor", iT.ambientColour, 0, IT.ambientColor);
        const XT = IT.specularColor;
        zT.updateFloat4("vSpecularColor", XT[0], XT[1], XT[2], IT.specularPower), zT.setTexture("diffuseSampler", kT);
        const BT = IT.opacityTexture;
        BT && (zT.updateFloat2("vOpacityInfos", BT.uvSet, BT.level), zT.updateMatrixFloats("opacityMatrix", BT.matrix)), zT.setTexture("opacitySampler", BT);
        const FT = IT.emissiveTexture;
        FT && (zT.updateFloat2("vEmissiveInfos", FT.uvSet, FT.level), zT.updateMatrixFloats("emissiveMatrix", FT.matrix)), zT.setTexture("emissiveSampler", FT);
        const ST = IT.reflectionTexture;
        ST && zT.updateMatrixFloats("reflectionMatrix", ST.matrix), zT.updateFloat2("vReflectionInfos", ST ? ST.level * TT.iblIntensity : 0, IT.roughness), zT.setTexture("reflectionCubeSampler", ST);
        const DT = TT.Zc();
        for (const {
            feature: cT,
            state: KT,
            active: MT
          }
          of IT.features) {
          var LT, xT;
          if (MT) null === (LT = (xT = (0, So.j)(cT)).bind) || void 0 === LT || LT.call(xT, KT, zT, TT, DT)
        }
      }
    }

    function wk(TT) {
      const oT = TT.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(oT) ? "u32" : /i32|^vec\di$/.test(oT) ? "i32" : "f32"
    }

    function mk(TT, oT) {
      const IT = TT.getSize(),
        iT = wk(oT),
        zT = TT => 4 === IT ? `${TT}x4` : 2 === IT ? `${TT}x2` : null;
      if ("f32" === iT) {
        if (5126 === TT.type) return 1 === IT ? "float32" : IT >= 2 && IT <= 4 ? `float32x${IT}` : null;
        if (!TT.normalized) return null;
        switch (TT.type) {
          case 5121:
            return zT("unorm8");
          case 5120:
            return zT("snorm8");
          case 5123:
            return zT("unorm16");
          case 5122:
            return zT("snorm16")
        }
        return null
      }
      const kT = "u32" === iT ? "uint" : "sint";
      switch (TT.type) {
        case 5125:
        case 5124:
          return 1 === IT ? `${kT}32` : IT <= 4 ? `${kT}32x${IT}` : null;
        case 5121:
        case 5120:
          return zT(`${kT}8`);
        case 5123:
        case 5122:
          return zT(`${kT}16`)
      }
      return null
    }

    function ek(TT) {
      var oT;
      const IT = /(8|16|32)(?:x(\d))?$/.exec(TT);
      return IT ? Number(IT[1]) / 8 * Number(null !== (oT = IT[2]) && void 0 !== oT ? oT : 1) : 4
    }
    class Rk {
      constructor(TT, oT, IT) {
        this.resources = TT, this.limits = oT, this.warnOnce = IT, this.layouts = new Map
      }
      resolveInputs(TT, oT, IT, iT) {
        const zT = [],
          kT = IT.program.attributes,
          WT = [];
        for (let ST = 0; ST < kT.length; ST++) {
          const IT = kT[ST],
            XT = IT.optional ? null : this.resources.vertexInput(TT, IT.name, iT);
          if (!XT) {
            const TT = wk(IT.type),
              oT = "u32" === TT ? "uint32x4" : "i32" === TT ? "sint32x4" : "float32x4";
            WT.push(null);
            const iT = zT.find((TT => null === TT.data));
            iT ? iT.attributes.push({
              shaderLocation: ST,
              offset: 0,
              format: oT
            }) : zT.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: ST,
                offset: 0,
                format: oT
              }]
            });
            continue
          }
          const BT = XT.getBuffer();
          WT.push(XT);
          const FT = mk(XT, IT.type);
          if (!FT) return this.warnOnce(`format:${oT}:${IT.name}`, `${oT}'s ${IT.name} (type ${XT.type}, size ${XT.getSize()}) has no WebGPU vertex format`), null;
          const DT = XT.getIsInstanced() ? "instance" : "vertex",
            LT = XT.byteStride,
            xT = ek(FT),
            cT = zT.find((TT => TT.data === BT && TT.stride === LT && TT.step === DT && XT.byteOffset >= TT.base && XT.byteOffset - TT.base + xT <= LT));
          cT ? cT.attributes.push({
            shaderLocation: ST,
            offset: XT.byteOffset - cT.base,
            format: FT
          }) : zT.push({
            data: BT,
            base: XT.byteOffset,
            stride: LT,
            step: DT,
            attributes: [{
              shaderLocation: ST,
              offset: 0,
              format: FT
            }]
          })
        }
        if (zT.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${oT}`, `${oT} needs ${zT.length} vertex buffers`), null;
        let XT = "";
        for (const ST of zT) {
          XT += `${ST.stride}${"instance"===ST.step?"i":"v"}`;
          for (const TT of ST.attributes) XT += `,${TT.shaderLocation}:${TT.offset}:${TT.format}`;
          XT += ";"
        }
        let BT = this.layouts.get(XT);
        BT || (BT = {
          key: XT,
          buffers: zT.map((TT => ({
            arrayStride: TT.stride,
            stepMode: TT.step,
            attributes: TT.attributes
          }))),
          instanceEnds: zT.map((TT => {
            let oT = -1;
            if ("instance" === TT.step)
              for (const IT of TT.attributes) oT = Math.max(oT, IT.offset + ek(IT.format));
            return oT
          }))
        }, this.layouts.set(XT, BT));
        const FT = zT.map((TT => TT.base));
        return {
          program: IT,
          sources: WT,
          layout: BT,
          slotData: zT.map((TT => TT.data)),
          Q0: FT,
          buffers: [],
          offsets: FT,
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

    function uk(TT, oT, IT, iT) {
      const zT = oT.program.program.attributes;
      for (let kT = 0; kT < zT.length; kT++) {
        if ((zT[kT].optional ? null : IT.vertexInput(TT, zT[kT].name, iT)) !== oT.sources[kT]) return !1
      }
      return !0
    }
    const vk = 64;
    class Ek {
      constructor(TT, oT, IT, iT) {
        this.device = TT, this.layout = oT, this.frameBuffer = IT, this.label = iT, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(TT) {
        if (TT * vk <= this.data.length) return !1;
        let oT = 2 * this.data.length;
        for (; TT * vk > oT;) oT *= 2;
        const IT = new Float32Array(oT);
        return IT.set(this.data), this.data = IT, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = this.data,
          kT = TT * vk;
        let WT = zT[kT + 16] !== IT;
        for (let XT = 0; XT < 16 && !WT; XT++) WT = zT[kT + XT] !== oT[iT + XT];
        if (WT) {
          for (let TT = 0; TT < 16; TT++) zT[kT + TT] = oT[iT + TT];
          zT[kT + 16] = IT
        }
        return WT
      }
      upload(TT, oT) {
        this.device.queue.writeBuffer(this.buffer, TT * si, this.data, TT * vk, (oT - TT) * vk)
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

    function fk(TT) {
      return TT.gpu[ET.f.lite] ??= TT.materials.map(((oT, IT) => ({
        parts: TT,
        range: IT,
        owner: TT.owner
      })))
    }

    function Ck(TT) {
      var oT, IT, iT;
      return null !== (oT = null !== (IT = null === (iT = TT.parts.materials[TT.range]) || void 0 === iT ? void 0 : iT.mirror) && void 0 !== IT ? IT : TT.owner.material) && void 0 !== oT ? oT : null
    }
    const jk = ["opaque", "alphaTest", "transparent", "text"];
    class Jk {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Fo.c)("Lite: ")
      }
      attach(TT, oT) {
        this.model = TT, this.mirror = oT
      }
      get worlds() {
        return this.model.nodes.iL
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(TT) {
        return this.groups.get(TT)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(TT) {
        for (const [oT, IT] of this.groups)
          for (const iT of jk)
            for (const zT of IT[iT].units) TT(zT.owner, "text" === iT ? "transparent" : iT, oT)
      }
      select(TT, oT) {
        this.frame++, this.selectedCount = 0;
        for (const XT of this.groups.values())
          for (const TT of jk) XT[TT].units.length = 0, XT[TT].rows.length = 0;
        const {
          model: IT,
          mirror: iT
        } = this;
        if (!IT || !iT || !TT) return;
        this.rows.length < IT.nodes.fD && (this.rows = new Int32Array(IT.nodes.fD));
        const zT = this.rows,
          kT = IT.meshes;
        for (let XT = 0; XT < kT.looseCount; XT++) {
          const TT = kT.loose[XT],
            IT = iT.nodes[TT];
          IT && !IT.isBlocked && IT.isEnabled() && !IT.ti.hasAZeroComponent && kT.selects(TT, oT.frustum) && (this.activate(IT, TT), this.selectedCount++)
        }
        const WT = kT.selectTextPlanes(oT.frustum, zT);
        for (let XT = 0; XT < WT; XT++) {
          const oT = zT[XT],
            kT = iT.nodes[oT],
            WT = IT.meshes.parts[oT];
          if (!kT.isVisible || !(kT.visibility > 0) || 0 === (kT.layerMask & TT.layerMask) || !WT) continue;
          const BT = this.groupOf(IT.meshes.layer[oT]).text;
          for (const TT of fk(WT)) BT.units.push(TT), BT.rows.push(oT);
          this.selectedCount++
        }
      }
      instanceBatch(TT) {
        const oT = this.batchOf(TT);
        return oT.dispatched || (oT.dispatched = oT.renderSelf = !0, oT.row = this.rowOf(TT)), oT
      }
      rowOf(TT) {
        return TT.row
      }
      activate(TT, oT) {
        if (!TT.yC) {
          const IT = TT;
          if (IT.OiT) {
            const TT = this.batchOf(IT);
            TT.dispatched = !0, TT.renderSelf = !0, TT.row = oT
          }
          return void this.dispatch(IT, oT, oT)
        }
        const IT = TT,
          iT = IT.HiT;
        if (iT._getWorldMatrixDeterminant() >= 0 !== IT._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${iT.name}`, `A mirrored InstancedMesh of ${iT.name} is not drawn yet`);
        const zT = this.batchOf(iT);
        zT.instances.push(IT), zT.rows.push(oT), zT.dispatched || (zT.dispatched = !0, this.dispatch(iT, oT, this.rowOf(iT)))
      }
      batchOf(TT) {
        let oT = this.batches.get(TT);
        return oT || (oT = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(TT, oT)), oT.frame !== this.frame && (oT.frame = this.frame, oT.dispatched = !1, oT.renderSelf = !1, oT.instances.length = 0, oT.rows.length = 0), oT
      }
      dispatch(TT, oT, IT) {
        const {
          layer: iT,
          parts: zT
        } = this.model.meshes;
        if (!zT[oT]) return;
        const kT = this.groupOf(iT[oT]),
          WT = TT;
        for (const XT of fk(zT[oT])) {
          const TT = Ck(XT);
          if (!TT) continue;
          const oT = TT.needAlphaBlendingForMesh(WT) ? kT.transparent : TT.needAlphaTestingForMesh(WT) ? kT.alphaTest : kT.opaque;
          oT.units.push(XT), oT.rows.push(IT)
        }
      }
      groupOf(TT) {
        let oT = this.groups.get(TT);
        return oT || (oT = {
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
        }, this.groups.set(TT, oT)), oT
      }
    }
    class Uk {
      constructor() {
        this.kS = new Map, this.enabled = [], this.groups = new Map, this.qx = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(TT) {
        if (this.kS.has(TT)) return;
        const oT = {
          mesh: TT,
          observer: TT.onEffectiveEnabledStateChangedObservable.add((TT => {
            this.Fv(oT, TT)
          })),
          index: -1,
          steady: null
        };
        this.kS.set(TT, oT), this.Fv(oT, TT.isEnabled())
      }
      remove(TT) {
        const oT = this.kS.get(TT);
        oT && (oT.observer.remove(!0), this.Fv(oT, !1), this.kS.delete(TT))
      }
      base(TT) {
        return this.kS.get(TT)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          kS: this.kS.size
        }
      }
      forEachSelected(TT) {
        for (const [oT, IT] of this.groups) {
          for (const iT of IT.opaque) TT(iT.owner, "opaque", oT);
          for (const iT of IT.transparent) TT(iT.owner, "transparent", oT)
        }
        for (const oT of this.qx) TT(oT.mesh, "opaque", 0)
      }
      group(TT) {
        return this.groups.get(TT)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(TT, oT) {
        this.drawn = 0, this.selected = 0, this.qx.length = 0;
        for (const iT of this.groups.values()) iT.opaque.length = 0, iT.transparent.length = 0;
        if (!TT) return;
        const IT = this.enabled;
        for (let iT = 0; iT < IT.length; iT++) {
          const zT = IT[iT];
          if (zT.steady && oT(zT, TT)) {
            this.selected++, this.qx.push(zT);
            continue
          }
          const kT = zT.mesh;
          if (kT.isBlocked || kT.ti.hasAZeroComponent) continue;
          if (!kT.isVisible || kT.visibility <= 0 || 0 === (kT.layerMask & TT.layerMask)) continue;
          if (kT.OiT) {
            this.warned.has(kT.name) || (this.warned.add(kT.name), console.warn(`Lite: thin instance base ${kT.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: WT
          } = kT;
          if (!WT) continue;
          kT.computeWorldMatrix(), this.selected++;
          const XT = this.listsFor(kT.renderingGroupId);
          for (const TT of fk(WT)) {
            const oT = Ck(TT);
            oT && (oT.needAlphaBlendingForMesh(kT) ? XT.transparent.push(TT) : XT.opaque.push(TT))
          }
        }
      }
      Fv(TT, oT) {
        if (oT === TT.index >= 0) return;
        TT.steady = null;
        const IT = this.enabled;
        if (oT) TT.index = IT.length, IT.push(TT);
        else {
          const oT = IT.pop();
          oT !== TT && (IT[TT.index] = oT, oT.index = TT.index), TT.index = -1
        }
      }
      listsFor(TT) {
        let oT = this.groups.get(TT);
        return oT || (oT = {
          opaque: [],
          transparent: []
        }, this.groups.set(TT, oT)), oT
      }
    }
    var ak = IT(38509);
    class Yk {
      constructor() {
        this.bundle = null, this.stale = !0, this.kS = new Set
      }
    }
    class Qk {
      constructor(TT, oT, IT) {
        this.device = TT, this.slots = oT, this.host = IT, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Yk, this.WC = new Yk, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new dz, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(TT) {
          var oT, IT;
          let iT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (oT = null === (IT = globalThis.navigator) || void 0 === IT ? void 0 : IT.userAgent) && void 0 !== oT ? oT : "";
          const zT = TT.adapterInfo;
          return "intel" === (null === zT || void 0 === zT ? void 0 : zT.vendor) && "gen-12lp" === zT.architecture && iT.includes("Windows")
        }(TT), (0, ak.N)(this.direct)
      }
      xR() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, ak.N)(this.directThisFrame)
      }
      add(TT, oT, IT, iT) {
        let zT = this.records.get(TT);
        return zT || (zT = this.createRecord(TT), this.records.set(TT, zT)), zT.recorded && Hk(zT, oT) || (this.bundleOf(zT).stale = !0), this.place(zT, oT, IT, iT), zT
      }
      bundleOf(TT) {
        return TT.WC ? this.WC : this.main
      }
      addAgain(TT, oT, IT, iT) {
        TT.recorded || (this.bundleOf(TT).stale = !0), this.place(TT, oT, IT, iT)
      }
      place(TT, oT, IT, iT) {
        TT.seen = this.frame, TT.WC && null === TT.draw && (this.WC.stale = !0), TT.draw = oT, this.drawn++, IT && this.slots.write(TT.slot, IT, iT) && (this.slotsFrom = Math.min(this.slotsFrom, TT.slot), this.slotsTo = Math.max(this.slotsTo, TT.slot));
        const zT = this.args,
          kT = 5 * TT.slot;
        zT[kT] === oT.count && zT[kT + 1] === oT.instances && zT[kT + 2] === oT.first || (zT[kT] = oT.count, zT[kT + 1] = oT.instances, zT[kT + 2] = oT.first, this.argsDirty = !0, this.WC.stale ||= TT.WC)
      }
      gR() {
        for (const TT of this.records.values()) TT.seen !== this.frame && (TT.draw && (TT.draw = null, this.args[5 * TT.slot + 1] = 0, this.argsDirty = !0, this.WC.stale ||= TT.WC), this.frame - TT.seen > 120 && (this.records.delete(TT.unit), this.freeSlots.push(TT.slot), TT.recorded && (this.bundleOf(TT).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(TT) {
        for (const oT of this.records.values()) oT.draw && oT.seen === this.frame && !oT.WC && TT(oT.draw, this.slots.data, oT.slot * si / 4)
      }
      resourceDestroyed(TT) {
        this.main.stale ||= this.main.kS.has(TT), this.WC.stale ||= this.WC.kS.has(TT)
      }
      execute(TT, oT, IT) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(TT, oT, IT, "direct"), this.drawn;
        const iT = this.host.sceneGroup(oT);
        if (!iT) return this.main.bundle = null, this.WC.bundle = null, this.recordedSceneGroup = null, this.encode(TT, oT, IT, "direct"), this.drawn;
        this.recordedTarget === IT && this.recordedSceneGroup === iT || (this.recordedTarget = IT, this.recordedSceneGroup = iT, this.main.stale = !0, this.WC.stale = !0);
        const zT = this.main,
          kT = this.WC;
        let WT = !1;
        !zT.stale && zT.bundle || (zT.bundle = this.record(oT, IT, iT, "indirect"), WT = !0);
        const XT = (0, ak.j)();
        return (kT.stale || this.rangedEpoch !== XT) && (this.rangedEpoch = XT, kT.bundle = this.drawsRanged() ? this.record(oT, IT, iT, "WC") : this.noRangedBundle(), WT = !0), WT && (this.bundles = kT.bundle ? [zT.bundle, kT.bundle] : [zT.bundle]), TT.executeBundles(this.bundles), TT.setBindGroup(0, iT), this.drawn
      }
      record(TT, oT, IT, iT) {
        const zT = this.device.createRenderBundleEncoder({
          label: "WC" === iT ? "thin-bases-ranged" : "thin-bases",
          colorFormats: TT._colorFormat ? [TT._colorFormat] : [],
          depthStencilFormat: TT._depthStencilFormat,
          sampleCount: TT._sampleCount
        });
        return zT.setBindGroup(0, IT), this.encode(zT, TT, oT, iT), zT.finish()
      }
      noRangedBundle() {
        for (const TT of this.records.values()) TT.WC && (TT.recorded = !1);
        return this.WC.kS.clear(), this.WC.stale = !1, null
      }
      drawsRanged() {
        for (const TT of this.records.values())
          if (TT.WC && TT.draw) return !0;
        return !1
      }
      encode(TT, oT, IT, iT) {
        const zT = [];
        for (const BT of this.records.values()) "direct" !== iT && BT.WC !== ("WC" === iT) || (BT.recorded = !1, BT.draw && zT.push(BT));
        zT.sort(nk);
        const kT = "direct" === iT ? null : "WC" === iT ? this.WC : this.main;
        null === kT || void 0 === kT || kT.kS.clear(), this.binder.reset();
        let WT = !1;
        for (const BT of zT) {
          var XT;
          const zT = BT.draw,
            FT = this.host.pipelineFor(zT, oT, IT);
          if (!FT) {
            this.host.pipelineCompiling(zT, IT) ? WT = !0 : kT && this.keep(BT, zT, kT.kS);
            continue
          }
          let ST;
          if (BT.WC && "indirect" !== iT) {
            const TT = BT.unit.owner;
            ST = "direct" === iT && (0, ak.w)(TT) || (0, ak.n)(TT) || void 0
          }
          if (kT && this.keep(BT, zT, kT.kS), 0 === (null === (XT = ST) || void 0 === XT ? void 0 : XT.count)) continue;
          this.binder.bind(TT, zT, FT, this.slots.bindGroup, BT.slot * si);
          const DT = 5 * BT.slot;
          if ("indirect" === iT) {
            zT.indexBuffer ? TT.drawIndexedIndirect(this.argsBuffer, 4 * DT) : TT.drawIndirect(this.argsBuffer, 4 * DT);
            continue
          }
          const LT = this.args;
          ST ? Ok(TT, null !== zT.indexBuffer, LT, DT, ST) : zT.indexBuffer ? TT.drawIndexed(LT[DT], LT[DT + 1], LT[DT + 2], 0, 0) : TT.draw(LT[DT], LT[DT + 1], LT[DT + 2], 0)
        }
        kT && (kT.stale = WT)
      }
      keep(TT, oT, IT) {
        TT.recorded = !0, TT.pipelineKey = oT.pipelineKey, TT.materialGroup = oT.material.bindGroup, TT.vertexBuffers.length = 0, TT.vertexBuffers.push(...oT.vertexBuffers), TT.vertexOffsets = oT.vertexOffsets, TT.indexBuffer = oT.indexBuffer, TT.indexFormat = oT.indexFormat;
        for (const iT of oT.vertexBuffers) IT.add(iT);
        oT.indexBuffer && IT.add(oT.indexBuffer), IT.add(oT.material.buffer);
        for (const iT of oT.material.bound) iT && IT.add(iT)
      }
      createRecord(TT) {
        let oT = this.freeSlots.pop();
        return void 0 === oT && (oT = this.slotCount++, this.grow()), {
          unit: TT,
          slot: oT,
          WC: void 0 !== (0, ak.n)(TT.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.WC.stale = !0), 5 * this.slotCount > this.args.length) {
          const TT = new Uint32Array(2 * this.args.length);
          TT.set(this.args), this.args = TT, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Ok(TT, oT, IT, iT, zT) {
      const kT = IT[iT + 1],
        WT = zT.data;
      for (let XT = 0; XT < zT.count; XT++) {
        const zT = Math.min(WT[2 * XT], kT),
          BT = Math.min(WT[2 * XT + 1], kT - zT);
        0 !== BT && (oT ? TT.drawIndexed(IT[iT], BT, IT[iT + 2], 0, zT) : TT.draw(IT[iT], BT, IT[iT + 2], zT))
      }
    }

    function Hk(TT, oT) {
      if (TT.pipelineKey !== oT.pipelineKey || TT.materialGroup !== oT.material.bindGroup || TT.indexBuffer !== oT.indexBuffer || TT.indexFormat !== oT.indexFormat || TT.vertexOffsets !== oT.vertexOffsets || TT.vertexBuffers.length !== oT.vertexBuffers.length) return !1;
      for (let IT = 0; IT < TT.vertexBuffers.length; IT++)
        if (TT.vertexBuffers[IT] !== oT.vertexBuffers[IT]) return !1;
      return !0
    }

    function nk(TT, oT) {
      return Tk(TT.draw, oT.draw)
    }
    const qk = new WeakMap,
      Zk = {
        depth: !1,
        sunShadow: !1
      };

    function lk(TT, oT) {
      let IT = qk.get(TT);
      IT || (IT = new Map, qk.set(TT, IT));
      const iT = `${oT.depth?"-depth":""}${oT.sunShadow?"-shadow":""}${oT.shadowMask?"-mask":""}`;
      let zT = IT.get(iT);
      if (!zT) {
        const kT = [{
          binding: vo.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: vo.e
          }
        }, {
          binding: vo.v,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        oT.depth && kT.push({
          binding: vo.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), oT.sunShadow && kT.push(... function() {
          const TT = GPUShaderStage.FRAGMENT,
            oT = vo.q;
          return [{
            binding: oT.uniform,
            visibility: TT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: oT.jL,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: oT.special,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: oT.volume,
            visibility: TT,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: oT.sampler,
            visibility: TT,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: oT.entities,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: oT.entityGrids,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), oT.shadowMask && kT.push({
          binding: vo.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), zT = TT.createBindGroupLayout({
          label: `${oT.depth?"terrain-":""}shader-pack-inputs${iT}`,
          entries: kT
        }), IT.set(iT, zT)
      }
      return zT
    }

    function sk(TT) {
      return lk(TT, Zk)
    }

    function tk(TT, oT) {
      if (!oT) return !1;
      const IT = (0, Eo.f)(TT);
      return !!IT && HI(IT, oT)
    }

    function Gk(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Di(oT)) return [];
      return [lk(TT, {
        depth: Wi(oT.packVariant),
        sunShadow: tk(oT.packVariant, IT),
        shadowMask: iT
      })]
    }
    class pk {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = TT, this.sunShadow = IT, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(vo.e), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = TT.createBuffer({
          label: "shader-pack-inputs",
          size: vo.e,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const iT = (0, vo.z)(oT);
        this.textures = TT.createBuffer({
          label: "shader-pack-textures",
          size: iT.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), TT.queue.writeBuffer(this.textures, 0, iT), this.bindGroup = TT.createBindGroup({
          label: "shader-pack-inputs",
          layout: sk(TT),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: vo.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: vo.v,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(TT, oT, IT) {
        (0, vo.B)(this.data, {
          seconds: TT.seconds(),
          lit: IT,
          renderOffset: TT.renderOffset(),
          f_: TT.f_(),
          eyePosition: oT,
          shadowDirection: TT.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const iT = oT ? this.sunShadow : null;
        if ((oT || IT) && !iT) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!TT && !iT) return this.bindGroup;
        (TT && TT !== this.depthView || IT && IT !== this.maskView) && (this.depthView = null !== TT && void 0 !== TT ? TT : this.depthView, this.maskView = null !== IT && void 0 !== IT ? IT : this.maskView, this.groups.clear());
        const zT = (TT ? 1 : 0) | (iT ? 2 : 0) | (IT ? 4 : 0);
        let kT = this.groups.get(zT);
        if (!kT) {
          const oT = this.entries();
          TT && oT.push({
            binding: vo.n,
            resource: TT
          }), iT && oT.push(...iT.entries()), IT && oT.push({
            binding: vo.r,
            resource: IT
          }), kT = this.device.createBindGroup({
            label: `${TT||IT?"terrain-":""}shader-pack-inputs${TT?"-depth":""}${iT?"-shadow":""}${IT?"-mask":""}`,
            layout: lk(this.device, {
              depth: !!TT,
              sunShadow: !!iT,
              shadowMask: !!IT
            }),
            entries: oT
          }), this.groups.set(zT, kT)
        }
        return kT
      }
      bind(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        TT.setBindGroup(vo.d, this.bindGroupFor(oT, IT, iT))
      }
    }

    function bk(TT, oT, IT) {
      if (TT.gpuVersion === oT.gpuBuffersVersion) return !0;
      let iT;
      do {
        if (iT = oT.gpuBuffersVersion, !yk(TT, oT, IT)) return !1
      } while (oT.gpuBuffersVersion !== iT);
      return TT.gpuVersion = iT, TT.fitInstances = 0, !0
    }

    function yk(TT, oT, IT) {
      let iT = null;
      for (let kT = 0; kT < TT.slotData.length; kT++) {
        var zT;
        const WT = TT.slotData[kT],
          XT = WT ? oT.gpuBuffer(WT) : IT;
        if (!XT) return !1;
        WT && TT.layout.instanceEnds[kT] < 0 && oT.cover(WT, Number.POSITIVE_INFINITY), TT.buffers[kT] = XT;
        const BT = TT.Q0[kT] + (WT ? oT.gpuOffset(WT) : 0);
        BT !== (null !== (zT = iT) && void 0 !== zT ? zT : TT.offsets)[kT] && (iT ??= TT.offsets.slice(), iT[kT] = BT), TT.ends[kT] = WT ? oT.gpuEnd(WT) : XT.size
      }
      return iT && (TT.offsets = iT), !0
    }

    function Nk(TT, oT, IT, iT) {
      if (oT <= TT.fitInstances) return null;
      const {
        layout: zT,
        ends: kT,
        offsets: WT,
        slotData: XT,
        Q0: BT
      } = TT;
      let FT = !1;
      for (let ST = 0; ST < zT.buffers.length; ST++) {
        const TT = zT.instanceEnds[ST];
        if (TT < 0) continue;
        const iT = (oT - 1) * zT.buffers[ST].arrayStride + TT;
        if (kT[ST] - WT[ST] < iT) return {
          index: ST,
          needed: iT
        };
        const DT = XT[ST];
        DT && IT.cover(DT, BT[ST] + iT) && (FT = !0)
      }
      return FT && bk(TT, IT, iT), TT.fitInstances = oT, null
    }
    var Pk = IT(36764),
      dk = IT(36799);
    const Vk = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      TW = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      oW = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      IW = `((vertexInputs.aPackedLightLevels >> 16u) | ${Bo.d.placed}u)`,
      iW = "u32(vertexInputs.aShaderPackItem.x)",
      zW = `${Bo.d.lifeform}u`;

    function kW(TT) {
      return "item" === TT.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const WW = "bloxdSpEnchant",
      XW = "floor(finalWorld[3].xyz)";

    function BW(TT, oT, IT) {
      return "placed" === oT.kind && TT.reads[IT].includes("bloxdFragmentBlockPosition")
    }

    function FW(TT, oT) {
      let [IT, iT] = TT;
      return IT === oT.point && iT === oT.code
    }

    function SW(TT, oT) {
      var IT, iT, zT;
      const kT = null === (IT = TT.find((TT => TT.texture))) || void 0 === IT ? void 0 : IT.texture,
        WT = null === (iT = TT.find((TT => TT.enchantTier))) || void 0 === iT ? void 0 : iT.enchantTier,
        XT = null === (zT = TT.find((TT => TT.overlay))) || void 0 === zT ? void 0 : zT.overlay,
        BT = XT ? oT.filter((TT => FW(TT, XT))).length : 0;
      return XT && 1 === BT ? {
        texture: kT,
        overlay: XT,
        enchantTier: WT
      } : {
        texture: kT,
        enchantTier: WT
      }
    }

    function DW(TT) {
      if ("item" === TT.kind) {
        return {
          vertexFlags: `(${iW} & 0xffffu)`,
          varying: "vPackItem",
          value: iW,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return TT.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: IW,
        varying: "vPackFlags",
        value: IW,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function LW(TT) {
      return "lifeform" === TT.kind ? zW : "0u"
    }

    function xW(TT) {
      return !!TT.BLOXD_PLUGIN_ENCHANTMENT
    }

    function cW(TT, oT) {
      const {
        enchantTier: IT
      } = oT;
      return IT && xW(oT.defines) && "lifeform" === oT.kind && hW(TT, "enchantTier") ? IT : null
    }

    function KW(TT, oT) {
      return xW(oT.defines) && hW(TT, "enchantSpeed")
    }

    function MW(TT) {
      const {
        overlay: oT,
        defines: IT
      } = TT;
      if (!oT || !IT.DIFFUSE) return null;
      const iT = IT.VERTEXCOLOR || IT.INSTANCESCOLOR && IT.INSTANCES;
      return `vec4f(${oT.colour}.rgb * uniforms.vDiffuseInfos.y${iT?" * fragmentInputs.vColor.rgb":""}, ${oT.colour}.a)`
    }
    const rW = "fragmentInputs.vPackTexture";

    function AW(TT) {
      const {
        atlas: oT,
        defines: IT,
        texture: iT
      } = TT;
      if (oT || !IT.DIFFUSE) return null;
      if (iT) return {
        texture: "diffuseSampler",
        ...iT
      };
      const zT = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===IT.DIFFUSEDIRECTUV?"vMainUV1":2===IT.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== TT.kind) return zT;
      if (!IT.BLOXD_PLUGIN_ANIMATED) return {
        ...zT,
        id: rW
      };
      const kT = mT.d.WGSL,
        WT = (0, mT.wb)(kT, "uAnimStatesNum"),
        XT = (0, mT._)(kT, (0, Pk.h)(kT), WT),
        BT = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${WT})`,
        layers: [XT],
        uv: `vec2f(${BT}.x, ${BT}.y * ${WT} - ${XT})`,
        levelUv: BT,
        id: rW
      }
    }

    function gW(TT, oT) {
      return "box" === oT.kind && !!TT.hooks.surface && null !== AW(oT)
    }

    function hW(TT, oT) {
      return TT.reads.fragment.includes(oT)
    }

    function wW(TT) {
      return !!TT.BLOXD_LIGHTING && !TT.BLOXD_UNLIT
    }

    function mW(TT, oT, IT, iT) {
      const zT = TT.filter((TT => {
        let [IT, iT] = TT;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === IT && iT === oT
      }));
      if (1 !== zT.length) throw new Error(`A model program for shader packs has ${0===zT.length?"no":"more than one"} ${iT} code before fog (lite/modelShaderPack.ts)`);
      return TT.map((TT => TT === zT[0] ? [TT[0], IT] : TT))
    }

    function eW(TT, oT, IT, iT) {
      const {
        hooks: zT
      } = TT, {
        kind: kT,
        defines: WT
      } = oT, XT = [...IT];
      var BT;
      oT.atlas && zT.surface && XT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", GI("atlasIdxIn")]), "item" === kT && XT.push(["CUSTOM_VERTEX_DEFINITIONS", (0, mT.g)(mT.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), gW(TT, oT) && XT.push(["CUSTOM_VERTEX_DEFINITIONS", (0, mT.g)(mT.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (BT = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${sI}[min(u32(${BT}) - 1u, arrayLength(&${sI}) - 1u)], ${BT} > 0.5);\n`)]);
      const FT = DW(oT);
      FT && (zT.surface || zT.light) && XT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${FT.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${FT.varying} = ${FT.value};`]);
      let ST = iT;
      if (BW(TT, oT, "fragment") && (XT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${XW});`]), ST = [...ST, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), hW(TT, "localPosition") && XT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${kW(oT)};`]), xW(WT) && zT.surface) {
        KW(TT, oT) && XT.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const IT = cW(TT, oT);
        IT && XT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${IT});`]);
        const iT = (0, mT.mb)(mT.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        ST = [...mW(ST, (0, dk.g)(mT.d.WGSL), iT, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, dk.d)(WW)]]
      }
      const {
        overlay: DT
      } = oT;
      DT && MW(oT) && zT.surface && (ST = ST.filter((TT => !FW(TT, DT))));
      const LT = zT.light ? function(TT) {
        return "placed" === TT.kind ? {
          name: "terrain",
          engine: (0, eo.L)(mT.d.WGSL),
          pack: (0, eo.hb)(mT.d.WGSL)
        } : TT.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, eo.D)(mT.d.WGSL),
          pack: (0, eo.cb)(mT.d.WGSL)
        } : null
      }(oT) : null;
      if (LT && (ST = mW(ST, LT.engine, LT.pack, `${LT.name} light`), "placed" !== kT && wW(WT))) {
        const TT = WT.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, mT.wb)(mT.d.WGSL, "uEntityLightLevels") : (0, mT.Fb)(mT.d.WGSL, "aLightLevels");
        XT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${eo.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, eo.gb)(mT.d.WGSL, TT)])
      }
      return {
        vertexCode: XT,
        fragmentCode: ST
      }
    }

    function RW(TT, oT, IT, iT) {
      return QI(TT, oT, IT, iT, "model")
    }
    const uW = "\t@builtin(position) position: vec4f,\n";

    function vW(TT, oT) {
      const IT = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(TT)[0];
      return `${IT}${oT}${TT.slice(IT.length)}`
    }

    function EW(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: zT
      } = oT, kT = HI(oT, iT), {
        kind: WT,
        defines: XT
      } = IT, BT = function(TT, oT) {
        var IT, iT, zT;
        const {
          defines: kT
        } = oT, WT = DW(oT), XT = !!kT.FOG, BT = xW(kT), FT = null !== (IT = null === WT || void 0 === WT ? void 0 : WT.enchantTier) && void 0 !== IT ? IT : cW(TT, oT) ? "fragmentInputs.vPackEnchantTier" : "0u", ST = "lifeform" === oT.kind && !kT.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (iT = null === WT || void 0 === WT ? void 0 : WT.vertexFlags) && void 0 !== iT ? iT : LW(oT),
          vertexLocalPosition: kW(oT),
          flags: null !== (zT = null === WT || void 0 === WT ? void 0 : WT.flags) && void 0 !== zT ? zT : LW(oT),
          normal: "normalW",
          alpha: ST ? "alpha * baseColor.a" : "alpha",
          alphaOut: ST ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: XT ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: XT ? "1.0 - fog" : "0.0",
          enchantTier: FT,
          enchantColour: BT ? `${WW}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: KW(TT, oT) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: hW(TT, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: MW(oT)
        }
      }(oT, IT), FT = TT.textures.filter((TT => /^textureAtlas\d+$/.test(TT.name))).length, ST = IT.atlas && FT > 0 ? {
        count: FT,
        layers: IT.atlas.layers,
        width: IT.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: TT.material.slots.has("uAnimDataPerTex") ? (oT, IT) => Ci(oT, IT, function(TT) {
          const oT = TT.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            dD: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: TT => `uniforms.uAnimDataPerTex[${TT}]${oT}`
          }
        }(TT)) : null
      } : null, DT = "placed" === WT ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", LT = null !== ST && void 0 !== ST ? ST : AW(IT), xT = function(TT, IT) {
        let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,vo.A)()}${qI(oT,IT)}${iT}${bI(TT)}${UI}${DT}${oT.code}`
      };
      let {
        vertex: cT,
        fragment: KT
      } = TT;
      const MT = NI(zT, BT);
      if (MT) {
        const TT = BW(oT, IT, "vertex") ? `\tbloxdSpCell = ${XW};\n` : "";
        cT = RW(cT, Vk, `${TT}${MT.slice(1)}${Vk}`, "vertex")
      }
      const rT = `${ZI(oT,kT,function(TT,oT){return oT.TWOSIDEDLIGHTING?TT:`select(-(${TT}), ${TT}, fragmentInputs.frontFacing)`}(BT.normal,XT),BT.flags)}${PI(zT,oT.strict,oT.program,LT,BT)}`;
      rT && (KT = RW(KT, TW, `${rT.slice(1)}${TW}`, "surface")), kT && oT.sunShadow && !XT.TWOSIDEDLIGHTING && (KT = RW(KT, uW, `${uW}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const AT = Ti(zT);
      if (AT) {
        const TT = VI(zT, wW(XT), !0, BT);
        KT = RW(KT, oW, `${TT}${AT.slice(1)}${oW}`, "light")
      }
      const gT = gW(oT, IT) ? tI : "";
      return {
        ...TT,
        vertex: vW(cT, xT(ST, !1, gT)),
        fragment: vW(KT, xT(LT, kT))
      }
    }
    const fW = {
      name: "earthSky",
      uniqueId: -1
    };
    class CW {
      constructor(TT) {
        this.resources = TT, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const TT of this.instances.values()) TT.released = !0, this.resources.destroyBuffer(TT.buffer);
        this.instances.clear()
      }
    }

    function jW(TT) {
      return TT.failed && null !== TT.packGroup
    }
    class JW {
      constructor(TT, oT, IT) {
        this.device = TT, this.resources = oT, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.K8 = new Uk, this.modelMeshes = new Jk, this.thinBundle = void 0, this.binder = new dz, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new hk((TT => this.modelSlot(TT).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Fo.c)("Lite: "), this.renderStates = new Kk(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (TT, oT) => this.keepSteady(TT, oT), this.lists = new Vz(this.modelMeshes, this.K8, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new Dk(oT, this.warnOnce, ((TT, oT, IT) => this.programWithModel(TT, oT, IT)), jW), this.vertexLayouts = new Rk(oT, TT.limits, this.warnOnce), this.sceneLayout = oo(TT), this.frameLayout = TT.createBindGroupLayout({
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
        }), this.frameBuffer = TT.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Ek(TT, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = TT.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Qk(TT, new Ek(TT, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (TT, oT, IT) => this.pipelineFor(TT, oT, IT),
          pipelineCompiling: (TT, oT) => !TT.program.failed && !1 !== this.pipelines.get(`${TT.pipelineKey}|${oT}`),
          sceneGroup: TT => {
            const oT = IT(TT);
            return oT || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), oT
          }
        }), oT.onDestroy = TT => {
          this.thinBundle.resourceDestroyed(TT)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const zT = {
          order: TT,
          isTransparent: oT,
          _direct: !oT,
          bind: (TT, oT) => this.createBinding(zT, oT, IT, iT)
        };
        return zT
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(TT, oT, IT) {
        var iT;
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = oT, this.drawDefines.view = oT, this.thinBundle.xR(), this.writeFrameUniforms();
        const kT = null !== (iT = null === zT || void 0 === zT ? void 0 : zT.defineFor("model")) && void 0 !== iT ? iT : 0;
        this.drawDefines.modelPackVariant = kT, zT && 0 !== kT && (this.packInputs ??= new pk(this.device, zT.textureLayers(), this.sunShadow), this.packInputs.write(zT, oT.eye, zT.tK())), this.lists.clear(), this.slotCount = 0;
        const WT = TT.activeCamera;
        this.K8.select(WT, this.keepSteadyBase), this.modelMeshes.select(WT, oT), IT && this.pushEarthSky(IT), this.lists.collect(TT), this.thinBundle.gR(), this.uploadMeshSlots()
      }
      pushDraws(TT, oT, IT, iT, zT, kT) {
        let WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const XT = kT.length;
        for (let BT = 0; BT < IT; BT++) {
          const IT = oT[BT];
          let XT = this.retainedDraw(TT, IT, iT, zT);
          if (void 0 === XT && (XT = this.drawFor(TT, IT, iT, zT), this.retain(IT, XT)), XT) {
            const TT = IT.owner,
              oT = WT ? WT[BT] : -1;
            XT.slotOffset = oT < 0 ? this.writeMeshSlot(TT.getWorldMatrix().m, TT.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[oT], 16 * oT), kT.push(XT)
          }
        }
        return kT.length - XT
      }
      bundleDraws(TT, oT, IT) {
        let iT = 0;
        for (const zT of oT) {
          let oT = this.retainedDraw(TT, zT, IT, !1);
          const kT = void 0 !== oT;
          if (void 0 === oT && (oT = this.drawFor(TT, zT, IT, !1), this.retain(zT, oT)), oT) {
            const TT = zT.owner,
              IT = this.thinBundle.add(zT, oT, TT.getWorldMatrix().m, TT.visibility);
            kT && this.steadyFrom(zT, oT, IT), iT++
          }
        }
        return iT
      }
      steadyFrom(TT, oT, IT) {
        const iT = TT.owner,
          zT = this.K8.base(iT),
          kT = iT.material,
          {
            drawState: WT,
            instance: XT
          } = oT.inputs.retained;
        if (!zT || !kT || 1 !== TT.parts.materials.length || Ck(TT) !== kT) return;
        const BT = zT.steady ??= {
          unit: TT,
          material: kT,
          visibility: 1,
          draw: oT,
          record: IT,
          drawState: WT,
          instance: XT,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        BT.unit = TT, BT.material = kT, BT.visibility = iT.visibility, BT.draw = oT, BT.record = IT, BT.drawState = WT, BT.instance = XT, BT.bindGroup = XT.bindGroup, BT.gpuVersion = this.resources.gpuBuffersVersion, BT.fitInstances = oT.inputs.fitInstances, BT.worldFlag = iT.getWorldMatrix().updateFlag, BT.handedFrame = this.frame
      }
      keepSteady(TT, oT) {
        const IT = TT.steady;
        if (IT.handedFrame !== this.frame - 1 || (this.frame + IT.phase) % 8 === 0) return !1;
        const iT = TT.mesh,
          {
            unit: zT,
            draw: kT,
            instance: WT,
            drawState: XT
          } = IT,
          BT = iT.forcedInstanceCount || iT.W9;
        if (!iT.isVisible || iT.OiT || iT.visibility !== IT.visibility || 0 === (iT.layerMask & oT.layerMask) || iT.material !== IT.material || 0 !== iT.renderingGroupId || iT.hasVertexAlpha || !this.drawDefines.definesHold(XT, zT, XT.instancing) || IT.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(kT.inputs, zT, XT.instancing, kT.program) || kT.program.failed || WT.released || BT <= 0 || BT > IT.fitInstances) return !1;
        if (WT.frame !== this.frame && this.bindMaterial(WT, this.modelUniforms.refreshModelUniforms(iT.pC(), WT, WT.model, this.view)), !WT.bindable || WT.bindGroup !== IT.bindGroup) return !1;
        const FT = iT.computeWorldMatrix(),
          ST = FT.updateFlag !== IT.worldFlag;
        return IT.worldFlag = FT.updateFlag, kT.instances = BT, this.thinBundle.addAgain(IT.record, kT, ST ? FT.m : null, IT.visibility), IT.handedFrame = this.frame, this.K8.drawn++, !0
      }
      retainedDraw(TT, oT, IT, iT) {
        const zT = this.inputs.get(oT),
          kT = null === zT || void 0 === zT ? void 0 : zT.retained;
        if (!zT || !kT) return;
        const {
          drawState: WT,
          program: XT,
          instance: BT,
          instancing: FT
        } = kT, ST = oT.owner;
        if (kk(ST) !== FT) return;
        const DT = this.instanceCount(ST, FT);
        if (DT <= 0) return null;
        if (BT.released || XT.failed || WT.program !== XT || !this.drawDefines.programCurrent(WT, oT, FT, IT) || !this.inputsStamped(zT, oT, FT, XT) || ST.isUnIndexed !== kT.unIndexed || this.indexKey(oT) !== kT.indexData) return;
        if (kT.indexBuffer && kT.gpuVersion !== this.resources.gpuBuffersVersion) {
          const TT = this.resources.gpuBuffer(kT.indexData);
          if (!TT) return;
          kT.indexBuffer = TT, kT.gpuVersion = this.resources.gpuBuffersVersion
        }
        let LT = !1;
        if (BT.frame !== this.frame && (LT = this.modelUniforms.refreshModelUniforms(TT, BT, BT.model, this.view)), !this.bindMaterial(BT, LT) || !this.withGpuBuffers(zT) || !this.instanceBuffersFit(ST.name, zT, DT)) return null;
        const xT = this.makeDraw(XT, zT, this.renderStates.renderState(WT.model, ST, iT, zT.state), BT, DT);
        return this.setRange(xT, oT, kT.indexBuffer, kT.indexData), xT
      }
      retain(TT, oT) {
        const IT = this.drawDefines.drawStates.get(TT);
        if (!oT || !IT || IT.program !== oT.program) {
          const oT = this.inputs.get(TT);
          return void(oT && (oT.retained = null))
        }
        const iT = TT.owner,
          zT = IT.instancing,
          kT = this.indexKey(TT),
          WT = oT.inputs.retained;
        WT ? (WT.drawState = IT, WT.instancing = zT, WT.program = oT.program, WT.instance = oT.material, WT.indexData = kT, WT.unIndexed = iT.isUnIndexed, WT.indexBuffer = oT.indexBuffer, WT.gpuVersion = this.resources.gpuBuffersVersion) : oT.inputs.retained = {
          drawState: IT,
          instancing: zT,
          program: oT.program,
          instance: oT.material,
          indexData: kT,
          unIndexed: iT.isUnIndexed,
          indexBuffer: oT.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(TT, oT, IT, iT) {
        const zT = oT.owner,
          kT = Ck(oT);
        if (!kT) return null;
        const WT = kT.getClassName();
        let XT = null;
        if (function(TT) {
            return "LinesMesh" === TT.getClassName()
          }(zT)) {
          if (! function(TT) {
              return "ShaderMaterial" === TT.getClassName() && "color" === TT.shaderPath
            }(kT)) return this.warnOnce(`lines:${WT}`, `A LinesMesh with a ${WT} is not drawn yet (${kT.name})`), null;
          XT = zT
        } else if ("StandardMaterial" !== WT && "LiteMaterial" !== WT) return this.warnOnce(`class:${WT}`, `${WT} is not drawn yet (${kT.name})`), null;
        const BT = kk(zT),
          FT = this.instanceCount(zT, BT);
        if (FT <= 0) return null;
        const ST = XT ? this.lineProgramFor(zT, IT, BT) : this.drawDefines.programFor(TT, oT, kT, IT, BT);
        if (!ST || ST.failed) return null;
        const DT = XT ? null : this.drawDefines.drawStates.get(oT).model,
          LT = DT ? this.modelInstance(DT, ST) : this.materialInstance(zT, ST);
        let xT = !1;
        if (LT.frame !== this.frame && (XT ? AT(LT.ubo, XT) : xT = this.modelUniforms.refreshModelUniforms(TT, LT, LT.model, this.view)), !this.bindMaterial(LT, xT)) return null;
        const cT = this.meshInputs(oT, ST, BT);
        if (!cT || !this.instanceBuffersFit(zT.name, cT, FT)) return null;
        const KT = this.indexKey(oT);
        let MT = null;
        if (KT && !zT.isUnIndexed && (MT = this.resources.gpuBuffer(KT), !MT)) return null;
        const rT = this.renderStates.renderState(null !== DT && void 0 !== DT ? DT : kT, zT, iT, cT.state, XT ? "line-list" : "triangle-list"),
          gT = this.makeDraw(ST, cT, rT, LT, FT);
        return this.setRange(gT, oT, MT, KT), gT
      }
      indexKey(TT) {
        const oT = Fk(TT);
        return oT ? this.resources.modelIndex(oT) : null
      }
      setRange(TT, oT, IT, iT) {
        IT && (TT.indexBuffer = IT, TT.indexFormat = this.resources.indexFormat(iT));
        const zT = 4 * oT.range + (IT ? 0 : 2);
        TT.unit = oT, TT.first = oT.parts.ec[zT], TT.count = oT.parts.ec[zT + 1]
      }
      makeDraw(TT, oT, IT, iT, zT) {
        oT.state !== IT && (oT.state = IT, oT.pipelineKey = `${TT.id}|${oT.layout.key}|${IT.key}`, oT.pipeline = null);
        const kT = oT.draw ??= {
          program: TT,
          inputs: oT,
          pipelineKey: "",
          layout: oT.layout,
          state: IT,
          material: iT,
          slotOffset: 0,
          vertexBuffers: oT.buffers,
          vertexOffsets: oT.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: zT,
          unit: null
        };
        return kT.program = TT, kT.pipelineKey = oT.pipelineKey, kT.state = IT, kT.material = iT, kT.vertexOffsets = oT.offsets, kT.indexBuffer = null, kT.instances = zT, kT
      }
      instanceCount(TT, oT) {
        switch (oT) {
          case "thin":
            return TT.forcedInstanceCount || TT.W9;
          case "instanced":
            return this.prepareInstances(TT);
          case "none":
            return 1
        }
      }
      prepareInstances(TT) {
        const oT = function(TT, oT) {
          const IT = oT._userInstancedBuffersStorage,
            iT = TT.batchUploads.get(oT);
          if (iT) {
            var zT;
            if (iT.layout === (null !== (zT = null === IT || void 0 === IT ? void 0 : IT.interleavedKinds) && void 0 !== zT ? zT : null)) return iT;
            iT.release()
          }
          return new GT(TT, oT, IT)
        }(this.resources, TT);
        return oT.frame !== this.frame && oT.pack(TT, this.modelMeshes.instanceBatch(TT), this.modelMeshes.worlds, this.frame), oT.count
      }
      programWithModel(TT, oT, IT) {
        const iT = this.modelSlot(TT),
          zT = Lk(iT, TT, IT),
          kT = this.drawDefines.modelPackKind(TT),
          WT = kT ? function(TT, oT, IT, iT) {
            const zT = (0, uT.w)(TT, eT.f.name),
              kT = [];
            for (const {
                feature: BT,
                state: FT,
                active: ST
              }
              of TT.features) {
              var WT, XT;
              const TT = ST ? null === (WT = (XT = (0, So.j)(BT)).Fc) || void 0 === WT ? void 0 : WT.call(XT, FT) : void 0;
              TT && kT.push(TT)
            }
            return {
              kind: oT,
              atlas: null !== zT && void 0 !== zT && zT.active ? (0, eT.b)(zT.state) : null,
              defines: IT,
              ...SW(kT, iT)
            }
          }(TT, kT, oT, iT.fragmentCode) : null;
        if (WT && function(TT) {
            const oT = TT.defines;
            return (null === TT.atlas || !!oT.DIFFUSE && 1 === oT.DIFFUSEDIRECTUV) && !!oT.NORMAL && !oT.REFLECTION && !oT.EMISSIVEASILLUMINATION && !oT.LINKEMISSIVEWITHDIFFUSE
          }(WT)) {
          const IT = this.modelPackProgram(TT, oT, `${zT}#${kT}#sp${this.drawDefines.modelPackVariant}`, iT, WT);
          if (IT && !IT.failed) return IT
        }
        const XT = this.programs.get(zT);
        if (XT || this.unbuildable.has(zT)) return null !== XT && void 0 !== XT ? XT : null;
        let BT;
        try {
          BT = Dz({
            defines: Xk(oT),
            vertexCode: iT.vertexCode,
            fragmentCode: iT.fragmentCode,
            pluginUniforms: iT.pluginUniforms
          })
        } catch (FT) {
          return this.unbuildable.add(zT), this.warnOnce(`build:${zT}`, `could not build a program for ${TT.name}: ${String(FT)}`), null
        }
        return this.createProgram(zT, BT, "standard")
      }
      modelPackProgram(TT, oT, IT, iT, zT) {
        const kT = this.programs.get(IT);
        if (kT || this.unbuildable.has(IT)) return null !== kT && void 0 !== kT ? kT : null;
        const WT = this.drawDefines.modelPackVariant;
        let XT;
        try {
          const TT = function(TT) {
              return (0, Eo.b)(TT, "model")
            }(WT),
            IT = eW(TT, zT, iT.vertexCode, iT.fragmentCode);
          XT = EW(Dz({
            defines: Xk(oT),
            ...IT,
            pluginUniforms: iT.pluginUniforms
          }), TT, zT, !!this.sunShadow)
        } catch (ST) {
          return this.unbuildable.add(IT), this.warnOnce(`build:${IT}`, `could not build a shader pack program for ${TT.name}, which draws without the pack: ${String(ST)}`), null
        }
        const BT = tk(WT, !!this.sunShadow),
          FT = {
            group: this.packInputs.bindGroupFor(null, BT),
            layout: lk(this.device, {
              depth: !1,
              sunShadow: BT
            })
          };
        return this.createProgram(IT, XT, function(TT) {
          return `standard-sp${TT}`
        }(WT), FT)
      }
      lineProgramFor(TT, oT, IT) {
        const iT = rT(TT, IT, oT, this.view);
        let zT = this.linePrograms.get(iT);
        var kT;
        return zT || (zT = this.createProgram(`lines#${iT}`, (kT = function(TT) {
          const oT = new Map;
          for (let IT = 0; IT < FT.length; IT++) TT & 1 << IT && oT.set(FT[IT], !0);
          return oT
        }(iT), Kz({
          defines: kT,
          vertex: xz,
          fragment: cz,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(iT, zT)), zT
      }
      createProgram(TT, oT, IT) {
        var iT;
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const kT = this.nextProgramId++,
          WT = `${IT}-${kT}`,
          XT = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          BT = [{
            binding: 0,
            visibility: XT,
            buffer: {
              type: "uniform"
            }
          }];
        for (const DT of oT.textures) BT.push({
          binding: DT.binding,
          visibility: XT,
          texture: {
            viewDimension: DT.dimension
          }
        }), BT.push({
          binding: DT.samplerBinding,
          visibility: XT,
          sampler: {}
        });
        const FT = this.device.createBindGroupLayout({
            label: WT,
            entries: BT
          }),
          ST = {
            key: TT,
            id: kT,
            kind: IT,
            program: oT,
            vertex: this.device.createShaderModule({
              label: `${WT}-vertex`,
              code: oT.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${WT}-fragment`,
              code: oT.fragment
            }),
            materialLayout: FT,
            pipelineLayout: this.device.createPipelineLayout({
              label: WT,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, FT, ...zT ? [zT.layout] : []]
            }),
            packGroup: null !== (iT = null === zT || void 0 === zT ? void 0 : zT.group) && void 0 !== iT ? iT : null,
            failed: !1
          };
        return this.programs.set(TT, ST), ST
      }
      writeFrameUniforms() {
        const TT = this.frameUniforms;
        gk(this.view, TT), this.device.queue.writeBuffer(this.frameBuffer, 0, TT)
      }
      materialInstance(TT, oT) {
        let IT = this.materials.get(TT);
        if (!IT) {
          const oT = new Map;
          this.materials.set(TT, oT), TT.bC.addOnce((() => {
            for (const TT of oT.values()) TT.released = !0, this.resources.destroyBuffer(TT.buffer);
            this.materials.delete(TT)
          })), IT = oT
        }
        let iT = IT.get(oT.key);
        return iT || (iT = this.newMaterialInstance(TT, null, oT), IT.set(oT.key, iT)), iT
      }
      modelInstance(TT, oT) {
        const IT = this.modelSlot(TT);
        let iT = IT.instances.get(oT.key);
        return iT || (iT = this.newMaterialInstance(TT, TT, oT), IT.instances.set(oT.key, iT)), iT
      }
      modelSlot(TT) {
        let oT = TT.gpu[ET.f.lite];
        return oT || (oT = new CW(this.resources), TT.gpu[ET.f.lite] = oT), oT
      }
      newMaterialInstance(TT, oT, IT) {
        const iT = IT.program.material.floats,
          zT = new Float32Array(iT),
          kT = new Map;
        return {
          owner: TT,
          model: oT,
          program: IT,
          data: zT,
          uploaded: new Float32Array(iT).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${TT.name}-uniforms`,
            size: Math.max(16, 4 * iT),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: kT,
          ubo: new Ak(IT.program.material.slots, zT, kT),
          bindGroup: null,
          bound: new Array(2 * IT.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(TT) {
        var oT;
        const IT = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: hz + wz,
            fragment: hz + mz,
            attributes: [],
            material: gz,
            textures: []
          }, "earthSky"),
          iT = this.earthSkyUniforms ??= this.newMaterialInstance(fW, null, IT);
        this.earthSkyFrom !== TT && (this.earthSkyFrom = TT, iT.data.fill(0)), jz(iT.ubo, TT, this.view);
        const zT = this.vertexInputs(IT, fW, "earthSky", IT, null);
        if (IT.failed || !zT || !this.bindMaterial(iT, !1)) return;
        const kT = null !== (oT = zT.state) && void 0 !== oT ? oT : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          WT = this.makeDraw(IT, zT, kT, iT, 1);
        WT.count = Mz.length;
        const XT = Jz(TT, this.view);
        WT.slotOffset = this.writeMeshSlot(XT, 1), this.lists.skyDraws.push(WT)
      }
      uploadIfChanged(TT) {
        const {
          data: oT,
          uploaded: IT
        } = TT;
        for (let iT = 0; iT < oT.length; iT++)
          if (oT[iT] !== IT[iT]) return IT.set(oT), void this.device.queue.writeBuffer(TT.buffer, 0, oT)
      }
      bindMaterial(TT, oT) {
        return TT.frame !== this.frame && (TT.frame = this.frame, oT || this.uploadIfChanged(TT), TT.bindable = this.bindTextures(TT)), TT.bindable
      }
      bindTextures(TT) {
        const {
          program: oT,
          bound: IT
        } = TT, iT = oT.program.textures;
        let zT = !TT.bindGroup,
          kT = !0;
        for (let WT = 0; WT < iT.length; WT++) {
          const oT = TT.textures.get(iT[WT].name),
            XT = oT ? this.resources.boundTexture(oT) : null;
          XT ? IT[2 * WT] === XT.view && IT[2 * WT + 1] === XT.sampler || (IT[2 * WT] = XT.view, IT[2 * WT + 1] = XT.sampler, zT = !0) : (oT || TT.ubo.expected.has(iT[WT].name) || this.warnOnce(`texture:${TT.owner.name}:${iT[WT].name}`, `${TT.owner.name} has no ${iT[WT].name}`), kT = !1)
        }
        if (!kT) return zT && (TT.bindGroup = null), !1;
        if (zT) {
          const zT = [{
            binding: 0,
            resource: {
              buffer: TT.buffer
            }
          }];
          for (let TT = 0; TT < iT.length; TT++) zT.push({
            binding: iT[TT].binding,
            resource: IT[2 * TT]
          }), zT.push({
            binding: iT[TT].samplerBinding,
            resource: IT[2 * TT + 1]
          });
          TT.bindGroup = this.device.createBindGroup({
            label: `${TT.owner.name}-material`,
            layout: oT.materialLayout,
            entries: zT
          })
        }
        return !0
      }
      writeMeshSlot(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, TT, oT, IT), this.slotCount++ * si
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(TT, oT, IT, iT, zT) {
        let kT = this.inputs.get(TT);
        if (!kT || kT.program !== iT || !uk(oT, kT, this.resources, zT)) {
          var WT;
          if (kT = null !== (WT = this.vertexLayouts.resolveInputs(oT, IT, iT, zT)) && void 0 !== WT ? WT : void 0, !kT) return null;
          this.inputs.set(TT, kT)
        }
        return this.withGpuBuffers(kT)
      }
      meshInputs(TT, oT, IT) {
        const iT = this.inputs.get(TT);
        if (iT && this.inputsStamped(iT, TT, IT, oT)) return this.withGpuBuffers(iT);
        const zT = TT.owner,
          kT = Fk(TT),
          WT = this.vertexInputs(TT, zT, zT.name, oT, kT);
        return WT && (WT.geometry = Sk(TT), WT.instanceLayout = this.drawDefines.instanceLayout(zT, IT)), WT
      }
      inputsStamped(TT, oT, IT, iT) {
        return function(TT, oT, IT, iT) {
          return TT.program === IT && TT.geometry === Sk(oT) && TT.instanceLayout === iT
        }(TT, oT, iT, this.drawDefines.instanceLayout(oT.owner, IT))
      }
      withGpuBuffers(TT) {
        return bk(TT, this.resources, this.zeroBuffer) ? TT : null
      }
      instanceBuffersFit(TT, oT, IT) {
        const iT = Nk(oT, IT, this.resources, this.zeroBuffer);
        if (iT) {
          const zT = oT.ends[iT.index] - oT.offsets[iT.index] + oT.Q0[iT.index];
          return this.warnOnce(`overrun:${TT}`, `${TT} draws ${IT} instances from a ${zT}-byte buffer (${iT.needed} needed)`), !1
        }
        return !0
      }
      createBinding(TT, oT, IT, iT) {
        const zT = `${oT._colorFormat}|${oT._depthStencilFormat}|${oT._depthCompare}|${oT._sampleCount}`,
          kT = Wo(this.device, oT);
        if (TT === this.skyLastRenderable) {
          let IT = null;
          return {
            renderable: TT,
            pipeline: kT,
            draw: TT => IT ? this.drawSky(TT, oT, zT, IT) : 0,
            update: TT => {
              IT = TT
            }
          }
        }
        return {
          renderable: TT,
          pipeline: kT,
          draw: TT => (iT ? iT.execute(TT, oT, zT) : 0) + this.drawList(TT, oT, zT, IT)
        }
      }
      drawSky(TT, oT, IT, iT) {
        const zT = this.lists.skyDraws,
          kT = zT.length > 0;
        if (kT) {
          var WT;
          const IT = (null !== (WT = oT._depthCompare) && void 0 !== WT ? WT : Io).startsWith("greater") ? 0 : 1;
          TT.setViewport(0, 0, iT.targetWidth, iT.targetHeight, IT, IT)
        }
        const XT = this.drawList(TT, oT, IT, zT);
        return kT && TT.setViewport(0, 0, iT.targetWidth, iT.targetHeight, 0, 1), XT
      }
      drawList(TT, oT, IT, iT) {
        let zT = 0;
        const kT = this.binder;
        kT.reset();
        for (const WT of iT) {
          const iT = this.pipelineFor(WT, oT, IT);
          iT && (kT.bind(TT, WT, iT, this.meshSlots.bindGroup, WT.slotOffset), WT.indexBuffer ? TT.drawIndexed(WT.count, WT.instances, WT.first, 0, 0) : TT.draw(WT.count, WT.instances, WT.first, 0), zT++)
        }
        return zT
      }
      pipelineFor(TT, oT, IT) {
        var iT, zT;
        if (TT.program.failed) return null;
        const kT = TT.inputs;
        if (kT.pipeline && kT.pipelineTarget === IT) return kT.pipeline;
        const WT = `${TT.pipelineKey}|${IT}`,
          XT = this.pipelines.get(WT);
        if (void 0 !== XT) return XT && (kT.pipeline = XT, kT.pipelineTarget = IT), XT || null;
        this.pipelines.set(WT, null);
        const {
          program: BT,
          layout: FT,
          state: ST
        } = TT, DT = {
          label: `standard-${BT.id}`,
          layout: BT.pipelineLayout,
          vertex: {
            module: BT.vertex,
            entryPoint: "main",
            buffers: FT.buffers
          },
          fragment: PT({
            module: BT.fragment,
            entryPoint: "main"
          }, oT, ST.blend, ST.colourWrite),
          depthStencil: oT._depthStencilFormat ? {
            format: oT._depthStencilFormat,
            depthCompare: null !== (iT = null !== (zT = ST.depthCompare) && void 0 !== zT ? zT : oT._depthCompare) && void 0 !== iT ? iT : Io,
            depthWriteEnabled: ST.depthWrite,
            depthBias: ST.depthBias,
            depthBiasSlopeScale: ST.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: oT._sampleCount
          },
          primitive: {
            topology: ST.topology,
            frontFace: ST.frontFace,
            cullMode: ST.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(DT).then((TT => {
          this.compiling--, this.pipelines.set(WT, TT)
        }), (TT => {
          this.compiling--, this.reportFailure(BT, WT, TT)
        })), null
      }
      forEachSunShadowCaster(TT) {
        const oT = this.caster,
          IT = (IT, iT, zT) => {
            const kT = IT.unit && function(TT) {
              const oT = TT.material.model;
              return null !== oT && (oT.lifeform || oT.item) && oT.castsSunShadow && "triangle-list" === TT.state.topology
            }(IT) ? Fk(IT.unit) : null;
            if (!kT) return;
            const WT = IT.unit.owner;
            switch (oT.geometry = kT, oT.skip = WT.noSunShadowVertices, oT.indexed = null !== IT.indexBuffer, oT.first = IT.first, oT.count = IT.count, oT.iL = iT, oT.worldAt = zT, oT.instances = null, oT.instanceCount = 1, oT.thin = !1, kk(WT)) {
              case "thin": {
                const TT = WT._thinInstanceDataStorage.matrixData;
                if (!TT) return;
                oT.instances = TT, oT.instanceCount = Math.min(IT.instances, TT.length / 16), oT.thin = !0;
                break
              }
              case "instanced": {
                const TT = this.resources.batchUploads.get(WT);
                if (!TT || TT.frame !== this.frame || !this.writeBatchCasters(TT)) return;
                break
              }
            }
            TT(oT)
          };
        for (const iT of this.lists.opaqueDraws) IT(iT, this.meshSlots.data, iT.slotOffset / 4);
        this.thinBundle.forEachDrawn(IT)
      }
      writeBatchCasters(TT) {
        const {
          caster: oT
        } = this, IT = TT.packedMatrices, iT = TT.count;
        oT.instances = IT, oT.instanceCount = iT;
        let zT = -1;
        for (let kT = 0; kT < iT; kT++) {
          const oT = UW(TT.packedRowMesh(kT));
          oT && zT < 0 ? (this.casterWorlds.length < 16 * iT && (this.casterWorlds = new Float32Array(IT.length)), this.casterWorlds.set(IT.subarray(0, 16 * kT)), zT = kT) : !oT && zT >= 0 && (this.casterWorlds.set(IT.subarray(16 * kT, 16 * kT + 16), 16 * zT), zT++)
        }
        return zT >= 0 && (oT.instances = this.casterWorlds, oT.instanceCount = zT), oT.instanceCount > 0
      }
      async reportFailure(TT, oT, IT) {
        const iT = [];
        let zT = !0;
        for (const [kT, WT] of [
            ["vertex", TT.vertex],
            ["fragment", TT.fragment]
          ]) {
          const TT = await WT.getCompilationInfo();
          for (const oT of TT.messages) zT &&= "error" !== oT.type, iT.push(`${kT}:${oT.lineNum}:${oT.linePos} ${oT.type}: ${oT.message}`)
        }
        if (zT && !TT.packGroup) return this.pipelines.set(oT, !1), console.error(`Lite: pipeline ${oT} failed`, IT), void Pz("mesh", TT.kind, IT);
        TT.failed || (TT.failed = !0, console.error(`Lite: program ${TT.id} failed`, IT, iT.join("\n"), {
          program: TT.program,
          key: TT.key
        }), Pz("mesh", TT.kind, IT, zT ? null : iT[0]))
      }
    }

    function UW(TT) {
      var oT, IT;
      const iT = null === (oT = TT.HJ) || void 0 === oT || null === (IT = oT.aShaderPackItem) || void 0 === IT ? void 0 : IT.x;
      return void 0 !== iT && 0 !== (iT & Bo.k)
    }
    var aW = IT(40515),
      YW = IT(40518),
      QW = IT(40525),
      OW = IT(40474);
    const HW = [0, 3, 1, 4, 2, 5];

    function nW(TT, oT, IT, iT, zT) {
      const kT = IT[0].width;
      try {
        return zT ? function(TT, oT, IT) {
          const iT = (0, OW.c)(TT, IT, IT, 6);
          for (let zT = 0; zT < 6; zT++)(0, OW.e)(TT, iT, zT, oT[HW[zT]], {
            invertY: !1
          });
          return iT.texture
        }(TT, IT, kT) : function(TT, oT, IT, iT) {
          const zT = TT.createTexture({
            label: "sink-cube",
            size: {
              width: IT,
              height: IT,
              depthOrArrayLayers: 6
            },
            format: iT,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let kT = 0; kT < 6; kT++) TT.queue.copyExternalImageToTexture({
            source: oT[HW[kT]]
          }, {
            texture: zT,
            origin: {
              x: 0,
              y: 0,
              z: kT
            }
          }, {
            width: IT,
            height: IT
          });
          return zT
        }(oT, IT, kT, 1 === iT ? "r8unorm" : "rgba8unorm")
      } finally {
        qW(IT)
      }
    }

    function qW(TT) {
      for (const oT of null !== TT && void 0 !== TT ? TT : []) null === oT || void 0 === oT || oT.close()
    }
    async function ZW(TT) {
      const oT = [],
        IT = [];
      if (await Promise.all(TT.map(((TT, iT) => (oT[iT] = null, TT.then((TT => {
          oT[iT] = TT
        }), (TT => {
          IT.push(TT)
        })))))), IT.length > 0) throw qW(oT), IT[0];
      return oT
    }
    class lW {
      constructor(TT) {
        this.fD = TT, this.starts = [], this.lengths = [], this.used = 0, TT > 0 && (this.starts.push(0), this.lengths.push(TT))
      }
      allocate(TT) {
        const {
          starts: oT,
          lengths: IT
        } = this;
        for (let iT = 0; iT < oT.length; iT++) {
          if (IT[iT] < TT) continue;
          const zT = oT[iT];
          return IT[iT] === TT ? (oT.splice(iT, 1), IT.splice(iT, 1)) : (oT[iT] += TT, IT[iT] -= TT), this.used += TT, zT
        }
        return -1
      }
      free(TT, oT) {
        this.used -= oT;
        const IT = Math.min(TT + oT, this.fD);
        IT > TT && this.release(TT, IT - TT)
      }
      grow(TT) {
        const oT = this.fD;
        this.fD = TT, this.release(oT, TT - oT)
      }
      truncate(TT) {
        const {
          starts: oT,
          lengths: IT
        } = this;
        for (let iT = oT.length - 1; iT >= 0 && oT[iT] + IT[iT] > TT; iT--) oT[iT] >= TT ? (oT.splice(iT, 1), IT.splice(iT, 1)) : IT[iT] = TT - oT[iT];
        this.fD = TT
      }
      release(TT, oT) {
        const {
          starts: IT,
          lengths: iT
        } = this;
        let zT = 0,
          kT = IT.length;
        for (; zT < kT;) {
          const oT = zT + kT >> 1;
          IT[oT] < TT ? zT = oT + 1 : kT = oT
        }
        const WT = zT,
          XT = WT > 0 && IT[WT - 1] + iT[WT - 1] === TT,
          BT = WT < IT.length && TT + oT === IT[WT];
        XT && BT ? (iT[WT - 1] += oT + iT[WT], IT.splice(WT, 1), iT.splice(WT, 1)) : XT ? iT[WT - 1] += oT : BT ? (IT[WT] = TT, iT[WT] += oT) : (IT.splice(WT, 0, TT), iT.splice(WT, 0, oT))
      }
    }
    const sW = 256;
    class tW {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = TT, this.onReplaced = oT, this.mergeGap = IT, this.gpu = null, this.bytes = void 0, this.ec = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const zT = Math.max(sW, Math.ceil(iT / sW) * sW);
        this.bytes = new Uint8Array(zT), this.ec = new lW(zT / sW)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(TT) {
        return Math.max(1, Math.ceil(TT / sW)) * sW
      }
      allocate(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT;
        const iT = tW.slotBytes(TT),
          zT = iT / sW;
        let kT = this.ec.allocate(zT);
        kT < 0 && (this.grow(this.ec.fD + zT), kT = this.ec.allocate(zT));
        const WT = kT * sW;
        return this.growTo(WT + Math.max(IT, iT)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, WT, WT + iT), oT && this.bytes.set(new Uint8Array(oT.buffer, oT.byteOffset, Math.min(oT.byteLength, iT)), WT), this.markDirty(WT, WT + iT), WT
      }
      growTo(TT) {
        const oT = Math.ceil(TT / sW);
        oT > this.ec.fD && this.grow(oT)
      }
      free(TT, oT) {
        this.freed.push(TT, oT)
      }
      write(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (iT <= 0) return;
        this.bytes.set(new Uint8Array(oT.buffer, IT, iT), TT);
        let kT = TT + iT;
        if (zT) {
          const oT = TT + 4 * Math.ceil(iT / 4);
          this.bytes.fill(0, kT, oT), kT = oT
        }
        this.markDirty(TT, kT)
      }
      move(TT, oT, IT) {
        this.bytes.copyWithin(oT, TT, TT + IT), this.markDirty(oT, oT + IT)
      }
      flush() {
        for (const oT of this.retired) this.onReplaced(oT), oT.destroy();
        this.retired.length = 0;
        const TT = this.dirtyStarts.length;
        if (TT > 0) {
          const {
            dirtyStarts: oT,
            dirtyEnds: IT,
            order: iT
          } = this;
          iT.length = TT;
          for (let XT = 0; XT < TT; XT++) iT[XT] = XT;
          TT > 1 && iT.sort(((TT, IT) => oT[TT] - oT[IT]));
          const zT = this.mergeGap;
          let kT = oT[iT[0]],
            WT = IT[iT[0]];
          for (let XT = 1; XT < TT; XT++) {
            const TT = iT[XT];
            oT[TT] - WT <= zT ? WT = Math.max(WT, IT[TT]) : (this.send(kT, WT), kT = oT[TT], WT = IT[TT])
          }
          this.send(kT, WT), oT.length = 0, IT.length = 0
        }
        this.holding = !1
      }
      gR() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const TT = this.freed;
        for (let oT = 0; oT < TT.length; oT += 2) this.ec.free(TT[oT] / sW, TT[oT + 1] / sW);
        TT.length = 0
      }
      send(TT, oT) {
        this.device.queue.writeBuffer(this.gpu, TT, this.bytes.buffer, TT, oT - TT);
        for (const IT of this.replaced) {
          const iT = Math.min(oT, IT.size);
          iT > TT && this.device.queue.writeBuffer(IT, TT, this.bytes.buffer, TT, iT - TT)
        }
      }
      markDirty(TT, oT) {
        TT &= -4, oT = oT + 3 & -4, this.holding ? (this.dirtyStarts.push(TT), this.dirtyEnds.push(oT)) : this.send(TT, oT)
      }
      grow(TT) {
        const oT = this.ec.fD,
          IT = Math.max(2 * oT, TT),
          iT = new Uint8Array(IT * sW);
        iT.set(this.bytes);
        const zT = this.gpu;
        this.gpu = this.createGpu(iT.byteLength), this.bytes = iT, this.ec.grow(IT), zT && (this.replaced.push(zT), this.onReplaced(zT)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, oT * sW)
      }
      createGpu(TT) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: TT,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function GW(TT) {
      return Array.isArray(TT) ? new Float32Array(TT) : TT
    }

    function pW(TT, oT, IT, iT, zT) {
      const kT = az(zT),
        WT = Math.min(zT, iT.byteLength);
      if (kT === WT && iT.byteOffset % 4 === 0) return void TT.queue.writeBuffer(oT, IT, iT.buffer, iT.byteOffset, kT);
      const XT = new Uint8Array(kT);
      XT.set(new Uint8Array(iT.buffer, iT.byteOffset, WT)), TT.queue.writeBuffer(oT, IT, XT)
    }

    function bW(TT, oT, IT) {
      const iT = "linear",
        zT = "nearest";
      let kT = zT,
        WT = zT,
        XT = "nearest",
        BT = !oT;
      switch (TT) {
        case 11:
          kT = iT, WT = iT;
          break;
        case 3:
          kT = iT, WT = iT, XT = oT ? "linear" : "nearest";
          break;
        case 8:
          XT = oT ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          WT = iT;
          break;
        case 6:
          WT = iT, XT = oT ? "linear" : "nearest";
          break;
        case 7:
          WT = iT, BT = !0;
          break;
        case 9:
          kT = iT;
          break;
        case 10:
          kT = iT, XT = oT ? "linear" : "nearest";
          break;
        case 2:
          kT = iT, WT = iT, IT > 1 ? (XT = "linear", BT = !1) : BT = !0;
          break;
        case 12:
          kT = iT, BT = !0;
          break;
        default:
          BT = !0
      }
      return IT > 1 && !BT ? {
        magFilter: iT,
        minFilter: iT,
        mipmapFilter: "linear",
        maxAnisotropy: IT
      } : {
        magFilter: kT,
        minFilter: WT,
        mipmapFilter: XT,
        ...BT ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function yW(TT) {
      return 0 === TT ? "clamp-to-edge" : 2 === TT ? "mirror-repeat" : "repeat"
    }
    class NW {
      constructor(TT, oT) {
        let {
          vertexArena: IT = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = TT, this.device = oT, this.buffers = new WeakMap, this.I6 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = IT ? new tW(oT, (TT => {
          var oT;
          null === (oT = this.onDestroy) || void 0 === oT || oT.call(this, TT), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var TT;
        null === (TT = this.arena) || void 0 === TT || TT.flush()
      }
      endUploadFrame() {
        var TT;
        null === (TT = this.arena) || void 0 === TT || TT.gR()
      }
      vertexBufferCreated(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IT ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(TT);
        const zT = GW(oT);
        TT.fD = zT.byteLength, this.buffers.set(TT, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: IT && null !== this.arena,
          pending: zT,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: iT
        })
      }
      vertexBufferUpdated(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        const zT = this.buffers.get(TT);
        if (!zT) return;
        const kT = GW(oT),
          WT = void 0 === iT ? kT.byteLength : Math.min(iT, kT.byteLength);
        this.update(zT, kT, IT, WT)
      }
      vertexBufferFloatsUpdated(TT, oT, IT, iT) {
        const zT = this.buffers.get(TT);
        if (!zT) return;
        const kT = IT * Float32Array.BYTES_PER_ELEMENT,
          WT = (iT - IT) * Float32Array.BYTES_PER_ELEMENT;
        zT.slot >= 0 && WT > 0 && kT + WT <= zT.size ? this.writeSlot(zT, kT, oT, oT.byteOffset + kT, WT, !1) : zT.gpu && WT > 0 && kT + WT <= zT.gpu.size ? this.device.queue.writeBuffer(zT.gpu, kT, oT.buffer, oT.byteOffset + kT, WT) : this.update(zT, oT.subarray(IT, iT), kT, WT)
      }
      indexBufferCreated(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(TT);
        const iT = function(TT) {
          if (TT instanceof Uint16Array || TT instanceof Uint32Array) return TT;
          for (let oT = 0; oT < TT.length; oT++)
            if (TT[oT] >= 65535) return new Uint32Array(TT);
          return new Uint16Array(TT)
        }(oT);
        TT.is32Bits = 4 === iT.BYTES_PER_ELEMENT, TT.fD = iT.byteLength, this.buffers.set(TT, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: iT,
          ownsPending: iT !== oT,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: IT
        })
      }
      bufferDeleted(TT) {
        const oT = this.buffers.get(TT);
        null !== oT && void 0 !== oT && oT.gpu ? (this.destroyBuffer(oT.gpu), this.gpuBuffersVersion++) : oT && oT.slot >= 0 && (this.arena.free(oT.slot, oT.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(TT)
      }
      update(TT, oT, IT, iT) {
        if (TT.slot >= 0) this.updateSlot(TT, oT, IT, iT);
        else if (TT.gpu) {
          if (IT + az(iT) > TT.gpu.size) {
            const oT = this.device.createBuffer({
                label: TT.label,
                size: az(Math.max(2 * TT.gpu.size, IT + iT)),
                usage: TT.usage | GPUBufferUsage.COPY_SRC
              }),
              zT = this.device.createCommandEncoder();
            zT.copyBufferToBuffer(TT.gpu, 0, oT, 0, TT.gpu.size), this.device.queue.submit([zT.finish()]), this.destroyBuffer(TT.gpu), this.gpuBuffersVersion++, TT.gpu = oT
          }
          pW(this.device, TT.gpu, IT, oT, iT)
        } else {
          const kT = new Uint8Array(oT.buffer, oT.byteOffset, iT),
            WT = TT.pending;
          if (WT && TT.ownsPending && IT + iT <= WT.byteLength) new Uint8Array(WT.buffer, WT.byteOffset, WT.byteLength).set(kT, IT);
          else if (WT && 0 === IT && iT === WT.byteLength && oT.byteLength === iT) TT.pending = oT, TT.ownsPending = !1;
          else {
            var zT;
            const oT = new Uint8Array(Math.max(null !== (zT = null === WT || void 0 === WT ? void 0 : WT.byteLength) && void 0 !== zT ? zT : 0, IT + iT));
            WT && oT.set(new Uint8Array(WT.buffer, WT.byteOffset, WT.byteLength)), oT.set(kT, IT), TT.pending = oT, TT.ownsPending = !0
          }
        }
      }
      updateSlot(TT, oT, IT, iT) {
        const zT = this.arena;
        IT + az(iT) > TT.size && (TT.size = az(Math.max(2 * TT.size, IT + iT)), zT.growTo(TT.slot + TT.size), this.gpuBuffersVersion++), 0 === iT ? this.writeSlot(TT, IT, dW, 0, 4, !1) : this.writeSlot(TT, IT, oT, oT.byteOffset, iT, !0)
      }
      writeSlot(TT, oT, IT, iT, zT, kT) {
        const WT = oT + (kT ? az(zT) : zT);
        WT > TT.slotBytes && this.moveSlot(TT, WT), this.arena.write(TT.slot + oT, IT, iT, zT, kT)
      }
      moveSlot(TT, oT) {
        const IT = this.arena,
          iT = tW.slotBytes(Math.max(oT, Math.min(2 * TT.slotBytes, TT.size))),
          zT = IT.allocate(iT, null, TT.size);
        IT.move(TT.slot, zT, TT.slotBytes), IT.free(TT.slot, TT.slotBytes), TT.slot = zT, TT.slotBytes = iT, this.gpuBuffersVersion++
      }
      cover(TT, oT) {
        const IT = this.buffers.get(TT);
        if (!IT || IT.slot < 0) return !1;
        const iT = Math.min(oT, IT.size);
        return !(iT <= IT.slotBytes) && (this.moveSlot(IT, iT), !0)
      }
      destroyBuffer(TT) {
        var oT;
        null === (oT = this.onDestroy) || void 0 === oT || oT.call(this, TT), TT.destroy()
      }
      gpuBuffer(TT) {
        const oT = this.buffers.get(TT);
        if (!oT) return null;
        if (oT.slot >= 0) return this.arena.buffer;
        if (oT.arena && oT.pending) {
          const TT = oT.pending,
            IT = this.arena;
          return oT.size = az(TT.byteLength), oT.slotBytes = tW.slotBytes(function(TT) {
            const oT = new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength);
            let IT = oT.length;
            if (TT.byteOffset % 4 === 0) {
              for (; IT % 4 !== 0 && 0 === oT[IT - 1];) IT--;
              if (IT % 4 === 0) {
                const oT = new Uint32Array(TT.buffer, TT.byteOffset, IT / 4);
                let iT = oT.length;
                for (; iT > 0 && 0 === oT[iT - 1];) iT--;
                IT = 4 * iT
              }
            }
            for (; IT > 0 && 0 === oT[IT - 1];) IT--;
            return IT
          }(TT)), oT.slot = IT.allocate(oT.slotBytes, TT, oT.size), oT.pending = null, IT.buffer
        }
        if (!oT.gpu && oT.pending) {
          const TT = oT.pending;
          oT.gpu = this.device.createBuffer({
            label: oT.label,
            size: az(TT.byteLength),
            usage: oT.usage
          }), pW(this.device, oT.gpu, 0, TT, TT.byteLength), oT.pending = null
        }
        return oT.gpu
      }
      gpuOffset(TT) {
        var oT, IT;
        const iT = null !== (oT = null === (IT = this.buffers.get(TT)) || void 0 === IT ? void 0 : IT.slot) && void 0 !== oT ? oT : -1;
        return iT < 0 ? 0 : iT
      }
      gpuEnd(TT) {
        var oT, IT;
        const iT = this.buffers.get(TT);
        return iT ? iT.slot >= 0 ? iT.slot + iT.size : null !== (oT = null === (IT = iT.gpu) || void 0 === IT ? void 0 : IT.size) && void 0 !== oT ? oT : 0 : 0
      }
      vertexInput(TT, oT, IT) {
        var iT, zT, kT, WT;
        return null !== (iT = null !== (zT = IT && this.modelInput(IT, oT)) && void 0 !== zT ? zT : null === (kT = null !== (WT = this.I6.get(TT)) && void 0 !== WT ? WT : this.batchUploads.get(TT)) || void 0 === kT ? void 0 : kT.inputs[oT]) && void 0 !== iT ? iT : null
      }
      modelInput(TT, oT) {
        const IT = this.geometrySlot(TT);
        let iT = IT.inputs.get(oT);
        if (void 0 === iT) {
          const zT = TT.vertexAttributes.find((TT => TT.kind === oT));
          iT = zT ? new pT(this.modelKey(IT, zT.data, !1), zT.offset, zT.stride, zT.components, !1, zT.glType, zT.isNormalized) : null, IT.inputs.set(oT, iT)
        }
        return iT
      }
      modelIndex(TT) {
        return TT.indexData && this.modelKey(this.geometrySlot(TT), TT.indexData, !0)
      }
      geometrySlot(TT) {
        let oT = TT.gpu[ET.f.lite];
        if (!oT) {
          const IT = new Map,
            iT = () => {
              for (const TT of IT.values()) this.bufferDeleted(TT)
            },
            zT = TT => {
              const oT = IT.get(TT);
              oT && this.vertexBufferUpdated(oT, TT)
            };
          oT = {
            keys: IT,
            inputs: new Map,
            release: iT,
            updated: zT
          }, TT.gpu[ET.f.lite] = oT
        }
        return oT
      }
      modelKey(TT, oT, IT) {
        let iT = TT.keys.get(oT);
        if (!iT) {
          if (IT) {
            const TT = {
              fD: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(TT, oT, "model-indices"), iT = TT
          } else iT = {
            fD: 0
          }, this.vertexBufferCreated(iT, oT, !1, "model-vertices");
          TT.keys.set(oT, iT)
        }
        return iT
      }
      indexFormat(TT) {
        return TT.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(TT, oT) {
        --TT.refs > 0 || (this.releaseTexture(TT), qW(TT.images), null !== oT && this.textures.delete(oT))
      }
      load(TT, oT) {
        const IT = oT.decoded = async function(TT) {
          if ("cube" === TT.kind) return async function(TT) {
            if (6 !== TT.length) throw new Error(`${TT.length} files where six faces were expected`);
            const oT = await ZW(TT.map((TT => qz(TT)))),
              IT = oT[0].width;
            return ZW(oT.map((async TT => {
              if (TT.width === IT && TT.height === IT) return TT;
              try {
                return await createImageBitmap(TT, {
                  ...Hz,
                  resizeWidth: IT,
                  resizeHeight: IT
                })
              } finally {
                TT.close()
              }
            })))
          }(TT.files);
          if ("data" === TT.kind && TT.data) return [await createImageBitmap(new Blob([TT.data]), Hz)];
          return [await qz(PW(TT))]
        }(TT.source).then((TT => {
          0 === oT.refs ? qW(TT) : oT.images = TT
        }));
        this.track(oT, PW(TT.source), IT, (() => {
          oT.wanted && !oT.failed && oT.refs > 0 && this.upload(TT, oT)
        }))
      }
      canvasUpdated(TT, oT, IT) {
        const {
          state: iT
        } = this.textureSlot(TT);
        iT.dynamicSource = {
          invertY: oT,
          premultiplied: IT
        }, iT.dynamic && this.pushDynamic(TT.source, iT)
      }
      async atlasArray(TT, oT, IT) {
        const iT = await sz(this.device, TT, oT, IT);
        if (!this.atlasBindings.has(iT)) {
          const TT = (0, aW.e)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(iT, {
            view: iT.texture.createView({
              dimension: "2d-array"
            }),
            sampler: TT
          })
        }
        return iT
      }
      boundTexture(TT) {
        const oT = this.atlasBindings.get(TT);
        if (oT) return oT;
        const IT = TT;
        if (IT.released) return null;
        const iT = this.textureSlot(IT, !0),
          {
            state: zT
          } = iT;
        if (!zT.view && (zT.wanted = !0, zT.loading || zT.failed || this.upload(IT, zT), !zT.view)) return null;
        const kT = this.chosenSampler(IT, iT),
          WT = iT.bound;
        return WT && WT.view === zT.view && WT.sampler === kT ? WT : (iT.bound = {
          view: zT.view,
          sampler: kT
        }, iT.bound)
      }
      textureLoaded(TT) {
        var oT, IT;
        return null !== (oT = null === (IT = TT.gpu[ET.f.lite]) || void 0 === IT ? void 0 : IT.state.decoded) && void 0 !== oT ? oT : null
      }
      textureFailed(TT) {
        var oT;
        return !0 === (null === (oT = TT.gpu[ET.f.lite]) || void 0 === oT ? void 0 : oT.state.failed)
      }
      chosenSampler(TT, oT) {
        const {
          samplingMode: IT,
          wrapU: iT,
          wrapV: zT
        } = TT.sampler, kT = oT.state.hasMips, WT = function(TT, oT) {
          const {
            bilinear: IT,
            trilinear: iT
          } = ET.g;
          return !oT && TT !== IT || 11 !== TT && TT !== iT && TT !== IT ? 1 : 4
        }(IT, kT), XT = oT.sampler;
        if (XT && XT.samplingMode === IT && XT.hasMips === kT && XT.anisotropy === WT && XT.wrapU === iT && XT.wrapV === zT) return XT.sampler;
        const BT = this.samplerFor(IT, kT, WT, iT, zT);
        return oT.sampler = {
          samplingMode: IT,
          hasMips: kT,
          anisotropy: WT,
          wrapU: iT,
          wrapV: zT,
          sampler: BT
        }, BT
      }
      releaseTexture(TT) {
        var oT, IT;
        TT.view && (null === (IT = this.onDestroy) || void 0 === IT || IT.call(this, TT.view));
        null === (oT = TT.destroy) || void 0 === oT || oT.call(TT)
      }
      textureSlot(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = TT.gpu[ET.f.lite];
        if (IT) return IT;
        const iT = function(TT) {
          let {
            source: oT,
            sampler: IT
          } = TT;
          return "canvas" === oT.kind ? null : `${oT.kind}|${PW(oT)}|${IT.noMipmap}|${IT.samplingMode}|${IT.invertY}`
        }(TT);
        let zT = null === iT ? void 0 : this.textures.get(iT);
        zT || (zT = {
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
        }, null !== iT && (this.textures.set(iT, zT), this.load(TT, zT), oT && this.firstBindDecodes++)), zT.refs++;
        const kT = zT,
          WT = {
            state: zT,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(kT, iT)
            }
          };
        return TT.gpu[ET.f.lite] = WT, WT
      }
      samplerFor(TT, oT, IT, iT, zT) {
        const kT = `${TT}|${oT}|${IT}|${iT}|${zT}`;
        let WT = this.samplers.get(kT);
        if (!WT) {
          const XT = {
            ...bW(TT, oT, IT),
            addressModeU: yW(iT),
            addressModeV: yW(zT)
          };
          WT = (0, aW.e)(this.engine, XT), this.samplers.set(kT, WT)
        }
        return WT
      }
      upload(TT, oT) {
        const {
          source: IT,
          sampler: iT
        } = TT;
        oT.hasMips = !iT.noMipmap, "canvas" === IT.kind ? this.createDynamic(IT, oT) : "cube" === IT.kind ? this.uploadCube(oT, IT.luminance) : this.uploadImage(oT, !0 === iT.invertY, IT.url)
      }
      uploadImage(TT, oT, IT) {
        const [iT] = TT.images;
        TT.images = null;
        const zT = (0, YW.b)(this.engine, iT, {
          mipMaps: TT.hasMips,
          invertY: oT,
          srgb: !1
        }).then((oT => {
          iT.close(), 0 !== TT.refs ? (TT.view = oT.view, TT.destroy = oT.texture.destroy.bind(oT.texture)) : oT.texture.destroy()
        }));
        this.track(TT, IT, zT)
      }
      track(TT, oT, IT, iT) {
        TT.loading = !0, this.pending++, IT.catch((IT => {
          TT.failed = !0, console.warn(`Lite: could not load texture ${nz(oT)}`, IT)
        })).finally((() => {
          TT.loading = !1, this.pending--, null === iT || void 0 === iT || iT()
        }))
      }
      uploadCube(TT, oT) {
        const IT = TT.images;
        TT.images = null;
        const iT = nW(this.engine, this.device, IT, (0, ET.x)(oT), TT.hasMips);
        TT.view = iT.createView({
          dimension: "cube"
        }), TT.destroy = () => {
          iT.destroy()
        }
      }
      createDynamic(TT, oT) {
        const {
          canvas: IT
        } = TT, iT = (0, QW.d)(this.engine, Math.max(1, IT.width), Math.max(1, IT.height), {
          mipMaps: oT.hasMips,
          srgb: !1
        });
        oT.dynamic = iT, oT.view = iT.view, oT.destroy = () => {
          iT.texture.destroy()
        }, this.pushDynamic(TT, oT)
      }
      pushDynamic(TT, oT) {
        const IT = oT.dynamicSource,
          iT = oT.dynamic,
          {
            canvas: zT
          } = TT;
        if (IT && iT && 0 !== zT.width && 0 !== zT.height) return zT.width !== iT.width || zT.height !== iT.height ? (this.releaseTexture(oT), oT.dynamic = null, oT.view = null, void this.createDynamic(TT, oT)) : void(0, QW.e)(this.engine, iT, zT, {
          invertY: IT.invertY,
          premultiplyAlpha: IT.premultiplied
        })
      }
    }

    function PW(TT) {
      return "cube" === TT.kind ? TT.rootUrl : "canvas" === TT.kind ? "canvas" : TT.url
    }
    const dW = new Uint8Array(4);

    function VW(TT) {
      const oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      TT._colorAttachment.storeOp = TT._targetSignature._sampleCount > 1 ? oT : "store";
      const IT = TT._renderPassDescriptor.depthStencilAttachment;
      IT && (IT.depthStoreOp = oT, IT.stencilStoreOp && (IT.stencilStoreOp = oT))
    }
    var TX = IT(36717),
      oX = IT(36767),
      IX = IT(36317),
      iX = IT(38515);
    const zX = new Float64Array([1, 1, 1]),
      kX = new Float64Array([0, 1, 0]),
      WX = new Float64Array(4),
      XX = new Float32Array(16),
      BX = new Float64Array(3),
      FX = new Float64Array(4);

    function SX(TT, oT, IT) {
      TT.fov = oT.fov, TT.near = oT.near, TT.far = oT.far, TT.renderWidth = IT.renderWidth, TT.renderHeight = IT.renderHeight, (0, IX.q)(oT.holderRotation, 0, WX, 0), (0, IX.c)(zX, 0, WX, 0, oT.holderPosition, 0, XX);
      const iT = oT.Qy;
      BX[0] = iT[0], BX[1] = iT[1], BX[2] = iT[2] + 1;
      const zT = TT.viewMatrix;
      (0, IX.j)(iT, BX, kX, zT), (0, IX.f)(zT, 0, zT), (0, IX.l)(zT, XX, 0, zT), (0, IX.f)(zT, 0, zT);
      const kT = TT.worldMatrix;
      (0, IX.f)(zT, 0, kT), TT.eye[0] = kT[12], TT.eye[1] = kT[13], TT.eye[2] = kT[14], FX[0] = TT.fov, FX[1] = TT.renderWidth / TT.renderHeight, FX[2] = TT.near, FX[3] = TT.far, (0, IX.o)(FX, TT.projectionMatrix), (0, IX.l)(zT, TT.projectionMatrix, 0, TT.viewProjectionMatrix), (0, iX.d)(TT.viewProjectionMatrix, TT.frustum)
    }

    function DX(TT, oT) {
      let IT = TT.frustumPlanes;
      IT || (IT = TT.frustumPlanes = Array.from({
        length: 6
      }, (() => new TX.b(0, 0, 0, 0))));
      for (let iT = 0; iT < 6; iT++) {
        const TT = IT[iT].normal;
        TT._x = oT[4 * iT], TT._y = oT[4 * iT + 1], TT._z = oT[4 * iT + 2], TT._isDirty = !0, IT[iT].d = oT[4 * iT + 3]
      }
    }

    function LX(TT, oT) {
      const IT = oT.clearColor;
      TT.clearColour[0] = IT.r, TT.clearColour[1] = IT.g, TT.clearColour[2] = IT.b, TT.clearColour[3] = IT.a;
      const iT = oT.ambientColor;
      TT.ambientColour[0] = iT.r, TT.ambientColour[1] = iT.g, TT.ambientColour[2] = iT.b, TT.animationRatio = oT.animationRatio, TT.frameId = oT.frameId, TT.version++
    }

    function xX(TT) {
      const oT = TT.model.view;
      return oT.animTick = (0, oX.f)(), oT.timeMs = performance.now(), LX(oT, TT.NK), TT.model.update(oT.frameId), oT
    }

    function cX(TT) {
      const oT = TT.NK,
        {
          view: IT,
          Uy: iT
        } = TT.model;
      return SX(IT, iT, oT.Zc()), oT.onBeforeRenderObservable.notifyObservers(oT), DX(oT, IT.frustum), oT.onBeforeCameraRenderObservable.notifyObservers(oT.activeCamera), xX(TT)
    }
    var KX = IT(36270),
      MX = IT(36388),
      rX = IT(36758);

    function AX(TT) {
      var oT, IT;
      const iT = (0, uT.Z)(TT);
      if (!iT || iT.diffuseTexture && (0, rX.i)(TT)) return null;
      const zT = null === (oT = (0, uT.w)(iT, eT.f.name)) || void 0 === oT ? void 0 : oT.state,
        kT = null === (IT = (0, uT.w)(iT, Pk.d.name)) || void 0 === IT ? void 0 : IT.state,
        WT = new Float32Array(16);
      return function(TT, oT, IT, iT) {
        var zT, kT;
        const WT = ci;
        iT.set(TT.diffuseColor, WT.diffuse), iT[WT.diffuse + 3] = TT.alpha, iT.set(TT.ambientColor, WT.ambientAndCutoff), iT[WT.ambientAndCutoff + 3] = TT.alphaCutOff, iT.set(TT.emissiveColor, WT.emissiveAndLevel), iT[WT.emissiveAndLevel + 3] = null !== (zT = null === (kT = TT.diffuseTexture) || void 0 === kT ? void 0 : kT.level) && void 0 !== zT ? zT : 1, null !== oT && void 0 !== oT && oT.animDataPerTex ? (iT[WT.anim + 1] = oX.e, iT[WT.anim + 2] = oT.animDataPerTex.length / 3 - 1) : IT && (iT[WT.anim + 1] = IT.numAnimStates, iT[WT.anim + 2] = IT.ticksPerAnimState)
      }(iT, zT, kT, WT), {
        model: iT,
        atlas: zT,
        texture: zT ? "atlas" : iT.diffuseTexture ? "single" : "none",
        animated: zT ? !!zT.animDataPerTex : !!kT,
        liquid: (0, rX.j)(TT),
        customRenderMat: (0, rX.i)(TT),
        uniformData: WT
      }
    }
    var gX = IT(36256);
    class hX {
      constructor(TT) {
        this.units = TT, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var TT;
        this.buffer.destroy(), null === (TT = this.twin) || void 0 === TT || TT.destroy()
      }
    }
    class wX {
      constructor(TT, oT) {
        this.arena = TT, this.ec = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.ec = new lW(oT);
        const IT = new hX(oT);
        IT.buffer = this.createBuffer(IT, !1), this.backings.push(IT), this.refresh()
      }
      get fD() {
        return this.ec.fD
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
        let TT = 0;
        for (const oT of this.backings) TT += oT.units * (this.arena.unitBytes + (oT.twin ? this.arena.twinUnitBytes : 0));
        return TT
      }
      holds(TT) {
        return TT.start + TT.length <= this.usable
      }
      lost(TT) {
        return this.dropped || TT.start + TT.length > this.fD
      }
      write(TT, oT) {
        const {
          device: IT,
          unitBytes: iT
        } = this.arena;
        for (const zT of this.backings) {
          const kT = (zT.units - TT.start) * iT;
          kT > 0 && IT.queue.writeBuffer(zT.buffer, TT.start * iT, oT, 0, Math.min(oT.byteLength, kT))
        }
      }
      writeLight(TT, oT) {
        const {
          device: IT,
          twinUnitBytes: iT,
          verticesPerUnit: zT
        } = this.arena, {
          light: kT,
          count: WT
        } = this.arena.twinLight(oT, Math.min(oT.length, TT.length * zT));
        for (const XT of this.backings) {
          XT.twin || (XT.twin = this.createBuffer(XT, !0));
          const oT = (XT.units - TT.start) * zT;
          oT > 0 && IT.queue.writeBuffer(XT.twin, TT.start * iT, kT, 0, Math.min(WT, oT))
        }
      }
      grow(TT) {
        this.arena.assertNotDrawing();
        const {
          device: oT,
          unitBytes: IT,
          label: iT
        } = this.arena, zT = this.backings[this.backings.length - 1], kT = new hX(TT), WT = oT.createCommandEncoder({
          label: `${iT}-grow`
        });
        kT.buffer = this.createBuffer(kT, !1), WT.copyBufferToBuffer(zT.buffer, 0, kT.buffer, 0, zT.units * IT), zT.twin && (kT.twin = this.createBuffer(kT, !0), WT.copyBufferToBuffer(zT.twin, 0, kT.twin, 0, zT.units * this.arena.twinUnitBytes)), oT.queue.submit([WT.finish()]), this.backings.push(kT), this.ec.grow(TT)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const TT of this.backings) TT.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(TT, oT) {
        const {
          device: IT,
          unitBytes: iT,
          twinUnitBytes: zT,
          usage: kT,
          label: WT
        } = this.arena;
        IT.pushErrorScope("out-of-memory");
        const XT = IT.createBuffer({
          label: oT ? `${WT}-light` : WT,
          size: TT.units * (oT ? zT : iT),
          usage: (oT ? this.arena.twinUsage : kT) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, IT.popErrorScope().then((IT => {
          this.arena.awaitingVerdict--, this.settle(TT, oT, !IT, !0)
        }), (IT => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${WT} buffer, taken as failed: ${String(IT)}`), this.settle(TT, oT, !1, !1)
        })), XT
      }
      settle(TT, oT, IT, iT) {
        const zT = this.backings.indexOf(TT);
        if (!(this.dropped || zT < 0)) {
          if (!IT) {
            if (iT && this.arena.ranOutOfMemory(TT.units, TT.units * (oT ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === zT) return void this.drop();
            for (const TT of this.backings.splice(zT)) TT.destroy();
            return this.ec.truncate(this.backings[zT - 1].units), this.growable = !1, void this.promote()
          }
          oT ? TT.twinReady = !0 : (TT.bufferReady = !0, this.arena.allocatedBuffer(TT.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: TT
        } = this;
        let oT = 0;
        for (; oT + 1 < TT.length && TT[oT].ready && TT[oT + 1].ready;) oT++;
        for (const IT of TT.splice(0, oT)) IT.destroy();
        this.refresh()
      }
      refresh() {
        const TT = this.backings[0];
        this.buffer = TT.buffer, this.twin = TT.twinReady ? TT.twin : null, this.usable = !this.dropped && TT.bufferReady ? TT.units : 0
      }
    }
    class mX {
      constructor(TT, oT, IT, iT) {
        let {
          verticesPerUnit: zT = 1,
          twinUsage: kT = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = TT, this.unitBytes = oT, this.usage = IT, this.label = iT, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Fo.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), oT % 4 !== 0) throw new Error(`${iT}: ${oT}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = zT, this.twinUsage = kT, this.twinValueBytes = zT > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * zT
      }
      twinLight(TT, oT) {
        if (4 === this.twinValueBytes) return this.widened.length < oT && (this.widened = new Float32Array(Math.max(oT, 2 * this.widened.length))), this.widened.set(TT.subarray(0, oT)), {
          light: this.widened,
          count: oT
        };
        const IT = oT % this.verticesPerUnit;
        if (0 === IT) return {
          light: TT,
          count: oT
        };
        const iT = oT - IT + this.verticesPerUnit;
        return this.padded.length < iT && (this.padded = new Uint16Array(Math.max(iT, 2 * this.padded.length))), this.padded.set(TT.subarray(0, oT)), this.padded.fill(0, oT, iT), {
          light: this.padded,
          count: iT
        }
      }
      allocate(TT) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), TT > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const zT of this.pages) {
          const oT = zT.ec.allocate(TT);
          if (oT >= 0) return {
            page: zT,
            start: oT,
            length: TT
          }
        }
        const oT = this.pages[this.pages.length - 1];
        if (null !== oT && void 0 !== oT && oT.canGrow) {
          const IT = Math.min(this.ceiling, Math.max(2 * oT.fD, oT.fD + TT));
          if (IT - oT.fD >= TT) return oT.grow(IT), {
            page: oT,
            start: oT.ec.allocate(TT),
            length: TT
          }
        }
        oT && oT !== this.pages[0] && 0 === oT.ec.used && oT.drop();
        const IT = Math.floor(1048576 / this.unitBytes),
          iT = new wX(this, Math.max(TT, Math.min(this.ceiling, IT)));
        return this.pages.push(iT), {
          page: iT,
          start: iT.ec.allocate(TT),
          length: TT
        }
      }
      free(TT) {
        this.assertNotDrawing();
        const {
          page: oT
        } = TT;
        oT.ec.free(TT.start, TT.length), 0 === oT.ec.used && oT !== this.pages[0] && oT !== this.pages[this.pages.length - 1] && oT.drop()
      }
      remove(TT) {
        const oT = this.pages.indexOf(TT);
        oT >= 0 && this.pages.splice(oT, 1)
      }
      ranOutOfMemory(TT, oT) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${oT}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, TT), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, TT) / 2));
        const IT = performance.now();
        IT >= this.shortageUntil && (this.forgetFailedAt = IT + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = IT + 1e3)
      }
      allocatedBuffer(TT) {
        TT >= this.failed && (this.failed = 1 / 0);
        const oT = Math.min(2 * TT, Math.floor((TT + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, oT))
      }
      stats() {
        let TT = 0,
          oT = 0,
          IT = 0,
          iT = 0;
        for (const zT of this.pages) TT += zT.fD, oT += zT.ec.used, IT += zT.hasTwin ? zT.fD * this.twinUnitBytes : 0, iT += zT.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: TT * this.unitBytes,
          usedBytes: oT * this.unitBytes,
          twinBytes: IT,
          allocatedBytes: iT
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: TT,
          maxStorageBufferBindingSize: oT
        } = this.device.limits;
        let IT = Math.floor(Math.min(67108864, TT) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (IT = Math.min(IT, Math.floor(oT / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (IT = Math.min(IT, Math.floor(oT / this.twinUnitBytes))), IT
      }
    }
    const eX = 16383;

    function RX(TT, oT, IT, iT, zT) {
      let kT = 0;
      for (let WT = IT; WT < iT; WT += eX) TT.drawIndexed(6 * Math.min(eX, iT - WT), 1, 0, oT + 4 * WT, zT), kT++;
      return kT
    }
    class uX {
      constructor(TT, oT) {
        this.recordsGroup = oT, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const IT = Ro.f.strideWithoutAtlas;
        this.vertexArena = new mX(TT, IT, GPUBufferUsage.VERTEX, `terrain-vertices-${IT}`), this.quadArena = new mX(TT, MX.c, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const iT = (0, uo.f)(new Uint16Array(98298), eX);
        this.quadPattern = TT.createBuffer({
          label: "terrain-quad-pattern",
          size: iT.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), TT.queue.writeBuffer(this.quadPattern, 0, iT)
      }
      set(TT, oT) {
        const IT = oT.packedVertices,
          iT = IT ? this.quadArena.allocate(TT.faceCount) : this.vertexArena.allocate(TT.vertexCount);
        if (!iT) return !1;
        TT.vertices = iT;
        const zT = IT ? new Uint8Array(IT.buffer, IT.byteOffset, IT.byteLength) : new Uint8Array(oT.vertices);
        return iT.page.write(iT, zT), !0
      }
      setLight(TT, oT) {
        const {
          vertices: IT
        } = TT;
        IT && 0 !== oT.length && IT.page.live && (oT.length < TT.vertexCount ? IT.page.arena.warnOnce("shortLight", `a part's ${oT.length} light values are fewer than its ${TT.vertexCount} vertices, so its light is left as it was`) : (IT.page.writeLight(IT, oT), TT.lit = !0))
      }
      lightFullSky(TT, oT) {
        this.fullSky.length < oT && (this.fullSky = new Uint16Array(Math.max(oT, 4096)).fill(gX.j));
        for (const IT of TT) {
          const TT = IT.vertices;
          TT.page.live && (TT.page.writeLight(TT, this.fullSky), IT.lit = !0)
        }
      }
      backed(TT) {
        const {
          vertices: oT
        } = TT;
        return !!oT && oT.page.holds(oT)
      }
      lost(TT) {
        const {
          vertices: oT
        } = TT;
        return !!oT && oT.page.lost(oT)
      }
      release(TT) {
        TT.vertices && TT.vertices.page.arena.free(TT.vertices), TT.vertices = null, TT.lit = !1
      }
      setDrawing(TT) {
        this.forgetBound()
      }
      draw(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : oT.faceCount;
        const kT = oT.vertices,
          WT = kT.page,
          XT = IT ? WT.twin : null;
        if (!WT.holds(kT) || IT && !XT) return 0;
        const {
          verticesPerUnit: BT
        } = WT.arena;
        let FT = kT.start * BT;
        this.boundPattern || (TT.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const ST = iT + zT;
        if (BT > 1) return WT.buffer === this.boundRecords && XT === this.boundRecordsLight || (TT.setBindGroup(1, this.recordsGroup(WT.buffer, XT)), this.boundRecords = WT.buffer, this.boundRecordsLight = XT), RX(TT, FT, iT, ST, oT.slot);
        WT.buffer !== this.boundVertices && (TT.setVertexBuffer(0, WT.buffer), this.boundVertices = WT.buffer), XT && XT !== this.boundLight && (TT.setVertexBuffer(1, XT), this.boundLight = XT);
        const DT = oT.faceCount;
        return ST <= DT ? RX(TT, FT, iT, ST, oT.slot) : RX(TT, FT, iT, DT, oT.slot) + RX(TT, FT, Math.max(iT, DT) - DT, ST - DT, oT.slot)
      }
      get buffersAwaitingVerdict() {
        let TT = 0;
        for (const oT of this.arenas()) TT += oT.awaitingVerdict;
        return TT
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class vX {
      constructor(TT, oT, IT, iT) {
        this.device = TT, this.splitBefore = oT, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = TT.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const zT = TT.createShaderModule({
          label: "scene-depth-copy",
          code: (kT = IT._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${kT?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var kT;
        TT.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: zT,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: zT,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((TT => {
          this.pipeline = TT, this.building = !1
        }), (TT => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", TT)
        })), IT._executeWithTransmission = () => this.execute(IT, iT)
      }
      get compiling() {
        return this.building
      }
      setWanted(TT) {
        this.wanted = TT
      }
      setPlanes(TT, oT) {
        TT === this.near && oT === this.far || (this.near = TT, this.far = oT, this.unproject[0] = TT / (oT - TT), this.unproject[1] = oT * TT / (oT - TT), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var TT, oT;
        return null !== (TT = null === (oT = this.copy) || void 0 === oT ? void 0 : oT.view) && void 0 !== TT ? TT : null
      }
      execute(TT, oT) {
        var IT;
        null === (IT = this.retired) || void 0 === IT || IT.destroy(), this.retired = null;
        const iT = To(oT),
          zT = TT._transparentBindings,
          kT = this.wanted && this.pipeline ? this.splitIndex(zT) : -1,
          WT = TT._colorAttachment,
          XT = WT.resolveTarget;
        kT >= 0 && (WT.resolveTarget = void 0, VW(TT, !0));
        let BT = iT.beginRenderPass(TT._renderPassDescriptor);
        BT.setBindGroup(0, TT._sceneBG);
        let FT = this.drawList(BT, oT, TT._opaqueBindings, 0, TT._opaqueBindings.length);
        if (FT += this.drawList(BT, oT, TT._directBindings, 0, TT._directBindings.length), FT += this.drawList(BT, oT, zT, 0, kT >= 0 ? kT : zT.length), BT.end(), kT < 0) return FT;
        VW(TT);
        const ST = TT._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: DT,
            stencilLoadOp: LT
          } = ST,
          xT = WT.loadOp;
        WT.resolveTarget = XT;
        try {
          this.copyDepth(iT, TT), WT.loadOp = "load", ST.depthLoadOp = "load", LT && (ST.stencilLoadOp = "load"), BT = iT.beginRenderPass(TT._renderPassDescriptor), BT.setBindGroup(0, TT._sceneBG), FT += this.drawList(BT, oT, zT, kT, zT.length), BT.end()
        } finally {
          WT.loadOp = xT, ST.depthLoadOp = DT, ST.stencilLoadOp = LT
        }
        return FT
      }
      splitIndex(TT) {
        for (let oT = 0; oT < TT.length; oT++)
          if (TT[oT].renderable === this.splitBefore) return oT;
        return -1
      }
      drawList(TT, oT, IT, iT, zT) {
        let kT = null,
          WT = 0;
        for (let XT = iT; XT < zT; XT++) {
          const iT = IT[XT],
            zT = iT.renderable.mesh;
          zT && !1 === zT.visible || (iT.pipeline !== kT && (TT.setPipeline(iT.pipeline), kT = iT.pipeline), WT += iT.draw(TT, oT))
        }
        return WT
      }
      copyDepth(TT, oT) {
        var IT, iT;
        const zT = (null !== (IT = oT._config.depth) && void 0 !== IT ? IT : oT._config.rt)._depthTexture,
          kT = (null === (iT = this.copy) || void 0 === iT ? void 0 : iT.source) === zT ? this.copy : this.remakeCopy(zT),
          WT = TT.beginRenderPass(kT.pass);
        WT.setPipeline(this.pipeline), WT.setBindGroup(0, kT.bindGroup), WT.draw(3), WT.end()
      }
      remakeCopy(TT) {
        var oT, IT;
        this.retired = null !== (oT = null === (IT = this.copy) || void 0 === IT ? void 0 : IT.texture) && void 0 !== oT ? oT : null;
        const iT = this.device.createTexture({
            label: "scene-depth",
            size: [TT.width, TT.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          zT = iT.createView(),
          kT = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: TT.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          WT = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: zT,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: TT,
          texture: iT,
          view: zT,
          bindGroup: kT,
          pass: WT
        }, this.copy
      }
    }
    const EX = "rgba8unorm";

    function fX(TT) {
      return TT ? 15 : 1
    }
    class CX {
      constructor(TT, oT, IT, iT) {
        this.device = TT, this.terrain = iT, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = oT._targetSignature._sampleCount > 1, this.cameraBuffer = TT.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = TT.createBindGroupLayout({
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
        const zT = TT.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = TT.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: zT,
          entries: []
        });
        const kT = TT.createShaderModule({
          label: "sun-shadow-mask",
          code: (WT = this.edge, `${(0,vo.A)()}${qI({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${WT?fI:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${fX(WT)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${WT?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var WT;
        TT.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: TT.createPipelineLayout({
            bindGroupLayouts: [this.layout, zT, zT, lk(TT, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: kT,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: kT,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((TT => {
          this.pipeline = TT, this.building = !1
        }), (TT => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", TT)
        }));
        const XT = oT._executeWithTransmission;
        oT._executeWithTransmission = TT => this.execute(oT, IT, (() => XT ? XT(TT) : function(TT, oT) {
          const IT = To(oT).beginRenderPass(TT._renderPassDescriptor);
          IT.setBindGroup(0, TT._sceneBG);
          let iT = jX(IT, oT, TT._opaqueBindings);
          return iT += jX(IT, oT, TT._directBindings), iT += jX(IT, oT, TT._transparentBindings), IT.end(), iT
        }(oT, IT)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var TT, oT;
        return null !== (TT = null === (oT = this.targets) || void 0 === oT ? void 0 : oT.maskView) && void 0 !== TT ? TT : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(TT) {
        ! function(TT, oT) {
          const IT = TT.worldMatrix,
            iT = TT.projectionMatrix,
            zT = 1 / iT[0],
            kT = 1 / iT[5],
            WT = TT.far * TT.near / (TT.far - TT.near);
          oT[0] = TT.eye[0], oT[1] = TT.eye[1], oT[2] = TT.eye[2], oT[3] = 2 ** -23 / WT, oT[4] = IT[0] * zT, oT[5] = IT[1] * zT, oT[6] = IT[2] * zT, oT[7] = WT, oT[8] = IT[4] * kT, oT[9] = IT[5] * kT, oT[10] = IT[6] * kT, oT[11] = TT.near / (TT.far - TT.near), oT[12] = IT[8], oT[13] = IT[9], oT[14] = IT[10], oT[15] = 0
        }(TT, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(TT, oT, IT) {
        if (this.retire(), !this.terrain.readsMask) return IT();
        const iT = this.targetsFor(TT),
          zT = To(oT),
          kT = TT._renderPassDescriptor.depthStencilAttachment;
        this.edge || (iT.prepass.depthStencilAttachment.view = kT.view);
        const WT = this.terrain.drawPrepass(zT, iT.prepass, TT._sceneBG);
        if (0 === WT) return IT();
        if (this.trace(zT, iT), this.edge) return WT + 1 + IT();
        const {
          depthLoadOp: XT,
          stencilLoadOp: BT
        } = kT;
        kT.depthLoadOp = "load", BT && (kT.stencilLoadOp = "load");
        try {
          return WT + 1 + IT()
        } finally {
          kT.depthLoadOp = XT, kT.stencilLoadOp = BT
        }
      }
      trace(TT, oT) {
        const IT = this.terrain.sunShadowGroup(),
          iT = TT.beginRenderPass(oT.trace);
        this.pipeline && IT && (iT.setPipeline(this.pipeline), iT.setBindGroup(0, oT.bindGroup), iT.setBindGroup(1, this.empty), iT.setBindGroup(2, this.empty), iT.setBindGroup(3, IT), iT.draw(3)), iT.end()
      }
      retire() {
        const TT = this.retired;
        var oT;
        TT && (TT.mask.destroy(), TT.normals.destroy(), null === (oT = TT.depth) || void 0 === oT || oT.destroy(), this.retired = null)
      }
      targetsFor(TT) {
        var oT, IT;
        const iT = (null !== (oT = TT._config.depth) && void 0 !== oT ? oT : TT._config.rt)._depthTexture;
        return (null === (IT = this.targets) || void 0 === IT ? void 0 : IT.source) === iT ? this.targets : this.remake(TT, iT)
      }
      remake(TT, oT) {
        var IT;
        this.retired = this.targets;
        const iT = [oT.width, oT.height],
          zT = this.device.createTexture({
            label: "sun-shadow-mask",
            size: iT,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          kT = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: iT,
            format: EX,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          WT = null !== (IT = TT._targetSignature._depthStencilFormat) && void 0 !== IT ? IT : oT.format,
          XT = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: iT,
            format: WT,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          BT = TT._renderPassDescriptor.depthStencilAttachment,
          FT = WT.includes("stencil"),
          ST = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: kT.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: XT ? XT.createView() : BT.view,
              depthClearValue: BT.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...FT ? {
                stencilClearValue: BT.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          DT = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== XT && void 0 !== XT ? XT : oT).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: kT.createView()
            }]
          }),
          LT = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: zT.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [fX(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: oT,
          mask: zT,
          maskView: zT.createView(),
          normals: kT,
          depth: XT,
          bindGroup: DT,
          prepass: ST,
          trace: LT
        }, this.targets
      }
    }

    function jX(TT, oT, IT) {
      let iT = null,
        zT = 0;
      for (const kT of IT) {
        const IT = kT.renderable.mesh;
        IT && !1 === IT.visible || (kT.pipeline !== iT && (TT.setPipeline(kT.pipeline), iT = kT.pipeline), zT += kT.draw(TT, oT))
      }
      return zT
    }
    const JX = 6e4,
      UX = {
        status: "ok"
      },
      aX = {
        status: "skipped"
      };
    async function YX(TT, oT) {
      const {
        isCancelled: IT
      } = TT;
      if (IT()) return {
        status: "Jo"
      };
      const {
        target: iT
      } = oT;
      if (!iT) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const zT = [],
        kT = Promise.all(Array.from(new Set(TT.materials), (async IT => {
          zT.push(await async function(TT, oT, IT, iT) {
            const zT = {
              lighting: TT.lighting,
              dirLightCount: Math.min(TT.dirLightCount, 4),
              Fc: TT.runtime
            };
            try {
              const kT = oT.material(iT);
              return kT && Di(oT.programKey(kT, !1, zT)) ? (await kT.ready, TT.isCancelled() ? UX : kT.bindGroupLayout ? await async function(TT, oT, IT, iT) {
                const {
                  device: zT
                } = TT;
                let kT, WT;
                zT.pushErrorScope("validation");
                try {
                  kT = TT.pipelineBuild(oT, IT, iT)
                } finally {
                  WT = zT.popErrorScope().catch((() => null))
                }
                const [XT, BT] = await Promise.all([WT, kT.built.then((() => null), (TT => null !== TT && void 0 !== TT ? TT : new Error("pipeline failed")))]);
                if (!XT && !BT) return UX;
                const FT = await QX(kT.module),
                  ST = FT.length > 0 ? FT.map((TT => `${kT.name} ${TT.lineNum}:${TT.linePos}: ${TT.message}`)).join("\n") : `${kT.name}: ${OX(null!==BT&&void 0!==BT?BT:XT)}`;
                return {
                  status: "failed",
                  material: oT.model.name,
                  message: ST
                }
              }(oT, kT, oT.programKey(kT, "none" !== kT.texture, zT), IT): (console.warn(`Shader pack: skipped the compile check for "${iT.name}", whose textures failed to load`), aX)) : UX
            } catch (kT) {
              return {
                status: "failed",
                material: iT.name,
                message: OX(kT)
              }
            }
          }(TT, oT, iT, IT))
        }))),
        WT = function(TT, oT) {
          let IT, iT, zT = !1;
          const kT = new Promise((kT => {
            var WT;
            IT = setTimeout((() => {
              kT("timeout")
            }), null !== (WT = oT.timeoutMs) && void 0 !== WT ? WT : JX), iT = setInterval((() => {
              oT.isCancelled() && kT("Jo")
            }), 50), TT.lost.then((() => {
              zT = !0, kT("lost")
            }))
          }));
          return {
            signal: kT,
            lost: () => zT,
            dispose: () => {
              clearTimeout(IT), clearInterval(iT)
            }
          }
        }(oT.device, TT);
      let XT;
      try {
        XT = await Promise.race([kT.then((() => "done")), WT.signal])
      } finally {
        WT.dispose()
      }
      if ("Jo" === XT || IT()) return {
        status: "Jo"
      };
      const BT = zT.find((TT => "failed" === TT.status));
      return BT && "lost" !== XT && !WT.lost() && await new Promise((TT => {
        setTimeout(TT, 0)
      })), "lost" === XT || WT.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : BT ? {
        status: "failed",
        failure: {
          material: BT.material,
          message: BT.message
        }
      } : "timeout" === XT ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(FT=TT.timeoutMs)&&void 0!==FT?FT:JX)/1e3} s`), {
        status: "skipped"
      }) : zT.some((TT => "skipped" === TT.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var FT
    }
    async function QX(TT) {
      if (!TT) return [];
      try {
        return (await TT.getCompilationInfo()).messages.filter((TT => "error" === TT.type))
      } catch {
        return []
      }
    }

    function OX(TT) {
      var oT;
      return null !== (oT = null === TT || void 0 === TT ? void 0 : TT.message) && void 0 !== oT ? oT : String(TT)
    }

    function HX(TT, oT, IT, iT) {
      Di(TT) ? QX(IT).then((TT => {
        const [IT] = TT;
        Pz("terrain", oT, iT, IT ? `${IT.lineNum}:${IT.linePos} error: ${IT.message}` : null)
      })) : Pz("terrain", oT, iT)
    }
    var nX = IT(36391),
      qX = IT(36404),
      ZX = IT(36409),
      lX = IT(36335);

    function sX(TT, oT, IT, iT, zT) {
      const kT = Math.hypot(IT[0], IT[1], IT[2]);
      if (!(kT > 0)) return;
      const WT = [IT[0] / kT, IT[1] / kT, IT[2] / kT],
        XT = [Math.floor(oT[0]), Math.floor(oT[1]), Math.floor(oT[2])],
        BT = [0, 0, 0],
        FT = [1 / 0, 1 / 0, 1 / 0],
        ST = [1 / 0, 1 / 0, 1 / 0];
      for (let xT = 0; xT < 3; xT++) WT[xT] > 0 ? (BT[xT] = 1, FT[xT] = (XT[xT] + 1 - oT[xT]) / WT[xT], ST[xT] = 1 / WT[xT]) : WT[xT] < 0 && (BT[xT] = -1, FT[xT] = (XT[xT] - oT[xT]) / WT[xT], ST[xT] = -1 / WT[xT]);
      const {
        Yc: DT
      } = TT;
      let LT = TT.wZ(XT[0], XT[1], XT[2]);
      for (;;) {
        const oT = FT[0] < FT[1] ? FT[0] < FT[2] ? 0 : 2 : FT[1] < FT[2] ? 1 : 2;
        if (FT[oT] > iT) return;
        const IT = BT[oT] > 0 ? XT[oT] + 1 : XT[oT];
        XT[oT] += BT[oT], FT[oT] += ST[oT];
        const kT = TT.wZ(XT[0], XT[1], XT[2]),
          WT = kT !== LT && !(TT.opaque[LT] && TT.opaque[kT]);
        if (WT) {
          const iT = [XT[0], XT[1], XT[2]];
          iT[oT] = IT;
          const kT = Math.floor(iT[0] / DT),
            WT = Math.floor(iT[1] / DT),
            BT = Math.floor(iT[2] / DT);
          !TT.isDrawn(kT, WT, BT) && TT.hasParts(kT, WT, BT) && zT.add(`${kT},${WT},${BT}`)
        }
        if (WT && TT.occluders[kT]) return;
        LT = kT
      }
    }

    function tX(TT, oT) {
      return TT.group - oT.group || TT.nearest - oT.nearest
    }
    class GX {
      constructor(TT, oT) {
        this.device = TT, this.Tm = oT, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var TT;
        const oT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.next++;
        if (8 * oT >= this.data.length) {
          const TT = new Float32Array(2 * this.data.length);
          TT.set(this.data), this.data = TT, this.words = new Uint32Array(TT.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Tm()
        }
        return oT
      }
      release(TT) {
        this.free.push(TT)
      }
      set(TT, oT, IT, iT, zT) {
        const kT = 8 * TT + mi;
        this.data[kT] = oT, this.data[kT + 1] = IT, this.data[kT + 2] = iT, this.setVisibility(TT, zT)
      }
      setVisibility(TT, oT) {
        this.data[8 * TT + ei] = oT, this.markDirty(TT, TT)
      }
      setFaces(TT, oT, IT) {
        const iT = 8 * TT;
        this.words[iT + Ri] = oT, this.words[iT + ui] = IT, this.markDirty(TT, TT)
      }
      markDirty(TT, oT) {
        this.dirtyMin = Math.min(this.dirtyMin, TT), this.dirtyMax = Math.max(this.dirtyMax, oT)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const pX = wi,
      bX = !0;
    const yX = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: pX.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      NX = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class PX {
      constructor(TT) {
        this.device = TT, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(xi), this.dirLightUniforms = this.frameUniforms.subarray(Li.dirLights, Li.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Fo.c)(), this.faceGroups = !0, this.visibilityGraph = bX, this.visCull = bX, this.visCheck = !1, this.visCullMinDistance = ZX.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new oB, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Fc = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new uX(TT, ((TT, oT) => this.recordsGroup(TT, oT))), this.slots = new GX(TT, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = oo(TT), this.frameLayout = TT.createBindGroupLayout({
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
        }), this.frameBuffer = TT.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = TT.createSampler({
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
          bind: (TT, oT) => this.createBinding(this.opaqueRenderable, oT, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (TT, oT) => this.createBinding(this.transparentRenderable, oT, !0)
        }
      }
      installSceneDepth(TT, oT) {
        this.sceneDepth = new vX(this.device, this.transparentRenderable, TT, oT)
      }
      createFrameBindGroup() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== TT && void 0 !== TT ? TT : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== oT && void 0 !== oT ? oT : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(TT, oT) {
        const IT = null !== oT && void 0 !== oT ? oT : TT;
        let iT = this.recordsGroups.get(IT);
        return iT || (iT = this.createFrameBindGroup(TT, oT), this.recordsGroups.set(IT, iT)), iT
      }
      setChunkMesh(TT, oT, IT) {
        var iT;
        let zT = this.chunks.get(TT);
        zT ? this.geometry.release(zT) : (zT = {
          mesh: TT,
          slot: this.slots.allocate(),
          origin: [IT[0], IT[1], IT[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: TT.visibility,
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
        }, this.chunks.set(TT, zT), this.writeSlot(zT)), zT.material = TT.material ? this.materialFor(TT.material) : null, zT.packed = !!oT.packedVertices, zT.vertexCount = (0, MX.g)(oT), zT.faceCount = zT.vertexCount / 4;
        const kT = null !== (iT = oT.faceGroups) && void 0 !== iT ? iT : null;
        if (zT.faceGroups = kT, kT) {
          const TT = nX.g;
          zT.planePX = kT[TT], zT.planeNX = kT[TT + 1], zT.planePY = kT[TT + 2], zT.planeNY = kT[TT + 3], zT.planePZ = kT[TT + 4], zT.planeNZ = kT[TT + 5]
        }
        this.drawWhole(zT), 0 !== zT.faceCount && (this.geometry.set(zT, oT) ? (zT.packed && this.slots.setFaces(zT.slot, zT.vertices.start + zT.faceCount, zT.faceCount), oT.gc && this.setChunkMeshLight(TT, oT.gc)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${zT.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(TT, oT) {
        const IT = this.chunks.get(TT);
        IT && this.geometry.setLight(IT, oT)
      }
      drawStats() {
        let TT = this.transparent.length;
        for (const oT of this.opaqueBatches) TT += oT.meshes.length;
        return {
          drawn: TT,
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
      removeChunkMesh(TT) {
        const oT = this.chunks.get(TT);
        oT && (this.geometry.release(oT), this.slots.release(oT.slot), this.chunks.delete(TT))
      }
      remeshLost(TT, oT) {
        this.geometry.release(oT), oT.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** oT.lostRemeshes++);
        const IT = TT.iL,
          [iT, zT, kT] = IT.qiT(oT.origin[0], oT.origin[1], oT.origin[2]),
          WT = IT.vK.EK(iT, zT, kT);
        WT && (WT.RK = !0, WT.UK = !0, IT.uK(WT, !1))
      }
      chooseFaceRanges(TT, oT, IT) {
        const iT = this.faceRanges;
        TT.faceMask = IT, TT.rangeCount = (0, qX.n)(oT, IT, iT), TT.first0 = iT[0], TT.count0 = iT[1], TT.first1 = iT[2], TT.count1 = iT[3]
      }
      drawWhole(TT) {
        TT.faceMask = -1, TT.faceEpoch = -1, TT.rangeCount = 1, TT.first0 = 0, TT.count0 = TT.faceCount
      }
      writeSlot(TT) {
        const [oT, IT, iT] = this.originOffset;
        this.slots.set(TT.slot, TT.origin[0] - oT, TT.origin[1] - IT, TT.origin[2] - iT, TT.visibility)
      }
      materialFor(TT) {
        const oT = this.materials.get(TT);
        if (oT) return oT;
        const IT = AX(TT);
        if (!IT) return this.warnOnce(`material:${TT.name}`, `Lite terrain cannot draw material "${TT.name}"; its chunks are skipped.`), null;
        const {
          model: iT,
          atlas: zT,
          texture: kT,
          animated: WT,
          uniformData: XT
        } = IT, BT = {
          id: this.materials.size,
          model: iT,
          texture: kT,
          animated: WT,
          uniformData: XT,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${TT.name}`,
            size: XT.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: IT.liquid,
          customRenderMat: IT.customRenderMat,
          atlasCount: 0,
          xV: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(TT, BT), this.device.queue.writeBuffer(BT.uniformBuffer, 0, XT), BT.ready = this.createMaterialBindGroup(BT, zT).catch((oT => {
          console.error(`Lite terrain failed to load the textures of material "${TT.name}"`, oT)
        })), BT
      }
      materialLayout(TT) {
        const oT = function(TT) {
            const oT = ["uniforms"];
            if ("atlas" === TT.texture) {
              TT.animated && oT.push("animData"), oT.push("sampler");
              for (let IT = 0; IT < TT.atlasCount; IT++) oT.push("textureArray")
            } else "single" === TT.texture && oT.push("sampler", "texture");
            return oT
          }(TT),
          IT = oT.join(",");
        let iT = this.materialLayouts.get(IT);
        if (!iT) {
          const TT = GPUShaderStage.FRAGMENT;
          iT = this.device.createBindGroupLayout({
            label: `terrain-material-${IT}`,
            entries: oT.map(((oT, IT) => {
              switch (oT) {
                case "uniforms":
                  return {
                    binding: IT, visibility: GPUShaderStage.VERTEX | TT, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: IT, visibility: GPUShaderStage.VERTEX | TT, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: IT, visibility: TT, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: IT, visibility: TT, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: IT, visibility: TT, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(IT, iT)
        }
        return iT
      }
      async createMaterialBindGroup(TT, oT) {
        const IT = [{
          buffer: TT.uniformBuffer
        }];
        if (oT) {
          const {
            urls: iT,
            pixels: zT,
            layerWidth: kT
          } = oT.sources, WT = await Promise.all(iT.map(((TT, oT) => {
            var IT;
            return sz(this.device, TT, null !== (IT = null === zT || void 0 === zT ? void 0 : zT[oT]) && void 0 !== IT ? IT : null, kT)
          })));
          TT.atlasCount = WT.length, TT.xV = WT[0].layerWidth, TT.atlasLayers = WT[0].layers, oT.animDataPerTex && IT.push({
            buffer: Yz(this.device, Float32Array.from(oT.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), IT.push(this.sampler);
          for (const TT of WT) IT.push(TT.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === TT.texture) {
          const {
            url: oT
          } = TT.model.diffuseTexture.source, {
            pixels: iT,
            width: zT,
            height: kT
          } = await Zz(oT);
          IT.push(this.sampler), IT.push(Oz(this.device, iT, zT, kT, 1, `terrain-${oT}`).createView({
            dimension: "2d"
          }))
        }
        const iT = this.materialLayout(this.programKey(TT, !1));
        TT.bindGroupLayout = iT, TT.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${TT.model.name}`,
          layout: iT,
          entries: IT.map(((TT, oT) => ({
            binding: oT,
            resource: TT
          })))
        })
      }
      programKey(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const iT = IT ? IT.lighting : this.lighting,
          zT = IT ? IT.Fc : this.Fc,
          kT = {
            texture: TT.texture,
            atlasCount: TT.atlasCount,
            xV: TT.xV,
            atlasLayers: TT.atlasLayers,
            animated: TT.animated,
            alphaTest: TT.model.transparencyMode === uT.p.alphaTest,
            lighting: iT,
            dirLightCount: IT ? IT.dirLightCount : this.dirLightCount,
            packed: oT
          };
        if (!zT) return kT;
        const WT = this.shaderPackFields(TT, zT),
          XT = "atlas" === TT.texture && TT.model.transparencyMode === uT.p.opaque && Xi(WT.packVariant);
        return {
          ...kT,
          ...WT,
          alphaTest: kT.alphaTest || XT
        }
      }
      shaderPackFields(TT, oT) {
        return TT.customRenderMat ? ki : function(TT, oT) {
          if (!TT) return ki;
          const IT = TT.defineFor(oT ? "liquid" : "terrain");
          return 0 === IT ? ki : {
            packVariant: IT,
            liquid: oT
          }
        }(oT, TT.liquid)
      }
      isBlended(TT) {
        return TT.model.transparencyMode === uT.p.alphaBlend
      }
      shaderModule(TT, oT) {
        let IT = this.modules.get(TT);
        return IT || (IT = this.device.createShaderModule({
          label: oT,
          code: TT
        }), this.modules.set(TT, IT)), IT
      }
      pipelineFor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!TT.bindGroupLayout) return null;
        const zT = this.programKey(TT, oT);
        if (!iT) return this.pipelineOf(TT, zT, IT);
        const kT = {
            ...zT,
            resting: iT
          },
          WT = this.pipelineId(TT, kT, IT),
          XT = this.pipelines.get(WT);
        if (XT) return XT;
        const BT = this.pipelineOf(TT, zT, IT);
        return BT && void 0 === XT && this.startPipeline(WT, TT, kT, IT), BT
      }
      pipelineOf(TT, oT, IT) {
        const iT = this.pipelineId(TT, oT, IT),
          zT = this.pipelines.get(iT);
        return void 0 !== zT ? zT : (this.startPipeline(iT, TT, oT, IT), null)
      }
      pipelineId(TT, oT, IT) {
        return dX(oT, this.isBlended(TT), TT.model.backFaceCulling, IT)
      }
      pipelineBuild(TT, oT, IT) {
        var iT;
        const zT = this.pipelineId(TT, oT, IT);
        return null !== (iT = this.builds.get(zT)) && void 0 !== iT ? iT : this.startPipeline(zT, TT, oT, IT)
      }
      startPipeline(TT, oT, IT, iT) {
        var zT;
        this.pipelines.set(TT, null);
        const kT = Ji(IT),
          WT = this.isBlended(oT),
          XT = this.shadowMask && iT._depthStencilFormat ? function(TT, oT, IT, iT) {
            if (void 0 === TT.packVariant || TT.liquid || oT) return "none";
            const zT = (0, Eo.f)(TT.packVariant);
            return null === zT || void 0 === zT || !zT.sunShadow || !HI(zT, IT) || zT.discards || TT.alphaTest && Xi(TT.packVariant) ? "none" : iT ? "edge" : "plain"
          }(IT, WT, !!this.sunShadow, iT._sampleCount > 1) : "none";
        let BT;
        try {
          BT = Ui(IT, !!this.sunShadow, XT)
        } catch (MT) {
          if (!Di(IT)) throw MT;
          return this.failedPackBuild(TT, IT, kT, MT)
        }
        const FT = this.shaderModule(BT, kT),
          ST = [];
        IT.packed || (ST.push(function(TT, oT) {
          const IT = [{
            shaderLocation: pX.position,
            offset: Ro.f.fz,
            format: "float32x3"
          }, {
            shaderLocation: pX.normal,
            offset: Ro.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: pX.color,
            offset: Ro.f.colorOffset,
            format: "unorm8x4"
          }];
          return TT && IT.push({
            shaderLocation: pX.uv,
            offset: Ro.f.uvOffset,
            format: "float32x2"
          }), oT && IT.push({
            shaderLocation: pX.blockFlagWords,
            offset: Ro.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Ro.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: IT
          }
        }("none" !== IT.texture, Di(IT))), IT.lighting && ST.push(yX));
        const DT = oT.model.backFaceCulling,
          LT = {
            label: kT,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, oT.bindGroupLayout, ...Gk(this.device, IT, !!this.sunShadow, "none" !== XT)]
            }),
            vertex: {
              module: FT,
              entryPoint: "mainVertex",
              buffers: ST
            },
            fragment: PT({
              module: FT,
              entryPoint: "mainFragment"
            }, iT, WT ? NX : null),
            depthStencil: iT._depthStencilFormat ? {
              format: iT._depthStencilFormat,
              depthCompare: null !== (zT = iT._depthCompare) && void 0 !== zT ? zT : Io,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: iT._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: DT ? "back" : "none"
            }
          },
          xT = IT.resting ? 0 : 1;
        this.compiling += xT;
        const cT = "none" === XT ? this.device.createRenderPipelineAsync(LT) : this.startMaskPipelines(FT, LT, "edge" === XT);
        cT.then((oT => {
          this.compiling -= xT, this.pipelines.set(TT, oT)
        }), (TT => {
          this.compiling -= xT, console.error(`Lite terrain pipeline ${kT} failed`, TT), HX(IT, kT, FT, TT)
        }));
        const KT = {
          name: kT,
          module: FT,
          built: cT
        };
        return this.builds.set(TT, KT), KT
      }
      startMaskPipelines(TT, oT, IT) {
        const iT = oT.depthStencil,
          zT = this.device.createRenderPipelineAsync(IT ? oT : {
            ...oT,
            depthStencil: {
              ...iT,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          kT = this.device.createRenderPipelineAsync({
            ...oT,
            label: `${oT.label}-prepass`,
            fragment: {
              module: TT,
              entryPoint: "prepassFragment",
              targets: [{
                format: EX
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([zT, kT]).then((TT => {
          let [oT, IT] = TT;
          return this.prepassOf.set(oT, IT), this.maskPipelines++, oT
        }))
      }
      failedPackBuild(TT, oT, IT, iT) {
        console.error(`Lite terrain pipeline ${IT} failed`, iT), HX(oT, IT, null, iT);
        const zT = Promise.reject(iT);
        zT.catch((() => {}));
        const kT = {
          name: IT,
          module: null,
          built: zT
        };
        return this.builds.set(TT, kT), kT
      }
      checkShaderPack(TT) {
        return YX(TT, {
          device: this.device,
          target: this.target,
          material: TT => this.materialFor(TT),
          programKey: (TT, oT, IT) => this.programKey(TT, oT, IT),
          pipelineBuild: (TT, oT, IT) => this.pipelineBuild(TT, oT, IT)
        })
      }
      createBinding(TT, oT, IT) {
        return this.target = oT, {
          renderable: TT,
          pipeline: Wo(this.device, oT),
          draw: TT => {
            this.geometry.setDrawing(!0);
            try {
              return IT ? this.drawTransparent(TT, oT) : this.drawOpaque(TT, oT)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(TT, oT) {
        var IT, iT, zT, kT;
        const {
          FL: WT
        } = TT;
        this.lighting = TT.tK;
        const XT = (0, KX.s)(oT);
        this.dirLightCount = Math.min(XT, 4), this.Fc = null !== (IT = WT.Fc) && void 0 !== IT ? IT : null, XT > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(TT, oT), this.animateMaterials(oT.animTick);
        const BT = WT.uL,
          FT = BT[0] !== this.originOffset[0] || BT[1] !== this.originOffset[1] || BT[2] !== this.originOffset[2];
        FT && (this.originOffset[0] = BT[0], this.originOffset[1] = BT[1], this.originOffset[2] = BT[2]);
        const ST = oT.eye;
        this.eye[0] = ST[0], this.eye[1] = ST[1], this.eye[2] = ST[2], this.writeShaderPackInputs();
        const DT = oT.projectionMatrix,
          LT = 0 === DT[15];
        let xT = 0;
        (FT || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: cT
        } = this;
        Xo(this.transparentRenderable._worldCenter, oT, zo), this.resetBatches(LT), this.transparent.length = 0, this.unlit.length = 0;
        const KT = WT.iL.A4,
          MT = KT / 2 * Math.sqrt(3);
        let rT = 0;
        const AT = !!this.Fc && Wi(this.Fc.defineFor("liquid"));
        let gT = !1;
        const hT = null !== (iT = null === (zT = WT.jR) || void 0 === zT ? void 0 : zT.visibility) && void 0 !== iT ? iT : null,
          wT = this.visCull && LT && 0 === this.compiling && null !== hT && WT.iL.dIT[0] >= this.visCullMinDistance ? this.target : null,
          mT = this.visPassable,
          eT = this.visCandidates,
          RT = this.visCandidateBatches;
        mT.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let uT = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let vT = 0;
        const ET = (TT, IT) => {
          if (!IT) return this.transparent.push(TT), void(vT += 2 * TT.faceCount);
          if (null !== TT.faceGroups && IT.faceCull) {
            if (0 === xT && (xT = (0, qX.d)(DT, oT.renderWidth, oT.renderHeight), xT !== this.faceFocalPx && (this.faceFocalPx = xT, cT = ++this.faceEpoch)), TT.faceEpoch !== cT) {
              TT.faceEpoch = cT;
              const oT = Math.sqrt(TT.distance) + MT,
                IT = (0, qX.i)(TT.planePX, TT.planeNX, TT.planePY, TT.planeNY, TT.planePZ, TT.planeNZ, this.eye[0] - (TT.origin[0] - this.originOffset[0]), this.eye[1] - (TT.origin[1] - this.originOffset[1]), this.eye[2] - (TT.origin[2] - this.originOffset[2]), (0, qX.e)(oT, xT));
              IT !== TT.faceMask && this.chooseFaceRanges(TT, TT.faceGroups, IT)
            }
            if (0 === TT.rangeCount) return
          } else - 1 !== TT.faceMask && this.drawWhole(TT);
          IT.meshes.push(TT), vT += 2 * ((TT.rangeCount > 0 ? TT.count0 : 0) + (TT.rangeCount > 1 ? TT.count1 : 0))
        };
        for (const CT of this.chunks.values()) {
          FT && this.writeSlot(CT);
          const TT = CT.mesh.visibility;
          TT !== CT.visibility && (CT.visibility = TT, this.slots.setVisibility(CT.slot, TT));
          const {
            material: IT
          } = CT;
          this.geometry.lost(CT) && performance.now() >= CT.lostRetryAt && this.remeshLost(WT, CT);
          const iT = !(null === IT || void 0 === IT || !IT.bindGroup) && this.geometry.backed(CT),
            zT = iT && this.lighting && !CT.vertices.page.twin;
          if (wT && (Number.isNaN(CT.key) && (CT.ci = Math.floor(CT.origin[0] / KT), CT.cj = Math.floor(CT.origin[1] / KT), CT.ck = Math.floor(CT.origin[2] / KT), CT.key = (0, lX.k)(CT.ci, CT.cj, CT.ck)), (!iT || TT < 1 || zT || !this.batchDraws(IT, CT.packed, wT)) && this.visSeeThrough(CT, wT) && mT.add(CT.key)), !iT) continue;
          zT || (CT.lostRemeshes = 0);
          const kT = CT.origin[0] - this.originOffset[0],
            XT = CT.origin[1] - this.originOffset[1],
            BT = CT.origin[2] - this.originOffset[2];
          if (!(0, iX.c)(oT.frustum, kT, XT, BT, KT)) continue;
          const ST = kT + KT / 2 - this.eye[0],
            DT = XT + KT / 2 - this.eye[1],
            xT = BT + KT / 2 - this.eye[2];
          if (CT.distance = ST * ST + DT * DT + xT * xT, this.lighting && !CT.lit && (rT = Math.max(rT, CT.vertexCount), this.unlit.push(CT)), zT) continue;
          const cT = this.isBlended(IT) ? null : this.batchFor(IT, CT.packed, CT.vertices.page, 1 === TT, LT);
          wT ? (eT[uT] = CT, RT[uT++] = cT) : ET(CT, cT)
        }
        const fT = wT ? this.sweepVisibility(TT, oT, hT) : null;
        null === (kT = (0, ak.A)(WT)) || void 0 === kT || kT.update(oT.frustum, this.originOffset, KT, fT);
        for (let CT = 0; CT < uT; CT++) {
          const TT = eT[CT];
          !fT || fT.isDrawn(TT.ci, TT.cj, TT.ck) ? ET(TT, RT[CT]) : (this.visCulledParts++, this.visCulledTriangles += 2 * TT.faceCount)
        }
        for (const CT of this.transparent) gT ||= AT && CT.material.liquid && !CT.material.customRenderMat;
        this.submittedTriangles = vT, fT && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(TT, oT, fT)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(gT) : gT && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && rT > 0 && this.geometry.lightFullSky(this.unlit, rT);
        for (const CT of this.opaqueBatches) this.chunkSorter.sort(CT.meshes, 1) || CT.meshes.sort(VX);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(TB)
      }
      sweepVisibility(TT, oT, IT) {
        const {
          iL: iT
        } = TT.FL, zT = iT.A4, kT = this.visPassable, WT = this.eye[0] + this.originOffset[0], XT = this.eye[1] + this.originOffset[1], BT = this.eye[2] + this.originOffset[2];
        if (!IT.eyeClear(WT, XT, BT, oT.near, oT.projectionMatrix, iT)) return null;
        const [FT, ST] = iT.dIT, DT = IT.update(WT, XT, BT, zT, FT, ST, kT);
        return this.visSweeps = IT.sweeps, DT ? IT : null
      }
      visSeeThrough(TT, oT) {
        const {
          material: IT
        } = TT;
        return (!IT || !this.isBlended(IT)) && (TT.mesh.visibility < 1 || !(null !== IT && void 0 !== IT && IT.bindGroup) || TT.faceCount > 0 && (!this.geometry.backed(TT) || this.lighting && !TT.vertices.page.twin) || !this.batchDraws(IT, TT.packed, oT))
      }
      batchDraws(TT, oT, IT) {
        var iT;
        const zT = oT ? 2 : 0;
        if (TT === this.visDrawsMaterial && function(TT, oT) {
            return 0 !== (TT & 1 << oT)
          }(this.visDrawsBits, zT)) return 0 !== (this.visDrawsBits & 2 << zT);
        let kT = null !== (iT = this.visBatchDraws.get(TT)) && void 0 !== iT ? iT : 0;
        if (!(kT & 1 << zT)) {
          kT |= 1 << zT | (!!TT.bindGroupLayout && this.canDraw(TT, oT) && !!this.pipelines.get(this.pipelineId(TT, this.programKey(TT, oT), IT)) ? 2 << zT : 0), this.visBatchDraws.set(TT, kT)
        }
        return this.visDrawsMaterial = TT, this.visDrawsBits = kT, 0 !== (kT & 2 << zT)
      }
      runVisCheck(TT, oT, IT) {
        const {
          FL: iT
        } = TT, {
          iL: zT
        } = iT, kT = zT.A4, WT = new Set;
        for (const xT of this.chunks.values()) WT.add(xT.key);
        const XT = ez.Matrix.FromArray(oT.viewProjectionMatrix).invert(),
          [BT, FT, ST] = this.originOffset,
          DT = new ez.sc,
          LT = function(TT, oT, IT, iT) {
            const zT = new Set;
            for (let kT = 0; kT < 27; kT++)
              for (let WT = 0; WT < 48; WT++) {
                const XT = IT((WT + .5) / 48 * 2 - 1, (kT + .5) / 27 * 2 - 1);
                sX(TT, oT, [XT[0] - oT[0], XT[1] - oT[1], XT[2] - oT[2]], iT, zT)
              }
            return zT
          }({
            wZ: (TT, oT, IT) => zT.wZ(TT, oT, IT),
            occluders: IT.occluders,
            opaque: IT.opaque,
            Yc: kT,
            isDrawn: (TT, oT, iT) => IT.isDrawn(TT, oT, iT),
            hasParts: (TT, oT, IT) => WT.has((0, lX.k)(TT, oT, IT))
          }, [this.eye[0] + BT, this.eye[1] + FT, this.eye[2] + ST], ((TT, oT) => (ez.sc.TransformCoordinatesFromFloatsToRef(TT, oT, .5, XT, DT), [DT.x + BT, DT.y + FT, DT.z + ST])), (zT.dIT[0] + 1) * kT);
        this.visViolations = LT.size;
        for (const xT of LT) this.warnOnce(`vis:${xT}`, `Lite terrain cave culling skipped chunk ${xT}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var TT;
        null !== (TT = this.Fc) && void 0 !== TT && TT.isRunning() && (this.shaderPackInputs ??= new pk(this.device, this.Fc.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Fc, this.eye, this.lighting))
      }
      bindShaderPackInputs(TT, oT, IT) {
        var iT, zT, kT, WT;
        let XT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: BT
        } = this.shaderPackFields(oT, IT);
        if (void 0 === BT) return;
        this.shaderPackInputs || (this.shaderPackInputs = new pk(this.device, IT.textureLayers(), this.sunShadow), this.shaderPackInputs.write(IT, this.eye, this.lighting));
        const FT = Wi(BT) ? null !== (iT = null === (zT = this.sceneDepth) || void 0 === zT ? void 0 : zT.view) && void 0 !== iT ? iT : this.standIn() : null,
          ST = XT ? null !== (kT = null === (WT = this.shadowMask) || void 0 === WT ? void 0 : WT.view) && void 0 !== kT ? kT : this.standIn() : null;
        this.shaderPackInputs.bind(TT, FT, tk(BT, !!this.sunShadow), ST)
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
        var TT, oT;
        return null !== (TT = null === (oT = this.shaderPackInputs) || void 0 === oT ? void 0 : oT.bindGroupFor(null, !0)) && void 0 !== TT ? TT : null
      }
      resetBatches(TT) {
        const oT = this.opaqueBatches;
        let IT = 0;
        for (const iT of oT) iT.meshes.length > 0 && (iT.meshes.length = 0, iT.faceCull = this.batchFaceCull(iT.material, TT), oT[IT++] = iT);
        oT.length = IT
      }
      orderBatches() {
        const TT = this.opaqueBatches;
        for (let oT = 0; oT < TT.length; oT++) {
          const IT = TT[oT];
          IT.group = oT;
          for (let iT = 0; iT < oT; iT++) {
            const oT = TT[iT];
            if (oT.material === IT.material && oT.packed === IT.packed) {
              IT.group = oT.group;
              break
            }
          }
          IT.nearest = IT.meshes.length > 0 ? IT.meshes[0].distance : 1 / 0
        }
        TT.sort(tX)
      }
      batchFor(TT, oT, IT, iT, zT) {
        for (const WT of this.opaqueBatches)
          if (WT.material === TT && WT.packed === oT && WT.page === IT && WT.resting === iT) return WT;
        const kT = {
          material: TT,
          packed: oT,
          page: IT,
          resting: iT,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(TT, zT)
        };
        return this.opaqueBatches.push(kT), kT
      }
      batchFaceCull(TT, oT) {
        return !(!oT || !(0, nX.k)(TT.model)) && (!this.Fc || ! function(TT) {
          var oT;
          return !(null === (oT = (0, Eo.f)(TT)) || void 0 === oT || !oT.movesVertices)
        }(this.shaderPackFields(TT, this.Fc).packVariant))
      }
      writeFrameUniforms(TT, oT) {
        const IT = this.frameUniforms,
          iT = Li;
        if ((0, KX.v)(TT, IT), IT[iT.fogInfos] = oT.fogEnabled ? oT.fogMode : 0, IT[iT.fogInfos + 1] = oT.fogStart, IT[iT.fogInfos + 2] = oT.fogEnd, IT[iT.fogInfos + 3] = oT.fogDensity, IT.set(oT.fogColour, iT.fogColour), IT[iT.outputHeight] = oT.renderHeight, IT.set(oT.ambientColour, iT.sceneAmbient), (0, KX.r)(oT, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const oT = (0, MX.j)(TT.DK, TT.Hc, TT.nc);
          for (let TT = 0; TT < 4; TT++) IT[iT.aoLevels + TT] = oT[TT] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, IT)
      }
      animateMaterials(TT) {
        const oT = ci.anim;
        for (const IT of this.materials.values()) IT.animated && (IT.uniformData[oT] = TT, this.device.queue.writeBuffer(IT.uniformBuffer, 4 * oT, IT.uniformData, oT, 1))
      }
      canDraw(TT, oT) {
        return !("atlas" === TT.texture && !oT) || (this.warnOnce(`stride:${TT.id}`, `Lite terrain: material "${TT.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(TT, oT) {
        let IT = 0;
        TT.setBindGroup(1, this.frameBindGroup);
        for (const iT of this.opaqueBatches) {
          if (!iT.meshes.length || !this.canDraw(iT.material, iT.packed)) continue;
          const zT = this.pipelineFor(iT.material, iT.packed, oT, iT.resting);
          zT && (TT.setPipeline(zT), TT.setBindGroup(2, iT.material.bindGroup), this.Fc && this.bindShaderPackInputs(TT, iT.material, this.Fc, this.prepassOf.has(zT)), IT += this.drawBatch(TT, iT))
        }
        return IT
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(TT, oT, IT) {
        const iT = this.target,
          zT = this.Fc;
        if (!iT || !zT || 0 === this.maskPipelines) return 0;
        let kT = 0,
          WT = null;
        this.geometry.setDrawing(!0);
        try {
          for (const XT of this.opaqueBatches) {
            if (!XT.meshes.length || !this.canDraw(XT.material, XT.packed)) continue;
            const BT = this.pipelineFor(XT.material, XT.packed, iT, XT.resting),
              FT = BT && this.prepassOf.get(BT);
            FT && (WT || (WT = TT.beginRenderPass(oT), WT.setBindGroup(0, IT), WT.setBindGroup(1, this.frameBindGroup)), WT.setPipeline(FT), WT.setBindGroup(2, XT.material.bindGroup), this.bindShaderPackInputs(WT, XT.material, zT, !0), kT += this.drawBatch(WT, XT))
          }
        } finally {
          var XT;
          null === (XT = WT) || void 0 === XT || XT.end(), this.geometry.setDrawing(!1)
        }
        return kT
      }
      drawBatch(TT, oT) {
        let IT = 0;
        for (const iT of oT.meshes) {
          const {
            rangeCount: oT
          } = iT;
          oT > 0 && (IT += this.geometry.draw(TT, iT, this.lighting, iT.first0, iT.count0), oT > 1 && (IT += this.geometry.draw(TT, iT, this.lighting, iT.first1, iT.count1)))
        }
        return IT
      }
      drawTransparent(TT, oT) {
        let IT = 0,
          iT = null,
          zT = null;
        TT.setBindGroup(1, this.frameBindGroup);
        for (const kT of this.transparent) {
          const WT = kT.material;
          if (!this.canDraw(WT, kT.packed)) continue;
          const XT = this.pipelineFor(WT, kT.packed, oT);
          XT && (XT !== iT && (TT.setPipeline(XT), iT = XT, this.Fc && this.bindShaderPackInputs(TT, WT, this.Fc)), WT !== zT && (TT.setBindGroup(2, WT.bindGroup), zT = WT), IT += this.geometry.draw(TT, kT, this.lighting))
        }
        return IT
      }
    }

    function dX(TT, oT, IT, iT) {
      return `${Ji(TT)}|${TT.atlasLayers}|${TT.xV}|${oT}|${IT}|${iT._colorFormat}|${iT._depthStencilFormat}|${iT._sampleCount}`
    }

    function VX(TT, oT) {
      return TT.distance - oT.distance
    }

    function TB(TT, oT) {
      return oT.distance - TT.distance
    }
    class oB {
      constructor() {
        this.left = []
      }
      sort(TT, oT) {
        for (let IT = 0; IT < TT.length; IT++) {
          const oT = TT[IT].distance;
          if (oT - oT !== 0) return !1
        }
        return this.sortRange(TT, 0, TT.length, oT), !0
      }
      sortRange(TT, oT, IT, iT) {
        if (IT - oT <= 16) {
          for (let zT = oT + 1; zT < IT; zT++) {
            const IT = TT[zT],
              kT = iT * IT.distance;
            let WT = zT - 1;
            for (; WT >= oT && iT * TT[WT].distance > kT; WT--) TT[WT + 1] = TT[WT];
            TT[WT + 1] = IT
          }
          return
        }
        const zT = oT + IT >>> 1;
        if (this.sortRange(TT, oT, zT, iT), this.sortRange(TT, zT, IT, iT), iT * TT[zT - 1].distance <= iT * TT[zT].distance) return;
        const {
          left: kT
        } = this, WT = zT - oT;
        for (let ST = 0; ST < WT; ST++) kT[ST] = TT[oT + ST];
        let XT = 0,
          BT = zT,
          FT = oT;
        for (; XT < WT && BT < IT;) TT[FT++] = iT * TT[BT].distance < iT * kT[XT].distance ? TT[BT++] : kT[XT++];
        for (; XT < WT;) TT[FT++] = kT[XT++]
      }
    }
    const IB = Math.ceil(102);

    function iB(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : oT;
      const kT = Math.min(oT, IT),
        WT = new Uint32Array(II(iT));
      for (let XT = 0; XT < iT; XT++) {
        const oT = Math.floor(XT * kT / iT),
          IT = Math.max(oT + 1, Math.floor((XT + 1) * kT / iT));
        for (let BT = 0; BT < iT; BT++) {
          const FT = Math.floor(BT * kT / iT),
            ST = Math.max(FT + 1, Math.floor((BT + 1) * kT / iT));
          let DT = 0;
          for (let iT = oT; iT < IT; iT++)
            for (let oT = FT; oT < ST; oT++) TT[iT * zT + oT] >= IB && DT++;
          if (2 * DT >= (IT - oT) * (ST - FT)) {
            const TT = BT + iT * XT;
            WT[TT >>> 5] |= 1 << (31 & TT)
          }
        }
      }
      return WT
    }

    function zB(TT) {
      return Math.max(1, Math.min(16, TT))
    }
    class kB {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = TT, this.loadTexture = oT, this.warn = IT, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(TT, oT) {
        return (TT.bY !== this.builtVersion || this.blockCaster.length !== oT) && (this.build(TT, oT), !0)
      }
      build(TT, oT) {
        this.builtVersion = TT.bY;
        const IT = new Uint16Array(oT),
          iT = new Map;
        for (let zT = 1; zT < oT; zT++) {
          const oT = this.classify(TT, zT, iT);
          if (null === oT || oT === No) {
            IT[zT] = null === oT ? 0 : No;
            continue
          }
          let kT = this.byKey.get(oT.key);
          void 0 === kT && (kT = this.allocate(oT), this.byKey.set(oT.key, kT)), IT[zT] = kT
        }
        this.blockCaster = IT, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(TT, oT) {
        const IT = TT.yV[oT];
        if ("function" !== typeof IT) return IT;
        try {
          return IT()
        } catch (iT) {
          return this.warnOnce(`Sun shadows: no caster option for block ${oT}: ${iT instanceof Error?iT.message:String(iT)}`), null
        }
      }
      classify(TT, oT, IT) {
        const iT = this.option(TT, oT);
        if ("none" === iT) return null;
        if (iT && iT.planes.length > 0) {
          const TT = iT.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(TT)}`,
            planes: TT
          }
        }
        if (TT.Fx[oT]) return null;
        const zT = TT.Dx[oT] ? TT.FQ(oT) : null;
        if (zT && zT.length >= 6) {
          const TT = function(TT) {
            const oT = new Uint32Array(16);
            for (let IT = 0; IT + 6 <= TT.length; IT += 6) {
              const iT = [0, 1, 2].map((oT => Math.max(0, Math.ceil(8 * TT[IT + oT] - .5)))),
                zT = [0, 1, 2].map((oT => Math.min(7, Math.floor(8 * TT[IT + oT + 3] - .5))));
              for (let TT = iT[2]; TT <= zT[2]; TT++)
                for (let IT = iT[1]; IT <= zT[1]; IT++)
                  for (let kT = iT[0]; kT <= zT[0]; kT++) {
                    const iT = kT + 8 * (IT + 8 * TT);
                    oT[iT >>> 5] |= 1 << (31 & iT)
                  }
            }
            return oT
          }(zT);
          return function(TT) {
            return TT.every((TT => 4294967295 === TT))
          }(TT) ? No : TT.every((TT => 0 === TT)) ? null : {
            kind: "shape",
            key: `shape:${TT.join(",")}`,
            mask: TT
          }
        }
        if (TT.xH[oT] || !TT.LK[oT]) return null;
        const kT = [0, 1, 2, 3, 4, 5].map((iT => {
          const zT = TT.xK[6 * oT + iT];
          let kT = IT.get(zT);
          return void 0 === kT && (kT = function(TT) {
            if (!TT || TT.mK) return null;
            const {
              XV: oT,
              xV: IT,
              zV: iT
            } = TT;
            if (!oT || !IT || !(IT > 0) || void 0 === iT || !(iT >= 0)) return null;
            const zT = oT[0],
              kT = IT * IT * 4;
            if (!zT || zT.byteLength < kT) return null;
            const WT = Math.floor(zT.byteLength / kT),
              XT = oT[Math.floor(iT / WT)];
            if (!XT) return null;
            const BT = new Uint8Array(XT.buffer, XT.byteOffset, XT.byteLength),
              FT = iT % WT * kT;
            if (FT + kT > BT.length) return null;
            const ST = new Uint8Array(IT * IT);
            let DT = !1;
            for (let LT = 0; LT < ST.length; LT++) ST[LT] = BT[FT + 4 * LT + 3], DT ||= ST[LT] < IB;
            return DT ? {
              alpha: ST,
              width: IT
            } : null
          }(TT.wK(zT)), IT.set(zT, kT)), kT
        }));
        if (kT.every((TT => null === TT))) return No;
        const WT = zB(Math.max(...kT.map((TT => {
            var oT;
            return null !== (oT = null === TT || void 0 === TT ? void 0 : TT.width) && void 0 !== oT ? oT : 1
          })))),
          XT = new Uint32Array(II(WT)).fill(4294967295),
          BT = kT.map((TT => null === TT ? XT : iB(TT.alpha, TT.width, TT.width, WT)));
        return {
          kind: "cutout",
          key: `cutout:${WT}:${BT.map((TT=>TT.join(","))).join("|")}`,
          size: WT,
          faces: BT
        }
      }
      allocate(TT) {
        if (this.nextCaster >= iI) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const oT = this.nextCaster++;
        if (this.writeCaster(oT, Po, 0, 0, 0), "shape" === TT.kind) {
          const IT = this.allocateMask(TT.mask.length);
          IT >= 0 && (this.sink(IT, TT.mask), this.writeCaster(oT, Vo, IT, 0, 8))
        } else if ("cutout" === TT.kind) {
          const IT = II(TT.size),
            iT = this.allocateMask(6 * IT);
          if (iT >= 0) {
            const zT = new Uint32Array(6 * IT);
            TT.faces.forEach(((TT, oT) => {
              zT.set(TT, oT * IT)
            })), this.sink(iT, zT), this.writeCaster(oT, oI, iT, 0, TT.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(oT, TT.planes).finally((() => {
          this.planesLoading--
        })));
        return oT
      }
      async loadPlanes(TT, oT) {
        const IT = await Promise.all(oT.map((TT => this.texture(TT.texture))));
        if (IT.some((TT => null === TT))) return;
        const iT = IT,
          zT = zB(Math.max(...iT.map((TT => Math.min(TT.width, TT.height))))),
          kT = II(zT),
          WT = this.allocateMask(oT.length * (4 + kT));
        if (WT < 0) return;
        const XT = new Uint32Array(oT.length * (4 + kT)),
          BT = 4 * oT.length;
        oT.forEach(((TT, oT) => {
          const IT = WT + BT + oT * kT;
          XT.set(function(TT, oT) {
            const [IT, iT] = TT.tangent, zT = Math.hypot(IT, iT) || 1, kT = IT / zT, WT = iT / zT, XT = TT.centre[0] * WT - TT.centre[1] * kT, BT = new Uint32Array(4);
            return new Float32Array(BT.buffer, 0, 3).set([kT, WT, XT]), BT[3] = oT, BT
          }(TT, IT), 4 * oT), XT.set(iB(iT[oT].alpha, iT[oT].width, iT[oT].height, zT), BT + oT * kT)
        })), this.sink(WT, XT), this.writeCaster(TT, TI, WT, oT.length, zT)
      }
      texture(TT) {
        let oT = this.textures.get(TT);
        return oT || (oT = this.loadTexture(TT).catch((oT => (this.warn(`Sun shadows: no mask for ${TT}: ${oT instanceof Error?oT.message:String(oT)}`), null))), this.textures.set(TT, oT)), oT
      }
      allocateMask(TT) {
        if (this.nextMaskWord + TT > zI) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const oT = 32768 + this.nextMaskWord;
        return this.nextMaskWord += TT, oT
      }
      writeCaster(TT, oT, IT, iT, zT) {
        this.sink(0 + 4 * TT, Uint32Array.of(oT, IT, iT, zT))
      }
      warnOnce(TT) {
        this.warned.has(TT) || (this.warned.add(TT), this.warn(TT))
      }
    }
    var WB = IT(36632);

    function XB(TT) {
      return !TT.RK && !TT.ZiT && !TT.IK
    }

    function BB() {
      return {
        bricks: new Uint32Array(qo),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Ho)
      }
    }
    class FB {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = TT, this.writeVoxels = oT, this.writePool = IT, this.warn = iT, this.eyeChunk = null, this.slotChunk = new Array(Jo).fill(null), this.slotVersion = new Float64Array(Jo).fill(-1), this.slotPool = new Array(Jo).fill(null), this.starved = new Uint8Array(Jo), this.queue = [], this.queued = new Uint8Array(Jo), this.queueSorted = !0, this.freePool = new Uint32Array(kI), this.freeCount = kI, this.casterTable = null, this.warnedPool = !1, this.scratch = BB(), this.victimScratch = BB(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Jo), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let zT = 0; zT < kI; zT++) this.freePool[zT] = 65535 - zT
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return kI - this.freeCount
      }
      chunkAdded(TT) {
        if (null === this.eyeChunk || !this.inRadius(TT.i, TT.j, TT.k)) return;
        const oT = po(TT.i, TT.j, TT.k);
        this.slotChunk[oT] = TT, this.slotVersion[oT] = -1, this.enqueue(oT)
      }
      update(TT, oT, IT) {
        const iT = this.casters.blockCaster;
        if (iT !== this.casterTable) {
          this.casterTable = iT;
          for (let TT = 0; TT < Jo; TT++) this.slotVersion[TT] = -1, this.slotChunk[TT] && this.enqueue(TT)
        }
        const zT = Math.floor(TT[0] / 32),
          kT = Math.floor(TT[1] / 32),
          WT = Math.floor(TT[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== zT || this.eyeChunk[1] !== kT || this.eyeChunk[2] !== WT) && (this.eyeChunk = [zT, kT, WT], this.follow(oT), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let XT = 0; XT < Jo; XT++) {
          const TT = this.slotChunk[XT];
          TT && (TT.IIT || TT.kK !== this.slotVersion[XT]) && this.enqueue(XT)
        }
        this.drain(IT), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(TT, oT) {
        this.records.set(oT, 4 * TT), this.windowTopStale = !0, this.writeVoxels(4 * TT, oT)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const TT = this.records;
        let oT = -1 / 0;
        for (let iT = 0; iT < TT.length; iT += 4) {
          const IT = 255 & TT[iT + 3];
          IT !== Yo && IT !== Qo || !this.inRadius(TT[iT], TT[iT + 1], TT[iT + 2]) || (oT = Math.max(oT, TT[iT + 1] * fo + (TT[iT + 3] >>> 8)))
        }
        const IT = oT === -1 / 0 ? 1 : oT + so;
        IT !== this.windowTop[0] && (this.windowTop[0] = IT, this.writeVoxels(Zo, this.windowTop))
      }
      follow(TT) {
        const oT = this.eyeChunk,
          [IT, iT, zT] = Co;
        for (let WT = -zT; WT <= zT; WT++)
          for (let zT = -iT; zT <= iT; zT++)
            for (let iT = -IT; iT <= IT; iT++) {
              var kT;
              const IT = oT[0] + iT,
                XT = oT[1] + zT,
                BT = oT[2] + WT,
                FT = po(IT, XT, BT),
                ST = this.slotChunk[FT];
              if (ST && !ST.IIT && ST.i === IT && ST.j === XT && ST.k === BT) continue;
              const DT = null !== (kT = TT(IT, XT, BT)) && void 0 !== kT ? kT : null;
              ST && (ST.i !== IT || ST.j !== XT || ST.k !== BT) && this.slotPool[FT] && (this.release(FT), this.record.fill(0), this.writeRecord(FT, this.record)), this.slotChunk[FT] = DT, this.slotVersion[FT] = -1, (DT || ST) && this.enqueue(FT)
            }
      }
      requeueStarved() {
        for (let TT = 0; TT < Jo; TT++) this.starved[TT] && this.slotChunk[TT] && this.enqueue(TT)
      }
      enqueue(TT) {
        this.queued[TT] || (this.queued[TT] = 1, this.queue.push(TT), this.queueSorted = !1)
      }
      drain(TT) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const TT = new Map;
          for (const oT of this.queue) TT.set(oT, this.slotDistance(oT));
          this.queue.sort(((oT, IT) => TT.get(IT) - TT.get(oT))), this.queueSorted = !0
        }
        const oT = performance.now();
        let IT = 0;
        const iT = [];
        for (; this.queue.length > 0 && (0 === IT || performance.now() - oT < TT);) {
          const TT = this.queue.pop(),
            oT = this.slotChunk[TT];
          !oT || oT.IIT || XB(oT) ? (this.queued[TT] = 0, this.encodeSlot(TT), IT++) : iT.push(TT)
        }
        for (let zT = iT.length - 1; zT >= 0; zT--) this.queue.push(iT[zT])
      }
      slotDistance(TT) {
        const oT = this.slotChunk[TT],
          IT = this.eyeChunk;
        return oT ? Math.max(Math.abs(oT.i - IT[0]), Math.abs(oT.j - IT[1]), Math.abs(oT.k - IT[2])) : 0
      }
      inRadius(TT, oT, IT) {
        const iT = this.eyeChunk,
          [zT, kT, WT] = Co;
        return Math.abs(TT - iT[0]) <= zT && Math.abs(oT - iT[1]) <= kT && Math.abs(IT - iT[2]) <= WT
      }
      release(TT) {
        const oT = this.slotPool[TT];
        if (oT) {
          for (let TT = oT.length - 1; TT >= 0; TT--) this.freePool[this.freeCount++] = oT[TT];
          this.slotPool[TT] = null
        }
      }
      encodeSlot(TT) {
        var oT, IT, iT, zT, kT;
        let WT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          XT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const BT = null !== (oT = null === (IT = this.slotPool[TT]) || void 0 === IT ? void 0 : IT.length) && void 0 !== oT ? oT : 0;
        this.release(TT), this.starved[TT] = 0;
        const FT = this.slotChunk[TT],
          ST = this.record;
        if (!FT || FT.IIT || !FT.jL) return this.slotChunk[TT] = null, this.slotVersion[TT] = -1, ST.fill(0), this.writeRecord(TT, ST), void(BT > 0 && this.requeueStarved());
        this.slotVersion[TT] = FT.kK;
        const DT = this.encodeBricks(FT, TT, WT, XT);
        ST[0] = FT.i, ST[1] = FT.j, ST[2] = FT.k, ST[3] = DT, this.writeRecord(TT, ST), null === (iT = this.encoded) || void 0 === iT || iT.call(this, FT), XT && (null !== (zT = null === (kT = this.slotPool[TT]) || void 0 === kT ? void 0 : kT.length) && void 0 !== zT ? zT : 0) < BT && this.requeueStarved()
      }
      encodeBricks(TT, oT, IT, iT) {
        if (TT.mc) return ao;
        const zT = this.casters.blockCaster,
          {
            data: kT,
            stride: WT,
            offset: XT
          } = TT.jL,
          [BT, FT, ST] = WT,
          DT = fo,
          {
            bricks: LT,
            cells: xT,
            special: cT
          } = IT;
        LT.fill(0), cT.fill(0);
        let KT = 0,
          MT = 0,
          rT = 0;
        for (let AT = 0; AT < DT; AT++) {
          const oT = AT >> 2,
            IT = 3 & AT,
            iT = TT.Qx[AT],
            WT = iT === WB.i ? -1 : iT < zT.length ? zT[iT] : 0;
          if (0 !== WT)
            for (let TT = 0; TT < DT; TT++) {
              const iT = TT >> 2,
                gT = 3 & TT;
              let hT = XT + TT * BT + AT * FT;
              for (let TT = 0; TT < DT; TT++, hT += ST) {
                let XT = WT;
                if (XT < 0) {
                  const TT = kT[hT];
                  if (XT = TT < zT.length ? zT[TT] : 0, 0 === XT) continue
                }
                const BT = bo(iT, oT, TT >> 2),
                  FT = yo(gT, IT, 3 & TT);
                LT[3 * BT + (FT >>> 5)] |= 1 << (31 & FT), xT[BT * Oo + FT] = XT, KT++, rT = AT, XT === No ? MT++ : cT[BT] = 1
              }
            }
        }
        return 0 === KT ? ao : 32768 === MT ? Yo | rT << 8 : (this.writePoolEntries(oT, IT, iT), this.writeVoxels(no + oT * qo, LT), Qo | rT << 8)
      }
      writePoolEntries(TT, oT, IT) {
        const {
          bricks: iT,
          cells: zT,
          special: kT
        } = oT, WT = this.entry;
        let XT = 0;
        for (let ST = 0; ST < Ho; ST++) XT += kT[ST];
        if (0 === XT) return;
        IT && this.freeCount < XT && this.evictBeyond(TT, XT);
        const BT = new Uint32Array(IT ? Math.min(XT, this.freeCount) : 0);
        let FT = 0;
        for (let ST = 0; ST < Ho; ST++) {
          if (!kT[ST]) continue;
          const IT = 3 * ST;
          if (FT === BT.length) {
            this.dropSpecials(oT, ST), this.starved[TT] = 1;
            continue
          }
          const XT = this.freePool[--this.freeCount];
          BT[FT++] = XT;
          for (let TT = 0; TT < Oo; TT++) {
            const oT = iT[IT + (TT >>> 5)] >>> (31 & TT) & 1 ? zT[ST * Oo + TT] : 0;
            1 & TT ? WT[TT >> 1] |= oT << 16 : WT[TT >> 1] = oT
          }
          iT[IT + 2] = XT + 1, this.writePool(WI + 32 * XT, WT)
        }
        BT.length > 0 && (this.slotPool[TT] = BT)
      }
      evictBeyond(TT, oT) {
        const IT = this.slotDistance(TT),
          iT = [];
        for (let zT = 0; zT < Jo; zT++) zT !== TT && this.slotPool[zT] && this.slotDistance(zT) > IT && iT.push(zT);
        iT.sort(((TT, oT) => this.slotDistance(oT) - this.slotDistance(TT)));
        for (const zT of iT) {
          if (this.freeCount >= oT) return;
          const TT = this.slotChunk[zT];
          TT && !TT.IIT && TT.jL && (TT.kK === this.slotVersion[zT] || XB(TT)) && this.encodeSlot(zT, this.victimScratch, !1)
        }
      }
      dropSpecials(TT, oT) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const IT = 3 * oT;
        for (let iT = 0; iT < Oo; iT++) TT.cells[oT * Oo + iT] !== No && (TT.bricks[IT + (iT >>> 5)] &= ~(1 << (31 & iT)))
      }
    }
    var SB = IT(36325);
    class DB {
      constructor(TT) {
        this.device = TT, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new rI, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.iL = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = TT.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = TT.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(TT, oT, IT) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: iT
        } = this;
        iT.hx(TT, oT), IT.forEachSunShadowCaster((TT => {
          this.add(TT)
        })), iT.finish();
        const zT = 0 === iT.parts;
        if (zT && this.uploadedEmpty) return;
        this.uploadedEmpty = zT;
        const {
          queue: kT
        } = this.device, {
          words: WT
        } = iT;
        kT.writeBuffer(this.frameBuffer, 0, WT, 0, 16385), iT.refs > 0 && kT.writeBuffer(this.frameBuffer, 65540, WT, SI, iT.refs), zT || kT.writeBuffer(this.frameBuffer, 327684, WT, DI, iT.parts * FI)
      }
      add(TT) {
        const oT = this.gridFor(TT);
        if (!oT) return;
        const {
          frame: IT
        } = this, {
          iL: iT,
          worldAt: zT,
          instances: kT,
          instanceCount: WT,
          thin: XT
        } = TT;
        if (kT)
          for (let BT = 0; BT < WT; BT++) XT ? (gI(kT, 16 * BT, iT, zT, this.iL), IT.add(oT, this.iL)) : IT.add(oT, kT, 16 * BT);
        else IT.add(oT, iT, zT)
      }
      gridFor(TT) {
        let {
          geometry: oT,
          indexed: IT,
          first: iT,
          count: zT,
          skip: kT
        } = TT, WT = this.grids.get(oT);
        WT || (WT = new Map, this.grids.set(oT, WT));
        const XT = `${IT?iT:-1-iT}:${zT}:${null!==kT&&void 0!==kT?kT:""}`;
        let BT = WT.get(XT);
        if (void 0 !== BT || this.gridsFull) return BT;
        const FT = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = FT + 2;
        else if (FT > this.bakeDeadline) return;
        return BT = this.bake(oT, IT, iT, zT, kT), void 0 !== BT && WT.set(XT, BT), BT
      }
      bake(TT, oT, IT, iT, zT) {
        const kT = TT.vertexAttributes.find((TT => "position" === TT.kind)),
          WT = kT ? function(TT, oT, IT, iT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const kT = TT => oT ? oT[IT + TT] : IT + TT,
              WT = TT => null !== zT && [0, 1, 2].some((oT => {
                const IT = kT(TT + oT);
                return IT >= zT[0] && IT < zT[1]
              })),
              XT = [1 / 0, 1 / 0, 1 / 0],
              BT = [-1 / 0, -1 / 0, -1 / 0];
            for (let AT = 0; AT + 2 < iT; AT += 3)
              if (!WT(AT))
                for (let oT = 0; oT < 3; oT++) {
                  const IT = kT(AT + oT);
                  for (let oT = 0; oT < 3; oT++) XT[oT] = Math.min(XT[oT], TT[3 * IT + oT]), BT[oT] = Math.max(BT[oT], TT[3 * IT + oT])
                }
            const FT = Math.max(BT[0] - XT[0], BT[1] - XT[1], BT[2] - XT[2]);
            if (!(FT > 0)) return null;
            const ST = FT / 64,
              DT = [0, 0, 0],
              LT = [0, 0, 0],
              xT = [0, 0, 0];
            for (let AT = 0; AT < 3; AT++) DT[AT] = Math.min(65, Math.ceil((BT[AT] - XT[AT]) / ST) + 1), LT[AT] = XT[AT] - ST / 2, xT[AT] = LT[AT] + DT[AT] * ST;
            const cT = new Uint32Array(Math.ceil(DT[0] * DT[1] * DT[2] / 32)),
              KT = new Float64Array(9),
              MT = [0, 0, 0],
              rT = [0, 0, 0];
            for (let AT = 0; AT + 2 < iT; AT += 3)
              if (!WT(AT)) {
                for (let oT = 0; oT < 3; oT++) {
                  const IT = kT(AT + oT);
                  for (let iT = 0; iT < 3; iT++) KT[3 * oT + iT] = TT[3 * IT + iT]
                }
                for (let TT = 0; TT < 3; TT++) {
                  const oT = Math.min(KT[TT], KT[3 + TT], KT[6 + TT]),
                    IT = Math.max(KT[TT], KT[3 + TT], KT[6 + TT]);
                  MT[TT] = Math.max(0, Math.floor((oT - LT[TT]) / ST - 1e-6)), rT[TT] = Math.min(DT[TT] - 1, Math.floor((IT - LT[TT]) / ST + 1e-6))
                }
                for (let TT = MT[2]; TT <= rT[2]; TT++)
                  for (let oT = MT[1]; oT <= rT[1]; oT++)
                    for (let IT = MT[0]; IT <= rT[0]; IT++)
                      if (hI(KT, LT[0] + (IT + .5) * ST, LT[1] + (oT + .5) * ST, LT[2] + (TT + .5) * ST, ST / 2)) {
                        const iT = IT + DT[0] * (oT + DT[1] * TT);
                        cT[iT >>> 5] |= 1 << (31 & iT)
                      }
              } return {
              words: cT,
              lo: LT,
              hi: xT,
              cell: ST,
              dims: DT
            }
          }((0, SB.i)(kT, TT.vertexCount), oT ? TT.indexData : null, IT, iT, zT) : null;
        if (!WT) return null;
        const {
          words: XT,
          ...BT
        } = WT;
        if (this.gridTop + XT.length > xI) return void(this.gridsFull = !0);
        const FT = this.gridTop;
        return this.gridTop += XT.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * FT, XT), {
          ...BT,
          at: FT
        }
      }
    }
    const LB = Math.cos(1 * Math.PI / 180);

    function xB(TT, oT) {
      return TT[0] * oT[0] + TT[1] * oT[1] + TT[2] * oT[2] < LB
    }
    async function cB(TT) {
      const {
        pixels: oT,
        width: IT,
        height: iT
      } = await Zz(TT), zT = new Uint8Array(IT * iT);
      for (let kT = 0; kT < zT.length; kT++) zT[kT] = oT[4 * kT + 3];
      return {
        width: IT,
        height: iT,
        alpha: zT
      }
    }
    class KB {
      constructor(TT, oT) {
        this.device = TT, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(mI.l), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = TT.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = TT.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * to,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = TT.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [IT, iT, zT] = mI.p;
        this.volume = TT.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: IT,
            height: iT,
            depthOrArrayLayers: zT
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = TT.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = TT.createBuffer({
          label: "sun-shadow-volume-work",
          size: mI.l,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = oT ? new DB(TT) : null, this.entityStandIn = oT ? null : TT.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var TT, oT;
        const IT = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || IT.push("Lite sun shadow volume pipeline compiling");
        const iT = null !== (TT = null === (oT = this.casters) || void 0 === oT ? void 0 : oT.planesLoading) && void 0 !== TT ? TT : 0;
        return iT > 0 && IT.push(`${iT} Lite sun shadow plane casters loading their textures`), IT
      }
      entries() {
        var TT, oT, IT, iT;
        const zT = vo.q;
        return [{
          binding: zT.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: zT.jL,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: zT.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: zT.volume,
          resource: this.volumeView
        }, {
          binding: zT.sampler,
          resource: this.volumeSampler
        }, {
          binding: zT.entities,
          resource: {
            buffer: null !== (TT = null === (oT = this.entities) || void 0 === oT ? void 0 : oT.frameBuffer) && void 0 !== TT ? TT : this.entityStandIn
          }
        }, {
          binding: zT.entityGrids,
          resource: {
            buffer: null !== (IT = null === (iT = this.entities) || void 0 === iT ? void 0 : iT.gridBuffer) && void 0 !== IT ? IT : this.entityStandIn
          }
        }]
      }
      prepare(TT, oT, IT) {
        var iT;
        this.entitiesThisFrame = !1;
        const zT = null !== (iT = null === IT || void 0 === IT ? void 0 : IT.sunShadowReach()) && void 0 !== iT ? iT : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!IT || !zT.sunShadow && !zT.airShadow) return void(this.volumeHolds = null);
        if (TT.iL.A4 !== fo) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${TT.iL.A4}; everything is lit.`)));
        const kT = this.start(TT);
        this.casters.update(TT.Xx, TT.Xx.Dx.length);
        const WT = TT.uL;
        for (let LT = 0; LT < 3; LT++) this.eye[LT] = oT[LT] + WT[LT];
        const XT = (0, mI.w)(this.eye);
        this.staleNear = XT;
        const BT = TT.iL.vK;
        kT.update(this.eye, ((TT, oT, IT) => BT.EK(TT, oT, IT)), 1);
        const FT = (0, mI.s)(IT.f_()),
          ST = kT.eyeChunk,
          DT = this.uniformInts;
        for (let LT = 0; LT < 3; LT++) DT[LT] = ST[LT], DT[4 + LT] = XT[LT];
        this.entitiesThisFrame = null !== this.entities && zT.sunShadow, this.entitiesThisFrame && MI(this.uniformFloats, 8, oT, FT), null !== this.volumeHolds && (this.castersWritten || xB(FT, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(XT, FT, ST)
      }
      markStale(TT) {
        const oT = this.staleNear,
          IT = fo,
          iT = [TT.i * IT, TT.j * IT, TT.k * IT];
        for (let kT = 0; kT < 3; kT++)
          if (iT[kT] + IT <= oT[kT] - IT || iT[kT] >= oT[kT] + mI.p[kT] + IT) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const zT = this.stale;
        for (let kT = 0; kT < zT.length; kT += 4)
          if (zT[kT] === TT.i && zT[kT + 1] === TT.j && zT[kT + 2] === TT.k) return void(zT[kT + 3] = this.swept);
        if (16 === zT.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        zT.push(TT.i, TT.j, TT.k, this.swept)
      }
      writeStale() {
        const TT = this.swept,
          oT = this.stale;
        this.staleAll && TT - this.staleAllSwept >= mI.g && (this.staleAll = !1, oT.length = 0);
        let IT = 0;
        for (let zT = 0; zT < oT.length; zT += 4)
          if (TT - oT[zT + 3] < mI.g) {
            for (let TT = 0; TT < 4; TT++) oT[IT + TT] = oT[zT + TT];
            IT += 4
          } oT.length = IT;
        const iT = this.uniformInts;
        iT[3] = this.staleAll ? 5 : IT / 4;
        for (let zT = 0; zT < 4; zT++)
          for (let TT = 0; TT < 3; TT++) iT[16 + 4 * zT + TT] = 4 * zT < IT ? oT[4 * zT + TT] * fo : 0
      }
      writeUniform() {
        const TT = this.uniformInts;
        let oT = this.uniformWritten;
        if (oT) {
          let IT = !0;
          for (let iT = 0; iT < TT.length && IT; iT++) IT = TT[iT] === oT[iT];
          if (IT) return
        }
        oT ??= this.uniformWritten = new Int32Array(TT.length), oT.set(TT), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(TT) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, TT)
      }
      computeVolume(TT, oT, IT) {
        const iT = this.buildVolumePass();
        if (!iT) return void(this.volumeHolds = null);
        const zT = (0, mI.v)(this.volumeHolds, TT);
        this.volumeHolds = TT;
        const kT = 1 === zT.length && zT[0].size.every(((TT, oT) => TT === mI.p[oT])),
          WT = this.sweptChunk,
          XT = this.sweptLight,
          BT = oT[0] !== XT[0] || oT[1] !== XT[1] || oT[2] !== XT[2],
          FT = IT[0] !== WT[0] || IT[1] !== WT[1] || IT[2] !== WT[2],
          ST = BT && xB(oT, XT);
        if ((kT || this.written || FT || ST) && (this.fastLeft = mI.g), kT || this.written || BT || FT) {
          this.written = !1;
          for (let TT = 0; TT < 3; TT++) WT[TT] = IT[TT], XT[TT] = oT[TT];
          this.sweepLeft = kT ? 0 : mI.g
        }
        if (kT ? this.swept += mI.g : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, zT.push(...(0, mI.x)(TT, this.slice)), this.slice = (this.slice + 1) % mI.g, this.swept++), 0 === zT.length) return;
        const DT = (0, mI.y)(this.workData, oT, zT);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const LT = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          xT = LT.beginComputePass({
            label: "sun-shadow-volume"
          });
        xT.setPipeline(iT.pipeline), xT.setBindGroup(uI.group, iT.bindGroup), xT.dispatchWorkgroups(Math.ceil(DT / mI.i)), xT.end(), this.device.queue.submit([LT.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const TT = uI,
          oT = GPUShaderStage.COMPUTE,
          IT = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: TT.uniform,
              visibility: oT,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: TT.jL,
              visibility: oT,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: TT.special,
              visibility: oT,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: TT.work,
              visibility: oT,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: TT.volume,
              visibility: oT,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          iT = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: IT,
            entries: [{
              binding: TT.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: TT.jL,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: TT.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: TT.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: TT.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [IT]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: vI()
            }),
            entryPoint: "main"
          }
        }).then((TT => {
          this.volumePass = {
            pipeline: TT,
            bindGroup: iT
          }
        }), (TT => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(TT)}`)
        })), null
      }
      start(TT) {
        if (this.window) return this.window;
        const oT = (TT, oT) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * TT, oT)
        };
        this.casters = new kB(((TT, IT) => {
          this.castersWritten = !0, oT(TT, IT)
        }), cB);
        const IT = new FB(this.casters, ((TT, oT) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * TT, oT)
        }), oT);
        return IT.encoded = TT => {
          this.markStale(TT)
        }, TT.iL.on("chunkAdded", (TT => {
          IT.chunkAdded(TT)
        })), this.window = IT, IT
      }
    }
    var MB = IT(37673),
      rB = IT(37682);
    const AB = 0,
      gB = 3,
      hB = 4,
      wB = 5;

    function mB(TT, oT, IT, iT) {
      TT.drawOffset(oT, iT + AB), oT[iT + gB] = TT.drawTime(), IT[iT + hB] = TT.ring.drawStart(), IT[iT + wB] = TT.ring.drawCount()
    }
    const eB = `\n${ri}\n\nconst MAX_STOPS = ${rB.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${rB.c/4}>,\n\tcolor1: array<vec4f, ${rB.c}>,\n\tcolor2: array<vec4f, ${rB.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${rB.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${rB.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var RB = IT(40425);
    class uB {
      constructor(TT, oT, IT, iT) {
        this.device = TT, this.system = oT, this.frameIndex = IT, this.bindings = iT, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, RB.c)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (TT, oT) => {
          this.device.queue.writeBuffer(this.ring, TT * rB.e * 4, this.system.ring.records, TT * rB.e, (oT - TT) * rB.e)
        };
        const {
          name: zT
        } = oT;
        this.ring = TT.createBuffer({
          label: `particles-${zT}`,
          size: oT.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = TT.createBuffer({
          label: `particles-uniforms-${zT}`,
          size: 4 * rB.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(TT) {
        const oT = (0, RB.b)(this.system, this.uniformBits, TT);
        oT && (this.uniformBits = oT, this.device.queue.writeBuffer(this.uniforms, 0, oT))
      }
      bind() {
        const {
          system: TT
        } = this, oT = this.texture;
        (0, RB.i)(TT, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${TT.name}`,
          size: [rB.l, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * rB.l
        }, [rB.l, 1]));
        const IT = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === oT.view && this.boundSampler === oT.sampler && this.boundRamp === IT || (this.boundView = oT.view, this.boundSampler = oT.sampler, this.boundRamp = IT, this.bindGroup = this.device.createBindGroup({
          label: `particles-${TT.name}`,
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
            resource: oT.sampler
          }, {
            binding: 3,
            resource: oT.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: IT
          }]
        }))
      }
      destroy() {
        var TT;
        this.ring.destroy(), this.uniforms.destroy(), null === (TT = this.ramp) || void 0 === TT || TT.destroy()
      }
    }
    class vB {
      constructor(TT, oT) {
        this.device = TT, this.resources = oT, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Fo.c)();
        const IT = TT.createBindGroupLayout({
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
        this.frameLayout = TT.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = TT.createPipelineLayout({
          bindGroupLayouts: [oo(TT), IT, this.frameLayout]
        }), this.module = TT.createShaderModule({
          label: "particles",
          code: eB
        });
        const iT = TT.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        TT.queue.writeTexture({
          texture: iT
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: IT,
          rampSampler: TT.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: iT.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (oT, IT) => (this.bindTarget(IT), {
            renderable: this.renderable,
            pipeline: Wo(TT, IT),
            draw: TT => IT === this.preparedTarget ? this.draw(TT) : 0
          })
        }
      }
      get liT() {
        return this.systems.size
      }
      reset() {
        for (const TT of this.systems.keys()) TT.reset()
      }
      describePendingWork() {
        return (0, MB.c)(this.systems.keys(), "Lite")
      }
      aJ(TT, oT) {
        const IT = new MB.b(TT, oT, this);
        return this.systems.set(IT, new uB(this.device, IT, this.allocateFrameIndex(), this.bindings)), IT
      }
      F_(TT, oT) {
        for (const IT of this.systems.keys()) IT.F_(TT, oT)
      }
      canDraw(TT) {
        const oT = this.systems.get(TT),
          IT = TT.texture ? this.resources.boundTexture(TT.texture) : null;
        if (!oT || !IT || !this.targetPipelines) return !1;
        if (oT.texture = IT, oT.pipelines.length = 0, !pz(TT.blendMode)) return this.warnOnce(`blend:${TT.blendMode}`, `particle blend mode ${TT.blendMode} is not drawn (${TT.name})`), !0;
        const iT = (0, Uz.l)(TT.blendMode);
        for (const zT of iT) {
          const TT = this.pipelineFor(zT);
          if (!1 === TT) return oT.pipelines.length = 0, !0;
          TT && oT.pipelines.push(TT)
        }
        return oT.pipelines.length === iT.length
      }
      disposeStopped(TT) {
        TT.dispose()
      }
      remove(TT) {
        const oT = this.systems.get(TT);
        oT && (this.systems.delete(TT), oT.destroy(), this.freeFrameIndices.push(oT.frameIndex))
      }
      prepare(TT) {
        const oT = TT.animationRatio || 1;
        Xo(this.renderable._worldCenter, TT, io), this.preparedTarget = this.target, this.draws.length = 0;
        let IT = 0;
        for (const iT of this.systems.values()) {
          const TT = iT.system;
          if (!TT.animateIfActive(oT)) continue;
          if (TT.ring.takeUploads(iT.upload), !TT.hasLiveParticles() || 0 === iT.pipelines.length) continue;
          iT.writeUniforms(this.warnOnce), iT.bind();
          const zT = 64 * iT.frameIndex;
          iT.count = TT.ring.drawCount(), mB(TT, this.frameData, this.frameBits, zT), IT = Math.max(IT, zT + 64), this.draws.push(iT)
        }
        IT > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, IT)
      }
      draw(TT) {
        let oT = 0,
          IT = null;
        for (const iT of this.draws) {
          TT.setBindGroup(1, iT.bindGroup), TT.setBindGroup(2, this.frameBindGroup, [256 * iT.frameIndex]);
          for (const zT of iT.pipelines) zT !== IT && (TT.setPipeline(zT), IT = zT), TT.draw(4, iT.count), oT++
        }
        return oT
      }
      bindTarget(TT) {
        this.target = TT;
        const oT = `${TT._colorFormat}|${TT._depthStencilFormat}|${TT._depthCompare}|${TT._sampleCount}`;
        let IT = this.pipelines.get(oT);
        IT || (IT = new Map, this.pipelines.set(oT, IT)), this.targetPipelines = IT
      }
      pipelineFor(TT) {
        var oT;
        const IT = this.targetPipelines,
          iT = IT.get(TT);
        if (void 0 !== iT) return iT;
        IT.set(TT, null);
        const zT = this.target,
          kT = TT === Uz.b,
          WT = null !== (oT = zT._depthCompare) && void 0 !== oT ? oT : Io;
        return this.device.createRenderPipelineAsync({
          label: `particles-${TT}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: PT({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: kT ? 1 : 0
            }
          }, zT, bz((0, Uz.i)(TT))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: zT._depthStencilFormat ? {
            format: zT._depthStencilFormat,
            depthCompare: WT,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: zT._sampleCount
          }
        }).then((oT => {
          IT.set(TT, oT)
        }), (oT => {
          IT.set(TT, !1), console.error("Lite particle pipeline failed", oT), Pz("particles", `blend-${TT}`, oT)
        })), null
      }
      allocateFrameIndex() {
        const TT = this.freeFrameIndices.pop();
        if (void 0 !== TT) return TT;
        const oT = this.nextFrameIndex++;
        if (64 * (oT + 1) > this.frameData.length) {
          const TT = new Float32Array(2 * this.frameData.length);
          TT.set(this.frameData), this.frameData = TT, this.frameBits = new Uint32Array(TT.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return oT
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
    class EB {
      constructor(TT, oT, IT, iT, zT) {
        this.lite = TT, this.canvas = oT, this.info = IT, this.resources = zT, this.lIT = !1, this.needPOTTextures = !1, this.J7 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = oT.width, this.renderHeight = oT.height, this.caps = {
          maxTextureSize: iT.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: iT.maxTextureArrayLayers
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
      setSize(TT, oT) {
        if (this.renderWidth === TT && this.renderHeight === oT) return !1;
        const IT = this.renderWidth,
          iT = this.renderHeight;
        this.renderWidth = TT, this.renderHeight = oT;
        try {
          (0, qT.p)(this.lite, TT, oT)
        } catch (zT) {
          if (zT instanceof DOMException && "InvalidStateError" === zT.name) {
            this.renderWidth = IT, this.renderHeight = iT;
            try {
              (0, qT.p)(this.lite, IT, iT)
            } catch {
              this.canvas.width = IT, this.canvas.height = iT
            }
            return console.warn("WebGPU could not allocate render targets for resize", TT, oT, zT.message), !1
          }
          throw zT
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
      xR() {
        const TT = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : TT - this.lastFrameTime, this.lastFrameTime = TT
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(TT, oT) {
        const IT = document.createElement("canvas");
        return IT.width = TT, IT.height = oT, IT
      }
      I6(TT, oT) {
        var IT;
        return null !== (IT = this.resources.I6.get(TT)) && void 0 !== IT ? IT : new tT(this.resources, TT, oT)
      }
      atlasArray(TT, oT, IT) {
        return this.resources.atlasArray(TT, oT, IT)
      }
    }
    class fB {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(TT) {
        this.fov = TT.fov, this.nearPlane = TT.near, this.farPlane = TT.far;
        const oT = TT.worldMatrix;
        for (let IT = 0; IT < 16; IT++)
          if (this.worldMatrix[IT] !== oT[IT]) return this.worldMatrix.set(oT), void this.worldMatrixVersion++
      }
    }
    class CB {
      constructor(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
        let ST = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = TT, this.NK = oT, this.sceneTask = IT, this.gpuDevice = iT, this.terrain = zT, this.meshes = kT, this.particles = WT, this.resources = XT, this.sunShadow = ST, this.goT = void 0, this.backendName = "WebGPU (Lite)", this.K8 = void 0, this.modelMeshes = void 0, this.camera = new fB, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new lT(iT.lost), this.deviceLost = this.refusals.deviceLost, this.goT = new EB(TT, BT, FT, iT.limits, XT), (0, ET.D)({
          kS: TT => {
            JT(TT) && XT.textureSlot(TT)
          },
          loaded: TT => JT(TT) ? XT.textureLoaded(TT) : null,
          canvasUpdated: (TT, oT, IT) => {
            JT(TT) && XT.canvasUpdated(TT, oT, IT)
          }
        }), this.K8 = kT.K8, this.modelMeshes = kT.modelMeshes, oT.camera = this.camera
      }
      get castsEntitySunShadows() {
        var TT, oT;
        return null !== (TT = null === (oT = this.sunShadow) || void 0 === oT ? void 0 : oT.tracesEntities) && void 0 !== TT && TT
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(TT) {
        this.modelMeshes.attach(TT.model, TT.sceneMirror);
        const oT = TT.NK;
        this.setClearColour(oT.clearColor.r, oT.clearColor.g, oT.clearColor.b), oT.draw = () => {
          this.drawFrame(TT, oT)
        }
      }
      render(TT) {
        try {
          this.goT.xR(), TT.NK.render()
        } catch (oT) {
          throw this.refusals.frameFailed(oT), oT
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var TT, oT, IT, iT;
        const zT = [...this.particles.describePendingWork(), ...null !== (TT = null === (oT = this.sunShadow) || void 0 === oT ? void 0 : oT.describePendingWork()) && void 0 !== TT ? TT : []],
          kT = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (IT = this.terrain.sceneDepth) && void 0 !== IT && IT.compiling ? 1 : 0) + (null !== (iT = this.terrain.shadowMask) && void 0 !== iT && iT.compiling ? 1 : 0);
        kT > 0 && zT.push(`${kT} Lite pipelines compiling`);
        const WT = this.terrain.buffersAwaitingVerdict;
        WT > 0 && zT.push(`${WT} Lite terrain buffers awaiting their out-of-memory verdict`);
        const XT = this.resources.texturesLoading;
        return XT > 0 && zT.push(`${XT} Lite textures loading`), zT
      }
      prepareTexture(TT) {
        return null !== this.resources.boundTexture(TT) || this.resources.textureFailed(TT)
      }
      drawFrame(TT, oT) {
        var IT, iT, zT, kT, WT, XT;
        const BT = cX(TT);
        this.camera.copyFromView(BT), this.setClearColour(BT.clearColour[0], BT.clearColour[1], BT.clearColour[2]), null === (IT = this.sunShadow) || void 0 === IT || IT.prepare(TT.FL, BT.eye, null !== (iT = TT.FL.Fc) && void 0 !== iT ? iT : null), this.terrain.prepare(TT, BT), null === (zT = this.terrain.sceneDepth) || void 0 === zT || zT.setPlanes(BT.near, BT.far), null === (kT = this.terrain.shadowMask) || void 0 === kT || kT.prepare(BT), VW(this.sceneTask), this.meshes.prepare(oT, BT, TT.model.earthSky, null !== (WT = TT.FL.Fc) && void 0 !== WT ? WT : null), this.particles.prepare(BT);
        const FT = performance.now();
        this.resources.flushUploads(), null === (XT = this.sunShadow) || void 0 === XT || XT.traceEntities(this.meshes);
        try {
          (0, qT.n)(this.engine, this.lastFrameTime > 0 ? FT - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = FT
      }
      setClearColour(TT, oT, IT) {
        const iT = this.NK.clearColor;
        iT.r = TT, iT.g = oT, iT.b = IT, iT.a = 1
      }
    }
    const jB = "WebGPU device lost while Lite was starting";

    function JB(TT, oT) {
      return "object" === typeof TT && null !== TT ? Object.assign(TT, {
        startStep: oT
      }) : TT
    }
    async function UB(TT, oT) {
      const IT = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!IT) throw JB(new Error("No WebGPU adapter"), "no_adapter");
      const iT = IT.info,
        zT = {
          vendor: (null === iT || void 0 === iT ? void 0 : iT.vendor) || "unknown vendor",
          renderer: (null === iT || void 0 === iT ? void 0 : iT.architecture) || "unknown renderer",
          version: (null === iT || void 0 === iT ? void 0 : iT.description) || "unknown version"
        },
        kT = function(TT) {
          const oT = {};
          for (const IT in TT.limits) {
            const iT = TT.limits[IT];
            "number" === typeof iT && (oT[IT] = iT)
          }
          return oT
        }(IT);
      let WT;
      TT.style.background = "black";
      try {
        WT = await (0, qT.h)(TT, {
          msaaSamples: oT.VoT ? 4 : 1,
          requiredLimits: kT,
          alphaMode: "premultiplied"
        })
      } catch (ST) {
        throw JB(ST, "#47" === (null === (XT = ST) || void 0 === XT ? void 0 : XT.message) ? "no_adapter" : "device")
      }
      var XT;
      const BT = function(TT) {
        return TT._device
      }(WT);
      let FT = null;
      BT.lost.then((TT => {
        FT = TT, console.error(`WebGPU device lost (${TT.reason}): ${TT.message}`)
      }));
      try {
        const IT = await async function(TT, oT, IT, iT, zT, kT) {
          const WT = (0, ZT.c)(TT),
            XT = new NW(TT, oT),
            BT = new PX(oT),
            FT = new JW(oT, XT, (TT => function(TT, oT) {
              for (const iT of VT(TT)) {
                var IT;
                if (iT._targetSignature === oT) return null !== (IT = iT._sceneBG) && void 0 !== IT ? IT : null
              }
              return null
            }(WT, TT))),
            ST = new vB(oT, XT);
          for (const xT of function(TT, oT, IT) {
              return [oT.opaqueRenderable, TT.opaqueRenderable, TT.skyLastRenderable, IT.renderable, oT.transparentRenderable, TT.transparentRenderable, TT.frontRenderable]
            }(FT, BT, ST)) dT(WT, xT);
          const DT = function(TT) {
            for (const oT of VT(TT))
              if ("NK" === oT.name) return oT;
            throw new Error("Lite: the scene has no render task named scene")
          }(WT);
          zT && BT.installSceneDepth(DT, TT);
          const LT = kT ? new KB(oT, kT.entities) : null;
          BT.sunShadow = LT, LT && null !== kT && void 0 !== kT && kT.entities && (BT.shadowMask = new CX(oT, DT, TT, BT));
          return FT.sunShadow = LT, await (0, ZT.g)(WT), new CB(TT, WT, DT, oT, BT, FT, ST, XT, IT, iT, LT)
        }(WT, BT, TT, zT, oT.sceneDepth, oT.sunShadow);
        if (null !== FT) {
          const {
            reason: TT,
            message: oT
          } = FT;
          throw Object.assign(new Error(`${jB} (${TT}): ${oT}`), {
            fallbackReason: jB
          })
        }
        return IT
      } catch (ST) {
        throw BT.destroy(), null === FT ? ST : JB(ST, "device")
      }
    }
  },
  39679: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => xT,
      B: () => cT,
      c: () => zT,
      d: () => iT,
      e: () => LT,
      h: () => ST,
      l: () => MT,
      n: () => kT,
      q: () => XT,
      r: () => BT,
      v: () => WT,
      z: () => KT
    });
    const iT = 3,
      zT = 0,
      kT = 1,
      WT = 2,
      XT = {
        uniform: 3,
        jL: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      BT = 10,
      FT = "BloxdPackInputs",
      ST = "bloxdPackInputs",
      DT = [{
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
      LT = 80;

    function xT() {
      const TT = DT.map((TT => {
        let {
          name: oT,
          type: IT
        } = TT;
        return `    ${oT}: ${IT},\n`
      })).join("");
      return `struct ${FT} {\n${TT}}\n@group(${iT}) @binding(${zT}) var<uniform> ${ST}: ${FT};\n`
    }

    function cT(TT, oT) {
      const IT = new DataView(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, LT),
        [iT, zT, kT, WT, XT, BT] = DT;
      IT.setFloat32(iT.offset, oT.seconds, !0), IT.setUint32(zT.offset, oT.lit ? 1 : 0, !0);
      for (let FT = 0; FT < 3; FT++) IT.setInt32(kT.offset + 4 * FT, oT.renderOffset[FT], !0), IT.setFloat32(WT.offset + 4 * FT, oT.f_[FT], !0), IT.setFloat32(XT.offset + 4 * FT, oT.eyePosition[FT], !0), IT.setFloat32(BT.offset + 4 * FT, oT.shadowDirection[FT], !0)
    }

    function KT(TT) {
      const oT = new Uint32Array(Math.max(1, TT.length));
      return TT.forEach(((TT, IT) => {
        let {
          id: iT,
          rotation: zT
        } = TT;
        oT[IT] = 65535 & iT | (3 & zT) << 16
      })), oT
    }
    const MT = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);