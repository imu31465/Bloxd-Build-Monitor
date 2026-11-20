export const id = 261;
export const ids = [261];
export const modules = {
  41039: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => fk,
      h: () => bk,
      i: () => Xk,
      m: () => dk
    });
    var Rk = Bk(36911),
      tk = Bk(38344),
      ak = Bk(38339);

    function Xk(kk, Fk, Bk, Rk) {
      const tk = ak.l;
      Fk.fill(0), kk.gravity.toArray(Fk, tk.gravity), kk.colorDead.toArray(Fk, tk.colorDead), Bk[tk.ramp] = kk.useRampGradients ? 1 : 0;
      const Xk = kk.getColorGradients(),
        bk = Jk(kk, Xk, "colour", Rk);
      Bk[tk.colorCount] = bk;
      for (let ak = 0; ak < bk; ak++) {
        var wk;
        const kk = Xk[Ak(Xk, ak)];
        Fk[tk.colorPositions + ak] = kk.gradient, kk.color1.toArray(Fk, tk.color1 + 4 * ak), (null !== (wk = kk.color2) && void 0 !== wk ? wk : kk.color1).toArray(Fk, tk.color2 + 4 * ak)
      }
      const dk = kk.getVelocityGradients(),
        sk = Jk(kk, dk, "bs", Rk);
      Bk[tk.velocityCount] = sk;
      for (let ak = 0; ak < sk; ak++) Wk(Fk, tk.bs + 4 * ak, dk[Ak(dk, ak)]);
      const Vk = kk.useRampGradients ? kk.getColorRemapGradients() : null,
        ek = Jk(kk, Vk, "colour remap", Rk);
      Bk[tk.remapCount] = ek;
      for (let ak = 0; ak < ek; ak++) Wk(Fk, tk.remap + 4 * ak, Vk[Ak(Vk, ak)])
    }

    function bk() {
      return {
        key: [],
        texels: new Uint8Array(4 * ak.g)
      }
    }
    const wk = [];

    function dk(kk, Fk) {
      return sk(kk, wk), !mk(wk, Fk.key) && (Fk.key.length = 0, Fk.key.push(...wk), Fk.key.length > 0 && function(kk, Fk) {
        for (let Bk = 0; Bk < ak.g; Bk++) tk.i.GetCurrentGradient(Bk / ak.g, kk, ((kk, Fk, Bk) => {
          Rk.Color3.LerpToRef(kk.color, Fk.color, Bk, Vk)
        })), Fk[4 * Bk] = 255 * Vk.r, Fk[4 * Bk + 1] = 255 * Vk.g, Fk[4 * Bk + 2] = 255 * Vk.b, Fk[4 * Bk + 3] = 255
      }(kk.getRampGradients(), Fk.texels), !0)
    }

    function sk(kk, Fk) {
      Fk.length = 0;
      const Bk = kk.useRampGradients ? kk.getRampGradients() : null;
      if (null !== Bk && void 0 !== Bk && Bk.length) {
        Fk.push(Bk.length);
        for (const kk of Bk) Fk.push(kk.gradient, kk.color.r, kk.color.g, kk.color.b)
      }
    }
    const Vk = new Rk.Color3;

    function Jk(kk, Fk, Bk, Rk) {
      return Fk ? Fk.length > ak.b ? (Rk(`particleStops:${Bk}`, `GPU particles use the first 2 and last ${ak.b-2} of more than ${ak.b} ${Bk} gradient stops (${kk.name})`), ak.b) : Fk.length : 0
    }

    function Ak(kk, Fk) {
      return Fk < 2 || kk.length <= ak.b ? Fk : kk.length - ak.b + Fk
    }
    const ek = new Float32Array(ak.i),
      yk = new Uint32Array(ek.buffer);

    function fk(kk, Fk, Bk) {
      return Xk(kk, ek, yk, Bk), Fk && mk(yk, Fk) ? null : yk.slice()
    }

    function mk(kk, Fk) {
      if (kk.length !== Fk.length) return !1;
      for (let Bk = 0; Bk < kk.length; Bk++)
        if (kk[Bk] !== Fk[Bk]) return !1;
      return !0
    }

    function Wk(kk, Fk, Bk) {
      var Rk;
      kk[Fk] = Bk.gradient, kk[Fk + 1] = Bk.factor1, kk[Fk + 2] = null !== (Rk = Bk.factor2) && void 0 !== Rk ? Rk : Bk.factor1
    }
  },
  41033: (kk, Fk, Bk) => {
    function Rk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Fk = new Set;
      return (Bk, Rk) => {
        Fk.has(Bk) || (Fk.add(Bk), console.warn(kk + Rk))
      }
    }
    Bk.d(Fk, {
      b: () => Rk
    })
  },
  41071: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      createLiteRendererAsync: () => uw,
      liteBabylonBackend: () => Pk,
      setPipelineFailureHook: () => xt
    });
    var Rk = Bk(36911),
      tk = Bk(37274),
      ak = Bk(37570),
      Xk = Bk(36861),
      bk = Bk(37583);
    class wk extends bk.e {
      constructor() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        super(...Fk), this.color = new Rk.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Fk[0].XN().getUniqueId(),
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
          needAlphaBlendingForMesh: kk => kk.visibility < 1 || kk.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const dk = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      sk = kk => 1 << dk.indexOf(kk),
      Vk = sk("VERTEXCOLOR"),
      Jk = sk("INSTANCES"),
      Ak = sk("THIN_INSTANCES"),
      ek = sk("INSTANCESCOLOR"),
      yk = sk("FOG"),
      fk = sk("LITE_FRONT_LAYER");

    function mk(kk, Fk, Bk, Rk) {
      let tk = 0;
      return kk.isVerticesDataPresent("color") && (tk |= Vk), "none" !== Fk && (tk |= Jk), "thin" === Fk && (tk |= Ak, kk.isVerticesDataPresent("instanceColor") && (tk |= ek)), Rk.fogEnabled && kk.applyFog && 0 !== Rk.fogMode && (tk |= yk), Bk >= 1 && (tk |= fk), tk
    }

    function Wk(kk, Fk) {
      kk.updateColor4("color", Fk.color, Fk.alpha)
    }
    var vk = Bk(37533),
      ik = Bk(37061),
      Yk = Bk(36939),
      Lk = Bk(36836),
      Ok = Bk(37521),
      Ek = Bk(37526),
      Sk = Bk(36851),
      Nk = Bk(36855),
      Hk = Bk(36867);
    const uk = Lk.e.GLSL;
    class Mk {
      constructor(kk, Fk) {
        this.name = kk, this.ef = Fk, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.yN = {
          addOnce: kk => {
            this.disposers.push(kk)
          }
        }, this.uniqueId = Fk.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      XN() {
        return this.ef
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
      needAlphaBlendingForMesh(kk) {
        return (0, Sk.N)(this.model, kk.visibility, kk.hasVertexAlpha)
      }
      needAlphaTestingForMesh(kk) {
        return (0, Sk.P)(this.model, kk.visibility, kk.hasVertexAlpha)
      }
      dispose() {
        (0, ik.o)(this);
        for (const kk of this.disposers.splice(0)) kk()
      }
      get model() {
        return (0, Sk._)(this)
      }
    }
    const gk = new WeakSet;

    function Uk(kk) {
      return gk.has(kk)
    }

    function ck(kk) {
      gk.add(kk)
    }
    const Gk = {
      create: (kk, Fk) => ((0, Yk.r)(kk, new Mk(kk.name, Fk)), Nk.b.defines()),
      write: () => {},
      addFeature: (kk, Fk) => {
        const Bk = kk.mirror;
        Fk.feature === Ek.f && Fk.state.dirLightCount > 0 && (kk.disableLighting = !0, (0, Sk.X)(kk)), "BLOXD_LIGHTING" in Fk.defines && (0, ik.k)(Bk), Fk.feature === Ok.i && ((0, vk.g)(Fk.state, uk), function(kk, Fk) {
          const Bk = kk.XN().ne();
          Fk.textures.forEach(((Rk, tk) => {
            setTimeout((() => {
              var ak, Xk;
              const {
                url: bk
              } = Rk.source;
              Bk.atlasArray(bk, null !== (ak = null === (Xk = Fk.sources.pixels) || void 0 === Xk ? void 0 : Xk[tk]) && void 0 !== ak ? ak : null, Fk.sources.layerWidth).then((Bk => {
                (0, vk.b)(kk, Fk, tk, Bk, Bk.layerWidth, Bk.layers, uk)
              })).catch((kk => {
                console.error(`Failed to build texture array for atlas ${tk}`, kk)
              }))
            }))
          }))
        }(Bk, Fk.state))
      },
      texture: (kk, Fk, Bk) => {
        let {
          data: Rk,
          sets: tk
        } = Bk;
        var ak;
        (ck(kk), Rk) && (kk.uvSet = null !== (ak = null === tk || void 0 === tk ? void 0 : tk.coordinatesIndex) && void 0 !== ak ? ak : 0, (0, Yk.Z)(kk.matrix, null !== tk && void 0 !== tk ? tk : {}))
      },
      cube: ck,
      canvas: (kk, Fk, Bk) => {
        let {
          width: Rk,
          height: tk,
          mipmaps: ak,
          samplingMode: Xk = Hk.l.trilinear,
          hasAlpha: bk = !1,
          wrap: wk = Hk.e.clamp
        } = Bk;
        const dk = kk.ne().createCanvas(Rk, tk),
          sk = new Hk.o("2d", {
            kind: "canvas",
            width: Rk,
            height: tk,
            canvas: dk
          }, {
            samplingMode: Xk,
            wrapU: wk,
            wrapV: wk,
            noMipmap: !ak,
            invertY: !0
          });
        return sk.hasAlpha = bk, ck(sk), sk
      }
    };
    var Tk = Bk(37085),
      rk = Bk(36781);
    class Dk {
      constructor(kk, Fk, Bk) {
        this.engine = kk, this.clearColor = Fk, this.ambientColor = Bk, this.onBeforeRenderObservable = new rk.e, this.onBeforeCameraRenderObservable = new rk.e, this.onAfterRenderObservable = new rk.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.fY = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      ne() {
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
      addPendingData(kk) {
        this.pending.push(kk)
      }
      removePendingData(kk) {
        const Fk = this.pending.indexOf(kk); - 1 !== Fk && this.pending.splice(Fk, 1)
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

    function zk() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const Pk = {
      ORk: zk,
      oRk: (kk, Fk) => {
        const Bk = new Dk(kk.engine, Rk.c.FromArray(Fk.clearColor), Rk.Color3.FromArray(Fk.ambientColor));
        (0, Xk.b)(Gk, Bk), kk.ef = Bk,
          function(kk, Fk) {
            const Bk = Object.assign((0, Tk.e)(kk, "camera"), {
              layerMask: 268435455
            });
            kk.model.nodes.setWorldSource(Bk.row, kk.model.view.worldMatrix), kk.camera = Fk.activeCamera = Bk
          }(kk, Bk), (0, tk.g)(kk, ((kk, Fk, Bk) => (0, ak.h)(kk, Fk, Bk, bk.e)))
      },
      WRk: () => {},
      setBabylonFog: () => {},
      ERk: zk,
      HRk: () => {},
      linesFromArrays: (kk, Fk, Bk) => (0, ak.h)(kk, Fk, Bk, wk),
      yf: () => {},
      NRk: zk
    };
    var hk = Bk(41127),
      qk = Bk(41138);
    class Ck {
      constructor(kk) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const Fk = new Promise((kk => {
          this.refused = kk
        }));
        this.deviceLost = Promise.race([kk, Fk])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(kk) {
        (function(kk) {
          const {
            name: Fk,
            message: Bk
          } = null !== kk && void 0 !== kk ? kk : {};
          return "InvalidStateError" === Fk && "string" === typeof Bk && Bk.startsWith("GPUDevice.")
        })(kk) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: kk.message,
          framesRefused: !0
        }))
      }
    }
    class Zk {
      constructor(kk) {
        this.resources = kk, this.matrixKey = {
          KV: 0
        }, this.attributesKey = {
          KV: 0
        }, this.inputs = Object.create(null);
        for (let Fk = 0; Fk < 4; Fk++) this.inputs[`world${Fk}`] = new xk(this.matrixKey, 16 * Fk, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(kk, Fk) {
        this.resources.vertexBufferCreated(this.matrixKey, kk, !0), Fk && this.resources.vertexBufferCreated(this.attributesKey, Fk, !0)
      }
    }
    class pk extends Zk {
      constructor(kk, Fk, Bk) {
        super(kk), this.mesh = Fk, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Rk = this.inputs;
        let tk = 0;
        for (const {
            size: Xk
          }
          of Bk) tk += Xk;
        for (const {
            name: Xk,
            offset: bk,
            size: wk,
            type: dk
          }
          of Bk) Rk[Xk] = new xk(this.attributesKey, 4 * bk, 4 * tk, wk, !0, dk);
        this.rowStride = tk, kk.K3.set(Fk, this);
        const ak = Fk.isVerticesDataPresent;
        Fk.isVerticesDataPresent = (kk, Bk) => kk in Rk || ak.call(Fk, kk, Bk)
      }
      attach(kk, Fk) {
        this.matrices = kk, this.attributes = Fk, this.bind(kk, Fk), this.mirror(kk, kk.length, kk.length / 16)
      }
      U_(kk) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, kk ? 64 * kk : void 0)
      }
      T_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(kk, Fk) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * kk, 16 * Fk)
      }
      attributeRows(kk, Fk) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, kk * this.rowStride, Fk * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(kk, Fk, Bk) {
        const Rk = this.mesh._thinInstanceDataStorage;
        Rk.matrixData = kk, Rk.matrixBufferSize = Fk, Rk.worldMatrices = null, Rk.instancesCount = Bk
      }
    }
    class Kk extends Zk {
      constructor(kk, Fk, Bk) {
        var Rk, tk, ak, Xk;
        super(kk), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Rk = null === Bk || void 0 === Bk ? void 0 : Bk.interleavedKinds) && void 0 !== Rk ? Rk : null, this.offsets = null !== (tk = null === Bk || void 0 === Bk ? void 0 : Bk.interleavedOffsets) && void 0 !== tk ? tk : [], this.rowStride = null !== (ak = null === Bk || void 0 === Bk ? void 0 : Bk.interleavedRowStride) && void 0 !== ak ? ak : 0, null === (Xk = this.layout) || void 0 === Xk || Xk.forEach(((kk, Fk) => {
          this.inputs[kk] = new xk(this.attributesKey, 4 * this.offsets[Fk], 4 * this.rowStride, Bk.strides[kk])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), kk.batchUploads.set(Fk, this), Fk.yN.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(kk) {
        const Fk = this.packedBatch;
        return Fk.renderSelf ? 0 === kk ? this.packedSource : Fk.instances[kk - 1] : Fk.instances[kk]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(kk, Fk, Bk, Rk) {
        const tk = (Fk.renderSelf ? 1 : 0) + Fk.rows.length;
        if (this.frame = Rk, this.count = tk, this.packedSource = kk, this.packedBatch = Fk, 0 === tk) return;
        if (kk.getWorldMatrix(), 16 * tk > this.matrices.length) {
          let kk = this.matrices.length / 16;
          for (; kk < tk;) kk *= 2;
          this.matrices = new Float32Array(16 * kk), this.attributes &&= new Float32Array(kk * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let ak = 0;
        Fk.renderSelf && this.packRow(ak++, kk, Fk.row, Bk);
        for (let Xk = 0; Xk < Fk.rows.length; Xk++) this.packRow(ak++, Fk.instances[Xk], Fk.rows[Xk], Bk);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * tk), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, tk * this.rowStride)
      }
      packRow(kk, Fk, Bk, Rk) {
        const tk = this.matrices;
        if (Bk < 0) tk.set(Fk.getWorldMatrix().m, 16 * kk);
        else
          for (let dk = 0; dk < 16; dk++) tk[16 * kk + dk] = Rk[16 * Bk + dk];
        const ak = this.attributes;
        if (!ak) return;
        const Xk = Fk.gH,
          bk = this.layout;
        for (let dk = 0; dk < bk.length; dk++) {
          var wk;
          const Fk = null !== (wk = Xk[bk[dk]]) && void 0 !== wk ? wk : 0,
            Bk = kk * this.rowStride + this.offsets[dk];
          Fk.toArray ? Fk.toArray(ak, Bk) : Fk.copyToArray ? Fk.copyToArray(ak, Bk) : ak[Bk] = Fk
        }
      }
    }
    class xk {
      constructor(kk, Fk, Bk, Rk) {
        let tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = kk, this.byteOffset = Fk, this.byteStride = Bk, this.size = Rk, this.instanced = tk, this.type = ak, this.normalized = Xk
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
    const jk = "CANVAS_ALPHA_ONE",
      lk = `override ${jk}: bool = false;`,
      nk = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Ik(kk, Fk, Bk) {
      var Rk;
      let tk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ak = null !== (Rk = Fk._colorFormat) && void 0 !== Rk ? Rk : "bgra8unorm",
        Xk = tk ? 15 : 0;
      return Bk ? {
        ...kk,
        targets: [{
          format: ak,
          blend: {
            color: Bk,
            alpha: nk
          },
          writeMask: Xk
        }]
      } : {
        ...kk,
        constants: {
          ...kk.constants,
          [jk]: 1
        },
        targets: [{
          format: ak,
          writeMask: Xk
        }]
      }
    }

    function Qk(kk, Fk) {
      kk._renderables.push(Fk)
    }

    function kF(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = kk._frameGraph) || void 0 === Bk ? void 0 : Bk._tasks) && void 0 !== Fk ? Fk : []
    }

    function FF(kk) {
      return kk._currentEncoder
    }

    function BF(kk) {
      return kk.createBindGroupLayout({
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
    const RF = "greater-equal",
      tF = 2e5,
      aF = 1e5,
      XF = new WeakMap;

    function bF(kk, Fk) {
      let Bk = XF.get(kk);
      if (!Bk) {
        Bk = {
          module: kk.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, XF.set(kk, Bk)
      }
      const Rk = `${Fk._colorFormat}|${Fk._depthStencilFormat}|${Fk._sampleCount}`;
      let tk = Bk.pipelines.get(Rk);
      if (!tk) {
        var ak;
        const {
          module: Xk
        } = Bk;
        tk = kk.createRenderPipeline({
          label: `placeholder ${Rk}`,
          layout: kk.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Xk,
            entryPoint: "v"
          },
          fragment: {
            module: Xk,
            entryPoint: "f",
            targets: [{
              format: null !== (ak = Fk._colorFormat) && void 0 !== ak ? ak : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Fk._depthStencilFormat ? {
            format: Fk._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Fk._sampleCount
          }
        }), Bk.pipelines.set(Rk, tk)
      }
      return tk
    }

    function wF(kk, Fk, Bk) {
      const Rk = Fk.eye,
        tk = Fk.viewMatrix;
      kk[0] = Rk[0] + tk[2] * Bk, kk[1] = Rk[1] + tk[6] * Bk, kk[2] = Rk[2] + tk[10] * Bk
    }
    var dF = Bk(37640),
      sF = Bk(41033),
      VF = Bk(36842);
    const JF = Math.PI,
      AF = JF / 1.95,
      eF = [5e-4 / 94, 125e-7, 5e-4 / 18],
      yF = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((kk => {
        let [Fk, Bk] = kk;
        return .434 * JF * Math.pow(2 * JF / Fk, 2) * Bk
      }));

    function fF(kk, Fk, Bk) {
      const {
        up: Rk,
        mieDirectionalG: tk
      } = kk, ak = 1 - vF(1 - Math.exp(Fk[1] / 45e4), 0, 1), Xk = kk.rayleigh - (1 - ak), bk = Math.hypot(Fk[0], Fk[1], Fk[2]), wk = bk > 0 ? 1 / bk : 0, dk = Bk.sunDir;
      for (let Ak = 0; Ak < 3; Ak++) dk[Ak] = Fk[Ak] * wk;
      const sk = dk[0] * Rk[0] + dk[1] * Rk[1] + dk[2] * Rk[2],
        Vk = 1e3 * Math.max(0, 1 - Math.exp(-(AF - Math.acos(vF(sk, -1, 1))) / 1.5));
      Bk.sunE = Vk;
      const Jk = .2 * kk.turbidity * 1e-17 * kk.mieCoefficient;
      for (let Ak = 0; Ak < 3; Ak++) {
        const kk = eF[Ak] * Xk,
          Fk = yF[Ak] * Jk,
          Rk = Vk / (kk + Fk);
        Bk.inScatterR[Ak] = kk * Rk, Bk.inScatterM[Ak] = Fk * Rk, Bk.extinctionBeta[Ak] = 8400 * kk + 1250 * Fk
      }
      return Bk.sunsetMix = vF(Math.pow(1 - sk, 5), 0, 1), Bk.sunDiscE = 19e3 * Vk, Bk.mieScale = (1 - tk * tk) / (4 * JF), Bk.mieBase = 1 + tk * tk, Bk.mieSlope = 2 * tk, Bk
    }
    const mF = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const WF = 1 / function(kk) {
      const {
        A: Fk,
        B: Bk,
        C: Rk,
        D: tk,
        E: ak,
        F: Xk
      } = mF;
      return (kk * (Fk * kk + Rk * Bk) + tk * ak) / (kk * (Fk * kk + Bk) + tk * Xk) - ak / Xk
    }(1e3);

    function vF(kk, Fk, Bk) {
      return Math.min(Math.max(kk, Fk), Bk)
    }
    const iF = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function YF(kk, Fk) {
      const Bk = new Map(Fk),
        Rk = [],
        tk = [],
        ak = () => 0 === tk.length || tk[tk.length - 1].active;
      let Xk = null;
      const bk = () => {
        const kk = [...Bk].filter((kk => {
            let [, Fk] = kk;
            return !0 !== Fk
          })),
          Fk = kk.map((kk => {
            let [Fk] = kk;
            return Fk
          })).join("|");
        Xk = kk.length ? new RegExp(`\\b(${Fk})\\b`, "g") : null
      };
      bk();
      for (const wk of kk.split("\n")) {
        const kk = iF.exec(wk);
        if (!kk) {
          ak() && Rk.push(Xk ? oF(wk, Xk, Bk) : wk);
          continue
        }
        const Fk = kk[1],
          dk = kk[2].trim();
        if ("ifdef" === Fk || "ifndef" === Fk || "if" === Fk) {
          const kk = ak(),
            Rk = "if" === Fk ? LF(dk, Bk) : Bk.has(dk) === ("ifdef" === Fk);
          tk.push({
            active: kk && Rk,
            parentActive: kk,
            taken: Rk
          })
        } else if ("elif" === Fk || "else" === Fk) {
          const kk = tk[tk.length - 1];
          if (!kk) throw new Error(`#${Fk} without #if`);
          const Rk = !kk.taken && ("else" === Fk || LF(dk, Bk));
          kk.active = kk.parentActive && Rk, kk.taken = kk.taken || Rk
        } else if ("endif" === Fk) {
          if (!tk.pop()) throw new Error("#endif without #if")
        } else if (ak()) {
          const [kk, ...Rk] = dk.split(/\s+/);
          "undef" === Fk ? Bk.delete(kk) : Bk.set(kk, !Rk.length || Rk.join(" ")), bk()
        }
      }
      if (tk.length) throw new Error("Unterminated #if");
      return Rk.join("\n")
    }

    function oF(kk, Fk, Bk) {
      return kk.replace(Fk, (kk => {
        const Fk = Bk.get(kk);
        return "string" === typeof Fk ? Fk : kk
      }))
    }

    function LF(kk, Fk) {
      var Bk;
      const Rk = null !== (Bk = kk.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== Bk ? Bk : [];
      let tk = 0;
      const ak = () => Rk[tk],
        Xk = () => Rk[tk++],
        bk = kk => {
          const Bk = /^\d/.test(kk) ? kk : Fk.get(kk);
          return "string" === typeof Bk ? parseInt(Bk) : Number.NaN
        },
        wk = () => {
          const kk = Xk();
          if ("!" === kk) return !wk();
          if ("(" === kk) {
            const kk = sk();
            return Xk(), kk
          }
          if ("defined" === kk) {
            const kk = "(" === ak();
            kk && Xk();
            const Bk = Xk();
            return kk && Xk(), Fk.has(Bk)
          }
          const Bk = ak();
          if ("==" === Bk || "!=" === Bk || ">" === Bk || "<" === Bk || ">=" === Bk || "<=" === Bk) {
            Xk();
            const Fk = bk(kk),
              Rk = bk(Xk());
            if (Number.isNaN(Fk) || Number.isNaN(Rk)) return !1;
            switch (Bk) {
              case "==":
                return Fk === Rk;
              case "!=":
                return Fk !== Rk;
              case ">":
                return Fk > Rk;
              case "<":
                return Fk < Rk;
              case ">=":
                return Fk >= Rk;
              default:
                return Fk <= Rk
            }
          }
          return Fk.has(kk)
        },
        dk = () => {
          let kk = wk();
          for (;
            "&&" === ak();) {
            Xk();
            const Fk = wk();
            kk = kk && Fk
          }
          return kk
        },
        sk = () => {
          let kk = dk();
          for (;
            "||" === ak();) {
            Xk();
            const Fk = dk();
            kk = kk || Fk
          }
          return kk
        },
        Vk = sk();
      if (tk !== Rk.length) throw new Error(`Cannot evaluate #if ${kk}`);
      return Vk
    }
    var OF = Bk(36838),
      EF = Bk(37175),
      SF = Bk(37180),
      NF = Bk(40292),
      HF = Bk(38386);
    const uF = 32,
      MF = [10, 3, 10],
      gF = [21, 7, 21],
      UF = gF[0] * gF[1] * gF[2],
      cF = 0,
      GF = 1,
      TF = 2,
      rF = 3,
      DF = 64,
      zF = 512,
      PF = 4 * UF,
      hF = 1536,
      qF = PF + UF * hF,
      CF = 1073741824,
      ZF = qF + 1;

    function pF(kk, Fk) {
      const Bk = kk % Fk;
      return Bk < 0 ? Bk + Fk : Bk
    }

    function KF(kk, Fk, Bk) {
      return Rk = pF(kk, gF[0]), tk = pF(Fk, gF[1]), ak = pF(Bk, gF[2]), Rk + gF[0] * (tk + gF[1] * ak);
      var Rk, tk, ak
    }

    function xF(kk, Fk, Bk) {
      return kk + 8 * (Fk + 8 * Bk)
    }

    function jF(kk, Fk, Bk) {
      return kk + 4 * (Fk + 4 * Bk)
    }
    const lF = 65535,
      nF = 0,
      IF = 1,
      QF = 2,
      kB = 3;

    function FB(kk) {
      return Math.ceil(kk * kk / 32)
    }
    const BB = 8192,
      RB = 1 << 18,
      tB = 65536,
      aB = 294912,
      XB = 128,
      bB = 4096,
      wB = 16,
      dB = 16385,
      sB = 81921,
      VB = 147457,
      JB = 4194304;
    const AB = [0, 0, 0],
      eB = [0, 0, 0];

    function yB(kk, Fk, Bk, Rk) {
      ! function(kk, Fk, Bk) {
        const [Rk, tk, ak] = [kk[0], kk[1], kk[2]];
        let Xk, bk, wk;
        Math.abs(tk) < .99 ? (Xk = ak, bk = 0, wk = -Rk) : (Xk = -tk, bk = Rk, wk = 0);
        const dk = Math.hypot(Xk, bk, wk);
        Fk[0] = Xk / dk, Fk[1] = bk / dk, Fk[2] = wk / dk, Bk[0] = tk * Fk[2] - ak * Fk[1], Bk[1] = ak * Fk[0] - Rk * Fk[2], Bk[2] = Rk * Fk[1] - tk * Fk[0]
      }(Rk, AB, eB);
      const tk = 1 / 32;
      for (const [ak, Xk] of [
          [0, AB],
          [4, eB]
        ]) {
        for (let Bk = 0; Bk < 3; Bk++) kk[Fk + ak + Bk] = Xk[Bk] * tk;
        kk[Fk + ak + 3] = -(Xk[0] * Bk[0] + Xk[1] * Bk[1] + Xk[2] * Bk[2]) * tk
      }
    }
    class fB {
      constructor() {
        this.words = new Uint32Array(VB), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      UA(kk, Fk) {
        this.parts = 0, this.refs = 0, this.view = kk, this.viewAt = Fk;
        const Bk = kk[Fk + 1] * kk[Fk + 6] - kk[Fk + 2] * kk[Fk + 5],
          Rk = kk[Fk + 2] * kk[Fk + 4] - kk[Fk] * kk[Fk + 6],
          tk = kk[Fk] * kk[Fk + 5] - kk[Fk + 1] * kk[Fk + 4],
          ak = Math.hypot(Bk, Rk, tk) || 1;
        this.light[0] = Bk / ak, this.light[1] = Rk / ak, this.light[2] = tk / ak
      }
      add(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= bB || ! function(kk, Fk, Bk) {
            const Rk = kk[Fk],
              tk = kk[Fk + 1],
              ak = kk[Fk + 2],
              Xk = kk[Fk + 3],
              bk = kk[Fk + 4],
              wk = kk[Fk + 5],
              dk = kk[Fk + 6],
              sk = kk[Fk + 7],
              Vk = kk[Fk + 8],
              Jk = kk[Fk + 9],
              Ak = kk[Fk + 10],
              ek = kk[Fk + 11],
              yk = kk[Fk + 12],
              fk = kk[Fk + 13],
              mk = kk[Fk + 14],
              Wk = kk[Fk + 15],
              vk = Rk * wk - tk * bk,
              ik = Rk * dk - ak * bk,
              Yk = Rk * sk - Xk * bk,
              Lk = tk * dk - ak * wk,
              Ok = tk * sk - Xk * wk,
              Ek = ak * sk - Xk * dk,
              Sk = Vk * fk - Jk * yk,
              Nk = Vk * mk - Ak * yk,
              Hk = Vk * Wk - ek * yk,
              uk = Jk * mk - Ak * fk,
              Mk = Jk * Wk - ek * fk,
              gk = Ak * Wk - ek * mk,
              Uk = vk * gk - ik * Mk + Yk * uk + Lk * Hk - Ok * Nk + Ek * Sk;
            if (!(Math.abs(Uk) > 1e-12)) return !1;
            const ck = 1 / Uk;
            return Bk[0] = (wk * gk - dk * Mk + sk * uk) * ck, Bk[1] = (ak * Mk - tk * gk - Xk * uk) * ck, Bk[2] = (fk * Ek - mk * Ok + Wk * Lk) * ck, Bk[3] = (Ak * Ok - Jk * Ek - ek * Lk) * ck, Bk[4] = (dk * Hk - bk * gk - sk * Nk) * ck, Bk[5] = (Rk * gk - ak * Hk + Xk * Nk) * ck, Bk[6] = (mk * Yk - yk * Ek - Wk * ik) * ck, Bk[7] = (Vk * Ek - Ak * Yk + ek * ik) * ck, Bk[8] = (bk * Mk - wk * Hk + sk * Sk) * ck, Bk[9] = (tk * Hk - Rk * Mk - Xk * Sk) * ck, Bk[10] = (yk * Ok - fk * Yk + Wk * vk) * ck, Bk[11] = (Jk * Yk - Vk * Ok - ek * vk) * ck, Bk[12] = (wk * Nk - bk * uk - dk * Sk) * ck, Bk[13] = (Rk * uk - tk * Nk + ak * Sk) * ck, Bk[14] = (fk * ik - yk * Lk - mk * vk) * ck, Bk[15] = (Vk * Lk - Jk * ik + Ak * vk) * ck, !0
          }(Fk, Bk, this.inverse)) return;
        const {
          view: Rk,
          viewAt: tk
        } = this, ak = Bk;
        let Xk = 1 / 0,
          bk = 1 / 0,
          wk = -1 / 0,
          dk = -1 / 0,
          sk = -1 / 0;
        const [Vk, Jk, Ak] = this.light;
        for (let Yk = 0; Yk < 8; Yk++) {
          const Bk = 1 & Yk ? kk.hi[0] : kk.lo[0],
            ek = 2 & Yk ? kk.hi[1] : kk.lo[1],
            yk = 4 & Yk ? kk.hi[2] : kk.lo[2],
            fk = Bk * Fk[ak] + ek * Fk[ak + 4] + yk * Fk[ak + 8] + Fk[ak + 12],
            mk = Bk * Fk[ak + 1] + ek * Fk[ak + 5] + yk * Fk[ak + 9] + Fk[ak + 13],
            Wk = Bk * Fk[ak + 2] + ek * Fk[ak + 6] + yk * Fk[ak + 10] + Fk[ak + 14],
            vk = Rk[tk] * fk + Rk[tk + 1] * mk + Rk[tk + 2] * Wk + Rk[tk + 3],
            ik = Rk[tk + 4] * fk + Rk[tk + 5] * mk + Rk[tk + 6] * Wk + Rk[tk + 7];
          Xk = Math.min(Xk, vk), bk = Math.min(bk, ik), wk = Math.max(wk, vk), dk = Math.max(dk, ik), sk = Math.max(sk, Vk * fk + Jk * mk + Ak * Wk)
        }
        if (wk < -1 || dk < -1 || Xk >= 1 || bk >= 1) return;
        const ek = this.parts++,
          yk = this.rects;
        yk[4 * ek] = mB(Xk), yk[4 * ek + 1] = mB(bk), yk[4 * ek + 2] = mB(wk), yk[4 * ek + 3] = mB(dk);
        const fk = this.inverse,
          {
            cell: mk,
            dims: Wk,
            lo: vk
          } = kk,
          ik = sB + ek * wB;
        for (let Yk = 0; Yk < 3; Yk++) this.floats[ik + 4 * Yk] = fk[Yk] / mk, this.floats[ik + 4 * Yk + 1] = fk[4 + Yk] / mk, this.floats[ik + 4 * Yk + 2] = fk[8 + Yk] / mk, this.floats[ik + 4 * Yk + 3] = (fk[12 + Yk] - vk[Yk]) / mk;
        this.words[ik + 12] = kk.at, this.floats[ik + 13] = sk + .001 * (1 + Math.abs(sk)), this.words[ik + 14] = Wk[0] | Wk[1] << 8 | Wk[2] << 16
      }
      finish() {
        const kk = XB,
          {
            counts: Fk,
            rects: Bk,
            words: Rk
          } = this;
        Fk.fill(0);
        let tk = 0,
          ak = 0;
        for (; ak < this.parts; ak++) {
          const Rk = 4 * ak,
            Xk = (Bk[Rk + 2] - Bk[Rk] + 1) * (Bk[Rk + 3] - Bk[Rk + 1] + 1);
          if (tk + Xk > 65536) break;
          tk += Xk;
          for (let tk = Bk[Rk + 1]; tk <= Bk[Rk + 3]; tk++)
            for (let ak = Bk[Rk]; ak <= Bk[Rk + 2]; ak++) Fk[tk * kk + ak]++
        }
        let Xk = 0;
        for (let wk = 0; wk < 16384; wk++) Rk[wk] = Xk, Xk += Fk[wk], Fk[wk] = Rk[wk];
        Rk[16384] = Xk;
        for (let wk = 0; wk < ak; wk++) {
          const tk = 4 * wk;
          for (let ak = Bk[tk + 1]; ak <= Bk[tk + 3]; ak++)
            for (let Xk = Bk[tk]; Xk <= Bk[tk + 2]; Xk++) Rk[dB + Fk[ak * kk + Xk]++] = wk
        }
        const bk = this.floats;
        for (let wk = 0; wk < 16384; wk++) {
          const kk = dB + Rk[wk],
            Fk = kk + Math.min(Rk[wk + 1] - Rk[wk], 64);
          for (let Bk = kk + 1; Bk < Fk; Bk++) {
            const Fk = Rk[Bk],
              tk = bk[81934 + Fk * wB];
            let ak = Bk - 1;
            for (; ak >= kk && bk[81934 + Rk[ak] * wB] < tk; ak--) Rk[ak + 1] = Rk[ak];
            Rk[ak + 1] = Fk
          }
        }
        this.refs = tk
      }
    }

    function mB(kk) {
      return Math.min(127, Math.max(0, Math.floor((.5 * kk + .5) * XB)))
    }

    function WB(kk, Fk, Bk, Rk, tk) {
      for (let ak = 0; ak < 4; ak++)
        for (let Xk = 0; Xk < 4; Xk++) tk[4 * ak + Xk] = kk[Fk + 4 * ak] * Bk[Rk + Xk] + kk[Fk + 4 * ak + 1] * Bk[Rk + 4 + Xk] + kk[Fk + 4 * ak + 2] * Bk[Rk + 8 + Xk] + kk[Fk + 4 * ak + 3] * Bk[Rk + 12 + Xk]
    }

    function vB(kk, Fk, Bk, Rk, tk) {
      const ak = kk[0] - Fk,
        Xk = kk[1] - Bk,
        bk = kk[2] - Rk,
        wk = kk[3] - Fk,
        dk = kk[4] - Bk,
        sk = kk[5] - Rk,
        Vk = kk[6] - Fk,
        Jk = kk[7] - Bk,
        Ak = kk[8] - Rk;
      if (Math.min(ak, wk, Vk) > tk || Math.max(ak, wk, Vk) < -tk) return !1;
      if (Math.min(Xk, dk, Jk) > tk || Math.max(Xk, dk, Jk) < -tk) return !1;
      if (Math.min(bk, sk, Ak) > tk || Math.max(bk, sk, Ak) < -tk) return !1;
      const ek = wk - ak,
        yk = dk - Xk,
        fk = sk - bk,
        mk = Vk - wk,
        Wk = Jk - dk,
        vk = Ak - sk,
        ik = yk * vk - fk * Wk,
        Yk = fk * mk - ek * vk,
        Lk = ek * Wk - yk * mk;
      if (Math.abs(ik * ak + Yk * Xk + Lk * bk) > tk * (Math.abs(ik) + Math.abs(Yk) + Math.abs(Lk))) return !1;
      const Ok = [ek, yk, fk, mk, Wk, vk, ak - Vk, Xk - Jk, bk - Ak];
      for (let Ek = 0; Ek < 3; Ek++) {
        const kk = Ok[3 * Ek],
          Fk = Ok[3 * Ek + 1],
          Bk = Ok[3 * Ek + 2];
        for (let Rk = 0; Rk < 3; Rk++) {
          const ek = 0 === Rk ? 0 : 1 === Rk ? Bk : -Fk,
            yk = 0 === Rk ? -Bk : 1 === Rk ? 0 : kk,
            fk = 0 === Rk ? Fk : 1 === Rk ? -kk : 0,
            mk = ek * ak + yk * Xk + fk * bk,
            Wk = ek * wk + yk * dk + fk * sk,
            vk = ek * Vk + yk * Jk + fk * Ak,
            ik = tk * (Math.abs(ek) + Math.abs(yk) + Math.abs(fk));
          if (Math.min(mk, Wk, vk) > ik || Math.max(mk, Wk, vk) < -ik) return !1
        }
      }
      return !0
    }
    const iB = new Float32Array(1);
    new Uint32Array(iB.buffer);
    var YB = Bk(38395);

    function oB(kk) {
      const [Fk, Bk, Rk] = YB.u;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${kk.group}) @binding(${kk.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Fk-1}, ${Bk-1}, ${Rk-1});\n}\n`
    }

    function LB(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [tk, ak, Xk] = gF, [bk, wk, dk] = MF, sk = Math.log2(uF), Vk = Rk ? "var<private> bloxdSpCrossed: bool;\n" : "", Jk = Rk ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${kk.group}) @binding(${kk.jJ}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${kk.group}) @binding(${kk.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${Bk?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Vk}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${IF}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${QF}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${Bk?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${kB}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${tk}, ${ak}, ${Xk});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${tk} * (s.y + ${ak} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${bk}, ${wk}, ${dk}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${sk}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${rF}u) {\n\t\treturn named && state == ${TF}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${PF}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${qF}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Fk?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Fk?`\t\tif (exits && step > 0 && step % ${SB} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${sk}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${cF}u || kind == ${GF}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${TF}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${PF}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Jk}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const OB = {
      group: 0,
      uniform: 0,
      jJ: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function EB() {
      const kk = OB;
      return `${oB(kk)}${LB(kk,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${YB.d}>,\n}\n@group(${kk.group}) @binding(${kk.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${kk.group}) @binding(${kk.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${YB.n})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${YB.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${YB.h}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const SB = 2;
    const NB = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function HB(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Rk = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Fk.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        tk = "trace" === Bk || "lit" === Bk,
        ak = "maskEdge" === Bk ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Xk = tk ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Fk.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Fk.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===Bk?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${ak};\n`;
      return `${Rk}${kk.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${tk?function(){const[kk,Fk,Bk]=YB.u;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${kk}.0, ${Fk}.0, ${Bk}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Xk}}\n`:""}${kk.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Fk.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Fk.renderOffset});\n}\n`:""}`
    }
    const uB = "bloxdSpOwnTexture";

    function MB(kk) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${kk.texture}) - 1u)))`
    }
    const gB = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${dF.d.map((kk=>{let[Fk,Bk]=kk;return`\tbloxdSpOut.${Fk} = (bloxdSpWord & ${Bk}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function UB(kk) {
      return `bloxdSpFlags(${kk})`
    }
    const cB = `${NF.j}.eyePosition`;

    function GB(kk, Fk, Bk, Rk, tk) {
      const ak = kk.indexOf(Fk);
      if (ak < 0 || kk.indexOf(Fk, ak + 1) >= 0) throw new Error(`Lite's ${tk} program changed at the shader pack ${Rk} hook: ${ak<0?"no":"more than one"} anchor (lite/${tk}ShaderPack.ts)`);
      return kk.slice(0, ak) + Bk + kk.slice(ak + Fk.length)
    }

    function TB(kk) {
      return kk.sunShadow || kk.airShadow
    }

    function rB(kk, Fk) {
      return Fk && TB(kk)
    }
    const DB = {
      group: NF.g,
      ...NF.r
    };

    function zB(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!TB(kk)) return "";
      if (Fk) {
        const Fk = DB,
          tk = "trace" === Bk || "lit" === Bk;
        let ak = "";
        kk.sunShadow && (ak = tk ? `${LB(Fk,!0,"lit"===Bk)}${Rk=Fk,`@group(${Rk.group}) @binding(${Rk.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Rk.group}) @binding(${Rk.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(kk, Fk, Bk) {
          const Rk = `@group(${kk}) @binding(${Fk}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return Bk ? `${Rk}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${NB}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((kk=>`\t{\n\t\tlet o = vec2i(${kk});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Rk
        }(Fk.group, NF.s, "maskEdge" === Bk));
        const Xk = {
          shadowDirection: `${NF.j}.shadowDirection`,
          renderOffset: `${NF.j}.renderOffset`,
          eyePosition: `${NF.j}.eyePosition`
        };
        return `${oB(Fk)}${ak}${function(kk){const[Fk,Bk,Rk]=YB.u;return`@group(${kk.group}) @binding(${kk.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${kk.group}) @binding(${kk.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Fk}.0, ${Bk}.0, ${Rk}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Fk)}${HB(kk,Xk,Bk)}`
      }
      var Rk;
      return `${kk.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${kk.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function PB(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Fk) return "";
      const ak = (Xk = "fragmentInputs.vPositionW", bk = kk.sunShadow ? {
        normal: Bk,
        flags: Rk
      } : null, `\n\tbloxdSpShadowPosition = ${Xk};\n${bk?`\tbloxdSpShadowNormal = normalize(${bk.normal});\n\tbloxdSpShadowEmissive = (${bk.flags} & ${dF.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${bk.flags} & ${dF.g}u) != 0u;\n`:""}`);
      var Xk, bk;
      return kk.sunShadow && ("mask" === tk || "maskEdge" === tk) ? `${ak}${wk="fragmentInputs.position",dk="maskEdge"===tk,`\n\tbloxdSpShadowPixel = vec2i(${wk}.xy);\n${dk?`\tbloxdSpShadowZ = ${wk}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${wk}.z), dpdy(${wk}.z));\n`:""}`}` : ak;
      var wk, dk
    }
    const hB = "bloxdSpTextureRotation",
      qB = "bloxdSpTextureLayers",
      CB = `@group(${NF.g}) @binding(${NF.u}) var<storage, read> ${qB}: array<u32>;\n`;

    function ZB(kk) {
      return `\tvertexOutputs.vPackTexture = ${qB}[min(u32(${kk}), arrayLength(&${qB}) - 1u)];\n`
    }

    function pB(kk) {
      return void 0 !== kk.uv
    }

    function KB(kk) {
      if (!kk) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (pB(kk)) return function(kk) {
        const {
          texture: Fk,
          cells: Bk,
          layers: Rk
        } = kk, tk = `textureDimensions(${Fk}, bloxdSpLevel)`, ak = Bk ? `max(vec2u(vec2f(${tk}) / ${Bk}), vec2u(1u))` : tk, Xk = Bk ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ak};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${Bk}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${Bk}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Fk}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${tk} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ak};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Fk}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let bk;
        if (Bk)
          if (1 === Rk.length) bk = `\treturn bloxdSpOwnTexel(${Rk[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const kk = Rk.length - 1;
            bk = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Rk[kk]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Fk = kk - 1; Fk >= 0; Fk--) bk += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Rk[Fk]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            bk += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else bk = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${kk.id?`var<private> ${uB}: u32;\n`:""}${Xk}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${MB(kk)};\n\treturn ${ak};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${kk.id?uB:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${MB(kk)};\n${bk}}\n`
      }(kk);
      const Fk = kk,
        Bk = kk => {
          const Bk = kk > 0 ? `bloxdSpLayer - ${Fk.layers*kk}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${kk}, ${Fk.sampler}, bloxdSpTurned, ${Bk}, round(bloxdSpMipLevel));`
        };
      let Rk = "";
      for (let ak = 0; ak < Fk.count - 1; ak++) Rk += `\tif (bloxdSpLayer < ${Fk.layers*(ak+1)}u) {\n\t\t${Bk(ak)}\n\t}\n`;
      const tk = Fk.frame ? `${Fk.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${hB}: u32;\n${CB}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${hB} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${hB} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${hB} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${tk}${Rk}\t${Bk(Fk.count-1)}\n}\n`
    }

    function xB(kk, Fk, Bk) {
      return !!kk.surface && "bloxdDefaultSurface" !== kk.surface && function(kk, Fk) {
        return "liquid" === Fk || !kk
      }(Fk, Bk)
    }

    function jB(kk, Fk) {
      return kk.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Fk.vertexLocalPosition}, ${UB(Fk.vertexFlags)});\n\t\tlet bloxdSpVertex = ${kk.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function lB(kk, Fk, Bk, Rk, tk) {
      if (!kk.surface) return "";
      const ak = (kk, Fk) => `\n\tlet bloxdSpTexelUV = ${kk};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Fk}) - 1u));`;
      let Xk = "",
        bk = "0u, 0u, vec2f(0.0), 0.0";
      const wk = Rk && pB(Rk) ? Rk : null,
        dk = Rk && !pB(Rk) ? Rk : null;
      if (wk) {
        Xk = `${wk.id?`\n\tlet bloxdSpTexture = ${wk.id};\n\t${uB} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${wk.uv};${ak(function(kk,Fk){var Bk;return`${null!==(Bk=kk.levelUv)&&void 0!==Bk?Bk:kk.cells?`${Fk} / ${kk.cells}`:Fk} * vec2f(textureDimensions(${kk.texture}))`}(wk,"bloxdSpUv"),wk.texture)}`, bk = (wk.id ? `${uB}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else dk && (Xk = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${hB} = bloxdSpTexture >> 16u;${ak(`fragmentInputs.vMainUV1 * ${(0,OF.fb)(dk.width)}`,"textureAtlas0")}`, bk = `bloxdSpTexture & 0xffffu, ${hB}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const sk = tk.overlayColour,
        Vk = sk ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Jk = "bloxdDefaultSurface" !== kk.surface || sk ? `\n\tbaseColor = vec4f(${Vk}, baseColor.a);` : "",
        Ak = xB(kk, Fk, Bk) ? `\n\t${tk.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Xk}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${tk.alpha}, ${tk.enchantTier}, ${tk.enchantColour}, ${tk.enchantSpeed}, ${null!==sk&&void 0!==sk?sk:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${tk.normal}, ${tk.localPosition}, ${UB(tk.flags)}, ${bk});\n\tlet bloxdSpSurface = ${kk.surface}(bloxdSpSurfaceIn);${Jk}${Ak}\n`
    }
    const nB = "bloxdSpLightIn";

    function IB(kk, Fk, Bk, Rk) {
      if (!kk.light) return "";
      const tk = Fk ? `${OF.k}.rgb, ${OF.k}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${OF.g}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: ak,
          diffuse: Xk,
          emissive: bk,
          ambient: wk,
          fogColour: dk,
          fogAlpha: sk,
          normal: Vk
        } = Rk;
      return `\tvar ${nB} = BloxdLightIn(vec3f(0.0), ${Bk?ak:"0.0"}, ${Xk}, ${bk}, ${wk}, ${tk}, ${dk}, ${sk}, fragmentInputs.vPositionW, ${Vk}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${nB}.litColour = bloxdLitColour(bloxdSpSurface, ${nB});\n`
    }

    function QB(kk) {
      return kk.light ? `\n\t{\n\t\tlet bloxdSpLight = ${kk.light}(bloxdSpSurface, ${nB});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const kR = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      FR = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      BR = "\treturn color;\n}",
      RR = {
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
    const tR = Object.freeze({});

    function aR(kk) {
      var Fk;
      return !(null === (Fk = (0, HF.f)(kk)) || void 0 === Fk || !Fk.sceneDepth)
    }

    function XR(kk) {
      const Fk = (0, HF.f)(kk);
      return !!Fk && xB(Fk.hooks, Fk.strict, Fk.program)
    }

    function bR(kk, Fk, Bk, Rk) {
      return GB(kk, Fk, Bk, Rk, "terrain")
    }

    function wR(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const ak = function(kk) {
          return (0, HF.d)(kk.packVariant, kk.liquid ? "liquid" : "terrain")
        }(kk),
        {
          hooks: Xk
        } = ak,
        bk = rB(ak, Rk),
        wk = "edge" === tk ? "maskEdge" : "plain" === tk ? "mask" : "trace",
        dk = jB(Xk, RR);
      dk && (Fk = bR(Fk, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${dk}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const sk = "atlas" === kk.texture ? {
          count: kk.atlasCount,
          layers: kk.atlasLayers,
          width: kk.Vl,
          sampler: "atlasSampler",
          frame: kk.animated ? Bk : null
        } : null,
        Vk = `${ak.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${PB(ak,bk,RR.normal,RR.flags,wk)}${lB(Xk,ak.strict,ak.program,sk,RR)}`;
      Vk && (Fk = bR(Fk, kR, `${kR.slice(0,-1)}${Vk}`, "surface"));
      const Jk = QB(Xk);
      return Jk && (Fk = bR(Fk, FR, `${IB(Xk,kk.lighting,kk.dirLightCount>0,RR)}${FR}`, "light input"), Fk = bR(Fk, BR, `${Jk.slice(1)}${BR}`, "light")), `${(0,NF.z)()}${ak.sceneDepth?`@group(${NF.g}) @binding(${NF.p}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${cB};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${zB(ak,bk,wk)}${KB(sk)}${gB}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${ak.code}${Fk}`
    }
    const dR = Lk.e.WGSL;

    function sR(kk) {
      return void 0 !== kk.packVariant
    }
    const VR = {
        uRk: 0,
        MRk: 4,
        gRk: 8,
        cRk: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      JR = VR.aoLevels + 4,
      AR = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      eR = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      yR = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      fR = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      mR = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      WR = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      vR = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      iR = 0,
      YR = 3,
      oR = 4,
      LR = 5,
      OR = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${EF.e}, ${EF.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${EF.e}, ${EF.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      ER = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((kk=>SF.b>>kk&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const SR = {
      yJ: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: kk => `animDataPerTex[${kk}]`
    };

    function NR(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SR;
      return `\n\tlet atlasIdxIn = ${kk};\n\tlet animTick = ${Bk.yJ};\n\tlet animTickStride = ${Bk.stride};\n\tlet numAnimTextures = ${Bk.count};\n\t${(0,Ok.g)(Lk.e.WGSL,Bk.perTexture)}\n\t${Fk}animLayer;\n`
    }

    function HR(kk) {
      const Fk = (Fk, Bk) => {
        const Rk = Fk > 0 ? `fragmentInputs.texAtlasIndex - ${kk.atlasLayers.toFixed(1)} * ${Fk.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${Bk?"textureSampleLevel":"textureSample"}(textureAtlas${Fk}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Rk}))${Bk?", atlasLod":""})`
      };
      if (1 === kk.atlasCount) return `baseColor = ${Fk(0,!1)};`;
      let Bk = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,OF.fb)(kk.Vl)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Rk = 0; Rk < kk.atlasCount; Rk++) {
        const tk = kk.atlasLayers * (Rk + 1) - .5;
        Bk += `${Rk>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,OF.fb)(tk)}) {\n\t\tbaseColor = ${Fk(Rk,!0)};\n\t}`
      }
      return Bk
    }

    function uR(kk) {
      return `terrain-${kk.texture}${"atlas"===kk.texture?kk.atlasCount:""}${kk.animated?"-anim":""}${kk.alphaTest?"-test":""}${kk.lighting?"-lit":""}-dir${kk.dirLightCount}${kk.packed?"-packed":""}${sR(kk)?`-sp${kk.packVariant}`:""}${kk.liquid?"-liquid":""}${kk.resting?"-rest":""}`
    }

    function MR(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Rk = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const Bk = "none" !== kk.texture,
          Rk = "atlas" === kk.texture,
          tk = kk.dirLightCount > 0,
          ak = sR(kk);
        if (kk.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${kk.dirLightCount}`);
        let Xk = 1,
          bk = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Rk) {
          kk.animated && (bk += `@group(2) @binding(${Xk++}) var<storage, read> animDataPerTex: array<f32>;\n`), bk += `@group(2) @binding(${Xk++}) var atlasSampler: sampler;\n`;
          for (let Fk = 0; Fk < kk.atlasCount; Fk++) bk += `@group(2) @binding(${Xk++}) var textureAtlas${Fk}: texture_2d_array<f32>;\n`
        } else "single" === kk.texture && (bk += `@group(2) @binding(${Xk++}) var diffuseSamplerSampler: sampler;\n`, bk += `@group(2) @binding(${Xk++}) var diffuseSampler: texture_2d<f32>;\n`);
        const wk = function(kk) {
            const Fk = vR,
              Bk = "none" !== kk.texture,
              Rk = "atlas" === kk.texture,
              tk = sR(kk);
            return kk.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${Bk?"uv: vec2f,":""}\n\t${Rk?"texAtlasIndices: f32,":""}\n\t${kk.lighting?"aPackedLightLevels: f32,":""}\n\t${tk?"blockFlagWords: vec2u,":""}\n}\n${OR}\n${ER}\n${"single"===kk.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${Bk?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===kk.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Rk?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${kk.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${tk?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Fk.position}) position: vec3f,\n\t@location(${Fk.normal}) normal: vec4f,\n\t@location(${Fk.color}) color: vec4f,\n\t${Bk?`@location(${Fk.uv}) uv: vec2f,`:""}\n\t${kk.lighting?`@location(${Fk.packedLight}) aPackedLightLevels: f32,`:""}\n\t${tk?`@location(${Fk.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(kk),
          dk = `\n${fR}\n${eR}\n${yR}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${bk}\n${lk}\n${wk.declarations}\nstruct Varyings {\n\t${"none"===Fk?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${kk.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${tk?"@location(5) vTerrainLambert: f32,":""}\n\t${Bk?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Rk?"@location(7) texAtlasIndex: f32,":""}\n\t${kk.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${ak?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${ak&&Rk?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${kk.resting?"":(0,OF.p)(dR)}\n${WR}\n\n@vertex\nfn mainVertex(${wk.parameter}) -> Varyings {\n\t${wk.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${ak?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${dF.b.placed}u;`:""}\n\t${ak&&Rk?ZB("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${kk.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${Bk?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Rk?function(kk){return kk?NR("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(kk.animated):""}\n\t${"single"===kk.texture&&kk.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,OF.U)(dR)}\n\t${(0,OF.B)(dR,kk.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${kk.resting?"":mR}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Rk?HR(kk):""}\n\t${"single"===kk.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Bk?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${kk.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${tk?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${jk}));\n\t${sR(kk)?(0,OF.bb)(Lk.e.WGSL):(0,OF.N)(dR)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          sk = new Set;
        kk.lighting && sk.add("BLOXD_LIGHTING");
        tk && sk.add("BLOXD_TERRAIN_DIRECTIONAL");
        return YF(dk, new Map([...sk].map((kk => [kk, !0]))))
      }(kk, Bk);
      if (!sR(kk)) return Rk;
      const tk = wR(kk, Rk, NR, Fk, Bk);
      return "none" === Bk ? tk : `${tk}${function(kk){const Fk="none"!==kk.texture&&kk.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${kk.resting?"":mR}\n\t${kk.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Fk&&"atlas"===kk.texture?HR(kk):""}\n\t${Fk&&"single"===kk.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Fk?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${dF.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(kk)}`
    }
    const gR = new Map([
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

    function UR(kk, Fk) {
      const Bk = new Map;
      let Rk = 0;
      const tk = [],
        ak = [],
        Xk = [];
      for (const dk of Fk) {
        var bk, wk;
        const Fk = null !== (bk = dk.type.trim().split(/\s+/).pop()) && void 0 !== bk ? bk : dk.type,
          sk = gR.get(Fk);
        if (!sk) throw new Error(`Lite: no uniform layout for ${dk.name}: ${dk.type}`);
        const Vk = null !== (wk = dk.arraySize) && void 0 !== wk ? wk : 0,
          Jk = Vk ? 4 : sk.align;
        Rk = Math.ceil(Rk / Jk) * Jk;
        const Ak = Vk ? 4 * Math.ceil(sk.floats / 4) : sk.floats;
        if (Bk.set(dk.name, {
            offset: Rk,
            floats: sk.floats,
            arraySize: Vk,
            stride: Ak
          }), Vk && sk.floats <= 2) {
          const Fk = `${kk}_${Xk.length}_strided`;
          ak.push(`struct ${Fk} {\n\t@size(16) el: ${sk.wgsl},\n}`), Xk.push(dk.name), tk.push(`\t@align(16) ${dk.name}: array<${Fk}, ${Vk}>,`)
        } else Vk ? tk.push(`\t@align(16) ${dk.name}: array<${sk.wgsl}, ${Vk}>,`) : tk.push(`\t${dk.name}: ${sk.wgsl},`);
        Rk += Vk ? Ak * Vk : sk.floats
      }
      return {
        slots: Bk,
        floats: Math.max(4, 4 * Math.ceil(Rk / 4)),
        wgsl: `${ak.join("\n")}\nstruct ${kk} {\n${tk.join("\n")}\n}\n`,
        stridedArrays: Xk
      }
    }
    const cR = [{
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
      GR = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      TR = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function rR(kk, Fk) {
      return `#if defined(${kk}) && ${kk}DIRECTUV == 0\nvarying v${Fk}UV: vec2f;\n#endif`
    }

    function DR(kk, Fk, Bk) {
      return `#if defined(${kk}) && ${kk}DIRECTUV == 0\nif (uniforms.v${Fk}Infos.x==0.)\n{vertexOutputs.v${Fk}UV= (uniforms.${Bk}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Fk}UV= (uniforms.${Bk}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function zR(kk, Fk, Bk) {
      return `#ifdef ${kk}\n#if ${kk}DIRECTUV == 1\n#define v${Fk}UV vMainUV1\n#elif ${kk}DIRECTUV == 2\n#define v${Fk}UV vMainUV2\n#else\nvarying v${Fk}UV: vec2f;\n#endif\nvar ${Bk}SamplerSampler: sampler;\nvar ${Bk}Sampler: texture_2d<f32>;\n#endif`
    }
    const PR = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      hR = 256,
      qR = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      CR = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      ZR = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      pR = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      KR = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      xR = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      jR = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      lR = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${CR}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${rR("OPACITY","Opacity")}\n${rR("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${jR}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${ZR}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${DR("OPACITY","Opacity","opacity")}\n${DR("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${pR}\n#define CUSTOM_VERTEX_MAIN_END\n${KR}\n}\n`;
    const nR = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${zR("OPACITY","Opacity","opacity")}\n${zR("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${jR}\n${xR}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((kk,Fk)=>function(kk){const Fk=`
    frame.lights[LITE_LIGHT$ {
        kk
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      kk
    }\
    nvar diffuse$ {
      kk
    }: vec4f = $ {
      Fk
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      kk
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Fk
    }.vLightData, diffuse$ {
      kk
    }.rgb, $ {
      Fk
    }.vLightSpecular.rgb, diffuse$ {
      kk
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Fk))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, IR = /^([gimus]+)!/, QR = new Set;

    function kt(kk) {
      QR.has(kk) || (QR.add(kk), console.warn(`Lite: no place for plugin code at ${kk} in the standard shader: it is left out`))
    }

    function Ft(kk, Fk) {
      let Bk = kk;
      const Rk = new Map;
      for (const [ak, Xk] of Fk) {
        var tk;
        Rk.set(ak, `${null!==(tk=Rk.get(ak))&&void 0!==tk?tk:""}${Xk}\n`)
      }
      for (const [ak, Xk] of Rk) {
        if (!ak.startsWith("!")) {
          const kk = `#define ${ak}`;
          if (!Bk.includes(kk)) {
            kt(ak);
            continue
          }
          Bk = Bk.replace(kk, (() => `\n${Xk}\n${kk}`));
          continue
        }
        let kk = ak.substring(1),
          Fk = "g";
        if (kk.startsWith("!")) Fk = "", kk = kk.substring(1);
        else {
          const Bk = IR.exec(kk);
          Bk && (Fk = Bk[1], kk = kk.substring(Fk.length + 1))
        }
        const Rk = new RegExp(kk, Fk.includes("g") ? Fk : `${Fk}g`);
        let tk = Rk.exec(Bk);
        for (tk || kt(ak); tk;) {
          const kk = tk,
            Fk = Xk.replace(/\$(\d+)/g, ((Fk, Bk) => Number(Bk) < kk.length ? kk[Number(Bk)] : ""));
          Bk = Bk.substring(0, kk.index) + Fk + Bk.substring(kk.index + kk[0].length), Rk.lastIndex = kk.index + Fk.length, tk = Rk.exec(Bk)
        }
      }
      return Bk
    }
    const Bt = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Rt = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      tt = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function Xt(kk) {
      const Fk = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let Bk = kk.replace(Bt, ((kk, Bk, Rk, tk, ak, Xk) => ("attribute" === Bk ? Fk.attributes.push({
        name: ak,
        type: Xk
      }) : void 0 === Bk ? Fk.varyings.push({
        name: ak,
        type: Xk,
        interpolation: wt(Xk, Rk, tk)
      }) : Fk.uniforms.push({
        name: ak,
        type: bt(Xk)
      }), "")));
      return Bk = Bk.replace(Rt, ((kk, Bk) => (Fk.samplers.add(Bk), ""))), Bk = Bk.replace(tt, ((kk, Bk, Rk) => (Fk.textures.push({
        name: Bk,
        type: Rk
      }), ""))), Fk.body = Bk, Fk
    }

    function bt(kk) {
      const Fk = kk.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        Bk = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Fk);
      if (!Bk) throw new Error(`Lite: unsupported uniform type ${kk}`);
      return Bk
    }

    function wt(kk, Fk, Bk) {
      return void 0 === Fk && void 0 === Bk ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(kk.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Fk ? "@interpolate(flat) " : `@interpolate(${null!==Fk&&void 0!==Fk?Fk:"perspective"}, ${null!==Bk&&void 0!==Bk?Bk:"center"}) `
    }

    function dt(kk) {
      return At({
        defines: kk.defines,
        vertex: Ft(lR, kk.vertexCode),
        fragment: Ft(nR, kk.fragmentCode),
        members: [...cR, ...kk.defines.has("OPACITY") ? GR : [], ...kk.defines.has("EMISSIVE") ? TR : [], ...kk.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function st(kk) {
      const Fk = kk.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Fk === kk) throw new Error("Lite: fragment main has no return");
      return Fk
    }
    const Vt = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${CR}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${ZR}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${pR}\n${KR}\n}\n`,
      Jt = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${xR}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function At(kk) {
      const Fk = kk.defines,
        Bk = Xt(YF(kk.vertex, Fk)),
        Rk = Xt(YF(kk.fragment, Fk)),
        tk = new Map;
      for (const vk of [...Bk.varyings, ...Rk.varyings]) tk.has(vk.name) || tk.set(vk.name, vk);
      const ak = [...tk.values()].map(((kk, Fk) => `\t@location(${Fk}) ${kk.interpolation}${kk.name}: ${kk.type},`)),
        Xk = [...kk.members];
      for (const vk of [...Bk.uniforms, ...Rk.uniforms]) Xk.some((kk => kk.name === vk.name)) || Xk.push(vk);
      const bk = UR(kk.structName, Xk),
        wk = [],
        dk = [];
      let sk = 1;
      const Vk = new Set;
      for (const vk of [...Bk.textures, ...Rk.textures]) {
        if (Vk.has(vk.name)) continue;
        Vk.add(vk.name);
        const kk = `${vk.name}Sampler`,
          Fk = sk++,
          Bk = sk++,
          Rk = vk.type.startsWith("texture_2d_array") ? "2d-array" : vk.type.startsWith("texture_cube") ? "cube" : "2d";
        wk.push({
          name: vk.name,
          binding: Fk,
          samplerBinding: Bk,
          dimension: Rk
        }), dk.push(`@group(2) @binding(${Fk}) var ${vk.name}: ${vk.type};`), dk.push(`@group(2) @binding(${Bk}) var ${kk}: sampler;`)
      }
      for (const vk of [...Bk.samplers, ...Rk.samplers])
        if (!Vk.has(vk.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${vk} has no texture`);
      const Jk = [fR, qR, bk.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${kk.structName};`, ...dk].join("\n"),
        Ak = Bk.attributes,
        ek = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...Bk.attributes.map(((kk, Fk) => `\t@location(${Fk}) ${kk.name}: ${kk.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        yk = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...ak, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        fk = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Rk.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...ak, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", lk, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${jk}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        mk = kk => {
          for (const Fk of bk.stridedArrays) kk = kk.replace(new RegExp(`\\b${Fk}\\s*\\[(.*?)\\]`, "g"), `${Fk}[$1].el`);
          return kk
        };
      return {
        vertex: `${Jk}\n${ek}\n${yk}\n${mk(Bk.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Jk}\n${fk}\n${st((Wk=mk(Rk.body),Wk.includes("fragmentInputs.position")?Wk.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Wk))}`,
        attributes: Ak,
        material: bk,
        textures: wk
      };
      var Wk
    }
    const et = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      yt = kk => ({
        name: kk,
        type: "vec3"
      }),
      ft = kk => ({
        name: kk,
        type: "float"
      }),
      mt = UR("EarthSkyUniforms", [yt("viewFrom"), ft("exposureScale"), yt("zenithOffset"), ft("fogOn"), yt("up"), ft("ditherOn"), yt("sun"), ft("turbidity"), yt("tint"), ft("rayleigh"), yt("sunDir"), ft("mieStrength"), yt("inScatterR"), ft("mieFocus"), yt("inScatterM"), ft("sunE"), yt("extinctionBeta"), ft("sunsetMix"), ft("mieScale"), ft("mieBase"), ft("mieSlope"), ft("sunDiscE"), ft("exposure")]),
      Wt = `${fR}\n${qR}\n${mt.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      vt = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${et.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      it = `\n${lk}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(mF).map((kk=>{let[Fk,Bk]=kk;return`const TONE_${Fk}: f32 = ${Bk};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${WF};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${jk}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Yt = Bk(36754);
    const ot = new Yt.Qe,
      Lt = new Yt.Qe,
      Ot = new Yt.Quaternion,
      Et = new Float64Array(3),
      St = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Nt = new Float64Array(16);

    function Ht(kk, Fk, Bk) {
      const Rk = Bk.worldMatrix;
      var tk;
      kk.updateFloat3("viewFrom", Rk[12], Rk[13], Rk[14]), kk.updateFloatsFrom("zenithOffset", Fk.cameraOffset, 0, 3), kk.updateFloatsFrom("up", Fk.up, 0, 3), Fk.luminance > 0 && (kk.updateFloat("exposure", Fk.luminance), kk.updateFloat("exposureScale", (tk = Fk.luminance, Math.log2(2 / Math.pow(tk, 4))))), kk.updateFloat("turbidity", Fk.turbidity), kk.updateFloat("rayleigh", Fk.rayleigh), kk.updateFloat("mieStrength", Fk.mieCoefficient), kk.updateFloat("mieFocus", Fk.mieDirectionalG), kk.updateFloatsFrom("tint", Fk.tint, 0, 3), kk.updateFloat("fogOn", Fk.fog && Bk.fogEnabled && 0 !== Bk.fogMode ? 1 : 0), kk.updateFloat("ditherOn", Fk.dithering ? 1 : 0);
      const ak = Fk.sunPosition;
      if (ot.set(ak[0], ak[1], ak[2]), !Fk.useSunPosition) {
        const kk = Math.PI * (Fk.inclination - .5),
          Bk = 2 * Math.PI * (Fk.azimuth - .5);
        ot.set(Fk.distance * Math.cos(Bk) * Math.cos(kk), Fk.distance * Math.sin(-kk), Fk.distance * Math.sin(Bk) * Math.cos(kk)), Yt.Quaternion.FromUnitVectorsToRef(Yt.Qe.UpReadOnly, Lt.set(Fk.up[0], Fk.up[1], Fk.up[2]), Ot), ot.rotateByQuaternionToRef(Ot, ot)
      }
      kk.updateVector3("sun", ot), Et[0] = ot.x, Et[1] = ot.y, Et[2] = ot.z;
      const Xk = fF(Fk, Et, St);
      kk.updateFloatsFrom("sunDir", Xk.sunDir, 0, 3), kk.updateFloat("sunE", Xk.sunE), kk.updateFloatsFrom("inScatterR", Xk.inScatterR, 0, 3), kk.updateFloatsFrom("inScatterM", Xk.inScatterM, 0, 3), kk.updateFloatsFrom("extinctionBeta", Xk.extinctionBeta, 0, 3), kk.updateFloat("sunsetMix", Xk.sunsetMix), kk.updateFloat("sunDiscE", Xk.sunDiscE), kk.updateFloat("mieScale", Xk.mieScale), kk.updateFloat("mieBase", Xk.mieBase), kk.updateFloat("mieSlope", Xk.mieSlope)
    }

    function ut(kk, Fk) {
      const Bk = Nt;
      Bk[0] = Fk.far, Bk[5] = Fk.far, Bk[10] = Fk.far, Bk[15] = 1;
      const Rk = kk.infiniteDistance;
      for (let tk = 0; tk < 3; tk++) Bk[12 + tk] = kk.position[tk] + (Rk ? Fk.worldMatrix[12 + tk] : 0);
      return Nt
    }
    var Mt = Bk(38359);

    function gt(kk) {
      return Math.max(4, 4 * Math.ceil(kk / 4))
    }

    function Ut(kk, Fk, Bk, Rk) {
      const tk = kk.createBuffer({
        label: Rk,
        size: gt(Fk.byteLength),
        usage: Bk,
        mappedAtCreation: !0
      });
      return new Uint8Array(tk.getMappedRange(), 0, Fk.byteLength).set(new Uint8Array(Fk.buffer, Fk.byteOffset, Fk.byteLength)), tk.unmap(), tk
    }

    function ct(kk, Fk) {
      return Math.floor(Math.log2(Math.max(kk, Fk))) + 1
    }

    function Gt(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = kk.createTexture({
          label: ak,
          size: {
            width: Bk,
            height: Rk,
            depthOrArrayLayers: tk
          },
          format: "rgba8unorm",
          mipLevelCount: ct(Bk, Rk),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        bk = (Fk, Bk, Rk, ak) => {
          kk.queue.writeTexture({
            texture: Xk,
            mipLevel: Bk
          }, Fk, {
            bytesPerRow: 4 * Rk,
            rowsPerImage: ak
          }, {
            width: Rk,
            height: ak,
            depthOrArrayLayers: tk
          })
        };
      bk(Fk, 0, Bk, Rk);
      let wk = 1;
      for (const dk of function*(kk, Fk, Bk, Rk) {
          let tk = kk,
            ak = Fk,
            Xk = Bk;
          for (; ak > 1 || Xk > 1;) {
            const kk = Math.max(1, ak >> 1),
              Fk = Math.max(1, Xk >> 1),
              Bk = new Uint8Array(kk * Fk * Rk * 4),
              bk = 4 * ak;
            let wk = 0;
            for (let dk = 0; dk < Rk; dk++) {
              const Rk = dk * bk * Xk;
              for (let dk = 0; dk < Fk; dk++) {
                const Fk = Rk + Math.min(2 * dk, Xk - 1) * bk,
                  sk = Rk + Math.min(2 * dk + 1, Xk - 1) * bk;
                for (let Rk = 0; Rk < kk; Rk++) {
                  const kk = 4 * Math.min(2 * Rk, ak - 1),
                    Xk = 4 * Math.min(2 * Rk + 1, ak - 1);
                  for (let Rk = 0; Rk < 4; Rk++) Bk[wk++] = tk[Fk + kk + Rk] + tk[Fk + Xk + Rk] + tk[sk + kk + Rk] + tk[sk + Xk + Rk] + 2 >> 2
                }
              }
            }
            yield {
              data: Bk,
              width: kk,
              height: Fk
            }, tk = Bk, ak = kk, Xk = Fk
          }
        }(Fk, Bk, Rk, tk)) bk(dk.data, wk++, dk.width, dk.height);
      return Xk
    }
    const Tt = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function rt(kk) {
      if (kk.startsWith("data:")) {
        const Fk = kk.search(/[;,]/);
        return `data:${Fk>5?kk.slice(5,Fk):""} URL of ${kk.length} characters`
      }
      return kk.length > 80 ? `${kk.slice(0,80)}...` : kk
    }
    async function Dt(kk) {
      const Fk = await fetch(kk);
      if (!Fk.ok) throw new Error(`${rt(kk)}: ${Fk.status} ${Fk.statusText}`);
      return createImageBitmap(await Fk.blob(), Tt)
    }
    async function zt(kk) {
      const Fk = await Dt(kk),
        Bk = new OffscreenCanvas(Fk.width, Fk.height),
        Rk = Bk.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Rk) throw new Error("No 2D context to decode an image");
      Rk.drawImage(Fk, 0, 0);
      const {
        data: tk
      } = Rk.getImageData(0, 0, Fk.width, Fk.height);
      return Fk.close(), {
        pixels: new Uint8Array(tk.buffer, tk.byteOffset, tk.byteLength),
        width: Bk.width,
        height: Bk.height
      }
    }
    const Pt = new WeakMap;

    function ht(kk, Fk, Bk, Rk) {
      var tk;
      const ak = null !== (tk = Pt.get(kk)) && void 0 !== tk ? tk : new Map;
      Pt.set(kk, ak);
      let Xk = ak.get(Fk);
      return Xk || (Xk = (async tk => {
        const ak = null !== (tk = function(kk, Fk) {
          const Bk = kk ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : null;
          return null !== Bk && void 0 !== Bk && Bk.byteLength && Fk && Bk.byteLength % (Fk * Fk * 4) === 0 ? {
            pixels: Bk,
            layerWidth: Fk,
            layers: Bk.byteLength / (Fk * Fk * 4)
          } : null
        }(Bk, Rk)) && void 0 !== tk ? tk : await async function(kk) {
          const {
            pixels: Fk,
            width: Bk
          } = await zt(kk);
          return {
            pixels: Fk,
            layerWidth: Bk,
            layers: Fk.byteLength / (Bk * Bk * 4)
          }
        }(Fk), {
          layerWidth: Xk,
          layers: bk
        } = ak;
        return {
          texture: Gt(kk, ak.pixels, Xk, Xk, bk, `atlas-${Fk}`),
          layerWidth: Xk,
          layers: bk
        }
      })(), ak.set(Fk, Xk), Xk.catch((() => {
        ak.delete(Fk)
      }))), Xk
    }
    const qt = new Map([
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
      Ct = new Map([
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

    function Zt(kk) {
      for (const Fk of (0, Mt.m)(kk))
        if (!Ct.has((0, Mt.j)(Fk))) return !1;
      return !0
    }

    function pt(kk) {
      const Fk = Ct.get(kk);
      if (!Fk) return null;
      const [Bk, Rk, tk] = Fk;
      return {
        srcFactor: qt.get(Bk),
        dstFactor: qt.get(Rk),
        operation: tk
      }
    }
    let Kt = null;

    function xt(kk) {
      Kt = kk
    }

    function jt(kk, Fk, Bk) {
      var Rk;
      null === (Rk = Kt) || void 0 === Rk || Rk(kk, Fk, Bk, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class lt {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(kk, Fk, Bk, Rk, tk) {
        Bk !== this.pipeline && (kk.setPipeline(Bk), this.pipeline = Bk), kk.setBindGroup(1, Rk, [tk]);
        const ak = Fk.material.bindGroup;
        ak !== this.materialGroup && (kk.setBindGroup(2, ak), this.materialGroup = ak);
        const Xk = Fk.program.packGroup;
        Xk && Xk !== this.packGroup && (kk.setBindGroup(NF.g, Xk), this.packGroup = Xk);
        const {
          vertexBuffers: bk,
          vertexOffsets: wk
        } = this;
        for (let dk = 0; dk < Fk.vertexBuffers.length; dk++) bk[dk] === Fk.vertexBuffers[dk] && wk[dk] === Fk.vertexOffsets[dk] || (kk.setVertexBuffer(dk, Fk.vertexBuffers[dk], Fk.vertexOffsets[dk]), bk[dk] = Fk.vertexBuffers[dk], wk[dk] = Fk.vertexOffsets[dk]);
        Fk.indexBuffer && Fk.indexBuffer !== this.indexBuffer && (kk.setIndexBuffer(Fk.indexBuffer, Fk.indexFormat), this.indexBuffer = Fk.indexBuffer)
      }
    }
    class nt {
      constructor(kk, Fk, Bk, Rk) {
        this.modelMeshes = kk, this.A_ = Fk, this.maker = Bk, this.warnOnce = Rk, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(kk) {
        this.collectGroup(kk, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(kk, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(kk, 1, this.frontDraws, this.frontDraws, !0);
        for (const Fk of this.modelMeshes.groupIds())(Fk < -1 || Fk > 1) && this.warnOnce(`group:${Fk}`, `rendering group ${Fk} is not drawn`);
        for (const Fk of this.A_.groupIds())(Fk < -1 || Fk > 1) && this.warnOnce(`group:${Fk}`, `rendering group ${Fk} is not drawn`);
        this.opaqueDraws.sort(It), this.transparentDraws.sort(Qt)
      }
      collectGroup(kk, Fk, Bk, Rk, tk) {
        const ak = this.modelMeshes.group(Fk),
          Xk = this.A_.group(Fk),
          bk = 0 === Fk ? null === Xk || void 0 === Xk ? void 0 : Xk.opaque : void 0;
        this.collectList(kk, null === ak || void 0 === ak ? void 0 : ak.opaque, bk || null === Xk || void 0 === Xk ? void 0 : Xk.opaque, Fk, !1, Bk, tk), bk && (this.A_.drawn += this.maker.bundleDraws(kk, bk, Fk)), this.collectList(kk, null === ak || void 0 === ak ? void 0 : ak.alphaTest, void 0, Fk, !1, Bk, tk), this.collectList(kk, null === ak || void 0 === ak ? void 0 : ak.transparent, null === Xk || void 0 === Xk ? void 0 : Xk.transparent, Fk, !0, Rk, tk)
      }
      collectList(kk, Fk, Bk, Rk, tk, ak, Xk) {
        var bk;
        const wk = ak.length;
        Fk && this.maker.pushDraws(kk, Fk.units, Fk.units.length, Rk, tk, ak, Fk.rows), Bk && (this.A_.drawn += this.maker.pushDraws(kk, Bk, Bk.length, Rk, tk, ak));
        const dk = tk ? null === (bk = this.modelMeshes.group(Rk)) || void 0 === bk ? void 0 : bk.text : void 0;
        dk && this.maker.pushDraws(kk, dk.units, dk.units.length, Rk, !0, ak, dk.rows), Xk && ka(ak, wk)
      }
    }

    function It(kk, Fk) {
      return kk.program.id - Fk.program.id || kk.material.owner.uniqueId - Fk.material.owner.uniqueId
    }

    function Qt(kk, Fk) {
      return kk.material.owner.uniqueId - Fk.material.owner.uniqueId
    }

    function ka(kk, Fk) {
      for (let Bk = Fk + 1; Bk < kk.length; Bk++) {
        const Rk = kk[Bk];
        let tk = Bk - 1;
        for (; tk >= Fk && Qt(kk[tk], Rk) > 0; tk--) kk[tk + 1] = kk[tk];
        kk[tk + 1] = Rk
      }
    }
    const Fa = {};

    function Ba(kk) {
      return kk.hasThinInstances ? "thin" : kk.GRk || kk._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Ra(kk, Fk, Bk) {
      return kk ? (Bk._needUVs = !0, kk.optimizeUVAllocation && (0, Hk.L)(kk.matrix) ? (Bk[`${Fk}DIRECTUV`] = kk.uvSet + 1, Bk[`MAINUV${kk.uvSet+1}`] = !0) : Bk[`${Fk}DIRECTUV`] = 0, !0) : (Bk[`${Fk}DIRECTUV`] = 0, !1)
    }

    function ta(kk) {
      const Fk = new Map;
      for (const Bk in kk) {
        if (95 === Bk.charCodeAt(0)) continue;
        const Rk = kk[Bk],
          tk = typeof Rk;
        "number" === tk || "string" === tk ? Fk.set(Bk, String(Rk)) : Rk && "function" !== tk && Fk.set(Bk, !0)
      }
      return Fk
    }

    function aa(kk) {
      const Fk = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: Bk
        }
        of kk.features)
        for (const kk in Bk) Fk[kk] = Bk[kk];
      return Fk
    }

    function Xa(kk) {
      const Fk = kk.parts.geometry;
      return null !== Fk && void 0 !== Fk && Fk.live ? Fk : null
    }

    function ba(kk) {
      var Fk;
      return null !== (Fk = Xa(kk)) && void 0 !== Fk ? Fk : Fa
    }
    class wa {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = kk, this.warnOnce = Fk, this.programWithModel = Bk, this.packFailed = Rk, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(kk, Fk, Bk, Rk, tk) {
        const ak = Fk.owner;
        let Xk = this.drawStates.get(Fk);
        if (!Xk) {
          const kk = Fk.parts.materials[Fk.range];
          if (!kk) return this.warnOnce("model", `${Bk.name} on ${ak.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Xk = {
            defines: aa(kk),
            model: kk,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: tk,
            groupId: Rk,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Fk, Xk)
        }
        if (this.programCurrent(Xk, Fk, tk, Rk)) return Xk.program;
        const {
          model: bk
        } = Xk, wk = ba(Fk), dk = this.instanceLayout(ak, tk), sk = this.definesBits(ak);
        if (!this.prepareModelDefines(kk, ak, bk, Xk.defines, Rk, tk)) return null;
        Xk.instancing = tk, Xk.groupId = Rk, Xk.modelVersion = bk.version, Xk.geometry = wk, Xk.instanceLayout = dk, Xk.definesBits = sk;
        const Vk = function(kk) {
          let Fk = "";
          for (const [Bk, Rk] of kk) Fk += !0 === Rk ? `${Bk};` : `${Bk}=${Rk};`;
          return Fk
        }(ta(Xk.defines));
        return Vk === Xk.definesKey && Xk.packVariant === this.modelPackVariant && Xk.program && !this.packFailed(Xk.program) || (Xk.definesKey = Vk, Xk.packVariant = this.modelPackVariant, Xk.program = this.programWithModel(bk, Xk.defines, Vk)), Xk.program
      }
      programCurrent(kk, Fk, Bk, Rk) {
        return null !== kk.program && !this.packFailed(kk.program) && kk.instancing === Bk && kk.groupId === Rk && this.definesHold(kk, Fk, Bk)
      }
      definesHold(kk, Fk, Bk) {
        return kk.modelVersion === kk.model.version && kk.geometry === ba(Fk) && kk.instanceLayout === this.instanceLayout(Fk.owner, Bk) && kk.definesBits === this.definesBits(Fk.owner) && kk.packVariant === this.modelPackVariant
      }
      modelPackKind(kk) {
        var Fk;
        return 0 === this.modelPackVariant ? null : null !== (Fk = (0, Sk.z)(kk, Ek.f.name)) && void 0 !== Fk && Fk.active ? "placed" : kk.item ? "item" : kk.lifeform ? "lifeform" : kk.box ? "box" : null
      }
      instanceLayout(kk, Fk) {
        var Bk, Rk, tk;
        return "thin" === Fk ? null !== (tk = this.resources.K3.get(kk)) && void 0 !== tk ? tk : null : "instanced" === Fk && null !== (Bk = null === (Rk = kk._userInstancedBuffersStorage) || void 0 === Rk ? void 0 : Rk.interleavedKinds) && void 0 !== Bk ? Bk : null
      }
      definesBits(kk) {
        const Fk = this.view;
        return (kk.visibility < 1 ? 1 : 0) | (kk.hasVertexAlpha ? 2 : 0) | (kk.applyFog ? 4 : 0) | (kk.useVertexColors ? 8 : 0) | (kk.nonUniformScaling ? 16 : 0) | (Fk.fogEnabled && 0 !== Fk.fogMode ? 32 : 0) | (Fk.lightsEnabled ? 64 : 0) | Fk.lightCount << 7
      }
      prepareLightDefines(kk, Fk, Bk) {
        let Rk = 0;
        if (this.view.lightsEnabled && !Fk) {
          const Fk = Math.min(Bk, 4);
          for (; Rk < this.view.lightCount && (kk[`LIGHT${Rk}`] = !0, kk[`LITE_LIGHT${Rk}_SLOT`] = Rk, Rk++, kk._needNormals = !0, Rk !== Fk););
        }
        for (let tk = Rk; tk < 4; tk++) kk[`LIGHT${tk}`] = !1, kk[`LITE_LIGHT${tk}_SLOT`] = void 0
      }
      prepareModelDefines(kk, Fk, Bk, Rk, tk, ak) {
        const {
          features: Xk
        } = Bk;
        Rk._needNormals = !1, Rk._needUVs = !1;
        const bk = this.view;
        this.prepareLightDefines(Rk, Bk.disableLighting, Bk.maxSimultaneousLights), Rk.MAINUV1 = !1, Rk.MAINUV2 = !1;
        const wk = Bk.diffuseTexture;
        wk ? (Rk._needUVs = !0, Rk.DIFFUSE = !0, wk.optimizeUVAllocation && (0, Hk.L)(wk.matrix) ? (Rk.DIFFUSEDIRECTUV = wk.uvSet + 1, Rk[`MAINUV${wk.uvSet+1}`] = !0) : Rk.DIFFUSEDIRECTUV = 0, wk.uvSet > 1 && this.warnOnce(`uvset:${Bk.name}`, `${Bk.name} samples UV set ${wk.uvSet+1}, which is not supported`)) : (Rk.DIFFUSE = !1, Rk.DIFFUSEDIRECTUV = 0);
        const dk = Bk.opacityTexture,
          sk = Bk.emissiveTexture;
        Rk.OPACITY = Ra(dk, "OPACITY", Rk), Rk.OPACITYRGB = null !== dk && dk.getAlphaFromRGB, Rk.EMISSIVE = Ra(sk, "EMISSIVE", Rk), (dk && dk.uvSet > 1 || sk && sk.uvSet > 1) && this.warnOnce(`uvset:${Bk.name}`, `${Bk.name} samples a UV set past 2, which is not supported`);
        const Vk = Bk.reflectionTexture,
          Jk = null !== Vk;
        if (Jk) {
          if (!this.resources.boundTexture(Vk)) return !1;
          Rk._needNormals = !0
        }
        Rk.REFLECTION = Jk, Rk.REFLECTIONMAP_3D = Jk, Rk.REFLECTIONMAP_SKYBOX = Jk, Rk.REFLECTIONMAP_OPPOSITEZ = Jk && (kk.useRightHandedSystem ? !Vk.invertZ : Vk.invertZ), Rk.ROUGHNESS = Jk && Bk.roughness > 0, Rk.REFLECTIONOVERALPHA = Jk && Bk.useReflectionOverAlpha, Rk.LITE_REFLECTION_LUMINANCE = Jk && "cube" === Vk.source.kind && Vk.source.luminance, (Fk.skeleton || Fk.morphTargetManager) && this.warnOnce(`skin:${Fk.name}`, `${Fk.name} has bones or morph targets, which are not supported`), Rk.FOG = Bk.fogEnabled && Fk.applyFog && bk.fogEnabled && 0 !== bk.fogMode, Rk.NONUNIFORMSCALING = Fk.nonUniformScaling;
        const {
          visibility: Ak,
          hasVertexAlpha: ek
        } = Fk;
        Rk.ALPHATEST = (0, Sk.P)(Bk, Ak, ek), Rk.ALPHAFROMDIFFUSE = (0, Sk.fb)(Bk), Rk.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Bk.transparencyMode, Rk.ALPHABLEND = null === Bk.transparencyMode || (0, Sk.N)(Bk, Ak, ek), Rk.PREMULTIPLYALPHA = 7 === Bk.alphaMode || 8 === Bk.alphaMode, Rk.EMISSIVEASILLUMINATION = Bk.useEmissiveAsIllumination, Rk.LINKEMISSIVEWITHDIFFUSE = Bk.linkEmissiveWithDiffuse, Rk.TWOSIDEDLIGHTING = !Bk.backFaceCulling && Bk.twoSidedLighting, Rk.INSTANCES = "none" !== ak, Rk.THIN_INSTANCES = "thin" === ak, Rk.LITE_FRONT_LAYER = tk >= 1;
        for (const {
            feature: Ok,
            state: Ek,
            active: Sk
          }
          of Xk) {
          var yk, fk;
          if (Sk) null === (yk = (fk = (0, VF.j)(Ok)).prepareDefinesBeforeAttributes) || void 0 === yk || yk.call(fk, Ek, Rk, kk, Fk)
        }
        this.modelPackKind(Bk) && (Rk._needNormals = !0), Rk.NORMAL = Rk._needNormals && Fk.isVerticesDataPresent("normal"), Rk.UV1 = Rk._needUVs && Fk.isVerticesDataPresent("uv"), Rk.UV2 = Rk._needUVs && Fk.isVerticesDataPresent("uv2");
        const mk = Fk.useVertexColors && Fk.isVerticesDataPresent("color");
        Rk.VERTEXCOLOR = mk, Rk.VERTEXALPHA = Fk.hasVertexAlpha && mk, Rk.INSTANCESCOLOR = "none" !== ak && Fk.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Ok,
            state: Ek,
            active: Sk
          }
          of Xk) {
          var Wk, vk;
          if (Sk) null === (Wk = (vk = (0, VF.j)(Ok)).prepareDefines) || void 0 === Wk || Wk.call(vk, Ek, Rk, kk, Fk, Bk)
        }
        const ik = kk.ne();
        for (const {
            feature: Ok,
            state: Ek,
            active: Sk
          }
          of Xk) {
          var Yk, Lk;
          if (Sk && !1 === (null === (Yk = (Lk = (0, VF.j)(Ok)).isReadyForSubMesh) || void 0 === Yk ? void 0 : Yk.call(Lk, Ek, Rk, kk, ik))) return !1
        }
        return !0
      }
    }

    function da(kk, Fk, Bk) {
      return kk.codeVersion !== Fk.version && function(kk, Fk) {
        const Bk = [],
          Rk = [];
        for (const {
            feature: Jk,
            state: Ak,
            active: ek
          }
          of Fk.features) {
          var tk, ak, Xk, bk;
          if (ek) sa(null === (tk = (ak = (0, VF.j)(Jk)).getCustomCode) || void 0 === tk ? void 0 : tk.call(ak, Ak, "vertex", Lk.e.WGSL), Bk), sa(null === (Xk = (bk = (0, VF.j)(Jk)).getCustomCode) || void 0 === Xk ? void 0 : Xk.call(bk, Ak, "fragment", Lk.e.WGSL), Rk)
        }
        const wk = [];
        for (const {
            feature: Jk,
            state: Ak
          }
          of Fk.features) {
          var dk, sk;
          const kk = null === (dk = (sk = (0, VF.j)(Jk)).getUniforms) || void 0 === dk ? void 0 : dk.call(sk, Ak, Lk.e.WGSL);
          for (const Fk of null !== (Vk = null === kk || void 0 === kk ? void 0 : kk.ubo) && void 0 !== Vk ? Vk : []) {
            var Vk;
            Fk.size && Fk.type && wk.push({
              name: Fk.name,
              type: Fk.type,
              arraySize: Fk.arraySize
            })
          }
        }
        kk.vertexCode = Bk, kk.fragmentCode = Rk, kk.pluginUniforms = wk, kk.codeKey = JSON.stringify([Bk, Rk, wk]), kk.codeVersion = Fk.version
      }(kk, Fk), `${Bk}#${kk.codeKey}`
    }

    function sa(kk, Fk) {
      if (kk)
        for (const Bk in kk) kk[Bk] && Fk.push([Bk, kk[Bk]])
    }
    const Va = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Ja {
      constructor(kk) {
        this.warnOnce = kk, this.states = new Map
      }
      renderState(kk, Fk, Bk, Rk) {
        var tk;
        let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Xk = null !== (tk = kk.sideOrientation) && void 0 !== tk ? tk : Fk.sideOrientation;
        Fk._getWorldMatrixDeterminant() < 0 && (Xk = 0 === Xk ? 1 : 0);
        const bk = "triangle-list" === ak,
          wk = Bk ? kk.alphaMode : 0,
          dk = (!Bk || (0 === wk || kk.forceDepthWrite)) && !kk.disableDepthWrite,
          sk = bk && kk.backFaceCulling ? kk.cullBackFaces ? "back" : "front" : "none",
          Vk = bk && 0 !== Xk ? "ccw" : "cw",
          Jk = kk.depthFunction,
          Ak = bk ? kk.zOffset : 0,
          ek = bk ? kk.zOffsetUnits : 0,
          yk = !kk.disableColorWrite;
        return Rk && Rk.alphaMode === wk && Rk.depthWrite === dk && Rk.depthFunction === Jk && Rk.cullMode === sk && Rk.frontFace === Vk && Rk.zOffset === Ak && Rk.zOffsetUnits === ek && Rk.colourWrite === yk && Rk.topology === ak ? Rk : this.stateFor(wk, dk, Jk, sk, Vk, Ak, ek, yk, ak)
      }
      stateFor(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        const dk = `${kk}|${Fk}|${Bk}|${Rk}|${tk}|${ak}|${Xk}|${bk}|${wk}`;
        let sk = this.states.get(dk);
        if (!sk) {
          var Vk;
          const Jk = kk ? pt(kk) : null;
          kk && !Jk && this.warnOnce(`alpha:${kk}`, `alpha mode ${kk} is not supported`), sk = {
            key: dk,
            alphaMode: kk,
            depthFunction: Bk,
            zOffset: ak,
            zOffsetUnits: Xk,
            topology: wk,
            blend: Jk,
            depthWrite: Fk,
            depthCompare: Bk && null !== (Vk = Va.get(Bk)) && void 0 !== Vk ? Vk : null,
            cullMode: Rk,
            frontFace: tk,
            depthBias: -Xk,
            depthBiasSlopeScale: -ak,
            colourWrite: bk
          }, this.states.set(dk, sk)
        }
        return sk
      }
    }
    var Aa = Bk(37071);

    function ea(kk) {
      if (!kk.frozen) return -1;
      let Fk = kk.version;
      for (const {
          feature: Bk,
          state: Rk,
          active: tk
        }
        of kk.features) {
        if (!tk || !Bk.bind) continue;
        const kk = (0, VF.j)(Bk).uniformsVersion;
        if (!kk) return -1;
        Fk += kk(Rk)
      }
      return Fk
    }
    class ya {
      constructor(kk, Fk, Bk) {
        this.slots = kk, this.data = Fk, this.textures = Bk, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(kk, Fk) {
        this.write4(kk, Fk, 0, 0, 0, 1)
      }
      updateFloat2(kk, Fk, Bk) {
        this.write4(kk, Fk, Bk, 0, 0, 2)
      }
      updateFloat3(kk, Fk, Bk, Rk) {
        this.write4(kk, Fk, Bk, Rk, 0, 3)
      }
      updateFloat4(kk, Fk, Bk, Rk, tk) {
        this.write4(kk, Fk, Bk, Rk, tk, 4)
      }
      updateVector3(kk, Fk) {
        this.write4(kk, Fk.x, Fk.y, Fk.z, 0, 3)
      }
      updateVector4(kk, Fk) {
        this.write4(kk, Fk.x, Fk.y, Fk.z, Fk.w, 4)
      }
      updateColor3(kk, Fk) {
        this.write4(kk, Fk.r, Fk.g, Fk.b, 0, 3)
      }
      updateColor4(kk, Fk, Bk) {
        this.write4(kk, Fk.r, Fk.g, Fk.b, Bk, 4)
      }
      updateFloatsFrom(kk, Fk, Bk, Rk) {
        const tk = this.slots.get(kk);
        if (!tk) return;
        const ak = this.data,
          Xk = tk.offset;
        for (let bk = 0; bk < Rk; bk++) ak[Xk + bk] = Fk[Bk + bk]
      }
      updateFloat3TimesFloats(kk, Fk, Bk, Rk) {
        const tk = this.slots.get(kk);
        if (!tk) return;
        const ak = this.data,
          Xk = tk.offset;
        ak[Xk] = Fk[Bk] * Rk[0], ak[Xk + 1] = Fk[Bk + 1] * Rk[1], ak[Xk + 2] = Fk[Bk + 2] * Rk[2]
      }
      M_(kk, Fk) {
        const Bk = this.slots.get(kk);
        Bk && this.data.set(Fk.m, Bk.offset)
      }
      updateMatrixFloats(kk, Fk) {
        const Bk = this.slots.get(kk);
        Bk && this.data.set(Fk, Bk.offset)
      }
      updateFloatArray(kk, Fk) {
        const Bk = this.slots.get(kk);
        if (!Bk) return;
        if (!Bk.arraySize || Bk.stride === Bk.floats) return void this.data.set(Fk, Bk.offset);
        const Rk = Math.min(Fk.length, Bk.floats * Bk.arraySize);
        for (let tk = 0; tk < Rk; tk++) this.data[Bk.offset + Math.floor(tk / Bk.floats) * Bk.stride + tk % Bk.floats] = Fk[tk]
      }
      updateArray(kk, Fk) {
        this.updateFloatArray(kk, Fk)
      }
      setTexture(kk, Fk) {
        this.textures.set(kk, Fk), this.expected.delete(kk)
      }
      expectTexture(kk) {
        this.textures.set(kk, null), this.expected.add(kk)
      }
      write4(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = this.slots.get(kk);
        if (!Xk) return;
        const bk = this.data,
          wk = Xk.offset;
        bk[wk] = Fk, ak > 1 && (bk[wk + 1] = Bk), ak > 2 && (bk[wk + 2] = Rk), ak > 3 && (bk[wk + 3] = tk)
      }
    }

    function fa(kk, Fk) {
      const Bk = PR,
        Rk = Aa.h,
        tk = kk.lights,
        ak = Math.min(kk.lightCount, 8);
      for (let Xk = 0; Xk < ak; Xk++) {
        const kk = Bk.lights + Xk * Bk.lightStride,
          ak = Xk * Aa.c;
        Fk[kk] = tk[ak + Rk.vector], Fk[kk + 1] = tk[ak + Rk.vector + 1], Fk[kk + 2] = tk[ak + Rk.vector + 2], Fk[kk + 3] = tk[ak + Rk.kind] === Aa.g.directional ? 1 : 0, Fk[kk + 4] = tk[ak + Rk.diffuse], Fk[kk + 5] = tk[ak + Rk.diffuse + 1], Fk[kk + 6] = tk[ak + Rk.diffuse + 2], Fk[kk + 7] = tk[ak + Rk.range], Fk[kk + 8] = tk[ak + Rk.specular], Fk[kk + 9] = tk[ak + Rk.specular + 1], Fk[kk + 10] = tk[ak + Rk.specular + 2], Fk[kk + 11] = tk[ak + Rk.range]
      }
      Fk[Bk.fogInfos] = kk.fogMode, Fk[Bk.fogInfos + 1] = kk.fogStart, Fk[Bk.fogInfos + 2] = kk.fogEnd, Fk[Bk.fogInfos + 3] = kk.fogDensity, Fk[Bk.fogColour] = kk.fogColour[0], Fk[Bk.fogColour + 1] = kk.fogColour[1], Fk[Bk.fogColour + 2] = kk.fogColour[2], Fk[Bk.outputHeight] = kk.renderHeight, Fk[Bk.animTick] = kk.animTick, Fk[Bk.timeMs] = kk.timeMs
    }
    class ma {
      constructor(kk) {
        this.instancesOf = kk
      }
      refreshModelUniforms(kk, Fk, Bk, Rk) {
        const tk = ea(Bk);
        if (tk >= 0 && tk === Fk.heldVersion && Fk.textures.get("diffuseSampler") === Bk.diffuseTexture && Fk.textures.get("reflectionCubeSampler") === Bk.reflectionTexture && Fk.textures.get("opacitySampler") === Bk.opacityTexture && Fk.textures.get("emissiveSampler") === Bk.emissiveTexture) return !0;
        if (tk < 0)
          for (const ak of this.instancesOf(Bk)) ak.heldVersion = -1;
        return this.writeModelUniforms(kk, Fk, Bk, Rk), Fk.heldVersion = tk, !1
      }
      writeModelUniforms(kk, Fk, Bk, Rk) {
        const {
          ubo: tk
        } = Fk, ak = Bk.diffuseTexture, Xk = Bk.diffuseColor;
        tk.updateFloat4("vDiffuseColor", Xk[0], Xk[1], Xk[2], Bk.alpha), ak && (tk.updateFloat2("vDiffuseInfos", ak.uvSet, ak.level), tk.updateMatrixFloats("diffuseMatrix", ak.matrix)), tk.updateFloat("alphaCutOff", Bk.alphaCutOff), tk.updateFloatsFrom("vEmissiveColor", Bk.emissiveColor, 0, 3), tk.updateFloat3TimesFloats("vAmbientColor", Rk.ambientColour, 0, Bk.ambientColor);
        const bk = Bk.specularColor;
        tk.updateFloat4("vSpecularColor", bk[0], bk[1], bk[2], Bk.specularPower), tk.setTexture("diffuseSampler", ak);
        const wk = Bk.opacityTexture;
        wk && (tk.updateFloat2("vOpacityInfos", wk.uvSet, wk.level), tk.updateMatrixFloats("opacityMatrix", wk.matrix)), tk.setTexture("opacitySampler", wk);
        const dk = Bk.emissiveTexture;
        dk && (tk.updateFloat2("vEmissiveInfos", dk.uvSet, dk.level), tk.updateMatrixFloats("emissiveMatrix", dk.matrix)), tk.setTexture("emissiveSampler", dk);
        const sk = Bk.reflectionTexture;
        sk && tk.updateMatrixFloats("reflectionMatrix", sk.matrix), tk.updateFloat2("vReflectionInfos", sk ? sk.level * kk.iblIntensity : 0, Bk.roughness), tk.setTexture("reflectionCubeSampler", sk);
        const Vk = kk.ne();
        for (const {
            feature: ek,
            state: yk,
            active: fk
          }
          of Bk.features) {
          var Jk, Ak;
          if (fk) null === (Jk = (Ak = (0, VF.j)(ek)).bind) || void 0 === Jk || Jk.call(Ak, yk, tk, kk, Vk)
        }
      }
    }

    function Wa(kk) {
      const Fk = kk.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Fk) ? "u32" : /i32|^vec\di$/.test(Fk) ? "i32" : "f32"
    }

    function va(kk, Fk) {
      const Bk = kk.getSize(),
        Rk = Wa(Fk),
        tk = kk => 4 === Bk ? `${kk}x4` : 2 === Bk ? `${kk}x2` : null;
      if ("f32" === Rk) {
        if (5126 === kk.type) return 1 === Bk ? "float32" : Bk >= 2 && Bk <= 4 ? `float32x${Bk}` : null;
        if (!kk.normalized) return null;
        switch (kk.type) {
          case 5121:
            return tk("unorm8");
          case 5120:
            return tk("snorm8");
          case 5123:
            return tk("unorm16");
          case 5122:
            return tk("snorm16")
        }
        return null
      }
      const ak = "u32" === Rk ? "uint" : "sint";
      switch (kk.type) {
        case 5125:
        case 5124:
          return 1 === Bk ? `${ak}32` : Bk <= 4 ? `${ak}32x${Bk}` : null;
        case 5121:
        case 5120:
          return tk(`${ak}8`);
        case 5123:
        case 5122:
          return tk(`${ak}16`)
      }
      return null
    }

    function ia(kk) {
      var Fk;
      const Bk = /(8|16|32)(?:x(\d))?$/.exec(kk);
      return Bk ? Number(Bk[1]) / 8 * Number(null !== (Fk = Bk[2]) && void 0 !== Fk ? Fk : 1) : 4
    }
    class Ya {
      constructor(kk, Fk, Bk) {
        this.resources = kk, this.limits = Fk, this.warnOnce = Bk, this.layouts = new Map
      }
      resolveInputs(kk, Fk, Bk, Rk) {
        const tk = [],
          ak = Bk.program.attributes,
          Xk = [];
        for (let sk = 0; sk < ak.length; sk++) {
          const Bk = ak[sk],
            bk = Bk.optional ? null : this.resources.vertexInput(kk, Bk.name, Rk);
          if (!bk) {
            const kk = Wa(Bk.type),
              Fk = "u32" === kk ? "uint32x4" : "i32" === kk ? "sint32x4" : "float32x4";
            Xk.push(null);
            const Rk = tk.find((kk => null === kk.data));
            Rk ? Rk.attributes.push({
              shaderLocation: sk,
              offset: 0,
              format: Fk
            }) : tk.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: sk,
                offset: 0,
                format: Fk
              }]
            });
            continue
          }
          const wk = bk.getBuffer();
          Xk.push(bk);
          const dk = va(bk, Bk.type);
          if (!dk) return this.warnOnce(`format:${Fk}:${Bk.name}`, `${Fk}'s ${Bk.name} (type ${bk.type}, size ${bk.getSize()}) has no WebGPU vertex format`), null;
          const Vk = bk.getIsInstanced() ? "instance" : "vertex",
            Jk = bk.byteStride,
            Ak = ia(dk),
            ek = tk.find((kk => kk.data === wk && kk.stride === Jk && kk.step === Vk && bk.byteOffset >= kk.base && bk.byteOffset - kk.base + Ak <= Jk));
          ek ? ek.attributes.push({
            shaderLocation: sk,
            offset: bk.byteOffset - ek.base,
            format: dk
          }) : tk.push({
            data: wk,
            base: bk.byteOffset,
            stride: Jk,
            step: Vk,
            attributes: [{
              shaderLocation: sk,
              offset: 0,
              format: dk
            }]
          })
        }
        if (tk.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Fk}`, `${Fk} needs ${tk.length} vertex buffers`), null;
        let bk = "";
        for (const sk of tk) {
          bk += `${sk.stride}${"instance"===sk.step?"i":"v"}`;
          for (const kk of sk.attributes) bk += `,${kk.shaderLocation}:${kk.offset}:${kk.format}`;
          bk += ";"
        }
        let wk = this.layouts.get(bk);
        wk || (wk = {
          key: bk,
          buffers: tk.map((kk => ({
            arrayStride: kk.stride,
            stepMode: kk.step,
            attributes: kk.attributes
          }))),
          instanceEnds: tk.map((kk => {
            let Fk = -1;
            if ("instance" === kk.step)
              for (const Bk of kk.attributes) Fk = Math.max(Fk, Bk.offset + ia(Bk.format));
            return Fk
          }))
        }, this.layouts.set(bk, wk));
        const dk = tk.map((kk => kk.base));
        return {
          program: Bk,
          sources: Xk,
          layout: wk,
          slotData: tk.map((kk => kk.data)),
          f_: dk,
          buffers: [],
          offsets: dk,
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

    function oa(kk, Fk, Bk, Rk) {
      const tk = Fk.program.program.attributes;
      for (let ak = 0; ak < tk.length; ak++) {
        if ((tk[ak].optional ? null : Bk.vertexInput(kk, tk[ak].name, Rk)) !== Fk.sources[ak]) return !1
      }
      return !0
    }
    const La = 64;
    class Oa {
      constructor(kk, Fk, Bk, Rk) {
        this.device = kk, this.layout = Fk, this.frameBuffer = Bk, this.label = Rk, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(kk) {
        if (kk * La <= this.data.length) return !1;
        let Fk = 2 * this.data.length;
        for (; kk * La > Fk;) Fk *= 2;
        const Bk = new Float32Array(Fk);
        return Bk.set(this.data), this.data = Bk, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tk = this.data,
          ak = kk * La;
        let Xk = tk[ak + 16] !== Bk;
        for (let bk = 0; bk < 16 && !Xk; bk++) Xk = tk[ak + bk] !== Fk[Rk + bk];
        if (Xk) {
          for (let kk = 0; kk < 16; kk++) tk[ak + kk] = Fk[Rk + kk];
          tk[ak + 16] = Bk
        }
        return Xk
      }
      upload(kk, Fk) {
        this.device.queue.writeBuffer(this.buffer, kk * hR, this.data, kk * La, (Fk - kk) * La)
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

    function Ea(kk) {
      return kk.gpu[Hk.i.lite] ??= kk.materials.map(((Fk, Bk) => ({
        parts: kk,
        range: Bk,
        owner: kk.owner
      })))
    }

    function Sa(kk) {
      var Fk, Bk, Rk;
      return null !== (Fk = null !== (Bk = null === (Rk = kk.parts.materials[kk.range]) || void 0 === Rk ? void 0 : Rk.mirror) && void 0 !== Bk ? Bk : kk.owner.material) && void 0 !== Fk ? Fk : null
    }
    const Na = ["opaque", "alphaTest", "transparent", "text"];
    class Ha {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, sF.b)("Lite: ")
      }
      attach(kk, Fk) {
        this.model = kk, this.mirror = Fk
      }
      get worlds() {
        return this.model.nodes.iJ
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(kk) {
        return this.groups.get(kk)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(kk) {
        for (const [Fk, Bk] of this.groups)
          for (const Rk of Na)
            for (const tk of Bk[Rk].units) kk(tk.owner, "text" === Rk ? "transparent" : Rk, Fk)
      }
      select(kk, Fk) {
        this.frame++, this.selectedCount = 0;
        for (const bk of this.groups.values())
          for (const kk of Na) bk[kk].units.length = 0, bk[kk].rows.length = 0;
        const {
          model: Bk,
          mirror: Rk
        } = this;
        if (!Bk || !Rk || !kk) return;
        this.rows.length < Bk.nodes.KV && (this.rows = new Int32Array(Bk.nodes.KV));
        const tk = this.rows,
          ak = Bk.meshes;
        for (let bk = 0; bk < ak.looseCount; bk++) {
          const kk = ak.loose[bk],
            Bk = Rk.nodes[kk];
          Bk && !Bk.isBlocked && Bk.isEnabled() && !Bk.ta.hasAZeroComponent && ak.selects(kk, Fk.frustum) && (this.activate(Bk, kk), this.selectedCount++)
        }
        const Xk = ak.selectTextPlanes(Fk.frustum, tk);
        for (let bk = 0; bk < Xk; bk++) {
          const Fk = tk[bk],
            ak = Rk.nodes[Fk],
            Xk = Bk.meshes.parts[Fk];
          if (!ak.isVisible || !(ak.visibility > 0) || 0 === (ak.layerMask & kk.layerMask) || !Xk) continue;
          const wk = this.groupOf(Bk.meshes.layer[Fk]).text;
          for (const kk of Ea(Xk)) wk.units.push(kk), wk.rows.push(Fk);
          this.selectedCount++
        }
      }
      instanceBatch(kk) {
        const Fk = this.batchOf(kk);
        return Fk.dispatched || (Fk.dispatched = Fk.renderSelf = !0, Fk.row = this.rowOf(kk)), Fk
      }
      rowOf(kk) {
        return kk.row
      }
      activate(kk, Fk) {
        if (!kk.mN) {
          const Bk = kk;
          if (Bk.GRk) {
            const kk = this.batchOf(Bk);
            kk.dispatched = !0, kk.renderSelf = !0, kk.row = Fk
          }
          return void this.dispatch(Bk, Fk, Fk)
        }
        const Bk = kk,
          Rk = Bk.rRk;
        if (Rk._getWorldMatrixDeterminant() >= 0 !== Bk._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Rk.name}`, `A mirrored InstancedMesh of ${Rk.name} is not drawn yet`);
        const tk = this.batchOf(Rk);
        tk.instances.push(Bk), tk.rows.push(Fk), tk.dispatched || (tk.dispatched = !0, this.dispatch(Rk, Fk, this.rowOf(Rk)))
      }
      batchOf(kk) {
        let Fk = this.batches.get(kk);
        return Fk || (Fk = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(kk, Fk)), Fk.frame !== this.frame && (Fk.frame = this.frame, Fk.dispatched = !1, Fk.renderSelf = !1, Fk.instances.length = 0, Fk.rows.length = 0), Fk
      }
      dispatch(kk, Fk, Bk) {
        const {
          layer: Rk,
          parts: tk
        } = this.model.meshes;
        if (!tk[Fk]) return;
        const ak = this.groupOf(Rk[Fk]),
          Xk = kk;
        for (const bk of Ea(tk[Fk])) {
          const kk = Sa(bk);
          if (!kk) continue;
          const Fk = kk.needAlphaBlendingForMesh(Xk) ? ak.transparent : kk.needAlphaTestingForMesh(Xk) ? ak.alphaTest : ak.opaque;
          Fk.units.push(bk), Fk.rows.push(Bk)
        }
      }
      groupOf(kk) {
        let Fk = this.groups.get(kk);
        return Fk || (Fk = {
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
        }, this.groups.set(kk, Fk)), Fk
      }
    }
    class ua {
      constructor() {
        this.Hb = new Map, this.enabled = [], this.groups = new Map, this.lA = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(kk) {
        if (this.Hb.has(kk)) return;
        const Fk = {
          mesh: kk,
          observer: kk.onEffectiveEnabledStateChangedObservable.add((kk => {
            this.lY(Fk, kk)
          })),
          index: -1,
          steady: null
        };
        this.Hb.set(kk, Fk), this.lY(Fk, kk.isEnabled())
      }
      remove(kk) {
        const Fk = this.Hb.get(kk);
        Fk && (Fk.observer.remove(!0), this.lY(Fk, !1), this.Hb.delete(kk))
      }
      base(kk) {
        return this.Hb.get(kk)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Hb: this.Hb.size
        }
      }
      forEachSelected(kk) {
        for (const [Fk, Bk] of this.groups) {
          for (const Rk of Bk.opaque) kk(Rk.owner, "opaque", Fk);
          for (const Rk of Bk.transparent) kk(Rk.owner, "transparent", Fk)
        }
        for (const Fk of this.lA) kk(Fk.mesh, "opaque", 0)
      }
      group(kk) {
        return this.groups.get(kk)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(kk, Fk) {
        this.drawn = 0, this.selected = 0, this.lA.length = 0;
        for (const Rk of this.groups.values()) Rk.opaque.length = 0, Rk.transparent.length = 0;
        if (!kk) return;
        const Bk = this.enabled;
        for (let Rk = 0; Rk < Bk.length; Rk++) {
          const tk = Bk[Rk];
          if (tk.steady && Fk(tk, kk)) {
            this.selected++, this.lA.push(tk);
            continue
          }
          const ak = tk.mesh;
          if (ak.isBlocked || ak.ta.hasAZeroComponent) continue;
          if (!ak.isVisible || ak.visibility <= 0 || 0 === (ak.layerMask & kk.layerMask)) continue;
          if (ak.GRk) {
            this.warned.has(ak.name) || (this.warned.add(ak.name), console.warn(`Lite: thin instance base ${ak.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Xk
          } = ak;
          if (!Xk) continue;
          ak.computeWorldMatrix(), this.selected++;
          const bk = this.listsFor(ak.renderingGroupId);
          for (const kk of Ea(Xk)) {
            const Fk = Sa(kk);
            Fk && (Fk.needAlphaBlendingForMesh(ak) ? bk.transparent.push(kk) : bk.opaque.push(kk))
          }
        }
      }
      lY(kk, Fk) {
        if (Fk === kk.index >= 0) return;
        kk.steady = null;
        const Bk = this.enabled;
        if (Fk) kk.index = Bk.length, Bk.push(kk);
        else {
          const Fk = Bk.pop();
          Fk !== kk && (Bk[kk.index] = Fk, Fk.index = kk.index), kk.index = -1
        }
      }
      listsFor(kk) {
        let Fk = this.groups.get(kk);
        return Fk || (Fk = {
          opaque: [],
          transparent: []
        }, this.groups.set(kk, Fk)), Fk
      }
    }
    var Ma = Bk(39144);
    class ga {
      constructor() {
        this.bundle = null, this.stale = !0, this.Hb = new Set
      }
    }
    class Ua {
      constructor(kk, Fk, Bk) {
        this.device = kk, this.slots = Fk, this.host = Bk, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new ga, this.WE = new ga, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new lt, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(kk) {
          var Fk, Bk;
          let Rk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Fk = null === (Bk = globalThis.navigator) || void 0 === Bk ? void 0 : Bk.userAgent) && void 0 !== Fk ? Fk : "";
          const tk = kk.adapterInfo;
          return "intel" === (null === tk || void 0 === tk ? void 0 : tk.vendor) && "gen-12lp" === tk.architecture && Rk.includes("Windows")
        }(kk), (0, Ma.L)(this.direct)
      }
      kY() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Ma.L)(this.directThisFrame)
      }
      add(kk, Fk, Bk, Rk) {
        let tk = this.records.get(kk);
        return tk || (tk = this.createRecord(kk), this.records.set(kk, tk)), tk.recorded && Ga(tk, Fk) || (this.bundleOf(tk).stale = !0), this.place(tk, Fk, Bk, Rk), tk
      }
      bundleOf(kk) {
        return kk.WE ? this.WE : this.main
      }
      addAgain(kk, Fk, Bk, Rk) {
        kk.recorded || (this.bundleOf(kk).stale = !0), this.place(kk, Fk, Bk, Rk)
      }
      place(kk, Fk, Bk, Rk) {
        kk.seen = this.frame, kk.WE && null === kk.draw && (this.WE.stale = !0), kk.draw = Fk, this.drawn++, Bk && this.slots.write(kk.slot, Bk, Rk) && (this.slotsFrom = Math.min(this.slotsFrom, kk.slot), this.slotsTo = Math.max(this.slotsTo, kk.slot));
        const tk = this.args,
          ak = 5 * kk.slot;
        tk[ak] === Fk.count && tk[ak + 1] === Fk.instances && tk[ak + 2] === Fk.first || (tk[ak] = Fk.count, tk[ak + 1] = Fk.instances, tk[ak + 2] = Fk.first, this.argsDirty = !0, this.WE.stale ||= kk.WE)
      }
      FY() {
        for (const kk of this.records.values()) kk.seen !== this.frame && (kk.draw && (kk.draw = null, this.args[5 * kk.slot + 1] = 0, this.argsDirty = !0, this.WE.stale ||= kk.WE), this.frame - kk.seen > 120 && (this.records.delete(kk.unit), this.freeSlots.push(kk.slot), kk.recorded && (this.bundleOf(kk).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(kk) {
        for (const Fk of this.records.values()) Fk.draw && Fk.seen === this.frame && !Fk.WE && kk(Fk.draw, this.slots.data, Fk.slot * hR / 4)
      }
      resourceDestroyed(kk) {
        this.main.stale ||= this.main.Hb.has(kk), this.WE.stale ||= this.WE.Hb.has(kk)
      }
      execute(kk, Fk, Bk) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(kk, Fk, Bk, "direct"), this.drawn;
        const Rk = this.host.sceneGroup(Fk);
        if (!Rk) return this.main.bundle = null, this.WE.bundle = null, this.recordedSceneGroup = null, this.encode(kk, Fk, Bk, "direct"), this.drawn;
        this.recordedTarget === Bk && this.recordedSceneGroup === Rk || (this.recordedTarget = Bk, this.recordedSceneGroup = Rk, this.main.stale = !0, this.WE.stale = !0);
        const tk = this.main,
          ak = this.WE;
        let Xk = !1;
        !tk.stale && tk.bundle || (tk.bundle = this.record(Fk, Bk, Rk, "indirect"), Xk = !0);
        const bk = (0, Ma.n)();
        return (ak.stale || this.rangedEpoch !== bk) && (this.rangedEpoch = bk, ak.bundle = this.drawsRanged() ? this.record(Fk, Bk, Rk, "WE") : this.noRangedBundle(), Xk = !0), Xk && (this.bundles = ak.bundle ? [tk.bundle, ak.bundle] : [tk.bundle]), kk.executeBundles(this.bundles), kk.setBindGroup(0, Rk), this.drawn
      }
      record(kk, Fk, Bk, Rk) {
        const tk = this.device.createRenderBundleEncoder({
          label: "WE" === Rk ? "thin-bases-ranged" : "thin-bases",
          colorFormats: kk._colorFormat ? [kk._colorFormat] : [],
          depthStencilFormat: kk._depthStencilFormat,
          sampleCount: kk._sampleCount
        });
        return tk.setBindGroup(0, Bk), this.encode(tk, kk, Fk, Rk), tk.finish()
      }
      noRangedBundle() {
        for (const kk of this.records.values()) kk.WE && (kk.recorded = !1);
        return this.WE.Hb.clear(), this.WE.stale = !1, null
      }
      drawsRanged() {
        for (const kk of this.records.values())
          if (kk.WE && kk.draw) return !0;
        return !1
      }
      encode(kk, Fk, Bk, Rk) {
        const tk = [];
        for (const wk of this.records.values()) "direct" !== Rk && wk.WE !== ("WE" === Rk) || (wk.recorded = !1, wk.draw && tk.push(wk));
        tk.sort(Ta);
        const ak = "direct" === Rk ? null : "WE" === Rk ? this.WE : this.main;
        null === ak || void 0 === ak || ak.Hb.clear(), this.binder.reset();
        let Xk = !1;
        for (const wk of tk) {
          var bk;
          const tk = wk.draw,
            dk = this.host.pipelineFor(tk, Fk, Bk);
          if (!dk) {
            this.host.pipelineCompiling(tk, Bk) ? Xk = !0 : ak && this.keep(wk, tk, ak.Hb);
            continue
          }
          let sk;
          if (wk.WE && "indirect" !== Rk) {
            const kk = wk.unit.owner;
            sk = "direct" === Rk && (0, Ma.v)(kk) || (0, Ma.p)(kk) || void 0
          }
          if (ak && this.keep(wk, tk, ak.Hb), 0 === (null === (bk = sk) || void 0 === bk ? void 0 : bk.count)) continue;
          this.binder.bind(kk, tk, dk, this.slots.bindGroup, wk.slot * hR);
          const Vk = 5 * wk.slot;
          if ("indirect" === Rk) {
            tk.indexBuffer ? kk.drawIndexedIndirect(this.argsBuffer, 4 * Vk) : kk.drawIndirect(this.argsBuffer, 4 * Vk);
            continue
          }
          const Jk = this.args;
          sk ? ca(kk, null !== tk.indexBuffer, Jk, Vk, sk) : tk.indexBuffer ? kk.drawIndexed(Jk[Vk], Jk[Vk + 1], Jk[Vk + 2], 0, 0) : kk.draw(Jk[Vk], Jk[Vk + 1], Jk[Vk + 2], 0)
        }
        ak && (ak.stale = Xk)
      }
      keep(kk, Fk, Bk) {
        kk.recorded = !0, kk.pipelineKey = Fk.pipelineKey, kk.materialGroup = Fk.material.bindGroup, kk.vertexBuffers.length = 0, kk.vertexBuffers.push(...Fk.vertexBuffers), kk.vertexOffsets = Fk.vertexOffsets, kk.indexBuffer = Fk.indexBuffer, kk.indexFormat = Fk.indexFormat;
        for (const Rk of Fk.vertexBuffers) Bk.add(Rk);
        Fk.indexBuffer && Bk.add(Fk.indexBuffer), Bk.add(Fk.material.buffer);
        for (const Rk of Fk.material.bound) Rk && Bk.add(Rk)
      }
      createRecord(kk) {
        let Fk = this.freeSlots.pop();
        return void 0 === Fk && (Fk = this.slotCount++, this.grow()), {
          unit: kk,
          slot: Fk,
          WE: void 0 !== (0, Ma.p)(kk.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.WE.stale = !0), 5 * this.slotCount > this.args.length) {
          const kk = new Uint32Array(2 * this.args.length);
          kk.set(this.args), this.args = kk, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function ca(kk, Fk, Bk, Rk, tk) {
      const ak = Bk[Rk + 1],
        Xk = tk.data;
      for (let bk = 0; bk < tk.count; bk++) {
        const tk = Math.min(Xk[2 * bk], ak),
          wk = Math.min(Xk[2 * bk + 1], ak - tk);
        0 !== wk && (Fk ? kk.drawIndexed(Bk[Rk], wk, Bk[Rk + 2], 0, tk) : kk.draw(Bk[Rk], wk, Bk[Rk + 2], tk))
      }
    }

    function Ga(kk, Fk) {
      if (kk.pipelineKey !== Fk.pipelineKey || kk.materialGroup !== Fk.material.bindGroup || kk.indexBuffer !== Fk.indexBuffer || kk.indexFormat !== Fk.indexFormat || kk.vertexOffsets !== Fk.vertexOffsets || kk.vertexBuffers.length !== Fk.vertexBuffers.length) return !1;
      for (let Bk = 0; Bk < kk.vertexBuffers.length; Bk++)
        if (kk.vertexBuffers[Bk] !== Fk.vertexBuffers[Bk]) return !1;
      return !0
    }

    function Ta(kk, Fk) {
      return It(kk.draw, Fk.draw)
    }
    const ra = new WeakMap,
      Da = {
        depth: !1,
        sunShadow: !1
      };

    function za(kk, Fk) {
      let Bk = ra.get(kk);
      Bk || (Bk = new Map, ra.set(kk, Bk));
      const Rk = `${Fk.depth?"-depth":""}${Fk.sunShadow?"-shadow":""}${Fk.shadowMask?"-mask":""}`;
      let tk = Bk.get(Rk);
      if (!tk) {
        const ak = [{
          binding: NF.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: NF.h
          }
        }, {
          binding: NF.u,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Fk.depth && ak.push({
          binding: NF.p,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Fk.sunShadow && ak.push(... function() {
          const kk = GPUShaderStage.FRAGMENT,
            Fk = NF.r;
          return [{
            binding: Fk.uniform,
            visibility: kk,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Fk.jJ,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Fk.special,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Fk.volume,
            visibility: kk,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Fk.sampler,
            visibility: kk,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Fk.entities,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Fk.entityGrids,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Fk.shadowMask && ak.push({
          binding: NF.s,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), tk = kk.createBindGroupLayout({
          label: `${Fk.depth?"terrain-":""}shader-pack-inputs${Rk}`,
          entries: ak
        }), Bk.set(Rk, tk)
      }
      return tk
    }

    function Pa(kk) {
      return za(kk, Da)
    }

    function ha(kk, Fk) {
      if (!Fk) return !1;
      const Bk = (0, HF.f)(kk);
      return !!Bk && rB(Bk, Fk)
    }

    function qa(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!sR(Fk)) return [];
      return [za(kk, {
        depth: aR(Fk.packVariant),
        sunShadow: ha(Fk.packVariant, Bk),
        shadowMask: Rk
      })]
    }
    class Ca {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = kk, this.sunShadow = Bk, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(NF.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = kk.createBuffer({
          label: "shader-pack-inputs",
          size: NF.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Rk = (0, NF.v)(Fk);
        this.textures = kk.createBuffer({
          label: "shader-pack-textures",
          size: Rk.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), kk.queue.writeBuffer(this.textures, 0, Rk), this.bindGroup = kk.createBindGroup({
          label: "shader-pack-inputs",
          layout: Pa(kk),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: NF.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: NF.u,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(kk, Fk, Bk) {
        (0, NF.D)(this.data, {
          seconds: kk.seconds(),
          lit: Bk,
          renderOffset: kk.renderOffset(),
          w6: kk.w6(),
          eyePosition: Fk,
          shadowDirection: kk.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Rk = Fk ? this.sunShadow : null;
        if ((Fk || Bk) && !Rk) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!kk && !Rk) return this.bindGroup;
        (kk && kk !== this.depthView || Bk && Bk !== this.maskView) && (this.depthView = null !== kk && void 0 !== kk ? kk : this.depthView, this.maskView = null !== Bk && void 0 !== Bk ? Bk : this.maskView, this.groups.clear());
        const tk = (kk ? 1 : 0) | (Rk ? 2 : 0) | (Bk ? 4 : 0);
        let ak = this.groups.get(tk);
        if (!ak) {
          const Fk = this.entries();
          kk && Fk.push({
            binding: NF.p,
            resource: kk
          }), Rk && Fk.push(...Rk.entries()), Bk && Fk.push({
            binding: NF.s,
            resource: Bk
          }), ak = this.device.createBindGroup({
            label: `${kk||Bk?"terrain-":""}shader-pack-inputs${kk?"-depth":""}${Rk?"-shadow":""}${Bk?"-mask":""}`,
            layout: za(this.device, {
              depth: !!kk,
              sunShadow: !!Rk,
              shadowMask: !!Bk
            }),
            entries: Fk
          }), this.groups.set(tk, ak)
        }
        return ak
      }
      bind(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        kk.setBindGroup(NF.g, this.bindGroupFor(Fk, Bk, Rk))
      }
    }

    function Za(kk, Fk, Bk) {
      if (kk.gpuVersion === Fk.gpuBuffersVersion) return !0;
      let Rk;
      do {
        if (Rk = Fk.gpuBuffersVersion, !pa(kk, Fk, Bk)) return !1
      } while (Fk.gpuBuffersVersion !== Rk);
      return kk.gpuVersion = Rk, kk.fitInstances = 0, !0
    }

    function pa(kk, Fk, Bk) {
      let Rk = null;
      for (let ak = 0; ak < kk.slotData.length; ak++) {
        var tk;
        const Xk = kk.slotData[ak],
          bk = Xk ? Fk.gpuBuffer(Xk) : Bk;
        if (!bk) return !1;
        Xk && kk.layout.instanceEnds[ak] < 0 && Fk.cover(Xk, Number.POSITIVE_INFINITY), kk.buffers[ak] = bk;
        const wk = kk.f_[ak] + (Xk ? Fk.gpuOffset(Xk) : 0);
        wk !== (null !== (tk = Rk) && void 0 !== tk ? tk : kk.offsets)[ak] && (Rk ??= kk.offsets.slice(), Rk[ak] = wk), kk.ends[ak] = Xk ? Fk.gpuEnd(Xk) : bk.size
      }
      return Rk && (kk.offsets = Rk), !0
    }

    function Ka(kk, Fk, Bk, Rk) {
      if (Fk <= kk.fitInstances) return null;
      const {
        layout: tk,
        ends: ak,
        offsets: Xk,
        slotData: bk,
        f_: wk
      } = kk;
      let dk = !1;
      for (let sk = 0; sk < tk.buffers.length; sk++) {
        const kk = tk.instanceEnds[sk];
        if (kk < 0) continue;
        const Rk = (Fk - 1) * tk.buffers[sk].arrayStride + kk;
        if (ak[sk] - Xk[sk] < Rk) return {
          index: sk,
          needed: Rk
        };
        const Vk = bk[sk];
        Vk && Bk.cover(Vk, wk[sk] + Rk) && (dk = !0)
      }
      return dk && Za(kk, Bk, Rk), kk.fitInstances = Fk, null
    }
    var xa = Bk(37512),
      ja = Bk(37540);
    const la = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      na = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Ia = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Qa = `((vertexInputs.aPackedLightLevels >> 16u) | ${dF.b.placed}u)`,
      kX = "u32(vertexInputs.aShaderPackItem.x)",
      FX = `${dF.b.lifeform}u`;

    function BX(kk) {
      return "item" === kk.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const RX = "bloxdSpEnchant",
      tX = "floor(finalWorld[3].xyz)";

    function aX(kk, Fk, Bk) {
      return "placed" === Fk.kind && kk.reads[Bk].includes("bloxdFragmentBlockPosition")
    }

    function XX(kk, Fk) {
      let [Bk, Rk] = kk;
      return Bk === Fk.point && Rk === Fk.code
    }

    function bX(kk, Fk) {
      var Bk, Rk, tk;
      const ak = null === (Bk = kk.find((kk => kk.texture))) || void 0 === Bk ? void 0 : Bk.texture,
        Xk = null === (Rk = kk.find((kk => kk.enchantTier))) || void 0 === Rk ? void 0 : Rk.enchantTier,
        bk = null === (tk = kk.find((kk => kk.overlay))) || void 0 === tk ? void 0 : tk.overlay,
        wk = bk ? Fk.filter((kk => XX(kk, bk))).length : 0;
      return bk && 1 === wk ? {
        texture: ak,
        overlay: bk,
        enchantTier: Xk
      } : {
        texture: ak,
        enchantTier: Xk
      }
    }

    function wX(kk) {
      if ("item" === kk.kind) {
        return {
          vertexFlags: `(${kX} & 0xffffu)`,
          varying: "vPackItem",
          value: kX,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return kk.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Qa,
        varying: "vPackFlags",
        value: Qa,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function dX(kk) {
      return "lifeform" === kk.kind ? FX : "0u"
    }

    function sX(kk) {
      return !!kk.BLOXD_PLUGIN_ENCHANTMENT
    }

    function VX(kk, Fk) {
      const {
        enchantTier: Bk
      } = Fk;
      return Bk && sX(Fk.defines) && "lifeform" === Fk.kind && mX(kk, "enchantTier") ? Bk : null
    }

    function JX(kk, Fk) {
      return sX(Fk.defines) && mX(kk, "enchantSpeed")
    }

    function AX(kk) {
      const {
        overlay: Fk,
        defines: Bk
      } = kk;
      if (!Fk || !Bk.DIFFUSE) return null;
      const Rk = Bk.VERTEXCOLOR || Bk.INSTANCESCOLOR && Bk.INSTANCES;
      return `vec4f(${Fk.colour}.rgb * uniforms.vDiffuseInfos.y${Rk?" * fragmentInputs.vColor.rgb":""}, ${Fk.colour}.a)`
    }
    const eX = "fragmentInputs.vPackTexture";

    function yX(kk) {
      const {
        atlas: Fk,
        defines: Bk,
        texture: Rk
      } = kk;
      if (Fk || !Bk.DIFFUSE) return null;
      if (Rk) return {
        texture: "diffuseSampler",
        ...Rk
      };
      const tk = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===Bk.DIFFUSEDIRECTUV?"vMainUV1":2===Bk.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== kk.kind) return tk;
      if (!Bk.BLOXD_PLUGIN_ANIMATED) return {
        ...tk,
        id: eX
      };
      const ak = Lk.e.WGSL,
        Xk = (0, Lk.Hb)(ak, "uAnimStatesNum"),
        bk = (0, Lk.ib)(ak, (0, xa.f)(ak), Xk),
        wk = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Xk})`,
        layers: [bk],
        uv: `vec2f(${wk}.x, ${wk}.y * ${Xk} - ${bk})`,
        levelUv: wk,
        id: eX
      }
    }

    function fX(kk, Fk) {
      return "box" === Fk.kind && !!kk.hooks.surface && null !== yX(Fk)
    }

    function mX(kk, Fk) {
      return kk.reads.fragment.includes(Fk)
    }

    function WX(kk) {
      return !!kk.BLOXD_LIGHTING && !kk.BLOXD_UNLIT
    }

    function vX(kk, Fk, Bk, Rk) {
      const tk = kk.filter((kk => {
        let [Bk, Rk] = kk;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === Bk && Rk === Fk
      }));
      if (1 !== tk.length) throw new Error(`A model program for shader packs has ${0===tk.length?"no":"more than one"} ${Rk} code before fog (lite/modelShaderPack.ts)`);
      return kk.map((kk => kk === tk[0] ? [kk[0], Bk] : kk))
    }

    function iX(kk, Fk, Bk, Rk) {
      const {
        hooks: tk
      } = kk, {
        kind: ak,
        defines: Xk
      } = Fk, bk = [...Bk];
      var wk;
      Fk.atlas && tk.surface && bk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", ZB("atlasIdxIn")]), "item" === ak && bk.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Lk.i)(Lk.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), fX(kk, Fk) && bk.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Lk.i)(Lk.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (wk = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${qB}[min(u32(${wk}) - 1u, arrayLength(&${qB}) - 1u)], ${wk} > 0.5);\n`)]);
      const dk = wX(Fk);
      dk && (tk.surface || tk.light) && bk.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${dk.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${dk.varying} = ${dk.value};`]);
      let sk = Rk;
      if (aX(kk, Fk, "fragment") && (bk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${tX});`]), sk = [...sk, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), mX(kk, "localPosition") && bk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${BX(Fk)};`]), sX(Xk) && tk.surface) {
        JX(kk, Fk) && bk.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const Bk = VX(kk, Fk);
        Bk && bk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Bk});`]);
        const Rk = (0, Lk.rb)(Lk.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        sk = [...vX(sk, (0, ja.h)(Lk.e.WGSL), Rk, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, ja.b)(RX)]]
      }
      const {
        overlay: Vk
      } = Fk;
      Vk && AX(Fk) && tk.surface && (sk = sk.filter((kk => !XX(kk, Vk))));
      const Jk = tk.light ? function(kk) {
        return "placed" === kk.kind ? {
          name: "terrain",
          engine: (0, OF.N)(Lk.e.WGSL),
          pack: (0, OF.bb)(Lk.e.WGSL)
        } : kk.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, OF.D)(Lk.e.WGSL),
          pack: (0, OF.X)(Lk.e.WGSL)
        } : null
      }(Fk) : null;
      if (Jk && (sk = vX(sk, Jk.engine, Jk.pack, `${Jk.name} light`), "placed" !== ak && WX(Xk))) {
        const kk = Xk.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, Lk.Hb)(Lk.e.WGSL, "uEntityLightLevels") : (0, Lk.Ob)(Lk.e.WGSL, "aLightLevels");
        bk.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${OF.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, OF._)(Lk.e.WGSL, kk)])
      }
      return {
        vertexCode: bk,
        fragmentCode: sk
      }
    }

    function YX(kk, Fk, Bk, Rk) {
      return GB(kk, Fk, Bk, Rk, "model")
    }
    const oX = "\t@builtin(position) position: vec4f,\n";

    function LX(kk, Fk) {
      const Bk = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(kk)[0];
      return `${Bk}${Fk}${kk.slice(Bk.length)}`
    }

    function OX(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: tk
      } = Fk, ak = rB(Fk, Rk), {
        kind: Xk,
        defines: bk
      } = Bk, wk = function(kk, Fk) {
        var Bk, Rk, tk;
        const {
          defines: ak
        } = Fk, Xk = wX(Fk), bk = !!ak.FOG, wk = sX(ak), dk = null !== (Bk = null === Xk || void 0 === Xk ? void 0 : Xk.enchantTier) && void 0 !== Bk ? Bk : VX(kk, Fk) ? "fragmentInputs.vPackEnchantTier" : "0u", sk = "lifeform" === Fk.kind && !ak.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Rk = null === Xk || void 0 === Xk ? void 0 : Xk.vertexFlags) && void 0 !== Rk ? Rk : dX(Fk),
          vertexLocalPosition: BX(Fk),
          flags: null !== (tk = null === Xk || void 0 === Xk ? void 0 : Xk.flags) && void 0 !== tk ? tk : dX(Fk),
          normal: "normalW",
          alpha: sk ? "alpha * baseColor.a" : "alpha",
          alphaOut: sk ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: bk ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: bk ? "1.0 - fog" : "0.0",
          enchantTier: dk,
          enchantColour: wk ? `${RX}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: JX(kk, Fk) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: mX(kk, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: AX(Fk)
        }
      }(Fk, Bk), dk = kk.textures.filter((kk => /^textureAtlas\d+$/.test(kk.name))).length, sk = Bk.atlas && dk > 0 ? {
        count: dk,
        layers: Bk.atlas.layers,
        width: Bk.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: kk.material.slots.has("uAnimDataPerTex") ? (Fk, Bk) => NR(Fk, Bk, function(kk) {
          const Fk = kk.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            yJ: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: kk => `uniforms.uAnimDataPerTex[${kk}]${Fk}`
          }
        }(kk)) : null
      } : null, Vk = "placed" === Xk ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Jk = null !== sk && void 0 !== sk ? sk : yX(Bk), Ak = function(kk, Bk) {
        let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,NF.z)()}${zB(Fk,Bk)}${Rk}${KB(kk)}${gB}${Vk}${Fk.code}`
      };
      let {
        vertex: ek,
        fragment: yk
      } = kk;
      const fk = jB(tk, wk);
      if (fk) {
        const kk = aX(Fk, Bk, "vertex") ? `\tbloxdSpCell = ${tX};\n` : "";
        ek = YX(ek, la, `${kk}${fk.slice(1)}${la}`, "vertex")
      }
      const mk = `${PB(Fk,ak,function(kk,Fk){return Fk.TWOSIDEDLIGHTING?kk:`select(-(${kk}), ${kk}, fragmentInputs.frontFacing)`}(wk.normal,bk),wk.flags)}${lB(tk,Fk.strict,Fk.program,Jk,wk)}`;
      mk && (yk = YX(yk, na, `${mk.slice(1)}${na}`, "surface")), ak && Fk.sunShadow && !bk.TWOSIDEDLIGHTING && (yk = YX(yk, oX, `${oX}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Wk = QB(tk);
      if (Wk) {
        const kk = IB(tk, WX(bk), !0, wk);
        yk = YX(yk, Ia, `${kk}${Wk.slice(1)}${Ia}`, "light")
      }
      const vk = fX(Fk, Bk) ? CB : "";
      return {
        ...kk,
        vertex: LX(ek, Ak(sk, !1, vk)),
        fragment: LX(yk, Ak(Jk, ak))
      }
    }
    const EX = {
      name: "earthSky",
      uniqueId: -1
    };
    class SX {
      constructor(kk) {
        this.resources = kk, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const kk of this.instances.values()) kk.released = !0, this.resources.destroyBuffer(kk.buffer);
        this.instances.clear()
      }
    }

    function NX(kk) {
      return kk.failed && null !== kk.packGroup
    }
    class HX {
      constructor(kk, Fk, Bk) {
        this.device = kk, this.resources = Fk, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.A_ = new ua, this.modelMeshes = new Ha, this.thinBundle = void 0, this.binder = new lt, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new ma((kk => this.modelSlot(kk).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, sF.b)("Lite: "), this.renderStates = new Ja(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (kk, Fk) => this.keepSteady(kk, Fk), this.lists = new nt(this.modelMeshes, this.A_, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new wa(Fk, this.warnOnce, ((kk, Fk, Bk) => this.programWithModel(kk, Fk, Bk)), NX), this.vertexLayouts = new Ya(Fk, kk.limits, this.warnOnce), this.sceneLayout = BF(kk), this.frameLayout = kk.createBindGroupLayout({
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
        }), this.frameBuffer = kk.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Oa(kk, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = kk.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Ua(kk, new Oa(kk, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (kk, Fk, Bk) => this.pipelineFor(kk, Fk, Bk),
          pipelineCompiling: (kk, Fk) => !kk.program.failed && !1 !== this.pipelines.get(`${kk.pipelineKey}|${Fk}`),
          sceneGroup: kk => {
            const Fk = Bk(kk);
            return Fk || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Fk
          }
        }), Fk.onDestroy = kk => {
          this.thinBundle.resourceDestroyed(kk)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const tk = {
          order: kk,
          isTransparent: Fk,
          _direct: !Fk,
          bind: (kk, Fk) => this.createBinding(tk, Fk, Bk, Rk)
        };
        return tk
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(kk, Fk, Bk) {
        var Rk;
        let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Fk, this.drawDefines.view = Fk, this.thinBundle.kY(), this.writeFrameUniforms();
        const ak = null !== (Rk = null === tk || void 0 === tk ? void 0 : tk.defineFor("model")) && void 0 !== Rk ? Rk : 0;
        this.drawDefines.modelPackVariant = ak, tk && 0 !== ak && (this.packInputs ??= new Ca(this.device, tk.textureLayers(), this.sunShadow), this.packInputs.write(tk, Fk.eye, tk.bf())), this.lists.clear(), this.slotCount = 0;
        const Xk = kk.activeCamera;
        this.A_.select(Xk, this.keepSteadyBase), this.modelMeshes.select(Xk, Fk), Bk && this.pushEarthSky(Bk), this.lists.collect(kk), this.thinBundle.FY(), this.uploadMeshSlots()
      }
      pushDraws(kk, Fk, Bk, Rk, tk, ak) {
        let Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const bk = ak.length;
        for (let wk = 0; wk < Bk; wk++) {
          const Bk = Fk[wk];
          let bk = this.retainedDraw(kk, Bk, Rk, tk);
          if (void 0 === bk && (bk = this.drawFor(kk, Bk, Rk, tk), this.retain(Bk, bk)), bk) {
            const kk = Bk.owner,
              Fk = Xk ? Xk[wk] : -1;
            bk.slotOffset = Fk < 0 ? this.writeMeshSlot(kk.getWorldMatrix().m, kk.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Fk], 16 * Fk), ak.push(bk)
          }
        }
        return ak.length - bk
      }
      bundleDraws(kk, Fk, Bk) {
        let Rk = 0;
        for (const tk of Fk) {
          let Fk = this.retainedDraw(kk, tk, Bk, !1);
          const ak = void 0 !== Fk;
          if (void 0 === Fk && (Fk = this.drawFor(kk, tk, Bk, !1), this.retain(tk, Fk)), Fk) {
            const kk = tk.owner,
              Bk = this.thinBundle.add(tk, Fk, kk.getWorldMatrix().m, kk.visibility);
            ak && this.steadyFrom(tk, Fk, Bk), Rk++
          }
        }
        return Rk
      }
      steadyFrom(kk, Fk, Bk) {
        const Rk = kk.owner,
          tk = this.A_.base(Rk),
          ak = Rk.material,
          {
            drawState: Xk,
            instance: bk
          } = Fk.inputs.retained;
        if (!tk || !ak || 1 !== kk.parts.materials.length || Sa(kk) !== ak) return;
        const wk = tk.steady ??= {
          unit: kk,
          material: ak,
          visibility: 1,
          draw: Fk,
          record: Bk,
          drawState: Xk,
          instance: bk,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        wk.unit = kk, wk.material = ak, wk.visibility = Rk.visibility, wk.draw = Fk, wk.record = Bk, wk.drawState = Xk, wk.instance = bk, wk.bindGroup = bk.bindGroup, wk.gpuVersion = this.resources.gpuBuffersVersion, wk.fitInstances = Fk.inputs.fitInstances, wk.worldFlag = Rk.getWorldMatrix().updateFlag, wk.handedFrame = this.frame
      }
      keepSteady(kk, Fk) {
        const Bk = kk.steady;
        if (Bk.handedFrame !== this.frame - 1 || (this.frame + Bk.phase) % 8 === 0) return !1;
        const Rk = kk.mesh,
          {
            unit: tk,
            draw: ak,
            instance: Xk,
            drawState: bk
          } = Bk,
          wk = Rk.forcedInstanceCount || Rk.i_;
        if (!Rk.isVisible || Rk.GRk || Rk.visibility !== Bk.visibility || 0 === (Rk.layerMask & Fk.layerMask) || Rk.material !== Bk.material || 0 !== Rk.renderingGroupId || Rk.hasVertexAlpha || !this.drawDefines.definesHold(bk, tk, bk.instancing) || Bk.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(ak.inputs, tk, bk.instancing, ak.program) || ak.program.failed || Xk.released || wk <= 0 || wk > Bk.fitInstances) return !1;
        if (Xk.frame !== this.frame && this.bindMaterial(Xk, this.modelUniforms.refreshModelUniforms(Rk.XN(), Xk, Xk.model, this.view)), !Xk.bindable || Xk.bindGroup !== Bk.bindGroup) return !1;
        const dk = Rk.computeWorldMatrix(),
          sk = dk.updateFlag !== Bk.worldFlag;
        return Bk.worldFlag = dk.updateFlag, ak.instances = wk, this.thinBundle.addAgain(Bk.record, ak, sk ? dk.m : null, Bk.visibility), Bk.handedFrame = this.frame, this.A_.drawn++, !0
      }
      retainedDraw(kk, Fk, Bk, Rk) {
        const tk = this.inputs.get(Fk),
          ak = null === tk || void 0 === tk ? void 0 : tk.retained;
        if (!tk || !ak) return;
        const {
          drawState: Xk,
          program: bk,
          instance: wk,
          instancing: dk
        } = ak, sk = Fk.owner;
        if (Ba(sk) !== dk) return;
        const Vk = this.instanceCount(sk, dk);
        if (Vk <= 0) return null;
        if (wk.released || bk.failed || Xk.program !== bk || !this.drawDefines.programCurrent(Xk, Fk, dk, Bk) || !this.inputsStamped(tk, Fk, dk, bk) || sk.isUnIndexed !== ak.unIndexed || this.indexKey(Fk) !== ak.indexData) return;
        if (ak.indexBuffer && ak.gpuVersion !== this.resources.gpuBuffersVersion) {
          const kk = this.resources.gpuBuffer(ak.indexData);
          if (!kk) return;
          ak.indexBuffer = kk, ak.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Jk = !1;
        if (wk.frame !== this.frame && (Jk = this.modelUniforms.refreshModelUniforms(kk, wk, wk.model, this.view)), !this.bindMaterial(wk, Jk) || !this.withGpuBuffers(tk) || !this.instanceBuffersFit(sk.name, tk, Vk)) return null;
        const Ak = this.makeDraw(bk, tk, this.renderStates.renderState(Xk.model, sk, Rk, tk.state), wk, Vk);
        return this.setRange(Ak, Fk, ak.indexBuffer, ak.indexData), Ak
      }
      retain(kk, Fk) {
        const Bk = this.drawDefines.drawStates.get(kk);
        if (!Fk || !Bk || Bk.program !== Fk.program) {
          const Fk = this.inputs.get(kk);
          return void(Fk && (Fk.retained = null))
        }
        const Rk = kk.owner,
          tk = Bk.instancing,
          ak = this.indexKey(kk),
          Xk = Fk.inputs.retained;
        Xk ? (Xk.drawState = Bk, Xk.instancing = tk, Xk.program = Fk.program, Xk.instance = Fk.material, Xk.indexData = ak, Xk.unIndexed = Rk.isUnIndexed, Xk.indexBuffer = Fk.indexBuffer, Xk.gpuVersion = this.resources.gpuBuffersVersion) : Fk.inputs.retained = {
          drawState: Bk,
          instancing: tk,
          program: Fk.program,
          instance: Fk.material,
          indexData: ak,
          unIndexed: Rk.isUnIndexed,
          indexBuffer: Fk.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(kk, Fk, Bk, Rk) {
        const tk = Fk.owner,
          ak = Sa(Fk);
        if (!ak) return null;
        const Xk = ak.getClassName();
        let bk = null;
        if (function(kk) {
            return "LinesMesh" === kk.getClassName()
          }(tk)) {
          if (! function(kk) {
              return "ShaderMaterial" === kk.getClassName() && "color" === kk.shaderPath
            }(ak)) return this.warnOnce(`lines:${Xk}`, `A LinesMesh with a ${Xk} is not drawn yet (${ak.name})`), null;
          bk = tk
        } else if ("StandardMaterial" !== Xk && "LiteMaterial" !== Xk) return this.warnOnce(`class:${Xk}`, `${Xk} is not drawn yet (${ak.name})`), null;
        const wk = Ba(tk),
          dk = this.instanceCount(tk, wk);
        if (dk <= 0) return null;
        const sk = bk ? this.lineProgramFor(tk, Bk, wk) : this.drawDefines.programFor(kk, Fk, ak, Bk, wk);
        if (!sk || sk.failed) return null;
        const Vk = bk ? null : this.drawDefines.drawStates.get(Fk).model,
          Jk = Vk ? this.modelInstance(Vk, sk) : this.materialInstance(tk, sk);
        let Ak = !1;
        if (Jk.frame !== this.frame && (bk ? Wk(Jk.ubo, bk) : Ak = this.modelUniforms.refreshModelUniforms(kk, Jk, Jk.model, this.view)), !this.bindMaterial(Jk, Ak)) return null;
        const ek = this.meshInputs(Fk, sk, wk);
        if (!ek || !this.instanceBuffersFit(tk.name, ek, dk)) return null;
        const yk = this.indexKey(Fk);
        let fk = null;
        if (yk && !tk.isUnIndexed && (fk = this.resources.gpuBuffer(yk), !fk)) return null;
        const mk = this.renderStates.renderState(null !== Vk && void 0 !== Vk ? Vk : ak, tk, Rk, ek.state, bk ? "line-list" : "triangle-list"),
          vk = this.makeDraw(sk, ek, mk, Jk, dk);
        return this.setRange(vk, Fk, fk, yk), vk
      }
      indexKey(kk) {
        const Fk = Xa(kk);
        return Fk ? this.resources.modelIndex(Fk) : null
      }
      setRange(kk, Fk, Bk, Rk) {
        Bk && (kk.indexBuffer = Bk, kk.indexFormat = this.resources.indexFormat(Rk));
        const tk = 4 * Fk.range + (Bk ? 0 : 2);
        kk.unit = Fk, kk.first = Fk.parts.hb[tk], kk.count = Fk.parts.hb[tk + 1]
      }
      makeDraw(kk, Fk, Bk, Rk, tk) {
        Fk.state !== Bk && (Fk.state = Bk, Fk.pipelineKey = `${kk.id}|${Fk.layout.key}|${Bk.key}`, Fk.pipeline = null);
        const ak = Fk.draw ??= {
          program: kk,
          inputs: Fk,
          pipelineKey: "",
          layout: Fk.layout,
          state: Bk,
          material: Rk,
          slotOffset: 0,
          vertexBuffers: Fk.buffers,
          vertexOffsets: Fk.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: tk,
          unit: null
        };
        return ak.program = kk, ak.pipelineKey = Fk.pipelineKey, ak.state = Bk, ak.material = Rk, ak.vertexOffsets = Fk.offsets, ak.indexBuffer = null, ak.instances = tk, ak
      }
      instanceCount(kk, Fk) {
        switch (Fk) {
          case "thin":
            return kk.forcedInstanceCount || kk.i_;
          case "instanced":
            return this.prepareInstances(kk);
          case "none":
            return 1
        }
      }
      prepareInstances(kk) {
        const Fk = function(kk, Fk) {
          const Bk = Fk._userInstancedBuffersStorage,
            Rk = kk.batchUploads.get(Fk);
          if (Rk) {
            var tk;
            if (Rk.layout === (null !== (tk = null === Bk || void 0 === Bk ? void 0 : Bk.interleavedKinds) && void 0 !== tk ? tk : null)) return Rk;
            Rk.release()
          }
          return new Kk(kk, Fk, Bk)
        }(this.resources, kk);
        return Fk.frame !== this.frame && Fk.pack(kk, this.modelMeshes.instanceBatch(kk), this.modelMeshes.worlds, this.frame), Fk.count
      }
      programWithModel(kk, Fk, Bk) {
        const Rk = this.modelSlot(kk),
          tk = da(Rk, kk, Bk),
          ak = this.drawDefines.modelPackKind(kk),
          Xk = ak ? function(kk, Fk, Bk, Rk) {
            const tk = (0, Sk.z)(kk, Ok.i.name),
              ak = [];
            for (const {
                feature: wk,
                state: dk,
                active: sk
              }
              of kk.features) {
              var Xk, bk;
              const kk = sk ? null === (Xk = (bk = (0, VF.j)(wk)).ie) || void 0 === Xk ? void 0 : Xk.call(bk, dk) : void 0;
              kk && ak.push(kk)
            }
            return {
              kind: Fk,
              atlas: null !== tk && void 0 !== tk && tk.active ? (0, Ok.d)(tk.state) : null,
              defines: Bk,
              ...bX(ak, Rk)
            }
          }(kk, ak, Fk, Rk.fragmentCode) : null;
        if (Xk && function(kk) {
            const Fk = kk.defines;
            return (null === kk.atlas || !!Fk.DIFFUSE && 1 === Fk.DIFFUSEDIRECTUV) && !!Fk.NORMAL && !Fk.REFLECTION && !Fk.EMISSIVEASILLUMINATION && !Fk.LINKEMISSIVEWITHDIFFUSE
          }(Xk)) {
          const Bk = this.modelPackProgram(kk, Fk, `${tk}#${ak}#sp${this.drawDefines.modelPackVariant}`, Rk, Xk);
          if (Bk && !Bk.failed) return Bk
        }
        const bk = this.programs.get(tk);
        if (bk || this.unbuildable.has(tk)) return null !== bk && void 0 !== bk ? bk : null;
        let wk;
        try {
          wk = dt({
            defines: ta(Fk),
            vertexCode: Rk.vertexCode,
            fragmentCode: Rk.fragmentCode,
            pluginUniforms: Rk.pluginUniforms
          })
        } catch (dk) {
          return this.unbuildable.add(tk), this.warnOnce(`build:${tk}`, `could not build a program for ${kk.name}: ${String(dk)}`), null
        }
        return this.createProgram(tk, wk, "standard")
      }
      modelPackProgram(kk, Fk, Bk, Rk, tk) {
        const ak = this.programs.get(Bk);
        if (ak || this.unbuildable.has(Bk)) return null !== ak && void 0 !== ak ? ak : null;
        const Xk = this.drawDefines.modelPackVariant;
        let bk;
        try {
          const kk = function(kk) {
              return (0, HF.d)(kk, "model")
            }(Xk),
            Bk = iX(kk, tk, Rk.vertexCode, Rk.fragmentCode);
          bk = OX(dt({
            defines: ta(Fk),
            ...Bk,
            pluginUniforms: Rk.pluginUniforms
          }), kk, tk, !!this.sunShadow)
        } catch (sk) {
          return this.unbuildable.add(Bk), this.warnOnce(`build:${Bk}`, `could not build a shader pack program for ${kk.name}, which draws without the pack: ${String(sk)}`), null
        }
        const wk = ha(Xk, !!this.sunShadow),
          dk = {
            group: this.packInputs.bindGroupFor(null, wk),
            layout: za(this.device, {
              depth: !1,
              sunShadow: wk
            })
          };
        return this.createProgram(Bk, bk, function(kk) {
          return `standard-sp${kk}`
        }(Xk), dk)
      }
      lineProgramFor(kk, Fk, Bk) {
        const Rk = mk(kk, Bk, Fk, this.view);
        let tk = this.linePrograms.get(Rk);
        var ak;
        return tk || (tk = this.createProgram(`lines#${Rk}`, (ak = function(kk) {
          const Fk = new Map;
          for (let Bk = 0; Bk < dk.length; Bk++) kk & 1 << Bk && Fk.set(dk[Bk], !0);
          return Fk
        }(Rk), At({
          defines: ak,
          vertex: Vt,
          fragment: Jt,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Rk, tk)), tk
      }
      createProgram(kk, Fk, Bk) {
        var Rk;
        let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ak = this.nextProgramId++,
          Xk = `${Bk}-${ak}`,
          bk = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          wk = [{
            binding: 0,
            visibility: bk,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Vk of Fk.textures) wk.push({
          binding: Vk.binding,
          visibility: bk,
          texture: {
            viewDimension: Vk.dimension
          }
        }), wk.push({
          binding: Vk.samplerBinding,
          visibility: bk,
          sampler: {}
        });
        const dk = this.device.createBindGroupLayout({
            label: Xk,
            entries: wk
          }),
          sk = {
            key: kk,
            id: ak,
            kind: Bk,
            program: Fk,
            vertex: this.device.createShaderModule({
              label: `${Xk}-vertex`,
              code: Fk.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Xk}-fragment`,
              code: Fk.fragment
            }),
            materialLayout: dk,
            pipelineLayout: this.device.createPipelineLayout({
              label: Xk,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, dk, ...tk ? [tk.layout] : []]
            }),
            packGroup: null !== (Rk = null === tk || void 0 === tk ? void 0 : tk.group) && void 0 !== Rk ? Rk : null,
            failed: !1
          };
        return this.programs.set(kk, sk), sk
      }
      writeFrameUniforms() {
        const kk = this.frameUniforms;
        fa(this.view, kk), this.device.queue.writeBuffer(this.frameBuffer, 0, kk)
      }
      materialInstance(kk, Fk) {
        let Bk = this.materials.get(kk);
        if (!Bk) {
          const Fk = new Map;
          this.materials.set(kk, Fk), kk.yN.addOnce((() => {
            for (const kk of Fk.values()) kk.released = !0, this.resources.destroyBuffer(kk.buffer);
            this.materials.delete(kk)
          })), Bk = Fk
        }
        let Rk = Bk.get(Fk.key);
        return Rk || (Rk = this.newMaterialInstance(kk, null, Fk), Bk.set(Fk.key, Rk)), Rk
      }
      modelInstance(kk, Fk) {
        const Bk = this.modelSlot(kk);
        let Rk = Bk.instances.get(Fk.key);
        return Rk || (Rk = this.newMaterialInstance(kk, kk, Fk), Bk.instances.set(Fk.key, Rk)), Rk
      }
      modelSlot(kk) {
        let Fk = kk.gpu[Hk.i.lite];
        return Fk || (Fk = new SX(this.resources), kk.gpu[Hk.i.lite] = Fk), Fk
      }
      newMaterialInstance(kk, Fk, Bk) {
        const Rk = Bk.program.material.floats,
          tk = new Float32Array(Rk),
          ak = new Map;
        return {
          owner: kk,
          model: Fk,
          program: Bk,
          data: tk,
          uploaded: new Float32Array(Rk).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${kk.name}-uniforms`,
            size: Math.max(16, 4 * Rk),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: ak,
          ubo: new ya(Bk.program.material.slots, tk, ak),
          bindGroup: null,
          bound: new Array(2 * Bk.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(kk) {
        var Fk;
        const Bk = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: Wt + vt,
            fragment: Wt + it,
            attributes: [],
            material: mt,
            textures: []
          }, "earthSky"),
          Rk = this.earthSkyUniforms ??= this.newMaterialInstance(EX, null, Bk);
        this.earthSkyFrom !== kk && (this.earthSkyFrom = kk, Rk.data.fill(0)), Ht(Rk.ubo, kk, this.view);
        const tk = this.vertexInputs(Bk, EX, "earthSky", Bk, null);
        if (Bk.failed || !tk || !this.bindMaterial(Rk, !1)) return;
        const ak = null !== (Fk = tk.state) && void 0 !== Fk ? Fk : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Xk = this.makeDraw(Bk, tk, ak, Rk, 1);
        Xk.count = et.length;
        const bk = ut(kk, this.view);
        Xk.slotOffset = this.writeMeshSlot(bk, 1), this.lists.skyDraws.push(Xk)
      }
      uploadIfChanged(kk) {
        const {
          data: Fk,
          uploaded: Bk
        } = kk;
        for (let Rk = 0; Rk < Fk.length; Rk++)
          if (Fk[Rk] !== Bk[Rk]) return Bk.set(Fk), void this.device.queue.writeBuffer(kk.buffer, 0, Fk)
      }
      bindMaterial(kk, Fk) {
        return kk.frame !== this.frame && (kk.frame = this.frame, Fk || this.uploadIfChanged(kk), kk.bindable = this.bindTextures(kk)), kk.bindable
      }
      bindTextures(kk) {
        const {
          program: Fk,
          bound: Bk
        } = kk, Rk = Fk.program.textures;
        let tk = !kk.bindGroup,
          ak = !0;
        for (let Xk = 0; Xk < Rk.length; Xk++) {
          const Fk = kk.textures.get(Rk[Xk].name),
            bk = Fk ? this.resources.boundTexture(Fk) : null;
          bk ? Bk[2 * Xk] === bk.view && Bk[2 * Xk + 1] === bk.sampler || (Bk[2 * Xk] = bk.view, Bk[2 * Xk + 1] = bk.sampler, tk = !0) : (Fk || kk.ubo.expected.has(Rk[Xk].name) || this.warnOnce(`texture:${kk.owner.name}:${Rk[Xk].name}`, `${kk.owner.name} has no ${Rk[Xk].name}`), ak = !1)
        }
        if (!ak) return tk && (kk.bindGroup = null), !1;
        if (tk) {
          const tk = [{
            binding: 0,
            resource: {
              buffer: kk.buffer
            }
          }];
          for (let kk = 0; kk < Rk.length; kk++) tk.push({
            binding: Rk[kk].binding,
            resource: Bk[2 * kk]
          }), tk.push({
            binding: Rk[kk].samplerBinding,
            resource: Bk[2 * kk + 1]
          });
          kk.bindGroup = this.device.createBindGroup({
            label: `${kk.owner.name}-material`,
            layout: Fk.materialLayout,
            entries: tk
          })
        }
        return !0
      }
      writeMeshSlot(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, kk, Fk, Bk), this.slotCount++ * hR
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(kk, Fk, Bk, Rk, tk) {
        let ak = this.inputs.get(kk);
        if (!ak || ak.program !== Rk || !oa(Fk, ak, this.resources, tk)) {
          var Xk;
          if (ak = null !== (Xk = this.vertexLayouts.resolveInputs(Fk, Bk, Rk, tk)) && void 0 !== Xk ? Xk : void 0, !ak) return null;
          this.inputs.set(kk, ak)
        }
        return this.withGpuBuffers(ak)
      }
      meshInputs(kk, Fk, Bk) {
        const Rk = this.inputs.get(kk);
        if (Rk && this.inputsStamped(Rk, kk, Bk, Fk)) return this.withGpuBuffers(Rk);
        const tk = kk.owner,
          ak = Xa(kk),
          Xk = this.vertexInputs(kk, tk, tk.name, Fk, ak);
        return Xk && (Xk.geometry = ba(kk), Xk.instanceLayout = this.drawDefines.instanceLayout(tk, Bk)), Xk
      }
      inputsStamped(kk, Fk, Bk, Rk) {
        return function(kk, Fk, Bk, Rk) {
          return kk.program === Bk && kk.geometry === ba(Fk) && kk.instanceLayout === Rk
        }(kk, Fk, Rk, this.drawDefines.instanceLayout(Fk.owner, Bk))
      }
      withGpuBuffers(kk) {
        return Za(kk, this.resources, this.zeroBuffer) ? kk : null
      }
      instanceBuffersFit(kk, Fk, Bk) {
        const Rk = Ka(Fk, Bk, this.resources, this.zeroBuffer);
        if (Rk) {
          const tk = Fk.ends[Rk.index] - Fk.offsets[Rk.index] + Fk.f_[Rk.index];
          return this.warnOnce(`overrun:${kk}`, `${kk} draws ${Bk} instances from a ${tk}-byte buffer (${Rk.needed} needed)`), !1
        }
        return !0
      }
      createBinding(kk, Fk, Bk, Rk) {
        const tk = `${Fk._colorFormat}|${Fk._depthStencilFormat}|${Fk._depthCompare}|${Fk._sampleCount}`,
          ak = bF(this.device, Fk);
        if (kk === this.skyLastRenderable) {
          let Bk = null;
          return {
            renderable: kk,
            pipeline: ak,
            draw: kk => Bk ? this.drawSky(kk, Fk, tk, Bk) : 0,
            update: kk => {
              Bk = kk
            }
          }
        }
        return {
          renderable: kk,
          pipeline: ak,
          draw: kk => (Rk ? Rk.execute(kk, Fk, tk) : 0) + this.drawList(kk, Fk, tk, Bk)
        }
      }
      drawSky(kk, Fk, Bk, Rk) {
        const tk = this.lists.skyDraws,
          ak = tk.length > 0;
        if (ak) {
          var Xk;
          const Bk = (null !== (Xk = Fk._depthCompare) && void 0 !== Xk ? Xk : RF).startsWith("greater") ? 0 : 1;
          kk.setViewport(0, 0, Rk.targetWidth, Rk.targetHeight, Bk, Bk)
        }
        const bk = this.drawList(kk, Fk, Bk, tk);
        return ak && kk.setViewport(0, 0, Rk.targetWidth, Rk.targetHeight, 0, 1), bk
      }
      drawList(kk, Fk, Bk, Rk) {
        let tk = 0;
        const ak = this.binder;
        ak.reset();
        for (const Xk of Rk) {
          const Rk = this.pipelineFor(Xk, Fk, Bk);
          Rk && (ak.bind(kk, Xk, Rk, this.meshSlots.bindGroup, Xk.slotOffset), Xk.indexBuffer ? kk.drawIndexed(Xk.count, Xk.instances, Xk.first, 0, 0) : kk.draw(Xk.count, Xk.instances, Xk.first, 0), tk++)
        }
        return tk
      }
      pipelineFor(kk, Fk, Bk) {
        var Rk, tk;
        if (kk.program.failed) return null;
        const ak = kk.inputs;
        if (ak.pipeline && ak.pipelineTarget === Bk) return ak.pipeline;
        const Xk = `${kk.pipelineKey}|${Bk}`,
          bk = this.pipelines.get(Xk);
        if (void 0 !== bk) return bk && (ak.pipeline = bk, ak.pipelineTarget = Bk), bk || null;
        this.pipelines.set(Xk, null);
        const {
          program: wk,
          layout: dk,
          state: sk
        } = kk, Vk = {
          label: `standard-${wk.id}`,
          layout: wk.pipelineLayout,
          vertex: {
            module: wk.vertex,
            entryPoint: "main",
            buffers: dk.buffers
          },
          fragment: Ik({
            module: wk.fragment,
            entryPoint: "main"
          }, Fk, sk.blend, sk.colourWrite),
          depthStencil: Fk._depthStencilFormat ? {
            format: Fk._depthStencilFormat,
            depthCompare: null !== (Rk = null !== (tk = sk.depthCompare) && void 0 !== tk ? tk : Fk._depthCompare) && void 0 !== Rk ? Rk : RF,
            depthWriteEnabled: sk.depthWrite,
            depthBias: sk.depthBias,
            depthBiasSlopeScale: sk.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Fk._sampleCount
          },
          primitive: {
            topology: sk.topology,
            frontFace: sk.frontFace,
            cullMode: sk.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Vk).then((kk => {
          this.compiling--, this.pipelines.set(Xk, kk)
        }), (kk => {
          this.compiling--, this.reportFailure(wk, Xk, kk)
        })), null
      }
      forEachSunShadowCaster(kk) {
        const Fk = this.caster,
          Bk = (Bk, Rk, tk) => {
            const ak = Bk.unit && function(kk) {
              const Fk = kk.material.model;
              return null !== Fk && (Fk.lifeform || Fk.item) && Fk.castsSunShadow && "triangle-list" === kk.state.topology
            }(Bk) ? Xa(Bk.unit) : null;
            if (!ak) return;
            const Xk = Bk.unit.owner;
            switch (Fk.geometry = ak, Fk.skip = Xk.noSunShadowVertices, Fk.indexed = null !== Bk.indexBuffer, Fk.first = Bk.first, Fk.count = Bk.count, Fk.iJ = Rk, Fk.worldAt = tk, Fk.instances = null, Fk.instanceCount = 1, Fk.thin = !1, Ba(Xk)) {
              case "thin": {
                const kk = Xk._thinInstanceDataStorage.matrixData;
                if (!kk) return;
                Fk.instances = kk, Fk.instanceCount = Math.min(Bk.instances, kk.length / 16), Fk.thin = !0;
                break
              }
              case "instanced": {
                const kk = this.resources.batchUploads.get(Xk);
                if (!kk || kk.frame !== this.frame || !this.writeBatchCasters(kk)) return;
                break
              }
            }
            kk(Fk)
          };
        for (const Rk of this.lists.opaqueDraws) Bk(Rk, this.meshSlots.data, Rk.slotOffset / 4);
        this.thinBundle.forEachDrawn(Bk)
      }
      writeBatchCasters(kk) {
        const {
          caster: Fk
        } = this, Bk = kk.packedMatrices, Rk = kk.count;
        Fk.instances = Bk, Fk.instanceCount = Rk;
        let tk = -1;
        for (let ak = 0; ak < Rk; ak++) {
          const Fk = uX(kk.packedRowMesh(ak));
          Fk && tk < 0 ? (this.casterWorlds.length < 16 * Rk && (this.casterWorlds = new Float32Array(Bk.length)), this.casterWorlds.set(Bk.subarray(0, 16 * ak)), tk = ak) : !Fk && tk >= 0 && (this.casterWorlds.set(Bk.subarray(16 * ak, 16 * ak + 16), 16 * tk), tk++)
        }
        return tk >= 0 && (Fk.instances = this.casterWorlds, Fk.instanceCount = tk), Fk.instanceCount > 0
      }
      async reportFailure(kk, Fk, Bk) {
        const Rk = [];
        let tk = !0;
        for (const [ak, Xk] of [
            ["vertex", kk.vertex],
            ["fragment", kk.fragment]
          ]) {
          const kk = await Xk.getCompilationInfo();
          for (const Fk of kk.messages) tk &&= "error" !== Fk.type, Rk.push(`${ak}:${Fk.lineNum}:${Fk.linePos} ${Fk.type}: ${Fk.message}`)
        }
        if (tk && !kk.packGroup) return this.pipelines.set(Fk, !1), console.error(`Lite: pipeline ${Fk} failed`, Bk), void jt("mesh", kk.kind, Bk);
        kk.failed || (kk.failed = !0, console.error(`Lite: program ${kk.id} failed`, Bk, Rk.join("\n"), {
          program: kk.program,
          key: kk.key
        }), jt("mesh", kk.kind, Bk, tk ? null : Rk[0]))
      }
    }

    function uX(kk) {
      var Fk, Bk;
      const Rk = null === (Fk = kk.gH) || void 0 === Fk || null === (Bk = Fk.aShaderPackItem) || void 0 === Bk ? void 0 : Bk.x;
      return void 0 !== Rk && 0 !== (Rk & dF.g)
    }
    var MX = Bk(41113),
      gX = Bk(41117),
      UX = Bk(41124),
      cX = Bk(41077);
    const GX = [0, 3, 1, 4, 2, 5];

    function TX(kk, Fk, Bk, Rk, tk) {
      const ak = Bk[0].width;
      try {
        return tk ? function(kk, Fk, Bk) {
          const Rk = (0, cX.d)(kk, Bk, Bk, 6);
          for (let tk = 0; tk < 6; tk++)(0, cX.f)(kk, Rk, tk, Fk[GX[tk]], {
            invertY: !1
          });
          return Rk.texture
        }(kk, Bk, ak) : function(kk, Fk, Bk, Rk) {
          const tk = kk.createTexture({
            label: "sink-cube",
            size: {
              width: Bk,
              height: Bk,
              depthOrArrayLayers: 6
            },
            format: Rk,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let ak = 0; ak < 6; ak++) kk.queue.copyExternalImageToTexture({
            source: Fk[GX[ak]]
          }, {
            texture: tk,
            origin: {
              x: 0,
              y: 0,
              z: ak
            }
          }, {
            width: Bk,
            height: Bk
          });
          return tk
        }(Fk, Bk, ak, 1 === Rk ? "r8unorm" : "rgba8unorm")
      } finally {
        rX(Bk)
      }
    }

    function rX(kk) {
      for (const Fk of null !== kk && void 0 !== kk ? kk : []) null === Fk || void 0 === Fk || Fk.close()
    }
    async function DX(kk) {
      const Fk = [],
        Bk = [];
      if (await Promise.all(kk.map(((kk, Rk) => (Fk[Rk] = null, kk.then((kk => {
          Fk[Rk] = kk
        }), (kk => {
          Bk.push(kk)
        })))))), Bk.length > 0) throw rX(Fk), Bk[0];
      return Fk
    }
    class zX {
      constructor(kk) {
        this.KV = kk, this.starts = [], this.lengths = [], this.used = 0, kk > 0 && (this.starts.push(0), this.lengths.push(kk))
      }
      allocate(kk) {
        const {
          starts: Fk,
          lengths: Bk
        } = this;
        for (let Rk = 0; Rk < Fk.length; Rk++) {
          if (Bk[Rk] < kk) continue;
          const tk = Fk[Rk];
          return Bk[Rk] === kk ? (Fk.splice(Rk, 1), Bk.splice(Rk, 1)) : (Fk[Rk] += kk, Bk[Rk] -= kk), this.used += kk, tk
        }
        return -1
      }
      free(kk, Fk) {
        this.used -= Fk;
        const Bk = Math.min(kk + Fk, this.KV);
        Bk > kk && this.release(kk, Bk - kk)
      }
      grow(kk) {
        const Fk = this.KV;
        this.KV = kk, this.release(Fk, kk - Fk)
      }
      truncate(kk) {
        const {
          starts: Fk,
          lengths: Bk
        } = this;
        for (let Rk = Fk.length - 1; Rk >= 0 && Fk[Rk] + Bk[Rk] > kk; Rk--) Fk[Rk] >= kk ? (Fk.splice(Rk, 1), Bk.splice(Rk, 1)) : Bk[Rk] = kk - Fk[Rk];
        this.KV = kk
      }
      release(kk, Fk) {
        const {
          starts: Bk,
          lengths: Rk
        } = this;
        let tk = 0,
          ak = Bk.length;
        for (; tk < ak;) {
          const Fk = tk + ak >> 1;
          Bk[Fk] < kk ? tk = Fk + 1 : ak = Fk
        }
        const Xk = tk,
          bk = Xk > 0 && Bk[Xk - 1] + Rk[Xk - 1] === kk,
          wk = Xk < Bk.length && kk + Fk === Bk[Xk];
        bk && wk ? (Rk[Xk - 1] += Fk + Rk[Xk], Bk.splice(Xk, 1), Rk.splice(Xk, 1)) : bk ? Rk[Xk - 1] += Fk : wk ? (Bk[Xk] = kk, Rk[Xk] += Fk) : (Bk.splice(Xk, 0, kk), Rk.splice(Xk, 0, Fk))
      }
    }
    const PX = 256;
    class hX {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = kk, this.onReplaced = Fk, this.mergeGap = Bk, this.gpu = null, this.bytes = void 0, this.hb = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const tk = Math.max(PX, Math.ceil(Rk / PX) * PX);
        this.bytes = new Uint8Array(tk), this.hb = new zX(tk / PX)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(kk) {
        return Math.max(1, Math.ceil(kk / PX)) * PX
      }
      allocate(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk;
        const Rk = hX.slotBytes(kk),
          tk = Rk / PX;
        let ak = this.hb.allocate(tk);
        ak < 0 && (this.grow(this.hb.KV + tk), ak = this.hb.allocate(tk));
        const Xk = ak * PX;
        return this.growTo(Xk + Math.max(Bk, Rk)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Xk, Xk + Rk), Fk && this.bytes.set(new Uint8Array(Fk.buffer, Fk.byteOffset, Math.min(Fk.byteLength, Rk)), Xk), this.markDirty(Xk, Xk + Rk), Xk
      }
      growTo(kk) {
        const Fk = Math.ceil(kk / PX);
        Fk > this.hb.KV && this.grow(Fk)
      }
      free(kk, Fk) {
        this.freed.push(kk, Fk)
      }
      write(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Rk <= 0) return;
        this.bytes.set(new Uint8Array(Fk.buffer, Bk, Rk), kk);
        let ak = kk + Rk;
        if (tk) {
          const Fk = kk + 4 * Math.ceil(Rk / 4);
          this.bytes.fill(0, ak, Fk), ak = Fk
        }
        this.markDirty(kk, ak)
      }
      move(kk, Fk, Bk) {
        this.bytes.copyWithin(Fk, kk, kk + Bk), this.markDirty(Fk, Fk + Bk)
      }
      flush() {
        for (const Fk of this.retired) this.onReplaced(Fk), Fk.destroy();
        this.retired.length = 0;
        const kk = this.dirtyStarts.length;
        if (kk > 0) {
          const {
            dirtyStarts: Fk,
            dirtyEnds: Bk,
            order: Rk
          } = this;
          Rk.length = kk;
          for (let bk = 0; bk < kk; bk++) Rk[bk] = bk;
          kk > 1 && Rk.sort(((kk, Bk) => Fk[kk] - Fk[Bk]));
          const tk = this.mergeGap;
          let ak = Fk[Rk[0]],
            Xk = Bk[Rk[0]];
          for (let bk = 1; bk < kk; bk++) {
            const kk = Rk[bk];
            Fk[kk] - Xk <= tk ? Xk = Math.max(Xk, Bk[kk]) : (this.send(ak, Xk), ak = Fk[kk], Xk = Bk[kk])
          }
          this.send(ak, Xk), Fk.length = 0, Bk.length = 0
        }
        this.holding = !1
      }
      FY() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const kk = this.freed;
        for (let Fk = 0; Fk < kk.length; Fk += 2) this.hb.free(kk[Fk] / PX, kk[Fk + 1] / PX);
        kk.length = 0
      }
      send(kk, Fk) {
        this.device.queue.writeBuffer(this.gpu, kk, this.bytes.buffer, kk, Fk - kk);
        for (const Bk of this.replaced) {
          const Rk = Math.min(Fk, Bk.size);
          Rk > kk && this.device.queue.writeBuffer(Bk, kk, this.bytes.buffer, kk, Rk - kk)
        }
      }
      markDirty(kk, Fk) {
        kk &= -4, Fk = Fk + 3 & -4, this.holding ? (this.dirtyStarts.push(kk), this.dirtyEnds.push(Fk)) : this.send(kk, Fk)
      }
      grow(kk) {
        const Fk = this.hb.KV,
          Bk = Math.max(2 * Fk, kk),
          Rk = new Uint8Array(Bk * PX);
        Rk.set(this.bytes);
        const tk = this.gpu;
        this.gpu = this.createGpu(Rk.byteLength), this.bytes = Rk, this.hb.grow(Bk), tk && (this.replaced.push(tk), this.onReplaced(tk)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Fk * PX)
      }
      createGpu(kk) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: kk,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function qX(kk) {
      return Array.isArray(kk) ? new Float32Array(kk) : kk
    }

    function CX(kk, Fk, Bk, Rk, tk) {
      const ak = gt(tk),
        Xk = Math.min(tk, Rk.byteLength);
      if (ak === Xk && Rk.byteOffset % 4 === 0) return void kk.queue.writeBuffer(Fk, Bk, Rk.buffer, Rk.byteOffset, ak);
      const bk = new Uint8Array(ak);
      bk.set(new Uint8Array(Rk.buffer, Rk.byteOffset, Xk)), kk.queue.writeBuffer(Fk, Bk, bk)
    }

    function ZX(kk, Fk, Bk) {
      const Rk = "linear",
        tk = "nearest";
      let ak = tk,
        Xk = tk,
        bk = "nearest",
        wk = !Fk;
      switch (kk) {
        case 11:
          ak = Rk, Xk = Rk;
          break;
        case 3:
          ak = Rk, Xk = Rk, bk = Fk ? "linear" : "nearest";
          break;
        case 8:
          bk = Fk ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Xk = Rk;
          break;
        case 6:
          Xk = Rk, bk = Fk ? "linear" : "nearest";
          break;
        case 7:
          Xk = Rk, wk = !0;
          break;
        case 9:
          ak = Rk;
          break;
        case 10:
          ak = Rk, bk = Fk ? "linear" : "nearest";
          break;
        case 2:
          ak = Rk, Xk = Rk, Bk > 1 ? (bk = "linear", wk = !1) : wk = !0;
          break;
        case 12:
          ak = Rk, wk = !0;
          break;
        default:
          wk = !0
      }
      return Bk > 1 && !wk ? {
        magFilter: Rk,
        minFilter: Rk,
        mipmapFilter: "linear",
        maxAnisotropy: Bk
      } : {
        magFilter: ak,
        minFilter: Xk,
        mipmapFilter: bk,
        ...wk ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function pX(kk) {
      return 0 === kk ? "clamp-to-edge" : 2 === kk ? "mirror-repeat" : "repeat"
    }
    class KX {
      constructor(kk, Fk) {
        let {
          vertexArena: Bk = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = kk, this.device = Fk, this.buffers = new WeakMap, this.K3 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = Bk ? new hX(Fk, (kk => {
          var Fk;
          null === (Fk = this.onDestroy) || void 0 === Fk || Fk.call(this, kk), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var kk;
        null === (kk = this.arena) || void 0 === kk || kk.flush()
      }
      endUploadFrame() {
        var kk;
        null === (kk = this.arena) || void 0 === kk || kk.FY()
      }
      vertexBufferCreated(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bk ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(kk);
        const tk = qX(Fk);
        kk.KV = tk.byteLength, this.buffers.set(kk, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: Bk && null !== this.arena,
          pending: tk,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Rk
        })
      }
      vertexBufferUpdated(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        const tk = this.buffers.get(kk);
        if (!tk) return;
        const ak = qX(Fk),
          Xk = void 0 === Rk ? ak.byteLength : Math.min(Rk, ak.byteLength);
        this.update(tk, ak, Bk, Xk)
      }
      vertexBufferFloatsUpdated(kk, Fk, Bk, Rk) {
        const tk = this.buffers.get(kk);
        if (!tk) return;
        const ak = Bk * Float32Array.BYTES_PER_ELEMENT,
          Xk = (Rk - Bk) * Float32Array.BYTES_PER_ELEMENT;
        tk.slot >= 0 && Xk > 0 && ak + Xk <= tk.size ? this.writeSlot(tk, ak, Fk, Fk.byteOffset + ak, Xk, !1) : tk.gpu && Xk > 0 && ak + Xk <= tk.gpu.size ? this.device.queue.writeBuffer(tk.gpu, ak, Fk.buffer, Fk.byteOffset + ak, Xk) : this.update(tk, Fk.subarray(Bk, Rk), ak, Xk)
      }
      indexBufferCreated(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(kk);
        const Rk = function(kk) {
          if (kk instanceof Uint16Array || kk instanceof Uint32Array) return kk;
          for (let Fk = 0; Fk < kk.length; Fk++)
            if (kk[Fk] >= 65535) return new Uint32Array(kk);
          return new Uint16Array(kk)
        }(Fk);
        kk.is32Bits = 4 === Rk.BYTES_PER_ELEMENT, kk.KV = Rk.byteLength, this.buffers.set(kk, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Rk,
          ownsPending: Rk !== Fk,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Bk
        })
      }
      bufferDeleted(kk) {
        const Fk = this.buffers.get(kk);
        null !== Fk && void 0 !== Fk && Fk.gpu ? (this.destroyBuffer(Fk.gpu), this.gpuBuffersVersion++) : Fk && Fk.slot >= 0 && (this.arena.free(Fk.slot, Fk.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(kk)
      }
      update(kk, Fk, Bk, Rk) {
        if (kk.slot >= 0) this.updateSlot(kk, Fk, Bk, Rk);
        else if (kk.gpu) {
          if (Bk + gt(Rk) > kk.gpu.size) {
            const Fk = this.device.createBuffer({
                label: kk.label,
                size: gt(Math.max(2 * kk.gpu.size, Bk + Rk)),
                usage: kk.usage | GPUBufferUsage.COPY_SRC
              }),
              tk = this.device.createCommandEncoder();
            tk.copyBufferToBuffer(kk.gpu, 0, Fk, 0, kk.gpu.size), this.device.queue.submit([tk.finish()]), this.destroyBuffer(kk.gpu), this.gpuBuffersVersion++, kk.gpu = Fk
          }
          CX(this.device, kk.gpu, Bk, Fk, Rk)
        } else {
          const ak = new Uint8Array(Fk.buffer, Fk.byteOffset, Rk),
            Xk = kk.pending;
          if (Xk && kk.ownsPending && Bk + Rk <= Xk.byteLength) new Uint8Array(Xk.buffer, Xk.byteOffset, Xk.byteLength).set(ak, Bk);
          else if (Xk && 0 === Bk && Rk === Xk.byteLength && Fk.byteLength === Rk) kk.pending = Fk, kk.ownsPending = !1;
          else {
            var tk;
            const Fk = new Uint8Array(Math.max(null !== (tk = null === Xk || void 0 === Xk ? void 0 : Xk.byteLength) && void 0 !== tk ? tk : 0, Bk + Rk));
            Xk && Fk.set(new Uint8Array(Xk.buffer, Xk.byteOffset, Xk.byteLength)), Fk.set(ak, Bk), kk.pending = Fk, kk.ownsPending = !0
          }
        }
      }
      updateSlot(kk, Fk, Bk, Rk) {
        const tk = this.arena;
        Bk + gt(Rk) > kk.size && (kk.size = gt(Math.max(2 * kk.size, Bk + Rk)), tk.growTo(kk.slot + kk.size), this.gpuBuffersVersion++), 0 === Rk ? this.writeSlot(kk, Bk, jX, 0, 4, !1) : this.writeSlot(kk, Bk, Fk, Fk.byteOffset, Rk, !0)
      }
      writeSlot(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = Fk + (ak ? gt(tk) : tk);
        Xk > kk.slotBytes && this.moveSlot(kk, Xk), this.arena.write(kk.slot + Fk, Bk, Rk, tk, ak)
      }
      moveSlot(kk, Fk) {
        const Bk = this.arena,
          Rk = hX.slotBytes(Math.max(Fk, Math.min(2 * kk.slotBytes, kk.size))),
          tk = Bk.allocate(Rk, null, kk.size);
        Bk.move(kk.slot, tk, kk.slotBytes), Bk.free(kk.slot, kk.slotBytes), kk.slot = tk, kk.slotBytes = Rk, this.gpuBuffersVersion++
      }
      cover(kk, Fk) {
        const Bk = this.buffers.get(kk);
        if (!Bk || Bk.slot < 0) return !1;
        const Rk = Math.min(Fk, Bk.size);
        return !(Rk <= Bk.slotBytes) && (this.moveSlot(Bk, Rk), !0)
      }
      destroyBuffer(kk) {
        var Fk;
        null === (Fk = this.onDestroy) || void 0 === Fk || Fk.call(this, kk), kk.destroy()
      }
      gpuBuffer(kk) {
        const Fk = this.buffers.get(kk);
        if (!Fk) return null;
        if (Fk.slot >= 0) return this.arena.buffer;
        if (Fk.arena && Fk.pending) {
          const kk = Fk.pending,
            Bk = this.arena;
          return Fk.size = gt(kk.byteLength), Fk.slotBytes = hX.slotBytes(function(kk) {
            const Fk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength);
            let Bk = Fk.length;
            if (kk.byteOffset % 4 === 0) {
              for (; Bk % 4 !== 0 && 0 === Fk[Bk - 1];) Bk--;
              if (Bk % 4 === 0) {
                const Fk = new Uint32Array(kk.buffer, kk.byteOffset, Bk / 4);
                let Rk = Fk.length;
                for (; Rk > 0 && 0 === Fk[Rk - 1];) Rk--;
                Bk = 4 * Rk
              }
            }
            for (; Bk > 0 && 0 === Fk[Bk - 1];) Bk--;
            return Bk
          }(kk)), Fk.slot = Bk.allocate(Fk.slotBytes, kk, Fk.size), Fk.pending = null, Bk.buffer
        }
        if (!Fk.gpu && Fk.pending) {
          const kk = Fk.pending;
          Fk.gpu = this.device.createBuffer({
            label: Fk.label,
            size: gt(kk.byteLength),
            usage: Fk.usage
          }), CX(this.device, Fk.gpu, 0, kk, kk.byteLength), Fk.pending = null
        }
        return Fk.gpu
      }
      gpuOffset(kk) {
        var Fk, Bk;
        const Rk = null !== (Fk = null === (Bk = this.buffers.get(kk)) || void 0 === Bk ? void 0 : Bk.slot) && void 0 !== Fk ? Fk : -1;
        return Rk < 0 ? 0 : Rk
      }
      gpuEnd(kk) {
        var Fk, Bk;
        const Rk = this.buffers.get(kk);
        return Rk ? Rk.slot >= 0 ? Rk.slot + Rk.size : null !== (Fk = null === (Bk = Rk.gpu) || void 0 === Bk ? void 0 : Bk.size) && void 0 !== Fk ? Fk : 0 : 0
      }
      vertexInput(kk, Fk, Bk) {
        var Rk, tk, ak, Xk;
        return null !== (Rk = null !== (tk = Bk && this.modelInput(Bk, Fk)) && void 0 !== tk ? tk : null === (ak = null !== (Xk = this.K3.get(kk)) && void 0 !== Xk ? Xk : this.batchUploads.get(kk)) || void 0 === ak ? void 0 : ak.inputs[Fk]) && void 0 !== Rk ? Rk : null
      }
      modelInput(kk, Fk) {
        const Bk = this.geometrySlot(kk);
        let Rk = Bk.inputs.get(Fk);
        if (void 0 === Rk) {
          const tk = kk.vertexAttributes.find((kk => kk.kind === Fk));
          Rk = tk ? new xk(this.modelKey(Bk, tk.data, !1), tk.offset, tk.stride, tk.components, !1, tk.glType, tk.isNormalized) : null, Bk.inputs.set(Fk, Rk)
        }
        return Rk
      }
      modelIndex(kk) {
        return kk.indexData && this.modelKey(this.geometrySlot(kk), kk.indexData, !0)
      }
      geometrySlot(kk) {
        let Fk = kk.gpu[Hk.i.lite];
        if (!Fk) {
          const Bk = new Map,
            Rk = () => {
              for (const kk of Bk.values()) this.bufferDeleted(kk)
            },
            tk = kk => {
              const Fk = Bk.get(kk);
              Fk && this.vertexBufferUpdated(Fk, kk)
            };
          Fk = {
            keys: Bk,
            inputs: new Map,
            release: Rk,
            updated: tk
          }, kk.gpu[Hk.i.lite] = Fk
        }
        return Fk
      }
      modelKey(kk, Fk, Bk) {
        let Rk = kk.keys.get(Fk);
        if (!Rk) {
          if (Bk) {
            const kk = {
              KV: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(kk, Fk, "model-indices"), Rk = kk
          } else Rk = {
            KV: 0
          }, this.vertexBufferCreated(Rk, Fk, !1, "model-vertices");
          kk.keys.set(Fk, Rk)
        }
        return Rk
      }
      indexFormat(kk) {
        return kk.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(kk, Fk) {
        --kk.refs > 0 || (this.releaseTexture(kk), rX(kk.images), null !== Fk && this.textures.delete(Fk))
      }
      load(kk, Fk) {
        const Bk = Fk.decoded = async function(kk) {
          if ("cube" === kk.kind) return async function(kk) {
            if (6 !== kk.length) throw new Error(`${kk.length} files where six faces were expected`);
            const Fk = await DX(kk.map((kk => Dt(kk)))),
              Bk = Fk[0].width;
            return DX(Fk.map((async kk => {
              if (kk.width === Bk && kk.height === Bk) return kk;
              try {
                return await createImageBitmap(kk, {
                  ...Tt,
                  resizeWidth: Bk,
                  resizeHeight: Bk
                })
              } finally {
                kk.close()
              }
            })))
          }(kk.files);
          if ("data" === kk.kind && kk.data) return [await createImageBitmap(new Blob([kk.data]), Tt)];
          return [await Dt(xX(kk))]
        }(kk.source).then((kk => {
          0 === Fk.refs ? rX(kk) : Fk.images = kk
        }));
        this.track(Fk, xX(kk.source), Bk, (() => {
          Fk.wanted && !Fk.failed && Fk.refs > 0 && this.upload(kk, Fk)
        }))
      }
      canvasUpdated(kk, Fk, Bk) {
        const {
          state: Rk
        } = this.textureSlot(kk);
        Rk.dynamicSource = {
          invertY: Fk,
          premultiplied: Bk
        }, Rk.dynamic && this.pushDynamic(kk.source, Rk)
      }
      async atlasArray(kk, Fk, Bk) {
        const Rk = await ht(this.device, kk, Fk, Bk);
        if (!this.atlasBindings.has(Rk)) {
          const kk = (0, MX.e)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Rk, {
            view: Rk.texture.createView({
              dimension: "2d-array"
            }),
            sampler: kk
          })
        }
        return Rk
      }
      boundTexture(kk) {
        const Fk = this.atlasBindings.get(kk);
        if (Fk) return Fk;
        const Bk = kk;
        if (Bk.released) return null;
        const Rk = this.textureSlot(Bk, !0),
          {
            state: tk
          } = Rk;
        if (!tk.view && (tk.wanted = !0, tk.loading || tk.failed || this.upload(Bk, tk), !tk.view)) return null;
        const ak = this.chosenSampler(Bk, Rk),
          Xk = Rk.bound;
        return Xk && Xk.view === tk.view && Xk.sampler === ak ? Xk : (Rk.bound = {
          view: tk.view,
          sampler: ak
        }, Rk.bound)
      }
      textureLoaded(kk) {
        var Fk, Bk;
        return null !== (Fk = null === (Bk = kk.gpu[Hk.i.lite]) || void 0 === Bk ? void 0 : Bk.state.decoded) && void 0 !== Fk ? Fk : null
      }
      textureFailed(kk) {
        var Fk;
        return !0 === (null === (Fk = kk.gpu[Hk.i.lite]) || void 0 === Fk ? void 0 : Fk.state.failed)
      }
      chosenSampler(kk, Fk) {
        const {
          samplingMode: Bk,
          wrapU: Rk,
          wrapV: tk
        } = kk.sampler, ak = Fk.state.hasMips, Xk = function(kk, Fk) {
          const {
            bilinear: Bk,
            trilinear: Rk
          } = Hk.l;
          return !Fk && kk !== Bk || 11 !== kk && kk !== Rk && kk !== Bk ? 1 : 4
        }(Bk, ak), bk = Fk.sampler;
        if (bk && bk.samplingMode === Bk && bk.hasMips === ak && bk.anisotropy === Xk && bk.wrapU === Rk && bk.wrapV === tk) return bk.sampler;
        const wk = this.samplerFor(Bk, ak, Xk, Rk, tk);
        return Fk.sampler = {
          samplingMode: Bk,
          hasMips: ak,
          anisotropy: Xk,
          wrapU: Rk,
          wrapV: tk,
          sampler: wk
        }, wk
      }
      releaseTexture(kk) {
        var Fk, Bk;
        kk.view && (null === (Bk = this.onDestroy) || void 0 === Bk || Bk.call(this, kk.view));
        null === (Fk = kk.destroy) || void 0 === Fk || Fk.call(kk)
      }
      textureSlot(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = kk.gpu[Hk.i.lite];
        if (Bk) return Bk;
        const Rk = function(kk) {
          let {
            source: Fk,
            sampler: Bk
          } = kk;
          return "canvas" === Fk.kind ? null : `${Fk.kind}|${xX(Fk)}|${Bk.noMipmap}|${Bk.samplingMode}|${Bk.invertY}`
        }(kk);
        let tk = null === Rk ? void 0 : this.textures.get(Rk);
        tk || (tk = {
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
        }, null !== Rk && (this.textures.set(Rk, tk), this.load(kk, tk), Fk && this.firstBindDecodes++)), tk.refs++;
        const ak = tk,
          Xk = {
            state: tk,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(ak, Rk)
            }
          };
        return kk.gpu[Hk.i.lite] = Xk, Xk
      }
      samplerFor(kk, Fk, Bk, Rk, tk) {
        const ak = `${kk}|${Fk}|${Bk}|${Rk}|${tk}`;
        let Xk = this.samplers.get(ak);
        if (!Xk) {
          const bk = {
            ...ZX(kk, Fk, Bk),
            addressModeU: pX(Rk),
            addressModeV: pX(tk)
          };
          Xk = (0, MX.e)(this.engine, bk), this.samplers.set(ak, Xk)
        }
        return Xk
      }
      upload(kk, Fk) {
        const {
          source: Bk,
          sampler: Rk
        } = kk;
        Fk.hasMips = !Rk.noMipmap, "canvas" === Bk.kind ? this.createDynamic(Bk, Fk) : "cube" === Bk.kind ? this.uploadCube(Fk, Bk.luminance) : this.uploadImage(Fk, !0 === Rk.invertY, Bk.url)
      }
      uploadImage(kk, Fk, Bk) {
        const [Rk] = kk.images;
        kk.images = null;
        const tk = (0, gX.c)(this.engine, Rk, {
          mipMaps: kk.hasMips,
          invertY: Fk,
          srgb: !1
        }).then((Fk => {
          Rk.close(), 0 !== kk.refs ? (kk.view = Fk.view, kk.destroy = Fk.texture.destroy.bind(Fk.texture)) : Fk.texture.destroy()
        }));
        this.track(kk, Bk, tk)
      }
      track(kk, Fk, Bk, Rk) {
        kk.loading = !0, this.pending++, Bk.catch((Bk => {
          kk.failed = !0, console.warn(`Lite: could not load texture ${rt(Fk)}`, Bk)
        })).finally((() => {
          kk.loading = !1, this.pending--, null === Rk || void 0 === Rk || Rk()
        }))
      }
      uploadCube(kk, Fk) {
        const Bk = kk.images;
        kk.images = null;
        const Rk = TX(this.engine, this.device, Bk, (0, Hk.A)(Fk), kk.hasMips);
        kk.view = Rk.createView({
          dimension: "cube"
        }), kk.destroy = () => {
          Rk.destroy()
        }
      }
      createDynamic(kk, Fk) {
        const {
          canvas: Bk
        } = kk, Rk = (0, UX.e)(this.engine, Math.max(1, Bk.width), Math.max(1, Bk.height), {
          mipMaps: Fk.hasMips,
          srgb: !1
        });
        Fk.dynamic = Rk, Fk.view = Rk.view, Fk.destroy = () => {
          Rk.texture.destroy()
        }, this.pushDynamic(kk, Fk)
      }
      pushDynamic(kk, Fk) {
        const Bk = Fk.dynamicSource,
          Rk = Fk.dynamic,
          {
            canvas: tk
          } = kk;
        if (Bk && Rk && 0 !== tk.width && 0 !== tk.height) return tk.width !== Rk.width || tk.height !== Rk.height ? (this.releaseTexture(Fk), Fk.dynamic = null, Fk.view = null, void this.createDynamic(kk, Fk)) : void(0, UX.h)(this.engine, Rk, tk, {
          invertY: Bk.invertY,
          premultiplyAlpha: Bk.premultiplied
        })
      }
    }

    function xX(kk) {
      return "cube" === kk.kind ? kk.rootUrl : "canvas" === kk.kind ? "canvas" : kk.url
    }
    const jX = new Uint8Array(4);

    function lX(kk) {
      const Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      kk._colorAttachment.storeOp = kk._targetSignature._sampleCount > 1 ? Fk : "store";
      const Bk = kk._renderPassDescriptor.depthStencilAttachment;
      Bk && (Bk.depthStoreOp = Fk, Bk.stencilStoreOp && (Bk.stencilStoreOp = Fk))
    }
    var nX = Bk(37467),
      IX = Bk(37519),
      QX = Bk(37116),
      kb = Bk(39148);
    const Fb = new Float64Array([1, 1, 1]),
      Bb = new Float64Array([0, 1, 0]),
      Rb = new Float64Array(4),
      tb = new Float32Array(16),
      ab = new Float64Array(3),
      Xb = new Float64Array(4);

    function bb(kk, Fk, Bk) {
      kk.fov = Fk.fov, kk.near = Fk.near, kk.far = Fk.far, kk.renderWidth = Bk.renderWidth, kk.renderHeight = Bk.renderHeight, (0, QX.t)(Fk.holderRotation, 0, Rb, 0), (0, QX.d)(Fb, 0, Rb, 0, Fk.holderPosition, 0, tb);
      const Rk = Fk.bK;
      ab[0] = Rk[0], ab[1] = Rk[1], ab[2] = Rk[2] + 1;
      const tk = kk.viewMatrix;
      (0, QX.m)(Rk, ab, Bb, tk), (0, QX.k)(tk, 0, tk), (0, QX.n)(tk, tb, 0, tk), (0, QX.k)(tk, 0, tk);
      const ak = kk.worldMatrix;
      (0, QX.k)(tk, 0, ak), kk.eye[0] = ak[12], kk.eye[1] = ak[13], kk.eye[2] = ak[14], Xb[0] = kk.fov, Xb[1] = kk.renderWidth / kk.renderHeight, Xb[2] = kk.near, Xb[3] = kk.far, (0, QX.q)(Xb, kk.projectionMatrix), (0, QX.n)(tk, kk.projectionMatrix, 0, kk.viewProjectionMatrix), (0, kb.h)(kk.viewProjectionMatrix, kk.frustum)
    }

    function wb(kk, Fk) {
      let Bk = kk.frustumPlanes;
      Bk || (Bk = kk.frustumPlanes = Array.from({
        length: 6
      }, (() => new nX.c(0, 0, 0, 0))));
      for (let Rk = 0; Rk < 6; Rk++) {
        const kk = Bk[Rk].normal;
        kk._x = Fk[4 * Rk], kk._y = Fk[4 * Rk + 1], kk._z = Fk[4 * Rk + 2], kk._isDirty = !0, Bk[Rk].d = Fk[4 * Rk + 3]
      }
    }

    function db(kk, Fk) {
      const Bk = Fk.clearColor;
      kk.clearColour[0] = Bk.r, kk.clearColour[1] = Bk.g, kk.clearColour[2] = Bk.b, kk.clearColour[3] = Bk.a;
      const Rk = Fk.ambientColor;
      kk.ambientColour[0] = Rk.r, kk.ambientColour[1] = Rk.g, kk.ambientColour[2] = Rk.b, kk.animationRatio = Fk.animationRatio, kk.frameId = Fk.frameId, kk.version++
    }

    function sb(kk) {
      const Fk = kk.model.view;
      return Fk.animTick = (0, IX.g)(), Fk.timeMs = performance.now(), db(Fk, kk.ef), kk.model.update(Fk.frameId), Fk
    }

    function Vb(kk) {
      const Fk = kk.ef,
        {
          view: Bk,
          Qp: Rk
        } = kk.model;
      return bb(Bk, Rk, Fk.ne()), Fk.onBeforeRenderObservable.notifyObservers(Fk), wb(Fk, Bk.frustum), Fk.onBeforeCameraRenderObservable.notifyObservers(Fk.activeCamera), sb(kk)
    }
    var Jb = Bk(37065),
      Ab = Bk(37194),
      eb = Bk(37506);

    function yb(kk) {
      var Fk, Bk;
      const Rk = (0, Sk._)(kk);
      if (!Rk || Rk.diffuseTexture && (0, eb.j)(kk)) return null;
      const tk = null === (Fk = (0, Sk.z)(Rk, Ok.i.name)) || void 0 === Fk ? void 0 : Fk.state,
        ak = null === (Bk = (0, Sk.z)(Rk, xa.e.name)) || void 0 === Bk ? void 0 : Bk.state,
        Xk = new Float32Array(16);
      return function(kk, Fk, Bk, Rk) {
        var tk, ak;
        const Xk = AR;
        Rk.set(kk.diffuseColor, Xk.diffuse), Rk[Xk.diffuse + 3] = kk.alpha, Rk.set(kk.ambientColor, Xk.ambientAndCutoff), Rk[Xk.ambientAndCutoff + 3] = kk.alphaCutOff, Rk.set(kk.emissiveColor, Xk.emissiveAndLevel), Rk[Xk.emissiveAndLevel + 3] = null !== (tk = null === (ak = kk.diffuseTexture) || void 0 === ak ? void 0 : ak.level) && void 0 !== tk ? tk : 1, null !== Fk && void 0 !== Fk && Fk.animDataPerTex ? (Rk[Xk.anim + 1] = IX.c, Rk[Xk.anim + 2] = Fk.animDataPerTex.length / 3 - 1) : Bk && (Rk[Xk.anim + 1] = Bk.numAnimStates, Rk[Xk.anim + 2] = Bk.ticksPerAnimState)
      }(Rk, tk, ak, Xk), {
        model: Rk,
        atlas: tk,
        texture: tk ? "atlas" : Rk.diffuseTexture ? "single" : "none",
        animated: tk ? !!tk.animDataPerTex : !!ak,
        liquid: (0, eb.k)(kk),
        customRenderMat: (0, eb.j)(kk),
        uniformData: Xk
      }
    }
    var fb = Bk(37048);
    class mb {
      constructor(kk) {
        this.units = kk, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var kk;
        this.buffer.destroy(), null === (kk = this.twin) || void 0 === kk || kk.destroy()
      }
    }
    class Wb {
      constructor(kk, Fk) {
        this.arena = kk, this.hb = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.hb = new zX(Fk);
        const Bk = new mb(Fk);
        Bk.buffer = this.createBuffer(Bk, !1), this.backings.push(Bk), this.refresh()
      }
      get KV() {
        return this.hb.KV
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
        let kk = 0;
        for (const Fk of this.backings) kk += Fk.units * (this.arena.unitBytes + (Fk.twin ? this.arena.twinUnitBytes : 0));
        return kk
      }
      holds(kk) {
        return kk.start + kk.length <= this.usable
      }
      lost(kk) {
        return this.dropped || kk.start + kk.length > this.KV
      }
      write(kk, Fk) {
        const {
          device: Bk,
          unitBytes: Rk
        } = this.arena;
        for (const tk of this.backings) {
          const ak = (tk.units - kk.start) * Rk;
          ak > 0 && Bk.queue.writeBuffer(tk.buffer, kk.start * Rk, Fk, 0, Math.min(Fk.byteLength, ak))
        }
      }
      writeLight(kk, Fk) {
        const {
          device: Bk,
          twinUnitBytes: Rk,
          verticesPerUnit: tk
        } = this.arena, {
          light: ak,
          count: Xk
        } = this.arena.twinLight(Fk, Math.min(Fk.length, kk.length * tk));
        for (const bk of this.backings) {
          bk.twin || (bk.twin = this.createBuffer(bk, !0));
          const Fk = (bk.units - kk.start) * tk;
          Fk > 0 && Bk.queue.writeBuffer(bk.twin, kk.start * Rk, ak, 0, Math.min(Xk, Fk))
        }
      }
      grow(kk) {
        this.arena.assertNotDrawing();
        const {
          device: Fk,
          unitBytes: Bk,
          label: Rk
        } = this.arena, tk = this.backings[this.backings.length - 1], ak = new mb(kk), Xk = Fk.createCommandEncoder({
          label: `${Rk}-grow`
        });
        ak.buffer = this.createBuffer(ak, !1), Xk.copyBufferToBuffer(tk.buffer, 0, ak.buffer, 0, tk.units * Bk), tk.twin && (ak.twin = this.createBuffer(ak, !0), Xk.copyBufferToBuffer(tk.twin, 0, ak.twin, 0, tk.units * this.arena.twinUnitBytes)), Fk.queue.submit([Xk.finish()]), this.backings.push(ak), this.hb.grow(kk)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const kk of this.backings) kk.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(kk, Fk) {
        const {
          device: Bk,
          unitBytes: Rk,
          twinUnitBytes: tk,
          usage: ak,
          label: Xk
        } = this.arena;
        Bk.pushErrorScope("out-of-memory");
        const bk = Bk.createBuffer({
          label: Fk ? `${Xk}-light` : Xk,
          size: kk.units * (Fk ? tk : Rk),
          usage: (Fk ? this.arena.twinUsage : ak) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, Bk.popErrorScope().then((Bk => {
          this.arena.awaitingVerdict--, this.settle(kk, Fk, !Bk, !0)
        }), (Bk => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Xk} buffer, taken as failed: ${String(Bk)}`), this.settle(kk, Fk, !1, !1)
        })), bk
      }
      settle(kk, Fk, Bk, Rk) {
        const tk = this.backings.indexOf(kk);
        if (!(this.dropped || tk < 0)) {
          if (!Bk) {
            if (Rk && this.arena.ranOutOfMemory(kk.units, kk.units * (Fk ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === tk) return void this.drop();
            for (const kk of this.backings.splice(tk)) kk.destroy();
            return this.hb.truncate(this.backings[tk - 1].units), this.growable = !1, void this.promote()
          }
          Fk ? kk.twinReady = !0 : (kk.bufferReady = !0, this.arena.allocatedBuffer(kk.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: kk
        } = this;
        let Fk = 0;
        for (; Fk + 1 < kk.length && kk[Fk].ready && kk[Fk + 1].ready;) Fk++;
        for (const Bk of kk.splice(0, Fk)) Bk.destroy();
        this.refresh()
      }
      refresh() {
        const kk = this.backings[0];
        this.buffer = kk.buffer, this.twin = kk.twinReady ? kk.twin : null, this.usable = !this.dropped && kk.bufferReady ? kk.units : 0
      }
    }
    class vb {
      constructor(kk, Fk, Bk, Rk) {
        let {
          verticesPerUnit: tk = 1,
          twinUsage: ak = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = kk, this.unitBytes = Fk, this.usage = Bk, this.label = Rk, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, sF.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Fk % 4 !== 0) throw new Error(`${Rk}: ${Fk}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = tk, this.twinUsage = ak, this.twinValueBytes = tk > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * tk
      }
      twinLight(kk, Fk) {
        if (4 === this.twinValueBytes) return this.widened.length < Fk && (this.widened = new Float32Array(Math.max(Fk, 2 * this.widened.length))), this.widened.set(kk.subarray(0, Fk)), {
          light: this.widened,
          count: Fk
        };
        const Bk = Fk % this.verticesPerUnit;
        if (0 === Bk) return {
          light: kk,
          count: Fk
        };
        const Rk = Fk - Bk + this.verticesPerUnit;
        return this.padded.length < Rk && (this.padded = new Uint16Array(Math.max(Rk, 2 * this.padded.length))), this.padded.set(kk.subarray(0, Fk)), this.padded.fill(0, Fk, Rk), {
          light: this.padded,
          count: Rk
        }
      }
      allocate(kk) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), kk > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const tk of this.pages) {
          const Fk = tk.hb.allocate(kk);
          if (Fk >= 0) return {
            page: tk,
            start: Fk,
            length: kk
          }
        }
        const Fk = this.pages[this.pages.length - 1];
        if (null !== Fk && void 0 !== Fk && Fk.canGrow) {
          const Bk = Math.min(this.ceiling, Math.max(2 * Fk.KV, Fk.KV + kk));
          if (Bk - Fk.KV >= kk) return Fk.grow(Bk), {
            page: Fk,
            start: Fk.hb.allocate(kk),
            length: kk
          }
        }
        Fk && Fk !== this.pages[0] && 0 === Fk.hb.used && Fk.drop();
        const Bk = Math.floor(1048576 / this.unitBytes),
          Rk = new Wb(this, Math.max(kk, Math.min(this.ceiling, Bk)));
        return this.pages.push(Rk), {
          page: Rk,
          start: Rk.hb.allocate(kk),
          length: kk
        }
      }
      free(kk) {
        this.assertNotDrawing();
        const {
          page: Fk
        } = kk;
        Fk.hb.free(kk.start, kk.length), 0 === Fk.hb.used && Fk !== this.pages[0] && Fk !== this.pages[this.pages.length - 1] && Fk.drop()
      }
      remove(kk) {
        const Fk = this.pages.indexOf(kk);
        Fk >= 0 && this.pages.splice(Fk, 1)
      }
      ranOutOfMemory(kk, Fk) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Fk}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, kk), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, kk) / 2));
        const Bk = performance.now();
        Bk >= this.shortageUntil && (this.forgetFailedAt = Bk + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = Bk + 1e3)
      }
      allocatedBuffer(kk) {
        kk >= this.failed && (this.failed = 1 / 0);
        const Fk = Math.min(2 * kk, Math.floor((kk + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Fk))
      }
      stats() {
        let kk = 0,
          Fk = 0,
          Bk = 0,
          Rk = 0;
        for (const tk of this.pages) kk += tk.KV, Fk += tk.hb.used, Bk += tk.hasTwin ? tk.KV * this.twinUnitBytes : 0, Rk += tk.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: kk * this.unitBytes,
          usedBytes: Fk * this.unitBytes,
          twinBytes: Bk,
          allocatedBytes: Rk
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: kk,
          maxStorageBufferBindingSize: Fk
        } = this.device.limits;
        let Bk = Math.floor(Math.min(67108864, kk) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (Bk = Math.min(Bk, Math.floor(Fk / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (Bk = Math.min(Bk, Math.floor(Fk / this.twinUnitBytes))), Bk
      }
    }
    const ib = 16383;

    function Yb(kk, Fk, Bk, Rk, tk) {
      let ak = 0;
      for (let Xk = Bk; Xk < Rk; Xk += ib) kk.drawIndexed(6 * Math.min(ib, Rk - Xk), 1, 0, Fk + 4 * Xk, tk), ak++;
      return ak
    }
    class ob {
      constructor(kk, Fk) {
        this.recordsGroup = Fk, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const Bk = EF.i.strideWithoutAtlas;
        this.vertexArena = new vb(kk, Bk, GPUBufferUsage.VERTEX, `terrain-vertices-${Bk}`), this.quadArena = new vb(kk, Ab.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Rk = (0, SF.d)(new Uint16Array(98298), ib);
        this.quadPattern = kk.createBuffer({
          label: "terrain-quad-pattern",
          size: Rk.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), kk.queue.writeBuffer(this.quadPattern, 0, Rk)
      }
      set(kk, Fk) {
        const Bk = Fk.packedVertices,
          Rk = Bk ? this.quadArena.allocate(kk.faceCount) : this.vertexArena.allocate(kk.vertexCount);
        if (!Rk) return !1;
        kk.vertices = Rk;
        const tk = Bk ? new Uint8Array(Bk.buffer, Bk.byteOffset, Bk.byteLength) : new Uint8Array(Fk.vertices);
        return Rk.page.write(Rk, tk), !0
      }
      setLight(kk, Fk) {
        const {
          vertices: Bk
        } = kk;
        Bk && 0 !== Fk.length && Bk.page.live && (Fk.length < kk.vertexCount ? Bk.page.arena.warnOnce("shortLight", `a part's ${Fk.length} light values are fewer than its ${kk.vertexCount} vertices, so its light is left as it was`) : (Bk.page.writeLight(Bk, Fk), kk.lit = !0))
      }
      lightFullSky(kk, Fk) {
        this.fullSky.length < Fk && (this.fullSky = new Uint16Array(Math.max(Fk, 4096)).fill(fb.j));
        for (const Bk of kk) {
          const kk = Bk.vertices;
          kk.page.live && (kk.page.writeLight(kk, this.fullSky), Bk.lit = !0)
        }
      }
      backed(kk) {
        const {
          vertices: Fk
        } = kk;
        return !!Fk && Fk.page.holds(Fk)
      }
      lost(kk) {
        const {
          vertices: Fk
        } = kk;
        return !!Fk && Fk.page.lost(Fk)
      }
      release(kk) {
        kk.vertices && kk.vertices.page.arena.free(kk.vertices), kk.vertices = null, kk.lit = !1
      }
      setDrawing(kk) {
        this.forgetBound()
      }
      draw(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Fk.faceCount;
        const ak = Fk.vertices,
          Xk = ak.page,
          bk = Bk ? Xk.twin : null;
        if (!Xk.holds(ak) || Bk && !bk) return 0;
        const {
          verticesPerUnit: wk
        } = Xk.arena;
        let dk = ak.start * wk;
        this.boundPattern || (kk.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const sk = Rk + tk;
        if (wk > 1) return Xk.buffer === this.boundRecords && bk === this.boundRecordsLight || (kk.setBindGroup(1, this.recordsGroup(Xk.buffer, bk)), this.boundRecords = Xk.buffer, this.boundRecordsLight = bk), Yb(kk, dk, Rk, sk, Fk.slot);
        Xk.buffer !== this.boundVertices && (kk.setVertexBuffer(0, Xk.buffer), this.boundVertices = Xk.buffer), bk && bk !== this.boundLight && (kk.setVertexBuffer(1, bk), this.boundLight = bk);
        const Vk = Fk.faceCount;
        return sk <= Vk ? Yb(kk, dk, Rk, sk, Fk.slot) : Yb(kk, dk, Rk, Vk, Fk.slot) + Yb(kk, dk, Math.max(Rk, Vk) - Vk, sk - Vk, Fk.slot)
      }
      get buffersAwaitingVerdict() {
        let kk = 0;
        for (const Fk of this.arenas()) kk += Fk.awaitingVerdict;
        return kk
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Lb {
      constructor(kk, Fk, Bk, Rk) {
        this.device = kk, this.splitBefore = Fk, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = kk.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const tk = kk.createShaderModule({
          label: "scene-depth-copy",
          code: (ak = Bk._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${ak?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var ak;
        kk.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: tk,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: tk,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((kk => {
          this.pipeline = kk, this.building = !1
        }), (kk => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", kk)
        })), Bk._executeWithTransmission = () => this.execute(Bk, Rk)
      }
      get compiling() {
        return this.building
      }
      setWanted(kk) {
        this.wanted = kk
      }
      setPlanes(kk, Fk) {
        kk === this.near && Fk === this.far || (this.near = kk, this.far = Fk, this.unproject[0] = kk / (Fk - kk), this.unproject[1] = Fk * kk / (Fk - kk), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.copy) || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null
      }
      execute(kk, Fk) {
        var Bk;
        null === (Bk = this.retired) || void 0 === Bk || Bk.destroy(), this.retired = null;
        const Rk = FF(Fk),
          tk = kk._transparentBindings,
          ak = this.wanted && this.pipeline ? this.splitIndex(tk) : -1,
          Xk = kk._colorAttachment,
          bk = Xk.resolveTarget;
        ak >= 0 && (Xk.resolveTarget = void 0, lX(kk, !0));
        let wk = Rk.beginRenderPass(kk._renderPassDescriptor);
        wk.setBindGroup(0, kk._sceneBG);
        let dk = this.drawList(wk, Fk, kk._opaqueBindings, 0, kk._opaqueBindings.length);
        if (dk += this.drawList(wk, Fk, kk._directBindings, 0, kk._directBindings.length), dk += this.drawList(wk, Fk, tk, 0, ak >= 0 ? ak : tk.length), wk.end(), ak < 0) return dk;
        lX(kk);
        const sk = kk._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Vk,
            stencilLoadOp: Jk
          } = sk,
          Ak = Xk.loadOp;
        Xk.resolveTarget = bk;
        try {
          this.copyDepth(Rk, kk), Xk.loadOp = "load", sk.depthLoadOp = "load", Jk && (sk.stencilLoadOp = "load"), wk = Rk.beginRenderPass(kk._renderPassDescriptor), wk.setBindGroup(0, kk._sceneBG), dk += this.drawList(wk, Fk, tk, ak, tk.length), wk.end()
        } finally {
          Xk.loadOp = Ak, sk.depthLoadOp = Vk, sk.stencilLoadOp = Jk
        }
        return dk
      }
      splitIndex(kk) {
        for (let Fk = 0; Fk < kk.length; Fk++)
          if (kk[Fk].renderable === this.splitBefore) return Fk;
        return -1
      }
      drawList(kk, Fk, Bk, Rk, tk) {
        let ak = null,
          Xk = 0;
        for (let bk = Rk; bk < tk; bk++) {
          const Rk = Bk[bk],
            tk = Rk.renderable.mesh;
          tk && !1 === tk.visible || (Rk.pipeline !== ak && (kk.setPipeline(Rk.pipeline), ak = Rk.pipeline), Xk += Rk.draw(kk, Fk))
        }
        return Xk
      }
      copyDepth(kk, Fk) {
        var Bk, Rk;
        const tk = (null !== (Bk = Fk._config.depth) && void 0 !== Bk ? Bk : Fk._config.rt)._depthTexture,
          ak = (null === (Rk = this.copy) || void 0 === Rk ? void 0 : Rk.source) === tk ? this.copy : this.remakeCopy(tk),
          Xk = kk.beginRenderPass(ak.pass);
        Xk.setPipeline(this.pipeline), Xk.setBindGroup(0, ak.bindGroup), Xk.draw(3), Xk.end()
      }
      remakeCopy(kk) {
        var Fk, Bk;
        this.retired = null !== (Fk = null === (Bk = this.copy) || void 0 === Bk ? void 0 : Bk.texture) && void 0 !== Fk ? Fk : null;
        const Rk = this.device.createTexture({
            label: "scene-depth",
            size: [kk.width, kk.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          tk = Rk.createView(),
          ak = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: kk.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Xk = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: tk,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: kk,
          texture: Rk,
          view: tk,
          bindGroup: ak,
          pass: Xk
        }, this.copy
      }
    }
    const Ob = "rgba8unorm";

    function Eb(kk) {
      return kk ? 15 : 1
    }
    class Sb {
      constructor(kk, Fk, Bk, Rk) {
        this.device = kk, this.terrain = Rk, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Fk._targetSignature._sampleCount > 1, this.cameraBuffer = kk.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = kk.createBindGroupLayout({
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
        const tk = kk.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = kk.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: tk,
          entries: []
        });
        const ak = kk.createShaderModule({
          label: "sun-shadow-mask",
          code: (Xk = this.edge, `${(0,NF.z)()}${zB({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Xk?NB:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Eb(Xk)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Xk?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Xk;
        kk.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: kk.createPipelineLayout({
            bindGroupLayouts: [this.layout, tk, tk, za(kk, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: ak,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: ak,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((kk => {
          this.pipeline = kk, this.building = !1
        }), (kk => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", kk)
        }));
        const bk = Fk._executeWithTransmission;
        Fk._executeWithTransmission = kk => this.execute(Fk, Bk, (() => bk ? bk(kk) : function(kk, Fk) {
          const Bk = FF(Fk).beginRenderPass(kk._renderPassDescriptor);
          Bk.setBindGroup(0, kk._sceneBG);
          let Rk = Nb(Bk, Fk, kk._opaqueBindings);
          return Rk += Nb(Bk, Fk, kk._directBindings), Rk += Nb(Bk, Fk, kk._transparentBindings), Bk.end(), Rk
        }(Fk, Bk)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.targets) || void 0 === Fk ? void 0 : Fk.maskView) && void 0 !== kk ? kk : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(kk) {
        ! function(kk, Fk) {
          const Bk = kk.worldMatrix,
            Rk = kk.projectionMatrix,
            tk = 1 / Rk[0],
            ak = 1 / Rk[5],
            Xk = kk.far * kk.near / (kk.far - kk.near);
          Fk[0] = kk.eye[0], Fk[1] = kk.eye[1], Fk[2] = kk.eye[2], Fk[3] = 2 ** -23 / Xk, Fk[4] = Bk[0] * tk, Fk[5] = Bk[1] * tk, Fk[6] = Bk[2] * tk, Fk[7] = Xk, Fk[8] = Bk[4] * ak, Fk[9] = Bk[5] * ak, Fk[10] = Bk[6] * ak, Fk[11] = kk.near / (kk.far - kk.near), Fk[12] = Bk[8], Fk[13] = Bk[9], Fk[14] = Bk[10], Fk[15] = 0
        }(kk, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(kk, Fk, Bk) {
        if (this.retire(), !this.terrain.readsMask) return Bk();
        const Rk = this.targetsFor(kk),
          tk = FF(Fk),
          ak = kk._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Rk.prepass.depthStencilAttachment.view = ak.view);
        const Xk = this.terrain.drawPrepass(tk, Rk.prepass, kk._sceneBG);
        if (0 === Xk) return Bk();
        if (this.trace(tk, Rk), this.edge) return Xk + 1 + Bk();
        const {
          depthLoadOp: bk,
          stencilLoadOp: wk
        } = ak;
        ak.depthLoadOp = "load", wk && (ak.stencilLoadOp = "load");
        try {
          return Xk + 1 + Bk()
        } finally {
          ak.depthLoadOp = bk, ak.stencilLoadOp = wk
        }
      }
      trace(kk, Fk) {
        const Bk = this.terrain.sunShadowGroup(),
          Rk = kk.beginRenderPass(Fk.trace);
        this.pipeline && Bk && (Rk.setPipeline(this.pipeline), Rk.setBindGroup(0, Fk.bindGroup), Rk.setBindGroup(1, this.empty), Rk.setBindGroup(2, this.empty), Rk.setBindGroup(3, Bk), Rk.draw(3)), Rk.end()
      }
      retire() {
        const kk = this.retired;
        var Fk;
        kk && (kk.mask.destroy(), kk.normals.destroy(), null === (Fk = kk.depth) || void 0 === Fk || Fk.destroy(), this.retired = null)
      }
      targetsFor(kk) {
        var Fk, Bk;
        const Rk = (null !== (Fk = kk._config.depth) && void 0 !== Fk ? Fk : kk._config.rt)._depthTexture;
        return (null === (Bk = this.targets) || void 0 === Bk ? void 0 : Bk.source) === Rk ? this.targets : this.remake(kk, Rk)
      }
      remake(kk, Fk) {
        var Bk;
        this.retired = this.targets;
        const Rk = [Fk.width, Fk.height],
          tk = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Rk,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          ak = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Rk,
            format: Ob,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Xk = null !== (Bk = kk._targetSignature._depthStencilFormat) && void 0 !== Bk ? Bk : Fk.format,
          bk = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Rk,
            format: Xk,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          wk = kk._renderPassDescriptor.depthStencilAttachment,
          dk = Xk.includes("stencil"),
          sk = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: ak.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: bk ? bk.createView() : wk.view,
              depthClearValue: wk.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...dk ? {
                stencilClearValue: wk.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Vk = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== bk && void 0 !== bk ? bk : Fk).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: ak.createView()
            }]
          }),
          Jk = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: tk.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Eb(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Fk,
          mask: tk,
          maskView: tk.createView(),
          normals: ak,
          depth: bk,
          bindGroup: Vk,
          prepass: sk,
          trace: Jk
        }, this.targets
      }
    }

    function Nb(kk, Fk, Bk) {
      let Rk = null,
        tk = 0;
      for (const ak of Bk) {
        const Bk = ak.renderable.mesh;
        Bk && !1 === Bk.visible || (ak.pipeline !== Rk && (kk.setPipeline(ak.pipeline), Rk = ak.pipeline), tk += ak.draw(kk, Fk))
      }
      return tk
    }
    const Hb = 6e4,
      ub = {
        status: "ok"
      },
      Mb = {
        status: "skipped"
      };
    async function gb(kk, Fk) {
      const {
        isCancelled: Bk
      } = kk;
      if (Bk()) return {
        status: "yB"
      };
      const {
        target: Rk
      } = Fk;
      if (!Rk) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const tk = [],
        ak = Promise.all(Array.from(new Set(kk.materials), (async Bk => {
          tk.push(await async function(kk, Fk, Bk, Rk) {
            const tk = {
              lighting: kk.lighting,
              dirLightCount: Math.min(kk.dirLightCount, 4),
              ie: kk.runtime
            };
            try {
              const ak = Fk.material(Rk);
              return ak && sR(Fk.programKey(ak, !1, tk)) ? (await ak.ready, kk.isCancelled() ? ub : ak.bindGroupLayout ? await async function(kk, Fk, Bk, Rk) {
                const {
                  device: tk
                } = kk;
                let ak, Xk;
                tk.pushErrorScope("validation");
                try {
                  ak = kk.pipelineBuild(Fk, Bk, Rk)
                } finally {
                  Xk = tk.popErrorScope().catch((() => null))
                }
                const [bk, wk] = await Promise.all([Xk, ak.built.then((() => null), (kk => null !== kk && void 0 !== kk ? kk : new Error("pipeline failed")))]);
                if (!bk && !wk) return ub;
                const dk = await Ub(ak.module),
                  sk = dk.length > 0 ? dk.map((kk => `${ak.name} ${kk.lineNum}:${kk.linePos}: ${kk.message}`)).join("\n") : `${ak.name}: ${cb(null!==wk&&void 0!==wk?wk:bk)}`;
                return {
                  status: "failed",
                  material: Fk.model.name,
                  message: sk
                }
              }(Fk, ak, Fk.programKey(ak, "none" !== ak.texture, tk), Bk): (console.warn(`Shader pack: skipped the compile check for "${Rk.name}", whose textures failed to load`), Mb)) : ub
            } catch (ak) {
              return {
                status: "failed",
                material: Rk.name,
                message: cb(ak)
              }
            }
          }(kk, Fk, Rk, Bk))
        }))),
        Xk = function(kk, Fk) {
          let Bk, Rk, tk = !1;
          const ak = new Promise((ak => {
            var Xk;
            Bk = setTimeout((() => {
              ak("timeout")
            }), null !== (Xk = Fk.timeoutMs) && void 0 !== Xk ? Xk : Hb), Rk = setInterval((() => {
              Fk.isCancelled() && ak("yB")
            }), 50), kk.lost.then((() => {
              tk = !0, ak("lost")
            }))
          }));
          return {
            signal: ak,
            lost: () => tk,
            dispose: () => {
              clearTimeout(Bk), clearInterval(Rk)
            }
          }
        }(Fk.device, kk);
      let bk;
      try {
        bk = await Promise.race([ak.then((() => "done")), Xk.signal])
      } finally {
        Xk.dispose()
      }
      if ("yB" === bk || Bk()) return {
        status: "yB"
      };
      const wk = tk.find((kk => "failed" === kk.status));
      return wk && "lost" !== bk && !Xk.lost() && await new Promise((kk => {
        setTimeout(kk, 0)
      })), "lost" === bk || Xk.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : wk ? {
        status: "failed",
        failure: {
          material: wk.material,
          message: wk.message
        }
      } : "timeout" === bk ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(dk=kk.timeoutMs)&&void 0!==dk?dk:Hb)/1e3} s`), {
        status: "skipped"
      }) : tk.some((kk => "skipped" === kk.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var dk
    }
    async function Ub(kk) {
      if (!kk) return [];
      try {
        return (await kk.getCompilationInfo()).messages.filter((kk => "error" === kk.type))
      } catch {
        return []
      }
    }

    function cb(kk) {
      var Fk;
      return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.message) && void 0 !== Fk ? Fk : String(kk)
    }

    function Gb(kk, Fk, Bk, Rk) {
      sR(kk) ? Ub(Bk).then((kk => {
        const [Bk] = kk;
        jt("terrain", Fk, Rk, Bk ? `${Bk.lineNum}:${Bk.linePos} error: ${Bk.message}` : null)
      })) : jt("terrain", Fk, Rk)
    }
    var Tb = Bk(37200),
      rb = Bk(37214),
      Db = Bk(37223),
      zb = Bk(37151);

    function Pb(kk, Fk, Bk, Rk, tk) {
      const ak = Math.hypot(Bk[0], Bk[1], Bk[2]);
      if (!(ak > 0)) return;
      const Xk = [Bk[0] / ak, Bk[1] / ak, Bk[2] / ak],
        bk = [Math.floor(Fk[0]), Math.floor(Fk[1]), Math.floor(Fk[2])],
        wk = [0, 0, 0],
        dk = [1 / 0, 1 / 0, 1 / 0],
        sk = [1 / 0, 1 / 0, 1 / 0];
      for (let Ak = 0; Ak < 3; Ak++) Xk[Ak] > 0 ? (wk[Ak] = 1, dk[Ak] = (bk[Ak] + 1 - Fk[Ak]) / Xk[Ak], sk[Ak] = 1 / Xk[Ak]) : Xk[Ak] < 0 && (wk[Ak] = -1, dk[Ak] = (bk[Ak] - Fk[Ak]) / Xk[Ak], sk[Ak] = -1 / Xk[Ak]);
      const {
        Ze: Vk
      } = kk;
      let Jk = kk.Yz(bk[0], bk[1], bk[2]);
      for (;;) {
        const Fk = dk[0] < dk[1] ? dk[0] < dk[2] ? 0 : 2 : dk[1] < dk[2] ? 1 : 2;
        if (dk[Fk] > Rk) return;
        const Bk = wk[Fk] > 0 ? bk[Fk] + 1 : bk[Fk];
        bk[Fk] += wk[Fk], dk[Fk] += sk[Fk];
        const ak = kk.Yz(bk[0], bk[1], bk[2]),
          Xk = ak !== Jk && !(kk.opaque[Jk] && kk.opaque[ak]);
        if (Xk) {
          const Rk = [bk[0], bk[1], bk[2]];
          Rk[Fk] = Bk;
          const ak = Math.floor(Rk[0] / Vk),
            Xk = Math.floor(Rk[1] / Vk),
            wk = Math.floor(Rk[2] / Vk);
          !kk.isDrawn(ak, Xk, wk) && kk.hasParts(ak, Xk, wk) && tk.add(`${ak},${Xk},${wk}`)
        }
        if (Xk && kk.occluders[ak]) return;
        Jk = ak
      }
    }

    function hb(kk, Fk) {
      return kk.group - Fk.group || kk.nearest - Fk.nearest
    }
    class qb {
      constructor(kk, Fk) {
        this.device = kk, this.UW = Fk, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var kk;
        const Fk = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.next++;
        if (8 * Fk >= this.data.length) {
          const kk = new Float32Array(2 * this.data.length);
          kk.set(this.data), this.data = kk, this.words = new Uint32Array(kk.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.UW()
        }
        return Fk
      }
      release(kk) {
        this.free.push(kk)
      }
      set(kk, Fk, Bk, Rk, tk) {
        const ak = 8 * kk + iR;
        this.data[ak] = Fk, this.data[ak + 1] = Bk, this.data[ak + 2] = Rk, this.setVisibility(kk, tk)
      }
      setVisibility(kk, Fk) {
        this.data[8 * kk + YR] = Fk, this.markDirty(kk, kk)
      }
      setFaces(kk, Fk, Bk) {
        const Rk = 8 * kk;
        this.words[Rk + oR] = Fk, this.words[Rk + LR] = Bk, this.markDirty(kk, kk)
      }
      markDirty(kk, Fk) {
        this.dirtyMin = Math.min(this.dirtyMin, kk), this.dirtyMax = Math.max(this.dirtyMax, Fk)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Cb = vR,
      Zb = !0;
    const pb = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Cb.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Kb = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class xb {
      constructor(kk) {
        this.device = kk, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(JR), this.dirLightUniforms = this.frameUniforms.subarray(VR.dirLights, VR.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, sF.b)(), this.faceGroups = !0, this.visibilityGraph = Zb, this.visCull = Zb, this.visCheck = !1, this.visCullMinDistance = Db.i, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Ib, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.ie = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new ob(kk, ((kk, Fk) => this.recordsGroup(kk, Fk))), this.slots = new qb(kk, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = BF(kk), this.frameLayout = kk.createBindGroupLayout({
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
        }), this.frameBuffer = kk.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = kk.createSampler({
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
          bind: (kk, Fk) => this.createBinding(this.opaqueRenderable, Fk, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (kk, Fk) => this.createBinding(this.transparentRenderable, Fk, !0)
        }
      }
      installSceneDepth(kk, Fk) {
        this.sceneDepth = new Lb(this.device, this.transparentRenderable, kk, Fk)
      }
      createFrameBindGroup() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== kk && void 0 !== kk ? kk : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Fk && void 0 !== Fk ? Fk : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(kk, Fk) {
        const Bk = null !== Fk && void 0 !== Fk ? Fk : kk;
        let Rk = this.recordsGroups.get(Bk);
        return Rk || (Rk = this.createFrameBindGroup(kk, Fk), this.recordsGroups.set(Bk, Rk)), Rk
      }
      setChunkMesh(kk, Fk, Bk) {
        var Rk;
        let tk = this.chunks.get(kk);
        tk ? this.geometry.release(tk) : (tk = {
          mesh: kk,
          slot: this.slots.allocate(),
          origin: [Bk[0], Bk[1], Bk[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: kk.visibility,
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
        }, this.chunks.set(kk, tk), this.writeSlot(tk)), tk.material = kk.material ? this.materialFor(kk.material) : null, tk.packed = !!Fk.packedVertices, tk.vertexCount = (0, Ab.e)(Fk), tk.faceCount = tk.vertexCount / 4;
        const ak = null !== (Rk = Fk.faceGroups) && void 0 !== Rk ? Rk : null;
        if (tk.faceGroups = ak, ak) {
          const kk = Tb.o;
          tk.planePX = ak[kk], tk.planeNX = ak[kk + 1], tk.planePY = ak[kk + 2], tk.planeNY = ak[kk + 3], tk.planePZ = ak[kk + 4], tk.planeNZ = ak[kk + 5]
        }
        this.drawWhole(tk), 0 !== tk.faceCount && (this.geometry.set(tk, Fk) ? (tk.packed && this.slots.setFaces(tk.slot, tk.vertices.start + tk.faceCount, tk.faceCount), Fk.He && this.setChunkMeshLight(kk, Fk.He)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${tk.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(kk, Fk) {
        const Bk = this.chunks.get(kk);
        Bk && this.geometry.setLight(Bk, Fk)
      }
      drawStats() {
        let kk = this.transparent.length;
        for (const Fk of this.opaqueBatches) kk += Fk.meshes.length;
        return {
          drawn: kk,
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
      removeChunkMesh(kk) {
        const Fk = this.chunks.get(kk);
        Fk && (this.geometry.release(Fk), this.slots.release(Fk.slot), this.chunks.delete(kk))
      }
      remeshLost(kk, Fk) {
        this.geometry.release(Fk), Fk.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Fk.lostRemeshes++);
        const Bk = kk.iJ,
          [Rk, tk, ak] = Bk.zRk(Fk.origin[0], Fk.origin[1], Fk.origin[2]),
          Xk = Bk.Zy.py(Rk, tk, ak);
        Xk && (Xk.qy = !0, Xk.ny = !0, Bk.Cy(Xk, !1))
      }
      chooseFaceRanges(kk, Fk, Bk) {
        const Rk = this.faceRanges;
        kk.faceMask = Bk, kk.rangeCount = (0, rb.p)(Fk, Bk, Rk), kk.first0 = Rk[0], kk.count0 = Rk[1], kk.first1 = Rk[2], kk.count1 = Rk[3]
      }
      drawWhole(kk) {
        kk.faceMask = -1, kk.faceEpoch = -1, kk.rangeCount = 1, kk.first0 = 0, kk.count0 = kk.faceCount
      }
      writeSlot(kk) {
        const [Fk, Bk, Rk] = this.originOffset;
        this.slots.set(kk.slot, kk.origin[0] - Fk, kk.origin[1] - Bk, kk.origin[2] - Rk, kk.visibility)
      }
      materialFor(kk) {
        const Fk = this.materials.get(kk);
        if (Fk) return Fk;
        const Bk = yb(kk);
        if (!Bk) return this.warnOnce(`material:${kk.name}`, `Lite terrain cannot draw material "${kk.name}"; its chunks are skipped.`), null;
        const {
          model: Rk,
          atlas: tk,
          texture: ak,
          animated: Xk,
          uniformData: bk
        } = Bk, wk = {
          id: this.materials.size,
          model: Rk,
          texture: ak,
          animated: Xk,
          uniformData: bk,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${kk.name}`,
            size: bk.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: Bk.liquid,
          customRenderMat: Bk.customRenderMat,
          atlasCount: 0,
          Vl: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(kk, wk), this.device.queue.writeBuffer(wk.uniformBuffer, 0, bk), wk.ready = this.createMaterialBindGroup(wk, tk).catch((Fk => {
          console.error(`Lite terrain failed to load the textures of material "${kk.name}"`, Fk)
        })), wk
      }
      materialLayout(kk) {
        const Fk = function(kk) {
            const Fk = ["uniforms"];
            if ("atlas" === kk.texture) {
              kk.animated && Fk.push("animData"), Fk.push("sampler");
              for (let Bk = 0; Bk < kk.atlasCount; Bk++) Fk.push("textureArray")
            } else "single" === kk.texture && Fk.push("sampler", "texture");
            return Fk
          }(kk),
          Bk = Fk.join(",");
        let Rk = this.materialLayouts.get(Bk);
        if (!Rk) {
          const kk = GPUShaderStage.FRAGMENT;
          Rk = this.device.createBindGroupLayout({
            label: `terrain-material-${Bk}`,
            entries: Fk.map(((Fk, Bk) => {
              switch (Fk) {
                case "uniforms":
                  return {
                    binding: Bk, visibility: GPUShaderStage.VERTEX | kk, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: Bk, visibility: GPUShaderStage.VERTEX | kk, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: Bk, visibility: kk, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: Bk, visibility: kk, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: Bk, visibility: kk, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(Bk, Rk)
        }
        return Rk
      }
      async createMaterialBindGroup(kk, Fk) {
        const Bk = [{
          buffer: kk.uniformBuffer
        }];
        if (Fk) {
          const {
            urls: Rk,
            pixels: tk,
            layerWidth: ak
          } = Fk.sources, Xk = await Promise.all(Rk.map(((kk, Fk) => {
            var Bk;
            return ht(this.device, kk, null !== (Bk = null === tk || void 0 === tk ? void 0 : tk[Fk]) && void 0 !== Bk ? Bk : null, ak)
          })));
          kk.atlasCount = Xk.length, kk.Vl = Xk[0].layerWidth, kk.atlasLayers = Xk[0].layers, Fk.animDataPerTex && Bk.push({
            buffer: Ut(this.device, Float32Array.from(Fk.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), Bk.push(this.sampler);
          for (const kk of Xk) Bk.push(kk.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === kk.texture) {
          const {
            url: Fk
          } = kk.model.diffuseTexture.source, {
            pixels: Rk,
            width: tk,
            height: ak
          } = await zt(Fk);
          Bk.push(this.sampler), Bk.push(Gt(this.device, Rk, tk, ak, 1, `terrain-${Fk}`).createView({
            dimension: "2d"
          }))
        }
        const Rk = this.materialLayout(this.programKey(kk, !1));
        kk.bindGroupLayout = Rk, kk.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${kk.model.name}`,
          layout: Rk,
          entries: Bk.map(((kk, Fk) => ({
            binding: Fk,
            resource: kk
          })))
        })
      }
      programKey(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Rk = Bk ? Bk.lighting : this.lighting,
          tk = Bk ? Bk.ie : this.ie,
          ak = {
            texture: kk.texture,
            atlasCount: kk.atlasCount,
            Vl: kk.Vl,
            atlasLayers: kk.atlasLayers,
            animated: kk.animated,
            alphaTest: kk.model.transparencyMode === Sk.t.alphaTest,
            lighting: Rk,
            dirLightCount: Bk ? Bk.dirLightCount : this.dirLightCount,
            packed: Fk
          };
        if (!tk) return ak;
        const Xk = this.shaderPackFields(kk, tk),
          bk = "atlas" === kk.texture && kk.model.transparencyMode === Sk.t.opaque && XR(Xk.packVariant);
        return {
          ...ak,
          ...Xk,
          alphaTest: ak.alphaTest || bk
        }
      }
      shaderPackFields(kk, Fk) {
        return kk.customRenderMat ? tR : function(kk, Fk) {
          if (!kk) return tR;
          const Bk = kk.defineFor(Fk ? "liquid" : "terrain");
          return 0 === Bk ? tR : {
            packVariant: Bk,
            liquid: Fk
          }
        }(Fk, kk.liquid)
      }
      isBlended(kk) {
        return kk.model.transparencyMode === Sk.t.alphaBlend
      }
      shaderModule(kk, Fk) {
        let Bk = this.modules.get(kk);
        return Bk || (Bk = this.device.createShaderModule({
          label: Fk,
          code: kk
        }), this.modules.set(kk, Bk)), Bk
      }
      pipelineFor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!kk.bindGroupLayout) return null;
        const tk = this.programKey(kk, Fk);
        if (!Rk) return this.pipelineOf(kk, tk, Bk);
        const ak = {
            ...tk,
            resting: Rk
          },
          Xk = this.pipelineId(kk, ak, Bk),
          bk = this.pipelines.get(Xk);
        if (bk) return bk;
        const wk = this.pipelineOf(kk, tk, Bk);
        return wk && void 0 === bk && this.startPipeline(Xk, kk, ak, Bk), wk
      }
      pipelineOf(kk, Fk, Bk) {
        const Rk = this.pipelineId(kk, Fk, Bk),
          tk = this.pipelines.get(Rk);
        return void 0 !== tk ? tk : (this.startPipeline(Rk, kk, Fk, Bk), null)
      }
      pipelineId(kk, Fk, Bk) {
        return jb(Fk, this.isBlended(kk), kk.model.backFaceCulling, Bk)
      }
      pipelineBuild(kk, Fk, Bk) {
        var Rk;
        const tk = this.pipelineId(kk, Fk, Bk);
        return null !== (Rk = this.builds.get(tk)) && void 0 !== Rk ? Rk : this.startPipeline(tk, kk, Fk, Bk)
      }
      startPipeline(kk, Fk, Bk, Rk) {
        var tk;
        this.pipelines.set(kk, null);
        const ak = uR(Bk),
          Xk = this.isBlended(Fk),
          bk = this.shadowMask && Rk._depthStencilFormat ? function(kk, Fk, Bk, Rk) {
            if (void 0 === kk.packVariant || kk.liquid || Fk) return "none";
            const tk = (0, HF.f)(kk.packVariant);
            return null === tk || void 0 === tk || !tk.sunShadow || !rB(tk, Bk) || tk.discards || kk.alphaTest && XR(kk.packVariant) ? "none" : Rk ? "edge" : "plain"
          }(Bk, Xk, !!this.sunShadow, Rk._sampleCount > 1) : "none";
        let wk;
        try {
          wk = MR(Bk, !!this.sunShadow, bk)
        } catch (fk) {
          if (!sR(Bk)) throw fk;
          return this.failedPackBuild(kk, Bk, ak, fk)
        }
        const dk = this.shaderModule(wk, ak),
          sk = [];
        Bk.packed || (sk.push(function(kk, Fk) {
          const Bk = [{
            shaderLocation: Cb.position,
            offset: EF.i.mF,
            format: "float32x3"
          }, {
            shaderLocation: Cb.normal,
            offset: EF.i.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Cb.color,
            offset: EF.i.colorOffset,
            format: "unorm8x4"
          }];
          return kk && Bk.push({
            shaderLocation: Cb.uv,
            offset: EF.i.uvOffset,
            format: "float32x2"
          }), Fk && Bk.push({
            shaderLocation: Cb.blockFlagWords,
            offset: EF.i.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: EF.i.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: Bk
          }
        }("none" !== Bk.texture, sR(Bk))), Bk.lighting && sk.push(pb));
        const Vk = Fk.model.backFaceCulling,
          Jk = {
            label: ak,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Fk.bindGroupLayout, ...qa(this.device, Bk, !!this.sunShadow, "none" !== bk)]
            }),
            vertex: {
              module: dk,
              entryPoint: "mainVertex",
              buffers: sk
            },
            fragment: Ik({
              module: dk,
              entryPoint: "mainFragment"
            }, Rk, Xk ? Kb : null),
            depthStencil: Rk._depthStencilFormat ? {
              format: Rk._depthStencilFormat,
              depthCompare: null !== (tk = Rk._depthCompare) && void 0 !== tk ? tk : RF,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Rk._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Vk ? "back" : "none"
            }
          },
          Ak = Bk.resting ? 0 : 1;
        this.compiling += Ak;
        const ek = "none" === bk ? this.device.createRenderPipelineAsync(Jk) : this.startMaskPipelines(dk, Jk, "edge" === bk);
        ek.then((Fk => {
          this.compiling -= Ak, this.pipelines.set(kk, Fk)
        }), (kk => {
          this.compiling -= Ak, console.error(`Lite terrain pipeline ${ak} failed`, kk), Gb(Bk, ak, dk, kk)
        }));
        const yk = {
          name: ak,
          module: dk,
          built: ek
        };
        return this.builds.set(kk, yk), yk
      }
      startMaskPipelines(kk, Fk, Bk) {
        const Rk = Fk.depthStencil,
          tk = this.device.createRenderPipelineAsync(Bk ? Fk : {
            ...Fk,
            depthStencil: {
              ...Rk,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          ak = this.device.createRenderPipelineAsync({
            ...Fk,
            label: `${Fk.label}-prepass`,
            fragment: {
              module: kk,
              entryPoint: "prepassFragment",
              targets: [{
                format: Ob
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([tk, ak]).then((kk => {
          let [Fk, Bk] = kk;
          return this.prepassOf.set(Fk, Bk), this.maskPipelines++, Fk
        }))
      }
      failedPackBuild(kk, Fk, Bk, Rk) {
        console.error(`Lite terrain pipeline ${Bk} failed`, Rk), Gb(Fk, Bk, null, Rk);
        const tk = Promise.reject(Rk);
        tk.catch((() => {}));
        const ak = {
          name: Bk,
          module: null,
          built: tk
        };
        return this.builds.set(kk, ak), ak
      }
      checkShaderPack(kk) {
        return gb(kk, {
          device: this.device,
          target: this.target,
          material: kk => this.materialFor(kk),
          programKey: (kk, Fk, Bk) => this.programKey(kk, Fk, Bk),
          pipelineBuild: (kk, Fk, Bk) => this.pipelineBuild(kk, Fk, Bk)
        })
      }
      createBinding(kk, Fk, Bk) {
        return this.target = Fk, {
          renderable: kk,
          pipeline: bF(this.device, Fk),
          draw: kk => {
            this.geometry.setDrawing(!0);
            try {
              return Bk ? this.drawTransparent(kk, Fk) : this.drawOpaque(kk, Fk)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(kk, Fk) {
        var Bk, Rk, tk, ak;
        const {
          SJ: Xk
        } = kk;
        this.lighting = kk.bf;
        const bk = (0, Jb.s)(Fk);
        this.dirLightCount = Math.min(bk, 4), this.ie = null !== (Bk = Xk.ie) && void 0 !== Bk ? Bk : null, bk > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(kk, Fk), this.animateMaterials(Fk.animTick);
        const wk = Xk.CJ,
          dk = wk[0] !== this.originOffset[0] || wk[1] !== this.originOffset[1] || wk[2] !== this.originOffset[2];
        dk && (this.originOffset[0] = wk[0], this.originOffset[1] = wk[1], this.originOffset[2] = wk[2]);
        const sk = Fk.eye;
        this.eye[0] = sk[0], this.eye[1] = sk[1], this.eye[2] = sk[2], this.writeShaderPackInputs();
        const Vk = Fk.projectionMatrix,
          Jk = 0 === Vk[15];
        let Ak = 0;
        (dk || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: ek
        } = this;
        wF(this.transparentRenderable._worldCenter, Fk, aF), this.resetBatches(Jk), this.transparent.length = 0, this.unlit.length = 0;
        const yk = Xk.iJ.I9,
          fk = yk / 2 * Math.sqrt(3);
        let mk = 0;
        const Wk = !!this.ie && aR(this.ie.defineFor("liquid"));
        let vk = !1;
        const ik = null !== (Rk = null === (tk = Xk.VY) || void 0 === tk ? void 0 : tk.visibility) && void 0 !== Rk ? Rk : null,
          Yk = this.visCull && Jk && 0 === this.compiling && null !== ik && Xk.iJ.lBk[0] >= this.visCullMinDistance ? this.target : null,
          Lk = this.visPassable,
          Ok = this.visCandidates,
          Ek = this.visCandidateBatches;
        Lk.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Sk = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Nk = 0;
        const Hk = (kk, Bk) => {
          if (!Bk) return this.transparent.push(kk), void(Nk += 2 * kk.faceCount);
          if (null !== kk.faceGroups && Bk.faceCull) {
            if (0 === Ak && (Ak = (0, rb.b)(Vk, Fk.renderWidth, Fk.renderHeight), Ak !== this.faceFocalPx && (this.faceFocalPx = Ak, ek = ++this.faceEpoch)), kk.faceEpoch !== ek) {
              kk.faceEpoch = ek;
              const Fk = Math.sqrt(kk.distance) + fk,
                Bk = (0, rb.h)(kk.planePX, kk.planeNX, kk.planePY, kk.planeNY, kk.planePZ, kk.planeNZ, this.eye[0] - (kk.origin[0] - this.originOffset[0]), this.eye[1] - (kk.origin[1] - this.originOffset[1]), this.eye[2] - (kk.origin[2] - this.originOffset[2]), (0, rb.e)(Fk, Ak));
              Bk !== kk.faceMask && this.chooseFaceRanges(kk, kk.faceGroups, Bk)
            }
            if (0 === kk.rangeCount) return
          } else - 1 !== kk.faceMask && this.drawWhole(kk);
          Bk.meshes.push(kk), Nk += 2 * ((kk.rangeCount > 0 ? kk.count0 : 0) + (kk.rangeCount > 1 ? kk.count1 : 0))
        };
        for (const Mk of this.chunks.values()) {
          dk && this.writeSlot(Mk);
          const kk = Mk.mesh.visibility;
          kk !== Mk.visibility && (Mk.visibility = kk, this.slots.setVisibility(Mk.slot, kk));
          const {
            material: Bk
          } = Mk;
          this.geometry.lost(Mk) && performance.now() >= Mk.lostRetryAt && this.remeshLost(Xk, Mk);
          const Rk = !(null === Bk || void 0 === Bk || !Bk.bindGroup) && this.geometry.backed(Mk),
            tk = Rk && this.lighting && !Mk.vertices.page.twin;
          if (Yk && (Number.isNaN(Mk.key) && (Mk.ci = Math.floor(Mk.origin[0] / yk), Mk.cj = Math.floor(Mk.origin[1] / yk), Mk.ck = Math.floor(Mk.origin[2] / yk), Mk.key = (0, zb.k)(Mk.ci, Mk.cj, Mk.ck)), (!Rk || kk < 1 || tk || !this.batchDraws(Bk, Mk.packed, Yk)) && this.visSeeThrough(Mk, Yk) && Lk.add(Mk.key)), !Rk) continue;
          tk || (Mk.lostRemeshes = 0);
          const ak = Mk.origin[0] - this.originOffset[0],
            bk = Mk.origin[1] - this.originOffset[1],
            wk = Mk.origin[2] - this.originOffset[2];
          if (!(0, kb.e)(Fk.frustum, ak, bk, wk, yk)) continue;
          const sk = ak + yk / 2 - this.eye[0],
            Vk = bk + yk / 2 - this.eye[1],
            Ak = wk + yk / 2 - this.eye[2];
          if (Mk.distance = sk * sk + Vk * Vk + Ak * Ak, this.lighting && !Mk.lit && (mk = Math.max(mk, Mk.vertexCount), this.unlit.push(Mk)), tk) continue;
          const ek = this.isBlended(Bk) ? null : this.batchFor(Bk, Mk.packed, Mk.vertices.page, 1 === kk, Jk);
          Yk ? (Ok[Sk] = Mk, Ek[Sk++] = ek) : Hk(Mk, ek)
        }
        const uk = Yk ? this.sweepVisibility(kk, Fk, ik) : null;
        null === (ak = (0, Ma.z)(Xk)) || void 0 === ak || ak.update(Fk.frustum, this.originOffset, yk, uk);
        for (let Mk = 0; Mk < Sk; Mk++) {
          const kk = Ok[Mk];
          !uk || uk.isDrawn(kk.ci, kk.cj, kk.ck) ? Hk(kk, Ek[Mk]) : (this.visCulledParts++, this.visCulledTriangles += 2 * kk.faceCount)
        }
        for (const Mk of this.transparent) vk ||= Wk && Mk.material.liquid && !Mk.material.customRenderMat;
        this.submittedTriangles = Nk, uk && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(kk, Fk, uk)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(vk) : vk && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && mk > 0 && this.geometry.lightFullSky(this.unlit, mk);
        for (const Mk of this.opaqueBatches) this.chunkSorter.sort(Mk.meshes, 1) || Mk.meshes.sort(lb);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(nb)
      }
      sweepVisibility(kk, Fk, Bk) {
        const {
          iJ: Rk
        } = kk.SJ, tk = Rk.I9, ak = this.visPassable, Xk = this.eye[0] + this.originOffset[0], bk = this.eye[1] + this.originOffset[1], wk = this.eye[2] + this.originOffset[2];
        if (!Bk.eyeClear(Xk, bk, wk, Fk.near, Fk.projectionMatrix, Rk)) return null;
        const [dk, sk] = Rk.lBk, Vk = Bk.update(Xk, bk, wk, tk, dk, sk, ak);
        return this.visSweeps = Bk.sweeps, Vk ? Bk : null
      }
      visSeeThrough(kk, Fk) {
        const {
          material: Bk
        } = kk;
        return (!Bk || !this.isBlended(Bk)) && (kk.mesh.visibility < 1 || !(null !== Bk && void 0 !== Bk && Bk.bindGroup) || kk.faceCount > 0 && (!this.geometry.backed(kk) || this.lighting && !kk.vertices.page.twin) || !this.batchDraws(Bk, kk.packed, Fk))
      }
      batchDraws(kk, Fk, Bk) {
        var Rk;
        const tk = Fk ? 2 : 0;
        if (kk === this.visDrawsMaterial && function(kk, Fk) {
            return 0 !== (kk & 1 << Fk)
          }(this.visDrawsBits, tk)) return 0 !== (this.visDrawsBits & 2 << tk);
        let ak = null !== (Rk = this.visBatchDraws.get(kk)) && void 0 !== Rk ? Rk : 0;
        if (!(ak & 1 << tk)) {
          ak |= 1 << tk | (!!kk.bindGroupLayout && this.canDraw(kk, Fk) && !!this.pipelines.get(this.pipelineId(kk, this.programKey(kk, Fk), Bk)) ? 2 << tk : 0), this.visBatchDraws.set(kk, ak)
        }
        return this.visDrawsMaterial = kk, this.visDrawsBits = ak, 0 !== (ak & 2 << tk)
      }
      runVisCheck(kk, Fk, Bk) {
        const {
          SJ: Rk
        } = kk, {
          iJ: tk
        } = Rk, ak = tk.I9, Xk = new Set;
        for (const Ak of this.chunks.values()) Xk.add(Ak.key);
        const bk = Yt.Matrix.FromArray(Fk.viewProjectionMatrix).invert(),
          [wk, dk, sk] = this.originOffset,
          Vk = new Yt.Qe,
          Jk = function(kk, Fk, Bk, Rk) {
            const tk = new Set;
            for (let ak = 0; ak < 27; ak++)
              for (let Xk = 0; Xk < 48; Xk++) {
                const bk = Bk((Xk + .5) / 48 * 2 - 1, (ak + .5) / 27 * 2 - 1);
                Pb(kk, Fk, [bk[0] - Fk[0], bk[1] - Fk[1], bk[2] - Fk[2]], Rk, tk)
              }
            return tk
          }({
            Yz: (kk, Fk, Bk) => tk.Yz(kk, Fk, Bk),
            occluders: Bk.occluders,
            opaque: Bk.opaque,
            Ze: ak,
            isDrawn: (kk, Fk, Rk) => Bk.isDrawn(kk, Fk, Rk),
            hasParts: (kk, Fk, Bk) => Xk.has((0, zb.k)(kk, Fk, Bk))
          }, [this.eye[0] + wk, this.eye[1] + dk, this.eye[2] + sk], ((kk, Fk) => (Yt.Qe.TransformCoordinatesFromFloatsToRef(kk, Fk, .5, bk, Vk), [Vk.x + wk, Vk.y + dk, Vk.z + sk])), (tk.lBk[0] + 1) * ak);
        this.visViolations = Jk.size;
        for (const Ak of Jk) this.warnOnce(`vis:${Ak}`, `Lite terrain cave culling skipped chunk ${Ak}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var kk;
        null !== (kk = this.ie) && void 0 !== kk && kk.isRunning() && (this.shaderPackInputs ??= new Ca(this.device, this.ie.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.ie, this.eye, this.lighting))
      }
      bindShaderPackInputs(kk, Fk, Bk) {
        var Rk, tk, ak, Xk;
        let bk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: wk
        } = this.shaderPackFields(Fk, Bk);
        if (void 0 === wk) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Ca(this.device, Bk.textureLayers(), this.sunShadow), this.shaderPackInputs.write(Bk, this.eye, this.lighting));
        const dk = aR(wk) ? null !== (Rk = null === (tk = this.sceneDepth) || void 0 === tk ? void 0 : tk.view) && void 0 !== Rk ? Rk : this.standIn() : null,
          sk = bk ? null !== (ak = null === (Xk = this.shadowMask) || void 0 === Xk ? void 0 : Xk.view) && void 0 !== ak ? ak : this.standIn() : null;
        this.shaderPackInputs.bind(kk, dk, ha(wk, !!this.sunShadow), sk)
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
        var kk, Fk;
        return null !== (kk = null === (Fk = this.shaderPackInputs) || void 0 === Fk ? void 0 : Fk.bindGroupFor(null, !0)) && void 0 !== kk ? kk : null
      }
      resetBatches(kk) {
        const Fk = this.opaqueBatches;
        let Bk = 0;
        for (const Rk of Fk) Rk.meshes.length > 0 && (Rk.meshes.length = 0, Rk.faceCull = this.batchFaceCull(Rk.material, kk), Fk[Bk++] = Rk);
        Fk.length = Bk
      }
      orderBatches() {
        const kk = this.opaqueBatches;
        for (let Fk = 0; Fk < kk.length; Fk++) {
          const Bk = kk[Fk];
          Bk.group = Fk;
          for (let Rk = 0; Rk < Fk; Rk++) {
            const Fk = kk[Rk];
            if (Fk.material === Bk.material && Fk.packed === Bk.packed) {
              Bk.group = Fk.group;
              break
            }
          }
          Bk.nearest = Bk.meshes.length > 0 ? Bk.meshes[0].distance : 1 / 0
        }
        kk.sort(hb)
      }
      batchFor(kk, Fk, Bk, Rk, tk) {
        for (const Xk of this.opaqueBatches)
          if (Xk.material === kk && Xk.packed === Fk && Xk.page === Bk && Xk.resting === Rk) return Xk;
        const ak = {
          material: kk,
          packed: Fk,
          page: Bk,
          resting: Rk,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(kk, tk)
        };
        return this.opaqueBatches.push(ak), ak
      }
      batchFaceCull(kk, Fk) {
        return !(!Fk || !(0, Tb.u)(kk.model)) && (!this.ie || ! function(kk) {
          var Fk;
          return !(null === (Fk = (0, HF.f)(kk)) || void 0 === Fk || !Fk.movesVertices)
        }(this.shaderPackFields(kk, this.ie).packVariant))
      }
      writeFrameUniforms(kk, Fk) {
        const Bk = this.frameUniforms,
          Rk = VR;
        if ((0, Jb.v)(kk, Bk), Bk[Rk.fogInfos] = Fk.fogEnabled ? Fk.fogMode : 0, Bk[Rk.fogInfos + 1] = Fk.fogStart, Bk[Rk.fogInfos + 2] = Fk.fogEnd, Bk[Rk.fogInfos + 3] = Fk.fogDensity, Bk.set(Fk.fogColour, Rk.fogColour), Bk[Rk.outputHeight] = Fk.renderHeight, Bk.set(Fk.ambientColour, Rk.sceneAmbient), (0, Jb.p)(Fk, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Fk = (0, Ab.f)(kk.Ey, kk.xe, kk.je);
          for (let kk = 0; kk < 4; kk++) Bk[Rk.aoLevels + kk] = Fk[kk] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, Bk)
      }
      animateMaterials(kk) {
        const Fk = AR.anim;
        for (const Bk of this.materials.values()) Bk.animated && (Bk.uniformData[Fk] = kk, this.device.queue.writeBuffer(Bk.uniformBuffer, 4 * Fk, Bk.uniformData, Fk, 1))
      }
      canDraw(kk, Fk) {
        return !("atlas" === kk.texture && !Fk) || (this.warnOnce(`stride:${kk.id}`, `Lite terrain: material "${kk.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(kk, Fk) {
        let Bk = 0;
        kk.setBindGroup(1, this.frameBindGroup);
        for (const Rk of this.opaqueBatches) {
          if (!Rk.meshes.length || !this.canDraw(Rk.material, Rk.packed)) continue;
          const tk = this.pipelineFor(Rk.material, Rk.packed, Fk, Rk.resting);
          tk && (kk.setPipeline(tk), kk.setBindGroup(2, Rk.material.bindGroup), this.ie && this.bindShaderPackInputs(kk, Rk.material, this.ie, this.prepassOf.has(tk)), Bk += this.drawBatch(kk, Rk))
        }
        return Bk
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(kk, Fk, Bk) {
        const Rk = this.target,
          tk = this.ie;
        if (!Rk || !tk || 0 === this.maskPipelines) return 0;
        let ak = 0,
          Xk = null;
        this.geometry.setDrawing(!0);
        try {
          for (const bk of this.opaqueBatches) {
            if (!bk.meshes.length || !this.canDraw(bk.material, bk.packed)) continue;
            const wk = this.pipelineFor(bk.material, bk.packed, Rk, bk.resting),
              dk = wk && this.prepassOf.get(wk);
            dk && (Xk || (Xk = kk.beginRenderPass(Fk), Xk.setBindGroup(0, Bk), Xk.setBindGroup(1, this.frameBindGroup)), Xk.setPipeline(dk), Xk.setBindGroup(2, bk.material.bindGroup), this.bindShaderPackInputs(Xk, bk.material, tk, !0), ak += this.drawBatch(Xk, bk))
          }
        } finally {
          var bk;
          null === (bk = Xk) || void 0 === bk || bk.end(), this.geometry.setDrawing(!1)
        }
        return ak
      }
      drawBatch(kk, Fk) {
        let Bk = 0;
        for (const Rk of Fk.meshes) {
          const {
            rangeCount: Fk
          } = Rk;
          Fk > 0 && (Bk += this.geometry.draw(kk, Rk, this.lighting, Rk.first0, Rk.count0), Fk > 1 && (Bk += this.geometry.draw(kk, Rk, this.lighting, Rk.first1, Rk.count1)))
        }
        return Bk
      }
      drawTransparent(kk, Fk) {
        let Bk = 0,
          Rk = null,
          tk = null;
        kk.setBindGroup(1, this.frameBindGroup);
        for (const ak of this.transparent) {
          const Xk = ak.material;
          if (!this.canDraw(Xk, ak.packed)) continue;
          const bk = this.pipelineFor(Xk, ak.packed, Fk);
          bk && (bk !== Rk && (kk.setPipeline(bk), Rk = bk, this.ie && this.bindShaderPackInputs(kk, Xk, this.ie)), Xk !== tk && (kk.setBindGroup(2, Xk.bindGroup), tk = Xk), Bk += this.geometry.draw(kk, ak, this.lighting))
        }
        return Bk
      }
    }

    function jb(kk, Fk, Bk, Rk) {
      return `${uR(kk)}|${kk.atlasLayers}|${kk.Vl}|${Fk}|${Bk}|${Rk._colorFormat}|${Rk._depthStencilFormat}|${Rk._sampleCount}`
    }

    function lb(kk, Fk) {
      return kk.distance - Fk.distance
    }

    function nb(kk, Fk) {
      return Fk.distance - kk.distance
    }
    class Ib {
      constructor() {
        this.left = []
      }
      sort(kk, Fk) {
        for (let Bk = 0; Bk < kk.length; Bk++) {
          const Fk = kk[Bk].distance;
          if (Fk - Fk !== 0) return !1
        }
        return this.sortRange(kk, 0, kk.length, Fk), !0
      }
      sortRange(kk, Fk, Bk, Rk) {
        if (Bk - Fk <= 16) {
          for (let tk = Fk + 1; tk < Bk; tk++) {
            const Bk = kk[tk],
              ak = Rk * Bk.distance;
            let Xk = tk - 1;
            for (; Xk >= Fk && Rk * kk[Xk].distance > ak; Xk--) kk[Xk + 1] = kk[Xk];
            kk[Xk + 1] = Bk
          }
          return
        }
        const tk = Fk + Bk >>> 1;
        if (this.sortRange(kk, Fk, tk, Rk), this.sortRange(kk, tk, Bk, Rk), Rk * kk[tk - 1].distance <= Rk * kk[tk].distance) return;
        const {
          left: ak
        } = this, Xk = tk - Fk;
        for (let sk = 0; sk < Xk; sk++) ak[sk] = kk[Fk + sk];
        let bk = 0,
          wk = tk,
          dk = Fk;
        for (; bk < Xk && wk < Bk;) kk[dk++] = Rk * kk[wk].distance < Rk * ak[bk].distance ? kk[wk++] : ak[bk++];
        for (; bk < Xk;) kk[dk++] = ak[bk++]
      }
    }
    const Qb = Math.ceil(102);

    function kw(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Fk;
      const ak = Math.min(Fk, Bk),
        Xk = new Uint32Array(FB(Rk));
      for (let bk = 0; bk < Rk; bk++) {
        const Fk = Math.floor(bk * ak / Rk),
          Bk = Math.max(Fk + 1, Math.floor((bk + 1) * ak / Rk));
        for (let wk = 0; wk < Rk; wk++) {
          const dk = Math.floor(wk * ak / Rk),
            sk = Math.max(dk + 1, Math.floor((wk + 1) * ak / Rk));
          let Vk = 0;
          for (let Rk = Fk; Rk < Bk; Rk++)
            for (let Fk = dk; Fk < sk; Fk++) kk[Rk * tk + Fk] >= Qb && Vk++;
          if (2 * Vk >= (Bk - Fk) * (sk - dk)) {
            const kk = wk + Rk * bk;
            Xk[kk >>> 5] |= 1 << (31 & kk)
          }
        }
      }
      return Xk
    }

    function Fw(kk) {
      return Math.max(1, Math.min(16, kk))
    }
    class Bw {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = kk, this.loadTexture = Fk, this.warn = Bk, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(kk, Fk) {
        return (kk.iG !== this.builtVersion || this.blockCaster.length !== Fk) && (this.build(kk, Fk), !0)
      }
      build(kk, Fk) {
        this.builtVersion = kk.iG;
        const Bk = new Uint16Array(Fk),
          Rk = new Map;
        for (let tk = 1; tk < Fk; tk++) {
          const Fk = this.classify(kk, tk, Rk);
          if (null === Fk || Fk === lF) {
            Bk[tk] = null === Fk ? 0 : lF;
            continue
          }
          let ak = this.byKey.get(Fk.key);
          void 0 === ak && (ak = this.allocate(Fk), this.byKey.set(Fk.key, ak)), Bk[tk] = ak
        }
        this.blockCaster = Bk, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(kk, Fk) {
        const Bk = kk.xI[Fk];
        if ("function" !== typeof Bk) return Bk;
        try {
          return Bk()
        } catch (Rk) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Fk}: ${Rk instanceof Error?Rk.message:String(Rk)}`), null
        }
      }
      classify(kk, Fk, Bk) {
        const Rk = this.option(kk, Fk);
        if ("none" === Rk) return null;
        if (Rk && Rk.planes.length > 0) {
          const kk = Rk.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(kk)}`,
            planes: kk
          }
        }
        if (kk.OA[Fk]) return null;
        const tk = kk.SA[Fk] ? kk.rG(Fk) : null;
        if (tk && tk.length >= 6) {
          const kk = function(kk) {
            const Fk = new Uint32Array(16);
            for (let Bk = 0; Bk + 6 <= kk.length; Bk += 6) {
              const Rk = [0, 1, 2].map((Fk => Math.max(0, Math.ceil(8 * kk[Bk + Fk] - .5)))),
                tk = [0, 1, 2].map((Fk => Math.min(7, Math.floor(8 * kk[Bk + Fk + 3] - .5))));
              for (let kk = Rk[2]; kk <= tk[2]; kk++)
                for (let Bk = Rk[1]; Bk <= tk[1]; Bk++)
                  for (let ak = Rk[0]; ak <= tk[0]; ak++) {
                    const Rk = ak + 8 * (Bk + 8 * kk);
                    Fk[Rk >>> 5] |= 1 << (31 & Rk)
                  }
            }
            return Fk
          }(tk);
          return function(kk) {
            return kk.every((kk => 4294967295 === kk))
          }(kk) ? lF : kk.every((kk => 0 === kk)) ? null : {
            kind: "shape",
            key: `shape:${kk.join(",")}`,
            mask: kk
          }
        }
        if (kk.wT[Fk] || !kk.Sy[Fk]) return null;
        const ak = [0, 1, 2, 3, 4, 5].map((Rk => {
          const tk = kk.Ny[6 * Fk + Rk];
          let ak = Bk.get(tk);
          return void 0 === ak && (ak = function(kk) {
            if (!kk || kk.Py) return null;
            const {
              Rl: Fk,
              Vl: Bk,
              Bl: Rk
            } = kk;
            if (!Fk || !Bk || !(Bk > 0) || void 0 === Rk || !(Rk >= 0)) return null;
            const tk = Fk[0],
              ak = Bk * Bk * 4;
            if (!tk || tk.byteLength < ak) return null;
            const Xk = Math.floor(tk.byteLength / ak),
              bk = Fk[Math.floor(Rk / Xk)];
            if (!bk) return null;
            const wk = new Uint8Array(bk.buffer, bk.byteOffset, bk.byteLength),
              dk = Rk % Xk * ak;
            if (dk + ak > wk.length) return null;
            const sk = new Uint8Array(Bk * Bk);
            let Vk = !1;
            for (let Jk = 0; Jk < sk.length; Jk++) sk[Jk] = wk[dk + 4 * Jk + 3], Vk ||= sk[Jk] < Qb;
            return Vk ? {
              alpha: sk,
              width: Bk
            } : null
          }(kk.zy(tk)), Bk.set(tk, ak)), ak
        }));
        if (ak.every((kk => null === kk))) return lF;
        const Xk = Fw(Math.max(...ak.map((kk => {
            var Fk;
            return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.width) && void 0 !== Fk ? Fk : 1
          })))),
          bk = new Uint32Array(FB(Xk)).fill(4294967295),
          wk = ak.map((kk => null === kk ? bk : kw(kk.alpha, kk.width, kk.width, Xk)));
        return {
          kind: "cutout",
          key: `cutout:${Xk}:${wk.map((kk=>kk.join(","))).join("|")}`,
          size: Xk,
          faces: wk
        }
      }
      allocate(kk) {
        if (this.nextCaster >= BB) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Fk = this.nextCaster++;
        if (this.writeCaster(Fk, nF, 0, 0, 0), "shape" === kk.kind) {
          const Bk = this.allocateMask(kk.mask.length);
          Bk >= 0 && (this.sink(Bk, kk.mask), this.writeCaster(Fk, IF, Bk, 0, 8))
        } else if ("cutout" === kk.kind) {
          const Bk = FB(kk.size),
            Rk = this.allocateMask(6 * Bk);
          if (Rk >= 0) {
            const tk = new Uint32Array(6 * Bk);
            kk.faces.forEach(((kk, Fk) => {
              tk.set(kk, Fk * Bk)
            })), this.sink(Rk, tk), this.writeCaster(Fk, kB, Rk, 0, kk.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Fk, kk.planes).finally((() => {
          this.planesLoading--
        })));
        return Fk
      }
      async loadPlanes(kk, Fk) {
        const Bk = await Promise.all(Fk.map((kk => this.texture(kk.texture))));
        if (Bk.some((kk => null === kk))) return;
        const Rk = Bk,
          tk = Fw(Math.max(...Rk.map((kk => Math.min(kk.width, kk.height))))),
          ak = FB(tk),
          Xk = this.allocateMask(Fk.length * (4 + ak));
        if (Xk < 0) return;
        const bk = new Uint32Array(Fk.length * (4 + ak)),
          wk = 4 * Fk.length;
        Fk.forEach(((kk, Fk) => {
          const Bk = Xk + wk + Fk * ak;
          bk.set(function(kk, Fk) {
            const [Bk, Rk] = kk.tangent, tk = Math.hypot(Bk, Rk) || 1, ak = Bk / tk, Xk = Rk / tk, bk = kk.centre[0] * Xk - kk.centre[1] * ak, wk = new Uint32Array(4);
            return new Float32Array(wk.buffer, 0, 3).set([ak, Xk, bk]), wk[3] = Fk, wk
          }(kk, Bk), 4 * Fk), bk.set(kw(Rk[Fk].alpha, Rk[Fk].width, Rk[Fk].height, tk), wk + Fk * ak)
        })), this.sink(Xk, bk), this.writeCaster(kk, QF, Xk, Fk.length, tk)
      }
      texture(kk) {
        let Fk = this.textures.get(kk);
        return Fk || (Fk = this.loadTexture(kk).catch((Fk => (this.warn(`Sun shadows: no mask for ${kk}: ${Fk instanceof Error?Fk.message:String(Fk)}`), null))), this.textures.set(kk, Fk)), Fk
      }
      allocateMask(kk) {
        if (this.nextMaskWord + kk > RB) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Fk = 32768 + this.nextMaskWord;
        return this.nextMaskWord += kk, Fk
      }
      writeCaster(kk, Fk, Bk, Rk, tk) {
        this.sink(0 + 4 * kk, Uint32Array.of(Fk, Bk, Rk, tk))
      }
      warnOnce(kk) {
        this.warned.has(kk) || (this.warned.add(kk), this.warn(kk))
      }
    }
    var Rw = Bk(37389);

    function tw(kk) {
      return !kk.qy && !kk.PRk && !kk.ey
    }

    function aw() {
      return {
        bricks: new Uint32Array(hF),
        cells: new Uint16Array(32768),
        special: new Uint8Array(zF)
      }
    }
    class Xw {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = kk, this.writeVoxels = Fk, this.writePool = Bk, this.warn = Rk, this.eyeChunk = null, this.slotChunk = new Array(UF).fill(null), this.slotVersion = new Float64Array(UF).fill(-1), this.slotPool = new Array(UF).fill(null), this.starved = new Uint8Array(UF), this.queue = [], this.queued = new Uint8Array(UF), this.queueSorted = !0, this.freePool = new Uint32Array(tB), this.freeCount = tB, this.casterTable = null, this.warnedPool = !1, this.scratch = aw(), this.victimScratch = aw(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * UF), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let tk = 0; tk < tB; tk++) this.freePool[tk] = 65535 - tk
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return tB - this.freeCount
      }
      chunkAdded(kk) {
        if (null === this.eyeChunk || !this.inRadius(kk.i, kk.j, kk.k)) return;
        const Fk = KF(kk.i, kk.j, kk.k);
        this.slotChunk[Fk] = kk, this.slotVersion[Fk] = -1, this.enqueue(Fk)
      }
      update(kk, Fk, Bk) {
        const Rk = this.casters.blockCaster;
        if (Rk !== this.casterTable) {
          this.casterTable = Rk;
          for (let kk = 0; kk < UF; kk++) this.slotVersion[kk] = -1, this.slotChunk[kk] && this.enqueue(kk)
        }
        const tk = Math.floor(kk[0] / 32),
          ak = Math.floor(kk[1] / 32),
          Xk = Math.floor(kk[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== tk || this.eyeChunk[1] !== ak || this.eyeChunk[2] !== Xk) && (this.eyeChunk = [tk, ak, Xk], this.follow(Fk), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let bk = 0; bk < UF; bk++) {
          const kk = this.slotChunk[bk];
          kk && (kk.BBk || kk.Wy !== this.slotVersion[bk]) && this.enqueue(bk)
        }
        this.drain(Bk), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(kk, Fk) {
        this.records.set(Fk, 4 * kk), this.windowTopStale = !0, this.writeVoxels(4 * kk, Fk)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const kk = this.records;
        let Fk = -1 / 0;
        for (let Rk = 0; Rk < kk.length; Rk += 4) {
          const Bk = 255 & kk[Rk + 3];
          Bk !== TF && Bk !== rF || !this.inRadius(kk[Rk], kk[Rk + 1], kk[Rk + 2]) || (Fk = Math.max(Fk, kk[Rk + 1] * uF + (kk[Rk + 3] >>> 8)))
        }
        const Bk = Fk === -1 / 0 ? 1 : Fk + CF;
        Bk !== this.windowTop[0] && (this.windowTop[0] = Bk, this.writeVoxels(qF, this.windowTop))
      }
      follow(kk) {
        const Fk = this.eyeChunk,
          [Bk, Rk, tk] = MF;
        for (let Xk = -tk; Xk <= tk; Xk++)
          for (let tk = -Rk; tk <= Rk; tk++)
            for (let Rk = -Bk; Rk <= Bk; Rk++) {
              var ak;
              const Bk = Fk[0] + Rk,
                bk = Fk[1] + tk,
                wk = Fk[2] + Xk,
                dk = KF(Bk, bk, wk),
                sk = this.slotChunk[dk];
              if (sk && !sk.BBk && sk.i === Bk && sk.j === bk && sk.k === wk) continue;
              const Vk = null !== (ak = kk(Bk, bk, wk)) && void 0 !== ak ? ak : null;
              sk && (sk.i !== Bk || sk.j !== bk || sk.k !== wk) && this.slotPool[dk] && (this.release(dk), this.record.fill(0), this.writeRecord(dk, this.record)), this.slotChunk[dk] = Vk, this.slotVersion[dk] = -1, (Vk || sk) && this.enqueue(dk)
            }
      }
      requeueStarved() {
        for (let kk = 0; kk < UF; kk++) this.starved[kk] && this.slotChunk[kk] && this.enqueue(kk)
      }
      enqueue(kk) {
        this.queued[kk] || (this.queued[kk] = 1, this.queue.push(kk), this.queueSorted = !1)
      }
      drain(kk) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const kk = new Map;
          for (const Fk of this.queue) kk.set(Fk, this.slotDistance(Fk));
          this.queue.sort(((Fk, Bk) => kk.get(Bk) - kk.get(Fk))), this.queueSorted = !0
        }
        const Fk = performance.now();
        let Bk = 0;
        const Rk = [];
        for (; this.queue.length > 0 && (0 === Bk || performance.now() - Fk < kk);) {
          const kk = this.queue.pop(),
            Fk = this.slotChunk[kk];
          !Fk || Fk.BBk || tw(Fk) ? (this.queued[kk] = 0, this.encodeSlot(kk), Bk++) : Rk.push(kk)
        }
        for (let tk = Rk.length - 1; tk >= 0; tk--) this.queue.push(Rk[tk])
      }
      slotDistance(kk) {
        const Fk = this.slotChunk[kk],
          Bk = this.eyeChunk;
        return Fk ? Math.max(Math.abs(Fk.i - Bk[0]), Math.abs(Fk.j - Bk[1]), Math.abs(Fk.k - Bk[2])) : 0
      }
      inRadius(kk, Fk, Bk) {
        const Rk = this.eyeChunk,
          [tk, ak, Xk] = MF;
        return Math.abs(kk - Rk[0]) <= tk && Math.abs(Fk - Rk[1]) <= ak && Math.abs(Bk - Rk[2]) <= Xk
      }
      release(kk) {
        const Fk = this.slotPool[kk];
        if (Fk) {
          for (let kk = Fk.length - 1; kk >= 0; kk--) this.freePool[this.freeCount++] = Fk[kk];
          this.slotPool[kk] = null
        }
      }
      encodeSlot(kk) {
        var Fk, Bk, Rk, tk, ak;
        let Xk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const wk = null !== (Fk = null === (Bk = this.slotPool[kk]) || void 0 === Bk ? void 0 : Bk.length) && void 0 !== Fk ? Fk : 0;
        this.release(kk), this.starved[kk] = 0;
        const dk = this.slotChunk[kk],
          sk = this.record;
        if (!dk || dk.BBk || !dk.jJ) return this.slotChunk[kk] = null, this.slotVersion[kk] = -1, sk.fill(0), this.writeRecord(kk, sk), void(wk > 0 && this.requeueStarved());
        this.slotVersion[kk] = dk.Wy;
        const Vk = this.encodeBricks(dk, kk, Xk, bk);
        sk[0] = dk.i, sk[1] = dk.j, sk[2] = dk.k, sk[3] = Vk, this.writeRecord(kk, sk), null === (Rk = this.encoded) || void 0 === Rk || Rk.call(this, dk), bk && (null !== (tk = null === (ak = this.slotPool[kk]) || void 0 === ak ? void 0 : ak.length) && void 0 !== tk ? tk : 0) < wk && this.requeueStarved()
      }
      encodeBricks(kk, Fk, Bk, Rk) {
        if (kk.Me) return GF;
        const tk = this.casters.blockCaster,
          {
            data: ak,
            stride: Xk,
            offset: bk
          } = kk.jJ,
          [wk, dk, sk] = Xk,
          Vk = uF,
          {
            bricks: Jk,
            cells: Ak,
            special: ek
          } = Bk;
        Jk.fill(0), ek.fill(0);
        let yk = 0,
          fk = 0,
          mk = 0;
        for (let Wk = 0; Wk < Vk; Wk++) {
          const Fk = Wk >> 2,
            Bk = 3 & Wk,
            Rk = kk.pA[Wk],
            Xk = Rk === Rw.d ? -1 : Rk < tk.length ? tk[Rk] : 0;
          if (0 !== Xk)
            for (let kk = 0; kk < Vk; kk++) {
              const Rk = kk >> 2,
                vk = 3 & kk;
              let ik = bk + kk * wk + Wk * dk;
              for (let kk = 0; kk < Vk; kk++, ik += sk) {
                let bk = Xk;
                if (bk < 0) {
                  const kk = ak[ik];
                  if (bk = kk < tk.length ? tk[kk] : 0, 0 === bk) continue
                }
                const wk = xF(Rk, Fk, kk >> 2),
                  dk = jF(vk, Bk, 3 & kk);
                Jk[3 * wk + (dk >>> 5)] |= 1 << (31 & dk), Ak[wk * DF + dk] = bk, yk++, mk = Wk, bk === lF ? fk++ : ek[wk] = 1
              }
            }
        }
        return 0 === yk ? GF : 32768 === fk ? TF | mk << 8 : (this.writePoolEntries(Fk, Bk, Rk), this.writeVoxels(PF + Fk * hF, Jk), rF | mk << 8)
      }
      writePoolEntries(kk, Fk, Bk) {
        const {
          bricks: Rk,
          cells: tk,
          special: ak
        } = Fk, Xk = this.entry;
        let bk = 0;
        for (let sk = 0; sk < zF; sk++) bk += ak[sk];
        if (0 === bk) return;
        Bk && this.freeCount < bk && this.evictBeyond(kk, bk);
        const wk = new Uint32Array(Bk ? Math.min(bk, this.freeCount) : 0);
        let dk = 0;
        for (let sk = 0; sk < zF; sk++) {
          if (!ak[sk]) continue;
          const Bk = 3 * sk;
          if (dk === wk.length) {
            this.dropSpecials(Fk, sk), this.starved[kk] = 1;
            continue
          }
          const bk = this.freePool[--this.freeCount];
          wk[dk++] = bk;
          for (let kk = 0; kk < DF; kk++) {
            const Fk = Rk[Bk + (kk >>> 5)] >>> (31 & kk) & 1 ? tk[sk * DF + kk] : 0;
            1 & kk ? Xk[kk >> 1] |= Fk << 16 : Xk[kk >> 1] = Fk
          }
          Rk[Bk + 2] = bk + 1, this.writePool(aB + 32 * bk, Xk)
        }
        wk.length > 0 && (this.slotPool[kk] = wk)
      }
      evictBeyond(kk, Fk) {
        const Bk = this.slotDistance(kk),
          Rk = [];
        for (let tk = 0; tk < UF; tk++) tk !== kk && this.slotPool[tk] && this.slotDistance(tk) > Bk && Rk.push(tk);
        Rk.sort(((kk, Fk) => this.slotDistance(Fk) - this.slotDistance(kk)));
        for (const tk of Rk) {
          if (this.freeCount >= Fk) return;
          const kk = this.slotChunk[tk];
          kk && !kk.BBk && kk.jJ && (kk.Wy === this.slotVersion[tk] || tw(kk)) && this.encodeSlot(tk, this.victimScratch, !1)
        }
      }
      dropSpecials(kk, Fk) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const Bk = 3 * Fk;
        for (let Rk = 0; Rk < DF; Rk++) kk.cells[Fk * DF + Rk] !== lF && (kk.bricks[Bk + (Rk >>> 5)] &= ~(1 << (31 & Rk)))
      }
    }
    var bw = Bk(37131);
    class ww {
      constructor(kk) {
        this.device = kk, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new fB, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.iJ = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = kk.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = kk.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(kk, Fk, Bk) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Rk
        } = this;
        Rk.UA(kk, Fk), Bk.forEachSunShadowCaster((kk => {
          this.add(kk)
        })), Rk.finish();
        const tk = 0 === Rk.parts;
        if (tk && this.uploadedEmpty) return;
        this.uploadedEmpty = tk;
        const {
          queue: ak
        } = this.device, {
          words: Xk
        } = Rk;
        ak.writeBuffer(this.frameBuffer, 0, Xk, 0, 16385), Rk.refs > 0 && ak.writeBuffer(this.frameBuffer, 65540, Xk, dB, Rk.refs), tk || ak.writeBuffer(this.frameBuffer, 327684, Xk, sB, Rk.parts * wB)
      }
      add(kk) {
        const Fk = this.gridFor(kk);
        if (!Fk) return;
        const {
          frame: Bk
        } = this, {
          iJ: Rk,
          worldAt: tk,
          instances: ak,
          instanceCount: Xk,
          thin: bk
        } = kk;
        if (ak)
          for (let wk = 0; wk < Xk; wk++) bk ? (WB(ak, 16 * wk, Rk, tk, this.iJ), Bk.add(Fk, this.iJ)) : Bk.add(Fk, ak, 16 * wk);
        else Bk.add(Fk, Rk, tk)
      }
      gridFor(kk) {
        let {
          geometry: Fk,
          indexed: Bk,
          first: Rk,
          count: tk,
          skip: ak
        } = kk, Xk = this.grids.get(Fk);
        Xk || (Xk = new Map, this.grids.set(Fk, Xk));
        const bk = `${Bk?Rk:-1-Rk}:${tk}:${null!==ak&&void 0!==ak?ak:""}`;
        let wk = Xk.get(bk);
        if (void 0 !== wk || this.gridsFull) return wk;
        const dk = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = dk + 2;
        else if (dk > this.bakeDeadline) return;
        return wk = this.bake(Fk, Bk, Rk, tk, ak), void 0 !== wk && Xk.set(bk, wk), wk
      }
      bake(kk, Fk, Bk, Rk, tk) {
        const ak = kk.vertexAttributes.find((kk => "position" === kk.kind)),
          Xk = ak ? function(kk, Fk, Bk, Rk) {
            let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const ak = kk => Fk ? Fk[Bk + kk] : Bk + kk,
              Xk = kk => null !== tk && [0, 1, 2].some((Fk => {
                const Bk = ak(kk + Fk);
                return Bk >= tk[0] && Bk < tk[1]
              })),
              bk = [1 / 0, 1 / 0, 1 / 0],
              wk = [-1 / 0, -1 / 0, -1 / 0];
            for (let Wk = 0; Wk + 2 < Rk; Wk += 3)
              if (!Xk(Wk))
                for (let Fk = 0; Fk < 3; Fk++) {
                  const Bk = ak(Wk + Fk);
                  for (let Fk = 0; Fk < 3; Fk++) bk[Fk] = Math.min(bk[Fk], kk[3 * Bk + Fk]), wk[Fk] = Math.max(wk[Fk], kk[3 * Bk + Fk])
                }
            const dk = Math.max(wk[0] - bk[0], wk[1] - bk[1], wk[2] - bk[2]);
            if (!(dk > 0)) return null;
            const sk = dk / 64,
              Vk = [0, 0, 0],
              Jk = [0, 0, 0],
              Ak = [0, 0, 0];
            for (let Wk = 0; Wk < 3; Wk++) Vk[Wk] = Math.min(65, Math.ceil((wk[Wk] - bk[Wk]) / sk) + 1), Jk[Wk] = bk[Wk] - sk / 2, Ak[Wk] = Jk[Wk] + Vk[Wk] * sk;
            const ek = new Uint32Array(Math.ceil(Vk[0] * Vk[1] * Vk[2] / 32)),
              yk = new Float64Array(9),
              fk = [0, 0, 0],
              mk = [0, 0, 0];
            for (let Wk = 0; Wk + 2 < Rk; Wk += 3)
              if (!Xk(Wk)) {
                for (let Fk = 0; Fk < 3; Fk++) {
                  const Bk = ak(Wk + Fk);
                  for (let Rk = 0; Rk < 3; Rk++) yk[3 * Fk + Rk] = kk[3 * Bk + Rk]
                }
                for (let kk = 0; kk < 3; kk++) {
                  const Fk = Math.min(yk[kk], yk[3 + kk], yk[6 + kk]),
                    Bk = Math.max(yk[kk], yk[3 + kk], yk[6 + kk]);
                  fk[kk] = Math.max(0, Math.floor((Fk - Jk[kk]) / sk - 1e-6)), mk[kk] = Math.min(Vk[kk] - 1, Math.floor((Bk - Jk[kk]) / sk + 1e-6))
                }
                for (let kk = fk[2]; kk <= mk[2]; kk++)
                  for (let Fk = fk[1]; Fk <= mk[1]; Fk++)
                    for (let Bk = fk[0]; Bk <= mk[0]; Bk++)
                      if (vB(yk, Jk[0] + (Bk + .5) * sk, Jk[1] + (Fk + .5) * sk, Jk[2] + (kk + .5) * sk, sk / 2)) {
                        const Rk = Bk + Vk[0] * (Fk + Vk[1] * kk);
                        ek[Rk >>> 5] |= 1 << (31 & Rk)
                      }
              } return {
              words: ek,
              lo: Jk,
              hi: Ak,
              cell: sk,
              dims: Vk
            }
          }((0, bw.f)(ak, kk.vertexCount), Fk ? kk.indexData : null, Bk, Rk, tk) : null;
        if (!Xk) return null;
        const {
          words: bk,
          ...wk
        } = Xk;
        if (this.gridTop + bk.length > JB) return void(this.gridsFull = !0);
        const dk = this.gridTop;
        return this.gridTop += bk.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * dk, bk), {
          ...wk,
          at: dk
        }
      }
    }
    const dw = Math.cos(1 * Math.PI / 180);

    function sw(kk, Fk) {
      return kk[0] * Fk[0] + kk[1] * Fk[1] + kk[2] * Fk[2] < dw
    }
    async function Vw(kk) {
      const {
        pixels: Fk,
        width: Bk,
        height: Rk
      } = await zt(kk), tk = new Uint8Array(Bk * Rk);
      for (let ak = 0; ak < tk.length; ak++) tk[ak] = Fk[4 * ak + 3];
      return {
        width: Bk,
        height: Rk,
        alpha: tk
      }
    }
    class Jw {
      constructor(kk, Fk) {
        this.device = kk, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(YB.q), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = kk.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = kk.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * ZF,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = kk.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [Bk, Rk, tk] = YB.u;
        this.volume = kk.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: Bk,
            height: Rk,
            depthOrArrayLayers: tk
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = kk.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = kk.createBuffer({
          label: "sun-shadow-volume-work",
          size: YB.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Fk ? new ww(kk) : null, this.entityStandIn = Fk ? null : kk.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var kk, Fk;
        const Bk = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || Bk.push("Lite sun shadow volume pipeline compiling");
        const Rk = null !== (kk = null === (Fk = this.casters) || void 0 === Fk ? void 0 : Fk.planesLoading) && void 0 !== kk ? kk : 0;
        return Rk > 0 && Bk.push(`${Rk} Lite sun shadow plane casters loading their textures`), Bk
      }
      entries() {
        var kk, Fk, Bk, Rk;
        const tk = NF.r;
        return [{
          binding: tk.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: tk.jJ,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: tk.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: tk.volume,
          resource: this.volumeView
        }, {
          binding: tk.sampler,
          resource: this.volumeSampler
        }, {
          binding: tk.entities,
          resource: {
            buffer: null !== (kk = null === (Fk = this.entities) || void 0 === Fk ? void 0 : Fk.frameBuffer) && void 0 !== kk ? kk : this.entityStandIn
          }
        }, {
          binding: tk.entityGrids,
          resource: {
            buffer: null !== (Bk = null === (Rk = this.entities) || void 0 === Rk ? void 0 : Rk.gridBuffer) && void 0 !== Bk ? Bk : this.entityStandIn
          }
        }]
      }
      prepare(kk, Fk, Bk) {
        var Rk;
        this.entitiesThisFrame = !1;
        const tk = null !== (Rk = null === Bk || void 0 === Bk ? void 0 : Bk.sunShadowReach()) && void 0 !== Rk ? Rk : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!Bk || !tk.sunShadow && !tk.airShadow) return void(this.volumeHolds = null);
        if (kk.iJ.I9 !== uF) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${kk.iJ.I9}; everything is lit.`)));
        const ak = this.start(kk);
        this.casters.update(kk.oA, kk.oA.SA.length);
        const Xk = kk.CJ;
        for (let Jk = 0; Jk < 3; Jk++) this.eye[Jk] = Fk[Jk] + Xk[Jk];
        const bk = (0, YB.y)(this.eye);
        this.staleNear = bk;
        const wk = kk.iJ.Zy;
        ak.update(this.eye, ((kk, Fk, Bk) => wk.py(kk, Fk, Bk)), 1);
        const dk = (0, YB.w)(Bk.w6()),
          sk = ak.eyeChunk,
          Vk = this.uniformInts;
        for (let Jk = 0; Jk < 3; Jk++) Vk[Jk] = sk[Jk], Vk[4 + Jk] = bk[Jk];
        this.entitiesThisFrame = null !== this.entities && tk.sunShadow, this.entitiesThisFrame && yB(this.uniformFloats, 8, Fk, dk), null !== this.volumeHolds && (this.castersWritten || sw(dk, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(bk, dk, sk)
      }
      markStale(kk) {
        const Fk = this.staleNear,
          Bk = uF,
          Rk = [kk.i * Bk, kk.j * Bk, kk.k * Bk];
        for (let ak = 0; ak < 3; ak++)
          if (Rk[ak] + Bk <= Fk[ak] - Bk || Rk[ak] >= Fk[ak] + YB.u[ak] + Bk) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const tk = this.stale;
        for (let ak = 0; ak < tk.length; ak += 4)
          if (tk[ak] === kk.i && tk[ak + 1] === kk.j && tk[ak + 2] === kk.k) return void(tk[ak + 3] = this.swept);
        if (16 === tk.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        tk.push(kk.i, kk.j, kk.k, this.swept)
      }
      writeStale() {
        const kk = this.swept,
          Fk = this.stale;
        this.staleAll && kk - this.staleAllSwept >= YB.l && (this.staleAll = !1, Fk.length = 0);
        let Bk = 0;
        for (let tk = 0; tk < Fk.length; tk += 4)
          if (kk - Fk[tk + 3] < YB.l) {
            for (let kk = 0; kk < 4; kk++) Fk[Bk + kk] = Fk[tk + kk];
            Bk += 4
          } Fk.length = Bk;
        const Rk = this.uniformInts;
        Rk[3] = this.staleAll ? 5 : Bk / 4;
        for (let tk = 0; tk < 4; tk++)
          for (let kk = 0; kk < 3; kk++) Rk[16 + 4 * tk + kk] = 4 * tk < Bk ? Fk[4 * tk + kk] * uF : 0
      }
      writeUniform() {
        const kk = this.uniformInts;
        let Fk = this.uniformWritten;
        if (Fk) {
          let Bk = !0;
          for (let Rk = 0; Rk < kk.length && Bk; Rk++) Bk = kk[Rk] === Fk[Rk];
          if (Bk) return
        }
        Fk ??= this.uniformWritten = new Int32Array(kk.length), Fk.set(kk), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(kk) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, kk)
      }
      computeVolume(kk, Fk, Bk) {
        const Rk = this.buildVolumePass();
        if (!Rk) return void(this.volumeHolds = null);
        const tk = (0, YB.x)(this.volumeHolds, kk);
        this.volumeHolds = kk;
        const ak = 1 === tk.length && tk[0].size.every(((kk, Fk) => kk === YB.u[Fk])),
          Xk = this.sweptChunk,
          bk = this.sweptLight,
          wk = Fk[0] !== bk[0] || Fk[1] !== bk[1] || Fk[2] !== bk[2],
          dk = Bk[0] !== Xk[0] || Bk[1] !== Xk[1] || Bk[2] !== Xk[2],
          sk = wk && sw(Fk, bk);
        if ((ak || this.written || dk || sk) && (this.fastLeft = YB.l), ak || this.written || wk || dk) {
          this.written = !1;
          for (let kk = 0; kk < 3; kk++) Xk[kk] = Bk[kk], bk[kk] = Fk[kk];
          this.sweepLeft = ak ? 0 : YB.l
        }
        if (ak ? this.swept += YB.l : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, tk.push(...(0, YB.B)(kk, this.slice)), this.slice = (this.slice + 1) % YB.l, this.swept++), 0 === tk.length) return;
        const Vk = (0, YB.E)(this.workData, Fk, tk);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Jk = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Ak = Jk.beginComputePass({
            label: "sun-shadow-volume"
          });
        Ak.setPipeline(Rk.pipeline), Ak.setBindGroup(OB.group, Rk.bindGroup), Ak.dispatchWorkgroups(Math.ceil(Vk / YB.n)), Ak.end(), this.device.queue.submit([Jk.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const kk = OB,
          Fk = GPUShaderStage.COMPUTE,
          Bk = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: kk.uniform,
              visibility: Fk,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: kk.jJ,
              visibility: Fk,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: kk.special,
              visibility: Fk,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: kk.work,
              visibility: Fk,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: kk.volume,
              visibility: Fk,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Rk = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: Bk,
            entries: [{
              binding: kk.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: kk.jJ,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: kk.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: kk.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: kk.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [Bk]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: EB()
            }),
            entryPoint: "main"
          }
        }).then((kk => {
          this.volumePass = {
            pipeline: kk,
            bindGroup: Rk
          }
        }), (kk => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(kk)}`)
        })), null
      }
      start(kk) {
        if (this.window) return this.window;
        const Fk = (kk, Fk) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * kk, Fk)
        };
        this.casters = new Bw(((kk, Bk) => {
          this.castersWritten = !0, Fk(kk, Bk)
        }), Vw);
        const Bk = new Xw(this.casters, ((kk, Fk) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * kk, Fk)
        }), Fk);
        return Bk.encoded = kk => {
          this.markStale(kk)
        }, kk.iJ.on("chunkAdded", (kk => {
          Bk.chunkAdded(kk)
        })), this.window = Bk, Bk
      }
    }
    var Aw = Bk(38334),
      ew = Bk(38339);
    const yw = 0,
      fw = 3,
      mw = 4,
      Ww = 5;

    function vw(kk, Fk, Bk, Rk) {
      kk.drawOffset(Fk, Rk + yw), Fk[Rk + fw] = kk.drawTime(), Bk[Rk + mw] = kk.ring.drawStart(), Bk[Rk + Ww] = kk.ring.drawCount()
    }
    const iw = `\n${fR}\n\nconst MAX_STOPS = ${ew.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${ew.b/4}>,\n\tcolor1: array<vec4f, ${ew.b}>,\n\tcolor2: array<vec4f, ${ew.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${ew.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${ew.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var Yw = Bk(41039);
    class ow {
      constructor(kk, Fk, Bk, Rk) {
        this.device = kk, this.system = Fk, this.frameIndex = Bk, this.bindings = Rk, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Yw.h)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (kk, Fk) => {
          this.device.queue.writeBuffer(this.ring, kk * ew.d * 4, this.system.ring.records, kk * ew.d, (Fk - kk) * ew.d)
        };
        const {
          name: tk
        } = Fk;
        this.ring = kk.createBuffer({
          label: `particles-${tk}`,
          size: Fk.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = kk.createBuffer({
          label: `particles-uniforms-${tk}`,
          size: 4 * ew.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(kk) {
        const Fk = (0, Yw.e)(this.system, this.uniformBits, kk);
        Fk && (this.uniformBits = Fk, this.device.queue.writeBuffer(this.uniforms, 0, Fk))
      }
      bind() {
        const {
          system: kk
        } = this, Fk = this.texture;
        (0, Yw.m)(kk, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${kk.name}`,
          size: [ew.g, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * ew.g
        }, [ew.g, 1]));
        const Bk = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === Fk.view && this.boundSampler === Fk.sampler && this.boundRamp === Bk || (this.boundView = Fk.view, this.boundSampler = Fk.sampler, this.boundRamp = Bk, this.bindGroup = this.device.createBindGroup({
          label: `particles-${kk.name}`,
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
            resource: Fk.sampler
          }, {
            binding: 3,
            resource: Fk.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: Bk
          }]
        }))
      }
      destroy() {
        var kk;
        this.ring.destroy(), this.uniforms.destroy(), null === (kk = this.ramp) || void 0 === kk || kk.destroy()
      }
    }
    class Lw {
      constructor(kk, Fk) {
        this.device = kk, this.resources = Fk, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, sF.b)();
        const Bk = kk.createBindGroupLayout({
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
        this.frameLayout = kk.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = kk.createPipelineLayout({
          bindGroupLayouts: [BF(kk), Bk, this.frameLayout]
        }), this.module = kk.createShaderModule({
          label: "particles",
          code: iw
        });
        const Rk = kk.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        kk.queue.writeTexture({
          texture: Rk
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: Bk,
          rampSampler: kk.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Rk.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (Fk, Bk) => (this.bindTarget(Bk), {
            renderable: this.renderable,
            pipeline: bF(kk, Bk),
            draw: kk => Bk === this.preparedTarget ? this.draw(kk) : 0
          })
        }
      }
      get hRk() {
        return this.systems.size
      }
      reset() {
        for (const kk of this.systems.keys()) kk.reset()
      }
      describePendingWork() {
        return (0, Aw.f)(this.systems.keys(), "Lite")
      }
      iH(kk, Fk) {
        const Bk = new Aw.c(kk, Fk, this);
        return this.systems.set(Bk, new ow(this.device, Bk, this.allocateFrameIndex(), this.bindings)), Bk
      }
      Z2(kk, Fk) {
        for (const Bk of this.systems.keys()) Bk.Z2(kk, Fk)
      }
      canDraw(kk) {
        const Fk = this.systems.get(kk),
          Bk = kk.texture ? this.resources.boundTexture(kk.texture) : null;
        if (!Fk || !Bk || !this.targetPipelines) return !1;
        if (Fk.texture = Bk, Fk.pipelines.length = 0, !Zt(kk.blendMode)) return this.warnOnce(`blend:${kk.blendMode}`, `particle blend mode ${kk.blendMode} is not drawn (${kk.name})`), !0;
        const Rk = (0, Mt.m)(kk.blendMode);
        for (const tk of Rk) {
          const kk = this.pipelineFor(tk);
          if (!1 === kk) return Fk.pipelines.length = 0, !0;
          kk && Fk.pipelines.push(kk)
        }
        return Fk.pipelines.length === Rk.length
      }
      disposeStopped(kk) {
        kk.dispose()
      }
      remove(kk) {
        const Fk = this.systems.get(kk);
        Fk && (this.systems.delete(kk), Fk.destroy(), this.freeFrameIndices.push(Fk.frameIndex))
      }
      prepare(kk) {
        const Fk = kk.animationRatio || 1;
        wF(this.renderable._worldCenter, kk, tF), this.preparedTarget = this.target, this.draws.length = 0;
        let Bk = 0;
        for (const Rk of this.systems.values()) {
          const kk = Rk.system;
          if (!kk.animateIfActive(Fk)) continue;
          if (kk.ring.takeUploads(Rk.upload), !kk.hasLiveParticles() || 0 === Rk.pipelines.length) continue;
          Rk.writeUniforms(this.warnOnce), Rk.bind();
          const tk = 64 * Rk.frameIndex;
          Rk.count = kk.ring.drawCount(), vw(kk, this.frameData, this.frameBits, tk), Bk = Math.max(Bk, tk + 64), this.draws.push(Rk)
        }
        Bk > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, Bk)
      }
      draw(kk) {
        let Fk = 0,
          Bk = null;
        for (const Rk of this.draws) {
          kk.setBindGroup(1, Rk.bindGroup), kk.setBindGroup(2, this.frameBindGroup, [256 * Rk.frameIndex]);
          for (const tk of Rk.pipelines) tk !== Bk && (kk.setPipeline(tk), Bk = tk), kk.draw(4, Rk.count), Fk++
        }
        return Fk
      }
      bindTarget(kk) {
        this.target = kk;
        const Fk = `${kk._colorFormat}|${kk._depthStencilFormat}|${kk._depthCompare}|${kk._sampleCount}`;
        let Bk = this.pipelines.get(Fk);
        Bk || (Bk = new Map, this.pipelines.set(Fk, Bk)), this.targetPipelines = Bk
      }
      pipelineFor(kk) {
        var Fk;
        const Bk = this.targetPipelines,
          Rk = Bk.get(kk);
        if (void 0 !== Rk) return Rk;
        Bk.set(kk, null);
        const tk = this.target,
          ak = kk === Mt.d,
          Xk = null !== (Fk = tk._depthCompare) && void 0 !== Fk ? Fk : RF;
        return this.device.createRenderPipelineAsync({
          label: `particles-${kk}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Ik({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: ak ? 1 : 0
            }
          }, tk, pt((0, Mt.j)(kk))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: tk._depthStencilFormat ? {
            format: tk._depthStencilFormat,
            depthCompare: Xk,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: tk._sampleCount
          }
        }).then((Fk => {
          Bk.set(kk, Fk)
        }), (Fk => {
          Bk.set(kk, !1), console.error("Lite particle pipeline failed", Fk), jt("particles", `blend-${kk}`, Fk)
        })), null
      }
      allocateFrameIndex() {
        const kk = this.freeFrameIndices.pop();
        if (void 0 !== kk) return kk;
        const Fk = this.nextFrameIndex++;
        if (64 * (Fk + 1) > this.frameData.length) {
          const kk = new Float32Array(2 * this.frameData.length);
          kk.set(this.frameData), this.frameData = kk, this.frameBits = new Uint32Array(kk.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Fk
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
    class Ow {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.lite = kk, this.canvas = Fk, this.info = Bk, this.resources = tk, this.rBk = !1, this.needPOTTextures = !1, this.X3 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Fk.width, this.renderHeight = Fk.height, this.caps = {
          maxTextureSize: Rk.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Rk.maxTextureArrayLayers
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
      setSize(kk, Fk) {
        if (this.renderWidth === kk && this.renderHeight === Fk) return !1;
        const Bk = this.renderWidth,
          Rk = this.renderHeight;
        this.renderWidth = kk, this.renderHeight = Fk;
        try {
          (0, hk.s)(this.lite, kk, Fk)
        } catch (tk) {
          if (tk instanceof DOMException && "InvalidStateError" === tk.name) {
            this.renderWidth = Bk, this.renderHeight = Rk;
            try {
              (0, hk.s)(this.lite, Bk, Rk)
            } catch {
              this.canvas.width = Bk, this.canvas.height = Rk
            }
            return console.warn("WebGPU could not allocate render targets for resize", kk, Fk, tk.message), !1
          }
          throw tk
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
      kY() {
        const kk = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : kk - this.lastFrameTime, this.lastFrameTime = kk
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(kk, Fk) {
        const Bk = document.createElement("canvas");
        return Bk.width = kk, Bk.height = Fk, Bk
      }
      K3(kk, Fk) {
        var Bk;
        return null !== (Bk = this.resources.K3.get(kk)) && void 0 !== Bk ? Bk : new pk(this.resources, kk, Fk)
      }
      atlasArray(kk, Fk, Bk) {
        return this.resources.atlasArray(kk, Fk, Bk)
      }
    }
    class Ew {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(kk) {
        this.fov = kk.fov, this.nearPlane = kk.near, this.farPlane = kk.far;
        const Fk = kk.worldMatrix;
        for (let Bk = 0; Bk < 16; Bk++)
          if (this.worldMatrix[Bk] !== Fk[Bk]) return this.worldMatrix.set(Fk), void this.worldMatrixVersion++
      }
    }
    class Sw {
      constructor(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
        let sk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = kk, this.ef = Fk, this.sceneTask = Bk, this.gpuDevice = Rk, this.terrain = tk, this.meshes = ak, this.particles = Xk, this.resources = bk, this.sunShadow = sk, this.vFk = void 0, this.backendName = "WebGPU (Lite)", this.A_ = void 0, this.modelMeshes = void 0, this.camera = new Ew, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Ck(Rk.lost), this.deviceLost = this.refusals.deviceLost, this.vFk = new Ow(kk, wk, dk, Rk.limits, bk), (0, Hk.I)({
          Hb: kk => {
            Uk(kk) && bk.textureSlot(kk)
          },
          loaded: kk => Uk(kk) ? bk.textureLoaded(kk) : null,
          canvasUpdated: (kk, Fk, Bk) => {
            Uk(kk) && bk.canvasUpdated(kk, Fk, Bk)
          }
        }), this.A_ = ak.A_, this.modelMeshes = ak.modelMeshes, Fk.camera = this.camera
      }
      get castsEntitySunShadows() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.sunShadow) || void 0 === Fk ? void 0 : Fk.tracesEntities) && void 0 !== kk && kk
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(kk) {
        this.modelMeshes.attach(kk.model, kk.sceneMirror);
        const Fk = kk.ef;
        this.setClearColour(Fk.clearColor.r, Fk.clearColor.g, Fk.clearColor.b), Fk.draw = () => {
          this.drawFrame(kk, Fk)
        }
      }
      render(kk) {
        try {
          this.vFk.kY(), kk.ef.render()
        } catch (Fk) {
          throw this.refusals.frameFailed(Fk), Fk
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var kk, Fk, Bk, Rk;
        const tk = [...this.particles.describePendingWork(), ...null !== (kk = null === (Fk = this.sunShadow) || void 0 === Fk ? void 0 : Fk.describePendingWork()) && void 0 !== kk ? kk : []],
          ak = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (Bk = this.terrain.sceneDepth) && void 0 !== Bk && Bk.compiling ? 1 : 0) + (null !== (Rk = this.terrain.shadowMask) && void 0 !== Rk && Rk.compiling ? 1 : 0);
        ak > 0 && tk.push(`${ak} Lite pipelines compiling`);
        const Xk = this.terrain.buffersAwaitingVerdict;
        Xk > 0 && tk.push(`${Xk} Lite terrain buffers awaiting their out-of-memory verdict`);
        const bk = this.resources.texturesLoading;
        return bk > 0 && tk.push(`${bk} Lite textures loading`), tk
      }
      prepareTexture(kk) {
        return null !== this.resources.boundTexture(kk) || this.resources.textureFailed(kk)
      }
      drawFrame(kk, Fk) {
        var Bk, Rk, tk, ak, Xk, bk;
        const wk = Vb(kk);
        this.camera.copyFromView(wk), this.setClearColour(wk.clearColour[0], wk.clearColour[1], wk.clearColour[2]), null === (Bk = this.sunShadow) || void 0 === Bk || Bk.prepare(kk.SJ, wk.eye, null !== (Rk = kk.SJ.ie) && void 0 !== Rk ? Rk : null), this.terrain.prepare(kk, wk), null === (tk = this.terrain.sceneDepth) || void 0 === tk || tk.setPlanes(wk.near, wk.far), null === (ak = this.terrain.shadowMask) || void 0 === ak || ak.prepare(wk), lX(this.sceneTask), this.meshes.prepare(Fk, wk, kk.model.earthSky, null !== (Xk = kk.SJ.ie) && void 0 !== Xk ? Xk : null), this.particles.prepare(wk);
        const dk = performance.now();
        this.resources.flushUploads(), null === (bk = this.sunShadow) || void 0 === bk || bk.traceEntities(this.meshes);
        try {
          (0, hk.r)(this.engine, this.lastFrameTime > 0 ? dk - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = dk
      }
      setClearColour(kk, Fk, Bk) {
        const Rk = this.ef.clearColor;
        Rk.r = kk, Rk.g = Fk, Rk.b = Bk, Rk.a = 1
      }
    }
    const Nw = "WebGPU device lost while Lite was starting";

    function Hw(kk, Fk) {
      return "object" === typeof kk && null !== kk ? Object.assign(kk, {
        startStep: Fk
      }) : kk
    }
    async function uw(kk, Fk) {
      const Bk = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!Bk) throw Hw(new Error("No WebGPU adapter"), "no_adapter");
      const Rk = Bk.info,
        tk = {
          vendor: (null === Rk || void 0 === Rk ? void 0 : Rk.vendor) || "unknown vendor",
          renderer: (null === Rk || void 0 === Rk ? void 0 : Rk.architecture) || "unknown renderer",
          version: (null === Rk || void 0 === Rk ? void 0 : Rk.description) || "unknown version"
        },
        ak = function(kk) {
          const Fk = {};
          for (const Bk in kk.limits) {
            const Rk = kk.limits[Bk];
            "number" === typeof Rk && (Fk[Bk] = Rk)
          }
          return Fk
        }(Bk);
      let Xk;
      kk.style.background = "black";
      try {
        Xk = await (0, hk.h)(kk, {
          msaaSamples: Fk.QFk ? 4 : 1,
          requiredLimits: ak,
          alphaMode: "premultiplied"
        })
      } catch (sk) {
        throw Hw(sk, "#47" === (null === (bk = sk) || void 0 === bk ? void 0 : bk.message) ? "no_adapter" : "device")
      }
      var bk;
      const wk = function(kk) {
        return kk._device
      }(Xk);
      let dk = null;
      wk.lost.then((kk => {
        dk = kk, console.error(`WebGPU device lost (${kk.reason}): ${kk.message}`)
      }));
      try {
        const Bk = await async function(kk, Fk, Bk, Rk, tk, ak) {
          const Xk = (0, qk.e)(kk),
            bk = new KX(kk, Fk),
            wk = new xb(Fk),
            dk = new HX(Fk, bk, (kk => function(kk, Fk) {
              for (const Rk of kF(kk)) {
                var Bk;
                if (Rk._targetSignature === Fk) return null !== (Bk = Rk._sceneBG) && void 0 !== Bk ? Bk : null
              }
              return null
            }(Xk, kk))),
            sk = new Lw(Fk, bk);
          for (const Ak of function(kk, Fk, Bk) {
              return [Fk.opaqueRenderable, kk.opaqueRenderable, kk.skyLastRenderable, Bk.renderable, Fk.transparentRenderable, kk.transparentRenderable, kk.frontRenderable]
            }(dk, wk, sk)) Qk(Xk, Ak);
          const Vk = function(kk) {
            for (const Fk of kF(kk))
              if ("ef" === Fk.name) return Fk;
            throw new Error("Lite: the scene has no render task named scene")
          }(Xk);
          tk && wk.installSceneDepth(Vk, kk);
          const Jk = ak ? new Jw(Fk, ak.entities) : null;
          wk.sunShadow = Jk, Jk && null !== ak && void 0 !== ak && ak.entities && (wk.shadowMask = new Sb(Fk, Vk, kk, wk));
          return dk.sunShadow = Jk, await (0, qk.f)(Xk), new Sw(kk, Xk, Vk, Fk, wk, dk, sk, bk, Bk, Rk, Jk)
        }(Xk, wk, kk, tk, Fk.sceneDepth, Fk.sunShadow);
        if (null !== dk) {
          const {
            reason: kk,
            message: Fk
          } = dk;
          throw Object.assign(new Error(`${Nw} (${kk}): ${Fk}`), {
            fallbackReason: Nw
          })
        }
        return Bk
      } catch (sk) {
        throw wk.destroy(), null === dk ? sk : Hw(sk, "device")
      }
    }
  },
  40292: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      D: () => ek,
      e: () => tk,
      g: () => Rk,
      h: () => Jk,
      j: () => sk,
      m: () => fk,
      p: () => ak,
      r: () => bk,
      s: () => wk,
      u: () => Xk,
      v: () => yk,
      z: () => Ak
    });
    const Rk = 3,
      tk = 0,
      ak = 1,
      Xk = 2,
      bk = {
        uniform: 3,
        jJ: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      wk = 10,
      dk = "BloxdPackInputs",
      sk = "bloxdPackInputs",
      Vk = [{
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
      Jk = 80;

    function Ak() {
      const kk = Vk.map((kk => {
        let {
          name: Fk,
          type: Bk
        } = kk;
        return `    ${Fk}: ${Bk},\n`
      })).join("");
      return `struct ${dk} {\n${kk}}\n@group(${Rk}) @binding(${tk}) var<uniform> ${sk}: ${dk};\n`
    }

    function ek(kk, Fk) {
      const Bk = new DataView(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Jk),
        [Rk, tk, ak, Xk, bk, wk] = Vk;
      Bk.setFloat32(Rk.offset, Fk.seconds, !0), Bk.setUint32(tk.offset, Fk.lit ? 1 : 0, !0);
      for (let dk = 0; dk < 3; dk++) Bk.setInt32(ak.offset + 4 * dk, Fk.renderOffset[dk], !0), Bk.setFloat32(Xk.offset + 4 * dk, Fk.w6[dk], !0), Bk.setFloat32(bk.offset + 4 * dk, Fk.eyePosition[dk], !0), Bk.setFloat32(wk.offset + 4 * dk, Fk.shadowDirection[dk], !0)
    }

    function yk(kk) {
      const Fk = new Uint32Array(Math.max(1, kk.length));
      return kk.forEach(((kk, Bk) => {
        let {
          id: Rk,
          rotation: tk
        } = kk;
        Fk[Bk] = 65535 & Rk | (3 & tk) << 16
      })), Fk
    }
    const fk = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);