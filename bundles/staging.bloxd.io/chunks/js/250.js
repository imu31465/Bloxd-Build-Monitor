export const id = 250;
export const ids = [250];
export const modules = {
  40322: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => HB,
      c: () => JB,
      g: () => lB,
      k: () => gB
    });
    var VB = dB(36180),
      yB = dB(37681),
      pB = dB(37673);

    function lB(BB, TB, dB, VB) {
      const yB = pB.s;
      TB.fill(0), BB.gravity.toArray(TB, yB.gravity), BB.colorDead.toArray(TB, yB.colorDead), dB[yB.ramp] = BB.useRampGradients ? 1 : 0;
      const lB = BB.getColorGradients(),
        JB = LB(BB, lB, "colour", VB);
      dB[yB.colorCount] = JB;
      for (let pB = 0; pB < JB; pB++) {
        var YB;
        const BB = lB[OB(lB, pB)];
        TB[yB.colorPositions + pB] = BB.gradient, BB.color1.toArray(TB, yB.color1 + 4 * pB), (null !== (YB = BB.color2) && void 0 !== YB ? YB : BB.color1).toArray(TB, yB.color2 + 4 * pB)
      }
      const gB = BB.getVelocityGradients(),
        oB = LB(BB, gB, "bu", VB);
      dB[yB.velocityCount] = oB;
      for (let pB = 0; pB < oB; pB++) vB(TB, yB.bu + 4 * pB, gB[OB(gB, pB)]);
      const kB = BB.useRampGradients ? BB.getColorRemapGradients() : null,
        DB = LB(BB, kB, "colour remap", VB);
      dB[yB.remapCount] = DB;
      for (let pB = 0; pB < DB; pB++) vB(TB, yB.remap + 4 * pB, kB[OB(kB, pB)])
    }

    function JB() {
      return {
        key: [],
        texels: new Uint8Array(4 * pB.k)
      }
    }
    const YB = [];

    function gB(BB, TB) {
      return oB(BB, YB), !EB(YB, TB.key) && (TB.key.length = 0, TB.key.push(...YB), TB.key.length > 0 && function(BB, TB) {
        for (let dB = 0; dB < pB.k; dB++) yB.l.GetCurrentGradient(dB / pB.k, BB, ((BB, TB, dB) => {
          VB.Color3.LerpToRef(BB.color, TB.color, dB, kB)
        })), TB[4 * dB] = 255 * kB.r, TB[4 * dB + 1] = 255 * kB.g, TB[4 * dB + 2] = 255 * kB.b, TB[4 * dB + 3] = 255
      }(BB.getRampGradients(), TB.texels), !0)
    }

    function oB(BB, TB) {
      TB.length = 0;
      const dB = BB.useRampGradients ? BB.getRampGradients() : null;
      if (null !== dB && void 0 !== dB && dB.length) {
        TB.push(dB.length);
        for (const BB of dB) TB.push(BB.gradient, BB.color.r, BB.color.g, BB.color.b)
      }
    }
    const kB = new VB.Color3;

    function LB(BB, TB, dB, VB) {
      return TB ? TB.length > pB.e ? (VB(`particleStops:${dB}`, `GPU particles use the first 2 and last ${pB.e-2} of more than ${pB.e} ${dB} gradient stops (${BB.name})`), pB.e) : TB.length : 0
    }

    function OB(BB, TB) {
      return TB < 2 || BB.length <= pB.e ? TB : BB.length - pB.e + TB
    }
    const DB = new Float32Array(pB.n),
      uB = new Uint32Array(DB.buffer);

    function HB(BB, TB, dB) {
      return lB(BB, DB, uB, dB), TB && EB(uB, TB) ? null : uB.slice()
    }

    function EB(BB, TB) {
      if (BB.length !== TB.length) return !1;
      for (let dB = 0; dB < BB.length; dB++)
        if (BB[dB] !== TB[dB]) return !1;
      return !0
    }

    function vB(BB, TB, dB) {
      var VB;
      BB[TB] = dB.gradient, BB[TB + 1] = dB.factor1, BB[TB + 2] = null !== (VB = dB.factor2) && void 0 !== VB ? VB : dB.factor1
    }
  },
  40314: (BB, TB, dB) => {
    function VB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const TB = new Set;
      return (dB, VB) => {
        TB.has(dB) || (TB.add(dB), console.warn(BB + VB))
      }
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  40358: (BB, TB, dB) => {
    dB.d(TB, {
      createLiteRendererAsync: () => KY,
      liteBabylonBackend: () => aB,
      setPipelineFailureHook: () => xy
    });
    var VB = dB(36180),
      yB = dB(36469),
      pB = dB(36817),
      lB = dB(36067),
      JB = dB(36830);
    class YB extends JB.e {
      constructor() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        super(...TB), this.color = new VB.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: TB[0].jU().getUniqueId(),
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
          needAlphaBlendingForMesh: BB => BB.visibility < 1 || BB.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const gB = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      oB = BB => 1 << gB.indexOf(BB),
      kB = oB("VERTEXCOLOR"),
      LB = oB("INSTANCES"),
      OB = oB("THIN_INSTANCES"),
      DB = oB("INSTANCESCOLOR"),
      uB = oB("FOG"),
      HB = oB("LITE_FRONT_LAYER");

    function EB(BB, TB, dB, VB) {
      let yB = 0;
      return BB.isVerticesDataPresent("color") && (yB |= kB), "none" !== TB && (yB |= LB), "thin" === TB && (yB |= OB, BB.isVerticesDataPresent("instanceColor") && (yB |= DB)), VB.fogEnabled && BB.applyFog && 0 !== VB.fogMode && (yB |= uB), dB >= 1 && (yB |= HB), yB
    }

    function vB(BB, TB) {
      BB.updateColor4("color", TB.color, TB.alpha)
    }
    var mB = dB(36762),
      iB = dB(36272),
      NB = dB(36211),
      tB = dB(36033),
      fB = dB(36751),
      sB = dB(36759),
      MB = dB(36054),
      zB = dB(36062),
      wB = dB(36074);
    const UB = tB.b.GLSL;
    class FB {
      constructor(BB, TB) {
        this.name = BB, this.Gu = TB, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.lF = {
          addOnce: BB => {
            this.disposers.push(BB)
          }
        }, this.uniqueId = TB.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      jU() {
        return this.Gu
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
      needAlphaBlendingForMesh(BB) {
        return (0, MB.P)(this.model, BB.visibility, BB.hasVertexAlpha)
      }
      needAlphaTestingForMesh(BB) {
        return (0, MB.S)(this.model, BB.visibility, BB.hasVertexAlpha)
      }
      dispose() {
        (0, iB.g)(this);
        for (const BB of this.disposers.splice(0)) BB()
      }
      get model() {
        return (0, MB.X)(this)
      }
    }
    const KB = new WeakSet;

    function rB(BB) {
      return KB.has(BB)
    }

    function IB(BB) {
      KB.add(BB)
    }
    const cB = {
      create: (BB, TB) => ((0, NB.n)(BB, new FB(BB.name, TB)), zB.d.defines()),
      write: () => {},
      addFeature: (BB, TB) => {
        const dB = BB.mirror;
        TB.feature === sB.m && TB.state.dirLightCount > 0 && (BB.disableLighting = !0, (0, MB.U)(BB)), "BLOXD_LIGHTING" in TB.defines && (0, iB.f)(dB), TB.feature === fB.k && ((0, mB.h)(TB.state, UB), function(BB, TB) {
          const dB = BB.jU().PD();
          TB.textures.forEach(((VB, yB) => {
            setTimeout((() => {
              var pB, lB;
              const {
                url: JB
              } = VB.source;
              dB.atlasArray(JB, null !== (pB = null === (lB = TB.sources.pixels) || void 0 === lB ? void 0 : lB[yB]) && void 0 !== pB ? pB : null, TB.sources.layerWidth).then((dB => {
                (0, mB.b)(BB, TB, yB, dB, dB.layerWidth, dB.layers, UB)
              })).catch((BB => {
                console.error(`Failed to build texture array for atlas ${yB}`, BB)
              }))
            }))
          }))
        }(dB, TB.state))
      },
      texture: (BB, TB, dB) => {
        let {
          data: VB,
          sets: yB
        } = dB;
        var pB;
        (IB(BB), VB) && (BB.uvSet = null !== (pB = null === yB || void 0 === yB ? void 0 : yB.coordinatesIndex) && void 0 !== pB ? pB : 0, (0, NB.Q)(BB.matrix, null !== yB && void 0 !== yB ? yB : {}))
      },
      cube: IB,
      canvas: (BB, TB, dB) => {
        let {
          width: VB,
          height: yB,
          mipmaps: pB,
          samplingMode: lB = wB.e.trilinear,
          hasAlpha: JB = !1,
          wrap: YB = wB.b.clamp
        } = dB;
        const gB = BB.PD().createCanvas(VB, yB),
          oB = new wB.i("2d", {
            kind: "canvas",
            width: VB,
            height: yB,
            canvas: gB
          }, {
            samplingMode: lB,
            wrapU: YB,
            wrapV: YB,
            noMipmap: !pB,
            invertY: !0
          });
        return oB.hasAlpha = JB, IB(oB), oB
      }
    };
    var SB = dB(36301),
      PB = dB(36150);
    class QB {
      constructor(BB, TB, dB) {
        this.engine = BB, this.clearColor = TB, this.ambientColor = dB, this.onBeforeRenderObservable = new PB.e, this.onBeforeCameraRenderObservable = new PB.e, this.onAfterRenderObservable = new PB.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.kN = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      PD() {
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
      addPendingData(BB) {
        this.pending.push(BB)
      }
      removePendingData(BB) {
        const TB = this.pending.indexOf(BB); - 1 !== TB && this.pending.splice(TB, 1)
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

    function RB() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const aB = {
      gyB: RB,
      JyB: (BB, TB) => {
        const dB = new QB(BB.engine, VB.d.FromArray(TB.clearColor), VB.Color3.FromArray(TB.ambientColor));
        (0, lB.c)(cB, dB), BB.Gu = dB,
          function(BB, TB) {
            const dB = Object.assign((0, SB.g)(BB, "camera"), {
              layerMask: 268435455
            });
            BB.model.nodes.setWorldSource(dB.row, BB.model.view.worldMatrix), BB.camera = TB.activeCamera = dB
          }(BB, dB), (0, yB.h)(BB, ((BB, TB, dB) => (0, pB.i)(BB, TB, dB, JB.e)))
      },
      VyB: () => {},
      setBabylonFog: () => {},
      oyB: RB,
      OyB: () => {},
      linesFromArrays: (BB, TB, dB) => (0, pB.i)(BB, TB, dB, YB),
      qu: () => {},
      LyB: RB
    };
    var ZB = dB(40420),
      XB = dB(40429);
    class WB {
      constructor(BB) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const TB = new Promise((BB => {
          this.refused = BB
        }));
        this.deviceLost = Promise.race([BB, TB])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(BB) {
        (function(BB) {
          const {
            name: TB,
            message: dB
          } = null !== BB && void 0 !== BB ? BB : {};
          return "InvalidStateError" === TB && "string" === typeof dB && dB.startsWith("GPUDevice.")
        })(BB) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: BB.message,
          framesRefused: !0
        }))
      }
    }
    class hB {
      constructor(BB) {
        this.resources = BB, this.matrixKey = {
          Kk: 0
        }, this.attributesKey = {
          Kk: 0
        }, this.inputs = Object.create(null);
        for (let TB = 0; TB < 4; TB++) this.inputs[`world${TB}`] = new qB(this.matrixKey, 16 * TB, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(BB, TB) {
        this.resources.vertexBufferCreated(this.matrixKey, BB, !0), TB && this.resources.vertexBufferCreated(this.attributesKey, TB, !0)
      }
    }
    class CB extends hB {
      constructor(BB, TB, dB) {
        super(BB), this.mesh = TB, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const VB = this.inputs;
        let yB = 0;
        for (const {
            size: lB
          }
          of dB) yB += lB;
        for (const {
            name: lB,
            offset: JB,
            size: YB,
            type: gB
          }
          of dB) VB[lB] = new qB(this.attributesKey, 4 * JB, 4 * yB, YB, !0, gB);
        this.rowStride = yB, BB.I5.set(TB, this);
        const pB = TB.isVerticesDataPresent;
        TB.isVerticesDataPresent = (BB, dB) => BB in VB || pB.call(TB, BB, dB)
      }
      attach(BB, TB) {
        this.matrices = BB, this.attributes = TB, this.bind(BB, TB), this.mirror(BB, BB.length, BB.length / 16)
      }
      f6(BB) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, BB ? 64 * BB : void 0)
      }
      M6() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(BB, TB) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * BB, 16 * TB)
      }
      attributeRows(BB, TB) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, BB * this.rowStride, TB * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(BB, TB, dB) {
        const VB = this.mesh._thinInstanceDataStorage;
        VB.matrixData = BB, VB.matrixBufferSize = TB, VB.worldMatrices = null, VB.instancesCount = dB
      }
    }
    class GB extends hB {
      constructor(BB, TB, dB) {
        var VB, yB, pB, lB;
        super(BB), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (VB = null === dB || void 0 === dB ? void 0 : dB.interleavedKinds) && void 0 !== VB ? VB : null, this.offsets = null !== (yB = null === dB || void 0 === dB ? void 0 : dB.interleavedOffsets) && void 0 !== yB ? yB : [], this.rowStride = null !== (pB = null === dB || void 0 === dB ? void 0 : dB.interleavedRowStride) && void 0 !== pB ? pB : 0, null === (lB = this.layout) || void 0 === lB || lB.forEach(((BB, TB) => {
          this.inputs[BB] = new qB(this.attributesKey, 4 * this.offsets[TB], 4 * this.rowStride, dB.strides[BB])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), BB.batchUploads.set(TB, this), TB.lF.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(BB) {
        const TB = this.packedBatch;
        return TB.renderSelf ? 0 === BB ? this.packedSource : TB.instances[BB - 1] : TB.instances[BB]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(BB, TB, dB, VB) {
        const yB = (TB.renderSelf ? 1 : 0) + TB.rows.length;
        if (this.frame = VB, this.count = yB, this.packedSource = BB, this.packedBatch = TB, 0 === yB) return;
        if (BB.getWorldMatrix(), 16 * yB > this.matrices.length) {
          let BB = this.matrices.length / 16;
          for (; BB < yB;) BB *= 2;
          this.matrices = new Float32Array(16 * BB), this.attributes &&= new Float32Array(BB * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let pB = 0;
        TB.renderSelf && this.packRow(pB++, BB, TB.row, dB);
        for (let lB = 0; lB < TB.rows.length; lB++) this.packRow(pB++, TB.instances[lB], TB.rows[lB], dB);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * yB), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, yB * this.rowStride)
      }
      packRow(BB, TB, dB, VB) {
        const yB = this.matrices;
        if (dB < 0) yB.set(TB.getWorldMatrix().m, 16 * BB);
        else
          for (let gB = 0; gB < 16; gB++) yB[16 * BB + gB] = VB[16 * dB + gB];
        const pB = this.attributes;
        if (!pB) return;
        const lB = TB.sK,
          JB = this.layout;
        for (let gB = 0; gB < JB.length; gB++) {
          var YB;
          const TB = null !== (YB = lB[JB[gB]]) && void 0 !== YB ? YB : 0,
            dB = BB * this.rowStride + this.offsets[gB];
          TB.toArray ? TB.toArray(pB, dB) : TB.copyToArray ? TB.copyToArray(pB, dB) : pB[dB] = TB
        }
      }
    }
    class qB {
      constructor(BB, TB, dB, VB) {
        let yB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = BB, this.byteOffset = TB, this.byteStride = dB, this.size = VB, this.instanced = yB, this.type = pB, this.normalized = lB
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
    const xB = "CANVAS_ALPHA_ONE",
      jB = `override ${xB}: bool = false;`,
      AB = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function bB(BB, TB, dB) {
      var VB;
      let yB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const pB = null !== (VB = TB._colorFormat) && void 0 !== VB ? VB : "bgra8unorm",
        lB = yB ? 15 : 0;
      return dB ? {
        ...BB,
        targets: [{
          format: pB,
          blend: {
            color: dB,
            alpha: AB
          },
          writeMask: lB
        }]
      } : {
        ...BB,
        constants: {
          ...BB.constants,
          [xB]: 1
        },
        targets: [{
          format: pB,
          writeMask: lB
        }]
      }
    }

    function nB(BB, TB) {
      BB._renderables.push(TB)
    }

    function eB(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = BB._frameGraph) || void 0 === dB ? void 0 : dB._tasks) && void 0 !== TB ? TB : []
    }

    function BT(BB) {
      return BB._currentEncoder
    }

    function TT(BB) {
      return BB.createBindGroupLayout({
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
    const dT = "greater-equal",
      VT = 2e5,
      yT = 1e5,
      pT = new WeakMap;

    function lT(BB, TB) {
      let dB = pT.get(BB);
      if (!dB) {
        dB = {
          module: BB.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, pT.set(BB, dB)
      }
      const VB = `${TB._colorFormat}|${TB._depthStencilFormat}|${TB._sampleCount}`;
      let yB = dB.pipelines.get(VB);
      if (!yB) {
        var pB;
        const {
          module: lB
        } = dB;
        yB = BB.createRenderPipeline({
          label: `placeholder ${VB}`,
          layout: BB.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: lB,
            entryPoint: "v"
          },
          fragment: {
            module: lB,
            entryPoint: "f",
            targets: [{
              format: null !== (pB = TB._colorFormat) && void 0 !== pB ? pB : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: TB._depthStencilFormat ? {
            format: TB._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: TB._sampleCount
          }
        }), dB.pipelines.set(VB, yB)
      }
      return yB
    }

    function JT(BB, TB, dB) {
      const VB = TB.eye,
        yB = TB.viewMatrix;
      BB[0] = VB[0] + yB[2] * dB, BB[1] = VB[1] + yB[6] * dB, BB[2] = VB[2] + yB[10] * dB
    }
    var YT = dB(36864),
      gT = dB(40314),
      oT = dB(36050);
    const kT = Math.PI,
      LT = kT / 1.95,
      OT = [5e-4 / 94, 125e-7, 5e-4 / 18],
      DT = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((BB => {
        let [TB, dB] = BB;
        return .434 * kT * Math.pow(2 * kT / TB, 2) * dB
      }));

    function uT(BB, TB, dB) {
      const {
        up: VB,
        mieDirectionalG: yB
      } = BB, pB = 1 - vT(1 - Math.exp(TB[1] / 45e4), 0, 1), lB = BB.rayleigh - (1 - pB), JB = Math.hypot(TB[0], TB[1], TB[2]), YB = JB > 0 ? 1 / JB : 0, gB = dB.sunDir;
      for (let OB = 0; OB < 3; OB++) gB[OB] = TB[OB] * YB;
      const oB = gB[0] * VB[0] + gB[1] * VB[1] + gB[2] * VB[2],
        kB = 1e3 * Math.max(0, 1 - Math.exp(-(LT - Math.acos(vT(oB, -1, 1))) / 1.5));
      dB.sunE = kB;
      const LB = .2 * BB.turbidity * 1e-17 * BB.mieCoefficient;
      for (let OB = 0; OB < 3; OB++) {
        const BB = OT[OB] * lB,
          TB = DT[OB] * LB,
          VB = kB / (BB + TB);
        dB.inScatterR[OB] = BB * VB, dB.inScatterM[OB] = TB * VB, dB.extinctionBeta[OB] = 8400 * BB + 1250 * TB
      }
      return dB.sunsetMix = vT(Math.pow(1 - oB, 5), 0, 1), dB.sunDiscE = 19e3 * kB, dB.mieScale = (1 - yB * yB) / (4 * kT), dB.mieBase = 1 + yB * yB, dB.mieSlope = 2 * yB, dB
    }
    const HT = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const ET = 1 / function(BB) {
      const {
        A: TB,
        B: dB,
        C: VB,
        D: yB,
        E: pB,
        F: lB
      } = HT;
      return (BB * (TB * BB + VB * dB) + yB * pB) / (BB * (TB * BB + dB) + yB * lB) - pB / lB
    }(1e3);

    function vT(BB, TB, dB) {
      return Math.min(Math.max(BB, TB), dB)
    }
    const mT = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function iT(BB, TB) {
      const dB = new Map(TB),
        VB = [],
        yB = [],
        pB = () => 0 === yB.length || yB[yB.length - 1].active;
      let lB = null;
      const JB = () => {
        const BB = [...dB].filter((BB => {
            let [, TB] = BB;
            return !0 !== TB
          })),
          TB = BB.map((BB => {
            let [TB] = BB;
            return TB
          })).join("|");
        lB = BB.length ? new RegExp(`\\b(${TB})\\b`, "g") : null
      };
      JB();
      for (const YB of BB.split("\n")) {
        const BB = mT.exec(YB);
        if (!BB) {
          pB() && VB.push(lB ? NT(YB, lB, dB) : YB);
          continue
        }
        const TB = BB[1],
          gB = BB[2].trim();
        if ("ifdef" === TB || "ifndef" === TB || "if" === TB) {
          const BB = pB(),
            VB = "if" === TB ? tT(gB, dB) : dB.has(gB) === ("ifdef" === TB);
          yB.push({
            active: BB && VB,
            parentActive: BB,
            taken: VB
          })
        } else if ("elif" === TB || "else" === TB) {
          const BB = yB[yB.length - 1];
          if (!BB) throw new Error(`#${TB} without #if`);
          const VB = !BB.taken && ("else" === TB || tT(gB, dB));
          BB.active = BB.parentActive && VB, BB.taken = BB.taken || VB
        } else if ("endif" === TB) {
          if (!yB.pop()) throw new Error("#endif without #if")
        } else if (pB()) {
          const [BB, ...VB] = gB.split(/\s+/);
          "undef" === TB ? dB.delete(BB) : dB.set(BB, !VB.length || VB.join(" ")), JB()
        }
      }
      if (yB.length) throw new Error("Unterminated #if");
      return VB.join("\n")
    }

    function NT(BB, TB, dB) {
      return BB.replace(TB, (BB => {
        const TB = dB.get(BB);
        return "string" === typeof TB ? TB : BB
      }))
    }

    function tT(BB, TB) {
      var dB;
      const VB = null !== (dB = BB.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== dB ? dB : [];
      let yB = 0;
      const pB = () => VB[yB],
        lB = () => VB[yB++],
        JB = BB => {
          const dB = /^\d/.test(BB) ? BB : TB.get(BB);
          return "string" === typeof dB ? parseInt(dB) : Number.NaN
        },
        YB = () => {
          const BB = lB();
          if ("!" === BB) return !YB();
          if ("(" === BB) {
            const BB = oB();
            return lB(), BB
          }
          if ("defined" === BB) {
            const BB = "(" === pB();
            BB && lB();
            const dB = lB();
            return BB && lB(), TB.has(dB)
          }
          const dB = pB();
          if ("==" === dB || "!=" === dB || ">" === dB || "<" === dB || ">=" === dB || "<=" === dB) {
            lB();
            const TB = JB(BB),
              VB = JB(lB());
            if (Number.isNaN(TB) || Number.isNaN(VB)) return !1;
            switch (dB) {
              case "==":
                return TB === VB;
              case "!=":
                return TB !== VB;
              case ">":
                return TB > VB;
              case "<":
                return TB < VB;
              case ">=":
                return TB >= VB;
              default:
                return TB <= VB
            }
          }
          return TB.has(BB)
        },
        gB = () => {
          let BB = YB();
          for (;
            "&&" === pB();) {
            lB();
            const TB = YB();
            BB = BB && TB
          }
          return BB
        },
        oB = () => {
          let BB = gB();
          for (;
            "||" === pB();) {
            lB();
            const TB = gB();
            BB = BB || TB
          }
          return BB
        },
        kB = oB();
      if (yB !== VB.length) throw new Error(`Cannot evaluate #if ${BB}`);
      return kB
    }
    var fT = dB(36041),
      sT = dB(36384),
      MT = dB(36388),
      zT = dB(39598),
      wT = dB(37721);
    const UT = 32,
      FT = [10, 3, 10],
      KT = [21, 7, 21],
      rT = KT[0] * KT[1] * KT[2],
      IT = 0,
      cT = 1,
      ST = 2,
      PT = 3,
      QT = 64,
      RT = 512,
      aT = 4 * rT,
      ZT = 1536,
      XT = aT + rT * ZT,
      WT = 1073741824,
      hT = XT + 1;

    function CT(BB, TB) {
      const dB = BB % TB;
      return dB < 0 ? dB + TB : dB
    }

    function GT(BB, TB, dB) {
      return VB = CT(BB, KT[0]), yB = CT(TB, KT[1]), pB = CT(dB, KT[2]), VB + KT[0] * (yB + KT[1] * pB);
      var VB, yB, pB
    }

    function qT(BB, TB, dB) {
      return BB + 8 * (TB + 8 * dB)
    }

    function xT(BB, TB, dB) {
      return BB + 4 * (TB + 4 * dB)
    }
    const jT = 65535,
      AT = 0,
      bT = 1,
      nT = 2,
      eT = 3;

    function Bd(BB) {
      return Math.ceil(BB * BB / 32)
    }
    const Td = 8192,
      dd = 1 << 18,
      Vd = 65536,
      yd = 294912,
      pd = 128,
      ld = 4096,
      Jd = 16,
      Yd = 16385,
      gd = 81921,
      od = 147457,
      kd = 4194304;
    const Ld = [0, 0, 0],
      Od = [0, 0, 0];

    function Dd(BB, TB, dB, VB) {
      ! function(BB, TB, dB) {
        const [VB, yB, pB] = [BB[0], BB[1], BB[2]];
        let lB, JB, YB;
        Math.abs(yB) < .99 ? (lB = pB, JB = 0, YB = -VB) : (lB = -yB, JB = VB, YB = 0);
        const gB = Math.hypot(lB, JB, YB);
        TB[0] = lB / gB, TB[1] = JB / gB, TB[2] = YB / gB, dB[0] = yB * TB[2] - pB * TB[1], dB[1] = pB * TB[0] - VB * TB[2], dB[2] = VB * TB[1] - yB * TB[0]
      }(VB, Ld, Od);
      const yB = 1 / 32;
      for (const [pB, lB] of [
          [0, Ld],
          [4, Od]
        ]) {
        for (let dB = 0; dB < 3; dB++) BB[TB + pB + dB] = lB[dB] * yB;
        BB[TB + pB + 3] = -(lB[0] * dB[0] + lB[1] * dB[1] + lB[2] * dB[2]) * yB
      }
    }
    class ud {
      constructor() {
        this.words = new Uint32Array(od), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      tO(BB, TB) {
        this.parts = 0, this.refs = 0, this.view = BB, this.viewAt = TB;
        const dB = BB[TB + 1] * BB[TB + 6] - BB[TB + 2] * BB[TB + 5],
          VB = BB[TB + 2] * BB[TB + 4] - BB[TB] * BB[TB + 6],
          yB = BB[TB] * BB[TB + 5] - BB[TB + 1] * BB[TB + 4],
          pB = Math.hypot(dB, VB, yB) || 1;
        this.light[0] = dB / pB, this.light[1] = VB / pB, this.light[2] = yB / pB
      }
      add(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= ld || ! function(BB, TB, dB) {
            const VB = BB[TB],
              yB = BB[TB + 1],
              pB = BB[TB + 2],
              lB = BB[TB + 3],
              JB = BB[TB + 4],
              YB = BB[TB + 5],
              gB = BB[TB + 6],
              oB = BB[TB + 7],
              kB = BB[TB + 8],
              LB = BB[TB + 9],
              OB = BB[TB + 10],
              DB = BB[TB + 11],
              uB = BB[TB + 12],
              HB = BB[TB + 13],
              EB = BB[TB + 14],
              vB = BB[TB + 15],
              mB = VB * YB - yB * JB,
              iB = VB * gB - pB * JB,
              NB = VB * oB - lB * JB,
              tB = yB * gB - pB * YB,
              fB = yB * oB - lB * YB,
              sB = pB * oB - lB * gB,
              MB = kB * HB - LB * uB,
              zB = kB * EB - OB * uB,
              wB = kB * vB - DB * uB,
              UB = LB * EB - OB * HB,
              FB = LB * vB - DB * HB,
              KB = OB * vB - DB * EB,
              rB = mB * KB - iB * FB + NB * UB + tB * wB - fB * zB + sB * MB;
            if (!(Math.abs(rB) > 1e-12)) return !1;
            const IB = 1 / rB;
            return dB[0] = (YB * KB - gB * FB + oB * UB) * IB, dB[1] = (pB * FB - yB * KB - lB * UB) * IB, dB[2] = (HB * sB - EB * fB + vB * tB) * IB, dB[3] = (OB * fB - LB * sB - DB * tB) * IB, dB[4] = (gB * wB - JB * KB - oB * zB) * IB, dB[5] = (VB * KB - pB * wB + lB * zB) * IB, dB[6] = (EB * NB - uB * sB - vB * iB) * IB, dB[7] = (kB * sB - OB * NB + DB * iB) * IB, dB[8] = (JB * FB - YB * wB + oB * MB) * IB, dB[9] = (yB * wB - VB * FB - lB * MB) * IB, dB[10] = (uB * fB - HB * NB + vB * mB) * IB, dB[11] = (LB * NB - kB * fB - DB * mB) * IB, dB[12] = (YB * zB - JB * UB - gB * MB) * IB, dB[13] = (VB * UB - yB * zB + pB * MB) * IB, dB[14] = (HB * iB - uB * tB - EB * mB) * IB, dB[15] = (kB * tB - LB * iB + OB * mB) * IB, !0
          }(TB, dB, this.inverse)) return;
        const {
          view: VB,
          viewAt: yB
        } = this, pB = dB;
        let lB = 1 / 0,
          JB = 1 / 0,
          YB = -1 / 0,
          gB = -1 / 0,
          oB = -1 / 0;
        const [kB, LB, OB] = this.light;
        for (let NB = 0; NB < 8; NB++) {
          const dB = 1 & NB ? BB.hi[0] : BB.lo[0],
            DB = 2 & NB ? BB.hi[1] : BB.lo[1],
            uB = 4 & NB ? BB.hi[2] : BB.lo[2],
            HB = dB * TB[pB] + DB * TB[pB + 4] + uB * TB[pB + 8] + TB[pB + 12],
            EB = dB * TB[pB + 1] + DB * TB[pB + 5] + uB * TB[pB + 9] + TB[pB + 13],
            vB = dB * TB[pB + 2] + DB * TB[pB + 6] + uB * TB[pB + 10] + TB[pB + 14],
            mB = VB[yB] * HB + VB[yB + 1] * EB + VB[yB + 2] * vB + VB[yB + 3],
            iB = VB[yB + 4] * HB + VB[yB + 5] * EB + VB[yB + 6] * vB + VB[yB + 7];
          lB = Math.min(lB, mB), JB = Math.min(JB, iB), YB = Math.max(YB, mB), gB = Math.max(gB, iB), oB = Math.max(oB, kB * HB + LB * EB + OB * vB)
        }
        if (YB < -1 || gB < -1 || lB >= 1 || JB >= 1) return;
        const DB = this.parts++,
          uB = this.rects;
        uB[4 * DB] = Hd(lB), uB[4 * DB + 1] = Hd(JB), uB[4 * DB + 2] = Hd(YB), uB[4 * DB + 3] = Hd(gB);
        const HB = this.inverse,
          {
            cell: EB,
            dims: vB,
            lo: mB
          } = BB,
          iB = gd + DB * Jd;
        for (let NB = 0; NB < 3; NB++) this.floats[iB + 4 * NB] = HB[NB] / EB, this.floats[iB + 4 * NB + 1] = HB[4 + NB] / EB, this.floats[iB + 4 * NB + 2] = HB[8 + NB] / EB, this.floats[iB + 4 * NB + 3] = (HB[12 + NB] - mB[NB]) / EB;
        this.words[iB + 12] = BB.at, this.floats[iB + 13] = oB + .001 * (1 + Math.abs(oB)), this.words[iB + 14] = vB[0] | vB[1] << 8 | vB[2] << 16
      }
      finish() {
        const BB = pd,
          {
            counts: TB,
            rects: dB,
            words: VB
          } = this;
        TB.fill(0);
        let yB = 0,
          pB = 0;
        for (; pB < this.parts; pB++) {
          const VB = 4 * pB,
            lB = (dB[VB + 2] - dB[VB] + 1) * (dB[VB + 3] - dB[VB + 1] + 1);
          if (yB + lB > 65536) break;
          yB += lB;
          for (let yB = dB[VB + 1]; yB <= dB[VB + 3]; yB++)
            for (let pB = dB[VB]; pB <= dB[VB + 2]; pB++) TB[yB * BB + pB]++
        }
        let lB = 0;
        for (let YB = 0; YB < 16384; YB++) VB[YB] = lB, lB += TB[YB], TB[YB] = VB[YB];
        VB[16384] = lB;
        for (let YB = 0; YB < pB; YB++) {
          const yB = 4 * YB;
          for (let pB = dB[yB + 1]; pB <= dB[yB + 3]; pB++)
            for (let lB = dB[yB]; lB <= dB[yB + 2]; lB++) VB[Yd + TB[pB * BB + lB]++] = YB
        }
        const JB = this.floats;
        for (let YB = 0; YB < 16384; YB++) {
          const BB = Yd + VB[YB],
            TB = BB + Math.min(VB[YB + 1] - VB[YB], 64);
          for (let dB = BB + 1; dB < TB; dB++) {
            const TB = VB[dB],
              yB = JB[81934 + TB * Jd];
            let pB = dB - 1;
            for (; pB >= BB && JB[81934 + VB[pB] * Jd] < yB; pB--) VB[pB + 1] = VB[pB];
            VB[pB + 1] = TB
          }
        }
        this.refs = yB
      }
    }

    function Hd(BB) {
      return Math.min(127, Math.max(0, Math.floor((.5 * BB + .5) * pd)))
    }

    function Ed(BB, TB, dB, VB, yB) {
      for (let pB = 0; pB < 4; pB++)
        for (let lB = 0; lB < 4; lB++) yB[4 * pB + lB] = BB[TB + 4 * pB] * dB[VB + lB] + BB[TB + 4 * pB + 1] * dB[VB + 4 + lB] + BB[TB + 4 * pB + 2] * dB[VB + 8 + lB] + BB[TB + 4 * pB + 3] * dB[VB + 12 + lB]
    }

    function vd(BB, TB, dB, VB, yB) {
      const pB = BB[0] - TB,
        lB = BB[1] - dB,
        JB = BB[2] - VB,
        YB = BB[3] - TB,
        gB = BB[4] - dB,
        oB = BB[5] - VB,
        kB = BB[6] - TB,
        LB = BB[7] - dB,
        OB = BB[8] - VB;
      if (Math.min(pB, YB, kB) > yB || Math.max(pB, YB, kB) < -yB) return !1;
      if (Math.min(lB, gB, LB) > yB || Math.max(lB, gB, LB) < -yB) return !1;
      if (Math.min(JB, oB, OB) > yB || Math.max(JB, oB, OB) < -yB) return !1;
      const DB = YB - pB,
        uB = gB - lB,
        HB = oB - JB,
        EB = kB - YB,
        vB = LB - gB,
        mB = OB - oB,
        iB = uB * mB - HB * vB,
        NB = HB * EB - DB * mB,
        tB = DB * vB - uB * EB;
      if (Math.abs(iB * pB + NB * lB + tB * JB) > yB * (Math.abs(iB) + Math.abs(NB) + Math.abs(tB))) return !1;
      const fB = [DB, uB, HB, EB, vB, mB, pB - kB, lB - LB, JB - OB];
      for (let sB = 0; sB < 3; sB++) {
        const BB = fB[3 * sB],
          TB = fB[3 * sB + 1],
          dB = fB[3 * sB + 2];
        for (let VB = 0; VB < 3; VB++) {
          const DB = 0 === VB ? 0 : 1 === VB ? dB : -TB,
            uB = 0 === VB ? -dB : 1 === VB ? 0 : BB,
            HB = 0 === VB ? TB : 1 === VB ? -BB : 0,
            EB = DB * pB + uB * lB + HB * JB,
            vB = DB * YB + uB * gB + HB * oB,
            mB = DB * kB + uB * LB + HB * OB,
            iB = yB * (Math.abs(DB) + Math.abs(uB) + Math.abs(HB));
          if (Math.min(EB, vB, mB) > iB || Math.max(EB, vB, mB) < -iB) return !1
        }
      }
      return !0
    }
    const md = new Float32Array(1);
    new Uint32Array(md.buffer);
    var Nd = dB(37724);

    function td(BB) {
      const [TB, dB, VB] = Nd.s;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${BB.group}) @binding(${BB.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${TB-1}, ${dB-1}, ${VB-1});\n}\n`
    }

    function fd(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [yB, pB, lB] = KT, [JB, YB, gB] = FT, oB = Math.log2(UT), kB = VB ? "var<private> bloxdSpCrossed: bool;\n" : "", LB = VB ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${BB.group}) @binding(${BB.SL}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${BB.group}) @binding(${BB.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${dB?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${kB}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${bT}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${nT}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${dB?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${eT}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${yB}, ${pB}, ${lB});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${yB} * (s.y + ${pB} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${JB}, ${YB}, ${gB}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${oB}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${PT}u) {\n\t\treturn named && state == ${ST}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${aT}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${XT}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${TB?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${TB?`\t\tif (exits && step > 0 && step % ${zd} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${oB}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${IT}u || kind == ${cT}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${ST}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${aT}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${LB}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const sd = {
      group: 0,
      uniform: 0,
      SL: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Md() {
      const BB = sd;
      return `${td(BB)}${fd(BB,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Nd.e}>,\n}\n@group(${BB.group}) @binding(${BB.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${BB.group}) @binding(${BB.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Nd.k})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Nd.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Nd.f}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const zd = 2;
    const wd = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function Ud(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const VB = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${TB.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        yB = "trace" === dB || "lit" === dB,
        pB = "maskEdge" === dB ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        lB = yB ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${TB.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${TB.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===dB?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${pB};\n`;
      return `${VB}${BB.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${yB?function(){const[BB,TB,dB]=Nd.s;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${BB}.0, ${TB}.0, ${dB}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${lB}}\n`:""}${BB.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${TB.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${TB.renderOffset});\n}\n`:""}`
    }
    const Fd = "bloxdSpOwnTexture";

    function Kd(BB) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${BB.texture}) - 1u)))`
    }
    const rd = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${YT.f.map((BB=>{let[TB,dB]=BB;return`\tbloxdSpOut.${TB} = (bloxdSpWord & ${dB}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Id(BB) {
      return `bloxdSpFlags(${BB})`
    }
    const cd = `${zT.g}.eyePosition`;

    function Sd(BB, TB, dB, VB, yB) {
      const pB = BB.indexOf(TB);
      if (pB < 0 || BB.indexOf(TB, pB + 1) >= 0) throw new Error(`Lite's ${yB} program changed at the shader pack ${VB} hook: ${pB<0?"no":"more than one"} anchor (lite/${yB}ShaderPack.ts)`);
      return BB.slice(0, pB) + dB + BB.slice(pB + TB.length)
    }

    function Pd(BB) {
      return BB.sunShadow || BB.airShadow
    }

    function Qd(BB, TB) {
      return TB && Pd(BB)
    }
    const Rd = {
      group: zT.c,
      ...zT.m
    };

    function ad(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!Pd(BB)) return "";
      if (TB) {
        const TB = Rd,
          yB = "trace" === dB || "lit" === dB;
        let pB = "";
        BB.sunShadow && (pB = yB ? `${fd(TB,!0,"lit"===dB)}${VB=TB,`@group(${VB.group}) @binding(${VB.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${VB.group}) @binding(${VB.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(BB, TB, dB) {
          const VB = `@group(${BB}) @binding(${TB}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return dB ? `${VB}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${wd}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((BB=>`\t{\n\t\tlet o = vec2i(${BB});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : VB
        }(TB.group, zT.p, "maskEdge" === dB));
        const lB = {
          shadowDirection: `${zT.g}.shadowDirection`,
          renderOffset: `${zT.g}.renderOffset`,
          eyePosition: `${zT.g}.eyePosition`
        };
        return `${td(TB)}${pB}${function(BB){const[TB,dB,VB]=Nd.s;return`@group(${BB.group}) @binding(${BB.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${BB.group}) @binding(${BB.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${TB}.0, ${dB}.0, ${VB}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(TB)}${Ud(BB,lB,dB)}`
      }
      var VB;
      return `${BB.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${BB.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Zd(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!TB) return "";
      const pB = (lB = "fragmentInputs.vPositionW", JB = BB.sunShadow ? {
        normal: dB,
        flags: VB
      } : null, `\n\tbloxdSpShadowPosition = ${lB};\n${JB?`\tbloxdSpShadowNormal = normalize(${JB.normal});\n\tbloxdSpShadowEmissive = (${JB.flags} & ${YT.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${JB.flags} & ${YT.h}u) != 0u;\n`:""}`);
      var lB, JB;
      return BB.sunShadow && ("mask" === yB || "maskEdge" === yB) ? `${pB}${YB="fragmentInputs.position",gB="maskEdge"===yB,`\n\tbloxdSpShadowPixel = vec2i(${YB}.xy);\n${gB?`\tbloxdSpShadowZ = ${YB}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${YB}.z), dpdy(${YB}.z));\n`:""}`}` : pB;
      var YB, gB
    }
    const Xd = "bloxdSpTextureRotation",
      Wd = "bloxdSpTextureLayers",
      hd = `@group(${zT.c}) @binding(${zT.s}) var<storage, read> ${Wd}: array<u32>;\n`;

    function Cd(BB) {
      return `\tvertexOutputs.vPackTexture = ${Wd}[min(u32(${BB}), arrayLength(&${Wd}) - 1u)];\n`
    }

    function Gd(BB) {
      return void 0 !== BB.uv
    }

    function qd(BB) {
      if (!BB) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Gd(BB)) return function(BB) {
        const {
          texture: TB,
          cells: dB,
          layers: VB
        } = BB, yB = `textureDimensions(${TB}, bloxdSpLevel)`, pB = dB ? `max(vec2u(vec2f(${yB}) / ${dB}), vec2u(1u))` : yB, lB = dB ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${pB};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${dB}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${dB}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${TB}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${yB} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${pB};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${TB}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let JB;
        if (dB)
          if (1 === VB.length) JB = `\treturn bloxdSpOwnTexel(${VB[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const BB = VB.length - 1;
            JB = `\tvar bloxdSpColour = bloxdSpOwnTexel(${VB[BB]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let TB = BB - 1; TB >= 0; TB--) JB += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${VB[TB]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            JB += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else JB = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${BB.id?`var<private> ${Fd}: u32;\n`:""}${lB}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Kd(BB)};\n\treturn ${pB};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${BB.id?Fd:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Kd(BB)};\n${JB}}\n`
      }(BB);
      const TB = BB,
        dB = BB => {
          const dB = BB > 0 ? `bloxdSpLayer - ${TB.layers*BB}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${BB}, ${TB.sampler}, bloxdSpTurned, ${dB}, round(bloxdSpMipLevel));`
        };
      let VB = "";
      for (let pB = 0; pB < TB.count - 1; pB++) VB += `\tif (bloxdSpLayer < ${TB.layers*(pB+1)}u) {\n\t\t${dB(pB)}\n\t}\n`;
      const yB = TB.frame ? `${TB.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Xd}: u32;\n${hd}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Xd} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Xd} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Xd} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${yB}${VB}\t${dB(TB.count-1)}\n}\n`
    }

    function xd(BB, TB, dB) {
      return !!BB.surface && "bloxdDefaultSurface" !== BB.surface && function(BB, TB) {
        return "liquid" === TB || !BB
      }(TB, dB)
    }

    function jd(BB, TB) {
      return BB.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${TB.vertexLocalPosition}, ${Id(TB.vertexFlags)});\n\t\tlet bloxdSpVertex = ${BB.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Ad(BB, TB, dB, VB, yB) {
      if (!BB.surface) return "";
      const pB = (BB, TB) => `\n\tlet bloxdSpTexelUV = ${BB};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${TB}) - 1u));`;
      let lB = "",
        JB = "0u, 0u, vec2f(0.0), 0.0";
      const YB = VB && Gd(VB) ? VB : null,
        gB = VB && !Gd(VB) ? VB : null;
      if (YB) {
        lB = `${YB.id?`\n\tlet bloxdSpTexture = ${YB.id};\n\t${Fd} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${YB.uv};${pB(function(BB,TB){var dB;return`${null!==(dB=BB.levelUv)&&void 0!==dB?dB:BB.cells?`${TB} / ${BB.cells}`:TB} * vec2f(textureDimensions(${BB.texture}))`}(YB,"bloxdSpUv"),YB.texture)}`, JB = (YB.id ? `${Fd}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else gB && (lB = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Xd} = bloxdSpTexture >> 16u;${pB(`fragmentInputs.vMainUV1 * ${(0,fT.kb)(gB.width)}`,"textureAtlas0")}`, JB = `bloxdSpTexture & 0xffffu, ${Xd}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const oB = yB.overlayColour,
        kB = oB ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        LB = "bloxdDefaultSurface" !== BB.surface || oB ? `\n\tbaseColor = vec4f(${kB}, baseColor.a);` : "",
        OB = xd(BB, TB, dB) ? `\n\t${yB.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${lB}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${yB.alpha}, ${yB.enchantTier}, ${yB.enchantColour}, ${yB.enchantSpeed}, ${null!==oB&&void 0!==oB?oB:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${yB.normal}, ${yB.localPosition}, ${Id(yB.flags)}, ${JB});\n\tlet bloxdSpSurface = ${BB.surface}(bloxdSpSurfaceIn);${LB}${OB}\n`
    }
    const bd = "bloxdSpLightIn";

    function nd(BB, TB, dB, VB) {
      if (!BB.light) return "";
      const yB = TB ? `${fT.l}.rgb, ${fT.l}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${fT.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: pB,
          diffuse: lB,
          emissive: JB,
          ambient: YB,
          fogColour: gB,
          fogAlpha: oB,
          normal: kB
        } = VB;
      return `\tvar ${bd} = BloxdLightIn(vec3f(0.0), ${dB?pB:"0.0"}, ${lB}, ${JB}, ${YB}, ${yB}, ${gB}, ${oB}, fragmentInputs.vPositionW, ${kB}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${bd}.litColour = bloxdLitColour(bloxdSpSurface, ${bd});\n`
    }

    function ed(BB) {
      return BB.light ? `\n\t{\n\t\tlet bloxdSpLight = ${BB.light}(bloxdSpSurface, ${bd});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const BV = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      TV = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      dV = "\treturn color;\n}",
      VV = {
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
    const yV = Object.freeze({});

    function pV(BB) {
      var TB;
      return !(null === (TB = (0, wT.h)(BB)) || void 0 === TB || !TB.sceneDepth)
    }

    function lV(BB) {
      const TB = (0, wT.h)(BB);
      return !!TB && xd(TB.hooks, TB.strict, TB.program)
    }

    function JV(BB, TB, dB, VB) {
      return Sd(BB, TB, dB, VB, "terrain")
    }

    function YV(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const pB = function(BB) {
          return (0, wT.d)(BB.packVariant, BB.liquid ? "liquid" : "terrain")
        }(BB),
        {
          hooks: lB
        } = pB,
        JB = Qd(pB, VB),
        YB = "edge" === yB ? "maskEdge" : "plain" === yB ? "mask" : "trace",
        gB = jd(lB, VV);
      gB && (TB = JV(TB, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${gB}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const oB = "atlas" === BB.texture ? {
          count: BB.atlasCount,
          layers: BB.atlasLayers,
          width: BB.M_,
          sampler: "atlasSampler",
          frame: BB.animated ? dB : null
        } : null,
        kB = `${pB.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Zd(pB,JB,VV.normal,VV.flags,YB)}${Ad(lB,pB.strict,pB.program,oB,VV)}`;
      kB && (TB = JV(TB, BV, `${BV.slice(0,-1)}${kB}`, "surface"));
      const LB = ed(lB);
      return LB && (TB = JV(TB, TV, `${nd(lB,BB.lighting,BB.dirLightCount>0,VV)}${TV}`, "light input"), TB = JV(TB, dV, `${LB.slice(1)}${dV}`, "light")), `${(0,zT.y)()}${pB.sceneDepth?`@group(${zT.c}) @binding(${zT.j}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${cd};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${ad(pB,JB,YB)}${qd(oB)}${rd}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${pB.code}${TB}`
    }
    const gV = tB.b.WGSL;

    function oV(BB) {
      return void 0 !== BB.packVariant
    }
    const kV = {
        DyB: 0,
        uyB: 4,
        HyB: 8,
        EyB: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      LV = kV.aoLevels + 4,
      OV = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      DV = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      uV = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      HV = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      EV = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      vV = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      mV = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      iV = 0,
      NV = 3,
      tV = 4,
      fV = 5,
      sV = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${sT.e}, ${sT.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${sT.e}, ${sT.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      MV = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = ((${MT.c}u >> dir) & 1u) == 1u;\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const zV = {
      dL: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: BB => `animDataPerTex[${BB}]`
    };

    function wV(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zV,
        VB = arguments.length > 3 ? arguments[3] : void 0;
      return `\n\tlet atlasIdxIn = ${BB};\n\tlet animTick = ${dB.dL};\n\tlet animTickStride = ${dB.stride};\n\tlet numAnimTextures = ${dB.count};\n\t${(0,fB.g)(tB.b.WGSL,dB.perTexture)}\n\t${TB}animLayer;\n\t${VB?`${VB}animNext;`:""}\n`
    }

    function UV(BB) {
      const TB = BB => `textureSample(diffuseSampler, diffuseSamplerSampler, ${BB})`;
      return BB ? `baseColor = mix(${TB("fragmentInputs.vMainUV1")}, ${TB("fragmentInputs.vMainUV1 + vec2f(0.0, fragmentInputs.vAnimStripNext.x)")}, fragmentInputs.vAnimStripNext.y);` : `baseColor = ${TB("fragmentInputs.vMainUV1")};`
    }

    function FV(BB) {
      const TB = BB.atlasCount > 1 || BB.animated,
        dB = (dB, VB) => {
          const yB = dB > 0 ? `${VB} - ${BB.atlasLayers.toFixed(1)} * ${dB.toFixed(1)}` : VB;
          return `${TB?"textureSampleLevel":"textureSample"}(textureAtlas${dB}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${yB}))${TB?", atlasLod":""})`
        },
        VB = function(TB, VB) {
          let yB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.atlasCount;
          if (1 === yB) return `${TB} = ${dB(0,VB)};`;
          let pB = "";
          for (let lB = 0; lB < yB; lB++) {
            const yB = BB.atlasLayers * (lB + 1) - .5;
            pB += `${lB>0?" else ":"\n\t"}if (${VB} < ${(0,fT.kb)(yB)}) {\n\t\t${TB} = ${dB(lB,VB)};\n\t}`
          }
          return pB
        },
        yB = TB ? `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,fT.kb)(BB.M_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n` : "",
        pB = BB.animated ? `\n\tif (fragmentInputs.texAtlasNext.y > 0.0) {\n\t\tvar atlasNextColor: vec4f;\n\t\t${VB("atlasNextColor","fragmentInputs.texAtlasNext.x",BB.nextFrameAtlases)}\n\t\tbaseColor = mix(baseColor, atlasNextColor, fragmentInputs.texAtlasNext.y);\n\t}` : "";
      return `${yB}${VB("baseColor","fragmentInputs.texAtlasIndex")}${pB}`
    }

    function KV(BB) {
      return `terrain-${BB.texture}${"atlas"===BB.texture?BB.atlasCount:""}${BB.animated?"-anim":""}${void 0!==BB.nextFrameAtlases?`n${BB.nextFrameAtlases}`:""}${BB.alphaTest?"-test":""}${BB.lighting?"-lit":""}-dir${BB.dirLightCount}${BB.packed?"-packed":""}${oV(BB)?`-sp${BB.packVariant}`:""}${BB.liquid?"-liquid":""}${BB.resting?"-rest":""}`
    }

    function rV(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const VB = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const dB = "none" !== BB.texture,
          VB = "atlas" === BB.texture,
          yB = BB.dirLightCount > 0,
          pB = oV(BB);
        if (BB.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${BB.dirLightCount}`);
        let lB = 1,
          JB = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (VB) {
          BB.animated && (JB += `@group(2) @binding(${lB++}) var<storage, read> animDataPerTex: array<f32>;\n`), JB += `@group(2) @binding(${lB++}) var atlasSampler: sampler;\n`;
          for (let TB = 0; TB < BB.atlasCount; TB++) JB += `@group(2) @binding(${lB++}) var textureAtlas${TB}: texture_2d_array<f32>;\n`
        } else "single" === BB.texture && (JB += `@group(2) @binding(${lB++}) var diffuseSamplerSampler: sampler;\n`, JB += `@group(2) @binding(${lB++}) var diffuseSampler: texture_2d<f32>;\n`);
        const YB = function(BB) {
            const TB = mV,
              dB = "none" !== BB.texture,
              VB = "atlas" === BB.texture,
              yB = oV(BB);
            return BB.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${dB?"uv: vec2f,":""}\n\t${VB?"texAtlasIndices: f32,":""}\n\t${BB.lighting?"aPackedLightLevels: f32,":""}\n\t${yB?"blockFlagWords: vec2u,":""}\n}\n${sV}\n${MV}\n${"single"===BB.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\tlet ao = (r2 >> (3u + 2u * slot)) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${dB?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===BB.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${VB?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${BB.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${yB?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${TB.position}) position: vec3f,\n\t@location(${TB.normal}) normal: vec4f,\n\t@location(${TB.color}) color: vec4f,\n\t${dB?`@location(${TB.uv}) uv: vec2f,`:""}\n\t${BB.lighting?`@location(${TB.packedLight}) aPackedLightLevels: f32,`:""}\n\t${yB?`@location(${TB.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(BB),
          gB = `\n${HV}\n${DV}\n${uV}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${JB}\n${jB}\n${YB.declarations}\nstruct Varyings {\n\t${"none"===TB?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${BB.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${yB?"@location(5) vTerrainLambert: f32,":""}\n\t${dB?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${VB?"@location(7) texAtlasIndex: f32,":""}\n\t${BB.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${pB?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${pB&&VB?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n\t${VB&&BB.animated?"@location(11) texAtlasNext: vec2f,":""}\n\t${"single"===BB.texture&&BB.animated?"@location(11) vAnimStripNext: vec2f,":""}\n}\n\n${BB.resting?"":(0,fT.r)(gV)}\n${vV}\n\n@vertex\nfn mainVertex(${YB.parameter}) -> Varyings {\n\t${YB.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${pB?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${YT.e.placed}u;`:""}\n\t${pB&&VB?Cd("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${BB.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${dB?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${VB?function(BB){return BB?wV("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = ",zV,"vertexOutputs.texAtlasNext = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(BB.animated):""}\n\t${"single"===BB.texture&&BB.animated?"\n\tlet animFramePos = material.anim.x / abs(material.anim.z);\n\tlet frameTick = floor(animFramePos);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tlet animNextTexIndex = frameTick + 1.0 - material.anim.y * floor((frameTick + 1.0) / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n\tvertexOutputs.vAnimStripNext = vec2f((animNextTexIndex - animTexIndex) / material.anim.y, (animFramePos - frameTick) * step(0.0, material.anim.z));\n":""}\n\t${(0,fT.Y)(gV)}\n\t${(0,fT.I)(gV,BB.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":EV}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${VB?FV(BB):""}\n\t${"single"===BB.texture?UV(BB.animated):""}\n\t${dB?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${BB.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${yB?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${xB}));\n\t${oV(BB)?(0,fT.fb)(tB.b.WGSL):(0,fT.P)(gV)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          oB = new Set;
        BB.lighting && oB.add("BLOXD_LIGHTING");
        yB && oB.add("BLOXD_TERRAIN_DIRECTIONAL");
        return iT(gB, new Map([...oB].map((BB => [BB, !0]))))
      }(BB, dB);
      if (!oV(BB)) return VB;
      const yB = YV(BB, VB, wV, TB, dB);
      return "none" === dB ? yB : `${yB}${function(BB){const TB="none"!==BB.texture&&BB.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":EV}\n\t${BB.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${TB&&"atlas"===BB.texture?FV(BB):""}\n\t${TB&&"single"===BB.texture?UV(BB.animated):""}\n\t${TB?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${YT.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(BB)}`
    }
    const IV = new Map([
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

    function cV(BB, TB) {
      const dB = new Map;
      let VB = 0;
      const yB = [],
        pB = [],
        lB = [];
      for (const gB of TB) {
        var JB, YB;
        const TB = null !== (JB = gB.type.trim().split(/\s+/).pop()) && void 0 !== JB ? JB : gB.type,
          oB = IV.get(TB);
        if (!oB) throw new Error(`Lite: no uniform layout for ${gB.name}: ${gB.type}`);
        const kB = null !== (YB = gB.arraySize) && void 0 !== YB ? YB : 0,
          LB = kB ? 4 : oB.align;
        VB = Math.ceil(VB / LB) * LB;
        const OB = kB ? 4 * Math.ceil(oB.floats / 4) : oB.floats;
        if (dB.set(gB.name, {
            offset: VB,
            floats: oB.floats,
            arraySize: kB,
            stride: OB
          }), kB && oB.floats <= 2) {
          const TB = `${BB}_${lB.length}_strided`;
          pB.push(`struct ${TB} {\n\t@size(16) el: ${oB.wgsl},\n}`), lB.push(gB.name), yB.push(`\t@align(16) ${gB.name}: array<${TB}, ${kB}>,`)
        } else kB ? yB.push(`\t@align(16) ${gB.name}: array<${oB.wgsl}, ${kB}>,`) : yB.push(`\t${gB.name}: ${oB.wgsl},`);
        VB += kB ? OB * kB : oB.floats
      }
      return {
        slots: dB,
        floats: Math.max(4, 4 * Math.ceil(VB / 4)),
        wgsl: `${pB.join("\n")}\nstruct ${BB} {\n${yB.join("\n")}\n}\n`,
        stridedArrays: lB
      }
    }
    const SV = [{
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
      PV = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      QV = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function RV(BB, TB) {
      return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nvarying v${TB}UV: vec2f;\n#endif`
    }

    function aV(BB, TB, dB) {
      return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nif (uniforms.v${TB}Infos.x==0.)\n{vertexOutputs.v${TB}UV= (uniforms.${dB}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${TB}UV= (uniforms.${dB}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function ZV(BB, TB, dB) {
      return `#ifdef ${BB}\n#if ${BB}DIRECTUV == 1\n#define v${TB}UV vMainUV1\n#elif ${BB}DIRECTUV == 2\n#define v${TB}UV vMainUV2\n#else\nvarying v${TB}UV: vec2f;\n#endif\nvar ${dB}SamplerSampler: sampler;\nvar ${dB}Sampler: texture_2d<f32>;\n#endif`
    }
    const XV = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      WV = 256,
      hV = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      CV = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      GV = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      qV = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      xV = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      jV = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      AV = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      bV = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${CV}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${RV("OPACITY","Opacity")}\n${RV("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${AV}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${GV}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${aV("OPACITY","Opacity","opacity")}\n${aV("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${qV}\n#define CUSTOM_VERTEX_MAIN_END\n${xV}\n}\n`;
    const nV = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${ZV("OPACITY","Opacity","opacity")}\n${ZV("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${AV}\n${jV}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((BB,TB)=>function(BB){const TB=`
    frame.lights[LITE_LIGHT$ {
        BB
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      BB
    }\
    nvar diffuse$ {
      BB
    }: vec4f = $ {
      TB
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      BB
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      TB
    }.vLightData, diffuse$ {
      BB
    }.rgb, $ {
      TB
    }.vLightSpecular.rgb, diffuse$ {
      BB
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(TB))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, eV = /^([gimus]+)!/, By = new Set;

    function Ty(BB) {
      By.has(BB) || (By.add(BB), console.warn(`Lite: no place for plugin code at ${BB} in the standard shader: it is left out`))
    }

    function dy(BB, TB) {
      let dB = BB;
      const VB = new Map;
      for (const [pB, lB] of TB) {
        var yB;
        VB.set(pB, `${null!==(yB=VB.get(pB))&&void 0!==yB?yB:""}${lB}\n`)
      }
      for (const [pB, lB] of VB) {
        if (!pB.startsWith("!")) {
          const BB = `#define ${pB}`;
          if (!dB.includes(BB)) {
            Ty(pB);
            continue
          }
          dB = dB.replace(BB, (() => `\n${lB}\n${BB}`));
          continue
        }
        let BB = pB.substring(1),
          TB = "g";
        if (BB.startsWith("!")) TB = "", BB = BB.substring(1);
        else {
          const dB = eV.exec(BB);
          dB && (TB = dB[1], BB = BB.substring(TB.length + 1))
        }
        const VB = new RegExp(BB, TB.includes("g") ? TB : `${TB}g`);
        let yB = VB.exec(dB);
        for (yB || Ty(pB); yB;) {
          const BB = yB,
            TB = lB.replace(/\$(\d+)/g, ((TB, dB) => Number(dB) < BB.length ? BB[Number(dB)] : ""));
          dB = dB.substring(0, BB.index) + TB + dB.substring(BB.index + BB[0].length), VB.lastIndex = BB.index + TB.length, yB = VB.exec(dB)
        }
      }
      return dB
    }
    const Vy = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      yy = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      py = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function ly(BB) {
      const TB = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let dB = BB.replace(Vy, ((BB, dB, VB, yB, pB, lB) => ("attribute" === dB ? TB.attributes.push({
        name: pB,
        type: lB
      }) : void 0 === dB ? TB.varyings.push({
        name: pB,
        type: lB,
        interpolation: Yy(lB, VB, yB)
      }) : TB.uniforms.push({
        name: pB,
        type: Jy(lB)
      }), "")));
      return dB = dB.replace(yy, ((BB, dB) => (TB.samplers.add(dB), ""))), dB = dB.replace(py, ((BB, dB, VB) => (TB.textures.push({
        name: dB,
        type: VB
      }), ""))), TB.body = dB, TB
    }

    function Jy(BB) {
      const TB = BB.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        dB = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(TB);
      if (!dB) throw new Error(`Lite: unsupported uniform type ${BB}`);
      return dB
    }

    function Yy(BB, TB, dB) {
      return void 0 === TB && void 0 === dB ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(BB.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === TB ? "@interpolate(flat) " : `@interpolate(${null!==TB&&void 0!==TB?TB:"perspective"}, ${null!==dB&&void 0!==dB?dB:"center"}) `
    }

    function gy(BB) {
      return Oy({
        defines: BB.defines,
        vertex: dy(bV, BB.vertexCode),
        fragment: dy(nV, BB.fragmentCode),
        members: [...SV, ...BB.defines.has("OPACITY") ? PV : [], ...BB.defines.has("EMISSIVE") ? QV : [], ...BB.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function oy(BB) {
      const TB = BB.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (TB === BB) throw new Error("Lite: fragment main has no return");
      return TB
    }
    const ky = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${CV}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${GV}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${qV}\n${xV}\n}\n`,
      Ly = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${jV}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Oy(BB) {
      const TB = BB.defines,
        dB = ly(iT(BB.vertex, TB)),
        VB = ly(iT(BB.fragment, TB)),
        yB = new Map;
      for (const mB of [...dB.varyings, ...VB.varyings]) yB.has(mB.name) || yB.set(mB.name, mB);
      const pB = [...yB.values()].map(((BB, TB) => `\t@location(${TB}) ${BB.interpolation}${BB.name}: ${BB.type},`)),
        lB = [...BB.members];
      for (const mB of [...dB.uniforms, ...VB.uniforms]) lB.some((BB => BB.name === mB.name)) || lB.push(mB);
      const JB = cV(BB.structName, lB),
        YB = [],
        gB = [];
      let oB = 1;
      const kB = new Set;
      for (const mB of [...dB.textures, ...VB.textures]) {
        if (kB.has(mB.name)) continue;
        kB.add(mB.name);
        const BB = `${mB.name}Sampler`,
          TB = oB++,
          dB = oB++,
          VB = mB.type.startsWith("texture_2d_array") ? "2d-array" : mB.type.startsWith("texture_cube") ? "cube" : "2d";
        YB.push({
          name: mB.name,
          binding: TB,
          samplerBinding: dB,
          dimension: VB
        }), gB.push(`@group(2) @binding(${TB}) var ${mB.name}: ${mB.type};`), gB.push(`@group(2) @binding(${dB}) var ${BB}: sampler;`)
      }
      for (const mB of [...dB.samplers, ...VB.samplers])
        if (!kB.has(mB.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${mB} has no texture`);
      const LB = [HV, hV, JB.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${BB.structName};`, ...gB].join("\n"),
        OB = dB.attributes,
        DB = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...dB.attributes.map(((BB, TB) => `\t@location(${TB}) ${BB.name}: ${BB.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        uB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...pB, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        HB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...VB.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...pB, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", jB, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${xB}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        EB = BB => {
          for (const TB of JB.stridedArrays) BB = BB.replace(new RegExp(`\\b${TB}\\s*\\[(.*?)\\]`, "g"), `${TB}[$1].el`);
          return BB
        };
      return {
        vertex: `${LB}\n${DB}\n${uB}\n${EB(dB.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${LB}\n${HB}\n${oy((vB=EB(VB.body),vB.includes("fragmentInputs.position")?vB.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):vB))}`,
        attributes: OB,
        material: JB,
        textures: YB
      };
      var vB
    }
    const Dy = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      uy = BB => ({
        name: BB,
        type: "vec3"
      }),
      Hy = BB => ({
        name: BB,
        type: "float"
      }),
      Ey = cV("EarthSkyUniforms", [uy("viewFrom"), Hy("exposureScale"), uy("zenithOffset"), Hy("fogOn"), uy("up"), Hy("ditherOn"), uy("sun"), Hy("turbidity"), uy("tint"), Hy("rayleigh"), uy("sunDir"), Hy("mieStrength"), uy("inScatterR"), Hy("mieFocus"), uy("inScatterM"), Hy("sunE"), uy("extinctionBeta"), Hy("sunsetMix"), Hy("mieScale"), Hy("mieBase"), Hy("mieSlope"), Hy("sunDiscE"), Hy("exposure")]),
      vy = `${HV}\n${hV}\n${Ey.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      my = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Dy.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      iy = `\n${jB}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(HT).map((BB=>{let[TB,dB]=BB;return`const TONE_${TB}: f32 = ${dB};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${ET};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${xB}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Ny = dB(36119);
    const ty = new Ny.RD,
      fy = new Ny.RD,
      sy = new Ny.Quaternion,
      My = new Float64Array(3),
      zy = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      wy = new Float64Array(16);

    function Uy(BB, TB, dB) {
      const VB = dB.worldMatrix;
      var yB;
      BB.updateFloat3("viewFrom", VB[12], VB[13], VB[14]), BB.updateFloatsFrom("zenithOffset", TB.cameraOffset, 0, 3), BB.updateFloatsFrom("up", TB.up, 0, 3), TB.luminance > 0 && (BB.updateFloat("exposure", TB.luminance), BB.updateFloat("exposureScale", (yB = TB.luminance, Math.log2(2 / Math.pow(yB, 4))))), BB.updateFloat("turbidity", TB.turbidity), BB.updateFloat("rayleigh", TB.rayleigh), BB.updateFloat("mieStrength", TB.mieCoefficient), BB.updateFloat("mieFocus", TB.mieDirectionalG), BB.updateFloatsFrom("tint", TB.tint, 0, 3), BB.updateFloat("fogOn", TB.fog && dB.fogEnabled && 0 !== dB.fogMode ? 1 : 0), BB.updateFloat("ditherOn", TB.dithering ? 1 : 0);
      const pB = TB.sunPosition;
      if (ty.set(pB[0], pB[1], pB[2]), !TB.useSunPosition) {
        const BB = Math.PI * (TB.inclination - .5),
          dB = 2 * Math.PI * (TB.azimuth - .5);
        ty.set(TB.distance * Math.cos(dB) * Math.cos(BB), TB.distance * Math.sin(-BB), TB.distance * Math.sin(dB) * Math.cos(BB)), Ny.Quaternion.FromUnitVectorsToRef(Ny.RD.UpReadOnly, fy.set(TB.up[0], TB.up[1], TB.up[2]), sy), ty.rotateByQuaternionToRef(sy, ty)
      }
      BB.updateVector3("sun", ty), My[0] = ty.x, My[1] = ty.y, My[2] = ty.z;
      const lB = uT(TB, My, zy);
      BB.updateFloatsFrom("sunDir", lB.sunDir, 0, 3), BB.updateFloat("sunE", lB.sunE), BB.updateFloatsFrom("inScatterR", lB.inScatterR, 0, 3), BB.updateFloatsFrom("inScatterM", lB.inScatterM, 0, 3), BB.updateFloatsFrom("extinctionBeta", lB.extinctionBeta, 0, 3), BB.updateFloat("sunsetMix", lB.sunsetMix), BB.updateFloat("sunDiscE", lB.sunDiscE), BB.updateFloat("mieScale", lB.mieScale), BB.updateFloat("mieBase", lB.mieBase), BB.updateFloat("mieSlope", lB.mieSlope)
    }

    function Fy(BB, TB) {
      const dB = wy;
      dB[0] = TB.far, dB[5] = TB.far, dB[10] = TB.far, dB[15] = 1;
      const VB = BB.infiniteDistance;
      for (let yB = 0; yB < 3; yB++) dB[12 + yB] = BB.position[yB] + (VB ? TB.worldMatrix[12 + yB] : 0);
      return wy
    }
    var Ky = dB(37699);

    function ry(BB) {
      return Math.max(4, 4 * Math.ceil(BB / 4))
    }

    function Iy(BB, TB, dB, VB) {
      const yB = BB.createBuffer({
        label: VB,
        size: ry(TB.byteLength),
        usage: dB,
        mappedAtCreation: !0
      });
      return new Uint8Array(yB.getMappedRange(), 0, TB.byteLength).set(new Uint8Array(TB.buffer, TB.byteOffset, TB.byteLength)), yB.unmap(), yB
    }

    function cy(BB, TB) {
      return Math.floor(Math.log2(Math.max(BB, TB))) + 1
    }

    function Sy(BB, TB, dB, VB, yB, pB) {
      const lB = BB.createTexture({
          label: pB,
          size: {
            width: dB,
            height: VB,
            depthOrArrayLayers: yB
          },
          format: "rgba8unorm",
          mipLevelCount: cy(dB, VB),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        JB = (TB, dB, VB, pB) => {
          BB.queue.writeTexture({
            texture: lB,
            mipLevel: dB
          }, TB, {
            bytesPerRow: 4 * VB,
            rowsPerImage: pB
          }, {
            width: VB,
            height: pB,
            depthOrArrayLayers: yB
          })
        };
      JB(TB, 0, dB, VB);
      let YB = 1;
      for (const gB of function*(BB, TB, dB, VB) {
          let yB = BB,
            pB = TB,
            lB = dB;
          for (; pB > 1 || lB > 1;) {
            const BB = Math.max(1, pB >> 1),
              TB = Math.max(1, lB >> 1),
              dB = new Uint8Array(BB * TB * VB * 4),
              JB = 4 * pB;
            let YB = 0;
            for (let gB = 0; gB < VB; gB++) {
              const VB = gB * JB * lB;
              for (let gB = 0; gB < TB; gB++) {
                const TB = VB + Math.min(2 * gB, lB - 1) * JB,
                  oB = VB + Math.min(2 * gB + 1, lB - 1) * JB;
                for (let VB = 0; VB < BB; VB++) {
                  const BB = 4 * Math.min(2 * VB, pB - 1),
                    lB = 4 * Math.min(2 * VB + 1, pB - 1);
                  for (let VB = 0; VB < 4; VB++) dB[YB++] = yB[TB + BB + VB] + yB[TB + lB + VB] + yB[oB + BB + VB] + yB[oB + lB + VB] + 2 >> 2
                }
              }
            }
            yield {
              data: dB,
              width: BB,
              height: TB
            }, yB = dB, pB = BB, lB = TB
          }
        }(TB, dB, VB, yB)) JB(gB.data, YB++, gB.width, gB.height);
      return lB
    }
    const Py = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function Qy(BB) {
      if (BB.startsWith("data:")) {
        const TB = BB.search(/[;,]/);
        return `data:${TB>5?BB.slice(5,TB):""} URL of ${BB.length} characters`
      }
      return BB.length > 80 ? `${BB.slice(0,80)}...` : BB
    }
    async function Ry(BB) {
      const TB = await fetch(BB);
      if (!TB.ok) throw new Error(`${Qy(BB)}: ${TB.status} ${TB.statusText}`);
      return createImageBitmap(await TB.blob(), Py)
    }
    async function ay(BB) {
      const TB = await Ry(BB),
        dB = new OffscreenCanvas(TB.width, TB.height),
        VB = dB.getContext("2d", {
          willReadFrequently: !0
        });
      if (!VB) throw new Error("No 2D context to decode an image");
      VB.drawImage(TB, 0, 0);
      const {
        data: yB
      } = VB.getImageData(0, 0, TB.width, TB.height);
      return TB.close(), {
        pixels: new Uint8Array(yB.buffer, yB.byteOffset, yB.byteLength),
        width: dB.width,
        height: dB.height
      }
    }
    const Zy = new WeakMap;

    function Xy(BB, TB, dB, VB) {
      var yB;
      const pB = null !== (yB = Zy.get(BB)) && void 0 !== yB ? yB : new Map;
      Zy.set(BB, pB);
      let lB = pB.get(TB);
      return lB || (lB = (async yB => {
        const pB = null !== (yB = function(BB, TB) {
          const dB = BB ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : null;
          return null !== dB && void 0 !== dB && dB.byteLength && TB && dB.byteLength % (TB * TB * 4) === 0 ? {
            pixels: dB,
            layerWidth: TB,
            layers: dB.byteLength / (TB * TB * 4)
          } : null
        }(dB, VB)) && void 0 !== yB ? yB : await async function(BB) {
          const {
            pixels: TB,
            width: dB
          } = await ay(BB);
          return {
            pixels: TB,
            layerWidth: dB,
            layers: TB.byteLength / (dB * dB * 4)
          }
        }(TB), {
          layerWidth: lB,
          layers: JB
        } = pB;
        return {
          texture: Sy(BB, pB.pixels, lB, lB, JB, `atlas-${TB}`),
          layerWidth: lB,
          layers: JB
        }
      })(), pB.set(TB, lB), lB.catch((() => {
        pB.delete(TB)
      }))), lB
    }
    const Wy = new Map([
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
      hy = new Map([
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

    function Cy(BB) {
      for (const TB of (0, Ky.k)(BB))
        if (!hy.has((0, Ky.h)(TB))) return !1;
      return !0
    }

    function Gy(BB) {
      const TB = hy.get(BB);
      if (!TB) return null;
      const [dB, VB, yB] = TB;
      return {
        srcFactor: Wy.get(dB),
        dstFactor: Wy.get(VB),
        operation: yB
      }
    }
    let qy = null;

    function xy(BB) {
      qy = BB
    }

    function jy(BB, TB, dB) {
      var VB;
      null === (VB = qy) || void 0 === VB || VB(BB, TB, dB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class Ay {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(BB, TB, dB, VB, yB) {
        dB !== this.pipeline && (BB.setPipeline(dB), this.pipeline = dB), BB.setBindGroup(1, VB, [yB]);
        const pB = TB.material.bindGroup;
        pB !== this.materialGroup && (BB.setBindGroup(2, pB), this.materialGroup = pB);
        const lB = TB.program.packGroup;
        lB && lB !== this.packGroup && (BB.setBindGroup(zT.c, lB), this.packGroup = lB);
        const {
          vertexBuffers: JB,
          vertexOffsets: YB
        } = this;
        for (let gB = 0; gB < TB.vertexBuffers.length; gB++) JB[gB] === TB.vertexBuffers[gB] && YB[gB] === TB.vertexOffsets[gB] || (BB.setVertexBuffer(gB, TB.vertexBuffers[gB], TB.vertexOffsets[gB]), JB[gB] = TB.vertexBuffers[gB], YB[gB] = TB.vertexOffsets[gB]);
        TB.indexBuffer && TB.indexBuffer !== this.indexBuffer && (BB.setIndexBuffer(TB.indexBuffer, TB.indexFormat), this.indexBuffer = TB.indexBuffer)
      }
    }
    class by {
      constructor(BB, TB, dB, VB) {
        this.modelMeshes = BB, this.o2 = TB, this.maker = dB, this.warnOnce = VB, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(BB) {
        this.collectGroup(BB, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(BB, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(BB, 1, this.frontDraws, this.frontDraws, !0);
        for (const TB of this.modelMeshes.groupIds())(TB < -1 || TB > 1) && this.warnOnce(`group:${TB}`, `rendering group ${TB} is not drawn`);
        for (const TB of this.o2.groupIds())(TB < -1 || TB > 1) && this.warnOnce(`group:${TB}`, `rendering group ${TB} is not drawn`);
        this.opaqueDraws.sort(ny), this.transparentDraws.sort(ey)
      }
      collectGroup(BB, TB, dB, VB, yB) {
        const pB = this.modelMeshes.group(TB),
          lB = this.o2.group(TB),
          JB = 0 === TB ? null === lB || void 0 === lB ? void 0 : lB.opaque : void 0;
        this.collectList(BB, null === pB || void 0 === pB ? void 0 : pB.opaque, JB || null === lB || void 0 === lB ? void 0 : lB.opaque, TB, !1, dB, yB), JB && (this.o2.drawn += this.maker.bundleDraws(BB, JB, TB)), this.collectList(BB, null === pB || void 0 === pB ? void 0 : pB.alphaTest, void 0, TB, !1, dB, yB), this.collectList(BB, null === pB || void 0 === pB ? void 0 : pB.transparent, null === lB || void 0 === lB ? void 0 : lB.transparent, TB, !0, VB, yB)
      }
      collectList(BB, TB, dB, VB, yB, pB, lB) {
        var JB;
        const YB = pB.length;
        TB && this.maker.pushDraws(BB, TB.units, TB.units.length, VB, yB, pB, TB.rows), dB && (this.o2.drawn += this.maker.pushDraws(BB, dB, dB.length, VB, yB, pB));
        const gB = yB ? null === (JB = this.modelMeshes.group(VB)) || void 0 === JB ? void 0 : JB.text : void 0;
        gB && this.maker.pushDraws(BB, gB.units, gB.units.length, VB, !0, pB, gB.rows), lB && Bp(pB, YB)
      }
    }

    function ny(BB, TB) {
      return BB.program.id - TB.program.id || BB.material.owner.uniqueId - TB.material.owner.uniqueId
    }

    function ey(BB, TB) {
      return BB.material.owner.uniqueId - TB.material.owner.uniqueId
    }

    function Bp(BB, TB) {
      for (let dB = TB + 1; dB < BB.length; dB++) {
        const VB = BB[dB];
        let yB = dB - 1;
        for (; yB >= TB && ey(BB[yB], VB) > 0; yB--) BB[yB + 1] = BB[yB];
        BB[yB + 1] = VB
      }
    }
    const Tp = {};

    function dp(BB) {
      return BB.hasThinInstances ? "thin" : BB.vyB || BB._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Vp(BB, TB, dB) {
      return BB ? (dB._needUVs = !0, BB.optimizeUVAllocation && (0, wB.D)(BB.matrix) ? (dB[`${TB}DIRECTUV`] = BB.uvSet + 1, dB[`MAINUV${BB.uvSet+1}`] = !0) : dB[`${TB}DIRECTUV`] = 0, !0) : (dB[`${TB}DIRECTUV`] = 0, !1)
    }

    function yp(BB) {
      const TB = new Map;
      for (const dB in BB) {
        if (95 === dB.charCodeAt(0)) continue;
        const VB = BB[dB],
          yB = typeof VB;
        "number" === yB || "string" === yB ? TB.set(dB, String(VB)) : VB && "function" !== yB && TB.set(dB, !0)
      }
      return TB
    }

    function pp(BB) {
      const TB = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: dB
        }
        of BB.features)
        for (const BB in dB) TB[BB] = dB[BB];
      return TB
    }

    function lp(BB) {
      const TB = BB.parts.geometry;
      return null !== TB && void 0 !== TB && TB.live ? TB : null
    }

    function Jp(BB) {
      var TB;
      return null !== (TB = lp(BB)) && void 0 !== TB ? TB : Tp
    }
    class Yp {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = BB, this.warnOnce = TB, this.programWithModel = dB, this.packFailed = VB, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(BB, TB, dB, VB, yB) {
        const pB = TB.owner;
        let lB = this.drawStates.get(TB);
        if (!lB) {
          const BB = TB.parts.materials[TB.range];
          if (!BB) return this.warnOnce("model", `${dB.name} on ${pB.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          lB = {
            defines: pp(BB),
            model: BB,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: yB,
            groupId: VB,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(TB, lB)
        }
        if (this.programCurrent(lB, TB, yB, VB)) return lB.program;
        const {
          model: JB
        } = lB, YB = Jp(TB), gB = this.instanceLayout(pB, yB), oB = this.definesBits(pB);
        if (!this.prepareModelDefines(BB, pB, JB, lB.defines, VB, yB)) return null;
        lB.instancing = yB, lB.groupId = VB, lB.modelVersion = JB.version, lB.geometry = YB, lB.instanceLayout = gB, lB.definesBits = oB;
        const kB = function(BB) {
          let TB = "";
          for (const [dB, VB] of BB) TB += !0 === VB ? `${dB};` : `${dB}=${VB};`;
          return TB
        }(yp(lB.defines));
        return kB === lB.definesKey && lB.packVariant === this.modelPackVariant && lB.program && !this.packFailed(lB.program) || (lB.definesKey = kB, lB.packVariant = this.modelPackVariant, lB.program = this.programWithModel(JB, lB.defines, kB)), lB.program
      }
      programCurrent(BB, TB, dB, VB) {
        return null !== BB.program && !this.packFailed(BB.program) && BB.instancing === dB && BB.groupId === VB && this.definesHold(BB, TB, dB)
      }
      definesHold(BB, TB, dB) {
        return BB.modelVersion === BB.model.version && BB.geometry === Jp(TB) && BB.instanceLayout === this.instanceLayout(TB.owner, dB) && BB.definesBits === this.definesBits(TB.owner) && BB.packVariant === this.modelPackVariant
      }
      modelPackKind(BB) {
        var TB;
        return 0 === this.modelPackVariant ? null : null !== (TB = (0, MB.x)(BB, sB.m.name)) && void 0 !== TB && TB.active ? "placed" : BB.item ? "item" : BB.lifeform ? "lifeform" : BB.box ? "box" : null
      }
      instanceLayout(BB, TB) {
        var dB, VB, yB;
        return "thin" === TB ? null !== (yB = this.resources.I5.get(BB)) && void 0 !== yB ? yB : null : "instanced" === TB && null !== (dB = null === (VB = BB._userInstancedBuffersStorage) || void 0 === VB ? void 0 : VB.interleavedKinds) && void 0 !== dB ? dB : null
      }
      definesBits(BB) {
        const TB = this.view;
        return (BB.visibility < 1 ? 1 : 0) | (BB.hasVertexAlpha ? 2 : 0) | (BB.applyFog ? 4 : 0) | (BB.useVertexColors ? 8 : 0) | (BB.nonUniformScaling ? 16 : 0) | (TB.fogEnabled && 0 !== TB.fogMode ? 32 : 0) | (TB.lightsEnabled ? 64 : 0) | TB.lightCount << 7
      }
      prepareLightDefines(BB, TB, dB) {
        let VB = 0;
        if (this.view.lightsEnabled && !TB) {
          const TB = Math.min(dB, 4);
          for (; VB < this.view.lightCount && (BB[`LIGHT${VB}`] = !0, BB[`LITE_LIGHT${VB}_SLOT`] = VB, VB++, BB._needNormals = !0, VB !== TB););
        }
        for (let yB = VB; yB < 4; yB++) BB[`LIGHT${yB}`] = !1, BB[`LITE_LIGHT${yB}_SLOT`] = void 0
      }
      prepareModelDefines(BB, TB, dB, VB, yB, pB) {
        const {
          features: lB
        } = dB;
        VB._needNormals = !1, VB._needUVs = !1;
        const JB = this.view;
        this.prepareLightDefines(VB, dB.disableLighting, dB.maxSimultaneousLights), VB.MAINUV1 = !1, VB.MAINUV2 = !1;
        const YB = dB.diffuseTexture;
        YB ? (VB._needUVs = !0, VB.DIFFUSE = !0, YB.optimizeUVAllocation && (0, wB.D)(YB.matrix) ? (VB.DIFFUSEDIRECTUV = YB.uvSet + 1, VB[`MAINUV${YB.uvSet+1}`] = !0) : VB.DIFFUSEDIRECTUV = 0, YB.uvSet > 1 && this.warnOnce(`uvset:${dB.name}`, `${dB.name} samples UV set ${YB.uvSet+1}, which is not supported`)) : (VB.DIFFUSE = !1, VB.DIFFUSEDIRECTUV = 0);
        const gB = dB.opacityTexture,
          oB = dB.emissiveTexture;
        VB.OPACITY = Vp(gB, "OPACITY", VB), VB.OPACITYRGB = null !== gB && gB.getAlphaFromRGB, VB.EMISSIVE = Vp(oB, "EMISSIVE", VB), (gB && gB.uvSet > 1 || oB && oB.uvSet > 1) && this.warnOnce(`uvset:${dB.name}`, `${dB.name} samples a UV set past 2, which is not supported`);
        const kB = dB.reflectionTexture,
          LB = null !== kB;
        if (LB) {
          if (!this.resources.boundTexture(kB)) return !1;
          VB._needNormals = !0
        }
        VB.REFLECTION = LB, VB.REFLECTIONMAP_3D = LB, VB.REFLECTIONMAP_SKYBOX = LB, VB.REFLECTIONMAP_OPPOSITEZ = LB && (BB.useRightHandedSystem ? !kB.invertZ : kB.invertZ), VB.ROUGHNESS = LB && dB.roughness > 0, VB.REFLECTIONOVERALPHA = LB && dB.useReflectionOverAlpha, VB.LITE_REFLECTION_LUMINANCE = LB && "cube" === kB.source.kind && kB.source.luminance, (TB.skeleton || TB.morphTargetManager) && this.warnOnce(`skin:${TB.name}`, `${TB.name} has bones or morph targets, which are not supported`), VB.FOG = dB.fogEnabled && TB.applyFog && JB.fogEnabled && 0 !== JB.fogMode, VB.NONUNIFORMSCALING = TB.nonUniformScaling;
        const {
          visibility: OB,
          hasVertexAlpha: DB
        } = TB;
        VB.ALPHATEST = (0, MB.S)(dB, OB, DB), VB.ALPHAFROMDIFFUSE = (0, MB.bb)(dB), VB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== dB.transparencyMode, VB.ALPHABLEND = null === dB.transparencyMode || (0, MB.P)(dB, OB, DB), VB.PREMULTIPLYALPHA = 7 === dB.alphaMode || 8 === dB.alphaMode, VB.EMISSIVEASILLUMINATION = dB.useEmissiveAsIllumination, VB.LINKEMISSIVEWITHDIFFUSE = dB.linkEmissiveWithDiffuse, VB.TWOSIDEDLIGHTING = !dB.backFaceCulling && dB.twoSidedLighting, VB.INSTANCES = "none" !== pB, VB.THIN_INSTANCES = "thin" === pB, VB.LITE_FRONT_LAYER = yB >= 1;
        for (const {
            feature: fB,
            state: sB,
            active: MB
          }
          of lB) {
          var uB, HB;
          if (MB) null === (uB = (HB = (0, oT.g)(fB)).prepareDefinesBeforeAttributes) || void 0 === uB || uB.call(HB, sB, VB, BB, TB)
        }
        this.modelPackKind(dB) && (VB._needNormals = !0), VB.NORMAL = VB._needNormals && TB.isVerticesDataPresent("normal"), VB.UV1 = VB._needUVs && TB.isVerticesDataPresent("uv"), VB.UV2 = VB._needUVs && TB.isVerticesDataPresent("uv2");
        const EB = TB.useVertexColors && TB.isVerticesDataPresent("color");
        VB.VERTEXCOLOR = EB, VB.VERTEXALPHA = TB.hasVertexAlpha && EB, VB.INSTANCESCOLOR = "none" !== pB && TB.isVerticesDataPresent("instanceColor");
        for (const {
            feature: fB,
            state: sB,
            active: MB
          }
          of lB) {
          var vB, mB;
          if (MB) null === (vB = (mB = (0, oT.g)(fB)).prepareDefines) || void 0 === vB || vB.call(mB, sB, VB, BB, TB, dB)
        }
        const iB = BB.PD();
        for (const {
            feature: fB,
            state: sB,
            active: MB
          }
          of lB) {
          var NB, tB;
          if (MB && !1 === (null === (NB = (tB = (0, oT.g)(fB)).isReadyForSubMesh) || void 0 === NB ? void 0 : NB.call(tB, sB, VB, BB, iB))) return !1
        }
        return !0
      }
    }

    function gp(BB, TB, dB) {
      return BB.codeVersion !== TB.version && function(BB, TB) {
        const dB = [],
          VB = [];
        for (const {
            feature: LB,
            state: OB,
            active: DB
          }
          of TB.features) {
          var yB, pB, lB, JB;
          if (DB) op(null === (yB = (pB = (0, oT.g)(LB)).getCustomCode) || void 0 === yB ? void 0 : yB.call(pB, OB, "vertex", tB.b.WGSL), dB), op(null === (lB = (JB = (0, oT.g)(LB)).getCustomCode) || void 0 === lB ? void 0 : lB.call(JB, OB, "fragment", tB.b.WGSL), VB)
        }
        const YB = [];
        for (const {
            feature: LB,
            state: OB
          }
          of TB.features) {
          var gB, oB;
          const BB = null === (gB = (oB = (0, oT.g)(LB)).getUniforms) || void 0 === gB ? void 0 : gB.call(oB, OB, tB.b.WGSL);
          for (const TB of null !== (kB = null === BB || void 0 === BB ? void 0 : BB.ubo) && void 0 !== kB ? kB : []) {
            var kB;
            TB.size && TB.type && YB.push({
              name: TB.name,
              type: TB.type,
              arraySize: TB.arraySize
            })
          }
        }
        BB.vertexCode = dB, BB.fragmentCode = VB, BB.pluginUniforms = YB, BB.codeKey = JSON.stringify([dB, VB, YB]), BB.codeVersion = TB.version
      }(BB, TB), `${dB}#${BB.codeKey}`
    }

    function op(BB, TB) {
      if (BB)
        for (const dB in BB) BB[dB] && TB.push([dB, BB[dB]])
    }
    const kp = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Lp {
      constructor(BB) {
        this.warnOnce = BB, this.states = new Map
      }
      renderState(BB, TB, dB, VB) {
        var yB;
        let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          lB = null !== (yB = BB.sideOrientation) && void 0 !== yB ? yB : TB.sideOrientation;
        TB._getWorldMatrixDeterminant() < 0 && (lB = 0 === lB ? 1 : 0);
        const JB = "triangle-list" === pB,
          YB = dB ? BB.alphaMode : 0,
          gB = (!dB || (0 === YB || BB.forceDepthWrite)) && !BB.disableDepthWrite,
          oB = JB && BB.backFaceCulling ? BB.cullBackFaces ? "back" : "front" : "none",
          kB = JB && 0 !== lB ? "ccw" : "cw",
          LB = BB.depthFunction,
          OB = JB ? BB.zOffset : 0,
          DB = JB ? BB.zOffsetUnits : 0,
          uB = !BB.disableColorWrite;
        return VB && VB.alphaMode === YB && VB.depthWrite === gB && VB.depthFunction === LB && VB.cullMode === oB && VB.frontFace === kB && VB.zOffset === OB && VB.zOffsetUnits === DB && VB.colourWrite === uB && VB.topology === pB ? VB : this.stateFor(YB, gB, LB, oB, kB, OB, DB, uB, pB)
      }
      stateFor(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        const gB = `${BB}|${TB}|${dB}|${VB}|${yB}|${pB}|${lB}|${JB}|${YB}`;
        let oB = this.states.get(gB);
        if (!oB) {
          var kB;
          const LB = BB ? Gy(BB) : null;
          BB && !LB && this.warnOnce(`alpha:${BB}`, `alpha mode ${BB} is not supported`), oB = {
            key: gB,
            alphaMode: BB,
            depthFunction: dB,
            zOffset: pB,
            zOffsetUnits: lB,
            topology: YB,
            blend: LB,
            depthWrite: TB,
            depthCompare: dB && null !== (kB = kp.get(dB)) && void 0 !== kB ? kB : null,
            cullMode: VB,
            frontFace: yB,
            depthBias: -lB,
            depthBiasSlopeScale: -pB,
            colourWrite: JB
          }, this.states.set(gB, oB)
        }
        return oB
      }
    }
    var Op = dB(36284);

    function Dp(BB) {
      if (!BB.frozen) return -1;
      let TB = BB.version;
      for (const {
          feature: dB,
          state: VB,
          active: yB
        }
        of BB.features) {
        if (!yB || !dB.bind) continue;
        const BB = (0, oT.g)(dB).uniformsVersion;
        if (!BB) return -1;
        TB += BB(VB)
      }
      return TB
    }
    class Hp {
      constructor(BB, TB, dB) {
        this.slots = BB, this.data = TB, this.textures = dB, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(BB, TB) {
        this.write4(BB, TB, 0, 0, 0, 1)
      }
      updateFloat2(BB, TB, dB) {
        this.write4(BB, TB, dB, 0, 0, 2)
      }
      updateFloat3(BB, TB, dB, VB) {
        this.write4(BB, TB, dB, VB, 0, 3)
      }
      updateFloat4(BB, TB, dB, VB, yB) {
        this.write4(BB, TB, dB, VB, yB, 4)
      }
      updateVector3(BB, TB) {
        this.write4(BB, TB.x, TB.y, TB.z, 0, 3)
      }
      updateVector4(BB, TB) {
        this.write4(BB, TB.x, TB.y, TB.z, TB.w, 4)
      }
      updateColor3(BB, TB) {
        this.write4(BB, TB.r, TB.g, TB.b, 0, 3)
      }
      updateColor4(BB, TB, dB) {
        this.write4(BB, TB.r, TB.g, TB.b, dB, 4)
      }
      updateFloatsFrom(BB, TB, dB, VB) {
        const yB = this.slots.get(BB);
        if (!yB) return;
        const pB = this.data,
          lB = yB.offset;
        for (let JB = 0; JB < VB; JB++) pB[lB + JB] = TB[dB + JB]
      }
      updateFloat3TimesFloats(BB, TB, dB, VB) {
        const yB = this.slots.get(BB);
        if (!yB) return;
        const pB = this.data,
          lB = yB.offset;
        pB[lB] = TB[dB] * VB[0], pB[lB + 1] = TB[dB + 1] * VB[1], pB[lB + 2] = TB[dB + 2] * VB[2]
      }
      i6(BB, TB) {
        const dB = this.slots.get(BB);
        dB && this.data.set(TB.m, dB.offset)
      }
      updateMatrixFloats(BB, TB) {
        const dB = this.slots.get(BB);
        dB && this.data.set(TB, dB.offset)
      }
      updateFloatArray(BB, TB) {
        const dB = this.slots.get(BB);
        if (!dB) return;
        if (!dB.arraySize || dB.stride === dB.floats) return void this.data.set(TB, dB.offset);
        const VB = Math.min(TB.length, dB.floats * dB.arraySize);
        for (let yB = 0; yB < VB; yB++) this.data[dB.offset + Math.floor(yB / dB.floats) * dB.stride + yB % dB.floats] = TB[yB]
      }
      updateArray(BB, TB) {
        this.updateFloatArray(BB, TB)
      }
      setTexture(BB, TB) {
        this.textures.set(BB, TB), this.expected.delete(BB)
      }
      expectTexture(BB) {
        this.textures.set(BB, null), this.expected.add(BB)
      }
      write4(BB, TB, dB, VB, yB, pB) {
        const lB = this.slots.get(BB);
        if (!lB) return;
        const JB = this.data,
          YB = lB.offset;
        JB[YB] = TB, pB > 1 && (JB[YB + 1] = dB), pB > 2 && (JB[YB + 2] = VB), pB > 3 && (JB[YB + 3] = yB)
      }
    }

    function Ep(BB, TB) {
      const dB = XV,
        VB = Op.h,
        yB = BB.lights,
        pB = Math.min(BB.lightCount, 8);
      for (let lB = 0; lB < pB; lB++) {
        const BB = dB.lights + lB * dB.lightStride,
          pB = lB * Op.b;
        TB[BB] = yB[pB + VB.vector], TB[BB + 1] = yB[pB + VB.vector + 1], TB[BB + 2] = yB[pB + VB.vector + 2], TB[BB + 3] = yB[pB + VB.kind] === Op.d.directional ? 1 : 0, TB[BB + 4] = yB[pB + VB.diffuse], TB[BB + 5] = yB[pB + VB.diffuse + 1], TB[BB + 6] = yB[pB + VB.diffuse + 2], TB[BB + 7] = yB[pB + VB.range], TB[BB + 8] = yB[pB + VB.specular], TB[BB + 9] = yB[pB + VB.specular + 1], TB[BB + 10] = yB[pB + VB.specular + 2], TB[BB + 11] = yB[pB + VB.range]
      }
      TB[dB.fogInfos] = BB.fogMode, TB[dB.fogInfos + 1] = BB.fogStart, TB[dB.fogInfos + 2] = BB.fogEnd, TB[dB.fogInfos + 3] = BB.fogDensity, TB[dB.fogColour] = BB.fogColour[0], TB[dB.fogColour + 1] = BB.fogColour[1], TB[dB.fogColour + 2] = BB.fogColour[2], TB[dB.outputHeight] = BB.renderHeight, TB[dB.animTick] = BB.animTick, TB[dB.timeMs] = BB.timeMs
    }
    class vp {
      constructor(BB) {
        this.instancesOf = BB
      }
      refreshModelUniforms(BB, TB, dB, VB) {
        const yB = Dp(dB);
        if (yB >= 0 && yB === TB.heldVersion && TB.textures.get("diffuseSampler") === dB.diffuseTexture && TB.textures.get("reflectionCubeSampler") === dB.reflectionTexture && TB.textures.get("opacitySampler") === dB.opacityTexture && TB.textures.get("emissiveSampler") === dB.emissiveTexture) return !0;
        if (yB < 0)
          for (const pB of this.instancesOf(dB)) pB.heldVersion = -1;
        return this.writeModelUniforms(BB, TB, dB, VB), TB.heldVersion = yB, !1
      }
      writeModelUniforms(BB, TB, dB, VB) {
        const {
          ubo: yB
        } = TB, pB = dB.diffuseTexture, lB = dB.diffuseColor;
        yB.updateFloat4("vDiffuseColor", lB[0], lB[1], lB[2], dB.alpha), pB && (yB.updateFloat2("vDiffuseInfos", pB.uvSet, pB.level), yB.updateMatrixFloats("diffuseMatrix", pB.matrix)), yB.updateFloat("alphaCutOff", dB.alphaCutOff), yB.updateFloatsFrom("vEmissiveColor", dB.emissiveColor, 0, 3), yB.updateFloat3TimesFloats("vAmbientColor", VB.ambientColour, 0, dB.ambientColor);
        const JB = dB.specularColor;
        yB.updateFloat4("vSpecularColor", JB[0], JB[1], JB[2], dB.specularPower), yB.setTexture("diffuseSampler", pB);
        const YB = dB.opacityTexture;
        YB && (yB.updateFloat2("vOpacityInfos", YB.uvSet, YB.level), yB.updateMatrixFloats("opacityMatrix", YB.matrix)), yB.setTexture("opacitySampler", YB);
        const gB = dB.emissiveTexture;
        gB && (yB.updateFloat2("vEmissiveInfos", gB.uvSet, gB.level), yB.updateMatrixFloats("emissiveMatrix", gB.matrix)), yB.setTexture("emissiveSampler", gB);
        const oB = dB.reflectionTexture;
        oB && yB.updateMatrixFloats("reflectionMatrix", oB.matrix), yB.updateFloat2("vReflectionInfos", oB ? oB.level * BB.iblIntensity : 0, dB.roughness), yB.setTexture("reflectionCubeSampler", oB);
        const kB = BB.PD();
        for (const {
            feature: DB,
            state: uB,
            active: HB
          }
          of dB.features) {
          var LB, OB;
          if (HB) null === (LB = (OB = (0, oT.g)(DB)).bind) || void 0 === LB || LB.call(OB, uB, yB, BB, kB)
        }
      }
    }

    function mp(BB) {
      const TB = BB.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(TB) ? "u32" : /i32|^vec\di$/.test(TB) ? "i32" : "f32"
    }

    function ip(BB, TB) {
      const dB = BB.getSize(),
        VB = mp(TB),
        yB = BB => 4 === dB ? `${BB}x4` : 2 === dB ? `${BB}x2` : null;
      if ("f32" === VB) {
        if (5126 === BB.type) return 1 === dB ? "float32" : dB >= 2 && dB <= 4 ? `float32x${dB}` : null;
        if (!BB.normalized) return null;
        switch (BB.type) {
          case 5121:
            return yB("unorm8");
          case 5120:
            return yB("snorm8");
          case 5123:
            return yB("unorm16");
          case 5122:
            return yB("snorm16")
        }
        return null
      }
      const pB = "u32" === VB ? "uint" : "sint";
      switch (BB.type) {
        case 5125:
        case 5124:
          return 1 === dB ? `${pB}32` : dB <= 4 ? `${pB}32x${dB}` : null;
        case 5121:
        case 5120:
          return yB(`${pB}8`);
        case 5123:
        case 5122:
          return yB(`${pB}16`)
      }
      return null
    }

    function Np(BB) {
      var TB;
      const dB = /(8|16|32)(?:x(\d))?$/.exec(BB);
      return dB ? Number(dB[1]) / 8 * Number(null !== (TB = dB[2]) && void 0 !== TB ? TB : 1) : 4
    }
    class tp {
      constructor(BB, TB, dB) {
        this.resources = BB, this.limits = TB, this.warnOnce = dB, this.layouts = new Map
      }
      resolveInputs(BB, TB, dB, VB) {
        const yB = [],
          pB = dB.program.attributes,
          lB = [];
        for (let oB = 0; oB < pB.length; oB++) {
          const dB = pB[oB],
            JB = dB.optional ? null : this.resources.vertexInput(BB, dB.name, VB);
          if (!JB) {
            const BB = mp(dB.type),
              TB = "u32" === BB ? "uint32x4" : "i32" === BB ? "sint32x4" : "float32x4";
            lB.push(null);
            const VB = yB.find((BB => null === BB.data));
            VB ? VB.attributes.push({
              shaderLocation: oB,
              offset: 0,
              format: TB
            }) : yB.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: oB,
                offset: 0,
                format: TB
              }]
            });
            continue
          }
          const YB = JB.getBuffer();
          lB.push(JB);
          const gB = ip(JB, dB.type);
          if (!gB) return this.warnOnce(`format:${TB}:${dB.name}`, `${TB}'s ${dB.name} (type ${JB.type}, size ${JB.getSize()}) has no WebGPU vertex format`), null;
          const kB = JB.getIsInstanced() ? "instance" : "vertex",
            LB = JB.byteStride,
            OB = Np(gB),
            DB = yB.find((BB => BB.data === YB && BB.stride === LB && BB.step === kB && JB.byteOffset >= BB.base && JB.byteOffset - BB.base + OB <= LB));
          DB ? DB.attributes.push({
            shaderLocation: oB,
            offset: JB.byteOffset - DB.base,
            format: gB
          }) : yB.push({
            data: YB,
            base: JB.byteOffset,
            stride: LB,
            step: kB,
            attributes: [{
              shaderLocation: oB,
              offset: 0,
              format: gB
            }]
          })
        }
        if (yB.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${TB}`, `${TB} needs ${yB.length} vertex buffers`), null;
        let JB = "";
        for (const oB of yB) {
          JB += `${oB.stride}${"instance"===oB.step?"i":"v"}`;
          for (const BB of oB.attributes) JB += `,${BB.shaderLocation}:${BB.offset}:${BB.format}`;
          JB += ";"
        }
        let YB = this.layouts.get(JB);
        YB || (YB = {
          key: JB,
          buffers: yB.map((BB => ({
            arrayStride: BB.stride,
            stepMode: BB.step,
            attributes: BB.attributes
          }))),
          instanceEnds: yB.map((BB => {
            let TB = -1;
            if ("instance" === BB.step)
              for (const dB of BB.attributes) TB = Math.max(TB, dB.offset + Np(dB.format));
            return TB
          }))
        }, this.layouts.set(JB, YB));
        const gB = yB.map((BB => BB.base));
        return {
          program: dB,
          sources: lB,
          layout: YB,
          slotData: yB.map((BB => BB.data)),
          o9: gB,
          buffers: [],
          offsets: gB,
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

    function fp(BB, TB, dB, VB) {
      const yB = TB.program.program.attributes;
      for (let pB = 0; pB < yB.length; pB++) {
        if ((yB[pB].optional ? null : dB.vertexInput(BB, yB[pB].name, VB)) !== TB.sources[pB]) return !1
      }
      return !0
    }
    const sp = 64;
    class Mp {
      constructor(BB, TB, dB, VB) {
        this.device = BB, this.layout = TB, this.frameBuffer = dB, this.label = VB, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(BB) {
        if (BB * sp <= this.data.length) return !1;
        let TB = 2 * this.data.length;
        for (; BB * sp > TB;) TB *= 2;
        const dB = new Float32Array(TB);
        return dB.set(this.data), this.data = dB, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yB = this.data,
          pB = BB * sp;
        let lB = yB[pB + 16] !== dB;
        for (let JB = 0; JB < 16 && !lB; JB++) lB = yB[pB + JB] !== TB[VB + JB];
        if (lB) {
          for (let BB = 0; BB < 16; BB++) yB[pB + BB] = TB[VB + BB];
          yB[pB + 16] = dB
        }
        return lB
      }
      upload(BB, TB) {
        this.device.queue.writeBuffer(this.buffer, BB * WV, this.data, BB * sp, (TB - BB) * sp)
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

    function zp(BB) {
      return BB.gpu[wB.d.lite] ??= BB.materials.map(((TB, dB) => ({
        parts: BB,
        range: dB,
        owner: BB.owner
      })))
    }

    function wp(BB) {
      var TB, dB, VB;
      return null !== (TB = null !== (dB = null === (VB = BB.parts.materials[BB.range]) || void 0 === VB ? void 0 : VB.mirror) && void 0 !== dB ? dB : BB.owner.material) && void 0 !== TB ? TB : null
    }
    const Up = ["opaque", "alphaTest", "transparent", "text"];
    class Fp {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, gT.d)("Lite: ")
      }
      attach(BB, TB) {
        this.model = BB, this.mirror = TB
      }
      get worlds() {
        return this.model.nodes.JL
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(BB) {
        return this.groups.get(BB)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(BB) {
        for (const [TB, dB] of this.groups)
          for (const VB of Up)
            for (const yB of dB[VB].units) BB(yB.owner, "text" === VB ? "transparent" : VB, TB)
      }
      select(BB, TB) {
        this.frame++, this.selectedCount = 0;
        for (const JB of this.groups.values())
          for (const BB of Up) JB[BB].units.length = 0, JB[BB].rows.length = 0;
        const {
          model: dB,
          mirror: VB
        } = this;
        if (!dB || !VB || !BB) return;
        this.rows.length < dB.nodes.Kk && (this.rows = new Int32Array(dB.nodes.Kk));
        const yB = this.rows,
          pB = dB.meshes;
        for (let JB = 0; JB < pB.looseCount; JB++) {
          const BB = pB.loose[JB],
            dB = VB.nodes[BB];
          dB && !dB.isBlocked && dB.isEnabled() && !dB.al.hasAZeroComponent && pB.selects(BB, TB.frustum) && (this.activate(dB, BB), this.selectedCount++)
        }
        const lB = pB.selectTextPlanes(TB.frustum, yB);
        for (let JB = 0; JB < lB; JB++) {
          const TB = yB[JB],
            pB = VB.nodes[TB],
            lB = dB.meshes.parts[TB];
          if (!pB.isVisible || !(pB.visibility > 0) || 0 === (pB.layerMask & BB.layerMask) || !lB) continue;
          const YB = this.groupOf(dB.meshes.layer[TB]).text;
          for (const BB of zp(lB)) YB.units.push(BB), YB.rows.push(TB);
          this.selectedCount++
        }
      }
      instanceBatch(BB) {
        const TB = this.batchOf(BB);
        return TB.dispatched || (TB.dispatched = TB.renderSelf = !0, TB.row = this.rowOf(BB)), TB
      }
      rowOf(BB) {
        return BB.row
      }
      activate(BB, TB) {
        if (!BB.JF) {
          const dB = BB;
          if (dB.vyB) {
            const BB = this.batchOf(dB);
            BB.dispatched = !0, BB.renderSelf = !0, BB.row = TB
          }
          return void this.dispatch(dB, TB, TB)
        }
        const dB = BB,
          VB = dB.myB;
        if (VB._getWorldMatrixDeterminant() >= 0 !== dB._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${VB.name}`, `A mirrored InstancedMesh of ${VB.name} is not drawn yet`);
        const yB = this.batchOf(VB);
        yB.instances.push(dB), yB.rows.push(TB), yB.dispatched || (yB.dispatched = !0, this.dispatch(VB, TB, this.rowOf(VB)))
      }
      batchOf(BB) {
        let TB = this.batches.get(BB);
        return TB || (TB = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(BB, TB)), TB.frame !== this.frame && (TB.frame = this.frame, TB.dispatched = !1, TB.renderSelf = !1, TB.instances.length = 0, TB.rows.length = 0), TB
      }
      dispatch(BB, TB, dB) {
        const {
          layer: VB,
          parts: yB
        } = this.model.meshes;
        if (!yB[TB]) return;
        const pB = this.groupOf(VB[TB]),
          lB = BB;
        for (const JB of zp(yB[TB])) {
          const BB = wp(JB);
          if (!BB) continue;
          const TB = BB.needAlphaBlendingForMesh(lB) ? pB.transparent : BB.needAlphaTestingForMesh(lB) ? pB.alphaTest : pB.opaque;
          TB.units.push(JB), TB.rows.push(dB)
        }
      }
      groupOf(BB) {
        let TB = this.groups.get(BB);
        return TB || (TB = {
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
        }, this.groups.set(BB, TB)), TB
      }
    }
    class Kp {
      constructor() {
        this.Dg = new Map, this.enabled = [], this.groups = new Map, this.RO = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(BB) {
        if (this.Dg.has(BB)) return;
        const TB = {
          mesh: BB,
          observer: BB.onEffectiveEnabledStateChangedObservable.add((BB => {
            this.hN(TB, BB)
          })),
          index: -1,
          steady: null
        };
        this.Dg.set(BB, TB), this.hN(TB, BB.isEnabled())
      }
      remove(BB) {
        const TB = this.Dg.get(BB);
        TB && (TB.observer.remove(!0), this.hN(TB, !1), this.Dg.delete(BB))
      }
      base(BB) {
        return this.Dg.get(BB)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Dg: this.Dg.size
        }
      }
      forEachSelected(BB) {
        for (const [TB, dB] of this.groups) {
          for (const VB of dB.opaque) BB(VB.owner, "opaque", TB);
          for (const VB of dB.transparent) BB(VB.owner, "transparent", TB)
        }
        for (const TB of this.RO) BB(TB.mesh, "opaque", 0)
      }
      group(BB) {
        return this.groups.get(BB)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(BB, TB) {
        this.drawn = 0, this.selected = 0, this.RO.length = 0;
        for (const VB of this.groups.values()) VB.opaque.length = 0, VB.transparent.length = 0;
        if (!BB) return;
        const dB = this.enabled;
        for (let VB = 0; VB < dB.length; VB++) {
          const yB = dB[VB];
          if (yB.steady && TB(yB, BB)) {
            this.selected++, this.RO.push(yB);
            continue
          }
          const pB = yB.mesh;
          if (pB.isBlocked || pB.al.hasAZeroComponent) continue;
          if (!pB.isVisible || pB.visibility <= 0 || 0 === (pB.layerMask & BB.layerMask)) continue;
          if (pB.vyB) {
            this.warned.has(pB.name) || (this.warned.add(pB.name), console.warn(`Lite: thin instance base ${pB.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: lB
          } = pB;
          if (!lB) continue;
          pB.computeWorldMatrix(), this.selected++;
          const JB = this.listsFor(pB.renderingGroupId);
          for (const BB of zp(lB)) {
            const TB = wp(BB);
            TB && (TB.needAlphaBlendingForMesh(pB) ? JB.transparent.push(BB) : JB.opaque.push(BB))
          }
        }
      }
      hN(BB, TB) {
        if (TB === BB.index >= 0) return;
        BB.steady = null;
        const dB = this.enabled;
        if (TB) BB.index = dB.length, dB.push(BB);
        else {
          const TB = dB.pop();
          TB !== BB && (dB[BB.index] = TB, TB.index = BB.index), BB.index = -1
        }
      }
      listsFor(BB) {
        let TB = this.groups.get(BB);
        return TB || (TB = {
          opaque: [],
          transparent: []
        }, this.groups.set(BB, TB)), TB
      }
    }
    var rp = dB(38487);
    class Ip {
      constructor() {
        this.bundle = null, this.stale = !0, this.Dg = new Set
      }
    }
    class cp {
      constructor(BB, TB, dB) {
        this.device = BB, this.slots = TB, this.host = dB, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Ip, this.Iw = new Ip, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Ay, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(BB) {
          var TB, dB;
          let VB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (TB = null === (dB = globalThis.navigator) || void 0 === dB ? void 0 : dB.userAgent) && void 0 !== TB ? TB : "";
          const yB = BB.adapterInfo;
          return "intel" === (null === yB || void 0 === yB ? void 0 : yB.vendor) && "gen-12lp" === yB.architecture && VB.includes("Windows")
        }(BB), (0, rp.y)(this.direct)
      }
      Rm() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, rp.y)(this.directThisFrame)
      }
      add(BB, TB, dB, VB) {
        let yB = this.records.get(BB);
        return yB || (yB = this.createRecord(BB), this.records.set(BB, yB)), yB.recorded && Pp(yB, TB) || (this.bundleOf(yB).stale = !0), this.place(yB, TB, dB, VB), yB
      }
      bundleOf(BB) {
        return BB.Iw ? this.Iw : this.main
      }
      addAgain(BB, TB, dB, VB) {
        BB.recorded || (this.bundleOf(BB).stale = !0), this.place(BB, TB, dB, VB)
      }
      place(BB, TB, dB, VB) {
        BB.seen = this.frame, BB.Iw && null === BB.draw && (this.Iw.stale = !0), BB.draw = TB, this.drawn++, dB && this.slots.write(BB.slot, dB, VB) && (this.slotsFrom = Math.min(this.slotsFrom, BB.slot), this.slotsTo = Math.max(this.slotsTo, BB.slot));
        const yB = this.args,
          pB = 5 * BB.slot;
        yB[pB] === TB.count && yB[pB + 1] === TB.instances && yB[pB + 2] === TB.first || (yB[pB] = TB.count, yB[pB + 1] = TB.instances, yB[pB + 2] = TB.first, this.argsDirty = !0, this.Iw.stale ||= BB.Iw)
      }
      Zm() {
        for (const BB of this.records.values()) BB.seen !== this.frame && (BB.draw && (BB.draw = null, this.args[5 * BB.slot + 1] = 0, this.argsDirty = !0, this.Iw.stale ||= BB.Iw), this.frame - BB.seen > 120 && (this.records.delete(BB.unit), this.freeSlots.push(BB.slot), BB.recorded && (this.bundleOf(BB).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(BB) {
        for (const TB of this.records.values()) TB.draw && TB.seen === this.frame && !TB.Iw && BB(TB.draw, this.slots.data, TB.slot * WV / 4)
      }
      resourceDestroyed(BB) {
        this.main.stale ||= this.main.Dg.has(BB), this.Iw.stale ||= this.Iw.Dg.has(BB)
      }
      execute(BB, TB, dB) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(BB, TB, dB, "direct"), this.drawn;
        const VB = this.host.sceneGroup(TB);
        if (!VB) return this.main.bundle = null, this.Iw.bundle = null, this.recordedSceneGroup = null, this.encode(BB, TB, dB, "direct"), this.drawn;
        this.recordedTarget === dB && this.recordedSceneGroup === VB || (this.recordedTarget = dB, this.recordedSceneGroup = VB, this.main.stale = !0, this.Iw.stale = !0);
        const yB = this.main,
          pB = this.Iw;
        let lB = !1;
        !yB.stale && yB.bundle || (yB.bundle = this.record(TB, dB, VB, "indirect"), lB = !0);
        const JB = (0, rp.h)();
        return (pB.stale || this.rangedEpoch !== JB) && (this.rangedEpoch = JB, pB.bundle = this.drawsRanged() ? this.record(TB, dB, VB, "Iw") : this.noRangedBundle(), lB = !0), lB && (this.bundles = pB.bundle ? [yB.bundle, pB.bundle] : [yB.bundle]), BB.executeBundles(this.bundles), BB.setBindGroup(0, VB), this.drawn
      }
      record(BB, TB, dB, VB) {
        const yB = this.device.createRenderBundleEncoder({
          label: "Iw" === VB ? "thin-bases-ranged" : "thin-bases",
          colorFormats: BB._colorFormat ? [BB._colorFormat] : [],
          depthStencilFormat: BB._depthStencilFormat,
          sampleCount: BB._sampleCount
        });
        return yB.setBindGroup(0, dB), this.encode(yB, BB, TB, VB), yB.finish()
      }
      noRangedBundle() {
        for (const BB of this.records.values()) BB.Iw && (BB.recorded = !1);
        return this.Iw.Dg.clear(), this.Iw.stale = !1, null
      }
      drawsRanged() {
        for (const BB of this.records.values())
          if (BB.Iw && BB.draw) return !0;
        return !1
      }
      encode(BB, TB, dB, VB) {
        const yB = [];
        for (const YB of this.records.values()) "direct" !== VB && YB.Iw !== ("Iw" === VB) || (YB.recorded = !1, YB.draw && yB.push(YB));
        yB.sort(Qp);
        const pB = "direct" === VB ? null : "Iw" === VB ? this.Iw : this.main;
        null === pB || void 0 === pB || pB.Dg.clear(), this.binder.reset();
        let lB = !1;
        for (const YB of yB) {
          var JB;
          const yB = YB.draw,
            gB = this.host.pipelineFor(yB, TB, dB);
          if (!gB) {
            this.host.pipelineCompiling(yB, dB) ? lB = !0 : pB && this.keep(YB, yB, pB.Dg);
            continue
          }
          let oB;
          if (YB.Iw && "indirect" !== VB) {
            const BB = YB.unit.owner;
            oB = "direct" === VB && (0, rp.o)(BB) || (0, rp.i)(BB) || void 0
          }
          if (pB && this.keep(YB, yB, pB.Dg), 0 === (null === (JB = oB) || void 0 === JB ? void 0 : JB.count)) continue;
          this.binder.bind(BB, yB, gB, this.slots.bindGroup, YB.slot * WV);
          const kB = 5 * YB.slot;
          if ("indirect" === VB) {
            yB.indexBuffer ? BB.drawIndexedIndirect(this.argsBuffer, 4 * kB) : BB.drawIndirect(this.argsBuffer, 4 * kB);
            continue
          }
          const LB = this.args;
          oB ? Sp(BB, null !== yB.indexBuffer, LB, kB, oB) : yB.indexBuffer ? BB.drawIndexed(LB[kB], LB[kB + 1], LB[kB + 2], 0, 0) : BB.draw(LB[kB], LB[kB + 1], LB[kB + 2], 0)
        }
        pB && (pB.stale = lB)
      }
      keep(BB, TB, dB) {
        BB.recorded = !0, BB.pipelineKey = TB.pipelineKey, BB.materialGroup = TB.material.bindGroup, BB.vertexBuffers.length = 0, BB.vertexBuffers.push(...TB.vertexBuffers), BB.vertexOffsets = TB.vertexOffsets, BB.indexBuffer = TB.indexBuffer, BB.indexFormat = TB.indexFormat;
        for (const VB of TB.vertexBuffers) dB.add(VB);
        TB.indexBuffer && dB.add(TB.indexBuffer), dB.add(TB.material.buffer);
        for (const VB of TB.material.bound) VB && dB.add(VB)
      }
      createRecord(BB) {
        let TB = this.freeSlots.pop();
        return void 0 === TB && (TB = this.slotCount++, this.grow()), {
          unit: BB,
          slot: TB,
          Iw: void 0 !== (0, rp.i)(BB.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.Iw.stale = !0), 5 * this.slotCount > this.args.length) {
          const BB = new Uint32Array(2 * this.args.length);
          BB.set(this.args), this.args = BB, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Sp(BB, TB, dB, VB, yB) {
      const pB = dB[VB + 1],
        lB = yB.data;
      for (let JB = 0; JB < yB.count; JB++) {
        const yB = Math.min(lB[2 * JB], pB),
          YB = Math.min(lB[2 * JB + 1], pB - yB);
        0 !== YB && (TB ? BB.drawIndexed(dB[VB], YB, dB[VB + 2], 0, yB) : BB.draw(dB[VB], YB, dB[VB + 2], yB))
      }
    }

    function Pp(BB, TB) {
      if (BB.pipelineKey !== TB.pipelineKey || BB.materialGroup !== TB.material.bindGroup || BB.indexBuffer !== TB.indexBuffer || BB.indexFormat !== TB.indexFormat || BB.vertexOffsets !== TB.vertexOffsets || BB.vertexBuffers.length !== TB.vertexBuffers.length) return !1;
      for (let dB = 0; dB < BB.vertexBuffers.length; dB++)
        if (BB.vertexBuffers[dB] !== TB.vertexBuffers[dB]) return !1;
      return !0
    }

    function Qp(BB, TB) {
      return ny(BB.draw, TB.draw)
    }
    const Rp = new WeakMap,
      ap = {
        depth: !1,
        sunShadow: !1
      };

    function Zp(BB, TB) {
      let dB = Rp.get(BB);
      dB || (dB = new Map, Rp.set(BB, dB));
      const VB = `${TB.depth?"-depth":""}${TB.sunShadow?"-shadow":""}${TB.shadowMask?"-mask":""}`;
      let yB = dB.get(VB);
      if (!yB) {
        const pB = [{
          binding: zT.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: zT.e
          }
        }, {
          binding: zT.s,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        TB.depth && pB.push({
          binding: zT.j,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), TB.sunShadow && pB.push(... function() {
          const BB = GPUShaderStage.FRAGMENT,
            TB = zT.m;
          return [{
            binding: TB.uniform,
            visibility: BB,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: TB.SL,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: TB.special,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: TB.volume,
            visibility: BB,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: TB.sampler,
            visibility: BB,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: TB.entities,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: TB.entityGrids,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), TB.shadowMask && pB.push({
          binding: zT.p,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), yB = BB.createBindGroupLayout({
          label: `${TB.depth?"terrain-":""}shader-pack-inputs${VB}`,
          entries: pB
        }), dB.set(VB, yB)
      }
      return yB
    }

    function Xp(BB) {
      return Zp(BB, ap)
    }

    function Wp(BB, TB) {
      if (!TB) return !1;
      const dB = (0, wT.h)(BB);
      return !!dB && Qd(dB, TB)
    }

    function hp(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!oV(TB)) return [];
      return [Zp(BB, {
        depth: pV(TB.packVariant),
        sunShadow: Wp(TB.packVariant, dB),
        shadowMask: VB
      })]
    }
    class Cp {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = BB, this.sunShadow = dB, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(zT.e), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = BB.createBuffer({
          label: "shader-pack-inputs",
          size: zT.e,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const VB = (0, zT.v)(TB);
        this.textures = BB.createBuffer({
          label: "shader-pack-textures",
          size: VB.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), BB.queue.writeBuffer(this.textures, 0, VB), this.bindGroup = BB.createBindGroup({
          label: "shader-pack-inputs",
          layout: Xp(BB),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: zT.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: zT.s,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(BB, TB, dB) {
        (0, zT.A)(this.data, {
          seconds: BB.seconds(),
          lit: dB,
          renderOffset: BB.renderOffset(),
          tBB: BB.tBB(),
          eyePosition: TB,
          shadowDirection: BB.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const VB = TB ? this.sunShadow : null;
        if ((TB || dB) && !VB) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!BB && !VB) return this.bindGroup;
        (BB && BB !== this.depthView || dB && dB !== this.maskView) && (this.depthView = null !== BB && void 0 !== BB ? BB : this.depthView, this.maskView = null !== dB && void 0 !== dB ? dB : this.maskView, this.groups.clear());
        const yB = (BB ? 1 : 0) | (VB ? 2 : 0) | (dB ? 4 : 0);
        let pB = this.groups.get(yB);
        if (!pB) {
          const TB = this.entries();
          BB && TB.push({
            binding: zT.j,
            resource: BB
          }), VB && TB.push(...VB.entries()), dB && TB.push({
            binding: zT.p,
            resource: dB
          }), pB = this.device.createBindGroup({
            label: `${BB||dB?"terrain-":""}shader-pack-inputs${BB?"-depth":""}${VB?"-shadow":""}${dB?"-mask":""}`,
            layout: Zp(this.device, {
              depth: !!BB,
              sunShadow: !!VB,
              shadowMask: !!dB
            }),
            entries: TB
          }), this.groups.set(yB, pB)
        }
        return pB
      }
      bind(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        BB.setBindGroup(zT.c, this.bindGroupFor(TB, dB, VB))
      }
    }

    function Gp(BB, TB, dB) {
      if (BB.gpuVersion === TB.gpuBuffersVersion) return !0;
      let VB;
      do {
        if (VB = TB.gpuBuffersVersion, !qp(BB, TB, dB)) return !1
      } while (TB.gpuBuffersVersion !== VB);
      return BB.gpuVersion = VB, BB.fitInstances = 0, !0
    }

    function qp(BB, TB, dB) {
      let VB = null;
      for (let pB = 0; pB < BB.slotData.length; pB++) {
        var yB;
        const lB = BB.slotData[pB],
          JB = lB ? TB.gpuBuffer(lB) : dB;
        if (!JB) return !1;
        lB && BB.layout.instanceEnds[pB] < 0 && TB.cover(lB, Number.POSITIVE_INFINITY), BB.buffers[pB] = JB;
        const YB = BB.o9[pB] + (lB ? TB.gpuOffset(lB) : 0);
        YB !== (null !== (yB = VB) && void 0 !== yB ? yB : BB.offsets)[pB] && (VB ??= BB.offsets.slice(), VB[pB] = YB), BB.ends[pB] = lB ? TB.gpuEnd(lB) : JB.size
      }
      return VB && (BB.offsets = VB), !0
    }

    function xp(BB, TB, dB, VB) {
      if (TB <= BB.fitInstances) return null;
      const {
        layout: yB,
        ends: pB,
        offsets: lB,
        slotData: JB,
        o9: YB
      } = BB;
      let gB = !1;
      for (let oB = 0; oB < yB.buffers.length; oB++) {
        const BB = yB.instanceEnds[oB];
        if (BB < 0) continue;
        const VB = (TB - 1) * yB.buffers[oB].arrayStride + BB;
        if (pB[oB] - lB[oB] < VB) return {
          index: oB,
          needed: VB
        };
        const kB = JB[oB];
        kB && dB.cover(kB, YB[oB] + VB) && (gB = !0)
      }
      return gB && Gp(BB, dB, VB), BB.fitInstances = TB, null
    }
    var jp = dB(36740),
      Ap = dB(36768);
    const bp = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      np = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      ep = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Bl = `((vertexInputs.aPackedLightLevels >> 16u) | ${YT.e.placed}u)`,
      Tl = "u32(vertexInputs.aShaderPackItem.x)",
      dl = `${YT.e.lifeform}u`;

    function Vl(BB) {
      return "item" === BB.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const yl = "bloxdSpEnchant",
      pl = "floor(finalWorld[3].xyz)";

    function ll(BB, TB, dB) {
      return "placed" === TB.kind && BB.reads[dB].includes("bloxdFragmentBlockPosition")
    }

    function Jl(BB, TB) {
      let [dB, VB] = BB;
      return dB === TB.point && VB === TB.code
    }

    function Yl(BB, TB) {
      var dB, VB, yB;
      const pB = null === (dB = BB.find((BB => BB.texture))) || void 0 === dB ? void 0 : dB.texture,
        lB = null === (VB = BB.find((BB => BB.enchantTier))) || void 0 === VB ? void 0 : VB.enchantTier,
        JB = null === (yB = BB.find((BB => BB.overlay))) || void 0 === yB ? void 0 : yB.overlay,
        YB = JB ? TB.filter((BB => Jl(BB, JB))).length : 0;
      return JB && 1 === YB ? {
        texture: pB,
        overlay: JB,
        enchantTier: lB
      } : {
        texture: pB,
        enchantTier: lB
      }
    }

    function gl(BB) {
      if ("item" === BB.kind) {
        return {
          vertexFlags: `(${Tl} & 0xffffu)`,
          varying: "vPackItem",
          value: Tl,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return BB.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Bl,
        varying: "vPackFlags",
        value: Bl,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function ol(BB) {
      return "lifeform" === BB.kind ? dl : "0u"
    }

    function kl(BB) {
      return !!BB.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Ll(BB, TB) {
      const {
        enchantTier: dB
      } = TB;
      return dB && kl(TB.defines) && "lifeform" === TB.kind && vl(BB, "enchantTier") ? dB : null
    }

    function Ol(BB, TB) {
      return kl(TB.defines) && vl(BB, "enchantSpeed")
    }

    function Dl(BB) {
      const {
        overlay: TB,
        defines: dB
      } = BB;
      if (!TB || !dB.DIFFUSE) return null;
      const VB = dB.VERTEXCOLOR || dB.INSTANCESCOLOR && dB.INSTANCES;
      return `vec4f(${TB.colour}.rgb * uniforms.vDiffuseInfos.y${VB?" * fragmentInputs.vColor.rgb":""}, ${TB.colour}.a)`
    }
    const ul = "fragmentInputs.vPackTexture";

    function Hl(BB) {
      const {
        atlas: TB,
        defines: dB,
        texture: VB
      } = BB;
      if (TB || !dB.DIFFUSE) return null;
      if (VB) return {
        texture: "diffuseSampler",
        ...VB
      };
      const yB = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===dB.DIFFUSEDIRECTUV?"vMainUV1":2===dB.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== BB.kind) return yB;
      if (!dB.BLOXD_PLUGIN_ANIMATED) return {
        ...yB,
        id: ul
      };
      const pB = tB.b.WGSL,
        lB = (0, tB.Fb)(pB, "uAnimStatesNum"),
        JB = (0, tB.kb)(pB, (0, jp.d)(pB), lB),
        YB = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${lB})`,
        layers: [JB],
        uv: `vec2f(${YB}.x, ${YB}.y * ${lB} - ${JB})`,
        levelUv: YB,
        id: ul
      }
    }

    function El(BB, TB) {
      return "box" === TB.kind && !!BB.hooks.surface && null !== Hl(TB)
    }

    function vl(BB, TB) {
      return BB.reads.fragment.includes(TB)
    }

    function ml(BB) {
      return !!BB.BLOXD_LIGHTING && !BB.BLOXD_UNLIT
    }

    function il(BB, TB, dB, VB) {
      const yB = BB.filter((BB => {
        let [dB, VB] = BB;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === dB && VB === TB
      }));
      if (1 !== yB.length) throw new Error(`A model program for shader packs has ${0===yB.length?"no":"more than one"} ${VB} code before fog (lite/modelShaderPack.ts)`);
      return BB.map((BB => BB === yB[0] ? [BB[0], dB] : BB))
    }

    function Nl(BB, TB, dB, VB) {
      const {
        hooks: yB
      } = BB, {
        kind: pB,
        defines: lB
      } = TB, JB = [...dB];
      var YB;
      TB.atlas && yB.surface && JB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Cd("atlasIdxIn")]), "item" === pB && JB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, tB.f)(tB.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), El(BB, TB) && JB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, tB.f)(tB.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (YB = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Wd}[min(u32(${YB}) - 1u, arrayLength(&${Wd}) - 1u)], ${YB} > 0.5);\n`)]);
      const gB = gl(TB);
      gB && (yB.surface || yB.light) && JB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${gB.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${gB.varying} = ${gB.value};`]);
      let oB = VB;
      if (ll(BB, TB, "fragment") && (JB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${pl});`]), oB = [...oB, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), vl(BB, "localPosition") && JB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${Vl(TB)};`]), kl(lB) && yB.surface) {
        Ol(BB, TB) && JB.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const dB = Ll(BB, TB);
        dB && JB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${dB});`]);
        const VB = (0, tB.vb)(tB.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        oB = [...il(oB, (0, Ap.j)(tB.b.WGSL), VB, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Ap.d)(yl)]]
      }
      const {
        overlay: kB
      } = TB;
      kB && Dl(TB) && yB.surface && (oB = oB.filter((BB => !Jl(BB, kB))));
      const LB = yB.light ? function(BB) {
        return "placed" === BB.kind ? {
          name: "terrain",
          engine: (0, fT.P)(tB.b.WGSL),
          pack: (0, fT.fb)(tB.b.WGSL)
        } : BB.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, fT.J)(tB.b.WGSL),
          pack: (0, fT.$)(tB.b.WGSL)
        } : null
      }(TB) : null;
      if (LB && (oB = il(oB, LB.engine, LB.pack, `${LB.name} light`), "placed" !== pB && ml(lB))) {
        const BB = lB.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, tB.Fb)(tB.b.WGSL, "uEntityLightLevels") : (0, tB.Qb)(tB.b.WGSL, "aLightLevels");
        JB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${fT.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, fT.bb)(tB.b.WGSL, BB)])
      }
      return {
        vertexCode: JB,
        fragmentCode: oB
      }
    }

    function tl(BB, TB, dB, VB) {
      return Sd(BB, TB, dB, VB, "model")
    }
    const fl = "\t@builtin(position) position: vec4f,\n";

    function sl(BB, TB) {
      const dB = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(BB)[0];
      return `${dB}${TB}${BB.slice(dB.length)}`
    }

    function Ml(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: yB
      } = TB, pB = Qd(TB, VB), {
        kind: lB,
        defines: JB
      } = dB, YB = function(BB, TB) {
        var dB, VB, yB;
        const {
          defines: pB
        } = TB, lB = gl(TB), JB = !!pB.FOG, YB = kl(pB), gB = null !== (dB = null === lB || void 0 === lB ? void 0 : lB.enchantTier) && void 0 !== dB ? dB : Ll(BB, TB) ? "fragmentInputs.vPackEnchantTier" : "0u", oB = "lifeform" === TB.kind && !pB.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (VB = null === lB || void 0 === lB ? void 0 : lB.vertexFlags) && void 0 !== VB ? VB : ol(TB),
          vertexLocalPosition: Vl(TB),
          flags: null !== (yB = null === lB || void 0 === lB ? void 0 : lB.flags) && void 0 !== yB ? yB : ol(TB),
          normal: "normalW",
          alpha: oB ? "alpha * baseColor.a" : "alpha",
          alphaOut: oB ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: JB ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: JB ? "1.0 - fog" : "0.0",
          enchantTier: gB,
          enchantColour: YB ? `${yl}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Ol(BB, TB) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: vl(BB, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Dl(TB)
        }
      }(TB, dB), gB = BB.textures.filter((BB => /^textureAtlas\d+$/.test(BB.name))).length, oB = dB.atlas && gB > 0 ? {
        count: gB,
        layers: dB.atlas.layers,
        width: dB.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: BB.material.slots.has("uAnimDataPerTex") ? (TB, dB) => wV(TB, dB, function(BB) {
          const TB = BB.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            dL: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: BB => `uniforms.uAnimDataPerTex[${BB}]${TB}`
          }
        }(BB)) : null
      } : null, kB = "placed" === lB ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", LB = null !== oB && void 0 !== oB ? oB : Hl(dB), OB = function(BB, dB) {
        let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,zT.y)()}${ad(TB,dB)}${VB}${qd(BB)}${rd}${kB}${TB.code}`
      };
      let {
        vertex: DB,
        fragment: uB
      } = BB;
      const HB = jd(yB, YB);
      if (HB) {
        const BB = ll(TB, dB, "vertex") ? `\tbloxdSpCell = ${pl};\n` : "";
        DB = tl(DB, bp, `${BB}${HB.slice(1)}${bp}`, "vertex")
      }
      const EB = `${Zd(TB,pB,function(BB,TB){return TB.TWOSIDEDLIGHTING?BB:`select(-(${BB}), ${BB}, fragmentInputs.frontFacing)`}(YB.normal,JB),YB.flags)}${Ad(yB,TB.strict,TB.program,LB,YB)}`;
      EB && (uB = tl(uB, np, `${EB.slice(1)}${np}`, "surface")), pB && TB.sunShadow && !JB.TWOSIDEDLIGHTING && (uB = tl(uB, fl, `${fl}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const vB = ed(yB);
      if (vB) {
        const BB = nd(yB, ml(JB), !0, YB);
        uB = tl(uB, ep, `${BB}${vB.slice(1)}${ep}`, "light")
      }
      const mB = El(TB, dB) ? hd : "";
      return {
        ...BB,
        vertex: sl(DB, OB(oB, !1, mB)),
        fragment: sl(uB, OB(LB, pB))
      }
    }
    const zl = {
      name: "earthSky",
      uniqueId: -1
    };
    class wl {
      constructor(BB) {
        this.resources = BB, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const BB of this.instances.values()) BB.released = !0, this.resources.destroyBuffer(BB.buffer);
        this.instances.clear()
      }
    }

    function Ul(BB) {
      return BB.failed && null !== BB.packGroup
    }
    class Fl {
      constructor(BB, TB, dB) {
        this.device = BB, this.resources = TB, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.o2 = new Kp, this.modelMeshes = new Fp, this.thinBundle = void 0, this.binder = new Ay, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new vp((BB => this.modelSlot(BB).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, gT.d)("Lite: "), this.renderStates = new Lp(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (BB, TB) => this.keepSteady(BB, TB), this.lists = new by(this.modelMeshes, this.o2, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new Yp(TB, this.warnOnce, ((BB, TB, dB) => this.programWithModel(BB, TB, dB)), Ul), this.vertexLayouts = new tp(TB, BB.limits, this.warnOnce), this.sceneLayout = TT(BB), this.frameLayout = BB.createBindGroupLayout({
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
        }), this.frameBuffer = BB.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Mp(BB, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = BB.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new cp(BB, new Mp(BB, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (BB, TB, dB) => this.pipelineFor(BB, TB, dB),
          pipelineCompiling: (BB, TB) => !BB.program.failed && !1 !== this.pipelines.get(`${BB.pipelineKey}|${TB}`),
          sceneGroup: BB => {
            const TB = dB(BB);
            return TB || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), TB
          }
        }), TB.onDestroy = BB => {
          this.thinBundle.resourceDestroyed(BB)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const yB = {
          order: BB,
          isTransparent: TB,
          _direct: !TB,
          bind: (BB, TB) => this.createBinding(yB, TB, dB, VB)
        };
        return yB
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(BB, TB, dB) {
        var VB;
        let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = TB, this.drawDefines.view = TB, this.thinBundle.Rm(), this.writeFrameUniforms();
        const pB = null !== (VB = null === yB || void 0 === yB ? void 0 : yB.defineFor("model")) && void 0 !== VB ? VB : 0;
        this.drawDefines.modelPackVariant = pB, yB && 0 !== pB && (this.packInputs ??= new Cp(this.device, yB.textureLayers(), this.sunShadow), this.packInputs.write(yB, TB.eye, yB.au())), this.lists.clear(), this.slotCount = 0;
        const lB = BB.activeCamera;
        this.o2.select(lB, this.keepSteadyBase), this.modelMeshes.select(lB, TB), dB && this.pushEarthSky(dB), this.lists.collect(BB), this.thinBundle.Zm(), this.uploadMeshSlots()
      }
      pushDraws(BB, TB, dB, VB, yB, pB) {
        let lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const JB = pB.length;
        for (let YB = 0; YB < dB; YB++) {
          const dB = TB[YB];
          let JB = this.retainedDraw(BB, dB, VB, yB);
          if (void 0 === JB && (JB = this.drawFor(BB, dB, VB, yB), this.retain(dB, JB)), JB) {
            const BB = dB.owner,
              TB = lB ? lB[YB] : -1;
            JB.slotOffset = TB < 0 ? this.writeMeshSlot(BB.getWorldMatrix().m, BB.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[TB], 16 * TB), pB.push(JB)
          }
        }
        return pB.length - JB
      }
      bundleDraws(BB, TB, dB) {
        let VB = 0;
        for (const yB of TB) {
          let TB = this.retainedDraw(BB, yB, dB, !1);
          const pB = void 0 !== TB;
          if (void 0 === TB && (TB = this.drawFor(BB, yB, dB, !1), this.retain(yB, TB)), TB) {
            const BB = yB.owner,
              dB = this.thinBundle.add(yB, TB, BB.getWorldMatrix().m, BB.visibility);
            pB && this.steadyFrom(yB, TB, dB), VB++
          }
        }
        return VB
      }
      steadyFrom(BB, TB, dB) {
        const VB = BB.owner,
          yB = this.o2.base(VB),
          pB = VB.material,
          {
            drawState: lB,
            instance: JB
          } = TB.inputs.retained;
        if (!yB || !pB || 1 !== BB.parts.materials.length || wp(BB) !== pB) return;
        const YB = yB.steady ??= {
          unit: BB,
          material: pB,
          visibility: 1,
          draw: TB,
          record: dB,
          drawState: lB,
          instance: JB,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        YB.unit = BB, YB.material = pB, YB.visibility = VB.visibility, YB.draw = TB, YB.record = dB, YB.drawState = lB, YB.instance = JB, YB.bindGroup = JB.bindGroup, YB.gpuVersion = this.resources.gpuBuffersVersion, YB.fitInstances = TB.inputs.fitInstances, YB.worldFlag = VB.getWorldMatrix().updateFlag, YB.handedFrame = this.frame
      }
      keepSteady(BB, TB) {
        const dB = BB.steady;
        if (dB.handedFrame !== this.frame - 1 || (this.frame + dB.phase) % 8 === 0) return !1;
        const VB = BB.mesh,
          {
            unit: yB,
            draw: pB,
            instance: lB,
            drawState: JB
          } = dB,
          YB = VB.forcedInstanceCount || VB.K9;
        if (!VB.isVisible || VB.vyB || VB.visibility !== dB.visibility || 0 === (VB.layerMask & TB.layerMask) || VB.material !== dB.material || 0 !== VB.renderingGroupId || VB.hasVertexAlpha || !this.drawDefines.definesHold(JB, yB, JB.instancing) || dB.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(pB.inputs, yB, JB.instancing, pB.program) || pB.program.failed || lB.released || YB <= 0 || YB > dB.fitInstances) return !1;
        if (lB.frame !== this.frame && this.bindMaterial(lB, this.modelUniforms.refreshModelUniforms(VB.jU(), lB, lB.model, this.view)), !lB.bindable || lB.bindGroup !== dB.bindGroup) return !1;
        const gB = VB.computeWorldMatrix(),
          oB = gB.updateFlag !== dB.worldFlag;
        return dB.worldFlag = gB.updateFlag, pB.instances = YB, this.thinBundle.addAgain(dB.record, pB, oB ? gB.m : null, dB.visibility), dB.handedFrame = this.frame, this.o2.drawn++, !0
      }
      retainedDraw(BB, TB, dB, VB) {
        const yB = this.inputs.get(TB),
          pB = null === yB || void 0 === yB ? void 0 : yB.retained;
        if (!yB || !pB) return;
        const {
          drawState: lB,
          program: JB,
          instance: YB,
          instancing: gB
        } = pB, oB = TB.owner;
        if (dp(oB) !== gB) return;
        const kB = this.instanceCount(oB, gB);
        if (kB <= 0) return null;
        if (YB.released || JB.failed || lB.program !== JB || !this.drawDefines.programCurrent(lB, TB, gB, dB) || !this.inputsStamped(yB, TB, gB, JB) || oB.isUnIndexed !== pB.unIndexed || this.indexKey(TB) !== pB.indexData) return;
        if (pB.indexBuffer && pB.gpuVersion !== this.resources.gpuBuffersVersion) {
          const BB = this.resources.gpuBuffer(pB.indexData);
          if (!BB) return;
          pB.indexBuffer = BB, pB.gpuVersion = this.resources.gpuBuffersVersion
        }
        let LB = !1;
        if (YB.frame !== this.frame && (LB = this.modelUniforms.refreshModelUniforms(BB, YB, YB.model, this.view)), !this.bindMaterial(YB, LB) || !this.withGpuBuffers(yB) || !this.instanceBuffersFit(oB.name, yB, kB)) return null;
        const OB = this.makeDraw(JB, yB, this.renderStates.renderState(lB.model, oB, VB, yB.state), YB, kB);
        return this.setRange(OB, TB, pB.indexBuffer, pB.indexData), OB
      }
      retain(BB, TB) {
        const dB = this.drawDefines.drawStates.get(BB);
        if (!TB || !dB || dB.program !== TB.program) {
          const TB = this.inputs.get(BB);
          return void(TB && (TB.retained = null))
        }
        const VB = BB.owner,
          yB = dB.instancing,
          pB = this.indexKey(BB),
          lB = TB.inputs.retained;
        lB ? (lB.drawState = dB, lB.instancing = yB, lB.program = TB.program, lB.instance = TB.material, lB.indexData = pB, lB.unIndexed = VB.isUnIndexed, lB.indexBuffer = TB.indexBuffer, lB.gpuVersion = this.resources.gpuBuffersVersion) : TB.inputs.retained = {
          drawState: dB,
          instancing: yB,
          program: TB.program,
          instance: TB.material,
          indexData: pB,
          unIndexed: VB.isUnIndexed,
          indexBuffer: TB.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(BB, TB, dB, VB) {
        const yB = TB.owner,
          pB = wp(TB);
        if (!pB) return null;
        const lB = pB.getClassName();
        let JB = null;
        if (function(BB) {
            return "LinesMesh" === BB.getClassName()
          }(yB)) {
          if (! function(BB) {
              return "ShaderMaterial" === BB.getClassName() && "color" === BB.shaderPath
            }(pB)) return this.warnOnce(`lines:${lB}`, `A LinesMesh with a ${lB} is not drawn yet (${pB.name})`), null;
          JB = yB
        } else if ("StandardMaterial" !== lB && "LiteMaterial" !== lB) return this.warnOnce(`class:${lB}`, `${lB} is not drawn yet (${pB.name})`), null;
        const YB = dp(yB),
          gB = this.instanceCount(yB, YB);
        if (gB <= 0) return null;
        const oB = JB ? this.lineProgramFor(yB, dB, YB) : this.drawDefines.programFor(BB, TB, pB, dB, YB);
        if (!oB || oB.failed) return null;
        const kB = JB ? null : this.drawDefines.drawStates.get(TB).model,
          LB = kB ? this.modelInstance(kB, oB) : this.materialInstance(yB, oB);
        let OB = !1;
        if (LB.frame !== this.frame && (JB ? vB(LB.ubo, JB) : OB = this.modelUniforms.refreshModelUniforms(BB, LB, LB.model, this.view)), !this.bindMaterial(LB, OB)) return null;
        const DB = this.meshInputs(TB, oB, YB);
        if (!DB || !this.instanceBuffersFit(yB.name, DB, gB)) return null;
        const uB = this.indexKey(TB);
        let HB = null;
        if (uB && !yB.isUnIndexed && (HB = this.resources.gpuBuffer(uB), !HB)) return null;
        const EB = this.renderStates.renderState(null !== kB && void 0 !== kB ? kB : pB, yB, VB, DB.state, JB ? "line-list" : "triangle-list"),
          mB = this.makeDraw(oB, DB, EB, LB, gB);
        return this.setRange(mB, TB, HB, uB), mB
      }
      indexKey(BB) {
        const TB = lp(BB);
        return TB ? this.resources.modelIndex(TB) : null
      }
      setRange(BB, TB, dB, VB) {
        dB && (BB.indexBuffer = dB, BB.indexFormat = this.resources.indexFormat(VB));
        const yB = 4 * TB.range + (dB ? 0 : 2);
        BB.unit = TB, BB.first = TB.parts.ek[yB], BB.count = TB.parts.ek[yB + 1]
      }
      makeDraw(BB, TB, dB, VB, yB) {
        TB.state !== dB && (TB.state = dB, TB.pipelineKey = `${BB.id}|${TB.layout.key}|${dB.key}`, TB.pipeline = null);
        const pB = TB.draw ??= {
          program: BB,
          inputs: TB,
          pipelineKey: "",
          layout: TB.layout,
          state: dB,
          material: VB,
          slotOffset: 0,
          vertexBuffers: TB.buffers,
          vertexOffsets: TB.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: yB,
          unit: null
        };
        return pB.program = BB, pB.pipelineKey = TB.pipelineKey, pB.state = dB, pB.material = VB, pB.vertexOffsets = TB.offsets, pB.indexBuffer = null, pB.instances = yB, pB
      }
      instanceCount(BB, TB) {
        switch (TB) {
          case "thin":
            return BB.forcedInstanceCount || BB.K9;
          case "instanced":
            return this.prepareInstances(BB);
          case "none":
            return 1
        }
      }
      prepareInstances(BB) {
        const TB = function(BB, TB) {
          const dB = TB._userInstancedBuffersStorage,
            VB = BB.batchUploads.get(TB);
          if (VB) {
            var yB;
            if (VB.layout === (null !== (yB = null === dB || void 0 === dB ? void 0 : dB.interleavedKinds) && void 0 !== yB ? yB : null)) return VB;
            VB.release()
          }
          return new GB(BB, TB, dB)
        }(this.resources, BB);
        return TB.frame !== this.frame && TB.pack(BB, this.modelMeshes.instanceBatch(BB), this.modelMeshes.worlds, this.frame), TB.count
      }
      programWithModel(BB, TB, dB) {
        const VB = this.modelSlot(BB),
          yB = gp(VB, BB, dB),
          pB = this.drawDefines.modelPackKind(BB),
          lB = pB ? function(BB, TB, dB, VB) {
            const yB = (0, MB.x)(BB, fB.k.name),
              pB = [];
            for (const {
                feature: YB,
                state: gB,
                active: oB
              }
              of BB.features) {
              var lB, JB;
              const BB = oB ? null === (lB = (JB = (0, oT.g)(YB)).pD) || void 0 === lB ? void 0 : lB.call(JB, gB) : void 0;
              BB && pB.push(BB)
            }
            return {
              kind: TB,
              atlas: null !== yB && void 0 !== yB && yB.active ? (0, fB.c)(yB.state) : null,
              defines: dB,
              ...Yl(pB, VB)
            }
          }(BB, pB, TB, VB.fragmentCode) : null;
        if (lB && function(BB) {
            const TB = BB.defines;
            return (null === BB.atlas || !!TB.DIFFUSE && 1 === TB.DIFFUSEDIRECTUV) && !!TB.NORMAL && !TB.REFLECTION && !TB.EMISSIVEASILLUMINATION && !TB.LINKEMISSIVEWITHDIFFUSE
          }(lB)) {
          const dB = this.modelPackProgram(BB, TB, `${yB}#${pB}#sp${this.drawDefines.modelPackVariant}`, VB, lB);
          if (dB && !dB.failed) return dB
        }
        const JB = this.programs.get(yB);
        if (JB || this.unbuildable.has(yB)) return null !== JB && void 0 !== JB ? JB : null;
        let YB;
        try {
          YB = gy({
            defines: yp(TB),
            vertexCode: VB.vertexCode,
            fragmentCode: VB.fragmentCode,
            pluginUniforms: VB.pluginUniforms
          })
        } catch (gB) {
          return this.unbuildable.add(yB), this.warnOnce(`build:${yB}`, `could not build a program for ${BB.name}: ${String(gB)}`), null
        }
        return this.createProgram(yB, YB, "standard")
      }
      modelPackProgram(BB, TB, dB, VB, yB) {
        const pB = this.programs.get(dB);
        if (pB || this.unbuildable.has(dB)) return null !== pB && void 0 !== pB ? pB : null;
        const lB = this.drawDefines.modelPackVariant;
        let JB;
        try {
          const BB = function(BB) {
              return (0, wT.d)(BB, "model")
            }(lB),
            dB = Nl(BB, yB, VB.vertexCode, VB.fragmentCode);
          JB = Ml(gy({
            defines: yp(TB),
            ...dB,
            pluginUniforms: VB.pluginUniforms
          }), BB, yB, !!this.sunShadow)
        } catch (oB) {
          return this.unbuildable.add(dB), this.warnOnce(`build:${dB}`, `could not build a shader pack program for ${BB.name}, which draws without the pack: ${String(oB)}`), null
        }
        const YB = Wp(lB, !!this.sunShadow),
          gB = {
            group: this.packInputs.bindGroupFor(null, YB),
            layout: Zp(this.device, {
              depth: !1,
              sunShadow: YB
            })
          };
        return this.createProgram(dB, JB, function(BB) {
          return `standard-sp${BB}`
        }(lB), gB)
      }
      lineProgramFor(BB, TB, dB) {
        const VB = EB(BB, dB, TB, this.view);
        let yB = this.linePrograms.get(VB);
        var pB;
        return yB || (yB = this.createProgram(`lines#${VB}`, (pB = function(BB) {
          const TB = new Map;
          for (let dB = 0; dB < gB.length; dB++) BB & 1 << dB && TB.set(gB[dB], !0);
          return TB
        }(VB), Oy({
          defines: pB,
          vertex: ky,
          fragment: Ly,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(VB, yB)), yB
      }
      createProgram(BB, TB, dB) {
        var VB;
        let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pB = this.nextProgramId++,
          lB = `${dB}-${pB}`,
          JB = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          YB = [{
            binding: 0,
            visibility: JB,
            buffer: {
              type: "uniform"
            }
          }];
        for (const kB of TB.textures) YB.push({
          binding: kB.binding,
          visibility: JB,
          texture: {
            viewDimension: kB.dimension
          }
        }), YB.push({
          binding: kB.samplerBinding,
          visibility: JB,
          sampler: {}
        });
        const gB = this.device.createBindGroupLayout({
            label: lB,
            entries: YB
          }),
          oB = {
            key: BB,
            id: pB,
            kind: dB,
            program: TB,
            vertex: this.device.createShaderModule({
              label: `${lB}-vertex`,
              code: TB.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${lB}-fragment`,
              code: TB.fragment
            }),
            materialLayout: gB,
            pipelineLayout: this.device.createPipelineLayout({
              label: lB,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, gB, ...yB ? [yB.layout] : []]
            }),
            packGroup: null !== (VB = null === yB || void 0 === yB ? void 0 : yB.group) && void 0 !== VB ? VB : null,
            failed: !1
          };
        return this.programs.set(BB, oB), oB
      }
      writeFrameUniforms() {
        const BB = this.frameUniforms;
        Ep(this.view, BB), this.device.queue.writeBuffer(this.frameBuffer, 0, BB)
      }
      materialInstance(BB, TB) {
        let dB = this.materials.get(BB);
        if (!dB) {
          const TB = new Map;
          this.materials.set(BB, TB), BB.lF.addOnce((() => {
            for (const BB of TB.values()) BB.released = !0, this.resources.destroyBuffer(BB.buffer);
            this.materials.delete(BB)
          })), dB = TB
        }
        let VB = dB.get(TB.key);
        return VB || (VB = this.newMaterialInstance(BB, null, TB), dB.set(TB.key, VB)), VB
      }
      modelInstance(BB, TB) {
        const dB = this.modelSlot(BB);
        let VB = dB.instances.get(TB.key);
        return VB || (VB = this.newMaterialInstance(BB, BB, TB), dB.instances.set(TB.key, VB)), VB
      }
      modelSlot(BB) {
        let TB = BB.gpu[wB.d.lite];
        return TB || (TB = new wl(this.resources), BB.gpu[wB.d.lite] = TB), TB
      }
      newMaterialInstance(BB, TB, dB) {
        const VB = dB.program.material.floats,
          yB = new Float32Array(VB),
          pB = new Map;
        return {
          owner: BB,
          model: TB,
          program: dB,
          data: yB,
          uploaded: new Float32Array(VB).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${BB.name}-uniforms`,
            size: Math.max(16, 4 * VB),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: pB,
          ubo: new Hp(dB.program.material.slots, yB, pB),
          bindGroup: null,
          bound: new Array(2 * dB.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(BB) {
        var TB;
        const dB = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: vy + my,
            fragment: vy + iy,
            attributes: [],
            material: Ey,
            textures: []
          }, "earthSky"),
          VB = this.earthSkyUniforms ??= this.newMaterialInstance(zl, null, dB);
        this.earthSkyFrom !== BB && (this.earthSkyFrom = BB, VB.data.fill(0)), Uy(VB.ubo, BB, this.view);
        const yB = this.vertexInputs(dB, zl, "earthSky", dB, null);
        if (dB.failed || !yB || !this.bindMaterial(VB, !1)) return;
        const pB = null !== (TB = yB.state) && void 0 !== TB ? TB : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          lB = this.makeDraw(dB, yB, pB, VB, 1);
        lB.count = Dy.length;
        const JB = Fy(BB, this.view);
        lB.slotOffset = this.writeMeshSlot(JB, 1), this.lists.skyDraws.push(lB)
      }
      uploadIfChanged(BB) {
        const {
          data: TB,
          uploaded: dB
        } = BB;
        for (let VB = 0; VB < TB.length; VB++)
          if (TB[VB] !== dB[VB]) return dB.set(TB), void this.device.queue.writeBuffer(BB.buffer, 0, TB)
      }
      bindMaterial(BB, TB) {
        return BB.frame !== this.frame && (BB.frame = this.frame, TB || this.uploadIfChanged(BB), BB.bindable = this.bindTextures(BB)), BB.bindable
      }
      bindTextures(BB) {
        const {
          program: TB,
          bound: dB
        } = BB, VB = TB.program.textures;
        let yB = !BB.bindGroup,
          pB = !0;
        for (let lB = 0; lB < VB.length; lB++) {
          const TB = BB.textures.get(VB[lB].name),
            JB = TB ? this.resources.boundTexture(TB) : null;
          JB ? dB[2 * lB] === JB.view && dB[2 * lB + 1] === JB.sampler || (dB[2 * lB] = JB.view, dB[2 * lB + 1] = JB.sampler, yB = !0) : (TB || BB.ubo.expected.has(VB[lB].name) || this.warnOnce(`texture:${BB.owner.name}:${VB[lB].name}`, `${BB.owner.name} has no ${VB[lB].name}`), pB = !1)
        }
        if (!pB) return yB && (BB.bindGroup = null), !1;
        if (yB) {
          const yB = [{
            binding: 0,
            resource: {
              buffer: BB.buffer
            }
          }];
          for (let BB = 0; BB < VB.length; BB++) yB.push({
            binding: VB[BB].binding,
            resource: dB[2 * BB]
          }), yB.push({
            binding: VB[BB].samplerBinding,
            resource: dB[2 * BB + 1]
          });
          BB.bindGroup = this.device.createBindGroup({
            label: `${BB.owner.name}-material`,
            layout: TB.materialLayout,
            entries: yB
          })
        }
        return !0
      }
      writeMeshSlot(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, BB, TB, dB), this.slotCount++ * WV
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(BB, TB, dB, VB, yB) {
        let pB = this.inputs.get(BB);
        if (!pB || pB.program !== VB || !fp(TB, pB, this.resources, yB)) {
          var lB;
          if (pB = null !== (lB = this.vertexLayouts.resolveInputs(TB, dB, VB, yB)) && void 0 !== lB ? lB : void 0, !pB) return null;
          this.inputs.set(BB, pB)
        }
        return this.withGpuBuffers(pB)
      }
      meshInputs(BB, TB, dB) {
        const VB = this.inputs.get(BB);
        if (VB && this.inputsStamped(VB, BB, dB, TB)) return this.withGpuBuffers(VB);
        const yB = BB.owner,
          pB = lp(BB),
          lB = this.vertexInputs(BB, yB, yB.name, TB, pB);
        return lB && (lB.geometry = Jp(BB), lB.instanceLayout = this.drawDefines.instanceLayout(yB, dB)), lB
      }
      inputsStamped(BB, TB, dB, VB) {
        return function(BB, TB, dB, VB) {
          return BB.program === dB && BB.geometry === Jp(TB) && BB.instanceLayout === VB
        }(BB, TB, VB, this.drawDefines.instanceLayout(TB.owner, dB))
      }
      withGpuBuffers(BB) {
        return Gp(BB, this.resources, this.zeroBuffer) ? BB : null
      }
      instanceBuffersFit(BB, TB, dB) {
        const VB = xp(TB, dB, this.resources, this.zeroBuffer);
        if (VB) {
          const yB = TB.ends[VB.index] - TB.offsets[VB.index] + TB.o9[VB.index];
          return this.warnOnce(`overrun:${BB}`, `${BB} draws ${dB} instances from a ${yB}-byte buffer (${VB.needed} needed)`), !1
        }
        return !0
      }
      createBinding(BB, TB, dB, VB) {
        const yB = `${TB._colorFormat}|${TB._depthStencilFormat}|${TB._depthCompare}|${TB._sampleCount}`,
          pB = lT(this.device, TB);
        if (BB === this.skyLastRenderable) {
          let dB = null;
          return {
            renderable: BB,
            pipeline: pB,
            draw: BB => dB ? this.drawSky(BB, TB, yB, dB) : 0,
            update: BB => {
              dB = BB
            }
          }
        }
        return {
          renderable: BB,
          pipeline: pB,
          draw: BB => (VB ? VB.execute(BB, TB, yB) : 0) + this.drawList(BB, TB, yB, dB)
        }
      }
      drawSky(BB, TB, dB, VB) {
        const yB = this.lists.skyDraws,
          pB = yB.length > 0;
        if (pB) {
          var lB;
          const dB = (null !== (lB = TB._depthCompare) && void 0 !== lB ? lB : dT).startsWith("greater") ? 0 : 1;
          BB.setViewport(0, 0, VB.targetWidth, VB.targetHeight, dB, dB)
        }
        const JB = this.drawList(BB, TB, dB, yB);
        return pB && BB.setViewport(0, 0, VB.targetWidth, VB.targetHeight, 0, 1), JB
      }
      drawList(BB, TB, dB, VB) {
        let yB = 0;
        const pB = this.binder;
        pB.reset();
        for (const lB of VB) {
          const VB = this.pipelineFor(lB, TB, dB);
          VB && (pB.bind(BB, lB, VB, this.meshSlots.bindGroup, lB.slotOffset), lB.indexBuffer ? BB.drawIndexed(lB.count, lB.instances, lB.first, 0, 0) : BB.draw(lB.count, lB.instances, lB.first, 0), yB++)
        }
        return yB
      }
      pipelineFor(BB, TB, dB) {
        var VB, yB;
        if (BB.program.failed) return null;
        const pB = BB.inputs;
        if (pB.pipeline && pB.pipelineTarget === dB) return pB.pipeline;
        const lB = `${BB.pipelineKey}|${dB}`,
          JB = this.pipelines.get(lB);
        if (void 0 !== JB) return JB && (pB.pipeline = JB, pB.pipelineTarget = dB), JB || null;
        this.pipelines.set(lB, null);
        const {
          program: YB,
          layout: gB,
          state: oB
        } = BB, kB = {
          label: `standard-${YB.id}`,
          layout: YB.pipelineLayout,
          vertex: {
            module: YB.vertex,
            entryPoint: "main",
            buffers: gB.buffers
          },
          fragment: bB({
            module: YB.fragment,
            entryPoint: "main"
          }, TB, oB.blend, oB.colourWrite),
          depthStencil: TB._depthStencilFormat ? {
            format: TB._depthStencilFormat,
            depthCompare: null !== (VB = null !== (yB = oB.depthCompare) && void 0 !== yB ? yB : TB._depthCompare) && void 0 !== VB ? VB : dT,
            depthWriteEnabled: oB.depthWrite,
            depthBias: oB.depthBias,
            depthBiasSlopeScale: oB.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: TB._sampleCount
          },
          primitive: {
            topology: oB.topology,
            frontFace: oB.frontFace,
            cullMode: oB.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(kB).then((BB => {
          this.compiling--, this.pipelines.set(lB, BB)
        }), (BB => {
          this.compiling--, this.reportFailure(YB, lB, BB)
        })), null
      }
      forEachSunShadowCaster(BB) {
        const TB = this.caster,
          dB = (dB, VB, yB) => {
            const pB = dB.unit && function(BB) {
              const TB = BB.material.model;
              return null !== TB && (TB.lifeform || TB.item) && TB.castsSunShadow && "triangle-list" === BB.state.topology
            }(dB) ? lp(dB.unit) : null;
            if (!pB) return;
            const lB = dB.unit.owner;
            switch (TB.geometry = pB, TB.skip = lB.noSunShadowVertices, TB.indexed = null !== dB.indexBuffer, TB.first = dB.first, TB.count = dB.count, TB.JL = VB, TB.worldAt = yB, TB.instances = null, TB.instanceCount = 1, TB.thin = !1, dp(lB)) {
              case "thin": {
                const BB = lB._thinInstanceDataStorage.matrixData;
                if (!BB) return;
                TB.instances = BB, TB.instanceCount = Math.min(dB.instances, BB.length / 16), TB.thin = !0;
                break
              }
              case "instanced": {
                const BB = this.resources.batchUploads.get(lB);
                if (!BB || BB.frame !== this.frame || !this.writeBatchCasters(BB)) return;
                break
              }
            }
            BB(TB)
          };
        for (const VB of this.lists.opaqueDraws) dB(VB, this.meshSlots.data, VB.slotOffset / 4);
        this.thinBundle.forEachDrawn(dB)
      }
      writeBatchCasters(BB) {
        const {
          caster: TB
        } = this, dB = BB.packedMatrices, VB = BB.count;
        TB.instances = dB, TB.instanceCount = VB;
        let yB = -1;
        for (let pB = 0; pB < VB; pB++) {
          const TB = Kl(BB.packedRowMesh(pB));
          TB && yB < 0 ? (this.casterWorlds.length < 16 * VB && (this.casterWorlds = new Float32Array(dB.length)), this.casterWorlds.set(dB.subarray(0, 16 * pB)), yB = pB) : !TB && yB >= 0 && (this.casterWorlds.set(dB.subarray(16 * pB, 16 * pB + 16), 16 * yB), yB++)
        }
        return yB >= 0 && (TB.instances = this.casterWorlds, TB.instanceCount = yB), TB.instanceCount > 0
      }
      async reportFailure(BB, TB, dB) {
        const VB = [];
        let yB = !0;
        for (const [pB, lB] of [
            ["vertex", BB.vertex],
            ["fragment", BB.fragment]
          ]) {
          const BB = await lB.getCompilationInfo();
          for (const TB of BB.messages) yB &&= "error" !== TB.type, VB.push(`${pB}:${TB.lineNum}:${TB.linePos} ${TB.type}: ${TB.message}`)
        }
        if (yB && !BB.packGroup) return this.pipelines.set(TB, !1), console.error(`Lite: pipeline ${TB} failed`, dB), void jy("mesh", BB.kind, dB);
        BB.failed || (BB.failed = !0, console.error(`Lite: program ${BB.id} failed`, dB, VB.join("\n"), {
          program: BB.program,
          key: BB.key
        }), jy("mesh", BB.kind, dB, yB ? null : VB[0]))
      }
    }

    function Kl(BB) {
      var TB, dB;
      const VB = null === (TB = BB.sK) || void 0 === TB || null === (dB = TB.aShaderPackItem) || void 0 === dB ? void 0 : dB.x;
      return void 0 !== VB && 0 !== (VB & YT.h)
    }
    var rl = dB(40397),
      Il = dB(40405),
      cl = dB(40412),
      Sl = dB(40362);
    const Pl = [0, 3, 1, 4, 2, 5];

    function Ql(BB, TB, dB, VB, yB) {
      const pB = dB[0].width;
      try {
        return yB ? function(BB, TB, dB) {
          const VB = (0, Sl.c)(BB, dB, dB, 6);
          for (let yB = 0; yB < 6; yB++)(0, Sl.e)(BB, VB, yB, TB[Pl[yB]], {
            invertY: !1
          });
          return VB.texture
        }(BB, dB, pB) : function(BB, TB, dB, VB) {
          const yB = BB.createTexture({
            label: "sink-cube",
            size: {
              width: dB,
              height: dB,
              depthOrArrayLayers: 6
            },
            format: VB,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let pB = 0; pB < 6; pB++) BB.queue.copyExternalImageToTexture({
            source: TB[Pl[pB]]
          }, {
            texture: yB,
            origin: {
              x: 0,
              y: 0,
              z: pB
            }
          }, {
            width: dB,
            height: dB
          });
          return yB
        }(TB, dB, pB, 1 === VB ? "r8unorm" : "rgba8unorm")
      } finally {
        Rl(dB)
      }
    }

    function Rl(BB) {
      for (const TB of null !== BB && void 0 !== BB ? BB : []) null === TB || void 0 === TB || TB.close()
    }
    async function al(BB) {
      const TB = [],
        dB = [];
      if (await Promise.all(BB.map(((BB, VB) => (TB[VB] = null, BB.then((BB => {
          TB[VB] = BB
        }), (BB => {
          dB.push(BB)
        })))))), dB.length > 0) throw Rl(TB), dB[0];
      return TB
    }
    class Zl {
      constructor(BB) {
        this.Kk = BB, this.starts = [], this.lengths = [], this.used = 0, BB > 0 && (this.starts.push(0), this.lengths.push(BB))
      }
      allocate(BB) {
        const {
          starts: TB,
          lengths: dB
        } = this;
        for (let VB = 0; VB < TB.length; VB++) {
          if (dB[VB] < BB) continue;
          const yB = TB[VB];
          return dB[VB] === BB ? (TB.splice(VB, 1), dB.splice(VB, 1)) : (TB[VB] += BB, dB[VB] -= BB), this.used += BB, yB
        }
        return -1
      }
      free(BB, TB) {
        this.used -= TB;
        const dB = Math.min(BB + TB, this.Kk);
        dB > BB && this.release(BB, dB - BB)
      }
      grow(BB) {
        const TB = this.Kk;
        this.Kk = BB, this.release(TB, BB - TB)
      }
      truncate(BB) {
        const {
          starts: TB,
          lengths: dB
        } = this;
        for (let VB = TB.length - 1; VB >= 0 && TB[VB] + dB[VB] > BB; VB--) TB[VB] >= BB ? (TB.splice(VB, 1), dB.splice(VB, 1)) : dB[VB] = BB - TB[VB];
        this.Kk = BB
      }
      release(BB, TB) {
        const {
          starts: dB,
          lengths: VB
        } = this;
        let yB = 0,
          pB = dB.length;
        for (; yB < pB;) {
          const TB = yB + pB >> 1;
          dB[TB] < BB ? yB = TB + 1 : pB = TB
        }
        const lB = yB,
          JB = lB > 0 && dB[lB - 1] + VB[lB - 1] === BB,
          YB = lB < dB.length && BB + TB === dB[lB];
        JB && YB ? (VB[lB - 1] += TB + VB[lB], dB.splice(lB, 1), VB.splice(lB, 1)) : JB ? VB[lB - 1] += TB : YB ? (dB[lB] = BB, VB[lB] += TB) : (dB.splice(lB, 0, BB), VB.splice(lB, 0, TB))
      }
    }
    const Xl = 256;
    class Wl {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = BB, this.onReplaced = TB, this.mergeGap = dB, this.gpu = null, this.bytes = void 0, this.ek = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const yB = Math.max(Xl, Math.ceil(VB / Xl) * Xl);
        this.bytes = new Uint8Array(yB), this.ek = new Zl(yB / Xl)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(BB) {
        return Math.max(1, Math.ceil(BB / Xl)) * Xl
      }
      allocate(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB;
        const VB = Wl.slotBytes(BB),
          yB = VB / Xl;
        let pB = this.ek.allocate(yB);
        pB < 0 && (this.grow(this.ek.Kk + yB), pB = this.ek.allocate(yB));
        const lB = pB * Xl;
        return this.growTo(lB + Math.max(dB, VB)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, lB, lB + VB), TB && this.bytes.set(new Uint8Array(TB.buffer, TB.byteOffset, Math.min(TB.byteLength, VB)), lB), this.markDirty(lB, lB + VB), lB
      }
      growTo(BB) {
        const TB = Math.ceil(BB / Xl);
        TB > this.ek.Kk && this.grow(TB)
      }
      free(BB, TB) {
        this.freed.push(BB, TB)
      }
      write(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (VB <= 0) return;
        this.bytes.set(new Uint8Array(TB.buffer, dB, VB), BB);
        let pB = BB + VB;
        if (yB) {
          const TB = BB + 4 * Math.ceil(VB / 4);
          this.bytes.fill(0, pB, TB), pB = TB
        }
        this.markDirty(BB, pB)
      }
      move(BB, TB, dB) {
        this.bytes.copyWithin(TB, BB, BB + dB), this.markDirty(TB, TB + dB)
      }
      flush() {
        for (const TB of this.retired) this.onReplaced(TB), TB.destroy();
        this.retired.length = 0;
        const BB = this.dirtyStarts.length;
        if (BB > 0) {
          const {
            dirtyStarts: TB,
            dirtyEnds: dB,
            order: VB
          } = this;
          VB.length = BB;
          for (let JB = 0; JB < BB; JB++) VB[JB] = JB;
          BB > 1 && VB.sort(((BB, dB) => TB[BB] - TB[dB]));
          const yB = this.mergeGap;
          let pB = TB[VB[0]],
            lB = dB[VB[0]];
          for (let JB = 1; JB < BB; JB++) {
            const BB = VB[JB];
            TB[BB] - lB <= yB ? lB = Math.max(lB, dB[BB]) : (this.send(pB, lB), pB = TB[BB], lB = dB[BB])
          }
          this.send(pB, lB), TB.length = 0, dB.length = 0
        }
        this.holding = !1
      }
      Zm() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const BB = this.freed;
        for (let TB = 0; TB < BB.length; TB += 2) this.ek.free(BB[TB] / Xl, BB[TB + 1] / Xl);
        BB.length = 0
      }
      send(BB, TB) {
        this.device.queue.writeBuffer(this.gpu, BB, this.bytes.buffer, BB, TB - BB);
        for (const dB of this.replaced) {
          const VB = Math.min(TB, dB.size);
          VB > BB && this.device.queue.writeBuffer(dB, BB, this.bytes.buffer, BB, VB - BB)
        }
      }
      markDirty(BB, TB) {
        BB &= -4, TB = TB + 3 & -4, this.holding ? (this.dirtyStarts.push(BB), this.dirtyEnds.push(TB)) : this.send(BB, TB)
      }
      grow(BB) {
        const TB = this.ek.Kk,
          dB = Math.max(2 * TB, BB),
          VB = new Uint8Array(dB * Xl);
        VB.set(this.bytes);
        const yB = this.gpu;
        this.gpu = this.createGpu(VB.byteLength), this.bytes = VB, this.ek.grow(dB), yB && (this.replaced.push(yB), this.onReplaced(yB)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, TB * Xl)
      }
      createGpu(BB) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: BB,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function hl(BB) {
      return Array.isArray(BB) ? new Float32Array(BB) : BB
    }

    function Cl(BB, TB, dB, VB, yB) {
      const pB = ry(yB),
        lB = Math.min(yB, VB.byteLength);
      if (pB === lB && VB.byteOffset % 4 === 0) return void BB.queue.writeBuffer(TB, dB, VB.buffer, VB.byteOffset, pB);
      const JB = new Uint8Array(pB);
      JB.set(new Uint8Array(VB.buffer, VB.byteOffset, lB)), BB.queue.writeBuffer(TB, dB, JB)
    }

    function Gl(BB, TB, dB) {
      const VB = "linear",
        yB = "nearest";
      let pB = yB,
        lB = yB,
        JB = "nearest",
        YB = !TB;
      switch (BB) {
        case 11:
          pB = VB, lB = VB;
          break;
        case 3:
          pB = VB, lB = VB, JB = TB ? "linear" : "nearest";
          break;
        case 8:
          JB = TB ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          lB = VB;
          break;
        case 6:
          lB = VB, JB = TB ? "linear" : "nearest";
          break;
        case 7:
          lB = VB, YB = !0;
          break;
        case 9:
          pB = VB;
          break;
        case 10:
          pB = VB, JB = TB ? "linear" : "nearest";
          break;
        case 2:
          pB = VB, lB = VB, dB > 1 ? (JB = "linear", YB = !1) : YB = !0;
          break;
        case 12:
          pB = VB, YB = !0;
          break;
        default:
          YB = !0
      }
      return dB > 1 && !YB ? {
        magFilter: VB,
        minFilter: VB,
        mipmapFilter: "linear",
        maxAnisotropy: dB
      } : {
        magFilter: pB,
        minFilter: lB,
        mipmapFilter: JB,
        ...YB ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function ql(BB) {
      return 0 === BB ? "clamp-to-edge" : 2 === BB ? "mirror-repeat" : "repeat"
    }
    class xl {
      constructor(BB, TB) {
        let {
          vertexArena: dB = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = BB, this.device = TB, this.buffers = new WeakMap, this.I5 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = dB ? new Wl(TB, (BB => {
          var TB;
          null === (TB = this.onDestroy) || void 0 === TB || TB.call(this, BB), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var BB;
        null === (BB = this.arena) || void 0 === BB || BB.flush()
      }
      endUploadFrame() {
        var BB;
        null === (BB = this.arena) || void 0 === BB || BB.Zm()
      }
      vertexBufferCreated(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dB ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(BB);
        const yB = hl(TB);
        BB.Kk = yB.byteLength, this.buffers.set(BB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: dB && null !== this.arena,
          pending: yB,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: VB
        })
      }
      vertexBufferUpdated(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        const yB = this.buffers.get(BB);
        if (!yB) return;
        const pB = hl(TB),
          lB = void 0 === VB ? pB.byteLength : Math.min(VB, pB.byteLength);
        this.update(yB, pB, dB, lB)
      }
      vertexBufferFloatsUpdated(BB, TB, dB, VB) {
        const yB = this.buffers.get(BB);
        if (!yB) return;
        const pB = dB * Float32Array.BYTES_PER_ELEMENT,
          lB = (VB - dB) * Float32Array.BYTES_PER_ELEMENT;
        yB.slot >= 0 && lB > 0 && pB + lB <= yB.size ? this.writeSlot(yB, pB, TB, TB.byteOffset + pB, lB, !1) : yB.gpu && lB > 0 && pB + lB <= yB.gpu.size ? this.device.queue.writeBuffer(yB.gpu, pB, TB.buffer, TB.byteOffset + pB, lB) : this.update(yB, TB.subarray(dB, VB), pB, lB)
      }
      indexBufferCreated(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(BB);
        const VB = function(BB) {
          if (BB instanceof Uint16Array || BB instanceof Uint32Array) return BB;
          for (let TB = 0; TB < BB.length; TB++)
            if (BB[TB] >= 65535) return new Uint32Array(BB);
          return new Uint16Array(BB)
        }(TB);
        BB.is32Bits = 4 === VB.BYTES_PER_ELEMENT, BB.Kk = VB.byteLength, this.buffers.set(BB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: VB,
          ownsPending: VB !== TB,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: dB
        })
      }
      bufferDeleted(BB) {
        const TB = this.buffers.get(BB);
        null !== TB && void 0 !== TB && TB.gpu ? (this.destroyBuffer(TB.gpu), this.gpuBuffersVersion++) : TB && TB.slot >= 0 && (this.arena.free(TB.slot, TB.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(BB)
      }
      update(BB, TB, dB, VB) {
        if (BB.slot >= 0) this.updateSlot(BB, TB, dB, VB);
        else if (BB.gpu) {
          if (dB + ry(VB) > BB.gpu.size) {
            const TB = this.device.createBuffer({
                label: BB.label,
                size: ry(Math.max(2 * BB.gpu.size, dB + VB)),
                usage: BB.usage | GPUBufferUsage.COPY_SRC
              }),
              yB = this.device.createCommandEncoder();
            yB.copyBufferToBuffer(BB.gpu, 0, TB, 0, BB.gpu.size), this.device.queue.submit([yB.finish()]), this.destroyBuffer(BB.gpu), this.gpuBuffersVersion++, BB.gpu = TB
          }
          Cl(this.device, BB.gpu, dB, TB, VB)
        } else {
          const pB = new Uint8Array(TB.buffer, TB.byteOffset, VB),
            lB = BB.pending;
          if (lB && BB.ownsPending && dB + VB <= lB.byteLength) new Uint8Array(lB.buffer, lB.byteOffset, lB.byteLength).set(pB, dB);
          else if (lB && 0 === dB && VB === lB.byteLength && TB.byteLength === VB) BB.pending = TB, BB.ownsPending = !1;
          else {
            var yB;
            const TB = new Uint8Array(Math.max(null !== (yB = null === lB || void 0 === lB ? void 0 : lB.byteLength) && void 0 !== yB ? yB : 0, dB + VB));
            lB && TB.set(new Uint8Array(lB.buffer, lB.byteOffset, lB.byteLength)), TB.set(pB, dB), BB.pending = TB, BB.ownsPending = !0
          }
        }
      }
      updateSlot(BB, TB, dB, VB) {
        const yB = this.arena;
        dB + ry(VB) > BB.size && (BB.size = ry(Math.max(2 * BB.size, dB + VB)), yB.growTo(BB.slot + BB.size), this.gpuBuffersVersion++), 0 === VB ? this.writeSlot(BB, dB, Al, 0, 4, !1) : this.writeSlot(BB, dB, TB, TB.byteOffset, VB, !0)
      }
      writeSlot(BB, TB, dB, VB, yB, pB) {
        const lB = TB + (pB ? ry(yB) : yB);
        lB > BB.slotBytes && this.moveSlot(BB, lB), this.arena.write(BB.slot + TB, dB, VB, yB, pB)
      }
      moveSlot(BB, TB) {
        const dB = this.arena,
          VB = Wl.slotBytes(Math.max(TB, Math.min(2 * BB.slotBytes, BB.size))),
          yB = dB.allocate(VB, null, BB.size);
        dB.move(BB.slot, yB, BB.slotBytes), dB.free(BB.slot, BB.slotBytes), BB.slot = yB, BB.slotBytes = VB, this.gpuBuffersVersion++
      }
      cover(BB, TB) {
        const dB = this.buffers.get(BB);
        if (!dB || dB.slot < 0) return !1;
        const VB = Math.min(TB, dB.size);
        return !(VB <= dB.slotBytes) && (this.moveSlot(dB, VB), !0)
      }
      destroyBuffer(BB) {
        var TB;
        null === (TB = this.onDestroy) || void 0 === TB || TB.call(this, BB), BB.destroy()
      }
      gpuBuffer(BB) {
        const TB = this.buffers.get(BB);
        if (!TB) return null;
        if (TB.slot >= 0) return this.arena.buffer;
        if (TB.arena && TB.pending) {
          const BB = TB.pending,
            dB = this.arena;
          return TB.size = ry(BB.byteLength), TB.slotBytes = Wl.slotBytes(function(BB) {
            const TB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength);
            let dB = TB.length;
            if (BB.byteOffset % 4 === 0) {
              for (; dB % 4 !== 0 && 0 === TB[dB - 1];) dB--;
              if (dB % 4 === 0) {
                const TB = new Uint32Array(BB.buffer, BB.byteOffset, dB / 4);
                let VB = TB.length;
                for (; VB > 0 && 0 === TB[VB - 1];) VB--;
                dB = 4 * VB
              }
            }
            for (; dB > 0 && 0 === TB[dB - 1];) dB--;
            return dB
          }(BB)), TB.slot = dB.allocate(TB.slotBytes, BB, TB.size), TB.pending = null, dB.buffer
        }
        if (!TB.gpu && TB.pending) {
          const BB = TB.pending;
          TB.gpu = this.device.createBuffer({
            label: TB.label,
            size: ry(BB.byteLength),
            usage: TB.usage
          }), Cl(this.device, TB.gpu, 0, BB, BB.byteLength), TB.pending = null
        }
        return TB.gpu
      }
      gpuOffset(BB) {
        var TB, dB;
        const VB = null !== (TB = null === (dB = this.buffers.get(BB)) || void 0 === dB ? void 0 : dB.slot) && void 0 !== TB ? TB : -1;
        return VB < 0 ? 0 : VB
      }
      gpuEnd(BB) {
        var TB, dB;
        const VB = this.buffers.get(BB);
        return VB ? VB.slot >= 0 ? VB.slot + VB.size : null !== (TB = null === (dB = VB.gpu) || void 0 === dB ? void 0 : dB.size) && void 0 !== TB ? TB : 0 : 0
      }
      vertexInput(BB, TB, dB) {
        var VB, yB, pB, lB;
        return null !== (VB = null !== (yB = dB && this.modelInput(dB, TB)) && void 0 !== yB ? yB : null === (pB = null !== (lB = this.I5.get(BB)) && void 0 !== lB ? lB : this.batchUploads.get(BB)) || void 0 === pB ? void 0 : pB.inputs[TB]) && void 0 !== VB ? VB : null
      }
      modelInput(BB, TB) {
        const dB = this.geometrySlot(BB);
        let VB = dB.inputs.get(TB);
        if (void 0 === VB) {
          const yB = BB.vertexAttributes.find((BB => BB.kind === TB));
          VB = yB ? new qB(this.modelKey(dB, yB.data, !1), yB.offset, yB.stride, yB.components, !1, yB.glType, yB.isNormalized) : null, dB.inputs.set(TB, VB)
        }
        return VB
      }
      modelIndex(BB) {
        return BB.indexData && this.modelKey(this.geometrySlot(BB), BB.indexData, !0)
      }
      geometrySlot(BB) {
        let TB = BB.gpu[wB.d.lite];
        if (!TB) {
          const dB = new Map,
            VB = () => {
              for (const BB of dB.values()) this.bufferDeleted(BB)
            },
            yB = BB => {
              const TB = dB.get(BB);
              TB && this.vertexBufferUpdated(TB, BB)
            };
          TB = {
            keys: dB,
            inputs: new Map,
            release: VB,
            updated: yB
          }, BB.gpu[wB.d.lite] = TB
        }
        return TB
      }
      modelKey(BB, TB, dB) {
        let VB = BB.keys.get(TB);
        if (!VB) {
          if (dB) {
            const BB = {
              Kk: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(BB, TB, "model-indices"), VB = BB
          } else VB = {
            Kk: 0
          }, this.vertexBufferCreated(VB, TB, !1, "model-vertices");
          BB.keys.set(TB, VB)
        }
        return VB
      }
      indexFormat(BB) {
        return BB.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(BB, TB) {
        --BB.refs > 0 || (this.releaseTexture(BB), Rl(BB.images), null !== TB && this.textures.delete(TB))
      }
      load(BB, TB) {
        const dB = TB.decoded = async function(BB) {
          if ("cube" === BB.kind) return async function(BB) {
            if (6 !== BB.length) throw new Error(`${BB.length} files where six faces were expected`);
            const TB = await al(BB.map((BB => Ry(BB)))),
              dB = TB[0].width;
            return al(TB.map((async BB => {
              if (BB.width === dB && BB.height === dB) return BB;
              try {
                return await createImageBitmap(BB, {
                  ...Py,
                  resizeWidth: dB,
                  resizeHeight: dB
                })
              } finally {
                BB.close()
              }
            })))
          }(BB.files);
          if ("data" === BB.kind && BB.data) return [await createImageBitmap(new Blob([BB.data]), Py)];
          return [await Ry(jl(BB))]
        }(BB.source).then((BB => {
          0 === TB.refs ? Rl(BB) : TB.images = BB
        }));
        this.track(TB, jl(BB.source), dB, (() => {
          TB.wanted && !TB.failed && TB.refs > 0 && this.upload(BB, TB)
        }))
      }
      canvasUpdated(BB, TB, dB) {
        const {
          state: VB
        } = this.textureSlot(BB);
        VB.dynamicSource = {
          invertY: TB,
          premultiplied: dB
        }, VB.dynamic && this.pushDynamic(BB.source, VB)
      }
      async atlasArray(BB, TB, dB) {
        const VB = await Xy(this.device, BB, TB, dB);
        if (!this.atlasBindings.has(VB)) {
          const BB = (0, rl.b)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(VB, {
            view: VB.texture.createView({
              dimension: "2d-array"
            }),
            sampler: BB
          })
        }
        return VB
      }
      boundTexture(BB) {
        const TB = this.atlasBindings.get(BB);
        if (TB) return TB;
        const dB = BB;
        if (dB.released) return null;
        const VB = this.textureSlot(dB, !0),
          {
            state: yB
          } = VB;
        if (!yB.view && (yB.wanted = !0, yB.loading || yB.failed || this.upload(dB, yB), !yB.view)) return null;
        const pB = this.chosenSampler(dB, VB),
          lB = VB.bound;
        return lB && lB.view === yB.view && lB.sampler === pB ? lB : (VB.bound = {
          view: yB.view,
          sampler: pB
        }, VB.bound)
      }
      textureLoaded(BB) {
        var TB, dB;
        return null !== (TB = null === (dB = BB.gpu[wB.d.lite]) || void 0 === dB ? void 0 : dB.state.decoded) && void 0 !== TB ? TB : null
      }
      textureFailed(BB) {
        var TB;
        return !0 === (null === (TB = BB.gpu[wB.d.lite]) || void 0 === TB ? void 0 : TB.state.failed)
      }
      chosenSampler(BB, TB) {
        const {
          samplingMode: dB,
          wrapU: VB,
          wrapV: yB
        } = BB.sampler, pB = TB.state.hasMips, lB = function(BB, TB) {
          const {
            bilinear: dB,
            trilinear: VB
          } = wB.e;
          return !TB && BB !== dB || 11 !== BB && BB !== VB && BB !== dB ? 1 : 4
        }(dB, pB), JB = TB.sampler;
        if (JB && JB.samplingMode === dB && JB.hasMips === pB && JB.anisotropy === lB && JB.wrapU === VB && JB.wrapV === yB) return JB.sampler;
        const YB = this.samplerFor(dB, pB, lB, VB, yB);
        return TB.sampler = {
          samplingMode: dB,
          hasMips: pB,
          anisotropy: lB,
          wrapU: VB,
          wrapV: yB,
          sampler: YB
        }, YB
      }
      releaseTexture(BB) {
        var TB, dB;
        BB.view && (null === (dB = this.onDestroy) || void 0 === dB || dB.call(this, BB.view));
        null === (TB = BB.destroy) || void 0 === TB || TB.call(BB)
      }
      textureSlot(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = BB.gpu[wB.d.lite];
        if (dB) return dB;
        const VB = function(BB) {
          let {
            source: TB,
            sampler: dB
          } = BB;
          return "canvas" === TB.kind ? null : `${TB.kind}|${jl(TB)}|${dB.noMipmap}|${dB.samplingMode}|${dB.invertY}`
        }(BB);
        let yB = null === VB ? void 0 : this.textures.get(VB);
        yB || (yB = {
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
        }, null !== VB && (this.textures.set(VB, yB), this.load(BB, yB), TB && this.firstBindDecodes++)), yB.refs++;
        const pB = yB,
          lB = {
            state: yB,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(pB, VB)
            }
          };
        return BB.gpu[wB.d.lite] = lB, lB
      }
      samplerFor(BB, TB, dB, VB, yB) {
        const pB = `${BB}|${TB}|${dB}|${VB}|${yB}`;
        let lB = this.samplers.get(pB);
        if (!lB) {
          const JB = {
            ...Gl(BB, TB, dB),
            addressModeU: ql(VB),
            addressModeV: ql(yB)
          };
          lB = (0, rl.b)(this.engine, JB), this.samplers.set(pB, lB)
        }
        return lB
      }
      upload(BB, TB) {
        const {
          source: dB,
          sampler: VB
        } = BB;
        TB.hasMips = !VB.noMipmap, "canvas" === dB.kind ? this.createDynamic(dB, TB) : "cube" === dB.kind ? this.uploadCube(TB, dB.luminance) : this.uploadImage(TB, !0 === VB.invertY, dB.url)
      }
      uploadImage(BB, TB, dB) {
        const [VB] = BB.images;
        BB.images = null;
        const yB = (0, Il.d)(this.engine, VB, {
          mipMaps: BB.hasMips,
          invertY: TB,
          srgb: !1
        }).then((TB => {
          VB.close(), 0 !== BB.refs ? (BB.view = TB.view, BB.destroy = TB.texture.destroy.bind(TB.texture)) : TB.texture.destroy()
        }));
        this.track(BB, dB, yB)
      }
      track(BB, TB, dB, VB) {
        BB.loading = !0, this.pending++, dB.catch((dB => {
          BB.failed = !0, console.warn(`Lite: could not load texture ${Qy(TB)}`, dB)
        })).finally((() => {
          BB.loading = !1, this.pending--, null === VB || void 0 === VB || VB()
        }))
      }
      uploadCube(BB, TB) {
        const dB = BB.images;
        BB.images = null;
        const VB = Ql(this.engine, this.device, dB, (0, wB.v)(TB), BB.hasMips);
        BB.view = VB.createView({
          dimension: "cube"
        }), BB.destroy = () => {
          VB.destroy()
        }
      }
      createDynamic(BB, TB) {
        const {
          canvas: dB
        } = BB, VB = (0, cl.c)(this.engine, Math.max(1, dB.width), Math.max(1, dB.height), {
          mipMaps: TB.hasMips,
          srgb: !1
        });
        TB.dynamic = VB, TB.view = VB.view, TB.destroy = () => {
          VB.texture.destroy()
        }, this.pushDynamic(BB, TB)
      }
      pushDynamic(BB, TB) {
        const dB = TB.dynamicSource,
          VB = TB.dynamic,
          {
            canvas: yB
          } = BB;
        if (dB && VB && 0 !== yB.width && 0 !== yB.height) return yB.width !== VB.width || yB.height !== VB.height ? (this.releaseTexture(TB), TB.dynamic = null, TB.view = null, void this.createDynamic(BB, TB)) : void(0, cl.d)(this.engine, VB, yB, {
          invertY: dB.invertY,
          premultiplyAlpha: dB.premultiplied
        })
      }
    }

    function jl(BB) {
      return "cube" === BB.kind ? BB.rootUrl : "canvas" === BB.kind ? "canvas" : BB.url
    }
    const Al = new Uint8Array(4);

    function bl(BB) {
      const TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      BB._colorAttachment.storeOp = BB._targetSignature._sampleCount > 1 ? TB : "store";
      const dB = BB._renderPassDescriptor.depthStencilAttachment;
      dB && (dB.depthStoreOp = TB, dB.stencilStoreOp && (dB.stencilStoreOp = TB))
    }
    var nl = dB(36690),
      el = dB(36747),
      BJ = dB(36321),
      TJ = dB(38489);
    const dJ = new Float64Array([1, 1, 1]),
      VJ = new Float64Array([0, 1, 0]),
      yJ = new Float64Array(4),
      pJ = new Float32Array(16),
      lJ = new Float64Array(3),
      JJ = new Float64Array(4);

    function YJ(BB, TB, dB) {
      BB.fov = TB.fov, BB.near = TB.near, BB.far = TB.far, BB.renderWidth = dB.renderWidth, BB.renderHeight = dB.renderHeight, (0, BJ.r)(TB.holderRotation, 0, yJ, 0), (0, BJ.e)(dJ, 0, yJ, 0, TB.holderPosition, 0, pJ);
      const VB = TB.fn;
      lJ[0] = VB[0], lJ[1] = VB[1], lJ[2] = VB[2] + 1;
      const yB = BB.viewMatrix;
      (0, BJ.m)(VB, lJ, VJ, yB), (0, BJ.j)(yB, 0, yB), (0, BJ.n)(yB, pJ, 0, yB), (0, BJ.j)(yB, 0, yB);
      const pB = BB.worldMatrix;
      (0, BJ.j)(yB, 0, pB), BB.eye[0] = pB[12], BB.eye[1] = pB[13], BB.eye[2] = pB[14], JJ[0] = BB.fov, JJ[1] = BB.renderWidth / BB.renderHeight, JJ[2] = BB.near, JJ[3] = BB.far, (0, BJ.o)(JJ, BB.projectionMatrix), (0, BJ.n)(yB, BB.projectionMatrix, 0, BB.viewProjectionMatrix), (0, TJ.f)(BB.viewProjectionMatrix, BB.frustum)
    }

    function gJ(BB, TB) {
      let dB = BB.frustumPlanes;
      dB || (dB = BB.frustumPlanes = Array.from({
        length: 6
      }, (() => new nl.d(0, 0, 0, 0))));
      for (let VB = 0; VB < 6; VB++) {
        const BB = dB[VB].normal;
        BB._x = TB[4 * VB], BB._y = TB[4 * VB + 1], BB._z = TB[4 * VB + 2], BB._isDirty = !0, dB[VB].d = TB[4 * VB + 3]
      }
    }

    function oJ(BB, TB) {
      const dB = TB.clearColor;
      BB.clearColour[0] = dB.r, BB.clearColour[1] = dB.g, BB.clearColour[2] = dB.b, BB.clearColour[3] = dB.a;
      const VB = TB.ambientColor;
      BB.ambientColour[0] = VB.r, BB.ambientColour[1] = VB.g, BB.ambientColour[2] = VB.b, BB.animationRatio = TB.animationRatio, BB.frameId = TB.frameId, BB.version++
    }

    function kJ(BB) {
      const TB = BB.model.view;
      return TB.animTick = (0, el.i)(), TB.timeMs = performance.now(), oJ(TB, BB.Gu), BB.model.update(TB.frameId), TB
    }

    function LJ(BB) {
      const TB = BB.Gu,
        {
          view: dB,
          hA: VB
        } = BB.model;
      return YJ(dB, VB, TB.PD()), TB.onBeforeRenderObservable.notifyObservers(TB), gJ(TB, dB.frustum), TB.onBeforeCameraRenderObservable.notifyObservers(TB.activeCamera), kJ(BB)
    }
    var OJ = dB(36275),
      DJ = dB(36406),
      uJ = dB(36736);

    function HJ(BB) {
      var TB, dB;
      const VB = (0, MB.X)(BB);
      if (!VB || VB.diffuseTexture && (0, uJ.i)(BB)) return null;
      const yB = null === (TB = (0, MB.x)(VB, fB.k.name)) || void 0 === TB ? void 0 : TB.state,
        pB = null === (dB = (0, MB.x)(VB, jp.c.name)) || void 0 === dB ? void 0 : dB.state,
        lB = new Float32Array(16);
      return function(BB, TB, dB, VB) {
        var yB, pB;
        const lB = OV;
        VB.set(BB.diffuseColor, lB.diffuse), VB[lB.diffuse + 3] = BB.alpha, VB.set(BB.ambientColor, lB.ambientAndCutoff), VB[lB.ambientAndCutoff + 3] = BB.alphaCutOff, VB.set(BB.emissiveColor, lB.emissiveAndLevel), VB[lB.emissiveAndLevel + 3] = null !== (yB = null === (pB = BB.diffuseTexture) || void 0 === pB ? void 0 : pB.level) && void 0 !== yB ? yB : 1, null !== TB && void 0 !== TB && TB.animDataPerTex ? (VB[lB.anim + 1] = el.e, VB[lB.anim + 2] = TB.animDataPerTex.length / 3 - 1) : dB && (VB[lB.anim + 1] = dB.numAnimStates, VB[lB.anim + 2] = dB.ticksPerAnimState)
      }(VB, yB, pB, lB), {
        model: VB,
        atlas: yB,
        texture: yB ? "atlas" : VB.diffuseTexture ? "single" : "none",
        animated: yB ? !!yB.animDataPerTex : !!pB,
        liquid: (0, uJ.j)(BB),
        customRenderMat: (0, uJ.i)(BB),
        uniformData: lB
      }
    }
    var EJ = dB(36262);
    class vJ {
      constructor(BB) {
        this.units = BB, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var BB;
        this.buffer.destroy(), null === (BB = this.twin) || void 0 === BB || BB.destroy()
      }
    }
    class mJ {
      constructor(BB, TB) {
        this.arena = BB, this.ek = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.ek = new Zl(TB);
        const dB = new vJ(TB);
        dB.buffer = this.createBuffer(dB, !1), this.backings.push(dB), this.refresh()
      }
      get Kk() {
        return this.ek.Kk
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
        let BB = 0;
        for (const TB of this.backings) BB += TB.units * (this.arena.unitBytes + (TB.twin ? this.arena.twinUnitBytes : 0));
        return BB
      }
      holds(BB) {
        return BB.start + BB.length <= this.usable
      }
      lost(BB) {
        return this.dropped || BB.start + BB.length > this.Kk
      }
      write(BB, TB) {
        const {
          device: dB,
          unitBytes: VB
        } = this.arena;
        for (const yB of this.backings) {
          const pB = (yB.units - BB.start) * VB;
          pB > 0 && dB.queue.writeBuffer(yB.buffer, BB.start * VB, TB, 0, Math.min(TB.byteLength, pB))
        }
      }
      writeLight(BB, TB) {
        const {
          device: dB,
          twinUnitBytes: VB,
          verticesPerUnit: yB
        } = this.arena, {
          light: pB,
          count: lB
        } = this.arena.twinLight(TB, Math.min(TB.length, BB.length * yB));
        for (const JB of this.backings) {
          JB.twin || (JB.twin = this.createBuffer(JB, !0));
          const TB = (JB.units - BB.start) * yB;
          TB > 0 && dB.queue.writeBuffer(JB.twin, BB.start * VB, pB, 0, Math.min(lB, TB))
        }
      }
      grow(BB) {
        this.arena.assertNotDrawing();
        const {
          device: TB,
          unitBytes: dB,
          label: VB
        } = this.arena, yB = this.backings[this.backings.length - 1], pB = new vJ(BB), lB = TB.createCommandEncoder({
          label: `${VB}-grow`
        });
        pB.buffer = this.createBuffer(pB, !1), lB.copyBufferToBuffer(yB.buffer, 0, pB.buffer, 0, yB.units * dB), yB.twin && (pB.twin = this.createBuffer(pB, !0), lB.copyBufferToBuffer(yB.twin, 0, pB.twin, 0, yB.units * this.arena.twinUnitBytes)), TB.queue.submit([lB.finish()]), this.backings.push(pB), this.ek.grow(BB)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const BB of this.backings) BB.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(BB, TB) {
        const {
          device: dB,
          unitBytes: VB,
          twinUnitBytes: yB,
          usage: pB,
          label: lB
        } = this.arena;
        dB.pushErrorScope("out-of-memory");
        const JB = dB.createBuffer({
          label: TB ? `${lB}-light` : lB,
          size: BB.units * (TB ? yB : VB),
          usage: (TB ? this.arena.twinUsage : pB) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, dB.popErrorScope().then((dB => {
          this.arena.awaitingVerdict--, this.settle(BB, TB, !dB, !0)
        }), (dB => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${lB} buffer, taken as failed: ${String(dB)}`), this.settle(BB, TB, !1, !1)
        })), JB
      }
      settle(BB, TB, dB, VB) {
        const yB = this.backings.indexOf(BB);
        if (!(this.dropped || yB < 0)) {
          if (!dB) {
            if (VB && this.arena.ranOutOfMemory(BB.units, BB.units * (TB ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === yB) return void this.drop();
            for (const BB of this.backings.splice(yB)) BB.destroy();
            return this.ek.truncate(this.backings[yB - 1].units), this.growable = !1, void this.promote()
          }
          TB ? BB.twinReady = !0 : (BB.bufferReady = !0, this.arena.allocatedBuffer(BB.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: BB
        } = this;
        let TB = 0;
        for (; TB + 1 < BB.length && BB[TB].ready && BB[TB + 1].ready;) TB++;
        for (const dB of BB.splice(0, TB)) dB.destroy();
        this.refresh()
      }
      refresh() {
        const BB = this.backings[0];
        this.buffer = BB.buffer, this.twin = BB.twinReady ? BB.twin : null, this.usable = !this.dropped && BB.bufferReady ? BB.units : 0
      }
    }
    class iJ {
      constructor(BB, TB, dB, VB) {
        let {
          verticesPerUnit: yB = 1,
          twinUsage: pB = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = BB, this.unitBytes = TB, this.usage = dB, this.label = VB, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, gT.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), TB % 4 !== 0) throw new Error(`${VB}: ${TB}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = yB, this.twinUsage = pB, this.twinValueBytes = yB > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * yB
      }
      twinLight(BB, TB) {
        if (4 === this.twinValueBytes) return this.widened.length < TB && (this.widened = new Float32Array(Math.max(TB, 2 * this.widened.length))), this.widened.set(BB.subarray(0, TB)), {
          light: this.widened,
          count: TB
        };
        const dB = TB % this.verticesPerUnit;
        if (0 === dB) return {
          light: BB,
          count: TB
        };
        const VB = TB - dB + this.verticesPerUnit;
        return this.padded.length < VB && (this.padded = new Uint16Array(Math.max(VB, 2 * this.padded.length))), this.padded.set(BB.subarray(0, TB)), this.padded.fill(0, TB, VB), {
          light: this.padded,
          count: VB
        }
      }
      allocate(BB) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), BB > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const yB of this.pages) {
          const TB = yB.ek.allocate(BB);
          if (TB >= 0) return {
            page: yB,
            start: TB,
            length: BB
          }
        }
        const TB = this.pages[this.pages.length - 1];
        if (null !== TB && void 0 !== TB && TB.canGrow) {
          const dB = Math.min(this.ceiling, Math.max(2 * TB.Kk, TB.Kk + BB));
          if (dB - TB.Kk >= BB) return TB.grow(dB), {
            page: TB,
            start: TB.ek.allocate(BB),
            length: BB
          }
        }
        TB && TB !== this.pages[0] && 0 === TB.ek.used && TB.drop();
        const dB = Math.floor(1048576 / this.unitBytes),
          VB = new mJ(this, Math.max(BB, Math.min(this.ceiling, dB)));
        return this.pages.push(VB), {
          page: VB,
          start: VB.ek.allocate(BB),
          length: BB
        }
      }
      free(BB) {
        this.assertNotDrawing();
        const {
          page: TB
        } = BB;
        TB.ek.free(BB.start, BB.length), 0 === TB.ek.used && TB !== this.pages[0] && TB !== this.pages[this.pages.length - 1] && TB.drop()
      }
      remove(BB) {
        const TB = this.pages.indexOf(BB);
        TB >= 0 && this.pages.splice(TB, 1)
      }
      ranOutOfMemory(BB, TB) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${TB}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, BB), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, BB) / 2));
        const dB = performance.now();
        dB >= this.shortageUntil && (this.forgetFailedAt = dB + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = dB + 1e3)
      }
      allocatedBuffer(BB) {
        BB >= this.failed && (this.failed = 1 / 0);
        const TB = Math.min(2 * BB, Math.floor((BB + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, TB))
      }
      stats() {
        let BB = 0,
          TB = 0,
          dB = 0,
          VB = 0;
        for (const yB of this.pages) BB += yB.Kk, TB += yB.ek.used, dB += yB.hasTwin ? yB.Kk * this.twinUnitBytes : 0, VB += yB.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: BB * this.unitBytes,
          usedBytes: TB * this.unitBytes,
          twinBytes: dB,
          allocatedBytes: VB
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: BB,
          maxStorageBufferBindingSize: TB
        } = this.device.limits;
        let dB = Math.floor(Math.min(67108864, BB) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (dB = Math.min(dB, Math.floor(TB / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (dB = Math.min(dB, Math.floor(TB / this.twinUnitBytes))), dB
      }
    }
    const NJ = 16383;

    function tJ(BB, TB, dB, VB, yB) {
      let pB = 0;
      for (let lB = dB; lB < VB; lB += NJ) BB.drawIndexed(6 * Math.min(NJ, VB - lB), 1, 0, TB + 4 * lB, yB), pB++;
      return pB
    }
    class fJ {
      constructor(BB, TB) {
        this.recordsGroup = TB, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const dB = sT.f.strideWithoutAtlas;
        this.vertexArena = new iJ(BB, dB, GPUBufferUsage.VERTEX, `terrain-vertices-${dB}`), this.quadArena = new iJ(BB, DJ.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const VB = (0, MT.d)(new Uint16Array(98298), NJ);
        this.quadPattern = BB.createBuffer({
          label: "terrain-quad-pattern",
          size: VB.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), BB.queue.writeBuffer(this.quadPattern, 0, VB)
      }
      set(BB, TB) {
        const dB = TB.packedVertices,
          VB = dB ? this.quadArena.allocate(BB.faceCount) : this.vertexArena.allocate(BB.vertexCount);
        if (!VB) return !1;
        BB.vertices = VB;
        const yB = dB ? new Uint8Array(dB.buffer, dB.byteOffset, dB.byteLength) : new Uint8Array(TB.vertices);
        return VB.page.write(VB, yB), !0
      }
      setLight(BB, TB) {
        const {
          vertices: dB
        } = BB;
        dB && 0 !== TB.length && dB.page.live && (TB.length < BB.vertexCount ? dB.page.arena.warnOnce("shortLight", `a part's ${TB.length} light values are fewer than its ${BB.vertexCount} vertices, so its light is left as it was`) : (dB.page.writeLight(dB, TB), BB.lit = !0))
      }
      lightFullSky(BB, TB) {
        this.fullSky.length < TB && (this.fullSky = new Uint16Array(Math.max(TB, 4096)).fill(EJ.j));
        for (const dB of BB) {
          const BB = dB.vertices;
          BB.page.live && (BB.page.writeLight(BB, this.fullSky), dB.lit = !0)
        }
      }
      backed(BB) {
        const {
          vertices: TB
        } = BB;
        return !!TB && TB.page.holds(TB)
      }
      lost(BB) {
        const {
          vertices: TB
        } = BB;
        return !!TB && TB.page.lost(TB)
      }
      release(BB) {
        BB.vertices && BB.vertices.page.arena.free(BB.vertices), BB.vertices = null, BB.lit = !1
      }
      setDrawing(BB) {
        this.forgetBound()
      }
      draw(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TB.faceCount;
        const pB = TB.vertices,
          lB = pB.page,
          JB = dB ? lB.twin : null;
        if (!lB.holds(pB) || dB && !JB) return 0;
        const {
          verticesPerUnit: YB
        } = lB.arena;
        let gB = pB.start * YB;
        this.boundPattern || (BB.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const oB = VB + yB;
        if (YB > 1) return lB.buffer === this.boundRecords && JB === this.boundRecordsLight || (BB.setBindGroup(1, this.recordsGroup(lB.buffer, JB)), this.boundRecords = lB.buffer, this.boundRecordsLight = JB), tJ(BB, gB, VB, oB, TB.slot);
        lB.buffer !== this.boundVertices && (BB.setVertexBuffer(0, lB.buffer), this.boundVertices = lB.buffer), JB && JB !== this.boundLight && (BB.setVertexBuffer(1, JB), this.boundLight = JB);
        const kB = TB.faceCount;
        return oB <= kB ? tJ(BB, gB, VB, oB, TB.slot) : tJ(BB, gB, VB, kB, TB.slot) + tJ(BB, gB, Math.max(VB, kB) - kB, oB - kB, TB.slot)
      }
      get buffersAwaitingVerdict() {
        let BB = 0;
        for (const TB of this.arenas()) BB += TB.awaitingVerdict;
        return BB
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class sJ {
      constructor(BB, TB, dB, VB) {
        this.device = BB, this.splitBefore = TB, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = BB.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const yB = BB.createShaderModule({
          label: "scene-depth-copy",
          code: (pB = dB._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${pB?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var pB;
        BB.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: yB,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: yB,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((BB => {
          this.pipeline = BB, this.building = !1
        }), (BB => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", BB)
        })), dB._executeWithTransmission = () => this.execute(dB, VB)
      }
      get compiling() {
        return this.building
      }
      setWanted(BB) {
        this.wanted = BB
      }
      setPlanes(BB, TB) {
        BB === this.near && TB === this.far || (this.near = BB, this.far = TB, this.unproject[0] = BB / (TB - BB), this.unproject[1] = TB * BB / (TB - BB), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var BB, TB;
        return null !== (BB = null === (TB = this.copy) || void 0 === TB ? void 0 : TB.view) && void 0 !== BB ? BB : null
      }
      execute(BB, TB) {
        var dB;
        null === (dB = this.retired) || void 0 === dB || dB.destroy(), this.retired = null;
        const VB = BT(TB),
          yB = BB._transparentBindings,
          pB = this.wanted && this.pipeline ? this.splitIndex(yB) : -1,
          lB = BB._colorAttachment,
          JB = lB.resolveTarget;
        pB >= 0 && (lB.resolveTarget = void 0, bl(BB, !0));
        let YB = VB.beginRenderPass(BB._renderPassDescriptor);
        YB.setBindGroup(0, BB._sceneBG);
        let gB = this.drawList(YB, TB, BB._opaqueBindings, 0, BB._opaqueBindings.length);
        if (gB += this.drawList(YB, TB, BB._directBindings, 0, BB._directBindings.length), gB += this.drawList(YB, TB, yB, 0, pB >= 0 ? pB : yB.length), YB.end(), pB < 0) return gB;
        bl(BB);
        const oB = BB._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: kB,
            stencilLoadOp: LB
          } = oB,
          OB = lB.loadOp;
        lB.resolveTarget = JB;
        try {
          this.copyDepth(VB, BB), lB.loadOp = "load", oB.depthLoadOp = "load", LB && (oB.stencilLoadOp = "load"), YB = VB.beginRenderPass(BB._renderPassDescriptor), YB.setBindGroup(0, BB._sceneBG), gB += this.drawList(YB, TB, yB, pB, yB.length), YB.end()
        } finally {
          lB.loadOp = OB, oB.depthLoadOp = kB, oB.stencilLoadOp = LB
        }
        return gB
      }
      splitIndex(BB) {
        for (let TB = 0; TB < BB.length; TB++)
          if (BB[TB].renderable === this.splitBefore) return TB;
        return -1
      }
      drawList(BB, TB, dB, VB, yB) {
        let pB = null,
          lB = 0;
        for (let JB = VB; JB < yB; JB++) {
          const VB = dB[JB],
            yB = VB.renderable.mesh;
          yB && !1 === yB.visible || (VB.pipeline !== pB && (BB.setPipeline(VB.pipeline), pB = VB.pipeline), lB += VB.draw(BB, TB))
        }
        return lB
      }
      copyDepth(BB, TB) {
        var dB, VB;
        const yB = (null !== (dB = TB._config.depth) && void 0 !== dB ? dB : TB._config.rt)._depthTexture,
          pB = (null === (VB = this.copy) || void 0 === VB ? void 0 : VB.source) === yB ? this.copy : this.remakeCopy(yB),
          lB = BB.beginRenderPass(pB.pass);
        lB.setPipeline(this.pipeline), lB.setBindGroup(0, pB.bindGroup), lB.draw(3), lB.end()
      }
      remakeCopy(BB) {
        var TB, dB;
        this.retired = null !== (TB = null === (dB = this.copy) || void 0 === dB ? void 0 : dB.texture) && void 0 !== TB ? TB : null;
        const VB = this.device.createTexture({
            label: "scene-depth",
            size: [BB.width, BB.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          yB = VB.createView(),
          pB = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: BB.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          lB = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: yB,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: BB,
          texture: VB,
          view: yB,
          bindGroup: pB,
          pass: lB
        }, this.copy
      }
    }
    const MJ = "rgba8unorm";

    function zJ(BB) {
      return BB ? 15 : 1
    }
    class wJ {
      constructor(BB, TB, dB, VB) {
        this.device = BB, this.terrain = VB, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = TB._targetSignature._sampleCount > 1, this.cameraBuffer = BB.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = BB.createBindGroupLayout({
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
        const yB = BB.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = BB.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: yB,
          entries: []
        });
        const pB = BB.createShaderModule({
          label: "sun-shadow-mask",
          code: (lB = this.edge, `${(0,zT.y)()}${ad({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${lB?wd:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${zJ(lB)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${lB?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var lB;
        BB.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: BB.createPipelineLayout({
            bindGroupLayouts: [this.layout, yB, yB, Zp(BB, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: pB,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: pB,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((BB => {
          this.pipeline = BB, this.building = !1
        }), (BB => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", BB)
        }));
        const JB = TB._executeWithTransmission;
        TB._executeWithTransmission = BB => this.execute(TB, dB, (() => JB ? JB(BB) : function(BB, TB) {
          const dB = BT(TB).beginRenderPass(BB._renderPassDescriptor);
          dB.setBindGroup(0, BB._sceneBG);
          let VB = UJ(dB, TB, BB._opaqueBindings);
          return VB += UJ(dB, TB, BB._directBindings), VB += UJ(dB, TB, BB._transparentBindings), dB.end(), VB
        }(TB, dB)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var BB, TB;
        return null !== (BB = null === (TB = this.targets) || void 0 === TB ? void 0 : TB.maskView) && void 0 !== BB ? BB : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(BB) {
        ! function(BB, TB) {
          const dB = BB.worldMatrix,
            VB = BB.projectionMatrix,
            yB = 1 / VB[0],
            pB = 1 / VB[5],
            lB = BB.far * BB.near / (BB.far - BB.near);
          TB[0] = BB.eye[0], TB[1] = BB.eye[1], TB[2] = BB.eye[2], TB[3] = 2 ** -23 / lB, TB[4] = dB[0] * yB, TB[5] = dB[1] * yB, TB[6] = dB[2] * yB, TB[7] = lB, TB[8] = dB[4] * pB, TB[9] = dB[5] * pB, TB[10] = dB[6] * pB, TB[11] = BB.near / (BB.far - BB.near), TB[12] = dB[8], TB[13] = dB[9], TB[14] = dB[10], TB[15] = 0
        }(BB, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(BB, TB, dB) {
        if (this.retire(), !this.terrain.readsMask) return dB();
        const VB = this.targetsFor(BB),
          yB = BT(TB),
          pB = BB._renderPassDescriptor.depthStencilAttachment;
        this.edge || (VB.prepass.depthStencilAttachment.view = pB.view);
        const lB = this.terrain.drawPrepass(yB, VB.prepass, BB._sceneBG);
        if (0 === lB) return dB();
        if (this.trace(yB, VB), this.edge) return lB + 1 + dB();
        const {
          depthLoadOp: JB,
          stencilLoadOp: YB
        } = pB;
        pB.depthLoadOp = "load", YB && (pB.stencilLoadOp = "load");
        try {
          return lB + 1 + dB()
        } finally {
          pB.depthLoadOp = JB, pB.stencilLoadOp = YB
        }
      }
      trace(BB, TB) {
        const dB = this.terrain.sunShadowGroup(),
          VB = BB.beginRenderPass(TB.trace);
        this.pipeline && dB && (VB.setPipeline(this.pipeline), VB.setBindGroup(0, TB.bindGroup), VB.setBindGroup(1, this.empty), VB.setBindGroup(2, this.empty), VB.setBindGroup(3, dB), VB.draw(3)), VB.end()
      }
      retire() {
        const BB = this.retired;
        var TB;
        BB && (BB.mask.destroy(), BB.normals.destroy(), null === (TB = BB.depth) || void 0 === TB || TB.destroy(), this.retired = null)
      }
      targetsFor(BB) {
        var TB, dB;
        const VB = (null !== (TB = BB._config.depth) && void 0 !== TB ? TB : BB._config.rt)._depthTexture;
        return (null === (dB = this.targets) || void 0 === dB ? void 0 : dB.source) === VB ? this.targets : this.remake(BB, VB)
      }
      remake(BB, TB) {
        var dB;
        this.retired = this.targets;
        const VB = [TB.width, TB.height],
          yB = this.device.createTexture({
            label: "sun-shadow-mask",
            size: VB,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          pB = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: VB,
            format: MJ,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          lB = null !== (dB = BB._targetSignature._depthStencilFormat) && void 0 !== dB ? dB : TB.format,
          JB = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: VB,
            format: lB,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          YB = BB._renderPassDescriptor.depthStencilAttachment,
          gB = lB.includes("stencil"),
          oB = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: pB.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: JB ? JB.createView() : YB.view,
              depthClearValue: YB.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...gB ? {
                stencilClearValue: YB.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          kB = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== JB && void 0 !== JB ? JB : TB).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: pB.createView()
            }]
          }),
          LB = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: yB.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [zJ(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: TB,
          mask: yB,
          maskView: yB.createView(),
          normals: pB,
          depth: JB,
          bindGroup: kB,
          prepass: oB,
          trace: LB
        }, this.targets
      }
    }

    function UJ(BB, TB, dB) {
      let VB = null,
        yB = 0;
      for (const pB of dB) {
        const dB = pB.renderable.mesh;
        dB && !1 === dB.visible || (pB.pipeline !== VB && (BB.setPipeline(pB.pipeline), VB = pB.pipeline), yB += pB.draw(BB, TB))
      }
      return yB
    }
    const FJ = 6e4,
      KJ = {
        status: "ok"
      },
      rJ = {
        status: "skipped"
      };
    async function IJ(BB, TB) {
      const {
        isCancelled: dB
      } = BB;
      if (dB()) return {
        status: "IT"
      };
      const {
        target: VB
      } = TB;
      if (!VB) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const yB = [],
        pB = Promise.all(Array.from(new Set(BB.materials), (async dB => {
          yB.push(await async function(BB, TB, dB, VB) {
            const yB = {
              lighting: BB.lighting,
              dirLightCount: Math.min(BB.dirLightCount, 4),
              pD: BB.runtime
            };
            try {
              const pB = TB.material(VB);
              return pB && oV(TB.programKey(pB, !1, yB)) ? (await pB.ready, BB.isCancelled() ? KJ : pB.bindGroupLayout ? await async function(BB, TB, dB, VB) {
                const {
                  device: yB
                } = BB;
                let pB, lB;
                yB.pushErrorScope("validation");
                try {
                  pB = BB.pipelineBuild(TB, dB, VB)
                } finally {
                  lB = yB.popErrorScope().catch((() => null))
                }
                const [JB, YB] = await Promise.all([lB, pB.built.then((() => null), (BB => null !== BB && void 0 !== BB ? BB : new Error("pipeline failed")))]);
                if (!JB && !YB) return KJ;
                const gB = await cJ(pB.module),
                  oB = gB.length > 0 ? gB.map((BB => `${pB.name} ${BB.lineNum}:${BB.linePos}: ${BB.message}`)).join("\n") : `${pB.name}: ${SJ(null!==YB&&void 0!==YB?YB:JB)}`;
                return {
                  status: "failed",
                  material: TB.model.name,
                  message: oB
                }
              }(TB, pB, TB.programKey(pB, "none" !== pB.texture, yB), dB): (console.warn(`Shader pack: skipped the compile check for "${VB.name}", whose textures failed to load`), rJ)) : KJ
            } catch (pB) {
              return {
                status: "failed",
                material: VB.name,
                message: SJ(pB)
              }
            }
          }(BB, TB, VB, dB))
        }))),
        lB = function(BB, TB) {
          let dB, VB, yB = !1;
          const pB = new Promise((pB => {
            var lB;
            dB = setTimeout((() => {
              pB("timeout")
            }), null !== (lB = TB.timeoutMs) && void 0 !== lB ? lB : FJ), VB = setInterval((() => {
              TB.isCancelled() && pB("IT")
            }), 50), BB.lost.then((() => {
              yB = !0, pB("lost")
            }))
          }));
          return {
            signal: pB,
            lost: () => yB,
            dispose: () => {
              clearTimeout(dB), clearInterval(VB)
            }
          }
        }(TB.device, BB);
      let JB;
      try {
        JB = await Promise.race([pB.then((() => "done")), lB.signal])
      } finally {
        lB.dispose()
      }
      if ("IT" === JB || dB()) return {
        status: "IT"
      };
      const YB = yB.find((BB => "failed" === BB.status));
      return YB && "lost" !== JB && !lB.lost() && await new Promise((BB => {
        setTimeout(BB, 0)
      })), "lost" === JB || lB.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : YB ? {
        status: "failed",
        failure: {
          material: YB.material,
          message: YB.message
        }
      } : "timeout" === JB ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(gB=BB.timeoutMs)&&void 0!==gB?gB:FJ)/1e3} s`), {
        status: "skipped"
      }) : yB.some((BB => "skipped" === BB.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var gB
    }
    async function cJ(BB) {
      if (!BB) return [];
      try {
        return (await BB.getCompilationInfo()).messages.filter((BB => "error" === BB.type))
      } catch {
        return []
      }
    }

    function SJ(BB) {
      var TB;
      return null !== (TB = null === BB || void 0 === BB ? void 0 : BB.message) && void 0 !== TB ? TB : String(BB)
    }

    function PJ(BB, TB, dB, VB) {
      oV(BB) ? cJ(dB).then((BB => {
        const [dB] = BB;
        jy("terrain", TB, VB, dB ? `${dB.lineNum}:${dB.linePos} error: ${dB.message}` : null)
      })) : jy("terrain", TB, VB)
    }
    var QJ = dB(36409),
      RJ = dB(36420),
      aJ = dB(36431),
      ZJ = dB(36345);

    function XJ(BB, TB, dB, VB, yB) {
      const pB = Math.hypot(dB[0], dB[1], dB[2]);
      if (!(pB > 0)) return;
      const lB = [dB[0] / pB, dB[1] / pB, dB[2] / pB],
        JB = [Math.floor(TB[0]), Math.floor(TB[1]), Math.floor(TB[2])],
        YB = [0, 0, 0],
        gB = [1 / 0, 1 / 0, 1 / 0],
        oB = [1 / 0, 1 / 0, 1 / 0];
      for (let OB = 0; OB < 3; OB++) lB[OB] > 0 ? (YB[OB] = 1, gB[OB] = (JB[OB] + 1 - TB[OB]) / lB[OB], oB[OB] = 1 / lB[OB]) : lB[OB] < 0 && (YB[OB] = -1, gB[OB] = (JB[OB] - TB[OB]) / lB[OB], oB[OB] = -1 / lB[OB]);
      const {
        UD: kB
      } = BB;
      let LB = BB.tC(JB[0], JB[1], JB[2]);
      for (;;) {
        const TB = gB[0] < gB[1] ? gB[0] < gB[2] ? 0 : 2 : gB[1] < gB[2] ? 1 : 2;
        if (gB[TB] > VB) return;
        const dB = YB[TB] > 0 ? JB[TB] + 1 : JB[TB];
        JB[TB] += YB[TB], gB[TB] += oB[TB];
        const pB = BB.tC(JB[0], JB[1], JB[2]),
          lB = pB !== LB && !(BB.opaque[LB] && BB.opaque[pB]);
        if (lB) {
          const VB = [JB[0], JB[1], JB[2]];
          VB[TB] = dB;
          const pB = Math.floor(VB[0] / kB),
            lB = Math.floor(VB[1] / kB),
            YB = Math.floor(VB[2] / kB);
          !BB.isDrawn(pB, lB, YB) && BB.hasParts(pB, lB, YB) && yB.add(`${pB},${lB},${YB}`)
        }
        if (lB && BB.occluders[pB]) return;
        LB = pB
      }
    }

    function WJ(BB, TB) {
      return BB.group - TB.group || BB.nearest - TB.nearest
    }
    class hJ {
      constructor(BB, TB) {
        this.device = BB, this.qE = TB, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var BB;
        const TB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.next++;
        if (8 * TB >= this.data.length) {
          const BB = new Float32Array(2 * this.data.length);
          BB.set(this.data), this.data = BB, this.words = new Uint32Array(BB.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.qE()
        }
        return TB
      }
      release(BB) {
        this.free.push(BB)
      }
      set(BB, TB, dB, VB, yB) {
        const pB = 8 * BB + iV;
        this.data[pB] = TB, this.data[pB + 1] = dB, this.data[pB + 2] = VB, this.setVisibility(BB, yB)
      }
      setVisibility(BB, TB) {
        this.data[8 * BB + NV] = TB, this.markDirty(BB, BB)
      }
      setFaces(BB, TB, dB) {
        const VB = 8 * BB;
        this.words[VB + tV] = TB, this.words[VB + fV] = dB, this.markDirty(BB, BB)
      }
      markDirty(BB, TB) {
        this.dirtyMin = Math.min(this.dirtyMin, BB), this.dirtyMax = Math.max(this.dirtyMax, TB)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const CJ = mV,
      GJ = !0;
    const qJ = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: CJ.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      xJ = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class jJ {
      constructor(BB) {
        this.device = BB, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(LV), this.dirLightUniforms = this.frameUniforms.subarray(kV.dirLights, kV.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, gT.d)(), this.faceGroups = !0, this.visibilityGraph = GJ, this.visCull = GJ, this.visCheck = !1, this.visCullMinDistance = aJ.d, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new eJ, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.pD = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new fJ(BB, ((BB, TB) => this.recordsGroup(BB, TB))), this.slots = new hJ(BB, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = TT(BB), this.frameLayout = BB.createBindGroupLayout({
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
        }), this.frameBuffer = BB.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = BB.createSampler({
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
          bind: (BB, TB) => this.createBinding(this.opaqueRenderable, TB, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (BB, TB) => this.createBinding(this.transparentRenderable, TB, !0)
        }
      }
      installSceneDepth(BB, TB) {
        this.sceneDepth = new sJ(this.device, this.transparentRenderable, BB, TB)
      }
      createFrameBindGroup() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== BB && void 0 !== BB ? BB : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== TB && void 0 !== TB ? TB : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(BB, TB) {
        const dB = null !== TB && void 0 !== TB ? TB : BB;
        let VB = this.recordsGroups.get(dB);
        return VB || (VB = this.createFrameBindGroup(BB, TB), this.recordsGroups.set(dB, VB)), VB
      }
      setChunkMesh(BB, TB, dB) {
        var VB;
        let yB = this.chunks.get(BB);
        yB ? this.geometry.release(yB) : (yB = {
          mesh: BB,
          slot: this.slots.allocate(),
          origin: [dB[0], dB[1], dB[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: BB.visibility,
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
        }, this.chunks.set(BB, yB), this.writeSlot(yB)), yB.material = BB.material ? this.materialFor(BB.material) : null, yB.packed = !!TB.packedVertices, yB.vertexCount = (0, DJ.d)(TB), yB.faceCount = yB.vertexCount / 4;
        const pB = null !== (VB = TB.faceGroups) && void 0 !== VB ? VB : null;
        if (yB.faceGroups = pB, pB) {
          const BB = QJ.m;
          yB.planePX = pB[BB], yB.planeNX = pB[BB + 1], yB.planePY = pB[BB + 2], yB.planeNY = pB[BB + 3], yB.planePZ = pB[BB + 4], yB.planeNZ = pB[BB + 5]
        }
        this.drawWhole(yB), 0 !== yB.faceCount && (this.geometry.set(yB, TB) ? (yB.packed && this.slots.setFaces(yB.slot, yB.vertices.start + yB.faceCount, yB.faceCount), TB.uD && this.setChunkMeshLight(BB, TB.uD)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${yB.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(BB, TB) {
        const dB = this.chunks.get(BB);
        dB && this.geometry.setLight(dB, TB)
      }
      drawStats() {
        let BB = this.transparent.length;
        for (const TB of this.opaqueBatches) BB += TB.meshes.length;
        return {
          drawn: BB,
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
      removeChunkMesh(BB) {
        const TB = this.chunks.get(BB);
        TB && (this.geometry.release(TB), this.slots.release(TB.slot), this.chunks.delete(BB))
      }
      remeshLost(BB, TB) {
        this.geometry.release(TB), TB.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** TB.lostRemeshes++);
        const dB = BB.JL,
          [VB, yB, pB] = dB.NyB(TB.origin[0], TB.origin[1], TB.origin[2]),
          lB = dB.Nu.tu(VB, yB, pB);
        lB && (lB.mu = !0, lB.Uu = !0, dB.iu(lB, !1))
      }
      chooseFaceRanges(BB, TB, dB) {
        const VB = this.faceRanges;
        BB.faceMask = dB, BB.rangeCount = (0, RJ.n)(TB, dB, VB), BB.first0 = VB[0], BB.count0 = VB[1], BB.first1 = VB[2], BB.count1 = VB[3]
      }
      drawWhole(BB) {
        BB.faceMask = -1, BB.faceEpoch = -1, BB.rangeCount = 1, BB.first0 = 0, BB.count0 = BB.faceCount
      }
      writeSlot(BB) {
        const [TB, dB, VB] = this.originOffset;
        this.slots.set(BB.slot, BB.origin[0] - TB, BB.origin[1] - dB, BB.origin[2] - VB, BB.visibility)
      }
      materialFor(BB) {
        const TB = this.materials.get(BB);
        if (TB) return TB;
        const dB = HJ(BB);
        if (!dB) return this.warnOnce(`material:${BB.name}`, `Lite terrain cannot draw material "${BB.name}"; its chunks are skipped.`), null;
        const {
          model: VB,
          atlas: yB,
          texture: pB,
          animated: lB,
          uniformData: JB
        } = dB, YB = {
          id: this.materials.size,
          model: VB,
          texture: pB,
          animated: lB,
          uniformData: JB,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${BB.name}`,
            size: JB.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: dB.liquid,
          customRenderMat: dB.customRenderMat,
          atlasCount: 0,
          M_: 0,
          atlasLayers: 0,
          nextFrameAtlases: void 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(BB, YB), this.device.queue.writeBuffer(YB.uniformBuffer, 0, JB), YB.ready = this.createMaterialBindGroup(YB, yB).catch((TB => {
          console.error(`Lite terrain failed to load the textures of material "${BB.name}"`, TB)
        })), YB
      }
      materialLayout(BB) {
        const TB = function(BB) {
            const TB = ["uniforms"];
            if ("atlas" === BB.texture) {
              BB.animated && TB.push("animData"), TB.push("sampler");
              for (let dB = 0; dB < BB.atlasCount; dB++) TB.push("textureArray")
            } else "single" === BB.texture && TB.push("sampler", "texture");
            return TB
          }(BB),
          dB = TB.join(",");
        let VB = this.materialLayouts.get(dB);
        if (!VB) {
          const BB = GPUShaderStage.FRAGMENT;
          VB = this.device.createBindGroupLayout({
            label: `terrain-material-${dB}`,
            entries: TB.map(((TB, dB) => {
              switch (TB) {
                case "uniforms":
                  return {
                    binding: dB, visibility: GPUShaderStage.VERTEX | BB, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: dB, visibility: GPUShaderStage.VERTEX | BB, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: dB, visibility: BB, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: dB, visibility: BB, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: dB, visibility: BB, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(dB, VB)
        }
        return VB
      }
      async createMaterialBindGroup(BB, TB) {
        const dB = [{
          buffer: BB.uniformBuffer
        }];
        if (TB) {
          const {
            urls: VB,
            pixels: yB,
            layerWidth: pB
          } = TB.sources, lB = await Promise.all(VB.map(((BB, TB) => {
            var dB;
            return Xy(this.device, BB, null !== (dB = null === yB || void 0 === yB ? void 0 : yB[TB]) && void 0 !== dB ? dB : null, pB)
          })));
          BB.atlasCount = lB.length, BB.M_ = lB[0].layerWidth, BB.atlasLayers = lB[0].layers, TB.animDataPerTex && (BB.nextFrameAtlases = (0, fB.n)(TB.animDataPerTex, BB.atlasLayers, BB.atlasCount), dB.push({
            buffer: Iy(this.device, Float32Array.from(TB.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          })), dB.push(this.sampler);
          for (const BB of lB) dB.push(BB.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === BB.texture) {
          const {
            url: TB
          } = BB.model.diffuseTexture.source, {
            pixels: VB,
            width: yB,
            height: pB
          } = await ay(TB);
          dB.push(this.sampler), dB.push(Sy(this.device, VB, yB, pB, 1, `terrain-${TB}`).createView({
            dimension: "2d"
          }))
        }
        const VB = this.materialLayout(this.programKey(BB, !1));
        BB.bindGroupLayout = VB, BB.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${BB.model.name}`,
          layout: VB,
          entries: dB.map(((BB, TB) => ({
            binding: TB,
            resource: BB
          })))
        })
      }
      programKey(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const VB = dB ? dB.lighting : this.lighting,
          yB = dB ? dB.pD : this.pD,
          pB = {
            texture: BB.texture,
            atlasCount: BB.atlasCount,
            M_: BB.M_,
            atlasLayers: BB.atlasLayers,
            nextFrameAtlases: BB.nextFrameAtlases,
            animated: BB.animated,
            alphaTest: BB.model.transparencyMode === MB.m.alphaTest,
            lighting: VB,
            dirLightCount: dB ? dB.dirLightCount : this.dirLightCount,
            packed: TB
          };
        if (!yB) return pB;
        const lB = this.shaderPackFields(BB, yB),
          JB = "atlas" === BB.texture && BB.model.transparencyMode === MB.m.opaque && lV(lB.packVariant);
        return {
          ...pB,
          ...lB,
          alphaTest: pB.alphaTest || JB
        }
      }
      shaderPackFields(BB, TB) {
        return BB.customRenderMat ? yV : function(BB, TB) {
          if (!BB) return yV;
          const dB = BB.defineFor(TB ? "liquid" : "terrain");
          return 0 === dB ? yV : {
            packVariant: dB,
            liquid: TB
          }
        }(TB, BB.liquid)
      }
      isBlended(BB) {
        return BB.model.transparencyMode === MB.m.alphaBlend
      }
      shaderModule(BB, TB) {
        let dB = this.modules.get(BB);
        return dB || (dB = this.device.createShaderModule({
          label: TB,
          code: BB
        }), this.modules.set(BB, dB)), dB
      }
      pipelineFor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!BB.bindGroupLayout) return null;
        const yB = this.programKey(BB, TB);
        if (!VB) return this.pipelineOf(BB, yB, dB);
        const pB = {
            ...yB,
            resting: VB
          },
          lB = this.pipelineId(BB, pB, dB),
          JB = this.pipelines.get(lB);
        if (JB) return JB;
        const YB = this.pipelineOf(BB, yB, dB);
        return YB && void 0 === JB && this.startPipeline(lB, BB, pB, dB), YB
      }
      pipelineOf(BB, TB, dB) {
        const VB = this.pipelineId(BB, TB, dB),
          yB = this.pipelines.get(VB);
        return void 0 !== yB ? yB : (this.startPipeline(VB, BB, TB, dB), null)
      }
      pipelineId(BB, TB, dB) {
        return AJ(TB, this.isBlended(BB), BB.model.backFaceCulling, dB)
      }
      pipelineBuild(BB, TB, dB) {
        var VB;
        const yB = this.pipelineId(BB, TB, dB);
        return null !== (VB = this.builds.get(yB)) && void 0 !== VB ? VB : this.startPipeline(yB, BB, TB, dB)
      }
      startPipeline(BB, TB, dB, VB) {
        var yB;
        this.pipelines.set(BB, null);
        const pB = KV(dB),
          lB = this.isBlended(TB),
          JB = this.shadowMask && VB._depthStencilFormat ? function(BB, TB, dB, VB) {
            if (void 0 === BB.packVariant || BB.liquid || TB) return "none";
            const yB = (0, wT.h)(BB.packVariant);
            return null === yB || void 0 === yB || !yB.sunShadow || !Qd(yB, dB) || yB.discards || BB.alphaTest && lV(BB.packVariant) ? "none" : VB ? "edge" : "plain"
          }(dB, lB, !!this.sunShadow, VB._sampleCount > 1) : "none";
        let YB;
        try {
          YB = rV(dB, !!this.sunShadow, JB)
        } catch (HB) {
          if (!oV(dB)) throw HB;
          return this.failedPackBuild(BB, dB, pB, HB)
        }
        const gB = this.shaderModule(YB, pB),
          oB = [];
        dB.packed || (oB.push(function(BB, TB) {
          const dB = [{
            shaderLocation: CJ.position,
            offset: sT.f.Md,
            format: "float32x3"
          }, {
            shaderLocation: CJ.normal,
            offset: sT.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: CJ.color,
            offset: sT.f.colorOffset,
            format: "unorm8x4"
          }];
          return BB && dB.push({
            shaderLocation: CJ.uv,
            offset: sT.f.uvOffset,
            format: "float32x2"
          }), TB && dB.push({
            shaderLocation: CJ.blockFlagWords,
            offset: sT.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: sT.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: dB
          }
        }("none" !== dB.texture, oV(dB))), dB.lighting && oB.push(qJ));
        const kB = TB.model.backFaceCulling,
          LB = {
            label: pB,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, TB.bindGroupLayout, ...hp(this.device, dB, !!this.sunShadow, "none" !== JB)]
            }),
            vertex: {
              module: gB,
              entryPoint: "mainVertex",
              buffers: oB
            },
            fragment: bB({
              module: gB,
              entryPoint: "mainFragment"
            }, VB, lB ? xJ : null),
            depthStencil: VB._depthStencilFormat ? {
              format: VB._depthStencilFormat,
              depthCompare: null !== (yB = VB._depthCompare) && void 0 !== yB ? yB : dT,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: VB._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: kB ? "back" : "none"
            }
          },
          OB = dB.resting ? 0 : 1;
        this.compiling += OB;
        const DB = "none" === JB ? this.device.createRenderPipelineAsync(LB) : this.startMaskPipelines(gB, LB, "edge" === JB);
        DB.then((TB => {
          this.compiling -= OB, this.pipelines.set(BB, TB)
        }), (BB => {
          this.compiling -= OB, console.error(`Lite terrain pipeline ${pB} failed`, BB), PJ(dB, pB, gB, BB)
        }));
        const uB = {
          name: pB,
          module: gB,
          built: DB
        };
        return this.builds.set(BB, uB), uB
      }
      startMaskPipelines(BB, TB, dB) {
        const VB = TB.depthStencil,
          yB = this.device.createRenderPipelineAsync(dB ? TB : {
            ...TB,
            depthStencil: {
              ...VB,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          pB = this.device.createRenderPipelineAsync({
            ...TB,
            label: `${TB.label}-prepass`,
            fragment: {
              module: BB,
              entryPoint: "prepassFragment",
              targets: [{
                format: MJ
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([yB, pB]).then((BB => {
          let [TB, dB] = BB;
          return this.prepassOf.set(TB, dB), this.maskPipelines++, TB
        }))
      }
      failedPackBuild(BB, TB, dB, VB) {
        console.error(`Lite terrain pipeline ${dB} failed`, VB), PJ(TB, dB, null, VB);
        const yB = Promise.reject(VB);
        yB.catch((() => {}));
        const pB = {
          name: dB,
          module: null,
          built: yB
        };
        return this.builds.set(BB, pB), pB
      }
      checkShaderPack(BB) {
        return IJ(BB, {
          device: this.device,
          target: this.target,
          material: BB => this.materialFor(BB),
          programKey: (BB, TB, dB) => this.programKey(BB, TB, dB),
          pipelineBuild: (BB, TB, dB) => this.pipelineBuild(BB, TB, dB)
        })
      }
      createBinding(BB, TB, dB) {
        return this.target = TB, {
          renderable: BB,
          pipeline: lT(this.device, TB),
          draw: BB => {
            this.geometry.setDrawing(!0);
            try {
              return dB ? this.drawTransparent(BB, TB) : this.drawOpaque(BB, TB)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(BB, TB) {
        var dB, VB, yB, pB;
        const {
          OL: lB
        } = BB;
        this.lighting = BB.au;
        const JB = (0, OJ.v)(TB);
        this.dirLightCount = Math.min(JB, 4), this.pD = null !== (dB = lB.pD) && void 0 !== dB ? dB : null, JB > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(BB, TB), this.animateMaterials(TB.animTick);
        const YB = lB.FL,
          gB = YB[0] !== this.originOffset[0] || YB[1] !== this.originOffset[1] || YB[2] !== this.originOffset[2];
        gB && (this.originOffset[0] = YB[0], this.originOffset[1] = YB[1], this.originOffset[2] = YB[2]);
        const oB = TB.eye;
        this.eye[0] = oB[0], this.eye[1] = oB[1], this.eye[2] = oB[2], this.writeShaderPackInputs();
        const kB = TB.projectionMatrix,
          LB = 0 === kB[15];
        let OB = 0;
        (gB || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: DB
        } = this;
        JT(this.transparentRenderable._worldCenter, TB, yT), this.resetBatches(LB), this.transparent.length = 0, this.unlit.length = 0;
        const uB = lB.JL.ZBB,
          HB = uB / 2 * Math.sqrt(3);
        let EB = 0;
        const vB = !!this.pD && pV(this.pD.defineFor("liquid"));
        let mB = !1;
        const iB = null !== (VB = null === (yB = lB.yN) || void 0 === yB ? void 0 : yB.visibility) && void 0 !== VB ? VB : null,
          NB = this.visCull && LB && 0 === this.compiling && null !== iB && lB.JL.cVB[0] >= this.visCullMinDistance ? this.target : null,
          tB = this.visPassable,
          fB = this.visCandidates,
          sB = this.visCandidateBatches;
        tB.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let MB = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let zB = 0;
        const wB = (BB, dB) => {
          if (!dB) return this.transparent.push(BB), void(zB += 2 * BB.faceCount);
          if (null !== BB.faceGroups && dB.faceCull) {
            if (0 === OB && (OB = (0, RJ.c)(kB, TB.renderWidth, TB.renderHeight), OB !== this.faceFocalPx && (this.faceFocalPx = OB, DB = ++this.faceEpoch)), BB.faceEpoch !== DB) {
              BB.faceEpoch = DB;
              const TB = Math.sqrt(BB.distance) + HB,
                dB = (0, RJ.j)(BB.planePX, BB.planeNX, BB.planePY, BB.planeNY, BB.planePZ, BB.planeNZ, this.eye[0] - (BB.origin[0] - this.originOffset[0]), this.eye[1] - (BB.origin[1] - this.originOffset[1]), this.eye[2] - (BB.origin[2] - this.originOffset[2]), (0, RJ.g)(TB, OB));
              dB !== BB.faceMask && this.chooseFaceRanges(BB, BB.faceGroups, dB)
            }
            if (0 === BB.rangeCount) return
          } else - 1 !== BB.faceMask && this.drawWhole(BB);
          dB.meshes.push(BB), zB += 2 * ((BB.rangeCount > 0 ? BB.count0 : 0) + (BB.rangeCount > 1 ? BB.count1 : 0))
        };
        for (const FB of this.chunks.values()) {
          gB && this.writeSlot(FB);
          const BB = FB.mesh.visibility;
          BB !== FB.visibility && (FB.visibility = BB, this.slots.setVisibility(FB.slot, BB));
          const {
            material: dB
          } = FB;
          this.geometry.lost(FB) && performance.now() >= FB.lostRetryAt && this.remeshLost(lB, FB);
          const VB = !(null === dB || void 0 === dB || !dB.bindGroup) && this.geometry.backed(FB),
            yB = VB && this.lighting && !FB.vertices.page.twin;
          if (NB && (Number.isNaN(FB.key) && (FB.ci = Math.floor(FB.origin[0] / uB), FB.cj = Math.floor(FB.origin[1] / uB), FB.ck = Math.floor(FB.origin[2] / uB), FB.key = (0, ZJ.i)(FB.ci, FB.cj, FB.ck)), (!VB || BB < 1 || yB || !this.batchDraws(dB, FB.packed, NB)) && this.visSeeThrough(FB, NB) && tB.add(FB.key)), !VB) continue;
          yB || (FB.lostRemeshes = 0);
          const pB = FB.origin[0] - this.originOffset[0],
            JB = FB.origin[1] - this.originOffset[1],
            YB = FB.origin[2] - this.originOffset[2];
          if (!(0, TJ.c)(TB.frustum, pB, JB, YB, uB)) continue;
          const oB = pB + uB / 2 - this.eye[0],
            kB = JB + uB / 2 - this.eye[1],
            OB = YB + uB / 2 - this.eye[2];
          if (FB.distance = oB * oB + kB * kB + OB * OB, this.lighting && !FB.lit && (EB = Math.max(EB, FB.vertexCount), this.unlit.push(FB)), yB) continue;
          const DB = this.isBlended(dB) ? null : this.batchFor(dB, FB.packed, FB.vertices.page, 1 === BB, LB);
          NB ? (fB[MB] = FB, sB[MB++] = DB) : wB(FB, DB)
        }
        const UB = NB ? this.sweepVisibility(BB, TB, iB) : null;
        null === (pB = (0, rp.r)(lB)) || void 0 === pB || pB.update(TB.frustum, this.originOffset, uB, UB);
        for (let FB = 0; FB < MB; FB++) {
          const BB = fB[FB];
          !UB || UB.isDrawn(BB.ci, BB.cj, BB.ck) ? wB(BB, sB[FB]) : (this.visCulledParts++, this.visCulledTriangles += 2 * BB.faceCount)
        }
        for (const FB of this.transparent) mB ||= vB && FB.material.liquid && !FB.material.customRenderMat;
        this.submittedTriangles = zB, UB && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(BB, TB, UB)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(mB) : mB && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && EB > 0 && this.geometry.lightFullSky(this.unlit, EB);
        for (const FB of this.opaqueBatches) this.chunkSorter.sort(FB.meshes, 1) || FB.meshes.sort(bJ);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(nJ)
      }
      sweepVisibility(BB, TB, dB) {
        const {
          JL: VB
        } = BB.OL, yB = VB.ZBB, pB = this.visPassable, lB = this.eye[0] + this.originOffset[0], JB = this.eye[1] + this.originOffset[1], YB = this.eye[2] + this.originOffset[2];
        if (!dB.eyeClear(lB, JB, YB, TB.near, TB.projectionMatrix, VB)) return null;
        const [gB, oB] = VB.cVB, kB = dB.update(lB, JB, YB, yB, gB, oB, pB);
        return this.visSweeps = dB.sweeps, kB ? dB : null
      }
      visSeeThrough(BB, TB) {
        const {
          material: dB
        } = BB;
        return (!dB || !this.isBlended(dB)) && (BB.mesh.visibility < 1 || !(null !== dB && void 0 !== dB && dB.bindGroup) || BB.faceCount > 0 && (!this.geometry.backed(BB) || this.lighting && !BB.vertices.page.twin) || !this.batchDraws(dB, BB.packed, TB))
      }
      batchDraws(BB, TB, dB) {
        var VB;
        const yB = TB ? 2 : 0;
        if (BB === this.visDrawsMaterial && function(BB, TB) {
            return 0 !== (BB & 1 << TB)
          }(this.visDrawsBits, yB)) return 0 !== (this.visDrawsBits & 2 << yB);
        let pB = null !== (VB = this.visBatchDraws.get(BB)) && void 0 !== VB ? VB : 0;
        if (!(pB & 1 << yB)) {
          pB |= 1 << yB | (!!BB.bindGroupLayout && this.canDraw(BB, TB) && !!this.pipelines.get(this.pipelineId(BB, this.programKey(BB, TB), dB)) ? 2 << yB : 0), this.visBatchDraws.set(BB, pB)
        }
        return this.visDrawsMaterial = BB, this.visDrawsBits = pB, 0 !== (pB & 2 << yB)
      }
      runVisCheck(BB, TB, dB) {
        const {
          OL: VB
        } = BB, {
          JL: yB
        } = VB, pB = yB.ZBB, lB = new Set;
        for (const OB of this.chunks.values()) lB.add(OB.key);
        const JB = Ny.Matrix.FromArray(TB.viewProjectionMatrix).invert(),
          [YB, gB, oB] = this.originOffset,
          kB = new Ny.RD,
          LB = function(BB, TB, dB, VB) {
            const yB = new Set;
            for (let pB = 0; pB < 27; pB++)
              for (let lB = 0; lB < 48; lB++) {
                const JB = dB((lB + .5) / 48 * 2 - 1, (pB + .5) / 27 * 2 - 1);
                XJ(BB, TB, [JB[0] - TB[0], JB[1] - TB[1], JB[2] - TB[2]], VB, yB)
              }
            return yB
          }({
            tC: (BB, TB, dB) => yB.tC(BB, TB, dB),
            occluders: dB.occluders,
            opaque: dB.opaque,
            UD: pB,
            isDrawn: (BB, TB, VB) => dB.isDrawn(BB, TB, VB),
            hasParts: (BB, TB, dB) => lB.has((0, ZJ.i)(BB, TB, dB))
          }, [this.eye[0] + YB, this.eye[1] + gB, this.eye[2] + oB], ((BB, TB) => (Ny.RD.TransformCoordinatesFromFloatsToRef(BB, TB, .5, JB, kB), [kB.x + YB, kB.y + gB, kB.z + oB])), (yB.cVB[0] + 1) * pB);
        this.visViolations = LB.size;
        for (const OB of LB) this.warnOnce(`vis:${OB}`, `Lite terrain cave culling skipped chunk ${OB}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var BB;
        null !== (BB = this.pD) && void 0 !== BB && BB.isRunning() && (this.shaderPackInputs ??= new Cp(this.device, this.pD.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.pD, this.eye, this.lighting))
      }
      bindShaderPackInputs(BB, TB, dB) {
        var VB, yB, pB, lB;
        let JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: YB
        } = this.shaderPackFields(TB, dB);
        if (void 0 === YB) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Cp(this.device, dB.textureLayers(), this.sunShadow), this.shaderPackInputs.write(dB, this.eye, this.lighting));
        const gB = pV(YB) ? null !== (VB = null === (yB = this.sceneDepth) || void 0 === yB ? void 0 : yB.view) && void 0 !== VB ? VB : this.standIn() : null,
          oB = JB ? null !== (pB = null === (lB = this.shadowMask) || void 0 === lB ? void 0 : lB.view) && void 0 !== pB ? pB : this.standIn() : null;
        this.shaderPackInputs.bind(BB, gB, Wp(YB, !!this.sunShadow), oB)
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
        var BB, TB;
        return null !== (BB = null === (TB = this.shaderPackInputs) || void 0 === TB ? void 0 : TB.bindGroupFor(null, !0)) && void 0 !== BB ? BB : null
      }
      resetBatches(BB) {
        const TB = this.opaqueBatches;
        let dB = 0;
        for (const VB of TB) VB.meshes.length > 0 && (VB.meshes.length = 0, VB.faceCull = this.batchFaceCull(VB.material, BB), TB[dB++] = VB);
        TB.length = dB
      }
      orderBatches() {
        const BB = this.opaqueBatches;
        for (let TB = 0; TB < BB.length; TB++) {
          const dB = BB[TB];
          dB.group = TB;
          for (let VB = 0; VB < TB; VB++) {
            const TB = BB[VB];
            if (TB.material === dB.material && TB.packed === dB.packed) {
              dB.group = TB.group;
              break
            }
          }
          dB.nearest = dB.meshes.length > 0 ? dB.meshes[0].distance : 1 / 0
        }
        BB.sort(WJ)
      }
      batchFor(BB, TB, dB, VB, yB) {
        for (const lB of this.opaqueBatches)
          if (lB.material === BB && lB.packed === TB && lB.page === dB && lB.resting === VB) return lB;
        const pB = {
          material: BB,
          packed: TB,
          page: dB,
          resting: VB,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(BB, yB)
        };
        return this.opaqueBatches.push(pB), pB
      }
      batchFaceCull(BB, TB) {
        return !(!TB || !(0, QJ.q)(BB.model)) && (!this.pD || ! function(BB) {
          var TB;
          return !(null === (TB = (0, wT.h)(BB)) || void 0 === TB || !TB.movesVertices)
        }(this.shaderPackFields(BB, this.pD).packVariant))
      }
      writeFrameUniforms(BB, TB) {
        const dB = this.frameUniforms,
          VB = kV;
        if ((0, OJ.z)(BB, dB), dB[VB.fogInfos] = TB.fogEnabled ? TB.fogMode : 0, dB[VB.fogInfos + 1] = TB.fogStart, dB[VB.fogInfos + 2] = TB.fogEnd, dB[VB.fogInfos + 3] = TB.fogDensity, dB.set(TB.fogColour, VB.fogColour), dB[VB.outputHeight] = TB.renderHeight, dB.set(TB.ambientColour, VB.sceneAmbient), (0, OJ.r)(TB, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const TB = (0, DJ.g)(BB.lu, BB.rD, BB.cD);
          for (let BB = 0; BB < 4; BB++) dB[VB.aoLevels + BB] = TB[BB] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, dB)
      }
      animateMaterials(BB) {
        const TB = OV.anim;
        for (const dB of this.materials.values()) dB.animated && (dB.uniformData[TB] = BB, this.device.queue.writeBuffer(dB.uniformBuffer, 4 * TB, dB.uniformData, TB, 1))
      }
      canDraw(BB, TB) {
        return !("atlas" === BB.texture && !TB) || (this.warnOnce(`stride:${BB.id}`, `Lite terrain: material "${BB.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(BB, TB) {
        let dB = 0;
        BB.setBindGroup(1, this.frameBindGroup);
        for (const VB of this.opaqueBatches) {
          if (!VB.meshes.length || !this.canDraw(VB.material, VB.packed)) continue;
          const yB = this.pipelineFor(VB.material, VB.packed, TB, VB.resting);
          yB && (BB.setPipeline(yB), BB.setBindGroup(2, VB.material.bindGroup), this.pD && this.bindShaderPackInputs(BB, VB.material, this.pD, this.prepassOf.has(yB)), dB += this.drawBatch(BB, VB))
        }
        return dB
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(BB, TB, dB) {
        const VB = this.target,
          yB = this.pD;
        if (!VB || !yB || 0 === this.maskPipelines) return 0;
        let pB = 0,
          lB = null;
        this.geometry.setDrawing(!0);
        try {
          for (const JB of this.opaqueBatches) {
            if (!JB.meshes.length || !this.canDraw(JB.material, JB.packed)) continue;
            const YB = this.pipelineFor(JB.material, JB.packed, VB, JB.resting),
              gB = YB && this.prepassOf.get(YB);
            gB && (lB || (lB = BB.beginRenderPass(TB), lB.setBindGroup(0, dB), lB.setBindGroup(1, this.frameBindGroup)), lB.setPipeline(gB), lB.setBindGroup(2, JB.material.bindGroup), this.bindShaderPackInputs(lB, JB.material, yB, !0), pB += this.drawBatch(lB, JB))
          }
        } finally {
          var JB;
          null === (JB = lB) || void 0 === JB || JB.end(), this.geometry.setDrawing(!1)
        }
        return pB
      }
      drawBatch(BB, TB) {
        let dB = 0;
        for (const VB of TB.meshes) {
          const {
            rangeCount: TB
          } = VB;
          TB > 0 && (dB += this.geometry.draw(BB, VB, this.lighting, VB.first0, VB.count0), TB > 1 && (dB += this.geometry.draw(BB, VB, this.lighting, VB.first1, VB.count1)))
        }
        return dB
      }
      drawTransparent(BB, TB) {
        let dB = 0,
          VB = null,
          yB = null;
        BB.setBindGroup(1, this.frameBindGroup);
        for (const pB of this.transparent) {
          const lB = pB.material;
          if (!this.canDraw(lB, pB.packed)) continue;
          const JB = this.pipelineFor(lB, pB.packed, TB);
          JB && (JB !== VB && (BB.setPipeline(JB), VB = JB, this.pD && this.bindShaderPackInputs(BB, lB, this.pD)), lB !== yB && (BB.setBindGroup(2, lB.bindGroup), yB = lB), dB += this.geometry.draw(BB, pB, this.lighting))
        }
        return dB
      }
    }

    function AJ(BB, TB, dB, VB) {
      return `${KV(BB)}|${BB.atlasLayers}|${BB.M_}|${TB}|${dB}|${VB._colorFormat}|${VB._depthStencilFormat}|${VB._sampleCount}`
    }

    function bJ(BB, TB) {
      return BB.distance - TB.distance
    }

    function nJ(BB, TB) {
      return TB.distance - BB.distance
    }
    class eJ {
      constructor() {
        this.left = []
      }
      sort(BB, TB) {
        for (let dB = 0; dB < BB.length; dB++) {
          const TB = BB[dB].distance;
          if (TB - TB !== 0) return !1
        }
        return this.sortRange(BB, 0, BB.length, TB), !0
      }
      sortRange(BB, TB, dB, VB) {
        if (dB - TB <= 16) {
          for (let yB = TB + 1; yB < dB; yB++) {
            const dB = BB[yB],
              pB = VB * dB.distance;
            let lB = yB - 1;
            for (; lB >= TB && VB * BB[lB].distance > pB; lB--) BB[lB + 1] = BB[lB];
            BB[lB + 1] = dB
          }
          return
        }
        const yB = TB + dB >>> 1;
        if (this.sortRange(BB, TB, yB, VB), this.sortRange(BB, yB, dB, VB), VB * BB[yB - 1].distance <= VB * BB[yB].distance) return;
        const {
          left: pB
        } = this, lB = yB - TB;
        for (let oB = 0; oB < lB; oB++) pB[oB] = BB[TB + oB];
        let JB = 0,
          YB = yB,
          gB = TB;
        for (; JB < lB && YB < dB;) BB[gB++] = VB * BB[YB].distance < VB * pB[JB].distance ? BB[YB++] : pB[JB++];
        for (; JB < lB;) BB[gB++] = pB[JB++]
      }
    }
    const BY = Math.ceil(102);

    function TY(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TB;
      const pB = Math.min(TB, dB),
        lB = new Uint32Array(Bd(VB));
      for (let JB = 0; JB < VB; JB++) {
        const TB = Math.floor(JB * pB / VB),
          dB = Math.max(TB + 1, Math.floor((JB + 1) * pB / VB));
        for (let YB = 0; YB < VB; YB++) {
          const gB = Math.floor(YB * pB / VB),
            oB = Math.max(gB + 1, Math.floor((YB + 1) * pB / VB));
          let kB = 0;
          for (let VB = TB; VB < dB; VB++)
            for (let TB = gB; TB < oB; TB++) BB[VB * yB + TB] >= BY && kB++;
          if (2 * kB >= (dB - TB) * (oB - gB)) {
            const BB = YB + VB * JB;
            lB[BB >>> 5] |= 1 << (31 & BB)
          }
        }
      }
      return lB
    }

    function dY(BB) {
      return Math.max(1, Math.min(16, BB))
    }
    class VY {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = BB, this.loadTexture = TB, this.warn = dB, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(BB, TB) {
        return (BB.jR !== this.builtVersion || this.blockCaster.length !== TB) && (this.build(BB, TB), !0)
      }
      build(BB, TB) {
        this.builtVersion = BB.jR;
        const dB = new Uint16Array(TB),
          VB = new Map;
        for (let yB = 1; yB < TB; yB++) {
          const TB = this.classify(BB, yB, VB);
          if (null === TB || TB === jT) {
            dB[yB] = null === TB ? 0 : jT;
            continue
          }
          let pB = this.byKey.get(TB.key);
          void 0 === pB && (pB = this.allocate(TB), this.byKey.set(TB.key, pB)), dB[yB] = pB
        }
        this.blockCaster = dB, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(BB, TB) {
        const dB = BB.R7[TB];
        if ("function" !== typeof dB) return dB;
        try {
          return dB()
        } catch (VB) {
          return this.warnOnce(`Sun shadows: no caster option for block ${TB}: ${VB instanceof Error?VB.message:String(VB)}`), null
        }
      }
      classify(BB, TB, dB) {
        const VB = this.option(BB, TB);
        if ("none" === VB) return null;
        if (VB && VB.planes.length > 0) {
          const BB = VB.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(BB)}`,
            planes: BB
          }
        }
        if (BB.OO[TB]) return null;
        const yB = BB.uO[TB] ? BB.uZ(TB) : null;
        if (yB && yB.length >= 6) {
          const BB = function(BB) {
            const TB = new Uint32Array(16);
            for (let dB = 0; dB + 6 <= BB.length; dB += 6) {
              const VB = [0, 1, 2].map((TB => Math.max(0, Math.ceil(8 * BB[dB + TB] - .5)))),
                yB = [0, 1, 2].map((TB => Math.min(7, Math.floor(8 * BB[dB + TB + 3] - .5))));
              for (let BB = VB[2]; BB <= yB[2]; BB++)
                for (let dB = VB[1]; dB <= yB[1]; dB++)
                  for (let pB = VB[0]; pB <= yB[0]; pB++) {
                    const VB = pB + 8 * (dB + 8 * BB);
                    TB[VB >>> 5] |= 1 << (31 & VB)
                  }
            }
            return TB
          }(yB);
          return function(BB) {
            return BB.every((BB => 4294967295 === BB))
          }(BB) ? jT : BB.every((BB => 0 === BB)) ? null : {
            kind: "shape",
            key: `shape:${BB.join(",")}`,
            mask: BB
          }
        }
        if (BB.bZ[TB] || !BB.Ju[TB]) return null;
        const pB = [0, 1, 2, 3, 4, 5].map((VB => {
          const yB = BB.Yu[6 * TB + VB];
          let pB = dB.get(yB);
          return void 0 === pB && (pB = function(BB) {
            if (!BB || BB.Eu) return null;
            const {
              f_: TB,
              M_: dB,
              N_: VB
            } = BB;
            if (!TB || !dB || !(dB > 0) || void 0 === VB || !(VB >= 0)) return null;
            const yB = TB[0],
              pB = dB * dB * 4;
            if (!yB || yB.byteLength < pB) return null;
            const lB = Math.floor(yB.byteLength / pB),
              JB = TB[Math.floor(VB / lB)];
            if (!JB) return null;
            const YB = new Uint8Array(JB.buffer, JB.byteOffset, JB.byteLength),
              gB = VB % lB * pB;
            if (gB + pB > YB.length) return null;
            const oB = new Uint8Array(dB * dB);
            let kB = !1;
            for (let LB = 0; LB < oB.length; LB++) oB[LB] = YB[gB + 4 * LB + 3], kB ||= oB[LB] < BY;
            return kB ? {
              alpha: oB,
              width: dB
            } : null
          }(BB.Hu(yB)), dB.set(yB, pB)), pB
        }));
        if (pB.every((BB => null === BB))) return jT;
        const lB = dY(Math.max(...pB.map((BB => {
            var TB;
            return null !== (TB = null === BB || void 0 === BB ? void 0 : BB.width) && void 0 !== TB ? TB : 1
          })))),
          JB = new Uint32Array(Bd(lB)).fill(4294967295),
          YB = pB.map((BB => null === BB ? JB : TY(BB.alpha, BB.width, BB.width, lB)));
        return {
          kind: "cutout",
          key: `cutout:${lB}:${YB.map((BB=>BB.join(","))).join("|")}`,
          size: lB,
          faces: YB
        }
      }
      allocate(BB) {
        if (this.nextCaster >= Td) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const TB = this.nextCaster++;
        if (this.writeCaster(TB, AT, 0, 0, 0), "shape" === BB.kind) {
          const dB = this.allocateMask(BB.mask.length);
          dB >= 0 && (this.sink(dB, BB.mask), this.writeCaster(TB, bT, dB, 0, 8))
        } else if ("cutout" === BB.kind) {
          const dB = Bd(BB.size),
            VB = this.allocateMask(6 * dB);
          if (VB >= 0) {
            const yB = new Uint32Array(6 * dB);
            BB.faces.forEach(((BB, TB) => {
              yB.set(BB, TB * dB)
            })), this.sink(VB, yB), this.writeCaster(TB, eT, VB, 0, BB.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(TB, BB.planes).finally((() => {
          this.planesLoading--
        })));
        return TB
      }
      async loadPlanes(BB, TB) {
        const dB = await Promise.all(TB.map((BB => this.texture(BB.texture))));
        if (dB.some((BB => null === BB))) return;
        const VB = dB,
          yB = dY(Math.max(...VB.map((BB => Math.min(BB.width, BB.height))))),
          pB = Bd(yB),
          lB = this.allocateMask(TB.length * (4 + pB));
        if (lB < 0) return;
        const JB = new Uint32Array(TB.length * (4 + pB)),
          YB = 4 * TB.length;
        TB.forEach(((BB, TB) => {
          const dB = lB + YB + TB * pB;
          JB.set(function(BB, TB) {
            const [dB, VB] = BB.tangent, yB = Math.hypot(dB, VB) || 1, pB = dB / yB, lB = VB / yB, JB = BB.centre[0] * lB - BB.centre[1] * pB, YB = new Uint32Array(4);
            return new Float32Array(YB.buffer, 0, 3).set([pB, lB, JB]), YB[3] = TB, YB
          }(BB, dB), 4 * TB), JB.set(TY(VB[TB].alpha, VB[TB].width, VB[TB].height, yB), YB + TB * pB)
        })), this.sink(lB, JB), this.writeCaster(BB, nT, lB, TB.length, yB)
      }
      texture(BB) {
        let TB = this.textures.get(BB);
        return TB || (TB = this.loadTexture(BB).catch((TB => (this.warn(`Sun shadows: no mask for ${BB}: ${TB instanceof Error?TB.message:String(TB)}`), null))), this.textures.set(BB, TB)), TB
      }
      allocateMask(BB) {
        if (this.nextMaskWord + BB > dd) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const TB = 32768 + this.nextMaskWord;
        return this.nextMaskWord += BB, TB
      }
      writeCaster(BB, TB, dB, VB, yB) {
        this.sink(0 + 4 * BB, Uint32Array.of(TB, dB, VB, yB))
      }
      warnOnce(BB) {
        this.warned.has(BB) || (this.warned.add(BB), this.warn(BB))
      }
    }
    var yY = dB(36621);

    function pY(BB) {
      return !BB.mu && !BB.tyB && !BB.AD
    }

    function lY() {
      return {
        bricks: new Uint32Array(ZT),
        cells: new Uint16Array(32768),
        special: new Uint8Array(RT)
      }
    }
    class JY {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = BB, this.writeVoxels = TB, this.writePool = dB, this.warn = VB, this.eyeChunk = null, this.slotChunk = new Array(rT).fill(null), this.slotVersion = new Float64Array(rT).fill(-1), this.slotPool = new Array(rT).fill(null), this.starved = new Uint8Array(rT), this.queue = [], this.queued = new Uint8Array(rT), this.queueSorted = !0, this.freePool = new Uint32Array(Vd), this.freeCount = Vd, this.casterTable = null, this.warnedPool = !1, this.scratch = lY(), this.victimScratch = lY(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * rT), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let yB = 0; yB < Vd; yB++) this.freePool[yB] = 65535 - yB
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Vd - this.freeCount
      }
      chunkAdded(BB) {
        if (null === this.eyeChunk || !this.inRadius(BB.i, BB.j, BB.k)) return;
        const TB = GT(BB.i, BB.j, BB.k);
        this.slotChunk[TB] = BB, this.slotVersion[TB] = -1, this.enqueue(TB)
      }
      update(BB, TB, dB) {
        const VB = this.casters.blockCaster;
        if (VB !== this.casterTable) {
          this.casterTable = VB;
          for (let BB = 0; BB < rT; BB++) this.slotVersion[BB] = -1, this.slotChunk[BB] && this.enqueue(BB)
        }
        const yB = Math.floor(BB[0] / 32),
          pB = Math.floor(BB[1] / 32),
          lB = Math.floor(BB[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== yB || this.eyeChunk[1] !== pB || this.eyeChunk[2] !== lB) && (this.eyeChunk = [yB, pB, lB], this.follow(TB), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let JB = 0; JB < rT; JB++) {
          const BB = this.slotChunk[JB];
          BB && (BB.WdB || BB.eD !== this.slotVersion[JB]) && this.enqueue(JB)
        }
        this.drain(dB), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(BB, TB) {
        this.records.set(TB, 4 * BB), this.windowTopStale = !0, this.writeVoxels(4 * BB, TB)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const BB = this.records;
        let TB = -1 / 0;
        for (let VB = 0; VB < BB.length; VB += 4) {
          const dB = 255 & BB[VB + 3];
          dB !== ST && dB !== PT || !this.inRadius(BB[VB], BB[VB + 1], BB[VB + 2]) || (TB = Math.max(TB, BB[VB + 1] * UT + (BB[VB + 3] >>> 8)))
        }
        const dB = TB === -1 / 0 ? 1 : TB + WT;
        dB !== this.windowTop[0] && (this.windowTop[0] = dB, this.writeVoxels(XT, this.windowTop))
      }
      follow(BB) {
        const TB = this.eyeChunk,
          [dB, VB, yB] = FT;
        for (let lB = -yB; lB <= yB; lB++)
          for (let yB = -VB; yB <= VB; yB++)
            for (let VB = -dB; VB <= dB; VB++) {
              var pB;
              const dB = TB[0] + VB,
                JB = TB[1] + yB,
                YB = TB[2] + lB,
                gB = GT(dB, JB, YB),
                oB = this.slotChunk[gB];
              if (oB && !oB.WdB && oB.i === dB && oB.j === JB && oB.k === YB) continue;
              const kB = null !== (pB = BB(dB, JB, YB)) && void 0 !== pB ? pB : null;
              oB && (oB.i !== dB || oB.j !== JB || oB.k !== YB) && this.slotPool[gB] && (this.release(gB), this.record.fill(0), this.writeRecord(gB, this.record)), this.slotChunk[gB] = kB, this.slotVersion[gB] = -1, (kB || oB) && this.enqueue(gB)
            }
      }
      requeueStarved() {
        for (let BB = 0; BB < rT; BB++) this.starved[BB] && this.slotChunk[BB] && this.enqueue(BB)
      }
      enqueue(BB) {
        this.queued[BB] || (this.queued[BB] = 1, this.queue.push(BB), this.queueSorted = !1)
      }
      drain(BB) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const BB = new Map;
          for (const TB of this.queue) BB.set(TB, this.slotDistance(TB));
          this.queue.sort(((TB, dB) => BB.get(dB) - BB.get(TB))), this.queueSorted = !0
        }
        const TB = performance.now();
        let dB = 0;
        const VB = [];
        for (; this.queue.length > 0 && (0 === dB || performance.now() - TB < BB);) {
          const BB = this.queue.pop(),
            TB = this.slotChunk[BB];
          !TB || TB.WdB || pY(TB) ? (this.queued[BB] = 0, this.encodeSlot(BB), dB++) : VB.push(BB)
        }
        for (let yB = VB.length - 1; yB >= 0; yB--) this.queue.push(VB[yB])
      }
      slotDistance(BB) {
        const TB = this.slotChunk[BB],
          dB = this.eyeChunk;
        return TB ? Math.max(Math.abs(TB.i - dB[0]), Math.abs(TB.j - dB[1]), Math.abs(TB.k - dB[2])) : 0
      }
      inRadius(BB, TB, dB) {
        const VB = this.eyeChunk,
          [yB, pB, lB] = FT;
        return Math.abs(BB - VB[0]) <= yB && Math.abs(TB - VB[1]) <= pB && Math.abs(dB - VB[2]) <= lB
      }
      release(BB) {
        const TB = this.slotPool[BB];
        if (TB) {
          for (let BB = TB.length - 1; BB >= 0; BB--) this.freePool[this.freeCount++] = TB[BB];
          this.slotPool[BB] = null
        }
      }
      encodeSlot(BB) {
        var TB, dB, VB, yB, pB;
        let lB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          JB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const YB = null !== (TB = null === (dB = this.slotPool[BB]) || void 0 === dB ? void 0 : dB.length) && void 0 !== TB ? TB : 0;
        this.release(BB), this.starved[BB] = 0;
        const gB = this.slotChunk[BB],
          oB = this.record;
        if (!gB || gB.WdB || !gB.SL) return this.slotChunk[BB] = null, this.slotVersion[BB] = -1, oB.fill(0), this.writeRecord(BB, oB), void(YB > 0 && this.requeueStarved());
        this.slotVersion[BB] = gB.eD;
        const kB = this.encodeBricks(gB, BB, lB, JB);
        oB[0] = gB.i, oB[1] = gB.j, oB[2] = gB.k, oB[3] = kB, this.writeRecord(BB, oB), null === (VB = this.encoded) || void 0 === VB || VB.call(this, gB), JB && (null !== (yB = null === (pB = this.slotPool[BB]) || void 0 === pB ? void 0 : pB.length) && void 0 !== yB ? yB : 0) < YB && this.requeueStarved()
      }
      encodeBricks(BB, TB, dB, VB) {
        if (BB.ED) return cT;
        const yB = this.casters.blockCaster,
          {
            data: pB,
            stride: lB,
            offset: JB
          } = BB.SL,
          [YB, gB, oB] = lB,
          kB = UT,
          {
            bricks: LB,
            cells: OB,
            special: DB
          } = dB;
        LB.fill(0), DB.fill(0);
        let uB = 0,
          HB = 0,
          EB = 0;
        for (let vB = 0; vB < kB; vB++) {
          const TB = vB >> 2,
            dB = 3 & vB,
            VB = BB.cO[vB],
            lB = VB === yY.d ? -1 : VB < yB.length ? yB[VB] : 0;
          if (0 !== lB)
            for (let BB = 0; BB < kB; BB++) {
              const VB = BB >> 2,
                mB = 3 & BB;
              let iB = JB + BB * YB + vB * gB;
              for (let BB = 0; BB < kB; BB++, iB += oB) {
                let JB = lB;
                if (JB < 0) {
                  const BB = pB[iB];
                  if (JB = BB < yB.length ? yB[BB] : 0, 0 === JB) continue
                }
                const YB = qT(VB, TB, BB >> 2),
                  gB = xT(mB, dB, 3 & BB);
                LB[3 * YB + (gB >>> 5)] |= 1 << (31 & gB), OB[YB * QT + gB] = JB, uB++, EB = vB, JB === jT ? HB++ : DB[YB] = 1
              }
            }
        }
        return 0 === uB ? cT : 32768 === HB ? ST | EB << 8 : (this.writePoolEntries(TB, dB, VB), this.writeVoxels(aT + TB * ZT, LB), PT | EB << 8)
      }
      writePoolEntries(BB, TB, dB) {
        const {
          bricks: VB,
          cells: yB,
          special: pB
        } = TB, lB = this.entry;
        let JB = 0;
        for (let oB = 0; oB < RT; oB++) JB += pB[oB];
        if (0 === JB) return;
        dB && this.freeCount < JB && this.evictBeyond(BB, JB);
        const YB = new Uint32Array(dB ? Math.min(JB, this.freeCount) : 0);
        let gB = 0;
        for (let oB = 0; oB < RT; oB++) {
          if (!pB[oB]) continue;
          const dB = 3 * oB;
          if (gB === YB.length) {
            this.dropSpecials(TB, oB), this.starved[BB] = 1;
            continue
          }
          const JB = this.freePool[--this.freeCount];
          YB[gB++] = JB;
          for (let BB = 0; BB < QT; BB++) {
            const TB = VB[dB + (BB >>> 5)] >>> (31 & BB) & 1 ? yB[oB * QT + BB] : 0;
            1 & BB ? lB[BB >> 1] |= TB << 16 : lB[BB >> 1] = TB
          }
          VB[dB + 2] = JB + 1, this.writePool(yd + 32 * JB, lB)
        }
        YB.length > 0 && (this.slotPool[BB] = YB)
      }
      evictBeyond(BB, TB) {
        const dB = this.slotDistance(BB),
          VB = [];
        for (let yB = 0; yB < rT; yB++) yB !== BB && this.slotPool[yB] && this.slotDistance(yB) > dB && VB.push(yB);
        VB.sort(((BB, TB) => this.slotDistance(TB) - this.slotDistance(BB)));
        for (const yB of VB) {
          if (this.freeCount >= TB) return;
          const BB = this.slotChunk[yB];
          BB && !BB.WdB && BB.SL && (BB.eD === this.slotVersion[yB] || pY(BB)) && this.encodeSlot(yB, this.victimScratch, !1)
        }
      }
      dropSpecials(BB, TB) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const dB = 3 * TB;
        for (let VB = 0; VB < QT; VB++) BB.cells[TB * QT + VB] !== jT && (BB.bricks[dB + (VB >>> 5)] &= ~(1 << (31 & VB)))
      }
    }
    var YY = dB(36331);
    class gY {
      constructor(BB) {
        this.device = BB, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new ud, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.JL = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = BB.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = BB.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(BB, TB, dB) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: VB
        } = this;
        VB.tO(BB, TB), dB.forEachSunShadowCaster((BB => {
          this.add(BB)
        })), VB.finish();
        const yB = 0 === VB.parts;
        if (yB && this.uploadedEmpty) return;
        this.uploadedEmpty = yB;
        const {
          queue: pB
        } = this.device, {
          words: lB
        } = VB;
        pB.writeBuffer(this.frameBuffer, 0, lB, 0, 16385), VB.refs > 0 && pB.writeBuffer(this.frameBuffer, 65540, lB, Yd, VB.refs), yB || pB.writeBuffer(this.frameBuffer, 327684, lB, gd, VB.parts * Jd)
      }
      add(BB) {
        const TB = this.gridFor(BB);
        if (!TB) return;
        const {
          frame: dB
        } = this, {
          JL: VB,
          worldAt: yB,
          instances: pB,
          instanceCount: lB,
          thin: JB
        } = BB;
        if (pB)
          for (let YB = 0; YB < lB; YB++) JB ? (Ed(pB, 16 * YB, VB, yB, this.JL), dB.add(TB, this.JL)) : dB.add(TB, pB, 16 * YB);
        else dB.add(TB, VB, yB)
      }
      gridFor(BB) {
        let {
          geometry: TB,
          indexed: dB,
          first: VB,
          count: yB,
          skip: pB
        } = BB, lB = this.grids.get(TB);
        lB || (lB = new Map, this.grids.set(TB, lB));
        const JB = `${dB?VB:-1-VB}:${yB}:${null!==pB&&void 0!==pB?pB:""}`;
        let YB = lB.get(JB);
        if (void 0 !== YB || this.gridsFull) return YB;
        const gB = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = gB + 2;
        else if (gB > this.bakeDeadline) return;
        return YB = this.bake(TB, dB, VB, yB, pB), void 0 !== YB && lB.set(JB, YB), YB
      }
      bake(BB, TB, dB, VB, yB) {
        const pB = BB.vertexAttributes.find((BB => "position" === BB.kind)),
          lB = pB ? function(BB, TB, dB, VB) {
            let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const pB = BB => TB ? TB[dB + BB] : dB + BB,
              lB = BB => null !== yB && [0, 1, 2].some((TB => {
                const dB = pB(BB + TB);
                return dB >= yB[0] && dB < yB[1]
              })),
              JB = [1 / 0, 1 / 0, 1 / 0],
              YB = [-1 / 0, -1 / 0, -1 / 0];
            for (let vB = 0; vB + 2 < VB; vB += 3)
              if (!lB(vB))
                for (let TB = 0; TB < 3; TB++) {
                  const dB = pB(vB + TB);
                  for (let TB = 0; TB < 3; TB++) JB[TB] = Math.min(JB[TB], BB[3 * dB + TB]), YB[TB] = Math.max(YB[TB], BB[3 * dB + TB])
                }
            const gB = Math.max(YB[0] - JB[0], YB[1] - JB[1], YB[2] - JB[2]);
            if (!(gB > 0)) return null;
            const oB = gB / 64,
              kB = [0, 0, 0],
              LB = [0, 0, 0],
              OB = [0, 0, 0];
            for (let vB = 0; vB < 3; vB++) kB[vB] = Math.min(65, Math.ceil((YB[vB] - JB[vB]) / oB) + 1), LB[vB] = JB[vB] - oB / 2, OB[vB] = LB[vB] + kB[vB] * oB;
            const DB = new Uint32Array(Math.ceil(kB[0] * kB[1] * kB[2] / 32)),
              uB = new Float64Array(9),
              HB = [0, 0, 0],
              EB = [0, 0, 0];
            for (let vB = 0; vB + 2 < VB; vB += 3)
              if (!lB(vB)) {
                for (let TB = 0; TB < 3; TB++) {
                  const dB = pB(vB + TB);
                  for (let VB = 0; VB < 3; VB++) uB[3 * TB + VB] = BB[3 * dB + VB]
                }
                for (let BB = 0; BB < 3; BB++) {
                  const TB = Math.min(uB[BB], uB[3 + BB], uB[6 + BB]),
                    dB = Math.max(uB[BB], uB[3 + BB], uB[6 + BB]);
                  HB[BB] = Math.max(0, Math.floor((TB - LB[BB]) / oB - 1e-6)), EB[BB] = Math.min(kB[BB] - 1, Math.floor((dB - LB[BB]) / oB + 1e-6))
                }
                for (let BB = HB[2]; BB <= EB[2]; BB++)
                  for (let TB = HB[1]; TB <= EB[1]; TB++)
                    for (let dB = HB[0]; dB <= EB[0]; dB++)
                      if (vd(uB, LB[0] + (dB + .5) * oB, LB[1] + (TB + .5) * oB, LB[2] + (BB + .5) * oB, oB / 2)) {
                        const VB = dB + kB[0] * (TB + kB[1] * BB);
                        DB[VB >>> 5] |= 1 << (31 & VB)
                      }
              } return {
              words: DB,
              lo: LB,
              hi: OB,
              cell: oB,
              dims: kB
            }
          }((0, YY.h)(pB, BB.vertexCount), TB ? BB.indexData : null, dB, VB, yB) : null;
        if (!lB) return null;
        const {
          words: JB,
          ...YB
        } = lB;
        if (this.gridTop + JB.length > kd) return void(this.gridsFull = !0);
        const gB = this.gridTop;
        return this.gridTop += JB.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * gB, JB), {
          ...YB,
          at: gB
        }
      }
    }
    const oY = Math.cos(1 * Math.PI / 180);

    function kY(BB, TB) {
      return BB[0] * TB[0] + BB[1] * TB[1] + BB[2] * TB[2] < oY
    }
    async function LY(BB) {
      const {
        pixels: TB,
        width: dB,
        height: VB
      } = await ay(BB), yB = new Uint8Array(dB * VB);
      for (let pB = 0; pB < yB.length; pB++) yB[pB] = TB[4 * pB + 3];
      return {
        width: dB,
        height: VB,
        alpha: yB
      }
    }
    class OY {
      constructor(BB, TB) {
        this.device = BB, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Nd.o), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = BB.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = BB.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * hT,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = BB.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [dB, VB, yB] = Nd.s;
        this.volume = BB.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: dB,
            height: VB,
            depthOrArrayLayers: yB
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = BB.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = BB.createBuffer({
          label: "sun-shadow-volume-work",
          size: Nd.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = TB ? new gY(BB) : null, this.entityStandIn = TB ? null : BB.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var BB, TB;
        const dB = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || dB.push("Lite sun shadow volume pipeline compiling");
        const VB = null !== (BB = null === (TB = this.casters) || void 0 === TB ? void 0 : TB.planesLoading) && void 0 !== BB ? BB : 0;
        return VB > 0 && dB.push(`${VB} Lite sun shadow plane casters loading their textures`), dB
      }
      entries() {
        var BB, TB, dB, VB;
        const yB = zT.m;
        return [{
          binding: yB.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: yB.SL,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: yB.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: yB.volume,
          resource: this.volumeView
        }, {
          binding: yB.sampler,
          resource: this.volumeSampler
        }, {
          binding: yB.entities,
          resource: {
            buffer: null !== (BB = null === (TB = this.entities) || void 0 === TB ? void 0 : TB.frameBuffer) && void 0 !== BB ? BB : this.entityStandIn
          }
        }, {
          binding: yB.entityGrids,
          resource: {
            buffer: null !== (dB = null === (VB = this.entities) || void 0 === VB ? void 0 : VB.gridBuffer) && void 0 !== dB ? dB : this.entityStandIn
          }
        }]
      }
      prepare(BB, TB, dB) {
        var VB;
        this.entitiesThisFrame = !1;
        const yB = null !== (VB = null === dB || void 0 === dB ? void 0 : dB.sunShadowReach()) && void 0 !== VB ? VB : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!dB || !yB.sunShadow && !yB.airShadow) return void(this.volumeHolds = null);
        if (BB.JL.ZBB !== UT) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${BB.JL.ZBB}; everything is lit.`)));
        const pB = this.start(BB);
        this.casters.update(BB.kO, BB.kO.uO.length);
        const lB = BB.FL;
        for (let LB = 0; LB < 3; LB++) this.eye[LB] = TB[LB] + lB[LB];
        const JB = (0, Nd.z)(this.eye);
        this.staleNear = JB;
        const YB = BB.JL.Nu;
        pB.update(this.eye, ((BB, TB, dB) => YB.tu(BB, TB, dB)), 1);
        const gB = (0, Nd.w)(dB.tBB()),
          oB = pB.eyeChunk,
          kB = this.uniformInts;
        for (let LB = 0; LB < 3; LB++) kB[LB] = oB[LB], kB[4 + LB] = JB[LB];
        this.entitiesThisFrame = null !== this.entities && yB.sunShadow, this.entitiesThisFrame && Dd(this.uniformFloats, 8, TB, gB), null !== this.volumeHolds && (this.castersWritten || kY(gB, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(JB, gB, oB)
      }
      markStale(BB) {
        const TB = this.staleNear,
          dB = UT,
          VB = [BB.i * dB, BB.j * dB, BB.k * dB];
        for (let pB = 0; pB < 3; pB++)
          if (VB[pB] + dB <= TB[pB] - dB || VB[pB] >= TB[pB] + Nd.s[pB] + dB) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const yB = this.stale;
        for (let pB = 0; pB < yB.length; pB += 4)
          if (yB[pB] === BB.i && yB[pB + 1] === BB.j && yB[pB + 2] === BB.k) return void(yB[pB + 3] = this.swept);
        if (16 === yB.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        yB.push(BB.i, BB.j, BB.k, this.swept)
      }
      writeStale() {
        const BB = this.swept,
          TB = this.stale;
        this.staleAll && BB - this.staleAllSwept >= Nd.i && (this.staleAll = !1, TB.length = 0);
        let dB = 0;
        for (let yB = 0; yB < TB.length; yB += 4)
          if (BB - TB[yB + 3] < Nd.i) {
            for (let BB = 0; BB < 4; BB++) TB[dB + BB] = TB[yB + BB];
            dB += 4
          } TB.length = dB;
        const VB = this.uniformInts;
        VB[3] = this.staleAll ? 5 : dB / 4;
        for (let yB = 0; yB < 4; yB++)
          for (let BB = 0; BB < 3; BB++) VB[16 + 4 * yB + BB] = 4 * yB < dB ? TB[4 * yB + BB] * UT : 0
      }
      writeUniform() {
        const BB = this.uniformInts;
        let TB = this.uniformWritten;
        if (TB) {
          let dB = !0;
          for (let VB = 0; VB < BB.length && dB; VB++) dB = BB[VB] === TB[VB];
          if (dB) return
        }
        TB ??= this.uniformWritten = new Int32Array(BB.length), TB.set(BB), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(BB) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, BB)
      }
      computeVolume(BB, TB, dB) {
        const VB = this.buildVolumePass();
        if (!VB) return void(this.volumeHolds = null);
        const yB = (0, Nd.x)(this.volumeHolds, BB);
        this.volumeHolds = BB;
        const pB = 1 === yB.length && yB[0].size.every(((BB, TB) => BB === Nd.s[TB])),
          lB = this.sweptChunk,
          JB = this.sweptLight,
          YB = TB[0] !== JB[0] || TB[1] !== JB[1] || TB[2] !== JB[2],
          gB = dB[0] !== lB[0] || dB[1] !== lB[1] || dB[2] !== lB[2],
          oB = YB && kY(TB, JB);
        if ((pB || this.written || gB || oB) && (this.fastLeft = Nd.i), pB || this.written || YB || gB) {
          this.written = !1;
          for (let BB = 0; BB < 3; BB++) lB[BB] = dB[BB], JB[BB] = TB[BB];
          this.sweepLeft = pB ? 0 : Nd.i
        }
        if (pB ? this.swept += Nd.i : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, yB.push(...(0, Nd.C)(BB, this.slice)), this.slice = (this.slice + 1) % Nd.i, this.swept++), 0 === yB.length) return;
        const kB = (0, Nd.F)(this.workData, TB, yB);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const LB = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          OB = LB.beginComputePass({
            label: "sun-shadow-volume"
          });
        OB.setPipeline(VB.pipeline), OB.setBindGroup(sd.group, VB.bindGroup), OB.dispatchWorkgroups(Math.ceil(kB / Nd.k)), OB.end(), this.device.queue.submit([LB.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const BB = sd,
          TB = GPUShaderStage.COMPUTE,
          dB = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: BB.uniform,
              visibility: TB,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: BB.SL,
              visibility: TB,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: BB.special,
              visibility: TB,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: BB.work,
              visibility: TB,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: BB.volume,
              visibility: TB,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          VB = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: dB,
            entries: [{
              binding: BB.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: BB.SL,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: BB.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: BB.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: BB.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [dB]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Md()
            }),
            entryPoint: "main"
          }
        }).then((BB => {
          this.volumePass = {
            pipeline: BB,
            bindGroup: VB
          }
        }), (BB => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(BB)}`)
        })), null
      }
      start(BB) {
        if (this.window) return this.window;
        const TB = (BB, TB) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * BB, TB)
        };
        this.casters = new VY(((BB, dB) => {
          this.castersWritten = !0, TB(BB, dB)
        }), LY);
        const dB = new JY(this.casters, ((BB, TB) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * BB, TB)
        }), TB);
        return dB.encoded = BB => {
          this.markStale(BB)
        }, BB.JL.on("chunkAdded", (BB => {
          dB.chunkAdded(BB)
        })), this.window = dB, dB
      }
    }
    var DY = dB(37666),
      uY = dB(37673);
    const HY = 0,
      EY = 3,
      vY = 4,
      mY = 5;

    function iY(BB, TB, dB, VB) {
      BB.drawOffset(TB, VB + HY), TB[VB + EY] = BB.drawTime(), dB[VB + vY] = BB.ring.drawStart(), dB[VB + mY] = BB.ring.drawCount()
    }
    const NY = `\n${HV}\n\nconst MAX_STOPS = ${uY.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${uY.e/4}>,\n\tcolor1: array<vec4f, ${uY.e}>,\n\tcolor2: array<vec4f, ${uY.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${uY.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${uY.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var tY = dB(40322);
    class fY {
      constructor(BB, TB, dB, VB) {
        this.device = BB, this.system = TB, this.frameIndex = dB, this.JD = VB, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, tY.c)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (BB, TB) => {
          this.device.queue.writeBuffer(this.ring, BB * uY.f * 4, this.system.ring.records, BB * uY.f, (TB - BB) * uY.f)
        };
        const {
          name: yB
        } = TB;
        this.ring = BB.createBuffer({
          label: `particles-${yB}`,
          size: TB.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = BB.createBuffer({
          label: `particles-uniforms-${yB}`,
          size: 4 * uY.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(BB) {
        const TB = (0, tY.b)(this.system, this.uniformBits, BB);
        TB && (this.uniformBits = TB, this.device.queue.writeBuffer(this.uniforms, 0, TB))
      }
      bind() {
        const {
          system: BB
        } = this, TB = this.texture;
        (0, tY.k)(BB, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${BB.name}`,
          size: [uY.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * uY.k
        }, [uY.k, 1]));
        const dB = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.JD.whiteRamp;
        this.bindGroup && this.boundView === TB.view && this.boundSampler === TB.sampler && this.boundRamp === dB || (this.boundView = TB.view, this.boundSampler = TB.sampler, this.boundRamp = dB, this.bindGroup = this.device.createBindGroup({
          label: `particles-${BB.name}`,
          layout: this.JD.layout,
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
            resource: TB.sampler
          }, {
            binding: 3,
            resource: TB.view
          }, {
            binding: 4,
            resource: this.JD.rampSampler
          }, {
            binding: 5,
            resource: dB
          }]
        }))
      }
      destroy() {
        var BB;
        this.ring.destroy(), this.uniforms.destroy(), null === (BB = this.ramp) || void 0 === BB || BB.destroy()
      }
    }
    class sY {
      constructor(BB, TB) {
        this.device = BB, this.resources = TB, this.renderable = void 0, this.systems = new Map, this.draws = [], this.JD = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, gT.d)();
        const dB = BB.createBindGroupLayout({
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
        this.frameLayout = BB.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = BB.createPipelineLayout({
          bindGroupLayouts: [TT(BB), dB, this.frameLayout]
        }), this.module = BB.createShaderModule({
          label: "particles",
          code: NY
        });
        const VB = BB.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        BB.queue.writeTexture({
          texture: VB
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.JD = {
          layout: dB,
          rampSampler: BB.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: VB.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (TB, dB) => (this.bindTarget(dB), {
            renderable: this.renderable,
            pipeline: lT(BB, dB),
            draw: BB => dB === this.preparedTarget ? this.draw(BB) : 0
          })
        }
      }
      get fyB() {
        return this.systems.size
      }
      reset() {
        for (const BB of this.systems.keys()) BB.reset()
      }
      describePendingWork() {
        return (0, DY.h)(this.systems.keys(), "Lite")
      }
      iK(BB, TB) {
        const dB = new DY.d(BB, TB, this);
        return this.systems.set(dB, new fY(this.device, dB, this.allocateFrameIndex(), this.JD)), dB
      }
      JBB(BB, TB) {
        for (const dB of this.systems.keys()) dB.JBB(BB, TB)
      }
      canDraw(BB) {
        const TB = this.systems.get(BB),
          dB = BB.texture ? this.resources.boundTexture(BB.texture) : null;
        if (!TB || !dB || !this.targetPipelines) return !1;
        if (TB.texture = dB, TB.pipelines.length = 0, !Cy(BB.blendMode)) return this.warnOnce(`blend:${BB.blendMode}`, `particle blend mode ${BB.blendMode} is not drawn (${BB.name})`), !0;
        const VB = (0, Ky.k)(BB.blendMode);
        for (const yB of VB) {
          const BB = this.pipelineFor(yB);
          if (!1 === BB) return TB.pipelines.length = 0, !0;
          BB && TB.pipelines.push(BB)
        }
        return TB.pipelines.length === VB.length
      }
      disposeStopped(BB) {
        BB.dispose()
      }
      remove(BB) {
        const TB = this.systems.get(BB);
        TB && (this.systems.delete(BB), TB.destroy(), this.freeFrameIndices.push(TB.frameIndex))
      }
      prepare(BB) {
        const TB = BB.animationRatio || 1;
        JT(this.renderable._worldCenter, BB, VT), this.preparedTarget = this.target, this.draws.length = 0;
        let dB = 0;
        for (const VB of this.systems.values()) {
          const BB = VB.system;
          if (!BB.animateIfActive(TB)) continue;
          if (BB.ring.takeUploads(VB.upload), !BB.hasLiveParticles() || 0 === VB.pipelines.length) continue;
          VB.writeUniforms(this.warnOnce), VB.bind();
          const yB = 64 * VB.frameIndex;
          VB.count = BB.ring.drawCount(), iY(BB, this.frameData, this.frameBits, yB), dB = Math.max(dB, yB + 64), this.draws.push(VB)
        }
        dB > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, dB)
      }
      draw(BB) {
        let TB = 0,
          dB = null;
        for (const VB of this.draws) {
          BB.setBindGroup(1, VB.bindGroup), BB.setBindGroup(2, this.frameBindGroup, [256 * VB.frameIndex]);
          for (const yB of VB.pipelines) yB !== dB && (BB.setPipeline(yB), dB = yB), BB.draw(4, VB.count), TB++
        }
        return TB
      }
      bindTarget(BB) {
        this.target = BB;
        const TB = `${BB._colorFormat}|${BB._depthStencilFormat}|${BB._depthCompare}|${BB._sampleCount}`;
        let dB = this.pipelines.get(TB);
        dB || (dB = new Map, this.pipelines.set(TB, dB)), this.targetPipelines = dB
      }
      pipelineFor(BB) {
        var TB;
        const dB = this.targetPipelines,
          VB = dB.get(BB);
        if (void 0 !== VB) return VB;
        dB.set(BB, null);
        const yB = this.target,
          pB = BB === Ky.c,
          lB = null !== (TB = yB._depthCompare) && void 0 !== TB ? TB : dT;
        return this.device.createRenderPipelineAsync({
          label: `particles-${BB}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: bB({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: pB ? 1 : 0
            }
          }, yB, Gy((0, Ky.h)(BB))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: yB._depthStencilFormat ? {
            format: yB._depthStencilFormat,
            depthCompare: lB,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: yB._sampleCount
          }
        }).then((TB => {
          dB.set(BB, TB)
        }), (TB => {
          dB.set(BB, !1), console.error("Lite particle pipeline failed", TB), jy("particles", `blend-${BB}`, TB)
        })), null
      }
      allocateFrameIndex() {
        const BB = this.freeFrameIndices.pop();
        if (void 0 !== BB) return BB;
        const TB = this.nextFrameIndex++;
        if (64 * (TB + 1) > this.frameData.length) {
          const BB = new Float32Array(2 * this.frameData.length);
          BB.set(this.frameData), this.frameData = BB, this.frameBits = new Uint32Array(BB.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return TB
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
    class MY {
      constructor(BB, TB, dB, VB, yB) {
        this.lite = BB, this.canvas = TB, this.info = dB, this.resources = yB, this.fVB = !1, this.needPOTTextures = !1, this.Y5 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = TB.width, this.renderHeight = TB.height, this.caps = {
          maxTextureSize: VB.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: VB.maxTextureArrayLayers
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
      setSize(BB, TB) {
        if (this.renderWidth === BB && this.renderHeight === TB) return !1;
        const dB = this.renderWidth,
          VB = this.renderHeight;
        this.renderWidth = BB, this.renderHeight = TB;
        try {
          (0, ZB.m)(this.lite, BB, TB)
        } catch (yB) {
          if (yB instanceof DOMException && "InvalidStateError" === yB.name) {
            this.renderWidth = dB, this.renderHeight = VB;
            try {
              (0, ZB.m)(this.lite, dB, VB)
            } catch {
              this.canvas.width = dB, this.canvas.height = VB
            }
            return console.warn("WebGPU could not allocate render targets for resize", BB, TB, yB.message), !1
          }
          throw yB
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
      Rm() {
        const BB = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : BB - this.lastFrameTime, this.lastFrameTime = BB
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(BB, TB) {
        const dB = document.createElement("canvas");
        return dB.width = BB, dB.height = TB, dB
      }
      I5(BB, TB) {
        var dB;
        return null !== (dB = this.resources.I5.get(BB)) && void 0 !== dB ? dB : new CB(this.resources, BB, TB)
      }
      atlasArray(BB, TB, dB) {
        return this.resources.atlasArray(BB, TB, dB)
      }
    }
    class zY {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(BB) {
        this.fov = BB.fov, this.nearPlane = BB.near, this.farPlane = BB.far;
        const TB = BB.worldMatrix;
        for (let dB = 0; dB < 16; dB++)
          if (this.worldMatrix[dB] !== TB[dB]) return this.worldMatrix.set(TB), void this.worldMatrixVersion++
      }
    }
    class wY {
      constructor(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
        let oB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = BB, this.Gu = TB, this.sceneTask = dB, this.gpuDevice = VB, this.terrain = yB, this.meshes = pB, this.particles = lB, this.resources = JB, this.sunShadow = oB, this.pdB = void 0, this.backendName = "WebGPU (Lite)", this.o2 = void 0, this.modelMeshes = void 0, this.camera = new zY, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new WB(VB.lost), this.deviceLost = this.refusals.deviceLost, this.pdB = new MY(BB, YB, gB, VB.limits, JB), (0, wB.C)({
          Dg: BB => {
            rB(BB) && JB.textureSlot(BB)
          },
          loaded: BB => rB(BB) ? JB.textureLoaded(BB) : null,
          canvasUpdated: (BB, TB, dB) => {
            rB(BB) && JB.canvasUpdated(BB, TB, dB)
          }
        }), this.o2 = pB.o2, this.modelMeshes = pB.modelMeshes, TB.camera = this.camera
      }
      get castsEntitySunShadows() {
        var BB, TB;
        return null !== (BB = null === (TB = this.sunShadow) || void 0 === TB ? void 0 : TB.tracesEntities) && void 0 !== BB && BB
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(BB) {
        this.modelMeshes.attach(BB.model, BB.sceneMirror);
        const TB = BB.Gu;
        this.setClearColour(TB.clearColor.r, TB.clearColor.g, TB.clearColor.b), TB.draw = () => {
          this.drawFrame(BB, TB)
        }
      }
      render(BB) {
        try {
          this.pdB.Rm(), BB.Gu.render()
        } catch (TB) {
          throw this.refusals.frameFailed(TB), TB
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var BB, TB, dB, VB;
        const yB = [...this.particles.describePendingWork(), ...null !== (BB = null === (TB = this.sunShadow) || void 0 === TB ? void 0 : TB.describePendingWork()) && void 0 !== BB ? BB : []],
          pB = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (dB = this.terrain.sceneDepth) && void 0 !== dB && dB.compiling ? 1 : 0) + (null !== (VB = this.terrain.shadowMask) && void 0 !== VB && VB.compiling ? 1 : 0);
        pB > 0 && yB.push(`${pB} Lite pipelines compiling`);
        const lB = this.terrain.buffersAwaitingVerdict;
        lB > 0 && yB.push(`${lB} Lite terrain buffers awaiting their out-of-memory verdict`);
        const JB = this.resources.texturesLoading;
        return JB > 0 && yB.push(`${JB} Lite textures loading`), yB
      }
      prepareTexture(BB) {
        return null !== this.resources.boundTexture(BB) || this.resources.textureFailed(BB)
      }
      drawFrame(BB, TB) {
        var dB, VB, yB, pB, lB, JB;
        const YB = LJ(BB);
        this.camera.copyFromView(YB), this.setClearColour(YB.clearColour[0], YB.clearColour[1], YB.clearColour[2]), null === (dB = this.sunShadow) || void 0 === dB || dB.prepare(BB.OL, YB.eye, null !== (VB = BB.OL.pD) && void 0 !== VB ? VB : null), this.terrain.prepare(BB, YB), null === (yB = this.terrain.sceneDepth) || void 0 === yB || yB.setPlanes(YB.near, YB.far), null === (pB = this.terrain.shadowMask) || void 0 === pB || pB.prepare(YB), bl(this.sceneTask), this.meshes.prepare(TB, YB, BB.model.earthSky, null !== (lB = BB.OL.pD) && void 0 !== lB ? lB : null), this.particles.prepare(YB);
        const gB = performance.now();
        this.resources.flushUploads(), null === (JB = this.sunShadow) || void 0 === JB || JB.traceEntities(this.meshes);
        try {
          (0, ZB.k)(this.engine, this.lastFrameTime > 0 ? gB - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = gB
      }
      setClearColour(BB, TB, dB) {
        const VB = this.Gu.clearColor;
        VB.r = BB, VB.g = TB, VB.b = dB, VB.a = 1
      }
    }
    const UY = "WebGPU device lost while Lite was starting";

    function FY(BB, TB) {
      return "object" === typeof BB && null !== BB ? Object.assign(BB, {
        startStep: TB
      }) : BB
    }
    async function KY(BB, TB) {
      const dB = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!dB) throw FY(new Error("No WebGPU adapter"), "no_adapter");
      const VB = dB.info,
        yB = {
          vendor: (null === VB || void 0 === VB ? void 0 : VB.vendor) || "unknown vendor",
          renderer: (null === VB || void 0 === VB ? void 0 : VB.architecture) || "unknown renderer",
          version: (null === VB || void 0 === VB ? void 0 : VB.description) || "unknown version"
        },
        pB = function(BB) {
          const TB = {};
          for (const dB in BB.limits) {
            const VB = BB.limits[dB];
            "number" === typeof VB && (TB[dB] = VB)
          }
          return TB
        }(dB);
      let lB;
      BB.style.background = "black";
      try {
        lB = await (0, ZB.d)(BB, {
          msaaSamples: TB.adB ? 4 : 1,
          requiredLimits: pB,
          alphaMode: "premultiplied"
        })
      } catch (oB) {
        throw FY(oB, "#47" === (null === (JB = oB) || void 0 === JB ? void 0 : JB.message) ? "no_adapter" : "device")
      }
      var JB;
      const YB = function(BB) {
        return BB._device
      }(lB);
      let gB = null;
      YB.lost.then((BB => {
        gB = BB, console.error(`WebGPU device lost (${BB.reason}): ${BB.message}`)
      }));
      try {
        const dB = await async function(BB, TB, dB, VB, yB, pB) {
          const lB = (0, XB.d)(BB),
            JB = new xl(BB, TB),
            YB = new jJ(TB),
            gB = new Fl(TB, JB, (BB => function(BB, TB) {
              for (const VB of eB(BB)) {
                var dB;
                if (VB._targetSignature === TB) return null !== (dB = VB._sceneBG) && void 0 !== dB ? dB : null
              }
              return null
            }(lB, BB))),
            oB = new sY(TB, JB);
          for (const OB of function(BB, TB, dB) {
              return [TB.opaqueRenderable, BB.opaqueRenderable, BB.skyLastRenderable, dB.renderable, TB.transparentRenderable, BB.transparentRenderable, BB.frontRenderable]
            }(gB, YB, oB)) nB(lB, OB);
          const kB = function(BB) {
            for (const TB of eB(BB))
              if ("Gu" === TB.name) return TB;
            throw new Error("Lite: the scene has no render task named scene")
          }(lB);
          yB && YB.installSceneDepth(kB, BB);
          const LB = pB ? new OY(TB, pB.entities) : null;
          YB.sunShadow = LB, LB && null !== pB && void 0 !== pB && pB.entities && (YB.shadowMask = new wJ(TB, kB, BB, YB));
          return gB.sunShadow = LB, await (0, XB.e)(lB), new wY(BB, lB, kB, TB, YB, gB, oB, JB, dB, VB, LB)
        }(lB, YB, BB, yB, TB.sceneDepth, TB.sunShadow);
        if (null !== gB) {
          const {
            reason: BB,
            message: TB
          } = gB;
          throw Object.assign(new Error(`${UY} (${BB}): ${TB}`), {
            fallbackReason: UY
          })
        }
        return dB
      } catch (oB) {
        throw YB.destroy(), null === gB ? oB : FY(oB, "device")
      }
    }
  },
  39598: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => DB,
      b: () => yB,
      c: () => VB,
      e: () => LB,
      g: () => oB,
      i: () => HB,
      j: () => pB,
      m: () => JB,
      p: () => YB,
      s: () => lB,
      v: () => uB,
      y: () => OB
    });
    const VB = 3,
      yB = 0,
      pB = 1,
      lB = 2,
      JB = {
        uniform: 3,
        SL: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      YB = 10,
      gB = "BloxdPackInputs",
      oB = "bloxdPackInputs",
      kB = [{
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
      LB = 80;

    function OB() {
      const BB = kB.map((BB => {
        let {
          name: TB,
          type: dB
        } = BB;
        return `    ${TB}: ${dB},\n`
      })).join("");
      return `struct ${gB} {\n${BB}}\n@group(${VB}) @binding(${yB}) var<uniform> ${oB}: ${gB};\n`
    }

    function DB(BB, TB) {
      const dB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, LB),
        [VB, yB, pB, lB, JB, YB] = kB;
      dB.setFloat32(VB.offset, TB.seconds, !0), dB.setUint32(yB.offset, TB.lit ? 1 : 0, !0);
      for (let gB = 0; gB < 3; gB++) dB.setInt32(pB.offset + 4 * gB, TB.renderOffset[gB], !0), dB.setFloat32(lB.offset + 4 * gB, TB.tBB[gB], !0), dB.setFloat32(JB.offset + 4 * gB, TB.eyePosition[gB], !0), dB.setFloat32(YB.offset + 4 * gB, TB.shadowDirection[gB], !0)
    }

    function uB(BB) {
      const TB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, dB) => {
        let {
          id: VB,
          rotation: yB
        } = BB;
        TB[dB] = 65535 & VB | (3 & yB) << 16
      })), TB
    }
    const HB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);